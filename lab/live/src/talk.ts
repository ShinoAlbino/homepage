import { SITE_CONFIG } from './config';
import { getJSTDate, getJSTHour, inDateRange, inHours, matchesSeason } from './schedule';
import type { Character, Program, Serifu, Weather } from './types';
import type { UI } from './ui';

const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const rand = (min: number, max: number) => min + Math.random() * (max - min);

/** conditions 判定に使う現在の文脈 */
interface TalkContext {
  hour: number;
  month: number;
  day: number;
  weather: Weather | null;
  visitor: 'first' | 'repeat' | 'any';
}

/** 重み付き抽選 */
function weightedPick<T extends { weight?: number }>(items: T[]): T | null {
  if (items.length === 0) return null;
  const total = items.reduce((s, i) => s + (i.weight ?? 1), 0);
  let r = Math.random() * total;
  for (const i of items) {
    r -= i.weight ?? 1;
    if (r <= 0) return i;
  }
  return items[items.length - 1];
}

/**
 * 音声まわり。AudioContextは入室ゲートのクリックで生成する
 * (iOS/Chromeの自動再生制限アンロック。仕様§3-1)。
 */
export class AudioManager {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private bgmGain: GainNode | null = null;
  private bgmEl: HTMLAudioElement | null = null;
  private currentBgm: string | null = null;
  private muted: boolean;

  constructor() {
    this.muted = localStorage.getItem(SITE_CONFIG.storage.muted) === '1';
  }

  unlock(): void {
    if (this.ctx) return;
    const AC: typeof AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 1;
    this.master.connect(this.ctx.destination);
    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.value = 0;
    this.bgmGain.connect(this.master);
    void this.ctx.resume();
  }

  isMuted(): boolean {
    return this.muted;
  }

  toggleMuted(): void {
    this.muted = !this.muted;
    localStorage.setItem(SITE_CONFIG.storage.muted, this.muted ? '1' : '0');
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(this.muted ? 0 : 1, this.ctx.currentTime, 0.05);
    }
  }

  /** 番組BGMをクロスフェードで切替。null/404は無音で継続(BGMは任意アセット) */
  playBgm(file: string | null): void {
    if (!this.ctx || !this.bgmGain) return;
    const url = file ? SITE_CONFIG.paths.bgmDir + file : null;
    if (url === this.currentBgm) return;
    this.currentBgm = url;

    // フェードアウトして停止
    const old = this.bgmEl;
    if (old) {
      this.bgmGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.4);
      setTimeout(() => {
        old.pause();
        old.src = '';
      }, 1500);
      this.bgmEl = null;
    }
    if (!url) return;

    const el = new Audio(url);
    el.loop = true;
    el.preload = 'auto';
    el.addEventListener(
      'error',
      () => {
        // BGM未配置(404)でも動作継続
        if (this.bgmEl === el) this.bgmEl = null;
      },
      { once: true },
    );
    el.addEventListener(
      'canplaythrough',
      () => {
        if (this.currentBgm !== url || !this.ctx || !this.bgmGain) return;
        const src = this.ctx.createMediaElementSource(el);
        src.connect(this.bgmGain);
        void el.play();
        this.bgmEl = el;
        // ゆっくりフェードイン
        this.bgmGain.gain.setTargetAtTime(0.32, this.ctx.currentTime, 1.2);
      },
      { once: true },
    );
  }

  /**
   * セリフ音声を再生し、AnalyserNodeのRMSを平滑化してonLevelへ毎フレーム渡す
   * (リップシンク。仕様§4)。ファイルが無い場合はnullを返しテキストのみ進行。
   */
  playVoice(file: string, onLevel: (v: number) => void): Promise<{ ended: Promise<void> } | null> {
    return new Promise((resolve) => {
      if (!this.ctx || !this.master) {
        resolve(null);
        return;
      }
      const ctx = this.ctx;
      const master = this.master;
      const el = new Audio(SITE_CONFIG.paths.voiceDir + file);
      el.preload = 'auto';

      el.addEventListener('error', () => resolve(null), { once: true });
      el.addEventListener(
        'canplaythrough',
        () => {
          const src = ctx.createMediaElementSource(el);
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 512;
          src.connect(analyser);
          analyser.connect(master);

          const buf = new Uint8Array(analyser.fftSize);
          const { threshold, gain, smoothing } = SITE_CONFIG.lipsync;
          let smooth = 0;
          let raf = 0;
          const tick = () => {
            analyser.getByteTimeDomainData(buf);
            let sum = 0;
            for (let i = 0; i < buf.length; i++) {
              const v = (buf[i] - 128) / 128;
              sum += v * v;
            }
            const rms = Math.sqrt(sum / buf.length);
            const target = rms < threshold ? 0 : Math.min(1, (rms - threshold) * gain);
            smooth = smooth * smoothing + target * (1 - smoothing);
            onLevel(smooth);
            raf = requestAnimationFrame(tick);
          };
          tick();

          const ended = new Promise<void>((done) => {
            el.addEventListener(
              'ended',
              () => {
                cancelAnimationFrame(raf);
                onLevel(0);
                done();
              },
              { once: true },
            );
          });

          void el.play();
          resolve({ ended });
        },
        { once: true },
      );
    });
  }
}

