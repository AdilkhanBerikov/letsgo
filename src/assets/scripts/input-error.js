document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("email");

  input.addEventListener("input", () => {
    if (input.validity.valid) {
      input.classList.remove("is-error");
    } else {
      input.classList.add("is-error");
    }
  });
});
