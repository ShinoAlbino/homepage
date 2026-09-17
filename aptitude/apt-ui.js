/* ============================================================
   ArcaHortus / 適性検査 ── 画面

   - 入口（§4-2）：職員証（資質検査の記録）が無ければ受検できない
   - 教示・年齢確認・規範セル（§5-4, D8）
   - 出題：1画面1項目、6段階・中間なし、選択肢は縦（§0-5, §0-6）
   - 三期分割、期の間で中断・再開（§0-9）。進捗は localStorage に保存
   - 画面単位の所要秒（§5-5 (7)）
   - 報告書 7 層（§5-8）
   - 履歴・30日規則・前回との差（§4-4）
   - 完了（却下以外）で要件「適性検査」を充足。LV の到達は ah-staff.js が
     §4-6 の累積要件式で決める。ここでは要件を記録するだけ

   採点は apt-core.js。ここは表示と状態だけ。
   ============================================================ */
(function () {
  'use strict';

  var PKEY = 'ah.apt.progress.v1';
  var $ = function (id) { return document.getElementById(id); };
  /* データの置き場。別頁から読むときは <script data-base="aptitude/"> で与える。 */
  var BASE = (document.currentScript && document.currentScript.getAttribute('data-base')) || '';
  /* 受検の画面が無い頁（registry.html）では報告書の再表示だけを担う。 */
  var EMBED = !document.getElementById('apt-start');
  var D = { items: null, types: null, norms: null };
  var S = null;        // 進捗（受検中）
  var R = null;        // 採点結果（報告書表示中）

  /* ── 画面の動き ─────────────────────────────────────
     動きは見せるだけで、状態は常にタイマーで進める。
     prefers-reduced-motion のときは待ち時間も詰める。 */
  var MOTION = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var adv = null;      // 回答後に次へ進むタイマー
  var clock = null;    // 経過時間の更新
  var typer = null;    // 項目番号の打ち出し
  var SEG = {};        // 画面番号 → 計器の目盛

  /* ── 便利 ─────────────────────────────────────────── */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function fmtDate(d) { return d.getFullYear() + '.' + pad(d.getMonth() + 1) + '.' + pad(d.getDate()); }
  function now() { return Date.now(); }
  function show(which) {
    ['apt-gate', 'apt-intro', 'apt-exam', 'apt-break', 'apt-report'].forEach(function (id) {
      var e = $(id);
      if (e) e.hidden = (id !== which);
    });
    if (!EMBED) window.scrollTo({ top: 0, behavior: 'auto' });
    /* 出題画面を離れたら、進行待ちのタイマーと時計を止める */
    if (which === 'apt-exam') startClock();
    else { stopClock(); cancelAdvance(); }
  }

  function cancelAdvance() { if (adv) { clearTimeout(adv); adv = null; } }

  /* 一度付けた class を外して付け直し、動きを最初から走らせる */
  function replay(e, cls) {
    if (!e) return;
    e.classList.remove(cls);
    void e.offsetWidth;
    e.classList.add(cls);
  }

  /* 経過時間：画面ごとの所要秒の合計＋いまの画面の滞在。妥当性指標と同じ物差し */
  function mmss(sec) {
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 100 ? pad(m) : String(m)) + ':' + pad(s);
  }
  function elapsedSec() {
    if (!S) return 0;
    var t = 0;
    Object.keys(S.timing).forEach(function (k) { t += S.timing[k]; });
    if (S.screenEnter) t += (now() - S.screenEnter) / 1000;
    return Math.max(0, Math.floor(t));
  }
  function tickClock() {
    var e = $('apt-tele-time');
    if (!e || !S) return;
    e.firstChild.nodeValue = 'ELAPSED ' + mmss(elapsedSec());
  }
  function startClock() {
    stopClock();
    if (!$('apt-tele-time')) return;
    tickClock();
    clock = setInterval(tickClock, 1000);
  }
  function stopClock() { if (clock) { clearInterval(clock); clock = null; } }

  /* 項目番号を一字ずつ打ち出す。読み上げ対象ではない（aria-hidden） */
  function typeId(text) {
    var e = $('apt-qid');
    if (typer) { clearInterval(typer); typer = null; }
    e.classList.remove('is-typing');
    if (!MOTION) { e.textContent = text; return; }
    var i = 0;
    e.textContent = '';
    e.classList.add('is-typing');
    typer = setInterval(function () {
      i++;
      e.textContent = text.slice(0, i);
      if (i >= text.length) { clearInterval(typer); typer = null; e.classList.remove('is-typing'); }
    }, 28);
  }

  /* 計器：13 画面を期ごとに束ねた目盛。塗りは画面内の回答率 */
  function buildGauge() {
    var g = $('apt-gauge');
    if (!g) return;
    g.textContent = '';
    var groups = {}, n = {};
    D.items.screens.forEach(function (sc) {
      var grp = groups[sc.period];
      if (!grp) {
        grp = groups[sc.period] = el('span', 'apt-gauge-g', '<em>' + ['I', 'II', 'III'][sc.period - 1] + '</em>');
        n[sc.period] = 0;
        g.appendChild(grp);
      }
      var seg = el('i', 'apt-seg', '<b></b>');
      grp.appendChild(seg);
      grp.style.setProperty('--n', ++n[sc.period]);   /* 画面数に応じて幅を配る */
      SEG[sc.no] = { i: seg, b: seg.firstChild, g: grp };
    });
  }
  function updateGauge() {
    if (!SEG[1]) return;
    var cnt = {};
    FLAT.forEach(function (f) { if (S.answers[f.it.id] != null) cnt[f.screen] = (cnt[f.screen] || 0) + 1; });
    var cur = FLAT[S.pos];
    D.items.screens.forEach(function (sc) {
      var seg = SEG[sc.no];
      seg.b.style.transform = 'scaleX(' + ((cnt[sc.no] || 0) / sc.items.length).toFixed(3) + ')';
      seg.i.classList.toggle('is-cur', sc.no === cur.screen);
      seg.i.classList.toggle('is-done', sc.no < cur.screen);
      seg.g.classList.toggle('is-on', sc.period <= cur.period);
    });
  }
  function readP() {
    try { var r = localStorage.getItem(PKEY); return r ? JSON.parse(r) : null; } catch (e) { return null; }
  }
  function writeP(p) { try { localStorage.setItem(PKEY, JSON.stringify(p)); } catch (e) {} }
  function clearP() { try { localStorage.removeItem(PKEY); } catch (e) {} }

  function flatItems() {
    var out = [];
    D.items.screens.forEach(function (sc) {
      sc.items.forEach(function (it, i) { out.push({ it: it, screen: sc.no, period: sc.period, i: i }); });
    });
    return out;
  }
  var FLAT = null;

  /* ── 入口 ─────────────────────────────────────────── */
  function gate() {
    var rec = window.AHStaff.get();
    if (!rec) { show('apt-gate'); return; }

    var hist = (rec.part2 && rec.part2.history) || [];
    var last = hist.length ? hist[hist.length - 1] : null;
    var p = readP();

    /* 30日規則（§4-4）。却下だった場合は適用しない。 */
    var days = last ? Math.floor((now() - last.at) / 86400000) : null;
    var blocked = last && last.status !== 'reject' && days < D.norms.retakeDays;

    var met = window.AHStaff.requirements(rec).filter(function (r) { return r.met; }).map(function (r) { return r.name; });
    $('apt-staff-line').textContent =
      window.AHStaff.ORG_JP[rec.org] + ' ／ ' + rec.no + ' ／ LV.' + rec.lv + ' ／ 充足済：' + met.join('・');

    var h = $('apt-history');
    h.textContent = '';
    if (last) {
      var t = last.type;
      h.appendChild(el('p', 'apt-fine',
        '前回受検 ' + esc(fmtDate(new Date(last.at))) + '。経過 <b>' + days + '</b> 日。' +
        (t ? ' 判定 ' + esc(t.title) + '（' + esc(t.kanji) + '）。' : ' 判定 却下。') +
        (blocked ? '<br>再受検は前回から ' + D.norms.retakeDays + ' 日以上を空けること。あと <b>' +
                   (D.norms.retakeDays - days) + '</b> 日。' : '')));
      $('apt-view-last').hidden = false;
    } else {
      $('apt-view-last').hidden = true;
    }

    $('apt-resume').hidden = !p;
    if (p) {
      var done = Object.keys(p.answers).length;
      $('apt-resume').textContent = '続きから受ける（' + done + ' 問 回答済み）';
    }
    $('apt-start').disabled = !!blocked;
    $('apt-start').textContent = last ? '再受検する' : '検査を開始する';
    show('apt-intro');
  }

  /* ── 開始・再開 ───────────────────────────────────── */
  function begin(resume) {
    var p = resume ? readP() : null;
    if (!p) {
      if (!$('apt-age').checked) {
        $('apt-age-warn').hidden = false;
        $('apt-age').focus();
        return;
      }
      p = {
        startedAt: now(),
        answers: {},
        timing: {},              // 画面番号 → 累積秒
        pos: 0,                  // FLAT の添字
        demo: { sex: $('apt-sex').value || null, age: $('apt-agegrp').value || null },
        noSave: $('apt-nosave').checked
      };
    }
    S = p;
    S.screenEnter = now();
    writeP(S);
    render();
    show('apt-exam');
  }

  function tickScreen(scNo) {
    if (!S.screenEnter) return;
    var sec = Math.round((now() - S.screenEnter) / 1000);
    S.timing[scNo] = (S.timing[scNo] || 0) + sec;
    S.screenEnter = now();
  }

  /* ── 出題 ─────────────────────────────────────────── */
  function render() {
    cancelAdvance();
    var f = FLAT[S.pos], it = f.it;
    var total = FLAT.length;
    $('apt-counter').textContent =
      '第' + ['一', '二', '三'][f.period - 1] + '期 ／ 画面 ' + pad(f.screen) + ' ／ ' +
      String(S.pos + 1).padStart(3, '0') + ' / ' + total;
    updateGauge();
    tickClock();
    $('apt-qtext').textContent = it.text;
    typeId(it.id);
    replay($('apt-q'), 'is-in');
    $('apt-stamp').classList.remove('is-on');

    /* 選択肢を作り直す。矢印キーで選択肢に居た場合は同じ位置へ焦点を戻す */
    var cur = S.answers[it.id];
    var wrap = $('apt-scale');
    var focusAt = Array.prototype.indexOf.call(wrap.children, document.activeElement);
    wrap.textContent = '';
    D.items.scale.forEach(function (label, i) {
      var v = i + 1;
      var b = el('button', 'apt-opt' + (cur === v ? ' is-on' : ''),
        '<span class="apt-opt-n" aria-hidden="true">' + v + '</span><span class="apt-opt-l">' + esc(label) + '</span>');
      b.type = 'button';
      b.setAttribute('role', 'radio');
      b.setAttribute('aria-checked', cur === v ? 'true' : 'false');
      b.dataset.v = v;
      b.style.setProperty('--i', i);
      b.addEventListener('click', function () { answer(v); });
      wrap.appendChild(b);
    });
    replay(wrap, 'is-in');
    if (focusAt >= 0 && wrap.children[focusAt]) {
      try { wrap.children[focusAt].focus({ preventScroll: true }); } catch (e) { wrap.children[focusAt].focus(); }
    }
    $('apt-back').disabled = (S.pos === 0);
    $('apt-skip').textContent = cur ? '次へ' : '未回答のまま次へ';
  }

  function answer(v) {
    if (!S || adv) return;                /* 進行待ちの間の二度押しは受けない */
    var it = FLAT[S.pos].it;
    S.answers[it.id] = v;
    writeP(S);
    /* 選んだことが見えてから進む：帯が一度走り、記録印が出る */
    Array.prototype.forEach.call($('apt-scale').children, function (b) {
      var on = Number(b.dataset.v) === v;
      b.classList.toggle('is-on', on);
      b.classList.toggle('is-hit', on);
      b.setAttribute('aria-checked', on ? 'true' : 'false');
    });
    var st = $('apt-stamp');
    st.textContent = 'RECORDED ' + String(S.pos + 1).padStart(3, '0') + ' ／ ' + FLAT.length;
    st.classList.add('is-on');
    adv = setTimeout(function () { adv = null; next(); }, MOTION ? 300 : 220);
  }

  function next() {
    if (!S) return;                       /* 完了・中止の後に遅延タイマーが走った場合 */
    var f = FLAT[S.pos];
    if (S.pos >= FLAT.length - 1) { tickScreen(f.screen); finish(); return; }
    var g = FLAT[S.pos + 1];
    if (g.screen !== f.screen) tickScreen(f.screen);
    S.pos++;
    writeP(S);
    /* 期の切れ目（画面4→5、8→9）では一息入れる */
    if (g.period !== f.period && g.i === 0) { breakScreen(f.period); return; }
    render();
  }

  function back() {
    if (!S || S.pos === 0) return;
    var f = FLAT[S.pos], g = FLAT[S.pos - 1];
    if (g.screen !== f.screen) tickScreen(f.screen);
    S.pos--;
    writeP(S);
    render();
  }

  function breakScreen(donePeriod) {
    var jp = ['一', '二', '三'][donePeriod - 1];
    /* 期を封じる：線が引かれ、封が捺される。数は当該期の記録済み項目 */
    var n = 0, m = 0;
    FLAT.forEach(function (f) {
      if (f.period !== donePeriod) return;
      m++;
      if (S.answers[f.it.id] != null) n++;
    });
    $('apt-seal-stamp').textContent = 'SEALED ／ PERIOD ' + ['I', 'II', 'III'][donePeriod - 1];
    $('apt-seal-text').textContent = '第' + jp + '期 了 ／ 記録 ' + n + ' ／ ' + m + ' 項目 ／ ELAPSED ' + mmss(elapsedSec());
    replay($('apt-seal'), 'is-in');
    $('apt-break-title').textContent = '第' + jp + '期 終了';
    $('apt-break-body').textContent =
      '回答は保存された。ここで中断し、あとから続きを受けることができる。続ける場合は、そのまま次の期へ進む。';
    show('apt-break');
  }

  function suspend() {
    tickScreen(FLAT[S.pos].screen);
    S.screenEnter = null;
    writeP(S);
    gate();
  }

  function abort() {
    if (!window.confirm('検査を中止し、ここまでの回答を破棄します。よろしいですか。')) return;
    clearP(); S = null;
    gate();
  }

  /* ── 完了・採点 ───────────────────────────────────── */
  function finish() {
    var timing = Object.keys(S.timing).map(function (k) { return { no: Number(k), sec: S.timing[k] }; });
    R = window.AptCore.score(D.items, D.types, D.norms, S.answers, timing, S.demo);
    R.at = now();
    R.demo = S.demo;
    R.answers = S.answers;
    R.timing = timing;
    R.startedAt = S.startedAt;

    var rec = window.AHStaff.get();
    if (rec && !S.noSave) {
      rec.part2 = rec.part2 || { history: [], lv5At: null };
      var entry = {
        at: R.at, version: D.items.version, normStage: D.norms.stage, status: R.gate.status,
        type: R.type ? { code: R.type.code, kanji: R.type.kanji, title: R.type.title,
                         suffix: R.type.suffix, honesty: R.type.honesty,
                         confidence: R.type.confidence } : null,
        domains: {}, validity: R.validity, demo: R.demo, answers: R.answers, timing: R.timing
      };
      Object.keys(R.domains).forEach(function (k) { entry.domains[k] = R.domains[k].z; });
      rec.part2.history.push(entry);
      /* 受検が要件。結果の質で権限を動かさない。却下のみ充足しない。
         LV への到達は AHStaff が下位要件の充足を見て決める。 */
      rec.req = rec.req || {};
      if (R.gate.status !== 'reject' && !rec.req.part2) rec.req.part2 = R.at;
      rec.part2.latest = (R.gate.status === 'reject') ? rec.part2.latest || null : {
        title: R.type.title, kanji: R.type.kanji, code: R.type.code,
        suffix: R.type.suffixInfo.sym, honesty: R.type.honestyInfo.sym, status: R.gate.status, at: R.at
      };
      window.AHStaff.set(rec);
      window.AHStaff.refreshChip();
      R.saved = true;
      R.prev = rec.part2.history.length >= 2 ? rec.part2.history[rec.part2.history.length - 2] : null;
    } else {
      R.saved = false;
      R.prev = null;
    }
    clearP(); S = null;
    report();
  }

  /* 履歴から最新の報告書を再表示する（採点し直す） */
  function viewLast() {
    var rec = window.AHStaff.get();
    var h = rec && rec.part2 && rec.part2.history;
    if (!h || !h.length) return;
    var last = h[h.length - 1];
    R = window.AptCore.score(D.items, D.types, D.norms, last.answers, last.timing, last.demo);
    R.at = last.at; R.demo = last.demo; R.answers = last.answers; R.timing = last.timing;
    R.saved = true; R.replay = true;
    R.prev = h.length >= 2 ? h[h.length - 2] : null;
    report();
  }

  /* ── 報告書 ───────────────────────────────────────── */
  function pct(b) { return b ? Math.round(b.pct) : null; }

  function bandHTML(b, hiName, loName, hidden) {
    if (hidden || !b) {
      return '<div class="apt-band is-na"><span class="apt-band-lo">' + esc(loName) + '</span>' +
             '<span class="apt-band-t"><em>回答が足りず算出できない</em></span>' +
             '<span class="apt-band-hi">' + esc(hiName) + '</span></div>';
    }
    return '<div class="apt-band">' +
      '<span class="apt-band-lo">' + esc(loName) + '</span>' +
      '<span class="apt-band-t"><i style="left:' + b.lo.toFixed(1) + '%;width:' + (b.hi - b.lo).toFixed(1) + '%"></i>' +
      '<b style="left:' + b.pct.toFixed(1) + '%"></b></span>' +
      '<span class="apt-band-hi">' + esc(hiName) + '</span>' +
      '<span class="apt-band-v">' + (b.numeric
          ? Math.round(b.pct) + '<small>／帯 ' + Math.round(b.lo) + '–' + Math.round(b.hi) + '　T ' + Math.round(b.T) + '</small>'
          : esc(b.word) + '<small>' + esc(hiName) + '側　z ' + (b.z >= 0 ? '+' : '') + b.z.toFixed(2) + '</small>') + '</span>' +
      '</div>';
  }

  function report() {
    var T = R.type, G = R.gate, rec = window.AHStaff.get();
    var out = $('apt-report-body');
    out.textContent = '';

    /* 状態帯 */
    var st = $('apt-status');
    st.className = 'apt-status is-' + G.status;
    st.textContent = {
      valid: '判定 有効', hold: '判定 保留', low: '判定 有効 ／ 信頼度 低', reject: '本検査は成立しない'
    }[G.status] + (R.saved ? '' : ' ／ 未登録（保存しない設定）') + (R.replay ? ' ／ 記録の再表示' : '');

    if (G.status === 'reject') {
      var rj = el('section', 'apt-layer');
      rj.innerHTML = '<h3>却下の理由</h3><p>' + esc(D.prose.validity.reject) + '</p>' +
        '<ul class="apt-list">' + G.notes.filter(function (n) { return n.level === 'reject'; })
          .map(function (n) { return '<li>' + esc(n.msg) + '</li>'; }).join('') + '</ul>' +
        '<p>結果は表示しない。再受検を促す。この場合、' + D.norms.retakeDays + ' 日の間隔規則は適用しない。</p>';
      out.appendChild(rj);
      out.appendChild(layer7());
      show('apt-report');
      return;
    }

    /* 層1 職掌類型 */
    var l1 = el('section', 'apt-layer apt-l1');
    var unstableTxt = T.unstable.map(function (a) {
      var ax = D.items.axes.filter(function (x) { return x.code === a; })[0];
      var semDist = (Math.abs(R.domains[a].z) / T.SEM).toFixed(2);
      return '第' + ['一', '二', '三', '四'][ax.no - 1] + '軸は境界から ' + semDist + ' SEM の位置にある。当該文字は安定しない。';
    }).join('<br>');
    var near = T.nearest;
    l1.innerHTML =
      '<p class="apt-kicker">' + esc(T.groupName) + ' ／ ' + esc(D.types.groups[T.group].line) + '</p>' +
      '<h2 class="apt-type">' + esc(T.title) + '<em>' + esc(T.kanji) + '　' + esc(T.latin) + '</em></h2>' +
      '<p class="apt-lead">貴殿のプロファイルに最も近い職掌は <b>' + esc(T.title) + '（' + esc(T.kanji) + '）</b> である。' +
      (near[1] ? '次に近いのは <b>' + esc(near[1].title) + '（' + esc(near[1].kanji) + '）</b>、距離差 ' + near[1].gap.toFixed(2) + '。' : '') +
      (near[2] ? '第三は ' + esc(near[2].title) + '（' + esc(near[2].kanji) + '）、距離差 ' + near[2].gap.toFixed(2) + '。' : '') + '</p>' +
      '<p class="apt-lead">' + esc(T.line) + '。</p>' +
      bodyHTML(T) +
      evidenceHTML(T) +
      '<dl class="apt-mods">' +
        '<div><dt>第五軸 ' + esc(T.suffixInfo.sym) + ' ' + esc(T.suffixInfo.name) + '</dt><dd>' + esc(T.suffixInfo.desc) + '</dd></div>' +
        '<div><dt>第六軸 ' + esc(T.honestyInfo.sym) + ' ' + esc(T.honestyInfo.name) + '</dt><dd>' + esc(T.honestyInfo.desc) +
          (G.virtueHigh ? '<br><b>稀有な美徳の得点が高い。第六軸の得点は、上限側の推定として読むこと。</b>' : '') + '</dd></div>' +
      '</dl>' +
      '<p class="apt-conf">本判定が再受検において同一となる確率は <b>' + T.confidence.toFixed(2) + '</b> と推定される。' +
        (unstableTxt ? '<br>' + unstableTxt : '') +
        '<br><span class="apt-fine">四軸の安定確率 ' + ['E', 'O', 'A', 'C'].map(function (a) { return a + ' ' + T.stability[a].toFixed(2); }).join('　') +
        '　／　第五軸 ' + T.stability.N.toFixed(2) + '　第六軸 ' + T.stability.H.toFixed(2) + '</span></p>' +
      (G.status !== 'valid' ? '<p class="apt-warn">' + G.notes.filter(function (n) { return n.level === 'reject'; })
         .map(function (n) { return esc(n.msg); }).join('<br>') + '</p>' : '') +
      '<p class="apt-fine">半年後に受け直せば、この数値は多少動く。職掌は機関に属さない。同一の職掌が、機関ごとに異なる業務に充てられる。</p>';
    out.appendChild(l1);

    /* 前回との差（§4-4） */
    if (R.prev && R.prev.domains) {
      var dd = window.AptCore.diff(R.prev.domains, Object.keys(R.domains).reduce(function (o, k) { o[k] = R.domains[k].z; return o; }, {}), D.norms);
      var days = Math.floor((R.at - R.prev.at) / 86400000);
      var sig = dd.filter(function (d) { return d.level === 'sig'; });
      var maybe = dd.filter(function (d) { return d.level === 'maybe'; });
      var rest = 6 - sig.length - maybe.length;
      var l0 = el('section', 'apt-layer apt-gna');
      l0.innerHTML = '<h3>前回との差</h3><p>前回受検 ' + esc(fmtDate(new Date(R.prev.at))) + '。経過 <b>' + days + '</b> 日。<br>' +
        sig.map(function (d) { return axisLabel(d.axis) + 'に <b>' + (d.delta >= 0 ? '+' : '') + d.delta.toFixed(2) + '</b> の変動が認められる。'; }).join('') +
        maybe.map(function (d) { return axisLabel(d.axis) + 'に ' + (d.delta >= 0 ? '+' : '') + d.delta.toFixed(2) + ' の変動の可能性がある。次回の受検を待つ。'; }).join('') +
        (rest === 6 ? '六軸に有意な変動は認められない。' : rest > 0 ? '他の' + ['', '一', '二', '三', '四', '五'][rest] + '軸に有意な変動は認められない。' : '') +
        '<br><span class="apt-fine">差の標準誤差 ' + dd[0].seDiff.toFixed(2) + '（SEM × √2）。これ未満は誤差の範囲、' + (1.96 * dd[0].seDiff).toFixed(2) + ' 以上を有意とする。</span>' +
        '<br>変動の原因について、当局は見解を有しない。</p>';
      out.appendChild(l0);
    }

    /* 層2 六領域 */
    var l2 = el('section', 'apt-layer');
    l2.innerHTML = '<h3>六領域</h3><p class="apt-fine">点ではなく帯で読む。帯は 95% 信頼区間。' +
      (D.norms.stage === 'III'
        ? '数値は' + normFrame() + 'に対するパーセンタイル。'
        : '語は' + normFrame() + 'に対する五段階の帯（±0.5 SD を中程度とする）。<b>本判定は規範標本に基づかない暫定判定である。規範の収集後、同じ回答から異なる帯が算出されることがある。</b>') + '</p>';
    D.items.axes.forEach(function (ax) {
      var dm = R.domains[ax.code], b = R.bands.domains[ax.code];
      var row = el('div', 'apt-row' + (dm.spread > 1.5 ? ' is-spread' : ''));
      var subsOf = ax.aspects.reduce(function (a, asp) { return a.concat(asp.subs); }, []);
      var spreadNote = '';
      if (dm.spread > 1.5 && !dm.hidden) {
        var zs = subsOf.map(function (c) { return { c: c, z: R.subscales[c].z, n: R.subscales[c].name }; })
                       .filter(function (s) { return s.z != null; })
                       .sort(function (a, b) { return b.z - a.z; });
        spreadNote = '<p class="apt-fine">領域内の散らばりが大きい（SD ' + dm.spread.toFixed(2) + '）。全体の位置より下位尺度を主に読む：' +
          esc(zs[0].n) + 'が高く、' + esc(zs[zs.length - 1].n) + 'が低い。</p>';
      }
      var axProse = (spreadNote || dm.hidden || !b) ? '' : proseFor(D.prose.axes[ax.code], b.word);
      row.innerHTML = '<h4>第' + ['一', '二', '三', '四', '五', '六'][ax.no - 1] + '軸　' + esc(ax.name) +
        '<small>' + esc(ax.en) + '</small></h4>' + bandHTML(b, ax.hi, ax.lo, dm.hidden) + spreadNote +
        (axProse ? '<p class="apt-prose">' + esc(axProse) + '</p>' : '');
      l2.appendChild(row);
    });
    out.appendChild(l2);

    /* 作業4：際立つ下位尺度（|z| 上位5、中程度は文なし） */
    out.appendChild(salientHTML());

    /* 層3 十二アスペクト（折りたたみ） */
    var l3 = el('details', 'apt-layer apt-fold');
    l3.innerHTML = '<summary>十二アスペクト</summary>';
    D.items.axes.forEach(function (ax) {
      ax.aspects.forEach(function (asp) {
        var k = ax.code + ':' + asp.name, a = R.aspects[k], b = R.bands.aspects[k];
        var row = el('div', 'apt-row');
        row.innerHTML = '<h4>' + esc(asp.name) + '<small>' + esc(ax.name) + '</small></h4>' + bandHTML(b, ax.hi, ax.lo, a.hidden);
        l3.appendChild(row);
      });
    });
    out.appendChild(l3);

    /* 層4 二十四下位尺度＋根拠の項目文（折りたたみ） */
    var l4 = el('details', 'apt-layer apt-fold');
    l4.innerHTML = '<summary>二十四下位尺度と、判定を支えた項目</summary>' +
      '<p class="apt-fine">この判定は次の項目への回答による。逆転項目は反対極の記述であり、回答値は反転して集計している。</p>';
    var byId = window.AptCore.index(D.items).byId;
    D.items.axes.forEach(function (ax) {
      ax.aspects.forEach(function (asp) {
        asp.subs.forEach(function (c) {
          var s = R.subscales[c], meta = D.items.subscales[c], b = R.bands.subscales[c];
          var row = el('div', 'apt-row apt-sub');
          var items = meta.items.map(function (id) {
            var it = byId[id], x = R.answers[id];
            return '<li><span class="apt-dir">' + (it.dir === '+' ? '正' : '逆') + '</span>' + esc(it.text) +
                   '<span class="apt-ans">' + (x == null ? '未回答' : x + '　' + esc(D.items.scale[x - 1])) + '</span></li>';
          }).join('');
          row.innerHTML = '<h4>' + esc(c) + '　' + esc(meta.name) + '<small>' + esc(asp.name) + '／' + esc(meta.def) + '</small></h4>' +
            bandHTML(b, meta.hi, meta.lo, s.hidden) +
            '<ul class="apt-items">' + items + '</ul>';
          l4.appendChild(row);
        });
      });
    });
    out.appendChild(l4);

    /* 層5 受検記録（折りたたみ） */
    var V = R.validity, Gt = D.norms.gates;
    var l5 = el('details', 'apt-layer apt-fold');
    var rows = [
      ['欠損率 MISS', V.MISS.toFixed(3), '却下 >' + Gt.MISS.reject + '　フラグ >' + Gt.MISS.flag],
      ['黙従偏り TRIN', String(V.TRIN), '|値| 却下 >' + Gt.TRIN.reject + '　フラグ >' + Gt.TRIN.flag + '（対項目 ' + V.pairsUsed + ' 組）'],
      ['回答の不一致 VRIN', String(V.VRIN), '却下 >' + Gt.VRIN.reject + '　フラグ >' + Gt.VRIN.flag],
      ['極端回答率 ERS', V.ERS.toFixed(3), '却下 >' + Gt.ERS.reject + '　フラグ >' + Gt.ERS.flag],
      ['内寄り回答率 IRS', V.IRS.toFixed(3), '却下 >' + Gt.IRS.reject + '　フラグ >' + Gt.IRS.flag],
      ['最長連続同一回答 LS', String(V.LS), '却下 ≥' + Gt.LS.reject + '　フラグ ≥' + Gt.LS.flag],
      ['偶奇一貫性 1−r_SB', V.EVENODD == null ? '算出不能' : V.EVENODD.toFixed(3), '却下 >' + Gt.EVENODD.reject + '　フラグ >' + Gt.EVENODD.flag],
      ['所要時間 T_total', V.T_total + ' 秒', '下限 ' + V.T_min + ' 秒（2 秒×' + V.answered + '）　フラグ <' + V.T_flag + ' 秒'],
      ['注意確認 誤答', String(V.BOGUS) + ' / 3', '却下 ≥' + Gt.BOGUS.reject + '　フラグ =' + Gt.BOGUS.flag],
      ['稀有な美徳 L', String(V.L) + (V.Lmissing ? '（未回答 ' + V.Lmissing + '）' : ''), 'フラグ ≥' + Gt.L.flag],
      ['黙従指数 ACQ', R.acq == null ? '—' : R.acq.toFixed(3) + '（中点 3.5 からの偏り ' + (R.acqBias >= 0 ? '+' : '') + R.acqBias.toFixed(3) + '）', '']
    ];
    var lv = el('section', 'apt-layer apt-validity');
    lv.innerHTML = '<h3>妥当性</h3><p>' + validityText(G, V) + '</p>';
    out.appendChild(lv);
    l5.innerHTML = '<summary>受検記録（妥当性指標）</summary>' +
      '<table class="apt-table"><thead><tr><th>指標</th><th>値</th><th>閾値（暫定）</th></tr></thead><tbody>' +
      rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>'; }).join('') +
      '</tbody></table>' +
      (G.notes.length ? '<ul class="apt-list">' + G.notes.map(function (n) { return '<li>[Gate ' + n.gate + ' ' + n.index + ' ' + (n.level === 'reject' ? '超過' : 'フラグ') + '] ' + esc(n.msg) + '</li>'; }).join('') + '</ul>' : '<p class="apt-fine">ゲートに該当なし。</p>') +
      '<p class="apt-fine">閾値はすべて暫定値である。規範標本 n ≥ 300 に達した時点で、自標本の分布に基づいて再設定する。素の合計点は表示しない。</p>';
    out.appendChild(l5);

    /* 層6 配属との適合 */
    var l6 = el('section', 'apt-layer');
    var f = window.AptCore.fit(T, rec ? rec.org : null);
    var orgN = D.types.orgNames;
    var fitTxt = { first: '現配属は、判定された職掌の第一適性にあたる。',
                   second: '現配属は、判定された職掌の第二適性にあたる。',
                   none: '<b>現配属は、判定された職掌の適性機関に含まれない。</b>' }[f] || '配属の記録がない。';
    l6.innerHTML = '<h3>配属との適合</h3>' +
      '<p>現配属 <b>' + esc(rec ? orgN[rec.org] : '—') + '</b>。判定された職掌 ' + esc(T.title) + ' の適性機関は ' +
        T.orgs.map(function (o) { return esc(orgN[o] || o); }).join('、') + '。<br>' + fitTxt + '</p>' +
      '<p class="apt-fine">配属と職掌の不一致は、当局において異常として扱われない。職掌は機関に属さない。同一の職掌が、機関ごとに異なる業務に充てられる。</p>' +
      (f === 'none' && rec && T.orgs[0] !== 'AH'
        ? '<p><button class="apt-mini" type="button" id="apt-transfer">異動を申請する（配属を ' + esc(orgN[T.orgs[0]]) + ' へ書き換える）</button></p>'
        : '');
    out.appendChild(l6);
    if ($('apt-transfer')) {
      $('apt-transfer').addEventListener('click', function () {
        if (!window.confirm('配属を ' + orgN[T.orgs[0]] + ' へ書き換えます。職員番号の機関記号も変わります。よろしいですか。')) return;
        var r2 = window.AHStaff.get();
        var from = r2.org, oldNo = r2.no;
        r2.org = T.orgs[0];
        r2.no = r2.no.replace('-' + from + '-', '-' + r2.org + '-');
        /* 旧番号は失効するが抹消しない。裏面に履歴として出す。 */
        r2.transfers = (r2.transfers || []).concat([{ from: from, to: r2.org, oldNo: oldNo, newNo: r2.no, at: now() }]);
        window.AHStaff.set(r2);
        window.AHStaff.refreshChip();
        document.dispatchEvent(new CustomEvent('ah:staff-changed', { detail: { source: 'apt' } }));
        report();
      });
    }

    out.appendChild(layer7());
    show('apt-report');
  }

  /* §6 の記述文を、受検者自身の下位尺度の帯と突き合わせて出す（W2・W4・W5） */
  function bodyHTML(T) {
    var t = D.types.types[T.code], b = t.body;
    if (!b) return '<p>' + esc(t.desc) + '</p>';
    var marks = t.marks.map(function (c) {
      var s = R.subscales[c], w = R.bands.subscales[c];
      var lowSide = t.low.indexOf(c) >= 0;
      return '<li><span class="apt-dir">' + esc(c) + '</span>' + esc(s.name) + (lowSide ? '（低得点側が特徴）' : '') +
             '<span class="apt-ans">' + (s.hidden || !w ? '算出できない' : esc(w.word)) + '</span></li>';
    }).join('');
    return '<div class="apt-body">' +
      '<p>' + esc(b.def) + '</p>' +
      '<p>' + esc(b.who) + '</p>' +
      '<p><b>代償</b> ── ' + esc(b.cost) + '</p>' +
      '<p>' + esc(b.vs) + '</p>' +
      '<p class="apt-fine">この職掌で際立つ下位尺度と、貴殿の帯：</p><ul class="apt-items">' + marks + '</ul>' +
      '</div>';
  }

  /* 帯の語 → prose.json のキー。閾値は持たず、word() の結果だけを見る。 */
  function proseFor(table, word) {
    if (!table || !word) return '';
    var key = D.prose.bandKey[word];
    return (key && table[key]) || '';
  }

  /* 作業3：判定を支えた回答。際立つ下位尺度のうち |z| 上位3尺度から、
     z の向きに最も強く回答された項目を一件ずつ。逆転項目は原文・原回答のまま。 */
  function evidenceHTML(T) {
    var t = D.types.types[T.code];
    if (!t || !t.marks) return '';
    var byId = window.AptCore.index(D.items).byId;
    var subs = t.marks.map(function (c) { return { c: c, z: R.subscales[c].z }; })
      .filter(function (s) { return s.z != null; })
      .sort(function (a, b) { return Math.abs(b.z) - Math.abs(a.z); })
      .slice(0, 3);
    var rows = subs.map(function (s) {
      var best = null;
      D.items.subscales[s.c].items.forEach(function (id) {
        var x = R.answers[id];
        if (x == null) return;
        var it = byId[id];
        var keyed = it.dir === '+' ? x : 7 - x;          /* 反転後の値 */
        var pull = s.z >= 0 ? keyed : 7 - keyed;          /* z の向きへの強さ */
        /* 同点なら正項目を優先する（受検者が自分の回答として読みやすい） */
        if (!best || pull > best.pull || (pull === best.pull && it.dir === '+' && best.it.dir !== '+')) best = { it: it, x: x, pull: pull };
      });
      return best;
    }).filter(Boolean);
    if (!rows.length) return '';
    return '<div class="apt-evidence"><p>' + esc(D.prose.evidence.lead) + '</p><ul>' +
      rows.map(function (r) {
        return '<li>「' + esc(r.it.text) + '」── ' + esc(D.items.scale[r.x - 1]) +
               (r.it.dir === '-' ? '<small>逆転項目</small>' : '') + '</li>';
      }).join('') + '</ul><p class="apt-fine">' + esc(D.prose.evidence.note) + '</p></div>';
  }

  /* 作業4：|z| 上位5の下位尺度。高・低の側にある尺度だけ解釈文を付す。 */
  function salientHTML() {
    var sec = el('section', 'apt-layer');
    var top = Object.keys(R.subscales).map(function (c) { return { c: c, z: R.subscales[c].z }; })
      .filter(function (s) { return s.z != null; })
      .sort(function (a, b) { return Math.abs(b.z) - Math.abs(a.z); })
      .slice(0, 5);
    sec.innerHTML = '<h3>' + esc(D.prose.salient.h) + '</h3><p class="apt-fine">' + esc(D.prose.salient.lead) + '</p>';
    top.forEach(function (s) {
      var meta = D.items.subscales[s.c], b = R.bands.subscales[s.c], pr = D.prose.subscales[s.c] || {};
      var txt = s.z > 0.5 ? pr.high : s.z < -0.5 ? pr.low : '';
      var row = el('div', 'apt-row');
      row.innerHTML = '<h4>' + esc(s.c) + '　' + esc(meta.name) + '<small>' + esc(meta.def) + '</small></h4>' +
        bandHTML(b, meta.hi, meta.lo, false) +
        (txt ? '<p class="apt-prose">' + esc(txt) + '</p>' : '');
      sec.appendChild(row);
    });
    return sec;
  }

  /* 作業2：妥当性の一文。status と該当指標から組む。 */
  function validityText(G, V) {
    var P = D.prose.validity;
    var flags = G.notes.filter(function (n) { return n.level === 'flag' && n.index !== 'L'; });
    var rejects = G.notes.filter(function (n) { return n.level === 'reject'; });
    var names = function (ns) {
      var seen = {};
      return ns.map(function (n) { return P.names[n.index] || n.index; })
               .filter(function (x) { if (seen[x]) return false; seen[x] = true; return true; }).join('、');
    };
    var s;
    if (G.status === 'hold')      s = P.hold.replace('{list}', names(rejects.concat(flags)));
    else if (G.status === 'low')  s = P.low.replace('{list}', names(rejects.concat(flags)));
    else if (!flags.length)       s = P.valid;
    else if (flags.length === 1 && flags[0].index === 'BOGUS' && V.BOGUS === 1) s = P.bogus1;
    else                          s = P.flagged.replace('{list}', names(flags));
    return esc(s) + (G.virtueHigh ? '<br>' + esc(P.virtue) : '');
  }

  function axisLabel(code) {
    var ax = D.items.axes.filter(function (x) { return x.code === code; })[0];
    return '第' + ['一', '二', '三', '四', '五', '六'][ax.no - 1] + '軸';
  }

  function normFrame() {
    var n = D.norms;
    if (n.stage === 'I') return '暫定規範（仮置き M ' + n.provisional.M.toFixed(2) + '／SD ' + n.provisional.SD.toFixed(2) + '、標本 n = ' + n.n + '）';
    if (n.stage === 'II') return '暫定規範（全体、標本 n = ' + n.n + '）';
    return (R.demo && R.demo.sex && R.demo.age) ? '同年代・同性の受検者（n = ' + n.n + '）' : '全体規範（n = ' + n.n + '）';
  }

  /* 層7 朱注・規範の出自・版 */
  function layer7() {
    var n = D.norms;
    var l7 = el('section', 'apt-layer apt-l7');
    l7.innerHTML =
      '<div class="apt-shuchu"><p class="apt-shuchu-h">箱庭世界倫理委員会　朱注 第 ███ 号</p>' +
        '<p>本検査は臨床的な診断を行うものではない。いかなる疾患の検出・診断・除外にも用いることができない。<br>' +
        '本検査の結果を、採用・選抜・配置その他、人に関する決定の根拠としてはならない。当該用途についての妥当性は確認されていない。<br>' +
        '本検査が測るのは、受検者が自らをどう記述するかである。他者から見た姿とも、実際の行動とも一致するとは限らない。<br>' +
        '得点は推定であり、誤差の幅を持つ。時期・体調・場面により変動する。<br>' +
        '規範標本は自己選択標本である。母集団を代表するものではない。<br>' +
        '──なお本注記は、当委員会が第二領域（表現と意匠）の審査において付したものである。</p></div>' +
      '<p class="apt-fine">規範の出自：段階 ' + esc(n.stage) + '（' + esc(n.stageLabel) + '）。標本 n = ' + n.n +
        '。' + (n.n < 300 ? '<b>暫定判定。</b>' : '') + '規範標本の収集は' + (n.collected ? esc(n.collected) : '未開始。現在、回答は端末内にのみ保存され、送信されない') +
        '。規範更新日 ' + esc(n.updated) + '。<br>' +
        '版：項目 v' + esc(D.items.version) + '　規範 v' + esc(n.version) + '　受検日 ' + esc(fmtDate(new Date(R ? R.at : now()))) +
        '　α（暫定） 領域 ' + n.alpha.domain + '／アスペクト ' + n.alpha.aspect + '／下位尺度 ' + n.alpha.subscale + '。</p>' +
      '<p class="apt-fine">典拠：本検査は新しい心理学を主張しない。六因子構造（Ashton &amp; Lee 2007）、十アスペクト（DeYoung, Quilty &amp; Peterson 2007）、' +
        'ファセット定義（NEO-PI-R／HEXACO-PI-R／BFI-2）、検証尺度の論理（MMPI-3、項目は借用しない）、プロファイル類似度（Furr 2008）を組み合わせ、表現層のみを当機構の様式に置き換えたものである。' +
        '独自なのは、六軸の呼称・二十四下位尺度の名称・十六職掌・項目文・報告書の文体のみである。</p>';
    return l7;
  }

  /* ── 記録の削除（D4） ────────────────────────────── */
  function erase() {
    if (!window.confirm('適性検査の受検記録をすべて削除します。要件「適性検査の完了」の充足と職掌の記載も失われます。よろしいですか。')) return;
    var rec = window.AHStaff.get();
    if (rec) {
      delete rec.part2;
      if (rec.req) { delete rec.req.part2; delete rec.req.task2; }
      window.AHStaff.set(rec);
      window.AHStaff.refreshChip();
      document.dispatchEvent(new CustomEvent('ah:staff-changed', { detail: { source: 'apt' } }));
    }
    clearP();
    R = null;
    if (EMBED) embedRefresh(); else gate();
  }

  /* ── 埋め込み（registry.html）────────────────────────
     職員証の頁で、資質検査の結果と適性検査の報告書を並べて出す。
     #apt-embed-line に状態、#apt-report に最新の報告書。 */
  function embedRefresh() {
    var rec = window.AHStaff.get();
    var h = rec && rec.part2 && rec.part2.history;
    var last = h && h.length ? h[h.length - 1] : null;
    var line = $('apt-embed-line'), go = $('apt-embed-go'), ers = $('apt-erase'), rp = $('apt-report');
    if (ers) ers.hidden = !last;
    if (!rec) {
      if (line) line.textContent = '職員登録を終えた後に受検できる。';
      if (rp) rp.hidden = true;
      return;
    }
    if (!last) {
      if (line) line.textContent = '未受検。所要はおよそ三十分。三期に分けて受けることができる。';
      if (go) go.textContent = '適性検査を受検する';
      if (rp) rp.hidden = true;
      return;
    }
    var days = Math.floor((now() - last.at) / 86400000);
    var blocked = last.status !== 'reject' && days < D.norms.retakeDays;
    var t = last.type;
    if (line) line.innerHTML = '受検日 ' + esc(fmtDate(new Date(last.at))) + '。経過 <b>' + days + '</b> 日。' +
      (t ? '判定 <b>' + esc(t.title) + '（' + esc(t.kanji) + '）</b>。' : '判定 却下。') +
      (blocked ? '再受検は前回から ' + D.norms.retakeDays + ' 日以上を空けること。あと <b>' + (D.norms.retakeDays - days) + '</b> 日。' : '再受検できる。');
    if (go) go.textContent = '再受検する';
    viewLast();
  }

  /* ── 結線 ─────────────────────────────────────────── */
  function bind() {
    $('apt-start').addEventListener('click', function () { begin(false); });
    $('apt-resume').addEventListener('click', function () { begin(true); });
    $('apt-view-last').addEventListener('click', viewLast);
    $('apt-back').addEventListener('click', back);
    $('apt-skip').addEventListener('click', next);
    $('apt-suspend').addEventListener('click', suspend);
    $('apt-abort').addEventListener('click', abort);
    $('apt-break-go').addEventListener('click', function () { S.screenEnter = now(); render(); show('apt-exam'); });
    $('apt-break-stop').addEventListener('click', function () { S.screenEnter = null; writeP(S); gate(); });
    $('apt-report-back').addEventListener('click', gate);
    $('apt-erase').addEventListener('click', erase);
    $('apt-age').addEventListener('change', function () { $('apt-age-warn').hidden = true; });

    /* 矢印キーで選択肢を移動（radiogroup） */
    $('apt-scale').addEventListener('keydown', function (e) {
      var opts = Array.prototype.slice.call($('apt-scale').children);
      var i = opts.indexOf(document.activeElement);
      if (i < 0) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); opts[Math.min(i + 1, opts.length - 1)].focus(); }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); opts[Math.max(i - 1, 0)].focus(); }
    });
    /* 数字キー 1〜6 で回答 */
    document.addEventListener('keydown', function (e) {
      if ($('apt-exam').hidden || !S) return;
      if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
      var v = Number(e.key);
      if (v >= 1 && v <= 6) answer(v);
    });
  }

  function load(path) {
    return fetch(BASE + path, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error(path + ' HTTP ' + r.status);
      return r.json();
    });
  }

  Promise.all([load('data/items.json'), load('data/types.json'), load('data/norms.json'), load('data/prose.json')])
    .then(function (a) {
      D.items = a[0]; D.types = a[1]; D.norms = a[2]; D.prose = a[3];
      FLAT = flatItems();
      if (EMBED) {
        if ($('apt-erase')) $('apt-erase').addEventListener('click', erase);
        document.addEventListener('ah:staff-changed', function (e) { if (!e.detail || e.detail.source !== 'apt') embedRefresh(); });
        embedRefresh();
        return;
      }
      $('apt-instr').innerHTML = D.items.instructions.map(function (s) { return '<p>' + esc(s) + '</p>'; }).join('');
      buildGauge();
      bind();
      gate();
    })
    .catch(function (e) {
      if (EMBED) { if ($('apt-embed-line')) $('apt-embed-line').textContent = '検査票を読み込めなかった。（' + e.message + '）'; return; }
      $('apt-gate').hidden = false;
      $('apt-gate-body').textContent = '検査票を読み込めなかった。時間をおいて再度お試しいただきたい。（' + e.message + '）';
    });
})();
