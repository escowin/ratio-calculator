const Calculator = require("./Calculator");

class Display extends Calculator {
  constructor(num1, num2, num3, num4) {
    // inherited Calculator properties
    super(num1, num2, num3, num4);
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
}

module.exports = Display;