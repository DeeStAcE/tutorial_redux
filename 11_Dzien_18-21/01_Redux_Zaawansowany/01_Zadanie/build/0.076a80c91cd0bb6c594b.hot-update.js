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
    products.filter(function (product) {
      return product.id === id;
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, recipeDetails.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, recipeDetails.desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, productList.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "el.name");
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeDetails);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("60b8307af4cda74ef71a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNzZhODBjOTFjZDBiYjZjNTk0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFDLElBQUEsRUFBMkI7RUFBQSxJQUF0QkMsTUFBTSxHQUFBRCxJQUFBLENBQU5DLE1BQU07SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7RUFFcEMsSUFBTUMsYUFBYSxHQUFHRixNQUFNLENBQUMsQ0FBQyxDQUFDO0VBRS9CLElBQU1HLFdBQVcsR0FBR0QsYUFBYSxDQUFDRCxRQUFRLENBQUNHLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7SUFDckRKLFFBQVEsQ0FBQ0ssTUFBTSxDQUFDLFVBQUFDLE9BQU8sRUFBSTtNQUN2QixPQUFPQSxPQUFPLENBQUNGLEVBQUUsS0FBS0EsRUFBRTtJQUM1QixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRixvQkFDSVIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLGFBQUtLLGFBQWEsQ0FBQ1EsSUFBUyxDQUFDLGVBQzdCYiwwREFBQSxhQUFLSyxhQUFhLENBQUNTLElBQVMsQ0FBQyxlQUM3QmQsMERBQUEsYUFDS00sV0FBVyxDQUFDUyxHQUFHLENBQUMsVUFBQUMsRUFBRTtJQUFBLG9CQUFJaEIsMERBQUEsYUFBSSxTQUFXLENBQUM7RUFBQSxFQUN2QyxDQUNOLENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWVDLGFBQWE7Ozs7Ozs7O1VDdkI1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9SZWNpcGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFJlY2lwZURldGFpbHMgPSAoe3JlY2lwZSwgcHJvZHVjdHN9KSA9PiB7XG5cbiAgICBjb25zdCByZWNpcGVEZXRhaWxzID0gcmVjaXBlWzBdXG5cbiAgICBjb25zdCBwcm9kdWN0TGlzdCA9IHJlY2lwZURldGFpbHMucHJvZHVjdHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgIHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmlkID09PSBpZFxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPntyZWNpcGVEZXRhaWxzLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMj57cmVjaXBlRGV0YWlscy5kZXNjfTwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RMaXN0Lm1hcChlbCA9PiA8bGk+ZWwubmFtZTwvbGk+KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlRGV0YWlscyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYwYjgzMDdhZjRjZGE3NGVmNzFhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVjaXBlRGV0YWlscyIsIl9yZWYiLCJyZWNpcGUiLCJwcm9kdWN0cyIsInJlY2lwZURldGFpbHMiLCJwcm9kdWN0TGlzdCIsImZvckVhY2giLCJpZCIsImZpbHRlciIsInByb2R1Y3QiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJuYW1lIiwiZGVzYyIsIm1hcCIsImVsIl0sInNvdXJjZVJvb3QiOiIifQ==