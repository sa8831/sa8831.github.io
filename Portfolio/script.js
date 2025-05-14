const jinx = document.querySelector('.jinx-silhouette');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.75;
  const jinxTop = jinx.getBoundingClientRect().top;
  if (jinxTop < trigger && jinxTop > -300) {
    jinx.classList.add('revealed');
  } else {
    jinx.classList.remove('revealed');
  }
});

// Spray effect on click (not on project boxes)
document.addEventListener('click', (e) => {
  const tag = e.target.tagName.toLowerCase();
  if (['a', 'h3', 'p', 'iframe'].includes(tag)) return;

  const dot = document.createElement('div');
  dot.className = 'spray-dot';

  // Random pink or blue
  const colors = ['#FF3CAC', '#00BFFF'];
  dot.style.background = colors[Math.floor(Math.random() * colors.length)];

  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;

  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 600);
});
