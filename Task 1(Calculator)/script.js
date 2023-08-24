const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalsButton = document.getElementById("equals");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else if (button.textContent === "C") {
      display.value = "";
    } else {
      display.value += button.textContent;
    }
  });
});

equalsButton.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
});
