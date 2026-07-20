/**
 * v2用の受け口(現在は未実装)。仕様§9
 *
 * TODO(v2): Cloudflare D1 でコメント投稿/取得を実装する
 *  - GET  /api/comments?since={ts} : 直近コメントの取得
 *  - POST /api/comments            : コメント投稿
 *  - NGワードフィルタ(サーバーサイド)
 *  - レート制限: 1セッションあたり 1分1投稿
 *  - フロント側は SITE_CONFIG.apiEnabled (API_ENABLED) で分岐する
 */
export const onRequest = async (): Promise<Response> =>
  new Response(JSON.stringify({ error: 'not_implemented', hint: 'v2 で開放予定' }), {
    status: 501,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
