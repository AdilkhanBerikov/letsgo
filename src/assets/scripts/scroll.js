document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".page-header");
  const burger = document.querySelector(".toggle"); // Находим бургер

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("-scrolled"); // Добавляем класс к хедеру
    } else {
      header.classList.remove("-scrolled"); // Убираем класс
    }
  });
});
