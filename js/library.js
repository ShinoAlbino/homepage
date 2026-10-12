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

/* ── 目録（照会窓 §5）───────────────────────────────────
   開架は archive/data/open.json、閉架の要求権限は archive/closed.html の data-lv が正本。
   どちらも同一オリジンの静的ファイルを読むだけで、何も送らない。 */
const REQ = { 1: '第一種', 2: '第二種', 3: '第三種', 4: '第四種', 5: '第五種', 6: '第六種', 7: '第七種' };
let openP = null, closedP = null;
export function openCatalog() {
  if (!openP) openP = fetch(at('archive/data/open.json'), { cache: 'no-cache' })
    .then((r) => { if (!r.ok) throw new Error('open.json ' + r.status); return r.json(); })
    .catch((e) => { openP = null; throw e; });
  return openP;
}
export function closedLevels() {
  if (!closedP) closedP = fetch(PAGES.closed, { cache: 'no-cache' })
    .then((r) => { if (!r.ok) throw new Error('closed ' + r.status); return r.text(); })
    .then((html) => {
      const lv = {};
      for (const m of html.matchAll(/<article class="archive-card"[^>]*>/g)) {
        const id = m[0].match(/data-doc-id="([^"]+)"/), n = m[0].match(/data-lv="(\d+)"/);
        if (id) lv[id[1]] = n ? Number(n[1]) : 1;
      }
      return lv;
    })
    .catch((e) => { closedP = null; throw e; });
  return closedP;
}

/* 開架の請求記号（4188/B-02/ｵﾙ・4188/B-02・B-02）に当たる項目 */
export function findOpen(items, raw) {
  const w = String(raw || '').trim().normalize('NFKC').toUpperCase();
  if (!w) return null;
  return items.filter((e) => {
    const c = e.call.join('/').normalize('NFKC').toUpperCase();
    return c === w || e.id === w || c.indexOf(w + '/') === 0 || ('4188/' + e.id) === w;
  })[0] || null;
}

/* 照会。結果は四種
     { type:'go',   href, room }        資料へ進める
     { type:'deny', text }              閉架資料。存在は認めるが書名は出さない
     { type:'list', items:[{call,id,name,href}] }  開架の名称・読み・別名の部分一致
     { type:'none', text }              目録に無い */
const NONE = { type: 'none', text: '該当する記号は当分館の目録に存在しない。' };
export async function inquire(raw, lv) {
  const q = String(raw || '').trim();
  if (!q) return NONE;
  const c = classify(q);
  /* 閉架：資料の区分で権限を判定する。所蔵文書は閉架一覧上のカード（PCT-xx）の区分に従う */
  if (c && (c.kind === 'holding' || c.kind === 'card')) {
    const lvs = await closedLevels();
    const card = c.kind === 'holding' ? HOLDINGS[c.id].card : c.id;
    if (!(card in lvs)) return NONE;
    if (lv < lvs[card]) return { type: 'deny', text: c.id + ' は閉架資料である。請求には' + (REQ[lvs[card]] || 'それ以上') + '以上の権限を要する。' };
    return { type: 'go', href: c.href, room: 'closed' };
  }
  if (c && c.kind === 'unknown') return NONE;
  const items = await openCatalog();
  if (c && c.kind === 'call') {
    const e = findOpen(items, q);
    return e ? { type: 'go', href: PAGES.open + '?call=' + encodeURIComponent(e.call.join('/')), room: 'open' } : NONE;
  }
  const k = q.normalize('NFKC').toLowerCase();
  const hits = items.filter((e) => e.listing !== '差止' && [e.name, e.reading, e.nomen].concat(e.aliases || [])
    .some((s) => s && s !== '—' && String(s).normalize('NFKC').toLowerCase().indexOf(k) >= 0));
  if (!hits.length) return NONE;
  return { type: 'list', items: hits.slice(0, 10).map((e) => ({
    call: e.call.join('/'), id: e.id, name: e.name,
    href: PAGES.open + '?call=' + encodeURIComponent(e.call.join('/'))
  })) };
}

/* ── 閲覧記録（§6）───────────────────────────────────
   ah.lib.log.v1 = [{ call, at }]（古い順）。直近 50 件まで。端末の外へは一切出さない。 */
const LOG_KEY = 'ah.lib.log.v1', LOG_MAX = 50;
export function readLog() {
  try {
    const a = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    return Array.isArray(a) ? a.filter((x) => x && typeof x.call === 'string' && Number.isFinite(x.at)) : [];
  } catch (_) { return []; }
}
export function logView(call) {
  if (!call) return;
  try {
    const a = readLog();
    const last = a[a.length - 1];
    if (last && last.call === call) return;      // 同じ資料を続けて開いたときは一件とする
    a.push({ call: String(call), at: Date.now() });
    localStorage.setItem(LOG_KEY, JSON.stringify(a.slice(-LOG_MAX)));
  } catch (_) { /* 保存できない環境では記録しない */ }
}
export function clearLog() {
  try { localStorage.removeItem(LOG_KEY); } catch (_) {}
}
