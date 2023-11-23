module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Create.js":
/*!******************************!*\
  !*** ./components/Create.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var human_readable_ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! human-readable-ids */ "human-readable-ids");
/* harmony import */ var human_readable_ids__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(human_readable_ids__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledComponents */ "./components/StyledComponents.js");
/* harmony import */ var _constants_websocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/websocket */ "./constants/websocket.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Create.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Create__FormContainer",
  componentId: "sc-1xf6e0b-0"
})(["padding:40px;padding-top:30px;display:flex;flex-direction:column;text-align:center;"]);
const CheckBoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Create__CheckBoxContainer",
  componentId: "sc-1xf6e0b-1"
})(["margin:0 20px 20px 0;"]);

const Create = ({
  cancel,
  setGameData,
  setGamePlaying
}) => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: rounds,
    1: setRounds
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("5");
  const {
    0: scoringType,
    1: setScoringType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("ai");
  const {
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
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
  });

  const generateRandomCode = length => {
    let code = '';

    for (let i = 0; i < length; i++) {
      code += Math.floor(Math.random() * 10); // Generate a random digit
    }

    return code;
  }; // Monzo easter egg


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
  const categoriesArray = Object.keys(categories);
  const options = ["5", "7", "10"];
  const gameData = {
    name,
    isAdmin: true
  };

  const handleCreateGame = code => {
    let cats = [];
    categoriesArray.forEach(cat => {
      if (categories[cat]) cats.push(cat);
    });
    _constants_websocket__WEBPACK_IMPORTED_MODULE_4__["socket"].emit('create', {
      name,
      code,
      rounds,
      categories: cats,
      scoringType
    }, ({
      error,
      users
    }) => {
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

  let disabled = !name || !checkAtleastOneSelected(categoriesArray, categories);
  return __jsx(FormContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["FlexColumn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "Your Name:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledInput"], {
    maxLength: "15",
    name: "name",
    type: "text",
    onChange: event => setName(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  })), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Select number of rounds:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, options.map(option => __jsx(CheckBoxContainer, {
    key: option,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 36
    }
  }, __jsx("input", {
    type: "radio",
    id: option,
    name: "rounds",
    value: option,
    onChange: event => setRounds(event.target.value),
    checked: rounds === option,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: option,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, option)))), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "Select categories:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    style: {
      maxWidth: "450px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, categoriesArray.map(cat => __jsx(CheckBoxContainer, {
    key: cat,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 41
    }
  }, __jsx("input", {
    type: "checkbox",
    id: cat,
    name: "categories",
    onChange: event => {
      setCategories(Object.assign({}, categories, {
        [cat]: event.target.checked
      }));
    },
    checked: categories[cat],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: cat,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, cat)))), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, "Scoring Rules:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(CheckBoxContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "radio",
    id: "cross",
    name: "scoring",
    value: "cross",
    onChange: event => setScoringType(event.target.value),
    checked: scoringType === "cross",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "cross",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "Score Each Other")), __jsx(CheckBoxContainer, {
    key: "self",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "radio",
    id: "self",
    name: "scoring",
    value: "self",
    onChange: event => setScoringType(event.target.value),
    checked: scoringType === "self",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "self",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, "Score Yourself")), __jsx(CheckBoxContainer, {
    key: "ai",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "radio",
    id: "ai",
    name: "scoring",
    value: "ai",
    onChange: event => setScoringType(event.target.value),
    checked: scoringType === "ai",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "ai",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "Score by AI"))), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: disabled,
    fontSize: "25px",
    padding: "15px",
    minWidth: "220px",
    onClick: event => {
      event.preventDefault(); //let code = hri.random();

      let code = generateRandomCode(4); // Use your custom function here

      handleCreateGame(code);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "Create Room")), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fontSize: "25px",
    padding: "15px",
    minWidth: "220px",
    onClick: () => cancel(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, "Cancel")));
};

const checkAtleastOneSelected = (categoriesList, categories) => {
  let enableButton = false;
  categoriesList.forEach(category => {
    if (categories[category]) {
      enableButton = true;
    }
  });
  return enableButton;
};

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ "./components/Game/FinalScreen.js":
/*!****************************************!*\
  !*** ./components/Game/FinalScreen.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/theme */ "./constants/theme.js");
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyledComponents */ "./components/StyledComponents.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/FinalScreen.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FinalScreen = ({
  scores,
  handleRestartGame
}) => {
  let winner = {
    score: 0
  };
  scores.forEach(score => {
    if (score.score > winner.score) winner = {
      score: score.score,
      name: score.name
    };
  });
  return __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FlexColumn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, "Final Scores"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FlexContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, scores.map(user => {
    return __jsx("div", {
      style: {
        margin: "0 20px",
        textAlign: "center"
      },
      key: user.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 16
      }
    }, __jsx("img", {
      alt: `${user.name} avatar`,
      src: _constants_theme__WEBPACK_IMPORTED_MODULE_1__["avatars"][user.avatarId],
      width: 60,
      height: 60,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }), __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, user.name, ": ", user.score));
  })), __jsx("h2", {
    style: {
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, `🎉🎉 The winner is: ${winner.name || 'No winner!'} 🎉🎉`), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fontSize: "25px",
    padding: "15px",
    minWidth: "220px",
    onClick: event => {
      event.preventDefault();
      handleRestartGame(event);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, "Play Again"));
};
/* harmony default export */ __webpack_exports__["default"] = (FinalScreen);

/***/ }),

/***/ "./components/Game/GameHeader.js":
/*!***************************************!*\
  !*** ./components/Game/GameHeader.js ***!
  \***************************************/
