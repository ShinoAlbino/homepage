/* ==========================================================================
   狩猟鳥獣フラッシュ暗記ロジック
   スタート画面（自動送り設定） → カード（画像→種名の2段階） → 終了画面。
   出題対象は狩猟鳥獣のみ。ノイヌ・ノネコ・シベリアイタチは
   判別試験の学習対象から外すため除外。
   URLパラメータ ?scope=bird / ?scope=mammal で範囲を指定して開く。
   ========================================================================== */
(function () {
  const SETTINGS_KEY = "flashcard.settings";
  const EXCLUDED_IDS = ["noinu", "noneko", "siberia_itachi"];
  const SCOPE_LABEL = { all: "狩猟鳥獣すべて", bird: "鳥類のみ", mammal: "獣類のみ" };

  let settings = Object.assign({ auto: false, speed: 2 }, HuntingApp.lsGet(SETTINGS_KEY, {}));

  const urlScope = new URLSearchParams(location.search).get("scope");
  const scope = urlScope === "bird" || urlScope === "mammal" ? urlScope : "all";

  let deck = [];
  let pos = 0;
  let stage = 0; // 0: 画像のみ, 1: 種名・特徴表示
  let autoTimer = null;

  const els = {
    pageTitle: document.getElementById("pageTitle"),
    startScreen: document.getElementById("startScreen"),
    startTitle: document.getElementById("startTitle"),
    startDesc: document.getElementById("startDesc"),
    autoToggle: document.getElementById("autoToggle"),
    speedRow: document.getElementById("speedRow"),
    speedRange: document.getElementById("speedRange"),
    speedVal: document.getElementById("speedVal"),
    startBtn: document.getElementById("startBtn"),
    cardScreen: document.getElementById("cardScreen"),
    progressFill: document.getElementById("progressFill"),
    deckIndex: document.getElementById("deckIndex"),
    cardImage: document.getElementById("cardImage"),
    nameBox: document.getElementById("nameBox"),
    featureBox: document.getElementById("featureBox"),
    sizeChip: document.getElementById("sizeChip"),
    featureList: document.getElementById("featureList"),
    noteText: document.getElementById("noteText"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    endScreen: document.getElementById("endScreen"),
    endDesc: document.getElementById("endDesc"),
    retryBtn: document.getElementById("retryBtn"),
  };

  function pool() {
    let list = SPECIES_LIST.filter((s) => s.game && !EXCLUDED_IDS.includes(s.id));
    if (scope === "bird") list = list.filter((s) => s.category === "bird");
    if (scope === "mammal") list = list.filter((s) => s.category === "mammal");
    return list;
  }

  function saveSettings() {
    HuntingApp.lsSet(SETTINGS_KEY, { auto: settings.auto, speed: settings.speed });
  }

  function showScreen(name) {
    els.startScreen.style.display = name === "start" ? "block" : "none";
    els.cardScreen.style.display = name === "card" ? "block" : "none";
    els.endScreen.style.display = name === "end" ? "block" : "none";
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startAutoIfEnabled() {
    stopAuto();
    if (settings.auto) {
      autoTimer = setInterval(advance, Number(settings.speed) * 1000);
    }
  }

  function startSession() {
    deck = HuntingApp.shuffle(pool());
    pos = 0;
    stage = 0;
    showScreen("card");
    render();
    startAutoIfEnabled();
  }

  function finishSession() {
    stopAuto();
    els.endDesc.textContent =
      SCOPE_LABEL[scope] + " 全" + deck.length + "種を確認しました。繰り返して確実に覚えましょう。";
    showScreen("end");
  }

  function render() {
    const sp = deck[pos];
    if (!sp) return;

    HuntingApp.bindImageFallback(els.cardImage, sp);

    els.deckIndex.textContent = (pos + 1) + " / " + deck.length;
    els.progressFill.style.width = Math.round(((pos + stage / 2) / deck.length) * 100) + "%";

    if (stage >= 1) {
      els.nameBox.textContent = sp.name;
      els.nameBox.classList.remove("hidden-stage");
      els.nameBox.classList.add("judge-game");
      els.featureBox.style.display = "block";
      els.sizeChip.textContent = "大きさの目安：" + (sp.size || "―");
      els.featureList.innerHTML = sp.features.map((f) => "<li>" + f + "</li>").join("");
      els.noteText.textContent = sp.note || "";
    } else {
      els.nameBox.textContent = "タップして種名を表示";
      els.nameBox.className = "reveal-box hidden-stage";
      els.featureBox.style.display = "none";
    }
  }

  function advance() {
    if (stage < 1) {
      stage++;
      render();
      return;
    }
    if (pos + 1 >= deck.length) {
      finishSession();
      return;
    }
    pos++;
    stage = 0;
    render();
  }

  function back() {
    if (stage > 0) {
      stage--;
    } else if (pos > 0) {
      pos--;
      stage = 1;
    }
    render();
  }

  // ---- スタート画面 ----
  const title = "フラッシュ暗記（" + SCOPE_LABEL[scope] + "）";
  els.pageTitle.textContent = title;
  els.startTitle.textContent = title;
  els.startDesc.textContent =
    "全" + pool().length + "種をシャッフルして出題します。画像 → 種名の順にめくって覚えましょう。";

  els.autoToggle.checked = settings.auto;
  els.speedRange.value = settings.speed;
  els.speedVal.textContent = Number(settings.speed).toFixed(1);
  els.speedRow.style.display = settings.auto ? "flex" : "none";

  els.autoToggle.addEventListener("change", () => {
    settings.auto = els.autoToggle.checked;
    els.speedRow.style.display = settings.auto ? "flex" : "none";
    saveSettings();
  });

  els.speedRange.addEventListener("input", () => {
    settings.speed = Number(els.speedRange.value);
    els.speedVal.textContent = settings.speed.toFixed(1);
    saveSettings();
  });

  els.startBtn.addEventListener("click", startSession);
  els.retryBtn.addEventListener("click", () => showScreen("start"));

  els.nextBtn.addEventListener("click", advance);
  els.prevBtn.addEventListener("click", back);
  els.cardImage.addEventListener("click", advance);
  els.nameBox.addEventListener("click", advance);

  showScreen("start");
})();
