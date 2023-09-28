"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 78:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Counter = function Counter(_ref) {
  var counter = _ref.counter,
    isCounting = _ref.isCounting,
    initCounter = _ref.initCounter,
    onStartCounter = _ref.onStartCounter,
    onPause = _ref.onPause,
    onSetValue = _ref.onSetValue;
  if (initCounter !== 0) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      onSetValue(initCounter);
    }, []);
  }
  var handleStart = function handleStart() {
    onStartCounter();
  };
  var handleStop = function handleStop() {
    onPause();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStart,
    disabled: isCounting
  }, "START"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop,
    disabled: !isCounting
  }, "STOP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, counter));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c12cbfbb33e800d4a9b3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MTU5NDE0MzBhMGQ1NTI4M2JkMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUV2QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFnRjtFQUFBLElBQTNFQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztJQUFFQyxjQUFjLEdBQUFKLElBQUEsQ0FBZEksY0FBYztJQUFFQyxPQUFPLEdBQUFMLElBQUEsQ0FBUEssT0FBTztJQUFFQyxVQUFVLEdBQUFOLElBQUEsQ0FBVk0sVUFBVTtFQUVuRixJQUFJSCxXQUFXLEtBQUssQ0FBQyxFQUFFO0lBQ25CTCxnREFBUyxDQUFDLFlBQU07TUFDWlEsVUFBVSxDQUFDSCxXQUFXLENBQUM7SUFDM0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNWO0VBRUEsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN0QkgsY0FBYyxDQUFDLENBQUM7RUFDcEIsQ0FBQztFQUVELElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJILE9BQU8sQ0FBQyxDQUFDO0VBQ2IsQ0FBQztFQUVELG9CQUNJUiwwREFBQSwyQkFDSUEsMERBQUE7SUFBUWEsT0FBTyxFQUFFSCxXQUFZO0lBQUNJLFFBQVEsRUFBRVQ7RUFBVyxHQUFDLE9BQWEsQ0FBQyxlQUNsRUwsMERBQUE7SUFBUWEsT0FBTyxFQUFFRixVQUFXO0lBQUNHLFFBQVEsRUFBRSxDQUFDVDtFQUFXLEdBQUMsTUFBWSxDQUFDLGVBQ2pFTCwwREFBQSxhQUFLSSxPQUFZLENBQ2hCLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVGLE9BQU87Ozs7Ozs7O1VDM0J0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3VudGVyID0gKHtjb3VudGVyLCBpc0NvdW50aW5nLCBpbml0Q291bnRlciwgb25TdGFydENvdW50ZXIsIG9uUGF1c2UsIG9uU2V0VmFsdWV9KSA9PiB7XG5cbiAgICBpZiAoaW5pdENvdW50ZXIgIT09IDApIHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIG9uU2V0VmFsdWUoaW5pdENvdW50ZXIpXG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICAgICAgb25TdGFydENvdW50ZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgICAgIG9uUGF1c2UoKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0YXJ0fSBkaXNhYmxlZD17aXNDb3VudGluZ30+U1RBUlQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0gZGlzYWJsZWQ9eyFpc0NvdW50aW5nfT5TVE9QPC9idXR0b24+XG4gICAgICAgICAgICA8aDE+e2NvdW50ZXJ9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzEyY2JmYmIzM2U4MDBkNGE5YjNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDb3VudGVyIiwiX3JlZiIsImNvdW50ZXIiLCJpc0NvdW50aW5nIiwiaW5pdENvdW50ZXIiLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiLCJvblNldFZhbHVlIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVTdG9wIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=