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
      type: _sagas_ranking__WEBPACK_IMPORTED_MODULE_8__["LOAD_RANKINGS_REQUEST"]
    });
    dispatch({
      type: _sagas_match__WEBPACK_IMPORTED_MODULE_6__["LOAD_MAIN_MATCHS_REQUEST"]
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
    dataSource: rankings.slice(0, 5),
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
    dataSource: ranking.data.slice(0, 5),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvbWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcmFua2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3N0eWxlZC1jb21wb25lbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkZPT1RCQUxMX1RSQU5TTEFURSIsIkJBU0VCQUxMX1RSQU5TTEFURSIsIkJBU0tFVEJBTExfVFJBTlNMQVRFIiwiSU1BR0VfTUFQUElORyIsIuy2leq1rCIsIuyVvOq1rCIsIuuGjeq1rCIsIk1haW5Sb3ciLCJzdHlsZWQiLCJSb3ciLCJVcHBlckNvbCIsIkNvbCIsIk1lc3NpQ29udGFpbmVyIiwiZGl2IiwiTWF0Y2hUaW1lIiwiU2xpZGVyQnV0dG9uQ29udGFpbmVyIiwiSG9tZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInVzZVN0YXRlIiwic2xpZGVSZWYiLCJ1c2VSZWYiLCJtZXNzaVJlZiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtYXRjaHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWF0Y2giLCJyYW5raW5ncyIsInJhbmtpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9SQU5LSU5HU19SRVFVRVNUIiwiTE9BRF9NQUlOX01BVENIU19SRVFVRVNUIiwib25DbGlja0Zvb3RiYWxsIiwiZSIsIm9uQ2xpY2tCYXNlYmFsbCIsIm9uQ2xpY2tCYXNrZXRiYWxsIiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInpJbmRleCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJtYXAiLCJpIiwibWFyZ2luIiwiaG9tZVRlYW0iLCJhd2F5VGVhbSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkNvbnRlbnQiLCJtb21lbnQiLCJzdGFydFRpbWUiLCJmb3JtYXQiLCJzbGljZSIsIml0ZW0iLCJuaWNrbmFtZSIsImR1bW15X21haW5fcmFua2luZ3MiLCJpbmRleCIsImNhdGVnb3J5IiwiZGF0YSIsImZsb2F0IiwiY2xlYXIiLCJMT0FEX01BVENIU19SRVFVRVNUIiwiTE9BRF9NQVRDSFNfU1VDQ0VTUyIsIkxPQURfTUFUQ0hTX0ZBSUxVUkUiLCJMT0FEX01BSU5fTUFUQ0hTX1NVQ0NFU1MiLCJMT0FEX01BSU5fTUFUQ0hTX0ZBSUxVUkUiLCJsb2FkTWF0Y2hzQVBJIiwibm93VGltZSIsImF4aW9zIiwiZ2V0IiwibGltaXQiLCJsb2FkTWF0Y2hzIiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImNvbnNvbGUiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXRjaExvYWRNYXRjaHMiLCJ0YWtlTGF0ZXN0IiwibG9hZE1haW5NYXRjaHNBUEkiLCJsb2FkTWFpbk1hdGNocyIsIndhdGNoTG9hZE1haW5NYXRjaHMiLCJtYXRjaFNhZ2EiLCJhbGwiLCJmb3JrIiwiTE9BRF9SQU5LSU5HU19TVUNDRVNTIiwiTE9BRF9SQU5LSU5HU19GQUlMVVJFIiwiQkFDS0VORF9VUkwiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJsb2FkUmFua2luZ3NBUEkiLCJsb2FkUmFua2luZ3MiLCJ3YXRjaExvYWRSYW5raW5ncyIsInJhbmtpbmdTYWdhIiwiZHVtbXlfbWUiLCJlbWFpbCIsImR1bW15X21hdGNoX0EiLCJ0ZWFtQSIsInRlYW1CIiwidGltZSIsIkRhdGUiLCJiYXR0aW5ncyIsImR1bW15X21hdGNoX0IiLCJkdW1teV9tYXRjaF9DIiwiZHVtbXlfbWFpbl9tYXRjaGVzIiwiQXJyYXkiLCJmaWxsIiwicmVkdWNlIiwiYXJyMSIsImFycjIiLCJjb25jYXQiLCJkdW1teV9yYW5raW5nX0EiLCJkdW1teV9yYW5raW5nX0IiLCJkdW1teV9yYW5raW5nX0MiLCJkdW1teV9wcm9maWxlIiwiaWQiLCJuYW1lIiwicG9pbnQiLCJzZWxlY3QiLCJtYXRjaFJlc3VsdCIsInJld2FyZCIsIlRpdGxlQmFyRGl2IiwiQ29udGVudERpdiIsIkJhY2tncm91bmQ5MERpdiIsIlVwcGVyRGl2IiwiTG93ZXJEaXYiLCJGdWxsRGl2IiwiU3BvcnRDYXRlZ29yaWVzIiwiQnV0dG9uIiwiQ09MT1JfMSIsIkNPTE9SXzIiLCJDT0xPUl8zIiwiQ09MT1JfNCIsIkNPTE9SXzUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hB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Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBMaXN0LCBSb3csIENvbCwgQ2FyZCwgUHJvZ3Jlc3MsIEJ1dHRvbiwgTGF5b3V0LCBCYWNrVG9wIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7XHJcbiAgZHVtbXlfbWF0Y2hfQSxcclxuICBkdW1teV9tYWluX3JhbmtpbmdzLFxyXG4gIGR1bW15X21haW5fbWF0Y2hlcyxcclxufSBmcm9tICcuLi9zcmMvZHVtbXknO1xyXG5pbXBvcnQgeyBMb3dlckRpdiwgU3BvcnRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vc3R5bGVzL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMT0FEX01BSU5fTUFUQ0hTX1JFUVVFU1QgfSBmcm9tICcuLi9zYWdhcy9tYXRjaCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTE9BRF9SQU5LSU5HU19SRVFVRVNUIH0gZnJvbSAnLi4vc2FnYXMvcmFua2luZyc7XHJcblxyXG5jb25zdCBGT09UQkFMTF9UUkFOU0xBVEUgPSAnLTAnO1xyXG5jb25zdCBCQVNFQkFMTF9UUkFOU0xBVEUgPSAnLTMzLjMlJztcclxuY29uc3QgQkFTS0VUQkFMTF9UUkFOU0xBVEUgPSAnLTY2LjYlJztcclxuXHJcbmNvbnN0IElNQUdFX01BUFBJTkcgPSB7XHJcbiAg7LaV6rWsOiAnL2ltYWdlcy9wcmVtaWVyX2xlYWd1ZS5wbmcnLFxyXG4gIOyVvOq1rDogJy9pbWFnZXMva2JvLnBuZycsXHJcbiAg64aN6rWsOiAnL2ltYWdlcy9uYmEuanBnJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluUm93ID0gc3R5bGVkKFJvdylgXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwcGVyQ29sID0gc3R5bGVkKENvbClgXHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbjogMC4ydmggMXZ3O1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC8vIGhlaWdodDogNjB2aDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNZXNzaUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDkzdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvcGFjaXR5OiA5MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgTWF0Y2hUaW1lID0gc3R5bGVkLmRpdmBcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuYDtcclxuXHJcbmNvbnN0IFNsaWRlckJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBtZXNzaVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtYXRjaHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWF0Y2gpO1xyXG4gIGNvbnN0IHsgcmFua2luZ3MgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmFua2luZyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkFOS0lOR1NfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX01BSU5fTUFUQ0hTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tGb290YmFsbCA9IChlKSA9PiB7XHJcbiAgICAvLyDsiqzrnbzsnbTrk5wg7JWg64uI66mU7J207IWYXHJcbiAgICBzZXRDdXJyZW50U2xpZGUoRk9PVEJBTExfVFJBTlNMQVRFKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2xpY2tCYXNlYmFsbCA9IChlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50U2xpZGUoQkFTRUJBTExfVFJBTlNMQVRFKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2xpY2tCYXNrZXRiYWxsID0gKGUpID0+IHtcclxuICAgIHNldEN1cnJlbnRTbGlkZShCQVNLRVRCQUxMX1RSQU5TTEFURSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XHJcbiAgICBtZXNzaVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgbWVzc2lSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFJvdyBzdHlsZT17eyB6SW5kZXg6IDIwIH19PlxyXG4gICAgICAgIDxNZXNzaUNvbnRhaW5lciBvbkNsaWNrPXtzY3JvbGxUb0JvdHRvbX0+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gc3JjPVwiL2ltYWdlcy9tZXNzaS5qcGdcIj48L2ltZz5cclxuICAgICAgICA8L01lc3NpQ29udGFpbmVyPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPE1haW5Sb3cgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICAgIDxSb3dcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzV2aCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX1cclxuICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcIlxyXG4gICAgICAgICAgZ3V0dGVyPXsxNn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VXBwZXJDb2wgeHM9ezI0fSBsZz17MTl9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXtzbGlkZVJlZn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzAwJScsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7Y3VycmVudFNsaWRlfWAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttYXRjaHM/Lm1hcCgobWF0Y2gsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2l967KI7Ke4IOy5tOuTnGB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyfstpXqtawnfVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICczcHggNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTElJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGNhcmQke2l9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57YCR7bWF0Y2guaG9tZVRlYW19IFZTICR7bWF0Y2guYXdheVRlYW19YH0gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+7Iq5IDogMTAwcDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezMwfSBzaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD7rrLQgOiAzNTBwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3Mgc3Ryb2tlQ29sb3I9eydncmVlbid9IHBlcmNlbnQ9ezUwfSBzaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD7tjKggOiA4MHA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyBzdHJva2VDb2xvcj17J3JlZCd9IHBlcmNlbnQ9ezIwfSBzaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyekOyEuO2eiCDrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNYXRjaFRpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQobWF0Y2guc3RhcnRUaW1lKS5mb3JtYXQoJ2xsbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NYXRjaFRpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVXBwZXJDb2w+XHJcbiAgICAgICAgICA8VXBwZXJDb2wgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0geHM9ezI0fSBsZz17M30+XHJcbiAgICAgICAgICAgIDxTbGlkZXJCdXR0b25Db250YWluZXIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgPFNwb3J0Q2F0ZWdvcmllcyBvbkNsaWNrPXtvbkNsaWNrRm9vdGJhbGx9Puy2leq1rDwvU3BvcnRDYXRlZ29yaWVzPlxyXG4gICAgICAgICAgICAgIDxTcG9ydENhdGVnb3JpZXMgb25DbGljaz17b25DbGlja0Jhc2ViYWxsfT7slbzqtaw8L1Nwb3J0Q2F0ZWdvcmllcz5cclxuICAgICAgICAgICAgICA8U3BvcnRDYXRlZ29yaWVzIG9uQ2xpY2s9e29uQ2xpY2tCYXNrZXRiYWxsfT5cclxuICAgICAgICAgICAgICAgIOuGjeq1rFxyXG4gICAgICAgICAgICAgIDwvU3BvcnRDYXRlZ29yaWVzPlxyXG4gICAgICAgICAgICA8L1NsaWRlckJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvVXBwZXJDb2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPExvd2VyRGl2PlxyXG4gICAgICAgICAgPGgyPuyLpOyLnOqwhCDrnq3tgrk8L2gyPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAge3JhbmtpbmdzID8gKFxyXG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17OH0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17SU1BR0VfTUFQUElOR1sn7LaV6rWsJ119XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3JhbmtpbmdzLnNsaWNlKDAsIDUpfVxyXG4gICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+e2Ake2kgKyAxfeychCAtICR7aXRlbS5uaWNrbmFtZX1gfTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPjwvTGlzdD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZHVtbXlfbWFpbl9yYW5raW5ncy5tYXAoKHJhbmtpbmcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cclxuICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc2MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtJTUFHRV9NQVBQSU5HW3JhbmtpbmcuY2F0ZWdvcnldfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtyYW5raW5nLmRhdGEuc2xpY2UoMCwgNSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT57YCR7aSArIDF97JyEIC0gJHtpdGVtLm5pY2tuYW1lfWB9PC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+PC9MaXN0PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvTG93ZXJEaXY+XHJcbiAgICAgIDwvTWFpblJvdz5cclxuICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBjbGVhcjogJ2JvdGgnIH19IHJlZj17bWVzc2lSZWZ9PjwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCB7IHRha2VMYXRlc3QsIGNhbGwsIGFsbCwgZm9yaywgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTUFUQ0hTX1JFUVVFU1QgPSAnTE9BRF9NQVRDSFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BVENIU19TVUNDRVNTID0gJ0xPQURfTUFUQ0hTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQVRDSFNfRkFJTFVSRSA9ICdMT0FEX01BVENIU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fTUFUQ0hTX1JFUVVFU1QgPSAnTE9BRF9NQUlOX01BVENIU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTUFJTl9NQVRDSFNfU1VDQ0VTUyA9ICdMT0FEX01BSU5fTUFUQ0hTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX01BVENIU19GQUlMVVJFID0gJ0xPQURfTUFJTl9NQVRDSFNfRkFJTFVSRSc7XHJcblxyXG5mdW5jdGlvbiBsb2FkTWF0Y2hzQVBJKGluZGV4ID0gLTEpIHtcclxuICBjb25zdCBub3dUaW1lID0gbW9tZW50KCkuZm9ybWF0KCk7XHJcbiAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvbWF0Y2g/c3RhcnRUaW1lW2d0XT0ke25vd1RpbWV9YCk7XHJcbiAgfVxyXG4gIGNvbnN0IGxpbWl0ID0gMTA7IC8vIOuwm+ydhCDqsJzsiJhcclxuICByZXR1cm4gYXhpb3MuZ2V0KFxyXG4gICAgYC9tYXRjaD9zdGFydFRpbWVbZ3RdPSR7bm93VGltZX0mbGltaXQ9JHtsaW1pdH0mc3RhcnRpbmRleD0ke2luZGV4fWBcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE1hdGNocyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTWF0Y2hzQVBJLCBhY3Rpb24uaW5kZXgpO1xyXG4gICAgLy8geWllbGQgY2FsbChjb25zb2xlLmxvZygnQEBAQEAgbG9hZE1hdGNocyByZXN1bHQgQEBAQEAnKSk7XHJcbiAgICAvLyB5aWVsZCBjYWxsKGNvbnNvbGUubG9nKHJlc3VsdCkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NQVRDSFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NQVRDSFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGUpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTWF0Y2hzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NQVRDSFNfUkVRVUVTVCwgbG9hZE1hdGNocyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNYWluTWF0Y2hzQVBJKCkge1xyXG4gIGNvbnN0IG5vd1RpbWUgPSBtb21lbnQoKS5mb3JtYXQoKTtcclxuICBjb25zdCBsaW1pdCA9IDM7IC8vIOuwm+ydhCDqsJzsiJhcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvbWF0Y2g/c3RhcnRUaW1lW2d0XT0ke25vd1RpbWV9JmxpbWl0PSR7bGltaXR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTWFpbk1hdGNocyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTWFpbk1hdGNoc0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01BSU5fTUFUQ0hTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTUFJTl9NQVRDSFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGUpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTWFpbk1hdGNocygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTUFJTl9NQVRDSFNfUkVRVUVTVCwgbG9hZE1haW5NYXRjaHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogbWF0Y2hTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaExvYWRNYXRjaHMpLCBmb3JrKHdhdGNoTG9hZE1haW5NYXRjaHMpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgY2FsbCwgYWxsLCBmb3JrLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkFOS0lOR1NfUkVRVUVTVCA9ICdMT0FEX1JBTktJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SQU5LSU5HU19TVUNDRVNTID0gJ0xPQURfUkFOS0lOR1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JBTktJTkdTX0ZBSUxVUkUgPSAnTE9BRF9SQU5LSU5HU19GQUlMVVJFJztcclxuXHJcbmNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNyc7XHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBgJHtCQUNLRU5EX1VSTH0vYXBpYDtcclxuXHJcbmZ1bmN0aW9uIGxvYWRSYW5raW5nc0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlcmApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFJhbmtpbmdzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRSYW5raW5nc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9SQU5LSU5HU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1JBTktJTkdTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmFua2luZ3MoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1JBTktJTkdTX1JFUVVFU1QsIGxvYWRSYW5raW5ncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByYW5raW5nU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2FkUmFua2luZ3MpXSk7XHJcbn1cclxuIiwiLy8g7JWE7KeBIOyEnOuyhOuhnOu2gO2EsCDrjbDsnbTthLDrpbwg7KCE64us67Cb7KeAIOyViuycvOuLiFxyXG4vLyDrjZTrr7gg642w7J207YSwIO2YleyLneydhCDrr7jrpqwg66eM65Ok7Ja0IOuRkOyXiOyKteuLiOuLpC5cclxuXHJcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1teV9tZSA9IHtcclxuICBlbWFpbDogJ3Njc2NzY0BuYXZlci5jb20nLFxyXG4gIG5pY2tuYW1lOiAn6rmA6rG066qoJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1teV9tYXRjaF9BID0ge1xyXG4gIGNhdGVnb3J5OiAn7LaV6rWsJyxcclxuICB0ZWFtQTogJ+2GoO2KuOuEmCcsXHJcbiAgdGVhbUI6ICfslYTsiqTrgqAnLFxyXG4gIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgYmF0dGluZ3M6IFtdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZHVtbXlfbWF0Y2hfQiA9IHtcclxuICBjYXRlZ29yeTogJ+yVvOq1rCcsXHJcbiAgdGVhbUE6ICftlZztmZQnLFxyXG4gIHRlYW1COiAn65GQ7IKwJyxcclxuICB0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gIGJhdHRpbmdzOiBbXSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGR1bW15X21hdGNoX0MgPSB7XHJcbiAgY2F0ZWdvcnk6ICfrho3qtawnLFxyXG4gIHRlYW1BOiAn66eI7J207YG07KGw642YJyxcclxuICB0ZWFtQjogJ+yEnOyepe2biCcsXHJcbiAgdGltZTogbmV3IERhdGUoKSxcclxuICBiYXR0aW5nczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZHVtbXlfbWFpbl9tYXRjaGVzID0gW1xyXG4gIG5ldyBBcnJheSgzKS5maWxsKGR1bW15X21hdGNoX0EpLFxyXG4gIG5ldyBBcnJheSgzKS5maWxsKGR1bW15X21hdGNoX0IpLFxyXG4gIG5ldyBBcnJheSgzKS5maWxsKGR1bW15X21hdGNoX0MpLFxyXG5dLnJlZHVjZSgoYXJyMSwgYXJyMikgPT4gYXJyMS5jb25jYXQoYXJyMikpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW15X3JhbmtpbmdfQSA9IHtcclxuICBjYXRlZ29yeTogJ+y2leq1rCcsXHJcbiAgcmFua2luZ3M6IFsn7Yag7Yq464SYJywgJ+yGkO2dpeuvvCcsICfrsJXsp4DshLEnLCAn6rmA7ZmN6ri4JywgJ+uPmeyehOq6vSddLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZHVtbXlfcmFua2luZ19CID0ge1xyXG4gIGNhdGVnb3J5OiAn7JW86rWsJyxcclxuICBkYXRhOiBbXHJcbiAgICB7IG5pY2tuYW1lOiAn6rmA7ZiE7IiYJyB9LFxyXG4gICAgeyBuaWNrbmFtZTogJ+q5gOq0ke2YhCcgfSxcclxuICAgIHsgbmlja25hbWU6ICfrp4jrj5nshJ0nIH0sXHJcbiAgICB7IG5pY2tuYW1lOiAn7ZmA652865+sJyB9LFxyXG4gICAgeyBuaWNrbmFtZTogJ+ulmO2YhOynhCcgfSxcclxuICBdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZHVtbXlfcmFua2luZ19DID0ge1xyXG4gIGNhdGVnb3J5OiAn64aN6rWsJyxcclxuICBkYXRhOiBbXHJcbiAgICB7IG5pY2tuYW1lOiAn6rmA7LmY6rWtJyB9LFxyXG4gICAgeyBuaWNrbmFtZTogJ+yhsOuNmCcgfSxcclxuICAgIHsgbmlja25hbWU6ICfsg6TtgqzsmKTri5AnIH0sXHJcbiAgICB7IG5pY2tuYW1lOiAn7ISc7J6l7ZuIJyB9LFxyXG4gICAgeyBuaWNrbmFtZTogJ+q5gOy5mDInIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1teV9tYWluX3JhbmtpbmdzID0gW2R1bW15X3JhbmtpbmdfQiwgZHVtbXlfcmFua2luZ19DXTtcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1teV9wcm9maWxlID0ge1xyXG4gIGlkOiAnYXNkJyxcclxuICBlbWFpbDogJ2RhdmlkQG5hdmVyLmNvbScsXHJcbiAgbmlja25hbWU6ICfquYDrjbDsnoUnLFxyXG4gIG5hbWU6ICfrjbDsnbTruYTrk5wnLFxyXG4gIHBvaW50OiAxMjUwLFxyXG4gIGJhdHRpbmdzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNlbGVjdDogJ3dpbicsXHJcbiAgICAgIHBvaW50OiAxMDAsXHJcbiAgICAgIG1hdGNoOiB7IGhvbWVUZWFtOiAn7IiY7JuQ7IK87ISxJywgYXdheVRlYW06ICfsoITrtoHtmITrjIAnIH0sXHJcbiAgICAgIHJlc3VsdDoge1xyXG4gICAgICAgIG1hdGNoUmVzdWx0OiAnd2luJyxcclxuICAgICAgICByZXdhcmQ6IDI1MCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNlbGVjdDogJ2xvc2UnLFxyXG4gICAgICBwb2ludDogMjAwLFxyXG4gICAgICBtYXRjaDogeyBob21lVGVhbTogJ+yyvOyLnCcsIGF3YXlUZWFtOiAn66eo7JygJyB9LFxyXG4gICAgICByZXN1bHQ6IHtcclxuICAgICAgICBtYXRjaFJlc3VsdDogJ3dpbicsXHJcbiAgICAgICAgcmV3YXJkOiAzMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzZWxlY3Q6ICdkcmF3JyxcclxuICAgICAgcG9pbnQ6IDE1MCxcclxuICAgICAgbWF0Y2g6IHsgaG9tZVRlYW06ICftlZzqta0nLCBhd2F5VGVhbTogJ+u4jOudvOyniCcgfSxcclxuICAgICAgcmVzdWx0OiB7XHJcbiAgICAgICAgbWF0Y2hSZXN1bHQ6ICd3aW4nLFxyXG4gICAgICAgIHJld2FyZDogMzUwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG4vLyBfYXBwIOyXkOyEnCDsk7DsnoRcclxuZXhwb3J0IGNvbnN0IFRpdGxlQmFyRGl2ID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTUyOTtcclxuICBwYWRkaW5nOiAycHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG5gO1xyXG5cclxuLy8g6riw7YOAXHJcbmV4cG9ydCBjb25zdCBCYWNrZ3JvdW5kOTBEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgcGFkZGluZzogMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgVXBwZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDNweDtcclxuICBtYXJnaW46IDAuMnZoIDF2dztcclxuICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY1ZjU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IExvd2VyRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAydmggM3Z3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRnVsbERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbjogMXZoIDN2dztcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYztcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbi8vIFRPRE8gOiDsmZwgaW1wb3J0YW50IOyViOyTsOuptCDsoIHsmqnsnbQg7JWI65Cg6rmMP1xyXG5leHBvcnQgY29uc3QgU3BvcnRDYXRlZ29yaWVzID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMHZoICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUl8xID0gJyM2NDc5OEMnO1xyXG5leHBvcnQgY29uc3QgQ09MT1JfMiA9ICcjMkUzNzQwJztcclxuZXhwb3J0IGNvbnN0IENPTE9SXzMgPSAnI0I2REJGMic7XHJcbmV4cG9ydCBjb25zdCBDT0xPUl80ID0gJyNDRUU4RjInO1xyXG5leHBvcnQgY29uc3QgQ09MT1JfNSA9ICcjMEQwRDBEJztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=