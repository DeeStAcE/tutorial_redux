"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initialCounter: () => (/* binding */ initialCounter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93);
/* harmony import */ var _containers_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _containers_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);






var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
  initialCounter = _useParams.initialCounter;

var NewCounter = function NewCounter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    counter: counter
  });
};
var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/:counter/",
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



var mapState = function mapState(state) {
  return {
    counter: state.counter.value,
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
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
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
  "value": _components_Main__WEBPACK_IMPORTED_MODULE_0__.initialCounter || 0
};
var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    payload = _ref.payload;
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.INCREASE:
      {
        return {
          isCounting: true,
          value: state.value + 1
        };
      }
    case _actions__WEBPACK_IMPORTED_MODULE_1__.PAUSE:
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
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SAVE:
      {
        return [].concat(_toConsumableArray(state), [payload]);
      }
    case _actions__WEBPACK_IMPORTED_MODULE_1__.DELETE:
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
/******/ 	__webpack_require__.h = () => ("024b794a7508862c8095")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MzllNDExNzhkODkxZjAxNDI2Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVztBQU1YO0FBRWlCO0FBQ047QUFDSDtBQUUzQixJQUFBVSxVQUFBLEdBQXlCSiwyREFBUyxDQUFDLENBQUM7RUFBN0JLLGNBQWMsR0FBQUQsVUFBQSxDQUFkQyxjQUFjO0FBQWU7QUFFM0MsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUNyQixvQkFBT1osMERBQUEsQ0FBQ08sMkRBQU87SUFBQ08sT0FBTyxFQUFFQTtFQUFRLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRUQsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztFQUNmLG9CQUNJZiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0MsaURBQVE7SUFBQ1EsS0FBSyxFQUFFQSxvREFBS0E7RUFBQyxnQkFDbkJULDBEQUFBLENBQUNHLDJEQUFNLHFCQUNISCwwREFBQSxDQUFDSSxvREFBTSxxQkFDSEosMERBQUEsQ0FBQ0ssbURBQUs7SUFBQ1ksSUFBSSxFQUFDLEVBQUU7SUFBQ0MsT0FBTyxlQUFFbEIsMERBQUEsQ0FBQ08sMkRBQU8sTUFBQztFQUFFLENBQUMsQ0FBQyxlQUNyQ1AsMERBQUEsQ0FBQ0ssbURBQUs7SUFBQ1ksSUFBSSxFQUFDLFlBQVk7SUFBQ0MsT0FBTyxlQUFFbEIsMERBQUEsQ0FBQ1ksVUFBVSxNQUFDO0VBQUUsQ0FBQyxDQUM3QyxDQUFDLGVBQ1RaLDBEQUFBLENBQUNRLHdEQUFJLE1BQUMsQ0FDRixDQUNGLENBQ1osQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZU8sSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNuQ2lCO0FBRU87QUFFVTtBQUVyRCxJQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsS0FBSztFQUFBLE9BQU07SUFDekJULE9BQU8sRUFBRVMsS0FBSyxDQUFDVCxPQUFPLENBQUNVLEtBQUs7SUFDNUJDLFVBQVUsRUFBRUYsS0FBSyxDQUFDVCxPQUFPLENBQUNXO0VBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQy9CQyxjQUFjLEVBQUUsU0FBQUEsZUFBQTtNQUFBLE9BQU1ELFFBQVEsQ0FBQ1AsNERBQVksQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUM5Q1MsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNRixRQUFRLENBQUNOLHFEQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFDcEMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUYsb0RBQU8sQ0FBQ0csUUFBUSxFQUFFSSxXQUFXLENBQUMsQ0FBQ25CLDJEQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJoQjtBQUNXO0FBQ087QUFFeEQsSUFBTTRCLFlBQVksR0FBRztFQUNqQixZQUFZLEVBQUUsS0FBSztFQUNuQixPQUFPLEVBQUV4Qiw0REFBYyxJQUFJO0FBQy9CLENBQUM7QUFFRCxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUE4QztFQUFBLElBQTFDUyxLQUFLLEdBQUFhLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHRCxZQUFZO0VBQUEsSUFBQUksSUFBQSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0lBQUdFLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0lBQUVDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0VBQ2pELFFBQVFELElBQUk7SUFDUixLQUFLUiw4Q0FBUTtNQUFFO1FBQ1gsT0FBTztVQUFDUCxVQUFVLEVBQUUsSUFBSTtVQUFFRCxLQUFLLEVBQUVELEtBQUssQ0FBQ0MsS0FBSyxHQUFHO1FBQUMsQ0FBQztNQUNyRDtJQUNBLEtBQUtPLDJDQUFLO01BQUU7UUFDUixPQUFBVyxhQUFBLENBQUFBLGFBQUEsS0FBV25CLEtBQUs7VUFBRUUsVUFBVSxFQUFFO1FBQUs7TUFDdkM7SUFDQTtNQUFTO1FBQ0wsT0FBT0YsS0FBSztNQUNoQjtFQUNKO0FBQ0osQ0FBQztBQUVELElBQU1vQixJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFvQztFQUFBLElBQWhDcEIsS0FBSyxHQUFBYSxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFO0VBQUEsSUFBQVEsS0FBQSxHQUFBUixTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0lBQUdFLElBQUksR0FBQUksS0FBQSxDQUFKSixJQUFJO0lBQUVDLE9BQU8sR0FBQUcsS0FBQSxDQUFQSCxPQUFPO0VBQ3BDLFFBQVFELElBQUk7SUFDUixLQUFLUCwwQ0FBSTtNQUFFO1FBQ1AsVUFBQVksTUFBQSxDQUFBQyxrQkFBQSxDQUFXdkIsS0FBSyxJQUFFa0IsT0FBTztNQUM3QjtJQUNBLEtBQUtQLDRDQUFNO01BQUU7UUFDVFgsS0FBSyxDQUFDd0IsTUFBTSxDQUFDTixPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLE9BQUFLLGtCQUFBLENBQVd2QixLQUFLO01BQ3BCO0lBQ0E7TUFBUztRQUNMLE9BQU9BLEtBQUs7TUFDaEI7RUFDSjtBQUNKLENBQUM7QUFFRCxpRUFBZU8sc0RBQWUsQ0FBQztFQUMzQmhCLE9BQU8sRUFBUEEsT0FBTztFQUNQNkIsSUFBSSxFQUFKQTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN6Q2tEO0FBQ3BCO0FBQ0E7QUFFaEMsSUFBTWxDLEtBQUssR0FBR3VDLGtEQUFXLENBQUNHLGdEQUFPLEVBQUVGLHNEQUFlLENBQUNDLG1EQUFLLENBQUMsQ0FBQztBQUUxRCxpRUFBZXpDLEtBQUs7Ozs7Ozs7O1VDTnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcbiAgICBSb3V0ZXMsXG4gICAgUm91dGUsXG4gICAgdXNlUGFyYW1zXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQ291bnRlcidcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbnRhaW5lcnMvTGlzdCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcblxuZXhwb3J0IGNvbnN0IHtpbml0aWFsQ291bnRlcn0gPSB1c2VQYXJhbXMoKVxuXG5jb25zdCBOZXdDb3VudGVyID0gKCkgPT4ge1xuICAgIHJldHVybiA8Q291bnRlciBjb3VudGVyPXtjb3VudGVyfS8+XG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIlwiIGVsZW1lbnQ9ezxDb3VudGVyLz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiLzpjb3VudGVyL1wiIGVsZW1lbnQ9ezxOZXdDb3VudGVyLz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRlcidcblxuaW1wb3J0IHtzdGFydENvdW50ZXIsIHBhdXNlfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgICBjb3VudGVyOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uU3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgb25QYXVzZTogKCkgPT4gZGlzcGF0Y2gocGF1c2UoKSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ291bnRlcikiLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge2luaXRpYWxDb3VudGVyfSBmcm9tICcuLi9jb21wb25lbnRzL01haW4nXG5pbXBvcnQge1BBVVNFLCBJTkNSRUFTRSwgU0FWRSwgREVMRVRFfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBcImlzQ291bnRpbmdcIjogZmFsc2UsXG4gICAgXCJ2YWx1ZVwiOiBpbml0aWFsQ291bnRlciB8fCAwXG59XG5cbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHt0eXBlLCBwYXlsb2FkfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIElOQ1JFQVNFOiB7XG4gICAgICAgICAgICByZXR1cm4ge2lzQ291bnRpbmc6IHRydWUsIHZhbHVlOiBzdGF0ZS52YWx1ZSArIDF9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBQQVVTRToge1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNDb3VudGluZzogZmFsc2V9XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGxpc3QgPSAoc3RhdGUgPSBbXSwge3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgU0FWRToge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgcGF5bG9hZF1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIERFTEVURToge1xuICAgICAgICAgICAgc3RhdGUuc3BsaWNlKHBheWxvYWQsIDEpXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlXVxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvdW50ZXIsXG4gICAgbGlzdFxufSkiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMjRiNzk0YTc1MDg4NjJjODA5NVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwidXNlUGFyYW1zIiwiQ291bnRlciIsIkxpc3QiLCJzdG9yZSIsIl91c2VQYXJhbXMiLCJpbml0aWFsQ291bnRlciIsIk5ld0NvdW50ZXIiLCJjcmVhdGVFbGVtZW50IiwiY291bnRlciIsIk1haW4iLCJGcmFnbWVudCIsInBhdGgiLCJlbGVtZW50IiwiY29ubmVjdCIsInN0YXJ0Q291bnRlciIsInBhdXNlIiwibWFwU3RhdGUiLCJzdGF0ZSIsInZhbHVlIiwiaXNDb3VudGluZyIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiLCJjb21iaW5lUmVkdWNlcnMiLCJQQVVTRSIsIklOQ1JFQVNFIiwiU0FWRSIsIkRFTEVURSIsImluaXRpYWxTdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9yZWYiLCJ0eXBlIiwicGF5bG9hZCIsIl9vYmplY3RTcHJlYWQiLCJsaXN0IiwiX3JlZjIiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzcGxpY2UiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=