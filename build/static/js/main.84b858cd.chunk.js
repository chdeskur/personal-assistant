(this["webpackJsonppersonal-assistant"]=this["webpackJsonppersonal-assistant"]||[]).push([[0],{30:function(n,e,t){n.exports=t(42)},42:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(23),o=t.n(c),l=t(15),u=t(3),i=t(17),s=t.n(i),f=t(24),m=t(5),b=t(1),p=t(2);function g(){var n=Object(b.a)(["\n    color: black;\n    font-size: 28px;\n"]);return g=function(){return n},n}function d(){var n=Object(b.a)(["\n    font-size: 28px;\n    font-weight: bold;\n    transition: color 0.5s ease;\n    color: red;\n\n    &:hover {\n        cursor: help;\n        color: limegreen;\n    }\n"]);return d=function(){return n},n}function h(){var n=Object(b.a)(["\n    height: 200px;\n    border: 4px solid lightgray;\n    cursor: url('../gar.png'), grabbing; \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: lightblue url('https://b-i.forbesimg.com/danmunro/files/2013/10/BSOD2-1024x487.png');\n"]);return h=function(){return n},n}var E=p.a.div(h()),v=p.a.a(d()),j=p.a.h2(g()),x=function(){var n="Dipshit",e=Object(a.useState)(""),t=Object(m.a)(e,2),c=t[0],o=t[1];return Object(a.useEffect)((function(){(function(){var n=Object(f.a)(s.a.mark((function n(){var e,t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=naples&appid=886705b4c1182eb1c69f28eb8c520e20");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,o(t.weather[0].description);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),r.a.createElement(E,null,r.a.createElement(v,{target:"_blank",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",title:"PLEASE click me."},n.length?"Hello, ".concat(n):"Hello!"),r.a.createElement(j,null,"Today's weather: "," ",c))},O=t(13);function w(){var n=Object(b.a)(["\n  font: 'Times New Roman';\n"]);return w=function(){return n},n}function k(){var n=Object(b.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  color: green;\n  cursor: vertical-text;\n"]);return k=function(){return n},n}function y(){var n=Object(b.a)(["\n  color: purple;\n  font-size: 20px;\n"]);return y=function(){return n},n}function T(){var n=Object(b.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  background: purple;\n  border: 2px solid yellow;\n"]);return T=function(){return n},n}function C(){var n=Object(b.a)(["\n  position: relative;\n  float: right;\n"]);return C=function(){return n},n}function R(){var n=Object(b.a)(["\n    display: inline;\n    margin-left: auto;\n    margin-right: auto;   \n    background: lightblue;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    transition: color 0.5s ease-in;\n\n    &:hover {\n      cursor: context-menu;\n      color: white;\n    }\n"]);return R=function(){return n},n}function S(){var n=Object(b.a)(["\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    border: 3px dotted red;\n    cursor: none;\n    background: url('https://i.kym-cdn.com/entries/icons/mobile/000/025/923/1504551931722.jpg');\n    opacity: 0;\n    transition: opacity 0.5s ease-in;\n\n    &:hover {\n      opacity: 1;\n    }\n"]);return S=function(){return n},n}var D=p.a.div(S()),L=p.a.button(R()),A=p.a.button(C()),N=p.a.table(T()),z=p.a.h2(y()),I=p.a.input(k()),q=p.a.div(w()),F=function(){var n=Object(a.useState)([]),e=Object(m.a)(n,2),t=e[0],c=e[1],o=Object(a.useState)(""),l=Object(m.a)(o,2),u=l[0],i=l[1],s=Object(a.useState)(""),f=Object(m.a)(s,2),b=f[0],p=f[1],g=function(n,e){switch(n){case"ADD":c([].concat(Object(O.a)(t),[e]));break;case"DELETE":c(t.filter((function(n){return e!==n})));break;case"CLEAR":c([]);break;case"FILTER":return t.filter((function(n){return String(n).includes(e)}))}};return r.a.createElement(D,null,r.a.createElement(z,null," Enter a new task here "),r.a.createElement(I,{placeholder:"to do",value:u,onChange:function(n){return i(n.target.value)}}),r.a.createElement(A,{onClick:function(){u&&(g("ADD",u),i(""))}},"add task"),r.a.createElement(z,null," Search for a task here "),r.a.createElement(I,{placeholder:"to do",value:b,onChange:function(n){return p(n.target.value)}}),t.length?r.a.createElement(q,null,r.a.createElement(z,null,"Tasks left: ",t.length),r.a.createElement(N,null,g("FILTER",b).map((function(n){return r.a.createElement("tr",null,r.a.createElement("td",null,n),r.a.createElement("td",null,r.a.createElement(L,{onClick:function(){return g("DELETE",n)}},"complete")))}))),r.a.createElement(L,{onChange:function(){return g("CLEAR")}},"complete all")):r.a.createElement(z,null,"No Work To do!"))};function P(){var n=Object(b.a)(["\n  text-decoration: line-through;\n"]);return P=function(){return n},n}function H(){var n=Object(b.a)(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);return H=function(){return n},n}function M(){var n=Object(b.a)(["\n  font: 'Times New Roman';\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  color: darkgrey;\n  border: none;\n"]);return M=function(){return n},n}function B(){var n=Object(b.a)(["\n  letter-spacing: 6px;\n  color: white;\n  text-align: center;\n  font: 'Times New Roman';\n  font-size: 20px;\n"]);return B=function(){return n},n}function J(){var n=Object(b.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  background: white;\n  padding: 1px;\n  border: none;\n  color: darkgray;\n"]);return J=function(){return n},n}function Q(){var n=Object(b.a)(["\n  font-family: 'Times New Roman';\n  font-size: 15px;\n  margin-top: 2px;\n  margin-bottom: 2px; \n  margin-left: auto;\n  margin-right: auto;  \n  background: lightblue;\n  border: none;\n  transition: color 0.5s ease-in;\n  color: white;\n\n  &:hover {\n    color: teal;\n  }\n"]);return Q=function(){return n},n}function W(){var n=Object(b.a)(["\n  position: absolute;\n  min-width: 300px;\n  top: 25%;\n  left: 50%;\n  margin: -50px 0 0 -150px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background-color: lightblue;\n  font-family: 'Times New Roman';\n  transition: 0.5s ease;\n\n  &:hover {\n    box-shadow: 10px 10px 5px lightgrey;\n  }\n"]);return W=function(){return n},n}var K=p.a.div(W()),X=p.a.button(Q()),_=p.a.table(J()),G=p.a.h2(B()),U=p.a.input(M()),V=p.a.div(H()),Y=p.a.td(P()),Z=function(){var n=Object(a.useState)([]),e=Object(m.a)(n,2),t=e[0],c=e[1],o=Object(a.useState)([]),l=Object(m.a)(o,2),u=l[0],i=l[1],s=Object(a.useState)(""),f=Object(m.a)(s,2),b=f[0],p=f[1],g=Object(a.useState)(""),d=Object(m.a)(g,2),h=d[0],E=d[1],v=function(n){b&&(j(n,b),p(""))},j=function(n,e,a,r){switch(n){case"CLEAR":i([]),c([]);break;case"ADD":c([].concat(Object(O.a)(t),[e]));break;case"COMP":c(t.filter((function(n){return e!==n}))),i([].concat(Object(O.a)(u),[e]));break;case"DELETE":r(a.filter((function(n){return e!==n})));break;case"FILTER":return a.filter((function(n){return String(n).includes(e)}))}};return r.a.createElement(K,null,t.length?r.a.createElement(G,null,"tasks for Today:"," ",t.length):r.a.createElement(G,null,"nothing to Do!"),r.a.createElement(G,null,"enter Task"),r.a.createElement(U,{value:b,onKeyPress:function(n){return function(n,e){"Enter"===n.key&&v(e)}(n,"ADD")},onChange:function(n){return p(n.target.value)}}),r.a.createElement(X,{onClick:v},"[add]"),t.length||u.length?r.a.createElement(V,null,r.a.createElement(G,null,"filter"),r.a.createElement(U,{value:h,onChange:function(n){return E(n.target.value)}}),r.a.createElement(V,null,r.a.createElement(_,null,j("FILTER",h,t).map((function(n){return r.a.createElement("tr",null,r.a.createElement("td",null,n),r.a.createElement("td",null,r.a.createElement(X,{onClick:function(){return j("COMP",n)}},"complete")),r.a.createElement("td",null,r.a.createElement(X,{onClick:function(){return j("DELETE",n,t,c)}},"clear")))})),j("FILTER",h,u).map((function(n){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(Y,null,n)),r.a.createElement("td",null,r.a.createElement(X,{onClick:function(){return j("DELETE",n,u,i)}},"clear")))}))),r.a.createElement(X,{onClick:function(){return j("CLEAR")}},"[clear all]"))):r.a.createElement(G,null,"~~~~~~~~~~~~"))};function $(){var n=Object(b.a)(["\n  font-family: 'Times New Roman';\n  font-size: 22px;\n  color: white;\n  margin: 0 20px;\n  text-decoration: none;\n"]);return $=function(){return n},n}function nn(){var n=Object(b.a)(["\n  height: 50px;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: lightblue;\n"]);return nn=function(){return n},n}var en=p.a.div(nn()),tn=Object(p.a)(l.b).attrs()($()),an=function(){return r.a.createElement(en,null,r.a.createElement(tn,{to:"/"},"home"),r.a.createElement(tn,{to:"/todo"},"peace"),r.a.createElement(tn,{to:"/chaos"},"chaos"))};function rn(){var n=Object(b.a)(["\n  text-decoration: line-through;\n"]);return rn=function(){return n},n}function cn(){var n=Object(b.a)(["\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    font: 'Times New Roman';\n"]);return cn=function(){return n},n}function on(){var n=Object(b.a)(["\n  letter-spacing: 6px;\n  color: white;\n  text-align: center;\n  font: 'Times New Roman';\n  font-size: 20px;\n"]);return on=function(){return n},n}function ln(){var n=Object(b.a)(['\n    position: absolute;\n    min-width: 300px;\n    top: 50%;\n    left: 50%;\n    margin: -50px 0 0 -150px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: lightblue;\n    font-family: url("https://fonts.googleapis.com/css?family=Raleway"), Arial, sans-serif;\n    transition: 0.5s ease;\n\n    &:hover {\n      box-shadow: 10px 10px 5px lightgrey;\n    }\n']);return ln=function(){return n},n}var un=p.a.div(ln()),sn=p.a.h2(on()),fn=(p.a.div(cn()),p.a.td(rn()),function(){var n=Object(a.useState)([]),e=Object(m.a)(n,2),t=e[0],c=e[1],o=Object(a.useState)(""),l=Object(m.a)(o,2),u=l[0],i=l[1],s=Object(a.useState)(""),f=Object(m.a)(s,2),b=f[0],p=f[1];return Object(a.useEffect)((function(){setInterval((function(){var n=new Date;c([n.getHours()%12,"0".concat(n.getMinutes()).slice(-2)])}),1e3)}),[]),Object(a.useEffect)((function(){fetch("http://quotes.rest/qod.json?category=inspire").then((function(n){return n.json()})).then((function(n){i(n.contents.quotes[0].quote),p(n.contents.quotes[0].author)}))}),[]),r.a.createElement(un,null,t[0]?r.a.createElement(un,null,r.a.createElement(sn,null,"hello"),r.a.createElement(sn,null,"the time is ",t[0],":",t[1]),u?r.a.createElement(sn,null,'"',String(u).toLowerCase(),'"',r.a.createElement("br",null),"-",String(b).toLowerCase()):r.a.createElement(sn,null,"loading daily inspiration...")):r.a.createElement(un,null,r.a.createElement(sn,null,"loading the world...")))}),mn=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{basename:"/personal-assistant"},r.a.createElement(an,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/todo"},r.a.createElement(Z,null)),r.a.createElement(u.a,{path:"/chaos"},r.a.createElement(x,null),r.a.createElement(F,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(fn,null)))))};o.a.render(r.a.createElement(mn,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.84b858cd.chunk.js.map