const jinx = document.querySelector('.jinx-silhouette');

// Scroll animation for Jinx
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.7;
  const jinxTop = jinx.getBoundingClientRect().top;
  if (jinxTop < trigger) {
    jinx.classList.add('revealed');
  } else {
    jinx.classList.remove('revealed');
  }
});

// Paintbrush stroke
let painting = false;

document.addEventListener('mousemove', (e) => {
  drawStroke(e);
});


function drawStroke(e) {
  const tag = e.target.tagName.toLowerCase();
  if (['a', 'h3', 'p', 'iframe', 'img'].includes(tag)) return;

  const stroke = document.createElement('div');
  stroke.className = 'paint-stroke';

  const colors = ['#FF3CAC', '#00BFFF'];
  stroke.style.background = colors[Math.floor(Math.random() * colors.length)];
  stroke.style.left = `${e.pageX}px`;
  stroke.style.top = `${e.pageY}px`;

  document.body.appendChild(stroke);
  setTimeout(() => stroke.remove(), 1000);
}
