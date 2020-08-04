webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _src_dummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/dummy */ "./src/dummy.js");
/* harmony import */ var _styles_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styled-components */ "./styles/styled-components.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ddrrp\\Desktop\\local\\score____temp\\front\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FOOTBALL_TRANSLATE = "-0";
var BASEBALL_TRANSLATE = "-33.3%";
var BASKETBALL_TRANSLATE = "-66.6%";
var IMAGE_MAPPING = {
  축구: "/images/premier_league.png",
  야구: "/images/kbo.png",
  농구: "/images/nba.jpg"
};

var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  var slideRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var onClickFootball = function onClickFootball(e) {
    // 슬라이드 애니메이션
    setCurrentSlide(FOOTBALL_TRANSLATE);
  };

  var onClickBaseball = function onClickBaseball(e) {
    setCurrentSlide(BASEBALL_TRANSLATE);
  };

  var onClickBasketball = function onClickBasketball(e) {
    setCurrentSlide(BASKETBALL_TRANSLATE);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      textAlign: "center"
    },
    justify: "space-around",
    gutter: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["UpperDiv"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    ref: slideRef,
    style: {
      width: "300%",
      display: "flex",
      transition: "all 0.5s ease-in-out",
      transform: "translateX(".concat(currentSlide)
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, _src_dummy__WEBPACK_IMPORTED_MODULE_2__["dummy_main_matches"].map(function (match) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: _src_dummy__WEBPACK_IMPORTED_MODULE_2__["dummy_main_matches"].category,
      bordered: false,
      style: {
        margin: "3px 5px",
        width: "11%",
        height: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 19
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, "".concat(match.teamA, " VS ").concat(match.teamB), " "), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
      type: "circle",
      percent: 75,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        marginTop: "15px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, "\uC790\uC138\uD788 \uBCF4\uAE30"));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 4,
    style: {
      height: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      height: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["SportCategories"], {
    onClick: onClickFootball,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "\uCD95\uAD6C"), __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["SportCategories"], {
    onClick: onClickBaseball,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "\uC57C\uAD6C"), __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["SportCategories"], {
    onClick: onClickBasketball,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "\uB18D\uAD6C"))))), __jsx(_styles_styled_components__WEBPACK_IMPORTED_MODULE_3__["LowerDiv"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "\uC2E4\uC2DC\uAC04 \uB7AD\uD0B9"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, _src_dummy__WEBPACK_IMPORTED_MODULE_2__["dummy_main_rankings"].map(function (ranking) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
      header: __jsx("img", {
        style: {
          width: "60px",
          height: "30px"
        },
        src: IMAGE_MAPPING[ranking.category],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }
      }),
      bordered: true,
      dataSource: ranking.rankings,
      renderItem: function renderItem(item, i) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 44
          }
        }, "".concat(i + 1, "\uC704 - ").concat(item));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }));
  }))));
};

