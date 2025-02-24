// Save third-page and fourth-page buttons as variables
let thirdButton = document.getElementById('third-page');
let fourthButton = document.getElementById('fourth-page');

// Add click event to both elements and set scrollPage function as callback function
thirdButton.addEventListener('click', scrollPage);
fourthButton.addEventListener('click', scrollPage);

function scrollPage(){
    if(this.id === 'third-page'){
        window.scrollTo({
            top: window.innerHeight * 2,
            left: 0,
            behavior: 'smooth'
        });
    }
    if(this.id === 'fourth-page'){
        window.scrollTo({
            top: window.innerHeight * 3,
            left: 0,
            behavior: 'smooth'
        });
    }
}

// Storytelling functionality
let stories = [
    'Hello!',
    'I am a cat, your storyteller.',
    'I am here to help you understand the world.',
    'It is a fictional world, but a world nonetheless.'
];

let catDiv = document.getElementById('BigC-div');
let catText = document.getElementById('BigC-text');
let navButtons = document.getElementsByClassName('nav-btn');

document.addEventListener('scroll', changeText);

function changeText(){
    let pos = window.scrollY;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let sectionNum = parseInt(pos / height);

    catText.innerHTML = stories[sectionNum];

    let maxSlide = width - catDiv.offsetWidth;
    let slidePosition = (pos / (height * 4)) * maxSlide;
    catDiv.style.left = slidePosition + 'px';

    for(let i = 0; i < navButtons.length; i++){
        navButtons[i].style.backgroundColor = 'white';
    }
    navButtons[sectionNum].style.backgroundColor = 'black';
}
