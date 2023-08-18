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

/***/ "./src/js/lib/Calculator.js":
/*!**********************************!*\
  !*** ./src/js/lib/Calculator.js ***!
  \**********************************/
/***/ ((module) => {

eval("function calculator(num1, num2, num3) {\n  return (num2/num1)*num3;\n}\n\nmodule.exports = { calculator };\n\n\n//# sourceURL=webpack://ratio-calculator/./src/js/lib/Calculator.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import \"../css/style.css\";\nconst { calculator } = __webpack_require__(/*! ./lib/Calculator */ \"./src/js/lib/Calculator.js\");\n\n// dom elements\nconst dateEl = document.getElementById(\"date\");\nconst num1El = document.getElementById(\"num-1\");\nconst num2El = document.getElementById(\"num-2\");\nconst num3El = document.getElementById(\"num-3\");\nconst num4El = document.getElementById(\"num-4\");\nconst ratioForm = document.getElementById(\"ratio-form\");\nconst clearBtn = document.getElementById(\"clear\");\n\n// functions\nfunction displayDate() {\n  let date = new Date().getFullYear();\n  dateEl.innerText = date;\n\n  console.log(`\n    \\u00A9 ${date} Edwin M. Escobar\n    https://github.com/escowin/ratio-calculator\n    `);\n}\n\nfunction displayAnswer(e) {\n  e.preventDefault();\n  const num1 = num1El.value;\n  const num2 = num2El.value;\n  const num3 = num3El.value;\n  const num4 = calculator(num1, num2, num3);\n  num4El.innerText = Math.round(num4);\n}\n\nfunction clearAnswer() {\n  if (num4El.innerText !== \"\") {\n    num4El.innerText = \"\";\n  }\n}\n\n// development loads source stylesheet\nfunction development() {\n  const stylesheet = document.createElement(\"link\");\n  stylesheet.setAttribute(\"rel\", \"stylesheet\");\n  stylesheet.setAttribute(\"href\", \"./src/css/style.css\");\n  document.head.appendChild(stylesheet);\n}\n\ndevelopment();\n\n// production calls\ndisplayDate();\nratioForm.addEventListener(\"submit\", (e) => displayAnswer(e));\nclearBtn.addEventListener(\"click\", () => clearAnswer());\n\n\n//# sourceURL=webpack://ratio-calculator/./src/js/script.js?");

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