self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stopper: () => (/* binding */ Stopper),
/* harmony export */   StopperWithTimer: () => (/* binding */ StopperWithTimer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _hoc_withTimer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hoc_withTimer__WEBPACK_IMPORTED_MODULE_1__);



// Zamień ciało funkcji tak aby renderowała Stopper wg. treści zadania
var Stopper = function Stopper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return props.startTimer();
    }
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return props.stopTimer();
    }
  }, "Stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Licznik: ", props.counter), props.children);
};

// Zamień deklarację komponentu poniżej tak aby korzystał z wczesniej zamiplementowanego HOC withTimer
var StopperWithTimer = _hoc_withTimer__WEBPACK_IMPORTED_MODULE_1___default()(Stopper);


/***/ }),

/***/ 35:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dawid/workspace/tutorial_redux/03_Dzien_4/01_Komponenty/01_Zadanie_1/js/hoc/withTimer.js: Missing semicolon. (57:16)\n\n\u001b[0m \u001b[90m 55 |\u001b[39m         }\u001b[0m\n\u001b[0m \u001b[90m 56 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 57 |\u001b[39m         render() {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 58 |\u001b[39m             \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 59 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mComponent\u001b[39m {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops} counter\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mcounter} startTimer\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstartTimer}\u001b[0m\n\u001b[0m \u001b[90m 60 |\u001b[39m                            stopTimer\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstopTimer}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:63:32)\n    at constructor (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:358:12)\n    at JSXParserMixin.raise (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:3255:19)\n    at JSXParserMixin.semicolon (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:3622:10)\n    at JSXParserMixin.parseExpressionStatement (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:13154:10)\n    at JSXParserMixin.parseStatementContent (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:12737:19)\n    at JSXParserMixin.parseStatementLike (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:12584:17)\n    at JSXParserMixin.parseStatementListItem (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:12564:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:13185:61)\n    at JSXParserMixin.parseBlockBody (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:13178:10)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("af73473389a56dde8eb7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MDllOWUxZGUyMWQ0MmExYWZlMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNlOztBQUV6QztBQUNBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJQyxLQUFLLEVBQUs7RUFDdkIsb0JBQ0lILDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFRTSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1ILEtBQUssQ0FBQ0ksVUFBVSxDQUFDLENBQUM7SUFBQTtFQUFDLEdBQUMsT0FBYSxDQUFDLGVBQ3pEUCwwREFBQTtJQUFRTSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1ILEtBQUssQ0FBQ0ssU0FBUyxDQUFDLENBQUM7SUFBQTtFQUFDLEdBQUMsTUFBWSxDQUFDLGVBQ3ZEUiwwREFBQSxZQUFHLFdBQVMsRUFBQ0csS0FBSyxDQUFDTSxPQUFXLENBQUMsRUFFM0JOLEtBQUssQ0FBQ08sUUFFWixDQUFDO0FBRVgsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLGdCQUFnQixHQUFHVixxREFBUyxDQUFDQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQjNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDNfRHppZW5fNC8wMV9Lb21wb25lbnR5LzAxX1phZGFuaWVfMS9qcy9jb21wb25lbnRzL1N0b3BwZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2l0aFRpbWVyIGZyb20gXCIuLi9ob2Mvd2l0aFRpbWVyXCI7XG5cbi8vIFphbWllxYQgY2lhxYJvIGZ1bmtjamkgdGFrIGFieSByZW5kZXJvd2HFgmEgU3RvcHBlciB3Zy4gdHJlxZtjaSB6YWRhbmlhXG5jb25zdCBTdG9wcGVyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuc3RhcnRUaW1lcigpfT5TdGFydDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zdG9wVGltZXIoKX0+U3RvcDwvYnV0dG9uPlxuICAgICAgICAgICAgPHA+TGljem5pazoge3Byb3BzLmNvdW50ZXJ9PC9wPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbi8vIFphbWllxYQgZGVrbGFyYWNqxJkga29tcG9uZW50dSBwb25pxbxlaiB0YWsgYWJ5IGtvcnp5c3RhxYIgeiB3Y3plc25pZWogemFtaXBsZW1lbnRvd2FuZWdvIEhPQyB3aXRoVGltZXJcbmNvbnN0IFN0b3BwZXJXaXRoVGltZXIgPSB3aXRoVGltZXIoU3RvcHBlcik7XG5cbmV4cG9ydCB7U3RvcHBlciwgU3RvcHBlcldpdGhUaW1lcn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWY3MzQ3MzM4OWE1NmRkZThlYjdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoVGltZXIiLCJTdG9wcGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwic3RhcnRUaW1lciIsInN0b3BUaW1lciIsImNvdW50ZXIiLCJjaGlsZHJlbiIsIlN0b3BwZXJXaXRoVGltZXIiXSwic291cmNlUm9vdCI6IiJ9