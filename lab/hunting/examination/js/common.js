/* ==========================================================================
   共通ユーティリティ（localStorage操作 / シャッフル / 画像プレースホルダー生成）
   全ページで <script src="js/common.js"></script> として読み込む
   ========================================================================== */

const HuntingApp = (function () {
  const NS = "huntingExam.";

  // 免許種別。data.js の QUESTIONS[].license に入る値と対応する。
  const LICENSE_LABEL = { net: "網猟", trap: "わな猟", gun1: "第一種銃猟", gun2: "第二種銃猟" };

  // 演習ページだけが使う擬似的な免許種別。免許で絞らず全問を対象にする。
  // 本試験は免許ごとに実施されるため、模擬試験ではこの値を使わない。
  const ANY_LICENSE = "any";
  const ANY_LICENSE_LABEL = "すべて（免許を問わず）";

  function licenseLabel(v) {
    return v === ANY_LICENSE ? ANY_LICENSE_LABEL : LICENSE_LABEL[v];
  }

  // 問題 q が免許 license の出題対象かどうか。
  function matchesLicense(q, license) {
    return license === ANY_LICENSE || q.license.includes(license);
  }

  // 本試験の出題4分野。data.js の QUESTIONS[].category と対応する。
  const CATEGORY_LABEL = {
    law: "鳥獣法令",
    gear: "猟具の知識",
    knowledge: "鳥獣の知識",
    management: "鳥獣の保護管理",
  };

  // 例題集 p.23 に明記された本試験1回（30問）の分野別配分。
  const MOCK_DISTRIBUTION = [
    ["law", 13],
    ["gear", 6],
    ["knowledge", 9],
    ["management", 2],
  ];

  const MOCK_TOTAL = MOCK_DISTRIBUTION.reduce((n, d) => n + d[1], 0);
  const PASS_RATE = 70;

  // 旧データでは免許を "gun"（第一種銃猟）/"trap" の2値で保存していた。
  // 保存済みの設定・履歴を読むときに新しい4値へ寄せる。
  function normalizeLicense(v) {
    if (v === "gun") return "gun1";
    if (v === ANY_LICENSE) return ANY_LICENSE;
    return LICENSE_LABEL[v] ? v : "gun1";
  }

  // 免許種別 L の模擬試験を組む。分野ごとに固定数を抽出するため、
  // 単純ランダムのときのように保護管理が過剰に出ることがない。
  // 本試験は免許ごとに実施されるので ANY_LICENSE は受け付けない
  // （猟具の問題が免許をまたいで混ざり、本試験の再現にならないため）。
  function makeMockExam(license) {
    if (!LICENSE_LABEL[license]) {
      throw new Error("makeMockExam: 免許種別が不正です: " + license);
    }
    const list = [];
    MOCK_DISTRIBUTION.forEach(function (d) {
      const pool = QUESTIONS.filter(function (q) {
        return q.license.includes(license) && q.category === d[0];
      });
      list.push.apply(list, pickRandom(pool, d[1]));
    });
    return shuffle(list);
  }

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
    LICENSE_LABEL,
    ANY_LICENSE,
    licenseLabel,
    matchesLicense,
    CATEGORY_LABEL,
    MOCK_DISTRIBUTION,
    MOCK_TOTAL,
    PASS_RATE,
    normalizeLicense,
    makeMockExam,
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
