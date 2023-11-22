webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Game/GameHeader.js":
/*!***************************************!*\
  !*** ./components/Game/GameHeader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ })

})
//# sourceMappingURL=index.js.8a2a712a7af5dc7b544f.hot-update.js.map