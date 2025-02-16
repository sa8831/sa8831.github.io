let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const descriptions = document.getElementsByClassName("description");

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        descriptions[i].style.display = "none"; // Hide all descriptions
    }
    slides[index].style.display = "block";
    descriptions[index].style.display = "block"; // Show corresponding description
}

function changeSlide(step) {
    slideIndex += step;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
}

// Show first slide by default
showSlide(slideIndex);

// Optional: Auto-slide every 3 seconds
setInterval(() => changeSlide(1), 3000);
