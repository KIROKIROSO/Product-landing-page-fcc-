const hamburger = document.querySelector('.hamburger-container');
const navUl = document.querySelector('.nav-ul');
let menuOpen = false;

hamburger.addEventListener('click', () => {

  hamburger.classList.toggle('open');
  navUl.classList.toggle('show');

});