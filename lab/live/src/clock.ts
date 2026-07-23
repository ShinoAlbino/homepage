import type { Weather } from './types';

/**
 * 公転モデル風ホログラム時計(UIフェーズ2-5 / オーラリー版)。
 * 文字を一切使わず、複数の惑星の「公転位置」で時刻を表す。
 *  - 外周の24時間枠 : 4色の時間帯バンド(深夜/明け方/昼/夜)。その上を
 *                     太陽(昼)/月(夜)マーカーが24時間で1周し、今の時間帯を示す。
 *  - 時針(hour)     : 12時間で1周。
 *  - 分針(minute)   : 1時間で1周。
 *  - 15分針(quarter): 15分で1周。
 *  - 秒針風(fast)   : 1分で1周。
 * 各惑星は半径・傾きの異なる楕円軌道に乗せ、天球儀のような立体感を出す。
 * 中心の恒星の色はAM/PMで切替。天気は中心上部に小さなアイコングリフで示す。
 * 外部ライブラリ不使用・SVG+少量JSで自己完結。
 */

const SVG_NS = 'http://www.w3.org/2000/svg';
const CX = 60;
const CY = 60;

type Period = 'hour' | 'minute' | 'quarter' | 'fast';

/** 内側の公転惑星: 横半径rx・縦半径ry・傾きtilt(度)・公転周期 */
const ORBITS: Array<{ rx: number; ry: number; tilt: number; period: Period; cls: string; r: number }> = [
  { rx: 41, ry: 27, tilt: -20, period: 'hour', cls: 'planet-hour', r: 3.4 },
  { rx: 32, ry: 23, tilt: 24, period: 'minute', cls: 'planet-minute', r: 2.8 },
  { rx: 23, ry: 16, tilt: -44, period: 'quarter', cls: 'planet-quarter', r: 2.3 },
  { rx: 15, ry: 10, tilt: 60, period: 'fast', cls: 'planet-fast', r: 1.8 },
];

/** 24時間枠(外周)の楕円と時間帯バンド。schedule.jsonの境界と揃える */
const DAY_RING = { rx: 52, ry: 36, tilt: -8 };
const BANDS = [
  { from: 1, to: 6, cls: 'band-midnight' }, // 深夜: 濃紺
  { from: 6, to: 11, cls: 'band-morning' }, // 明け方: 淡い金/桜
  { from: 11, to: 18, cls: 'band-daytime' }, // 昼: cyan/白
  { from: 18, to: 25, cls: 'band-night' }, // 夜(18→翌1): 藍/紫
] as const;

/** 楕円軌道上の座標。φ=0で最上部、時計回りに増加。tiltで傾ける */
function orbitPoint(rx: number, ry: number, tiltDeg: number, phi: number): [number, number] {
  const x0 = rx * Math.sin(phi);
  const y0 = -ry * Math.cos(phi);
  const t = (tiltDeg * Math.PI) / 180;
  const c = Math.cos(t);
  const s = Math.sin(t);
  return [CX + (x0 * c - y0 * s), CY + (x0 * s + y0 * c)];
}

/** 24時間枠上の座標。正午=最上部・深夜0時=最下部、朝は右・夕は左 */
function dayPoint(hour: number): [number, number] {
  const phi = Math.PI - (hour / 24) * Math.PI * 2;
  return orbitPoint(DAY_RING.rx, DAY_RING.ry, DAY_RING.tilt, phi);
}

/** from〜to(時)の弧を細かくサンプリングして24時間枠上のパス文字列を作る */
function bandPath(from: number, to: number): string {
  let d = '';
  for (let h = from; h <= to + 0.001; h += 0.2) {
    const [x, y] = dayPoint(h);
    d += `${d === '' ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)} `;
  }
  return d.trim();
}

/** 各周期に対応する位相角(rad)を、時刻(小数時間)から求める */
function phaseFor(period: Period, hoursFloat: number): number {
  const frac = (v: number) => v - Math.floor(v);
  switch (period) {
    case 'hour':
      return frac((hoursFloat % 12) / 12) * Math.PI * 2; // 12時間で1周
    case 'minute':
      return frac(hoursFloat) * Math.PI * 2; // 1時間で1周
    case 'quarter':
      return frac(hoursFloat / 0.25) * Math.PI * 2; // 15分で1周
    case 'fast':
      return frac(hoursFloat * 60) * Math.PI * 2; // 1分で1周
  }
}

