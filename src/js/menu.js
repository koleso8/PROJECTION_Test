const menu = document.querySelector('.menu-overlay');
const menuButton = document.querySelector('.header-menu-button');
const closeMenuButton = document.querySelector('.close-modal');

// document.addEventListener('DOMContentLoaded', () => {});

const handleOpenModal = () => {
  menu.classList.toggle('isOpen');
  document.body.classList.toggle('isOpen');
};
menuButton.addEventListener('click', handleOpenModal);
closeMenuButton.addEventListener('click', handleOpenModal);
