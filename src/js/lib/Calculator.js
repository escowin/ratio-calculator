class Calculator {
  constructor(num1, num2, num3, num4) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.num4 = num4;
  }

  calculateNum() {
    // A : B = C : ?
    if (this.num4 === "") {
      return (this.num2 / this.num1) * this.num3;
    }
    
  }
}

module.exports = Calculator;
