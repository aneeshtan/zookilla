webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Instructions.js":
/*!************************************!*\
  !*** ./components/Instructions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledComponents */ "./components/StyledComponents.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/theme */ "./constants/theme.js");
var _this = undefined,
    _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Instructions.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var InstructionHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "Instructions__InstructionHeader",
  componentId: "sc-1tf3zcb-0"
})(["color:", ""], _constants_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.red);
var PaddedContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Instructions__PaddedContainer",
  componentId: "sc-1tf3zcb-1"
})(["padding:0 50px 0 50px;"]);

var Instructions = function Instructions(_ref) {
  var cancel = _ref.cancel;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__["ExitButtonContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__["ExitButton"], {
    onClick: function onClick() {
      return cancel();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 24
    }
  }, "X")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, __jsx(PaddedContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(InstructionHeader, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "How To Play"), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "The game is simple. The game creator sets the number of rounds and chooses the word categories.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), "The game is player over a couple of rounds. At the beginning of every round, players get a new alphabet. Your job is to think of words that begin with that letter and fit the categories in the game."), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "Each game round is timed at 60 seconds, but the game alsos end as soon as the first person submits their response. Think fast!")), __jsx(PaddedContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(InstructionHeader, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Creating A Game and Game Setup"), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Head on over to the \"Create New Game\" section on the previous page to create a new game. You will be able to specify the number of rounds you would like to play as well as any additional categories you would want to include besides, \"Name\", \"Place\", \"Animal\" and \"Thing\"."), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "You can also define \"scoring mechanics\". Select \"Score Yourself\" if you want people to score themselves, or select \"Score Each Other\" to score your friends. "), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Once you have created the game, you will get a \"Game Code\". Create the room and send the Game Code to your friends who will be able to use it join the room. Once your friends have joined, the creator will be able to start the game!")), __jsx(PaddedContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(InstructionHeader, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Scoring Rules"), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Scoring Rules are simple:", __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "+10 points for each unique answer"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "+5 points for each non-unique answer"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "+0 points for no answer")))), __jsx("div", {
    style: {
      textAlign: "center",
      margin: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    fontSize: "25px",
    padding: "15px",
    minWidth: "220px",
    onClick: function onClick(event) {
      event.preventDefault();
      cancel(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Understood, Let's Go!"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Instructions);

/***/ }),

/***/ "./components/Landing.js":
/*!*******************************!*\
  !*** ./components/Landing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Join */ "./components/Join.js");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create */ "./components/Create.js");
/* harmony import */ var _Game_Play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game/Play */ "./components/Game/Play.js");
/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Instructions */ "./components/Instructions.js");
var _this = undefined,
    _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Landing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Landing = function Landing() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showJoinForm = _useState[0],
      toggleJoinForm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showCreateForm = _useState2[0],
      toggleCreateForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showInstructions = _useState3[0],
      toggleInstructions = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isGamePlaying = _useState4[0],
      setGamePlaying = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      gameData = _useState5[0],
      setGameData = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      soundOn = _useState6[0],
      toggleSound = _useState6[1];

  return __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center mt-5 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "display-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Zookilla")), __jsx("div", {
    className: "d-flex flex-column align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card bg-light text-dark mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, isGamePlaying ? __jsx(_Game_Play__WEBPACK_IMPORTED_MODULE_3__["default"], {
    soundOn: soundOn,
    setGamePlaying: setGamePlaying,
    gameData: gameData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }) : showInstructions ? __jsx(_Instructions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cancel: function cancel() {
      return toggleInstructions(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !showJoinForm && !showCreateForm && __jsx("div", {
    className: "button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-success my-3 mx-2",
    onClick: function onClick() {
      toggleJoinForm(true);
      toggleCreateForm(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Join Existing Game"), __jsx("button", {
    className: "btn btn-danger my-3 mx-2",
    onClick: function onClick() {
      toggleJoinForm(false);
      toggleCreateForm(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Create New Game")), showJoinForm && __jsx(_Join__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cancel: toggleJoinForm,
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 34
    }
  }), showCreateForm && __jsx(_Create__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    cancel: toggleCreateForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 36
    }
  })))), __jsx("button", {
    className: "help-icon",
    onClick: function onClick() {
      return toggleInstructions(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-question-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ })

})
//# sourceMappingURL=index.js.3fb229b2f533535b5755.hot-update.js.map