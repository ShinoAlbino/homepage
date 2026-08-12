/* ==========================================================================
   知識試験 過去問演習ロジック
   三肢択一 / 間違えた問題のみ復習モード / 成績履歴の保存
   出題は「選択した免許を license に含む問題」から行い、
   さらに分野（category）・論点（point）で絞り込める。
   ========================================================================== */
(function () {
  const WRONG_KEY = "exam.wrongIds";
  const HISTORY_KEY = "exam.history";
  const LICENSE_KEY = "exam.license";
  const POINT_STATS_KEY = "exam.pointStats";
  const CATEGORY_LABEL = HuntingApp.CATEGORY_LABEL;

  const setupPanel = document.getElementById("setupPanel");
  const quizArea = document.getElementById("quizArea");
  const resultArea = document.getElementById("resultArea");
  const licenseSelect = document.getElementById("licenseSelect");
  const modeSelect = document.getElementById("modeSelect");
  const catSelect = document.getElementById("catSelect");
  const pointSelect = document.getElementById("pointSelect");
  const numSelect = document.getElementById("numSelect");
  const startBtn = document.getElementById("startBtn");
  const wrongCountInfo = document.getElementById("wrongCountInfo");
  const historyTableWrap = document.getElementById("historyTableWrap");
  const pointStatsWrap = document.getElementById("pointStatsWrap");

  // 旧版は "gun"/"trap" の2値で保存していたので、読み込み時に4値へ寄せる。
  licenseSelect.value = HuntingApp.normalizeLicense(HuntingApp.lsGet(LICENSE_KEY, "gun1"));

  // 論点は免許と分野によって存在するものが変わるため、実データから組み立てる。
  function updatePointOptions() {
    const license = licenseSelect.value;
    const cat = catSelect.value;
    const scoped = QUESTIONS.filter(
      (q) => HuntingApp.matchesLicense(q, license) && (cat === "all" || q.category === cat)
    );

    // 分野ごとにまとめ、各論点の問題数を添えて表示する。
    const byCat = {};
    scoped.forEach((q) => {
      (byCat[q.category] = byCat[q.category] || {})[q.point] =
        (byCat[q.category][q.point] || 0) + 1;
    });

    const groups = Object.keys(CATEGORY_LABEL)
      .filter((c) => byCat[c])
      .map((c) => {
        const opts = Object.keys(byCat[c])
          .sort()
          .map(
            (p) =>
              `<option value="${escapeAttr(p)}">${escapeHtml(p)}（${byCat[c][p]}問）</option>`
          )
          .join("");
        return `<optgroup label="${CATEGORY_LABEL[c]}">${opts}</optgroup>`;
      })
      .join("");

    pointSelect.innerHTML = `<option value="all">すべて</option>${groups}`;
  }

  function escapeHtml(s) {
    return String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/"/g, "&quot;");
  }

  licenseSelect.addEventListener("change", () => {
    HuntingApp.lsSet(LICENSE_KEY, licenseSelect.value);
    updatePointOptions();
    updateWrongInfo();
  });
  catSelect.addEventListener("change", updatePointOptions);
  updatePointOptions();

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
    // 誤答リストは免許をまたいで共通なので、今の免許で出題されうる分だけ数える。
    const wrongIds = getWrongSet();
    const license = licenseSelect.value;
    const n = QUESTIONS.filter((q) => wrongIds.includes(q.id) && HuntingApp.matchesLicense(q, license)).length;
    wrongCountInfo.textContent =
      n > 0
        ? `現在、間違えたまま未復習の問題が ${n} 問あります。`
        : "間違えたまま未復習の問題はありません。";
  }

  // 論点別の正答数を貯める。弱点の可視化にのみ使う。
  function recordPointStats(entries) {
    const stats = HuntingApp.lsGet(POINT_STATS_KEY, {});
    entries.forEach((e) => {
      const s = stats[e.point] || { correct: 0, total: 0, category: e.category };
      s.total++;
      if (e.correct) s.correct++;
      s.category = e.category;
      stats[e.point] = s;
    });
    HuntingApp.lsSet(POINT_STATS_KEY, stats);
  }

  function buildPool() {
    const license = licenseSelect.value;
    const mode = modeSelect.value;
    const cat = catSelect.value;
    const point = pointSelect.value;

    let pool = QUESTIONS.filter((q) => HuntingApp.matchesLicense(q, license));
    if (mode === "wrong") {
      const wrongIds = getWrongSet();
      pool = pool.filter((q) => wrongIds.includes(q.id));
    }
    if (cat !== "all") {
      pool = pool.filter((q) => q.category === cat);
    }
    if (point !== "all") {
      pool = pool.filter((q) => q.point === point);
    }
    return pool;
  }

  let quiz = { list: [], idx: 0, correct: 0, wrong: [], points: [] };

  function startQuiz() {
    const pool = buildPool();
    if (pool.length === 0) {
      alert("該当する問題がありません。設定を変更してください。");
      return;
    }
    const num = Number(numSelect.value);
    const list = (num >= pool.length ? HuntingApp.shuffle(pool) : HuntingApp.pickRandom(pool, num)).map(HuntingApp.shuffleChoices);
    quiz = { list, idx: 0, correct: 0, wrong: [], points: [] };
    setupPanel.style.display = "none";
    resultArea.style.display = "none";
    quizArea.style.display = "block";
    renderQuestion();
  }

  // 全問モードでは免許をまたいで出題するため、どの免許の問題かを添える。
  // 同じ問題文で免許ごとに正解が異なる問題（law085/law086 など）があり、
  // これが無いと矛盾した内容が続けて出たように見えてしまう。
  function licenseChip(q) {
    if (licenseSelect.value !== HuntingApp.ANY_LICENSE) return "";
    // 大半の法令・鳥獣・保護管理は4免許共通なので、列挙せず一言でまとめる。
    // データ側の license 配列は順序が揃っていないため、表示順は常に
    // LICENSE_LABEL の並び（網→わな→第一種→第二種）に固定する。
    const order = Object.keys(HuntingApp.LICENSE_LABEL);
    const names =
      q.license.length === order.length
        ? "全免許共通"
        : order.filter((l) => q.license.includes(l)).map((l) => HuntingApp.LICENSE_LABEL[l]).join("・");
    return `<span class="category-chip license-chip">${names}</span>`;
  }

  function renderQuestion() {
    const q = quiz.list[quiz.idx];
    quizArea.innerHTML = `
      <div class="progress-bar"><div style="width:${Math.round((quiz.idx / quiz.list.length) * 100)}%"></div></div>
      <div class="q-index">問題 ${quiz.idx + 1} / ${quiz.list.length}</div>
      <div class="card">
        <span class="category-chip">${CATEGORY_LABEL[q.category]}</span>${licenseChip(q)}
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
    quiz.points.push({ point: q.point, category: q.category, correct });
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
    document.getElementById("feedback").innerHTML = `
      <div class="explanation-box">${q.explanation}
        <div style="margin-top:6px;font-size:0.8rem;color:var(--color-text-muted);">論点: ${escapeHtml(q.point)}${q.source ? " ／ " + escapeHtml(q.source) : ""}</div>
      </div>`;
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

    recordPointStats(quiz.points);

    const history = HuntingApp.lsGet(HISTORY_KEY, []);
    history.unshift({
      date: HuntingApp.todayStr(),
      type: modeSelect.value === "wrong" ? "復習" : "通常演習",
      license: licenseSelect.value,
      category: CATEGORY_LABEL[catSelect.value] || "すべて",
      total,
      correct: quiz.correct,
      rate,
    });
    HuntingApp.lsSet(HISTORY_KEY, history.slice(0, 50));

    const wrongHtml = quiz.wrong.length
      ? `<h3>間違えた問題</h3><div class="parts-list">${quiz.wrong
          .map((q) => `<div class="part-item"><b>[${CATEGORY_LABEL[q.category]}]</b>${licenseChip(q)} ${q.question}<br><span style="color:var(--color-correct)">正解: ${q.choices[q.answer]}</span></div>`)
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
      renderPointStats();
      updateWrongInfo();
    });
    renderHistory();
    renderPointStats();
  }

  function renderHistory() {
    const history = HuntingApp.lsGet(HISTORY_KEY, []).slice(0, 20);
    if (history.length === 0) {
      historyTableWrap.innerHTML = `<div class="empty-state">まだ演習記録がありません</div>`;
      return;
    }
    historyTableWrap.innerHTML = `
      <table class="history-table">
        <thead><tr><th>日時</th><th>免許</th><th>種別</th><th>分野</th><th>正解</th><th>正答率</th></tr></thead>
        <tbody>
          ${history
            .map((h) => {
              // 旧レコードには license が無い。当時の既定値は第一種銃猟。
              const lic = HuntingApp.licenseLabel(HuntingApp.normalizeLicense(h.license));
              return `<tr><td>${h.date}</td><td>${lic}</td><td>${h.type}</td><td>${h.category}</td><td>${h.correct}/${h.total}</td><td>${h.rate}%</td></tr>`;
            })
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderPointStats() {
    const stats = HuntingApp.lsGet(POINT_STATS_KEY, {});
    const rows = Object.keys(stats)
      .map((p) => {
        const s = stats[p];
        return { point: p, category: s.category, correct: s.correct, total: s.total, rate: Math.round((s.correct / s.total) * 100) };
      })
      .sort((a, b) => a.rate - b.rate || b.total - a.total);

    if (rows.length === 0) {
      pointStatsWrap.innerHTML = `<div class="empty-state">まだ論点別の記録がありません</div>`;
      return;
    }
    pointStatsWrap.innerHTML = `
      <table class="history-table">
        <thead><tr><th>論点</th><th>分野</th><th>正解</th><th>正答率</th></tr></thead>
        <tbody>
          ${rows
            .map(
              (r) =>
                `<tr><td>${escapeHtml(r.point)}</td><td>${CATEGORY_LABEL[r.category] || "―"}</td><td>${r.correct}/${r.total}</td><td class="${r.rate < 70 ? "badge-fail" : "badge-pass"}">${r.rate}%</td></tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  startBtn.addEventListener("click", startQuiz);
  updateWrongInfo();
  renderHistory();
  renderPointStats();
})();
