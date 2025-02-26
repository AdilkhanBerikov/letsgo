document.querySelectorAll('.progress').forEach(progress => {
  const levelElement = progress.querySelector('.progress__level-number');
  let level = parseInt(levelElement.textContent, 10);

  // Определяем процент заполнения через математический расчёт
  const fillPercentage = (level > 97 && level < 100) ? 97 : level

  // Устанавливаем CSS переменную
  progress.querySelector('.progress__bar-circle').style.setProperty('--progress', fillPercentage);
});


// document.querySelectorAll('.progress').forEach(progress => {
//   const levelElement = progress.querySelector('.progress__level-number');
//   let level = parseInt(levelElement.textContent, 10);
//
//   // Передаём уровень как процент в CSS
//   progress.style.setProperty('--progress', level);
// });
