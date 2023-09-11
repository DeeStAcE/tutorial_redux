"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);




// mapStateToProps (users, articles)
var mapStateToProps = function mapStateToProps(state) {
  return {
    articles: state.articles,
    users: state.users
  };
};

// mapDispatchToProps (onAdd)
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAdd: function onAdd(payload) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.addArticle)(payload));
    },
    onRemove: function onRemove(payload) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.removeArticle)(payload));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_Articles__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

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
        return [function (prevState) {
          return prevState.filter(function (art) {
            return art.title !== payload;
          });
        }];
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
/******/ 	__webpack_require__.h = () => ("67f2aba7caf27c634791")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBS3RCLE9BQU87VUFBQSxFQUFDO1FBQUEsRUFBQztNQUN4RTtJQUNBO01BQVM7UUFDTCxPQUFPTixLQUFLO01BQ2hCO0VBQ0o7QUFDSixDQUFDO0FBRUQsaUVBQWVRLHNEQUFlLENBQUM7RUFDM0JOLEtBQUssRUFBTEEsS0FBSztFQUNMRCxRQUFRLEVBQVJBO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7OztVQ2pERiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDFfUG9sYWN6ZW5pZV96X1JlYWN0LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9BcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAxX1BvbGFjemVuaWVfel9SZWFjdC8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBcnRpY2xlcyBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVzJztcblxuaW1wb3J0IHthZGRBcnRpY2xlLCByZW1vdmVBcnRpY2xlfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcblxuLy8gbWFwU3RhdGVUb1Byb3BzICh1c2VycywgYXJ0aWNsZXMpXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgYXJ0aWNsZXM6IHN0YXRlLmFydGljbGVzLFxuICAgIHVzZXJzOiBzdGF0ZS51c2Vycyxcbn0pO1xuXG4vLyBtYXBEaXNwYXRjaFRvUHJvcHMgKG9uQWRkKVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uQWRkOiAocGF5bG9hZCkgPT4gZGlzcGF0Y2goYWRkQXJ0aWNsZShwYXlsb2FkKSksXG4gICAgb25SZW1vdmU6IChwYXlsb2FkKSA9PiBkaXNwYXRjaChyZW1vdmVBcnRpY2xlKHBheWxvYWQpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFydGljbGVzKTsiLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7QUREX0FSVElDTEUsIEFERF9VU0VSLCBSRU1PVkVfQVJUSUNMRX0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5jb25zdCB1c2Vyc0luaXRpYWxTdGF0ZSA9IHtcbiAgICBqYW46IDAsXG4gICAgZ29zaWE6IDBcbn07XG5cbmNvbnN0IHVzZXJzID0gKHN0YXRlID0gdXNlcnNJbml0aWFsU3RhdGUsIHt0eXBlLCBwYXlsb2FkfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEFERF9VU0VSOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIFtwYXlsb2FkXTogMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIEFERF9BUlRJQ0xFOiB7XG4gICAgICAgICAgICBjb25zdCBhcnRpY2xlc0NvdW50ZXIgPSBzdGF0ZVtwYXlsb2FkLnVzZXJJZF0gKyAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBbcGF5bG9hZC51c2VySWRdOiBhcnRpY2xlc0NvdW50ZXIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBhcnRpY2xlc0luaXRpYWxTdGF0ZSA9IFtdO1xuXG5jb25zdCBhcnRpY2xlcyA9IChzdGF0ZSA9IGFydGljbGVzSW5pdGlhbFN0YXRlLCB7dHlwZSwgcGF5bG9hZH0pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfQVJUSUNMRToge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgcGF5bG9hZC50aXRsZV1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFJFTU9WRV9BUlRJQ0xFOiB7XG4gICAgICAgICAgICByZXR1cm4gW3ByZXZTdGF0ZSA9PiBwcmV2U3RhdGUuZmlsdGVyKGFydCA9PiBhcnQudGl0bGUgIT09IHBheWxvYWQpXVxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICB1c2VycyxcbiAgICBhcnRpY2xlc1xufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjdmMmFiYTdjYWYyN2M2MzQ3OTFcIikiXSwibmFtZXMiOlsiY29ubmVjdCIsIkFydGljbGVzIiwiYWRkQXJ0aWNsZSIsInJlbW92ZUFydGljbGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFydGljbGVzIiwidXNlcnMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwicGF5bG9hZCIsIm9uUmVtb3ZlIiwiY29tYmluZVJlZHVjZXJzIiwiQUREX0FSVElDTEUiLCJBRERfVVNFUiIsIlJFTU9WRV9BUlRJQ0xFIiwidXNlcnNJbml0aWFsU3RhdGUiLCJqYW4iLCJnb3NpYSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9yZWYiLCJ0eXBlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImFydGljbGVzQ291bnRlciIsInVzZXJJZCIsImFydGljbGVzSW5pdGlhbFN0YXRlIiwiX3JlZjIiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0aXRsZSIsInByZXZTdGF0ZSIsImZpbHRlciIsImFydCJdLCJzb3VyY2VSb290IjoiIn0=