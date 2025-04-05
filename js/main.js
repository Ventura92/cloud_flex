'use strict';

const burgerMenu = document.querySelector('.burger-menu');

const openMenu = ((event)=>{
  const burgerMenuList = document.querySelector('.burger-menu__list');

  burgerMenu.classList.toggle('menu--active');
  burgerMenuList.classList.toggle('menu--active');

});

burgerMenu.addEventListener('click',openMenu);