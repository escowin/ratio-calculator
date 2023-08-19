// PRODUCTION
import "../css/style.css";

const Calculator = require("./lib/Calculator");

// dom elements
const dateEl = document.getElementById("date");
const ratioForm = document.getElementById("ratio-form");
const numEls = [];
for (let i = 1; i <= 4; i++) {
  numEls.push(document.getElementById(`num-${i}`));
}

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

  // extracts, destructures, and assigns values from dom elements
  const nums = numEls.map((numEl) => numEl.value);
  const [num1, num2, num3, num4] = nums;

  // creates new object with extracted values
  const calculator = new Calculator(num1, num2, num3, num4);

  // displays the calculated remaining ratio value
  const emptyEl = numEls.find((el) => el.value === "");
  emptyEl.value = Math.round(calculator.calculateNum());
}

function adjustInputWidth(numEl) {
  console.log(numEl)
  console.log("value " + numEl.target.value)
  console.log("length " + numEl.target.value.length)
  
}

// production calls
displayDate();
ratioForm.addEventListener("submit", (e) => displayAnswer(e));
numEls.forEach((el) =>{
  el.addEventListener("input", (el) => adjustInputWidth(el))}
);
