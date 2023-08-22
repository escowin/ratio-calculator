/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/development.js":
/*!*******************************!*\
  !*** ./src/js/development.js ***!
  \*******************************/
/***/ ((module) => {

eval("// DEVELOPMENT\nfunction development() {\n    // loads source stylesheet\n    const stylesheet = document.createElement(\"link\");\n    stylesheet.setAttribute(\"rel\", \"stylesheet\");\n    stylesheet.setAttribute(\"href\", \"./src/css/style.css\");\n    document.head.appendChild(stylesheet);\n  }\n  \nmodule.exports = { development }\n\n//# sourceURL=webpack://ratio-calculator/./src/js/development.js?");

/***/ }),

/***/ "./src/js/lib/Calculator.js":
/*!**********************************!*\
  !*** ./src/js/lib/Calculator.js ***!
  \**********************************/
/***/ ((module) => {

eval("class Calculator {\n  constructor(num1, num2, num3, num4) {\n    this.num1 = num1;\n    this.num2 = num2;\n    this.num3 = num3;\n    this.num4 = num4;\n  }\n\n  // A : B = C : D\n  calculateNum() {\n    switch (true) {\n      case this.num1 === \"\":\n        return (this.num3 * this.num2) / this.num4;\n      case this.num2 === \"\":\n        return (this.num1 * this.num4) / this.num3;\n      case this.num3 === \"\":\n        return (this.num1 / this.num2) * this.num4;\n      case this.num4 === \"\":\n        return (this.num2 / this.num1) * this.num3;\n      default:\n        return console.log(\"invalid input\");\n    }\n  }\n}\n\nmodule.exports = Calculator;\n\n\n//# sourceURL=webpack://ratio-calculator/./src/js/lib/Calculator.js?");

/***/ }),

/***/ "./src/js/lib/Display.js":
/*!*******************************!*\
  !*** ./src/js/lib/Display.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Calculator = __webpack_require__(/*! ./Calculator */ \"./src/js/lib/Calculator.js\");\n\nclass Display {\n  constructor() {\n    this.dateEl = document.getElementById(\"date\");\n    this.form = document.getElementById(\"ratio-form\");\n    this.clearBtn = document.getElementById(\"clear\");\n    this.numEls = [];\n    for (let i = 1; i <= 4; i++) {\n      this.numEls.push(document.getElementById(`num-${i}`));\n    }\n  }\n\n  // methods | domFunction() {...}\n  displayDate() {\n    const year = new Date().getFullYear();\n    this.dateEl.innerText = year;\n    console.log(`\n    \\u00A9 ${year} Edwin M. Escobar\n    https://github.com/escowin/ratio-calculator\n    `);\n  }\n  \n  displayAnswer(e) {\n    e.preventDefault();\n    // extracts, destructures, and assigns values from dom elements to instantiated object\n    const nums = this.numEls.map((numEl) => numEl.value);\n    const [num1, num2, num3, num4] = nums;\n    const calculator = new Calculator(num1, num2, num3, num4);\n\n    // displays the calculated remaining ratio value\n    const emptyEl = this.numEls.find((el) => el.value === \"\");\n    emptyEl.value = Math.round(calculator.calculateNum() * 100) / 100;\n    emptyEl.style.width = `${emptyEl.value.length}rem`;\n  }\n\n  adjustWidth(numEl) {\n    let num = numEl.value.length;\n    numEl.style.width = `${num}rem`;\n  }\n\n  resetWidth() {\n    this.numEls.forEach((el) => (el.style.width = \"1rem\"));\n  }\n}\n\nmodule.exports = Display;\n\n\n//# sourceURL=webpack://ratio-calculator/./src/js/lib/Display.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import \"../css/style.css\";\nconst { development } = __webpack_require__(/*! ./development */ \"./src/js/development.js\")\ndevelopment();\n\nconst Display = __webpack_require__(/*! ./lib/Display */ \"./src/js/lib/Display.js\");\nconst display = new Display();\n\ndisplay.displayDate();\ndisplay.clearBtn.addEventListener(\"click\", () => display.resetWidth());\ndisplay.form.addEventListener(\"submit\", (e) => display.displayAnswer(e));\ndisplay.numEls.forEach(el => {\n  el.addEventListener(\"input\", (el) => display.adjustWidth(el.target))\n})\n\n//# sourceURL=webpack://ratio-calculator/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;