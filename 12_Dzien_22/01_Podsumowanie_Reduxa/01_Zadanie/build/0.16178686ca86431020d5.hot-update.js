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

var Counter = function Counter(_ref, state) {
  var counter = _ref.counter,
    isCounting = _ref.isCounting,
    onStartCounter = _ref.onStartCounter,
    onPause = _ref.onPause;
  var handleStart = function handleStart() {
    onStartCounter();
    console.log(state.counter.value);
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
/******/ 	__webpack_require__.h = () => ("d466d2f084d08a3619e0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNjE3ODY4NmNhODY0MzEwMjBkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFvREMsS0FBSyxFQUFLO0VBQUEsSUFBekRDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0lBQUVDLFVBQVUsR0FBQUgsSUFBQSxDQUFWRyxVQUFVO0lBQUVDLGNBQWMsR0FBQUosSUFBQSxDQUFkSSxjQUFjO0lBQUVDLE9BQU8sR0FBQUwsSUFBQSxDQUFQSyxPQUFPO0VBRTFELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJGLGNBQWMsQ0FBQyxDQUFDO0lBQ2hCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDQyxPQUFPLENBQUNPLEtBQUssQ0FBQztFQUNwQyxDQUFDO0VBRUQsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQkwsT0FBTyxDQUFDLENBQUM7RUFDYixDQUFDO0VBRUQsb0JBQ0lQLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRYyxPQUFPLEVBQUVOLFdBQVk7SUFBQ08sUUFBUSxFQUFFVjtFQUFXLEdBQUMsT0FBYSxDQUFDLGVBQ2xFTCwwREFBQTtJQUFRYyxPQUFPLEVBQUVGLFVBQVc7SUFBQ0csUUFBUSxFQUFFLENBQUNWO0VBQVcsR0FBQyxNQUFZLENBQUMsZUFDakVMLDBEQUFBLGFBQUtJLE9BQVksQ0FDaEIsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUgsT0FBTzs7Ozs7Ozs7VUN0QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRlciA9ICh7Y291bnRlciwgaXNDb3VudGluZywgb25TdGFydENvdW50ZXIsIG9uUGF1c2V9LCBzdGF0ZSkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIG9uU3RhcnRDb3VudGVyKClcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUuY291bnRlci52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgICAgICBvblBhdXNlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdGFydH0gZGlzYWJsZWQ9e2lzQ291bnRpbmd9PlNUQVJUPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9IGRpc2FibGVkPXshaXNDb3VudGluZ30+U1RPUDwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPntjb3VudGVyfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlciIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ0NjZkMmYwODRkMDhhMzYxOWUwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsIl9yZWYiLCJzdGF0ZSIsImNvdW50ZXIiLCJpc0NvdW50aW5nIiwib25TdGFydENvdW50ZXIiLCJvblBhdXNlIiwiaGFuZGxlU3RhcnQiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJoYW5kbGVTdG9wIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=