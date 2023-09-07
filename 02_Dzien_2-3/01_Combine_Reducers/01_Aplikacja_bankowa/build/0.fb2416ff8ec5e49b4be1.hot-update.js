"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
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
  createStore: function createStore() {},
  // W tej metodzie należy podpiąć pod odpowiednie przyciski event handlery,
  // które odpalą nam odpowiednie akcje
  // Skorzystaj z elementów:
  // this.withdrawEl
  // this.depositEl
  applyHandlers: function applyHandlers() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankApp);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEPOSIT: () => (/* binding */ DEPOSIT),
/* harmony export */   WITHDRAW: () => (/* binding */ WITHDRAW),
/* harmony export */   depositMoney: () => (/* binding */ depositMoney),
/* harmony export */   withdrawMoney: () => (/* binding */ withdrawMoney)
/* harmony export */ });
// Tutaj zaimplementuj akcje do aplikacji bankApp

var WITHDRAW = "WITHDRAW";
var DEPOSIT = "DEPOSIT";
var withdrawMoney = function withdrawMoney(payload) {
  return {
    type: WITHDRAW,
    payload: payload
  };
};
var depositMoney = function depositMoney(payload) {
  return {
    type: DEPOSIT,
    payload: payload
  };
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0f31524b215b577d647d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mYjI0MTZmZjhlYzVlNDliNGJlMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0U7QUFFeEUsSUFBTUUsT0FBTyxHQUFHO0VBRVpDLEtBQUssV0FBQUEsTUFBQ0MsV0FBVyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxRQUFRLENBQUNELFdBQVcsQ0FBQztJQUMxQixJQUFJLENBQUNFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztFQUN4QixDQUFDO0VBRUQ7RUFDQTtFQUNBSCxRQUFRLFdBQUFBLFNBQUNELFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNBLFdBQVcsR0FBR0EsV0FBVztJQUM5QixJQUFJLENBQUNBLFdBQVcsQ0FBQ0ssU0FBUywyUkFVN0I7RUFDRCxDQUFDO0VBRUQ7RUFDQTtFQUNBRixXQUFXLFdBQUFBLFlBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0csU0FBUyxHQUFHLElBQUksQ0FBQ04sV0FBVyxDQUFDTyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQzNELElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ1IsV0FBVyxDQUFDTyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzdELElBQUksQ0FBQ0UsT0FBTyxHQUFHLElBQUksQ0FBQ1QsV0FBVyxDQUFDTyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3hELElBQUksQ0FBQ0csT0FBTyxHQUFHLElBQUksQ0FBQ1YsV0FBVyxDQUFDTyxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQzFELENBQUM7RUFFRDtFQUNBO0VBQ0E7RUFDQTtFQUNBTCxXQUFXLFdBQUFBLFlBQUEsRUFBRyxDQUVkLENBQUM7RUFFRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FFLGFBQWEsV0FBQUEsY0FBQSxFQUFHLENBRWhCO0FBQ0osQ0FBQztBQUVELGlFQUFlTixPQUFPOzs7Ozs7Ozs7Ozs7OztBQ3hEdEI7O0FBRUEsSUFBTWEsUUFBUSxHQUFHLFVBQVU7QUFDM0IsSUFBTUMsT0FBTyxHQUFHLFNBQVM7QUFFekIsSUFBTWhCLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSWlCLE9BQU87RUFBQSxPQUFNO0lBQ2hDQyxJQUFJLEVBQUVILFFBQVE7SUFDZEUsT0FBTyxFQUFQQTtFQUNKLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTWhCLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJZ0IsT0FBTztFQUFBLE9BQU07SUFDL0JDLElBQUksRUFBRUYsT0FBTztJQUNiQyxPQUFPLEVBQVBBO0VBQ0osQ0FBQztBQUFBLENBQUM7Ozs7Ozs7OztVQ2JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0NvbWJpbmVfUmVkdWNlcnMvMDFfQXBsaWthY2phX2Jhbmtvd2EvanMvYmFua0FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQ29tYmluZV9SZWR1Y2Vycy8wMV9BcGxpa2FjamFfYmFua293YS9qcy9yZWR1eC9hY3Rpb25zL2JhbmtBY3Rpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHUgcG93aW5ueSBzacSZIHpuYWxlxbrEhyBvZHBvd2llZG5pZSBpbXBvcnR5XG5pbXBvcnQge3dpdGhkcmF3TW9uZXksIGRlcG9zaXRNb25leX0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9iYW5rQWN0aW9uc1wiO1xuXG5jb25zdCBiYW5rQXBwID0ge1xuXG4gICAgc3RhcnQocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU3RvcmUoKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0UmVmcygpO1xuICAgICAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcbiAgICB9LFxuXG4gICAgLy8gVGVqIG1ldG9keSBuaWUgcG93aW5uacWbbXkgcnVzemHEhyA6KVxuICAgIC8vIFR3b3J6eW15IHR1IHN6YWJsb24gVUlcbiAgICBjcmVhdGVVSShyb290RWxlbWVudCkge1xuICAgICAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlNhbGRvOjxzcGFuPjA8L3NwYW4+PC9oMT5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICQ6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtb25leVwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cIndpdGhkcmF3XCI+V3lwxYJhxIc8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVwb3NpdFwiPldwxYJhxIc8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIH0sXG5cbiAgICAvLyBUdXRhaiB6YmllcmFteSByZWZlcmVuY2plIGRvIG9kcG93aWVkbmljaCBlbGVtZW50w7N3XG4gICAgLy8gVGVqIG1ldG9keSB0ZcW8IG5pZSB0cnplYmEgem1pZW5pYcSHIDspXG4gICAgY29sbGVjdFJlZnMoKSB7XG4gICAgICAgIHRoaXMuZGVwb3NpdEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlcG9zaXRcIik7XG4gICAgICAgIHRoaXMud2l0aGRyYXdFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aXRoZHJhd1wiKTtcbiAgICAgICAgdGhpcy5zYWxkb0VsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDEgc3BhblwiKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgfSxcblxuICAgIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgdXR3b3J6ecSHIG5vd3kgc3RvcmVcbiAgICAvLyBOYXN0xJlwbmllIHphcGlzYcSHIHNpxJkgbmEgem1pYW55IGkgbmEga2HFvGTEhSB6IG5pY2hcbiAgICAvLyB6YW1pZW5pxIcgd2FydG/Fm8SHIHRla3N0dSB3IGVsZW1lbmNpZSBgc2FsZG9FbGAgbmEgd2FydG/Fm8SHIHplIHN0b3JlICsgUExOXG4gICAgLy8gbnAuIHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgd2FydG9zYy16ZS1zdG9yZSBQTE5gXG4gICAgY3JlYXRlU3RvcmUoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSBwb2RwacSFxIcgcG9kIG9kcG93aWVkbmllIHByenljaXNraSBldmVudCBoYW5kbGVyeSxcbiAgICAvLyBrdMOzcmUgb2RwYWzEhSBuYW0gb2Rwb3dpZWRuaWUgYWtjamVcbiAgICAvLyBTa29yenlzdGFqIHogZWxlbWVudMOzdzpcbiAgICAvLyB0aGlzLndpdGhkcmF3RWxcbiAgICAvLyB0aGlzLmRlcG9zaXRFbFxuICAgIGFwcGx5SGFuZGxlcnMoKSB7XG5cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBiYW5rQXBwO1xuIiwiLy8gVHV0YWogemFpbXBsZW1lbnR1aiBha2NqZSBkbyBhcGxpa2FjamkgYmFua0FwcFxuXG5jb25zdCBXSVRIRFJBVyA9IFwiV0lUSERSQVdcIjtcbmNvbnN0IERFUE9TSVQgPSBcIkRFUE9TSVRcIjtcblxuY29uc3Qgd2l0aGRyYXdNb25leSA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IFdJVEhEUkFXLFxuICAgIHBheWxvYWQsXG59KTtcblxuY29uc3QgZGVwb3NpdE1vbmV5ID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogREVQT1NJVCxcbiAgICBwYXlsb2FkLFxufSk7XG5cbmV4cG9ydCB7V0lUSERSQVcsIERFUE9TSVQsIHdpdGhkcmF3TW9uZXksIGRlcG9zaXRNb25leX07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZjMxNTI0YjIxNWI1NzdkNjQ3ZFwiKSJdLCJuYW1lcyI6WyJ3aXRoZHJhd01vbmV5IiwiZGVwb3NpdE1vbmV5IiwiYmFua0FwcCIsInN0YXJ0Iiwicm9vdEVsZW1lbnQiLCJjcmVhdGVVSSIsImNyZWF0ZVN0b3JlIiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiaW5uZXJIVE1MIiwiZGVwb3NpdEVsIiwicXVlcnlTZWxlY3RvciIsIndpdGhkcmF3RWwiLCJzYWxkb0VsIiwiaW5wdXRFbCIsIldJVEhEUkFXIiwiREVQT1NJVCIsInBheWxvYWQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==