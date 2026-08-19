/* ==========================================================================
   狩猟・ジビエ入門サイト 共通スクリプト
   モバイルナビ / スクロール出現 / 数値カウントアップ / 紋アイコンの描画
   ========================================================================== */
(function () {
  'use strict';

  /* ==========================================================
     猟期・季節アクセント・HUD帯
     猟期は北海道を除く区域の 11/15〜翌2/15 を基準（北海道は 10/1〜1/31）。
     月齢・日の入は端末の位置を使わず東京（N35.68 / E139.77）固定。
     ========================================================== */
  var TOKYO_LAT = 35.6812, TOKYO_LON = 139.7671;

  /* 日本時間の年月日時分を取り出す（閲覧者の時計に依存させない） */
  var jstParts = function (date) {
    var f = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: false
    });
    var p = {};
    f.formatToParts(date).forEach(function (x) { p[x.type] = x.value; });
    return { y: +p.year, m: +p.month, d: +p.day, hh: p.hour, mm: p.minute };
  };

  /* 猟期の状態。中なら残り日数、外なら次の解禁までの日数 */
  var ryokiState = function (y, m, d) {
    var today = Date.UTC(y, m - 1, d);
    var inSeason = (m === 11 && d >= 15) || m === 12 || m === 1 || (m === 2 && d <= 15);
    if (inSeason) {
      var end = Date.UTC(m >= 11 ? y + 1 : y, 1, 15);
      /* 残り日数は当日を含める（2/15 なら「残り 1 日」） */
      return { inSeason: true, days: Math.round((end - today) / 86400000) + 1 };
    }
    var start = Date.UTC(y, 10, 15);
    if (today > start) start = Date.UTC(y + 1, 10, 15);
    return { inSeason: false, days: Math.round((start - today) / 86400000) };
  };

  /* 月齢（朔からの日数） */
  var moonAge = function (date) {
    var SYN = 29.530588853;
    var age = ((date.getTime() - Date.UTC(2000, 0, 6, 18, 14)) / 86400000) % SYN;
    return age < 0 ? age + SYN : age;
  };

  /* 日の出・日の入（sunrise equation の簡易版・誤差±2分程度） */
  var sunTimes = function (date, lat, lonEast) {
    var RAD = Math.PI / 180;
    var jd = date.getTime() / 86400000 + 2440587.5;
    var n = Math.ceil(jd - 2451545.0 + 0.0008);
    var Js = n + 0.0009 - lonEast / 360;
    var M = (357.5291 + 0.98560028 * Js) % 360;
    var C = 1.9148 * Math.sin(M * RAD) + 0.02 * Math.sin(2 * M * RAD) + 0.0003 * Math.sin(3 * M * RAD);
    var lam = (M + C + 180 + 102.9372) % 360;
    var Jt = 2451545.0 + Js + 0.0053 * Math.sin(M * RAD) - 0.0069 * Math.sin(2 * lam * RAD);
    var sinDec = Math.sin(lam * RAD) * Math.sin(23.44 * RAD);
    var cosDec = Math.cos(Math.asin(sinDec));
    var cosW = (Math.sin(-0.833 * RAD) - Math.sin(lat * RAD) * sinDec) / (Math.cos(lat * RAD) * cosDec);
    if (cosW > 1 || cosW < -1) return null;
    var w = (Math.acos(cosW) / RAD) / 360;
    var toDate = function (j) { return new Date((j - 2440587.5) * 86400000); };
    return { rise: toDate(Jt - w), set: toDate(Jt + w) };
  };

  var now = new Date();
  var jst = jstParts(now);
  var ryoki = ryokiState(jst.y, jst.m, jst.d);

  /* 季節アクセント
     --accent   … 紙の地の差し色（文字にも使うのでAA基準を満たす濃さ）
     --ink-season … 夜の地に敷く遠山の色（暗い地に乗せるので淡く明るい側） */
  var seasonKey = ryoki.inSeason ? 'ryoki' : (jst.m <= 5 ? 'haru' : jst.m <= 8 ? 'natsu' : 'aki');
  var SEASON = {
    ryoki: { accent: '#1F3A4D', ink: '#86A6BE', ja: '猟期', en: 'RYOKI' },
    haru:  { accent: '#5A7A4A', ink: '#B6CE8A', ja: '春',   en: 'HARU' },
    natsu: { accent: '#2F5D45', ink: '#7FB5A6', ja: '夏',   en: 'NATSU' },
    aki:   { accent: '#B7382C', ink: '#DDA08F', ja: '秋',   en: 'AKI' }
  };
  var season = SEASON[seasonKey];
  var root = document.documentElement;
  /* data-accent が付いたページ（higai の藍固定など）はアクセントを季節で動かさない */
  if (!root.dataset.accent) root.style.setProperty('--accent', season.accent);
  root.style.setProperty('--ink-season', season.ink);
  root.dataset.season = seasonKey;

  /* HUD帯 */
  var hud = document.getElementById('hud');
  if (hud) {
    var pad = function (v, n) { return String(v).padStart(n, '0'); };
    var sun = sunTimes(now, TOKYO_LAT, TOKYO_LON);
    var hhmm = function (d) {
      if (!d) return '—';
      var p = jstParts(d);
      return p.hh + ':' + p.mm;
    };
    hud.innerHTML =
      '<span class="hud-season"><i></i>' + season.ja + ' ' + season.en + '</span>' +
      /* 残日数はゼロ埋めしない（088 が 88 と読み違えられるため）。時刻の 05:04 は桁を揃える */
      '<span>' + (ryoki.inSeason ? '猟期 残り' : '猟期まで') + ' <b>' + ryoki.days + '</b> 日</span>' +
      '<span>月齢 <b>' + moonAge(now).toFixed(1) + '</b></span>' +
      '<span>日の出 <b>' + hhmm(sun && sun.rise) + '</b></span>' +
      '<span>日の入 <b>' + hhmm(sun && sun.set) + '</b></span>' +
      '<span class="hud-note">猟期は北海道以外（北海道 10/1〜1/31）／月齢・日の出入は東京基準、地域により前後します</span>' +
      '<span class="hud-geo">N 35.68 / E 139.77</span>';
    hud.hidden = false;
  }

  /* ナビアイコン（絵文字を使わない・線の紋で統一） */
  var ICON_MENU = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18"/></svg>';
  var ICON_CLOSE = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>';

  /* モバイルナビ開閉 */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    var closeNav = function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = ICON_MENU;
    };
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.innerHTML = open ? ICON_CLOSE : ICON_MENU;
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeNav();
    });
    /* メニュー以外をタップ／クリックした時に閉じる */
    document.addEventListener('click', function (e) {
      if (links.classList.contains('open') && !links.contains(e.target) && !toggle.contains(e.target)) {
        closeNav();
      }
    });
    /* Escキーで閉じる */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) closeNav();
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

  /* 縦組み（仕様§4）
     writing-mode は環境によって字送りが破綻するため、キーコピーは文字スタック方式で組む。
     句読点は .pn を付けて右上へ寄せ、--i で落ちてくる順番を渡す。 */
  var JSV_PUNCT = '、。，．';
  document.querySelectorAll('.jsv').forEach(function (el) {
    var text = el.textContent.trim();
    if (!text) return;
    el.textContent = '';
    Array.prototype.forEach.call(text, function (ch, i) {
      var span = document.createElement('span');
      span.className = 'vch' + (JSV_PUNCT.indexOf(ch) >= 0 ? ' pn' : '');
      span.style.setProperty('--i', i);
      if (ch === ' ' || ch === ' ') { span.style.height = '.5em'; } else { span.textContent = ch; }
      el.appendChild(span);
    });
  });

  /* 数値型（仕様§6-3）の墨の下線：スクロールで引かれる */
  var underlines = document.querySelectorAll('.figures .stat');
  if (underlines.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      underlines.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var uio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            uio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.35 });
      underlines.forEach(function (el) { uio.observe(el); });
    }
  }

  /* 紋アイコン：スクロールで線が「描かれる」 */
  var mons = document.querySelectorAll('.mon.draw');
  if (mons.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      mons.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var mio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            mio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      mons.forEach(function (el) { mio.observe(el); });
    }
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
      /* 閾値は割合ではなく「少しでも入ったら」。都道府県索引のように背の高い要素だと
         12%が画面に収まらず、永遠に出現しないことがあった。 */
    }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });
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
