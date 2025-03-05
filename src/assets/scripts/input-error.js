document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");
  const form = document.querySelector(".feedback-section__form");

  // Отключаем браузерную валидацию
  form.setAttribute("novalidate", "");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Останавливаем отправку формы

    if (!validateEmail(input.value)) {
      showError();
      return;
    }

    clearError();
    form.submit(); // Можно отправить форму, если всё хорошо
  });

  input.addEventListener("input", () => {
    if (validateEmail(input.value)) {
      clearError();
    }
  });

  function validateEmail(email) {
    return /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  function showError() {
    input.classList.add("is-error");
    input.value = ""; // Очищаем поле
    input.placeholder = "Введите e-mail"; // Меняем плейсхолдер
  }

  function clearError() {
    input.classList.remove("is-error");
    input.placeholder = "E-mail"; // Возвращаем стандартный плейсхолдер
  }
});
