document.addEventListener("DOMContentLoaded", function () {
  const scale = document.querySelector(".range-control__scale");
  const bar = document.querySelector(".range-control__bar");
  const toggleMin = document.querySelector(".range-control__toggle.-min");
  const toggleMax = document.querySelector(".range-control__toggle.-max");
  const inputMin = document.querySelector("#level-min");
  const inputMax = document.querySelector("#level-max");

  const minLimit = +inputMin.min;
  const maxLimit = +inputMax.max;

  const getPercent = (value) => ((value - minLimit) / (maxLimit - minLimit)) * 100;
  const getValueFromPercent = (percent) => Math.round((percent / 100) * (maxLimit - minLimit) + minLimit);

  const updateUI = () => {
    const percentMin = getPercent(+inputMin.value);
    const percentMax = getPercent(+inputMax.value);

    toggleMin.style.left = `${percentMin}%`;
    toggleMax.style.left = `${percentMax}%`;

    bar.style.left = `${percentMin}%`;
    bar.style.width = `${percentMax - percentMin}%`;
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const handleDrag = (toggle, input, isMin) => {
    const moveAt = (clientX) => {
      const rect = scale.getBoundingClientRect();
      const percent = clamp(((clientX - rect.left) / rect.width) * 100, 0, 100);
      const value = getValueFromPercent(percent);

      if (isMin) {
        inputMin.value = Math.min(value, +inputMax.value - 1);
      } else {
        inputMax.value = Math.max(value, +inputMin.value + 1);
      }

      updateUI();
    };

    const onMove = (e) => {
      const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
      moveAt(clientX);
    };

    const onEnd = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    };

    const onStart = (e) => {
      e.preventDefault();
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onEnd);
      document.addEventListener("touchmove", onMove, { passive: false });
      document.addEventListener("touchend", onEnd);
    };

    toggle.addEventListener("mousedown", onStart);
    toggle.addEventListener("touchstart", onStart, { passive: false });
  };

  inputMin.addEventListener("input", () => {
    inputMin.value = Math.min(+inputMin.value, +inputMax.value - 1);
    updateUI();
  });

  inputMax.addEventListener("input", () => {
    inputMax.value = Math.max(+inputMax.value, +inputMin.value + 1);
    updateUI();
  });

  handleDrag(toggleMin, inputMin, true);
  handleDrag(toggleMax, inputMax, false);

  updateUI();
});
