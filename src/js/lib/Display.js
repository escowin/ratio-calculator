const Calculator = require("./Calculator");
const Memory = require("./Memory");

class Display extends Memory {
  constructor() {
    super();
    this.dateEl = document.getElementById("date");
    this.form = document.getElementById("ratio-form");
    this.listEl = document.getElementById("ratio-list");
    this.clearBtn = document.getElementById("clear");
    this.clearAllBtn = document.getElementById("clear-all");
    this.numEls = [];
    for (let i = 1; i <= 4; i++) {
      this.numEls.push(document.getElementById(`num-${i}`));
    }
  }

  // methods
  // dom | memory-related
  displayDate() {
    this.dateEl.innerText = this.year;
    console.log(`    \u00A9 ${this.year} Edwin M. Escobar
    https://github.com/escowin/ratio-calculator`);
  }

  displayMemory() {
    const listEl = this.listEl;
    listEl.innerHTML = "";
    this.memory.then((memory) => {
      memory.map((ratio, i) => {
        const item = document.createElement("li");
        item.innerText = `${ratio.num1}:${ratio.num2} = ${ratio.num3}:${ratio.num4}`;
        listEl.appendChild(item);
      });
    });
  }

  async resetMemoryDisplay() {
    try {
      await this.clearMemory();
      this.displayMemory();      
    } catch (err) {
      console.error(err)
    }
  }

  // dom | input-related
  async displayNum(e) {
    e.preventDefault();
    // extracts, destructures, and assigns values from dom elements to instantiated object
    const nums = this.numEls.map((numEl) => numEl.value);
    const [num1, num2, num3, num4] = nums;
    const calculator = new Calculator(num1, num2, num3, num4);

    // displays the calculated remaining ratio value
    const emptyEl = this.numEls.find((el) => el.value === "");
    emptyEl.value = Math.round(calculator.calculateNum() * 100) / 100;
    emptyEl.style.width = `${emptyEl.value.length}rem`;

    try {
      await this.saveRatio(this.numEls);
      this.displayMemory();
    } catch (err) {
      console.error(err);
    }
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
