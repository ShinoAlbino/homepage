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
   LV.4 以上の鍵は、照合端末が出来た時点で「照合の答え」に置き換える予定。
   ============================================================ */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { webcrypto as crypto } from 'node:crypto';

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

async function keyFor(lv) {
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

const out = {
  docId: 'AH-ARC-VAULT', version: '1.0.0',
  generated: new Date().toISOString().slice(0, 10),
  note: '大図書館の所蔵本文。権限区分ごとの鍵で AES-GCM に封じてある。原本は公開リポジトリの外に置く。',
  kdf: KDF, cipher: 'AES-GCM-256', docs: {}
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
