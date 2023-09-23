"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var AddRecipe = /*#__PURE__*/function (_Component) {
  _inherits(AddRecipe, _Component);
  var _super = _createSuper(AddRecipe);
  function AddRecipe() {
    var _this;
    _classCallCheck(this, AddRecipe);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      name: "",
      products: [{
        key: 0
      }],
      lastKey: 0
    };
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    };
    _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
      _this.props.addRecipe(_this.state);
    };
    _this.handleAddProduct = function () {
      _this.setState(function (_ref) {
        var lastKey = _ref.lastKey,
          products = _ref.products;
        return {
          products: [].concat(_toConsumableArray(products), [{
            key: lastKey + 1
          }]),
          lastKey: lastKey + 1
        };
      });
    };
    _this.handleProductChoose = function (index, id) {
      console.log(index, id);
      _this.setState(function (_ref2) {
        var products = _ref2.products;
        return {
          products: products.map(function (el) {
            return el.key === index ? _objectSpread(_objectSpread({}, el), {}, {
              id: id
            }) : el;
          })
        };
      });
    };
    _this.handleProductDelete = function (index) {
      _this.setState(function (_ref3) {
        var products = _ref3.products;
        return {
          products: products.filter(function (el, i) {
            return index !== i;
          })
        };
      });
    };
    return _this;
  }
  _createClass(AddRecipe, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
        className: "title"
      }, "Dodaj przepis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Nazwa przepisu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Nazwa przepisu",
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "text",
        name: "desc",
        id: "desc",
        placeholder: "Opis przepisu",
        onChange: this.handleChange
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "subtitle is-4"
      }, "Lista produkt\xF3w"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, this.state.products.map(function (product, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: product.key,
          id: product.id ? product.id : "",
          index: product.key,
          number: i,
          onChange: _this2.handleProductChoose,
          onClose: _this2.handleProductDelete
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "button is-primary",
        onClick: this.handleAddProduct
      }, "Dodaj produkt do przepisu")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field is-grouped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "button is-link"
      }, "Dodaj przepis"))));
    }
  }]);
  return AddRecipe;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddRecipe);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6605074295b71741c1a1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMWQ2NDZmNzg0N2I0ZmI2ZmZiMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQzRCO0FBQUEsSUFHN0RHLFNBQVMsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixTQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosU0FBQTtFQUFBLFNBQUFBLFVBQUE7SUFBQSxJQUFBSyxLQUFBO0lBQUFDLGVBQUEsT0FBQU4sU0FBQTtJQUFBLFNBQUFPLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQUYsTUFBQSxDQUFBVSxJQUFBLENBQUFDLEtBQUEsQ0FBQVgsTUFBQSxTQUFBWSxNQUFBLENBQUFMLElBQUE7SUFBQUwsS0FBQSxDQUNYVyxLQUFLLEdBQUc7TUFDSkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsUUFBUSxFQUFFLENBQUM7UUFBQ0MsR0FBRyxFQUFFO01BQUMsQ0FBQyxDQUFDO01BQ3BCQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBQUFmLEtBQUEsQ0FFRGdCLFlBQVksR0FBRyxVQUFBQyxDQUFDLEVBQUk7TUFDaEJqQixLQUFBLENBQUtrQixRQUFRLENBQUFDLGVBQUEsS0FDUkYsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEVBQUUsRUFBR0osQ0FBQyxDQUFDRyxNQUFNLENBQUNFLEtBQUssQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFBQXRCLEtBQUEsQ0FFRHVCLFlBQVksR0FBRyxVQUFBTixDQUFDLEVBQUk7TUFDaEJBLENBQUMsQ0FBQ08sY0FBYyxDQUFDLENBQUM7TUFDbEJDLE9BQU8sQ0FB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QUNwQnhELDBEQUFBO1FBQVF3RCxTQUFTLEVBQUM7TUFBZ0IsR0FBQyxlQUFxQixDQUN2RCxDQUNKLENBQ0gsQ0FBQztJQUVmO0VBQUM7RUFBQSxPQUFBckQsU0FBQTtBQUFBLEVBckdtQkYsNENBQVM7QUF3R2pDLGlFQUFlRSxTQUFTOzs7Ozs7OztVQzVHeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi8uLi9jb250YWluZXJzL1JlY2lwZXMvU2luZ2xlUHJvZHVjdFwiO1xuXG5cbmNsYXNzIEFkZFJlY2lwZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHByb2R1Y3RzOiBbe2tleTogMH1dLFxuICAgICAgICBsYXN0S2V5OiAwXG4gICAgfTtcblxuICAgIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcblxuICAgICAgICB0aGlzLnByb3BzLmFkZFJlY2lwZSh0aGlzLnN0YXRlKVxuICAgIH07XG5cbiAgICBoYW5kbGVBZGRQcm9kdWN0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCh7bGFzdEtleSwgcHJvZHVjdHN9KSA9PiAoe1xuICAgICAgICAgICAgcHJvZHVjdHM6IFsuLi5wcm9kdWN0cywge2tleTogbGFzdEtleSArIDF9XSxcbiAgICAgICAgICAgIGxhc3RLZXk6IGxhc3RLZXkgKyAxXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlUHJvZHVjdENob29zZSA9IChpbmRleCwgaWQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgsIGlkKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5rZXkgPT09IGluZGV4ID8gey4uLmVsLCBpZH0gOiBlbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlUHJvZHVjdERlbGV0ZSA9IChpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCh7cHJvZHVjdHN9KSA9PiAoe1xuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLmZpbHRlcigoZWwsIGkpID0+IGluZGV4ICE9PSBpKVxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RG9kYWogcHJ6ZXBpczwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmF6d2EgcHJ6ZXBpc3U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF6d2EgcHJ6ZXBpc3VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5PcGlzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9waXMgcHJ6ZXBpc3VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTRcIj5MaXN0YSBwcm9kdWt0w7N3PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaW5nbGVQcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZCA/IHByb2R1Y3QuaWQgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtwcm9kdWN0LmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdENob29zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZVByb2R1Y3REZWxldGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFByb2R1Y3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2RhaiBwcm9kdWt0IGRvIHByemVwaXN1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlua1wiPkRvZGFqIHByemVwaXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRSZWNpcGU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjYwNTA3NDI5NWI3MTc0MWMxYTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTaW5nbGVQcm9kdWN0IiwiQWRkUmVjaXBlIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsIm5hbWUiLCJwcm9kdWN0cyIsImtleSIsImxhc3RLZXkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJhZGRSZWNpcGUiLCJoYW5kbGVBZGRQcm9kdWN0IiwiX3JlZiIsIl90b0NvbnN1bWFibGVBcnJheSIsImhhbmRsZVByb2R1Y3RDaG9vc2UiLCJpbmRleCIsIl9yZWYyIiwibWFwIiwiZWwiLCJfb2JqZWN0U3ByZWFkIiwiaGFuZGxlUHJvZHVjdERlbGV0ZSIsIl9yZWYzIiwiZmlsdGVyIiwiaSIsIl9jcmVhdGVDbGFzcyIsInJlbmRlciIsIl90aGlzMiIsImNyZWF0ZUVsZW1lbnQiLCJhdXRvQ29tcGxldGUiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicHJvZHVjdCIsIm51bWJlciIsIm9uQ2xvc2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==