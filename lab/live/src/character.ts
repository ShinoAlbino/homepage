import { SITE_CONFIG } from './config';
import type { Character } from './types';

const rand = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Live2Dモデルが読み込めた場合の此芽制御。
 * まばたきはpixi-live2d-displayの自動処理、呼吸/簡易アイドル/追従/口パクは
 * ここで毎フレームパラメータを直接上書きする(motion3が無い前提)。
 */
export class Live2DKonome implements Character {
  readonly kind = 'live2d' as const;

  private t = 0;
  private mouth = 0;
  private fx = 0; // 追従の現在値(-1..1)
  private fy = 0;
  private tfx = 0; // 追従の目標値
  private tfy = 0;
  private tapHandlers: Array<() => void> = [];
  private currentExpression = 'neutral';

  // 自動まばたき: model3.jsonのEyeBlinkグループが空でライブラリ側が効かないため自前で行う
  private eyeOpen = 1; // 1=開 0=閉
  private blinking = false;
  private blinkT = 0;
  private blinkCountdown = rand(1.5, 4); // 次のまばたきまでの秒数

  // 発話中の口パク(音声が無い時のフラップ)
  private talking = false;

  // 追従がしばらく無ければ正面へ戻すためのタイムスタンプ(ms)
  private lastFocusAt = 0;

  // 耳モーション(ParamEarL/ParamEarR を動かす)
  private motionName: string | null = null;
  private motionT = 0;
  private earL = 0;
  private earR = 0;
  private earIdleCountdown = rand(2, 8); // 自発的にぴこっと動くまでの秒数

  constructor(
    private app: any,
    private model: any,
    private PIXI: any,
    container: HTMLElement,
  ) {
    this.app.ticker.add(this.tick);
    container.addEventListener('click', () => {
      this.tapHandlers.forEach((h) => h());
    });
  }

  private tick = () => {
    const dtMs = this.app.ticker.deltaMS;
    // autoUpdate=falseで生成しているため手動更新(順序を保証し、後段の上書きを有効にする)
    this.model.update(dtMs);
    this.t += dtMs / 1000;

    // カーソル/タッチがしばらく無ければ、追従目標を正面(0,0)へ戻す
    if (performance.now() - this.lastFocusAt > Live2DKonome.FOCUS_IDLE_MS) {
      this.tfx = 0;
      this.tfy = 0;
    }
    // 追従は控えめ: 毎フレーム5%だけ目標へ寄せる
    this.fx += (this.tfx - this.fx) * 0.05;
    this.fy += (this.tfy - this.fy) * 0.05;

    const cm = this.model.internalModel?.coreModel;
    if (!cm?.setParameterValueById) return;

    const set = (id: string, v: number) => {
      try {
        cm.setParameterValueById(id, v);
      } catch {
        /* モデルに存在しないパラメータは無視 */
      }
    };

    // 呼吸(sin波)
    set('ParamBreath', (Math.sin((this.t * 2 * Math.PI) / 3.2) + 1) / 2);
    // 簡易アイドル + マウス追従
    set('ParamAngleX', Math.sin(this.t * 0.5) * 4 + this.fx * 12);
    set('ParamAngleY', this.fy * -10);
    set('ParamAngleZ', Math.sin(this.t * 0.33) * 3 - this.fx * 3);
    set('ParamBodyAngleX', this.fx * 4);
    set('ParamEyeBallX', this.fx * 0.8);
    set('ParamEyeBallY', this.fy * -0.6);

    // 自動まばたき: ParamEyeLOpen/ROpen を毎フレーム更新(通常は1=開、まばたき時に0へ)
    this.updateBlink(dtMs / 1000);
    set('ParamEyeLOpen', this.eyeOpen);
    set('ParamEyeROpen', this.eyeOpen);

    // 口: リップシンク(talk.tsのAnalyser)優先。音声が無い発話中はフラップで口パク
    let mouthOpen = this.mouth;
    if (this.talking) {
      const flap =
        (Math.sin(this.t * 16) * 0.5 + 0.5) * (0.35 + (Math.sin(this.t * 5.5) * 0.5 + 0.5) * 0.5);
      mouthOpen = Math.max(mouthOpen, flap);
    }
    set('ParamMouthOpenY', mouthOpen);

    // 耳モーション: ParamEarL/ParamEarR を毎フレーム適用(通常は0=平常)
    this.updateEarMotion(dtMs / 1000);
    set('ParamEarL', this.earL);
    set('ParamEarR', this.earR);
  };

