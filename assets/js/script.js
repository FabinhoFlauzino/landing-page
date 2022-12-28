'use strict';

const addEventOnElement = function (element, type, callback){
  if(element.length > 1){
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, callback);
    }
  } else {
    element.addEventListener(type, callback);
  }
}

/**Navbar toggle */
const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const togglerNavBar = function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('active');
}

addEventOnElement(navTogglers, 'click', togglerNavBar);

const closeNavBar = function () {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('active');
}

addEventOnElement(navbarLinks, 'click', closeNavBar)

/**Ativando o header quando scroll maior que 100px */
const header = document.querySelector('[data-header]');

const activeElementOnScroll = function () {
  if(window.scrollY > 100){
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}

addEventOnElement(window, 'scroll', activeElementOnScroll)
