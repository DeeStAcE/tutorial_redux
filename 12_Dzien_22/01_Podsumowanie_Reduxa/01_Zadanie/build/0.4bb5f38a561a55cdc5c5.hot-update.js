"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 78:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Counter = function Counter(_ref) {
  var counter = _ref.counter,
    isCounting = _ref.isCounting,
    initCounter = _ref.initCounter,
    onStartCounter = _ref.onStartCounter,
    onPause = _ref.onPause,
    onSetValue = _ref.onSetValue;
  if (initCounter !== 0) {
    onSetValue(initCounter);
  }
  var handleStart = function handleStart() {
    onStartCounter();
  };
  var handleStop = function handleStop() {
    onPause();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStart,
    disabled: isCounting
  }, "START"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop,
    disabled: !isCounting
  }, "STOP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, counter));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca145a56839b99520cf1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YmI1ZjM4YTU2MWE1NWNkYzVjNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFnRjtFQUFBLElBQTNFQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztJQUFFQyxjQUFjLEdBQUFKLElBQUEsQ0FBZEksY0FBYztJQUFFQyxPQUFPLEdBQUFMLElBQUEsQ0FBUEssT0FBTztJQUFFQyxVQUFVLEdBQUFOLElBQUEsQ0FBVk0sVUFBVTtFQUVuRixJQUFJSCxXQUFXLEtBQUssQ0FBQyxFQUFFO0lBQ25CRyxVQUFVLENBQUNILFdBQVcsQ0FBQztFQUMzQjtFQUVBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJILGNBQWMsQ0FBQyxDQUFDO0VBQ3BCLENBQUM7RUFFRCxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCSCxPQUFPLENBQUMsQ0FBQztFQUNiLENBQUM7RUFFRCxvQkFDSVAsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFZLE9BQU8sRUFBRUgsV0FBWTtJQUFDSSxRQUFRLEVBQUVUO0VBQVcsR0FBQyxPQUFhLENBQUMsZUFDbEVKLDBEQUFBO0lBQVFZLE9BQU8sRUFBRUYsVUFBVztJQUFDRyxRQUFRLEVBQUUsQ0FBQ1Q7RUFBVyxHQUFDLE1BQVksQ0FBQyxlQUNqRUosMERBQUEsYUFBS0csT0FBWSxDQUNoQixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlRixPQUFPOzs7Ozs7OztVQ3pCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3VudGVyID0gKHtjb3VudGVyLCBpc0NvdW50aW5nLCBpbml0Q291bnRlciwgb25TdGFydENvdW50ZXIsIG9uUGF1c2UsIG9uU2V0VmFsdWV9KSA9PiB7XG5cbiAgICBpZiAoaW5pdENvdW50ZXIgIT09IDApIHtcbiAgICAgICAgb25TZXRWYWx1ZShpbml0Q291bnRlcilcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICAgICAgb25TdGFydENvdW50ZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgICAgIG9uUGF1c2UoKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0YXJ0fSBkaXNhYmxlZD17aXNDb3VudGluZ30+U1RBUlQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0gZGlzYWJsZWQ9eyFpc0NvdW50aW5nfT5TVE9QPC9idXR0b24+XG4gICAgICAgICAgICA8aDE+e2NvdW50ZXJ9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2ExNDVhNTY4MzliOTk1MjBjZjFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb3VudGVyIiwiX3JlZiIsImNvdW50ZXIiLCJpc0NvdW50aW5nIiwiaW5pdENvdW50ZXIiLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiLCJvblNldFZhbHVlIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVTdG9wIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=