/*! exports provided: HelpIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpIcon", function() { return HelpIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/GameHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GameHeader__Container",
  componentId: "sc-1k9cj4g-0"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-around;font-size:15px;@media(max-width:500px){}"]);
const TimerValue = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "GameHeader__TimerValue",
  componentId: "sc-1k9cj4g-1"
})(["position:relative;top:48px;"]);
const TimerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GameHeader__TimerContainer",
  componentId: "sc-1k9cj4g-2"
})(["background-image:url('/assets/timer.png');height:100px;background-size:100px;width:100px;text-align:center;font-size:1.3em;"]);
const RoundContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GameHeader__RoundContainer",
  componentId: "sc-1k9cj4g-3"
})(["font-size:1.8em;position:relative;top:30px;@media(max-width:500px){font-size:1em;}display:flex;flex-direction:column;"]);
const BoldContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "GameHeader__BoldContent",
  componentId: "sc-1k9cj4g-4"
})(["color:red;font-weight:bold;font-size:1.2em;"]);
const HelpIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GameHeader__HelpIcon",
  componentId: "sc-1k9cj4g-5"
})(["position:fixed;bottom:70px;right:20px;width:40px;height:40px;background-color:#007bff;color:white;border-radius:50%;text-align:center;line-height:40px;font-size:20px;cursor:pointer;box-shadow:0 2px 4px rgba(0,0,0,0.2);"]);
let tickingSound;

const GameHeader = ({
  roundNumber,
  timerValue,
  currentAlphabet,
  maxRounds,
  soundOn
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 10
    }
  }, __jsx(RoundContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "Round ", __jsx(BoldContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, `#${roundNumber}/${maxRounds}`)), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "Current Alphabet: ", __jsx(BoldContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 31
    }
  }, currentAlphabet || 'Not Selected'))), __jsx(TimerContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(TimerValue, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, timerValue)));
};

const playAudio = audio => {
  const audioPromise = audio.play();

  if (audioPromise !== undefined) {
    audioPromise.then(_ => {// autoplay started
    }).catch(err => {
      // catch dom exception
      console.info(err);
    });
  }
};

const pauseAudio = audio => {
  const audioPromise = audio.pause();

  if (audioPromise !== undefined) {
    audioPromise.then(_ => {
      audio.load();
    }).catch(err => {
      // catch dom exception
      console.info(err);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GameHeader);

/***/ }),

/***/ "./components/Game/InputTable.js":
/*!***************************************!*\
  !*** ./components/Game/InputTable.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyledComponents */ "./components/StyledComponents.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/InputTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TableContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "InputTable__TableContainer",
  componentId: "ia4ov4-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-around;@media (max-width:768px){width:min-content;}"]);
const Paper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "InputTable__Paper",
  componentId: "ia4ov4-1"
})(["background:white;background-image:linear-gradient(90deg,transparent 79px,#abced4 79px,#abced4 81px,transparent 81px),linear-gradient(#eee .1em,transparent .1em);background-size:100% 1.2em;width:480px;height:auto;padding:30px 30px 30px 110px;margin:0 auto;margin-top:50px;box-shadow:#9e9e9e70 11px 8px 12px;@media (max-width:768px){box-shadow:gray 0px 0px;width:180px;padding:30px 30px 30px 80px;background-image:linear-gradient(90deg,transparent 49px,#abced4 49px,#abced4 51px,transparent 51px),linear-gradient(#eee .1em,transparent .1em);}text-align:center;"]);

const InputTable = ({
  sendResponse,
  timerValue,
  categories
}) => {
  const {
    0: response,
    1: setResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  if (timerValue === 60) {
    sendResponse(response);
  }

  return __jsx(Paper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 10
    }
  }, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(TableContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, categories.map(cat => __jsx("span", {
    key: cat,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 32
    }
  }, __jsx("label", {
    style: {
      display: 'none'
    },
    htmlFor: cat,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, `${cat}:`), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledInput"], {
    placeholder: cat,
    maxLength: "30",
    name: cat,
    type: "text",
    onChange: event => {
      setResponse(Object.assign({}, response, {
        [cat]: event.target.value
      }));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })))), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      background: 'red'
    },
    onClick: event => {
      event.preventDefault();
      sendResponse(response);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "\uD83D\uDE8C Stop the Bus")));
};

/* harmony default export */ __webpack_exports__["default"] = (InputTable);

/***/ }),

/***/ "./components/Game/Play.js":
/*!*********************************!*\
  !*** ./components/Game/Play.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/theme */ "./constants/theme.js");
