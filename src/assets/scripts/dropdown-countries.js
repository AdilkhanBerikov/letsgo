document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    const trigger = event.target.closest(".dropdown-trigger");
    const closeButton = event.target.closest(".dropdown-menu__button");
    const dropdown = document.querySelector(".dropdown-menu");
    const isDropdownOpen = dropdown.classList.contains("-open");

    // Если клик по букве или стране - не делаем ничего
    if (event.target.closest(".dropdown-menu__letter") || event.target.closest(".dropdown-menu__grid button")) {
      event.stopPropagation(); // Останавливаем всплытие
      return;
    }

    // Если дропдаун уже открыт, клик по кнопке закрытия - закрываем
    if (isDropdownOpen && closeButton) {
      dropdown.classList.remove("-open");
      return;
    }

    // Если клик был вне дропдауна и он открыт - закрываем его
    if (isDropdownOpen && !dropdown.contains(event.target) && !trigger) {
      dropdown.classList.remove("-open");
      return;
    }

    // Открываем дропдаун только если он был закрыт
    if (!isDropdownOpen && trigger) {
      dropdown.classList.add("-open");
    }
  });
});
