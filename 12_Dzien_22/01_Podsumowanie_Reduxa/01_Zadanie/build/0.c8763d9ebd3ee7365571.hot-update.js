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
  console.log(initCounter);
  if (initCounter !== undefined) {
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
/******/ 	__webpack_require__.h = () => ("7686423446bbe0d858f3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jODc2M2Q5ZWJkM2VlNzM2NTU3MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUV2QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFnRjtFQUFBLElBQTNFQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztJQUFFQyxjQUFjLEdBQUFKLElBQUEsQ0FBZEksY0FBYztJQUFFQyxPQUFPLEdBQUFMLElBQUEsQ0FBUEssT0FBTztJQUFFQyxVQUFVLEdBQUFOLElBQUEsQ0FBVk0sVUFBVTtFQUVuRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFdBQVcsQ0FBQztFQUN4QixJQUFJQSxXQUFXLEtBQUtNLFNBQVMsRUFBRTtJQUMzQlgsZ0RBQVMsQ0FBQyxZQUFNO01BQ1pRLFVBQVUsQ0FBQ0gsV0FBVyxDQUFDO0lBQzNCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDVjtFQUVBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJOLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCLENBQUM7RUFFRCxJQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCTixPQUFPLENBQUMsQ0FBQztFQUNiLENBQUM7RUFFRCxvQkFDSVIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFnQixPQUFPLEVBQUVILFdBQVk7SUFBQ0ksUUFBUSxFQUFFWjtFQUFXLEdBQUMsT0FBYSxDQUFDLGVBQ2xFTCwwREFBQTtJQUFRZ0IsT0FBTyxFQUFFRixVQUFXO0lBQUNHLFFBQVEsRUFBRSxDQUFDWjtFQUFXLEdBQUMsTUFBWSxDQUFDLGVBQ2pFTCwwREFBQSxhQUFLSSxPQUFZLENBQ2hCLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVGLE9BQU87Ozs7Ozs7O1VDNUJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3VudGVyID0gKHtjb3VudGVyLCBpc0NvdW50aW5nLCBpbml0Q291bnRlciwgb25TdGFydENvdW50ZXIsIG9uUGF1c2UsIG9uU2V0VmFsdWV9KSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhpbml0Q291bnRlcilcbiAgICBpZiAoaW5pdENvdW50ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgb25TZXRWYWx1ZShpbml0Q291bnRlcilcbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBvblN0YXJ0Q291bnRlcigpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcbiAgICAgICAgb25QYXVzZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RhcnR9IGRpc2FibGVkPXtpc0NvdW50aW5nfT5TVEFSVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdG9wfSBkaXNhYmxlZD17IWlzQ291bnRpbmd9PlNUT1A8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT57Y291bnRlcn08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3Njg2NDIzNDQ2YmJlMGQ4NThmM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkNvdW50ZXIiLCJfcmVmIiwiY291bnRlciIsImlzQ291bnRpbmciLCJpbml0Q291bnRlciIsIm9uU3RhcnRDb3VudGVyIiwib25QYXVzZSIsIm9uU2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVTdG9wIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=