/* harmony import */ var _constants_websocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/websocket */ "./constants/websocket.js");
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StyledComponents */ "./components/StyledComponents.js");
/* harmony import */ var _InputTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputTable */ "./components/Game/InputTable.js");
/* harmony import */ var _ResultsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ResultsTable */ "./components/Game/ResultsTable.js");
/* harmony import */ var _ScoreTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ScoreTable */ "./components/Game/ScoreTable.js");
/* harmony import */ var _PlayerList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PlayerList */ "./components/Game/PlayerList.js");
/* harmony import */ var _GameHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GameHeader */ "./components/Game/GameHeader.js");
/* harmony import */ var _FinalScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FinalScreen */ "./components/Game/FinalScreen.js");
/* harmony import */ var _StartGameScreen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StartGameScreen */ "./components/Game/StartGameScreen.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/Play.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Play__Container",
  componentId: "sc-q76vgx-0"
})(["font-family:", ";padding-top:80px;"], _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].font);
const Play = ({
  gameData,
  setGamePlaying,
  soundOn
}) => {
  const {
    0: users,
    1: setUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: code,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: currentGameRound,
    1: setCurrentGameRound
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: responseSubmitted,
    1: setResponseSubmitted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: scoreSubmitted,
    1: setScoreSubmitted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: allScoresCollected,
    1: setAllScoresCollected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: allResponsesCollected,
    1: setAllResponsesCollected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: currentAlphabet,
    1: setCurrentAlphabet
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: gameState,
    1: setGameState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: gameStarted,
    1: startGame
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: timerValue,
    1: setTimerValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: gameEnded,
    1: setGameEnded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: finalScores,
    1: setFinalScores
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: maxRounds,
    1: setMaxRounds
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isAdmin,
    1: setAdmin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(gameData.isAdmin);
  const {
    0: scorePartner,
    1: setScorePartner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  // const isAdmin = gameData.isAdmin;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      code,
      users,
      maxRounds,
      categories
    } = gameData;
    setUsers(users);
    setCode(code);
    setMaxRounds(Number(maxRounds));
    setCategories(categories);
  }, [gameData]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].on("restartGame", () => {
      setFinalScores([]);
      setGameEnded(false);
    });
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].on("gameData", ({
      users
    }) => {
      setUsers(users);
    });
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].on("allSubmitted", ({
      gameState,
      scorePartners
    }) => {
      setGameState(Object.assign({}, gameState));
      scorePartners.forEach(scorePartner => {
        if (scorePartner[0].id === _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].id) {
          setScorePartner(scorePartner[1]);
        }
      });
      setAllResponsesCollected(true);
    });
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].on("allScoresSubmitted", ({
      gameState
    }) => {
      setGameState(Object.assign({}, gameState));
      setAllScoresCollected(true);
    });
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].on("allPlayersReady", ({
      gameState
    }) => {
      setLoading(true);
      setGameState(Object.assign({}, gameState));
      setCurrentGameRound(gameState.currentRound);
      setResponseSubmitted(false);
      setAllResponsesCollected(false);
      setAllScoresCollected(false);
      setScoreSubmitted(false);
      setTimerValue(0);
      setCurrentAlphabet(gameState.currentAlphabet);
      setLoading(false);
    });
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].on("gameStarted", ({
      gameState
    }) => {
      startGame(gameState.started);
      setCurrentAlphabet(gameState.currentAlphabet);
    });
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].on("gameEnded", ({
      scores,
      gameState
    }) => {
      setLoading(true);
      setGameState(Object.assign({}, gameState));
      setCurrentGameRound(1);
      setResponseSubmitted(false);
      setAllResponsesCollected(false);
      setAllScoresCollected(false);
      setScoreSubmitted(false);
      setTimerValue(0);
      setCurrentAlphabet('');
      setGameEnded(true);
      startGame(false);
      setLoading(false);
      setUsers(gameState.users);
      // New person who starts the game will be admin
      setAdmin(false);
      setFinalScores(scores);
    });
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].on("timerValue", ({
      timer
    }) => {
      setTimerValue(timer);
    });
  }, []);

  // Sumbit users respnse
  const sendResponse = response => {
    // forEach category, make a response object
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].emit('sendResponse', {
      code,
      response,
      round: currentGameRound
    }, () => {
      setResponseSubmitted(true);
      _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].emit('stopTimer', {
        code
      });
    });
  };
  const handleSubmitScore = (score, id) => {
    let submitScore;
    submitScore = score ? score : 0;
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].emit('sendScore', {
      id,
      code,
      score: submitScore,
      round: currentGameRound
    }, ({
      error,
      gameState
    }) => {
      if (error) alert(error);else if (gameState) {
        setScoreSubmitted(true);
      }
    });
  };
  const handleStartGame = () => {
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].emit('startGame', {
      code
    }, gameState => {
      if (gameState) {
        startGame(gameState.started);
        setLoading(false);
      }
    });
  };
  const handleRestartGame = event => {
    event.preventDefault();
    startGame(false);
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].emit('restartGame', {
      code
    }, () => {
      setFinalScores([]);
      setGameEnded(false);
      setAdmin(true);
    });
  };
  const handleStartNextRound = () => {
    // If everyone is ready to start next round, then start next round 
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].emit('playerReady', {
      code,
      round: currentGameRound
    }, ({
      gameState
    }) => {
      if (gameState) {}
    });
  };
  const renderGameState = () => {
    if (loading) return __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["FlexContainer"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 25
      }
    }, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 40
      }
    }));
    if (gameEnded) return __jsx(_FinalScreen__WEBPACK_IMPORTED_MODULE_10__["default"], {
      handleRestartGame: handleRestartGame,
      scores: finalScores,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 27
      }
    });
    if (!gameStarted) return __jsx(_StartGameScreen__WEBPACK_IMPORTED_MODULE_11__["default"], {
      handleStartGame: handleStartGame,
      isAdmin: isAdmin,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 30
      }
    });else if (allScoresCollected) return __jsx(_ScoreTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
      maxRounds: maxRounds,
      handleStartNextRound: handleStartNextRound,
      round: currentGameRound,
      gameState: gameState,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 14
      }
    });else if (responseSubmitted && !allResponsesCollected) return __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["FlexContainer"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 14
      }
    }, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 29
      }
    }));else if (allResponsesCollected) return __jsx(_ResultsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      scorePartner: scorePartner,
      scoreSubmitted: scoreSubmitted,
      handleSubmitScore: handleSubmitScore,
      round: currentGameRound,
      gameState: gameState,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 14
      }
    });else return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, gameStarted ? __jsx(_GameHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
      soundOn: soundOn,
      maxRounds: maxRounds,
      timerValue: timerValue,
      roundNumber: currentGameRound,
      currentAlphabet: currentAlphabet,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 26
      }
    }) : false, __jsx(_InputTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
      categories: categories,
      timerValue: timerValue,
      sendResponse: sendResponse,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }
    }));
  };
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 10
    }
  }, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["ExitButtonContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["ExitButton"], {
    onClick: () => {
      _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].emit('removeUserFromGame', {
        code
      }, () => {
        setGamePlaying(false);
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 26
    }
  }, "X")), !gameEnded && __jsx(_PlayerList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    code: code,
    gameStarted: gameStarted || gameEnded,
    users: users,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 20
    }
  }), renderGameState());
};
/* harmony default export */ __webpack_exports__["default"] = (Play);

