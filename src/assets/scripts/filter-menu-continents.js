document.addEventListener('DOMContentLoaded', function () {
  const continentsList = document.querySelector('.filter-menu__continents');
  const headerContainer = document.querySelector('.filter-header__continents');

  function updateContinents() {
    const width = window.innerWidth;

    if (width >= 768) {
      // Если копии нет, копируем
      if (!headerContainer.querySelector('.filter-menu__continents')) {
        const clonedList = continentsList.cloneNode(true);
        headerContainer.appendChild(clonedList);
      }
    } else {
      // На мобилке убираем копию, если она есть
      const clonedList = headerContainer.querySelector('.filter-menu__continents');
      if (clonedList) {
        clonedList.remove();
      }
    }
  }

  updateContinents();
  window.addEventListener('resize', updateContinents);
});
