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
    return product.id === id;
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
/******/ 	__webpack_require__.h = () => ("daf478f43c43306a018c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNDkwZjYwN2ZlNmJmOWZhMmFlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUVtQjtBQUV2RCxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBRUMsRUFBRSxFQUFLO0VBQ2pDLE9BQU9ELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUFDLE9BQU8sRUFBSTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0YsRUFBRSxDQUFDO0lBQ3ZCLE9BQU9FLE9BQU8sQ0FBQ0YsRUFBRSxLQUFLQSxFQUFFO0VBQzVCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxJQUFNSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlOLEtBQUssRUFBQU8sSUFBQTtFQUFBLElBQUdOLEVBQUUsR0FBQU0sSUFBQSxDQUFGTixFQUFFO0VBQUEsT0FBTztJQUN0Q0UsT0FBTyxFQUFFSixhQUFhLENBQUNDLEtBQUssQ0FBQ1EsUUFBUSxFQUFFUCxFQUFFO0VBQzdDLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVKLG9EQUFPLENBQUNTLGVBQWUsQ0FBQyxDQUFDUixvRUFBTyxDQUFDOzs7Ozs7OztVQ2ZoRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUHJvZHVjdHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdCdcblxuY29uc3Qgc2VsZWN0UHJvZHVjdCA9IChzdGF0ZSwgaWQpID0+IHtcbiAgICByZXR1cm4gc3RhdGUuZmlsdGVyKHByb2R1Y3QgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0LmlkKVxuICAgICAgICByZXR1cm4gcHJvZHVjdC5pZCA9PT0gaWRcbiAgICB9KVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHtpZH0pID0+ICh7XG4gICAgcHJvZHVjdDogc2VsZWN0UHJvZHVjdChzdGF0ZS5wcm9kdWN0cywgaWQpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvZHVjdCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYWY0NzhmNDNjNDMzMDZhMDE4Y1wiKSJdLCJuYW1lcyI6WyJjb25uZWN0IiwiUHJvZHVjdCIsInNlbGVjdFByb2R1Y3QiLCJzdGF0ZSIsImlkIiwiZmlsdGVyIiwicHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJtYXBTdGF0ZVRvUHJvcHMiLCJfcmVmIiwicHJvZHVjdHMiXSwic291cmNlUm9vdCI6IiJ9