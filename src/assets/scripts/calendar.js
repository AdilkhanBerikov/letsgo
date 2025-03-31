document.addEventListener("DOMContentLoaded", function () {
  const calendarGrid = document.querySelector(".calendar__grid");
  const monthYearDisplay = document.querySelector(".calendar__month-year");
  const prevButton = document.querySelector(".calendar__prev");
  const nextButton = document.querySelector(".calendar__next");

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  function renderCalendar(month, year) {
    calendarGrid.innerHTML = "";
    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

    const today = new Date(); // Текущая дата
    today.setHours(0, 0, 0, 0); // Убираем время для корректного сравнения дат
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    const startDay = firstDay === 0 ? 6 : firstDay - 1; // Смещение дней недели

    // 🔹 Дни предыдущего месяца (неактивные)
    for (let i = startDay; i > 0; i--) {
      let prevDay = document.createElement("div");
      prevDay.classList.add("calendar__day", "-disabled");
      prevDay.textContent = prevLastDate - i + 1;
      calendarGrid.appendChild(prevDay);
    }

    // 🔹 Дни текущего месяца (активные)
    for (let i = 1; i <= lastDate; i++) {
      let day = document.createElement("div");
      day.classList.add("calendar__day");
      day.textContent = i;

      const dayDate = new Date(year, month, i);
      dayDate.setHours(0, 0, 0, 0); // Убираем время для точного сравнения

      if (dayDate < today) {
        day.classList.add("-disabled"); // Даты в прошлом делаем недоступными
      }

      day.addEventListener("click", function () {
        if (!day.classList.contains("-disabled")) {
          day.classList.toggle("-chosen"); // Тоггл выбора (оставляет выбранные даты)
        }
      });

      calendarGrid.appendChild(day);
    }

    // 🔹 Дни следующего месяца (неактивные)
    let remainingDays = 42 - (startDay + lastDate); // 42 = 6 строк * 7 дней
    for (let i = 1; i <= remainingDays; i++) {
      let nextDay = document.createElement("div");
      nextDay.classList.add("calendar__day", "-disabled");
      nextDay.textContent = i;
      calendarGrid.appendChild(nextDay);
    }
  }

  prevButton.addEventListener("click", function () {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });

  nextButton.addEventListener("click", function () {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  });

  renderCalendar(currentMonth, currentYear);
});
