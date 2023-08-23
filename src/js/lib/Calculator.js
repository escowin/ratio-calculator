class Calculator {
  constructor(num1, num2, num3, num4) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.num4 = num4;
  }

  // math | a:b = c:d
  calculateNum() {
    switch (true) {
      case this.num1 === "":
        return (this.num3 * this.num2) / this.num4;
      case this.num2 === "":
        return (this.num1 * this.num4) / this.num3;
      case this.num3 === "":
        return (this.num1 / this.num2) * this.num4;
      case this.num4 === "":
        return (this.num2 / this.num1) * this.num3;
      default:
        return console.error("submitted 4 num values");
    }
  }
}

module.exports = Calculator;
