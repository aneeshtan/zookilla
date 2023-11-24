"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 56:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./constants/theme.js
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
/* harmony default export */ const constants_theme = (theme);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/StyledComponents.js




const StyledInput = external_styled_components_default().input.withConfig({
  displayName: "StyledComponents__StyledInput",
  componentId: "sc-162mbyu-0"
})(["font-family:", ";margin:10px;padding:10px;max-width:100px;min-width:", ";border:1px solid black;font-size:1.2em;"], constants_theme.font, props => props.minWidth || '80px');
const Button = external_styled_components_default().button.withConfig({
  displayName: "StyledComponents__Button",
  componentId: "sc-162mbyu-1"
})(["padding:", ";margin:5px;min-width:", ";font-size:", ";color:white;border:none;background-color:", ";font-family:", ";cursor:", ";"], props => props.padding || '10px 5px', props => props.minWidth || '150px', props => props.fontSize || '15px', props => props.disabled ? 'grey' : constants_theme.colors.blue, constants_theme.font, props => props.disabled ? 'not-allowed' : 'pointer');
const FlexContainer = external_styled_components_default().div.withConfig({
  displayName: "StyledComponents__FlexContainer",
  componentId: "sc-162mbyu-2"
})(["display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;"]);
const FlexColumn = external_styled_components_default().div.withConfig({
  displayName: "StyledComponents__FlexColumn",
  componentId: "sc-162mbyu-3"
})(["display:flex;flex-direction:column;align-items:center;"]); // Create the keyframes

const spin = (0,external_styled_components_.keyframes)(["0%{transform:rotateZ(0);}100%{transform:rotateZ(360deg);}"]);
const SpinContainer = external_styled_components_default().div.withConfig({
  displayName: "StyledComponents__SpinContainer",
  componentId: "sc-162mbyu-4"
})(["height:50px;width:50px;animation:", " 1.4s linear infinite;"], spin);
const ExitButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "StyledComponents__ExitButtonContainer",
  componentId: "sc-162mbyu-5"
})(["position:fixed;top:0;right:0;margin:20px;"]);
const ExitButton = external_styled_components_default().button.withConfig({
  displayName: "StyledComponents__ExitButton",
  componentId: "sc-162mbyu-6"
})(["font-size:15px;color:", ";padding:5px;cursor:pointer;width:40px;height:40px;border:1px solid ", ";box-shadow:", " 2px 2px 0px 0px;border-radius:20px;font-family:'Schoolbell',cursive;"], constants_theme.colors.red, constants_theme.colors.red, constants_theme.colors.red);
const SoundButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "StyledComponents__SoundButtonContainer",
  componentId: "sc-162mbyu-7"
})(["position:fixed;top:0;left:0;margin:20px;z-index:9999;"]);
const SoundButton = external_styled_components_default().button.withConfig({
  displayName: "StyledComponents__SoundButton",
  componentId: "sc-162mbyu-8"
})(["font-size:15px;color:", ";padding:5px;cursor:pointer;width:40px;height:40px;border:1px solid ", ";box-shadow:", " 2px 2px 0px 0px;border-radius:20px;font-family:'Schoolbell',cursive;display:flex;"], constants_theme.colors.red, constants_theme.colors.red, constants_theme.colors.red);

const Spinner = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(SpinContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      alt: "loading spinner",
      src: "/assets/spinner.svg"
    })
  });
};


;// CONCATENATED MODULE: external "socket.io-client"
const external_socket_io_client_namespaceObject = require("socket.io-client");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_namespaceObject);
;// CONCATENATED MODULE: ./constants/websocket.js
// Shared web socket
 // const ENDPOINT = 'http://localhost:5000/'

const ENDPOINT = "http://localhost:5000/";
const socket = external_socket_io_client_default()(ENDPOINT);

;// CONCATENATED MODULE: ./components/Join.js






const FormContainer = external_styled_components_default().div.withConfig({
  displayName: "Join__FormContainer",
  componentId: "sc-run06t-0"
})(["padding:20px;display:flex;flex-direction:column;text-align:center;"]);
const FormItem = external_styled_components_default().p.withConfig({
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
  } = (0,external_react_.useState)('');
  const {
    0: code,
    1: setCode
  } = (0,external_react_.useState)('');
  const gameData = {
    name,
    code,
    isAdmin: false
  };

  const handleJoinGame = event => {
    event.preventDefault();
    socket.emit('join', {
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

  return /*#__PURE__*/jsx_runtime_.jsx(FormContainer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FormItem, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "name",
          children: "Your Name:"
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledInput, {
          maxLength: "15",
          name: "name",
          type: "text",
          onChange: event => setName(event.target.value)
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormItem, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "code",
          children: "Room Code:"
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledInput, {
          name: "code",
          maxLength: "20",
          type: "text",
          onChange: event => setCode(event.target.value)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        fontSize: "25px",
        padding: "15px",
        minWidth: "220px",
        onClick: event => handleJoinGame(event),
        children: "Join Your Friends!"
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        fontSize: "25px",
        padding: "15px",
        minWidth: "220px",
        onClick: () => cancel(),
        type: "submit",
        children: "Cancel"
      })]
    })
  });
};

