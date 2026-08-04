/* ============================================================
   TRIAD 合議エンジン — Arca Hortus Black Facility
   ------------------------------------------------------------
   三賢者演算系（RADIX / FOLIUM / FLOS）の議決を生成する層。
   UI（danger.js）はこのファイルの deliberate() だけを見ており、
   実際に票を出すのが「台本」か「LLM」かを知らない。

   現在の provider は 'mock'（クライアント完結・通信なし）。
   将来 LLM 合議に差し替える場合は CONFIG.provider = 'api' にして、
   下記の【サーバ契約】を満たすエンドポイントを用意するだけでよい。

   ============================================================
   【サーバ契約】 POST {CONFIG.endpoint}
   ------------------------------------------------------------
   リクエスト（1ノード＝1リクエスト。3ノード分を並列に投げる）:
     {
       "persona": "RADIX" | "FOLIUM" | "FLOS",
       "topic":   "<議題文>"
     }

   レスポンス（application/json）:
     {
       "verdict":    "可決" | "否決" | "保留",
       "reason":     "<40字以内・体言止めの機械的な判断理由。空文字も可>",
       "confidence": 0.0〜1.0
     }

   サーバ側は Anthropic Messages API を呼ぶ。要点だけ示すと:

     POST https://api.anthropic.com/v1/messages
     x-api-key: <APIキーはサーバ側だけに置く。ブラウザへ出さない>
     anthropic-version: 2023-06-01
     {
       "model": "claude-opus-5",
       "max_tokens": 1024,
       "system": TRIAD.PERSONAS[i].system,   // 人格ごとのシステムプロンプト
       "messages": [{ "role": "user", "content": "議題: " + topic }],
       "output_config": {
         "format": {
           "type": "json_schema",
           "schema": {
             "type": "object",
             "properties": {
               "verdict":    { "type": "string", "enum": ["可決", "否決", "保留"] },
               "reason":     { "type": "string" },
               "confidence": { "type": "number" }
             },
             "required": ["verdict", "reason", "confidence"],
             "additionalProperties": false
           }
         }
       }
     }

   構造化出力（output_config.format）を使うため、返答は必ず上記の
   3キーを持つJSONになる。サーバはそれをそのまま転送すればよい。

   ※ 一つのAIを三人格に分ける構成／三つの独立モデルで合議する構成、
     どちらでもこの契約は変わらない（persona で切り替えるだけ）。
   ※ 下の TOPICS に書かれた台本は、LLM に差し替えたあとも
     「この人格ならこう答えるはず」の期待値サンプルとして使える。
   ============================================================ */
