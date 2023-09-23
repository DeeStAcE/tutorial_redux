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
/******/ 	__webpack_require__.h = () => ("a2033fc5b0c0f49cae8f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZDNlNTgyNTNiYmZlNWMxNGEyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUVtQjtBQUV2RCxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBRUMsRUFBRSxFQUFLO0VBQ2pDLE9BQU9ELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUFDLE9BQU8sRUFBSTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0YsRUFBRSxDQUFDO0lBQ3ZCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osRUFBRSxDQUFDO0lBQ2YsT0FBT0UsT0FBTyxDQUFDRixFQUFFLEtBQUtLLE1BQU0sQ0FBQ0wsRUFBRSxDQUFDO0VBQ3BDLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlQLEtBQUssRUFBQVEsSUFBQTtFQUFBLElBQUdQLEVBQUUsR0FBQU8sSUFBQSxDQUFGUCxFQUFFO0VBQUEsT0FBTztJQUN0Q0UsT0FBTyxFQUFFSixhQUFhLENBQUNDLEtBQUssQ0FBQ1MsUUFBUSxFQUFFUixFQUFFO0VBQzdDLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVKLG9EQUFPLENBQUNVLGVBQWUsQ0FBQyxDQUFDVCxvRUFBTyxDQUFDOzs7Ozs7OztVQ2hCaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1Byb2R1Y3RzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3QnXG5cbmNvbnN0IHNlbGVjdFByb2R1Y3QgPSAoc3RhdGUsIGlkKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLmZpbHRlcihwcm9kdWN0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdC5pZClcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIHJldHVybiBwcm9kdWN0LmlkID09PSBOdW1iZXIoaWQpXG4gICAgfSlcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCB7aWR9KSA9PiAoe1xuICAgIHByb2R1Y3Q6IHNlbGVjdFByb2R1Y3Qoc3RhdGUucHJvZHVjdHMsIGlkKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2R1Y3QpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTIwMzNmYzViMGMwZjQ5Y2FlOGZcIikiXSwibmFtZXMiOlsiY29ubmVjdCIsIlByb2R1Y3QiLCJzZWxlY3RQcm9kdWN0Iiwic3RhdGUiLCJpZCIsImZpbHRlciIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiTnVtYmVyIiwibWFwU3RhdGVUb1Byb3BzIiwiX3JlZiIsInByb2R1Y3RzIl0sInNvdXJjZVJvb3QiOiIifQ==