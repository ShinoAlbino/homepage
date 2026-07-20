/* ==========================================================================
   狩猟・ジビエ入門サイト 共通スクリプト
   モバイルナビ / スクロール出現 / 数値カウントアップ
   ========================================================================== */
(function () {
  'use strict';

  /* モバイルナビ開閉 */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.textContent = '☰';
      }
    });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ナビ：スクロールで縮める */
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var onScrollNav = function () {
      nav.classList.toggle('shrink', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScrollNav, { passive: true });
    onScrollNav();
  }

  /* トップに戻るボタンを生成 */
  var toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.type = 'button';
  toTop.setAttribute('aria-label', 'ページの先頭に戻る');
  toTop.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(toTop);
  var onScrollTop = function () {
    toTop.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScrollTop, { passive: true });
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* マーキー帯：シームレスループ用にコンテンツを複製 */
  document.querySelectorAll('.marquee-track').forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  /* カードの3Dチルト（ポインタ精度が高い端末のみ） */
  if (window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
    document.querySelectorAll('.info-card, a.link-card, .license-card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
        var ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
        card.style.transform = 'translateY(-6px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg)';
      });
      card.addEventListener('pointerleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ヒーロー背景：漂う木の葉パーティクル */
  var heroCanvas = document.querySelector('.hero-canvas');
  if (heroCanvas && !reduceMotion) {
    var hctx = heroCanvas.getContext('2d');
    var hw = 0, hh = 0, dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    var leaves = [];
    var LEAF_COLORS = ['rgba(255,217,184,0.8)', 'rgba(217,111,46,0.7)', 'rgba(180,255,217,0.55)', 'rgba(255,255,255,0.5)'];

    var resizeHero = function () {
      hw = heroCanvas.parentElement.clientWidth;
      hh = heroCanvas.parentElement.clientHeight;
      heroCanvas.width = hw * dpr;
      heroCanvas.height = hh * dpr;
      hctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.min(46, Math.floor((hw * hh) / 22000));
      leaves = Array.from({ length: count }, function () {
        return {
          x: Math.random() * hw,
          y: Math.random() * hh,
          s: 4 + Math.random() * 7,
          vy: 0.25 + Math.random() * 0.5,
          vx: (Math.random() - 0.3) * 0.6,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.03,
          sway: Math.random() * Math.PI * 2,
          color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)]
        };
      });
    };
    window.addEventListener('resize', resizeHero);
    resizeHero();

    var drawLeaf = function (leaf) {
      hctx.save();
      hctx.translate(leaf.x, leaf.y);
      hctx.rotate(leaf.rot);
      hctx.fillStyle = leaf.color;
      hctx.beginPath();
      hctx.ellipse(0, 0, leaf.s, leaf.s * 0.55, 0, 0, Math.PI * 2);
      hctx.fill();
      hctx.restore();
    };

    var heroRunning = true;
    var heroFrame = function (t) {
      if (!heroRunning) return;
      hctx.clearRect(0, 0, hw, hh);
      leaves.forEach(function (leaf) {
        leaf.y += leaf.vy;
        leaf.x += leaf.vx + Math.sin(t / 1600 + leaf.sway) * 0.35;
        leaf.rot += leaf.vr;
        if (leaf.y > hh + 10) { leaf.y = -10; leaf.x = Math.random() * hw; }
        if (leaf.x < -10) leaf.x = hw + 10;
        if (leaf.x > hw + 10) leaf.x = -10;
        drawLeaf(leaf);
      });
      requestAnimationFrame(heroFrame);
    };
    requestAnimationFrame(heroFrame);
    document.addEventListener('visibilitychange', function () {
      heroRunning = !document.hidden;
      if (heroRunning) requestAnimationFrame(heroFrame);
    });
  }

  /* スクロール出現 */
  var targets = document.querySelectorAll('.fade-up');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          el.classList.add('visible');
          io.unobserve(el);
          // 出現アニメ終了後にfade-upを外し、カード自身のホバー用transitionへ制御を戻す
          setTimeout(function () { el.classList.remove('fade-up', 'visible'); }, 760);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* 統計数値のカウントアップ（data-count属性） */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var animate = function (el) {
      var target = parseFloat(el.dataset.count);
      var decimals = (el.dataset.count.split('.')[1] || '').length;
      var dur = 1400;
      var start = null;
      var stepFn = function (ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals);
        if (p < 1) requestAnimationFrame(stepFn);
      };
      requestAnimationFrame(stepFn);
    };
    if (reduceMotion || !('IntersectionObserver' in window)) {
      counters.forEach(function (el) { el.textContent = el.dataset.count; });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animate(entry.target);
            cio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }

  /* ==========================================================
     ニュースウィジェット（/api/hunting-news を叩いて描画）
     Cloudflare Pages Function側でGoogle News RSSを集約・キャッシュしている。
     ========================================================== */
  var newsList = document.getElementById('news-list');
  var newsUpdated = document.getElementById('news-updated');

  var escapeHtml = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  var relTime = function (dateStr) {
    var d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    var diffMin = Math.floor((Date.now() - d.getTime()) / 60000);
    if (diffMin < 1) return 'たった今';
    if (diffMin < 60) return diffMin + '分前';
    var diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return diffH + '時間前';
    var diffD = Math.floor(diffH / 24);
    if (diffD < 7) return diffD + '日前';
    return (d.getMonth() + 1) + '/' + d.getDate();
  };

  var showNewsEmpty = function () {
    if (!newsList) return;
    newsList.innerHTML =
      '<div class="news-empty">現在ニュースを取得できませんでした。<br>' +
      '<a href="https://news.google.com/search?q=%E7%8B%A9%E7%8C%9F&hl=ja&gl=JP&ceid=JP:ja" target="_blank" rel="noopener noreferrer">Google Newsで直接検索する →</a></div>';
  };

  if (newsList) {
    fetch('/api/hunting-news')
      .then(function (r) {
        if (!r.ok) throw new Error('bad status');
        return r.json();
      })
      .then(function (data) {
        var items = (data && data.items) || [];
        if (!items.length) {
          showNewsEmpty();
          return;
        }
        newsList.innerHTML = items
          .map(function (it) {
            return (
              '<a class="news-item" href="' + escapeHtml(it.link) + '" target="_blank" rel="noopener noreferrer">' +
              '<span class="news-time">' + relTime(it.pubDate) + '</span>' +
              '<span class="news-body"><span class="news-title">' + escapeHtml(it.title) + '</span>' +
              '<span class="news-source">' + escapeHtml(it.source || '') + '</span></span>' +
              '<span class="news-arrow">→</span></a>'
            );
          })
          .join('');
        if (newsUpdated && data.updatedAt) {
          var d = new Date(data.updatedAt);
          if (!isNaN(d.getTime())) {
            var pad = function (n) { return String(n).padStart(2, '0'); };
            newsUpdated.textContent = '最終更新: ' + d.getFullYear() + '/' + pad(d.getMonth() + 1) + '/' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
          }
        }
      })
      .catch(function () { showNewsEmpty(); });
  }
})();
