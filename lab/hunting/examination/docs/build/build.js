/* 問題データのビルドスクリプト
   旧162問(data_base.js)を再分類 → パッチ27問・新規72問を統合 → data_v2.js を出力
   出力できたら ../../js/data.js に上書きコピーする（手順は BUILD.md 参照）
   実行: node build.js
*/
const fs = require("fs");

const load = f => { const g = {}; const src = fs.readFileSync(f, "utf8").replace(/^const /gm, "g."); new Function("g", src)(g); return g; };
const base  = load("data_base.js");
const patch = load("data_patch.js");
const added = load("questions_new.js");
const sup   = load("questions_sup.js");
const gear  = load("questions_gear.js");

/* 読本・例題集の記述と食い違っていた推測ベースの問題を除外し、
   questions_gear.js の正しい記述で置き換える */
const EXCLUDE = new Set([
  "gear_net01","gear_net02","gear_net03","gear_net04","gear_net05","gear_net06",
  "gear_net07","gear_net08","gear_net09","gear_net10","gear_net11","gear_net12",
  "gear_net13","gear_net14","gear_net15","gear_net16","gear_net17","gear_net18",
  "gear_net19","gear_net20",
  "gear_trap27","gear_trap28","gear_trap29","gear_trap30","gear_trap31",
  "gear_air01","gear_air02","gear_air03","gear_air04","gear_air05","gear_air06","gear_air07",
  "gear_gun33","gear_gun34","gear_gun35","gear_gun38","gear_gun40",
  "gear_air09",
]);

const ALL = ["net","trap","gun1","gun2"];
const GUN = ["gun1","gun2"];

/* --------------------------------------------------------------------------
   既存162問の再分類テーブル
     cat … 本試験の4分野に合わせて付け替える（gun/trap → gear、誤分類の是正）
     lic … 適用免許
     pt  … 例題集の出題ポイント
   -------------------------------------------------------------------------- */
