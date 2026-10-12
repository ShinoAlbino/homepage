/* ============================================================
   ArcaHortus / 権限の読み取り  （大図書館 受付・開架・閉架で共用）

   職員証は assets/ah-staff.js の window.AHStaff が読み書きする。
   ここはその API 越しに読むだけで、localStorage を直接読まない。
   ah-staff.js より後に評価されること（type="module" は自動でそうなる）。
   AHStaff が無いとき・例外時・未登録時は LV.1。その状態でも開架は通常どおり読める。

   - 権限 LV は AHStaff.get().lv（ah-staff.js の normalize() が要件から計算する）
   - 照合の主鍵は AHStaff.get().seal.c1（collation/ の照合端末が預ける）
     秘匿（第四種）と閉架 LV.4 以上の鍵はここからのみ得る。ページ・設定・生成物に置かない。
   ============================================================ */
function staff() {
  try { return (window.AHStaff && window.AHStaff.get()) || null; }
  catch (_) { return null; }
}

export function clearance() {
  try {
    const s = staff();
    if (!s) return 1;
    // lv が AHStaff.get() の実際の名前。以下は保険
    const v = s.lv ?? s.clearance_lv ?? s.clearanceLv ?? s.level ?? s.clearance;
    const n = Number(v);
    return Number.isFinite(n) && n >= 1 && n <= 10 ? n : 1;
  } catch (_) { return 1; }
}
export const access = (required) => clearance() >= required;

/* 照合端末で開いた主鍵（base64）。無ければ null */
export function sealKey() {
  const s = staff();
  return (s && s.seal && typeof s.seal.c1 === 'string' && s.seal.c1) || null;
}

/* 職員番号（請求票の署名）。未登録は null */
export function staffNo() {
  const s = staff();
  return (s && s.no) || null;
}
