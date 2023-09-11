"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var usersInitialState = {
  jan: 0,
  gosia: 0
};
var users = function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usersInitialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    payload = _ref.payload;
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_USER:
      {
        return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, payload, 0));
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_ARTICLE:
      {
        var articlesCounter = state[payload.userId] + 1;
        return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, payload.userId, articlesCounter));
      }
    default:
      {
        return state;
      }
  }
};
var articlesInitialState = [];
var articles = function articles() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : articlesInitialState;
  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref2.type,
    payload = _ref2.payload;
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_ARTICLE:
      {
        return [].concat(_toConsumableArray(state), [payload.title]);
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_ARTICLE:
      {
        return state.filter(function (art) {
          return art.title !== payload;
        });
      }
    default:
      {
        return state;
      }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  users: users,
  articles: articles
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3df9a8c9d56640306371")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42N2YyYWJhN2NhZjI3YzYzNDc5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUUwQjtBQUVoRSxJQUFNSSxpQkFBaUIsR0FBRztFQUN0QkMsR0FBRyxFQUFFLENBQUM7RUFDTkMsS0FBSyxFQUFFO0FBQ1gsQ0FBQztBQUVELElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFBLEVBQW1EO0VBQUEsSUFBL0NDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdMLGlCQUFpQjtFQUFBLElBQUFRLElBQUEsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtJQUFHRSxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtJQUFFQyxPQUFPLEdBQUFGLElBQUEsQ0FBUEUsT0FBTztFQUNwRCxRQUFRRCxJQUFJO0lBQ1IsS0FBS1gsOENBQVE7TUFBRTtRQUNYLE9BQUFhLGFBQUEsQ0FBQUEsYUFBQSxLQUNPUCxLQUFLLE9BQUFRLGVBQUEsS0FDUEYsT0FBTyxFQUFHLENBQUM7TUFFcEI7SUFDQSxLQUFLYixpREFBVztNQUFFO1FBQ2QsSUFBTWdCLGVBQWUsR0FBR1QsS0FBSyxDQUFDTSxPQUFPLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDakQsT0FBQUgsYUFBQSxDQUFBQSxhQUFBLEtBQ09QLEtBQUssT0FBQVEsZUFBQSxLQUNQRixPQUFPLENBQUNJLE1BQU0sRUFBR0QsZUFBZTtNQUV6QztJQUNBO01BQVM7UUFDTCxPQUFPVCxLQUFLO01BQ2hCO0VBQ0o7QUFDSixDQUFDO0FBRUQsSUFBTVcsb0JBQW9CLEdBQUcsRUFBRTtBQUUvQixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFzRDtFQUFBLElBQWxEWixLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHVSxvQkFBb0I7RUFBQSxJQUFBRSxLQUFBLEdBQUFaLFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBR0UsSUFBSSxHQUFBUSxLQUFBLENBQUpSLElBQUk7SUFBRUMsT0FBTyxHQUFBTyxLQUFBLENBQVBQLE9BQU87RUFDMUQsUUFBUUQsSUFBSTtJQUNSLEtBQUtaLGlEQUFXO01BQUU7UUFDZCxVQUFBcUIsTUFBQSxDQUFBQyxrQkFBQSxDQUFXZixLQUFLLElBQUVNLE9BQU8sQ0FBQ1UsS0FBSztNQUNuQztJQUNBLEtBQUtyQixvREFBYztNQUFFO1FBQ2pCLE9BQU9LLEtBQUssQ0FBQ2lCLE1BQU0sQ0FBQyxVQUFBQyxHQUFHO1VBQUEsT0FBSUEsR0FBRyxDQUFDRixLQUFLLEtBQUtWLE9BQU87UUFBQSxFQUFDO01BQ3JEO0lBQ0E7TUFBUztRQUNMLE9BQU9OLEtBQUs7TUFDaEI7RUFDSjtBQUNKLENBQUM7QUFFRCxpRUFBZVIsc0RBQWUsQ0FBQztFQUMzQk8sS0FBSyxFQUFMQSxLQUFLO0VBQ0xhLFFBQVEsRUFBUkE7QUFDSixDQUFDLENBQUM7Ozs7Ozs7O1VDakRGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMV9Qb2xhY3plbmllX3pfUmVhY3QvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHtBRERfQVJUSUNMRSwgQUREX1VTRVIsIFJFTU9WRV9BUlRJQ0xFfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmNvbnN0IHVzZXJzSW5pdGlhbFN0YXRlID0ge1xuICAgIGphbjogMCxcbiAgICBnb3NpYTogMFxufTtcblxuY29uc3QgdXNlcnMgPSAoc3RhdGUgPSB1c2Vyc0luaXRpYWxTdGF0ZSwge3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1VTRVI6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgW3BheWxvYWRdOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgQUREX0FSVElDTEU6IHtcbiAgICAgICAgICAgIGNvbnN0IGFydGljbGVzQ291bnRlciA9IHN0YXRlW3BheWxvYWQudXNlcklkXSArIDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIFtwYXlsb2FkLnVzZXJJZF06IGFydGljbGVzQ291bnRlcixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGFydGljbGVzSW5pdGlhbFN0YXRlID0gW107XG5cbmNvbnN0IGFydGljbGVzID0gKHN0YXRlID0gYXJ0aWNsZXNJbml0aWFsU3RhdGUsIHt0eXBlLCBwYXlsb2FkfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEFERF9BUlRJQ0xFOiB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBwYXlsb2FkLnRpdGxlXVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgUkVNT1ZFX0FSVElDTEU6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoYXJ0ID0+IGFydC50aXRsZSAhPT0gcGF5bG9hZClcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdXNlcnMsXG4gICAgYXJ0aWNsZXNcbn0pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNkZjlhOGM5ZDU2NjQwMzA2MzcxXCIpIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsIkFERF9BUlRJQ0xFIiwiQUREX1VTRVIiLCJSRU1PVkVfQVJUSUNMRSIsInVzZXJzSW5pdGlhbFN0YXRlIiwiamFuIiwiZ29zaWEiLCJ1c2VycyIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX3JlZiIsInR5cGUiLCJwYXlsb2FkIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImFydGljbGVzQ291bnRlciIsInVzZXJJZCIsImFydGljbGVzSW5pdGlhbFN0YXRlIiwiYXJ0aWNsZXMiLCJfcmVmMiIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInRpdGxlIiwiZmlsdGVyIiwiYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==