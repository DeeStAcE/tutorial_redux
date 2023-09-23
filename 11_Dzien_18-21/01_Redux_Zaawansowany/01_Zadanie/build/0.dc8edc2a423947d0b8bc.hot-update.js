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
        var productsList = payload.products.map(function (product) {
          return Number(product.id);
        });
        var id = state.length + 1;
        return [].concat(_toConsumableArray(state), [{
          id: id,
          name: payload.name,
          desc: payload.desc,
          products: productsList
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
/******/ 	__webpack_require__.h = () => ("ce1fde32177b1e896a7d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYzhlZGMyYTQyMzk0N2QwYjhiYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBRTlDLElBQU1DLFlBQVksR0FBRyxDQUNqQjtFQUNJQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsYUFBYTtFQUNuQkMsSUFBSSxFQUFFLDRPQUE0TztFQUNsUEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3RCLENBQUMsRUFDRDtFQUNJSCxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsWUFBWTtFQUNsQkMsSUFBSSxFQUFFLDRPQUE0TztFQUNsUEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxFQUNEO0VBQ0lILEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxzQkFBc0I7RUFDNUJDLElBQUksRUFBRSw0T0FBNE87RUFDbFBDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FDSjtBQUVELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQThDO0VBQUEsSUFBMUNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdQLFlBQVk7RUFBQSxJQUFBVSxJQUFBLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBR0UsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7SUFBRUMsT0FBTyxHQUFBRixJQUFBLENBQVBFLE9BQU87RUFDakQsUUFBUUQsSUFBSTtJQUNSLEtBQUtaLHdEQUFVO01BQUU7UUFDYixJQUFNYyxZQUFZLEdBQUdELE9BQU8sQ0FBQ1IsUUFBUSxDQUFDVSxHQUFHLENBQUMsVUFBQUMsT0FBTyxFQUFJO1VBQ2pELE9BQU9DLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDZCxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBQ0YsSUFBTUEsRUFBRSxHQUFHSyxLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDO1FBQzNCLFVBQUFTLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1osS0FBSyxJQUFFO1VBQUNMLEVBQUUsRUFBRUEsRUFBRTtVQUFFQyxJQUFJLEVBQUVVLE9BQU8sQ0FBQ1YsSUFBSTtVQUFFQyxJQUFJLEVBQUVTLE9BQU8sQ0FBQ1QsSUFBSTtVQUFFQyxRQUFRLEVBQUVTO1FBQVksQ0FBQztNQUM5RjtJQUNBO01BQVM7UUFDTCxPQUFPUCxLQUFLO01BQ2hCO0VBQ0o7QUFDSixDQUFDO0FBRUQsaUVBQWVELE9BQU87Ozs7Ozs7O1VDdEN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzL3JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FERF9SRUNJUEV9IGZyb20gXCIuLi9hY3Rpb25zL3JlY2lwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6IFwiUG9taWRvcsOzd2thXCIsXG4gICAgICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF0cXVlIGRpY3RhIGRvbG9yZW1xdWUgZG9sb3J1bSBleGVyY2l0YXRpb25lbSBtYWlvcmVzIG1heGltZSBtb2xlc3RpYWUgb2ZmaWNpaXMsIHF1YXNpIHF1b3Mgdm9sdXB0YXRlLiBBdXQgZXNzZSBsYWJvcmlvc2FtIG5lY2Vzc2l0YXRpYnVzIHF1YW0gcXVvcyBzdXNjaXBpdCB1bGxhbS4gQW1ldCwgZG9sb3IuXCIsXG4gICAgICAgIHByb2R1Y3RzOiBbMSwgMiwgM11cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6IFwiQ2/FmyBpbm5lZ29cIixcbiAgICAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcbiAgICAgICAgcHJvZHVjdHM6IFszLCAxXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogXCJKZXN6Y3plIGlubnkgcHJ6ZXBpc1wiLFxuICAgICAgICBkZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdHF1ZSBkaWN0YSBkb2xvcmVtcXVlIGRvbG9ydW0gZXhlcmNpdGF0aW9uZW0gbWFpb3JlcyBtYXhpbWUgbW9sZXN0aWFlIG9mZmljaWlzLCBxdWFzaSBxdW9zIHZvbHVwdGF0ZS4gQXV0IGVzc2UgbGFib3Jpb3NhbSBuZWNlc3NpdGF0aWJ1cyBxdWFtIHF1b3Mgc3VzY2lwaXQgdWxsYW0uIEFtZXQsIGRvbG9yLlwiLFxuICAgICAgICBwcm9kdWN0czogWzUsIDZdXG4gICAgfVxuXTtcblxuY29uc3QgcmVjaXBlcyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwge3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1JFQ0lQRToge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdHNMaXN0ID0gcGF5bG9hZC5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihwcm9kdWN0LmlkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGlkID0gc3RhdGUubGVuZ3RoICsgMTtcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHtpZDogaWQsIG5hbWU6IHBheWxvYWQubmFtZSwgZGVzYzogcGF5bG9hZC5kZXNjLCBwcm9kdWN0czogcHJvZHVjdHNMaXN0fV07XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlY2lwZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZTFmZGUzMjE3N2IxZTg5NmE3ZFwiKSJdLCJuYW1lcyI6WyJBRERfUkVDSVBFIiwiaW5pdGlhbFN0YXRlIiwiaWQiLCJuYW1lIiwiZGVzYyIsInByb2R1Y3RzIiwicmVjaXBlcyIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX3JlZiIsInR5cGUiLCJwYXlsb2FkIiwicHJvZHVjdHNMaXN0IiwibWFwIiwicHJvZHVjdCIsIk51bWJlciIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=