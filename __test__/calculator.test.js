const { calculator } = require("../src/js/lib/Calculator");

test("returns value that is consistent with established ratio input values", () => {
  const num1 = 16;
  const num2 = 9;
  const num3 = 1024;
  const num4 = (num1/num2)*num3

  expect(calculator(num1, num2, num3)).toEqual(num4);
});
