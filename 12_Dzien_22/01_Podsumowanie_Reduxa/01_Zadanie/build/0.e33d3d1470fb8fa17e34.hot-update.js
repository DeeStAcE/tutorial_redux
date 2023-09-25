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
  var list = _ref.list,
    onSave = _ref.onSave;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onSave
  }, "ZAPISZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, list.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, element);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

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
    list: state.list
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
/******/ 	__webpack_require__.h = () => ("409b11ec9db3f6bc55c9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMzNkM2QxNDcwZmI4ZmExN2UzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUF1QjtFQUFBLElBQWxCQyxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtJQUFFQyxNQUFNLEdBQUFGLElBQUEsQ0FBTkUsTUFBTTtFQUN2QixvQkFDSUosMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFNLE9BQU8sRUFBRUY7RUFBTyxHQUFDLFFBQWMsQ0FBQyxlQUN4Q0osMERBQUEsYUFDS0csSUFBSSxDQUFDSSxHQUFHLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUs7SUFDMUIsb0JBQU9ULDBEQUFBO01BQUlVLEdBQUcsRUFBRUQ7SUFBTSxHQUFFRCxPQUFZLENBQUM7RUFDekMsQ0FBQyxDQUNELENBQ0gsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVAsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNmaUI7QUFFQztBQUVDO0FBRXRDLElBQU1ZLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUN6QlgsSUFBSSxFQUFFVyxLQUFLLENBQUNYO0VBQ2hCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTVksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQy9CWixNQUFNLEVBQUUsU0FBQUEsT0FBQ2EsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ0osb0RBQUksQ0FBQ0ssT0FBTyxDQUFDLENBQUM7SUFBQTtFQUNoRCxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlTixvREFBTyxDQUFDRSxRQUFRLEVBQUVFLFdBQVcsQ0FBQyxDQUFDZCx3REFBSSxDQUFDOzs7Ozs7OztVQ2RuRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGlzdCA9ICh7bGlzdCwgb25TYXZlfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU2F2ZX0+WkFQSVNaPC9idXR0b24+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9PntlbGVtZW50fTwvbGk+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3QiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnXG5cbmltcG9ydCB7c2F2ZX0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gICAgbGlzdDogc3RhdGUubGlzdCxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uU2F2ZTogKHBheWxvYWQpID0+IGRpc3BhdGNoKHNhdmUocGF5bG9hZCkpLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKExpc3QpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDA5YjExZWM5ZGIzZjZiYzU1YzlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMaXN0IiwiX3JlZiIsImxpc3QiLCJvblNhdmUiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImtleSIsImNvbm5lY3QiLCJzYXZlIiwibWFwU3RhdGUiLCJzdGF0ZSIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==