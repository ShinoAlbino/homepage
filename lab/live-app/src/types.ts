/** 天候の正規化値(Open-Meteo由来) */
export type Weather = 'clear' | 'cloud' | 'rain' | 'snow';

/** serifu.json の出し分け条件(すべて任意・AND判定。無指定フィールドは常に真) */
export interface SerifuConditions {
  /** [開始時, 終了時) JST。終了が24を超える場合は日跨ぎ */
  hourJST?: [number, number];
  /** MM-DD の日付レンジ(両端含む)。記念日・節気用 */
  dateJST?: { from: string; to: string };
  season?: 'spring' | 'summer' | 'summer_end' | 'autumn' | 'winter';
  /** 天候連動。'any'は天候問わず(取得失敗時も可) */
  weather?: Weather | 'any';
  visitor?: 'first' | 'repeat' | 'any';
}

/** serifu.json のスキーマ */
export interface Serifu {
  id: string;
  /** greeting | idle | click | program:{id} | promo | anomaly */
  category: string;
  conditions?: SerifuConditions;
  /** 多言語セリフのみ。未指定＝日本語 */
  lang?: 'la' | 'en' | 'zh' | 'ko';
  text: string;
  /** 音声ファイル名(voice/配下)。無ければテキストのみ */
  voice?: string | null;
  expression?: string;
  /** 再生時に発火するモーション(耳)。ear_twitch | ear_twitch_l | ear_twitch_r | ear_perk */
  motion?: string;
  /** 抽選重み(既定1) */
  weight?: number;
}

/** serifu.json はトップレベル配列。旧 {version, serifu} 形式も許容する */
export type SerifuDB = Serifu[] | { version?: number; serifu: Serifu[] };

/** コメントのロール(頻度制御と見た目差別化の基準) */
export type CommentRole = 'viewer' | 'recorder' | 'operator' | 'official';

/** comments.json のスキーマ */
export interface WorldComment {
  name: string;
  /** 頻度制御に使うロール(無指定はviewer扱い) */
  role?: CommentRole;
  badge: string;
  text: string;
  /** セリフIDを指定すると、そのセリフ再生の数秒後に流れる */
  replyTo: string | null;
  weight?: number;
}

/** comments.json はトップレベル配列。旧 {comments} 形式も許容する */
export type CommentDB = WorldComment[] | { comments: WorldComment[] };

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
  /** 耳モーションを発火(ear_twitch | ear_twitch_l | ear_twitch_r | ear_perk)。未対応値は無視 */
  playMotion(name: string): void;
  /** 表情切替。v1はneutralのみだが受け口として実装 */
  setExpression(name: string): Promise<void>;
  /** 視線・顔向き追従 (-1..1 正規化座標) */
  focus(nx: number, ny: number): void;
  /** クリック/タップ時のコールバック登録 */
  onTap(handler: () => void): void;
  dispose(): void;
}
