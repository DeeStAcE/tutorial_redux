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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, []);
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
/******/ 	__webpack_require__.h = () => ("7bee1ed8c118efa1aedd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iOTIwNGEzYzIxM2UyMjgxMGYxNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUV2QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFnRjtFQUFBLElBQTNFQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztJQUFFQyxjQUFjLEdBQUFKLElBQUEsQ0FBZEksY0FBYztJQUFFQyxPQUFPLEdBQUFMLElBQUEsQ0FBUEssT0FBTztJQUFFQyxVQUFVLEdBQUFOLElBQUEsQ0FBVk0sVUFBVTtFQUVuRlIsZ0RBQVMsQ0FBQyxZQUFNLENBRWhCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCSCxjQUFjLENBQUMsQ0FBQztFQUNwQixDQUFDO0VBRUQsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQkgsT0FBTyxDQUFDLENBQUM7RUFDYixDQUFDO0VBRUQsb0JBQ0lSLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRYSxPQUFPLEVBQUVILFdBQVk7SUFBQ0ksUUFBUSxFQUFFVDtFQUFXLEdBQUMsT0FBYSxDQUFDLGVBQ2xFTCwwREFBQTtJQUFRYSxPQUFPLEVBQUVGLFVBQVc7SUFBQ0csUUFBUSxFQUFFLENBQUNUO0VBQVcsR0FBQyxNQUFZLENBQUMsZUFDakVMLDBEQUFBLGFBQUtJLE9BQVksQ0FDaEIsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUYsT0FBTzs7Ozs7Ozs7VUN6QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvdW50ZXIgPSAoe2NvdW50ZXIsIGlzQ291bnRpbmcsIGluaXRDb3VudGVyLCBvblN0YXJ0Q291bnRlciwgb25QYXVzZSwgb25TZXRWYWx1ZX0pID0+IHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBvblN0YXJ0Q291bnRlcigpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcbiAgICAgICAgb25QYXVzZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RhcnR9IGRpc2FibGVkPXtpc0NvdW50aW5nfT5TVEFSVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdG9wfSBkaXNhYmxlZD17IWlzQ291bnRpbmd9PlNUT1A8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT57Y291bnRlcn08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YmVlMWVkOGMxMThlZmExYWVkZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkNvdW50ZXIiLCJfcmVmIiwiY291bnRlciIsImlzQ291bnRpbmciLCJpbml0Q291bnRlciIsIm9uU3RhcnRDb3VudGVyIiwib25QYXVzZSIsIm9uU2V0VmFsdWUiLCJoYW5kbGVTdGFydCIsImhhbmRsZVN0b3AiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==