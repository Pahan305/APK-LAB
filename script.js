// script.js

// Download countdown logic
document.addEventListener("DOMContentLoaded", () => {
  const countdownText = document.getElementById("countdownText");
  const downloadBtn = document.getElementById("downloadBtn");

  if (countdownText && downloadBtn) {
    let seconds = 5;
    const timer = setInterval(() => {
      seconds--;
      countdownText.textContent = `Please wait ${seconds} seconds before downloading...`;
      if (seconds === 0) {
        clearInterval(timer);
        downloadBtn.disabled = false;
        countdownText.textContent = "Click below to start downloading.";
        downloadBtn.onclick = () => {
          window.location.href = "assets/sample-app.apk"; // change to your real link
        };
      }
    }, 1000);
  }

  // Search filter (Homepage)
  const searchInput = document.getElementById("searchInput");
  const appCards = document.querySelectorAll(".app-card");

  if (searchInput && appCards.length) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      appCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(query) ? "block" : "none";
      });
    });
  }
});
