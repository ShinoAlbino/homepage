/* ============================================================
   ArcaHortus / 適性検査 第一部  (registry.html 専用)

   assets/data/aptitude.json を読み、16問の二択を出題する。

   採点について ──
   設問の配点は機関ごとに偏っている（+2 の枠数も +1 の枠数も揃わない）。
   素点のまま比べると、広く +1 を拾う機関が常に首位に来る。
   そこで各機関の平均と標準偏差を設問表から解析的に求め、
   z 得点に直してから比較する。総当たり 65,536 通りで検証したところ、
   素点比較では首位の偏りが 8.1 倍あったものが 1.51 倍まで収束した。

   第一部が決めるのは配属先と職員番号のみである。
   権限区分は登録時に必ず LEVEL 1 から始まる。上位の権限は
   権限連動（各区画の実際の開放）と第二部の内部資格で開く。
   上昇の規則は別途定めるため、ここでは判定しない。

   判定結果は localStorage のみに保存する。外部へ送信しない。
   ============================================================ */
(function () {
  'use strict';

  var START_LV = 1;          /* 登録時の権限は必ず LEVEL 1 */

  var DATA = null;
  var state = {
    i: 0,          // いま表示している設問の番号
    ans: [],       // 'a' | 'b' の配列
    pair: null,    // 提示した上位2機関
    z: null        // 標準化後の得点
  };

  var $ = function (id) { return document.getElementById(id); };

  /* ── 統計量：設問表から解析的に求める ─────────────── */
  /* 各設問は独立に a / b のどちらかが選ばれる。
     機関 o の得点の平均は Σ(a+b)/2、分散は Σ((a-b)/2)^2。 */
  function stats(questions, orgs) {
    var st = {};
    orgs.forEach(function (o) {
      var mu = 0, va = 0;
      questions.forEach(function (q) {
        var a = q.a.s[o] || 0, b = q.b.s[o] || 0;
        mu += (a + b) / 2;
        va += Math.pow((a - b) / 2, 2);
      });
      st[o] = { mu: mu, sd: Math.sqrt(va) || 1 };
    });
    return st;
  }

  /* ── 職員番号：回答から決定的に生成する ───────────── */
  /* 回答文字列は末尾しか変わらないため、最終撹拌を必ず入れる。
     入れないと似た回答が隣接した番号に寄る。 */
  function hash32(str) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    h ^= h >>> 16; h = Math.imul(h, 2246822507) >>> 0;
    h ^= h >>> 13; h = Math.imul(h, 3266489909) >>> 0;
    h ^= h >>> 16;
    return h >>> 0;
  }

  function staffNo(org, ans) {
    var n = hash32(org + ':' + ans.join('')) % 10000;
    return 'AH-' + org + '-' + String(n).padStart(4, '0');
  }

  /* ── 採点 ─────────────────────────────────────────── */
  function score() {
    var orgs = Object.keys(DATA.orgs);
    var st = stats(DATA.questions, orgs);
    var raw = {};
    orgs.forEach(function (o) { raw[o] = 0; });
    DATA.questions.forEach(function (q, i) {
      var s = (state.ans[i] === 'b' ? q.b : q.a).s;
      Object.keys(s).forEach(function (o) { raw[o] += s[o]; });
    });

    var z = {};
    orgs.forEach(function (o) { z[o] = (raw[o] - st[o].mu) / st[o].sd; });

    var order = orgs.slice().sort(function (x, y) {
      return z[y] - z[x] || (x < y ? -1 : 1);
    });
    /* 首位と次点の差は適性の明確さとして内訳の表示にのみ使う。
       権限区分はここでは決めない（必ず LEVEL 1 から始まる）。 */
    var gap = z[order[0]] - z[order[1]];

    return { z: z, order: order, gap: gap, lv: START_LV };
  }

  /* ── 画面の切り替え ───────────────────────────────── */
  function show(which) {
    ['rg-intro', 'rg-exam', 'rg-pick', 'rg-result'].forEach(function (id) {
      $(id).hidden = (id !== which);
    });
    $('rg-next').hidden = (which !== 'rg-result');
  }

  /* ── 出題 ─────────────────────────────────────────── */
  function render() {
    var q = DATA.questions[state.i];
    var n = DATA.questions.length;
    $('rg-qid').textContent = q.id;
    $('rg-qtext').textContent = q.text;
    $('rg-ca').textContent = q.a.text;
    $('rg-cb').textContent = q.b.text;
    $('rg-prog-num').textContent =
      String(state.i + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
    $('rg-prog-fill').style.width = (state.i / n * 100) + '%';
    $('rg-back').disabled = (state.i === 0);
  }

  function answer(c) {
    state.ans[state.i] = c;
    if (state.i < DATA.questions.length - 1) {
      state.i++;
      render();
    } else {
      toPick();
    }
  }

  /* ── 配属先の提示（上位2機関から選ばせる） ─────────── */
  function toPick() {
    var r = score();
    state.z = r.z;
    state.lv = r.lv;
    state.pair = r.order.slice(0, 2);

    var list = $('rg-pick-list');
    list.textContent = '';
    state.pair.forEach(function (code, idx) {
      var o = DATA.orgs[code];
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'rg-pick';
      b.innerHTML =
        '<span class="rg-pick-head">' +
          '<span class="rg-pick-sig"><img src="' + o.logo + '" alt="" width="19" height="19"></span>' +
          '<span><span class="rg-pick-name">' + o.name + '</span>' +
          '<span class="rg-pick-en">' + o.en + '</span></span>' +
          '<span class="rg-pick-fit">' + (idx === 0 ? '第一適性' : '第二適性') + '</span>' +
        '</span>' +
        '<p>' + o.desc + '</p>' +
        '<p class="rg-pick-go">この機関に配属される →</p>';
      b.addEventListener('click', function () { assign(code); });
      list.appendChild(b);
    });

    show('rg-pick');
    $('rg-pick').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ── 配属確定・保存 ───────────────────────────────── */
  function assign(code) {
    var rec = {
      v: 1,
      org: code,
      lv: state.lv,
      label: DATA.clearance[String(state.lv)].label,
      no: staffNo(code, state.ans),
      ans: state.ans.join(''),
      z: state.z,
      pair: state.pair,
      name: '',
      issued: today(),
      part2: null                 /* 第二部（内部資格）の結果が入る枠 */
    };
    window.AHStaff.set(rec);
    window.AHStaff.refreshChip();
    toResult(rec);
  }

  function today() {
    var d = new Date(), p = function (n) { return String(n).padStart(2, '0'); };
    return d.getFullYear() + '.' + p(d.getMonth() + 1) + '.' + p(d.getDate());
  }

  /* ── 結果 ─────────────────────────────────────────── */
  function toResult(rec) {
    var o = DATA.orgs[rec.org];
    var cl = DATA.clearance[String(rec.lv)];

    $('rg-org-name').innerHTML = o.name + '<em>' + o.en + '</em>';
    $('rg-org-desc').textContent = o.desc;
    $('rg-org-duty').textContent = o.duty;
    $('rg-lv-note').textContent = cl.label + '。' + cl.note;
    $('rg-name').value = rec.name || '';

    /* 適性の内訳 */
    var bars = $('rg-bars');
    bars.textContent = '';
    var zs = rec.z, keys = Object.keys(zs);
    var lo = Math.min.apply(null, keys.map(function (k) { return zs[k]; }));
    var hi = Math.max.apply(null, keys.map(function (k) { return zs[k]; }));
    var span = (hi - lo) || 1;
    keys.sort(function (x, y) { return zs[y] - zs[x]; }).forEach(function (k) {
      var row = document.createElement('div');
      row.className = 'rg-bar' + (k === rec.org ? ' is-top' : '');
      var pct = Math.round((zs[k] - lo) / span * 100);
      row.innerHTML =
        '<span class="rg-bar-k">' + k + '</span>' +
        '<span class="rg-bar-t"><i style="width:' + pct + '%"></i></span>' +
        '<span class="rg-bar-v">' + (zs[k] >= 0 ? '+' : '') + zs[k].toFixed(2) + '</span>';
      bars.appendChild(row);
    });

    drawCard(rec);
    show('rg-result');
    $('rg-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ── 職員証の描画 ─────────────────────────────────── */
  function drawCard(rec) {
    var cv = $('rg-canvas');
    if (!cv || !cv.getContext) return;
    var g = cv.getContext('2d');
    var W = cv.width, H = cv.height;
    var o = DATA.orgs[rec.org];
    var M = 56;

    g.clearRect(0, 0, W, H);

    /* 地 */
    var bg = g.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#0b1019');
    bg.addColorStop(1, '#070a10');
    g.fillStyle = bg;
    g.fillRect(0, 0, W, H);

    /* 機関色の左帯 */
    g.fillStyle = o.color;
    g.fillRect(0, 0, 10, H);

    /* 枠 */
    g.strokeStyle = '#1a2432';
    g.lineWidth = 2;
    g.strokeRect(M - 22, M - 22, W - (M - 22) * 2, H - (M - 22) * 2);

    /* 見出し */
    g.fillStyle = '#a7dcec';
    g.font = '500 21px "JetBrains Mono", monospace';
    g.fillText('ARCA HORTUS', M, M + 14);
    g.fillStyle = '#3d4a58';
    g.font = '300 15px "Noto Sans JP", sans-serif';
    g.fillText('箱庭次元研究機構 ／ 職員証', M, M + 44);

    g.fillStyle = '#3d4a58';
    g.font = '400 13px "JetBrains Mono", monospace';
    g.textAlign = 'right';
    g.fillText('AH-REG-001', W - M, M + 14);
    g.fillText('ISSUED ' + rec.issued, W - M, M + 40);
    g.textAlign = 'left';

    /* 罫 */
    g.strokeStyle = '#121a26';
    g.lineWidth = 1;
    g.beginPath(); g.moveTo(M, M + 76); g.lineTo(W - M, M + 76); g.stroke();

    /* 所属 */
    var y = M + 140;
    g.fillStyle = '#3d4a58';
    g.font = '400 12px "JetBrains Mono", monospace';
    g.fillText('ASSIGNED TO', M, y - 34);
    g.fillStyle = '#c7d2dd';
    g.font = '400 30px "Noto Sans JP", sans-serif';
    g.fillText(o.name, M, y);
    g.fillStyle = '#4f8ea6';
    g.font = '400 14px "JetBrains Mono", monospace';
    g.fillText(o.en, M, y + 30);

    /* 職員番号・権限 */
    y += 116;
    g.fillStyle = '#3d4a58';
    g.font = '400 12px "JetBrains Mono", monospace';
    g.fillText('STAFF NO.', M, y - 30);
    g.fillStyle = '#a7dcec';
    g.font = '500 40px "JetBrains Mono", monospace';
    g.fillText(rec.no, M, y + 10);

    var cx = W / 2 + 110;
    g.fillStyle = '#3d4a58';
    g.font = '400 12px "JetBrains Mono", monospace';
    g.fillText('CLEARANCE', cx, y - 30);
    g.fillStyle = '#c6a662';
    g.font = '500 40px "JetBrains Mono", monospace';
    g.fillText('LV.' + rec.lv, cx, y + 10);

    /* 氏名欄 */
    y += 96;
    g.fillStyle = '#3d4a58';
    g.font = '400 12px "JetBrains Mono", monospace';
    g.fillText('NAME', M, y - 26);
    var nm = (rec.name || '').trim();
    if (nm) {
      g.fillStyle = '#c7d2dd';
      g.font = '300 26px "Noto Sans JP", sans-serif';
      g.fillText(nm, M, y + 8);
    } else {
      g.fillStyle = '#1a2432';
      g.fillRect(M, y - 12, 260, 26);
    }

    /* 協定番号 */
    g.fillStyle = '#3d4a58';
    g.font = '400 12px "JetBrains Mono", monospace';
    g.fillText('PACT ' + o.pact.replace('PACT-', 'NO. '), cx, y - 26);
    g.fillStyle = '#4f8ea6';
    g.font = '400 17px "JetBrains Mono", monospace';
    g.fillText(o.trait, cx, y + 6);

    /* 脚部 */
    g.strokeStyle = '#121a26';
    g.beginPath(); g.moveTo(M, H - M - 40); g.lineTo(W - M, H - M - 40); g.stroke();
    g.fillStyle = '#2b3442';
    g.font = '400 12px "JetBrains Mono", monospace';
    g.fillText('BUREAU OF PERSONNEL REGISTRATION / GATE 06', M, H - M - 12);
    g.textAlign = 'right';
    g.fillText('arcahortus.com', W - M, H - M - 12);
    g.textAlign = 'left';

    /* 紋章。読み込めなくても職員証は成立する。 */
    var img = new Image();
    img.onload = function () {
      var s = 92;
      g.globalAlpha = 0.9;
      g.drawImage(img, W - M - s, M + 104, s, s);
      g.globalAlpha = 1;
    };
    img.src = o.logo;
  }

  /* ── 保存 ─────────────────────────────────────────── */
  function saveCard() {
    var cv = $('rg-canvas');
    var rec = window.AHStaff.get();
    var name = 'arcahortus-staff-' + (rec ? rec.no : 'card') + '.png';
    cv.toBlob(function (blob) {
      if (!blob) return;
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    }, 'image/png');
  }

  /* ── 起動 ─────────────────────────────────────────── */
  function begin() {
    state.i = 0;
    state.ans = [];
    render();
    show('rg-exam');
    $('rg-exam').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function bind() {
    $('rg-start').addEventListener('click', begin);
    $('rg-retake').addEventListener('click', begin);
    $('rg-abort').addEventListener('click', function () { show('rg-intro'); });

    Array.prototype.forEach.call(document.querySelectorAll('.rg-choice'), function (b) {
      b.addEventListener('click', function () { answer(b.dataset.c); });
    });

    $('rg-back').addEventListener('click', function () {
      if (state.i > 0) { state.i--; render(); }
    });

    $('rg-show-card').addEventListener('click', function () {
      var rec = window.AHStaff.get();
      if (rec) toResult(rec);
    });

    $('rg-save').addEventListener('click', saveCard);

    $('rg-name').addEventListener('input', function () {
      var rec = window.AHStaff.get();
      if (!rec) return;
      rec.name = $('rg-name').value;
      window.AHStaff.set(rec);
      drawCard(rec);
    });

    $('rg-erase').addEventListener('click', function () {
      if (!window.confirm('登録を抹消します。職員番号と権限は失われ、同じ回答をしない限り元には戻りません。よろしいですか。')) return;
      window.AHStaff.clear();
      window.AHStaff.refreshChip();
      $('rg-show-card').hidden = true;
      show('rg-intro');
    });
  }

  /* 既に登録済みなら、その職員証を出せるようにする */
  function restore() {
    var rec = window.AHStaff.get();
    if (!rec || !rec.z) return;
    $('rg-show-card').hidden = false;
    $('rg-start').textContent = '検査を受け直す';
  }

  fetch('assets/data/aptitude.json', { cache: 'no-cache' })
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (json) {
      DATA = json;
      bind();
      restore();
    })
    .catch(function (e) {
      var el = $('rg-intro');
      if (el) {
        var p = document.createElement('p');
        p.className = 'rg-fine';
        p.textContent = '検査票を読み込めなかった。時間をおいて再度お試しいただきたい。（' + e.message + '）';
        el.appendChild(p);
      }
      var s = $('rg-start');
      if (s) s.disabled = true;
    });
})();
