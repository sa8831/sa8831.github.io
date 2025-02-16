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

// Show the first slide initially
showSlide(slideIndex);

// Auto-slide every 3 seconds (optional)
setInterval(() => changeSlide(1), 3000);
