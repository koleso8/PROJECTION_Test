const modal = document.querySelector('.popup-overlay');
const modalButton = document.querySelectorAll('.join-hero-link');
const closeModalButton = document.querySelector('.popup-close');

// document.addEventListener('DOMContentLoaded', () => {});

const handleOpenModal = () => {
  modal.classList.toggle('active');
  document.body.classList.toggle('isOpen');
};
modalButton.forEach(button =>
  button.addEventListener('click', handleOpenModal)
);
closeModalButton.addEventListener('click', handleOpenModal);

modal.addEventListener('click', event => {
  if (event.target === modal) {
    handleOpenModal();
  }
});
