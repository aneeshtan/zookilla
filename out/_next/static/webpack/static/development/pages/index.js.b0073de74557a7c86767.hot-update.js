webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Game/ResultsTable.js":
/*!*****************************************!*\
  !*** ./components/Game/ResultsTable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StyledComponents */ "./components/StyledComponents.js");
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/theme */ "./constants/theme.js");
/* harmony import */ var _constants_websocket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/websocket */ "./constants/websocket.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_8__);




var _this = undefined,
    _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/ResultsTable.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var TableContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ResultsTable__TableContainer",
  componentId: "sc-1lg56mx-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-around;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ResultsTable__Container",
  componentId: "sc-1lg56mx-1"
})(["padding:20px 0;display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;"]);
var Paper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ResultsTable__Paper",
  componentId: "sc-1lg56mx-2"
})(["background:white;background-size:100% 1.2em;height:auto;margin:0 auto;margin-top:30px;box-shadow:#9e9e9e63 6px 7px 14px 0px;width:250px;padding:30px 30px 30px 30px;background-image:linear-gradient(90deg,transparent 49px,transparent 49px,transparent 51px,transparent 51px),linear-gradient(#eee .1em,transparent .1em);"]);
var Submission = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "ResultsTable__Submission",
  componentId: "sc-1lg56mx-3"
})(["color:", ";word-break:break-all;"], _constants_theme__WEBPACK_IMPORTED_MODULE_6__["default"].colors.blue);
var StyledIncrementButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "ResultsTable__StyledIncrementButton",
  componentId: "sc-1lg56mx-4"
})(["font-weight:bold;font-size:14px;border:", ";color:", ";cursor:", ";"], function (props) {
  return props.disabled ? '1px solid gray' : '1px solid black';
}, function (props) {
  return props.disabled ? 'gray' : 'black';
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
});
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ResultsTable__InputContainer",
  componentId: "sc-1lg56mx-5"
})(["margin-left:15px;font-size:1.5em;display:flex;align-items:center;width:80px;justify-content:space-between;"]);
var NumberContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ResultsTable__NumberContainer",
  componentId: "sc-1lg56mx-6"
})(["margin-left:15px;font-size:1.5em;display:flex;align-items:center;width:80px;justify-content:center;"]);

