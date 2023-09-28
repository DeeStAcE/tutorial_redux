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
    counter: initCounter || state.counter.value,
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
/******/ 	__webpack_require__.h = () => ("59dcb81bb0a60ddfb1a8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNjU2NTE2ZDg4Y2Y1M2EwODM4MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFTztBQUVVO0FBRXJELElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxLQUFLLEVBQUFDLElBQUE7RUFBQSxJQUFHQyxXQUFXLEdBQUFELElBQUEsQ0FBWEMsV0FBVztFQUFBLE9BQU87SUFDeENDLE9BQU8sRUFBRUQsV0FBVyxJQUFJRixLQUFLLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSztJQUMzQ0MsVUFBVSxFQUFFTCxLQUFLLENBQUNHLE9BQU8sQ0FBQ0U7RUFDOUIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUMsUUFBUTtFQUFBLE9BQU07SUFDL0JDLGNBQWMsRUFBRSxTQUFBQSxlQUFBO01BQUEsT0FBTUQsUUFBUSxDQUFDViw0REFBWSxDQUFDLENBQUMsQ0FBQztJQUFBO0lBQzlDWSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1GLFFBQVEsQ0FBQ1QscURBQUssQ0FBQyxDQUFDLENBQUM7SUFBQTtFQUNwQyxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlSCxvREFBTyxDQUFDSSxRQUFRLEVBQUVPLFdBQVcsQ0FBQyxDQUFDViwyREFBTyxDQUFDOzs7Ozs7OztVQ2hCdEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJ1xuXG5pbXBvcnQge3N0YXJ0Q291bnRlciwgcGF1c2V9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlLCB7aW5pdENvdW50ZXJ9KSA9PiAoe1xuICAgIGNvdW50ZXI6IGluaXRDb3VudGVyIHx8IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25TdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBvblBhdXNlOiAoKSA9PiBkaXNwYXRjaChwYXVzZSgpKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDb3VudGVyKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU5ZGNiODFiYjBhNjBkZGZiMWE4XCIpIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJDb3VudGVyIiwic3RhcnRDb3VudGVyIiwicGF1c2UiLCJtYXBTdGF0ZSIsInN0YXRlIiwiX3JlZiIsImluaXRDb3VudGVyIiwiY291bnRlciIsInZhbHVlIiwiaXNDb3VudGluZyIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiXSwic291cmNlUm9vdCI6IiJ9