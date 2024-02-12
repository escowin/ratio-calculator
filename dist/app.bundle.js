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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* 0. Palette */\n:root {\n    --dark: rgb(23 33 43);\n    --light: rgb(74 148 141);\n    --num-btns: rgb(16 34 52);\n    --overlay: rgba(142, 88, 129, 0.5);\n    --focus: rgb(236, 185, 228);\n    --accent: rgb(62 37 88);\n    --k: 1rem;\n}\n\n* {\n    box-sizing: border-box;\n    font-variant: small-caps;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    padding: 0;\n    margin: 0;\n}\n\n::-webkit-scrollbar-button {\n    display: none;\n}\n\n::-webkit-scrollbar {\n    background-color: transparent;\n    width: .25rem;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: var(--overlay);\n    border-radius: var(--k);\n}\n\n.flex {\n    display: flex\n}\n\n/* I. Base */\nbody {\n    background-color: var(--light);\n    color: var(--dark);\n    flex-direction: column;\n    align-items: center;\n    gap: calc(var(--k)/2);\n    height: 100vh;\n    padding: 3.25vw 2.5vw;\n}\n\n/* II. Rule of Thirds */\nheader,\nmain {\n    width: 100%;\n}\n\nmain {\n    flex-grow: 1;\n    flex-direction: column;\n    gap: var(--k);\n    overflow: hidden;\n    padding: .15rem;\n}\n\nfooter {\n    color: var(--overlay);\n    font-size: .85rem;\n\n    & a {\n        color: var(--dark);\n        text-decoration: none;\n        transition: 1s color;\n\n        &:hover {\n            color: var(--accent);\n        }\n    }\n}\n\n/* III. Nested semantic elements */\n/* Calculator screen */\n#form-section {\n    flex-grow: 1;\n    overflow: hidden;\n}\n\n#ratio-form {\n    background-color: var(--overlay);\n    border-radius: .5rem;\n    flex-direction: column;\n    gap: var(--k);\n    height: 100%;\n    justify-content: space-between;\n    padding: .5rem var(--k);\n\n    & article {\n        align-items: flex-end;\n        gap: calc(var(--k)/2);\n    }\n\n    & label {\n        flex-direction: column;\n        border-bottom: 2px solid var(--dark);\n        color: transparent;\n\n        & input {\n            background-color: transparent;\n            border: none;\n            color: var(--dark);\n            outline: none;\n            text-align: center;\n            width: 4.5rem;\n            transition: 1s background-color;\n        }\n    }\n}\n\n/* Memory display */\n#list-container {\n    flex-grow: 1;\n    overflow-y: scroll;\n\n    & #ratio-list {\n        flex-direction: column;\n        font-size: .85rem;\n        gap: calc(var(--k)/2);\n        list-style: none;\n        text-align: end;\n\n        & li {\n            display: grid;\n            grid-template-columns: 1fr auto;\n            align-items: baseline;\n            gap: var(--k);\n        }\n    }\n\n}\n\n/* Calculator keypad */\n#keypad {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: var(--k);\n\n    & article {\n        display: grid;\n        gap: inherit;\n    }\n\n    & #number-btns {\n        grid-template-columns: repeat(3, 1fr);\n        grid-column: span 3;\n        grid-row: span 4;\n    }\n\n    & #action-btns {\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(5, 1fr);\n        grid-row: span 5;\n    }\n\n    & #memory-btns {\n        grid-template-columns: repeat(3, 1fr);\n        grid-column: span 3;\n    }\n\n    & [data-num=\"0\"],\n    #clear-all {\n        grid-column: span 2;\n    }\n\n    & #submit {\n        grid-row: span 2;\n    }\n}\n\nbutton {\n    background-color: var(--dark);\n    border: none;\n    border-radius: .5rem;\n    color: var(--light);\n    padding: .25rem .5rem;\n    transition: 1s background-color, 1s color, 1s outline;\n}\n\nbutton[data-num] {\n    background-color: var(--num-btns);\n}\n\nbutton:active,\nbutton:hover,\nbutton:focus {\n    background-color: var(--accent);\n    color: var(--focus);\n}\n\nbutton:focus {\n    outline: 2px solid var(--focus);\n}\n\n/* IV. Typography */\nbody,\n#keypad button,\nh1 {\n    font-size: 1.5rem;\n}\n\nh2,\ninput {\n    font-size: 1.15rem;\n}\n\n@media screen and (min-width: 750px) {\n    #keypad {\n        flex-direction: column-reverse;\n        flex-grow: 2;\n        flex-wrap: wrap;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    main {\n        flex-direction: row;\n        display: grid;\n        grid-template-columns: 1fr 2fr;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ratio-calculator/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ratio-calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ratio-calculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ratio-calculator/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ratio-calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ratio-calculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ratio-calculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ratio-calculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ratio-calculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ratio-calculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/lib/Calculator.js":
/*!**********************************!*\
  !*** ./src/js/lib/Calculator.js ***!
  \**********************************/
