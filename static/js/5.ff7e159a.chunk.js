(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[5],{105:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(8);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=n(78),l=n(0),i=n.n(l),o=n(106),u=n(27),s=n.n(u),f=n(18),d=n(9);n(105);function m(){var e=Object(a.a)(["\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin-top: 20px;\n        color: #e85f5f;\n        font-size: 18px;\n\n        i {\n            color: #fff !important;\n        }\n    "]);return m=function(){return e},e}function p(e){var t=e.country,n=void 0===t?"philippines":t,a=e.data,u=void 0===a?[]:a,p=e.activeIdx,y=void 0===p?null:p,b=Object(l.useState)([]),h=Object(c.a)(b,2),v=h[0],E=h[1],g=Object(l.useState)({}),x=Object(c.a)(g,2),j=x[0],O=x[1],S=Object(l.useState)(""),A=Object(c.a)(S,2),C=A[0],w=A[1],M=Object(l.useState)(0),I=Object(c.a)(M,2),R=I[0],T=I[1],D=Object(l.useState)(["#8DD1E1","#b33434","#e35146","#8884D8","#A4DE6C","#d97b34"]),N=Object(c.a)(D,2),U=N[0],k=(N[1],Object(l.useState)(!0)),z=Object(c.a)(k,2),L=z[0],P=z[1];Object(l.useEffect)((function(){var e=[];if(u.length>0)return E(u),void P(!1);setTimeout((function(){fetch("https://corona.lmao.ninja/countries/"+n).then((function(e){return e.json()})).then((function(t){var n=t.cases;O(t.countryInfo),w(t.country),delete t.country,delete t.countryInfo,delete t.cases,delete t.casesPerOneMillion,delete t.deathsPerOneMillion,delete t.updated,delete t.testsPerOneMillion,T(t.tests),delete t.tests,s.a.forEach(t,(function(t,a){var r;e.push({name:(r=a,r.charAt(0).toUpperCase()+r.substr(1,r.length)),value:t,totalCases:n})})),E(e),P(!1)}))}),3e3)}),[v]);var B=function(e){return Number(e.toFixed(1)).toLocaleString()},F=function(e){var t,n=e.viewBox,a=(e.value1,e.value2,n.cx),c=n.cy;return i.a.createElement("text",(r(t={x:a,y:c+20,className:"containerLabel",fill:"red",fontWeight:"bold"},"className","recharts-text recharts-label"),r(t,"textAnchor","middle"),r(t,"dominantBaseline","central"),t))},J=Object(l.useState)(y||4),K=Object(c.a)(J,2),W=K[0],$=K[1],q=d.a.div(m());return i.a.createElement("div",{className:"container"},L?i.a.createElement(f.a,{name:n}):i.a.createElement("div",{className:"countryContainer"},j.flag?i.a.createElement("img",{src:j.flag,style:{height:"28px"},title:n?n.toUpperCase():C.toUpperCase()}):"",i.a.createElement(q,null,i.a.createElement("span",null,"CASES: ",i.a.createElement("i",null,B(v[0].totalCases))),"global"!==n?i.a.createElement("span",null,"TEST CONDUCTED: ",i.a.createElement("i",null,B(R))):"")),i.a.createElement(o.e,{width:500,height:350},i.a.createElement(o.h,{separator:"",formatter:function(e,t,n){return[B(e),""]}}),i.a.createElement(o.c,{layout:"vertical",verticalAlign:"top",align:"center",iconType:"circle",iconSize:"12",formatter:function(e,t){return i.a.createElement("span",{style:{fontSize:"12px",textTransform:"uppercase",color:"#fff"}},e,": ",i.a.createElement("i",{style:{color:"red !important"}},B(t.payload.value)))}}),L?"":i.a.createElement(o.d,{data:v,activeIndex:W,activeShape:function(e){var t=Math.PI/180,n=e.cx,a=e.cy,r=e.midAngle,c=e.innerRadius,l=e.outerRadius,u=e.startAngle,s=e.endAngle,f=e.fill,d=e.payload,m=e.percent,p=(e.value,Math.sin(-t*r)),y=Math.cos(-t*r),b=n+(l+10)*y,h=a+(l+10)*p,v=n+(l+30)*y,E=a+(l+30)*p,g=v+22*(y>=0?1:-1),x=E,j=y>=0?"start":"end";return i.a.createElement("g",null,i.a.createElement("text",{x:n,y:a,className:"recharts-text recharts-label centerTextLabel",textAnchor:"middle",fill:f,dominantBaseline:"central"},i.a.createElement("tspan",{alignmentBaseline:"middle",fontSize:"14",style:{fontWeight:"bold"}},d.name)),i.a.createElement(o.g,{cx:n,cy:a,innerRadius:c,outerRadius:l,startAngle:u,endAngle:s,fill:f}),i.a.createElement(o.g,{cx:n,cy:a,startAngle:u,endAngle:s,innerRadius:l+6,outerRadius:l+10,fill:f}),i.a.createElement("path",{d:"M".concat(b,",").concat(h,"L").concat(v,",").concat(E,"L").concat(g-10,",").concat(x),stroke:f,fill:"none"}),i.a.createElement("circle",{cx:g-10,cy:x,r:2,fill:f,stroke:"none"}),i.a.createElement("text",{x:g+(y>=0?1:-1),y:x,textAnchor:j,fill:"#fff"},d.name.toUpperCase()),i.a.createElement("text",{x:g+(y>=0?1:-1),y:x,dy:18,textAnchor:j,fontSize:"12",fill:"#999"},"(".concat((100*m).toFixed(2),"%)")))},dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:85,innerRadius:55,fill:"#8884d8",onMouseEnter:function(e,t){$(t)},animationDuration:2e3,animationEasing:"ease-in-out"},i.a.createElement(o.b,{width:30,position:"center",content:i.a.createElement(F,{value1:B(v[0].totalCases),value2:n})}),v.map((function(e,t){return i.a.createElement(o.a,{key:"cell-".concat(t),fill:U[t]})})))))}},78:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(o){r=!0,c=o}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.ff7e159a.chunk.js.map