let headerMenu= document.querySelector('.menu');
let menuButton = document.querySelector('.menu__button');
let header= document.querySelector('.header__wrapper');

headerMenu.classList.remove('menu--nojs');
header.classList.remove('header__wrapper--nojs');

menuButton.addEventListener('click', function () {
  headerMenu.classList.toggle('menu--active')
});
