webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Create.js":
/*!******************************!*\
  !*** ./components/Create.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var human_readable_ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! human-readable-ids */ "./node_modules/human-readable-ids/index.js");
/* harmony import */ var human_readable_ids__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(human_readable_ids__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledComponents */ "./components/StyledComponents.js");
/* harmony import */ var _constants_websocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/websocket */ "./constants/websocket.js");
var _this = undefined,
    _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Create.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Create__FormContainer",
  componentId: "sc-1xf6e0b-0"
})(["max-width:500px;max-height:80vh;margin:auto;padding:20px;background:rgba(255,255,255,0.8);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);overflow-y:auto;"]);
var MultiSelect = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].select.withConfig({
  displayName: "Create__MultiSelect",
  componentId: "sc-1xf6e0b-1"
})(["width:100%;padding:10px;margin:10px 0;border-radius:5px;border:1px solid #ccc;background-color:white;box-sizing:border-box;height:200px;overflow-y:auto;"]);
var Select = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].select.withConfig({
  displayName: "Create__Select",
  componentId: "sc-1xf6e0b-2"
})(["width:100%;padding:10px;margin:10px 0;border-radius:5px;border:1px solid #ccc;background-color:white;box-sizing:border-box;"]);
var CheckBoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Create__CheckBoxContainer",
  componentId: "sc-1xf6e0b-3"
})(["margin:0 20px 20px 0;"]);

var Create = function Create(_ref) {
  var cancel = _ref.cancel,
      setGameData = _ref.setGameData,
      setGamePlaying = _ref.setGamePlaying;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("5"),
      rounds = _useState2[0],
      setRounds = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("ai"),
      scoringType = _useState3[0],
      setScoringType = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
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


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
    _constants_websocket__WEBPACK_IMPORTED_MODULE_4__["socket"].emit('create', {
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      selectedCategories = _useState5[0],
      setSelectedCategories = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var defaultSelected = Object.keys(categories).filter(function (cat) {
      return categories[cat];
    });
    setSelectedCategories(defaultSelected);
  }, []); // Empty dependency array ensures this runs once on mount

  return __jsx(FormContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["FlexColumn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "Your Name:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledInput"], {
    maxLength: "15",
    name: "name",
    type: "text",
    onChange: function onChange(event) {
      return setName(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  })), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, "Number of rounds:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, options.map(function (option) {
    return __jsx(CheckBoxContainer, {
      key: option,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
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
        lineNumber: 134,
        columnNumber: 15
      }
    }), __jsx("label", {
      htmlFor: option,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }
    }, option));
  })), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, "Select categories:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    style: {
      maxWidth: "450px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx(MultiSelect, {
    multiple: true,
    value: selectedCategories,
    onChange: function onChange(event) {
      var selectedOptions = Array.from(event.target.selectedOptions, function (option) {
        return option.value;
      });
      setSelectedCategories(selectedOptions);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, Object.keys(categories).map(function (cat) {
    return __jsx("option", {
      key: cat,
      value: cat,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 19
      }
    }, cat);
  }))), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx(Select, {
    value: scoringType,
    onChange: function onChange(event) {
      return setScoringType(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "cross",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, "Score Each Other"), __jsx("option", {
    value: "self",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, "Score Yourself"), __jsx("option", {
    value: "ai",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, "Score by AI"))), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
      lineNumber: 159,
      columnNumber: 11
    }
  }, "Create Room")), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fontSize: "25px",
    padding: "15px",
    minWidth: "220px",
    onClick: function onClick() {
      return cancel();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
//# sourceMappingURL=index.js.cb87716dfa59b594feef.hot-update.js.map