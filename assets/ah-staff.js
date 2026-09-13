/* ============================================================
   ArcaHortus / 職員登録の状態管理  (GATE 06 職員登録局)

   - localStorage に保存された職員登録の読み書き
   - 全ページのヘッダへ「所属・権限・職員番号」の常時表示を挿入

   保存先は localStorage のみ。外部へ送信しない。
   保存が使えない環境（プライベートウィンドウ等）でも
   例外を投げず、未登録として振る舞う。

   権限 LV は「達成した最高段」ではなく「下から連続して満たした
   要件の段数」で決まる（適性検査 仕様書 §4-6）。要件の充足は rec.req に
   時刻で記録し、LV は保存のたびにここで計算し直す。
   適性検査を先に受けた者は LV.5 の要件を充足するが LV は 2 のままになる。
   この状態は隠さず、職員証に「充足済の要件」として併記する。
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

  /* 要件の段（§4-6）。上から順に、最初に満たさない段の一つ手前が LV。 */
  var REQ = [
    { lv: 2, key: 'reg',     name: '職員登録',              how: '資質検査の完了' },
    { lv: 3, key: 'task',    name: '配属機関の課題',        how: '課題ページの達成記録' },
    { lv: 4, key: 'cipher1', name: '照合1（サイト内の暗号）', how: '照合端末の達成記録' },
    { lv: 5, key: 'part2',   name: '適性検査の完了',        how: '判定が却下でなければ充足' },
    { lv: 6, key: 'task2',   name: '類型別 専任課題',       how: '適性検査の判定後に出題される課題' },
    { lv: 7, key: 'cipher2', name: '照合2（他媒体の符片）',  how: '照合端末の達成記録' }
  ];
  var LABEL = {
    1: 'LEVEL 1 ／ 登録のみ', 2: 'LEVEL 2 ／ 職員証所持者', 3: 'LEVEL 3 ／ 課題達成者',
    4: 'LEVEL 4 ／ 暗号解読者', 5: 'LEVEL 5 ／ 内部資格', 6: 'LEVEL 6 ／ 専任課題達成者',
    7: 'LEVEL 7 ／ 符片照合者'
  };

  /* 旧形式のレコードを現行の形に寄せる。読むたびに行い、書く前にも行う。 */
  function normalize(rec) {
    if (!rec.req) rec.req = {};
    if (!rec.req.reg) rec.req.reg = rec.regAt || Date.now();
    if (rec.part2 && rec.part2.lv5At && !rec.req.part2) rec.req.part2 = rec.part2.lv5At;
    rec.lv = computeLv(rec);
    rec.label = LABEL[rec.lv];
    return rec;
  }

  function computeLv(rec) {
    var lv = 1;
    for (var i = 0; i < REQ.length; i++) {
      if (rec.req && rec.req[REQ[i].key]) lv = REQ[i].lv; else break;
    }
    return lv;
  }

  /* 要件ごとの充足状況。職員証の裏面と適性検査の入口に使う。 */
  function requirements(rec) {
    return REQ.map(function (r) {
      return { lv: r.lv, key: r.key, name: r.name, how: r.how,
               met: !!(rec && rec.req && rec.req[r.key]), at: rec && rec.req ? rec.req[r.key] : null };
    });
  }

  function read() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (!raw) return null;
      var rec = JSON.parse(raw);
      if (!rec || !ORG_JP[rec.org] || !rec.no) return null;
      return normalize(rec);
    } catch (e) { return null; }
  }

  function write(rec) {
    normalize(rec);
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
      var met = requirements(rec).filter(function (r) { return r.met; }).map(function (r) { return r.name; });
      a.classList.add('is-on');
      a.title = ORG_JP[rec.org] + ' ／ ' + rec.label + ' ／ 職員番号 ' + rec.no +
                ' ／ 充足済の要件：' + met.join('・');
      a.innerHTML =
        '<span class="ah-staff-k">' + rec.org + '</span>' +
        '<span class="ah-staff-lv">LV.' + rec.lv + '</span>' +
        '<span class="ah-staff-no">' + rec.no + '</span>';
    } else {
      a.title = '職員登録局で資質検査を受ける';
      a.innerHTML =
        '<span class="ah-staff-k ah-staff-none">未登録</span>' +
        '<span class="ah-staff-no">職員登録局</span>';
    }
    head.appendChild(a);
  }

  window.AHStaff = {
    KEY: KEY,
    ORG_JP: ORG_JP,
    LABEL: LABEL,
    requirements: requirements,
    computeLv: computeLv,
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
