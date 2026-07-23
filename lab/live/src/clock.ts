import type { Weather } from './types';

/**
 * 公転モデル風ホログラム時計(UIフェーズ2-5)。
 * 文字を一切使わず、恒星まわりを24時間で1周する惑星の「位置」で時刻を、
 * 軌道リングの4色弧で時間帯(1日4分割)を、惑星グリフ(昼=太陽/夜=月)で昼夜を表す。
 * 天気は中心上部に小さなアイコングリフで示す(取得失敗時は非表示)。
 * 外部ライブラリ不使用・SVG+少量JSで自己完結。
 */

const SVG_NS = 'http://www.w3.org/2000/svg';
const CX = 60;
const CY = 60;
const RX = 44; // 楕円の横半径(公転モデルらしく横長=少し傾けた見た目)
const RY = 30; // 縦半径

/** schedule.json と揃えた時間帯4分割の境界と色 */
const BANDS = [
  { from: 1, to: 6, cls: 'band-midnight' }, // 深夜: 濃紺
  { from: 6, to: 11, cls: 'band-morning' }, // 明け方: 淡い金/桜
  { from: 11, to: 18, cls: 'band-daytime' }, // 昼: cyan/白
  { from: 18, to: 25, cls: 'band-night' }, // 夜(18→翌1): 藍/紫
] as const;

/** 時刻h(0..24)→軌道上の座標。正午=最上部・深夜0時=最下部(未傾斜のローカル座標) */
function pointAt(h: number): [number, number] {
  const a = (h / 24) * Math.PI * 2;
  return [CX + RX * Math.sin(a), CY + RY * Math.cos(a)];
}

/** from〜to の弧を細かくサンプリングしてパス文字列を作る */
function arcPath(from: number, to: number): string {
  let d = '';
  for (let h = from; h <= to + 0.001; h += 0.2) {
    const [x, y] = pointAt(h);
    d += `${d === '' ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)} `;
  }
  return d.trim();
}

export class OrbitClock {
  private planet: SVGGElement;
  private sun: SVGGElement;
  private moon: SVGGElement;
  private wx: Record<Weather, SVGGElement>;
  private timer: number | null = null;

  constructor(
    private root: HTMLElement,
    private getHour: () => number,
    private getWeather: () => Weather | null,
  ) {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 120 120');
    svg.classList.add('orbit-svg');

    // 軌道群(少し傾けて立体感)。惑星も同群に入れ、傾きを共有する
    const tilt = document.createElementNS(SVG_NS, 'g');
    tilt.setAttribute('transform', `rotate(-16 ${CX} ${CY})`);

    for (const b of BANDS) {
      const p = document.createElementNS(SVG_NS, 'path');
      p.setAttribute('d', arcPath(b.from, b.to));
      p.setAttribute('class', `orbit-arc ${b.cls}`);
      p.setAttribute('fill', 'none');
      tilt.appendChild(p);
    }

    // 惑星マーカー(昼=太陽/夜=月を切替)
    this.planet = document.createElementNS(SVG_NS, 'g');
    this.planet.setAttribute('class', 'orbit-planet');
    this.sun = this.buildSun();
    this.moon = this.buildMoon();
    this.planet.append(this.sun, this.moon);
    tilt.appendChild(this.planet);

    // 中心の恒星(太陽グリフ)
    const core = document.createElementNS(SVG_NS, 'g');
    core.setAttribute('class', 'orbit-core');
    const star = document.createElementNS(SVG_NS, 'circle');
    star.setAttribute('cx', String(CX));
    star.setAttribute('cy', String(CY));
    star.setAttribute('r', '5');
    core.appendChild(star);

    // 天気グリフ(中心上部・アイコンのみ。既定は全非表示)
    this.wx = {
      clear: this.buildClear(),
      cloud: this.buildCloud(),
      rain: this.buildRain(),
      snow: this.buildSnow(),
    };
    const wxGroup = document.createElementNS(SVG_NS, 'g');
    wxGroup.setAttribute('transform', `translate(${CX} 14)`);
    wxGroup.setAttribute('class', 'orbit-wx');
    Object.values(this.wx).forEach((g) => {
      g.style.display = 'none';
      wxGroup.appendChild(g);
    });

    svg.append(tilt, core, wxGroup);
    this.root.appendChild(svg);

    this.update();
    // 45秒ごとに再計算(CSS transitionで滑らかに移動)
    this.timer = window.setInterval(() => this.update(), 45_000);
  }

  dispose(): void {
    if (this.timer !== null) window.clearInterval(this.timer);
    this.timer = null;
  }

  private update(): void {
    const h = ((this.getHour() % 24) + 24) % 24;
    const [x, y] = pointAt(h);
    this.planet.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;

    // 昼(6..18)は太陽、夜は月
    const day = h >= 6 && h < 18;
    this.sun.style.display = day ? '' : 'none';
    this.moon.style.display = day ? 'none' : '';

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
    // 晴れ: 光球+短い光条
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
    p.setAttribute(
      'd',
      'M -6,3 Q -6,-1 -2.5,-1 Q -1.5,-4 2,-3 Q 6,-3 6,1 Q 8,1 7,3 Z',
    );
    g.appendChild(p);
    return g;
  }

  private buildRain(): SVGGElement {
    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('class', 'wx-rain');
    const p = document.createElementNS(SVG_NS, 'path');
    // 雫
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
