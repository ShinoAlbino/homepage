/* ============================================================
   ArcaHortus / 権限の読み取り  （大図書館 受付・開架・閉架で共用）

   職員証は assets/ah-staff.js が localStorage 'ah.staff.v1' に書く。
   ここは読むだけで、書かない。新たな保存キーも作らない。

   - 権限 LV は rec.lv（ah-staff.js の normalize() が書く）
   - 照合の主鍵は rec.seal.c1（collation/ の照合端末が預ける）
     秘匿（第四種）の鍵はここからのみ得る。ページ・設定・生成物に置かない。

   例外時・未登録時は LV.1。その状態でも開架は通常どおり読める。
   ============================================================ */
const KEY = 'ah.staff.v1';

function record() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (_) { return null; }
}

export function clearance() {
  try {
    const s = record();
    if (!s) return 1;
    // lv が職員証の実際の名前。以下は保険
    const v = s.lv ?? s.clearance_lv ?? s.clearanceLv ?? s.level ?? s.clearance;
    const n = Number(v);
    return Number.isFinite(n) && n >= 1 && n <= 10 ? n : 1;
  } catch (_) { return 1; }
}
export const access = (required) => clearance() >= required;

/* 照合端末で開いた主鍵（base64）。無ければ null */
export function sealKey() {
  try {
    const s = record();
    return (s && s.seal && typeof s.seal.c1 === 'string' && s.seal.c1) || null;
  } catch (_) { return null; }
}
