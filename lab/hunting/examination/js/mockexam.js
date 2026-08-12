/* ==========================================================================
   模擬試験モード（30問・90分・70%合格判定）
   ========================================================================== */
(function () {
  const HISTORY_KEY = "mockexam.history";
  const LICENSE_KEY = "mockexam.license";
  const DURATION_SEC = 90 * 60;
  const CATEGORY_LABEL = HuntingApp.CATEGORY_LABEL;
  const LICENSE_LABEL = HuntingApp.LICENSE_LABEL;

  const introPanel = document.getElementById("introPanel");
  const examArea = document.getElementById("examArea");
  const resultArea = document.getElementById("resultArea");
  const timerDisplay = document.getElementById("timerDisplay");
  const historyTableWrap = document.getElementById("historyTableWrap");
  const startBtn = document.getElementById("startBtn");
  const licenseSelect = document.getElementById("licenseSelect");

  // 旧版は "gun"/"trap" の2値で保存していたので、読み込み時に4値へ寄せる。
  licenseSelect.value = HuntingApp.normalizeLicense(HuntingApp.lsGet(LICENSE_KEY, "gun1"));
  licenseSelect.addEventListener("change", () => {
    HuntingApp.lsSet(LICENSE_KEY, licenseSelect.value);
  });

  let questions = [];
  let answers = {};
  let remainingSec = DURATION_SEC;
  let timerHandle = null;
  let finished = false;
  let currentLicense = "gun1";

  function buildQuestionSet(license) {
    return HuntingApp.makeMockExam(license).map(HuntingApp.shuffleChoices);
  }

  function startExam() {
    currentLicense = licenseSelect.value;
    questions = buildQuestionSet(currentLicense);
    answers = {};
    remainingSec = DURATION_SEC;
    finished = false;
    introPanel.style.display = "none";
    resultArea.style.display = "none";
    examArea.style.display = "block";
    renderExam();
    startTimer();
  }

  function renderExam() {
    examArea.innerHTML = `
      <div class="card">
        <p style="font-size:0.85rem;color:var(--color-text-muted);">全${questions.length}問。すべて解答したら一番下の「採点する」を押してください。</p>
      </div>
      ${questions
        .map(
          (q, qi) => `
        <div class="card">
          <span class="category-chip">${CATEGORY_LABEL[q.category]}</span>
          <div class="q-index">問題 ${qi + 1} / ${questions.length}</div>
          <h3>${q.question}</h3>
          <div class="choice-list">
            ${q.choices
              .map(
                (c, ci) => `
              <button class="choice-btn" data-q="${qi}" data-idx="${ci}">
                <span class="num">${ci + 1}</span><span>${c}</span>
              </button>`
              )
              .join("")}
          </div>
        </div>`
        )
        .join("")}
      <div class="card">
        <button class="btn block" id="submitBtn">採点する</button>
      </div>
    `;

    examArea.querySelectorAll(".choice-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qi = Number(btn.dataset.q);
        const idx = Number(btn.dataset.idx);
        answers[qi] = idx;
        const group = examArea.querySelectorAll(`.choice-btn[data-q="${qi}"]`);
        group.forEach((b) => b.style.outline = "");
        btn.style.outline = "3px solid var(--color-primary)";
      });
    });

    document.getElementById("submitBtn").addEventListener("click", () => {
      const unanswered = questions.length - Object.keys(answers).length;
      if (unanswered > 0 && !confirm(`未解答の問題が${unanswered}問あります。このまま採点しますか？`)) {
        return;
      }
      finishExam(false);
    });
  }

  function startTimer() {
    updateTimerDisplay();
    timerHandle = setInterval(() => {
      remainingSec--;
      updateTimerDisplay();
      if (remainingSec <= 0) {
        clearInterval(timerHandle);
        finishExam(true);
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    timerDisplay.textContent = "残り " + HuntingApp.formatClock(remainingSec);
    timerDisplay.classList.toggle("warn", remainingSec <= 300);
  }

  function finishExam(timeUp) {
    if (finished) return;
    finished = true;
    clearInterval(timerHandle);
    examArea.style.display = "none";
    resultArea.style.display = "block";

    const catStats = {};
    Object.keys(CATEGORY_LABEL).forEach((c) => (catStats[c] = { correct: 0, total: 0 }));
    let correct = 0;
    const wrongList = [];
    questions.forEach((q, qi) => {
      catStats[q.category].total++;
      if (answers[qi] === q.answer) {
        correct++;
        catStats[q.category].correct++;
      } else {
        wrongList.push(q);
      }
    });
    const total = questions.length;
    const rate = Math.round((correct / total) * 100);
    // 合否は問題数で判定する（30問中21問＝70%）。四捨五入した正答率で判定すると
    // 20問正解（66.67%→67%）などが境界でぶれるため。
    const passMark = Math.ceil((total * HuntingApp.PASS_RATE) / 100);
    const pass = correct >= passMark;

    const history = HuntingApp.lsGet(HISTORY_KEY, []);
    history.unshift({ date: HuntingApp.todayStr(), license: currentLicense, correct, total, rate, pass, timeUp });
    HuntingApp.lsSet(HISTORY_KEY, history.slice(0, 50));

    resultArea.innerHTML = `
      <div class="card">
        <h2 class="${pass ? "badge-pass" : "badge-fail"}">${pass ? "🎉 合格" : "不合格"}</h2>
        <p class="category-chip">${LICENSE_LABEL[currentLicense]}</p>
        <p style="font-size:0.9rem;">合格ラインは ${total}問中 ${passMark}問（${HuntingApp.PASS_RATE}%）。今回は <b>${correct}問</b> 正解${pass ? "で、合格ラインに達しています。" : "で、あと " + (passMark - correct) + "問 足りません。"}</p>
        ${timeUp ? '<p style="color:var(--color-wrong);">制限時間になったため自動的に採点されました。</p>' : ""}
        <div class="stat-grid">
          <div class="stat-box"><div class="num ${pass ? "badge-pass" : "badge-fail"}">${rate}%</div><div class="lbl">正答率（合格ライン${HuntingApp.PASS_RATE}%）</div></div>
          <div class="stat-box"><div class="num">${correct}/${total}</div><div class="lbl">正解数</div></div>
        </div>
        <h3>分野別正答数</h3>
        <div class="parts-list">
          ${Object.keys(CATEGORY_LABEL)
            .filter((c) => catStats[c].total > 0)
            .map((c) => `<div class="part-item">${CATEGORY_LABEL[c]}：${catStats[c].correct}/${catStats[c].total}</div>`)
            .join("")}
        </div>
        ${
          wrongList.length
            ? `<h3>間違えた問題</h3><div class="parts-list">${wrongList
                .map((q) => `<div class="part-item"><b>[${CATEGORY_LABEL[q.category]}]</b> ${q.question}<br><span style="color:var(--color-correct)">正解: ${q.choices[q.answer]}</span><br><span style="font-size:0.85rem;">${q.explanation}</span></div>`)
                .join("")}</div>`
            : "<p>全問正解です！</p>"
        }
        <div class="controls-row">
          <button class="btn block" id="retryBtn">もう一度挑戦する</button>
        </div>
      </div>
    `;
    document.getElementById("retryBtn").addEventListener("click", () => {
      resultArea.style.display = "none";
      introPanel.style.display = "block";
      renderHistory();
    });
    renderHistory();
    window.scrollTo(0, 0);
  }

  function renderHistory() {
    const history = HuntingApp.lsGet(HISTORY_KEY, []).slice(0, 20);
    if (history.length === 0) {
      historyTableWrap.innerHTML = `<div class="empty-state">まだ模擬試験の記録がありません</div>`;
      return;
    }
    historyTableWrap.innerHTML = `
      <table class="history-table">
        <thead><tr><th>日時</th><th>種別</th><th>正解</th><th>正答率</th><th>判定</th></tr></thead>
        <tbody>
          ${history
            .map(
              // 旧レコードは license が "gun"（第一種銃猟）で保存されている。
              (h) => `<tr><td>${h.date}</td><td>${LICENSE_LABEL[HuntingApp.normalizeLicense(h.license)]}</td><td>${h.correct}/${h.total}</td><td>${h.rate}%</td><td class="${h.pass ? "badge-pass" : "badge-fail"}">${h.pass ? "合格" : "不合格"}</td></tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  startBtn.addEventListener("click", startExam);
  renderHistory();
})();
