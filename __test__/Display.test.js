/**
 * @jest-environment jsdom
 */
const Display = require("../src/js/lib/Display");

test("object contains DOM elements", () => {
  const display = new Display();

  expect(display.dateEl).toBeDefined()
  expect(display.clearBtn).toBeDefined()
  expect(display.form).toBeDefined()
  expect(display.numEls).toBeDefined()
})

// to-do: set up mock dom to pass dom methods through tdd