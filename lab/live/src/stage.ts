import { SITE_CONFIG } from './config';
import { FallbackKonome, Live2DKonome } from './character';
import type { Character } from './types';

/**
 * ステージ初期化。
 * Live2Dが使える条件(Cubism Core読込済み + WebGL可 + model3.json存在)が
 * 揃えばLive2D、揃わなければfallback.pngに自動切替(仕様§4/§8)。
 */
export async function createStage(container: HTMLElement): Promise<Character> {
  if (await canUseLive2D()) {
    try {
      return await createLive2DStage(container);
    } catch (e) {
      console.warn('[stage] Live2D初期化に失敗。fallbackに切替えます:', e);
    }
  }
  return new FallbackKonome(container);
}

async function canUseLive2D(): Promise<boolean> {
  // Cubism Core(script タグ)が読めていない → fallback
  if (!(window as any).Live2DCubismCore) return false;
  if (!isWebGLAvailable()) return false;

  // モデルが未配置(404)ならfallback。devサーバのSPAフォールバック(HTML応答)も除外
  try {
    const res = await fetch(SITE_CONFIG.paths.model, { method: 'HEAD' });
    if (!res.ok) return false;
    const ct = res.headers.get('content-type') ?? '';
    if (ct.includes('text/html')) return false;
    return true;
  } catch {
    return false;
  }
}

function isWebGLAvailable(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

async function createLive2DStage(container: HTMLElement): Promise<Character> {
  const PIXI: any = await import('pixi.js');
  // pixi-live2d-displayはwindow.PIXIを参照する。cubism4エントリのimportより
  // 前にグローバル登録しておく必要がある。
  (window as any).PIXI = PIXI;
  const live2d: any = await import('pixi-live2d-display/cubism4');
  const { Live2DModel } = live2d;

  // Pixiのtickerクラスをlive2d側へ登録。モデル生成・描画開始より前に行う
  // (登録漏れ時にRendererとモデルのフレーム管理がずれ、_currentFrameNo undefined を招く)。
  Live2DModel.registerTicker(PIXI.Ticker);

  const isMobile = matchMedia('(max-width: 860px)').matches;
  const dpr = Math.min(
    window.devicePixelRatio || 1,
    isMobile ? SITE_CONFIG.render.mobileMaxDpr : SITE_CONFIG.render.desktopMaxDpr,
  );

  const canvas = document.createElement('canvas');
  canvas.className = 'live2d-canvas';
  container.appendChild(canvas);

  // autoStart:false → モデルをstageへ載せ終えるまでrenderループを開始しない。
  // これによりWebGLコンテキストがモデルに登録される前に_renderが走るのを防ぐ。
  const app = new PIXI.Application({
    view: canvas,
    resizeTo: container,
    backgroundAlpha: 0,
    antialias: true,
    resolution: dpr,
    autoDensity: true,
    autoStart: false,
  });

  // autoUpdateは切り、character.ts側で決定論的に更新する。
  // autoInteractはv0.5.0で廃止 → autoHitTest / autoFocus に分割(どちらも手動制御のためfalse)。
  const model = await Live2DModel.from(SITE_CONFIG.paths.model, {
    autoUpdate: false,
    autoHitTest: false,
    autoFocus: false,
  });

  // ロード完了(await)後にstageへ追加し、フィットさせてから描画を始める。
  app.stage.addChild(model);

  const fit = () => {
    const w = app.renderer.width / app.renderer.resolution;
    const h = app.renderer.height / app.renderer.resolution;
    const mw = model.internalModel?.originalWidth || model.width || 1;
    const mh = model.internalModel?.originalHeight || model.height || 1;
    const scale = Math.min(w / mw, h / mh) * 1.15;
    model.scale.set(scale);
    model.anchor?.set?.(0.5, 0.5);
    model.position.set(w / 2, h * 0.56);
  };
  fit();
  window.addEventListener('resize', fit);

  // 先にcharacterを生成してtick(手動update)を登録してから、renderループを開始する。
  // これで最初の_renderは「モデルがstage上にあり、tickも配線済み」の状態で走る。
  const character = new Live2DKonome(app, model, PIXI, container);
  app.start();

  return character;
}
