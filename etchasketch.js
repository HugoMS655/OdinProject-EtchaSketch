const container = document.querySelector(".container");
const MAX_LIMIT = 100;

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "Set Square number";
  btn.style.fontSize = 20;
  btn.style.fontWeight = "bold";
  btn.addEventListener("click", promptDivNumber);
  container.appendChild(btn);
});

function promptDivNumber() {
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

function generateGrid(numberOfSquares) {}
