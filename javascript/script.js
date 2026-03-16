const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');


let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

next.addEventListener('click', () => {
    index = (index + 1) % cards.length;
    updateCarousel();
});

prev.addEventListener('click', () => {
    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
    });
});

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

