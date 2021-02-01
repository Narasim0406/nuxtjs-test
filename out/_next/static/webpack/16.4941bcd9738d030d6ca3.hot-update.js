webpackHotUpdate(16,{

/***/ "./components/common/viewPage/fileList/index.js":
/*!******************************************************!*\
  !*** ./components/common/viewPage/fileList/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _commonMethods_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commonMethods/index */ "./components/common/commonMethods/index.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var SignUpForm = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(_c = function _c() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../signUpForm */ "./components/common/signUpForm/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../signUpForm */ "./components/common/signUpForm/index.js")];
    },
    modules: ['../../signUpForm']
  }
});
_c2 = SignUpForm;
var TextContent = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(_c3 = function _c3() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../textContent */ "./components/common/textContent/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../textContent */ "./components/common/textContent/index.js")];
    },
    modules: ['../../textContent']
  }
});
_c4 = TextContent;

var FileList = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FileList, _React$Component);

  var _super = _createSuper(FileList);

  function FileList(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FileList);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleFilter", function () {
      var filterSelected = _this.state.filterSelected;

      _this.setState({
        filterSelected: !filterSelected
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "selectedFilter", function (value) {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "checkLog", function () {
      if (localStorage.getItem('user')) {
        _this.setState({
          loggedIn: true
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "showModal", function (name) {
      _this.setState({
        downloadLink: name,
        setModal: !_this.state.setModal
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "hideModal", function (value) {
      _this.setState({
        setModal: !_this.state.setModal
      });

      _this.checkLog();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "searchDataFromList", function () {
      var searchValue = _this.state.searchValue;
      var listData = _this.props.listData;
      debugger;

      _this.setState({
        listData: _commonMethods_index__WEBPACK_IMPORTED_MODULE_8__["default"].filterData(listData, searchValue, 'title'),
        searchState: true
      }, function () {
        if (window.location.pathname == '/code-snippets-download/') {
          _this.props.onSearch(_this.state.searchState);
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleInputChange", function (event) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, event.target.name, event.target.value));

      if (!event.target.value) {
        _this.setState({
          listData: _this.props.listData,
          searchState: false
        }, function () {
          if (window.location.pathname == '/code-snippets-download/') {
            _this.props.onSearch(_this.state.searchState);
          }
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "downloadImage", function (value) {
      window.open(_this.localpath + value, 'Download');
    });

    _this.state = {
      searchState: false,
      searchValue: null,
      listData: _this.props.listData,
      filterSelected: false,
      comingSoon: false,
      loggedIn: false,
      downloadLink: "src/",
      downloadBtn: false
    };
    _this.localpath = "doodleblue_community/public";
    _this.searchDataFromList = _this.searchDataFromList.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onKeyUp = _this.onKeyUp.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FileList, [{
    key: "onKeyUp",
    value: function onKeyUp(event) {
      if (event.key === "Enter") {
        this.searchDataFromList();
      }
    }
  }, {
    key: "redirectPage",
    value: function redirectPage(page) {
      if (this.props.pageName === 'product-documents' || this.props.pageName.includes('free-design-resources')) {
        window.location.href = "/" + page;
      } // if(this.props.pageName === 'code-snippets-download') {
      // }
      // else if(page.indexOf('product-documents')&&page.indexOf('free-design-resources')&&page.indexOf('code-snippets-download')&&-1){
      //     var openList = {
      //         // status:true,
      //         name:page
      //         }
      //     this.props.onSelectLanguage(openList); 
      //     {
      //         this.setState({comingSoon:true},(console.log(this.state.comingSoon,"ComingSoon")))
      //     }   
      // }
      // window.location.href = "/codesnippet";


      if (this.props.pageName !== 'product-documents' && this.props.pageName !== 'free-design-resources' && this.props.pageName !== 'code-snippets-download') {
        var openList = {
          // status:true,
          name: page
        };
        this.props.onSelectLanguage(openList);
        {
          this.setState({
            comingSoon: true
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.shareData()
      this.checkLog();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          pageName = _this$props.pageName,
          titleText = _this$props.titleText,
          paginatedList = _this$props.paginatedList,
          pageDescription = _this$props.pageDescription,
          subLineText = _this$props.subLineText,
          hideArrow = _this$props.hideArrow;
      var _this$state = this.state,
          listData = _this$state.listData,
          comingSoon = _this$state.comingSoon,
          loggedIn = _this$state.loggedIn,
          downloadLink = _this$state.downloadLink,
          downloadBtn = _this$state.downloadBtn,
          searchState = _this$state.searchState;
      var shareUrl = 'http://community.doodleblue.com/gifs?';
      var title = 'Community.Doodleblue';
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "document-content"
      }, subLineText ? __jsx("p", {
        className: "w-65 font-weight-normal mt-5"
      }, !comingSoon ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, "    ", subLineText) : '') : __jsx("div", {
        className: "search-filter"
      }, __jsx("div", {
        className: "input-group col-md-6 col-sm-12 offset-md-3"
      }, __jsx("input", {
        type: "text",
        name: "searchValue",
        className: "form-control",
        onKeyUp: this.onKeyUp,
        onChange: this.handleInputChange
      }), __jsx("div", {
        className: "input-group-append"
      }, __jsx("button", {
        type: "button",
        className: "search-btn",
        onClick: this.searchDataFromList
      }))))), paginatedList !== undefined && searchState == false ? __jsx("div", {
        className: "documents-card mb-4 ".concat(paginatedList !== undefined && paginatedList > 12 ? 'paginated-content' : '')
      }, __jsx("div", {
        className: "row"
      }, Object.keys(paginatedList).map(function (index, key) {
        return __jsx("div", {
          className: "".concat(pageName === 'product-documents' ? "col-md-4" : "col-md-3 no-document-page", "  col-custom-sm"),
          key: key
        }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9___default.a, {
          animateIn: "fadeInUp",
          animateOnce: "true"
        }, __jsx("div", {
          className: "".concat(pageName === 'product-documents' ? "card1" : "card", " ") //   onClick={() => {this.redirectPage(index)}}

        }, __jsx("img", {
          className: "card-img-top",
          src: paginatedList[index].image,
          alt: "Card image cap"
        }), __jsx("div", {
          className: "card-body text-left"
        }, __jsx("div", {
          className: "arrow-bg ".concat(hideArrow ? 'arrow-hide' : '')
        }, paginatedList[index].title), __jsx("div", {
          className: "row d-flex justify-content-around file-btn "
        }, __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, loggedIn ? __jsx("a", {
          className: "",
          href: "".concat(paginatedList[index].link),
          download: true
        }, __jsx("div", {
          className: "download-btn"
        }, __jsx("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, __jsx("path", {
          d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M7 10L12 15L17 10",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M12 15V3",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })))) : __jsx("a", {
          className: "",
          onClick: function onClick() {
            return _this2.showModal(paginatedList[index]);
          }
        }, __jsx("div", {
          className: "download-btn"
        }, __jsx("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, __jsx("path", {
          d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M7 10L12 15L17 10",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M12 15V3",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })))), __jsx("a", null, __jsx("div", {
          className: "share-btn tooltip-hover"
        }, __jsx("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, __jsx("path", {
          d: "M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M8.59003 13.51L15.42 17.49",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M15.41 6.51001L8.59003 10.49",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })), __jsx("span", {
          "class": "tooltiptext"
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookShareButton"], {
          url: "".concat(shareUrl).concat(encodeURI(paginatedList[index].title), "#").concat(index),
          quote: title,
          className: "Demo__some-network__share-button"
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookIcon"], {
          size: 32,
          round: true
        })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["PinterestShareButton"], {
          url: String(".location"),
          media: "".concat(String(".location"), "/").concat(shareUrl),
          className: "Demo__some-network__share-button"
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["PinterestIcon"], {
          size: 32,
          round: true
        })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["TwitterShareButton"], {
          url: "".concat(shareUrl).concat(encodeURI(paginatedList[index].title), "#").concat(index),
          title: title,
          className: "Demo__some-network__share-button"
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["TwitterIcon"], {
          size: 32,
          round: true
        })))))))))));
      }))) : __jsx("div", {
        className: "documents-card mb-4 ".concat(paginatedList !== undefined && listData.length > 12 ? 'paginated-content' : '')
      }, !comingSoon ? __jsx("div", {
        className: "row"
      }, Object.keys(listData).map(function (index, key) {
        return __jsx("div", {
          className: "".concat(pageName === 'document' ? "col-md-4" : "col-md-3 no-document-page", " col-custom-sm"),
          key: key
        }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9___default.a, {
          animateIn: "fadeInUp",
          animateOnce: "true"
        }, __jsx("div", {
          className: "".concat(pageName === 'document' ? "card1" : "card", " "),
          onClick: function onClick() {
            _this2.redirectPage(index);
          }
        }, __jsx("img", {
          className: "card-img-top",
          src: listData[index].image,
          alt: "Card image cap"
        }), __jsx("div", {
          className: "card-body text-left"
        }, __jsx("div", {
          className: "arrow-bg ".concat(hideArrow ? 'arrow-hide' : '')
        }, listData[index].title), paginatedList !== undefined ? __jsx("div", {
          className: "row d-flex justify-content-around file-btn "
        }, loggedIn ? __jsx("a", {
          className: "",
          href: "".concat(listData[index].link),
          download: true
        }, __jsx("div", {
          className: "download-btn"
        }, __jsx("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, __jsx("path", {
          d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M7 10L12 15L17 10",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M12 15V3",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })))) : __jsx("a", {
          className: "",
          onClick: function onClick() {
            return _this2.showModal(paginatedList[index]);
          }
        }, __jsx("div", {
          className: "download-btn"
        }, __jsx("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, __jsx("path", {
          d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M7 10L12 15L17 10",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M12 15V3",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })))), __jsx("a", null, __jsx("div", {
          className: "share-btn tooltip-hover"
        }, __jsx("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, __jsx("path", {
          d: "M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M8.59003 13.51L15.42 17.49",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), __jsx("path", {
          d: "M15.41 6.51001L8.59003 10.49",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })), __jsx("span", {
          "class": "tooltiptext"
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookShareButton"], {
          url: "".concat(shareUrl).concat(encodeURI(shareUrl), "#").concat(index),
          quote: title,
          className: "Demo__some-network__share-button"
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookIcon"], {
          size: 32,
          round: true
        })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["PinterestShareButton"], {
          url: String(".location"),
          media: "".concat(String(".location"), "/").concat(shareUrl),
          className: "Demo__some-network__share-button"
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["PinterestIcon"], {
          size: 32,
          round: true
        })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["TwitterShareButton"], {
          url: "".concat(shareUrl).concat(encodeURI(shareUrl), "#").concat(index),
          title: title,
          className: "Demo__some-network__share-button"
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["TwitterIcon"], {
          size: 32,
          round: true
        })))))) : ''))));
      })) : '', Object.keys(listData).length === 0 && __jsx("div", {
        className: "document-content mid-content pt-6 mt-5 justify-content-center"
      }, __jsx("div", {
        className: "mb-4 mt-custom-2"
      }, __jsx("h5", {
        className: "text-center sub-content py-4"
      }, "No data found"))), !!comingSoon && __jsx("div", {
        className: "document-content mid-content pt-6 mt-5 justify-content-center"
      }, __jsx("div", {
        className: "mb-4 mt-custom-2"
      }, __jsx(TextContent, {
        text2: "Coming Soon",
        text3: "Work in Progress",
        text6: "We are working to provide you with the best possible ".concat(titleText, "s")
      })))), __jsx(SignUpForm, {
        showModal: this.state.setModal,
        downloadLink: downloadLink,
        onChange: this.hideModal
      }));
    }
  }]);

  return FileList;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FileList);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "SignUpForm$dynamic");
