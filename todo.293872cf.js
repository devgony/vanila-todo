parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"izdv":[function(require,module,exports) {
var e=document.querySelector(".js-form"),n=e.querySelector("input"),t=document.querySelector(".pending"),o=document.querySelector(".done"),r={},a={},d={pending:{obj:r,dom:t},done:{obj:a,dom:o}},i=function(){c("pending"),c("done"),e.addEventListener("submit",l)},c=function(e){var n=JSON.parse(localStorage.getItem(e));for(var t in d[e].obj=n||{},d[e].obj)u(e,t,d[e].obj[t])},l=function(e){e.preventDefault(),s("pending",n.value),n.value=""},s=function(e,n){var t=(parseInt(Object.keys(d[e].obj).sort().reverse()[0])||0)+1;u(e,t,n),d[e].obj[t]=n,localStorage.setItem(e,JSON.stringify(d[e].obj))},u=function(e,n,t){var o=d[e].dom.appendChild(document.createElement("li"));o.id=n;var r=o.appendChild(document.createElement("button"));r.innerText="✅",r.className="switch-btn btn",r.addEventListener("click",m);var a=o.appendChild(document.createElement("button"));a.innerText="❌",a.className="del-btn btn",a.addEventListener("click",p),o.appendChild(document.createElement("p")).innerText=t},p=function(e){var n=e.target,t=n.parentNode.parentNode.className,o=n.parentNode;console.log(o,o.id,t),b(o.id,o,t)},m=function(e){var n=e.target,t=n.parentNode.parentNode.className,o=n.parentNode,r=o.lastChild.innerText;console.log(t,o,r),b(o.id,o,t),s("pending"===t?"done":"pending",r)},b=function(e,n,t){console.log(t,d[t].obj),delete d[t].obj[e],localStorage.setItem(t,JSON.stringify(d[t].obj)),n.remove()};i();
},{}]},{},["izdv"], null)
//# sourceMappingURL=/todo.293872cf.js.map