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
  if (initCounter !== undefined) {}
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onSetValue(initCounter || counter);
  }, []);
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

/***/ }),

/***/ 79:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DELETE: () => (/* binding */ DELETE),
/* harmony export */   INCREASE: () => (/* binding */ INCREASE),
/* harmony export */   PAUSE: () => (/* binding */ PAUSE),
/* harmony export */   SAVE: () => (/* binding */ SAVE),
/* harmony export */   SET: () => (/* binding */ SET),
/* harmony export */   deleteObject: () => (/* binding */ deleteObject),
/* harmony export */   increase: () => (/* binding */ increase),
/* harmony export */   pause: () => (/* binding */ pause),
/* harmony export */   save: () => (/* binding */ save),
/* harmony export */   setValue: () => (/* binding */ setValue),
/* harmony export */   startCounter: () => (/* binding */ startCounter)
/* harmony export */ });
var PAUSE = 'PAUSE';
var INCREASE = 'INCREASE';
var SAVE = 'SAVE';
var DELETE = "DELETE";
var SET = "SET";
var interval;
var startCounter = function startCounter() {
  return function (dispatch) {
    interval = setInterval(function () {
      dispatch(increase());
    }, 1000);
  };
};
var pause = function pause() {
  clearInterval(interval);
  return {
    type: PAUSE
  };
};
var increase = function increase() {
  return {
    type: INCREASE
  };
};
var save = function save(payload) {
  return {
    type: SAVE,
    payload: payload
  };
};
var deleteObject = function deleteObject(payload) {
  return {
    type: DELETE,
    payload: payload
  };
};
var setValue = function setValue(payload) {
  return {
    type: SET,
    payload: payload
  };
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("af9a30f482e43d53c47d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZThiMTFiNjA2MjBiMjBmZTA4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUV2QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFnRjtFQUFBLElBQTNFQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztJQUFFQyxjQUFjLEdBQUFKLElBQUEsQ0FBZEksY0FBYztJQUFFQyxPQUFPLEdBQUFMLElBQUEsQ0FBUEssT0FBTztJQUFFQyxVQUFVLEdBQUFOLElBQUEsQ0FBVk0sVUFBVTtFQUVuRixJQUFJSCxXQUFXLEtBQUtJLFNBQVMsRUFBRSxDQUUvQjtFQUVBVCxnREFBUyxDQUFDLFlBQU07SUFDWlEsVUFBVSxDQUFDSCxXQUFXLElBQUlGLE9BQU8sQ0FBQztFQUN0QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN0QkosY0FBYyxDQUFDLENBQUM7RUFDcEIsQ0FBQztFQUVELElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJKLE9BQU8sQ0FBQyxDQUFDO0VBQ2IsQ0FBQztFQUVELG9CQUNJUiwwREFBQSwyQkFDSUEsMERBQUE7SUFBUWMsT0FBTyxFQUFFSCxXQUFZO0lBQUNJLFFBQVEsRUFBRVY7RUFBVyxHQUFDLE9BQWEsQ0FBQyxlQUNsRUwsMERBQUE7SUFBUWMsT0FBTyxFQUFFRixVQUFXO0lBQUNHLFFBQVEsRUFBRSxDQUFDVjtFQUFXLEdBQUMsTUFBWSxDQUFDLGVBQ2pFTCwwREFBQSxhQUFLSSxPQUFZLENBQ2hCLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVGLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCZixJQUFNYyxLQUFLLEdBQUcsT0FBTztBQUNyQixJQUFNQyxRQUFRLEdBQUcsVUFBVTtBQUMzQixJQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNuQixJQUFNQyxNQUFNLEdBQUcsUUFBUTtBQUN2QixJQUFNQyxHQUFHLEdBQUcsS0FBSztBQUV4QixJQUFJQyxRQUFRO0FBRUwsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUE7RUFBQSxPQUFTLFVBQUNDLFFBQVEsRUFBSztJQUU1Q0YsUUFBUSxHQUFHRyxXQUFXLENBQUMsWUFBTTtNQUN6QkQsUUFBUSxDQUFDRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDWixDQUFDO0FBQUE7QUFFTSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBQ3ZCQyxhQUFhLENBQUNOLFFBQVEsQ0FBQztFQUV2QixPQUFPO0lBQ0hPLElBQUksRUFBRVo7RUFDVixDQUFDO0FBQ0wsQ0FBQztBQUVNLElBQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBO0VBQUEsT0FBVTtJQUMzQkcsSUFBSSxFQUFFWDtFQUNWLENBQUM7QUFBQSxDQUFDO0FBRUssSUFBTVksSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUlDLE9BQU87RUFBQSxPQUFNO0lBQzlCRixJQUFJLEVBQUVWLElBQUk7SUFDVlksT0FBTyxFQUFQQTtFQUNKLENBQUM7QUFBQSxDQUFDO0FBRUssSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlELE9BQU87RUFBQSxPQUFNO0lBQ3RDRixJQUFJLEVBQUVULE1BQU07SUFDWlcsT0FBTyxFQUFQQTtFQUNKLENBQUM7QUFBQSxDQUFDO0FBRUssSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlGLE9BQU87RUFBQSxPQUFNO0lBQ2xDRixJQUFJLEVBQUVSLEdBQUc7SUFDVFUsT0FBTyxFQUFQQTtFQUNKLENBQUM7QUFBQSxDQUFDOzs7Ozs7OztVQ3hDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL3JlZHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3VudGVyID0gKHtjb3VudGVyLCBpc0NvdW50aW5nLCBpbml0Q291bnRlciwgb25TdGFydENvdW50ZXIsIG9uUGF1c2UsIG9uU2V0VmFsdWV9KSA9PiB7XG5cbiAgICBpZiAoaW5pdENvdW50ZXIgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgb25TZXRWYWx1ZShpbml0Q291bnRlciB8fCBjb3VudGVyKVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBvblN0YXJ0Q291bnRlcigpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcbiAgICAgICAgb25QYXVzZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RhcnR9IGRpc2FibGVkPXtpc0NvdW50aW5nfT5TVEFSVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdG9wfSBkaXNhYmxlZD17IWlzQ291bnRpbmd9PlNUT1A8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT57Y291bnRlcn08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXIiLCJleHBvcnQgY29uc3QgUEFVU0UgPSAnUEFVU0UnO1xuZXhwb3J0IGNvbnN0IElOQ1JFQVNFID0gJ0lOQ1JFQVNFJztcbmV4cG9ydCBjb25zdCBTQVZFID0gJ1NBVkUnO1xuZXhwb3J0IGNvbnN0IERFTEVURSA9IFwiREVMRVRFXCJcbmV4cG9ydCBjb25zdCBTRVQgPSBcIlNFVFwiXG5cbmxldCBpbnRlcnZhbDtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0Q291bnRlciA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGluY3JlYXNlKCkpO1xuICAgIH0sIDEwMDApO1xufVxuXG5leHBvcnQgY29uc3QgcGF1c2UgPSAoKSA9PiB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBQQVVTRSxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbmNyZWFzZSA9ICgpID0+ICh7XG4gICAgdHlwZTogSU5DUkVBU0Vcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2F2ZSA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IFNBVkUsXG4gICAgcGF5bG9hZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlT2JqZWN0ID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogREVMRVRFLFxuICAgIHBheWxvYWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFZhbHVlID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogU0VULFxuICAgIHBheWxvYWQsXG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFmOWEzMGY0ODJlNDNkNTNjNDdkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQ291bnRlciIsIl9yZWYiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsImluaXRDb3VudGVyIiwib25TdGFydENvdW50ZXIiLCJvblBhdXNlIiwib25TZXRWYWx1ZSIsInVuZGVmaW5lZCIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlU3RvcCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJQQVVTRSIsIklOQ1JFQVNFIiwiU0FWRSIsIkRFTEVURSIsIlNFVCIsImludGVydmFsIiwic3RhcnRDb3VudGVyIiwiZGlzcGF0Y2giLCJzZXRJbnRlcnZhbCIsImluY3JlYXNlIiwicGF1c2UiLCJjbGVhckludGVydmFsIiwidHlwZSIsInNhdmUiLCJwYXlsb2FkIiwiZGVsZXRlT2JqZWN0Iiwic2V0VmFsdWUiXSwic291cmNlUm9vdCI6IiJ9