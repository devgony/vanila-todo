parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Jj70":[function(require,module,exports) {
var t="https://home.openweathermap.org/",e="04fbe5903fb0ab8181b13029d8a515c8",n=document.querySelector(".weather h1"),o=function(t){var o=t.latitude,a=t.longitude;fetch("http://api.openweathermap.org/data/2.5/weather?lat="+o+"&lon="+a+"&appid="+e+"&units=metric").then(function(t){return t.json()}).then(function(t){var e=t.main.temp,o=t.name;n.innerText=e+" @ "+o})},a=function(t){localStorage.setItem("COORDS",JSON.stringify(t)),o(t)},i=function(t){var e=t.coords,n=e.latitude,o=e.longitude;console.log(n,o),a({latitude:n,longitude:o})},r=function(){console.error("can not get location.")},c=function(){navigator.geolocation.getCurrentPosition(i,r)},l=function(){var t=JSON.parse(localStorage.getItem("COORDS"));t?(console.log(t),o(t)):c()},u=function(){l()};u();
},{}]},{},["Jj70"], null)
//# sourceMappingURL=/weather.ae68ee61.map