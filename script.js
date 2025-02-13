// Function to create stars
function createStar() {
    const starContainer = document.querySelector('.star-container');
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomize star position and size
    const size = Math.random() * 3 + 1; // Size between 1px and 4px
    const posX = Math.random() * window.innerWidth; // X position
    const posY = Math.random() * window.innerHeight; // Y position

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${posY}px`;
    star.style.left = `${posX}px`;

    // Append star to container
    starContainer.appendChild(star);
}

// Create 100 stars on page load
for (let i = 0; i < 100; i++) {
    createStar();
}
