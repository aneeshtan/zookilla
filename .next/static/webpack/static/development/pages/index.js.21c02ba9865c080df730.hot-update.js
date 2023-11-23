webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Game/ScoreTable.js":
/*!***************************************!*\
  !*** ./components/Game/ScoreTable.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyledComponents */ "./components/StyledComponents.js");
var _this = undefined,
    _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/ScoreTable.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ScoreTable__Container",
  componentId: "zc1nx8-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-around;text-align:center;font-size:1.5em;max-height:80vh;margin:auto;padding:20px;background:rgba(255,255,255,0.8);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);overflow-y:auto;"]);

var ScoreTable = function ScoreTable(_ref) {
  var maxRounds = _ref.maxRounds,
      gameState = _ref.gameState,
      round = _ref.round,
      handleStartNextRound = _ref.handleStartNextRound;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playerReady = _useState[0],
      setPlayerReady = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }, gameState.users.map(function (user) {
    return __jsx("div", {
      key: user.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 34
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, user.name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, user.scores[round]));
  })), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FlexContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, playerReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FlexColumn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Waiting for others"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }))) : __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      setPlayerReady(true);
      handleStartNextRound();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, round === maxRounds ? 'See Final Scores 🤩' : 'Start Next Round')));
};

/* harmony default export */ __webpack_exports__["default"] = (ScoreTable);

/***/ })

})
//# sourceMappingURL=index.js.21c02ba9865c080df730.hot-update.js.map