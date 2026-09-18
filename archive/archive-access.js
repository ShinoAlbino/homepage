/* ============================================================
   ArcaHortus / 大図書館 ── 権限連動

   - 全カードに必要権限（data-lv）を表記し、来訪者の権限に足りなければ施錠表示にする
   - 封じた本文（archive/vault.json）は、権限が足りるときだけ端末内で開封して読ませる
     HTML のソースには本文が無い。鍵は権限区分から導く（vault-build.mjs と同じ手順）
   - 提携機関カードに、配属機関と課題（LV.3 の要件）の状態を示す

   権限の正本は assets/ah-staff.js（職員証）。ここは読むだけで、書かない。
   ============================================================ */
(function () {
  'use strict';

  var PEPPER = '箱庭次元研究機構／大図書館／全次元史実保護機構 第4188分館';
  var VAULT_URL = 'archive/vault.json';
  var enc = new TextEncoder(), dec = new TextDecoder();
  var vaultP = null;     // vault.json の読み込み（一度だけ）
  var keys = {};         // lv → CryptoKey の Promise

  function staff() { return window.AHStaff ? window.AHStaff.get() : null; }
  /* 未登録は LEVEL 1（公開可）として扱う */
  function myLv() { var r = staff(); return r ? r.lv : 1; }
  function lvName(lv) {
    var L = window.AHStaff && window.AHStaff.LABEL;
    return (L && L[lv]) ? L[lv].replace(/^LEVEL \d+ ／ /, '') : '';
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }

  /* ── 鍵と開封 ───────────────────────────────────── */
  function vault() {
    if (!vaultP) vaultP = fetch(VAULT_URL, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error('vault ' + r.status);
      return r.json();
    });
    return vaultP;
  }
  function keyFor(v, lv) {
    if (!keys[lv]) {
      keys[lv] = crypto.subtle.importKey('raw', enc.encode(PEPPER + '/LV' + lv), 'PBKDF2', false, ['deriveKey'])
        .then(function (base) {
          return crypto.subtle.deriveKey(
            { name: 'PBKDF2', hash: v.kdf.hash, salt: enc.encode(v.kdf.salt), iterations: v.kdf.iterations },
            base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
        });
    }
    return keys[lv];
  }
  function b64u8(s) {
    var bin = atob(s), u = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return u;
  }
  /* 権限が足りる部だけを開封して連結する。足りない部は null を返す */
  function open(docId, lv) {
    return vault().then(function (v) {
      var d = v.docs[docId];
      if (!d) throw new Error('所蔵庫に無い: ' + docId);
      return Promise.all(d.parts.map(function (p) {
        if (lv < p.lv) return null;
        return keyFor(v, p.lv).then(function (key) {
          return crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64u8(p.iv), additionalData: enc.encode(docId + '/' + p.lv) }, key, b64u8(p.ct));
        }).then(function (buf) { return dec.decode(buf); });
      }));
    });
  }

  /* ── 表示 ─────────────────────────────────────────── */
  function lockedHTML(needLv, docId) {
    var r = staff(), have = myLv();
    var bars = '';
    for (var i = 0; i < 6; i++) bars += '<i style="width:' + (52 + ((i * 37 + docId.length * 11) % 44)) + '%"></i>';
    return '<div class="vault-locked" role="note">' +
      '<div class="vault-bars" aria-hidden="true">' + bars + '</div>' +
      '<p class="vault-note">本文は <b>LEVEL ' + needLv + '</b>' + (lvName(needLv) ? '（' + esc(lvName(needLv)) + '）' : '') + ' の権限で開示される。' +
      (r ? '貴殿の権限 LEVEL ' + have + '。' : '職員登録がない。') + '</p>' +
      '<p class="vault-note">' + (r
        ? '要件の充足状況は職員証の裏面に記す。 <a href="registry.html">職員登録局</a>'
        : '<a href="registry.html">職員登録局</a> で資質検査を受け、職員証の発行を受けること。') + '</p>' +
      '</div>';
  }
  function busyHTML() {
    return '<p class="vault-note vault-busy">所蔵庫を照合している…</p>';
  }

  /* 開いた文書へ本文を差し込む（archive.js の openModal から呼ばれる） */
  function onOpen(card) {
    var body = document.getElementById('modal-body');
    var badge = document.getElementById('modal-security');
    var need = Number(card.getAttribute('data-lv') || 1);
    if (badge) badge.textContent = (card.getAttribute('data-security') || '').toUpperCase() + ' ／ LV.' + need;
    if (card.getAttribute('data-vault') !== '1') return;

    var docId = card.getAttribute('data-doc-id');
    var slot = document.createElement('div');
    slot.className = 'vault-slot';
    body.appendChild(slot);

    if (myLv() < need) { slot.innerHTML = lockedHTML(need, docId); return; }
    slot.innerHTML = busyHTML();
    open(docId, myLv()).then(function (parts) {
      /* 開いている文書が変わっていたら書かない */
      if (document.getElementById('modal-id').textContent !== docId) return;
      slot.innerHTML = parts.map(function (p, i) { return p == null ? lockedHTML(need, docId) : p; }).join('');
    }).catch(function (e) {
      slot.innerHTML = '<p class="vault-note">所蔵庫を開けなかった。（' + esc(e.message) + '）</p>';
    });
  }

  /* 全カード：必要権限の表記と施錠 */
  function markCards() {
    var have = myLv();
    document.querySelectorAll('.archive-card[data-lv]').forEach(function (card) {
      var need = Number(card.getAttribute('data-lv'));
      var head = card.querySelector('.card-header');
      var chip = card.querySelector('.doc-lv');
      if (!chip && head) {
        chip = document.createElement('span');
        chip.className = 'doc-lv';
        head.insertBefore(chip, head.querySelector('.doc-id'));
      }
      var locked = have < need;
      if (chip) { chip.textContent = 'LV.' + need; chip.classList.toggle('is-locked', locked); chip.title = locked ? '権限が足りない' : '閲覧できる'; }
      card.classList.toggle('is-locked', locked);
      var more = card.querySelector('.read-more');
      if (more) more.textContent = locked ? 'SEALED ✦' : 'ACCESS ✦';
    });
  }

  /* 提携機関カード：配属機関と課題（LV.3 の要件）の状態 */
  function markPact() {
    var rec = staff();
    document.querySelectorAll('.archive-card[data-org]').forEach(function (card) {
      var org = card.getAttribute('data-org');
      var hint = card.querySelector('.ah-task-hint');
      card.querySelectorAll('.archive-tag.ah-mine').forEach(function (t) { t.remove(); });
      if (!rec) {
        if (hint) hint.textContent = '職員登録のうえ、配属機関の所蔵（寄稿）文書を末尾まで読むと、要件「配属機関の課題」（LV.3）を充足する。';
        return;
      }
      if (rec.org !== org) {
        if (hint) hint.textContent = '課題の対象は配属機関（' + window.AHStaff.ORG_JP[rec.org] + '）の所蔵（寄稿）文書に限る。';
        return;
      }
      var done = rec.req && rec.req.task;
      var mark = document.createElement('span');
      mark.className = 'archive-tag ah-mine' + (done ? ' is-done' : '');
      mark.textContent = done ? '#配属機関 ／ 課題 達成' : '#配属機関 ／ 課題 対象';
      card.querySelector('.card-footer').insertBefore(mark, card.querySelector('.read-more'));
      if (hint) hint.textContent = done
        ? '課題の達成は記録済みである。要件「配属機関の課題」を充足。'
        : '貴殿の配属機関の所蔵（寄稿）文書である。末尾まで読み進めた時点で、課題の達成を記録する（LV.3 の要件）。';
    });
  }

  function refresh() { markCards(); markPact(); }

  if (!window.crypto || !window.crypto.subtle) {
    /* 開封できない環境では施錠表示のみ */
    open = function () { return Promise.reject(new Error('この環境では所蔵庫を開けない')); };
  }

  window.ArchiveAccess = { onOpen: onOpen, refresh: refresh, open: open };
  document.addEventListener('ah:staff-changed', refresh);
  refresh();
})();
