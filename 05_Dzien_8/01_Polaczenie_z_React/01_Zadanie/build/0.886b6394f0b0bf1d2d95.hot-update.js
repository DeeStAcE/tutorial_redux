"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);




// mapStateToProps (users, articles)
var mapStateToProps = function mapStateToProps(state) {
  return {
    articles: state.articles,
    users: state.users
  };
};

// mapDispatchToProps (onAdd)
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAdd: function onAdd(payload) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.addArticle)(payload));
    },
    onRemove: function onRemove(payload) {
      console.log(payload);
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.removeArticle)(payload));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_Articles__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("294f861abe710f23ffb5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ODZiNjM5NGYwYjBiZjFkMmQ5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFVTtBQUVhOztBQUUzRDtBQUNBLElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSztFQUFBLE9BQU07SUFDaENDLFFBQVEsRUFBRUQsS0FBSyxDQUFDQyxRQUFRO0lBQ3hCQyxLQUFLLEVBQUVGLEtBQUssQ0FBQ0U7RUFDakIsQ0FBQztBQUFBLENBQUM7O0FBRUY7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxRQUFRO0VBQUEsT0FBTTtJQUN0Q0MsS0FBSyxFQUFFLFNBQUFBLE1BQUNDLE9BQU87TUFBQSxPQUFLRixRQUFRLENBQUNQLDBEQUFVLENBQUNTLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDakRDLFFBQVEsRUFBRSxTQUFBQSxTQUFDRCxPQUFPLEVBQUs7TUFDbkJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUM7TUFDcEJGLFFBQVEsQ0FBQ04sNkRBQWEsQ0FBQ1EsT0FBTyxDQUFDLENBQUM7SUFDcEM7RUFDSixDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlWCxvREFBTyxDQUFDSSxlQUFlLEVBQUVJLGtCQUFrQixDQUFDLENBQUNQLDREQUFRLENBQUM7Ozs7Ozs7O1VDckJyRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDFfUG9sYWN6ZW5pZV96X1JlYWN0LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9BcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlcyc7XG5cbmltcG9ydCB7YWRkQXJ0aWNsZSwgcmVtb3ZlQXJ0aWNsZX0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucyc7XG5cbi8vIG1hcFN0YXRlVG9Qcm9wcyAodXNlcnMsIGFydGljbGVzKVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIGFydGljbGVzOiBzdGF0ZS5hcnRpY2xlcyxcbiAgICB1c2Vyczogc3RhdGUudXNlcnMsXG59KTtcblxuLy8gbWFwRGlzcGF0Y2hUb1Byb3BzIChvbkFkZClcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBvbkFkZDogKHBheWxvYWQpID0+IGRpc3BhdGNoKGFkZEFydGljbGUocGF5bG9hZCkpLFxuICAgIG9uUmVtb3ZlOiAocGF5bG9hZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxuICAgICAgICBkaXNwYXRjaChyZW1vdmVBcnRpY2xlKHBheWxvYWQpKVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcnRpY2xlcyk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjk0Zjg2MWFiZTcxMGYyM2ZmYjVcIikiXSwibmFtZXMiOlsiY29ubmVjdCIsIkFydGljbGVzIiwiYWRkQXJ0aWNsZSIsInJlbW92ZUFydGljbGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFydGljbGVzIiwidXNlcnMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwicGF5bG9hZCIsIm9uUmVtb3ZlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=