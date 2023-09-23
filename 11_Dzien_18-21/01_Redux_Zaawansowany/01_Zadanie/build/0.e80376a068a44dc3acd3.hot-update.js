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
  var productList = recipeDetails.products.forEach(function (id) {
    console.log(id);
    products.filter(function (product) {
      console.log(product.id);
      return product.id === id;
    });
    console.log('dupa');
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, recipeDetails.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, recipeDetails.desc));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeDetails);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d035c46fd259389da637")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lODAzNzZhMDY4YTQ0ZGMzYWNkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFDLElBQUEsRUFBMkI7RUFBQSxJQUF0QkMsTUFBTSxHQUFBRCxJQUFBLENBQU5DLE1BQU07SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7RUFFcEMsSUFBTUMsYUFBYSxHQUFHRixNQUFNLENBQUMsQ0FBQyxDQUFDO0VBRS9CLElBQU1HLFdBQVcsR0FBR0QsYUFBYSxDQUFDRCxRQUFRLENBQUNHLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7SUFDckRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixFQUFFLENBQUM7SUFDZkosUUFBUSxDQUFDTyxNQUFNLENBQUMsVUFBQUMsT0FBTyxFQUFJO01BQ3ZCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDSixFQUFFLENBQUM7TUFDdkIsT0FBT0ksT0FBTyxDQUFDSixFQUFFLEtBQUtBLEVBQUU7SUFDNUIsQ0FBQyxDQUFDO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUN2QixDQUFDLENBQUM7RUFHRixvQkFDSVYsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLGFBQUtLLGFBQWEsQ0FBQ1UsSUFBUyxDQUFDLGVBQzdCZiwwREFBQSxhQUFLSyxhQUFhLENBQUNXLElBQVMsQ0FDOUIsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZWYsYUFBYTs7Ozs7Ozs7VUN4QjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmVjaXBlRGV0YWlscyA9ICh7cmVjaXBlLCBwcm9kdWN0c30pID0+IHtcblxuICAgIGNvbnN0IHJlY2lwZURldGFpbHMgPSByZWNpcGVbMF1cblxuICAgIGNvbnN0IHByb2R1Y3RMaXN0ID0gcmVjaXBlRGV0YWlscy5wcm9kdWN0cy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QuaWQpXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5pZCA9PT0gaWRcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ2R1cGEnKVxuICAgIH0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+e3JlY2lwZURldGFpbHMubmFtZX08L2gxPlxuICAgICAgICAgICAgPGgyPntyZWNpcGVEZXRhaWxzLmRlc2N9PC9oMj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVEZXRhaWxzIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDAzNWM0NmZkMjU5Mzg5ZGE2MzdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWNpcGVEZXRhaWxzIiwiX3JlZiIsInJlY2lwZSIsInByb2R1Y3RzIiwicmVjaXBlRGV0YWlscyIsInByb2R1Y3RMaXN0IiwiZm9yRWFjaCIsImlkIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsInByb2R1Y3QiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJuYW1lIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=