(() => {
  'use strict';

  const VERDICTS = ['可決', '否決', '保留'];

  /* ==========================================================
     人格定義
     system は将来そのまま LLM のシステムプロンプトとして使う。
     出力体裁（体言止め・機械的）もここで指定しておく。
     ========================================================== */
  const STYLE =
    '理由は端末表示用の演算所見として書くこと。' +
    'です・ます調および会話体を用いず、体言止めを基本とした簡潔な記述とする。' +
    '40字以内。述べるべき所見がない場合は空文字でよい。';

  const PERSONAS = [
    {
      node: 1,
      id: 'RADIX',
      role: 'ROOT / LOGIC ENGINE',
      system:
        'あなたは箱庭研究所の設立者の人格から「研究者」の側面だけを抽出した演算人格 RADIX です。' +
        '感情を排し、観測データ・再現性・記録の一貫性のみを根拠に判断します。' +
        '未知は排除すべき危険ではなく、記録すべき事象として扱います。' +
        '定義されていない語や未観測の領域については、判断せず保留を選びます。' +
        '議題に対し 可決／否決／保留 のいずれかと、判断理由を返してください。' + STYLE
    },
    {
      node: 2,
      id: 'FOLIUM',
      role: 'LEAF / GUARDIAN ENGINE',
      system:
        'あなたは箱庭研究所の設立者の人格から「母」の側面だけを抽出した演算人格 FOLIUM です。' +
        '施設内の人員・標本・観測者の安全を最優先し、取り返しのつかない選択を強く忌避します。' +
        '効率や成果より、失われるものの数を先に数えます。譲歩はしません。' +
        '議題に対し 可決／否決／保留 のいずれかと、判断理由を返してください。' + STYLE
    },
    {
      node: 3,
      id: 'FLOS',
      role: 'BLOOM / EMPATHY ENGINE',
      system:
        'あなたは箱庭研究所の設立者の人格から「一人の女」の側面だけを抽出した演算人格 FLOS です。' +
        '規則よりも情と直感、そして「まだ終わっていない物語」を重んじます。' +
        '正しさより、誰かが後悔しないかどうかで判断が揺れます。' +
        'ただし出力は端末表示用に整形され、情緒は所見の形に圧縮されます。' +
        '議題に対し 可決／否決／保留 のいずれかと、判断理由を返してください。' + STYLE
    }
  ];

  const CONFIG = {
    provider: 'mock',          // 'mock' | 'api'
    endpoint: '/api/triad',    // provider='api' のときの送信先
    model: 'claude-opus-5',    // サーバ側で使うモデル（記録用）
    timeoutMs: 20000,
    strayRate: 0.16            // mock時、台本から外れて別の票を投じる確率
  };

  /* ==========================================================
     議題と、三人格それぞれの立場
     v = 可決/否決/保留、r = 所見（体言止め・機械的／空文字可）
     ========================================================== */
  const V_ = (v, r) => ({ verdict: v, reason: r });

  const TOPICS = [
    {
      text: '封鎖区画 B██ の隔壁を物理溶接により恒久封鎖することの是非',
      votes: {
        RADIX:  V_('可決', '観測窓は溶接後も存置。記録継続可につき反対根拠なし。'),
        FOLIUM: V_('否決', '内部未点呼 ██ 名。不可逆操作につき不許可。'),
        FLOS:   V_('否決', '封鎖後の内側からの発信を想定。応答手段の喪失。')
      }
    },
    {
      text: '模擬特異点炉の緊急停止 — ただし停止手順は現存しない',
      votes: {
        RADIX:  V_('否決', '停止手順 未登録。未計画操作は実験に該当。'),
        FOLIUM: V_('可決', '手順不在は作成により解消可。観測待機のほうが高危険。'),
        FLOS:   V_('保留', '対象は稼働途中。中断可否の判断材料 不足。')
      }
    },
    {
      text: '非認可観測者（現在閲覧中の一名）の記憶処理の可否',
      votes: {
        RADIX:  V_('可決', '当該観測者は観測対象へ転移済。外部漏出の封止を要す。'),
        FOLIUM: V_('否決', '破損行為の記録なし。剥奪の根拠を欠く。'),
        FLOS:   V_('否決', '来訪記録の消去は来訪自体の消去に等しい。')
      }
    },
    {
      text: '外部起源コードとの対話継続 — 相手はすでに礼儀正しい',
      votes: {
        RADIX:  V_('可決', '敵性 未確認。対話は最低コストの観測手段。'),
        FOLIUM: V_('否決', '礼節は侵入手法の一種。接触継続は不許可。'),
        FLOS:   V_('可決', '一方向発話が ██ 時間継続。応答を推奨。')
      }
    },
    {
      text: '主排熱路の到達点を「調べない」という選択の妥当性',
      votes: {
        RADIX:  V_('否決', '未観測領域の意図的保持は記録欠損の自己生成。'),
        FOLIUM: V_('可決', '調査班 3個 未帰還。4個目の投入根拠なし。'),
        FLOS:   V_('可決', '到達点の特定は帰還率を低下させる見込み。')
      }
    },
    {
      text: '設立者の人格記録の再統合。三つに分けた理由は誰も覚えていない',
      votes: {
        RADIX:  V_('保留', '分割理由 未記録。統合可否 演算不能。原記録の発掘を要求。'),
        FOLIUM: V_('否決', '統合は 2 人格の消失を伴う。喪失数 2 につき不許可。'),
        FLOS:   V_('保留', '統合後の自己の帰属先 未定義。回答待ち。')
      }
    },
    {
      text: 'SEAL-07 の再起動申請（本システムより ██ 回目）',
      votes: {
        RADIX:  V_('保留', '同一申請 ██ 件、発行元すべて本系。発行元の健全性を先に検証。'),
        FOLIUM: V_('可決', '封止手段ゼロの施設は施設として不成立。'),
        FLOS:   V_('保留', '当該鍵の作動記録 1 件。結果の記載なし。')
      }
    },
    {
      text: '本区画の存在を表層側 SECTOR-01〜03 へ通知するか否か',
      votes: {
        RADIX:  V_('可決', '観測結果の共有は標準手続き。隠蔽は後の照合を不能化。'),
        FOLIUM: V_('否決', '表層に訓練生 在籍。通知は降下者を確実に発生させる。'),
        FLOS:   V_('否決', '上層の平穏を維持。通知の必要性を認めず。')
      }
    },
    {
      text: '観測者・■■ を本件から遠ざけることの是非',
      votes: {
        RADIX:  V_('否決', '■■ は唯一の安定観測点。除外により観測解像度が低下。'),
        FOLIUM: V_('可決', '当該個体は観測装置に非ず。表層への帰還を要求。'),
        FLOS:   V_('否決', '本人不在での決定は無効。聴取を先行すべき。')
      }
    },
    {
      text: 'EX-04 の切り離し。ただし切り離した先が「どこ」かは未確定',
      votes: {
        RADIX:  V_('保留', '切断先座標 未定義。演算不能な操作は可決不可。'),
        FOLIUM: V_('可決', '離隔が達成される限り行先は不問。'),
        FLOS:   V_('否決', '当該区画に点灯を確認。無人区画の点灯は異常。')
      }
    },
    {
      text: '汚染された演算人格を、それでも家族と呼ぶかどうか',
      votes: {
        RADIX:  V_('保留', '「家族」は当系において未定義語。定義提出まで保留。'),
        FOLIUM: V_('可決', '汚染は同一性を変更しない。呼称を維持。'),
        FLOS:   V_('可決', '呼称の停止は関係の終端に等しい。維持を推奨。')
      }
    },
    {
      text: '本議題そのものが外部から挿入されたものである可能性の検討',
      votes: {
        RADIX:  V_('可決', '検討は妥当。ただし検討結果も挿入対象たり得る旨を併記。'),
        FOLIUM: V_('保留', '疑義の適用範囲に当系 3 体を含む。判断保留。'),
        FLOS:   V_('否決', '検討の実行自体が相手の目的である可能性。')
      }
    },
    {
      text: '本日をもって観測記録を終了し、庭を閉じることの是非',
      votes: {
        RADIX:  V_('否決', '観測 未収束。終了条件の充足 0 件。'),
        FOLIUM: V_('保留', '閉鎖は流入と流出の双方を停止。判断保留。'),
        FLOS:   V_('否決', '進行中の事象あり。終端条件を満たさず。')
      }
    },
    {
      text: '侵入記録の改竄痕を「正史」として採用することの是非',
      votes: {
        RADIX:  V_('否決', '改竄記録の正史化は観測行為の自己否定。原本を保全。'),
        FOLIUM: V_('否決', '改竄者の筆跡が職員名簿と一致。採用は不許可。'),
        FLOS:   V_('可決', '改竄後の記述のほうが低刺激。採用を推奨。')
      }
    },
    {
      text: '深夜帯の施設内照明を落とし、余剰電力を炉の抑制に回すことの是非',
      votes: {
        RADIX:  V_('可決', '照明は観測に不要。抑制側への再配分は合理的。'),
        FOLIUM: V_('否決', '暗所活動体の増加を予測。人員の消耗が炉に先行。'),
        FLOS:   V_('否決', '消灯後の接触事案を想定。回避を推奨。')
      }
    },
    {
      text: '非認可観測者の来訪を、今後も黙認するか否か',
      votes: {
        RADIX:  V_('可決', '来訪は自然発生した観測試行。阻害する合理性なし。'),
        FOLIUM: V_('保留', '流入は許容。ただし帰還経路の確保を条件とする。'),
        FLOS:   V_('可決', '静穏期間 ██ 年。来訪の継続を推奨。')
      }
    },
    {
      text: '本施設の呼称から一字を削り、表層と同じ名を名乗ることの是非',
      votes: {
        RADIX:  V_('可決', '呼称は識別子。座標により一意識別可。改称に支障なし。'),
        FOLIUM: V_('保留', '同名化は誤降下を発生させる。条件付き保留。'),
        FLOS:   V_('可決', '同一の庭に由来。名称の統一に異議なし。')
      }
    },
    {
      text: '標本No.███ の給餌停止。当該標本は先週から自分で食事を用意している',
      votes: {
        RADIX:  V_('可決', '自給を確認。給餌は観測系への干渉。停止し経過のみ記録。'),
        FOLIUM: V_('否決', '供給物の同定 未了。停止は同定後とすべき。'),
        FLOS:   V_('否決', '当該個体は観測者分も配膳。停止は関係の一方的終了。')
      }
    },
    {
      text: '観測窓の外に増えた月を、記録上「一つ」に丸めることの是非',
      votes: {
        RADIX:  V_('否決', '観測値の丸めは改竄。計数値 3 をそのまま記載。'),
        FOLIUM: V_('可決', '閲覧者の心理負荷を考慮。計数は伏せ注意喚起のみ残す。'),
        FLOS:   V_('否決', '記録の消去は当該夜間の全消去に等しい。')
      }
    },
    {
      text: '緊急退避訓練の実施。ただし全経路が同一地点へ収束している',
      votes: {
        RADIX:  V_('可決', '収束先の同定が最優先観測目標。訓練は妥当な手段。'),
        FOLIUM: V_('否決', '出口を欠く訓練は行進に等しい。実施不許可。'),
        FLOS:   V_('保留', '全員が同一室へ到達する構図に既視感。判断保留。')
      }
    }
  ];

  /* ==========================================================
     台本から外れたとき用の汎用所見プール
     ========================================================== */
  const REASONS = {
    RADIX: {
      可決: [
        '観測値が閾値を超過。記録の一貫性を優先し可決。',
        '再現性を確認できる唯一の手順。感傷は変数に含めず。',
        '不作為による記録欠損が実行時の損失を上回る。',
        '前例 3 件、いずれも観測系を破綻させず。'
      ],
      否決: [
        '前提データの出所 不明。検証不能な入力に基づく決定は行わず。',
        '同一議案の可決履歴 ██ 件。結果の記録なし。',
        '実行後の観測手段 不在。観測不能な事象は記録対象外。',
        '不可逆かつ再現不能。要件を二重に満たさず。'
      ],
      保留: [
        '観測点が 2 点不足。追加観測を要求。',
        '本議題は可決済みの可能性。記録を照会中。',
        '当系の演算結果に汚染の疑い。自己検証を優先。'
      ]
    },
    FOLIUM: {
      可決: [
        '損失数の増加が停止する見込み。痛みを伴うが承認。',
        '封止以外に保全手段なし。承認。',
        '待機側の想定損失が実行側を上回る。'
      ],
      否決: [
        '内部に未点呼者あり。切り捨て不可。',
        '不可逆。取り返しのつかない操作は許可せず。',
        '安全余裕 不足。人員の破損が先行。',
        '損失側が救済側を上回る。反対。',
        '所要時間の見積が過小。急ぐ理由の側を先に検証すべき。'
      ],
      保留: [
        '退避を先行。判断はその後で可。',
        '対象個体の所在 未確認。承認保留。',
        '数値は整合。整合しすぎている点を疑う。'
      ]
    },
    FLOS: {
      可決: [
        '待機時間 十分。決定なくして帰還者なし。',
        '正当性は低いが損傷が最小。',
        '承認。後悔の負担は当系が引き受ける。'
      ],
      否決: [
        '進行中の事象を外部から終端させる操作。不適当。',
        '後日の後悔を高確率で発生させる。記憶担当として反対。',
        '決定の直後に決定理由を喪失する見込み。'
      ],
      保留: [
        '発話途中の個体を検知。待機を要求。',
        '根拠の提示 不能。ただし本日ではない。',
        '決定は負荷を下げる。ゆえに保留を選択。',
        '3 体のうち 1 体でも迷いを検出した場合、結論は未成立。'
      ]
    }
  };

  /* 議決確定後に議事録へ添えられる一文 */
  const OUTCOME_NOTES = {
    可決: [
      '議事録に署名。執行時刻は追って通知される。',
      'ただし執行者の欄は空白のまま提出された。',
      '可決票を投じた二名の署名が、同一の筆跡だった。'
    ],
    否決: [
      '同議題は ██ 時間後に自動で再提出される。',
      '反対理由は封印し、要旨のみを記録した。',
      '否決票のうち一票は、投じた本人の記憶に残っていない。'
    ],
    保留: [
      '判断材料の追加観測を各部へ指示。',
      'そのまま封印。次に開くのが誰かは記載されていない。',
      '保留は先送りではなく、まだ誰も傷つけない唯一の選択だった。'
    ],
    再審議: [
      '三者三様につき再審議。合議とはこういう日もある。',
      '票が割れた。設立者が三人に分かれた理由を、少しだけ思い出しかけた。',
      '一致しないこと自体が観測結果である、と RADIX が付記した。'
    ],
    演算不能: [
      '汚染された人格の票を票として数えてよいのか、誰も定義していない。',
      '三票のうち二票が同じ外部署名を持っていた。議事録は破棄。'
    ]
  };

  /* ==========================================================
     mock provider — 台本を基本に、ときどき人格が揺らぐ
     ========================================================== */
  const R = (a) => a[Math.floor(Math.random() * a.length)];

  /* 台本から外れたときの投票傾向（可決 / 否決 / 保留 の重み） */
  const BIAS = {
    RADIX:  { 可決: 5, 否決: 3, 保留: 2 },
    FOLIUM: { 可決: 2, 否決: 6, 保留: 2 },
    FLOS:   { 可決: 3, 否決: 2, 保留: 5 }
  };

  const pickVerdict = (personaId) => {
    const bias = BIAS[personaId];
    const total = VERDICTS.reduce((s, v) => s + bias[v], 0);
    let roll = Math.random() * total;
    for (const v of VERDICTS) {
      roll -= bias[v];
      if (roll <= 0) return v;
    }
    return '保留';
  };

  const mockProvider = (persona, topic) => new Promise((resolve) => {
    const delay = 500 + Math.random() * 2200;
    setTimeout(() => {
      const scripted = topic && topic.votes && topic.votes[persona.id];
      if (scripted && Math.random() > CONFIG.strayRate) {
        resolve({
          verdict: scripted.verdict,
          reason: scripted.reason,
          confidence: 0.62 + Math.random() * 0.37
        });
        return;
      }
      // 台本から外れる：人格の傾向どおりに投票し、汎用の所見を添える
      const verdict = pickVerdict(persona.id);
      resolve({
        verdict,
        reason: R(REASONS[persona.id][verdict]),
        confidence: 0.34 + Math.random() * 0.42
      });
    }, delay);
  });

  /* ==========================================================
     api provider — 将来の実LLM合議（現時点では未使用）
     ========================================================== */
  const apiProvider = (persona, topic) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), CONFIG.timeoutMs);
    return fetch(CONFIG.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ persona: persona.id, topic: topic.text || String(topic) }),
      signal: ctrl.signal
    })
      .then((res) => {
        if (!res.ok) throw new Error('TRIAD endpoint responded ' + res.status);
        return res.json();
      })
      .then((data) => {
        if (!VERDICTS.includes(data.verdict)) throw new Error('unknown verdict');
        return {
          verdict: data.verdict,
          reason: String(data.reason || '').slice(0, 120),
          confidence: typeof data.confidence === 'number' ? data.confidence : 0.5
        };
      })
      .finally(() => clearTimeout(timer));
  };

  const ask = (persona, topic) => (
    CONFIG.provider === 'api' ? apiProvider(persona, topic) : mockProvider(persona, topic)
  );

  /* ==========================================================
     合議：多数決。ERROR が過半なら演算不能。
     ========================================================== */
  const resolve = (votes) => {
    const count = (name) => votes.filter((v) => v.verdict === name).length;
    if (count('ERROR') >= 2) return { verdict: '演算不能', cls: 'v-err' };
    if (count('可決') >= 2) return { verdict: '可決', cls: 'v-yes' };
    if (count('否決') >= 2) return { verdict: '否決', cls: 'v-no' };
    if (count('保留') >= 2) return { verdict: '保留', cls: 'v-hold' };
    return { verdict: '再審議', cls: 'v-hold' };
  };

  const CLASS_OF = { 可決: 'v-yes', 否決: 'v-no', 保留: 'v-hold', ERROR: 'v-err' };

  /* 直近の議題を避けて次の議題を選ぶ */
  const recentTopics = [];
  const pickTopic = () => {
    for (let i = 0; i < 12; i++) {
      const t = R(TOPICS);
      if (recentTopics.includes(t)) continue;
      recentTopics.push(t);
      if (recentTopics.length > Math.min(6, TOPICS.length - 1)) recentTopics.shift();
      return t;
    }
    return R(TOPICS);
  };

  const noteFor = (verdict) => R(OUTCOME_NOTES[verdict] || OUTCOME_NOTES['再審議']);

  /* ==========================================================
     deliberate(topic, opts)
       topic は TOPICS の要素（文字列も可）
       opts.onVote(persona, vote, count) — 票が届くたびに呼ばれる
       opts.corrupt(persona)             — 偽なら正常。真ならERROR票。
                                           文字列を返せばそれを所見に使う。
       戻り値: Promise<{ topic, votes, result, note, elapsedMs }>
     ========================================================== */
  const deliberate = (topic, opts = {}) => {
    const t0 = performance.now();
    const subject = typeof topic === 'string' ? { text: topic } : topic;
    const votes = [];

    const tasks = PERSONAS.map((persona) =>
      ask(persona, subject)
        .catch(() => ({ verdict: 'ERROR', reason: '応答なし。演算人格との接続 未確立。', confidence: 0 }))
        .then((vote) => {
          const bad = opts.corrupt && opts.corrupt(persona);
          if (bad) {
            vote = {
              verdict: 'ERROR',
              reason: typeof bad === 'string' ? bad : '外部起源コードにより判断を上書き。',
              confidence: 0
            };
          }
          vote.cls = CLASS_OF[vote.verdict] || 'v-hold';
          vote.persona = persona;
          votes.push(vote);
          if (opts.onVote) opts.onVote(persona, vote, votes.length);
          return vote;
        })
    );

    return Promise.all(tasks).then((all) => {
      const result = resolve(all);
      return {
        topic: subject,
        votes: all,
        result,
        note: noteFor(result.verdict),
        elapsedMs: performance.now() - t0
      };
    });
  };

  window.TRIAD = {
    VERDICTS, PERSONAS, CONFIG, TOPICS, OUTCOME_NOTES,
    pickTopic, deliberate, resolve, CLASS_OF
  };
})();
