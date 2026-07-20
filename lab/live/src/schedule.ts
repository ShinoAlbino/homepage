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
