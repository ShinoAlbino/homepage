/**
 * v2用の受け口(現在は未実装)。仕様§9
 *
 * TODO(v2): Workers AI による此芽との限定会話モードを実装する
 *  - POST /api/talk : { message } → { reply, expression }
 *  - KV日次カウンタで「全体上限」と「個人上限」の二重ガードを行う
 *  - 世界観プロンプト(此芽の口調/設定)はサーバー側で固定し、注入を防ぐ
 *  - フロント側は SITE_CONFIG.apiEnabled (API_ENABLED) で分岐する
 */
export const onRequest = async (): Promise<Response> =>
  new Response(JSON.stringify({ error: 'not_implemented', hint: 'v2 で開放予定' }), {
    status: 501,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
