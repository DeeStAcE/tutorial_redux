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
    onPause = _ref.onPause,
    onSave = _ref.onSave;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onStartCounter
  }, "START"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onPause
  }, "STOP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, state.counter)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "ZAPISZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null))));
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
    },
    onSave: function onSave(payload) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.save)(payload));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapState, mapDispatch)(_components_Counter__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("96b42ff8737f10ff84d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNDNmY2M1ODU1MzRmYTdiMzg1Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsS0FBSyxFQUFBQyxJQUFBLEVBQXdDO0VBQUEsSUFBckNDLGNBQWMsR0FBQUQsSUFBQSxDQUFkQyxjQUFjO0lBQUVDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0lBQUVDLE1BQU0sR0FBQUgsSUFBQSxDQUFORyxNQUFNO0VBQ3BELG9CQUNJTiwwREFBQSwyQkFDSUEsMERBQUEsMkJBQ0lBLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRUSxPQUFPLEVBQUVKO0VBQWUsR0FBQyxPQUFhLENBQUMsZUFDL0NKLDBEQUFBO0lBQVFRLE9BQU8sRUFBRUg7RUFBUSxHQUFDLE1BQVksQ0FBQyxlQUN2Q0wsMERBQUEsYUFBS0UsS0FBSyxDQUFDTyxPQUFZLENBQ3RCLENBQUMsZUFDTlQsMERBQUEsMkJBQ0lBLDBEQUFBLGlCQUFTLFFBQWMsQ0FBQyxlQUN4QkEsMERBQUEsV0FFSSxDQUNILENBQ0osQ0FDSixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlQyxPQUFPOzs7Ozs7Ozs7Ozs7OztBQ3RCYztBQUVPO0FBRWdCO0FBRTNELElBQU1hLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJWixLQUFLO0VBQUEsT0FBTTtJQUN6Qk8sT0FBTyxFQUFFUCxLQUFLLENBQUNPLE9BQU8sQ0FBQ007RUFDM0IsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUMsUUFBUTtFQUFBLE9BQU07SUFDL0JiLGNBQWMsRUFBRSxTQUFBQSxlQUFBO01BQUEsT0FBTWEsUUFBUSxDQUFDTiw0REFBWSxDQUFDLENBQUMsQ0FBQztJQUFBO0lBQzlDTixPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1ZLFFBQVEsQ0FBQ0wscURBQUssQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUNoQ04sTUFBTSxFQUFFLFNBQUFBLE9BQUNZLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNKLG9EQUFJLENBQUNLLE9BQU8sQ0FBQyxDQUFDO0lBQUE7RUFDaEQsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZVIsb0RBQU8sQ0FBQ0ksUUFBUSxFQUFFRSxXQUFXLENBQUMsQ0FBQ2YsMkRBQU8sQ0FBQzs7Ozs7Ozs7VUNoQnREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3VudGVyID0gKHN0YXRlLCB7b25TdGFydENvdW50ZXIsIG9uUGF1c2UsIG9uU2F2ZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3RhcnRDb3VudGVyfT5TVEFSVDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUGF1c2V9PlNUT1A8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPntzdGF0ZS5jb3VudGVyfTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiA+WkFQSVNaPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cblxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlciIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRlcidcblxuaW1wb3J0IHtzdGFydENvdW50ZXIsIHBhdXNlLCBzYXZlfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgICBjb3VudGVyOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25TdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBvblBhdXNlOiAoKSA9PiBkaXNwYXRjaChwYXVzZSgpKSxcbiAgICBvblNhdmU6IChwYXlsb2FkKSA9PiBkaXNwYXRjaChzYXZlKHBheWxvYWQpKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDb3VudGVyKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk2YjQyZmY4NzM3ZjEwZmY4NGQ0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsInN0YXRlIiwiX3JlZiIsIm9uU3RhcnRDb3VudGVyIiwib25QYXVzZSIsIm9uU2F2ZSIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiY291bnRlciIsImNvbm5lY3QiLCJzdGFydENvdW50ZXIiLCJwYXVzZSIsInNhdmUiLCJtYXBTdGF0ZSIsInZhbHVlIiwibWFwRGlzcGF0Y2giLCJkaXNwYXRjaCIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9