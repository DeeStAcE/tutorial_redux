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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({}, this.props, {
      counter: this.state.counter,
      startTimer: this.startTimer,
      stopTimer: this.stopTimer
    }));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withTimer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d764741b6d888fb7cd77")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZjczNDczMzg5YTU2ZGRlOGViNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2U7O0FBRXpDO0FBQ0EsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlDLEtBQUssRUFBSztFQUN2QixvQkFDSUgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVFNLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUgsS0FBSyxDQUFDSSxVQUFVLENBQUMsQ0FBQztJQUFBO0VBQUMsR0FBQyxPQUFhLENBQUMsZUFDekRQLDBEQUFBO0lBQVFNLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUgsS0FBSyxDQUFDSyxTQUFTLENBQUMsQ0FBQztJQUFBO0VBQUMsR0FBQyxNQUFZLENBQUMsZUFDdkRSLDBEQUFBLFlBQUcsV0FBUyxFQUFDRyxLQUFLLENBQUNNLE9BQVcsQ0FBQyxFQUUzQk4sS0FBSyxDQUFDTyxRQUVaLENBQUM7QUFFWCxDQUFDOztBQUVEO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUdWLDBEQUFTLENBQUNDLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0QsU0FBU0EsQ0FBQ2EsU0FBUyxFQUFFO0VBQzFCLE9BQU8sVUFBVVgsS0FBSyxFQUFFO0lBRXBCLElBQUFZLFNBQUEsR0FBOEJGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO01BQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO01BQWxDTixPQUFPLEdBQUFPLFVBQUE7TUFBRUUsVUFBVSxHQUFBRixVQUFBO0lBRTFCSixnREFBUyxDQUFDLFlBQU07TUFDWixJQUFNTyxLQUFLLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1FBQzVCRixVQUFVLENBQUMsVUFBQUcsU0FBUztVQUFBLE9BQUlBLFNBQVMsR0FBRyxDQUFDO1FBQUEsRUFBQztNQUMxQyxDQUFDLEVBQUUsSUFBSSxDQUFDO01BRVIsT0FBTyxZQUFNO1FBQ1RDLGFBQWEsQ0FBQ0gsS0FBSyxDQUFDO01BQ3hCLENBQUM7SUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBR04sb0JBQ0luQiwwREFBQSxDQUFDYyxTQUFTLEVBQUFTLFFBQUEsS0FBSyxJQUFJLENBQUNwQixLQUFLO01BQUVNLE9BQU8sRUFBRSxJQUFJLENBQUNlLEtBQUssQ0FBQ2YsT0FBUTtNQUFDRixVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFXO01BQ3pFQyxTQUFTLEVBQUUsSUFBSSxDQUFDQTtJQUFVLEVBQUMsQ0FBQztFQUUvQyxDQUFDO0FBQ0w7QUFFQSxpRUFBZVAsU0FBUzs7Ozs7Ozs7VUM1RHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDNfRHppZW5fNC8wMV9Lb21wb25lbnR5LzAxX1phZGFuaWVfMS9qcy9jb21wb25lbnRzL1N0b3BwZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDNfRHppZW5fNC8wMV9Lb21wb25lbnR5LzAxX1phZGFuaWVfMS9qcy9ob2Mvd2l0aFRpbWVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdpdGhUaW1lciBmcm9tIFwiLi4vaG9jL3dpdGhUaW1lclwiO1xuXG4vLyBaYW1pZcWEIGNpYcWCbyBmdW5rY2ppIHRhayBhYnkgcmVuZGVyb3dhxYJhIFN0b3BwZXIgd2cuIHRyZcWbY2kgemFkYW5pYVxuY29uc3QgU3RvcHBlciA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLnN0YXJ0VGltZXIoKX0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuc3RvcFRpbWVyKCl9PlN0b3A8L2J1dHRvbj5cbiAgICAgICAgICAgIDxwPkxpY3puaWs6IHtwcm9wcy5jb3VudGVyfTwvcD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG4vLyBaYW1pZcWEIGRla2xhcmFjasSZIGtvbXBvbmVudHUgcG9uacW8ZWogdGFrIGFieSBrb3J6eXN0YcWCIHogd2N6ZXNuaWVqIHphbWlwbGVtZW50b3dhbmVnbyBIT0Mgd2l0aFRpbWVyXG5jb25zdCBTdG9wcGVyV2l0aFRpbWVyID0gd2l0aFRpbWVyKFN0b3BwZXIpO1xuXG5leHBvcnQge1N0b3BwZXIsIFN0b3BwZXJXaXRoVGltZXJ9OyIsIi8qKlxuICogTmFwaXN6IEhPQyBpbXBsZW1lbnR1asSFY3kgbGljem5pa1xuICpcbiAqIE5pZSB6YXBvbW5paiB3eWVrc3BvcnRvd2HEhyFcbiAqIGV4cG9ydCBkZWZhdWx0IHdpdGhUaW1lcjtcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbi8vIGZ1bmN0aW9uIHdpdGhUaW1lcihDb21wb25lbnQpIHtcbi8vICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy9cbi8vICAgICAgICAgc3RhdGUgPSB7XG4vLyAgICAgICAgICAgICBjb3VudGVyOiAwLFxuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICBzdGFydFRpbWVyID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuLy8gICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiBwcmV2U3RhdGUuY291bnRlciArIDFcbi8vICAgICAgICAgICAgICAgICB9KSk7XG4vLyAgICAgICAgICAgICB9LCAxMDAwKTtcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgc3RvcFRpbWVyID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgcmVuZGVyKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSBjb3VudGVyPXt0aGlzLnN0YXRlLmNvdW50ZXJ9IHN0YXJ0VGltZXI9e3RoaXMuc3RhcnRUaW1lcn1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BUaW1lcj17dGhpcy5zdG9wVGltZXJ9Lz5cbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuZnVuY3Rpb24gd2l0aFRpbWVyKENvbXBvbmVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcblxuICAgICAgICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDb3VudGVyKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgKyAxKVxuICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gY291bnRlcj17dGhpcy5zdGF0ZS5jb3VudGVyfSBzdGFydFRpbWVyPXt0aGlzLnN0YXJ0VGltZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgIHN0b3BUaW1lcj17dGhpcy5zdG9wVGltZXJ9Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRpbWVyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ3NjQ3NDFiNmQ4ODhmYjdjZDc3XCIpIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aFRpbWVyIiwiU3RvcHBlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DbGljayIsInN0YXJ0VGltZXIiLCJzdG9wVGltZXIiLCJjb3VudGVyIiwiY2hpbGRyZW4iLCJTdG9wcGVyV2l0aFRpbWVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb21wb25lbnQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRDb3VudGVyIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInByZXZTdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJfZXh0ZW5kcyIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==