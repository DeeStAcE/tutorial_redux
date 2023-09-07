"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _redux_reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
// Tu powinny się znaleźć odpowiednie importy



var bankApp = {
  start: function start(rootElement) {
    this.createUI(rootElement);
    this.createStore();
    this.collectRefs();
    this.applyHandlers();
  },
  // Tej metody nie powinniśmy ruszać :)
  // Tworzymy tu szablon UI
  createUI: function createUI(rootElement) {
    this.rootElement = rootElement;
    this.rootElement.innerHTML = "\n      <div>\n        <h1>Saldo:<span>0</span></h1>\n\n        <div>\n          $: <input type=\"number\" id=\"money\" />\n          <button id=\"withdraw\">Wyp\u0142a\u0107</button>\n          <button id=\"deposit\">Wp\u0142a\u0107</button>\n        </div>\n      </div>\n    ";
  },
  // Tutaj zbieramy referencje do odpowiednich elementów
  // Tej metody też nie trzeba zmieniać ;)
  collectRefs: function collectRefs() {
    this.depositEl = this.rootElement.querySelector("#deposit");
    this.withdrawEl = this.rootElement.querySelector("#withdraw");
    this.saldoEl = this.rootElement.querySelector("h1 span");
    this.inputEl = this.rootElement.querySelector("input");
  },
  // W tej metodzie należy utworzyć nowy store
  // Następnie zapisać się na zmiany i na każdą z nich
  // zamienić wartość tekstu w elemencie `saldoEl` na wartość ze store + PLN
  // np. this.saldoEl.innerText = `wartosc-ze-store PLN`
  createStore: function createStore() {
    var _this = this;
    var _createStore2 = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_redux_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"]),
      dispatch = _createStore2.dispatch,
      getState = _createStore2.getState,
      subscribe = _createStore2.subscribe;
    this.dispatch = dispatch;
    this.unsubscribe = subscribe(function () {
      _this.saldoEl.textContent = getState().balance;
    });
  },
  // W tej metodzie należy podpiąć pod odpowiednie przyciski event handlery,
  // które odpalą nam odpowiednie akcje
  // Skorzystaj z elementów:
  // this.withdrawEl
  // this.depositEl
  applyHandlers: function applyHandlers() {
    var _this2 = this;
    // dispatch(depositMoney(1000))
    this.withdrawEl.addEventListener('click', function (event) {
      _this2.dispatch((0,_redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_0__.withdrawMoney)(Number(_this2.inputEl.value)));
    });
    this.depositEl.addEventListener('click', function (event) {
      _this2.dispatch((0,_redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_0__.depositMoney)(Number(_this2.inputEl.value)));
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankApp);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("571335dae3f38056cdd1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zM2I3YTVkN2NhYWExMDRiNGEzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN3RTtBQUN0QztBQUNZO0FBRTlDLElBQU1JLE9BQU8sR0FBRztFQUVaQyxLQUFLLFdBQUFBLE1BQUNDLFdBQVcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDSixXQUFXLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNNLFdBQVcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUM7RUFDeEIsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsUUFBUSxXQUFBQSxTQUFDRCxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNJLFNBQVMsMlJBVTdCO0VBQ0QsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDVixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNQLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3RCxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNSLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN4RCxJQUFJLENBQUNHLE9BQU8sR0FBRyxJQUFJLENBQUNULFdBQVcsQ0FBQ00sYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUMxRCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQVYsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFBQSxJQUFBYyxLQUFBO0lBQ1YsSUFBQUMsYUFBQSxHQUF3Q2Ysa0RBQVcsQ0FBQ0MsNkRBQVEsQ0FBQztNQUF0RGUsUUFBUSxHQUFBRCxhQUFBLENBQVJDLFFBQVE7TUFBRUMsUUFBUSxHQUFBRixhQUFBLENBQVJFLFFBQVE7TUFBRUMsU0FBUyxHQUFBSCxhQUFBLENBQVRHLFNBQVM7SUFFcEMsSUFBSSxDQUFDRixRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDRyxXQUFXLEdBQUdELFNBQVMsQ0FBQyxZQUFNO01BQy9CSixLQUFJLENBQUNGLE9BQU8sQ0FBQ1EsV0FBVyxHQUFHSCxRQUFRLENBQUMsQ0FBQyxDQUFDSSxPQUFPO0lBQ2pELENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FkLGFBQWEsV0FBQUEsY0FBQSxFQUFHO0lBQUEsSUFBQWUsTUFBQTtJQUNaO0lBQ0EsSUFBSSxDQUFDWCxVQUFVLENBQUNZLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7TUFDakRGLE1BQUksQ0FBQ04sUUFBUSxDQUFDbEIseUVBQWEsQ0FBQzJCLE1BQU0sQ0FBQ0gsTUFBSSxDQUFDVCxPQUFPLENBQUNhLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDakIsU0FBUyxDQUFDYyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ2hERixNQUFJLENBQUNOLFFBQVEsQ0FBQ2pCLHdFQUFZLENBQUMwQixNQUFNLENBQUNILE1BQUksQ0FBQ1QsT0FBTyxDQUFDYSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQztBQUVELGlFQUFleEIsT0FBTzs7Ozs7Ozs7VUN0RXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0NvbWJpbmVfUmVkdWNlcnMvMDFfQXBsaWthY2phX2Jhbmtvd2EvanMvYmFua0FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFR1IHBvd2lubnkgc2nEmSB6bmFsZcW6xIcgb2Rwb3dpZWRuaWUgaW1wb3J0eVxuaW1wb3J0IHt3aXRoZHJhd01vbmV5LCBkZXBvc2l0TW9uZXl9IGZyb20gXCIuL3JlZHV4L2FjdGlvbnMvYmFua0FjdGlvbnNcIjtcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2luZGV4XCI7XG5cbmNvbnN0IGJhbmtBcHAgPSB7XG5cbiAgICBzdGFydChyb290RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcbiAgICAgICAgdGhpcy5jcmVhdGVTdG9yZSgpO1xuICAgICAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XG4gICAgICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xuICAgIH0sXG5cbiAgICAvLyBUZWogbWV0b2R5IG5pZSBwb3dpbm5pxZtteSBydXN6YcSHIDopXG4gICAgLy8gVHdvcnp5bXkgdHUgc3phYmxvbiBVSVxuICAgIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgICAgICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+U2FsZG86PHNwYW4+MDwvc3Bhbj48L2gxPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm1vbmV5XCIgLz5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwid2l0aGRyYXdcIj5XeXDFgmHEhzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJkZXBvc2l0XCI+V3DFgmHEhzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgfSxcblxuICAgIC8vIFR1dGFqIHpiaWVyYW15IHJlZmVyZW5jamUgZG8gb2Rwb3dpZWRuaWNoIGVsZW1lbnTDs3dcbiAgICAvLyBUZWogbWV0b2R5IHRlxbwgbmllIHRyemViYSB6bWllbmlhxIcgOylcbiAgICBjb2xsZWN0UmVmcygpIHtcbiAgICAgICAgdGhpcy5kZXBvc2l0RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVwb3NpdFwiKTtcbiAgICAgICAgdGhpcy53aXRoZHJhd0VsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpdGhkcmF3XCIpO1xuICAgICAgICB0aGlzLnNhbGRvRWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSBzcGFuXCIpO1xuICAgICAgICB0aGlzLmlucHV0RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICB9LFxuXG4gICAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSB1dHdvcnp5xIcgbm93eSBzdG9yZVxuICAgIC8vIE5hc3TEmXBuaWUgemFwaXNhxIcgc2nEmSBuYSB6bWlhbnkgaSBuYSBrYcW8ZMSFIHogbmljaFxuICAgIC8vIHphbWllbmnEhyB3YXJ0b8WbxIcgdGVrc3R1IHcgZWxlbWVuY2llIGBzYWxkb0VsYCBuYSB3YXJ0b8WbxIcgemUgc3RvcmUgKyBQTE5cbiAgICAvLyBucC4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGB3YXJ0b3NjLXplLXN0b3JlIFBMTmBcbiAgICBjcmVhdGVTdG9yZSgpIHtcbiAgICAgICAgY29uc3Qge2Rpc3BhdGNoLCBnZXRTdGF0ZSwgc3Vic2NyaWJlfSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoID0gZGlzcGF0Y2g7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zYWxkb0VsLnRleHRDb250ZW50ID0gZ2V0U3RhdGUoKS5iYWxhbmNlXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBXIHRlaiBtZXRvZHppZSBuYWxlxbx5IHBvZHBpxIXEhyBwb2Qgb2Rwb3dpZWRuaWUgcHJ6eWNpc2tpIGV2ZW50IGhhbmRsZXJ5LFxuICAgIC8vIGt0w7NyZSBvZHBhbMSFIG5hbSBvZHBvd2llZG5pZSBha2NqZVxuICAgIC8vIFNrb3J6eXN0YWogeiBlbGVtZW50w7N3OlxuICAgIC8vIHRoaXMud2l0aGRyYXdFbFxuICAgIC8vIHRoaXMuZGVwb3NpdEVsXG4gICAgYXBwbHlIYW5kbGVycygpIHtcbiAgICAgICAgLy8gZGlzcGF0Y2goZGVwb3NpdE1vbmV5KDEwMDApKVxuICAgICAgICB0aGlzLndpdGhkcmF3RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2god2l0aGRyYXdNb25leShOdW1iZXIodGhpcy5pbnB1dEVsLnZhbHVlKSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRlcG9zaXRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChkZXBvc2l0TW9uZXkoTnVtYmVyKHRoaXMuaW5wdXRFbC52YWx1ZSkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYmFua0FwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU3MTMzNWRhZTNmMzgwNTZjZGQxXCIpIl0sIm5hbWVzIjpbIndpdGhkcmF3TW9uZXkiLCJkZXBvc2l0TW9uZXkiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiYmFua0FwcCIsInN0YXJ0Iiwicm9vdEVsZW1lbnQiLCJjcmVhdGVVSSIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsImlubmVySFRNTCIsImRlcG9zaXRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aXRoZHJhd0VsIiwic2FsZG9FbCIsImlucHV0RWwiLCJfdGhpcyIsIl9jcmVhdGVTdG9yZTIiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJ0ZXh0Q29udGVudCIsImJhbGFuY2UiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJOdW1iZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=