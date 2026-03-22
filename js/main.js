document.addEventListener("DOMContentLoaded", function () {
  // 1. ヘッダーの読み込み
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      fadeInElements(); 
      
      // ヘッダーが画面に現れた「直後」にメニュー機能を起動する
      initHamburgerMenu();
      // Nexus表示演出
      animateNexusCards();
    });

  // 2. フッターの読み込み
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      const footerContainer = document.getElementById('footer-container');
      footerContainer.innerHTML = data;
      setTimeout(() => { fadeInElements(); }, 100);
    });
});

// アニメーション適用
function fadeInElements() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => { el.classList.add('active'); });
}

// ★ ハンバーガーメニューの機能を定義する関数
function initHamburgerMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navContainer = document.getElementById('navContainer');

  if (!menuToggle || !navContainer) return; // 要素がない場合は何もしない

  // ボタンをクリックした時の開閉
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menuToggle.classList.toggle('is-active');
    navContainer.classList.toggle('is-active');
  });

  // メニュー以外の場所をクリックした時に閉じる
  document.addEventListener('click', (e) => {
    if (navContainer.classList.contains('is-active')) {
      if (!navContainer.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('is-active');
        navContainer.classList.remove('is-active');
      }
    }
  });
}

// Nexus表示演出
function animateNexusCards() {
    const cards = document.querySelectorAll('.nexus-card');
    if (cards.length === 0) return;

    cards.forEach((card, index) => {
        // 0.6秒(600ms)ずつ間隔を空けて、ゆっくりスタートさせる
        setTimeout(() => {
            card.classList.add('is-visible');
        }, 300 + (600 * index)); 
    });
}

// 既存の DOMContentLoaded の中、あるいは window.onload で実行
window.addEventListener('load', animateNexusCards);