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
/******/ 	__webpack_require__.h = () => ("e421287c4268570fdcc2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZGQ3ZGExZTdmMWMwNjNiM2JjNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUF1RDtFQUFBLElBQWxEQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxjQUFjLEdBQUFILElBQUEsQ0FBZEcsY0FBYztJQUFFQyxPQUFPLEdBQUFKLElBQUEsQ0FBUEksT0FBTztFQUUxRCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCRixjQUFjLENBQUMsQ0FBQztFQUNwQixDQUFDO0VBRUQsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQkYsT0FBTyxDQUFDLENBQUM7RUFDYixDQUFDO0VBRUQsb0JBQ0lOLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRVSxPQUFPLEVBQUVILFdBQVk7SUFBQ0ksUUFBUSxFQUFFUDtFQUFXLEdBQUMsT0FBYSxDQUFDLGVBQ2xFSiwwREFBQTtJQUFRVSxPQUFPLEVBQUVGLFVBQVc7SUFBQ0csUUFBUSxFQUFFLENBQUNQO0VBQVcsR0FBQyxNQUFZLENBQUMsZUFDakVKLDBEQUFBLGFBQUtHLE9BQVksQ0FDaEIsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUYsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNyQmM7QUFFTztBQUVnQjtBQUUzRCxJQUFNZSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsS0FBSztFQUFBLE9BQU07SUFDekJkLE9BQU8sRUFBRWMsS0FBSyxDQUFDZCxPQUFPLENBQUNlLEtBQUs7SUFDNUJkLFVBQVUsRUFBRWEsS0FBSyxDQUFDZCxPQUFPLENBQUNDO0VBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTWUsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQy9CZixjQUFjLEVBQUUsU0FBQUEsZUFBQTtNQUFBLE9BQU1lLFFBQVEsQ0FBQ1AsNERBQVksQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUM5Q1AsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNYyxRQUFRLENBQUNOLHFEQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFDcEMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUYsb0RBQU8sQ0FBQ0ksUUFBUSxFQUFFRyxXQUFXLENBQUMsQ0FBQ2xCLDJEQUFPLENBQUM7Ozs7Ozs7O1VDaEJ0RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRlciA9ICh7Y291bnRlciwgaXNDb3VudGluZywgb25TdGFydENvdW50ZXIsIG9uUGF1c2V9KSA9PiB7XG5cbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICAgICAgb25TdGFydENvdW50ZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgICAgIG9uUGF1c2UoKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0YXJ0fSBkaXNhYmxlZD17aXNDb3VudGluZ30+U1RBUlQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0gZGlzYWJsZWQ9eyFpc0NvdW50aW5nfT5TVE9QPC9idXR0b24+XG4gICAgICAgICAgICA8aDE+e2NvdW50ZXJ9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJ1xuXG5pbXBvcnQge3N0YXJ0Q291bnRlciwgcGF1c2UsIHNhdmV9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICAgIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25TdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBvblBhdXNlOiAoKSA9PiBkaXNwYXRjaChwYXVzZSgpKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDb3VudGVyKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU0MjEyODdjNDI2ODU3MGZkY2MyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsIl9yZWYiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsIm9uU3RhcnRDb3VudGVyIiwib25QYXVzZSIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlU3RvcCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJjb25uZWN0Iiwic3RhcnRDb3VudGVyIiwicGF1c2UiLCJzYXZlIiwibWFwU3RhdGUiLCJzdGF0ZSIsInZhbHVlIiwibWFwRGlzcGF0Y2giLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=