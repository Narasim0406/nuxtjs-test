webpackHotUpdate(15,{

/***/ "./components/designTemplate/index.js":
/*!********************************************!*\
  !*** ./components/designTemplate/index.js ***!
  \********************************************/
/*! exports provided: DesignTemplateBody, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignTemplateBody", function() { return DesignTemplateBody; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _datas_designTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../datas/designTemplate */ "./datas/designTemplate.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var AlternateTextContent = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../common/alternateTextContent */ "./components/common/alternateTextContent/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../common/alternateTextContent */ "./components/common/alternateTextContent/index.js")];
    },
    modules: ['../common/alternateTextContent']
  }
});
_c2 = AlternateTextContent;
var SecondaryBanner = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../common/secondaryBanner */ "./components/common/secondaryBanner/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../common/secondaryBanner */ "./components/common/secondaryBanner/index.js")];
    },
    modules: ['../common/secondaryBanner']
  }
});
_c4 = SecondaryBanner;
var TextContent = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c5 = function _c5() {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../common/textContent */ "./components/common/textContent/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../common/textContent */ "./components/common/textContent/index.js")];
    },
    modules: ['../common/textContent']
  }
});
_c6 = TextContent;
var FileList = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c7 = function _c7() {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../common/viewPage/fileList/index */ "./components/common/viewPage/fileList/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../common/viewPage/fileList/index */ "./components/common/viewPage/fileList/index.js")];
    },
    modules: ['../common/viewPage/fileList/index']
  }
});
_c8 = FileList;
var DesignTemplateBody = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DesignTemplateBody, _React$Component);

  var _super = _createSuper(DesignTemplateBody);

  function DesignTemplateBody(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DesignTemplateBody);

    _this = _super.call(this, props);
    _this.state = {
      snippet_list: _datas_designTemplate__WEBPACK_IMPORTED_MODULE_6__["default"]["default"][0],
      page_name: "free-design-resources"
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DesignTemplateBody, [{
    key: "render",
    value: function render() {
      var titleText = "Design Templates";
      var subLineText = null;

      var lineText = __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, " ", "It is all about giving", " ", __jsx("br", null), " ", "We have got more to offer", " ");

      var pageDescription = "Access our assemblage of free, unique, and high-quality design Templates such as mobile app mockups, website templates, wireframes, dashboard designs, and much more. Keep yourself updated with the recent design trends and templates and save time building your next product.";
      var bannerImg = "DESIGNTEMP.png";
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
        className: "document-page"
      }, __jsx(SecondaryBanner, {
        link1: this.state.page_name,
        currentPage: titleText,
        lineText: lineText,
        bannerImg: bannerImg
      }), __jsx("div", {
        className: "container text-center"
      }, __jsx(TextContent, {
        title: titleText,
        text1: pageDescription
      }), __jsx("div", {
        className: "col-md-10 offset-md-1 col-sm-12"
      }, __jsx(FileList, {
        listData: this.state.snippet_list,
        pageName: this.state.page_name
      }))), __jsx(AlternateTextContent, null)));
    }
  }]);

  return DesignTemplateBody;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (DesignTemplateBody);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "AlternateTextContent$dynamic");
