// =======================
// Mode Toggle Logic
// =======================
const body = document.body;
const piltoverBtn = document.getElementById("piltover-btn");
const zaunBtn = document.getElementById("zaun-btn");

// =======================
// Music Setup
// =======================
const musicToggle = document.getElementById("music-toggle");
const piltoverMusic = new Audio("audio/piltover.mp3");
const zaunMusic = new Audio("audio/zaun.mp3");
let isMusicPlaying = false;

piltoverMusic.loop = true;
zaunMusic.loop = true;

// =======================
// Theme Switching
// =======================
function switchToPiltover() {
  body.classList.remove("zaun-mode");
  body.classList.add("piltover-mode");
  if (isMusicPlaying) {
    zaunMusic.pause();
    piltoverMusic.play();
  }
}

function switchToZaun() {
  body.classList.remove("piltover-mode");
  body.classList.add("zaun-mode");
  if (isMusicPlaying) {
    piltoverMusic.pause();
    zaunMusic.play();
  }
}

piltoverBtn.addEventListener("click", switchToPiltover);
zaunBtn.addEventListener("click", switchToZaun);

// =======================
// Music Toggle
// =======================
musicToggle.addEventListener("click", () => {
  if (!isMusicPlaying) {
    if (body.classList.contains("piltover-mode")) {
      piltoverMusic.play();
    } else {
      zaunMusic.play();
    }
    isMusicPlaying = true;
    musicToggle.textContent = "🔇 Pause Music";
  } else {
    piltoverMusic.pause();
    zaunMusic.pause();
    isMusicPlaying = false;
    musicToggle.textContent = "🎵 Music";
  }
});

// =======================
// Character Scroll Animation (Improved)
// =======================
const jayce = document.querySelector(".piltover-silhouette");
const jinx = document.querySelector(".zaun-silhouette");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.75;

  if (body.classList.contains("piltover-mode") && jayce) {
    const jayceTop = jayce.getBoundingClientRect().top;
    if (jayceTop < triggerBottom && jayceTop > -300) {
      jayce.classList.add("revealed");
    } else {
      jayce.classList.remove("revealed");
    }
  }

  if (body.classList.contains("zaun-mode") && jinx) {
    const jinxTop = jinx.getBoundingClientRect().top;
    if (jinxTop < triggerBottom && jinxTop > -300) {
      jinx.classList.add("revealed");
    } else {
      jinx.classList.remove("revealed");
    }
  }
});

// =======================
// Background Click Effects
// =======================
document.addEventListener("click", (e) => {
  const tag = e.target.tagName.toLowerCase();
  if (["button", "img", "nav", "a", "iframe", "p", "h1", "h2", "h3", "ul", "li"].includes(tag)) return;

  const dot = document.createElement("div");

  if (body.classList.contains("piltover-mode")) {
    dot.className = "hextech-dot";
  } else {
    dot.className = "zaun-spray";
  }

  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;
  document.body.appendChild(dot);

  setTimeout(() => dot.remove(), 600);
});
