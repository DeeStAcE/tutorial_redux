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
    console.log(id);
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
/******/ 	__webpack_require__.h = () => ("e2ef3d93b8fc340f2aa6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMjAzM2ZjNWIwYzBmNDljYWU4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUVtQjtBQUV2RCxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBRUMsRUFBRSxFQUFLO0VBQ2pDLE9BQU9ELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUFDLE9BQU8sRUFBSTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0YsRUFBRSxDQUFDO0lBQ3ZCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osRUFBRSxDQUFDO0lBQ2YsT0FBT0UsT0FBTyxDQUFDRixFQUFFLEtBQUtBLEVBQUU7RUFDNUIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSU4sS0FBSyxFQUFBTyxJQUFBO0VBQUEsSUFBR04sRUFBRSxHQUFBTSxJQUFBLENBQUZOLEVBQUU7RUFBQSxPQUFPO0lBQ3RDRSxPQUFPLEVBQUVKLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDUSxRQUFRLEVBQUVQLEVBQUU7RUFDN0MsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUosb0RBQU8sQ0FBQ1MsZUFBZSxDQUFDLENBQUNSLG9FQUFPLENBQUM7Ozs7Ozs7O1VDaEJoRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUHJvZHVjdHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdCdcblxuY29uc3Qgc2VsZWN0UHJvZHVjdCA9IChzdGF0ZSwgaWQpID0+IHtcbiAgICByZXR1cm4gc3RhdGUuZmlsdGVyKHByb2R1Y3QgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0LmlkKVxuICAgICAgICBjb25zb2xlLmxvZyhpZClcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QuaWQgPT09IGlkXG4gICAgfSlcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCB7aWR9KSA9PiAoe1xuICAgIHByb2R1Y3Q6IHNlbGVjdFByb2R1Y3Qoc3RhdGUucHJvZHVjdHMsIGlkKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2R1Y3QpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTJlZjNkOTNiOGZjMzQwZjJhYTZcIikiXSwibmFtZXMiOlsiY29ubmVjdCIsIlByb2R1Y3QiLCJzZWxlY3RQcm9kdWN0Iiwic3RhdGUiLCJpZCIsImZpbHRlciIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwibWFwU3RhdGVUb1Byb3BzIiwiX3JlZiIsInByb2R1Y3RzIl0sInNvdXJjZVJvb3QiOiIifQ==