$RefreshReg$(_c2, "AlternateTextContent");
$RefreshReg$(_c3, "SecondaryBanner$dynamic");
$RefreshReg$(_c4, "SecondaryBanner");
$RefreshReg$(_c5, "TextContent$dynamic");
$RefreshReg$(_c6, "TextContent");
$RefreshReg$(_c7, "FileList$dynamic");
$RefreshReg$(_c8, "FileList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rlc2lnblRlbXBsYXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFsdGVybmF0ZVRleHRDb250ZW50IiwiZHluYW1pYyIsIlNlY29uZGFyeUJhbm5lciIsIlRleHRDb250ZW50IiwiRmlsZUxpc3QiLCJEZXNpZ25UZW1wbGF0ZUJvZHkiLCJwcm9wcyIsInN0YXRlIiwic25pcHBldF9saXN0IiwiZGVzaWduVGVtcGxhdGUiLCJwYWdlX25hbWUiLCJ0aXRsZVRleHQiLCJzdWJMaW5lVGV4dCIsImxpbmVUZXh0IiwicGFnZURlc2NyaXB0aW9uIiwiYmFubmVySW1nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNFLElBQU1BLG9CQUFvQixHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSx3S0FBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMseUZBQWQ7QUFBQTtBQUFBLGNBQWMsZ0NBQWQ7QUFBQTtBQUFBLEVBQXBDO01BQU1ELG9CO0FBQ04sSUFBTUUsZUFBZSxHQUFHRCxtREFBTyxPQUFDO0FBQUEsU0FBTSw4SkFBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsK0VBQWQ7QUFBQTtBQUFBLGNBQWMsMkJBQWQ7QUFBQTtBQUFBLEVBQS9CO01BQU1DLGU7QUFDTixJQUFNQyxXQUFXLEdBQUdGLG1EQUFPLE9BQUM7QUFBQSxTQUFNLHNKQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyx1RUFBZDtBQUFBO0FBQUEsY0FBYyx1QkFBZDtBQUFBO0FBQUEsRUFBM0I7TUFBTUUsVztBQUNOLElBQU1DLFFBQVEsR0FBR0gsbURBQU8sT0FBQztBQUFBLFNBQU0sd0tBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLHlGQUFkO0FBQUE7QUFBQSxjQUFjLG1DQUFkO0FBQUE7QUFBQSxFQUF4QjtNQUFNRyxRO0FBRUQsSUFBTUMsa0JBQWI7QUFBQTs7QUFBQTs7QUFDSSw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFZLEVBQUVDLDZEQUFjLFdBQWQsQ0FBdUIsQ0FBdkIsQ0FETDtBQUVUQyxlQUFTLEVBQUc7QUFGSCxLQUFiO0FBRmU7QUFNbEI7O0FBUEw7QUFBQTtBQUFBLDZCQVNXO0FBQ0gsVUFBTUMsU0FBUyxHQUFHLGtCQUFsQjtBQUNBLFVBQU1DLFdBQVcsR0FBRyxJQUFwQjs7QUFDQSxVQUFNQyxRQUFRLEdBQUksd0VBQUksd0JBQUosT0FBOEIsaUJBQTlCLE9BQXFDLDJCQUFyQyxNQUFsQjs7QUFDQSxVQUFNQyxlQUFlLHNSQUFyQjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxnQkFBbEI7QUFFQSxhQUNJLG1FQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksTUFBQyxlQUFEO0FBQ0ksYUFBSyxFQUFFLEtBQUtSLEtBQUwsQ0FBV0csU0FEdEI7QUFFSSxtQkFBVyxFQUFFQyxTQUZqQjtBQUdJLGdCQUFRLEVBQUVFLFFBSGQ7QUFJSSxpQkFBUyxFQUFFRTtBQUpmLFFBREosRUFRSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNBLE1BQUMsV0FBRDtBQUNJLGFBQUssRUFBRUosU0FEWDtBQUVJLGFBQUssRUFBRUc7QUFGWCxRQURBLEVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSxNQUFDLFFBQUQ7QUFFSSxnQkFBUSxFQUFFLEtBQUtQLEtBQUwsQ0FBV0MsWUFGekI7QUFHSSxnQkFBUSxFQUFFLEtBQUtELEtBQUwsQ0FBV0c7QUFIekIsUUFESixDQUxKLENBUkosRUF3QkksTUFBQyxvQkFBRCxPQXhCSixDQURKLENBREo7QUErQkg7QUEvQ0w7O0FBQUE7QUFBQSxFQUF3Q00sNENBQUssQ0FBQ0MsU0FBOUM7QUFpRGVaLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzE1LmZlYjQ2N2E5NTNmOWNjMjc0MTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgZGVzaWduVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2RhdGFzL2Rlc2lnblRlbXBsYXRlXCJcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG4gIGNvbnN0IEFsdGVybmF0ZVRleHRDb250ZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbW1vbi9hbHRlcm5hdGVUZXh0Q29udGVudCcpKVxyXG4gIGNvbnN0IFNlY29uZGFyeUJhbm5lciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21tb24vc2Vjb25kYXJ5QmFubmVyJykpXHJcbiAgY29uc3QgVGV4dENvbnRlbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tbW9uL3RleHRDb250ZW50JykpXHJcbiAgY29uc3QgRmlsZUxpc3QgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tbW9uL3ZpZXdQYWdlL2ZpbGVMaXN0L2luZGV4JykpXHJcblxyXG5leHBvcnQgY2xhc3MgRGVzaWduVGVtcGxhdGVCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNuaXBwZXRfbGlzdCA6ZGVzaWduVGVtcGxhdGUuZGVmYXVsdFswXSxcclxuICAgICAgICAgICAgcGFnZV9uYW1lIDogXCJmcmVlLWRlc2lnbi1yZXNvdXJjZXNcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IFwiRGVzaWduIFRlbXBsYXRlc1wiO1xyXG4gICAgICAgIGNvbnN0IHN1YkxpbmVUZXh0ID0gbnVsbDtcclxuICAgICAgICBjb25zdCBsaW5lVGV4dCA9ICg8PiB7XCJJdCBpcyBhbGwgYWJvdXQgZ2l2aW5nXCJ9IDxici8+IHtcIldlIGhhdmUgZ290IG1vcmUgdG8gb2ZmZXJcIn0gPC8+KTtcclxuICAgICAgICBjb25zdCBwYWdlRGVzY3JpcHRpb24gPSBgQWNjZXNzIG91ciBhc3NlbWJsYWdlIG9mIGZyZWUsIHVuaXF1ZSwgYW5kIGhpZ2gtcXVhbGl0eSBkZXNpZ24gVGVtcGxhdGVzIHN1Y2ggYXMgbW9iaWxlIGFwcCBtb2NrdXBzLCB3ZWJzaXRlIHRlbXBsYXRlcywgd2lyZWZyYW1lcywgZGFzaGJvYXJkIGRlc2lnbnMsIGFuZCBtdWNoIG1vcmUuIEtlZXAgeW91cnNlbGYgdXBkYXRlZCB3aXRoIHRoZSByZWNlbnQgZGVzaWduIHRyZW5kcyBhbmQgdGVtcGxhdGVzIGFuZCBzYXZlIHRpbWUgYnVpbGRpbmcgeW91ciBuZXh0IHByb2R1Y3QuYDtcclxuICAgICAgICBjb25zdCBiYW5uZXJJbWcgPSBcIkRFU0lHTlRFTVAucG5nXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdW1lbnQtcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWNvbmRhcnlCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazE9e3RoaXMuc3RhdGUucGFnZV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17dGl0bGVUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGV4dD17bGluZVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lckltZz17YmFubmVySW1nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRlbnQgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGVUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0MT17cGFnZURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIG9mZnNldC1tZC0xIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0RGF0YT17dGhpcy5zdGF0ZS5zbmlwcGV0X2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWU9e3RoaXMuc3RhdGUucGFnZV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QWx0ZXJuYXRlVGV4dENvbnRlbnQvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERlc2lnblRlbXBsYXRlQm9keSJdLCJzb3VyY2VSb290IjoiIn0=