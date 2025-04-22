const likeButtons = document.querySelectorAll('.selection-section__like-button');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('-active');
  });
});