$RefreshReg$(_c2, "SignUpForm");
$RefreshReg$(_c3, "TextContent$dynamic");
$RefreshReg$(_c4, "TextContent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi92aWV3UGFnZS9maWxlTGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaWduVXBGb3JtIiwiZHluYW1pYyIsIlRleHRDb250ZW50IiwiRmlsZUxpc3QiLCJwcm9wcyIsImZpbHRlclNlbGVjdGVkIiwic3RhdGUiLCJzZXRTdGF0ZSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2dlZEluIiwibmFtZSIsImRvd25sb2FkTGluayIsInNldE1vZGFsIiwiY2hlY2tMb2ciLCJzZWFyY2hWYWx1ZSIsImxpc3REYXRhIiwiQ29tbW9uTWV0aG9kcyIsImZpbHRlckRhdGEiLCJzZWFyY2hTdGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJvblNlYXJjaCIsImV2ZW50IiwidGFyZ2V0Iiwib3BlbiIsImxvY2FscGF0aCIsImNvbWluZ1Nvb24iLCJkb3dubG9hZEJ0biIsInNlYXJjaERhdGFGcm9tTGlzdCIsImJpbmQiLCJvbktleVVwIiwia2V5IiwicGFnZSIsInBhZ2VOYW1lIiwiaW5jbHVkZXMiLCJocmVmIiwib3Blbkxpc3QiLCJvblNlbGVjdExhbmd1YWdlIiwidGl0bGVUZXh0IiwicGFnaW5hdGVkTGlzdCIsInBhZ2VEZXNjcmlwdGlvbiIsInN1YkxpbmVUZXh0IiwiaGlkZUFycm93Iiwic2hhcmVVcmwiLCJ0aXRsZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwidW5kZWZpbmVkIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImluZGV4IiwiaW1hZ2UiLCJsaW5rIiwic2hvd01vZGFsIiwiZW5jb2RlVVJJIiwiU3RyaW5nIiwibGVuZ3RoIiwicmVkaXJlY3RQYWdlIiwiaGlkZU1vZGFsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBY0U7QUFDQSxJQUFN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QUFDLFdBQUQ7QUFDQyxhQUFLLEVBQUMsYUFEUDtBQUVDLGFBQUssRUFBQyxrQkFGUDtBQUdDLGFBQUssaUVBQTBEWSxTQUExRDtBQUhOLFFBREEsQ0FEUSxDQTFGcEIsQ0FoSEosRUF5TkksTUFBQyxVQUFEO0FBQVksaUJBQVMsRUFBRSxLQUFLbkMsS0FBTCxDQUFXUSxRQUFsQztBQUE0QyxvQkFBWSxFQUFFRCxZQUExRDtBQUF3RSxnQkFBUSxFQUFFLEtBQUtnRDtBQUF2RixRQXpOSixDQURKO0FBNk5IOzs7O0VBdlZrQkMsNENBQUssQ0FBQ0MsUzs7QUEwVmQ1RCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xNi40OTQxYmNkOTczOGQwMzBkNmNhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbW1vbk1ldGhvZHMgZnJvbSAnLi4vLi4vY29tbW9uTWV0aG9kcy9pbmRleCc7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEZhY2Vib29rU2hhcmVCdXR0b24sXHJcbiAgXHJcbiAgICBQaW50ZXJlc3RTaGFyZUJ1dHRvbixcclxuICAgIFxyXG4gICAgVHdpdHRlclNoYXJlQnV0dG9uLFxyXG4gICBcclxuICAgICAgRmFjZWJvb2tJY29uLFxyXG4gICAgIFxyXG4gICAgICBQaW50ZXJlc3RJY29uLFxyXG4gICAgIFxyXG4gICAgICBUd2l0dGVySWNvbixcclxuICAgIFxyXG4gIH0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XHJcbiAgaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG4gIGNvbnN0IFNpZ25VcEZvcm0gPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vc2lnblVwRm9ybScpKVxyXG4gIGNvbnN0IFRleHRDb250ZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL3RleHRDb250ZW50JykpXHJcbiAgXHJcblxyXG5jbGFzcyBGaWxlTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hTdGF0ZTpmYWxzZSxcclxuICAgICAgICAgICAgc2VhcmNoVmFsdWUgOiBudWxsLFxyXG4gICAgICAgICAgICBsaXN0RGF0YSA6IHRoaXMucHJvcHMubGlzdERhdGEsXHJcbiAgICAgICAgICAgIGZpbHRlclNlbGVjdGVkIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbWluZ1Nvb246ZmFsc2UsXHJcbiAgICAgICAgICAgIGxvZ2dlZEluOmZhbHNlLFxyXG4gICAgICAgICAgICBkb3dubG9hZExpbms6XCJzcmMvXCIsXHJcbiAgICAgICAgICAgIGRvd25sb2FkQnRuOmZhbHNlLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxvY2FscGF0aCA9IFwiZG9vZGxlYmx1ZV9jb21tdW5pdHkvcHVibGljXCI7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hEYXRhRnJvbUxpc3QgPSB0aGlzLnNlYXJjaERhdGFGcm9tTGlzdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25LZXlVcCA9IHRoaXMub25LZXlVcC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciB7ZmlsdGVyU2VsZWN0ZWR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmlsdGVyU2VsZWN0ZWQgOiAhZmlsdGVyU2VsZWN0ZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25LZXlVcChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hEYXRhRnJvbUxpc3QoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgc2VsZWN0ZWRGaWx0ZXIgPSAodmFsdWUpID0+IHtcclxuXHJcbiAgICB9XHJcbiAgICBjaGVja0xvZz0oKT0+e1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpe1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9nZ2VkSW46dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNob3dNb2RhbD0obmFtZSk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkb3dubG9hZExpbms6bmFtZSxzZXRNb2RhbDohdGhpcy5zdGF0ZS5zZXRNb2RhbH0pXHJcbiAgICAgIH1cclxuICAgICAgaGlkZU1vZGFsPSh2YWx1ZSk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZXRNb2RhbDohdGhpcy5zdGF0ZS5zZXRNb2RhbH0pXHJcbiAgICAgICAgdGhpcy5jaGVja0xvZygpXHJcbiAgICBcclxuICAgICAgfVxyXG5cclxuICAgIHJlZGlyZWN0UGFnZShwYWdlKSB7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wYWdlTmFtZSA9PT0gJ3Byb2R1Y3QtZG9jdW1lbnRzJyB8fCB0aGlzLnByb3BzLnBhZ2VOYW1lLmluY2x1ZGVzKCdmcmVlLWRlc2lnbi1yZXNvdXJjZXMnKSlcclxuICAgICAgICAgIHsgXHJcblxyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCIrcGFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMucGFnZU5hbWUgPT09ICdjb2RlLXNuaXBwZXRzLWRvd25sb2FkJykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZihwYWdlLmluZGV4T2YoJ3Byb2R1Y3QtZG9jdW1lbnRzJykmJnBhZ2UuaW5kZXhPZignZnJlZS1kZXNpZ24tcmVzb3VyY2VzJykmJnBhZ2UuaW5kZXhPZignY29kZS1zbmlwcGV0cy1kb3dubG9hZCcpJiYtMSl7XHJcbiAgICAgICAgLy8gICAgIHZhciBvcGVuTGlzdCA9IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHN0YXR1czp0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgbmFtZTpwYWdlXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIHRoaXMucHJvcHMub25TZWxlY3RMYW5ndWFnZShvcGVuTGlzdCk7IFxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtjb21pbmdTb29uOnRydWV9LChjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvbWluZ1Nvb24sXCJDb21pbmdTb29uXCIpKSlcclxuICAgICAgICAvLyAgICAgfSAgIFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jb2Rlc25pcHBldFwiO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMucGFnZU5hbWUhPT0ncHJvZHVjdC1kb2N1bWVudHMnJiZ0aGlzLnByb3BzLnBhZ2VOYW1lICE9PSAnZnJlZS1kZXNpZ24tcmVzb3VyY2VzJyYmdGhpcy5wcm9wcy5wYWdlTmFtZSAhPT0gJ2NvZGUtc25pcHBldHMtZG93bmxvYWQnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG9wZW5MaXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RhdHVzOnRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOnBhZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdExhbmd1YWdlKG9wZW5MaXN0KTsgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbWluZ1Nvb246dHJ1ZX0pXHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaERhdGFGcm9tTGlzdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7c2VhcmNoVmFsdWV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7bGlzdERhdGF9ICA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgZGVidWdnZXJcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGlzdERhdGEgOiBDb21tb25NZXRob2RzLmZpbHRlckRhdGEobGlzdERhdGEsIHNlYXJjaFZhbHVlLCAndGl0bGUnKSxcclxuICAgICAgICAgICAgc2VhcmNoU3RhdGU6dHJ1ZVxyXG4gICAgICAgIH0sKCk9PntcclxuICAgICAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lPT0nL2NvZGUtc25pcHBldHMtZG93bmxvYWQvJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHRoaXMuc3RhdGUuc2VhcmNoU3RhdGUpOyAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbGlzdERhdGEgOiB0aGlzLnByb3BzLmxpc3REYXRhLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoU3RhdGU6ZmFsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSwoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU9PScvY29kZS1zbmlwcGV0cy1kb3dubG9hZC8nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaCh0aGlzLnN0YXRlLnNlYXJjaFN0YXRlKTsgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkb3dubG9hZEltYWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5sb2NhbHBhdGggKyB2YWx1ZSwgJ0Rvd25sb2FkJykgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSAgICAgIHtcclxuICAgICAgICAvLyB0aGlzLnNoYXJlRGF0YSgpXHJcbiAgICAgICAgdGhpcy5jaGVja0xvZygpXHJcbiAgICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3BhZ2VOYW1lLCB0aXRsZVRleHQscGFnaW5hdGVkTGlzdCwgcGFnZURlc2NyaXB0aW9uLCBzdWJMaW5lVGV4dCxoaWRlQXJyb3d9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7bGlzdERhdGEsY29taW5nU29vbixsb2dnZWRJbixkb3dubG9hZExpbmssZG93bmxvYWRCdG4sc2VhcmNoU3RhdGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBzaGFyZVVybCA9ICdodHRwOi8vY29tbXVuaXR5LmRvb2RsZWJsdWUuY29tL2dpZnM/JztcclxuICAgICAgICBjb25zdCB0aXRsZSA9ICdDb21tdW5pdHkuRG9vZGxlYmx1ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdW1lbnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aDIgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj48Yj57dGl0bGVUZXh0fTwvYj48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctNjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2VEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsoc3ViTGluZVRleHQpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy02NSBmb250LXdlaWdodC1ub3JtYWwgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWNvbWluZ1Nvb24/PD4gICAge3N1YkxpbmVUZXh0fTwvPjonJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZpbHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBjb2wtbWQtNiBjb2wtc20tMTIgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoVmFsdWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbktleVVwPXt0aGlzLm9uS2V5VXB9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwic2VhcmNoLWJ0blwiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoRGF0YUZyb21MaXN0fT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImZpbHRlci1idG5cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUZpbHRlcn0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyRHJvcERvd24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyU2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZmlsdGVyU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtwYWdpbmF0ZWRMaXN0IT09dW5kZWZpbmVkJiZzZWFyY2hTdGF0ZT09ZmFsc2U/PGRpdiBjbGFzc05hbWU9e2Bkb2N1bWVudHMtY2FyZCBtYi00ICR7cGFnaW5hdGVkTGlzdCE9PXVuZGVmaW5lZCYmcGFnaW5hdGVkTGlzdD4xMj8ncGFnaW5hdGVkLWNvbnRlbnQnOicnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwYWdpbmF0ZWRMaXN0KS5tYXAoKGluZGV4LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AkeyhwYWdlTmFtZSA9PT0gJ3Byb2R1Y3QtZG9jdW1lbnRzJykgPyBcImNvbC1tZC00XCIgOiBcImNvbC1tZC0zIG5vLWRvY3VtZW50LXBhZ2VcIn0gIGNvbC1jdXN0b20tc21gfSAga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblVwXCIgYW5pbWF0ZU9uY2U9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHsocGFnZU5hbWUgPT09ICdwcm9kdWN0LWRvY3VtZW50cycpID8gXCJjYXJkMVwiIDogXCJjYXJkXCJ9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgb25DbGljaz17KCkgPT4ge3RoaXMucmVkaXJlY3RQYWdlKGluZGV4KX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3BhZ2luYXRlZExpc3RbaW5kZXhdLmltYWdlfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYXJyb3ctYmcgJHtoaWRlQXJyb3c/J2Fycm93LWhpZGUnOicnfWB9PntwYWdpbmF0ZWRMaXN0W2luZGV4XS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZCBmaWxlLWJ0biBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluPyA8YSBjbGFzc05hbWU9XCJcIiBocmVmPXtgJHtwYWdpbmF0ZWRMaXN0W2luZGV4XS5saW5rfWB9IGRvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxIDE1VjE5QzIxIDE5LjUzMDQgMjAuNzg5MyAyMC4wMzkxIDIwLjQxNDIgMjAuNDE0MkMyMC4wMzkxIDIwLjc4OTMgMTkuNTMwNCAyMSAxOSAyMUg1QzQuNDY5NTcgMjEgMy45NjA4NiAyMC43ODkzIDMuNTg1NzkgMjAuNDE0MkMzLjIxMDcxIDIwLjAzOTEgMyAxOS41MzA0IDMgMTlWMTVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03IDEwTDEyIDE1TDE3IDEwXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMTVWM1wiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiICBvbkNsaWNrPXsoKT0+dGhpcy5zaG93TW9kYWwocGFnaW5hdGVkTGlzdFtpbmRleF0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMSAxNVYxOUMyMSAxOS41MzA0IDIwLjc4OTMgMjAuMDM5MSAyMC40MTQyIDIwLjQxNDJDMjAuMDM5MSAyMC43ODkzIDE5LjUzMDQgMjEgMTkgMjFINUM0LjQ2OTU3IDIxIDMuOTYwODYgMjAuNzg5MyAzLjU4NTc5IDIwLjQxNDJDMy4yMTA3MSAyMC4wMzkxIDMgMTkuNTMwNCAzIDE5VjE1XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03IDEwTDEyIDE1TDE3IDEwXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAxNVYzXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlLWJ0biB0b29sdGlwLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTggOEMxOS42NTY5IDggMjEgNi42NTY4NSAyMSA1QzIxIDMuMzQzMTUgMTkuNjU2OSAyIDE4IDJDMTYuMzQzMSAyIDE1IDMuMzQzMTUgMTUgNUMxNSA2LjY1Njg1IDE2LjM0MzEgOCAxOCA4WlwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02IDE1QzcuNjU2ODUgMTUgOSAxMy42NTY5IDkgMTJDOSAxMC4zNDMxIDcuNjU2ODUgOSA2IDlDNC4zNDMxNSA5IDMgMTAuMzQzMSAzIDEyQzMgMTMuNjU2OSA0LjM0MzE1IDE1IDYgMTVaXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4IDIyQzE5LjY1NjkgMjIgMjEgMjAuNjU2OSAyMSAxOUMyMSAxNy4zNDMxIDE5LjY1NjkgMTYgMTggMTZDMTYuMzQzMSAxNiAxNSAxNy4zNDMxIDE1IDE5QzE1IDIwLjY1NjkgMTYuMzQzMSAyMiAxOCAyMlpcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC41OTAwMyAxMy41MUwxNS40MiAxNy40OVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS40MSA2LjUxMDAxTDguNTkwMDMgMTAuNDlcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwic2hhcmUtbGlzdC1pY29uXCIgc3JjPVwiL3NoYXJlLTIuc3ZnXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sdGlwdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YCR7c2hhcmVVcmx9JHtlbmNvZGVVUkkocGFnaW5hdGVkTGlzdFtpbmRleF0udGl0bGUpfSMke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiRGVtb19fc29tZS1uZXR3b3JrX19zaGFyZS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBzaXplPXszMn0gcm91bmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpbnRlcmVzdFNoYXJlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17U3RyaW5nKFwiLmxvY2F0aW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17YCR7U3RyaW5nKFwiLmxvY2F0aW9uXCIpfS8ke3NoYXJlVXJsfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkRlbW9fX3NvbWUtbmV0d29ya19fc2hhcmUtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaW50ZXJlc3RJY29uIHNpemU9ezMyfSByb3VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGludGVyZXN0U2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2Ake3NoYXJlVXJsfSR7ZW5jb2RlVVJJKHBhZ2luYXRlZExpc3RbaW5kZXhdLnRpdGxlKX0jJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkRlbW9fX3NvbWUtbmV0d29ya19fc2hhcmUtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiBzaXplPXszMn0gcm91bmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R3aXR0ZXJTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bkb2N1bWVudHMtY2FyZCBtYi00ICR7cGFnaW5hdGVkTGlzdCE9PXVuZGVmaW5lZCYmbGlzdERhdGEubGVuZ3RoPjEyPydwYWdpbmF0ZWQtY29udGVudCc6Jyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFjb21pbmdTb29uPzxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhsaXN0RGF0YSkubWFwKChpbmRleCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHsocGFnZU5hbWUgPT09ICdkb2N1bWVudCcpID8gXCJjb2wtbWQtNFwiIDogXCJjb2wtbWQtMyBuby1kb2N1bWVudC1wYWdlXCJ9IGNvbC1jdXN0b20tc21gfSAga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblVwXCIgYW5pbWF0ZU9uY2U9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHsocGFnZU5hbWUgPT09ICdkb2N1bWVudCcpID8gXCJjYXJkMVwiIDogXCJjYXJkXCJ9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3RoaXMucmVkaXJlY3RQYWdlKGluZGV4KX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2xpc3REYXRhW2luZGV4XS5pbWFnZX0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFycm93LWJnICR7aGlkZUFycm93PydhcnJvdy1oaWRlJzonJ31gfT57bGlzdERhdGFbaW5kZXhdLnRpdGxlfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtwYWdpbmF0ZWRMaXN0IT09dW5kZWZpbmVkPzxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIGZpbGUtYnRuIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbj88YSBjbGFzc05hbWU9XCJcIiBocmVmPXtgJHtsaXN0RGF0YVtpbmRleF0ubGlua31gfSBkb3dubG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMSAxNVYxOUMyMSAxOS41MzA0IDIwLjc4OTMgMjAuMDM5MSAyMC40MTQyIDIwLjQxNDJDMjAuMDM5MSAyMC43ODkzIDE5LjUzMDQgMjEgMTkgMjFINUM0LjQ2OTU3IDIxIDMuOTYwODYgMjAuNzg5MyAzLjU4NTc5IDIwLjQxNDJDMy4yMTA3MSAyMC4wMzkxIDMgMTkuNTMwNCAzIDE5VjE1XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03IDEwTDEyIDE1TDE3IDEwXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAxNVYzXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17KCk9PnRoaXMuc2hvd01vZGFsKHBhZ2luYXRlZExpc3RbaW5kZXhdKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxvYWQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEgMTVWMTlDMjEgMTkuNTMwNCAyMC43ODkzIDIwLjAzOTEgMjAuNDE0MiAyMC40MTQyQzIwLjAzOTEgMjAuNzg5MyAxOS41MzA0IDIxIDE5IDIxSDVDNC40Njk1NyAyMSAzLjk2MDg2IDIwLjc4OTMgMy41ODU3OSAyMC40MTQyQzMuMjEwNzEgMjAuMDM5MSAzIDE5LjUzMDQgMyAxOVYxNVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03IDEwTDEyIDE1TDE3IDEwXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDE1VjNcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS1idG4gdG9vbHRpcC1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTggOEMxOS42NTY5IDggMjEgNi42NTY4NSAyMSA1QzIxIDMuMzQzMTUgMTkuNjU2OSAyIDE4IDJDMTYuMzQzMSAyIDE1IDMuMzQzMTUgMTUgNUMxNSA2LjY1Njg1IDE2LjM0MzEgOCAxOCA4WlwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiAxNUM3LjY1Njg1IDE1IDkgMTMuNjU2OSA5IDEyQzkgMTAuMzQzMSA3LjY1Njg1IDkgNiA5QzQuMzQzMTUgOSAzIDEwLjM0MzEgMyAxMkMzIDEzLjY1NjkgNC4zNDMxNSAxNSA2IDE1WlwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTggMjJDMTkuNjU2OSAyMiAyMSAyMC42NTY5IDIxIDE5QzIxIDE3LjM0MzEgMTkuNjU2OSAxNiAxOCAxNkMxNi4zNDMxIDE2IDE1IDE3LjM0MzEgMTUgMTlDMTUgMjAuNjU2OSAxNi4zNDMxIDIyIDE4IDIyWlwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC41OTAwMyAxMy41MUwxNS40MiAxNy40OVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNDEgNi41MTAwMUw4LjU5MDAzIDEwLjQ5XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cInNoYXJlLWxpc3QtaWNvblwiIHNyYz1cIi9zaGFyZS0yLnN2Z1wiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcHRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2Ake3NoYXJlVXJsfSR7ZW5jb2RlVVJJKHNoYXJlVXJsKX0jJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiRGVtb19fc29tZS1uZXR3b3JrX19zaGFyZS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIHNpemU9ezMyfSByb3VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaW50ZXJlc3RTaGFyZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtTdHJpbmcoXCIubG9jYXRpb25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17YCR7U3RyaW5nKFwiLmxvY2F0aW9uXCIpfS8ke3NoYXJlVXJsfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJEZW1vX19zb21lLW5ldHdvcmtfX3NoYXJlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaW50ZXJlc3RJY29uIHNpemU9ezMyfSByb3VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BpbnRlcmVzdFNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtgJHtzaGFyZVVybH0ke2VuY29kZVVSSShzaGFyZVVybCl9IyR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkRlbW9fX3NvbWUtbmV0d29ya19fc2hhcmUtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJJY29uIHNpemU9ezMyfSByb3VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R3aXR0ZXJTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDonJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+OicnfVxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhsaXN0RGF0YSkubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3VtZW50LWNvbnRlbnQgbWlkLWNvbnRlbnQgcHQtNiBtdC01IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBtdC1jdXN0b20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3ViLWNvbnRlbnQgcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBkYXRhIGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyEhY29taW5nU29vbiYmIDxkaXYgY2xhc3NOYW1lPVwiZG9jdW1lbnQtY29udGVudCBtaWQtY29udGVudCBwdC02IG10LTUganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IG10LWN1c3RvbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Mj1cIkNvbWluZyBTb29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Mz1cIldvcmsgaW4gUHJvZ3Jlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ2PXtgV2UgYXJlIHdvcmtpbmcgdG8gcHJvdmlkZSB5b3Ugd2l0aCB0aGUgYmVzdCBwb3NzaWJsZSAke3RpdGxlVGV4dH1zYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ3LTgwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBkYXRhIHdpbGwgYmUgY29taW5nIHNvb24uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7Lyoge3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0gKi99XHJcbiAgICAgICAgICAgICAgICA8U2lnblVwRm9ybSBzaG93TW9kYWw9e3RoaXMuc3RhdGUuc2V0TW9kYWx9IGRvd25sb2FkTGluaz17ZG93bmxvYWRMaW5rfSBvbkNoYW5nZT17dGhpcy5oaWRlTW9kYWx9Lz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZUxpc3Q7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9