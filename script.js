
document.addEventListener('DOMContentLoaded', () => {
  // Search functionality
  const searchBox = document.querySelector('.search-box');
  const cards = document.querySelectorAll('.file-card');
  searchBox.addEventListener('input', () => {
    const value = searchBox.value.toLowerCase();
    cards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = name.includes(value) ? 'block' : 'none';
    });
  });

  // Download timer (on download.html)
  const downloadBtn = document.querySelector('#download-timer-btn');
  const countdown = document.querySelector('#countdown');
  if (downloadBtn && countdown) {
    let timer = 5;
    downloadBtn.disabled = true;
    countdown.innerText = `Wait ${timer} seconds...`;
    const interval = setInterval(() => {
      timer--;
      if (timer > 0) {
        countdown.innerText = `Wait ${timer} seconds...`;
      } else {
        clearInterval(interval);
        downloadBtn.disabled = false;
        countdown.innerText = 'Click the button below to download:';
      }
    }, 1000);
  }
});
