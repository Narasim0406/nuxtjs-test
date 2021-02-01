(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/common/arrows/index.js":
/*!*******************************************!*\
  !*** ./components/common/arrows/index.js ***!
  \*******************************************/
/*! exports provided: Arrows, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrows", function() { return Arrows; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var Arrows = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Arrows, _React$Component);

  var _super = _createSuper(Arrows);

  function Arrows(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Arrows);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Arrows, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          navigateID = _this$props.navigateID,
          className = _this$props.className,
          color = _this$props.color;
      var text1 = "Looking for something in particular, but can't find it?";
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
        className: "customArrow ".concat(className),
        id: "".concat(navigateID, "Right"),
        style: {
          marginLeft: "10px"
        }
      }, __jsx("svg", {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        width: "51.056px",
        height: "32.495px",
        viewBox: "0 -23 132.056 93.495",
        xmlSpace: "preserve",
        style: {
          verticalAlign: "baseline"
        }
      }, __jsx("line", {
        x1: "5.775",
        y1: "35.392",
        x2: "129.923",
        y2: "35.392",
        className: "st1 one",
        style: {
          stroke: color ? color : "black"
        }
      }), __jsx("polyline", {
        points: "130.695,35.748 129.923,34.942 97.085,0.711 97.447,0.358 85.099,12.462 61.345,35.748 ",
        className: "st1 two",
        style: {
          stroke: color ? color : "black"
        }
      }), __jsx("polyline", {
        points: "130.695,35.202 129.923,36.019 97.085,70.778 97.447,71.137 85.099,58.846 61.345,35.202 ",
        className: "st1 three",
        style: {
          stroke: color ? color : "black"
        }
      }))));
    }
  }]);

  return Arrows;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
;
/* harmony default export */ __webpack_exports__["default"] = (Arrows);

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9hcnJvd3MvaW5kZXguanMiXSwibmFtZXMiOlsiQXJyb3dzIiwicHJvcHMiLCJuYXZpZ2F0ZUlEIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJ0ZXh0MSIsIm1hcmdpbkxlZnQiLCJ2ZXJ0aWNhbEFsaWduIiwic3Ryb2tlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsTUFBYjtBQUFBOztBQUFBOztBQUNFLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7O0FBSEg7QUFBQTtBQUFBLDZCQU1XO0FBQUEsd0JBQ2dDLEtBQUtBLEtBRHJDO0FBQUEsVUFDREMsVUFEQyxlQUNEQSxVQURDO0FBQUEsVUFDV0MsU0FEWCxlQUNXQSxTQURYO0FBQUEsVUFDc0JDLEtBRHRCLGVBQ3NCQSxLQUR0QjtBQUVQLFVBQU1DLEtBQUssR0FBRyx5REFBZDtBQUNBLGFBQ0UsbUVBQ0U7QUFBSyxpQkFBUyx3QkFBaUJGLFNBQWpCLENBQWQ7QUFBNEMsVUFBRSxZQUFLRCxVQUFMLFVBQTlDO0FBQXNFLGFBQUssRUFBRTtBQUFFSSxvQkFBVSxFQUFFO0FBQWQ7QUFBN0UsU0FDRTtBQUFLLGVBQU8sRUFBQyxLQUFiO0FBQW1CLFVBQUUsRUFBQyxTQUF0QjtBQUFnQyxhQUFLLEVBQUMsNEJBQXRDO0FBQ0Usa0JBQVUsRUFBQyw4QkFEYjtBQUM0QyxTQUFDLEVBQUMsS0FEOUM7QUFDb0QsU0FBQyxFQUFDLEtBRHREO0FBRUUsYUFBSyxFQUFDLFVBRlI7QUFFbUIsY0FBTSxFQUFDLFVBRjFCO0FBRXFDLGVBQU8sRUFBQyxzQkFGN0M7QUFHRSxnQkFBUSxFQUFDLFVBSFg7QUFHc0IsYUFBSyxFQUFFO0FBQUVDLHVCQUFhLEVBQUU7QUFBakI7QUFIN0IsU0FJRTtBQUFNLFVBQUUsRUFBQyxPQUFUO0FBQWlCLFVBQUUsRUFBQyxRQUFwQjtBQUE2QixVQUFFLEVBQUMsU0FBaEM7QUFBMEMsVUFBRSxFQUFDLFFBQTdDO0FBQXNELGlCQUFTLEVBQUMsU0FBaEU7QUFBMEUsYUFBSyxFQUFFO0FBQUNDLGdCQUFNLEVBQUVKLEtBQUssR0FBR0EsS0FBSCxHQUFTO0FBQXZCO0FBQWpGLFFBSkYsRUFLRTtBQUFVLGNBQU0sRUFBQyxzRkFBakI7QUFBd0csaUJBQVMsRUFBQyxTQUFsSDtBQUE0SCxhQUFLLEVBQUU7QUFBQ0ksZ0JBQU0sRUFBRUosS0FBSyxHQUFHQSxLQUFILEdBQVM7QUFBdkI7QUFBbkksUUFMRixFQU1FO0FBQVUsY0FBTSxFQUFDLHdGQUFqQjtBQUEwRyxpQkFBUyxFQUFDLFdBQXBIO0FBQWdJLGFBQUssRUFBRTtBQUFDSSxnQkFBTSxFQUFFSixLQUFLLEdBQUdBLEtBQUgsR0FBUztBQUF2QjtBQUF2SSxRQU5GLENBREYsQ0FERixDQURGO0FBY0Q7QUF2Qkg7O0FBQUE7QUFBQSxFQUE0QkssNENBQUssQ0FBQ0MsU0FBbEM7QUF3QkM7QUFDY1YscUVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFycm93cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBuYXZpZ2F0ZUlELCBjbGFzc05hbWUsIGNvbG9yIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdGV4dDEgPSBcIkxvb2tpbmcgZm9yIHNvbWV0aGluZyBpbiBwYXJ0aWN1bGFyLCBidXQgY2FuJ3QgZmluZCBpdD9cIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGN1c3RvbUFycm93ICR7Y2xhc3NOYW1lfWB9IGlkPXtgJHtuYXZpZ2F0ZUlEfVJpZ2h0YH0gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTEuMDU2cHhcIiBoZWlnaHQ9XCIzMi40OTVweFwiIHZpZXdCb3g9XCIwIC0yMyAxMzIuMDU2IDkzLjQ5NVwiXHJcbiAgICAgICAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIiBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIgfX0gPlxyXG4gICAgICAgICAgICA8bGluZSB4MT1cIjUuNzc1XCIgeTE9XCIzNS4zOTJcIiB4Mj1cIjEyOS45MjNcIiB5Mj1cIjM1LjM5MlwiIGNsYXNzTmFtZT1cInN0MSBvbmVcIiBzdHlsZT17e3N0cm9rZTogY29sb3IgPyBjb2xvcjpcImJsYWNrXCJ9fT48L2xpbmU+XHJcbiAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxMzAuNjk1LDM1Ljc0OCAxMjkuOTIzLDM0Ljk0MiA5Ny4wODUsMC43MTEgOTcuNDQ3LDAuMzU4IDg1LjA5OSwxMi40NjIgNjEuMzQ1LDM1Ljc0OCBcIiBjbGFzc05hbWU9XCJzdDEgdHdvXCIgc3R5bGU9e3tzdHJva2U6IGNvbG9yID8gY29sb3I6XCJibGFja1wifX0+PC9wb2x5bGluZT5cclxuICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEzMC42OTUsMzUuMjAyIDEyOS45MjMsMzYuMDE5IDk3LjA4NSw3MC43NzggOTcuNDQ3LDcxLjEzNyA4NS4wOTksNTguODQ2IDYxLjM0NSwzNS4yMDIgXCIgY2xhc3NOYW1lPVwic3QxIHRocmVlXCIgc3R5bGU9e3tzdHJva2U6IGNvbG9yID8gY29sb3I6XCJibGFja1wifX0+PC9wb2x5bGluZT5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFycm93cyJdLCJzb3VyY2VSb290IjoiIn0=