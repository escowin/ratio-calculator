// function calculator(num1, num2, num3) {
//   return (num2/num1)*num3;
// }

class Calculator {
  constructor(num1, num2, num3) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
  }

  calculateNum() {
    return (this.num2 / this.num1) * this.num3;
  }
}

module.exports = Calculator;
