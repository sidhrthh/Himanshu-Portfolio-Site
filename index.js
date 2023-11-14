const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector('.nav-bar'); 
hamburger.addEventListener('click', () => { 
  navMenu.classList.toggle('hide'); 
});