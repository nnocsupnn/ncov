(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{16:function(n,e,t){"use strict";t.d(e,"a",(function(){return g}));var r=t(7),o=t(0),a=t.n(o),i=t(8);function c(){var n=Object(r.a)(["\n    color: yellow;\n"]);return c=function(){return n},n}function l(){var n=Object(r.a)(["\n    padding-top: 30px;\n    text-align: center;\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-left: 50%;\n    margin-right: 50%;\n"]);return s=function(){return n},n}function u(){var n=Object(r.a)(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: 8px dotted white;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    animation: PreLoading 1s ease-in-out infinite;\n    top: 45%;\n    transform: translateY(50%);\n    @keyframes PreLoading {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"]);return u=function(){return n},n}function d(){var n=Object(r.a)(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: 8px solid rgb(78, 78, 78);\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    animation: Loading 1s ease infinite;\n    top: 45%;\n    transform: translateY(50%);\n    @keyframes Loading {\n        from {\n            transform: rotate(360deg);\n        }\n        to {\n            transform: rotate(0deg);\n        }\n    }\n"]);return d=function(){return n},n}var f=i.a.div(d()),p=i.a.div(u()),m=i.a.div(s());i.a.h3(l()),i.a.span(c());function g(n){n.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null,a.a.createElement(f,null),a.a.createElement(p,null)))}},28:function(n,e,t){n.exports=t(38)},33:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(17),i=t.n(a),c=(t(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var s=t(22),u=t(5),d=(t(25),t(16)),f=Object(r.lazy)((function(){return Promise.all([t.e(2),t.e(7)]).then(t.bind(null,384))})),p=Object(r.lazy)((function(){return t.e(6).then(t.bind(null,385))})),m=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){return o.a.createElement(r.Suspense,{fallback:o.a.createElement(d.a,{name:e})},o.a.createElement(o.a.Fragment,null,o.a.createElement(n,t)))}};var g=function(){return o.a.createElement(s.a,null,o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:m(f,"")}),o.a.createElement(u.a,{exact:!0,path:"/about",component:m(p,"")})))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/ncov",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/ncov","/service-worker.js");c?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):l(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(e,n)}))}}()}},[[28,1,3]]]);
//# sourceMappingURL=main.34e7a418.chunk.js.map