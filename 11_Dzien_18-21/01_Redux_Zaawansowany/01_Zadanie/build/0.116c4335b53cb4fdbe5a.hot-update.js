"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ProductDetails = function ProductDetails(_ref) {
  var product = _ref.product;
  console.log(product);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, product.name));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetails);

/***/ }),

/***/ 119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _components_Products_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101);


var selectProduct = function selectProduct(state, id) {
  return state.filter(function (product) {
    return product.id === Number(id);
  });
};
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    product: selectProduct(state.products, id)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_components_Products_Product__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4057994196e13ab5abdf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMTZjNDMzNWI1M2NiNGZkYmU1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBa0I7RUFBQSxJQUFiQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztFQUU1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztFQUVwQixvQkFDSUgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLGFBQUtHLE9BQU8sQ0FBQ0ssSUFBUyxDQUN4QixDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlUCxjQUFjOzs7Ozs7Ozs7Ozs7O0FDYk87QUFFbUI7QUFFdkQsSUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxLQUFLLEVBQUVDLEVBQUUsRUFBSztFQUNqQyxPQUFPRCxLQUFLLENBQUNFLE1BQU0sQ0FBQyxVQUFBWCxPQUFPO0lBQUEsT0FBSUEsT0FBTyxDQUFDVSxFQUFFLEtBQUtFLE1BQU0sQ0FBQ0YsRUFBRSxDQUFDO0VBQUEsRUFBQztBQUM3RCxDQUFDO0FBRUQsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJSixLQUFLLEVBQUFWLElBQUE7RUFBQSxJQUFHVyxFQUFFLEdBQUFYLElBQUEsQ0FBRlcsRUFBRTtFQUFBLE9BQU87SUFDdENWLE9BQU8sRUFBRVEsYUFBYSxDQUFDQyxLQUFLLENBQUNLLFFBQVEsRUFBRUosRUFBRTtFQUM3QyxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlSixvREFBTyxDQUFDTyxlQUFlLENBQUMsQ0FBQ04sb0VBQU8sQ0FBQzs7Ozs7Ozs7VUNaaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Qcm9kdWN0cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9ICh7cHJvZHVjdH0pID0+IHtcblxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPntwcm9kdWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscyIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdCdcblxuY29uc3Qgc2VsZWN0UHJvZHVjdCA9IChzdGF0ZSwgaWQpID0+IHtcbiAgICByZXR1cm4gc3RhdGUuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCA9PT0gTnVtYmVyKGlkKSlcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCB7aWR9KSA9PiAoe1xuICAgIHByb2R1Y3Q6IHNlbGVjdFByb2R1Y3Qoc3RhdGUucHJvZHVjdHMsIGlkKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2R1Y3QpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDA1Nzk5NDE5NmUxM2FiNWFiZGZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9kdWN0RGV0YWlscyIsIl9yZWYiLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm5hbWUiLCJjb25uZWN0IiwiUHJvZHVjdCIsInNlbGVjdFByb2R1Y3QiLCJzdGF0ZSIsImlkIiwiZmlsdGVyIiwiTnVtYmVyIiwibWFwU3RhdGVUb1Byb3BzIiwicHJvZHVjdHMiXSwic291cmNlUm9vdCI6IiJ9