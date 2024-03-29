import{r as l,R as B,a as Se,j as f,L as N,u as je}from"./index-YEnIk7Mb.js";import{m as Oe,c as $e,g as ke,R as Ce,p as g,a as ae,b as Re}from"./api-Bfsvy46h.js";if(!l.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!Oe)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function Ne(e){e()}function Te(e){e||(e=Ne),$e({reactionScheduler:e})}function Ie(e){return ke(e)}var Fe=1e4,_e=1e4,Ae=function(){function e(t){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(a){a===void 0&&(a=Fe),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var n=Date.now();r.registrations.forEach(function(o,i){n-o.registeredAt>=a&&(r.finalize(o.value),r.registrations.delete(i))}),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(t,r,a){this.registrations.set(a,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.registrations.delete(t)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,_e))}}),e}(),De=typeof FinalizationRegistry<"u"?FinalizationRegistry:Ae,H=new De(function(e){var t;(t=e.reaction)===null||t===void 0||t.dispose(),e.reaction=null}),ce={exports:{}},ue={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=l;function Le(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Le,Me=k.useState,Ve=k.useEffect,Ue=k.useLayoutEffect,Be=k.useDebugValue;function He(e,t){var r=t(),a=Me({inst:{value:r,getSnapshot:t}}),n=a[0].inst,o=a[1];return Ue(function(){n.value=r,n.getSnapshot=t,z(n)&&o({inst:n})},[e,r,t]),Ve(function(){return z(n)&&o({inst:n}),e(function(){z(n)&&o({inst:n})})},[e]),Be(r),r}function z(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ze(e,r)}catch{return!0}}function qe(e,t){return t()}var Ge=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?qe:He;ue.useSyncExternalStore=k.useSyncExternalStore!==void 0?k.useSyncExternalStore:Ge;ce.exports=ue;var Ye=ce.exports;function ne(e){e.reaction=new Ce("observer".concat(e.name),function(){var t;e.stateVersion=Symbol(),(t=e.onStoreChange)===null||t===void 0||t.call(e)})}function Ke(e,t){t===void 0&&(t="observed");var r=B.useRef(null);if(!r.current){var a={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(s){return H.unregister(a),a.onStoreChange=s,a.reaction||(ne(a),a.stateVersion=Symbol()),function(){var c;a.onStoreChange=null,(c=a.reaction)===null||c===void 0||c.dispose(),a.reaction=null}},getSnapshot:function(){return a.stateVersion}};r.current=a}var n=r.current;n.reaction||(ne(n),H.register(r,n,n)),B.useDebugValue(n.reaction,Ie),Ye.useSyncExternalStore(n.subscribe,n.getSnapshot,n.getSnapshot);var o,i;if(n.reaction.track(function(){try{o=e()}catch(s){i=s}}),i)throw i;return o}var M,V,de=typeof Symbol=="function"&&Symbol.for,Ze=(V=(M=Object.getOwnPropertyDescriptor(function(){},"name"))===null||M===void 0?void 0:M.configurable)!==null&&V!==void 0?V:!1,oe=de?Symbol.for("react.forward_ref"):typeof l.forwardRef=="function"&&l.forwardRef(function(e){return null}).$$typeof,ie=de?Symbol.for("react.memo"):typeof l.memo=="function"&&l.memo(function(e){return null}).$$typeof;function fe(e,t){var r;if(ie&&e.$$typeof===ie)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var a=(r=t==null?void 0:t.forwardRef)!==null&&r!==void 0?r:!1,n=e,o=e.displayName||e.name;if(oe&&e.$$typeof===oe&&(a=!0,n=e.render,typeof n!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var i=function(s,c){return Ke(function(){return n(s,c)},o)};return i.displayName=e.displayName,Ze&&Object.defineProperty(i,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(i.contextTypes=e.contextTypes),a&&(i=l.forwardRef(i)),i=l.memo(i),Xe(e,i),i}var We={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function Xe(e,t){Object.keys(e).forEach(function(r){We[r]||Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}var U;Te(Se.unstable_batchedUpdates);U=H.finalizeAllImmediately;const Je=()=>{g.setCurrentPage(g.currentPage+1)},Qe=()=>{g.setCurrentPage(g.currentPage-1)},et=(e,t,r)=>{let a=Math.max(1,e-Math.floor(r/2)),n=Math.min(a+r-1,t);return t<r?(a=1,n=t):(e>t-Math.floor(r/2)&&(a=t-r+1),e<=Math.floor(r/2)&&(n=r)),[a,n]},tt=({totalPages:e})=>{const[r,a]=l.useState(1),[n,o]=l.useState(10);B.useEffect(()=>{const[s,c]=et(g.currentPage,e,10);a(s),o(c)},[g.currentPage,e]);const i=[];for(let s=r;s<=n;s++)i.push(s);return f.jsxs("div",{className:"pagination_container",children:[g.currentPage===1?f.jsx("button",{className:"prev",disabled:!0,children:"prev"}):f.jsx("button",{className:"prev",children:f.jsx(N,{to:`/home/${g.currentPage-1}`,onClick:Qe,children:"prev"})}),f.jsx("div",{className:"pagi_button_container",children:i.map(s=>f.jsx("button",{className:`pagi_button ${g.currentPage===s?"active":""}`,children:f.jsx(N,{to:`/home/${s}`,onClick:()=>g.setCurrentPage(s),"aria-disabled":g.currentPage===s,children:s})},s))}),g.currentPage===e?f.jsx("button",{className:"next",disabled:!0,children:"next"}):f.jsx("button",{className:"next",children:f.jsx(N,{to:`/home/${g.currentPage+1}`,onClick:Je,children:"next"})})]})},rt=fe(tt);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var S=function(){return S=Object.assign||function(t){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},S.apply(this,arguments)};function at(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r}var nt=function(){return Math.random().toString(36).substring(6)},ot=function(e){var t=e.animate,r=t===void 0?!0:t,a=e.backgroundColor,n=a===void 0?"#f5f6f7":a,o=e.backgroundOpacity,i=o===void 0?1:o,s=e.baseUrl,c=s===void 0?"":s,u=e.children,p=e.foregroundColor,d=p===void 0?"#eee":p,h=e.foregroundOpacity,m=h===void 0?1:h,v=e.gradientRatio,b=v===void 0?2:v,O=e.uniqueKey,x=e.rtl,ye=x===void 0?!1:x,K=e.speed,ve=K===void 0?1.2:K,Z=e.style,be=Z===void 0?{}:Z,W=e.title,X=W===void 0?"Loading...":W,J=e.beforeMask,D=J===void 0?null:J,xe=at(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),L=O||nt(),Q="".concat(L,"-diff"),ee="".concat(L,"-animated-diff"),te="".concat(L,"-aria"),we=ye?{transform:"scaleX(-1)"}:null,Ee="".concat(ve,"s"),re="".concat(b*-1," 0"),Pe="".concat(b," 0");return l.createElement("svg",S({"aria-labelledby":te,role:"img",style:S(S({},be),we)},xe),X?l.createElement("title",{id:te},X):null,D&&l.isValidElement(D)?D:null,l.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(c,"#").concat(Q,")"),style:{fill:"url(".concat(c,"#").concat(ee,")")}}),l.createElement("defs",null,l.createElement("clipPath",{id:Q},u),l.createElement("linearGradient",{id:ee,gradientTransform:"translate(".concat(re,")")},l.createElement("stop",{offset:"0%",stopColor:n,stopOpacity:i}),l.createElement("stop",{offset:"50%",stopColor:d,stopOpacity:m}),l.createElement("stop",{offset:"100%",stopColor:n,stopOpacity:i}),r&&l.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(re,"; 0 0; ").concat(Pe),dur:Ee,repeatCount:"indefinite"}))))},pe=function(e){return e.children?l.createElement(ot,S({},e)):l.createElement(it,S({},e))},it=function(e){return l.createElement(pe,S({viewBox:"0 0 476 124"},e),l.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),l.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),l.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),l.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),l.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),l.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const st=pe,lt=()=>f.jsx("div",{className:"grid-loader",children:f.jsx(st,{speed:2,width:120,height:120,viewBox:"0 0 120 120",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",className:"grid-loader-item",children:f.jsx("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"120",height:"120"})})}),ct=e=>{const t=parseInt(e.target.value,10);g.setItemsPerPage(t),sessionStorage.setItem("limit",g.itemsPerPage.toString())},ut=(e,t,r)=>{const[a,n]=l.useState(""),[o,i]=l.useState(),[s,c]=l.useState(),u=h=>{const m=h.target.value;n(m),setTimeout(()=>{p(m)},500)},p=h=>{const m=r==null?void 0:r.filter(v=>{var b;return(b=v.name)==null?void 0:b.toLowerCase().includes(h.toLowerCase())});c(m==null?void 0:m.length),i(m)},d=o==null?void 0:o.slice(e,e+t);return{filteredPokemons:o,filteredPokemonsPaginated:d,handleSearchChange:u,searchTerm:a,filteredPokemonsCount:s,setSearchTerm:n}},dt=({value:e,onChange:t})=>f.jsx("input",{type:"search",value:e||"",onChange:t,placeholder:"Search Pokemon",className:"search_input"}),ft=({value:e,onChange:t})=>f.jsxs("div",{className:"limitChange",children:[f.jsx("label",{htmlFor:"limit",children:"Items per page:"}),f.jsxs("select",{id:"limit",value:e,onChange:t,children:[f.jsx("option",{value:10,children:"10"}),f.jsx("option",{value:20,children:"20"})]})]}),pt=({setLoading:e,offset:t,limit:r,setPokemons:a,setNumberOfPoke:n,setAllPoke:o,page:i})=>{l.useEffect(()=>{e(!0);const s=new AbortController,c=s.signal,u=async()=>{try{const d=await ae(t,r,c);a(d==null?void 0:d.results),d!=null&&d.count&&n(d==null?void 0:d.count)}catch(d){console.log(d)}finally{e(!1)}},p=async()=>{try{const d=await ae(0,1302,c);o(d==null?void 0:d.results)}catch(d){console.log(d)}};return u(),p(),()=>{s.abort()}},[i,r,t,e,a,n,o])},mt=({pokemon:e})=>{const[t,r]=l.useState("");return l.useEffect(()=>{const a=new AbortController,n=a.signal;return(async()=>{try{if(e!==void 0){const i=await Re(e,n);r(i)}}catch(i){console.log(i)}})(),()=>{a.abort()}},[e]),f.jsxs(N,{className:"link",to:`/pokemonPage/${e}`,children:[f.jsx("p",{className:"pokemom_p",children:e}),t&&f.jsx("img",{src:t,alt:"",className:"imgOnHome"})]})};let gt={data:""},ht=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||gt,yt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,vt=/\/\*[^]*?\*\/|  +/g,se=/\n+/g,P=(e,t)=>{let r="",a="",n="";for(let o in e){let i=e[o];o[0]=="@"?o[1]=="i"?r=o+" "+i+";":a+=o[1]=="f"?P(i,o):o+"{"+P(i,o[1]=="k"?"":t)+"}":typeof i=="object"?a+=P(i,t?t.replace(/([^,])+/g,s=>o.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,s):s?s+" "+c:c)):o):i!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=P.p?P.p(o,i):o+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+a},w={},me=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+me(e[r]);return t}return e},bt=(e,t,r,a,n)=>{let o=me(e),i=w[o]||(w[o]=(c=>{let u=0,p=11;for(;u<c.length;)p=101*p+c.charCodeAt(u++)>>>0;return"go"+p})(o));if(!w[i]){let c=o!==e?e:(u=>{let p,d,h=[{}];for(;p=yt.exec(u.replace(vt,""));)p[4]?h.shift():p[3]?(d=p[3].replace(se," ").trim(),h.unshift(h[0][d]=h[0][d]||{})):h[0][p[1]]=p[2].replace(se," ").trim();return h[0]})(e);w[i]=P(n?{["@keyframes "+i]:c}:c,r?"":"."+i)}let s=r&&w.g?w.g:null;return r&&(w.g=w[i]),((c,u,p,d)=>{d?u.data=u.data.replace(d,c):u.data.indexOf(c)===-1&&(u.data=p?c+u.data:u.data+c)})(w[i],t,a,s),i},xt=(e,t,r)=>e.reduce((a,n,o)=>{let i=t[o];if(i&&i.call){let s=i(r),c=s&&s.props&&s.props.className||/^go/.test(s)&&s;i=c?"."+c:s&&typeof s=="object"?s.props?"":P(s,""):s===!1?"":s}return a+n+(i??"")},"");function A(e){let t=this||{},r=e.call?e(t.p):e;return bt(r.unshift?r.raw?xt(r,[].slice.call(arguments,1),t.p):r.reduce((a,n)=>Object.assign(a,n&&n.call?n(t.p):n),{}):r,ht(t.target),t.g,t.o,t.k)}let ge,q,G;A.bind({g:1});let E=A.bind({k:1});function wt(e,t,r,a){P.p=t,ge=e,q=r,G=a}function j(e,t){let r=this||{};return function(){let a=arguments;function n(o,i){let s=Object.assign({},o),c=s.className||n.className;r.p=Object.assign({theme:q&&q()},s),r.o=/ *go\d+/.test(c),s.className=A.apply(r,a)+(c?" "+c:""),t&&(s.ref=i);let u=e;return e[0]&&(u=s.as||e,delete s.as),G&&u[0]&&G(s),ge(u,s)}return t?t(n):n}}var Et=e=>typeof e=="function",_=(e,t)=>Et(e)?e(t):e,Pt=(()=>{let e=0;return()=>(++e).toString()})(),he=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),St=20,T=new Map,jt=1e3,le=e=>{if(T.has(e))return;let t=setTimeout(()=>{T.delete(e),$({type:4,toastId:e})},jt);T.set(e,t)},Ot=e=>{let t=T.get(e);t&&clearTimeout(t)},Y=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,St)};case 1:return t.toast.id&&Ot(t.toast.id),{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:r}=t;return e.toasts.find(o=>o.id===r.id)?Y(e,{type:1,toast:r}):Y(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?le(a):e.toasts.forEach(o=>{le(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===a||a===void 0?{...o,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+n}))}}},I=[],F={toasts:[],pausedAt:void 0},$=e=>{F=Y(F,e),I.forEach(t=>{t(F)})},$t={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},kt=(e={})=>{let[t,r]=l.useState(F);l.useEffect(()=>(I.push(r),()=>{let n=I.indexOf(r);n>-1&&I.splice(n,1)}),[t]);let a=t.toasts.map(n=>{var o,i;return{...e,...e[n.type],...n,duration:n.duration||((o=e[n.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||$t[n.type],style:{...e.style,...(i=e[n.type])==null?void 0:i.style,...n.style}}});return{...t,toasts:a}},Ct=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Pt()}),C=e=>(t,r)=>{let a=Ct(t,e,r);return $({type:2,toast:a}),a.id},y=(e,t)=>C("blank")(e,t);y.error=C("error");y.success=C("success");y.loading=C("loading");y.custom=C("custom");y.dismiss=e=>{$({type:3,toastId:e})};y.remove=e=>$({type:4,toastId:e});y.promise=(e,t,r)=>{let a=y.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(n=>(y.success(_(t.success,n),{id:a,...r,...r==null?void 0:r.success}),n)).catch(n=>{y.error(_(t.error,n),{id:a,...r,...r==null?void 0:r.error})}),e};var Rt=(e,t)=>{$({type:1,toast:{id:e,height:t}})},Nt=()=>{$({type:5,time:Date.now()})},Tt=e=>{let{toasts:t,pausedAt:r}=kt(e);l.useEffect(()=>{if(r)return;let o=Date.now(),i=t.map(s=>{if(s.duration===1/0)return;let c=(s.duration||0)+s.pauseDuration-(o-s.createdAt);if(c<0){s.visible&&y.dismiss(s.id);return}return setTimeout(()=>y.dismiss(s.id),c)});return()=>{i.forEach(s=>s&&clearTimeout(s))}},[t,r]);let a=l.useCallback(()=>{r&&$({type:6,time:Date.now()})},[r]),n=l.useCallback((o,i)=>{let{reverseOrder:s=!1,gutter:c=8,defaultPosition:u}=i||{},p=t.filter(m=>(m.position||u)===(o.position||u)&&m.height),d=p.findIndex(m=>m.id===o.id),h=p.filter((m,v)=>v<d&&m.visible).length;return p.filter(m=>m.visible).slice(...s?[h+1]:[0,h]).reduce((m,v)=>m+(v.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:Rt,startPause:Nt,endPause:a,calculateOffset:n}}},It=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ft=E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_t=E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,At=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${It} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ft} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${_t} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Dt=E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Lt=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Dt} 1s linear infinite;
`,zt=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Mt=E`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Vt=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Mt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ut=j("div")`
  position: absolute;
`,Bt=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ht=E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qt=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ht} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Gt=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return t!==void 0?typeof t=="string"?l.createElement(qt,null,t):t:r==="blank"?null:l.createElement(Bt,null,l.createElement(Lt,{...a}),r!=="loading"&&l.createElement(Ut,null,r==="error"?l.createElement(At,{...a}):l.createElement(Vt,{...a})))},Yt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Kt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Zt="0%{opacity:0;} 100%{opacity:1;}",Wt="0%{opacity:1;} 100%{opacity:0;}",Xt=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Jt=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Qt=(e,t)=>{let r=e.includes("top")?1:-1,[a,n]=he()?[Zt,Wt]:[Yt(r),Kt(r)];return{animation:t?`${E(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},er=l.memo(({toast:e,position:t,style:r,children:a})=>{let n=e.height?Qt(e.position||t||"top-center",e.visible):{opacity:0},o=l.createElement(Gt,{toast:e}),i=l.createElement(Jt,{...e.ariaProps},_(e.message,e));return l.createElement(Xt,{className:e.className,style:{...n,...r,...e.style}},typeof a=="function"?a({icon:o,message:i}):l.createElement(l.Fragment,null,o,i))});wt(l.createElement);var tr=({id:e,className:t,style:r,onHeightUpdate:a,children:n})=>{let o=l.useCallback(i=>{if(i){let s=()=>{let c=i.getBoundingClientRect().height;a(e,c)};s(),new MutationObserver(s).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return l.createElement("div",{ref:o,className:t,style:r},n)},rr=(e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:he()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...n}},ar=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,R=16,nr=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:n,containerStyle:o,containerClassName:i})=>{let{toasts:s,handlers:c}=Tt(r);return l.createElement("div",{style:{position:"fixed",zIndex:9999,top:R,left:R,right:R,bottom:R,pointerEvents:"none",...o},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},s.map(u=>{let p=u.position||t,d=c.calculateOffset(u,{reverseOrder:e,gutter:a,defaultPosition:t}),h=rr(p,d);return l.createElement(tr,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?ar:"",style:h},u.type==="custom"?_(u.message,u):n?n(u):l.createElement(er,{toast:u,position:p}))}))};const sr=fe(()=>{const{page:e}=je(),[t,r]=l.useState(),[a,n]=l.useState(),o=g.itemsPerPage,i=(g.currentPage-1)*o,[s,c]=l.useState(),[u,p]=l.useState(!1),[d,h]=l.useState();l.useEffect(()=>{const O=sessionStorage.getItem("currentPage");g.setCurrentPage(O?parseInt(O,10):1);const x=sessionStorage.getItem("limit");x&&g.setItemsPerPage(parseInt(x,10))},[]),l.useEffect(()=>{sessionStorage.setItem("currentPage",g.currentPage.toString())},[g.currentPage]),pt({loading:u,setLoading:p,offset:i,limit:o,setPokemons:r,setNumberOfPoke:n,setAllPoke:c,page:e});const{filteredPokemons:m,handleSearchChange:v,searchTerm:b}=ut(i,o,s);return l.useEffect(()=>{h(b===""?t:m)},[t,m,b]),f.jsxs("main",{className:"main_container",children:[f.jsx(nr,{position:"top-right",reverseOrder:!1}),f.jsxs("div",{className:"inputAndLabel",children:[f.jsx(dt,{onChange:v,value:b}),f.jsx(ft,{onChange:ct,value:o})]}),f.jsxs("div",{className:"content_container",children:[u?f.jsx("div",{className:"pokemons",children:[...Array(o)].map((O,x)=>f.jsx(lt,{},x))}):f.jsx("div",{className:"pokemons",children:d==null?void 0:d.map((O,x)=>f.jsx(mt,{pokemon:O.name},x))}),f.jsx(rt,{totalPages:Math.ceil(((b===""?a:m==null?void 0:m.length)??0)/o),currentPage:g.currentPage})]})]})});export{sr as default};
