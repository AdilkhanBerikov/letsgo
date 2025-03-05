document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".input");

  input.addEventListener("input", function () {
    if (input.validity.valid) {
      input.style.setProperty("--placeholder-color", "var(--color-grey-dark-opacity)"); // Возвращаем серый
      input.placeholder = "E-mail";
    } else {
      input.style.setProperty("--placeholder-color", "red"); // Меняем на красный
      input.placeholder = "Введите e-mail";
    }
  });
});