/**
 * セリフDBの読込と番組進行(仕様§5)。
 * 入室時greeting → 25〜60秒間隔の自動トーク(idle/番組カテゴリ/頻度制限付きpromo)。
 */
export class TalkEngine {
  private serifu: Serifu[] = [];
  private recent: string[] = [];
  private lastPromoAt = 0;
  private speaking = false;
  private timer: number | null = null;
  private playedHandlers: Array<(id: string) => void> = [];
  private isFirstVisit: boolean;

  constructor(
    private character: Character,
    private ui: UI,
    private audio: AudioManager,
    private getProgram: () => Program,
    private getWeather: () => Weather | null,
  ) {
    this.isFirstVisit = localStorage.getItem(SITE_CONFIG.storage.visited) !== '1';
  }

  async load(): Promise<void> {
    try {
      const res = await fetch(SITE_CONFIG.paths.serifu);
      if (res.ok) {
        const json = (await res.json()) as unknown;
        // 新形式(トップレベル配列)と旧形式({serifu:[...]})の両対応
        this.serifu = Array.isArray(json)
          ? (json as Serifu[])
          : ((json as { serifu?: Serifu[] }).serifu ?? []);
      }
    } catch (e) {
      console.warn('[talk] serifu.json の読込に失敗:', e);
    }
  }

  /** セリフ再生完了イベント(コメントのreplyTo連動に使用) */
  onPlayed(handler: (id: string) => void): void {
    this.playedHandlers.push(handler);
  }

  /** 入室時の挨拶: 時間帯 + 初回/リピーター判定(localStorage) */
  async greet(): Promise<void> {
    const visitor = this.isFirstVisit ? 'first' : 'repeat';
    const ctx = this.buildContext(visitor);
    let pool = this.serifu.filter(
      (s) => s.category === 'greeting' && this.matchConditions(s, ctx),
    );
    if (pool.length === 0) {
      pool = this.serifu.filter((s) => s.category === 'greeting');
    }
    localStorage.setItem(SITE_CONFIG.storage.visited, '1');
    const s = weightedPick(pool);
    if (s) await this.speak(s);
  }

  /** 自動トークループ開始 */
  start(): void {
    this.scheduleNext();
  }

  stop(): void {
    if (this.timer !== null) clearTimeout(this.timer);
    this.timer = null;
  }

  /** クリック/タップ反応。再生中は無視(連打ロック。仕様§4) */
  requestClickTalk(): void {
    if (this.speaking) return;
    const ctx = this.buildContext('any');
    const isClickCandidate = (s: Serifu) => s.category === 'click' || s.category === 'trivia';
    const pool = this.serifu.filter(
      (s) => isClickCandidate(s) && this.matchConditions(s, ctx) && !this.recent.includes(s.id),
    );
    const s = weightedPick(pool) ?? weightedPick(this.serifu.filter(isClickCandidate));
    if (s) void this.speak(s);
  }

