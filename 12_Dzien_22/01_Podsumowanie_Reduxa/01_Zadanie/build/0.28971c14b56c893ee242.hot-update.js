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
    onStartCounter = _ref.onStartCounter,
    onPause = _ref.onPause;
  var handleStart = function handleStart(state) {
    state.counter.value = counter;
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
/******/ 	__webpack_require__.h = () => ("67b9904d94106e733621")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yODk3MWMxNGI1NmM4OTNlZTI0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUF1RDtFQUFBLElBQWxEQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxjQUFjLEdBQUFILElBQUEsQ0FBZEcsY0FBYztJQUFFQyxPQUFPLEdBQUFKLElBQUEsQ0FBUEksT0FBTztFQUUxRCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUMsS0FBSyxFQUFLO0lBQzNCQSxLQUFLLENBQUNMLE9BQU8sQ0FBQ00sS0FBSyxHQUFHTixPQUFPO0lBQzdCRSxjQUFjLENBQUMsQ0FBQztFQUNwQixDQUFDO0VBRUQsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQkosT0FBTyxDQUFDLENBQUM7RUFDYixDQUFDO0VBRUQsb0JBQ0lOLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRWSxPQUFPLEVBQUVMLFdBQVk7SUFBQ00sUUFBUSxFQUFFVDtFQUFXLEdBQUMsT0FBYSxDQUFDLGVBQ2xFSiwwREFBQTtJQUFRWSxPQUFPLEVBQUVGLFVBQVc7SUFBQ0csUUFBUSxFQUFFLENBQUNUO0VBQVcsR0FBQyxNQUFZLENBQUMsZUFDakVKLDBEQUFBLGFBQUtHLE9BQVksQ0FDaEIsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUYsT0FBTzs7Ozs7Ozs7VUN0QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRlciA9ICh7Y291bnRlciwgaXNDb3VudGluZywgb25TdGFydENvdW50ZXIsIG9uUGF1c2V9KSA9PiB7XG5cbiAgICBjb25zdCBoYW5kbGVTdGFydCA9IChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5jb3VudGVyLnZhbHVlID0gY291bnRlclxuICAgICAgICBvblN0YXJ0Q291bnRlcigpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcbiAgICAgICAgb25QYXVzZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RhcnR9IGRpc2FibGVkPXtpc0NvdW50aW5nfT5TVEFSVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdG9wfSBkaXNhYmxlZD17IWlzQ291bnRpbmd9PlNUT1A8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT57Y291bnRlcn08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2N2I5OTA0ZDk0MTA2ZTczMzYyMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvdW50ZXIiLCJfcmVmIiwiY291bnRlciIsImlzQ291bnRpbmciLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiLCJoYW5kbGVTdGFydCIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVTdG9wIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=