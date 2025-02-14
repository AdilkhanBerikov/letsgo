// Функция переключения меню (открытие/закрытие)
export function toggleMenu() {
  const menu = document.querySelector(".mobile-menu"); // Само мобильное меню
  const toggles = document.querySelectorAll(".toggle"); // Кнопки-бургеры

  if (!menu || toggles.length === 0) return; // Проверка наличия элементов

  menu.classList.toggle("-open"); // Переключаем класс

  // Меняем состояние бургера на крестик
  toggles.forEach((btn) => btn.classList.toggle("-active"));
}

// Функция закрытия меню при клике вне него (навешивается один раз)
export function closeMenuOnClick() {
  document.addEventListener("click", function (event) {
    const nav = document.querySelector(".header-nav");
    const menu = document.querySelector(".mobile-menu");
    const toggles = document.querySelectorAll(".toggle");

    if (!menu || !nav || toggles.length === 0) return; // Проверка

    // Если клик вне меню и вне хедера, закрываем
    if (!menu.contains(event.target) && !nav.contains(event.target)) {
      menu.classList.remove("-open");
      toggles.forEach((btn) => btn.classList.remove("-active"));
    }
  });
}
