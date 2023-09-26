"use strict";
self["webpackHotUpdatees6_react"](0,{

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
        console.log(payload);
        var tempState = state;
        console.log(tempState);
        tempState.splice(payload, 1);
        console.log(tempState);
        return tempState;
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
/******/ 	__webpack_require__.h = () => ("b83babe93299af8dd050")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wZjdkYjM1NjkxMTFlZTNlY2U2NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUVrQjtBQUV4RCxJQUFNSyxZQUFZLEdBQUc7RUFDakIsWUFBWSxFQUFFLEtBQUs7RUFDbkIsT0FBTyxFQUFFO0FBQ2IsQ0FBQztBQUVELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQThDO0VBQUEsSUFBMUNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdILFlBQVk7RUFBQSxJQUFBTSxJQUFBLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBR0UsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7SUFBRUMsT0FBTyxHQUFBRixJQUFBLENBQVBFLE9BQU87RUFDakQsUUFBUUQsSUFBSTtJQUNSLEtBQUtWLDhDQUFRO01BQUU7UUFDWCxPQUFPO1VBQUNZLFVBQVUsRUFBRSxJQUFJO1VBQUVDLEtBQUssRUFBRVIsS0FBSyxDQUFDUSxLQUFLLEdBQUc7UUFBQyxDQUFDO01BQ3JEO0lBQ0EsS0FBS2QsMkNBQUs7TUFBRTtRQUNSLE9BQUFlLGFBQUEsQ0FBQUEsYUFBQSxLQUFXVCxLQUFLO1VBQUVPLFVBQVUsRUFBRTtRQUFLO01BQ3ZDO0lBQ0E7TUFBUztRQUNMLE9BQU9QLEtBQUs7TUFDaEI7RUFDSjtBQUNKLENBQUM7QUFFRCxJQUFNVSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFvQztFQUFBLElBQWhDVixLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUU7RUFBQSxJQUFBVSxLQUFBLEdBQUFWLFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBR0UsSUFBSSxHQUFBTSxLQUFBLENBQUpOLElBQUk7SUFBRUMsT0FBTyxHQUFBSyxLQUFBLENBQVBMLE9BQU87RUFDcEMsUUFBUUQsSUFBSTtJQUNSLEtBQUtULDBDQUFJO01BQUU7UUFDUCxVQUFBZ0IsTUFBQSxDQUFBQyxrQkFBQSxDQUFXYixLQUFLLElBQUVNLE9BQU87TUFDN0I7SUFDQSxLQUFLVCw0Q0FBTTtNQUFFO1FBQ1RpQixPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsT0FBTyxDQUFDO1FBQ3BCLElBQU1VLFNBQVMsR0FBR2hCLEtBQUs7UUFDdkJjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLENBQUM7UUFDdEJBLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDWCxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVCUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO1FBQ3RCLE9BQU9BLFNBQVM7TUFDcEI7SUFDQTtNQUFTO1FBQ0wsT0FBT2hCLEtBQUs7TUFDaEI7RUFDSjtBQUNKLENBQUM7QUFFRCxpRUFBZVAsc0RBQWUsQ0FBQztFQUMzQk0sT0FBTyxFQUFQQSxPQUFPO0VBQ1BXLElBQUksRUFBSkE7QUFDSixDQUFDLENBQUM7Ozs7Ozs7O1VDN0NGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7UEFVU0UsIElOQ1JFQVNFLCBTQVZFLCBERUxFVEV9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIFwiaXNDb3VudGluZ1wiOiBmYWxzZSxcbiAgICBcInZhbHVlXCI6IDBcbn1cblxuY29uc3QgY291bnRlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwge3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgSU5DUkVBU0U6IHtcbiAgICAgICAgICAgIHJldHVybiB7aXNDb3VudGluZzogdHJ1ZSwgdmFsdWU6IHN0YXRlLnZhbHVlICsgMX1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFBBVVNFOiB7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0NvdW50aW5nOiBmYWxzZX1cbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbGlzdCA9IChzdGF0ZSA9IFtdLCB7dHlwZSwgcGF5bG9hZH0pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBTQVZFOiB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBwYXlsb2FkXVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgREVMRVRFOiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxuICAgICAgICAgICAgY29uc3QgdGVtcFN0YXRlID0gc3RhdGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXBTdGF0ZSlcbiAgICAgICAgICAgIHRlbXBTdGF0ZS5zcGxpY2UocGF5bG9hZCwgMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXBTdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiB0ZW1wU3RhdGVcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb3VudGVyLFxuICAgIGxpc3Rcbn0pIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjgzYmFiZTkzMjk5YWY4ZGQwNTBcIikiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiUEFVU0UiLCJJTkNSRUFTRSIsIlNBVkUiLCJERUxFVEUiLCJpbml0aWFsU3RhdGUiLCJjb3VudGVyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfcmVmIiwidHlwZSIsInBheWxvYWQiLCJpc0NvdW50aW5nIiwidmFsdWUiLCJfb2JqZWN0U3ByZWFkIiwibGlzdCIsIl9yZWYyIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY29uc29sZSIsImxvZyIsInRlbXBTdGF0ZSIsInNwbGljZSJdLCJzb3VyY2VSb290IjoiIn0=