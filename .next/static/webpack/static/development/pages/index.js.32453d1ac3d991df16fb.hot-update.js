webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Instructions.js":
false,

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
      isGamePlaying = _useState3[0],
      setGamePlaying = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      gameData = _useState4[0],
      setGameData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      soundOn = _useState5[0],
      toggleSound = _useState5[1];

  return __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center mt-5 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "display-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Zookilla")), __jsx("div", {
    className: "d-flex flex-column align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card bg-light text-dark mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, isGamePlaying ? __jsx(_Game_Play__WEBPACK_IMPORTED_MODULE_3__["default"], {
    soundOn: soundOn,
    setGamePlaying: setGamePlaying,
    gameData: gameData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !showJoinForm && !showCreateForm && __jsx("div", {
    className: "button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
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
      lineNumber: 34,
      columnNumber: 21
    }
  }, "Create New Game")), showJoinForm && __jsx(_Join__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cancel: toggleJoinForm,
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 34
    }
  }), showCreateForm && __jsx(_Create__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    cancel: toggleCreateForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 36
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ })

})
//# sourceMappingURL=index.js.32453d1ac3d991df16fb.hot-update.js.map