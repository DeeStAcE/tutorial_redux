"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_Stopper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Stopper__WEBPACK_IMPORTED_MODULE_2__.StopperWithTimer, null, "czas start"));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stopper: () => (/* binding */ Stopper),
/* harmony export */   StopperWithTimer: () => (/* binding */ StopperWithTimer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);



// Zamień ciało funkcji tak aby renderowała Stopper wg. treści zadania
var Stopper = function Stopper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return props.startTimer();
    }
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return props.stopTimer();
    }
  }, "Stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Licznik: ", props.counter), props.children);
};

// Zamień deklarację komponentu poniżej tak aby korzystał z wczesniej zamiplementowanego HOC withTimer
var StopperWithTimer = (0,_hoc_withTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(Stopper);


/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */



// function withTimer(Component) {
//     return class extends React.Component {
//
//         state = {
//             counter: 0,
//         }
//
//         startTimer = () => {
//             this.timer = setInterval(() => {
//                 this.setState(prevState => ({
//                     counter: prevState.counter + 1
//                 }));
//             }, 1000);
//         }
//
//         stopTimer = () => {
//             clearInterval(this.timer);
//         }
//
//         render() {
//             return (
//                 <Component {...this.props} counter={this.state.counter} startTimer={this.startTimer}
//                            stopTimer={this.stopTimer}/>
//             )
//         }
//     }
// }

function withTimer(Component) {
  return function (props) {
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      counter = _useState2[0],
      setCounter = _useState2[1];
    function startTimer() {
      (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var timer = setInterval(function () {
          setCounter(function (prevState) {
            return prevState + 1;
          });
        }, 1000);
        return function () {
          clearInterval(timer);
        };
      }, []);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({}, props, {
      counter: counter,
      startTimer: startTimer,
      stopTimer: stopTimer
    }));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withTimer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2190c4a0b650a8207844")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYTRhNjYxYWQ0MTM0NjUyNGQwNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBRW1CO0FBRS9ELElBQU1JLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBO0VBQUEsb0JBQ0xKLDBEQUFBLDJCQUVJQSwwREFBQSxXQUFJLENBQUMsZUFDTEEsMERBQUEsQ0FBQ0csaUVBQWdCLFFBQUMsWUFBNEIsQ0FDN0MsQ0FBQztBQUFBLENBQ1Q7QUFFRCxJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdSLDREQUFVLENBQUNLLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNWLDBEQUFBLENBQUNJLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ2U7O0FBRXpDO0FBQ0EsSUFBTUYsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlVLEtBQUssRUFBSztFQUN2QixvQkFDSVosMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVFjLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUYsS0FBSyxDQUFDRyxVQUFVLENBQUMsQ0FBQztJQUFBO0VBQUMsR0FBQyxPQUFhLENBQUMsZUFDekRmLDBEQUFBO0lBQVFjLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUYsS0FBSyxDQUFDSSxTQUFTLENBQUMsQ0FBQztJQUFBO0VBQUMsR0FBQyxNQUFZLENBQUMsZUFDdkRoQiwwREFBQSxZQUFHLFdBQVMsRUFBQ1ksS0FBSyxDQUFDSyxPQUFXLENBQUMsRUFFM0JMLEtBQUssQ0FBQ00sUUFFWixDQUFDO0FBRVgsQ0FBQzs7QUFFRDtBQUNBLElBQU1mLGdCQUFnQixHQUFHUSwwREFBUyxDQUFDVCxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNTLFNBQVNBLENBQUNVLFNBQVMsRUFBRTtFQUMxQixPQUFPLFVBQVVULEtBQUssRUFBRTtJQUVwQixJQUFBVSxTQUFBLEdBQThCRiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztNQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtNQUFsQ0wsT0FBTyxHQUFBTSxVQUFBO01BQUVFLFVBQVUsR0FBQUYsVUFBQTtJQUUxQixTQUFTUixVQUFVQSxDQUFBLEVBQUc7TUFDbEJJLGdEQUFTLENBQUMsWUFBTTtRQUNaLElBQU1PLEtBQUssR0FBR0MsV0FBVyxDQUFDLFlBQU07VUFDNUJGLFVBQVUsQ0FBQyxVQUFBRyxTQUFTO1lBQUEsT0FBSUEsU0FBUyxHQUFHLENBQUM7VUFBQSxFQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUM7UUFFUixPQUFPLFlBQU07VUFDVEMsYUFBYSxDQUFDSCxLQUFLLENBQUM7UUFDeEIsQ0FBQztNQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDVjtJQUVBLG9CQUNJMUIsMERBQUEsQ0FBQ3FCLFNBQVMsRUFBQVMsUUFBQSxLQUFLbEIsS0FBSztNQUFFSyxPQUFPLEVBQUVBLE9BQVE7TUFBQ0YsVUFBVSxFQUFFQSxVQUFXO01BQ3BEQyxTQUFTLEVBQUVBO0lBQVUsRUFBQyxDQUFDO0VBRTFDLENBQUM7QUFDTDtBQUVBLGlFQUFlTCxTQUFTOzs7Ozs7OztVQzdEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19Eemllbl80LzAxX0tvbXBvbmVudHkvMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19Eemllbl80LzAxX0tvbXBvbmVudHkvMDFfWmFkYW5pZV8xL2pzL2NvbXBvbmVudHMvU3RvcHBlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19Eemllbl80LzAxX0tvbXBvbmVudHkvMDFfWmFkYW5pZV8xL2pzL2hvYy93aXRoVGltZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmltcG9ydCB7U3RvcHBlciwgU3RvcHBlcldpdGhUaW1lcn0gZnJvbSBcIi4vY29tcG9uZW50cy9TdG9wcGVyXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICB7LyogPFN0b3BwZXI+Y3phcyBzdGFydDwvU3RvcHBlcj4gKi99XG4gICAgICAgIDxici8+XG4gICAgICAgIDxTdG9wcGVyV2l0aFRpbWVyPmN6YXMgc3RhcnQ8L1N0b3BwZXJXaXRoVGltZXI+XG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3aXRoVGltZXIgZnJvbSBcIi4uL2hvYy93aXRoVGltZXJcIjtcblxuLy8gWmFtaWXFhCBjaWHFgm8gZnVua2NqaSB0YWsgYWJ5IHJlbmRlcm93YcWCYSBTdG9wcGVyIHdnLiB0cmXFm2NpIHphZGFuaWFcbmNvbnN0IFN0b3BwZXIgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zdGFydFRpbWVyKCl9PlN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLnN0b3BUaW1lcigpfT5TdG9wPC9idXR0b24+XG4gICAgICAgICAgICA8cD5MaWN6bmlrOiB7cHJvcHMuY291bnRlcn08L3A+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgKVxufTtcblxuLy8gWmFtaWXFhCBkZWtsYXJhY2rEmSBrb21wb25lbnR1IHBvbmnFvGVqIHRhayBhYnkga29yenlzdGHFgiB6IHdjemVzbmllaiB6YW1pcGxlbWVudG93YW5lZ28gSE9DIHdpdGhUaW1lclxuY29uc3QgU3RvcHBlcldpdGhUaW1lciA9IHdpdGhUaW1lcihTdG9wcGVyKTtcblxuZXhwb3J0IHtTdG9wcGVyLCBTdG9wcGVyV2l0aFRpbWVyfTsiLCIvKipcbiAqIE5hcGlzeiBIT0MgaW1wbGVtZW50dWrEhWN5IGxpY3puaWtcbiAqXG4gKiBOaWUgemFwb21uaWogd3lla3Nwb3J0b3dhxIchXG4gKiBleHBvcnQgZGVmYXVsdCB3aXRoVGltZXI7XG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG4vLyBmdW5jdGlvbiB3aXRoVGltZXIoQ29tcG9uZW50KSB7XG4vLyAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vXG4vLyAgICAgICAgIHN0YXRlID0ge1xuLy8gICAgICAgICAgICAgY291bnRlcjogMCxcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgc3RhcnRUaW1lciA9ICgpID0+IHtcbi8vICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbi8vICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogcHJldlN0YXRlLmNvdW50ZXIgKyAxXG4vLyAgICAgICAgICAgICAgICAgfSkpO1xuLy8gICAgICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIHN0b3BUaW1lciA9ICgpID0+IHtcbi8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIHJlbmRlcigpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gY291bnRlcj17dGhpcy5zdGF0ZS5jb3VudGVyfSBzdGFydFRpbWVyPXt0aGlzLnN0YXJ0VGltZXJ9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wVGltZXI9e3RoaXMuc3RvcFRpbWVyfS8+XG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbmZ1bmN0aW9uIHdpdGhUaW1lcihDb21wb25lbnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG5cbiAgICAgICAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMClcblxuICAgICAgICBmdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q291bnRlcihwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IGNvdW50ZXI9e2NvdW50ZXJ9IHN0YXJ0VGltZXI9e3N0YXJ0VGltZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgIHN0b3BUaW1lcj17c3RvcFRpbWVyfS8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaW1lcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMTkwYzRhMGI2NTBhODIwNzg0NFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJTdG9wcGVyIiwiU3RvcHBlcldpdGhUaW1lciIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIndpdGhUaW1lciIsInByb3BzIiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwic3RhcnRUaW1lciIsInN0b3BUaW1lciIsImNvdW50ZXIiLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29tcG9uZW50IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0Q291bnRlciIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJwcmV2U3RhdGUiLCJjbGVhckludGVydmFsIiwiX2V4dGVuZHMiXSwic291cmNlUm9vdCI6IiJ9