const faScript = document.createElement("script");
faScript.src = CONFIG.FONT_LINK;
faScript.crossOrigin = "anonymous";
document.head.appendChild(faScript);

const hamburger = document.querySelector('.hamburger');
const nav_section = document.querySelector('.nav_section');

hamburger.addEventListener('click', () => {
    nav_section.classList.toggle('nav--open');
    hamburger.classList.toggle('hamburger--open');
});

document.querySelectorAll('.view-project').forEach(button =>{
   if (button.textContent.trim().toLowerCase() === 'in progress') {
      button.style.backgroundColor = '#FFD700'; 
      button.style.color = '#000'; 
      button.style.cursor = 'not-allowed';
    }
})