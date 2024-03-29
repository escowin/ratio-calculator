import "../css/style.css";
const Display = require("./lib/Display");
const display = new Display();

display.displayMemory();
display.displayDate();

display.clearBtn.addEventListener("click", () => display.resetInput());
display.clearAllBtn.addEventListener("click", () =>
  display.resetMemoryDisplay()
);
display.form.addEventListener("submit", (e) => display.displayNum(e));
display.nextBtn.addEventListener("click", () =>
  display.handleInputSelection(1)
);
display.prevBtn.addEventListener("click", () =>
  display.handleInputSelection(-1)
);
display.numBtns.forEach((el) => {
  el.element.addEventListener("click", () => display.handleNumPad(el.value));
});
display.numEls.forEach((el) => {
  el.addEventListener("input", (el) => display.adjustWidth(el.target));
});