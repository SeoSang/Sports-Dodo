module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: MainRow, UpperCol, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRow", function() { return MainRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpperCol", function() { return UpperCol; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_dummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/dummy */ "./src/dummy.js");
/* harmony import */ var _styles_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styled-components */ "./styles/styled-components.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _jsxFileName = "C:\\Users\\SeoSang\\Desktop\\local_code\\Sports-Dodo\\front\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const FOOTBALL_TRANSLATE = '-0';
const BASEBALL_TRANSLATE = '-33.3%';
const BASKETBALL_TRANSLATE = '-66.6%';
const IMAGE_MAPPING = {
  축구: '/images/premier_league.png',
  야구: '/images/kbo.png',
  농구: '/images/nba.jpg'
};
const MainRow = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Row"]).withConfig({
  displayName: "pages__MainRow",
  componentId: "sc-190qa7b-0"
})(["height:100vh;background-color:#e8e8e8;"]);
const UpperCol = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Col"]).withConfig({
  displayName: "pages__UpperCol",
  componentId: "sc-190qa7b-1"
})(["padding:3px;margin:0.2vh 1vw;margin-top:1vh;height:35vh;background-color:#f6f5f5;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);"]);
const MessiContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pages__MessiContainer",
  componentId: "sc-190qa7b-2"
})(["height:93vh;overflow:hidden;opacity:90%;cursor:pointer;"]);

const Home = () => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const slideRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const messiRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const onClickFootball = e => {
    // 슬라이드 애니메이션
    setCurrentSlide(FOOTBALL_TRANSLATE);
  };

  const onClickBaseball = e => {
    setCurrentSlide(BASEBALL_TRANSLATE);
  };

  const onClickBasketball = e => {
    setCurrentSlide(BASKETBALL_TRANSLATE);
  };

  const scrollToBottom = () => {
    messiRef.current.scrollIntoView({
      behavior: 'smooth'
    });
    messiRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      zIndex: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(MessiContainer, {
    onClick: scrollToBottom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("img", {
    style: {
      minWidth: '100%'
    },
    src: "/images/messi.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }))), __jsx(MainRow, {
    style: {
      height: '100vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginTop: '5vh',
      textAlign: 'center'
    },
    justify: "space-around",
    gutter: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(UpperCol, {
    span: 19,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      overflow: 'hidden'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("div", {
    ref: slideRef,
    style: {
      width: '300%',
      display: 'flex',
      transition: 'all 0.5s ease-in-out',
      transform: `translateX(${currentSlide}`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, _src_dummy__WEBPACK_IMPORTED_MODULE_2__["dummy_main_matches"].map((match, i) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: `${i}번째 카드`,
    title: _src_dummy__WEBPACK_IMPORTED_MODULE_2__["dummy_main_matches"].category,
    bordered: true,
    style: {
      margin: '3px 5px',
      width: '11%',
      height: '100%'
    },
    key: `card${i}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, `${match.teamA} VS ${match.teamB}`, " "), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "\uC2B9 : 100p"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    percent: 30,
    size: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, "\uBB34 : 350p"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    strokeColor: 'green',
    percent: 50,
    size: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, "\uD328 : 80p"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    strokeColor: 'red',
    percent: 20,
    size: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginTop: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, "\uC790\uC138\uD788 \uBCF4\uAE30")))))), __jsx(UpperCol, {
    span: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["SportCategories"], {
    onClick: onClickFootball,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, "\uCD95\uAD6C"), __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["SportCategories"], {
    onClick: onClickBaseball,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, "\uC57C\uAD6C"), __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["SportCategories"], {
    onClick: onClickBasketball,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "\uB18D\uAD6C")))), __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["LowerDiv"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, "\uC2E4\uC2DC\uAC04 \uB7AD\uD0B9"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, _src_dummy__WEBPACK_IMPORTED_MODULE_2__["dummy_main_rankings"].map((ranking, i) => {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 8,
      key: `col__${i}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
      header: __jsx("img", {
        style: {
          width: '60px',
          height: '30px'
        },
        src: IMAGE_MAPPING[ranking.category],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 23
        }
      }),
      bordered: true,
      dataSource: ranking.rankings,
      renderItem: (item, i) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 23
        }
      }, `${i + 1}위 - ${item}`),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }));
  })))), __jsx("div", {
    style: {
      float: 'left',
      clear: 'both'
    },
    ref: messiRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./reducers/batting.js":
/*!*****************************!*\
  !*** ./reducers/batting.js ***!
  \*****************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sagas_batting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sagas/batting */ "./sagas/batting.js");


const initialState = {
  isLoadingBatting: false,
  isLoadedBatting: false,
  isLoadingBattings: false,
  isLoadedBattings: false,
  loadingErrorReason: '',
  batting: null,
  battings: null
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case _sagas_batting__WEBPACK_IMPORTED_MODULE_1__["LOAD_BATTINGS_REQUEST"]:
        draft.isLoadingBattings = true;
        draft.isLoadedBattings = false;
        break;

      case _sagas_batting__WEBPACK_IMPORTED_MODULE_1__["LOAD_BATTINGS_SUCCESS"]:
        draft.isLoadingBattings = false;
        draft.isLoadedBattings = true;
        draft.battings = action.data;
        break;

      case _sagas_batting__WEBPACK_IMPORTED_MODULE_1__["LOAD_BATTINGS_FAILURE"]:
        draft.isLoadingBattings = false;
        draft.isLoadedBattings = false;
        draft.battings = null;
        draft.loadingErrorReason = action.error;
        break;

      case _sagas_batting__WEBPACK_IMPORTED_MODULE_1__["LOAD_BATTING_REQUEST"]:
        draft.isLoadingBatting = true;
        draft.isLoadedBatting = false;
        break;

      case _sagas_batting__WEBPACK_IMPORTED_MODULE_1__["LOAD_BATTING_SUCCESS"]:
        draft.isLoadingBatting = false;
        draft.isLoadedBatting = true;
        draft.batting = action.data;
        break;

      case _sagas_batting__WEBPACK_IMPORTED_MODULE_1__["LOAD_BATTING_FAILURE"]:
        draft.isLoadingBatting = false;
        draft.isLoadedBatting = false;
        draft.loadingErrorReason = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.js */ "./reducers/user.js");
/* harmony import */ var _batting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./batting.js */ "./reducers/batting.js");
/* harmony import */ var _ranking_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ranking.js */ "./reducers/ranking.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./match.js */ "./reducers/match.js");
// 하위 리듀서들 하나로 묶어주는 index





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  ranking: _ranking_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  batting: _batting_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  match: _match_js__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/match.js":
/*!***************************!*\
  !*** ./reducers/match.js ***!
  \***************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sagas_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sagas/match */ "./sagas/match.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  isLoadingMatchs: false,
  isLoadedMatchs: false,
  loadMatchsErrorReason: '',
  matchs: null,
  matchsIndex: 0,
  hasNext: true
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
        draft = _objectSpread(_objectSpread({}, state), action.payload);
        break;

      case _sagas_match__WEBPACK_IMPORTED_MODULE_2__["LOAD_MATCHS_REQUEST"]:
        draft.isLoadingMatchs = true;
        draft.isLoadedMatchs = false;
        break;

      case _sagas_match__WEBPACK_IMPORTED_MODULE_2__["LOAD_MATCHS_SUCCESS"]:
        draft.isLoadingMatchs = false;
        draft.isLoadedMatchs = true;
        draft.matchs = action.data.data;
        draft.matchsIndex = action.data.nextStartIndex;
        draft.hasNext = action.data.hasNext;
        break;

      case _sagas_match__WEBPACK_IMPORTED_MODULE_2__["LOAD_MATCHS_FAILURE"]:
        draft.isLoadingMatchs = false;
        draft.isLoadedMatchs = true;
        draft.matchs = null;
        draft.loadingErrorReason = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/ranking.js":
