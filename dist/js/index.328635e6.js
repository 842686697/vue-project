(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],l=0,v=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(v.length)v.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={index:0},i=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"aa95a846"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"08a9":function(t,e,a){t.exports=a.p+"img/icon.8cf15c57.jpg"},2045:function(t,e,a){},2208:function(t,e,a){"use strict";a("8c06")},3063:function(t,e,a){"use strict";a("2045")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("Home")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("full-page",{ref:"fullpage",attrs:{options:t.options,id:"fullpage"}},[a("div",{staticClass:"section"},[a("Page1")],1),a("div",{staticClass:"section"},[a("Page2")],1),a("div",{staticClass:"section"},[a("Page3")],1)]),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{attrs:{id:"menu"}},[a("div",{staticClass:"menu_box"},[a("div",[t._v("简历")]),a("li",{attrs:{"data-menuanchor":"thirdPage"}},[a("a",{attrs:{href:"#thirdPage"}},[t._v("个人作品")])]),a("li",{attrs:{"data-menuanchor":"secondPage"}},[a("a",{attrs:{href:"#secondPage"}},[t._v("专业技能")])]),a("li",{staticClass:"active",attrs:{"data-menuanchor":"firstPage"}},[a("a",{attrs:{href:"#firstPage"}},[t._v("个人简介")])])])])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("v-avatar",{attrs:{size:"80"}},[n("img",{attrs:{src:a("08a9")}})]),n("h1",[t._v("彭曦")]),t._m(0)],1)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info_box"},[a("div",{staticClass:"info"},[a("div",[t._v("性别 | 男")]),a("div",[t._v("学校 | 重庆科技学院")]),a("div",[t._v("专业 | 计算机科学与技术")]),a("div",[t._v("手机 | 13330221130")]),a("div",[t._v("邮箱 | 842686697@qq.com")])]),a("div",{staticClass:"info"},[a("div",[t._v("我是一个做事认真，吃苦耐劳的人")]),a("div",[t._v("拥有快速学习的能力")]),a("div",[t._v("在工作上也能用心对待")]),a("div",[t._v("希望能给予我一个宝贵的机会")])])])}],l={name:"page1"},f=l,v=(a("2208"),a("2877")),d=a("6544"),p=a.n(d),m=a("8212"),g=Object(v["a"])(f,c,u,!1,null,"5d844d64",null),h=g.exports;p()(g,{VAvatar:m["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"text_box"},[a("div",{staticClass:"title"},[t._v("专业技能")]),a("v-divider"),a("div",{staticClass:"text"},[t._v("前端基础：(均熟悉) html、css、javascript")]),a("div",{staticClass:"text"},[t._v("前端框架：(熟悉) vuetify 库,(了解) bootstrap 库 ,(熟悉) Vue及Vue-cli、router ")]),a("div",{staticClass:"text"},[t._v("运行环境：(了解) NodeJS ")]),a("div",{staticClass:"text"},[t._v("版本管理：(熟悉) git ")])],1)])},b=[],P={name:"page2"},C=P,x=(a("80c3"),a("ce7e")),y=Object(v["a"])(C,_,b,!1,null,"5cf71ef8",null),j=y.exports;p()(y,{VDivider:x["a"]});var w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"box"},[t._v("微信小程序")]),a("div",{staticClass:"box"},[t._v("官网")])])}],E={name:"page3"},$=E,S=(a("3063"),Object(v["a"])($,w,O,!1,null,"445230fe",null)),k=S.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"})},A=[],H={name:"page4"},M=H,V=Object(v["a"])(M,T,A,!1,null,"4ce332c7",null),q=V.exports,J={name:"Home",components:{Page1:h,Page2:j,Page3:k,Page4:q},data:function(){return{options:{menu:"#menu",anchors:["firstPage","secondPage","thirdPage","fourthPage","lastPage"],sectionsColor:["#348f66","#306eb4","rgba(100,50,50,0.7)"],navigation:!0}}}},L=J,z=(a("d236"),Object(v["a"])(L,s,o,!1,null,"a931fe12",null)),D=z.exports,N={name:"App",components:{Home:D},data:function(){return{}}},B=N,F=Object(v["a"])(B,r,i,!1,null,"1dfd8b21",null),G=F.exports,I=(a("d3b7"),a("8c4f"));n["a"].use(I["a"]);var K=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Q=new I["a"]({mode:"history",base:"/",routes:K}),R=Q,U=a("2f62");n["a"].use(U["a"]);var W=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=a("f309");n["a"].use(X["a"]);var Y=new X["a"]({}),Z=(a("a0a0"),a("a45e")),tt=a.n(Z);n["a"].use(tt.a),n["a"].config.productionTip=!1,new n["a"]({router:R,store:W,vuetify:Y,render:function(t){return t(G)}}).$mount("#app")},"80c3":function(t,e,a){"use strict";a("d996")},"8c06":function(t,e,a){},d236:function(t,e,a){"use strict";a("d966")},d966:function(t,e,a){},d996:function(t,e,a){}});
//# sourceMappingURL=index.328635e6.js.map