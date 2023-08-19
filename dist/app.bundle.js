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

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// DEVELOPMENT\nconst { development } = __webpack_require__(/*! ./development */ \"./src/js/development.js\")\ndevelopment();\n// PRODUCTION\n// import \"../css/style.css\";\n\nconst Calculator = __webpack_require__(/*! ./lib/Calculator */ \"./src/js/lib/Calculator.js\");\n\n// dom elements\nconst clearBtn = document.getElementById(\"clear\")\nconst ratioForm = document.getElementById(\"ratio-form\");\nconst numEls = [];\nfor (let i = 1; i <= 4; i++) {\n  numEls.push(document.getElementById(`num-${i}`));\n}\n\n// functions\nfunction adjustWidth(numEl) {\n  let num = numEl.value.length;\n  numEl.style.width = `${num}rem`;\n}\n\nfunction displayAnswer(e) {\n  e.preventDefault();\n  // extracts, destructures, and assigns values from dom elements to instantiated object\n  const nums = numEls.map((numEl) => numEl.value);\n  const [num1, num2, num3, num4] = nums;\n  const calculator = new Calculator(num1, num2, num3, num4);\n\n  // displays the calculated remaining ratio value\n  const emptyEl = numEls.find((el) => el.value === \"\");\n  emptyEl.value = Math.round(calculator.calculateNum());\n  emptyEl.style.width = `${emptyEl.value.length}rem`\n}\n\nfunction displayDate() {\n  let date = new Date().getFullYear();\n  const dateEl = document.getElementById(\"date\");\n  dateEl.innerText = date;\n\n  console.log(`\n    \\u00A9 ${date} Edwin M. Escobar\n    https://github.com/escowin/ratio-calculator\n    `);\n}\n\nfunction resetWidth() {\n  numEls.forEach(el => el.style.width = \"1rem\")\n}\n\n// production calls\ndisplayDate();\nnumEls.forEach((el) => el.addEventListener(\"input\", (el) => adjustWidth(el.target)));\nratioForm.addEventListener(\"submit\", (e) => displayAnswer(e));\nclearBtn.addEventListener(\"click\", () => resetWidth())\n\n//# sourceURL=webpack://ratio-calculator/./src/js/script.js?");

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