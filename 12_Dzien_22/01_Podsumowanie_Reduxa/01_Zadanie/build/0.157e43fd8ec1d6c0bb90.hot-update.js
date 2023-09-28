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
/******/ 	__webpack_require__.h = () => ("4d94ff7201a6c61f7a5a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNTdlNDNmZDhlYzFkNmMwYmI5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFTztBQUVVO0FBRXJELElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxLQUFLLEVBQUFDLElBQUE7RUFBQSxJQUFHQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztFQUFBLE9BQU87SUFDcENBLE9BQU8sRUFBRUEsT0FBTyxHQUFHQSxPQUFPLEdBQUdGLEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLO0lBQ2hEQyxVQUFVLEVBQUVKLEtBQUssQ0FBQ0UsT0FBTyxDQUFDRTtFQUM5QixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxRQUFRO0VBQUEsT0FBTTtJQUMvQkMsY0FBYyxFQUFFLFNBQUFBLGVBQUE7TUFBQSxPQUFNRCxRQUFRLENBQUNULDREQUFZLENBQUMsQ0FBQyxDQUFDO0lBQUE7SUFDOUNXLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUYsUUFBUSxDQUFDUixxREFBSyxDQUFDLENBQUMsQ0FBQztJQUFBO0VBQ3BDLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVILG9EQUFPLENBQUNJLFFBQVEsRUFBRU0sV0FBVyxDQUFDLENBQUNULDJEQUFPLENBQUM7Ozs7Ozs7O1VDaEJ0RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL0NvdW50ZXInXG5cbmltcG9ydCB7c3RhcnRDb3VudGVyLCBwYXVzZX0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUsIHtjb3VudGVyfSkgPT4gKHtcbiAgICBjb3VudGVyOiBjb3VudGVyID8gY291bnRlciA6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25TdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBvblBhdXNlOiAoKSA9PiBkaXNwYXRjaChwYXVzZSgpKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDb3VudGVyKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRkOTRmZjcyMDFhNmM2MWY3YTVhXCIpIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJDb3VudGVyIiwic3RhcnRDb3VudGVyIiwicGF1c2UiLCJtYXBTdGF0ZSIsInN0YXRlIiwiX3JlZiIsImNvdW50ZXIiLCJ2YWx1ZSIsImlzQ291bnRpbmciLCJtYXBEaXNwYXRjaCIsImRpc3BhdGNoIiwib25TdGFydENvdW50ZXIiLCJvblBhdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==