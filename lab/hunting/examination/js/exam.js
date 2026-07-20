/* ==========================================================================
   知識試験 過去問演習ロジック
   三肢択一 / 間違えた問題のみ復習モード / 成績履歴の保存
   ========================================================================== */
(function () {
  const WRONG_KEY = "exam.wrongIds";
  const HISTORY_KEY = "exam.history";
  const LICENSE_KEY = "exam.license";
  const CATEGORY_LABEL = { law: "鳥獣法令", gun: "猟具（銃器）", trap: "猟具（わな）", knowledge: "鳥獣の知識", management: "鳥獣の保護管理" };

  const setupPanel = document.getElementById("setupPanel");
  const quizArea = document.getElementById("quizArea");
  const resultArea = document.getElementById("resultArea");
  const licenseSelect = document.getElementById("licenseSelect");
  const modeSelect = document.getElementById("modeSelect");
  const catSelect = document.getElementById("catSelect");
  const numSelect = document.getElementById("numSelect");
  const startBtn = document.getElementById("startBtn");
  const wrongCountInfo = document.getElementById("wrongCountInfo");
  const historyTableWrap = document.getElementById("historyTableWrap");

  licenseSelect.value = HuntingApp.lsGet(LICENSE_KEY, "gun");

  function toolCategoryFor(license) {
    return license === "trap" ? "trap" : "gun";
  }

  function updateCatOptions() {
    const toolCat = toolCategoryFor(licenseSelect.value);
    const toolLabel = CATEGORY_LABEL[toolCat];
    catSelect.innerHTML = `
      <option value="all">すべて</option>
      <option value="law">鳥獣法令</option>
      <option value="${toolCat}">${toolLabel}</option>
      <option value="knowledge">鳥獣の知識</option>
      <option value="management">鳥獣の保護管理</option>
    `;
  }

  licenseSelect.addEventListener("change", () => {
    HuntingApp.lsSet(LICENSE_KEY, licenseSelect.value);
    updateCatOptions();
  });
  updateCatOptions();

  function getWrongSet() {
    return HuntingApp.lsGet(WRONG_KEY, []);
  }
  function saveWrongSet(arr) {
    HuntingApp.lsSet(WRONG_KEY, Array.from(new Set(arr)));
  }
  function removeFromWrong(id) {
    saveWrongSet(getWrongSet().filter((x) => x !== id));
  }
  function addToWrong(id) {
    const s = getWrongSet();
    if (!s.includes(id)) s.push(id);
    saveWrongSet(s);
  }

  function updateWrongInfo() {
    const n = getWrongSet().length;
    wrongCountInfo.textContent = n > 0 ? `現在、間違えたまま未復習の問題が ${n} 問あります。` : "間違えたまま未復習の問題はありません。";
  }

  function buildPool() {
    const mode = modeSelect.value;
    const cat = catSelect.value;
    const oppositeTool = toolCategoryFor(licenseSelect.value) === "trap" ? "gun" : "trap";
    let pool = QUESTIONS.filter((q) => q.category !== oppositeTool);
    if (mode === "wrong") {
      const wrongIds = getWrongSet();
      pool = pool.filter((q) => wrongIds.includes(q.id));
    }
    if (cat !== "all") {
      pool = pool.filter((q) => q.category === cat);
    }
    return pool;
  }

  let quiz = { list: [], idx: 0, correct: 0, wrong: [] };

  function startQuiz() {
    const pool = buildPool();
    if (pool.length === 0) {
      alert("該当する問題がありません。設定を変更してください。");
      return;
    }
    const num = Number(numSelect.value);
    const list = (num >= pool.length ? HuntingApp.shuffle(pool) : HuntingApp.pickRandom(pool, num)).map(HuntingApp.shuffleChoices);
    quiz = { list, idx: 0, correct: 0, wrong: [] };
    setupPanel.style.display = "none";
    resultArea.style.display = "none";
    quizArea.style.display = "block";
    renderQuestion();
  }

  function renderQuestion() {
    const q = quiz.list[quiz.idx];
    quizArea.innerHTML = `
      <div class="progress-bar"><div style="width:${Math.round((quiz.idx / quiz.list.length) * 100)}%"></div></div>
      <div class="q-index">問題 ${quiz.idx + 1} / ${quiz.list.length}</div>
      <div class="card">
        <span class="category-chip">${CATEGORY_LABEL[q.category]}</span>
        <h3>${q.question}</h3>
        <div class="choice-list" id="choiceList">
          ${q.choices.map((c, i) => `<button class="choice-btn" data-idx="${i}"><span class="num">${i + 1}</span><span>${c}</span></button>`).join("")}
        </div>
        <div id="feedback"></div>
        <div class="controls-row">
          <button class="btn block" id="nextBtn" disabled>次の問題へ</button>
        </div>
      </div>
    `;
    document.querySelectorAll("#choiceList .choice-btn").forEach((btn) => {
      btn.addEventListener("click", () => answer(Number(btn.dataset.idx), q));
    });
    document.getElementById("nextBtn").addEventListener("click", next);
  }

  function answer(idx, q) {
    if (document.getElementById("choiceList").dataset.answered) return;
    document.getElementById("choiceList").dataset.answered = "1";
    const correct = idx === q.answer;
    if (correct) {
      quiz.correct++;
      removeFromWrong(q.id);
    } else {
      quiz.wrong.push(q);
      addToWrong(q.id);
    }
    document.querySelectorAll("#choiceList .choice-btn").forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add("correct");
      else if (i === idx) btn.classList.add("wrong");
    });
    document.getElementById("feedback").innerHTML = `<div class="explanation-box">${q.explanation}</div>`;
    document.getElementById("nextBtn").disabled = false;
    updateWrongInfo();
  }

  function next() {
    quiz.idx++;
    if (quiz.idx >= quiz.list.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }

  function finishQuiz() {
    quizArea.style.display = "none";
    resultArea.style.display = "block";
    const total = quiz.list.length;
    const rate = Math.round((quiz.correct / total) * 100);

    const history = HuntingApp.lsGet(HISTORY_KEY, []);
    history.unshift({
      date: HuntingApp.todayStr(),
      type: modeSelect.value === "wrong" ? "復習" : "通常演習",
      category: CATEGORY_LABEL[catSelect.value] || "すべて",
      total,
      correct: quiz.correct,
      rate,
    });
    HuntingApp.lsSet(HISTORY_KEY, history.slice(0, 50));

    const wrongHtml = quiz.wrong.length
      ? `<h3>間違えた問題</h3><div class="parts-list">${quiz.wrong
          .map((q) => `<div class="part-item"><b>[${CATEGORY_LABEL[q.category]}]</b> ${q.question}<br><span style="color:var(--color-correct)">正解: ${q.choices[q.answer]}</span></div>`)
          .join("")}</div>`
      : `<p>全問正解です！</p>`;

    resultArea.innerHTML = `
      <div class="card">
        <h2>演習結果</h2>
        <div class="stat-grid">
          <div class="stat-box"><div class="num">${quiz.correct}/${total}</div><div class="lbl">正解数</div></div>
          <div class="stat-box"><div class="num">${rate}%</div><div class="lbl">正答率</div></div>
        </div>
        ${wrongHtml}
        <div class="controls-row">
          <button class="btn secondary block" id="backBtn">設定に戻る</button>
          <button class="btn block" id="retryBtn">同じ設定でもう一度</button>
        </div>
      </div>
    `;
    document.getElementById("retryBtn").addEventListener("click", startQuiz);
    document.getElementById("backBtn").addEventListener("click", () => {
      resultArea.style.display = "none";
      setupPanel.style.display = "block";
      renderHistory();
      updateWrongInfo();
    });
    renderHistory();
  }

  function renderHistory() {
    const history = HuntingApp.lsGet(HISTORY_KEY, []).slice(0, 20);
    if (history.length === 0) {
      historyTableWrap.innerHTML = `<div class="empty-state">まだ演習記録がありません</div>`;
      return;
    }
    historyTableWrap.innerHTML = `
      <table class="history-table">
        <thead><tr><th>日時</th><th>種別</th><th>分野</th><th>正解</th><th>正答率</th></tr></thead>
        <tbody>
          ${history.map((h) => `<tr><td>${h.date}</td><td>${h.type}</td><td>${h.category}</td><td>${h.correct}/${h.total}</td><td>${h.rate}%</td></tr>`).join("")}
        </tbody>
      </table>
    `;
  }

  startBtn.addEventListener("click", startQuiz);
  updateWrongInfo();
  renderHistory();
})();