/***/ }),

/***/ "./components/Game/PlayerList.js":
/*!***************************************!*\
  !*** ./components/Game/PlayerList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/theme */ "./constants/theme.js");
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StyledComponents */ "./components/StyledComponents.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clipboard-copy */ "clipboard-copy");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/PlayerList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ActivePlayers = ({
  users,
  gameStarted,
  code
}) => {
  const width = gameStarted ? 30 : 60;
  const height = width;
  const {
    0: copiedString,
    1: setCopiedString
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Copy');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !gameStarted && __jsx("div", {
    style: {
      textAlign: "center",
      padding: "20px 20px 20px 20px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 22
    }
  }, __jsx("div", {
    style: {
      padding: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 91
    }
  }, "Your Game Code is:", __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(GameCode, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, ` `, code), __jsx(CopyButton, {
    disabled: copiedString === "Copied!",
    onClick: () => {
      clipboard_copy__WEBPACK_IMPORTED_MODULE_4___default()(code).then(() => setCopiedString('Copied!'));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, copiedString)), "Send it to your friends to start the game!")), __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, !gameStarted && __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 24
    }
  }, "Who's Playing?"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, users.map((user, i) => __jsx(UserContainer, {
    gameStarted: gameStarted,
    key: user.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 32
    }
  }, __jsx("img", {
    alt: `${user.name} avatar`,
    width: width,
    height: height,
    src: _constants_theme__WEBPACK_IMPORTED_MODULE_2__["avatars"][user.avatarIndex || i],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), gameStarted && __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 27
    }
  }, user.name), !gameStarted && __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 28
    }
  }, user.name))))));
};

// Styles
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PlayerList__Container",
  componentId: "sc-18fb6rp-0"
})(["text-align:center;color:", ""], _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.red);
// Create the keyframes
const flicker = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:rotate(-2deg);}to{transform:rotate(8deg);}"]);
const CopyButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "PlayerList__CopyButton",
  componentId: "sc-18fb6rp-1"
})(["margin:5px;margin-left:10px;padding:5px 10px;font-size:20px;color:white;border:none;cursor:", ";background-color:", ";font-family:", ";"], props => props.disabled ? 'not-allowed' : 'pointer', props => props.disabled ? 'grey' : _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.blue, _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].font);
const GameCode = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "PlayerList__GameCode",
  componentId: "sc-18fb6rp-2"
})(["color:", ";font-weight:bold;font-size:1.5em;"], _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.red);
const UserContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PlayerList__UserContainer",
  componentId: "sc-18fb6rp-3"
})(["display:flex;animation:", " 1s cubic-bezier(1,-1,0,2) infinite;flex-direction:column;align-items:center;margin:0 20px;color:black;"], props => !props.gameStarted && flicker);
/* harmony default export */ __webpack_exports__["default"] = (ActivePlayers);

/***/ }),

/***/ "./components/Game/ResultsTable.js":
/*!*****************************************!*\
  !*** ./components/Game/ResultsTable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyledComponents */ "./components/StyledComponents.js");
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/theme */ "./constants/theme.js");
/* harmony import */ var _constants_websocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/websocket */ "./constants/websocket.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! papaparse */ "papaparse");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/ResultsTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const TableContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ResultsTable__TableContainer",
  componentId: "sc-1lg56mx-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-around;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ResultsTable__Container",
  componentId: "sc-1lg56mx-1"
})(["padding:20px 0;display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;"]);
const Paper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ResultsTable__Paper",
  componentId: "sc-1lg56mx-2"
})(["background:white;background-size:100% 1.2em;height:auto;margin:0 auto;margin-top:30px;box-shadow:#9e9e9e63 6px 7px 14px 0px;width:250px;padding:30px 30px 30px 30px;background-image:linear-gradient(90deg,transparent 49px,transparent 49px,transparent 51px,transparent 51px),linear-gradient(#eee .1em,transparent .1em);"]);
const Submission = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "ResultsTable__Submission",
  componentId: "sc-1lg56mx-3"
})(["color:", ";word-break:break-all;"], _constants_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.blue);
const StyledIncrementButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "ResultsTable__StyledIncrementButton",
  componentId: "sc-1lg56mx-4"
})(["font-weight:bold;font-size:14px;border:", ";color:", ";cursor:", ";"], props => props.disabled ? '1px solid gray' : '1px solid black', props => props.disabled ? 'gray' : 'black', props => props.disabled ? 'not-allowed' : 'pointer');
const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ResultsTable__InputContainer",
  componentId: "sc-1lg56mx-5"
})(["margin-left:15px;font-size:1.5em;display:flex;align-items:center;width:80px;justify-content:space-between;"]);
const NumberContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ResultsTable__NumberContainer",
  componentId: "sc-1lg56mx-6"
})(["margin-left:15px;font-size:1.5em;display:flex;align-items:center;width:80px;justify-content:center;"]);

