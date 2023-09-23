"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _containers_Home_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _containers_Products_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96);
/* harmony import */ var _containers_Products_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98);
/* harmony import */ var _containers_Products_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(119);
/* harmony import */ var _containers_Recipes_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(102);
/* harmony import */ var _containers_Recipes_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(120);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(107);









// Recipe



var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Home_index__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_index__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Add__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Product__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_index__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_Add__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

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

/***/ }),

/***/ 120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _redux_actions_recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(111);
/* harmony import */ var _components_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);



var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addRecipe: function addRecipe(payload) {
      return dispatch((0,_redux_actions_recipes__WEBPACK_IMPORTED_MODULE_1__.addRecipe)(payload));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(null, mapDispatchToProps)(_components_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("22cb616335484e7e0f05")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMzEzMjgxYjg1ZGFkMmVhNjE5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBTUE7QUFFSTtBQUVjO0FBQ1E7QUFDQTtBQUNBO0FBQ0g7QUFDQTtBQUNqRDs7QUFFcUM7QUFDRjtBQUVuQyxJQUFNYyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2Ysb0JBQ0lkLDBEQUFBLENBQUNZLGlEQUFRO0lBQUNDLEtBQUssRUFBRUEsb0RBQUtBO0VBQUMsZ0JBQ25CYiwwREFBQSxDQUFDRSw0REFBTSxxQkFDSEYsMERBQUEsQ0FBQ0ssK0NBQU0scUJBQ0hMLDBEQUFBLENBQUNHLHFEQUFNLHFCQUNISCwwREFBQSxDQUFDSSxvREFBSztJQUFDWSxJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUVqQiwwREFBQSxDQUFDTSw4REFBSSxNQUFDO0VBQUUsQ0FBQyxDQUFDLGVBQ25DTiwwREFBQSxDQUFDSSxvREFBSztJQUFDWSxJQUFJLEVBQUMsV0FBVztJQUFDQyxPQUFPLGVBQUVqQiwwREFBQSxDQUFDTyxrRUFBUSxNQUFDO0VBQUUsQ0FBQyxDQUFDLGVBQy9DUCwwREFBQSxDQUFDSSxvREFBSztJQUFDWSxJQUFJLEVBQUMsZUFBZTtJQUFDQyxPQUFPLGVBQUVqQiwwREFBQSxDQUFDUSxnRUFBVSxNQUFDO0VBQUUsQ0FBQyxDQUFDLGVBQ3JEUiwwREFBQSxDQUFDSSxvREFBSztJQUFDWSxJQUFJLEVBQUMsZUFBZTtJQUFDQyxPQUFPLGVBQUVqQiwwREFBQSxDQUFDUyxvRUFBTyxNQUFDO0VBQUUsQ0FBQyxDQUFDLGVBQ2xEVCwwREFBQSxDQUFDSSxvREFBSztJQUFDWSxJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUVqQiwwREFBQSxDQUFDVSxpRUFBTyxNQUFDO0VBQUUsQ0FBQyxDQUFDLGVBQzdDViwwREFBQSxDQUFDSSxvREFBSztJQUFDWSxJQUFJLEVBQUMsY0FBYztJQUFDQyxPQUFPLGVBQUVqQiwwREFBQSxDQUFDVywrREFBUyxNQUFDO0VBQUUsQ0FBQyxDQUM5QyxDQUNKLENBQ0osQ0FDRixDQUFDO0FBRW5CLENBQUM7QUFFRCxpRUFBZUcsSUFBSTs7Ozs7Ozs7Ozs7OztBQ3hDaUI7QUFFbUI7QUFFdkQsSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxLQUFLLEVBQUVDLEVBQUUsRUFBSztFQUNqQyxPQUFPRCxLQUFLLENBQUNFLE1BQU0sQ0FBQyxVQUFBQyxPQUFPO0lBQUEsT0FBSUEsT0FBTyxDQUFDRixFQUFFLEtBQUtBLEVBQUU7RUFBQSxFQUFDO0FBQ3JELENBQUM7QUFFRCxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlKLEtBQUssRUFBQUssSUFBQTtFQUFBLElBQUdKLEVBQUUsR0FBQUksSUFBQSxDQUFGSixFQUFFO0VBQUEsT0FBTztJQUN0Q0UsT0FBTyxFQUFFSixhQUFhLENBQUNDLEtBQUssQ0FBQ00sUUFBUSxFQUFFTCxFQUFFO0VBQzdDLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVILG9EQUFPLENBQUNNLGVBQWUsQ0FBQyxDQUFDZixvRUFBTyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1paO0FBRWtCO0FBRVA7QUFFL0MsSUFBTW9CLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQ3RDSCxTQUFTLEVBQUUsU0FBQUEsVUFBQ0ksT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ0gsaUVBQVMsQ0FBQ0ksT0FBTyxDQUFDLENBQUM7SUFBQTtFQUN4RCxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlYixvREFBTyxDQUFDLElBQUksRUFBRVcsa0JBQWtCLENBQUMsQ0FBQ0QsK0RBQUcsQ0FBQzs7Ozs7Ozs7VUNWckQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Qcm9kdWN0cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUmVjaXBlcy9BZGQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gICAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsXG4gICAgUm91dGVzLFxuICAgIFJvdXRlXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29udGFpbmVycy9Ib21lL2luZGV4JztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi9jb250YWluZXJzL1Byb2R1Y3RzL2luZGV4JztcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gJy4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvQWRkJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvUHJvZHVjdCdcbmltcG9ydCBSZWNpcGVzIGZyb20gJy4uL2NvbnRhaW5lcnMvUmVjaXBlcy9pbmRleCdcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSAnLi4vY29udGFpbmVycy9SZWNpcGVzL0FkZCdcbi8vIFJlY2lwZVxuXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxQcm9kdWN0cy8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdC8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy86aWRcIiBlbGVtZW50PXs8UHJvZHVjdC8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzXCIgZWxlbWVudD17PFJlY2lwZXMvPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9hZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlLz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0J1xuXG5jb25zdCBzZWxlY3RQcm9kdWN0ID0gKHN0YXRlLCBpZCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmlkID09PSBpZClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCB7aWR9KSA9PiAoe1xuICAgIHByb2R1Y3Q6IHNlbGVjdFByb2R1Y3Qoc3RhdGUucHJvZHVjdHMsIGlkKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2R1Y3QpIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHthZGRSZWNpcGV9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3JlY2lwZXNcIjtcblxuaW1wb3J0IEFkZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1JlY2lwZXMvQWRkJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIGFkZFJlY2lwZTogKHBheWxvYWQpID0+IGRpc3BhdGNoKGFkZFJlY2lwZShwYXlsb2FkKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjJjYjYxNjMzNTQ4NGU3ZTBmMDVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJMYXlvdXQiLCJIb21lIiwiUHJvZHVjdHMiLCJBZGRQcm9kdWN0IiwiUHJvZHVjdCIsIlJlY2lwZXMiLCJBZGRSZWNpcGUiLCJQcm92aWRlciIsInN0b3JlIiwiTWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJwYXRoIiwiZWxlbWVudCIsImNvbm5lY3QiLCJzZWxlY3RQcm9kdWN0Iiwic3RhdGUiLCJpZCIsImZpbHRlciIsInByb2R1Y3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJfcmVmIiwicHJvZHVjdHMiLCJhZGRSZWNpcGUiLCJBZGQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9