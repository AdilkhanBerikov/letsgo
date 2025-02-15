document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".page-header");
  const menu = document.querySelector(".mobile-menu");
  const toggles = document.querySelectorAll(".toggle");

  function toggleMenu() {
    if (!menu || toggles.length === 0) return;
    menu.classList.toggle("-open");
    toggles.forEach((btn) => btn.classList.toggle("-active"));
  }

  function closeMenuOnClick(event) {
    if (!menu || toggles.length === 0) return;
    const nav = document.querySelector(".header-nav");

    if (!menu.contains(event.target) && !nav.contains(event.target)) {
      menu.classList.remove("-open");
      toggles.forEach((btn) => btn.classList.remove("-active"));
    }
  }

  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add("-scrolled");
    } else {
      header.classList.remove("-scrolled");
    }
  }

  toggles.forEach((btn) => btn.addEventListener("click", toggleMenu));
  document.addEventListener("click", closeMenuOnClick);
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
