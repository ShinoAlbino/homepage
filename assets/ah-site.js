/* ============================================================
   ArcaHortus / COMMON SCRIPT  (案B: DIMENSIONAL SECTION)

   - 背景の星（canvas#ah-stars）
   - HUD の実時刻（#ah-clock）
   - .fade-in の表示解除（archive.html 用）
   - 最終同期日（#ah-sync）
   - フッターのセッションID（#ah-session-id）
   - A.R.C.A. TERMINAL の起動シーケンス（#ah-boot）

   いずれも対象要素が無いページでは何もしない。
   prefers-reduced-motion: reduce の場合、星は流れず明滅もしない。
   ============================================================ */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 星 ───────────────────────────────────────────── */
  /* canvas に data-cosmos が付いていると「宇宙モード」になる（TOPのみ）。
     密度を上げ、等級を3階層に分け、色温度に幅を持たせ、
     一等星にはにじみ（ハロ）と十字の回折光を足す。
     付いていないページは従来どおりの淡い星のまま。 */
  function initStars() {
    var cv = document.getElementById('ah-stars');
    if (!cv || !cv.getContext) return;
    var cosmos = cv.dataset.cosmos !== undefined;
    var ctx = cv.getContext('2d');
    var stars = [], w = 0, h = 0, dpr = 1;

    // 色温度：青白 / 白 / アイスブルー / 淡い琥珀
    var HUES = [[192,222,238], [226,236,244], [167,220,236], [214,190,150]];

    function build() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth;
      h = cv.clientHeight;
      if (!w || !h) return;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(w * h / (cosmos ? 7000 : 11000));
      stars = [];
      for (var i = 0; i < n; i++) {
        var tier = 0;                       // 0=星屑 1=中等星 2=一等星
        if (cosmos) {
          var roll = Math.random();
          tier = roll > 0.96 ? 2 : (roll > 0.80 ? 1 : 0);
        }
        var r, a;
        if (tier === 2)      { r = Math.random() * 0.7 + 1.2; a = Math.random() * 0.35 + 0.55; }
        else if (tier === 1) { r = Math.random() * 0.5 + 0.7; a = Math.random() * 0.3  + 0.3;  }
        else                 { r = Math.random() * (cosmos ? 0.5 : 1) + 0.22;
                               a = Math.random() * (cosmos ? 0.3 : 0.45) + 0.08; }
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: r, a: a, tier: tier,
          c: cosmos ? HUES[Math.random() > 0.86 ? 3 : (Math.random() * 3) | 0] : HUES[0],
          s: Math.random() * 0.0008 + 0.0002,   // 明滅周期 約6〜30秒
          p: Math.random() * 6.28,
          d: Math.random() * 0.012 + 0.003
        });
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        var a = reduce ? s.a : s.a * (0.55 + 0.45 * Math.sin(t * s.s + s.p));
        var c = s.c[0] + ',' + s.c[1] + ',' + s.c[2];

        if (s.tier === 2) {
          // にじみ
          var g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
          g.addColorStop(0, 'rgba(' + c + ',' + (a * 0.5).toFixed(3) + ')');
          g.addColorStop(1, 'rgba(' + c + ',0)');
          ctx.fillStyle = g;
          ctx.fillRect(s.x - s.r * 6, s.y - s.r * 6, s.r * 12, s.r * 12);
          // 十字の回折光
          ctx.strokeStyle = 'rgba(' + c + ',' + (a * 0.28).toFixed(3) + ')';
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 5, s.y); ctx.lineTo(s.x + s.r * 5, s.y);
          ctx.moveTo(s.x, s.y - s.r * 5); ctx.lineTo(s.x, s.y + s.r * 5);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 6.2832);
        ctx.fillStyle = 'rgba(' + c + ',' + a.toFixed(3) + ')';
        ctx.fill();

        if (!reduce) { s.y += s.d; if (s.y > h) s.y = -2; }
      }
      requestAnimationFrame(draw);
    }

    build();
    requestAnimationFrame(draw);

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(build, 180);
    });
  }

  /* ── 実時刻 ───────────────────────────────────────── */
  function initClock() {
    var el = document.getElementById('ah-clock');
    if (!el) return;
    var p = function (n) { return String(n).padStart(2, '0'); };
    function tick() {
      var d = new Date();
      el.textContent = p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ── .fade-in の表示（archive.html 用） ───────────── */
  /* css/style.css の .fade-in{opacity:0} を解除する。
     旧 js/main.js の fadeInElements() を引き継いだもの。 */
  function initFade() {
    var els = document.querySelectorAll('.fade-in');
    for (var i = 0; i < els.length; i++) els[i].classList.add('active');
  }

  /* ── 最終同期日（#ah-sync） ───────────────────────── */
  function initSync() {
    var el = document.getElementById('ah-sync');
    if (!el) return;
    var d = new Date(), p = function (n) { return String(n).padStart(2, '0'); };
    el.textContent = d.getFullYear() + '.' + p(d.getMonth() + 1) + '.' + p(d.getDate());
  }

  /* ── セッションID ─────────────────────────────────── */
  function initSession() {
    var el = document.getElementById('ah-session-id');
    if (!el) return;
    var hex = function () {
      return Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4, '0');
    };
    el.textContent = 'AH-' + hex() + '-' + hex();
  }

  /* ── A.R.C.A. TERMINAL 起動シーケンス ─────────────── */
  function initBoot() {
    var line = document.getElementById('ah-boot');
    if (!line) return;

    var messages = [
      '> A.R.C.A. TERMINAL v2.1 ... 接続確立',
      '> 境界線同期中 ... OK',
      '> 観測者の精神波形を照合 ... 一致',
      '> ようこそ、既知の観測者。'
    ];

    if (reduce) {
      line.textContent = messages[messages.length - 1];
      return;
    }

    var msgIndex = 0, charIndex = 0;
    function type() {
      var msg = messages[msgIndex];
      if (charIndex <= msg.length) {
        line.textContent = msg.slice(0, charIndex);
        charIndex++;
        setTimeout(type, 34 + Math.random() * 40);
      } else if (msgIndex < messages.length - 1) {
        msgIndex++;
        charIndex = 0;
        setTimeout(type, 900);
      }
    }
    setTimeout(type, 600);
  }

  function boot() {
    initStars();
    initFade();
    initClock();
    initSync();
    initSession();
    initBoot();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
