!function(t){var e={};function n(o){if(e[o])return e[o].exports;var l=e[o]={i:o,l:!1,exports:{}};return t[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(o,l,function(e){return t[e]}.bind(null,l));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip(),"/"==window.location.pathname&&$.getJSON("/api/latest",function(t){let e="";t.map((t,n)=>{e+=`<div class="latest-poll d-flex">\n          <div class="latest-poll-icon">\n            <i class="fa fa-pie-chart fa-fw"></i>\n            <h6>${t.totalVote}</h6>          \n          </div>\n          <div class="latest-poll-info">\n          <a href="/poll/${t.id}">\n            <h3>${t.pollTitle}</h3>\n            <p class="muted">${t.date.split("T")[0]}</p>\n            </a>\n          </div>\n        </div>`}),$(".latest-polls").html(e)})});let n=3,o=function(){n++;let t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","poll_option"),t.setAttribute("placeholder",`${n}. Poll option`),t.classList.add("mt-2"),t.classList.add("form-control"),t.classList.add("poll-option-input"),document.querySelector("#poll-options").appendChild(t)};null!==document.querySelector(".add-more")&&document.querySelector(".add-more").addEventListener("click",o)}]);