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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, !isCounting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onStartCounter
  }, "START") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onStartCounter,
    disabled: true
  }, "START"), isCounting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onPause
  }, "STOP") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onPause,
    disabled: true
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
/******/ 	__webpack_require__.h = () => ("af9cdd720fc36652158b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ODcxODY0M2M1ODY5OGNjNjA0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUF1RDtFQUFBLElBQWxEQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxjQUFjLEdBQUFILElBQUEsQ0FBZEcsY0FBYztJQUFFQyxPQUFPLEdBQUFKLElBQUEsQ0FBUEksT0FBTztFQUUxRCxvQkFDSU4sMERBQUEsY0FDSyxDQUFDSSxVQUFVLGdCQUFJSiwwREFBQTtJQUFRUSxPQUFPLEVBQUVIO0VBQWUsR0FBQyxPQUFhLENBQUMsZ0JBQzNETCwwREFBQTtJQUFRUSxPQUFPLEVBQUVILGNBQWU7SUFBQ0ksUUFBUTtFQUFBLEdBQUMsT0FBYSxDQUFFLEVBQzVETCxVQUFVLGdCQUFJSiwwREFBQTtJQUFRUSxPQUFPLEVBQUVGO0VBQVEsR0FBQyxNQUFZLENBQUMsZ0JBQ2xETiwwREFBQTtJQUFRUSxPQUFPLEVBQUVGLE9BQVE7SUFBQ0csUUFBUTtFQUFBLEdBQUMsTUFBWSxDQUFFLGVBR3JEVCwwREFBQSxhQUFLRyxPQUFZLENBQ2hCLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVGLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDakJjO0FBRU87QUFFZ0I7QUFFM0QsSUFBTWEsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlDLEtBQUs7RUFBQSxPQUFNO0lBQ3pCWixPQUFPLEVBQUVZLEtBQUssQ0FBQ1osT0FBTyxDQUFDYSxLQUFLO0lBQzVCWixVQUFVLEVBQUVXLEtBQUssQ0FBQ1osT0FBTyxDQUFDQztFQUM5QixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxRQUFRO0VBQUEsT0FBTTtJQUMvQmIsY0FBYyxFQUFFLFNBQUFBLGVBQUE7TUFBQSxPQUFNYSxRQUFRLENBQUNQLDREQUFZLENBQUMsQ0FBQyxDQUFDO0lBQUE7SUFDOUNMLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTVksUUFBUSxDQUFDTixxREFBSyxDQUFDLENBQUMsQ0FBQztJQUFBO0VBQ3BDLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVGLG9EQUFPLENBQUNJLFFBQVEsRUFBRUcsV0FBVyxDQUFDLENBQUNoQiwyREFBTyxDQUFDOzs7Ozs7OztVQ2hCdEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvdW50ZXIgPSAoe2NvdW50ZXIsIGlzQ291bnRpbmcsIG9uU3RhcnRDb3VudGVyLCBvblBhdXNlfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHshaXNDb3VudGluZyA/ICg8YnV0dG9uIG9uQ2xpY2s9e29uU3RhcnRDb3VudGVyfT5TVEFSVDwvYnV0dG9uPikgOiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN0YXJ0Q291bnRlcn0gZGlzYWJsZWQ+U1RBUlQ8L2J1dHRvbj4pfVxuICAgICAgICAgICAge2lzQ291bnRpbmcgPyAoPGJ1dHRvbiBvbkNsaWNrPXtvblBhdXNlfT5TVE9QPC9idXR0b24+KSA6IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUGF1c2V9IGRpc2FibGVkPlNUT1A8L2J1dHRvbj4pfVxuICAgICAgICAgICAgey8qPGJ1dHRvbiBvbkNsaWNrPXtvblN0YXJ0Q291bnRlcn0+U1RBUlQ8L2J1dHRvbj4qL31cbiAgICAgICAgICAgIHsvKjxidXR0b24gb25DbGljaz17b25QYXVzZX0+U1RPUDwvYnV0dG9uPiovfVxuICAgICAgICAgICAgPGgxPntjb3VudGVyfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlciIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRlcidcblxuaW1wb3J0IHtzdGFydENvdW50ZXIsIHBhdXNlLCBzYXZlfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgICBjb3VudGVyOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uU3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgb25QYXVzZTogKCkgPT4gZGlzcGF0Y2gocGF1c2UoKSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ291bnRlcikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhZjljZGQ3MjBmYzM2NjUyMTU4YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvdW50ZXIiLCJfcmVmIiwiY291bnRlciIsImlzQ291bnRpbmciLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImRpc2FibGVkIiwiY29ubmVjdCIsInN0YXJ0Q291bnRlciIsInBhdXNlIiwic2F2ZSIsIm1hcFN0YXRlIiwic3RhdGUiLCJ2YWx1ZSIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9