(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\home.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_8ece8160b3aa9cc692cd ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_8ece8160b3aa9cc692cd */ "dll-reference dll_8ece8160b3aa9cc692cd"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhome&absolutePagePath=C%3A%5CUsers%5CSurya%5Cdoodleblue_community%5Cpages%5Chome%5Cindex.js!./":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhome&absolutePagePath=C%3A%5CUsers%5CSurya%5Cdoodleblue_community%5Cpages%5Chome%5Cindex.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/home",
      function () {
        return __webpack_require__(/*! ./pages/home/index.js */ "./pages/home/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = _react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports["default"] = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is neccesary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://err.sh/vercel/next.js/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = _loadable["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();
      Object.keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });
      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = _react["default"].createContext(null);

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return _react["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = (0, _sideEffect["default"])();
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/

function Head(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_ampContext.AmpStateContext.Consumer, null, function (ampState) {
    return /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Consumer, null, function (updateHead) {
      return /*#__PURE__*/_react["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: (0, _amp.isInAmpMode)(ampState)
      }, children);
    });
  });
}

_c = Head;
Head.rewind = Effect.rewind;
var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = _react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return _react["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return _react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return opts.render(state.loaded, props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return _react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      }) // eslint-disable-next-line handle-callback-err
      ["catch"](function (err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

_c2 = LoadableMap;
Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolve) {
    var res = function res() {
      initialized = true;
      return resolve();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports["default"] = _default;

var _c, _c2;

$RefreshReg$(_c, "Loadable");
$RefreshReg$(_c2, "LoadableMap");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = function _default() {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react$Component) {
    _inherits(_class, _react$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(_react.Component);
};

exports["default"] = _default;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_8ece8160b3aa9cc692cd ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_8ece8160b3aa9cc692cd */ "dll-reference dll_8ece8160b3aa9cc692cd"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v1.4.1
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import {Banner} from "../../components/common/index";


var Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../components/common/footer */ "./components/common/footer/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/common/footer */ "./components/common/footer/index.js")];
    },
    modules: ['../../components/common/footer']
  }
});
_c2 = Footer;
var Header = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../components/common/header */ "./components/common/header/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/common/header */ "./components/common/header/index.js")];
    },
    modules: ['../../components/common/header']
  }
});
_c4 = Header;
var Section = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c5 = function _c5() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/home/section */ "./components/home/section/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/home/section */ "./components/home/section/index.js")];
    },
    modules: ['../../components/home/section']
  }
});
_c6 = Section;
var Banner = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c7 = function _c7() {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../../components/common/banner */ "./components/common/banner/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/common/banner */ "./components/common/banner/index.js")];
    },
    modules: ['../../components/common/banner']
  }
});
_c8 = Banner;
function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("title", null, "doodleblue Community | Open resources for product owners and designers"), __jsx("meta", {
    property: "og:title",
    content: "doodleblue Community | Open resources for product owners and designers",
    key: "title"
  }), __jsx("meta", {
    name: "description",
    content: "doodleblue community is a novel initiative to give back to the users in the form of product documents and design resources. Explore now and expedite your product journey"
  }), __jsx("meta", {
    name: "keywords",
    content: "Free resources, Free icons, free gifs, free design templates, free mockups, free wireframes, free project documents, free designs"
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon/32x32.png"
  })), __jsx("div", {
    className: "pageRouter"
  }, __jsx(Header, {
    className: "bg-white"
  }), __jsx(Banner, null), __jsx(Section, null), __jsx(Footer, null)));
}
_c9 = Home;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Footer$dynamic");
$RefreshReg$(_c2, "Footer");
$RefreshReg$(_c3, "Header$dynamic");
$RefreshReg$(_c4, "Header");
$RefreshReg$(_c5, "Section$dynamic");
$RefreshReg$(_c6, "Section");
$RefreshReg$(_c7, "Banner$dynamic");
$RefreshReg$(_c8, "Banner");
$RefreshReg$(_c9, "Home");

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

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fhome&absolutePagePath=C%3A%5CUsers%5CSurya%5Cdoodleblue_community%5Cpages%5Chome%5Cindex.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fhome&absolutePagePath=C%3A%5CUsers%5CSurya%5Cdoodleblue_community%5Cpages%5Chome%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhome&absolutePagePath=C%3A%5CUsers%5CSurya%5Cdoodleblue_community%5Cpages%5Chome%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_8ece8160b3aa9cc692cd":
/*!*******************************************!*\
  !*** external "dll_8ece8160b3aa9cc692cd" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_8ece8160b3aa9cc692cd;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF84ZWNlODE2MGIzYWE5Y2M2OTJjZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2FtcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2R5bmFtaWMudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9oZWFkLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9sb2FkYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3NpZGUtZWZmZWN0LnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfOGVjZTgxNjBiM2FhOWNjNjkyY2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkbGxfOGVjZTgxNjBiM2FhOWNjNjkyY2RcIiJdLCJuYW1lcyI6WyJBbXBTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsImlzU2VydmVyU2lkZSIsImxvYWRhYmxlT3B0aW9ucyIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJMb2FkaW5nIiwibG9hZGFibGVGbiIsIkxvYWRhYmxlIiwibG9hZGluZyIsImVycm9yIiwiZHluYW1pY09wdGlvbnMiLCJjb25zb2xlIiwibG9hZE1vZHVsZXMiLCJtb2R1bGVzIiwiT2JqZWN0Iiwia2V5IiwidmFsdWUiLCJtb2QiLCJub1NTUiIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImluQW1wTW9kZSIsImhlYWQiLCJjaGlsZCIsImxpc3QiLCJmcmFnbWVudExpc3QiLCJNRVRBVFlQRVMiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsInVuaXF1ZSIsImkiLCJsZW4iLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJoZWFkRWxlbWVudCIsImRlZmF1bHRIZWFkIiwicHJvcHMiLCJjIiwiRWZmZWN0IiwiYW1wU3RhdGUiLCJ1cGRhdGVIZWFkIiwiSGVhZCIsIkxvYWRhYmxlQ29udGV4dCIsIkFMTF9JTklUSUFMSVpFUlMiLCJSRUFEWV9JTklUSUFMSVpFUlMiLCJpbml0aWFsaXplZCIsInByb21pc2UiLCJsb2FkZXIiLCJzdGF0ZSIsImxvYWRlZCIsImVyciIsInByb21pc2VzIiwicmVzdWx0IiwibG9hZCIsIm9iaiIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwib3B0cyIsImRlbGF5IiwidGltZW91dCIsInJlbmRlciIsIndlYnBhY2siLCJzdWJzY3JpcHRpb24iLCJzdWIiLCJnZXRDdXJyZW50VmFsdWUiLCJzdWJzY3JpYmUiLCJyZXRyeSIsIm1vZHVsZUlkcyIsImlkcyIsImluaXQiLCJMb2FkYWJsZUNvbXBvbmVudCIsImNvbnRleHQiLCJBcnJheSIsIm1vZHVsZU5hbWUiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsIkxvYWRhYmxlU3Vic2NyaXB0aW9uIiwiY29uc3RydWN0b3IiLCJfcmVzIiwiX29wdHMiLCJzZXRUaW1lb3V0IiwiX3VwZGF0ZSIsImNhbGxiYWNrIiwiX2NsZWFyVGltZW91dHMiLCJjbGVhclRpbWVvdXQiLCJjcmVhdGVMb2FkYWJsZUNvbXBvbmVudCIsImluaXRpYWxpemVycyIsImZsdXNoSW5pdGlhbGl6ZXJzIiwid2luZG93IiwiaXNTZXJ2ZXIiLCJtb3VudGVkSW5zdGFuY2VzIiwiY29tcG9uZW50IiwicmVjb3JkZWRTdGF0ZSIsImVtaXRDaGFuZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiQ29tcG9uZW50IiwiRm9vdGVyIiwiZHluYW1pYyIsIkhlYWRlciIsIlNlY3Rpb24iLCJCYW5uZXIiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNWQSx1QkFBdUIsbUJBQU8sQ0FBQyxxRkFBb0I7O0FB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ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfOGVjZTgxNjBiM2FhOWNjNjkyY2QgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF84ZWNlODE2MGIzYWE5Y2M2OTJjZFwiKSkoXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanNcIik7IiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9ob21lXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcU3VyeWFcXFxcZG9vZGxlYmx1ZV9jb21tdW5pdHlcXFxccGFnZXNcXFxcaG9tZVxcXFxpbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQW1wU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PGFueT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnQW1wU3RhdGVDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5BbXBNb2RlKHtcbiAgYW1wRmlyc3QgPSBmYWxzZSxcbiAgaHlicmlkID0gZmFsc2UsXG4gIGhhc1F1ZXJ5ID0gZmFsc2UsXG59ID0ge30pOiBib29sZWFuIHtcbiAgcmV0dXJuIGFtcEZpcnN0IHx8IChoeWJyaWQgJiYgaGFzUXVlcnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbXAoKTogYm9vbGVhbiB7XG4gIC8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbiAgcmV0dXJuIGlzSW5BbXBNb2RlKFJlYWN0LnVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMb2FkYWJsZSBmcm9tICcuL2xvYWRhYmxlJ1xuXG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgdHlwZSBMb2FkZXJDb21wb25lbnQ8UCA9IHt9PiA9IFByb21pc2U8XG4gIFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfCB7IGRlZmF1bHQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfVxuPlxuXG5leHBvcnQgdHlwZSBMb2FkZXI8UCA9IHt9PiA9ICgoKSA9PiBMb2FkZXJDb21wb25lbnQ8UD4pIHwgTG9hZGVyQ29tcG9uZW50PFA+XG5cbmV4cG9ydCB0eXBlIExvYWRlck1hcCA9IHsgW21kdWxlOiBzdHJpbmddOiAoKSA9PiBMb2FkZXI8YW55PiB9XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlR2VuZXJhdGVkT3B0aW9ucyA9IHtcbiAgd2VicGFjaz8oKTogYW55XG4gIG1vZHVsZXM/KCk6IExvYWRlck1hcFxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUJhc2VPcHRpb25zPFAgPSB7fT4gPSBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnMgJiB7XG4gIGxvYWRpbmc/OiAoe1xuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBwYXN0RGVsYXksXG4gIH06IHtcbiAgICBlcnJvcj86IEVycm9yIHwgbnVsbFxuICAgIGlzTG9hZGluZz86IGJvb2xlYW5cbiAgICBwYXN0RGVsYXk/OiBib29sZWFuXG4gICAgdGltZWRPdXQ/OiBib29sZWFuXG4gIH0pID0+IEpTWC5FbGVtZW50IHwgbnVsbFxuICBsb2FkZXI/OiBMb2FkZXI8UD4gfCBMb2FkZXJNYXBcbiAgbG9hZGFibGVHZW5lcmF0ZWQ/OiBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnNcbiAgc3NyPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZU9wdGlvbnM8UCA9IHt9PiA9IExvYWRhYmxlQmFzZU9wdGlvbnM8UD4gJiB7XG4gIHJlbmRlcj8obG9hZGVyOiBhbnksIHByb3BzOiBhbnkpOiBKU1guRWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBEeW5hbWljT3B0aW9uczxQID0ge30+ID0gTG9hZGFibGVCYXNlT3B0aW9uczxQPiAmIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHRoZSBtb2R1bGVzIG9wdGlvbiBoYXMgYmVlbiBwbGFubmVkIGZvciByZW1vdmFsXG4gICAqL1xuICByZW5kZXI/KHByb3BzOiBQLCBsb2FkZWQ6IGFueSk6IEpTWC5FbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlRm48UCA9IHt9PiA9IChcbiAgb3B0czogTG9hZGFibGVPcHRpb25zPFA+XG4pID0+IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVDb21wb25lbnQ8UCA9IHt9PiA9IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IGZ1bmN0aW9uIG5vU1NSPFAgPSB7fT4oXG4gIExvYWRhYmxlSW5pdGlhbGl6ZXI6IExvYWRhYmxlRm48UD4sXG4gIGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPFA+IHtcbiAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2tcbiAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzXG5cbiAgLy8gVGhpcyBjaGVjayBpcyBuZWNjZXNhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKVxuICB9XG5cbiAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nIVxuICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgcmV0dXJuICgpID0+IChcbiAgICA8TG9hZGluZyBlcnJvcj17bnVsbH0gaXNMb2FkaW5nIHBhc3REZWxheT17ZmFsc2V9IHRpbWVkT3V0PXtmYWxzZX0gLz5cbiAgKVxufVxuXG4vLyBmdW5jdGlvbiBkeW5hbWljPFAgPSB7fSwgTyBleHRlbmRzIER5bmFtaWNPcHRpb25zPihvcHRpb25zOiBPKTpcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYzxQID0ge30+KFxuICBkeW5hbWljT3B0aW9uczogRHluYW1pY09wdGlvbnM8UD4gfCBMb2FkZXI8UD4sXG4gIG9wdGlvbnM/OiBEeW5hbWljT3B0aW9uczxQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxQPiB7XG4gIGxldCBsb2FkYWJsZUZuOiBMb2FkYWJsZUZuPFA+ID0gTG9hZGFibGVcbiAgbGV0IGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+ID0ge1xuICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgbG9hZGluZzogKHsgZXJyb3IsIGlzTG9hZGluZywgcGFzdERlbGF5IH0pID0+IHtcbiAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbFxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7ZXJyb3Iuc3RhY2t9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgfVxuXG4gIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpID0+IGR5bmFtaWNPcHRpb25zXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHsgLi4ubG9hZGFibGVPcHRpb25zLCAuLi5keW5hbWljT3B0aW9ucyB9XG4gIH1cblxuICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gIGxvYWRhYmxlT3B0aW9ucyA9IHsgLi4ubG9hZGFibGVPcHRpb25zLCAuLi5vcHRpb25zIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICEoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKVxuICApIHtcbiAgICAvLyBzaG93IGRlcHJlY2F0aW9uIHdhcm5pbmcgZm9yIGBtb2R1bGVzYCBrZXkgaW4gZGV2ZWxvcG1lbnRcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGR5bmFtaWNPcHRpb25zLm1vZHVsZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdUaGUgbW9kdWxlcyBvcHRpb24gZm9yIG5leHQvZHluYW1pYyBoYXMgYmVlbiBkZXByZWNhdGVkLiBTZWUgaGVyZSBmb3IgbW9yZSBpbmZvIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL25leHQtZHluYW1pYy1tb2R1bGVzJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIGByZW5kZXJgIHdoZW4gdXNpbmcgYSBtYXBwaW5nLCBlZzogYGR5bmFtaWMoeyBtb2R1bGVzOiAoKSA9PiB7cmV0dXJuIHtIZWxsb1dvcmxkOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9LCByZW5kZXIocHJvcHMsIGxvYWRlZCkge30gfSB9KVxuICAgIGlmIChkeW5hbWljT3B0aW9ucy5yZW5kZXIpIHtcbiAgICAgIGxvYWRhYmxlT3B0aW9ucy5yZW5kZXIgPSAobG9hZGVkLCBwcm9wcykgPT5cbiAgICAgICAgZHluYW1pY09wdGlvbnMucmVuZGVyIShwcm9wcywgbG9hZGVkKVxuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBgbW9kdWxlc2Agd2hlbiB1c2luZyBhIG1hcHBpbmcsIGVnOiBgZHluYW1pYyh7IG1vZHVsZXM6ICgpID0+IHtyZXR1cm4ge0hlbGxvV29ybGQ6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0sIHJlbmRlcihwcm9wcywgbG9hZGVkKSB7fSB9IH0pXG4gICAgaWYgKGR5bmFtaWNPcHRpb25zLm1vZHVsZXMpIHtcbiAgICAgIGxvYWRhYmxlRm4gPSBMb2FkYWJsZS5NYXBcbiAgICAgIGNvbnN0IGxvYWRNb2R1bGVzOiBMb2FkZXJNYXAgPSB7fVxuICAgICAgY29uc3QgbW9kdWxlcyA9IGR5bmFtaWNPcHRpb25zLm1vZHVsZXMoKVxuICAgICAgT2JqZWN0LmtleXMobW9kdWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBtb2R1bGVzW2tleV1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9ICgpID0+IHZhbHVlLnRoZW4oKG1vZDogYW55KSA9PiBtb2QuZGVmYXVsdCB8fCBtb2QpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9IHZhbHVlXG4gICAgICB9KVxuICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGxvYWRNb2R1bGVzXG4gICAgfVxuICB9XG5cbiAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCxcbiAgICB9XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICB9XG5cbiAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzclxuICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucylcbiAgICB9XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3JcbiAgfVxuXG4gIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucylcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEhlYWRNYW5hZ2VyQ29udGV4dDogUmVhY3QuQ29udGV4dDxhbnk+ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBIZWFkTWFuYWdlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnSGVhZE1hbmFnZXJDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhTaWRlRWZmZWN0IGZyb20gJy4vc2lkZS1lZmZlY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuaW1wb3J0IHsgSGVhZE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnLi9oZWFkLW1hbmFnZXItY29udGV4dCdcbmltcG9ydCB7IGlzSW5BbXBNb2RlIH0gZnJvbSAnLi9hbXAnXG5cbnR5cGUgV2l0aEluQW1wTW9kZSA9IHtcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlID0gZmFsc2UpOiBKU1guRWxlbWVudFtdIHtcbiAgY29uc3QgaGVhZCA9IFs8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPl1cbiAgaWYgKCFpbkFtcE1vZGUpIHtcbiAgICBoZWFkLnB1c2goPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIC8+KVxuICB9XG4gIHJldHVybiBoZWFkXG59XG5cbmZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQoXG4gIGxpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgY2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbik6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiB7XG4gIC8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbGlzdFxuICB9XG4gIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgaWYgKGNoaWxkLnR5cGUgPT09IFJlYWN0LkZyYWdtZW50KSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KFxuICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKFxuICAgICAgICAoXG4gICAgICAgICAgZnJhZ21lbnRMaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgICAgICAgZnJhZ21lbnRDaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuICAgICAgICApOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4gPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdudW1iZXInXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3QuY29uY2F0KGZyYWdtZW50Q2hpbGQpXG4gICAgICAgIH0sXG4gICAgICAgIFtdXG4gICAgICApXG4gICAgKVxuICB9XG4gIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZClcbn1cblxuY29uc3QgTUVUQVRZUEVTID0gWyduYW1lJywgJ2h0dHBFcXVpdicsICdjaGFyU2V0JywgJ2l0ZW1Qcm9wJ11cblxuLypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovXG5mdW5jdGlvbiB1bmlxdWUoKSB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0KClcbiAgY29uc3QgdGFncyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YUNhdGVnb3JpZXM6IHsgW21ldGF0eXBlOiBzdHJpbmddOiBTZXQ8c3RyaW5nPiB9ID0ge31cblxuICByZXR1cm4gKGg6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgbGV0IHVuaXF1ZSA9IHRydWVcblxuICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpXG4gICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICB1bmlxdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5hZGQoa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICBzd2l0Y2ggKGgudHlwZSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgdW5pcXVlID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21ldGEnOlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gTUVUQVRZUEVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV1cbiAgICAgICAgICBpZiAoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKSBjb250aW51ZVxuXG4gICAgICAgICAgaWYgKG1ldGF0eXBlID09PSAnY2hhclNldCcpIHtcbiAgICAgICAgICAgIGlmIChtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSkge1xuICAgICAgICAgICAgICB1bmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXVxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KClcbiAgICAgICAgICAgIGlmIChjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgdW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KVxuICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXF1ZVxuICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBoZWFkRWxlbWVudHMgTGlzdCBvZiBtdWx0aXBsZSA8SGVhZD4gaW5zdGFuY2VzXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoXG4gIGhlYWRFbGVtZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBwcm9wczogV2l0aEluQW1wTW9kZVxuKSB7XG4gIHJldHVybiBoZWFkRWxlbWVudHNcbiAgICAucmVkdWNlKFxuICAgICAgKGxpc3Q6IFJlYWN0LlJlYWN0Q2hpbGRbXSwgaGVhZEVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KFxuICAgICAgICAgIGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pXG4gICAgICB9LFxuICAgICAgW11cbiAgICApXG4gICAgLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LCBbXSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKVxuICAgIC5maWx0ZXIodW5pcXVlKCkpXG4gICAgLnJldmVyc2UoKVxuICAgIC5tYXAoKGM6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGMua2V5IHx8IGlcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgeyBrZXkgfSlcbiAgICB9KVxufVxuXG5jb25zdCBFZmZlY3QgPSB3aXRoU2lkZUVmZmVjdCgpXG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9cbmZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxBbXBTdGF0ZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7KGFtcFN0YXRlKSA9PiAoXG4gICAgICAgIDxIZWFkTWFuYWdlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgeyh1cGRhdGVIZWFkKSA9PiAoXG4gICAgICAgICAgICA8RWZmZWN0XG4gICAgICAgICAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlPXtyZWR1Y2VDb21wb25lbnRzfVxuICAgICAgICAgICAgICBoYW5kbGVTdGF0ZUNoYW5nZT17dXBkYXRlSGVhZH1cbiAgICAgICAgICAgICAgaW5BbXBNb2RlPXtpc0luQW1wTW9kZShhbXBTdGF0ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvRWZmZWN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvSGVhZE1hbmFnZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgKX1cbiAgICA8L0FtcFN0YXRlQ29udGV4dC5Db25zdW1lcj5cbiAgKVxufVxuXG5IZWFkLnJld2luZCA9IEVmZmVjdC5yZXdpbmRcblxuZXhwb3J0IGRlZmF1bHQgSGVhZFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG50eXBlIENhcHR1cmVGbiA9IChtb2R1bGVOYW1lOiBzdHJpbmcpID0+IHZvaWRcblxuZXhwb3J0IGNvbnN0IExvYWRhYmxlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q2FwdHVyZUZuIHwgbnVsbD4obnVsbClcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgTG9hZGFibGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0xvYWRhYmxlQ29udGV4dCdcbn1cbiIsIi8qKlxuQGNvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50IEphbWVzIEt5bGUgPG1lQHRoZWphbWVza3lsZS5jb20+XG4gTUlUIExpY2Vuc2VcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG5XSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRVxuKi9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW1pZWJ1aWxkcy9yZWFjdC1sb2FkYWJsZS9ibG9iL3Y1LjUuMC9zcmMvaW5kZXguanNcbi8vIE1vZGlmaWVkIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB3ZWJwYWNrIDQgLyBOZXh0LmpzXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN1YnNjcmlwdGlvbiB9IGZyb20gJ3VzZS1zdWJzY3JpcHRpb24nXG5pbXBvcnQgeyBMb2FkYWJsZUNvbnRleHQgfSBmcm9tICcuL2xvYWRhYmxlLWNvbnRleHQnXG5cbmNvbnN0IEFMTF9JTklUSUFMSVpFUlMgPSBbXVxuY29uc3QgUkVBRFlfSU5JVElBTElaRVJTID0gW11cbmxldCBpbml0aWFsaXplZCA9IGZhbHNlXG5cbmZ1bmN0aW9uIGxvYWQobG9hZGVyKSB7XG4gIGxldCBwcm9taXNlID0gbG9hZGVyKClcblxuICBsZXQgc3RhdGUgPSB7XG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICBsb2FkZWQ6IG51bGwsXG4gICAgZXJyb3I6IG51bGwsXG4gIH1cblxuICBzdGF0ZS5wcm9taXNlID0gcHJvbWlzZVxuICAgIC50aGVuKChsb2FkZWQpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgc3RhdGUubG9hZGVkID0gbG9hZGVkXG4gICAgICByZXR1cm4gbG9hZGVkXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXG4gICAgICBzdGF0ZS5lcnJvciA9IGVyclxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcblxuICByZXR1cm4gc3RhdGVcbn1cblxuZnVuY3Rpb24gbG9hZE1hcChvYmopIHtcbiAgbGV0IHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGxvYWRlZDoge30sXG4gICAgZXJyb3I6IG51bGwsXG4gIH1cblxuICBsZXQgcHJvbWlzZXMgPSBbXVxuXG4gIHRyeSB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSBsb2FkKG9ialtrZXldKVxuXG4gICAgICBpZiAoIXJlc3VsdC5sb2FkaW5nKSB7XG4gICAgICAgIHN0YXRlLmxvYWRlZFtrZXldID0gcmVzdWx0LmxvYWRlZFxuICAgICAgICBzdGF0ZS5lcnJvciA9IHJlc3VsdC5lcnJvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgcHJvbWlzZXMucHVzaChyZXN1bHQucHJvbWlzZSlcblxuICAgICAgcmVzdWx0LnByb21pc2VcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHN0YXRlLmxvYWRlZFtrZXldID0gcmVzXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgc3RhdGUuZXJyb3IgPSBlcnJcbiAgICAgICAgfSlcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzdGF0ZS5lcnJvciA9IGVyclxuICB9XG5cbiAgc3RhdGUucHJvbWlzZSA9IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcblxuICByZXR1cm4gc3RhdGVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iai5kZWZhdWx0IDogb2JqXG59XG5cbmZ1bmN0aW9uIHJlbmRlcihsb2FkZWQsIHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHJlc29sdmUobG9hZGVkKSwgcHJvcHMpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWRGbiwgb3B0aW9ucykge1xuICBsZXQgb3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAge1xuICAgICAgbG9hZGVyOiBudWxsLFxuICAgICAgbG9hZGluZzogbnVsbCxcbiAgICAgIGRlbGF5OiAyMDAsXG4gICAgICB0aW1lb3V0OiBudWxsLFxuICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICB3ZWJwYWNrOiBudWxsLFxuICAgICAgbW9kdWxlczogbnVsbCxcbiAgICB9LFxuICAgIG9wdGlvbnNcbiAgKVxuXG4gIGxldCBzdWJzY3JpcHRpb24gPSBudWxsXG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgY29uc3Qgc3ViID0gbmV3IExvYWRhYmxlU3Vic2NyaXB0aW9uKGxvYWRGbiwgb3B0cylcbiAgICAgIHN1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgZ2V0Q3VycmVudFZhbHVlOiBzdWIuZ2V0Q3VycmVudFZhbHVlLmJpbmQoc3ViKSxcbiAgICAgICAgc3Vic2NyaWJlOiBzdWIuc3Vic2NyaWJlLmJpbmQoc3ViKSxcbiAgICAgICAgcmV0cnk6IHN1Yi5yZXRyeS5iaW5kKHN1YiksXG4gICAgICAgIHByb21pc2U6IHN1Yi5wcm9taXNlLmJpbmQoc3ViKSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbi5wcm9taXNlKClcbiAgfVxuXG4gIC8vIFNlcnZlciBvbmx5XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIEFMTF9JTklUSUFMSVpFUlMucHVzaChpbml0KVxuICB9XG5cbiAgLy8gQ2xpZW50IG9ubHlcbiAgaWYgKFxuICAgICFpbml0aWFsaXplZCAmJlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIG9wdHMud2VicGFjayA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICBjb25zdCBtb2R1bGVJZHMgPSBvcHRzLndlYnBhY2soKVxuICAgIFJFQURZX0lOSVRJQUxJWkVSUy5wdXNoKChpZHMpID0+IHtcbiAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgbW9kdWxlSWRzKSB7XG4gICAgICAgIGlmIChpZHMuaW5kZXhPZihtb2R1bGVJZCkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGluaXQoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IExvYWRhYmxlQ29tcG9uZW50ID0gKHByb3BzLCByZWYpID0+IHtcbiAgICBpbml0KClcblxuICAgIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KExvYWRhYmxlQ29udGV4dClcbiAgICBjb25zdCBzdGF0ZSA9IHVzZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pXG5cbiAgICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKFxuICAgICAgcmVmLFxuICAgICAgKCkgPT4gKHtcbiAgICAgICAgcmV0cnk6IHN1YnNjcmlwdGlvbi5yZXRyeSxcbiAgICAgIH0pLFxuICAgICAgW11cbiAgICApXG5cbiAgICBpZiAoY29udGV4dCAmJiBBcnJheS5pc0FycmF5KG9wdHMubW9kdWxlcykpIHtcbiAgICAgIG9wdHMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnRleHQobW9kdWxlTmFtZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmxvYWRpbmcgfHwgc3RhdGUuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQob3B0cy5sb2FkaW5nLCB7XG4gICAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5sb2FkaW5nLFxuICAgICAgICAgIHBhc3REZWxheTogc3RhdGUucGFzdERlbGF5LFxuICAgICAgICAgIHRpbWVkT3V0OiBzdGF0ZS50aW1lZE91dCxcbiAgICAgICAgICBlcnJvcjogc3RhdGUuZXJyb3IsXG4gICAgICAgICAgcmV0cnk6IHN1YnNjcmlwdGlvbi5yZXRyeSxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUubG9hZGVkKSB7XG4gICAgICAgIHJldHVybiBvcHRzLnJlbmRlcihzdGF0ZS5sb2FkZWQsIHByb3BzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9LCBbcHJvcHMsIHN0YXRlXSlcbiAgfVxuXG4gIExvYWRhYmxlQ29tcG9uZW50LnByZWxvYWQgPSAoKSA9PiBpbml0KClcbiAgTG9hZGFibGVDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnTG9hZGFibGVDb21wb25lbnQnXG5cbiAgcmV0dXJuIFJlYWN0LmZvcndhcmRSZWYoTG9hZGFibGVDb21wb25lbnQpXG59XG5cbmNsYXNzIExvYWRhYmxlU3Vic2NyaXB0aW9uIHtcbiAgY29uc3RydWN0b3IobG9hZEZuLCBvcHRzKSB7XG4gICAgdGhpcy5fbG9hZEZuID0gbG9hZEZuXG4gICAgdGhpcy5fb3B0cyA9IG9wdHNcbiAgICB0aGlzLl9jYWxsYmFja3MgPSBuZXcgU2V0KClcbiAgICB0aGlzLl9kZWxheSA9IG51bGxcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuXG4gICAgdGhpcy5yZXRyeSgpXG4gIH1cblxuICBwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXMucHJvbWlzZVxuICB9XG5cbiAgcmV0cnkoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpXG4gICAgdGhpcy5fcmVzID0gdGhpcy5fbG9hZEZuKHRoaXMuX29wdHMubG9hZGVyKVxuXG4gICAgdGhpcy5fc3RhdGUgPSB7XG4gICAgICBwYXN0RGVsYXk6IGZhbHNlLFxuICAgICAgdGltZWRPdXQ6IGZhbHNlLFxuICAgIH1cblxuICAgIGNvbnN0IHsgX3JlczogcmVzLCBfb3B0czogb3B0cyB9ID0gdGhpc1xuXG4gICAgaWYgKHJlcy5sb2FkaW5nKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdHMuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChvcHRzLmRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fc3RhdGUucGFzdERlbGF5ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2RlbGF5ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgICAgICAgICBwYXN0RGVsYXk6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIG9wdHMuZGVsYXkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRzLnRpbWVvdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl91cGRhdGUoeyB0aW1lZE91dDogdHJ1ZSB9KVxuICAgICAgICB9LCBvcHRzLnRpbWVvdXQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcmVzLnByb21pc2VcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlKHt9KVxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKClcbiAgICAgIH0pXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaGFuZGxlLWNhbGxiYWNrLWVyclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlKHt9KVxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKClcbiAgICAgIH0pXG4gICAgdGhpcy5fdXBkYXRlKHt9KVxuICB9XG5cbiAgX3VwZGF0ZShwYXJ0aWFsKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB7XG4gICAgICAuLi50aGlzLl9zdGF0ZSxcbiAgICAgIGVycm9yOiB0aGlzLl9yZXMuZXJyb3IsXG4gICAgICBsb2FkZWQ6IHRoaXMuX3Jlcy5sb2FkZWQsXG4gICAgICBsb2FkaW5nOiB0aGlzLl9yZXMubG9hZGluZyxcbiAgICAgIC4uLnBhcnRpYWwsXG4gICAgfVxuICAgIHRoaXMuX2NhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soKSlcbiAgfVxuXG4gIF9jbGVhclRpbWVvdXRzKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSlcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgfVxuXG4gIGdldEN1cnJlbnRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVcbiAgfVxuXG4gIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgIHRoaXMuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuX2NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIExvYWRhYmxlKG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWQsIG9wdHMpXG59XG5cbmZ1bmN0aW9uIExvYWRhYmxlTWFwKG9wdHMpIHtcbiAgaWYgKHR5cGVvZiBvcHRzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignTG9hZGFibGVNYXAgcmVxdWlyZXMgYSBgcmVuZGVyKGxvYWRlZCwgcHJvcHMpYCBmdW5jdGlvbicpXG4gIH1cblxuICByZXR1cm4gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZE1hcCwgb3B0cylcbn1cblxuTG9hZGFibGUuTWFwID0gTG9hZGFibGVNYXBcblxuZnVuY3Rpb24gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzLCBpZHMpIHtcbiAgbGV0IHByb21pc2VzID0gW11cblxuICB3aGlsZSAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgIGxldCBpbml0ID0gaW5pdGlhbGl6ZXJzLnBvcCgpXG4gICAgcHJvbWlzZXMucHVzaChpbml0KGlkcykpXG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChpbml0aWFsaXplcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzLCBpZHMpXG4gICAgfVxuICB9KVxufVxuXG5Mb2FkYWJsZS5wcmVsb2FkQWxsID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZsdXNoSW5pdGlhbGl6ZXJzKEFMTF9JTklUSUFMSVpFUlMpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICB9KVxufVxuXG5Mb2FkYWJsZS5wcmVsb2FkUmVhZHkgPSAoaWRzID0gW10pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgcmVzID0gKCkgPT4ge1xuICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgfVxuICAgIC8vIFdlIGFsd2F5cyB3aWxsIHJlc29sdmUsIGVycm9ycyBzaG91bGQgYmUgaGFuZGxlZCB3aXRoaW4gbG9hZGluZyBVSXMuXG4gICAgZmx1c2hJbml0aWFsaXplcnMoUkVBRFlfSU5JVElBTElaRVJTLCBpZHMpLnRoZW4ocmVzLCByZXMpXG4gIH0pXG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuX19ORVhUX1BSRUxPQURSRUFEWSA9IExvYWRhYmxlLnByZWxvYWRSZWFkeVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkYWJsZVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbnR5cGUgU3RhdGUgPSBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4gfCB1bmRlZmluZWRcblxudHlwZSBTaWRlRWZmZWN0UHJvcHMgPSB7XG4gIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiA8VD4oXG4gICAgY29tcG9uZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgIHByb3BzOiBUXG4gICkgPT4gU3RhdGVcbiAgaGFuZGxlU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBtb3VudGVkSW5zdGFuY2VzOiBTZXQ8YW55PiA9IG5ldyBTZXQoKVxuICBsZXQgc3RhdGU6IFN0YXRlXG5cbiAgZnVuY3Rpb24gZW1pdENoYW5nZShjb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+KTogdm9pZCB7XG4gICAgc3RhdGUgPSBjb21wb25lbnQucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoXG4gICAgICBbLi4ubW91bnRlZEluc3RhbmNlc10sXG4gICAgICBjb21wb25lbnQucHJvcHNcbiAgICApXG4gICAgaWYgKGNvbXBvbmVudC5wcm9wcy5oYW5kbGVTdGF0ZUNoYW5nZSkge1xuICAgICAgY29tcG9uZW50LnByb3BzLmhhbmRsZVN0YXRlQ2hhbmdlKHN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIENvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+IHtcbiAgICAvLyBVc2VkIHdoZW4gc2VydmVyIHJlbmRlcmluZ1xuICAgIHN0YXRpYyByZXdpbmQoKSB7XG4gICAgICBjb25zdCByZWNvcmRlZFN0YXRlID0gc3RhdGVcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkXG4gICAgICBtb3VudGVkSW5zdGFuY2VzLmNsZWFyKClcbiAgICAgIHJldHVybiByZWNvcmRlZFN0YXRlXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICAgICAgZW1pdENoYW5nZSh0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIG1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgICBlbWl0Q2hhbmdlKHRoaXMpXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIGVtaXRDaGFuZ2UodGhpcylcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBtb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKVxuICAgICAgZW1pdENoYW5nZSh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF84ZWNlODE2MGIzYWE5Y2M2OTJjZCAqLyBcImRsbC1yZWZlcmVuY2UgZGxsXzhlY2U4MTYwYjNhYTljYzY5MmNkXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MS40LjFcbiAqIHVzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vL1xuLy8gSW4gb3JkZXIgdG8gYXZvaWQgcmVtb3ZpbmcgYW5kIHJlLWFkZGluZyBzdWJzY3JpcHRpb25zIGVhY2ggdGltZSB0aGlzIGhvb2sgaXMgY2FsbGVkLFxuLy8gdGhlIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoaXMgaG9vayBzaG91bGQgYmUgbWVtb2l6ZWQgaW4gc29tZSB3YXnigJNcbi8vIGVpdGhlciBieSB3cmFwcGluZyB0aGUgZW50aXJlIHBhcmFtcyBvYmplY3Qgd2l0aCB1c2VNZW1vKClcbi8vIG9yIGJ5IHdyYXBwaW5nIHRoZSBpbmRpdmlkdWFsIGNhbGxiYWNrcyB3aXRoIHVzZUNhbGxiYWNrKCkuXG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihfcmVmKSB7XG4gIHZhciBnZXRDdXJyZW50VmFsdWUgPSBfcmVmLmdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZSA9IF9yZWYuc3Vic2NyaWJlO1xuXG4gIC8vIFJlYWQgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSBvdXIgc3Vic2NyaXB0aW9uLlxuICAvLyBXaGVuIHRoaXMgdmFsdWUgY2hhbmdlcywgd2UnbGwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggUmVhY3QuXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGFsc28gc3RvcmUgdGhlIGhvb2sgcGFyYW1zIHNvIHRoYXQgd2UgY2FuIGNoZWNrIGZvciBzdGFsZW5lc3MuXG4gIC8vIChTZWUgdGhlIGNvbW1lbnQgaW4gY2hlY2tGb3JVcGRhdGVzKCkgYmVsb3cgZm9yIG1vcmUgaW5mby4pXG4gIHZhciBfdXNlU3RhdGUgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogZ2V0Q3VycmVudFZhbHVlKClcbiAgICB9O1xuICB9KSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHZhbHVlVG9SZXR1cm4gPSBzdGF0ZS52YWx1ZTsgLy8gSWYgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQgc2luY2Ugb3VyIGxhc3QgcmVuZGVyLCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBpdHMgY3VycmVudCB2YWx1ZS5cblxuICBpZiAoc3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgc3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAvLyBJZiB0aGUgc3Vic2NyaXB0aW9uIGhhcyBiZWVuIHVwZGF0ZWQsIHdlJ2xsIHNjaGVkdWxlIGFub3RoZXIgdXBkYXRlIHdpdGggUmVhY3QuXG4gICAgLy8gUmVhY3Qgd2lsbCBwcm9jZXNzIHRoaXMgdXBkYXRlIGltbWVkaWF0ZWx5LCBzbyB0aGUgb2xkIHN1YnNjcmlwdGlvbiB2YWx1ZSB3b24ndCBiZSBjb21taXR0ZWQuXG4gICAgLy8gSXQgaXMgc3RpbGwgbmljZSB0byBhdm9pZCByZXR1cm5pbmcgYSBtaXNtYXRjaGVkIHZhbHVlIHRob3VnaCwgc28gbGV0J3Mgb3ZlcnJpZGUgdGhlIHJldHVybiB2YWx1ZS5cbiAgICB2YWx1ZVRvUmV0dXJuID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVRvUmV0dXJuXG4gICAgfSk7XG4gIH0gLy8gRGlzcGxheSB0aGUgY3VycmVudCB2YWx1ZSBmb3IgdGhpcyBob29rIGluIFJlYWN0IERldlRvb2xzLlxuXG5cbiAgcmVhY3QudXNlRGVidWdWYWx1ZSh2YWx1ZVRvUmV0dXJuKTsgLy8gSXQgaXMgaW1wb3J0YW50IG5vdCB0byBzdWJzY3JpYmUgd2hpbGUgcmVuZGVyaW5nIGJlY2F1c2UgdGhpcyBjYW4gbGVhZCB0byBtZW1vcnkgbGVha3MuXG4gIC8vIChMZWFybiBtb3JlIGF0IHJlYWN0anMub3JnL2RvY3Mvc3RyaWN0LW1vZGUuaHRtbCNkZXRlY3RpbmctdW5leHBlY3RlZC1zaWRlLWVmZmVjdHMpXG4gIC8vIEluc3RlYWQsIHdlIHdhaXQgdW50aWwgdGhlIGNvbW1pdCBwaGFzZSB0byBhdHRhY2ggb3VyIGhhbmRsZXIuXG4gIC8vXG4gIC8vIFdlIGludGVudGlvbmFsbHkgdXNlIGEgcGFzc2l2ZSBlZmZlY3QgKHVzZUVmZmVjdCkgcmF0aGVyIHRoYW4gYSBzeW5jaHJvbm91cyBvbmUgKHVzZUxheW91dEVmZmVjdClcbiAgLy8gc28gdGhhdCB3ZSBkb24ndCBzdHJldGNoIHRoZSBjb21taXQgcGhhc2UuXG4gIC8vIFRoaXMgYWxzbyBoYXMgYW4gYWRkZWQgYmVuZWZpdCB3aGVuIG11bHRpcGxlIGNvbXBvbmVudHMgYXJlIHN1YnNjcmliZWQgdG8gdGhlIHNhbWUgc291cmNlOlxuICAvLyBJdCBhbGxvd3MgZWFjaCBvZiB0aGUgZXZlbnQgaGFuZGxlcnMgdG8gc2FmZWx5IHNjaGVkdWxlIHdvcmsgd2l0aG91dCBwb3RlbnRpYWxseSByZW1vdmluZyBhbiBhbm90aGVyIGhhbmRsZXIuXG4gIC8vIChMZWFybiBtb3JlIGF0IGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9rMHl2cjU5NzBvKVxuXG4gIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG5cbiAgICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGV2ZW4gYWZ0ZXIgYmVpbmcgdW5zdWJzY3JpYmVkLFxuICAgICAgLy8gaWYgaXQncyByZW1vdmVkIGFzIGEgcmVzdWx0IG9mIGEgc3Vic2NyaXB0aW9uIGV2ZW50L3VwZGF0ZS5cbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgUmVhY3Qgd2lsbCBsb2cgYSBERVYgd2FybmluZyBhYm91dCBhbiB1cGRhdGUgZnJvbSBhbiB1bm1vdW50ZWQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgY2FuIGF2b2lkIHRyaWdnZXJpbmcgdGhhdCB3YXJuaW5nIHdpdGggdGhpcyBjaGVjay5cbiAgICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFdlIHVzZSBhIHN0YXRlIHVwZGF0ZXIgZnVuY3Rpb24gdG8gYXZvaWQgc2NoZWR1bGluZyB3b3JrIGZvciBhIHN0YWxlIHNvdXJjZS5cbiAgICAgIC8vIEhvd2V2ZXIgaXQncyBpbXBvcnRhbnQgdG8gZWFnZXJseSByZWFkIHRoZSBjdXJyZW50bHkgdmFsdWUsXG4gICAgICAvLyBzbyB0aGF0IGFsbCBzY2hlZHVsZWQgd29yayBzaGFyZXMgdGhlIHNhbWUgdmFsdWUgKGluIHRoZSBldmVudCBvZiBtdWx0aXBsZSBzdWJzY3JpcHRpb25zKS5cbiAgICAgIC8vIFRoaXMgYXZvaWRzIHZpc3VhbCBcInRlYXJpbmdcIiB3aGVuIGEgbXV0YXRpb24gaGFwcGVucyBkdXJpbmcgYSAoY29uY3VycmVudCkgcmVuZGVyLlxuXG5cbiAgICAgIHZhciB2YWx1ZSA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAvLyBJZ25vcmUgdmFsdWVzIGZyb20gc3RhbGUgc291cmNlcyFcbiAgICAgICAgLy8gU2luY2Ugd2Ugc3Vic2NyaWJlIGFuIHVuc3Vic2NyaWJlIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBmb3IgYSBzdGFsZSAocHJldmlvdXMpIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBhdm9pZHMgc2NoZWR1bGluZyBhbiB1cGRhdGUgZm9yIHRoYXQgc3RhbGUgc3Vic2NyaXB0aW9uLlxuICAgICAgICBpZiAocHJldlN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHByZXZTdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH0gLy8gU29tZSBzdWJzY3JpcHRpb25zIHdpbGwgYXV0by1pbnZva2UgdGhlIGhhbmRsZXIsIGV2ZW4gaWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLlxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQsIG5vIHVwZGF0ZSBpcyBuZWVkZWQuXG4gICAgICAgIC8vIFJldHVybiBzdGF0ZSBhcy1pcyBzbyBSZWFjdCBjYW4gYmFpbCBvdXQgYW5kIGF2b2lkIGFuIHVubmVjZXNzYXJ5IHJlbmRlci5cblxuXG4gICAgICAgIGlmIChwcmV2U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGNoZWNrRm9yVXBkYXRlcyk7IC8vIEJlY2F1c2Ugd2UncmUgc3Vic2NyaWJpbmcgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgYW4gdXBkYXRlIGhhcyBvY2N1cnJlZCBiZXR3ZWVuIHJlbmRlciBhbmQgb3VyIGVmZmVjdCBoYW5kbGVyLlxuICAgIC8vIENoZWNrIGZvciB0aGlzIGFuZCBzY2hlZHVsZSBhbiB1cGRhdGUgaWYgd29yayBoYXMgb2NjdXJyZWQuXG5cbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbZ2V0Q3VycmVudFZhbHVlLCBzdWJzY3JpYmVdKTsgLy8gUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGZvciBvdXIgY2FsbGVyIHRvIHVzZSB3aGlsZSByZW5kZXJpbmcuXG5cbiAgcmV0dXJuIHZhbHVlVG9SZXR1cm47XG59XG5cbmV4cG9ydHMudXNlU3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0IHtCYW5uZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9pbmRleFwiO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5jb25zdCBGb290ZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9jb21tb24vZm9vdGVyJykpXHJcbmNvbnN0IEhlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXInKSlcclxuY29uc3QgU2VjdGlvbiA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL2hvbWUvc2VjdGlvbicpKVxyXG5jb25zdCBCYW5uZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9jb21tb24vYmFubmVyJykpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+ZG9vZGxlYmx1ZSBDb21tdW5pdHkgfCBPcGVuIHJlc291cmNlcyBmb3IgcHJvZHVjdCBvd25lcnMgYW5kIGRlc2lnbmVyczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJkb29kbGVibHVlIENvbW11bml0eSB8IE9wZW4gcmVzb3VyY2VzIGZvciBwcm9kdWN0IG93bmVycyBhbmQgZGVzaWduZXJzXCIga2V5PVwidGl0bGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJkb29kbGVibHVlIGNvbW11bml0eSBpcyBhIG5vdmVsIGluaXRpYXRpdmUgdG8gZ2l2ZSBiYWNrIHRvIHRoZSB1c2VycyBpbiB0aGUgZm9ybSBvZiBwcm9kdWN0IGRvY3VtZW50cyBhbmQgZGVzaWduIHJlc291cmNlcy4gRXhwbG9yZSBub3cgYW5kIGV4cGVkaXRlIHlvdXIgcHJvZHVjdCBqb3VybmV5XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiRnJlZSByZXNvdXJjZXMsIEZyZWUgaWNvbnMsIGZyZWUgZ2lmcywgZnJlZSBkZXNpZ24gdGVtcGxhdGVzLCBmcmVlIG1vY2t1cHMsIGZyZWUgd2lyZWZyYW1lcywgZnJlZSBwcm9qZWN0IGRvY3VtZW50cywgZnJlZSBkZXNpZ25zXCIvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLzMyeDMyLnBuZ1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlUm91dGVyXCI+XHJcbiAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwiYmctd2hpdGVcIi8+XHJcbiAgICAgIDxCYW5uZXIgLz4gIFxyXG4gICAgICA8U2VjdGlvbi8+XHJcbiAgICAgIHsvKiA8TWFpbmxheW91dC8+ICovfVxyXG4gICAgICA8Rm9vdGVyLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBkbGxfOGVjZTgxNjBiM2FhOWNjNjkyY2Q7Il0sInNvdXJjZVJvb3QiOiIifQ==