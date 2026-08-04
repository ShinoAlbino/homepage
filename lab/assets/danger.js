/* ============================================================
   箱庭研究所 — Arca Hortus Black Facility
   侵入シーケンス / 汚染背景（棺型格子）/ TRIAD合議 /
   人格二重鎖・音声波形 / 炉テレメトリ / 侵入ログ / 緊急端末
   ※ 合議の中身は assets/triad-engine.js（差し替え可能）
   ============================================================ */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- 共通ユーティリティ --- */
  const R  = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const RI = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
  const RF = (min, max, d) => (min + Math.random() * (max - min)).toFixed(d);
  const $  = (id) => document.getElementById(id);

  /* ==========================================================
     侵入シーケンス
     ========================================================== */
  const breachOverlay = $('breach-overlay');
  const breachPre = $('breach-lines');
  const BREACH_KEY = 'ah-danger-breached';

  const BREACH_SCRIPT = [
    '> ARCA HORTUS // SEALED DIVISION — TERMINAL B██',
    '> CLEARANCE REQUIRED ................. LV.7',
    '> SUBMITTED CLEARANCE ................ LV.1',
    '> ACCESS ............................. <span class="bad">DENIED</span>',
    '',
    '> ...再試行を検知。',
    '> 外部署名による権限昇格 .............. <span class="hit">SUCCESS</span>',
    '> 隔壁 B07-B12 .......................  <span class="hit">応答なし</span>',
    '> 汚染フィルタ ........................ <span class="bad">BYPASSED</span>',
    '> TRIAD 演算系 ........................ <span class="bad">COMPROMISED</span>',
    '',
    '> ようこそ、非認可観測者。',
    '> ここから先の記録は、すべてあなたの名前で残ります。'
  ];

  let breachDone = false;
  const finishBreach = () => {
    if (breachDone) return;
    breachDone = true;
    try { sessionStorage.setItem(BREACH_KEY, '1'); } catch (e) { /* private mode */ }
    breachOverlay.classList.add('done');
    document.body.classList.remove('pre-breach');
    document.body.classList.add('breached');
    document.querySelectorAll('.reveal').forEach((el) => {
      el.addEventListener('animationend', () => el.classList.remove('reveal'), { once: true });
    });
  };

  const skipBreach = reduceMotion || (() => {
    try { return sessionStorage.getItem(BREACH_KEY) === '1'; } catch (e) { return false; }
  })();

  if (skipBreach) {
    finishBreach();
  } else {
    let line = 0;
    let ch = 0;
    let buffer = '';
    const cursor = '<span class="cursor"></span>';
    // タグを壊さずに1文字ずつ出すため、行をトークン列（文字 or タグ）に分解する
    const tokenize = (s) => s.match(/<[^>]+>|[\s\S]/g) || [];

    const type = () => {
      if (breachDone) return;
      if (line >= BREACH_SCRIPT.length) {
        setTimeout(finishBreach, 750);
        return;
      }
      const tokens = tokenize(BREACH_SCRIPT[line]);
      if (ch < tokens.length) {
        ch += 1 + Math.floor(Math.random() * 2);
        breachPre.innerHTML = buffer + tokens.slice(0, ch).join('') + cursor;
        setTimeout(type, 10 + Math.random() * 22);
      } else {
        buffer += tokens.join('') + '\n';
        breachPre.innerHTML = buffer + cursor;
        line += 1;
        ch = 0;
        setTimeout(type, BREACH_SCRIPT[line - 1] === '' ? 420 : 110 + Math.random() * 200);
      }
    };
    setTimeout(type, 350);
    breachOverlay.addEventListener('click', finishBreach);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') finishBreach();
    }, { once: true });
  }

  /* ==========================================================
     背景キャンバス：棺型格子・データ雨・汚染域
     ========================================================== */
  const canvas = $('danger-canvas');
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

  let W = 0;
  let H = 0;
  const gridLayer = document.createElement('canvas');
  const gridCtx = gridLayer.getContext('2d');

  /* 棺型ポリゴン（肩が張り、足側が細くなる六角形） */
  const COFFIN_W = 44;
  const COFFIN_H = 74;
  const COFFIN_PTS = [
    [-0.28, -0.50], [0.28, -0.50], [0.50, -0.20],
    [0.22, 0.50], [-0.22, 0.50], [-0.50, -0.20]
  ];

  /* flip: 1 = 頭が上 / -1 = 上下反転。市松に敷き詰める */
  const coffinPath = (c, cx, cy, scale, skipEdge, flip) => {
    const f = flip === -1 ? -1 : 1;
    c.beginPath();
    for (let i = 0; i < 6; i++) {
      const px = cx + COFFIN_PTS[i][0] * COFFIN_W * scale;
      const py = cy + COFFIN_PTS[i][1] * COFFIN_H * scale * f;
      if (i === 0 || i === skipEdge) c.moveTo(px, py); else c.lineTo(px, py);
    }
    if (skipEdge === undefined || skipEdge < 0) c.closePath();
  };

  const coffinCenters = [];

  /* 崩れかけた棺型格子（静的レイヤ） */
  const buildGrid = () => {
    gridLayer.width = canvas.width;
    gridLayer.height = canvas.height;
    gridCtx.setTransform(DPR, 0, 0, DPR, 0, 0);
    gridCtx.clearRect(0, 0, W, H);
    gridCtx.lineWidth = 1;
    coffinCenters.length = 0;

    const dx = COFFIN_W * 1.24;
    const dy = COFFIN_H * 1.02;
    for (let col = -1, cx = -COFFIN_W; cx < W + COFFIN_W * 2; col++, cx += dx) {
      const offsetY = (col & 1) ? dy / 2 : 0;
      let row = 0;
      for (let cy = -COFFIN_H + offsetY; cy < H + COFFIN_H * 2; cy += dy, row++) {
        // 隣り合う棺は互い違いに上下反転させる
        const flip = ((col + row) & 1) ? -1 : 1;
        coffinCenters.push({ x: cx, y: cy, flip });
        // 1割ほどの区画は「空」。埋まっていない棺のつもり
        if (Math.random() < 0.1) continue;
        const broken = Math.random() < 0.18;
        gridCtx.strokeStyle = broken
          ? 'rgba(255, 45, 63, 0.17)'
          : 'rgba(255, 45, 63, 0.085)';
        const jx = broken ? (Math.random() - 0.5) * 6 : 0;
        const jy = broken ? (Math.random() - 0.5) * 6 : 0;
        coffinPath(gridCtx, cx + jx, cy + jy, 1, broken ? RI(0, 5) : -1, flip);
        gridCtx.stroke();
        // 一部には蓋の合わせ目を描く
        if (!broken && Math.random() < 0.34) {
          gridCtx.strokeStyle = 'rgba(255, 45, 63, 0.035)';
          coffinPath(gridCtx, cx, cy, 0.66, -1, flip);
          gridCtx.stroke();
        }
      }
    }
  };

  /* データ雨 */
  const RAIN_CHARS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ0123456789ABCDEF█▓▒░/\\|=+*<>';
  let rain = [];
  const buildRain = () => {
    const cols = Math.min(64, Math.floor(W / 26));
    rain = Array.from({ length: cols }, (_, i) => ({
      x: (i + 0.5) * (W / cols),
      y: Math.random() * H,
      speed: 1.1 + Math.random() * 3.4,
      len: RI(6, 22),
      size: RI(10, 14),
      hot: Math.random() < 0.14
    }));
  };

  /* 汚染域（じわじわ広がって消える赤い滲み） */
  const blobs = [];
  const spawnBlob = (x, y, strong) => {
    blobs.push({
      x: x !== undefined ? x : Math.random() * W,
      y: y !== undefined ? y : Math.random() * H,
      r: 6,
      max: strong ? 320 : 120 + Math.random() * 180,
      alpha: strong ? 0.28 : 0.16
    });
  };

  /* 明滅する感染区画 */
  const infected = [];
  const infectCoffin = () => {
    if (!coffinCenters.length) return;
    const c = coffinCenters[Math.floor(Math.random() * coffinCenters.length)];
    infected.push({ x: c.x, y: c.y, flip: c.flip, life: 0, max: 90 + Math.random() * 90 });
  };

  /* ブロックノイズ */
  const blocks = [];
  const spawnBlocks = () => {
    const n = RI(2, 6);
    for (let i = 0; i < n; i++) {
      blocks.push({
        x: Math.random() * W,
        y: Math.random() * H,
        w: RI(40, 240),
        h: RI(2, 14),
        life: RI(3, 12),
        cy: Math.random() < 0.3
      });
    }
  };

  const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
  window.addEventListener('pointermove', (e) => {
    mouse.tx = e.clientX / window.innerWidth;
    mouse.ty = e.clientY / window.innerHeight;
  }, { passive: true });
  window.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button, input, [role="button"]')) return;
    spawnBlob(e.clientX, e.clientY, true);
  });

  const resize = () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildGrid();
    buildRain();
  };
  window.addEventListener('resize', resize);
  resize();

  const drawInfect = (h) => {
    const t = h.life / h.max;
    const a = Math.sin(t * Math.PI) * 0.42;
    ctx.strokeStyle = `rgba(255, 45, 63, ${a})`;
    ctx.fillStyle = `rgba(255, 45, 63, ${a * 0.14})`;
    ctx.lineWidth = 1.2;
    coffinPath(ctx, h.x, h.y, 1, -1, h.flip);
    ctx.fill();
    ctx.stroke();
  };

  let lastInfect = 0;
  let lastBlob = 0;
  let lastBlock = 0;
  let running = true;

  const frame = (now) => {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);

    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    const par = { x: (mouse.x - 0.5), y: (mouse.y - 0.5) };

    // 不安定に明滅する格子
    const flick = Math.random() < 0.02 ? 0.25 : 1;
    ctx.globalAlpha = (0.7 + 0.3 * Math.sin(now / 2600)) * flick;
    ctx.drawImage(gridLayer, par.x * -16 - 8, par.y * -16 - 8, W + 16, H + 16);
    ctx.globalAlpha = 1;

    // 汚染域
    if (now - lastBlob > 2600 + Math.random() * 2200) { spawnBlob(); lastBlob = now; }
    for (let i = blobs.length - 1; i >= 0; i--) {
      const b = blobs[i];
      b.r += 1.4;
      const t = b.r / b.max;
      if (t >= 1) { blobs.splice(i, 1); continue; }
      const a = b.alpha * (1 - t);
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, 'rgba(255, 45, 63, 0)');
      g.addColorStop(0.72, `rgba(255, 45, 63, ${a * 0.5})`);
      g.addColorStop(1, 'rgba(255, 45, 63, 0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(255, 185, 190, ${a * 0.7})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // 感染区画
    if (now - lastInfect > 900) { infectCoffin(); lastInfect = now; }
    for (let i = infected.length - 1; i >= 0; i--) {
      const h = infected[i];
      h.life++;
      if (h.life >= h.max) { infected.splice(i, 1); continue; }
      drawInfect(h);
    }

    // データ雨
    ctx.textBaseline = 'top';
    for (const c of rain) {
      c.y += c.speed;
      if (c.y > H + c.len * c.size) { c.y = -c.len * c.size; c.x = Math.random() * W; c.hot = Math.random() < 0.14; }
      const px = c.x + par.x * -22;
      ctx.font = `${c.size}px 'JetBrains Mono', monospace`;
      for (let k = 0; k < c.len; k++) {
        const py = c.y - k * c.size;
        if (py < -c.size || py > H) continue;
        const fade = 1 - k / c.len;
        if (k === 0) {
          ctx.fillStyle = 'rgba(255, 220, 224, 0.85)';
        } else if (c.hot) {
          ctx.fillStyle = `rgba(255, 176, 32, ${fade * 0.35})`;
        } else {
          ctx.fillStyle = `rgba(255, 45, 63, ${fade * 0.34})`;
        }
        ctx.fillText(RAIN_CHARS[Math.floor(Math.random() * RAIN_CHARS.length)], px, py);
      }
    }

    // ブロックノイズ
    if (now - lastBlock > 1800 + Math.random() * 3600) { spawnBlocks(); lastBlock = now; }
    for (let i = blocks.length - 1; i >= 0; i--) {
      const b = blocks[i];
      b.life--;
      if (b.life <= 0) { blocks.splice(i, 1); continue; }
      ctx.fillStyle = b.cy ? 'rgba(53, 224, 255, 0.10)' : 'rgba(255, 45, 63, 0.13)';
      ctx.fillRect(b.x, b.y, b.w, b.h);
    }

    requestAnimationFrame(frame);
  };

  if (reduceMotion) {
    ctx.globalAlpha = 0.8;
    ctx.drawImage(gridLayer, 0, 0, W, H);
    ctx.globalAlpha = 1;
  } else {
    requestAnimationFrame(frame);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        running = false;
      } else if (!running) {
        running = true;
        requestAnimationFrame(frame);
      }
    });
  }

  /* ==========================================================
     画面破断（グリッチ）
     ========================================================== */
  const glitchLayer = $('glitch-layer');
  const tear = () => {
    glitchLayer.classList.add('tear');
    setTimeout(() => glitchLayer.classList.remove('tear'), 300);
  };
  if (!reduceMotion) {
    const loopTear = () => {
      tear();
      if (Math.random() < 0.4) setTimeout(tear, 420);
      setTimeout(loopTear, 5000 + Math.random() * 9000);
    };
    setTimeout(loopTear, 4200);
  }

  /* ==========================================================
     侵入ログ
     ========================================================== */
  const logFeed = $('log-feed');

  const timeStamp = () => {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  const pushLog = (type, text) => {
    if (!logFeed) return;
    const div = document.createElement('div');
    div.className = 'log-line' + (type ? ' ' + type : '');
    div.innerHTML = `<span class="t">[${timeStamp()}]</span>${text}`;
    logFeed.prepend(div);
    while (logFeed.children.length > 12) logFeed.lastChild.remove();
  };

  const V = {
    corridor: ['B7回廊', 'B9連絡橋', '地下第3回廊', '螺旋降下路', '封印庫前通路', '排熱路脇通路', '旧職員区画'],
    node: ['TRIAD-01', 'TRIAD-02', 'TRIAD-03', 'SEAL-07', 'REC-∞', 'INJ-B', 'EX-04', 'ACC-BANK'],
    origin: ['未登録の外部次元', '施設内部', '記録に存在しない座標', '当施設の20年前の設計図', '観測者本人の端末', '[ 逆 探 知 不 能 ]'],
    thing: ['筆跡', '足音', '呼吸音', '心拍', '影', '匂い', '体温'],
    staff: ['第4観測班', '夜勤の管理人', '衛生班', '無名の助手', '封印管理官', '庭師']
  };

  const T = (w, type, fn) => ({ w, type, fn });
  const LOG_TEMPLATES = [
    /* == 侵入・攻撃 == */
    T(3, 'alert', () => `不正パケット ${RI(400, 9800)} 件を検出。遮断率 ${RI(2, 34)}%。`),
    T(3, 'alert', () => `${R(V.node)} に外部起源コードの常駐を確認。除去試行 ${RI(2, 40)} 回、いずれも失敗。`),
    T(2, 'alert', () => `侵入元を追跡 → 発信源: ${R(V.origin)}。`),
    T(2, 'alert', () => `認証ログが書き換えられています。改竄者の署名: <span class="redacted">████</span>`),
    T(2, 'alert', () => `隔壁 B${RI(7, 12)} 応答なし。物理封鎖に移行してください。`),
    T(2, 'hack',  () => `[ 外部 ] &gt; こんばんは。${R(['お茶はいかがですか', 'ドアは開けておきました', '数えていますよ', 'もう少しです'])}`),
    T(1, 'hack',  () => `[ 外部 ] &gt; ${RI(2, 9)}人目。想定より多い。`),
    T(1, 'hack',  () => `[ 外部 ] &gt; あなたの${R(V.thing)}を借りました。返します、いずれ。`),
    T(2, 'alert', () => `汚染フィルタが飽和。未知パターン ${RI(3, 88)} 件が通過しました。`),
    T(1, 'alert', () => `監視カメラ ${RI(2, 14)} 系統が同じ映像を出力しています。撮影日時は ${RI(11, 30)} 年前。`),

    /* == 炉 == */
    T(3, 'warn', () => `模擬特異点炉 出力 ${RF(1.2, 9.8, 2)} PW。理論上限を ${RI(2, 60)}% 超過。`),
    T(2, 'warn', () => `降着円盤の位相が ${RF(0.1, 2.4, 2)}° ずれました。自動補正、失敗。`),
    T(2, 'warn', () => `EX-0${RI(1, 4)} の抽出効率が ${RF(100.1, 148.9, 1)}%。100%を超える値の意味を、誰も説明できません。`),
    T(2, 'warn', () => `閉じ込め磁場 ${RF(11.2, 19.8, 2)} T。許容内、ただし推奨されません。`),
    T(1, 'alert', () => `事象地平の半径が ${RF(1.1, 4.6, 2)} µm 拡大。減速の兆候なし。`),
    T(1, 'warn', () => `主排熱路の到達点が本日も特定できません。熱は、どこかへ出て行っています。`),
    T(1, 'alert', () => `炉心から ${RI(2, 5)} 秒間、規則的な信号。素数列でした。`),
    T(1, 'warn', () => `INJ-B の位相ズレを補正 → 補正値が翌フレームで元に戻りました。`),

    /* == TRIAD == */
    T(2, 'warn', () => `TRIAD-0${RI(1, 3)} の応答遅延 ${RI(120, 4800)} ms。演算人格の再構築を推奨。`),
    T(2, 'alert', () => `TRIAD 合議に第4の票が投じられました。投票者不明。`),
    T(1, 'warn', () => `TRIAD-0${RI(1, 3)} が同じ議題を ${RI(3, 19)} 回、繰り返し可決しています。`),
    T(1, 'alert', () => `TRIAD の全ログから、設立者の名前だけが消えています。`),
    T(1, 'ghost', () => `FLOS「……まだ、ここにいてもいいですか」`),
    T(1, 'warn', () => `人格二重鎖の照合に失敗。三人格を撚り戻しても、一人分に足りません。`),

    /* == 施設 == */
    T(2, 'warn', () => `${R(V.corridor)} の照度 0。人感センサは ${RI(1, 6)} 名を検知。`),
    T(2, '', () => `汚染指数 Ⅲ。防護等級 B以上の装備を着用してください。`),
    T(2, '', () => `${R(V.staff)} との通信が途絶。最後の音声: 「${R(['止めないで', 'まだ回ってる', '扉が増えた', 'もう戻れる？'])}」`),
    T(1, 'warn', () => `${R(V.corridor)} の床に、乾いていない${R(['足跡', '手形', '水'])}。当区画は ${RI(4, 22)} 年間無人です。`),
    T(1, '', () => `非常灯を赤に切替。理由: 白色光では「見えすぎる」ため。`),
    T(1, '', () => `緊急退避経路を再計算 → 全経路が同じ部屋に接続されています。`),
    T(1, 'warn', () => `館内図から本区画が削除されました。実行者: 本システム。`),
    T(1, 'ghost', () => `温室の枯れた株が一晩で開花。花弁は内側を向いています。`),
    T(1, 'ghost', () => `……こちらを見ているのは、まだ、あなたの方ですか？`),
    T(1, '', () => `本日の来訪者: 1名（非認可）。ようこそ、箱庭研究所へ。`),
    T(1, 'alert', () => `緊急封印機構 SEAL-07 起動要求 → 拒否。理由: 「不要」（発行元: 本システム）。`)
  ];

  const weightSum = LOG_TEMPLATES.reduce((s, t) => s + t.w, 0);
  const recent = [];
  const pickTemplate = () => {
    for (let tries = 0; tries < 8; tries++) {
      let roll = Math.random() * weightSum;
      for (let i = 0; i < LOG_TEMPLATES.length; i++) {
        roll -= LOG_TEMPLATES[i].w;
        if (roll <= 0) {
          if (recent.includes(i)) break;
          recent.push(i);
          if (recent.length > 9) recent.shift();
          return LOG_TEMPLATES[i];
        }
      }
    }
    return R(LOG_TEMPLATES);
  };

  pushLog('alert', '侵入記録 開始。当該セッションは監査対象に指定されました。');
  if (!reduceMotion) {
    const nextLog = () => {
      const t = pickTemplate();
      pushLog(t.type, t.fn());
      setTimeout(nextLog, 3200 + Math.random() * 3000);
    };
    setTimeout(nextLog, 2200);
  }

  /* ==========================================================
     施設ステータス・臨界カウントダウン
     ========================================================== */
  const stCorrupt = $('st-corrupt');
  const stBulk = $('st-bulk');
  const stContam = $('st-contam');
  const stGhost = $('st-ghost');
  const stTimer = $('st-timer');
  const threatWord = $('threat-word');

  const facility = { corruption: 41.6, ghosts: 3 };
  let critical = 240; // 秒

  const fmtTimer = (s) => {
    const m = Math.floor(s / 60);
    const ss = String(Math.floor(s % 60)).padStart(2, '0');
    return `T-${String(m).padStart(2, '0')}:${ss}`;
  };

  if (stCorrupt && !reduceMotion) {
    setInterval(() => {
      facility.corruption = Math.min(99.4, Math.max(18, facility.corruption + (Math.random() - 0.42) * 3.2));
      stCorrupt.textContent = facility.corruption.toFixed(1) + '%';
      stCorrupt.className = facility.corruption > 70 ? 'alert' : facility.corruption > 40 ? 'warn' : 'ok';

      const bulk = RI(5, 9);
      stBulk.textContent = `${bulk}/12`;
      stBulk.className = bulk < 7 ? 'alert' : 'warn';

      const lv = ['Ⅱ', 'Ⅲ', 'Ⅲ', 'Ⅳ', 'Ⅴ'][RI(0, 4)];
      stContam.textContent = lv;
      stContam.className = (lv === 'Ⅳ' || lv === 'Ⅴ') ? 'alert' : 'warn';

      if (Math.random() < 0.18) facility.ghosts = RI(1, 7);
      stGhost.textContent = Math.random() < 0.08 ? `${facility.ghosts} (+?)` : String(facility.ghosts);
      stGhost.className = facility.ghosts > 3 ? 'alert' : 'warn';

      if (threatWord && Math.random() < 0.12) {
        threatWord.textContent = R(['CRITICAL', 'CRITICAL', 'SEVERE', '███████', 'UNKNOWN']);
      }
    }, 1700);

    setInterval(() => {
      critical -= 1;
      if (critical <= 0) {
        critical = RI(180, 420);
        pushLog('hack', '臨界を回避しました。回避者: <span class="redacted">████</span>（当施設の職員名簿に該当なし）。');
      }
      stTimer.textContent = fmtTimer(critical);
      stTimer.className = critical < 60 ? 'alert' : 'warn';
    }, 1000);
  }

  /* ==========================================================
     TRIAD CORE — 三賢者演算系
     票の生成は triad-engine.js（mock / 将来はLLM）に委譲する
     ========================================================== */
  const ENGINE = window.TRIAD;

  const NODES = (ENGINE ? ENGINE.PERSONAS : []).map((p) => ({
    persona: p,
    node: p.node,
    id: p.id,
    el: $('magi-' + p.node),
    verdictEl: $('v-' + p.node),
    reasonEl: $('r-' + p.node),
    stateEl: $('s-' + p.node),
    corr: $('m' + p.node + '-corr'), corrT: $('t' + p.node + '-corr'),
    load: $('m' + p.node + '-load'), loadT: $('t' + p.node + '-load'),
    sync: $('m' + p.node + '-sync'), syncT: $('t' + p.node + '-sync'),
    corruption: 8 + Math.random() * 22,
    stage: null,
    timer: null
  })).filter((n) => n.el);

  /* 汚染インシデントの進行段階：浸食 → 汚染 → 隔離 → 除去 → 復帰 */
  const STAGES = {
    erosion: {
      cls: 'st-erosion', stamp: '警告：浸食', pill: 'WARNING', pillCls: 'busy',
      err: 0.35, corr: 56, ms: [7000, 11000],
      log: (nd) => ['warn', `TRIAD-0${nd.node}（${nd.id}）に浸食を検知。境界層のコード書き換えを確認。`],
      reason: '浸食進行中。判断の一部が外部由来。'
    },
    contam: {
      cls: 'st-contam', stamp: '警告：汚染', pill: 'CONTAM', pillCls: 'bad',
      err: 0.85, corr: 88, ms: [7000, 11000],
      log: (nd) => ['alert', `TRIAD-0${nd.node} 汚染へ移行。演算人格の判断は信頼できません。隔離を推奨。`],
      reason: '汚染。判断は外部起源コードにより上書き。'
    },
    isolate: {
      cls: 'st-isolate', stamp: '隔 離', pill: 'ISOLATED', pillCls: 'bad',
      err: 1, corr: 64, ms: [5000, 8000],
      log: (nd) => ['warn', `TRIAD-0${nd.node} を演算系から隔離。以後の票は合議に算入されません。`],
      reason: '隔離中。演算系から切り離し済。'
    },
    purge: {
      cls: 'st-purge', stamp: '除 去', pill: 'PURGING', pillCls: '',
      err: 0, corr: 26, ms: [4500, 7500],
      log: (nd) => ['hack', `TRIAD-0${nd.node} の除去処理を開始。書き換えられた領域を原本から復元中。`],
      reason: ''
    }
  };
  const STAGE_ORDER = ['erosion', 'contam', 'isolate', 'purge'];

  const setMeter = (bar, txt, val) => {
    if (!bar) return;
    const v = Math.max(0, Math.min(100, val));
    bar.style.width = v.toFixed(1) + '%';
    txt.textContent = v.toFixed(0) + '%';
  };

  const paintNode = (nd) => {
    const hit = nd.stage && nd.stage !== 'purge';
    setMeter(nd.corr, nd.corrT, nd.corruption);
    setMeter(nd.load, nd.loadT, 30 + Math.random() * 60 + (hit ? 30 : 0));
    setMeter(nd.sync, nd.syncT, hit ? 10 + Math.random() * 25 : 72 + Math.random() * 27);
  };

  const setState = (nd, label, cls) => {
    if (!nd.stateEl) return;
    nd.stateEl.className = 'magi-state' + (cls ? ' ' + cls : '');
    nd.stateEl.innerHTML = '<i></i>' + label;
  };

  const stampEl = (nd) => nd.el.querySelector('.magi-stamp');

  /* 段階の切り替え。key が null なら正常状態へ戻す */
  const setStage = (nd, key) => {
    Object.values(STAGES).forEach((s) => nd.el.classList.remove(s.cls));
    nd.stage = key;
    if (!key) {
      setState(nd, 'ONLINE', '');
      return;
    }
    const s = STAGES[key];
    nd.el.classList.add(s.cls);
    const st = stampEl(nd);
    if (st) st.textContent = s.stamp;
    setState(nd, s.pill, s.pillCls);
  };

  NODES.forEach((nd) => { paintNode(nd); setState(nd, 'ONLINE', ''); });

  const tvTopic = $('tv-topic');
  const tvResult = $('tv-result');
  const tvSub = $('tv-sub');

  /* 議決の盛り上がり（0〜1）。二重螺旋と波形の駆動に使う */
  let activity = 0.1;
  let speaker = '—';

  let deliberating = false;
  const deliberate = () => {
    if (deliberating || !ENGINE || !tvTopic || !NODES.length) return;
    deliberating = true;

    const topic = ENGINE.pickTopic();
    tvTopic.textContent = topic.text;
    tvResult.textContent = '審議中';
    tvResult.className = 'tv-result v-hold';
    tvSub.textContent = 'CONSENSUS 0 / 3 ・ ELAPSED 0.00s';

    NODES.forEach((nd) => {
      nd.verdictEl.textContent = '演算中';
      nd.verdictEl.className = 'magi-verdict v-hold';
      nd.reasonEl.textContent = '判断を演算しています……';
      nd.reasonEl.classList.add('pending');
      setState(nd, 'THINKING', 'busy');
    });

    const t0 = performance.now();
    activity = Math.max(activity, 0.75);

    ENGINE.deliberate(topic, {
      corrupt: (persona) => {
        const nd = NODES.find((n) => n.node === persona.node);
        if (!nd || !nd.stage) return false;
        const s = STAGES[nd.stage];
        return Math.random() < s.err ? (s.reason || true) : false;
      },
      onVote: (persona, vote, count) => {
        const nd = NODES.find((n) => n.node === persona.node);
        if (!nd) return;
        nd.verdictEl.textContent = vote.verdict;
        nd.verdictEl.className = 'magi-verdict ' + vote.cls;
        nd.reasonEl.textContent = vote.reason || '—';
        nd.reasonEl.classList.remove('pending');
        if (nd.stage) setStage(nd, nd.stage); else setState(nd, 'ONLINE', '');
        paintNode(nd);
        speaker = persona.id;
        activity = 1;
        tvSub.textContent = `CONSENSUS ${count} / 3 ・ ELAPSED ${((performance.now() - t0) / 1000).toFixed(2)}s`;
      }
    }).then(({ result, note, votes, elapsedMs }) => {
      setTimeout(() => {
        tvResult.textContent = result.verdict;
        tvResult.className = 'tv-result ' + result.cls;
        const tally = ['可決', '否決', '保留', 'ERROR']
          .map((v) => [v, votes.filter((x) => x.verdict === v).length])
          .filter(([, n]) => n > 0)
          .map(([v, n]) => `${v}${n}`)
          .join(' / ');
        tvSub.textContent = `CONSENSUS 3 / 3（${tally}）・ ELAPSED ${(elapsedMs / 1000).toFixed(2)}s`;

        // 議決の結果を議事録として侵入ログにも残す
        const digest = topic.text.length > 16 ? topic.text.slice(0, 16) + '…' : topic.text;
        const cls = result.verdict === '演算不能' ? 'alert'
          : result.verdict === '再審議' ? 'warn' : '';
        pushLog(cls, `TRIAD 議決「${digest}」→ <b>${result.verdict}</b>。${note}`);
        deliberating = false;
      }, 420);
    });
  };

  /* 一度に一系統だけ。浸食 → 汚染 → 隔離 → 除去 → 復帰 を順に進める */
  let incidentActive = false;

  const clearNode = (nd, silent) => {
    clearTimeout(nd.timer);
    nd.timer = null;
    setStage(nd, null);
    nd.corruption = Math.max(6, nd.corruption - 40 - Math.random() * 20);
    paintNode(nd);
    incidentActive = false;
    if (!silent) {
      pushLog('hack', `TRIAD-0${nd.node}（${nd.id}）除去完了。演算人格は復帰。原因コードの出所は不明のまま。`);
    }
  };

  const runIncident = () => {
    if (incidentActive) return;
    const clean = NODES.filter((n) => !n.stage);
    if (!clean.length) return;
    const nd = R(clean);
    incidentActive = true;

    let i = 0;
    const step = () => {
      if (i >= STAGE_ORDER.length) { clearNode(nd); return; }
      const key = STAGE_ORDER[i];
      const s = STAGES[key];
      setStage(nd, key);
      nd.corruption = s.corr + (Math.random() - 0.5) * 10;
      paintNode(nd);
      const [lv, msg] = s.log(nd);
      pushLog(lv, msg);
      if (key === 'erosion') tear();
      i++;
      nd.timer = setTimeout(step, s.ms[0] + Math.random() * (s.ms[1] - s.ms[0]));
    };
    step();
  };

  const purgeAll = () => {
    const affected = NODES.filter((n) => n.stage);
    affected.forEach((nd) => {
      clearTimeout(nd.timer);
      setStage(nd, 'purge');
      paintNode(nd);
      nd.timer = setTimeout(() => clearNode(nd), 2600);
    });
    facility.corruption = Math.max(14, facility.corruption - 22);
    return affected.length;
  };

  if (!reduceMotion && NODES.length) {
    setTimeout(deliberate, 1800);
    setInterval(deliberate, 12000);
    // 侵食率は状態ごとの基準値へゆっくり寄る（振り切ったまま張り付かせない）
    setInterval(() => NODES.forEach((nd) => {
      const target = nd.stage ? STAGES[nd.stage].corr : 24;
      nd.corruption += (target - nd.corruption) * 0.12 + (Math.random() - 0.5) * 5;
      nd.corruption = Math.min(99, Math.max(4, nd.corruption));
      paintNode(nd);
    }), 2400);
    // インシデントは間隔をあけて発生させる（常時どこかが赤い状態にしない）
    setTimeout(runIncident, 26000);
    setInterval(() => { if (!incidentActive && Math.random() < 0.45) runIncident(); }, 18000);
  } else if (NODES.length) {
    deliberate();
  }

  /* ==========================================================
     人格二重鎖（DNA）と音声波形
     ========================================================== */
  const STRAND_COLORS = ['255, 45, 63', '255, 176, 32', '176, 107, 255']; // RADIX / FOLIUM / FLOS

  const setupCanvas = (el) => {
    if (!el) return null;
    const c = el.getContext('2d');
    const fit = () => {
      const rect = el.getBoundingClientRect();
      el.width = Math.max(1, rect.width * DPR);
      el.height = Math.max(1, rect.height * DPR);
      c.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    fit();
    window.addEventListener('resize', fit);
    return { el, c, get w() { return el.width / DPR; }, get h() { return el.height / DPR; } };
  };

  const helix = setupCanvas($('helix-canvas'));
  const wave = setupCanvas($('wave-canvas'));

  /* --- 二重螺旋 --- */
  const drawHelix = (now) => {
    if (!helix) return;
    const { c, w, h } = helix;
    c.clearRect(0, 0, w, h);

    const cy = h / 2;
    const amp = h * 0.30 * (0.72 + 0.42 * activity);
    const k = 0.030;
    const t = now / 1000 * (0.16 + 0.34 * activity);   // ゆっくり捻れる

    // 中心の軸線
    c.strokeStyle = 'rgba(255, 45, 63, 0.12)';
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(0, cy);
    c.lineTo(w, cy);
    c.stroke();

    // 塩基対（横木）— 奥行きで太さと濃さが変わる
    for (let x = 6; x < w; x += 13) {
      const phase = k * x + t;
      const y1 = cy + amp * Math.sin(phase);
      const y2 = cy + amp * Math.sin(phase + Math.PI);
      const depth = (Math.cos(phase) + 1) / 2;      // 0=奥 1=手前
      const missing = Math.sin(x * 12.9898) * 43758.5453;
      if ((missing - Math.floor(missing)) < 0.07) continue;  // 欠損した塩基対
      const rgb = STRAND_COLORS[Math.floor(x / 13) % 3];
      c.strokeStyle = `rgba(${rgb}, ${0.12 + depth * 0.5})`;
      c.lineWidth = 0.7 + depth * 1.7;
      c.beginPath();
      c.moveTo(x, y1);
      c.lineTo(x, y2);
      c.stroke();

      c.fillStyle = `rgba(${rgb}, ${0.25 + depth * 0.6})`;
      c.beginPath();
      c.arc(x, y1, 1 + depth * 1.6, 0, Math.PI * 2);
      c.fill();
      c.beginPath();
      c.arc(x, y2, 1 + depth * 1.6, 0, Math.PI * 2);
      c.fill();
    }

    // 2本の鎖
    for (let s = 0; s < 2; s++) {
      c.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const y = cy + amp * Math.sin(k * x + t + s * Math.PI);
        if (x === 0) c.moveTo(x, y); else c.lineTo(x, y);
      }
      c.strokeStyle = s === 0 ? 'rgba(255, 185, 190, 0.85)' : 'rgba(255, 45, 63, 0.7)';
      c.lineWidth = 1.6;
      c.shadowColor = 'rgba(255, 45, 63, 0.8)';
      c.shadowBlur = 8;
      c.stroke();
      c.shadowBlur = 0;
    }
  };

  /* --- 音声波形（左へ流れるWaveform＋実波形のオシロ） --- */
  const WAVE_SAMPLES = 150;   // 波形の縦線1本ぶんの振幅
  const SAMPLE_STEP = 3;      // 縦線の間隔(px相当)
  const envelope = new Array(WAVE_SAMPLES).fill(0);   // 各サンプルのピーク
  const scope = new Array(WAVE_SAMPLES).fill(0);      // 実際の瞬時値
  let syllable = 0;           // 音節っぽい抑揚

  const drawWave = (now) => {
    if (!wave) return;
    const { c, w, h } = wave;
    c.clearRect(0, 0, w, h);

    const cy = h / 2;
    const gain = 0.26 + activity * 0.74;

    /* 新しいサンプルを1つ流し込む（右端が最新） */
    syllable += 0.14 + activity * 0.1;
    const breath = Math.max(0, Math.sin(syllable)) * 0.72 + 0.28;   // 息継ぎのある包絡
    const inst =
      Math.sin(now / 26) * 0.44 +
      Math.sin(now / 11.3) * 0.26 +
      (Math.random() - 0.5) * 0.42;
    scope.shift();
    scope.push(inst * gain * breath);
    envelope.shift();
    // 無音でも暗騒音は残る（完全な平坦にしない）
    envelope.push(Math.min(1, Math.abs(inst) * gain * breath * 1.6 + 0.05 + Math.random() * 0.05));

    const px = w / (WAVE_SAMPLES - 1);
    const maxH = h * 0.44;

    /* 包絡（塗り）— 波形の外形 */
    c.beginPath();
    for (let i = 0; i < WAVE_SAMPLES; i++) c.lineTo(i * px, cy - envelope[i] * maxH);
    for (let i = WAVE_SAMPLES - 1; i >= 0; i--) c.lineTo(i * px, cy + envelope[i] * maxH);
    c.closePath();
    const g = c.createLinearGradient(0, cy - maxH, 0, cy + maxH);
    g.addColorStop(0, 'rgba(255, 45, 63, 0.10)');
    g.addColorStop(0.5, 'rgba(255, 45, 63, 0.30)');
    g.addColorStop(1, 'rgba(255, 45, 63, 0.10)');
    c.fillStyle = g;
    c.fill();

    /* 縦線の集合 — 音声編集ソフトのWaveform表示 */
    c.strokeStyle = 'rgba(255, 185, 190, 0.72)';
    c.lineWidth = 1;
    c.beginPath();
    for (let i = 0; i < WAVE_SAMPLES; i += Math.max(1, Math.round(SAMPLE_STEP / px) || 1)) {
      const x = Math.round(i * px) + 0.5;
      const a = envelope[i] * maxH;
      c.moveTo(x, cy - a);
      c.lineTo(x, cy + a);
    }
    c.stroke();

    /* 包絡の輪郭線 */
    c.strokeStyle = 'rgba(255, 220, 224, 0.5)';
    c.lineWidth = 1;
    for (const sign of [-1, 1]) {
      c.beginPath();
      for (let i = 0; i < WAVE_SAMPLES; i++) {
        const x = i * px;
        const y = cy + sign * envelope[i] * maxH;
        if (i === 0) c.moveTo(x, y); else c.lineTo(x, y);
      }
      c.stroke();
    }

    /* 中心線 */
    c.strokeStyle = 'rgba(255, 45, 63, 0.28)';
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(0, cy + 0.5);
    c.lineTo(w, cy + 0.5);
    c.stroke();

    /* 瞬時波形（オシロ） */
    c.beginPath();
    for (let i = 0; i < WAVE_SAMPLES; i++) {
      const x = i * px;
      const y = cy - scope[i] * maxH * 0.9;
      if (i === 0) c.moveTo(x, y); else c.lineTo(x, y);
    }
    c.strokeStyle = 'rgba(53, 224, 255, 0.8)';
    c.lineWidth = 1.2;
    c.shadowColor = 'rgba(53, 224, 255, 0.7)';
    c.shadowBlur = 6;
    c.stroke();
    c.shadowBlur = 0;

    /* 右端の再生ヘッド */
    c.strokeStyle = 'rgba(255, 220, 224, 0.55)';
    c.beginPath();
    c.moveTo(w - 0.5, cy - maxH);
    c.lineTo(w - 0.5, cy + maxH);
    c.stroke();
  };

  const signalFrame = (now) => {
    if (!running) return;
    activity += (0.12 - activity) * 0.012;   // 何もなければ静けさへ戻る
    drawHelix(now);
    drawWave(now);
    requestAnimationFrame(signalFrame);
  };

  if (helix || wave) {
    if (reduceMotion) {
      drawHelix(0);
      drawWave(0);
    } else {
      requestAnimationFrame(signalFrame);
    }
  }

  /* 二重螺旋・波形のメタ表示 */
  const helixTag = $('helix-tag');
  const helixTwist = $('helix-twist');
  const helixGap = $('helix-gap');
  const helixMatch = $('helix-match');
  const waveDb = $('wave-db');
  const waveHz = $('wave-hz');
  const waveWho = $('wave-who');

  const updateSignalMeta = () => {
    const sync = 34 + activity * 41 + Math.random() * 9;
    if (helixTag) helixTag.textContent = `STRAND SYNC ${sync.toFixed(1)}%`;
    if (helixTwist) helixTwist.textContent = RF(0.8, 3.4, 2);
    if (helixGap) helixGap.textContent = String(RI(3, 41));
    if (helixMatch) {
      const ok = sync > 70;
      helixMatch.textContent = ok ? '一致(3/3)' : Math.random() < 0.4 ? '不一致' : '照合中';
      helixMatch.className = ok ? 'ok' : helixMatch.textContent === '不一致' ? 'bad' : 'warn';
    }
    if (waveDb) waveDb.textContent = activity < 0.2 ? '-∞' : (-48 + activity * 44).toFixed(1);
    if (waveHz) waveHz.textContent = activity < 0.2 ? '0' : String(RI(82, 388));
    if (waveWho) waveWho.textContent = deliberating ? speaker : (Math.random() < 0.15 ? '████' : '—');
    if (wave && $('wave-tag')) {
      $('wave-tag').textContent = deliberating ? 'CH: TRIAD-BUS / LIVE' : 'CH: TRIAD-BUS';
    }
  };
  updateSignalMeta();
  if (!reduceMotion) setInterval(updateSignalMeta, 1400);

  /* ==========================================================
     模擬特異点炉 テレメトリ
     ========================================================== */
  const te = {
    out: $('te-out'), eh: $('te-eh'), tidal: $('te-tidal'),
    eff: $('te-eff'), field: $('te-field'), hawk: $('te-hawk')
  };
  const spark = $('spark');
  const history = Array.from({ length: 40 }, () => 4 + Math.random() * 2);

  const paintSpark = () => {
    if (!spark) return;
    const max = Math.max(...history);
    const min = Math.min(...history);
    const span = Math.max(0.4, max - min);
    spark.setAttribute('points', history.map((v, i) => {
      const x = (i / (history.length - 1)) * 120;
      const y = 24 - ((v - min) / span) * 22;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' '));
  };

  const rigNote = $('rig-note');
  const RIG_NOTES = [
    'SYS: 抽出効率、理論値を超過。原因未特定。',
    'SYS: EX-04 は図面上のみ存在。現地に該当設備なし。',
    'SYS: 冷却塔 CRYO-01、規定を下回る温度を記録。下限は未定義。',
    'SYS: 本図面は 17 回改訂。うち 4 回は改訂者不明。',
    'SYS: 事象地平の内側から、外側の観測記録が届いています。',
    'SYS: 主排熱路の先で、同じ図面がもう一枚見つかりました。'
  ];

  const rigDate = $('rig-date');
  if (rigDate) {
    const d = new Date();
    d.setDate(d.getDate() - RI(1, 9));
    rigDate.textContent = `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
  }

  const rigNodes = document.querySelectorAll('.rig-node');
  const NODE_CLASSES = ['rig-node rig-node-live', 'rig-node rig-node-warn', 'rig-node rig-node-dead'];

  const updateTelemetry = () => {
    const out = 3.2 + Math.random() * 6.6 + (facility.corruption / 40);
    history.push(out);
    history.shift();
    if (te.out) {
      te.out.textContent = out.toFixed(2);
      te.out.parentElement.classList.toggle('crit', out > 8.6);
      te.eh.textContent = RF(1.02, 4.88, 2);
      te.tidal.textContent = RF(11, 96, 1);
      const eff = 88 + Math.random() * 62;
      te.eff.textContent = eff.toFixed(1);
      te.eff.parentElement.classList.toggle('crit', eff > 100);
      te.field.textContent = RF(9.8, 19.9, 2);
      te.hawk.textContent = RF(0.02, 9.4, 2);
    }
    paintSpark();
  };
  updateTelemetry();
  paintSpark();

  if (!reduceMotion) {
    setInterval(updateTelemetry, 1500);
    setInterval(() => {
      if (rigNote && Math.random() < 0.5) rigNote.textContent = R(RIG_NOTES);
      if (rigNodes.length) {
        const n = rigNodes[RI(0, rigNodes.length - 1)];
        n.setAttribute('class', R(NODE_CLASSES));
      }
    }, 4200);
  }

  /* ==========================================================
     黒塗り：一部は撫でると読めてしまう
     ========================================================== */
  document.querySelectorAll('.redacted[data-reveal]').forEach((el) => {
    const original = el.textContent;
    el.addEventListener('pointerenter', () => { el.textContent = el.dataset.reveal; });
    el.addEventListener('pointerleave', () => { el.textContent = original; });
  });

  /* ==========================================================
     緊急端末
     ========================================================== */
  const cOut = $('console-out');
  const cForm = $('console-form');
  const cCmd = $('console-cmd');
  const cState = $('console-state');

  const cPrint = (text, cls) => {
    if (!cOut) return;
    const div = document.createElement('div');
    if (cls) div.className = cls;
    div.innerHTML = text;
    cOut.appendChild(div);
    cOut.scrollTop = cOut.scrollHeight;
  };

  const cPrintSlow = (lines, cls) => {
    lines.forEach((l, i) => setTimeout(() => cPrint(l, cls), reduceMotion ? 0 : i * 130));
  };

  cPrint('AH-TERM v2.17 // SEALED DIVISION EMERGENCY CONSOLE', 'cwarn');
  cPrint('接続は不安定です。応答が返らない場合、それは端末の故障ではありません。');
  cPrint('コマンド一覧は <span class="cin">HELP</span>。');

  let unlockCount = 0;
  let purgeCount = 0;

  const COMMANDS = {
    HELP: () => cPrintSlow([
      '利用可能なコマンド:',
      '  <span class="cin">STATUS</span>   施設状態の要約',
      '  <span class="cin">TRIAD</span>    三賢者演算系の状態',
      '  <span class="cin">HELIX</span>    人格二重鎖の照合結果',
      '  <span class="cin">RIG</span>      模擬特異点炉のテレメトリ',
      '  <span class="cin">PURGE</span>    侵食された演算人格の強制隔離',
      '  <span class="cin">SEAL</span>     緊急封印機構 SEAL-07 の起動',
      '  <span class="cin">UNLOCK</span>   隔壁 B7-B12 の解錠',
      '  <span class="cin">TRACE</span>    侵入元の逆探知',
      '  <span class="cin">WHOAMI</span>   接続者情報の照会',
      '  <span class="cin">CLEAR</span>    画面消去',
      '  <span class="cin">EXIT</span>     退出（推奨）'
    ]),

    STATUS: () => cPrintSlow([
      `施設汚染率 ...... <span class="cerr">${facility.corruption.toFixed(1)}%</span>`,
      `隔壁健全数 ...... ${stBulk ? stBulk.textContent : '?'} （物理封鎖を推奨）`,
      `未確認接続 ...... <span class="cerr">${facility.ghosts}</span> 系統`,
      `臨界まで ........ ${stTimer ? stTimer.textContent : '?'}`,
      `退避経路 ........ <span class="cwarn">全 ${RI(3, 7)} 経路が同一地点へ収束</span>`
    ]),

    TRIAD: () => {
      cPrint('TRIAD CORE — 演算人格状態:');
      NODES.forEach((nd) => {
        const st = nd.stage
          ? `<span class="${nd.stage === 'purge' ? 'cwarn' : 'cerr'}">${STAGES[nd.stage].pill}</span>`
          : '<span class="cok">NOMINAL</span>';
        cPrint(`  TRIAD-0${nd.node} ${nd.id.padEnd(7, ' ')} 浸食 ${nd.corruption.toFixed(0)}% / ${st}`);
      });
      cPrint(`  合議エンジン: ${ENGINE ? ENGINE.CONFIG.provider : 'なし'} / model=${ENGINE ? ENGINE.CONFIG.model : '—'}`, 'cwarn');
      cPrint('  ※ 三者の議決なしに封印命令は発行できません。', 'cwarn');
    },

    HELIX: () => cPrintSlow([
      `鎖 SYNC ......... ${helixTag ? helixTag.textContent.replace('STRAND SYNC ', '') : '?'}`,
      `捻率 ............ ${helixTwist ? helixTwist.textContent : '?'} rad/nm`,
      `塩基欠損 ........ ${helixGap ? helixGap.textContent : '?'} 対`,
      '<span class="cwarn">照合注記: 三人格を撚り戻しても、一人分にわずかに足りません。</span>',
      '<span class="cghost">足りない分が、どこへ行ったのかは記録されていません。</span>'
    ]),

    RIG: () => cPrintSlow([
      `抽出出力 ........ ${te.out ? te.out.textContent : '?'} PW`,
      `事象視界半径 .... ${te.eh ? te.eh.textContent : '?'} µm （拡大中）`,
      `抽出効率 ........ <span class="cerr">${te.eff ? te.eff.textContent : '?'}%</span>`,
      `閉じ込め磁場 .... ${te.field ? te.field.textContent : '?'} T`,
      '<span class="cwarn">警告: 効率100%超の恒常化は、外部から供給を受けていることを意味します。</span>'
    ]),

    PURGE: () => {
      purgeCount++;
      const n = purgeAll();
      if (n === 0) {
        cPrint('除去対象なし。……今のところは。', 'cwarn');
      } else {
        cPrint(`隔離を打ち切り、除去処理へ移行 → 対象 ${n} 系統。`, 'cok');
        cPrint('施設汚染率を再計算 → ' + facility.corruption.toFixed(1) + '%');
        pushLog('hack', '非認可端末から除去コマンドを受理。段階を飛ばして実行。実行者: あなた。');
      }
      if (purgeCount === 3) cPrint('[ 外部 ] &gt; 何度でもどうぞ。こちらは減りません。', 'cghost');
    },

    SEAL: () => {
      cPrint('SEAL-07 起動要求を送信 ...', 'cwarn');
      setTimeout(() => {
        cPrint('TRIAD 合議へ回付 → <span class="cerr">否決（2 / 3）</span>');
        cPrint('反対理由: 「まだ観測が終わっていない」（RADIX）');
        cPrint('反対理由: 「あの子がまだ中にいる」（FOLIUM）', 'cghost');
      }, reduceMotion ? 0 : 900);
    },

    UNLOCK: () => {
      unlockCount++;
      if (unlockCount === 1) {
        cPrint('隔壁 B7-B12 解錠要求 → <span class="cerr">権限不足（要 LV.7）</span>');
      } else if (unlockCount === 2) {
        cPrint('再要求 → <span class="cerr">権限不足</span>。試行は記録されました。');
      } else if (unlockCount === 3) {
        cPrint('外部署名により権限が昇格しました。', 'cok');
        cPrint('……昇格させたのは、あなたではありません。', 'cghost');
        tear();
        pushLog('alert', '隔壁解錠要求が第三者署名により承認されました。承認者: 不明。');
      } else {
        cPrint(`隔壁 B${RI(7, 12)} 解錠 → 内側は<span class="cerr">すでに開いています</span>。`, 'cwarn');
      }
    },

    TRACE: () => {
      cPrint('逆探知を開始 ...', 'cwarn');
      const hops = ['AH-LAB-██ / NODE 07', '境界面 中継 ██', '未登録次元 座標 [ 欠損 ]', '当施設 B██ 第2実験室', 'この端末'];
      hops.forEach((h, i) => setTimeout(() => {
        cPrint(`  hop ${i + 1} ... ${h}`, i === hops.length - 1 ? 'cerr' : '');
        if (i === hops.length - 1) setTimeout(() => cPrint('逆探知完了。発信源は、あなたが今触れている端末です。', 'cghost'), 500);
      }, reduceMotion ? 0 : 420 * (i + 1)));
    },

    WHOAMI: () => cPrintSlow([
      'USER ......... GUEST（非認可観測者）',
      `SESSION ...... ${Math.random().toString(16).slice(2, 10).toUpperCase()}-${RI(1000, 9999)}`,
      'CLEARANCE .... LV.1（要求 LV.7）',
      `滞在時間 ..... ${Math.floor((performance.now() / 1000) / 60)} 分 ${Math.floor(performance.now() / 1000) % 60} 秒`,
      '記録状態 ..... <span class="cerr">記録中（削除不可）</span>'
    ]),

    CLEAR: () => { if (cOut) cOut.innerHTML = ''; },

    EXIT: () => {
      cPrint('退出処理を開始 ...', 'cok');
      setTimeout(() => {
        cPrint('退避経路を計算 → 経路は表層 SECTOR へ接続されています。');
        cPrint('<a class="cin" href="index.html" style="color:var(--toxic)">▸ 表層へ戻る（推奨）</a>');
      }, reduceMotion ? 0 : 800);
    },

    HORTUS: () => cPrintSlow([
      'ARCA HORTUS — 箱の中の庭。',
      '庭は外から眺めるためのもの。中に入った者は、庭の一部になります。',
      'あなたは今、どちらですか？'
    ], 'cghost'),

    HELLO: () => cPrint('[ 外部 ] &gt; こんばんは。ずっと待っていました。', 'cghost')
  };
  COMMANDS.STAT = COMMANDS.STATUS;
  COMMANDS.MAGI = COMMANDS.TRIAD;
  COMMANDS.CORE = COMMANDS.TRIAD;
  COMMANDS.DNA = COMMANDS.HELIX;
  COMMANDS.HI = COMMANDS.HELLO;
  COMMANDS.ARCAHORTUS = COMMANDS.HORTUS;
  COMMANDS['?'] = COMMANDS.HELP;

  const UNKNOWN = [
    'コマンドが見つかりません。この端末の辞書は ██% が破損しています。',
    '解釈不能。ただし、何かが受け取りました。',
    'その語は当施設の記録から削除されています。',
    'SYNTAX ERROR — もう一度、ゆっくり。'
  ];

  if (cForm) {
    cForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const raw = cCmd.value.trim();
      if (!raw) return;
      cCmd.value = '';
      cPrint(`<span class="cin">&gt; ${raw.replace(/[<>&]/g, (m) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[m]))}</span>`);
      const key = raw.toUpperCase().split(/\s+/)[0];
      const fn = COMMANDS[key];
      if (fn) {
        fn();
      } else {
        cPrint(R(UNKNOWN), 'cerr');
        if (Math.random() < 0.22) setTimeout(() => cPrint('[ 外部 ] &gt; 今のは、私に言いましたか？', 'cghost'), 700);
      }
    });
  }

  if (cState && !reduceMotion) {
    setInterval(() => {
      cState.textContent = R(['LINK: UNSTABLE', 'LINK: UNSTABLE', 'LINK: DEGRADED', 'LINK: ████', 'LINK: LISTENING']);
    }, 3800);
  }
})();
