webpackHotUpdate(4,{

/***/ "./components/common/listMenu/index.js":
/*!*********************************************!*\
  !*** ./components/common/listMenu/index.js ***!
  \*********************************************/
/*! exports provided: ListMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMenu", function() { return ListMenu; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index */ "./components/common/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ListMenu = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ListMenu, _React$Component);

  var _super = _createSuper(ListMenu);

  function ListMenu(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListMenu);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          popUp = _this$state.popUp,
          popUpItem = _this$state.popUpItem,
          popUpItemIndex = _this$state.popUpItemIndex;
      var _this$props = this.props,
          list = _this$props.list,
          listName = _this$props.listName,
          categoryList = _this$props.categoryList;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, categoryList.length == 4 && __jsx("div", {
        className: "row justify-content-center mini-list-container"
      }, __jsx(_index__WEBPACK_IMPORTED_MODULE_8__["ListBox"], {
        categoryList: categoryList
      })), categoryList.length > 6 && __jsx("div", {
        className: "row justify-content-center list-container"
      }, __jsx(_index__WEBPACK_IMPORTED_MODULE_8__["ListBox"], {
        categoryList: categoryList
      })));
    }
  }]);

  return ListMenu;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
;
/* harmony default export */ __webpack_exports__["default"] = (ListMenu);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9saXN0TWVudS9pbmRleC5qcyJdLCJuYW1lcyI6WyJMaXN0TWVudSIsInByb3BzIiwic3RhdGUiLCJwb3BVcCIsInBvcFVwSXRlbSIsInBvcFVwSXRlbUluZGV4IiwibGlzdCIsImxpc3ROYW1lIiwiY2F0ZWdvcnlMaXN0IiwibGVuZ3RoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFiO0FBQUE7O0FBQUE7O0FBQ0Usb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDRixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZtQjtBQUlwQjs7QUFMRDtBQUFBO0FBQUEsd0NBUXFCLENBQ2xCO0FBVEg7QUFBQTtBQUFBLDZCQVlXO0FBQUEsd0JBQ2dDLEtBQUtBLEtBRHJDO0FBQUEsVUFDRkMsS0FERSxlQUNGQSxLQURFO0FBQUEsVUFDSUMsU0FESixlQUNJQSxTQURKO0FBQUEsVUFDY0MsY0FEZCxlQUNjQSxjQURkO0FBQUEsd0JBRTRCLEtBQUtKLEtBRmpDO0FBQUEsVUFFRkssSUFGRSxlQUVGQSxJQUZFO0FBQUEsVUFFR0MsUUFGSCxlQUVHQSxRQUZIO0FBQUEsVUFFWUMsWUFGWixlQUVZQSxZQUZaO0FBSVAsYUFDQyxtRUFDRUEsWUFBWSxDQUFDQyxNQUFiLElBQXFCLENBQXJCLElBQXdCO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ3ZCLE1BQUMsOENBQUQ7QUFBUyxvQkFBWSxFQUFFRDtBQUF2QixRQUR1QixDQUQxQixFQUlFQSxZQUFZLENBQUNDLE1BQWIsR0FBb0IsQ0FBcEIsSUFBdUI7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDdEIsTUFBQyw4Q0FBRDtBQUFTLG9CQUFZLEVBQUVEO0FBQXZCLFFBRHNCLENBSnpCLENBREQ7QUFXRDtBQTNCSDs7QUFBQTtBQUFBLEVBQThCRSw0Q0FBSyxDQUFDQyxTQUFwQztBQTRCQztBQUNjWCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay80LmI4YTMyOTI3OWY4ZGJlOTkzYThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcbmltcG9ydCB7TGlzdEJveH0gZnJvbSAnLi4vaW5kZXgnXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgdGhpcy5zdGF0ZSA9IHsgIFxyXG4gIH1cclxufVxyXG5cclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gIH1cclxuICBcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHtwb3BVcCxwb3BVcEl0ZW0scG9wVXBJdGVtSW5kZXh9ID0gdGhpcy5zdGF0ZVxyXG4gICAgbGV0IHtsaXN0LGxpc3ROYW1lLGNhdGVnb3J5TGlzdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgIDw+XHJcbiAgICAgIHtjYXRlZ29yeUxpc3QubGVuZ3RoPT00JiY8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1pbmktbGlzdC1jb250YWluZXJcIj5cclxuICAgICAgICA8TGlzdEJveCBjYXRlZ29yeUxpc3Q9e2NhdGVnb3J5TGlzdH0vPlxyXG4gICAgICA8L2Rpdj59XHJcbiAgICAgIHtjYXRlZ29yeUxpc3QubGVuZ3RoPjYmJjxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbGlzdC1jb250YWluZXJcIj5cclxuICAgICAgICA8TGlzdEJveCBjYXRlZ29yeUxpc3Q9e2NhdGVnb3J5TGlzdH0vPlxyXG4gICAgICA8L2Rpdj59XHJcbiAgICAgIFxyXG4gICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGlzdE1lbnUiXSwic291cmNlUm9vdCI6IiJ9