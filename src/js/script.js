import "../css/style.css";
// const { development } = require("./development")
// development();

const Display = require("./lib/Display");
const display = new Display();

display.displayDate();
display.clearBtn.addEventListener("click", () => display.resetWidth());
display.form.addEventListener("submit", (e) => {
  display.displayAnswer(e)
});
display.numEls.forEach(el => {
  el.addEventListener("input", (el) => display.adjustWidth(el.target))
})

console.log(display)