/***/ ((module) => {

eval("class Calculator {\n  constructor(num1, num2, num3, num4) {\n    this.num1 = num1;\n    this.num2 = num2;\n    this.num3 = num3;\n    this.num4 = num4;\n  }\n\n  // math | a:b = c:d\n  calculateNum() {\n    switch (true) {\n      case this.num1 === \"\":\n        return (this.num3 * this.num2) / this.num4;\n      case this.num2 === \"\":\n        return (this.num1 * this.num4) / this.num3;\n      case this.num3 === \"\":\n        return (this.num1 / this.num2) * this.num4;\n      case this.num4 === \"\":\n        return (this.num2 / this.num1) * this.num3;\n      default:\n        return console.error(\"submitted 4 num values\");\n    }\n  }\n\n  calculateNeg(num1, num2) {\n    return !num1 ? 0 * num2 : num1 * num2\n  }\n}\n\nmodule.exports = Calculator;\n\n\n//# sourceURL=webpack://ratio-calculator/./src/js/lib/Calculator.js?");

/***/ }),

/***/ "./src/js/lib/Display.js":
/*!*******************************!*\
  !*** ./src/js/lib/Display.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Calculator = __webpack_require__(/*! ./Calculator */ \"./src/js/lib/Calculator.js\");\nconst Memory = __webpack_require__(/*! ./Memory */ \"./src/js/lib/Memory.js\");\n\nclass Display extends Memory {\n  constructor() {\n    super();\n    this.dateEl = document.getElementById(\"date\");\n    this.form = document.getElementById(\"ratio-form\");\n    this.listEl = document.getElementById(\"ratio-list\");\n    this.clearBtn = document.getElementById(\"clear\");\n    this.clearAllBtn = document.getElementById(\"clear-all\");\n    this.nextBtn = document.getElementById(\"next\");\n    this.prevBtn = document.getElementById(\"previous\");\n    this.numEls = [];\n    for (let i = 1; i <= 4; i++) {\n      this.numEls.push(document.getElementById(`num-${i}`));\n    }\n\n    this.numBtns = [];\n    const numBtnsElements = document.querySelectorAll(\"button[data-num]\");\n    numBtnsElements.forEach((btn) => {\n      const numValue = btn.getAttribute(\"data-num\");\n      this.numBtns.push({ element: btn, value: numValue });\n    });\n  }\n\n  // methods\n  // dom | memory-related\n  displayDate() {\n    this.dateEl.innerText = this.year;\n    console.log(`    \\u00A9 ${this.year} Edwin M. Escobar\n    https://github.com/escowin/ratio-calculator`);\n  }\n\n  displayMemory() {\n    const listEl = this.listEl;\n    listEl.innerHTML = \"\";\n    this.memory.then((memory) => {\n      memory.map((ratio, i) => {\n        const item = document.createElement(\"li\");\n        item.innerText = `${ratio.num1}:${ratio.num2} = ${ratio.num3}:${ratio.num4}`;\n        listEl.appendChild(item);\n      });\n    });\n  }\n\n  async resetMemoryDisplay() {\n    try {\n      await this.clearMemory();\n      this.displayMemory();\n    } catch (err) {\n      console.error(err);\n    }\n  }\n\n  // dom | input-related\n  async displayNum(e) {\n    e.preventDefault();\n    // extracts, destructures, and assigns values from dom elements to instantiated object\n    const nums = this.numEls.map((numEl) => numEl.value);\n    const [num1, num2, num3, num4] = nums;\n    const calculator = new Calculator(num1, num2, num3, num4);\n\n    // displays the calculated remaining ratio value\n    const emptyEl = this.numEls.find((el) => el.value === \"\");\n    emptyEl.value = Math.round(calculator.calculateNum() * 100) / 100;\n    emptyEl.style.width = `${emptyEl.value.length}rem`;\n    emptyEl.style.color = \"var(--accent)\";\n\n    try {\n      await this.saveRatio(this.numEls);\n      this.displayMemory();\n    } catch (err) {\n      console.error(err);\n    }\n  }\n\n  adjustWidth(numEl) {\n    let num = numEl.value.length;\n    numEl.style.width = `${num}rem`;\n  }\n\n  resetInput() {\n    this.numEls.forEach((el) => {\n      el.style.width = \"5rem\";\n      el.style.color = \"var(--dark)\";\n    });\n  }\n\n  handleNumPad(num) {\n    // Find the input element with data-focus=\"true\"\n    const focusedInput = this.numEls.find(\n      (input) => input.dataset.focus === \"true\"\n    );\n\n    // Allows multiple digits and only one decimal point in input element\n    if (num === \".\" && focusedInput.value.includes(\".\")) {\n      console.log(\"Decimal point already exists in input value\");\n    } else if (num === \"-\") {\n      // Prepends \"-\" to string, but will remove \"-\" if negative is entered again\n      focusedInput.value = focusedInput.value.includes(\"-\")\n        ? focusedInput.value.replace(/^-/, \"\")\n        : num + focusedInput.value;\n    } else {\n      // For other characters, simply append them to the value\n      focusedInput.value += num;\n    }\n    console.log(focusedInput.value);\n  }\n\n  handleInputSelection(value) {\n    // Finds the index of the input element with data-focus=\"true\"\n    const currentIndex = this.numEls.findIndex(\n      (input) => input.dataset.focus === \"true\"\n    );\n\n    // Calculates the index of the adjacent input element based on the value of `value`\n    let newIndex = currentIndex + value;\n\n    // Handles wrap-around for newIndex values\n    newIndex = (newIndex + this.numEls.length) % this.numEls.length;\n\n    // Set the data-focus attribute to \"false\" for all other numEls array objects\n    this.numEls.forEach((input, index) => {\n      input.dataset.focus = index === newIndex ? \"true\" : \"false\";\n    });\n  }\n}\n\nmodule.exports = Display;\n\n\n//# sourceURL=webpack://ratio-calculator/./src/js/lib/Display.js?");

