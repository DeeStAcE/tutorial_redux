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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93);
/* harmony import */ var _containers_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _containers_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);






var NewCounter = function NewCounter() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    initCounter = _useParams.initCounter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    counter: initCounter
  });
};
var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/:initCounter/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NewCounter, null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_List__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);



var mapState = function mapState(state, _ref) {
  var initCounter = _ref.initCounter;
  return {
    counter: initCounter || state.counter.value,
    isCounting: state.counter.isCounting
  };
};
var mapDispatch = function mapDispatch(dispatch) {
  return {
    onStartCounter: function onStartCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.startCounter)());
    },
    onPause: function onPause() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.pause)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapState, mapDispatch)(_components_Counter__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
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



var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
  initCounter = _useParams.initCounter;
var initialState = {
  "isCounting": false,
  "value": 0
};
var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    payload = _ref.payload;
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.INCREASE:
      {
        return {
          isCounting: true,
          value: state.value + 1
        };
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.PAUSE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isCounting: false
        });
      }
    default:
      {
        return state;
      }
  }
};
var list = function list() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref2.type,
    payload = _ref2.payload;
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.SAVE:
      {
        return [].concat(_toConsumableArray(state), [payload]);
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DELETE:
      {
        state.splice(payload, 1);
        return _toConsumableArray(state);
      }
    default:
      {
        return state;
      }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  counter: counter,
  list: list
}));

/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);



var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_0__["default"], (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("916648936f23b4c58d4f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bURBQUssQ0FBQyxDQUFDO0FBRTFELGlFQUFlekMsS0FBSzs7Ozs7Ozs7VUNOcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICAgIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxuICAgIFJvdXRlcyxcbiAgICBSb3V0ZSxcbiAgICB1c2VQYXJhbXNcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29udGFpbmVycy9Db3VudGVyJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29udGFpbmVycy9MaXN0J1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJ1xuXG5cbmNvbnN0IE5ld0NvdW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge2luaXRDb3VudGVyfSA9IHVzZVBhcmFtcygpXG5cbiAgICByZXR1cm4gPENvdW50ZXIgY291bnRlcj17aW5pdENvdW50ZXJ9Lz5cbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiXCIgZWxlbWVudD17PENvdW50ZXIvPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvOmluaXRDb3VudGVyL1wiIGVsZW1lbnQ9ezxOZXdDb3VudGVyLz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRlcidcblxuaW1wb3J0IHtzdGFydENvdW50ZXIsIHBhdXNlfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSwge2luaXRDb3VudGVyfSkgPT4gKHtcbiAgICBjb3VudGVyOiBpbml0Q291bnRlciB8fCBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uU3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgb25QYXVzZTogKCkgPT4gZGlzcGF0Y2gocGF1c2UoKSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ291bnRlcikiLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge1BBVVNFLCBJTkNSRUFTRSwgU0FWRSwgREVMRVRFfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuXG5jb25zdCB7aW5pdENvdW50ZXJ9ID0gdXNlUGFyYW1zKClcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIFwiaXNDb3VudGluZ1wiOiBmYWxzZSxcbiAgICBcInZhbHVlXCI6IDBcbn1cblxuY29uc3QgY291bnRlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwge3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgSU5DUkVBU0U6IHtcbiAgICAgICAgICAgIHJldHVybiB7aXNDb3VudGluZzogdHJ1ZSwgdmFsdWU6IHN0YXRlLnZhbHVlICsgMX1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFBBVVNFOiB7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0NvdW50aW5nOiBmYWxzZX1cbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbGlzdCA9IChzdGF0ZSA9IFtdLCB7dHlwZSwgcGF5bG9hZH0pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBTQVZFOiB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBwYXlsb2FkXVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgREVMRVRFOiB7XG4gICAgICAgICAgICBzdGF0ZS5zcGxpY2UocGF5bG9hZCwgMSlcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGVdXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnRlcixcbiAgICBsaXN0XG59KSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlclwiO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkxNjY0ODkzNmYyM2I0YzU4ZDRmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJ1c2VQYXJhbXMiLCJDb3VudGVyIiwiTGlzdCIsInN0b3JlIiwiTmV3Q291bnRlciIsIl91c2VQYXJhbXMiLCJpbml0Q291bnRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb3VudGVyIiwiTWFpbiIsIkZyYWdtZW50IiwicGF0aCIsImVsZW1lbnQiLCJjb25uZWN0Iiwic3RhcnRDb3VudGVyIiwicGF1c2UiLCJtYXBTdGF0ZSIsInN0YXRlIiwiX3JlZiIsInZhbHVlIiwiaXNDb3VudGluZyIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiLCJjb21iaW5lUmVkdWNlcnMiLCJQQVVTRSIsIklOQ1JFQVNFIiwiU0FWRSIsIkRFTEVURSIsImluaXRpYWxTdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInR5cGUiLCJwYXlsb2FkIiwiX29iamVjdFNwcmVhZCIsImxpc3QiLCJfcmVmMiIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInNwbGljZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==