_s(Home, "f4ZUE5NMNh23NZAyKGkVq8uLlio=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRk9PVEJBTExfVFJBTlNMQVRFIiwiQkFTRUJBTExfVFJBTlNMQVRFIiwiQkFTS0VUQkFMTF9UUkFOU0xBVEUiLCJJTUFHRV9NQVBQSU5HIiwi7LaV6rWsIiwi7JW86rWsIiwi64aN6rWsIiwiSG9tZSIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVSZWYiLCJ1c2VSZWYiLCJvbkNsaWNrRm9vdGJhbGwiLCJlIiwib25DbGlja0Jhc2ViYWxsIiwib25DbGlja0Jhc2tldGJhbGwiLCJ0ZXh0QWxpZ24iLCJvdmVyZmxvdyIsIndpZHRoIiwiZGlzcGxheSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJkdW1teV9tYWluX21hdGNoZXMiLCJtYXAiLCJtYXRjaCIsImNhdGVnb3J5IiwibWFyZ2luIiwiaGVpZ2h0IiwidGVhbUEiLCJ0ZWFtQiIsIm1hcmdpblRvcCIsImR1bW15X21haW5fcmFua2luZ3MiLCJyYW5raW5nIiwicmFua2luZ3MiLCJpdGVtIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsSUFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxRQUEzQjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLFFBQTdCO0FBRUEsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxJQUFFLEVBQUUsNEJBRGdCO0FBRXBCQyxJQUFFLEVBQUUsaUJBRmdCO0FBR3BCQyxJQUFFLEVBQUU7QUFIZ0IsQ0FBdEI7O0FBTUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxDQUFELENBRC9CO0FBQUEsTUFDVkMsWUFEVTtBQUFBLE1BQ0lDLGVBREo7O0FBRWpCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0s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OiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ODk4YWNiOTdkMTg2OWVmNmM5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdCwgUm93LCBDb2wsIENhcmQsIFByb2dyZXNzLCBCdXR0b24sIExheW91dCB9IGZyb20gXCJhbnRkXCJcclxuaW1wb3J0IHsgZHVtbXlfbWF0Y2hfQSwgZHVtbXlfbWFpbl9yYW5raW5ncywgZHVtbXlfbWFpbl9tYXRjaGVzIH0gZnJvbSBcIi4uL3NyYy9kdW1teVwiXHJcbmltcG9ydCB7IFVwcGVyRGl2LCBMb3dlckRpdiwgU3BvcnRDYXRlZ29yaWVzIH0gZnJvbSBcIi4uL3N0eWxlcy9zdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgRk9PVEJBTExfVFJBTlNMQVRFID0gXCItMFwiXHJcbmNvbnN0IEJBU0VCQUxMX1RSQU5TTEFURSA9IFwiLTMzLjMlXCJcclxuY29uc3QgQkFTS0VUQkFMTF9UUkFOU0xBVEUgPSBcIi02Ni42JVwiXHJcblxyXG5jb25zdCBJTUFHRV9NQVBQSU5HID0ge1xyXG4gIOy2leq1rDogXCIvaW1hZ2VzL3ByZW1pZXJfbGVhZ3VlLnBuZ1wiLFxyXG4gIOyVvOq1rDogXCIvaW1hZ2VzL2tiby5wbmdcIixcclxuICDrho3qtaw6IFwiL2ltYWdlcy9uYmEuanBnXCIsXHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3Qgc2xpZGVSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgY29uc3Qgb25DbGlja0Zvb3RiYWxsID0gKGUpID0+IHtcclxuICAgIC8vIOyKrOudvOydtOuTnCDslaDri4jrqZTsnbTshZhcclxuICAgIHNldEN1cnJlbnRTbGlkZShGT09UQkFMTF9UUkFOU0xBVEUpXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2xpY2tCYXNlYmFsbCA9IChlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50U2xpZGUoQkFTRUJBTExfVFJBTlNMQVRFKVxyXG4gIH1cclxuICBjb25zdCBvbkNsaWNrQmFza2V0YmFsbCA9IChlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50U2xpZGUoQkFTS0VUQkFMTF9UUkFOU0xBVEUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFJvdyBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0ganVzdGlmeT0nc3BhY2UtYXJvdW5kJyBndXR0ZXI9ezE2fT5cclxuICAgICAgICA8VXBwZXJEaXY+XHJcbiAgICAgICAgICA8Q29sIHNwYW49ezIwfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICByZWY9e3NsaWRlUmVmfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC41cyBlYXNlLWluLW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7Y3VycmVudFNsaWRlfWAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkdW1teV9tYWluX21hdGNoZXMubWFwKChtYXRjaCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtkdW1teV9tYWluX21hdGNoZXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIzcHggNXB4XCIsIHdpZHRoOiBcIjExJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2Ake21hdGNoLnRlYW1BfSBWUyAke21hdGNoLnRlYW1CfWB9IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHR5cGU9J2NpcmNsZScgcGVyY2VudD17NzV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTVweFwiIH19PuyekOyEuO2eiCDrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNwYW49ezR9IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgIDxMYXlvdXQgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICA8U3BvcnRDYXRlZ29yaWVzIG9uQ2xpY2s9e29uQ2xpY2tGb290YmFsbH0+7LaV6rWsPC9TcG9ydENhdGVnb3JpZXM+XHJcbiAgICAgICAgICAgICAgPFNwb3J0Q2F0ZWdvcmllcyBvbkNsaWNrPXtvbkNsaWNrQmFzZWJhbGx9PuyVvOq1rDwvU3BvcnRDYXRlZ29yaWVzPlxyXG4gICAgICAgICAgICAgIDxTcG9ydENhdGVnb3JpZXMgb25DbGljaz17b25DbGlja0Jhc2tldGJhbGx9PuuGjeq1rDwvU3BvcnRDYXRlZ29yaWVzPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvVXBwZXJEaXY+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8TG93ZXJEaXY+XHJcbiAgICAgICAgPGgyPuyLpOyLnOqwhCDrnq3tgrk8L2gyPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICB7ZHVtbXlfbWFpbl9yYW5raW5ncy5tYXAoKHJhbmtpbmcpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezh9PlxyXG4gICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI2MHB4XCIsIGhlaWdodDogXCIzMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17SU1BR0VfTUFQUElOR1tyYW5raW5nLmNhdGVnb3J5XX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cmFua2luZy5yYW5raW5nc31cclxuICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0sIGkpID0+IDxMaXN0Lkl0ZW0+e2Ake2kgKyAxfeychCAtICR7aXRlbX1gfTwvTGlzdC5JdGVtPn1cclxuICAgICAgICAgICAgICAgID48L0xpc3Q+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0xvd2VyRGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=