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
    var startTimer = function startTimer() {
      if (!timerId) {
        var newTimerId = setInterval(function () {
          setCounter(function (prevCounter) {
            return prevCounter + 1;
          });
        }, 1000);
        setTimerId(newTimerId);
      }
    };
    var stopTimer = function stopTimer() {
      if (timerId) {
        clearInterval(timerId);
        setTimerId(null);
      }
    };
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
/******/ 	__webpack_require__.h = () => ("b47ea88b52b40b5c5078")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YmQ0ZTdlMDVmMjdkZTdiM2I4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csU0FBU0EsQ0FBQ0MsU0FBUyxFQUFFO0VBQzFCLE9BQU8sVUFBVUMsS0FBSyxFQUFFO0lBRXBCLElBQUFDLFNBQUEsR0FBOEJKLCtDQUFRLENBQUMsQ0FBQyxDQUFDO01BQUFLLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO01BQWxDRyxPQUFPLEdBQUFGLFVBQUE7TUFBRUcsVUFBVSxHQUFBSCxVQUFBO0lBQzFCLElBQUFJLFVBQUEsR0FBOEJULCtDQUFRLENBQUMsSUFBSSxDQUFDO01BQUFVLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO01BQXJDRSxPQUFPLEdBQUFELFVBQUE7TUFBRUUsVUFBVSxHQUFBRixVQUFBO0lBRTFCLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7TUFDckIsSUFBSSxDQUFDRixPQUFPLEVBQUU7UUFDVixJQUFNRyxVQUFVLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1VBQ2pDUCxVQUFVLENBQUMsVUFBQ1EsV0FBVztZQUFBLE9BQUtBLFdBQVcsR0FBRyxDQUFDO1VBQUEsRUFBQztRQUNoRCxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBRVJKLFVBQVUsQ0FBQ0UsVUFBVSxDQUFDO01BQzFCO0lBQ0osQ0FBQztJQUVELElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7TUFDcEIsSUFBSU4sT0FBTyxFQUFFO1FBQ1RPLGFBQWEsQ0FBQ1AsT0FBTyxDQUFDO1FBQ3RCQyxVQUFVLENBQUMsSUFBSSxDQUFDO01BQ3BCO0lBQ0osQ0FBQztJQUVELG9CQUNJZCwwREFBQSxDQUFDSSxTQUFTLEVBQUFrQixRQUFBLEtBQUtqQixLQUFLO01BQUVJLE9BQU8sRUFBRUEsT0FBUTtNQUFDTSxVQUFVLEVBQUVBLFVBQVc7TUFDcERJLFNBQVMsRUFBRUE7SUFBVSxFQUFDLENBQUM7RUFFMUMsQ0FBQztBQUNMO0FBRUEsaUVBQWVoQixTQUFTOzs7Ozs7OztVQ25FeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19Eemllbl80LzAxX0tvbXBvbmVudHkvMDFfWmFkYW5pZV8xL2pzL2hvYy93aXRoVGltZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE5hcGlzeiBIT0MgaW1wbGVtZW50dWrEhWN5IGxpY3puaWtcbiAqXG4gKiBOaWUgemFwb21uaWogd3lla3Nwb3J0b3dhxIchXG4gKiBleHBvcnQgZGVmYXVsdCB3aXRoVGltZXI7XG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG4vLyBmdW5jdGlvbiB3aXRoVGltZXIoQ29tcG9uZW50KSB7XG4vLyAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vXG4vLyAgICAgICAgIHN0YXRlID0ge1xuLy8gICAgICAgICAgICAgY291bnRlcjogMCxcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgc3RhcnRUaW1lciA9ICgpID0+IHtcbi8vICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbi8vICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogcHJldlN0YXRlLmNvdW50ZXIgKyAxXG4vLyAgICAgICAgICAgICAgICAgfSkpO1xuLy8gICAgICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIHN0b3BUaW1lciA9ICgpID0+IHtcbi8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIHJlbmRlcigpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gY291bnRlcj17dGhpcy5zdGF0ZS5jb3VudGVyfSBzdGFydFRpbWVyPXt0aGlzLnN0YXJ0VGltZXJ9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wVGltZXI9e3RoaXMuc3RvcFRpbWVyfS8+XG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbmZ1bmN0aW9uIHdpdGhUaW1lcihDb21wb25lbnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG5cbiAgICAgICAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMClcbiAgICAgICAgY29uc3QgW3RpbWVySWQsIHNldFRpbWVySWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGltZXJJZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvdW50ZXIoKHByZXZDb3VudGVyKSA9PiBwcmV2Q291bnRlciArIDEpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZXJJZChuZXdUaW1lcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0b3BUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aW1lcklkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lcklkKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSBjb3VudGVyPXtjb3VudGVyfSBzdGFydFRpbWVyPXtzdGFydFRpbWVyfVxuICAgICAgICAgICAgICAgICAgICAgICBzdG9wVGltZXI9e3N0b3BUaW1lcn0vPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGltZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjQ3ZWE4OGI1MmI0MGI1YzUwNzhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIndpdGhUaW1lciIsIkNvbXBvbmVudCIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY291bnRlciIsInNldENvdW50ZXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInRpbWVySWQiLCJzZXRUaW1lcklkIiwic3RhcnRUaW1lciIsIm5ld1RpbWVySWQiLCJzZXRJbnRlcnZhbCIsInByZXZDb3VudGVyIiwic3RvcFRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=