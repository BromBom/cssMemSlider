const buttons = document.querySelectorAll('.slider-button');
const slides = document.querySelectorAll('.slide');
const texts = document.querySelectorAll('.text');

let isEnabled = true;
let slideIndex = 0;


function changeSlide(x) {
    slideIndex = (x + slides.length) % slides.length;
}

function hideSlide(direction) {
    isEnabled = false;
    slides[slideIndex].classList.add(direction);
    texts[slideIndex].classList.add(direction);
    slides[slideIndex].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
    texts[slideIndex].addEventListener('animationend', function() {
        this.classList.remove('active-text', direction);
    });
}

function showSlide(direction) {
    slides[slideIndex].classList.add('next', direction);
    texts[slideIndex].classList.add('next-text', direction);
    slides[slideIndex].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
    texts[slideIndex].addEventListener('animationend', function() {
        this.classList.remove('next-text', direction);
        this.classList.add('active-text');  
    })
}

function previousSlide(x) {
    hideSlide('to-right');
    changeSlide(x - 1);
    showSlide('from-left');
    for (let i = 0; i < 5; i++) {
        buttons[i].className = buttons[i].className.replace(' active-slider-button', '');
    }
    buttons[slideIndex].className += ' active-slider-button';
}

function nextSlide(x) {
    hideSlide('to-left');
    changeSlide(x + 1);
    showSlide('from-right');
    for (let i = 0; i < 5; i++) {
        buttons[i].className = buttons[i].className.replace(' active-slider-button', '');
    }
    buttons[slideIndex].className += ' active-slider-button';
}

buttons[0].addEventListener('click', function() {
    if (isEnabled && (buttons[0].className !== 'slider-button active-slider-button')) {
        previousSlide(1);
    }
});
buttons[1].addEventListener('click', function() {
    if (isEnabled && (buttons[1].className !== 'slider-button active-slider-button')) {
        previousSlide(2);
    }
});
buttons[2].addEventListener('click', function() {
    if (isEnabled && (buttons[2].className !== 'slider-button active-slider-button')) {
        previousSlide(3);
    }
});
buttons[3].addEventListener('click', function() {
    if (isEnabled && (buttons[3].className !== 'slider-button active-slider-button')) {
        previousSlide(4);
    }
});
buttons[4].addEventListener('click', function() {
    if (isEnabled && (buttons[4].className !== 'slider-button active-slider-button')) {
        previousSlide(0);
    }
});