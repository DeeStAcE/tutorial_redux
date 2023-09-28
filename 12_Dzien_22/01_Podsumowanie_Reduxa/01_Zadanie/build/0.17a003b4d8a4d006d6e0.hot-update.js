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



function dupa(state, _ref) {
  var counter = _ref.counter;
  state.counter.value = counter || 0;
}
var mapState = function mapState(state, _ref2) {
  var counter = _ref2.counter;
  return {
    counter: counter ? counter : state.counter.value,
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
/******/ 	__webpack_require__.h = () => ("43d952ae9e89023050bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xN2EwMDNiNGQ4YTRkMDA2ZDZlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFTztBQUVVO0FBRXJELFNBQVNJLElBQUlBLENBQUNDLEtBQUssRUFBQUMsSUFBQSxFQUFhO0VBQUEsSUFBVkMsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87RUFDekJGLEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLLEdBQUdELE9BQU8sSUFBSSxDQUFDO0FBQ3RDO0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlKLEtBQUssRUFBQUssS0FBQTtFQUFBLElBQUdILE9BQU8sR0FBQUcsS0FBQSxDQUFQSCxPQUFPO0VBQUEsT0FBTztJQUNwQ0EsT0FBTyxFQUFFQSxPQUFPLEdBQUdBLE9BQU8sR0FBR0YsS0FBSyxDQUFDRSxPQUFPLENBQUNDLEtBQUs7SUFDaERHLFVBQVUsRUFBRU4sS0FBSyxDQUFDRSxPQUFPLENBQUNJO0VBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQy9CQyxjQUFjLEVBQUUsU0FBQUEsZUFBQTtNQUFBLE9BQU1ELFFBQVEsQ0FBQ1gsNERBQVksQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUM5Q2EsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNRixRQUFRLENBQUNWLHFEQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFDcEMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUgsb0RBQU8sQ0FBQ1MsUUFBUSxFQUFFRyxXQUFXLENBQUMsQ0FBQ1gsMkRBQU8sQ0FBQzs7Ozs7Ozs7VUNwQnREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRlcidcblxuaW1wb3J0IHtzdGFydENvdW50ZXIsIHBhdXNlfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBkdXBhKHN0YXRlLCB7Y291bnRlcn0pIHtcbiAgICBzdGF0ZS5jb3VudGVyLnZhbHVlID0gY291bnRlciB8fCAwXG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlLCB7Y291bnRlcn0pID0+ICh7XG4gICAgY291bnRlcjogY291bnRlciA/IGNvdW50ZXIgOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uU3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgb25QYXVzZTogKCkgPT4gZGlzcGF0Y2gocGF1c2UoKSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ291bnRlcikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0M2Q5NTJhZTllODkwMjMwNTBiYlwiKSJdLCJuYW1lcyI6WyJjb25uZWN0IiwiQ291bnRlciIsInN0YXJ0Q291bnRlciIsInBhdXNlIiwiZHVwYSIsInN0YXRlIiwiX3JlZiIsImNvdW50ZXIiLCJ2YWx1ZSIsIm1hcFN0YXRlIiwiX3JlZjIiLCJpc0NvdW50aW5nIiwibWFwRGlzcGF0Y2giLCJkaXNwYXRjaCIsIm9uU3RhcnRDb3VudGVyIiwib25QYXVzZSJdLCJzb3VyY2VSb290IjoiIn0=