# 狩猟免許（第一種銃猟／わな猟）学習サイト

静的HTML/CSS/JSのみで作られた、ビルド不要の学習サイトです。
`index.html` をダブルクリックするだけで動作します（サーバー不要）。
知識試験・模擬試験は「免許種別」を第一種銃猟／わな猟から選択でき、
猟具（銃器 or わな）の出題内容が切り替わります。

## フォルダ構成

```
hunting-exam/
├── index.html        トップメニュー
├── flashcard.html     狩猟鳥獣フラッシュ暗記（全種／鳥類のみ／獣類のみ）
├── exam.html           知識試験 過去問演習
├── mockexam.html       模擬試験（30問・90分）
├── gunparts.html       猟銃・空気銃の各部名称（写真4種に番号を重ねて表示）
├── skillexam.html      実技試験（技能試験）の流れ解説
├── css/style.css       共通スタイル
├── js/
│   ├── data.js         【データ本体】鳥獣リスト・問題・銃各部名称
│   ├── common.js       共通ユーティリティ（localStorage・シャッフル等）
│   ├── flashcard.js / exam.js / mockexam.js / gunparts.js
└── images/             鳥獣のイラスト + 猟銃写真（gun1.png〜gun4.png、後述）を入れるフォルダ
```

### フラッシュ暗記の出題範囲について

フラッシュ暗記の出題対象は**狩猟鳥獣のみ**です（非狩猟鳥獣は含みません）。
また、ノイヌ・ノネコ・シベリアイタチは除外しており、収録数は
全43種（鳥類26種＋獣類17種）です。トップメニューから「全種」「鳥類のみ」「獣類のみ」を
選んで開けます（URLパラメータ `flashcard.html?scope=bird` / `?scope=mammal` に対応）。
除外する種を変更したい場合は `js/flashcard.js` 冒頭の `EXCLUDED_IDS` を編集してください。
種名のオス・メス表記は、オスのみが狩猟鳥獣である「イタチ（オス）」を除き付けていません。
フラッシュ暗記は「スタート画面（自動送りの設定）→ カード → 終了画面（もう一度／メニューに戻る）」の
流れで動作します。

学習の進捗・成績・設定はすべて **ブラウザのlocalStorage** に保存されます（サーバー送信なし）。
別のブラウザ・別端末では引き継がれません。

---

## 1. 画像の追加方法

`images/` フォルダに、以下の**命名規則**でファイルを置くと、プレースホルダー表示から
自動的に実際の写真に切り替わります（コード変更は不要）。

```
images/{id}.jpg
```

- `{id}` は `js/data.js` の `SPECIES_LIST` 内の各項目の `id` フィールドと一致させてください。
- 拡張子は `.jpg` 固定です（`.png` 等を使いたい場合は `js/common.js` の
  `bindImageFallback` 内の `"images/" + species.id + ".jpg"` を変更してください）。
- ファイルが無い（読み込みエラーになる）場合は、自動的に種名入りのプレースホルダーSVGが表示されるので、
  写真が揃っていない状態でもサイトは問題なく動作します。

### 必要な画像ファイル一覧（命名規則: `images/{id}.jpg`）

#### 狩猟鳥獣・鳥類（26種）
```
images/kawau.jpg            カワウ
images/magamo.jpg           マガモ（オス）
images/karugamo.jpg         カルガモ
images/kogamo.jpg           コガモ（オス）
images/yoshigamo.jpg        ヨシガモ（オス）
images/hidorigamo.jpg       ヒドリガモ（オス）
images/onagagamo.jpg        オナガガモ（オス）
images/hashibirogamo.jpg    ハシビロガモ（オス）
images/hoshihajiro.jpg      ホシハジロ（オス）
images/kinkurohajiro.jpg    キンクロハジロ（オス）
images/suzugamo.jpg         スズガモ（オス）
images/kurogamo.jpg         クロガモ（オス）
images/ezoraichou.jpg       エゾライチョウ
images/kojukei.jpg          コジュケイ
images/yamadori.jpg         ヤマドリ
images/kiji.jpg             キジ
images/yamashigi.jpg        ヤマシギ
images/tashigi.jpg          タシギ
images/kijibato.jpg         キジバト
images/hiyodori.jpg         ヒヨドリ
images/nyuunaisuzume.jpg    ニュウナイスズメ（オス）
images/suzume.jpg           スズメ
images/mukudori.jpg         ムクドリ
images/miyamagarasu.jpg     ミヤマガラス
images/hashibosogarasu.jpg  ハシボソガラス
images/hashibutogarasu.jpg  ハシブトガラス
```

