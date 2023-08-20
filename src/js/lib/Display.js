const Calculator = require("./Calculator");

class Display {
  constructor() {
    this.year = new Date().getFullYear();
  }

  // methods | domFunction() {...}
  displayDate() {
    const dateEl = document.getElementById("date");
    dateEl.innerText = this.year;
    console.log(`
    \u00A9 ${this.year} Edwin M. Escobar
    https://github.com/escowin/ratio-calculator
    `);
  }

  adjustWidth(numEl) {
    let num = numEl.value.length;
    numEl.style.width = `${num}rem`;
  }

  resetWidth(numEls) {
    numEls.forEach((el) => (el.style.width = "1rem"));
  }

  displayAnswer(e, numEls) {
    e.preventDefault();
    // extracts, destructures, and assigns values from dom elements to instantiated object
    const nums = numEls.map((numEl) => numEl.value);
    const [num1, num2, num3, num4] = nums;
    const calculator = new Calculator(num1, num2, num3, num4);

    // displays the calculated remaining ratio value
    const emptyEl = numEls.find((el) => el.value === "");
    emptyEl.value = Math.round(calculator.calculateNum());
    emptyEl.style.width = `${emptyEl.value.length}rem`;
  }
}

module.exports = Display;
