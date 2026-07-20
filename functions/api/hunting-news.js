/* ==========================================================================
   狩猟・ジビエ関連ニュース取得API（Cloudflare Pages Function）
   Google News RSSを複数キーワードでサーバーサイド取得・統合し、
   エッジキャッシュしたJSONを返す。狩猟入門サイトのニュース欄から呼び出す。
   同一オリジンで配信するためブラウザ側のCORS制約を回避できる。
   ========================================================================== */

const QUERIES = ['狩猟', 'ジビエ 猟師', '有害鳥獣 捕獲'];
const CACHE_SECONDS = 2700; // 45分
const MAX_ITEMS = 10;

function extractTag(block, tag) {
  const re = new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)<\\/' + tag + '>');
  const m = re.exec(block);
  if (!m) return '';
  let val = m[1].trim();
  const cdata = /^<!\[CDATA\[([\s\S]*)\]\]>$/.exec(val);
  if (cdata) val = cdata[1];
  return val
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function parseRss(xml) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = re.exec(xml)) && items.length < 30) {
    const block = m[1];
    const rawTitle = extractTag(block, 'title');
    const link = extractTag(block, 'link');
    const pubDate = extractTag(block, 'pubDate');
    const source = extractTag(block, 'source');
    if (!rawTitle || !link) continue;
    // Google Newsのtitleは「本文タイトル - 情報源」形式。末尾の情報源名を取り除く
    let title = rawTitle;
    if (source && title.endsWith(source)) {
      title = title.slice(0, title.length - source.length).replace(/[\s\-–—]+$/, '');
    }
    items.push({ title, link, pubDate, source });
  }
  return items;
}

async function fetchQuery(query) {
  const url = 'https://news.google.com/rss/search?q=' + encodeURIComponent(query) + '&hl=ja&gl=JP&ceid=JP:ja';
  const res = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; ArcaHortusHuntingNewsBot/1.0; +https://www.arcahortus.com/)' }
  });
  if (!res.ok) return [];
  const xml = await res.text();
  return parseRss(xml);
}

export async function onRequestGet(context) {
  const cache = caches.default;
  const cacheKey = new Request(context.request.url, context.request);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  let items = [];
  try {
    const results = await Promise.all(QUERIES.map((q) => fetchQuery(q).catch(() => [])));
    const merged = results.flat();
    const seenLinks = new Set();
    const seenTitles = new Set();
    items = merged.filter((it) => {
      const titleKey = it.title.replace(/\s+/g, '');
      if (seenLinks.has(it.link) || seenTitles.has(titleKey)) return false;
      seenLinks.add(it.link);
      seenTitles.add(titleKey);
      return true;
    });
    items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
    items = items.slice(0, MAX_ITEMS);
  } catch (e) {
    items = [];
  }

  const body = JSON.stringify({ updatedAt: new Date().toISOString(), items });
  const response = new Response(body, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=' + CACHE_SECONDS,
      'access-control-allow-origin': '*'
    }
  });
  context.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}
