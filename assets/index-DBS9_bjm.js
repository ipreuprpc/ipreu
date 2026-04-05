const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboard-CY8Xeh9s.js","assets/CheckCircleIcon-C1U06dBO.js","assets/MemberDashboard-DrZMh3_R.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ev(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Md={exports:{}},Wa={},Fd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function fT(){if(Jg)return Pe;Jg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function N(x){return x===null||typeof x!="object"?null:(x=A&&x[A]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function q(x,H,ae){this.props=x,this.context=H,this.refs=Y,this.updater=ae||B}q.prototype.isReactComponent={},q.prototype.setState=function(x,H){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,H,"setState")},q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ge(){}ge.prototype=q.prototype;function ve(x,H,ae){this.props=x,this.context=H,this.refs=Y,this.updater=ae||B}var Te=ve.prototype=new ge;Te.constructor=ve,Q(Te,q.prototype),Te.isPureReactComponent=!0;var fe=Array.isArray,ke=Object.prototype.hasOwnProperty,Se={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function R(x,H,ae){var Ce,Ie={},ze=null,be=null;if(H!=null)for(Ce in H.ref!==void 0&&(be=H.ref),H.key!==void 0&&(ze=""+H.key),H)ke.call(H,Ce)&&!D.hasOwnProperty(Ce)&&(Ie[Ce]=H[Ce]);var je=arguments.length-2;if(je===1)Ie.children=ae;else if(1<je){for(var Ve=Array(je),Rt=0;Rt<je;Rt++)Ve[Rt]=arguments[Rt+2];Ie.children=Ve}if(x&&x.defaultProps)for(Ce in je=x.defaultProps,je)Ie[Ce]===void 0&&(Ie[Ce]=je[Ce]);return{$$typeof:n,type:x,key:ze,ref:be,props:Ie,_owner:Se.current}}function C(x,H){return{$$typeof:n,type:x.type,key:H,ref:x.ref,props:x.props,_owner:x._owner}}function V(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function I(x){var H={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ae){return H[ae]})}var b=/\/+/g;function T(x,H){return typeof x=="object"&&x!==null&&x.key!=null?I(""+x.key):H.toString(36)}function ue(x,H,ae,Ce,Ie){var ze=typeof x;(ze==="undefined"||ze==="boolean")&&(x=null);var be=!1;if(x===null)be=!0;else switch(ze){case"string":case"number":be=!0;break;case"object":switch(x.$$typeof){case n:case e:be=!0}}if(be)return be=x,Ie=Ie(be),x=Ce===""?"."+T(be,0):Ce,fe(Ie)?(ae="",x!=null&&(ae=x.replace(b,"$&/")+"/"),ue(Ie,H,ae,"",function(Rt){return Rt})):Ie!=null&&(V(Ie)&&(Ie=C(Ie,ae+(!Ie.key||be&&be.key===Ie.key?"":(""+Ie.key).replace(b,"$&/")+"/")+x)),H.push(Ie)),1;if(be=0,Ce=Ce===""?".":Ce+":",fe(x))for(var je=0;je<x.length;je++){ze=x[je];var Ve=Ce+T(ze,je);be+=ue(ze,H,ae,Ve,Ie)}else if(Ve=N(x),typeof Ve=="function")for(x=Ve.call(x),je=0;!(ze=x.next()).done;)ze=ze.value,Ve=Ce+T(ze,je++),be+=ue(ze,H,ae,Ve,Ie);else if(ze==="object")throw H=String(x),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return be}function Fe(x,H,ae){if(x==null)return x;var Ce=[],Ie=0;return ue(x,Ce,"","",function(ze){return H.call(ae,ze,Ie++)}),Ce}function Ae(x){if(x._status===-1){var H=x._result;H=H(),H.then(function(ae){(x._status===0||x._status===-1)&&(x._status=1,x._result=ae)},function(ae){(x._status===0||x._status===-1)&&(x._status=2,x._result=ae)}),x._status===-1&&(x._status=0,x._result=H)}if(x._status===1)return x._result.default;throw x._result}var Re={current:null},Z={transition:null},ce={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Se};return Pe.Children={map:Fe,forEach:function(x,H,ae){Fe(x,function(){H.apply(this,arguments)},ae)},count:function(x){var H=0;return Fe(x,function(){H++}),H},toArray:function(x){return Fe(x,function(H){return H})||[]},only:function(x){if(!V(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Pe.Component=q,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=ve,Pe.StrictMode=i,Pe.Suspense=g,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Pe.cloneElement=function(x,H,ae){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Ce=Q({},x.props),Ie=x.key,ze=x.ref,be=x._owner;if(H!=null){if(H.ref!==void 0&&(ze=H.ref,be=Se.current),H.key!==void 0&&(Ie=""+H.key),x.type&&x.type.defaultProps)var je=x.type.defaultProps;for(Ve in H)ke.call(H,Ve)&&!D.hasOwnProperty(Ve)&&(Ce[Ve]=H[Ve]===void 0&&je!==void 0?je[Ve]:H[Ve])}var Ve=arguments.length-2;if(Ve===1)Ce.children=ae;else if(1<Ve){je=Array(Ve);for(var Rt=0;Rt<Ve;Rt++)je[Rt]=arguments[Rt+2];Ce.children=je}return{$$typeof:n,type:x.type,key:Ie,ref:ze,props:Ce,_owner:be}},Pe.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:l,_context:x},x.Consumer=x},Pe.createElement=R,Pe.createFactory=function(x){var H=R.bind(null,x);return H.type=x,H},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(x){return{$$typeof:f,render:x}},Pe.isValidElement=V,Pe.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:Ae}},Pe.memo=function(x,H){return{$$typeof:_,type:x,compare:H===void 0?null:H}},Pe.startTransition=function(x){var H=Z.transition;Z.transition={};try{x()}finally{Z.transition=H}},Pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Pe.useCallback=function(x,H){return Re.current.useCallback(x,H)},Pe.useContext=function(x){return Re.current.useContext(x)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(x){return Re.current.useDeferredValue(x)},Pe.useEffect=function(x,H){return Re.current.useEffect(x,H)},Pe.useId=function(){return Re.current.useId()},Pe.useImperativeHandle=function(x,H,ae){return Re.current.useImperativeHandle(x,H,ae)},Pe.useInsertionEffect=function(x,H){return Re.current.useInsertionEffect(x,H)},Pe.useLayoutEffect=function(x,H){return Re.current.useLayoutEffect(x,H)},Pe.useMemo=function(x,H){return Re.current.useMemo(x,H)},Pe.useReducer=function(x,H,ae){return Re.current.useReducer(x,H,ae)},Pe.useRef=function(x){return Re.current.useRef(x)},Pe.useState=function(x){return Re.current.useState(x)},Pe.useSyncExternalStore=function(x,H,ae){return Re.current.useSyncExternalStore(x,H,ae)},Pe.useTransition=function(){return Re.current.useTransition()},Pe.version="18.2.0",Pe}var Xg;function Vf(){return Xg||(Xg=1,Fd.exports=fT()),Fd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function pT(){if(Zg)return Wa;Zg=1;var n=Vf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var w,A={},N=null,B=null;_!==void 0&&(N=""+_),g.key!==void 0&&(N=""+g.key),g.ref!==void 0&&(B=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(A[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)A[w]===void 0&&(A[w]=g[w]);return{$$typeof:e,type:f,key:N,ref:B,props:A,_owner:o.current}}return Wa.Fragment=t,Wa.jsx=h,Wa.jsxs=h,Wa}var ey;function mT(){return ey||(ey=1,Md.exports=pT()),Md.exports}var k=mT(),Ge=Vf();const tv=ev(Ge);var Wu={},Ud={exports:{}},Zt={},jd={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function gT(){return ty||(ty=1,(function(n){function e(Z,ce){var x=Z.length;Z.push(ce);e:for(;0<x;){var H=x-1>>>1,ae=Z[H];if(0<o(ae,ce))Z[H]=ce,Z[x]=ae,x=H;else break e}}function t(Z){return Z.length===0?null:Z[0]}function i(Z){if(Z.length===0)return null;var ce=Z[0],x=Z.pop();if(x!==ce){Z[0]=x;e:for(var H=0,ae=Z.length,Ce=ae>>>1;H<Ce;){var Ie=2*(H+1)-1,ze=Z[Ie],be=Ie+1,je=Z[be];if(0>o(ze,x))be<ae&&0>o(je,ze)?(Z[H]=je,Z[be]=x,H=be):(Z[H]=ze,Z[Ie]=x,H=Ie);else if(be<ae&&0>o(je,x))Z[H]=je,Z[be]=x,H=be;else break e}}return ce}function o(Z,ce){var x=Z.sortIndex-ce.sortIndex;return x!==0?x:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var g=[],_=[],w=1,A=null,N=3,B=!1,Q=!1,Y=!1,q=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Te(Z){for(var ce=t(_);ce!==null;){if(ce.callback===null)i(_);else if(ce.startTime<=Z)i(_),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(_)}}function fe(Z){if(Y=!1,Te(Z),!Q)if(t(g)!==null)Q=!0,Ae(ke);else{var ce=t(_);ce!==null&&Re(fe,ce.startTime-Z)}}function ke(Z,ce){Q=!1,Y&&(Y=!1,ge(R),R=-1),B=!0;var x=N;try{for(Te(ce),A=t(g);A!==null&&(!(A.expirationTime>ce)||Z&&!I());){var H=A.callback;if(typeof H=="function"){A.callback=null,N=A.priorityLevel;var ae=H(A.expirationTime<=ce);ce=n.unstable_now(),typeof ae=="function"?A.callback=ae:A===t(g)&&i(g),Te(ce)}else i(g);A=t(g)}if(A!==null)var Ce=!0;else{var Ie=t(_);Ie!==null&&Re(fe,Ie.startTime-ce),Ce=!1}return Ce}finally{A=null,N=x,B=!1}}var Se=!1,D=null,R=-1,C=5,V=-1;function I(){return!(n.unstable_now()-V<C)}function b(){if(D!==null){var Z=n.unstable_now();V=Z;var ce=!0;try{ce=D(!0,Z)}finally{ce?T():(Se=!1,D=null)}}else Se=!1}var T;if(typeof ve=="function")T=function(){ve(b)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Fe=ue.port2;ue.port1.onmessage=b,T=function(){Fe.postMessage(null)}}else T=function(){q(b,0)};function Ae(Z){D=Z,Se||(Se=!0,T())}function Re(Z,ce){R=q(function(){Z(n.unstable_now())},ce)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_continueExecution=function(){Q||B||(Q=!0,Ae(ke))},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return N},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(Z){switch(N){case 1:case 2:case 3:var ce=3;break;default:ce=N}var x=N;N=ce;try{return Z()}finally{N=x}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var x=N;N=Z;try{return ce()}finally{N=x}},n.unstable_scheduleCallback=function(Z,ce,x){var H=n.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?H+x:H):x=H,Z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=x+ae,Z={id:w++,callback:ce,priorityLevel:Z,startTime:x,expirationTime:ae,sortIndex:-1},x>H?(Z.sortIndex=x,e(_,Z),t(g)===null&&Z===t(_)&&(Y?(ge(R),R=-1):Y=!0,Re(fe,x-H))):(Z.sortIndex=ae,e(g,Z),Q||B||(Q=!0,Ae(ke))),Z},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(Z){var ce=N;return function(){var x=N;N=ce;try{return Z.apply(this,arguments)}finally{N=x}}}})(Bd)),Bd}var ny;function yT(){return ny||(ny=1,jd.exports=gT()),jd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function _T(){if(ry)return Zt;ry=1;var n=Vf(),e=yT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function N(r){return g.call(A,r)?!0:g.call(w,r)?!1:_.test(r)?A[r]=!0:(w[r]=!0,!1)}function B(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function Q(r,s,a,c){if(s===null||typeof s>"u"||B(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function Y(r,s,a,c,d,p,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=p,this.removeEmptyString=v}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){q[r]=new Y(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];q[s]=new Y(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){q[r]=new Y(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){q[r]=new Y(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){q[r]=new Y(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){q[r]=new Y(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){q[r]=new Y(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){q[r]=new Y(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){q[r]=new Y(r,5,!1,r.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function ve(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(ge,ve);q[s]=new Y(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(ge,ve);q[s]=new Y(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(ge,ve);q[s]=new Y(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){q[r]=new Y(r,1,!1,r.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){q[r]=new Y(r,1,!1,r.toLowerCase(),null,!0,!0)});function Te(r,s,a,c){var d=q.hasOwnProperty(s)?q[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(Q(s,a,d,c)&&(a=null),c||d===null?N(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var fe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),Se=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),I=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),Fe=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(r){return r===null||typeof r!="object"?null:(r=Z&&r[Z]||r["@@iterator"],typeof r=="function"?r:null)}var x=Object.assign,H;function ae(r){if(H===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);H=s&&s[1]||""}return`
`+H+r}var Ce=!1;function Ie(r,s){if(!r||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var c=U}Reflect.construct(r,[],s)}else{try{s.call()}catch(U){c=U}r.call(s.prototype)}else{try{throw Error()}catch(U){c=U}r()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,S=p.length-1;1<=v&&0<=S&&d[v]!==p[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==p[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==p[S]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=S);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?ae(r):""}function ze(r){switch(r.tag){case 5:return ae(r.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return r=Ie(r.type,!1),r;case 11:return r=Ie(r.type.render,!1),r;case 1:return r=Ie(r.type,!0),r;default:return""}}function be(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case Se:return"Portal";case C:return"Profiler";case R:return"StrictMode";case T:return"Suspense";case ue:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case I:return(r.displayName||"Context")+".Consumer";case V:return(r._context.displayName||"Context")+".Provider";case b:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Fe:return s=r.displayName||null,s!==null?s:be(r.type)||"Memo";case Ae:s=r._payload,r=r._init;try{return be(r(s))}catch{}}return null}function je(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(s);case 8:return s===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Rt(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function fh(r){var s=Rt(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Us(r){r._valueTracker||(r._valueTracker=fh(r))}function Xo(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=Rt(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Yr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function js(r,s){var a=s.checked;return x({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Nl(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ve(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Bs(r,s){s=s.checked,s!=null&&Te(r,"checked",s,!1)}function Wi(r,s){Bs(r,s);var a=Ve(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?ft(r,s.type,a):s.hasOwnProperty("defaultValue")&&ft(r,s.type,Ve(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Zo(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ft(r,s,a){(s!=="number"||Yr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var lt=Array.isArray;function Pn(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ve(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function ea(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return x({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ta(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(lt(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ve(a)}}function Dl(r,s){var a=Ve(s.value),c=Ve(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Jr(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function na(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zs(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?na(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Xr,bl=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Xr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Ki(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ol=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(r){Ol.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Zr[s]=Zr[r]})});function ei(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Zr.hasOwnProperty(r)&&Zr[r]?(""+s).trim():s+"px"}function $s(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ei(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var ra=x({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xn(r,s){if(s){if(ra[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function qs(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ti=null;function Hs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var vr=null,wr=null,st=null;function ia(r){if(r=Na(r)){if(typeof vr!="function")throw Error(t(280));var s=r.stateNode;s&&(s=au(s),vr(r.stateNode,r.type,s))}}function ni(r){wr?st?st.push(r):st=[r]:wr=r}function ri(){if(wr){var r=wr,s=st;if(st=wr=null,ia(r),s)for(r=0;r<s.length;r++)ia(s[r])}}function Vl(r,s){return r(s)}function Ll(){}var Wn=!1;function Ml(r,s,a){if(Wn)return r(s,a);Wn=!0;try{return Vl(r,s,a)}finally{Wn=!1,(wr!==null||st!==null)&&(Ll(),ri())}}function Gi(r,s){var a=r.stateNode;if(a===null)return null;var c=au(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var ii=!1;if(f)try{var si={};Object.defineProperty(si,"passive",{get:function(){ii=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{ii=!1}function Fl(r,s,a,c,d,p,v,S,P){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(K){this.onError(K)}}var Er=!1,Kn=null,Ws=!1,_n=null,Ul={onError:function(r){Er=!0,Kn=r}};function jl(r,s,a,c,d,p,v,S,P){Er=!1,Kn=null,Fl.apply(Ul,arguments)}function sa(r,s,a,c,d,p,v,S,P){if(jl.apply(this,arguments),Er){if(Er){var U=Kn;Er=!1,Kn=null}else throw Error(t(198));Ws||(Ws=!0,_n=U)}}function Nn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function oa(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Bl(r){if(Nn(r)!==r)throw Error(t(188))}function zl(r){var s=r.alternate;if(!s){if(s=Nn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Bl(d),r;if(p===c)return Bl(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=p;break}if(S===c){v=!0,c=d,a=p;break}S=S.sibling}if(!v){for(S=p.child;S;){if(S===a){v=!0,a=p,c=d;break}if(S===c){v=!0,c=p,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function $l(r){return r=zl(r),r!==null?Qi(r):null}function Qi(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Qi(r);if(s!==null)return s;r=r.sibling}return null}var aa=e.unstable_scheduleCallback,Ks=e.unstable_cancelCallback,Yi=e.unstable_shouldYield,Tr=e.unstable_requestPaint,Ye=e.unstable_now,ph=e.unstable_getCurrentPriorityLevel,Gs=e.unstable_ImmediatePriority,la=e.unstable_UserBlockingPriority,Ji=e.unstable_NormalPriority,ua=e.unstable_LowPriority,Qs=e.unstable_IdlePriority,Xi=null,sn=null;function ql(r){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Xi,r,void 0,(r.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:Zi,Gn=Math.log,vn=Math.LN2;function Zi(r){return r>>>=0,r===0?32:31-(Gn(r)/vn|0)|0}var Qn=64,oi=4194304;function Be(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ir(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,p=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Be(S):(p&=v,p!==0&&(c=Be(p)))}else v=a&~d,v!==0?c=Be(v):p!==0&&(c=Be(p));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-on(s),d=1<<a,c|=r[a],s&=~d;return c}function es(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ts(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var v=31-on(p),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=es(S,s)):P<=s&&(r.expiredLanes|=S),p&=~S}}function ca(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ha(){var r=Qn;return Qn<<=1,(Qn&4194240)===0&&(Qn=64),r}function da(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ns(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-on(s),r[s]=a}function mh(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-on(a),p=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~p}}function fa(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-on(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Oe=0;function Yn(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var pa,Ys,ma,ga,ya,Jn=!1,Js=[],Xn=null,Zn=null,kt=null,rs=new Map,Sr=new Map,an=[],Hl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ai(r,s){switch(r){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":rs.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(s.pointerId)}}function Dn(r,s,a,c,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},s!==null&&(s=Na(s),s!==null&&Ys(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function Wl(r,s,a,c,d){switch(s){case"focusin":return Xn=Dn(Xn,r,s,a,c,d),!0;case"dragenter":return Zn=Dn(Zn,r,s,a,c,d),!0;case"mouseover":return kt=Dn(kt,r,s,a,c,d),!0;case"pointerover":var p=d.pointerId;return rs.set(p,Dn(rs.get(p)||null,r,s,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Sr.set(p,Dn(Sr.get(p)||null,r,s,a,c,d)),!0}return!1}function Xs(r){var s=as(r.target);if(s!==null){var a=Nn(s);if(a!==null){if(s=a.tag,s===13){if(s=oa(a),s!==null){r.blockedOn=s,ya(r.priority,function(){ma(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function We(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Zs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);ti=c,a.target.dispatchEvent(c),ti=null}else return s=Na(a),s!==null&&Ys(s),r.blockedOn=a,!1;s.shift()}return!0}function Kl(r,s,a){We(r)&&a.delete(s)}function gh(){Jn=!1,Xn!==null&&We(Xn)&&(Xn=null),Zn!==null&&We(Zn)&&(Zn=null),kt!==null&&We(kt)&&(kt=null),rs.forEach(Kl),Sr.forEach(Kl)}function li(r,s){r.blockedOn===s&&(r.blockedOn=null,Jn||(Jn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gh)))}function ui(r){function s(d){return li(d,r)}if(0<Js.length){li(Js[0],r);for(var a=1;a<Js.length;a++){var c=Js[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Xn!==null&&li(Xn,r),Zn!==null&&li(Zn,r),kt!==null&&li(kt,r),rs.forEach(s),Sr.forEach(s),a=0;a<an.length;a++)c=an[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<an.length&&(a=an[0],a.blockedOn===null);)Xs(a),a.blockedOn===null&&an.shift()}var Ar=fe.ReactCurrentBatchConfig,Rr=!0;function er(r,s,a,c){var d=Oe,p=Ar.transition;Ar.transition=null;try{Oe=1,_a(r,s,a,c)}finally{Oe=d,Ar.transition=p}}function Gl(r,s,a,c){var d=Oe,p=Ar.transition;Ar.transition=null;try{Oe=4,_a(r,s,a,c)}finally{Oe=d,Ar.transition=p}}function _a(r,s,a,c){if(Rr){var d=Zs(r,s,a,c);if(d===null)kh(r,s,c,tr,a),ai(r,c);else if(Wl(d,r,s,a,c))c.stopPropagation();else if(ai(r,c),s&4&&-1<Hl.indexOf(r)){for(;d!==null;){var p=Na(d);if(p!==null&&pa(p),p=Zs(r,s,a,c),p===null&&kh(r,s,c,tr,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else kh(r,s,c,null,a)}}var tr=null;function Zs(r,s,a,c){if(tr=null,r=Hs(c),r=as(r),r!==null)if(s=Nn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=oa(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return tr=r,null}function eo(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ph()){case Gs:return 1;case la:return 4;case Ji:case ua:return 16;case Qs:return 536870912;default:return 16}default:return 16}}var ln=null,to=null,kr=null;function Ql(){if(kr)return kr;var r,s=to,a=s.length,c,d="value"in ln?ln.value:ln.textContent,p=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[p-c];c++);return kr=d.slice(r,1<c?1-c:void 0)}function is(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function nr(){return!0}function va(){return!1}function Ot(r){function s(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?nr:va,this.isPropagationStopped=va,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),s}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=Ot(rr),ci=x({},rr,{view:0,detail:0}),no=Ot(ci),ro,io,un,os=x({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==un&&(un&&r.type==="mousemove"?(ro=r.screenX-un.screenX,io=r.screenY-un.screenY):io=ro=0,un=r),ro)},movementY:function(r){return"movementY"in r?r.movementY:io}}),wa=Ot(os),Yl=x({},os,{dataTransfer:0}),Jl=Ot(Yl),so=x({},ci,{relatedTarget:0}),Ct=Ot(so),Xl=x({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zl=Ot(Xl),hi=x({},rr,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),u=Ot(hi),m=x({},rr,{data:0}),y=Ot(m),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=j[r])?!!s[r]:!1}function we(){return X}var ut=x({},ci,{key:function(r){if(r.key){var s=E[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=is(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?M[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(r){return r.type==="keypress"?is(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?is(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),He=Ot(ut),pt=x({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cn=Ot(pt),Cr=x({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we}),ir=Ot(Cr),sr=x({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),oo=Ot(sr),Ea=x({},os,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=Ot(Ea),l0=[9,13,27,32],yh=f&&"CompositionEvent"in window,Ta=null;f&&"documentMode"in document&&(Ta=document.documentMode);var u0=f&&"TextEvent"in window&&!Ta,zp=f&&(!yh||Ta&&8<Ta&&11>=Ta),$p=" ",qp=!1;function Hp(r,s){switch(r){case"keyup":return l0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ao=!1;function c0(r,s){switch(r){case"compositionend":return Wp(s);case"keypress":return s.which!==32?null:(qp=!0,$p);case"textInput":return r=s.data,r===$p&&qp?null:r;default:return null}}function h0(r,s){if(ao)return r==="compositionend"||!yh&&Hp(r,s)?(r=Ql(),kr=to=ln=null,ao=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return zp&&s.locale!=="ko"?null:s.data;default:return null}}var d0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!d0[r.type]:s==="textarea"}function Gp(r,s,a,c){ni(c),s=iu(s,"onChange"),0<s.length&&(a=new ss("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Ia=null,Sa=null;function f0(r){dm(r,0)}function eu(r){var s=fo(r);if(Xo(s))return r}function p0(r,s){if(r==="change")return s}var Qp=!1;if(f){var _h;if(f){var vh="oninput"in document;if(!vh){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),vh=typeof Yp.oninput=="function"}_h=vh}else _h=!1;Qp=_h&&(!document.documentMode||9<document.documentMode)}function Jp(){Ia&&(Ia.detachEvent("onpropertychange",Xp),Sa=Ia=null)}function Xp(r){if(r.propertyName==="value"&&eu(Sa)){var s=[];Gp(s,Sa,r,Hs(r)),Ml(f0,s)}}function m0(r,s,a){r==="focusin"?(Jp(),Ia=s,Sa=a,Ia.attachEvent("onpropertychange",Xp)):r==="focusout"&&Jp()}function g0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return eu(Sa)}function y0(r,s){if(r==="click")return eu(s)}function _0(r,s){if(r==="input"||r==="change")return eu(s)}function v0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var bn=typeof Object.is=="function"?Object.is:v0;function Aa(r,s){if(bn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!bn(r[d],s[d]))return!1}return!0}function Zp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function em(r,s){var a=Zp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function tm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?tm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function nm(){for(var r=window,s=Yr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Yr(r.document)}return s}function wh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function w0(r){var s=nm(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&tm(a.ownerDocument.documentElement,a)){if(c!==null&&wh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!r.extend&&p>c&&(d=c,c=p,p=d),d=em(a,p);var v=em(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),p>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var E0=f&&"documentMode"in document&&11>=document.documentMode,lo=null,Eh=null,Ra=null,Th=!1;function rm(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Th||lo==null||lo!==Yr(c)||(c=lo,"selectionStart"in c&&wh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ra&&Aa(Ra,c)||(Ra=c,c=iu(Eh,"onSelect"),0<c.length&&(s=new ss("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=lo)))}function tu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var uo={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},Ih={},im={};f&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function nu(r){if(Ih[r])return Ih[r];if(!uo[r])return r;var s=uo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in im)return Ih[r]=s[a];return r}var sm=nu("animationend"),om=nu("animationiteration"),am=nu("animationstart"),lm=nu("transitionend"),um=new Map,cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(r,s){um.set(r,s),l(s,[r])}for(var Sh=0;Sh<cm.length;Sh++){var Ah=cm[Sh],T0=Ah.toLowerCase(),I0=Ah[0].toUpperCase()+Ah.slice(1);di(T0,"on"+I0)}di(sm,"onAnimationEnd"),di(om,"onAnimationIteration"),di(am,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(lm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function hm(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,sa(c,s,void 0,r),r.currentTarget=null}function dm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var p=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,U=S.currentTarget;if(S=S.listener,P!==p&&d.isPropagationStopped())break e;hm(d,S,U),p=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,U=S.currentTarget,S=S.listener,P!==p&&d.isPropagationStopped())break e;hm(d,S,U),p=P}}}if(Ws)throw r=_n,Ws=!1,_n=null,r}function Je(r,s){var a=s[bh];a===void 0&&(a=s[bh]=new Set);var c=r+"__bubble";a.has(c)||(fm(s,r,2,!1),a.add(c))}function Rh(r,s,a){var c=0;s&&(c|=4),fm(a,r,c,s)}var ru="_reactListening"+Math.random().toString(36).slice(2);function Ca(r){if(!r[ru]){r[ru]=!0,i.forEach(function(a){a!=="selectionchange"&&(S0.has(a)||Rh(a,!1,r),Rh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[ru]||(s[ru]=!0,Rh("selectionchange",!1,s))}}function fm(r,s,a,c){switch(eo(s)){case 1:var d=er;break;case 4:d=Gl;break;default:d=_a}a=d.bind(null,s,a,r),d=void 0,!ii||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function kh(r,s,a,c,d){var p=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=as(S),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}S=S.parentNode}}c=c.return}Ml(function(){var U=p,K=Hs(a),G=[];e:{var W=um.get(r);if(W!==void 0){var te=ss,ie=r;switch(r){case"keypress":if(is(a)===0)break e;case"keydown":case"keyup":te=He;break;case"focusin":ie="focus",te=Ct;break;case"focusout":ie="blur",te=Ct;break;case"beforeblur":case"afterblur":te=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=wa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Jl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=ir;break;case sm:case om:case am:te=Zl;break;case lm:te=oo;break;case"scroll":te=no;break;case"wheel":te=a0;break;case"copy":case"cut":case"paste":te=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=cn}var se=(s&4)!==0,ct=!se&&r==="scroll",L=se?W!==null?W+"Capture":null:W;se=[];for(var O=U,F;O!==null;){F=O;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,L!==null&&(J=Gi(O,L),J!=null&&se.push(Pa(O,J,F)))),ct)break;O=O.return}0<se.length&&(W=new te(W,ie,null,a,K),G.push({event:W,listeners:se}))}}if((s&7)===0){e:{if(W=r==="mouseover"||r==="pointerover",te=r==="mouseout"||r==="pointerout",W&&a!==ti&&(ie=a.relatedTarget||a.fromElement)&&(as(ie)||ie[Pr]))break e;if((te||W)&&(W=K.window===K?K:(W=K.ownerDocument)?W.defaultView||W.parentWindow:window,te?(ie=a.relatedTarget||a.toElement,te=U,ie=ie?as(ie):null,ie!==null&&(ct=Nn(ie),ie!==ct||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=U),te!==ie)){if(se=wa,J="onMouseLeave",L="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(se=cn,J="onPointerLeave",L="onPointerEnter",O="pointer"),ct=te==null?W:fo(te),F=ie==null?W:fo(ie),W=new se(J,O+"leave",te,a,K),W.target=ct,W.relatedTarget=F,J=null,as(K)===U&&(se=new se(L,O+"enter",ie,a,K),se.target=F,se.relatedTarget=ct,J=se),ct=J,te&&ie)t:{for(se=te,L=ie,O=0,F=se;F;F=co(F))O++;for(F=0,J=L;J;J=co(J))F++;for(;0<O-F;)se=co(se),O--;for(;0<F-O;)L=co(L),F--;for(;O--;){if(se===L||L!==null&&se===L.alternate)break t;se=co(se),L=co(L)}se=null}else se=null;te!==null&&pm(G,W,te,se,!1),ie!==null&&ct!==null&&pm(G,ct,ie,se,!0)}}e:{if(W=U?fo(U):window,te=W.nodeName&&W.nodeName.toLowerCase(),te==="select"||te==="input"&&W.type==="file")var oe=p0;else if(Kp(W))if(Qp)oe=_0;else{oe=g0;var he=m0}else(te=W.nodeName)&&te.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(oe=y0);if(oe&&(oe=oe(r,U))){Gp(G,oe,a,K);break e}he&&he(r,W,U),r==="focusout"&&(he=W._wrapperState)&&he.controlled&&W.type==="number"&&ft(W,"number",W.value)}switch(he=U?fo(U):window,r){case"focusin":(Kp(he)||he.contentEditable==="true")&&(lo=he,Eh=U,Ra=null);break;case"focusout":Ra=Eh=lo=null;break;case"mousedown":Th=!0;break;case"contextmenu":case"mouseup":case"dragend":Th=!1,rm(G,a,K);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":rm(G,a,K)}var de;if(yh)e:{switch(r){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else ao?Hp(r,a)&&(ye="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(zp&&a.locale!=="ko"&&(ao||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&ao&&(de=Ql()):(ln=K,to="value"in ln?ln.value:ln.textContent,ao=!0)),he=iu(U,ye),0<he.length&&(ye=new y(ye,r,null,a,K),G.push({event:ye,listeners:he}),de?ye.data=de:(de=Wp(a),de!==null&&(ye.data=de)))),(de=u0?c0(r,a):h0(r,a))&&(U=iu(U,"onBeforeInput"),0<U.length&&(K=new y("onBeforeInput","beforeinput",null,a,K),G.push({event:K,listeners:U}),K.data=de))}dm(G,s)})}function Pa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function iu(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Gi(r,a),p!=null&&c.unshift(Pa(r,p,d)),p=Gi(r,s),p!=null&&c.push(Pa(r,p,d))),r=r.return}return c}function co(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function pm(r,s,a,c,d){for(var p=s._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,U=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&U!==null&&(S=U,d?(P=Gi(a,p),P!=null&&v.unshift(Pa(a,P,S))):d||(P=Gi(a,p),P!=null&&v.push(Pa(a,P,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var A0=/\r\n?/g,R0=/\u0000|\uFFFD/g;function mm(r){return(typeof r=="string"?r:""+r).replace(A0,`
`).replace(R0,"")}function su(r,s,a){if(s=mm(s),mm(r)!==s&&a)throw Error(t(425))}function ou(){}var Ch=null,Ph=null;function xh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Nh=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,C0=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(r){return gm.resolve(null).then(r).catch(P0)}:Nh;function P0(r){setTimeout(function(){throw r})}function Dh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),ui(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ui(s)}function fi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function ym(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ho=Math.random().toString(36).slice(2),or="__reactFiber$"+ho,xa="__reactProps$"+ho,Pr="__reactContainer$"+ho,bh="__reactEvents$"+ho,x0="__reactListeners$"+ho,N0="__reactHandles$"+ho;function as(r){var s=r[or];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Pr]||a[or]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=ym(r);r!==null;){if(a=r[or])return a;r=ym(r)}return s}r=a,a=r.parentNode}return null}function Na(r){return r=r[or]||r[Pr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function fo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function au(r){return r[xa]||null}var Oh=[],po=-1;function pi(r){return{current:r}}function Xe(r){0>po||(r.current=Oh[po],Oh[po]=null,po--)}function Ke(r,s){po++,Oh[po]=r.current,r.current=s}var mi={},Vt=pi(mi),Gt=pi(!1),ls=mi;function mo(r,s){var a=r.type.contextTypes;if(!a)return mi;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(r){return r=r.childContextTypes,r!=null}function lu(){Xe(Gt),Xe(Vt)}function _m(r,s,a){if(Vt.current!==mi)throw Error(t(168));Ke(Vt,s),Ke(Gt,a)}function vm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,je(r)||"Unknown",d));return x({},a,c)}function uu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||mi,ls=Vt.current,Ke(Vt,r),Ke(Gt,Gt.current),!0}function wm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=vm(r,s,ls),c.__reactInternalMemoizedMergedChildContext=r,Xe(Gt),Xe(Vt),Ke(Vt,r)):Xe(Gt),Ke(Gt,a)}var xr=null,cu=!1,Vh=!1;function Em(r){xr===null?xr=[r]:xr.push(r)}function D0(r){cu=!0,Em(r)}function gi(){if(!Vh&&xr!==null){Vh=!0;var r=0,s=Oe;try{var a=xr;for(Oe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}xr=null,cu=!1}catch(d){throw xr!==null&&(xr=xr.slice(r+1)),aa(Gs,gi),d}finally{Oe=s,Vh=!1}}return null}var go=[],yo=0,hu=null,du=0,wn=[],En=0,us=null,Nr=1,Dr="";function cs(r,s){go[yo++]=du,go[yo++]=hu,hu=r,du=s}function Tm(r,s,a){wn[En++]=Nr,wn[En++]=Dr,wn[En++]=us,us=r;var c=Nr;r=Dr;var d=32-on(c)-1;c&=~(1<<d),a+=1;var p=32-on(s)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Nr=1<<32-on(s)+d|a<<d|c,Dr=p+r}else Nr=1<<p|a<<d|c,Dr=r}function Lh(r){r.return!==null&&(cs(r,1),Tm(r,1,0))}function Mh(r){for(;r===hu;)hu=go[--yo],go[yo]=null,du=go[--yo],go[yo]=null;for(;r===us;)us=wn[--En],wn[En]=null,Dr=wn[--En],wn[En]=null,Nr=wn[--En],wn[En]=null}var hn=null,dn=null,et=!1,On=null;function Im(r,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Sm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,hn=r,dn=fi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,hn=r,dn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=us!==null?{id:Nr,overflow:Dr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,hn=r,dn=null,!0):!1;default:return!1}}function Fh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Uh(r){if(et){var s=dn;if(s){var a=s;if(!Sm(r,s)){if(Fh(r))throw Error(t(418));s=fi(a.nextSibling);var c=hn;s&&Sm(r,s)?Im(c,a):(r.flags=r.flags&-4097|2,et=!1,hn=r)}}else{if(Fh(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,hn=r}}}function Am(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;hn=r}function fu(r){if(r!==hn)return!1;if(!et)return Am(r),et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!xh(r.type,r.memoizedProps)),s&&(s=dn)){if(Fh(r))throw Rm(),Error(t(418));for(;s;)Im(r,s),s=fi(s.nextSibling)}if(Am(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){dn=fi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}dn=null}}else dn=hn?fi(r.stateNode.nextSibling):null;return!0}function Rm(){for(var r=dn;r;)r=fi(r.nextSibling)}function _o(){dn=hn=null,et=!1}function jh(r){On===null?On=[r]:On.push(r)}var b0=fe.ReactCurrentBatchConfig;function Vn(r,s){if(r&&r.defaultProps){s=x({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}var pu=pi(null),mu=null,vo=null,Bh=null;function zh(){Bh=vo=mu=null}function $h(r){var s=pu.current;Xe(pu),r._currentValue=s}function qh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function wo(r,s){mu=r,Bh=vo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Yt=!0),r.firstContext=null)}function Tn(r){var s=r._currentValue;if(Bh!==r)if(r={context:r,memoizedValue:s,next:null},vo===null){if(mu===null)throw Error(t(308));vo=r,mu.dependencies={lanes:0,firstContext:r}}else vo=vo.next=r;return s}var hs=null;function Hh(r){hs===null?hs=[r]:hs.push(r)}function km(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Hh(s)):(a.next=d.next,d.next=a),s.interleaved=a,br(r,c)}function br(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var yi=!1;function Wh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Or(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function _i(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,br(r,a)}return d=c.interleaved,d===null?(s.next=s,Hh(c)):(s.next=d.next,d.next=s),c.interleaved=s,br(r,a)}function gu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,fa(r,a)}}function Pm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function yu(r,s,a,c){var d=r.updateQueue;yi=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,U=P.next;P.next=null,v===null?p=U:v.next=U,v=P;var K=r.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==v&&(S===null?K.firstBaseUpdate=U:S.next=U,K.lastBaseUpdate=P))}if(p!==null){var G=d.baseState;v=0,K=U=P=null,S=p;do{var W=S.lane,te=S.eventTime;if((c&W)===W){K!==null&&(K=K.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ie=r,se=S;switch(W=s,te=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){G=ie.call(te,G,W);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,W=typeof ie=="function"?ie.call(te,G,W):ie,W==null)break e;G=x({},G,W);break e;case 2:yi=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,W=d.effects,W===null?d.effects=[S]:W.push(S))}else te={eventTime:te,lane:W,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(U=K=te,P=G):K=K.next=te,v|=W;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;W=S,S=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(K===null&&(P=G),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=K,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);ps|=v,r.lanes=v,r.memoizedState=G}}function xm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Nm=new n.Component().refs;function Kh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:x({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var _u={isMounted:function(r){return(r=r._reactInternals)?Nn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Wt(),d=Ti(r),p=Or(c,d);p.payload=s,a!=null&&(p.callback=a),s=_i(r,p,d),s!==null&&(Fn(s,r,d,c),gu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Wt(),d=Ti(r),p=Or(c,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=_i(r,p,d),s!==null&&(Fn(s,r,d,c),gu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Wt(),c=Ti(r),d=Or(a,c);d.tag=2,s!=null&&(d.callback=s),s=_i(r,d,c),s!==null&&(Fn(s,r,c,a),gu(s,r,c))}};function Dm(r,s,a,c,d,p,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,p,v):s.prototype&&s.prototype.isPureReactComponent?!Aa(a,c)||!Aa(d,p):!0}function bm(r,s,a){var c=!1,d=mi,p=s.contextType;return typeof p=="object"&&p!==null?p=Tn(p):(d=Qt(s)?ls:Vt.current,c=s.contextTypes,p=(c=c!=null)?mo(r,d):mi),s=new s(a,p),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_u,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),s}function Om(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&_u.enqueueReplaceState(s,s.state,null)}function Gh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs=Nm,Wh(r);var p=s.contextType;typeof p=="object"&&p!==null?d.context=Tn(p):(p=Qt(s)?ls:Vt.current,d.context=mo(r,p)),d.state=r.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Kh(r,s,p,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&_u.enqueueReplaceState(d,d.state,null),yu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Da(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,p=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(v){var S=d.refs;S===Nm&&(S=d.refs={}),v===null?delete S[p]:S[p]=v},s._stringRef=p,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function vu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Vm(r){var s=r._init;return s(r._payload)}function Lm(r){function s(L,O){if(r){var F=L.deletions;F===null?(L.deletions=[O],L.flags|=16):F.push(O)}}function a(L,O){if(!r)return null;for(;O!==null;)s(L,O),O=O.sibling;return null}function c(L,O){for(L=new Map;O!==null;)O.key!==null?L.set(O.key,O):L.set(O.index,O),O=O.sibling;return L}function d(L,O){return L=Si(L,O),L.index=0,L.sibling=null,L}function p(L,O,F){return L.index=F,r?(F=L.alternate,F!==null?(F=F.index,F<O?(L.flags|=2,O):F):(L.flags|=2,O)):(L.flags|=1048576,O)}function v(L){return r&&L.alternate===null&&(L.flags|=2),L}function S(L,O,F,J){return O===null||O.tag!==6?(O=Nd(F,L.mode,J),O.return=L,O):(O=d(O,F),O.return=L,O)}function P(L,O,F,J){var oe=F.type;return oe===D?K(L,O,F.props.children,J,F.key):O!==null&&(O.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Ae&&Vm(oe)===O.type)?(J=d(O,F.props),J.ref=Da(L,O,F),J.return=L,J):(J=Fu(F.type,F.key,F.props,null,L.mode,J),J.ref=Da(L,O,F),J.return=L,J)}function U(L,O,F,J){return O===null||O.tag!==4||O.stateNode.containerInfo!==F.containerInfo||O.stateNode.implementation!==F.implementation?(O=Dd(F,L.mode,J),O.return=L,O):(O=d(O,F.children||[]),O.return=L,O)}function K(L,O,F,J,oe){return O===null||O.tag!==7?(O=_s(F,L.mode,J,oe),O.return=L,O):(O=d(O,F),O.return=L,O)}function G(L,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Nd(""+O,L.mode,F),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ke:return F=Fu(O.type,O.key,O.props,null,L.mode,F),F.ref=Da(L,null,O),F.return=L,F;case Se:return O=Dd(O,L.mode,F),O.return=L,O;case Ae:var J=O._init;return G(L,J(O._payload),F)}if(lt(O)||ce(O))return O=_s(O,L.mode,F,null),O.return=L,O;vu(L,O)}return null}function W(L,O,F,J){var oe=O!==null?O.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return oe!==null?null:S(L,O,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ke:return F.key===oe?P(L,O,F,J):null;case Se:return F.key===oe?U(L,O,F,J):null;case Ae:return oe=F._init,W(L,O,oe(F._payload),J)}if(lt(F)||ce(F))return oe!==null?null:K(L,O,F,J,null);vu(L,F)}return null}function te(L,O,F,J,oe){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(F)||null,S(O,L,""+J,oe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case ke:return L=L.get(J.key===null?F:J.key)||null,P(O,L,J,oe);case Se:return L=L.get(J.key===null?F:J.key)||null,U(O,L,J,oe);case Ae:var he=J._init;return te(L,O,F,he(J._payload),oe)}if(lt(J)||ce(J))return L=L.get(F)||null,K(O,L,J,oe,null);vu(O,J)}return null}function ie(L,O,F,J){for(var oe=null,he=null,de=O,ye=O=0,St=null;de!==null&&ye<F.length;ye++){de.index>ye?(St=de,de=null):St=de.sibling;var Ue=W(L,de,F[ye],J);if(Ue===null){de===null&&(de=St);break}r&&de&&Ue.alternate===null&&s(L,de),O=p(Ue,O,ye),he===null?oe=Ue:he.sibling=Ue,he=Ue,de=St}if(ye===F.length)return a(L,de),et&&cs(L,ye),oe;if(de===null){for(;ye<F.length;ye++)de=G(L,F[ye],J),de!==null&&(O=p(de,O,ye),he===null?oe=de:he.sibling=de,he=de);return et&&cs(L,ye),oe}for(de=c(L,de);ye<F.length;ye++)St=te(de,L,ye,F[ye],J),St!==null&&(r&&St.alternate!==null&&de.delete(St.key===null?ye:St.key),O=p(St,O,ye),he===null?oe=St:he.sibling=St,he=St);return r&&de.forEach(function(Ai){return s(L,Ai)}),et&&cs(L,ye),oe}function se(L,O,F,J){var oe=ce(F);if(typeof oe!="function")throw Error(t(150));if(F=oe.call(F),F==null)throw Error(t(151));for(var he=oe=null,de=O,ye=O=0,St=null,Ue=F.next();de!==null&&!Ue.done;ye++,Ue=F.next()){de.index>ye?(St=de,de=null):St=de.sibling;var Ai=W(L,de,Ue.value,J);if(Ai===null){de===null&&(de=St);break}r&&de&&Ai.alternate===null&&s(L,de),O=p(Ai,O,ye),he===null?oe=Ai:he.sibling=Ai,he=Ai,de=St}if(Ue.done)return a(L,de),et&&cs(L,ye),oe;if(de===null){for(;!Ue.done;ye++,Ue=F.next())Ue=G(L,Ue.value,J),Ue!==null&&(O=p(Ue,O,ye),he===null?oe=Ue:he.sibling=Ue,he=Ue);return et&&cs(L,ye),oe}for(de=c(L,de);!Ue.done;ye++,Ue=F.next())Ue=te(de,L,ye,Ue.value,J),Ue!==null&&(r&&Ue.alternate!==null&&de.delete(Ue.key===null?ye:Ue.key),O=p(Ue,O,ye),he===null?oe=Ue:he.sibling=Ue,he=Ue);return r&&de.forEach(function(dT){return s(L,dT)}),et&&cs(L,ye),oe}function ct(L,O,F,J){if(typeof F=="object"&&F!==null&&F.type===D&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ke:e:{for(var oe=F.key,he=O;he!==null;){if(he.key===oe){if(oe=F.type,oe===D){if(he.tag===7){a(L,he.sibling),O=d(he,F.props.children),O.return=L,L=O;break e}}else if(he.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Ae&&Vm(oe)===he.type){a(L,he.sibling),O=d(he,F.props),O.ref=Da(L,he,F),O.return=L,L=O;break e}a(L,he);break}else s(L,he);he=he.sibling}F.type===D?(O=_s(F.props.children,L.mode,J,F.key),O.return=L,L=O):(J=Fu(F.type,F.key,F.props,null,L.mode,J),J.ref=Da(L,O,F),J.return=L,L=J)}return v(L);case Se:e:{for(he=F.key;O!==null;){if(O.key===he)if(O.tag===4&&O.stateNode.containerInfo===F.containerInfo&&O.stateNode.implementation===F.implementation){a(L,O.sibling),O=d(O,F.children||[]),O.return=L,L=O;break e}else{a(L,O);break}else s(L,O);O=O.sibling}O=Dd(F,L.mode,J),O.return=L,L=O}return v(L);case Ae:return he=F._init,ct(L,O,he(F._payload),J)}if(lt(F))return ie(L,O,F,J);if(ce(F))return se(L,O,F,J);vu(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,O!==null&&O.tag===6?(a(L,O.sibling),O=d(O,F),O.return=L,L=O):(a(L,O),O=Nd(F,L.mode,J),O.return=L,L=O),v(L)):a(L,O)}return ct}var Eo=Lm(!0),Mm=Lm(!1),ba={},ar=pi(ba),Oa=pi(ba),Va=pi(ba);function ds(r){if(r===ba)throw Error(t(174));return r}function Qh(r,s){switch(Ke(Va,s),Ke(Oa,r),Ke(ar,ba),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:zs(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=zs(s,r)}Xe(ar),Ke(ar,s)}function To(){Xe(ar),Xe(Oa),Xe(Va)}function Fm(r){ds(Va.current);var s=ds(ar.current),a=zs(s,r.type);s!==a&&(Ke(Oa,r),Ke(ar,a))}function Yh(r){Oa.current===r&&(Xe(ar),Xe(Oa))}var tt=pi(0);function wu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Jh=[];function Xh(){for(var r=0;r<Jh.length;r++)Jh[r]._workInProgressVersionPrimary=null;Jh.length=0}var Eu=fe.ReactCurrentDispatcher,Zh=fe.ReactCurrentBatchConfig,fs=0,nt=null,vt=null,Tt=null,Tu=!1,La=!1,Ma=0,O0=0;function Lt(){throw Error(t(321))}function ed(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!bn(r[a],s[a]))return!1;return!0}function td(r,s,a,c,d,p){if(fs=p,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Eu.current=r===null||r.memoizedState===null?F0:U0,r=a(c,d),La){p=0;do{if(La=!1,Ma=0,25<=p)throw Error(t(301));p+=1,Tt=vt=null,s.updateQueue=null,Eu.current=j0,r=a(c,d)}while(La)}if(Eu.current=Au,s=vt!==null&&vt.next!==null,fs=0,Tt=vt=nt=null,Tu=!1,s)throw Error(t(300));return r}function nd(){var r=Ma!==0;return Ma=0,r}function lr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?nt.memoizedState=Tt=r:Tt=Tt.next=r,Tt}function In(){if(vt===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=vt.next;var s=Tt===null?nt.memoizedState:Tt.next;if(s!==null)Tt=s,vt=r;else{if(r===null)throw Error(t(310));vt=r,r={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Tt===null?nt.memoizedState=Tt=r:Tt=Tt.next=r}return Tt}function Fa(r,s){return typeof s=="function"?s(r):s}function rd(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=vt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var S=v=null,P=null,U=p;do{var K=U.lane;if((fs&K)===K)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:r(c,U.action);else{var G={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(S=P=G,v=c):P=P.next=G,nt.lanes|=K,ps|=K}U=U.next}while(U!==null&&U!==p);P===null?v=c:P.next=S,bn(c,s.memoizedState)||(Yt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do p=d.lane,nt.lanes|=p,ps|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function id(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=r(p,v.action),v=v.next;while(v!==d);bn(p,s.memoizedState)||(Yt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,c]}function Um(){}function jm(r,s){var a=nt,c=In(),d=s(),p=!bn(c.memoizedState,d);if(p&&(c.memoizedState=d,Yt=!0),c=c.queue,sd($m.bind(null,a,c,r),[r]),c.getSnapshot!==s||p||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Ua(9,zm.bind(null,a,c,d,s),void 0,null),It===null)throw Error(t(349));(fs&30)!==0||Bm(a,s,d)}return d}function Bm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function zm(r,s,a,c){s.value=a,s.getSnapshot=c,qm(s)&&Hm(r)}function $m(r,s,a){return a(function(){qm(s)&&Hm(r)})}function qm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!bn(r,a)}catch{return!0}}function Hm(r){var s=br(r,1);s!==null&&Fn(s,r,1,-1)}function Wm(r){var s=lr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:r},s.queue=r,r=r.dispatch=M0.bind(null,nt,r),[s.memoizedState,r]}function Ua(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function Km(){return In().memoizedState}function Iu(r,s,a,c){var d=lr();nt.flags|=r,d.memoizedState=Ua(1|s,a,void 0,c===void 0?null:c)}function Su(r,s,a,c){var d=In();c=c===void 0?null:c;var p=void 0;if(vt!==null){var v=vt.memoizedState;if(p=v.destroy,c!==null&&ed(c,v.deps)){d.memoizedState=Ua(s,a,p,c);return}}nt.flags|=r,d.memoizedState=Ua(1|s,a,p,c)}function Gm(r,s){return Iu(8390656,8,r,s)}function sd(r,s){return Su(2048,8,r,s)}function Qm(r,s){return Su(4,2,r,s)}function Ym(r,s){return Su(4,4,r,s)}function Jm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Xm(r,s,a){return a=a!=null?a.concat([r]):null,Su(4,4,Jm.bind(null,s,r),a)}function od(){}function Zm(r,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&ed(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function eg(r,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&ed(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function tg(r,s,a){return(fs&21)===0?(r.baseState&&(r.baseState=!1,Yt=!0),r.memoizedState=a):(bn(a,s)||(a=ha(),nt.lanes|=a,ps|=a,r.baseState=!0),s)}function V0(r,s){var a=Oe;Oe=a!==0&&4>a?a:4,r(!0);var c=Zh.transition;Zh.transition={};try{r(!1),s()}finally{Oe=a,Zh.transition=c}}function ng(){return In().memoizedState}function L0(r,s,a){var c=Ti(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},rg(r))ig(s,a);else if(a=km(r,s,a,c),a!==null){var d=Wt();Fn(a,r,c,d),sg(a,s,c)}}function M0(r,s,a){var c=Ti(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(rg(r))ig(s,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var v=s.lastRenderedState,S=p(v,a);if(d.hasEagerState=!0,d.eagerState=S,bn(S,v)){var P=s.interleaved;P===null?(d.next=d,Hh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=km(r,s,d,c),a!==null&&(d=Wt(),Fn(a,r,c,d),sg(a,s,c))}}function rg(r){var s=r.alternate;return r===nt||s!==null&&s===nt}function ig(r,s){La=Tu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function sg(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,fa(r,a)}}var Au={readContext:Tn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},F0={readContext:Tn,useCallback:function(r,s){return lr().memoizedState=[r,s===void 0?null:s],r},useContext:Tn,useEffect:Gm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Iu(4194308,4,Jm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Iu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Iu(4,2,r,s)},useMemo:function(r,s){var a=lr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=lr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=L0.bind(null,nt,r),[c.memoizedState,r]},useRef:function(r){var s=lr();return r={current:r},s.memoizedState=r},useState:Wm,useDebugValue:od,useDeferredValue:function(r){return lr().memoizedState=r},useTransition:function(){var r=Wm(!1),s=r[0];return r=V0.bind(null,r[1]),lr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=nt,d=lr();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));(fs&30)!==0||Bm(c,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,Gm($m.bind(null,c,p,r),[r]),c.flags|=2048,Ua(9,zm.bind(null,c,p,a,s),void 0,null),a},useId:function(){var r=lr(),s=It.identifierPrefix;if(et){var a=Dr,c=Nr;a=(c&~(1<<32-on(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ma++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=O0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},U0={readContext:Tn,useCallback:Zm,useContext:Tn,useEffect:sd,useImperativeHandle:Xm,useInsertionEffect:Qm,useLayoutEffect:Ym,useMemo:eg,useReducer:rd,useRef:Km,useState:function(){return rd(Fa)},useDebugValue:od,useDeferredValue:function(r){var s=In();return tg(s,vt.memoizedState,r)},useTransition:function(){var r=rd(Fa)[0],s=In().memoizedState;return[r,s]},useMutableSource:Um,useSyncExternalStore:jm,useId:ng,unstable_isNewReconciler:!1},j0={readContext:Tn,useCallback:Zm,useContext:Tn,useEffect:sd,useImperativeHandle:Xm,useInsertionEffect:Qm,useLayoutEffect:Ym,useMemo:eg,useReducer:id,useRef:Km,useState:function(){return id(Fa)},useDebugValue:od,useDeferredValue:function(r){var s=In();return vt===null?s.memoizedState=r:tg(s,vt.memoizedState,r)},useTransition:function(){var r=id(Fa)[0],s=In().memoizedState;return[r,s]},useMutableSource:Um,useSyncExternalStore:jm,useId:ng,unstable_isNewReconciler:!1};function Io(r,s){try{var a="",c=s;do a+=ze(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:s,stack:d,digest:null}}function ad(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function ld(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var B0=typeof WeakMap=="function"?WeakMap:Map;function og(r,s,a){a=Or(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Du||(Du=!0,Id=c),ld(r,s)},a}function ag(r,s,a){a=Or(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){ld(r,s)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){ld(r,s),typeof c!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function lg(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new B0;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=tT.bind(null,r,s,a),s.then(r,r))}function ug(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function cg(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Or(-1,1),s.tag=2,_i(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var z0=fe.ReactCurrentOwner,Yt=!1;function Ht(r,s,a,c){s.child=r===null?Mm(s,null,a,c):Eo(s,r.child,a,c)}function hg(r,s,a,c,d){a=a.render;var p=s.ref;return wo(s,d),c=td(r,s,a,c,p,d),a=nd(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Vr(r,s,d)):(et&&a&&Lh(s),s.flags|=1,Ht(r,s,c,d),s.child)}function dg(r,s,a,c,d){if(r===null){var p=a.type;return typeof p=="function"&&!xd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,fg(r,s,p,c,d)):(r=Fu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(p=r.child,(r.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:Aa,a(v,c)&&r.ref===s.ref)return Vr(r,s,d)}return s.flags|=1,r=Si(p,c),r.ref=s.ref,r.return=s,s.child=r}function fg(r,s,a,c,d){if(r!==null){var p=r.memoizedProps;if(Aa(p,c)&&r.ref===s.ref)if(Yt=!1,s.pendingProps=c=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Yt=!0);else return s.lanes=r.lanes,Vr(r,s,d)}return ud(r,s,a,c,d)}function pg(r,s,a){var c=s.pendingProps,d=c.children,p=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Ao,fn),fn|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(Ao,fn),fn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ke(Ao,fn),fn|=c}else p!==null?(c=p.baseLanes|a,s.memoizedState=null):c=a,Ke(Ao,fn),fn|=c;return Ht(r,s,d,a),s.child}function mg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ud(r,s,a,c,d){var p=Qt(a)?ls:Vt.current;return p=mo(s,p),wo(s,d),a=td(r,s,a,c,p,d),c=nd(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Vr(r,s,d)):(et&&c&&Lh(s),s.flags|=1,Ht(r,s,a,d),s.child)}function gg(r,s,a,c,d){if(Qt(a)){var p=!0;uu(s)}else p=!1;if(wo(s,d),s.stateNode===null)ku(r,s),bm(s,a,c),Gh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var P=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=Tn(U):(U=Qt(a)?ls:Vt.current,U=mo(s,U));var K=a.getDerivedStateFromProps,G=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";G||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==U)&&Om(s,v,c,U),yi=!1;var W=s.memoizedState;v.state=W,yu(s,c,v,d),P=s.memoizedState,S!==c||W!==P||Gt.current||yi?(typeof K=="function"&&(Kh(s,a,K,c),P=s.memoizedState),(S=yi||Dm(s,a,S,c,W,P,U))?(G||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Cm(r,s),S=s.memoizedProps,U=s.type===s.elementType?S:Vn(s.type,S),v.props=U,G=s.pendingProps,W=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=Tn(P):(P=Qt(a)?ls:Vt.current,P=mo(s,P));var te=a.getDerivedStateFromProps;(K=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==G||W!==P)&&Om(s,v,c,P),yi=!1,W=s.memoizedState,v.state=W,yu(s,c,v,d);var ie=s.memoizedState;S!==G||W!==ie||Gt.current||yi?(typeof te=="function"&&(Kh(s,a,te,c),ie=s.memoizedState),(U=yi||Dm(s,a,U,c,W,ie,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ie),v.props=c,v.state=ie,v.context=P,c=U):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(s.flags|=1024),c=!1)}return cd(r,s,a,c,p,d)}function cd(r,s,a,c,d,p){mg(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&wm(s,a,!1),Vr(r,s,p);c=s.stateNode,z0.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=Eo(s,r.child,null,p),s.child=Eo(s,null,S,p)):Ht(r,s,S,p),s.memoizedState=c.state,d&&wm(s,a,!0),s.child}function yg(r){var s=r.stateNode;s.pendingContext?_m(r,s.pendingContext,s.pendingContext!==s.context):s.context&&_m(r,s.context,!1),Qh(r,s.containerInfo)}function _g(r,s,a,c,d){return _o(),jh(d),s.flags|=256,Ht(r,s,a,c),s.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function dd(r){return{baseLanes:r,cachePool:null,transitions:null}}function vg(r,s,a){var c=s.pendingProps,d=tt.current,p=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(p=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ke(tt,d&1),r===null)return Uh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,r=c.fallback,p?(c=s.mode,p=s.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Uu(v,c,0,null),r=_s(r,c,a,null),p.return=s,r.return=s,p.sibling=r,s.child=p,s.child.memoizedState=dd(a),s.memoizedState=hd,r):fd(s,v));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return $0(r,s,v,c,S,d,a);if(p){p=c.fallback,v=s.mode,d=r.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=Si(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?p=Si(S,p):(p=_s(p,v,a,null),p.flags|=2),p.return=s,c.return=s,c.sibling=p,s.child=c,c=p,p=s.child,v=r.child.memoizedState,v=v===null?dd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=r.childLanes&~a,s.memoizedState=hd,c}return p=r.child,r=p.sibling,c=Si(p,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function fd(r,s){return s=Uu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ru(r,s,a,c){return c!==null&&jh(c),Eo(s,r.child,null,a),r=fd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function $0(r,s,a,c,d,p,v){if(a)return s.flags&256?(s.flags&=-257,c=ad(Error(t(422))),Ru(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(p=c.fallback,d=s.mode,c=Uu({mode:"visible",children:c.children},d,0,null),p=_s(p,d,v,null),p.flags|=2,c.return=s,p.return=s,c.sibling=p,s.child=c,(s.mode&1)!==0&&Eo(s,r.child,null,v),s.child.memoizedState=dd(v),s.memoizedState=hd,p);if((s.mode&1)===0)return Ru(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,p=Error(t(419)),c=ad(p,c,void 0),Ru(r,s,v,c)}if(S=(v&r.childLanes)!==0,Yt||S){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,br(r,d),Fn(c,r,d,-1))}return Pd(),c=ad(Error(t(421))),Ru(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=nT.bind(null,r),d._reactRetry=s,null):(r=p.treeContext,dn=fi(d.nextSibling),hn=s,et=!0,On=null,r!==null&&(wn[En++]=Nr,wn[En++]=Dr,wn[En++]=us,Nr=r.id,Dr=r.overflow,us=s),s=fd(s,c.children),s.flags|=4096,s)}function wg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),qh(r.return,s,a)}function pd(r,s,a,c,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Eg(r,s,a){var c=s.pendingProps,d=c.revealOrder,p=c.tail;if(Ht(r,s,c.children,a),c=tt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&wg(r,a,s);else if(r.tag===19)wg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Ke(tt,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&wu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),pd(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&wu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}pd(s,!0,a,null,p);break;case"together":pd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ku(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Vr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ps|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Si(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Si(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function q0(r,s,a){switch(s.tag){case 3:yg(s),_o();break;case 5:Fm(s);break;case 1:Qt(s.type)&&uu(s);break;case 4:Qh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ke(pu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ke(tt,tt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?vg(r,s,a):(Ke(tt,tt.current&1),r=Vr(r,s,a),r!==null?r.sibling:null);Ke(tt,tt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return Eg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(tt,tt.current),c)break;return null;case 22:case 23:return s.lanes=0,pg(r,s,a)}return Vr(r,s,a)}var Tg,md,Ig,Sg;Tg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},md=function(){},Ig=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,ds(ar.current);var p=null;switch(a){case"input":d=js(r,d),c=js(r,c),p=[];break;case"select":d=x({},d,{value:void 0}),c=x({},c,{value:void 0}),p=[];break;case"textarea":d=ea(r,d),c=ea(r,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=ou)}xn(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var P=c[U];if(S=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==S&&(P!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(p=p||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Je("scroll",r),p||S===P||(p=[])):(p=p||[]).push(U,P))}a&&(p=p||[]).push("style",a);var U=p;(s.updateQueue=U)&&(s.flags|=4)}},Sg=function(r,s,a,c){a!==c&&(s.flags|=4)};function ja(r,s){if(!et)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function H0(r,s,a){var c=s.pendingProps;switch(Mh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Qt(s.type)&&lu(),Mt(s),null;case 3:return c=s.stateNode,To(),Xe(Gt),Xe(Vt),Xh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(fu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,On!==null&&(Rd(On),On=null))),md(r,s),Mt(s),null;case 5:Yh(s);var d=ds(Va.current);if(a=s.type,r!==null&&s.stateNode!=null)Ig(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=ds(ar.current),fu(s)){c=s.stateNode,a=s.type;var p=s.memoizedProps;switch(c[or]=s,c[xa]=p,r=(s.mode&1)!==0,a){case"dialog":Je("cancel",c),Je("close",c);break;case"iframe":case"object":case"embed":Je("load",c);break;case"video":case"audio":for(d=0;d<ka.length;d++)Je(ka[d],c);break;case"source":Je("error",c);break;case"img":case"image":case"link":Je("error",c),Je("load",c);break;case"details":Je("toggle",c);break;case"input":Nl(c,p),Je("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Je("invalid",c);break;case"textarea":ta(c,p),Je("invalid",c)}xn(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var S=p[v];v==="children"?typeof S=="string"?c.textContent!==S&&(p.suppressHydrationWarning!==!0&&su(c.textContent,S,r),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&su(c.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Je("scroll",c)}switch(a){case"input":Us(c),Zo(c,p,!0);break;case"textarea":Us(c),Jr(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=ou)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=na(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[or]=s,r[xa]=c,Tg(r,s,!1,!1),s.stateNode=r;e:{switch(v=qs(a,c),a){case"dialog":Je("cancel",r),Je("close",r),d=c;break;case"iframe":case"object":case"embed":Je("load",r),d=c;break;case"video":case"audio":for(d=0;d<ka.length;d++)Je(ka[d],r);d=c;break;case"source":Je("error",r),d=c;break;case"img":case"image":case"link":Je("error",r),Je("load",r),d=c;break;case"details":Je("toggle",r),d=c;break;case"input":Nl(r,c),d=js(r,c),Je("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=x({},c,{value:void 0}),Je("invalid",r);break;case"textarea":ta(r,c),d=ea(r,c),Je("invalid",r);break;default:d=c}xn(a,d),S=d;for(p in S)if(S.hasOwnProperty(p)){var P=S[p];p==="style"?$s(r,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&bl(r,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Ki(r,P):typeof P=="number"&&Ki(r,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Je("scroll",r):P!=null&&Te(r,p,P,v))}switch(a){case"input":Us(r),Zo(r,c,!1);break;case"textarea":Us(r),Jr(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ve(c.value));break;case"select":r.multiple=!!c.multiple,p=c.value,p!=null?Pn(r,!!c.multiple,p,!1):c.defaultValue!=null&&Pn(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ou)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)Sg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ds(Va.current),ds(ar.current),fu(s)){if(c=s.stateNode,a=s.memoizedProps,c[or]=s,(p=c.nodeValue!==a)&&(r=hn,r!==null))switch(r.tag){case 3:su(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&su(c.nodeValue,a,(r.mode&1)!==0)}p&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[or]=s,s.stateNode=c}return Mt(s),null;case 13:if(Xe(tt),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&dn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Rm(),_o(),s.flags|=98560,p=!1;else if(p=fu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[or]=s}else _o(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),p=!1}else On!==null&&(Rd(On),On=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(tt.current&1)!==0?wt===0&&(wt=3):Pd())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return To(),md(r,s),r===null&&Ca(s.stateNode.containerInfo),Mt(s),null;case 10:return $h(s.type._context),Mt(s),null;case 17:return Qt(s.type)&&lu(),Mt(s),null;case 19:if(Xe(tt),p=s.memoizedState,p===null)return Mt(s),null;if(c=(s.flags&128)!==0,v=p.rendering,v===null)if(c)ja(p,!1);else{if(wt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=wu(r),v!==null){for(s.flags|=128,ja(p,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)p=a,r=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,r=v.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ke(tt,tt.current&1|2),s.child}r=r.sibling}p.tail!==null&&Ye()>Ro&&(s.flags|=128,c=!0,ja(p,!1),s.lanes=4194304)}else{if(!c)if(r=wu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),ja(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!et)return Mt(s),null}else 2*Ye()-p.renderingStartTime>Ro&&a!==1073741824&&(s.flags|=128,c=!0,ja(p,!1),s.lanes=4194304);p.isBackwards?(v.sibling=s.child,s.child=v):(a=p.last,a!==null?a.sibling=v:s.child=v,p.last=v)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ye(),s.sibling=null,a=tt.current,Ke(tt,c?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return Cd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(fn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function W0(r,s){switch(Mh(s),s.tag){case 1:return Qt(s.type)&&lu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return To(),Xe(Gt),Xe(Vt),Xh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Yh(s),null;case 13:if(Xe(tt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));_o()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Xe(tt),null;case 4:return To(),null;case 10:return $h(s.type._context),null;case 22:case 23:return Cd(),null;case 24:return null;default:return null}}var Cu=!1,Ft=!1,K0=typeof WeakSet=="function"?WeakSet:Set,re=null;function So(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ot(r,s,c)}else a.current=null}function gd(r,s,a){try{a()}catch(c){ot(r,s,c)}}var Ag=!1;function G0(r,s){if(Ch=Rr,r=nm(),wh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,U=0,K=0,G=r,W=null;t:for(;;){for(var te;G!==a||d!==0&&G.nodeType!==3||(S=v+d),G!==p||c!==0&&G.nodeType!==3||(P=v+c),G.nodeType===3&&(v+=G.nodeValue.length),(te=G.firstChild)!==null;)W=G,G=te;for(;;){if(G===r)break t;if(W===a&&++U===d&&(S=v),W===p&&++K===c&&(P=v),(te=G.nextSibling)!==null)break;G=W,W=G.parentNode}G=te}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ph={focusedElem:r,selectionRange:a},Rr=!1,re=s;re!==null;)if(s=re,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,re=r;else for(;re!==null;){s=re;try{var ie=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,ct=ie.memoizedState,L=s.stateNode,O=L.getSnapshotBeforeUpdate(s.elementType===s.type?se:Vn(s.type,se),ct);L.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){ot(s,s.return,J)}if(r=s.sibling,r!==null){r.return=s.return,re=r;break}re=s.return}return ie=Ag,Ag=!1,ie}function Ba(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&gd(s,a,p)}d=d.next}while(d!==c)}}function Pu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function yd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Rg(r){var s=r.alternate;s!==null&&(r.alternate=null,Rg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[or],delete s[xa],delete s[bh],delete s[x0],delete s[N0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function kg(r){return r.tag===5||r.tag===3||r.tag===4}function Cg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||kg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function _d(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ou));else if(c!==4&&(r=r.child,r!==null))for(_d(r,s,a),r=r.sibling;r!==null;)_d(r,s,a),r=r.sibling}function vd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(vd(r,s,a),r=r.sibling;r!==null;)vd(r,s,a),r=r.sibling}var Pt=null,Ln=!1;function vi(r,s,a){for(a=a.child;a!==null;)Pg(r,s,a),a=a.sibling}function Pg(r,s,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Xi,a)}catch{}switch(a.tag){case 5:Ft||So(a,s);case 6:var c=Pt,d=Ln;Pt=null,vi(r,s,a),Pt=c,Ln=d,Pt!==null&&(Ln?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Ln?(r=Pt,a=a.stateNode,r.nodeType===8?Dh(r.parentNode,a):r.nodeType===1&&Dh(r,a),ui(r)):Dh(Pt,a.stateNode));break;case 4:c=Pt,d=Ln,Pt=a.stateNode.containerInfo,Ln=!0,vi(r,s,a),Pt=c,Ln=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&gd(a,s,v),d=d.next}while(d!==c)}vi(r,s,a);break;case 1:if(!Ft&&(So(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){ot(a,s,S)}vi(r,s,a);break;case 21:vi(r,s,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,vi(r,s,a),Ft=c):vi(r,s,a);break;default:vi(r,s,a)}}function xg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new K0),s.forEach(function(c){var d=rT.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Mn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,Ln=!1;break e;case 3:Pt=S.stateNode.containerInfo,Ln=!0;break e;case 4:Pt=S.stateNode.containerInfo,Ln=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));Pg(p,v,d),Pt=null,Ln=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){ot(d,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ng(s,r),s=s.sibling}function Ng(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Mn(s,r),ur(r),c&4){try{Ba(3,r,r.return),Pu(3,r)}catch(se){ot(r,r.return,se)}try{Ba(5,r,r.return)}catch(se){ot(r,r.return,se)}}break;case 1:Mn(s,r),ur(r),c&512&&a!==null&&So(a,a.return);break;case 5:if(Mn(s,r),ur(r),c&512&&a!==null&&So(a,a.return),r.flags&32){var d=r.stateNode;try{Ki(d,"")}catch(se){ot(r,r.return,se)}}if(c&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,v=a!==null?a.memoizedProps:p,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&Bs(d,p),qs(S,v);var U=qs(S,p);for(v=0;v<P.length;v+=2){var K=P[v],G=P[v+1];K==="style"?$s(d,G):K==="dangerouslySetInnerHTML"?bl(d,G):K==="children"?Ki(d,G):Te(d,K,G,U)}switch(S){case"input":Wi(d,p);break;case"textarea":Dl(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?Pn(d,!!p.multiple,te,!1):W!==!!p.multiple&&(p.defaultValue!=null?Pn(d,!!p.multiple,p.defaultValue,!0):Pn(d,!!p.multiple,p.multiple?[]:"",!1))}d[xa]=p}catch(se){ot(r,r.return,se)}}break;case 6:if(Mn(s,r),ur(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(se){ot(r,r.return,se)}}break;case 3:if(Mn(s,r),ur(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ui(s.containerInfo)}catch(se){ot(r,r.return,se)}break;case 4:Mn(s,r),ur(r);break;case 13:Mn(s,r),ur(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Td=Ye())),c&4&&xg(r);break;case 22:if(K=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(U=Ft)||K,Mn(s,r),Ft=U):Mn(s,r),ur(r),c&8192){if(U=r.memoizedState!==null,(r.stateNode.isHidden=U)&&!K&&(r.mode&1)!==0)for(re=r,K=r.child;K!==null;){for(G=re=K;re!==null;){switch(W=re,te=W.child,W.tag){case 0:case 11:case 14:case 15:Ba(4,W,W.return);break;case 1:So(W,W.return);var ie=W.stateNode;if(typeof ie.componentWillUnmount=="function"){c=W,a=W.return;try{s=c,ie.props=s.memoizedProps,ie.state=s.memoizedState,ie.componentWillUnmount()}catch(se){ot(c,a,se)}}break;case 5:So(W,W.return);break;case 22:if(W.memoizedState!==null){Og(G);continue}}te!==null?(te.return=W,re=te):Og(G)}K=K.sibling}e:for(K=null,G=r;;){if(G.tag===5){if(K===null){K=G;try{d=G.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=G.stateNode,P=G.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=ei("display",v))}catch(se){ot(r,r.return,se)}}}else if(G.tag===6){if(K===null)try{G.stateNode.nodeValue=U?"":G.memoizedProps}catch(se){ot(r,r.return,se)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===r)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===r)break e;for(;G.sibling===null;){if(G.return===null||G.return===r)break e;K===G&&(K=null),G=G.return}K===G&&(K=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Mn(s,r),ur(r),c&4&&xg(r);break;case 21:break;default:Mn(s,r),ur(r)}}function ur(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(kg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ki(d,""),c.flags&=-33);var p=Cg(r);vd(r,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Cg(r);_d(r,S,v);break;default:throw Error(t(161))}}catch(P){ot(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function Q0(r,s,a){re=r,Dg(r)}function Dg(r,s,a){for(var c=(r.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Cu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ft;S=Cu;var U=Ft;if(Cu=v,(Ft=P)&&!U)for(re=d;re!==null;)v=re,P=v.child,v.tag===22&&v.memoizedState!==null?Vg(d):P!==null?(P.return=v,re=P):Vg(d);for(;p!==null;)re=p,Dg(p),p=p.sibling;re=d,Cu=S,Ft=U}bg(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,re=p):bg(r)}}function bg(r){for(;re!==null;){var s=re;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||Pu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Vn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&xm(s,p,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}xm(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var G=K.dehydrated;G!==null&&ui(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&yd(s)}catch(W){ot(s,s.return,W)}}if(s===r){re=null;break}if(a=s.sibling,a!==null){a.return=s.return,re=a;break}re=s.return}}function Og(r){for(;re!==null;){var s=re;if(s===r){re=null;break}var a=s.sibling;if(a!==null){a.return=s.return,re=a;break}re=s.return}}function Vg(r){for(;re!==null;){var s=re;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Pu(4,s)}catch(P){ot(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){ot(s,d,P)}}var p=s.return;try{yd(s)}catch(P){ot(s,p,P)}break;case 5:var v=s.return;try{yd(s)}catch(P){ot(s,v,P)}}}catch(P){ot(s,s.return,P)}if(s===r){re=null;break}var S=s.sibling;if(S!==null){S.return=s.return,re=S;break}re=s.return}}var Y0=Math.ceil,xu=fe.ReactCurrentDispatcher,wd=fe.ReactCurrentOwner,Sn=fe.ReactCurrentBatchConfig,Me=0,It=null,mt=null,xt=0,fn=0,Ao=pi(0),wt=0,za=null,ps=0,Nu=0,Ed=0,$a=null,Jt=null,Td=0,Ro=1/0,Lr=null,Du=!1,Id=null,wi=null,bu=!1,Ei=null,Ou=0,qa=0,Sd=null,Vu=-1,Lu=0;function Wt(){return(Me&6)!==0?Ye():Vu!==-1?Vu:Vu=Ye()}function Ti(r){return(r.mode&1)===0?1:(Me&2)!==0&&xt!==0?xt&-xt:b0.transition!==null?(Lu===0&&(Lu=ha()),Lu):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:eo(r.type)),r)}function Fn(r,s,a,c){if(50<qa)throw qa=0,Sd=null,Error(t(185));ns(r,a,c),((Me&2)===0||r!==It)&&(r===It&&((Me&2)===0&&(Nu|=a),wt===4&&Ii(r,xt)),Xt(r,c),a===1&&Me===0&&(s.mode&1)===0&&(Ro=Ye()+500,cu&&gi()))}function Xt(r,s){var a=r.callbackNode;ts(r,s);var c=Ir(r,r===It?xt:0);if(c===0)a!==null&&Ks(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&Ks(a),s===1)r.tag===0?D0(Mg.bind(null,r)):Em(Mg.bind(null,r)),C0(function(){(Me&6)===0&&gi()}),a=null;else{switch(Yn(c)){case 1:a=Gs;break;case 4:a=la;break;case 16:a=Ji;break;case 536870912:a=Qs;break;default:a=Ji}a=Hg(a,Lg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Lg(r,s){if(Vu=-1,Lu=0,(Me&6)!==0)throw Error(t(327));var a=r.callbackNode;if(ko()&&r.callbackNode!==a)return null;var c=Ir(r,r===It?xt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Mu(r,c);else{s=c;var d=Me;Me|=2;var p=Ug();(It!==r||xt!==s)&&(Lr=null,Ro=Ye()+500,gs(r,s));do try{Z0();break}catch(S){Fg(r,S)}while(!0);zh(),xu.current=p,Me=d,mt!==null?s=0:(It=null,xt=0,s=wt)}if(s!==0){if(s===2&&(d=ca(r),d!==0&&(c=d,s=Ad(r,d))),s===1)throw a=za,gs(r,0),Ii(r,c),Xt(r,Ye()),a;if(s===6)Ii(r,c);else{if(d=r.current.alternate,(c&30)===0&&!J0(d)&&(s=Mu(r,c),s===2&&(p=ca(r),p!==0&&(c=p,s=Ad(r,p))),s===1))throw a=za,gs(r,0),Ii(r,c),Xt(r,Ye()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ys(r,Jt,Lr);break;case 3:if(Ii(r,c),(c&130023424)===c&&(s=Td+500-Ye(),10<s)){if(Ir(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Wt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Nh(ys.bind(null,r,Jt,Lr),s);break}ys(r,Jt,Lr);break;case 4:if(Ii(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-on(c);p=1<<v,v=s[v],v>d&&(d=v),c&=~p}if(c=d,c=Ye()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Y0(c/1960))-c,10<c){r.timeoutHandle=Nh(ys.bind(null,r,Jt,Lr),c);break}ys(r,Jt,Lr);break;case 5:ys(r,Jt,Lr);break;default:throw Error(t(329))}}}return Xt(r,Ye()),r.callbackNode===a?Lg.bind(null,r):null}function Ad(r,s){var a=$a;return r.current.memoizedState.isDehydrated&&(gs(r,s).flags|=256),r=Mu(r,s),r!==2&&(s=Jt,Jt=a,s!==null&&Rd(s)),r}function Rd(r){Jt===null?Jt=r:Jt.push.apply(Jt,r)}function J0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!bn(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ii(r,s){for(s&=~Ed,s&=~Nu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-on(s),c=1<<a;r[a]=-1,s&=~c}}function Mg(r){if((Me&6)!==0)throw Error(t(327));ko();var s=Ir(r,0);if((s&1)===0)return Xt(r,Ye()),null;var a=Mu(r,s);if(r.tag!==0&&a===2){var c=ca(r);c!==0&&(s=c,a=Ad(r,c))}if(a===1)throw a=za,gs(r,0),Ii(r,s),Xt(r,Ye()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ys(r,Jt,Lr),Xt(r,Ye()),null}function kd(r,s){var a=Me;Me|=1;try{return r(s)}finally{Me=a,Me===0&&(Ro=Ye()+500,cu&&gi())}}function ms(r){Ei!==null&&Ei.tag===0&&(Me&6)===0&&ko();var s=Me;Me|=1;var a=Sn.transition,c=Oe;try{if(Sn.transition=null,Oe=1,r)return r()}finally{Oe=c,Sn.transition=a,Me=s,(Me&6)===0&&gi()}}function Cd(){fn=Ao.current,Xe(Ao)}function gs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,k0(a)),mt!==null)for(a=mt.return;a!==null;){var c=a;switch(Mh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&lu();break;case 3:To(),Xe(Gt),Xe(Vt),Xh();break;case 5:Yh(c);break;case 4:To();break;case 13:Xe(tt);break;case 19:Xe(tt);break;case 10:$h(c.type._context);break;case 22:case 23:Cd()}a=a.return}if(It=r,mt=r=Si(r.current,null),xt=fn=s,wt=0,za=null,Ed=Nu=ps=0,Jt=$a=null,hs!==null){for(s=0;s<hs.length;s++)if(a=hs[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}hs=null}return r}function Fg(r,s){do{var a=mt;try{if(zh(),Eu.current=Au,Tu){for(var c=nt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Tu=!1}if(fs=0,Tt=vt=nt=null,La=!1,Ma=0,wd.current=null,a===null||a.return===null){wt=1,za=s,mt=null;break}e:{var p=r,v=a.return,S=a,P=s;if(s=xt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,K=S,G=K.tag;if((K.mode&1)===0&&(G===0||G===11||G===15)){var W=K.alternate;W?(K.updateQueue=W.updateQueue,K.memoizedState=W.memoizedState,K.lanes=W.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=ug(v);if(te!==null){te.flags&=-257,cg(te,v,S,p,s),te.mode&1&&lg(p,U,s),s=te,P=U;var ie=s.updateQueue;if(ie===null){var se=new Set;se.add(P),s.updateQueue=se}else ie.add(P);break e}else{if((s&1)===0){lg(p,U,s),Pd();break e}P=Error(t(426))}}else if(et&&S.mode&1){var ct=ug(v);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),cg(ct,v,S,p,s),jh(Io(P,S));break e}}p=P=Io(P,S),wt!==4&&(wt=2),$a===null?$a=[p]:$a.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var L=og(p,P,s);Pm(p,L);break e;case 1:S=P;var O=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(wi===null||!wi.has(F)))){p.flags|=65536,s&=-s,p.lanes|=s;var J=ag(p,S,s);Pm(p,J);break e}}p=p.return}while(p!==null)}Bg(a)}catch(oe){s=oe,mt===a&&a!==null&&(mt=a=a.return);continue}break}while(!0)}function Ug(){var r=xu.current;return xu.current=Au,r===null?Au:r}function Pd(){(wt===0||wt===3||wt===2)&&(wt=4),It===null||(ps&268435455)===0&&(Nu&268435455)===0||Ii(It,xt)}function Mu(r,s){var a=Me;Me|=2;var c=Ug();(It!==r||xt!==s)&&(Lr=null,gs(r,s));do try{X0();break}catch(d){Fg(r,d)}while(!0);if(zh(),Me=a,xu.current=c,mt!==null)throw Error(t(261));return It=null,xt=0,wt}function X0(){for(;mt!==null;)jg(mt)}function Z0(){for(;mt!==null&&!Yi();)jg(mt)}function jg(r){var s=qg(r.alternate,r,fn);r.memoizedProps=r.pendingProps,s===null?Bg(r):mt=s,wd.current=null}function Bg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=H0(a,s,fn),a!==null){mt=a;return}}else{if(a=W0(a,s),a!==null){a.flags&=32767,mt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{wt=6,mt=null;return}}if(s=s.sibling,s!==null){mt=s;return}mt=s=r}while(s!==null);wt===0&&(wt=5)}function ys(r,s,a){var c=Oe,d=Sn.transition;try{Sn.transition=null,Oe=1,eT(r,s,a,c)}finally{Sn.transition=d,Oe=c}return null}function eT(r,s,a,c){do ko();while(Ei!==null);if((Me&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(mh(r,p),r===It&&(mt=It=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||bu||(bu=!0,Hg(Ji,function(){return ko(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Sn.transition,Sn.transition=null;var v=Oe;Oe=1;var S=Me;Me|=4,wd.current=null,G0(r,a),Ng(a,r),w0(Ph),Rr=!!Ch,Ph=Ch=null,r.current=a,Q0(a),Tr(),Me=S,Oe=v,Sn.transition=p}else r.current=a;if(bu&&(bu=!1,Ei=r,Ou=d),p=r.pendingLanes,p===0&&(wi=null),ql(a.stateNode),Xt(r,Ye()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Du)throw Du=!1,r=Id,Id=null,r;return(Ou&1)!==0&&r.tag!==0&&ko(),p=r.pendingLanes,(p&1)!==0?r===Sd?qa++:(qa=0,Sd=r):qa=0,gi(),null}function ko(){if(Ei!==null){var r=Yn(Ou),s=Sn.transition,a=Oe;try{if(Sn.transition=null,Oe=16>r?16:r,Ei===null)var c=!1;else{if(r=Ei,Ei=null,Ou=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,re=r.current;re!==null;){var p=re,v=p.child;if((re.flags&16)!==0){var S=p.deletions;if(S!==null){for(var P=0;P<S.length;P++){var U=S[P];for(re=U;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:Ba(8,K,p)}var G=K.child;if(G!==null)G.return=K,re=G;else for(;re!==null;){K=re;var W=K.sibling,te=K.return;if(Rg(K),K===U){re=null;break}if(W!==null){W.return=te,re=W;break}re=te}}}var ie=p.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var ct=se.sibling;se.sibling=null,se=ct}while(se!==null)}}re=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,re=v;else e:for(;re!==null;){if(p=re,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ba(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,re=L;break e}re=p.return}}var O=r.current;for(re=O;re!==null;){v=re;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,re=F;else e:for(v=O;re!==null;){if(S=re,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Pu(9,S)}}catch(oe){ot(S,S.return,oe)}if(S===v){re=null;break e}var J=S.sibling;if(J!==null){J.return=S.return,re=J;break e}re=S.return}}if(Me=d,gi(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Xi,r)}catch{}c=!0}return c}finally{Oe=a,Sn.transition=s}}return!1}function zg(r,s,a){s=Io(a,s),s=og(r,s,1),r=_i(r,s,1),s=Wt(),r!==null&&(ns(r,1,s),Xt(r,s))}function ot(r,s,a){if(r.tag===3)zg(r,r,a);else for(;s!==null;){if(s.tag===3){zg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(wi===null||!wi.has(c))){r=Io(a,r),r=ag(s,r,1),s=_i(s,r,1),r=Wt(),s!==null&&(ns(s,1,r),Xt(s,r));break}}s=s.return}}function tT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&a,It===r&&(xt&a)===a&&(wt===4||wt===3&&(xt&130023424)===xt&&500>Ye()-Td?gs(r,0):Ed|=a),Xt(r,s)}function $g(r,s){s===0&&((r.mode&1)===0?s=1:(s=oi,oi<<=1,(oi&130023424)===0&&(oi=4194304)));var a=Wt();r=br(r,s),r!==null&&(ns(r,s,a),Xt(r,a))}function nT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),$g(r,a)}function rT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),$g(r,a)}var qg;qg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Gt.current)Yt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Yt=!1,q0(r,s,a);Yt=(r.flags&131072)!==0}else Yt=!1,et&&(s.flags&1048576)!==0&&Tm(s,du,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;ku(r,s),r=s.pendingProps;var d=mo(s,Vt.current);wo(s,a),d=td(null,s,c,r,d,a);var p=nd();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qt(c)?(p=!0,uu(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Wh(s),d.updater=_u,s.stateNode=d,d._reactInternals=s,Gh(s,c,r,a),s=cd(null,s,c,!0,p,a)):(s.tag=0,et&&p&&Lh(s),Ht(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(ku(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=sT(c),r=Vn(c,r),d){case 0:s=ud(null,s,c,r,a);break e;case 1:s=gg(null,s,c,r,a);break e;case 11:s=hg(null,s,c,r,a);break e;case 14:s=dg(null,s,c,Vn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),ud(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),gg(r,s,c,d,a);case 3:e:{if(yg(s),r===null)throw Error(t(387));c=s.pendingProps,p=s.memoizedState,d=p.element,Cm(r,s),yu(s,c,null,a);var v=s.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=Io(Error(t(423)),s),s=_g(r,s,c,a,d);break e}else if(c!==d){d=Io(Error(t(424)),s),s=_g(r,s,c,a,d);break e}else for(dn=fi(s.stateNode.containerInfo.firstChild),hn=s,et=!0,On=null,a=Mm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_o(),c===d){s=Vr(r,s,a);break e}Ht(r,s,c,a)}s=s.child}return s;case 5:return Fm(s),r===null&&Uh(s),c=s.type,d=s.pendingProps,p=r!==null?r.memoizedProps:null,v=d.children,xh(c,d)?v=null:p!==null&&xh(c,p)&&(s.flags|=32),mg(r,s),Ht(r,s,v,a),s.child;case 6:return r===null&&Uh(s),null;case 13:return vg(r,s,a);case 4:return Qh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=Eo(s,null,c,a):Ht(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),hg(r,s,c,d,a);case 7:return Ht(r,s,s.pendingProps,a),s.child;case 8:return Ht(r,s,s.pendingProps.children,a),s.child;case 12:return Ht(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,p=s.memoizedProps,v=d.value,Ke(pu,c._currentValue),c._currentValue=v,p!==null)if(bn(p.value,v)){if(p.children===d.children&&!Gt.current){s=Vr(r,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var S=p.dependencies;if(S!==null){v=p.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Or(-1,a&-a),P.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?P.next=P:(P.next=K.next,K.next=P),U.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),qh(p.return,a,s),S.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===s.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),qh(v,a,s),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===s){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Ht(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,wo(s,a),d=Tn(d),c=c(d),s.flags|=1,Ht(r,s,c,a),s.child;case 14:return c=s.type,d=Vn(c,s.pendingProps),d=Vn(c.type,d),dg(r,s,c,d,a);case 15:return fg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),ku(r,s),s.tag=1,Qt(c)?(r=!0,uu(s)):r=!1,wo(s,a),bm(s,c,d),Gh(s,c,d,a),cd(null,s,c,!0,r,a);case 19:return Eg(r,s,a);case 22:return pg(r,s,a)}throw Error(t(156,s.tag))};function Hg(r,s){return aa(r,s)}function iT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,s,a,c){return new iT(r,s,a,c)}function xd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function sT(r){if(typeof r=="function")return xd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===b)return 11;if(r===Fe)return 14}return 2}function Si(r,s){var a=r.alternate;return a===null?(a=An(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Fu(r,s,a,c,d,p){var v=2;if(c=r,typeof r=="function")xd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case D:return _s(a.children,d,p,s);case R:v=8,d|=8;break;case C:return r=An(12,a,s,d|2),r.elementType=C,r.lanes=p,r;case T:return r=An(13,a,s,d),r.elementType=T,r.lanes=p,r;case ue:return r=An(19,a,s,d),r.elementType=ue,r.lanes=p,r;case Re:return Uu(a,d,p,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case V:v=10;break e;case I:v=9;break e;case b:v=11;break e;case Fe:v=14;break e;case Ae:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=An(v,a,s,d),s.elementType=r,s.type=c,s.lanes=p,s}function _s(r,s,a,c){return r=An(7,r,c,s),r.lanes=a,r}function Uu(r,s,a,c){return r=An(22,r,c,s),r.elementType=Re,r.lanes=a,r.stateNode={isHidden:!1},r}function Nd(r,s,a){return r=An(6,r,null,s),r.lanes=a,r}function Dd(r,s,a){return s=An(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function oT(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=da(0),this.expirationTimes=da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bd(r,s,a,c,d,p,v,S,P){return r=new oT(r,s,a,S,P),s===1?(s=1,p===!0&&(s|=8)):s=0,p=An(3,null,null,s),r.current=p,p.stateNode=r,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wh(p),r}function aT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Wg(r){if(!r)return mi;r=r._reactInternals;e:{if(Nn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Qt(a))return vm(r,a,s)}return s}function Kg(r,s,a,c,d,p,v,S,P){return r=bd(a,c,!0,r,d,p,v,S,P),r.context=Wg(null),a=r.current,c=Wt(),d=Ti(a),p=Or(c,d),p.callback=s??null,_i(a,p,d),r.current.lanes=d,ns(r,d,c),Xt(r,c),r}function ju(r,s,a,c){var d=s.current,p=Wt(),v=Ti(d);return a=Wg(a),s.context===null?s.context=a:s.pendingContext=a,s=Or(p,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=_i(d,s,v),r!==null&&(Fn(r,d,v,p),gu(r,d,v)),v}function Bu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Gg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Od(r,s){Gg(r,s),(r=r.alternate)&&Gg(r,s)}function lT(){return null}var Qg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Vd(r){this._internalRoot=r}zu.prototype.render=Vd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));ju(r,s,null,null)},zu.prototype.unmount=Vd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ms(function(){ju(null,r,null,null)}),s[Pr]=null}};function zu(r){this._internalRoot=r}zu.prototype.unstable_scheduleHydration=function(r){if(r){var s=ga();r={blockedOn:null,target:r,priority:s};for(var a=0;a<an.length&&s!==0&&s<an[a].priority;a++);an.splice(a,0,r),a===0&&Xs(r)}};function Ld(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function $u(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function uT(r,s,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=Bu(v);p.call(U)}}var v=Kg(s,c,r,0,null,!1,!1,"",Yg);return r._reactRootContainer=v,r[Pr]=v.current,Ca(r.nodeType===8?r.parentNode:r),ms(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=Bu(P);S.call(U)}}var P=bd(r,0,!1,null,null,!1,!1,"",Yg);return r._reactRootContainer=P,r[Pr]=P.current,Ca(r.nodeType===8?r.parentNode:r),ms(function(){ju(s,P,a,c)}),P}function qu(r,s,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var S=d;d=function(){var P=Bu(v);S.call(P)}}ju(s,v,r,d)}else v=uT(a,s,r,d,c);return Bu(v)}pa=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Be(s.pendingLanes);a!==0&&(fa(s,a|1),Xt(s,Ye()),(Me&6)===0&&(Ro=Ye()+500,gi()))}break;case 13:ms(function(){var c=br(r,1);if(c!==null){var d=Wt();Fn(c,r,1,d)}}),Od(r,1)}},Ys=function(r){if(r.tag===13){var s=br(r,134217728);if(s!==null){var a=Wt();Fn(s,r,134217728,a)}Od(r,134217728)}},ma=function(r){if(r.tag===13){var s=Ti(r),a=br(r,s);if(a!==null){var c=Wt();Fn(a,r,s,c)}Od(r,s)}},ga=function(){return Oe},ya=function(r,s){var a=Oe;try{return Oe=r,s()}finally{Oe=a}},vr=function(r,s,a){switch(s){case"input":if(Wi(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=au(c);if(!d)throw Error(t(90));Xo(c),Wi(c,d)}}}break;case"textarea":Dl(r,a);break;case"select":s=a.value,s!=null&&Pn(r,!!a.multiple,s,!1)}},Vl=kd,Ll=ms;var cT={usingClientEntryPoint:!1,Events:[Na,fo,au,ni,ri,kd]},Ha={findFiberByHostInstance:as,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hT={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=$l(r),r===null?null:r.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||lT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{Xi=Hu.inject(hT),sn=Hu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cT,Zt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ld(s))throw Error(t(200));return aT(r,s,null,a)},Zt.createRoot=function(r,s){if(!Ld(r))throw Error(t(299));var a=!1,c="",d=Qg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=bd(r,1,!1,null,null,a,!1,c,d),r[Pr]=s.current,Ca(r.nodeType===8?r.parentNode:r),new Vd(s)},Zt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=$l(s),r=r===null?null:r.stateNode,r},Zt.flushSync=function(r){return ms(r)},Zt.hydrate=function(r,s,a){if(!$u(s))throw Error(t(200));return qu(null,r,s,!0,a)},Zt.hydrateRoot=function(r,s,a){if(!Ld(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Qg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Kg(s,null,r,1,a??null,d,!1,p,v),r[Pr]=s.current,Ca(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new zu(s)},Zt.render=function(r,s,a){if(!$u(s))throw Error(t(200));return qu(null,r,s,!1,a)},Zt.unmountComponentAtNode=function(r){if(!$u(r))throw Error(t(40));return r._reactRootContainer?(ms(function(){qu(null,null,r,!1,function(){r._reactRootContainer=null,r[Pr]=null})}),!0):!1},Zt.unstable_batchedUpdates=kd,Zt.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!$u(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return qu(r,s,a,!1,c)},Zt.version="18.2.0-next-9e3b772b8-20220608",Zt}var iy;function vT(){if(iy)return Ud.exports;iy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ud.exports=_T(),Ud.exports}var sy;function wT(){if(sy)return Wu;sy=1;var n=vT();return Wu.createRoot=n.createRoot,Wu.hydrateRoot=n.hydrateRoot,Wu}var ET=wT();const TT=ev(ET),IT="modulepreload",ST=function(n){return"/"+n},oy={},Lf=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let h=function(_){return Promise.all(_.map(w=>Promise.resolve(w).then(A=>({status:"fulfilled",value:A}),A=>({status:"rejected",reason:A}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=h(t.map(_=>{if(_=ST(_),_ in oy)return;oy[_]=!0;const w=_.endsWith(".css"),A=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${A}`))return;const N=document.createElement("link");if(N.rel=w?"stylesheet":IT,w||(N.as="script"),N.crossOrigin="",N.href=_,g&&N.setAttribute("nonce",g),document.head.appendChild(N),w)return new Promise((B,Q)=>{N.addEventListener("load",B),N.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${_}`)))})}))}function l(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return o.then(h=>{for(const f of h||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};var tl=(n=>(n.ADMIN="ADMIN",n.MEMBER="MEMBER",n.PENDING="PENDING",n))(tl||{});const AT=n=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.598m-1.5-6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"})}),RT=({className:n="w-6 h-6"})=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:n,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"})}),kT=({onLoginClick:n})=>{const{currentUser:e,logout:t}=s0();return k.jsx("header",{className:"sticky top-0 z-40 glass-nav transition-colors duration-300",children:k.jsx("div",{className:"container mx-auto px-4 py-4 sm:px-6 lg:px-8",children:k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("div",{className:"flex items-center space-x-4 group cursor-pointer",children:[k.jsx(AT,{className:"h-10 w-10 text-orange-600 animate-fade-in group-hover:scale-110 transition-transform"}),k.jsxs("h1",{className:"text-2xl md:text-3xl font-display font-black text-orange-950 tracking-tighter uppercase",children:["Union Connect ",k.jsx("span",{className:"text-orange-600",children:"Hub"})]})]}),k.jsx("div",{className:"flex items-center space-x-2 md:space-x-4 animate-fade-in",children:e?k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"hidden sm:flex flex-col items-end",children:[k.jsxs("span",{className:"text-sm text-orange-950/70 leading-tight",children:["Welcome, ",k.jsx("span",{className:"font-bold text-orange-950",children:e.employeeName})]}),k.jsx("span",{className:`text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full mt-0.5 ${e.role===tl.ADMIN?"bg-orange-600 text-white shadow-lg shadow-orange-200":"bg-orange-100 text-orange-700 border border-orange-200"}`,children:e.role})]}),k.jsx("button",{onClick:t,className:"px-4 py-2 text-sm font-semibold text-white bg-orange-600 border border-transparent rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all hover:-translate-y-0.5",children:"Logout"})]}):k.jsxs("button",{onClick:()=>n==null?void 0:n(),className:"flex items-center gap-2 px-4 py-2 text-sm font-black text-orange-700 bg-white border border-orange-200 rounded-xl shadow-sm hover:bg-orange-50 hover:border-orange-300 transition-all hover:-translate-y-0.5 active:scale-95 uppercase tracking-wider",children:[k.jsx(RT,{className:"w-5 h-5"}),k.jsx("span",{className:"hidden sm:inline",children:"Member Login"}),k.jsx("span",{className:"sm:hidden",children:"Login"})]})})]})})})},CT=n=>k.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:[k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 100 12h-3a7.5 7.5 0 00-7.5-7.5h1.5v-1.5a7.5 7.5 0 007.5-7.5h3z"}),k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-1.875a1.125 1.125 0 01-1.125-1.125v-1.5a1.125 1.125 0 011.125-1.125h1.875m.75 4.5l.375-.375a1.875 1.875 0 000-2.65l-3.375-3.375a1.875 1.875 0 00-2.65 0l-.375.375m.75 4.5l-4.5-4.5"})]}),PT=({className:n="w-6 h-6"})=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:n,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"})}),xT=n=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),NT=n=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3.375 3.375 0 0119.5 7.372l-10.94 10.94a2.25 2.25 0 01-3.182-3.182l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a1.125 1.125 0 001.591 1.591l10.94-10.94a2.25 2.25 0 00-3.182-3.182L5.625 15.375a3.375 3.375 0 004.773 4.773l7.693-7.693a.75.75 0 011.06-1.06z"})}),tN=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"],DT=[{id:1,name:"S.K. Gupta",post:"President"},{id:2,name:"Mukesh Kumar",post:"Vice President"},{id:3,name:"Sudhir",post:"General Secretary"},{id:4,name:"Ravinder Kumar",post:"Joint Secretary Industrial Dispute"},{id:5,name:"Manoj Katiyar",post:"Joint Secretary Welfare"},{id:6,name:"Krishna Kumar",post:"Treasurer"},{id:7,name:"Manoj Nandal",post:"Assistant Joint Secretary Industrial Dispute"},{id:8,name:"Pradeep Kumar",post:"Assistant Joint Secretary Welfare"},{id:9,name:"Debabrata Sahu",post:"Executive Member"},{id:10,name:"Sandeep Kumar",post:"Executive Member"},{id:11,name:"Mohit Kajal",post:"Executive Member"},{id:12,name:"Naveen Kumar",post:"Executive Member"},{id:13,name:"Pardeep",post:"Executive Member"}],pn={hindiName:"इंडियन ऑयल पानीपत रिफ़ाइनरी एम्पलाईज यूनियन",englishName:"INDIAN OIL PANIPAT REFINERY EMPLOYEES UNION (IPREU)",address:"पानीपत रिफ़ाइनरी एवं पेट्रोकेमिकल कॉम्प्लेक्स, पोस्ट ऑफिस: पानीपत रिफ़ाइनरी, बहोली, पानीपत-132140 (हरियाणा)",phones:["9034084033","9416658215"],intercom:"01802524045",email:"PRIPREU@INDIANOIL.IN",affiliation:"भारतीय मजदूर संघ (बी.एम.एस. से सम्बद्ध)",regdNo:"1542"},nv=()=>k.jsxs("div",{className:"flex flex-col items-center gap-3 py-6",children:[k.jsxs("div",{className:"relative group",children:[k.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"}),k.jsxs("div",{className:"relative px-8 py-4 bg-white border-2 border-orange-500/20 rounded-2xl shadow-xl flex flex-col items-center transition-all hover:border-orange-500/50",children:[k.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-2 drop-shadow-sm",children:"Official Platform Identity"}),k.jsxs("h4",{className:"text-base md:text-lg font-black tracking-tight text-center leading-tight",children:[k.jsx("span",{className:"text-gray-900",children:"Design & Developed by "}),k.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-700 uppercase drop-shadow-sm",children:"Mr. NAVEEN KUMAR"})]}),k.jsx("div",{className:"mt-2 px-3 py-0.5 bg-orange-600 rounded-full",children:k.jsx("p",{className:"text-[9px] font-black text-white uppercase tracking-widest",children:"(EXECUTIVE MEMBER) IPREU"})})]})]}),k.jsxs("div",{className:"flex items-center gap-3 mt-1 opacity-60",children:[k.jsx("span",{className:"h-[2px] w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"}),k.jsx("span",{className:"text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]",children:"Secure Premium Infrastructure"}),k.jsx("span",{className:"h-[2px] w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"})]})]}),bT=({name:n,post:e})=>k.jsx("div",{className:"p-5 rounded-2xl border transition-all duration-300 bg-white border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 group",children:k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx("div",{className:"w-14 h-14 rounded-full flex items-center justify-center text-lg font-black bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 group-hover:scale-110 shadow-sm border border-orange-100 transition-transform duration-300",children:n.split(" ").map(t=>t[0]).join("").substring(0,2)}),k.jsxs("div",{children:[k.jsx("p",{className:"font-black text-xl text-[#15803d] tracking-tight leading-tight mb-0.5 transition-colors uppercase",children:n}),k.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-orange-700 font-black",children:e})]})]})}),OT=({onLoginClick:n})=>{const{calendarEvents:e,announcements:t,users:i,grievances:o,stats:l}=s0(),h=e.filter(w=>new Date(w.date)>=new Date(new Date().setHours(0,0,0,0))).sort((w,A)=>w.date.localeCompare(A.date)).slice(0,3),f=t.slice(0,3),g=w=>{if(!w)return!1;const A=new Date,N=new Date(w);return A.getDate()===N.getDate()&&A.getMonth()===N.getMonth()},_=i.filter(w=>w.role==="MEMBER"&&g(w.dob));return k.jsxs("div",{className:"min-h-[calc(100vh-80px)] flex flex-col justify-between -mt-4 md:-mt-8 -mx-4 md:-mx-8",children:[k.jsxs("section",{className:"relative overflow-hidden bg-[#2D0606] text-white py-24 md:py-36 px-6 lg:px-12 flex items-center justify-center",children:[k.jsx("style",{children:`
                    .hero-gradient {
                        background: radial-gradient(circle at top right, #4c0505 0%, #1a0202 70%, #000000 100%);
                    }
                `}),k.jsx("div",{className:"absolute inset-0 hero-gradient opacity-90"}),k.jsx("div",{className:"absolute top-0 left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] animate-blob"}),k.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[120px] animate-blob animation-delay-2000"}),k.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto text-center space-y-10",children:[k.jsxs("div",{className:"inline-flex flex-col items-center gap-6",children:[k.jsxs("div",{className:"px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-bold text-orange-200 shadow-2xl flex items-center gap-2",children:[k.jsxs("span",{className:"flex h-2 w-2 relative",children:[k.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),k.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-orange-500"})]}),"SECURE CENTRALIZED MEMBER HUB"]}),k.jsx("h2",{className:"text-3xl md:text-5xl font-black text-orange-500 font-display transition-all hover:scale-105 duration-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]",children:pn.hindiName})]}),k.jsxs("h1",{className:"text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] drop-shadow-2xl",children:["Strength Through ",k.jsx("br",{})," ",k.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase",children:"Unity & Transparency"})]}),k.jsxs("p",{className:"text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-lg",children:["The official digital home for ",pn.englishName,". Affiliated with ",k.jsx("span",{className:"text-white font-bold underline decoration-orange-500 decoration-2 underline-offset-4",children:pn.affiliation}),"."]}),k.jsxs("div",{className:"pt-10 flex flex-col sm:flex-row items-center justify-center gap-6",children:[k.jsx("button",{onClick:n,className:"w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white font-black rounded-2xl shadow-[0_20px_50px_rgba(185,28,28,0.3)] transition-all hover:-translate-y-1 active:scale-95 text-xl border border-white/20",children:"Access Member Portal →"}),k.jsx("a",{href:"#leadership",className:"w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl backdrop-blur-xl border border-white/10 transition-all hover:-translate-y-1 text-xl",children:"View Executive Body"})]})]})]}),k.jsx("section",{className:"py-20 bg-[#fcfaf7] relative z-20 border-b border-orange-100",children:k.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-12",children:k.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[k.jsxs("div",{className:"space-y-8",children:[k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx("div",{className:"p-3 bg-orange-100 text-orange-600 rounded-xl",children:k.jsx(PT,{className:"w-7 h-7"})}),k.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-orange-950",children:"Union Calendar"})]}),k.jsxs("div",{className:"space-y-3",children:[h.length>0?h.map(w=>k.jsxs("div",{className:"bg-white p-4 rounded-xl border border-orange-100 shadow-sm flex items-center justify-between group hover:border-orange-300 transition-colors",children:[k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsxs("div",{className:"flex flex-col items-center justify-center bg-orange-50 w-14 h-14 rounded-lg border border-orange-100",children:[k.jsx("span",{className:"text-[10px] text-orange-800/50 uppercase font-bold",children:new Date(w.date).toLocaleString("default",{month:"short"})}),k.jsx("span",{className:"text-xl font-bold text-orange-700 leading-none",children:new Date(w.date).getDate()})]}),k.jsxs("div",{children:[k.jsx("h4",{className:"font-bold text-orange-950 group-hover:text-orange-600 transition-colors",children:w.title}),k.jsxs("div",{className:"flex items-center gap-3 text-xs text-orange-900/70 mt-1",children:[k.jsxs("span",{className:"flex items-center gap-1",children:[k.jsx(xT,{className:"w-3 h-3"})," ",w.startTime]}),w.location&&k.jsxs("span",{className:"flex items-center gap-1",children:["📍 ",w.location]})]})]})]}),k.jsx("button",{onClick:n,className:"text-xs font-bold text-orange-700 hover:text-orange-600 uppercase tracking-widest px-3 py-1 bg-orange-50 rounded-full border border-orange-100",children:"Details"})]},w.id)):k.jsx("p",{className:"text-orange-950/80 font-black uppercase tracking-[0.2em] italic py-8 text-center bg-white rounded-xl border border-dashed border-orange-200",children:"No upcoming events listed for this month."}),k.jsx("p",{className:"text-center",children:k.jsx("button",{onClick:n,className:"text-sm font-semibold text-orange-700 hover:text-orange-800",children:"View Full Calendar →"})})]})]}),k.jsxs("div",{className:"space-y-8",children:[k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx("div",{className:"p-3 bg-orange-100 text-orange-600 rounded-xl",children:k.jsx(CT,{className:"w-7 h-7"})}),k.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-orange-950",children:"Latest Circulars"})]}),k.jsxs("div",{className:"space-y-3",children:[f.length>0?f.map(w=>k.jsxs("div",{className:"bg-white p-4 rounded-xl border border-orange-100 shadow-sm transition-all hover:border-orange-300",children:[k.jsxs("div",{className:"flex justify-between items-start mb-2",children:[k.jsx("h4",{className:"font-bold text-orange-950 line-clamp-1",children:w.title}),k.jsx("span",{className:"text-[10px] bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-bold",children:"OFFICIAL"})]}),k.jsx("p",{className:"text-sm text-orange-900/80 line-clamp-2 mb-3",children:w.content}),k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx("span",{className:"text-[10px] text-orange-900/60 font-medium italic",children:new Date(w.createdAt).toLocaleDateString()}),w.attachment&&k.jsxs("button",{onClick:n,className:"flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700",children:[k.jsx(NT,{className:"w-3.5 h-3.5"}),"View Attachment"]})]})]},w.id)):k.jsx("p",{className:"text-orange-950/80 font-black uppercase tracking-[0.2em] italic py-10 text-center bg-white rounded-2xl border-2 border-dashed border-orange-100/50 shadow-inner",children:"No public notices available at this time."}),k.jsx("p",{className:"text-center",children:k.jsx("button",{onClick:n,className:"text-sm font-semibold text-orange-600 hover:text-orange-700",children:"Read All Circulars →"})})]})]})]})})}),k.jsx("section",{id:"leadership",className:"py-24 px-6 lg:px-12 bg-[#fcfaf7] relative z-20",children:k.jsxs("div",{className:"max-w-6xl mx-auto",children:[k.jsxs("div",{className:"text-center mb-20",children:[k.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-orange-950 mb-6 font-display uppercase tracking-tight",children:["Executive Body of ",k.jsx("span",{className:"text-orange-600",children:"IPREU"})]}),k.jsx("div",{className:"w-32 h-2 bg-gradient-to-r from-orange-400 to-red-800 mx-auto rounded-full mb-8 opacity-80"}),k.jsx("p",{className:"text-base md:text-lg text-orange-950/80 max-w-3xl mx-auto leading-relaxed font-medium",children:"Serving with dedication, integrity, and a commitment to member welfare and industrial harmony."})]}),k.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:DT.map(w=>k.jsx(bT,{name:w.name,post:w.post},w.id))})]})}),_.length>0&&k.jsxs("section",{className:"py-24 px-6 md:px-12 bg-gradient-to-b from-orange-50 to-white overflow-hidden relative",children:[k.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -mr-32 -mt-32"}),k.jsxs("div",{className:"max-w-7xl mx-auto",children:[k.jsxs("div",{className:"text-center mb-16 relative z-10",children:[k.jsx("span",{className:"text-orange-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block",children:"Celebrations"}),k.jsx("h2",{className:"text-5xl md:text-7xl font-black text-[#013220] uppercase tracking-tighter mb-4",children:"Birthday Stars 🎂"}),k.jsx("p",{className:"text-lg md:text-xl text-gray-700 font-bold max-w-2xl mx-auto",children:"Wishing our dedicated union members a year of pride and prosperity!"})]}),k.jsx("div",{className:"flex flex-wrap justify-center gap-8 md:gap-12 relative z-10",children:_.map(w=>k.jsxs("div",{className:"flex flex-col items-center group",children:[k.jsxs("div",{className:"relative mb-6",children:[k.jsx("div",{className:"absolute inset-0 bg-orange-500 rounded-full scale-110 blur-[10px] opacity-0 group-hover:opacity-30 transition-opacity"}),k.jsx("div",{className:"w-32 h-32 md:w-44 md:h-44 rounded-full border-[6px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500",children:k.jsx("img",{src:w.photoUrl,alt:w.employeeName,className:"w-full h-full object-cover"})}),k.jsx("div",{className:"absolute -bottom-2 -right-2 bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform z-20",children:"🎈"})]}),k.jsx("h3",{className:"text-xl md:text-2xl font-black text-[#013220] uppercase tracking-tight group-hover:text-orange-600 transition-colors",children:w.employeeName}),k.jsxs("p",{className:"text-[10px] font-black text-orange-950/70 uppercase tracking-[0.2em] mt-1",children:[w.employeeNumber," • ",w.postingLocation]})]},w.id))})]})]}),k.jsxs("section",{className:"py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative",children:[k.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]"}),k.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-12 relative z-10",children:k.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-12 text-center",children:[k.jsxs("div",{className:"space-y-2 group",children:[k.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:i.filter(w=>w.role==="MEMBER").length}),k.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Registered Members"})]}),k.jsxs("div",{className:"space-y-2 group",children:[k.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:l.announcementCount||t.length}),k.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Digital Circulars"})]}),k.jsxs("div",{className:"space-y-2 group",children:[k.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:pn.regdNo}),k.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Registration No."})]}),k.jsxs("div",{className:"space-y-2 group",children:[k.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:"Active"}),k.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Network Status"})]})]})})]}),k.jsxs("section",{className:"py-24 px-6 lg:px-12 bg-[#fcfaf7] relative z-20",children:[k.jsx("div",{className:"max-w-6xl mx-auto text-center mb-20",children:k.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-orange-950 mb-8 font-display underline decoration-orange-500 decoration-4 underline-offset-12",children:"How to Join IPREU"})}),k.jsxs("div",{className:"max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative",children:[k.jsx("div",{className:"absolute top-1/2 left-0 w-full h-1 bg-orange-100 hidden md:block -z-10"}),k.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-100 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all",children:[k.jsx("div",{className:"w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-600/20",children:"1"}),k.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Digital Registration"}),k.jsx("p",{className:"text-base text-orange-950/70",children:"Click Join and fill in your official employee details via our secure form."})]}),k.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-200 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all",children:[k.jsx("div",{className:"w-12 h-12 bg-orange-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-900/20",children:"2"}),k.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Admin Verification"}),k.jsx("p",{className:"text-base text-orange-950/70",children:"Your details will be reviewed by the Executive Body for union credentials."})]}),k.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-200 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all",children:[k.jsx("div",{className:"w-12 h-12 bg-orange-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-900/20",children:"3"}),k.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Full Access"}),k.jsx("p",{className:"text-base text-orange-950/70",children:"Receive your digital ID card and gain access to voting, circulars, and more."})]})]}),k.jsx("div",{className:"mt-16 text-center",children:k.jsx("button",{onClick:n,className:"px-12 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:-translate-y-1",children:"Start Registration Now"})})]}),k.jsxs("footer",{className:"bg-orange-950 text-orange-100 py-16 px-6 border-t border-orange-900 relative z-20",children:[k.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12",children:[k.jsxs("div",{className:"md:col-span-2 space-y-4",children:[k.jsx("h4",{className:"text-2xl font-display font-bold text-white tracking-tight",children:pn.englishName}),k.jsx("p",{className:"text-lg text-orange-300 font-bold mb-4",children:pn.hindiName}),k.jsx("p",{className:"text-sm leading-relaxed max-w-md text-orange-100/60",children:pn.address}),k.jsxs("div",{className:"pt-4 space-y-2 text-sm",children:[k.jsxs("p",{className:"flex items-center gap-3",children:[k.jsx("span",{className:"text-orange-400",children:"📞"})," ",pn.phones.join(" / ")," (Ext: ",pn.intercom,")"]}),k.jsxs("p",{className:"flex items-center gap-3",children:[k.jsx("span",{className:"text-orange-400",children:"✉️"})," ",k.jsx("a",{href:`mailto:${pn.email}`,className:"hover:text-orange-300 transition-colors",children:pn.email})]})]})]}),k.jsxs("div",{children:[k.jsx("h5",{className:"text-orange-300 font-bold mb-4 uppercase text-xs tracking-widest font-display",children:"Compliance"}),k.jsxs("ul",{className:"space-y-3 text-sm text-orange-100/60",children:[k.jsxs("li",{children:["Affiliation: ",pn.affiliation]}),k.jsxs("li",{children:["Regd No: ",pn.regdNo]}),k.jsx("li",{children:k.jsxs("span",{className:"flex items-center gap-2",children:[k.jsx("span",{className:"w-2 h-2 rounded-full bg-orange-400"})," Network Status: Active"]})})]})]}),k.jsxs("div",{children:[k.jsx("h5",{className:"text-orange-300 font-bold mb-4 uppercase text-xs tracking-widest font-display",children:"Navigation"}),k.jsx("ul",{className:"space-y-2 text-sm text-orange-100/60",children:k.jsx("li",{children:k.jsx("button",{onClick:()=>n("calendar"),className:"hover:text-orange-300 transition-colors",children:"Union Calendar"})})})]})]}),k.jsxs("div",{className:"max-w-6xl mx-auto mt-12 pt-8 border-t border-orange-900/60 flex flex-col items-center gap-6",children:[k.jsx(nv,{}),k.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center w-full gap-4 text-[10px] uppercase tracking-widest text-orange-100/40 font-medium",children:[k.jsxs("p",{children:["© ",new Date().getFullYear()," IPREU. All rights reserved. | Built for the Employees, by the Union."]}),k.jsx("p",{className:"text-orange-400 font-bold px-3 py-1 bg-orange-400/10 rounded-full border border-orange-400/20",children:"Secure Private Network"})]})]})]})]})},VT=()=>{};var ay={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},LT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},iv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,g=o+2<n.length,_=g?n[o+2]:0,w=l>>2,A=(l&3)<<4|f>>4;let N=(f&15)<<2|_>>6,B=_&63;g||(B=64,h||(N=64)),i.push(t[w],t[A],t[N],t[B])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):LT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const A=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||_==null||A==null)throw new MT;const N=l<<2|f>>4;if(i.push(N),_!==64){const B=f<<4&240|_>>2;if(i.push(B),A!==64){const Q=_<<6&192|A;i.push(Q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class MT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FT=function(n){const e=rv(n);return iv.encodeByteArray(e,!0)},mc=function(n){return FT(n).replace(/\./g,"")},sv=function(n){try{return iv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=()=>UT().__FIREBASE_DEFAULTS__,BT=()=>{if(typeof process>"u"||typeof ay>"u")return;const n=ay.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sv(n[1]);return e&&JSON.parse(e)},Fc=()=>{try{return VT()||jT()||BT()||zT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ov=n=>{var e,t;return(t=(e=Fc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},av=n=>{const e=ov(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},lv=()=>{var n;return(n=Fc())==null?void 0:n.config},uv=n=>{var e;return(e=Fc())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[mc(JSON.stringify(t)),mc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function HT(){var e;const n=(e=Fc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function GT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QT(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function YT(){return!HT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hv(){try{return typeof indexedDB=="object"}catch{return!1}}function dv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function JT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="FirebaseError";class Hn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=XT,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?ZT(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Hn(o,f,i)}}function ZT(n,e){return n.replace(eI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const eI=/\{\$([^}]+)}/g;function tI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ss(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(ly(l)&&ly(h)){if(!Ss(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function ly(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Qa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ya(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function nI(n,e){const t=new rI(n,e);return t.subscribe.bind(t)}class rI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");iI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=zd),o.error===void 0&&(o.error=zd),o.complete===void 0&&(o.complete=zd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mf(n){return(await fetch(n,{credentials:"include"})).ok}class Cn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new $T;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aI(e))try{this.getOrInitializeService({instanceIdentifier:vs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vs){return this.instances.has(e)}getOptions(e=vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:oI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=vs){return this.component?this.component.multipleInstances?e:vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oI(n){return n===vs?void 0:n}function aI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const uI={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},cI=xe.INFO,hI={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},dI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=hI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ff{constructor(e){this.name=e,this._logLevel=cI,this._logHandler=dI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const fI=(n,e)=>e.some(t=>n instanceof t);let uy,cy;function pI(){return uy||(uy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mI(){return cy||(cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fv=new WeakMap,uf=new WeakMap,pv=new WeakMap,$d=new WeakMap,Uf=new WeakMap;function gI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Br(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&fv.set(t,n)}).catch(()=>{}),Uf.set(e,n),e}function yI(n){if(uf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});uf.set(n,e)}let cf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Br(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _I(n){cf=n(cf)}function vI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(qd(this),e,...t);return pv.set(i,e.sort?e.sort():[e]),Br(i)}:mI().includes(n)?function(...e){return n.apply(qd(this),e),Br(fv.get(this))}:function(...e){return Br(n.apply(qd(this),e))}}function wI(n){return typeof n=="function"?vI(n):(n instanceof IDBTransaction&&yI(n),fI(n,pI())?new Proxy(n,cf):n)}function Br(n){if(n instanceof IDBRequest)return gI(n);if($d.has(n))return $d.get(n);const e=wI(n);return e!==n&&($d.set(n,e),Uf.set(e,n)),e}const qd=n=>Uf.get(n);function Uc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=Br(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Br(h.result),g.oldVersion,g.newVersion,Br(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}function Hd(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Br(t).then(()=>{})}const EI=["get","getKey","getAll","getAllKeys","count"],TI=["put","add","delete","clear"],Wd=new Map;function hy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wd.get(e))return Wd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=TI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||EI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Wd.set(e,l),l}_I(n=>({...n,get:(e,t,i)=>hy(e,t)||n.get(e,t,i),has:(e,t)=>!!hy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(SI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function SI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hf="@firebase/app",dy="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Ff("@firebase/app"),AI="@firebase/app-compat",RI="@firebase/analytics-compat",kI="@firebase/analytics",CI="@firebase/app-check-compat",PI="@firebase/app-check",xI="@firebase/auth",NI="@firebase/auth-compat",DI="@firebase/database",bI="@firebase/data-connect",OI="@firebase/database-compat",VI="@firebase/functions",LI="@firebase/functions-compat",MI="@firebase/installations",FI="@firebase/installations-compat",UI="@firebase/messaging",jI="@firebase/messaging-compat",BI="@firebase/performance",zI="@firebase/performance-compat",$I="@firebase/remote-config",qI="@firebase/remote-config-compat",HI="@firebase/storage",WI="@firebase/storage-compat",KI="@firebase/firestore",GI="@firebase/ai",QI="@firebase/firestore-compat",YI="firebase",JI="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="[DEFAULT]",XI={[hf]:"fire-core",[AI]:"fire-core-compat",[kI]:"fire-analytics",[RI]:"fire-analytics-compat",[PI]:"fire-app-check",[CI]:"fire-app-check-compat",[xI]:"fire-auth",[NI]:"fire-auth-compat",[DI]:"fire-rtdb",[bI]:"fire-data-connect",[OI]:"fire-rtdb-compat",[VI]:"fire-fn",[LI]:"fire-fn-compat",[MI]:"fire-iid",[FI]:"fire-iid-compat",[UI]:"fire-fcm",[jI]:"fire-fcm-compat",[BI]:"fire-perf",[zI]:"fire-perf-compat",[$I]:"fire-rc",[qI]:"fire-rc-compat",[HI]:"fire-gcs",[WI]:"fire-gcs-compat",[KI]:"fire-fst",[QI]:"fire-fst-compat",[GI]:"fire-vertex","fire-js":"fire-js",[YI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Map,ZI=new Map,ff=new Map;function fy(n,e){try{n.container.addComponent(e)}catch(t){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zn(n){const e=n.name;if(ff.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;ff.set(e,n);for(const t of gc.values())fy(t,n);for(const t of ZI.values())fy(t,n);return!0}function Os(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function gn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bi=new bs("app","Firebase",eS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=JI;function mv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:df,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw bi.create("bad-app-name",{appName:String(o)});if(t||(t=lv()),!t)throw bi.create("no-options");const l=gc.get(o);if(l){if(Ss(t,l.options)&&Ss(i,l.config))return l;throw bi.create("duplicate-app",{appName:o})}const h=new lI(o);for(const g of ff.values())h.addComponent(g);const f=new tS(t,i,h);return gc.set(o,f),f}function jc(n=df){const e=gc.get(n);if(!e&&n===df&&lv())return mv();if(!e)throw bi.create("no-app",{appName:n});return e}function nn(n,e,t){let i=XI[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(h.join(" "));return}zn(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebase-heartbeat-database",rS=1,al="firebase-heartbeat-store";let Kd=null;function gv(){return Kd||(Kd=Uc(nS,rS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(al)}catch(t){console.warn(t)}}}}).catch(n=>{throw bi.create("idb-open",{originalErrorMessage:n.message})})),Kd}async function iS(n){try{const t=(await gv()).transaction(al),i=await t.objectStore(al).get(yv(n));return await t.done,i}catch(e){if(e instanceof Hn)qr.warn(e.message);else{const t=bi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(t.message)}}}async function py(n,e){try{const i=(await gv()).transaction(al,"readwrite");await i.objectStore(al).put(e,yv(n)),await i.done}catch(t){if(t instanceof Hn)qr.warn(t.message);else{const i=bi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qr.warn(i.message)}}}function yv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=1024,oS=30;class aS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=my();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>oS){const h=cS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){qr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=my(),{heartbeatsToSend:i,unsentEntries:o}=lS(this._heartbeatsCache.heartbeats),l=mc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return qr.warn(t),""}}}function my(){return new Date().toISOString().substring(0,10)}function lS(n,e=sS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),gy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),gy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class uS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hv()?dv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return py(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return py(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gy(n){return mc(JSON.stringify({version:2,heartbeats:n})).length}function cS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(n){zn(new Cn("platform-logger",e=>new II(e),"PRIVATE")),zn(new Cn("heartbeat",e=>new aS(e),"PRIVATE")),nn(hf,dy,n),nn(hf,dy,"esm2020"),nn("fire-js","")}hS("");var dS="firebase",fS="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(dS,fS,"app");function _v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pS=_v,vv=new bs("auth","Firebase",_v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Ff("@firebase/auth");function mS(n,...e){yc.logLevel<=xe.WARN&&yc.warn(`Auth (${Vs}): ${n}`,...e)}function rc(n,...e){yc.logLevel<=xe.ERROR&&yc.error(`Auth (${Vs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n,...e){throw jf(n,...e)}function hr(n,...e){return jf(n,...e)}function wv(n,e,t){const i={...pS(),[e]:t};return new bs("auth","Firebase",i).create(e,{appName:n.name})}function zr(n){return wv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return vv.create(n,...e)}function pe(n,e,...t){if(!n)throw jf(e,...t)}function Ur(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rc(e),new Error(e)}function Hr(n,e){n||Ur(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function gS(){return yy()==="http:"||yy()==="https:"}function yy(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gS()||KT()||"connection"in navigator)?navigator.onLine:!0}function _S(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hr(t>e,"Short delay should be less than long delay!"),this.isMobile=qT()||GT()}get(){return yS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n,e){Hr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ES=new El(3e4,6e4);function zi(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function $i(n,e,t,i,o={}){return Tv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=wl({key:n.config.apiKey,...h}).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const _={method:e,headers:g,...l};return WT()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&Ho(n.emulatorConfig.host)&&(_.credentials="include"),Ev.fetch()(await Iv(n,n.config.apiHost,t,f),_)})}async function Tv(n,e,t){n._canInitEmulator=!1;const i={...vS,...e};try{const o=new IS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Ku(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ku(n,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ku(n,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ku(n,"user-disabled",h);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw wv(n,w,_);$n(n,w)}}catch(o){if(o instanceof Hn)throw o;$n(n,"network-request-failed",{message:String(o)})}}async function Tl(n,e,t,i,o={}){const l=await $i(n,e,t,i,o);return"mfaPendingCredential"in l&&$n(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Iv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?Bf(n.config,o):`${n.config.apiScheme}://${o}`;return wS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function TS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(hr(this.auth,"network-request-failed")),ES.get())})}}function Ku(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=hr(n,e,i);return o.customData._tokenResponse=t,o}function _y(n){return n!==void 0&&n.enterprise!==void 0}class SS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return TS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function AS(n,e){return $i(n,"GET","/v2/recaptchaConfig",zi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(n,e){return $i(n,"POST","/v1/accounts:delete",e)}async function _c(n,e){return $i(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kS(n,e=!1){const t=rt(n),i=await t.getIdToken(e),o=zf(i);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:nl(Gd(o.auth_time)),issuedAtTime:nl(Gd(o.iat)),expirationTime:nl(Gd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Gd(n){return Number(n)*1e3}function zf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return rc("JWT malformed, contained fewer than 3 sections"),null;try{const o=sv(t);return o?JSON.parse(o):(rc("Failed to decode base64 JWT payload"),null)}catch(o){return rc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function vy(n){const e=zf(n);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Hn&&CS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function CS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=nl(this.lastLoginAt),this.creationTime=nl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(n){var A;const e=n.auth,t=await n.getIdToken(),i=await ll(n,_c(e,{idToken:t}));pe(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=(A=o.providerUserInfo)!=null&&A.length?Sv(o.providerUserInfo):[],h=NS(n.providerData,l),f=n.isAnonymous,g=!(n.email&&o.passwordHash)&&!(h!=null&&h.length),_=f?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new mf(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,w)}async function xS(n){const e=rt(n);await vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Sv(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(n,e){const t=await Tv(n,{},async()=>{const i=wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await Iv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return n.emulatorConfig&&Ho(n.emulatorConfig.host)&&(g.credentials="include"),Ev.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bS(n,e){return $i(n,"POST","/v2/accounts:revokeToken",zi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=vy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await DS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Vo;return i&&(pe(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(pe(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vo,this.toJSON())}_performRefresh(){return Ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n,e){pe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Un{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new PS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new mf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ll(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kS(this,e)}reload(){return xS(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Un({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await vc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(zr(this.auth));const e=await this.getIdToken();return await ll(this,RS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:A,emailVerified:N,isAnonymous:B,providerData:Q,stsTokenManager:Y}=t;pe(A&&Y,e,"internal-error");const q=Vo.fromJSON(this.name,Y);pe(typeof A=="string",e,"internal-error"),Ri(i,e.name),Ri(o,e.name),pe(typeof N=="boolean",e,"internal-error"),pe(typeof B=="boolean",e,"internal-error"),Ri(l,e.name),Ri(h,e.name),Ri(f,e.name),Ri(g,e.name),Ri(_,e.name),Ri(w,e.name);const ge=new Un({uid:A,auth:e,email:o,emailVerified:N,displayName:i,isAnonymous:B,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:q,createdAt:_,lastLoginAt:w});return Q&&Array.isArray(Q)&&(ge.providerData=Q.map(ve=>({...ve}))),g&&(ge._redirectEventId=g),ge}static async _fromIdTokenResponse(e,t,i=!1){const o=new Vo;o.updateFromServerResponse(t);const l=new Un({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await vc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Sv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Vo;f.updateFromIdToken(i);const g=new Un({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new mf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new Map;function jr(n){Hr(n instanceof Function,"Expected a class definition");let e=wy.get(n);return e?(Hr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Av.type="NONE";const Ey=Av;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n,e,t){return`firebase:${n}:${e}:${t}`}class Lo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=ic(this.userKey,o.apiKey,l),this.fullPersistenceKey=ic("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await _c(this.auth,{idToken:e}).catch(()=>{});return t?Un._fromGetAccountInfoResponse(this.auth,t,e):null}return Un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Lo(jr(Ey),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||jr(Ey);const h=ic(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){let A;if(typeof w=="string"){const N=await _c(e,{idToken:w}).catch(()=>{});if(!N)break;A=await Un._fromGetAccountInfoResponse(e,N,w)}else A=Un._fromJSON(e,w);_!==l&&(f=A),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Lo(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new Lo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nv(e))return"Blackberry";if(Dv(e))return"Webos";if(kv(e))return"Safari";if((e.includes("chrome/")||Cv(e))&&!e.includes("edge/"))return"Chrome";if(xv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Rv(n=qt()){return/firefox\//i.test(n)}function kv(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cv(n=qt()){return/crios\//i.test(n)}function Pv(n=qt()){return/iemobile/i.test(n)}function xv(n=qt()){return/android/i.test(n)}function Nv(n=qt()){return/blackberry/i.test(n)}function Dv(n=qt()){return/webos/i.test(n)}function $f(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function OS(n=qt()){var e;return $f(n)&&!!((e=window.navigator)!=null&&e.standalone)}function VS(){return QT()&&document.documentMode===10}function bv(n=qt()){return $f(n)||xv(n)||Dv(n)||Nv(n)||/windows phone/i.test(n)||Pv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(n,e=[]){let t;switch(n){case"Browser":t=Ty(qt());break;case"Worker":t=`${Ty(qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(n,e={}){return $i(n,"GET","/v2/passwordPolicy",zi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=6;class US{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??FS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iy(this),this.idTokenSubscription=new Iy(this),this.beforeStateQueue=new LS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Lo.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _c(this,{idToken:e}),i=await Un._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(gn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(i=g.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(h){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(zr(this));const t=e?rt(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MS(this),t=new US(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await bS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jr(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[jr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&mS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ls(n){return rt(n)}class Iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=nI(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BS(n){Bc=n}function Vv(n){return Bc.loadJS(n)}function zS(){return Bc.recaptchaEnterpriseScript}function $S(){return Bc.gapiScript}function qS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class HS{constructor(){this.enterprise=new WS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class WS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const KS="recaptcha-enterprise",Lv="NO_RECAPTCHA";class GS{constructor(e){this.type=KS,this.auth=Ls(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{AS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new SS(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;_y(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(Lv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&_y(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=zS();g.length!==0&&(g+=f),Vv(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function Sy(n,e,t,i=!1,o=!1){const l=new GS(n);let h;if(o)h=Lv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function gf(n,e,t,i,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Sy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Sy(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(n,e){const t=Os(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ss(l,e??{}))return o;$n(o,"already-initialized")}return t.initialize({options:e})}function YS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(jr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function JS(n,e,t){const i=Ls(n);pe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Mv(e),{host:h,port:f}=XS(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){pe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),pe(Ss(_,i.config.emulator)&&Ss(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Ho(h)?Mf(`${l}//${h}${g}`):ZS()}function Mv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function XS(n){const e=Mv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Ay(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Ay(h)}}}function Ay(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ZS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ur("not implemented")}_getIdTokenResponse(e){return Ur("not implemented")}_linkToIdToken(e,t){return Ur("not implemented")}_getReauthenticationResolver(e){return Ur("not implemented")}}async function eA(n,e){return $i(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(n,e){return Tl(n,"POST","/v1/accounts:signInWithPassword",zi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(n,e){return Tl(n,"POST","/v1/accounts:signInWithEmailLink",zi(n,e))}async function rA(n,e){return Tl(n,"POST","/v1/accounts:signInWithEmailLink",zi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends qf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ul(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ul(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gf(e,t,"signInWithPassword",tA);case"emailLink":return nA(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gf(e,i,"signUpPassword",eA);case"emailLink":return rA(e,{idToken:t,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(n,e){return Tl(n,"POST","/v1/accounts:signInWithIdp",zi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="http://localhost";class As extends qf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new As(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Mo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Mo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mo(e,t)}buildRequest(){const e={requestUri:iA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oA(n){const e=Qa(Ya(n)).link,t=e?Qa(Ya(e)).deep_link_id:null,i=Qa(Ya(n)).deep_link_id;return(i?Qa(Ya(i)).link:null)||i||t||e||n}class Hf{constructor(e){const t=Qa(Ya(e)),i=t.apiKey??null,o=t.oobCode??null,l=sA(t.mode??null);pe(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=oA(e);try{return new Hf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.providerId=Wo.PROVIDER_ID}static credential(e,t){return ul._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Hf.parseLink(t);return pe(i,"argument-error"),ul._fromEmailAndCode(e,i.code,i.tenantId)}}Wo.PROVIDER_ID="password";Wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends Fv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Il{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ki.credential(e.oauthAccessToken)}catch{return null}}}ki.FACEBOOK_SIGN_IN_METHOD="facebook.com";ki.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return As._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ci.credential(t,i)}catch{return null}}}Ci.GOOGLE_SIGN_IN_METHOD="google.com";Ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Il{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pi.credential(e.oauthAccessToken)}catch{return null}}}Pi.GITHUB_SIGN_IN_METHOD="github.com";Pi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Il{constructor(){super("twitter.com")}static credential(e,t){return As._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return xi.credential(t,i)}catch{return null}}}xi.TWITTER_SIGN_IN_METHOD="twitter.com";xi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(n,e){return Tl(n,"POST","/v1/accounts:signUp",zi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Un._fromIdTokenResponse(e,i,o),h=Ry(i);return new Rs({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Ry(i);return new Rs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Ry(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends Hn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,wc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new wc(e,t,i,o)}}function Uv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?wc._fromErrorAndOperation(n,l,e,i):l})}async function lA(n,e,t=!1){const i=await ll(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(n,e,t=!1){const{auth:i}=n;if(gn(i.app))return Promise.reject(zr(i));const o="reauthenticate";try{const l=await ll(n,Uv(i,o,e,n),t);pe(l.idToken,i,"internal-error");const h=zf(l.idToken);pe(h,i,"internal-error");const{sub:f}=h;return pe(n.uid===f,i,"user-mismatch"),Rs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&$n(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(n,e,t=!1){if(gn(n.app))return Promise.reject(zr(n));const i="signIn",o=await Uv(n,i,e),l=await Rs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function cA(n,e){return jv(Ls(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(n){const e=Ls(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hA(n,e,t){if(gn(n.app))return Promise.reject(zr(n));const i=Ls(n),h=await gf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aA).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Bv(n),g}),f=await Rs._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function dA(n,e,t){return gn(n.app)?Promise.reject(zr(n)):cA(rt(n),Wo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Bv(n),i})}function fA(n,e,t,i){return rt(n).onIdTokenChanged(e,t,i)}function pA(n,e,t){return rt(n).beforeAuthStateChanged(e,t)}function mA(n,e,t,i){return rt(n).onAuthStateChanged(e,t,i)}function sc(n){return rt(n).signOut()}const Ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ec,"1"),this.storage.removeItem(Ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=1e3,yA=10;class $v extends zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);VS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,yA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$v.type="LOCAL";const _A=$v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv extends zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qv.type="SESSION";const Hv=qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new zc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await vA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=Wf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(A){const N=A;if(N.data.eventId===_)switch(N.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(N.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return window}function EA(n){dr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function TA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function SA(){return Wv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="firebaseLocalStorageDb",AA=1,Tc="firebaseLocalStorage",Gv="fbase_key";class Sl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $c(n,e){return n.transaction([Tc],e?"readwrite":"readonly").objectStore(Tc)}function RA(){const n=indexedDB.deleteDatabase(Kv);return new Sl(n).toPromise()}function yf(){const n=indexedDB.open(Kv,AA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Tc,{keyPath:Gv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Tc)?e(i):(i.close(),await RA(),e(await yf()))})})}async function ky(n,e,t){const i=$c(n,!0).put({[Gv]:e,value:t});return new Sl(i).toPromise()}async function kA(n,e){const t=$c(n,!1).get(e),i=await new Sl(t).toPromise();return i===void 0?null:i.value}function Cy(n,e){const t=$c(n,!0).delete(e);return new Sl(t).toPromise()}const CA=800,PA=3;class Qv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>PA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zc._getInstance(SA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await TA(),!this.activeServiceWorker)return;this.sender=new wA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yf();return await ky(e,Ec,"1"),await Cy(e,Ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ky(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>kA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=$c(o,!1).getAll();return new Sl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qv.type="LOCAL";const xA=Qv;new El(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(n,e){return e?jr(e):(pe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends qf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function DA(n){return jv(n.auth,new Kf(n),n.bypassAuthState)}function bA(n){const{auth:e,user:t}=n;return pe(t,e,"internal-error"),uA(t,new Kf(n),n.bypassAuthState)}async function OA(n){const{auth:e,user:t}=n;return pe(t,e,"internal-error"),lA(t,new Kf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DA;case"linkViaPopup":case"linkViaRedirect":return OA;case"reauthViaPopup":case"reauthViaRedirect":return bA;default:$n(this.auth,"internal-error")}}resolve(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new El(2e3,1e4);class Oo extends Yv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Oo.currentPopupAction&&Oo.currentPopupAction.cancel(),Oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Hr(this.filter.length===1,"Popup operations only handle one event");const e=Wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(hr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(hr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VA.get())};e()}}Oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA="pendingRedirect",oc=new Map;class MA extends Yv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const i=await FA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FA(n,e){const t=BA(e),i=jA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function UA(n,e){oc.set(n._key(),e)}function jA(n){return jr(n._redirectPersistence)}function BA(n){return ic(LA,n.config.apiKey,n.name)}async function zA(n,e,t=!1){if(gn(n.app))return Promise.reject(zr(n));const i=Ls(n),o=NA(i,e),h=await new MA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=600*1e3;class qA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Jv(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(hr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$A&&this.cachedEventUids.clear(),this.cachedEventUids.has(Py(e))}saveEventToCache(e){this.cachedEventUids.add(Py(e)),this.lastProcessedEventTime=Date.now()}}function Py(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Jv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n,e={}){return $i(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GA=/^https?/;async function QA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await WA(n);for(const t of e)try{if(YA(t))return}catch{}$n(n,"unauthorized-domain")}function YA(n){const e=pf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!GA.test(t))return!1;if(KA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new El(3e4,6e4);function xy(){const n=dr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function XA(n){return new Promise((e,t)=>{var o,l,h;function i(){xy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xy(),t(hr(n,"network-request-failed"))},timeout:JA.get()})}if((l=(o=dr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=dr().gapi)!=null&&h.load)i();else{const f=qS("iframefcb");return dr()[f]=()=>{gapi.load?i():t(hr(n,"network-request-failed"))},Vv(`${$S()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw ac=null,e})}let ac=null;function ZA(n){return ac=ac||XA(n),ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new El(5e3,15e3),tR="__/auth/iframe",nR="emulator/auth/iframe",rR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sR(n){const e=n.config;pe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bf(e,nR):`https://${n.config.authDomain}/${tR}`,i={apiKey:e.apiKey,appName:n.name,v:Vs},o=iR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${wl(i).slice(1)}`}async function oR(n){const e=await ZA(n),t=dr().gapi;return pe(t,n,"internal-error"),e.open({where:document.body,url:sR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=hr(n,"network-request-failed"),f=dr().setTimeout(()=>{l(h)},eR.get());function g(){dr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lR=500,uR=600,cR="_blank",hR="http://localhost";class Ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dR(n,e,t,i=lR,o=uR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...aR,width:i.toString(),height:o.toString(),top:l,left:h},_=qt().toLowerCase();t&&(f=Cv(_)?cR:t),Rv(_)&&(e=e||hR,g.scrollbars="yes");const w=Object.entries(g).reduce((N,[B,Q])=>`${N}${B}=${Q},`,"");if(OS(_)&&f!=="_self")return fR(e||"",f),new Ny(null);const A=window.open(e||"",f,w);pe(A,n,"popup-blocked");try{A.focus()}catch{}return new Ny(A)}function fR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="__/auth/handler",mR="emulator/auth/handler",gR=encodeURIComponent("fac");async function Dy(n,e,t,i,o,l){pe(n.config.authDomain,n,"auth-domain-config-required"),pe(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Vs,eventId:o};if(e instanceof Fv){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",tI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof Il){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await n._getAppCheckToken(),_=g?`#${gR}=${encodeURIComponent(g)}`:"";return`${yR(n)}?${wl(f).slice(1)}${_}`}function yR({config:n}){return n.emulator?Bf(n,mR):`https://${n.authDomain}/${pR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="webStorageSupport";class _R{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hv,this._completeRedirectFn=zA,this._overrideRedirectResult=UA}async _openPopup(e,t,i,o){var h;Hr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await Dy(e,t,i,pf(),o);return dR(e,l,Wf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Dy(e,t,i,pf(),o);return EA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Hr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await oR(e),i=new qA(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qd,{type:Qd},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[Qd];l!==void 0&&t(!!l),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bv()||kv()||$f()}}const vR=_R;var by="@firebase/auth",Oy="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TR(n){zn(new Cn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ov(n)},_=new jS(i,o,l,g);return YS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),zn(new Cn("auth-internal",e=>{const t=Ls(e.getProvider("auth").getImmediate());return(i=>new wR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(by,Oy,ER(n)),nn(by,Oy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=300,SR=uv("authIdTokenMaxAge")||IR;let Vy=null;const AR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>SR)return;const o=t==null?void 0:t.token;Vy!==o&&(Vy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function RR(n=jc()){const e=Os(n,"auth");if(e.isInitialized())return e.getImmediate();const t=QS(n,{popupRedirectResolver:vR,persistence:[xA,_A,Hv]}),i=uv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=AR(l.toString());pA(t,h,()=>h(t.currentUser)),fA(t,f=>h(f))}}const o=ov("auth");return o&&JS(t,`http://${o}`),t}function kR(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}BS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=hr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",kR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TR("Browser");const Xv="@firebase/installations",Gf="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=1e4,ew=`w:${Gf}`,tw="FIS_v2",CR="https://firebaseinstallations.googleapis.com/v1",PR=3600*1e3,xR="installations",NR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ks=new bs(xR,NR,DR);function nw(n){return n instanceof Hn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw({projectId:n}){return`${CR}/projects/${n}/installations`}function iw(n){return{token:n.token,requestStatus:2,expiresIn:OR(n.expiresIn),creationTime:Date.now()}}async function sw(n,e){const i=(await e.json()).error;return ks.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ow({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function bR(n,{refreshToken:e}){const t=ow(n);return t.append("Authorization",VR(e)),t}async function aw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function OR(n){return Number(n.replace("s","000"))}function VR(n){return`${tw} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=rw(n),o=ow(n),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:tw,appId:n.appId,sdkVersion:ew},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await aw(()=>fetch(i,f));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:iw(_.authToken)}}else throw await sw("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=/^[cdef][\w-]{21}$/,_f="";function UR(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=jR(n);return FR.test(t)?t:_f}catch{return _f}}function jR(n){return MR(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new Map;function cw(n,e){const t=qc(n);hw(t,e),BR(t,e)}function hw(n,e){const t=uw.get(n);if(t)for(const i of t)i(e)}function BR(n,e){const t=zR();t&&t.postMessage({key:n,fid:e}),$R()}let ws=null;function zR(){return!ws&&"BroadcastChannel"in self&&(ws=new BroadcastChannel("[Firebase] FID Change"),ws.onmessage=n=>{hw(n.data.key,n.data.fid)}),ws}function $R(){uw.size===0&&ws&&(ws.close(),ws=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="firebase-installations-database",HR=1,Cs="firebase-installations-store";let Yd=null;function Qf(){return Yd||(Yd=Uc(qR,HR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Cs)}}})),Yd}async function Ic(n,e){const t=qc(n),o=(await Qf()).transaction(Cs,"readwrite"),l=o.objectStore(Cs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&cw(n,e.fid),e}async function dw(n){const e=qc(n),i=(await Qf()).transaction(Cs,"readwrite");await i.objectStore(Cs).delete(e),await i.done}async function Hc(n,e){const t=qc(n),o=(await Qf()).transaction(Cs,"readwrite"),l=o.objectStore(Cs),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&cw(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(n){let e;const t=await Hc(n.appConfig,i=>{const o=WR(i),l=KR(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===_f?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function WR(n){const e=n||{fid:UR(),registrationStatus:0};return fw(e)}function KR(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ks.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=GR(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QR(n)}:{installationEntry:e}}async function GR(n,e){try{const t=await LR(n,e);return Ic(n.appConfig,t)}catch(t){throw nw(t)&&t.customData.serverCode===409?await dw(n.appConfig):await Ic(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function QR(n){let e=await Ly(n.appConfig);for(;e.registrationStatus===1;)await lw(100),e=await Ly(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Yf(n);return i||t}return e}function Ly(n){return Hc(n,e=>{if(!e)throw ks.create("installation-not-found");return fw(e)})}function fw(n){return YR(n)?{fid:n.fid,registrationStatus:0}:n}function YR(n){return n.registrationStatus===1&&n.registrationTime+Zv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR({appConfig:n,heartbeatServiceProvider:e},t){const i=XR(n,t),o=bR(n,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:ew,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await aw(()=>fetch(i,f));if(g.ok){const _=await g.json();return iw(_)}else throw await sw("Generate Auth Token",g)}function XR(n,{fid:e}){return`${rw(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(n,e=!1){let t;const i=await Hc(n.appConfig,l=>{if(!pw(l))throw ks.create("not-registered");const h=l.authToken;if(!e&&tk(h))return l;if(h.requestStatus===1)return t=ZR(n,e),l;{if(!navigator.onLine)throw ks.create("app-offline");const f=rk(l);return t=ek(n,f),f}});return t?await t:i.authToken}async function ZR(n,e){let t=await My(n.appConfig);for(;t.authToken.requestStatus===1;)await lw(100),t=await My(n.appConfig);const i=t.authToken;return i.requestStatus===0?Jf(n,e):i}function My(n){return Hc(n,e=>{if(!pw(e))throw ks.create("not-registered");const t=e.authToken;return ik(t)?{...e,authToken:{requestStatus:0}}:e})}async function ek(n,e){try{const t=await JR(n,e),i={...e,authToken:t};return await Ic(n.appConfig,i),t}catch(t){if(nw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await dw(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Ic(n.appConfig,i)}throw t}}function pw(n){return n!==void 0&&n.registrationStatus===2}function tk(n){return n.requestStatus===2&&!nk(n)}function nk(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+PR}function rk(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function ik(n){return n.requestStatus===1&&n.requestTime+Zv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(n){const e=n,{installationEntry:t,registrationPromise:i}=await Yf(e);return i?i.catch(console.error):Jf(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(n,e=!1){const t=n;return await ak(t),(await Jf(t,e)).token}async function ak(n){const{registrationPromise:e}=await Yf(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(n){if(!n||!n.options)throw Jd("App Configuration");if(!n.name)throw Jd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Jd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Jd(n){return ks.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="installations",uk="installations-internal",ck=n=>{const e=n.getProvider("app").getImmediate(),t=lk(e),i=Os(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},hk=n=>{const e=n.getProvider("app").getImmediate(),t=Os(e,mw).getImmediate();return{getId:()=>sk(t),getToken:o=>ok(t,o)}};function dk(){zn(new Cn(mw,ck,"PUBLIC")),zn(new Cn(uk,hk,"PRIVATE"))}dk();nn(Xv,Gf);nn(Xv,Gf,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk="/firebase-messaging-sw.js",pk="/firebase-cloud-messaging-push-scope",gw="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",mk="https://fcmregistrations.googleapis.com/v1",yw="google.c.a.c_id",gk="google.c.a.c_l",yk="google.c.a.ts",_k="google.c.a.e",Fy=1e4;var Uy;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Uy||(Uy={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var cl;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(cl||(cl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function vk(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="fcm_token_details_db",wk=5,jy="fcm_token_object_Store";async function Ek(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Xd))return null;let e=null;return(await Uc(Xd,wk,{upgrade:async(i,o,l,h)=>{if(o<2||!i.objectStoreNames.contains(jy))return;const f=h.objectStore(jy),g=await f.index("fcmSenderId").get(n);if(await f.clear(),!!g){if(o===2){const _=g;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:_.createTime??Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:Mr(_.vapidKey)}}}else if(o===3){const _=g;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:Mr(_.auth),p256dh:Mr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:Mr(_.vapidKey)}}}else if(o===4){const _=g;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:Mr(_.auth),p256dh:Mr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:Mr(_.vapidKey)}}}}}})).close(),await Hd(Xd),await Hd("fcm_vapid_details_db"),await Hd("undefined"),Tk(e)?e:null}function Tk(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="firebase-messaging-database",Sk=1,hl="firebase-messaging-store";let Zd=null;function _w(){return Zd||(Zd=Uc(Ik,Sk,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(hl)}}})),Zd}async function Ak(n){const e=vw(n),i=await(await _w()).transaction(hl).objectStore(hl).get(e);if(i)return i;{const o=await Ek(n.appConfig.senderId);if(o)return await Xf(n,o),o}}async function Xf(n,e){const t=vw(n),o=(await _w()).transaction(hl,"readwrite");return await o.objectStore(hl).put(e,t),await o.done,e}function vw({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},$t=new bs("messaging","Messaging",Rk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(n,e){const t=await ep(n),i=ww(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(Zf(n.appConfig),o)).json()}catch(h){throw $t.create("token-subscribe-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw $t.create("token-subscribe-failed",{errorInfo:h})}if(!l.token)throw $t.create("token-subscribe-no-token");return l.token}async function Ck(n,e){const t=await ep(n),i=ww(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${Zf(n.appConfig)}/${e.token}`,o)).json()}catch(h){throw $t.create("token-update-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw $t.create("token-update-failed",{errorInfo:h})}if(!l.token)throw $t.create("token-update-no-token");return l.token}async function Pk(n,e){const i={method:"DELETE",headers:await ep(n)};try{const l=await(await fetch(`${Zf(n.appConfig)}/${e}`,i)).json();if(l.error){const h=l.error.message;throw $t.create("token-unsubscribe-failed",{errorInfo:h})}}catch(o){throw $t.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Zf({projectId:n}){return`${mk}/projects/${n}/registrations`}async function ep({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function ww({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==gw&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=10080*60*1e3;async function Nk(n){const e=await bk(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Mr(e.getKey("auth")),p256dh:Mr(e.getKey("p256dh"))},i=await Ak(n.firebaseDependencies);if(i){if(Ok(i.subscriptionOptions,t))return Date.now()>=i.createTime+xk?Dk(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await Pk(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return By(n.firebaseDependencies,t)}else return By(n.firebaseDependencies,t)}async function Dk(n,e){try{const t=await Ck(n.firebaseDependencies,e),i={...e,token:t,createTime:Date.now()};return await Xf(n.firebaseDependencies,i),t}catch(t){throw t}}async function By(n,e){const i={token:await kk(n,e),createTime:Date.now(),subscriptionOptions:e};return await Xf(n,i),i.token}async function bk(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:vk(e)})}function Ok(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return Vk(e,n),Lk(e,n),Mk(e,n),e}function Vk(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function Lk(n,e){e.data&&(n.data=e.data)}function Mk(n,e){var o,l,h,f;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;n.fcmOptions={};const t=((l=e.fcmOptions)==null?void 0:l.link)??((h=e.notification)==null?void 0:h.click_action);t&&(n.fcmOptions.link=t);const i=(f=e.fcmOptions)==null?void 0:f.analytics_label;i&&(n.fcmOptions.analyticsLabel=i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(n){return typeof n=="object"&&!!n&&yw in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(n){if(!n||!n.options)throw ef("App Configuration Object");if(!n.name)throw ef("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw ef(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function ef(n){return $t.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Uk(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(n){try{n.swRegistration=await navigator.serviceWorker.register(fk,{scope:pk}),n.swRegistration.update().catch(()=>{}),await zk(n.swRegistration)}catch(e){throw $t.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function zk(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${Fy} ms`)),Fy),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var h;((h=l.target)==null?void 0:h.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(n,e){if(!e&&!n.swRegistration&&await Bk(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw $t.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=gw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(n,e){if(!navigator)throw $t.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw $t.create("permission-blocked");return await qk(n,e==null?void 0:e.vapidKey),await $k(n,e==null?void 0:e.serviceWorkerRegistration),Nk(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(n,e,t){const i=Wk(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[yw],message_name:t[gk],message_time:t[yk],message_device_time:Math.floor(Date.now()/1e3)})}function Wk(n){switch(n){case cl.NOTIFICATION_CLICKED:return"notification_open";case cl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===cl.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(zy(t)):n.onMessageHandler.next(zy(t)));const i=t.data;Fk(i)&&i[_k]==="1"&&await Hk(n,t.messageType,i)}const $y="@firebase/messaging",qy="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=n=>{const e=new jk(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>Kk(e,t)),e},Qk=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>Ew(e,i)}};function Yk(){zn(new Cn("messaging",Gk,"PUBLIC")),zn(new Cn("messaging-internal",Qk,"PRIVATE")),nn($y,qy),nn($y,qy,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(){try{await dv()}catch{return!1}return typeof window<"u"&&hv()&&JT()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(n,e){if(!navigator)throw $t.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(n=jc()){return Jk().then(e=>{if(!e)throw $t.create("unsupported-browser")},e=>{throw $t.create("indexed-db-unsupported")}),Os(rt(n),"messaging").getImmediate()}async function e1(n,e){return n=rt(n),Ew(n,e)}function t1(n,e){return n=rt(n),Xk(n,e)}Yk();var Hy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oi,Tw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function C(){}C.prototype=R.prototype,D.F=R.prototype,D.prototype=new C,D.prototype.constructor=D,D.D=function(V,I,b){for(var T=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)T[ue-2]=arguments[ue];return R.prototype[I].apply(V,T)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,R,C){C||(C=0);const V=Array(16);if(typeof R=="string")for(var I=0;I<16;++I)V[I]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(I=0;I<16;++I)V[I]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=D.g[0],C=D.g[1],I=D.g[2];let b=D.g[3],T;T=R+(b^C&(I^b))+V[0]+3614090360&4294967295,R=C+(T<<7&4294967295|T>>>25),T=b+(I^R&(C^I))+V[1]+3905402710&4294967295,b=R+(T<<12&4294967295|T>>>20),T=I+(C^b&(R^C))+V[2]+606105819&4294967295,I=b+(T<<17&4294967295|T>>>15),T=C+(R^I&(b^R))+V[3]+3250441966&4294967295,C=I+(T<<22&4294967295|T>>>10),T=R+(b^C&(I^b))+V[4]+4118548399&4294967295,R=C+(T<<7&4294967295|T>>>25),T=b+(I^R&(C^I))+V[5]+1200080426&4294967295,b=R+(T<<12&4294967295|T>>>20),T=I+(C^b&(R^C))+V[6]+2821735955&4294967295,I=b+(T<<17&4294967295|T>>>15),T=C+(R^I&(b^R))+V[7]+4249261313&4294967295,C=I+(T<<22&4294967295|T>>>10),T=R+(b^C&(I^b))+V[8]+1770035416&4294967295,R=C+(T<<7&4294967295|T>>>25),T=b+(I^R&(C^I))+V[9]+2336552879&4294967295,b=R+(T<<12&4294967295|T>>>20),T=I+(C^b&(R^C))+V[10]+4294925233&4294967295,I=b+(T<<17&4294967295|T>>>15),T=C+(R^I&(b^R))+V[11]+2304563134&4294967295,C=I+(T<<22&4294967295|T>>>10),T=R+(b^C&(I^b))+V[12]+1804603682&4294967295,R=C+(T<<7&4294967295|T>>>25),T=b+(I^R&(C^I))+V[13]+4254626195&4294967295,b=R+(T<<12&4294967295|T>>>20),T=I+(C^b&(R^C))+V[14]+2792965006&4294967295,I=b+(T<<17&4294967295|T>>>15),T=C+(R^I&(b^R))+V[15]+1236535329&4294967295,C=I+(T<<22&4294967295|T>>>10),T=R+(I^b&(C^I))+V[1]+4129170786&4294967295,R=C+(T<<5&4294967295|T>>>27),T=b+(C^I&(R^C))+V[6]+3225465664&4294967295,b=R+(T<<9&4294967295|T>>>23),T=I+(R^C&(b^R))+V[11]+643717713&4294967295,I=b+(T<<14&4294967295|T>>>18),T=C+(b^R&(I^b))+V[0]+3921069994&4294967295,C=I+(T<<20&4294967295|T>>>12),T=R+(I^b&(C^I))+V[5]+3593408605&4294967295,R=C+(T<<5&4294967295|T>>>27),T=b+(C^I&(R^C))+V[10]+38016083&4294967295,b=R+(T<<9&4294967295|T>>>23),T=I+(R^C&(b^R))+V[15]+3634488961&4294967295,I=b+(T<<14&4294967295|T>>>18),T=C+(b^R&(I^b))+V[4]+3889429448&4294967295,C=I+(T<<20&4294967295|T>>>12),T=R+(I^b&(C^I))+V[9]+568446438&4294967295,R=C+(T<<5&4294967295|T>>>27),T=b+(C^I&(R^C))+V[14]+3275163606&4294967295,b=R+(T<<9&4294967295|T>>>23),T=I+(R^C&(b^R))+V[3]+4107603335&4294967295,I=b+(T<<14&4294967295|T>>>18),T=C+(b^R&(I^b))+V[8]+1163531501&4294967295,C=I+(T<<20&4294967295|T>>>12),T=R+(I^b&(C^I))+V[13]+2850285829&4294967295,R=C+(T<<5&4294967295|T>>>27),T=b+(C^I&(R^C))+V[2]+4243563512&4294967295,b=R+(T<<9&4294967295|T>>>23),T=I+(R^C&(b^R))+V[7]+1735328473&4294967295,I=b+(T<<14&4294967295|T>>>18),T=C+(b^R&(I^b))+V[12]+2368359562&4294967295,C=I+(T<<20&4294967295|T>>>12),T=R+(C^I^b)+V[5]+4294588738&4294967295,R=C+(T<<4&4294967295|T>>>28),T=b+(R^C^I)+V[8]+2272392833&4294967295,b=R+(T<<11&4294967295|T>>>21),T=I+(b^R^C)+V[11]+1839030562&4294967295,I=b+(T<<16&4294967295|T>>>16),T=C+(I^b^R)+V[14]+4259657740&4294967295,C=I+(T<<23&4294967295|T>>>9),T=R+(C^I^b)+V[1]+2763975236&4294967295,R=C+(T<<4&4294967295|T>>>28),T=b+(R^C^I)+V[4]+1272893353&4294967295,b=R+(T<<11&4294967295|T>>>21),T=I+(b^R^C)+V[7]+4139469664&4294967295,I=b+(T<<16&4294967295|T>>>16),T=C+(I^b^R)+V[10]+3200236656&4294967295,C=I+(T<<23&4294967295|T>>>9),T=R+(C^I^b)+V[13]+681279174&4294967295,R=C+(T<<4&4294967295|T>>>28),T=b+(R^C^I)+V[0]+3936430074&4294967295,b=R+(T<<11&4294967295|T>>>21),T=I+(b^R^C)+V[3]+3572445317&4294967295,I=b+(T<<16&4294967295|T>>>16),T=C+(I^b^R)+V[6]+76029189&4294967295,C=I+(T<<23&4294967295|T>>>9),T=R+(C^I^b)+V[9]+3654602809&4294967295,R=C+(T<<4&4294967295|T>>>28),T=b+(R^C^I)+V[12]+3873151461&4294967295,b=R+(T<<11&4294967295|T>>>21),T=I+(b^R^C)+V[15]+530742520&4294967295,I=b+(T<<16&4294967295|T>>>16),T=C+(I^b^R)+V[2]+3299628645&4294967295,C=I+(T<<23&4294967295|T>>>9),T=R+(I^(C|~b))+V[0]+4096336452&4294967295,R=C+(T<<6&4294967295|T>>>26),T=b+(C^(R|~I))+V[7]+1126891415&4294967295,b=R+(T<<10&4294967295|T>>>22),T=I+(R^(b|~C))+V[14]+2878612391&4294967295,I=b+(T<<15&4294967295|T>>>17),T=C+(b^(I|~R))+V[5]+4237533241&4294967295,C=I+(T<<21&4294967295|T>>>11),T=R+(I^(C|~b))+V[12]+1700485571&4294967295,R=C+(T<<6&4294967295|T>>>26),T=b+(C^(R|~I))+V[3]+2399980690&4294967295,b=R+(T<<10&4294967295|T>>>22),T=I+(R^(b|~C))+V[10]+4293915773&4294967295,I=b+(T<<15&4294967295|T>>>17),T=C+(b^(I|~R))+V[1]+2240044497&4294967295,C=I+(T<<21&4294967295|T>>>11),T=R+(I^(C|~b))+V[8]+1873313359&4294967295,R=C+(T<<6&4294967295|T>>>26),T=b+(C^(R|~I))+V[15]+4264355552&4294967295,b=R+(T<<10&4294967295|T>>>22),T=I+(R^(b|~C))+V[6]+2734768916&4294967295,I=b+(T<<15&4294967295|T>>>17),T=C+(b^(I|~R))+V[13]+1309151649&4294967295,C=I+(T<<21&4294967295|T>>>11),T=R+(I^(C|~b))+V[4]+4149444226&4294967295,R=C+(T<<6&4294967295|T>>>26),T=b+(C^(R|~I))+V[11]+3174756917&4294967295,b=R+(T<<10&4294967295|T>>>22),T=I+(R^(b|~C))+V[2]+718787259&4294967295,I=b+(T<<15&4294967295|T>>>17),T=C+(b^(I|~R))+V[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,D.g[2]=D.g[2]+I&4294967295,D.g[3]=D.g[3]+b&4294967295}i.prototype.v=function(D,R){R===void 0&&(R=D.length);const C=R-this.blockSize,V=this.C;let I=this.h,b=0;for(;b<R;){if(I==0)for(;b<=C;)o(this,D,b),b+=this.blockSize;if(typeof D=="string"){for(;b<R;)if(V[I++]=D.charCodeAt(b++),I==this.blockSize){o(this,V),I=0;break}}else for(;b<R;)if(V[I++]=D[b++],I==this.blockSize){o(this,V),I=0;break}}this.h=I,this.o+=R},i.prototype.A=function(){var D=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;R=this.o*8;for(var C=D.length-8;C<D.length;++C)D[C]=R&255,R/=256;for(this.v(D),D=Array(16),R=0,C=0;C<4;++C)for(let V=0;V<32;V+=8)D[R++]=this.g[C]>>>V&255;return D};function l(D,R){var C=f;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=R(D)}function h(D,R){this.h=R;const C=[];let V=!0;for(let I=D.length-1;I>=0;I--){const b=D[I]|0;V&&b==R||(C[I]=b,V=!1)}this.g=C}var f={};function g(D){return-128<=D&&D<128?l(D,function(R){return new h([R|0],R<0?-1:0)}):new h([D|0],D<0?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return A;if(D<0)return q(_(-D));const R=[];let C=1;for(let V=0;D>=C;V++)R[V]=D/C|0,C*=4294967296;return new h(R,0)}function w(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return q(w(D.substring(1),R));if(D.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=_(Math.pow(R,8));let V=A;for(let b=0;b<D.length;b+=8){var I=Math.min(8,D.length-b);const T=parseInt(D.substring(b,b+I),R);I<8?(I=_(Math.pow(R,I)),V=V.j(I).add(_(T))):(V=V.j(C),V=V.add(_(T)))}return V}var A=g(0),N=g(1),B=g(16777216);n=h.prototype,n.m=function(){if(Y(this))return-q(this).m();let D=0,R=1;for(let C=0;C<this.g.length;C++){const V=this.i(C);D+=(V>=0?V:4294967296+V)*R,R*=4294967296}return D},n.toString=function(D){if(D=D||10,D<2||36<D)throw Error("radix out of range: "+D);if(Q(this))return"0";if(Y(this))return"-"+q(this).toString(D);const R=_(Math.pow(D,6));var C=this;let V="";for(;;){const I=fe(C,R).g;C=ge(C,I.j(R));let b=((C.g.length>0?C.g[0]:C.h)>>>0).toString(D);if(C=I,Q(C))return b+V;for(;b.length<6;)b="0"+b;V=b+V}},n.i=function(D){return D<0?0:D<this.g.length?this.g[D]:this.h};function Q(D){if(D.h!=0)return!1;for(let R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function Y(D){return D.h==-1}n.l=function(D){return D=ge(this,D),Y(D)?-1:Q(D)?0:1};function q(D){const R=D.g.length,C=[];for(let V=0;V<R;V++)C[V]=~D.g[V];return new h(C,~D.h).add(N)}n.abs=function(){return Y(this)?q(this):this},n.add=function(D){const R=Math.max(this.g.length,D.g.length),C=[];let V=0;for(let I=0;I<=R;I++){let b=V+(this.i(I)&65535)+(D.i(I)&65535),T=(b>>>16)+(this.i(I)>>>16)+(D.i(I)>>>16);V=T>>>16,b&=65535,T&=65535,C[I]=T<<16|b}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ge(D,R){return D.add(q(R))}n.j=function(D){if(Q(this)||Q(D))return A;if(Y(this))return Y(D)?q(this).j(q(D)):q(q(this).j(D));if(Y(D))return q(this.j(q(D)));if(this.l(B)<0&&D.l(B)<0)return _(this.m()*D.m());const R=this.g.length+D.g.length,C=[];for(var V=0;V<2*R;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(let I=0;I<D.g.length;I++){const b=this.i(V)>>>16,T=this.i(V)&65535,ue=D.i(I)>>>16,Fe=D.i(I)&65535;C[2*V+2*I]+=T*Fe,ve(C,2*V+2*I),C[2*V+2*I+1]+=b*Fe,ve(C,2*V+2*I+1),C[2*V+2*I+1]+=T*ue,ve(C,2*V+2*I+1),C[2*V+2*I+2]+=b*ue,ve(C,2*V+2*I+2)}for(D=0;D<R;D++)C[D]=C[2*D+1]<<16|C[2*D];for(D=R;D<2*R;D++)C[D]=0;return new h(C,0)};function ve(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function Te(D,R){this.g=D,this.h=R}function fe(D,R){if(Q(R))throw Error("division by zero");if(Q(D))return new Te(A,A);if(Y(D))return R=fe(q(D),R),new Te(q(R.g),q(R.h));if(Y(R))return R=fe(D,q(R)),new Te(q(R.g),R.h);if(D.g.length>30){if(Y(D)||Y(R))throw Error("slowDivide_ only works with positive integers.");for(var C=N,V=R;V.l(D)<=0;)C=ke(C),V=ke(V);var I=Se(C,1),b=Se(V,1);for(V=Se(V,2),C=Se(C,2);!Q(V);){var T=b.add(V);T.l(D)<=0&&(I=I.add(C),b=T),V=Se(V,1),C=Se(C,1)}return R=ge(D,I.j(R)),new Te(I,R)}for(I=A;D.l(R)>=0;){for(C=Math.max(1,Math.floor(D.m()/R.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),b=_(C),T=b.j(R);Y(T)||T.l(D)>0;)C-=V,b=_(C),T=b.j(R);Q(b)&&(b=N),I=I.add(b),D=ge(D,T)}return new Te(I,D)}n.B=function(D){return fe(this,D).h},n.and=function(D){const R=Math.max(this.g.length,D.g.length),C=[];for(let V=0;V<R;V++)C[V]=this.i(V)&D.i(V);return new h(C,this.h&D.h)},n.or=function(D){const R=Math.max(this.g.length,D.g.length),C=[];for(let V=0;V<R;V++)C[V]=this.i(V)|D.i(V);return new h(C,this.h|D.h)},n.xor=function(D){const R=Math.max(this.g.length,D.g.length),C=[];for(let V=0;V<R;V++)C[V]=this.i(V)^D.i(V);return new h(C,this.h^D.h)};function ke(D){const R=D.g.length+1,C=[];for(let V=0;V<R;V++)C[V]=D.i(V)<<1|D.i(V-1)>>>31;return new h(C,D.h)}function Se(D,R){const C=R>>5;R%=32;const V=D.g.length-C,I=[];for(let b=0;b<V;b++)I[b]=R>0?D.i(b+C)>>>R|D.i(b+C+1)<<32-R:D.i(b+C);return new h(I,D.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Tw=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Oi=h}).apply(typeof Hy<"u"?Hy:typeof self<"u"?self:typeof window<"u"?window:{});var Gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Iw,Ja,Sw,lc,vf,Aw,Rw,kw;(function(){var n,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gu=="object"&&Gu];for(var m=0;m<u.length;++m){var y=u[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var y=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in y))break e;y=y[M]}u=u[u.length-1],E=y[u],m=m(E),m!=E&&m!=null&&e(y,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var y=[],E;for(E in m)Object.prototype.hasOwnProperty.call(m,E)&&y.push([E,m[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,y){return u.call.apply(u.bind,arguments)}function _(u,m,y){return _=g,_.apply(null,arguments)}function w(u,m){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function A(u,m){function y(){}y.prototype=m.prototype,u.Z=m.prototype,u.prototype=new y,u.prototype.constructor=u,u.Ob=function(E,M,j){for(var X=Array(arguments.length-2),we=2;we<arguments.length;we++)X[we-2]=arguments[we];return m.prototype[M].apply(E,X)}}var N=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function B(u){const m=u.length;if(m>0){const y=Array(m);for(let E=0;E<m;E++)y[E]=u[E];return y}return[]}function Q(u,m){for(let E=1;E<arguments.length;E++){const M=arguments[E];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=u.length||0;const j=M.length||0;u.length=y+j;for(let X=0;X<j;X++)u[y+X]=M[X]}else u.push(M)}}class Y{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function q(u){h.setTimeout(()=>{throw u},0)}function ge(){var u=D;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ve{constructor(){this.h=this.g=null}add(m,y){const E=Te.get();E.set(m,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Te=new Y(()=>new fe,u=>u.reset());class fe{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,Se=!1,D=new ve,R=()=>{const u=Promise.resolve(void 0);ke=()=>{u.then(C)}};function C(){for(var u;u=ge();){try{u.h.call(u.g)}catch(y){q(y)}var m=Te;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Se=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};h.addEventListener("test",y,m),h.removeEventListener("test",y,m)}catch{}return u})();function T(u){return/^[\s\xa0]*$/.test(u)}function ue(u,m){I.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}A(ue,I),ue.prototype.init=function(u,m){const y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(y=="mouseover"?m=u.fromElement:y=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Fe="closure_listenable_"+(Math.random()*1e6|0),Ae=0;function Re(u,m,y,E,M){this.listener=u,this.proxy=null,this.src=m,this.type=y,this.capture=!!E,this.ha=M,this.key=++Ae,this.da=this.fa=!1}function Z(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ce(u,m,y){for(const E in u)m.call(y,u[E],E,u)}function x(u,m){for(const y in u)m.call(void 0,u[y],y,u)}function H(u){const m={};for(const y in u)m[y]=u[y];return m}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ce(u,m){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)u[y]=E[y];for(let j=0;j<ae.length;j++)y=ae[j],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function Ie(u){this.src=u,this.g={},this.h=0}Ie.prototype.add=function(u,m,y,E,M){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const X=be(u,m,E,M);return X>-1?(m=u[X],y||(m.fa=!1)):(m=new Re(m,this.src,j,!!E,M),m.fa=y,u.push(m)),m};function ze(u,m){const y=m.type;if(y in u.g){var E=u.g[y],M=Array.prototype.indexOf.call(E,m,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(Z(m),u.g[y].length==0&&(delete u.g[y],u.h--))}}function be(u,m,y,E){for(let M=0;M<u.length;++M){const j=u[M];if(!j.da&&j.listener==m&&j.capture==!!y&&j.ha==E)return M}return-1}var je="closure_lm_"+(Math.random()*1e6|0),Ve={};function Rt(u,m,y,E,M){if(Array.isArray(m)){for(let j=0;j<m.length;j++)Rt(u,m[j],y,E,M);return null}return y=Zo(y),u&&u[Fe]?u.J(m,y,f(E)?!!E.capture:!1,M):fh(u,m,y,!1,E,M)}function fh(u,m,y,E,M,j){if(!m)throw Error("Invalid event type");const X=f(M)?!!M.capture:!!M;let we=Bs(u);if(we||(u[je]=we=new Ie(u)),y=we.add(m,y,E,X,j),y.proxy)return y;if(E=Us(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)b||(M=X),M===void 0&&(M=!1),u.addEventListener(m.toString(),E,M);else if(u.attachEvent)u.attachEvent(js(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Us(){function u(y){return m.call(u.src,u.listener,y)}const m=Nl;return u}function Xo(u,m,y,E,M){if(Array.isArray(m))for(var j=0;j<m.length;j++)Xo(u,m[j],y,E,M);else E=f(E)?!!E.capture:!!E,y=Zo(y),u&&u[Fe]?(u=u.i,j=String(m).toString(),j in u.g&&(m=u.g[j],y=be(m,y,E,M),y>-1&&(Z(m[y]),Array.prototype.splice.call(m,y,1),m.length==0&&(delete u.g[j],u.h--)))):u&&(u=Bs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=be(m,y,E,M)),(y=u>-1?m[u]:null)&&Yr(y))}function Yr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Fe])ze(m.i,u);else{var y=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(y,E,u.capture):m.detachEvent?m.detachEvent(js(y),E):m.addListener&&m.removeListener&&m.removeListener(E),(y=Bs(m))?(ze(y,u),y.h==0&&(y.src=null,m[je]=null)):Z(u)}}}function js(u){return u in Ve?Ve[u]:Ve[u]="on"+u}function Nl(u,m){if(u.da)u=!0;else{m=new ue(m,this);const y=u.listener,E=u.ha||u.src;u.fa&&Yr(u),u=y.call(E,m)}return u}function Bs(u){return u=u[je],u instanceof Ie?u:null}var Wi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zo(u){return typeof u=="function"?u:(u[Wi]||(u[Wi]=function(m){return u.handleEvent(m)}),u[Wi])}function ft(){V.call(this),this.i=new Ie(this),this.M=this,this.G=null}A(ft,V),ft.prototype[Fe]=!0,ft.prototype.removeEventListener=function(u,m,y,E){Xo(this,u,m,y,E)};function lt(u,m){var y,E=u.G;if(E)for(y=[];E;E=E.G)y.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new I(m,u);else if(m instanceof I)m.target=m.target||u;else{var M=m;m=new I(E,u),Ce(m,M)}M=!0;let j,X;if(y)for(X=y.length-1;X>=0;X--)j=m.g=y[X],M=Pn(j,E,!0,m)&&M;if(j=m.g=u,M=Pn(j,E,!0,m)&&M,M=Pn(j,E,!1,m)&&M,y)for(X=0;X<y.length;X++)j=m.g=y[X],M=Pn(j,E,!1,m)&&M}ft.prototype.N=function(){if(ft.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const y=u.g[m];for(let E=0;E<y.length;E++)Z(y[E]);delete u.g[m],u.h--}}this.G=null},ft.prototype.J=function(u,m,y,E){return this.i.add(String(u),m,!1,y,E)},ft.prototype.K=function(u,m,y,E){return this.i.add(String(u),m,!0,y,E)};function Pn(u,m,y,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let M=!0;for(let j=0;j<m.length;++j){const X=m[j];if(X&&!X.da&&X.capture==y){const we=X.listener,ut=X.ha||X.src;X.fa&&ze(u.i,X),M=we.call(ut,E)!==!1&&M}}return M&&!E.defaultPrevented}function ea(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function ta(u){u.g=ea(()=>{u.g=null,u.i&&(u.i=!1,ta(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Dl extends V{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ta(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jr(u){V.call(this),this.h=u,this.g={}}A(Jr,V);var na=[];function zs(u){ce(u.g,function(m,y){this.g.hasOwnProperty(y)&&Yr(m)},u),u.g={}}Jr.prototype.N=function(){Jr.Z.N.call(this),zs(this)},Jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xr=h.JSON.stringify,bl=h.JSON.parse,Ki=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Zr(){}function Ol(){}var ei={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $s(){I.call(this,"d")}A($s,I);function ra(){I.call(this,"c")}A(ra,I);var xn={},qs=null;function ti(){return qs=qs||new ft}xn.Ia="serverreachability";function Hs(u){I.call(this,xn.Ia,u)}A(Hs,I);function vr(u){const m=ti();lt(m,new Hs(m))}xn.STAT_EVENT="statevent";function wr(u,m){I.call(this,xn.STAT_EVENT,u),this.stat=m}A(wr,I);function st(u){const m=ti();lt(m,new wr(m,u))}xn.Ja="timingevent";function ia(u,m){I.call(this,xn.Ja,u),this.size=m}A(ia,I);function ni(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function ri(){this.g=!0}ri.prototype.ua=function(){this.g=!1};function Vl(u,m,y,E,M,j){u.info(function(){if(u.g)if(j){var X="",we=j.split("&");for(let He=0;He<we.length;He++){var ut=we[He].split("=");if(ut.length>1){const pt=ut[0];ut=ut[1];const cn=pt.split("_");X=cn.length>=2&&cn[1]=="type"?X+(pt+"="+ut+"&"):X+(pt+"=redacted&")}}}else X=null;else X=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+m+`
`+y+`
`+X})}function Ll(u,m,y,E,M,j,X){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+m+`
`+y+`
`+j+" "+X})}function Wn(u,m,y,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Gi(u,y)+(E?" "+E:"")})}function Ml(u,m){u.info(function(){return"TIMEOUT: "+m})}ri.prototype.info=function(){};function Gi(u,m){if(!u.g)return m;if(!m)return null;try{const j=JSON.parse(m);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var y=j[u];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let X=1;X<E.length;X++)E[X]=""}}}}return Xr(j)}catch{return m}}var ii={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},si={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fl;function Er(){}A(Er,Zr),Er.prototype.g=function(){return new XMLHttpRequest},Fl=new Er;function Kn(u){return encodeURIComponent(String(u))}function Ws(u){var m=1;u=u.split(":");const y=[];for(;m>0&&u.length;)y.push(u.shift()),m--;return u.length&&y.push(u.join(":")),y}function _n(u,m,y,E){this.j=u,this.i=m,this.l=y,this.S=E||1,this.V=new Jr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ul}function Ul(){this.i=null,this.g="",this.h=!1}var jl={},sa={};function Nn(u,m,y){u.M=1,u.A=Ir(vn(m)),u.u=y,u.R=!0,oa(u,null)}function oa(u,m){u.F=Date.now(),Qi(u),u.B=vn(u.A);var y=u.B,E=u.S;Array.isArray(E)||(E=[String(E)]),ga(y.i,"t",E),u.C=0,y=u.j.L,u.h=new Ul,u.g=Yl(u.j,y?m:null,!u.u),u.P>0&&(u.O=new Dl(_(u.Y,u,u.g),u.P)),m=u.V,y=u.g,E=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(na[0]=M.toString()),M=na);for(let j=0;j<M.length;j++){const X=Rt(y,M[j],E||m.handleEvent,!1,m.h||m);if(!X)break;m.g[X.key]=X}m=u.J?H(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),vr(),Vl(u.i,u.v,u.B,u.l,u.S,u.u)}_n.prototype.ba=function(u){u=u.target;const m=this.O;m&&er(u)==3?m.j():this.Y(u)},_n.prototype.Y=function(u){try{if(u==this.g)e:{const we=er(this.g),ut=this.g.ya(),He=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||Gl(this.g)))){this.K||we!=4||ut==7||(ut==8||He<=0?vr(3):vr(2)),Ks(this);var m=this.g.ca();this.X=m;var y=Bl(this);if(this.o=m==200,Ll(this.i,this.v,this.B,this.l,this.S,we,m),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(E)){var j=E;break t}}j=null}if(u=j)Wn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ye(this,u);else{this.o=!1,this.m=3,st(12),Tr(this),Yi(this);break e}}if(this.R){u=!0;let pt;for(;!this.K&&this.C<y.length;)if(pt=$l(this,y),pt==sa){we==4&&(this.m=4,st(14),u=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==jl){this.m=4,st(15),Wn(this.i,this.l,y,"[Invalid Chunk]"),u=!1;break}else Wn(this.i,this.l,pt,null),Ye(this,pt);if(zl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||y.length!=0||this.h.h||(this.m=1,st(16),u=!1),this.o=this.o&&u,!u)Wn(this.i,this.l,y,"[Invalid Chunked Response]"),Tr(this),Yi(this);else if(y.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),ss(X),X.P=!0,st(11))}}else Wn(this.i,this.l,y,null),Ye(this,y);we==4&&Tr(this),this.o&&!this.K&&(we==4?ro(this.j,this):(this.o=!1,Qi(this)))}else _a(this.g),m==400&&y.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Tr(this),Yi(this)}}}catch{}finally{}};function Bl(u){if(!zl(u))return u.g.la();const m=Gl(u.g);if(m==="")return"";let y="";const E=m.length,M=er(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return Tr(u),Yi(u),"";u.h.i=new h.TextDecoder}for(let j=0;j<E;j++)u.h.h=!0,y+=u.h.i.decode(m[j],{stream:!(M&&j==E-1)});return m.length=0,u.h.g+=y,u.C=0,u.h.g}function zl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function $l(u,m){var y=u.C,E=m.indexOf(`
`,y);return E==-1?sa:(y=Number(m.substring(y,E)),isNaN(y)?jl:(E+=1,E+y>m.length?sa:(m=m.slice(E,E+y),u.C=E+y,m)))}_n.prototype.cancel=function(){this.K=!0,Tr(this)};function Qi(u){u.T=Date.now()+u.H,aa(u,u.H)}function aa(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=ni(_(u.aa,u),m)}function Ks(u){u.D&&(h.clearTimeout(u.D),u.D=null)}_n.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Ml(this.i,this.B),this.M!=2&&(vr(),st(17)),Tr(this),this.m=2,Yi(this)):aa(this,this.T-u)};function Yi(u){u.j.I==0||u.K||ro(u.j,u)}function Tr(u){Ks(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,zs(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ye(u,m){try{var y=u.j;if(y.I!=0&&(y.g==u||ua(y.h,u))){if(!u.L&&ua(y.h,u)&&y.I==3){try{var E=y.Ba.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<u.F)no(y),ln(y);else break e;rr(y),st(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=ni(_(y.Va,y),6e3));Ji(y.h)<=1&&y.ta&&(y.ta=void 0)}else un(y,11)}else if((u.L||y.g==u)&&no(y),!T(m))for(M=y.Ba.g.parse(m),m=0;m<M.length;m++){let He=M[m];const pt=He[0];if(!(pt<=y.K))if(y.K=pt,He=He[1],y.I==2)if(He[0]=="c"){y.M=He[1],y.ba=He[2];const cn=He[3];cn!=null&&(y.ka=cn,y.j.info("VER="+y.ka));const Cr=He[4];Cr!=null&&(y.za=Cr,y.j.info("SVER="+y.za));const ir=He[5];ir!=null&&typeof ir=="number"&&ir>0&&(E=1.5*ir,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const sr=u.g;if(sr){const oo=sr.g?sr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oo){var j=E.h;j.g||oo.indexOf("spdy")==-1&&oo.indexOf("quic")==-1&&oo.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Qs(j,j.h),j.h=null))}if(E.G){const Ea=sr.g?sr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ea&&(E.wa=Ea,Be(E.J,E.G,Ea))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-u.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var X=u;if(E.na=wa(E,E.L?E.ba:null,E.W),X.L){Xi(E.h,X);var we=X,ut=E.O;ut&&(we.H=ut),we.D&&(Ks(we),Qi(we)),E.g=X}else Ot(E);y.i.length>0&&kr(y)}else He[0]!="stop"&&He[0]!="close"||un(y,7);else y.I==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?un(y,7):eo(y):He[0]!="noop"&&y.l&&y.l.qa(He),y.A=0)}}vr(4)}catch{}}var ph=class{constructor(u,m){this.g=u,this.map=m}};function Gs(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function la(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ji(u){return u.h?1:u.g?u.g.size:0}function ua(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Qs(u,m){u.g?u.g.add(m):u.h=m}function Xi(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Gs.prototype.cancel=function(){if(this.i=sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function sn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const y of u.g.values())m=m.concat(y.G);return m}return B(u.i)}var ql=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function on(u,m){if(u){u=u.split("&");for(let y=0;y<u.length;y++){const E=u[y].indexOf("=");let M,j=null;E>=0?(M=u[y].substring(0,E),j=u[y].substring(E+1)):M=u[y],m(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Gn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Gn?(this.l=u.l,Zi(this,u.j),this.o=u.o,this.g=u.g,Qn(this,u.u),this.h=u.h,oi(this,ya(u.i)),this.m=u.m):u&&(m=String(u).match(ql))?(this.l=!1,Zi(this,m[1]||"",!0),this.o=es(m[2]||""),this.g=es(m[3]||"",!0),Qn(this,m[4]),this.h=es(m[5]||"",!0),oi(this,m[6]||"",!0),this.m=es(m[7]||"")):(this.l=!1,this.i=new Oe(null,this.l))}Gn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(ts(m,ha,!0),":");var y=this.g;return(y||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ts(m,ha,!0),"@"),u.push(Kn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&u.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(ts(y,y.charAt(0)=="/"?ns:da,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",ts(y,fa)),u.join("")},Gn.prototype.resolve=function(u){const m=vn(this);let y=!!u.j;y?Zi(m,u.j):y=!!u.o,y?m.o=u.o:y=!!u.g,y?m.g=u.g:y=u.u!=null;var E=u.h;if(y)Qn(m,u.u);else if(y=!!u.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=m.h.lastIndexOf("/");M!=-1&&(E=m.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let X=0;X<M.length;){const we=M[X++];we=="."?E&&X==M.length&&j.push(""):we==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&X==M.length&&j.push("")):(j.push(we),E=!0)}E=j.join("/")}else E=M}return y?m.h=E:y=u.i.toString()!=="",y?oi(m,ya(u.i)):y=!!u.m,y&&(m.m=u.m),m};function vn(u){return new Gn(u)}function Zi(u,m,y){u.j=y?es(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Qn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function oi(u,m,y){m instanceof Oe?(u.i=m,Js(u.i,u.l)):(y||(m=ts(m,mh)),u.i=new Oe(m,u.l))}function Be(u,m,y){u.i.set(m,y)}function Ir(u){return Be(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function es(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ts(u,m,y){return typeof u=="string"?(u=encodeURI(u).replace(m,ca),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ca(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ha=/[#\/\?@]/g,da=/[#\?:]/g,ns=/[#\?]/g,mh=/[#\?@]/g,fa=/#/g;function Oe(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Yn(u){u.g||(u.g=new Map,u.h=0,u.i&&on(u.i,function(m,y){u.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}n=Oe.prototype,n.add=function(u,m){Yn(this),this.i=null,u=Jn(this,u);let y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(m),this.h+=1,this};function pa(u,m){Yn(u),m=Jn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ys(u,m){return Yn(u),m=Jn(u,m),u.g.has(m)}n.forEach=function(u,m){Yn(this),this.g.forEach(function(y,E){y.forEach(function(M){u.call(m,M,E,this)},this)},this)};function ma(u,m){Yn(u);let y=[];if(typeof m=="string")Ys(u,m)&&(y=y.concat(u.g.get(Jn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)y=y.concat(u[m]);return y}n.set=function(u,m){return Yn(this),this.i=null,u=Jn(this,u),Ys(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=ma(this,u),u.length>0?String(u[0]):m):m};function ga(u,m,y){pa(u,m),y.length>0&&(u.i=null,u.g.set(Jn(u,m),B(y)),u.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let E=0;E<m.length;E++){var y=m[E];const M=Kn(y);y=ma(this,y);for(let j=0;j<y.length;j++){let X=M;y[j]!==""&&(X+="="+Kn(y[j])),u.push(X)}}return this.i=u.join("&")};function ya(u){const m=new Oe;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function Jn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Js(u,m){m&&!u.j&&(Yn(u),u.i=null,u.g.forEach(function(y,E){const M=E.toLowerCase();E!=M&&(pa(this,E),ga(this,M,y))},u)),u.j=m}function Xn(u,m){const y=new ri;if(h.Image){const E=new Image;E.onload=w(kt,y,"TestLoadImage: loaded",!0,m,E),E.onerror=w(kt,y,"TestLoadImage: error",!1,m,E),E.onabort=w(kt,y,"TestLoadImage: abort",!1,m,E),E.ontimeout=w(kt,y,"TestLoadImage: timeout",!1,m,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Zn(u,m){const y=new ri,E=new AbortController,M=setTimeout(()=>{E.abort(),kt(y,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?kt(y,"TestPingServer: ok",!0,m):kt(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),kt(y,"TestPingServer: error",!1,m)})}function kt(u,m,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function rs(){this.g=new Ki}function Sr(u){this.i=u.Sb||null,this.h=u.ab||!1}A(Sr,Zr),Sr.prototype.g=function(){return new an(this.i,this.h)};function an(u,m){ft.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(an,ft),n=an.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Hl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Hl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ai(this):Dn(this),this.readyState==3&&Hl(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,ai(this))},n.Na=function(u){this.g&&(this.response=u,ai(this))},n.ga=function(){this.g&&ai(this)};function ai(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Dn(u)}n.setRequestHeader=function(u,m){this.A.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(an.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Wl(u){let m="";return ce(u,function(y,E){m+=E,m+=":",m+=y,m+=`\r
`}),m}function Xs(u,m,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Wl(y),typeof u=="string"?y!=null&&Kn(y):Be(u,m,y))}function We(u){ft.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(We,ft);var Kl=/^https?$/i,gh=["POST","PUT"];n=We.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,m,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fl.g(),this.g.onreadystatechange=N(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(j){li(this,j);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(gh,m,void 0)>=0)||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of y)this.g.setRequestHeader(j,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){li(this,j)}};function li(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,ui(u),Rr(u)}function ui(u){u.A||(u.A=!0,lt(u,"complete"),lt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,lt(this,"complete"),lt(this,"abort"),Rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rr(this,!0)),We.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ar(this):this.Xa())},n.Xa=function(){Ar(this)};function Ar(u){if(u.h&&typeof l<"u"){if(u.v&&er(u)==4)setTimeout(u.Ca.bind(u),0);else if(lt(u,"readystatechange"),er(u)==4){u.h=!1;try{const j=u.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var E;if(E=j===0){let X=String(u.D).match(ql)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),E=!Kl.test(X?X.toLowerCase():"")}y=E}if(y)lt(u,"complete"),lt(u,"success");else{u.o=6;try{var M=er(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",ui(u)}}finally{Rr(u)}}}}function Rr(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const y=u.g;u.g=null,m||lt(u,"ready");try{y.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function er(u){return u.g?u.g.readyState:0}n.ca=function(){try{return er(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),bl(m)}};function Gl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function _a(u){const m={};u=(u.g&&er(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(T(u[E]))continue;var y=Ws(u[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=m[M]||[];m[M]=j,j.push(y)}x(m,function(E){return E.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function tr(u,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||m}function Zs(u){this.za=0,this.i=[],this.j=new ri,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=tr("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=tr("baseRetryDelayMs",5e3,u),this.Za=tr("retryDelaySeedMs",1e4,u),this.Ta=tr("forwardChannelMaxRetries",2,u),this.va=tr("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Gs(u&&u.concurrentRequestLimit),this.Ba=new rs,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Zs.prototype,n.ka=8,n.I=1,n.connect=function(u,m,y,E){st(0),this.W=u,this.H=m||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=wa(this,null,this.W),kr(this)};function eo(u){if(to(u),u.I==3){var m=u.V++,y=vn(u.J);if(Be(y,"SID",u.M),Be(y,"RID",m),Be(y,"TYPE","terminate"),nr(u,y),m=new _n(u,u.j,m),m.M=2,m.A=Ir(vn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=m.A,y=!0),y||(m.g=Yl(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Qi(m)}os(u)}function ln(u){u.g&&(ss(u),u.g.cancel(),u.g=null)}function to(u){ln(u),u.v&&(h.clearTimeout(u.v),u.v=null),no(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function kr(u){if(!la(u.h)&&!u.m){u.m=!0;var m=u.Ea;ke||R(),Se||(ke(),Se=!0),D.add(m,u),u.D=0}}function Ql(u,m){return Ji(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=ni(_(u.Ea,u,m),io(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new _n(this,this.j,u);let j=this.o;if(this.U&&(j?(j=H(j),Ce(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,m>4096){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=va(this,M,m),y=vn(this.J),Be(y,"RID",u),Be(y,"CVER",22),this.G&&Be(y,"X-HTTP-Session-Id",this.G),nr(this,y),j&&(this.R?m="headers="+Kn(Wl(j))+"&"+m:this.u&&Xs(y,this.u,j)),Qs(this.h,M),this.Ra&&Be(y,"TYPE","init"),this.S?(Be(y,"$req",m),Be(y,"SID","null"),M.U=!0,Nn(M,y,null)):Nn(M,y,m),this.I=2}}else this.I==3&&(u?is(this,u):this.i.length==0||la(this.h)||is(this))};function is(u,m){var y;m?y=m.l:y=u.V++;const E=vn(u.J);Be(E,"SID",u.M),Be(E,"RID",y),Be(E,"AID",u.K),nr(u,E),u.u&&u.o&&Xs(E,u.u,u.o),y=new _n(u,u.j,y,u.D+1),u.u===null&&(y.J=u.o),m&&(u.i=m.G.concat(u.i)),m=va(u,y,1e3),y.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Qs(u.h,y),Nn(y,E,m)}function nr(u,m){u.H&&ce(u.H,function(y,E){Be(m,E,y)}),u.l&&ce({},function(y,E){Be(m,E,y)})}function va(u,m,y){y=Math.min(u.i.length,y);const E=u.l?_(u.l.Ka,u.l,u):null;e:{var M=u.i;let we=-1;for(;;){const ut=["count="+y];we==-1?y>0?(we=M[0].g,ut.push("ofs="+we)):we=0:ut.push("ofs="+we);let He=!0;for(let pt=0;pt<y;pt++){var j=M[pt].g;const cn=M[pt].map;if(j-=we,j<0)we=Math.max(0,M[pt].g-100),He=!1;else try{j="req"+j+"_"||"";try{var X=cn instanceof Map?cn:Object.entries(cn);for(const[Cr,ir]of X){let sr=ir;f(ir)&&(sr=Xr(ir)),ut.push(j+Cr+"="+encodeURIComponent(sr))}}catch(Cr){throw ut.push(j+"type="+encodeURIComponent("_badmap")),Cr}}catch{E&&E(cn)}}if(He){X=ut.join("&");break e}}X=void 0}return u=u.i.splice(0,y),m.G=u,X}function Ot(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;ke||R(),Se||(ke(),Se=!0),D.add(m,u),u.A=0}}function rr(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=ni(_(u.Da,u),io(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,ci(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=ni(_(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),ln(this),ci(this))};function ss(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function ci(u){u.g=new _n(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=vn(u.na);Be(m,"RID","rpc"),Be(m,"SID",u.M),Be(m,"AID",u.K),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Be(m,"TO",u.ia),Be(m,"TYPE","xmlhttp"),nr(u,m),u.u&&u.o&&Xs(m,u.u,u.o),u.O&&(u.g.H=u.O);var y=u.g;u=u.ba,y.M=1,y.A=Ir(vn(m)),y.u=null,y.R=!0,oa(y,u)}n.Va=function(){this.C!=null&&(this.C=null,ln(this),rr(this),st(19))};function no(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function ro(u,m){var y=null;if(u.g==m){no(u),ss(u),u.g=null;var E=2}else if(ua(u.h,m))y=m.G,Xi(u.h,m),E=1;else return;if(u.I!=0){if(m.o)if(E==1){y=m.u?m.u.length:0,m=Date.now()-m.F;var M=u.D;E=ti(),lt(E,new ia(E,y)),kr(u)}else Ot(u);else if(M=m.m,M==3||M==0&&m.X>0||!(E==1&&Ql(u,m)||E==2&&rr(u)))switch(y&&y.length>0&&(m=u.h,m.i=m.i.concat(y)),M){case 1:un(u,5);break;case 4:un(u,10);break;case 3:un(u,6);break;default:un(u,2)}}}function io(u,m){let y=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(y*=2),y*m}function un(u,m){if(u.j.info("Error code "+m),m==2){var y=_(u.bb,u),E=u.Ua;const M=!E;E=new Gn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Zi(E,"https"),Ir(E),M?Xn(E.toString(),y):Zn(E.toString(),y)}else st(2);u.I=0,u.l&&u.l.pa(m),os(u),to(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function os(u){if(u.I=0,u.ja=[],u.l){const m=sn(u.h);(m.length!=0||u.i.length!=0)&&(Q(u.ja,m),Q(u.ja,u.i),u.h.i.length=0,B(u.i),u.i.length=0),u.l.oa()}}function wa(u,m,y){var E=y instanceof Gn?vn(y):new Gn(y);if(E.g!="")m&&(E.g=m+"."+E.g),Qn(E,E.u);else{var M=h.location;E=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;const j=new Gn(null);E&&Zi(j,E),m&&(j.g=m),M&&Qn(j,M),y&&(j.h=y),E=j}return y=u.G,m=u.wa,y&&m&&Be(E,y,m),Be(E,"VER",u.ka),nr(u,E),E}function Yl(u,m,y){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new We(new Sr({ab:y})):new We(u.ma),m.Fa(u.L),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jl(){}n=Jl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function so(){}so.prototype.g=function(u,m){return new Ct(u,m)};function Ct(u,m){ft.call(this),this.g=new Zs(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!T(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!T(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new hi(this)}A(Ct,ft),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){eo(this.g)},Ct.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.v&&(y={},y.__data__=Xr(u),u=y);m.i.push(new ph(m.Ya++,u)),m.I==3&&kr(m)},Ct.prototype.N=function(){this.g.l=null,delete this.j,eo(this.g),delete this.g,Ct.Z.N.call(this)};function Xl(u){$s.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const y in m){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}A(Xl,$s);function Zl(){ra.call(this),this.status=1}A(Zl,ra);function hi(u){this.g=u}A(hi,Jl),hi.prototype.ra=function(){lt(this.g,"a")},hi.prototype.qa=function(u){lt(this.g,new Xl(u))},hi.prototype.pa=function(u){lt(this.g,new Zl)},hi.prototype.oa=function(){lt(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,kw=function(){return new so},Rw=function(){return ti()},Aw=xn,vf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ii.NO_ERROR=0,ii.TIMEOUT=8,ii.HTTP_ERROR=6,lc=ii,si.COMPLETE="complete",Sw=si,Ol.EventType=ei,ei.OPEN="a",ei.CLOSE="b",ei.ERROR="c",ei.MESSAGE="d",ft.prototype.listen=ft.prototype.J,Ja=Ol,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,Iw=We}).apply(typeof Gu<"u"?Gu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko="12.11.0";function n1(n){Ko=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Ff("@firebase/firestore");function xo(){return Ps.logLevel}function ne(n,...e){if(Ps.logLevel<=xe.DEBUG){const t=e.map(tp);Ps.debug(`Firestore (${Ko}): ${n}`,...t)}}function Wr(n,...e){if(Ps.logLevel<=xe.ERROR){const t=e.map(tp);Ps.error(`Firestore (${Ko}): ${n}`,...t)}}function xs(n,...e){if(Ps.logLevel<=xe.WARN){const t=e.map(tp);Ps.warn(`Firestore (${Ko}): ${n}`,...t)}}function tp(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Cw(n,i,t)}function Cw(n,e,t){let i=`FIRESTORE (${Ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Wr(i),new Error(i)}function qe(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Cw(e,o,i)}function Ee(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Bt.UNAUTHENTICATED)))}shutdown(){}}class i1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class s1{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new $r,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new $r)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(qe(typeof i.accessToken=="string",31837,{l:i}),new Pw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class o1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class a1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new o1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){qe(this.o===void 0,3512);const i=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=u1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ne(n,e){return n<e?-1:n>e?1:0}function wf(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return tf(o)===tf(l)?Ne(o,l):tf(o)?1:-1}return Ne(n.length,e.length)}const c1=55296,h1=57343;function tf(n){const e=n.charCodeAt(0);return e>=c1&&e<=h1}function jo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="__name__";class cr{constructor(e,t,i){t===void 0?t=0:t>e.length&&me(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&me(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return cr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=cr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const i=cr.isNumericId(e),o=cr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?cr.extractNumericId(e).compare(cr.extractNumericId(t)):wf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Oi.fromString(e.substring(4,e.length-2))}}class Qe extends cr{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ee(z.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const d1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends cr{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return d1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ky}static keyField(){return new Dt([Ky])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ee(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ee(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Qe.fromString(e))}static fromName(e){return new le(Qe.fromString(e).popFirst(5))}static empty(){return new le(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(n,e,t){if(!t)throw new ee(z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function f1(n,e,t,i){if(e===!0&&i===!0)throw new ee(z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gy(n){if(!le.isDocumentKey(n))throw new ee(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qy(n){if(le.isDocumentKey(n))throw new ee(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Nw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":me(12329,{type:typeof n})}function rn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wc(n);throw new ee(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){const t={typeString:n};return e&&(t.value=e),t}function Al(n,e){if(!Nw(n))throw new ee(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ee(z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=-62135596800,Jy=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Jy);return new Ze(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yy)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jy}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Al(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:_t("string",Ze._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Ze(0,0))}static max(){return new _e(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=-1;function p1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=_e.fromTimestamp(i===1e9?new Ze(t+1,0):new Ze(t,i));return new Li(o,le.empty(),e)}function m1(n){return new Li(n.readTime,n.key,dl)}class Li{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Li(_e.min(),le.empty(),dl)}static max(){return new Li(_e.max(),le.empty(),dl)}}function g1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(n){if(n.code!==z.FAILED_PRECONDITION||n.message!==y1)throw n;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,i)=>{t(e)}))}static reject(e){return new $(((t,i)=>{i(e)}))}static waitFor(e){return new $(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=$.resolve(!1);for(const i of e)t=t.next((o=>o?$.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new $(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++f,f===l&&i(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function v1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Kc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=-1;function Gc(n){return n==null}function Sc(n){return n===0&&1/n==-1/0}function w1(n){return typeof n=="number"&&Number.isInteger(n)&&!Sc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="";function E1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xy(e)),e=T1(n.get(t),e);return Xy(e)}function T1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Dw:t+="";break;default:t+=l}}return t}function Xy(n){return n+Dw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qu(this.root,e,this.comparator,!0)}}class Qu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new e_(this.data.getIterator())}getIteratorFrom(e){return new e_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class e_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new yn([])}unionWith(e){let t=new Et(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Ow("Invalid base64 string: "+l):l}})(e);return new bt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const I1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mi(n){if(qe(!!n,39018),typeof n=="string"){let e=0;const t=I1.exec(n);if(qe(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fi(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="server_timestamp",Lw="__type__",Mw="__previous_value__",Fw="__local_write_time__";function ip(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Lw])==null?void 0:i.stringValue)===Vw}function Qc(n){const e=n.mapValue.fields[Mw];return ip(e)?Qc(e):e}function fl(n){const e=Mi(n.mapValue.fields[Fw].timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,t,i,o,l,h,f,g,_,w,A){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w,this.apiKey=A}}const Ac="(default)";class pl{constructor(e,t){this.projectId=e,this.database=t||Ac}static empty(){return new pl("","")}get isDefaultDatabase(){return this.database===Ac}isEqual(e){return e instanceof pl&&e.projectId===this.projectId&&e.database===this.database}}function A1(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new ee(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pl(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="__type__",R1="__max__",Yu={mapValue:{}},jw="__vector__",Rc="value";function Ui(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ip(n)?4:C1(n)?9007199254740991:k1(n)?10:11:me(28295,{value:n})}function gr(n,e){if(n===e)return!0;const t=Ui(n);if(t!==Ui(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fl(n).isEqual(fl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Mi(o.timestampValue),f=Mi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Fi(o.bytesValue).isEqual(Fi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=dt(o.doubleValue),f=dt(l.doubleValue);return h===f?Sc(h)===Sc(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return jo(n.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Zy(h)!==Zy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!gr(h[g],f[g])))return!1;return!0})(n,e);default:return me(52216,{left:n})}}function ml(n,e){return(n.values||[]).find((t=>gr(t,e)))!==void 0}function Bo(n,e){if(n===e)return 0;const t=Ui(n),i=Ui(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=dt(l.integerValue||l.doubleValue),g=dt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return t_(n.timestampValue,e.timestampValue);case 4:return t_(fl(n),fl(e));case 5:return wf(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=Fi(l),g=Fi(h);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const w=Ne(f[_],g[_]);if(w!==0)return w}return Ne(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Ne(dt(l.latitude),dt(h.latitude));return f!==0?f:Ne(dt(l.longitude),dt(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return n_(n.arrayValue,e.arrayValue);case 10:return(function(l,h){var N,B,Q,Y;const f=l.fields||{},g=h.fields||{},_=(N=f[Rc])==null?void 0:N.arrayValue,w=(B=g[Rc])==null?void 0:B.arrayValue,A=Ne(((Q=_==null?void 0:_.values)==null?void 0:Q.length)||0,((Y=w==null?void 0:w.values)==null?void 0:Y.length)||0);return A!==0?A:n_(_,w)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Yu.mapValue&&h===Yu.mapValue)return 0;if(l===Yu.mapValue)return 1;if(h===Yu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const N=wf(g[A],w[A]);if(N!==0)return N;const B=Bo(f[g[A]],_[w[A]]);if(B!==0)return B}return Ne(g.length,w.length)})(n.mapValue,e.mapValue);default:throw me(23264,{he:t})}}function t_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=Mi(n),i=Mi(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function n_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Bo(t[o],i[o]);if(l)return l}return Ne(t.length,i.length)}function zo(n){return Ef(n)}function Ef(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Mi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Fi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return le.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Ef(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Ef(t.fields[h])}`;return o+"}"})(n.mapValue):me(61005,{value:n})}function uc(n){switch(Ui(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qc(n);return e?16+uc(e):16;case 5:return 2*n.stringValue.length;case 6:return Fi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+uc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return qi(i.fields,((l,h)=>{o+=l.length+uc(h)})),o})(n.mapValue);default:throw me(13486,{value:n})}}function r_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Tf(n){return!!n&&"integerValue"in n}function sp(n){return!!n&&"arrayValue"in n}function i_(n){return!!n&&"nullValue"in n}function s_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cc(n){return!!n&&"mapValue"in n}function k1(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Uw])==null?void 0:i.stringValue)===jw}function rl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return qi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=rl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=rl(n.arrayValue.values[t]);return e}return{...n}}function C1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===R1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!cc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rl(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=rl(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());cc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];cc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){qi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new tn(rl(this.value))}}function Bw(n){const e=[];return qi(n.fields,((t,i)=>{const o=new Dt([t]);if(cc(i)){const l=Bw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,_e.min(),_e.min(),_e.min(),tn.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,_e.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,_e.min(),_e.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,_e.min(),_e.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t){this.position=e,this.inclusive=t}}function o_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=le.comparator(le.fromName(h.referenceValue),t.key):i=Bo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function a_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t="asc"){this.field=e,this.dir=t}}function P1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{}class yt extends zw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new N1(e,t,i):t==="array-contains"?new O1(e,i):t==="in"?new V1(e,i):t==="not-in"?new L1(e,i):t==="array-contains-any"?new M1(e,i):new yt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new D1(e,i):new b1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bo(t,this.value)):t!==null&&Ui(this.value)===Ui(t)&&this.matchesComparison(Bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends zw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new qn(e,t)}matches(e){return $w(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function $w(n){return n.op==="and"}function qw(n){return x1(n)&&$w(n)}function x1(n){for(const e of n.filters)if(e instanceof qn)return!1;return!0}function If(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+zo(n.value);if(qw(n))return n.filters.map((e=>If(e))).join(",");{const e=n.filters.map((t=>If(t))).join(",");return`${n.op}(${e})`}}function Hw(n,e){return n instanceof yt?(function(i,o){return o instanceof yt&&i.op===o.op&&i.field.isEqual(o.field)&&gr(i.value,o.value)})(n,e):n instanceof qn?(function(i,o){return o instanceof qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&Hw(h,o.filters[f])),!0):!1})(n,e):void me(19439)}function Ww(n){return n instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${zo(t.value)}`})(n):n instanceof qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ww).join(" ,")+"}"})(n):"Filter"}class N1 extends yt{constructor(e,t,i){super(e,t,i),this.key=le.fromName(i.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class D1 extends yt{constructor(e,t){super(e,"in",t),this.keys=Kw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class b1 extends yt{constructor(e,t){super(e,"not-in",t),this.keys=Kw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Kw(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>le.fromName(i.referenceValue)))}class O1 extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sp(t)&&ml(t.arrayValue,this.value)}}class V1 extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ml(this.value.arrayValue,t)}}class L1 extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ml(this.value.arrayValue,t)}}class M1 extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>ml(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function l_(n,e=null,t=[],i=[],o=null,l=null,h=null){return new F1(n,e,t,i,o,l,h)}function op(n){const e=Ee(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>If(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Gc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>zo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>zo(i))).join(",")),e.Te=t}return e.Te}function ap(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!P1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!a_(n.startAt,e.startAt)&&a_(n.endAt,e.endAt)}function Sf(n){return le.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function U1(n,e,t,i,o,l,h,f){return new Yo(n,e,t,i,o,l,h,f)}function Yc(n){return new Yo(n)}function u_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function j1(n){return le.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Gw(n){return n.collectionGroup!==null}function il(n){const e=Ee(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new Et(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new gl(l,i))})),t.has(Dt.keyField().canonicalString())||e.Ee.push(new gl(Dt.keyField(),i))}return e.Ee}function fr(n){const e=Ee(n);return e.Ie||(e.Ie=B1(e,il(n))),e.Ie}function B1(n,e){if(n.limitType==="F")return l_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new gl(o.field,l)}));const t=n.endAt?new kc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new kc(n.startAt.position,n.startAt.inclusive):null;return l_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Af(n,e){const t=n.filters.concat([e]);return new Yo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function z1(n,e){const t=n.explicitOrderBy.concat([e]);return new Yo(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Cc(n,e,t){return new Yo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Jc(n,e){return ap(fr(n),fr(e))&&n.limitType===e.limitType}function Qw(n){return`${op(fr(n))}|lt:${n.limitType}`}function No(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Ww(o))).join(", ")}]`),Gc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>zo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>zo(o))).join(",")),`Target(${i})`})(fr(n))}; limitType=${n.limitType})`}function Xc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):le.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of il(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const _=o_(h,f,g);return h.inclusive?_<=0:_<0})(i.startAt,il(i),o)||i.endAt&&!(function(h,f,g){const _=o_(h,f,g);return h.inclusive?_>=0:_>0})(i.endAt,il(i),o))})(n,e)}function $1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yw(n){return(e,t)=>{let i=!1;for(const o of il(n)){const l=q1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function q1(n,e,t){const i=n.field.isKeyField()?le.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?Bo(g,_):me(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return me(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){qi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return bw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=new it(le.comparator);function Kr(){return H1}const Jw=new it(le.comparator);function Xa(...n){let e=Jw;for(const t of n)e=e.insert(t.key,t);return e}function Xw(n){let e=Jw;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Es(){return sl()}function Zw(){return sl()}function sl(){return new Ms((n=>n.toString()),((n,e)=>n.isEqual(e)))}const W1=new it(le.comparator),K1=new Et(le.comparator);function De(...n){let e=K1;for(const t of n)e=e.add(t);return e}const G1=new Et(Ne);function Q1(){return G1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(e)?"-0":e}}function eE(n){return{integerValue:""+n}}function tE(n,e){return w1(e)?eE(e):lp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this._=void 0}}function Y1(n,e,t){return n instanceof Pc?(function(o,l){const h={fields:{[Lw]:{stringValue:Vw},[Fw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&ip(l)&&(l=Qc(l)),l&&(h.fields[Mw]=l),{mapValue:h}})(t,e):n instanceof yl?rE(n,e):n instanceof _l?iE(n,e):(function(o,l){const h=nE(o,l),f=c_(h)+c_(o.Ae);return Tf(h)&&Tf(o.Ae)?eE(f):lp(o.serializer,f)})(n,e)}function J1(n,e,t){return n instanceof yl?rE(n,e):n instanceof _l?iE(n,e):t}function nE(n,e){return n instanceof vl?(function(i){return Tf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Pc extends Zc{}class yl extends Zc{constructor(e){super(),this.elements=e}}function rE(n,e){const t=sE(e);for(const i of n.elements)t.some((o=>gr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class _l extends Zc{constructor(e){super(),this.elements=e}}function iE(n,e){let t=sE(e);for(const i of n.elements)t=t.filter((o=>!gr(o,i)));return{arrayValue:{values:t}}}class vl extends Zc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function c_(n){return dt(n.integerValue||n.doubleValue)}function sE(n){return sp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,t){this.field=e,this.transform=t}}function Z1(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof yl&&o instanceof yl||i instanceof _l&&o instanceof _l?jo(i.elements,o.elements,gr):i instanceof vl&&o instanceof vl?gr(i.Ae,o.Ae):i instanceof Pc&&o instanceof Pc})(n.transform,e.transform)}class eC{constructor(e,t){this.version=e,this.transformResults=t}}class kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class eh{}function oE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new up(n.key,kn.none()):new Rl(n.key,n.data,kn.none());{const t=n.data,i=tn.empty();let o=new Et(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Hi(n.key,i,new yn(o.toArray()),kn.none())}}function tC(n,e,t){n instanceof Rl?(function(o,l,h){const f=o.value.clone(),g=d_(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Hi?(function(o,l,h){if(!hc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=d_(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(aE(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ol(n,e,t,i){return n instanceof Rl?(function(l,h,f,g){if(!hc(l.precondition,h))return f;const _=l.value.clone(),w=f_(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(n,e,t,i):n instanceof Hi?(function(l,h,f,g){if(!hc(l.precondition,h))return f;const _=f_(l.fieldTransforms,g,h),w=h.data;return w.setAll(aE(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((A=>A.field)))})(n,e,t,i):(function(l,h,f){return hc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function nC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=nE(i.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(i.field,l))}return t||null}function h_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&jo(i,o,((l,h)=>Z1(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Rl extends eh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Hi extends eh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function aE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function d_(n,e,t){const i=new Map;qe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,J1(h,f,t[o]))}return i}function f_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,Y1(l,h,e))}return i}class up extends eh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rC extends eh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&tC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ol(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ol(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Zw();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=oE(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(_e.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,((t,i)=>h_(t,i)))&&jo(this.baseMutations,e.baseMutations,((t,i)=>h_(t,i)))}}class cp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){qe(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return W1})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new cp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Le;function aC(n){switch(n){case z.OK:return me(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return me(15467,{code:n})}}function lE(n){if(n===void 0)return Wr("GRPC error has no .code"),z.UNKNOWN;switch(n){case gt.OK:return z.OK;case gt.CANCELLED:return z.CANCELLED;case gt.UNKNOWN:return z.UNKNOWN;case gt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case gt.INTERNAL:return z.INTERNAL;case gt.UNAVAILABLE:return z.UNAVAILABLE;case gt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case gt.NOT_FOUND:return z.NOT_FOUND;case gt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case gt.ABORTED:return z.ABORTED;case gt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case gt.DATA_LOSS:return z.DATA_LOSS;default:return me(39323,{code:n})}}(Le=gt||(gt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=new Oi([4294967295,4294967295],0);function p_(n){const e=lC().encode(n),t=new Tw;return t.update(e),new Uint8Array(t.digest())}function m_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Oi([t,i],0),new Oi([o,l],0)]}class hp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Za(`Invalid padding: ${t}`);if(i<0)throw new Za(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Za(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Za(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Oi.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Oi.fromNumber(i)));return o.compare(uC)===1&&(o=new Oi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=p_(e),[i,o]=m_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new hp(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=p_(e),[i,o]=m_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,kl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new th(_e.min(),o,new it(Ne),Kr(),De())}}class kl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new kl(i,t,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class uE{constructor(e,t){this.targetId=e,this.Ce=t}}class cE{constructor(e,t,i=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class g_{constructor(){this.ve=0,this.Fe=y_(),this.Me=bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=De(),t=De(),i=De();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:me(38017,{changeType:l})}})),new kl(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=y_()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,qe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class cC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kr(),this.Je=Ju(),this.He=Ju(),this.Ze=new it(Ne)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:me(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Sf(l))if(i===0){const h=new le(l.path);this.et(t,h,zt.newNoDocument(h,_e.min()))}else qe(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Fi(i).toUint8Array()}catch(g){if(g instanceof Ow)return xs("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new hp(h,o,l)}catch(g){return xs(g instanceof Za?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&Sf(f.target)){const g=new le(f.target.path);this.Et(g).has(h)||this.It(h,g)||this.et(h,g,zt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let i=De();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new th(e,t,this.Ze,this.je,i);return this.je=Kr(),this.Je=Ju(),this.He=Ju(),this.Ze=new it(Ne),o}Ye(e,t){if(!this.rt(e))return;const i=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new g_,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Et(Ne),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Et(Ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new g_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ju(){return new it(le.comparator)}function y_(){return new it(le.comparator)}const hC={asc:"ASCENDING",desc:"DESCENDING"},dC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fC={and:"AND",or:"OR"};class pC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rf(n,e){return n.useProto3Json||Gc(e)?e:{value:e}}function xc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mC(n,e){return xc(n,e.toTimestamp())}function pr(n){return qe(!!n,49232),_e.fromTimestamp((function(t){const i=Mi(t);return new Ze(i.seconds,i.nanos)})(n))}function dp(n,e){return kf(n,e).canonicalString()}function kf(n,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function dE(n){const e=Qe.fromString(n);return qe(yE(e),10190,{key:e.toString()}),e}function Cf(n,e){return dp(n.databaseId,e.path)}function nf(n,e){const t=dE(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new le(pE(t))}function fE(n,e){return dp(n.databaseId,e)}function gC(n){const e=dE(n);return e.length===4?Qe.emptyPath():pE(e)}function Pf(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pE(n){return qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function __(n,e,t){return{name:Cf(n,e),fields:t.value.mapValue.fields}}function yC(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:me(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(qe(w===void 0||typeof w=="string",58123),bt.fromBase64String(w||"")):(qe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),bt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const w=_.code===void 0?z.UNKNOWN:lE(_.code);return new ee(w,_.message||"")})(h);t=new cE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=nf(n,i.document.name),l=pr(i.document.updateTime),h=i.document.createTime?pr(i.document.createTime):_e.min(),f=new tn({mapValue:{fields:i.document.fields}}),g=zt.newFoundDocument(o,l,h,f),_=i.targetIds||[],w=i.removedTargetIds||[];t=new dc(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=nf(n,i.document),l=i.readTime?pr(i.readTime):_e.min(),h=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new dc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=nf(n,i.document),l=i.removedTargetIds||[];t=new dc([],l,o,null)}else{if(!("filter"in e))return me(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new oC(o,l),f=i.targetId;t=new uE(f,h)}}return t}function _C(n,e){let t;if(e instanceof Rl)t={update:__(n,e.key,e.value)};else if(e instanceof up)t={delete:Cf(n,e.key)};else if(e instanceof Hi)t={update:__(n,e.key,e.data),updateMask:kC(e.fieldMask)};else{if(!(e instanceof rC))return me(16599,{dt:e.type});t={verify:Cf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof Pc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof yl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof _l)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof vl)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw me(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:mC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:me(27497)})(n,e.precondition)),t}function vC(n,e){return n&&n.length>0?(qe(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?pr(o.updateTime):pr(l);return h.isEqual(_e.min())&&(h=pr(l)),new eC(h,o.transformResults||[])})(t,e)))):[]}function wC(n,e){return{documents:[fE(n,e.path)]}}function EC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=fE(n,o);const l=(function(_){if(_.length!==0)return gE(qn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(N){return{field:Do(N.field),direction:SC(N.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Rf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function TC(n){let e=gC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){qe(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(A){const N=mE(A);return N instanceof qn&&qw(N)?N.getFilters():[N]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((N=>(function(Q){return new gl(bo(Q.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(N)))})(t.orderBy));let f=null;t.limit&&(f=(function(A){let N;return N=typeof A=="object"?A.value:A,Gc(N)?null:N})(t.limit));let g=null;t.startAt&&(g=(function(A){const N=!!A.before,B=A.values||[];return new kc(B,N)})(t.startAt));let _=null;return t.endAt&&(_=(function(A){const N=!A.before,B=A.values||[];return new kc(B,N)})(t.endAt)),U1(e,o,h,l,f,"F",g,_)}function IC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=bo(t.unaryFilter.field);return yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=bo(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=bo(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=bo(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}})(n):n.fieldFilter!==void 0?(function(t){return yt.create(bo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qn.create(t.compositeFilter.filters.map((i=>mE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me(1026)}})(t.compositeFilter.op))})(n):me(30097,{filter:n})}function SC(n){return hC[n]}function AC(n){return dC[n]}function RC(n){return fC[n]}function Do(n){return{fieldPath:n.canonicalString()}}function bo(n){return Dt.fromServerFormat(n.fieldPath)}function gE(n){return n instanceof yt?(function(t){if(t.op==="=="){if(s_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NAN"}};if(i_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(s_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NAN"}};if(i_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(t.field),op:AC(t.op),value:t.value}}})(n):n instanceof qn?(function(t){const i=t.getFilters().map((o=>gE(o)));return i.length===1?i[0]:{compositeFilter:{op:RC(t.op),filters:i}}})(n):me(54877,{filter:n})}function kC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function _E(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,i,o,l=_e.min(),h=_e.min(),f=bt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.yt=e}}function PC(n){const e=TC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Cc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.bn=new NC}addToCollectionParentIndex(e,t){return this.bn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Li.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Li.min())}updateCollectionGroup(e,t,i){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class NC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Et(Qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Et(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vE=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(vE,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new $o(0)}static ar(){return new $o(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="LruGarbageCollector",DC=1048576;function E_([n,e],[t,i]){const o=Ne(n,t);return o===0?Ne(e,i):o}class bC{constructor(e){this.Pr=e,this.buffer=new Et(E_),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();E_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ne(w_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qo(t)?ne(w_,"Ignoring IndexedDB error during garbage collection: ",t):await Go(t)}await this.Ar(3e5)}))}}class VC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Kc.ce);const i=new bC(t);return this.Vr.forEachTarget(e,(o=>i.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Ir(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(v_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),v_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,h,f,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(i=A,f=Date.now(),this.removeTargets(e,i,t)))).next((A=>(l=A,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((A=>(_=Date.now(),xo()<=xe.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${A} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:A}))))}}function LC(n,e){return new VC(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.changes=new Ms((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?$.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&ol(i.mutation,o,yn.empty(),Ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,De()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=De()){const o=Es();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Xa();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=Es();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,De())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Kr();const h=sl(),f=(function(){return sl()})();return t.forEach(((g,_)=>{const w=i.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Hi)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),ol(w.mutation,_,w.mutation.getFieldMask(),Ze.now())):h.set(_.key,yn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>f.set(_,new FC(w,h.get(_)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=sl();let o=new it(((h,f)=>h-f)),l=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=i.get(g)||yn.empty();w=f.applyToLocalView(_,w),i.set(g,w);const A=(o.get(f.batchId)||De()).add(g);o=o.insert(f.batchId,A)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,w=g.value,A=Zw();w.forEach((N=>{if(!l.has(N)){const B=oE(t.get(N),i.get(N));B!==null&&A.set(N,B),l=l.add(N)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,A))}return $.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return j1(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):$.resolve(Es());let f=dl,g=l;return h.next((_=>$.forEach(_,((w,A)=>(f<A.largestBatchId&&(f=A.largestBatchId),l.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((N=>{g=g.insert(w,N)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,De()))).next((w=>({batchId:f,changes:Xw(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next((i=>{let o=Xa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Xa();return this.indexManager.getCollectionParents(e,l).next((f=>$.forEach(f,(g=>{const _=(function(A,N){return new Yo(N,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((w=>{w.forEach(((A,N)=>{h=h.insert(A,N)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,zt.newInvalidDocument(w)))}));let f=Xa();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&ol(w.mutation,_,yn.empty(),Ze.now()),Xc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:pr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:PC(o.bundledQuery),readTime:pr(o.readTime)}})(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.overlays=new it(le.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Es();return $.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),$.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),$.resolve()}getOverlaysForCollection(e,t,i){const o=Es(),l=t.length+1,h=new le(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new it(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let w=l.get(_.largestBatchId);w===null&&(w=Es(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=Es(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>f.set(_,w))),!(f.size()>=o)););return $.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new sC(t,i));let l=this.Lr.get(t);l===void 0&&(l=De(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.kr=new Et(At.qr),this.Kr=new Et(At.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new At(e,t);this.kr=this.kr.add(i),this.Kr=this.Kr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new At(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new le(new Qe([])),i=new At(t,e),o=new At(t,e+1),l=[];return this.Kr.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new le(new Qe([])),i=new At(t,e),o=new At(t,e+1);let l=De();return this.Kr.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new At(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return le.comparator(e.key,t.key)||Ne(e.Jr,t.Jr)}static Ur(e,t){return Ne(e.Jr,t.Jr)||le.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Et(At.qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new iC(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Hr=this.Hr.add(new At(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return $.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?rp:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Jr);l.push(f)})),$.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(Ne);return t.forEach((o=>{const l=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,h],(f=>{i=i.add(f.Jr)}))})),$.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;le.isDocumentKey(l)||(l=l.child(""));const h=new At(new le(l),0);let f=new Et(Ne);return this.Hr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Jr)),!0)}),h),$.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){qe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return $.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=i}))}nr(e){}containsKey(e,t){const i=new At(t,0),o=this.Hr.firstAfterOrEqual(i);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.ti=e,this.docs=(function(){return new it(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return $.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=Kr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),$.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Kr();const h=t.path,f=new le(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||g1(m1(w),i)<=0||(o.has(w.key)||Xc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return $.resolve(l)}getAllFromCollectionGroup(e,t,i,o){me(9500)}ni(e,t){return $.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new HC(this)}getSize(e){return $.resolve(this.size)}}class HC extends MC{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.persistence=e,this.ri=new Ms((t=>op(t)),ap),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.ii=0,this.si=new fp,this.targetCount=0,this.oi=$o._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new $o(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),$.waitFor(l).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return $.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),$.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return $.resolve(i)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,t){this._i={},this.overlays={},this.ai=new Kc(0),this.ui=!1,this.ui=!0,this.ci=new zC,this.referenceDelegate=e(this),this.li=new WC(this),this.indexManager=new xC,this.remoteDocumentCache=(function(o){return new qC(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new CC(t),this.Pi=new jC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new BC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new $C(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){ne("MemoryPersistence","Starting transaction:",e);const o=new KC(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ei(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ii(e,t){return $.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class KC extends _1{constructor(e){super(),this.currentSequenceNumber=e}}class pp{constructor(e){this.persistence=e,this.Ri=new fp,this.Ai=null}static Vi(e){return new pp(e)}get di(){if(this.Ai)return this.Ai;throw me(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),$.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(i=>{const o=le.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,_e.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Nc{constructor(e,t){this.persistence=e,this.fi=new Ms((i=>E1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=LC(this,t)}static Vi(e,t){return new Nc(e,t)}Ti(){}Ei(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?$.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,_e.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),$.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uc(e.data.value)),t}wr(e,t,i){return $.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Es=o}static Is(e,t){let i=De(),o=De();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new mp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return YT()?8:v1(qt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new GC;return this.ys(e,t,h).next((f=>{if(l.result=f,this.As)return this.ws(e,t,h,f.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(xo()<=xe.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",No(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(xo()<=xe.DEBUG&&ne("QueryEngine","Query:",No(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(xo()<=xe.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",No(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fr(t))):$.resolve())}gs(e,t){if(u_(t))return $.resolve(null);let i=fr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Cc(t,null,"F"),i=fr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=De(...l);return this.fs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.Ss(t,f);return this.bs(t,_,h,g.readTime)?this.gs(e,Cc(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,i,o){return u_(t)||o.isEqual(_e.min())?$.resolve(null):this.fs.getDocuments(e,i).next((l=>{const h=this.Ss(t,l);return this.bs(t,h,i,o)?$.resolve(null):(xo()<=xe.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),No(t)),this.Ds(e,h,t,p1(o,dl)).next((f=>f)))}))}Ss(e,t){let i=new Et(Yw(e));return t.forEach(((o,l)=>{Xc(e,l)&&(i=i.add(l))})),i}bs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return xo()<=xe.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",No(t)),this.fs.getDocumentsMatchingQuery(e,t,Li.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="LocalStore",YC=3e8;class JC{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new it(Ne),this.Fs=new Ms((l=>op(l)),ap),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function XC(n,e,t,i){return new JC(n,e,t,i)}async function EE(n,e){const t=Ee(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=De();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){f.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function ZC(n,e){const t=Ee(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,w){const A=_.batch,N=A.keys();let B=$.resolve();return N.forEach((Q=>{B=B.next((()=>w.getEntry(g,Q))).next((Y=>{const q=_.docVersions.get(Q);qe(q!==null,48541),Y.version.compareTo(q)<0&&(A.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),w.addEntry(Y)))}))})),B.next((()=>f.mutationQueue.removeMutationBatch(g,A)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=De();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function TE(n){const e=Ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function eP(n,e){const t=Ee(n),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((w,A)=>{const N=o.get(A);if(!N)return;f.push(t.li.removeMatchingKeys(l,w.removedDocuments,A).next((()=>t.li.addMatchingKeys(l,w.addedDocuments,A))));let B=N.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(A)!==null?B=B.withResumeToken(bt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,i)),o=o.insert(A,B),(function(Y,q,ge){return Y.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=YC?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(N,B,w)&&f.push(t.li.updateTargetData(l,B))}));let g=Kr(),_=De();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(tP(l,h,e.documentUpdates).next((w=>{g=w.Bs,_=w.Ls}))),!i.isEqual(_e.min())){const w=t.li.getLastRemoteSnapshotVersion(l).next((A=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return $.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.vs=o,l)))}function tP(n,e,t){let i=De(),o=De();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=Kr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(_e.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ne(gp,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function nP(n,e){const t=Ee(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=rp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function rP(n,e){const t=Ee(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,$.resolve(o)):t.li.allocateTargetId(i).next((h=>(o=new Ni(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function xf(n,e,t){const i=Ee(n),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Qo(h))throw h;ne(gp,`Failed to update sequence numbers for target ${e}: ${h}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function T_(n,e,t){const i=Ee(n);let o=_e.min(),l=De();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const A=Ee(g),N=A.Fs.get(w);return N!==void 0?$.resolve(A.vs.get(N)):A.li.getTargetData(_,w)})(i,h,fr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:_e.min(),t?l:De()))).next((f=>(iP(i,$1(e),f),{documents:f,ks:l})))))}function iP(n,e,t){let i=n.Ms.get(e)||_e.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Ms.set(e,i)}class I_{constructor(){this.activeTargetIds=Q1()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sP{constructor(){this.vo=new I_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new I_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="ConnectivityMonitor";class A_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ne(S_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ne(S_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu=null;function Nf(){return Xu===null?Xu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Xu++,"0x"+Xu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="RestConnection",aP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class lP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===Ac?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=Nf(),f=this.Qo(e,t.toUriEncodedString());ne(rf,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:_}=new URL(f),w=Ho(_);return this.zo(e,f,g,i,w).then((A=>(ne(rf,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw xs(rf,`RPC '${e}' ${h} failed with error: `,A,"url: ",f,"request:",i),A}))}jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ko})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=aP[e];let o=`${this.Ko}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection",Ka=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Fo extends lP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Fo.c_){const e=Rw();Ka(e,Aw.STAT_EVENT,(t=>{t.stat===vf.PROXY?ne(Ut,"STAT_EVENT: detected buffering proxy"):t.stat===vf.NOPROXY&&ne(Ut,"STAT_EVENT: detected no buffering proxy")})),Fo.c_=!0}}zo(e,t,i,o,l){const h=Nf();return new Promise(((f,g)=>{const _=new Iw;_.setWithCredentials(!0),_.listenOnce(Sw.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case lc.NO_ERROR:const A=_.getResponseJson();ne(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),f(A);break;case lc.TIMEOUT:ne(Ut,`RPC '${e}' ${h} timed out`),g(new ee(z.DEADLINE_EXCEEDED,"Request time out"));break;case lc.HTTP_ERROR:const N=_.getStatus();if(ne(Ut,`RPC '${e}' ${h} failed with status:`,N,"response text:",_.getResponseText()),N>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const Q=B==null?void 0:B.error;if(Q&&Q.status&&Q.message){const Y=(function(ge){const ve=ge.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(ve)>=0?ve:z.UNKNOWN})(Q.status);g(new ee(Y,Q.message))}else g(new ee(z.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee(z.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ne(Ut,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(Ut,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,i,15)}))}T_(e,t,i){const o=Nf(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const _=l.join("");ne(Ut,`Creating RPC '${e}' stream ${o}: ${_}`,f);const w=h.createWebChannel(_,f);this.E_(w);let A=!1,N=!1;const B=new uP({Jo:Q=>{N?ne(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,Q):(A||(ne(Ut,`Opening RPC '${e}' stream ${o} transport.`),w.open(),A=!0),ne(Ut,`RPC '${e}' stream ${o} sending:`,Q),w.send(Q))},Ho:()=>w.close()});return Ka(w,Ja.EventType.OPEN,(()=>{N||(ne(Ut,`RPC '${e}' stream ${o} transport opened.`),B.i_())})),Ka(w,Ja.EventType.CLOSE,(()=>{N||(N=!0,ne(Ut,`RPC '${e}' stream ${o} transport closed`),B.o_(),this.I_(w))})),Ka(w,Ja.EventType.ERROR,(Q=>{N||(N=!0,xs(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,Q.name,"Message:",Q.message),B.o_(new ee(z.UNAVAILABLE,"The operation could not be completed")))})),Ka(w,Ja.EventType.MESSAGE,(Q=>{var Y;if(!N){const q=Q.data[0];qe(!!q,16349);const ge=q,ve=(ge==null?void 0:ge.error)||((Y=ge[0])==null?void 0:Y.error);if(ve){ne(Ut,`RPC '${e}' stream ${o} received error:`,ve);const Te=ve.status;let fe=(function(D){const R=gt[D];if(R!==void 0)return lE(R)})(Te),ke=ve.message;Te==="NOT_FOUND"&&ke.includes("database")&&ke.includes("does not exist")&&ke.includes(this.databaseId.database)&&xs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),fe===void 0&&(fe=z.INTERNAL,ke="Unknown error status: "+Te+" with message "+ve.message),N=!0,B.o_(new ee(fe,ke)),w.close()}else ne(Ut,`RPC '${e}' stream ${o} received:`,q),B.__(q)}})),Fo.u_(),setTimeout((()=>{B.s_()}),0),B}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return kw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(n){return new Fo(n)}function sf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n){return new pC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fo.c_=!1;class IE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="PersistentStream";class SE{constructor(e,t,i,o,l,h,f,g){this.Ci=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new IE(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(Wr(t.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ee(z.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(R_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ne(R_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class hP extends SE{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=yC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return _e.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?pr(h.readTime):_e.min()})(e);return this.listener.H_(t,i)}Z_(e){const t={};t.database=Pf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=Sf(g)?{documents:wC(l,g)}:{query:EC(l,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=hE(l,h.resumeToken);const _=Rf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(_e.min())>0){f.readTime=xc(l,h.snapshotVersion.toTimestamp());const _=Rf(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const i=IC(this.serializer,e);i&&(t.labels=i),this.q_(t)}X_(e){const t={};t.database=Pf(this.serializer),t.removeTarget=e,this.q_(t)}}class dP extends SE{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=vC(e.writeResults,e.commitTime),i=pr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Pf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>_C(this.serializer,i)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{}class pP extends fP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,kf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(z.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.jo(e,kf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(z.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function mP(n,e,t,i){return new pP(n,e,t,i)}class gP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Wr(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="RemoteStore";class yP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((h=>{i.enqueueAndForget((async()=>{Fs(this)&&(ne(Ns,"Restarting streams for network reachability change."),await(async function(g){const _=Ee(g);_.Ia.add(4),await Cl(_),_.Va.set("Unknown"),_.Ia.delete(4),await rh(_)})(this))}))})),this.Va=new gP(i,o)}}async function rh(n){if(Fs(n))for(const e of n.Ra)await e(!0)}async function Cl(n){for(const e of n.Ra)await e(!1)}function AE(n,e){const t=Ee(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),wp(t)?vp(t):Jo(t).O_()&&_p(t,e))}function yp(n,e){const t=Ee(n),i=Jo(t);t.Ea.delete(e),i.O_()&&RE(t,e),t.Ea.size===0&&(i.O_()?i.L_():Fs(t)&&t.Va.set("Unknown"))}function _p(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jo(n).Z_(e)}function RE(n,e){n.da.$e(e),Jo(n).X_(e)}function vp(n){n.da=new cC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Jo(n).start(),n.Va.ua()}function wp(n){return Fs(n)&&!Jo(n).x_()&&n.Ea.size>0}function Fs(n){return Ee(n).Ia.size===0}function kE(n){n.da=void 0}async function _P(n){n.Va.set("Online")}async function vP(n){n.Ea.forEach(((e,t)=>{_p(n,e)}))}async function wP(n,e){kE(n),wp(n)?(n.Va.ha(e),vp(n)):n.Va.set("Unknown")}async function EP(n,e,t){if(n.Va.set("Online"),e instanceof cE&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ea.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ea.delete(f),o.da.removeTarget(f))})(n,e)}catch(i){ne(Ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Dc(n,i)}else if(e instanceof dc?n.da.Xe(e):e instanceof uE?n.da.st(e):n.da.tt(e),!t.isEqual(_e.min()))try{const i=await TE(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.da.Tt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ea.get(_);w&&l.Ea.set(_,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const w=l.Ea.get(g);if(!w)return;l.Ea.set(g,w.withResumeToken(bt.EMPTY_BYTE_STRING,w.snapshotVersion)),RE(l,g);const A=new Ni(w.target,g,_,w.sequenceNumber);_p(l,A)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ne(Ns,"Failed to raise snapshot:",i),await Dc(n,i)}}async function Dc(n,e,t){if(!Qo(e))throw e;n.Ia.add(1),await Cl(n),n.Va.set("Offline"),t||(t=()=>TE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ne(Ns,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await rh(n)}))}function CE(n,e){return e().catch((t=>Dc(n,t,e)))}async function ih(n){const e=Ee(n),t=ji(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:rp;for(;TP(e);)try{const o=await nP(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,IP(e,o)}catch(o){await Dc(e,o)}PE(e)&&xE(e)}function TP(n){return Fs(n)&&n.Ta.length<10}function IP(n,e){n.Ta.push(e);const t=ji(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function PE(n){return Fs(n)&&!ji(n).x_()&&n.Ta.length>0}function xE(n){ji(n).start()}async function SP(n){ji(n).ra()}async function AP(n){const e=ji(n);for(const t of n.Ta)e.ea(t.mutations)}async function RP(n,e,t){const i=n.Ta.shift(),o=cp.from(i,e,t);await CE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ih(n)}async function kP(n,e){e&&ji(n).Y_&&await(async function(i,o){if((function(h){return aC(h)&&h!==z.ABORTED})(o.code)){const l=i.Ta.shift();ji(i).B_(),await CE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await ih(i)}})(n,e),PE(n)&&xE(n)}async function k_(n,e){const t=Ee(n);t.asyncQueue.verifyOperationInProgress(),ne(Ns,"RemoteStore received new credentials");const i=Fs(t);t.Ia.add(3),await Cl(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await rh(t)}async function CP(n,e){const t=Ee(n);e?(t.Ia.delete(2),await rh(t)):e||(t.Ia.add(2),await Cl(t),t.Va.set("Unknown"))}function Jo(n){return n.ma||(n.ma=(function(t,i,o){const l=Ee(t);return l.sa(),new hP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:_P.bind(null,n),Yo:vP.bind(null,n),t_:wP.bind(null,n),H_:EP.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),wp(n)?vp(n):n.Va.set("Unknown")):(await n.ma.stop(),kE(n))}))),n.ma}function ji(n){return n.fa||(n.fa=(function(t,i,o){const l=Ee(t);return l.sa(),new dP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:SP.bind(null,n),t_:kP.bind(null,n),ta:AP.bind(null,n),na:RP.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await ih(n)):(await n.fa.stop(),n.Ta.length>0&&(ne(Ns,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Ep(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(n,e){if(Wr("AsyncQueue",`${e}: ${n}`),Qo(n))return new ee(z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{static emptySet(e){return new Uo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||le.comparator(t.key,i.key):(t,i)=>le.comparator(t.key,i.key),this.keyedMap=Xa(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Uo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Uo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.ga=new it(le.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):me(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class qo{constructor(e,t,i,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new qo(e,t,Uo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class xP{constructor(){this.queries=P_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Ee(t),l=o.queries;o.queries=P_(),l.forEach(((h,f)=>{for(const g of f.Sa)g.onError(i)}))})(this,new ee(z.ABORTED,"Firestore shutting down"))}}function P_(){return new Ms((n=>Qw(n)),Jc)}async function Ip(n,e){const t=Ee(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new PP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Tp(h,`Initialization of query '${No(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Ap(t)}async function Sp(n,e){const t=Ee(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function NP(n,e){const t=Ee(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&Ap(t)}function DP(n,e,t){const i=Ee(n),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function Ap(n){n.Ca.forEach((e=>{e.next()}))}var Df,x_;(x_=Df||(Df={})).Ma="default",x_.Cache="cache";class Rp{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new qo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Df.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.key=e}}class DE{constructor(e){this.key=e}}class bP{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=De(),this.mutatedKeys=De(),this.eu=Yw(e),this.tu=new Uo(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new C_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const N=o.get(w),B=Xc(this.query,A)?A:null,Q=!!N&&this.mutatedKeys.has(N.key),Y=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let q=!1;N&&B?N.data.isEqual(B.data)?Q!==Y&&(i.track({type:3,doc:B}),q=!0):this.su(N,B)||(i.track({type:2,doc:B}),q=!0,(g&&this.eu(B,g)>0||_&&this.eu(B,_)<0)&&(f=!0)):!N&&B?(i.track({type:0,doc:B}),q=!0):N&&!B&&(i.track({type:1,doc:N}),q=!0,(g||_)&&(f=!0)),q&&(B?(h=h.add(B),l=Y?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{tu:h,iu:i,bs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,A)=>(function(B,Q){const Y=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Vt:q})}};return Y(B)-Y(Q)})(w.type,A.type)||this.eu(w.doc,A.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new qo(this.query,e.tu,l,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new C_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=De(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new DE(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new NE(i))})),t}cu(e){this.Za=e.ks,this.Ya=De();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return qo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const kp="SyncEngine";class OP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class VP{constructor(e){this.key=e,this.hu=!1}}class LP{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ms((f=>Qw(f)),Jc),this.Eu=new Map,this.Iu=new Set,this.Ru=new it(le.comparator),this.Au=new Map,this.Vu=new fp,this.du={},this.mu=new Map,this.fu=$o.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function MP(n,e,t=!0){const i=FE(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await bE(i,e,t,!0),o}async function FP(n,e){const t=FE(n);await bE(t,e,!0,!1)}async function bE(n,e,t,i){const o=await rP(n.localStore,fr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await UP(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&AE(n.remoteStore,o),f}async function UP(n,e,t,i,o){n.pu=(A,N,B)=>(async function(Y,q,ge,ve){let Te=q.view.ru(ge);Te.bs&&(Te=await T_(Y.localStore,q.query,!1).then((({documents:D})=>q.view.ru(D,Te))));const fe=ve&&ve.targetChanges.get(q.targetId),ke=ve&&ve.targetMismatches.get(q.targetId)!=null,Se=q.view.applyChanges(Te,Y.isPrimaryClient,fe,ke);return D_(Y,q.targetId,Se.au),Se.snapshot})(n,A,N,B);const l=await T_(n.localStore,e,!0),h=new bP(e,l.ks),f=h.ru(l.documents),g=kl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),_=h.applyChanges(f,n.isPrimaryClient,g);D_(n,t,_.au);const w=new OP(e,t,h);return n.Tu.set(e,w),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),_.snapshot}async function jP(n,e,t){const i=Ee(n),o=i.Tu.get(e),l=i.Eu.get(o.targetId);if(l.length>1)return i.Eu.set(o.targetId,l.filter((h=>!Jc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await xf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&yp(i.remoteStore,o.targetId),bf(i,o.targetId)})).catch(Go)):(bf(i,o.targetId),await xf(i.localStore,o.targetId,!0))}async function BP(n,e){const t=Ee(n),i=t.Tu.get(e),o=t.Eu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),yp(t.remoteStore,i.targetId))}async function zP(n,e,t){const i=QP(n);try{const o=await(function(h,f){const g=Ee(h),_=Ze.now(),w=f.reduce(((B,Q)=>B.add(Q.key)),De());let A,N;return g.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let Q=Kr(),Y=De();return g.xs.getEntries(B,w).next((q=>{Q=q,Q.forEach(((ge,ve)=>{ve.isValidDocument()||(Y=Y.add(ge))}))})).next((()=>g.localDocuments.getOverlayedDocuments(B,Q))).next((q=>{A=q;const ge=[];for(const ve of f){const Te=nC(ve,A.get(ve.key).overlayedDocument);Te!=null&&ge.push(new Hi(ve.key,Te,Bw(Te.value.mapValue),kn.exists(!0)))}return g.mutationQueue.addMutationBatch(B,_,ge,f)})).next((q=>{N=q;const ge=q.applyToLocalDocumentSet(A,Y);return g.documentOverlayCache.saveOverlays(B,q.batchId,ge)}))})).then((()=>({batchId:N.batchId,changes:Xw(A)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.du[h.currentUser.toKey()];_||(_=new it(Ne)),_=_.insert(f,g),h.du[h.currentUser.toKey()]=_})(i,o.batchId,t),await Pl(i,o.changes),await ih(i.remoteStore)}catch(o){const l=Tp(o,"Failed to persist write");t.reject(l)}}async function OE(n,e){const t=Ee(n);try{const i=await eP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?qe(h.hu,14607):o.removedDocuments.size>0&&(qe(h.hu,42227),h.hu=!1))})),await Pl(t,i,e)}catch(i){await Go(i)}}function N_(n,e,t){const i=Ee(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Ee(h);g.onlineState=f;let _=!1;g.queries.forEach(((w,A)=>{for(const N of A.Sa)N.va(f)&&(_=!0)})),_&&Ap(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function $P(n,e,t){const i=Ee(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let h=new it(le.comparator);h=h.insert(l,zt.newNoDocument(l,_e.min()));const f=De().add(l),g=new th(_e.min(),new Map,new it(Ne),h,f);await OE(i,g),i.Ru=i.Ru.remove(l),i.Au.delete(e),Cp(i)}else await xf(i.localStore,e,!1).then((()=>bf(i,e,t))).catch(Go)}async function qP(n,e){const t=Ee(n),i=e.batch.batchId;try{const o=await ZC(t.localStore,e);LE(t,i,null),VE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Pl(t,o)}catch(o){await Go(o)}}async function HP(n,e,t){const i=Ee(n);try{const o=await(function(h,f){const g=Ee(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,f).next((A=>(qe(A!==null,37113),w=A.keys(),g.mutationQueue.removeMutationBatch(_,A)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(i.localStore,e);LE(i,e,t),VE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Pl(i,o)}catch(o){await Go(o)}}function VE(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function LE(n,e,t){const i=Ee(n);let o=i.du[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function bf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Eu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||ME(n,i)}))}function ME(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(yp(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Cp(n))}function D_(n,e,t){for(const i of t)i instanceof NE?(n.Vu.addReference(i.key,e),WP(n,i)):i instanceof DE?(ne(kp,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||ME(n,i.key)):me(19791,{wu:i})}function WP(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(i)||(ne(kp,"New document in limbo: "+t),n.Iu.add(i),Cp(n))}function Cp(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new le(Qe.fromString(e)),i=n.fu.next();n.Au.set(i,new VP(t)),n.Ru=n.Ru.insert(t,i),AE(n.remoteStore,new Ni(fr(Yc(t.path)),i,"TargetPurposeLimboResolution",Kc.ce))}}async function Pl(n,e,t){const i=Ee(n),o=[],l=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{h.push(i.pu(g,e,t).then((_=>{var w;if((_||t)&&i.isPrimaryClient){const A=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;i.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(_){o.push(_);const A=mp.Is(g.targetId,_);l.push(A)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,_){const w=Ee(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>$.forEach(_,(N=>$.forEach(N.Ts,(B=>w.persistence.referenceDelegate.addReference(A,N.targetId,B))).next((()=>$.forEach(N.Es,(B=>w.persistence.referenceDelegate.removeReference(A,N.targetId,B)))))))))}catch(A){if(!Qo(A))throw A;ne(gp,"Failed to update sequence numbers: "+A)}for(const A of _){const N=A.targetId;if(!A.fromCache){const B=w.vs.get(N),Q=B.snapshotVersion,Y=B.withLastLimboFreeSnapshotVersion(Q);w.vs=w.vs.insert(N,Y)}}})(i.localStore,l))}async function KP(n,e){const t=Ee(n);if(!t.currentUser.isEqual(e)){ne(kp,"User change. New user:",e.toKey());const i=await EE(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new ee(z.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Pl(t,i.Ns)}}function GP(n,e){const t=Ee(n),i=t.Au.get(e);if(i&&i.hu)return De().add(i.key);{let o=De();const l=t.Eu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function FE(n){const e=Ee(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=OE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$P.bind(null,e),e.Pu.H_=NP.bind(null,e.eventManager),e.Pu.yu=DP.bind(null,e.eventManager),e}function QP(n){const e=Ee(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HP.bind(null,e),e}class bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return XC(this.persistence,new QC,e.initialUser,this.serializer)}Cu(e){return new wE(pp.Vi,this.serializer)}Du(e){return new sP}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bc.provider={build:()=>new bc};class YP extends bc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){qe(this.persistence.referenceDelegate instanceof Nc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new OC(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new wE((i=>Nc.Vi(i,t)),this.serializer)}}class Of{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>N_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=KP.bind(null,this.syncEngine),await CP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new xP})()}createDatastore(e){const t=nh(e.databaseInfo.databaseId),i=cP(e.databaseInfo);return mP(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new yP(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>N_(this.syncEngine,t,0)),(function(){return A_.v()?new A_:new oP})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,w){const A=new LP(o,l,h,f,g,_);return w&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ee(o);ne(Ns,"RemoteStore shutting down."),l.Ia.add(5),await Cl(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Of.provider={build:()=>new Of};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Wr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="FirestoreClient";class JP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=np.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{ne(Bi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ne(Bi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Tp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function of(n,e){n.asyncQueue.verifyOperationInProgress(),ne(Bi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await EE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function b_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await XP(n);ne(Bi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>k_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>k_(e.remoteStore,o))),n._onlineComponents=e}async function XP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ne(Bi,"Using user provided OfflineComponentProvider");try{await of(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;xs("Error using user provided cache. Falling back to memory cache: "+t),await of(n,new bc)}}else ne(Bi,"Using default OfflineComponentProvider"),await of(n,new YP(void 0));return n._offlineComponents}async function UE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ne(Bi,"Using user provided OnlineComponentProvider"),await b_(n,n._uninitializedComponentsProvider._online)):(ne(Bi,"Using default OnlineComponentProvider"),await b_(n,new Of))),n._onlineComponents}function ZP(n){return UE(n).then((e=>e.syncEngine))}async function Oc(n){const e=await UE(n),t=e.eventManager;return t.onListen=MP.bind(null,e.syncEngine),t.onUnlisten=jP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=FP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=BP.bind(null,e.syncEngine),t}function ex(n,e,t,i){const o=new Pp(i),l=new Rp(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>Ip(await Oc(n),l))),()=>{o.Nu(),n.asyncQueue.enqueueAndForget((async()=>Sp(await Oc(n),l)))}}function tx(n,e,t={}){const i=new $r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const w=new Pp({next:N=>{w.Nu(),h.enqueueAndForget((()=>Sp(l,A)));const B=N.docs.has(f);!B&&N.fromCache?_.reject(new ee(z.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&N.fromCache&&g&&g.source==="server"?_.reject(new ee(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(N)},error:N=>_.reject(N)}),A=new Rp(Yc(f.path),w,{includeMetadataChanges:!0,qa:!0});return Ip(l,A)})(await Oc(n),n.asyncQueue,e,t,i))),i.promise}function nx(n,e,t={}){const i=new $r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const w=new Pp({next:N=>{w.Nu(),h.enqueueAndForget((()=>Sp(l,A))),N.fromCache&&g.source==="server"?_.reject(new ee(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(N)},error:N=>_.reject(N)}),A=new Rp(f,w,{includeMetadataChanges:!0,qa:!0});return Ip(l,A)})(await Oc(n),n.asyncQueue,e,t,i))),i.promise}function rx(n,e){const t=new $r;return n.asyncQueue.enqueueAndForget((async()=>zP(await ZP(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix="ComponentProvider",O_=new Map;function sx(n,e,t,i,o){return new S1(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,jE(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="firestore.googleapis.com",V_=!0;class L_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=BE,this.ssl=V_}else this.host=e.host,this.ssl=e.ssl??V_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<DC)throw new ee(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}f1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jE(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new r1;switch(i.type){case"firstParty":return new a1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ee(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=O_.get(t);i&&(ne(ix,"Removing Datastore"),O_.delete(t),i.terminate())})(this),Promise.resolve()}}function ox(n,e,t,i={}){var _;n=rn(n,sh);const o=Ho(e),l=n._getSettings(),h={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&Mf(`https://${f}`),l.host!==BE&&l.host!==f&&xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!Ss(g,h)&&(n._setSettings(g),i.mockUserToken)){let w,A;if(typeof i.mockUserToken=="string")w=i.mockUserToken,A=Bt.MOCK_USER;else{w=cv(i.mockUserToken,(_=n._app)==null?void 0:_.options.projectId);const N=i.mockUserToken.sub||i.mockUserToken.user_id;if(!N)throw new ee(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Bt(N)}n._authCredentials=new i1(new Pw(w,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Qr(this.firestore,e,this._query)}}class at{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Al(t,at._jsonSchema))return new at(e,i||null,new le(Qe.fromString(t.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:_t("string",at._jsonSchemaVersion),referencePath:_t("string")};class Vi extends Qr{constructor(e,t,i){super(e,t,Yc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new le(e))}withConverter(e){return new Vi(this.firestore,e,this._path)}}function jt(n,e,...t){if(n=rt(n),xw("collection","path",e),n instanceof sh){const i=Qe.fromString(e,...t);return Qy(i),new Vi(n,null,i)}{if(!(n instanceof at||n instanceof Vi))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return Qy(i),new Vi(n.firestore,null,i)}}function Kt(n,e,...t){if(n=rt(n),arguments.length===1&&(e=np.newId()),xw("doc","path",e),n instanceof sh){const i=Qe.fromString(e,...t);return Gy(i),new at(n,null,new le(i))}{if(!(n instanceof at||n instanceof Vi))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return Gy(i),new at(n.firestore,n instanceof Vi?n.converter:null,new le(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="AsyncQueue";class F_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new IE(this,"async_queue_retry"),this._c=()=>{const i=sf();i&&ne(M_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=sf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=sf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new $r;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Qo(e))throw e;ne(M_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Wr("INTERNAL UNHANDLED ERROR: ",U_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Ep.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&me(47125,{Pc:U_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function U_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Gr extends sh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new F_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new F_(e),this._firestoreClient=void 0,await e}}}function ax(n,e){const t=typeof n=="object"?n:jc(),i=typeof n=="string"?n:Ac,o=Os(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=av("firestore");l&&ox(o,...l)}return o}function oh(n){if(n._terminated)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||lx(n),n._firestoreClient}function lx(n){var i,o,l,h;const e=n._freezeSettings(),t=sx(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new JP(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(bt.fromBase64String(e))}catch(t){throw new ee(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rn(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Al(e,Rn._jsonSchema))return Rn.fromBase64String(e.bytes)}}Rn._jsonSchemaVersion="firestore/bytes/1.0",Rn._jsonSchema={type:_t("string",Rn._jsonSchemaVersion),bytes:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mr._jsonSchemaVersion}}static fromJSON(e){if(Al(e,mr._jsonSchema))return new mr(e.latitude,e.longitude)}}mr._jsonSchemaVersion="firestore/geoPoint/1.0",mr._jsonSchema={type:_t("string",mr._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Al(e,Bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Bn(e.vectorValues);throw new ee(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bn._jsonSchemaVersion="firestore/vectorValue/1.0",Bn._jsonSchema={type:_t("string",Bn._jsonSchemaVersion),vectorValues:_t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=/^__.*__$/;class cx{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Hi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Rl(e,this.data,t,this.fieldTransforms)}}class zE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Hi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $E(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{dataSource:n})}}class Np{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Np({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.mc(e),i}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.Ac(),i}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Vc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if($E(this.dataSource)&&ux.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class hx{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||nh(e)}A(e,t,i,o=!1){return new Np({dataSource:e,methodName:t,targetDoc:i,path:Dt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lh(n){const e=n._freezeSettings(),t=nh(n._databaseId);return new hx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function qE(n,e,t,i,o,l={}){const h=n.A(l.merge||l.mergeFields?2:0,e,t,o);bp("Data must be an object, but it was:",h,i);const f=HE(i,h);let g,_;if(l.merge)g=new yn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const A of l.mergeFields){const N=Ds(e,A,t);if(!h.contains(N))throw new ee(z.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);GE(w,N)||w.push(N)}g=new yn(w),_=h.fieldTransforms.filter((A=>g.covers(A.field)))}else g=null,_=h.fieldTransforms;return new cx(new tn(f),g,_)}class uh extends ah{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uh}}class Dp extends ah{constructor(e,t){super(e),this.bc=t}_toFieldTransform(e){const t=new vl(e.serializer,tE(e.serializer,this.bc));return new X1(e.path,t)}isEqual(e){return e instanceof Dp&&this.bc===e.bc}}function dx(n,e,t,i){const o=n.A(1,e,t);bp("Data must be an object, but it was:",o,i);const l=[],h=tn.empty();qi(i,((g,_)=>{const w=KE(e,g,t);_=rt(_);const A=o.fc(w);if(_ instanceof uh)l.push(w);else{const N=xl(_,A);N!=null&&(l.push(w),h.set(w,N))}}));const f=new yn(l);return new zE(h,f,o.fieldTransforms)}function fx(n,e,t,i,o,l){const h=n.A(1,e,t),f=[Ds(e,i,t)],g=[o];if(l.length%2!=0)throw new ee(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let N=0;N<l.length;N+=2)f.push(Ds(e,l[N])),g.push(l[N+1]);const _=[],w=tn.empty();for(let N=f.length-1;N>=0;--N)if(!GE(_,f[N])){const B=f[N];let Q=g[N];Q=rt(Q);const Y=h.fc(B);if(Q instanceof uh)_.push(B);else{const q=xl(Q,Y);q!=null&&(_.push(B),w.set(B,q))}}const A=new yn(_);return new zE(w,A,h.fieldTransforms)}function px(n,e,t,i=!1){return xl(t,n.A(i?4:3,e))}function xl(n,e){if(WE(n=rt(n)))return bp("Unsupported field value:",e,n),HE(n,e);if(n instanceof ah)return(function(i,o){if(!$E(o.dataSource))throw o.yc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=xl(f,o.gc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=rt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return tE(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ze.fromDate(i);return{timestampValue:xc(o.serializer,l)}}if(i instanceof Ze){const l=new Ze(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:xc(o.serializer,l)}}if(i instanceof mr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Rn)return{bytesValue:hE(o.serializer,i._byteString)};if(i instanceof at){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:dp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Bn)return(function(h,f){const g=h instanceof Bn?h.toArray():h;return{mapValue:{fields:{[Uw]:{stringValue:jw},[Rc]:{arrayValue:{values:g.map((w=>{if(typeof w!="number")throw f.yc("VectorValues must only contain numeric values.");return lp(f.serializer,w)}))}}}}}})(i,o);if(_E(i))return i._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Wc(i)}`)})(n,e)}function HE(n,e){const t={};return bw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qi(n,((i,o)=>{const l=xl(o,e.dc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function WE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ze||n instanceof mr||n instanceof Rn||n instanceof at||n instanceof ah||n instanceof Bn||_E(n))}function bp(n,e,t){if(!WE(t)||!Nw(t)){const i=Wc(t);throw i==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+i)}}function Ds(n,e,t){if((e=rt(e))instanceof xp)return e._internalPath;if(typeof e=="string")return KE(n,e);throw Vc("Field path arguments must be of type string or ",n,!1,void 0,t)}const mx=new RegExp("[~\\*/\\[\\]]");function KE(n,e,t){if(e.search(mx)>=0)throw Vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xp(...e.split("."))._internalPath}catch{throw Vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ee(z.INVALID_ARGUMENT,f+n+g)}function GE(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{convertValue(e,t="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return qi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[Rc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>dt(h.doubleValue)));return new Bn(t)}convertGeoPoint(e){return new mr(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Qc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(fl(e));default:return null}}convertTimestamp(e){const t=Mi(e);return new Ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);qe(yE(i),9688,{name:e});const o=new pl(i.get(1),i.get(3)),l=new le(i.popFirst(5));return o.isEqual(t)||Wr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends gx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}function j_(n){return new Dp("increment",n)}const B_="@firebase/firestore",z_="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ds("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yx extends QE{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vp{}class Lp extends Vp{}function mn(n,e,...t){let i=[];e instanceof Vp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof Mp)).length,f=l.filter((g=>g instanceof ch)).length;if(h>1||h>0&&f>0)throw new ee(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class ch extends Lp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new ch(e,t,i)}_apply(e){const t=this._parse(e);return XE(e._query,t),new Qr(e.firestore,e.converter,Af(e._query,t))}_parse(e){const t=lh(e.firestore);return(function(l,h,f,g,_,w,A){let N;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){H_(A,w);const Q=[];for(const Y of A)Q.push(q_(g,l,Y));N={arrayValue:{values:Q}}}else N=q_(g,l,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||H_(A,w),N=px(f,h,A,w==="in"||w==="not-in");return yt.create(_,w,N)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fc(n,e,t){const i=e,o=Ds("where",n);return ch._create(o,i,t)}class Mp extends Vp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Mp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)XE(h,g),h=Af(h,g)})(e._query,t),new Qr(e.firestore,e.converter,Af(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fp extends Lp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Fp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gl(l,h)})(e._query,this._field,this._direction);return new Qr(e.firestore,e.converter,z1(e._query,t))}}function Di(n,e="asc"){const t=e,i=Ds("orderBy",n);return Fp._create(i,t)}class Up extends Lp{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Up(e,t,i)}_apply(e){return new Qr(e.firestore,e.converter,Cc(e._query,this._limit,this._limitType))}}function JE(n){return Up._create("limit",n,"F")}function q_(n,e,t){if(typeof(t=rt(t))=="string"){if(t==="")throw new ee(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gw(e)&&t.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!le.isDocumentKey(i))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return r_(n,new le(i))}if(t instanceof at)return r_(n,t._key);throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wc(t)}.`)}function H_(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function XE(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ZE(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class el{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ts extends QE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Ds("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ts._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ts._jsonSchema={type:_t("string",Ts._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class pc extends Ts{data(e={}){return super.data(e)}}class Is{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new el(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new pc(this._firestore,this._userDataWriter,i.key,i,new el(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new pc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new el(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new pc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new el(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:_x(f.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Is._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=np.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _x(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Is._jsonSchemaVersion="firestore/querySnapshot/1.0",Is._jsonSchema={type:_t("string",Is._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(n){n=rn(n,at);const e=rn(n.firestore,Gr),t=oh(e);return tx(t,n._key).then((i=>e0(e,n,i)))}function Co(n){n=rn(n,Qr);const e=rn(n.firestore,Gr),t=oh(e),i=new Op(e);return YE(n._query),nx(t,n._query).then((o=>new Is(e,i,n,o)))}function af(n,e,t){n=rn(n,at);const i=rn(n.firestore,Gr),o=ZE(n.converter,e,t),l=lh(i);return hh(i,[qE(l,"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,kn.none())])}function Ga(n,e,t,...i){n=rn(n,at);const o=rn(n.firestore,Gr),l=lh(o);let h;return h=typeof(e=rt(e))=="string"||e instanceof xp?fx(l,"updateDoc",n._key,e,t,i):dx(l,"updateDoc",n._key,e),hh(o,[h.toMutation(n._key,kn.exists(!0))])}function Zu(n){return hh(rn(n.firestore,Gr),[new up(n._key,kn.none())])}function ec(n,e){const t=rn(n.firestore,Gr),i=Kt(n),o=ZE(n.converter,e),l=lh(n.firestore);return hh(t,[qE(l,"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,kn.exists(!1))]).then((()=>i))}function Po(n,...e){var _,w,A;n=rt(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||$_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if($_(e[i])){const N=e[i];e[i]=(_=N.next)==null?void 0:_.bind(N),e[i+1]=(w=N.error)==null?void 0:w.bind(N),e[i+2]=(A=N.complete)==null?void 0:A.bind(N)}let l,h,f;if(n instanceof at)h=rn(n.firestore,Gr),f=Yc(n._key.path),l={next:N=>{e[i]&&e[i](e0(h,n,N))},error:e[i+1],complete:e[i+2]};else{const N=rn(n,Qr);h=rn(N.firestore,Gr),f=N._query;const B=new Op(h);l={next:Q=>{e[i]&&e[i](new Is(h,B,N,Q))},error:e[i+1],complete:e[i+2]},YE(n._query)}const g=oh(h);return ex(g,f,o,l)}function hh(n,e){const t=oh(n);return rx(t,e)}function e0(n,e,t){const i=t.docs.get(e._key),o=new Op(n);return new Ts(n,o,e._key,i,new el(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){n1(Vs),zn(new Cn("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Gr(new s1(i.getProvider("auth-internal")),new l1(h,i.getProvider("app-check-internal")),A1(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),nn(B_,z_,e),nn(B_,z_,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="firebasestorage.googleapis.com",wx="storageBucket",Ex=120*1e3,Tx=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Hn{constructor(e,t,i=0){super(lf(e),`Firebase Storage: ${t} (${lf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_r.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yr||(yr={}));function lf(n){return"storage/"+n}function Ix(){const n="An unknown error occurred, please check the error payload for server response.";return new _r(yr.UNKNOWN,n)}function Sx(){return new _r(yr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ax(){return new _r(yr.CANCELED,"User canceled the upload/download.")}function Rx(n){return new _r(yr.INVALID_URL,"Invalid URL '"+n+"'.")}function kx(n){return new _r(yr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function W_(n){return new _r(yr.INVALID_ARGUMENT,n)}function n0(){return new _r(yr.APP_DELETED,"The Firebase app was deleted.")}function Cx(n){return new _r(yr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=jn.makeFromUrl(e,t)}catch{return new jn(e,"")}if(i.path==="")return i;throw kx(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(fe){fe.path.charAt(fe.path.length-1)==="/"&&(fe.path_=fe.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function _(fe){fe.path_=decodeURIComponent(fe.path)}const w="v[A-Za-z0-9_]+",A=t.replace(/[.]/g,"\\."),N="(/([^?#]*).*)?$",B=new RegExp(`^https?://${A}/${w}/b/${o}/o${N}`,"i"),Q={bucket:1,path:3},Y=t===t0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,q="([^?#]*)",ge=new RegExp(`^https?://${Y}/${o}/${q}`,"i"),Te=[{regex:f,indices:g,postModify:l},{regex:B,indices:Q,postModify:_},{regex:ge,indices:{bucket:1,path:2},postModify:_}];for(let fe=0;fe<Te.length;fe++){const ke=Te[fe],Se=ke.regex.exec(e);if(Se){const D=Se[ke.indices.bucket];let R=Se[ke.indices.path];R||(R=""),i=new jn(D,R),ke.postModify(i);break}}if(i==null)throw Rx(e);return i}}class Px{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let _=!1;function w(...q){_||(_=!0,e.apply(null,q))}function A(q){o=setTimeout(()=>{o=null,n(B,g())},q)}function N(){l&&clearTimeout(l)}function B(q,...ge){if(_){N();return}if(q){N(),w.call(null,q,...ge);return}if(g()||h){N(),w.call(null,q,...ge);return}i<64&&(i*=2);let Te;f===1?(f=2,Te=0):Te=(i+Math.random())*1e3,A(Te)}let Q=!1;function Y(q){Q||(Q=!0,N(),!_&&(o!==null?(q||(f=2),clearTimeout(o),A(0)):q||(f=1)))}return A(0),l=setTimeout(()=>{h=!0,Y(!0)},t),Y}function Nx(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(n){return n!==void 0}function K_(n,e,t,i){if(i<e)throw W_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw W_(`Invalid value for '${n}'. Expected ${t} or less.`)}function bx(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Lc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Lc||(Lc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,t,i,o,l,h,f,g,_,w,A,N=!0,B=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=w,this.connectionFactory_=A,this.retry=N,this.isUsingEmulator=B,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((Q,Y)=>{this.resolve_=Q,this.reject_=Y,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new tc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Lc.NO_ERROR,g=l.getStatus();if(!f||Ox(g,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===Lc.ABORT;i(!1,new tc(!1,null,w));return}const _=this.successCodes_.indexOf(g)!==-1;i(!0,new tc(_,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());Dx(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=Ix();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?n0():Ax();h(g)}else{const g=Sx();h(g)}};this.canceled_?t(!1,new tc(!1,null,!0)):this.backoffId_=xx(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Nx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Lx(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Mx(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Fx(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Ux(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function jx(n,e,t,i,o,l,h=!0,f=!1){const g=bx(n.urlParams),_=n.url+g,w=Object.assign({},n.headers);return Fx(w,e),Lx(w,t),Mx(w,l),Ux(w,i),new Vx(_,n.method,w,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function zx(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this._service=e,t instanceof jn?this._location=t:this._location=jn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Mc(e,t)}get root(){const e=new jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zx(this._location.path)}get storage(){return this._service}get parent(){const e=Bx(this._location.path);if(e===null)return null;const t=new jn(this._location.bucket,e);return new Mc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Cx(e)}}function G_(n,e){const t=e==null?void 0:e[wx];return t==null?null:jn.makeFromBucketSpec(t,n)}function $x(n,e,t,i={}){n.host=`${e}:${t}`;const o=Ho(e);o&&Mf(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:cv(l,n.app.options.projectId))}class qx{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=t0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ex,this._maxUploadRetryTime=Tx,this._requests=new Set,o!=null?this._bucket=jn.makeFromBucketSpec(o,this._host):this._bucket=G_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jn.makeFromBucketSpec(this._url,e):this._bucket=G_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){K_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){K_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mc(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Px(n0());{const h=jx(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Q_="@firebase/storage",Y_="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="storage";function Hx(n=jc(),e){n=rt(n);const i=Os(n,r0).getImmediate({identifier:e}),o=av("storage");return o&&Wx(i,...o),i}function Wx(n,e,t,i={}){$x(n,e,t,i)}function Kx(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new qx(t,i,o,e,Vs)}function Gx(){zn(new Cn(r0,Kx,"PUBLIC").setMultipleInstances(!0)),nn(Q_,Y_,""),nn(Q_,Y_,"esm2020")}Gx();const Qx={apiKey:"AIzaSyDuxT03D9vxSWE5Fw29sdsnCohTtGj32fo",authDomain:"ipreu-95300.firebaseapp.com",projectId:"ipreu-95300",storageBucket:"ipreu-95300.firebasestorage.app",messagingSenderId:"921313347665",appId:"1:921313347665:web:128cdbb3e428b113a71070"},dh=mv(Qx),Fr=RR(dh),$e=ax(dh);Hx(dh);const nc=typeof window<"u"?Zk(dh):null,jp="uc_token",Bp="uc_user";function J_(n,e){try{localStorage.setItem(jp,n),localStorage.setItem(Bp,JSON.stringify(e))}catch(t){console.error("Failed to save session",t)}}function Yx(){try{const n=localStorage.getItem(jp),e=localStorage.getItem(Bp);return{token:n,user:e?JSON.parse(e):null}}catch{return{token:null,user:null}}}function X_(){try{localStorage.removeItem(jp),localStorage.removeItem(Bp),sc(Fr).catch(console.error)}catch(n){console.error("Failed to clear session",n)}}const ht={login:async(n,e)=>{if(!e)throw new Error("Password required");const t=await dA(Fr,n,e),i=await vx(Kt($e,"users",t.user.uid));if(!i.exists())throw await sc(Fr),new Error("User record not found in database.");const o={id:i.id,...i.data()};if(o.role==="PENDING")throw await sc(Fr),new Error("Your application is still pending approval. Please check back later.");return{token:await t.user.getIdToken(),user:o}},register:async n=>{if(!n.password)throw new Error("Password required");if(!n.email)throw new Error("Email required");const e=n.email.toLowerCase().trim(),t=await hA(Fr,e,n.password),{password:i,...o}=n;return o.email=e,await af(Kt($e,"users",t.user.uid),{...o,role:"PENDING",createdAt:new Date().toISOString()}),await sc(Fr),!0},getAnnouncements:async()=>{const n=mn(jt($e,"announcements"),Di("createdAt","desc"),JE(30));return(await Co(n)).docs.map(t=>({id:t.id,...t.data()}))},createAnnouncement:async n=>{const e=new Date().toISOString(),t=await ec(jt($e,"announcements"),{...n,createdAt:e});return await af(Kt($e,"stats","totals"),{announcementCount:j_(1)},{merge:!0}),{id:t.id,...n,createdAt:e}},deleteAnnouncement:async n=>(await Zu(Kt($e,"announcements",n)),!0),updateAnnouncement:async(n,e)=>(await Ga(Kt($e,"announcements",n),e),!0),getPendingUsers:async()=>{const n=mn(jt($e,"users"),fc("role","==","PENDING"));return(await Co(n)).docs.map(t=>({id:t.id,...t.data()}))},getApprovedUsers:async()=>{const n=mn(jt($e,"users"),fc("role","==","MEMBER"));return(await Co(n)).docs.map(t=>({id:t.id,...t.data()}))},rejectUser:async n=>(await Zu(Kt($e,"users",n)),!0),approveUser:async(n,e)=>{const t=Kt($e,"users",n);return await Ga(t,{role:"MEMBER",memberNo:e}),await af(Kt($e,"stats","totals"),{memberCount:j_(1)},{merge:!0}),!0},getSurveys:async()=>{const n=mn(jt($e,"surveys"));return(await Co(n)).docs.map(t=>({id:t.id,...t.data()}))},createSurvey:async n=>({id:(await ec(jt($e,"surveys"),n)).id,...n}),deleteSurvey:async n=>(await Zu(Kt($e,"surveys",n)),!0),updateSurvey:async(n,e)=>(await Ga(Kt($e,"surveys",n),e),!0),getCalendarEvents:async()=>{const n=mn(jt($e,"calendar"),Di("date","asc"));return(await Co(n)).docs.map(t=>({id:t.id,...t.data()}))},createCalendarEvent:async n=>({id:(await ec(jt($e,"calendar"),n)).id,...n}),deleteCalendarEvent:async n=>(await Zu(Kt($e,"calendar",n)),!0),getGrievances:async n=>{let e;const t=jt($e,"grievances");return n?e=mn(t,fc("userId","==",n),Di("createdAt","desc")):e=mn(t,Di("createdAt","desc")),(await Co(e)).docs.map(o=>({id:o.id,...o.data()}))},createGrievance:async n=>({id:(await ec(jt($e,"grievances"),n)).id,...n}),updateGrievance:async(n,e)=>(await Ga(Kt($e,"grievances",n),e),!0),saveFcmToken:async(n,e)=>{const t=Kt($e,"users",n);await Ga(t,{fcmToken:e})},compressImage:n=>new Promise(e=>{const t=setTimeout(()=>{console.warn("Photo optimization timed out, using original file."),e(n)},5e3),i=new Image;i.src=URL.createObjectURL(n),i.onload=()=>{const o=document.createElement("canvas"),l=400,h=l/i.width;h<1?(o.width=l,o.height=i.height*h):(o.width=i.width,o.height=i.height);const f=o.getContext("2d");f==null||f.drawImage(i,0,0,o.width,o.height),o.toBlob(g=>{clearTimeout(t),URL.revokeObjectURL(i.src),e(g||n)},"image/jpeg",.6)},i.onerror=()=>{clearTimeout(t),URL.revokeObjectURL(i.src),e(n)}}),uploadToCloudinary:async n=>{var f;let e=n;if(n.size>200*1024)try{e=await ht.compressImage(n)}catch(g){console.error("Compression failed:",g)}const t="dkisozv2k",i="ipreu_unsigned",o=new FormData;o.append("file",e),o.append("upload_preset",i),o.append("folder","ipreu_registrations");const l=new AbortController,h=setTimeout(()=>l.abort(),6e4);try{const g=await fetch(`https://api.cloudinary.com/v1_1/${t}/image/upload`,{method:"POST",body:o,signal:l.signal});if(!g.ok){let w="Failed to upload to Cloudinary";try{w=((f=(await g.json()).error)==null?void 0:f.message)||w}catch{}throw new Error(w)}return(await g.json()).secure_url}catch(g){throw g.name==="AbortError"?new Error("Connection timed out. Please try again with a better signal."):g}finally{clearTimeout(h)}}},Z_=Ge.lazy(()=>Lf(()=>import("./Auth-DMfi1u9A.js"),[])),Jx=Ge.lazy(()=>Lf(()=>import("./AdminDashboard-CY8Xeh9s.js"),__vite__mapDeps([0,1]))),Xx=Ge.lazy(()=>Lf(()=>import("./MemberDashboard-DrZMh3_R.js"),__vite__mapDeps([2,1]))),i0=Ge.createContext(null),s0=()=>{const n=Ge.useContext(i0);if(!n)throw new Error("useAppContext must be used within AppProvider");return n};function Zx(){const[n,e]=Ge.useState(!0),[t,i]=Ge.useState(!1),[o,l]=Ge.useState(()=>localStorage.getItem("theme")==="dark"),[h,f]=Ge.useState(null),[g,_]=Ge.useState([]),[w,A]=Ge.useState([]),[N,B]=Ge.useState([]),[Q,Y]=Ge.useState([]),[q,ge]=Ge.useState([]),[ve,Te]=Ge.useState({memberCount:1100,announcementCount:0}),[fe,ke]=Ge.useState(()=>new URLSearchParams(window.location.search).get("tab")||"dashboard"),[Se,D]=Ge.useState(null);Ge.useEffect(()=>{const I=new URL(window.location.href);fe&&fe!=="dashboard"?I.searchParams.set("tab",fe):I.searchParams.delete("tab"),window.history.replaceState({},"",I.toString())},[fe]),tv.useLayoutEffect(()=>{document.documentElement.classList.toggle("dark",o),localStorage.setItem("theme",o?"dark":"light")},[o]),Ge.useEffect(()=>{const I={dashboard:"My Dashboard | IPREU",calendar:"Union Calendar | IPREU",grievances:"Secure Grievances | IPREU",overview:"Admin Overview | IPREU",members:"Manage Users | IPREU",announcements:"Broadcast | IPREU"};document.title=I[fe]||"IPREU Union Connect"},[fe]),Ge.useEffect(()=>{const I=mA(Fr,async T=>{T?(!h||h.id!==T.uid)&&console.log("Syncing currentUser with Auth UID:",T.uid):h&&(console.warn("Auth lost, clearing UI session"),f(null),X_())});return(async()=>{try{const T=Yx();T&&T.user&&(f(T.user),R(T.user.id))}catch(T){console.error("Session init failed:",T)}finally{e(!1)}})(),()=>I()},[]),Ge.useEffect(()=>{const I=mn(jt($e,"announcements"),Di("createdAt","desc"),JE(30)),b=Po(I,Ae=>{A(Ae.docs.map(Re=>({id:Re.id,...Re.data()})))},Ae=>console.error("Public Announcements Sync Error:",Ae)),T=mn(jt($e,"calendar"),Di("date","asc")),ue=Po(T,Ae=>{B(Ae.docs.map(Re=>({id:Re.id,...Re.data()})))},Ae=>console.error("Public Calendar Sync Error:",Ae)),Fe=Po(Kt($e,"stats","totals"),Ae=>{Ae.exists()&&Te(Ae.data())},Ae=>console.error("Public Stats Sync Error:",Ae));return()=>{b(),ue(),Fe()}},[]),Ge.useEffect(()=>{if(!h)return;const I=mn(jt($e,"surveys")),b=Po(I,Ae=>{_(Ae.docs.map(Re=>({id:Re.id,...Re.data()})))},Ae=>console.error("Surveys Sync Error:",Ae));let T;h.role==="ADMIN"?T=mn(jt($e,"grievances"),Di("createdAt","desc")):T=mn(jt($e,"grievances"),fc("userId","==",h.id),Di("createdAt","desc"));const ue=Po(T,Ae=>{Y(Ae.docs.map(Re=>({id:Re.id,...Re.data()})))},Ae=>console.error("Grievances Sync Error:",Ae));let Fe=()=>{};if(h.role==="ADMIN"){const Ae=mn(jt($e,"users"));Fe=Po(Ae,Re=>{ge(Re.docs.map(Z=>({id:Z.id,...Z.data()})))})}return()=>{b(),ue(),Fe()}},[h==null?void 0:h.id]);const R=async I=>{if(nc)try{if(await Notification.requestPermission()==="granted"){const T=await e1(nc,{vapidKey:"BKZqsvNJwZbljTyY0T6ho_GruW2LiC8WBEre2uMqg6A-67sBHoF2RIg6VCX2BLMs0LVolggQTCap4zwDgedyKjI"});T&&await ht.saveFcmToken(I,T)}}catch(b){console.error("FCM Registration failed:",b)}};Ge.useEffect(()=>{if(!nc)return;const I=t1(nc,b=>{var T,ue;alert(`Notification: ${(T=b.notification)==null?void 0:T.title}
${(ue=b.notification)==null?void 0:ue.body}`)});return()=>I()},[]);const C=Ge.useMemo(()=>({currentUser:h,isDarkMode:o,toggleDarkMode:()=>l(I=>!I),users:q,surveys:g,announcements:w,calendarEvents:N,grievances:Q,stats:ve,fetchAnnouncements:async()=>{const I=await ht.getAnnouncements();A(I)},memberLogin:async(I,b)=>{var T;try{const ue=await ht.login(I,b);return ue.token&&ue.user&&ue.user.role==="MEMBER"?(f(ue.user),J_(ue.token,ue.user),{success:!0}):{success:!1,error:"Access denied. Only members can login here."}}catch(ue){return(T=ue.message)!=null&&T.includes("pending approval")?{success:!1,pending:!0}:{success:!1,error:ue.message||"Login failed"}}},adminLogin:async(I,b)=>{try{const T=await ht.login(I,b);if(T.token&&T.user&&T.user.role==="ADMIN"){f(T.user),J_(T.token,T.user);const[ue,Fe]=await Promise.all([ht.getPendingUsers(),ht.getApprovedUsers()]);return ge([...ue,...Fe]),{success:!0}}return{success:!1,error:"Access denied. Only admins can login here."}}catch(T){return{success:!1,error:T.message||"Admin login failed"}}},logout:()=>{f(null),X_()},register:async(I,b,T)=>{let ue="";try{T==null||T("UPLOADING"),ue=await ht.uploadToCloudinary(b)}catch(Fe){throw console.error("Photo upload failed:",Fe),new Error(Fe.message||"Failed to upload profile photo to Cloudinary. Please check your admin configuration.")}return T==null||T("REGISTERING"),await ht.register({...I,photoUrl:ue}),!0},rejectRegistration:async I=>{await ht.rejectUser(I)},approveRegistration:async I=>{const ue=`IPREU-${(q.filter(Fe=>Fe.role===tl.MEMBER).length+1).toString().padStart(4,"0")}`;await ht.approveUser(I,ue)},createSurvey:async I=>{await ht.createSurvey({...I,votes:{}})},deleteSurvey:async I=>{await ht.deleteSurvey(I)},submitVote:async(I,b)=>{if(!h)return;const T=g.find(Fe=>Fe.id===I);if(!T)return;const ue={...T.votes,[h.id]:b};await ht.updateSurvey(I,{votes:ue})},createAnnouncement:async(I,b,T)=>{await ht.createAnnouncement({title:I,content:b,attachment:T??void 0})},updateAnnouncement:async(I,b,T)=>{await ht.updateAnnouncement(I,{title:b,content:T})},deleteAnnouncement:async I=>{await ht.deleteAnnouncement(I)},createCalendarEvent:async I=>{await ht.createCalendarEvent({...I,createdAt:new Date().toISOString()})},deleteCalendarEvent:async I=>{await ht.deleteCalendarEvent(I)},submitGrievance:async(I,b,T)=>{if(!Fr.currentUser)throw new Error("Session expired. Please log in again to register a grievance.");const ue={userId:Fr.currentUser.uid,userName:(h==null?void 0:h.employeeName)||"Anonymous",employeeNumber:(h==null?void 0:h.employeeNumber)||"N/A",postingLocation:(h==null?void 0:h.postingLocation)||"N/A",pocName:(h==null?void 0:h.pocName)||"N/A",shift:(h==null?void 0:h.shift)||"N/A",subject:I,description:b,category:T,status:"NEW",createdAt:new Date().toISOString()};await ht.createGrievance(ue)},respondToGrievance:async(I,b)=>{const T={response:b,respondedAt:new Date().toISOString(),status:"RESOLVED"};await ht.updateGrievance(I,T)}}),[h,q,g,w,N,Q,o]),V=()=>{if(!h)return t?k.jsx(Z_,{onBack:()=>i(!1)}):k.jsx(OT,{onLoginClick:I=>{I&&D(I),i(!0)}});switch(Se&&(ke(Se),D(null)),h.role){case tl.ADMIN:return k.jsx(Jx,{activeTab:fe,setActiveTab:ke});case tl.MEMBER:return k.jsx(Xx,{activeTab:fe,setActiveTab:ke});default:return k.jsx(Z_,{onBack:()=>i(!1)})}};return n?k.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#fcfaf7] transition-colors duration-300",children:k.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.3)]"})}):k.jsx(i0.Provider,{value:C,children:k.jsxs("div",{className:"min-h-screen font-sans bg-[#fcfaf7] transition-colors duration-300",children:[k.jsx(kT,{onLoginClick:()=>i(!0)}),k.jsx("main",{className:"container mx-auto p-4 md:p-8 pb-32",children:k.jsx(Ge.Suspense,{fallback:k.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:k.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"})}),children:V()})}),h&&k.jsx("footer",{className:"w-full py-12 bg-white/5 border-t border-orange-100 backdrop-blur-sm mt-auto",children:k.jsx("div",{className:"container mx-auto px-4",children:k.jsx(nv,{})})})]})})}const o0=document.getElementById("root");if(!o0)throw new Error("Could not find root element to mount to");const eN=TT.createRoot(o0);eN.render(k.jsx(tv.StrictMode,{children:k.jsx(Zx,{})}));export{xT as C,tN as I,CT as M,NT as P,tv as R,tl as U,AT as a,k as j,Ge as r,s0 as u};
