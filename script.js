const hamburger = document.querySelector('.hamburger');
const nav_section = document.querySelector('.nav_section');

hamburger.addEventListener('click', () => {
    nav_section.classList.toggle('nav--open');
    hamburger.classList.toggle('hamburger--open');
});