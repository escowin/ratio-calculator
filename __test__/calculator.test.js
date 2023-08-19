const Calculator = require("../src/js/lib/Calculator");

test("returns missing 4th ratio value", () => {
  const num = { a: 16, b: 9, c: 1080, d: ''};
  const result = (num.b / num.a) * num.c;
  const calculator = new Calculator(num.a, num.b, num.c, num.d);

  expect(calculator.calculateNum()).toEqual(result);
});
