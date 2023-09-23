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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _containers_Home_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _containers_Products_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96);
/* harmony import */ var _containers_Products_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98);
/* harmony import */ var _components_Recipes_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _components_Recipes_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(114);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(101);






// Product



// Recipes
// AddRecipe
// Recipe



var Main = function Main() {
  return (
    /*#__PURE__*/
    // Provider, Router, Layout => Routes, Route
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
      store: _redux_store__WEBPACK_IMPORTED_MODULE_8__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Home_index__WEBPACK_IMPORTED_MODULE_2__["default"], null)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/products",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_index__WEBPACK_IMPORTED_MODULE_3__["default"], null)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/products/add",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Add__WEBPACK_IMPORTED_MODULE_4__["default"], null)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/recipes",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Recipes_index__WEBPACK_IMPORTED_MODULE_5__["default"], null)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/recipes/add",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Recipes_Add__WEBPACK_IMPORTED_MODULE_6__["default"], null)
    })))))
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SingleProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ }),

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var fakeProducts = [{
  id: 1,
  name: "Pomidory"
}, {
  id: 2,
  name: "Przyprawa curry"
}, {
  id: 3,
  name: "Olej"
}, {
  id: 4,
  name: "Wołowina 500g"
}, {
  id: 5,
  name: "Ziemniaki"
}];
var SingleProduct = function SingleProduct(_ref) {
  var id = _ref.id,
    index = _ref.index,
    number = _ref.number,
    _onChange = _ref.onChange,
    onClose = _ref.onClose;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", number + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return onClose(index);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "control has-icons-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: function onChange(e) {
      return _onChange(index, e.target.value);
    },
    value: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), fakeProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: product.id
    }, product.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  }))))));
};
SingleProduct.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  number: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ }),

/***/ 113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);


