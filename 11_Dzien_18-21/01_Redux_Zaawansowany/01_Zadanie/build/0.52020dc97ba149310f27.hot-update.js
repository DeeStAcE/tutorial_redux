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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, recipeDetails.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, recipeDetails.desc));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeDetails);

/***/ }),

/***/ 121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _components_Recipes_Recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);
/* harmony import */ var _Products_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);



var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    recipe: (0,_Products_Product__WEBPACK_IMPORTED_MODULE_2__.selectObject)(state.recipes, id),
    products: state.products
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_components_Recipes_Recipe__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1fa6f21b43a8cbaa6ae8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MjAyMGRjOTdiYTE0OTMxMGYyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFDLElBQUEsRUFBMkI7RUFBQSxJQUF0QkMsTUFBTSxHQUFBRCxJQUFBLENBQU5DLE1BQU07SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7RUFFcEMsSUFBTUMsYUFBYSxHQUFHRixNQUFNLENBQUMsQ0FBQyxDQUFDO0VBRS9CLG9CQUNJSCwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsYUFBS0ssYUFBYSxDQUFDRyxJQUFTLENBQUMsZUFDN0JSLDBEQUFBLGFBQUtLLGFBQWEsQ0FBQ0ksSUFBUyxDQUM5QixDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlUixhQUFhOzs7Ozs7Ozs7Ozs7OztBQ2RRO0FBRWlCO0FBQ0o7QUFFakQsSUFBTVksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUFaLElBQUE7RUFBQSxJQUFHYSxFQUFFLEdBQUFiLElBQUEsQ0FBRmEsRUFBRTtFQUFBLE9BQU87SUFDdENaLE1BQU0sRUFBRVMsK0RBQVksQ0FBQ0UsS0FBSyxDQUFDRSxPQUFPLEVBQUVELEVBQUUsQ0FBQztJQUN2Q1gsUUFBUSxFQUFFVSxLQUFLLENBQUNWO0VBQ3BCLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVNLG9EQUFPLENBQUNHLGVBQWUsQ0FBQyxDQUFDRixrRUFBTSxDQUFDOzs7Ozs7OztVQ1YvQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9SZWNpcGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9SZWNpcGVzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmVjaXBlRGV0YWlscyA9ICh7cmVjaXBlLCBwcm9kdWN0c30pID0+IHtcblxuICAgIGNvbnN0IHJlY2lwZURldGFpbHMgPSByZWNpcGVbMF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+e3JlY2lwZURldGFpbHMubmFtZX08L2gxPlxuICAgICAgICAgICAgPGgyPntyZWNpcGVEZXRhaWxzLmRlc2N9PC9oMj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVEZXRhaWxzIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IFJlY2lwZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SZWNpcGVzL1JlY2lwZVwiO1xuaW1wb3J0IHtzZWxlY3RPYmplY3R9IGZyb20gXCIuLi9Qcm9kdWN0cy9Qcm9kdWN0XCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwge2lkfSkgPT4gKHtcbiAgICByZWNpcGU6IHNlbGVjdE9iamVjdChzdGF0ZS5yZWNpcGVzLCBpZCksXG4gICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmVjaXBlKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFmYTZmMjFiNDNhOGNiYWE2YWU4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVjaXBlRGV0YWlscyIsIl9yZWYiLCJyZWNpcGUiLCJwcm9kdWN0cyIsInJlY2lwZURldGFpbHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJuYW1lIiwiZGVzYyIsImNvbm5lY3QiLCJSZWNpcGUiLCJzZWxlY3RPYmplY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImlkIiwicmVjaXBlcyJdLCJzb3VyY2VSb290IjoiIn0=