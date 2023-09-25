self["webpackHotUpdatees6_react"](0,{

/***/ 78:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dawid/workspace/tutorial_redux/12_Dzien_22/01_Podsumowanie_Reduxa/01_Zadanie/js/components/Counter.js: JSX attributes must only be assigned a non-empty expression. (8:58)\n\n\u001b[0m \u001b[90m  6 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  7 |\u001b[39m             {\u001b[33m!\u001b[39misCounting \u001b[33m?\u001b[39m (\u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{onStartCounter}\u001b[33m>\u001b[39m\u001b[33mSTART\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m) \u001b[33m:\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  8 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{onStartCounter} disabled\u001b[33m=\u001b[39m{}\u001b[33m>\u001b[39m\u001b[33mSTART\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m)}\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m             {isCounting \u001b[33m?\u001b[39m (\u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{onPause}\u001b[33m>\u001b[39m\u001b[33mSTOP\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m) \u001b[33m:\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{onPause} disabled\u001b[33m=\u001b[39m{}\u001b[33m>\u001b[39m\u001b[33mSTOP\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m)}\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m             {\u001b[90m/*<button onClick={onStartCounter}>START</button>*/\u001b[39m}\u001b[0m\n    at instantiate (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:63:32)\n    at constructor (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:358:12)\n    at JSXParserMixin.raise (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:3255:19)\n    at JSXParserMixin.jsxParseAttributeValue (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:6804:16)\n    at JSXParserMixin.jsxParseAttribute (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:6855:38)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:6869:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:6864:17)\n    at JSXParserMixin.jsxParseElementAt (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:6888:33)\n    at JSXParserMixin.jsxParseElement (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:6957:17)\n    at JSXParserMixin.parseExprAtom (/home/dawid/workspace/tutorial_redux/node_modules/@babel/parser/lib/index.js:6969:19)");

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Counter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);



var mapState = function mapState(state) {
  return {
    counter: state.counter.value,
    isCounting: state.counter.isCounting
  };
};
var mapDispatch = function mapDispatch(dispatch) {
  return {
    onStartCounter: function onStartCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.startCounter)());
    },
    onPause: function onPause() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.pause)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapState, mapDispatch)((_components_Counter__WEBPACK_IMPORTED_MODULE_1___default())));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("68718643c58698cc604b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44MjUwODAwNGI5MWM4YjI0ZTQyNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUVPO0FBRWdCO0FBRTNELElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUN6QkMsT0FBTyxFQUFFRCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSztJQUM1QkMsVUFBVSxFQUFFSCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0U7RUFDOUIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUMsUUFBUTtFQUFBLE9BQU07SUFDL0JDLGNBQWMsRUFBRSxTQUFBQSxlQUFBO01BQUEsT0FBTUQsUUFBUSxDQUFDVCw0REFBWSxDQUFDLENBQUMsQ0FBQztJQUFBO0lBQzlDVyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1GLFFBQVEsQ0FBQ1IscURBQUssQ0FBQyxDQUFDLENBQUM7SUFBQTtFQUNwQyxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlSCxvREFBTyxDQUFDSyxRQUFRLEVBQUVLLFdBQVcsQ0FBQyxDQUFDVCw0REFBTyxDQUFDOzs7Ozs7OztVQ2hCdEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJ1xuXG5pbXBvcnQge3N0YXJ0Q291bnRlciwgcGF1c2UsIHNhdmV9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICAgIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25TdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBvblBhdXNlOiAoKSA9PiBkaXNwYXRjaChwYXVzZSgpKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDb3VudGVyKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY4NzE4NjQzYzU4Njk4Y2M2MDRiXCIpIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJDb3VudGVyIiwic3RhcnRDb3VudGVyIiwicGF1c2UiLCJzYXZlIiwibWFwU3RhdGUiLCJzdGF0ZSIsImNvdW50ZXIiLCJ2YWx1ZSIsImlzQ291bnRpbmciLCJtYXBEaXNwYXRjaCIsImRpc3BhdGNoIiwib25TdGFydENvdW50ZXIiLCJvblBhdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==