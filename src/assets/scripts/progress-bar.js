document.querySelectorAll('.progress').forEach(progress => {
  const levelElement = progress.querySelector('.progress__level-number');
  let level = parseInt(levelElement.textContent, 10);

  // Определяем процент заполнения через математический расчёт
  let fillPercentage = level === 100 ? 100 : Math.max(5, Math.floor(level / 5) * 5);

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
