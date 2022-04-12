import './map.js'
import './slider.js'

const burger = document.querySelector('.js-navigation__toggle');
const menu = document.querySelector('.navigation__list');
const header = document.querySelector('.header-main__wrap');

burger.addEventListener('click', (evt) => {
  menu.classList.toggle('navigation__list--open');
  header.classList.toggle('header-main__wrap--open');
  burger.classList.toggle('navigation__toggle--close');

});
