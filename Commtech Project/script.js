// Bubble toggle functionality
const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
    bubble.addEventListener('click', () => {
        const expanded = bubble.nextElementSibling;
        expanded.style.display = expanded.style.display === 'block' ? 'none' : 'block';
    });
});
