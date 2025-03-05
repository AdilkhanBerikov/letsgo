document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".rate-section__button"); // Кнопка открытия
  const closeButton = document.querySelector(".business-rates__button"); // Кнопка закрытия
  const modal = document.querySelector(".modal"); // Модальное окно
  const body = document.body; // Для блокировки скролла

  function openModal() {
    modal.classList.add("is-active");
    body.classList.add("no-scroll"); // Блокируем скролл
  }

  function closeModal() {
    modal.classList.remove("is-active");
    body.classList.remove("no-scroll"); // Разблокируем скролл
  }

  openButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);

  // Закрытие по клику на затемненный фон
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
