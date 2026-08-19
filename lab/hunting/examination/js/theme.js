/* ==========================================================================
   昼／夜トグル（仕様§8）
   既定は夜墨。山中の夜間で眩しくないことを優先している。
   明るい屋外では読みづらいので、ヘッダー右端から紙の地に切り替えられる。
   localStorage は使わない（セッション内のみ・仕様の指定どおり）。
   ========================================================================== */
(function () {
  'use strict';

  var ICON_DAY =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="4.4"/>' +
    '<path d="M12 2.6v2.4M12 19v2.4M2.6 12h2.4M19 12h2.4M5.4 5.4l1.7 1.7M16.9 16.9l1.7 1.7M18.6 5.4l-1.7 1.7M7.1 16.9l-1.7 1.7"/>' +
    '</svg>';

  var ICON_NIGHT =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M20.2 14.6A8.6 8.6 0 0 1 9.4 3.8a8.6 8.6 0 1 0 10.8 10.8Z"/>' +
    '</svg>';

  var root = document.documentElement;
  var header = document.querySelector('.app-header');
  if (!header) return;

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'theme-toggle';

  /* ボタンは「切り替えた先」を出す。夜のときは昼へ、昼のときは夜へ。 */
  var paint = function () {
    var isLight = root.dataset.theme === 'light';
    btn.innerHTML = (isLight ? ICON_NIGHT : ICON_DAY) + '<span>' + (isLight ? '夜' : '昼') + '</span>';
    btn.setAttribute('aria-label', (isLight ? '夜' : '昼') + 'モードに切り替える');
    btn.setAttribute('title', (isLight ? '夜' : '昼') + 'モードに切り替える');
    /* アドレスバーの色も合わせる */
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isLight ? '#F2EFE8' : '#0C0E0D');
  };

  btn.addEventListener('click', function () {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    paint();
  });

  paint();
  /* h1 の直後に置く。トップは h1 の下に戻りリンクの行があり、
     末尾に足すとボタンだけが3行目に落ちてしまう。 */
  var h1 = header.querySelector('h1');
  if (h1 && h1.nextSibling) header.insertBefore(btn, h1.nextSibling);
  else header.appendChild(btn);
})();
