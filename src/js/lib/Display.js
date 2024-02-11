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

    this.numBtns = [];
    const numBtnsElements = document.querySelectorAll(
      "#number-btns button[data-num]"
    );
    numBtnsElements.forEach((btn) => {
      const numValue = btn.getAttribute("data-num");
      this.numBtns.push({ element: btn, value: numValue });
    });
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
      console.error(err);
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
    emptyEl.style.color = "var(--accent)";

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

  resetInput() {
    this.numEls.forEach((el) => {
      el.style.width = "5rem";
      el.style.color = "var(--dark)";
    });
  }

  handleNumPad(num) {
    console.log("clicked: " + num);
    console.log(this.numEls);

    // Find the input element with data-focus="true"
    const focusedInput = this.numEls.find(
      (input) => input.dataset.focus === "true"
    );
    console.log(focusedInput);

    // Allows multiple digits and only one decimal point in input element
    num === "." && focusedInput.value.includes(".")
      ? console.log("decimal point already exists in input value")
      : (focusedInput.value += num);
  }
}

module.exports = Display;
