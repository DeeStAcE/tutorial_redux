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
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      return function () {
        if (timerId) {
          clearInterval(timerId);
        }
      };
    }, [timerId]);
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
/******/ 	__webpack_require__.h = () => ("6bd4e7e05f27de7b3b87")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ODVkNjMxOTIzMDFlODkyZjg0MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csU0FBU0EsQ0FBQ0MsU0FBUyxFQUFFO0VBQzFCLE9BQU8sVUFBVUMsS0FBSyxFQUFFO0lBRXBCLElBQUFDLFNBQUEsR0FBOEJKLCtDQUFRLENBQUMsQ0FBQyxDQUFDO01BQUFLLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO01BQWxDRyxPQUFPLEdBQUFGLFVBQUE7TUFBRUcsVUFBVSxHQUFBSCxVQUFBO0lBQzFCLElBQUFJLFVBQUEsR0FBOEJULCtDQUFRLENBQUMsSUFBSSxDQUFDO01BQUFVLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO01BQXJDRSxPQUFPLEdBQUFELFVBQUE7TUFBRUUsVUFBVSxHQUFBRixVQUFBO0lBRTFCLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7TUFDckIsSUFBSSxDQUFDRixPQUFPLEVBQUU7UUFDVixJQUFNRyxVQUFVLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1VBQ2pDUCxVQUFVLENBQUMsVUFBQ1EsV0FBVztZQUFBLE9BQUtBLFdBQVcsR0FBRyxDQUFDO1VBQUEsRUFBQztRQUNoRCxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBRVJKLFVBQVUsQ0FBQ0UsVUFBVSxDQUFDO01BQzFCO0lBQ0osQ0FBQztJQUVELElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7TUFDcEIsSUFBSU4sT0FBTyxFQUFFO1FBQ1RPLGFBQWEsQ0FBQ1AsT0FBTyxDQUFDO1FBQ3RCQyxVQUFVLENBQUMsSUFBSSxDQUFDO01BQ3BCO0lBQ0osQ0FBQztJQUVEYixnREFBUyxDQUFDLFlBQU07TUFDWixPQUFPLFlBQU07UUFDVCxJQUFJWSxPQUFPLEVBQUU7VUFDVE8sYUFBYSxDQUFDUCxPQUFPLENBQUM7UUFDMUI7TUFDSixDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUNBLE9BQU8sQ0FBQyxDQUFDO0lBRWIsb0JBQ0liLDBEQUFBLENBQUNJLFNBQVMsRUFBQWtCLFFBQUEsS0FBS2pCLEtBQUs7TUFBRUksT0FBTyxFQUFFQSxPQUFRO01BQUNNLFVBQVUsRUFBRUEsVUFBVztNQUNwREksU0FBUyxFQUFFQTtJQUFVLEVBQUMsQ0FBQztFQUUxQyxDQUFDO0FBQ0w7QUFFQSxpRUFBZWhCLFNBQVM7Ozs7Ozs7O1VDM0V4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAzX0R6aWVuXzQvMDFfS29tcG9uZW50eS8wMV9aYWRhbmllXzEvanMvaG9jL3dpdGhUaW1lci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTmFwaXN6IEhPQyBpbXBsZW1lbnR1asSFY3kgbGljem5pa1xuICpcbiAqIE5pZSB6YXBvbW5paiB3eWVrc3BvcnRvd2HEhyFcbiAqIGV4cG9ydCBkZWZhdWx0IHdpdGhUaW1lcjtcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbi8vIGZ1bmN0aW9uIHdpdGhUaW1lcihDb21wb25lbnQpIHtcbi8vICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy9cbi8vICAgICAgICAgc3RhdGUgPSB7XG4vLyAgICAgICAgICAgICBjb3VudGVyOiAwLFxuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICBzdGFydFRpbWVyID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuLy8gICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiBwcmV2U3RhdGUuY291bnRlciArIDFcbi8vICAgICAgICAgICAgICAgICB9KSk7XG4vLyAgICAgICAgICAgICB9LCAxMDAwKTtcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgc3RvcFRpbWVyID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgcmVuZGVyKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSBjb3VudGVyPXt0aGlzLnN0YXRlLmNvdW50ZXJ9IHN0YXJ0VGltZXI9e3RoaXMuc3RhcnRUaW1lcn1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BUaW1lcj17dGhpcy5zdG9wVGltZXJ9Lz5cbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuZnVuY3Rpb24gd2l0aFRpbWVyKENvbXBvbmVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcblxuICAgICAgICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKVxuICAgICAgICBjb25zdCBbdGltZXJJZCwgc2V0VGltZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgICAgICBjb25zdCBzdGFydFRpbWVyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aW1lcklkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q291bnRlcigocHJldkNvdW50ZXIpID0+IHByZXZDb3VudGVyICsgMSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lcklkKG5ld1RpbWVySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RvcFRpbWVyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRpbWVySWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVySWQobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGltZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFt0aW1lcklkXSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSBjb3VudGVyPXtjb3VudGVyfSBzdGFydFRpbWVyPXtzdGFydFRpbWVyfVxuICAgICAgICAgICAgICAgICAgICAgICBzdG9wVGltZXI9e3N0b3BUaW1lcn0vPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGltZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmJkNGU3ZTA1ZjI3ZGU3YjNiODdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIndpdGhUaW1lciIsIkNvbXBvbmVudCIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY291bnRlciIsInNldENvdW50ZXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInRpbWVySWQiLCJzZXRUaW1lcklkIiwic3RhcnRUaW1lciIsIm5ld1RpbWVySWQiLCJzZXRJbnRlcnZhbCIsInByZXZDb3VudGVyIiwic3RvcFRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=