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
  var onStartCounter = _ref.onStartCounter,
    onPause = _ref.onPause;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onStartCounter
  }, "START"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onPause
  }, "STOP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, state.counter));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var List = function List() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "ZAPISZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

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
    counter: state.counter.value
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

/***/ }),

/***/ 80:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);


var mapState = function mapState(state) {
  return {
    list: state.list
  };
};
var mapDispatch = function mapDispatch(dispatch) {
  return {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapState, mapDispatch)(_components_List__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e33d3d1470fb8fa17e34")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NmI0MmZmODczN2YxMGZmODRkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsS0FBSyxFQUFBQyxJQUFBLEVBQWdDO0VBQUEsSUFBN0JDLGNBQWMsR0FBQUQsSUFBQSxDQUFkQyxjQUFjO0lBQUVDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0VBQzVDLG9CQUNJTCwwREFBQSwyQkFDSUEsMERBQUE7SUFBUU8sT0FBTyxFQUFFSDtFQUFlLEdBQUMsT0FBYSxDQUFDLGVBQy9DSiwwREFBQTtJQUFRTyxPQUFPLEVBQUVGO0VBQVEsR0FBQyxNQUFZLENBQUMsZUFDdkNMLDBEQUFBLGFBQUtFLEtBQUssQ0FBQ00sT0FBWSxDQUN0QixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlUCxPQUFPOzs7Ozs7Ozs7Ozs7O0FDWkk7QUFFMUIsSUFBTVEsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztFQUNmLG9CQUNJVCwwREFBQSwyQkFDSUEsMERBQUEsaUJBQVEsUUFBYyxDQUFDLGVBQ3ZCQSwwREFBQSxXQUVJLENBQ0gsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNiaUI7QUFFTztBQUVnQjtBQUUzRCxJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSVosS0FBSztFQUFBLE9BQU07SUFDekJNLE9BQU8sRUFBRU4sS0FBSyxDQUFDTSxPQUFPLENBQUNPO0VBQzNCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQy9CYixjQUFjLEVBQUUsU0FBQUEsZUFBQTtNQUFBLE9BQU1hLFFBQVEsQ0FBQ04sNERBQVksQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUM5Q04sT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNWSxRQUFRLENBQUNMLHFEQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFDcEMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUYsb0RBQU8sQ0FBQ0ksUUFBUSxFQUFFRSxXQUFXLENBQUMsQ0FBQ2YsMkRBQU8sQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2ZsQjtBQUVDO0FBRXJDLElBQU1hLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJWixLQUFLO0VBQUEsT0FBTTtJQUN6QmdCLElBQUksRUFBRWhCLEtBQUssQ0FBQ2dCO0VBQ2hCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUYsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNLENBQUMsQ0FBQztBQUFBLENBQUM7QUFFdEMsaUVBQWVQLG9EQUFPLENBQUNJLFFBQVEsRUFBRUUsV0FBVyxDQUFDLENBQUNQLHdEQUFJLENBQUM7Ozs7Ozs7O1VDVm5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9MaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRlciA9IChzdGF0ZSwge29uU3RhcnRDb3VudGVyLCBvblBhdXNlfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3RhcnRDb3VudGVyfT5TVEFSVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblBhdXNlfT5TVE9QPC9idXR0b24+XG4gICAgICAgICAgICA8aDE+e3N0YXRlLmNvdW50ZXJ9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uPlpBUElTWjwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsPlxuXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3QiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL0NvdW50ZXInXG5cbmltcG9ydCB7c3RhcnRDb3VudGVyLCBwYXVzZSwgc2F2ZX0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gICAgY291bnRlcjogc3RhdGUuY291bnRlci52YWx1ZSxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uU3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgb25QYXVzZTogKCkgPT4gZGlzcGF0Y2gocGF1c2UoKSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ291bnRlcikiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnXG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICAgIGxpc3Q6IHN0YXRlLmxpc3QsXG59KVxuXG5jb25zdCBtYXBEaXNwYXRjaCA9IChkaXNwYXRjaCkgPT4gKHt9KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoTGlzdCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMzNkM2QxNDcwZmI4ZmExN2UzNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvdW50ZXIiLCJzdGF0ZSIsIl9yZWYiLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImNvdW50ZXIiLCJMaXN0IiwiY29ubmVjdCIsInN0YXJ0Q291bnRlciIsInBhdXNlIiwic2F2ZSIsIm1hcFN0YXRlIiwidmFsdWUiLCJtYXBEaXNwYXRjaCIsImRpc3BhdGNoIiwibGlzdCJdLCJzb3VyY2VSb290IjoiIn0=