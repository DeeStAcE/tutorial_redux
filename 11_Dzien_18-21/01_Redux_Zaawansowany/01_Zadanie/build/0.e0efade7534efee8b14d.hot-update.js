"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var initialState = [{
  id: 1,
  name: "Pomidorowa"
}, {
  id: 2,
  name: "Kurczak curry"
}, {
  id: 3,
  name: "Sajgonki"
}, {
  id: 4,
  name: "Hamburger"
}, {
  id: 5,
  name: "Schabowy z ziemniakami"
}];
var recipes = function recipes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    payload = _ref.payload;
  switch (type) {
    case _actions_recipes__WEBPACK_IMPORTED_MODULE_0__.ADD_RECIPE:
      {
        var id = state.length + 1;
        return [].concat(_toConsumableArray(state), [_objectSpread({
          id: id
        }, payload)]);
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
/******/ 	__webpack_require__.h = () => ("225e5b16e76d5b186044")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMGVmYWRlNzUzNGVmZWU4YjE0ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBRTlDLElBQU1DLFlBQVksR0FBRyxDQUNqQjtFQUFDQyxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBWSxDQUFDLEVBQzNCO0VBQUNELEVBQUUsRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFlLENBQUMsRUFDOUI7RUFBQ0QsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQVUsQ0FBQyxFQUN6QjtFQUFDRCxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBVyxDQUFDLEVBQzFCO0VBQUNELEVBQUUsRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUF3QixDQUFDLENBQzFDO0FBRUQsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBOEM7RUFBQSxJQUExQ0MsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBR0wsWUFBWTtFQUFBLElBQUFRLElBQUEsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtJQUFHRSxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtJQUFFQyxPQUFPLEdBQUFGLElBQUEsQ0FBUEUsT0FBTztFQUNqRCxRQUFRRCxJQUFJO0lBQ1IsS0FBS1Ysd0RBQVU7TUFBRTtRQUNiLElBQU1FLEVBQUUsR0FBR0csS0FBSyxDQUFDRSxNQUFNLEdBQUcsQ0FBQztRQUMzQixVQUFBSyxNQUFBLENBQUFDLGtCQUFBLENBQVdSLEtBQUssSUFBQVMsYUFBQTtVQUFHWixFQUFFLEVBQUZBO1FBQUUsR0FBS1MsT0FBTztNQUNyQztJQUNBO01BQVM7UUFDTCxPQUFPTixLQUFLO01BQ2hCO0VBQ0o7QUFDSixDQUFDO0FBRUQsaUVBQWVELE9BQU87Ozs7Ozs7O1VDdEJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzL3JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FERF9SRUNJUEV9IGZyb20gXCIuLi9hY3Rpb25zL3JlY2lwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW1xuICAgIHtpZDogMSwgbmFtZTogXCJQb21pZG9yb3dhXCJ9LFxuICAgIHtpZDogMiwgbmFtZTogXCJLdXJjemFrIGN1cnJ5XCJ9LFxuICAgIHtpZDogMywgbmFtZTogXCJTYWpnb25raVwifSxcbiAgICB7aWQ6IDQsIG5hbWU6IFwiSGFtYnVyZ2VyXCJ9LFxuICAgIHtpZDogNSwgbmFtZTogXCJTY2hhYm93eSB6IHppZW1uaWFrYW1pXCJ9XG5dO1xuXG5jb25zdCByZWNpcGVzID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7dHlwZSwgcGF5bG9hZH0pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUkVDSVBFOiB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHN0YXRlLmxlbmd0aCArIDE7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7aWQsIC4uLnBheWxvYWR9XTtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVjaXBlcyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIyNWU1YjE2ZTc2ZDViMTg2MDQ0XCIpIl0sIm5hbWVzIjpbIkFERF9SRUNJUEUiLCJpbml0aWFsU3RhdGUiLCJpZCIsIm5hbWUiLCJyZWNpcGVzIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfcmVmIiwidHlwZSIsInBheWxvYWQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfb2JqZWN0U3ByZWFkIl0sInNvdXJjZVJvb3QiOiIifQ==