  /**
   * 耳モーションを進める。twitch=ぴくぴくと数回の減衰振動、perk=立てて保持し戻す。
   * モーション未再生中は、セリフやクリックが無くても時々ひとりでにぴこっと動かす。
   * ParamEarL/ParamEarR の正負の向きはリグ依存。想定と逆なら符号を反転する。
   */
  private updateEarMotion(dt: number): void {
    // 未再生中: 自発ぴこのカウントダウン。0になったらランダムな耳モーションを発火
    if (!this.motionName) {
      this.earIdleCountdown -= dt;
      if (this.earIdleCountdown <= 0) {
        const r = Math.random();
        // 片耳ぴく主体＋2連続ぴくぴく、たまに両耳ぴく／両耳を立てる
        this.motionName =
          r < 0.3
            ? 'ear_twitch_l'
            : r < 0.6
              ? 'ear_twitch_r'
              : r < 0.75
                ? 'ear_twitch'
                : r < 0.92
                  ? 'ear_twitch2'
                  : 'ear_perk';
        this.motionT = 0;
      } else {
        this.earL = 0;
        this.earR = 0;
        return;
      }
    }
    this.motionT += dt;
    const perk = this.motionName === 'ear_perk';
    const double = this.motionName === 'ear_twitch2';
    const dur = perk ? 1.0 : double ? 1.15 : 0.7; // 以前より長め(短すぎ対策)
    const p = this.motionT / dur;
    if (p >= 1) {
      this.motionName = null;
      this.earL = 0;
      this.earR = 0;
      this.earIdleCountdown = rand(2, 8); // 次の自発ぴこまでの間隔
      return;
    }
    let v: number;
    if (perk) {
      // 0→1に立ててしばらく保持し、後半で戻す(音のほうへ耳を向ける)
      v = p < 0.18 ? p / 0.18 : p < 0.7 ? 1 : 1 - (p - 0.7) / 0.3;
    } else if (double) {
      // 2連続ぴくぴく: ぴくっ→小休止→ぴくっ(それぞれ0→山→0の単発)
      const flick = (x: number) => Math.sin(x * Math.PI) * 0.9;
      v = p < 0.38 ? flick(p / 0.38) : p < 0.52 ? 0 : p < 0.9 ? flick((p - 0.52) / 0.38) : 0;
    } else {
      // ぴくぴく: 減衰する振動(約2往復)。以前より往復を増やして視認しやすく
      v = Math.sin(p * Math.PI * 4) * (1 - p) * 0.9;
    }
    // 左右どちらを動かすか(ear_twitch_l / _r で片耳、それ以外は両耳)
    this.earL = this.motionName === 'ear_twitch_r' ? 0 : v;
    this.earR = this.motionName === 'ear_twitch_l' ? 0 : v;
  }

  // まばたきの各フェーズ長(秒)。閉→保持→開。保持を挟むことで確実に閉じ切って見える
  private static readonly BLINK_CLOSE = 0.1;
  private static readonly BLINK_HOLD = 0.08;
  private static readonly BLINK_OPEN = 0.16;

  // 追従が無くなってから正面へ戻し始めるまでの時間(ms)
  private static readonly FOCUS_IDLE_MS = 1800;

  /** まばたき状態を進める。約1.8〜5秒間隔で「閉じる→閉じたまま保持→開く」 */
  private updateBlink(dt: number): void {
    if (this.blinking) {
      this.blinkT += dt;
      const close = Live2DKonome.BLINK_CLOSE;
      const hold = Live2DKonome.BLINK_HOLD;
      const open = Live2DKonome.BLINK_OPEN;
      if (this.blinkT < close) {
        // 1→0 で閉じる
        this.eyeOpen = 1 - this.blinkT / close;
      } else if (this.blinkT < close + hold) {
        // 閉じたまま保持(必ず数フレーム 0 が描画される)
        this.eyeOpen = 0;
      } else if (this.blinkT < close + hold + open) {
        // 0→1 で開く
        this.eyeOpen = (this.blinkT - close - hold) / open;
      } else {
        this.blinking = false;
        this.eyeOpen = 1;
        this.blinkCountdown = rand(1.8, 5);
      }
    } else {
      this.blinkCountdown -= dt;
      if (this.blinkCountdown <= 0) {
        this.blinking = true;
        this.blinkT = 0;
      }
    }
  }

