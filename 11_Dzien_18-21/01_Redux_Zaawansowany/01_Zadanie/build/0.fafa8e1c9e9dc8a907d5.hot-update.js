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
    return Number(product.id) === Number(id);
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
/******/ 	__webpack_require__.h = () => ("fb55c27508d4ca60c562")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mYWZhOGUxYzllOWRjOGE5MDdkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUVtQjtBQUV2RCxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBRUMsRUFBRSxFQUFLO0VBQ2pDLE9BQU9ELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUFDLE9BQU8sRUFBSTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0YsRUFBRSxDQUFDO0lBQ3ZCLE9BQU9LLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDRixFQUFFLENBQUMsS0FBS0ssTUFBTSxDQUFDTCxFQUFFLENBQUM7RUFDNUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSVAsS0FBSyxFQUFBUSxJQUFBO0VBQUEsSUFBR1AsRUFBRSxHQUFBTyxJQUFBLENBQUZQLEVBQUU7RUFBQSxPQUFPO0lBQ3RDRSxPQUFPLEVBQUVKLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDUyxRQUFRLEVBQUVSLEVBQUU7RUFDN0MsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUosb0RBQU8sQ0FBQ1UsZUFBZSxDQUFDLENBQUNULG9FQUFPLENBQUM7Ozs7Ozs7O1VDZmhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Qcm9kdWN0cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0J1xuXG5jb25zdCBzZWxlY3RQcm9kdWN0ID0gKHN0YXRlLCBpZCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5maWx0ZXIocHJvZHVjdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QuaWQpXG4gICAgICAgIHJldHVybiBOdW1iZXIocHJvZHVjdC5pZCkgPT09IE51bWJlcihpZClcbiAgICB9KVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHtpZH0pID0+ICh7XG4gICAgcHJvZHVjdDogc2VsZWN0UHJvZHVjdChzdGF0ZS5wcm9kdWN0cywgaWQpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvZHVjdCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmYjU1YzI3NTA4ZDRjYTYwYzU2MlwiKSJdLCJuYW1lcyI6WyJjb25uZWN0IiwiUHJvZHVjdCIsInNlbGVjdFByb2R1Y3QiLCJzdGF0ZSIsImlkIiwiZmlsdGVyIiwicHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJfcmVmIiwicHJvZHVjdHMiXSwic291cmNlUm9vdCI6IiJ9