(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={index:0},o={index:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-719d8660":"69c7a3e4"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-719d8660":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-719d8660":"a3d33351"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],m.parentNode.removeChild(m),n(i)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/SimpleFishBase_Front/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("eac9")},"1ba0":function(e,t,n){"use strict";var r=n("6703"),a=n.n(r);a.a},6703:function(e,t,n){},7284:function(e,t,n){"use strict";var r=n("bd68"),a=n.n(r);a.a},ae4e:function(e,t,n){},bd68:function(e,t,n){},c93f:function(e,t,n){"use strict";var r=n("ae4e"),a=n.n(r);a.a},eac9:function(e,t,n){"use strict";n.r(t);n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b");var r=n("2fa7"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("mainSearchForm")],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("simple"),n("b",[e._v("Fishbase")])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mainSearchForm"}},[n("sui-form",[n("sui-form-field",{attrs:{action:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.taxonomy,expression:"taxonomy"}],attrs:{placeholder:"Genus + Species"},domProps:{value:e.taxonomy},on:{input:function(t){t.target.composing||(e.taxonomy=t.target.value)}}})]),n("sui-form-field",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.common,expression:"common"}],attrs:{placeholder:"Common Name"},domProps:{value:e.common},on:{input:function(t){t.target.composing||(e.common=t.target.value)}}})]),n("sui-form-field",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phMin,expression:"phMin"}],staticStyle:{width:"48%",float:"left"},attrs:{placeholder:"pH Min"},domProps:{value:e.phMin},on:{input:function(t){t.target.composing||(e.phMin=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phMax,expression:"phMax"}],staticStyle:{width:"48%",float:"right"},attrs:{placeholder:"pH Max"},domProps:{value:e.phMax},on:{input:function(t){t.target.composing||(e.phMax=t.target.value)}}}),n("br"),n("br")]),n("sui-form-field",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.tempMin,expression:"tempMin"}],staticStyle:{width:"48%",float:"left"},attrs:{placeholder:"Temperature Min (ºC)"},domProps:{value:e.tempMin},on:{input:function(t){t.target.composing||(e.tempMin=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.tempMax,expression:"tempMax"}],staticStyle:{width:"48%",float:"right"},attrs:{placeholder:"Temperature Max (ºC)"},domProps:{value:e.tempMax},on:{input:function(t){t.target.composing||(e.tempMax=t.target.value)}}})]),n("sui-button",{attrs:{type:"button",id:"submitbtn"},on:{click:function(t){return e.search(t,[e.taxonomy,e.common,"","",e.tempMin,e.tempMax,e.phMin,e.phMax])}}},[e._v("Search")])],1),n("br"),n("p",{attrs:{id:"pageCount"}},[n("i",[e._v("Showing page "+e._s(e.currentPage+1)+" of "+e._s(e.pages.length)+".")])]),n("div",{attrs:{id:"pageButtons"}},[n("sui-button",{attrs:{type:"button"},on:{click:e.prevPage}},[e._v("Previous Page")]),n("sui-button",{attrs:{type:"button"},on:{click:e.nextPage}},[e._v("Next Page")])],1),n("ul",{attrs:{id:"resultList"}},e._l(e.pages[e.currentPage],(function(e){return n("searchResult",{key:e.taxonomy,tag:"li",attrs:{result:e}})})),1),n("br")],1)},u=[],c=(n("caad"),n("bc3a")),l=n.n(c),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"searchResult"}},[n("table",[n("tr",[n("td",[n("img",{attrs:{id:"searchResultImage",src:"http://fishbase.us/images/species/"+e.result.image},on:{error:e.changeImage}})]),n("td",[n("h2",[n("router-link",{attrs:{to:{name:"details",params:{taxonomy:e.result.taxonomy.replace(" ","_")}},target:"_blank"}},[e._v(e._s(e.result.taxonomy)+" ")])],1)]),n("td",[n("h2",[e._v("Common Name")]),""==e.result.commonName?n("p",[n("i",[e._v("No common name found.")])]):e._e(),e._v(" "+e._s(e.result.commonName)+" ")])])])])},m=[],d={name:"searchResult",props:{result:{required:!0}},methods:{changeImage:function(e){e.target.src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Kite%2C_Letter-winged_-_Strzelecki_Track_25-08-07_IMG_1519aa.jpg"}}},h=d,f=(n("c93f"),n("2877")),g=Object(f["a"])(h,p,m,!1,null,null,null),v=g.exports,y={name:"mainSearchForm",data:function(){return{taxonomy:"",common:"",description:"",length:"",phMin:"",phMax:"",tempMin:"",tempMax:"",pages:[],results:[],currentPage:0}},components:{searchResult:v},methods:{search:function(e,t){var n=10;this.allResults=[],this.pages=[];for(var r=this.pages,a=this.results,o=[],i={headers:{"Access-Control-Allow-Origin":"*"}},s="http://raxmitax.pythonanywhere.com/params=$",u=0;u<t.length;u++)""!=t[u]?(console.log(t[u]),s+=t[u],u!=t.length-1&&(s+="$")):s+="$";l.a.get(s,i).then((function(e){for(var t=0;t<Object.keys(e.data["results"]).length;t++)o.includes(e.data["results"][""+t]["taxonomy"])||(o.push(e.data["results"][""+t]["taxonomy"]),a.push(e.data["results"][""+t])),a.length>=n&&(r.push(a),a=[]);a.length>0&&(r.push(a),a=[]),document.getElementById("pageButtons").style.setProperty("visibility","visible"),document.getElementById("pageCount").style.setProperty("visibility","visible")})).catch((function(e){document.getElementById("resultCount").innerHTML="<i>No results. Is your query spelled correctly?</i>",alert(e)}))},nextPage:function(){this.currentPage!=this.pages.length-1&&(this.currentPage=this.currentPage+1)},prevPage:function(){0!=this.currentPage&&(this.currentPage=this.currentPage-1)}}},b=y,x=(n("7284"),Object(f["a"])(b,s,u,!1,null,null,null)),_=x.exports,P={name:"app",components:{mainSearchForm:_},data:function(){return{}}},w=P,M=(n("1ba0"),Object(f["a"])(w,o,i,!1,null,null,null)),O=M.exports,j=n("8c4f"),k=n("92d5"),S=n.n(k);n("c4ca");function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}a["a"].use(S.a),a["a"].config.productionTip=!1,a["a"].use(j["a"]);var C=[{path:"/",name:"home",component:O},{path:"/details/:taxonomy",name:"details",component:function(){return n.e("chunk-719d8660").then(n.bind(null,"ffa6"))},props:function(e){return N({},e.params)}}],T=new j["a"]({mode:"history",routes:C});new a["a"]({router:T,render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=index.d9c574db.js.map