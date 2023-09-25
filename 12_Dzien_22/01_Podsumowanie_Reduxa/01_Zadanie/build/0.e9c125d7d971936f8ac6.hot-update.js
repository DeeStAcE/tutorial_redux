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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("de2f6c00a50051532f54")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lOWMxMjVkN2Q5NzE5MzZmOGFjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUF1RDtFQUFBLElBQWxEQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxjQUFjLEdBQUFILElBQUEsQ0FBZEcsY0FBYztJQUFFQyxPQUFPLEdBQUFKLElBQUEsQ0FBUEksT0FBTztFQUUxRCxvQkFDSU4sMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFRLE9BQU8sRUFBRUg7RUFBZSxHQUFDLE9BQWEsQ0FBQyxlQUMvQ0wsMERBQUE7SUFBUVEsT0FBTyxFQUFFRjtFQUFRLEdBQUMsTUFBWSxDQUFDLGVBQ3ZDTiwwREFBQSxhQUFLRyxPQUFZLENBQ2hCLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVGLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDYmM7QUFFTztBQUVnQjtBQUUzRCxJQUFNWSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsS0FBSztFQUFBLE9BQU07SUFDekJYLE9BQU8sRUFBRVcsS0FBSyxDQUFDWCxPQUFPLENBQUNZLEtBQUs7SUFDNUJYLFVBQVUsRUFBRVUsS0FBSyxDQUFDWCxPQUFPLENBQUNDO0VBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTVksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQy9CWixjQUFjLEVBQUUsU0FBQUEsZUFBQTtNQUFBLE9BQU1ZLFFBQVEsQ0FBQ1AsNERBQVksQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUM5Q0osT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNVyxRQUFRLENBQUNOLHFEQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFDcEMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUYsb0RBQU8sQ0FBQ0ksUUFBUSxFQUFFRyxXQUFXLENBQUMsQ0FBQ2YsMkRBQU8sQ0FBQzs7Ozs7Ozs7VUNoQnREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3VudGVyID0gKHtjb3VudGVyLCBpc0NvdW50aW5nLCBvblN0YXJ0Q291bnRlciwgb25QYXVzZX0pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3RhcnRDb3VudGVyfT5TVEFSVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblBhdXNlfT5TVE9QPC9idXR0b24+XG4gICAgICAgICAgICA8aDE+e2NvdW50ZXJ9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJ1xuXG5pbXBvcnQge3N0YXJ0Q291bnRlciwgcGF1c2UsIHNhdmV9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICAgIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25TdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBvblBhdXNlOiAoKSA9PiBkaXNwYXRjaChwYXVzZSgpKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDb3VudGVyKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRlMmY2YzAwYTUwMDUxNTMyZjU0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsIl9yZWYiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsIm9uU3RhcnRDb3VudGVyIiwib25QYXVzZSIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiY29ubmVjdCIsInN0YXJ0Q291bnRlciIsInBhdXNlIiwic2F2ZSIsIm1hcFN0YXRlIiwic3RhdGUiLCJ2YWx1ZSIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9