document.addEventListener("DOMContentLoaded", function () {
  const controlButtons = document.querySelectorAll(".selection-filter__control-button");

  controlButtons.forEach(button => {
    button.addEventListener("click", function () {
      const fieldset = button.closest(".selection-filter__control");

      if (!fieldset) return;

      fieldset.classList.toggle("-open");
    });
  });
});