export class OrbitClock {
  private planets: Array<{ g: SVGGElement; orbit: (typeof ORBITS)[number] }> = [];
  private core: SVGGElement;
  private sunMoon: SVGGElement;
  private sun = this.buildSun();
  private moon = this.buildMoon();
  private wx: Record<Weather, SVGGElement>;
  private raf = 0;
  private timer: number | null = null;

  constructor(
    private root: HTMLElement,
    private getHour: () => number,
    private getWeather: () => Weather | null,
  ) {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 120 120');
    svg.classList.add('orbit-svg');

    // 外周: 24時間枠の4色バンド
    for (const b of BANDS) {
      const p = document.createElementNS(SVG_NS, 'path');
      p.setAttribute('d', bandPath(b.from, b.to));
      p.setAttribute('class', `band-arc ${b.cls}`);
      p.setAttribute('fill', 'none');
      svg.appendChild(p);
    }

    // 内側の各軌道の楕円リング(薄い)
    for (const o of ORBITS) {
      const ring = document.createElementNS(SVG_NS, 'ellipse');
      ring.setAttribute('cx', String(CX));
      ring.setAttribute('cy', String(CY));
      ring.setAttribute('rx', String(o.rx));
      ring.setAttribute('ry', String(o.ry));
      ring.setAttribute('transform', `rotate(${o.tilt} ${CX} ${CY})`);
      ring.setAttribute('class', 'orbit-ring');
      svg.appendChild(ring);
    }

    // 中心の恒星(AM/PMで色替え)
    this.core = document.createElementNS(SVG_NS, 'g');
    this.core.setAttribute('class', 'orbit-core');
    const star = document.createElementNS(SVG_NS, 'circle');
    star.setAttribute('cx', String(CX));
    star.setAttribute('cy', String(CY));
    star.setAttribute('r', '5');
    this.core.appendChild(star);
    svg.appendChild(this.core);

    // 24時間枠上を回る太陽/月マーカー
    this.sunMoon = document.createElementNS(SVG_NS, 'g');
    this.sunMoon.setAttribute('class', 'orbit-planet planet-day');
    this.sunMoon.append(this.sun, this.moon);
    svg.appendChild(this.sunMoon);

    // 内側の公転惑星(リングより前面)
    for (const o of ORBITS) {
      const g = document.createElementNS(SVG_NS, 'g');
      g.setAttribute('class', `orbit-planet ${o.cls}`);
      const c = document.createElementNS(SVG_NS, 'circle');
      c.setAttribute('r', String(o.r));
      g.appendChild(c);
      svg.appendChild(g);
      this.planets.push({ g, orbit: o });
    }

    // 天気グリフ(中心上部・アイコンのみ。既定は全非表示)
    this.wx = {
      clear: this.buildClear(),
      cloud: this.buildCloud(),
      rain: this.buildRain(),
      snow: this.buildSnow(),
    };
    const wxGroup = document.createElementNS(SVG_NS, 'g');
    wxGroup.setAttribute('transform', `translate(${CX} ${CY + 13})`);
    wxGroup.setAttribute('class', 'orbit-wx');
    Object.values(this.wx).forEach((g) => {
      g.style.display = 'none';
      wxGroup.appendChild(g);
    });
    svg.appendChild(wxGroup);

    this.root.appendChild(svg);

    // reduced-motion時は連続アニメせず、30秒ごとにスナップ更新
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.update();
      this.timer = window.setInterval(() => this.update(), 30_000);
    } else {
      const loop = () => {
        this.update();
        this.raf = requestAnimationFrame(loop);
      };
      this.raf = requestAnimationFrame(loop);
    }
  }

  dispose(): void {
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this.timer !== null) window.clearInterval(this.timer);
    this.raf = 0;
    this.timer = null;
  }

  /** 昼夜・AM/PMや時針の位置は getHour()(?hour=で偽装可)、分/秒は実時刻で滑らかに動かす */
  private nowHoursFloat(): { hourHand: number; subHand: number } {
    const hourHand = ((this.getHour() % 24) + 24) % 24; // 偽装対応(分解能=分)
    const nowJst = new Date(Date.now() + 9 * 60 * 60 * 1000);
    const subHand =
      nowJst.getUTCHours() +
      nowJst.getUTCMinutes() / 60 +
      nowJst.getUTCSeconds() / 3600 +
      nowJst.getUTCMilliseconds() / 3.6e6;
    return { hourHand, subHand };
  }

  private update(): void {
    const { hourHand, subHand } = this.nowHoursFloat();

    // 24時間枠上の太陽/月(位置=実時間帯)
    const [dx, dy] = dayPoint(hourHand);
    this.sunMoon.setAttribute('transform', `translate(${dx.toFixed(2)} ${dy.toFixed(2)})`);
    const day = hourHand >= 6 && hourHand < 18;
    this.sun.style.display = day ? '' : 'none';
    this.moon.style.display = day ? 'none' : '';

    // 内側の公転惑星
    for (const { g, orbit } of this.planets) {
      const base = orbit.period === 'hour' ? hourHand : subHand;
      const phi = phaseFor(orbit.period, base);
      const [x, y] = orbitPoint(orbit.rx, orbit.ry, orbit.tilt, phi);
      g.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)})`);
    }

    // 中心の恒星: AM(0..12)/PM(12..24)で色替え
    const pm = hourHand >= 12;
    this.core.classList.toggle('is-am', !pm);
    this.core.classList.toggle('is-pm', pm);

    const w = this.getWeather();
    (['clear', 'cloud', 'rain', 'snow'] as Weather[]).forEach((k) => {
      this.wx[k].style.display = w === k ? '' : 'none';
    });
  }

  private buildSun(): SVGGElement {
    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('class', 'planet-sun');
    const c = document.createElementNS(SVG_NS, 'circle');
    c.setAttribute('r', '4');
    g.appendChild(c);
    for (let i = 0; i < 8; i++) {
      const ray = document.createElementNS(SVG_NS, 'line');
      const a = (i / 8) * Math.PI * 2;
      ray.setAttribute('x1', (Math.cos(a) * 5.5).toFixed(2));
      ray.setAttribute('y1', (Math.sin(a) * 5.5).toFixed(2));
      ray.setAttribute('x2', (Math.cos(a) * 7.5).toFixed(2));
      ray.setAttribute('y2', (Math.sin(a) * 7.5).toFixed(2));
      g.appendChild(ray);
    }
    return g;
  }

  private buildMoon(): SVGGElement {
    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('class', 'planet-moon');
    const p = document.createElementNS(SVG_NS, 'path');
    // 三日月: 大円から小円を欠いた形
    p.setAttribute('d', 'M 1.4,-4 A 4,4 0 1,0 1.4,4 A 5,5 0 0,1 1.4,-4 Z');
    g.appendChild(p);
    return g;
  }

  private buildClear(): SVGGElement {
    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('class', 'wx-clear');
    const c = document.createElementNS(SVG_NS, 'circle');
    c.setAttribute('r', '3');
    g.appendChild(c);
    for (let i = 0; i < 8; i++) {
      const ray = document.createElementNS(SVG_NS, 'line');
      const a = (i / 8) * Math.PI * 2;
      ray.setAttribute('x1', (Math.cos(a) * 4).toFixed(2));
      ray.setAttribute('y1', (Math.sin(a) * 4).toFixed(2));
      ray.setAttribute('x2', (Math.cos(a) * 5.5).toFixed(2));
      ray.setAttribute('y2', (Math.sin(a) * 5.5).toFixed(2));
      g.appendChild(ray);
    }
    return g;
  }

  private buildCloud(): SVGGElement {
    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('class', 'wx-cloud');
    const p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', 'M -6,3 Q -6,-1 -2.5,-1 Q -1.5,-4 2,-3 Q 6,-3 6,1 Q 8,1 7,3 Z');
    g.appendChild(p);
    return g;
  }

  private buildRain(): SVGGElement {
    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('class', 'wx-rain');
    const p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', 'M 0,-4 C 3,0 3,4 0,4 C -3,4 -3,0 0,-4 Z');
    g.appendChild(p);
    return g;
  }

  private buildSnow(): SVGGElement {
    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('class', 'wx-snow');
    for (let i = 0; i < 3; i++) {
      const line = document.createElementNS(SVG_NS, 'line');
      const a = (i / 3) * Math.PI;
      line.setAttribute('x1', (Math.cos(a) * -4.5).toFixed(2));
      line.setAttribute('y1', (Math.sin(a) * -4.5).toFixed(2));
      line.setAttribute('x2', (Math.cos(a) * 4.5).toFixed(2));
      line.setAttribute('y2', (Math.sin(a) * 4.5).toFixed(2));
      g.appendChild(line);
    }
    return g;
  }
}
