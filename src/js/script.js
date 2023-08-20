// PRODUCTION
import "../css/style.css";

// global variables
const Calculator = require("./lib/Calculator");
const Display = require("./lib/Display");
const clearBtn = document.getElementById("clear")
const ratioForm = document.getElementById("ratio-form");
const numEls = [];
for (let i = 1; i <= 4; i++) {
  numEls.push(document.getElementById(`num-${i}`));
}

const display = new Display()
display.displayDate()

// functions
function adjustWidth(numEl) {
  let num = numEl.value.length;
  numEl.style.width = `${num}rem`;
}

function displayAnswer(e) {
  e.preventDefault();
  // extracts, destructures, and assigns values from dom elements to instantiated object
  const nums = numEls.map((numEl) => numEl.value);
  const [num1, num2, num3, num4] = nums;
  const calculator = new Calculator(num1, num2, num3, num4);

  // displays the calculated remaining ratio value
  const emptyEl = numEls.find((el) => el.value === "");
  emptyEl.value = Math.round(calculator.calculateNum());
  emptyEl.style.width = `${emptyEl.value.length}rem`
}

function resetWidth() {
  numEls.forEach(el => el.style.width = "1rem")
}

// calls
numEls.forEach((el) => el.addEventListener("input", (el) => adjustWidth(el.target)));
ratioForm.addEventListener("submit", (e) => displayAnswer(e));
clearBtn.addEventListener("click", () => resetWidth())