(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[5],{100:function(e,t,n){},102:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",(function(){return f}));var r=n(73),c=n(0),o=n.n(c),l=n(101),i=n(25),u=n.n(i),s=n(16);n(100);function f(e){var t=e.country,n=void 0===t?"philippines":t,i=e.data,f=void 0===i?[]:i,d=Object(c.useState)([]),m=Object(r.a)(d,2),h=m[0],y=m[1],p=Object(c.useState)(!0),v=Object(r.a)(p,2),b=v[0],E=v[1];Object(c.useEffect)((function(){var e=[];if(f.length>0)return y(f),void E(!1);setTimeout((function(){fetch("https://corona.lmao.ninja/countries/"+n).then((function(e){return e.json()})).then((function(t){var n=t.cases;delete t.country,delete t.countryInfo,delete t.cases,delete t.casesPerOneMillion,delete t.deathsPerOneMillion,u.a.forEach(t,(function(t,a){var r;e.push({name:(r=a,r.charAt(0).toUpperCase()+r.substr(1,r.length)),value:t,totalCases:n})})),console.log(e),y(e),E(!1)}))}),3e3)}),[h]);var x=["#8DD1E1","#83A6ED","#D0ED57","#8884D8","#A4DE6C","#82CA9D"],g=function(e){return Number(e.toFixed(1)).toLocaleString()},A=function(e){var t,n=e.viewBox,r=e.value1,c=e.value2,l=n.cx,i=n.cy;return console.log(l,i),o.a.createElement("text",(a(t={x:l,y:i+20,className:"containerLabel",fill:"#333"},"className","recharts-text recharts-label"),a(t,"textAnchor","middle"),a(t,"dominantBaseline","central"),t),o.a.createElement("tspan",{alignmentBaseline:"bottom",fontSize:"12"},c.toUpperCase().substr(0,3)," (",r,")"))},j=Object(c.useState)(4),S=Object(r.a)(j,2),O=S[0],w=S[1];return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,n.toUpperCase()),b?o.a.createElement(s.a,null):"",o.a.createElement(l.d,{width:730,height:300},b?"":o.a.createElement(l.c,{data:h,activeIndex:O,activeShape:function(e){var t=Math.PI/180,n=e.cx,a=e.cy,r=e.midAngle,c=e.innerRadius,i=e.outerRadius,u=e.startAngle,s=e.endAngle,f=e.fill,d=e.payload,m=e.percent,h=(e.value,Math.sin(-t*r)),y=Math.cos(-t*r),p=n+(i+10)*y,v=a+(i+10)*h,b=n+(i+30)*y,E=a+(i+30)*h,x=b+22*(y>=0?1:-1),A=E,j=y>=0?"start":"end";return console.log("M".concat(p,",").concat(v,"L").concat(b,",").concat(E,"L").concat(x,",").concat(A)),o.a.createElement("g",null,o.a.createElement("text",{x:n,y:a,dy:8,textAnchor:"middle",fill:f},g(d.value)),o.a.createElement(l.f,{cx:n,cy:a,innerRadius:c,outerRadius:i,startAngle:u,endAngle:s,fill:f}),o.a.createElement(l.f,{cx:n,cy:a,startAngle:u,endAngle:s,innerRadius:i+6,outerRadius:i+10,fill:f}),o.a.createElement("path",{d:"M".concat(p,",").concat(v,"L").concat(b,",").concat(E,"L").concat(x-10,",").concat(A),stroke:f,fill:"none"}),o.a.createElement("circle",{cx:x-10,cy:A,r:2,fill:f,stroke:"none"}),o.a.createElement("text",{x:x+(y>=0?1:-1),y:A,textAnchor:j,fill:"#333",fontSize:"12"},"".concat(d.name)),o.a.createElement("text",{x:x+(y>=0?1:-1),y:A,dy:18,textAnchor:j,fontSize:"12",fill:"#999"},"(".concat((100*m).toFixed(2),"%)")))},dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:100,innerRadius:60,fill:"#8884d8",onMouseEnter:function(e,t){w(t)}},o.a.createElement(l.b,{width:30,position:"center",content:o.a.createElement(A,{value1:g(h[0].totalCases),value2:n})}),h.map((function(e,t){return o.a.createElement(l.a,{key:"cell-".concat(t),fill:x[t]})})))))}},73:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.30722435.chunk.js.map