const MAP = {
  /* ===== 法令（既存law） ===== */
  law01:["law",ALL,"(6)狩猟期間"],           law02:["law",ALL,"(11)猟区"],
  law03:["law",ALL,"(4)狩猟免許の効力等"],   law04:["law",ALL,"(3)狩猟免許と猟具"],
  law05:["law",ALL,"(3)狩猟免許と猟具"],     law06:["law",ALL,"(13)その他"],
  law07:["law",ALL,"(5)狩猟者登録制度"],     law08:["law",GUN,"(3)狩猟免許と猟具"],
  law09:["law",["gun1"],"(3)狩猟免許と猟具"],law10:["law",ALL,"(3)狩猟免許と猟具"],
  law11:["law",ALL,"(3)狩猟免許と猟具"],     law12:["law",ALL,"(2)狩猟鳥獣"],
  law13:["law",ALL,"(3)狩猟免許と猟具"],     law14:["law",ALL,"(2)狩猟鳥獣"],
  law15:["law",ALL,"(5)狩猟者登録制度"],     law16:["law",ALL,"(5)狩猟者登録制度"],
  law17:["law",ALL,"(4)狩猟免許の効力等"],   law18:["law",ALL,"(4)狩猟免許の効力等"],
  law19:["law",ALL,"(3)狩猟免許と猟具"],     law20:["law",ALL,"(11)猟区"],
  law21:["law",ALL,"(5)狩猟者登録制度"],     law22:["law",ALL,"(5)狩猟者登録制度"],
  law23:["law",ALL,"(4)狩猟免許の効力等"],   law24:["law",ALL,"(4)狩猟免許の効力等"],
  law25:["law",ALL,"(4)狩猟免許の効力等"],   law26:["law",ALL,"(5)狩猟者登録制度"],
  law27:["law",ALL,"(6)狩猟期間"],           law28:["law",ALL,"(9)土地所得者の承諾等"],
  law29:["law",ALL,"(6)狩猟期間"],           law30:["law",ALL,"(6)狩猟期間"],
  law31:["law",ALL,"(6)狩猟期間"],           law32:["law",ALL,"(8)捕獲規制区域等"],
  law36:["law",ALL,"(7)捕獲数"],             law37:["law",ALL,"(7)捕獲数"],
  law38:["law",ALL,"(2)狩猟鳥獣"],           law39:["law",ALL,"(9)土地所得者の承諾等"],
  law41:["law",ALL,"(2)狩猟鳥獣"],           law42:["law",ALL,"(2)狩猟鳥獣"],
  law43:["law",ALL,"(10)鳥獣の捕獲許可等"],  law44:["law",ALL,"(10)鳥獣の捕獲許可等"],
  law45:["law",ALL,"(3)狩猟免許と猟具"],     law46:["law",ALL,"(13)その他"],
  law47:["law",ALL,"(10)鳥獣の捕獲許可等"],  law48:["law",ALL,"(10)鳥獣の捕獲許可等"],
  law49:["law",ALL,"(10)鳥獣の捕獲許可等"],  law50:["law",ALL,"(14)複合問題"],

  /* ===== 猟具・装薬銃（既存gun） ===== */
  gun01:["gear",["gun1"],"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun02:["gear",["gun1"],"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun03:["gear",["gun1"],"(3)第一種銃猟②猟具の使用方法"],
  gun04:["gear",["gun1"],"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun05:["gear",["gun1"],"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun06:["gear",["gun1"],"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun07:["gear",GUN,"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun08:["gear",GUN,"(3)第一種銃猟②猟具の使用方法"],
  gun09:["gear",["gun1"],"(3)第一種銃猟②猟具の使用方法"],
  gun10:["gear",GUN,"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun11:["gear",["gun1"],"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun12:["gear",["gun1"],"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun14:["gear",GUN,"(3)第一種銃猟②猟具の使用方法"],
  gun15:["gear",GUN,"(3)第一種銃猟②猟具の使用方法"],
  gun16:["gear",["gun1"],"(3)第一種銃猟②猟具の使用方法"],
  gun17:["gear",GUN,"(3)第一種銃猟②猟具の使用方法"],
  gun18:["gear",GUN,"(3)第一種銃猟②猟具の使用方法"],
  gun19:["gear",GUN,"(3)第一種銃猟②猟具の使用方法"],
  gun20:["gear",["gun1"],"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun21:["gear",["gun1"],"(3)第一種銃猟①猟具の種類・構造・機能"],
  gun22:["gear",["gun1"],"(3)第一種銃猟②猟具の使用方法"],
  gun23:["gear",["gun1"],"(3)第一種銃猟②猟具の使用方法"],
  gun24:["gear",GUN,"(4)第二種銃猟②猟具の使用方法"],
  gun25:["gear",GUN,"(3)第一種銃猟②猟具の使用方法"],
  gun26:["gear",GUN,"(3)第一種銃猟②猟具の使用方法"],
  /* ↓ 法令分野に付け替え（銃猟の時間規制・方向規制・捕獲規制区域等） */
  gun13:["law",GUN,"(8)捕獲規制区域等"],
  gun27:["law",GUN,"(8)捕獲規制区域等"],
  gun28:["law",GUN,"(8)捕獲規制区域等"],
  gun29:["law",GUN,"(8)捕獲規制区域等"],
  gun30:["law",GUN,"(8)捕獲規制区域等"],

  /* ===== 猟具・わな（既存trap） ===== */
  trap02:["gear",["trap"],"(2)わな猟①猟具の種類・構造・機能"],
  trap03:["gear",["trap"],"(2)わな猟①猟具の種類・構造・機能"],
  trap06:["gear",["trap"],"(2)わな猟②猟具の使用方法"],
  trap09:["gear",["trap"],"(2)わな猟①猟具の種類・構造・機能"],
  trap10:["gear",["trap"],"(2)わな猟①猟具の種類・構造・機能"],
  trap11:["gear",["trap"],"(2)わな猟②猟具の使用方法"],
  trap15:["gear",["trap"],"(2)わな猟②猟具の使用方法"],
  trap16:["gear",["trap"],"(2)わな猟①猟具の種類・構造・機能"],
  trap18:["gear",["trap"],"(2)わな猟②猟具の使用方法"],
  trap19:["gear",["trap"],"(2)わな猟②猟具の使用方法"],
  trap20:["gear",["trap"],"(2)わな猟①猟具の種類・構造・機能"],
  trap21:["gear",["trap"],"(2)わな猟①猟具の種類・構造・機能"],
  trap22:["gear",["trap"],"(2)わな猟①猟具の種類・構造・機能"],
  trap24:["gear",["trap"],"(2)わな猟②猟具の使用方法"],
  trap25:["gear",["trap"],"(2)わな猟①猟具の種類・構造・機能"],
  trap26:["gear",["trap"],"(2)わな猟②猟具の使用方法"],
  trap08:["gear",["trap"],"(2)わな猟②猟具の使用方法"],
  /* ↓ 法令分野に付け替え（猟法の規制・猟具の標識） */
  trap01:["law",["trap"],"(3)狩猟免許と猟具"],
  trap04:["law",["trap"],"(3)狩猟免許と猟具"],
  trap05:["law",["trap","net"],"(5)狩猟者登録制度"],
  trap12:["law",["trap"],"(3)狩猟免許と猟具"],
  trap13:["law",["trap"],"(3)狩猟免許と猟具"],
  trap14:["law",["trap"],"(3)狩猟免許と猟具"],
  trap23:["law",["trap","net"],"(5)狩猟者登録制度"],
  /* ↓ 保護管理分野に付け替え（錯誤捕獲） */
  trap07:["management",["trap","net"],"(2)錯誤捕獲の防止"],
  trap17:["management",["trap"],"(2)錯誤捕獲の防止"],

  /* ===== 保護管理（既存mng）── 一部を法令へ ===== */
  mng04:["law",ALL,"(8)捕獲規制区域等"],
  mng05:["law",ALL,"(8)捕獲規制区域等"],
  mng11:["law",ALL,"(1)鳥獣法一般"],
  mng12:["law",ALL,"(1)鳥獣法一般"],
  mng18:["law",ALL,"(11)猟区"],
  mng19:["law",ALL,"(8)捕獲規制区域等"],
};

/* 保護管理の既定（上記MAPにないmngXX） */
const MNG_PT = {
  mng01:"(1)鳥獣の保護及び管理の概要", mng02:"(1)鳥獣の保護及び管理の概要",
  mng03:"(1)鳥獣の保護及び管理の概要", mng06:"(1)鳥獣の保護及び管理の概要",
  mng07:"(1)鳥獣の保護及び管理の概要", mng08:"(5)外来生物の対策",
  mng09:"(2)錯誤捕獲の防止",           mng10:"(1)鳥獣の保護及び管理の概要",
  mng13:"(1)鳥獣の保護及び管理の概要", mng14:"(1)鳥獣の保護及び管理の概要",
  mng15:"(1)鳥獣の保護及び管理の概要", mng16:"(1)鳥獣の保護及び管理の概要",
  mng17:"(1)鳥獣の保護及び管理の概要", mng20:"(1)鳥獣の保護及び管理の概要",
};

/* --------------------------------------------------------------------------
   変換
   -------------------------------------------------------------------------- */
const out = base.QUESTIONS.map(q => {
  const m = MAP[q.id];
  let cat, lic, pt;
  if (m) { [cat, lic, pt] = m; }
  else if (q.category === "knowledge") { cat = "knowledge"; lic = ALL; pt = "(2)鳥獣の判別"; }
  else if (q.category === "management") { cat = "management"; lic = ALL; pt = MNG_PT[q.id] || "(1)鳥獣の保護及び管理の概要"; }
  else { cat = q.category; lic = ALL; pt = "未分類"; }

  // 懲役 → 拘禁刑（2025年6月1日施行の改正刑法）
  const fix = s => s.replace(/懲役/g, "拘禁刑");
  return {
    id: q.id, category: cat, license: lic, point: pt,
    question: fix(q.question),
    choices: q.choices.map(fix),
    answer: q.answer,
    explanation: fix(q.explanation),
    source: q.source || "",
    verified: q.verified || "2026-08-12",
  };
});

const merged = [...out, ...patch.QUESTIONS_ADD, ...added.QUESTIONS_NEW, ...sup.QUESTIONS_SUP, ...gear.QUESTIONS_GEAR]
  .filter(q => !EXCLUDE.has(q.id));

/* --------------------------------------------------------------------------
   検証
   -------------------------------------------------------------------------- */
const errs = [];
const seen = new Set();
merged.forEach(q => {
  if (seen.has(q.id)) errs.push("ID重複: " + q.id); seen.add(q.id);
  if (!["law","gear","knowledge","management"].includes(q.category)) errs.push("category不正: " + q.id + " " + q.category);
  if (!Array.isArray(q.license) || !q.license.length) errs.push("license不正: " + q.id);
  q.license.forEach(l => { if (!ALL.includes(l)) errs.push("license値不正: " + q.id + " " + l); });
  if (q.choices.length !== 3) errs.push("選択肢数: " + q.id);
  if (!(q.answer >= 0 && q.answer <= 2)) errs.push("answer範囲: " + q.id);
  if (new Set(q.choices).size !== 3) errs.push("選択肢重複: " + q.id);
  if (/懲役/.test(q.question + q.explanation + q.choices.join(""))) errs.push("懲役が残存: " + q.id);
});

console.log("=== 検証 ===");
console.log(errs.length ? errs.join("\n") : "エラーなし");
console.log("\n=== 総数 " + merged.length + "問 ===");

const RATIO = { law: 13, gear: 6, knowledge: 9, management: 2 };
console.log("\n免許種別ごとの出題プール（本試験配分：法令13 / 猟具6 / 鳥獣9 / 保護管理2）");
const labels = { net: "網猟", trap: "わな猟", gun1: "第一種銃猟", gun2: "第二種銃猟" };
ALL.forEach(l => {
  const p = merged.filter(q => q.license.includes(l));
  const c = {};
  p.forEach(q => c[q.category] = (c[q.category] || 0) + 1);
  const ok = Object.keys(RATIO).every(k => (c[k] || 0) >= RATIO[k]);
  console.log(
    "  " + labels[l].padEnd(6) +
    " 計" + String(p.length).padStart(3) + "問  " +
    "法令" + String(c.law || 0).padStart(3) +
    " 猟具" + String(c.gear || 0).padStart(3) +
    " 鳥獣" + String(c.knowledge || 0).padStart(3) +
    " 保護管理" + String(c.management || 0).padStart(3) +
    "   模擬試験30問: " + (ok ? "生成可" : "★不足")
  );
});

console.log("\n出題形式");
const f = { 適切: 0, 正しい: 0, 誤っている: 0, その他: 0 };
merged.forEach(q => {
  if (/誤っている/.test(q.question)) f.誤っている++;
  else if (/適切/.test(q.question)) f.適切++;
  else if (/正しい/.test(q.question)) f.正しい++;
  else f.その他++;
});
console.log(" ", f);

/* --------------------------------------------------------------------------
   出力
   -------------------------------------------------------------------------- */
const j = o => JSON.stringify(o);
const body = merged.map(q =>
  `  { id: ${j(q.id)}, category: ${j(q.category)}, license: ${j(q.license)},\n` +
  `    point: ${j(q.point)},\n` +
  `    question: ${j(q.question)},\n` +
  `    choices: ${j(q.choices)},\n` +
  `    answer: ${q.answer},\n` +
  `    explanation: ${j(q.explanation)},\n` +
  `    source: ${j(q.source)}, verified: ${j(q.verified)} },`
).join("\n\n");

// SPECIES_LIST と GUN_PARTS は旧版から変更していないため、そのまま引き継ぐ
const speciesSrc = fs.readFileSync("data_base.js", "utf8");
const head = speciesSrc.slice(0, speciesSrc.indexOf("const QUESTIONS = ["));
const tail = speciesSrc.slice(speciesSrc.indexOf("const GUN_PARTS = {"));

const header = `/* ==========================================================================
   狩猟免許学習データ  data.js
   生成日: 2026-08-12 ／ 総問題数: ${merged.length}問

   【QUESTIONS のフィールド】
     id         一意のID
     category   本試験の出題4分野
                  "law"        鳥獣の保護及び管理並びに狩猟の適正化に関する法令（約13問）
                  "gear"       猟具に関する知識（約6問）
                  "knowledge"  鳥獣に関する知識（約9問）
                  "management" 鳥獣の保護及び管理に関する知識（約2問）
     license    適用免許の配列 "net"(網猟) "trap"(わな猟) "gun1"(第一種銃猟) "gun2"(第二種銃猟)
     point      例題集「知識試験例題の出題ポイント一覧」の分類
     question / choices(3件) / answer(0-2) / explanation
     source     根拠条文・出典
     verified   最終確認日（法改正時の洗い出しに使用）

   【模擬試験の作り方】
     免許種別 L の30問模擬試験 = license に L を含む問題から
       law 13問 / gear 6問 / knowledge 9問 / management 2問 を抽出（例題集 p.23 の配分）

       const mock = (L) => [["law",13],["gear",6],["knowledge",9],["management",2]]
         .flatMap(([c,n]) => shuffle(QUESTIONS.filter(q =>
            q.license.includes(L) && q.category === c)).slice(0, n));

   【更新履歴】
     2026-08-12  例題集（最新版）の出題ポイント一覧と照合し全面改訂
                 ・「懲役」→「拘禁刑」（2025年6月1日施行の改正刑法）
                 ・緊急銃猟制度を追加（2025年9月1日施行・法第34条の2）
                 ・捕獲規制区域等を大幅補強
                 ・license / point / source / verified フィールドを新設
                 ・網猟・第二種銃猟の猟具問題を新規作成
   ========================================================================== */

`;

fs.writeFileSync("data_v2.js", header + head.slice(head.indexOf("/* ---")) + "const QUESTIONS = [\n" + body + "\n];\n\n" + tail);
console.log("\ndata_v2.js を出力しました");
