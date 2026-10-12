/* ============================================================
   ArcaHortus / 大図書館 ── 記号の対応表と振り分け（受付・照会窓で共用）

   記号は三種ある。
     - 閉架の資料 ID      CLR-001, PCT-02 など   → archive/closed.html#<ID>
     - 所蔵文書の分類記号  AH-4188-0121-A など   → 独立した archive/*-doc-01.html
     - 開架の請求記号      4188/B-02/ｵﾙ, B-02    → archive/open.html?call=<記号>

   分類記号からファイルへの対応表はここにだけ持つ。
   パスはこのファイルの位置（js/）から解決するので、どの階層の頁から呼んでもよい。
   ============================================================ */
const ROOT = new URL('../', import.meta.url);
const at = (path) => new URL(path, ROOT).href;

/* 所蔵文書（六機関の寄稿）。分類記号 → ファイルと、閉架一覧上のカード */
export const HOLDINGS = {
  'AH-4188-0119-A': { file: 'archive/eth-doc-01.html', card: 'PCT-01', org: 'ETH' },
  'AH-4188-0124-A': { file: 'archive/gna-doc-01.html', card: 'PCT-02', org: 'GNA' },
  'AH-4188-0123-A': { file: 'archive/vti-doc-01.html', card: 'PCT-03', org: 'VTI' },
  'AH-4188-0121-A': { file: 'archive/bof-doc-01.html', card: 'PCT-04', org: 'BOF' },
  'AH-4188-0122-D': { file: 'archive/shr-doc-01.html', card: 'PCT-05', org: 'SHR' },
  'AH-4188-0120-A': { file: 'archive/aca-doc-01.html', card: 'PCT-06', org: 'ACA' }
};

export const PAGES = {
  desk: at('archive.html'),
  open: at('archive/open.html'),
  closed: at('archive/closed.html'),
  terms: at('archive/terms.html')
};

const RE_HOLDING = /^AH-\d{4}-\d{4}-[A-Z]$/;
const RE_CARD = /^[A-Z]{3}-\d{2,3}$/;
const RE_CALL = /^(?:4188\/)?[BILTP]-(?:\d{2}|__)(?:\/.*)?$/;

/* 記号を正規化して種別を返す。分からなければ null */
export function classify(raw) {
  const s = String(raw || '').trim().normalize('NFKC').toUpperCase();
  if (!s) return null;
  if (RE_HOLDING.test(s)) return HOLDINGS[s] ? { kind: 'holding', id: s, href: at(HOLDINGS[s].file) } : { kind: 'unknown', id: s };
  if (RE_CARD.test(s)) return { kind: 'card', id: s, href: PAGES.closed + '#' + encodeURIComponent(s) };
  /* 開架の記号は図書記号（半角カナ）を含むので、大文字化・正規化する前の形を渡す */
  const call = String(raw).trim();
  if (RE_CALL.test(s)) return { kind: 'call', id: call, href: PAGES.open + '?call=' + encodeURIComponent(call) };
  return null;
}

/* 受付への来訪のうち、資料を指しているものの転送先（§8-2）。無ければ null
   優先順：#<ID>（現行リンク）→ ?doc= → ?call= */
export function routeOf(loc) {
  const q = new URLSearchParams(loc.search);
  let hash = '';
  try { hash = decodeURIComponent((loc.hash || '').replace(/^#/, '')).trim(); } catch (_) {}
  for (const raw of [hash, q.get('doc')]) {
    if (!raw) continue;
    const c = classify(raw);
    if (c && c.kind !== 'unknown') return c.href;
    /* 形の分からない ID も閉架へ渡す（閉架側で該当が無ければ一覧を出すだけ） */
    if (c === null || c.kind === 'unknown') return PAGES.closed + '#' + encodeURIComponent(raw);
  }
  const call = q.get('call');
  if (call) return PAGES.open + '?call=' + encodeURIComponent(call.trim());
  return null;
}
