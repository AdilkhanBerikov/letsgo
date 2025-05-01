document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".page-header");
  const gridHeader = document.querySelector(".grid.-header.box"); // Находим .grid.-header.box
  const menu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav__list");
  const toggles = document.querySelectorAll(".toggle");
  const navLinks = document.querySelectorAll(".nav__link"); // Находим все ссылки меню

  function toggleMenu() {
    if (!menu || toggles.length === 0) return;
    menu.classList.toggle("-open");
    toggles.forEach((btn) => btn.classList.toggle("-active"));
  }

  function closeMenuOnClick(event) {
    if (!menu || toggles.length === 0) return;
    const nav = document.querySelector(".header__nav");

    if (!menu.contains(event.target) && !nav.contains(event.target)) {
      menu.classList.remove("-open");
      toggles.forEach((btn) => btn.classList.remove("-active"));
    }
  }

  function handleScroll() {
    const isDirectionPage = document.body.classList.contains("direction-page");
    const isCompanionsPage = document.body.classList.contains("companions-page");

    if (window.scrollY > 0) {
      header.classList.add("-scrolled");
      gridHeader.classList.add("-scrolled"); // Добавляем/убираем -scrolled
      navList.classList.add("-scrolled");
      navLinks.forEach((link) => link.classList.add("-scrolled")); // Добавляем класс к ссылкам

      if (isDirectionPage) {
        header.classList.remove("-alternate"); // Убираем только на direction-page
      }

      if (isCompanionsPage) {
        header.classList.remove("-alternate"); // Убираем только на direction-page
      }

    } else {
      header.classList.remove("-scrolled");
      gridHeader.classList.remove("-scrolled"); // Добавляем/убираем -scrolled
      navList.classList.remove("-scrolled");
      navLinks.forEach((link) => link.classList.remove("-scrolled")); // Убираем класс у ссылок

      if (isDirectionPage) {
        header.classList.add("-alternate"); // Возвращаем только на direction-page
      }

      if (isCompanionsPage) {
        header.classList.add("-alternate"); // Возвращаем только на direction-page
      }
    }
  }

  toggles.forEach((btn) => btn.addEventListener("click", toggleMenu));
  document.addEventListener("click", closeMenuOnClick);
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Запускаем сразу, чтобы проверить начальное состояние
});
