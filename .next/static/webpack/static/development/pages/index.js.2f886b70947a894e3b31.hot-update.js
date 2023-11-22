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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Join */ "./components/Join.js");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Create */ "./components/Create.js");
/* harmony import */ var _Game_Play__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Game/Play */ "./components/Game/Play.js");
/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Instructions */ "./components/Instructions.js");
/* harmony import */ var _Game_GameHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Game/GameHeader */ "./components/Game/GameHeader.js");


var _this = undefined,
    _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Landing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: none;\n  color: white;\n  padding: 20px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 10px;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-image: url('/assets/stopthebus.jpg'); // Replace with the correct path\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







 // Adjust the path as per your folder structure

var StyledLanding = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2());

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

  return __jsx(StyledLanding, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center mt-5 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), isGamePlaying ? __jsx(_Game_Play__WEBPACK_IMPORTED_MODULE_5__["default"], {
    soundOn: soundOn,
    setGamePlaying: setGamePlaying,
    gameData: gameData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }) : showInstructions ? __jsx(_Instructions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cancel: function cancel() {
      return toggleInstructions(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !showJoinForm && !showCreateForm && __jsx("div", {
    className: "button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
      columnNumber: 19
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
      lineNumber: 65,
      columnNumber: 19
    }
  }, "Create New Game")), showJoinForm && __jsx(_Join__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cancel: toggleJoinForm,
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 28
    }
  }), showCreateForm && __jsx(_Create__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    cancel: toggleCreateForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 30
    }
  })), __jsx(_Game_GameHeader__WEBPACK_IMPORTED_MODULE_7__["HelpIcon"], {
    onClick: function onClick() {
      return toggleInstructions(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "?"));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ })

})
//# sourceMappingURL=index.js.2f886b70947a894e3b31.hot-update.js.map