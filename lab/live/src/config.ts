/** サイト全体の設定。デプロイ先や支援URLはここだけ書き換えれば良い */
export const SITE_CONFIG = {
  /** FANBOX(支援)ボタンのリンク先 */
  fanboxUrl: 'https://arcahortus.fanbox.cc/',

  /** v2: Pages Functions(API)を有効化するフラグ。v1では常にfalse */
  apiEnabled: false,

  /** アセットパス(publicからの相対。base:'./'運用のため先頭スラッシュなし) */
  paths: {
    model: 'model/konome/konome.model3.json',
    fallbackImage: 'model/konome/fallback.png',
    voiceDir: 'voice/',
    bgmDir: 'bgm/',
    serifu: 'data/serifu.json',
    comments: 'data/comments.json',
    schedule: 'data/schedule.json',
  },

  /** リップシンク調整用の定数 */
  lipsync: {
    /** RMSがこの値以下なら口を閉じる */
    threshold: 0.015,
    /** RMS→口開度のゲイン */
    gain: 5.0,
    /** 平滑化係数(0..1、大きいほど滑らか) */
    smoothing: 0.65,
  },

  /** 自動トークの進行設定 */
  talk: {
    minIntervalMs: 25_000,
    maxIntervalMs: 60_000,
    /** promo(FANBOX誘導)カテゴリの頻度上限 */
    promoCooldownMs: 20 * 60 * 1000,
    /** 直近N件のセリフは再抽選で回避 */
    recentAvoid: 5,
    /** 音声なしセリフの1文字あたり表示時間(ms) */
    charMs: 90,
  },

  /** 世界観コメントの流量 (1〜3件/分) */
  comments: {
    minIntervalMs: 20_000,
    maxIntervalMs: 60_000,
    replyDelayMinMs: 2_000,
    replyDelayMaxMs: 6_000,
    maxVisible: 60,
  },

  /** 描画設定 */
  render: {
    /** モバイルでのdevicePixelRatio上限 */
    mobileMaxDpr: 1.5,
    desktopMaxDpr: 2,
  },

  /** localStorageキー */
  storage: {
    visited: 'konome_visited',
    muted: 'konome_muted',
  },
} as const;