const ResultsTable = ({
  gameState,
  round,
  handleSubmitScore,
  scoreSubmitted,
  scorePartner
}) => {
  let initialScore = {};
  const {
    0: scores,
    1: setScores
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const categories = gameState.categories;
  const currentAlphabet = gameState.currentAlphabet;
  let scoringId = gameState.scoringType === "cross" ? scorePartner.id : _constants_websocket__WEBPACK_IMPORTED_MODULE_4__["socket"].id;
  let users = sortUserList([...gameState.users], scoringId);
  users.forEach(user => {
    categories.forEach(cat => {
      let similar = similarityCheck(cat, users, user.id, round);

      if (user.id === scoringId && similar.value) {
        initialScore = Object.assign({}, initialScore, {
          [cat]: 5
        });
      }
    });
  });
  const {
    0: currentScore,
    1: setCurrentScore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialScore);
  const {
    0: gameData,
    1: setGameData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    currentScore: initialScore,
    animalsSet: new Set(),
    namesSet: new Set(),
    thingsSet: new Set(),
    placesSet: new Set(),
    booksSet: new Set(),
    celebritiesSet: new Set(),
    fruitsSet: new Set(),
    instrumentsSet: new Set(),
    moviesSet: new Set(),
    musiciansSet: new Set(),
    songsSet: new Set(),
    tv_showsSet: new Set(),
    musiciansSet: new Set()
  });

  const parseCSV = async filePath => {
    const response = await fetch(filePath);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);
    return new Promise((resolve, reject) => {
      papaparse__WEBPACK_IMPORTED_MODULE_5___default.a.parse(csv, {
        complete: results => {
          resolve(results.data.map(row => row[0]));
        },
        error: reject
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const categories = ['animals', 'places', 'names', 'things', 'books', 'songs', 'tv_shows', 'movies', 'instruments', 'musicians', 'fruits'];
    const categoryPromises = categories.map(category => parseCSV(`/csv/${category}.csv`).then(data => ({
      [`${category}Set`]: new Set(data.map(item => item.toLowerCase().trim()))
    })));
    Promise.all(categoryPromises).then(results => {
      const newGameData = results.reduce((acc, currentSet) => {
        return _objectSpread({}, acc, {}, currentSet);
      }, {});
      setGameData(prevGameData => _objectSpread({}, prevGameData, {}, newGameData));
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (gameState.scoringType === "ai" && gameData.animalsSet.size > 0) {
      scoreEntriesAI();
    }
  }, [gameState, round, gameData.animalsSet, gameData.namesSet, gameData.thingsSet, gameData.placesSet]); // Add animalsSet as a dependency

  const scoreEntriesAI = async () => {
    if (gameData.animalsSet.size === 0) {
      console.log("Waiting for animalsSet to be populated...");
      return; // Exit if animalsSet is not ready
    }

    const newScores = {};

    for (const category of categories) {
      for (const user of gameState.users) {
        const answer = user.responses[round][category];

        if (answer) {
          const score = await getScoreFromAPI(category, answer);
          newScores[user.id] = _objectSpread({}, newScores[user.id] || {}, {
            [category]: score
          });
        }
      }
    }

    setScores(newScores);
    setLoading(false);
  };

  const getScoreFromAPI = async (category, answer, gameState) => {
    try {
      const formattedAnswer = answer.toLowerCase().trim();
      const categorySets = {
        Animal: gameData.animalsSet,
        Name: gameData.namesSet,
        Thing: gameData.thingsSet,
        Place: gameData.placesSet,
        Songs: gameData.songsSet,
        TV_shows: gameData.tv_showsSet,
        Books: gameData.booksSet,
        Celebrities: gameData.celebritiesSet,
        Musicians: gameData.musiciansSet,
        Instruments: gameData.instrumentsSet
      };
      let categorySet = categorySets[category] || new Set();
      let isExactMatch = false;
      let isSimilarMatch = false;
      categorySet.forEach(item => {
        if (formattedAnswer === item) {
          isExactMatch = true;
        } else if (formattedAnswer.includes(item) || item.includes(formattedAnswer)) {
          isSimilarMatch = true;
        }
      }); //console.log(currentAlphabet);

      if (!formattedAnswer.startsWith(currentAlphabet.toLowerCase())) {
        console.log(`'${formattedAnswer}' does not start with the round letter '${currentAlphabet}'.`);
        return -10; // Deduct points if it doesn't start with the round letter
      }

      if (isExactMatch) {
        console.log(`'${formattedAnswer}' is an exact match in ${category}.`);
        return 10; // Exact match
      } else if (isSimilarMatch) {
        console.log(`'${formattedAnswer}' is a similar match in ${category}.`);
        return 5; // Similar match
      } else {
        console.log(`'${formattedAnswer}' is not found in the ${category} set.`);
      }

      return 0; // Answer is incorrect or not in the category
    } catch (error) {
      console.error("Error checking answer:", error);
      return 0;
    }
  };

  const sumAllScores = scores => Object.keys(scores).map(cat => scores[cat]).reduce((a, b) => a + b, 0);

  let totalScore = 0;

  if (gameState.scoringType === "ai") {
    totalScore = gameState.users.reduce((total, user) => {
      return total + sumAllScores(scores[user.id] || {});
    }, 0);
  }

  if (loading) {
    return __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, gameState.scoringType === "ai" ? __jsx(TableContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 3
    }
  }, gameState.users.map(user => __jsx(Paper, {
    key: user.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }
  }, user.name), gameState.categories.map(category => __jsx("div", {
    key: category,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, category, ": ", __jsx(Submission, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 23
    }
  }, user.responses[round][category] || '-'), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 11
    }
  }, " Score: ", scores[user.id] && scores[user.id][category]))), __jsx("h3", {
    style: {
      'text-align': 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }
  }, "Total Score: ", Object.values(scores[user.id] || {}).reduce((a, b) => a + b, 0))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, gameState.scoringType === "cross" ? __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FlexContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 42
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 57
    }
  }, "You are scoring for ", __jsx(Submission, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 81
    }
  }, scorePartner.name), "!")) : false, __jsx(TableContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 5
    }
  }, users.map(user => __jsx(Paper, {
    key: user.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 26
    }
  }, __jsx("h2", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 74
    }
  }, user.name), user.id === scoringId ? __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 36
    }
  }, "Score") : false), categories.map(category => {
    let similar = similarityCheck(category, users, user.id, round);
    let selfScoreCard = user.id === scoringId;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: category,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 18
      }
    }, similar.value && selfScoreCard ? __jsx("span", {
      style: {
        color: _constants_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.red
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        width: selfScoreCard ? "150px" : "auto",
        fontSize: "1.2em"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 15
      }
    }, category, ":", `  `, " ", __jsx(Submission, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 35
      }
    }, user.responses[round][category] || '-')), selfScoreCard ? user.responses[round][category] ? __jsx(InputContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 51
      }
    }, __jsx(NumberInput, {
      category: category,
      setCurrentScore: setCurrentScore,
      currentScore: currentScore,
      value: similar.value ? 5 : 0,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 19
      }
    }), " ") : __jsx(NumberContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 167
      }
    }, "0") : ''));
  }), user.id === scoringId ? __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 34
    }
  }, `Total Score: ${sumAllScores(currentScore)}`) : false)))), __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 5
    }
  }, `saved Score:`, totalScore, !scoreSubmitted ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: event => {
      event.preventDefault();
      handleSubmitScore(totalScore, scoringId);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 9
    }
  }, "Go Next!")) : __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FlexColumn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 11
    }
  }, "Waiting for others"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 11
    }
  }))));
};

