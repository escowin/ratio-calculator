const { calculator } = require("../src/js/script");

test("numbers passed are logged in function", () => {
  const num1 = 16;
  const num2 = 9;
  const num3 = 1080;
  
  expect(calculator(num1, num2, num3)).toEqual([num1, num2, num3]);
});
