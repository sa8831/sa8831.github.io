/* For the Sideshow */


let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

function changeSlide(step) {
    slideIndex += step;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
}

// Automatically show the first slide
showSlide(slideIndex);

// Optional: Auto-slide every 3 seconds
setInterval(() => changeSlide(1), 5000);



/* For the Rising Images */

document.addEventListener("DOMContentLoaded", function () {
    const risingImages = document.querySelectorAll(".rising");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    risingImages.forEach((img) => observer.observe(img));
});
