"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var List = function List(_ref) {
  var counter = _ref.counter,
    list = _ref.list,
    onSave = _ref.onSave;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onSave(counter)
  }, "ZAPISZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, list.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, element);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var _containers_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _containers_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);






var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_List__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 80:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);



var mapState = function mapState(state) {
  return {
    list: state.list,
    counter: state.counter.value
  };
};
var mapDispatch = function mapDispatch(dispatch) {
  return {
    onSave: function onSave(payload) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.save)(payload));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapState, mapDispatch)(_components_List__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5557e4b84ede328405e0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iOTc3YWJkYzdiMjg4NjkzZjFmOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFnQztFQUFBLElBQTNCQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxJQUFJLEdBQUFGLElBQUEsQ0FBSkUsSUFBSTtJQUFFQyxNQUFNLEdBQUFILElBQUEsQ0FBTkcsTUFBTTtFQUNoQyxvQkFDSUwsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFPLE9BQU8sRUFBRUYsTUFBTSxDQUFDRixPQUFPO0VBQUUsR0FBQyxRQUFjLENBQUMsZUFDakRILDBEQUFBLGFBQ0tJLElBQUksQ0FBQ0ksR0FBRyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO0lBQzFCLG9CQUFPViwwREFBQTtNQUFJVyxHQUFHLEVBQUVEO0lBQU0sR0FBRUQsT0FBWSxDQUFDO0VBQ3pDLENBQUMsQ0FDRCxDQUNILENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVSLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1c7QUFNWDtBQUVpQjtBQUNOO0FBQ0g7QUFFbEMsSUFBTW1CLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBLEVBQVM7RUFDZixvQkFDSXBCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDWSxpREFBUTtJQUFDTyxLQUFLLEVBQUVBLG9EQUFLQTtFQUFDLGdCQUNuQm5CLDBEQUFBLENBQUNjLDJEQUFNLHFCQUNIZCwwREFBQSxDQUFDa0IsMkRBQU8sTUFBQyxDQUFDLGVBQ1ZsQiwwREFBQSxDQUFDQyx3REFBSSxNQUFDLENBQ0YsQ0FDRixDQUNaLENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWVtQixJQUFJOzs7Ozs7Ozs7Ozs7OztBQzFCaUI7QUFFQztBQUVDO0FBRXRDLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUN6QnJCLElBQUksRUFBRXFCLEtBQUssQ0FBQ3JCLElBQUk7SUFDaEJELE9BQU8sRUFBRXNCLEtBQUssQ0FBQ3RCLE9BQU8sQ0FBQ3VCO0VBQzNCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQy9CdkIsTUFBTSxFQUFFLFNBQUFBLE9BQUN3QixPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDTCxvREFBSSxDQUFDTSxPQUFPLENBQUMsQ0FBQztJQUFBO0VBQ2hELENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVQLG9EQUFPLENBQUNFLFFBQVEsRUFBRUcsV0FBVyxDQUFDLENBQUMxQix3REFBSSxDQUFDOzs7Ozs7OztVQ2ZuRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9MaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMaXN0ID0gKHtjb3VudGVyLCBsaXN0LCBvblNhdmV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25TYXZlKGNvdW50ZXIpfT5aQVBJU1o8L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7bGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+e2VsZW1lbnR9PC9saT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcbiAgICBSb3V0ZXMsXG4gICAgUm91dGUsXG4gICAgdXNlUGFyYW1zXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQ291bnRlcidcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbnRhaW5lcnMvTGlzdCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICAgICAgPENvdW50ZXIvPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnXG5cbmltcG9ydCB7c2F2ZX0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gICAgbGlzdDogc3RhdGUubGlzdCxcbiAgICBjb3VudGVyOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25TYXZlOiAocGF5bG9hZCkgPT4gZGlzcGF0Y2goc2F2ZShwYXlsb2FkKSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoTGlzdCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1NTU3ZTRiODRlZGUzMjg0MDVlMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpc3QiLCJfcmVmIiwiY291bnRlciIsImxpc3QiLCJvblNhdmUiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImtleSIsIlByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwidXNlUGFyYW1zIiwiQ291bnRlciIsInN0b3JlIiwiTWFpbiIsIkZyYWdtZW50IiwiY29ubmVjdCIsInNhdmUiLCJtYXBTdGF0ZSIsInN0YXRlIiwidmFsdWUiLCJtYXBEaXNwYXRjaCIsImRpc3BhdGNoIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=