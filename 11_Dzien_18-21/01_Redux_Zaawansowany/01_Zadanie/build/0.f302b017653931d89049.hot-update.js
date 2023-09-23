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
        console.log(payload.products.get('id'));
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
/******/ 	__webpack_require__.h = () => ("2d8ee70c1d77133c1fb1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMzAyYjAxNzY1MzkzMWQ4OTA0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBRTlDLElBQU1DLFlBQVksR0FBRyxDQUNqQjtFQUNJQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsYUFBYTtFQUNuQkMsSUFBSSxFQUFFLDRPQUE0TztFQUNsUEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3RCLENBQUMsRUFDRDtFQUNJSCxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsWUFBWTtFQUNsQkMsSUFBSSxFQUFFLDRPQUE0TztFQUNsUEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxFQUNEO0VBQ0lILEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxzQkFBc0I7RUFDNUJDLElBQUksRUFBRSw0T0FBNE87RUFDbFBDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FDSjtBQUVELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQThDO0VBQUEsSUFBMUNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdQLFlBQVk7RUFBQSxJQUFBVSxJQUFBLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBR0UsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7SUFBRUMsT0FBTyxHQUFBRixJQUFBLENBQVBFLE9BQU87RUFDakQsUUFBUUQsSUFBSTtJQUNSLEtBQUtaLHdEQUFVO01BQUU7UUFDYmMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ1IsUUFBUSxDQUFDVyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkNGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixLQUFLLENBQUM7UUFDbEIsSUFBTUwsRUFBRSxHQUFHSyxLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDO1FBQzNCLFVBQUFRLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1gsS0FBSyxJQUFFO1VBQUNMLEVBQUUsRUFBRUEsRUFBRTtVQUFFQyxJQUFJLEVBQUVVLE9BQU8sQ0FBQ1YsSUFBSTtVQUFFQyxJQUFJLEVBQUVTLE9BQU8sQ0FBQ1QsSUFBSTtVQUFFQyxRQUFRLEVBQUVRLE9BQU8sQ0FBQ1I7UUFBUSxDQUFDO01BQ2xHO0lBQ0E7TUFBUztRQUNMLE9BQU9FLEtBQUs7TUFDaEI7RUFDSjtBQUNKLENBQUM7QUFFRCxpRUFBZUQsT0FBTzs7Ozs7Ozs7VUNyQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMvcmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QUREX1JFQ0lQRX0gZnJvbSBcIi4uL2FjdGlvbnMvcmVjaXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJQb21pZG9yw7N3a2FcIixcbiAgICAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcbiAgICAgICAgcHJvZHVjdHM6IFsxLCAyLCAzXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogXCJDb8WbIGlubmVnb1wiLFxuICAgICAgICBkZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdHF1ZSBkaWN0YSBkb2xvcmVtcXVlIGRvbG9ydW0gZXhlcmNpdGF0aW9uZW0gbWFpb3JlcyBtYXhpbWUgbW9sZXN0aWFlIG9mZmljaWlzLCBxdWFzaSBxdW9zIHZvbHVwdGF0ZS4gQXV0IGVzc2UgbGFib3Jpb3NhbSBuZWNlc3NpdGF0aWJ1cyBxdWFtIHF1b3Mgc3VzY2lwaXQgdWxsYW0uIEFtZXQsIGRvbG9yLlwiLFxuICAgICAgICBwcm9kdWN0czogWzMsIDFdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiBcIkplc3pjemUgaW5ueSBwcnplcGlzXCIsXG4gICAgICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF0cXVlIGRpY3RhIGRvbG9yZW1xdWUgZG9sb3J1bSBleGVyY2l0YXRpb25lbSBtYWlvcmVzIG1heGltZSBtb2xlc3RpYWUgb2ZmaWNpaXMsIHF1YXNpIHF1b3Mgdm9sdXB0YXRlLiBBdXQgZXNzZSBsYWJvcmlvc2FtIG5lY2Vzc2l0YXRpYnVzIHF1YW0gcXVvcyBzdXNjaXBpdCB1bGxhbS4gQW1ldCwgZG9sb3IuXCIsXG4gICAgICAgIHByb2R1Y3RzOiBbNSwgNl1cbiAgICB9XG5dO1xuXG5jb25zdCByZWNpcGVzID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7dHlwZSwgcGF5bG9hZH0pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUkVDSVBFOiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkLnByb2R1Y3RzLmdldCgnaWQnKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgICAgICAgICAgY29uc3QgaWQgPSBzdGF0ZS5sZW5ndGggKyAxO1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge2lkOiBpZCwgbmFtZTogcGF5bG9hZC5uYW1lLCBkZXNjOiBwYXlsb2FkLmRlc2MsIHByb2R1Y3RzOiBwYXlsb2FkLnByb2R1Y3RzfV07XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlY2lwZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZDhlZTcwYzFkNzcxMzNjMWZiMVwiKSJdLCJuYW1lcyI6WyJBRERfUkVDSVBFIiwiaW5pdGlhbFN0YXRlIiwiaWQiLCJuYW1lIiwiZGVzYyIsInByb2R1Y3RzIiwicmVjaXBlcyIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX3JlZiIsInR5cGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImdldCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=