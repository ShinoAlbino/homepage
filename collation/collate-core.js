/* ============================================================
   照合端末 AH-REG-003 ／ 書架と管轄

   照合端末（collation/index.html）と封緘ツール（archive/vault-build.mjs）が
   同じものを使う。表記の正規化と書架の定義を一つにしておくため。

   ・SHELF はサイト上に実在する文書番号の一覧。すべて公開情報である。
     奇魂（鏡）はこの一覧との照合、和魂（勾玉）は管轄（配列の機関）の確認に使う。
   ・正解はここに無い。正解は所蔵庫（archive/vault.json）の封の中にしか無い。
   ・番号を足すときは、サイト上に実在する表記だけを足すこと。
   ============================================================ */
(function (root) {
  'use strict';

  var KANJI = { '〇': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9 };
  var UNIT = { '十': 10, '百': 100, '千': 1000 };

  /* 漢数字の並び（例 三百四十五）を算用数字にする */
  function kanjiNum(s) {
    var total = 0, cur = 0;
    for (var i = 0; i < s.length; i++) {
      var c = s.charAt(i);
      if (c in KANJI) cur = cur * 10 + KANJI[c];
      else { total += (cur || 1) * UNIT[c]; cur = 0; }
    }
    return String(total + cur);
  }

  /* 全角・空白・桁区切り・各種ダッシュ・漢数字の揺れを吸収する */
  function norm(s) {
    return String(s == null ? '' : s)
      .normalize('NFKC')
      .toUpperCase()
      .replace(/[‐-―−ーｰ]/g, '-')
      .replace(/[\s,、]/g, '')
      .replace(/[〇一二三四五六七八九十百千]+/g, kanjiNum)
      .slice(0, 64);
  }

  /* 文書番号 → 管轄の機関。空配列は機構の文書（どの結界の内にも無い） */
  var SHELF_SRC = {
    /* 記録の間（機構） */
    'REG-001': [], 'REG-002': [], 'ANM-044': [], 'CHR-001': [],
    'TOL-001': [], 'TOL-002': [], 'TOL-003': [],
    'PCT-01': [], 'PCT-02': [], 'PCT-03': [], 'PCT-04': [], 'PCT-05': [], 'PCT-06': [],

    /* 第4188分館の分類記号。書架は G.N.A. の管轄、写は発行元の管轄でもある */
    'AH-4188-0001-A': ['GNA'], 'AH-4188-0002-A': ['GNA'], 'AH-4188-0003-B': ['GNA'],
    'AH-4188-0004-A': ['GNA'], 'AH-4188-0117-C': ['GNA'], 'AH-4188-0418-D': ['GNA'],
    'AH-4188-0124-A': ['GNA'],
    'AH-4188-0119-A': ['GNA', 'ETH'], 'AH-4188-0125-A': ['GNA', 'ETH'],
    'AH-4188-0126-A': ['GNA', 'ETH'], 'AH-4188-0127-A': ['GNA', 'ETH'],
    'AH-4188-0120-A': ['GNA', 'ACA'],
    'AH-4188-0121-A': ['GNA', 'BOF'],
    'AH-4188-0122-D': ['GNA', 'SHR'],
    'AH-4188-0123-A': ['GNA', 'VTI'],

    /* 箱庭世界倫理委員会 */
    '倫委 第八十八号': ['ETH'], '倫委 第百九号': ['ETH'], '倫委 第百十八号': ['ETH'],
    '倫委 第二百四号': ['ETH'], '倫委 第二百十一号': ['ETH'],
    '朱注 第 118 号': ['ETH'], '朱注 第 176 号': ['ETH'], '朱注 第 191 号': ['ETH'],
    '朱注 第 204 号': ['ETH'], '朱注 第 233 号': ['ETH'],

    /* 境界線観測財団 */
    'BOF-FLD-2026-0907': ['BOF'],
    '観測第 4,205 報': ['BOF'], '観測第 4,411 報': ['BOF'], '観測第 4,412 報': ['BOF'],
    '観測第 4,413 報': ['BOF'], '観測第 4,414 報': ['BOF'], '観測注意報 第 4,412 号': ['BOF'],

    /* VOID Tech Industries */
    'VTI-CAT-2026-03': ['VTI'], 'VTI-0000-1904': ['VTI'], 'VTI-0000-1903': ['VTI'],
    'VOID-C3': ['VTI'], 'PRB-Σ': ['VTI'], 'HK-07': ['VTI'], 'STB-12': ['VTI'],

    /* S.H.R.O.S. */
    'SHR-EXP-0417': ['SHR'], 'SHR-EXP-0402': ['SHR'],
    'SHR-PAP-0919': ['SHR'], 'SHR-PAP-0912': ['SHR'], 'SHR-PAP-0908': ['SHR'],
    'SHR-PAP-0903': ['SHR'], 'SHR-PAP-0891': ['SHR'], 'SHR-PAP-0877': ['SHR'],
    '実験記録 第 4,416 号': ['SHR'], '実験記録 第 4,417 号': ['SHR']
  };

  var SHELF = {};
  Object.keys(SHELF_SRC).forEach(function (k) { SHELF[norm(k)] = SHELF_SRC[k]; });

  /* 封の鍵の導出。ブラウザと Node の両方で同じ手順を踏む */
  var GATE = { id: 'AH-REG-003', kdf: { name: 'PBKDF2', hash: 'SHA-256', iterations: 200000 } };

  var api = { norm: norm, SHELF: SHELF, GATE: GATE };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.AHCollate = api;
})(this);
