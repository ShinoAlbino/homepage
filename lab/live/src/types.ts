/** serifu.json のスキーマ */
export interface Serifu {
  id: string;
  /** greeting | idle | click | program:{id} | promo */
  category: string;
  conditions?: {
    /** [開始時, 終了時) JST。終了が24を超える場合は日跨ぎ */
    hourJST?: [number, number];
    visitor?: 'first' | 'repeat' | 'any';
  };
  text: string;
  /** 音声ファイル名(voice/配下)。無ければテキストのみ */
  voice?: string | null;
  expression?: string;
  /** 抽選重み(既定1) */
  weight?: number;
}

export interface SerifuDB {
  version: number;
  serifu: Serifu[];
}

/** comments.json のスキーマ */
export interface WorldComment {
  name: string;
  badge: string;
  text: string;
  /** セリフIDを指定すると、そのセリフ再生の数秒後に流れる */
  replyTo: string | null;
  weight?: number;
}

export interface CommentDB {
  comments: WorldComment[];
}

/** schedule.json のスキーマ */
export interface Program {
  id: string;
  name: string;
  /** [開始時, 終了時) JST。終了が24を超える場合は日跨ぎ */
  hours: [number, number];
  bgm: string | null;
}

export interface ScheduleDB {
  programs: Program[];
}

/** 此芽の制御インターフェース(Live2D/フォールバック共通) */
export interface Character {
  readonly kind: 'live2d' | 'fallback';
  /** 口開度 0..1 (リップシンク) */
  setMouthOpen(v: number): void;
  /** 発話中フラグ。音声が無い時に口パク(フラップ)を生成するために使う */
  setTalking(on: boolean): void;
  /** 表情切替。v1はneutralのみだが受け口として実装 */
  setExpression(name: string): Promise<void>;
  /** 視線・顔向き追従 (-1..1 正規化座標) */
  focus(nx: number, ny: number): void;
  /** クリック/タップ時のコールバック登録 */
  onTap(handler: () => void): void;
  dispose(): void;
}
