webpackHotUpdate(19,{

/***/ "./components/design/section/index.js":
/*!********************************************!*\
  !*** ./components/design/section/index.js ***!
  \********************************************/
/*! exports provided: Section, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var AlternateTextContent = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../common/alternateTextContent */ "./components/common/alternateTextContent/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../common/alternateTextContent */ "./components/common/alternateTextContent/index.js")];
    },
    modules: ['../../common/alternateTextContent']
  }
});
_c2 = AlternateTextContent;
var SecondaryBanner = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../../common/secondaryBanner */ "./components/common/secondaryBanner/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../common/secondaryBanner */ "./components/common/secondaryBanner/index.js")];
    },
    modules: ['../../common/secondaryBanner']
  }
});
_c4 = SecondaryBanner;
var MiddleContent = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c5 = function _c5() {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../middleContent/index */ "./components/design/middleContent/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../middleContent/index */ "./components/design/middleContent/index.js")];
    },
    modules: ['../middleContent/index']
  }
});
_c6 = MiddleContent;
var Section = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Section, _React$Component);

  var _super = _createSuper(Section);

  function Section(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Section);

    _this = _super.call(this, props);
    _this.state = {
      text1: "Freebies is a creative approach from doodleblue to give our users the freedom to explore through our variety of items that they can use for their products. You can choose from various options such as icons, wireframes, code snippets, project documents and much more. Browse through our wide range of elements to support your products.",
      text2: "It could be anything for your digital business needs, even if you were turned down by others.",
      text3: "Tired of Normalcy?",
      text4: "Buckle up! We have all it takes to prove excellence. You don’t believe us?",
      text5: "Find out now!",
      categoryList: [// {
      //   title:"GRAPHICS",
      //   subTitleText:"Explore unique graphics that can used for social media, websites or any design project.",
      //   icon:"designIcon.svg",
      //   link:"/free-icons"
      // },
      {
        title: "ICONS",
        subTitleText: "Choose from a range of icons to design distinctive infographics, logos and much more.",
        icon: "designIcon.svg",
        link: "/free-icons"
      }, {
        title: "GIFS",
        subTitleText: "Add a little extra pizazz to your project with unique and specially designed GIFS.",
        icon: "gif 1.svg",
        link: "/animated-icons"
      }, {
        title: "MOCK UPS",
        subTitleText: "Sift through our range of pixel-perfect mockups for any design presentation.",
        icon: "app 1.svg",
        link: "/free-design-resources/mobilemockup"
      }, {
        title: "TEMPLATES",
        subTitleText: "Use our selection of templates to design presentations, infographics, webpages and more.",
        icon: "artboard 1.svg",
        link: "/free-design-resources/mobiletemplate"
      }]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Section, [{
    key: "render",
    value: function render() {
      var categoryList = this.state.categoryList; // let {categoryList} = this.props
      // console.log(this.props.categoryList,"CategoryList")

      var bannerImg = "ICONBANNER.png";
      var titleText = "Design";
      var subLineText = null;

      var lineText = __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, " ", "EXPLORE. CREATE. SHARE.", " ", __jsx("br", null), " ", " DESIGN WITH EASE.", " ");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
        className: "bg-white"
      }, __jsx(SecondaryBanner, {
        selectData: titleText,
        lineText: lineText,
        bannerImg: bannerImg
      }), __jsx(MiddleContent, {
        categoryList: categoryList
      })));
    }
  }]);

  return Section;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
