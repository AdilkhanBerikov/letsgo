document.querySelectorAll('.progress').forEach(progress => {
  const levelElement = progress.querySelector('.progress__level-number');
  let level = parseInt(levelElement.textContent, 10);

  // процент заполения в зависимости от значение level
  let fillPercentage = 5; // Минимум 5%

  if (level === 100) {
    fillPercentage = 100;
  } else if (level >= 95) {
    fillPercentage = 95;
  } else if (level >= 90) {
    fillPercentage = 90;
  } else if (level >= 85) {
    fillPercentage = 85;
  } else if (level >= 80) {
    fillPercentage = 80;
  } else if (level >= 75) {
    fillPercentage = 75;
  } else if (level >= 70) {
    fillPercentage = 70;
  } else if (level >= 65) {
    fillPercentage = 65;
  } else if (level >= 60) {
    fillPercentage = 60;
  } else if (level >= 55) {
    fillPercentage = 55;
  } else if (level >= 50) {
    fillPercentage = 50;
  } else if (level >= 45) {
    fillPercentage = 45;
  } else if (level >= 40) {
    fillPercentage = 40;
  } else if (level >= 35) {
    fillPercentage = 35;
  } else if (level >= 30) {
    fillPercentage = 30;
  } else if (level >= 25) {
    fillPercentage = 25;
  } else if (level >= 20) {
    fillPercentage = 20;
  } else if (level >= 15) {
    fillPercentage = 15;
  } else if (level >= 10) {
    fillPercentage = 10;
  }

  // Устанавливаем новое значение переменной в CSS
  progress.querySelector('.progress__bar-circle').style.setProperty('--progress', fillPercentage);
});
