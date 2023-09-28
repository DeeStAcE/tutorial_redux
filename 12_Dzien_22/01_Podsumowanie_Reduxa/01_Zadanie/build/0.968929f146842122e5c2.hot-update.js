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
    initCounter: initCounter
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

/***/ 83:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counter,
  list: list
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("28971c14b56c893ee242")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQyxDQUFDO1FBQ3hCLE9BQUFPLGtCQUFBLENBQVdiLEtBQUs7TUFDcEI7SUFDQTtNQUFTO1FBQ0wsT0FBT0EsS0FBSztNQUNoQjtFQUNKO0FBQ0osQ0FBQztBQUVELGlFQUFlUCxzREFBZSxDQUFDO0VBQzNCTSxPQUFPLEVBQVBBLE9BQU87RUFDUFcsSUFBSSxFQUFKQTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7VUN4Q0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICAgIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxuICAgIFJvdXRlcyxcbiAgICBSb3V0ZSxcbiAgICB1c2VQYXJhbXNcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29udGFpbmVycy9Db3VudGVyJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29udGFpbmVycy9MaXN0J1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJ1xuXG5cbmNvbnN0IE5ld0NvdW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge2luaXRDb3VudGVyfSA9IHVzZVBhcmFtcygpXG5cbiAgICByZXR1cm4gPENvdW50ZXIgaW5pdENvdW50ZXI9e2luaXRDb3VudGVyfS8+XG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIlwiIGVsZW1lbnQ9ezxDb3VudGVyLz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiLzppbml0Q291bnRlci9cIiBlbGVtZW50PXs8TmV3Q291bnRlci8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge1BBVVNFLCBJTkNSRUFTRSwgU0FWRSwgREVMRVRFfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBcImlzQ291bnRpbmdcIjogZmFsc2UsXG4gICAgXCJ2YWx1ZVwiOiAwXG59XG5cbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHt0eXBlLCBwYXlsb2FkfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIElOQ1JFQVNFOiB7XG4gICAgICAgICAgICByZXR1cm4ge2lzQ291bnRpbmc6IHRydWUsIHZhbHVlOiBzdGF0ZS52YWx1ZSArIDF9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBQQVVTRToge1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNDb3VudGluZzogZmFsc2V9XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGxpc3QgPSAoc3RhdGUgPSBbXSwge3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgU0FWRToge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgcGF5bG9hZF1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIERFTEVURToge1xuICAgICAgICAgICAgc3RhdGUuc3BsaWNlKHBheWxvYWQsIDEpXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlXVxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvdW50ZXIsXG4gICAgbGlzdFxufSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyODk3MWMxNGI1NmM4OTNlZTI0MlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwidXNlUGFyYW1zIiwiQ291bnRlciIsIkxpc3QiLCJzdG9yZSIsIk5ld0NvdW50ZXIiLCJfdXNlUGFyYW1zIiwiaW5pdENvdW50ZXIiLCJjcmVhdGVFbGVtZW50IiwiTWFpbiIsIkZyYWdtZW50IiwicGF0aCIsImVsZW1lbnQiLCJjb21iaW5lUmVkdWNlcnMiLCJQQVVTRSIsIklOQ1JFQVNFIiwiU0FWRSIsIkRFTEVURSIsImluaXRpYWxTdGF0ZSIsImNvdW50ZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9yZWYiLCJ0eXBlIiwicGF5bG9hZCIsImlzQ291bnRpbmciLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJsaXN0IiwiX3JlZjIiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9