const Calculator = require("./Calculator");
const Memory = require("./Memory");

class Display extends Memory {
  constructor(memory) {
    super(memory);

    this.dateEl = document.getElementById("date");
    this.form = document.getElementById("ratio-form");
    this.listEl = document.getElementById("ratio-list");
    this.clearBtn = document.getElementById("clear");
    this.clearAllBtn = document.getElementById("clear-all")
    this.numEls = [];
    for (let i = 1; i <= 4; i++) {
      this.numEls.push(document.getElementById(`num-${i}`));
    }
  }

  // methods | domFunction() {...}
  displayDate() {
    const year = new Date().getFullYear();
    this.dateEl.innerText = year;
    console.log(`
    \u00A9 ${year} Edwin M. Escobar
    https://github.com/escowin/ratio-calculator
    `);
  }

  displayAnswer(e) {
    e.preventDefault();
    // extracts, destructures, and assigns values from dom elements to instantiated object
    const nums = this.numEls.map((numEl) => numEl.value);
    const [num1, num2, num3, num4] = nums;
    const calculator = new Calculator(num1, num2, num3, num4);

    // displays the calculated remaining ratio value
    const emptyEl = this.numEls.find((el) => el.value === "");
    emptyEl.value = Math.round(calculator.calculateNum() * 100) / 100;
    emptyEl.style.width = `${emptyEl.value.length}rem`;

    this.saveRatio(this.numEls);
    this.displayMemory();
  }

  displayMemory() {
    console.log(this.memory)
    const listEl = this.listEl;
    // resets to prevent duplicate display
    listEl.innerHTML = '';

    this.memory.map((ratio, i) => {
      const item = document.createElement("li");
      item.setAttribute("data-id", i);
      item.innerHTML = `<p>${ratio.num1} : ${ratio.num2} = ${ratio.num3} : ${ratio.num4}</p>
        <button>x</button>`;
      listEl.appendChild(item);
    });
  }

  resetMemoryDisplay() {
    this.clearMemory()
    this.displayMemory()
  }

  adjustWidth(numEl) {
    let num = numEl.value.length;
    numEl.style.width = `${num}rem`;
  }

  resetWidth() {
    this.numEls.forEach((el) => (el.style.width = "1rem"));
  }
}

module.exports = Display;