#### 狩猟鳥獣・獣類（20種）
```
images/nousagi.jpg          ノウサギ
images/yukiusagi.jpg        ユキウサギ
images/taiwanrisu.jpg       タイワンリス
images/shimarisu.jpg        シマリス
images/tsukinowaguma.jpg    ツキノワグマ
images/higuma.jpg           ヒグマ
images/araiguma.jpg         アライグマ
images/tanuki.jpg           タヌキ
images/kitsune.jpg          キツネ
images/ten.jpg              テン
images/itachi_male.jpg      イタチ（オス）
images/siberia_itachi.jpg   シベリアイタチ
images/minku.jpg            ミンク
images/anaguma.jpg          アナグマ
images/hakubishin.jpg       ハクビシン
images/inoshishi.jpg        イノシシ
images/nihonjika.jpg        ニホンジカ
images/nuutoria.jpg         ヌートリア
images/noinu.jpg            ノイヌ
images/noneko.jpg           ノネコ
```

#### 誤認されやすい非狩猟鳥獣（鳥類・25種）
```
images/goisagi.jpg          ゴイサギ
images/ban.jpg              バン
images/ooban.jpg            オオバン
images/yoshigoi.jpg         ヨシゴイ
images/sasagoi.jpg          ササゴイ
images/oshidori.jpg         オシドリ（オス）
images/magan.jpg            マガン
images/umiaisa.jpg          ウミアイサ（オス）
images/tomoegamo.jpg        トモエガモ（オス）
images/hoojirogamo.jpg      ホオジロガモ（オス）
images/biroudokinkuro.jpg   ビロードキンクロ（オス）
images/koorigamo.jpg        コオリガモ（オス）
images/hikuina.jpg          ヒクイナ
images/oojishigi.jpg        オオジシギ
images/tamashigi.jpg        タマシギ（オス）
images/uzura.jpg            ウズラ
images/kakesu.jpg           カケス
images/onaga.jpg            オナガ
images/tsugumi.jpg          ツグミ
images/mozu.jpg             モズ
images/aobato.jpg           アオバト
images/dobato.jpg           ドバト
images/hoojiro.jpg          ホオジロ
images/kawarahiwa.jpg       カワラヒワ
images/kashiradaka.jpg      カシラダカ
```

#### 誤認されやすい非狩猟鳥獣（獣類・7種）
```
images/okojo.jpg            オコジョ
images/itachi_female.jpg    イタチ（メス）
images/nihonrisu.jpg        ニホンリス
images/musasabi.jpg         ムササビ
images/momonga.jpg          モモンガ
images/kamoshika.jpg        カモシカ
images/nihonzaru.jpg        ニホンザル
```

---

## 2. データの編集方法（`js/data.js`）

ロジック（各`.js`ファイル）とデータは分離してあるので、**`js/data.js` を編集するだけ**で
鳥獣・問題・銃の名称を追加/修正できます。HTMLやロジック側の変更は不要です。

### 2-1. 鳥獣（判別暗記・クイズ）を追加する

`SPECIES_LIST` 配列に以下の形式でオブジェクトを追加してください。

```js
{
  id: "example_id",        // 半角英数字のみ。images/example_id.jpg に対応
  name: "サンプル鳥",       // 表示される種名
  category: "bird",        // "bird"（鳥類） または "mammal"（獣類）
  game: true,               // true = 狩猟鳥獣 / false = 非狩猟鳥獣（誤認注意種）
  size: "キジ大",           // 大きさの目安（表示用の短い文字列）
  features: [               // 判別ポイント（箇条書き、いくつでも可）
    "特徴1",
    "特徴2",
  ],
  note: "補足があれば記載。無ければ空文字\"\"",
},
```

追加したら、対応する画像 `images/example_id.jpg` を用意してください（未用意でもプレースホルダーで動作します）。

### 2-2. 知識試験の問題を追加する

`QUESTIONS` 配列に以下の形式でオブジェクトを追加してください。

```js
{
  id: "law21",              // 他と重複しない一意のID
  category: "law",          // "law"(法令) / "gun"(猟具) / "knowledge"(鳥獣) / "management"(保護管理)
  question: "問題文をここに書く。",
  choices: ["選択肢1", "選択肢2", "選択肢3"],  // 必ず3択
  answer: 0,                 // 正解のインデックス（0始まり。上の例なら「選択肢1」が正解）
  explanation: "正解の根拠となる解説文。復習画面・模擬試験の結果画面に表示される。",
},
```

