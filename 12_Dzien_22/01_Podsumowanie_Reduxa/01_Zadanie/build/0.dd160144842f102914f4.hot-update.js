"use strict";
self["webpackHotUpdatees6_react"](0,{

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
/******/ 	__webpack_require__.h = () => ("c656516d88cf53a08381")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZDE2MDE0NDg0MmYxMDI5MTRmNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFTztBQUVVO0FBRXJELElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxLQUFLLEVBQUFDLElBQUE7RUFBQSxJQUFHQyxXQUFXLEdBQUFELElBQUEsQ0FBWEMsV0FBVztFQUFBLE9BQU87SUFDeENDLE9BQU8sRUFBRUgsS0FBSyxDQUFDRyxPQUFPLENBQUNDLEtBQUs7SUFDNUJDLFVBQVUsRUFBRUwsS0FBSyxDQUFDRyxPQUFPLENBQUNFO0VBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQy9CQyxjQUFjLEVBQUUsU0FBQUEsZUFBQTtNQUFBLE9BQU1ELFFBQVEsQ0FBQ1YsNERBQVksQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUM5Q1ksT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNRixRQUFRLENBQUNULHFEQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFDcEMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUgsb0RBQU8sQ0FBQ0ksUUFBUSxFQUFFTyxXQUFXLENBQUMsQ0FBQ1YsMkRBQU8sQ0FBQzs7Ozs7Ozs7VUNoQnREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRlcidcblxuaW1wb3J0IHtzdGFydENvdW50ZXIsIHBhdXNlfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSwge2luaXRDb3VudGVyfSkgPT4gKHtcbiAgICBjb3VudGVyOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uU3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgb25QYXVzZTogKCkgPT4gZGlzcGF0Y2gocGF1c2UoKSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ291bnRlcikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNjU2NTE2ZDg4Y2Y1M2EwODM4MVwiKSJdLCJuYW1lcyI6WyJjb25uZWN0IiwiQ291bnRlciIsInN0YXJ0Q291bnRlciIsInBhdXNlIiwibWFwU3RhdGUiLCJzdGF0ZSIsIl9yZWYiLCJpbml0Q291bnRlciIsImNvdW50ZXIiLCJ2YWx1ZSIsImlzQ291bnRpbmciLCJtYXBEaXNwYXRjaCIsImRpc3BhdGNoIiwib25TdGFydENvdW50ZXIiLCJvblBhdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==