var ResultsTable = function ResultsTable(_ref) {
  var gameState = _ref.gameState,
      round = _ref.round,
      handleSubmitScore = _ref.handleSubmitScore,
      scoreSubmitted = _ref.scoreSubmitted,
      scorePartner = _ref.scorePartner;
  var initialScore = {};

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      scores = _useState[0],
      setScores = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var categories = gameState.categories;
  var scoringId = gameState.scoringType === "cross" ? scorePartner.id : _constants_websocket__WEBPACK_IMPORTED_MODULE_7__["socket"].id;
  var users = sortUserList(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(gameState.users), scoringId);
  users.forEach(function (user) {
    categories.forEach(function (cat) {
      var similar = similarityCheck(cat, users, user.id, round);

      if (user.id === scoringId && similar.value) {
        initialScore = Object.assign({}, initialScore, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cat, 5));
      }
    });
  });

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialScore),
      currentScore = _useState3[0],
      setCurrentScore = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Set()),
      animalsSet = _useState4[0],
      setAnimalsSet = _useState4[1];

  var parseCSV = function parseCSV(filePath) {
    var response, reader, result, decoder, csv;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function parseCSV$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(filePath));

          case 2:
            response = _context.sent;
            reader = response.body.getReader();
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(reader.read());

          case 6:
            result = _context.sent;
            decoder = new TextDecoder('utf-8');
            csv = decoder.decode(result.value);
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              papaparse__WEBPACK_IMPORTED_MODULE_8___default.a.parse(csv, {
                complete: function complete(results) {
                  resolve(results.data.map(function (row) {
                    return row[0];
                  }));
                },
                error: reject
              });
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    parseCSV('/csv/animals.csv').then(function (data) {
      setAnimalsSet(new Set(data.map(function (animal) {
        return animal.toLowerCase().trim();
      })));
    });
    parseCSV('/csv/countries.csv').then(function (data) {
      setPlacesSet(new Set(data.map(function (animal) {
        return animal.toLowerCase().trim();
      })));
    });
    parseCSV('/csv/names.csv').then(function (data) {
      setNamesSet(new Set(data.map(function (animal) {
        return animal.toLowerCase().trim();
      })));
    });
  }, []); // Empty dependency array to run only once on mount

  var scoreEntriesAI = function scoreEntriesAI() {
    var newScores, _iterator, _step, category, _iterator2, _step2, user, answer, score;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function scoreEntriesAI$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(animalsSet.size === 0)) {
              _context2.next = 3;
              break;
            }

            console.log("Waiting for animalsSet to be populated...");
            return _context2.abrupt("return");

          case 3:
            newScores = {};
            _iterator = _createForOfIteratorHelper(categories);
            _context2.prev = 5;

            _iterator.s();

          case 7:
            if ((_step = _iterator.n()).done) {
              _context2.next = 32;
              break;
            }

            category = _step.value;
            _iterator2 = _createForOfIteratorHelper(gameState.users);
            _context2.prev = 10;

            _iterator2.s();

          case 12:
            if ((_step2 = _iterator2.n()).done) {
              _context2.next = 22;
              break;
            }

            user = _step2.value;
            answer = user.responses[round][category];

            if (!answer) {
              _context2.next = 20;
              break;
            }

            _context2.next = 18;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getScoreFromAPI(category, answer));

          case 18:
            score = _context2.sent;
            newScores[user.id] = _objectSpread({}, newScores[user.id] || {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, category, score));

          case 20:
            _context2.next = 12;
            break;

          case 22:
            _context2.next = 27;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](10);

            _iterator2.e(_context2.t0);

          case 27:
            _context2.prev = 27;

            _iterator2.f();

            return _context2.finish(27);

          case 30:
            _context2.next = 7;
            break;

          case 32:
            _context2.next = 37;
            break;

          case 34:
            _context2.prev = 34;
            _context2.t1 = _context2["catch"](5);

            _iterator.e(_context2.t1);

          case 37:
            _context2.prev = 37;

            _iterator.f();

            return _context2.finish(37);

          case 40:
            setScores(newScores);
            setLoading(false);

          case 42:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[5, 34, 37, 40], [10, 24, 27, 30]], Promise);
  };

  var getScoreFromAPI = function getScoreFromAPI(category, answer) {
    var formattedAnswer;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getScoreFromAPI$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            formattedAnswer = answer.toLowerCase().trim();
            console.log("Checking answer: '".concat(formattedAnswer, "' in category: '").concat(category, "'"));

            if (!(category === 'Animal')) {
              _context3.next = 11;
              break;
            }

            console.log("Animals in set:", Array.from(animalsSet));

            if (!animalsSet.has(formattedAnswer)) {
              _context3.next = 10;
              break;
            }

            console.log("'".concat(formattedAnswer, "' is a valid animal."));
            return _context3.abrupt("return", 10);

          case 10:
            console.log("'".concat(formattedAnswer, "' is not found in the set."));

          case 11:
            return _context3.abrupt("return", 0);

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            console.error("Error checking answer:", _context3.t0);
            return _context3.abrupt("return", 0);

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 14]], Promise);
  };

  var totalScore = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (gameState.scoringType === "ai" && animalsSet.size > 0) {
      scoreEntriesAI();
    }
  }, [gameState, round, animalsSet]); // Add animalsSet as a dependency

  if (loading) {
    return __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, gameState.scoringType === "ai" ? __jsx(TableContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 3
    }
  }, gameState.users.map(function (user) {
    return __jsx(Paper, {
      key: user.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 5
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 7
      }
    }, user.name), gameState.categories.map(function (category) {
      return __jsx("div", {
        key: category,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }
      }, category, ": ", __jsx(Submission, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 23
        }
      }, user.responses[round][category] || '-'), __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }
      }, "Score: ", scores[user.id] && scores[user.id][category]));
    }), __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 7
      }
    }, "Total Score: ", Object.values(scores[user.id] || {}).reduce(function (a, b) {
      return a + b;
    }, 0)));
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, gameState.scoringType === "cross" ? __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["FlexContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 42
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 57
    }
  }, "You are scoring for ", __jsx(Submission, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 81
    }
  }, scorePartner.name), "!")) : false, __jsx(TableContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, users.map(function (user) {
    return __jsx(Paper, {
      key: user.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 26
      }
    }, __jsx("h2", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 74
      }
    }, user.name), user.id === scoringId ? __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 36
      }
    }, "Score") : false), categories.map(function (category) {
      var similar = similarityCheck(category, users, user.id, round);
      var selfScoreCard = user.id === scoringId;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
        key: category,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 18
        }
      }, similar.value && selfScoreCard ? __jsx("span", {
        style: {
          color: _constants_theme__WEBPACK_IMPORTED_MODULE_6__["default"].colors.red
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 47
        }
      }, scorePartner.name || 'You', " and ", similar.name, " put down the same word for ", category) : false, __jsx("div", {
        style: {
          marginBottom: '10px',
          display: "flex",
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        key: category,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 13
        }
      }, __jsx("div", {
        style: {
          width: selfScoreCard ? "150px" : "auto",
          fontSize: "1.2em"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 15
        }
      }, category, ":", "  ", " ", __jsx(Submission, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 35
        }
      }, user.responses[round][category] || '-')), selfScoreCard ? user.responses[round][category] ? __jsx(InputContainer, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 51
        }
      }, __jsx(NumberInput, {
        category: category,
        setCurrentScore: setCurrentScore,
        currentScore: currentScore,
        value: similar.value ? 5 : 0,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 19
        }
      }), " ") : __jsx(NumberContainer, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 167
        }
      }, "0") : ''));
    }), user.id === scoringId ? __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 34
      }
    }, "Total Score: ".concat(sumAllScores(currentScore))) : false);
  }))), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, !scoreSubmitted ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: function onClick(event) {
      event.preventDefault();
      handleSubmitScore(totalScore, scoringId);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, "Submit")) : __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["FlexColumn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 11
    }
  }, "Waiting for others"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 11
    }
  }))));
};

