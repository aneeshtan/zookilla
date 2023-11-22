webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Landing.js":
/*!*******************************!*\
  !*** ./components/Landing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Join */ "./components/Join.js");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Create */ "./components/Create.js");
/* harmony import */ var _Game_Play__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Game/Play */ "./components/Game/Play.js");
/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Instructions */ "./components/Instructions.js");


var _this = undefined,
    _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Landing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  background-color: #007bff; /* Blue background */\n  color: white;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 40px; /* Vertically center the question mark */\n  font-size: 20px;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Optional: adds shadow for depth */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var HelpIcon = styled.div(_templateObject());

var Landing = function Landing() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showJoinForm = _useState[0],
      toggleJoinForm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showCreateForm = _useState2[0],
      toggleCreateForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showInstructions = _useState3[0],
      toggleInstructions = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isGamePlaying = _useState4[0],
      setGamePlaying = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      gameData = _useState5[0],
      setGameData = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      soundOn = _useState6[0],
      toggleSound = _useState6[1];

  return __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center mt-5 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "display-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Zookilla")), __jsx("div", {
    className: "d-flex flex-column align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card bg-light text-dark mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, isGamePlaying ? __jsx(_Game_Play__WEBPACK_IMPORTED_MODULE_4__["default"], {
    soundOn: soundOn,
    setGamePlaying: setGamePlaying,
    gameData: gameData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }) : showInstructions ? __jsx(_Instructions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cancel: function cancel() {
      return toggleInstructions(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !showJoinForm && !showCreateForm && __jsx("div", {
    className: "button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
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
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Create New Game")), showJoinForm && __jsx(_Join__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cancel: toggleJoinForm,
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 34
    }
  }), showCreateForm && __jsx(_Create__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    cancel: toggleCreateForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 36
    }
  })))), __jsx(HelpIcon, {
    onClick: function onClick() {
      return toggleInstructions(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "?")));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ })

})
//# sourceMappingURL=index.js.e14d1139f584f8a02a49.hot-update.js.map