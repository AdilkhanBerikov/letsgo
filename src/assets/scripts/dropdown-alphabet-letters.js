document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".dropdown-menu__grid button"); // Все кнопки стран
  const letterButtons = document.querySelectorAll(".dropdown-menu__letter"); // Кнопки букв алфавита
  let activeLetter = null; // Переменная для хранения текущей активной буквы

  letterButtons.forEach((letterButton) => {
    letterButton.addEventListener("click", function () {
      const letter = this.getAttribute("data-letter").toUpperCase(); // Получаем букву кнопки

      if (activeLetter === letter) {
        // Если уже нажата эта же буква → сбрасываем фильтр
        activeLetter = null;
        letterButtons.forEach((btn) => btn.blur()); // Убираем фокус у всех букв
        buttons.forEach((button) => button.style.display = "inline-block"); // Показываем все страны
      } else {
        // Если нажата новая буква → фильтруем страны
        activeLetter = letter;
        letterButtons.forEach((btn) => btn.blur()); // Убираем фокус у всех букв
        this.focus(); // Фокусируем текущую букву

        buttons.forEach((button) => {
          const countryName = button.textContent.trim().toUpperCase();
          button.style.display = countryName.startsWith(letter) ? "inline-block" : "none";
        });
      }
    });
  });
});
