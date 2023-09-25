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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, !isCounting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onStartCounter
  }, "START"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onPause
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapState, mapDispatch)(_components_Counter__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("295a4bd2a16d52ef4c21")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZmU0NTg1MzQzZGQ3OTUwYTZhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUF1RDtFQUFBLElBQWxEQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxjQUFjLEdBQUFILElBQUEsQ0FBZEcsY0FBYztJQUFFQyxPQUFPLEdBQUFKLElBQUEsQ0FBUEksT0FBTztFQUUxRCxvQkFDSU4sMERBQUEsY0FDSyxDQUFDSSxVQUFVLGlCQUFJSiwwREFBQTtJQUFRUSxPQUFPLEVBQUVIO0VBQWUsR0FBQyxPQUFhLENBQUMsZUFFL0RMLDBEQUFBO0lBQVFRLE9BQU8sRUFBRUY7RUFBUSxHQUFDLE1BQVksQ0FBQyxlQUN2Q04sMERBQUEsYUFBS0csT0FBWSxDQUNoQixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlRixPQUFPOzs7Ozs7Ozs7Ozs7OztBQ2RjO0FBRU87QUFFZ0I7QUFFM0QsSUFBTVksUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlDLEtBQUs7RUFBQSxPQUFNO0lBQ3pCWCxPQUFPLEVBQUVXLEtBQUssQ0FBQ1gsT0FBTyxDQUFDWSxLQUFLO0lBQzVCWCxVQUFVLEVBQUVVLEtBQUssQ0FBQ1gsT0FBTyxDQUFDQztFQUM5QixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1ZLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxRQUFRO0VBQUEsT0FBTTtJQUMvQlosY0FBYyxFQUFFLFNBQUFBLGVBQUE7TUFBQSxPQUFNWSxRQUFRLENBQUNQLDREQUFZLENBQUMsQ0FBQyxDQUFDO0lBQUE7SUFDOUNKLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTVcsUUFBUSxDQUFDTixxREFBSyxDQUFDLENBQUMsQ0FBQztJQUFBO0VBQ3BDLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVGLG9EQUFPLENBQUNJLFFBQVEsRUFBRUcsV0FBVyxDQUFDLENBQUNmLDJEQUFPLENBQUM7Ozs7Ozs7O1VDaEJ0RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRlciA9ICh7Y291bnRlciwgaXNDb3VudGluZywgb25TdGFydENvdW50ZXIsIG9uUGF1c2V9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyFpc0NvdW50aW5nICYmIDxidXR0b24gb25DbGljaz17b25TdGFydENvdW50ZXJ9PlNUQVJUPC9idXR0b24+fVxuICAgICAgICAgICAgey8qPGJ1dHRvbiBvbkNsaWNrPXtvblN0YXJ0Q291bnRlcn0+U1RBUlQ8L2J1dHRvbj4qL31cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25QYXVzZX0+U1RPUDwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPntjb3VudGVyfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlciIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRlcidcblxuaW1wb3J0IHtzdGFydENvdW50ZXIsIHBhdXNlLCBzYXZlfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgICBjb3VudGVyOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uU3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgb25QYXVzZTogKCkgPT4gZGlzcGF0Y2gocGF1c2UoKSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ291bnRlcikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyOTVhNGJkMmExNmQ1MmVmNGMyMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvdW50ZXIiLCJfcmVmIiwiY291bnRlciIsImlzQ291bnRpbmciLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImNvbm5lY3QiLCJzdGFydENvdW50ZXIiLCJwYXVzZSIsInNhdmUiLCJtYXBTdGF0ZSIsInN0YXRlIiwidmFsdWUiLCJtYXBEaXNwYXRjaCIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==