  setMouthOpen(v: number): void {
    this.mouth = Math.max(0, Math.min(1, v));
  }

  setTalking(on: boolean): void {
    this.talking = on;
    if (!on) this.mouth = 0;
  }

  playMotion(name: string): void {
    // 対応する耳モーションのみ受け付ける。未対応値は無視(テキストは通常再生)
    if (
      name === 'ear_twitch' ||
      name === 'ear_twitch2' ||
      name === 'ear_twitch_l' ||
      name === 'ear_twitch_r' ||
      name === 'ear_perk'
    ) {
      this.motionName = name;
      this.motionT = 0;
    }
  }

  /**
   * 表情切替の受け口。
   * 1) model3.jsonにExpressionが定義されていればそれを使用
   * 2) 無ければテクスチャアトラス差し替え方式(モデルガイド§4):
   *    model/konome/texture_00_{name}.png が存在すれば実行時にPIXI.Textureを差し替える
   * v1で使用するのはneutralのみ。
   */
  async setExpression(name: string): Promise<void> {
    if (!name || name === this.currentExpression) return;
    this.currentExpression = name;

    try {
      const applied = await this.model.expression?.(name);
      if (applied) return;
    } catch {
      /* Expression未定義なら次の方式へ */
    }

    if (name === 'neutral') return; // 基本テクスチャに戻す処理はv2で対応

    try {
      const url = `model/konome/texture_00_${name}.png`;
      const head = await fetch(url, { method: 'HEAD' });
      if (!head.ok) return;
      const tex = await this.PIXI.Texture.fromURL(url);
      const textures: any[] | undefined = this.model.textures;
      if (textures && textures.length > 0) {
        textures[0] = tex;
        // 次フレームの描画で新テクスチャがバインドされる
        this.model.internalModel?.updateWebGLContext?.(
          this.app.renderer.gl,
          (this.app.renderer as any).CONTEXT_UID ?? 0,
        );
      }
    } catch {
      /* 差し替えに失敗してもneutralのまま継続(機能停止させない) */
    }
  }

  focus(nx: number, ny: number): void {
    this.tfx = Math.max(-1, Math.min(1, nx));
    this.tfy = Math.max(-1, Math.min(1, ny));
    this.lastFocusAt = performance.now();
  }

  onTap(handler: () => void): void {
    this.tapHandlers.push(handler);
  }

  dispose(): void {
    this.app.ticker.remove(this.tick);
    this.app.destroy(true, { children: true, texture: true, baseTexture: true });
  }
}

/**
 * モデル未配置/WebGL不可/Core未読込時のフォールバック。
 * fallback.png + CSSアニメで画面を成立させ、機能は全て継続する(口パクのみ省略)。
 */
export class FallbackKonome implements Character {
  readonly kind = 'fallback' as const;

  private img: HTMLImageElement;
  private tapHandlers: Array<() => void> = [];

  constructor(container: HTMLElement) {
    this.img = document.createElement('img');
    this.img.src = SITE_CONFIG.paths.fallbackImage;
    this.img.alt = '此芽(観測者) — モデル準備中';
    this.img.className = 'fallback-konome';
    this.img.draggable = false;
    container.appendChild(this.img);
    container.addEventListener('click', () => {
      this.img.classList.remove('fallback-bounce');
      // reflowで再生し直し
      void this.img.offsetWidth;
      this.img.classList.add('fallback-bounce');
      this.tapHandlers.forEach((h) => h());
    });
  }

  setMouthOpen(_v: number): void {
    /* 静止画のため口パクは省略(仕様) */
  }

  setTalking(_on: boolean): void {
    /* 静止画のため口パクは省略(仕様) */
  }

  playMotion(_name: string): void {
    /* 静止画のため耳モーションは省略 */
  }

  async setExpression(_name: string): Promise<void> {
    /* fallback時は表情なし */
  }

  focus(nx: number, ny: number): void {
    // ごくわずかに視線方向へ寄る
    this.img.style.transform = `translate(${nx * 6}px, ${ny * 4}px)`;
  }

  onTap(handler: () => void): void {
    this.tapHandlers.push(handler);
  }

  dispose(): void {
    this.img.remove();
  }
}
