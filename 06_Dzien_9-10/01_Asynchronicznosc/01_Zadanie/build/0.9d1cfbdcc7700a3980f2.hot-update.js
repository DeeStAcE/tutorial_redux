"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
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


var initialState = {
  loading: false,
  error: "",
  quote: null
};
function quote() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    payload = _ref.payload;
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_FETCHING:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true
        });
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_FETCHED:
      {
        return {
          loading: false,
          quote: payload,
          error: null
        };
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_ERROR:
      {
        return {
          loading: false,
          quote: [],
          error: payload
        };
      }
    default:
      {
        return state;
      }
  }
}
function favourites() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref2.type,
    payload = _ref2.payload;
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_FAV:
      {
        return [].concat(_toConsumableArray(state), [payload]);
      }
    default:
      {
        return state;
      }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  quote: quote,
  favourites: favourites
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c2fa19adac1234685fc9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZDFjZmJkY2M3NzAwYTM5ODBmMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV3QztBQUU5RSxJQUFNSyxZQUFZLEdBQUc7RUFDakJDLE9BQU8sRUFBRSxLQUFLO0VBQ2RDLEtBQUssRUFBRSxFQUFFO0VBQ1RDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCxTQUFTQSxLQUFLQSxDQUFBLEVBQXdDO0VBQUEsSUFBdkNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdMLFlBQVk7RUFBQSxJQUFBUSxJQUFBLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBR0UsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7SUFBRUMsT0FBTyxHQUFBRixJQUFBLENBQVBFLE9BQU87RUFDL0MsUUFBUUQsSUFBSTtJQUNSLEtBQUtiLG9EQUFjO01BQUU7UUFDakIsT0FBQWUsYUFBQSxDQUFBQSxhQUFBLEtBQ09QLEtBQUs7VUFDUkgsT0FBTyxFQUFFO1FBQUk7TUFFckI7SUFFQSxLQUFLSixtREFBYTtNQUFFO1FBQ2hCLE9BQU87VUFDSEksT0FBTyxFQUFFLEtBQUs7VUFDZEUsS0FBSyxFQUFFTyxPQUFPO1VBQ2RSLEtBQUssRUFBRTtRQUNYLENBQUM7TUFDTDtJQUVBLEtBQUtKLGlEQUFXO01BQUU7UUFDZCxPQUFPO1VBQ0hHLE9BQU8sRUFBRSxLQUFLO1VBQ2RFLEtBQUssRUFBRSxFQUFFO1VBQ1RELEtBQUssRUFBRVE7UUFDWCxDQUFDO01BQ0w7SUFFQTtNQUFTO1FBQ0wsT0FBT04sS0FBSztNQUNoQjtFQUNKO0FBQ0o7QUFFQSxTQUFTUSxVQUFVQSxDQUFBLEVBQThCO0VBQUEsSUFBN0JSLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsRUFBRTtFQUFBLElBQUFRLEtBQUEsR0FBQVIsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtJQUFHRSxJQUFJLEdBQUFJLEtBQUEsQ0FBSkosSUFBSTtJQUFFQyxPQUFPLEdBQUFHLEtBQUEsQ0FBUEgsT0FBTztFQUMxQyxRQUFRRCxJQUFJO0lBQ1IsS0FBS1YsNkNBQU87TUFBRTtRQUNWLFVBQUFlLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1gsS0FBSyxJQUFFTSxPQUFPO01BQzdCO0lBRUE7TUFBUztRQUNMLE9BQU9OLEtBQUs7TUFDaEI7RUFDSjtBQUNKO0FBRUEsaUVBQWVULHNEQUFlLENBQUM7RUFDM0JRLEtBQUssRUFBTEEsS0FBSztFQUNMUyxVQUFVLEVBQVZBO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7OztVQ3hERiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfQXN5bmNocm9uaWN6bm9zYy8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7UVVPVEVfRkVUQ0hJTkcsIFFVT1RFX0ZFVENIRUQsIFFVT1RFX0VSUk9SLCBBRERfRkFWfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogXCJcIixcbiAgICBxdW90ZTogbnVsbFxufVxuXG5mdW5jdGlvbiBxdW90ZShzdGF0ZSA9IGluaXRpYWxTdGF0ZSwge3R5cGUsIHBheWxvYWR9KSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgUVVPVEVfRkVUQ0hJTkc6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBRVU9URV9GRVRDSEVEOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHF1b3RlOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFFVT1RFX0VSUk9SOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHF1b3RlOiBbXSxcbiAgICAgICAgICAgICAgICBlcnJvcjogcGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmYXZvdXJpdGVzKHN0YXRlID0gW10sIHt0eXBlLCBwYXlsb2FkfSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEFERF9GQVY6IHtcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHBheWxvYWRdXG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcXVvdGUsXG4gICAgZmF2b3VyaXRlcyxcbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzJmYTE5YWRhYzEyMzQ2ODVmYzlcIikiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiUVVPVEVfRkVUQ0hJTkciLCJRVU9URV9GRVRDSEVEIiwiUVVPVEVfRVJST1IiLCJBRERfRkFWIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImVycm9yIiwicXVvdGUiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9yZWYiLCJ0eXBlIiwicGF5bG9hZCIsIl9vYmplY3RTcHJlYWQiLCJmYXZvdXJpdGVzIiwiX3JlZjIiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9