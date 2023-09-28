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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onSetValue(initCounter);
  }, []);
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
/******/ 	__webpack_require__.h = () => ("b7bb175881de8091b407")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43YmVlMWVkOGMxMThlZmExYWVkZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUV2QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFnRjtFQUFBLElBQTNFQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztJQUFFQyxjQUFjLEdBQUFKLElBQUEsQ0FBZEksY0FBYztJQUFFQyxPQUFPLEdBQUFMLElBQUEsQ0FBUEssT0FBTztJQUFFQyxVQUFVLEdBQUFOLElBQUEsQ0FBVk0sVUFBVTtFQUVuRlIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pRLFVBQVUsQ0FBQ0gsV0FBVyxDQUFDO0VBQzNCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCSCxjQUFjLENBQUMsQ0FBQztFQUNwQixDQUFDO0VBRUQsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQkgsT0FBTyxDQUFDLENBQUM7RUFDYixDQUFDO0VBRUQsb0JBQ0lSLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRYSxPQUFPLEVBQUVILFdBQVk7SUFBQ0ksUUFBUSxFQUFFVDtFQUFXLEdBQUMsT0FBYSxDQUFDLGVBQ2xFTCwwREFBQTtJQUFRYSxPQUFPLEVBQUVGLFVBQVc7SUFBQ0csUUFBUSxFQUFFLENBQUNUO0VBQVcsR0FBQyxNQUFZLENBQUMsZUFDakVMLDBEQUFBLGFBQUtJLE9BQVksQ0FDaEIsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUYsT0FBTzs7Ozs7Ozs7VUN6QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvdW50ZXIgPSAoe2NvdW50ZXIsIGlzQ291bnRpbmcsIGluaXRDb3VudGVyLCBvblN0YXJ0Q291bnRlciwgb25QYXVzZSwgb25TZXRWYWx1ZX0pID0+IHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG9uU2V0VmFsdWUoaW5pdENvdW50ZXIpXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIG9uU3RhcnRDb3VudGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgICAgICBvblBhdXNlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdGFydH0gZGlzYWJsZWQ9e2lzQ291bnRpbmd9PlNUQVJUPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9IGRpc2FibGVkPXshaXNDb3VudGluZ30+U1RPUDwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPntjb3VudGVyfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlciIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI3YmIxNzU4ODFkZTgwOTFiNDA3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQ291bnRlciIsIl9yZWYiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsImluaXRDb3VudGVyIiwib25TdGFydENvdW50ZXIiLCJvblBhdXNlIiwib25TZXRWYWx1ZSIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlU3RvcCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9