/* harmony default export */ const components_Join = (Join);
;// CONCATENATED MODULE: external "human-readable-ids"
const external_human_readable_ids_namespaceObject = require("human-readable-ids");
;// CONCATENATED MODULE: ./components/Create.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Create_FormContainer = external_styled_components_default().div.withConfig({
  displayName: "Create__FormContainer",
  componentId: "sc-1xf6e0b-0"
})(["max-width:500px;max-height:80vh;margin:auto;padding:20px;background:rgba(255,255,255,0.8);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);overflow-y:auto;"]);
const MultiSelect = external_styled_components_default().select.withConfig({
  displayName: "Create__MultiSelect",
  componentId: "sc-1xf6e0b-1"
})(["width:100%;padding:10px;margin:10px 0;border-radius:5px;border:1px solid #ccc;background-color:white;box-sizing:border-box;height:150px;overflow-y:auto;"]);
const Select = external_styled_components_default().select.withConfig({
  displayName: "Create__Select",
  componentId: "sc-1xf6e0b-2"
})(["width:100%;padding:10px;margin:10px 0;border-radius:5px;border:1px solid #ccc;background-color:white;box-sizing:border-box;"]);
const CheckBoxContainer = external_styled_components_default().div.withConfig({
  displayName: "Create__CheckBoxContainer",
  componentId: "sc-1xf6e0b-3"
})(["margin:0 20px 20px 0;"]);

const Create = ({
  cancel,
  setGameData,
  setGamePlaying
}) => {
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)('');
  const {
    0: rounds,
    1: setRounds
  } = (0,external_react_.useState)("5");
  const {
    0: scoringType,
    1: setScoringType
  } = (0,external_react_.useState)("ai");
  const {
    0: categories,
    1: setCategories
  } = (0,external_react_.useState)({
    Name: true,
    Place: true,
    Animal: true,
    Thing: true,
    Songs: false,
    Movies: false,
    "TV_shows": false,
    Fruits: false,
    //Vegetables: false,
    Books: false,
    //Subjects: false,
    Celebrities: false,
    Musicians: false,
    Instruments: false,
    Colors: false,
    Countries: false,
    "English_Verb": false,
    "English_Adj": false
  });

  const generateRandomCode = length => {
    let code = '';

    for (let i = 0; i < length; i++) {
      code += Math.floor(Math.random() * 10); // Generate a random digit
    }

    return code;
  }; // Monzo easter egg


  (0,external_react_.useEffect)(() => {
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
    socket.emit('create', {
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
  const {
    0: selectedCategories,
    1: setSelectedCategories
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    const defaultSelected = Object.keys(categories).filter(cat => categories[cat]);
    setSelectedCategories(defaultSelected);
  }, []); // Empty dependency array ensures this runs once on mount

  return /*#__PURE__*/jsx_runtime_.jsx(Create_FormContainer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexColumn, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "name",
            children: "Your Name:"
          }), /*#__PURE__*/jsx_runtime_.jsx(StyledInput, {
            maxLength: "15",
            name: "name",
            type: "text",
            onChange: event => setName(event.target.value)
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "Number of rounds:"
        }), /*#__PURE__*/jsx_runtime_.jsx(FlexContainer, {
          children: options.map(option => /*#__PURE__*/(0,jsx_runtime_.jsxs)(CheckBoxContainer, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "radio",
              id: option,
              name: "rounds",
              value: option,
              onChange: event => setRounds(event.target.value),
              checked: rounds === option
            }), /*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: option,
              children: option
            })]
          }, option))
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "Select Topics:"
        }), /*#__PURE__*/jsx_runtime_.jsx(FlexContainer, {
          style: {
            maxWidth: "450px"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(MultiSelect, {
            multiple: true,
            value: selectedCategories,
            onChange: event => {
              const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
              setSelectedCategories(selectedOptions); // Update the categories state

              const updatedCategories = _objectSpread({}, categories);

              Object.keys(updatedCategories).forEach(cat => {
                updatedCategories[cat] = selectedOptions.includes(cat);
              });
              setCategories(updatedCategories);
            },
            children: Object.keys(categories).map(cat => /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: cat,
              children: cat
            }, cat))
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(FlexContainer, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Select, {
            value: scoringType,
            onChange: event => setScoringType(event.target.value),
            children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "cross",
              children: "Score Each Other"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "self",
              children: "Score Yourself"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "ai",
              children: "Score by AI"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
          disabled: disabled,
          fontSize: "25px",
          padding: "15px",
          minWidth: "220px",
          onClick: event => {
            event.preventDefault(); //let code = hri.random();

            let code = generateRandomCode(4); // Use your custom function here

            handleCreateGame(code);
          },
          children: "Create Room"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        fontSize: "25px",
        padding: "15px",
        minWidth: "220px",
        onClick: () => cancel(),
        children: "Cancel"
      })]
    })
  });
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

/* harmony default export */ const components_Create = (Create);
;// CONCATENATED MODULE: ./components/Game/InputTable.js





const TableContainer = external_styled_components_default().div.withConfig({
  displayName: "InputTable__TableContainer",
  componentId: "sc-ia4ov4-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-around;@media (max-width:768px){width:min-content;}"]);
const Paper = external_styled_components_default().div.withConfig({
  displayName: "InputTable__Paper",
  componentId: "sc-ia4ov4-1"
})(["background:white;background-image:linear-gradient(90deg,transparent 79px,#abced4 79px,#abced4 81px,transparent 81px),linear-gradient(#eee .1em,transparent .1em);background-size:100% 1.2em;width:480px;height:auto;padding:30px 30px 30px 110px;margin:0 auto;margin-top:50px;box-shadow:#9e9e9e70 11px 8px 12px;@media (max-width:768px){box-shadow:gray 0px 0px;width:180px;padding:30px 30px 30px 80px;background-image:linear-gradient(90deg,transparent 49px,#abced4 49px,#abced4 51px,transparent 51px),linear-gradient(#eee .1em,transparent .1em);}text-align:center;"]);

const InputTable = ({
  sendResponse,
  timerValue,
  categories
}) => {
  const {
    0: response,
    1: setResponse
  } = (0,external_react_.useState)({});

  if (timerValue === 60) {
    sendResponse(response);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Paper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TableContainer, {
        children: categories.map(cat => /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            style: {
              display: 'none'
            },
            htmlFor: cat,
            children: `${cat}:`
          }), /*#__PURE__*/jsx_runtime_.jsx(StyledInput, {
            placeholder: cat,
            maxLength: "30",
            name: cat,
            type: "text",
            onChange: event => {
              setResponse(Object.assign({}, response, {
                [cat]: event.target.value
              }));
            }
          })]
        }, cat))
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        style: {
          background: 'red'
        },
        onClick: event => {
          event.preventDefault();
          sendResponse(response);
        },
        children: "\uD83D\uDE8C Stop the Bus"
      })]
    })
  });
};

