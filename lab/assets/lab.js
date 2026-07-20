/* ============================================================
   箱庭研究所 — Arca Hortus Laboratory
   起動シーケンス / 背景演出 / 施設ステータス / 観測ログ
   ============================================================ */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================
     起動シーケンス
     ========================================================== */
  const bootOverlay = document.getElementById('boot-overlay');
  const bootPre = document.getElementById('boot-lines');
  const BOOT_KEY = 'ah-lab-booted';

  const BOOT_SCRIPT = [
    '> ARCA HORTUS LABORATORY — ACCESS NODE 07',
    '> ESTABLISHING DIMENSIONAL LINK ....... OK',
    '> VERIFYING OBSERVER SIGNATURE ........ OK',
    '> MEMETIC FILTER ...................... ACTIVE',
    '> CONTAINMENT STATUS .................. 3 UNITS SEALED',
    '> LOADING FACILITY MAP ................ 100%',
    '',
    '> WELCOME, OBSERVER.',
    '> 箱庭研究所へようこそ。'
  ];

  let bootDone = false;
  const finishBoot = () => {
    if (bootDone) return;
    bootDone = true;
    try { sessionStorage.setItem(BOOT_KEY, '1'); } catch (e) { /* private mode */ }
    bootOverlay.classList.add('done');
    document.body.classList.remove('pre-boot');
    document.body.classList.add('booted');
    // 出現アニメ完了後にクラスを外し、カードのチルト変形と競合しないようにする
    document.querySelectorAll('.reveal').forEach((el) => {
      el.addEventListener('animationend', () => el.classList.remove('reveal'), { once: true });
    });
  };

  const skipBoot = reduceMotion || (() => {
    try { return sessionStorage.getItem(BOOT_KEY) === '1'; } catch (e) { return false; }
  })();

  if (skipBoot) {
    finishBoot();
  } else {
    let line = 0;
    let ch = 0;
    let buffer = '';
    const cursor = '<span class="cursor"></span>';

    const type = () => {
      if (bootDone) return;
      if (line >= BOOT_SCRIPT.length) {
        setTimeout(finishBoot, 650);
        return;
      }
      const current = BOOT_SCRIPT[line];
      if (ch < current.length) {
        ch += 1 + Math.floor(Math.random() * 2); // 1〜2文字ずつ
        bootPre.innerHTML = buffer + current.slice(0, ch) + cursor;
        setTimeout(type, 12 + Math.random() * 24);
      } else {
        buffer += current + '\n';
        bootPre.innerHTML = buffer + cursor;
        line += 1;
        ch = 0;
        // 空行・最終行手前は少し溜める
        setTimeout(type, current === '' ? 350 : 120 + Math.random() * 180);
      }
    };
    setTimeout(type, 400);
    bootOverlay.addEventListener('click', finishBoot);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') finishBoot();
    }, { once: true });
  }

  /* ==========================================================
     背景キャンバス：六角格子・浮遊粒子・異常波紋
     ========================================================== */
  const canvas = document.getElementById('lab-canvas');
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

  let W = 0;
  let H = 0;
  const gridLayer = document.createElement('canvas'); // 静的な格子はオフスクリーンに一度だけ描く
  const gridCtx = gridLayer.getContext('2d');

  const HEX_R = 34;
  const hexCenters = [];

  const buildGrid = () => {
    gridLayer.width = canvas.width;
    gridLayer.height = canvas.height;
    gridCtx.setTransform(DPR, 0, 0, DPR, 0, 0);
    gridCtx.clearRect(0, 0, W, H);
    gridCtx.strokeStyle = 'rgba(77, 255, 166, 0.055)';
    gridCtx.lineWidth = 1;
    hexCenters.length = 0;

    const dx = HEX_R * 1.5;
    const dy = HEX_R * Math.sqrt(3);
    for (let col = -1, cx = -HEX_R; cx < W + HEX_R * 2; col++, cx += dx) {
      const offsetY = (col % 2) ? dy / 2 : 0;
      for (let cy = -HEX_R + offsetY; cy < H + HEX_R * 2; cy += dy) {
        hexCenters.push({ x: cx, y: cy });
        gridCtx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i;
          const px = cx + HEX_R * Math.cos(a);
          const py = cy + HEX_R * Math.sin(a);
          if (i === 0) gridCtx.moveTo(px, py); else gridCtx.lineTo(px, py);
        }
        gridCtx.closePath();
        gridCtx.stroke();
      }
    }
  };

  /* 浮遊粒子（胞子） */
  let particles = [];
  const buildParticles = () => {
    const count = Math.min(110, Math.floor((W * H) / 14000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: 0.3 + Math.random() * 0.7,               // 奥行き（パララックス係数）
      r: 0.6 + Math.random() * 1.8,
      vy: -(0.08 + Math.random() * 0.25),
      vx: (Math.random() - 0.5) * 0.12,
      phase: Math.random() * Math.PI * 2
    }));
  };

  /* 異常波紋 */
  const ripples = [];
  const spawnRipple = (x, y, strong) => {
    ripples.push({
      x: x !== undefined ? x : Math.random() * W,
      y: y !== undefined ? y : Math.random() * H,
      r: 0,
      max: strong ? 220 : 120 + Math.random() * 120,
      alpha: strong ? 0.5 : 0.3
    });
  };

  /* 明滅するアクティブヘックス */
  const activeHexes = [];
  const igniteHex = () => {
    if (!hexCenters.length) return;
    const c = hexCenters[Math.floor(Math.random() * hexCenters.length)];
    activeHexes.push({ x: c.x, y: c.y, life: 0, max: 160 + Math.random() * 120 });
  };

  /* マウスパララックス */
  const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
  window.addEventListener('pointermove', (e) => {
    mouse.tx = e.clientX / window.innerWidth;
    mouse.ty = e.clientY / window.innerHeight;
  }, { passive: true });
  window.addEventListener('pointerdown', (e) => {
    // カード類の上では波紋を出さない（誤爆防止ではなく演出の節度）
    if (e.target.closest('a, button, [role="button"]')) return;
    spawnRipple(e.clientX, e.clientY, true);
  });

  const resize = () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildGrid();
    buildParticles();
  };
  window.addEventListener('resize', resize);
  resize();

  const drawHexGlow = (h) => {
    const t = h.life / h.max;
    const a = Math.sin(t * Math.PI) * 0.35;
    ctx.strokeStyle = `rgba(77, 255, 166, ${a})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const ang = (Math.PI / 3) * i;
      const px = h.x + HEX_R * Math.cos(ang);
      const py = h.y + HEX_R * Math.sin(ang);
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  };

  let lastIgnite = 0;
  let lastRipple = 0;
  let running = true;

  const frame = (now) => {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);

    // パララックスは緩やかに追従
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    const par = { x: (mouse.x - 0.5), y: (mouse.y - 0.5) };

    // 格子（呼吸するように明滅）
    const breath = 0.75 + 0.25 * Math.sin(now / 3800);
    ctx.globalAlpha = breath;
    ctx.drawImage(gridLayer, par.x * -14 - 7, par.y * -14 - 7, W + 14, H + 14);
    ctx.globalAlpha = 1;

    // アクティブヘックス
    if (now - lastIgnite > 1400) { igniteHex(); lastIgnite = now; }
    for (let i = activeHexes.length - 1; i >= 0; i--) {
      const h = activeHexes[i];
      h.life++;
      if (h.life >= h.max) { activeHexes.splice(i, 1); continue; }
      drawHexGlow(h);
    }

    // 波紋
    if (now - lastRipple > 4200 + Math.random() * 2500) { spawnRipple(); lastRipple = now; }
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      rp.r += 1.6;
      const t = rp.r / rp.max;
      if (t >= 1) { ripples.splice(i, 1); continue; }
      const a = rp.alpha * (1 - t);
      ctx.strokeStyle = `rgba(77, 255, 166, ${a})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = `rgba(255, 95, 210, ${a * 0.35})`;
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r * 0.82, 0, Math.PI * 2);
      ctx.stroke();
    }

    // 粒子
    for (const p of particles) {
      p.y += p.vy * p.z;
      p.x += p.vx + Math.sin(now / 2600 + p.phase) * 0.08;
      if (p.y < -6) { p.y = H + 6; p.x = Math.random() * W; }
      if (p.x < -6) p.x = W + 6;
      if (p.x > W + 6) p.x = -6;
      const tw = 0.35 + 0.3 * Math.sin(now / 900 + p.phase);
      const px = p.x + par.x * -30 * p.z;
      const py = p.y + par.y * -30 * p.z;
      ctx.fillStyle = `rgba(180, 255, 217, ${tw * p.z})`;
      ctx.beginPath();
      ctx.arc(px, py, p.r * p.z, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(frame);
  };

  if (reduceMotion) {
    // 動きを抑える設定なら静的な一枚だけ描く
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
     施設ステータスの揺らぎ
     ========================================================== */
  const stCore = document.getElementById('st-core');
  const stFlux = document.getElementById('st-flux');
  const stSeal = document.getElementById('st-seal');
  const stObs = document.getElementById('st-obs');

  if (!reduceMotion && stCore) {
    let core = 87.2;
    setInterval(() => {
      core = Math.min(97.9, Math.max(81.0, core + (Math.random() - 0.5) * 2.4));
      const flux = 0.01 + Math.random() * 0.16;
      stCore.textContent = core.toFixed(1) + '%';
      stCore.className = core < 84 ? 'warn' : 'ok';
      stFlux.textContent = flux.toFixed(3);
      stFlux.className = flux > 0.12 ? 'warn' : 'ok';
      if (Math.random() < 0.06) {
        stSeal.textContent = '4';
        stSeal.className = 'alert';
      } else {
        stSeal.textContent = '3';
        stSeal.className = 'warn';
      }
      stObs.textContent = Math.random() < 0.04 ? '1 (+?)' : '1';
      stObs.className = 'ok';
    }, 1600);
  }

  /* ==========================================================
     観測ログフィード
     ========================================================== */
  const logFeed = document.getElementById('log-feed');

  /* --- ランダムユーティリティ --- */
  const R = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const RI = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
  const RF = (min, max, digits) => (min + Math.random() * (max - min)).toFixed(digits);

  /* --- 語彙プール --- */
  const V = {
    corridor: ['回廊A', '回廊B', '回廊C', '回廊D', '回廊E', '地下回廊', '螺旋回廊', '第7連絡橋', '中央吹き抜け', '標本庫前通路'],
    vault: ['第1封印庫', '第2封印庫', '第3封印庫', '深層封印庫', '仮設封印庫', '低温封印庫'],
    org: ['倫理委員会', 'G.N.A', 'VOID Tech社', '境界線観測財団', 'S.H.R.O.S.', 'A.C.A.S.'],
    staff: ['観測員K', '研究員M', '司書見習い', '夜勤の管理人', '無名の助手', '第4観測班', '衛生班', '庭師'],
    anomaly: ['低周波の鈴音', '未登録の足音', '逆再生の子守唄', '鏡面の遅延', '重力の微細な傾き', '壁面の呼吸', '時計の逆行', '影の増殖', '誰もいない拍手', '窓の外の視線'],
    item: ['傘', '椅子', '湯呑', '筆記具', '脚立', '懐中時計', '予備の鍵', '観葉植物', '古い地図'],
    layer: ['表層', '中層', '深層', '境界面'],
    weather: ['晴', '曇', '霧', '小雨', '灰降り', '無風', '星霜', '花曇り', '夜光雲'],
    mood: ['旺盛', '普通', '皆無', '不明', '選り好みが激しい'],
    door: ['資料室', '第2実験室', '温室', '職員食堂', '屋上', '地下書庫'],
    color: ['深緑', '琥珀', '菫', '灰白', '真鍮', '黒曜']
  };

  /* --- ログテンプレート ---
     [重み, 種別, 生成関数] の配列。ランダム語彙の組み合わせで
     実質数千通りのログを生成する。 */
  const T = (w, type, fn) => ({ w, type, fn });
  const LOG_TEMPLATES = [
    /* == 通常運転 == */
    T(3, '', () => `第${RI(1, 9)}観測窓 定期スキャン完了。異常なし。`),
    T(3, '', () => `胞子状粒子の浮遊密度: ${RF(0.62, 1.68, 2)}（基準値内）。`),
    T(3, '', () => `次元境界の膜厚: ${RF(1.88, 2.79, 2)}nm（許容範囲）。`),
    T(3, '', () => `コア冷却水の水温 ${RF(10.5, 17.9, 1)}℃。安定。`),
    T(2, '', () => `${R(V.corridor)}の照明を${RI(1, 4)}基交換。`),
    T(2, '', () => `${R(V.vault)}の封印術式を再詠唱。持続予測 ${RI(12, 96)}時間。`),
    T(2, '', () => `標本No.${RI(101, 999)} の給餌完了。食欲は${R(V.mood)}。`),
    T(2, '', () => `標本No.${RI(101, 999)} の定期検診。体色は${R(V.color)}に変化したが健康。`),
    T(2, '', () => `${R(V.org)}とのデータ同期完了。差分 ${RI(2, 840)}件。`),
    T(2, '', () => `観測気球を次元${R(V.layer)}へ放出。応答良好。`),
    T(2, '', () => `本日の箱庭内気象: ${R(V.weather)}。観測に適す。`),
    T(2, '', () => `第${RI(2, 9)}観測窓の結露を除去。視界良好。`),
    T(2, '', () => `${R(V.staff)}、定時報告。特記事項なし。`),
    T(2, '', () => `${R(V.door)}の空調フィルタを交換。次元塵の付着は軽微。`),
    T(1, '', () => `培養槽${RI(1, 12)}番の栄養液を補充。発光が${RF(2, 9, 0)}%明るくなった。`),
    T(1, '', () => `回収班が${R(V.layer)}から帰還。戦利品: ${R(V.item)}（要鑑定）。`),
    T(1, '', () => `${R(V.org)}宛の月次報告書を発送。頁数 ${RI(12, 420)}。`),
    T(1, '', () => `温室の夜光苔が開花。花言葉は「${R(['沈黙', '再会', '観測', '帰還', '約束'])}」とのこと。`),
    T(1, '', () => `図書区画の蔵書が${RI(1, 7)}冊増えていた。寄贈者不明。内容は無害。`),
    T(1, '', () => `防護服の在庫確認。${RI(30, 60)}着。うち${RI(0, 3)}着がサイズ「不定」。`),
    T(1, '', () => `${R(V.staff)}が淹れた茶が好評。茶葉の産地: [検閲済]。`),
    T(1, '', () => `施設内放送テスト。BGMは${R(['鈴の音', '雨音', '無音', '古いワルツ'])}を選択。`),
    T(1, '', () => `エレベーターの行先表示に「B${RI(8, 99)}F」が出現するも、到着は通常階。`),
    T(1, '', () => `掃除ロボットが${R(V.corridor)}で停止。何かを${RI(3, 40)}分間見つめていた。`),

    /* == 各セクター == */
    T(2, '', () => `SECTOR-01 訓練端末 稼働率 ${RI(18, 96)}%。`),
    T(1, '', () => `SECTOR-01 模擬試験で高得点を観測。要員候補として記録。`),
    T(1, '', () => `SECTOR-01 猟具シミュレータの整備完了。安全装置は正常。`),
    T(2, '', () => `SECTOR-02 観測室より定時信号を受信。観測者・■■は健在。`),
    T(1, '', () => `SECTOR-02 観測室から鈴の音。■■が席を立った模様。`),
    T(1, '', () => `SECTOR-02 ■■の観測記録が更新された。今日も箱庭は概ね平和。`),
    T(1, '', () => `SECTOR-02 観測室のコメントログに未知の署名。■■は気にしていない。`),
    T(2, '', () => `SECTOR-03 確率炉、出力${R(['微増', '微減', '安定'])}。宴の気配を検知。`),
    T(1, '', () => `SECTOR-03 確率炉のスロットが自発的に回転。結果: [未記録]。`),
    T(1, '', () => `SECTOR-03 で偶然が${RI(2, 5)}連続。統計班が頭を抱えている。`),

    /* == 警告 == */
    T(2, 'warn', () => `軽微な次元揺らぎを検知。自動補正済み。`),
    T(2, 'warn', () => `${R(V.corridor)}で${R(V.anomaly)}を記録。再生不能。`),
    T(2, 'warn', () => `${R(V.vault)}の温度が${RF(0.2, 1.9, 1)}℃上昇。経過観察中。`),
    T(1, 'warn', () => `標本No.${RI(101, 999)} が名前を呼ばれる前に返事をした。`),
    T(1, 'warn', () => `備品の${R(V.item)}が${RI(1, 5)}点、自然消失。回収班を編成。`),
    T(1, 'warn', () => `メメティック汚染フィルタが未知パターンを${RI(1, 3)}件隔離。`),
    T(1, 'warn', () => `${R(V.staff)}の報告書に本人の記憶にない追記。筆跡は一致。`),
    T(1, 'warn', () => `${R(V.door)}の扉が施錠したまま${RI(2, 9)}回ノックされた。内側から。`),
    T(1, 'warn', () => `館内図から${R(V.corridor)}が一時的に消失。現在は復元済み。`),
    T(1, 'warn', () => `昨夜の当直記録に、当直していない者の署名。`),
    T(1, 'warn', () => `窓の外の月が${RI(2, 4)}つ観測された。本日の月は1つの予定。`),

    /* == 異常 == */
    T(2, 'alert', () => `一時的な観測断絶が発生。${RF(0.4, 9.9, 1)}秒後に復旧。`),
    T(1, 'alert', () => `次元振動 M${RF(1.1, 3.9, 1)} を観測。震源: 施設内。`),
    T(1, 'alert', () => `${R(V.corridor)}の監視映像に${RI(1, 3)}フレームの欠落。`),
    T(1, 'alert', () => `封鎖区画のドアノブが内側から拭かれていた形跡。`),
    T(1, 'alert', () => `緊急封じ込め訓練……訓練？ 予定表に記載がない。`),

    /* == 稀少フレーバー == */
    T(1, '', () => `本日の来訪観測者: 1名。ようこそ。`),
    T(1, '', () => `「出口」は本日も発見されていない。`),
    T(1, '', () => `${R(V.org)}より書簡。開封権限: LV.${RI(4, 7)}以上。`),
    T(1, '', () => `倫理委員会より定例監査の通達。対象: [検閲済]。`),
    T(1, '', () => `■■「${R(['今日もいい観測日和', 'お茶がおいしい', '……今、誰か通った？', '鈴が勝手に鳴った'])}」`),
    T(1, 'warn', () => `……こちらを見ているのは、あなたの方では？`),
    T(1, '', () => `無人の受付に「おかえりなさい」の書き置き。差出人不明。`),
    T(1, '', () => `今日の格言: 「観測されない物語は、まだ終わっていない」。`),
    T(1, '', () => `迷子の${R(['蝶', '紙飛行機', '風船', '子猫'])}を保護。出身次元を照会中。`),
    T(1, '', () => `自販機に存在しないボタン「${R(['夢', '故郷', '雨の味', '0番'])}」が追加されていた。`)
  ];

  /* 重み付き抽選＋直近の重複回避 */
  const weightSum = LOG_TEMPLATES.reduce((s, t) => s + t.w, 0);
  const recent = [];
  const pickTemplate = () => {
    for (let tries = 0; tries < 8; tries++) {
      let roll = Math.random() * weightSum;
      for (let i = 0; i < LOG_TEMPLATES.length; i++) {
        roll -= LOG_TEMPLATES[i].w;
        if (roll <= 0) {
          if (recent.includes(i)) break; // 直近と被ったら引き直し
          recent.push(i);
          if (recent.length > 8) recent.shift();
          return LOG_TEMPLATES[i];
        }
      }
    }
    return R(LOG_TEMPLATES);
  };

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
    while (logFeed.children.length > 10) logFeed.lastChild.remove();
  };

  pushLog('', '観測ログ 記録開始。ACCESS NODE 07 接続確立。');
  if (!reduceMotion) {
    const nextLog = () => {
      const t = pickTemplate();
      pushLog(t.type, t.fn());
      setTimeout(nextLog, 3800 + Math.random() * 3200);
    };
    setTimeout(nextLog, 2500);
  }

  /* ==========================================================
     区画カード：スキャンライン付与＋3Dチルト
     ========================================================== */
  const cards = document.querySelectorAll('.sector-card');
  cards.forEach((card) => {
    const scan = document.createElement('span');
    scan.className = 'scanline';
    scan.setAttribute('aria-hidden', 'true');
    card.appendChild(scan);
  });

  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (finePointer && !reduceMotion) {
    cards.forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        if (card.classList.contains('reveal')) return; // 出現アニメ中は触らない
        const rect = card.getBoundingClientRect();
        const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -7;
        const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 7;
        card.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-3px)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ==========================================================
     封鎖区画：アクセス拒否演出
     ========================================================== */
  const sealed = document.getElementById('sealed-card');
  if (sealed) {
    let denyCount = 0;
    const deny = () => {
      sealed.classList.remove('deny');
      void sealed.offsetWidth; // アニメ再トリガー
      sealed.classList.add('deny');
      denyCount++;
      if (denyCount === 1) {
        pushLog('alert', 'WARNING: 封鎖区画への未認可アクセスを検知。観測局へ通報しました。');
      } else if (denyCount === 3) {
        pushLog('alert', 'WARNING: 執拗なアクセス試行を記録。あなたの好奇心は報告対象です。');
      } else if (denyCount >= 5 && denyCount % 5 === 0) {
        pushLog('warn', '……鍵は、まだこの次元には存在しない。');
      }
    };
    sealed.addEventListener('click', deny);
    sealed.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); deny(); }
    });
  }
})();
