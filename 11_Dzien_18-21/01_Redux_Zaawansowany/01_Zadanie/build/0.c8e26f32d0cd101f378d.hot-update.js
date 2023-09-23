"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

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
        console.log(payload);
        console.log(state);
        var id = state.length + 1;
        return [].concat(_toConsumableArray(state), [{
          id: id,
          name: payload.name,
          desc: payload.desc,
          products: payload.products
        }]);
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
/******/ 	__webpack_require__.h = () => ("ed56d6ea99739b5850ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jOGUyNmYzMmQwY2QxMDFmMzc4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBRTlDLElBQU1DLFlBQVksR0FBRyxDQUNqQjtFQUNJQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsYUFBYTtFQUNuQkMsSUFBSSxFQUFFLDRPQUE0TztFQUNsUEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3RCLENBQUMsRUFDRDtFQUNJSCxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsWUFBWTtFQUNsQkMsSUFBSSxFQUFFLDRPQUE0TztFQUNsUEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxFQUNEO0VBQ0lILEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxzQkFBc0I7RUFDNUJDLElBQUksRUFBRSw0T0FBNE87RUFDbFBDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FDSjtBQUVELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQThDO0VBQUEsSUFBMUNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdQLFlBQVk7RUFBQSxJQUFBVSxJQUFBLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBR0UsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7SUFBRUMsT0FBTyxHQUFBRixJQUFBLENBQVBFLE9BQU87RUFDakQsUUFBUUQsSUFBSTtJQUNSLEtBQUtaLHdEQUFVO01BQUU7UUFDYmMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztRQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLEtBQUssQ0FBQztRQUNsQixJQUFNTCxFQUFFLEdBQUdLLEtBQUssQ0FBQ0UsTUFBTSxHQUFHLENBQUM7UUFDM0IsVUFBQU8sTUFBQSxDQUFBQyxrQkFBQSxDQUFXVixLQUFLLElBQUU7VUFBQ0wsRUFBRSxFQUFFQSxFQUFFO1VBQUVDLElBQUksRUFBRVUsT0FBTyxDQUFDVixJQUFJO1VBQUVDLElBQUksRUFBRVMsT0FBTyxDQUFDVCxJQUFJO1VBQUVDLFFBQVEsRUFBRVEsT0FBTyxDQUFDUjtRQUFRLENBQUM7TUFDbEc7SUFDQTtNQUFTO1FBQ0wsT0FBT0UsS0FBSztNQUNoQjtFQUNKO0FBQ0osQ0FBQztBQUVELGlFQUFlRCxPQUFPOzs7Ozs7OztVQ3JDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy9yZWNpcGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBRERfUkVDSVBFfSBmcm9tIFwiLi4vYWN0aW9ucy9yZWNpcGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIlBvbWlkb3LDs3drYVwiLFxuICAgICAgICBkZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdHF1ZSBkaWN0YSBkb2xvcmVtcXVlIGRvbG9ydW0gZXhlcmNpdGF0aW9uZW0gbWFpb3JlcyBtYXhpbWUgbW9sZXN0aWFlIG9mZmljaWlzLCBxdWFzaSBxdW9zIHZvbHVwdGF0ZS4gQXV0IGVzc2UgbGFib3Jpb3NhbSBuZWNlc3NpdGF0aWJ1cyBxdWFtIHF1b3Mgc3VzY2lwaXQgdWxsYW0uIEFtZXQsIGRvbG9yLlwiLFxuICAgICAgICBwcm9kdWN0czogWzEsIDIsIDNdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcIkNvxZsgaW5uZWdvXCIsXG4gICAgICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF0cXVlIGRpY3RhIGRvbG9yZW1xdWUgZG9sb3J1bSBleGVyY2l0YXRpb25lbSBtYWlvcmVzIG1heGltZSBtb2xlc3RpYWUgb2ZmaWNpaXMsIHF1YXNpIHF1b3Mgdm9sdXB0YXRlLiBBdXQgZXNzZSBsYWJvcmlvc2FtIG5lY2Vzc2l0YXRpYnVzIHF1YW0gcXVvcyBzdXNjaXBpdCB1bGxhbS4gQW1ldCwgZG9sb3IuXCIsXG4gICAgICAgIHByb2R1Y3RzOiBbMywgMV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6IFwiSmVzemN6ZSBpbm55IHByemVwaXNcIixcbiAgICAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcbiAgICAgICAgcHJvZHVjdHM6IFs1LCA2XVxuICAgIH1cbl07XG5cbmNvbnN0IHJlY2lwZXMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHt0eXBlLCBwYXlsb2FkfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEFERF9SRUNJUEU6IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICAgICAgICAgIGNvbnN0IGlkID0gc3RhdGUubGVuZ3RoICsgMTtcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHtpZDogaWQsIG5hbWU6IHBheWxvYWQubmFtZSwgZGVzYzogcGF5bG9hZC5kZXNjLCBwcm9kdWN0czogcGF5bG9hZC5wcm9kdWN0c31dO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWNpcGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWQ1NmQ2ZWE5OTczOWI1ODUwYWNcIikiXSwibmFtZXMiOlsiQUREX1JFQ0lQRSIsImluaXRpYWxTdGF0ZSIsImlkIiwibmFtZSIsImRlc2MiLCJwcm9kdWN0cyIsInJlY2lwZXMiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9yZWYiLCJ0eXBlIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9