- `category` は "law"(法令) / "gun"(猟具・銃器、第一種銃猟向け) / "trap"(猟具・わな、わな猟向け) /
  "knowledge"(鳥獣) / "management"(保護管理) の5種類。**"gun" と "trap" だけが免許種別で
  出し分けられる**カテゴリで、law/knowledge/managementは両免許で共通に出題されます。
- 模擬試験モードは `mockexam.js` 内の `FIXED_COUNTS`（法令13・鳥獣9・保護管理2）と
  `TOOL_COUNT`（猟具6。選択した免許種別に応じて gun または trap から抽出）＝計30問の構成で
  各カテゴリからランダム抽出します。カテゴリごとの問題数がこの数を下回らないようにしてください。
- 間違えた問題は `exam.html`（通常の演習ページ）で自動的に「間違えた問題のみ復習」の対象になります。

### 2-3. 猟銃の各部名称を追加・修正する

`gunparts.html` は自作図（SVG）ではなく、`images/gun1.png`〜`gun4.png` の実銃写真の上に
番号丸をHTML/CSSで重ねて表示する方式です。`GUN_PARTS` には次の4種類のキーがあります。

| キー | 内容 | 画像 |
|---|---|---|
| `gun1` | 上下二連式散弾銃（元折式） | `images/gun1.png` |
| `gun2` | 自動式（半自動）散弾銃 | `images/gun2.png` |
| `gun3` | 空気銃（ポンプ式） | `images/gun3.png` |
| `gun4` | ボルト式ライフル銃（スコープ付き） | `images/gun4.png` |

4種の銃で共通の番号体系を使っており、該当する部位が無い銃はその番号を配列に含めません
（例：元折式の`gun1`のみ「13 開閉レバー」があり、ボルトアクションの`gun4`のみ
「10 弾倉」「11 照準眼鏡」がある、など）。

各キーの `parts` 配列に `{ no: 番号, name: "名称", desc: "説明文" }` の形式で追加・編集してください。

写真上のどこに番号丸を表示するかの**座標データ**は `data.js` ではなく
`js/gunparts.js` 内の `MARKER_COORDS` に持たせています（表示レイヤーの情報のため分離）。
番号を追加・移動したい場合は、対象の画像を画像編集ソフト等で開いてピクセル座標を調べ、
`MARKER_COORDS.gunN.points` に `{ 番号: [x, y] }`（画像左上原点、ピクセル単位）を追加してください。
座標は自動的に画像サイズに対する割合に変換されるため、画面幅が変わっても位置はずれません。

画像を差し替える場合は、同じファイル名（`gun1.png`〜`gun4.png`）で上書きするか、
`GUN_PARTS.gunN.image` のパスと `MARKER_COORDS.gunN.width/height`（新しい画像の実ピクセル寸法）を
両方更新してください。

---

## 3. データの出典について

- 狩猟鳥獣の定義・種名一覧：環境省「鳥獣保護管理法施行規則」に基づく現行46種
  （鳥類26種・獣類20種。ゴイサギ・バンは令和4年9月15日付で狩猟鳥獣から除外）。
- 判別ポイント：環境省パンフレット「狩猟鳥獣の見分け方～誤認捕獲の防止のために～」に準拠。
- 法令・猟具・保護管理に関する問題：鳥獣保護管理法・同施行規則、及び狩猟読本の範囲に基づき作成。
- 知識試験の出題構成（30問中：法令約13問・猟具約6問・鳥獣約9問・保護管理約2問、
  合格ライン70%、試験時間90分）は、一般的な狩猟免許試験（第一種銃猟・わな猟共通）の形式に
  基づく想定です。**実際の試験内容・配点・法令の詳細は必ず最新の狩猟読本・都道府県の公式案内で確認してください。**
- トップページの「狩猟関連リンク」は環境省・大日本猟友会の公式ページへのリンクです
  （`index.html` 内に直接記載。追加・変更したい場合はそのカード部分を編集してください）。
- `images/gun1.png`〜`gun4.png`（猟銃各部名称ページの写真）はAI生成画像です。実銃と細部が
  異なる場合があるため、各部名称の学習用の参考図として利用してください。

---

## 4. 開発メモ

- フレームワーク・ビルドツール・CDN不要。`index.html` を開くだけで動作します。
- 各ページの設定・成績は `localStorage` にキー `huntingExam.*` で保存されます。
  リセットしたい場合はブラウザの開発者ツールで該当キーを削除するか、
  `localStorage.clear()` を実行してください（※他サイトのデータには影響しません。同一オリジンのみ）。
