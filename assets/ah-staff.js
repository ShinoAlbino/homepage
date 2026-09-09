/* ============================================================
   ArcaHortus / 職員登録の状態管理  (GATE 06 職員登録局)

   - localStorage に保存された職員登録の読み書き
   - 全ページのヘッダへ「所属・権限・職員番号」の常時表示を挿入

   保存先は localStorage のみ。外部へ送信しない。
   保存が使えない環境（プライベートウィンドウ等）でも
   例外を投げず、未登録として振る舞う。

   第二部（詳細適性検査）は内部資格として後日実装する。
   その結果は同じレコードの part2 に入る想定で、
   ここでは器だけ用意して触らない。
   ============================================================ */
(function () {
  'use strict';

  var KEY = 'ah.staff.v1';

  /* ヘッダ表示に必要な最小限の対応表。
     詳細は assets/data/aptitude.json を正とする。 */
  var ORG_JP = {
    ETH: '箱庭世界倫理委員会',
    GNA: 'Global Narrative Archive',
    VTI: 'VOID Tech Industries',
    BOF: '境界線観測財団',
    SHR: 'S.H.R.O.S.',
    ACA: 'A.C.A.S.'
  };

  function read() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (!raw) return null;
      var rec = JSON.parse(raw);
      if (!rec || !ORG_JP[rec.org] || !rec.no) return null;
      return rec;
    } catch (e) { return null; }
  }

  function write(rec) {
    try { window.localStorage.setItem(KEY, JSON.stringify(rec)); return true; }
    catch (e) { return false; }
  }

  function clear() {
    try { window.localStorage.removeItem(KEY); return true; }
    catch (e) { return false; }
  }

  /* ── ヘッダの常時表示 ─────────────────────────────── */
  /* 各ページの <header class="ah-site-head"> の末尾へ挿入する。
     ヘッダの HTML を 9 ファイル分書き換えずに済ませるため、
     マークアップはここで組み立てる。 */
  function initChip() {
    var head = document.querySelector('.ah-site-head');
    if (!head || head.querySelector('.ah-staff-chip')) return;

    var base = head.getAttribute('data-root') || '';   // 下層ページ用（例 "../"）
    var rec = read();
    var a = document.createElement('a');
    a.className = 'ah-staff-chip';
    a.href = base + 'registry.html';

    if (rec) {
      a.classList.add('is-on');
      a.title = ORG_JP[rec.org] + ' ／ ' + rec.label + ' ／ 職員番号 ' + rec.no;
      a.innerHTML =
        '<span class="ah-staff-k">' + rec.org + '</span>' +
        '<span class="ah-staff-lv">LV.' + rec.lv + '</span>' +
        '<span class="ah-staff-no">' + rec.no + '</span>';
    } else {
      a.title = '職員登録局で適性検査を受ける';
      a.innerHTML =
        '<span class="ah-staff-k ah-staff-none">未登録</span>' +
        '<span class="ah-staff-no">職員登録局</span>';
    }
    head.appendChild(a);
  }

  window.AHStaff = {
    KEY: KEY,
    ORG_JP: ORG_JP,
    get: read,
    set: write,
    clear: clear,
    refreshChip: function () {
      var old = document.querySelector('.ah-staff-chip');
      if (old && old.parentNode) old.parentNode.removeChild(old);
      initChip();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChip);
  } else {
    initChip();
  }
})();
