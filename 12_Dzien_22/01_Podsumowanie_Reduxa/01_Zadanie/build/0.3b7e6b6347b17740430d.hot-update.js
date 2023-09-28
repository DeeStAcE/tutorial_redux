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

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);



var mapState = function mapState(state, _ref) {
  var initCounter = _ref.initCounter;
  return {
    counter: initCounter || state.counter.value,
    isCounting: state.counter.isCounting,
    state: state
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapState, mapDispatch)(_components_Counter__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0ae2d0220801ad8f8e49")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYjdlNmI2MzQ3YjE3NzQwNDMwZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsS0FBSyxFQUFBQyxJQUFBLEVBQXFEO0VBQUEsSUFBbERDLE9BQU8sR0FBQUQsSUFBQSxDQUFQQyxPQUFPO0lBQUVDLFVBQVUsR0FBQUYsSUFBQSxDQUFWRSxVQUFVO0lBQUVDLGNBQWMsR0FBQUgsSUFBQSxDQUFkRyxjQUFjO0lBQUVDLE9BQU8sR0FBQUosSUFBQSxDQUFQSSxPQUFPO0VBRWpFLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJGLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCLENBQUM7RUFFRCxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCRixPQUFPLENBQUMsQ0FBQztFQUNiLENBQUM7RUFFRCxvQkFDSVAsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFXLE9BQU8sRUFBRUgsV0FBWTtJQUFDSSxRQUFRLEVBQUVQO0VBQVcsR0FBQyxPQUFhLENBQUMsZUFDbEVMLDBEQUFBO0lBQVFXLE9BQU8sRUFBRUYsVUFBVztJQUFDRyxRQUFRLEVBQUUsQ0FBQ1A7RUFBVyxHQUFDLE1BQVksQ0FBQyxlQUNqRUwsMERBQUEsYUFBS0ksT0FBWSxDQUNoQixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlSCxPQUFPOzs7Ozs7Ozs7Ozs7OztBQ3JCYztBQUVPO0FBRVU7QUFFckQsSUFBTWUsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlkLEtBQUssRUFBQUMsSUFBQTtFQUFBLElBQUdjLFdBQVcsR0FBQWQsSUFBQSxDQUFYYyxXQUFXO0VBQUEsT0FBTztJQUN4Q2IsT0FBTyxFQUFFYSxXQUFXLElBQUlmLEtBQUssQ0FBQ0UsT0FBTyxDQUFDYyxLQUFLO0lBQzNDYixVQUFVLEVBQUVILEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxVQUFVO0lBQ3BDSCxLQUFLLEVBQUxBO0VBQ0osQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNaUIsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQy9CZCxjQUFjLEVBQUUsU0FBQUEsZUFBQTtNQUFBLE9BQU1jLFFBQVEsQ0FBQ04sNERBQVksQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUM5Q1AsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNYSxRQUFRLENBQUNMLHFEQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFDcEMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUYsb0RBQU8sQ0FBQ0csUUFBUSxFQUFFRyxXQUFXLENBQUMsQ0FBQ2xCLDJEQUFPLENBQUM7Ozs7Ozs7O1VDakJ0RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRlciA9IChzdGF0ZSwge2NvdW50ZXIsIGlzQ291bnRpbmcsIG9uU3RhcnRDb3VudGVyLCBvblBhdXNlfSkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIG9uU3RhcnRDb3VudGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgICAgICBvblBhdXNlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdGFydH0gZGlzYWJsZWQ9e2lzQ291bnRpbmd9PlNUQVJUPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9IGRpc2FibGVkPXshaXNDb3VudGluZ30+U1RPUDwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPntjb3VudGVyfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlciIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRlcidcblxuaW1wb3J0IHtzdGFydENvdW50ZXIsIHBhdXNlfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSwge2luaXRDb3VudGVyfSkgPT4gKHtcbiAgICBjb3VudGVyOiBpbml0Q291bnRlciB8fCBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbiAgICBzdGF0ZSxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uU3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgb25QYXVzZTogKCkgPT4gZGlzcGF0Y2gocGF1c2UoKSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ291bnRlcikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYWUyZDAyMjA4MDFhZDhmOGU0OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvdW50ZXIiLCJzdGF0ZSIsIl9yZWYiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsIm9uU3RhcnRDb3VudGVyIiwib25QYXVzZSIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlU3RvcCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJjb25uZWN0Iiwic3RhcnRDb3VudGVyIiwicGF1c2UiLCJtYXBTdGF0ZSIsImluaXRDb3VudGVyIiwidmFsdWUiLCJtYXBEaXNwYXRjaCIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==