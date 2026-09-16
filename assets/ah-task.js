/* ============================================================
   ArcaHortus / 配属機関の課題（LV.3 の要件）

   大図書館の所蔵文書 archive/*-doc-01.html に読み込む。
   <body data-ah-org="BOF"> の機関が、来訪者の配属機関と一致するとき、
   文書の末尾まで読み進めた時点で要件 task を充足として記録する。
   LV の到達は ah-staff.js が決める（仕様書 §4-6）。

   六機関の文書は意匠が独立しているため、ここが差し込む表示は
   機構側の小さな注記一枚に留め、文書の見た目に干渉しない。
   ============================================================ */
(function () {
  'use strict';

  var PCT = { ETH: '01', GNA: '02', VTI: '03', BOF: '04', SHR: '05', ACA: '06' };
  var docOrg = document.body.getAttribute('data-ah-org');
  if (!docOrg || !window.AHStaff) return;

  var rec = window.AHStaff.get();
  var mine = rec && rec.org === docOrg;
  var done = mine && rec.req && rec.req.task;

  /* 末尾の注記（機構文書書式の縮小版） */
  var note = document.createElement('aside');
  note.id = 'ah-task-note';
  note.setAttribute('aria-live', 'polite');
  note.style.cssText =
    'margin:48px auto 0;max-width:720px;padding:14px 18px;' +
    'border:1px solid #1a2432;background:#0b1019;color:#7d8896;' +
    'font:11.5px/1.8 "Noto Sans JP",system-ui,sans-serif;letter-spacing:.04em;';
  var k = '<span style="display:block;font:9px/1 \'JetBrains Mono\',monospace;letter-spacing:.2em;color:#4f8ea6;margin-bottom:8px">' +
          'ARCA HORTUS ／ 職員登録局 ／ 配属機関の課題</span>';

  function render(state) {
    if (state === 'guest') {
      note.innerHTML = k + '本文書は、配属機関の課題として読まれる。職員登録のうえ、配属機関の所蔵文書を末尾まで読むこと。' +
        ' <a href="../registry.html" style="color:#a7dcec">職員登録局へ</a>';
    } else if (state === 'other') {
      note.innerHTML = k + '本文書は ' + window.AHStaff.ORG_JP[docOrg] + ' の所蔵文書である。貴殿の配属は ' +
        window.AHStaff.ORG_JP[rec.org] + '。課題の対象は配属機関の文書に限る。' +
        ' <a href="../archive.html#PCT-' + PCT[rec.org] + '" style="color:#a7dcec">配属機関の頁へ</a>';
    } else if (state === 'reading') {
      note.innerHTML = k + '本文書は貴殿の配属機関の所蔵文書である。末尾まで読み進めた時点で、課題の達成を記録する。';
    } else if (state === 'done') {
      note.innerHTML = k + '<b style="font-weight:400;color:#c7d2dd">課題の達成を記録した。</b>要件「配属機関の課題」を充足。' +
        ' <a href="../registry.html" style="color:#a7dcec">職員証を確認する</a>';
    }
  }

  document.body.appendChild(note);

  if (!rec) { render('guest'); return; }
  if (!mine) { render('other'); return; }
  if (done) { render('done'); return; }
  render('reading');

  /* 末尾に到達したら記録する。文書が短くて最初から見えている場合も拾う。 */
  function complete() {
    var r = window.AHStaff.get();
    if (!r || r.org !== docOrg) return;
    r.req = r.req || {};
    if (!r.req.task) {
      r.req.task = Date.now();
      r.taskDoc = location.pathname.split('/').pop();
      window.AHStaff.set(r);
      window.AHStaff.refreshChip();
    }
    render('done');
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); complete(); }
    }, { threshold: 0.5 });
    io.observe(note);
  } else {
    var onScroll = function () {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        window.removeEventListener('scroll', onScroll);
        complete();
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }
})();
