"use strict";
self["webpackHotUpdatees6_react"](0,{

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

/***/ 79:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DELETE: () => (/* binding */ DELETE),
/* harmony export */   INCREASE: () => (/* binding */ INCREASE),
/* harmony export */   PAUSE: () => (/* binding */ PAUSE),
/* harmony export */   SAVE: () => (/* binding */ SAVE),
/* harmony export */   SET: () => (/* binding */ SET),
/* harmony export */   deleteObject: () => (/* binding */ deleteObject),
/* harmony export */   increase: () => (/* binding */ increase),
/* harmony export */   pause: () => (/* binding */ pause),
/* harmony export */   save: () => (/* binding */ save),
/* harmony export */   setValue: () => (/* binding */ setValue),
/* harmony export */   startCounter: () => (/* binding */ startCounter)
/* harmony export */ });
var PAUSE = 'PAUSE';
var INCREASE = 'INCREASE';
var SAVE = 'SAVE';
var DELETE = "DELETE";
var SET = "SET";
var interval;
var startCounter = function startCounter() {
  return function (dispatch) {
    interval = setInterval(function () {
      dispatch(increase());
    }, 1000);
  };
};
var pause = function pause() {
  clearInterval(interval);
  return {
    type: PAUSE
  };
};
var increase = function increase() {
  return {
    type: INCREASE
  };
};
var save = function save(payload) {
  return {
    type: SAVE,
    payload: payload
  };
};
var deleteObject = function deleteObject(payload) {
  return {
    type: DELETE,
    payload: payload
  };
};
var setValue = function setValue(payload) {
  return {
    type: SET,
    payload: payload
  };
};

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
    case _actions__WEBPACK_IMPORTED_MODULE_0__.SET:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          value: payload
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
/******/ 	__webpack_require__.h = () => ("c0979321bf616530d0a3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztNQUNoQjtFQUNKO0FBQ0osQ0FBQztBQUVELGlFQUFld0Isc0RBQWUsQ0FBQztFQUMzQnJCLE9BQU8sRUFBUEEsT0FBTztFQUNQMkIsSUFBSSxFQUFKQTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7VUMzQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJ1xuXG5pbXBvcnQge3N0YXJ0Q291bnRlciwgcGF1c2V9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlLCB7aW5pdENvdW50ZXJ9KSA9PiAoe1xuICAgIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25TdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBvblBhdXNlOiAoKSA9PiBkaXNwYXRjaChwYXVzZSgpKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDb3VudGVyKSIsImV4cG9ydCBjb25zdCBQQVVTRSA9ICdQQVVTRSc7XG5leHBvcnQgY29uc3QgSU5DUkVBU0UgPSAnSU5DUkVBU0UnO1xuZXhwb3J0IGNvbnN0IFNBVkUgPSAnU0FWRSc7XG5leHBvcnQgY29uc3QgREVMRVRFID0gXCJERUxFVEVcIlxuZXhwb3J0IGNvbnN0IFNFVCA9IFwiU0VUXCJcblxubGV0IGludGVydmFsO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRDb3VudGVyID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goaW5jcmVhc2UoKSk7XG4gICAgfSwgMTAwMCk7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHBhdXNlID0gKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUEFVU0UsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaW5jcmVhc2UgPSAoKSA9PiAoe1xuICAgIHR5cGU6IElOQ1JFQVNFXG59KTtcblxuZXhwb3J0IGNvbnN0IHNhdmUgPSAocGF5bG9hZCkgPT4gKHtcbiAgICB0eXBlOiBTQVZFLFxuICAgIHBheWxvYWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU9iamVjdCA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IERFTEVURSxcbiAgICBwYXlsb2FkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRWYWx1ZSA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IFNFVCxcbiAgICBwYXlsb2FkLFxufSk7XG4iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge1BBVVNFLCBJTkNSRUFTRSwgU0FWRSwgREVMRVRFLCBTRVR9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIFwiaXNDb3VudGluZ1wiOiBmYWxzZSxcbiAgICBcInZhbHVlXCI6IDBcbn1cblxuY29uc3QgY291bnRlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwge3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgSU5DUkVBU0U6IHtcbiAgICAgICAgICAgIHJldHVybiB7aXNDb3VudGluZzogdHJ1ZSwgdmFsdWU6IHN0YXRlLnZhbHVlICsgMX1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFBBVVNFOiB7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0NvdW50aW5nOiBmYWxzZX1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFNFVDoge1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdmFsdWU6IHBheWxvYWR9XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGxpc3QgPSAoc3RhdGUgPSBbXSwge3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgU0FWRToge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgcGF5bG9hZF1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIERFTEVURToge1xuICAgICAgICAgICAgc3RhdGUuc3BsaWNlKHBheWxvYWQsIDEpXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlXVxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvdW50ZXIsXG4gICAgbGlzdFxufSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMDk3OTMyMWJmNjE2NTMwZDBhM1wiKSJdLCJuYW1lcyI6WyJjb25uZWN0IiwiQ291bnRlciIsInN0YXJ0Q291bnRlciIsInBhdXNlIiwibWFwU3RhdGUiLCJzdGF0ZSIsIl9yZWYiLCJpbml0Q291bnRlciIsImNvdW50ZXIiLCJ2YWx1ZSIsImlzQ291bnRpbmciLCJtYXBEaXNwYXRjaCIsImRpc3BhdGNoIiwib25TdGFydENvdW50ZXIiLCJvblBhdXNlIiwiUEFVU0UiLCJJTkNSRUFTRSIsIlNBVkUiLCJERUxFVEUiLCJTRVQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5jcmVhc2UiLCJjbGVhckludGVydmFsIiwidHlwZSIsInNhdmUiLCJwYXlsb2FkIiwiZGVsZXRlT2JqZWN0Iiwic2V0VmFsdWUiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfb2JqZWN0U3ByZWFkIiwibGlzdCIsIl9yZWYyIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwic3BsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==