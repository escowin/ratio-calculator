const Calculator = require("../src/js/lib/Calculator");

test("returns missing ratio value", () => {
  const num = { a: 16, b: 9, c: 1080 };
  const result = (num.b / num.a) * num.c;
  const calculator = new Calculator(num.a, num.b, num.c);

  expect(calculator.calculateNum()).toEqual(result);
});
