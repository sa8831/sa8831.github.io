// =======================
// Paintbrush Stroke Effect
// =======================
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

  // Use clientX and clientY to stick to cursor
  stroke.style.left = `${e.clientX - 10}px`; // offset to center stroke
  stroke.style.top = `${e.clientY - 10}px`;

  document.body.appendChild(stroke);
  setTimeout(() => stroke.remove(), 500);
}

// =======================
// Randomize Doodle Positions
// =======================
window.addEventListener('DOMContentLoaded', () => {
  const doodles = document.querySelectorAll('.doodle');

  doodles.forEach(doodle => {
    const top = Math.floor(Math.random() * 80);   // 0%–80% vertically
    const left = Math.floor(Math.random() * 80);  // 0%–80% horizontally
    doodle.style.top = `${top}%`;
    doodle.style.left = `${left}%`;
  });
});
