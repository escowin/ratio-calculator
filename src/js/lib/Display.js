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
}

module.exports = Display;
