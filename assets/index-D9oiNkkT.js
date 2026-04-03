const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboard-BatqYwgc.js","assets/CheckCircleIcon-Cw4VvnPj.js","assets/MemberDashboard-CMWYaDM9.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function P_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sd={exports:{}},ja={},Ad={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function UE(){if(Vg)return Ie;Vg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.iterator;function V(N){return N===null||typeof N!="object"?null:(N=R&&N[R]||N["@@iterator"],typeof N=="function"?N:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function G(N,q,ae){this.props=N,this.context=q,this.refs=J,this.updater=ae||z}G.prototype.isReactComponent={},G.prototype.setState=function(N,q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,q,"setState")},G.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function me(){}me.prototype=G.prototype;function ge(N,q,ae){this.props=N,this.context=q,this.refs=J,this.updater=ae||z}var Ee=ge.prototype=new me;Ee.constructor=ge,Y(Ee,G.prototype),Ee.isPureReactComponent=!0;var Ve=Array.isArray,Le=Object.prototype.hasOwnProperty,Pe={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function T(N,q,ae){var Te,we={},Fe=null,Re=null;if(q!=null)for(Te in q.ref!==void 0&&(Re=q.ref),q.key!==void 0&&(Fe=""+q.key),q)Le.call(q,Te)&&!A.hasOwnProperty(Te)&&(we[Te]=q[Te]);var Oe=arguments.length-2;if(Oe===1)we.children=ae;else if(1<Oe){for(var xe=Array(Oe),At=0;At<Oe;At++)xe[At]=arguments[At+2];we.children=xe}if(N&&N.defaultProps)for(Te in Oe=N.defaultProps,Oe)we[Te]===void 0&&(we[Te]=Oe[Te]);return{$$typeof:r,type:N,key:Fe,ref:Re,props:we,_owner:Pe.current}}function I(N,q){return{$$typeof:r,type:N.type,key:q,ref:N.ref,props:N.props,_owner:N._owner}}function P(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function C(N){var q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ae){return q[ae]})}var O=/\/+/g;function k(N,q){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):q.toString(36)}function ze(N,q,ae,Te,we){var Fe=typeof N;(Fe==="undefined"||Fe==="boolean")&&(N=null);var Re=!1;if(N===null)Re=!0;else switch(Fe){case"string":case"number":Re=!0;break;case"object":switch(N.$$typeof){case r:case e:Re=!0}}if(Re)return Re=N,we=we(Re),N=Te===""?"."+k(Re,0):Te,Ve(we)?(ae="",N!=null&&(ae=N.replace(O,"$&/")+"/"),ze(we,q,ae,"",function(At){return At})):we!=null&&(P(we)&&(we=I(we,ae+(!we.key||Re&&Re.key===we.key?"":(""+we.key).replace(O,"$&/")+"/")+N)),q.push(we)),1;if(Re=0,Te=Te===""?".":Te+":",Ve(N))for(var Oe=0;Oe<N.length;Oe++){Fe=N[Oe];var xe=Te+k(Fe,Oe);Re+=ze(Fe,q,ae,xe,we)}else if(xe=V(N),typeof xe=="function")for(N=xe.call(N),Oe=0;!(Fe=N.next()).done;)Fe=Fe.value,xe=Te+k(Fe,Oe++),Re+=ze(Fe,q,ae,xe,we);else if(Fe==="object")throw q=String(N),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Re}function wt(N,q,ae){if(N==null)return N;var Te=[],we=0;return ze(N,Te,"","",function(Fe){return q.call(ae,Fe,we++)}),Te}function bt(N){if(N._status===-1){var q=N._result;q=q(),q.then(function(ae){(N._status===0||N._status===-1)&&(N._status=1,N._result=ae)},function(ae){(N._status===0||N._status===-1)&&(N._status=2,N._result=ae)}),N._status===-1&&(N._status=0,N._result=q)}if(N._status===1)return N._result.default;throw N._result}var Ye={current:null},Z={transition:null},ue={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Pe};return Ie.Children={map:wt,forEach:function(N,q,ae){wt(N,function(){q.apply(this,arguments)},ae)},count:function(N){var q=0;return wt(N,function(){q++}),q},toArray:function(N){return wt(N,function(q){return q})||[]},only:function(N){if(!P(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Ie.Component=G,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=ge,Ie.StrictMode=s,Ie.Suspense=g,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ie.cloneElement=function(N,q,ae){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Te=Y({},N.props),we=N.key,Fe=N.ref,Re=N._owner;if(q!=null){if(q.ref!==void 0&&(Fe=q.ref,Re=Pe.current),q.key!==void 0&&(we=""+q.key),N.type&&N.type.defaultProps)var Oe=N.type.defaultProps;for(xe in q)Le.call(q,xe)&&!A.hasOwnProperty(xe)&&(Te[xe]=q[xe]===void 0&&Oe!==void 0?Oe[xe]:q[xe])}var xe=arguments.length-2;if(xe===1)Te.children=ae;else if(1<xe){Oe=Array(xe);for(var At=0;At<xe;At++)Oe[At]=arguments[At+2];Te.children=Oe}return{$$typeof:r,type:N.type,key:we,ref:Fe,props:Te,_owner:Re}},Ie.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Ie.createElement=T,Ie.createFactory=function(N){var q=T.bind(null,N);return q.type=N,q},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(N){return{$$typeof:m,render:N}},Ie.isValidElement=P,Ie.lazy=function(N){return{$$typeof:E,_payload:{_status:-1,_result:N},_init:bt}},Ie.memo=function(N,q){return{$$typeof:_,type:N,compare:q===void 0?null:q}},Ie.startTransition=function(N){var q=Z.transition;Z.transition={};try{N()}finally{Z.transition=q}},Ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Ie.useCallback=function(N,q){return Ye.current.useCallback(N,q)},Ie.useContext=function(N){return Ye.current.useContext(N)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(N){return Ye.current.useDeferredValue(N)},Ie.useEffect=function(N,q){return Ye.current.useEffect(N,q)},Ie.useId=function(){return Ye.current.useId()},Ie.useImperativeHandle=function(N,q,ae){return Ye.current.useImperativeHandle(N,q,ae)},Ie.useInsertionEffect=function(N,q){return Ye.current.useInsertionEffect(N,q)},Ie.useLayoutEffect=function(N,q){return Ye.current.useLayoutEffect(N,q)},Ie.useMemo=function(N,q){return Ye.current.useMemo(N,q)},Ie.useReducer=function(N,q,ae){return Ye.current.useReducer(N,q,ae)},Ie.useRef=function(N){return Ye.current.useRef(N)},Ie.useState=function(N){return Ye.current.useState(N)},Ie.useSyncExternalStore=function(N,q,ae){return Ye.current.useSyncExternalStore(N,q,ae)},Ie.useTransition=function(){return Ye.current.useTransition()},Ie.version="18.2.0",Ie}var Og;function wf(){return Og||(Og=1,Ad.exports=UE()),Ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function jE(){if(Mg)return ja;Mg=1;var r=wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var E,R={},V=null,z=null;_!==void 0&&(V=""+_),g.key!==void 0&&(V=""+g.key),g.ref!==void 0&&(z=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(R[E]=g[E]);if(m&&m.defaultProps)for(E in g=m.defaultProps,g)R[E]===void 0&&(R[E]=g[E]);return{$$typeof:e,type:m,key:V,ref:z,props:R,_owner:o.current}}return ja.Fragment=t,ja.jsx=h,ja.jsxs=h,ja}var Lg;function zE(){return Lg||(Lg=1,Sd.exports=jE()),Sd.exports}var b=zE(),at=wf();const x_=P_(at);var ju={},kd={exports:{}},Jt={},Rd={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function BE(){return Fg||(Fg=1,(function(r){function e(Z,ue){var N=Z.length;Z.push(ue);e:for(;0<N;){var q=N-1>>>1,ae=Z[q];if(0<o(ae,ue))Z[q]=ue,Z[N]=ae,N=q;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ue=Z[0],N=Z.pop();if(N!==ue){Z[0]=N;e:for(var q=0,ae=Z.length,Te=ae>>>1;q<Te;){var we=2*(q+1)-1,Fe=Z[we],Re=we+1,Oe=Z[Re];if(0>o(Fe,N))Re<ae&&0>o(Oe,Fe)?(Z[q]=Oe,Z[Re]=N,q=Re):(Z[q]=Fe,Z[we]=N,q=we);else if(Re<ae&&0>o(Oe,N))Z[q]=Oe,Z[Re]=N,q=Re;else break e}}return ue}function o(Z,ue){var N=Z.sortIndex-ue.sortIndex;return N!==0?N:Z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],E=1,R=null,V=3,z=!1,Y=!1,J=!1,G=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ee(Z){for(var ue=t(_);ue!==null;){if(ue.callback===null)s(_);else if(ue.startTime<=Z)s(_),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(_)}}function Ve(Z){if(J=!1,Ee(Z),!Y)if(t(g)!==null)Y=!0,bt(Le);else{var ue=t(_);ue!==null&&Ye(Ve,ue.startTime-Z)}}function Le(Z,ue){Y=!1,J&&(J=!1,me(T),T=-1),z=!0;var N=V;try{for(Ee(ue),R=t(g);R!==null&&(!(R.expirationTime>ue)||Z&&!C());){var q=R.callback;if(typeof q=="function"){R.callback=null,V=R.priorityLevel;var ae=q(R.expirationTime<=ue);ue=r.unstable_now(),typeof ae=="function"?R.callback=ae:R===t(g)&&s(g),Ee(ue)}else s(g);R=t(g)}if(R!==null)var Te=!0;else{var we=t(_);we!==null&&Ye(Ve,we.startTime-ue),Te=!1}return Te}finally{R=null,V=N,z=!1}}var Pe=!1,A=null,T=-1,I=5,P=-1;function C(){return!(r.unstable_now()-P<I)}function O(){if(A!==null){var Z=r.unstable_now();P=Z;var ue=!0;try{ue=A(!0,Z)}finally{ue?k():(Pe=!1,A=null)}}else Pe=!1}var k;if(typeof ge=="function")k=function(){ge(O)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,wt=ze.port2;ze.port1.onmessage=O,k=function(){wt.postMessage(null)}}else k=function(){G(O,0)};function bt(Z){A=Z,Pe||(Pe=!0,k())}function Ye(Z,ue){T=G(function(){Z(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){Y||z||(Y=!0,bt(Le))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return V},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(V){case 1:case 2:case 3:var ue=3;break;default:ue=V}var N=V;V=ue;try{return Z()}finally{V=N}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ue){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var N=V;V=Z;try{return ue()}finally{V=N}},r.unstable_scheduleCallback=function(Z,ue,N){var q=r.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?q+N:q):N=q,Z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=N+ae,Z={id:E++,callback:ue,priorityLevel:Z,startTime:N,expirationTime:ae,sortIndex:-1},N>q?(Z.sortIndex=N,e(_,Z),t(g)===null&&Z===t(_)&&(J?(me(T),T=-1):J=!0,Ye(Ve,N-q))):(Z.sortIndex=ae,e(g,Z),Y||z||(Y=!0,bt(Le))),Z},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(Z){var ue=V;return function(){var N=V;V=ue;try{return Z.apply(this,arguments)}finally{V=N}}}})(Cd)),Cd}var Ug;function $E(){return Ug||(Ug=1,Rd.exports=BE()),Rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function qE(){if(jg)return Jt;jg=1;var r=wf(),e=$E();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},R={};function V(n){return g.call(R,n)?!0:g.call(E,n)?!1:_.test(n)?R[n]=!0:(E[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function J(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){G[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];G[i]=new J(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){G[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){G[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){G[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){G[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){G[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){G[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){G[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ge(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(me,ge);G[i]=new J(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(me,ge);G[i]=new J(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(me,ge);G[i]=new J(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){G[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),G.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){G[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ee(n,i,a,c){var d=G.hasOwnProperty(i)?G[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(Y(i,a,d,c)&&(a=null),c||d===null?V(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ve=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Le=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),C=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Ye=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var N=Object.assign,q;function ae(n){if(q===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);q=i&&i[1]||""}return`
`+q+n}var Te=!1;function we(n,i){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,S=f.length-1;1<=v&&0<=S&&d[v]!==f[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==f[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==f[S]){var x=`
`+d[v].replace(" at new "," at ");return n.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",n.displayName)),x}while(1<=v&&0<=S);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ae(n):""}function Fe(n){switch(n.tag){case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case A:return"Fragment";case Pe:return"Portal";case I:return"Profiler";case T:return"StrictMode";case k:return"Suspense";case ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case C:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case wt:return i=n.displayName||null,i!==null?i:Re(n.type)||"Memo";case bt:i=n._payload,n=n._init;try{return Re(n(i))}catch{}}return null}function Oe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function At(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function eh(n){var i=At(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ds(n){n._valueTracker||(n._valueTracker=eh(n))}function Wo(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=At(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function $r(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bs(n,i){var a=i.checked;return N({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Al(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=xe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Vs(n,i){i=i.checked,i!=null&&Ee(n,"checked",i,!1)}function ji(n,i){Vs(n,i);var a=xe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ct(n,i.type,a):i.hasOwnProperty("defaultValue")&&ct(n,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ko(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ct(n,i,a){(i!=="number"||$r(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function An(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+xe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Go(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return N({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Qo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:xe(a)}}function kl(n,i){var a=xe(i.value),c=xe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function qr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Yo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Os(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Yo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Hr,Rl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Hr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function zi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cl=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(n){Cl.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Wr[i]=Wr[n]})});function Kr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Wr.hasOwnProperty(n)&&Wr[n]?(""+i).trim():i+"px"}function Ms(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Kr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Jo=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kn(n,i){if(i){if(Jo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ls(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gr=null;function Fs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var mr=null,gr=null,tt=null;function Xo(n){if(n=Aa(n)){if(typeof mr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=tu(i),mr(n.stateNode,n.type,i))}}function Qr(n){gr?tt?tt.push(n):tt=[n]:gr=n}function Yr(){if(gr){var n=gr,i=tt;if(tt=gr=null,Xo(n),i)for(n=0;n<i.length;n++)Xo(i[n])}}function Pl(n,i){return n(i)}function xl(){}var Bn=!1;function Nl(n,i,a){if(Bn)return n(i,a);Bn=!0;try{return Pl(n,i,a)}finally{Bn=!1,(gr!==null||tt!==null)&&(xl(),Yr())}}function Bi(n,i){var a=n.stateNode;if(a===null)return null;var c=tu(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Jr=!1;if(m)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Jr=!1}function Dl(n,i,a,c,d,f,v,S,x){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(W){this.onError(W)}}var yr=!1,$n=null,Us=!1,dn=null,bl={onError:function(n){yr=!0,$n=n}};function Vl(n,i,a,c,d,f,v,S,x){yr=!1,$n=null,Dl.apply(bl,arguments)}function Zo(n,i,a,c,d,f,v,S,x){if(Vl.apply(this,arguments),yr){if(yr){var U=$n;yr=!1,$n=null}else throw Error(t(198));Us||(Us=!0,dn=U)}}function Rn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ea(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ol(n){if(Rn(n)!==n)throw Error(t(188))}function Ml(n){var i=n.alternate;if(!i){if(i=Rn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return Ol(d),n;if(f===c)return Ol(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=f;break}if(S===c){v=!0,c=d,a=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===a){v=!0,a=f,c=d;break}if(S===c){v=!0,c=f,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ll(n){return n=Ml(n),n!==null?$i(n):null}function $i(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=$i(n);if(i!==null)return i;n=n.sibling}return null}var ta=e.unstable_scheduleCallback,js=e.unstable_cancelCallback,qi=e.unstable_shouldYield,_r=e.unstable_requestPaint,He=e.unstable_now,th=e.unstable_getCurrentPriorityLevel,zs=e.unstable_ImmediatePriority,na=e.unstable_UserBlockingPriority,Hi=e.unstable_NormalPriority,ra=e.unstable_LowPriority,Bs=e.unstable_IdlePriority,Wi=null,en=null;function Fl(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Wi,n,void 0,(n.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Ki,qn=Math.log,fn=Math.LN2;function Ki(n){return n>>>=0,n===0?32:31-(qn(n)/fn|0)|0}var Hn=64,Zr=4194304;function Me(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Me(S):(f&=v,f!==0&&(c=Me(f)))}else v=a&~d,v!==0?c=Me(v):f!==0&&(c=Me(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-tn(i),d=1<<a,c|=n[a],i&=~d;return c}function Gi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qi(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-tn(f),S=1<<v,x=d[v];x===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Gi(S,i)):x<=i&&(n.expiredLanes|=S),f&=~S}}function ia(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function sa(){var n=Hn;return Hn<<=1,(Hn&4194240)===0&&(Hn=64),n}function oa(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Yi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-tn(i),n[i]=a}function nh(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-tn(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function aa(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-tn(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ce=0;function Wn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var la,$s,ua,ca,ha,Kn=!1,qs=[],Gn=null,Qn=null,kt=null,Ji=new Map,wr=new Map,nn=[],Ul="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ei(n,i){switch(n){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Ji.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(i.pointerId)}}function Cn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=Aa(i),i!==null&&$s(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function jl(n,i,a,c,d){switch(i){case"focusin":return Gn=Cn(Gn,n,i,a,c,d),!0;case"dragenter":return Qn=Cn(Qn,n,i,a,c,d),!0;case"mouseover":return kt=Cn(kt,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return Ji.set(f,Cn(Ji.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,wr.set(f,Cn(wr.get(f)||null,n,i,a,c,d)),!0}return!1}function Hs(n){var i=ts(n.target);if(i!==null){var a=Rn(i);if(a!==null){if(i=a.tag,i===13){if(i=ea(a),i!==null){n.blockedOn=i,ha(n.priority,function(){ua(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Be(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ws(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Gr=c,a.target.dispatchEvent(c),Gr=null}else return i=Aa(a),i!==null&&$s(i),n.blockedOn=a,!1;i.shift()}return!0}function zl(n,i,a){Be(n)&&a.delete(i)}function rh(){Kn=!1,Gn!==null&&Be(Gn)&&(Gn=null),Qn!==null&&Be(Qn)&&(Qn=null),kt!==null&&Be(kt)&&(kt=null),Ji.forEach(zl),wr.forEach(zl)}function ti(n,i){n.blockedOn===i&&(n.blockedOn=null,Kn||(Kn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rh)))}function ni(n){function i(d){return ti(d,n)}if(0<qs.length){ti(qs[0],n);for(var a=1;a<qs.length;a++){var c=qs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Gn!==null&&ti(Gn,n),Qn!==null&&ti(Qn,n),kt!==null&&ti(kt,n),Ji.forEach(i),wr.forEach(i),a=0;a<nn.length;a++)c=nn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<nn.length&&(a=nn[0],a.blockedOn===null);)Hs(a),a.blockedOn===null&&nn.shift()}var Er=Ve.ReactCurrentBatchConfig,Tr=!0;function Yn(n,i,a,c){var d=Ce,f=Er.transition;Er.transition=null;try{Ce=1,da(n,i,a,c)}finally{Ce=d,Er.transition=f}}function Bl(n,i,a,c){var d=Ce,f=Er.transition;Er.transition=null;try{Ce=4,da(n,i,a,c)}finally{Ce=d,Er.transition=f}}function da(n,i,a,c){if(Tr){var d=Ws(n,i,a,c);if(d===null)ph(n,i,c,Jn,a),ei(n,c);else if(jl(d,n,i,a,c))c.stopPropagation();else if(ei(n,c),i&4&&-1<Ul.indexOf(n)){for(;d!==null;){var f=Aa(d);if(f!==null&&la(f),f=Ws(n,i,a,c),f===null&&ph(n,i,c,Jn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else ph(n,i,c,null,a)}}var Jn=null;function Ws(n,i,a,c){if(Jn=null,n=Fs(c),n=ts(n),n!==null)if(i=Rn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ea(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Jn=n,null}function Ks(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(th()){case zs:return 1;case na:return 4;case Hi:case ra:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var rn=null,Gs=null,Ir=null;function $l(){if(Ir)return Ir;var n,i=Gs,a=i.length,c,d="value"in rn?rn.value:rn.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return Ir=d.slice(n,1<c?1-c:void 0)}function Xi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Xn(){return!0}function fa(){return!1}function Vt(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xn:fa,this.isPropagationStopped=fa,this}return N(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),i}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Vt(Zn),ri=N({},Zn,{view:0,detail:0}),Qs=Vt(ri),Ys,Js,sn,es=N({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_e,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==sn&&(sn&&n.type==="mousemove"?(Ys=n.screenX-sn.screenX,Js=n.screenY-sn.screenY):Js=Ys=0,sn=n),Ys)},movementY:function(n){return"movementY"in n?n.movementY:Js}}),pa=Vt(es),ql=N({},es,{dataTransfer:0}),Hl=Vt(ql),Xs=N({},ri,{relatedTarget:0}),Rt=Vt(Xs),Wl=N({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Kl=Vt(Wl),ii=N({},Zn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Vt(ii),p=N({},Zn,{data:0}),y=Vt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j[n])?!!i[n]:!1}function _e(){return X}var st=N({},ri,{key:function(n){if(n.key){var i=w[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Xi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_e,charCode:function(n){return n.type==="keypress"?Xi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),je=Vt(st),ht=N({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),on=Vt(ht),Sr=N({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_e}),er=Vt(Sr),tr=N({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zs=Vt(tr),ma=N({},es,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=Vt(ma),V0=[9,13,27,32],ih=m&&"CompositionEvent"in window,ga=null;m&&"documentMode"in document&&(ga=document.documentMode);var O0=m&&"TextEvent"in window&&!ga,Ap=m&&(!ih||ga&&8<ga&&11>=ga),kp=" ",Rp=!1;function Cp(n,i){switch(n){case"keyup":return V0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var eo=!1;function M0(n,i){switch(n){case"compositionend":return Pp(i);case"keypress":return i.which!==32?null:(Rp=!0,kp);case"textInput":return n=i.data,n===kp&&Rp?null:n;default:return null}}function L0(n,i){if(eo)return n==="compositionend"||!ih&&Cp(n,i)?(n=$l(),Ir=Gs=rn=null,eo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ap&&i.locale!=="ko"?null:i.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!F0[n.type]:i==="textarea"}function Np(n,i,a,c){Qr(c),i=Xl(i,"onChange"),0<i.length&&(a=new Zi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ya=null,_a=null;function U0(n){Qp(n,0)}function Gl(n){var i=so(n);if(Wo(i))return n}function j0(n,i){if(n==="change")return i}var Dp=!1;if(m){var sh;if(m){var oh="oninput"in document;if(!oh){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),oh=typeof bp.oninput=="function"}sh=oh}else sh=!1;Dp=sh&&(!document.documentMode||9<document.documentMode)}function Vp(){ya&&(ya.detachEvent("onpropertychange",Op),_a=ya=null)}function Op(n){if(n.propertyName==="value"&&Gl(_a)){var i=[];Np(i,_a,n,Fs(n)),Nl(U0,i)}}function z0(n,i,a){n==="focusin"?(Vp(),ya=i,_a=a,ya.attachEvent("onpropertychange",Op)):n==="focusout"&&Vp()}function B0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gl(_a)}function $0(n,i){if(n==="click")return Gl(i)}function q0(n,i){if(n==="input"||n==="change")return Gl(i)}function H0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Pn=typeof Object.is=="function"?Object.is:H0;function va(n,i){if(Pn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Pn(n[d],i[d]))return!1}return!0}function Mp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lp(n,i){var a=Mp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mp(a)}}function Fp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Fp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Up(){for(var n=window,i=$r();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=$r(n.document)}return i}function ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function W0(n){var i=Up(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Fp(a.ownerDocument.documentElement,a)){if(c!==null&&ah(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=Lp(a,f);var v=Lp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var K0=m&&"documentMode"in document&&11>=document.documentMode,to=null,lh=null,wa=null,uh=!1;function jp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uh||to==null||to!==$r(c)||(c=to,"selectionStart"in c&&ah(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wa&&va(wa,c)||(wa=c,c=Xl(lh,"onSelect"),0<c.length&&(i=new Zi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=to)))}function Ql(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var no={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},ch={},zp={};m&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function Yl(n){if(ch[n])return ch[n];if(!no[n])return n;var i=no[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in zp)return ch[n]=i[a];return n}var Bp=Yl("animationend"),$p=Yl("animationiteration"),qp=Yl("animationstart"),Hp=Yl("transitionend"),Wp=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function si(n,i){Wp.set(n,i),l(i,[n])}for(var hh=0;hh<Kp.length;hh++){var dh=Kp[hh],G0=dh.toLowerCase(),Q0=dh[0].toUpperCase()+dh.slice(1);si(G0,"on"+Q0)}si(Bp,"onAnimationEnd"),si($p,"onAnimationIteration"),si(qp,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(Hp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function Gp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Zo(c,i,void 0,n),n.currentTarget=null}function Qp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],x=S.instance,U=S.currentTarget;if(S=S.listener,x!==f&&d.isPropagationStopped())break e;Gp(d,S,U),f=x}else for(v=0;v<c.length;v++){if(S=c[v],x=S.instance,U=S.currentTarget,S=S.listener,x!==f&&d.isPropagationStopped())break e;Gp(d,S,U),f=x}}}if(Us)throw n=dn,Us=!1,dn=null,n}function We(n,i){var a=i[wh];a===void 0&&(a=i[wh]=new Set);var c=n+"__bubble";a.has(c)||(Yp(i,n,2,!1),a.add(c))}function fh(n,i,a){var c=0;i&&(c|=4),Yp(a,n,c,i)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Ta(n){if(!n[Jl]){n[Jl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Y0.has(a)||fh(a,!1,n),fh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Jl]||(i[Jl]=!0,fh("selectionchange",!1,i))}}function Yp(n,i,a,c){switch(Ks(i)){case 1:var d=Yn;break;case 4:d=Bl;break;default:d=da}a=d.bind(null,i,a,n),d=void 0,!Jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function ph(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var x=v.tag;if((x===3||x===4)&&(x=v.stateNode.containerInfo,x===d||x.nodeType===8&&x.parentNode===d))return;v=v.return}for(;S!==null;){if(v=ts(S),v===null)return;if(x=v.tag,x===5||x===6){c=f=v;continue e}S=S.parentNode}}c=c.return}Nl(function(){var U=f,W=Fs(a),K=[];e:{var H=Wp.get(n);if(H!==void 0){var te=Zi,ie=n;switch(n){case"keypress":if(Xi(a)===0)break e;case"keydown":case"keyup":te=je;break;case"focusin":ie="focus",te=Rt;break;case"focusout":ie="blur",te=Rt;break;case"beforeblur":case"afterblur":te=Rt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Hl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=er;break;case Bp:case $p:case qp:te=Kl;break;case Hp:te=Zs;break;case"scroll":te=Qs;break;case"wheel":te=b0;break;case"copy":case"cut":case"paste":te=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=on}var se=(i&4)!==0,ot=!se&&n==="scroll",M=se?H!==null?H+"Capture":null:H;se=[];for(var D=U,F;D!==null;){F=D;var Q=F.stateNode;if(F.tag===5&&Q!==null&&(F=Q,M!==null&&(Q=Bi(D,M),Q!=null&&se.push(Ia(D,Q,F)))),ot)break;D=D.return}0<se.length&&(H=new te(H,ie,null,a,W),K.push({event:H,listeners:se}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",H&&a!==Gr&&(ie=a.relatedTarget||a.fromElement)&&(ts(ie)||ie[Ar]))break e;if((te||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,te?(ie=a.relatedTarget||a.toElement,te=U,ie=ie?ts(ie):null,ie!==null&&(ot=Rn(ie),ie!==ot||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=U),te!==ie)){if(se=pa,Q="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(se=on,Q="onPointerLeave",M="onPointerEnter",D="pointer"),ot=te==null?H:so(te),F=ie==null?H:so(ie),H=new se(Q,D+"leave",te,a,W),H.target=ot,H.relatedTarget=F,Q=null,ts(W)===U&&(se=new se(M,D+"enter",ie,a,W),se.target=F,se.relatedTarget=ot,Q=se),ot=Q,te&&ie)t:{for(se=te,M=ie,D=0,F=se;F;F=ro(F))D++;for(F=0,Q=M;Q;Q=ro(Q))F++;for(;0<D-F;)se=ro(se),D--;for(;0<F-D;)M=ro(M),F--;for(;D--;){if(se===M||M!==null&&se===M.alternate)break t;se=ro(se),M=ro(M)}se=null}else se=null;te!==null&&Jp(K,H,te,se,!1),ie!==null&&ot!==null&&Jp(K,ot,ie,se,!0)}}e:{if(H=U?so(U):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var oe=j0;else if(xp(H))if(Dp)oe=q0;else{oe=B0;var ce=z0}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(oe=$0);if(oe&&(oe=oe(n,U))){Np(K,oe,a,W);break e}ce&&ce(n,H,U),n==="focusout"&&(ce=H._wrapperState)&&ce.controlled&&H.type==="number"&&ct(H,"number",H.value)}switch(ce=U?so(U):window,n){case"focusin":(xp(ce)||ce.contentEditable==="true")&&(to=ce,lh=U,wa=null);break;case"focusout":wa=lh=to=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,jp(K,a,W);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":jp(K,a,W)}var he;if(ih)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else eo?Cp(n,a)&&(pe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Ap&&a.locale!=="ko"&&(eo||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&eo&&(he=$l()):(rn=W,Gs="value"in rn?rn.value:rn.textContent,eo=!0)),ce=Xl(U,pe),0<ce.length&&(pe=new y(pe,n,null,a,W),K.push({event:pe,listeners:ce}),he?pe.data=he:(he=Pp(a),he!==null&&(pe.data=he)))),(he=O0?M0(n,a):L0(n,a))&&(U=Xl(U,"onBeforeInput"),0<U.length&&(W=new y("onBeforeInput","beforeinput",null,a,W),K.push({event:W,listeners:U}),W.data=he))}Qp(K,i)})}function Ia(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Xl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Bi(n,a),f!=null&&c.unshift(Ia(n,f,d)),f=Bi(n,i),f!=null&&c.push(Ia(n,f,d))),n=n.return}return c}function ro(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jp(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var S=a,x=S.alternate,U=S.stateNode;if(x!==null&&x===c)break;S.tag===5&&U!==null&&(S=U,d?(x=Bi(a,f),x!=null&&v.unshift(Ia(a,x,S))):d||(x=Bi(a,f),x!=null&&v.push(Ia(a,x,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var J0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function Xp(n){return(typeof n=="string"?n:""+n).replace(J0,`
`).replace(X0,"")}function Zl(n,i,a){if(i=Xp(i),Xp(n)!==i&&a)throw Error(t(425))}function eu(){}var mh=null,gh=null;function yh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _h=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,eE=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(n){return Zp.resolve(null).then(n).catch(tE)}:_h;function tE(n){setTimeout(function(){throw n})}function vh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ni(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ni(i)}function oi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function em(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var io=Math.random().toString(36).slice(2),nr="__reactFiber$"+io,Sa="__reactProps$"+io,Ar="__reactContainer$"+io,wh="__reactEvents$"+io,nE="__reactListeners$"+io,rE="__reactHandles$"+io;function ts(n){var i=n[nr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ar]||a[nr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=em(n);n!==null;){if(a=n[nr])return a;n=em(n)}return i}n=a,a=n.parentNode}return null}function Aa(n){return n=n[nr]||n[Ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function so(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function tu(n){return n[Sa]||null}var Eh=[],oo=-1;function ai(n){return{current:n}}function Ke(n){0>oo||(n.current=Eh[oo],Eh[oo]=null,oo--)}function $e(n,i){oo++,Eh[oo]=n.current,n.current=i}var li={},Ot=ai(li),Wt=ai(!1),ns=li;function ao(n,i){var a=n.type.contextTypes;if(!a)return li;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function nu(){Ke(Wt),Ke(Ot)}function tm(n,i,a){if(Ot.current!==li)throw Error(t(168));$e(Ot,i),$e(Wt,a)}function nm(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Oe(n)||"Unknown",d));return N({},a,c)}function ru(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||li,ns=Ot.current,$e(Ot,n),$e(Wt,Wt.current),!0}function rm(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=nm(n,i,ns),c.__reactInternalMemoizedMergedChildContext=n,Ke(Wt),Ke(Ot),$e(Ot,n)):Ke(Wt),$e(Wt,a)}var kr=null,iu=!1,Th=!1;function im(n){kr===null?kr=[n]:kr.push(n)}function iE(n){iu=!0,im(n)}function ui(){if(!Th&&kr!==null){Th=!0;var n=0,i=Ce;try{var a=kr;for(Ce=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}kr=null,iu=!1}catch(d){throw kr!==null&&(kr=kr.slice(n+1)),ta(zs,ui),d}finally{Ce=i,Th=!1}}return null}var lo=[],uo=0,su=null,ou=0,pn=[],mn=0,rs=null,Rr=1,Cr="";function is(n,i){lo[uo++]=ou,lo[uo++]=su,su=n,ou=i}function sm(n,i,a){pn[mn++]=Rr,pn[mn++]=Cr,pn[mn++]=rs,rs=n;var c=Rr;n=Cr;var d=32-tn(c)-1;c&=~(1<<d),a+=1;var f=32-tn(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Rr=1<<32-tn(i)+d|a<<d|c,Cr=f+n}else Rr=1<<f|a<<d|c,Cr=n}function Ih(n){n.return!==null&&(is(n,1),sm(n,1,0))}function Sh(n){for(;n===su;)su=lo[--uo],lo[uo]=null,ou=lo[--uo],lo[uo]=null;for(;n===rs;)rs=pn[--mn],pn[mn]=null,Cr=pn[--mn],pn[mn]=null,Rr=pn[--mn],pn[mn]=null}var an=null,ln=null,Je=!1,xn=null;function om(n,i){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function am(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,an=n,ln=oi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,an=n,ln=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=rs!==null?{id:Rr,overflow:Cr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function Ah(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kh(n){if(Je){var i=ln;if(i){var a=i;if(!am(n,i)){if(Ah(n))throw Error(t(418));i=oi(a.nextSibling);var c=an;i&&am(n,i)?om(c,a):(n.flags=n.flags&-4097|2,Je=!1,an=n)}}else{if(Ah(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,an=n}}}function lm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function au(n){if(n!==an)return!1;if(!Je)return lm(n),Je=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!yh(n.type,n.memoizedProps)),i&&(i=ln)){if(Ah(n))throw um(),Error(t(418));for(;i;)om(n,i),i=oi(i.nextSibling)}if(lm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ln=oi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ln=null}}else ln=an?oi(n.stateNode.nextSibling):null;return!0}function um(){for(var n=ln;n;)n=oi(n.nextSibling)}function co(){ln=an=null,Je=!1}function Rh(n){xn===null?xn=[n]:xn.push(n)}var sE=Ve.ReactCurrentBatchConfig;function Nn(n,i){if(n&&n.defaultProps){i=N({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}var lu=ai(null),uu=null,ho=null,Ch=null;function Ph(){Ch=ho=uu=null}function xh(n){var i=lu.current;Ke(lu),n._currentValue=i}function Nh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function fo(n,i){uu=n,Ch=ho=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gt=!0),n.firstContext=null)}function gn(n){var i=n._currentValue;if(Ch!==n)if(n={context:n,memoizedValue:i,next:null},ho===null){if(uu===null)throw Error(t(308));ho=n,uu.dependencies={lanes:0,firstContext:n}}else ho=ho.next=n;return i}var ss=null;function Dh(n){ss===null?ss=[n]:ss.push(n)}function cm(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Dh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Pr(n,c)}function Pr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ci=!1;function bh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hm(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function hi(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Pr(n,a)}return d=c.interleaved,d===null?(i.next=i,Dh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Pr(n,a)}function cu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,aa(n,a)}}function dm(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function hu(n,i,a,c){var d=n.updateQueue;ci=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var x=S,U=x.next;x.next=null,v===null?f=U:v.next=U,v=x;var W=n.alternate;W!==null&&(W=W.updateQueue,S=W.lastBaseUpdate,S!==v&&(S===null?W.firstBaseUpdate=U:S.next=U,W.lastBaseUpdate=x))}if(f!==null){var K=d.baseState;v=0,W=U=x=null,S=f;do{var H=S.lane,te=S.eventTime;if((c&H)===H){W!==null&&(W=W.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ie=n,se=S;switch(H=i,te=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){K=ie.call(te,K,H);break e}K=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,H=typeof ie=="function"?ie.call(te,K,H):ie,H==null)break e;K=N({},K,H);break e;case 2:ci=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[S]:H.push(S))}else te={eventTime:te,lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},W===null?(U=W=te,x=K):W=W.next=te,v|=H;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;H=S,S=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(W===null&&(x=K),d.baseState=x,d.firstBaseUpdate=U,d.lastBaseUpdate=W,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);ls|=v,n.lanes=v,n.memoizedState=K}}function fm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var pm=new r.Component().refs;function Vh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:N({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var du={isMounted:function(n){return(n=n._reactInternals)?Rn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=mi(n),f=xr(c,d);f.payload=i,a!=null&&(f.callback=a),i=hi(n,f,d),i!==null&&(Vn(i,n,d,c),cu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=mi(n),f=xr(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=hi(n,f,d),i!==null&&(Vn(i,n,d,c),cu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=mi(n),d=xr(a,c);d.tag=2,i!=null&&(d.callback=i),i=hi(n,d,c),i!==null&&(Vn(i,n,c,a),cu(i,n,c))}};function mm(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!va(a,c)||!va(d,f):!0}function gm(n,i,a){var c=!1,d=li,f=i.contextType;return typeof f=="object"&&f!==null?f=gn(f):(d=Kt(i)?ns:Ot.current,c=i.contextTypes,f=(c=c!=null)?ao(n,d):li),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=du,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function ym(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&du.enqueueReplaceState(i,i.state,null)}function Oh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs=pm,bh(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=gn(f):(f=Kt(i)?ns:Ot.current,d.context=ao(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Vh(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&du.enqueueReplaceState(d,d.state,null),hu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ka(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var S=d.refs;S===pm&&(S=d.refs={}),v===null?delete S[f]:S[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function fu(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function _m(n){var i=n._init;return i(n._payload)}function vm(n){function i(M,D){if(n){var F=M.deletions;F===null?(M.deletions=[D],M.flags|=16):F.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)i(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function d(M,D){return M=yi(M,D),M.index=0,M.sibling=null,M}function f(M,D,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<D?(M.flags|=2,D):F):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function S(M,D,F,Q){return D===null||D.tag!==6?(D=_d(F,M.mode,Q),D.return=M,D):(D=d(D,F),D.return=M,D)}function x(M,D,F,Q){var oe=F.type;return oe===A?W(M,D,F.props.children,Q,F.key):D!==null&&(D.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===bt&&_m(oe)===D.type)?(Q=d(D,F.props),Q.ref=ka(M,D,F),Q.return=M,Q):(Q=Du(F.type,F.key,F.props,null,M.mode,Q),Q.ref=ka(M,D,F),Q.return=M,Q)}function U(M,D,F,Q){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=vd(F,M.mode,Q),D.return=M,D):(D=d(D,F.children||[]),D.return=M,D)}function W(M,D,F,Q,oe){return D===null||D.tag!==7?(D=ds(F,M.mode,Q,oe),D.return=M,D):(D=d(D,F),D.return=M,D)}function K(M,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=_d(""+D,M.mode,F),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Le:return F=Du(D.type,D.key,D.props,null,M.mode,F),F.ref=ka(M,null,D),F.return=M,F;case Pe:return D=vd(D,M.mode,F),D.return=M,D;case bt:var Q=D._init;return K(M,Q(D._payload),F)}if(it(D)||ue(D))return D=ds(D,M.mode,F,null),D.return=M,D;fu(M,D)}return null}function H(M,D,F,Q){var oe=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return oe!==null?null:S(M,D,""+F,Q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Le:return F.key===oe?x(M,D,F,Q):null;case Pe:return F.key===oe?U(M,D,F,Q):null;case bt:return oe=F._init,H(M,D,oe(F._payload),Q)}if(it(F)||ue(F))return oe!==null?null:W(M,D,F,Q,null);fu(M,F)}return null}function te(M,D,F,Q,oe){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return M=M.get(F)||null,S(D,M,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Le:return M=M.get(Q.key===null?F:Q.key)||null,x(D,M,Q,oe);case Pe:return M=M.get(Q.key===null?F:Q.key)||null,U(D,M,Q,oe);case bt:var ce=Q._init;return te(M,D,F,ce(Q._payload),oe)}if(it(Q)||ue(Q))return M=M.get(F)||null,W(D,M,Q,oe,null);fu(D,Q)}return null}function ie(M,D,F,Q){for(var oe=null,ce=null,he=D,pe=D=0,It=null;he!==null&&pe<F.length;pe++){he.index>pe?(It=he,he=null):It=he.sibling;var be=H(M,he,F[pe],Q);if(be===null){he===null&&(he=It);break}n&&he&&be.alternate===null&&i(M,he),D=f(be,D,pe),ce===null?oe=be:ce.sibling=be,ce=be,he=It}if(pe===F.length)return a(M,he),Je&&is(M,pe),oe;if(he===null){for(;pe<F.length;pe++)he=K(M,F[pe],Q),he!==null&&(D=f(he,D,pe),ce===null?oe=he:ce.sibling=he,ce=he);return Je&&is(M,pe),oe}for(he=c(M,he);pe<F.length;pe++)It=te(he,M,pe,F[pe],Q),It!==null&&(n&&It.alternate!==null&&he.delete(It.key===null?pe:It.key),D=f(It,D,pe),ce===null?oe=It:ce.sibling=It,ce=It);return n&&he.forEach(function(_i){return i(M,_i)}),Je&&is(M,pe),oe}function se(M,D,F,Q){var oe=ue(F);if(typeof oe!="function")throw Error(t(150));if(F=oe.call(F),F==null)throw Error(t(151));for(var ce=oe=null,he=D,pe=D=0,It=null,be=F.next();he!==null&&!be.done;pe++,be=F.next()){he.index>pe?(It=he,he=null):It=he.sibling;var _i=H(M,he,be.value,Q);if(_i===null){he===null&&(he=It);break}n&&he&&_i.alternate===null&&i(M,he),D=f(_i,D,pe),ce===null?oe=_i:ce.sibling=_i,ce=_i,he=It}if(be.done)return a(M,he),Je&&is(M,pe),oe;if(he===null){for(;!be.done;pe++,be=F.next())be=K(M,be.value,Q),be!==null&&(D=f(be,D,pe),ce===null?oe=be:ce.sibling=be,ce=be);return Je&&is(M,pe),oe}for(he=c(M,he);!be.done;pe++,be=F.next())be=te(he,M,pe,be.value,Q),be!==null&&(n&&be.alternate!==null&&he.delete(be.key===null?pe:be.key),D=f(be,D,pe),ce===null?oe=be:ce.sibling=be,ce=be);return n&&he.forEach(function(FE){return i(M,FE)}),Je&&is(M,pe),oe}function ot(M,D,F,Q){if(typeof F=="object"&&F!==null&&F.type===A&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Le:e:{for(var oe=F.key,ce=D;ce!==null;){if(ce.key===oe){if(oe=F.type,oe===A){if(ce.tag===7){a(M,ce.sibling),D=d(ce,F.props.children),D.return=M,M=D;break e}}else if(ce.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===bt&&_m(oe)===ce.type){a(M,ce.sibling),D=d(ce,F.props),D.ref=ka(M,ce,F),D.return=M,M=D;break e}a(M,ce);break}else i(M,ce);ce=ce.sibling}F.type===A?(D=ds(F.props.children,M.mode,Q,F.key),D.return=M,M=D):(Q=Du(F.type,F.key,F.props,null,M.mode,Q),Q.ref=ka(M,D,F),Q.return=M,M=Q)}return v(M);case Pe:e:{for(ce=F.key;D!==null;){if(D.key===ce)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){a(M,D.sibling),D=d(D,F.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else i(M,D);D=D.sibling}D=vd(F,M.mode,Q),D.return=M,M=D}return v(M);case bt:return ce=F._init,ot(M,D,ce(F._payload),Q)}if(it(F))return ie(M,D,F,Q);if(ue(F))return se(M,D,F,Q);fu(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(a(M,D.sibling),D=d(D,F),D.return=M,M=D):(a(M,D),D=_d(F,M.mode,Q),D.return=M,M=D),v(M)):a(M,D)}return ot}var po=vm(!0),wm=vm(!1),Ra={},rr=ai(Ra),Ca=ai(Ra),Pa=ai(Ra);function os(n){if(n===Ra)throw Error(t(174));return n}function Mh(n,i){switch($e(Pa,i),$e(Ca,n),$e(rr,Ra),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Os(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Os(i,n)}Ke(rr),$e(rr,i)}function mo(){Ke(rr),Ke(Ca),Ke(Pa)}function Em(n){os(Pa.current);var i=os(rr.current),a=Os(i,n.type);i!==a&&($e(Ca,n),$e(rr,a))}function Lh(n){Ca.current===n&&(Ke(rr),Ke(Ca))}var Xe=ai(0);function pu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Fh=[];function Uh(){for(var n=0;n<Fh.length;n++)Fh[n]._workInProgressVersionPrimary=null;Fh.length=0}var mu=Ve.ReactCurrentDispatcher,jh=Ve.ReactCurrentBatchConfig,as=0,Ze=null,yt=null,Et=null,gu=!1,xa=!1,Na=0,oE=0;function Mt(){throw Error(t(321))}function zh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Pn(n[a],i[a]))return!1;return!0}function Bh(n,i,a,c,d,f){if(as=f,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,mu.current=n===null||n.memoizedState===null?cE:hE,n=a(c,d),xa){f=0;do{if(xa=!1,Na=0,25<=f)throw Error(t(301));f+=1,Et=yt=null,i.updateQueue=null,mu.current=dE,n=a(c,d)}while(xa)}if(mu.current=vu,i=yt!==null&&yt.next!==null,as=0,Et=yt=Ze=null,gu=!1,i)throw Error(t(300));return n}function $h(){var n=Na!==0;return Na=0,n}function ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=n:Et=Et.next=n,Et}function yn(){if(yt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var i=Et===null?Ze.memoizedState:Et.next;if(i!==null)Et=i,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Et===null?Ze.memoizedState=Et=n:Et=Et.next=n}return Et}function Da(n,i){return typeof i=="function"?i(n):i}function qh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=v=null,x=null,U=f;do{var W=U.lane;if((as&W)===W)x!==null&&(x=x.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:W,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};x===null?(S=x=K,v=c):x=x.next=K,Ze.lanes|=W,ls|=W}U=U.next}while(U!==null&&U!==f);x===null?v=c:x.next=S,Pn(c,i.memoizedState)||(Gt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=x,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,Ze.lanes|=f,ls|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Hh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Pn(f,i.memoizedState)||(Gt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function Tm(){}function Im(n,i){var a=Ze,c=yn(),d=i(),f=!Pn(c.memoizedState,d);if(f&&(c.memoizedState=d,Gt=!0),c=c.queue,Wh(km.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ba(9,Am.bind(null,a,c,d,i),void 0,null),Tt===null)throw Error(t(349));(as&30)!==0||Sm(a,i,d)}return d}function Sm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Am(n,i,a,c){i.value=a,i.getSnapshot=c,Rm(i)&&Cm(n)}function km(n,i,a){return a(function(){Rm(i)&&Cm(n)})}function Rm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Pn(n,a)}catch{return!0}}function Cm(n){var i=Pr(n,1);i!==null&&Vn(i,n,1,-1)}function Pm(n){var i=ir();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},i.queue=n,n=n.dispatch=uE.bind(null,Ze,n),[i.memoizedState,n]}function ba(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function xm(){return yn().memoizedState}function yu(n,i,a,c){var d=ir();Ze.flags|=n,d.memoizedState=ba(1|i,a,void 0,c===void 0?null:c)}function _u(n,i,a,c){var d=yn();c=c===void 0?null:c;var f=void 0;if(yt!==null){var v=yt.memoizedState;if(f=v.destroy,c!==null&&zh(c,v.deps)){d.memoizedState=ba(i,a,f,c);return}}Ze.flags|=n,d.memoizedState=ba(1|i,a,f,c)}function Nm(n,i){return yu(8390656,8,n,i)}function Wh(n,i){return _u(2048,8,n,i)}function Dm(n,i){return _u(4,2,n,i)}function bm(n,i){return _u(4,4,n,i)}function Vm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Om(n,i,a){return a=a!=null?a.concat([n]):null,_u(4,4,Vm.bind(null,i,n),a)}function Kh(){}function Mm(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&zh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Lm(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&zh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Fm(n,i,a){return(as&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(Pn(a,i)||(a=sa(),Ze.lanes|=a,ls|=a,n.baseState=!0),i)}function aE(n,i){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var c=jh.transition;jh.transition={};try{n(!1),i()}finally{Ce=a,jh.transition=c}}function Um(){return yn().memoizedState}function lE(n,i,a){var c=mi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},jm(n))zm(i,a);else if(a=cm(n,i,a,c),a!==null){var d=Ht();Vn(a,n,c,d),Bm(a,i,c)}}function uE(n,i,a){var c=mi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(jm(n))zm(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,S=f(v,a);if(d.hasEagerState=!0,d.eagerState=S,Pn(S,v)){var x=i.interleaved;x===null?(d.next=d,Dh(i)):(d.next=x.next,x.next=d),i.interleaved=d;return}}catch{}finally{}a=cm(n,i,d,c),a!==null&&(d=Ht(),Vn(a,n,c,d),Bm(a,i,c))}}function jm(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function zm(n,i){xa=gu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Bm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,aa(n,a)}}var vu={readContext:gn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},cE={readContext:gn,useCallback:function(n,i){return ir().memoizedState=[n,i===void 0?null:i],n},useContext:gn,useEffect:Nm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,yu(4194308,4,Vm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return yu(4194308,4,n,i)},useInsertionEffect:function(n,i){return yu(4,2,n,i)},useMemo:function(n,i){var a=ir();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ir();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=lE.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=ir();return n={current:n},i.memoizedState=n},useState:Pm,useDebugValue:Kh,useDeferredValue:function(n){return ir().memoizedState=n},useTransition:function(){var n=Pm(!1),i=n[0];return n=aE.bind(null,n[1]),ir().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,d=ir();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tt===null)throw Error(t(349));(as&30)!==0||Sm(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,Nm(km.bind(null,c,f,n),[n]),c.flags|=2048,ba(9,Am.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=ir(),i=Tt.identifierPrefix;if(Je){var a=Cr,c=Rr;a=(c&~(1<<32-tn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Na++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=oE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},hE={readContext:gn,useCallback:Mm,useContext:gn,useEffect:Wh,useImperativeHandle:Om,useInsertionEffect:Dm,useLayoutEffect:bm,useMemo:Lm,useReducer:qh,useRef:xm,useState:function(){return qh(Da)},useDebugValue:Kh,useDeferredValue:function(n){var i=yn();return Fm(i,yt.memoizedState,n)},useTransition:function(){var n=qh(Da)[0],i=yn().memoizedState;return[n,i]},useMutableSource:Tm,useSyncExternalStore:Im,useId:Um,unstable_isNewReconciler:!1},dE={readContext:gn,useCallback:Mm,useContext:gn,useEffect:Wh,useImperativeHandle:Om,useInsertionEffect:Dm,useLayoutEffect:bm,useMemo:Lm,useReducer:Hh,useRef:xm,useState:function(){return Hh(Da)},useDebugValue:Kh,useDeferredValue:function(n){var i=yn();return yt===null?i.memoizedState=n:Fm(i,yt.memoizedState,n)},useTransition:function(){var n=Hh(Da)[0],i=yn().memoizedState;return[n,i]},useMutableSource:Tm,useSyncExternalStore:Im,useId:Um,unstable_isNewReconciler:!1};function go(n,i){try{var a="",c=i;do a+=Fe(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function Gh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Qh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var fE=typeof WeakMap=="function"?WeakMap:Map;function $m(n,i,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ku||(ku=!0,cd=c),Qh(n,i)},a}function qm(n,i,a){a=xr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Qh(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Qh(n,i),typeof c!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Hm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new fE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=RE.bind(null,n,i,a),i.then(n,n))}function Wm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Km(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=xr(-1,1),i.tag=2,hi(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var pE=Ve.ReactCurrentOwner,Gt=!1;function qt(n,i,a,c){i.child=n===null?wm(i,null,a,c):po(i,n.child,a,c)}function Gm(n,i,a,c,d){a=a.render;var f=i.ref;return fo(i,d),c=Bh(n,i,a,c,f,d),a=$h(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Nr(n,i,d)):(Je&&a&&Ih(i),i.flags|=1,qt(n,i,c,d),i.child)}function Qm(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!yd(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,Ym(n,i,f,c,d)):(n=Du(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:va,a(v,c)&&n.ref===i.ref)return Nr(n,i,d)}return i.flags|=1,n=yi(f,c),n.ref=i.ref,n.return=i,i.child=n}function Ym(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(va(f,c)&&n.ref===i.ref)if(Gt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return i.lanes=n.lanes,Nr(n,i,d)}return Yh(n,i,a,c,d)}function Jm(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(_o,un),un|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,$e(_o,un),un|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,$e(_o,un),un|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,$e(_o,un),un|=c;return qt(n,i,d,a),i.child}function Xm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Yh(n,i,a,c,d){var f=Kt(a)?ns:Ot.current;return f=ao(i,f),fo(i,d),a=Bh(n,i,a,c,f,d),c=$h(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Nr(n,i,d)):(Je&&c&&Ih(i),i.flags|=1,qt(n,i,a,d),i.child)}function Zm(n,i,a,c,d){if(Kt(a)){var f=!0;ru(i)}else f=!1;if(fo(i,d),i.stateNode===null)Eu(n,i),gm(i,a,c),Oh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var x=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=gn(U):(U=Kt(a)?ns:Ot.current,U=ao(i,U));var W=a.getDerivedStateFromProps,K=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||x!==U)&&ym(i,v,c,U),ci=!1;var H=i.memoizedState;v.state=H,hu(i,c,v,d),x=i.memoizedState,S!==c||H!==x||Wt.current||ci?(typeof W=="function"&&(Vh(i,a,W,c),x=i.memoizedState),(S=ci||mm(i,a,S,c,H,x,U))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=x),v.props=c,v.state=x,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,hm(n,i),S=i.memoizedProps,U=i.type===i.elementType?S:Nn(i.type,S),v.props=U,K=i.pendingProps,H=v.context,x=a.contextType,typeof x=="object"&&x!==null?x=gn(x):(x=Kt(a)?ns:Ot.current,x=ao(i,x));var te=a.getDerivedStateFromProps;(W=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==K||H!==x)&&ym(i,v,c,x),ci=!1,H=i.memoizedState,v.state=H,hu(i,c,v,d);var ie=i.memoizedState;S!==K||H!==ie||Wt.current||ci?(typeof te=="function"&&(Vh(i,a,te,c),ie=i.memoizedState),(U=ci||mm(i,a,U,c,H,ie,x)||!1)?(W||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,x),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,x)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ie),v.props=c,v.state=ie,v.context=x,c=U):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),c=!1)}return Jh(n,i,a,c,f,d)}function Jh(n,i,a,c,d,f){Xm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&rm(i,a,!1),Nr(n,i,f);c=i.stateNode,pE.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=po(i,n.child,null,f),i.child=po(i,null,S,f)):qt(n,i,S,f),i.memoizedState=c.state,d&&rm(i,a,!0),i.child}function eg(n){var i=n.stateNode;i.pendingContext?tm(n,i.pendingContext,i.pendingContext!==i.context):i.context&&tm(n,i.context,!1),Mh(n,i.containerInfo)}function tg(n,i,a,c,d){return co(),Rh(d),i.flags|=256,qt(n,i,a,c),i.child}var Xh={dehydrated:null,treeContext:null,retryLane:0};function Zh(n){return{baseLanes:n,cachePool:null,transitions:null}}function ng(n,i,a){var c=i.pendingProps,d=Xe.current,f=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Xe,d&1),n===null)return kh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=bu(v,c,0,null),n=ds(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=Zh(a),i.memoizedState=Xh,n):ed(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return mE(n,i,v,c,S,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,S=d.sibling;var x={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=x,i.deletions=null):(c=yi(d,x),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=yi(S,f):(f=ds(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?Zh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=Xh,c}return f=n.child,n=f.sibling,c=yi(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function ed(n,i){return i=bu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function wu(n,i,a,c){return c!==null&&Rh(c),po(i,n.child,null,a),n=ed(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function mE(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=Gh(Error(t(422))),wu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=bu({mode:"visible",children:c.children},d,0,null),f=ds(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&po(i,n.child,null,v),i.child.memoizedState=Zh(v),i.memoizedState=Xh,f);if((i.mode&1)===0)return wu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=Gh(f,c,void 0),wu(n,i,v,c)}if(S=(v&n.childLanes)!==0,Gt||S){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Pr(n,d),Vn(c,n,d,-1))}return gd(),c=Gh(Error(t(421))),wu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=CE.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,ln=oi(d.nextSibling),an=i,Je=!0,xn=null,n!==null&&(pn[mn++]=Rr,pn[mn++]=Cr,pn[mn++]=rs,Rr=n.id,Cr=n.overflow,rs=i),i=ed(i,c.children),i.flags|=4096,i)}function rg(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Nh(n.return,i,a)}function td(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function ig(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(qt(n,i,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&rg(n,a,i);else if(n.tag===19)rg(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Xe,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&pu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),td(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&pu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}td(i,!0,a,null,f);break;case"together":td(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Eu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Nr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ls|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=yi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=yi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function gE(n,i,a){switch(i.tag){case 3:eg(i),co();break;case 5:Em(i);break;case 1:Kt(i.type)&&ru(i);break;case 4:Mh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;$e(lu,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?($e(Xe,Xe.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?ng(n,i,a):($e(Xe,Xe.current&1),n=Nr(n,i,a),n!==null?n.sibling:null);$e(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return ig(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,Jm(n,i,a)}return Nr(n,i,a)}var sg,nd,og,ag;sg=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},nd=function(){},og=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,os(rr.current);var f=null;switch(a){case"input":d=bs(n,d),c=bs(n,c),f=[];break;case"select":d=N({},d,{value:void 0}),c=N({},c,{value:void 0}),f=[];break;case"textarea":d=Go(n,d),c=Go(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=eu)}kn(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var x=c[U];if(S=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&x!==S&&(x!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||x&&x.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in x)x.hasOwnProperty(v)&&S[v]!==x[v]&&(a||(a={}),a[v]=x[v])}else a||(f||(f=[]),f.push(U,a)),a=x;else U==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,S=S?S.__html:void 0,x!=null&&S!==x&&(f=f||[]).push(U,x)):U==="children"?typeof x!="string"&&typeof x!="number"||(f=f||[]).push(U,""+x):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(x!=null&&U==="onScroll"&&We("scroll",n),f||S===x||(f=[])):(f=f||[]).push(U,x))}a&&(f=f||[]).push("style",a);var U=f;(i.updateQueue=U)&&(i.flags|=4)}},ag=function(n,i,a,c){a!==c&&(i.flags|=4)};function Va(n,i){if(!Je)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function yE(n,i,a){var c=i.pendingProps;switch(Sh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Kt(i.type)&&nu(),Lt(i),null;case 3:return c=i.stateNode,mo(),Ke(Wt),Ke(Ot),Uh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(au(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xn!==null&&(fd(xn),xn=null))),nd(n,i),Lt(i),null;case 5:Lh(i);var d=os(Pa.current);if(a=i.type,n!==null&&i.stateNode!=null)og(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=os(rr.current),au(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[nr]=i,c[Sa]=f,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Ea.length;d++)We(Ea[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Al(c,f),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},We("invalid",c);break;case"textarea":Qo(c,f),We("invalid",c)}kn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var S=f[v];v==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&Zl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&Zl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":Ds(c),Ko(c,f,!0);break;case"textarea":Ds(c),qr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=eu)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Yo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[nr]=i,n[Sa]=c,sg(n,i,!1,!1),i.stateNode=n;e:{switch(v=Ls(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ea.length;d++)We(Ea[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":Al(n,c),d=bs(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=N({},c,{value:void 0}),We("invalid",n);break;case"textarea":Qo(n,c),d=Go(n,c),We("invalid",n);break;default:d=c}kn(a,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var x=S[f];f==="style"?Ms(n,x):f==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Rl(n,x)):f==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&zi(n,x):typeof x=="number"&&zi(n,""+x):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?x!=null&&f==="onScroll"&&We("scroll",n):x!=null&&Ee(n,f,x,v))}switch(a){case"input":Ds(n),Ko(n,c,!1);break;case"textarea":Ds(n),qr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+xe(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?An(n,!!c.multiple,f,!1):c.defaultValue!=null&&An(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=eu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)ag(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=os(Pa.current),os(rr.current),au(i)){if(c=i.stateNode,a=i.memoizedProps,c[nr]=i,(f=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Zl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Zl(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=i,i.stateNode=c}return Lt(i),null;case 13:if(Ke(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&ln!==null&&(i.mode&1)!==0&&(i.flags&128)===0)um(),co(),i.flags|=98560,f=!1;else if(f=au(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[nr]=i}else co(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),f=!1}else xn!==null&&(fd(xn),xn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xe.current&1)!==0?_t===0&&(_t=3):gd())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return mo(),nd(n,i),n===null&&Ta(i.stateNode.containerInfo),Lt(i),null;case 10:return xh(i.type._context),Lt(i),null;case 17:return Kt(i.type)&&nu(),Lt(i),null;case 19:if(Ke(Xe),f=i.memoizedState,f===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)Va(f,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=pu(n),v!==null){for(i.flags|=128,Va(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Xe,Xe.current&1|2),i.child}n=n.sibling}f.tail!==null&&He()>vo&&(i.flags|=128,c=!0,Va(f,!1),i.lanes=4194304)}else{if(!c)if(n=pu(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Va(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Je)return Lt(i),null}else 2*He()-f.renderingStartTime>vo&&a!==1073741824&&(i.flags|=128,c=!0,Va(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=He(),i.sibling=null,a=Xe.current,$e(Xe,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return md(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(un&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function _E(n,i){switch(Sh(i),i.tag){case 1:return Kt(i.type)&&nu(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return mo(),Ke(Wt),Ke(Ot),Uh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Lh(i),null;case 13:if(Ke(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));co()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(Xe),null;case 4:return mo(),null;case 10:return xh(i.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var Tu=!1,Ft=!1,vE=typeof WeakSet=="function"?WeakSet:Set,re=null;function yo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,i,c)}else a.current=null}function rd(n,i,a){try{a()}catch(c){nt(n,i,c)}}var lg=!1;function wE(n,i){if(mh=Tr,n=Up(),ah(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,S=-1,x=-1,U=0,W=0,K=n,H=null;t:for(;;){for(var te;K!==a||d!==0&&K.nodeType!==3||(S=v+d),K!==f||c!==0&&K.nodeType!==3||(x=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(te=K.firstChild)!==null;)H=K,K=te;for(;;){if(K===n)break t;if(H===a&&++U===d&&(S=v),H===f&&++W===c&&(x=v),(te=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=te}a=S===-1||x===-1?null:{start:S,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(gh={focusedElem:n,selectionRange:a},Tr=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var ie=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,ot=ie.memoizedState,M=i.stateNode,D=M.getSnapshotBeforeUpdate(i.elementType===i.type?se:Nn(i.type,se),ot);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){nt(i,i.return,Q)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return ie=lg,lg=!1,ie}function Oa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&rd(i,a,f)}d=d.next}while(d!==c)}}function Iu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function id(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function ug(n){var i=n.alternate;i!==null&&(n.alternate=null,ug(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[nr],delete i[Sa],delete i[wh],delete i[nE],delete i[rE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cg(n){return n.tag===5||n.tag===3||n.tag===4}function hg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=eu));else if(c!==4&&(n=n.child,n!==null))for(sd(n,i,a),n=n.sibling;n!==null;)sd(n,i,a),n=n.sibling}function od(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(od(n,i,a),n=n.sibling;n!==null;)od(n,i,a),n=n.sibling}var Ct=null,Dn=!1;function di(n,i,a){for(a=a.child;a!==null;)dg(n,i,a),a=a.sibling}function dg(n,i,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Wi,a)}catch{}switch(a.tag){case 5:Ft||yo(a,i);case 6:var c=Ct,d=Dn;Ct=null,di(n,i,a),Ct=c,Dn=d,Ct!==null&&(Dn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Dn?(n=Ct,a=a.stateNode,n.nodeType===8?vh(n.parentNode,a):n.nodeType===1&&vh(n,a),ni(n)):vh(Ct,a.stateNode));break;case 4:c=Ct,d=Dn,Ct=a.stateNode.containerInfo,Dn=!0,di(n,i,a),Ct=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&rd(a,i,v),d=d.next}while(d!==c)}di(n,i,a);break;case 1:if(!Ft&&(yo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){nt(a,i,S)}di(n,i,a);break;case 21:di(n,i,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,di(n,i,a),Ft=c):di(n,i,a);break;default:di(n,i,a)}}function fg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new vE),i.forEach(function(c){var d=PE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function bn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Ct=S.stateNode,Dn=!1;break e;case 3:Ct=S.stateNode.containerInfo,Dn=!0;break e;case 4:Ct=S.stateNode.containerInfo,Dn=!0;break e}S=S.return}if(Ct===null)throw Error(t(160));dg(f,v,d),Ct=null,Dn=!1;var x=d.alternate;x!==null&&(x.return=null),d.return=null}catch(U){nt(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pg(i,n),i=i.sibling}function pg(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bn(i,n),sr(n),c&4){try{Oa(3,n,n.return),Iu(3,n)}catch(se){nt(n,n.return,se)}try{Oa(5,n,n.return)}catch(se){nt(n,n.return,se)}}break;case 1:bn(i,n),sr(n),c&512&&a!==null&&yo(a,a.return);break;case 5:if(bn(i,n),sr(n),c&512&&a!==null&&yo(a,a.return),n.flags&32){var d=n.stateNode;try{zi(d,"")}catch(se){nt(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,S=n.type,x=n.updateQueue;if(n.updateQueue=null,x!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&Vs(d,f),Ls(S,v);var U=Ls(S,f);for(v=0;v<x.length;v+=2){var W=x[v],K=x[v+1];W==="style"?Ms(d,K):W==="dangerouslySetInnerHTML"?Rl(d,K):W==="children"?zi(d,K):Ee(d,W,K,U)}switch(S){case"input":ji(d,f);break;case"textarea":kl(d,f);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var te=f.value;te!=null?An(d,!!f.multiple,te,!1):H!==!!f.multiple&&(f.defaultValue!=null?An(d,!!f.multiple,f.defaultValue,!0):An(d,!!f.multiple,f.multiple?[]:"",!1))}d[Sa]=f}catch(se){nt(n,n.return,se)}}break;case 6:if(bn(i,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(se){nt(n,n.return,se)}}break;case 3:if(bn(i,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ni(i.containerInfo)}catch(se){nt(n,n.return,se)}break;case 4:bn(i,n),sr(n);break;case 13:bn(i,n),sr(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(ud=He())),c&4&&fg(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(U=Ft)||W,bn(i,n),Ft=U):bn(i,n),sr(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!W&&(n.mode&1)!==0)for(re=n,W=n.child;W!==null;){for(K=re=W;re!==null;){switch(H=re,te=H.child,H.tag){case 0:case 11:case 14:case 15:Oa(4,H,H.return);break;case 1:yo(H,H.return);var ie=H.stateNode;if(typeof ie.componentWillUnmount=="function"){c=H,a=H.return;try{i=c,ie.props=i.memoizedProps,ie.state=i.memoizedState,ie.componentWillUnmount()}catch(se){nt(c,a,se)}}break;case 5:yo(H,H.return);break;case 22:if(H.memoizedState!==null){yg(K);continue}}te!==null?(te.return=H,re=te):yg(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=K.stateNode,x=K.memoizedProps.style,v=x!=null&&x.hasOwnProperty("display")?x.display:null,S.style.display=Kr("display",v))}catch(se){nt(n,n.return,se)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(se){nt(n,n.return,se)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:bn(i,n),sr(n),c&4&&fg(n);break;case 21:break;default:bn(i,n),sr(n)}}function sr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(cg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(zi(d,""),c.flags&=-33);var f=hg(n);od(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=hg(n);sd(n,S,v);break;default:throw Error(t(161))}}catch(x){nt(n,n.return,x)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function EE(n,i,a){re=n,mg(n)}function mg(n,i,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Tu;if(!v){var S=d.alternate,x=S!==null&&S.memoizedState!==null||Ft;S=Tu;var U=Ft;if(Tu=v,(Ft=x)&&!U)for(re=d;re!==null;)v=re,x=v.child,v.tag===22&&v.memoizedState!==null?_g(d):x!==null?(x.return=v,re=x):_g(d);for(;f!==null;)re=f,mg(f),f=f.sibling;re=d,Tu=S,Ft=U}gg(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,re=f):gg(n)}}function gg(n){for(;re!==null;){var i=re;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||Iu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Nn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&fm(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}fm(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var x=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var W=U.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&ni(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&id(i)}catch(H){nt(i,i.return,H)}}if(i===n){re=null;break}if(a=i.sibling,a!==null){a.return=i.return,re=a;break}re=i.return}}function yg(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,re=a;break}re=i.return}}function _g(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Iu(4,i)}catch(x){nt(i,a,x)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(x){nt(i,d,x)}}var f=i.return;try{id(i)}catch(x){nt(i,f,x)}break;case 5:var v=i.return;try{id(i)}catch(x){nt(i,v,x)}}}catch(x){nt(i,i.return,x)}if(i===n){re=null;break}var S=i.sibling;if(S!==null){S.return=i.return,re=S;break}re=i.return}}var TE=Math.ceil,Su=Ve.ReactCurrentDispatcher,ad=Ve.ReactCurrentOwner,_n=Ve.ReactCurrentBatchConfig,De=0,Tt=null,dt=null,Pt=0,un=0,_o=ai(0),_t=0,Ma=null,ls=0,Au=0,ld=0,La=null,Qt=null,ud=0,vo=1/0,Dr=null,ku=!1,cd=null,fi=null,Ru=!1,pi=null,Cu=0,Fa=0,hd=null,Pu=-1,xu=0;function Ht(){return(De&6)!==0?He():Pu!==-1?Pu:Pu=He()}function mi(n){return(n.mode&1)===0?1:(De&2)!==0&&Pt!==0?Pt&-Pt:sE.transition!==null?(xu===0&&(xu=sa()),xu):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:Ks(n.type)),n)}function Vn(n,i,a,c){if(50<Fa)throw Fa=0,hd=null,Error(t(185));Yi(n,a,c),((De&2)===0||n!==Tt)&&(n===Tt&&((De&2)===0&&(Au|=a),_t===4&&gi(n,Pt)),Yt(n,c),a===1&&De===0&&(i.mode&1)===0&&(vo=He()+500,iu&&ui()))}function Yt(n,i){var a=n.callbackNode;Qi(n,i);var c=vr(n,n===Tt?Pt:0);if(c===0)a!==null&&js(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&js(a),i===1)n.tag===0?iE(wg.bind(null,n)):im(wg.bind(null,n)),eE(function(){(De&6)===0&&ui()}),a=null;else{switch(Wn(c)){case 1:a=zs;break;case 4:a=na;break;case 16:a=Hi;break;case 536870912:a=Bs;break;default:a=Hi}a=Cg(a,vg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function vg(n,i){if(Pu=-1,xu=0,(De&6)!==0)throw Error(t(327));var a=n.callbackNode;if(wo()&&n.callbackNode!==a)return null;var c=vr(n,n===Tt?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Nu(n,c);else{i=c;var d=De;De|=2;var f=Tg();(Tt!==n||Pt!==i)&&(Dr=null,vo=He()+500,cs(n,i));do try{AE();break}catch(S){Eg(n,S)}while(!0);Ph(),Su.current=f,De=d,dt!==null?i=0:(Tt=null,Pt=0,i=_t)}if(i!==0){if(i===2&&(d=ia(n),d!==0&&(c=d,i=dd(n,d))),i===1)throw a=Ma,cs(n,0),gi(n,c),Yt(n,He()),a;if(i===6)gi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!IE(d)&&(i=Nu(n,c),i===2&&(f=ia(n),f!==0&&(c=f,i=dd(n,f))),i===1))throw a=Ma,cs(n,0),gi(n,c),Yt(n,He()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:hs(n,Qt,Dr);break;case 3:if(gi(n,c),(c&130023424)===c&&(i=ud+500-He(),10<i)){if(vr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=_h(hs.bind(null,n,Qt,Dr),i);break}hs(n,Qt,Dr);break;case 4:if(gi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-tn(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*TE(c/1960))-c,10<c){n.timeoutHandle=_h(hs.bind(null,n,Qt,Dr),c);break}hs(n,Qt,Dr);break;case 5:hs(n,Qt,Dr);break;default:throw Error(t(329))}}}return Yt(n,He()),n.callbackNode===a?vg.bind(null,n):null}function dd(n,i){var a=La;return n.current.memoizedState.isDehydrated&&(cs(n,i).flags|=256),n=Nu(n,i),n!==2&&(i=Qt,Qt=a,i!==null&&fd(i)),n}function fd(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function IE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Pn(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gi(n,i){for(i&=~ld,i&=~Au,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-tn(i),c=1<<a;n[a]=-1,i&=~c}}function wg(n){if((De&6)!==0)throw Error(t(327));wo();var i=vr(n,0);if((i&1)===0)return Yt(n,He()),null;var a=Nu(n,i);if(n.tag!==0&&a===2){var c=ia(n);c!==0&&(i=c,a=dd(n,c))}if(a===1)throw a=Ma,cs(n,0),gi(n,i),Yt(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,hs(n,Qt,Dr),Yt(n,He()),null}function pd(n,i){var a=De;De|=1;try{return n(i)}finally{De=a,De===0&&(vo=He()+500,iu&&ui())}}function us(n){pi!==null&&pi.tag===0&&(De&6)===0&&wo();var i=De;De|=1;var a=_n.transition,c=Ce;try{if(_n.transition=null,Ce=1,n)return n()}finally{Ce=c,_n.transition=a,De=i,(De&6)===0&&ui()}}function md(){un=_o.current,Ke(_o)}function cs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Z0(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(Sh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&nu();break;case 3:mo(),Ke(Wt),Ke(Ot),Uh();break;case 5:Lh(c);break;case 4:mo();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:xh(c.type._context);break;case 22:case 23:md()}a=a.return}if(Tt=n,dt=n=yi(n.current,null),Pt=un=i,_t=0,Ma=null,ld=Au=ls=0,Qt=La=null,ss!==null){for(i=0;i<ss.length;i++)if(a=ss[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}ss=null}return n}function Eg(n,i){do{var a=dt;try{if(Ph(),mu.current=vu,gu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}gu=!1}if(as=0,Et=yt=Ze=null,xa=!1,Na=0,ad.current=null,a===null||a.return===null){_t=1,Ma=i,dt=null;break}e:{var f=n,v=a.return,S=a,x=i;if(i=Pt,S.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var U=x,W=S,K=W.tag;if((W.mode&1)===0&&(K===0||K===11||K===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var te=Wm(v);if(te!==null){te.flags&=-257,Km(te,v,S,f,i),te.mode&1&&Hm(f,U,i),i=te,x=U;var ie=i.updateQueue;if(ie===null){var se=new Set;se.add(x),i.updateQueue=se}else ie.add(x);break e}else{if((i&1)===0){Hm(f,U,i),gd();break e}x=Error(t(426))}}else if(Je&&S.mode&1){var ot=Wm(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Km(ot,v,S,f,i),Rh(go(x,S));break e}}f=x=go(x,S),_t!==4&&(_t=2),La===null?La=[f]:La.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var M=$m(f,x,i);dm(f,M);break e;case 1:S=x;var D=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(fi===null||!fi.has(F)))){f.flags|=65536,i&=-i,f.lanes|=i;var Q=qm(f,S,i);dm(f,Q);break e}}f=f.return}while(f!==null)}Sg(a)}catch(oe){i=oe,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function Tg(){var n=Su.current;return Su.current=vu,n===null?vu:n}function gd(){(_t===0||_t===3||_t===2)&&(_t=4),Tt===null||(ls&268435455)===0&&(Au&268435455)===0||gi(Tt,Pt)}function Nu(n,i){var a=De;De|=2;var c=Tg();(Tt!==n||Pt!==i)&&(Dr=null,cs(n,i));do try{SE();break}catch(d){Eg(n,d)}while(!0);if(Ph(),De=a,Su.current=c,dt!==null)throw Error(t(261));return Tt=null,Pt=0,_t}function SE(){for(;dt!==null;)Ig(dt)}function AE(){for(;dt!==null&&!qi();)Ig(dt)}function Ig(n){var i=Rg(n.alternate,n,un);n.memoizedProps=n.pendingProps,i===null?Sg(n):dt=i,ad.current=null}function Sg(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=yE(a,i,un),a!==null){dt=a;return}}else{if(a=_E(a,i),a!==null){a.flags&=32767,dt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,dt=null;return}}if(i=i.sibling,i!==null){dt=i;return}dt=i=n}while(i!==null);_t===0&&(_t=5)}function hs(n,i,a){var c=Ce,d=_n.transition;try{_n.transition=null,Ce=1,kE(n,i,a,c)}finally{_n.transition=d,Ce=c}return null}function kE(n,i,a,c){do wo();while(pi!==null);if((De&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(nh(n,f),n===Tt&&(dt=Tt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ru||(Ru=!0,Cg(Hi,function(){return wo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=_n.transition,_n.transition=null;var v=Ce;Ce=1;var S=De;De|=4,ad.current=null,wE(n,a),pg(a,n),W0(gh),Tr=!!mh,gh=mh=null,n.current=a,EE(a),_r(),De=S,Ce=v,_n.transition=f}else n.current=a;if(Ru&&(Ru=!1,pi=n,Cu=d),f=n.pendingLanes,f===0&&(fi=null),Fl(a.stateNode),Yt(n,He()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ku)throw ku=!1,n=cd,cd=null,n;return(Cu&1)!==0&&n.tag!==0&&wo(),f=n.pendingLanes,(f&1)!==0?n===hd?Fa++:(Fa=0,hd=n):Fa=0,ui(),null}function wo(){if(pi!==null){var n=Wn(Cu),i=_n.transition,a=Ce;try{if(_n.transition=null,Ce=16>n?16:n,pi===null)var c=!1;else{if(n=pi,pi=null,Cu=0,(De&6)!==0)throw Error(t(331));var d=De;for(De|=4,re=n.current;re!==null;){var f=re,v=f.child;if((re.flags&16)!==0){var S=f.deletions;if(S!==null){for(var x=0;x<S.length;x++){var U=S[x];for(re=U;re!==null;){var W=re;switch(W.tag){case 0:case 11:case 15:Oa(8,W,f)}var K=W.child;if(K!==null)K.return=W,re=K;else for(;re!==null;){W=re;var H=W.sibling,te=W.return;if(ug(W),W===U){re=null;break}if(H!==null){H.return=te,re=H;break}re=te}}}var ie=f.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var ot=se.sibling;se.sibling=null,se=ot}while(se!==null)}}re=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,re=v;else e:for(;re!==null;){if(f=re,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Oa(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,re=M;break e}re=f.return}}var D=n.current;for(re=D;re!==null;){v=re;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,re=F;else e:for(v=D;re!==null;){if(S=re,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Iu(9,S)}}catch(oe){nt(S,S.return,oe)}if(S===v){re=null;break e}var Q=S.sibling;if(Q!==null){Q.return=S.return,re=Q;break e}re=S.return}}if(De=d,ui(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Wi,n)}catch{}c=!0}return c}finally{Ce=a,_n.transition=i}}return!1}function Ag(n,i,a){i=go(a,i),i=$m(n,i,1),n=hi(n,i,1),i=Ht(),n!==null&&(Yi(n,1,i),Yt(n,i))}function nt(n,i,a){if(n.tag===3)Ag(n,n,a);else for(;i!==null;){if(i.tag===3){Ag(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(fi===null||!fi.has(c))){n=go(a,n),n=qm(i,n,1),i=hi(i,n,1),n=Ht(),i!==null&&(Yi(i,1,n),Yt(i,n));break}}i=i.return}}function RE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Pt&a)===a&&(_t===4||_t===3&&(Pt&130023424)===Pt&&500>He()-ud?cs(n,0):ld|=a),Yt(n,i)}function kg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Zr,Zr<<=1,(Zr&130023424)===0&&(Zr=4194304)));var a=Ht();n=Pr(n,i),n!==null&&(Yi(n,i,a),Yt(n,a))}function CE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),kg(n,a)}function PE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),kg(n,a)}var Rg;Rg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wt.current)Gt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Gt=!1,gE(n,i,a);Gt=(n.flags&131072)!==0}else Gt=!1,Je&&(i.flags&1048576)!==0&&sm(i,ou,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Eu(n,i),n=i.pendingProps;var d=ao(i,Ot.current);fo(i,a),d=Bh(null,i,c,n,d,a);var f=$h();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Kt(c)?(f=!0,ru(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,bh(i),d.updater=du,i.stateNode=d,d._reactInternals=i,Oh(i,c,n,a),i=Jh(null,i,c,!0,f,a)):(i.tag=0,Je&&f&&Ih(i),qt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Eu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=NE(c),n=Nn(c,n),d){case 0:i=Yh(null,i,c,n,a);break e;case 1:i=Zm(null,i,c,n,a);break e;case 11:i=Gm(null,i,c,n,a);break e;case 14:i=Qm(null,i,c,Nn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),Yh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),Zm(n,i,c,d,a);case 3:e:{if(eg(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,hm(n,i),hu(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=go(Error(t(423)),i),i=tg(n,i,c,a,d);break e}else if(c!==d){d=go(Error(t(424)),i),i=tg(n,i,c,a,d);break e}else for(ln=oi(i.stateNode.containerInfo.firstChild),an=i,Je=!0,xn=null,a=wm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(co(),c===d){i=Nr(n,i,a);break e}qt(n,i,c,a)}i=i.child}return i;case 5:return Em(i),n===null&&kh(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,yh(c,d)?v=null:f!==null&&yh(c,f)&&(i.flags|=32),Xm(n,i),qt(n,i,v,a),i.child;case 6:return n===null&&kh(i),null;case 13:return ng(n,i,a);case 4:return Mh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=po(i,null,c,a):qt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),Gm(n,i,c,d,a);case 7:return qt(n,i,i.pendingProps,a),i.child;case 8:return qt(n,i,i.pendingProps.children,a),i.child;case 12:return qt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,$e(lu,c._currentValue),c._currentValue=v,f!==null)if(Pn(f.value,v)){if(f.children===d.children&&!Wt.current){i=Nr(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var S=f.dependencies;if(S!==null){v=f.child;for(var x=S.firstContext;x!==null;){if(x.context===c){if(f.tag===1){x=xr(-1,a&-a),x.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var W=U.pending;W===null?x.next=x:(x.next=W.next,W.next=x),U.pending=x}}f.lanes|=a,x=f.alternate,x!==null&&(x.lanes|=a),Nh(f.return,a,i),S.lanes|=a;break}x=x.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Nh(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}qt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,fo(i,a),d=gn(d),c=c(d),i.flags|=1,qt(n,i,c,a),i.child;case 14:return c=i.type,d=Nn(c,i.pendingProps),d=Nn(c.type,d),Qm(n,i,c,d,a);case 15:return Ym(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nn(c,d),Eu(n,i),i.tag=1,Kt(c)?(n=!0,ru(i)):n=!1,fo(i,a),gm(i,c,d),Oh(i,c,d,a),Jh(null,i,c,!0,n,a);case 19:return ig(n,i,a);case 22:return Jm(n,i,a)}throw Error(t(156,i.tag))};function Cg(n,i){return ta(n,i)}function xE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,i,a,c){return new xE(n,i,a,c)}function yd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function NE(n){if(typeof n=="function")return yd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===wt)return 14}return 2}function yi(n,i){var a=n.alternate;return a===null?(a=vn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Du(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")yd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case A:return ds(a.children,d,f,i);case T:v=8,d|=8;break;case I:return n=vn(12,a,i,d|2),n.elementType=I,n.lanes=f,n;case k:return n=vn(13,a,i,d),n.elementType=k,n.lanes=f,n;case ze:return n=vn(19,a,i,d),n.elementType=ze,n.lanes=f,n;case Ye:return bu(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case C:v=9;break e;case O:v=11;break e;case wt:v=14;break e;case bt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=vn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function ds(n,i,a,c){return n=vn(7,n,c,i),n.lanes=a,n}function bu(n,i,a,c){return n=vn(22,n,c,i),n.elementType=Ye,n.lanes=a,n.stateNode={isHidden:!1},n}function _d(n,i,a){return n=vn(6,n,null,i),n.lanes=a,n}function vd(n,i,a){return i=vn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function DE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function wd(n,i,a,c,d,f,v,S,x){return n=new DE(n,i,a,S,x),i===1?(i=1,f===!0&&(i|=8)):i=0,f=vn(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(f),n}function bE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Pg(n){if(!n)return li;n=n._reactInternals;e:{if(Rn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Kt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return nm(n,a,i)}return i}function xg(n,i,a,c,d,f,v,S,x){return n=wd(a,c,!0,n,d,f,v,S,x),n.context=Pg(null),a=n.current,c=Ht(),d=mi(a),f=xr(c,d),f.callback=i??null,hi(a,f,d),n.current.lanes=d,Yi(n,d,c),Yt(n,c),n}function Vu(n,i,a,c){var d=i.current,f=Ht(),v=mi(d);return a=Pg(a),i.context===null?i.context=a:i.pendingContext=a,i=xr(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=hi(d,i,v),n!==null&&(Vn(n,d,v,f),cu(n,d,v)),v}function Ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ng(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ed(n,i){Ng(n,i),(n=n.alternate)&&Ng(n,i)}function VE(){return null}var Dg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Td(n){this._internalRoot=n}Mu.prototype.render=Td.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Vu(n,i,null,null)},Mu.prototype.unmount=Td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){Vu(null,n,null,null)}),i[Ar]=null}};function Mu(n){this._internalRoot=n}Mu.prototype.unstable_scheduleHydration=function(n){if(n){var i=ca();n={blockedOn:null,target:n,priority:i};for(var a=0;a<nn.length&&i!==0&&i<nn[a].priority;a++);nn.splice(a,0,n),a===0&&Hs(n)}};function Id(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bg(){}function OE(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=Ou(v);f.call(U)}}var v=xg(i,c,n,0,null,!1,!1,"",bg);return n._reactRootContainer=v,n[Ar]=v.current,Ta(n.nodeType===8?n.parentNode:n),us(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=Ou(x);S.call(U)}}var x=wd(n,0,!1,null,null,!1,!1,"",bg);return n._reactRootContainer=x,n[Ar]=x.current,Ta(n.nodeType===8?n.parentNode:n),us(function(){Vu(i,x,a,c)}),x}function Fu(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var S=d;d=function(){var x=Ou(v);S.call(x)}}Vu(i,v,n,d)}else v=OE(a,i,n,d,c);return Ou(v)}la=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Me(i.pendingLanes);a!==0&&(aa(i,a|1),Yt(i,He()),(De&6)===0&&(vo=He()+500,ui()))}break;case 13:us(function(){var c=Pr(n,1);if(c!==null){var d=Ht();Vn(c,n,1,d)}}),Ed(n,1)}},$s=function(n){if(n.tag===13){var i=Pr(n,134217728);if(i!==null){var a=Ht();Vn(i,n,134217728,a)}Ed(n,134217728)}},ua=function(n){if(n.tag===13){var i=mi(n),a=Pr(n,i);if(a!==null){var c=Ht();Vn(a,n,i,c)}Ed(n,i)}},ca=function(){return Ce},ha=function(n,i){var a=Ce;try{return Ce=n,i()}finally{Ce=a}},mr=function(n,i,a){switch(i){case"input":if(ji(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=tu(c);if(!d)throw Error(t(90));Wo(c),ji(c,d)}}}break;case"textarea":kl(n,a);break;case"select":i=a.value,i!=null&&An(n,!!a.multiple,i,!1)}},Pl=pd,xl=us;var ME={usingClientEntryPoint:!1,Events:[Aa,so,tu,Qr,Yr,pd]},Ua={findFiberByHostInstance:ts,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},LE={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ll(n),n===null?null:n.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||VE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Wi=Uu.inject(LE),en=Uu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ME,Jt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(i))throw Error(t(200));return bE(n,i,null,a)},Jt.createRoot=function(n,i){if(!Id(n))throw Error(t(299));var a=!1,c="",d=Dg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=wd(n,1,!1,null,null,a,!1,c,d),n[Ar]=i.current,Ta(n.nodeType===8?n.parentNode:n),new Td(i)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ll(i),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return us(n)},Jt.hydrate=function(n,i,a){if(!Lu(i))throw Error(t(200));return Fu(null,n,i,!0,a)},Jt.hydrateRoot=function(n,i,a){if(!Id(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Dg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=xg(i,null,n,1,a??null,d,!1,f,v),n[Ar]=i.current,Ta(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Mu(i)},Jt.render=function(n,i,a){if(!Lu(i))throw Error(t(200));return Fu(null,n,i,!1,a)},Jt.unmountComponentAtNode=function(n){if(!Lu(n))throw Error(t(40));return n._reactRootContainer?(us(function(){Fu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ar]=null})}),!0):!1},Jt.unstable_batchedUpdates=pd,Jt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Lu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Fu(n,i,a,!1,c)},Jt.version="18.2.0-next-9e3b772b8-20220608",Jt}var zg;function HE(){if(zg)return kd.exports;zg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),kd.exports=qE(),kd.exports}var Bg;function WE(){if(Bg)return ju;Bg=1;var r=HE();return ju.createRoot=r.createRoot,ju.hydrateRoot=r.hydrateRoot,ju}var KE=WE();const GE=P_(KE),QE="modulepreload",YE=function(r){return"/"+r},$g={},Ef=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let h=function(_){return Promise.all(_.map(E=>Promise.resolve(E).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),g=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));o=h(t.map(_=>{if(_=YE(_),_ in $g)return;$g[_]=!0;const E=_.endsWith(".css"),R=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${R}`))return;const V=document.createElement("link");if(V.rel=E?"stylesheet":QE,E||(V.as="script"),V.crossOrigin="",V.href=_,g&&V.setAttribute("nonce",g),document.head.appendChild(V),E)return new Promise((z,Y)=>{V.addEventListener("load",z),V.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${_}`)))})}))}function l(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return o.then(h=>{for(const m of h||[])m.status==="rejected"&&l(m.reason);return e().catch(l)})};var Qa=(r=>(r.ADMIN="ADMIN",r.MEMBER="MEMBER",r.PENDING="PENDING",r))(Qa||{});const JE=r=>b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.598m-1.5-6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"})}),XE=()=>{const{currentUser:r,logout:e,isDarkMode:t,toggleDarkMode:s}=N0();return b.jsx("header",{className:"sticky top-0 z-40 glass-nav dark:bg-black/90 dark:border-white/10 transition-colors duration-300",children:b.jsx("div",{className:"container mx-auto px-4 py-4 sm:px-6 lg:px-8",children:b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsxs("div",{className:"flex items-center space-x-4 group cursor-pointer",children:[b.jsx(JE,{className:"h-10 w-10 text-orange-600 animate-fade-in group-hover:scale-110 transition-transform"}),b.jsxs("h1",{className:"text-2xl md:text-3xl font-display font-black text-gray-900 dark:text-gray-100 tracking-tighter",children:["Union Connect ",b.jsx("span",{className:"text-orange-600",children:"Portal"})]})]}),b.jsxs("div",{className:"flex items-center space-x-2 md:space-x-4 animate-fade-in",children:[b.jsx("button",{onClick:s,className:"p-3 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700",title:t?"Switch to Light Mode":"Switch to Dark Mode",children:t?b.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:b.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}):b.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:b.jsx("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})}),r&&b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"hidden sm:flex flex-col items-end",children:[b.jsxs("span",{className:"text-sm text-gray-700 dark:text-gray-300 leading-tight",children:["Welcome, ",b.jsx("span",{className:"font-bold text-gray-900 dark:text-white",children:r.employeeName})]}),b.jsx("span",{className:`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full mt-0.5 ${r.role===Qa.ADMIN?"bg-rose-100 text-rose-700 border border-rose-200 shadow-sm":"bg-emerald-100 text-emerald-700 border border-emerald-200 shadow-sm"}`,children:r.role})]}),b.jsx("button",{onClick:e,className:"px-4 py-2 text-sm font-semibold text-white bg-orange-600 border border-transparent rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all hover:-translate-y-0.5",children:"Logout"})]})]})]})})})},ZE=r=>b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:[b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 100 12h-3a7.5 7.5 0 00-7.5-7.5h1.5v-1.5a7.5 7.5 0 007.5-7.5h3z"}),b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-1.875a1.125 1.125 0 01-1.125-1.125v-1.5a1.125 1.125 0 011.125-1.125h1.875m.75 4.5l.375-.375a1.875 1.875 0 000-2.65l-3.375-3.375a1.875 1.875 0 00-2.65 0l-.375.375m.75 4.5l-4.5-4.5"})]}),eT=({className:r="w-6 h-6"})=>b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:r,children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"})}),tT=r=>b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),nT=r=>b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3.375 3.375 0 0119.5 7.372l-10.94 10.94a2.25 2.25 0 01-3.182-3.182l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a1.125 1.125 0 001.591 1.591l10.94-10.94a2.25 2.25 0 00-3.182-3.182L5.625 15.375a3.375 3.375 0 004.773 4.773l7.693-7.693a.75.75 0 011.06-1.06z"})}),rx=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"],rT=[{id:1,name:"S.K. Gupta",post:"President"},{id:2,name:"Mukesh Kumar",post:"Vice President"},{id:3,name:"Sudhir",post:"General Secretary"},{id:4,name:"Ravinder Kumar",post:"Joint Secretary Industrial Dispute"},{id:5,name:"Manoj Kumar",post:"Joint Secretary Welfare"},{id:6,name:"Krishna Kumar",post:"Treasurer"},{id:7,name:"Manoj",post:"Assistant Joint Secretary Industrial Dispute"},{id:8,name:"Pradeep Kumar",post:"Assistant Joint Secretary Welfare"},{id:9,name:"Debabrata Sahu",post:"Executive Member"},{id:10,name:"Sandeep Kumar",post:"Executive Member"},{id:11,name:"Mohit Kajal",post:"Executive Member"},{id:12,name:"Naveen Kumar",post:"Executive Member"},{id:13,name:"Pardeep",post:"Executive Member"}],cn={hindiName:"इंडियन ऑयल पानीपत रिफ़ाइनरी एम्पलाईज यूनियन",englishName:"INDIAN OIL PANIPAT REFINERY EMPLOYEES UNION (IPREU)",address:"पानीपत रिफ़ाइनरी एवं पेट्रोकेमिकल कॉम्प्लेक्स, पोस्ट ऑफिस: पानीपत रिफ़ाइनरी, बहोली, पानीपत-132140 (हरियाणा)",phones:["9034084033","9416658215"],intercom:"01802524045",email:"PRIPREU@INDIANOIL.IN",affiliation:"भारतीय मजदूर संघ (बी.एम.एस. से सम्बद्ध)",regdNo:"1542"},iT=({name:r,post:e})=>b.jsx("div",{className:"p-5 rounded-2xl border transition-all duration-300 bg-white dark:bg-gray-950 border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-900/50 group",children:b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("div",{className:"w-14 h-14 rounded-full flex items-center justify-center text-lg font-black bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300",children:r.split(" ").map(t=>t[0]).join("").substring(0,2)}),b.jsxs("div",{children:[b.jsx("p",{className:"font-black text-xl text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-0.5",children:r}),b.jsx("p",{className:"text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold",children:e})]})]})}),sT=({onLoginClick:r})=>{const{calendarEvents:e,announcements:t,users:s,grievances:o}=N0(),l=e.filter(m=>new Date(m.date)>=new Date(new Date().setHours(0,0,0,0))).sort((m,g)=>m.date.localeCompare(g.date)).slice(0,3),h=t.slice(0,3);return b.jsxs("div",{className:"min-h-[calc(100vh-80px)] flex flex-col justify-between -mt-4 md:-mt-8 -mx-4 md:-mx-8",children:[b.jsxs("section",{className:"relative overflow-hidden bg-[#2D0606] text-white py-24 md:py-36 px-6 lg:px-12 flex items-center justify-center",children:[b.jsx("style",{children:`
                    .hero-gradient {
                        background: radial-gradient(circle at top right, #4c0505 0%, #1a0202 70%, #000000 100%);
                    }
                `}),b.jsx("div",{className:"absolute inset-0 hero-gradient opacity-90"}),b.jsx("div",{className:"absolute top-0 left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] animate-blob"}),b.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[120px] animate-blob animation-delay-2000"}),b.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto text-center space-y-10",children:[b.jsxs("div",{className:"inline-flex flex-col items-center gap-6",children:[b.jsxs("div",{className:"px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-bold text-orange-200 shadow-2xl flex items-center gap-2",children:[b.jsxs("span",{className:"flex h-2 w-2 relative",children:[b.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),b.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-500"})]}),"SECURE CENTRALIZED MEMBER HUB"]}),b.jsx("h2",{className:"text-3xl md:text-5xl font-black text-orange-500 font-display transition-all hover:scale-105 duration-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]",children:cn.hindiName})]}),b.jsxs("h1",{className:"text-5xl md:text-8xl font-black tracking-tight leading-[1.1] drop-shadow-2xl",children:["Strength Through ",b.jsx("br",{})," ",b.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase",children:"Unity & Transparency"})]}),b.jsxs("p",{className:"text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-lg",children:["The official digital home for ",cn.englishName,". Affiliated with ",b.jsx("span",{className:"text-white font-bold underline decoration-orange-500 decoration-2 underline-offset-4",children:cn.affiliation}),"."]}),b.jsxs("div",{className:"pt-10 flex flex-col sm:flex-row items-center justify-center gap-6",children:[b.jsx("button",{onClick:r,className:"w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white font-black rounded-2xl shadow-[0_20px_50px_rgba(185,28,28,0.3)] transition-all hover:-translate-y-1 active:scale-95 text-xl border border-white/20",children:"Access Member Portal →"}),b.jsx("a",{href:"#leadership",className:"w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl backdrop-blur-xl border border-white/10 transition-all hover:-translate-y-1 text-xl",children:"View Executive Body"})]})]})]}),b.jsx("section",{className:"py-20 bg-slate-50 dark:bg-[#020617] relative z-20 border-b border-gray-100 dark:border-gray-900/50",children:b.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-12",children:b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[b.jsxs("div",{className:"space-y-8",children:[b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("div",{className:"p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl",children:b.jsx(eT,{className:"w-7 h-7"})}),b.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100",children:"Union Calendar"})]}),b.jsxs("div",{className:"space-y-3",children:[l.length>0?l.map(m=>b.jsxs("div",{className:"bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between group hover:border-blue-200 dark:hover:border-blue-900 transition-colors",children:[b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsxs("div",{className:"flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 w-14 h-14 rounded-lg border dark:border-gray-700",children:[b.jsx("span",{className:"text-[10px] text-gray-500 uppercase font-bold",children:new Date(m.date).toLocaleString("default",{month:"short"})}),b.jsx("span",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 leading-none",children:new Date(m.date).getDate()})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",children:m.title}),b.jsxs("div",{className:"flex items-center gap-3 text-xs text-gray-500 mt-1",children:[b.jsxs("span",{className:"flex items-center gap-1",children:[b.jsx(tT,{className:"w-3 h-3"})," ",m.startTime]}),m.location&&b.jsxs("span",{className:"flex items-center gap-1",children:["📍 ",m.location]})]})]})]}),b.jsx("button",{onClick:r,className:"text-xs font-bold text-gray-400 hover:text-blue-600 uppercase tracking-widest px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-full border dark:border-gray-700",children:"Details"})]},m.id)):b.jsx("p",{className:"text-gray-500 italic py-8 text-center bg-white dark:bg-gray-900 rounded-xl border border-dashed dark:border-gray-800",children:"No upcoming events listed for this month."}),b.jsx("p",{className:"text-center",children:b.jsx("button",{onClick:r,className:"text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400",children:"View Full Calendar →"})})]})]}),b.jsxs("div",{className:"space-y-8",children:[b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("div",{className:"p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl",children:b.jsx(ZE,{className:"w-7 h-7"})}),b.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100",children:"Latest Circulars"})]}),b.jsxs("div",{className:"space-y-3",children:[h.length>0?h.map(m=>b.jsxs("div",{className:"bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:border-orange-200 dark:hover:border-orange-900",children:[b.jsxs("div",{className:"flex justify-between items-start mb-2",children:[b.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 line-clamp-1",children:m.title}),b.jsx("span",{className:"text-[10px] bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded-full font-bold",children:"OFFICIAL"})]}),b.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3",children:m.content}),b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{className:"text-[10px] text-gray-400 font-medium italic",children:new Date(m.createdAt).toLocaleDateString()}),m.attachment&&b.jsxs("button",{onClick:r,className:"flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700",children:[b.jsx(nT,{className:"w-3.5 h-3.5"}),"View Attachment"]})]})]},m.id)):b.jsx("p",{className:"text-gray-500 italic py-8 text-center bg-white dark:bg-gray-900 rounded-xl border border-dashed dark:border-gray-800",children:"No public notices available at this time."}),b.jsx("p",{className:"text-center",children:b.jsx("button",{onClick:r,className:"text-sm font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-400",children:"Read All Circulars →"})})]})]})]})})}),b.jsx("section",{id:"leadership",className:"py-24 px-6 lg:px-12 bg-white dark:bg-black relative z-20",children:b.jsxs("div",{className:"max-w-6xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-20",children:[b.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 font-display uppercase tracking-tight",children:["Executive Body of ",b.jsx("span",{className:"text-orange-600",children:"IPREU"})]}),b.jsx("div",{className:"w-32 h-2 bg-gradient-to-r from-orange-400 to-red-800 mx-auto rounded-full mb-8 opacity-80"}),b.jsx("p",{className:"text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed",children:"Serving with dedication, integrity, and a commitment to member welfare and industrial harmony."})]}),b.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:rT.map(m=>b.jsx(iT,{name:m.name,post:m.post},m.id))})]})}),b.jsxs("section",{className:"py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative",children:[b.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]"}),b.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-12 relative z-10",children:b.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-12 text-center",children:[b.jsxs("div",{className:"space-y-2 group",children:[b.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:s.filter(m=>m.role!=="PENDING").length||1}),b.jsx("p",{className:"text-sm font-semibold text-gray-400 uppercase tracking-widest",children:"Registered Members"})]}),b.jsxs("div",{className:"space-y-2 group",children:[b.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:t.length}),b.jsx("p",{className:"text-sm font-semibold text-gray-400 uppercase tracking-widest",children:"Digital Circulars"})]}),b.jsxs("div",{className:"space-y-2 group",children:[b.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:o.filter(m=>m.status==="RESOLVED").length}),b.jsx("p",{className:"text-sm font-semibold text-gray-400 uppercase tracking-widest",children:"Resolved Grievances"})]}),b.jsxs("div",{className:"space-y-2 group",children:[b.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:cn.regdNo}),b.jsx("p",{className:"text-sm font-semibold text-gray-400 uppercase tracking-widest",children:"Registration No."})]})]})})]}),b.jsxs("section",{className:"py-24 px-6 lg:px-12 bg-white dark:bg-black relative z-20",children:[b.jsx("div",{className:"max-w-6xl mx-auto text-center mb-20",children:b.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 font-display underline decoration-orange-500 decoration-4 underline-offset-12",children:"How to Join IPREU"})}),b.jsxs("div",{className:"max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative",children:[b.jsx("div",{className:"absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-gray-800 hidden md:block -z-10"}),b.jsxs("div",{className:"bg-white dark:bg-gray-950 p-8 rounded-2xl border dark:border-gray-800 text-center space-y-4 shadow-sm hover:shadow-xl transition-shadow",children:[b.jsx("div",{className:"w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-600/20",children:"1"}),b.jsx("h4",{className:"font-bold text-xl text-gray-900 dark:text-gray-100",children:"Digital Registration"}),b.jsx("p",{className:"text-base text-gray-500 dark:text-gray-400",children:"Click Join and fill in your official employee details via our secure form."})]}),b.jsxs("div",{className:"bg-white dark:bg-gray-950 p-8 rounded-2xl border dark:border-gray-800 text-center space-y-4 shadow-sm hover:shadow-xl transition-shadow",children:[b.jsx("div",{className:"w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-600/20",children:"2"}),b.jsx("h4",{className:"font-bold text-xl text-gray-900 dark:text-gray-100",children:"Admin Verification"}),b.jsx("p",{className:"text-base text-gray-500 dark:text-gray-400",children:"Your details will be reviewed by the Executive Body for union credentials."})]}),b.jsxs("div",{className:"bg-white dark:bg-gray-950 p-8 rounded-2xl border dark:border-gray-800 text-center space-y-4 shadow-sm hover:shadow-xl transition-shadow",children:[b.jsx("div",{className:"w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-green-500/20",children:"3"}),b.jsx("h4",{className:"font-bold text-xl text-gray-900 dark:text-gray-100",children:"Full Access"}),b.jsx("p",{className:"text-base text-gray-500 dark:text-gray-400",children:"Receive your digital ID card and gain access to voting, circulars, and more."})]})]}),b.jsx("div",{className:"mt-16 text-center",children:b.jsx("button",{onClick:r,className:"px-12 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:-translate-y-1",children:"Start Registration Now"})})]}),b.jsxs("footer",{className:"bg-gray-900 text-gray-300 py-16 px-6 border-t border-gray-800 relative z-20",children:[b.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12",children:[b.jsxs("div",{className:"md:col-span-2 space-y-4",children:[b.jsx("h4",{className:"text-2xl font-display font-bold text-white tracking-tight",children:cn.englishName}),b.jsx("p",{className:"text-lg text-orange-400 font-bold mb-4",children:cn.hindiName}),b.jsx("p",{className:"text-sm leading-relaxed max-w-md text-gray-400",children:cn.address}),b.jsxs("div",{className:"pt-4 space-y-2 text-sm",children:[b.jsxs("p",{className:"flex items-center gap-3",children:[b.jsx("span",{className:"text-orange-500",children:"📞"})," ",cn.phones.join(" / ")," (Ext: ",cn.intercom,")"]}),b.jsxs("p",{className:"flex items-center gap-3",children:[b.jsx("span",{className:"text-orange-500",children:"✉️"})," ",b.jsx("a",{href:`mailto:${cn.email}`,className:"hover:text-white transition-colors",children:cn.email})]})]})]}),b.jsxs("div",{children:[b.jsx("h5",{className:"text-white font-bold mb-4 uppercase text-xs tracking-widest font-display",children:"Compliance"}),b.jsxs("ul",{className:"space-y-3 text-sm text-gray-400",children:[b.jsxs("li",{children:["Affiliation: ",cn.affiliation]}),b.jsxs("li",{children:["Regd No: ",cn.regdNo]}),b.jsx("li",{children:b.jsxs("span",{className:"flex items-center gap-2",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500"})," Server Status: Stable"]})})]})]}),b.jsxs("div",{children:[b.jsx("h5",{className:"text-white font-bold mb-4 uppercase text-xs tracking-widest font-display",children:"Navigation"}),b.jsxs("ul",{className:"space-y-2 text-sm",children:[b.jsx("li",{children:b.jsx("button",{onClick:r,className:"hover:text-orange-500 transition-colors",children:"Member Login"})}),b.jsx("li",{children:b.jsx("a",{href:"#leadership",className:"hover:text-orange-500 transition-colors",children:"Executive Body"})}),b.jsx("li",{children:b.jsx("button",{onClick:r,className:"hover:text-orange-500 transition-colors",children:"Grievance Portal"})})]})]})]}),b.jsxs("div",{className:"max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-800 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center bg-gray-900 gap-4",children:[b.jsxs("p",{children:["© ",new Date().getFullYear()," IPREU. All rights reserved. | Built for the Employees, by the Union."]}),b.jsx("p",{className:"text-orange-600 font-bold",children:"Secure Private Network"})]})]})]})},oT=()=>{};var qg={};/**
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
 */const N_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},aT=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},D_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,R=(l&3)<<4|m>>4;let V=(m&15)<<2|_>>6,z=_&63;g||(z=64,h||(V=64)),s.push(t[E],t[R],t[V],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(N_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):aT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const R=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||m==null||_==null||R==null)throw new lT;const V=l<<2|m>>4;if(s.push(V),_!==64){const z=m<<4&240|_>>2;if(s.push(z),R!==64){const Y=_<<6&192|R;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class lT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uT=function(r){const e=N_(r);return D_.encodeByteArray(e,!0)},uc=function(r){return uT(r).replace(/\./g,"")},b_=function(r){try{return D_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hT=()=>cT().__FIREBASE_DEFAULTS__,dT=()=>{if(typeof process>"u"||typeof qg>"u")return;const r=qg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},fT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&b_(r[1]);return e&&JSON.parse(e)},xc=()=>{try{return oT()||hT()||dT()||fT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},V_=r=>{var e,t;return(t=(e=xc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},pT=r=>{const e=V_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},O_=()=>{var r;return(r=xc())==null?void 0:r.config},M_=r=>{var e;return(e=xc())==null?void 0:e[`_${r}`]};/**
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
 */class mT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function gT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[uc(JSON.stringify(t)),uc(JSON.stringify(h)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function _T(){var e;const r=(e=xc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ET(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TT(){const r=$t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function IT(){return!_T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function L_(){try{return typeof indexedDB=="object"}catch{return!1}}function F_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function ST(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const AT="FirebaseError";class pr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=AT,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rs.prototype.create)}}class Rs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?kT(l,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new pr(o,m,s)}}function kT(r,e){return r.replace(RT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const RT=/\{\$([^}]+)}/g;function CT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function _s(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Hg(l)&&Hg(h)){if(!_s(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Hg(r){return r!==null&&typeof r=="object"}/**
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
 */function fl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $a(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function qa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function PT(r,e){const t=new xT(r,e);return t.subscribe.bind(t)}class xT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");NT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Pd),o.error===void 0&&(o.error=Pd),o.complete===void 0&&(o.complete=Pd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Pd(){}/**
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
 */function gt(r){return r&&r._delegate?r._delegate:r}/**
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
 */function pl(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function U_(r){return(await fetch(r,{credentials:"include"})).ok}class Fn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ps="[DEFAULT]";/**
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
 */class DT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new mT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VT(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bT(r){return r===ps?void 0:r}function VT(r){return r.instantiationMode==="EAGER"}/**
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
 */class OT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new DT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Se||(Se={}));const MT={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},LT=Se.INFO,FT={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},UT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=FT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tf{constructor(e){this.name=e,this._logLevel=LT,this._logHandler=UT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const jT=(r,e)=>e.some(t=>r instanceof t);let Wg,Kg;function zT(){return Wg||(Wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BT(){return Kg||(Kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j_=new WeakMap,Kd=new WeakMap,z_=new WeakMap,xd=new WeakMap,If=new WeakMap;function $T(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Mr(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&j_.set(t,r)}).catch(()=>{}),If.set(e,r),e}function qT(r){if(Kd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Kd.set(r,e)}let Gd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Kd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||z_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mr(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function HT(r){Gd=r(Gd)}function WT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Nd(this),e,...t);return z_.set(s,e.sort?e.sort():[e]),Mr(s)}:BT().includes(r)?function(...e){return r.apply(Nd(this),e),Mr(j_.get(this))}:function(...e){return Mr(r.apply(Nd(this),e))}}function KT(r){return typeof r=="function"?WT(r):(r instanceof IDBTransaction&&qT(r),jT(r,zT())?new Proxy(r,Gd):r)}function Mr(r){if(r instanceof IDBRequest)return $T(r);if(xd.has(r))return xd.get(r);const e=KT(r);return e!==r&&(xd.set(r,e),If.set(e,r)),e}const Nd=r=>If.get(r);function Nc(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),m=Mr(h);return s&&h.addEventListener("upgradeneeded",g=>{s(Mr(h.result),g.oldVersion,g.newVersion,Mr(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}function Dd(r,{blocked:e}={}){const t=indexedDB.deleteDatabase(r);return e&&t.addEventListener("blocked",s=>e(s.oldVersion,s)),Mr(t).then(()=>{})}const GT=["get","getKey","getAll","getAllKeys","count"],QT=["put","add","delete","clear"],bd=new Map;function Gg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(bd.get(e))return bd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=QT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||GT.includes(t)))return;const l=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return bd.set(e,l),l}HT(r=>({...r,get:(e,t,s)=>Gg(e,t)||r.get(e,t,s),has:(e,t)=>!!Gg(e,t)||r.has(e,t)}));/**
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
 */class YT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(JT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function JT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qd="@firebase/app",Qg="0.14.10";/**
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
 */const Ur=new Tf("@firebase/app"),XT="@firebase/app-compat",ZT="@firebase/analytics-compat",eI="@firebase/analytics",tI="@firebase/app-check-compat",nI="@firebase/app-check",rI="@firebase/auth",iI="@firebase/auth-compat",sI="@firebase/database",oI="@firebase/data-connect",aI="@firebase/database-compat",lI="@firebase/functions",uI="@firebase/functions-compat",cI="@firebase/installations",hI="@firebase/installations-compat",dI="@firebase/messaging",fI="@firebase/messaging-compat",pI="@firebase/performance",mI="@firebase/performance-compat",gI="@firebase/remote-config",yI="@firebase/remote-config-compat",_I="@firebase/storage",vI="@firebase/storage-compat",wI="@firebase/firestore",EI="@firebase/ai",TI="@firebase/firestore-compat",II="firebase",SI="12.11.0";/**
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
 */const Yd="[DEFAULT]",AI={[Qd]:"fire-core",[XT]:"fire-core-compat",[eI]:"fire-analytics",[ZT]:"fire-analytics-compat",[nI]:"fire-app-check",[tI]:"fire-app-check-compat",[rI]:"fire-auth",[iI]:"fire-auth-compat",[sI]:"fire-rtdb",[oI]:"fire-data-connect",[aI]:"fire-rtdb-compat",[lI]:"fire-fn",[uI]:"fire-fn-compat",[cI]:"fire-iid",[hI]:"fire-iid-compat",[dI]:"fire-fcm",[fI]:"fire-fcm-compat",[pI]:"fire-perf",[mI]:"fire-perf-compat",[gI]:"fire-rc",[yI]:"fire-rc-compat",[_I]:"fire-gcs",[vI]:"fire-gcs-compat",[wI]:"fire-fst",[TI]:"fire-fst-compat",[EI]:"fire-vertex","fire-js":"fire-js",[II]:"fire-js-all"};/**
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
 */const cc=new Map,kI=new Map,Jd=new Map;function Yg(r,e){try{r.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function dr(r){const e=r.name;if(Jd.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;Jd.set(e,r);for(const t of cc.values())Yg(t,r);for(const t of kI.values())Yg(t,r);return!0}function Fo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function En(r){return r==null?!1:r.settings!==void 0}/**
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
 */const RI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ki=new Rs("app","Firebase",RI);/**
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
 */class CI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ki.create("app-deleted",{appName:this._name})}}/**
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
 */const Uo=SI;function B_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Yd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ki.create("bad-app-name",{appName:String(o)});if(t||(t=O_()),!t)throw ki.create("no-options");const l=cc.get(o);if(l){if(_s(t,l.options)&&_s(s,l.config))return l;throw ki.create("duplicate-app",{appName:o})}const h=new OT(o);for(const g of Jd.values())h.addComponent(g);const m=new CI(t,s,h);return cc.set(o,m),m}function Sf(r=Yd){const e=cc.get(r);if(!e&&r===Yd&&O_())return B_();if(!e)throw ki.create("no-app",{appName:r});return e}function In(r,e,t){let s=AI[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(h.join(" "));return}dr(new Fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const PI="firebase-heartbeat-database",xI=1,tl="firebase-heartbeat-store";let Vd=null;function $_(){return Vd||(Vd=Nc(PI,xI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(tl)}catch(t){console.warn(t)}}}}).catch(r=>{throw ki.create("idb-open",{originalErrorMessage:r.message})})),Vd}async function NI(r){try{const t=(await $_()).transaction(tl),s=await t.objectStore(tl).get(q_(r));return await t.done,s}catch(e){if(e instanceof pr)Ur.warn(e.message);else{const t=ki.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(t.message)}}}async function Jg(r,e){try{const s=(await $_()).transaction(tl,"readwrite");await s.objectStore(tl).put(e,q_(r)),await s.done}catch(t){if(t instanceof pr)Ur.warn(t.message);else{const s=ki.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ur.warn(s.message)}}}function q_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const DI=1024,bI=30;class VI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new MI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Xg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>bI){const h=LI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ur.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xg(),{heartbeatsToSend:s,unsentEntries:o}=OI(this._heartbeatsCache.heartbeats),l=uc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function Xg(){return new Date().toISOString().substring(0,10)}function OI(r,e=DI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Zg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Zg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class MI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return L_()?F_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await NI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zg(r){return uc(JSON.stringify({version:2,heartbeats:r})).length}function LI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function FI(r){dr(new Fn("platform-logger",e=>new YT(e),"PRIVATE")),dr(new Fn("heartbeat",e=>new VI(e),"PRIVATE")),In(Qd,Qg,r),In(Qd,Qg,"esm2020"),In("fire-js","")}FI("");var UI="firebase",jI="12.11.0";/**
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
 */In(UI,jI,"app");function H_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zI=H_,W_=new Rs("auth","Firebase",H_());/**
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
 */const hc=new Tf("@firebase/auth");function BI(r,...e){hc.logLevel<=Se.WARN&&hc.warn(`Auth (${Uo}): ${r}`,...e)}function Xu(r,...e){hc.logLevel<=Se.ERROR&&hc.error(`Auth (${Uo}): ${r}`,...e)}/**
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
 */function Un(r,...e){throw Af(r,...e)}function ar(r,...e){return Af(r,...e)}function K_(r,e,t){const s={...zI(),[e]:t};return new Rs("auth","Firebase",s).create(e,{appName:r.name})}function Lr(r){return K_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Af(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return W_.create(r,...e)}function de(r,e,...t){if(!r)throw Af(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Xu(e),new Error(e)}function jr(r,e){r||Vr(e)}/**
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
 */function Xd(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function $I(){return ey()==="http:"||ey()==="https:"}function ey(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function qI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($I()||wT()||"connection"in navigator)?navigator.onLine:!0}function HI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=yT()||ET()}get(){return qI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kf(r,e){jr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class G_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],GI=new ml(3e4,6e4);function Oi(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Mi(r,e,t,s,o={}){return Q_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const m=fl({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...l};return vT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&pl(r.emulatorConfig.host)&&(_.credentials="include"),G_.fetch()(await Y_(r,r.config.apiHost,t,m),_)})}async function Q_(r,e,t){r._canInitEmulator=!1;const s={...WI,...e};try{const o=new YI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw zu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw zu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw zu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw zu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw K_(r,E,_);Un(r,E)}}catch(o){if(o instanceof pr)throw o;Un(r,"network-request-failed",{message:String(o)})}}async function gl(r,e,t,s,o={}){const l=await Mi(r,e,t,s,o);return"mfaPendingCredential"in l&&Un(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function Y_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?kf(r.config,o):`${r.config.apiScheme}://${o}`;return KI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function QI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ar(this.auth,"network-request-failed")),GI.get())})}}function zu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=ar(r,e,s);return o.customData._tokenResponse=t,o}function ty(r){return r!==void 0&&r.enterprise!==void 0}class JI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return QI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XI(r,e){return Mi(r,"GET","/v2/recaptchaConfig",Oi(r,e))}/**
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
 */async function ZI(r,e){return Mi(r,"POST","/v1/accounts:delete",e)}async function dc(r,e){return Mi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ya(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eS(r,e=!1){const t=gt(r),s=await t.getIdToken(e),o=Rf(s);de(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ya(Od(o.auth_time)),issuedAtTime:Ya(Od(o.iat)),expirationTime:Ya(Od(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Od(r){return Number(r)*1e3}function Rf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Xu("JWT malformed, contained fewer than 3 sections"),null;try{const o=b_(t);return o?JSON.parse(o):(Xu("Failed to decode base64 JWT payload"),null)}catch(o){return Xu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ny(r){const e=Rf(r);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nl(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof pr&&tS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function tS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class nS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fc(r){var R;const e=r.auth,t=await r.getIdToken(),s=await nl(r,dc(e,{idToken:t}));de(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const l=(R=o.providerUserInfo)!=null&&R.length?J_(o.providerUserInfo):[],h=iS(r.providerData,l),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Zd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,E)}async function rS(r){const e=gt(r);await fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iS(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function J_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function sS(r,e){const t=await Q_(r,{},async()=>{const s=fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await Y_(r,o,"/v1/token",`key=${l}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&pl(r.emulatorConfig.host)&&(g.credentials="include"),G_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function oS(r,e){return Mi(r,"POST","/v2/accounts:revokeToken",Oi(r,e))}/**
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
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ny(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=ny(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await sS(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Ro;return s&&(de(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(de(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(de(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
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
 */function vi(r,e){de(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Mn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new nS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Zd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await nl(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eS(this,e)}reload(){return rS(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await fc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await nl(this,ZI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:R,emailVerified:V,isAnonymous:z,providerData:Y,stsTokenManager:J}=t;de(R&&J,e,"internal-error");const G=Ro.fromJSON(this.name,J);de(typeof R=="string",e,"internal-error"),vi(s,e.name),vi(o,e.name),de(typeof V=="boolean",e,"internal-error"),de(typeof z=="boolean",e,"internal-error"),vi(l,e.name),vi(h,e.name),vi(m,e.name),vi(g,e.name),vi(_,e.name),vi(E,e.name);const me=new Mn({uid:R,auth:e,email:o,emailVerified:V,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:l,tenantId:m,stsTokenManager:G,createdAt:_,lastLoginAt:E});return Y&&Array.isArray(Y)&&(me.providerData=Y.map(ge=>({...ge}))),g&&(me._redirectEventId=g),me}static async _fromIdTokenResponse(e,t,s=!1){const o=new Ro;o.updateFromServerResponse(t);const l=new Mn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await fc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];de(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?J_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),m=new Ro;m.updateFromIdToken(s);const g=new Mn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Zd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const ry=new Map;function Or(r){jr(r instanceof Function,"Expected a class definition");let e=ry.get(r);return e?(jr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ry.set(r,e),e)}/**
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
 */class X_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}X_.type="NONE";const iy=X_;/**
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
 */function Zu(r,e,t){return`firebase:${r}:${e}:${t}`}class Co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Zu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Zu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await dc(this.auth,{idToken:e}).catch(()=>{});return t?Mn._fromGetAccountInfoResponse(this.auth,t,e):null}return Mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Co(Or(iy),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Or(iy);const h=Zu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let R;if(typeof E=="string"){const V=await dc(e,{idToken:E}).catch(()=>{});if(!V)break;R=await Mn._fromGetAccountInfoResponse(e,V,E)}else R=Mn._fromJSON(e,E);_!==l&&(m=R),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Co(l,e,s):(l=g[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new Co(l,e,s))}}/**
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
 */function sy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iv(e))return"Blackberry";if(sv(e))return"Webos";if(ev(e))return"Safari";if((e.includes("chrome/")||tv(e))&&!e.includes("edge/"))return"Chrome";if(rv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Z_(r=$t()){return/firefox\//i.test(r)}function ev(r=$t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tv(r=$t()){return/crios\//i.test(r)}function nv(r=$t()){return/iemobile/i.test(r)}function rv(r=$t()){return/android/i.test(r)}function iv(r=$t()){return/blackberry/i.test(r)}function sv(r=$t()){return/webos/i.test(r)}function Cf(r=$t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function aS(r=$t()){var e;return Cf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function lS(){return TT()&&document.documentMode===10}function ov(r=$t()){return Cf(r)||rv(r)||sv(r)||iv(r)||/windows phone/i.test(r)||nv(r)}/**
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
 */function av(r,e=[]){let t;switch(r){case"Browser":t=sy($t());break;case"Worker":t=`${sy($t())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Uo}/${s}`}/**
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
 */class uS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,m)=>{try{const g=e(l);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function cS(r,e={}){return Mi(r,"GET","/v2/passwordPolicy",Oi(r,e))}/**
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
 */const hS=6;class dS{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??hS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class fS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oy(this),this.idTokenSubscription=new oy(this),this.beforeStateQueue=new uS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=W_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Co.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dc(this,{idToken:e}),s=await Mn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(En(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(Lr(this));const t=e?gt(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cS(this),t=new dS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await oS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=av(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&BI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Cs(r){return gt(r)}class oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=PT(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pS(r){Dc=r}function lv(r){return Dc.loadJS(r)}function mS(){return Dc.recaptchaEnterpriseScript}function gS(){return Dc.gapiScript}function yS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class _S{constructor(){this.enterprise=new vS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wS="recaptcha-enterprise",uv="NO_RECAPTCHA";class ES{constructor(e){this.type=wS,this.auth=Cs(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,m)=>{XI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new JI(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(l,h,m){const g=window.grecaptcha;ty(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(uv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _S().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(m=>{if(!t&&ty(window.grecaptcha))o(m,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=mS();g.length!==0&&(g+=m),lv(g).then(()=>{o(m,l,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function ay(r,e,t,s=!1,o=!1){const l=new ES(r);let h;if(o)h=uv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function ef(r,e,t,s,o){var l;if((l=r._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await ay(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await ay(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function TS(r,e){const t=Fo(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(_s(l,e??{}))return o;Un(o,"already-initialized")}return t.initialize({options:e})}function IS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Or);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function SS(r,e,t){const s=Cs(r);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=cv(e),{host:h,port:m}=AS(e),g=m===null?"":`:${m}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(_s(_,s.config.emulator)&&_s(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,pl(h)?U_(`${l}//${h}${g}`):kS()}function cv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function AS(r){const e=cv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:ly(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:ly(h)}}}function ly(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function kS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Pf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function RS(r,e){return Mi(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function CS(r,e){return gl(r,"POST","/v1/accounts:signInWithPassword",Oi(r,e))}/**
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
 */async function PS(r,e){return gl(r,"POST","/v1/accounts:signInWithEmailLink",Oi(r,e))}async function xS(r,e){return gl(r,"POST","/v1/accounts:signInWithEmailLink",Oi(r,e))}/**
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
 */class rl extends Pf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new rl(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new rl(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ef(e,t,"signInWithPassword",CS);case"emailLink":return PS(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ef(e,s,"signUpPassword",RS);case"emailLink":return xS(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Po(r,e){return gl(r,"POST","/v1/accounts:signInWithIdp",Oi(r,e))}/**
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
 */const NS="http://localhost";class vs extends Pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new vs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Po(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Po(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Po(e,t)}buildRequest(){const e={requestUri:NS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fl(t)}return e}}/**
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
 */function DS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bS(r){const e=$a(qa(r)).link,t=e?$a(qa(e)).deep_link_id:null,s=$a(qa(r)).deep_link_id;return(s?$a(qa(s)).link:null)||s||t||e||r}class xf{constructor(e){const t=$a(qa(e)),s=t.apiKey??null,o=t.oobCode??null,l=DS(t.mode??null);de(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=bS(e);try{return new xf(t)}catch{return null}}}/**
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
 */class jo{constructor(){this.providerId=jo.PROVIDER_ID}static credential(e,t){return rl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=xf.parseLink(t);return de(s,"argument-error"),rl._fromEmailAndCode(e,s.code,s.tenantId)}}jo.PROVIDER_ID="password";jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yl extends hv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ei extends yl{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";/**
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
 */class Ti extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vs._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ti.credential(t,s)}catch{return null}}}Ti.GOOGLE_SIGN_IN_METHOD="google.com";Ti.PROVIDER_ID="google.com";/**
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
 */class Ii extends yl{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.GITHUB_SIGN_IN_METHOD="github.com";Ii.PROVIDER_ID="github.com";/**
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
 */class Si extends yl{constructor(){super("twitter.com")}static credential(e,t){return vs._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Si.credential(t,s)}catch{return null}}}Si.TWITTER_SIGN_IN_METHOD="twitter.com";Si.PROVIDER_ID="twitter.com";/**
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
 */async function VS(r,e){return gl(r,"POST","/v1/accounts:signUp",Oi(r,e))}/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Mn._fromIdTokenResponse(e,s,o),h=uy(s);return new ws({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=uy(s);return new ws({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function uy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class pc extends pr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new pc(e,t,s,o)}}function dv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(r,l,e,s):l})}async function OS(r,e,t=!1){const s=await nl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ws._forOperation(r,"link",s)}/**
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
 */async function MS(r,e,t=!1){const{auth:s}=r;if(En(s.app))return Promise.reject(Lr(s));const o="reauthenticate";try{const l=await nl(r,dv(s,o,e,r),t);de(l.idToken,s,"internal-error");const h=Rf(l.idToken);de(h,s,"internal-error");const{sub:m}=h;return de(r.uid===m,s,"user-mismatch"),ws._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Un(s,"user-mismatch"),l}}/**
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
 */async function fv(r,e,t=!1){if(En(r.app))return Promise.reject(Lr(r));const s="signIn",o=await dv(r,s,e),l=await ws._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function LS(r,e){return fv(Cs(r),e)}/**
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
 */async function pv(r){const e=Cs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FS(r,e,t){if(En(r.app))return Promise.reject(Lr(r));const s=Cs(r),h=await ef(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&pv(r),g}),m=await ws._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function US(r,e,t){return En(r.app)?Promise.reject(Lr(r)):LS(gt(r),jo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&pv(r),s})}function jS(r,e,t,s){return gt(r).onIdTokenChanged(e,t,s)}function zS(r,e,t){return gt(r).beforeAuthStateChanged(e,t)}function ec(r){return gt(r).signOut()}const mc="__sak";/**
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
 */class mv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BS=1e3,$S=10;class gv extends mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);lS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,$S):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},BS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gv.type="LOCAL";const qS=gv;/**
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
 */class yv extends mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yv.type="SESSION";const _v=yv;/**
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
 */function HS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new bc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,l)),g=await HS(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
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
 */function Nf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class WS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((m,g)=>{const _=Nf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const V=R;if(V.data.eventId===_)switch(V.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(V.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function lr(){return window}function KS(r){lr().location.href=r}/**
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
 */function vv(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function GS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function YS(){return vv()?self:null}/**
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
 */const wv="firebaseLocalStorageDb",JS=1,gc="firebaseLocalStorage",Ev="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vc(r,e){return r.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function XS(){const r=indexedDB.deleteDatabase(wv);return new _l(r).toPromise()}function tf(){const r=indexedDB.open(wv,JS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(gc,{keyPath:Ev})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(gc)?e(s):(s.close(),await XS(),e(await tf()))})})}async function cy(r,e,t){const s=Vc(r,!0).put({[Ev]:e,value:t});return new _l(s).toPromise()}async function ZS(r,e){const t=Vc(r,!1).get(e),s=await new _l(t).toPromise();return s===void 0?null:s.value}function hy(r,e){const t=Vc(r,!0).delete(e);return new _l(t).toPromise()}const eA=800,tA=3;class Tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>tA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(YS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await GS(),!this.activeServiceWorker)return;this.sender=new WS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tf();return await cy(e,mc,"1"),await hy(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>cy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ZS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Vc(o,!1).getAll();return new _l(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tv.type="LOCAL";const nA=Tv;new ml(3e4,6e4);/**
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
 */function rA(r,e){return e?Or(e):(de(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Df extends Pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Po(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Po(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Po(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iA(r){return fv(r.auth,new Df(r),r.bypassAuthState)}function sA(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),MS(t,new Df(r),r.bypassAuthState)}async function oA(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),OS(t,new Df(r),r.bypassAuthState)}/**
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
 */class Iv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iA;case"linkViaPopup":case"linkViaRedirect":return oA;case"reauthViaPopup":case"reauthViaRedirect":return sA;default:Un(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aA=new ml(2e3,1e4);class ko extends Iv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=Nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aA.get())};e()}}ko.currentPopupAction=null;/**
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
 */const lA="pendingRedirect",tc=new Map;class uA extends Iv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const s=await cA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cA(r,e){const t=fA(e),s=dA(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function hA(r,e){tc.set(r._key(),e)}function dA(r){return Or(r._redirectPersistence)}function fA(r){return Zu(lA,r.config.apiKey,r.name)}async function pA(r,e,t=!1){if(En(r.app))return Promise.reject(Lr(r));const s=Cs(r),o=rA(s,e),h=await new uA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const mA=600*1e3;class gA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Sv(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(ar(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mA&&this.cachedEventUids.clear(),this.cachedEventUids.has(dy(e))}saveEventToCache(e){this.cachedEventUids.add(dy(e)),this.lastProcessedEventTime=Date.now()}}function dy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Sv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sv(r);default:return!1}}/**
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
 */async function _A(r,e={}){return Mi(r,"GET","/v1/projects",e)}/**
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
 */const vA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wA=/^https?/;async function EA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await _A(r);for(const t of e)try{if(TA(t))return}catch{}Un(r,"unauthorized-domain")}function TA(r){const e=Xd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!wA.test(t))return!1;if(vA.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const IA=new ml(3e4,6e4);function fy(){const r=lr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function SA(r){return new Promise((e,t)=>{var o,l,h;function s(){fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fy(),t(ar(r,"network-request-failed"))},timeout:IA.get()})}if((l=(o=lr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=lr().gapi)!=null&&h.load)s();else{const m=yS("iframefcb");return lr()[m]=()=>{gapi.load?s():t(ar(r,"network-request-failed"))},lv(`${gS()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw nc=null,e})}let nc=null;function AA(r){return nc=nc||SA(r),nc}/**
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
 */const kA=new ml(5e3,15e3),RA="__/auth/iframe",CA="emulator/auth/iframe",PA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NA(r){const e=r.config;de(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?kf(e,CA):`https://${r.config.authDomain}/${RA}`,s={apiKey:e.apiKey,appName:r.name,v:Uo},o=xA.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${fl(s).slice(1)}`}async function DA(r){const e=await AA(r),t=lr().gapi;return de(t,r,"internal-error"),e.open({where:document.body,url:NA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PA,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=ar(r,"network-request-failed"),m=lr().setTimeout(()=>{l(h)},kA.get());function g(){lr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const bA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VA=500,OA=600,MA="_blank",LA="http://localhost";class py{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FA(r,e,t,s=VA,o=OA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...bA,width:s.toString(),height:o.toString(),top:l,left:h},_=$t().toLowerCase();t&&(m=tv(_)?MA:t),Z_(_)&&(e=e||LA,g.scrollbars="yes");const E=Object.entries(g).reduce((V,[z,Y])=>`${V}${z}=${Y},`,"");if(aS(_)&&m!=="_self")return UA(e||"",m),new py(null);const R=window.open(e||"",m,E);de(R,r,"popup-blocked");try{R.focus()}catch{}return new py(R)}function UA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const jA="__/auth/handler",zA="emulator/auth/handler",BA=encodeURIComponent("fac");async function my(r,e,t,s,o,l){de(r.config.authDomain,r,"auth-domain-config-required"),de(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Uo,eventId:o};if(e instanceof hv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",CT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,R]of Object.entries({}))h[E]=R}if(e instanceof yl){const E=e.getScopes().filter(R=>R!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),_=g?`#${BA}=${encodeURIComponent(g)}`:"";return`${$A(r)}?${fl(m).slice(1)}${_}`}function $A({config:r}){return r.emulator?kf(r,zA):`https://${r.authDomain}/${jA}`}/**
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
 */const Md="webStorageSupport";class qA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_v,this._completeRedirectFn=pA,this._overrideRedirectResult=hA}async _openPopup(e,t,s,o){var h;jr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await my(e,t,s,Xd(),o);return FA(e,l,Nf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await my(e,t,s,Xd(),o);return KS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await DA(e),s=new gA(e);return t.register("authEvent",o=>(de(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Md,{type:Md},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[Md];l!==void 0&&t(!!l),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=EA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ov()||ev()||Cf()}}const HA=qA;var gy="@firebase/auth",yy="1.12.2";/**
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
 */class WA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GA(r){dr(new Fn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;de(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:av(r)},_=new fS(s,o,l,g);return IS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),dr(new Fn("auth-internal",e=>{const t=Cs(e.getProvider("auth").getImmediate());return(s=>new WA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(gy,yy,KA(r)),In(gy,yy,"esm2020")}/**
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
 */const QA=300,YA=M_("authIdTokenMaxAge")||QA;let _y=null;const JA=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>YA)return;const o=t==null?void 0:t.token;_y!==o&&(_y=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function XA(r=Sf()){const e=Fo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=TS(r,{popupRedirectResolver:HA,persistence:[nA,qS,_v]}),s=M_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=JA(l.toString());zS(t,h,()=>h(t.currentUser)),jS(t,m=>h(m))}}const o=V_("auth");return o&&SS(t,`http://${o}`),t}function ZA(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}pS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=ar("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",ZA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GA("Browser");const Av="@firebase/installations",bf="0.6.21";/**
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
 */const kv=1e4,Rv=`w:${bf}`,Cv="FIS_v2",e1="https://firebaseinstallations.googleapis.com/v1",t1=3600*1e3,n1="installations",r1="Installations";/**
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
 */const i1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Es=new Rs(n1,r1,i1);function Pv(r){return r instanceof pr&&r.code.includes("request-failed")}/**
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
 */function xv({projectId:r}){return`${e1}/projects/${r}/installations`}function Nv(r){return{token:r.token,requestStatus:2,expiresIn:o1(r.expiresIn),creationTime:Date.now()}}async function Dv(r,e){const s=(await e.json()).error;return Es.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function bv({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function s1(r,{refreshToken:e}){const t=bv(r);return t.append("Authorization",a1(e)),t}async function Vv(r){const e=await r();return e.status>=500&&e.status<600?r():e}function o1(r){return Number(r.replace("s","000"))}function a1(r){return`${Cv} ${r}`}/**
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
 */async function l1({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=xv(r),o=bv(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:Cv,appId:r.appId,sdkVersion:Rv},m={method:"POST",headers:o,body:JSON.stringify(h)},g=await Vv(()=>fetch(s,m));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:Nv(_.authToken)}}else throw await Dv("Create Installation",g)}/**
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
 */function Ov(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function u1(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const c1=/^[cdef][\w-]{21}$/,nf="";function h1(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=d1(r);return c1.test(t)?t:nf}catch{return nf}}function d1(r){return u1(r).substr(0,22)}/**
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
 */function Oc(r){return`${r.appName}!${r.appId}`}/**
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
 */const Mv=new Map;function Lv(r,e){const t=Oc(r);Fv(t,e),f1(t,e)}function Fv(r,e){const t=Mv.get(r);if(t)for(const s of t)s(e)}function f1(r,e){const t=p1();t&&t.postMessage({key:r,fid:e}),m1()}let ms=null;function p1(){return!ms&&"BroadcastChannel"in self&&(ms=new BroadcastChannel("[Firebase] FID Change"),ms.onmessage=r=>{Fv(r.data.key,r.data.fid)}),ms}function m1(){Mv.size===0&&ms&&(ms.close(),ms=null)}/**
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
 */const g1="firebase-installations-database",y1=1,Ts="firebase-installations-store";let Ld=null;function Vf(){return Ld||(Ld=Nc(g1,y1,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Ts)}}})),Ld}async function yc(r,e){const t=Oc(r),o=(await Vf()).transaction(Ts,"readwrite"),l=o.objectStore(Ts),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&Lv(r,e.fid),e}async function Uv(r){const e=Oc(r),s=(await Vf()).transaction(Ts,"readwrite");await s.objectStore(Ts).delete(e),await s.done}async function Mc(r,e){const t=Oc(r),o=(await Vf()).transaction(Ts,"readwrite"),l=o.objectStore(Ts),h=await l.get(t),m=e(h);return m===void 0?await l.delete(t):await l.put(m,t),await o.done,m&&(!h||h.fid!==m.fid)&&Lv(r,m.fid),m}/**
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
 */async function Of(r){let e;const t=await Mc(r.appConfig,s=>{const o=_1(s),l=v1(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===nf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function _1(r){const e=r||{fid:h1(),registrationStatus:0};return jv(e)}function v1(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Es.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=w1(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:E1(r)}:{installationEntry:e}}async function w1(r,e){try{const t=await l1(r,e);return yc(r.appConfig,t)}catch(t){throw Pv(t)&&t.customData.serverCode===409?await Uv(r.appConfig):await yc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function E1(r){let e=await vy(r.appConfig);for(;e.registrationStatus===1;)await Ov(100),e=await vy(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Of(r);return s||t}return e}function vy(r){return Mc(r,e=>{if(!e)throw Es.create("installation-not-found");return jv(e)})}function jv(r){return T1(r)?{fid:r.fid,registrationStatus:0}:r}function T1(r){return r.registrationStatus===1&&r.registrationTime+kv<Date.now()}/**
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
 */async function I1({appConfig:r,heartbeatServiceProvider:e},t){const s=S1(r,t),o=s1(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:Rv,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(h)},g=await Vv(()=>fetch(s,m));if(g.ok){const _=await g.json();return Nv(_)}else throw await Dv("Generate Auth Token",g)}function S1(r,{fid:e}){return`${xv(r)}/${e}/authTokens:generate`}/**
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
 */async function Mf(r,e=!1){let t;const s=await Mc(r.appConfig,l=>{if(!zv(l))throw Es.create("not-registered");const h=l.authToken;if(!e&&R1(h))return l;if(h.requestStatus===1)return t=A1(r,e),l;{if(!navigator.onLine)throw Es.create("app-offline");const m=P1(l);return t=k1(r,m),m}});return t?await t:s.authToken}async function A1(r,e){let t=await wy(r.appConfig);for(;t.authToken.requestStatus===1;)await Ov(100),t=await wy(r.appConfig);const s=t.authToken;return s.requestStatus===0?Mf(r,e):s}function wy(r){return Mc(r,e=>{if(!zv(e))throw Es.create("not-registered");const t=e.authToken;return x1(t)?{...e,authToken:{requestStatus:0}}:e})}async function k1(r,e){try{const t=await I1(r,e),s={...e,authToken:t};return await yc(r.appConfig,s),t}catch(t){if(Pv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Uv(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await yc(r.appConfig,s)}throw t}}function zv(r){return r!==void 0&&r.registrationStatus===2}function R1(r){return r.requestStatus===2&&!C1(r)}function C1(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+t1}function P1(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function x1(r){return r.requestStatus===1&&r.requestTime+kv<Date.now()}/**
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
 */async function N1(r){const e=r,{installationEntry:t,registrationPromise:s}=await Of(e);return s?s.catch(console.error):Mf(e).catch(console.error),t.fid}/**
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
 */async function D1(r,e=!1){const t=r;return await b1(t),(await Mf(t,e)).token}async function b1(r){const{registrationPromise:e}=await Of(r);e&&await e}/**
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
 */function V1(r){if(!r||!r.options)throw Fd("App Configuration");if(!r.name)throw Fd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Fd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Fd(r){return Es.create("missing-app-config-values",{valueName:r})}/**
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
 */const Bv="installations",O1="installations-internal",M1=r=>{const e=r.getProvider("app").getImmediate(),t=V1(e),s=Fo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},L1=r=>{const e=r.getProvider("app").getImmediate(),t=Fo(e,Bv).getImmediate();return{getId:()=>N1(t),getToken:o=>D1(t,o)}};function F1(){dr(new Fn(Bv,M1,"PUBLIC")),dr(new Fn(O1,L1,"PRIVATE"))}F1();In(Av,bf);In(Av,bf,"esm2020");/**
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
 */const U1="/firebase-messaging-sw.js",j1="/firebase-cloud-messaging-push-scope",$v="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",z1="https://fcmregistrations.googleapis.com/v1",qv="google.c.a.c_id",B1="google.c.a.c_l",$1="google.c.a.ts",q1="google.c.a.e",Ey=1e4;var Ty;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ty||(Ty={}));/**
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
 */var il;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(il||(il={}));/**
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
 */function br(r){const e=new Uint8Array(r);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function H1(r){const e="=".repeat((4-r.length%4)%4),t=(r+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(t),o=new Uint8Array(s.length);for(let l=0;l<s.length;++l)o[l]=s.charCodeAt(l);return o}/**
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
 */const Ud="fcm_token_details_db",W1=5,Iy="fcm_token_object_Store";async function K1(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Ud))return null;let e=null;return(await Nc(Ud,W1,{upgrade:async(s,o,l,h)=>{if(o<2||!s.objectStoreNames.contains(Iy))return;const m=h.objectStore(Iy),g=await m.index("fcmSenderId").get(r);if(await m.clear(),!!g){if(o===2){const _=g;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:_.createTime??Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:br(_.vapidKey)}}}else if(o===3){const _=g;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:br(_.auth),p256dh:br(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:br(_.vapidKey)}}}else if(o===4){const _=g;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:br(_.auth),p256dh:br(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:br(_.vapidKey)}}}}}})).close(),await Dd(Ud),await Dd("fcm_vapid_details_db"),await Dd("undefined"),G1(e)?e:null}function G1(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:e}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Q1="firebase-messaging-database",Y1=1,sl="firebase-messaging-store";let jd=null;function Hv(){return jd||(jd=Nc(Q1,Y1,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(sl)}}})),jd}async function J1(r){const e=Wv(r),s=await(await Hv()).transaction(sl).objectStore(sl).get(e);if(s)return s;{const o=await K1(r.appConfig.senderId);if(o)return await Lf(r,o),o}}async function Lf(r,e){const t=Wv(r),o=(await Hv()).transaction(sl,"readwrite");return await o.objectStore(sl).put(e,t),await o.done,e}function Wv({appConfig:r}){return r.appId}/**
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
 */const X1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Bt=new Rs("messaging","Messaging",X1);/**
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
 */async function Z1(r,e){const t=await Uf(r),s=Kv(e),o={method:"POST",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(Ff(r.appConfig),o)).json()}catch(h){throw Bt.create("token-subscribe-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw Bt.create("token-subscribe-failed",{errorInfo:h})}if(!l.token)throw Bt.create("token-subscribe-no-token");return l.token}async function ek(r,e){const t=await Uf(r),s=Kv(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(`${Ff(r.appConfig)}/${e.token}`,o)).json()}catch(h){throw Bt.create("token-update-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw Bt.create("token-update-failed",{errorInfo:h})}if(!l.token)throw Bt.create("token-update-no-token");return l.token}async function tk(r,e){const s={method:"DELETE",headers:await Uf(r)};try{const l=await(await fetch(`${Ff(r.appConfig)}/${e}`,s)).json();if(l.error){const h=l.error.message;throw Bt.create("token-unsubscribe-failed",{errorInfo:h})}}catch(o){throw Bt.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Ff({projectId:r}){return`${z1}/projects/${r}/registrations`}async function Uf({appConfig:r,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Kv({p256dh:r,auth:e,endpoint:t,vapidKey:s}){const o={web:{endpoint:t,auth:e,p256dh:r}};return s!==$v&&(o.web.applicationPubKey=s),o}/**
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
 */const nk=10080*60*1e3;async function rk(r){const e=await sk(r.swRegistration,r.vapidKey),t={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:e.endpoint,auth:br(e.getKey("auth")),p256dh:br(e.getKey("p256dh"))},s=await J1(r.firebaseDependencies);if(s){if(ok(s.subscriptionOptions,t))return Date.now()>=s.createTime+nk?ik(r,{token:s.token,createTime:Date.now(),subscriptionOptions:t}):s.token;try{await tk(r.firebaseDependencies,s.token)}catch(o){console.warn(o)}return Sy(r.firebaseDependencies,t)}else return Sy(r.firebaseDependencies,t)}async function ik(r,e){try{const t=await ek(r.firebaseDependencies,e),s={...e,token:t,createTime:Date.now()};return await Lf(r.firebaseDependencies,s),t}catch(t){throw t}}async function Sy(r,e){const s={token:await Z1(r,e),createTime:Date.now(),subscriptionOptions:e};return await Lf(r,s),s.token}async function sk(r,e){const t=await r.pushManager.getSubscription();return t||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:H1(e)})}function ok(r,e){const t=e.vapidKey===r.vapidKey,s=e.endpoint===r.endpoint,o=e.auth===r.auth,l=e.p256dh===r.p256dh;return t&&s&&o&&l}/**
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
 */function Ay(r){const e={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return ak(e,r),lk(e,r),uk(e,r),e}function ak(r,e){if(!e.notification)return;r.notification={};const t=e.notification.title;t&&(r.notification.title=t);const s=e.notification.body;s&&(r.notification.body=s);const o=e.notification.image;o&&(r.notification.image=o);const l=e.notification.icon;l&&(r.notification.icon=l)}function lk(r,e){e.data&&(r.data=e.data)}function uk(r,e){var o,l,h,m;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;r.fcmOptions={};const t=((l=e.fcmOptions)==null?void 0:l.link)??((h=e.notification)==null?void 0:h.click_action);t&&(r.fcmOptions.link=t);const s=(m=e.fcmOptions)==null?void 0:m.analytics_label;s&&(r.fcmOptions.analyticsLabel=s)}/**
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
 */function ck(r){return typeof r=="object"&&!!r&&qv in r}/**
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
 */function hk(r){if(!r||!r.options)throw zd("App Configuration Object");if(!r.name)throw zd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=r;for(const s of e)if(!t[s])throw zd(s);return{appName:r.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function zd(r){return Bt.create("missing-app-config-values",{valueName:r})}/**
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
 */class dk{constructor(e,t,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=hk(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function fk(r){try{r.swRegistration=await navigator.serviceWorker.register(U1,{scope:j1}),r.swRegistration.update().catch(()=>{}),await pk(r.swRegistration)}catch(e){throw Bt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function pk(r){return new Promise((e,t)=>{const s=setTimeout(()=>t(new Error(`Service worker not registered after ${Ey} ms`)),Ey),o=r.installing||r.waiting;r.active?(clearTimeout(s),e()):o?o.onstatechange=l=>{var h;((h=l.target)==null?void 0:h.state)==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),t(new Error("No incoming service worker found.")))})}/**
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
 */async function mk(r,e){if(!e&&!r.swRegistration&&await fk(r),!(!e&&r.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Bt.create("invalid-sw-registration");r.swRegistration=e}}/**
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
 */async function gk(r,e){e?r.vapidKey=e:r.vapidKey||(r.vapidKey=$v)}/**
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
 */async function Gv(r,e){if(!navigator)throw Bt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Bt.create("permission-blocked");return await gk(r,e==null?void 0:e.vapidKey),await mk(r,e==null?void 0:e.serviceWorkerRegistration),rk(r)}/**
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
 */async function yk(r,e,t){const s=_k(e);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:t[qv],message_name:t[B1],message_time:t[$1],message_device_time:Math.floor(Date.now()/1e3)})}function _k(r){switch(r){case il.NOTIFICATION_CLICKED:return"notification_open";case il.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function vk(r,e){const t=e.data;if(!t.isFirebaseMessaging)return;r.onMessageHandler&&t.messageType===il.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(Ay(t)):r.onMessageHandler.next(Ay(t)));const s=t.data;ck(s)&&s[q1]==="1"&&await yk(r,t.messageType,s)}const ky="@firebase/messaging",Ry="0.12.25";/**
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
 */const wk=r=>{const e=new dk(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>vk(e,t)),e},Ek=r=>{const e=r.getProvider("messaging").getImmediate();return{getToken:s=>Gv(e,s)}};function Tk(){dr(new Fn("messaging",wk,"PUBLIC")),dr(new Fn("messaging-internal",Ek,"PRIVATE")),In(ky,Ry),In(ky,Ry,"esm2020")}/**
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
 */async function Ik(){try{await F_()}catch{return!1}return typeof window<"u"&&L_()&&ST()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Sk(r,e){if(!navigator)throw Bt.create("only-available-in-window");return r.onMessageHandler=e,()=>{r.onMessageHandler=null}}/**
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
 */function Ak(r=Sf()){return Ik().then(e=>{if(!e)throw Bt.create("unsupported-browser")},e=>{throw Bt.create("indexed-db-unsupported")}),Fo(gt(r),"messaging").getImmediate()}async function kk(r,e){return r=gt(r),Gv(r,e)}function Rk(r,e){return r=gt(r),Sk(r,e)}Tk();var Cy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,Qv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,T){function I(){}I.prototype=T.prototype,A.F=T.prototype,A.prototype=new I,A.prototype.constructor=A,A.D=function(P,C,O){for(var k=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)k[ze-2]=arguments[ze];return T.prototype[C].apply(P,k)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(A,T,I){I||(I=0);const P=Array(16);if(typeof T=="string")for(var C=0;C<16;++C)P[C]=T.charCodeAt(I++)|T.charCodeAt(I++)<<8|T.charCodeAt(I++)<<16|T.charCodeAt(I++)<<24;else for(C=0;C<16;++C)P[C]=T[I++]|T[I++]<<8|T[I++]<<16|T[I++]<<24;T=A.g[0],I=A.g[1],C=A.g[2];let O=A.g[3],k;k=T+(O^I&(C^O))+P[0]+3614090360&4294967295,T=I+(k<<7&4294967295|k>>>25),k=O+(C^T&(I^C))+P[1]+3905402710&4294967295,O=T+(k<<12&4294967295|k>>>20),k=C+(I^O&(T^I))+P[2]+606105819&4294967295,C=O+(k<<17&4294967295|k>>>15),k=I+(T^C&(O^T))+P[3]+3250441966&4294967295,I=C+(k<<22&4294967295|k>>>10),k=T+(O^I&(C^O))+P[4]+4118548399&4294967295,T=I+(k<<7&4294967295|k>>>25),k=O+(C^T&(I^C))+P[5]+1200080426&4294967295,O=T+(k<<12&4294967295|k>>>20),k=C+(I^O&(T^I))+P[6]+2821735955&4294967295,C=O+(k<<17&4294967295|k>>>15),k=I+(T^C&(O^T))+P[7]+4249261313&4294967295,I=C+(k<<22&4294967295|k>>>10),k=T+(O^I&(C^O))+P[8]+1770035416&4294967295,T=I+(k<<7&4294967295|k>>>25),k=O+(C^T&(I^C))+P[9]+2336552879&4294967295,O=T+(k<<12&4294967295|k>>>20),k=C+(I^O&(T^I))+P[10]+4294925233&4294967295,C=O+(k<<17&4294967295|k>>>15),k=I+(T^C&(O^T))+P[11]+2304563134&4294967295,I=C+(k<<22&4294967295|k>>>10),k=T+(O^I&(C^O))+P[12]+1804603682&4294967295,T=I+(k<<7&4294967295|k>>>25),k=O+(C^T&(I^C))+P[13]+4254626195&4294967295,O=T+(k<<12&4294967295|k>>>20),k=C+(I^O&(T^I))+P[14]+2792965006&4294967295,C=O+(k<<17&4294967295|k>>>15),k=I+(T^C&(O^T))+P[15]+1236535329&4294967295,I=C+(k<<22&4294967295|k>>>10),k=T+(C^O&(I^C))+P[1]+4129170786&4294967295,T=I+(k<<5&4294967295|k>>>27),k=O+(I^C&(T^I))+P[6]+3225465664&4294967295,O=T+(k<<9&4294967295|k>>>23),k=C+(T^I&(O^T))+P[11]+643717713&4294967295,C=O+(k<<14&4294967295|k>>>18),k=I+(O^T&(C^O))+P[0]+3921069994&4294967295,I=C+(k<<20&4294967295|k>>>12),k=T+(C^O&(I^C))+P[5]+3593408605&4294967295,T=I+(k<<5&4294967295|k>>>27),k=O+(I^C&(T^I))+P[10]+38016083&4294967295,O=T+(k<<9&4294967295|k>>>23),k=C+(T^I&(O^T))+P[15]+3634488961&4294967295,C=O+(k<<14&4294967295|k>>>18),k=I+(O^T&(C^O))+P[4]+3889429448&4294967295,I=C+(k<<20&4294967295|k>>>12),k=T+(C^O&(I^C))+P[9]+568446438&4294967295,T=I+(k<<5&4294967295|k>>>27),k=O+(I^C&(T^I))+P[14]+3275163606&4294967295,O=T+(k<<9&4294967295|k>>>23),k=C+(T^I&(O^T))+P[3]+4107603335&4294967295,C=O+(k<<14&4294967295|k>>>18),k=I+(O^T&(C^O))+P[8]+1163531501&4294967295,I=C+(k<<20&4294967295|k>>>12),k=T+(C^O&(I^C))+P[13]+2850285829&4294967295,T=I+(k<<5&4294967295|k>>>27),k=O+(I^C&(T^I))+P[2]+4243563512&4294967295,O=T+(k<<9&4294967295|k>>>23),k=C+(T^I&(O^T))+P[7]+1735328473&4294967295,C=O+(k<<14&4294967295|k>>>18),k=I+(O^T&(C^O))+P[12]+2368359562&4294967295,I=C+(k<<20&4294967295|k>>>12),k=T+(I^C^O)+P[5]+4294588738&4294967295,T=I+(k<<4&4294967295|k>>>28),k=O+(T^I^C)+P[8]+2272392833&4294967295,O=T+(k<<11&4294967295|k>>>21),k=C+(O^T^I)+P[11]+1839030562&4294967295,C=O+(k<<16&4294967295|k>>>16),k=I+(C^O^T)+P[14]+4259657740&4294967295,I=C+(k<<23&4294967295|k>>>9),k=T+(I^C^O)+P[1]+2763975236&4294967295,T=I+(k<<4&4294967295|k>>>28),k=O+(T^I^C)+P[4]+1272893353&4294967295,O=T+(k<<11&4294967295|k>>>21),k=C+(O^T^I)+P[7]+4139469664&4294967295,C=O+(k<<16&4294967295|k>>>16),k=I+(C^O^T)+P[10]+3200236656&4294967295,I=C+(k<<23&4294967295|k>>>9),k=T+(I^C^O)+P[13]+681279174&4294967295,T=I+(k<<4&4294967295|k>>>28),k=O+(T^I^C)+P[0]+3936430074&4294967295,O=T+(k<<11&4294967295|k>>>21),k=C+(O^T^I)+P[3]+3572445317&4294967295,C=O+(k<<16&4294967295|k>>>16),k=I+(C^O^T)+P[6]+76029189&4294967295,I=C+(k<<23&4294967295|k>>>9),k=T+(I^C^O)+P[9]+3654602809&4294967295,T=I+(k<<4&4294967295|k>>>28),k=O+(T^I^C)+P[12]+3873151461&4294967295,O=T+(k<<11&4294967295|k>>>21),k=C+(O^T^I)+P[15]+530742520&4294967295,C=O+(k<<16&4294967295|k>>>16),k=I+(C^O^T)+P[2]+3299628645&4294967295,I=C+(k<<23&4294967295|k>>>9),k=T+(C^(I|~O))+P[0]+4096336452&4294967295,T=I+(k<<6&4294967295|k>>>26),k=O+(I^(T|~C))+P[7]+1126891415&4294967295,O=T+(k<<10&4294967295|k>>>22),k=C+(T^(O|~I))+P[14]+2878612391&4294967295,C=O+(k<<15&4294967295|k>>>17),k=I+(O^(C|~T))+P[5]+4237533241&4294967295,I=C+(k<<21&4294967295|k>>>11),k=T+(C^(I|~O))+P[12]+1700485571&4294967295,T=I+(k<<6&4294967295|k>>>26),k=O+(I^(T|~C))+P[3]+2399980690&4294967295,O=T+(k<<10&4294967295|k>>>22),k=C+(T^(O|~I))+P[10]+4293915773&4294967295,C=O+(k<<15&4294967295|k>>>17),k=I+(O^(C|~T))+P[1]+2240044497&4294967295,I=C+(k<<21&4294967295|k>>>11),k=T+(C^(I|~O))+P[8]+1873313359&4294967295,T=I+(k<<6&4294967295|k>>>26),k=O+(I^(T|~C))+P[15]+4264355552&4294967295,O=T+(k<<10&4294967295|k>>>22),k=C+(T^(O|~I))+P[6]+2734768916&4294967295,C=O+(k<<15&4294967295|k>>>17),k=I+(O^(C|~T))+P[13]+1309151649&4294967295,I=C+(k<<21&4294967295|k>>>11),k=T+(C^(I|~O))+P[4]+4149444226&4294967295,T=I+(k<<6&4294967295|k>>>26),k=O+(I^(T|~C))+P[11]+3174756917&4294967295,O=T+(k<<10&4294967295|k>>>22),k=C+(T^(O|~I))+P[2]+718787259&4294967295,C=O+(k<<15&4294967295|k>>>17),k=I+(O^(C|~T))+P[9]+3951481745&4294967295,A.g[0]=A.g[0]+T&4294967295,A.g[1]=A.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+O&4294967295}s.prototype.v=function(A,T){T===void 0&&(T=A.length);const I=T-this.blockSize,P=this.C;let C=this.h,O=0;for(;O<T;){if(C==0)for(;O<=I;)o(this,A,O),O+=this.blockSize;if(typeof A=="string"){for(;O<T;)if(P[C++]=A.charCodeAt(O++),C==this.blockSize){o(this,P),C=0;break}}else for(;O<T;)if(P[C++]=A[O++],C==this.blockSize){o(this,P),C=0;break}}this.h=C,this.o+=T},s.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var T=1;T<A.length-8;++T)A[T]=0;T=this.o*8;for(var I=A.length-8;I<A.length;++I)A[I]=T&255,T/=256;for(this.v(A),A=Array(16),T=0,I=0;I<4;++I)for(let P=0;P<32;P+=8)A[T++]=this.g[I]>>>P&255;return A};function l(A,T){var I=m;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=T(A)}function h(A,T){this.h=T;const I=[];let P=!0;for(let C=A.length-1;C>=0;C--){const O=A[C]|0;P&&O==T||(I[C]=O,P=!1)}this.g=I}var m={};function g(A){return-128<=A&&A<128?l(A,function(T){return new h([T|0],T<0?-1:0)}):new h([A|0],A<0?-1:0)}function _(A){if(isNaN(A)||!isFinite(A))return R;if(A<0)return G(_(-A));const T=[];let I=1;for(let P=0;A>=I;P++)T[P]=A/I|0,I*=4294967296;return new h(T,0)}function E(A,T){if(A.length==0)throw Error("number format error: empty string");if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(A.charAt(0)=="-")return G(E(A.substring(1),T));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=_(Math.pow(T,8));let P=R;for(let O=0;O<A.length;O+=8){var C=Math.min(8,A.length-O);const k=parseInt(A.substring(O,O+C),T);C<8?(C=_(Math.pow(T,C)),P=P.j(C).add(_(k))):(P=P.j(I),P=P.add(_(k)))}return P}var R=g(0),V=g(1),z=g(16777216);r=h.prototype,r.m=function(){if(J(this))return-G(this).m();let A=0,T=1;for(let I=0;I<this.g.length;I++){const P=this.i(I);A+=(P>=0?P:4294967296+P)*T,T*=4294967296}return A},r.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(Y(this))return"0";if(J(this))return"-"+G(this).toString(A);const T=_(Math.pow(A,6));var I=this;let P="";for(;;){const C=Ve(I,T).g;I=me(I,C.j(T));let O=((I.g.length>0?I.g[0]:I.h)>>>0).toString(A);if(I=C,Y(I))return O+P;for(;O.length<6;)O="0"+O;P=O+P}},r.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function Y(A){if(A.h!=0)return!1;for(let T=0;T<A.g.length;T++)if(A.g[T]!=0)return!1;return!0}function J(A){return A.h==-1}r.l=function(A){return A=me(this,A),J(A)?-1:Y(A)?0:1};function G(A){const T=A.g.length,I=[];for(let P=0;P<T;P++)I[P]=~A.g[P];return new h(I,~A.h).add(V)}r.abs=function(){return J(this)?G(this):this},r.add=function(A){const T=Math.max(this.g.length,A.g.length),I=[];let P=0;for(let C=0;C<=T;C++){let O=P+(this.i(C)&65535)+(A.i(C)&65535),k=(O>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);P=k>>>16,O&=65535,k&=65535,I[C]=k<<16|O}return new h(I,I[I.length-1]&-2147483648?-1:0)};function me(A,T){return A.add(G(T))}r.j=function(A){if(Y(this)||Y(A))return R;if(J(this))return J(A)?G(this).j(G(A)):G(G(this).j(A));if(J(A))return G(this.j(G(A)));if(this.l(z)<0&&A.l(z)<0)return _(this.m()*A.m());const T=this.g.length+A.g.length,I=[];for(var P=0;P<2*T;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(let C=0;C<A.g.length;C++){const O=this.i(P)>>>16,k=this.i(P)&65535,ze=A.i(C)>>>16,wt=A.i(C)&65535;I[2*P+2*C]+=k*wt,ge(I,2*P+2*C),I[2*P+2*C+1]+=O*wt,ge(I,2*P+2*C+1),I[2*P+2*C+1]+=k*ze,ge(I,2*P+2*C+1),I[2*P+2*C+2]+=O*ze,ge(I,2*P+2*C+2)}for(A=0;A<T;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=T;A<2*T;A++)I[A]=0;return new h(I,0)};function ge(A,T){for(;(A[T]&65535)!=A[T];)A[T+1]+=A[T]>>>16,A[T]&=65535,T++}function Ee(A,T){this.g=A,this.h=T}function Ve(A,T){if(Y(T))throw Error("division by zero");if(Y(A))return new Ee(R,R);if(J(A))return T=Ve(G(A),T),new Ee(G(T.g),G(T.h));if(J(T))return T=Ve(A,G(T)),new Ee(G(T.g),T.h);if(A.g.length>30){if(J(A)||J(T))throw Error("slowDivide_ only works with positive integers.");for(var I=V,P=T;P.l(A)<=0;)I=Le(I),P=Le(P);var C=Pe(I,1),O=Pe(P,1);for(P=Pe(P,2),I=Pe(I,2);!Y(P);){var k=O.add(P);k.l(A)<=0&&(C=C.add(I),O=k),P=Pe(P,1),I=Pe(I,1)}return T=me(A,C.j(T)),new Ee(C,T)}for(C=R;A.l(T)>=0;){for(I=Math.max(1,Math.floor(A.m()/T.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),O=_(I),k=O.j(T);J(k)||k.l(A)>0;)I-=P,O=_(I),k=O.j(T);Y(O)&&(O=V),C=C.add(O),A=me(A,k)}return new Ee(C,A)}r.B=function(A){return Ve(this,A).h},r.and=function(A){const T=Math.max(this.g.length,A.g.length),I=[];for(let P=0;P<T;P++)I[P]=this.i(P)&A.i(P);return new h(I,this.h&A.h)},r.or=function(A){const T=Math.max(this.g.length,A.g.length),I=[];for(let P=0;P<T;P++)I[P]=this.i(P)|A.i(P);return new h(I,this.h|A.h)},r.xor=function(A){const T=Math.max(this.g.length,A.g.length),I=[];for(let P=0;P<T;P++)I[P]=this.i(P)^A.i(P);return new h(I,this.h^A.h)};function Le(A){const T=A.g.length+1,I=[];for(let P=0;P<T;P++)I[P]=A.i(P)<<1|A.i(P-1)>>>31;return new h(I,A.h)}function Pe(A,T){const I=T>>5;T%=32;const P=A.g.length-I,C=[];for(let O=0;O<P;O++)C[O]=T>0?A.i(O+I)>>>T|A.i(O+I+1)<<32-T:A.i(O+I);return new h(C,A.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Qv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,Ri=h}).apply(typeof Cy<"u"?Cy:typeof self<"u"?self:typeof window<"u"?window:{});var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yv,Ha,Jv,rc,rf,Xv,Zv,ew;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bu=="object"&&Bu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in y))break e;y=y[L]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(p){var y=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&y.push([w,p[w]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function m(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function g(u,p,y){return u.call.apply(u.bind,arguments)}function _(u,p,y){return _=g,_.apply(null,arguments)}function E(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function R(u,p){function y(){}y.prototype=p.prototype,u.Z=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Ob=function(w,L,j){for(var X=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)X[_e-2]=arguments[_e];return p.prototype[L].apply(w,X)}}var V=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function z(u){const p=u.length;if(p>0){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function Y(u,p){for(let w=1;w<arguments.length;w++){const L=arguments[w];var y=typeof L;if(y=y!="object"?y:L?Array.isArray(L)?"array":y:"null",y=="array"||y=="object"&&typeof L.length=="number"){y=u.length||0;const j=L.length||0;u.length=y+j;for(let X=0;X<j;X++)u[y+X]=L[X]}else u.push(L)}}class J{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function G(u){h.setTimeout(()=>{throw u},0)}function me(){var u=A;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ge{constructor(){this.h=this.g=null}add(p,y){const w=Ee.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Ee=new J(()=>new Ve,u=>u.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Pe=!1,A=new ge,T=()=>{const u=Promise.resolve(void 0);Le=()=>{u.then(I)}};function I(){for(var u;u=me();){try{u.h.call(u.g)}catch(y){G(y)}var p=Ee;p.j(u),p.h<100&&(p.h++,u.next=p.g,p.g=u)}Pe=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return u})();function k(u){return/^[\s\xa0]*$/.test(u)}function ze(u,p){C.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,p)}R(ze,C),ze.prototype.init=function(u,p){const y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget,p||(y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&ze.Z.h.call(this)},ze.prototype.h=function(){ze.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var wt="closure_listenable_"+(Math.random()*1e6|0),bt=0;function Ye(u,p,y,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++bt,this.da=this.fa=!1}function Z(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ue(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function N(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function q(u){const p={};for(const y in u)p[y]=u[y];return p}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(u,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)u[y]=w[y];for(let j=0;j<ae.length;j++)y=ae[j],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function we(u){this.src=u,this.g={},this.h=0}we.prototype.add=function(u,p,y,w,L){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const X=Re(u,p,w,L);return X>-1?(p=u[X],y||(p.fa=!1)):(p=new Ye(p,this.src,j,!!w,L),p.fa=y,u.push(p)),p};function Fe(u,p){const y=p.type;if(y in u.g){var w=u.g[y],L=Array.prototype.indexOf.call(w,p,void 0),j;(j=L>=0)&&Array.prototype.splice.call(w,L,1),j&&(Z(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Re(u,p,y,w){for(let L=0;L<u.length;++L){const j=u[L];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==w)return L}return-1}var Oe="closure_lm_"+(Math.random()*1e6|0),xe={};function At(u,p,y,w,L){if(Array.isArray(p)){for(let j=0;j<p.length;j++)At(u,p[j],y,w,L);return null}return y=Ko(y),u&&u[wt]?u.J(p,y,m(w)?!!w.capture:!1,L):eh(u,p,y,!1,w,L)}function eh(u,p,y,w,L,j){if(!p)throw Error("Invalid event type");const X=m(L)?!!L.capture:!!L;let _e=Vs(u);if(_e||(u[Oe]=_e=new we(u)),y=_e.add(p,y,w,X,j),y.proxy)return y;if(w=Ds(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)O||(L=X),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(bs(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ds(){function u(y){return p.call(u.src,u.listener,y)}const p=Al;return u}function Wo(u,p,y,w,L){if(Array.isArray(p))for(var j=0;j<p.length;j++)Wo(u,p[j],y,w,L);else w=m(w)?!!w.capture:!!w,y=Ko(y),u&&u[wt]?(u=u.i,j=String(p).toString(),j in u.g&&(p=u.g[j],y=Re(p,y,w,L),y>-1&&(Z(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete u.g[j],u.h--)))):u&&(u=Vs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Re(p,y,w,L)),(y=u>-1?p[u]:null)&&$r(y))}function $r(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[wt])Fe(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(bs(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=Vs(p))?(Fe(y,u),y.h==0&&(y.src=null,p[Oe]=null)):Z(u)}}}function bs(u){return u in xe?xe[u]:xe[u]="on"+u}function Al(u,p){if(u.da)u=!0;else{p=new ze(p,this);const y=u.listener,w=u.ha||u.src;u.fa&&$r(u),u=y.call(w,p)}return u}function Vs(u){return u=u[Oe],u instanceof we?u:null}var ji="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ko(u){return typeof u=="function"?u:(u[ji]||(u[ji]=function(p){return u.handleEvent(p)}),u[ji])}function ct(){P.call(this),this.i=new we(this),this.M=this,this.G=null}R(ct,P),ct.prototype[wt]=!0,ct.prototype.removeEventListener=function(u,p,y,w){Wo(this,u,p,y,w)};function it(u,p){var y,w=u.G;if(w)for(y=[];w;w=w.G)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new C(p,u);else if(p instanceof C)p.target=p.target||u;else{var L=p;p=new C(w,u),Te(p,L)}L=!0;let j,X;if(y)for(X=y.length-1;X>=0;X--)j=p.g=y[X],L=An(j,w,!0,p)&&L;if(j=p.g=u,L=An(j,w,!0,p)&&L,L=An(j,w,!1,p)&&L,y)for(X=0;X<y.length;X++)j=p.g=y[X],L=An(j,w,!1,p)&&L}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var u=this.i;for(const p in u.g){const y=u.g[p];for(let w=0;w<y.length;w++)Z(y[w]);delete u.g[p],u.h--}}this.G=null},ct.prototype.J=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},ct.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function An(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let j=0;j<p.length;++j){const X=p[j];if(X&&!X.da&&X.capture==y){const _e=X.listener,st=X.ha||X.src;X.fa&&Fe(u.i,X),L=_e.call(st,w)!==!1&&L}}return L&&!w.defaultPrevented}function Go(u,p){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(u,p||0)}function Qo(u){u.g=Go(()=>{u.g=null,u.i&&(u.i=!1,Qo(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class kl extends P{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Qo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(u){P.call(this),this.h=u,this.g={}}R(qr,P);var Yo=[];function Os(u){ue(u.g,function(p,y){this.g.hasOwnProperty(y)&&$r(p)},u),u.g={}}qr.prototype.N=function(){qr.Z.N.call(this),Os(this)},qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hr=h.JSON.stringify,Rl=h.JSON.parse,zi=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Wr(){}function Cl(){}var Kr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ms(){C.call(this,"d")}R(Ms,C);function Jo(){C.call(this,"c")}R(Jo,C);var kn={},Ls=null;function Gr(){return Ls=Ls||new ct}kn.Ia="serverreachability";function Fs(u){C.call(this,kn.Ia,u)}R(Fs,C);function mr(u){const p=Gr();it(p,new Fs(p))}kn.STAT_EVENT="statevent";function gr(u,p){C.call(this,kn.STAT_EVENT,u),this.stat=p}R(gr,C);function tt(u){const p=Gr();it(p,new gr(p,u))}kn.Ja="timingevent";function Xo(u,p){C.call(this,kn.Ja,u),this.size=p}R(Xo,C);function Qr(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},p)}function Yr(){this.g=!0}Yr.prototype.ua=function(){this.g=!1};function Pl(u,p,y,w,L,j){u.info(function(){if(u.g)if(j){var X="",_e=j.split("&");for(let je=0;je<_e.length;je++){var st=_e[je].split("=");if(st.length>1){const ht=st[0];st=st[1];const on=ht.split("_");X=on.length>=2&&on[1]=="type"?X+(ht+"="+st+"&"):X+(ht+"=redacted&")}}}else X=null;else X=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+X})}function xl(u,p,y,w,L,j,X){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+j+" "+X})}function Bn(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Bi(u,y)+(w?" "+w:"")})}function Nl(u,p){u.info(function(){return"TIMEOUT: "+p})}Yr.prototype.info=function(){};function Bi(u,p){if(!u.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var y=j[u];if(!(y.length<2)){var w=y[1];if(Array.isArray(w)&&!(w.length<1)){var L=w[0];if(L!="noop"&&L!="stop"&&L!="close")for(let X=1;X<w.length;X++)w[X]=""}}}}return Hr(j)}catch{return p}}var Jr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dl;function yr(){}R(yr,Wr),yr.prototype.g=function(){return new XMLHttpRequest},Dl=new yr;function $n(u){return encodeURIComponent(String(u))}function Us(u){var p=1;u=u.split(":");const y=[];for(;p>0&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function dn(u,p,y,w){this.j=u,this.i=p,this.l=y,this.S=w||1,this.V=new qr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bl}function bl(){this.i=null,this.g="",this.h=!1}var Vl={},Zo={};function Rn(u,p,y){u.M=1,u.A=vr(fn(p)),u.u=y,u.R=!0,ea(u,null)}function ea(u,p){u.F=Date.now(),$i(u),u.B=fn(u.A);var y=u.B,w=u.S;Array.isArray(w)||(w=[String(w)]),ca(y.i,"t",w),u.C=0,y=u.j.L,u.h=new bl,u.g=ql(u.j,y?p:null,!u.u),u.P>0&&(u.O=new kl(_(u.Y,u,u.g),u.P)),p=u.V,y=u.g,w=u.ba;var L="readystatechange";Array.isArray(L)||(L&&(Yo[0]=L.toString()),L=Yo);for(let j=0;j<L.length;j++){const X=At(y,L[j],w||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=u.J?q(u.J):{},u.u?(u.v||(u.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,p)):(u.v="GET",u.g.ea(u.B,u.v,null,p)),mr(),Pl(u.i,u.v,u.B,u.l,u.S,u.u)}dn.prototype.ba=function(u){u=u.target;const p=this.O;p&&Yn(u)==3?p.j():this.Y(u)},dn.prototype.Y=function(u){try{if(u==this.g)e:{const _e=Yn(this.g),st=this.g.ya(),je=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||Bl(this.g)))){this.K||_e!=4||st==7||(st==8||je<=0?mr(3):mr(2)),js(this);var p=this.g.ca();this.X=p;var y=Ol(this);if(this.o=p==200,xl(this.i,this.v,this.B,this.l,this.S,_e,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,L=this.g;if((w=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(w)){var j=w;break t}}j=null}if(u=j)Bn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,He(this,u);else{this.o=!1,this.m=3,tt(12),_r(this),qi(this);break e}}if(this.R){u=!0;let ht;for(;!this.K&&this.C<y.length;)if(ht=Ll(this,y),ht==Zo){_e==4&&(this.m=4,tt(14),u=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==Vl){this.m=4,tt(15),Bn(this.i,this.l,y,"[Invalid Chunk]"),u=!1;break}else Bn(this.i,this.l,ht,null),He(this,ht);if(Ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||y.length!=0||this.h.h||(this.m=1,tt(16),u=!1),this.o=this.o&&u,!u)Bn(this.i,this.l,y,"[Invalid Chunked Response]"),_r(this),qi(this);else if(y.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Zi(X),X.P=!0,tt(11))}}else Bn(this.i,this.l,y,null),He(this,y);_e==4&&_r(this),this.o&&!this.K&&(_e==4?Ys(this.j,this):(this.o=!1,$i(this)))}else da(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),_r(this),qi(this)}}}catch{}finally{}};function Ol(u){if(!Ml(u))return u.g.la();const p=Bl(u.g);if(p==="")return"";let y="";const w=p.length,L=Yn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return _r(u),qi(u),"";u.h.i=new h.TextDecoder}for(let j=0;j<w;j++)u.h.h=!0,y+=u.h.i.decode(p[j],{stream:!(L&&j==w-1)});return p.length=0,u.h.g+=y,u.C=0,u.h.g}function Ml(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Ll(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?Zo:(y=Number(p.substring(y,w)),isNaN(y)?Vl:(w+=1,w+y>p.length?Zo:(p=p.slice(w,w+y),u.C=w+y,p)))}dn.prototype.cancel=function(){this.K=!0,_r(this)};function $i(u){u.T=Date.now()+u.H,ta(u,u.H)}function ta(u,p){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Qr(_(u.aa,u),p)}function js(u){u.D&&(h.clearTimeout(u.D),u.D=null)}dn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Nl(this.i,this.B),this.M!=2&&(mr(),tt(17)),_r(this),this.m=2,qi(this)):ta(this,this.T-u)};function qi(u){u.j.I==0||u.K||Ys(u.j,u)}function _r(u){js(u);var p=u.O;p&&typeof p.dispose=="function"&&p.dispose(),u.O=null,Os(u.V),u.g&&(p=u.g,u.g=null,p.abort(),p.dispose())}function He(u,p){try{var y=u.j;if(y.I!=0&&(y.g==u||ra(y.h,u))){if(!u.L&&ra(y.h,u)&&y.I==3){try{var w=y.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<u.F)Qs(y),rn(y);else break e;Zn(y),tt(18)}}else y.xa=L[1],0<y.xa-y.K&&L[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Qr(_(y.Va,y),6e3));Hi(y.h)<=1&&y.ta&&(y.ta=void 0)}else sn(y,11)}else if((u.L||y.g==u)&&Qs(y),!k(p))for(L=y.Ba.g.parse(p),p=0;p<L.length;p++){let je=L[p];const ht=je[0];if(!(ht<=y.K))if(y.K=ht,je=je[1],y.I==2)if(je[0]=="c"){y.M=je[1],y.ba=je[2];const on=je[3];on!=null&&(y.ka=on,y.j.info("VER="+y.ka));const Sr=je[4];Sr!=null&&(y.za=Sr,y.j.info("SVER="+y.za));const er=je[5];er!=null&&typeof er=="number"&&er>0&&(w=1.5*er,y.O=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const tr=u.g;if(tr){const Zs=tr.g?tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zs){var j=w.h;j.g||Zs.indexOf("spdy")==-1&&Zs.indexOf("quic")==-1&&Zs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Bs(j,j.h),j.h=null))}if(w.G){const ma=tr.g?tr.g.getResponseHeader("X-HTTP-Session-Id"):null;ma&&(w.wa=ma,Me(w.J,w.G,ma))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-u.F,y.j.info("Handshake RTT: "+y.T+"ms")),w=y;var X=u;if(w.na=pa(w,w.L?w.ba:null,w.W),X.L){Wi(w.h,X);var _e=X,st=w.O;st&&(_e.H=st),_e.D&&(js(_e),$i(_e)),w.g=X}else Vt(w);y.i.length>0&&Ir(y)}else je[0]!="stop"&&je[0]!="close"||sn(y,7);else y.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?sn(y,7):Ks(y):je[0]!="noop"&&y.l&&y.l.qa(je),y.A=0)}}mr(4)}catch{}}var th=class{constructor(u,p){this.g=u,this.map=p}};function zs(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function na(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Hi(u){return u.h?1:u.g?u.g.size:0}function ra(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Bs(u,p){u.g?u.g.add(p):u.h=p}function Wi(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}zs.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function en(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.G);return p}return z(u.i)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tn(u,p){if(u){u=u.split("&");for(let y=0;y<u.length;y++){const w=u[y].indexOf("=");let L,j=null;w>=0?(L=u[y].substring(0,w),j=u[y].substring(w+1)):L=u[y],p(L,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function qn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;u instanceof qn?(this.l=u.l,Ki(this,u.j),this.o=u.o,this.g=u.g,Hn(this,u.u),this.h=u.h,Zr(this,ha(u.i)),this.m=u.m):u&&(p=String(u).match(Fl))?(this.l=!1,Ki(this,p[1]||"",!0),this.o=Gi(p[2]||""),this.g=Gi(p[3]||"",!0),Hn(this,p[4]),this.h=Gi(p[5]||"",!0),Zr(this,p[6]||"",!0),this.m=Gi(p[7]||"")):(this.l=!1,this.i=new Ce(null,this.l))}qn.prototype.toString=function(){const u=[];var p=this.j;p&&u.push(Qi(p,sa,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Qi(p,sa,!0),"@"),u.push($n(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&u.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Qi(y,y.charAt(0)=="/"?Yi:oa,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Qi(y,aa)),u.join("")},qn.prototype.resolve=function(u){const p=fn(this);let y=!!u.j;y?Ki(p,u.j):y=!!u.o,y?p.o=u.o:y=!!u.g,y?p.g=u.g:y=u.u!=null;var w=u.h;if(y)Hn(p,u.u);else if(y=!!u.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var L=p.h.lastIndexOf("/");L!=-1&&(w=p.h.slice(0,L+1)+w)}if(L=w,L==".."||L==".")w="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){w=L.lastIndexOf("/",0)==0,L=L.split("/");const j=[];for(let X=0;X<L.length;){const _e=L[X++];_e=="."?w&&X==L.length&&j.push(""):_e==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),w&&X==L.length&&j.push("")):(j.push(_e),w=!0)}w=j.join("/")}else w=L}return y?p.h=w:y=u.i.toString()!=="",y?Zr(p,ha(u.i)):y=!!u.m,y&&(p.m=u.m),p};function fn(u){return new qn(u)}function Ki(u,p,y){u.j=y?Gi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Hn(u,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);u.u=p}else u.u=null}function Zr(u,p,y){p instanceof Ce?(u.i=p,qs(u.i,u.l)):(y||(p=Qi(p,nh)),u.i=new Ce(p,u.l))}function Me(u,p,y){u.i.set(p,y)}function vr(u){return Me(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Gi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qi(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,ia),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ia(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var sa=/[#\/\?@]/g,oa=/[#\?:]/g,Yi=/[#\?]/g,nh=/[#\?@]/g,aa=/#/g;function Ce(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Wn(u){u.g||(u.g=new Map,u.h=0,u.i&&tn(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Ce.prototype,r.add=function(u,p){Wn(this),this.i=null,u=Kn(this,u);let y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function la(u,p){Wn(u),p=Kn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function $s(u,p){return Wn(u),p=Kn(u,p),u.g.has(p)}r.forEach=function(u,p){Wn(this),this.g.forEach(function(y,w){y.forEach(function(L){u.call(p,L,w,this)},this)},this)};function ua(u,p){Wn(u);let y=[];if(typeof p=="string")$s(u,p)&&(y=y.concat(u.g.get(Kn(u,p))));else for(u=Array.from(u.g.values()),p=0;p<u.length;p++)y=y.concat(u[p]);return y}r.set=function(u,p){return Wn(this),this.i=null,u=Kn(this,u),$s(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=ua(this,u),u.length>0?String(u[0]):p):p};function ca(u,p,y){la(u,p),y.length>0&&(u.i=null,u.g.set(Kn(u,p),z(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var y=p[w];const L=$n(y);y=ua(this,y);for(let j=0;j<y.length;j++){let X=L;y[j]!==""&&(X+="="+$n(y[j])),u.push(X)}}return this.i=u.join("&")};function ha(u){const p=new Ce;return p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),p}function Kn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function qs(u,p){p&&!u.j&&(Wn(u),u.i=null,u.g.forEach(function(y,w){const L=w.toLowerCase();w!=L&&(la(this,w),ca(this,L,y))},u)),u.j=p}function Gn(u,p){const y=new Yr;if(h.Image){const w=new Image;w.onload=E(kt,y,"TestLoadImage: loaded",!0,p,w),w.onerror=E(kt,y,"TestLoadImage: error",!1,p,w),w.onabort=E(kt,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(kt,y,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Qn(u,p){const y=new Yr,w=new AbortController,L=setTimeout(()=>{w.abort(),kt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?kt(y,"TestPingServer: ok",!0,p):kt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),kt(y,"TestPingServer: error",!1,p)})}function kt(u,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Ji(){this.g=new zi}function wr(u){this.i=u.Sb||null,this.h=u.ab||!1}R(wr,Wr),wr.prototype.g=function(){return new nn(this.i,this.h)};function nn(u,p){ct.call(this),this.H=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}R(nn,ct),r=nn.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=p,this.readyState=1,Cn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(p.body=u),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ul(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ul(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?ei(this):Cn(this),this.readyState==3&&Ul(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,ei(this))},r.Na=function(u){this.g&&(this.response=u,ei(this))},r.ga=function(){this.g&&ei(this)};function ei(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Cn(u)}r.setRequestHeader=function(u,p){this.A.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Cn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function jl(u){let p="";return ue(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Hs(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=jl(y),typeof u=="string"?y!=null&&$n(y):Me(u,p,y))}function Be(u){ct.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}R(Be,ct);var zl=/^https?$/i,rh=["POST","PUT"];r=Be.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dl.g(),this.g.onreadystatechange=V(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(j){ti(this,j);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())y.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),L=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(rh,p,void 0)>=0)||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of y)this.g.setRequestHeader(j,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){ti(this,j)}};function ti(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.o=5,ni(u),Tr(u)}function ni(u){u.A||(u.A=!0,it(u,"complete"),it(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,it(this,"complete"),it(this,"abort"),Tr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),Be.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Er(this):this.Xa())},r.Xa=function(){Er(this)};function Er(u){if(u.h&&typeof l<"u"){if(u.v&&Yn(u)==4)setTimeout(u.Ca.bind(u),0);else if(it(u,"readystatechange"),Yn(u)==4){u.h=!1;try{const j=u.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=j===0){let X=String(u.D).match(Fl)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),w=!zl.test(X?X.toLowerCase():"")}y=w}if(y)it(u,"complete"),it(u,"success");else{u.o=6;try{var L=Yn(u)>2?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.ca()+"]",ni(u)}}finally{Tr(u)}}}}function Tr(u,p){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const y=u.g;u.g=null,p||it(u,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Yn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Rl(p)}};function Bl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function da(u){const p={};u=(u.g&&Yn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(k(u[w]))continue;var y=Us(u[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[L]||[];p[L]=j,j.push(y)}N(p,function(w){return w.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function Ws(u){this.za=0,this.i=[],this.j=new Yr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Jn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Jn("baseRetryDelayMs",5e3,u),this.Za=Jn("retryDelaySeedMs",1e4,u),this.Ta=Jn("forwardChannelMaxRetries",2,u),this.va=Jn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new zs(u&&u.concurrentRequestLimit),this.Ba=new Ji,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Ws.prototype,r.ka=8,r.I=1,r.connect=function(u,p,y,w){tt(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.J=pa(this,null,this.W),Ir(this)};function Ks(u){if(Gs(u),u.I==3){var p=u.V++,y=fn(u.J);if(Me(y,"SID",u.M),Me(y,"RID",p),Me(y,"TYPE","terminate"),Xn(u,y),p=new dn(u,u.j,p),p.M=2,p.A=vr(fn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=ql(p.j,null),p.g.ea(p.A)),p.F=Date.now(),$i(p)}es(u)}function rn(u){u.g&&(Zi(u),u.g.cancel(),u.g=null)}function Gs(u){rn(u),u.v&&(h.clearTimeout(u.v),u.v=null),Qs(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Ir(u){if(!na(u.h)&&!u.m){u.m=!0;var p=u.Ea;Le||T(),Pe||(Le(),Pe=!0),A.add(p,u),u.D=0}}function $l(u,p){return Hi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=p.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Qr(_(u.Ea,u,p),Js(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const L=new dn(this,this.j,u);let j=this.o;if(this.U&&(j?(j=q(j),Te(j,this.U)):j=this.U),this.u!==null||this.R||(L.J=j,j=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=fa(this,L,p),y=fn(this.J),Me(y,"RID",u),Me(y,"CVER",22),this.G&&Me(y,"X-HTTP-Session-Id",this.G),Xn(this,y),j&&(this.R?p="headers="+$n(jl(j))+"&"+p:this.u&&Hs(y,this.u,j)),Bs(this.h,L),this.Ra&&Me(y,"TYPE","init"),this.S?(Me(y,"$req",p),Me(y,"SID","null"),L.U=!0,Rn(L,y,null)):Rn(L,y,p),this.I=2}}else this.I==3&&(u?Xi(this,u):this.i.length==0||na(this.h)||Xi(this))};function Xi(u,p){var y;p?y=p.l:y=u.V++;const w=fn(u.J);Me(w,"SID",u.M),Me(w,"RID",y),Me(w,"AID",u.K),Xn(u,w),u.u&&u.o&&Hs(w,u.u,u.o),y=new dn(u,u.j,y,u.D+1),u.u===null&&(y.J=u.o),p&&(u.i=p.G.concat(u.i)),p=fa(u,y,1e3),y.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Bs(u.h,y),Rn(y,w,p)}function Xn(u,p){u.H&&ue(u.H,function(y,w){Me(p,w,y)}),u.l&&ue({},function(y,w){Me(p,w,y)})}function fa(u,p,y){y=Math.min(u.i.length,y);const w=u.l?_(u.l.Ka,u.l,u):null;e:{var L=u.i;let _e=-1;for(;;){const st=["count="+y];_e==-1?y>0?(_e=L[0].g,st.push("ofs="+_e)):_e=0:st.push("ofs="+_e);let je=!0;for(let ht=0;ht<y;ht++){var j=L[ht].g;const on=L[ht].map;if(j-=_e,j<0)_e=Math.max(0,L[ht].g-100),je=!1;else try{j="req"+j+"_"||"";try{var X=on instanceof Map?on:Object.entries(on);for(const[Sr,er]of X){let tr=er;m(er)&&(tr=Hr(er)),st.push(j+Sr+"="+encodeURIComponent(tr))}}catch(Sr){throw st.push(j+"type="+encodeURIComponent("_badmap")),Sr}}catch{w&&w(on)}}if(je){X=st.join("&");break e}}X=void 0}return u=u.i.splice(0,y),p.G=u,X}function Vt(u){if(!u.g&&!u.v){u.Y=1;var p=u.Da;Le||T(),Pe||(Le(),Pe=!0),A.add(p,u),u.A=0}}function Zn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Qr(_(u.Da,u),Js(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,ri(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Qr(_(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),rn(this),ri(this))};function Zi(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function ri(u){u.g=new dn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var p=fn(u.na);Me(p,"RID","rpc"),Me(p,"SID",u.M),Me(p,"AID",u.K),Me(p,"CI",u.F?"0":"1"),!u.F&&u.ia&&Me(p,"TO",u.ia),Me(p,"TYPE","xmlhttp"),Xn(u,p),u.u&&u.o&&Hs(p,u.u,u.o),u.O&&(u.g.H=u.O);var y=u.g;u=u.ba,y.M=1,y.A=vr(fn(p)),y.u=null,y.R=!0,ea(y,u)}r.Va=function(){this.C!=null&&(this.C=null,rn(this),Zn(this),tt(19))};function Qs(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Ys(u,p){var y=null;if(u.g==p){Qs(u),Zi(u),u.g=null;var w=2}else if(ra(u.h,p))y=p.G,Wi(u.h,p),w=1;else return;if(u.I!=0){if(p.o)if(w==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var L=u.D;w=Gr(),it(w,new Xo(w,y)),Ir(u)}else Vt(u);else if(L=p.m,L==3||L==0&&p.X>0||!(w==1&&$l(u,p)||w==2&&Zn(u)))switch(y&&y.length>0&&(p=u.h,p.i=p.i.concat(y)),L){case 1:sn(u,5);break;case 4:sn(u,10);break;case 3:sn(u,6);break;default:sn(u,2)}}}function Js(u,p){let y=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(y*=2),y*p}function sn(u,p){if(u.j.info("Error code "+p),p==2){var y=_(u.bb,u),w=u.Ua;const L=!w;w=new qn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Ki(w,"https"),vr(w),L?Gn(w.toString(),y):Qn(w.toString(),y)}else tt(2);u.I=0,u.l&&u.l.pa(p),es(u),Gs(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function es(u){if(u.I=0,u.ja=[],u.l){const p=en(u.h);(p.length!=0||u.i.length!=0)&&(Y(u.ja,p),Y(u.ja,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.oa()}}function pa(u,p,y){var w=y instanceof qn?fn(y):new qn(y);if(w.g!="")p&&(w.g=p+"."+w.g),Hn(w,w.u);else{var L=h.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const j=new qn(null);w&&Ki(j,w),p&&(j.g=p),L&&Hn(j,L),y&&(j.h=y),w=j}return y=u.G,p=u.wa,y&&p&&Me(w,y,p),Me(w,"VER",u.ka),Xn(u,w),w}function ql(u,p,y){if(p&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Aa&&!u.ma?new Be(new wr({ab:y})):new Be(u.ma),p.Fa(u.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hl(){}r=Hl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Xs(){}Xs.prototype.g=function(u,p){return new Rt(u,p)};function Rt(u,p){ct.call(this),this.g=new Ws(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(u?u["X-WebChannel-Client-Profile"]=p.sa:u={"X-WebChannel-Client-Profile":p.sa}),this.g.U=u,(u=p&&p.Qb)&&!k(u)&&(this.g.u=u),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!k(p)&&(this.g.G=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new ii(this)}R(Rt,ct),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Ks(this.g)},Rt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.v&&(y={},y.__data__=Hr(u),u=y);p.i.push(new th(p.Ya++,u)),p.I==3&&Ir(p)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Ks(this.g),delete this.g,Rt.Z.N.call(this)};function Wl(u){Ms.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}R(Wl,Ms);function Kl(){Jo.call(this),this.status=1}R(Kl,Jo);function ii(u){this.g=u}R(ii,Hl),ii.prototype.ra=function(){it(this.g,"a")},ii.prototype.qa=function(u){it(this.g,new Wl(u))},ii.prototype.pa=function(u){it(this.g,new Kl)},ii.prototype.oa=function(){it(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,ew=function(){return new Xs},Zv=function(){return Gr()},Xv=kn,rf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Jr.NO_ERROR=0,Jr.TIMEOUT=8,Jr.HTTP_ERROR=6,rc=Jr,Xr.COMPLETE="complete",Jv=Xr,Cl.EventType=Kr,Kr.OPEN="a",Kr.CLOSE="b",Kr.ERROR="c",Kr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,Ha=Cl,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,Yv=Be}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
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
 */let zo="12.11.0";function Ck(r){zo=r}/**
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
 */const Is=new Tf("@firebase/firestore");function Eo(){return Is.logLevel}function ne(r,...e){if(Is.logLevel<=Se.DEBUG){const t=e.map(jf);Is.debug(`Firestore (${zo}): ${r}`,...t)}}function zr(r,...e){if(Is.logLevel<=Se.ERROR){const t=e.map(jf);Is.error(`Firestore (${zo}): ${r}`,...t)}}function Ss(r,...e){if(Is.logLevel<=Se.WARN){const t=e.map(jf);Is.warn(`Firestore (${zo}): ${r}`,...t)}}function jf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function fe(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,tw(r,s,t)}function tw(r,e,t){let s=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw zr(s),new Error(s)}function Ue(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||tw(e,o,s)}function ve(r,e){return r}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class nw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class xk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Nk{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Fr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Fr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new nw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class Dk{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class bk{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Dk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Py{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,En(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Py(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Py(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ok(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class zf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Ok(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ae(r,e){return r<e?-1:r>e?1:0}function sf(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),l=e.charAt(s);if(o!==l)return Bd(o)===Bd(l)?Ae(o,l):Bd(o)?1:-1}return Ae(r.length,e.length)}const Mk=55296,Lk=57343;function Bd(r){const e=r.charCodeAt(0);return e>=Mk&&e<=Lk}function bo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const xy="__name__";class or{constructor(e,t,s){t===void 0?t=0:t>e.length&&fe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&fe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=or.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const s=or.isNumericId(e),o=or.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):sf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class qe extends or{construct(e,t,s){return new qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new qe(t)}static emptyPath(){return new qe([])}}const Fk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends or{construct(e,t,s){return new Nt(e,t,s)}static isValidIdentifier(e){return Fk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xy}static keyField(){return new Nt([xy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ee(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(l(),o++)}if(l(),h)throw new ee(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(qe.fromString(e))}static fromName(e){return new le(qe.fromString(e).popFirst(5))}static empty(){return new le(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new qe(e.slice()))}}/**
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
 */function rw(r,e,t){if(!t)throw new ee(B.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Uk(r,e,t,s){if(e===!0&&s===!0)throw new ee(B.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ny(r){if(!le.isDocumentKey(r))throw new ee(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Dy(r){if(le.isDocumentKey(r))throw new ee(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function iw(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Lc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":fe(12329,{type:typeof r})}function jn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ee(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lc(r);throw new ee(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function mt(r,e){const t={typeString:r};return e&&(t.value=e),t}function vl(r,e){if(!iw(r))throw new ee(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ee(B.INVALID_ARGUMENT,t);return!0}/**
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
 */const by=-62135596800,Vy=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Vy);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<by)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vy}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-by;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:mt("string",Qe._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Qe(0,0))}static max(){return new ye(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ol=-1;function jk(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new Pi(o,le.empty(),e)}function zk(r){return new Pi(r.readTime,r.key,ol)}class Pi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Pi(ye.min(),le.empty(),ol)}static max(){return new Pi(ye.max(),le.empty(),ol)}}function Bk(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(r.documentKey,e.documentKey),t!==0?t:Ae(r.largestBatchId,e.largestBatchId))}/**
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
 */const $k="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Bo(r){if(r.code!==B.FAILED_PRECONDITION||r.message!==$k)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,l=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const l=e.length,h=new Array(l);let m=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++m,m===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new $(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function Hk(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $o(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Fc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Fc.ce=-1;/**
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
 */const Bf=-1;function Uc(r){return r==null}function _c(r){return r===0&&1/r==-1/0}function Wk(r){return typeof r=="number"&&Number.isInteger(r)&&!_c(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const sw="";function Kk(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Oy(e)),e=Gk(r.get(t),e);return Oy(e)}function Gk(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case sw:t+="";break;default:t+=l}}return t}function Oy(r){return r+sw+""}/**
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
 */function My(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Li(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function ow(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $u(this.root,e,this.comparator,!1)}getReverseIterator(){return new $u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $u(this.root,e,this.comparator,!0)}}class $u{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new xt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new hn([])}unionWith(e){let t=new vt(Nt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class aw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new aw("Invalid base64 string: "+l):l}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const Qk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(r){if(Ue(!!r,39018),typeof r=="string"){let e=0;const t=Qk.exec(r);if(Ue(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ni(r){return typeof r=="string"?Dt.fromBase64String(r):Dt.fromUint8Array(r)}/**
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
 */const lw="server_timestamp",uw="__type__",cw="__previous_value__",hw="__local_write_time__";function $f(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[uw])==null?void 0:s.stringValue)===lw}function jc(r){const e=r.mapValue.fields[cw];return $f(e)?jc(e):e}function al(r){const e=xi(r.mapValue.fields[hw].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class Yk{constructor(e,t,s,o,l,h,m,g,_,E,R){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E,this.apiKey=R}}const vc="(default)";class ll{constructor(e,t){this.projectId=e,this.database=t||vc}static empty(){return new ll("","")}get isDefaultDatabase(){return this.database===vc}isEqual(e){return e instanceof ll&&e.projectId===this.projectId&&e.database===this.database}}function Jk(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new ee(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ll(r.options.projectId,e)}/**
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
 */const dw="__type__",Xk="__max__",qu={mapValue:{}},fw="__vector__",wc="value";function Di(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?$f(r)?4:eR(r)?9007199254740991:Zk(r)?10:11:fe(28295,{value:r})}function fr(r,e){if(r===e)return!0;const t=Di(r);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return al(r).isEqual(al(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=xi(o.timestampValue),m=xi(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ni(o.bytesValue).isEqual(Ni(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=lt(o.doubleValue),m=lt(l.doubleValue);return h===m?_c(h)===_c(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return bo(r.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},m=l.mapValue.fields||{};if(My(h)!==My(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!fr(h[g],m[g])))return!1;return!0})(r,e);default:return fe(52216,{left:r})}}function ul(r,e){return(r.values||[]).find((t=>fr(t,e)))!==void 0}function Vo(r,e){if(r===e)return 0;const t=Di(r),s=Di(e);if(t!==s)return Ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const m=lt(l.integerValue||l.doubleValue),g=lt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Fy(r.timestampValue,e.timestampValue);case 4:return Fy(al(r),al(e));case 5:return sf(r.stringValue,e.stringValue);case 6:return(function(l,h){const m=Ni(l),g=Ni(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const m=l.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const E=Ae(m[_],g[_]);if(E!==0)return E}return Ae(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const m=Ae(lt(l.latitude),lt(h.latitude));return m!==0?m:Ae(lt(l.longitude),lt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Uy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var V,z,Y,J;const m=l.fields||{},g=h.fields||{},_=(V=m[wc])==null?void 0:V.arrayValue,E=(z=g[wc])==null?void 0:z.arrayValue,R=Ae(((Y=_==null?void 0:_.values)==null?void 0:Y.length)||0,((J=E==null?void 0:E.values)==null?void 0:J.length)||0);return R!==0?R:Uy(_,E)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===qu.mapValue&&h===qu.mapValue)return 0;if(l===qu.mapValue)return 1;if(h===qu.mapValue)return-1;const m=l.fields||{},g=Object.keys(m),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let R=0;R<g.length&&R<E.length;++R){const V=sf(g[R],E[R]);if(V!==0)return V;const z=Vo(m[g[R]],_[E[R]]);if(z!==0)return z}return Ae(g.length,E.length)})(r.mapValue,e.mapValue);default:throw fe(23264,{he:t})}}function Fy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ae(r,e);const t=xi(r),s=xi(e),o=Ae(t.seconds,s.seconds);return o!==0?o:Ae(t.nanos,s.nanos)}function Uy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Vo(t[o],s[o]);if(l)return l}return Ae(t.length,s.length)}function Oo(r){return of(r)}function of(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=xi(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ni(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return le.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=of(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${of(t.fields[h])}`;return o+"}"})(r.mapValue):fe(61005,{value:r})}function ic(r){switch(Di(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jc(r);return e?16+ic(e):16;case 5:return 2*r.stringValue.length;case 6:return Ni(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+ic(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Li(s.fields,((l,h)=>{o+=l.length+ic(h)})),o})(r.mapValue);default:throw fe(13486,{value:r})}}function jy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function af(r){return!!r&&"integerValue"in r}function qf(r){return!!r&&"arrayValue"in r}function zy(r){return!!r&&"nullValue"in r}function By(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function sc(r){return!!r&&"mapValue"in r}function Zk(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[dw])==null?void 0:s.stringValue)===fw}function Ja(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Li(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ja(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ja(r.arrayValue.values[t]);return e}return{...r}}function eR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Xk}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!sc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ja(t)}setAll(e){let t=Nt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ja(h):o.push(m.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());sc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];sc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Li(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new Zt(Ja(this.value))}}function pw(r){const e=[];return Li(r.fields,((t,s)=>{const o=new Nt([t]);if(sc(s)){const l=pw(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new hn(e)}/**
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
 */class zt{constructor(e,t,s,o,l,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new zt(e,0,ye.min(),ye.min(),ye.min(),Zt.empty(),0)}static newFoundDocument(e,t,s,o){return new zt(e,1,t,ye.min(),s,o,0)}static newNoDocument(e,t){return new zt(e,2,t,ye.min(),ye.min(),Zt.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,ye.min(),ye.min(),Zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ec{constructor(e,t){this.position=e,this.inclusive=t}}function $y(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=le.comparator(le.fromName(h.referenceValue),t.key):s=Vo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function qy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!fr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class cl{constructor(e,t="asc"){this.field=e,this.dir=t}}function tR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class mw{}class pt extends mw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new rR(e,t,s):t==="array-contains"?new oR(e,s):t==="in"?new aR(e,s):t==="not-in"?new lR(e,s):t==="array-contains-any"?new uR(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new iR(e,s):new sR(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vo(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(Vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends mw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new zn(e,t)}matches(e){return gw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gw(r){return r.op==="and"}function yw(r){return nR(r)&&gw(r)}function nR(r){for(const e of r.filters)if(e instanceof zn)return!1;return!0}function lf(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+Oo(r.value);if(yw(r))return r.filters.map((e=>lf(e))).join(",");{const e=r.filters.map((t=>lf(t))).join(",");return`${r.op}(${e})`}}function _w(r,e){return r instanceof pt?(function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&fr(s.value,o.value)})(r,e):r instanceof zn?(function(s,o){return o instanceof zn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,m)=>l&&_w(h,o.filters[m])),!0):!1})(r,e):void fe(19439)}function vw(r){return r instanceof pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Oo(t.value)}`})(r):r instanceof zn?(function(t){return t.op.toString()+" {"+t.getFilters().map(vw).join(" ,")+"}"})(r):"Filter"}class rR extends pt{constructor(e,t,s){super(e,t,s),this.key=le.fromName(s.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class iR extends pt{constructor(e,t){super(e,"in",t),this.keys=ww("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class sR extends pt{constructor(e,t){super(e,"not-in",t),this.keys=ww("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ww(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>le.fromName(s.referenceValue)))}class oR extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qf(t)&&ul(t.arrayValue,this.value)}}class aR extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ul(this.value.arrayValue,t)}}class lR extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ul(this.value.arrayValue,t)}}class uR extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ul(this.value.arrayValue,s)))}}/**
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
 */class cR{constructor(e,t=null,s=[],o=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=m,this.Te=null}}function Hy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new cR(r,e,t,s,o,l,h)}function Hf(r){const e=ve(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>lf(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Uc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Oo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Oo(s))).join(",")),e.Te=t}return e.Te}function Wf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!tR(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!_w(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!qy(r.startAt,e.startAt)&&qy(r.endAt,e.endAt)}function uf(r){return le.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class qo{constructor(e,t=null,s=[],o=[],l=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function hR(r,e,t,s,o,l,h,m){return new qo(r,e,t,s,o,l,h,m)}function Kf(r){return new qo(r)}function Wy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function dR(r){return le.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ew(r){return r.collectionGroup!==null}function Xa(r){const e=ve(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new vt(Nt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new cl(l,s))})),t.has(Nt.keyField().canonicalString())||e.Ee.push(new cl(Nt.keyField(),s))}return e.Ee}function ur(r){const e=ve(r);return e.Ie||(e.Ie=fR(e,Xa(r))),e.Ie}function fR(r,e){if(r.limitType==="F")return Hy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new cl(o.field,l)}));const t=r.endAt?new Ec(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ec(r.startAt.position,r.startAt.inclusive):null;return Hy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function cf(r,e){const t=r.filters.concat([e]);return new qo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function pR(r,e){const t=r.explicitOrderBy.concat([e]);return new qo(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function Tc(r,e,t){return new qo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function zc(r,e){return Wf(ur(r),ur(e))&&r.limitType===e.limitType}function Tw(r){return`${Hf(ur(r))}|lt:${r.limitType}`}function To(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>vw(o))).join(", ")}]`),Uc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Oo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Oo(o))).join(",")),`Target(${s})`})(ur(r))}; limitType=${r.limitType})`}function Bc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):le.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Xa(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=$y(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Xa(s),o)||s.endAt&&!(function(h,m,g){const _=$y(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Xa(s),o))})(r,e)}function mR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Iw(r){return(e,t)=>{let s=!1;for(const o of Xa(r)){const l=gR(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function gR(r,e,t){const s=r.field.isKeyField()?le.comparator(e.key,t.key):(function(l,h,m){const g=h.data.field(l),_=m.data.field(l);return g!==null&&_!==null?Vo(g,_):fe(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return fe(19790,{direction:r.dir})}}/**
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
 */class Ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return ow(this.inner)}size(){return this.innerSize}}/**
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
 */const yR=new et(le.comparator);function Br(){return yR}const Sw=new et(le.comparator);function Wa(...r){let e=Sw;for(const t of r)e=e.insert(t.key,t);return e}function Aw(r){let e=Sw;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function gs(){return Za()}function kw(){return Za()}function Za(){return new Ps((r=>r.toString()),((r,e)=>r.isEqual(e)))}const _R=new et(le.comparator),vR=new vt(le.comparator);function ke(...r){let e=vR;for(const t of r)e=e.add(t);return e}const wR=new vt(Ae);function ER(){return wR}/**
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
 */function Gf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_c(e)?"-0":e}}function Rw(r){return{integerValue:""+r}}function TR(r,e){return Wk(e)?Rw(e):Gf(r,e)}/**
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
 */class $c{constructor(){this._=void 0}}function IR(r,e,t){return r instanceof Ic?(function(o,l){const h={fields:{[uw]:{stringValue:lw},[hw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&$f(l)&&(l=jc(l)),l&&(h.fields[cw]=l),{mapValue:h}})(t,e):r instanceof hl?Pw(r,e):r instanceof dl?xw(r,e):(function(o,l){const h=Cw(o,l),m=Ky(h)+Ky(o.Ae);return af(h)&&af(o.Ae)?Rw(m):Gf(o.serializer,m)})(r,e)}function SR(r,e,t){return r instanceof hl?Pw(r,e):r instanceof dl?xw(r,e):t}function Cw(r,e){return r instanceof Sc?(function(s){return af(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Ic extends $c{}class hl extends $c{constructor(e){super(),this.elements=e}}function Pw(r,e){const t=Nw(e);for(const s of r.elements)t.some((o=>fr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class dl extends $c{constructor(e){super(),this.elements=e}}function xw(r,e){let t=Nw(e);for(const s of r.elements)t=t.filter((o=>!fr(o,s)));return{arrayValue:{values:t}}}class Sc extends $c{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ky(r){return lt(r.integerValue||r.doubleValue)}function Nw(r){return qf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function AR(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof hl&&o instanceof hl||s instanceof dl&&o instanceof dl?bo(s.elements,o.elements,fr):s instanceof Sc&&o instanceof Sc?fr(s.Ae,o.Ae):s instanceof Ic&&o instanceof Ic})(r.transform,e.transform)}class kR{constructor(e,t){this.version=e,this.transformResults=t}}class Sn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class qc{}function Dw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Qf(r.key,Sn.none()):new wl(r.key,r.data,Sn.none());{const t=r.data,s=Zt.empty();let o=new vt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Fi(r.key,s,new hn(o.toArray()),Sn.none())}}function RR(r,e,t){r instanceof wl?(function(o,l,h){const m=o.value.clone(),g=Qy(o.fieldTransforms,l,h.transformResults);m.setAll(g),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof Fi?(function(o,l,h){if(!oc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const m=Qy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(bw(o)),g.setAll(m),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function el(r,e,t,s){return r instanceof wl?(function(l,h,m,g){if(!oc(l.precondition,h))return m;const _=l.value.clone(),E=Yy(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Fi?(function(l,h,m,g){if(!oc(l.precondition,h))return m;const _=Yy(l.fieldTransforms,g,h),E=h.data;return E.setAll(bw(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((R=>R.field)))})(r,e,t,s):(function(l,h,m){return oc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function CR(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=Cw(s.transform,o||null);l!=null&&(t===null&&(t=Zt.empty()),t.set(s.field,l))}return t||null}function Gy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&bo(s,o,((l,h)=>AR(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class wl extends qc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Fi extends qc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function bw(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Qy(r,e,t){const s=new Map;Ue(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,m=e.data.field(l.field);s.set(l.field,SR(h,m,t[o]))}return s}function Yy(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,IR(l,h,e))}return s}class Qf extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PR extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xR{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&RR(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=el(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=el(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=kw();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(o.key)?null:m;const g=Dw(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ye.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,((t,s)=>Gy(t,s)))&&bo(this.baseMutations,e.baseMutations,((t,s)=>Gy(t,s)))}}class Yf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return _R})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Yf(e,t,s,o)}}/**
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
 */class NR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class DR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,Ne;function bR(r){switch(r){case B.OK:return fe(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return fe(15467,{code:r})}}function Vw(r){if(r===void 0)return zr("GRPC error has no .code"),B.UNKNOWN;switch(r){case ft.OK:return B.OK;case ft.CANCELLED:return B.CANCELLED;case ft.UNKNOWN:return B.UNKNOWN;case ft.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ft.INTERNAL:return B.INTERNAL;case ft.UNAVAILABLE:return B.UNAVAILABLE;case ft.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ft.NOT_FOUND:return B.NOT_FOUND;case ft.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ft.ABORTED:return B.ABORTED;case ft.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ft.DATA_LOSS:return B.DATA_LOSS;default:return fe(39323,{code:r})}}(Ne=ft||(ft={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function VR(){return new TextEncoder}/**
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
 */const OR=new Ri([4294967295,4294967295],0);function Jy(r){const e=VR().encode(r),t=new Qv;return t.update(e),new Uint8Array(t.digest())}function Xy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ri([t,s],0),new Ri([o,l],0)]}class Jf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ka(`Invalid padding: ${t}`);if(s<0)throw new Ka(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ka(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ka(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ri.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ri.fromNumber(s)));return o.compare(OR)===1&&(o=new Ri([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Jy(e),[s,o]=Xy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Jf(l,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Jy(e),[s,o]=Xy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Hc(ye.min(),o,new et(Ae),Br(),ke())}}class El{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new El(s,t,ke(),ke(),ke())}}/**
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
 */class ac{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Ow{constructor(e,t){this.targetId=e,this.Ce=t}}class Mw{constructor(e,t,s=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Zy{constructor(){this.ve=0,this.Fe=e_(),this.Me=Dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ke(),t=ke(),s=ke();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:fe(38017,{changeType:l})}})),new El(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=e_()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class MR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Br(),this.Je=Hu(),this.He=Hu(),this.Ze=new et(Ae)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(uf(l))if(s===0){const h=new le(l.path);this.et(t,h,zt.newNoDocument(h,ye.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,m;try{h=Ni(s).toUint8Array()}catch(g){if(g instanceof aw)return Ss("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Jf(h,o,l)}catch(g){return Ss(g instanceof Ka?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const m=this.ot(h);if(m){if(l.current&&uf(m.target)){const g=new le(m.target.path);this.Et(g).has(h)||this.It(h,g)||this.et(h,g,zt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let s=ke();this.He.forEach(((l,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new Hc(e,t,this.Ze,this.je,s);return this.je=Br(),this.Je=Hu(),this.He=Hu(),this.Ze=new et(Ae),o}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Zy,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new vt(Ae),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new vt(Ae),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Hu(){return new et(le.comparator)}function e_(){return new et(le.comparator)}const LR={asc:"ASCENDING",desc:"DESCENDING"},FR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UR={and:"AND",or:"OR"};class jR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hf(r,e){return r.useProto3Json||Uc(e)?e:{value:e}}function Ac(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function zR(r,e){return Ac(r,e.toTimestamp())}function cr(r){return Ue(!!r,49232),ye.fromTimestamp((function(t){const s=xi(t);return new Qe(s.seconds,s.nanos)})(r))}function Xf(r,e){return df(r,e).canonicalString()}function df(r,e){const t=(function(o){return new qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Fw(r){const e=qe.fromString(r);return Ue($w(e),10190,{key:e.toString()}),e}function ff(r,e){return Xf(r.databaseId,e.path)}function $d(r,e){const t=Fw(e);if(t.get(1)!==r.databaseId.projectId)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new le(jw(t))}function Uw(r,e){return Xf(r.databaseId,e)}function BR(r){const e=Fw(r);return e.length===4?qe.emptyPath():jw(e)}function pf(r){return new qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function jw(r){return Ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function t_(r,e,t){return{name:ff(r,e),fields:t.value.mapValue.fields}}function $R(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:fe(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(Ue(E===void 0||typeof E=="string",58123),Dt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Dt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?B.UNKNOWN:Vw(_.code);return new ee(E,_.message||"")})(h);t=new Mw(s,o,l,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=$d(r,s.document.name),l=cr(s.document.updateTime),h=s.document.createTime?cr(s.document.createTime):ye.min(),m=new Zt({mapValue:{fields:s.document.fields}}),g=zt.newFoundDocument(o,l,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];t=new ac(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=$d(r,s.document),l=s.readTime?cr(s.readTime):ye.min(),h=zt.newNoDocument(o,l),m=s.removedTargetIds||[];t=new ac([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=$d(r,s.document),l=s.removedTargetIds||[];t=new ac([],l,o,null)}else{if(!("filter"in e))return fe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new DR(o,l),m=s.targetId;t=new Ow(m,h)}}return t}function qR(r,e){let t;if(e instanceof wl)t={update:t_(r,e.key,e.value)};else if(e instanceof Qf)t={delete:ff(r,e.key)};else if(e instanceof Fi)t={update:t_(r,e.key,e.data),updateMask:ZR(e.fieldMask)};else{if(!(e instanceof PR))return fe(16599,{dt:e.type});t={verify:ff(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const m=h.transform;if(m instanceof Ic)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof hl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof dl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Sc)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw fe(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:zR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:fe(27497)})(r,e.precondition)),t}function HR(r,e){return r&&r.length>0?(Ue(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(ye.min())&&(h=cr(l)),new kR(h,o.transformResults||[])})(t,e)))):[]}function WR(r,e){return{documents:[Uw(r,e.path)]}}function KR(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Uw(r,o);const l=(function(_){if(_.length!==0)return Bw(zn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(V){return{field:Io(V.field),direction:YR(V.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=hf(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function GR(r){let e=BR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(R){const V=zw(R);return V instanceof zn&&yw(V)?V.getFilters():[V]})(t.where));let h=[];t.orderBy&&(h=(function(R){return R.map((V=>(function(Y){return new cl(So(Y.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(V)))})(t.orderBy));let m=null;t.limit&&(m=(function(R){let V;return V=typeof R=="object"?R.value:R,Uc(V)?null:V})(t.limit));let g=null;t.startAt&&(g=(function(R){const V=!!R.before,z=R.values||[];return new Ec(z,V)})(t.startAt));let _=null;return t.endAt&&(_=(function(R){const V=!R.before,z=R.values||[];return new Ec(z,V)})(t.endAt)),hR(e,o,h,l,m,"F",g,_)}function QR(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=So(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=So(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=So(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=So(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(r):r.fieldFilter!==void 0?(function(t){return pt.create(So(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return zn.create(t.compositeFilter.filters.map((s=>zw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(t.compositeFilter.op))})(r):fe(30097,{filter:r})}function YR(r){return LR[r]}function JR(r){return FR[r]}function XR(r){return UR[r]}function Io(r){return{fieldPath:r.canonicalString()}}function So(r){return Nt.fromServerFormat(r.fieldPath)}function Bw(r){return r instanceof pt?(function(t){if(t.op==="=="){if(By(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NAN"}};if(zy(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(By(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NAN"}};if(zy(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Io(t.field),op:JR(t.op),value:t.value}}})(r):r instanceof zn?(function(t){const s=t.getFilters().map((o=>Bw(o)));return s.length===1?s[0]:{compositeFilter:{op:XR(t.op),filters:s}}})(r):fe(54877,{filter:r})}function ZR(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function $w(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function qw(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class Ai{constructor(e,t,s,o,l=ye.min(),h=ye.min(),m=Dt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new Ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eC{constructor(e){this.yt=e}}function tC(r){const e=GR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Tc(e,e.limit,"L"):e}/**
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
 */class nC{constructor(){this.bn=new rC}addToCollectionParentIndex(e,t){return this.bn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Pi.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class rC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new vt(qe.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new vt(qe.comparator)).toArray()}}/**
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
 */const n_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hw=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(Hw,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class Mo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Mo(0)}static ar(){return new Mo(-1)}}/**
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
 */const r_="LruGarbageCollector",iC=1048576;function i_([r,e],[t,s]){const o=Ae(r,t);return o===0?Ae(e,s):o}class sC{constructor(e){this.Pr=e,this.buffer=new vt(i_),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();i_(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ne(r_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$o(t)?ne(r_,"Ignoring IndexedDB error during garbage collection: ",t):await Bo(t)}await this.Ar(3e5)}))}}class aC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Fc.ce);const s=new sC(t);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(n_)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),n_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,l,h,m,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((R=>(R>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o)))).next((R=>(s=R,m=Date.now(),this.removeTargets(e,s,t)))).next((R=>(l=R,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((R=>(_=Date.now(),Eo()<=Se.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${l} targets in `+(g-m)+`ms
	Removed ${R} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:R}))))}}function lC(r,e){return new aC(r,e)}/**
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
 */class uC{constructor(){this.changes=new Ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class hC{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&el(s.mutation,o,hn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ke()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ke()){const o=gs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Wa();return l.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=gs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ke())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let l=Br();const h=Za(),m=(function(){return Za()})();return t.forEach(((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Fi)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),el(E.mutation,_,E.mutation.getFieldMask(),Qe.now())):h.set(_.key,hn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>m.set(_,new cC(E,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Za();let o=new et(((h,m)=>h-m)),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||hn.empty();E=m.applyToLocalView(_,E),s.set(g,E);const R=(o.get(m.batchId)||ke()).add(g);o=o.insert(m.batchId,R)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,E=g.value,R=kw();E.forEach((V=>{if(!l.has(V)){const z=Dw(t.get(V),s.get(V));z!==null&&R.set(V,z),l=l.add(V)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,R))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return dR(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ew(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):$.resolve(gs());let m=ol,g=l;return h.next((_=>$.forEach(_,((E,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),l.get(E)?$.resolve():this.remoteDocumentCache.getEntry(e,E).next((V=>{g=g.insert(E,V)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,ke()))).next((E=>({batchId:m,changes:Aw(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next((s=>{let o=Wa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Wa();return this.indexManager.getCollectionParents(e,l).next((m=>$.forEach(m,(g=>{const _=(function(R,V){return new qo(V,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((R,V)=>{h=h.insert(R,V)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,zt.newInvalidDocument(E)))}));let m=Wa();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&el(E.mutation,_,hn.empty(),Qe.now()),Bc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class dC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:tC(o.bundledQuery),readTime:cr(o.readTime)}})(t)),$.resolve()}}/**
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
 */class fC{constructor(){this.overlays=new et(le.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=gs();return $.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.St(e,t,l)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=gs(),l=t.length+1,h=new le(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new et(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=l.get(_.largestBatchId);E===null&&(E=gs(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=gs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new NR(t,s));let l=this.Lr.get(t);l===void 0&&(l=ke(),this.Lr.set(t,l)),this.Lr.set(t,l.add(s.key))}}/**
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
 */class pC{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class Zf{constructor(){this.kr=new vt(St.qr),this.Kr=new vt(St.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new St(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new St(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new le(new qe([])),s=new St(t,e),o=new St(t,e+1),l=[];return this.Kr.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new le(new qe([])),s=new St(t,e),o=new St(t,e+1);let l=ke();return this.Kr.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return le.comparator(e.key,t.key)||Ae(e.Jr,t.Jr)}static Ur(e,t){return Ae(e.Jr,t.Jr)||le.comparator(e.key,t.key)}}/**
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
 */class mC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new vt(St.qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new xR(l,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Hr=this.Hr.add(new St(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return $.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Bf:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Jr);l.push(m)})),$.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(Ae);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,h],(m=>{s=s.add(m.Jr)}))})),$.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;le.isDocumentKey(l)||(l=l.child(""));const h=new St(new le(l),0);let m=new vt(Ae);return this.Hr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Jr)),!0)}),h),$.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return $.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new St(t,0),o=this.Hr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class gC{constructor(e){this.ti=e,this.docs=(function(){return new et(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=Br();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Br();const h=t.path,m=new le(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||Bk(zk(E),s)<=0||(o.has(E.key)||Bc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return $.resolve(l)}getAllFromCollectionGroup(e,t,s,o){fe(9500)}ni(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new yC(this)}getSize(e){return $.resolve(this.size)}}class yC extends uC{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class _C{constructor(e){this.persistence=e,this.ri=new Ps((t=>Hf(t)),Wf),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.ii=0,this.si=new Zf,this.targetCount=0,this.oi=Mo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Mo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(l).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
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
 */class Ww{constructor(e,t){this._i={},this.overlays={},this.ai=new Fc(0),this.ui=!1,this.ui=!0,this.ci=new pC,this.referenceDelegate=e(this),this.li=new _C(this),this.indexManager=new nC,this.remoteDocumentCache=(function(o){return new gC(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new eC(t),this.Pi=new dC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new mC(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new vC(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((l=>this.referenceDelegate.Ei(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ii(e,t){return $.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class vC extends qk{constructor(e){super(),this.currentSequenceNumber=e}}class ep{constructor(e){this.persistence=e,this.Ri=new Zf,this.Ai=null}static Vi(e){return new ep(e)}get di(){if(this.Ai)return this.Ai;throw fe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(s=>{const o=le.fromPath(s);return this.mi(e,o).next((l=>{l||t.removeEntry(o,ye.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class kc{constructor(e,t){this.persistence=e,this.fi=new Ps((s=>Kk(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=lC(this,t)}static Vi(e,t){return new kc(e,t)}Ti(){}Ei(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((l=>l?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,l.removeEntry(h,ye.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ic(e.data.value)),t}wr(e,t,s){return $.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tp{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=o}static Is(e,t){let s=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new tp(e,t.fromCache,s,o)}}/**
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
 */class wC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class EC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return IT()?8:Hk($t())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new wC;return this.ys(e,t,h).next((m=>{if(l.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>l.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(Eo()<=Se.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",To(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(Eo()<=Se.DEBUG&&ne("QueryEngine","Query:",To(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(Eo()<=Se.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",To(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):$.resolve())}gs(e,t){if(Wy(t))return $.resolve(null);let s=ur(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Tc(t,null,"F"),s=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=ke(...l);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.Ss(t,m);return this.bs(t,_,h,g.readTime)?this.gs(e,Tc(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return Wy(t)||o.isEqual(ye.min())?$.resolve(null):this.fs.getDocuments(e,s).next((l=>{const h=this.Ss(t,l);return this.bs(t,h,s,o)?$.resolve(null):(Eo()<=Se.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),To(t)),this.Ds(e,h,t,jk(o,ol)).next((m=>m)))}))}Ss(e,t){let s=new vt(Iw(e));return t.forEach(((o,l)=>{Bc(e,l)&&(s=s.add(l))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,s){return Eo()<=Se.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",To(t)),this.fs.getDocumentsMatchingQuery(e,t,Pi.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const np="LocalStore",TC=3e8;class IC{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new et(Ae),this.Fs=new Ps((l=>Hf(l)),Wf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function SC(r,e,t,s){return new IC(r,e,t,s)}async function Kw(r,e){const t=ve(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],m=[];let g=ke();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){m.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function AC(r,e){const t=ve(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,E){const R=_.batch,V=R.keys();let z=$.resolve();return V.forEach((Y=>{z=z.next((()=>E.getEntry(g,Y))).next((J=>{const G=_.docVersions.get(Y);Ue(G!==null,48541),J.version.compareTo(G)<0&&(R.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),E.addEntry(J)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(g,R)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=ke();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Gw(r){const e=ve(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function kC(r,e){const t=ve(r),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((E,R)=>{const V=o.get(R);if(!V)return;m.push(t.li.removeMatchingKeys(l,E.removedDocuments,R).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,R))));let z=V.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(R)!==null?z=z.withResumeToken(Dt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(R,z),(function(J,G,me){return J.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=TC?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(V,z,E)&&m.push(t.li.updateTargetData(l,z))}));let g=Br(),_=ke();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),m.push(RC(l,h,e.documentUpdates).next((E=>{g=E.Bs,_=E.Ls}))),!s.isEqual(ye.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((R=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,s)));m.push(E)}return $.waitFor(m).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.vs=o,l)))}function RC(r,e,t){let s=ke(),o=ke();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Br();return t.forEach(((m,g)=>{const _=l.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ye.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne(np,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function CC(r,e){const t=ve(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Bf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function PC(r,e){const t=ve(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((l=>l?(o=l,$.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new Ai(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function mf(r,e,t){const s=ve(r),o=s.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!$o(h))throw h;ne(np,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function s_(r,e,t){const s=ve(r);let o=ye.min(),l=ke();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const R=ve(g),V=R.Fs.get(E);return V!==void 0?$.resolve(R.vs.get(V)):R.li.getTargetData(_,E)})(s,h,ur(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ye.min(),t?l:ke()))).next((m=>(xC(s,mR(e),m),{documents:m,ks:l})))))}function xC(r,e,t){let s=r.Ms.get(e)||ye.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.Ms.set(e,s)}class o_{constructor(){this.activeTargetIds=ER()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NC{constructor(){this.vo=new o_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new o_,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DC{Mo(e){}shutdown(){}}/**
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
 */const a_="ConnectivityMonitor";class l_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ne(a_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ne(a_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wu=null;function gf(){return Wu===null?Wu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wu++,"0x"+Wu.toString(16)}/**
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
 */const qd="RestConnection",bC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class VC{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===vc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=gf(),m=this.Qo(e,t.toUriEncodedString());ne(qd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:_}=new URL(m),E=pl(_);return this.zo(e,m,g,s,E).then((R=>(ne(qd,`Received RPC '${e}' ${h}: `,R),R)),(R=>{throw Ss(qd,`RPC '${e}' ${h} failed with error: `,R,"url: ",m,"request:",s),R}))}jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+zo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const s=bC[e];let o=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class OC{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ut="WebChannelConnection",za=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class xo extends VC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!xo.c_){const e=Zv();za(e,Xv.STAT_EVENT,(t=>{t.stat===rf.PROXY?ne(Ut,"STAT_EVENT: detected buffering proxy"):t.stat===rf.NOPROXY&&ne(Ut,"STAT_EVENT: detected no buffering proxy")})),xo.c_=!0}}zo(e,t,s,o,l){const h=gf();return new Promise(((m,g)=>{const _=new Yv;_.setWithCredentials(!0),_.listenOnce(Jv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case rc.NO_ERROR:const R=_.getResponseJson();ne(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(R)),m(R);break;case rc.TIMEOUT:ne(Ut,`RPC '${e}' ${h} timed out`),g(new ee(B.DEADLINE_EXCEEDED,"Request time out"));break;case rc.HTTP_ERROR:const V=_.getStatus();if(ne(Ut,`RPC '${e}' ${h} failed with status:`,V,"response text:",_.getResponseText()),V>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const Y=z==null?void 0:z.error;if(Y&&Y.status&&Y.message){const J=(function(me){const ge=me.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(ge)>=0?ge:B.UNKNOWN})(Y.status);g(new ee(J,Y.message))}else g(new ee(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee(B.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ne(Ut,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ne(Ut,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=gf(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=l.join("");ne(Ut,`Creating RPC '${e}' stream ${o}: ${_}`,m);const E=h.createWebChannel(_,m);this.E_(E);let R=!1,V=!1;const z=new OC({Jo:Y=>{V?ne(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,Y):(R||(ne(Ut,`Opening RPC '${e}' stream ${o} transport.`),E.open(),R=!0),ne(Ut,`RPC '${e}' stream ${o} sending:`,Y),E.send(Y))},Ho:()=>E.close()});return za(E,Ha.EventType.OPEN,(()=>{V||(ne(Ut,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),za(E,Ha.EventType.CLOSE,(()=>{V||(V=!0,ne(Ut,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.I_(E))})),za(E,Ha.EventType.ERROR,(Y=>{V||(V=!0,Ss(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,Y.name,"Message:",Y.message),z.o_(new ee(B.UNAVAILABLE,"The operation could not be completed")))})),za(E,Ha.EventType.MESSAGE,(Y=>{var J;if(!V){const G=Y.data[0];Ue(!!G,16349);const me=G,ge=(me==null?void 0:me.error)||((J=me[0])==null?void 0:J.error);if(ge){ne(Ut,`RPC '${e}' stream ${o} received error:`,ge);const Ee=ge.status;let Ve=(function(A){const T=ft[A];if(T!==void 0)return Vw(T)})(Ee),Le=ge.message;Ee==="NOT_FOUND"&&Le.includes("database")&&Le.includes("does not exist")&&Le.includes(this.databaseId.database)&&Ss(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ve===void 0&&(Ve=B.INTERNAL,Le="Unknown error status: "+Ee+" with message "+ge.message),V=!0,z.o_(new ee(Ve,Le)),E.close()}else ne(Ut,`RPC '${e}' stream ${o} received:`,G),z.__(G)}})),xo.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ew()}}/**
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
 */function MC(r){return new xo(r)}function Hd(){return typeof document<"u"?document:null}/**
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
 */function Wc(r){return new jR(r,!0)}/**
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
 */xo.c_=!1;class Qw{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const u_="PersistentStream";class Yw{constructor(e,t,s,o,l,h,m,g){this.Ci=e,this.S_=s,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Qw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ee(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(u_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ne(u_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class LC extends Yw{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=$R(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ye.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ye.min():h.readTime?cr(h.readTime):ye.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=pf(this.serializer),t.addTarget=(function(l,h){let m;const g=h.target;if(m=uf(g)?{documents:WR(l,g)}:{query:KR(l,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Lw(l,h.resumeToken);const _=hf(l,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ye.min())>0){m.readTime=Ac(l,h.snapshotVersion.toTimestamp());const _=hf(l,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=QR(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=pf(this.serializer),t.removeTarget=e,this.q_(t)}}class FC extends Yw{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=HR(e.writeResults,e.commitTime),s=cr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=pf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>qR(this.serializer,s)))};this.q_(t)}}/**
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
 */class UC{}class jC extends UC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,df(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(B.UNKNOWN,l.toString())}))}jo(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,df(t,s),o,h,m,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(B.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function zC(r,e,t,s){return new jC(r,e,t,s)}class BC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zr(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const As="RemoteStore";class $C{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{xs(this)&&(ne(As,"Restarting streams for network reachability change."),await(async function(g){const _=ve(g);_.Ia.add(4),await Tl(_),_.Va.set("Unknown"),_.Ia.delete(4),await Kc(_)})(this))}))})),this.Va=new BC(s,o)}}async function Kc(r){if(xs(r))for(const e of r.Ra)await e(!0)}async function Tl(r){for(const e of r.Ra)await e(!1)}function Jw(r,e){const t=ve(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),op(t)?sp(t):Ho(t).O_()&&ip(t,e))}function rp(r,e){const t=ve(r),s=Ho(t);t.Ea.delete(e),s.O_()&&Xw(t,e),t.Ea.size===0&&(s.O_()?s.L_():xs(t)&&t.Va.set("Unknown"))}function ip(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ho(r).Z_(e)}function Xw(r,e){r.da.$e(e),Ho(r).X_(e)}function sp(r){r.da=new MR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ho(r).start(),r.Va.ua()}function op(r){return xs(r)&&!Ho(r).x_()&&r.Ea.size>0}function xs(r){return ve(r).Ia.size===0}function Zw(r){r.da=void 0}async function qC(r){r.Va.set("Online")}async function HC(r){r.Ea.forEach(((e,t)=>{ip(r,e)}))}async function WC(r,e){Zw(r),op(r)?(r.Va.ha(e),sp(r)):r.Va.set("Unknown")}async function KC(r,e,t){if(r.Va.set("Online"),e instanceof Mw&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const m of l.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.da.removeTarget(m))})(r,e)}catch(s){ne(As,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Rc(r,s)}else if(e instanceof ac?r.da.Xe(e):e instanceof Ow?r.da.st(e):r.da.tt(e),!t.isEqual(ye.min()))try{const s=await Gw(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const m=l.da.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ea.get(_);E&&l.Ea.set(_,E.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const E=l.Ea.get(g);if(!E)return;l.Ea.set(g,E.withResumeToken(Dt.EMPTY_BYTE_STRING,E.snapshotVersion)),Xw(l,g);const R=new Ai(E.target,g,_,E.sequenceNumber);ip(l,R)})),l.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){ne(As,"Failed to raise snapshot:",s),await Rc(r,s)}}async function Rc(r,e,t){if(!$o(e))throw e;r.Ia.add(1),await Tl(r),r.Va.set("Offline"),t||(t=()=>Gw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(As,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Kc(r)}))}function e0(r,e){return e().catch((t=>Rc(r,t,e)))}async function Gc(r){const e=ve(r),t=bi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bf;for(;GC(e);)try{const o=await CC(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,QC(e,o)}catch(o){await Rc(e,o)}t0(e)&&n0(e)}function GC(r){return xs(r)&&r.Ta.length<10}function QC(r,e){r.Ta.push(e);const t=bi(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function t0(r){return xs(r)&&!bi(r).x_()&&r.Ta.length>0}function n0(r){bi(r).start()}async function YC(r){bi(r).ra()}async function JC(r){const e=bi(r);for(const t of r.Ta)e.ea(t.mutations)}async function XC(r,e,t){const s=r.Ta.shift(),o=Yf.from(s,e,t);await e0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Gc(r)}async function ZC(r,e){e&&bi(r).Y_&&await(async function(s,o){if((function(h){return bR(h)&&h!==B.ABORTED})(o.code)){const l=s.Ta.shift();bi(s).B_(),await e0(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Gc(s)}})(r,e),t0(r)&&n0(r)}async function c_(r,e){const t=ve(r);t.asyncQueue.verifyOperationInProgress(),ne(As,"RemoteStore received new credentials");const s=xs(t);t.Ia.add(3),await Tl(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Kc(t)}async function eP(r,e){const t=ve(r);e?(t.Ia.delete(2),await Kc(t)):e||(t.Ia.add(2),await Tl(t),t.Va.set("Unknown"))}function Ho(r){return r.ma||(r.ma=(function(t,s,o){const l=ve(t);return l.sa(),new LC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:qC.bind(null,r),Yo:HC.bind(null,r),t_:WC.bind(null,r),H_:KC.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),op(r)?sp(r):r.Va.set("Unknown")):(await r.ma.stop(),Zw(r))}))),r.ma}function bi(r){return r.fa||(r.fa=(function(t,s,o){const l=ve(t);return l.sa(),new FC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:YC.bind(null,r),t_:ZC.bind(null,r),ta:JC.bind(null,r),na:XC.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Gc(r)):(await r.fa.stop(),r.Ta.length>0&&(ne(As,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class ap{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,m=new ap(e,t,h,o,l);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lp(r,e){if(zr("AsyncQueue",`${e}: ${r}`),$o(r))return new ee(B.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class No{static emptySet(e){return new No(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||le.comparator(t.key,s.key):(t,s)=>le.comparator(t.key,s.key),this.keyedMap=Wa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof No)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new No;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class h_{constructor(){this.ga=new et(le.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):fe(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Lo{constructor(e,t,s,o,l,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Lo(e,t,No.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class tP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class nP{constructor(){this.queries=d_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=ve(t),l=o.queries;o.queries=d_(),l.forEach(((h,m)=>{for(const g of m.Sa)g.onError(s)}))})(this,new ee(B.ABORTED,"Firestore shutting down"))}}function d_(){return new Ps((r=>Tw(r)),zc)}async function r0(r,e){const t=ve(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(s=2):(l=new tP,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=lp(h,`Initialization of query '${To(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&up(t)}async function i0(r,e){const t=ve(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function rP(r,e){const t=ve(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&up(t)}function iP(r,e,t){const s=ve(r),o=s.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);s.queries.delete(e)}function up(r){r.Ca.forEach((e=>{e.next()}))}var yf,f_;(f_=yf||(yf={})).Ma="default",f_.Cache="cache";class s0{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==yf.Cache}}/**
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
 */class o0{constructor(e){this.key=e}}class a0{constructor(e){this.key=e}}class sP{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ke(),this.mutatedKeys=ke(),this.eu=Iw(e),this.tu=new No(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new h_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,R)=>{const V=o.get(E),z=Bc(this.query,R)?R:null,Y=!!V&&this.mutatedKeys.has(V.key),J=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let G=!1;V&&z?V.data.isEqual(z.data)?Y!==J&&(s.track({type:3,doc:z}),G=!0):this.su(V,z)||(s.track({type:2,doc:z}),G=!0,(g&&this.eu(z,g)>0||_&&this.eu(z,_)<0)&&(m=!0)):!V&&z?(s.track({type:0,doc:z}),G=!0):V&&!z&&(s.track({type:1,doc:V}),G=!0,(g||_)&&(m=!0)),G&&(z?(h=h.add(z),l=J?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,bs:m,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,R)=>(function(z,Y){const J=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Vt:G})}};return J(z)-J(Y)})(E.type,R.type)||this.eu(E.doc,R.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new Lo(this.query,e.tu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new h_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ke(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new a0(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new o0(s))})),t}cu(e){this.Za=e.ks,this.Ya=ke();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Lo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const cp="SyncEngine";class oP{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class aP{constructor(e){this.key=e,this.hu=!1}}class lP{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ps((m=>Tw(m)),zc),this.Eu=new Map,this.Iu=new Set,this.Ru=new et(le.comparator),this.Au=new Map,this.Vu=new Zf,this.du={},this.mu=new Map,this.fu=Mo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uP(r,e,t=!0){const s=f0(r);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await l0(s,e,t,!0),o}async function cP(r,e){const t=f0(r);await l0(t,e,!0,!1)}async function l0(r,e,t,s){const o=await PC(r.localStore,ur(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let m;return s&&(m=await hP(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Jw(r.remoteStore,o),m}async function hP(r,e,t,s,o){r.pu=(R,V,z)=>(async function(J,G,me,ge){let Ee=G.view.ru(me);Ee.bs&&(Ee=await s_(J.localStore,G.query,!1).then((({documents:A})=>G.view.ru(A,Ee))));const Ve=ge&&ge.targetChanges.get(G.targetId),Le=ge&&ge.targetMismatches.get(G.targetId)!=null,Pe=G.view.applyChanges(Ee,J.isPrimaryClient,Ve,Le);return m_(J,G.targetId,Pe.au),Pe.snapshot})(r,R,V,z);const l=await s_(r.localStore,e,!0),h=new sP(e,l.ks),m=h.ru(l.documents),g=El.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);m_(r,t,_.au);const E=new oP(e,t,h);return r.Tu.set(e,E),r.Eu.has(t)?r.Eu.get(t).push(e):r.Eu.set(t,[e]),_.snapshot}async function dP(r,e,t){const s=ve(r),o=s.Tu.get(e),l=s.Eu.get(o.targetId);if(l.length>1)return s.Eu.set(o.targetId,l.filter((h=>!zc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await mf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&rp(s.remoteStore,o.targetId),_f(s,o.targetId)})).catch(Bo)):(_f(s,o.targetId),await mf(s.localStore,o.targetId,!0))}async function fP(r,e){const t=ve(r),s=t.Tu.get(e),o=t.Eu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),rp(t.remoteStore,s.targetId))}async function pP(r,e,t){const s=EP(r);try{const o=await(function(h,m){const g=ve(h),_=Qe.now(),E=m.reduce(((z,Y)=>z.add(Y.key)),ke());let R,V;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Y=Br(),J=ke();return g.xs.getEntries(z,E).next((G=>{Y=G,Y.forEach(((me,ge)=>{ge.isValidDocument()||(J=J.add(me))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,Y))).next((G=>{R=G;const me=[];for(const ge of m){const Ee=CR(ge,R.get(ge.key).overlayedDocument);Ee!=null&&me.push(new Fi(ge.key,Ee,pw(Ee.value.mapValue),Sn.exists(!0)))}return g.mutationQueue.addMutationBatch(z,_,me,m)})).next((G=>{V=G;const me=G.applyToLocalDocumentSet(R,J);return g.documentOverlayCache.saveOverlays(z,G.batchId,me)}))})).then((()=>({batchId:V.batchId,changes:Aw(R)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.du[h.currentUser.toKey()];_||(_=new et(Ae)),_=_.insert(m,g),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await Il(s,o.changes),await Gc(s.remoteStore)}catch(o){const l=lp(o,"Failed to persist write");t.reject(l)}}async function u0(r,e){const t=ve(r);try{const s=await kC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ue(h.hu,14607):o.removedDocuments.size>0&&(Ue(h.hu,42227),h.hu=!1))})),await Il(t,s,e)}catch(s){await Bo(s)}}function p_(r,e,t){const s=ve(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((l,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=ve(h);g.onlineState=m;let _=!1;g.queries.forEach(((E,R)=>{for(const V of R.Sa)V.va(m)&&(_=!0)})),_&&up(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function mP(r,e,t){const s=ve(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let h=new et(le.comparator);h=h.insert(l,zt.newNoDocument(l,ye.min()));const m=ke().add(l),g=new Hc(ye.min(),new Map,new et(Ae),h,m);await u0(s,g),s.Ru=s.Ru.remove(l),s.Au.delete(e),hp(s)}else await mf(s.localStore,e,!1).then((()=>_f(s,e,t))).catch(Bo)}async function gP(r,e){const t=ve(r),s=e.batch.batchId;try{const o=await AC(t.localStore,e);h0(t,s,null),c0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Il(t,o)}catch(o){await Bo(o)}}async function yP(r,e,t){const s=ve(r);try{const o=await(function(h,m){const g=ve(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,m).next((R=>(Ue(R!==null,37113),E=R.keys(),g.mutationQueue.removeMutationBatch(_,R)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);h0(s,e,t),c0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Il(s,o)}catch(o){await Bo(o)}}function c0(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function h0(r,e,t){const s=ve(r);let o=s.du[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function _f(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Eu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||d0(r,s)}))}function d0(r,e){r.Iu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(rp(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),hp(r))}function m_(r,e,t){for(const s of t)s instanceof o0?(r.Vu.addReference(s.key,e),_P(r,s)):s instanceof a0?(ne(cp,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||d0(r,s.key)):fe(19791,{wu:s})}function _P(r,e){const t=e.key,s=t.path.canonicalString();r.Ru.get(t)||r.Iu.has(s)||(ne(cp,"New document in limbo: "+t),r.Iu.add(s),hp(r))}function hp(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new le(qe.fromString(e)),s=r.fu.next();r.Au.set(s,new aP(t)),r.Ru=r.Ru.insert(t,s),Jw(r.remoteStore,new Ai(ur(Kf(t.path)),s,"TargetPurposeLimboResolution",Fc.ce))}}async function Il(r,e,t){const s=ve(r),o=[],l=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{h.push(s.pu(g,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const R=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,R?"current":"not-current")}if(_){o.push(_);const R=tp.Is(g.targetId,_);l.push(R)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(g,_){const E=ve(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(R=>$.forEach(_,(V=>$.forEach(V.Ts,(z=>E.persistence.referenceDelegate.addReference(R,V.targetId,z))).next((()=>$.forEach(V.Es,(z=>E.persistence.referenceDelegate.removeReference(R,V.targetId,z)))))))))}catch(R){if(!$o(R))throw R;ne(np,"Failed to update sequence numbers: "+R)}for(const R of _){const V=R.targetId;if(!R.fromCache){const z=E.vs.get(V),Y=z.snapshotVersion,J=z.withLastLimboFreeSnapshotVersion(Y);E.vs=E.vs.insert(V,J)}}})(s.localStore,l))}async function vP(r,e){const t=ve(r);if(!t.currentUser.isEqual(e)){ne(cp,"User change. New user:",e.toKey());const s=await Kw(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((m=>{m.forEach((g=>{g.reject(new ee(B.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Il(t,s.Ns)}}function wP(r,e){const t=ve(r),s=t.Au.get(e);if(s&&s.hu)return ke().add(s.key);{let o=ke();const l=t.Eu.get(e);if(!l)return o;for(const h of l){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function f0(r){const e=ve(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=u0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mP.bind(null,e),e.Pu.H_=rP.bind(null,e.eventManager),e.Pu.yu=iP.bind(null,e.eventManager),e}function EP(r){const e=ve(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yP.bind(null,e),e}class Cc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return SC(this.persistence,new EC,e.initialUser,this.serializer)}Cu(e){return new Ww(ep.Vi,this.serializer)}Du(e){return new NC}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cc.provider={build:()=>new Cc};class TP extends Cc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof kc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new oC(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Ww((s=>kc.Vi(s,t)),this.serializer)}}class vf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>p_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=vP.bind(null,this.syncEngine),await eP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new nP})()}createDatastore(e){const t=Wc(e.databaseInfo.databaseId),s=MC(e.databaseInfo);return zC(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,m){return new $C(s,o,l,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>p_(this.syncEngine,t,0)),(function(){return l_.v()?new l_:new DC})())}createSyncEngine(e,t){return(function(o,l,h,m,g,_,E){const R=new lP(o,l,h,m,g,_);return E&&(R.gu=!0),R})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=ve(o);ne(As,"RemoteStore shutting down."),l.Ia.add(5),await Tl(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}vf.provider={build:()=>new vf};/**
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
 */class p0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Vi="FirestoreClient";class IP{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=zf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Vi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Vi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=lp(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Wd(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Vi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Kw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function g_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await SP(r);ne(Vi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>c_(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>c_(e.remoteStore,o))),r._onlineComponents=e}async function SP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Vi,"Using user provided OfflineComponentProvider");try{await Wd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ss("Error using user provided cache. Falling back to memory cache: "+t),await Wd(r,new Cc)}}else ne(Vi,"Using default OfflineComponentProvider"),await Wd(r,new TP(void 0));return r._offlineComponents}async function m0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Vi,"Using user provided OnlineComponentProvider"),await g_(r,r._uninitializedComponentsProvider._online)):(ne(Vi,"Using default OnlineComponentProvider"),await g_(r,new vf))),r._onlineComponents}function AP(r){return m0(r).then((e=>e.syncEngine))}async function g0(r){const e=await m0(r),t=e.eventManager;return t.onListen=uP.bind(null,e.syncEngine),t.onUnlisten=dP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fP.bind(null,e.syncEngine),t}function kP(r,e,t={}){const s=new Fr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const E=new p0({next:V=>{E.Nu(),h.enqueueAndForget((()=>i0(l,R)));const z=V.docs.has(m);!z&&V.fromCache?_.reject(new ee(B.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&V.fromCache&&g&&g.source==="server"?_.reject(new ee(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(V)},error:V=>_.reject(V)}),R=new s0(Kf(m.path),E,{includeMetadataChanges:!0,qa:!0});return r0(l,R)})(await g0(r),r.asyncQueue,e,t,s))),s.promise}function RP(r,e,t={}){const s=new Fr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const E=new p0({next:V=>{E.Nu(),h.enqueueAndForget((()=>i0(l,R))),V.fromCache&&g.source==="server"?_.reject(new ee(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(V)},error:V=>_.reject(V)}),R=new s0(m,E,{includeMetadataChanges:!0,qa:!0});return r0(l,R)})(await g0(r),r.asyncQueue,e,t,s))),s.promise}function CP(r,e){const t=new Fr;return r.asyncQueue.enqueueAndForget((async()=>pP(await AP(r),e,t))),t.promise}/**
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
 */function y0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const PP="ComponentProvider",y_=new Map;function xP(r,e,t,s,o){return new Yk(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,y0(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const _0="firestore.googleapis.com",__=!0;class v_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_0,this.ssl=__}else this.host=e.host,this.ssl=e.ssl??__;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iC)throw new ee(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=y0(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new v_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new v_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Pk;switch(s.type){case"firstParty":return new bk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=y_.get(t);s&&(ne(PP,"Removing Datastore"),y_.delete(t),s.terminate())})(this),Promise.resolve()}}function NP(r,e,t,s={}){var _;r=jn(r,Qc);const o=pl(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&U_(`https://${m}`),l.host!==_0&&l.host!==m&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:m,ssl:o,emulatorOptions:s};if(!_s(g,h)&&(r._setSettings(g),s.mockUserToken)){let E,R;if(typeof s.mockUserToken=="string")E=s.mockUserToken,R=jt.MOCK_USER;else{E=gT(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const V=s.mockUserToken.sub||s.mockUserToken.user_id;if(!V)throw new ee(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new jt(V)}r._authCredentials=new xk(new nw(E,R))}}/**
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
 */class Ui{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ui(this.firestore,e,this._query)}}class ut{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(vl(t,ut._jsonSchema))return new ut(e,s||null,new le(qe.fromString(t.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:mt("string",ut._jsonSchemaVersion),referencePath:mt("string")};class Ci extends Ui{constructor(e,t,s){super(e,t,Kf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new le(e))}withConverter(e){return new Ci(this.firestore,e,this._path)}}function On(r,e,...t){if(r=gt(r),rw("collection","path",e),r instanceof Qc){const s=qe.fromString(e,...t);return Dy(s),new Ci(r,null,s)}{if(!(r instanceof ut||r instanceof Ci))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return Dy(s),new Ci(r.firestore,null,s)}}function wn(r,e,...t){if(r=gt(r),arguments.length===1&&(e=zf.newId()),rw("doc","path",e),r instanceof Qc){const s=qe.fromString(e,...t);return Ny(s),new ut(r,null,new le(s))}{if(!(r instanceof ut||r instanceof Ci))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return Ny(s),new ut(r.firestore,r instanceof Ci?r.converter:null,new le(s))}}/**
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
 */const w_="AsyncQueue";class E_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qw(this,"async_queue_retry"),this._c=()=>{const s=Hd();s&&ne(w_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Hd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Hd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Fr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!$o(e))throw e;ne(w_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,zr("INTERNAL UNHANDLED ERROR: ",T_(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=ap.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&fe(47125,{Pc:T_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function T_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Ns extends Qc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new E_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new E_(e),this._firestoreClient=void 0,await e}}}function DP(r,e){const t=typeof r=="object"?r:Sf(),s=typeof r=="string"?r:vc,o=Fo(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=pT("firestore");l&&NP(o,...l)}return o}function dp(r){if(r._terminated)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||bP(r),r._firestoreClient}function bP(r){var s,o,l,h;const e=r._freezeSettings(),t=xP(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new IP(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(r._componentsProvider))}/**
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
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(Dt.fromBase64String(e))}catch(t){throw new ee(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vl(e,Tn._jsonSchema))return Tn.fromBase64String(e.bytes)}}Tn._jsonSchemaVersion="firestore/bytes/1.0",Tn._jsonSchema={type:mt("string",Tn._jsonSchemaVersion),bytes:mt("string")};/**
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
 */class fp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pp{constructor(e){this._methodName=e}}/**
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
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(vl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:mt("string",hr._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class Ln{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vl(e,Ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ln(e.vectorValues);throw new ee(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ln._jsonSchemaVersion="firestore/vectorValue/1.0",Ln._jsonSchema={type:mt("string",Ln._jsonSchemaVersion),vectorValues:mt("object")};/**
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
 */const VP=/^__.*__$/;class OP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms):new wl(e,this.data,t,this.fieldTransforms)}}class v0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function w0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{dataSource:r})}}class mp{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new mp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Pc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(w0(this.dataSource)&&VP.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class MP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Wc(e)}A(e,t,s,o=!1){return new mp({dataSource:e,methodName:t,targetDoc:s,path:Nt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yc(r){const e=r._freezeSettings(),t=Wc(r._databaseId);return new MP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function E0(r,e,t,s,o,l={}){const h=r.A(l.merge||l.mergeFields?2:0,e,t,o);gp("Data must be an object, but it was:",h,s);const m=T0(s,h);let g,_;if(l.merge)g=new hn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const R of l.mergeFields){const V=ks(e,R,t);if(!h.contains(V))throw new ee(B.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);A0(E,V)||E.push(V)}g=new hn(E),_=h.fieldTransforms.filter((R=>g.covers(R.field)))}else g=null,_=h.fieldTransforms;return new OP(new Zt(m),g,_)}class Jc extends pp{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jc}}function LP(r,e,t,s){const o=r.A(1,e,t);gp("Data must be an object, but it was:",o,s);const l=[],h=Zt.empty();Li(s,((g,_)=>{const E=S0(e,g,t);_=gt(_);const R=o.fc(E);if(_ instanceof Jc)l.push(E);else{const V=Sl(_,R);V!=null&&(l.push(E),h.set(E,V))}}));const m=new hn(l);return new v0(h,m,o.fieldTransforms)}function FP(r,e,t,s,o,l){const h=r.A(1,e,t),m=[ks(e,s,t)],g=[o];if(l.length%2!=0)throw new ee(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let V=0;V<l.length;V+=2)m.push(ks(e,l[V])),g.push(l[V+1]);const _=[],E=Zt.empty();for(let V=m.length-1;V>=0;--V)if(!A0(_,m[V])){const z=m[V];let Y=g[V];Y=gt(Y);const J=h.fc(z);if(Y instanceof Jc)_.push(z);else{const G=Sl(Y,J);G!=null&&(_.push(z),E.set(z,G))}}const R=new hn(_);return new v0(E,R,h.fieldTransforms)}function UP(r,e,t,s=!1){return Sl(t,r.A(s?4:3,e))}function Sl(r,e){if(I0(r=gt(r)))return gp("Unsupported field value:",e,r),T0(r,e);if(r instanceof pp)return(function(s,o){if(!w0(o.dataSource))throw o.yc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const m of s){let g=Sl(m,o.gc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return TR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Qe.fromDate(s);return{timestampValue:Ac(o.serializer,l)}}if(s instanceof Qe){const l=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ac(o.serializer,l)}}if(s instanceof hr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Tn)return{bytesValue:Lw(o.serializer,s._byteString)};if(s instanceof ut){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Xf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ln)return(function(h,m){const g=h instanceof Ln?h.toArray():h;return{mapValue:{fields:{[dw]:{stringValue:fw},[wc]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw m.yc("VectorValues must only contain numeric values.");return Gf(m.serializer,E)}))}}}}}})(s,o);if(qw(s))return s._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Lc(s)}`)})(r,e)}function T0(r,e){const t={};return ow(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(r,((s,o)=>{const l=Sl(o,e.dc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function I0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Qe||r instanceof hr||r instanceof Tn||r instanceof ut||r instanceof pp||r instanceof Ln||qw(r))}function gp(r,e,t){if(!I0(t)||!iw(t)){const s=Lc(t);throw s==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+s)}}function ks(r,e,t){if((e=gt(e))instanceof fp)return e._internalPath;if(typeof e=="string")return S0(r,e);throw Pc("Field path arguments must be of type string or ",r,!1,void 0,t)}const jP=new RegExp("[~\\*/\\[\\]]");function S0(r,e,t){if(e.search(jP)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new fp(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Pc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ee(B.INVALID_ARGUMENT,m+r+g)}function A0(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class zP{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Li(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,o,l;const t=(l=(o=(s=e.fields)==null?void 0:s[wc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>lt(h.doubleValue)));return new Ln(t)}convertGeoPoint(e){return new hr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=jc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(al(e));default:return null}}convertTimestamp(e){const t=xi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=qe.fromString(e);Ue($w(s),9688,{name:e});const o=new ll(s.get(1),s.get(3)),l=new le(s.popFirst(5));return o.isEqual(t)||zr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class k0 extends zP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,t)}}const I_="@firebase/firestore",S_="4.13.0";/**
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
 */class R0{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ks("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BP extends R0{data(){return super.data()}}/**
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
 */function $P(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ee(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yp{}class _p extends yp{}function wi(r,e,...t){let s=[];e instanceof yp&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof vp)).length,m=l.filter((g=>g instanceof Xc)).length;if(h>1||h>0&&m>0)throw new ee(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Xc extends _p{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Xc(e,t,s)}_apply(e){const t=this._parse(e);return C0(e._query,t),new Ui(e.firestore,e.converter,cf(e._query,t))}_parse(e){const t=Yc(e.firestore);return(function(l,h,m,g,_,E,R){let V;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ee(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){k_(R,E);const Y=[];for(const J of R)Y.push(A_(g,l,J));V={arrayValue:{values:Y}}}else V=A_(g,l,R)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||k_(R,E),V=UP(m,h,R,E==="in"||E==="not-in");return pt.create(_,E,V)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ku(r,e,t){const s=e,o=ks("where",r);return Xc._create(o,s,t)}class vp extends yp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vp(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const m=l.getFlattenedFilters();for(const g of m)C0(h,g),h=cf(h,g)})(e._query,t),new Ui(e.firestore,e.converter,cf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wp extends _p{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ee(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cl(l,h)})(e._query,this._field,this._direction);return new Ui(e.firestore,e.converter,pR(e._query,t))}}function Gu(r,e="asc"){const t=e,s=ks("orderBy",r);return wp._create(s,t)}class Ep extends _p{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Ep(e,t,s)}_apply(e){return new Ui(e.firestore,e.converter,Tc(e._query,this._limit,this._limitType))}}function qP(r){return Ep._create("limit",r,"F")}function A_(r,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new ee(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ew(e)&&t.indexOf("/")!==-1)throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(qe.fromString(t));if(!le.isDocumentKey(s))throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return jy(r,new le(s))}if(t instanceof ut)return jy(r,t._key);throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lc(t)}.`)}function k_(r,e){if(!Array.isArray(r)||r.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function C0(r,e){const t=(function(o,l){for(const h of o)for(const m of h.getFlattenedFilters())if(l.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function P0(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ys extends R0{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ks("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ys._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ys._jsonSchemaVersion="firestore/documentSnapshot/1.0",ys._jsonSchema={type:mt("string",ys._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class lc extends ys{data(e={}){return super.data(e)}}class Do{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ga(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new lc(this._firestore,this._userDataWriter,s.key,s,new Ga(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new lc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ga(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>l||m.type!==3)).map((m=>{const g=new lc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ga(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:HP(m.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Do._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=zf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function HP(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:r})}}/**
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
 */Do._jsonSchemaVersion="firestore/querySnapshot/1.0",Do._jsonSchema={type:mt("string",Do._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};/**
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
 */function WP(r){r=jn(r,ut);const e=jn(r.firestore,Ns),t=dp(e);return kP(t,r._key).then((s=>GP(e,r,s)))}function fs(r){r=jn(r,Ui);const e=jn(r.firestore,Ns),t=dp(e),s=new k0(e);return $P(r._query),RP(t,r._query).then((o=>new Do(e,s,r,o)))}function KP(r,e,t){r=jn(r,ut);const s=jn(r.firestore,Ns),o=P0(r.converter,e),l=Yc(s);return Zc(s,[E0(l,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Sn.none())])}function Ba(r,e,t,...s){r=jn(r,ut);const o=jn(r.firestore,Ns),l=Yc(o);let h;return h=typeof(e=gt(e))=="string"||e instanceof fp?FP(l,"updateDoc",r._key,e,t,s):LP(l,"updateDoc",r._key,e),Zc(o,[h.toMutation(r._key,Sn.exists(!0))])}function Qu(r){return Zc(jn(r.firestore,Ns),[new Qf(r._key,Sn.none())])}function Yu(r,e){const t=jn(r.firestore,Ns),s=wn(r),o=P0(r.converter,e),l=Yc(r.firestore);return Zc(t,[E0(l,"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Sn.exists(!1))]).then((()=>s))}function Zc(r,e){const t=dp(r);return CP(t,e)}function GP(r,e,t){const s=t.docs.get(e._key),o=new k0(r);return new ys(r,o,e._key,s,new Ga(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Ck(Uo),dr(new Fn("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),m=new Ns(new Nk(s.getProvider("auth-internal")),new Vk(h,s.getProvider("app-check-internal")),Jk(h,o),h);return l={useFetchStreams:t,...l},m._setSettings(l),m}),"PUBLIC").setMultipleInstances(!0)),In(I_,S_,e),In(I_,S_,"esm2020")})();const QP={apiKey:"AIzaSyDuxT03D9vxSWE5Fw29sdsnCohTtGj32fo",authDomain:"ipreu-95300.firebaseapp.com",projectId:"ipreu-95300",storageBucket:"ipreu-95300.firebasestorage.app",messagingSenderId:"921313347665",appId:"1:921313347665:web:128cdbb3e428b113a71070"},Tp=B_(QP),Ao=XA(Tp),rt=DP(Tp),Ju=typeof window<"u"?Ak(Tp):null,Ip="uc_token",Sp="uc_user";function R_(r,e){try{localStorage.setItem(Ip,r),localStorage.setItem(Sp,JSON.stringify(e))}catch(t){console.error("Failed to save session",t)}}function YP(){try{const r=localStorage.getItem(Ip),e=localStorage.getItem(Sp);return{token:r,user:e?JSON.parse(e):null}}catch{return{token:null,user:null}}}function JP(){try{localStorage.removeItem(Ip),localStorage.removeItem(Sp),ec(Ao).catch(console.error)}catch(r){console.error("Failed to clear session",r)}}const Ge={login:async(r,e)=>{if(!e)throw new Error("Password required");const t=await US(Ao,r,e),s=await WP(wn(rt,"users",t.user.uid));if(!s.exists())throw await ec(Ao),new Error("User record not found in database.");const o={id:s.id,...s.data()};if(o.role==="PENDING")throw await ec(Ao),new Error("Your application is still pending approval. Please check back later.");return{token:await t.user.getIdToken(),user:o}},register:async r=>{if(!r.password)throw new Error("Password required");if(!r.email)throw new Error("Email required");const e=wi(On(rt,"users"),Ku("email","==",r.email.toLowerCase()));if(!(await fs(e)).empty)throw new Error("An account with this email already exists.");const s=await FS(Ao,r.email,r.password),{password:o,...l}=r;return l.email=r.email.toLowerCase(),await KP(wn(rt,"users",s.user.uid),{...l,role:"PENDING",createdAt:new Date().toISOString()}),await ec(Ao),!0},getAnnouncements:async()=>{const r=wi(On(rt,"announcements"),Gu("createdAt","desc"),qP(30));return(await fs(r)).docs.map(t=>({id:t.id,...t.data()}))},createAnnouncement:async r=>{const e=new Date().toISOString();return{id:(await Yu(On(rt,"announcements"),{...r,createdAt:e})).id,...r,createdAt:e}},deleteAnnouncement:async r=>(await Qu(wn(rt,"announcements",r)),!0),updateAnnouncement:async(r,e)=>(await Ba(wn(rt,"announcements",r),e),!0),getPendingUsers:async()=>{const r=wi(On(rt,"users"),Ku("role","==","PENDING"));return(await fs(r)).docs.map(t=>({id:t.id,...t.data()}))},getApprovedUsers:async()=>{const r=wi(On(rt,"users"),Ku("role","==","MEMBER"));return(await fs(r)).docs.map(t=>({id:t.id,...t.data()}))},approveUser:async r=>(await Ba(wn(rt,"users",r),{role:"MEMBER"}),!0),rejectUser:async r=>(await Qu(wn(rt,"users",r)),!0),getSurveys:async()=>{const r=wi(On(rt,"surveys"));return(await fs(r)).docs.map(t=>({id:t.id,...t.data()}))},createSurvey:async r=>({id:(await Yu(On(rt,"surveys"),r)).id,...r}),deleteSurvey:async r=>(await Qu(wn(rt,"surveys",r)),!0),updateSurvey:async(r,e)=>(await Ba(wn(rt,"surveys",r),e),!0),getCalendarEvents:async()=>{const r=wi(On(rt,"calendar"),Gu("date","asc"));return(await fs(r)).docs.map(t=>({id:t.id,...t.data()}))},createCalendarEvent:async r=>({id:(await Yu(On(rt,"calendar"),r)).id,...r}),deleteCalendarEvent:async r=>(await Qu(wn(rt,"calendar",r)),!0),getGrievances:async r=>{let e;const t=On(rt,"grievances");return r?e=wi(t,Ku("userId","==",r),Gu("createdAt","desc")):e=wi(t,Gu("createdAt","desc")),(await fs(e)).docs.map(o=>({id:o.id,...o.data()}))},createGrievance:async r=>({id:(await Yu(On(rt,"grievances"),r)).id,...r}),updateGrievance:async(r,e)=>(await Ba(wn(rt,"grievances",r),e),!0),saveFcmToken:async(r,e)=>{const t=wn(rt,"users",r);await Ba(t,{fcmToken:e})}},C_=at.lazy(()=>Ef(()=>import("./Auth-CmE5z_5t.js"),[])),XP=at.lazy(()=>Ef(()=>import("./AdminDashboard-BatqYwgc.js"),__vite__mapDeps([0,1]))),ZP=at.lazy(()=>Ef(()=>import("./MemberDashboard-CMWYaDM9.js"),__vite__mapDeps([2,1]))),ex=[{id:"survey-1",question:"What should be the theme for our annual union gala?",options:[{id:"opt-1-1",text:"Masquerade Ball"},{id:"opt-1-2",text:"Retro 80s Night"}],votes:{}}],x0=at.createContext(null),N0=()=>{const r=at.useContext(x0);if(!r)throw new Error("useAppContext must be used within AppProvider");return r};function tx(){const[r,e]=at.useState(!0),[t,s]=at.useState(!1),[o,l]=at.useState(()=>localStorage.getItem("theme")==="dark"),[h,m]=at.useState(null),[g,_]=at.useState([]),[E,R]=at.useState([]),[V,z]=at.useState([]),[Y,J]=at.useState([]),[G,me]=at.useState([]),[ge,Ee]=at.useState("dashboard");x_.useLayoutEffect(()=>{document.documentElement.classList.toggle("dark",o),localStorage.setItem("theme",o?"dark":"light")},[o]),at.useEffect(()=>{const A={dashboard:"My Dashboard | IPREU",calendar:"Union Calendar | IPREU",grievances:"Secure Grievances | IPREU",overview:"Admin Overview | IPREU",members:"Manage Users | IPREU",announcements:"Broadcast | IPREU"};document.title=A[ge]||"IPREU Union Connect"},[ge]),at.useEffect(()=>{(async()=>{try{const[T,I,P]=await Promise.all([Ge.getSurveys(),Ge.getCalendarEvents(),Ge.getAnnouncements()]);T.length>0?_(T):_(ex),z(I),R(P);const C=YP();if(C&&C.user){m(C.user),Ve(C.user.id);const[O]=await Promise.all([Ge.getGrievances(C.user.role==="ADMIN"?void 0:C.user.id)]);if(J(O),C.user.role==="ADMIN"){const[k,ze]=await Promise.all([Ge.getPendingUsers(),Ge.getApprovedUsers()]);me([...k,...ze])}}}catch(T){console.error("Failed to load data:",T)}finally{e(!1)}})()},[]);const Ve=async A=>{if(Ju)try{if(await Notification.requestPermission()==="granted"){const I=await kk(Ju,{vapidKey:"BKZqsvNJwZbljTyY0T6ho_GruW2LiC8WBEre2uMqg6A-67sBHoF2RIg6VCX2BLMs0LVolggQTCap4zwDgedyKjI"});I&&await Ge.saveFcmToken(A,I)}}catch(T){console.error("FCM Registration failed:",T)}};at.useEffect(()=>{if(!Ju)return;const A=Rk(Ju,T=>{var I,P;alert(`Notification: ${(I=T.notification)==null?void 0:I.title}
${(P=T.notification)==null?void 0:P.body}`)});return()=>A()},[]);const Le=at.useMemo(()=>({currentUser:h,isDarkMode:o,toggleDarkMode:()=>l(A=>!A),users:G,surveys:g,announcements:E,calendarEvents:V,grievances:Y,fetchAnnouncements:async()=>{const A=await Ge.getAnnouncements();R(A)},memberLogin:async(A,T)=>{var I;try{const P=await Ge.login(A,T);return P.token&&P.user&&P.user.role==="MEMBER"?(m(P.user),R_(P.token,P.user),{success:!0}):{success:!1,error:"Access denied. Only members can login here."}}catch(P){return(I=P.message)!=null&&I.includes("pending approval")?{success:!1,pending:!0}:{success:!1,error:P.message||"Login failed"}}},adminLogin:async(A,T)=>{try{const I=await Ge.login(A,T);if(I.token&&I.user&&I.user.role==="ADMIN"){m(I.user),R_(I.token,I.user);const[P,C]=await Promise.all([Ge.getPendingUsers(),Ge.getApprovedUsers()]);return me([...P,...C]),{success:!0}}return{success:!1,error:"Access denied. Only admins can login here."}}catch(I){return{success:!1,error:I.message||"Admin login failed"}}},logout:()=>{m(null),JP()},register:async A=>(await Ge.register(A),!0),approveRegistration:async A=>{await Ge.approveUser(A),me(T=>T.map(I=>I.id===A?{...I,role:Qa.MEMBER}:I))},rejectRegistration:async A=>{await Ge.rejectUser(A),me(T=>T.filter(I=>I.id!==A))},createSurvey:async A=>{const T=await Ge.createSurvey({...A,votes:{}});_(I=>[T,...I])},deleteSurvey:async A=>{await Ge.deleteSurvey(A),_(T=>T.filter(I=>I.id!==A))},submitVote:async(A,T)=>{if(!h)return;const I=g.find(C=>C.id===A);if(!I||I.votes[h.id])return;const P={...I.votes,[h.id]:T};await Ge.updateSurvey(A,{votes:P}),_(C=>C.map(O=>O.id===A?{...O,votes:P}:O))},createAnnouncement:async(A,T,I)=>{const P=await Ge.createAnnouncement({title:A,content:T,attachment:I??void 0});R(C=>[P,...C])},updateAnnouncement:async(A,T,I)=>{await Ge.updateAnnouncement(A,{title:T,content:I}),R(P=>P.map(C=>C.id===A?{...C,title:T,content:I}:C))},deleteAnnouncement:async A=>{await Ge.deleteAnnouncement(A),R(T=>T.filter(I=>I.id!==A))},createCalendarEvent:async A=>{const T=await Ge.createCalendarEvent({...A,createdAt:new Date().toISOString()});z(I=>[...I,T])},deleteCalendarEvent:async A=>{await Ge.deleteCalendarEvent(A),z(T=>T.filter(I=>I.id!==A))},submitGrievance:async(A,T,I)=>{if(!h)return;const P={userId:h.id,userName:h.employeeName,subject:A,description:T,category:I,status:"NEW",createdAt:new Date().toISOString()},C=await Ge.createGrievance(P);J(O=>[C,...O])},respondToGrievance:async(A,T)=>{const I={response:T,respondedAt:new Date().toISOString(),status:"RESOLVED"};await Ge.updateGrievance(A,I),J(P=>P.map(C=>C.id===A?{...C,...I}:C))}}),[h,G,g,E,V,Y,o]),Pe=()=>{if(!h)return t?b.jsx(C_,{onBack:()=>s(!1)}):b.jsx(sT,{onLoginClick:()=>s(!0)});switch(h.role){case Qa.ADMIN:return b.jsx(XP,{activeTab:ge,setActiveTab:Ee});case Qa.MEMBER:return b.jsx(ZP,{activeTab:ge,setActiveTab:Ee});default:return b.jsx(C_,{onBack:()=>s(!1)})}};return r?b.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:b.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"})}):b.jsx(x0.Provider,{value:Le,children:b.jsxs("div",{className:"min-h-screen font-sans bg-gray-50/30 dark:bg-gray-950 transition-colors duration-300",children:[b.jsx(XE,{}),b.jsx("main",{className:"container mx-auto p-4 md:p-8",children:b.jsx(at.Suspense,{fallback:b.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:b.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"})}),children:Pe()})})]})})}const D0=document.getElementById("root");if(!D0)throw new Error("Could not find root element to mount to");const nx=GE.createRoot(D0);nx.render(b.jsx(x_.StrictMode,{children:b.jsx(tx,{})}));export{tT as C,rx as I,ZE as M,nT as P,Qa as U,JE as a,b as j,at as r,N0 as u};
