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
    this.nextBtn = document.getElementById("next");
    this.prevBtn = document.getElementById("previous");
    this.numEls = [];
    for (let i = 1; i <= 4; i++) {
      this.numEls.push(document.getElementById(`num-${i}`));
    }

    this.numBtns = [];
    const numBtnsElements = document.querySelectorAll("button[data-num]");
    numBtnsElements.forEach((btn) => {
      const numValue = btn.getAttribute("data-num");
      this.numBtns.push({ element: btn, value: numValue });
    });
  }

  // Methods
  // Displays current year for copyright info
  displayDate() {
    this.dateEl.innerText = this.year;
    console.log(`    \u00A9 ${this.year} Edwin M. Escobar
    https://github.com/escowin/ratio-calculator`);
  }

  // Displays the list of ratios found in the indexedDB database
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

  // Clears the list of ratios found in the indexedDB database
  async resetMemoryDisplay() {
    try {
      await this.clearMemory();
      this.displayMemory();
    } catch (err) {
      console.error(err);
    }
  }

  // Displays the calculated ratio
  async displayNum(e) {
    e.preventDefault();
    // Extracts, destructures, and assigns values from dom elements to instantiated object
    try {
      const nums = this.numEls.map((numEl) => numEl.value);
      const [num1, num2, num3, num4] = nums;
      const calculator = new Calculator(num1, num2, num3, num4);

      // Displays the calculated remaining ratio value
      const emptyEl = this.numEls.find((el) => el.value === "");
      emptyEl.value = Math.round(calculator.calculateNum() * 100) / 100;
      emptyEl.style.width = `${emptyEl.value.length}rem`;
      emptyEl.style.color = "var(--calculated)";

      await this.saveRatio(this.numEls);
      this.displayMemory();
    } catch (err) {
      console.error(err);
    }
  }

  adjustWidth(numEl) {
    let num = numEl.value.length;
    if (num > 4) {
      numEl.style.width = `${num}rem`;
    }
  }

  // Resets input elements to initial conditions
  resetInput() {
    this.numEls.forEach((el) => {
      el.style.width = "4rem";
      el.style.color = "";
      el.dataset.focus = "false";
    });
    this.numEls[0].dataset.focus = "true"
  }

  // Allows users to compose multi-digit numbers within an input element
  handleNumPad(num) {
    // Find the input element with data-focus="true"
    const focusedInput = this.numEls.find(
      (input) => input.dataset.focus === "true"
    );

    // Allows multiple digits and only one decimal point in input element
    if (num === "." && focusedInput.value.includes(".")) {
      console.log("Decimal point already exists in input value");
    } else if (num === "-") {
      // Prepends "-" to string, but will remove "-" if negative is entered again
      focusedInput.value = focusedInput.value.includes("-")
        ? focusedInput.value.replace(/^-/, "")
        : num + focusedInput.value;
    } else {
      // For other characters, simply append them to the value
      focusedInput.value += num;
    }
  }

  // Allows users to move back & forth between input elements
  handleInputSelection(value) {
    // Finds the index of the input element with data-focus="true"
    const currentIndex = this.numEls.findIndex(
      (input) => input.dataset.focus === "true"
    );

    // Calculates the index of the adjacent input element based on the value of `value`
    let newIndex = currentIndex + value;

    // Handles wrap-around for newIndex values
    newIndex = (newIndex + this.numEls.length) % this.numEls.length;

    // Sets the data-focus attribute to "false" for all other numEls array objects
    this.numEls.forEach((input, index) => {
      input.dataset.focus = index === newIndex ? "true" : "false";
    });
  }
}

module.exports = Display;
