/* ============================================================
   ArcaHortus / 適性検査 ── 採点エンジン

   仕様書 §5「採点・妥当性・報告書」を、そのままコードに落としたもの。
   DOM に触らない。ブラウザでは window.AptCore、node では module.exports。

     §5-1 素点（逆転・下位尺度平均・欠損規則）
     §5-2 黙従指数（ACQ）
     §5-3 階層の合成（下位尺度 z → アスペクト z → 領域 z）
     §5-4 規範（段階 I は仮置き M/SD。data/norms.json を差し替えれば移行できる）
     §5-5 妥当性 7 指標
     §5-6 段階ゲート（却下／保留／信頼度 低／有効）
     §5-7 類型判定（文字・SEM・確信度・Furr の弁別的類似度）
     §4-3 配属との適合
     §4-4 前回との差

   閾値・α・SEM はすべて norms.json 側の暫定値。ここには定数を置かない。
   ============================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.AptCore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var CORE_N = 144;
  var MID = 3.5;                       // 6段階・中間なしの中点
  var AXIS4 = ['E', 'O', 'A', 'C'];    // 類型記号に入る四軸

  /* ── 標準正規累積分布 ─────────────────────────────── */
  /* Abramowitz & Stegun 7.1.26。誤差 1.5e-7。確信度の表示には十分。 */
  function Phi(z) {
    if (z === Infinity) return 1;
    if (z === -Infinity) return 0;
    var t = 1 / (1 + 0.2316419 * Math.abs(z));
    var d = 0.3989422804014327 * Math.exp(-z * z / 2);
    var p = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 +
            t * (-1.821255978 + t * 1.330274429))));
    return z >= 0 ? 1 - p : p;
  }

  function mean(arr) {
    if (!arr.length) return null;
    var s = 0;
    for (var i = 0; i < arr.length; i++) s += arr[i];
    return s / arr.length;
  }

  function sd(arr) {
    if (arr.length < 2) return 0;
    var m = mean(arr), s = 0;
    for (var i = 0; i < arr.length; i++) s += (arr[i] - m) * (arr[i] - m);
    return Math.sqrt(s / (arr.length - 1));
  }

  function pearson(xs, ys) {
    var n = xs.length;
    if (n < 3) return null;
    var mx = mean(xs), my = mean(ys), sxy = 0, sxx = 0, syy = 0;
    for (var i = 0; i < n; i++) {
      sxy += (xs[i] - mx) * (ys[i] - my);
      sxx += (xs[i] - mx) * (xs[i] - mx);
      syy += (ys[i] - my) * (ys[i] - my);
    }
    if (!sxx || !syy) return null;
    return sxy / Math.sqrt(sxx * syy);
  }

  /* ── 項目の索引 ───────────────────────────────────── */
  function index(items) {
    var core = [], bogus = [], virtue = [], byId = {};
    items.screens.forEach(function (sc) {
      sc.items.forEach(function (it) {
        byId[it.id] = it;
        if (it.dir === 'v') {
          if (it.sub === 'V-B') bogus.push(it); else virtue.push(it);
        } else {
          core.push(it);
        }
      });
    });
    return { core: core, bogus: bogus, virtue: virtue, byId: byId };
  }

  /* 逆転処理後の値。未回答は null。 */
  function keyed(it, x) {
    if (x == null) return null;
    return it.dir === '-' ? 7 - x : x;
  }

  /* ── 規範の M / SD を引く ─────────────────────────── */
  /* 段階 I は全下位尺度に仮置き。段階 III は性×年代セル別（未実装のため
     cells が無ければ仮置きに落ちる）。 */
  function normFor(norms, sub, demo) {
    if (norms.cells && demo && demo.sex && demo.age) {
      var cell = norms.cells[demo.sex + ':' + demo.age];
      if (cell && cell[sub]) return cell[sub];
    }
    if (norms.overall && norms.overall[sub]) return norms.overall[sub];
    return { M: norms.provisional.M, SD: norms.provisional.SD };
  }

  /* ============================================================
     採点本体
     answers : { itemId: 1..6 }   未回答は無し
     timing  : [{ no, sec }]      画面ごとの所要秒
     demo    : { sex, age }       規範セル用（任意）
     ============================================================ */
  function score(items, types, norms, answers, timing, demo) {
    var ix = index(items);
    var R = { version: items.version, normStage: norms.stage, normN: norms.n };

    /* ── §5-1 素点 ───────────────────────────────────── */
    var missing = 0;
    ix.core.forEach(function (it) { if (answers[it.id] == null) missing++; });
    R.miss = missing / CORE_N;

    var subs = {};
    Object.keys(items.subscales).forEach(function (code) {
      var meta = items.subscales[code];
      var vals = [], miss = 0, raw = [];
      meta.items.forEach(function (id) {
        var it = ix.byId[id], x = answers[id];
        if (x == null) { miss++; vals.push(null); }
        else vals.push(keyed(it, x));
        raw.push(x == null ? null : x);
      });
      var present = vals.filter(function (v) { return v != null; });
      var nm = normFor(norms, code, demo);
      var X = present.length ? mean(present) : null;
      var hidden = miss >= 2 || X == null;
      subs[code] = {
        code: code, name: meta.name, axis: meta.axis, aspect: meta.aspect,
        X: X, missing: miss, hidden: hidden,
        z: hidden ? null : (X - nm.M) / nm.SD,
        keyedVals: vals, rawVals: raw
      };
    });
    R.subscales = subs;

    /* ── §5-2 黙従指数 ───────────────────────────────── */
    var rawAll = [];
    ix.core.forEach(function (it) { if (answers[it.id] != null) rawAll.push(answers[it.id]); });
    R.acq = rawAll.length ? mean(rawAll) : null;
    R.acqBias = R.acq == null ? null : R.acq - MID;

    /* ── §5-3 階層の合成 ─────────────────────────────── */
    var aspects = {}, domains = {};
    items.axes.forEach(function (ax) {
      var aspZ = [], hiddenSubs = 0;
      ax.aspects.forEach(function (asp) {
        var zs = asp.subs.map(function (c) { return subs[c].z; })
                         .filter(function (z) { return z != null; });
        asp.subs.forEach(function (c) { if (subs[c].hidden) hiddenSubs++; });
        var key = ax.code + ':' + asp.name;
        aspects[key] = { axis: ax.code, name: asp.name, subs: asp.subs,
                         z: zs.length ? mean(zs) : null, hidden: !zs.length };
        if (zs.length) aspZ.push(mean(zs));
      });
      var subZ = ax.aspects.reduce(function (a, asp) { return a.concat(asp.subs); }, [])
                   .map(function (c) { return subs[c].z; })
                   .filter(function (z) { return z != null; });
      domains[ax.code] = {
        code: ax.code, no: ax.no, name: ax.name,
        z: aspZ.length ? mean(aspZ) : null,
        hidden: hiddenSubs >= 3,
        spread: subZ.length >= 2 ? sd(subZ) : 0     // W3 領域内の散らばり
      };
    });
    R.aspects = aspects;
    R.domains = domains;

    /* ── §5-5 妥当性 7 指標 ──────────────────────────── */
    var V = {};
    V.MISS = R.miss;

    /* (2)(3) 対項目 ◇ による黙従／不一致 */
    var trin = 0, vrin = 0, pairs = 0;
    Object.keys(items.subscales).forEach(function (code) {
      var ids = items.subscales[code].items;
      var pos = null, neg = null;
      ids.forEach(function (id) {
        var it = ix.byId[id];
        if (!it.pair) return;
        if (it.dir === '+') pos = id; else neg = id;
      });
      if (pos && neg && answers[pos] != null && answers[neg] != null) {
        var s = answers[pos] + answers[neg] - 7;
        trin += s; vrin += Math.abs(s); pairs++;
      }
    });
    V.TRIN = trin; V.VRIN = vrin; V.pairsUsed = pairs;

    /* (4) 極端回答率・内寄り回答率 */
    var ext = 0, inner = 0;
    rawAll.forEach(function (x) {
      if (x === 1 || x === 6) ext++;
      if (x === 3 || x === 4) inner++;
    });
    V.ERS = ext / CORE_N; V.IRS = inner / CORE_N;

    /* (5) 最長連続同一回答（提示順。未回答で途切れる） */
    var ls = 0, run = 0, prev = null;
    ix.core.forEach(function (it) {
      var x = answers[it.id];
      if (x == null) { run = 0; prev = null; return; }
      run = (x === prev) ? run + 1 : 1;
      prev = x;
      if (run > ls) ls = run;
    });
    V.LS = ls;

    /* (6) 偶奇一貫性 */
    var ev = [], od = [];
    Object.keys(subs).forEach(function (code) {
      var kv = subs[code].keyedVals;
      var e = [kv[0], kv[2], kv[4]].filter(function (v) { return v != null; });
      var o = [kv[1], kv[3], kv[5]].filter(function (v) { return v != null; });
      if (e.length && o.length) { ev.push(mean(e)); od.push(mean(o)); }
    });
    var r = pearson(ev, od);
    if (r == null) { V.evenOddR = null; V.EVENODD = null; }
    else {
      var rsb = 2 * r / (1 + r);
      V.evenOddR = r; V.EVENODD = 1 - rsb;
    }

    /* (7) 所要時間 */
    var answered = rawAll.length;
    var tTotal = 0;
    (timing || []).forEach(function (t) { tTotal += (t.sec || 0); });
    V.T_total = tTotal;
    V.T_min = norms.gates.TIME.rejectPerItem * answered;
    V.T_flag = norms.gates.TIME.flagPerItem * answered;
    V.answered = answered;

    /* 付随 */
    var bf = 0;
    ix.bogus.forEach(function (it) {
      var x = answers[it.id];
      /* 未回答の注意確認は誤答と同じに扱う。飛ばせば通る検査にしない。 */
      if (x == null || x < it.expect[0] || x > it.expect[1]) bf++;
    });
    V.BOGUS = bf;
    var L = 0, Lmiss = 0;
    ix.virtue.forEach(function (it) {
      var x = answers[it.id];
      if (x == null) Lmiss++; else L += x;
    });
    V.L = L; V.Lmissing = Lmiss;
    R.validity = V;

    /* ── §5-6 段階ゲート ─────────────────────────────── */
    R.gate = gates(V, norms.gates);

    /* ── §5-7 類型判定 ───────────────────────────────── */
    var typeable = R.gate.status !== 'reject' &&
                   AXIS4.every(function (a) { return !domains[a].hidden && domains[a].z != null; });
    R.typeable = typeable;
    if (typeable) {
      R.type = typify(items, types, norms, domains, subs);
    }

    /* 表示用：パーセンタイル・T・信頼区間 */
    R.bands = bands(items, norms, domains, aspects, subs);

    return R;
  }

  /* ── §5-6 ゲート ─────────────────────────────────── */
  function gates(V, G) {
    var notes = [];   // { gate, index, level:'reject'|'flag', msg }
    var status = 'valid';

    function chk(gate, key, val, hi, rejMsg, flagMsg, cmp) {
      if (val == null) return null;
      var over = function (th) { return cmp === 'ge' ? val >= th : val > th; };
      if (hi.reject != null && over(hi.reject)) {
        notes.push({ gate: gate, index: key, value: val, level: 'reject', msg: rejMsg });
        return 'reject';
      }
      if (hi.flag != null && over(hi.flag)) {
        notes.push({ gate: gate, index: key, value: val, level: 'flag', msg: flagMsg || rejMsg });
        return 'flag';
      }
      return null;
    }

    /* Gate 0 欠損・連続・所要・注意確認 → 却下 */
    var g0 = [
      chk(0, 'MISS', V.MISS, G.MISS, '回答数が判定に足りない。本検査は成立しない。', '未回答がある。', 'gt'),
      chk(0, 'LS', V.LS, G.LS, '同一回答が連続している。本検査は成立しない。', '同一回答の連続がやや長い。', 'ge'),
      chk(0, 'BOGUS', V.BOGUS, G.BOGUS, '注意確認項目に誤答がある。本検査は成立しない。', '注意確認項目に誤答が一つある。', 'ge')
    ];
    if (V.T_total > 0 && V.answered > 0) {
      if (V.T_total < V.T_min) {
        notes.push({ gate: 0, index: 'TIME', value: V.T_total, level: 'reject', msg: '回答所要が下限を下回る。本検査は成立しない。' });
        g0.push('reject');
      } else if (V.T_total < V.T_flag) {
        notes.push({ gate: 0, index: 'TIME', value: V.T_total, level: 'flag', msg: '回答所要が短い。' });
      }
    }
    if (g0.indexOf('reject') >= 0) return { status: 'reject', stoppedAt: 0, notes: notes };

    /* Gate 1 不一致 → 保留 */
    var g1 = [
      chk(1, 'VRIN', V.VRIN, G.VRIN, '回答に一貫性が認められない。本判定は保留とする。', '回答の一貫性がやや低い。', 'gt'),
      chk(1, 'EVENODD', V.EVENODD, G.EVENODD, '回答に一貫性が認められない。本判定は保留とする。', '偶奇一貫性がやや低い。', 'gt')
    ];
    if (g1.indexOf('reject') >= 0) status = 'hold';

    /* Gate 2 黙従・極端・内寄り → 信頼度 低 */
    var g2 = [
      chk(2, 'TRIN', Math.abs(V.TRIN), G.TRIN, '回答が一方向に偏っている。判定は行うが、信頼度を低として記録する。', '回答がやや一方向に偏っている。', 'gt'),
      chk(2, 'ERS', V.ERS, G.ERS, '回答が両極に偏っている。判定は行うが、信頼度を低として記録する。', '両極の回答がやや多い。', 'gt'),
      chk(2, 'IRS', V.IRS, G.IRS, '判断の留保が過多である。判定は行うが、信頼度を低として記録する。', '内寄りの回答がやや多い。', 'gt')
    ];
    if (status === 'valid' && g2.indexOf('reject') >= 0) status = 'low';

    /* Gate 3 稀有な美徳 → 第六軸の読み方 */
    if (V.L != null && V.L >= G.L.flag) {
      notes.push({ gate: 3, index: 'L', value: V.L, level: 'flag',
                   msg: '稀有な美徳の得点が高い。第六軸の得点は、上限側の推定として読むこと。' });
    }
    return { status: status, stoppedAt: null, notes: notes,
             virtueHigh: V.L != null && V.L >= G.L.flag };
  }

  /* ── §5-7 類型 ───────────────────────────────────── */
  function typify(items, types, norms, domains, subs) {
    var axBy = {};
    items.axes.forEach(function (ax) { axBy[ax.code] = ax; });
    var SEM = Math.sqrt(1 - norms.alpha.domain);

    var letters = {}, code4 = '', kanji4 = '', conf = 1, stab = {};
    items.axes.forEach(function (ax) {
      var z = domains[ax.code].z;
      var hi = z != null && z >= 0;
      letters[ax.code] = { hi: hi, lat: hi ? ax.hiLat : ax.loLat, sym: hi ? ax.hiSym : ax.loSym,
                           name: hi ? ax.hi : ax.lo, z: z };
      if (z != null) stab[ax.code] = Phi(Math.abs(z) / SEM);
      if (AXIS4.indexOf(ax.code) >= 0) {
        code4 += letters[ax.code].lat;
        kanji4 += letters[ax.code].sym;
        conf *= stab[ax.code];
      }
    });
    var suffix = letters.N.lat;             // 'B' β / 'A' α
    var honesty = letters.H.lat;            // 'H' 廉 / 'U' 利

    /* 境界に近い軸（W6・表記規則）：|z| < 1 SEM */
    var unstable = AXIS4.filter(function (a) { return Math.abs(domains[a].z) < SEM; });

    /* Furr (2008) 弁別的類似度 */
    var order = [];
    items.axes.forEach(function (ax) {
      ax.aspects.forEach(function (asp) { order = order.concat(asp.subs); });
    });
    var m = norms.meanProfile || null;
    var x = order.map(function (c, i) {
      var z = subs[c].z == null ? 0 : subs[c].z;        // 非表示の下位尺度は規範平均に置く
      return z - (m ? m[i] : 0);
    });
    var dist = Object.keys(types.types).map(function (k) {
      var p = order.map(function (c, i) {
        var ax = subs[c].axis;
        var v = 0;
        if (AXIS4.indexOf(ax) >= 0) v = (k[AXIS4.indexOf(ax)] === axBy[ax].hiLat) ? 1 : -1;
        return v - (m ? m[i] : 0);
      });
      var d = 0;
      for (var i = 0; i < p.length; i++) d += (x[i] - p[i]) * (x[i] - p[i]);
      return { code: k, d: Math.sqrt(d) };
    }).sort(function (a, b) { return a.d - b.d; });
    var near = dist.slice(0, 3).map(function (e, i) {
      var t = types.types[e.code];
      return { code: e.code, kanji: t.kanji, title: t.title, line: t.line, group: t.group,
               d: e.d, gap: i === 0 ? 0 : e.d - dist[0].d };
    });

    var t = types.types[code4];
    return {
      code: code4, kanji: kanji4, title: t.title, line: t.line, desc: t.desc,
      group: t.group, groupName: types.groups[t.group].name,
      marks: t.marks, low: t.low, orgs: t.orgs,
      suffix: suffix, suffixInfo: types.suffix[suffix],
      honesty: honesty, honestyInfo: types.honesty[honesty],
      display: 'AH-APT-' + kanji4 + '-' + letters.N.sym + ' ／ ' + letters.H.sym,
      latin: 'AH-APT-' + code4 + '-' + suffix + '/' + honesty,
      letters: letters, stability: stab, SEM: SEM,
      confidence: conf, unstable: unstable,
      nearest: near
    };
  }

  /* ── 五段階の帯（§5-4 段階 I・II の表示形式） ─────── */
  /* ±0.5 SD を中程度とする IPIP 公式の簡便法。 */
  var WORDS = ['低い', 'やや低い', '中程度', 'やや高い', '高い'];
  function word(z) {
    if (z == null) return null;
    if (z < -1.5) return WORDS[0];
    if (z < -0.5) return WORDS[1];
    if (z <= 0.5) return WORDS[2];
    if (z <= 1.5) return WORDS[3];
    return WORDS[4];
  }

  /* ── 表示用の帯 ──────────────────────────────────── */
  function bands(items, norms, domains, aspects, subs) {
    var semD = Math.sqrt(1 - norms.alpha.domain);
    var semA = Math.sqrt(1 - norms.alpha.aspect);
    var semS = Math.sqrt(1 - norms.alpha.subscale);
    function band(z, sem) {
      if (z == null) return null;
      return {
        z: z, T: 50 + 10 * z, pct: Phi(z) * 100,
        lo: Phi(z - 1.96 * sem) * 100, hi: Phi(z + 1.96 * sem) * 100,
        sem: sem, word: word(z),
        /* 段階 I・II ではパーセンタイルを数値で出さない */
        numeric: norms.stage === 'III'
      };
    }
    var out = { domains: {}, aspects: {}, subscales: {} };
    Object.keys(domains).forEach(function (k) { out.domains[k] = band(domains[k].z, semD); });
    Object.keys(aspects).forEach(function (k) { out.aspects[k] = band(aspects[k].z, semA); });
    Object.keys(subs).forEach(function (k) { out.subscales[k] = band(subs[k].z, semS); });
    return out;
  }

  /* ── §4-3 配属との適合 ───────────────────────────── */
  function fit(type, org) {
    if (!type || !org) return null;
    var i = type.orgs.indexOf(org);
    return i === 0 ? 'first' : i === 1 ? 'second' : 'none';
  }

  /* ── §4-4 前回との差 ─────────────────────────────── */
  /* 二時点の差の標準誤差は一時点の SEM の √2 倍（≈ 0.42）。
     |Δz| < SE_diff は誤差の範囲、SE_diff 〜 1.96×SE_diff は判断保留、
     それ以上を有意（95%）とする。1 SEM を閾値に置くと測定誤差を変動と誤報する。 */
  function diff(prevDomains, curDomains, norms) {
    var sem = Math.sqrt(1 - norms.alpha.domain);
    var seDiff = sem * Math.SQRT2;
    var out = [];
    Object.keys(curDomains).forEach(function (k) {
      var a = prevDomains && prevDomains[k], b = curDomains[k];
      if (a == null || b == null) return;
      var d = b - a, ad = Math.abs(d);
      out.push({ axis: k, delta: d,
                 level: ad < seDiff ? 'none' : ad < 1.96 * seDiff ? 'maybe' : 'sig',
                 seDiff: seDiff });
    });
    return out;
  }

  return {
    Phi: Phi, score: score, gates: gates, fit: fit, diff: diff, word: word,
    index: index, CORE_N: CORE_N
  };
});
