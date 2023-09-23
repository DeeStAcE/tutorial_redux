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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: product.id
    }, product.name);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeDetails);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ef7f55d3f2948cd36d82")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yOGE0M2I2Y2EwYWRlN2Y0MjU5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFDLElBQUEsRUFBMkI7RUFBQSxJQUF0QkMsTUFBTSxHQUFBRCxJQUFBLENBQU5DLE1BQU07SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7RUFFcEMsSUFBTUMsYUFBYSxHQUFHRixNQUFNLENBQUMsQ0FBQyxDQUFDO0VBQy9CLElBQU1HLFdBQVcsR0FBRyxFQUFFO0VBRXRCRCxhQUFhLENBQUNELFFBQVEsQ0FBQ0csT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtJQUNqQ0osUUFBUSxDQUFDRyxPQUFPLENBQUMsVUFBQUUsT0FBTyxFQUFJO01BQ3hCLElBQUlBLE9BQU8sQ0FBQ0QsRUFBRSxLQUFLQSxFQUFFLEVBQUU7UUFDbkJGLFdBQVcsQ0FBQ0ksSUFBSSxDQUFDRCxPQUFPLENBQUM7TUFDN0I7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRixvQkFDSVQsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLGFBQUtLLGFBQWEsQ0FBQ1EsSUFBUyxDQUFDLGVBQzdCYiwwREFBQSxhQUFLSyxhQUFhLENBQUNTLElBQVMsQ0FBQyxlQUM3QmQsMERBQUEsYUFBSSxxQkFBb0IsQ0FBQyxlQUN6QkEsMERBQUEsYUFDS00sV0FBVyxDQUFDUyxHQUFHLENBQUMsVUFBQU4sT0FBTztJQUFBLG9CQUFJVCwwREFBQTtNQUFJZ0IsR0FBRyxFQUFFUCxPQUFPLENBQUNEO0lBQUcsR0FBRUMsT0FBTyxDQUFDSSxJQUFTLENBQUM7RUFBQSxFQUNwRSxDQUNOLENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWVaLGFBQWE7Ozs7Ozs7O1VDM0I1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9SZWNpcGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFJlY2lwZURldGFpbHMgPSAoe3JlY2lwZSwgcHJvZHVjdHN9KSA9PiB7XG5cbiAgICBjb25zdCByZWNpcGVEZXRhaWxzID0gcmVjaXBlWzBdXG4gICAgY29uc3QgcHJvZHVjdExpc3QgPSBbXVxuXG4gICAgcmVjaXBlRGV0YWlscy5wcm9kdWN0cy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0LnB1c2gocHJvZHVjdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT57cmVjaXBlRGV0YWlscy5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+e3JlY2lwZURldGFpbHMuZGVzY308L2gyPlxuICAgICAgICAgICAgPGgzPkxpc3RhIHByb2R1a3TDs3c6PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdExpc3QubWFwKHByb2R1Y3QgPT4gPGxpIGtleT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L2xpPil9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZURldGFpbHMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlZjdmNTVkM2YyOTQ4Y2QzNmQ4MlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlY2lwZURldGFpbHMiLCJfcmVmIiwicmVjaXBlIiwicHJvZHVjdHMiLCJyZWNpcGVEZXRhaWxzIiwicHJvZHVjdExpc3QiLCJmb3JFYWNoIiwiaWQiLCJwcm9kdWN0IiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm5hbWUiLCJkZXNjIiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==