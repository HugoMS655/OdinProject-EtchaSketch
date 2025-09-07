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
  container.style.boxSizing = "border-box";
  container.style.padding = "0";
  container.style.margin = "0";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.gap = "10px";
}

/**
 * The function `generateButton` creates a button element with specific styling and event listener to
 * prompt the user for a number.
 */
function generateButton() {
  const btn = document.createElement("button");
  btn.textContent = "Set Square number";
  btn.style.fontSize = "30px";
  btn.style.fontWeight = "bold";
  btn.style.display = "block";
  btn.style.margin = "20px auto";
  btn.style.padding = "10px 20px";
  btn.addEventListener("click", promptNumber);
  document.body.insertBefore(btn, container);
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
    let input = prompt("Enter number of squares:");
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
  //removing previous squares
  const previousSquares = container.querySelectorAll(".square");
  previousSquares.forEach((square) => square.remove());

  //making sure the square divs display in a aquere grid fashion
  const rowsAndColumns = Math.ceil(Math.sqrt(numberOfSquares));
  //obtaining the gap assigned to container element
  const gap = getComputedStyle(container).gap;
  //width of each square div
  const itemWidth = `calc(${100 / rowsAndColumns}% - ${gap})`;

  for (let i = 1; i <= numberOfSquares; i++) {
    const square = createSquare(i, itemWidth);
    container.appendChild(square);
  }
}

/**
 * The function `createSquare` creates a square element with specified index and width, styled with
 * random background color and a darkening overlay.
 * @param index - The `index` parameter in the `createSquare` function represents the number or
 * position of the square being created. It is used to label each square with a unique identifier like
 * "square nº1", "square nº2", and so on.
 * @param itemWidth - The `itemWidth` parameter in the `createSquare` function represents the width of
 * each square element that will be created. This value determines how wide each square will be
 * displayed on the screen.
 * @returns The `createSquare` function is returning a dynamically created `<div>` element representing
 * a square.
 */
function createSquare(index, itemWidth) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.textContent = `square nº${index}`;
  //creating the squares themselves
  Object.assign(square.style, {
    position: "relative",
    flex: `0 0 ${itemWidth}`,
    aspectRatio: "1", // keeps item square
    border: "1px solid black",
    textAlign: "center",
    padding: "10px",
    boxSizing: "border-box",
    backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`,
  });
  createDarkeningOverlay(square);
  return square;
}

/**
 * The function creates a darkening overlay that increases opacity by 10% on hover.
 * @returns A darkening overlay element with a hover event that increases its opacity by 0.1 (10%) each
 * time it is hovered over, up to a maximum opacity of 1.
 */
function createDarkeningOverlay(square) {
  // Add hover event to increase overlay opacity by 0.1 (10%)
  const overlay = createSquareOverlay();
  overlay.dataset.opacity = "0";
  square.appendChild(overlay);
  square.addEventListener("mouseenter", () => {
    let opacity = parseFloat(overlay.dataset.opacity);
    if (opacity < 1) {
      opacity = Math.min(1, opacity + 0.1);
      overlay.dataset.opacity = opacity.toFixed(1);
      overlay.style.opacity = opacity;
    }
  });
}

/**
 * The function `createSquareOverlay` generates a black overlay div inside a square with specific
 * styling properties.
 */
function createSquareOverlay() {
  // Create black overlay div inside a square
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: "0",
    pointerEvents: "none", // let mouse events pass through
    transition: "opacity 0.2s ease", // changes opacity in a smooth way in 0,2 seconds
  });
  return overlay;
}
