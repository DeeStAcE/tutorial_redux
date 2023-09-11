"use strict";
self["webpackHotUpdatees6_react"](0,{

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
    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      timerId = _useState4[0],
      setTimerId = _useState4[1];
    var startTimer = function startTimer() {};
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
/******/ 	__webpack_require__.h = () => ("cb2f8516242b63458c49")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MTVmYjVhYTMzYzhjMmViMDFlZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csU0FBU0EsQ0FBQ0MsU0FBUyxFQUFFO0VBQzFCLE9BQU8sVUFBVUMsS0FBSyxFQUFFO0lBRXBCLElBQUFDLFNBQUEsR0FBOEJKLCtDQUFRLENBQUMsQ0FBQyxDQUFDO01BQUFLLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO01BQWxDRyxPQUFPLEdBQUFGLFVBQUE7TUFBRUcsVUFBVSxHQUFBSCxVQUFBO0lBQzFCLElBQUFJLFVBQUEsR0FBOEJULCtDQUFRLENBQUMsSUFBSSxDQUFDO01BQUFVLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO01BQXJDRSxPQUFPLEdBQUFELFVBQUE7TUFBRUUsVUFBVSxHQUFBRixVQUFBO0lBRTFCLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVMsQ0FFekIsQ0FBQztJQUVELElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVMsQ0FFeEIsQ0FBQztJQUVELG9CQUNJaEIsMERBQUEsQ0FBQ0ksU0FBUyxFQUFBYyxRQUFBLEtBQUtiLEtBQUs7TUFBRUksT0FBTyxFQUFFQSxPQUFRO01BQUNNLFVBQVUsRUFBRUEsVUFBVztNQUNwREMsU0FBUyxFQUFFQTtJQUFVLEVBQUMsQ0FBQztFQUUxQyxDQUFDO0FBQ0w7QUFFQSxpRUFBZWIsU0FBUzs7Ozs7Ozs7VUMxRHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDNfRHppZW5fNC8wMV9Lb21wb25lbnR5LzAxX1phZGFuaWVfMS9qcy9ob2Mvd2l0aFRpbWVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBOYXBpc3ogSE9DIGltcGxlbWVudHVqxIVjeSBsaWN6bmlrXG4gKlxuICogTmllIHphcG9tbmlqIHd5ZWtzcG9ydG93YcSHIVxuICogZXhwb3J0IGRlZmF1bHQgd2l0aFRpbWVyO1xuICovXG5cbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuLy8gZnVuY3Rpb24gd2l0aFRpbWVyKENvbXBvbmVudCkge1xuLy8gICAgIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vL1xuLy8gICAgICAgICBzdGF0ZSA9IHtcbi8vICAgICAgICAgICAgIGNvdW50ZXI6IDAsXG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIHN0YXJ0VGltZXIgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IHByZXZTdGF0ZS5jb3VudGVyICsgMVxuLy8gICAgICAgICAgICAgICAgIH0pKTtcbi8vICAgICAgICAgICAgIH0sIDEwMDApO1xuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICBzdG9wVGltZXIgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICByZW5kZXIoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IGNvdW50ZXI9e3RoaXMuc3RhdGUuY291bnRlcn0gc3RhcnRUaW1lcj17dGhpcy5zdGFydFRpbWVyfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcFRpbWVyPXt0aGlzLnN0b3BUaW1lcn0vPlxuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB3aXRoVGltZXIoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuXG4gICAgICAgIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDApXG4gICAgICAgIGNvbnN0IFt0aW1lcklkLCBzZXRUaW1lcklkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0b3BUaW1lciA9ICgpID0+IHtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSBjb3VudGVyPXtjb3VudGVyfSBzdGFydFRpbWVyPXtzdGFydFRpbWVyfVxuICAgICAgICAgICAgICAgICAgICAgICBzdG9wVGltZXI9e3N0b3BUaW1lcn0vPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGltZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2IyZjg1MTYyNDJiNjM0NThjNDlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIndpdGhUaW1lciIsIkNvbXBvbmVudCIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY291bnRlciIsInNldENvdW50ZXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInRpbWVySWQiLCJzZXRUaW1lcklkIiwic3RhcnRUaW1lciIsInN0b3BUaW1lciIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=