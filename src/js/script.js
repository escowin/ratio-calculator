// PRODUCTION
import "../css/style.css";

const Calculator = require("./lib/Calculator");

// dom elements
const dateEl = document.getElementById("date");
const ratioForm = document.getElementById("ratio-form");
const num1El = document.getElementById("num-1");
const num2El = document.getElementById("num-2");
const num3El = document.getElementById("num-3");
const num4El = document.getElementById("num-4");

const numEls = [num1El, num2El, num3El, num4El];

// functions
function displayDate() {
  let date = new Date().getFullYear();
  dateEl.innerText = date;

  console.log(`
    \u00A9 ${date} Edwin M. Escobar
    https://github.com/escowin/ratio-calculator
    `);
}

function displayAnswer(e) {
  // prevents input values from disappearing
  e.preventDefault();

  // passes values into instantiated object as constructor arguments
  const calculator = new Calculator(
    num1El.value,
    num2El.value,
    num3El.value,
    num4El.value
  );

  // displays the calculated remaining ratio value
  const emptyEl = numEls.find((el) => el.value === "");
  emptyEl.value = Math.round(calculator.calculateNum());
}

// production calls
displayDate();
ratioForm.addEventListener("submit", (e) => displayAnswer(e));
