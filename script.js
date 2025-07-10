document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('downloadBtn');
  const countdown = document.getElementById('countdown');
  if (btn && countdown) {
    let time = 5;
    const timer = setInterval(() => {
      time--;
      countdown.textContent = `Wait ${time} seconds...`;
      if (time <= 0) {
        clearInterval(timer);
        countdown.textContent = 'Click below to download:';
        btn.disabled = false;
      }
    }, 1000);
  }
});
function startDownload() {
  alert('Your download will start shortly...');
  window.location.href = 'https://example.com/sample.apk';
}
