// DEVELOPMENT
function development() {
  // loads source stylesheet
  const stylesheet = document.createElement("link");
  stylesheet.setAttribute("rel", "stylesheet");
  stylesheet.setAttribute("href", "./src/css/style.css");
  document.head.appendChild(stylesheet);
}

development();

// PRODUCTION
// import "../css/style.css";

const Calculator = require("./lib/Calculator");

// dom elements
const dateEl = document.getElementById("date");
const num1El = document.getElementById("num-1");
const num2El = document.getElementById("num-2");
const num3El = document.getElementById("num-3");
const num4El = document.getElementById("num-4");
const ratioForm = document.getElementById("ratio-form");
const clearBtn = document.getElementById("clear");

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
  const calculator = new Calculator(num1El.value, num2El.value, num3El.value);
  // displays the calculated remaining ratio value
  num4El.innerText = Math.round(calculator.calculateNum());
}

function clearAnswer() {
  if (num4El.innerText !== "") {
    num4El.innerText = "";
  }
}

// production calls
displayDate();
ratioForm.addEventListener("submit", (e) => displayAnswer(e));
clearBtn.addEventListener("click", () => clearAnswer());
