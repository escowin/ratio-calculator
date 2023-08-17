// import "../css/style.css";
const { calculator } = require("./lib/Calculator");

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
  e.preventDefault();
  const num1 = num1El.value;
  const num2 = num2El.value;
  const num3 = num3El.value;
  console.log(num1, num2, num3);

  const num4 = calculator(num1, num2, num3);
  num4El.innerText = num4;
}

function clearAnswer() {
  if (num4El.innerText !== "") {
    num4El.innerText = ""
  }
}

// calls
displayDate();
ratioForm.addEventListener("submit", (e) => displayAnswer(e));
clearBtn.addEventListener("click", () => clearAnswer());
