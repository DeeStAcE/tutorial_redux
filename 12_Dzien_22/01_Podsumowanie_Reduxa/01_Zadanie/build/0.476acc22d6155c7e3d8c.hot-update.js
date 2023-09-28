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
  var counter = _ref.counter;
  return {
    counter: counter,
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
/******/ 	__webpack_require__.h = () => ("ab02843359e832578262")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40NzZhY2MyMmQ2MTU1YzdlM2Q4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFTztBQUVnQjtBQUUzRCxJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsS0FBSyxFQUFBQyxJQUFBO0VBQUEsSUFBR0MsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87RUFBQSxPQUFPO0lBQ3BDQSxPQUFPLEVBQUVBLE9BQU87SUFDaEJDLFVBQVUsRUFBRUgsS0FBSyxDQUFDRSxPQUFPLENBQUNDO0VBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQy9CQyxjQUFjLEVBQUUsU0FBQUEsZUFBQTtNQUFBLE9BQU1ELFFBQVEsQ0FBQ1QsNERBQVksQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUM5Q1csT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNRixRQUFRLENBQUNSLHFEQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFDcEMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUgsb0RBQU8sQ0FBQ0ssUUFBUSxFQUFFSyxXQUFXLENBQUMsQ0FBQ1QsMkRBQU8sQ0FBQzs7Ozs7Ozs7VUNoQnREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRlcidcblxuaW1wb3J0IHtzdGFydENvdW50ZXIsIHBhdXNlLCBzYXZlfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSwge2NvdW50ZXJ9KSA9PiAoe1xuICAgIGNvdW50ZXI6IGNvdW50ZXIsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25TdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBvblBhdXNlOiAoKSA9PiBkaXNwYXRjaChwYXVzZSgpKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDb3VudGVyKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFiMDI4NDMzNTllODMyNTc4MjYyXCIpIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJDb3VudGVyIiwic3RhcnRDb3VudGVyIiwicGF1c2UiLCJzYXZlIiwibWFwU3RhdGUiLCJzdGF0ZSIsIl9yZWYiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiXSwic291cmNlUm9vdCI6IiJ9