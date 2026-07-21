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
  };

  // まばたきの各フェーズ長(秒)。閉→保持→開。保持を挟むことで確実に閉じ切って見える
  private static readonly BLINK_CLOSE = 0.1;
  private static readonly BLINK_HOLD = 0.08;
  private static readonly BLINK_OPEN = 0.16;

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
