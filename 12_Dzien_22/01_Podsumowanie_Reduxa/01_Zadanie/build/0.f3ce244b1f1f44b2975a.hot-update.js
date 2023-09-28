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

var Counter = function Counter(_ref, state) {
  var counter = _ref.counter,
    isCounting = _ref.isCounting,
    onStartCounter = _ref.onStartCounter,
    onPause = _ref.onPause;
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

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93);
/* harmony import */ var _containers_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _containers_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);






var NewCounter = function NewCounter() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    initCounter = _useParams.initCounter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    initCounter: initCounter
  });
};
var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/:initCounter/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NewCounter, null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_List__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("16178686ca86431020d5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mM2NlMjQ0YjFmMWY0NGIyOTc1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFvREMsS0FBSyxFQUFLO0VBQUEsSUFBekRDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0lBQUVDLFVBQVUsR0FBQUgsSUFBQSxDQUFWRyxVQUFVO0lBQUVDLGNBQWMsR0FBQUosSUFBQSxDQUFkSSxjQUFjO0lBQUVDLE9BQU8sR0FBQUwsSUFBQSxDQUFQSyxPQUFPO0VBRTFELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJGLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCLENBQUM7RUFFRCxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCRixPQUFPLENBQUMsQ0FBQztFQUNiLENBQUM7RUFFRCxvQkFDSVAsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFXLE9BQU8sRUFBRUgsV0FBWTtJQUFDSSxRQUFRLEVBQUVQO0VBQVcsR0FBQyxPQUFhLENBQUMsZUFDbEVMLDBEQUFBO0lBQVFXLE9BQU8sRUFBRUYsVUFBVztJQUFDRyxRQUFRLEVBQUUsQ0FBQ1A7RUFBVyxHQUFDLE1BQVksQ0FBQyxlQUNqRUwsMERBQUEsYUFBS0ksT0FBWSxDQUNoQixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlSCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJJO0FBQ1c7QUFNWDtBQUVpQjtBQUNOO0FBQ0g7QUFHbEMsSUFBTW9CLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7RUFDckIsSUFBQUMsVUFBQSxHQUFzQkosMkRBQVMsQ0FBQyxDQUFDO0lBQTFCSyxXQUFXLEdBQUFELFVBQUEsQ0FBWEMsV0FBVztFQUVsQixvQkFBT3ZCLDBEQUFBLENBQUNDLDJEQUFPO0lBQUNzQixXQUFXLEVBQUVBO0VBQVksQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2Ysb0JBQ0l4QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ2EsaURBQVE7SUFBQ08sS0FBSyxFQUFFQSxvREFBS0E7RUFBQyxnQkFDbkJwQiwwREFBQSxDQUFDZSwyREFBTSxxQkFDSGYsMERBQUEsQ0FBQ2dCLG9EQUFNLHFCQUNIaEIsMERBQUEsQ0FBQ2lCLG1EQUFLO0lBQUNTLElBQUksRUFBQyxFQUFFO0lBQUNDLE9BQU8sZUFBRTNCLDBEQUFBLENBQUNDLDJEQUFPLE1BQUM7RUFBRSxDQUFDLENBQUMsZUFDckNELDBEQUFBLENBQUNpQixtREFBSztJQUFDUyxJQUFJLEVBQUMsZ0JBQWdCO0lBQUNDLE9BQU8sZUFBRTNCLDBEQUFBLENBQUNxQixVQUFVLE1BQUM7RUFBRSxDQUFDLENBQ2pELENBQUMsZUFDVHJCLDBEQUFBLENBQUNtQix3REFBSSxNQUFDLENBQ0YsQ0FDRixDQUNaLENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWVLLElBQUk7Ozs7Ozs7O1VDcENuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRlciA9ICh7Y291bnRlciwgaXNDb3VudGluZywgb25TdGFydENvdW50ZXIsIG9uUGF1c2V9LCBzdGF0ZSkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIG9uU3RhcnRDb3VudGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgICAgICBvblBhdXNlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdGFydH0gZGlzYWJsZWQ9e2lzQ291bnRpbmd9PlNUQVJUPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9IGRpc2FibGVkPXshaXNDb3VudGluZ30+U1RPUDwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPntjb3VudGVyfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlciIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcbiAgICBSb3V0ZXMsXG4gICAgUm91dGUsXG4gICAgdXNlUGFyYW1zXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQ291bnRlcidcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbnRhaW5lcnMvTGlzdCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcblxuXG5jb25zdCBOZXdDb3VudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtpbml0Q291bnRlcn0gPSB1c2VQYXJhbXMoKVxuXG4gICAgcmV0dXJuIDxDb3VudGVyIGluaXRDb3VudGVyPXtpbml0Q291bnRlcn0vPlxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJcIiBlbGVtZW50PXs8Q291bnRlci8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi86aW5pdENvdW50ZXIvXCIgZWxlbWVudD17PE5ld0NvdW50ZXIvPn0vPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QvPlxuICAgICAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTYxNzg2ODZjYTg2NDMxMDIwZDVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb3VudGVyIiwiX3JlZiIsInN0YXRlIiwiY291bnRlciIsImlzQ291bnRpbmciLCJvblN0YXJ0Q291bnRlciIsIm9uUGF1c2UiLCJoYW5kbGVTdGFydCIsImhhbmRsZVN0b3AiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImRpc2FibGVkIiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJ1c2VQYXJhbXMiLCJMaXN0Iiwic3RvcmUiLCJOZXdDb3VudGVyIiwiX3VzZVBhcmFtcyIsImluaXRDb3VudGVyIiwiTWFpbiIsIkZyYWdtZW50IiwicGF0aCIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9