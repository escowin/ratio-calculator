class Calculator {
  constructor(num1, num2, num3, num4) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.num4 = num4;
  }

  // A : B = C : D
  calculateNum() {
    // a = (c * b) / d
    if (this.num1 === "") {
      return (this.num3 * this.num2) / this.num4
    }
    // b = (a * d) / c
    if (this.num2 === "") {
      return (this.num1 * this.num4) / this.num3
    }
    // c = b/a * d
    if (this.num3 === "") {
      return (this.num1/this.num2) * this.num4
    }
    // d = b/a * c
    if (this.num4 === "") {
      return (this.num2 / this.num1) * this.num3;
    }
  }
}

module.exports = Calculator;
