(this["webpackJsonpmyquiz-ts"]=this["webpackJsonpmyquiz-ts"]||[]).push([[0],{18:function(n,e,t){n.exports=t.p+"static/media/drew-coffman.0db57796.jpg"},19:function(n,e,t){n.exports=t(27)},27:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(14),o=t.n(c),i=t(3),s=t(1),u=t.n(s),l=t(6),p=t(2),d=t(4),f=t(5);function b(){var n=Object(d.a)(["\n  transition: all 0.3s ease;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #fff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"]);return b=function(){return n},n}function m(){var n=Object(d.a)(["\n  max-width: 1100px;\n  background: #ffad66e0;\n  border-radius: 8px;\n  border: 2px solid #d38558;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n\n  p {\n    font-size: 1rem;\n    color: rgb(50, 50, 50);\n  }\n"]);return m=function(){return n},n}function x(){var n=Object(d.a)(["\n  select {\n    margin-top: 30px;\n    width: 500px;\n    height: 35px;\n    border-radius: 4px;\n    background-image: linear-gradient(180deg, #fff, #ffcc91);\n    color: rgb(60, 60, 60);\n    border: none;\n    box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.25);\n  }\n\n  option {\n    background-color: #ffcc9191;\n    color: rgb(60, 60, 60);\n    user-select: none;\n  }\n"]);return x=function(){return n},n}var g,h=f.b.div(x()),v=f.b.div(m()),w=f.b.div(b(),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #43edef, #57c9ea)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(2deg, #0b8e4c, #decc4d)"})),j=function(n){var e=n.question,t=n.questionNum,r=n.answers,c=n.callBack,o=n.totalQuestions,i=n.userAnswers;return a.a.createElement(v,null,a.a.createElement("p",{className:"question"},"Question: ",t," / ",o),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}}),a.a.createElement("div",null,r.map((function(n){return a.a.createElement(w,{key:n,correct:(null===i||void 0===i?void 0:i.correctAnswer)===n,userClicked:(null===i||void 0===i?void 0:i.answer)===n},a.a.createElement("button",{onClick:c,disabled:!!i,value:n},a.a.createElement("span",{dangerouslySetInnerHTML:{__html:n}})))}))))},k=t(8),O=function(n){return Object(i.a)(n).sort((function(){return Math.random()-.5}))};!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(g||(g={}));var E=function(){var n=Object(l.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://opentdb.com/api_category.php",n.next=3,fetch("https://opentdb.com/api_category.php");case 3:return n.next=5,n.sent.json();case 5:return e=n.sent,n.abrupt("return",e.trivia_categories);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){var n=Object(l.a)(u.a.mark((function n(e,t,r){var a,c,o,s,l;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=11;break}return a="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=4,fetch(a);case 4:return c=n.sent,n.next=7,c.json();case 7:return o=n.sent,n.abrupt("return",o.results.map((function(n){return Object(k.a)(Object(k.a)({},n),{},{answers:O([].concat(Object(i.a)(n.incorrect_answers),[n.correct_answer]))})})));case 11:if(!r){n.next=19;break}return s="https://opentdb.com/api.php?amount=".concat(e,"&category=").concat(r,"&type=multiple"),n.next=15,fetch(s);case 15:return n.next=17,n.sent.json();case 17:return l=n.sent,n.abrupt("return",l.results.map((function(n){return Object(k.a)(Object(k.a)({},n),{},{answers:O([].concat(Object(i.a)(n.incorrect_answers),[n.correct_answer]))})})));case 19:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),S=function(n){var e=n.categories,t=n.chooseCat;return a.a.createElement(h,null,a.a.createElement("select",{onChange:t},a.a.createElement("option",{value:0},"Any Category"),e.map((function(n){return a.a.createElement("option",{key:n.name,value:n.id},n.name)}))))},_=t(18),z=t.n(_);function N(){var n=Object(d.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > p {\n    color: #fff;\n  }\n\n  .score {\n    color: #fff;\n    padding: 0 20px;\n    font-size: 2rem;\n  }\n\n  h1 {\n    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",\n      sans-serif;\n    background-image: linear-gradient(180deg, #eeee6b, #fff);\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #ff6534);\n    font-size: 65px;\n    font-weight: 400;\n    text-align: center;\n    margin: 20px;\n  }\n\n  .begin {\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #ffad66e0;\n    padding: 30px;\n    border-radius: 8px;\n    border: 2px solid #d38558;\n  }\n\n  .start,\n  .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #fff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 8px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n\n  .start {\n    max-width: 200px;\n  }\n']);return N=function(){return n},n}function A(){var n=Object(d.a)(["\n  html {\n    height: 100%\n  }\n\n  body {\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Catamaran', sans-serif\n  }\n"]);return A=function(){return n},n}var q=Object(f.a)(A(),z.a),C=f.b.div(N());var M=function(){var n=Object(r.useState)(!1),e=Object(p.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(!0),s=Object(p.a)(o,2),d=s[0],f=s[1],b=Object(r.useState)(0),m=Object(p.a)(b,2),x=m[0],h=m[1],v=Object(r.useState)([]),w=Object(p.a)(v,2),k=w[0],O=w[1],_=Object(r.useState)([]),z=Object(p.a)(_,2),N=z[0],A=z[1],M=Object(r.useState)(0),I=Object(p.a)(M,2),Q=I[0],T=I[1],B=Object(r.useState)([]),H=Object(p.a)(B,2),Y=H[0],D=H[1],F=Object(r.useState)(0),J=Object(p.a)(F,2),L=J[0],R=J[1];a.a.useEffect((function(){(function(){var n=Object(l.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E();case 2:e=n.sent,D(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[D]);var U=function(){var n=Object(l.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c(!0),f(!1),0!==L){n.next=9;break}return n.next=5,y(10,g.EASY);case 5:e=n.sent,O(e),n.next=13;break;case 9:return n.next=11,y(10,g.EASY,L);case 11:t=n.sent,O(t);case 13:h(0),A([]),T(0),c(!1);case 17:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,null),a.a.createElement(C,{className:"App"},a.a.createElement("h1",null,"TypeScript Quiz"),d||10===N.length?a.a.createElement("div",{className:"begin"},a.a.createElement(S,{categories:Y,chooseCat:function(n){var e=Number(n.currentTarget.value);R(e)}}),a.a.createElement("button",{className:"start",onClick:U},"Start")):null,!d&&a.a.createElement("p",{className:"score"},"Score: ",Q),t&&a.a.createElement("p",{className:"loading"},"loading..."),t||d?null:a.a.createElement(j,{question:k[x].question,questionNum:x+1,answers:k[x].answers,callBack:function(n){if(!d){var e=n.currentTarget.value,t=k[x].correct_answer===e;t&&T((function(n){return n+1}));var r={question:k[x].question,answer:e,correct:t,correctAnswer:k[x].correct_answer};A((function(n){return[].concat(Object(i.a)(n),[r])}))}},totalQuestions:10,userAnswers:N?N[x]:void 0}),d||t||N.length!==x+1||9===x?null:a.a.createElement("button",{className:"next",onClick:function(){var n=x+1;10===n?f(!0):h(n)}}," ","Next Question")))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(M,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2e692bf6.chunk.js.map