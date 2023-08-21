import "../css/style.css";

// global variables
const Display = require("./lib/Display");
// const clearBtn = document.getElementById("clear");
// const ratioForm = document.getElementById("ratio-form");
// const numEls = [];
// for (let i = 1; i <= 4; i++) {
//   numEls.push(document.getElementById(`num-${i}`));
// }

const display = new Display();
display.displayDate();

// event listeners
ratioForm.addEventListener("submit", (e) => display.displayAnswer(e, numEls));
clearBtn.addEventListener("click", () => display.resetWidth(numEls));
numEls.forEach((el) => {
  el.addEventListener("input", (el) => display.adjustWidth(el.target))
});