ymaps.ready(initMap);

function initMap() {
  var map = new ymaps.Map("map", {
    center: [59.938631, 30.323037], // Координаты центра карты
    zoom: 15, // Масштаб
    controls: ['zoomControl', 'geolocationControl'] // Контролы карты
  });

  // Добавление метки
  var placemark = new ymaps.Placemark(
    [59.938631, 30.323037], // Координаты метки
    {
      hintContent: 'Мы здесь!',
      balloonContent: 'Это наша точка'
    },
    {
      preset: 'islands#redIcon' // Стиль метки
    }
  );

  map.geoObjects.add(placemark); // Добавление метки на карту
}


// initMap();
//
// async function initMap() {
//   // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
//   await ymaps3.ready;
//
//   const {YMap, YMapDefaultSchemeLayer} = ymaps3;
//
//   // Иницилиазируем карту
//   const map = new YMap(
//     // Передаём ссылку на HTMLElement контейнера
//     document.getElementById('map'),
//
//     // Передаём параметры инициализации карты
//     {
//       location: {
//         // Координаты центра карты
//         center: [59.938631, 30.323037],
//
//         // Уровень масштабирования
//         zoom: 10
//       }
//     }
//   );
//
//   // Добавляем слой для отображения схематической карты
//   map.addChild(new YMapDefaultSchemeLayer());
// }
//
