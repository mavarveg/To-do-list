(this["webpackJsonpTo-Do"]=this["webpackJsonpTo-Do"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),r=n.n(l),o=n(1);var u=function(e){return c.a.createElement("div",{onClick:()=>{e.onChecked(e.id)}},c.a.createElement("li",null,e.text))};var i=function(e){const t=Object(a.useState)(""),n=Object(o.a)(t,2),l=n[0],r=n[1];return c.a.createElement("div",{className:"form"},c.a.createElement("input",{onChange:function(e){const t=e.target.value;r(t)},type:"text",value:l}),c.a.createElement("button",{onClick:()=>{e.onAdd(l),r("")}},c.a.createElement("span",null,"Add")))};var m=function(){const e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1];function r(e){l(t=>t.filter((t,n)=>n!==e))}return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"To-Do List")),c.a.createElement(i,{onAdd:function(e){l(t=>[...t,e])}}),c.a.createElement("div",null,c.a.createElement("ul",null,n.map((e,t)=>c.a.createElement(u,{key:t,id:t,text:e,onChecked:r})))))};r.a.render(c.a.createElement(m,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)}},[[4,1,2]]]);
//# sourceMappingURL=main.a363b2e6.chunk.js.map