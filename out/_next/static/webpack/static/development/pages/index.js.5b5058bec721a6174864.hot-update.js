webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Create.js":
/*!******************************!*\
  !*** ./components/Create.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var human_readable_ids__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! human-readable-ids */ "./node_modules/human-readable-ids/index.js");
/* harmony import */ var human_readable_ids__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(human_readable_ids__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledComponents */ "./components/StyledComponents.js");
/* harmony import */ var _constants_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/websocket */ "./constants/websocket.js");


var _this = undefined,
    _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Create.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Create__FormContainer",
  componentId: "sc-1xf6e0b-0"
})(["padding:20px;display:flex;flex-direction:column;align-items:center;text-align:center;width:100%;"]);
var CheckBoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "Create__CheckBoxContainer",
  componentId: "sc-1xf6e0b-1"
})(["display:block;margin:10px;cursor:pointer;font-size:1rem;input{margin-right:5px;}@media (min-width:576px){display:flex;align-items:center;justify-content:center;}"]);
var RadioGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Create__RadioGroup",
  componentId: "sc-1xf6e0b-2"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;@media (min-width:576px){flex-direction:row;}"]);
var CategoryContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Create__CategoryContainer",
  componentId: "sc-1xf6e0b-3"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:20px;width:100%;"]);

var Create = function Create(_ref) {
  var cancel = _ref.cancel,
      setGameData = _ref.setGameData,
      setGamePlaying = _ref.setGamePlaying;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("5"),
      rounds = _useState2[0],
      setRounds = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("ai"),
      scoringType = _useState3[0],
      setScoringType = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    Name: true,
    Place: true,
    Animal: true,
    Thing: true,
    Songs: false,
    Movies: false,
    "TV shows": false,
    Fruits: false,
    //Vegetables: false,
    Books: false,
    //Subjects: false,
    Celebrities: false,
    Musicians: false,
    Instruments: false
  }),
      categories = _useState4[0],
      setCategories = _useState4[1];

  var generateRandomCode = function generateRandomCode(length) {
    var code = '';

    for (var i = 0; i < length; i++) {
      code += Math.floor(Math.random() * 10); // Generate a random digit
    }

    return code;
  }; // Monzo easter egg


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (name === "Monzo") {
      setCategories(Object.assign({}, categories, {
        "Office Dog Breeds": false,
        "Meeting Rooms": false,
        "Badge Types": false,
        "Activity Types": false,
        "Engineers": false,
        "Data Scientists": false
      }));
    }
  }, [name]);
  var categoriesArray = Object.keys(categories);
  var options = ["5", "7", "10"];
  var gameData = {
    name: name,
    isAdmin: true
  };

  var handleCreateGame = function handleCreateGame(code) {
    var cats = [];
    categoriesArray.forEach(function (cat) {
      if (categories[cat]) cats.push(cat);
    });
    _constants_websocket__WEBPACK_IMPORTED_MODULE_5__["socket"].emit('create', {
      name: name,
      code: code,
      rounds: rounds,
      categories: cats,
      scoringType: scoringType
    }, function (_ref2) {
      var error = _ref2.error,
          users = _ref2.users;

      if (error) {
        alert(error);
      } else {
        gameData.code = code;
        gameData.users = users;
        gameData.maxRounds = Number(rounds);
        gameData.categories = cats;
        setGameData(gameData);
        setGamePlaying(true);
      }
    });
  };

  var disabled = !name || !checkAtleastOneSelected(categoriesArray, categories);
  return __jsx(FormContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["FlexColumn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "Your Name:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["StyledInput"], {
    maxLength: "15",
    name: "name",
    type: "text",
    onChange: function onChange(event) {
      return setName(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  })), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "Select number of rounds:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["FlexContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, options.map(function (option) {
    return __jsx(CheckBoxContainer, {
      key: option,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 36
      }
    }, __jsx("input", {
      type: "radio",
      id: option,
      name: "rounds",
      value: option,
      onChange: function onChange(event) {
        return setRounds(event.target.value);
      },
      checked: rounds === option,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 15
      }
    }), __jsx("label", {
      htmlFor: option,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 15
      }
    }, option));
  })), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "Select categories:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["FlexContainer"], {
    style: {
      maxWidth: "450px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, categoriesArray.map(function (cat) {
    return __jsx(CheckBoxContainer, {
      key: cat,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 41
      }
    }, __jsx("input", {
      type: "checkbox",
      id: cat,
      name: "categories",
      onChange: function onChange(event) {
        setCategories(Object.assign({}, categories, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cat, event.target.checked)));
      },
      checked: categories[cat],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 15
      }
    }), __jsx("label", {
      htmlFor: cat,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }, cat));
  })), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, "Scoring Rules:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["FlexContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx(CheckBoxContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "radio",
    id: "cross",
    name: "scoring",
    value: "cross",
    onChange: function onChange(event) {
      return setScoringType(event.target.value);
    },
    checked: scoringType === "cross",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "cross",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, "Score Each Other")), __jsx(CheckBoxContainer, {
    key: "self",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "radio",
    id: "self",
    name: "scoring",
    value: "self",
    onChange: function onChange(event) {
      return setScoringType(event.target.value);
    },
    checked: scoringType === "self",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "self",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, "Score Yourself")), __jsx(CheckBoxContainer, {
    key: "ai",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "radio",
    id: "ai",
    name: "scoring",
    value: "ai",
    onChange: function onChange(event) {
      return setScoringType(event.target.value);
    },
    checked: scoringType === "ai",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "ai",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, "Score by AI"))), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    disabled: disabled,
    fontSize: "25px",
    padding: "15px",
    minWidth: "220px",
    onClick: function onClick(event) {
      event.preventDefault(); //let code = hri.random();

      var code = generateRandomCode(4); // Use your custom function here

      handleCreateGame(code);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, "Create Room")), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    fontSize: "25px",
    padding: "15px",
    minWidth: "220px",
    onClick: function onClick() {
      return cancel();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, "Cancel")));
};

var checkAtleastOneSelected = function checkAtleastOneSelected(categoriesList, categories) {
  var enableButton = false;
  categoriesList.forEach(function (category) {
    if (categories[category]) {
      enableButton = true;
    }
  });
  return enableButton;
};

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ })

})
//# sourceMappingURL=index.js.5b5058bec721a6174864.hot-update.js.map