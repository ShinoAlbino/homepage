document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    fetch('footer.html')
      .then(response => {
        if (!response.ok) throw new Error('footer.html 読み込み失敗');
        return response.text();
      })
      .then(data => {
        footerContainer.innerHTML = data;
        if (typeof initSessionId === 'function') initSessionId();
      })
      .catch(error => console.error('フッター読み込みエラー:', error));
  }
});
