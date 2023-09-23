"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RecipeDetails = function RecipeDetails(_ref) {
  var recipe = _ref.recipe,
    products = _ref.products;
  var recipeDetails = recipe[0];
  var productList = [];
  recipeDetails.products.forEach(function (id) {
    products.forEach(function (product) {
      if (product.id === id) {
        productList.push(product);
      }
    });
  });
  console.log(productList);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, recipeDetails.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, recipeDetails.desc));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeDetails);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("82e7090164af6d70050f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMDM1YzQ2ZmQyNTkzODlkYTYzNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFDLElBQUEsRUFBMkI7RUFBQSxJQUF0QkMsTUFBTSxHQUFBRCxJQUFBLENBQU5DLE1BQU07SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7RUFFcEMsSUFBTUMsYUFBYSxHQUFHRixNQUFNLENBQUMsQ0FBQyxDQUFDO0VBQy9CLElBQU1HLFdBQVcsR0FBRyxFQUFFO0VBRXRCRCxhQUFhLENBQUNELFFBQVEsQ0FBQ0csT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtJQUNqQ0osUUFBUSxDQUFDRyxPQUFPLENBQUMsVUFBQUUsT0FBTyxFQUFJO01BQ3hCLElBQUlBLE9BQU8sQ0FBQ0QsRUFBRSxLQUFLQSxFQUFFLEVBQUU7UUFDbkJGLFdBQVcsQ0FBQ0ksSUFBSSxDQUFDRCxPQUFPLENBQUM7TUFDN0I7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRkUsT0FBTyxDQUFDQyxHQUFHLENBQUNOLFdBQVcsQ0FBQztFQUd4QixvQkFDSU4sMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLGFBQUtLLGFBQWEsQ0FBQ1UsSUFBUyxDQUFDLGVBQzdCZiwwREFBQSxhQUFLSyxhQUFhLENBQUNXLElBQVMsQ0FDOUIsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZWYsYUFBYTs7Ozs7Ozs7VUMxQjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmVjaXBlRGV0YWlscyA9ICh7cmVjaXBlLCBwcm9kdWN0c30pID0+IHtcblxuICAgIGNvbnN0IHJlY2lwZURldGFpbHMgPSByZWNpcGVbMF1cbiAgICBjb25zdCBwcm9kdWN0TGlzdCA9IFtdXG5cbiAgICByZWNpcGVEZXRhaWxzLnByb2R1Y3RzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3QucHVzaChwcm9kdWN0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdClcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT57cmVjaXBlRGV0YWlscy5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+e3JlY2lwZURldGFpbHMuZGVzY308L2gyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZURldGFpbHMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MmU3MDkwMTY0YWY2ZDcwMDUwZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlY2lwZURldGFpbHMiLCJfcmVmIiwicmVjaXBlIiwicHJvZHVjdHMiLCJyZWNpcGVEZXRhaWxzIiwicHJvZHVjdExpc3QiLCJmb3JFYWNoIiwiaWQiLCJwcm9kdWN0IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJuYW1lIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=