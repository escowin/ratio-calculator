import "../css/style.css";

const Display = require("./lib/Display");
const display = new Display();

display.loadMemory();
display.displayMemory();
display.displayDate();

display.clearBtn.addEventListener("click", () => display.resetWidth());
display.clearAllBtn.addEventListener("click", () => display.resetMemoryDisplay());
display.form.addEventListener("submit", (e) => display.displayAnswer(e));
display.numEls.forEach((el) => {
  el.addEventListener("input", (el) => display.adjustWidth(el.target));
});
