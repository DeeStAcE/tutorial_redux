"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_RECIPE: () => (/* binding */ ADD_RECIPE),
/* harmony export */   addRecipe: () => (/* binding */ addRecipe)
/* harmony export */ });
var ADD_RECIPE = 'ADD_RECIPE';
var addRecipe = function addRecipe(payload) {
  return {
    type: ADD_RECIPE,
    payload: payload
  };
};

/***/ }),

/***/ 102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(111);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  products: _products__WEBPACK_IMPORTED_MODULE_0__["default"],
  recipes: _recipes__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);

var initialState = [{
  id: 1,
  name: "Pomidorówka",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
  products: [1, 2, 3]
}, {
  id: 2,
  name: "Coś innego",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
  products: [3, 1]
}, {
  id: 3,
  name: "Jeszcze inny przepis",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
  products: [5, 6]
}];
var recipes = function recipes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    payload = _ref.payload;
  switch (type) {
    case _actions_recipes__WEBPACK_IMPORTED_MODULE_0__.ADD_RECIPE:
      {
        break;
      }
    default:
      {
        return state;
      }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recipes);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a678b9b84639adcc9528")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZWVjZjc4MjQ3MWE2ZGMyNDY3ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsVUFBVSxHQUFHLFlBQVk7QUFFL0IsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLE9BQU87RUFBQSxPQUFNO0lBQ25DQyxJQUFJLEVBQUVILFVBQVU7SUFDaEJFLE9BQU8sRUFBUEE7RUFDSixDQUFDO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNMb0M7QUFFSjtBQUNGO0FBRWhDLGlFQUFlRSxzREFBZSxDQUFDO0VBQzNCQyxRQUFRLEVBQVJBLGlEQUFRO0VBQ1JDLE9BQU8sRUFBUEEsZ0RBQU9BO0FBQ1gsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNSNEM7QUFFOUMsSUFBTUMsWUFBWSxHQUFHLENBQ2pCO0VBQ0lDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxhQUFhO0VBQ25CQyxJQUFJLEVBQUUsNE9BQTRPO0VBQ2xQTCxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDdEIsQ0FBQyxFQUNEO0VBQ0lHLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxZQUFZO0VBQ2xCQyxJQUFJLEVBQUUsNE9BQTRPO0VBQ2xQTCxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNuQixDQUFDLEVBQ0Q7RUFDSUcsRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFLHNCQUFzQjtFQUM1QkMsSUFBSSxFQUFFLDRPQUE0TztFQUNsUEwsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUNKO0FBRUQsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBOEM7RUFBQSxJQUExQ0ssS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBR0wsWUFBWTtFQUFBLElBQUFRLElBQUEsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtJQUFHWCxJQUFJLEdBQUFZLElBQUEsQ0FBSlosSUFBSTtJQUFFRCxPQUFPLEdBQUFhLElBQUEsQ0FBUGIsT0FBTztFQUNqRCxRQUFRQyxJQUFJO0lBQ1IsS0FBS0gsd0RBQVU7TUFBRTtRQUNiO01BQ0o7SUFDQTtNQUFTO1FBQ0wsT0FBT1csS0FBSztNQUNoQjtFQUNKO0FBQ0osQ0FBQztBQUVELGlFQUFlTCxPQUFPOzs7Ozs7OztVQ2xDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9yZWR1eC9hY3Rpb25zL3JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMvcmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBRERfUkVDSVBFID0gJ0FERF9SRUNJUEUnO1xuXG5leHBvcnQgY29uc3QgYWRkUmVjaXBlID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogQUREX1JFQ0lQRSxcbiAgICBwYXlsb2FkLFxufSk7IiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xuXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4vcHJvZHVjdHNcIjtcbmltcG9ydCByZWNpcGVzIGZyb20gJy4vcmVjaXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcHJvZHVjdHMsXG4gICAgcmVjaXBlc1xufSk7IiwiaW1wb3J0IHtBRERfUkVDSVBFfSBmcm9tIFwiLi4vYWN0aW9ucy9yZWNpcGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIlBvbWlkb3LDs3drYVwiLFxuICAgICAgICBkZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdHF1ZSBkaWN0YSBkb2xvcmVtcXVlIGRvbG9ydW0gZXhlcmNpdGF0aW9uZW0gbWFpb3JlcyBtYXhpbWUgbW9sZXN0aWFlIG9mZmljaWlzLCBxdWFzaSBxdW9zIHZvbHVwdGF0ZS4gQXV0IGVzc2UgbGFib3Jpb3NhbSBuZWNlc3NpdGF0aWJ1cyBxdWFtIHF1b3Mgc3VzY2lwaXQgdWxsYW0uIEFtZXQsIGRvbG9yLlwiLFxuICAgICAgICBwcm9kdWN0czogWzEsIDIsIDNdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcIkNvxZsgaW5uZWdvXCIsXG4gICAgICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF0cXVlIGRpY3RhIGRvbG9yZW1xdWUgZG9sb3J1bSBleGVyY2l0YXRpb25lbSBtYWlvcmVzIG1heGltZSBtb2xlc3RpYWUgb2ZmaWNpaXMsIHF1YXNpIHF1b3Mgdm9sdXB0YXRlLiBBdXQgZXNzZSBsYWJvcmlvc2FtIG5lY2Vzc2l0YXRpYnVzIHF1YW0gcXVvcyBzdXNjaXBpdCB1bGxhbS4gQW1ldCwgZG9sb3IuXCIsXG4gICAgICAgIHByb2R1Y3RzOiBbMywgMV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6IFwiSmVzemN6ZSBpbm55IHByemVwaXNcIixcbiAgICAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcbiAgICAgICAgcHJvZHVjdHM6IFs1LCA2XVxuICAgIH1cbl07XG5cbmNvbnN0IHJlY2lwZXMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHt0eXBlLCBwYXlsb2FkfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEFERF9SRUNJUEU6IHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlY2lwZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNjc4YjliODQ2MzlhZGNjOTUyOFwiKSJdLCJuYW1lcyI6WyJBRERfUkVDSVBFIiwiYWRkUmVjaXBlIiwicGF5bG9hZCIsInR5cGUiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0cyIsInJlY2lwZXMiLCJpbml0aWFsU3RhdGUiLCJpZCIsIm5hbWUiLCJkZXNjIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfcmVmIl0sInNvdXJjZVJvb3QiOiIifQ==