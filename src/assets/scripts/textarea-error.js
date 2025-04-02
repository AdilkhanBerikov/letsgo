document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".step__form");
  const textareas = form.querySelectorAll(".step__plans-textarea");

  form.addEventListener("submit", function (event) {
    let hasErrors = false;

    textareas.forEach((textarea) => {
      const errorMessage = textarea.parentNode.querySelector(".step__error-message");

      if (!textarea.value.trim() || textarea.value.length < textarea.minLength) {
        textarea.classList.add("-error");
        errorMessage.style.display = "flex"; // Показываем ошибку
        hasErrors = true;
      }
    });

    if (hasErrors) {
      event.preventDefault(); // Останавливаем отправку формы, если есть ошибки
    }
  });

  // Убираем ошибку при вводе
  textareas.forEach((textarea) => {
    textarea.addEventListener("input", function () {
      const errorMessage = this.parentNode.querySelector(".step__error-message");

      if (this.value.trim().length >= this.minLength) {
        this.classList.remove("-error");
        errorMessage.style.display = "none"; // Скрываем ошибку
      }
    });
  });
});
