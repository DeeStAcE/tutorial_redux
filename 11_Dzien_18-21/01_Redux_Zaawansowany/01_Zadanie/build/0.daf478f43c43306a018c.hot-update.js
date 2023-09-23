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
    console.log(product.id);
    return Number(product.id) === id;
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
/******/ 	__webpack_require__.h = () => ("fafa8e1c9e9dc8a907d5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYWY0NzhmNDNjNDMzMDZhMDE4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUVtQjtBQUV2RCxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBRUMsRUFBRSxFQUFLO0VBQ2pDLE9BQU9ELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUFDLE9BQU8sRUFBSTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0YsRUFBRSxDQUFDO0lBQ3ZCLE9BQU9LLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDRixFQUFFLENBQUMsS0FBS0EsRUFBRTtFQUNwQyxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJUCxLQUFLLEVBQUFRLElBQUE7RUFBQSxJQUFHUCxFQUFFLEdBQUFPLElBQUEsQ0FBRlAsRUFBRTtFQUFBLE9BQU87SUFDdENFLE9BQU8sRUFBRUosYUFBYSxDQUFDQyxLQUFLLENBQUNTLFFBQVEsRUFBRVIsRUFBRTtFQUM3QyxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlSixvREFBTyxDQUFDVSxlQUFlLENBQUMsQ0FBQ1Qsb0VBQU8sQ0FBQzs7Ozs7Ozs7VUNmaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1Byb2R1Y3RzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3QnXG5cbmNvbnN0IHNlbGVjdFByb2R1Y3QgPSAoc3RhdGUsIGlkKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLmZpbHRlcihwcm9kdWN0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdC5pZClcbiAgICAgICAgcmV0dXJuIE51bWJlcihwcm9kdWN0LmlkKSA9PT0gaWRcbiAgICB9KVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHtpZH0pID0+ICh7XG4gICAgcHJvZHVjdDogc2VsZWN0UHJvZHVjdChzdGF0ZS5wcm9kdWN0cywgaWQpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvZHVjdCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmYWZhOGUxYzllOWRjOGE5MDdkNVwiKSJdLCJuYW1lcyI6WyJjb25uZWN0IiwiUHJvZHVjdCIsInNlbGVjdFByb2R1Y3QiLCJzdGF0ZSIsImlkIiwiZmlsdGVyIiwicHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJfcmVmIiwicHJvZHVjdHMiXSwic291cmNlUm9vdCI6IiJ9