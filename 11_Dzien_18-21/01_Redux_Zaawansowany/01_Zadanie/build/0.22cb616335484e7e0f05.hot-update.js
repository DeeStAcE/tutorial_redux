"use strict";
self["webpackHotUpdatees6_react"](0,{

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
    return product.id !== id;
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
/******/ 	__webpack_require__.h = () => ("1490f607fe6bf9fa2ae3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMmNiNjE2MzM1NDg0ZTdlMGYwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUVtQjtBQUV2RCxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBRUMsRUFBRSxFQUFLO0VBQ2pDLE9BQU9ELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUFDLE9BQU87SUFBQSxPQUFJQSxPQUFPLENBQUNGLEVBQUUsS0FBS0EsRUFBRTtFQUFBLEVBQUM7QUFDckQsQ0FBQztBQUVELElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUosS0FBSyxFQUFBSyxJQUFBO0VBQUEsSUFBR0osRUFBRSxHQUFBSSxJQUFBLENBQUZKLEVBQUU7RUFBQSxPQUFPO0lBQ3RDRSxPQUFPLEVBQUVKLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDTSxRQUFRLEVBQUVMLEVBQUU7RUFDN0MsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUosb0RBQU8sQ0FBQ08sZUFBZSxDQUFDLENBQUNOLG9FQUFPLENBQUM7Ozs7Ozs7O1VDWmhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Qcm9kdWN0cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0J1xuXG5jb25zdCBzZWxlY3RQcm9kdWN0ID0gKHN0YXRlLCBpZCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmlkICE9PSBpZClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCB7aWR9KSA9PiAoe1xuICAgIHByb2R1Y3Q6IHNlbGVjdFByb2R1Y3Qoc3RhdGUucHJvZHVjdHMsIGlkKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2R1Y3QpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTQ5MGY2MDdmZTZiZjlmYTJhZTNcIikiXSwibmFtZXMiOlsiY29ubmVjdCIsIlByb2R1Y3QiLCJzZWxlY3RQcm9kdWN0Iiwic3RhdGUiLCJpZCIsImZpbHRlciIsInByb2R1Y3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJfcmVmIiwicHJvZHVjdHMiXSwic291cmNlUm9vdCI6IiJ9