/*!*****************************!*\
  !*** ./reducers/ranking.js ***!
  \*****************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sagas_ranking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sagas/ranking */ "./sagas/ranking.js");


const initialState = {
  isLoadingRankings: false,
  isLoadedRankings: false,
  loadRankingsErrorReason: '',
  rankings: null
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case _sagas_ranking__WEBPACK_IMPORTED_MODULE_1__["LOAD_RANKINGS_REQUEST"]:
        draft.isLoadingRankings = true;
        draft.isLoadedRankings = false;
        break;

      case _sagas_ranking__WEBPACK_IMPORTED_MODULE_1__["LOAD_RANKINGS_SUCCESS"]:
        draft.isLoadingRankings = false;
        draft.isLoadedRankings = true;
        draft.rankings = action.data;
        break;

      case _sagas_ranking__WEBPACK_IMPORTED_MODULE_1__["LOAD_RANKINGS_FAILURE"]:
        draft.isLoadingRankings = false;
        draft.isLoadedRankings = false;
        draft.rankings = null;
        draft.loadingErrorReason = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sagas_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sagas/user */ "./sagas/user.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  isLoggingIn: false,
  isLoginSuccess: false,
  me: null,
  myRank: null,
  isRegistering: false,
  isRegisterSuccess: false,
  userInfo: null,
  loginErrorReason: '',
  registerErrorReason: '',
  token: null
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
        draft = _objectSpread(_objectSpread({}, state), action.payload);
        break;

      case _sagas_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"]:
        draft.isLoggingIn = true;
        draft.loginErrorReason = '';
        break;

      case _sagas_user__WEBPACK_IMPORTED_MODULE_2__["SET_TOKEN"]:
        draft.token = action.data;
        break;

      case _sagas_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"]:
        draft.isLoggingIn = false;
        draft.isLoginSuccess = true;
        draft.me = action.data.data;
        break;

      case _sagas_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"]:
        draft.me = null;
        draft.isLoggingIn = false;
        draft.isLoginSuccess = false;
        draft.loginErrorReason = action.error;
        break;

      case _sagas_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"]:
        draft.me = null;
        break;

      case _sagas_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"]:
        draft.me = action.data.data;
        draft.myRank = action.rank;
        break;

      case _sagas_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"]:
        draft.me = null;
        break;

      case _sagas_user__WEBPACK_IMPORTED_MODULE_2__["REGISTER_REQUEST"]:
        draft.isRegistering = true;
        draft.isRegisterSuccess = false;
        break;

      case _sagas_user__WEBPACK_IMPORTED_MODULE_2__["REGISTER_SUCCESS"]:
        draft.isRegistering = false;
        draft.isRegisterSuccess = true;
        break;

      case _sagas_user__WEBPACK_IMPORTED_MODULE_2__["REGISTER_FAILURE"]:
        draft.isRegistering = false;
        draft.registerErrorReason = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/batting.js":
/*!**************************!*\
  !*** ./sagas/batting.js ***!
  \**************************/
/*! exports provided: LOAD_BATTINGS_REQUEST, LOAD_BATTINGS_SUCCESS, LOAD_BATTINGS_FAILURE, LOAD_BATTING_SUCCESS, LOAD_BATTING_REQUEST, LOAD_BATTING_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BATTINGS_REQUEST", function() { return LOAD_BATTINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BATTINGS_SUCCESS", function() { return LOAD_BATTINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BATTINGS_FAILURE", function() { return LOAD_BATTINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BATTING_SUCCESS", function() { return LOAD_BATTING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BATTING_REQUEST", function() { return LOAD_BATTING_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BATTING_FAILURE", function() { return LOAD_BATTING_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return battingSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/dummy */ "./src/dummy.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = `${_src_dummy__WEBPACK_IMPORTED_MODULE_1__["BACKEND_URL"]}/api`;
const LOAD_BATTINGS_REQUEST = 'LOAD_BATTINGS_REQUEST';
const LOAD_BATTINGS_SUCCESS = 'LOAD_BATTINGS_SUCCESS';
const LOAD_BATTINGS_FAILURE = 'LOAD_BATTINGS_FAILURE';
const LOAD_BATTING_SUCCESS = 'LOAD_BATTING_SUCCESS';
const LOAD_BATTING_REQUEST = 'LOAD_BATTING_REQUEST';
const LOAD_BATTING_FAILURE = 'LOAD_BATTING_FAILURE';

function loadBattingAPI(battingId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/batting/${battingId}`);
}

function* loadBatting(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadBattingAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_BATTING_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_BATTING_FAILURE,
      error: e
    });
  }
}

function* watchLoadBatting() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(LOAD_BATTING_REQUEST, loadBatting);
}

function loadBattingsAPI(userId, count) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/battings?userid=${userId}&count=${count}`);
}

function* loadBattings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadBattingsAPI, action.userId, action.count);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_BATTINGS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_BATTINGS_FAILURE,
      error: e
    });
  }
}

function* watchLoadBattings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(LOAD_BATTINGS_REQUEST, loadBattings);
}

function* battingSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadBattings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadBatting)]);
}

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _batting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./batting */ "./sagas/batting.js");
/* harmony import */ var _ranking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ranking */ "./sagas/ranking.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./match */ "./sagas/match.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_dummy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/dummy.js */ "./src/dummy.js");







axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.baseURL = `${_src_dummy_js__WEBPACK_IMPORTED_MODULE_6__["BACKEND_URL"]}/api`;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_match__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_user__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_batting__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_ranking__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/match.js":
/*!************************!*\
  !*** ./sagas/match.js ***!
  \************************/
/*! exports provided: LOAD_MATCHS_REQUEST, LOAD_MATCHS_SUCCESS, LOAD_MATCHS_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MATCHS_REQUEST", function() { return LOAD_MATCHS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MATCHS_SUCCESS", function() { return LOAD_MATCHS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MATCHS_FAILURE", function() { return LOAD_MATCHS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return matchSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/dummy */ "./src/dummy.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = `${_src_dummy__WEBPACK_IMPORTED_MODULE_1__["BACKEND_URL"]}/api`;
const LOAD_MATCHS_REQUEST = 'LOAD_MATCHS_REQUEST';
const LOAD_MATCHS_SUCCESS = 'LOAD_MATCHS_SUCCESS';
const LOAD_MATCHS_FAILURE = 'LOAD_MATCHS_FAILURE';

function loadMatchsAPI(index = -1) {
  const nowTime = moment__WEBPACK_IMPORTED_MODULE_3___default()().format();

  if (index == -1) {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/match?startTime[gt]=${nowTime}`);
  }

  const limit = 10; // 받을 개수

  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/match?startTime[gt]=${nowTime}&limit=${limit}&startindex=${index}`);
}

function* loadMatchs(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMatchsAPI, action.index); // yield call(console.log('@@@@@ loadMatchs result @@@@@'));
    // yield call(console.log(result));

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_MATCHS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_MATCHS_FAILURE,
      error: JSON.stringify(e)
    });
  }
}

function* watchLoadMatchs() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(LOAD_MATCHS_REQUEST, loadMatchs);
}

function* matchSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMatchs)]);
}

/***/ }),

/***/ "./sagas/ranking.js":
/*!**************************!*\
  !*** ./sagas/ranking.js ***!
  \**************************/
