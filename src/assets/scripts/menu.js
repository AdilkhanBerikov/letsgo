// Импортируем функции из модулей
import { toggleMenu, closeMenuOnClick } from "./events.js";
import { handleScroll } from "./scroll.js";

// Ждем, пока загрузится весь HTML
document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".toggle"); // Находим все кнопки-бургеры

  // Вешаем обработчик на все бургеры
  toggles.forEach((btn) => {
    btn.addEventListener("click", function () {
      toggleMenu(); // Запускаем функцию переключения меню
    });
  });

  closeMenuOnClick(); // Запускаем функцию закрытия меню при клике вне его

  // Добавляем слушатель события скролла
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Запускаем функцию сразу, чтобы проверить состояние при загрузке
});
