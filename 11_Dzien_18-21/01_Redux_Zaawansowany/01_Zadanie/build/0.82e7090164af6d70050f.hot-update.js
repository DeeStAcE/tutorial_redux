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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, recipeDetails.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, recipeDetails.desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Lista produkt\xF3w:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, productList.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, product.name);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeDetails);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("28a43b6ca0ade7f42593")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44MmU3MDkwMTY0YWY2ZDcwMDUwZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFDLElBQUEsRUFBMkI7RUFBQSxJQUF0QkMsTUFBTSxHQUFBRCxJQUFBLENBQU5DLE1BQU07SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7RUFFcEMsSUFBTUMsYUFBYSxHQUFHRixNQUFNLENBQUMsQ0FBQyxDQUFDO0VBQy9CLElBQU1HLFdBQVcsR0FBRyxFQUFFO0VBRXRCRCxhQUFhLENBQUNELFFBQVEsQ0FBQ0csT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtJQUNqQ0osUUFBUSxDQUFDRyxPQUFPLENBQUMsVUFBQUUsT0FBTyxFQUFJO01BQ3hCLElBQUlBLE9BQU8sQ0FBQ0QsRUFBRSxLQUFLQSxFQUFFLEVBQUU7UUFDbkJGLFdBQVcsQ0FBQ0ksSUFBSSxDQUFDRCxPQUFPLENBQUM7TUFDN0I7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRixvQkFDSVQsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLGFBQUtLLGFBQWEsQ0FBQ1EsSUFBUyxDQUFDLGVBQzdCYiwwREFBQSxhQUFLSyxhQUFhLENBQUNTLElBQVMsQ0FBQyxlQUM3QmQsMERBQUEsYUFBSSxxQkFBb0IsQ0FBQyxlQUN6QkEsMERBQUEsYUFDS00sV0FBVyxDQUFDUyxHQUFHLENBQUMsVUFBQU4sT0FBTztJQUFBLG9CQUFJVCwwREFBQSxhQUFLUyxPQUFPLENBQUNJLElBQVMsQ0FBQztFQUFBLEVBQ25ELENBQ04sQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZVosYUFBYTs7Ozs7Ozs7VUMzQjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmVjaXBlRGV0YWlscyA9ICh7cmVjaXBlLCBwcm9kdWN0c30pID0+IHtcblxuICAgIGNvbnN0IHJlY2lwZURldGFpbHMgPSByZWNpcGVbMF1cbiAgICBjb25zdCBwcm9kdWN0TGlzdCA9IFtdXG5cbiAgICByZWNpcGVEZXRhaWxzLnByb2R1Y3RzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3QucHVzaChwcm9kdWN0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT57cmVjaXBlRGV0YWlscy5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+e3JlY2lwZURldGFpbHMuZGVzY308L2gyPlxuICAgICAgICAgICAgPGgzPkxpc3RhIHByb2R1a3TDs3c6PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdExpc3QubWFwKHByb2R1Y3QgPT4gPGxpPntwcm9kdWN0Lm5hbWV9PC9saT4pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVEZXRhaWxzIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjhhNDNiNmNhMGFkZTdmNDI1OTNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWNpcGVEZXRhaWxzIiwiX3JlZiIsInJlY2lwZSIsInByb2R1Y3RzIiwicmVjaXBlRGV0YWlscyIsInByb2R1Y3RMaXN0IiwiZm9yRWFjaCIsImlkIiwicHJvZHVjdCIsInB1c2giLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJuYW1lIiwiZGVzYyIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=