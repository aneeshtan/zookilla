(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6057:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ie}});var r=t(9008),i=t.n(r),a=t(7294),o=t(9521),s={1:"/assets/avatars/001.svg",2:"/assets/avatars/002.svg",3:"/assets/avatars/003.svg",4:"/assets/avatars/004.svg",5:"/assets/avatars/005.svg",6:"/assets/avatars/006.svg",7:"/assets/avatars/007.svg",8:"/assets/avatars/008.svg",9:"/assets/avatars/009.svg",10:"/assets/avatars/010.svg"},c={backgroundColor:"pink",buttonBlue:"#24A0ED",colors:{peach:"#fe6f5e",mustard:"#ffcc33",lime:"#afe313",aqua:"#95e0e8",purple:"#7070cc",red:"red",blue:"#24A0ED"}},d=t(5893),l=o.ZP.input.withConfig({displayName:"StyledComponents__StyledInput",componentId:"sc-162mbyu-0"})(["font-family:",";margin:10px;padding:10px;max-width:100px;min-width:",";border:1px solid black;font-size:1.2em;"],c.font,(function(e){return e.minWidth||"80px"})),u=o.ZP.button.withConfig({displayName:"StyledComponents__Button",componentId:"sc-162mbyu-1"})(["padding:",";margin:5px;min-width:",";font-size:",";color:white;border:none;background-color:",";font-family:",";cursor:",";"],(function(e){return e.padding||"10px 5px"}),(function(e){return e.minWidth||"150px"}),(function(e){return e.fontSize||"15px"}),(function(e){return e.disabled?"grey":c.colors.blue}),c.font,(function(e){return e.disabled?"not-allowed":"pointer"})),p=o.ZP.div.withConfig({displayName:"StyledComponents__FlexContainer",componentId:"sc-162mbyu-2"})(["display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;"]),x=o.ZP.div.withConfig({displayName:"StyledComponents__FlexColumn",componentId:"sc-162mbyu-3"})(["display:flex;flex-direction:column;align-items:center;"]),m=(0,o.F4)(["0%{transform:rotateZ(0);}100%{transform:rotateZ(360deg);}"]),f=o.ZP.div.withConfig({displayName:"StyledComponents__SpinContainer",componentId:"sc-162mbyu-4"})(["height:50px;width:50px;animation:"," 1.4s linear infinite;"],m),h=o.ZP.div.withConfig({displayName:"StyledComponents__ExitButtonContainer",componentId:"sc-162mbyu-5"})(["position:fixed;top:0;right:0;margin:20px;"]),g=o.ZP.button.withConfig({displayName:"StyledComponents__ExitButton",componentId:"sc-162mbyu-6"})(["font-size:15px;color:",";padding:5px;cursor:pointer;width:40px;height:40px;border:1px solid ",";box-shadow:"," 2px 2px 0px 0px;border-radius:20px;font-family:'Schoolbell',cursive;"],c.colors.red,c.colors.red,c.colors.red),b=(o.ZP.div.withConfig({displayName:"StyledComponents__SoundButtonContainer",componentId:"sc-162mbyu-7"})(["position:fixed;top:0;left:0;margin:20px;z-index:9999;"]),o.ZP.button.withConfig({displayName:"StyledComponents__SoundButton",componentId:"sc-162mbyu-8"})(["font-size:15px;color:",";padding:5px;cursor:pointer;width:40px;height:40px;border:1px solid ",";box-shadow:"," 2px 2px 0px 0px;border-radius:20px;font-family:'Schoolbell',cursive;display:flex;"],c.colors.red,c.colors.red,c.colors.red),function(){return(0,d.jsx)(f,{children:(0,d.jsx)("img",{alt:"loading spinner",src:"/assets/spinner.svg"})})}),j=t(6809),y=t.n(j)()("https://zookilla-npat-dfa754f96096.herokuapp.com/"),v=o.ZP.div.withConfig({displayName:"Join__FormContainer",componentId:"sc-run06t-0"})(["padding:20px;display:flex;flex-direction:column;text-align:center;"]),w=o.ZP.p.withConfig({displayName:"Join__FormItem",componentId:"sc-run06t-1"})([""]),C=function(e){var n=e.cancel,t=e.setGameData,r=e.setGamePlaying,i=(0,a.useState)(""),o=i[0],s=i[1],c=(0,a.useState)(""),p=c[0],x=c[1],m={name:o,code:p,isAdmin:!1};return(0,d.jsx)(v,{children:(0,d.jsxs)("form",{children:[(0,d.jsxs)(w,{children:[(0,d.jsx)("label",{htmlFor:"name",children:"Your Name:"}),(0,d.jsx)(l,{maxLength:"15",name:"name",type:"text",onChange:function(e){return s(e.target.value)}})]}),(0,d.jsxs)(w,{children:[(0,d.jsx)("label",{htmlFor:"code",children:"Room Code:"}),(0,d.jsx)(l,{name:"code",maxLength:"20",type:"text",onChange:function(e){return x(e.target.value)}})]}),(0,d.jsx)(u,{fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(e){return function(e){e.preventDefault(),y.emit("join",{name:o,code:p},(function(e){var n=e.error,i=e.users,a=e.maxRounds,o=e.categories;n?alert(n):(m.maxRounds=a,m.users=i,m.categories=o,t(m),r(!0))}))}(e)},children:"Join Your Friends!"}),(0,d.jsx)(u,{fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(){return n()},type:"submit",children:"Cancel"})]})})},S=t(9499);t(4816);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var _=o.ZP.div.withConfig({displayName:"Create__FormContainer",componentId:"sc-1xf6e0b-0"})(["max-width:500px;max-height:80vh;margin:auto;padding:20px;background:rgba(255,255,255,0.8);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);overflow-y:auto;"]),P=o.ZP.select.withConfig({displayName:"Create__MultiSelect",componentId:"sc-1xf6e0b-1"})(["width:100%;padding:10px;margin:10px 0;border-radius:5px;border:1px solid #ccc;background-color:white;box-sizing:border-box;height:150px;overflow-y:auto;"]),N=o.ZP.select.withConfig({displayName:"Create__Select",componentId:"sc-1xf6e0b-2"})(["width:100%;padding:10px;margin:10px 0;border-radius:5px;border:1px solid #ccc;background-color:white;box-sizing:border-box;"]),O=o.ZP.div.withConfig({displayName:"Create__CheckBoxContainer",componentId:"sc-1xf6e0b-3"})(["margin:0 20px 20px 0;"]),I=function(e,n){var t=!1;return e.forEach((function(e){n[e]&&(t=!0)})),t},Z=function(e){var n=e.cancel,t=e.setGameData,r=e.setGamePlaying,i=(0,a.useState)(""),o=i[0],s=i[1],c=(0,a.useState)("5"),m=c[0],f=c[1],h=(0,a.useState)("ai"),g=h[0],b=h[1],j=(0,a.useState)({Name:!0,Place:!0,Animal:!0,Thing:!0,Songs:!1,Movies:!1,TV_shows:!1,Fruits:!1,Books:!1,Celebrities:!1,Musicians:!1,Instruments:!1,Colors:!1,Countries:!1,Brand:!1,Verbs:!1,Adjectives:!1,"Abstract N":!1,"Concrete N":!1}),v=j[0],w=j[1];(0,a.useEffect)((function(){"Monzo"===o&&w(Object.assign({},v,{"Office Dog Breeds":!1,"Meeting Rooms":!1,"Badge Types":!1,"Activity Types":!1,Engineers:!1,"Data Scientists":!1}))}),[o]);var C=Object.keys(v),Z={name:o,isAdmin:!0},T=!o||!I(C,v),E=(0,a.useState)([]),z=E[0],G=E[1];return(0,a.useEffect)((function(){var e=Object.keys(v).filter((function(e){return v[e]}));G(e)}),[]),(0,d.jsx)(_,{children:(0,d.jsxs)("form",{children:[(0,d.jsxs)(x,{children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("label",{htmlFor:"name",children:"Your Name:"}),(0,d.jsx)(l,{maxLength:"15",name:"name",type:"text",onChange:function(e){return s(e.target.value)}})]}),(0,d.jsx)("h4",{children:"Number of rounds:"}),(0,d.jsx)(p,{children:["5","7","10"].map((function(e){return(0,d.jsxs)(O,{children:[(0,d.jsx)("input",{type:"radio",id:e,name:"rounds",value:e,onChange:function(e){return f(e.target.value)},checked:m===e}),(0,d.jsx)("label",{htmlFor:e,children:e})]},e)}))}),(0,d.jsx)("h4",{children:"Select Topics:"}),(0,d.jsx)(p,{style:{maxWidth:"450px"},children:(0,d.jsx)(P,{multiple:!0,value:z,onChange:function(e){var n=Array.from(e.target.selectedOptions,(function(e){return e.value}));G(n);var t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,S.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},v);Object.keys(t).forEach((function(e){t[e]=n.includes(e)})),w(t)},children:Object.keys(v).map((function(e){return(0,d.jsx)("option",{value:e,children:e},e)}))})}),(0,d.jsx)(p,{children:(0,d.jsxs)(N,{value:g,onChange:function(e){return b(e.target.value)},children:[(0,d.jsx)("option",{value:"cross",children:"Score Each Other"}),(0,d.jsx)("option",{value:"self",children:"Score Yourself"}),(0,d.jsx)("option",{value:"ai",children:"Score by AI"})]})}),(0,d.jsx)(u,{disabled:T,fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(e){e.preventDefault(),function(e){var n=[];C.forEach((function(e){v[e]&&n.push(e)})),y.emit("create",{name:o,code:e,rounds:m,categories:n,scoringType:g},(function(i){var a=i.error,o=i.users;a?alert(a):(Z.code=e,Z.users=o,Z.maxRounds=Number(m),Z.categories=n,t(Z),r(!0))}))}(function(e){for(var n="",t=0;t<e;t++)n+=Math.floor(10*Math.random());return n}(4))},children:"Create Room"})]}),(0,d.jsx)(u,{fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(){return n()},children:"Cancel"})]})})},T=o.ZP.div.withConfig({displayName:"InputTable__TableContainer",componentId:"sc-ia4ov4-0"})(["display:flex;flex-wrap:wrap;justify-content:space-around;@media (max-width:768px){width:min-content;}"]),E=o.ZP.div.withConfig({displayName:"InputTable__Paper",componentId:"sc-ia4ov4-1"})(["background:white;background-image:linear-gradient(90deg,transparent 79px,#abced4 79px,#abced4 81px,transparent 81px),linear-gradient(#eee .1em,transparent .1em);background-size:100% 1.2em;width:480px;height:auto;padding:30px 30px 30px 110px;margin:0 auto;margin-top:50px;box-shadow:#9e9e9e70 11px 8px 12px;@media (max-width:768px){box-shadow:gray 0px 0px;width:180px;padding:30px 30px 30px 80px;background-image:linear-gradient(90deg,transparent 49px,#abced4 49px,#abced4 51px,transparent 51px),linear-gradient(#eee .1em,transparent .1em);}text-align:center;"]),z=function(e){var n=e.sendResponse,t=e.timerValue,r=e.categories,i=(0,a.useState)({}),o=i[0],s=i[1];return 60===t&&n(o),(0,d.jsx)(E,{children:(0,d.jsxs)("form",{children:[(0,d.jsx)(T,{children:r.map((function(e){return(0,d.jsxs)("span",{children:[(0,d.jsx)("label",{style:{display:"none"},htmlFor:e,children:"".concat(e,":")}),(0,d.jsx)(l,{placeholder:e,maxLength:"30",name:e,type:"text",onChange:function(n){s(Object.assign({},o,(0,S.Z)({},e,n.target.value)))}})]},e)}))}),(0,d.jsx)(u,{style:{background:"red"},onClick:function(e){e.preventDefault(),n(o)},children:"\ud83d\ude8c Stop the Bus"})]})})},G=t(29),A=t(6687),R=t(7794),D=t.n(R),F=t(7460),B=t.n(F);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,S.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Y(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return H(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return H(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(s)throw a}}}}function H(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var M,V=o.ZP.div.withConfig({displayName:"ResultsTable__TableContainer",componentId:"sc-1lg56mx-0"})(["display:flex;flex-wrap:wrap;justify-content:space-around;"]),q=o.ZP.div.withConfig({displayName:"ResultsTable__Container",componentId:"sc-1lg56mx-1"})(["padding:20px 0;display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;"]),J=o.ZP.div.withConfig({displayName:"ResultsTable__Paper",componentId:"sc-1lg56mx-2"})(["background:white;background-size:100% 1.2em;height:auto;margin:0 auto;margin-top:30px;box-shadow:#9e9e9e63 6px 7px 14px 0px;width:250px;padding:30px 30px 30px 30px;background-image:linear-gradient(90deg,transparent 49px,transparent 49px,transparent 51px,transparent 51px),linear-gradient(#eee .1em,transparent .1em);"]),U=o.ZP.span.withConfig({displayName:"ResultsTable__Submission",componentId:"sc-1lg56mx-3"})(["color:",";word-break:break-all;"],c.colors.blue),X=o.ZP.button.withConfig({displayName:"ResultsTable__StyledIncrementButton",componentId:"sc-1lg56mx-4"})(["font-weight:bold;font-size:14px;border:",";color:",";cursor:",";"],(function(e){return e.disabled?"1px solid gray":"1px solid black"}),(function(e){return e.disabled?"gray":"black"}),(function(e){return e.disabled?"not-allowed":"pointer"})),$=o.ZP.div.withConfig({displayName:"ResultsTable__InputContainer",componentId:"sc-1lg56mx-5"})(["margin-left:15px;font-size:1.5em;display:flex;align-items:center;width:80px;justify-content:space-between;"]),K=o.ZP.div.withConfig({displayName:"ResultsTable__NumberContainer",componentId:"sc-1lg56mx-6"})(["margin-left:15px;font-size:1.5em;display:flex;align-items:center;width:80px;justify-content:center;"]),Q=function(e,n,t,r){var i=n.find((function(e){return e.id===t})),a=i.responses[r][e]?i.responses[r][e].toLowerCase().trim():null,o=!1,s=null;return n.filter((function(e){return e.id!==t})).forEach((function(n){var t=n.responses[r][e]?n.responses[r][e].toLowerCase().trim():null;a&&t&&a===t&&(o=!0,s=n.name)})),{value:o,name:s}},ee=function(e){var n=e.value,t=e.currentScore,r=e.setCurrentScore,i=e.category,o=(0,a.useState)(n),s=o[0],c=o[1];(0,a.useEffect)((function(){r(Object.assign({},t,(0,S.Z)({},i,n)))}),[]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(X,{disabled:0===s,onClick:function(){return r(Object.assign({},t,(0,S.Z)({},i,s-5))),void(s<=0||c(s-5))},children:"-"}),s,(0,d.jsx)(X,{disabled:10===s,onClick:function(){return r(Object.assign({},t,(0,S.Z)({},i,s+5))),void(s>=10||c(s+5))},children:"+"})]})},ne=function(e,n){var t=e.findIndex((function(e){return e.id===n}));if(-1!=t){var r=e.splice(t,1)[0];return e.unshift(r),e}return e},te=function(e){var n=e.gameState,t=e.round,r=e.handleSubmitScore,i=e.scoreSubmitted,o=e.scorePartner,s={},l=(0,a.useState)({}),m=l[0],f=l[1],h=(0,a.useState)(!0),g=h[0],j=h[1],v=n.categories,w=n.currentAlphabet,C="cross"===n.scoringType?o.id:y.id,k=ne((0,A.Z)(n.users),C);k.forEach((function(e){v.forEach((function(n){var r=Q(n,k,e.id,t);e.id===C&&r.value&&(s=Object.assign({},s,(0,S.Z)({},n,5)))}))}));var _=(0,a.useState)(s),P=_[0],N=_[1],O=function(){var e=(0,G.Z)(D().mark((function e(n){var t,r,i,a,o;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return t=e.sent,r=t.body.getReader(),e.next=7,r.read();case 7:return i=e.sent,a=new TextDecoder("utf-8"),o=a.decode(i.value),e.abrupt("return",new Promise((function(e,n){B().parse(o,{complete:function(n){e(n.data.map((function(e){return e[0]})))},error:n})})));case 13:throw e.prev=13,e.t0=e.catch(0),console.error("Error parsing CSV from ".concat(n,":"),e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){"ai"===n.scoringType&&I()}),[n,t]);var I=function(){var e=(0,G.Z)(D().mark((function e(){var r,i,a,o,s,c,d,l,u;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={},i=Y(v),e.prev=2,i.s();case 4:if((a=i.n()).done){e.next=29;break}o=a.value,s=Y(n.users),e.prev=7,s.s();case 9:if((c=s.n()).done){e.next=19;break}if(d=c.value,!(l=d.responses[t][o])){e.next=17;break}return e.next=15,Z(o,l);case 15:u=e.sent,r[d.id]=W(W({},r[d.id]||{}),{},(0,S.Z)({},o,u));case 17:e.next=9;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),s.e(e.t0);case 24:return e.prev=24,s.f(),e.finish(24);case 27:e.next=4;break;case 29:e.next=34;break;case 31:e.prev=31,e.t1=e.catch(2),i.e(e.t1);case 34:return e.prev=34,i.f(),e.finish(34);case 37:f(r),j(!1);case 39:case"end":return e.stop()}}),e,null,[[2,31,34,37],[7,21,24,27]])})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=(0,G.Z)(D().mark((function e(n,t,r){var i,a,o,s,c;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=t.toLowerCase().trim(),e.next=4,O("/csv/".concat(n,".csv"));case 4:if(a=e.sent,o=new Set(a.map((function(e){return e.toLowerCase().trim()}))),s=!1,c=!1,o.forEach((function(e){i===e?s=!0:(i.includes(e)||e.includes(i))&&(c=!0)})),i.startsWith(w.toLowerCase())){e.next=12;break}return console.log("'".concat(i,"' does not start with the round letter '").concat(w,"'.")),e.abrupt("return",-3);case 12:if(1!==i.length){e.next=17;break}return console.log("'".concat(i,"' is only one letter.")),e.abrupt("return",0);case 17:if(!s){e.next=22;break}return console.log("'".concat(i,"' is an exact match in ").concat(n,".")),e.abrupt("return",10);case 22:if(!c){e.next=27;break}return console.log("'".concat(i,"' is a similar match in ").concat(n,".")),e.abrupt("return",5);case 27:console.log("'".concat(i,"' is not found in the ").concat(n," set."));case 28:return e.abrupt("return",0);case 31:return e.prev=31,e.t0=e.catch(0),console.error("Error checking answer:",e.t0),e.abrupt("return",0);case 35:case"end":return e.stop()}}),e,null,[[0,31]])})));return function(n,t,r){return e.apply(this,arguments)}}(),T=function(e){return Object.keys(e).map((function(n){return e[n]})).reduce((function(e,n){return e+n}),0)},E=0;return"ai"===n.scoringType&&(E=(E=n.users.reduce((function(e,n){return e+T(m[n.id]||{})}),0))<0?0:E),g?(0,d.jsx)(b,{}):(0,d.jsxs)(d.Fragment,{children:["ai"===n.scoringType?(0,d.jsx)(V,{children:n.users.map((function(e){return(0,d.jsxs)(J,{children:[(0,d.jsx)("h2",{children:e.name}),n.categories.map((function(n){return(0,d.jsxs)("div",{children:[n,": ",(0,d.jsx)(U,{children:e.responses[t][n]||"-"}),(0,d.jsxs)("span",{children:[" Score: ",m[e.id]&&m[e.id][n]]})]},n)})),(0,d.jsxs)("h3",{children:["Total Score: ",Object.values(m[e.id]||{}).reduce((function(e,n){return e+n}),0)]})]},e.id)}))}):(0,d.jsxs)(d.Fragment,{children:["cross"===n.scoringType&&(0,d.jsx)(p,{children:(0,d.jsxs)("h1",{children:["You are scoring for ",(0,d.jsx)(U,{children:o.name}),"!"]})}),(0,d.jsx)(V,{children:k.map((function(e){return(0,d.jsxs)(J,{children:[(0,d.jsxs)("h2",{style:{display:"flex",justifyContent:"space-between"},children:[(0,d.jsx)("span",{children:e.name}),e.id===C&&(0,d.jsx)("span",{children:"Score"})]}),v.map((function(n){var r=Q(n,k,e.id,t),i=e.id===C;return(0,d.jsxs)(a.Fragment,{children:[!(!r.value||!i)&&(0,d.jsxs)("span",{style:{color:c.colors.red},children:[o.name||"You"," and ",r.name," put down the same word for ",n]}),(0,d.jsxs)("div",{style:{marginBottom:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsxs)("div",{style:{width:i?"150px":"auto",fontSize:"1.2em"},children:[n,":","  "," ",(0,d.jsx)(U,{children:e.responses[t][n]||"-"})]}),i?e.responses[t][n]?(0,d.jsxs)($,{children:[(0,d.jsx)(ee,{category:n,setCurrentScore:N,currentScore:P,value:r.value?5:0})," "]}):(0,d.jsx)(K,{children:"0"}):""]},n)]},n)})),e.id===C&&(0,d.jsx)("h2",{children:"Total Score: ".concat(T(P))})]},e.id)}))})]}),(0,d.jsx)(q,{children:i?(0,d.jsxs)(x,{children:[(0,d.jsx)("h2",{children:"Waiting for others"}),(0,d.jsx)(b,{})]}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(u,{onClick:function(e){e.preventDefault(),r(E,C)},children:"Go Next!"})})})]})},re=o.ZP.div.withConfig({displayName:"ScoreTable__Container",componentId:"sc-zc1nx8-0"})(["display:flex;flex-wrap:wrap;justify-content:space-around;text-align:center;font-size:1.5em;max-height:80vh;margin:auto;padding:20px;background:rgba(255,255,255,0.8);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);overflow-y:auto;"]),ie=function(e){var n=e.maxRounds,t=e.gameState,r=e.round,i=e.handleStartNextRound,o=(0,a.useState)(!1),s=o[0],c=o[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(re,{children:t.users.map((function(e){return(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:e.name}),(0,d.jsx)("p",{children:e.scores[r]})]},e.id)}))}),(0,d.jsx)(p,{children:s?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(x,{children:[(0,d.jsx)("h2",{children:"Waiting for others"}),(0,d.jsx)(b,{})]})}):(0,d.jsx)(u,{onClick:function(){c(!0),i()},children:r===n?"See Final Scores \ud83e\udd29":"Start Next Round"})})]})},ae=t(6485),oe=t.n(ae),se=o.ZP.div.withConfig({displayName:"PlayerList__Container",componentId:"sc-18fb6rp-0"})(["text-align:center;color:",""],c.colors.red),ce=(0,o.F4)(["from{transform:rotate(-2deg);}to{transform:rotate(8deg);}"]),de=o.ZP.button.withConfig({displayName:"PlayerList__CopyButton",componentId:"sc-18fb6rp-1"})(["margin:5px;margin-left:10px;padding:5px 10px;font-size:20px;color:white;border:none;cursor:",";background-color:",";font-family:",";"],(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"grey":c.colors.blue}),c.font),le=o.ZP.span.withConfig({displayName:"PlayerList__GameCode",componentId:"sc-18fb6rp-2"})(["color:",";font-weight:bold;font-size:1.5em;"],c.colors.red),ue=o.ZP.div.withConfig({displayName:"PlayerList__UserContainer",componentId:"sc-18fb6rp-3"})(["display:flex;animation:"," 1s cubic-bezier(1,-1,0,2) infinite;flex-direction:column;align-items:center;margin:0 20px;color:black;"],(function(e){return!e.gameStarted&&ce})),pe=function(e){var n=e.users,t=e.gameStarted,r=e.code,i=t?30:60,o=i,c=(0,a.useState)("Copy"),l=c[0],u=c[1];return(0,d.jsxs)(d.Fragment,{children:[!t&&(0,d.jsx)("div",{style:{textAlign:"center",padding:"20px 20px 20px 20px"},children:(0,d.jsxs)("div",{style:{padding:"10px"},children:["Your Game Code is:",(0,d.jsxs)("div",{children:[(0,d.jsxs)(le,{children:[" ",r]}),(0,d.jsx)(de,{disabled:"Copied!"===l,onClick:function(){oe()(r).then((function(){return u("Copied!")}))},children:l})]}),"Send it to your friends to start the game!"]})}),(0,d.jsxs)(se,{children:[!t&&(0,d.jsx)("h1",{children:"Who's Playing?"}),(0,d.jsx)(p,{children:n.map((function(e,n){return(0,d.jsxs)(ue,{gameStarted:t,children:[(0,d.jsx)("img",{alt:"".concat(e.name," avatar"),width:i,height:o,src:s[e.avatarIndex||n]}),t&&(0,d.jsx)("h4",{children:e.name}),!t&&(0,d.jsx)("h2",{children:e.name})]},e.id)}))})]})]})},xe=o.ZP.div.withConfig({displayName:"GameHeader__Container",componentId:"sc-1k9cj4g-0"})(["width:100%;display:flex;flex-direction:row;justify-content:space-around;font-size:15px;@media(max-width:500px){}"]),me=o.ZP.span.withConfig({displayName:"GameHeader__TimerValue",componentId:"sc-1k9cj4g-1"})(["position:relative;top:48px;"]),fe=o.ZP.div.withConfig({displayName:"GameHeader__TimerContainer",componentId:"sc-1k9cj4g-2"})(["background-image:url('/assets/timer.png');height:100px;background-size:100px;width:100px;text-align:center;font-size:1.3em;"]),he=o.ZP.div.withConfig({displayName:"GameHeader__RoundContainer",componentId:"sc-1k9cj4g-3"})(["font-size:1.8em;position:relative;top:30px;@media(max-width:500px){font-size:1em;}display:flex;flex-direction:column;"]),ge=o.ZP.span.withConfig({displayName:"GameHeader__BoldContent",componentId:"sc-1k9cj4g-4"})(["color:red;font-weight:bold;font-size:1.2em;"]),be=o.ZP.div.withConfig({displayName:"GameHeader__HelpIcon",componentId:"sc-1k9cj4g-5"})(["position:fixed;bottom:70px;right:20px;width:40px;height:40px;background-color:#007bff;color:white;border-radius:50%;text-align:center;line-height:40px;font-size:20px;cursor:pointer;box-shadow:0 2px 4px rgba(0,0,0,0.2);"]),je=function(e){var n=e.play();void 0!==n&&n.then((function(e){})).catch((function(e){console.info(e)}))},ye=function(e){var n=e.pause();void 0!==n&&n.then((function(n){e.load()})).catch((function(e){console.info(e)}))},ve=function(e){var n=e.roundNumber,t=e.timerValue,r=e.currentAlphabet,i=e.maxRounds,o=e.soundOn;return(0,a.useEffect)((function(){return(M=new Audio("/assets/audio/ticking-timer.wav")).load(),function(){ye(M)}}),[]),M&&49===t&&o&&je(M),o&&60!==t||ye(M),(0,d.jsxs)(xe,{children:[(0,d.jsxs)(he,{children:[(0,d.jsxs)("span",{children:["Round ",(0,d.jsx)(ge,{children:"#".concat(n,"/").concat(i)})]}),(0,d.jsxs)("span",{children:["Current Alphabet: ",(0,d.jsx)(ge,{children:r||"Not Selected"})]})]}),(0,d.jsx)(fe,{children:(0,d.jsx)(me,{children:t})})]})},we=function(e){var n=e.scores,t=e.handleRestartGame,r={score:0};return n.forEach((function(e){e.score>r.score&&(r={score:e.score,name:e.name})})),(0,d.jsxs)(x,{children:[(0,d.jsx)("h2",{children:"Final Scores"}),(0,d.jsx)(p,{children:n.map((function(e){return(0,d.jsxs)("div",{style:{margin:"0 20px",textAlign:"center"},children:[(0,d.jsx)("img",{alt:"".concat(e.name," avatar"),src:s[e.avatarId],width:60,height:60}),(0,d.jsxs)("p",{children:[e.name,": ",e.score]})]},e.name)}))}),(0,d.jsx)("h2",{style:{textAlign:"center"},children:"\ud83c\udf89\ud83c\udf89 The winner is: ".concat(r.name||"No winner!"," \ud83c\udf89\ud83c\udf89")}),(0,d.jsx)(u,{fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(e){e.preventDefault(),t(e)},children:"Play Again"})]})},Ce=function(e){var n=e.handleStartGame,t=e.isAdmin;return(0,d.jsx)(p,{children:t?(0,d.jsx)(u,{onClick:function(e){e.preventDefault(),n()},children:"Start Game"}):(0,d.jsxs)(x,{children:[(0,d.jsx)("h3",{children:"Waiting for admin to start the game.."}),(0,d.jsx)(b,{})]})})},Se=o.ZP.div.withConfig({displayName:"Play__Container",componentId:"sc-q76vgx-0"})(["font-family:",";padding-top:80px;"],c.font),ke=function(e){var n=e.gameData,t=e.setGamePlaying,r=e.soundOn,i=(0,a.useState)([]),o=i[0],s=i[1],c=(0,a.useState)(""),l=c[0],u=c[1],x=(0,a.useState)(1),m=x[0],f=x[1],j=(0,a.useState)(!1),v=j[0],w=j[1],C=(0,a.useState)(!1),S=C[0],k=C[1],_=(0,a.useState)(!1),P=_[0],N=_[1],O=(0,a.useState)(!1),I=O[0],Z=O[1],T=(0,a.useState)(""),E=T[0],G=T[1],A=(0,a.useState)({}),R=A[0],D=A[1],F=(0,a.useState)(!1),B=F[0],L=F[1],W=(0,a.useState)(0),Y=W[0],H=W[1],M=(0,a.useState)(!1),V=M[0],q=M[1],J=(0,a.useState)(!1),U=J[0],X=J[1],$=(0,a.useState)([]),K=$[0],Q=$[1],ee=(0,a.useState)(0),ne=ee[0],re=ee[1],ae=(0,a.useState)([]),oe=ae[0],se=ae[1],ce=(0,a.useState)(n.isAdmin),de=ce[0],le=ce[1],ue=(0,a.useState)({}),xe=ue[0],me=ue[1];(0,a.useEffect)((function(){var e=n.code,t=n.users,r=n.maxRounds,i=n.categories;s(t),u(e),re(Number(r)),se(i)}),[n]),(0,a.useEffect)((function(){y.on("restartGame",(function(){Q([]),X(!1)})),y.on("gameData",(function(e){var n=e.users;s(n)})),y.on("allSubmitted",(function(e){var n=e.gameState,t=e.scorePartners;D(Object.assign({},n)),t.forEach((function(e){e[0].id===y.id&&me(e[1])})),Z(!0)})),y.on("allScoresSubmitted",(function(e){var n=e.gameState;D(Object.assign({},n)),N(!0)})),y.on("allPlayersReady",(function(e){var n=e.gameState;q(!0),D(Object.assign({},n)),f(n.currentRound),w(!1),Z(!1),N(!1),k(!1),H(0),G(n.currentAlphabet),q(!1)})),y.on("gameStarted",(function(e){var n=e.gameState;L(n.started),G(n.currentAlphabet)})),y.on("gameEnded",(function(e){var n=e.scores,t=e.gameState;q(!0),D(Object.assign({},t)),f(1),w(!1),Z(!1),N(!1),k(!1),H(0),G(""),X(!0),L(!1),q(!1),s(t.users),le(!1),Q(n)})),y.on("timerValue",(function(e){var n=e.timer;H(n)}))}),[]);var fe=function(e){y.emit("sendResponse",{code:l,response:e,round:m},(function(){w(!0),y.emit("stopTimer",{code:l})}))},he=function(e,n){var t;t=e||0,y.emit("sendScore",{id:n,code:l,score:t,round:m},(function(e){var n=e.error,t=e.gameState;n?alert(n):t&&k(!0)}))},ge=function(){y.emit("startGame",{code:l},(function(e){e&&(L(e.started),q(!1))}))},be=function(e){e.preventDefault(),L(!1),y.emit("restartGame",{code:l},(function(){Q([]),X(!1),le(!0)}))},je=function(){y.emit("playerReady",{code:l,round:m},(function(e){e.gameState}))};return(0,d.jsxs)(Se,{children:[(0,d.jsx)(h,{children:(0,d.jsx)(g,{onClick:function(){y.emit("removeUserFromGame",{code:l},(function(){t(!1)}))},children:"X"})}),!U&&(0,d.jsx)(pe,{code:l,gameStarted:B||U,users:o}),V?(0,d.jsx)(p,{children:(0,d.jsx)(b,{})}):U?(0,d.jsx)(we,{handleRestartGame:be,scores:K}):B?P?(0,d.jsx)(ie,{maxRounds:ne,handleStartNextRound:je,round:m,gameState:R}):v&&!I?(0,d.jsx)(p,{children:(0,d.jsx)(b,{})}):I?(0,d.jsx)(te,{scorePartner:xe,scoreSubmitted:S,handleSubmitScore:he,round:m,gameState:R}):(0,d.jsxs)(d.Fragment,{children:[!!B&&(0,d.jsx)(ve,{soundOn:r,maxRounds:ne,timerValue:Y,roundNumber:m,currentAlphabet:E}),(0,d.jsx)(z,{categories:oe,timerValue:Y,sendResponse:fe})]}):(0,d.jsx)(Ce,{handleStartGame:ge,isAdmin:de})]})},_e=o.ZP.h1.withConfig({displayName:"Instructions__InstructionHeader",componentId:"sc-1tf3zcb-0"})(["color:",""],c.colors.red),Pe=o.ZP.div.withConfig({displayName:"Instructions__PaddedContainer",componentId:"sc-1tf3zcb-1"})(["padding:0 50px 0 50px;"]),Ne=function(e){var n=e.cancel;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{children:(0,d.jsx)(g,{onClick:function(){return n()},children:"X"})}),(0,d.jsxs)("div",{children:[(0,d.jsxs)(Pe,{children:[(0,d.jsx)(_e,{children:"How To Play"}),(0,d.jsxs)("h3",{children:["The game is simple. The game creator sets the number of rounds and chooses the word categories.",(0,d.jsx)("br",{}),"The game is player over a couple of rounds. At the beginning of every round, players get a new alphabet. Your job is to think of words that begin with that letter and fit the categories in the game."]}),(0,d.jsx)("h3",{children:"Each game round is timed at 60 seconds, but the game alsos end as soon as the first person submits their response. Think fast!"})]}),(0,d.jsxs)(Pe,{children:[(0,d.jsx)(_e,{children:"Creating A Game and Game Setup"}),(0,d.jsx)("h3",{children:'Head on over to the "Create New Game" section on the previous page to create a new game. You will be able to specify the number of rounds you would like to play as well as any additional categories you would want to include besides, "Name", "Place", "Animal" and "Thing".'}),(0,d.jsx)("h3",{children:'You can also define "scoring mechanics". Select "Score Yourself" if you want people to score themselves, or select "Score Each Other" to score your friends. '}),(0,d.jsx)("h3",{children:'Once you have created the game, you will get a "Game Code". Create the room and send the Game Code to your friends who will be able to use it join the room. Once your friends have joined, the creator will be able to start the game!'})]}),(0,d.jsxs)(Pe,{children:[(0,d.jsx)(_e,{children:"Scoring Rules"}),(0,d.jsxs)("h3",{children:["Scoring Rules are simple:",(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"+10 points for each unique answer"}),(0,d.jsx)("li",{children:"+5 points for each non-unique answer"}),(0,d.jsx)("li",{children:"+0 points for no answer"})]})]})]}),(0,d.jsx)("div",{style:{textAlign:"center",margin:"20px"},children:(0,d.jsx)(u,{fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(e){e.preventDefault(),n(!1)},children:"Understood, Let's Go!"})})]})]})},Oe=function(){var e=(0,a.useState)(!1),n=e[0],t=e[1],r=(0,a.useState)(!1),i=r[0],o=r[1],s=(0,a.useState)(!1),c=s[0],l=s[1],u=(0,a.useState)(!1),p=u[0],x=u[1],m=(0,a.useState)({}),f=m[0],h=m[1],g=(0,a.useState)(!0),b=g[0];g[1];return(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[(0,d.jsx)("div",{className:"card text-dark mb-3",style:{backgroundColor:"rgba(255, 255, 255, 0.9)"},children:(0,d.jsx)("div",{className:"card-body",children:p?(0,d.jsx)(ke,{soundOn:b,setGamePlaying:x,gameData:f}):c?(0,d.jsx)(Ne,{cancel:function(){return l(!1)}}):(0,d.jsxs)(d.Fragment,{children:[!n&&!i&&(0,d.jsxs)("div",{className:"button-container d-flex flex-row justify-content-center",children:[(0,d.jsx)("button",{className:"btn btn-success my-3 mx-2",onClick:function(){t(!0),o(!1)},children:"Join Existing Game"}),(0,d.jsx)("button",{className:"btn btn-danger my-3 mx-2",onClick:function(){t(!1),o(!0)},children:"Create New Game"})]}),n&&(0,d.jsx)(C,{cancel:t,setGamePlaying:x,setGameData:h}),i&&(0,d.jsx)(Z,{setGamePlaying:x,setGameData:h,cancel:o})]})})}),(0,d.jsx)(be,{onClick:function(){return l(!0)},children:"?"})]})})};function Ie(){return(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)(i(),{children:[(0,d.jsx)("title",{children:"Zookilla! | Online Multiplayer Game"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,d.jsx)("link",{rel:"icon",href:"https://zookilla.com/favicon.ico"})]}),(0,d.jsx)("main",{children:(0,d.jsx)(Oe,{})})]})}},5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6057)}])},7020:function(){}},function(e){e.O(0,[875,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);