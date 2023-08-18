const Calculator = require("../src/js/lib/Calculator");

test("returns missing ratio value", () => {
  const num1 = 16;
  const num2 = 9;
  const num3 = 1024;
  const num4 = (num2/num1)*num3
  const calculator = new Calculator(num1, num2, num3)

  expect(calculator.calculateNum()).toEqual(num4);
});
