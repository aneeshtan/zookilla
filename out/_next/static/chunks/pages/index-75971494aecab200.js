(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6057:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ne}});var r=t(9008),i=t.n(r),a=t(7294),o=t(9521),s={1:"/assets/avatars/001.svg",2:"/assets/avatars/002.svg",3:"/assets/avatars/003.svg",4:"/assets/avatars/004.svg",5:"/assets/avatars/005.svg",6:"/assets/avatars/006.svg",7:"/assets/avatars/007.svg",8:"/assets/avatars/008.svg",9:"/assets/avatars/009.svg",10:"/assets/avatars/010.svg"},c={backgroundColor:"pink",buttonBlue:"#24A0ED",colors:{peach:"#fe6f5e",mustard:"#ffcc33",lime:"#afe313",aqua:"#95e0e8",purple:"#7070cc",red:"red",blue:"#24A0ED"}},d=t(5893),l=o.ZP.input.withConfig({displayName:"StyledComponents__StyledInput",componentId:"sc-162mbyu-0"})(["font-family:",";margin:10px;padding:10px;max-width:100px;min-width:",";border:1px solid black;font-size:1.2em;"],c.font,(function(e){return e.minWidth||"80px"})),u=o.ZP.button.withConfig({displayName:"StyledComponents__Button",componentId:"sc-162mbyu-1"})(["padding:",";margin:5px;min-width:",";font-size:",";color:white;border:none;background-color:",";font-family:",";cursor:",";"],(function(e){return e.padding||"10px 5px"}),(function(e){return e.minWidth||"150px"}),(function(e){return e.fontSize||"15px"}),(function(e){return e.disabled?"grey":c.colors.blue}),c.font,(function(e){return e.disabled?"not-allowed":"pointer"})),p=o.ZP.div.withConfig({displayName:"StyledComponents__FlexContainer",componentId:"sc-162mbyu-2"})(["display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;"]),m=o.ZP.div.withConfig({displayName:"StyledComponents__FlexColumn",componentId:"sc-162mbyu-3"})(["display:flex;flex-direction:column;align-items:center;"]),x=(0,o.F4)(["0%{transform:rotateZ(0);}100%{transform:rotateZ(360deg);}"]),h=o.ZP.div.withConfig({displayName:"StyledComponents__SpinContainer",componentId:"sc-162mbyu-4"})(["height:50px;width:50px;animation:"," 1.4s linear infinite;"],x),f=o.ZP.div.withConfig({displayName:"StyledComponents__ExitButtonContainer",componentId:"sc-162mbyu-5"})(["position:fixed;top:0;right:0;margin:20px;"]),g=o.ZP.button.withConfig({displayName:"StyledComponents__ExitButton",componentId:"sc-162mbyu-6"})(["font-size:15px;color:",";padding:5px;cursor:pointer;width:40px;height:40px;border:1px solid ",";box-shadow:"," 2px 2px 0px 0px;border-radius:20px;font-family:'Schoolbell',cursive;"],c.colors.red,c.colors.red,c.colors.red),b=(o.ZP.div.withConfig({displayName:"StyledComponents__SoundButtonContainer",componentId:"sc-162mbyu-7"})(["position:fixed;top:0;left:0;margin:20px;z-index:9999;"]),o.ZP.button.withConfig({displayName:"StyledComponents__SoundButton",componentId:"sc-162mbyu-8"})(["font-size:15px;color:",";padding:5px;cursor:pointer;width:40px;height:40px;border:1px solid ",";box-shadow:"," 2px 2px 0px 0px;border-radius:20px;font-family:'Schoolbell',cursive;display:flex;"],c.colors.red,c.colors.red,c.colors.red),function(){return(0,d.jsx)(h,{children:(0,d.jsx)("img",{alt:"loading spinner",src:"/assets/spinner.svg"})})}),j=(0,t(3920).ZP)("https://name-place-animal-thing-server-60a49bfac610.herokuapp.com/"),v=o.ZP.div.withConfig({displayName:"Join__FormContainer",componentId:"sc-run06t-0"})(["padding:20px;display:flex;flex-direction:column;text-align:center;"]),y=o.ZP.p.withConfig({displayName:"Join__FormItem",componentId:"sc-run06t-1"})([""]),w=function(e){var n=e.cancel,t=e.setGameData,r=e.setGamePlaying,i=(0,a.useState)(""),o=i[0],s=i[1],c=(0,a.useState)(""),p=c[0],m=c[1],x={name:o,code:p,isAdmin:!1};return(0,d.jsx)(v,{children:(0,d.jsxs)("form",{children:[(0,d.jsxs)(y,{children:[(0,d.jsx)("label",{htmlFor:"name",children:"Your Name:"}),(0,d.jsx)(l,{maxLength:"15",name:"name",type:"text",onChange:function(e){return s(e.target.value)}})]}),(0,d.jsxs)(y,{children:[(0,d.jsx)("label",{htmlFor:"code",children:"Room Code:"}),(0,d.jsx)(l,{name:"code",maxLength:"20",type:"text",onChange:function(e){return m(e.target.value)}})]}),(0,d.jsx)(u,{fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(e){return function(e){e.preventDefault(),j.emit("join",{name:o,code:p},(function(e){var n=e.error,i=e.users,a=e.maxRounds,o=e.categories;n?alert(n):(x.maxRounds=a,x.users=i,x.categories=o,t(x),r(!0))}))}(e)},children:"Join Your Friends!"}),(0,d.jsx)(u,{fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(){return n()},type:"submit",children:"Cancel"})]})})},S=(t(4816),o.ZP.div.withConfig({displayName:"Create__FormContainer",componentId:"sc-1xf6e0b-0"})(["max-width:500px;max-height:80vh;margin:auto;padding:20px;background:rgba(255,255,255,0.8);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);overflow-y:auto;"])),C=o.ZP.select.withConfig({displayName:"Create__MultiSelect",componentId:"sc-1xf6e0b-1"})(["width:100%;padding:10px;margin:10px 0;border-radius:5px;border:1px solid #ccc;background-color:white;box-sizing:border-box;height:150px;overflow-y:auto;"]),_=o.ZP.select.withConfig({displayName:"Create__Select",componentId:"sc-1xf6e0b-2"})(["width:100%;padding:10px;margin:10px 0;border-radius:5px;border:1px solid #ccc;background-color:white;box-sizing:border-box;"]),k=o.ZP.div.withConfig({displayName:"Create__CheckBoxContainer",componentId:"sc-1xf6e0b-3"})(["margin:0 20px 20px 0;"]),P=function(e,n){var t=!1;return e.forEach((function(e){n[e]&&(t=!0)})),t},N=function(e){var n=e.cancel,t=e.setGameData,r=e.setGamePlaying,i=(0,a.useState)(""),o=i[0],s=i[1],c=(0,a.useState)("5"),x=c[0],h=c[1],f=(0,a.useState)("ai"),g=f[0],b=f[1],v=(0,a.useState)({Name:!0,Place:!0,Animal:!0,Thing:!0,Songs:!1,Movies:!1,"TV shows":!1,Fruits:!1,Books:!1,Celebrities:!1,Musicians:!1,Instruments:!1}),y=v[0],w=v[1];(0,a.useEffect)((function(){"Monzo"===o&&w(Object.assign({},y,{"Office Dog Breeds":!1,"Meeting Rooms":!1,"Badge Types":!1,"Activity Types":!1,Engineers:!1,"Data Scientists":!1}))}),[o]);var N=Object.keys(y),I={name:o,isAdmin:!0},Z=!o||!P(N,y),O=(0,a.useState)([]),T=O[0],z=O[1];return(0,a.useEffect)((function(){var e=Object.keys(y).filter((function(e){return y[e]}));z(e)}),[]),(0,d.jsx)(S,{children:(0,d.jsxs)("form",{children:[(0,d.jsxs)(m,{children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("label",{htmlFor:"name",children:"Your Name:"}),(0,d.jsx)(l,{maxLength:"15",name:"name",type:"text",onChange:function(e){return s(e.target.value)}})]}),(0,d.jsx)("h4",{children:"Number of rounds:"}),(0,d.jsx)(p,{children:["5","7","10"].map((function(e){return(0,d.jsxs)(k,{children:[(0,d.jsx)("input",{type:"radio",id:e,name:"rounds",value:e,onChange:function(e){return h(e.target.value)},checked:x===e}),(0,d.jsx)("label",{htmlFor:e,children:e})]},e)}))}),(0,d.jsx)("h4",{children:"Select Topics:"}),(0,d.jsx)(p,{style:{maxWidth:"450px"},children:(0,d.jsx)(C,{multiple:!0,value:T,onChange:function(e){var n=Array.from(e.target.selectedOptions,(function(e){return e.value}));z(n)},children:Object.keys(y).map((function(e){return(0,d.jsx)("option",{value:e,children:e},e)}))})}),(0,d.jsx)(p,{children:(0,d.jsxs)(_,{value:g,onChange:function(e){return b(e.target.value)},children:[(0,d.jsx)("option",{value:"cross",children:"Score Each Other"}),(0,d.jsx)("option",{value:"self",children:"Score Yourself"}),(0,d.jsx)("option",{value:"ai",children:"Score by AI"})]})}),(0,d.jsx)(u,{disabled:Z,fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(e){e.preventDefault(),function(e){var n=[];N.forEach((function(e){y[e]&&n.push(e)})),j.emit("create",{name:o,code:e,rounds:x,categories:n,scoringType:g},(function(i){var a=i.error,o=i.users;a?alert(a):(I.code=e,I.users=o,I.maxRounds=Number(x),I.categories=n,t(I),r(!0))}))}(function(e){for(var n="",t=0;t<e;t++)n+=Math.floor(10*Math.random());return n}(4))},children:"Create Room"})]}),(0,d.jsx)(u,{fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(){return n()},children:"Cancel"})]})})},I=t(9499),Z=o.ZP.div.withConfig({displayName:"InputTable__TableContainer",componentId:"sc-ia4ov4-0"})(["display:flex;flex-wrap:wrap;justify-content:space-around;@media (max-width:768px){width:min-content;}"]),O=o.ZP.div.withConfig({displayName:"InputTable__Paper",componentId:"sc-ia4ov4-1"})(["background:white;background-image:linear-gradient(90deg,transparent 79px,#abced4 79px,#abced4 81px,transparent 81px),linear-gradient(#eee .1em,transparent .1em);background-size:100% 1.2em;width:480px;height:auto;padding:30px 30px 30px 110px;margin:0 auto;margin-top:50px;box-shadow:#9e9e9e70 11px 8px 12px;@media (max-width:768px){box-shadow:gray 0px 0px;width:180px;padding:30px 30px 30px 80px;background-image:linear-gradient(90deg,transparent 49px,#abced4 49px,#abced4 51px,transparent 51px),linear-gradient(#eee .1em,transparent .1em);}text-align:center;"]),T=function(e){var n=e.sendResponse,t=e.timerValue,r=e.categories,i=(0,a.useState)({}),o=i[0],s=i[1];return 60===t&&n(o),(0,d.jsx)(O,{children:(0,d.jsxs)("form",{children:[(0,d.jsx)(Z,{children:r.map((function(e){return(0,d.jsxs)("span",{children:[(0,d.jsx)("label",{style:{display:"none"},htmlFor:e,children:"".concat(e,":")}),(0,d.jsx)(l,{placeholder:e,maxLength:"30",name:e,type:"text",onChange:function(n){s(Object.assign({},o,(0,I.Z)({},e,n.target.value)))}})]},e)}))}),(0,d.jsx)(u,{style:{background:"red"},onClick:function(e){e.preventDefault(),n(o)},children:"\ud83d\ude8c Stop the Bus"})]})})},z=t(29),G=t(6687),E=t(7794),R=t.n(E),A=t(7460),F=t.n(A);function D(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return B(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(s)throw a}}}}function B(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(Object(t),!0).forEach((function(n){(0,I.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Y,H=o.ZP.div.withConfig({displayName:"ResultsTable__TableContainer",componentId:"sc-1lg56mx-0"})(["display:flex;flex-wrap:wrap;justify-content:space-around;"]),M=o.ZP.div.withConfig({displayName:"ResultsTable__Container",componentId:"sc-1lg56mx-1"})(["padding:20px 0;display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;"]),V=o.ZP.div.withConfig({displayName:"ResultsTable__Paper",componentId:"sc-1lg56mx-2"})(["background:white;background-size:100% 1.2em;height:auto;margin:0 auto;margin-top:30px;box-shadow:#9e9e9e63 6px 7px 14px 0px;width:250px;padding:30px 30px 30px 30px;background-image:linear-gradient(90deg,transparent 49px,transparent 49px,transparent 51px,transparent 51px),linear-gradient(#eee .1em,transparent .1em);"]),q=o.ZP.span.withConfig({displayName:"ResultsTable__Submission",componentId:"sc-1lg56mx-3"})(["color:",";word-break:break-all;"],c.colors.blue),J=o.ZP.button.withConfig({displayName:"ResultsTable__StyledIncrementButton",componentId:"sc-1lg56mx-4"})(["font-weight:bold;font-size:14px;border:",";color:",";cursor:",";"],(function(e){return e.disabled?"1px solid gray":"1px solid black"}),(function(e){return e.disabled?"gray":"black"}),(function(e){return e.disabled?"not-allowed":"pointer"})),U=o.ZP.div.withConfig({displayName:"ResultsTable__InputContainer",componentId:"sc-1lg56mx-5"})(["margin-left:15px;font-size:1.5em;display:flex;align-items:center;width:80px;justify-content:space-between;"]),X=o.ZP.div.withConfig({displayName:"ResultsTable__NumberContainer",componentId:"sc-1lg56mx-6"})(["margin-left:15px;font-size:1.5em;display:flex;align-items:center;width:80px;justify-content:center;"]),$=function(e,n,t,r){var i=n.find((function(e){return e.id===t})),a=i.responses[r][e]?i.responses[r][e].toLowerCase().trim():null,o=!1,s=null;return n.filter((function(e){return e.id!==t})).forEach((function(n){var t=n.responses[r][e]?n.responses[r][e].toLowerCase().trim():null;a&&t&&a===t&&(o=!0,s=n.name)})),{value:o,name:s}},K=function(e){var n=e.value,t=e.currentScore,r=e.setCurrentScore,i=e.category,o=(0,a.useState)(n),s=o[0],c=o[1];(0,a.useEffect)((function(){r(Object.assign({},t,(0,I.Z)({},i,n)))}),[]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(J,{disabled:0===s,onClick:function(){return r(Object.assign({},t,(0,I.Z)({},i,s-5))),void(s<=0||c(s-5))},children:"-"}),s,(0,d.jsx)(J,{disabled:10===s,onClick:function(){return r(Object.assign({},t,(0,I.Z)({},i,s+5))),void(s>=10||c(s+5))},children:"+"})]})},Q=function(e,n){var t=e.findIndex((function(e){return e.id===n}));if(-1!=t){var r=e.splice(t,1)[0];return e.unshift(r),e}return e},ee=function(e){var n=e.gameState,t=e.round,r=e.handleSubmitScore,i=e.scoreSubmitted,o=e.scorePartner,s={},l=(0,a.useState)({}),x=l[0],h=l[1],f=(0,a.useState)(!0),g=f[0],v=f[1],y=n.categories,w=n.currentAlphabet,S="cross"===n.scoringType?o.id:j.id,C=Q((0,G.Z)(n.users),S);C.forEach((function(e){y.forEach((function(n){var r=$(n,C,e.id,t);e.id===S&&r.value&&(s=Object.assign({},s,(0,I.Z)({},n,5)))}))}));var _=(0,a.useState)(s),k=_[0],P=_[1],N=(0,a.useState)((0,I.Z)({currentScore:s,animalsSet:new Set,namesSet:new Set,thingsSet:new Set,placesSet:new Set,booksSet:new Set,celebritiesSet:new Set,fruitsSet:new Set,instrumentsSet:new Set,moviesSet:new Set,musiciansSet:new Set,songsSet:new Set,tv_showsSet:new Set},"musiciansSet",new Set)),Z=N[0],O=N[1],T=function(){var e=(0,z.Z)(R().mark((function e(n){var t,r,i,a,o;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,r=t.body.getReader(),e.next=6,r.read();case 6:return i=e.sent,a=new TextDecoder("utf-8"),o=a.decode(i.value),e.abrupt("return",new Promise((function(e,n){F().parse(o,{complete:function(n){e(n.data.map((function(e){return e[0]})))},error:n})})));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){var e=["animals","places","names","things","books","songs","tv_shows","movies","instruments","musicians","fruits"].map((function(e){return T("/csv/".concat(e,".csv")).then((function(n){return(0,I.Z)({},"".concat(e,"Set"),new Set(n.map((function(e){return e.toLowerCase().trim()}))))}))}));Promise.all(e).then((function(e){var n=e.reduce((function(e,n){return L(L({},e),n)}),{});O((function(e){return L(L({},e),n)}))}))}),[]),(0,a.useEffect)((function(){"ai"===n.scoringType&&Z.animalsSet.size>0&&E()}),[n,t,Z.animalsSet,Z.namesSet,Z.thingsSet,Z.placesSet]);var E=function(){var e=(0,z.Z)(R().mark((function e(){var r,i,a,o,s,c,d,l,u;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==Z.animalsSet.size){e.next=3;break}return console.log("Waiting for animalsSet to be populated..."),e.abrupt("return");case 3:r={},i=D(y),e.prev=5,i.s();case 7:if((a=i.n()).done){e.next=32;break}o=a.value,s=D(n.users),e.prev=10,s.s();case 12:if((c=s.n()).done){e.next=22;break}if(d=c.value,!(l=d.responses[t][o])){e.next=20;break}return e.next=18,A(o,l);case 18:u=e.sent,r[d.id]=L(L({},r[d.id]||{}),{},(0,I.Z)({},o,u));case 20:e.next=12;break;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(10),s.e(e.t0);case 27:return e.prev=27,s.f(),e.finish(27);case 30:e.next=7;break;case 32:e.next=37;break;case 34:e.prev=34,e.t1=e.catch(5),i.e(e.t1);case 37:return e.prev=37,i.f(),e.finish(37);case 40:h(r),v(!1);case 42:case"end":return e.stop()}}),e,null,[[5,34,37,40],[10,24,27,30]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=(0,z.Z)(R().mark((function e(n,t,r){var i,a,o,s,c;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=t.toLowerCase().trim(),a={Animal:Z.animalsSet,Name:Z.namesSet,Thing:Z.thingsSet,Place:Z.placesSet,Songs:Z.songsSet,TV_shows:Z.tv_showsSet,Books:Z.booksSet,Celebrities:Z.celebritiesSet,Musicians:Z.musiciansSet,Instruments:Z.instrumentsSet},o=a[n]||new Set,s=!1,c=!1,o.forEach((function(e){i===e?s=!0:(i.includes(e)||e.includes(i))&&(c=!0)})),i.startsWith(w.toLowerCase())){e.next=10;break}return console.log("'".concat(i,"' does not start with the round letter '").concat(w,"'.")),e.abrupt("return",-3);case 10:if(1!==i.length){e.next=15;break}return console.log("'".concat(i,"' is only one letter.")),e.abrupt("return",0);case 15:if(!s){e.next=20;break}return console.log("'".concat(i,"' is an exact match in ").concat(n,".")),e.abrupt("return",10);case 20:if(!c){e.next=25;break}return console.log("'".concat(i,"' is a similar match in ").concat(n,".")),e.abrupt("return",5);case 25:console.log("'".concat(i,"' is not found in the ").concat(n," set."));case 26:return e.abrupt("return",0);case 29:return e.prev=29,e.t0=e.catch(0),console.error("Error checking answer:",e.t0),e.abrupt("return",0);case 33:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(n,t,r){return e.apply(this,arguments)}}(),B=function(e){return Object.keys(e).map((function(n){return e[n]})).reduce((function(e,n){return e+n}),0)},W=0;return"ai"===n.scoringType&&(W=(W=n.users.reduce((function(e,n){return e+B(x[n.id]||{})}),0))<0?0:W),g?(0,d.jsx)(b,{}):(0,d.jsxs)(d.Fragment,{children:["ai"===n.scoringType?(0,d.jsx)(H,{children:n.users.map((function(e){return(0,d.jsxs)(V,{children:[(0,d.jsx)("h2",{children:e.name}),n.categories.map((function(n){return(0,d.jsxs)("div",{children:[n,": ",(0,d.jsx)(q,{children:e.responses[t][n]||"-"}),(0,d.jsxs)("span",{children:[" Score: ",x[e.id]&&x[e.id][n]]})]},n)})),(0,d.jsxs)("h3",{style:{"text-align":"center"},children:["Total Score: ",Object.values(x[e.id]||{}).reduce((function(e,n){return e+n}),0)]})]},e.id)}))}):(0,d.jsxs)(d.Fragment,{children:["cross"===n.scoringType&&(0,d.jsx)(p,{children:(0,d.jsxs)("h1",{children:["You are scoring for ",(0,d.jsx)(q,{children:o.name}),"!"]})}),(0,d.jsx)(H,{children:C.map((function(e){return(0,d.jsxs)(V,{children:[(0,d.jsxs)("h2",{style:{display:"flex",justifyContent:"space-between"},children:[(0,d.jsx)("span",{children:e.name}),e.id===S&&(0,d.jsx)("span",{children:"Score"})]}),y.map((function(n){var r=$(n,C,e.id,t),i=e.id===S;return(0,d.jsxs)(a.Fragment,{children:[!(!r.value||!i)&&(0,d.jsxs)("span",{style:{color:c.colors.red},children:[o.name||"You"," and ",r.name," put down the same word for ",n]}),(0,d.jsxs)("div",{style:{marginBottom:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsxs)("div",{style:{width:i?"150px":"auto",fontSize:"1.2em"},children:[n,":","  "," ",(0,d.jsx)(q,{children:e.responses[t][n]||"-"})]}),i?e.responses[t][n]?(0,d.jsxs)(U,{children:[(0,d.jsx)(K,{category:n,setCurrentScore:P,currentScore:k,value:r.value?5:0})," "]}):(0,d.jsx)(X,{children:"0"}):""]},n)]},n)})),e.id===S&&(0,d.jsx)("h2",{children:"Total Score: ".concat(B(k))})]},e.id)}))})]}),(0,d.jsx)(M,{children:i?(0,d.jsxs)(m,{children:[(0,d.jsx)("h2",{children:"Waiting for others"}),(0,d.jsx)(b,{})]}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(u,{onClick:function(e){e.preventDefault(),r(W,S)},children:"Go Next!"})})})]})},ne=o.ZP.div.withConfig({displayName:"ScoreTable__Container",componentId:"sc-zc1nx8-0"})(["display:flex;flex-wrap:wrap;justify-content:space-around;text-align:center;font-size:1.5em;max-height:80vh;margin:auto;padding:20px;background:rgba(255,255,255,0.8);border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);overflow-y:auto;"]),te=function(e){var n=e.maxRounds,t=e.gameState,r=e.round,i=e.handleStartNextRound,o=(0,a.useState)(!1),s=o[0],c=o[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ne,{children:t.users.map((function(e){return(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:e.name}),(0,d.jsx)("p",{children:e.scores[r]})]},e.id)}))}),(0,d.jsx)(p,{children:s?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(m,{children:[(0,d.jsx)("h2",{children:"Waiting for others"}),(0,d.jsx)(b,{})]})}):(0,d.jsx)(u,{onClick:function(){c(!0),i()},children:r===n?"See Final Scores \ud83e\udd29":"Start Next Round"})})]})},re=t(6485),ie=t.n(re),ae=o.ZP.div.withConfig({displayName:"PlayerList__Container",componentId:"sc-18fb6rp-0"})(["text-align:center;color:",""],c.colors.red),oe=(0,o.F4)(["from{transform:rotate(-2deg);}to{transform:rotate(8deg);}"]),se=o.ZP.button.withConfig({displayName:"PlayerList__CopyButton",componentId:"sc-18fb6rp-1"})(["margin:5px;margin-left:10px;padding:5px 10px;font-size:20px;color:white;border:none;cursor:",";background-color:",";font-family:",";"],(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"grey":c.colors.blue}),c.font),ce=o.ZP.span.withConfig({displayName:"PlayerList__GameCode",componentId:"sc-18fb6rp-2"})(["color:",";font-weight:bold;font-size:1.5em;"],c.colors.red),de=o.ZP.div.withConfig({displayName:"PlayerList__UserContainer",componentId:"sc-18fb6rp-3"})(["display:flex;animation:"," 1s cubic-bezier(1,-1,0,2) infinite;flex-direction:column;align-items:center;margin:0 20px;color:black;"],(function(e){return!e.gameStarted&&oe})),le=function(e){var n=e.users,t=e.gameStarted,r=e.code,i=t?30:60,o=i,c=(0,a.useState)("Copy"),l=c[0],u=c[1];return(0,d.jsxs)(d.Fragment,{children:[!t&&(0,d.jsx)("div",{style:{textAlign:"center",padding:"20px 20px 20px 20px"},children:(0,d.jsxs)("div",{style:{padding:"10px"},children:["Your Game Code is:",(0,d.jsxs)("div",{children:[(0,d.jsxs)(ce,{children:[" ",r]}),(0,d.jsx)(se,{disabled:"Copied!"===l,onClick:function(){ie()(r).then((function(){return u("Copied!")}))},children:l})]}),"Send it to your friends to start the game!"]})}),(0,d.jsxs)(ae,{children:[!t&&(0,d.jsx)("h1",{children:"Who's Playing?"}),(0,d.jsx)(p,{children:n.map((function(e,n){return(0,d.jsxs)(de,{gameStarted:t,children:[(0,d.jsx)("img",{alt:"".concat(e.name," avatar"),width:i,height:o,src:s[e.avatarIndex||n]}),t&&(0,d.jsx)("h4",{children:e.name}),!t&&(0,d.jsx)("h2",{children:e.name})]},e.id)}))})]})]})},ue=o.ZP.div.withConfig({displayName:"GameHeader__Container",componentId:"sc-1k9cj4g-0"})(["width:100%;display:flex;flex-direction:row;justify-content:space-around;font-size:15px;@media(max-width:500px){}"]),pe=o.ZP.span.withConfig({displayName:"GameHeader__TimerValue",componentId:"sc-1k9cj4g-1"})(["position:relative;top:48px;"]),me=o.ZP.div.withConfig({displayName:"GameHeader__TimerContainer",componentId:"sc-1k9cj4g-2"})(["background-image:url('/assets/timer.png');height:100px;background-size:100px;width:100px;text-align:center;font-size:1.3em;"]),xe=o.ZP.div.withConfig({displayName:"GameHeader__RoundContainer",componentId:"sc-1k9cj4g-3"})(["font-size:1.8em;position:relative;top:30px;@media(max-width:500px){font-size:1em;}display:flex;flex-direction:column;"]),he=o.ZP.span.withConfig({displayName:"GameHeader__BoldContent",componentId:"sc-1k9cj4g-4"})(["color:red;font-weight:bold;font-size:1.2em;"]),fe=o.ZP.div.withConfig({displayName:"GameHeader__HelpIcon",componentId:"sc-1k9cj4g-5"})(["position:fixed;bottom:70px;right:20px;width:40px;height:40px;background-color:#007bff;color:white;border-radius:50%;text-align:center;line-height:40px;font-size:20px;cursor:pointer;box-shadow:0 2px 4px rgba(0,0,0,0.2);"]),ge=function(e){var n=e.play();void 0!==n&&n.then((function(e){})).catch((function(e){console.info(e)}))},be=function(e){var n=e.pause();void 0!==n&&n.then((function(n){e.load()})).catch((function(e){console.info(e)}))},je=function(e){var n=e.roundNumber,t=e.timerValue,r=e.currentAlphabet,i=e.maxRounds,o=e.soundOn;return(0,a.useEffect)((function(){return(Y=new Audio("/assets/audio/ticking-timer.wav")).load(),function(){be(Y)}}),[]),Y&&49===t&&o&&ge(Y),o&&60!==t||be(Y),(0,d.jsxs)(ue,{children:[(0,d.jsxs)(xe,{children:[(0,d.jsxs)("span",{children:["Round ",(0,d.jsx)(he,{children:"#".concat(n,"/").concat(i)})]}),(0,d.jsxs)("span",{children:["Current Alphabet: ",(0,d.jsx)(he,{children:r||"Not Selected"})]})]}),(0,d.jsx)(me,{children:(0,d.jsx)(pe,{children:t})})]})},ve=function(e){var n=e.scores,t=e.handleRestartGame,r={score:0};return n.forEach((function(e){e.score>r.score&&(r={score:e.score,name:e.name})})),(0,d.jsxs)(m,{children:[(0,d.jsx)("h2",{children:"Final Scores"}),(0,d.jsx)(p,{children:n.map((function(e){return(0,d.jsxs)("div",{style:{margin:"0 20px",textAlign:"center"},children:[(0,d.jsx)("img",{alt:"".concat(e.name," avatar"),src:s[e.avatarId],width:60,height:60}),(0,d.jsxs)("p",{children:[e.name,": ",e.score]})]},e.name)}))}),(0,d.jsx)("h2",{style:{textAlign:"center"},children:"\ud83c\udf89\ud83c\udf89 The winner is: ".concat(r.name||"No winner!"," \ud83c\udf89\ud83c\udf89")}),(0,d.jsx)(u,{fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(e){e.preventDefault(),t(e)},children:"Play Again"})]})},ye=function(e){var n=e.handleStartGame,t=e.isAdmin;return(0,d.jsx)(p,{children:t?(0,d.jsx)(u,{onClick:function(e){e.preventDefault(),n()},children:"Start Game"}):(0,d.jsxs)(m,{children:[(0,d.jsx)("h3",{children:"Waiting for admin to start the game.."}),(0,d.jsx)(b,{})]})})},we=o.ZP.div.withConfig({displayName:"Play__Container",componentId:"sc-q76vgx-0"})(["font-family:",";padding-top:80px;"],c.font),Se=function(e){var n=e.gameData,t=e.setGamePlaying,r=e.soundOn,i=(0,a.useState)([]),o=i[0],s=i[1],c=(0,a.useState)(""),l=c[0],u=c[1],m=(0,a.useState)(1),x=m[0],h=m[1],v=(0,a.useState)(!1),y=v[0],w=v[1],S=(0,a.useState)(!1),C=S[0],_=S[1],k=(0,a.useState)(!1),P=k[0],N=k[1],I=(0,a.useState)(!1),Z=I[0],O=I[1],z=(0,a.useState)(""),G=z[0],E=z[1],R=(0,a.useState)({}),A=R[0],F=R[1],D=(0,a.useState)(!1),B=D[0],W=D[1],L=(0,a.useState)(0),Y=L[0],H=L[1],M=(0,a.useState)(!1),V=M[0],q=M[1],J=(0,a.useState)(!1),U=J[0],X=J[1],$=(0,a.useState)([]),K=$[0],Q=$[1],ne=(0,a.useState)(0),re=ne[0],ie=ne[1],ae=(0,a.useState)([]),oe=ae[0],se=ae[1],ce=(0,a.useState)(n.isAdmin),de=ce[0],ue=ce[1],pe=(0,a.useState)({}),me=pe[0],xe=pe[1];(0,a.useEffect)((function(){var e=n.code,t=n.users,r=n.maxRounds,i=n.categories;s(t),u(e),ie(Number(r)),se(i)}),[n]),(0,a.useEffect)((function(){j.on("restartGame",(function(){Q([]),X(!1)})),j.on("gameData",(function(e){var n=e.users;s(n)})),j.on("allSubmitted",(function(e){var n=e.gameState,t=e.scorePartners;F(Object.assign({},n)),t.forEach((function(e){e[0].id===j.id&&xe(e[1])})),O(!0)})),j.on("allScoresSubmitted",(function(e){var n=e.gameState;F(Object.assign({},n)),N(!0)})),j.on("allPlayersReady",(function(e){var n=e.gameState;q(!0),F(Object.assign({},n)),h(n.currentRound),w(!1),O(!1),N(!1),_(!1),H(0),E(n.currentAlphabet),q(!1)})),j.on("gameStarted",(function(e){var n=e.gameState;W(n.started),E(n.currentAlphabet)})),j.on("gameEnded",(function(e){var n=e.scores,t=e.gameState;q(!0),F(Object.assign({},t)),h(1),w(!1),O(!1),N(!1),_(!1),H(0),E(""),X(!0),W(!1),q(!1),s(t.users),ue(!1),Q(n)})),j.on("timerValue",(function(e){var n=e.timer;H(n)}))}),[]);var he=function(e){j.emit("sendResponse",{code:l,response:e,round:x},(function(){w(!0),j.emit("stopTimer",{code:l})}))},fe=function(e,n){var t;t=e||0,j.emit("sendScore",{id:n,code:l,score:t,round:x},(function(e){var n=e.error,t=e.gameState;n?alert(n):t&&_(!0)}))},ge=function(){j.emit("startGame",{code:l},(function(e){e&&(W(e.started),q(!1))}))},be=function(e){e.preventDefault(),W(!1),j.emit("restartGame",{code:l},(function(){Q([]),X(!1),ue(!0)}))},Se=function(){j.emit("playerReady",{code:l,round:x},(function(e){e.gameState}))};return(0,d.jsxs)(we,{children:[(0,d.jsx)(f,{children:(0,d.jsx)(g,{onClick:function(){j.emit("removeUserFromGame",{code:l},(function(){t(!1)}))},children:"X"})}),!U&&(0,d.jsx)(le,{code:l,gameStarted:B||U,users:o}),V?(0,d.jsx)(p,{children:(0,d.jsx)(b,{})}):U?(0,d.jsx)(ve,{handleRestartGame:be,scores:K}):B?P?(0,d.jsx)(te,{maxRounds:re,handleStartNextRound:Se,round:x,gameState:A}):y&&!Z?(0,d.jsx)(p,{children:(0,d.jsx)(b,{})}):Z?(0,d.jsx)(ee,{scorePartner:me,scoreSubmitted:C,handleSubmitScore:fe,round:x,gameState:A}):(0,d.jsxs)(d.Fragment,{children:[!!B&&(0,d.jsx)(je,{soundOn:r,maxRounds:re,timerValue:Y,roundNumber:x,currentAlphabet:G}),(0,d.jsx)(T,{categories:oe,timerValue:Y,sendResponse:he})]}):(0,d.jsx)(ye,{handleStartGame:ge,isAdmin:de})]})},Ce=o.ZP.h1.withConfig({displayName:"Instructions__InstructionHeader",componentId:"sc-1tf3zcb-0"})(["color:",""],c.colors.red),_e=o.ZP.div.withConfig({displayName:"Instructions__PaddedContainer",componentId:"sc-1tf3zcb-1"})(["padding:0 50px 0 50px;"]),ke=function(e){var n=e.cancel;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{children:(0,d.jsx)(g,{onClick:function(){return n()},children:"X"})}),(0,d.jsxs)("div",{children:[(0,d.jsxs)(_e,{children:[(0,d.jsx)(Ce,{children:"How To Play"}),(0,d.jsxs)("h3",{children:["The game is simple. The game creator sets the number of rounds and chooses the word categories.",(0,d.jsx)("br",{}),"The game is player over a couple of rounds. At the beginning of every round, players get a new alphabet. Your job is to think of words that begin with that letter and fit the categories in the game."]}),(0,d.jsx)("h3",{children:"Each game round is timed at 60 seconds, but the game alsos end as soon as the first person submits their response. Think fast!"})]}),(0,d.jsxs)(_e,{children:[(0,d.jsx)(Ce,{children:"Creating A Game and Game Setup"}),(0,d.jsx)("h3",{children:'Head on over to the "Create New Game" section on the previous page to create a new game. You will be able to specify the number of rounds you would like to play as well as any additional categories you would want to include besides, "Name", "Place", "Animal" and "Thing".'}),(0,d.jsx)("h3",{children:'You can also define "scoring mechanics". Select "Score Yourself" if you want people to score themselves, or select "Score Each Other" to score your friends. '}),(0,d.jsx)("h3",{children:'Once you have created the game, you will get a "Game Code". Create the room and send the Game Code to your friends who will be able to use it join the room. Once your friends have joined, the creator will be able to start the game!'})]}),(0,d.jsxs)(_e,{children:[(0,d.jsx)(Ce,{children:"Scoring Rules"}),(0,d.jsxs)("h3",{children:["Scoring Rules are simple:",(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"+10 points for each unique answer"}),(0,d.jsx)("li",{children:"+5 points for each non-unique answer"}),(0,d.jsx)("li",{children:"+0 points for no answer"})]})]})]}),(0,d.jsx)("div",{style:{textAlign:"center",margin:"20px"},children:(0,d.jsx)(u,{fontSize:"25px",padding:"15px",minWidth:"220px",onClick:function(e){e.preventDefault(),n(!1)},children:"Understood, Let's Go!"})})]})]})},Pe=function(){var e=(0,a.useState)(!1),n=e[0],t=e[1],r=(0,a.useState)(!1),i=r[0],o=r[1],s=(0,a.useState)(!1),c=s[0],l=s[1],u=(0,a.useState)(!1),p=u[0],m=u[1],x=(0,a.useState)({}),h=x[0],f=x[1],g=(0,a.useState)(!0),b=g[0];g[1];return(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[(0,d.jsx)("div",{className:"card text-dark mb-3",style:{backgroundColor:"rgba(255, 255, 255, 0.9)"},children:(0,d.jsx)("div",{className:"card-body",children:p?(0,d.jsx)(Se,{soundOn:b,setGamePlaying:m,gameData:h}):c?(0,d.jsx)(ke,{cancel:function(){return l(!1)}}):(0,d.jsxs)(d.Fragment,{children:[!n&&!i&&(0,d.jsxs)("div",{className:"button-container d-flex flex-row justify-content-center",children:[(0,d.jsx)("button",{className:"btn btn-success my-3 mx-2",onClick:function(){t(!0),o(!1)},children:"Join Existing Game"}),(0,d.jsx)("button",{className:"btn btn-danger my-3 mx-2",onClick:function(){t(!1),o(!0)},children:"Create New Game"})]}),n&&(0,d.jsx)(w,{cancel:t,setGamePlaying:m,setGameData:f}),i&&(0,d.jsx)(N,{setGamePlaying:m,setGameData:f,cancel:o})]})})}),(0,d.jsx)(fe,{onClick:function(){return l(!0)},children:"?"})]})})};function Ne(){return(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)(i(),{children:[(0,d.jsx)("title",{children:"Zookilla! | Online Multiplayer Game"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,d.jsx)("link",{rel:"icon",href:"https://zookilla.com/favicon.ico"})]}),(0,d.jsx)("main",{children:(0,d.jsx)(Pe,{})})]})}},5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6057)}])}},function(e){e.O(0,[422,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);