const similarityCheck = (category, users, currentUserId, round) => {
  let currentUser = users.find(user => user.id === currentUserId);
  let currentUserResponse = currentUser.responses[round][category] ? currentUser.responses[round][category].toLowerCase().trim() : null;
  let value = false;
  let name = null;
  users.filter(user => user.id !== currentUserId).forEach(user => {
    let otherResponse = user.responses[round][category] ? user.responses[round][category].toLowerCase().trim() : null;

    if (currentUserResponse && otherResponse && currentUserResponse === otherResponse) {
      value = true;
      name = user.name;
    }

    return;
  });
  return {
    value,
    name
  };
};

const NumberInput = ({
  value,
  currentScore,
  setCurrentScore,
  category
}) => {
  const {
    0: numberValue,
    1: setNumberValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCurrentScore(Object.assign({}, currentScore, {
      [category]: value
    }));
  }, []);

  const onMinus = () => {
    setCurrentScore(Object.assign({}, currentScore, {
      [category]: numberValue - 5
    }));
    if (!(numberValue <= 0)) setNumberValue(numberValue - 5);
  };

  const onPlus = () => {
    setCurrentScore(Object.assign({}, currentScore, {
      [category]: numberValue + 5
    }));
    if (!(numberValue >= 10)) setNumberValue(numberValue + 5);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledIncrementButton, {
    disabled: numberValue === 0,
    onClick: () => onMinus(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 12
    }
  }, "-"), numberValue, __jsx(StyledIncrementButton, {
    disabled: numberValue === 10,
    onClick: () => onPlus(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 128
    }
  }, "+"));
};

const sortUserList = (users, scoringId) => {
  let index = users.findIndex(user => user.id === scoringId);

  if (index != -1) {
    let first = users.splice(index, 1)[0];
    users.unshift(first);
    return users;
  }

  return users;
};

/* harmony default export */ __webpack_exports__["default"] = (ResultsTable);

/***/ }),

/***/ "./components/Game/ScoreTable.js":
/*!***************************************!*\
  !*** ./components/Game/ScoreTable.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyledComponents */ "./components/StyledComponents.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/ScoreTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ScoreTable__Container",
  componentId: "zc1nx8-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-around;text-align:center;font-size:1.5em;"]);

const ScoreTable = ({
  maxRounds,
  gameState,
  round,
  handleStartNextRound
}) => {
  const {
    0: playerReady,
    1: setPlayerReady
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }, gameState.users.map(user => __jsx("div", {
    key: user.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 34
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, user.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, user.scores[round])))), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FlexContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, playerReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FlexColumn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Waiting for others"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))) : __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => {
      setPlayerReady(true);
      handleStartNextRound();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, round === maxRounds ? 'See Final Scores 🤩' : 'Start Next Round')));
};

/* harmony default export */ __webpack_exports__["default"] = (ScoreTable);

/***/ }),

/***/ "./components/Game/StartGameScreen.js":
/*!********************************************!*\
  !*** ./components/Game/StartGameScreen.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StyledComponents */ "./components/StyledComponents.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Game/StartGameScreen.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StartGameScreen = ({
  handleStartGame,
  isAdmin
}) => {
  return __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__["FlexContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }, isAdmin ? __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: event => {
      event.preventDefault();
      handleStartGame();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 15
    }
  }, "Start Game") : __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__["FlexColumn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }, "Waiting for admin to start the game.."), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 75
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StartGameScreen);

/***/ }),

