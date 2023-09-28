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

var Counter = function Counter(state, _ref) {
  var counter = _ref.counter,
    isCounting = _ref.isCounting,
    onStartCounter = _ref.onStartCounter,
    onPause = _ref.onPause;
  // console.log(state.counter.value);

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
/******/ 	__webpack_require__.h = () => ("ab24e783ec0daedfcc73")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43N2QxNTA1NDRmYzE1YzUyYTI2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsS0FBSyxFQUFBQyxJQUFBLEVBQXFEO0VBQUEsSUFBbERDLE9BQU8sR0FBQUQsSUFBQSxDQUFQQyxPQUFPO0lBQUVDLFVBQVUsR0FBQUYsSUFBQSxDQUFWRSxVQUFVO0lBQUVDLGNBQWMsR0FBQUgsSUFBQSxDQUFkRyxjQUFjO0lBQUVDLE9BQU8sR0FBQUosSUFBQSxDQUFQSSxPQUFPO0VBRWpFOztFQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJGLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCLENBQUM7RUFFRCxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCRixPQUFPLENBQUMsQ0FBQztFQUNiLENBQUM7RUFFRCxvQkFDSVAsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFXLE9BQU8sRUFBRUgsV0FBWTtJQUFDSSxRQUFRLEVBQUVQO0VBQVcsR0FBQyxPQUFhLENBQUMsZUFDbEVMLDBEQUFBO0lBQVFXLE9BQU8sRUFBRUYsVUFBVztJQUFDRyxRQUFRLEVBQUUsQ0FBQ1A7RUFBVyxHQUFDLE1BQVksQ0FBQyxlQUNqRUwsMERBQUEsYUFBS0ksT0FBWSxDQUNoQixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlSCxPQUFPOzs7Ozs7OztVQ3ZCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3VudGVyID0gKHN0YXRlLCB7Y291bnRlciwgaXNDb3VudGluZywgb25TdGFydENvdW50ZXIsIG9uUGF1c2V9KSA9PiB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS5jb3VudGVyLnZhbHVlKTtcblxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBvblN0YXJ0Q291bnRlcigpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcbiAgICAgICAgb25QYXVzZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RhcnR9IGRpc2FibGVkPXtpc0NvdW50aW5nfT5TVEFSVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdG9wfSBkaXNhYmxlZD17IWlzQ291bnRpbmd9PlNUT1A8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT57Y291bnRlcn08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhYjI0ZTc4M2VjMGRhZWRmY2M3M1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvdW50ZXIiLCJzdGF0ZSIsIl9yZWYiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsIm9uU3RhcnRDb3VudGVyIiwib25QYXVzZSIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlU3RvcCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9