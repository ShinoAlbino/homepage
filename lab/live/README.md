# 箱庭観測録 -此芽の観測室-

Arca Hortus 公式サイト配下の疑似ライブ配信ページ。Live2Dキャラ「此芽(このめ)」が常駐する。
完全静的サイト(v1)。サーバー処理・API・DBなし、月額コスト0円。

## 技術スタック

- Vite + TypeScript (vanilla)
- PixiJS v7 + pixi-live2d-display (cubism4)
- Cubism Core は `index.html` の script タグで公式CDNから読込(バンドル不可、ライセンス参照)
- 音声: HTMLAudioElement + WebAudio AnalyserNode (リップシンク)

## 開発

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # 型チェック + dist/ 出力
npm run preview    # ビルド結果の確認
```

### 時刻偽装(番組表テスト)

JST時間帯で番組が切替わる。テストはクエリで時刻を偽装できる:

```
http://localhost:5173/?hour=22   → 「夜の観測録」
http://localhost:5173/?hour=3    → 「静かな時間」
```

## アセット差し替え(プレースホルダ運用)

すべて**置くだけ**で切替わる。無い場合は自動フォールバックする。

| アセット | 置き場所 | 無い場合の挙動 |
|---|---|---|
| Live2Dモデル一式 | `public/model/konome/konome.model3.json` ほか | `fallback.png` を表示(全機能継続、口パクのみ省略) |
| セリフ音声 | `public/voice/{serifuId}.ogg` | 無音+テキスト送りのみ |
| BGM | `public/bgm/morning.ogg` / `day.ogg` / `night.ogg` | 無音 |
| 表情テクスチャ | `public/model/konome/texture_00_{name}.png` | neutralのまま |

セリフは `public/data/serifu.json`、世界観コメントは `public/data/comments.json`、
番組表は `public/data/schedule.json` を編集する(スキーマは `src/types.ts` 参照)。

## 設定

`src/config.ts` の `SITE_CONFIG` に集約:

- `fanboxUrl` — 支援ボタンのリンク先
- `lipsync` — 口パクの閾値/ゲイン/平滑化
- `talk` — 自動トーク間隔(25〜60s)、promo頻度上限(20分に1回)
- `apiEnabled` — v2 API分岐フラグ(v1はfalse固定)

## デプロイ (Cloudflare Pages)

```bash
npm run build
npx wrangler pages deploy dist
```

または `npm run deploy`。Functions(v2用の `functions/api/*.ts`)は現状501を返すスタブ。

## ライセンス注意

- Live2D Cubism Core は Live2D 社の許諾条件に従うこと。バンドル(再配布)せず、
  公式CDNの script タグ読込を維持する。セルフホストする場合は
  [SDKリリースライセンス](https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_jp.html) を確認。
- コメント欄は作中演出(「観測記録」バッジ付き)であり、実在視聴者の偽装をしないこと。
- 視聴者数などの偽の数字は表示しない(v2で実数を実装するまで)。

## 受け入れ基準(仕様§10)

- [x] `npm run dev` で起動、モデル無し状態でも全UIが動く
- [x] モデル一式を `public/model/konome/` に置くだけでLive2D表示に切替
- [x] 音声oggを置くだけで口パク付き発話
- [x] 入室ゲート→挨拶→自動トークループ→クリック反応
- [x] `?hour=22` で時刻偽装、JST番組切替
- [x] 世界観コメントが演出と判別できる見た目で流れる
- [x] `npx wrangler pages deploy dist` でデプロイ可能
