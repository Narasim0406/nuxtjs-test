(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rlc2lnbi9zZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkFsdGVybmF0ZVRleHRDb250ZW50IiwiZHluYW1pYyIsIlNlY29uZGFyeUJhbm5lciIsIk1pZGRsZUNvbnRlbnQiLCJTZWN0aW9uIiwicHJvcHMiLCJzdGF0ZSIsInRleHQxIiwidGV4dDIiLCJ0ZXh0MyIsInRleHQ0IiwidGV4dDUiLCJjYXRlZ29yeUxpc3QiLCJ0aXRsZSIsInN1YlRpdGxlVGV4dCIsImljb24iLCJsaW5rIiwiYmFubmVySW1nIiwidGl0bGVUZXh0Iiwic3ViTGluZVRleHQiLCJsaW5lVGV4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QUFBQTtBQUFBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQThDO0FBQy9CO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQkFBa0IsK0RBQWM7QUFDaEMsQzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDYTtBQUM3QztBQUNmLGVBQWUsbUVBQU87QUFDdEI7QUFDQTs7QUFFQSxTQUFTLHNFQUFxQjtBQUM5QixDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcblxyXG4gIGNvbnN0IEFsdGVybmF0ZVRleHRDb250ZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbW1vbi9hbHRlcm5hdGVUZXh0Q29udGVudCcpKVxyXG4gIGNvbnN0IFNlY29uZGFyeUJhbm5lciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21tb24vc2Vjb25kYXJ5QmFubmVyJykpXHJcbiAgY29uc3QgTWlkZGxlQ29udGVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9taWRkbGVDb250ZW50L2luZGV4JykpXHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB0aGlzLnN0YXRlID0ge1xyXG4gICAgdGV4dDE6XCJGcmVlYmllcyBpcyBhIGNyZWF0aXZlIGFwcHJvYWNoIGZyb20gZG9vZGxlYmx1ZSB0byBnaXZlIG91ciB1c2VycyB0aGUgZnJlZWRvbSB0byBleHBsb3JlIHRocm91Z2ggb3VyIHZhcmlldHkgb2YgaXRlbXMgdGhhdCB0aGV5IGNhbiB1c2UgZm9yIHRoZWlyIHByb2R1Y3RzLiBZb3UgY2FuIGNob29zZSBmcm9tIHZhcmlvdXMgb3B0aW9ucyBzdWNoIGFzIGljb25zLCB3aXJlZnJhbWVzLCBjb2RlIHNuaXBwZXRzLCBwcm9qZWN0IGRvY3VtZW50cyBhbmQgbXVjaCBtb3JlLiBCcm93c2UgdGhyb3VnaCBvdXIgd2lkZSByYW5nZSBvZiBlbGVtZW50cyB0byBzdXBwb3J0IHlvdXIgcHJvZHVjdHMuXCIsXHJcbiAgICB0ZXh0MjpcIkl0IGNvdWxkIGJlIGFueXRoaW5nIGZvciB5b3VyIGRpZ2l0YWwgYnVzaW5lc3MgbmVlZHMsIGV2ZW4gaWYgeW91IHdlcmUgdHVybmVkIGRvd24gYnkgb3RoZXJzLlwiLFxyXG4gICAgdGV4dDM6XCJUaXJlZCBvZiBOb3JtYWxjeT9cIixcclxuICAgIHRleHQ0OlwiQnVja2xlIHVwISBXZSBoYXZlIGFsbCBpdCB0YWtlcyB0byBwcm92ZSBleGNlbGxlbmNlLiBZb3UgZG9u4oCZdCBiZWxpZXZlIHVzP1wiLFxyXG4gICAgdGV4dDU6XCJGaW5kIG91dCBub3chXCIsXHJcbiAgICBjYXRlZ29yeUxpc3Q6W1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgIHRpdGxlOlwiR1JBUEhJQ1NcIixcclxuICAgICAgICAvLyAgIHN1YlRpdGxlVGV4dDpcIkV4cGxvcmUgdW5pcXVlIGdyYXBoaWNzIHRoYXQgY2FuIHVzZWQgZm9yIHNvY2lhbCBtZWRpYSwgd2Vic2l0ZXMgb3IgYW55IGRlc2lnbiBwcm9qZWN0LlwiLFxyXG4gICAgICAgIC8vICAgaWNvbjpcImRlc2lnbkljb24uc3ZnXCIsXHJcbiAgICAgICAgLy8gICBsaW5rOlwiL2ZyZWUtaWNvbnNcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6XCJJQ09OU1wiLFxyXG4gICAgICAgICAgc3ViVGl0bGVUZXh0OlwiQ2hvb3NlIGZyb20gYSByYW5nZSBvZiBpY29ucyB0byBkZXNpZ24gZGlzdGluY3RpdmUgaW5mb2dyYXBoaWNzLCBsb2dvcyBhbmQgbXVjaCBtb3JlLlwiLFxyXG4gICAgICAgICAgaWNvbjpcImRlc2lnbkljb24uc3ZnXCIsXHJcbiAgICAgICAgICBsaW5rOlwiL2ZyZWUtaWNvbnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6XCJHSUZTXCIsXHJcbiAgICAgICAgICBzdWJUaXRsZVRleHQ6XCJBZGQgYSBsaXR0bGUgZXh0cmEgcGl6YXp6IHRvIHlvdXIgcHJvamVjdCB3aXRoIHVuaXF1ZSBhbmQgc3BlY2lhbGx5IGRlc2lnbmVkIEdJRlMuXCIsXHJcbiAgICAgICAgICBpY29uOlwiZ2lmIDEuc3ZnXCIsXHJcbiAgICAgICAgICBsaW5rOlwiL2FuaW1hdGVkLWljb25zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOlwiTU9DSyBVUFNcIixcclxuICAgICAgICAgIHN1YlRpdGxlVGV4dDpcIlNpZnQgdGhyb3VnaCBvdXIgcmFuZ2Ugb2YgcGl4ZWwtcGVyZmVjdCBtb2NrdXBzIGZvciBhbnkgZGVzaWduIHByZXNlbnRhdGlvbi5cIixcclxuICAgICAgICAgIGljb246XCJhcHAgMS5zdmdcIixcclxuICAgICAgICAgIGxpbms6XCIvZnJlZS1kZXNpZ24tcmVzb3VyY2VzL21vYmlsZW1vY2t1cFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTpcIlRFTVBMQVRFU1wiLFxyXG4gICAgICAgICAgc3ViVGl0bGVUZXh0OlwiVXNlIG91ciBzZWxlY3Rpb24gb2YgdGVtcGxhdGVzIHRvIGRlc2lnbiBwcmVzZW50YXRpb25zLCBpbmZvZ3JhcGhpY3MsIHdlYnBhZ2VzIGFuZCBtb3JlLlwiLFxyXG4gICAgICAgICAgaWNvbjpcImFydGJvYXJkIDEuc3ZnXCIsXHJcbiAgICAgICAgICBsaW5rOlwiL2ZyZWUtZGVzaWduLXJlc291cmNlcy9tb2JpbGV0ZW1wbGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcblxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBjYXRlZ29yeUxpc3R9ID0gdGhpcy5zdGF0ZVxyXG4gICAgLy8gbGV0IHtjYXRlZ29yeUxpc3R9ID0gdGhpcy5wcm9wc1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5jYXRlZ29yeUxpc3QsXCJDYXRlZ29yeUxpc3RcIilcclxuICAgIGNvbnN0IGJhbm5lckltZyA9IFwiSUNPTkJBTk5FUi5wbmdcIjtcclxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IFwiRGVzaWduXCI7XHJcbiAgICBjb25zdCBzdWJMaW5lVGV4dCA9IG51bGw7XHJcbiAgICBjb25zdCBsaW5lVGV4dCA9ICg8PiB7XCJFWFBMT1JFLiBDUkVBVEUuIFNIQVJFLlwifSA8YnIvPiB7XCIgREVTSUdOIFdJVEggRUFTRS5cIn0gPC8+KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcbiAgICAgIDxTZWNvbmRhcnlCYW5uZXIgXHJcbiAgICAgIHNlbGVjdERhdGE9e3RpdGxlVGV4dH1cclxuICAgICAgbGluZVRleHQ9e2xpbmVUZXh0fVxyXG4gICAgICBiYW5uZXJJbWc9e2Jhbm5lckltZ31cclxuICAgICAgLz5cclxuICAgICAgXHJcbiAgICAgICAgPE1pZGRsZUNvbnRlbnQgY2F0ZWdvcnlMaXN0PXtjYXRlZ29yeUxpc3R9Lz5cclxuICAgICAgICB7LyogPEFsdGVybmF0ZVRleHRDb250ZW50Lz4gKi99XHJcbiAgICAgIDwvZGl2PiAgICBcclxuICAgICAgIFxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuLi8uLi9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9