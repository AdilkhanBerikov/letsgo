document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("email");
  const form = document.querySelector(".feedback-section__form");

  if (!input || !form) {
    console.error("Ошибка: элемент input или form не найден!");
    return;
  }

  const defaultPlaceholder = input.placeholder; // Сохраняем оригинальный плейсхолдер

  form.setAttribute("novalidate", "");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateEmail(input.value)) {
      showError();
      return;
    }

    clearError();
    console.log("Форма отправлена с email:", input.value);
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
    input.placeholder = "Введите e-mail"; // Меняем placeholder
    input.value = ""; // Очищаем поле
  }

  function clearError() {
    input.classList.remove("is-error");
    input.placeholder = defaultPlaceholder; // Возвращаем оригинальный placeholder
  }
});
