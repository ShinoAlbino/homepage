/* ==========================================================================
   猟銃の各部名称ページ
   images/gun1.png〜gun4.png（実写真）の上に、番号丸をHTML/CSSで重ねて表示する。
   画像内の座標は下記 MARKER_COORDS にのみ持たせ（表示レイヤーの情報のため）、
   名称・説明文は data.js の GUN_PARTS を参照する。
   座標は画像のピクセル寸法に対する割合（%）に変換して配置するため、
   画面幅が変わっても番号の位置がずれない。
   ========================================================================== */
(function () {
  const svgWrap = document.getElementById("svgWrap");
  const diagramTitle = document.getElementById("diagramTitle");
  const partsList = document.getElementById("partsList");
  const tabs = {
    gun1: document.getElementById("tabGun1"),
    gun2: document.getElementById("tabGun2"),
    gun3: document.getElementById("tabGun3"),
    gun4: document.getElementById("tabGun4"),
  };

  // 画像のピクセル寸法と、各番号の中心座標（画像左上原点）
  const MARKER_COORDS = {
    gun1: {
      width: 1520, height: 251,
      points: { 1: [122, 140], 2: [357, 108], 3: [489, 123], 4: [492, 158], 5: [552, 85], 7: [822, 78], 8: [1142, 45], 9: [1482, 30], 12: [458, 56], 13: [497, 40] },
    },
    gun2: {
      width: 1520, height: 255,
      points: { 1: [132, 137], 2: [377, 120], 3: [507, 128], 4: [494, 163], 5: [577, 72], 6: [640, 55], 7: [912, 67], 8: [1202, 37], 9: [1479, 30], 12: [468, 112] },
    },
    gun3: {
      width: 1520, height: 242,
      points: { 1: [142, 120], 2: [382, 108], 3: [497, 126], 4: [500, 162], 5: [577, 55], 6: [642, 48], 14: [922, 80], 8: [1212, 35], 9: [1475, 27], 12: [458, 103], 13: [497, 40]  },
    },
    gun4: {
      width: 1520, height: 312,
      points: { 1: [142, 184], 2: [387, 174], 3: [500, 180], 4: [510, 214], 5: [640, 100], 6: [518, 153], 7: [1000, 148], 8: [1250, 113], 9: [1462, 85], 10: [620, 195], 11: [665, 38], 12: [500, 101] },
    },
  };

  function renderDiagram(type) {
    const data = GUN_PARTS[type];
    const coords = MARKER_COORDS[type];
    const markersHtml = data.parts
      .map((p) => {
        const point = coords.points[p.no];
        if (!point) return "";
        const leftPct = (point[0] / coords.width) * 100;
        const topPct = (point[1] / coords.height) * 100;
        return `<div class="gun-marker" style="left:${leftPct.toFixed(2)}%;top:${topPct.toFixed(2)}%;">${p.no}</div>`;
      })
      .join("");

    svgWrap.innerHTML = `
      <div class="gun-image-wrap" style="aspect-ratio:${coords.width}/${coords.height};">
        <img src="${data.image}" alt="${data.title}">
        ${markersHtml}
      </div>
    `;
  }

  function renderPartsList(parts) {
    partsList.innerHTML = parts
      .map(
        (p) => `
      <div class="part-item" data-open="false">
        <b>${p.no}. ${p.name}</b>
        <div class="desc" style="display:none;margin-top:4px;font-size:0.88rem;">${p.desc}</div>
      </div>`
      )
      .join("");
    partsList.querySelectorAll(".part-item").forEach((item) => {
      item.style.cursor = "pointer";
      item.addEventListener("click", () => {
        const open = item.dataset.open === "true";
        item.dataset.open = open ? "false" : "true";
        item.querySelector(".desc").style.display = open ? "none" : "block";
      });
    });
  }

  function showGun(type) {
    const data = GUN_PARTS[type];
    diagramTitle.textContent = data.title;
    renderDiagram(type);
    svgWrap.scrollLeft = 0;
    renderPartsList(data.parts);
    Object.keys(tabs).forEach((k) => {
      tabs[k].className = k === type ? "btn" : "btn secondary";
    });
  }

  Object.keys(tabs).forEach((k) => {
    tabs[k].addEventListener("click", () => showGun(k));
  });

  showGun("gun1");
})();
