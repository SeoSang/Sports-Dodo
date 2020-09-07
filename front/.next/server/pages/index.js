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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sagas_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sagas/match */ "./sagas/match.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sagas_ranking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sagas/ranking */ "./sagas/ranking.js");
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
})(["padding:3px;margin:0.2vh 1vw;margin-top:1vh;height:100%;background-color:#f6f5f5;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);@media (max-width:992px){}"]);
const MessiContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pages__MessiContainer",
  componentId: "sc-190qa7b-2"
})(["display:flex;align-items:center;min-height:93vh;overflow:hidden;opacity:90%;cursor:pointer;width:100%;"]);
const MatchTime = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pages__MatchTime",
  componentId: "sc-190qa7b-3"
})(["display:inline-block;bottom:20px;right:20px;padding:3px;border:1px solid gray;"]);
const SliderButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pages__SliderButtonContainer",
  componentId: "sc-190qa7b-4"
})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;@media (max-width:992px){flex-direction:row;}"]);

const Home = () => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const slideRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const messiRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    matchs
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.match);
  const {
    rankings
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.ranking);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _sagas_match__WEBPACK_IMPORTED_MODULE_6__["LOAD_MAIN_MATCHS_REQUEST"]
    });
    dispatch({
      type: _sagas_ranking__WEBPACK_IMPORTED_MODULE_8__["LOAD_RANKINGS_REQUEST"]
    });
  }, []);

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
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx(MessiContainer, {
    onClick: scrollToBottom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("img", {
    style: {
      width: '100%'
    },
    src: "/images/messi.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }))), __jsx(MainRow, {
    style: {
      height: '100vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(UpperCol, {
    xs: 24,
    lg: 19,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      height: '100%',
      overflow: 'hidden'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("div", {
    ref: slideRef,
    style: {
      width: '300%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.5s ease-in-out',
      transform: `translateX(${currentSlide}`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, matchs === null || matchs === void 0 ? void 0 : matchs.map((match, i) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: `${i}번째 카드`,
    title: '축구',
    bordered: true,
    style: {
      margin: '3px 5px',
      width: '11%'
    },
    key: `card${i}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, `${match.homeTeam} VS ${match.awayTeam}`, " "), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, "\uC2B9 : 100p"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    percent: 30,
    size: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, "\uBB34 : 350p"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    strokeColor: 'green',
    percent: 50,
    size: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, "\uD328 : 80p"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    strokeColor: 'red',
    percent: 20,
    size: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }), __jsx("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }, "\uC790\uC138\uD788 \uBCF4\uAE30"), __jsx(MatchTime, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  }, moment__WEBPACK_IMPORTED_MODULE_7___default()(match.startTime).format('lll')))))))), __jsx(UpperCol, {
    style: {
      height: '100%'
    },
    xs: 24,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  }, __jsx(SliderButtonContainer, {
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["SportCategories"], {
    onClick: onClickFootball,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, "\uCD95\uAD6C"), __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["SportCategories"], {
    onClick: onClickBaseball,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, "\uC57C\uAD6C"), __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["SportCategories"], {
    onClick: onClickBasketball,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, "\uB18D\uAD6C")))), __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["LowerDiv"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, "\uC2E4\uC2DC\uAC04 \uB7AD\uD0B9"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, rankings ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: __jsx("img", {
      style: {
        width: '60px',
        height: '30px'
      },
      src: IMAGE_MAPPING['축구'],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }
    }),
    bordered: true,
    dataSource: rankings,
    renderItem: (item, i) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 21
      }
    }, `${i + 1}위 - ${item.nickname}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), _src_dummy__WEBPACK_IMPORTED_MODULE_2__["dummy_main_rankings"].map((ranking, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
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
        lineNumber: 209,
        columnNumber: 21
      }
    }),
    bordered: true,
    dataSource: ranking.data,
    renderItem: (item, i) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 21
      }
    }, `${i + 1}위 - ${item.nickname}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  })))))), __jsx("div", {
    style: {
      float: 'left',
      clear: 'both'
    },
    ref: messiRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./sagas/match.js":
/*!************************!*\
  !*** ./sagas/match.js ***!
  \************************/
/*! exports provided: LOAD_MATCHS_REQUEST, LOAD_MATCHS_SUCCESS, LOAD_MATCHS_FAILURE, LOAD_MAIN_MATCHS_REQUEST, LOAD_MAIN_MATCHS_SUCCESS, LOAD_MAIN_MATCHS_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MATCHS_REQUEST", function() { return LOAD_MATCHS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MATCHS_SUCCESS", function() { return LOAD_MATCHS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MATCHS_FAILURE", function() { return LOAD_MATCHS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_MATCHS_REQUEST", function() { return LOAD_MAIN_MATCHS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_MATCHS_SUCCESS", function() { return LOAD_MAIN_MATCHS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_MATCHS_FAILURE", function() { return LOAD_MAIN_MATCHS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return matchSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



const LOAD_MATCHS_REQUEST = 'LOAD_MATCHS_REQUEST';
const LOAD_MATCHS_SUCCESS = 'LOAD_MATCHS_SUCCESS';
const LOAD_MATCHS_FAILURE = 'LOAD_MATCHS_FAILURE';
const LOAD_MAIN_MATCHS_REQUEST = 'LOAD_MAIN_MATCHS_REQUEST';
const LOAD_MAIN_MATCHS_SUCCESS = 'LOAD_MAIN_MATCHS_SUCCESS';
const LOAD_MAIN_MATCHS_FAILURE = 'LOAD_MAIN_MATCHS_FAILURE';

function loadMatchsAPI(index = -1) {
  const nowTime = moment__WEBPACK_IMPORTED_MODULE_2___default()().format();

  if (index == -1) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/match?startTime[gt]=${nowTime}`);
  }

  const limit = 10; // 받을 개수

  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/match?startTime[gt]=${nowTime}&limit=${limit}&startindex=${index}`);
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

function loadMainMatchsAPI() {
  const nowTime = moment__WEBPACK_IMPORTED_MODULE_2___default()().format();
  const limit = 3; // 받을 개수

  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/match?startTime[gt]=${nowTime}&limit=${limit}`);
}

function* loadMainMatchs(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMainMatchsAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_MAIN_MATCHS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: LOAD_MAIN_MATCHS_FAILURE,
      error: JSON.stringify(e)
    });
  }
}

function* watchLoadMainMatchs() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(LOAD_MAIN_MATCHS_REQUEST, loadMainMatchs);
}

function* matchSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMatchs), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMainMatchs)]);
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const LOAD_RANKINGS_REQUEST = 'LOAD_RANKINGS_REQUEST';
const LOAD_RANKINGS_SUCCESS = 'LOAD_RANKINGS_SUCCESS';
const LOAD_RANKINGS_FAILURE = 'LOAD_RANKINGS_FAILURE';
const BACKEND_URL = 'http://localhost:1337';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = `${BACKEND_URL}/api`;

function loadRankingsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user`);
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

/***/ "./src/dummy.js":
/*!**********************!*\
  !*** ./src/dummy.js ***!
  \**********************/
/*! exports provided: dummy_me, dummy_match_A, dummy_match_B, dummy_match_C, dummy_main_matches, dummy_ranking_A, dummy_ranking_B, dummy_ranking_C, dummy_main_rankings, dummy_profile */
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
  data: [{
    nickname: '김현수'
  }, {
    nickname: '김광현'
  }, {
    nickname: '마동석'
  }, {
    nickname: '홀라러'
  }, {
    nickname: '류현진'
  }]
};
const dummy_ranking_C = {
  category: '농구',
  data: [{
    nickname: '김치국'
  }, {
    nickname: '조던'
  }, {
    nickname: '샤킬오닐'
  }, {
    nickname: '서장훈'
  }, {
    nickname: '김치2'
  }]
};
const dummy_main_rankings = [dummy_ranking_B, dummy_ranking_C];
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
})(["width:100%;height:10vh !important;cursor:pointer;border-top:2px solid;border-bottom:2px solid;border-radius:5px;span{font-weight:600;font-size:1.5rem;}"]);
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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvbWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcmFua2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3N0eWxlZC1jb21wb25lbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkZPT1RCQUxMX1RSQU5TTEFURSIsIkJBU0VCQUxMX1RSQU5TTEFURSIsIkJBU0tFVEJBTExfVFJBTlNMQVRFIiwiSU1BR0VfTUFQUElORyIsIuy2leq1rCIsIuyVvOq1rCIsIuuGjeq1rCIsIk1haW5Sb3ciLCJzdHlsZWQiLCJSb3ciLCJVcHBlckNvbCIsIkNvbCIsIk1lc3NpQ29udGFpbmVyIiwiZGl2IiwiTWF0Y2hUaW1lIiwiU2xpZGVyQnV0dG9uQ29udGFpbmVyIiwiSG9tZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInVzZVN0YXRlIiwic2xpZGVSZWYiLCJ1c2VSZWYiLCJtZXNzaVJlZiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtYXRjaHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWF0Y2giLCJyYW5raW5ncyIsInJhbmtpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9NQUlOX01BVENIU19SRVFVRVNUIiwiTE9BRF9SQU5LSU5HU19SRVFVRVNUIiwib25DbGlja0Zvb3RiYWxsIiwiZSIsIm9uQ2xpY2tCYXNlYmFsbCIsIm9uQ2xpY2tCYXNrZXRiYWxsIiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInpJbmRleCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJtYXAiLCJpIiwibWFyZ2luIiwiaG9tZVRlYW0iLCJhd2F5VGVhbSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkNvbnRlbnQiLCJtb21lbnQiLCJzdGFydFRpbWUiLCJmb3JtYXQiLCJpdGVtIiwibmlja25hbWUiLCJkdW1teV9tYWluX3JhbmtpbmdzIiwiaW5kZXgiLCJjYXRlZ29yeSIsImRhdGEiLCJmbG9hdCIsImNsZWFyIiwiTE9BRF9NQVRDSFNfUkVRVUVTVCIsIkxPQURfTUFUQ0hTX1NVQ0NFU1MiLCJMT0FEX01BVENIU19GQUlMVVJFIiwiTE9BRF9NQUlOX01BVENIU19TVUNDRVNTIiwiTE9BRF9NQUlOX01BVENIU19GQUlMVVJFIiwibG9hZE1hdGNoc0FQSSIsIm5vd1RpbWUiLCJheGlvcyIsImdldCIsImxpbWl0IiwibG9hZE1hdGNocyIsImFjdGlvbiIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJjb25zb2xlIiwiZXJyb3IiLCJKU09OIiwic3RyaW5naWZ5Iiwid2F0Y2hMb2FkTWF0Y2hzIiwidGFrZUxhdGVzdCIsImxvYWRNYWluTWF0Y2hzQVBJIiwibG9hZE1haW5NYXRjaHMiLCJ3YXRjaExvYWRNYWluTWF0Y2hzIiwibWF0Y2hTYWdhIiwiYWxsIiwiZm9yayIsIkxPQURfUkFOS0lOR1NfU1VDQ0VTUyIsIkxPQURfUkFOS0lOR1NfRkFJTFVSRSIsIkJBQ0tFTkRfVVJMIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibG9hZFJhbmtpbmdzQVBJIiwibG9hZFJhbmtpbmdzIiwid2F0Y2hMb2FkUmFua2luZ3MiLCJyYW5raW5nU2FnYSIsImR1bW15X21lIiwiZW1haWwiLCJkdW1teV9tYXRjaF9BIiwidGVhbUEiLCJ0ZWFtQiIsInRpbWUiLCJEYXRlIiwiYmF0dGluZ3MiLCJkdW1teV9tYXRjaF9CIiwiZHVtbXlfbWF0Y2hfQyIsImR1bW15X21haW5fbWF0Y2hlcyIsIkFycmF5IiwiZmlsbCIsInJlZHVjZSIsImFycjEiLCJhcnIyIiwiY29uY2F0IiwiZHVtbXlfcmFua2luZ19BIiwiZHVtbXlfcmFua2luZ19CIiwiZHVtbXlfcmFua2luZ19DIiwiZHVtbXlfcHJvZmlsZSIsImlkIiwibmFtZSIsInBvaW50Iiwic2VsZWN0IiwibWF0Y2hSZXN1bHQiLCJyZXdhcmQiLCJUaXRsZUJhckRpdiIsIkNvbnRlbnREaXYiLCJCYWNrZ3JvdW5kOTBEaXYiLCJVcHBlckRpdiIsIkxvd2VyRGl2IiwiRnVsbERpdiIsIlNwb3J0Q2F0ZWdvcmllcyIsIkJ1dHRvbiIsIkNPTE9SXzEiLCJDT0xPUl8yIiwiQ09MT1JfMyIsIkNPTE9SXzQiLCJDT0xPUl81Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsa0JBQWtCLEdBQUcsSUFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxRQUEzQjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLFFBQTdCO0FBRUEsTUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxJQUFFLEVBQUUsNEJBRGdCO0FBRXBCQyxJQUFFLEVBQUUsaUJBRmdCO0FBR3BCQyxJQUFFLEVBQUU7QUFIZ0IsQ0FBdEI7QUFNTyxNQUFNQyxPQUFPLEdBQUdDLHdEQUFNLENBQUNDLHdDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsOENBQWI7QUFLQSxNQUFNQyxRQUFRLEdBQUdGLHdEQUFNLENBQUNHLHdDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsd0xBQWQ7QUFhUCxNQUFNQyxjQUFjLEdBQUdKLHdEQUFNLENBQUNLLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEdBQXBCO0FBVUEsTUFBTUMsU0FBUyxHQUFHTix3REFBTSxDQUFDSyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNGQUFmO0FBU0EsTUFBTUUscUJBQXFCLEdBQUdQLHdEQUFNLENBQUNLLEdBQVY7QUFBQTtBQUFBO0FBQUEseUlBQTNCOztBQVVBLE1BQU1HLElBQUksR0FBRyxNQUFNO0FBQ2pCLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxDQUFELENBQWhEO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFDQSxRQUFNQyxRQUFRLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLFFBQU1FLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBYUMsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQWxCLENBQTlCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQWVILCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRyxPQUFsQixDQUFoQztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZFIsWUFBUSxDQUFDO0FBQ1BTLFVBQUksRUFBRUMscUVBQXdCQTtBQUR2QixLQUFELENBQVI7QUFHQVYsWUFBUSxDQUFDO0FBQ1BTLFVBQUksRUFBRUUsb0VBQXFCQTtBQURwQixLQUFELENBQVI7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLFFBQU1DLGVBQWUsR0FBSUMsQ0FBRCxJQUFPO0FBQzdCO0FBQ0FsQixtQkFBZSxDQUFDbEIsa0JBQUQsQ0FBZjtBQUNELEdBSEQ7O0FBSUEsUUFBTXFDLGVBQWUsR0FBSUQsQ0FBRCxJQUFPO0FBQzdCbEIsbUJBQWUsQ0FBQ2pCLGtCQUFELENBQWY7QUFDRCxHQUZEOztBQUdBLFFBQU1xQyxpQkFBaUIsR0FBSUYsQ0FBRCxJQUFPO0FBQy9CbEIsbUJBQWUsQ0FBQ2hCLG9CQUFELENBQWY7QUFDRCxHQUZEOztBQUlBLFFBQU1xQyxjQUFjLEdBQUcsTUFBTTtBQUMzQmpCLFlBQVEsQ0FBQ2tCLE9BQVQsQ0FBaUJDLGNBQWpCLENBQWdDO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQWhDO0FBQ0FwQixZQUFRLENBQUNrQixPQUFULENBQWlCQyxjQUFqQixDQUFnQztBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUFoQztBQUNELEdBSEQ7O0FBS0EsU0FDRSxtRUFDRSxNQUFDLHdDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsY0FBRDtBQUFnQixXQUFPLEVBQUVKLGNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFSyxXQUFLLEVBQUU7QUFBVCxLQUFaO0FBQStCLE9BQUcsRUFBQyxtQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixFQU1FLE1BQUMsT0FBRDtBQUFTLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUNFLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsS0FBYjtBQUFvQkMsZUFBUyxFQUFFO0FBQS9CLEtBRFQ7QUFFRSxXQUFPLEVBQUMsY0FGVjtBQUdFLFVBQU0sRUFBRSxFQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLFFBQUQ7QUFBVSxNQUFFLEVBQUUsRUFBZDtBQUFrQixNQUFFLEVBQUUsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVGLFlBQU0sRUFBRSxNQUFWO0FBQWtCRyxjQUFRLEVBQUU7QUFBNUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUU1QixRQURQO0FBRUUsU0FBSyxFQUFFO0FBQ0x3QixXQUFLLEVBQUUsTUFERjtBQUVMQyxZQUFNLEVBQUUsTUFGSDtBQUdMSSxhQUFPLEVBQUUsTUFISjtBQUlMQyxnQkFBVSxFQUFFLFFBSlA7QUFLTEMsZ0JBQVUsRUFBRSxzQkFMUDtBQU1MQyxlQUFTLEVBQUcsY0FBYW5DLFlBQWE7QUFOakMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0dRLE1BWEgsYUFXR0EsTUFYSCx1QkFXR0EsTUFBTSxDQUFFNEIsR0FBUixDQUFZLENBQUN6QixLQUFELEVBQVEwQixDQUFSLEtBQ1gsTUFBQyx5Q0FBRDtBQUNFLE9BQUcsRUFBRyxHQUFFQSxDQUFFLE9BRFo7QUFFRSxTQUFLLEVBQUUsSUFGVDtBQUdFLFlBQVEsRUFBRSxJQUhaO0FBSUUsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxTQURIO0FBRUxYLFdBQUssRUFBRTtBQUZGLEtBSlQ7QUFRRSxPQUFHLEVBQUcsT0FBTVUsQ0FBRSxFQVJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLEdBQUUxQixLQUFLLENBQUM0QixRQUFTLE9BQU01QixLQUFLLENBQUM2QixRQUFTLEVBQTVDLE1BVkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGLEVBWUUsTUFBQyw2Q0FBRDtBQUFVLFdBQU8sRUFBRSxFQUFuQjtBQUF1QixRQUFJLEVBQUMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRixFQWNFLE1BQUMsNkNBQUQ7QUFBVSxlQUFXLEVBQUUsT0FBdkI7QUFBZ0MsV0FBTyxFQUFFLEVBQXpDO0FBQTZDLFFBQUksRUFBQyxPQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZGLEVBZ0JFLE1BQUMsNkNBQUQ7QUFBVSxlQUFXLEVBQUUsS0FBdkI7QUFBOEIsV0FBTyxFQUFFLEVBQXZDO0FBQTJDLFFBQUksRUFBQyxPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkU7QUFDRSxTQUFLLEVBQUU7QUFDTFIsYUFBTyxFQUFFLE1BREo7QUFFTFMsY0FBUSxFQUFFLE1BRkw7QUFHTEMsb0JBQWMsRUFBRSxlQUhYO0FBSUxULGdCQUFVLEVBQUUsUUFKUDtBQUtMVSxrQkFBWSxFQUFFLFFBTFQ7QUFNTGQsZUFBUyxFQUFFO0FBTk4sS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQVZGLEVBV0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2UsNkNBQU0sQ0FBQ2pDLEtBQUssQ0FBQ2tDLFNBQVAsQ0FBTixDQUF3QkMsTUFBeEIsQ0FBK0IsS0FBL0IsQ0FESCxDQVhGLENBbEJGLENBREQsQ0FYSCxDQURGLENBREYsQ0FMRixFQXlERSxNQUFDLFFBQUQ7QUFBVSxTQUFLLEVBQUU7QUFBRWxCLFlBQU0sRUFBRTtBQUFWLEtBQWpCO0FBQXFDLE1BQUUsRUFBRSxFQUF6QztBQUE2QyxNQUFFLEVBQUUsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUJBQUQ7QUFBdUIsU0FBSyxFQUFFO0FBQUVBLFlBQU0sRUFBRTtBQUFWLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFEO0FBQWlCLFdBQU8sRUFBRVYsZUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMseUVBQUQ7QUFBaUIsV0FBTyxFQUFFRSxlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLEVBR0UsTUFBQyx5RUFBRDtBQUFpQixXQUFPLEVBQUVDLGlCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLENBREYsQ0F6REYsQ0FERixFQW9FRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURGLEVBRUUsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dULFFBQVEsR0FDUCxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQ7QUFDRSxVQUFNLEVBQ0o7QUFDRSxXQUFLLEVBQUU7QUFDTGUsYUFBSyxFQUFFLE1BREY7QUFFTEMsY0FBTSxFQUFFO0FBRkgsT0FEVDtBQUtFLFNBQUcsRUFBRTFDLGFBQWEsQ0FBQyxJQUFELENBTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSjtBQVVFLFlBQVEsTUFWVjtBQVdFLGNBQVUsRUFBRTBCLFFBWGQ7QUFZRSxjQUFVLEVBQUUsQ0FBQ21DLElBQUQsRUFBT1YsQ0FBUCxLQUNWLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBYSxHQUFFQSxDQUFDLEdBQUcsQ0FBRSxPQUFNVSxJQUFJLENBQUNDLFFBQVMsRUFBekMsQ0FiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FETyxHQW9CUCxrRUFyQkosRUF1QkdDLDhEQUFtQixDQUFDYixHQUFwQixDQUF3QixDQUFDdkIsT0FBRCxFQUFVcUMsS0FBVixLQUN2QixNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQ7QUFDRSxVQUFNLEVBQ0o7QUFDRSxXQUFLLEVBQUU7QUFDTHZCLGFBQUssRUFBRSxNQURGO0FBRUxDLGNBQU0sRUFBRTtBQUZILE9BRFQ7QUFLRSxTQUFHLEVBQUUxQyxhQUFhLENBQUMyQixPQUFPLENBQUNzQyxRQUFULENBTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSjtBQVVFLFlBQVEsTUFWVjtBQVdFLGNBQVUsRUFBRXRDLE9BQU8sQ0FBQ3VDLElBWHRCO0FBWUUsY0FBVSxFQUFFLENBQUNMLElBQUQsRUFBT1YsQ0FBUCxLQUNWLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBYSxHQUFFQSxDQUFDLEdBQUcsQ0FBRSxPQUFNVSxJQUFJLENBQUNDLFFBQVMsRUFBekMsQ0FiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERCxDQXZCSCxDQUZGLENBcEVGLENBTkYsRUEwSEU7QUFBSyxTQUFLLEVBQUU7QUFBRUssV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFdBQUssRUFBRTtBQUF4QixLQUFaO0FBQThDLE9BQUcsRUFBRWpELFFBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExSEYsQ0FERjtBQThIRCxDQS9KRDs7QUFpS2VOLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTXdELG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU16Qyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNMEMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDOztBQUVQLFNBQVNDLGFBQVQsQ0FBdUJWLEtBQUssR0FBRyxDQUFDLENBQWhDLEVBQW1DO0FBQ2pDLFFBQU1XLE9BQU8sR0FBR2pCLDZDQUFNLEdBQUdFLE1BQVQsRUFBaEI7O0FBQ0EsTUFBSUksS0FBSyxJQUFJLENBQUMsQ0FBZCxFQUFpQjtBQUNmLFdBQU9ZLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyx3QkFBdUJGLE9BQVEsRUFBMUMsQ0FBUDtBQUNEOztBQUNELFFBQU1HLEtBQUssR0FBRyxFQUFkLENBTGlDLENBS2Y7O0FBQ2xCLFNBQU9GLDRDQUFLLENBQUNDLEdBQU4sQ0FDSix3QkFBdUJGLE9BQVEsVUFBU0csS0FBTSxlQUFjZCxLQUFNLEVBRDlELENBQVA7QUFHRDs7QUFFRCxVQUFVZSxVQUFWLENBQXFCQyxNQUFyQixFQUE2QjtBQUMzQixNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNSLGFBQUQsRUFBZ0JNLE1BQU0sQ0FBQ2hCLEtBQXZCLENBQXpCLENBREUsQ0FFRjtBQUNBOztBQUNBLFVBQU1tQiw4REFBRyxDQUFDO0FBQ1J0RCxVQUFJLEVBQUV5QyxtQkFERTtBQUVSSixVQUFJLEVBQUVlLE1BQU0sQ0FBQ2Y7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVJELENBUUUsT0FBT2pDLENBQVAsRUFBVTtBQUNWbUQsV0FBTyxDQUFDQyxLQUFSLENBQWNwRCxDQUFkO0FBQ0EsVUFBTWtELDhEQUFHLENBQUM7QUFDUnRELFVBQUksRUFBRTBDLG1CQURFO0FBRVJjLFdBQUssRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWV0RCxDQUFmO0FBRkMsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxVQUFVdUQsZUFBVixHQUE0QjtBQUMxQixRQUFNQyxxRUFBVSxDQUFDcEIsbUJBQUQsRUFBc0JVLFVBQXRCLENBQWhCO0FBQ0Q7O0FBRUQsU0FBU1csaUJBQVQsR0FBNkI7QUFDM0IsUUFBTWYsT0FBTyxHQUFHakIsNkNBQU0sR0FBR0UsTUFBVCxFQUFoQjtBQUNBLFFBQU1rQixLQUFLLEdBQUcsQ0FBZCxDQUYyQixDQUVWOztBQUNqQixTQUFPRiw0Q0FBSyxDQUFDQyxHQUFOLENBQVcsd0JBQXVCRixPQUFRLFVBQVNHLEtBQU0sRUFBekQsQ0FBUDtBQUNEOztBQUVELFVBQVVhLGNBQVYsQ0FBeUJYLE1BQXpCLEVBQWlDO0FBQy9CLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1EsaUJBQUQsQ0FBekI7QUFDQSxVQUFNUCw4REFBRyxDQUFDO0FBQ1J0RCxVQUFJLEVBQUUyQyx3QkFERTtBQUVSTixVQUFJLEVBQUVlLE1BQU0sQ0FBQ2Y7QUFGTCxLQUFELENBQVQ7QUFJRCxHQU5ELENBTUUsT0FBT2pDLENBQVAsRUFBVTtBQUNWbUQsV0FBTyxDQUFDQyxLQUFSLENBQWNwRCxDQUFkO0FBQ0EsVUFBTWtELDhEQUFHLENBQUM7QUFDUnRELFVBQUksRUFBRTRDLHdCQURFO0FBRVJZLFdBQUssRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWV0RCxDQUFmO0FBRkMsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxVQUFVMkQsbUJBQVYsR0FBZ0M7QUFDOUIsUUFBTUgscUVBQVUsQ0FBQzNELHdCQUFELEVBQTJCNkQsY0FBM0IsQ0FBaEI7QUFDRDs7QUFFYyxVQUFVRSxTQUFWLEdBQXNCO0FBQ25DLFFBQU1DLDhEQUFHLENBQUMsQ0FBQ0MsK0RBQUksQ0FBQ1AsZUFBRCxDQUFMLEVBQXdCTywrREFBSSxDQUFDSCxtQkFBRCxDQUE1QixDQUFELENBQVQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUN6RUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU03RCxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxNQUFNaUUscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRVAsTUFBTUMsV0FBVyxHQUFHLHVCQUFwQjtBQUNBdEIsNENBQUssQ0FBQ3VCLFFBQU4sQ0FBZUMsT0FBZixHQUEwQixHQUFFRixXQUFZLE1BQXhDOztBQUVBLFNBQVNHLGVBQVQsR0FBMkI7QUFDekIsU0FBT3pCLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyxPQUFYLENBQVA7QUFDRDs7QUFFRCxVQUFVeUIsWUFBVixDQUF1QnRCLE1BQXZCLEVBQStCO0FBQzdCLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ21CLGVBQUQsRUFBa0JyQixNQUFNLENBQUNkLElBQXpCLENBQXpCO0FBQ0EsVUFBTWlCLDhEQUFHLENBQUM7QUFDUnRELFVBQUksRUFBRW1FLHFCQURFO0FBRVI5QixVQUFJLEVBQUVlLE1BQU0sQ0FBQ2Y7QUFGTCxLQUFELENBQVQ7QUFJRCxHQU5ELENBTUUsT0FBT2pDLENBQVAsRUFBVTtBQUNWbUQsV0FBTyxDQUFDQyxLQUFSLENBQWNwRCxDQUFkO0FBQ0EsVUFBTWtELDhEQUFHLENBQUM7QUFDUnRELFVBQUksRUFBRW9FLHFCQURFO0FBRVJaLFdBQUssRUFBRXBEO0FBRkMsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxVQUFVc0UsaUJBQVYsR0FBOEI7QUFDNUIsUUFBTWQscUVBQVUsQ0FBQzFELHFCQUFELEVBQXdCdUUsWUFBeEIsQ0FBaEI7QUFDRDs7QUFFYyxVQUFVRSxXQUFWLEdBQXdCO0FBQ3JDLFFBQU1WLDhEQUFHLENBQUMsQ0FBQ0MsK0RBQUksQ0FBQ1EsaUJBQUQsQ0FBTCxDQUFELENBQVQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRU8sTUFBTUUsUUFBUSxHQUFHO0FBQ3RCQyxPQUFLLEVBQUUsa0JBRGU7QUFFdEI1QyxVQUFRLEVBQUU7QUFGWSxDQUFqQjtBQUtBLE1BQU02QyxhQUFhLEdBQUc7QUFDM0IxQyxVQUFRLEVBQUUsSUFEaUI7QUFFM0IyQyxPQUFLLEVBQUUsS0FGb0I7QUFHM0JDLE9BQUssRUFBRSxLQUhvQjtBQUkzQkMsTUFBSSxFQUFFLElBQUlDLElBQUosRUFKcUI7QUFLM0JDLFVBQVEsRUFBRTtBQUxpQixDQUF0QjtBQU9BLE1BQU1DLGFBQWEsR0FBRztBQUMzQmhELFVBQVEsRUFBRSxJQURpQjtBQUUzQjJDLE9BQUssRUFBRSxJQUZvQjtBQUczQkMsT0FBSyxFQUFFLElBSG9CO0FBSTNCQyxNQUFJLEVBQUUsSUFBSUMsSUFBSixFQUpxQjtBQUszQkMsVUFBUSxFQUFFO0FBTGlCLENBQXRCO0FBT0EsTUFBTUUsYUFBYSxHQUFHO0FBQzNCakQsVUFBUSxFQUFFLElBRGlCO0FBRTNCMkMsT0FBSyxFQUFFLE9BRm9CO0FBRzNCQyxPQUFLLEVBQUUsS0FIb0I7QUFJM0JDLE1BQUksRUFBRSxJQUFJQyxJQUFKLEVBSnFCO0FBSzNCQyxVQUFRLEVBQUU7QUFMaUIsQ0FBdEI7QUFRQSxNQUFNRyxrQkFBa0IsR0FBRyxDQUNoQyxJQUFJQyxLQUFKLENBQVUsQ0FBVixFQUFhQyxJQUFiLENBQWtCVixhQUFsQixDQURnQyxFQUVoQyxJQUFJUyxLQUFKLENBQVUsQ0FBVixFQUFhQyxJQUFiLENBQWtCSixhQUFsQixDQUZnQyxFQUdoQyxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhQyxJQUFiLENBQWtCSCxhQUFsQixDQUhnQyxFQUloQ0ksTUFKZ0MsQ0FJekIsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEtBQWdCRCxJQUFJLENBQUNFLE1BQUwsQ0FBWUQsSUFBWixDQUpTLENBQTNCO0FBTUEsTUFBTUUsZUFBZSxHQUFHO0FBQzdCekQsVUFBUSxFQUFFLElBRG1CO0FBRTdCdkMsVUFBUSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCO0FBRm1CLENBQXhCO0FBSUEsTUFBTWlHLGVBQWUsR0FBRztBQUM3QjFELFVBQVEsRUFBRSxJQURtQjtBQUU3QkMsTUFBSSxFQUFFLENBQ0o7QUFBRUosWUFBUSxFQUFFO0FBQVosR0FESSxFQUVKO0FBQUVBLFlBQVEsRUFBRTtBQUFaLEdBRkksRUFHSjtBQUFFQSxZQUFRLEVBQUU7QUFBWixHQUhJLEVBSUo7QUFBRUEsWUFBUSxFQUFFO0FBQVosR0FKSSxFQUtKO0FBQUVBLFlBQVEsRUFBRTtBQUFaLEdBTEk7QUFGdUIsQ0FBeEI7QUFVQSxNQUFNOEQsZUFBZSxHQUFHO0FBQzdCM0QsVUFBUSxFQUFFLElBRG1CO0FBRTdCQyxNQUFJLEVBQUUsQ0FDSjtBQUFFSixZQUFRLEVBQUU7QUFBWixHQURJLEVBRUo7QUFBRUEsWUFBUSxFQUFFO0FBQVosR0FGSSxFQUdKO0FBQUVBLFlBQVEsRUFBRTtBQUFaLEdBSEksRUFJSjtBQUFFQSxZQUFRLEVBQUU7QUFBWixHQUpJLEVBS0o7QUFBRUEsWUFBUSxFQUFFO0FBQVosR0FMSTtBQUZ1QixDQUF4QjtBQVdBLE1BQU1DLG1CQUFtQixHQUFHLENBQUM0RCxlQUFELEVBQWtCQyxlQUFsQixDQUE1QjtBQUVBLE1BQU1DLGFBQWEsR0FBRztBQUMzQkMsSUFBRSxFQUFFLEtBRHVCO0FBRTNCcEIsT0FBSyxFQUFFLGlCQUZvQjtBQUczQjVDLFVBQVEsRUFBRSxLQUhpQjtBQUkzQmlFLE1BQUksRUFBRSxNQUpxQjtBQUszQkMsT0FBSyxFQUFFLElBTG9CO0FBTTNCaEIsVUFBUSxFQUFFLENBQ1I7QUFDRWlCLFVBQU0sRUFBRSxLQURWO0FBRUVELFNBQUssRUFBRSxHQUZUO0FBR0V2RyxTQUFLLEVBQUU7QUFBRTRCLGNBQVEsRUFBRSxNQUFaO0FBQW9CQyxjQUFRLEVBQUU7QUFBOUIsS0FIVDtBQUlFMkIsVUFBTSxFQUFFO0FBQ05pRCxpQkFBVyxFQUFFLEtBRFA7QUFFTkMsWUFBTSxFQUFFO0FBRkY7QUFKVixHQURRLEVBVVI7QUFDRUYsVUFBTSxFQUFFLE1BRFY7QUFFRUQsU0FBSyxFQUFFLEdBRlQ7QUFHRXZHLFNBQUssRUFBRTtBQUFFNEIsY0FBUSxFQUFFLElBQVo7QUFBa0JDLGNBQVEsRUFBRTtBQUE1QixLQUhUO0FBSUUyQixVQUFNLEVBQUU7QUFDTmlELGlCQUFXLEVBQUUsS0FEUDtBQUVOQyxZQUFNLEVBQUU7QUFGRjtBQUpWLEdBVlEsRUFtQlI7QUFDRUYsVUFBTSxFQUFFLE1BRFY7QUFFRUQsU0FBSyxFQUFFLEdBRlQ7QUFHRXZHLFNBQUssRUFBRTtBQUFFNEIsY0FBUSxFQUFFLElBQVo7QUFBa0JDLGNBQVEsRUFBRTtBQUE1QixLQUhUO0FBSUUyQixVQUFNLEVBQUU7QUFDTmlELGlCQUFXLEVBQUUsS0FEUDtBQUVOQyxZQUFNLEVBQUU7QUFGRjtBQUpWLEdBbkJRO0FBTmlCLENBQXRCLEM7Ozs7Ozs7Ozs7OztBQ2pFUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDTyxNQUFNQyxXQUFXLEdBQUcvSCx3REFBTSxDQUFDSyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtGQUFqQjtBQU9BLE1BQU0ySCxVQUFVLEdBQUdoSSx3REFBTSxDQUFDSyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUFoQixDLENBTVA7O0FBQ08sTUFBTTRILGVBQWUsR0FBR2pJLHdEQUFNLENBQUNLLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkRBQXJCO0FBS0EsTUFBTTZILFFBQVEsR0FBR2xJLHdEQUFNLENBQUNLLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEpBQWQ7QUFRQSxNQUFNOEgsUUFBUSxHQUFHbkksd0RBQU0sQ0FBQ0ssR0FBVjtBQUFBO0FBQUE7QUFBQSwrSEFBZDtBQU9BLE1BQU0rSCxPQUFPLEdBQUdwSSx3REFBTSxDQUFDSyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtKQUFiLEMsQ0FTUDs7QUFDTyxNQUFNZ0ksZUFBZSxHQUFHckksd0RBQU0sQ0FBQ3NJLDJDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsK0pBQXJCO0FBYUEsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCLEM7Ozs7Ozs7Ozs7O0FDakVQLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IExpc3QsIFJvdywgQ29sLCBDYXJkLCBQcm9ncmVzcywgQnV0dG9uLCBMYXlvdXQsIEJhY2tUb3AgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtcclxuICBkdW1teV9tYXRjaF9BLFxyXG4gIGR1bW15X21haW5fcmFua2luZ3MsXHJcbiAgZHVtbXlfbWFpbl9tYXRjaGVzLFxyXG59IGZyb20gJy4uL3NyYy9kdW1teSc7XHJcbmltcG9ydCB7IExvd2VyRGl2LCBTcG9ydENhdGVnb3JpZXMgfSBmcm9tICcuLi9zdHlsZXMvc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPQURfTUFJTl9NQVRDSFNfUkVRVUVTVCB9IGZyb20gJy4uL3NhZ2FzL21hdGNoJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBMT0FEX1JBTktJTkdTX1JFUVVFU1QgfSBmcm9tICcuLi9zYWdhcy9yYW5raW5nJztcclxuXHJcbmNvbnN0IEZPT1RCQUxMX1RSQU5TTEFURSA9ICctMCc7XHJcbmNvbnN0IEJBU0VCQUxMX1RSQU5TTEFURSA9ICctMzMuMyUnO1xyXG5jb25zdCBCQVNLRVRCQUxMX1RSQU5TTEFURSA9ICctNjYuNiUnO1xyXG5cclxuY29uc3QgSU1BR0VfTUFQUElORyA9IHtcclxuICDstpXqtaw6ICcvaW1hZ2VzL3ByZW1pZXJfbGVhZ3VlLnBuZycsXHJcbiAg7JW86rWsOiAnL2ltYWdlcy9rYm8ucG5nJyxcclxuICDrho3qtaw6ICcvaW1hZ2VzL25iYS5qcGcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5Sb3cgPSBzdHlsZWQoUm93KWBcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVXBwZXJDb2wgPSBzdHlsZWQoQ29sKWBcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAwLjJ2aCAxdnc7XHJcbiAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNWY1O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLy8gaGVpZ2h0OiA2MHZoO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE1lc3NpQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogOTN2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDkwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBNYXRjaFRpbWUgPSBzdHlsZWQuZGl2YFxyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG5gO1xyXG5cclxuY29uc3QgU2xpZGVyQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IHNsaWRlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IG1lc3NpUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1hdGNocyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYXRjaCk7XHJcbiAgY29uc3QgeyByYW5raW5ncyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yYW5raW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9NQUlOX01BVENIU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkFOS0lOR1NfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0Zvb3RiYWxsID0gKGUpID0+IHtcclxuICAgIC8vIOyKrOudvOydtOuTnCDslaDri4jrqZTsnbTshZhcclxuICAgIHNldEN1cnJlbnRTbGlkZShGT09UQkFMTF9UUkFOU0xBVEUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DbGlja0Jhc2ViYWxsID0gKGUpID0+IHtcclxuICAgIHNldEN1cnJlbnRTbGlkZShCQVNFQkFMTF9UUkFOU0xBVEUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DbGlja0Jhc2tldGJhbGwgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFNsaWRlKEJBU0tFVEJBTExfVFJBTlNMQVRFKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIG1lc3NpUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICBtZXNzaVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Um93IHN0eWxlPXt7IHpJbmRleDogMjAgfX0+XHJcbiAgICAgICAgPE1lc3NpQ29udGFpbmVyIG9uQ2xpY2s9e3Njcm9sbFRvQm90dG9tfT5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBzcmM9XCIvaW1hZ2VzL21lc3NpLmpwZ1wiPjwvaW1nPlxyXG4gICAgICAgIDwvTWVzc2lDb250YWluZXI+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8TWFpblJvdyBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XHJcbiAgICAgICAgPFJvd1xyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNXZoJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiXHJcbiAgICAgICAgICBndXR0ZXI9ezE2fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxVcHBlckNvbCB4cz17MjR9IGxnPXsxOX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICByZWY9e3NsaWRlUmVmfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMDAlJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cyBlYXNlLWluLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtjdXJyZW50U2xpZGV9YCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21hdGNocz8ubWFwKChtYXRjaCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7aX3rsojsp7gg7Lm065OcYH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J+y2leq1rCd9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzNweCA1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMSUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2FyZCR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntgJHttYXRjaC5ob21lVGVhbX0gVlMgJHttYXRjaC5hd2F5VGVhbX1gfSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD7sirkgOiAxMDBwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17MzB9IHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPuustCA6IDM1MHA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyBzdHJva2VDb2xvcj17J2dyZWVuJ30gcGVyY2VudD17NTB9IHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPu2MqCA6IDgwcDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHN0cm9rZUNvbG9yPXsncmVkJ30gcGVyY2VudD17MjB9IHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7J6Q7IS47Z6IIOuztOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1hdGNoVGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChtYXRjaC5zdGFydFRpbWUpLmZvcm1hdCgnbGxsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01hdGNoVGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9VcHBlckNvbD5cclxuICAgICAgICAgIDxVcHBlckNvbCBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fSB4cz17MjR9IGxnPXszfT5cclxuICAgICAgICAgICAgPFNsaWRlckJ1dHRvbkNvbnRhaW5lciBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICA8U3BvcnRDYXRlZ29yaWVzIG9uQ2xpY2s9e29uQ2xpY2tGb290YmFsbH0+7LaV6rWsPC9TcG9ydENhdGVnb3JpZXM+XHJcbiAgICAgICAgICAgICAgPFNwb3J0Q2F0ZWdvcmllcyBvbkNsaWNrPXtvbkNsaWNrQmFzZWJhbGx9PuyVvOq1rDwvU3BvcnRDYXRlZ29yaWVzPlxyXG4gICAgICAgICAgICAgIDxTcG9ydENhdGVnb3JpZXMgb25DbGljaz17b25DbGlja0Jhc2tldGJhbGx9PlxyXG4gICAgICAgICAgICAgICAg64aN6rWsXHJcbiAgICAgICAgICAgICAgPC9TcG9ydENhdGVnb3JpZXM+XHJcbiAgICAgICAgICAgIDwvU2xpZGVyQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9VcHBlckNvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8TG93ZXJEaXY+XHJcbiAgICAgICAgICA8aDI+7Iuk7Iuc6rCEIOuere2CuTwvaDI+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICB7cmFua2luZ3MgPyAoXHJcbiAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cclxuICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc2MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtJTUFHRV9NQVBQSU5HWyfstpXqtawnXX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cmFua2luZ3N9XHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT57YCR7aSArIDF97JyEIC0gJHtpdGVtLm5pY2tuYW1lfWB9PC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+PC9MaXN0PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtkdW1teV9tYWluX3JhbmtpbmdzLm1hcCgocmFua2luZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezh9PlxyXG4gICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzYwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e0lNQUdFX01BUFBJTkdbcmFua2luZy5jYXRlZ29yeV19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3JhbmtpbmcuZGF0YX1cclxuICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPntgJHtpICsgMX3snIQgLSAke2l0ZW0ubmlja25hbWV9YH08L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgID48L0xpc3Q+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Mb3dlckRpdj5cclxuICAgICAgPC9NYWluUm93PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIGNsZWFyOiAnYm90aCcgfX0gcmVmPXttZXNzaVJlZn0+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgY2FsbCwgYWxsLCBmb3JrLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NQVRDSFNfUkVRVUVTVCA9ICdMT0FEX01BVENIU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTUFUQ0hTX1NVQ0NFU1MgPSAnTE9BRF9NQVRDSFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BVENIU19GQUlMVVJFID0gJ0xPQURfTUFUQ0hTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTUFJTl9NQVRDSFNfUkVRVUVTVCA9ICdMT0FEX01BSU5fTUFUQ0hTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX01BVENIU19TVUNDRVNTID0gJ0xPQURfTUFJTl9NQVRDSFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fTUFUQ0hTX0ZBSUxVUkUgPSAnTE9BRF9NQUlOX01BVENIU19GQUlMVVJFJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRNYXRjaHNBUEkoaW5kZXggPSAtMSkge1xyXG4gIGNvbnN0IG5vd1RpbWUgPSBtb21lbnQoKS5mb3JtYXQoKTtcclxuICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9tYXRjaD9zdGFydFRpbWVbZ3RdPSR7bm93VGltZX1gKTtcclxuICB9XHJcbiAgY29uc3QgbGltaXQgPSAxMDsgLy8g67Cb7J2EIOqwnOyImFxyXG4gIHJldHVybiBheGlvcy5nZXQoXHJcbiAgICBgL21hdGNoP3N0YXJ0VGltZVtndF09JHtub3dUaW1lfSZsaW1pdD0ke2xpbWl0fSZzdGFydGluZGV4PSR7aW5kZXh9YFxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTWF0Y2hzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNYXRjaHNBUEksIGFjdGlvbi5pbmRleCk7XHJcbiAgICAvLyB5aWVsZCBjYWxsKGNvbnNvbGUubG9nKCdAQEBAQCBsb2FkTWF0Y2hzIHJlc3VsdCBAQEBAQCcpKTtcclxuICAgIC8vIHlpZWxkIGNhbGwoY29uc29sZS5sb2cocmVzdWx0KSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01BVENIU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01BVENIU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZSksXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNYXRjaHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01BVENIU19SRVFVRVNULCBsb2FkTWF0Y2hzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE1haW5NYXRjaHNBUEkoKSB7XHJcbiAgY29uc3Qgbm93VGltZSA9IG1vbWVudCgpLmZvcm1hdCgpO1xyXG4gIGNvbnN0IGxpbWl0ID0gMzsgLy8g67Cb7J2EIOqwnOyImFxyXG4gIHJldHVybiBheGlvcy5nZXQoYC9tYXRjaD9zdGFydFRpbWVbZ3RdPSR7bm93VGltZX0mbGltaXQ9JHtsaW1pdH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNYWluTWF0Y2hzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNYWluTWF0Y2hzQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTUFJTl9NQVRDSFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NQUlOX01BVENIU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZSksXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNYWluTWF0Y2hzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NQUlOX01BVENIU19SRVFVRVNULCBsb2FkTWFpbk1hdGNocyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYXRjaFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoTG9hZE1hdGNocyksIGZvcmsod2F0Y2hMb2FkTWFpbk1hdGNocyldKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBjYWxsLCBhbGwsIGZvcmssIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9SQU5LSU5HU19SRVFVRVNUID0gJ0xPQURfUkFOS0lOR1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JBTktJTkdTX1NVQ0NFU1MgPSAnTE9BRF9SQU5LSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkFOS0lOR1NfRkFJTFVSRSA9ICdMT0FEX1JBTktJTkdTX0ZBSUxVUkUnO1xyXG5cclxuY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDoxMzM3JztcclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGAke0JBQ0tFTkRfVVJMfS9hcGlgO1xyXG5cclxuZnVuY3Rpb24gbG9hZFJhbmtpbmdzQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUmFua2luZ3MoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFJhbmtpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1JBTktJTkdTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkFOS0lOR1NfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRSYW5raW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUkFOS0lOR1NfUkVRVUVTVCwgbG9hZFJhbmtpbmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJhbmtpbmdTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaExvYWRSYW5raW5ncyldKTtcclxufVxyXG4iLCIvLyDslYTsp4Eg7ISc67KE66Gc67aA7YSwIOuNsOydtO2EsOulvCDsoITri6zrsJvsp4Ag7JWK7Jy864uIXHJcbi8vIOuNlOuvuCDrjbDsnbTthLAg7ZiV7Iud7J2EIOuvuOumrCDrp4zrk6TslrQg65GQ7JeI7Iq164uI64ukLlxyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vcGFnZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW15X21lID0ge1xyXG4gIGVtYWlsOiAnc2NzY3NjQG5hdmVyLmNvbScsXHJcbiAgbmlja25hbWU6ICfquYDqsbTrqqgnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW15X21hdGNoX0EgPSB7XHJcbiAgY2F0ZWdvcnk6ICfstpXqtawnLFxyXG4gIHRlYW1BOiAn7Yag7Yq464SYJyxcclxuICB0ZWFtQjogJ+yVhOyKpOuCoCcsXHJcbiAgdGltZTogbmV3IERhdGUoKSxcclxuICBiYXR0aW5nczogW10sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBkdW1teV9tYXRjaF9CID0ge1xyXG4gIGNhdGVnb3J5OiAn7JW86rWsJyxcclxuICB0ZWFtQTogJ+2VnO2ZlCcsXHJcbiAgdGVhbUI6ICfrkZDsgrAnLFxyXG4gIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgYmF0dGluZ3M6IFtdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZHVtbXlfbWF0Y2hfQyA9IHtcclxuICBjYXRlZ29yeTogJ+uGjeq1rCcsXHJcbiAgdGVhbUE6ICfrp4jsnbTtgbTsobDrjZgnLFxyXG4gIHRlYW1COiAn7ISc7J6l7ZuIJyxcclxuICB0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gIGJhdHRpbmdzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1teV9tYWluX21hdGNoZXMgPSBbXHJcbiAgbmV3IEFycmF5KDMpLmZpbGwoZHVtbXlfbWF0Y2hfQSksXHJcbiAgbmV3IEFycmF5KDMpLmZpbGwoZHVtbXlfbWF0Y2hfQiksXHJcbiAgbmV3IEFycmF5KDMpLmZpbGwoZHVtbXlfbWF0Y2hfQyksXHJcbl0ucmVkdWNlKChhcnIxLCBhcnIyKSA9PiBhcnIxLmNvbmNhdChhcnIyKSk7XHJcblxyXG5leHBvcnQgY29uc3QgZHVtbXlfcmFua2luZ19BID0ge1xyXG4gIGNhdGVnb3J5OiAn7LaV6rWsJyxcclxuICByYW5raW5nczogWyfthqDtirjrhJgnLCAn7IaQ7Z2l66+8JywgJ+uwleyngOyEsScsICfquYDtmY3quLgnLCAn64+Z7J6E6rq9J10sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBkdW1teV9yYW5raW5nX0IgPSB7XHJcbiAgY2F0ZWdvcnk6ICfslbzqtawnLFxyXG4gIGRhdGE6IFtcclxuICAgIHsgbmlja25hbWU6ICfquYDtmITsiJgnIH0sXHJcbiAgICB7IG5pY2tuYW1lOiAn6rmA6rSR7ZiEJyB9LFxyXG4gICAgeyBuaWNrbmFtZTogJ+uniOuPmeyEnScgfSxcclxuICAgIHsgbmlja25hbWU6ICftmYDrnbzrn6wnIH0sXHJcbiAgICB7IG5pY2tuYW1lOiAn66WY7ZiE7KeEJyB9LFxyXG4gIF0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBkdW1teV9yYW5raW5nX0MgPSB7XHJcbiAgY2F0ZWdvcnk6ICfrho3qtawnLFxyXG4gIGRhdGE6IFtcclxuICAgIHsgbmlja25hbWU6ICfquYDsuZjqta0nIH0sXHJcbiAgICB7IG5pY2tuYW1lOiAn7KGw642YJyB9LFxyXG4gICAgeyBuaWNrbmFtZTogJ+yDpO2CrOyYpOuLkCcgfSxcclxuICAgIHsgbmlja25hbWU6ICfshJzsnqXtm4gnIH0sXHJcbiAgICB7IG5pY2tuYW1lOiAn6rmA7LmYMicgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW15X21haW5fcmFua2luZ3MgPSBbZHVtbXlfcmFua2luZ19CLCBkdW1teV9yYW5raW5nX0NdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW15X3Byb2ZpbGUgPSB7XHJcbiAgaWQ6ICdhc2QnLFxyXG4gIGVtYWlsOiAnZGF2aWRAbmF2ZXIuY29tJyxcclxuICBuaWNrbmFtZTogJ+q5gOuNsOyehScsXHJcbiAgbmFtZTogJ+uNsOydtOu5hOuTnCcsXHJcbiAgcG9pbnQ6IDEyNTAsXHJcbiAgYmF0dGluZ3M6IFtcclxuICAgIHtcclxuICAgICAgc2VsZWN0OiAnd2luJyxcclxuICAgICAgcG9pbnQ6IDEwMCxcclxuICAgICAgbWF0Y2g6IHsgaG9tZVRlYW06ICfsiJjsm5DsgrzshLEnLCBhd2F5VGVhbTogJ+yghOu2ge2YhOuMgCcgfSxcclxuICAgICAgcmVzdWx0OiB7XHJcbiAgICAgICAgbWF0Y2hSZXN1bHQ6ICd3aW4nLFxyXG4gICAgICAgIHJld2FyZDogMjUwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc2VsZWN0OiAnbG9zZScsXHJcbiAgICAgIHBvaW50OiAyMDAsXHJcbiAgICAgIG1hdGNoOiB7IGhvbWVUZWFtOiAn7LK87IucJywgYXdheVRlYW06ICfrp6jsnKAnIH0sXHJcbiAgICAgIHJlc3VsdDoge1xyXG4gICAgICAgIG1hdGNoUmVzdWx0OiAnd2luJyxcclxuICAgICAgICByZXdhcmQ6IDMwMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNlbGVjdDogJ2RyYXcnLFxyXG4gICAgICBwb2ludDogMTUwLFxyXG4gICAgICBtYXRjaDogeyBob21lVGVhbTogJ+2VnOq1rScsIGF3YXlUZWFtOiAn67iM65287KeIJyB9LFxyXG4gICAgICByZXN1bHQ6IHtcclxuICAgICAgICBtYXRjaFJlc3VsdDogJ3dpbicsXHJcbiAgICAgICAgcmV3YXJkOiAzNTAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuXHJcbi8vIF9hcHAg7JeQ7IScIOyTsOyehFxyXG5leHBvcnQgY29uc3QgVGl0bGVCYXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNTI5O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50RGl2ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbmA7XHJcblxyXG4vLyDquLDtg4BcclxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmQ5MERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICBwYWRkaW5nOiAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBVcHBlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbjogMC4ydmggMXZ3O1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDM1dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTG93ZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDNweDtcclxuICBtYXJnaW46IDJ2aCAzdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGdWxsRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAxdmggM3Z3O1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuLy8gVE9ETyA6IOyZnCBpbXBvcnRhbnQg7JWI7JOw66m0IOyggeyaqeydtCDslYjrkKDquYw/XHJcbmV4cG9ydCBjb25zdCBTcG9ydENhdGVnb3JpZXMgPSBzdHlsZWQoQnV0dG9uKWBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwdmggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SXzEgPSAnIzY0Nzk4Qyc7XHJcbmV4cG9ydCBjb25zdCBDT0xPUl8yID0gJyMyRTM3NDAnO1xyXG5leHBvcnQgY29uc3QgQ09MT1JfMyA9ICcjQjZEQkYyJztcclxuZXhwb3J0IGNvbnN0IENPTE9SXzQgPSAnI0NFRThGMic7XHJcbmV4cG9ydCBjb25zdCBDT0xPUl81ID0gJyMwRDBEMEQnO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==