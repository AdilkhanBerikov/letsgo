document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input-id");
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
    form.submit(); // Если форма отправляется стандартно
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
  }

  function clearError() {
    input.classList.remove("is-error");
  }
});
