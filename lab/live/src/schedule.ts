import type { Program, ScheduleDB } from './types';

/**
 * 現在のJST時刻(0..24未満の実数)を返す。
 * テスト用に `?hour=22` クエリで時刻を偽装できる(受け入れ基準)。
 */
export function getJSTHour(): number {
  const q = new URLSearchParams(location.search).get('hour');
  if (q !== null && q !== '' && !Number.isNaN(Number(q))) {
    return ((Number(q) % 24) + 24) % 24;
  }
  const now = new Date();
  // JST = UTC+9。ローカルタイムゾーンに依存しない
  return ((now.getUTCHours() + 9) % 24) + now.getUTCMinutes() / 60;
}

/** hours [start, end) に hour が含まれるか。end>24 は日跨ぎ扱い */
export function inHours(hour: number, [start, end]: [number, number]): boolean {
  if (end > 24) {
    return hour >= start || hour < end - 24;
  }
  return hour >= start && hour < end;
}

/**
 * 現在のJST日付を {month, day} で返す。
 * テスト用に `?date=07-07` クエリで日付を偽装できる。
 */
export function getJSTDate(): { month: number; day: number } {
  const q = new URLSearchParams(location.search).get('date');
  if (q) {
    const m = /^(\d{1,2})-(\d{1,2})$/.exec(q);
    if (m) return { month: Number(m[1]), day: Number(m[2]) };
  }
  const now = new Date();
  // JST = UTC+9。JSTでの暦日を得るため9時間進めてUTC系ゲッタで読む
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return { month: jst.getUTCMonth() + 1, day: jst.getUTCDate() };
}

/** MM-DD を比較用の数値(月*100+日)へ */
function mmdd(month: number, day: number): number {
  return month * 100 + day;
}

/** 現在の月日が dateJST レンジ(両端含む)に入るか。from>to は年跨ぎ扱い */
export function inDateRange(
  month: number,
  day: number,
  range: { from: string; to: string },
): boolean {
  const parse = (s: string): number | null => {
    const m = /^(\d{1,2})-(\d{1,2})$/.exec(s);
    return m ? mmdd(Number(m[1]), Number(m[2])) : null;
  };
  const from = parse(range.from);
  const to = parse(range.to);
  if (from === null || to === null) return false;
  const cur = mmdd(month, day);
  // 年跨ぎ(例 12-30〜01-03): from>to のときは「from以上 または to以下」
  return from <= to ? cur >= from && cur <= to : cur >= from || cur <= to;
}

/**
 * 現在の月日が指定シーズンに属するか。
 * 季節は重複を許す: summer_end(8/20〜9/7)は summer / autumn とも重なりうる。
 */
export function matchesSeason(
  season: 'spring' | 'summer' | 'summer_end' | 'autumn' | 'winter',
  month: number,
  day: number,
): boolean {
  switch (season) {
    case 'spring':
      return month >= 3 && month <= 5;
    case 'summer':
      return month >= 6 && month <= 8;
    case 'summer_end':
      return (month === 8 && day >= 20) || (month === 9 && day <= 7);
    case 'autumn':
      return month >= 9 && month <= 11;
    case 'winter':
      return month === 12 || month <= 2;
    default:
      return false;
  }
}

/** 現在時刻に対応する番組を返す(該当なしは先頭) */
export function findProgram(db: ScheduleDB, hour: number): Program {
  return db.programs.find((p) => inHours(hour, p.hours)) ?? db.programs[0];
}

/** 次の番組と、その開始時刻(HH表記)を返す */
export function findNextProgram(db: ScheduleDB, hour: number): { program: Program; startHour: number } {
  const current = findProgram(db, hour);
  let best: { program: Program; startHour: number; diff: number } | null = null;
  for (const p of db.programs) {
    if (p.id === current.id) continue;
    const start = p.hours[0] % 24;
    let diff = start - hour;
    if (diff <= 0) diff += 24;
    if (!best || diff < best.diff) best = { program: p, startHour: start, diff };
  }
  return best ?? { program: current, startHour: current.hours[0] % 24 };
}
