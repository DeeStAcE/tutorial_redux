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
  if (initCounter !== undefined) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      onSetValue(initCounter);
    }, []);
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
/******/ 	__webpack_require__.h = () => ("de8b11b60620b20fe087")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNDRiOWFmNzM1NTVhZGIzODMwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUV2QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFnRjtFQUFBLElBQTNFQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztJQUFFQyxjQUFjLEdBQUFKLElBQUEsQ0FBZEksY0FBYztJQUFFQyxPQUFPLEdBQUFMLElBQUEsQ0FBUEssT0FBTztJQUFFQyxVQUFVLEdBQUFOLElBQUEsQ0FBVk0sVUFBVTtFQUVuRixJQUFJSCxXQUFXLEtBQUtJLFNBQVMsRUFBRTtJQUMzQlQsZ0RBQVMsQ0FBQyxZQUFNO01BQ1pRLFVBQVUsQ0FBQ0gsV0FBVyxDQUFDO0lBQzNCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDVjtFQUVBLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJKLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCLENBQUM7RUFFRCxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCSixPQUFPLENBQUMsQ0FBQztFQUNiLENBQUM7RUFFRCxvQkFDSVIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFjLE9BQU8sRUFBRUgsV0FBWTtJQUFDSSxRQUFRLEVBQUVWO0VBQVcsR0FBQyxPQUFhLENBQUMsZUFDbEVMLDBEQUFBO0lBQVFjLE9BQU8sRUFBRUYsVUFBVztJQUFDRyxRQUFRLEVBQUUsQ0FBQ1Y7RUFBVyxHQUFDLE1BQVksQ0FBQyxlQUNqRUwsMERBQUEsYUFBS0ksT0FBWSxDQUNoQixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlRixPQUFPOzs7Ozs7OztVQzNCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRlciA9ICh7Y291bnRlciwgaXNDb3VudGluZywgaW5pdENvdW50ZXIsIG9uU3RhcnRDb3VudGVyLCBvblBhdXNlLCBvblNldFZhbHVlfSkgPT4ge1xuXG4gICAgaWYgKGluaXRDb3VudGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIG9uU2V0VmFsdWUoaW5pdENvdW50ZXIpXG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICAgICAgb25TdGFydENvdW50ZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgICAgIG9uUGF1c2UoKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0YXJ0fSBkaXNhYmxlZD17aXNDb3VudGluZ30+U1RBUlQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0gZGlzYWJsZWQ9eyFpc0NvdW50aW5nfT5TVE9QPC9idXR0b24+XG4gICAgICAgICAgICA8aDE+e2NvdW50ZXJ9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGU4YjExYjYwNjIwYjIwZmUwODdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDb3VudGVyIiwiX3JlZiIsImNvdW50ZXIiLCJpc0NvdW50aW5nIiwiaW5pdENvdW50ZXIiLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiLCJvblNldFZhbHVlIiwidW5kZWZpbmVkIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVTdG9wIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=