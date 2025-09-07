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

function promptDivNumber() {}

function generateGrid(numberOfSquares) {}