/***/ }),

/***/ "./src/js/lib/Memory.js":
/*!******************************!*\
  !*** ./src/js/lib/Memory.js ***!
  \******************************/
/***/ ((module) => {

eval("class Memory {\n  constructor() {\n    this.memory = this.loadMemory();\n    this.year = new Date().getFullYear();\n  }\n\n  loadMemory() {\n    let db;\n    return new Promise((resolve, reject) => {\n      const request = window.indexedDB.open(\"ratio_calculator\", 1);\n      request.onerror = (e) => reject(e.target.errorCode);\n      request.onupgradeneeded = (e) => {\n        // database interface\n        db = e.target.result;\n\n        // table analog | object holds js objecs\n        const store = db.createObjectStore(\"ratios\", { autoIncrement: true });\n        for (let i = 1; i < 5; i++) {\n          store.createIndex(`num${i}`, `num${i}`, { unique: false });\n        }\n      };\n      request.onsuccess = (e) => {\n        const memory = [];\n        db = e.target.result;\n        const cursorRequest = db\n          .transaction(\"ratios\")\n          .objectStore(\"ratios\")\n          .openCursor();\n        cursorRequest.onsuccess = (e) => {\n          const cursor = e.target.result;\n          cursor\n            ? (memory.push(cursor.value), cursor.continue())\n            : resolve(memory);\n        };\n      };\n    });\n  }\n\n  saveRatio(numEls) {\n    return new Promise((resolve, reject) => {\n      const nums = numEls.map((numEl) => numEl.value);\n      const ratio = {};\n      let i = 1;\n      for (const key of nums) {\n        ratio[\"num\" + i] = key;\n        i++;\n      }\n      const request = window.indexedDB.open(\"ratio_calculator\", 1);\n      request.onerror = (e) => console.error(e.target.errorCode);\n      request.onsuccess = (e) => {\n        const db = e.target.result;\n        const tx = db.transaction([\"ratios\"], \"readwrite\");\n        tx.onerror = (e) => reject(e);\n        tx.oncomplete = (e) => {\n          this.memory = this.loadMemory();\n          return this.memory;\n        };\n\n        const store = tx.objectStore(\"ratios\");\n        store.add(ratio).onsuccess = (e) => resolve(this.loadMemory());\n      };\n    });\n  }\n\n  clearMemory() {\n    return new Promise((resolve, reject) => {\n      const request = window.indexedDB.open(\"ratio_calculator\", 1);\n      request.onerror = (e) => console.error(e)\n      request.onsuccess = e => {\n        const db = e.target.result;\n        const tx = db.transaction(\"ratios\", \"readwrite\");\n        const store = tx.objectStore(\"ratios\");\n        const clearRequest = store.clear();\n\n        clearRequest.onerror = (e) => reject(e);\n        clearRequest.onsuccess = () => {\n          this.memory = this.loadMemory();\n          return resolve(this.memory)\n        };\n      }\n    })\n  }\n}\n\nmodule.exports = Memory;\n\n\n//# sourceURL=webpack://ratio-calculator/./src/js/lib/Memory.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\nconst Display = __webpack_require__(/*! ./lib/Display */ \"./src/js/lib/Display.js\");\nconst display = new Display();\n\ndisplay.displayMemory();\ndisplay.displayDate();\n\ndisplay.clearBtn.addEventListener(\"click\", () => display.resetInput());\ndisplay.clearAllBtn.addEventListener(\"click\", () =>\n  display.resetMemoryDisplay()\n);\ndisplay.form.addEventListener(\"submit\", (e) => display.displayNum(e));\ndisplay.nextBtn.addEventListener(\"click\", () =>\n  display.handleInputSelection(1)\n);\ndisplay.prevBtn.addEventListener(\"click\", () =>\n  display.handleInputSelection(-1)\n);\ndisplay.numBtns.forEach((el) => {\n  el.element.addEventListener(\"click\", () => display.handleNumPad(el.value));\n});\n\n\n//# sourceURL=webpack://ratio-calculator/./src/js/script.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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