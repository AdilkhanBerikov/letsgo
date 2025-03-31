document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".step__input").forEach((stepInput) => {
    const input = stepInput.querySelector(".input__number");
    const minusButton = stepInput.querySelector(".input__number-button.-minus");
    const plusButton = stepInput.querySelector(".input__number-button.-plus");

    function updateValue(change) {
      let currentValue = parseInt(input.value, 10) || 0;
      const min = parseInt(input.min, 10) || 1;
      const max = parseInt(input.max, 10) || 100;

      let newValue = currentValue + change;
      if (newValue >= min && newValue <= max) {
        input.value = newValue;
      }
    }

    minusButton.addEventListener("click", () => updateValue(-1));
    plusButton.addEventListener("click", () => updateValue(1));

    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, ""); // Убираем всё, кроме цифр
    });

    input.addEventListener("blur", () => {
      const min = parseInt(input.min, 10) || 1;
      const max = parseInt(input.max, 10) || 100;
      let value = parseInt(input.value, 10);

      if (isNaN(value) || value < min) {
        input.value = min;
      } else if (value > max) {
        input.value = max;
      }
    });
  });
});
