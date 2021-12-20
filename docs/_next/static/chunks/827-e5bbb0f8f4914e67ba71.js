"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{23499:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{$:function(){return y}});var o=n(4942),a=n(67294),s=n(68718);function l(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var u={};function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),l.apply(void 0,t))}function f(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return c("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],i=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!a(r,e)||i&&!a(o,e))))}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,a.useContext)(s.OO)||{},o=r.i18n,l=r.defaultNS,u=n||o||(0,s.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new s.zv),!u){c("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},y=[p,{},!1];return y.t=p,y.i18n={},y.ready=!1,y}u.options.react&&void 0!==u.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=h(h(h({},(0,s.JP)()),u.options.react),t),m=g.useSuspense,v=g.keyPrefix,b=e||l||u.options&&u.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(b);var w=(u.isInitialized||u.initializedStoreOnce)&&b.every((function(e){return d(e,u,g)}));function S(){return u.getFixedT(null,"fallback"===g.nsMode?b:b[0],v)}var O=(0,a.useState)(S),N=i(O,2),E=N[0],I=N[1],M=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=g.bindI18n,t=g.bindI18nStore;function n(){M.current&&I(S)}return M.current=!0,w||m||f(u,b,(function(){M.current&&I(S)})),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){M.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,b.join()]);var k=(0,a.useRef)(!0);(0,a.useEffect)((function(){M.current&&!k.current&&I(S),k.current=!1}),[u]);var x=[E,u,w];if(x.t=E,x.i18n=u,x.ready=w,w)return x;if(!w&&!m)return x;throw new Promise((function(e){f(u,b,(function(){e()}))}))}},95194:function(e,t,n){var r;n.d(t,{Z:function(){return F}});var i=n(67294),o=Object.defineProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))l.call(t,n)&&u(e,n,t[n]);return e};const f=[null,null,{}];var d=(e,t)=>Object.assign({},e,t);const p=function(e){const t=function(e){return n=n.concat(e.map((e=>f.map(((t,n)=>e[n]?e[n]:t))))),this};let n=[];return t(e),{add:t,set:function(e,t){n[e]=t},reset:function(){n=n.map((e=>(e[2].executed=!1,e)))},getItems:function(){return n.filter((e=>!e[2].executed))},setMeta:function(e,t){n[e][2]=d(n[e][2],t)}}};var h=e=>Array.from(e),y=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,t.body};const g=(e,t=null,n=!1)=>{let r=h(e.childNodes).flatMap((e=>{return 3===(t=e).nodeType||"BR"===t.tagName?e:g(e);var t}));return t&&(r=r.filter((e=>!t.contains(e)))),n?r.reverse():r},m=(e,t=null)=>({node:t,content:e});function v(e){let t=y(e);return g(t).flatMap((e=>e.nodeValue?h(e.nodeValue).map((t=>m(t,e))):m(e)))}function b(e,t=!0){return t?v(e):h(e).map((e=>m(e)))}var w=e=>document.createElement(e),S=e=>document.createTextNode(e),O=(e,t="")=>{let n=w("style");n.id=t,n.appendChild(S(e)),document.head.appendChild(n)},N=e=>Array.isArray(e);const E=e=>Number.isInteger(e),I=(e,t=document,n=!1)=>t["querySelector"+(n?"All":"")](e),M="ti-cursor",k="START",x={started:!1,completed:!1,frozen:!1,destroyed:!1},T={breakLines:!0,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}};var C=({el:e,move:t,cursorPos:n,to:r})=>{if(E(t))return-1*t;return((e,t,n=k)=>{let r=new RegExp("END","i").test(n),i=I(".ti-cursor",t),o=e?I(e,t):t,a=g(o,i,!0),s=a[0],l=a[a.length-1],u=r&&!e?0:g(t,i,!0).findIndex((e=>e.isSameNode(r?s:l)));return r&&u--,u+1})(t,e,r)-n},L=e=>(N(e)||(e=[e/2,e/2]),e),j=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let A=e=>e/2;var D=e=>"value"in e;const P=e=>"function"===typeof e?e():e;var z=e=>"BODY"===e.tagName;const $=(e,t)=>{let n=h(I("*",t,!0));return[t].concat(n.reverse()).find((t=>t.cloneNode().isEqualNode(e.cloneNode())))},H=(e,t,n,r)=>{let i=t.content instanceof HTMLElement,o=t.node,a=null==o?void 0:o.parentNode,s=i?t.content:S(t.content);if(D(e))return void(e.value=`${e.value}${t.content}`);if(!i&&a&&!z(a)){let r=$(a,e);if(r&&((e,t)=>{let n=e.nextSibling;return!n||n.isEqualNode(t)})(r,n))e=r;else{s=a.cloneNode(),s.appendChild(S(t.content));let n=a.parentNode,r=n.cloneNode();if(!z(n)){let t=$(r,e);for(;!t&&!z(n);){let i=r;i.innerHTML=s.outerHTML,s=i,n=n.parentNode,r=n.cloneNode(),t=$(r,e)}e=t||e}}}let l=g(e,n,!0)[r-1],u=l?l.parentNode:e;u.insertBefore(s,u.contains(n)?n:null)};var B=e=>e&&e.remove();const R={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"","margin-left":"-.125em","margin-right":".125em"};function U(e,t={}){const n=async(e,t,n=!1)=>{G.frozen&&await new Promise((e=>{this.unfreeze=()=>{G.frozen=!1,e()}})),n||await K.beforeStep(this),await(async(e,t,n)=>new Promise((r=>{n.push(setTimeout((async()=>{await e(),r()}),t))})))(e,t,F),n||await K.afterStep(this)},r=()=>D(q),i=e=>function(e){let{speed:t,deleteSpeed:n,lifeLike:r}=e;return n=null!==n?n:t/3,r?[j(t,A(t)),j(n,A(n))]:[t,n]}(K)[e],o=(e,t=0)=>e?i(t):0,a=(e,t)=>(X.add(e),((e={})=>{let t=e.delay;t&&X.add([[z,t]])})(t),this),s=()=>(e=>D(e)?h(e.value):g(e,I(".ti-cursor",e),!0))(q),l=(e={})=>[[Z,e],[Z,K]],u=e=>{let t=K.nextStringDelay;X.add([[z,t[0]],...e,[z,t[1]]])},c=async()=>{!r()&&q.appendChild(te),ee&&((e,t,n)=>{let r=`[data-typeit-id='${e}'] .ti-cursor`,i=getComputedStyle(n),o=Object.entries(R).reduce(((e,[t,n])=>`${e} ${t}: var(--ti-cursor-${t}, ${n||i[t]});`),"");O(`@keyframes blink-${e} { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } ${r} { display: inline; letter-spacing: -1em; ${o} animation: blink-${e} ${t.cursorSpeed/1e3}s infinite; } ${r}.with-delay { animation-delay: 500ms; } ${r}.disabled { animation: none; }`,e)})(W,K,q)},f=e=>{ee&&(te.classList.toggle("disabled",e),te.classList.toggle("with-delay",!e))},S=async()=>{G.started=!0;let e=X.getItems();try{for(let n=0;n<e.length;n++){let t=e[n],r=t[2];r.freezeCursor&&f(!0),await t[0].call(this,t[1],r),X.setMeta(n,{executed:!0}),f(!1)}if(G.completed=!0,await K.afterComplete(this),!K.loop)throw"";let t=K.loopDelay;n((async()=>{await(async e=>{J&&await $({value:J}),X.reset(),X.set(0,[z,e,{}]),await _({num:null})})(t[0]),S()}),t[1])}catch(t){}return this},z=(e=0)=>n((()=>{}),e),$=async({value:e,to:t=k,instant:r=!1})=>{let a=C({el:q,move:e,cursorPos:J,to:t}),l=()=>{var e,t,n;e=a<0?-1:1,t=J,n=s(),J=Math.min(Math.max(t+e,0),n.length),((e,t,n,r)=>{let i=t[r-1];(e=(null==i?void 0:i.parentNode)||e).insertBefore(n,i||null)})(q,s(),te,J)};await n((async()=>{for(let e=0;e<Math.abs(a);e++)r?l():await n(l,i(0))}),o(r))},U=({chars:e,instant:t,silent:r})=>n((async()=>{const o=e=>H(q,e,te,J);r||await K.beforeString(e,this);for(let r=0;r<e.length;r++)t?o(e[r]):await n((()=>{o(e[r])}),i(0));r||await K.afterString(e,this)}),o(t),!0),Z=async e=>{K=d(K,e)},V=async()=>{r()?q.value="":s().forEach((e=>{B(e)}))},_=async({num:e=null,instant:t=!1,to:a=k})=>{await n((async()=>{let o=E(e)?e:C({el:q,move:e,cursorPos:J,to:a});const l=()=>{let e=s();var t;e.length&&(r()?q.value=q.value.slice(0,-1):(B(e[J]),t=te,I("*",q,!0).forEach((e=>{if(!e.innerHTML&&"BR"!==e.tagName&&!e.isSameNode(t)){let t=e;for(;1===t.parentElement.childNodes.length;)t=t.parentElement;B(t)}}))))};for(let e=0;e<o;e++)t?l():await n(l,i(1))}),o(t,1)),null===e&&s().length-1>0&&await _({num:null})};this.break=function(e){const t=m(w("BR"));return a([[U,{chars:[t],silent:!0}]],e)},this.delete=function(e=null,t={}){e=P(e);let n=l(t),r=e,{instant:i,to:o}=t;return a([n[0],[_,{num:r,instant:i,to:o},Q],n[1]],t)},this.empty=function(e={}){return a([[V]],e)},this.exec=function(e,t){let n=l(t);return a([n[0],[e,null],n[1]],t)},this.move=function(e,t={}){e=P(e);let n=l(t),{instant:r,to:i}=t,o={value:null===e?"":e,to:i,instant:r};return a([n[0],[$,o,Q],n[1]],t)},this.options=function(e){return e=P(e),a([[Z,e]],e)},this.pause=function(e,t={}){return a([[z,P(e)]],t)},this.type=function(e,t={}){e=P(e);let n=l(t),r=b(e,K.html),{instant:i}=t,o=[n[0],[U,{chars:r,instant:i},Q],n[1]];return a(o,t)},this.is=function(e){return G[e]},this.destroy=function(e=!0){F.forEach((e=>clearTimeout(e))),F=[],P(e)&&B(te),G.destroyed=!0},this.freeze=function(){G.frozen=!0},this.unfreeze=function(){},this.reset=function(){!this.is("destroyed")&&this.destroy(),X.reset(),J=0;for(let e in G)G[e]=!1;return q[r()?"value":"innerHTML"]="",this},this.go=function(){return G.started?this:(c(),K.waitUntilVisible?(((e,t)=>{new IntersectionObserver(((n,r)=>{n.forEach((n=>{n.isIntersecting&&(t(),r.unobserve(e))}))}),{threshold:1}).observe(e)})(q,S.bind(this)),this):(S(),this))},this.getQueue=function(){return X},this.getOptions=function(){return K},this.getElement=function(){return q};let q="string"===typeof(Y=e)?I(Y):Y;var Y;let F=[],J=0,Q={freezeCursor:!0},G=d({},x),K=d(T,t);K=d(K,{html:!r()&&K.html,nextStringDelay:L(K.nextStringDelay),loopDelay:L(K.loopDelay)});let W=Math.random().toString().substring(2,9),X=p([[z,K.startDelay]]);q.dataset.typeitId=W,O("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}");let ee=K.cursor&&!r(),te=(()=>{if(r())return;let e=w("span");return e.className=M,ee?(e.innerHTML=y(K.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)})();var ne;K.strings=(e=>{let t=q.innerHTML;return t?(q.innerHTML="",K.startDelete?(v(t).forEach((e=>{H(q,e,te,J)})),u([[_,{num:null}]]),e):t.trim().split(/<br(?:\s*?)(?:\/)?>/).concat(e)):e})((ne=K.strings,N(ne)?ne:[ne])),K.strings.length&&(()=>{let e=K.strings.filter((e=>!!e));e.forEach(((t,n)=>{let r=b(t,K.html);if(X.add([[U,{chars:r},Q]]),n+1===e.length)return;const i=K.breakLines?[[U,{chars:[m(w("BR"))],silent:!0},Q]]:[[_,{num:r.length},Q]];u(i)}))})()}const Z=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"];const{useRef:V,useEffect:_,useState:q,useMemo:Y}=r||(r=n.t(i,2)),F=e=>{const[t,n]=q(!0),r=V(null),o=e,{options:u,as:f,children:d,getBeforeInit:p,getAfterInit:h}=o,y=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(o,["options","as","children","getBeforeInit","getAfterInit"]),g=f,m=Y((()=>{return e=g,Z.indexOf(e.toLowerCase())>-1;var e}),[g]);return _((()=>{d&&(u.strings=r.current.innerHTML),n(!1)}),[]),_((()=>{if(t)return;let e=new U(r.current,c({},u));return e=p(e),e.go(),e=h(e),()=>{e.destroy()}}),[t]),i.createElement("div",{style:{opacity:t?0:1}},m?i.createElement(g,c({ref:r},y)):i.createElement(g,c({ref:r},y),t&&d))};F.defaultProps={as:"span",options:{},getBeforeInit:e=>e,getAfterInit:e=>e}},83789:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(56586);var i=n(16988);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);