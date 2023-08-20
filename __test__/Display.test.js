const Display = require("../src/js/lib/Display");

// mock calculator data for testing
jest.mock("../src/js/lib/Calculator");

test("object inherits Calculator properties", () => {
  const display = new Display();

  expect(display.num1).toBe(1);
  expect(display.num2).toBe(2);
  expect(display.num3).toBe(3);
  expect(display.num4).toBe("");
});