/* harmony default export */ const Game_InputTable = (InputTable);
;// CONCATENATED MODULE: external "papaparse"
const external_papaparse_namespaceObject = require("papaparse");
var external_papaparse_default = /*#__PURE__*/__webpack_require__.n(external_papaparse_namespaceObject);
;// CONCATENATED MODULE: ./components/Game/ResultsTable.js
function ResultsTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ResultsTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ResultsTable_ownKeys(Object(source), !0).forEach(function (key) { ResultsTable_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ResultsTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ResultsTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ResultsTable_TableContainer = external_styled_components_default().div.withConfig({
  displayName: "ResultsTable__TableContainer",
  componentId: "sc-1lg56mx-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-around;"]);
const Container = external_styled_components_default().div.withConfig({
  displayName: "ResultsTable__Container",
  componentId: "sc-1lg56mx-1"
})(["padding:20px 0;display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;"]);
const ResultsTable_Paper = external_styled_components_default().div.withConfig({
  displayName: "ResultsTable__Paper",
  componentId: "sc-1lg56mx-2"
})(["background:white;background-size:100% 1.2em;height:auto;margin:0 auto;margin-top:30px;box-shadow:#9e9e9e63 6px 7px 14px 0px;width:250px;padding:30px 30px 30px 30px;background-image:linear-gradient(90deg,transparent 49px,transparent 49px,transparent 51px,transparent 51px),linear-gradient(#eee .1em,transparent .1em);"]);
const Submission = external_styled_components_default().span.withConfig({
  displayName: "ResultsTable__Submission",
  componentId: "sc-1lg56mx-3"
})(["color:", ";word-break:break-all;"], constants_theme.colors.blue);
const StyledIncrementButton = external_styled_components_default().button.withConfig({
  displayName: "ResultsTable__StyledIncrementButton",
  componentId: "sc-1lg56mx-4"
})(["font-weight:bold;font-size:14px;border:", ";color:", ";cursor:", ";"], props => props.disabled ? '1px solid gray' : '1px solid black', props => props.disabled ? 'gray' : 'black', props => props.disabled ? 'not-allowed' : 'pointer');
const InputContainer = external_styled_components_default().div.withConfig({
  displayName: "ResultsTable__InputContainer",
  componentId: "sc-1lg56mx-5"
})(["margin-left:15px;font-size:1.5em;display:flex;align-items:center;width:80px;justify-content:space-between;"]);
const NumberContainer = external_styled_components_default().div.withConfig({
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
  } = (0,external_react_.useState)({});
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  const categories = gameState.categories;
  const currentAlphabet = gameState.currentAlphabet;
  let scoringId = gameState.scoringType === "cross" ? scorePartner.id : socket.id;
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
  } = (0,external_react_.useState)(initialScore);

  const parseCSV = async filePath => {
    try {
      const response = await fetch(filePath);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      return new Promise((resolve, reject) => {
        external_papaparse_default().parse(csv, {
          complete: results => {
            resolve(results.data.map(row => row[0]));
          },
          error: reject
        });
      });
    } catch (error) {
      console.error(`Error parsing CSV from ${filePath}:`, error);
      throw error; // Propagate the error
    }
  };

  (0,external_react_.useEffect)(() => {
    if (gameState.scoringType === "ai") {
      scoreEntriesAI();
    }
  }, [gameState, round]); // Add animalsSet as a dependency

  const scoreEntriesAI = async () => {
    // if (gameData.animalsSet.size === 0) {
    //  console.log("Waiting for animalsSet to be populated...");
    //  return; // Exit if animalsSet is not ready
    // }
    const newScores = {};

    for (const category of categories) {
      for (const user of gameState.users) {
        const answer = user.responses[round][category];

        if (answer) {
          const score = await getScoreFromAPI(category, answer);
          newScores[user.id] = ResultsTable_objectSpread(ResultsTable_objectSpread({}, newScores[user.id] || {}), {}, {
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
      const csvData = await parseCSV(`/csv/${category}.csv`);
      const categorySet = new Set(csvData.map(item => item.toLowerCase().trim()));
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
        return -3; // Deduct points if it doesn't start with the round letter
      }

      if (formattedAnswer.length === 1) {
        console.log(`'${formattedAnswer}' is only one letter.`);
        return 0; // Deduct points if the answer is only one letter
      } else {
        if (isExactMatch) {
          console.log(`'${formattedAnswer}' is an exact match in ${category}.`);
          return 10; // Exact match
        } else if (isSimilarMatch) {
          console.log(`'${formattedAnswer}' is a similar match in ${category}.`);
          return 5; // Similar match
        } else {
          console.log(`'${formattedAnswer}' is not found in the ${category} set.`);
        }
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
    totalScore = totalScore < 0 ? 0 : totalScore; // Set totalScore to zero if it's negative
  }

  if (loading) {
    return /*#__PURE__*/jsx_runtime_.jsx(Spinner, {});
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [gameState.scoringType === "ai" ? /*#__PURE__*/jsx_runtime_.jsx(ResultsTable_TableContainer, {
      children: gameState.users.map(user => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ResultsTable_Paper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: user.name
        }), gameState.categories.map(category => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [category, ": ", /*#__PURE__*/jsx_runtime_.jsx(Submission, {
            children: user.responses[round][category] || '-'
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: [" Score: ", scores[user.id] && scores[user.id][category]]
          })]
        }, category)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
          children: ["Total Score: ", Object.values(scores[user.id] || {}).reduce((a, b) => a + b, 0)]
        })]
      }, user.id))
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [gameState.scoringType === "cross" ? /*#__PURE__*/jsx_runtime_.jsx(FlexContainer, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          children: ["You are scoring for ", /*#__PURE__*/jsx_runtime_.jsx(Submission, {
            children: scorePartner.name
          }), "!"]
        })
      }) : false, /*#__PURE__*/jsx_runtime_.jsx(ResultsTable_TableContainer, {
        children: users.map(user => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ResultsTable_Paper, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
            style: {
              display: 'flex',
              justifyContent: 'space-between'
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: user.name
            }), user.id === scoringId ? /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Score"
            }) : false]
          }), categories.map(category => {
            let similar = similarityCheck(category, users, user.id, round);
            let selfScoreCard = user.id === scoringId;
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
              children: [similar.value && selfScoreCard ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                style: {
                  color: constants_theme.colors.red
                },
                children: [scorePartner.name || 'You', " and ", similar.name, " put down the same word for ", category]
              }) : false, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  marginBottom: '10px',
                  display: "flex",
                  justifyContent: 'space-between',
                  alignItems: 'center'
                },
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  style: {
                    width: selfScoreCard ? "150px" : "auto",
                    fontSize: "1.2em"
                  },
                  children: [category, ":", `  `, " ", /*#__PURE__*/jsx_runtime_.jsx(Submission, {
                    children: user.responses[round][category] || '-'
                  })]
                }), selfScoreCard ? user.responses[round][category] ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(InputContainer, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(NumberInput, {
                    category: category,
                    setCurrentScore: setCurrentScore,
                    currentScore: currentScore,
                    value: similar.value ? 5 : 0
                  }), " "]
                }) : /*#__PURE__*/jsx_runtime_.jsx(NumberContainer, {
                  children: "0"
                }) : '']
              }, category)]
            }, category);
          }), user.id === scoringId ? /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: `Total Score: ${sumAllScores(currentScore)}`
          }) : false]
        }, user.id))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Container, {
      children: !scoreSubmitted ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Button, {
          onClick: event => {
            event.preventDefault();
            handleSubmitScore(totalScore, scoringId);
          },
          children: "Go Next!"
        })
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexColumn, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Waiting for others"
        }), /*#__PURE__*/jsx_runtime_.jsx(Spinner, {})]
      })
    })]
  });
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
  } = (0,external_react_.useState)(value);
  (0,external_react_.useEffect)(() => {
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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(StyledIncrementButton, {
      disabled: numberValue === 0,
      onClick: () => onMinus(),
      children: "-"
    }), numberValue, /*#__PURE__*/jsx_runtime_.jsx(StyledIncrementButton, {
      disabled: numberValue === 10,
      onClick: () => onPlus(),
      children: "+"
    })]
  });
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

