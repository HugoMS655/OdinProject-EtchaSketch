const container = document.querySelector(".container");

const MAX_LIMIT = 100;

document.addEventListener("DOMContentLoaded", () => {
  alterMainContainer();
  generateButton();
});

function alterMainContainer() {
  container.style.display = "flex";
  container.style.boxSizing = "border-box";
  container.style.padding = "0";
  container.style.margin = "0";
}

function generateButton() {
  const btn = document.createElement("button");
  btn.textContent = "Set Square number";
  btn.style.fontSize = 20;
  btn.style.fontWeight = "bold";
  btn.addEventListener("click", promptNumber);
  container.appendChild(btn);
}

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
