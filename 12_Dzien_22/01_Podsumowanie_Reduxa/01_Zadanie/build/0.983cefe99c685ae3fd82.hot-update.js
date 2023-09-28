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
  state.counter.value = counter || 0;
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
/******/ 	__webpack_require__.h = () => ("ee705387d1b721e64102")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ODNjZWZlOTljNjg1YWUzZmQ4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsS0FBSyxFQUFBQyxJQUFBLEVBQXFEO0VBQUEsSUFBbERDLE9BQU8sR0FBQUQsSUFBQSxDQUFQQyxPQUFPO0lBQUVDLFVBQVUsR0FBQUYsSUFBQSxDQUFWRSxVQUFVO0lBQUVDLGNBQWMsR0FBQUgsSUFBQSxDQUFkRyxjQUFjO0lBQUVDLE9BQU8sR0FBQUosSUFBQSxDQUFQSSxPQUFPO0VBRWpFTCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSixPQUFPLElBQUksQ0FBQztFQUVsQyxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCSCxjQUFjLENBQUMsQ0FBQztFQUNwQixDQUFDO0VBRUQsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQkgsT0FBTyxDQUFDLENBQUM7RUFDYixDQUFDO0VBRUQsb0JBQ0lQLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRWSxPQUFPLEVBQUVILFdBQVk7SUFBQ0ksUUFBUSxFQUFFUjtFQUFXLEdBQUMsT0FBYSxDQUFDLGVBQ2xFTCwwREFBQTtJQUFRWSxPQUFPLEVBQUVGLFVBQVc7SUFBQ0csUUFBUSxFQUFFLENBQUNSO0VBQVcsR0FBQyxNQUFZLENBQUMsZUFDakVMLDBEQUFBLGFBQUtJLE9BQVksQ0FDaEIsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUgsT0FBTzs7Ozs7Ozs7VUN2QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRlciA9IChzdGF0ZSwge2NvdW50ZXIsIGlzQ291bnRpbmcsIG9uU3RhcnRDb3VudGVyLCBvblBhdXNlfSkgPT4ge1xuXG4gICAgc3RhdGUuY291bnRlci52YWx1ZSA9IGNvdW50ZXIgfHwgMFxuXG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIG9uU3RhcnRDb3VudGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgICAgICBvblBhdXNlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdGFydH0gZGlzYWJsZWQ9e2lzQ291bnRpbmd9PlNUQVJUPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9IGRpc2FibGVkPXshaXNDb3VudGluZ30+U1RPUDwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPntjb3VudGVyfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlciIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVlNzA1Mzg3ZDFiNzIxZTY0MTAyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsInN0YXRlIiwiX3JlZiIsImNvdW50ZXIiLCJpc0NvdW50aW5nIiwib25TdGFydENvdW50ZXIiLCJvblBhdXNlIiwidmFsdWUiLCJoYW5kbGVTdGFydCIsImhhbmRsZVN0b3AiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==