webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Game/GameHeader.js":
/*!***************************************!*\
  !*** ./components/Game/GameHeader.js ***!
  \***************************************/
/*! exports provided: HelpIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpIcon", function() { return HelpIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/GameHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "GameHeader__Container",
  componentId: "sc-1k9cj4g-0"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-around;font-size:15px;@media(max-width:500px){}"]);
var TimerValue = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "GameHeader__TimerValue",
  componentId: "sc-1k9cj4g-1"
})(["position:relative;top:48px;"]);
var TimerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "GameHeader__TimerContainer",
  componentId: "sc-1k9cj4g-2"
})(["background-image:url('/assets/timer.png');height:100px;background-size:100px;width:100px;text-align:center;font-size:1.3em;"]);
var RoundContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "GameHeader__RoundContainer",
  componentId: "sc-1k9cj4g-3"
})(["font-size:1.8em;position:relative;top:30px;@media(max-width:500px){font-size:1em;}display:flex;flex-direction:column;"]);
var BoldContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "GameHeader__BoldContent",
  componentId: "sc-1k9cj4g-4"
})(["color:red;font-weight:bold;font-size:1.2em;"]);
var HelpIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "GameHeader__HelpIcon",
  componentId: "sc-1k9cj4g-5"
})(["position:fixed;bottom:20px;right:20px;width:40px;height:40px;background-color:#007bff;color:white;border-radius:50%;text-align:center;line-height:40px;font-size:20px;cursor:pointer;box-shadow:0 2px 4px rgba(0,0,0,0.2);"]);
var tickingSound;

var GameHeader = function GameHeader(_ref) {
  var roundNumber = _ref.roundNumber,
      timerValue = _ref.timerValue,
      currentAlphabet = _ref.currentAlphabet,
      maxRounds = _ref.maxRounds,
      soundOn = _ref.soundOn;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    tickingSound = new Audio('/assets/audio/ticking-timer.wav');
    tickingSound.load();
    return function cleanup() {
      pauseAudio(tickingSound);
    };
  }, []);

  if (tickingSound && timerValue === 49 && soundOn) {
    playAudio(tickingSound);
  }

  if (!soundOn || timerValue === 60) {
    pauseAudio(tickingSound);
  }

  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 10
    }
  }, __jsx(RoundContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "Round ", __jsx(BoldContent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, "#".concat(roundNumber, "/").concat(maxRounds))), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "Current Alphabet: ", __jsx(BoldContent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 31
    }
  }, currentAlphabet || 'Not Selected'))), __jsx(TimerContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(TimerValue, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, timerValue)));
};

var playAudio = function playAudio(audio) {
  var audioPromise = audio.play();

  if (audioPromise !== undefined) {
    audioPromise.then(function (_) {// autoplay started
    })["catch"](function (err) {
      // catch dom exception
      console.info(err);
    });
  }
};

var pauseAudio = function pauseAudio(audio) {
  var audioPromise = audio.pause();

  if (audioPromise !== undefined) {
    audioPromise.then(function (_) {
      audio.load();
    })["catch"](function (err) {
      // catch dom exception
      console.info(err);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GameHeader);

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
/* harmony import */ var _Game_GameHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Game/GameHeader */ "./components/Game/GameHeader.js");
var _this = undefined,
    _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Landing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // Adjust the path as per your folder structure

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
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center mt-5 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "display-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Zookilla")), __jsx("div", {
    className: "d-flex flex-column align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card bg-light text-dark mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, isGamePlaying ? __jsx(_Game_Play__WEBPACK_IMPORTED_MODULE_3__["default"], {
    soundOn: soundOn,
    setGamePlaying: setGamePlaying,
    gameData: gameData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }) : showInstructions ? __jsx(_Instructions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cancel: function cancel() {
      return toggleInstructions(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !showJoinForm && !showCreateForm && __jsx("div", {
    className: "button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
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
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Create New Game")), showJoinForm && __jsx(_Join__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cancel: toggleJoinForm,
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 34
    }
  }), showCreateForm && __jsx(_Create__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    cancel: toggleCreateForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 36
    }
  })))), __jsx(_Game_GameHeader__WEBPACK_IMPORTED_MODULE_5__["HelpIcon"], {
    onClick: function onClick() {
      return toggleInstructions(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "?")));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ })

})
//# sourceMappingURL=index.js.f30020b68ba642503980.hot-update.js.map