var fakeRecipes = [{
  id: 1,
  name: "Pomidorówka",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
  products: [1, 2, 3]
}, {
  id: 2,
  name: "Coś innego",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
  products: [3, 1]
}, {
  id: 3,
  name: "Jeszcze inny przepis",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
  products: [5, 6]
}];
var AllRecipes = function AllRecipes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Wszystkie przepisy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    iconName: "folder",
    path: "recipes",
    listElements: fakeRecipes,
    heading: false,
    footer: false
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllRecipes);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d8c8d5919b33fa78b184")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsUC9DLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUNwQixDQUFDLEVBQ0Q7RUFDRVEsRUFBRSxFQUFFLENBQUM7RUFDTFQsSUFBSSxFQUFFLFlBQVk7RUFDbEJnRCxJQUFJLEVBQUUsNE9BQTRPO0VBQ2xQL0MsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDakIsQ0FBQyxFQUNEO0VBQ0VRLEVBQUUsRUFBRSxDQUFDO0VBQ0xULElBQUksRUFBRSxzQkFBc0I7RUFDNUJnRCxJQUFJLEVBQUUsNE9BQTRPO0VBQ2xQL0MsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUNGO0FBRUQsSUFBTWdELFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7RUFDdkIsb0JBQ0VwRiwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7SUFBSW9FLFNBQVMsRUFBQztFQUFPLEdBQUMsb0JBQXNCLENBQUMsZUFDN0NwRSwwREFBQSxDQUFDaUYsOENBQUs7SUFBQ0ssUUFBUSxFQUFFLFFBQVM7SUFDbkJ2RSxJQUFJLEVBQUUsU0FBVTtJQUNoQndFLFlBQVksRUFBRUwsV0FBWTtJQUMxQk0sT0FBTyxFQUFFLEtBQU07SUFDZkMsTUFBTSxFQUFFO0VBQU0sQ0FDcEIsQ0FDRCxDQUFDO0FBRVAsQ0FBQztBQUVELGlFQUFlTCxVQUFVOzs7Ozs7OztVQ3RDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL0FkZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gICAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsXG4gICAgUm91dGVzLFxuICAgIFJvdXRlXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29udGFpbmVycy9Ib21lL2luZGV4JztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi9jb250YWluZXJzL1Byb2R1Y3RzL2luZGV4JztcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gJy4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvQWRkJztcbi8vIFByb2R1Y3RcbmltcG9ydCBSZWNpcGVzIGZyb20gJy4uL2NvbXBvbmVudHMvUmVjaXBlcy9pbmRleCdcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNpcGVzL0FkZCdcblxuLy8gUmVjaXBlc1xuLy8gQWRkUmVjaXBlXG4vLyBSZWNpcGVcblxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIC8vIFByb3ZpZGVyLCBSb3V0ZXIsIExheW91dCA9PiBSb3V0ZXMsIFJvdXRlXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUvPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIiBlbGVtZW50PXs8UHJvZHVjdHMvPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvYWRkXCIgZWxlbWVudD17PEFkZFByb2R1Y3QvPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzLzppZFwiIGVsZW1lbnQ9ezxQcm9kdWN0IC8+fSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAvcmVjaXBlcyAvcmVjaXBlcy9hZGQgL3JlY2lwZXMvaWQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzXCIgZWxlbWVudD17PFJlY2lwZXMvPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9hZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlLz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuL1NpbmdsZVByb2R1Y3RcIjtcblxuXG5jbGFzcyBBZGRSZWNpcGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHByb2R1Y3RzOiBbe2tleTogMH1dLFxuICAgIGxhc3RLZXk6IDBcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9O1xuXG4gIGhhbmRsZUFkZFByb2R1Y3QgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe2xhc3RLZXksIHByb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBbLi4ucHJvZHVjdHMsIHtrZXk6IGxhc3RLZXkgKyAxfV0sXG4gICAgICBsYXN0S2V5OiBsYXN0S2V5ICsgMVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVQcm9kdWN0Q2hvb3NlID0gKGluZGV4LCBpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGluZGV4LCBpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoZWwgPT4ge1xuICAgICAgICByZXR1cm4gZWwua2V5ID09PSBpbmRleCA/IHsuLi5lbCwgaWR9IDogZWw7XG4gICAgICB9KVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVQcm9kdWN0RGVsZXRlID0gKGluZGV4KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5maWx0ZXIoKGVsLCBpKSA9PiBpbmRleCAhPT0gaSlcbiAgICB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2RhaiBwcnplcGlzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5OYXp3YSBwcnplcGlzdTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhIHByemVwaXN1XCJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5PcGlzPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BpcyBwcnplcGlzdVwiXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy00XCI+TGlzdGEgcHJvZHVrdMOzdzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PiAoXG4gICAgICAgICAgICA8U2luZ2xlUHJvZHVjdFxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3Qua2V5fVxuICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZCA/IHByb2R1Y3QuaWQgOiBcIlwifVxuICAgICAgICAgICAgICBpbmRleD17cHJvZHVjdC5rZXl9XG4gICAgICAgICAgICAgIG51bWJlcj17aX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdENob29zZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVQcm9kdWN0RGVsZXRlfS8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFByb2R1Y3R9PlxuICAgICAgICAgICAgICAgIERvZGFqIHByb2R1a3QgZG8gcHJ6ZXBpc3VcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlua1wiPkRvZGFqIHByemVwaXM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRSZWNpcGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jb25zdCBmYWtlUHJvZHVjdHMgPSBbXG4gIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcbiAge2lkOiAyLCBuYW1lOiBcIlByenlwcmF3YSBjdXJyeVwifSxcbiAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXG4gIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcbiAge2lkOiA1LCBuYW1lOiBcIlppZW1uaWFraVwifVxuXTtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7aWQsIGluZGV4LCBudW1iZXIsIG9uQ2hhbmdlLCBvbkNsb3NlfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICA8cD5Qcm9kdWt0IHtudW1iZXIgKyAxfTwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gb25DbG9zZShpbmRleCl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShpbmRleCwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWR9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPld5YmllcnouLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2Zha2VQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5TaW5nbGVQcm9kdWN0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbnVtYmVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhbmVsIGZyb20gXCIuLi9QYW5lbFwiO1xuXG5jb25zdCBmYWtlUmVjaXBlcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiUG9taWRvcsOzd2thXCIsXG4gICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcbiAgICBwcm9kdWN0czogWzEsIDIsIDNdXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkNvxZsgaW5uZWdvXCIsXG4gICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcbiAgICBwcm9kdWN0czogWzMsIDFdXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIkplc3pjemUgaW5ueSBwcnplcGlzXCIsXG4gICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcbiAgICBwcm9kdWN0czogWzUsIDZdXG4gIH1cbl07XG5cbmNvbnN0IEFsbFJlY2lwZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPldzenlzdGtpZSBwcnplcGlzeTwvaDE+XG4gICAgICA8UGFuZWwgaWNvbk5hbWU9e1wiZm9sZGVyXCJ9XG4gICAgICAgICAgICAgcGF0aD17XCJyZWNpcGVzXCJ9XG4gICAgICAgICAgICAgbGlzdEVsZW1lbnRzPXtmYWtlUmVjaXBlc31cbiAgICAgICAgICAgICBoZWFkaW5nPXtmYWxzZX1cbiAgICAgICAgICAgICBmb290ZXI9e2ZhbHNlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsbFJlY2lwZXM7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ4YzhkNTkxOWIzM2ZhNzhiMTg0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTGF5b3V0IiwiSG9tZSIsIlByb2R1Y3RzIiwiQWRkUHJvZHVjdCIsIlJlY2lwZXMiLCJBZGRSZWNpcGUiLCJQcm92aWRlciIsInN0b3JlIiwiTWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJwYXRoIiwiZWxlbWVudCIsIkNvbXBvbmVudCIsIlNpbmdsZVByb2R1Y3QiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwibmFtZSIsInByb2R1Y3RzIiwia2V5IiwibGFzdEtleSIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVBZGRQcm9kdWN0IiwiX3JlZiIsIl90b0NvbnN1bWFibGVBcnJheSIsImhhbmRsZVByb2R1Y3RDaG9vc2UiLCJpbmRleCIsIl9yZWYyIiwibWFwIiwiZWwiLCJfb2JqZWN0U3ByZWFkIiwiaGFuZGxlUHJvZHVjdERlbGV0ZSIsIl9yZWYzIiwiZmlsdGVyIiwiaSIsIl9jcmVhdGVDbGFzcyIsInJlbmRlciIsIl90aGlzMiIsImF1dG9Db21wbGV0ZSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJwcm9kdWN0IiwibnVtYmVyIiwib25DbG9zZSIsIm9uQ2xpY2siLCJQcm9wVHlwZXMiLCJmYWtlUHJvZHVjdHMiLCJwcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIlBhbmVsIiwiZmFrZVJlY2lwZXMiLCJkZXNjIiwiQWxsUmVjaXBlcyIsIkZyYWdtZW50IiwiaWNvbk5hbWUiLCJsaXN0RWxlbWVudHMiLCJoZWFkaW5nIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==