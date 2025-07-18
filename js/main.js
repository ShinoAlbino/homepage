document.addEventListener("DOMContentLoaded", function () {
  // ヘッダー読み込み
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      fadeInElements(); // ヘッダーのfade-in
    });

  // フッター読み込み
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      const footerContainer = document.getElementById('footer-container');
      footerContainer.innerHTML = data;

      // フッターにもfade-inを安定して適用
      setTimeout(() => {
        fadeInElements();
      }, 100);
    });
});

// アニメーションを適用する関数
function fadeInElements() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    el.classList.add('active');
  });
}
