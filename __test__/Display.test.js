/**
 * @jest-environment jsdom
 */
const Display = require("../src/js/lib/Display");

test("object gets the current date", () => {
  const display = new Display();
  const year = new Date().getFullYear()
  
  expect(display.year).toEqual(year)
})

test("object contains DOM elements", () => {
  const display = new Display();

  expect(display.clearBtn).toBeDefined()
  expect(display.form).toBeDefined()
  expect(display.numEls).toBeDefined()
})