document.addEventListener("DOMContentLoaded", function () {
  const transportButtons = document.querySelectorAll(".button__transport");

  transportButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("-off");
    });
  });
});
