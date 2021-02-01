(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./components/code/section/index.js":
/*!******************************************!*\
  !*** ./components/code/section/index.js ***!
  \******************************************/
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
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../../common/secondaryBanner */ "./components/common/secondaryBanner/index.js"));
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
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../middleContent/index */ "./components/code/middleContent/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../middleContent/index */ "./components/code/middleContent/index.js")];
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
      categoryList: [{
        title: "CSS/HTML",
        subTitleText: "Search through our collection of CSS and HTML downloads to help you build impressive websites.",
        icon: "computer-4 1.svg",
        link: "/code-snippets-download"
      }, {
        title: "FLASH",
        subTitleText: "Create interactive websites and blogs with our easy to download and use code.",
        icon: "computer-4 1.svg",
        link: "/free-icons"
      }, {
        title: "LAYOUT & STYLING",
        subTitleText: "Build responsive layouts with notable styling using our selection of code downloads.",
        icon: "landing-page 1.svg",
        link: "/animated-icons"
      }, {
        title: "NAVIGATION",
        subTitleText: "Use our downloads to design and build navigation styles that unique and interesting for users.",
        icon: "coding 1 (1).svg",
        link: "/free-design-resources/mobilemockup"
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
      var titleText = "Code";
      var subLineText = null;

      var lineText = __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, " ", "EXPLORE. BUILD. SHARE.", " ", __jsx("br", null), " ", " CODE WITH EASE.", " ");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvZGUvc2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJuYW1lcyI6WyJBbHRlcm5hdGVUZXh0Q29udGVudCIsImR5bmFtaWMiLCJTZWNvbmRhcnlCYW5uZXIiLCJNaWRkbGVDb250ZW50IiwiU2VjdGlvbiIsInByb3BzIiwic3RhdGUiLCJ0ZXh0MSIsInRleHQyIiwidGV4dDMiLCJ0ZXh0NCIsInRleHQ1IiwiY2F0ZWdvcnlMaXN0IiwidGl0bGUiLCJzdWJUaXRsZVRleHQiLCJpY29uIiwibGluayIsImJhbm5lckltZyIsInRpdGxlVGV4dCIsInN1YkxpbmVUZXh0IiwibGluZVRleHQi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Q25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBOEM7QUFDL0I7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQiwrREFBYztBQUNoQyxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNhO0FBQzdDO0FBQ2YsZUFBZSxtRUFBTztBQUN0QjtBQUNBOztBQUVBLFNBQVMsc0VBQXFCO0FBQzlCLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5cclxuICBjb25zdCBBbHRlcm5hdGVUZXh0Q29udGVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21tb24vYWx0ZXJuYXRlVGV4dENvbnRlbnQnKSlcclxuICBjb25zdCBTZWNvbmRhcnlCYW5uZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tbW9uL3NlY29uZGFyeUJhbm5lcicpKVxyXG4gIGNvbnN0IE1pZGRsZUNvbnRlbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vbWlkZGxlQ29udGVudC9pbmRleCcpKVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIHRleHQxOlwiRnJlZWJpZXMgaXMgYSBjcmVhdGl2ZSBhcHByb2FjaCBmcm9tIGRvb2RsZWJsdWUgdG8gZ2l2ZSBvdXIgdXNlcnMgdGhlIGZyZWVkb20gdG8gZXhwbG9yZSB0aHJvdWdoIG91ciB2YXJpZXR5IG9mIGl0ZW1zIHRoYXQgdGhleSBjYW4gdXNlIGZvciB0aGVpciBwcm9kdWN0cy4gWW91IGNhbiBjaG9vc2UgZnJvbSB2YXJpb3VzIG9wdGlvbnMgc3VjaCBhcyBpY29ucywgd2lyZWZyYW1lcywgY29kZSBzbmlwcGV0cywgcHJvamVjdCBkb2N1bWVudHMgYW5kIG11Y2ggbW9yZS4gQnJvd3NlIHRocm91Z2ggb3VyIHdpZGUgcmFuZ2Ugb2YgZWxlbWVudHMgdG8gc3VwcG9ydCB5b3VyIHByb2R1Y3RzLlwiLFxyXG4gICAgdGV4dDI6XCJJdCBjb3VsZCBiZSBhbnl0aGluZyBmb3IgeW91ciBkaWdpdGFsIGJ1c2luZXNzIG5lZWRzLCBldmVuIGlmIHlvdSB3ZXJlIHR1cm5lZCBkb3duIGJ5IG90aGVycy5cIixcclxuICAgIHRleHQzOlwiVGlyZWQgb2YgTm9ybWFsY3k/XCIsXHJcbiAgICB0ZXh0NDpcIkJ1Y2tsZSB1cCEgV2UgaGF2ZSBhbGwgaXQgdGFrZXMgdG8gcHJvdmUgZXhjZWxsZW5jZS4gWW91IGRvbuKAmXQgYmVsaWV2ZSB1cz9cIixcclxuICAgIHRleHQ1OlwiRmluZCBvdXQgbm93IVwiLFxyXG4gICAgY2F0ZWdvcnlMaXN0OltcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTpcIkNTUy9IVE1MXCIsXHJcbiAgICAgICAgICBzdWJUaXRsZVRleHQ6XCJTZWFyY2ggdGhyb3VnaCBvdXIgY29sbGVjdGlvbiBvZiBDU1MgYW5kIEhUTUwgZG93bmxvYWRzIHRvIGhlbHAgeW91IGJ1aWxkIGltcHJlc3NpdmUgd2Vic2l0ZXMuXCIsXHJcbiAgICAgICAgICBpY29uOlwiY29tcHV0ZXItNCAxLnN2Z1wiLFxyXG4gICAgICAgICAgbGluazpcIi9jb2RlLXNuaXBwZXRzLWRvd25sb2FkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOlwiRkxBU0hcIixcclxuICAgICAgICAgIHN1YlRpdGxlVGV4dDpcIkNyZWF0ZSBpbnRlcmFjdGl2ZSB3ZWJzaXRlcyBhbmQgYmxvZ3Mgd2l0aCBvdXIgZWFzeSB0byBkb3dubG9hZCBhbmQgdXNlIGNvZGUuXCIsXHJcbiAgICAgICAgICBpY29uOlwiY29tcHV0ZXItNCAxLnN2Z1wiLFxyXG4gICAgICAgICAgbGluazpcIi9mcmVlLWljb25zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOlwiTEFZT1VUICYgU1RZTElOR1wiLFxyXG4gICAgICAgICAgc3ViVGl0bGVUZXh0OlwiQnVpbGQgcmVzcG9uc2l2ZSBsYXlvdXRzIHdpdGggbm90YWJsZSBzdHlsaW5nIHVzaW5nIG91ciBzZWxlY3Rpb24gb2YgY29kZSBkb3dubG9hZHMuXCIsXHJcbiAgICAgICAgICBpY29uOlwibGFuZGluZy1wYWdlIDEuc3ZnXCIsXHJcbiAgICAgICAgICBsaW5rOlwiL2FuaW1hdGVkLWljb25zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOlwiTkFWSUdBVElPTlwiLFxyXG4gICAgICAgICAgc3ViVGl0bGVUZXh0OlwiVXNlIG91ciBkb3dubG9hZHMgdG8gZGVzaWduIGFuZCBidWlsZCBuYXZpZ2F0aW9uIHN0eWxlcyB0aGF0IHVuaXF1ZSBhbmQgaW50ZXJlc3RpbmcgZm9yIHVzZXJzLlwiLFxyXG4gICAgICAgICAgaWNvbjpcImNvZGluZyAxICgxKS5zdmdcIixcclxuICAgICAgICAgIGxpbms6XCIvZnJlZS1kZXNpZ24tcmVzb3VyY2VzL21vYmlsZW1vY2t1cFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgXVxyXG5cclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgY2F0ZWdvcnlMaXN0fSA9IHRoaXMuc3RhdGVcclxuICAgIC8vIGxldCB7Y2F0ZWdvcnlMaXN0fSA9IHRoaXMucHJvcHNcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY2F0ZWdvcnlMaXN0LFwiQ2F0ZWdvcnlMaXN0XCIpXHJcbiAgICBjb25zdCBiYW5uZXJJbWcgPSBcIklDT05CQU5ORVIucG5nXCI7XHJcbiAgICBjb25zdCB0aXRsZVRleHQgPSBcIkNvZGVcIjtcclxuICAgIGNvbnN0IHN1YkxpbmVUZXh0ID0gbnVsbDtcclxuICAgIGNvbnN0IGxpbmVUZXh0ID0gKDw+IHtcIkVYUExPUkUuIEJVSUxELiBTSEFSRS5cIn0gPGJyLz4ge1wiIENPREUgV0lUSCBFQVNFLlwifSA8Lz4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgPFNlY29uZGFyeUJhbm5lciBcclxuICAgICAgc2VsZWN0RGF0YT17dGl0bGVUZXh0fVxyXG4gICAgICBsaW5lVGV4dD17bGluZVRleHR9XHJcbiAgICAgIGJhbm5lckltZz17YmFubmVySW1nfVxyXG4gICAgICAvPlxyXG4gICAgICBcclxuICAgICAgICA8TWlkZGxlQ29udGVudCBjYXRlZ29yeUxpc3Q9e2NhdGVnb3J5TGlzdH0vPlxyXG4gICAgICAgIHsvKiA8QWx0ZXJuYXRlVGV4dENvbnRlbnQvPiAqL31cclxuICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgXHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4uLy4uL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSJdLCJzb3VyY2VSb290IjoiIn0=