  private scheduleNext(): void {
    const { minIntervalMs, maxIntervalMs } = SITE_CONFIG.talk;
    this.timer = window.setTimeout(() => {
      void this.autoTalk().finally(() => this.scheduleNext());
    }, rand(minIntervalMs, maxIntervalMs));
  }

  private async autoTalk(): Promise<void> {
    if (this.speaking) return;
    const program = this.getProgram();
    const ctx = this.buildContext('any');
    const promoReady = Date.now() - this.lastPromoAt > SITE_CONFIG.talk.promoCooldownMs;

    const isCandidate = (s: Serifu) =>
      (s.category === 'idle' ||
        s.category === 'trivia' || // 豆知識。idle自動流しにも混ざる(クリック時と共通プール)
        s.category === 'anomaly' || // 異常検知ログ。weightが低く自然に極低頻度になる
        s.category === `program:${program.id}` ||
        (s.category === 'promo' && promoReady)) &&
      this.matchConditions(s, ctx);

    // 直近N件は再抽選で回避。全滅したら回避条件を緩める
    let pool = this.serifu.filter((s) => isCandidate(s) && !this.recent.includes(s.id));
    if (pool.length === 0) pool = this.serifu.filter(isCandidate);

    const s = weightedPick(pool);
    if (!s) return;
    if (s.category === 'promo') this.lastPromoAt = Date.now();
    await this.speak(s);
  }

  /** 現在時刻・日付・天候・visitorから判定文脈を組む */
  private buildContext(visitor: 'first' | 'repeat' | 'any'): TalkContext {
    const { month, day } = getJSTDate();
    return { hour: getJSTHour(), month, day, weather: this.getWeather(), visitor };
  }

  /** conditions を AND 判定。無指定フィールドは常に真 */
  private matchConditions(s: Serifu, ctx: TalkContext): boolean {
    const c = s.conditions;
    if (!c) return true;
    if (c.hourJST && !inHours(ctx.hour, c.hourJST)) return false;
    if (c.dateJST && !inDateRange(ctx.month, ctx.day, c.dateJST)) return false;
    if (c.season && !matchesSeason(c.season, ctx.month, ctx.day)) return false;
    // weather指定かつ'any'でない場合、現在天候と一致が必要(取得失敗=nullなら候補外)
    if (c.weather && c.weather !== 'any' && ctx.weather !== c.weather) return false;
    if (c.visitor && c.visitor !== 'any' && ctx.visitor !== 'any' && c.visitor !== ctx.visitor) {
      return false;
    }
    return true;
  }

  /** 1セリフの再生: 表情→モーション→音声(あれば)+テロップ→完了通知 */
  private async speak(s: Serifu): Promise<void> {
    this.speaking = true;
    try {
      void this.character.setExpression(s.expression ?? 'neutral');
      if (s.motion) this.character.playMotion(s.motion); // 耳モーション発火(未対応値は無視)

      let voice: { ended: Promise<void> } | null = null;
      if (s.voice) {
        voice = await this.audio.playVoice(s.voice, (v) => this.character.setMouthOpen(v));
      }

      // 音声が取得できない場合(未配置/404)は、文字送りの間だけ口パクフラップを出す
      const flapping = !voice;
      if (flapping) this.character.setTalking(true);

      // 音声再生と同時に文字送り開始。音声が無ければ文字送りのみ(仕様§3-3)
      // anomaly は「異常検知ログ」風に見た目を差別化する
      await this.ui.showTelop(s.text, SITE_CONFIG.talk.charMs, s.category === 'anomaly' ? 'anomaly' : undefined);
      if (voice) await voice.ended;
      if (flapping) this.character.setTalking(false);

      this.remember(s.id);
      this.playedHandlers.forEach((h) => h(s.id));

      await delay(1800); // 読み切り猶予
      this.ui.clearTelop();
      this.character.setMouthOpen(0);
    } finally {
      this.character.setTalking(false);
      this.speaking = false;
    }
  }

  private remember(id: string): void {
    this.recent.push(id);
    while (this.recent.length > SITE_CONFIG.talk.recentAvoid) this.recent.shift();
  }
}
