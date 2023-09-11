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
        console.log(state);
        console.log(payload);
        return [state.filter(function (art) {
          console.log(art.title);
          return art.title !== payload;
        })];
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
/******/ 	__webpack_require__.h = () => ("2471a1155bddbaa9856d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMTcxOWMyZjNjMTUwNjBhMWQ3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUUwQjtBQUVoRSxJQUFNSSxpQkFBaUIsR0FBRztFQUN0QkMsR0FBRyxFQUFFLENBQUM7RUFDTkMsS0FBSyxFQUFFO0FBQ1gsQ0FBQztBQUVELElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFBLEVBQW1EO0VBQUEsSUFBL0NDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdMLGlCQUFpQjtFQUFBLElBQUFRLElBQUEsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtJQUFHRSxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtJQUFFQyxPQUFPLEdBQUFGLElBQUEsQ0FBUEUsT0FBTztFQUNwRCxRQUFRRCxJQUFJO0lBQ1IsS0FBS1gsOENBQVE7TUFBRTtRQUNYLE9BQUFhLGFBQUEsQ0FBQUEsYUFBQSxLQUNPUCxLQUFLLE9BQUFRLGVBQUEsS0FDUEYsT0FBTyxFQUFHLENBQUM7TUFFcEI7SUFDQSxLQUFLYixpREFBVztNQUFFO1FBQ2QsSUFBTWdCLGVBQWUsR0FBR1QsS0FBSyxDQUFDTSxPQUFPLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDakQsT0FBQUgsYUFBQSxDQUFBQSxhQUFBLEtBQ09QLEtBQUssT0FBQVEsZUFBQSxLQUNQRixPQUFPLENBQUNJLE1BQU0sRUFBR0QsZUFBZTtNQUV6QztJQUNBO01BQVM7UUFDTCxPQUFPVCxLQUFLO01BQ2hCO0VBQ0o7QUFDSixDQUFDO0FBRUQsSUFBTVcsb0JBQW9CLEdBQUcsRUFBRTtBQUUvQixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFzRDtFQUFBLElBQWxEWixLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHVSxvQkFBb0I7RUFBQSxJQUFBRSxLQUFBLEdBQUFaLFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBR0UsSUFBSSxHQUFBUSxLQUFBLENBQUpSLElBQUk7SUFBRUMsT0FBTyxHQUFBTyxLQUFBLENBQVBQLE9BQU87RUFDMUQsUUFBUUQsSUFBSTtJQUNSLEtBQUtaLGlEQUFXO01BQUU7UUFDZCxVQUFBcUIsTUFBQSxDQUFBQyxrQkFBQSxDQUFXZixLQUFLLElBQUVNLE9BQU8sQ0FBQ1UsS0FBSztNQUNuQztJQUNBLEtBQUtyQixvREFBYztNQUFFO1FBQ2pCc0IsT0FBTyxDQUFDQyxHQUFHLENBQUNsQixLQUFLLENBQUM7UUFDbEJpQixPQUFPLENBQUNDLEdBQUcsQ0FBQ1osT0FBTyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQ04sS0FBSyxDQUFDbUIsTUFBTSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtVQUN4QkgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUcsQ0FBQ0osS0FBSyxDQUFDO1VBQ3RCLE9BQU9JLEdBQUcsQ0FBQ0osS0FBSyxLQUFLVixPQUFPO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO01BQ1A7SUFDQTtNQUFTO1FBQ0wsT0FBT04sS0FBSztNQUNoQjtFQUNKO0FBQ0osQ0FBQztBQUVELGlFQUFlUixzREFBZSxDQUFDO0VBQzNCTyxLQUFLLEVBQUxBLEtBQUs7RUFDTGEsUUFBUSxFQUFSQTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7VUN0REYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAxX1BvbGFjemVuaWVfel9SZWFjdC8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xuXG5pbXBvcnQge0FERF9BUlRJQ0xFLCBBRERfVVNFUiwgUkVNT1ZFX0FSVElDTEV9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuY29uc3QgdXNlcnNJbml0aWFsU3RhdGUgPSB7XG4gICAgamFuOiAwLFxuICAgIGdvc2lhOiAwXG59O1xuXG5jb25zdCB1c2VycyA9IChzdGF0ZSA9IHVzZXJzSW5pdGlhbFN0YXRlLCB7dHlwZSwgcGF5bG9hZH0pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfVVNFUjoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBbcGF5bG9hZF06IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBBRERfQVJUSUNMRToge1xuICAgICAgICAgICAgY29uc3QgYXJ0aWNsZXNDb3VudGVyID0gc3RhdGVbcGF5bG9hZC51c2VySWRdICsgMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgW3BheWxvYWQudXNlcklkXTogYXJ0aWNsZXNDb3VudGVyLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYXJ0aWNsZXNJbml0aWFsU3RhdGUgPSBbXTtcblxuY29uc3QgYXJ0aWNsZXMgPSAoc3RhdGUgPSBhcnRpY2xlc0luaXRpYWxTdGF0ZSwge3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX0FSVElDTEU6IHtcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHBheWxvYWQudGl0bGVdXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBSRU1PVkVfQVJUSUNMRToge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxuICAgICAgICAgICAgcmV0dXJuIFtzdGF0ZS5maWx0ZXIoYXJ0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnQudGl0bGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFydC50aXRsZSAhPT0gcGF5bG9hZFxuICAgICAgICAgICAgfSldXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHVzZXJzLFxuICAgIGFydGljbGVzXG59KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNDcxYTExNTViZGRiYWE5ODU2ZFwiKSJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJBRERfQVJUSUNMRSIsIkFERF9VU0VSIiwiUkVNT1ZFX0FSVElDTEUiLCJ1c2Vyc0luaXRpYWxTdGF0ZSIsImphbiIsImdvc2lhIiwidXNlcnMiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9yZWYiLCJ0eXBlIiwicGF5bG9hZCIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJhcnRpY2xlc0NvdW50ZXIiLCJ1c2VySWQiLCJhcnRpY2xlc0luaXRpYWxTdGF0ZSIsImFydGljbGVzIiwiX3JlZjIiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJhcnQiXSwic291cmNlUm9vdCI6IiJ9