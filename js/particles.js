
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// === Utility ===
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// === Color ===
const twilightColors = ['#0e0e10', '#12121c', '#1c1c28', '#101018'];

// === Particle System ===
class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(0, canvas.width);
    this.y = random(0, canvas.height);
    this.size = random(1, 2.5);
    this.dx = random(-0.5, 0.5);
    this.dy = random(-0.5, 0.5);
    this.baseAlpha = random(0.3, 0.8);
    this.alpha = this.baseAlpha;
    this.color = ['#77ddff', '#ffffff', '#88bbff', '#ddddff'][Math.floor(Math.random() * 4)];
    this.pulse = Math.random() * Math.PI * 2;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

    this.pulse += 0.02;
    this.alpha = this.baseAlpha + 0.2 * Math.sin(this.pulse);

    this.draw();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// === Shooting Star ===
class ShootingStar {
  constructor(reverse = false) {
    const halfW = canvas.width * 0.5;
    const halfH = canvas.height * 0.5;
    this.x = reverse ? random(halfW, canvas.width) : random(0, halfW);
    this.y = random(0, halfH); // 出現範囲を上半分に限定
    this.len = random(80, 120);// 長さ
    this.speed = random(4, 8);// 速度
    this.angle = random(0, Math.PI / 2);// 方向
    this.opacity = 1;
  }

  update() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
    this.opacity -= 0.01;

    // グロー描画（背景影響を最小化）
    ctx.save(); // 現在の状態を保存
    ctx.globalCompositeOperation = 'lighter'; // 発光っぽくする
    ctx.shadowBlur = 8;
    ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x - this.len * Math.cos(this.angle),
      this.y - this.len * Math.sin(this.angle)
    );
    ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore(); // 状態を戻して他に影響しないようにする
  }

  isDead() {
    return this.opacity <= 0;
  }
}

// === Floating Dust ===
class Dust {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(0, canvas.width);
    this.y = random(0, canvas.height);
    this.size = random(1, 3);
    this.alpha = random(0.02, 0.05);
    this.dx = random(-0.1, 0.1);
    this.dy = random(-0.1, 0.1);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
    this.draw();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = this.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// === Aurora Background ===
let gradientOffset = 0;
function drawAurora() {
  gradientOffset += 0.001;
  const gradient = ctx.createRadialGradient(
    canvas.width / 2 + Math.sin(gradientOffset) * 200,
    canvas.height / 2 + Math.cos(gradientOffset) * 200,
    100,
    canvas.width / 2,
    canvas.height / 2,
    Math.max(canvas.width, canvas.height)
  );
  gradient.addColorStop(0, 'rgba(100, 149, 255, 0.05)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// === Twilight Background ===
let twilightIndex = 0;
let hue = 200; // 初期色（青系）
let hueShift = 0.1; // どれだけゆっくり変化するか（小さくすればゆっくり）

function drawTwilight() {
  hue += hueShift;
  if (hue > 300 || hue < 180) hueShift *= -1; // 色相の範囲で折り返す

  ctx.fillStyle = `hsl(${hue}, 30%, 6%)`; // 彩度30%、明度6%で幻想的な背景
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}


// === Initialization ===
let particles = [];
let shootingStars = [];
let dusts = [];

function init() {
  particles = [];
  dusts = [];
  for (let i = 0; i < 120; i++) particles.push(new Particle());
  for (let i = 0; i < 50; i++) dusts.push(new Dust());
}

function animate() {
  requestAnimationFrame(animate);
  drawTwilight();
  drawAurora();

  dusts.forEach(d => d.update());
  particles.forEach(p => p.update());

  shootingStars.forEach((s, i) => {
    s.update();
    if (s.isDead()) shootingStars.splice(i, 1);
  });

  if (Math.random() < 0.003) {
    shootingStars.push(new ShootingStar(Math.random() < 0.5));
  }
}

init();
animate();
