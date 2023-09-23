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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
      console.log(_typeof(_this.props.addRecipe()));
      // this.props.addRecipe(this.state)
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
/******/ 	__webpack_require__.h = () => ("90dd681edba0744638e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xM2UzNWZjZDM1MDUyMTk0NjljYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQzRCO0FBQUEsSUFHN0RHLFNBQVMsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixTQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosU0FBQTtFQUFBLFNBQUFBLFVBQUE7SUFBQSxJQUFBSyxLQUFBO0lBQUFDLGVBQUEsT0FBQU4sU0FBQTtJQUFBLFNBQUFPLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQUYsTUFBQSxDQUFBVSxJQUFBLENBQUFDLEtBQUEsQ0FBQVgsTUFBQSxTQUFBWSxNQUFBLENBQUFMLElBQUE7SUFBQUwsS0FBQSxDQUNYVyxLQUFLLEdBQUc7TUFDSkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsUUFBUSxFQUFFLENBQUM7UUFBQ0MsR0FBRyxFQUFFO01BQUMsQ0FBQyxDQUFDO01BQ3BCQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBQUFmLEtBQUEsQ0FFRGdCLFlBQVksR0FBRyxVQUFBQyxDQUFDLEVBQUk7TUFDaEJqQixLQUFBLENBQUtrQixRQUFRLENBQUFDLGVBQUEsS0FDUkYsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEVBQUUsRUFBR0osQ0FBQyxDQUFDRyxNQUFNLENBQUNFLEtBQUssQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFBQXRCLEtBQUEsQ0FFRHVCLFlBQVksR0FBRyxVQUFBTixDQUFDLEVBQUk7TUFDaEJBLENBQUMsQ0FBQ08sY0FBYyxDQUFDLENBQUM7TUFDbEJDLE9BQU8sQ0FB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RCwwREFBQTtRQUFLeUQsU0FBUyxFQUFDO01BQVMsZ0JBQ3BCekQsMERBQUE7UUFBUXlELFNBQVMsRUFBQztNQUFnQixHQUFDLGVBQXFCLENBQ3ZELENBQ0osQ0FDSCxDQUFDO0lBRWY7RUFBQztFQUFBLE9BQUF0RCxTQUFBO0FBQUEsRUFyR21CRiw0Q0FBUztBQXdHakMsaUVBQWVFLFNBQVM7Ozs7Ozs7O1VDNUd4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9BZGQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvUmVjaXBlcy9TaW5nbGVQcm9kdWN0XCI7XG5cblxuY2xhc3MgQWRkUmVjaXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgcHJvZHVjdHM6IFt7a2V5OiAwfV0sXG4gICAgICAgIGxhc3RLZXk6IDBcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5wcm9wcy5hZGRSZWNpcGUoKSlcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5hZGRSZWNpcGUodGhpcy5zdGF0ZSlcbiAgICB9O1xuXG4gICAgaGFuZGxlQWRkUHJvZHVjdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoe2xhc3RLZXksIHByb2R1Y3RzfSkgPT4gKHtcbiAgICAgICAgICAgIHByb2R1Y3RzOiBbLi4ucHJvZHVjdHMsIHtrZXk6IGxhc3RLZXkgKyAxfV0sXG4gICAgICAgICAgICBsYXN0S2V5OiBsYXN0S2V5ICsgMVxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVByb2R1Y3RDaG9vc2UgPSAoaW5kZXgsIGlkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4LCBpZCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHtwcm9kdWN0c30pID0+ICh7XG4gICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHMubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwua2V5ID09PSBpbmRleCA/IHsuLi5lbCwgaWR9IDogZWw7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVByb2R1Y3REZWxldGUgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5maWx0ZXIoKGVsLCBpKSA9PiBpbmRleCAhPT0gaSlcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvZGFqIHByemVwaXM8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hendhIHByemVwaXN1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhIHByemVwaXN1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+T3BpczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGlzIHByemVwaXN1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy00XCI+TGlzdGEgcHJvZHVrdMOzdzwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2luZ2xlUHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWQgPyBwcm9kdWN0LmlkIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvZHVjdC5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RDaG9vc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVQcm9kdWN0RGVsZXRlfS8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGRQcm9kdWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9kYWogcHJvZHVrdCBkbyBwcnplcGlzdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpbmtcIj5Eb2RhaiBwcnplcGlzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkUmVjaXBlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkwZGQ2ODFlZGJhMDc0NDYzOGU0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2luZ2xlUHJvZHVjdCIsIkFkZFJlY2lwZSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJuYW1lIiwicHJvZHVjdHMiLCJrZXkiLCJsYXN0S2V5IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIl90eXBlb2YiLCJwcm9wcyIsImFkZFJlY2lwZSIsImhhbmRsZUFkZFByb2R1Y3QiLCJfcmVmIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaGFuZGxlUHJvZHVjdENob29zZSIsImluZGV4IiwiX3JlZjIiLCJtYXAiLCJlbCIsIl9vYmplY3RTcHJlYWQiLCJoYW5kbGVQcm9kdWN0RGVsZXRlIiwiX3JlZjMiLCJmaWx0ZXIiLCJpIiwiX2NyZWF0ZUNsYXNzIiwicmVuZGVyIiwiX3RoaXMyIiwiY3JlYXRlRWxlbWVudCIsImF1dG9Db21wbGV0ZSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJwcm9kdWN0IiwibnVtYmVyIiwib25DbG9zZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9