/* ============================================================
   ArcaHortus / 大図書館 所蔵庫の封緘  ── archive/vault.json を作る

   本文の原本は公開リポジトリの外（統合情報管理システム／大図書館_原本／<ID>.html）に置く。
   本ツールは原本を権限区分ごとの鍵で AES-GCM に封じ、archive/vault.json へ書き出す。
   閲覧側（archive-access.js）は職員証の権限が足りるときだけ同じ鍵を導いて開封する。
   HTML のソースを読んでも本文は現れない。

   使い方（homepage/ で）:
     node archive/vault-build.mjs
     node archive/vault-build.mjs --src "C:\\path\\to\\大図書館_原本"

   鍵の導出は archive-access.js と一致させること（PEPPER・salt・反復回数・AAD）。

   LV.4 以上の鍵は主鍵 K4 から導く。K4 は照合端末（AH-REG-003）の正解でしか開かない。
     - K4 と正解表は原本と同じ場所の _collation.json に置く（公開リポジトリには置かない）
         { "k4": "<base64 32byte。無ければ初回に生成して書き戻す>",
           "answers": { "BOF": ["<文書番号>", ...], ... } }
     - 機関ごとに、正解の各表記から PBKDF2 で鍵を作り、K4 を AES-GCM で封じて gate に書く
     - 端末は奏上された文書番号で封を開こうとする。認証タグが通れば荒魂の徴が立つ
     - 正解は書架（collation/collate-core.js の SHELF）に実在し、その機関の管轄であること
   K4 を作り直すと、既に照合を済ませた職員の鍵が失効する。作り直さないこと。
   ============================================================ */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { webcrypto as crypto } from 'node:crypto';
import { createRequire } from 'node:module';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const args = process.argv.slice(2);
const srcIdx = args.indexOf('--src');
const SRC = srcIdx >= 0 ? resolve(args[srcIdx + 1])
                        : resolve(ROOT, '..', '..', 'ArcaHortus統合情報管理システム', '大図書館_原本');

const KDF = { name: 'PBKDF2', hash: 'SHA-256', iterations: 120000, salt: 'AH-ARCHIVE-VAULT/1' };
const PEPPER = '箱庭次元研究機構／大図書館／全次元史実保護機構 第4188分館';

const enc = new TextEncoder();
const b64 = (u8) => Buffer.from(u8).toString('base64');
const { norm, SHELF, GATE } = createRequire(import.meta.url)(join(ROOT, 'collation', 'collate-core.js'));
const ORGS = ['ETH', 'GNA', 'VTI', 'BOF', 'SHR', 'ACA'];

/* ── 主鍵 K4 と正解表 ── */
const SECRET = join(SRC, '_collation.json');
if (!existsSync(SECRET)) { console.error('正解表が無い:', SECRET); process.exit(1); }
const secret = JSON.parse(readFileSync(SECRET, 'utf8'));
if (!secret.k4) {
  secret.k4 = b64(crypto.getRandomValues(new Uint8Array(32)));
  writeFileSync(SECRET, JSON.stringify(secret, null, 2) + '\n');
  console.log('generated K4 →', SECRET);
}
const K4 = new Uint8Array(Buffer.from(secret.k4, 'base64'));
for (const org of ORGS) {
  const list = secret.answers && secret.answers[org];
  if (!Array.isArray(list) || !list.length) { console.error('正解が無い:', org); process.exit(1); }
  for (const a of list) {
    const j = SHELF[norm(a)];
    if (!j) { console.error('書架に無い番号:', org, a); process.exit(1); }
    if (!j.includes(org)) { console.error('管轄の外の番号:', org, a); process.exit(1); }
  }
}

async function keyFor(lv) {
  if (lv >= 4) {
    const base = await crypto.subtle.importKey('raw', K4, 'HKDF', false, ['deriveKey']);
    return crypto.subtle.deriveKey(
      { name: 'HKDF', hash: 'SHA-256', salt: enc.encode(KDF.salt), info: enc.encode('LV' + lv) },
      base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
  }
  const base = await crypto.subtle.importKey('raw', enc.encode(PEPPER + '/LV' + lv), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', hash: KDF.hash, salt: enc.encode(KDF.salt), iterations: KDF.iterations },
    base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
}

async function seal(docId, lv, html) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await keyFor(lv);
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: enc.encode(docId + '/' + lv) }, key, enc.encode(html));
  return { lv, iv: b64(iv), ct: b64(new Uint8Array(ct)) };
}

/* 封じる文書と権限は archive.html の data-vault / data-lv から読む（正本を一つにする） */
const page = readFileSync(join(ROOT, 'archive.html'), 'utf8');
const targets = [];
for (const m of page.matchAll(/<article class="archive-card"[^>]*>/g)) {
  const tag = m[0];
  if (!/data-vault="1"/.test(tag)) continue;
  const id = tag.match(/data-doc-id="([^"]+)"/)[1];
  const lv = Number(tag.match(/data-lv="(\d)"/)[1]);
  targets.push({ id, lv });
}

/* 照合端末の封：機関ごとに、正解の各表記で K4 を封じる */
async function gate() {
  const orgs = {};
  for (const org of ORGS) {
    const salt = b64(crypto.getRandomValues(new Uint8Array(16)));
    const seals = [];
    for (const a of secret.answers[org]) {
      const base = await crypto.subtle.importKey('raw', enc.encode(norm(a)), 'PBKDF2', false, ['deriveKey']);
      const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', hash: GATE.kdf.hash, salt: enc.encode(org + '/' + salt), iterations: GATE.kdf.iterations },
        base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: enc.encode(GATE.id + '/' + org) }, key, K4);
      seals.push({ iv: b64(iv), ct: b64(new Uint8Array(ct)) });
    }
    orgs[org] = { salt, seals };
  }
  return { id: GATE.id, kdf: GATE.kdf, note: '照合の正解で開く封。中身は LV.4 以上の主鍵である。', orgs };
}

const out = {
  docId: 'AH-ARC-VAULT', version: '1.1.0',
  generated: new Date().toISOString().slice(0, 10),
  note: '大図書館の所蔵本文。権限区分ごとの鍵で AES-GCM に封じてある。原本は公開リポジトリの外に置く。',
  kdf: KDF, cipher: 'AES-GCM-256', docs: {}, gate: await gate()
};
for (const t of targets) {
  const p = join(SRC, t.id + '.html');
  if (!existsSync(p)) { console.error('原本が無い:', p); process.exit(1); }
  const html = readFileSync(p, 'utf8');
  out.docs[t.id] = { lv: t.lv, parts: [await seal(t.id, t.lv, html)] };
  console.log('sealed', t.id, 'LV.' + t.lv, html.length, 'chars');
}
writeFileSync(join(HERE, 'vault.json'), JSON.stringify(out, null, 1) + '\n');
console.log('wrote archive/vault.json', Object.keys(out.docs).length, 'docs');
