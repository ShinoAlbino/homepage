/** サイト全体の設定。デプロイ先や支援URLはここだけ書き換えれば良い */
export const SITE_CONFIG = {
  /** FANBOX(支援)ボタンのリンク先 */
  fanboxUrl: 'https://arcahortus.fanbox.cc/',

  /** 戻るボタンの遷移先(UIフェーズ2-4)。LIVEの戻り先は同一ページの入口=リロードで復帰 */
  nav: {
    /** 入口の戻り先: 箱庭研究所(ラボ)トップ */
    backTargetEntry: 'https://arcahortus.com/lab/',
  },

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
    /**
     * 字幕を全文表示し切って(音声付きは再生終了の遅いほう)から、
     * さらに保持する時間(ms)。UIフェーズ2-3。テンポ調整用に定数化。
     */
    subtitleHoldMs: 2500,
  },

  /** 世界観コメントの流量 (1〜3件/分) */
  comments: {
    minIntervalMs: 20_000,
    maxIntervalMs: 60_000,
    replyDelayMinMs: 2_000,
    replyDelayMaxMs: 6_000,
    maxVisible: 60,
    /**
     * ロール別の出現確率(相対値)。まずここで出すロールを抽選し、
     * 選ばれたロール内で weight 付き抽選する。
     * viewer主体 / recorder低 / operator・official極低。
     */
    roleWeights: {
      viewer: 85,
      recorder: 10,
      operator: 3,
      official: 2,
    },
  },

  /** 天候連携(Open-Meteo・キー不要)。座標は東京固定 */
  weather: {
    url: 'https://api.open-meteo.com/v1/forecast',
    latitude: 35.68,
    longitude: 139.76,
    /** 天候の再取得間隔 */
    refreshMs: 30 * 60 * 1000,
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
