"use strict";
self["webpackHotUpdatees6_react"](0,{

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
    var startTimer = function startTimer() {
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
    };
    var stopTimer = function stopTimer() {};
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
/******/ 	__webpack_require__.h = () => ("915fb5aa33c8c2eb01ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MjQyZmNmNzQ1ZDlhNWYwZDc5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2U7O0FBRXpDO0FBQ0EsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlDLEtBQUssRUFBSztFQUN2QixvQkFDSUgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVFNLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUgsS0FBSyxDQUFDSSxVQUFVLENBQUMsQ0FBQztJQUFBO0VBQUMsR0FBQyxPQUFhLENBQUMsZUFDekRQLDBEQUFBO0lBQVFNLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUgsS0FBSyxDQUFDSyxTQUFTLENBQUMsQ0FBQztJQUFBO0VBQUMsR0FBQyxNQUFZLENBQUMsZUFDdkRSLDBEQUFBLFlBQUcsV0FBUyxFQUFDRyxLQUFLLENBQUNNLE9BQVcsQ0FBQyxFQUUzQk4sS0FBSyxDQUFDTyxRQUVaLENBQUM7QUFFWCxDQUFDOztBQUVEO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUdWLDBEQUFTLENBQUNDLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0QsU0FBU0EsQ0FBQ2EsU0FBUyxFQUFFO0VBQzFCLE9BQU8sVUFBVVgsS0FBSyxFQUFFO0lBRXBCLElBQUFZLFNBQUEsR0FBOEJGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO01BQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO01BQWxDTixPQUFPLEdBQUFPLFVBQUE7TUFBRUUsVUFBVSxHQUFBRixVQUFBO0lBRTFCLElBQU1ULFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7TUFDckJLLGdEQUFTLENBQUMsWUFBTTtRQUNaLElBQU1PLEtBQUssR0FBR0MsV0FBVyxDQUFDLFlBQU07VUFDNUJGLFVBQVUsQ0FBQyxVQUFBRyxTQUFTO1lBQUEsT0FBSUEsU0FBUyxHQUFHLENBQUM7VUFBQSxFQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUM7UUFFUixPQUFPLFlBQU07VUFDVEMsYUFBYSxDQUFDSCxLQUFLLENBQUM7UUFDeEIsQ0FBQztNQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQsSUFBTVgsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUyxDQUV4QixDQUFDO0lBRUQsb0JBQ0lSLDBEQUFBLENBQUNjLFNBQVMsRUFBQVMsUUFBQSxLQUFLcEIsS0FBSztNQUFFTSxPQUFPLEVBQUVBLE9BQVE7TUFBQ0YsVUFBVSxFQUFFQSxVQUFXO01BQ3BEQyxTQUFTLEVBQUVBO0lBQVUsRUFBQyxDQUFDO0VBRTFDLENBQUM7QUFDTDtBQUVBLGlFQUFlUCxTQUFTOzs7Ozs7OztVQ2pFeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19Eemllbl80LzAxX0tvbXBvbmVudHkvMDFfWmFkYW5pZV8xL2pzL2NvbXBvbmVudHMvU3RvcHBlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19Eemllbl80LzAxX0tvbXBvbmVudHkvMDFfWmFkYW5pZV8xL2pzL2hvYy93aXRoVGltZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2l0aFRpbWVyIGZyb20gXCIuLi9ob2Mvd2l0aFRpbWVyXCI7XG5cbi8vIFphbWllxYQgY2lhxYJvIGZ1bmtjamkgdGFrIGFieSByZW5kZXJvd2HFgmEgU3RvcHBlciB3Zy4gdHJlxZtjaSB6YWRhbmlhXG5jb25zdCBTdG9wcGVyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuc3RhcnRUaW1lcigpfT5TdGFydDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zdG9wVGltZXIoKX0+U3RvcDwvYnV0dG9uPlxuICAgICAgICAgICAgPHA+TGljem5pazoge3Byb3BzLmNvdW50ZXJ9PC9wPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbi8vIFphbWllxYQgZGVrbGFyYWNqxJkga29tcG9uZW50dSBwb25pxbxlaiB0YWsgYWJ5IGtvcnp5c3RhxYIgeiB3Y3plc25pZWogemFtaXBsZW1lbnRvd2FuZWdvIEhPQyB3aXRoVGltZXJcbmNvbnN0IFN0b3BwZXJXaXRoVGltZXIgPSB3aXRoVGltZXIoU3RvcHBlcik7XG5cbmV4cG9ydCB7U3RvcHBlciwgU3RvcHBlcldpdGhUaW1lcn07IiwiLyoqXG4gKiBOYXBpc3ogSE9DIGltcGxlbWVudHVqxIVjeSBsaWN6bmlrXG4gKlxuICogTmllIHphcG9tbmlqIHd5ZWtzcG9ydG93YcSHIVxuICogZXhwb3J0IGRlZmF1bHQgd2l0aFRpbWVyO1xuICovXG5cbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuLy8gZnVuY3Rpb24gd2l0aFRpbWVyKENvbXBvbmVudCkge1xuLy8gICAgIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vL1xuLy8gICAgICAgICBzdGF0ZSA9IHtcbi8vICAgICAgICAgICAgIGNvdW50ZXI6IDAsXG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIHN0YXJ0VGltZXIgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IHByZXZTdGF0ZS5jb3VudGVyICsgMVxuLy8gICAgICAgICAgICAgICAgIH0pKTtcbi8vICAgICAgICAgICAgIH0sIDEwMDApO1xuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICBzdG9wVGltZXIgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICByZW5kZXIoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IGNvdW50ZXI9e3RoaXMuc3RhdGUuY291bnRlcn0gc3RhcnRUaW1lcj17dGhpcy5zdGFydFRpbWVyfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcFRpbWVyPXt0aGlzLnN0b3BUaW1lcn0vPlxuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB3aXRoVGltZXIoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuXG4gICAgICAgIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDApXG5cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvdW50ZXIocHJldlN0YXRlID0+IHByZXZTdGF0ZSArIDEpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RvcFRpbWVyID0gKCkgPT4ge1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IGNvdW50ZXI9e2NvdW50ZXJ9IHN0YXJ0VGltZXI9e3N0YXJ0VGltZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgIHN0b3BUaW1lcj17c3RvcFRpbWVyfS8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaW1lcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MTVmYjVhYTMzYzhjMmViMDFlZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIndpdGhUaW1lciIsIlN0b3BwZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJzdGFydFRpbWVyIiwic3RvcFRpbWVyIiwiY291bnRlciIsImNoaWxkcmVuIiwiU3RvcHBlcldpdGhUaW1lciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29tcG9uZW50IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0Q291bnRlciIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJwcmV2U3RhdGUiLCJjbGVhckludGVydmFsIiwiX2V4dGVuZHMiXSwic291cmNlUm9vdCI6IiJ9