/* harmony default export */ const Game_ResultsTable = (ResultsTable);
;// CONCATENATED MODULE: ./components/Game/ScoreTable.js






const ScoreTable_Container = external_styled_components_default().div.withConfig({
  displayName: "ScoreTable__Container",
  componentId: "sc-zc1nx8-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-around;text-align:center;font-size:1.5em;max-height:80vh;margin:auto;padding:20px;background:rgba(255,255,255,0.8);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);overflow-y:auto;"]);

const ScoreTable = ({
  maxRounds,
  gameState,
  round,
  handleStartNextRound
}) => {
  const {
    0: playerReady,
    1: setPlayerReady
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ScoreTable_Container, {
      children: gameState.users.map(user => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: user.name
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: user.scores[round]
        })]
      }, user.id))
    }), /*#__PURE__*/jsx_runtime_.jsx(FlexContainer, {
      children: playerReady ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexColumn, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Waiting for others"
          }), /*#__PURE__*/jsx_runtime_.jsx(Spinner, {})]
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx(Button, {
        onClick: () => {
          setPlayerReady(true);
          handleStartNextRound();
        },
        children: round === maxRounds ? 'See Final Scores 🤩' : 'Start Next Round'
      })
    })]
  });
};

/* harmony default export */ const Game_ScoreTable = (ScoreTable);
;// CONCATENATED MODULE: external "clipboard-copy"
const external_clipboard_copy_namespaceObject = require("clipboard-copy");
var external_clipboard_copy_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_copy_namespaceObject);
;// CONCATENATED MODULE: ./components/Game/PlayerList.js









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
  } = (0,external_react_.useState)('Copy');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [!gameStarted && /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        textAlign: "center",
        padding: "20px 20px 20px 20px"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          padding: "10px"
        },
        children: ["Your Game Code is:", /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(GameCode, {
            children: [` `, code]
          }), /*#__PURE__*/jsx_runtime_.jsx(CopyButton, {
            disabled: copiedString === "Copied!",
            onClick: () => {
              external_clipboard_copy_default()(code).then(() => setCopiedString('Copied!'));
            },
            children: copiedString
          })]
        }), "Send it to your friends to start the game!"]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PlayerList_Container, {
      children: [!gameStarted && /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Who's Playing?"
      }), /*#__PURE__*/jsx_runtime_.jsx(FlexContainer, {
        children: users.map((user, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(UserContainer, {
          gameStarted: gameStarted,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            alt: `${user.name} avatar`,
            width: width,
            height: height,
            src: avatars[user.avatarIndex || i]
          }), gameStarted && /*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: user.name
          }), !gameStarted && /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: user.name
          })]
        }, user.id))
      })]
    })]
  });
}; // Styles


const PlayerList_Container = external_styled_components_default().div.withConfig({
  displayName: "PlayerList__Container",
  componentId: "sc-18fb6rp-0"
})(["text-align:center;color:", ""], constants_theme.colors.red); // Create the keyframes

const flicker = (0,external_styled_components_.keyframes)(["from{transform:rotate(-2deg);}to{transform:rotate(8deg);}"]);
const CopyButton = external_styled_components_default().button.withConfig({
  displayName: "PlayerList__CopyButton",
  componentId: "sc-18fb6rp-1"
})(["margin:5px;margin-left:10px;padding:5px 10px;font-size:20px;color:white;border:none;cursor:", ";background-color:", ";font-family:", ";"], props => props.disabled ? 'not-allowed' : 'pointer', props => props.disabled ? 'grey' : constants_theme.colors.blue, constants_theme.font);
const GameCode = external_styled_components_default().span.withConfig({
  displayName: "PlayerList__GameCode",
  componentId: "sc-18fb6rp-2"
})(["color:", ";font-weight:bold;font-size:1.5em;"], constants_theme.colors.red);
const UserContainer = external_styled_components_default().div.withConfig({
  displayName: "PlayerList__UserContainer",
  componentId: "sc-18fb6rp-3"
})(["display:flex;animation:", " 1s cubic-bezier(1,-1,0,2) infinite;flex-direction:column;align-items:center;margin:0 20px;color:black;"], props => !props.gameStarted && flicker);
/* harmony default export */ const PlayerList = (ActivePlayers);
;// CONCATENATED MODULE: ./components/Game/GameHeader.js




const GameHeader_Container = external_styled_components_default().div.withConfig({
  displayName: "GameHeader__Container",
  componentId: "sc-1k9cj4g-0"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-around;font-size:15px;@media(max-width:500px){}"]);
const TimerValue = external_styled_components_default().span.withConfig({
  displayName: "GameHeader__TimerValue",
  componentId: "sc-1k9cj4g-1"
})(["position:relative;top:48px;"]);
const TimerContainer = external_styled_components_default().div.withConfig({
  displayName: "GameHeader__TimerContainer",
  componentId: "sc-1k9cj4g-2"
})(["background-image:url('/assets/timer.png');height:100px;background-size:100px;width:100px;text-align:center;font-size:1.3em;"]);
const RoundContainer = external_styled_components_default().div.withConfig({
  displayName: "GameHeader__RoundContainer",
  componentId: "sc-1k9cj4g-3"
})(["font-size:1.8em;position:relative;top:30px;@media(max-width:500px){font-size:1em;}display:flex;flex-direction:column;"]);
const BoldContent = external_styled_components_default().span.withConfig({
  displayName: "GameHeader__BoldContent",
  componentId: "sc-1k9cj4g-4"
})(["color:red;font-weight:bold;font-size:1.2em;"]);
const HelpIcon = external_styled_components_default().div.withConfig({
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
  (0,external_react_.useEffect)(() => {
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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(GameHeader_Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(RoundContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: ["Round ", /*#__PURE__*/jsx_runtime_.jsx(BoldContent, {
          children: `#${roundNumber}/${maxRounds}`
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: ["Current Alphabet: ", /*#__PURE__*/jsx_runtime_.jsx(BoldContent, {
          children: currentAlphabet || 'Not Selected'
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(TimerContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(TimerValue, {
        children: timerValue
      })
    })]
  });
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

/* harmony default export */ const Game_GameHeader = (GameHeader);
;// CONCATENATED MODULE: ./components/Game/FinalScreen.js






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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexColumn, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Final Scores"
    }), /*#__PURE__*/jsx_runtime_.jsx(FlexContainer, {
      children: scores.map(user => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            margin: "0 20px",
            textAlign: "center"
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            alt: `${user.name} avatar`,
            src: avatars[user.avatarId],
            width: 60,
            height: 60
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [user.name, ": ", user.score]
          })]
        }, user.name);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
      style: {
        textAlign: "center"
      },
      children: `🎉🎉 The winner is: ${winner.name || 'No winner!'} 🎉🎉`
    }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
      fontSize: "25px",
      padding: "15px",
      minWidth: "220px",
      onClick: event => {
        event.preventDefault();
        handleRestartGame(event);
      },
      children: "Play Again"
    })]
  });
};

/* harmony default export */ const Game_FinalScreen = (FinalScreen);
;// CONCATENATED MODULE: ./components/Game/StartGameScreen.js





const StartGameScreen = ({
  handleStartGame,
  isAdmin
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(FlexContainer, {
    children: isAdmin ? /*#__PURE__*/jsx_runtime_.jsx(Button, {
      onClick: event => {
        event.preventDefault();
        handleStartGame();
      },
      children: "Start Game"
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexColumn, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Waiting for admin to start the game.."
      }), /*#__PURE__*/jsx_runtime_.jsx(Spinner, {})]
    })
  });
};

/* harmony default export */ const Game_StartGameScreen = (StartGameScreen);
;// CONCATENATED MODULE: ./components/Game/Play.js















const Play_Container = external_styled_components_default().div.withConfig({
  displayName: "Play__Container",
  componentId: "sc-q76vgx-0"
})(["font-family:", ";padding-top:80px;"], constants_theme.font);

const Play = ({
  gameData,
  setGamePlaying,
  soundOn
}) => {
  const {
    0: users,
    1: setUsers
  } = (0,external_react_.useState)([]);
  const {
    0: code,
    1: setCode
  } = (0,external_react_.useState)('');
  const {
    0: currentGameRound,
    1: setCurrentGameRound
  } = (0,external_react_.useState)(1);
  const {
    0: responseSubmitted,
    1: setResponseSubmitted
  } = (0,external_react_.useState)(false);
  const {
    0: scoreSubmitted,
    1: setScoreSubmitted
  } = (0,external_react_.useState)(false);
  const {
    0: allScoresCollected,
    1: setAllScoresCollected
  } = (0,external_react_.useState)(false);
  const {
    0: allResponsesCollected,
    1: setAllResponsesCollected
  } = (0,external_react_.useState)(false);
  const {
    0: currentAlphabet,
    1: setCurrentAlphabet
  } = (0,external_react_.useState)('');
  const {
    0: gameState,
    1: setGameState
  } = (0,external_react_.useState)({});
  const {
    0: gameStarted,
    1: startGame
  } = (0,external_react_.useState)(false);
  const {
    0: timerValue,
    1: setTimerValue
  } = (0,external_react_.useState)(0);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: gameEnded,
    1: setGameEnded
  } = (0,external_react_.useState)(false);
  const {
    0: finalScores,
    1: setFinalScores
  } = (0,external_react_.useState)([]);
  const {
    0: maxRounds,
    1: setMaxRounds
  } = (0,external_react_.useState)(0);
  const {
    0: categories,
    1: setCategories
  } = (0,external_react_.useState)([]);
  const {
    0: isAdmin,
    1: setAdmin
  } = (0,external_react_.useState)(gameData.isAdmin);
  const {
    0: scorePartner,
    1: setScorePartner
  } = (0,external_react_.useState)({}); // const isAdmin = gameData.isAdmin;

  (0,external_react_.useEffect)(() => {
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
  (0,external_react_.useEffect)(() => {
    socket.on("restartGame", () => {
      setFinalScores([]);
      setGameEnded(false);
    });
    socket.on("gameData", ({
      users
    }) => {
      setUsers(users);
    });
    socket.on("allSubmitted", ({
      gameState,
      scorePartners
    }) => {
      setGameState(Object.assign({}, gameState));
      scorePartners.forEach(scorePartner => {
        if (scorePartner[0].id === socket.id) {
          setScorePartner(scorePartner[1]);
        }
      });
      setAllResponsesCollected(true);
    });
    socket.on("allScoresSubmitted", ({
      gameState
    }) => {
      setGameState(Object.assign({}, gameState));
      setAllScoresCollected(true);
    });
    socket.on("allPlayersReady", ({
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
    socket.on("gameStarted", ({
      gameState
    }) => {
      startGame(gameState.started);
      setCurrentAlphabet(gameState.currentAlphabet);
    });
    socket.on("gameEnded", ({
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
      setUsers(gameState.users); // New person who starts the game will be admin

      setAdmin(false);
      setFinalScores(scores);
    });
    socket.on("timerValue", ({
      timer
    }) => {
      setTimerValue(timer);
    });
  }, []); // Sumbit users respnse

  const sendResponse = response => {
    // forEach category, make a response object
    socket.emit('sendResponse', {
      code,
      response,
      round: currentGameRound
    }, () => {
      setResponseSubmitted(true);
      socket.emit('stopTimer', {
        code
      });
    });
  };

  const handleSubmitScore = (score, id) => {
    let submitScore;
    submitScore = score ? score : 0;
    socket.emit('sendScore', {
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
    socket.emit('startGame', {
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
    socket.emit('restartGame', {
      code
    }, () => {
      setFinalScores([]);
      setGameEnded(false);
      setAdmin(true);
    });
  };

  const handleStartNextRound = () => {
    // If everyone is ready to start next round, then start next round 
    socket.emit('playerReady', {
      code,
      round: currentGameRound
    }, ({
      gameState
    }) => {
      if (gameState) {}
    });
  };

  const renderGameState = () => {
    if (loading) return /*#__PURE__*/jsx_runtime_.jsx(FlexContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Spinner, {})
    });
    if (gameEnded) return /*#__PURE__*/jsx_runtime_.jsx(Game_FinalScreen, {
      handleRestartGame: handleRestartGame,
      scores: finalScores
    });
    if (!gameStarted) return /*#__PURE__*/jsx_runtime_.jsx(Game_StartGameScreen, {
      handleStartGame: handleStartGame,
      isAdmin: isAdmin
    });else if (allScoresCollected) return /*#__PURE__*/jsx_runtime_.jsx(Game_ScoreTable, {
      maxRounds: maxRounds,
      handleStartNextRound: handleStartNextRound,
      round: currentGameRound,
      gameState: gameState
    });else if (responseSubmitted && !allResponsesCollected) return /*#__PURE__*/jsx_runtime_.jsx(FlexContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Spinner, {})
    });else if (allResponsesCollected) return /*#__PURE__*/jsx_runtime_.jsx(Game_ResultsTable, {
      scorePartner: scorePartner,
      scoreSubmitted: scoreSubmitted,
      handleSubmitScore: handleSubmitScore,
      round: currentGameRound,
      gameState: gameState
    });else return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [gameStarted ? /*#__PURE__*/jsx_runtime_.jsx(Game_GameHeader, {
        soundOn: soundOn,
        maxRounds: maxRounds,
        timerValue: timerValue,
        roundNumber: currentGameRound,
        currentAlphabet: currentAlphabet
      }) : false, /*#__PURE__*/jsx_runtime_.jsx(Game_InputTable, {
        categories: categories,
        timerValue: timerValue,
        sendResponse: sendResponse
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Play_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ExitButtonContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(ExitButton, {
        onClick: () => {
          socket.emit('removeUserFromGame', {
            code
          }, () => {
            setGamePlaying(false);
          });
        },
        children: "X"
      })
    }), !gameEnded && /*#__PURE__*/jsx_runtime_.jsx(PlayerList, {
      code: code,
      gameStarted: gameStarted || gameEnded,
      users: users
    }), renderGameState()]
  });
};

/* harmony default export */ const Game_Play = (Play);
;// CONCATENATED MODULE: ./components/Instructions.js







const InstructionHeader = external_styled_components_default().h1.withConfig({
  displayName: "Instructions__InstructionHeader",
  componentId: "sc-1tf3zcb-0"
})(["color:", ""], constants_theme.colors.red);
const PaddedContainer = external_styled_components_default().div.withConfig({
  displayName: "Instructions__PaddedContainer",
  componentId: "sc-1tf3zcb-1"
})(["padding:0 50px 0 50px;"]);

const Instructions = ({
  cancel
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(ExitButtonContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ExitButton, {
      onClick: () => cancel(),
      children: "X"
    })
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(PaddedContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(InstructionHeader, {
        children: "How To Play"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["The game is simple. The game creator sets the number of rounds and chooses the word categories.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "The game is player over a couple of rounds. At the beginning of every round, players get a new alphabet. Your job is to think of words that begin with that letter and fit the categories in the game."]
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Each game round is timed at 60 seconds, but the game alsos end as soon as the first person submits their response. Think fast!"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PaddedContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(InstructionHeader, {
        children: "Creating A Game and Game Setup"
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Head on over to the \"Create New Game\" section on the previous page to create a new game. You will be able to specify the number of rounds you would like to play as well as any additional categories you would want to include besides, \"Name\", \"Place\", \"Animal\" and \"Thing\"."
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "You can also define \"scoring mechanics\". Select \"Score Yourself\" if you want people to score themselves, or select \"Score Each Other\" to score your friends. "
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Once you have created the game, you will get a \"Game Code\". Create the room and send the Game Code to your friends who will be able to use it join the room. Once your friends have joined, the creator will be able to start the game!"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PaddedContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(InstructionHeader, {
        children: "Scoring Rules"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Scoring Rules are simple:", /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "+10 points for each unique answer"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "+5 points for each non-unique answer"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "+0 points for no answer"
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        textAlign: "center",
        margin: "20px"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(Button, {
        fontSize: "25px",
        padding: "15px",
        minWidth: "220px",
        onClick: event => {
          event.preventDefault();
          cancel(false);
        },
        children: "Understood, Let's Go!"
      })
    })]
  })]
});

/* harmony default export */ const components_Instructions = (Instructions);
;// CONCATENATED MODULE: ./components/Landing.js





 // Adjust the path as per your folder structure





const Landing = () => {
  const {
    0: showJoinForm,
    1: toggleJoinForm
  } = (0,external_react_.useState)(false);
  const {
    0: showCreateForm,
    1: toggleCreateForm
  } = (0,external_react_.useState)(false);
  const {
    0: showInstructions,
    1: toggleInstructions
  } = (0,external_react_.useState)(false);
  const {
    0: isGamePlaying,
    1: setGamePlaying
  } = (0,external_react_.useState)(false);
  const {
    0: gameData,
    1: setGameData
  } = (0,external_react_.useState)({});
  const {
    0: soundOn,
    1: toggleSound
  } = (0,external_react_.useState)(true);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container-fluid",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "d-flex flex-column align-items-center justify-content-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "card text-dark mb-3",
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "card-body",
          children: isGamePlaying ? /*#__PURE__*/jsx_runtime_.jsx(Game_Play, {
            soundOn: soundOn,
            setGamePlaying: setGamePlaying,
            gameData: gameData
          }) : showInstructions ? /*#__PURE__*/jsx_runtime_.jsx(components_Instructions, {
            cancel: () => toggleInstructions(false)
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [!showJoinForm && !showCreateForm && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "button-container d-flex flex-row justify-content-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "btn btn-success my-3 mx-2",
                onClick: () => {
                  toggleJoinForm(true);
                  toggleCreateForm(false);
                },
                children: "Join Existing Game"
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "btn btn-danger my-3 mx-2",
                onClick: () => {
                  toggleJoinForm(false);
                  toggleCreateForm(true);
                },
                children: "Create New Game"
              })]
            }), showJoinForm && /*#__PURE__*/jsx_runtime_.jsx(components_Join, {
              cancel: toggleJoinForm,
              setGamePlaying: setGamePlaying,
              setGameData: setGameData
            }), showCreateForm && /*#__PURE__*/jsx_runtime_.jsx(components_Create, {
              setGamePlaying: setGamePlaying,
              setGameData: setGameData,
              cancel: toggleCreateForm
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(HelpIcon, {
        onClick: () => toggleInstructions(true),
        children: "?"
      })]
    })
  });
};

/* harmony default export */ const components_Landing = (Landing);
;// CONCATENATED MODULE: ./pages/index.js




function Home() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Zookilla! | Online Multiplayer Game"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "https://zookilla.com/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Landing, {})
    })]
  });
}

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(56));
module.exports = __webpack_exports__;

})();