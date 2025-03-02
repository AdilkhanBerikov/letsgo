document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".rate-section__button");
  const closeButton = document.querySelector(".business-rates__button");
  const modal = document.querySelector(".business-rates");

  openButton.addEventListener("click", () => {
    modal.classList.add("is-active");
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
});