;
/* harmony default export */ __webpack_exports__["default"] = (Section);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "AlternateTextContent$dynamic");
$RefreshReg$(_c2, "AlternateTextContent");
$RefreshReg$(_c3, "SecondaryBanner$dynamic");
$RefreshReg$(_c4, "SecondaryBanner");
$RefreshReg$(_c5, "MiddleContent$dynamic");
$RefreshReg$(_c6, "MiddleContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rlc2lnbi9zZWN0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFsdGVybmF0ZVRleHRDb250ZW50IiwiZHluYW1pYyIsIlNlY29uZGFyeUJhbm5lciIsIk1pZGRsZUNvbnRlbnQiLCJTZWN0aW9uIiwicHJvcHMiLCJzdGF0ZSIsInRleHQxIiwidGV4dDIiLCJ0ZXh0MyIsInRleHQ0IiwidGV4dDUiLCJjYXRlZ29yeUxpc3QiLCJ0aXRsZSIsInN1YlRpdGxlVGV4dCIsImljb24iLCJsaW5rIiwiYmFubmVySW1nIiwidGl0bGVUZXh0Iiwic3ViTGluZVRleHQiLCJsaW5lVGV4dCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFRSxJQUFNQSxvQkFBb0IsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sMktBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDRGQUFkO0FBQUE7QUFBQSxjQUFjLG1DQUFkO0FBQUE7QUFBQSxFQUFwQztNQUFNRCxvQjtBQUNOLElBQU1FLGVBQWUsR0FBR0QsbURBQU8sT0FBQztBQUFBLFNBQU0saUtBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLGtGQUFkO0FBQUE7QUFBQSxjQUFjLDhCQUFkO0FBQUE7QUFBQSxFQUEvQjtNQUFNQyxlO0FBQ04sSUFBTUMsYUFBYSxHQUFHRixtREFBTyxPQUFDO0FBQUEsU0FBTSx5SkFBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsMEVBQWQ7QUFBQTtBQUFBLGNBQWMsd0JBQWQ7QUFBQTtBQUFBLEVBQTdCO01BQU1FLGE7QUFFRCxJQUFNQyxPQUFiO0FBQUE7O0FBQUE7O0FBQ0UsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDRixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFDLGdWQURLO0FBRVhDLFdBQUssRUFBQywrRkFGSztBQUdYQyxXQUFLLEVBQUMsb0JBSEs7QUFJWEMsV0FBSyxFQUFDLDRFQUpLO0FBS1hDLFdBQUssRUFBQyxlQUxLO0FBTVhDLGtCQUFZLEVBQUMsQ0FDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFQyxhQUFLLEVBQUMsT0FEUjtBQUVFQyxvQkFBWSxFQUFDLHVGQUZmO0FBR0VDLFlBQUksRUFBQyxnQkFIUDtBQUlFQyxZQUFJLEVBQUM7QUFKUCxPQVBTLEVBYVQ7QUFDRUgsYUFBSyxFQUFDLE1BRFI7QUFFRUMsb0JBQVksRUFBQyxvRkFGZjtBQUdFQyxZQUFJLEVBQUMsV0FIUDtBQUlFQyxZQUFJLEVBQUM7QUFKUCxPQWJTLEVBbUJUO0FBQ0VILGFBQUssRUFBQyxVQURSO0FBRUVDLG9CQUFZLEVBQUMsOEVBRmY7QUFHRUMsWUFBSSxFQUFDLFdBSFA7QUFJRUMsWUFBSSxFQUFDO0FBSlAsT0FuQlMsRUF5QlQ7QUFDRUgsYUFBSyxFQUFDLFdBRFI7QUFFRUMsb0JBQVksRUFBQywwRkFGZjtBQUdFQyxZQUFJLEVBQUMsZ0JBSFA7QUFJRUMsWUFBSSxFQUFDO0FBSlAsT0F6QlM7QUFORixLQUFiO0FBRm1CO0FBMENsQjs7QUEzQ0g7QUFBQTtBQUFBLDZCQTRDVztBQUFBLFVBQ0RKLFlBREMsR0FDZSxLQUFLTixLQURwQixDQUNETSxZQURDLEVBRVA7QUFDQTs7QUFDQSxVQUFNSyxTQUFTLEdBQUcsZ0JBQWxCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHLFFBQWxCO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLElBQXBCOztBQUNBLFVBQU1DLFFBQVEsR0FBSSx3RUFBSSx5QkFBSixPQUErQixpQkFBL0IsT0FBc0Msb0JBQXRDLE1BQWxCOztBQUVBLGFBQ0UsbUVBQ0E7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQSxNQUFDLGVBQUQ7QUFDQSxrQkFBVSxFQUFFRixTQURaO0FBRUEsZ0JBQVEsRUFBRUUsUUFGVjtBQUdBLGlCQUFTLEVBQUVIO0FBSFgsUUFEQSxFQU9FLE1BQUMsYUFBRDtBQUFlLG9CQUFZLEVBQUVMO0FBQTdCLFFBUEYsQ0FEQSxDQURGO0FBZUQ7QUFwRUg7O0FBQUE7QUFBQSxFQUE2QlMsNENBQUssQ0FBQ0MsU0FBbkM7QUFxRUM7QUFDY2xCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzE5LjAyY2IyYTM1ZWM2ZTMwODZkZDJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuXHJcbiAgY29uc3QgQWx0ZXJuYXRlVGV4dENvbnRlbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tbW9uL2FsdGVybmF0ZVRleHRDb250ZW50JykpXHJcbiAgY29uc3QgU2Vjb25kYXJ5QmFubmVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbW1vbi9zZWNvbmRhcnlCYW5uZXInKSlcclxuICBjb25zdCBNaWRkbGVDb250ZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL21pZGRsZUNvbnRlbnQvaW5kZXgnKSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIHRoaXMuc3RhdGUgPSB7XHJcbiAgICB0ZXh0MTpcIkZyZWViaWVzIGlzIGEgY3JlYXRpdmUgYXBwcm9hY2ggZnJvbSBkb29kbGVibHVlIHRvIGdpdmUgb3VyIHVzZXJzIHRoZSBmcmVlZG9tIHRvIGV4cGxvcmUgdGhyb3VnaCBvdXIgdmFyaWV0eSBvZiBpdGVtcyB0aGF0IHRoZXkgY2FuIHVzZSBmb3IgdGhlaXIgcHJvZHVjdHMuIFlvdSBjYW4gY2hvb3NlIGZyb20gdmFyaW91cyBvcHRpb25zIHN1Y2ggYXMgaWNvbnMsIHdpcmVmcmFtZXMsIGNvZGUgc25pcHBldHMsIHByb2plY3QgZG9jdW1lbnRzIGFuZCBtdWNoIG1vcmUuIEJyb3dzZSB0aHJvdWdoIG91ciB3aWRlIHJhbmdlIG9mIGVsZW1lbnRzIHRvIHN1cHBvcnQgeW91ciBwcm9kdWN0cy5cIixcclxuICAgIHRleHQyOlwiSXQgY291bGQgYmUgYW55dGhpbmcgZm9yIHlvdXIgZGlnaXRhbCBidXNpbmVzcyBuZWVkcywgZXZlbiBpZiB5b3Ugd2VyZSB0dXJuZWQgZG93biBieSBvdGhlcnMuXCIsXHJcbiAgICB0ZXh0MzpcIlRpcmVkIG9mIE5vcm1hbGN5P1wiLFxyXG4gICAgdGV4dDQ6XCJCdWNrbGUgdXAhIFdlIGhhdmUgYWxsIGl0IHRha2VzIHRvIHByb3ZlIGV4Y2VsbGVuY2UuIFlvdSBkb27igJl0IGJlbGlldmUgdXM/XCIsXHJcbiAgICB0ZXh0NTpcIkZpbmQgb3V0IG5vdyFcIixcclxuICAgIGNhdGVnb3J5TGlzdDpbXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgdGl0bGU6XCJHUkFQSElDU1wiLFxyXG4gICAgICAgIC8vICAgc3ViVGl0bGVUZXh0OlwiRXhwbG9yZSB1bmlxdWUgZ3JhcGhpY3MgdGhhdCBjYW4gdXNlZCBmb3Igc29jaWFsIG1lZGlhLCB3ZWJzaXRlcyBvciBhbnkgZGVzaWduIHByb2plY3QuXCIsXHJcbiAgICAgICAgLy8gICBpY29uOlwiZGVzaWduSWNvbi5zdmdcIixcclxuICAgICAgICAvLyAgIGxpbms6XCIvZnJlZS1pY29uc1wiXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTpcIklDT05TXCIsXHJcbiAgICAgICAgICBzdWJUaXRsZVRleHQ6XCJDaG9vc2UgZnJvbSBhIHJhbmdlIG9mIGljb25zIHRvIGRlc2lnbiBkaXN0aW5jdGl2ZSBpbmZvZ3JhcGhpY3MsIGxvZ29zIGFuZCBtdWNoIG1vcmUuXCIsXHJcbiAgICAgICAgICBpY29uOlwiZGVzaWduSWNvbi5zdmdcIixcclxuICAgICAgICAgIGxpbms6XCIvZnJlZS1pY29uc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTpcIkdJRlNcIixcclxuICAgICAgICAgIHN1YlRpdGxlVGV4dDpcIkFkZCBhIGxpdHRsZSBleHRyYSBwaXphenogdG8geW91ciBwcm9qZWN0IHdpdGggdW5pcXVlIGFuZCBzcGVjaWFsbHkgZGVzaWduZWQgR0lGUy5cIixcclxuICAgICAgICAgIGljb246XCJnaWYgMS5zdmdcIixcclxuICAgICAgICAgIGxpbms6XCIvYW5pbWF0ZWQtaWNvbnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6XCJNT0NLIFVQU1wiLFxyXG4gICAgICAgICAgc3ViVGl0bGVUZXh0OlwiU2lmdCB0aHJvdWdoIG91ciByYW5nZSBvZiBwaXhlbC1wZXJmZWN0IG1vY2t1cHMgZm9yIGFueSBkZXNpZ24gcHJlc2VudGF0aW9uLlwiLFxyXG4gICAgICAgICAgaWNvbjpcImFwcCAxLnN2Z1wiLFxyXG4gICAgICAgICAgbGluazpcIi9mcmVlLWRlc2lnbi1yZXNvdXJjZXMvbW9iaWxlbW9ja3VwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOlwiVEVNUExBVEVTXCIsXHJcbiAgICAgICAgICBzdWJUaXRsZVRleHQ6XCJVc2Ugb3VyIHNlbGVjdGlvbiBvZiB0ZW1wbGF0ZXMgdG8gZGVzaWduIHByZXNlbnRhdGlvbnMsIGluZm9ncmFwaGljcywgd2VicGFnZXMgYW5kIG1vcmUuXCIsXHJcbiAgICAgICAgICBpY29uOlwiYXJ0Ym9hcmQgMS5zdmdcIixcclxuICAgICAgICAgIGxpbms6XCIvZnJlZS1kZXNpZ24tcmVzb3VyY2VzL21vYmlsZXRlbXBsYXRlXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IGNhdGVnb3J5TGlzdH0gPSB0aGlzLnN0YXRlXHJcbiAgICAvLyBsZXQge2NhdGVnb3J5TGlzdH0gPSB0aGlzLnByb3BzXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNhdGVnb3J5TGlzdCxcIkNhdGVnb3J5TGlzdFwiKVxyXG4gICAgY29uc3QgYmFubmVySW1nID0gXCJJQ09OQkFOTkVSLnBuZ1wiO1xyXG4gICAgY29uc3QgdGl0bGVUZXh0ID0gXCJEZXNpZ25cIjtcclxuICAgIGNvbnN0IHN1YkxpbmVUZXh0ID0gbnVsbDtcclxuICAgIGNvbnN0IGxpbmVUZXh0ID0gKDw+IHtcIkVYUExPUkUuIENSRUFURS4gU0hBUkUuXCJ9IDxici8+IHtcIiBERVNJR04gV0lUSCBFQVNFLlwifSA8Lz4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgPFNlY29uZGFyeUJhbm5lciBcclxuICAgICAgc2VsZWN0RGF0YT17dGl0bGVUZXh0fVxyXG4gICAgICBsaW5lVGV4dD17bGluZVRleHR9XHJcbiAgICAgIGJhbm5lckltZz17YmFubmVySW1nfVxyXG4gICAgICAvPlxyXG4gICAgICBcclxuICAgICAgICA8TWlkZGxlQ29udGVudCBjYXRlZ29yeUxpc3Q9e2NhdGVnb3J5TGlzdH0vPlxyXG4gICAgICAgIHsvKiA8QWx0ZXJuYXRlVGV4dENvbnRlbnQvPiAqL31cclxuICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgXHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==