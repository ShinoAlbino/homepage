import './style.css';
import { SITE_CONFIG } from './config';
import { createStage } from './stage';
import { AudioManager, TalkEngine } from './talk';
import { CommentFeed } from './comments';
import { UI } from './ui';
import { findNextProgram, findProgram, getJSTHour } from './schedule';
import { fetchWeather } from './weather';
import type { Program, ScheduleDB, Weather } from './types';

// v2でPages Functions(コメント投稿/限定会話API)を有効化する際の分岐用(仕様§9)
export const API_ENABLED = SITE_CONFIG.apiEnabled;

async function boot(): Promise<void> {
  const ui = new UI();
  const audio = new AudioManager();

  // 番組表の読込(失敗時は単一のデフォルト番組で継続)
  let schedule: ScheduleDB = {
    programs: [{ id: 'default', name: '観測中', hours: [0, 24], bgm: null }],
  };
  try {
    const res = await fetch(SITE_CONFIG.paths.schedule);
    if (res.ok) schedule = (await res.json()) as ScheduleDB;
  } catch (e) {
    console.warn('[main] schedule.json の読込に失敗:', e);
  }

  let currentProgram: Program = findProgram(schedule, getJSTHour());
  const getProgram = () => currentProgram;

  // 天候(Open-Meteo)。取得失敗時はnullのまま=weather条件付きセリフは候補外になる。
  // 起動をブロックしないよう非同期で取得し、定期的に更新する。
  let currentWeather: Weather | null = null;
  const getWeather = () => currentWeather;
  const refreshWeather = () => {
    void fetchWeather().then((w) => {
      currentWeather = w;
    });
  };
  refreshWeather();
  window.setInterval(refreshWeather, SITE_CONFIG.weather.refreshMs);

  const refreshProgramUI = () => {
    const hour = getJSTHour();
    ui.setProgram(currentProgram, findNextProgram(schedule, hour));
  };
  refreshProgramUI();

  ui.bindVolume(
    () => audio.isMuted(),
    () => audio.toggleMuted(),
  );

  // 入室ゲート(仕様§3-1): クリックで音声アンロック→BGM→挨拶→ループ開始
  ui.onEnter(() => {
    void (async () => {
      audio.unlock();

      const character = await createStage(ui.stageEl);

      // マウス/タッチ追従。追従感を画面サイズ・アスペクトに依存させないため、
      // 縦横とも「高さ」を基準に正規化する(モデルのスケール基準=高さと一致させ、
      // 画面が横長でも縦長でも一定の追従感になる)。中心からの距離を高さの半分で割る。
      ui.stageEl.addEventListener('pointermove', (e) => {
        const rect = ui.stageEl.getBoundingClientRect();
        const half = (rect.height || 1) * 0.5;
        const nx = (e.clientX - (rect.left + rect.width / 2)) / half;
        const ny = (e.clientY - (rect.top + rect.height / 2)) / half;
        character.focus(nx, ny); // focus内で-1..1にクランプ
      });

      const talk = new TalkEngine(character, ui, audio, getProgram, getWeather);
      const comments = new CommentFeed(ui);
      await Promise.all([talk.load(), comments.load()]);

      talk.onPlayed((id) => comments.notifySerifuPlayed(id));
      character.onTap(() => talk.requestClickTalk());

      // JST番組表: 切替監視(30秒ごと)。BGM・ヘッダー番組名・セリフ抽選が変わる(仕様§3-7)
      audio.playBgm(currentProgram.bgm);
      window.setInterval(() => {
        const next = findProgram(schedule, getJSTHour());
        if (next.id !== currentProgram.id) {
          currentProgram = next;
          refreshProgramUI();
          audio.playBgm(next.bgm);
        }
      }, 30_000);

      await talk.greet();
      talk.start();
      comments.start();
    })();
  });
}

void boot();
