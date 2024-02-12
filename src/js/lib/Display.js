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
    // this.negBtn = document.getElementById("negative");
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
    // Find the input element with data-focus="true"
    const focusedInput = this.numEls.find(
      (input) => input.dataset.focus === "true"
    );

    console.log(num);

    // // Allows multiple digits and only one decimal point in input element
    // num === "." && focusedInput.value.includes(".")
    //   ? console.log("decimal point already exists in input value")
    //   : (focusedInput.value += num);

    // // entering two negatives will remove the existing "-" from the string
    // // if the value does not currently have a "-", then "-" will be included as the first character in the string
    // num === "-" && focusedInput.value.includes("-")
    //   ? focusedInput.value.replace(/^-/, "")
    //   : num + focusedInput.value;

    // Allows multiple digits and only one decimal point in input element
    if (num === "." && focusedInput.value.includes(".")) {
      console.log("Decimal point already exists in input value");
    } else if (num === "-") {
      focusedInput.value = focusedInput.value.includes("-")
        ? focusedInput.value.replace(/^-/, "")
        : "-" + focusedInput.value;
    } else {
      // For other characters, simply append them to the value
      focusedInput.value += num;
    }
    console.log(focusedInput.value);
  }

  handleInputSelection(value) {
    // Finds the index of the input element with data-focus="true"
    const currentIndex = this.numEls.findIndex(
      (input) => input.dataset.focus === "true"
    );

    // If currentIndex is -1, no input element is currently focused, so return
    if (currentIndex === -1) {
      console.error("No input element is currently focused.");
      return;
    }

    // Calculates the index of the adjacent input element based on the value of `value`
    const newIndex =
      (currentIndex + value + this.numEls.length) % this.numEls.length;

    // Sets the data-focus attribute of the current input element to "false"
    this.numEls[currentIndex].dataset.focus = "false";
    this.numEls[currentIndex].style = "";

    // Sets the data-focus attribute of the adjacent input element to "true"
    this.numEls[newIndex].dataset.focus = "true";
    this.numEls[newIndex].style = "var(--focus)";
  }
}

module.exports = Display;