/***/ "./components/Instructions.js":
/*!************************************!*\
  !*** ./components/Instructions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledComponents */ "./components/StyledComponents.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/theme */ "./constants/theme.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Instructions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const InstructionHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "Instructions__InstructionHeader",
  componentId: "sc-1tf3zcb-0"
})(["color:", ""], _constants_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.red);
const PaddedContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Instructions__PaddedContainer",
  componentId: "sc-1tf3zcb-1"
})(["padding:0 50px 0 50px;"]);

const Instructions = ({
  cancel
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__["ExitButtonContainer"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }
}, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__["ExitButton"], {
  onClick: () => cancel(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 24
  }
}, "X")), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, __jsx(PaddedContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, __jsx(InstructionHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}, "How To Play"), __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
}, "The game is simple. The game creator sets the number of rounds and chooses the word categories.", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}), "The game is player over a couple of rounds. At the beginning of every round, players get a new alphabet. Your job is to think of words that begin with that letter and fit the categories in the game."), __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }
}, "Each game round is timed at 60 seconds, but the game alsos end as soon as the first person submits their response. Think fast!")), __jsx(PaddedContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}, __jsx(InstructionHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}, "Creating A Game and Game Setup"), __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
}, "Head on over to the \"Create New Game\" section on the previous page to create a new game. You will be able to specify the number of rounds you would like to play as well as any additional categories you would want to include besides, \"Name\", \"Place\", \"Animal\" and \"Thing\"."), __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }
}, "You can also define \"scoring mechanics\". Select \"Score Yourself\" if you want people to score themselves, or select \"Score Each Other\" to score your friends. "), __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
}, "Once you have created the game, you will get a \"Game Code\". Create the room and send the Game Code to your friends who will be able to use it join the room. Once your friends have joined, the creator will be able to start the game!")), __jsx(PaddedContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }
}, __jsx(InstructionHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
}, "Scoring Rules"), __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, "Scoring Rules are simple:", __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
}, "+10 points for each unique answer"), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 11
  }
}, "+5 points for each non-unique answer"), __jsx("li", {
  __self: undefined,
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
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }
}, __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  fontSize: "25px",
  padding: "15px",
  minWidth: "220px",
  onClick: event => {
    event.preventDefault();
    cancel(false);
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }
}, "Understood, Let's Go!"))));

/* harmony default export */ __webpack_exports__["default"] = (Instructions);

/***/ }),

/***/ "./components/Join.js":
/*!****************************!*\
  !*** ./components/Join.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./components/StyledComponents.js");
/* harmony import */ var _constants_websocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/websocket */ "./constants/websocket.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Join.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Join__FormContainer",
  componentId: "sc-run06t-0"
})(["padding:20px;display:flex;flex-direction:column;text-align:center;"]);
const FormItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Join__FormItem",
  componentId: "sc-run06t-1"
})([""]);
const Join = ({
  cancel,
  setGameData,
  setGamePlaying
}) => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: code,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const gameData = {
    name,
    code,
    isAdmin: false
  };
  const handleJoinGame = event => {
    event.preventDefault();
    _constants_websocket__WEBPACK_IMPORTED_MODULE_3__["socket"].emit('join', {
      name,
      code
    }, ({
      error,
      users,
      maxRounds,
      categories
    }) => {
      if (error) {
        alert(error);
      } else {
        gameData.maxRounds = maxRounds;
        gameData.users = users;
        gameData.categories = categories;
        setGameData(gameData);
        setGamePlaying(true);
      }
    });
  };
  return __jsx(FormContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(FormItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Your Name:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledInput"], {
    maxLength: "15",
    name: "name",
    type: "text",
    onChange: event => setName(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), __jsx(FormItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "code",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Room Code:"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledInput"], {
    name: "code",
    maxLength: "20",
    type: "text",
    onChange: event => setCode(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fontSize: "25px",
    padding: "15px",
    minWidth: "220px",
    onClick: event => handleJoinGame(event),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Join Your Friends!"), __jsx(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fontSize: "25px",
    padding: "15px",
    minWidth: "220px",
    onClick: () => cancel(),
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Cancel")));
};
/* harmony default export */ __webpack_exports__["default"] = (Join);

/***/ }),

/***/ "./components/Landing.js":
/*!*******************************!*\
  !*** ./components/Landing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Join */ "./components/Join.js");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create */ "./components/Create.js");
/* harmony import */ var _Game_Play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game/Play */ "./components/Game/Play.js");
/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Instructions */ "./components/Instructions.js");
/* harmony import */ var _Game_GameHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Game/GameHeader */ "./components/Game/GameHeader.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/Landing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // Adjust the path as per your folder structure

