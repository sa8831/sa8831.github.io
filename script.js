// Add this JavaScript code in a <script> tag at the end of the HTML or in a separate .js file

window.onload = function() {
    // Create a container for the stars
    const starContainer = document.createElement('div');
    starContainer.id = 'starContainer';
    document.body.appendChild(starContainer);

    // Number of stars
    const starCount = 50;

    // Function to generate random values for positions, sizes, and animation
    function randomizeStar() {
        return {
            left: Math.random() * 100 + '%',          // Positioning the star randomly across the screen
            top: Math.random() * 100 + '%',           // Positioning the star randomly across the screen
            size: Math.random() * 2 + 1 + 'px',      // Random size between 1px and 3px
            duration: Math.random() * 2 + 5 + 's',    // Random spinning duration between 5s and 7s
        };
    }

    // Create stars
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const styles = randomizeStar();
        star.style.position = 'absolute';
        star.style.left = styles.left;
        star.style.top = styles.top;
        star.style.width = styles.size;
        star.style.height = styles.size;
        star.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Off-white color
        star.style.borderRadius = '50%';
        star.style.animation = `spin ${styles.duration} infinite linear`;
        
        starContainer.appendChild(star);
    }

    // Add the keyframe animation for spinning
    const styleSheet = document.styleSheets[0];
    const keyframes = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
};