/*! exports provided: LOAD_RANKINGS_REQUEST, LOAD_RANKINGS_SUCCESS, LOAD_RANKINGS_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RANKINGS_REQUEST", function() { return LOAD_RANKINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RANKINGS_SUCCESS", function() { return LOAD_RANKINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RANKINGS_FAILURE", function() { return LOAD_RANKINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rankingSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/dummy */ "./src/dummy.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = `${_src_dummy__WEBPACK_IMPORTED_MODULE_1__["BACKEND_URL"]}/api`;
const LOAD_RANKINGS_REQUEST = 'LOAD_RANKINGS_REQUEST';
const LOAD_RANKINGS_SUCCESS = 'LOAD_RANKINGS_SUCCESS';
const LOAD_RANKINGS_FAILURE = 'LOAD_RANKINGS_FAILURE';

function loadRankingsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/rankings`);
}

function* loadRankings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadRankingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_RANKINGS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_RANKINGS_FAILURE,
      error: e
    });
  }
}

function* watchLoadRankings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(LOAD_RANKINGS_REQUEST, loadRankings);
}

function* rankingSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadRankings)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, SET_TOKEN, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_REQUEST", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAILURE", function() { return REGISTER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/dummy */ "./src/dummy.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const SET_TOKEN = 'SET_TOKEN';
axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = `${_src_dummy__WEBPACK_IMPORTED_MODULE_1__["BACKEND_URL"]}/api`;

function loginAPI(loginData) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/login', loginData);
}

function* login(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loginAPI, action.data); // call -> loginAPI(action.data)

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // 토큰 저장
      type: SET_TOKEN,
      data: result.data.token
    });
    yield sessionStorage.setItem('sd', result.data.token); // 토큰 저장

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put -> Action lk실행
      type: LOG_IN_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield console.error(e);
    yield alert('잘못된 아이디 혹은 비밀번호입니다!');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOG_IN_FAILURE,
      error: e
    });
  }
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(LOG_IN_REQUEST, login);
}

function registerAPI(registerData) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user', registerData);
}

function* register(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(registerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put -> Action 실행
      type: REGISTER_SUCCESS,
      data: result
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: REGISTER_FAILURE,
      error: e
    });
  }
}

function* watchRegister() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(REGISTER_REQUEST, register);
}

function loadUserAPI(userData) {
  if (userData.me) {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/profile');
  }

  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/user/${userData.id}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put -> Action 실행
      type: LOAD_USER_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(LOAD_USER_REQUEST, loadUser);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRegister), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser)]);
}

/***/ }),

/***/ "./src/dummy.js":
/*!**********************!*\
  !*** ./src/dummy.js ***!
  \**********************/
/*! exports provided: dummy_me, dummy_match_A, dummy_match_B, dummy_match_C, dummy_main_matches, dummy_ranking_A, dummy_ranking_B, dummy_ranking_C, dummy_main_rankings, dummy_profile, BACKEND_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy_me", function() { return dummy_me; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy_match_A", function() { return dummy_match_A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy_match_B", function() { return dummy_match_B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy_match_C", function() { return dummy_match_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy_main_matches", function() { return dummy_main_matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy_ranking_A", function() { return dummy_ranking_A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy_ranking_B", function() { return dummy_ranking_B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy_ranking_C", function() { return dummy_ranking_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy_main_rankings", function() { return dummy_main_rankings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy_profile", function() { return dummy_profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL", function() { return BACKEND_URL; });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages */ "./pages/index.js");
// 아직 서버로부터 데이터를 전달받지 않으니
// 더미 데이터 형식을 미리 만들어 두었습니다.

const dummy_me = {
  email: 'scscsc@naver.com',
  nickname: '김건모'
};
const dummy_match_A = {
  category: '축구',
  teamA: '토트넘',
  teamB: '아스날',
  time: new Date(),
  battings: []
};
const dummy_match_B = {
  category: '야구',
  teamA: '한화',
  teamB: '두산',
  time: new Date(),
  battings: []
};
const dummy_match_C = {
  category: '농구',
  teamA: '마이클조던',
  teamB: '서장훈',
  time: new Date(),
  battings: []
};
const dummy_main_matches = [new Array(3).fill(dummy_match_A), new Array(3).fill(dummy_match_B), new Array(3).fill(dummy_match_C)].reduce((arr1, arr2) => arr1.concat(arr2));
const dummy_ranking_A = {
  category: '축구',
  rankings: ['토트넘', '손흥민', '박지성', '김홍길', '동임꺽']
};
const dummy_ranking_B = {
  category: '야구',
  rankings: ['김현수', '야구의왕', '내이름', '은바로', '김상순']
};
const dummy_ranking_C = {
  category: '농구',
  rankings: ['마이클', '조던', '서장훈', '김홍길', '동임꺽']
};
const dummy_main_rankings = [dummy_ranking_A, dummy_ranking_B, dummy_ranking_C];
const dummy_profile = {
  id: 'asd',
  email: 'david@naver.com',
  nickname: '김데입',
  name: '데이비드',
  point: 1250,
  battings: [{
    select: 'win',
    point: 100,
    match: {
      homeTeam: '수원삼성',
      awayTeam: '전북현대'
    },
    result: {
      matchResult: 'win',
      reward: 250
    }
  }, {
    select: 'lose',
    point: 200,
    match: {
      homeTeam: '첼시',
      awayTeam: '맨유'
    },
    result: {
      matchResult: 'win',
      reward: 300
    }
  }, {
    select: 'draw',
    point: 150,
    match: {
      homeTeam: '한국',
      awayTeam: '브라질'
    },
    result: {
      matchResult: 'win',
      reward: 350
    }
  }]
};
const BACKEND_URL = 'http://localhost:1337';

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], bindMiddleware([sagaMiddleware, redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a]));
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./styles/styled-components.js":
/*!*************************************!*\
  !*** ./styles/styled-components.js ***!
  \*************************************/
/*! exports provided: TitleBarDiv, ContentDiv, Background90Div, UpperDiv, LowerDiv, FullDiv, SportCategories, COLOR_1, COLOR_2, COLOR_3, COLOR_4, COLOR_5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleBarDiv", function() { return TitleBarDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentDiv", function() { return ContentDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background90Div", function() { return Background90Div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpperDiv", function() { return UpperDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowerDiv", function() { return LowerDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullDiv", function() { return FullDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportCategories", function() { return SportCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_1", function() { return COLOR_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_2", function() { return COLOR_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_3", function() { return COLOR_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_4", function() { return COLOR_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_5", function() { return COLOR_5; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);

 // _app 에서 쓰임

const TitleBarDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled-components__TitleBarDiv",
  componentId: "sc-1h5gj8s-0"
})(["border-bottom-width:1px;border-bottom-style:solid;background-color:#001529;padding:2px;"]);
const ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled-components__ContentDiv",
  componentId: "sc-1h5gj8s-1"
})(["background-color:#e8e8e8;min-height:90vh;border:1px solid white;"]); // 기타

const Background90Div = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled-components__Background90Div",
  componentId: "sc-1h5gj8s-2"
})(["min-height:90vh;padding:0vh;background-color:white;"]);
const UpperDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled-components__UpperDiv",
  componentId: "sc-1h5gj8s-3"
})(["padding:3px;margin:0.2vh 1vw;margin-top:1vh;height:35vh;background-color:#f6f5f5;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);"]);
const LowerDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled-components__LowerDiv",
  componentId: "sc-1h5gj8s-4"
})(["padding:3px;margin:2vh 3vw;background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);"]);
const FullDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled-components__FullDiv",
  componentId: "sc-1h5gj8s-5"
})(["padding:3px;margin:1vh 3vw;height:70vh;background-color:#dcdcdc;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);text-align:center;"]); // TODO : 왜 important 안쓰면 적용이 안될까?

const SportCategories = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "styled-components__SportCategories",
  componentId: "sc-1h5gj8s-6"
})(["cursor:pointer;border-top:2px solid;border-bottom:2px solid;border-radius:5px;height:10vh !important;"]);
const COLOR_1 = '#64798C';
const COLOR_2 = '#2E3740';
const COLOR_3 = '#B6DBF2';
const COLOR_4 = '#CEE8F2';
const COLOR_5 = '#0D0D0D';

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvYmF0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yYW5raW5nLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvYmF0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9yYW5raW5nLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R1bW15LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zdHlsZWQtY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJGT09UQkFMTF9UUkFOU0xBVEUiLCJCQVNFQkFMTF9UUkFOU0xBVEUiLCJCQVNLRVRCQUxMX1RSQU5TTEFURSIsIklNQUdFX01BUFBJTkciLCLstpXqtawiLCLslbzqtawiLCLrho3qtawiLCJNYWluUm93Iiwic3R5bGVkIiwiUm93IiwiVXBwZXJDb2wiLCJDb2wiLCJNZXNzaUNvbnRhaW5lciIsImRpdiIsIkhvbWUiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJ1c2VTdGF0ZSIsInNsaWRlUmVmIiwidXNlUmVmIiwibWVzc2lSZWYiLCJvbkNsaWNrRm9vdGJhbGwiLCJlIiwib25DbGlja0Jhc2ViYWxsIiwib25DbGlja0Jhc2tldGJhbGwiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiekluZGV4IiwibWluV2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJvdmVyZmxvdyIsIndpZHRoIiwiZGlzcGxheSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJkdW1teV9tYWluX21hdGNoZXMiLCJtYXAiLCJtYXRjaCIsImkiLCJjYXRlZ29yeSIsIm1hcmdpbiIsInRlYW1BIiwidGVhbUIiLCJkdW1teV9tYWluX3JhbmtpbmdzIiwicmFua2luZyIsInJhbmtpbmdzIiwiaXRlbSIsImZsb2F0IiwiY2xlYXIiLCJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmdCYXR0aW5nIiwiaXNMb2FkZWRCYXR0aW5nIiwiaXNMb2FkaW5nQmF0dGluZ3MiLCJpc0xvYWRlZEJhdHRpbmdzIiwibG9hZGluZ0Vycm9yUmVhc29uIiwiYmF0dGluZyIsImJhdHRpbmdzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSIsIkxPQURfQkFUVElOR1NfUkVRVUVTVCIsIkxPQURfQkFUVElOR1NfU1VDQ0VTUyIsImRhdGEiLCJMT0FEX0JBVFRJTkdTX0ZBSUxVUkUiLCJlcnJvciIsIkxPQURfQkFUVElOR19SRVFVRVNUIiwiTE9BRF9CQVRUSU5HX1NVQ0NFU1MiLCJMT0FEX0JBVFRJTkdfRkFJTFVSRSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsImlzTG9hZGluZ01hdGNocyIsImlzTG9hZGVkTWF0Y2hzIiwibG9hZE1hdGNoc0Vycm9yUmVhc29uIiwibWF0Y2hzIiwibWF0Y2hzSW5kZXgiLCJoYXNOZXh0IiwiSFlEUkFURSIsInBheWxvYWQiLCJMT0FEX01BVENIU19SRVFVRVNUIiwiTE9BRF9NQVRDSFNfU1VDQ0VTUyIsIm5leHRTdGFydEluZGV4IiwiTE9BRF9NQVRDSFNfRkFJTFVSRSIsImlzTG9hZGluZ1JhbmtpbmdzIiwiaXNMb2FkZWRSYW5raW5ncyIsImxvYWRSYW5raW5nc0Vycm9yUmVhc29uIiwiTE9BRF9SQU5LSU5HU19SRVFVRVNUIiwiTE9BRF9SQU5LSU5HU19TVUNDRVNTIiwiTE9BRF9SQU5LSU5HU19GQUlMVVJFIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2luU3VjY2VzcyIsIm1lIiwibXlSYW5rIiwiaXNSZWdpc3RlcmluZyIsImlzUmVnaXN0ZXJTdWNjZXNzIiwidXNlckluZm8iLCJsb2dpbkVycm9yUmVhc29uIiwicmVnaXN0ZXJFcnJvclJlYXNvbiIsInRva2VuIiwiTE9HX0lOX1JFUVVFU1QiLCJTRVRfVE9LRU4iLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsInJhbmsiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIlJFR0lTVEVSX1JFUVVFU1QiLCJSRUdJU1RFUl9TVUNDRVNTIiwiUkVHSVNURVJfRkFJTFVSRSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiQkFDS0VORF9VUkwiLCJsb2FkQmF0dGluZ0FQSSIsImJhdHRpbmdJZCIsImdldCIsImxvYWRCYXR0aW5nIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImNvbnNvbGUiLCJ3YXRjaExvYWRCYXR0aW5nIiwidGFrZUxhdGVzdCIsImxvYWRCYXR0aW5nc0FQSSIsInVzZXJJZCIsImNvdW50IiwibG9hZEJhdHRpbmdzIiwid2F0Y2hMb2FkQmF0dGluZ3MiLCJiYXR0aW5nU2FnYSIsImFsbCIsImZvcmsiLCJyb290U2FnYSIsIm1hdGNoU2FnYSIsInVzZXJTYWdhIiwicmFua2luZ1NhZ2EiLCJsb2FkTWF0Y2hzQVBJIiwiaW5kZXgiLCJub3dUaW1lIiwibW9tZW50IiwiZm9ybWF0IiwibGltaXQiLCJsb2FkTWF0Y2hzIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhdGNoTG9hZE1hdGNocyIsImxvYWRSYW5raW5nc0FQSSIsImxvYWRSYW5raW5ncyIsIndhdGNoTG9hZFJhbmtpbmdzIiwibG9naW5BUEkiLCJsb2dpbkRhdGEiLCJwb3N0IiwibG9naW4iLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJhbGVydCIsIndhdGNoTG9naW4iLCJyZWdpc3RlckFQSSIsInJlZ2lzdGVyRGF0YSIsInJlZ2lzdGVyIiwid2F0Y2hSZWdpc3RlciIsImxvYWRVc2VyQVBJIiwidXNlckRhdGEiLCJpZCIsImxvYWRVc2VyIiwid2F0Y2hMb2FkVXNlciIsImR1bW15X21lIiwiZW1haWwiLCJuaWNrbmFtZSIsImR1bW15X21hdGNoX0EiLCJ0aW1lIiwiRGF0ZSIsImR1bW15X21hdGNoX0IiLCJkdW1teV9tYXRjaF9DIiwiQXJyYXkiLCJmaWxsIiwicmVkdWNlIiwiYXJyMSIsImFycjIiLCJjb25jYXQiLCJkdW1teV9yYW5raW5nX0EiLCJkdW1teV9yYW5raW5nX0IiLCJkdW1teV9yYW5raW5nX0MiLCJkdW1teV9wcm9maWxlIiwibmFtZSIsInBvaW50Iiwic2VsZWN0IiwiaG9tZVRlYW0iLCJhd2F5VGVhbSIsIm1hdGNoUmVzdWx0IiwicmV3YXJkIiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlcXVpcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJtYWtlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJsb2dnZXIiLCJzYWdhVGFzayIsInJ1biIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJUaXRsZUJhckRpdiIsIkNvbnRlbnREaXYiLCJCYWNrZ3JvdW5kOTBEaXYiLCJVcHBlckRpdiIsIkxvd2VyRGl2IiwiRnVsbERpdiIsIlNwb3J0Q2F0ZWdvcmllcyIsIkJ1dHRvbiIsIkNPTE9SXzEiLCJDT0xPUl8yIiwiQ09MT1JfMyIsIkNPTE9SXzQiLCJDT0xPUl81Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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d0RBQU0sQ0FBQ0ssR0FBVjtBQUFBO0FBQUE7QUFBQSw4SkFBZDtBQVFBLE1BQU04TSxRQUFRLEdBQUduTix3REFBTSxDQUFDSyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtIQUFkO0FBT0EsTUFBTStNLE9BQU8sR0FBR3BOLHdEQUFNLENBQUNLLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0pBQWIsQyxDQVNQOztBQUNPLE1BQU1nTixlQUFlLEdBQUdyTix3REFBTSxDQUFDc04sMkNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw2R0FBckI7QUFRQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEIsQzs7Ozs7Ozs7Ozs7QUM1RFAsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgTGlzdCwgUm93LCBDb2wsIENhcmQsIFByb2dyZXNzLCBCdXR0b24sIExheW91dCwgQmFja1RvcCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1xyXG4gIGR1bW15X21hdGNoX0EsXHJcbiAgZHVtbXlfbWFpbl9yYW5raW5ncyxcclxuICBkdW1teV9tYWluX21hdGNoZXMsXHJcbn0gZnJvbSAnLi4vc3JjL2R1bW15JztcclxuaW1wb3J0IHsgTG93ZXJEaXYsIFNwb3J0Q2F0ZWdvcmllcyB9IGZyb20gJy4uL3N0eWxlcy9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG5jb25zdCBGT09UQkFMTF9UUkFOU0xBVEUgPSAnLTAnO1xyXG5jb25zdCBCQVNFQkFMTF9UUkFOU0xBVEUgPSAnLTMzLjMlJztcclxuY29uc3QgQkFTS0VUQkFMTF9UUkFOU0xBVEUgPSAnLTY2LjYlJztcclxuXHJcbmNvbnN0IElNQUdFX01BUFBJTkcgPSB7XHJcbiAg7LaV6rWsOiAnL2ltYWdlcy9wcmVtaWVyX2xlYWd1ZS5wbmcnLFxyXG4gIOyVvOq1rDogJy9pbWFnZXMva2JvLnBuZycsXHJcbiAg64aN6rWsOiAnL2ltYWdlcy9uYmEuanBnJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluUm93ID0gc3R5bGVkKFJvdylgXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwcGVyQ29sID0gc3R5bGVkKENvbClgXHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbjogMC4ydmggMXZ3O1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDM1dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG5gO1xyXG5cclxuY29uc3QgTWVzc2lDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogOTN2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDkwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBtZXNzaVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0Zvb3RiYWxsID0gKGUpID0+IHtcclxuICAgIC8vIOyKrOudvOydtOuTnCDslaDri4jrqZTsnbTshZhcclxuICAgIHNldEN1cnJlbnRTbGlkZShGT09UQkFMTF9UUkFOU0xBVEUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DbGlja0Jhc2ViYWxsID0gKGUpID0+IHtcclxuICAgIHNldEN1cnJlbnRTbGlkZShCQVNFQkFMTF9UUkFOU0xBVEUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DbGlja0Jhc2tldGJhbGwgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFNsaWRlKEJBU0tFVEJBTExfVFJBTlNMQVRFKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIG1lc3NpUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICBtZXNzaVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Um93IHN0eWxlPXt7IHpJbmRleDogMjAgfX0+XHJcbiAgICAgICAgPE1lc3NpQ29udGFpbmVyIG9uQ2xpY2s9e3Njcm9sbFRvQm90dG9tfT5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWluV2lkdGg6ICcxMDAlJyB9fSBzcmM9XCIvaW1hZ2VzL21lc3NpLmpwZ1wiPjwvaW1nPlxyXG4gICAgICAgIDwvTWVzc2lDb250YWluZXI+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8TWFpblJvdyBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XHJcbiAgICAgICAgPFJvd1xyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNXZoJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiXHJcbiAgICAgICAgICBndXR0ZXI9ezE2fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxVcHBlckNvbCBzcGFuPXsxOX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJlZj17c2xpZGVSZWZ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzMwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cyBlYXNlLWluLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtjdXJyZW50U2xpZGV9YCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2R1bW15X21haW5fbWF0Y2hlcy5tYXAoKG1hdGNoLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpfeuyiOynuCDsubTrk5xgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtkdW1teV9tYWluX21hdGNoZXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzNweCA1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMSUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjYXJkJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2Ake21hdGNoLnRlYW1BfSBWUyAke21hdGNoLnRlYW1CfWB9IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPuyKuSA6IDEwMHA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyBwZXJjZW50PXszMH0gc2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+66y0IDogMzUwcDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHN0cm9rZUNvbG9yPXsnZ3JlZW4nfSBwZXJjZW50PXs1MH0gc2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+7YyoIDogODBwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3Mgc3Ryb2tlQ29sb3I9eydyZWQnfSBwZXJjZW50PXsyMH0gc2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpblRvcDogJzE1cHgnIH19PuyekOyEuO2eiCDrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9VcHBlckNvbD5cclxuICAgICAgICAgIDxVcHBlckNvbCBzcGFuPXszfT5cclxuICAgICAgICAgICAgPExheW91dCBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICA8U3BvcnRDYXRlZ29yaWVzIG9uQ2xpY2s9e29uQ2xpY2tGb290YmFsbH0+7LaV6rWsPC9TcG9ydENhdGVnb3JpZXM+XHJcbiAgICAgICAgICAgICAgPFNwb3J0Q2F0ZWdvcmllcyBvbkNsaWNrPXtvbkNsaWNrQmFzZWJhbGx9PuyVvOq1rDwvU3BvcnRDYXRlZ29yaWVzPlxyXG4gICAgICAgICAgICAgIDxTcG9ydENhdGVnb3JpZXMgb25DbGljaz17b25DbGlja0Jhc2tldGJhbGx9PlxyXG4gICAgICAgICAgICAgICAg64aN6rWsXHJcbiAgICAgICAgICAgICAgPC9TcG9ydENhdGVnb3JpZXM+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgPC9VcHBlckNvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8TG93ZXJEaXY+XHJcbiAgICAgICAgICA8aDI+7Iuk7Iuc6rCEIOuere2CuTwvaDI+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICB7ZHVtbXlfbWFpbl9yYW5raW5ncy5tYXAoKHJhbmtpbmcsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fSBrZXk9e2Bjb2xfXyR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17SU1BR0VfTUFQUElOR1tyYW5raW5nLmNhdGVnb3J5XX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtyYW5raW5nLnJhbmtpbmdzfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPntgJHtpICsgMX3snIQgLSAke2l0ZW19YH08L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA+PC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0xvd2VyRGl2PlxyXG4gICAgICA8L01haW5Sb3c+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JywgY2xlYXI6ICdib3RoJyB9fSByZWY9e21lc3NpUmVmfT48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCB7XHJcbiAgTE9BRF9CQVRUSU5HU19SRVFVRVNULFxyXG4gIExPQURfQkFUVElOR1NfU1VDQ0VTUyxcclxuICBMT0FEX0JBVFRJTkdTX0ZBSUxVUkUsXHJcbiAgTE9BRF9CQVRUSU5HX1JFUVVFU1QsXHJcbiAgTE9BRF9CQVRUSU5HX1NVQ0NFU1MsXHJcbiAgTE9BRF9CQVRUSU5HX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vc2FnYXMvYmF0dGluZyc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9hZGluZ0JhdHRpbmc6IGZhbHNlLFxyXG4gIGlzTG9hZGVkQmF0dGluZzogZmFsc2UsXHJcbiAgaXNMb2FkaW5nQmF0dGluZ3M6IGZhbHNlLFxyXG4gIGlzTG9hZGVkQmF0dGluZ3M6IGZhbHNlLFxyXG4gIGxvYWRpbmdFcnJvclJlYXNvbjogJycsXHJcbiAgYmF0dGluZzogbnVsbCxcclxuICBiYXR0aW5nczogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FEX0JBVFRJTkdTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nQmF0dGluZ3MgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9hZGVkQmF0dGluZ3MgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0JBVFRJTkdTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nQmF0dGluZ3MgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0xvYWRlZEJhdHRpbmdzID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5iYXR0aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQkFUVElOR1NfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdCYXR0aW5ncyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9hZGVkQmF0dGluZ3MgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5iYXR0aW5ncyA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9hZGluZ0Vycm9yUmVhc29uID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQkFUVElOR19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ0JhdHRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9hZGVkQmF0dGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQkFUVElOR19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ0JhdHRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0xvYWRlZEJhdHRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmJhdHRpbmcgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0JBVFRJTkdfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdCYXR0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNMb2FkZWRCYXR0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZGluZ0Vycm9yUmVhc29uID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiLy8g7ZWY7JyEIOumrOuTgOyEnOuTpCDtlZjrgpjroZwg66y27Ja07KO864qUIGluZGV4XHJcblxyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlci5qcyc7XHJcbmltcG9ydCBiYXR0aW5nIGZyb20gJy4vYmF0dGluZy5qcyc7XHJcbmltcG9ydCByYW5raW5nIGZyb20gJy4vcmFua2luZy5qcyc7XHJcbmltcG9ydCBtYXRjaCBmcm9tICcuL21hdGNoLmpzJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyLFxyXG4gIHJhbmtpbmcsXHJcbiAgYmF0dGluZyxcclxuICBtYXRjaCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHtcclxuICBMT0FEX01BVENIU19SRVFVRVNULFxyXG4gIExPQURfTUFUQ0hTX1NVQ0NFU1MsXHJcbiAgTE9BRF9NQVRDSFNfRkFJTFVSRSxcclxufSBmcm9tICcuLi9zYWdhcy9tYXRjaCc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9hZGluZ01hdGNoczogZmFsc2UsXHJcbiAgaXNMb2FkZWRNYXRjaHM6IGZhbHNlLFxyXG4gIGxvYWRNYXRjaHNFcnJvclJlYXNvbjogJycsXHJcbiAgbWF0Y2hzOiBudWxsLFxyXG4gIG1hdGNoc0luZGV4OiAwLFxyXG4gIGhhc05leHQ6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICBkcmFmdCA9IHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NQVRDSFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdNYXRjaHMgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9hZGVkTWF0Y2hzID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NQVRDSFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdNYXRjaHMgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0xvYWRlZE1hdGNocyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWF0Y2hzID0gYWN0aW9uLmRhdGEuZGF0YTtcclxuICAgICAgICBkcmFmdC5tYXRjaHNJbmRleCA9IGFjdGlvbi5kYXRhLm5leHRTdGFydEluZGV4O1xyXG4gICAgICAgIGRyYWZ0Lmhhc05leHQgPSBhY3Rpb24uZGF0YS5oYXNOZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTUFUQ0hTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nTWF0Y2hzID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNMb2FkZWRNYXRjaHMgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1hdGNocyA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9hZGluZ0Vycm9yUmVhc29uID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQge1xyXG4gIExPQURfUkFOS0lOR1NfUkVRVUVTVCxcclxuICBMT0FEX1JBTktJTkdTX1NVQ0NFU1MsXHJcbiAgTE9BRF9SQU5LSU5HU19GQUlMVVJFLFxyXG59IGZyb20gJy4uL3NhZ2FzL3JhbmtpbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvYWRpbmdSYW5raW5nczogZmFsc2UsXHJcbiAgaXNMb2FkZWRSYW5raW5nczogZmFsc2UsXHJcbiAgbG9hZFJhbmtpbmdzRXJyb3JSZWFzb246ICcnLFxyXG4gIHJhbmtpbmdzOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfUkFOS0lOR1NfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdSYW5raW5ncyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaXNMb2FkZWRSYW5raW5ncyA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUkFOS0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdSYW5raW5ncyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9hZGVkUmFua2luZ3MgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJhbmtpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9SQU5LSU5HU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1JhbmtpbmdzID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNMb2FkZWRSYW5raW5ncyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJhbmtpbmdzID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2FkaW5nRXJyb3JSZWFzb24gPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQge1xyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPQURfVVNFUl9SRVFVRVNULFxyXG4gIExPQURfVVNFUl9TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gIFJFR0lTVEVSX1JFUVVFU1QsXHJcbiAgUkVHSVNURVJfU1VDQ0VTUyxcclxuICBSRUdJU1RFUl9GQUlMVVJFLFxyXG4gIFNFVF9UT0tFTixcclxufSBmcm9tICcuLi9zYWdhcy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gIGlzTG9naW5TdWNjZXNzOiBmYWxzZSxcclxuICBtZTogbnVsbCxcclxuICBteVJhbms6IG51bGwsXHJcbiAgaXNSZWdpc3RlcmluZzogZmFsc2UsXHJcbiAgaXNSZWdpc3RlclN1Y2Nlc3M6IGZhbHNlLFxyXG4gIHVzZXJJbmZvOiBudWxsLFxyXG4gIGxvZ2luRXJyb3JSZWFzb246ICcnLFxyXG4gIHJlZ2lzdGVyRXJyb3JSZWFzb246ICcnLFxyXG4gIHRva2VuOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgZHJhZnQgPSB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dpbkVycm9yUmVhc29uID0gJyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VUX1RPS0VOOlxyXG4gICAgICAgIGRyYWZ0LnRva2VuID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0xvZ2luU3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YS5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9naW5TdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9naW5FcnJvclJlYXNvbiA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YS5kYXRhO1xyXG4gICAgICAgIGRyYWZ0Lm15UmFuayA9IGFjdGlvbi5yYW5rO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRUdJU1RFUl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmlzUmVnaXN0ZXJpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmlzUmVnaXN0ZXJTdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVHSVNURVJfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5pc1JlZ2lzdGVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNSZWdpc3RlclN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFR0lTVEVSX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuaXNSZWdpc3RlcmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlZ2lzdGVyRXJyb3JSZWFzb24gPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBjYWxsLCBhbGwsIGZvcmssIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IEJBQ0tFTkRfVVJMIH0gZnJvbSAnLi4vc3JjL2R1bW15JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBgJHtCQUNLRU5EX1VSTH0vYXBpYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0JBVFRJTkdTX1JFUVVFU1QgPSAnTE9BRF9CQVRUSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQkFUVElOR1NfU1VDQ0VTUyA9ICdMT0FEX0JBVFRJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9CQVRUSU5HU19GQUlMVVJFID0gJ0xPQURfQkFUVElOR1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9CQVRUSU5HX1NVQ0NFU1MgPSAnTE9BRF9CQVRUSU5HX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9CQVRUSU5HX1JFUVVFU1QgPSAnTE9BRF9CQVRUSU5HX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9CQVRUSU5HX0ZBSUxVUkUgPSAnTE9BRF9CQVRUSU5HX0ZBSUxVUkUnO1xyXG5cclxuZnVuY3Rpb24gbG9hZEJhdHRpbmdBUEkoYmF0dGluZ0lkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2JhdHRpbmcvJHtiYXR0aW5nSWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQmF0dGluZyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkQmF0dGluZ0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9CQVRUSU5HX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQkFUVElOR19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEJhdHRpbmcoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0JBVFRJTkdfUkVRVUVTVCwgbG9hZEJhdHRpbmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQmF0dGluZ3NBUEkodXNlcklkLCBjb3VudCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9iYXR0aW5ncz91c2VyaWQ9JHt1c2VySWR9JmNvdW50PSR7Y291bnR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQmF0dGluZ3MoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEJhdHRpbmdzQVBJLCBhY3Rpb24udXNlcklkLCBhY3Rpb24uY291bnQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9CQVRUSU5HU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0JBVFRJTkdTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkQmF0dGluZ3MoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0JBVFRJTkdTX1JFUVVFU1QsIGxvYWRCYXR0aW5ncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBiYXR0aW5nU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2FkQmF0dGluZ3MpLCBmb3JrKHdhdGNoTG9hZEJhdHRpbmcpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBiYXR0aW5nU2FnYSBmcm9tICcuL2JhdHRpbmcnO1xyXG5pbXBvcnQgcmFua2luZ1NhZ2EgZnJvbSAnLi9yYW5raW5nJztcclxuaW1wb3J0IG1hdGNoU2FnYSBmcm9tICcuL21hdGNoJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQkFDS0VORF9VUkwgfSBmcm9tICcuLi9zcmMvZHVtbXkuanMnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGAke0JBQ0tFTkRfVVJMfS9hcGlgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBjYWxsKG1hdGNoU2FnYSksXHJcbiAgICBjYWxsKHVzZXJTYWdhKSxcclxuICAgIGNhbGwoYmF0dGluZ1NhZ2EpLFxyXG4gICAgY2FsbChyYW5raW5nU2FnYSksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgY2FsbCwgYWxsLCBmb3JrLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBCQUNLRU5EX1VSTCB9IGZyb20gJy4uL3NyYy9kdW1teSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBgJHtCQUNLRU5EX1VSTH0vYXBpYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01BVENIU19SRVFVRVNUID0gJ0xPQURfTUFUQ0hTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQVRDSFNfU1VDQ0VTUyA9ICdMT0FEX01BVENIU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTUFUQ0hTX0ZBSUxVUkUgPSAnTE9BRF9NQVRDSFNfRkFJTFVSRSc7XHJcblxyXG5mdW5jdGlvbiBsb2FkTWF0Y2hzQVBJKGluZGV4ID0gLTEpIHtcclxuICBjb25zdCBub3dUaW1lID0gbW9tZW50KCkuZm9ybWF0KCk7XHJcbiAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvbWF0Y2g/c3RhcnRUaW1lW2d0XT0ke25vd1RpbWV9YCk7XHJcbiAgfVxyXG4gIGNvbnN0IGxpbWl0ID0gMTA7IC8vIOuwm+ydhCDqsJzsiJhcclxuICByZXR1cm4gYXhpb3MuZ2V0KFxyXG4gICAgYC9tYXRjaD9zdGFydFRpbWVbZ3RdPSR7bm93VGltZX0mbGltaXQ9JHtsaW1pdH0mc3RhcnRpbmRleD0ke2luZGV4fWBcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE1hdGNocyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTWF0Y2hzQVBJLCBhY3Rpb24uaW5kZXgpO1xyXG4gICAgLy8geWllbGQgY2FsbChjb25zb2xlLmxvZygnQEBAQEAgbG9hZE1hdGNocyByZXN1bHQgQEBAQEAnKSk7XHJcbiAgICAvLyB5aWVsZCBjYWxsKGNvbnNvbGUubG9nKHJlc3VsdCkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NQVRDSFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NQVRDSFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGUpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTWF0Y2hzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NQVRDSFNfUkVRVUVTVCwgbG9hZE1hdGNocyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYXRjaFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoTG9hZE1hdGNocyldKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBjYWxsLCBhbGwsIGZvcmssIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IEJBQ0tFTkRfVVJMIH0gZnJvbSAnLi4vc3JjL2R1bW15JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBgJHtCQUNLRU5EX1VSTH0vYXBpYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JBTktJTkdTX1JFUVVFU1QgPSAnTE9BRF9SQU5LSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkFOS0lOR1NfU1VDQ0VTUyA9ICdMT0FEX1JBTktJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SQU5LSU5HU19GQUlMVVJFID0gJ0xPQURfUkFOS0lOR1NfRkFJTFVSRSc7XHJcblxyXG5mdW5jdGlvbiBsb2FkUmFua2luZ3NBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3JhbmtpbmdzYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUmFua2luZ3MoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFJhbmtpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1JBTktJTkdTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkFOS0lOR1NfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRSYW5raW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUkFOS0lOR1NfUkVRVUVTVCwgbG9hZFJhbmtpbmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJhbmtpbmdTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaExvYWRSYW5raW5ncyldKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBjYWxsLCBhbGwsIGZvcmssIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IEJBQ0tFTkRfVVJMIH0gZnJvbSAnLi4vc3JjL2R1bW15JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9SRVFVRVNUID0gJ1JFR0lTVEVSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVJfU1VDQ0VTUyA9ICdSRUdJU1RFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZBSUxVUkUgPSAnUkVHSVNURVJfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfVE9LRU4gPSAnU0VUX1RPS0VOJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBgJHtCQUNLRU5EX1VSTH0vYXBpYDtcclxuXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGxvZ2luRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGxvZ2luRGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpOyAvLyBjYWxsIC0+IGxvZ2luQVBJKGFjdGlvbi5kYXRhKVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8g7Yag7YGwIOyggOyepVxyXG4gICAgICB0eXBlOiBTRVRfVE9LRU4sXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnRva2VuLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzZCcsIHJlc3VsdC5kYXRhLnRva2VuKTsgLy8g7Yag7YGwIOyggOyepVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV0IC0+IEFjdGlvbiBsa+yLpO2WiVxyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB5aWVsZCBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgYWxlcnQoJ+yemOuqu+uQnCDslYTsnbTrlJQg7Zi57J2AIOu5hOuwgOuyiO2YuOyeheuLiOuLpCEnKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckFQSShyZWdpc3RlckRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCByZWdpc3RlckRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVnaXN0ZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVnaXN0ZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIC8vIHB1dCAtPiBBY3Rpb24g7Iuk7ZaJXHJcbiAgICAgIHR5cGU6IFJFR0lTVEVSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRUdJU1RFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVnaXN0ZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRUdJU1RFUl9SRVFVRVNULCByZWdpc3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKHVzZXJEYXRhKSB7XHJcbiAgaWYgKHVzZXJEYXRhLm1lKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9wcm9maWxlJyk7XHJcbiAgfVxyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7dXNlckRhdGEuaWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV0IC0+IEFjdGlvbiDsi6TtlolcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoTG9naW4pLCBmb3JrKHdhdGNoUmVnaXN0ZXIpLCBmb3JrKHdhdGNoTG9hZFVzZXIpXSk7XHJcbn1cclxuIiwiLy8g7JWE7KeBIOyEnOuyhOuhnOu2gO2EsCDrjbDsnbTthLDrpbwg7KCE64us67Cb7KeAIOyViuycvOuLiFxyXG4vLyDrjZTrr7gg642w7J207YSwIO2YleyLneydhCDrr7jrpqwg66eM65Ok7Ja0IOuRkOyXiOyKteuLiOuLpC5cclxuXHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1teV9tZSA9IHtcclxuICBlbWFpbDogJ3Njc2NzY0BuYXZlci5jb20nLFxyXG4gIG5pY2tuYW1lOiAn6rmA6rG066qoJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1teV9tYXRjaF9BID0ge1xyXG4gIGNhdGVnb3J5OiAn7LaV6rWsJyxcclxuICB0ZWFtQTogJ+2GoO2KuOuEmCcsXHJcbiAgdGVhbUI6ICfslYTsiqTrgqAnLFxyXG4gIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgYmF0dGluZ3M6IFtdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZHVtbXlfbWF0Y2hfQiA9IHtcclxuICBjYXRlZ29yeTogJ+yVvOq1rCcsXHJcbiAgdGVhbUE6ICftlZztmZQnLFxyXG4gIHRlYW1COiAn65GQ7IKwJyxcclxuICB0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gIGJhdHRpbmdzOiBbXSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGR1bW15X21hdGNoX0MgPSB7XHJcbiAgY2F0ZWdvcnk6ICfrho3qtawnLFxyXG4gIHRlYW1BOiAn66eI7J207YG07KGw642YJyxcclxuICB0ZWFtQjogJ+yEnOyepe2biCcsXHJcbiAgdGltZTogbmV3IERhdGUoKSxcclxuICBiYXR0aW5nczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZHVtbXlfbWFpbl9tYXRjaGVzID0gW1xyXG4gIG5ldyBBcnJheSgzKS5maWxsKGR1bW15X21hdGNoX0EpLFxyXG4gIG5ldyBBcnJheSgzKS5maWxsKGR1bW15X21hdGNoX0IpLFxyXG4gIG5ldyBBcnJheSgzKS5maWxsKGR1bW15X21hdGNoX0MpLFxyXG5dLnJlZHVjZSgoYXJyMSwgYXJyMikgPT4gYXJyMS5jb25jYXQoYXJyMikpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW15X3JhbmtpbmdfQSA9IHtcclxuICBjYXRlZ29yeTogJ+y2leq1rCcsXHJcbiAgcmFua2luZ3M6IFsn7Yag7Yq464SYJywgJ+yGkO2dpeuvvCcsICfrsJXsp4DshLEnLCAn6rmA7ZmN6ri4JywgJ+uPmeyehOq6vSddLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZHVtbXlfcmFua2luZ19CID0ge1xyXG4gIGNhdGVnb3J5OiAn7JW86rWsJyxcclxuICByYW5raW5nczogWyfquYDtmITsiJgnLCAn7JW86rWs7J2Y7JmVJywgJ+uCtOydtOumhCcsICfsnYDrsJTroZwnLCAn6rmA7IOB7IicJ10sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBkdW1teV9yYW5raW5nX0MgPSB7XHJcbiAgY2F0ZWdvcnk6ICfrho3qtawnLFxyXG4gIHJhbmtpbmdzOiBbJ+uniOydtO2BtCcsICfsobDrjZgnLCAn7ISc7J6l7ZuIJywgJ+q5gO2Zjeq4uCcsICfrj5nsnoTqur0nXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1teV9tYWluX3JhbmtpbmdzID0gW1xyXG4gIGR1bW15X3JhbmtpbmdfQSxcclxuICBkdW1teV9yYW5raW5nX0IsXHJcbiAgZHVtbXlfcmFua2luZ19DLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW15X3Byb2ZpbGUgPSB7XHJcbiAgaWQ6ICdhc2QnLFxyXG4gIGVtYWlsOiAnZGF2aWRAbmF2ZXIuY29tJyxcclxuICBuaWNrbmFtZTogJ+q5gOuNsOyehScsXHJcbiAgbmFtZTogJ+uNsOydtOu5hOuTnCcsXHJcbiAgcG9pbnQ6IDEyNTAsXHJcbiAgYmF0dGluZ3M6IFtcclxuICAgIHtcclxuICAgICAgc2VsZWN0OiAnd2luJyxcclxuICAgICAgcG9pbnQ6IDEwMCxcclxuICAgICAgbWF0Y2g6IHsgaG9tZVRlYW06ICfsiJjsm5DsgrzshLEnLCBhd2F5VGVhbTogJ+yghOu2ge2YhOuMgCcgfSxcclxuICAgICAgcmVzdWx0OiB7XHJcbiAgICAgICAgbWF0Y2hSZXN1bHQ6ICd3aW4nLFxyXG4gICAgICAgIHJld2FyZDogMjUwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc2VsZWN0OiAnbG9zZScsXHJcbiAgICAgIHBvaW50OiAyMDAsXHJcbiAgICAgIG1hdGNoOiB7IGhvbWVUZWFtOiAn7LK87IucJywgYXdheVRlYW06ICfrp6jsnKAnIH0sXHJcbiAgICAgIHJlc3VsdDoge1xyXG4gICAgICAgIG1hdGNoUmVzdWx0OiAnd2luJyxcclxuICAgICAgICByZXdhcmQ6IDMwMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNlbGVjdDogJ2RyYXcnLFxyXG4gICAgICBwb2ludDogMTUwLFxyXG4gICAgICBtYXRjaDogeyBob21lVGVhbTogJ+2VnOq1rScsIGF3YXlUZWFtOiAn67iM65287KeIJyB9LFxyXG4gICAgICByZXN1bHQ6IHtcclxuICAgICAgICBtYXRjaFJlc3VsdDogJ3dpbicsXHJcbiAgICAgICAgcmV3YXJkOiAzNTAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDoxMzM3JztcclxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlID0+IHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKTtcclxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgfVxyXG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gY29udGV4dCA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgICByb290UmVkdWNlcixcclxuICAgIGJpbmRNaWRkbGV3YXJlKFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyXSlcclxuICApO1xyXG5cclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcblxyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuXHJcbi8vIF9hcHAg7JeQ7IScIOyTsOyehFxyXG5leHBvcnQgY29uc3QgVGl0bGVCYXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNTI5O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50RGl2ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbmA7XHJcblxyXG4vLyDquLDtg4BcclxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmQ5MERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICBwYWRkaW5nOiAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBVcHBlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbjogMC4ydmggMXZ3O1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDM1dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTG93ZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDNweDtcclxuICBtYXJnaW46IDJ2aCAzdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGdWxsRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAxdmggM3Z3O1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuLy8gVE9ETyA6IOyZnCBpbXBvcnRhbnQg7JWI7JOw66m0IOyggeyaqeydtCDslYjrkKDquYw/XHJcbmV4cG9ydCBjb25zdCBTcG9ydENhdGVnb3JpZXMgPSBzdHlsZWQoQnV0dG9uKWBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMHZoICFpbXBvcnRhbnQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JfMSA9ICcjNjQ3OThDJztcclxuZXhwb3J0IGNvbnN0IENPTE9SXzIgPSAnIzJFMzc0MCc7XHJcbmV4cG9ydCBjb25zdCBDT0xPUl8zID0gJyNCNkRCRjInO1xyXG5leHBvcnQgY29uc3QgQ09MT1JfNCA9ICcjQ0VFOEYyJztcclxuZXhwb3J0IGNvbnN0IENPTE9SXzUgPSAnIzBEMEQwRCc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=