const Landing = () => {
  const {
    0: showJoinForm,
    1: toggleJoinForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showCreateForm,
    1: toggleCreateForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showInstructions,
    1: toggleInstructions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isGamePlaying,
    1: setGamePlaying
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: gameData,
    1: setGameData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: soundOn,
    1: toggleSound
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return __jsx("div", {
    className: "container-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex flex-column align-items-center justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card text-dark mb-3",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, isGamePlaying ? __jsx(_Game_Play__WEBPACK_IMPORTED_MODULE_3__["default"], {
    soundOn: soundOn,
    setGamePlaying: setGamePlaying,
    gameData: gameData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }) : showInstructions ? __jsx(_Instructions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cancel: () => toggleInstructions(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !showJoinForm && !showCreateForm && __jsx("div", {
    className: "button-container d-flex flex-row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-success my-3 mx-2",
    onClick: () => {
      toggleJoinForm(true);
      toggleCreateForm(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, "Join Existing Game"), __jsx("button", {
    className: "btn btn-danger my-3 mx-2",
    onClick: () => {
      toggleJoinForm(false);
      toggleCreateForm(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, "Create New Game")), showJoinForm && __jsx(_Join__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cancel: toggleJoinForm,
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 34
    }
  }), showCreateForm && __jsx(_Create__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setGamePlaying: setGamePlaying,
    setGameData: setGameData,
    cancel: toggleCreateForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 36
    }
  })))), __jsx(_Game_GameHeader__WEBPACK_IMPORTED_MODULE_5__["HelpIcon"], {
    onClick: () => toggleInstructions(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "?")));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./components/StyledComponents.js":
/*!****************************************!*\
  !*** ./components/StyledComponents.js ***!
  \****************************************/
/*! exports provided: StyledInput, Button, FlexContainer, Spinner, FlexColumn, ExitButtonContainer, ExitButton, SoundButtonContainer, SoundButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return FlexContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexColumn", function() { return FlexColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitButtonContainer", function() { return ExitButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitButton", function() { return ExitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundButtonContainer", function() { return SoundButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundButton", function() { return SoundButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/theme */ "./constants/theme.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/components/StyledComponents.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "StyledComponents__StyledInput",
  componentId: "sc-162mbyu-0"
})(["font-family:", ";margin:10px;padding:10px;max-width:100px;min-width:", ";border:1px solid black;font-size:1.2em;"], _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].font, props => props.minWidth || '80px');
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "StyledComponents__Button",
  componentId: "sc-162mbyu-1"
})(["padding:", ";margin:5px;min-width:", ";font-size:", ";color:white;border:none;background-color:", ";font-family:", ";cursor:", ";"], props => props.padding || '10px 5px', props => props.minWidth || '150px', props => props.fontSize || '15px', props => props.disabled ? 'grey' : _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.blue, _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].font, props => props.disabled ? 'not-allowed' : 'pointer');
const FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "StyledComponents__FlexContainer",
  componentId: "sc-162mbyu-2"
})(["display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;"]);
const FlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "StyledComponents__FlexColumn",
  componentId: "sc-162mbyu-3"
})(["display:flex;flex-direction:column;align-items:center;"]); // Create the keyframes

const spin = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{transform:rotateZ(0);}100%{transform:rotateZ(360deg);}"]);
const SpinContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "StyledComponents__SpinContainer",
  componentId: "sc-162mbyu-4"
})(["height:50px;width:50px;animation:", " 1.4s linear infinite;"], spin);
const ExitButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "StyledComponents__ExitButtonContainer",
  componentId: "sc-162mbyu-5"
})(["position:fixed;top:0;right:0;margin:20px;"]);
const ExitButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "StyledComponents__ExitButton",
  componentId: "sc-162mbyu-6"
})(["font-size:15px;color:", ";padding:5px;cursor:pointer;width:40px;height:40px;border:1px solid ", ";box-shadow:", " 2px 2px 0px 0px;border-radius:20px;font-family:'Schoolbell',cursive;"], _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.red, _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.red, _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.red);
const SoundButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "StyledComponents__SoundButtonContainer",
  componentId: "sc-162mbyu-7"
})(["position:fixed;top:0;left:0;margin:20px;z-index:9999;"]);
const SoundButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "StyledComponents__SoundButton",
  componentId: "sc-162mbyu-8"
})(["font-size:15px;color:", ";padding:5px;cursor:pointer;width:40px;height:40px;border:1px solid ", ";box-shadow:", " 2px 2px 0px 0px;border-radius:20px;font-family:'Schoolbell',cursive;display:flex;"], _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.red, _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.red, _constants_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.red);

const Spinner = () => {
  return __jsx(SpinContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 10
    }
  }, __jsx("img", {
    alt: "loading spinner",
    src: "/assets/spinner.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }));
};



/***/ }),

/***/ "./constants/theme.js":
/*!****************************!*\
  !*** ./constants/theme.js ***!
  \****************************/
/*! exports provided: avatars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatars", function() { return avatars; });
const theme = {
  backgroundColor: 'pink',
  buttonBlue: '#24A0ED',
  colors: {
    peach: "#fe6f5e",
    mustard: "#ffcc33",
    lime: "#afe313",
    aqua: "#95e0e8",
    purple: "#7070cc",
    red: "red",
    blue: '#24A0ED'
  }
};
const avatars = {
  1: '/assets/avatars/001.svg',
  2: '/assets/avatars/002.svg',
  3: '/assets/avatars/003.svg',
  4: '/assets/avatars/004.svg',
  5: '/assets/avatars/005.svg',
  6: '/assets/avatars/006.svg',
  7: '/assets/avatars/007.svg',
  8: '/assets/avatars/008.svg',
  9: '/assets/avatars/009.svg',
  10: '/assets/avatars/010.svg'
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./constants/websocket.js":
/*!********************************!*\
  !*** ./constants/websocket.js ***!
  \********************************/
/*! exports provided: socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socket", function() { return socket; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
// Shared web socket
 // const ENDPOINT = 'http://localhost:5000/'

const ENDPOINT = "https://name-place-animal-thing-server-60a49bfac610.herokuapp.com/";
const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(ENDPOINT);


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Landing */ "./components/Landing.js");
var _jsxFileName = "/Users/farshadghazanfari/Documents/www/npat/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home() {
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Zookilla! | Online Multiplayer Game"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: "https://zookilla.com/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/farshadghazanfari/Documents/www/npat/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "clipboard-copy":
/*!*********************************!*\
  !*** external "clipboard-copy" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clipboard-copy");

/***/ }),

/***/ "human-readable-ids":
/*!*************************************!*\
  !*** external "human-readable-ids" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("human-readable-ids");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "papaparse":
/*!****************************!*\
  !*** external "papaparse" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("papaparse");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map