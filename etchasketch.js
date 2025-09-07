/*  This element is the main container where the squares will be displayed. */
const container = document.querySelector(".container");
/* This constant is used as a limit for the number of squares that can be generated per row in the grid. */
const MAX_LIMIT = 100;

document.addEventListener("DOMContentLoaded", () => {
  alterMainContainer();
  generateButton();
});

/**
 * The function `alterMainContainer` sets the display, box sizing, padding, and margin properties of
 * the container element to specific values.
 */
function alterMainContainer() {
  container.style.display = "flex";
  container.style.boxSizing = "border-box";
  container.style.padding = "0";
  container.style.margin = "0";
}

/**
 * The function `generateButton` creates a button element with specific styling and event listener to
 * prompt the user for a number.
 */
function generateButton() {
  const btn = document.createElement("button");
  btn.textContent = "Set Square number";
  btn.style.fontSize = 20;
  btn.style.fontWeight = "bold";
  btn.addEventListener("click", promptNumber);
  container.appendChild(btn);
}

/**
 * The function `promptNumber` prompts the user to enter a number of squares per row within a specified
 * range and generates a grid based on the input.
 * @returns The `promptNumber` function returns `null` if the prompt is cancelled by the user,or an alert message
 * in case the user placed an invalid input on the prompt text area.
 * Otherwise, it generates a grid based on the number entered by the user.
 */
function promptNumber() {
  let number;
  do {
    let input = prompt("Enter number of squares per row:");
    number = parseInt(input, 10);
    if (input === null) {
      alert("Prompt cancelled.");
      return null; // exit on cancel
    }
    if (isNaN(number) || number > MAX_LIMIT || number <= 0) {
      alert("Please enter a number (1-100)!");
    }
  } while (isNaN(number) || number > MAX_LIMIT || number <= 0);

  generateGrid(number);
}

function generateGrid(numberOfSquares) {
  const oldSquares = container.querySelectorAll(".square");
  if (oldSquares !== null) {
    oldSquares.forEach((square) => square.remove());
  }
}
