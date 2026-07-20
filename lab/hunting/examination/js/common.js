/* ==========================================================================
   共通ユーティリティ（localStorage操作 / シャッフル / 画像プレースホルダー生成）
   全ページで <script src="js/common.js"></script> として読み込む
   ========================================================================== */

const HuntingApp = (function () {
  const NS = "huntingExam.";

  function lsGet(key, fallback) {
    try {
      const raw = localStorage.getItem(NS + key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function lsSet(key, value) {
    try {
      localStorage.setItem(NS + key, JSON.stringify(value));
    } catch (e) {
      /* localStorageが使えない環境では無視する */
    }
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickRandom(arr, n) {
    return shuffle(arr).slice(0, Math.min(n, arr.length));
  }

  // 出題時に選択肢の並び順をランダム化した問題のコピーを返す。
  // データ上の正解位置の偏りが解答のヒントにならないようにするため。
  function shuffleChoices(q) {
    const order = shuffle([0, 1, 2]);
    return Object.assign({}, q, {
      choices: order.map((i) => q.choices[i]),
      answer: order.indexOf(q.answer),
    });
  }

  // 種名からプレースホルダーSVG（data URI）を生成する。
  // images/{id}.jpg 等が用意されるまでの代替表示に使う。
  function placeholderImageUrl(name, category) {
    const bg = category === "mammal" ? "#e7ddc9" : "#dbe8da";
    const fg = category === "mammal" ? "#8a4b12" : "#2f5233";
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
        <rect width="480" height="360" fill="${bg}"/>
        <g fill="none" stroke="${fg}" stroke-width="3" opacity="0.5">
          <circle cx="240" cy="150" r="70"/>
          <path d="M120 260 Q240 200 360 260"/>
        </g>
        <text x="240" y="150" font-size="20" fill="${fg}" text-anchor="middle" font-family="sans-serif" opacity="0.6">写真準備中</text>
        <text x="240" y="270" font-size="30" fill="${fg}" text-anchor="middle" font-family="sans-serif" font-weight="bold">${escapeXml(name)}</text>
      </svg>`.trim();
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function escapeXml(s) {
    return String(s).replace(/[<>&'"]/g, function (c) {
      return { "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c];
    });
  }

  // <img>にfallbackを仕込む。実画像が無ければプレースホルダーを表示する。
  function bindImageFallback(imgEl, species) {
    imgEl.alt = species.name;
    imgEl.src = "images/" + species.id + ".jpg";
    imgEl.onerror = function () {
      imgEl.onerror = null;
      imgEl.src = placeholderImageUrl(species.name, species.category);
    };
  }

  function formatClock(sec) {
    const s = Math.max(0, Math.round(sec));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
  }

  function todayStr() {
    const d = new Date();
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0") +
      " " +
      String(d.getHours()).padStart(2, "0") +
      ":" +
      String(d.getMinutes()).padStart(2, "0")
    );
  }

  return {
    lsGet,
    lsSet,
    shuffle,
    pickRandom,
    shuffleChoices,
    placeholderImageUrl,
    bindImageFallback,
    formatClock,
    todayStr,
  };
})();