var similarityCheck = function similarityCheck(category, users, currentUserId, round) {
  var currentUser = users.find(function (user) {
    return user.id === currentUserId;
  });
  var currentUserResponse = currentUser.responses[round][category] ? currentUser.responses[round][category].toLowerCase().trim() : null;
  var value = false;
  var name = null;
  users.filter(function (user) {
    return user.id !== currentUserId;
  }).forEach(function (user) {
    var otherResponse = user.responses[round][category] ? user.responses[round][category].toLowerCase().trim() : null;

    if (currentUserResponse && otherResponse && currentUserResponse === otherResponse) {
      value = true;
      name = user.name;
    }

    return;
  });
  return {
    value: value,
    name: name
  };
};

var sumAllScores = function sumAllScores(scores) {
  return Object.keys(scores).map(function (cat) {
    return scores[cat];
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
};

var NumberInput = function NumberInput(_ref2) {
  var value = _ref2.value,
      currentScore = _ref2.currentScore,
      setCurrentScore = _ref2.setCurrentScore,
      category = _ref2.category;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(value),
      numberValue = _useState5[0],
      setNumberValue = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setCurrentScore(Object.assign({}, currentScore, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, category, value)));
  }, []);

  var onMinus = function onMinus() {
    setCurrentScore(Object.assign({}, currentScore, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, category, numberValue - 5)));
    if (!(numberValue <= 0)) setNumberValue(numberValue - 5);
  };

  var onPlus = function onPlus() {
    setCurrentScore(Object.assign({}, currentScore, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, category, numberValue + 5)));
    if (!(numberValue >= 10)) setNumberValue(numberValue + 5);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(StyledIncrementButton, {
    disabled: numberValue === 0,
    onClick: function onClick() {
      return onMinus();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 12
    }
  }, "-"), numberValue, __jsx(StyledIncrementButton, {
    disabled: numberValue === 10,
    onClick: function onClick() {
      return onPlus();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 128
    }
  }, "+"));
};

var sortUserList = function sortUserList(users, scoringId) {
  var index = users.findIndex(function (user) {
    return user.id === scoringId;
  });

  if (index != -1) {
    var first = users.splice(index, 1)[0];
    users.unshift(first);
    return users;
  }

  return users;
};

/* harmony default export */ __webpack_exports__["default"] = (ResultsTable);

/***/ })

})
//# sourceMappingURL=index.js.b0073de74557a7c86767.hot-update.js.map