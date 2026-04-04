const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboard-U_Bv5a3W.js","assets/CheckCircleIcon-yn9B27Z5.js","assets/MemberDashboard-CsOYDMIU.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function L_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Cd={exports:{}},za={},Pd={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function H0(){if(Bg)return Se;Bg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.iterator;function b(P){return P===null||typeof P!="object"?null:(P=k&&P[k]||P["@@iterator"],typeof P=="function"?P:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,X={};function Q(P,q,le){this.props=P,this.context=q,this.refs=X,this.updater=le||B}Q.prototype.isReactComponent={},Q.prototype.setState=function(P,q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,q,"setState")},Q.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function me(){}me.prototype=Q.prototype;function ge(P,q,le){this.props=P,this.context=q,this.refs=X,this.updater=le||B}var Ee=ge.prototype=new me;Ee.constructor=ge,J(Ee,Q.prototype),Ee.isPureReactComponent=!0;var be=Array.isArray,Me=Object.prototype.hasOwnProperty,xe={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function R(P,q,le){var Ie,we={},Ue=null,Ce=null;if(q!=null)for(Ie in q.ref!==void 0&&(Ce=q.ref),q.key!==void 0&&(Ue=""+q.key),q)Me.call(q,Ie)&&!D.hasOwnProperty(Ie)&&(we[Ie]=q[Ie]);var Le=arguments.length-2;if(Le===1)we.children=le;else if(1<Le){for(var Ne=Array(Le),Rt=0;Rt<Le;Rt++)Ne[Rt]=arguments[Rt+2];we.children=Ne}if(P&&P.defaultProps)for(Ie in Le=P.defaultProps,Le)we[Ie]===void 0&&(we[Ie]=Le[Ie]);return{$$typeof:r,type:P,key:Ue,ref:Ce,props:we,_owner:xe.current}}function T(P,q){return{$$typeof:r,type:P.type,key:q,ref:P.ref,props:P.props,_owner:P._owner}}function C(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function S(P){var q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(le){return q[le]})}var V=/\/+/g;function I(P,q){return typeof P=="object"&&P!==null&&P.key!=null?S(""+P.key):q.toString(36)}function Te(P,q,le,Ie,we){var Ue=typeof P;(Ue==="undefined"||Ue==="boolean")&&(P=null);var Ce=!1;if(P===null)Ce=!0;else switch(Ue){case"string":case"number":Ce=!0;break;case"object":switch(P.$$typeof){case r:case e:Ce=!0}}if(Ce)return Ce=P,we=we(Ce),P=Ie===""?"."+I(Ce,0):Ie,be(we)?(le="",P!=null&&(le=P.replace(V,"$&/")+"/"),Te(we,q,le,"",function(Rt){return Rt})):we!=null&&(C(we)&&(we=T(we,le+(!we.key||Ce&&Ce.key===we.key?"":(""+we.key).replace(V,"$&/")+"/")+P)),q.push(we)),1;if(Ce=0,Ie=Ie===""?".":Ie+":",be(P))for(var Le=0;Le<P.length;Le++){Ue=P[Le];var Ne=Ie+I(Ue,Le);Ce+=Te(Ue,q,le,Ne,we)}else if(Ne=b(P),typeof Ne=="function")for(P=Ne.call(P),Le=0;!(Ue=P.next()).done;)Ue=Ue.value,Ne=Ie+I(Ue,Le++),Ce+=Te(Ue,q,le,Ne,we);else if(Ue==="object")throw q=String(P),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Ce}function nt(P,q,le){if(P==null)return P;var Ie=[],we=0;return Te(P,Ie,"","",function(Ue){return q.call(le,Ue,we++)}),Ie}function Et(P){if(P._status===-1){var q=P._result;q=q(),q.then(function(le){(P._status===0||P._status===-1)&&(P._status=1,P._result=le)},function(le){(P._status===0||P._status===-1)&&(P._status=2,P._result=le)}),P._status===-1&&(P._status=0,P._result=q)}if(P._status===1)return P._result.default;throw P._result}var ze={current:null},G={transition:null},ne={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:G,ReactCurrentOwner:xe};return Se.Children={map:nt,forEach:function(P,q,le){nt(P,function(){q.apply(this,arguments)},le)},count:function(P){var q=0;return nt(P,function(){q++}),q},toArray:function(P){return nt(P,function(q){return q})||[]},only:function(P){if(!C(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Se.Component=Q,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=ge,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,Se.cloneElement=function(P,q,le){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var Ie=J({},P.props),we=P.key,Ue=P.ref,Ce=P._owner;if(q!=null){if(q.ref!==void 0&&(Ue=q.ref,Ce=xe.current),q.key!==void 0&&(we=""+q.key),P.type&&P.type.defaultProps)var Le=P.type.defaultProps;for(Ne in q)Me.call(q,Ne)&&!D.hasOwnProperty(Ne)&&(Ie[Ne]=q[Ne]===void 0&&Le!==void 0?Le[Ne]:q[Ne])}var Ne=arguments.length-2;if(Ne===1)Ie.children=le;else if(1<Ne){Le=Array(Ne);for(var Rt=0;Rt<Ne;Rt++)Le[Rt]=arguments[Rt+2];Ie.children=Le}return{$$typeof:r,type:P.type,key:we,ref:Ue,props:Ie,_owner:Ce}},Se.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},Se.createElement=R,Se.createFactory=function(P){var q=R.bind(null,P);return q.type=P,q},Se.createRef=function(){return{current:null}},Se.forwardRef=function(P){return{$$typeof:m,render:P}},Se.isValidElement=C,Se.lazy=function(P){return{$$typeof:E,_payload:{_status:-1,_result:P},_init:Et}},Se.memo=function(P,q){return{$$typeof:_,type:P,compare:q===void 0?null:q}},Se.startTransition=function(P){var q=G.transition;G.transition={};try{P()}finally{G.transition=q}},Se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Se.useCallback=function(P,q){return ze.current.useCallback(P,q)},Se.useContext=function(P){return ze.current.useContext(P)},Se.useDebugValue=function(){},Se.useDeferredValue=function(P){return ze.current.useDeferredValue(P)},Se.useEffect=function(P,q){return ze.current.useEffect(P,q)},Se.useId=function(){return ze.current.useId()},Se.useImperativeHandle=function(P,q,le){return ze.current.useImperativeHandle(P,q,le)},Se.useInsertionEffect=function(P,q){return ze.current.useInsertionEffect(P,q)},Se.useLayoutEffect=function(P,q){return ze.current.useLayoutEffect(P,q)},Se.useMemo=function(P,q){return ze.current.useMemo(P,q)},Se.useReducer=function(P,q,le){return ze.current.useReducer(P,q,le)},Se.useRef=function(P){return ze.current.useRef(P)},Se.useState=function(P){return ze.current.useState(P)},Se.useSyncExternalStore=function(P,q,le){return ze.current.useSyncExternalStore(P,q,le)},Se.useTransition=function(){return ze.current.useTransition()},Se.version="18.2.0",Se}var zg;function Sf(){return zg||(zg=1,Pd.exports=H0()),Pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function W0(){if($g)return za;$g=1;var r=Sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var E,k={},b=null,B=null;_!==void 0&&(b=""+_),g.key!==void 0&&(b=""+g.key),g.ref!==void 0&&(B=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(k[E]=g[E]);if(m&&m.defaultProps)for(E in g=m.defaultProps,g)k[E]===void 0&&(k[E]=g[E]);return{$$typeof:e,type:m,key:b,ref:B,props:k,_owner:o.current}}return za.Fragment=t,za.jsx=h,za.jsxs=h,za}var qg;function K0(){return qg||(qg=1,Cd.exports=W0()),Cd.exports}var N=K0(),et=Sf();const F_=L_(et);var zu={},xd={exports:{}},Xt={},Nd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function G0(){return Hg||(Hg=1,(function(r){function e(G,ne){var P=G.length;G.push(ne);e:for(;0<P;){var q=P-1>>>1,le=G[q];if(0<o(le,ne))G[q]=ne,G[P]=le,P=q;else break e}}function t(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var ne=G[0],P=G.pop();if(P!==ne){G[0]=P;e:for(var q=0,le=G.length,Ie=le>>>1;q<Ie;){var we=2*(q+1)-1,Ue=G[we],Ce=we+1,Le=G[Ce];if(0>o(Ue,P))Ce<le&&0>o(Le,Ue)?(G[q]=Le,G[Ce]=P,q=Ce):(G[q]=Ue,G[we]=P,q=we);else if(Ce<le&&0>o(Le,P))G[q]=Le,G[Ce]=P,q=Ce;else break e}}return ne}function o(G,ne){var P=G.sortIndex-ne.sortIndex;return P!==0?P:G.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],E=1,k=null,b=3,B=!1,J=!1,X=!1,Q=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ee(G){for(var ne=t(_);ne!==null;){if(ne.callback===null)s(_);else if(ne.startTime<=G)s(_),ne.sortIndex=ne.expirationTime,e(g,ne);else break;ne=t(_)}}function be(G){if(X=!1,Ee(G),!J)if(t(g)!==null)J=!0,Et(Me);else{var ne=t(_);ne!==null&&ze(be,ne.startTime-G)}}function Me(G,ne){J=!1,X&&(X=!1,me(R),R=-1),B=!0;var P=b;try{for(Ee(ne),k=t(g);k!==null&&(!(k.expirationTime>ne)||G&&!S());){var q=k.callback;if(typeof q=="function"){k.callback=null,b=k.priorityLevel;var le=q(k.expirationTime<=ne);ne=r.unstable_now(),typeof le=="function"?k.callback=le:k===t(g)&&s(g),Ee(ne)}else s(g);k=t(g)}if(k!==null)var Ie=!0;else{var we=t(_);we!==null&&ze(be,we.startTime-ne),Ie=!1}return Ie}finally{k=null,b=P,B=!1}}var xe=!1,D=null,R=-1,T=5,C=-1;function S(){return!(r.unstable_now()-C<T)}function V(){if(D!==null){var G=r.unstable_now();C=G;var ne=!0;try{ne=D(!0,G)}finally{ne?I():(xe=!1,D=null)}}else xe=!1}var I;if(typeof ge=="function")I=function(){ge(V)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,nt=Te.port2;Te.port1.onmessage=V,I=function(){nt.postMessage(null)}}else I=function(){Q(V,0)};function Et(G){D=G,xe||(xe=!0,I())}function ze(G,ne){R=Q(function(){G(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_continueExecution=function(){J||B||(J=!0,Et(Me))},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(G){switch(b){case 1:case 2:case 3:var ne=3;break;default:ne=b}var P=b;b=ne;try{return G()}finally{b=P}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(G,ne){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var P=b;b=G;try{return ne()}finally{b=P}},r.unstable_scheduleCallback=function(G,ne,P){var q=r.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?q+P:q):P=q,G){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=P+le,G={id:E++,callback:ne,priorityLevel:G,startTime:P,expirationTime:le,sortIndex:-1},P>q?(G.sortIndex=P,e(_,G),t(g)===null&&G===t(_)&&(X?(me(R),R=-1):X=!0,ze(be,P-q))):(G.sortIndex=le,e(g,G),J||B||(J=!0,Et(Me))),G},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(G){var ne=b;return function(){var P=b;b=ne;try{return G.apply(this,arguments)}finally{b=P}}}})(Dd)),Dd}var Wg;function Q0(){return Wg||(Wg=1,Nd.exports=G0()),Nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Y0(){if(Kg)return Xt;Kg=1;var r=Sf(),e=Q0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},k={};function b(n){return g.call(k,n)?!0:g.call(E,n)?!1:_.test(n)?k[n]=!0:(E[n]=!0,!1)}function B(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function J(n,i,a,c){if(i===null||typeof i>"u"||B(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function X(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Q[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];Q[i]=new X(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){Q[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Q[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Q[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){Q[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){Q[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){Q[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){Q[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ge(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(me,ge);Q[i]=new X(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(me,ge);Q[i]=new X(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(me,ge);Q[i]=new X(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){Q[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){Q[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ee(n,i,a,c){var d=Q.hasOwnProperty(i)?Q[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(J(i,a,d,c)&&(a=null),c||d===null?b(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var be=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Me=Symbol.for("react.element"),xe=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),S=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),G=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var P=Object.assign,q;function le(n){if(q===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);q=i&&i[1]||""}return`
`+q+n}var Ie=!1;function we(n,i){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,A=f.length-1;1<=v&&0<=A&&d[v]!==f[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==f[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==f[A]){var x=`
`+d[v].replace(" at new "," at ");return n.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",n.displayName)),x}while(1<=v&&0<=A);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function Ue(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case xe:return"Portal";case T:return"Profiler";case R:return"StrictMode";case I:return"Suspense";case Te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case S:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case nt:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case Et:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}function Le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Rt(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ih(n){var i=Rt(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function bs(n){n._valueTracker||(n._valueTracker=ih(n))}function Go(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Rt(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Wr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Os(n,i){var a=i.checked;return P({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function kl(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ne(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ms(n,i){i=i.checked,i!=null&&Ee(n,"checked",i,!1)}function zi(n,i){Ms(n,i);var a=Ne(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ht(n,i.type,a):i.hasOwnProperty("defaultValue")&&ht(n,i.type,Ne(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Qo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ht(n,i,a){(i!=="number"||Wr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var at=Array.isArray;function Cn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ne(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Yo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return P({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Jo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(at(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ne(a)}}function Cl(n,i){var a=Ne(i.value),c=Ne(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Kr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Xo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ls(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Xo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Gr,Pl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Gr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function $i(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xl=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(n){xl.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Qr[i]=Qr[n]})});function Yr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Qr.hasOwnProperty(n)&&Qr[n]?(""+i).trim():i+"px"}function Fs(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Yr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Zo=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pn(n,i){if(i){if(Zo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Us(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jr=null;function js(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gr=null,yr=null,rt=null;function ea(n){if(n=ka(n)){if(typeof gr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ru(i),gr(n.stateNode,n.type,i))}}function Xr(n){yr?rt?rt.push(n):rt=[n]:yr=n}function Zr(){if(yr){var n=yr,i=rt;if(rt=yr=null,ea(n),i)for(n=0;n<i.length;n++)ea(i[n])}}function Nl(n,i){return n(i)}function Dl(){}var $n=!1;function Vl(n,i,a){if($n)return n(i,a);$n=!0;try{return Nl(n,i,a)}finally{$n=!1,(yr!==null||rt!==null)&&(Dl(),Zr())}}function qi(n,i){var a=n.stateNode;if(a===null)return null;var c=ru(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ei=!1;if(m)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){ei=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{ei=!1}function bl(n,i,a,c,d,f,v,A,x){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(W){this.onError(W)}}var _r=!1,qn=null,Bs=!1,mn=null,Ol={onError:function(n){_r=!0,qn=n}};function Ml(n,i,a,c,d,f,v,A,x){_r=!1,qn=null,bl.apply(Ol,arguments)}function ta(n,i,a,c,d,f,v,A,x){if(Ml.apply(this,arguments),_r){if(_r){var U=qn;_r=!1,qn=null}else throw Error(t(198));Bs||(Bs=!0,mn=U)}}function xn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function na(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ll(n){if(xn(n)!==n)throw Error(t(188))}function Fl(n){var i=n.alternate;if(!i){if(i=xn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return Ll(d),n;if(f===c)return Ll(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,A=d.child;A;){if(A===a){v=!0,a=d,c=f;break}if(A===c){v=!0,c=d,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,c=d;break}if(A===c){v=!0,c=f,a=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ul(n){return n=Fl(n),n!==null?Hi(n):null}function Hi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Hi(n);if(i!==null)return i;n=n.sibling}return null}var ra=e.unstable_scheduleCallback,zs=e.unstable_cancelCallback,Wi=e.unstable_shouldYield,vr=e.unstable_requestPaint,Ke=e.unstable_now,sh=e.unstable_getCurrentPriorityLevel,$s=e.unstable_ImmediatePriority,ia=e.unstable_UserBlockingPriority,Ki=e.unstable_NormalPriority,sa=e.unstable_LowPriority,qs=e.unstable_IdlePriority,Gi=null,nn=null;function jl(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Gi,n,void 0,(n.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Qi,Hn=Math.log,gn=Math.LN2;function Qi(n){return n>>>=0,n===0?32:31-(Hn(n)/gn|0)|0}var Wn=64,ni=4194304;function Fe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var A=v&~d;A!==0?c=Fe(A):(f&=v,f!==0&&(c=Fe(f)))}else v=a&~d,v!==0?c=Fe(v):f!==0&&(c=Fe(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-rn(i),d=1<<a,c|=n[a],i&=~d;return c}function Yi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ji(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-rn(f),A=1<<v,x=d[v];x===-1?((A&a)===0||(A&c)!==0)&&(d[v]=Yi(A,i)):x<=i&&(n.expiredLanes|=A),f&=~A}}function oa(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function aa(){var n=Wn;return Wn<<=1,(Wn&4194240)===0&&(Wn=64),n}function la(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Xi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-rn(i),n[i]=a}function oh(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-rn(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function ua(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-rn(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pe=0;function Kn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ca,Hs,ha,da,fa,Gn=!1,Ws=[],Qn=null,Yn=null,kt=null,Zi=new Map,Er=new Map,sn=[],Bl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ri(n,i){switch(n){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Zi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(i.pointerId)}}function Nn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=ka(i),i!==null&&Hs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function zl(n,i,a,c,d){switch(i){case"focusin":return Qn=Nn(Qn,n,i,a,c,d),!0;case"dragenter":return Yn=Nn(Yn,n,i,a,c,d),!0;case"mouseover":return kt=Nn(kt,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return Zi.set(f,Nn(Zi.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,Er.set(f,Nn(Er.get(f)||null,n,i,a,c,d)),!0}return!1}function Ks(n){var i=rs(n.target);if(i!==null){var a=xn(i);if(a!==null){if(i=a.tag,i===13){if(i=na(a),i!==null){n.blockedOn=i,fa(n.priority,function(){ha(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $e(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Gs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Jr=c,a.target.dispatchEvent(c),Jr=null}else return i=ka(a),i!==null&&Hs(i),n.blockedOn=a,!1;i.shift()}return!0}function $l(n,i,a){$e(n)&&a.delete(i)}function ah(){Gn=!1,Qn!==null&&$e(Qn)&&(Qn=null),Yn!==null&&$e(Yn)&&(Yn=null),kt!==null&&$e(kt)&&(kt=null),Zi.forEach($l),Er.forEach($l)}function ii(n,i){n.blockedOn===i&&(n.blockedOn=null,Gn||(Gn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ah)))}function si(n){function i(d){return ii(d,n)}if(0<Ws.length){ii(Ws[0],n);for(var a=1;a<Ws.length;a++){var c=Ws[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Qn!==null&&ii(Qn,n),Yn!==null&&ii(Yn,n),kt!==null&&ii(kt,n),Zi.forEach(i),Er.forEach(i),a=0;a<sn.length;a++)c=sn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<sn.length&&(a=sn[0],a.blockedOn===null);)Ks(a),a.blockedOn===null&&sn.shift()}var Tr=be.ReactCurrentBatchConfig,Ir=!0;function Jn(n,i,a,c){var d=Pe,f=Tr.transition;Tr.transition=null;try{Pe=1,pa(n,i,a,c)}finally{Pe=d,Tr.transition=f}}function ql(n,i,a,c){var d=Pe,f=Tr.transition;Tr.transition=null;try{Pe=4,pa(n,i,a,c)}finally{Pe=d,Tr.transition=f}}function pa(n,i,a,c){if(Ir){var d=Gs(n,i,a,c);if(d===null)_h(n,i,c,Xn,a),ri(n,c);else if(zl(d,n,i,a,c))c.stopPropagation();else if(ri(n,c),i&4&&-1<Bl.indexOf(n)){for(;d!==null;){var f=ka(d);if(f!==null&&ca(f),f=Gs(n,i,a,c),f===null&&_h(n,i,c,Xn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else _h(n,i,c,null,a)}}var Xn=null;function Gs(n,i,a,c){if(Xn=null,n=js(c),n=rs(n),n!==null)if(i=xn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=na(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Xn=n,null}function Qs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sh()){case $s:return 1;case ia:return 4;case Ki:case sa:return 16;case qs:return 536870912;default:return 16}default:return 16}}var on=null,Ys=null,Sr=null;function Hl(){if(Sr)return Sr;var n,i=Ys,a=i.length,c,d="value"in on?on.value:on.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return Sr=d.slice(n,1<c?1-c:void 0)}function es(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Zn(){return!0}function ma(){return!1}function bt(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zn:ma,this.isPropagationStopped=ma,this}return P(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),i}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=bt(er),oi=P({},er,{view:0,detail:0}),Js=bt(oi),Xs,Zs,an,ns=P({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_e,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==an&&(an&&n.type==="mousemove"?(Xs=n.screenX-an.screenX,Zs=n.screenY-an.screenY):Zs=Xs=0,an=n),Xs)},movementY:function(n){return"movementY"in n?n.movementY:Zs}}),ga=bt(ns),Wl=P({},ns,{dataTransfer:0}),Kl=bt(Wl),eo=P({},oi,{relatedTarget:0}),Ct=bt(eo),Gl=P({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Ql=bt(Gl),ai=P({},er,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=bt(ai),p=P({},er,{data:0}),y=bt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j[n])?!!i[n]:!1}function _e(){return Z}var lt=P({},oi,{key:function(n){if(n.key){var i=w[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=es(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_e,charCode:function(n){return n.type==="keypress"?es(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?es(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Be=bt(lt),dt=P({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ln=bt(dt),Ar=P({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_e}),tr=bt(Ar),nr=P({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),to=bt(nr),ya=P({},ns,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),UE=bt(ya),jE=[9,13,27,32],lh=m&&"CompositionEvent"in window,_a=null;m&&"documentMode"in document&&(_a=document.documentMode);var BE=m&&"TextEvent"in window&&!_a,Dp=m&&(!lh||_a&&8<_a&&11>=_a),Vp=" ",bp=!1;function Op(n,i){switch(n){case"keyup":return jE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var no=!1;function zE(n,i){switch(n){case"compositionend":return Mp(i);case"keypress":return i.which!==32?null:(bp=!0,Vp);case"textInput":return n=i.data,n===Vp&&bp?null:n;default:return null}}function $E(n,i){if(no)return n==="compositionend"||!lh&&Op(n,i)?(n=Hl(),Sr=Ys=on=null,no=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Dp&&i.locale!=="ko"?null:i.data;default:return null}}var qE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!qE[n.type]:i==="textarea"}function Fp(n,i,a,c){Xr(c),i=eu(i,"onChange"),0<i.length&&(a=new ts("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var va=null,wa=null;function HE(n){nm(n,0)}function Yl(n){var i=ao(n);if(Go(i))return n}function WE(n,i){if(n==="change")return i}var Up=!1;if(m){var uh;if(m){var ch="oninput"in document;if(!ch){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),ch=typeof jp.oninput=="function"}uh=ch}else uh=!1;Up=uh&&(!document.documentMode||9<document.documentMode)}function Bp(){va&&(va.detachEvent("onpropertychange",zp),wa=va=null)}function zp(n){if(n.propertyName==="value"&&Yl(wa)){var i=[];Fp(i,wa,n,js(n)),Vl(HE,i)}}function KE(n,i,a){n==="focusin"?(Bp(),va=i,wa=a,va.attachEvent("onpropertychange",zp)):n==="focusout"&&Bp()}function GE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Yl(wa)}function QE(n,i){if(n==="click")return Yl(i)}function YE(n,i){if(n==="input"||n==="change")return Yl(i)}function JE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Dn=typeof Object.is=="function"?Object.is:JE;function Ea(n,i){if(Dn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Dn(n[d],i[d]))return!1}return!0}function $p(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qp(n,i){var a=$p(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$p(a)}}function Hp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Hp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Wp(){for(var n=window,i=Wr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Wr(n.document)}return i}function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function XE(n){var i=Wp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Hp(a.ownerDocument.documentElement,a)){if(c!==null&&hh(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=qp(a,f);var v=qp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ZE=m&&"documentMode"in document&&11>=document.documentMode,ro=null,dh=null,Ta=null,fh=!1;function Kp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fh||ro==null||ro!==Wr(c)||(c=ro,"selectionStart"in c&&hh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&Ea(Ta,c)||(Ta=c,c=eu(dh,"onSelect"),0<c.length&&(i=new ts("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ro)))}function Jl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var io={animationend:Jl("Animation","AnimationEnd"),animationiteration:Jl("Animation","AnimationIteration"),animationstart:Jl("Animation","AnimationStart"),transitionend:Jl("Transition","TransitionEnd")},ph={},Gp={};m&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function Xl(n){if(ph[n])return ph[n];if(!io[n])return n;var i=io[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Gp)return ph[n]=i[a];return n}var Qp=Xl("animationend"),Yp=Xl("animationiteration"),Jp=Xl("animationstart"),Xp=Xl("transitionend"),Zp=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(n,i){Zp.set(n,i),l(i,[n])}for(var mh=0;mh<em.length;mh++){var gh=em[mh],e0=gh.toLowerCase(),t0=gh[0].toUpperCase()+gh.slice(1);li(e0,"on"+t0)}li(Qp,"onAnimationEnd"),li(Yp,"onAnimationIteration"),li(Jp,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(Xp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function tm(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ta(c,i,void 0,n),n.currentTarget=null}function nm(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var A=c[v],x=A.instance,U=A.currentTarget;if(A=A.listener,x!==f&&d.isPropagationStopped())break e;tm(d,A,U),f=x}else for(v=0;v<c.length;v++){if(A=c[v],x=A.instance,U=A.currentTarget,A=A.listener,x!==f&&d.isPropagationStopped())break e;tm(d,A,U),f=x}}}if(Bs)throw n=mn,Bs=!1,mn=null,n}function Ge(n,i){var a=i[Sh];a===void 0&&(a=i[Sh]=new Set);var c=n+"__bubble";a.has(c)||(rm(i,n,2,!1),a.add(c))}function yh(n,i,a){var c=0;i&&(c|=4),rm(a,n,c,i)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Sa(n){if(!n[Zl]){n[Zl]=!0,s.forEach(function(a){a!=="selectionchange"&&(n0.has(a)||yh(a,!1,n),yh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Zl]||(i[Zl]=!0,yh("selectionchange",!1,i))}}function rm(n,i,a,c){switch(Qs(i)){case 1:var d=Jn;break;case 4:d=ql;break;default:d=pa}a=d.bind(null,i,a,n),d=void 0,!ei||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function _h(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var x=v.tag;if((x===3||x===4)&&(x=v.stateNode.containerInfo,x===d||x.nodeType===8&&x.parentNode===d))return;v=v.return}for(;A!==null;){if(v=rs(A),v===null)return;if(x=v.tag,x===5||x===6){c=f=v;continue e}A=A.parentNode}}c=c.return}Vl(function(){var U=f,W=js(a),K=[];e:{var H=Zp.get(n);if(H!==void 0){var te=ts,se=n;switch(n){case"keypress":if(es(a)===0)break e;case"keydown":case"keyup":te=Be;break;case"focusin":se="focus",te=Ct;break;case"focusout":se="blur",te=Ct;break;case"beforeblur":case"afterblur":te=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=tr;break;case Qp:case Yp:case Jp:te=Ql;break;case Xp:te=to;break;case"scroll":te=Js;break;case"wheel":te=UE;break;case"copy":case"cut":case"paste":te=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=ln}var oe=(i&4)!==0,ut=!oe&&n==="scroll",M=oe?H!==null?H+"Capture":null:H;oe=[];for(var O=U,F;O!==null;){F=O;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,M!==null&&(Y=qi(O,M),Y!=null&&oe.push(Aa(O,Y,F)))),ut)break;O=O.return}0<oe.length&&(H=new te(H,se,null,a,W),K.push({event:H,listeners:oe}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",H&&a!==Jr&&(se=a.relatedTarget||a.fromElement)&&(rs(se)||se[Rr]))break e;if((te||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=U,se=se?rs(se):null,se!==null&&(ut=xn(se),se!==ut||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=U),te!==se)){if(oe=ga,Y="onMouseLeave",M="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(oe=ln,Y="onPointerLeave",M="onPointerEnter",O="pointer"),ut=te==null?H:ao(te),F=se==null?H:ao(se),H=new oe(Y,O+"leave",te,a,W),H.target=ut,H.relatedTarget=F,Y=null,rs(W)===U&&(oe=new oe(M,O+"enter",se,a,W),oe.target=F,oe.relatedTarget=ut,Y=oe),ut=Y,te&&se)t:{for(oe=te,M=se,O=0,F=oe;F;F=so(F))O++;for(F=0,Y=M;Y;Y=so(Y))F++;for(;0<O-F;)oe=so(oe),O--;for(;0<F-O;)M=so(M),F--;for(;O--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=so(oe),M=so(M)}oe=null}else oe=null;te!==null&&im(K,H,te,oe,!1),se!==null&&ut!==null&&im(K,ut,se,oe,!0)}}e:{if(H=U?ao(U):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var ae=WE;else if(Lp(H))if(Up)ae=YE;else{ae=GE;var ce=KE}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=QE);if(ae&&(ae=ae(n,U))){Fp(K,ae,a,W);break e}ce&&ce(n,H,U),n==="focusout"&&(ce=H._wrapperState)&&ce.controlled&&H.type==="number"&&ht(H,"number",H.value)}switch(ce=U?ao(U):window,n){case"focusin":(Lp(ce)||ce.contentEditable==="true")&&(ro=ce,dh=U,Ta=null);break;case"focusout":Ta=dh=ro=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,Kp(K,a,W);break;case"selectionchange":if(ZE)break;case"keydown":case"keyup":Kp(K,a,W)}var he;if(lh)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else no?Op(n,a)&&(pe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Dp&&a.locale!=="ko"&&(no||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&no&&(he=Hl()):(on=W,Ys="value"in on?on.value:on.textContent,no=!0)),ce=eu(U,pe),0<ce.length&&(pe=new y(pe,n,null,a,W),K.push({event:pe,listeners:ce}),he?pe.data=he:(he=Mp(a),he!==null&&(pe.data=he)))),(he=BE?zE(n,a):$E(n,a))&&(U=eu(U,"onBeforeInput"),0<U.length&&(W=new y("onBeforeInput","beforeinput",null,a,W),K.push({event:W,listeners:U}),W.data=he))}nm(K,i)})}function Aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function eu(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=qi(n,a),f!=null&&c.unshift(Aa(n,f,d)),f=qi(n,i),f!=null&&c.push(Aa(n,f,d))),n=n.return}return c}function so(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function im(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var A=a,x=A.alternate,U=A.stateNode;if(x!==null&&x===c)break;A.tag===5&&U!==null&&(A=U,d?(x=qi(a,f),x!=null&&v.unshift(Aa(a,x,A))):d||(x=qi(a,f),x!=null&&v.push(Aa(a,x,A)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var r0=/\r\n?/g,i0=/\u0000|\uFFFD/g;function sm(n){return(typeof n=="string"?n:""+n).replace(r0,`
`).replace(i0,"")}function tu(n,i,a){if(i=sm(i),sm(n)!==i&&a)throw Error(t(425))}function nu(){}var vh=null,wh=null;function Eh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Th=typeof setTimeout=="function"?setTimeout:void 0,s0=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(n){return om.resolve(null).then(n).catch(a0)}:Th;function a0(n){setTimeout(function(){throw n})}function Ih(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),si(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);si(i)}function ui(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function am(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var oo=Math.random().toString(36).slice(2),rr="__reactFiber$"+oo,Ra="__reactProps$"+oo,Rr="__reactContainer$"+oo,Sh="__reactEvents$"+oo,l0="__reactListeners$"+oo,u0="__reactHandles$"+oo;function rs(n){var i=n[rr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Rr]||a[rr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=am(n);n!==null;){if(a=n[rr])return a;n=am(n)}return i}n=a,a=n.parentNode}return null}function ka(n){return n=n[rr]||n[Rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ao(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ru(n){return n[Ra]||null}var Ah=[],lo=-1;function ci(n){return{current:n}}function Qe(n){0>lo||(n.current=Ah[lo],Ah[lo]=null,lo--)}function He(n,i){lo++,Ah[lo]=n.current,n.current=i}var hi={},Ot=ci(hi),Kt=ci(!1),is=hi;function uo(n,i){var a=n.type.contextTypes;if(!a)return hi;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function iu(){Qe(Kt),Qe(Ot)}function lm(n,i,a){if(Ot.current!==hi)throw Error(t(168));He(Ot,i),He(Kt,a)}function um(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Le(n)||"Unknown",d));return P({},a,c)}function su(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hi,is=Ot.current,He(Ot,n),He(Kt,Kt.current),!0}function cm(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=um(n,i,is),c.__reactInternalMemoizedMergedChildContext=n,Qe(Kt),Qe(Ot),He(Ot,n)):Qe(Kt),He(Kt,a)}var kr=null,ou=!1,Rh=!1;function hm(n){kr===null?kr=[n]:kr.push(n)}function c0(n){ou=!0,hm(n)}function di(){if(!Rh&&kr!==null){Rh=!0;var n=0,i=Pe;try{var a=kr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}kr=null,ou=!1}catch(d){throw kr!==null&&(kr=kr.slice(n+1)),ra($s,di),d}finally{Pe=i,Rh=!1}}return null}var co=[],ho=0,au=null,lu=0,yn=[],_n=0,ss=null,Cr=1,Pr="";function os(n,i){co[ho++]=lu,co[ho++]=au,au=n,lu=i}function dm(n,i,a){yn[_n++]=Cr,yn[_n++]=Pr,yn[_n++]=ss,ss=n;var c=Cr;n=Pr;var d=32-rn(c)-1;c&=~(1<<d),a+=1;var f=32-rn(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Cr=1<<32-rn(i)+d|a<<d|c,Pr=f+n}else Cr=1<<f|a<<d|c,Pr=n}function kh(n){n.return!==null&&(os(n,1),dm(n,1,0))}function Ch(n){for(;n===au;)au=co[--ho],co[ho]=null,lu=co[--ho],co[ho]=null;for(;n===ss;)ss=yn[--_n],yn[_n]=null,Pr=yn[--_n],yn[_n]=null,Cr=yn[--_n],yn[_n]=null}var un=null,cn=null,Je=!1,Vn=null;function fm(n,i){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function pm(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,un=n,cn=ui(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,un=n,cn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ss!==null?{id:Cr,overflow:Pr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,un=n,cn=null,!0):!1;default:return!1}}function Ph(n){return(n.mode&1)!==0&&(n.flags&128)===0}function xh(n){if(Je){var i=cn;if(i){var a=i;if(!pm(n,i)){if(Ph(n))throw Error(t(418));i=ui(a.nextSibling);var c=un;i&&pm(n,i)?fm(c,a):(n.flags=n.flags&-4097|2,Je=!1,un=n)}}else{if(Ph(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,un=n}}}function mm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;un=n}function uu(n){if(n!==un)return!1;if(!Je)return mm(n),Je=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Eh(n.type,n.memoizedProps)),i&&(i=cn)){if(Ph(n))throw gm(),Error(t(418));for(;i;)fm(n,i),i=ui(i.nextSibling)}if(mm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){cn=ui(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}cn=null}}else cn=un?ui(n.stateNode.nextSibling):null;return!0}function gm(){for(var n=cn;n;)n=ui(n.nextSibling)}function fo(){cn=un=null,Je=!1}function Nh(n){Vn===null?Vn=[n]:Vn.push(n)}var h0=be.ReactCurrentBatchConfig;function bn(n,i){if(n&&n.defaultProps){i=P({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}var cu=ci(null),hu=null,po=null,Dh=null;function Vh(){Dh=po=hu=null}function bh(n){var i=cu.current;Qe(cu),n._currentValue=i}function Oh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function mo(n,i){hu=n,Dh=po=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Qt=!0),n.firstContext=null)}function vn(n){var i=n._currentValue;if(Dh!==n)if(n={context:n,memoizedValue:i,next:null},po===null){if(hu===null)throw Error(t(308));po=n,hu.dependencies={lanes:0,firstContext:n}}else po=po.next=n;return i}var as=null;function Mh(n){as===null?as=[n]:as.push(n)}function ym(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Mh(i)):(a.next=d.next,d.next=a),i.interleaved=a,xr(n,c)}function xr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var fi=!1;function Lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _m(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Nr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function pi(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,xr(n,a)}return d=c.interleaved,d===null?(i.next=i,Mh(c)):(i.next=d.next,d.next=i),c.interleaved=i,xr(n,a)}function du(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ua(n,a)}}function vm(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function fu(n,i,a,c){var d=n.updateQueue;fi=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var x=A,U=x.next;x.next=null,v===null?f=U:v.next=U,v=x;var W=n.alternate;W!==null&&(W=W.updateQueue,A=W.lastBaseUpdate,A!==v&&(A===null?W.firstBaseUpdate=U:A.next=U,W.lastBaseUpdate=x))}if(f!==null){var K=d.baseState;v=0,W=U=x=null,A=f;do{var H=A.lane,te=A.eventTime;if((c&H)===H){W!==null&&(W=W.next={eventTime:te,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var se=n,oe=A;switch(H=i,te=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){K=se.call(te,K,H);break e}K=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,H=typeof se=="function"?se.call(te,K,H):se,H==null)break e;K=P({},K,H);break e;case 2:fi=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[A]:H.push(A))}else te={eventTime:te,lane:H,tag:A.tag,payload:A.payload,callback:A.callback,next:null},W===null?(U=W=te,x=K):W=W.next=te,v|=H;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;H=A,A=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(W===null&&(x=K),d.baseState=x,d.firstBaseUpdate=U,d.lastBaseUpdate=W,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);cs|=v,n.lanes=v,n.memoizedState=K}}function wm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Em=new r.Component().refs;function Fh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:P({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var pu={isMounted:function(n){return(n=n._reactInternals)?xn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=_i(n),f=Nr(c,d);f.payload=i,a!=null&&(f.callback=a),i=pi(n,f,d),i!==null&&(Ln(i,n,d,c),du(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=_i(n),f=Nr(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=pi(n,f,d),i!==null&&(Ln(i,n,d,c),du(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Wt(),c=_i(n),d=Nr(a,c);d.tag=2,i!=null&&(d.callback=i),i=pi(n,d,c),i!==null&&(Ln(i,n,c,a),du(i,n,c))}};function Tm(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!Ea(a,c)||!Ea(d,f):!0}function Im(n,i,a){var c=!1,d=hi,f=i.contextType;return typeof f=="object"&&f!==null?f=vn(f):(d=Gt(i)?is:Ot.current,c=i.contextTypes,f=(c=c!=null)?uo(n,d):hi),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function Sm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&pu.enqueueReplaceState(i,i.state,null)}function Uh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs=Em,Lh(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=vn(f):(f=Gt(i)?is:Ot.current,d.context=uo(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Fh(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&pu.enqueueReplaceState(d,d.state,null),fu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ca(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var A=d.refs;A===Em&&(A=d.refs={}),v===null?delete A[f]:A[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function mu(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Am(n){var i=n._init;return i(n._payload)}function Rm(n){function i(M,O){if(n){var F=M.deletions;F===null?(M.deletions=[O],M.flags|=16):F.push(O)}}function a(M,O){if(!n)return null;for(;O!==null;)i(M,O),O=O.sibling;return null}function c(M,O){for(M=new Map;O!==null;)O.key!==null?M.set(O.key,O):M.set(O.index,O),O=O.sibling;return M}function d(M,O){return M=wi(M,O),M.index=0,M.sibling=null,M}function f(M,O,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<O?(M.flags|=2,O):F):(M.flags|=2,O)):(M.flags|=1048576,O)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function A(M,O,F,Y){return O===null||O.tag!==6?(O=Td(F,M.mode,Y),O.return=M,O):(O=d(O,F),O.return=M,O)}function x(M,O,F,Y){var ae=F.type;return ae===D?W(M,O,F.props.children,Y,F.key):O!==null&&(O.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Et&&Am(ae)===O.type)?(Y=d(O,F.props),Y.ref=Ca(M,O,F),Y.return=M,Y):(Y=bu(F.type,F.key,F.props,null,M.mode,Y),Y.ref=Ca(M,O,F),Y.return=M,Y)}function U(M,O,F,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==F.containerInfo||O.stateNode.implementation!==F.implementation?(O=Id(F,M.mode,Y),O.return=M,O):(O=d(O,F.children||[]),O.return=M,O)}function W(M,O,F,Y,ae){return O===null||O.tag!==7?(O=ps(F,M.mode,Y,ae),O.return=M,O):(O=d(O,F),O.return=M,O)}function K(M,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Td(""+O,M.mode,F),O.return=M,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Me:return F=bu(O.type,O.key,O.props,null,M.mode,F),F.ref=Ca(M,null,O),F.return=M,F;case xe:return O=Id(O,M.mode,F),O.return=M,O;case Et:var Y=O._init;return K(M,Y(O._payload),F)}if(at(O)||ne(O))return O=ps(O,M.mode,F,null),O.return=M,O;mu(M,O)}return null}function H(M,O,F,Y){var ae=O!==null?O.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ae!==null?null:A(M,O,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Me:return F.key===ae?x(M,O,F,Y):null;case xe:return F.key===ae?U(M,O,F,Y):null;case Et:return ae=F._init,H(M,O,ae(F._payload),Y)}if(at(F)||ne(F))return ae!==null?null:W(M,O,F,Y,null);mu(M,F)}return null}function te(M,O,F,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(F)||null,A(O,M,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Me:return M=M.get(Y.key===null?F:Y.key)||null,x(O,M,Y,ae);case xe:return M=M.get(Y.key===null?F:Y.key)||null,U(O,M,Y,ae);case Et:var ce=Y._init;return te(M,O,F,ce(Y._payload),ae)}if(at(Y)||ne(Y))return M=M.get(F)||null,W(O,M,Y,ae,null);mu(O,Y)}return null}function se(M,O,F,Y){for(var ae=null,ce=null,he=O,pe=O=0,St=null;he!==null&&pe<F.length;pe++){he.index>pe?(St=he,he=null):St=he.sibling;var Oe=H(M,he,F[pe],Y);if(Oe===null){he===null&&(he=St);break}n&&he&&Oe.alternate===null&&i(M,he),O=f(Oe,O,pe),ce===null?ae=Oe:ce.sibling=Oe,ce=Oe,he=St}if(pe===F.length)return a(M,he),Je&&os(M,pe),ae;if(he===null){for(;pe<F.length;pe++)he=K(M,F[pe],Y),he!==null&&(O=f(he,O,pe),ce===null?ae=he:ce.sibling=he,ce=he);return Je&&os(M,pe),ae}for(he=c(M,he);pe<F.length;pe++)St=te(he,M,pe,F[pe],Y),St!==null&&(n&&St.alternate!==null&&he.delete(St.key===null?pe:St.key),O=f(St,O,pe),ce===null?ae=St:ce.sibling=St,ce=St);return n&&he.forEach(function(Ei){return i(M,Ei)}),Je&&os(M,pe),ae}function oe(M,O,F,Y){var ae=ne(F);if(typeof ae!="function")throw Error(t(150));if(F=ae.call(F),F==null)throw Error(t(151));for(var ce=ae=null,he=O,pe=O=0,St=null,Oe=F.next();he!==null&&!Oe.done;pe++,Oe=F.next()){he.index>pe?(St=he,he=null):St=he.sibling;var Ei=H(M,he,Oe.value,Y);if(Ei===null){he===null&&(he=St);break}n&&he&&Ei.alternate===null&&i(M,he),O=f(Ei,O,pe),ce===null?ae=Ei:ce.sibling=Ei,ce=Ei,he=St}if(Oe.done)return a(M,he),Je&&os(M,pe),ae;if(he===null){for(;!Oe.done;pe++,Oe=F.next())Oe=K(M,Oe.value,Y),Oe!==null&&(O=f(Oe,O,pe),ce===null?ae=Oe:ce.sibling=Oe,ce=Oe);return Je&&os(M,pe),ae}for(he=c(M,he);!Oe.done;pe++,Oe=F.next())Oe=te(he,M,pe,Oe.value,Y),Oe!==null&&(n&&Oe.alternate!==null&&he.delete(Oe.key===null?pe:Oe.key),O=f(Oe,O,pe),ce===null?ae=Oe:ce.sibling=Oe,ce=Oe);return n&&he.forEach(function(q0){return i(M,q0)}),Je&&os(M,pe),ae}function ut(M,O,F,Y){if(typeof F=="object"&&F!==null&&F.type===D&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Me:e:{for(var ae=F.key,ce=O;ce!==null;){if(ce.key===ae){if(ae=F.type,ae===D){if(ce.tag===7){a(M,ce.sibling),O=d(ce,F.props.children),O.return=M,M=O;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Et&&Am(ae)===ce.type){a(M,ce.sibling),O=d(ce,F.props),O.ref=Ca(M,ce,F),O.return=M,M=O;break e}a(M,ce);break}else i(M,ce);ce=ce.sibling}F.type===D?(O=ps(F.props.children,M.mode,Y,F.key),O.return=M,M=O):(Y=bu(F.type,F.key,F.props,null,M.mode,Y),Y.ref=Ca(M,O,F),Y.return=M,M=Y)}return v(M);case xe:e:{for(ce=F.key;O!==null;){if(O.key===ce)if(O.tag===4&&O.stateNode.containerInfo===F.containerInfo&&O.stateNode.implementation===F.implementation){a(M,O.sibling),O=d(O,F.children||[]),O.return=M,M=O;break e}else{a(M,O);break}else i(M,O);O=O.sibling}O=Id(F,M.mode,Y),O.return=M,M=O}return v(M);case Et:return ce=F._init,ut(M,O,ce(F._payload),Y)}if(at(F))return se(M,O,F,Y);if(ne(F))return oe(M,O,F,Y);mu(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,O!==null&&O.tag===6?(a(M,O.sibling),O=d(O,F),O.return=M,M=O):(a(M,O),O=Td(F,M.mode,Y),O.return=M,M=O),v(M)):a(M,O)}return ut}var go=Rm(!0),km=Rm(!1),Pa={},ir=ci(Pa),xa=ci(Pa),Na=ci(Pa);function ls(n){if(n===Pa)throw Error(t(174));return n}function jh(n,i){switch(He(Na,i),He(xa,n),He(ir,Pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ls(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ls(i,n)}Qe(ir),He(ir,i)}function yo(){Qe(ir),Qe(xa),Qe(Na)}function Cm(n){ls(Na.current);var i=ls(ir.current),a=Ls(i,n.type);i!==a&&(He(xa,n),He(ir,a))}function Bh(n){xa.current===n&&(Qe(ir),Qe(xa))}var Xe=ci(0);function gu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zh=[];function $h(){for(var n=0;n<zh.length;n++)zh[n]._workInProgressVersionPrimary=null;zh.length=0}var yu=be.ReactCurrentDispatcher,qh=be.ReactCurrentBatchConfig,us=0,Ze=null,yt=null,Tt=null,_u=!1,Da=!1,Va=0,d0=0;function Mt(){throw Error(t(321))}function Hh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Dn(n[a],i[a]))return!1;return!0}function Wh(n,i,a,c,d,f){if(us=f,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,yu.current=n===null||n.memoizedState===null?g0:y0,n=a(c,d),Da){f=0;do{if(Da=!1,Va=0,25<=f)throw Error(t(301));f+=1,Tt=yt=null,i.updateQueue=null,yu.current=_0,n=a(c,d)}while(Da)}if(yu.current=Eu,i=yt!==null&&yt.next!==null,us=0,Tt=yt=Ze=null,_u=!1,i)throw Error(t(300));return n}function Kh(){var n=Va!==0;return Va=0,n}function sr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ze.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function wn(){if(yt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var i=Tt===null?Ze.memoizedState:Tt.next;if(i!==null)Tt=i,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Tt===null?Ze.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function ba(n,i){return typeof i=="function"?i(n):i}function Gh(n){var i=wn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var A=v=null,x=null,U=f;do{var W=U.lane;if((us&W)===W)x!==null&&(x=x.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:W,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};x===null?(A=x=K,v=c):x=x.next=K,Ze.lanes|=W,cs|=W}U=U.next}while(U!==null&&U!==f);x===null?v=c:x.next=A,Dn(c,i.memoizedState)||(Qt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=x,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,Ze.lanes|=f,cs|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Qh(n){var i=wn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Dn(f,i.memoizedState)||(Qt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function Pm(){}function xm(n,i){var a=Ze,c=wn(),d=i(),f=!Dn(c.memoizedState,d);if(f&&(c.memoizedState=d,Qt=!0),c=c.queue,Yh(Vm.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Oa(9,Dm.bind(null,a,c,d,i),void 0,null),It===null)throw Error(t(349));(us&30)!==0||Nm(a,i,d)}return d}function Nm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Dm(n,i,a,c){i.value=a,i.getSnapshot=c,bm(i)&&Om(n)}function Vm(n,i,a){return a(function(){bm(i)&&Om(n)})}function bm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Dn(n,a)}catch{return!0}}function Om(n){var i=xr(n,1);i!==null&&Ln(i,n,1,-1)}function Mm(n){var i=sr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:n},i.queue=n,n=n.dispatch=m0.bind(null,Ze,n),[i.memoizedState,n]}function Oa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Lm(){return wn().memoizedState}function vu(n,i,a,c){var d=sr();Ze.flags|=n,d.memoizedState=Oa(1|i,a,void 0,c===void 0?null:c)}function wu(n,i,a,c){var d=wn();c=c===void 0?null:c;var f=void 0;if(yt!==null){var v=yt.memoizedState;if(f=v.destroy,c!==null&&Hh(c,v.deps)){d.memoizedState=Oa(i,a,f,c);return}}Ze.flags|=n,d.memoizedState=Oa(1|i,a,f,c)}function Fm(n,i){return vu(8390656,8,n,i)}function Yh(n,i){return wu(2048,8,n,i)}function Um(n,i){return wu(4,2,n,i)}function jm(n,i){return wu(4,4,n,i)}function Bm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function zm(n,i,a){return a=a!=null?a.concat([n]):null,wu(4,4,Bm.bind(null,i,n),a)}function Jh(){}function $m(n,i){var a=wn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Hh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function qm(n,i){var a=wn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Hh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Hm(n,i,a){return(us&21)===0?(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a):(Dn(a,i)||(a=aa(),Ze.lanes|=a,cs|=a,n.baseState=!0),i)}function f0(n,i){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=qh.transition;qh.transition={};try{n(!1),i()}finally{Pe=a,qh.transition=c}}function Wm(){return wn().memoizedState}function p0(n,i,a){var c=_i(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Km(n))Gm(i,a);else if(a=ym(n,i,a,c),a!==null){var d=Wt();Ln(a,n,c,d),Qm(a,i,c)}}function m0(n,i,a){var c=_i(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Km(n))Gm(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,A=f(v,a);if(d.hasEagerState=!0,d.eagerState=A,Dn(A,v)){var x=i.interleaved;x===null?(d.next=d,Mh(i)):(d.next=x.next,x.next=d),i.interleaved=d;return}}catch{}finally{}a=ym(n,i,d,c),a!==null&&(d=Wt(),Ln(a,n,c,d),Qm(a,i,c))}}function Km(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function Gm(n,i){Da=_u=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Qm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ua(n,a)}}var Eu={readContext:vn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},g0={readContext:vn,useCallback:function(n,i){return sr().memoizedState=[n,i===void 0?null:i],n},useContext:vn,useEffect:Fm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,vu(4194308,4,Bm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return vu(4194308,4,n,i)},useInsertionEffect:function(n,i){return vu(4,2,n,i)},useMemo:function(n,i){var a=sr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=sr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=p0.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=sr();return n={current:n},i.memoizedState=n},useState:Mm,useDebugValue:Jh,useDeferredValue:function(n){return sr().memoizedState=n},useTransition:function(){var n=Mm(!1),i=n[0];return n=f0.bind(null,n[1]),sr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,d=sr();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),It===null)throw Error(t(349));(us&30)!==0||Nm(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,Fm(Vm.bind(null,c,f,n),[n]),c.flags|=2048,Oa(9,Dm.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=sr(),i=It.identifierPrefix;if(Je){var a=Pr,c=Cr;a=(c&~(1<<32-rn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=d0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},y0={readContext:vn,useCallback:$m,useContext:vn,useEffect:Yh,useImperativeHandle:zm,useInsertionEffect:Um,useLayoutEffect:jm,useMemo:qm,useReducer:Gh,useRef:Lm,useState:function(){return Gh(ba)},useDebugValue:Jh,useDeferredValue:function(n){var i=wn();return Hm(i,yt.memoizedState,n)},useTransition:function(){var n=Gh(ba)[0],i=wn().memoizedState;return[n,i]},useMutableSource:Pm,useSyncExternalStore:xm,useId:Wm,unstable_isNewReconciler:!1},_0={readContext:vn,useCallback:$m,useContext:vn,useEffect:Yh,useImperativeHandle:zm,useInsertionEffect:Um,useLayoutEffect:jm,useMemo:qm,useReducer:Qh,useRef:Lm,useState:function(){return Qh(ba)},useDebugValue:Jh,useDeferredValue:function(n){var i=wn();return yt===null?i.memoizedState=n:Hm(i,yt.memoizedState,n)},useTransition:function(){var n=Qh(ba)[0],i=wn().memoizedState;return[n,i]},useMutableSource:Pm,useSyncExternalStore:xm,useId:Wm,unstable_isNewReconciler:!1};function _o(n,i){try{var a="",c=i;do a+=Ue(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function Xh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Zh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var v0=typeof WeakMap=="function"?WeakMap:Map;function Ym(n,i,a){a=Nr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Cu||(Cu=!0,pd=c),Zh(n,i)},a}function Jm(n,i,a){a=Nr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Zh(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Zh(n,i),typeof c!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Xm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new v0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=V0.bind(null,n,i,a),i.then(n,n))}function Zm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function eg(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Nr(-1,1),i.tag=2,pi(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var w0=be.ReactCurrentOwner,Qt=!1;function Ht(n,i,a,c){i.child=n===null?km(i,null,a,c):go(i,n.child,a,c)}function tg(n,i,a,c,d){a=a.render;var f=i.ref;return mo(i,d),c=Wh(n,i,a,c,f,d),a=Kh(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Dr(n,i,d)):(Je&&a&&kh(i),i.flags|=1,Ht(n,i,c,d),i.child)}function ng(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Ed(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,rg(n,i,f,c,d)):(n=bu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(v,c)&&n.ref===i.ref)return Dr(n,i,d)}return i.flags|=1,n=wi(f,c),n.ref=i.ref,n.return=i,i.child=n}function rg(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(Ea(f,c)&&n.ref===i.ref)if(Qt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qt=!0);else return i.lanes=n.lanes,Dr(n,i,d)}return ed(n,i,a,c,d)}function ig(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(wo,hn),hn|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(wo,hn),hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,He(wo,hn),hn|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,He(wo,hn),hn|=c;return Ht(n,i,d,a),i.child}function sg(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ed(n,i,a,c,d){var f=Gt(a)?is:Ot.current;return f=uo(i,f),mo(i,d),a=Wh(n,i,a,c,f,d),c=Kh(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Dr(n,i,d)):(Je&&c&&kh(i),i.flags|=1,Ht(n,i,a,d),i.child)}function og(n,i,a,c,d){if(Gt(a)){var f=!0;su(i)}else f=!1;if(mo(i,d),i.stateNode===null)Iu(n,i),Im(i,a,c),Uh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,A=i.memoizedProps;v.props=A;var x=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=vn(U):(U=Gt(a)?is:Ot.current,U=uo(i,U));var W=a.getDerivedStateFromProps,K=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||x!==U)&&Sm(i,v,c,U),fi=!1;var H=i.memoizedState;v.state=H,fu(i,c,v,d),x=i.memoizedState,A!==c||H!==x||Kt.current||fi?(typeof W=="function"&&(Fh(i,a,W,c),x=i.memoizedState),(A=fi||Tm(i,a,A,c,H,x,U))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=x),v.props=c,v.state=x,v.context=U,c=A):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,_m(n,i),A=i.memoizedProps,U=i.type===i.elementType?A:bn(i.type,A),v.props=U,K=i.pendingProps,H=v.context,x=a.contextType,typeof x=="object"&&x!==null?x=vn(x):(x=Gt(a)?is:Ot.current,x=uo(i,x));var te=a.getDerivedStateFromProps;(W=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==K||H!==x)&&Sm(i,v,c,x),fi=!1,H=i.memoizedState,v.state=H,fu(i,c,v,d);var se=i.memoizedState;A!==K||H!==se||Kt.current||fi?(typeof te=="function"&&(Fh(i,a,te,c),se=i.memoizedState),(U=fi||Tm(i,a,U,c,H,se,x)||!1)?(W||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,x),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,x)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),v.props=c,v.state=se,v.context=x,c=U):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),c=!1)}return td(n,i,a,c,f,d)}function td(n,i,a,c,d,f){sg(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&cm(i,a,!1),Dr(n,i,f);c=i.stateNode,w0.current=i;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=go(i,n.child,null,f),i.child=go(i,null,A,f)):Ht(n,i,A,f),i.memoizedState=c.state,d&&cm(i,a,!0),i.child}function ag(n){var i=n.stateNode;i.pendingContext?lm(n,i.pendingContext,i.pendingContext!==i.context):i.context&&lm(n,i.context,!1),jh(n,i.containerInfo)}function lg(n,i,a,c,d){return fo(),Nh(d),i.flags|=256,Ht(n,i,a,c),i.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(n){return{baseLanes:n,cachePool:null,transitions:null}}function ug(n,i,a){var c=i.pendingProps,d=Xe.current,f=!1,v=(i.flags&128)!==0,A;if((A=v)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Xe,d&1),n===null)return xh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=Ou(v,c,0,null),n=ps(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=rd(a),i.memoizedState=nd,n):id(i,v));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return E0(n,i,v,c,A,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,A=d.sibling;var x={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=x,i.deletions=null):(c=wi(d,x),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?f=wi(A,f):(f=ps(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?rd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=nd,c}return f=n.child,n=f.sibling,c=wi(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function id(n,i){return i=Ou({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Tu(n,i,a,c){return c!==null&&Nh(c),go(i,n.child,null,a),n=id(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function E0(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=Xh(Error(t(422))),Tu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=Ou({mode:"visible",children:c.children},d,0,null),f=ps(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&go(i,n.child,null,v),i.child.memoizedState=rd(v),i.memoizedState=nd,f);if((i.mode&1)===0)return Tu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,f=Error(t(419)),c=Xh(f,c,void 0),Tu(n,i,v,c)}if(A=(v&n.childLanes)!==0,Qt||A){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,xr(n,d),Ln(c,n,d,-1))}return wd(),c=Xh(Error(t(421))),Tu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=b0.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,cn=ui(d.nextSibling),un=i,Je=!0,Vn=null,n!==null&&(yn[_n++]=Cr,yn[_n++]=Pr,yn[_n++]=ss,Cr=n.id,Pr=n.overflow,ss=i),i=id(i,c.children),i.flags|=4096,i)}function cg(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Oh(n.return,i,a)}function sd(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function hg(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(Ht(n,i,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cg(n,a,i);else if(n.tag===19)cg(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Xe,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&gu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),sd(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&gu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}sd(i,!0,a,null,f);break;case"together":sd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Iu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Dr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=wi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=wi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function T0(n,i,a){switch(i.tag){case 3:ag(i),fo();break;case 5:Cm(i);break;case 1:Gt(i.type)&&su(i);break;case 4:jh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(cu,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(Xe,Xe.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?ug(n,i,a):(He(Xe,Xe.current&1),n=Dr(n,i,a),n!==null?n.sibling:null);He(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return hg(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,ig(n,i,a)}return Dr(n,i,a)}var dg,od,fg,pg;dg=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},od=function(){},fg=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ls(ir.current);var f=null;switch(a){case"input":d=Os(n,d),c=Os(n,c),f=[];break;case"select":d=P({},d,{value:void 0}),c=P({},c,{value:void 0}),f=[];break;case"textarea":d=Yo(n,d),c=Yo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=nu)}Pn(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var A=d[U];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var x=c[U];if(A=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&x!==A&&(x!=null||A!=null))if(U==="style")if(A){for(v in A)!A.hasOwnProperty(v)||x&&x.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in x)x.hasOwnProperty(v)&&A[v]!==x[v]&&(a||(a={}),a[v]=x[v])}else a||(f||(f=[]),f.push(U,a)),a=x;else U==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,A=A?A.__html:void 0,x!=null&&A!==x&&(f=f||[]).push(U,x)):U==="children"?typeof x!="string"&&typeof x!="number"||(f=f||[]).push(U,""+x):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(x!=null&&U==="onScroll"&&Ge("scroll",n),f||A===x||(f=[])):(f=f||[]).push(U,x))}a&&(f=f||[]).push("style",a);var U=f;(i.updateQueue=U)&&(i.flags|=4)}},pg=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ma(n,i){if(!Je)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function I0(n,i,a){var c=i.pendingProps;switch(Ch(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Gt(i.type)&&iu(),Lt(i),null;case 3:return c=i.stateNode,yo(),Qe(Kt),Qe(Ot),$h(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(uu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vn!==null&&(yd(Vn),Vn=null))),od(n,i),Lt(i),null;case 5:Bh(i);var d=ls(Na.current);if(a=i.type,n!==null&&i.stateNode!=null)fg(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=ls(ir.current),uu(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[rr]=i,c[Ra]=f,n=(i.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)Ge(Ia[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":kl(c,f),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ge("invalid",c);break;case"textarea":Jo(c,f),Ge("invalid",c)}Pn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var A=f[v];v==="children"?typeof A=="string"?c.textContent!==A&&(f.suppressHydrationWarning!==!0&&tu(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(f.suppressHydrationWarning!==!0&&tu(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ge("scroll",c)}switch(a){case"input":bs(c),Qo(c,f,!0);break;case"textarea":bs(c),Kr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=nu)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Xo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[rr]=i,n[Ra]=c,dg(n,i,!1,!1),i.stateNode=n;e:{switch(v=Us(a,c),a){case"dialog":Ge("cancel",n),Ge("close",n),d=c;break;case"iframe":case"object":case"embed":Ge("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)Ge(Ia[d],n);d=c;break;case"source":Ge("error",n),d=c;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),d=c;break;case"details":Ge("toggle",n),d=c;break;case"input":kl(n,c),d=Os(n,c),Ge("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=P({},c,{value:void 0}),Ge("invalid",n);break;case"textarea":Jo(n,c),d=Yo(n,c),Ge("invalid",n);break;default:d=c}Pn(a,d),A=d;for(f in A)if(A.hasOwnProperty(f)){var x=A[f];f==="style"?Fs(n,x):f==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Pl(n,x)):f==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&$i(n,x):typeof x=="number"&&$i(n,""+x):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?x!=null&&f==="onScroll"&&Ge("scroll",n):x!=null&&Ee(n,f,x,v))}switch(a){case"input":bs(n),Qo(n,c,!1);break;case"textarea":bs(n),Kr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ne(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?Cn(n,!!c.multiple,f,!1):c.defaultValue!=null&&Cn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=nu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)pg(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ls(Na.current),ls(ir.current),uu(i)){if(c=i.stateNode,a=i.memoizedProps,c[rr]=i,(f=c.nodeValue!==a)&&(n=un,n!==null))switch(n.tag){case 3:tu(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tu(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[rr]=i,i.stateNode=c}return Lt(i),null;case 13:if(Qe(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&cn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gm(),fo(),i.flags|=98560,f=!1;else if(f=uu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[rr]=i}else fo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),f=!1}else Vn!==null&&(yd(Vn),Vn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xe.current&1)!==0?_t===0&&(_t=3):wd())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return yo(),od(n,i),n===null&&Sa(i.stateNode.containerInfo),Lt(i),null;case 10:return bh(i.type._context),Lt(i),null;case 17:return Gt(i.type)&&iu(),Lt(i),null;case 19:if(Qe(Xe),f=i.memoizedState,f===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)Ma(f,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=gu(n),v!==null){for(i.flags|=128,Ma(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Xe,Xe.current&1|2),i.child}n=n.sibling}f.tail!==null&&Ke()>Eo&&(i.flags|=128,c=!0,Ma(f,!1),i.lanes=4194304)}else{if(!c)if(n=gu(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ma(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Je)return Lt(i),null}else 2*Ke()-f.renderingStartTime>Eo&&a!==1073741824&&(i.flags|=128,c=!0,Ma(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ke(),i.sibling=null,a=Xe.current,He(Xe,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return vd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(hn&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function S0(n,i){switch(Ch(i),i.tag){case 1:return Gt(i.type)&&iu(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return yo(),Qe(Kt),Qe(Ot),$h(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Bh(i),null;case 13:if(Qe(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));fo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qe(Xe),null;case 4:return yo(),null;case 10:return bh(i.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var Su=!1,Ft=!1,A0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function vo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,i,c)}else a.current=null}function ad(n,i,a){try{a()}catch(c){it(n,i,c)}}var mg=!1;function R0(n,i){if(vh=Ir,n=Wp(),hh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,A=-1,x=-1,U=0,W=0,K=n,H=null;t:for(;;){for(var te;K!==a||d!==0&&K.nodeType!==3||(A=v+d),K!==f||c!==0&&K.nodeType!==3||(x=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(te=K.firstChild)!==null;)H=K,K=te;for(;;){if(K===n)break t;if(H===a&&++U===d&&(A=v),H===f&&++W===c&&(x=v),(te=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=te}a=A===-1||x===-1?null:{start:A,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(wh={focusedElem:n,selectionRange:a},Ir=!1,ie=i;ie!==null;)if(i=ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ie=n;else for(;ie!==null;){i=ie;try{var se=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,ut=se.memoizedState,M=i.stateNode,O=M.getSnapshotBeforeUpdate(i.elementType===i.type?oe:bn(i.type,oe),ut);M.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){it(i,i.return,Y)}if(n=i.sibling,n!==null){n.return=i.return,ie=n;break}ie=i.return}return se=mg,mg=!1,se}function La(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&ad(i,a,f)}d=d.next}while(d!==c)}}function Au(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function ld(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function gg(n){var i=n.alternate;i!==null&&(n.alternate=null,gg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[rr],delete i[Ra],delete i[Sh],delete i[l0],delete i[u0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function yg(n){return n.tag===5||n.tag===3||n.tag===4}function _g(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||yg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ud(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=nu));else if(c!==4&&(n=n.child,n!==null))for(ud(n,i,a),n=n.sibling;n!==null;)ud(n,i,a),n=n.sibling}function cd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(cd(n,i,a),n=n.sibling;n!==null;)cd(n,i,a),n=n.sibling}var Pt=null,On=!1;function mi(n,i,a){for(a=a.child;a!==null;)vg(n,i,a),a=a.sibling}function vg(n,i,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Gi,a)}catch{}switch(a.tag){case 5:Ft||vo(a,i);case 6:var c=Pt,d=On;Pt=null,mi(n,i,a),Pt=c,On=d,Pt!==null&&(On?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(On?(n=Pt,a=a.stateNode,n.nodeType===8?Ih(n.parentNode,a):n.nodeType===1&&Ih(n,a),si(n)):Ih(Pt,a.stateNode));break;case 4:c=Pt,d=On,Pt=a.stateNode.containerInfo,On=!0,mi(n,i,a),Pt=c,On=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&ad(a,i,v),d=d.next}while(d!==c)}mi(n,i,a);break;case 1:if(!Ft&&(vo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){it(a,i,A)}mi(n,i,a);break;case 21:mi(n,i,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,mi(n,i,a),Ft=c):mi(n,i,a);break;default:mi(n,i,a)}}function wg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new A0),i.forEach(function(c){var d=O0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Mn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,A=v;e:for(;A!==null;){switch(A.tag){case 5:Pt=A.stateNode,On=!1;break e;case 3:Pt=A.stateNode.containerInfo,On=!0;break e;case 4:Pt=A.stateNode.containerInfo,On=!0;break e}A=A.return}if(Pt===null)throw Error(t(160));vg(f,v,d),Pt=null,On=!1;var x=d.alternate;x!==null&&(x.return=null),d.return=null}catch(U){it(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Eg(i,n),i=i.sibling}function Eg(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mn(i,n),or(n),c&4){try{La(3,n,n.return),Au(3,n)}catch(oe){it(n,n.return,oe)}try{La(5,n,n.return)}catch(oe){it(n,n.return,oe)}}break;case 1:Mn(i,n),or(n),c&512&&a!==null&&vo(a,a.return);break;case 5:if(Mn(i,n),or(n),c&512&&a!==null&&vo(a,a.return),n.flags&32){var d=n.stateNode;try{$i(d,"")}catch(oe){it(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,A=n.type,x=n.updateQueue;if(n.updateQueue=null,x!==null)try{A==="input"&&f.type==="radio"&&f.name!=null&&Ms(d,f),Us(A,v);var U=Us(A,f);for(v=0;v<x.length;v+=2){var W=x[v],K=x[v+1];W==="style"?Fs(d,K):W==="dangerouslySetInnerHTML"?Pl(d,K):W==="children"?$i(d,K):Ee(d,W,K,U)}switch(A){case"input":zi(d,f);break;case"textarea":Cl(d,f);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var te=f.value;te!=null?Cn(d,!!f.multiple,te,!1):H!==!!f.multiple&&(f.defaultValue!=null?Cn(d,!!f.multiple,f.defaultValue,!0):Cn(d,!!f.multiple,f.multiple?[]:"",!1))}d[Ra]=f}catch(oe){it(n,n.return,oe)}}break;case 6:if(Mn(i,n),or(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(oe){it(n,n.return,oe)}}break;case 3:if(Mn(i,n),or(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{si(i.containerInfo)}catch(oe){it(n,n.return,oe)}break;case 4:Mn(i,n),or(n);break;case 13:Mn(i,n),or(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(fd=Ke())),c&4&&wg(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(U=Ft)||W,Mn(i,n),Ft=U):Mn(i,n),or(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!W&&(n.mode&1)!==0)for(ie=n,W=n.child;W!==null;){for(K=ie=W;ie!==null;){switch(H=ie,te=H.child,H.tag){case 0:case 11:case 14:case 15:La(4,H,H.return);break;case 1:vo(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){c=H,a=H.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(oe){it(c,a,oe)}}break;case 5:vo(H,H.return);break;case 22:if(H.memoizedState!==null){Sg(K);continue}}te!==null?(te.return=H,ie=te):Sg(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(A=K.stateNode,x=K.memoizedProps.style,v=x!=null&&x.hasOwnProperty("display")?x.display:null,A.style.display=Yr("display",v))}catch(oe){it(n,n.return,oe)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(oe){it(n,n.return,oe)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Mn(i,n),or(n),c&4&&wg(n);break;case 21:break;default:Mn(i,n),or(n)}}function or(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(yg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&($i(d,""),c.flags&=-33);var f=_g(n);cd(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,A=_g(n);ud(n,A,v);break;default:throw Error(t(161))}}catch(x){it(n,n.return,x)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function k0(n,i,a){ie=n,Tg(n)}function Tg(n,i,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Su;if(!v){var A=d.alternate,x=A!==null&&A.memoizedState!==null||Ft;A=Su;var U=Ft;if(Su=v,(Ft=x)&&!U)for(ie=d;ie!==null;)v=ie,x=v.child,v.tag===22&&v.memoizedState!==null?Ag(d):x!==null?(x.return=v,ie=x):Ag(d);for(;f!==null;)ie=f,Tg(f),f=f.sibling;ie=d,Su=A,Ft=U}Ig(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ie=f):Ig(n)}}function Ig(n){for(;ie!==null;){var i=ie;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||Au(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:bn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&wm(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}wm(i,v,a)}break;case 5:var A=i.stateNode;if(a===null&&i.flags&4){a=A;var x=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var W=U.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&si(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&ld(i)}catch(H){it(i,i.return,H)}}if(i===n){ie=null;break}if(a=i.sibling,a!==null){a.return=i.return,ie=a;break}ie=i.return}}function Sg(n){for(;ie!==null;){var i=ie;if(i===n){ie=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ie=a;break}ie=i.return}}function Ag(n){for(;ie!==null;){var i=ie;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Au(4,i)}catch(x){it(i,a,x)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(x){it(i,d,x)}}var f=i.return;try{ld(i)}catch(x){it(i,f,x)}break;case 5:var v=i.return;try{ld(i)}catch(x){it(i,v,x)}}}catch(x){it(i,i.return,x)}if(i===n){ie=null;break}var A=i.sibling;if(A!==null){A.return=i.return,ie=A;break}ie=i.return}}var C0=Math.ceil,Ru=be.ReactCurrentDispatcher,hd=be.ReactCurrentOwner,En=be.ReactCurrentBatchConfig,Ve=0,It=null,ft=null,xt=0,hn=0,wo=ci(0),_t=0,Fa=null,cs=0,ku=0,dd=0,Ua=null,Yt=null,fd=0,Eo=1/0,Vr=null,Cu=!1,pd=null,gi=null,Pu=!1,yi=null,xu=0,ja=0,md=null,Nu=-1,Du=0;function Wt(){return(Ve&6)!==0?Ke():Nu!==-1?Nu:Nu=Ke()}function _i(n){return(n.mode&1)===0?1:(Ve&2)!==0&&xt!==0?xt&-xt:h0.transition!==null?(Du===0&&(Du=aa()),Du):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Qs(n.type)),n)}function Ln(n,i,a,c){if(50<ja)throw ja=0,md=null,Error(t(185));Xi(n,a,c),((Ve&2)===0||n!==It)&&(n===It&&((Ve&2)===0&&(ku|=a),_t===4&&vi(n,xt)),Jt(n,c),a===1&&Ve===0&&(i.mode&1)===0&&(Eo=Ke()+500,ou&&di()))}function Jt(n,i){var a=n.callbackNode;Ji(n,i);var c=wr(n,n===It?xt:0);if(c===0)a!==null&&zs(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&zs(a),i===1)n.tag===0?c0(kg.bind(null,n)):hm(kg.bind(null,n)),o0(function(){(Ve&6)===0&&di()}),a=null;else{switch(Kn(c)){case 1:a=$s;break;case 4:a=ia;break;case 16:a=Ki;break;case 536870912:a=qs;break;default:a=Ki}a=Og(a,Rg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Rg(n,i){if(Nu=-1,Du=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(To()&&n.callbackNode!==a)return null;var c=wr(n,n===It?xt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Vu(n,c);else{i=c;var d=Ve;Ve|=2;var f=Pg();(It!==n||xt!==i)&&(Vr=null,Eo=Ke()+500,ds(n,i));do try{N0();break}catch(A){Cg(n,A)}while(!0);Vh(),Ru.current=f,Ve=d,ft!==null?i=0:(It=null,xt=0,i=_t)}if(i!==0){if(i===2&&(d=oa(n),d!==0&&(c=d,i=gd(n,d))),i===1)throw a=Fa,ds(n,0),vi(n,c),Jt(n,Ke()),a;if(i===6)vi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!P0(d)&&(i=Vu(n,c),i===2&&(f=oa(n),f!==0&&(c=f,i=gd(n,f))),i===1))throw a=Fa,ds(n,0),vi(n,c),Jt(n,Ke()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:fs(n,Yt,Vr);break;case 3:if(vi(n,c),(c&130023424)===c&&(i=fd+500-Ke(),10<i)){if(wr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Th(fs.bind(null,n,Yt,Vr),i);break}fs(n,Yt,Vr);break;case 4:if(vi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-rn(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*C0(c/1960))-c,10<c){n.timeoutHandle=Th(fs.bind(null,n,Yt,Vr),c);break}fs(n,Yt,Vr);break;case 5:fs(n,Yt,Vr);break;default:throw Error(t(329))}}}return Jt(n,Ke()),n.callbackNode===a?Rg.bind(null,n):null}function gd(n,i){var a=Ua;return n.current.memoizedState.isDehydrated&&(ds(n,i).flags|=256),n=Vu(n,i),n!==2&&(i=Yt,Yt=a,i!==null&&yd(i)),n}function yd(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function P0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Dn(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vi(n,i){for(i&=~dd,i&=~ku,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-rn(i),c=1<<a;n[a]=-1,i&=~c}}function kg(n){if((Ve&6)!==0)throw Error(t(327));To();var i=wr(n,0);if((i&1)===0)return Jt(n,Ke()),null;var a=Vu(n,i);if(n.tag!==0&&a===2){var c=oa(n);c!==0&&(i=c,a=gd(n,c))}if(a===1)throw a=Fa,ds(n,0),vi(n,i),Jt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,fs(n,Yt,Vr),Jt(n,Ke()),null}function _d(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(Eo=Ke()+500,ou&&di())}}function hs(n){yi!==null&&yi.tag===0&&(Ve&6)===0&&To();var i=Ve;Ve|=1;var a=En.transition,c=Pe;try{if(En.transition=null,Pe=1,n)return n()}finally{Pe=c,En.transition=a,Ve=i,(Ve&6)===0&&di()}}function vd(){hn=wo.current,Qe(wo)}function ds(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,s0(a)),ft!==null)for(a=ft.return;a!==null;){var c=a;switch(Ch(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&iu();break;case 3:yo(),Qe(Kt),Qe(Ot),$h();break;case 5:Bh(c);break;case 4:yo();break;case 13:Qe(Xe);break;case 19:Qe(Xe);break;case 10:bh(c.type._context);break;case 22:case 23:vd()}a=a.return}if(It=n,ft=n=wi(n.current,null),xt=hn=i,_t=0,Fa=null,dd=ku=cs=0,Yt=Ua=null,as!==null){for(i=0;i<as.length;i++)if(a=as[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}as=null}return n}function Cg(n,i){do{var a=ft;try{if(Vh(),yu.current=Eu,_u){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}_u=!1}if(us=0,Tt=yt=Ze=null,Da=!1,Va=0,hd.current=null,a===null||a.return===null){_t=1,Fa=i,ft=null;break}e:{var f=n,v=a.return,A=a,x=i;if(i=xt,A.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var U=x,W=A,K=W.tag;if((W.mode&1)===0&&(K===0||K===11||K===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var te=Zm(v);if(te!==null){te.flags&=-257,eg(te,v,A,f,i),te.mode&1&&Xm(f,U,i),i=te,x=U;var se=i.updateQueue;if(se===null){var oe=new Set;oe.add(x),i.updateQueue=oe}else se.add(x);break e}else{if((i&1)===0){Xm(f,U,i),wd();break e}x=Error(t(426))}}else if(Je&&A.mode&1){var ut=Zm(v);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),eg(ut,v,A,f,i),Nh(_o(x,A));break e}}f=x=_o(x,A),_t!==4&&(_t=2),Ua===null?Ua=[f]:Ua.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var M=Ym(f,x,i);vm(f,M);break e;case 1:A=x;var O=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(gi===null||!gi.has(F)))){f.flags|=65536,i&=-i,f.lanes|=i;var Y=Jm(f,A,i);vm(f,Y);break e}}f=f.return}while(f!==null)}Ng(a)}catch(ae){i=ae,ft===a&&a!==null&&(ft=a=a.return);continue}break}while(!0)}function Pg(){var n=Ru.current;return Ru.current=Eu,n===null?Eu:n}function wd(){(_t===0||_t===3||_t===2)&&(_t=4),It===null||(cs&268435455)===0&&(ku&268435455)===0||vi(It,xt)}function Vu(n,i){var a=Ve;Ve|=2;var c=Pg();(It!==n||xt!==i)&&(Vr=null,ds(n,i));do try{x0();break}catch(d){Cg(n,d)}while(!0);if(Vh(),Ve=a,Ru.current=c,ft!==null)throw Error(t(261));return It=null,xt=0,_t}function x0(){for(;ft!==null;)xg(ft)}function N0(){for(;ft!==null&&!Wi();)xg(ft)}function xg(n){var i=bg(n.alternate,n,hn);n.memoizedProps=n.pendingProps,i===null?Ng(n):ft=i,hd.current=null}function Ng(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=I0(a,i,hn),a!==null){ft=a;return}}else{if(a=S0(a,i),a!==null){a.flags&=32767,ft=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,ft=null;return}}if(i=i.sibling,i!==null){ft=i;return}ft=i=n}while(i!==null);_t===0&&(_t=5)}function fs(n,i,a){var c=Pe,d=En.transition;try{En.transition=null,Pe=1,D0(n,i,a,c)}finally{En.transition=d,Pe=c}return null}function D0(n,i,a,c){do To();while(yi!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(oh(n,f),n===It&&(ft=It=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Pu||(Pu=!0,Og(Ki,function(){return To(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=En.transition,En.transition=null;var v=Pe;Pe=1;var A=Ve;Ve|=4,hd.current=null,R0(n,a),Eg(a,n),XE(wh),Ir=!!vh,wh=vh=null,n.current=a,k0(a),vr(),Ve=A,Pe=v,En.transition=f}else n.current=a;if(Pu&&(Pu=!1,yi=n,xu=d),f=n.pendingLanes,f===0&&(gi=null),jl(a.stateNode),Jt(n,Ke()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Cu)throw Cu=!1,n=pd,pd=null,n;return(xu&1)!==0&&n.tag!==0&&To(),f=n.pendingLanes,(f&1)!==0?n===md?ja++:(ja=0,md=n):ja=0,di(),null}function To(){if(yi!==null){var n=Kn(xu),i=En.transition,a=Pe;try{if(En.transition=null,Pe=16>n?16:n,yi===null)var c=!1;else{if(n=yi,yi=null,xu=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ie=n.current;ie!==null;){var f=ie,v=f.child;if((ie.flags&16)!==0){var A=f.deletions;if(A!==null){for(var x=0;x<A.length;x++){var U=A[x];for(ie=U;ie!==null;){var W=ie;switch(W.tag){case 0:case 11:case 15:La(8,W,f)}var K=W.child;if(K!==null)K.return=W,ie=K;else for(;ie!==null;){W=ie;var H=W.sibling,te=W.return;if(gg(W),W===U){ie=null;break}if(H!==null){H.return=te,ie=H;break}ie=te}}}var se=f.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var ut=oe.sibling;oe.sibling=null,oe=ut}while(oe!==null)}}ie=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ie=v;else e:for(;ie!==null;){if(f=ie,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:La(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,ie=M;break e}ie=f.return}}var O=n.current;for(ie=O;ie!==null;){v=ie;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ie=F;else e:for(v=O;ie!==null;){if(A=ie,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Au(9,A)}}catch(ae){it(A,A.return,ae)}if(A===v){ie=null;break e}var Y=A.sibling;if(Y!==null){Y.return=A.return,ie=Y;break e}ie=A.return}}if(Ve=d,di(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Gi,n)}catch{}c=!0}return c}finally{Pe=a,En.transition=i}}return!1}function Dg(n,i,a){i=_o(a,i),i=Ym(n,i,1),n=pi(n,i,1),i=Wt(),n!==null&&(Xi(n,1,i),Jt(n,i))}function it(n,i,a){if(n.tag===3)Dg(n,n,a);else for(;i!==null;){if(i.tag===3){Dg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gi===null||!gi.has(c))){n=_o(a,n),n=Jm(i,n,1),i=pi(i,n,1),n=Wt(),i!==null&&(Xi(i,1,n),Jt(i,n));break}}i=i.return}}function V0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Wt(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(xt&a)===a&&(_t===4||_t===3&&(xt&130023424)===xt&&500>Ke()-fd?ds(n,0):dd|=a),Jt(n,i)}function Vg(n,i){i===0&&((n.mode&1)===0?i=1:(i=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var a=Wt();n=xr(n,i),n!==null&&(Xi(n,i,a),Jt(n,a))}function b0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Vg(n,a)}function O0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Vg(n,a)}var bg;bg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kt.current)Qt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Qt=!1,T0(n,i,a);Qt=(n.flags&131072)!==0}else Qt=!1,Je&&(i.flags&1048576)!==0&&dm(i,lu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Iu(n,i),n=i.pendingProps;var d=uo(i,Ot.current);mo(i,a),d=Wh(null,i,c,n,d,a);var f=Kh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gt(c)?(f=!0,su(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Lh(i),d.updater=pu,i.stateNode=d,d._reactInternals=i,Uh(i,c,n,a),i=td(null,i,c,!0,f,a)):(i.tag=0,Je&&f&&kh(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Iu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=L0(c),n=bn(c,n),d){case 0:i=ed(null,i,c,n,a);break e;case 1:i=og(null,i,c,n,a);break e;case 11:i=tg(null,i,c,n,a);break e;case 14:i=ng(null,i,c,bn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:bn(c,d),ed(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:bn(c,d),og(n,i,c,d,a);case 3:e:{if(ag(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,_m(n,i),fu(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=_o(Error(t(423)),i),i=lg(n,i,c,a,d);break e}else if(c!==d){d=_o(Error(t(424)),i),i=lg(n,i,c,a,d);break e}else for(cn=ui(i.stateNode.containerInfo.firstChild),un=i,Je=!0,Vn=null,a=km(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fo(),c===d){i=Dr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return Cm(i),n===null&&xh(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Eh(c,d)?v=null:f!==null&&Eh(c,f)&&(i.flags|=32),sg(n,i),Ht(n,i,v,a),i.child;case 6:return n===null&&xh(i),null;case 13:return ug(n,i,a);case 4:return jh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=go(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:bn(c,d),tg(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,He(cu,c._currentValue),c._currentValue=v,f!==null)if(Dn(f.value,v)){if(f.children===d.children&&!Kt.current){i=Dr(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var A=f.dependencies;if(A!==null){v=f.child;for(var x=A.firstContext;x!==null;){if(x.context===c){if(f.tag===1){x=Nr(-1,a&-a),x.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var W=U.pending;W===null?x.next=x:(x.next=W.next,W.next=x),U.pending=x}}f.lanes|=a,x=f.alternate,x!==null&&(x.lanes|=a),Oh(f.return,a,i),A.lanes|=a;break}x=x.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),Oh(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,mo(i,a),d=vn(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=bn(c,i.pendingProps),d=bn(c.type,d),ng(n,i,c,d,a);case 15:return rg(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:bn(c,d),Iu(n,i),i.tag=1,Gt(c)?(n=!0,su(i)):n=!1,mo(i,a),Im(i,c,d),Uh(i,c,d,a),td(null,i,c,!0,n,a);case 19:return hg(n,i,a);case 22:return ig(n,i,a)}throw Error(t(156,i.tag))};function Og(n,i){return ra(n,i)}function M0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,i,a,c){return new M0(n,i,a,c)}function Ed(n){return n=n.prototype,!(!n||!n.isReactComponent)}function L0(n){if(typeof n=="function")return Ed(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===nt)return 14}return 2}function wi(n,i){var a=n.alternate;return a===null?(a=Tn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function bu(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")Ed(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case D:return ps(a.children,d,f,i);case R:v=8,d|=8;break;case T:return n=Tn(12,a,i,d|2),n.elementType=T,n.lanes=f,n;case I:return n=Tn(13,a,i,d),n.elementType=I,n.lanes=f,n;case Te:return n=Tn(19,a,i,d),n.elementType=Te,n.lanes=f,n;case ze:return Ou(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:v=10;break e;case S:v=9;break e;case V:v=11;break e;case nt:v=14;break e;case Et:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Tn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function ps(n,i,a,c){return n=Tn(7,n,c,i),n.lanes=a,n}function Ou(n,i,a,c){return n=Tn(22,n,c,i),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function Td(n,i,a){return n=Tn(6,n,null,i),n.lanes=a,n}function Id(n,i,a){return i=Tn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function F0(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=la(0),this.expirationTimes=la(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Sd(n,i,a,c,d,f,v,A,x){return n=new F0(n,i,a,A,x),i===1?(i=1,f===!0&&(i|=8)):i=0,f=Tn(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(f),n}function U0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Mg(n){if(!n)return hi;n=n._reactInternals;e:{if(xn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return um(n,a,i)}return i}function Lg(n,i,a,c,d,f,v,A,x){return n=Sd(a,c,!0,n,d,f,v,A,x),n.context=Mg(null),a=n.current,c=Wt(),d=_i(a),f=Nr(c,d),f.callback=i??null,pi(a,f,d),n.current.lanes=d,Xi(n,d,c),Jt(n,c),n}function Mu(n,i,a,c){var d=i.current,f=Wt(),v=_i(d);return a=Mg(a),i.context===null?i.context=a:i.pendingContext=a,i=Nr(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=pi(d,i,v),n!==null&&(Ln(n,d,v,f),du(n,d,v)),v}function Lu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ad(n,i){Fg(n,i),(n=n.alternate)&&Fg(n,i)}function j0(){return null}var Ug=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rd(n){this._internalRoot=n}Fu.prototype.render=Rd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Mu(n,i,null,null)},Fu.prototype.unmount=Rd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;hs(function(){Mu(null,n,null,null)}),i[Rr]=null}};function Fu(n){this._internalRoot=n}Fu.prototype.unstable_scheduleHydration=function(n){if(n){var i=da();n={blockedOn:null,target:n,priority:i};for(var a=0;a<sn.length&&i!==0&&i<sn[a].priority;a++);sn.splice(a,0,n),a===0&&Ks(n)}};function kd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jg(){}function B0(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=Lu(v);f.call(U)}}var v=Lg(i,c,n,0,null,!1,!1,"",jg);return n._reactRootContainer=v,n[Rr]=v.current,Sa(n.nodeType===8?n.parentNode:n),hs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var U=Lu(x);A.call(U)}}var x=Sd(n,0,!1,null,null,!1,!1,"",jg);return n._reactRootContainer=x,n[Rr]=x.current,Sa(n.nodeType===8?n.parentNode:n),hs(function(){Mu(i,x,a,c)}),x}function ju(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var A=d;d=function(){var x=Lu(v);A.call(x)}}Mu(i,v,n,d)}else v=B0(a,i,n,d,c);return Lu(v)}ca=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Fe(i.pendingLanes);a!==0&&(ua(i,a|1),Jt(i,Ke()),(Ve&6)===0&&(Eo=Ke()+500,di()))}break;case 13:hs(function(){var c=xr(n,1);if(c!==null){var d=Wt();Ln(c,n,1,d)}}),Ad(n,1)}},Hs=function(n){if(n.tag===13){var i=xr(n,134217728);if(i!==null){var a=Wt();Ln(i,n,134217728,a)}Ad(n,134217728)}},ha=function(n){if(n.tag===13){var i=_i(n),a=xr(n,i);if(a!==null){var c=Wt();Ln(a,n,i,c)}Ad(n,i)}},da=function(){return Pe},fa=function(n,i){var a=Pe;try{return Pe=n,i()}finally{Pe=a}},gr=function(n,i,a){switch(i){case"input":if(zi(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=ru(c);if(!d)throw Error(t(90));Go(c),zi(c,d)}}}break;case"textarea":Cl(n,a);break;case"select":i=a.value,i!=null&&Cn(n,!!a.multiple,i,!1)}},Nl=_d,Dl=hs;var z0={usingClientEntryPoint:!1,Events:[ka,ao,ru,Xr,Zr,_d]},Ba={findFiberByHostInstance:rs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$0={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ul(n),n===null?null:n.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||j0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{Gi=Bu.inject($0),nn=Bu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0,Xt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(i))throw Error(t(200));return U0(n,i,null,a)},Xt.createRoot=function(n,i){if(!kd(n))throw Error(t(299));var a=!1,c="",d=Ug;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Sd(n,1,!1,null,null,a,!1,c,d),n[Rr]=i.current,Sa(n.nodeType===8?n.parentNode:n),new Rd(i)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ul(i),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return hs(n)},Xt.hydrate=function(n,i,a){if(!Uu(i))throw Error(t(200));return ju(null,n,i,!0,a)},Xt.hydrateRoot=function(n,i,a){if(!kd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Ug;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Lg(i,null,n,1,a??null,d,!1,f,v),n[Rr]=i.current,Sa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Fu(i)},Xt.render=function(n,i,a){if(!Uu(i))throw Error(t(200));return ju(null,n,i,!1,a)},Xt.unmountComponentAtNode=function(n){if(!Uu(n))throw Error(t(40));return n._reactRootContainer?(hs(function(){ju(null,null,n,!1,function(){n._reactRootContainer=null,n[Rr]=null})}),!0):!1},Xt.unstable_batchedUpdates=_d,Xt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Uu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ju(n,i,a,!1,c)},Xt.version="18.2.0-next-9e3b772b8-20220608",Xt}var Gg;function J0(){if(Gg)return xd.exports;Gg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xd.exports=Y0(),xd.exports}var Qg;function X0(){if(Qg)return zu;Qg=1;var r=J0();return zu.createRoot=r.createRoot,zu.hydrateRoot=r.hydrateRoot,zu}var Z0=X0();const eT=L_(Z0),tT="modulepreload",nT=function(r){return"/"+r},Yg={},Af=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let h=function(_){return Promise.all(_.map(E=>Promise.resolve(E).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),g=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));o=h(t.map(_=>{if(_=nT(_),_ in Yg)return;Yg[_]=!0;const E=_.endsWith(".css"),k=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${k}`))return;const b=document.createElement("link");if(b.rel=E?"stylesheet":tT,E||(b.as="script"),b.crossOrigin="",b.href=_,g&&b.setAttribute("nonce",g),document.head.appendChild(b),E)return new Promise((B,J)=>{b.addEventListener("load",B),b.addEventListener("error",()=>J(new Error(`Unable to preload CSS for ${_}`)))})}))}function l(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return o.then(h=>{for(const m of h||[])m.status==="rejected"&&l(m.reason);return e().catch(l)})};var Co=(r=>(r.ADMIN="ADMIN",r.MEMBER="MEMBER",r.PENDING="PENDING",r))(Co||{});const rT=r=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.598m-1.5-6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"})}),iT=()=>{const{currentUser:r,logout:e}=LE();return N.jsx("header",{className:"sticky top-0 z-40 glass-nav transition-colors duration-300",children:N.jsx("div",{className:"container mx-auto px-4 py-4 sm:px-6 lg:px-8",children:N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsxs("div",{className:"flex items-center space-x-4 group cursor-pointer",children:[N.jsx(rT,{className:"h-10 w-10 text-orange-600 animate-fade-in group-hover:scale-110 transition-transform"}),N.jsxs("h1",{className:"text-2xl md:text-3xl font-display font-black text-orange-950 tracking-tighter uppercase",children:["Union Connect ",N.jsx("span",{className:"text-orange-600",children:"Hub"})]})]}),N.jsx("div",{className:"flex items-center space-x-2 md:space-x-4 animate-fade-in",children:r&&N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"hidden sm:flex flex-col items-end",children:[N.jsxs("span",{className:"text-sm text-orange-950/70 leading-tight",children:["Welcome, ",N.jsx("span",{className:"font-bold text-orange-950",children:r.employeeName})]}),N.jsx("span",{className:`text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full mt-0.5 ${r.role===Co.ADMIN?"bg-orange-600 text-white shadow-lg shadow-orange-200":"bg-orange-100 text-orange-700 border border-orange-200"}`,children:r.role})]}),N.jsx("button",{onClick:e,className:"px-4 py-2 text-sm font-semibold text-white bg-orange-600 border border-transparent rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all hover:-translate-y-0.5",children:"Logout"})]})})]})})})},sT=r=>N.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:[N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 100 12h-3a7.5 7.5 0 00-7.5-7.5h1.5v-1.5a7.5 7.5 0 007.5-7.5h3z"}),N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-1.875a1.125 1.125 0 01-1.125-1.125v-1.5a1.125 1.125 0 011.125-1.125h1.875m.75 4.5l.375-.375a1.875 1.875 0 000-2.65l-3.375-3.375a1.875 1.875 0 00-2.65 0l-.375.375m.75 4.5l-4.5-4.5"})]}),oT=({className:r="w-6 h-6"})=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:r,children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"})}),aT=r=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),lT=r=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3.375 3.375 0 0119.5 7.372l-10.94 10.94a2.25 2.25 0 01-3.182-3.182l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a1.125 1.125 0 001.591 1.591l10.94-10.94a2.25 2.25 0 00-3.182-3.182L5.625 15.375a3.375 3.375 0 004.773 4.773l7.693-7.693a.75.75 0 011.06-1.06z"})}),ax=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"],uT=[{id:1,name:"S.K. Gupta",post:"President"},{id:2,name:"Mukesh Kumar",post:"Vice President"},{id:3,name:"Sudhir",post:"General Secretary"},{id:4,name:"Ravinder Kumar",post:"Joint Secretary Industrial Dispute"},{id:5,name:"Manoj Katiyar",post:"Joint Secretary Welfare"},{id:6,name:"Krishna Kumar",post:"Treasurer"},{id:7,name:"Manoj Nandal",post:"Assistant Joint Secretary Industrial Dispute"},{id:8,name:"Pradeep Kumar",post:"Assistant Joint Secretary Welfare"},{id:9,name:"Debabrata Sahu",post:"Executive Member"},{id:10,name:"Sandeep Kumar",post:"Executive Member"},{id:11,name:"Mohit Kajal",post:"Executive Member"},{id:12,name:"Naveen Kumar",post:"Executive Member"},{id:13,name:"Pardeep",post:"Executive Member"}],dn={hindiName:"इंडियन ऑयल पानीपत रिफ़ाइनरी एम्पलाईज यूनियन",englishName:"INDIAN OIL PANIPAT REFINERY EMPLOYEES UNION (IPREU)",address:"पानीपत रिफ़ाइनरी एवं पेट्रोकेमिकल कॉम्प्लेक्स, पोस्ट ऑफिस: पानीपत रिफ़ाइनरी, बहोली, पानीपत-132140 (हरियाणा)",phones:["9034084033","9416658215"],intercom:"01802524045",email:"PRIPREU@INDIANOIL.IN",affiliation:"भारतीय मजदूर संघ (बी.एम.एस. से सम्बद्ध)",regdNo:"1542"},U_=()=>N.jsxs("div",{className:"flex flex-col items-center gap-3 py-6",children:[N.jsxs("div",{className:"relative group",children:[N.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"}),N.jsxs("div",{className:"relative px-8 py-4 bg-white border-2 border-orange-500/20 rounded-2xl shadow-xl flex flex-col items-center transition-all hover:border-orange-500/50",children:[N.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-2 drop-shadow-sm",children:"Official Platform Identity"}),N.jsxs("h4",{className:"text-base md:text-lg font-black tracking-tight text-center leading-tight",children:[N.jsx("span",{className:"text-gray-900",children:"Design & Developed by "}),N.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-700 uppercase drop-shadow-sm",children:"Mr. NAVEEN KUMAR"})]}),N.jsx("div",{className:"mt-2 px-3 py-0.5 bg-orange-600 rounded-full",children:N.jsx("p",{className:"text-[9px] font-black text-white uppercase tracking-widest",children:"(EXECUTIVE MEMBER) IPREU"})})]})]}),N.jsxs("div",{className:"flex items-center gap-3 mt-1 opacity-60",children:[N.jsx("span",{className:"h-[2px] w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"}),N.jsx("span",{className:"text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]",children:"Secure Premium Infrastructure"}),N.jsx("span",{className:"h-[2px] w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"})]})]}),cT=({name:r,post:e})=>N.jsx("div",{className:"p-5 rounded-2xl border transition-all duration-300 bg-white border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 group",children:N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx("div",{className:"w-14 h-14 rounded-full flex items-center justify-center text-lg font-black bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 group-hover:scale-110 shadow-sm border border-orange-100 transition-transform duration-300",children:r.split(" ").map(t=>t[0]).join("").substring(0,2)}),N.jsxs("div",{children:[N.jsx("p",{className:"font-black text-xl text-[#002316] tracking-tight leading-tight mb-0.5 transition-colors uppercase",children:r}),N.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-orange-700 font-black",children:e})]})]})}),hT=({onLoginClick:r})=>{const{calendarEvents:e,announcements:t,users:s,grievances:o}=LE(),l=e.filter(m=>new Date(m.date)>=new Date(new Date().setHours(0,0,0,0))).sort((m,g)=>m.date.localeCompare(g.date)).slice(0,3),h=t.slice(0,3);return N.jsxs("div",{className:"min-h-[calc(100vh-80px)] flex flex-col justify-between -mt-4 md:-mt-8 -mx-4 md:-mx-8",children:[N.jsxs("section",{className:"relative overflow-hidden bg-[#2D0606] text-white py-24 md:py-36 px-6 lg:px-12 flex items-center justify-center",children:[N.jsx("style",{children:`
                    .hero-gradient {
                        background: radial-gradient(circle at top right, #4c0505 0%, #1a0202 70%, #000000 100%);
                    }
                `}),N.jsx("div",{className:"absolute inset-0 hero-gradient opacity-90"}),N.jsx("div",{className:"absolute top-0 left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] animate-blob"}),N.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[120px] animate-blob animation-delay-2000"}),N.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto text-center space-y-10",children:[N.jsxs("div",{className:"inline-flex flex-col items-center gap-6",children:[N.jsxs("div",{className:"px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-bold text-orange-200 shadow-2xl flex items-center gap-2",children:[N.jsxs("span",{className:"flex h-2 w-2 relative",children:[N.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),N.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-orange-500"})]}),"SECURE CENTRALIZED MEMBER HUB"]}),N.jsx("h2",{className:"text-3xl md:text-5xl font-black text-orange-500 font-display transition-all hover:scale-105 duration-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]",children:dn.hindiName})]}),N.jsxs("h1",{className:"text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] drop-shadow-2xl",children:["Strength Through ",N.jsx("br",{})," ",N.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase",children:"Unity & Transparency"})]}),N.jsxs("p",{className:"text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-lg",children:["The official digital home for ",dn.englishName,". Affiliated with ",N.jsx("span",{className:"text-white font-bold underline decoration-orange-500 decoration-2 underline-offset-4",children:dn.affiliation}),"."]}),N.jsxs("div",{className:"pt-10 flex flex-col sm:flex-row items-center justify-center gap-6",children:[N.jsx("button",{onClick:r,className:"w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white font-black rounded-2xl shadow-[0_20px_50px_rgba(185,28,28,0.3)] transition-all hover:-translate-y-1 active:scale-95 text-xl border border-white/20",children:"Access Member Portal →"}),N.jsx("a",{href:"#leadership",className:"w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl backdrop-blur-xl border border-white/10 transition-all hover:-translate-y-1 text-xl",children:"View Executive Body"})]})]})]}),N.jsx("section",{className:"py-20 bg-[#fcfaf7] relative z-20 border-b border-orange-100",children:N.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-12",children:N.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[N.jsxs("div",{className:"space-y-8",children:[N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx("div",{className:"p-3 bg-orange-100 text-orange-600 rounded-xl",children:N.jsx(oT,{className:"w-7 h-7"})}),N.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-orange-950",children:"Union Calendar"})]}),N.jsxs("div",{className:"space-y-3",children:[l.length>0?l.map(m=>N.jsxs("div",{className:"bg-white p-4 rounded-xl border border-orange-100 shadow-sm flex items-center justify-between group hover:border-orange-300 transition-colors",children:[N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsxs("div",{className:"flex flex-col items-center justify-center bg-orange-50 w-14 h-14 rounded-lg border border-orange-100",children:[N.jsx("span",{className:"text-[10px] text-orange-800/50 uppercase font-bold",children:new Date(m.date).toLocaleString("default",{month:"short"})}),N.jsx("span",{className:"text-xl font-bold text-orange-700 leading-none",children:new Date(m.date).getDate()})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"font-bold text-orange-950 group-hover:text-orange-600 transition-colors",children:m.title}),N.jsxs("div",{className:"flex items-center gap-3 text-xs text-orange-900/40 mt-1",children:[N.jsxs("span",{className:"flex items-center gap-1",children:[N.jsx(aT,{className:"w-3 h-3"})," ",m.startTime]}),m.location&&N.jsxs("span",{className:"flex items-center gap-1",children:["📍 ",m.location]})]})]})]}),N.jsx("button",{onClick:r,className:"text-xs font-bold text-orange-600/40 hover:text-orange-600 uppercase tracking-widest px-3 py-1 bg-orange-50 rounded-full border border-orange-100",children:"Details"})]},m.id)):N.jsx("p",{className:"text-orange-900/40 italic py-8 text-center bg-white rounded-xl border border-dashed border-orange-100",children:"No upcoming events listed for this month."}),N.jsx("p",{className:"text-center",children:N.jsx("button",{onClick:r,className:"text-sm font-semibold text-orange-600 hover:text-orange-700",children:"View Full Calendar →"})})]})]}),N.jsxs("div",{className:"space-y-8",children:[N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx("div",{className:"p-3 bg-orange-100 text-orange-600 rounded-xl",children:N.jsx(sT,{className:"w-7 h-7"})}),N.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-orange-950",children:"Latest Circulars"})]}),N.jsxs("div",{className:"space-y-3",children:[h.length>0?h.map(m=>N.jsxs("div",{className:"bg-white p-4 rounded-xl border border-orange-100 shadow-sm transition-all hover:border-orange-300",children:[N.jsxs("div",{className:"flex justify-between items-start mb-2",children:[N.jsx("h4",{className:"font-bold text-orange-950 line-clamp-1",children:m.title}),N.jsx("span",{className:"text-[10px] bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-bold",children:"OFFICIAL"})]}),N.jsx("p",{className:"text-sm text-orange-900/60 line-clamp-2 mb-3",children:m.content}),N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsx("span",{className:"text-[10px] text-orange-900/30 font-medium italic",children:new Date(m.createdAt).toLocaleDateString()}),m.attachment&&N.jsxs("button",{onClick:r,className:"flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700",children:[N.jsx(lT,{className:"w-3.5 h-3.5"}),"View Attachment"]})]})]},m.id)):N.jsx("p",{className:"text-orange-900/40 italic py-8 text-center bg-white rounded-xl border border-dashed border-orange-100",children:"No public notices available at this time."}),N.jsx("p",{className:"text-center",children:N.jsx("button",{onClick:r,className:"text-sm font-semibold text-orange-600 hover:text-orange-700",children:"Read All Circulars →"})})]})]})]})})}),N.jsx("section",{id:"leadership",className:"py-24 px-6 lg:px-12 bg-[#fcfaf7] relative z-20",children:N.jsxs("div",{className:"max-w-6xl mx-auto",children:[N.jsxs("div",{className:"text-center mb-20",children:[N.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-orange-950 mb-6 font-display uppercase tracking-tight",children:["Executive Body of ",N.jsx("span",{className:"text-orange-600",children:"IPREU"})]}),N.jsx("div",{className:"w-32 h-2 bg-gradient-to-r from-orange-400 to-red-800 mx-auto rounded-full mb-8 opacity-80"}),N.jsx("p",{className:"text-base md:text-lg text-orange-950/60 max-w-3xl mx-auto leading-relaxed font-medium",children:"Serving with dedication, integrity, and a commitment to member welfare and industrial harmony."})]}),N.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:uT.map(m=>N.jsx(cT,{name:m.name,post:m.post},m.id))})]})}),N.jsxs("section",{className:"py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative",children:[N.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]"}),N.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-12 relative z-10",children:N.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-12 text-center",children:[N.jsxs("div",{className:"space-y-2 group",children:[N.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:s.filter(m=>m.role!=="PENDING").length||1}),N.jsx("p",{className:"text-sm font-semibold text-gray-400 uppercase tracking-widest",children:"Registered Members"})]}),N.jsxs("div",{className:"space-y-2 group",children:[N.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:t.length}),N.jsx("p",{className:"text-sm font-semibold text-gray-400 uppercase tracking-widest",children:"Digital Circulars"})]}),N.jsxs("div",{className:"space-y-2 group",children:[N.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:o.filter(m=>m.status==="RESOLVED").length}),N.jsx("p",{className:"text-sm font-semibold text-gray-400 uppercase tracking-widest",children:"Resolved Grievances"})]}),N.jsxs("div",{className:"space-y-2 group",children:[N.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:dn.regdNo}),N.jsx("p",{className:"text-sm font-semibold text-gray-400 uppercase tracking-widest",children:"Registration No."})]})]})})]}),N.jsxs("section",{className:"py-24 px-6 lg:px-12 bg-[#fcfaf7] relative z-20",children:[N.jsx("div",{className:"max-w-6xl mx-auto text-center mb-20",children:N.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-orange-950 mb-8 font-display underline decoration-orange-500 decoration-4 underline-offset-12",children:"How to Join IPREU"})}),N.jsxs("div",{className:"max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative",children:[N.jsx("div",{className:"absolute top-1/2 left-0 w-full h-1 bg-orange-100 hidden md:block -z-10"}),N.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-100 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all",children:[N.jsx("div",{className:"w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-600/20",children:"1"}),N.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Digital Registration"}),N.jsx("p",{className:"text-base text-orange-950/70",children:"Click Join and fill in your official employee details via our secure form."})]}),N.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-200 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all",children:[N.jsx("div",{className:"w-12 h-12 bg-orange-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-900/20",children:"2"}),N.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Admin Verification"}),N.jsx("p",{className:"text-base text-orange-950/70",children:"Your details will be reviewed by the Executive Body for union credentials."})]}),N.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-200 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all",children:[N.jsx("div",{className:"w-12 h-12 bg-orange-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-900/20",children:"3"}),N.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Full Access"}),N.jsx("p",{className:"text-base text-orange-950/70",children:"Receive your digital ID card and gain access to voting, circulars, and more."})]})]}),N.jsx("div",{className:"mt-16 text-center",children:N.jsx("button",{onClick:r,className:"px-12 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:-translate-y-1",children:"Start Registration Now"})})]}),N.jsxs("footer",{className:"bg-orange-950 text-orange-100 py-16 px-6 border-t border-orange-900 relative z-20",children:[N.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12",children:[N.jsxs("div",{className:"md:col-span-2 space-y-4",children:[N.jsx("h4",{className:"text-2xl font-display font-bold text-white tracking-tight",children:dn.englishName}),N.jsx("p",{className:"text-lg text-orange-300 font-bold mb-4",children:dn.hindiName}),N.jsx("p",{className:"text-sm leading-relaxed max-w-md text-orange-100/60",children:dn.address}),N.jsxs("div",{className:"pt-4 space-y-2 text-sm",children:[N.jsxs("p",{className:"flex items-center gap-3",children:[N.jsx("span",{className:"text-orange-400",children:"📞"})," ",dn.phones.join(" / ")," (Ext: ",dn.intercom,")"]}),N.jsxs("p",{className:"flex items-center gap-3",children:[N.jsx("span",{className:"text-orange-400",children:"✉️"})," ",N.jsx("a",{href:`mailto:${dn.email}`,className:"hover:text-orange-300 transition-colors",children:dn.email})]})]})]}),N.jsxs("div",{children:[N.jsx("h5",{className:"text-orange-300 font-bold mb-4 uppercase text-xs tracking-widest font-display",children:"Compliance"}),N.jsxs("ul",{className:"space-y-3 text-sm text-orange-100/60",children:[N.jsxs("li",{children:["Affiliation: ",dn.affiliation]}),N.jsxs("li",{children:["Regd No: ",dn.regdNo]}),N.jsx("li",{children:N.jsxs("span",{className:"flex items-center gap-2",children:[N.jsx("span",{className:"w-2 h-2 rounded-full bg-orange-400"})," Network Status: Active"]})})]})]}),N.jsxs("div",{children:[N.jsx("h5",{className:"text-orange-300 font-bold mb-4 uppercase text-xs tracking-widest font-display",children:"Navigation"}),N.jsxs("ul",{className:"space-y-2 text-sm text-orange-100/60",children:[N.jsx("li",{children:N.jsx("button",{onClick:r,className:"hover:text-orange-300 transition-colors",children:"Member Login"})}),N.jsx("li",{children:N.jsx("a",{href:"#leadership",className:"hover:text-orange-300 transition-colors",children:"Executive Body"})}),N.jsx("li",{children:N.jsx("button",{onClick:()=>r("grievances"),className:"hover:text-orange-300 transition-colors",children:"Grievance Portal"})})]})]})]}),N.jsxs("div",{className:"max-w-6xl mx-auto mt-12 pt-8 border-t border-orange-900/60 flex flex-col items-center gap-6",children:[N.jsx(U_,{}),N.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center w-full gap-4 text-[10px] uppercase tracking-widest text-orange-100/40 font-medium",children:[N.jsxs("p",{children:["© ",new Date().getFullYear()," IPREU. All rights reserved. | Built for the Employees, by the Union."]}),N.jsx("p",{className:"text-orange-400 font-bold px-3 py-1 bg-orange-400/10 rounded-full border border-orange-400/20",children:"Secure Private Network"})]})]})]})]})},dT=()=>{};var Jg={};/**
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
 */const j_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},fT=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},B_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,k=(l&3)<<4|m>>4;let b=(m&15)<<2|_>>6,B=_&63;g||(B=64,h||(b=64)),s.push(t[E],t[k],t[b],t[B])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(j_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):fT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const k=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||m==null||_==null||k==null)throw new pT;const b=l<<2|m>>4;if(s.push(b),_!==64){const B=m<<4&240|_>>2;if(s.push(B),k!==64){const J=_<<6&192|k;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class pT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mT=function(r){const e=j_(r);return B_.encodeByteArray(e,!0)},cc=function(r){return mT(r).replace(/\./g,"")},z_=function(r){try{return B_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yT=()=>gT().__FIREBASE_DEFAULTS__,_T=()=>{if(typeof process>"u"||typeof Jg>"u")return;const r=Jg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},vT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&z_(r[1]);return e&&JSON.parse(e)},Dc=()=>{try{return dT()||yT()||_T()||vT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},$_=r=>{var e,t;return(t=(e=Dc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},wT=r=>{const e=$_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},q_=()=>{var r;return(r=Dc())==null?void 0:r.config},H_=r=>{var e;return(e=Dc())==null?void 0:e[`_${r}`]};/**
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
 */class ET{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function TT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[cc(JSON.stringify(t)),cc(JSON.stringify(h)),""].join(".")}/**
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
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function ST(){var e;const r=(e=Dc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function kT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CT(){const r=qt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function PT(){return!ST()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function W_(){try{return typeof indexedDB=="object"}catch{return!1}}function K_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function xT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const NT="FirebaseError";class mr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=NT,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?DT(l,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new mr(o,m,s)}}function DT(r,e){return r.replace(VT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const VT=/\{\$([^}]+)}/g;function bT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Es(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Xg(l)&&Xg(h)){if(!Es(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Xg(r){return r!==null&&typeof r=="object"}/**
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
 */function ml(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Wa(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ka(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function OT(r,e){const t=new MT(r,e);return t.subscribe.bind(t)}class MT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");LT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Vd),o.error===void 0&&(o.error=Vd),o.complete===void 0&&(o.complete=Vd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Vd(){}/**
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
 */function ot(r){return r&&r._delegate?r._delegate:r}/**
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
 */function gl(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function G_(r){return(await fetch(r,{credentials:"include"})).ok}class jn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ms="[DEFAULT]";/**
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
 */class FT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ET;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jT(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:UT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UT(r){return r===ms?void 0:r}function jT(r){return r.instantiationMode==="EAGER"}/**
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
 */class BT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new FT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ae||(Ae={}));const zT={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},$T=Ae.INFO,qT={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},HT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=qT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rf{constructor(e){this.name=e,this._logLevel=$T,this._logHandler=HT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const WT=(r,e)=>e.some(t=>r instanceof t);let Zg,ey;function KT(){return Zg||(Zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GT(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q_=new WeakMap,Jd=new WeakMap,Y_=new WeakMap,bd=new WeakMap,kf=new WeakMap;function QT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Lr(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Q_.set(t,r)}).catch(()=>{}),kf.set(e,r),e}function YT(r){if(Jd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Jd.set(r,e)}let Xd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Jd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Y_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lr(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function JT(r){Xd=r(Xd)}function XT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Od(this),e,...t);return Y_.set(s,e.sort?e.sort():[e]),Lr(s)}:GT().includes(r)?function(...e){return r.apply(Od(this),e),Lr(Q_.get(this))}:function(...e){return Lr(r.apply(Od(this),e))}}function ZT(r){return typeof r=="function"?XT(r):(r instanceof IDBTransaction&&YT(r),WT(r,KT())?new Proxy(r,Xd):r)}function Lr(r){if(r instanceof IDBRequest)return QT(r);if(bd.has(r))return bd.get(r);const e=ZT(r);return e!==r&&(bd.set(r,e),kf.set(e,r)),e}const Od=r=>kf.get(r);function Vc(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),m=Lr(h);return s&&h.addEventListener("upgradeneeded",g=>{s(Lr(h.result),g.oldVersion,g.newVersion,Lr(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}function Md(r,{blocked:e}={}){const t=indexedDB.deleteDatabase(r);return e&&t.addEventListener("blocked",s=>e(s.oldVersion,s)),Lr(t).then(()=>{})}const eI=["get","getKey","getAll","getAllKeys","count"],tI=["put","add","delete","clear"],Ld=new Map;function ty(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ld.get(e))return Ld.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=tI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||eI.includes(t)))return;const l=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return Ld.set(e,l),l}JT(r=>({...r,get:(e,t,s)=>ty(e,t)||r.get(e,t,s),has:(e,t)=>!!ty(e,t)||r.has(e,t)}));/**
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
 */class nI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function rI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zd="@firebase/app",ny="0.14.10";/**
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
 */const jr=new Rf("@firebase/app"),iI="@firebase/app-compat",sI="@firebase/analytics-compat",oI="@firebase/analytics",aI="@firebase/app-check-compat",lI="@firebase/app-check",uI="@firebase/auth",cI="@firebase/auth-compat",hI="@firebase/database",dI="@firebase/data-connect",fI="@firebase/database-compat",pI="@firebase/functions",mI="@firebase/functions-compat",gI="@firebase/installations",yI="@firebase/installations-compat",_I="@firebase/messaging",vI="@firebase/messaging-compat",wI="@firebase/performance",EI="@firebase/performance-compat",TI="@firebase/remote-config",II="@firebase/remote-config-compat",SI="@firebase/storage",AI="@firebase/storage-compat",RI="@firebase/firestore",kI="@firebase/ai",CI="@firebase/firestore-compat",PI="firebase",xI="12.11.0";/**
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
 */const ef="[DEFAULT]",NI={[Zd]:"fire-core",[iI]:"fire-core-compat",[oI]:"fire-analytics",[sI]:"fire-analytics-compat",[lI]:"fire-app-check",[aI]:"fire-app-check-compat",[uI]:"fire-auth",[cI]:"fire-auth-compat",[hI]:"fire-rtdb",[dI]:"fire-data-connect",[fI]:"fire-rtdb-compat",[pI]:"fire-fn",[mI]:"fire-fn-compat",[gI]:"fire-iid",[yI]:"fire-iid-compat",[_I]:"fire-fcm",[vI]:"fire-fcm-compat",[wI]:"fire-perf",[EI]:"fire-perf-compat",[TI]:"fire-rc",[II]:"fire-rc-compat",[SI]:"fire-gcs",[AI]:"fire-gcs-compat",[RI]:"fire-fst",[CI]:"fire-fst-compat",[kI]:"fire-vertex","fire-js":"fire-js",[PI]:"fire-js-all"};/**
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
 */const hc=new Map,DI=new Map,tf=new Map;function ry(r,e){try{r.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function fr(r){const e=r.name;if(tf.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;tf.set(e,r);for(const t of hc.values())ry(t,r);for(const t of DI.values())ry(t,r);return!0}function jo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Sn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const VI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pi=new xs("app","Firebase",VI);/**
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
 */class bI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Bo=xI;function J_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:ef,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Pi.create("bad-app-name",{appName:String(o)});if(t||(t=q_()),!t)throw Pi.create("no-options");const l=hc.get(o);if(l){if(Es(t,l.options)&&Es(s,l.config))return l;throw Pi.create("duplicate-app",{appName:o})}const h=new BT(o);for(const g of tf.values())h.addComponent(g);const m=new bI(t,s,h);return hc.set(o,m),m}function Cf(r=ef){const e=hc.get(r);if(!e&&r===ef&&q_())return J_();if(!e)throw Pi.create("no-app",{appName:r});return e}function Rn(r,e,t){let s=NI[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(h.join(" "));return}fr(new jn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const OI="firebase-heartbeat-database",MI=1,rl="firebase-heartbeat-store";let Fd=null;function X_(){return Fd||(Fd=Vc(OI,MI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(rl)}catch(t){console.warn(t)}}}}).catch(r=>{throw Pi.create("idb-open",{originalErrorMessage:r.message})})),Fd}async function LI(r){try{const t=(await X_()).transaction(rl),s=await t.objectStore(rl).get(Z_(r));return await t.done,s}catch(e){if(e instanceof mr)jr.warn(e.message);else{const t=Pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function iy(r,e){try{const s=(await X_()).transaction(rl,"readwrite");await s.objectStore(rl).put(e,Z_(r)),await s.done}catch(t){if(t instanceof mr)jr.warn(t.message);else{const s=Pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(s.message)}}}function Z_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const FI=1024,UI=30;class jI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=sy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>UI){const h=$I(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){jr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sy(),{heartbeatsToSend:s,unsentEntries:o}=BI(this._heartbeatsCache.heartbeats),l=cc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jr.warn(t),""}}}function sy(){return new Date().toISOString().substring(0,10)}function BI(r,e=FI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),oy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),oy(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class zI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W_()?K_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await LI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return iy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return iy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function oy(r){return cc(JSON.stringify({version:2,heartbeats:r})).length}function $I(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function qI(r){fr(new jn("platform-logger",e=>new nI(e),"PRIVATE")),fr(new jn("heartbeat",e=>new jI(e),"PRIVATE")),Rn(Zd,ny,r),Rn(Zd,ny,"esm2020"),Rn("fire-js","")}qI("");var HI="firebase",WI="12.11.0";/**
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
 */Rn(HI,WI,"app");function ev(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KI=ev,tv=new xs("auth","Firebase",ev());/**
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
 */const dc=new Rf("@firebase/auth");function GI(r,...e){dc.logLevel<=Ae.WARN&&dc.warn(`Auth (${Bo}): ${r}`,...e)}function Xu(r,...e){dc.logLevel<=Ae.ERROR&&dc.error(`Auth (${Bo}): ${r}`,...e)}/**
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
 */function Bn(r,...e){throw Pf(r,...e)}function lr(r,...e){return Pf(r,...e)}function nv(r,e,t){const s={...KI(),[e]:t};return new xs("auth","Firebase",s).create(e,{appName:r.name})}function Fr(r){return nv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return tv.create(r,...e)}function de(r,e,...t){if(!r)throw Pf(e,...t)}function Or(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Xu(e),new Error(e)}function Br(r,e){r||Or(e)}/**
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
 */function nf(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function QI(){return ay()==="http:"||ay()==="https:"}function ay(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function YI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QI()||RT()||"connection"in navigator)?navigator.onLine:!0}function JI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class yl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Br(t>e,"Short delay should be less than long delay!"),this.isMobile=IT()||kT()}get(){return YI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xf(r,e){Br(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class rv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const XI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eS=new yl(3e4,6e4);function Fi(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ui(r,e,t,s,o={}){return iv(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const m=ml({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...l};return AT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&gl(r.emulatorConfig.host)&&(_.credentials="include"),rv.fetch()(await sv(r,r.config.apiHost,t,m),_)})}async function iv(r,e,t){r._canInitEmulator=!1;const s={...XI,...e};try{const o=new nS(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw $u(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw $u(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw $u(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw $u(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw nv(r,E,_);Bn(r,E)}}catch(o){if(o instanceof mr)throw o;Bn(r,"network-request-failed",{message:String(o)})}}async function _l(r,e,t,s,o={}){const l=await Ui(r,e,t,s,o);return"mfaPendingCredential"in l&&Bn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function sv(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?xf(r.config,o):`${r.config.apiScheme}://${o}`;return ZI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function tS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(lr(this.auth,"network-request-failed")),eS.get())})}}function $u(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=lr(r,e,s);return o.customData._tokenResponse=t,o}function ly(r){return r!==void 0&&r.enterprise!==void 0}class rS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return tS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iS(r,e){return Ui(r,"GET","/v2/recaptchaConfig",Fi(r,e))}/**
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
 */async function sS(r,e){return Ui(r,"POST","/v1/accounts:delete",e)}async function fc(r,e){return Ui(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oS(r,e=!1){const t=ot(r),s=await t.getIdToken(e),o=Nf(s);de(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Xa(Ud(o.auth_time)),issuedAtTime:Xa(Ud(o.iat)),expirationTime:Xa(Ud(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Ud(r){return Number(r)*1e3}function Nf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Xu("JWT malformed, contained fewer than 3 sections"),null;try{const o=z_(t);return o?JSON.parse(o):(Xu("Failed to decode base64 JWT payload"),null)}catch(o){return Xu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function uy(r){const e=Nf(r);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function il(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof mr&&aS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function aS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class lS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xa(this.lastLoginAt),this.creationTime=Xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pc(r){var k;const e=r.auth,t=await r.getIdToken(),s=await il(r,fc(e,{idToken:t}));de(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const l=(k=o.providerUserInfo)!=null&&k.length?ov(o.providerUserInfo):[],h=cS(r.providerData,l),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new rf(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,E)}async function uS(r){const e=ot(r);await pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cS(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function ov(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function hS(r,e){const t=await iv(r,{},async()=>{const s=ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await sv(r,o,"/v1/token",`key=${l}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&gl(r.emulatorConfig.host)&&(g.credentials="include"),rv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dS(r,e){return Ui(r,"POST","/v2/accounts:revokeToken",Fi(r,e))}/**
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
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=uy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await hS(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new xo;return s&&(de(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(de(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(de(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
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
 */function Ti(r,e){de(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Fn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new lS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await il(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return oS(this,e)}reload(){return uS(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await pc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await il(this,sS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:k,emailVerified:b,isAnonymous:B,providerData:J,stsTokenManager:X}=t;de(k&&X,e,"internal-error");const Q=xo.fromJSON(this.name,X);de(typeof k=="string",e,"internal-error"),Ti(s,e.name),Ti(o,e.name),de(typeof b=="boolean",e,"internal-error"),de(typeof B=="boolean",e,"internal-error"),Ti(l,e.name),Ti(h,e.name),Ti(m,e.name),Ti(g,e.name),Ti(_,e.name),Ti(E,e.name);const me=new Fn({uid:k,auth:e,email:o,emailVerified:b,displayName:s,isAnonymous:B,photoURL:h,phoneNumber:l,tenantId:m,stsTokenManager:Q,createdAt:_,lastLoginAt:E});return J&&Array.isArray(J)&&(me.providerData=J.map(ge=>({...ge}))),g&&(me._redirectEventId=g),me}static async _fromIdTokenResponse(e,t,s=!1){const o=new xo;o.updateFromServerResponse(t);const l=new Fn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await pc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];de(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?ov(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),m=new xo;m.updateFromIdToken(s);const g=new Fn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new rf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const cy=new Map;function Mr(r){Br(r instanceof Function,"Expected a class definition");let e=cy.get(r);return e?(Br(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,cy.set(r,e),e)}/**
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
 */class av{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}av.type="NONE";const hy=av;/**
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
 */function Zu(r,e,t){return`firebase:${r}:${e}:${t}`}class No{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Zu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Zu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fc(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new No(Mr(hy),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Mr(hy);const h=Zu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let k;if(typeof E=="string"){const b=await fc(e,{idToken:E}).catch(()=>{});if(!b)break;k=await Fn._fromGetAccountInfoResponse(e,b,E)}else k=Fn._fromJSON(e,E);_!==l&&(m=k),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new No(l,e,s):(l=g[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new No(l,e,s))}}/**
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
 */function dy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fv(e))return"Blackberry";if(pv(e))return"Webos";if(uv(e))return"Safari";if((e.includes("chrome/")||cv(e))&&!e.includes("edge/"))return"Chrome";if(dv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function lv(r=qt()){return/firefox\//i.test(r)}function uv(r=qt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cv(r=qt()){return/crios\//i.test(r)}function hv(r=qt()){return/iemobile/i.test(r)}function dv(r=qt()){return/android/i.test(r)}function fv(r=qt()){return/blackberry/i.test(r)}function pv(r=qt()){return/webos/i.test(r)}function Df(r=qt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function fS(r=qt()){var e;return Df(r)&&!!((e=window.navigator)!=null&&e.standalone)}function pS(){return CT()&&document.documentMode===10}function mv(r=qt()){return Df(r)||dv(r)||pv(r)||fv(r)||/windows phone/i.test(r)||hv(r)}/**
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
 */function gv(r,e=[]){let t;switch(r){case"Browser":t=dy(qt());break;case"Worker":t=`${dy(qt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Bo}/${s}`}/**
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
 */class mS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,m)=>{try{const g=e(l);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function gS(r,e={}){return Ui(r,"GET","/v2/passwordPolicy",Fi(r,e))}/**
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
 */const yS=6;class _S{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??yS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class vS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fy(this),this.idTokenSubscription=new fy(this),this.beforeStateQueue=new mS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fc(this,{idToken:e}),s=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Sn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Fr(this));const t=e?ot(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gS(this),t=new _S(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await dS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&GI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ns(r){return ot(r)}class fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=OT(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wS(r){bc=r}function yv(r){return bc.loadJS(r)}function ES(){return bc.recaptchaEnterpriseScript}function TS(){return bc.gapiScript}function IS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class SS{constructor(){this.enterprise=new AS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class AS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const RS="recaptcha-enterprise",_v="NO_RECAPTCHA";class kS{constructor(e){this.type=RS,this.auth=Ns(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,m)=>{iS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new rS(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(l,h,m){const g=window.grecaptcha;ly(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(_v)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new SS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(m=>{if(!t&&ly(window.grecaptcha))o(m,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=ES();g.length!==0&&(g+=m),yv(g).then(()=>{o(m,l,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function py(r,e,t,s=!1,o=!1){const l=new kS(r);let h;if(o)h=_v;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function sf(r,e,t,s,o){var l;if((l=r._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await py(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await py(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function CS(r,e){const t=jo(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Es(l,e??{}))return o;Bn(o,"already-initialized")}return t.initialize({options:e})}function PS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Mr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function xS(r,e,t){const s=Ns(r);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=vv(e),{host:h,port:m}=NS(e),g=m===null?"":`:${m}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(Es(_,s.config.emulator)&&Es(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,gl(h)?G_(`${l}//${h}${g}`):DS()}function vv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function NS(r){const e=vv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:my(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:my(h)}}}function my(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function DS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Vf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function VS(r,e){return Ui(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bS(r,e){return _l(r,"POST","/v1/accounts:signInWithPassword",Fi(r,e))}/**
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
 */async function OS(r,e){return _l(r,"POST","/v1/accounts:signInWithEmailLink",Fi(r,e))}async function MS(r,e){return _l(r,"POST","/v1/accounts:signInWithEmailLink",Fi(r,e))}/**
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
 */class sl extends Vf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new sl(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new sl(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sf(e,t,"signInWithPassword",bS);case"emailLink":return OS(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sf(e,s,"signUpPassword",VS);case"emailLink":return MS(e,{idToken:t,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Do(r,e){return _l(r,"POST","/v1/accounts:signInWithIdp",Fi(r,e))}/**
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
 */const LS="http://localhost";class Ts extends Vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new Ts(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Do(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Do(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Do(e,t)}buildRequest(){const e={requestUri:LS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ml(t)}return e}}/**
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
 */function FS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function US(r){const e=Wa(Ka(r)).link,t=e?Wa(Ka(e)).deep_link_id:null,s=Wa(Ka(r)).deep_link_id;return(s?Wa(Ka(s)).link:null)||s||t||e||r}class bf{constructor(e){const t=Wa(Ka(e)),s=t.apiKey??null,o=t.oobCode??null,l=FS(t.mode??null);de(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=US(e);try{return new bf(t)}catch{return null}}}/**
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
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,t){return sl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=bf.parseLink(t);return de(s,"argument-error"),sl._fromEmailAndCode(e,s.code,s.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vl extends wv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ii extends vl{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
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
 */class Si extends vl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ts._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Si.credential(t,s)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
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
 */class Ai extends vl{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.GITHUB_SIGN_IN_METHOD="github.com";Ai.PROVIDER_ID="github.com";/**
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
 */class Ri extends vl{constructor(){super("twitter.com")}static credential(e,t){return Ts._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ri.credential(t,s)}catch{return null}}}Ri.TWITTER_SIGN_IN_METHOD="twitter.com";Ri.PROVIDER_ID="twitter.com";/**
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
 */async function jS(r,e){return _l(r,"POST","/v1/accounts:signUp",Fi(r,e))}/**
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
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Fn._fromIdTokenResponse(e,s,o),h=gy(s);return new Is({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=gy(s);return new Is({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function gy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class mc extends mr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new mc(e,t,s,o)}}function Ev(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(r,l,e,s):l})}async function BS(r,e,t=!1){const s=await il(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Is._forOperation(r,"link",s)}/**
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
 */async function zS(r,e,t=!1){const{auth:s}=r;if(Sn(s.app))return Promise.reject(Fr(s));const o="reauthenticate";try{const l=await il(r,Ev(s,o,e,r),t);de(l.idToken,s,"internal-error");const h=Nf(l.idToken);de(h,s,"internal-error");const{sub:m}=h;return de(r.uid===m,s,"user-mismatch"),Is._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Bn(s,"user-mismatch"),l}}/**
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
 */async function Tv(r,e,t=!1){if(Sn(r.app))return Promise.reject(Fr(r));const s="signIn",o=await Ev(r,s,e),l=await Is._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function $S(r,e){return Tv(Ns(r),e)}/**
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
 */async function Iv(r){const e=Ns(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qS(r,e,t){if(Sn(r.app))return Promise.reject(Fr(r));const s=Ns(r),h=await sf(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Iv(r),g}),m=await Is._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function HS(r,e,t){return Sn(r.app)?Promise.reject(Fr(r)):$S(ot(r),zo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Iv(r),s})}function WS(r,e,t,s){return ot(r).onIdTokenChanged(e,t,s)}function KS(r,e,t){return ot(r).beforeAuthStateChanged(e,t)}function GS(r,e,t,s){return ot(r).onAuthStateChanged(e,t,s)}function ec(r){return ot(r).signOut()}const gc="__sak";/**
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
 */class Sv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const QS=1e3,YS=10;class Av extends Sv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);pS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,YS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},QS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Av.type="LOCAL";const JS=Av;/**
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
 */class Rv extends Sv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rv.type="SESSION";const kv=Rv;/**
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
 */function XS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Oc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,l)),g=await XS(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oc.receivers=[];/**
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
 */function Of(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class ZS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((m,g)=>{const _=Of("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(k){const b=k;if(b.data.eventId===_)switch(b.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(b.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ur(){return window}function eA(r){ur().location.href=r}/**
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
 */function Cv(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function tA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nA(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function rA(){return Cv()?self:null}/**
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
 */const Pv="firebaseLocalStorageDb",iA=1,yc="firebaseLocalStorage",xv="fbase_key";class wl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mc(r,e){return r.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function sA(){const r=indexedDB.deleteDatabase(Pv);return new wl(r).toPromise()}function of(){const r=indexedDB.open(Pv,iA);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(yc,{keyPath:xv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(yc)?e(s):(s.close(),await sA(),e(await of()))})})}async function yy(r,e,t){const s=Mc(r,!0).put({[xv]:e,value:t});return new wl(s).toPromise()}async function oA(r,e){const t=Mc(r,!1).get(e),s=await new wl(t).toPromise();return s===void 0?null:s.value}function _y(r,e){const t=Mc(r,!0).delete(e);return new wl(t).toPromise()}const aA=800,lA=3;class Nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await of(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>lA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oc._getInstance(rA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await tA(),!this.activeServiceWorker)return;this.sender=new ZS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await of();return await yy(e,gc,"1"),await _y(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>yy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>oA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_y(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Mc(o,!1).getAll();return new wl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nv.type="LOCAL";const uA=Nv;new yl(3e4,6e4);/**
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
 */function cA(r,e){return e?Mr(e):(de(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Mf extends Vf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Do(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Do(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Do(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hA(r){return Tv(r.auth,new Mf(r),r.bypassAuthState)}function dA(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),zS(t,new Mf(r),r.bypassAuthState)}async function fA(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),BS(t,new Mf(r),r.bypassAuthState)}/**
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
 */class Dv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hA;case"linkViaPopup":case"linkViaRedirect":return fA;case"reauthViaPopup":case"reauthViaRedirect":return dA;default:Bn(this.auth,"internal-error")}}resolve(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pA=new yl(2e3,1e4);class Po extends Dv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Po.currentPopupAction&&Po.currentPopupAction.cancel(),Po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Br(this.filter.length===1,"Popup operations only handle one event");const e=Of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pA.get())};e()}}Po.currentPopupAction=null;/**
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
 */const mA="pendingRedirect",tc=new Map;class gA extends Dv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const s=await yA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yA(r,e){const t=wA(e),s=vA(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function _A(r,e){tc.set(r._key(),e)}function vA(r){return Mr(r._redirectPersistence)}function wA(r){return Zu(mA,r.config.apiKey,r.name)}async function EA(r,e,t=!1){if(Sn(r.app))return Promise.reject(Fr(r));const s=Ns(r),o=cA(s,e),h=await new gA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const TA=600*1e3;class IA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Vv(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(lr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TA&&this.cachedEventUids.clear(),this.cachedEventUids.has(vy(e))}saveEventToCache(e){this.cachedEventUids.add(vy(e)),this.lastProcessedEventTime=Date.now()}}function vy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Vv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vv(r);default:return!1}}/**
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
 */async function AA(r,e={}){return Ui(r,"GET","/v1/projects",e)}/**
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
 */const RA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kA=/^https?/;async function CA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await AA(r);for(const t of e)try{if(PA(t))return}catch{}Bn(r,"unauthorized-domain")}function PA(r){const e=nf(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!kA.test(t))return!1;if(RA.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const xA=new yl(3e4,6e4);function wy(){const r=ur().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function NA(r){return new Promise((e,t)=>{var o,l,h;function s(){wy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wy(),t(lr(r,"network-request-failed"))},timeout:xA.get()})}if((l=(o=ur().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=ur().gapi)!=null&&h.load)s();else{const m=IS("iframefcb");return ur()[m]=()=>{gapi.load?s():t(lr(r,"network-request-failed"))},yv(`${TS()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw nc=null,e})}let nc=null;function DA(r){return nc=nc||NA(r),nc}/**
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
 */const VA=new yl(5e3,15e3),bA="__/auth/iframe",OA="emulator/auth/iframe",MA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FA(r){const e=r.config;de(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?xf(e,OA):`https://${r.config.authDomain}/${bA}`,s={apiKey:e.apiKey,appName:r.name,v:Bo},o=LA.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ml(s).slice(1)}`}async function UA(r){const e=await DA(r),t=ur().gapi;return de(t,r,"internal-error"),e.open({where:document.body,url:FA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MA,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=lr(r,"network-request-failed"),m=ur().setTimeout(()=>{l(h)},VA.get());function g(){ur().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const jA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BA=500,zA=600,$A="_blank",qA="http://localhost";class Ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HA(r,e,t,s=BA,o=zA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...jA,width:s.toString(),height:o.toString(),top:l,left:h},_=qt().toLowerCase();t&&(m=cv(_)?$A:t),lv(_)&&(e=e||qA,g.scrollbars="yes");const E=Object.entries(g).reduce((b,[B,J])=>`${b}${B}=${J},`,"");if(fS(_)&&m!=="_self")return WA(e||"",m),new Ey(null);const k=window.open(e||"",m,E);de(k,r,"popup-blocked");try{k.focus()}catch{}return new Ey(k)}function WA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const KA="__/auth/handler",GA="emulator/auth/handler",QA=encodeURIComponent("fac");async function Ty(r,e,t,s,o,l){de(r.config.authDomain,r,"auth-domain-config-required"),de(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Bo,eventId:o};if(e instanceof wv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",bT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,k]of Object.entries({}))h[E]=k}if(e instanceof vl){const E=e.getScopes().filter(k=>k!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),_=g?`#${QA}=${encodeURIComponent(g)}`:"";return`${YA(r)}?${ml(m).slice(1)}${_}`}function YA({config:r}){return r.emulator?xf(r,GA):`https://${r.authDomain}/${KA}`}/**
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
 */const jd="webStorageSupport";class JA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kv,this._completeRedirectFn=EA,this._overrideRedirectResult=_A}async _openPopup(e,t,s,o){var h;Br((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await Ty(e,t,s,nf(),o);return HA(e,l,Of())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Ty(e,t,s,nf(),o);return eA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Br(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await UA(e),s=new IA(e);return t.register("authEvent",o=>(de(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(jd,{type:jd},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[jd];l!==void 0&&t(!!l),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mv()||uv()||Df()}}const XA=JA;var Iy="@firebase/auth",Sy="1.12.2";/**
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
 */class ZA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tR(r){fr(new jn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;de(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gv(r)},_=new vS(s,o,l,g);return PS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),fr(new jn("auth-internal",e=>{const t=Ns(e.getProvider("auth").getImmediate());return(s=>new ZA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Iy,Sy,eR(r)),Rn(Iy,Sy,"esm2020")}/**
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
 */const nR=300,rR=H_("authIdTokenMaxAge")||nR;let Ay=null;const iR=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>rR)return;const o=t==null?void 0:t.token;Ay!==o&&(Ay=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sR(r=Cf()){const e=jo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=CS(r,{popupRedirectResolver:XA,persistence:[uA,JS,kv]}),s=H_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=iR(l.toString());KS(t,h,()=>h(t.currentUser)),WS(t,m=>h(m))}}const o=$_("auth");return o&&xS(t,`http://${o}`),t}function oR(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}wS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=lr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",oR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tR("Browser");const bv="@firebase/installations",Lf="0.6.21";/**
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
 */const Ov=1e4,Mv=`w:${Lf}`,Lv="FIS_v2",aR="https://firebaseinstallations.googleapis.com/v1",lR=3600*1e3,uR="installations",cR="Installations";/**
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
 */const hR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ss=new xs(uR,cR,hR);function Fv(r){return r instanceof mr&&r.code.includes("request-failed")}/**
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
 */function Uv({projectId:r}){return`${aR}/projects/${r}/installations`}function jv(r){return{token:r.token,requestStatus:2,expiresIn:fR(r.expiresIn),creationTime:Date.now()}}async function Bv(r,e){const s=(await e.json()).error;return Ss.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function zv({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function dR(r,{refreshToken:e}){const t=zv(r);return t.append("Authorization",pR(e)),t}async function $v(r){const e=await r();return e.status>=500&&e.status<600?r():e}function fR(r){return Number(r.replace("s","000"))}function pR(r){return`${Lv} ${r}`}/**
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
 */async function mR({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=Uv(r),o=zv(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:Lv,appId:r.appId,sdkVersion:Mv},m={method:"POST",headers:o,body:JSON.stringify(h)},g=await $v(()=>fetch(s,m));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:jv(_.authToken)}}else throw await Bv("Create Installation",g)}/**
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
 */function qv(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function gR(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yR=/^[cdef][\w-]{21}$/,af="";function _R(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=vR(r);return yR.test(t)?t:af}catch{return af}}function vR(r){return gR(r).substr(0,22)}/**
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
 */function Lc(r){return`${r.appName}!${r.appId}`}/**
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
 */const Hv=new Map;function Wv(r,e){const t=Lc(r);Kv(t,e),wR(t,e)}function Kv(r,e){const t=Hv.get(r);if(t)for(const s of t)s(e)}function wR(r,e){const t=ER();t&&t.postMessage({key:r,fid:e}),TR()}let ys=null;function ER(){return!ys&&"BroadcastChannel"in self&&(ys=new BroadcastChannel("[Firebase] FID Change"),ys.onmessage=r=>{Kv(r.data.key,r.data.fid)}),ys}function TR(){Hv.size===0&&ys&&(ys.close(),ys=null)}/**
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
 */const IR="firebase-installations-database",SR=1,As="firebase-installations-store";let Bd=null;function Ff(){return Bd||(Bd=Vc(IR,SR,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(As)}}})),Bd}async function _c(r,e){const t=Lc(r),o=(await Ff()).transaction(As,"readwrite"),l=o.objectStore(As),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&Wv(r,e.fid),e}async function Gv(r){const e=Lc(r),s=(await Ff()).transaction(As,"readwrite");await s.objectStore(As).delete(e),await s.done}async function Fc(r,e){const t=Lc(r),o=(await Ff()).transaction(As,"readwrite"),l=o.objectStore(As),h=await l.get(t),m=e(h);return m===void 0?await l.delete(t):await l.put(m,t),await o.done,m&&(!h||h.fid!==m.fid)&&Wv(r,m.fid),m}/**
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
 */async function Uf(r){let e;const t=await Fc(r.appConfig,s=>{const o=AR(s),l=RR(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===af?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function AR(r){const e=r||{fid:_R(),registrationStatus:0};return Qv(e)}function RR(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ss.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=kR(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CR(r)}:{installationEntry:e}}async function kR(r,e){try{const t=await mR(r,e);return _c(r.appConfig,t)}catch(t){throw Fv(t)&&t.customData.serverCode===409?await Gv(r.appConfig):await _c(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function CR(r){let e=await Ry(r.appConfig);for(;e.registrationStatus===1;)await qv(100),e=await Ry(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Uf(r);return s||t}return e}function Ry(r){return Fc(r,e=>{if(!e)throw Ss.create("installation-not-found");return Qv(e)})}function Qv(r){return PR(r)?{fid:r.fid,registrationStatus:0}:r}function PR(r){return r.registrationStatus===1&&r.registrationTime+Ov<Date.now()}/**
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
 */async function xR({appConfig:r,heartbeatServiceProvider:e},t){const s=NR(r,t),o=dR(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:Mv,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(h)},g=await $v(()=>fetch(s,m));if(g.ok){const _=await g.json();return jv(_)}else throw await Bv("Generate Auth Token",g)}function NR(r,{fid:e}){return`${Uv(r)}/${e}/authTokens:generate`}/**
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
 */async function jf(r,e=!1){let t;const s=await Fc(r.appConfig,l=>{if(!Yv(l))throw Ss.create("not-registered");const h=l.authToken;if(!e&&bR(h))return l;if(h.requestStatus===1)return t=DR(r,e),l;{if(!navigator.onLine)throw Ss.create("app-offline");const m=MR(l);return t=VR(r,m),m}});return t?await t:s.authToken}async function DR(r,e){let t=await ky(r.appConfig);for(;t.authToken.requestStatus===1;)await qv(100),t=await ky(r.appConfig);const s=t.authToken;return s.requestStatus===0?jf(r,e):s}function ky(r){return Fc(r,e=>{if(!Yv(e))throw Ss.create("not-registered");const t=e.authToken;return LR(t)?{...e,authToken:{requestStatus:0}}:e})}async function VR(r,e){try{const t=await xR(r,e),s={...e,authToken:t};return await _c(r.appConfig,s),t}catch(t){if(Fv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Gv(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await _c(r.appConfig,s)}throw t}}function Yv(r){return r!==void 0&&r.registrationStatus===2}function bR(r){return r.requestStatus===2&&!OR(r)}function OR(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+lR}function MR(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function LR(r){return r.requestStatus===1&&r.requestTime+Ov<Date.now()}/**
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
 */async function FR(r){const e=r,{installationEntry:t,registrationPromise:s}=await Uf(e);return s?s.catch(console.error):jf(e).catch(console.error),t.fid}/**
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
 */async function UR(r,e=!1){const t=r;return await jR(t),(await jf(t,e)).token}async function jR(r){const{registrationPromise:e}=await Uf(r);e&&await e}/**
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
 */function BR(r){if(!r||!r.options)throw zd("App Configuration");if(!r.name)throw zd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw zd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function zd(r){return Ss.create("missing-app-config-values",{valueName:r})}/**
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
 */const Jv="installations",zR="installations-internal",$R=r=>{const e=r.getProvider("app").getImmediate(),t=BR(e),s=jo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},qR=r=>{const e=r.getProvider("app").getImmediate(),t=jo(e,Jv).getImmediate();return{getId:()=>FR(t),getToken:o=>UR(t,o)}};function HR(){fr(new jn(Jv,$R,"PUBLIC")),fr(new jn(zR,qR,"PRIVATE"))}HR();Rn(bv,Lf);Rn(bv,Lf,"esm2020");/**
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
 */const WR="/firebase-messaging-sw.js",KR="/firebase-cloud-messaging-push-scope",Xv="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",GR="https://fcmregistrations.googleapis.com/v1",Zv="google.c.a.c_id",QR="google.c.a.c_l",YR="google.c.a.ts",JR="google.c.a.e",Cy=1e4;var Py;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Py||(Py={}));/**
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
 */var ol;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(ol||(ol={}));/**
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
 */function br(r){const e=new Uint8Array(r);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function XR(r){const e="=".repeat((4-r.length%4)%4),t=(r+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(t),o=new Uint8Array(s.length);for(let l=0;l<s.length;++l)o[l]=s.charCodeAt(l);return o}/**
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
 */const $d="fcm_token_details_db",ZR=5,xy="fcm_token_object_Store";async function ek(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes($d))return null;let e=null;return(await Vc($d,ZR,{upgrade:async(s,o,l,h)=>{if(o<2||!s.objectStoreNames.contains(xy))return;const m=h.objectStore(xy),g=await m.index("fcmSenderId").get(r);if(await m.clear(),!!g){if(o===2){const _=g;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:_.createTime??Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:br(_.vapidKey)}}}else if(o===3){const _=g;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:br(_.auth),p256dh:br(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:br(_.vapidKey)}}}else if(o===4){const _=g;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:br(_.auth),p256dh:br(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:br(_.vapidKey)}}}}}})).close(),await Md($d),await Md("fcm_vapid_details_db"),await Md("undefined"),tk(e)?e:null}function tk(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:e}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const nk="firebase-messaging-database",rk=1,al="firebase-messaging-store";let qd=null;function ew(){return qd||(qd=Vc(nk,rk,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(al)}}})),qd}async function ik(r){const e=tw(r),s=await(await ew()).transaction(al).objectStore(al).get(e);if(s)return s;{const o=await ek(r.appConfig.senderId);if(o)return await Bf(r,o),o}}async function Bf(r,e){const t=tw(r),o=(await ew()).transaction(al,"readwrite");return await o.objectStore(al).put(e,t),await o.done,e}function tw({appConfig:r}){return r.appId}/**
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
 */const sk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},$t=new xs("messaging","Messaging",sk);/**
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
 */async function ok(r,e){const t=await $f(r),s=nw(e),o={method:"POST",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(zf(r.appConfig),o)).json()}catch(h){throw $t.create("token-subscribe-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw $t.create("token-subscribe-failed",{errorInfo:h})}if(!l.token)throw $t.create("token-subscribe-no-token");return l.token}async function ak(r,e){const t=await $f(r),s=nw(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(`${zf(r.appConfig)}/${e.token}`,o)).json()}catch(h){throw $t.create("token-update-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw $t.create("token-update-failed",{errorInfo:h})}if(!l.token)throw $t.create("token-update-no-token");return l.token}async function lk(r,e){const s={method:"DELETE",headers:await $f(r)};try{const l=await(await fetch(`${zf(r.appConfig)}/${e}`,s)).json();if(l.error){const h=l.error.message;throw $t.create("token-unsubscribe-failed",{errorInfo:h})}}catch(o){throw $t.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function zf({projectId:r}){return`${GR}/projects/${r}/registrations`}async function $f({appConfig:r,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function nw({p256dh:r,auth:e,endpoint:t,vapidKey:s}){const o={web:{endpoint:t,auth:e,p256dh:r}};return s!==Xv&&(o.web.applicationPubKey=s),o}/**
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
 */const uk=10080*60*1e3;async function ck(r){const e=await dk(r.swRegistration,r.vapidKey),t={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:e.endpoint,auth:br(e.getKey("auth")),p256dh:br(e.getKey("p256dh"))},s=await ik(r.firebaseDependencies);if(s){if(fk(s.subscriptionOptions,t))return Date.now()>=s.createTime+uk?hk(r,{token:s.token,createTime:Date.now(),subscriptionOptions:t}):s.token;try{await lk(r.firebaseDependencies,s.token)}catch(o){console.warn(o)}return Ny(r.firebaseDependencies,t)}else return Ny(r.firebaseDependencies,t)}async function hk(r,e){try{const t=await ak(r.firebaseDependencies,e),s={...e,token:t,createTime:Date.now()};return await Bf(r.firebaseDependencies,s),t}catch(t){throw t}}async function Ny(r,e){const s={token:await ok(r,e),createTime:Date.now(),subscriptionOptions:e};return await Bf(r,s),s.token}async function dk(r,e){const t=await r.pushManager.getSubscription();return t||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:XR(e)})}function fk(r,e){const t=e.vapidKey===r.vapidKey,s=e.endpoint===r.endpoint,o=e.auth===r.auth,l=e.p256dh===r.p256dh;return t&&s&&o&&l}/**
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
 */function Dy(r){const e={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return pk(e,r),mk(e,r),gk(e,r),e}function pk(r,e){if(!e.notification)return;r.notification={};const t=e.notification.title;t&&(r.notification.title=t);const s=e.notification.body;s&&(r.notification.body=s);const o=e.notification.image;o&&(r.notification.image=o);const l=e.notification.icon;l&&(r.notification.icon=l)}function mk(r,e){e.data&&(r.data=e.data)}function gk(r,e){var o,l,h,m;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;r.fcmOptions={};const t=((l=e.fcmOptions)==null?void 0:l.link)??((h=e.notification)==null?void 0:h.click_action);t&&(r.fcmOptions.link=t);const s=(m=e.fcmOptions)==null?void 0:m.analytics_label;s&&(r.fcmOptions.analyticsLabel=s)}/**
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
 */function yk(r){return typeof r=="object"&&!!r&&Zv in r}/**
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
 */function _k(r){if(!r||!r.options)throw Hd("App Configuration Object");if(!r.name)throw Hd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=r;for(const s of e)if(!t[s])throw Hd(s);return{appName:r.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Hd(r){return $t.create("missing-app-config-values",{valueName:r})}/**
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
 */class vk{constructor(e,t,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=_k(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function wk(r){try{r.swRegistration=await navigator.serviceWorker.register(WR,{scope:KR}),r.swRegistration.update().catch(()=>{}),await Ek(r.swRegistration)}catch(e){throw $t.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function Ek(r){return new Promise((e,t)=>{const s=setTimeout(()=>t(new Error(`Service worker not registered after ${Cy} ms`)),Cy),o=r.installing||r.waiting;r.active?(clearTimeout(s),e()):o?o.onstatechange=l=>{var h;((h=l.target)==null?void 0:h.state)==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),t(new Error("No incoming service worker found.")))})}/**
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
 */async function Tk(r,e){if(!e&&!r.swRegistration&&await wk(r),!(!e&&r.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw $t.create("invalid-sw-registration");r.swRegistration=e}}/**
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
 */async function Ik(r,e){e?r.vapidKey=e:r.vapidKey||(r.vapidKey=Xv)}/**
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
 */async function rw(r,e){if(!navigator)throw $t.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw $t.create("permission-blocked");return await Ik(r,e==null?void 0:e.vapidKey),await Tk(r,e==null?void 0:e.serviceWorkerRegistration),ck(r)}/**
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
 */async function Sk(r,e,t){const s=Ak(e);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:t[Zv],message_name:t[QR],message_time:t[YR],message_device_time:Math.floor(Date.now()/1e3)})}function Ak(r){switch(r){case ol.NOTIFICATION_CLICKED:return"notification_open";case ol.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Rk(r,e){const t=e.data;if(!t.isFirebaseMessaging)return;r.onMessageHandler&&t.messageType===ol.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(Dy(t)):r.onMessageHandler.next(Dy(t)));const s=t.data;yk(s)&&s[JR]==="1"&&await Sk(r,t.messageType,s)}const Vy="@firebase/messaging",by="0.12.25";/**
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
 */const kk=r=>{const e=new vk(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>Rk(e,t)),e},Ck=r=>{const e=r.getProvider("messaging").getImmediate();return{getToken:s=>rw(e,s)}};function Pk(){fr(new jn("messaging",kk,"PUBLIC")),fr(new jn("messaging-internal",Ck,"PRIVATE")),Rn(Vy,by),Rn(Vy,by,"esm2020")}/**
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
 */async function xk(){try{await K_()}catch{return!1}return typeof window<"u"&&W_()&&xT()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Nk(r,e){if(!navigator)throw $t.create("only-available-in-window");return r.onMessageHandler=e,()=>{r.onMessageHandler=null}}/**
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
 */function Dk(r=Cf()){return xk().then(e=>{if(!e)throw $t.create("unsupported-browser")},e=>{throw $t.create("indexed-db-unsupported")}),jo(ot(r),"messaging").getImmediate()}async function Vk(r,e){return r=ot(r),rw(r,e)}function bk(r,e){return r=ot(r),Nk(r,e)}Pk();var Oy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xi,iw;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function T(){}T.prototype=R.prototype,D.F=R.prototype,D.prototype=new T,D.prototype.constructor=D,D.D=function(C,S,V){for(var I=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)I[Te-2]=arguments[Te];return R.prototype[S].apply(C,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,R,T){T||(T=0);const C=Array(16);if(typeof R=="string")for(var S=0;S<16;++S)C[S]=R.charCodeAt(T++)|R.charCodeAt(T++)<<8|R.charCodeAt(T++)<<16|R.charCodeAt(T++)<<24;else for(S=0;S<16;++S)C[S]=R[T++]|R[T++]<<8|R[T++]<<16|R[T++]<<24;R=D.g[0],T=D.g[1],S=D.g[2];let V=D.g[3],I;I=R+(V^T&(S^V))+C[0]+3614090360&4294967295,R=T+(I<<7&4294967295|I>>>25),I=V+(S^R&(T^S))+C[1]+3905402710&4294967295,V=R+(I<<12&4294967295|I>>>20),I=S+(T^V&(R^T))+C[2]+606105819&4294967295,S=V+(I<<17&4294967295|I>>>15),I=T+(R^S&(V^R))+C[3]+3250441966&4294967295,T=S+(I<<22&4294967295|I>>>10),I=R+(V^T&(S^V))+C[4]+4118548399&4294967295,R=T+(I<<7&4294967295|I>>>25),I=V+(S^R&(T^S))+C[5]+1200080426&4294967295,V=R+(I<<12&4294967295|I>>>20),I=S+(T^V&(R^T))+C[6]+2821735955&4294967295,S=V+(I<<17&4294967295|I>>>15),I=T+(R^S&(V^R))+C[7]+4249261313&4294967295,T=S+(I<<22&4294967295|I>>>10),I=R+(V^T&(S^V))+C[8]+1770035416&4294967295,R=T+(I<<7&4294967295|I>>>25),I=V+(S^R&(T^S))+C[9]+2336552879&4294967295,V=R+(I<<12&4294967295|I>>>20),I=S+(T^V&(R^T))+C[10]+4294925233&4294967295,S=V+(I<<17&4294967295|I>>>15),I=T+(R^S&(V^R))+C[11]+2304563134&4294967295,T=S+(I<<22&4294967295|I>>>10),I=R+(V^T&(S^V))+C[12]+1804603682&4294967295,R=T+(I<<7&4294967295|I>>>25),I=V+(S^R&(T^S))+C[13]+4254626195&4294967295,V=R+(I<<12&4294967295|I>>>20),I=S+(T^V&(R^T))+C[14]+2792965006&4294967295,S=V+(I<<17&4294967295|I>>>15),I=T+(R^S&(V^R))+C[15]+1236535329&4294967295,T=S+(I<<22&4294967295|I>>>10),I=R+(S^V&(T^S))+C[1]+4129170786&4294967295,R=T+(I<<5&4294967295|I>>>27),I=V+(T^S&(R^T))+C[6]+3225465664&4294967295,V=R+(I<<9&4294967295|I>>>23),I=S+(R^T&(V^R))+C[11]+643717713&4294967295,S=V+(I<<14&4294967295|I>>>18),I=T+(V^R&(S^V))+C[0]+3921069994&4294967295,T=S+(I<<20&4294967295|I>>>12),I=R+(S^V&(T^S))+C[5]+3593408605&4294967295,R=T+(I<<5&4294967295|I>>>27),I=V+(T^S&(R^T))+C[10]+38016083&4294967295,V=R+(I<<9&4294967295|I>>>23),I=S+(R^T&(V^R))+C[15]+3634488961&4294967295,S=V+(I<<14&4294967295|I>>>18),I=T+(V^R&(S^V))+C[4]+3889429448&4294967295,T=S+(I<<20&4294967295|I>>>12),I=R+(S^V&(T^S))+C[9]+568446438&4294967295,R=T+(I<<5&4294967295|I>>>27),I=V+(T^S&(R^T))+C[14]+3275163606&4294967295,V=R+(I<<9&4294967295|I>>>23),I=S+(R^T&(V^R))+C[3]+4107603335&4294967295,S=V+(I<<14&4294967295|I>>>18),I=T+(V^R&(S^V))+C[8]+1163531501&4294967295,T=S+(I<<20&4294967295|I>>>12),I=R+(S^V&(T^S))+C[13]+2850285829&4294967295,R=T+(I<<5&4294967295|I>>>27),I=V+(T^S&(R^T))+C[2]+4243563512&4294967295,V=R+(I<<9&4294967295|I>>>23),I=S+(R^T&(V^R))+C[7]+1735328473&4294967295,S=V+(I<<14&4294967295|I>>>18),I=T+(V^R&(S^V))+C[12]+2368359562&4294967295,T=S+(I<<20&4294967295|I>>>12),I=R+(T^S^V)+C[5]+4294588738&4294967295,R=T+(I<<4&4294967295|I>>>28),I=V+(R^T^S)+C[8]+2272392833&4294967295,V=R+(I<<11&4294967295|I>>>21),I=S+(V^R^T)+C[11]+1839030562&4294967295,S=V+(I<<16&4294967295|I>>>16),I=T+(S^V^R)+C[14]+4259657740&4294967295,T=S+(I<<23&4294967295|I>>>9),I=R+(T^S^V)+C[1]+2763975236&4294967295,R=T+(I<<4&4294967295|I>>>28),I=V+(R^T^S)+C[4]+1272893353&4294967295,V=R+(I<<11&4294967295|I>>>21),I=S+(V^R^T)+C[7]+4139469664&4294967295,S=V+(I<<16&4294967295|I>>>16),I=T+(S^V^R)+C[10]+3200236656&4294967295,T=S+(I<<23&4294967295|I>>>9),I=R+(T^S^V)+C[13]+681279174&4294967295,R=T+(I<<4&4294967295|I>>>28),I=V+(R^T^S)+C[0]+3936430074&4294967295,V=R+(I<<11&4294967295|I>>>21),I=S+(V^R^T)+C[3]+3572445317&4294967295,S=V+(I<<16&4294967295|I>>>16),I=T+(S^V^R)+C[6]+76029189&4294967295,T=S+(I<<23&4294967295|I>>>9),I=R+(T^S^V)+C[9]+3654602809&4294967295,R=T+(I<<4&4294967295|I>>>28),I=V+(R^T^S)+C[12]+3873151461&4294967295,V=R+(I<<11&4294967295|I>>>21),I=S+(V^R^T)+C[15]+530742520&4294967295,S=V+(I<<16&4294967295|I>>>16),I=T+(S^V^R)+C[2]+3299628645&4294967295,T=S+(I<<23&4294967295|I>>>9),I=R+(S^(T|~V))+C[0]+4096336452&4294967295,R=T+(I<<6&4294967295|I>>>26),I=V+(T^(R|~S))+C[7]+1126891415&4294967295,V=R+(I<<10&4294967295|I>>>22),I=S+(R^(V|~T))+C[14]+2878612391&4294967295,S=V+(I<<15&4294967295|I>>>17),I=T+(V^(S|~R))+C[5]+4237533241&4294967295,T=S+(I<<21&4294967295|I>>>11),I=R+(S^(T|~V))+C[12]+1700485571&4294967295,R=T+(I<<6&4294967295|I>>>26),I=V+(T^(R|~S))+C[3]+2399980690&4294967295,V=R+(I<<10&4294967295|I>>>22),I=S+(R^(V|~T))+C[10]+4293915773&4294967295,S=V+(I<<15&4294967295|I>>>17),I=T+(V^(S|~R))+C[1]+2240044497&4294967295,T=S+(I<<21&4294967295|I>>>11),I=R+(S^(T|~V))+C[8]+1873313359&4294967295,R=T+(I<<6&4294967295|I>>>26),I=V+(T^(R|~S))+C[15]+4264355552&4294967295,V=R+(I<<10&4294967295|I>>>22),I=S+(R^(V|~T))+C[6]+2734768916&4294967295,S=V+(I<<15&4294967295|I>>>17),I=T+(V^(S|~R))+C[13]+1309151649&4294967295,T=S+(I<<21&4294967295|I>>>11),I=R+(S^(T|~V))+C[4]+4149444226&4294967295,R=T+(I<<6&4294967295|I>>>26),I=V+(T^(R|~S))+C[11]+3174756917&4294967295,V=R+(I<<10&4294967295|I>>>22),I=S+(R^(V|~T))+C[2]+718787259&4294967295,S=V+(I<<15&4294967295|I>>>17),I=T+(V^(S|~R))+C[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,D.g[2]=D.g[2]+S&4294967295,D.g[3]=D.g[3]+V&4294967295}s.prototype.v=function(D,R){R===void 0&&(R=D.length);const T=R-this.blockSize,C=this.C;let S=this.h,V=0;for(;V<R;){if(S==0)for(;V<=T;)o(this,D,V),V+=this.blockSize;if(typeof D=="string"){for(;V<R;)if(C[S++]=D.charCodeAt(V++),S==this.blockSize){o(this,C),S=0;break}}else for(;V<R;)if(C[S++]=D[V++],S==this.blockSize){o(this,C),S=0;break}}this.h=S,this.o+=R},s.prototype.A=function(){var D=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;R=this.o*8;for(var T=D.length-8;T<D.length;++T)D[T]=R&255,R/=256;for(this.v(D),D=Array(16),R=0,T=0;T<4;++T)for(let C=0;C<32;C+=8)D[R++]=this.g[T]>>>C&255;return D};function l(D,R){var T=m;return Object.prototype.hasOwnProperty.call(T,D)?T[D]:T[D]=R(D)}function h(D,R){this.h=R;const T=[];let C=!0;for(let S=D.length-1;S>=0;S--){const V=D[S]|0;C&&V==R||(T[S]=V,C=!1)}this.g=T}var m={};function g(D){return-128<=D&&D<128?l(D,function(R){return new h([R|0],R<0?-1:0)}):new h([D|0],D<0?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return k;if(D<0)return Q(_(-D));const R=[];let T=1;for(let C=0;D>=T;C++)R[C]=D/T|0,T*=4294967296;return new h(R,0)}function E(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return Q(E(D.substring(1),R));if(D.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=_(Math.pow(R,8));let C=k;for(let V=0;V<D.length;V+=8){var S=Math.min(8,D.length-V);const I=parseInt(D.substring(V,V+S),R);S<8?(S=_(Math.pow(R,S)),C=C.j(S).add(_(I))):(C=C.j(T),C=C.add(_(I)))}return C}var k=g(0),b=g(1),B=g(16777216);r=h.prototype,r.m=function(){if(X(this))return-Q(this).m();let D=0,R=1;for(let T=0;T<this.g.length;T++){const C=this.i(T);D+=(C>=0?C:4294967296+C)*R,R*=4294967296}return D},r.toString=function(D){if(D=D||10,D<2||36<D)throw Error("radix out of range: "+D);if(J(this))return"0";if(X(this))return"-"+Q(this).toString(D);const R=_(Math.pow(D,6));var T=this;let C="";for(;;){const S=be(T,R).g;T=me(T,S.j(R));let V=((T.g.length>0?T.g[0]:T.h)>>>0).toString(D);if(T=S,J(T))return V+C;for(;V.length<6;)V="0"+V;C=V+C}},r.i=function(D){return D<0?0:D<this.g.length?this.g[D]:this.h};function J(D){if(D.h!=0)return!1;for(let R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function X(D){return D.h==-1}r.l=function(D){return D=me(this,D),X(D)?-1:J(D)?0:1};function Q(D){const R=D.g.length,T=[];for(let C=0;C<R;C++)T[C]=~D.g[C];return new h(T,~D.h).add(b)}r.abs=function(){return X(this)?Q(this):this},r.add=function(D){const R=Math.max(this.g.length,D.g.length),T=[];let C=0;for(let S=0;S<=R;S++){let V=C+(this.i(S)&65535)+(D.i(S)&65535),I=(V>>>16)+(this.i(S)>>>16)+(D.i(S)>>>16);C=I>>>16,V&=65535,I&=65535,T[S]=I<<16|V}return new h(T,T[T.length-1]&-2147483648?-1:0)};function me(D,R){return D.add(Q(R))}r.j=function(D){if(J(this)||J(D))return k;if(X(this))return X(D)?Q(this).j(Q(D)):Q(Q(this).j(D));if(X(D))return Q(this.j(Q(D)));if(this.l(B)<0&&D.l(B)<0)return _(this.m()*D.m());const R=this.g.length+D.g.length,T=[];for(var C=0;C<2*R;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(let S=0;S<D.g.length;S++){const V=this.i(C)>>>16,I=this.i(C)&65535,Te=D.i(S)>>>16,nt=D.i(S)&65535;T[2*C+2*S]+=I*nt,ge(T,2*C+2*S),T[2*C+2*S+1]+=V*nt,ge(T,2*C+2*S+1),T[2*C+2*S+1]+=I*Te,ge(T,2*C+2*S+1),T[2*C+2*S+2]+=V*Te,ge(T,2*C+2*S+2)}for(D=0;D<R;D++)T[D]=T[2*D+1]<<16|T[2*D];for(D=R;D<2*R;D++)T[D]=0;return new h(T,0)};function ge(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function Ee(D,R){this.g=D,this.h=R}function be(D,R){if(J(R))throw Error("division by zero");if(J(D))return new Ee(k,k);if(X(D))return R=be(Q(D),R),new Ee(Q(R.g),Q(R.h));if(X(R))return R=be(D,Q(R)),new Ee(Q(R.g),R.h);if(D.g.length>30){if(X(D)||X(R))throw Error("slowDivide_ only works with positive integers.");for(var T=b,C=R;C.l(D)<=0;)T=Me(T),C=Me(C);var S=xe(T,1),V=xe(C,1);for(C=xe(C,2),T=xe(T,2);!J(C);){var I=V.add(C);I.l(D)<=0&&(S=S.add(T),V=I),C=xe(C,1),T=xe(T,1)}return R=me(D,S.j(R)),new Ee(S,R)}for(S=k;D.l(R)>=0;){for(T=Math.max(1,Math.floor(D.m()/R.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),V=_(T),I=V.j(R);X(I)||I.l(D)>0;)T-=C,V=_(T),I=V.j(R);J(V)&&(V=b),S=S.add(V),D=me(D,I)}return new Ee(S,D)}r.B=function(D){return be(this,D).h},r.and=function(D){const R=Math.max(this.g.length,D.g.length),T=[];for(let C=0;C<R;C++)T[C]=this.i(C)&D.i(C);return new h(T,this.h&D.h)},r.or=function(D){const R=Math.max(this.g.length,D.g.length),T=[];for(let C=0;C<R;C++)T[C]=this.i(C)|D.i(C);return new h(T,this.h|D.h)},r.xor=function(D){const R=Math.max(this.g.length,D.g.length),T=[];for(let C=0;C<R;C++)T[C]=this.i(C)^D.i(C);return new h(T,this.h^D.h)};function Me(D){const R=D.g.length+1,T=[];for(let C=0;C<R;C++)T[C]=D.i(C)<<1|D.i(C-1)>>>31;return new h(T,D.h)}function xe(D,R){const T=R>>5;R%=32;const C=D.g.length-T,S=[];for(let V=0;V<C;V++)S[V]=R>0?D.i(V+T)>>>R|D.i(V+T+1)<<32-R:D.i(V+T);return new h(S,D.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,iw=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,xi=h}).apply(typeof Oy<"u"?Oy:typeof self<"u"?self:typeof window<"u"?window:{});var qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sw,Ga,ow,rc,lf,aw,lw,uw;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof qu=="object"&&qu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in y))break e;y=y[L]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(p){var y=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&y.push([w,p[w]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function m(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function g(u,p,y){return u.call.apply(u.bind,arguments)}function _(u,p,y){return _=g,_.apply(null,arguments)}function E(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function k(u,p){function y(){}y.prototype=p.prototype,u.Z=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Ob=function(w,L,j){for(var Z=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)Z[_e-2]=arguments[_e];return p.prototype[L].apply(w,Z)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function B(u){const p=u.length;if(p>0){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function J(u,p){for(let w=1;w<arguments.length;w++){const L=arguments[w];var y=typeof L;if(y=y!="object"?y:L?Array.isArray(L)?"array":y:"null",y=="array"||y=="object"&&typeof L.length=="number"){y=u.length||0;const j=L.length||0;u.length=y+j;for(let Z=0;Z<j;Z++)u[y+Z]=L[Z]}else u.push(L)}}class X{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function Q(u){h.setTimeout(()=>{throw u},0)}function me(){var u=D;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ge{constructor(){this.h=this.g=null}add(p,y){const w=Ee.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Ee=new X(()=>new be,u=>u.reset());class be{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,xe=!1,D=new ge,R=()=>{const u=Promise.resolve(void 0);Me=()=>{u.then(T)}};function T(){for(var u;u=me();){try{u.h.call(u.g)}catch(y){Q(y)}var p=Ee;p.j(u),p.h<100&&(p.h++,u.next=p.g,p.g=u)}xe=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return u})();function I(u){return/^[\s\xa0]*$/.test(u)}function Te(u,p){S.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,p)}k(Te,S),Te.prototype.init=function(u,p){const y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget,p||(y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var nt="closure_listenable_"+(Math.random()*1e6|0),Et=0;function ze(u,p,y,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++Et,this.da=this.fa=!1}function G(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ne(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function P(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function q(u){const p={};for(const y in u)p[y]=u[y];return p}const le="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ie(u,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)u[y]=w[y];for(let j=0;j<le.length;j++)y=le[j],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function we(u){this.src=u,this.g={},this.h=0}we.prototype.add=function(u,p,y,w,L){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const Z=Ce(u,p,w,L);return Z>-1?(p=u[Z],y||(p.fa=!1)):(p=new ze(p,this.src,j,!!w,L),p.fa=y,u.push(p)),p};function Ue(u,p){const y=p.type;if(y in u.g){var w=u.g[y],L=Array.prototype.indexOf.call(w,p,void 0),j;(j=L>=0)&&Array.prototype.splice.call(w,L,1),j&&(G(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Ce(u,p,y,w){for(let L=0;L<u.length;++L){const j=u[L];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==w)return L}return-1}var Le="closure_lm_"+(Math.random()*1e6|0),Ne={};function Rt(u,p,y,w,L){if(Array.isArray(p)){for(let j=0;j<p.length;j++)Rt(u,p[j],y,w,L);return null}return y=Qo(y),u&&u[nt]?u.J(p,y,m(w)?!!w.capture:!1,L):ih(u,p,y,!1,w,L)}function ih(u,p,y,w,L,j){if(!p)throw Error("Invalid event type");const Z=m(L)?!!L.capture:!!L;let _e=Ms(u);if(_e||(u[Le]=_e=new we(u)),y=_e.add(p,y,w,Z,j),y.proxy)return y;if(w=bs(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)V||(L=Z),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(Os(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function bs(){function u(y){return p.call(u.src,u.listener,y)}const p=kl;return u}function Go(u,p,y,w,L){if(Array.isArray(p))for(var j=0;j<p.length;j++)Go(u,p[j],y,w,L);else w=m(w)?!!w.capture:!!w,y=Qo(y),u&&u[nt]?(u=u.i,j=String(p).toString(),j in u.g&&(p=u.g[j],y=Ce(p,y,w,L),y>-1&&(G(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete u.g[j],u.h--)))):u&&(u=Ms(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Ce(p,y,w,L)),(y=u>-1?p[u]:null)&&Wr(y))}function Wr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[nt])Ue(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(Os(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=Ms(p))?(Ue(y,u),y.h==0&&(y.src=null,p[Le]=null)):G(u)}}}function Os(u){return u in Ne?Ne[u]:Ne[u]="on"+u}function kl(u,p){if(u.da)u=!0;else{p=new Te(p,this);const y=u.listener,w=u.ha||u.src;u.fa&&Wr(u),u=y.call(w,p)}return u}function Ms(u){return u=u[Le],u instanceof we?u:null}var zi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qo(u){return typeof u=="function"?u:(u[zi]||(u[zi]=function(p){return u.handleEvent(p)}),u[zi])}function ht(){C.call(this),this.i=new we(this),this.M=this,this.G=null}k(ht,C),ht.prototype[nt]=!0,ht.prototype.removeEventListener=function(u,p,y,w){Go(this,u,p,y,w)};function at(u,p){var y,w=u.G;if(w)for(y=[];w;w=w.G)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new S(p,u);else if(p instanceof S)p.target=p.target||u;else{var L=p;p=new S(w,u),Ie(p,L)}L=!0;let j,Z;if(y)for(Z=y.length-1;Z>=0;Z--)j=p.g=y[Z],L=Cn(j,w,!0,p)&&L;if(j=p.g=u,L=Cn(j,w,!0,p)&&L,L=Cn(j,w,!1,p)&&L,y)for(Z=0;Z<y.length;Z++)j=p.g=y[Z],L=Cn(j,w,!1,p)&&L}ht.prototype.N=function(){if(ht.Z.N.call(this),this.i){var u=this.i;for(const p in u.g){const y=u.g[p];for(let w=0;w<y.length;w++)G(y[w]);delete u.g[p],u.h--}}this.G=null},ht.prototype.J=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},ht.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function Cn(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let j=0;j<p.length;++j){const Z=p[j];if(Z&&!Z.da&&Z.capture==y){const _e=Z.listener,lt=Z.ha||Z.src;Z.fa&&Ue(u.i,Z),L=_e.call(lt,w)!==!1&&L}}return L&&!w.defaultPrevented}function Yo(u,p){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(u,p||0)}function Jo(u){u.g=Yo(()=>{u.g=null,u.i&&(u.i=!1,Jo(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Cl extends C{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Jo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kr(u){C.call(this),this.h=u,this.g={}}k(Kr,C);var Xo=[];function Ls(u){ne(u.g,function(p,y){this.g.hasOwnProperty(y)&&Wr(p)},u),u.g={}}Kr.prototype.N=function(){Kr.Z.N.call(this),Ls(this)},Kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gr=h.JSON.stringify,Pl=h.JSON.parse,$i=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Qr(){}function xl(){}var Yr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fs(){S.call(this,"d")}k(Fs,S);function Zo(){S.call(this,"c")}k(Zo,S);var Pn={},Us=null;function Jr(){return Us=Us||new ht}Pn.Ia="serverreachability";function js(u){S.call(this,Pn.Ia,u)}k(js,S);function gr(u){const p=Jr();at(p,new js(p))}Pn.STAT_EVENT="statevent";function yr(u,p){S.call(this,Pn.STAT_EVENT,u),this.stat=p}k(yr,S);function rt(u){const p=Jr();at(p,new yr(p,u))}Pn.Ja="timingevent";function ea(u,p){S.call(this,Pn.Ja,u),this.size=p}k(ea,S);function Xr(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},p)}function Zr(){this.g=!0}Zr.prototype.ua=function(){this.g=!1};function Nl(u,p,y,w,L,j){u.info(function(){if(u.g)if(j){var Z="",_e=j.split("&");for(let Be=0;Be<_e.length;Be++){var lt=_e[Be].split("=");if(lt.length>1){const dt=lt[0];lt=lt[1];const ln=dt.split("_");Z=ln.length>=2&&ln[1]=="type"?Z+(dt+"="+lt+"&"):Z+(dt+"=redacted&")}}}else Z=null;else Z=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+Z})}function Dl(u,p,y,w,L,j,Z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+j+" "+Z})}function $n(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+qi(u,y)+(w?" "+w:"")})}function Vl(u,p){u.info(function(){return"TIMEOUT: "+p})}Zr.prototype.info=function(){};function qi(u,p){if(!u.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var y=j[u];if(!(y.length<2)){var w=y[1];if(Array.isArray(w)&&!(w.length<1)){var L=w[0];if(L!="noop"&&L!="stop"&&L!="close")for(let Z=1;Z<w.length;Z++)w[Z]=""}}}}return Gr(j)}catch{return p}}var ei={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ti={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},bl;function _r(){}k(_r,Qr),_r.prototype.g=function(){return new XMLHttpRequest},bl=new _r;function qn(u){return encodeURIComponent(String(u))}function Bs(u){var p=1;u=u.split(":");const y=[];for(;p>0&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function mn(u,p,y,w){this.j=u,this.i=p,this.l=y,this.S=w||1,this.V=new Kr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ol}function Ol(){this.i=null,this.g="",this.h=!1}var Ml={},ta={};function xn(u,p,y){u.M=1,u.A=wr(gn(p)),u.u=y,u.R=!0,na(u,null)}function na(u,p){u.F=Date.now(),Hi(u),u.B=gn(u.A);var y=u.B,w=u.S;Array.isArray(w)||(w=[String(w)]),da(y.i,"t",w),u.C=0,y=u.j.L,u.h=new Ol,u.g=Wl(u.j,y?p:null,!u.u),u.P>0&&(u.O=new Cl(_(u.Y,u,u.g),u.P)),p=u.V,y=u.g,w=u.ba;var L="readystatechange";Array.isArray(L)||(L&&(Xo[0]=L.toString()),L=Xo);for(let j=0;j<L.length;j++){const Z=Rt(y,L[j],w||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.J?q(u.J):{},u.u?(u.v||(u.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,p)):(u.v="GET",u.g.ea(u.B,u.v,null,p)),gr(),Nl(u.i,u.v,u.B,u.l,u.S,u.u)}mn.prototype.ba=function(u){u=u.target;const p=this.O;p&&Jn(u)==3?p.j():this.Y(u)},mn.prototype.Y=function(u){try{if(u==this.g)e:{const _e=Jn(this.g),lt=this.g.ya(),Be=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||ql(this.g)))){this.K||_e!=4||lt==7||(lt==8||Be<=0?gr(3):gr(2)),zs(this);var p=this.g.ca();this.X=p;var y=Ll(this);if(this.o=p==200,Dl(this.i,this.v,this.B,this.l,this.S,_e,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,L=this.g;if((w=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(w)){var j=w;break t}}j=null}if(u=j)$n(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,u);else{this.o=!1,this.m=3,rt(12),vr(this),Wi(this);break e}}if(this.R){u=!0;let dt;for(;!this.K&&this.C<y.length;)if(dt=Ul(this,y),dt==ta){_e==4&&(this.m=4,rt(14),u=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==Ml){this.m=4,rt(15),$n(this.i,this.l,y,"[Invalid Chunk]"),u=!1;break}else $n(this.i,this.l,dt,null),Ke(this,dt);if(Fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||y.length!=0||this.h.h||(this.m=1,rt(16),u=!1),this.o=this.o&&u,!u)$n(this.i,this.l,y,"[Invalid Chunked Response]"),vr(this),Wi(this);else if(y.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),ts(Z),Z.P=!0,rt(11))}}else $n(this.i,this.l,y,null),Ke(this,y);_e==4&&vr(this),this.o&&!this.K&&(_e==4?Xs(this.j,this):(this.o=!1,Hi(this)))}else pa(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),vr(this),Wi(this)}}}catch{}finally{}};function Ll(u){if(!Fl(u))return u.g.la();const p=ql(u.g);if(p==="")return"";let y="";const w=p.length,L=Jn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return vr(u),Wi(u),"";u.h.i=new h.TextDecoder}for(let j=0;j<w;j++)u.h.h=!0,y+=u.h.i.decode(p[j],{stream:!(L&&j==w-1)});return p.length=0,u.h.g+=y,u.C=0,u.h.g}function Fl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Ul(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?ta:(y=Number(p.substring(y,w)),isNaN(y)?Ml:(w+=1,w+y>p.length?ta:(p=p.slice(w,w+y),u.C=w+y,p)))}mn.prototype.cancel=function(){this.K=!0,vr(this)};function Hi(u){u.T=Date.now()+u.H,ra(u,u.H)}function ra(u,p){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Xr(_(u.aa,u),p)}function zs(u){u.D&&(h.clearTimeout(u.D),u.D=null)}mn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Vl(this.i,this.B),this.M!=2&&(gr(),rt(17)),vr(this),this.m=2,Wi(this)):ra(this,this.T-u)};function Wi(u){u.j.I==0||u.K||Xs(u.j,u)}function vr(u){zs(u);var p=u.O;p&&typeof p.dispose=="function"&&p.dispose(),u.O=null,Ls(u.V),u.g&&(p=u.g,u.g=null,p.abort(),p.dispose())}function Ke(u,p){try{var y=u.j;if(y.I!=0&&(y.g==u||sa(y.h,u))){if(!u.L&&sa(y.h,u)&&y.I==3){try{var w=y.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<u.F)Js(y),on(y);else break e;er(y),rt(18)}}else y.xa=L[1],0<y.xa-y.K&&L[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Xr(_(y.Va,y),6e3));Ki(y.h)<=1&&y.ta&&(y.ta=void 0)}else an(y,11)}else if((u.L||y.g==u)&&Js(y),!I(p))for(L=y.Ba.g.parse(p),p=0;p<L.length;p++){let Be=L[p];const dt=Be[0];if(!(dt<=y.K))if(y.K=dt,Be=Be[1],y.I==2)if(Be[0]=="c"){y.M=Be[1],y.ba=Be[2];const ln=Be[3];ln!=null&&(y.ka=ln,y.j.info("VER="+y.ka));const Ar=Be[4];Ar!=null&&(y.za=Ar,y.j.info("SVER="+y.za));const tr=Be[5];tr!=null&&typeof tr=="number"&&tr>0&&(w=1.5*tr,y.O=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const nr=u.g;if(nr){const to=nr.g?nr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(to){var j=w.h;j.g||to.indexOf("spdy")==-1&&to.indexOf("quic")==-1&&to.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(qs(j,j.h),j.h=null))}if(w.G){const ya=nr.g?nr.g.getResponseHeader("X-HTTP-Session-Id"):null;ya&&(w.wa=ya,Fe(w.J,w.G,ya))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-u.F,y.j.info("Handshake RTT: "+y.T+"ms")),w=y;var Z=u;if(w.na=ga(w,w.L?w.ba:null,w.W),Z.L){Gi(w.h,Z);var _e=Z,lt=w.O;lt&&(_e.H=lt),_e.D&&(zs(_e),Hi(_e)),w.g=Z}else bt(w);y.i.length>0&&Sr(y)}else Be[0]!="stop"&&Be[0]!="close"||an(y,7);else y.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?an(y,7):Qs(y):Be[0]!="noop"&&y.l&&y.l.qa(Be),y.A=0)}}gr(4)}catch{}}var sh=class{constructor(u,p){this.g=u,this.map=p}};function $s(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ia(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ki(u){return u.h?1:u.g?u.g.size:0}function sa(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function qs(u,p){u.g?u.g.add(p):u.h=p}function Gi(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}$s.prototype.cancel=function(){if(this.i=nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function nn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.G);return p}return B(u.i)}var jl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rn(u,p){if(u){u=u.split("&");for(let y=0;y<u.length;y++){const w=u[y].indexOf("=");let L,j=null;w>=0?(L=u[y].substring(0,w),j=u[y].substring(w+1)):L=u[y],p(L,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Hn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;u instanceof Hn?(this.l=u.l,Qi(this,u.j),this.o=u.o,this.g=u.g,Wn(this,u.u),this.h=u.h,ni(this,fa(u.i)),this.m=u.m):u&&(p=String(u).match(jl))?(this.l=!1,Qi(this,p[1]||"",!0),this.o=Yi(p[2]||""),this.g=Yi(p[3]||"",!0),Wn(this,p[4]),this.h=Yi(p[5]||"",!0),ni(this,p[6]||"",!0),this.m=Yi(p[7]||"")):(this.l=!1,this.i=new Pe(null,this.l))}Hn.prototype.toString=function(){const u=[];var p=this.j;p&&u.push(Ji(p,aa,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Ji(p,aa,!0),"@"),u.push(qn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&u.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Ji(y,y.charAt(0)=="/"?Xi:la,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Ji(y,ua)),u.join("")},Hn.prototype.resolve=function(u){const p=gn(this);let y=!!u.j;y?Qi(p,u.j):y=!!u.o,y?p.o=u.o:y=!!u.g,y?p.g=u.g:y=u.u!=null;var w=u.h;if(y)Wn(p,u.u);else if(y=!!u.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var L=p.h.lastIndexOf("/");L!=-1&&(w=p.h.slice(0,L+1)+w)}if(L=w,L==".."||L==".")w="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){w=L.lastIndexOf("/",0)==0,L=L.split("/");const j=[];for(let Z=0;Z<L.length;){const _e=L[Z++];_e=="."?w&&Z==L.length&&j.push(""):_e==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),w&&Z==L.length&&j.push("")):(j.push(_e),w=!0)}w=j.join("/")}else w=L}return y?p.h=w:y=u.i.toString()!=="",y?ni(p,fa(u.i)):y=!!u.m,y&&(p.m=u.m),p};function gn(u){return new Hn(u)}function Qi(u,p,y){u.j=y?Yi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Wn(u,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);u.u=p}else u.u=null}function ni(u,p,y){p instanceof Pe?(u.i=p,Ws(u.i,u.l)):(y||(p=Ji(p,oh)),u.i=new Pe(p,u.l))}function Fe(u,p,y){u.i.set(p,y)}function wr(u){return Fe(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Yi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ji(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,oa),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function oa(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var aa=/[#\/\?@]/g,la=/[#\?:]/g,Xi=/[#\?]/g,oh=/[#\?@]/g,ua=/#/g;function Pe(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Kn(u){u.g||(u.g=new Map,u.h=0,u.i&&rn(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Pe.prototype,r.add=function(u,p){Kn(this),this.i=null,u=Gn(this,u);let y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function ca(u,p){Kn(u),p=Gn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Hs(u,p){return Kn(u),p=Gn(u,p),u.g.has(p)}r.forEach=function(u,p){Kn(this),this.g.forEach(function(y,w){y.forEach(function(L){u.call(p,L,w,this)},this)},this)};function ha(u,p){Kn(u);let y=[];if(typeof p=="string")Hs(u,p)&&(y=y.concat(u.g.get(Gn(u,p))));else for(u=Array.from(u.g.values()),p=0;p<u.length;p++)y=y.concat(u[p]);return y}r.set=function(u,p){return Kn(this),this.i=null,u=Gn(this,u),Hs(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=ha(this,u),u.length>0?String(u[0]):p):p};function da(u,p,y){ca(u,p),y.length>0&&(u.i=null,u.g.set(Gn(u,p),B(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var y=p[w];const L=qn(y);y=ha(this,y);for(let j=0;j<y.length;j++){let Z=L;y[j]!==""&&(Z+="="+qn(y[j])),u.push(Z)}}return this.i=u.join("&")};function fa(u){const p=new Pe;return p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),p}function Gn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Ws(u,p){p&&!u.j&&(Kn(u),u.i=null,u.g.forEach(function(y,w){const L=w.toLowerCase();w!=L&&(ca(this,w),da(this,L,y))},u)),u.j=p}function Qn(u,p){const y=new Zr;if(h.Image){const w=new Image;w.onload=E(kt,y,"TestLoadImage: loaded",!0,p,w),w.onerror=E(kt,y,"TestLoadImage: error",!1,p,w),w.onabort=E(kt,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(kt,y,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Yn(u,p){const y=new Zr,w=new AbortController,L=setTimeout(()=>{w.abort(),kt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?kt(y,"TestPingServer: ok",!0,p):kt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),kt(y,"TestPingServer: error",!1,p)})}function kt(u,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Zi(){this.g=new $i}function Er(u){this.i=u.Sb||null,this.h=u.ab||!1}k(Er,Qr),Er.prototype.g=function(){return new sn(this.i,this.h)};function sn(u,p){ht.call(this),this.H=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}k(sn,ht),r=sn.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=p,this.readyState=1,Nn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(p.body=u),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Bl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Bl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?ri(this):Nn(this),this.readyState==3&&Bl(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,ri(this))},r.Na=function(u){this.g&&(this.response=u,ri(this))},r.ga=function(){this.g&&ri(this)};function ri(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Nn(u)}r.setRequestHeader=function(u,p){this.A.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Nn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function zl(u){let p="";return ne(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Ks(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=zl(y),typeof u=="string"?y!=null&&qn(y):Fe(u,p,y))}function $e(u){ht.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}k($e,ht);var $l=/^https?$/i,ah=["POST","PUT"];r=$e.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():bl.g(),this.g.onreadystatechange=b(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(j){ii(this,j);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())y.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),L=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(ah,p,void 0)>=0)||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of y)this.g.setRequestHeader(j,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){ii(this,j)}};function ii(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.o=5,si(u),Ir(u)}function si(u){u.A||(u.A=!0,at(u,"complete"),at(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,at(this,"complete"),at(this,"abort"),Ir(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),$e.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Tr(this):this.Xa())},r.Xa=function(){Tr(this)};function Tr(u){if(u.h&&typeof l<"u"){if(u.v&&Jn(u)==4)setTimeout(u.Ca.bind(u),0);else if(at(u,"readystatechange"),Jn(u)==4){u.h=!1;try{const j=u.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=j===0){let Z=String(u.D).match(jl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),w=!$l.test(Z?Z.toLowerCase():"")}y=w}if(y)at(u,"complete"),at(u,"success");else{u.o=6;try{var L=Jn(u)>2?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.ca()+"]",si(u)}}finally{Ir(u)}}}}function Ir(u,p){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const y=u.g;u.g=null,p||at(u,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Jn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Jn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Pl(p)}};function ql(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function pa(u){const p={};u=(u.g&&Jn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(I(u[w]))continue;var y=Bs(u[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[L]||[];p[L]=j,j.push(y)}P(p,function(w){return w.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function Gs(u){this.za=0,this.i=[],this.j=new Zr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xn("baseRetryDelayMs",5e3,u),this.Za=Xn("retryDelaySeedMs",1e4,u),this.Ta=Xn("forwardChannelMaxRetries",2,u),this.va=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new $s(u&&u.concurrentRequestLimit),this.Ba=new Zi,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Gs.prototype,r.ka=8,r.I=1,r.connect=function(u,p,y,w){rt(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.J=ga(this,null,this.W),Sr(this)};function Qs(u){if(Ys(u),u.I==3){var p=u.V++,y=gn(u.J);if(Fe(y,"SID",u.M),Fe(y,"RID",p),Fe(y,"TYPE","terminate"),Zn(u,y),p=new mn(u,u.j,p),p.M=2,p.A=wr(gn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Wl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Hi(p)}ns(u)}function on(u){u.g&&(ts(u),u.g.cancel(),u.g=null)}function Ys(u){on(u),u.v&&(h.clearTimeout(u.v),u.v=null),Js(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Sr(u){if(!ia(u.h)&&!u.m){u.m=!0;var p=u.Ea;Me||R(),xe||(Me(),xe=!0),D.add(p,u),u.D=0}}function Hl(u,p){return Ki(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=p.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Xr(_(u.Ea,u,p),Zs(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const L=new mn(this,this.j,u);let j=this.o;if(this.U&&(j?(j=q(j),Ie(j,this.U)):j=this.U),this.u!==null||this.R||(L.J=j,j=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ma(this,L,p),y=gn(this.J),Fe(y,"RID",u),Fe(y,"CVER",22),this.G&&Fe(y,"X-HTTP-Session-Id",this.G),Zn(this,y),j&&(this.R?p="headers="+qn(zl(j))+"&"+p:this.u&&Ks(y,this.u,j)),qs(this.h,L),this.Ra&&Fe(y,"TYPE","init"),this.S?(Fe(y,"$req",p),Fe(y,"SID","null"),L.U=!0,xn(L,y,null)):xn(L,y,p),this.I=2}}else this.I==3&&(u?es(this,u):this.i.length==0||ia(this.h)||es(this))};function es(u,p){var y;p?y=p.l:y=u.V++;const w=gn(u.J);Fe(w,"SID",u.M),Fe(w,"RID",y),Fe(w,"AID",u.K),Zn(u,w),u.u&&u.o&&Ks(w,u.u,u.o),y=new mn(u,u.j,y,u.D+1),u.u===null&&(y.J=u.o),p&&(u.i=p.G.concat(u.i)),p=ma(u,y,1e3),y.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),qs(u.h,y),xn(y,w,p)}function Zn(u,p){u.H&&ne(u.H,function(y,w){Fe(p,w,y)}),u.l&&ne({},function(y,w){Fe(p,w,y)})}function ma(u,p,y){y=Math.min(u.i.length,y);const w=u.l?_(u.l.Ka,u.l,u):null;e:{var L=u.i;let _e=-1;for(;;){const lt=["count="+y];_e==-1?y>0?(_e=L[0].g,lt.push("ofs="+_e)):_e=0:lt.push("ofs="+_e);let Be=!0;for(let dt=0;dt<y;dt++){var j=L[dt].g;const ln=L[dt].map;if(j-=_e,j<0)_e=Math.max(0,L[dt].g-100),Be=!1;else try{j="req"+j+"_"||"";try{var Z=ln instanceof Map?ln:Object.entries(ln);for(const[Ar,tr]of Z){let nr=tr;m(tr)&&(nr=Gr(tr)),lt.push(j+Ar+"="+encodeURIComponent(nr))}}catch(Ar){throw lt.push(j+"type="+encodeURIComponent("_badmap")),Ar}}catch{w&&w(ln)}}if(Be){Z=lt.join("&");break e}}Z=void 0}return u=u.i.splice(0,y),p.G=u,Z}function bt(u){if(!u.g&&!u.v){u.Y=1;var p=u.Da;Me||R(),xe||(Me(),xe=!0),D.add(p,u),u.A=0}}function er(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Xr(_(u.Da,u),Zs(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,oi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Xr(_(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),on(this),oi(this))};function ts(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function oi(u){u.g=new mn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var p=gn(u.na);Fe(p,"RID","rpc"),Fe(p,"SID",u.M),Fe(p,"AID",u.K),Fe(p,"CI",u.F?"0":"1"),!u.F&&u.ia&&Fe(p,"TO",u.ia),Fe(p,"TYPE","xmlhttp"),Zn(u,p),u.u&&u.o&&Ks(p,u.u,u.o),u.O&&(u.g.H=u.O);var y=u.g;u=u.ba,y.M=1,y.A=wr(gn(p)),y.u=null,y.R=!0,na(y,u)}r.Va=function(){this.C!=null&&(this.C=null,on(this),er(this),rt(19))};function Js(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Xs(u,p){var y=null;if(u.g==p){Js(u),ts(u),u.g=null;var w=2}else if(sa(u.h,p))y=p.G,Gi(u.h,p),w=1;else return;if(u.I!=0){if(p.o)if(w==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var L=u.D;w=Jr(),at(w,new ea(w,y)),Sr(u)}else bt(u);else if(L=p.m,L==3||L==0&&p.X>0||!(w==1&&Hl(u,p)||w==2&&er(u)))switch(y&&y.length>0&&(p=u.h,p.i=p.i.concat(y)),L){case 1:an(u,5);break;case 4:an(u,10);break;case 3:an(u,6);break;default:an(u,2)}}}function Zs(u,p){let y=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(y*=2),y*p}function an(u,p){if(u.j.info("Error code "+p),p==2){var y=_(u.bb,u),w=u.Ua;const L=!w;w=new Hn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Qi(w,"https"),wr(w),L?Qn(w.toString(),y):Yn(w.toString(),y)}else rt(2);u.I=0,u.l&&u.l.pa(p),ns(u),Ys(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function ns(u){if(u.I=0,u.ja=[],u.l){const p=nn(u.h);(p.length!=0||u.i.length!=0)&&(J(u.ja,p),J(u.ja,u.i),u.h.i.length=0,B(u.i),u.i.length=0),u.l.oa()}}function ga(u,p,y){var w=y instanceof Hn?gn(y):new Hn(y);if(w.g!="")p&&(w.g=p+"."+w.g),Wn(w,w.u);else{var L=h.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const j=new Hn(null);w&&Qi(j,w),p&&(j.g=p),L&&Wn(j,L),y&&(j.h=y),w=j}return y=u.G,p=u.wa,y&&p&&Fe(w,y,p),Fe(w,"VER",u.ka),Zn(u,w),w}function Wl(u,p,y){if(p&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Aa&&!u.ma?new $e(new Er({ab:y})):new $e(u.ma),p.Fa(u.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kl(){}r=Kl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function eo(){}eo.prototype.g=function(u,p){return new Ct(u,p)};function Ct(u,p){ht.call(this),this.g=new Gs(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(u?u["X-WebChannel-Client-Profile"]=p.sa:u={"X-WebChannel-Client-Profile":p.sa}),this.g.U=u,(u=p&&p.Qb)&&!I(u)&&(this.g.u=u),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!I(p)&&(this.g.G=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new ai(this)}k(Ct,ht),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Qs(this.g)},Ct.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.v&&(y={},y.__data__=Gr(u),u=y);p.i.push(new sh(p.Ya++,u)),p.I==3&&Sr(p)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Qs(this.g),delete this.g,Ct.Z.N.call(this)};function Gl(u){Fs.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}k(Gl,Fs);function Ql(){Zo.call(this),this.status=1}k(Ql,Zo);function ai(u){this.g=u}k(ai,Kl),ai.prototype.ra=function(){at(this.g,"a")},ai.prototype.qa=function(u){at(this.g,new Gl(u))},ai.prototype.pa=function(u){at(this.g,new Ql)},ai.prototype.oa=function(){at(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,uw=function(){return new eo},lw=function(){return Jr()},aw=Pn,lf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ei.NO_ERROR=0,ei.TIMEOUT=8,ei.HTTP_ERROR=6,rc=ei,ti.COMPLETE="complete",ow=ti,xl.EventType=Yr,Yr.OPEN="a",Yr.CLOSE="b",Yr.ERROR="c",Yr.MESSAGE="d",ht.prototype.listen=ht.prototype.J,Ga=xl,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,sw=$e}).apply(typeof qu<"u"?qu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let $o="12.11.0";function Ok(r){$o=r}/**
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
 */const Rs=new Rf("@firebase/firestore");function So(){return Rs.logLevel}function re(r,...e){if(Rs.logLevel<=Ae.DEBUG){const t=e.map(qf);Rs.debug(`Firestore (${$o}): ${r}`,...t)}}function zr(r,...e){if(Rs.logLevel<=Ae.ERROR){const t=e.map(qf);Rs.error(`Firestore (${$o}): ${r}`,...t)}}function ks(r,...e){if(Rs.logLevel<=Ae.WARN){const t=e.map(qf);Rs.warn(`Firestore (${$o}): ${r}`,...t)}}function qf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function fe(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,cw(r,s,t)}function cw(r,e,t){let s=`FIRESTORE (${$o}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw zr(s),new Error(s)}function je(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||cw(e,o,s)}function ve(r,e){return r}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends mr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ur{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class hw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Bt.UNAUTHENTICATED)))}shutdown(){}}class Lk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Fk{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ur,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ur)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string",31837,{l:s}),new hw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class Uk{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class jk{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Uk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class My{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const s=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new My(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new My(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zk(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Hf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=zk(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Re(r,e){return r<e?-1:r>e?1:0}function uf(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),l=e.charAt(s);if(o!==l)return Wd(o)===Wd(l)?Re(o,l):Wd(o)?1:-1}return Re(r.length,e.length)}const $k=55296,qk=57343;function Wd(r){const e=r.charCodeAt(0);return e>=$k&&e<=qk}function Oo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const Ly="__name__";class ar{constructor(e,t,s){t===void 0?t=0:t>e.length&&fe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&fe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=ar.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Re(e.length,t.length)}static compareSegments(e,t){const s=ar.isNumericId(e),o=ar.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ar.extractNumericId(e).compare(ar.extractNumericId(t)):uf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xi.fromString(e.substring(4,e.length-2))}}class We extends ar{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const Hk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ar{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return Hk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ly}static keyField(){return new Dt([Ly])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ee(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(l(),o++)}if(l(),h)throw new ee(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(We.fromString(e))}static fromName(e){return new ue(We.fromString(e).popFirst(5))}static empty(){return new ue(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new We(e.slice()))}}/**
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
 */function dw(r,e,t){if(!t)throw new ee(z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Wk(r,e,t,s){if(e===!0&&s===!0)throw new ee(z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Fy(r){if(!ue.isDocumentKey(r))throw new ee(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Uy(r){if(ue.isDocumentKey(r))throw new ee(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function fw(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Uc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":fe(12329,{type:typeof r})}function tn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ee(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Uc(r);throw new ee(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function gt(r,e){const t={typeString:r};return e&&(t.value=e),t}function El(r,e){if(!fw(r))throw new ee(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ee(z.INVALID_ARGUMENT,t);return!0}/**
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
 */const jy=-62135596800,By=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*By);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jy)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/By}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(El(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:gt("string",Ye._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Ye(0,0))}static max(){return new ye(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ll=-1;function Kk(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new Di(o,ue.empty(),e)}function Gk(r){return new Di(r.readTime,r.key,ll)}class Di{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Di(ye.min(),ue.empty(),ll)}static max(){return new Di(ye.max(),ue.empty(),ll)}}function Qk(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(r.documentKey,e.documentKey),t!==0?t:Re(r.largestBatchId,e.largestBatchId))}/**
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
 */const Yk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function qo(r){if(r.code!==z.FAILED_PRECONDITION||r.message!==Yk)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,l=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const l=e.length,h=new Array(l);let m=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++m,m===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new $(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function Xk(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ho(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class jc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}jc.ce=-1;/**
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
 */const Wf=-1;function Bc(r){return r==null}function vc(r){return r===0&&1/r==-1/0}function Zk(r){return typeof r=="number"&&Number.isInteger(r)&&!vc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const pw="";function e1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=zy(e)),e=t1(r.get(t),e);return zy(e)}function t1(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case pw:t+="";break;default:t+=l}}return t}function zy(r){return r+pw+""}/**
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
 */function $y(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ji(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function mw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hu(this.root,e,this.comparator,!0)}}class Hu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qy(this.data.getIterator())}getIteratorFrom(e){return new qy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class qy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new pn([])}unionWith(e){let t=new wt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Oo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class gw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new gw("Invalid base64 string: "+l):l}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const n1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(r){if(je(!!r,39018),typeof r=="string"){let e=0;const t=n1.exec(r);if(je(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ct(r.seconds),nanos:ct(r.nanos)}}function ct(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function bi(r){return typeof r=="string"?Vt.fromBase64String(r):Vt.fromUint8Array(r)}/**
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
 */const yw="server_timestamp",_w="__type__",vw="__previous_value__",ww="__local_write_time__";function Kf(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[_w])==null?void 0:s.stringValue)===yw}function zc(r){const e=r.mapValue.fields[vw];return Kf(e)?zc(e):e}function ul(r){const e=Vi(r.mapValue.fields[ww].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class r1{constructor(e,t,s,o,l,h,m,g,_,E,k){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E,this.apiKey=k}}const wc="(default)";class cl{constructor(e,t){this.projectId=e,this.database=t||wc}static empty(){return new cl("","")}get isDefaultDatabase(){return this.database===wc}isEqual(e){return e instanceof cl&&e.projectId===this.projectId&&e.database===this.database}}function i1(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new ee(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cl(r.options.projectId,e)}/**
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
 */const Ew="__type__",s1="__max__",Wu={mapValue:{}},Tw="__vector__",Ec="value";function Oi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Kf(r)?4:a1(r)?9007199254740991:o1(r)?10:11:fe(28295,{value:r})}function pr(r,e){if(r===e)return!0;const t=Oi(r);if(t!==Oi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ul(r).isEqual(ul(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Vi(o.timestampValue),m=Vi(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return bi(o.bytesValue).isEqual(bi(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ct(o.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ct(o.integerValue)===ct(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ct(o.doubleValue),m=ct(l.doubleValue);return h===m?vc(h)===vc(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return Oo(r.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},m=l.mapValue.fields||{};if($y(h)!==$y(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!pr(h[g],m[g])))return!1;return!0})(r,e);default:return fe(52216,{left:r})}}function hl(r,e){return(r.values||[]).find((t=>pr(t,e)))!==void 0}function Mo(r,e){if(r===e)return 0;const t=Oi(r),s=Oi(e);if(t!==s)return Re(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const m=ct(l.integerValue||l.doubleValue),g=ct(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Hy(r.timestampValue,e.timestampValue);case 4:return Hy(ul(r),ul(e));case 5:return uf(r.stringValue,e.stringValue);case 6:return(function(l,h){const m=bi(l),g=bi(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const m=l.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const E=Re(m[_],g[_]);if(E!==0)return E}return Re(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const m=Re(ct(l.latitude),ct(h.latitude));return m!==0?m:Re(ct(l.longitude),ct(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Wy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var b,B,J,X;const m=l.fields||{},g=h.fields||{},_=(b=m[Ec])==null?void 0:b.arrayValue,E=(B=g[Ec])==null?void 0:B.arrayValue,k=Re(((J=_==null?void 0:_.values)==null?void 0:J.length)||0,((X=E==null?void 0:E.values)==null?void 0:X.length)||0);return k!==0?k:Wy(_,E)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Wu.mapValue&&h===Wu.mapValue)return 0;if(l===Wu.mapValue)return 1;if(h===Wu.mapValue)return-1;const m=l.fields||{},g=Object.keys(m),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let k=0;k<g.length&&k<E.length;++k){const b=uf(g[k],E[k]);if(b!==0)return b;const B=Mo(m[g[k]],_[E[k]]);if(B!==0)return B}return Re(g.length,E.length)})(r.mapValue,e.mapValue);default:throw fe(23264,{he:t})}}function Hy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Re(r,e);const t=Vi(r),s=Vi(e),o=Re(t.seconds,s.seconds);return o!==0?o:Re(t.nanos,s.nanos)}function Wy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Mo(t[o],s[o]);if(l)return l}return Re(t.length,s.length)}function Lo(r){return cf(r)}function cf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Vi(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return bi(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ue.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=cf(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${cf(t.fields[h])}`;return o+"}"})(r.mapValue):fe(61005,{value:r})}function ic(r){switch(Oi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zc(r);return e?16+ic(e):16;case 5:return 2*r.stringValue.length;case 6:return bi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+ic(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ji(s.fields,((l,h)=>{o+=l.length+ic(h)})),o})(r.mapValue);default:throw fe(13486,{value:r})}}function Ky(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function hf(r){return!!r&&"integerValue"in r}function Gf(r){return!!r&&"arrayValue"in r}function Gy(r){return!!r&&"nullValue"in r}function Qy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function sc(r){return!!r&&"mapValue"in r}function o1(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Ew])==null?void 0:s.stringValue)===Tw}function Za(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ji(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Za(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Za(r.arrayValue.values[t]);return e}return{...r}}function a1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===s1}/**
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
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!sc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Za(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Za(h):o.push(m.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());sc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];sc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ji(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new en(Za(this.value))}}function Iw(r){const e=[];return ji(r.fields,((t,s)=>{const o=new Dt([t]);if(sc(s)){const l=Iw(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new pn(e)}/**
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
 */class zt{constructor(e,t,s,o,l,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new zt(e,0,ye.min(),ye.min(),ye.min(),en.empty(),0)}static newFoundDocument(e,t,s,o){return new zt(e,1,t,ye.min(),s,o,0)}static newNoDocument(e,t){return new zt(e,2,t,ye.min(),ye.min(),en.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,ye.min(),ye.min(),en.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tc{constructor(e,t){this.position=e,this.inclusive=t}}function Yy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=Mo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Jy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!pr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class dl{constructor(e,t="asc"){this.field=e,this.dir=t}}function l1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Sw{}class mt extends Sw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new c1(e,t,s):t==="array-contains"?new f1(e,s):t==="in"?new p1(e,s):t==="not-in"?new m1(e,s):t==="array-contains-any"?new g1(e,s):new mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new h1(e,s):new d1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Mo(t,this.value)):t!==null&&Oi(this.value)===Oi(t)&&this.matchesComparison(Mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends Sw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new zn(e,t)}matches(e){return Aw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Aw(r){return r.op==="and"}function Rw(r){return u1(r)&&Aw(r)}function u1(r){for(const e of r.filters)if(e instanceof zn)return!1;return!0}function df(r){if(r instanceof mt)return r.field.canonicalString()+r.op.toString()+Lo(r.value);if(Rw(r))return r.filters.map((e=>df(e))).join(",");{const e=r.filters.map((t=>df(t))).join(",");return`${r.op}(${e})`}}function kw(r,e){return r instanceof mt?(function(s,o){return o instanceof mt&&s.op===o.op&&s.field.isEqual(o.field)&&pr(s.value,o.value)})(r,e):r instanceof zn?(function(s,o){return o instanceof zn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,m)=>l&&kw(h,o.filters[m])),!0):!1})(r,e):void fe(19439)}function Cw(r){return r instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Lo(t.value)}`})(r):r instanceof zn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Cw).join(" ,")+"}"})(r):"Filter"}class c1 extends mt{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class h1 extends mt{constructor(e,t){super(e,"in",t),this.keys=Pw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class d1 extends mt{constructor(e,t){super(e,"not-in",t),this.keys=Pw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Pw(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ue.fromName(s.referenceValue)))}class f1 extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gf(t)&&hl(t.arrayValue,this.value)}}class p1 extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hl(this.value.arrayValue,t)}}class m1 extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!hl(this.value.arrayValue,t)}}class g1 extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>hl(this.value.arrayValue,s)))}}/**
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
 */class y1{constructor(e,t=null,s=[],o=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=m,this.Te=null}}function Xy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new y1(r,e,t,s,o,l,h)}function Qf(r){const e=ve(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>df(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Lo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Lo(s))).join(",")),e.Te=t}return e.Te}function Yf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!l1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!kw(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Jy(r.startAt,e.startAt)&&Jy(r.endAt,e.endAt)}function ff(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Wo{constructor(e,t=null,s=[],o=[],l=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function _1(r,e,t,s,o,l,h,m){return new Wo(r,e,t,s,o,l,h,m)}function $c(r){return new Wo(r)}function Zy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function v1(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function xw(r){return r.collectionGroup!==null}function el(r){const e=ve(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new wt(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new dl(l,s))})),t.has(Dt.keyField().canonicalString())||e.Ee.push(new dl(Dt.keyField(),s))}return e.Ee}function cr(r){const e=ve(r);return e.Ie||(e.Ie=w1(e,el(r))),e.Ie}function w1(r,e){if(r.limitType==="F")return Xy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new dl(o.field,l)}));const t=r.endAt?new Tc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Tc(r.startAt.position,r.startAt.inclusive):null;return Xy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function pf(r,e){const t=r.filters.concat([e]);return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function E1(r,e){const t=r.explicitOrderBy.concat([e]);return new Wo(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function Ic(r,e,t){return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function qc(r,e){return Yf(cr(r),cr(e))&&r.limitType===e.limitType}function Nw(r){return`${Qf(cr(r))}|lt:${r.limitType}`}function Ao(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Cw(o))).join(", ")}]`),Bc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Lo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Lo(o))).join(",")),`Target(${s})`})(cr(r))}; limitType=${r.limitType})`}function Hc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ue.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of el(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Yy(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,el(s),o)||s.endAt&&!(function(h,m,g){const _=Yy(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,el(s),o))})(r,e)}function T1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Dw(r){return(e,t)=>{let s=!1;for(const o of el(r)){const l=I1(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function I1(r,e,t){const s=r.field.isKeyField()?ue.comparator(e.key,t.key):(function(l,h,m){const g=h.data.field(l),_=m.data.field(l);return g!==null&&_!==null?Mo(g,_):fe(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return fe(19790,{direction:r.dir})}}/**
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
 */class Ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return mw(this.inner)}size(){return this.innerSize}}/**
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
 */const S1=new tt(ue.comparator);function $r(){return S1}const Vw=new tt(ue.comparator);function Qa(...r){let e=Vw;for(const t of r)e=e.insert(t.key,t);return e}function bw(r){let e=Vw;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function _s(){return tl()}function Ow(){return tl()}function tl(){return new Ds((r=>r.toString()),((r,e)=>r.isEqual(e)))}const A1=new tt(ue.comparator),R1=new wt(ue.comparator);function ke(...r){let e=R1;for(const t of r)e=e.add(t);return e}const k1=new wt(Re);function C1(){return k1}/**
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
 */function Jf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(e)?"-0":e}}function Mw(r){return{integerValue:""+r}}function P1(r,e){return Zk(e)?Mw(e):Jf(r,e)}/**
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
 */class Wc{constructor(){this._=void 0}}function x1(r,e,t){return r instanceof Sc?(function(o,l){const h={fields:{[_w]:{stringValue:yw},[ww]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Kf(l)&&(l=zc(l)),l&&(h.fields[vw]=l),{mapValue:h}})(t,e):r instanceof fl?Fw(r,e):r instanceof pl?Uw(r,e):(function(o,l){const h=Lw(o,l),m=e_(h)+e_(o.Ae);return hf(h)&&hf(o.Ae)?Mw(m):Jf(o.serializer,m)})(r,e)}function N1(r,e,t){return r instanceof fl?Fw(r,e):r instanceof pl?Uw(r,e):t}function Lw(r,e){return r instanceof Ac?(function(s){return hf(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Sc extends Wc{}class fl extends Wc{constructor(e){super(),this.elements=e}}function Fw(r,e){const t=jw(e);for(const s of r.elements)t.some((o=>pr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class pl extends Wc{constructor(e){super(),this.elements=e}}function Uw(r,e){let t=jw(e);for(const s of r.elements)t=t.filter((o=>!pr(o,s)));return{arrayValue:{values:t}}}class Ac extends Wc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function e_(r){return ct(r.integerValue||r.doubleValue)}function jw(r){return Gf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function D1(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof fl&&o instanceof fl||s instanceof pl&&o instanceof pl?Oo(s.elements,o.elements,pr):s instanceof Ac&&o instanceof Ac?pr(s.Ae,o.Ae):s instanceof Sc&&o instanceof Sc})(r.transform,e.transform)}class V1{constructor(e,t){this.version=e,this.transformResults=t}}class kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Kc{}function Bw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Xf(r.key,kn.none()):new Tl(r.key,r.data,kn.none());{const t=r.data,s=en.empty();let o=new wt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Bi(r.key,s,new pn(o.toArray()),kn.none())}}function b1(r,e,t){r instanceof Tl?(function(o,l,h){const m=o.value.clone(),g=n_(o.fieldTransforms,l,h.transformResults);m.setAll(g),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof Bi?(function(o,l,h){if(!oc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const m=n_(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(zw(o)),g.setAll(m),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function nl(r,e,t,s){return r instanceof Tl?(function(l,h,m,g){if(!oc(l.precondition,h))return m;const _=l.value.clone(),E=r_(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Bi?(function(l,h,m,g){if(!oc(l.precondition,h))return m;const _=r_(l.fieldTransforms,g,h),E=h.data;return E.setAll(zw(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((k=>k.field)))})(r,e,t,s):(function(l,h,m){return oc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function O1(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=Lw(s.transform,o||null);l!=null&&(t===null&&(t=en.empty()),t.set(s.field,l))}return t||null}function t_(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Oo(s,o,((l,h)=>D1(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Tl extends Kc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Bi extends Kc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function zw(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function n_(r,e,t){const s=new Map;je(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,m=e.data.field(l.field);s.set(l.field,N1(h,m,t[o]))}return s}function r_(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,x1(l,h,e))}return s}class Xf extends Kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M1 extends Kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class L1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&b1(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=nl(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=nl(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ow();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(o.key)?null:m;const g=Bw(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ye.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&Oo(this.mutations,e.mutations,((t,s)=>t_(t,s)))&&Oo(this.baseMutations,e.baseMutations,((t,s)=>t_(t,s)))}}class Zf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){je(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return A1})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Zf(e,t,s,o)}}/**
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
 */class F1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class U1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pt,De;function j1(r){switch(r){case z.OK:return fe(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return fe(15467,{code:r})}}function $w(r){if(r===void 0)return zr("GRPC error has no .code"),z.UNKNOWN;switch(r){case pt.OK:return z.OK;case pt.CANCELLED:return z.CANCELLED;case pt.UNKNOWN:return z.UNKNOWN;case pt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case pt.INTERNAL:return z.INTERNAL;case pt.UNAVAILABLE:return z.UNAVAILABLE;case pt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case pt.NOT_FOUND:return z.NOT_FOUND;case pt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case pt.ABORTED:return z.ABORTED;case pt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case pt.DATA_LOSS:return z.DATA_LOSS;default:return fe(39323,{code:r})}}(De=pt||(pt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function B1(){return new TextEncoder}/**
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
 */const z1=new xi([4294967295,4294967295],0);function i_(r){const e=B1().encode(r),t=new iw;return t.update(e),new Uint8Array(t.digest())}function s_(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new xi([t,s],0),new xi([o,l],0)]}class ep{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ya(`Invalid padding: ${t}`);if(s<0)throw new Ya(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ya(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ya(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=xi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(xi.fromNumber(s)));return o.compare(z1)===1&&(o=new xi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=i_(e),[s,o]=s_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new ep(l,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=i_(e),[s,o]=s_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Il.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Gc(ye.min(),o,new tt(Re),$r(),ke())}}class Il{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Il(s,t,ke(),ke(),ke())}}/**
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
 */class ac{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class qw{constructor(e,t){this.targetId=e,this.Ce=t}}class Hw{constructor(e,t,s=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class o_{constructor(){this.ve=0,this.Fe=a_(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ke(),t=ke(),s=ke();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:fe(38017,{changeType:l})}})),new Il(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=a_()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class $1{constructor(e){this.Ge=e,this.ze=new Map,this.je=$r(),this.Je=Ku(),this.He=Ku(),this.Ze=new tt(Re)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(ff(l))if(s===0){const h=new ue(l.path);this.et(t,h,zt.newNoDocument(h,ye.min()))}else je(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,m;try{h=bi(s).toUint8Array()}catch(g){if(g instanceof gw)return ks("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new ep(h,o,l)}catch(g){return ks(g instanceof Ya?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const m=this.ot(h);if(m){if(l.current&&ff(m.target)){const g=new ue(m.target.path);this.Et(g).has(h)||this.It(h,g)||this.et(h,g,zt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let s=ke();this.He.forEach(((l,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new Gc(e,t,this.Ze,this.je,s);return this.je=$r(),this.Je=Ku(),this.He=Ku(),this.Ze=new tt(Re),o}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new o_,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new wt(Re),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new wt(Re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new o_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ku(){return new tt(ue.comparator)}function a_(){return new tt(ue.comparator)}const q1={asc:"ASCENDING",desc:"DESCENDING"},H1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},W1={and:"AND",or:"OR"};class K1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mf(r,e){return r.useProto3Json||Bc(e)?e:{value:e}}function Rc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ww(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function G1(r,e){return Rc(r,e.toTimestamp())}function hr(r){return je(!!r,49232),ye.fromTimestamp((function(t){const s=Vi(t);return new Ye(s.seconds,s.nanos)})(r))}function tp(r,e){return gf(r,e).canonicalString()}function gf(r,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Kw(r){const e=We.fromString(r);return je(Xw(e),10190,{key:e.toString()}),e}function yf(r,e){return tp(r.databaseId,e.path)}function Kd(r,e){const t=Kw(e);if(t.get(1)!==r.databaseId.projectId)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ue(Qw(t))}function Gw(r,e){return tp(r.databaseId,e)}function Q1(r){const e=Kw(r);return e.length===4?We.emptyPath():Qw(e)}function _f(r){return new We(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Qw(r){return je(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function l_(r,e,t){return{name:yf(r,e),fields:t.value.mapValue.fields}}function Y1(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:fe(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(je(E===void 0||typeof E=="string",58123),Vt.fromBase64String(E||"")):(je(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Vt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?z.UNKNOWN:$w(_.code);return new ee(E,_.message||"")})(h);t=new Hw(s,o,l,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Kd(r,s.document.name),l=hr(s.document.updateTime),h=s.document.createTime?hr(s.document.createTime):ye.min(),m=new en({mapValue:{fields:s.document.fields}}),g=zt.newFoundDocument(o,l,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];t=new ac(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Kd(r,s.document),l=s.readTime?hr(s.readTime):ye.min(),h=zt.newNoDocument(o,l),m=s.removedTargetIds||[];t=new ac([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Kd(r,s.document),l=s.removedTargetIds||[];t=new ac([],l,o,null)}else{if(!("filter"in e))return fe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new U1(o,l),m=s.targetId;t=new qw(m,h)}}return t}function J1(r,e){let t;if(e instanceof Tl)t={update:l_(r,e.key,e.value)};else if(e instanceof Xf)t={delete:yf(r,e.key)};else if(e instanceof Bi)t={update:l_(r,e.key,e.data),updateMask:oC(e.fieldMask)};else{if(!(e instanceof M1))return fe(16599,{dt:e.type});t={verify:yf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const m=h.transform;if(m instanceof Sc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof fl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof pl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ac)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw fe(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:G1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:fe(27497)})(r,e.precondition)),t}function X1(r,e){return r&&r.length>0?(je(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?hr(o.updateTime):hr(l);return h.isEqual(ye.min())&&(h=hr(l)),new V1(h,o.transformResults||[])})(t,e)))):[]}function Z1(r,e){return{documents:[Gw(r,e.path)]}}function eC(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Gw(r,o);const l=(function(_){if(_.length!==0)return Jw(zn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(b){return{field:Ro(b.field),direction:rC(b.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=mf(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function tC(r){let e=Q1(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){je(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(k){const b=Yw(k);return b instanceof zn&&Rw(b)?b.getFilters():[b]})(t.where));let h=[];t.orderBy&&(h=(function(k){return k.map((b=>(function(J){return new dl(ko(J.field),(function(Q){switch(Q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(b)))})(t.orderBy));let m=null;t.limit&&(m=(function(k){let b;return b=typeof k=="object"?k.value:k,Bc(b)?null:b})(t.limit));let g=null;t.startAt&&(g=(function(k){const b=!!k.before,B=k.values||[];return new Tc(B,b)})(t.startAt));let _=null;return t.endAt&&(_=(function(k){const b=!k.before,B=k.values||[];return new Tc(B,b)})(t.endAt)),_1(e,o,h,l,m,"F",g,_)}function nC(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ko(t.unaryFilter.field);return mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ko(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ko(t.unaryFilter.field);return mt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ko(t.unaryFilter.field);return mt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(r):r.fieldFilter!==void 0?(function(t){return mt.create(ko(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return zn.create(t.compositeFilter.filters.map((s=>Yw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(t.compositeFilter.op))})(r):fe(30097,{filter:r})}function rC(r){return q1[r]}function iC(r){return H1[r]}function sC(r){return W1[r]}function Ro(r){return{fieldPath:r.canonicalString()}}function ko(r){return Dt.fromServerFormat(r.fieldPath)}function Jw(r){return r instanceof mt?(function(t){if(t.op==="=="){if(Qy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NAN"}};if(Gy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NAN"}};if(Gy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ro(t.field),op:iC(t.op),value:t.value}}})(r):r instanceof zn?(function(t){const s=t.getFilters().map((o=>Jw(o)));return s.length===1?s[0]:{compositeFilter:{op:sC(t.op),filters:s}}})(r):fe(54877,{filter:r})}function oC(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Xw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function Zw(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class ki{constructor(e,t,s,o,l=ye.min(),h=ye.min(),m=Vt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aC{constructor(e){this.yt=e}}function lC(r){const e=tC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ic(e,e.limit,"L"):e}/**
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
 */class uC{constructor(){this.bn=new cC}addToCollectionParentIndex(e,t){return this.bn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Di.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class cC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new wt(We.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new wt(We.comparator)).toArray()}}/**
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
 */const u_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eE=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(eE,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
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
 */class Fo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Fo(0)}static ar(){return new Fo(-1)}}/**
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
 */const c_="LruGarbageCollector",hC=1048576;function h_([r,e],[t,s]){const o=Re(r,t);return o===0?Re(e,s):o}class dC{constructor(e){this.Pr=e,this.buffer=new wt(h_),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();h_(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){re(c_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ho(t)?re(c_,"Ignoring IndexedDB error during garbage collection: ",t):await qo(t)}await this.Ar(3e5)}))}}class pC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(jc.ce);const s=new dC(t);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(u_)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),u_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,l,h,m,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),o=this.params.maximumSequenceNumbersToCollect):o=k,h=Date.now(),this.nthSequenceNumber(e,o)))).next((k=>(s=k,m=Date.now(),this.removeTargets(e,s,t)))).next((k=>(l=k,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((k=>(_=Date.now(),So()<=Ae.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${l} targets in `+(g-m)+`ms
	Removed ${k} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:k}))))}}function mC(r,e){return new pC(r,e)}/**
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
 */class gC{constructor(){this.changes=new Ds((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class _C{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&nl(s.mutation,o,pn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ke()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ke()){const o=_s();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Qa();return l.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=_s();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ke())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let l=$r();const h=tl(),m=(function(){return tl()})();return t.forEach(((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Bi)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),nl(E.mutation,_,E.mutation.getFieldMask(),Ye.now())):h.set(_.key,pn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>m.set(_,new yC(E,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=tl();let o=new tt(((h,m)=>h-m)),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||pn.empty();E=m.applyToLocalView(_,E),s.set(g,E);const k=(o.get(m.batchId)||ke()).add(g);o=o.insert(m.batchId,k)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,E=g.value,k=Ow();E.forEach((b=>{if(!l.has(b)){const B=Bw(t.get(b),s.get(b));B!==null&&k.set(b,B),l=l.add(b)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,k))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return v1(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):$.resolve(_s());let m=ll,g=l;return h.next((_=>$.forEach(_,((E,k)=>(m<k.largestBatchId&&(m=k.largestBatchId),l.get(E)?$.resolve():this.remoteDocumentCache.getEntry(e,E).next((b=>{g=g.insert(E,b)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,ke()))).next((E=>({batchId:m,changes:bw(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((s=>{let o=Qa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Qa();return this.indexManager.getCollectionParents(e,l).next((m=>$.forEach(m,(g=>{const _=(function(k,b){return new Wo(b,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((k,b)=>{h=h.insert(k,b)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,zt.newInvalidDocument(E)))}));let m=Qa();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&nl(E.mutation,_,pn.empty(),Ye.now()),Hc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class vC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:hr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:lC(o.bundledQuery),readTime:hr(o.readTime)}})(t)),$.resolve()}}/**
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
 */class wC{constructor(){this.overlays=new tt(ue.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=_s();return $.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.St(e,t,l)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=_s(),l=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new tt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=l.get(_.largestBatchId);E===null&&(E=_s(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=_s(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new F1(t,s));let l=this.Lr.get(t);l===void 0&&(l=ke(),this.Lr.set(t,l)),this.Lr.set(t,l.add(s.key))}}/**
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
 */class EC{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class np{constructor(){this.kr=new wt(At.qr),this.Kr=new wt(At.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new At(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new At(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new ue(new We([])),s=new At(t,e),o=new At(t,e+1),l=[];return this.Kr.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new ue(new We([])),s=new At(t,e),o=new At(t,e+1);let l=ke();return this.Kr.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new At(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return ue.comparator(e.key,t.key)||Re(e.Jr,t.Jr)}static Ur(e,t){return Re(e.Jr,t.Jr)||ue.comparator(e.key,t.key)}}/**
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
 */class TC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new wt(At.qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new L1(l,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Hr=this.Hr.add(new At(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return $.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Wf:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Jr);l.push(m)})),$.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new wt(Re);return t.forEach((o=>{const l=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,h],(m=>{s=s.add(m.Jr)}))})),$.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ue.isDocumentKey(l)||(l=l.child(""));const h=new At(new ue(l),0);let m=new wt(Re);return this.Hr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Jr)),!0)}),h),$.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return $.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new At(t,0),o=this.Hr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class IC{constructor(e){this.ti=e,this.docs=(function(){return new tt(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=$r();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=$r();const h=t.path,m=new ue(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||Qk(Gk(E),s)<=0||(o.has(E.key)||Hc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return $.resolve(l)}getAllFromCollectionGroup(e,t,s,o){fe(9500)}ni(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new SC(this)}getSize(e){return $.resolve(this.size)}}class SC extends gC{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class AC{constructor(e){this.persistence=e,this.ri=new Ds((t=>Qf(t)),Yf),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.ii=0,this.si=new np,this.targetCount=0,this.oi=Fo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Fo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(l).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
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
 */class tE{constructor(e,t){this._i={},this.overlays={},this.ai=new jc(0),this.ui=!1,this.ui=!0,this.ci=new EC,this.referenceDelegate=e(this),this.li=new AC(this),this.indexManager=new uC,this.remoteDocumentCache=(function(o){return new IC(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new aC(t),this.Pi=new vC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new TC(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new RC(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((l=>this.referenceDelegate.Ei(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ii(e,t){return $.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class RC extends Jk{constructor(e){super(),this.currentSequenceNumber=e}}class rp{constructor(e){this.persistence=e,this.Ri=new np,this.Ai=null}static Vi(e){return new rp(e)}get di(){if(this.Ai)return this.Ai;throw fe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(s=>{const o=ue.fromPath(s);return this.mi(e,o).next((l=>{l||t.removeEntry(o,ye.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class kc{constructor(e,t){this.persistence=e,this.fi=new Ds((s=>e1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=mC(this,t)}static Vi(e,t){return new kc(e,t)}Ti(){}Ei(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((l=>l?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,l.removeEntry(h,ye.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ic(e.data.value)),t}wr(e,t,s){return $.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ip{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=o}static Is(e,t){let s=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new ip(e,t.fromCache,s,o)}}/**
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
 */class kC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class CC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return PT()?8:Xk(qt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new kC;return this.ys(e,t,h).next((m=>{if(l.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>l.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(So()<=Ae.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(So()<=Ae.DEBUG&&re("QueryEngine","Query:",Ao(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(So()<=Ae.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(t))):$.resolve())}gs(e,t){if(Zy(t))return $.resolve(null);let s=cr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Ic(t,null,"F"),s=cr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=ke(...l);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.Ss(t,m);return this.bs(t,_,h,g.readTime)?this.gs(e,Ic(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return Zy(t)||o.isEqual(ye.min())?$.resolve(null):this.fs.getDocuments(e,s).next((l=>{const h=this.Ss(t,l);return this.bs(t,h,s,o)?$.resolve(null):(So()<=Ae.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ao(t)),this.Ds(e,h,t,Kk(o,ll)).next((m=>m)))}))}Ss(e,t){let s=new wt(Dw(e));return t.forEach(((o,l)=>{Hc(e,l)&&(s=s.add(l))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,s){return So()<=Ae.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Ao(t)),this.fs.getDocumentsMatchingQuery(e,t,Di.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const sp="LocalStore",PC=3e8;class xC{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new tt(Re),this.Fs=new Ds((l=>Qf(l)),Yf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _C(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function NC(r,e,t,s){return new xC(r,e,t,s)}async function nE(r,e){const t=ve(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],m=[];let g=ke();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){m.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function DC(r,e){const t=ve(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,E){const k=_.batch,b=k.keys();let B=$.resolve();return b.forEach((J=>{B=B.next((()=>E.getEntry(g,J))).next((X=>{const Q=_.docVersions.get(J);je(Q!==null,48541),X.version.compareTo(Q)<0&&(k.applyToRemoteDocument(X,_),X.isValidDocument()&&(X.setReadTime(_.commitVersion),E.addEntry(X)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(g,k)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=ke();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function rE(r){const e=ve(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function VC(r,e){const t=ve(r),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((E,k)=>{const b=o.get(k);if(!b)return;m.push(t.li.removeMatchingKeys(l,E.removedDocuments,k).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,k))));let B=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(k)!==null?B=B.withResumeToken(Vt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(k,B),(function(X,Q,me){return X.resumeToken.approximateByteSize()===0||Q.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=PC?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(b,B,E)&&m.push(t.li.updateTargetData(l,B))}));let g=$r(),_=ke();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),m.push(bC(l,h,e.documentUpdates).next((E=>{g=E.Bs,_=E.Ls}))),!s.isEqual(ye.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((k=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,s)));m.push(E)}return $.waitFor(m).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.vs=o,l)))}function bC(r,e,t){let s=ke(),o=ke();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=$r();return t.forEach(((m,g)=>{const _=l.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ye.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):re(sp,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function OC(r,e){const t=ve(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Wf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function MC(r,e){const t=ve(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((l=>l?(o=l,$.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new ki(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function vf(r,e,t){const s=ve(r),o=s.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ho(h))throw h;re(sp,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function d_(r,e,t){const s=ve(r);let o=ye.min(),l=ke();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const k=ve(g),b=k.Fs.get(E);return b!==void 0?$.resolve(k.vs.get(b)):k.li.getTargetData(_,E)})(s,h,cr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ye.min(),t?l:ke()))).next((m=>(LC(s,T1(e),m),{documents:m,ks:l})))))}function LC(r,e,t){let s=r.Ms.get(e)||ye.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.Ms.set(e,s)}class f_{constructor(){this.activeTargetIds=C1()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FC{constructor(){this.vo=new f_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new f_,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UC{Mo(e){}shutdown(){}}/**
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
 */const p_="ConnectivityMonitor";class m_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){re(p_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){re(p_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gu=null;function wf(){return Gu===null?Gu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gu++,"0x"+Gu.toString(16)}/**
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
 */const Gd="RestConnection",jC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class BC{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===wc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=wf(),m=this.Qo(e,t.toUriEncodedString());re(Gd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:_}=new URL(m),E=gl(_);return this.zo(e,m,g,s,E).then((k=>(re(Gd,`Received RPC '${e}' ${h}: `,k),k)),(k=>{throw ks(Gd,`RPC '${e}' ${h} failed with error: `,k,"url: ",m,"request:",s),k}))}jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+$o})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const s=jC[e];let o=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class zC{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ut="WebChannelConnection",$a=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Vo extends BC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Vo.c_){const e=lw();$a(e,aw.STAT_EVENT,(t=>{t.stat===lf.PROXY?re(Ut,"STAT_EVENT: detected buffering proxy"):t.stat===lf.NOPROXY&&re(Ut,"STAT_EVENT: detected no buffering proxy")})),Vo.c_=!0}}zo(e,t,s,o,l){const h=wf();return new Promise(((m,g)=>{const _=new sw;_.setWithCredentials(!0),_.listenOnce(ow.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case rc.NO_ERROR:const k=_.getResponseJson();re(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(k)),m(k);break;case rc.TIMEOUT:re(Ut,`RPC '${e}' ${h} timed out`),g(new ee(z.DEADLINE_EXCEEDED,"Request time out"));break;case rc.HTTP_ERROR:const b=_.getStatus();if(re(Ut,`RPC '${e}' ${h} failed with status:`,b,"response text:",_.getResponseText()),b>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const J=B==null?void 0:B.error;if(J&&J.status&&J.message){const X=(function(me){const ge=me.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(ge)>=0?ge:z.UNKNOWN})(J.status);g(new ee(X,J.message))}else g(new ee(z.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee(z.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{re(Ut,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);re(Ut,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=wf(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=l.join("");re(Ut,`Creating RPC '${e}' stream ${o}: ${_}`,m);const E=h.createWebChannel(_,m);this.E_(E);let k=!1,b=!1;const B=new zC({Jo:J=>{b?re(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,J):(k||(re(Ut,`Opening RPC '${e}' stream ${o} transport.`),E.open(),k=!0),re(Ut,`RPC '${e}' stream ${o} sending:`,J),E.send(J))},Ho:()=>E.close()});return $a(E,Ga.EventType.OPEN,(()=>{b||(re(Ut,`RPC '${e}' stream ${o} transport opened.`),B.i_())})),$a(E,Ga.EventType.CLOSE,(()=>{b||(b=!0,re(Ut,`RPC '${e}' stream ${o} transport closed`),B.o_(),this.I_(E))})),$a(E,Ga.EventType.ERROR,(J=>{b||(b=!0,ks(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,J.name,"Message:",J.message),B.o_(new ee(z.UNAVAILABLE,"The operation could not be completed")))})),$a(E,Ga.EventType.MESSAGE,(J=>{var X;if(!b){const Q=J.data[0];je(!!Q,16349);const me=Q,ge=(me==null?void 0:me.error)||((X=me[0])==null?void 0:X.error);if(ge){re(Ut,`RPC '${e}' stream ${o} received error:`,ge);const Ee=ge.status;let be=(function(D){const R=pt[D];if(R!==void 0)return $w(R)})(Ee),Me=ge.message;Ee==="NOT_FOUND"&&Me.includes("database")&&Me.includes("does not exist")&&Me.includes(this.databaseId.database)&&ks(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),be===void 0&&(be=z.INTERNAL,Me="Unknown error status: "+Ee+" with message "+ge.message),b=!0,B.o_(new ee(be,Me)),E.close()}else re(Ut,`RPC '${e}' stream ${o} received:`,Q),B.__(Q)}})),Vo.u_(),setTimeout((()=>{B.s_()}),0),B}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return uw()}}/**
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
 */function $C(r){return new Vo(r)}function Qd(){return typeof document<"u"?document:null}/**
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
 */function Qc(r){return new K1(r,!0)}/**
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
 */Vo.c_=!1;class iE{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const g_="PersistentStream";class sE{constructor(e,t,s,o,l,h,m,g){this.Ci=e,this.S_=s,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new iE(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ee(z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(g_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(re(g_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qC extends sE{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Y1(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ye.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ye.min():h.readTime?hr(h.readTime):ye.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=_f(this.serializer),t.addTarget=(function(l,h){let m;const g=h.target;if(m=ff(g)?{documents:Z1(l,g)}:{query:eC(l,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Ww(l,h.resumeToken);const _=mf(l,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ye.min())>0){m.readTime=Rc(l,h.snapshotVersion.toTimestamp());const _=mf(l,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=nC(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=_f(this.serializer),t.removeTarget=e,this.q_(t)}}class HC extends sE{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=X1(e.writeResults,e.commitTime),s=hr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=_f(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>J1(this.serializer,s)))};this.q_(t)}}/**
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
 */class WC{}class KC extends WC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,gf(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(z.UNKNOWN,l.toString())}))}jo(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,gf(t,s),o,h,m,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(z.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function GC(r,e,t,s){return new KC(r,e,t,s)}class QC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zr(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Cs="RemoteStore";class YC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{Vs(this)&&(re(Cs,"Restarting streams for network reachability change."),await(async function(g){const _=ve(g);_.Ia.add(4),await Sl(_),_.Va.set("Unknown"),_.Ia.delete(4),await Yc(_)})(this))}))})),this.Va=new QC(s,o)}}async function Yc(r){if(Vs(r))for(const e of r.Ra)await e(!0)}async function Sl(r){for(const e of r.Ra)await e(!1)}function oE(r,e){const t=ve(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),up(t)?lp(t):Ko(t).O_()&&ap(t,e))}function op(r,e){const t=ve(r),s=Ko(t);t.Ea.delete(e),s.O_()&&aE(t,e),t.Ea.size===0&&(s.O_()?s.L_():Vs(t)&&t.Va.set("Unknown"))}function ap(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ko(r).Z_(e)}function aE(r,e){r.da.$e(e),Ko(r).X_(e)}function lp(r){r.da=new $1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ko(r).start(),r.Va.ua()}function up(r){return Vs(r)&&!Ko(r).x_()&&r.Ea.size>0}function Vs(r){return ve(r).Ia.size===0}function lE(r){r.da=void 0}async function JC(r){r.Va.set("Online")}async function XC(r){r.Ea.forEach(((e,t)=>{ap(r,e)}))}async function ZC(r,e){lE(r),up(r)?(r.Va.ha(e),lp(r)):r.Va.set("Unknown")}async function eP(r,e,t){if(r.Va.set("Online"),e instanceof Hw&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const m of l.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.da.removeTarget(m))})(r,e)}catch(s){re(Cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Cc(r,s)}else if(e instanceof ac?r.da.Xe(e):e instanceof qw?r.da.st(e):r.da.tt(e),!t.isEqual(ye.min()))try{const s=await rE(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const m=l.da.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ea.get(_);E&&l.Ea.set(_,E.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const E=l.Ea.get(g);if(!E)return;l.Ea.set(g,E.withResumeToken(Vt.EMPTY_BYTE_STRING,E.snapshotVersion)),aE(l,g);const k=new ki(E.target,g,_,E.sequenceNumber);ap(l,k)})),l.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){re(Cs,"Failed to raise snapshot:",s),await Cc(r,s)}}async function Cc(r,e,t){if(!Ho(e))throw e;r.Ia.add(1),await Sl(r),r.Va.set("Offline"),t||(t=()=>rE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(Cs,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Yc(r)}))}function uE(r,e){return e().catch((t=>Cc(r,t,e)))}async function Jc(r){const e=ve(r),t=Mi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Wf;for(;tP(e);)try{const o=await OC(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,nP(e,o)}catch(o){await Cc(e,o)}cE(e)&&hE(e)}function tP(r){return Vs(r)&&r.Ta.length<10}function nP(r,e){r.Ta.push(e);const t=Mi(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function cE(r){return Vs(r)&&!Mi(r).x_()&&r.Ta.length>0}function hE(r){Mi(r).start()}async function rP(r){Mi(r).ra()}async function iP(r){const e=Mi(r);for(const t of r.Ta)e.ea(t.mutations)}async function sP(r,e,t){const s=r.Ta.shift(),o=Zf.from(s,e,t);await uE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Jc(r)}async function oP(r,e){e&&Mi(r).Y_&&await(async function(s,o){if((function(h){return j1(h)&&h!==z.ABORTED})(o.code)){const l=s.Ta.shift();Mi(s).B_(),await uE(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Jc(s)}})(r,e),cE(r)&&hE(r)}async function y_(r,e){const t=ve(r);t.asyncQueue.verifyOperationInProgress(),re(Cs,"RemoteStore received new credentials");const s=Vs(t);t.Ia.add(3),await Sl(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Yc(t)}async function aP(r,e){const t=ve(r);e?(t.Ia.delete(2),await Yc(t)):e||(t.Ia.add(2),await Sl(t),t.Va.set("Unknown"))}function Ko(r){return r.ma||(r.ma=(function(t,s,o){const l=ve(t);return l.sa(),new qC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:JC.bind(null,r),Yo:XC.bind(null,r),t_:ZC.bind(null,r),H_:eP.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),up(r)?lp(r):r.Va.set("Unknown")):(await r.ma.stop(),lE(r))}))),r.ma}function Mi(r){return r.fa||(r.fa=(function(t,s,o){const l=ve(t);return l.sa(),new HC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:rP.bind(null,r),t_:oP.bind(null,r),ta:iP.bind(null,r),na:sP.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Jc(r)):(await r.fa.stop(),r.Ta.length>0&&(re(Cs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class cp{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,m=new cp(e,t,h,o,l);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hp(r,e){if(zr("AsyncQueue",`${e}: ${r}`),Ho(r))return new ee(z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class bo{static emptySet(e){return new bo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=Qa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new bo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class __{constructor(){this.ga=new tt(ue.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):fe(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Uo{constructor(e,t,s,o,l,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Uo(e,t,bo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class lP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class uP{constructor(){this.queries=v_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=ve(t),l=o.queries;o.queries=v_(),l.forEach(((h,m)=>{for(const g of m.Sa)g.onError(s)}))})(this,new ee(z.ABORTED,"Firestore shutting down"))}}function v_(){return new Ds((r=>Nw(r)),qc)}async function dp(r,e){const t=ve(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(s=2):(l=new lP,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=hp(h,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&pp(t)}async function fp(r,e){const t=ve(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function cP(r,e){const t=ve(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&pp(t)}function hP(r,e,t){const s=ve(r),o=s.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);s.queries.delete(e)}function pp(r){r.Ca.forEach((e=>{e.next()}))}var Ef,w_;(w_=Ef||(Ef={})).Ma="default",w_.Cache="cache";class mp{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Uo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ef.Cache}}/**
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
 */class dE{constructor(e){this.key=e}}class fE{constructor(e){this.key=e}}class dP{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ke(),this.mutatedKeys=ke(),this.eu=Dw(e),this.tu=new bo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new __,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,k)=>{const b=o.get(E),B=Hc(this.query,k)?k:null,J=!!b&&this.mutatedKeys.has(b.key),X=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let Q=!1;b&&B?b.data.isEqual(B.data)?J!==X&&(s.track({type:3,doc:B}),Q=!0):this.su(b,B)||(s.track({type:2,doc:B}),Q=!0,(g&&this.eu(B,g)>0||_&&this.eu(B,_)<0)&&(m=!0)):!b&&B?(s.track({type:0,doc:B}),Q=!0):b&&!B&&(s.track({type:1,doc:b}),Q=!0,(g||_)&&(m=!0)),Q&&(B?(h=h.add(B),l=X?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,bs:m,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,k)=>(function(B,J){const X=Q=>{switch(Q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Vt:Q})}};return X(B)-X(J)})(E.type,k.type)||this.eu(E.doc,k.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new Uo(this.query,e.tu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new __,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ke(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new fE(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new dE(s))})),t}cu(e){this.Za=e.ks,this.Ya=ke();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const gp="SyncEngine";class fP{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class pP{constructor(e){this.key=e,this.hu=!1}}class mP{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ds((m=>Nw(m)),qc),this.Eu=new Map,this.Iu=new Set,this.Ru=new tt(ue.comparator),this.Au=new Map,this.Vu=new np,this.du={},this.mu=new Map,this.fu=Fo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gP(r,e,t=!0){const s=vE(r);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await pE(s,e,t,!0),o}async function yP(r,e){const t=vE(r);await pE(t,e,!0,!1)}async function pE(r,e,t,s){const o=await MC(r.localStore,cr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let m;return s&&(m=await _P(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&oE(r.remoteStore,o),m}async function _P(r,e,t,s,o){r.pu=(k,b,B)=>(async function(X,Q,me,ge){let Ee=Q.view.ru(me);Ee.bs&&(Ee=await d_(X.localStore,Q.query,!1).then((({documents:D})=>Q.view.ru(D,Ee))));const be=ge&&ge.targetChanges.get(Q.targetId),Me=ge&&ge.targetMismatches.get(Q.targetId)!=null,xe=Q.view.applyChanges(Ee,X.isPrimaryClient,be,Me);return T_(X,Q.targetId,xe.au),xe.snapshot})(r,k,b,B);const l=await d_(r.localStore,e,!0),h=new dP(e,l.ks),m=h.ru(l.documents),g=Il.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);T_(r,t,_.au);const E=new fP(e,t,h);return r.Tu.set(e,E),r.Eu.has(t)?r.Eu.get(t).push(e):r.Eu.set(t,[e]),_.snapshot}async function vP(r,e,t){const s=ve(r),o=s.Tu.get(e),l=s.Eu.get(o.targetId);if(l.length>1)return s.Eu.set(o.targetId,l.filter((h=>!qc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await vf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&op(s.remoteStore,o.targetId),Tf(s,o.targetId)})).catch(qo)):(Tf(s,o.targetId),await vf(s.localStore,o.targetId,!0))}async function wP(r,e){const t=ve(r),s=t.Tu.get(e),o=t.Eu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),op(t.remoteStore,s.targetId))}async function EP(r,e,t){const s=CP(r);try{const o=await(function(h,m){const g=ve(h),_=Ye.now(),E=m.reduce(((B,J)=>B.add(J.key)),ke());let k,b;return g.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let J=$r(),X=ke();return g.xs.getEntries(B,E).next((Q=>{J=Q,J.forEach(((me,ge)=>{ge.isValidDocument()||(X=X.add(me))}))})).next((()=>g.localDocuments.getOverlayedDocuments(B,J))).next((Q=>{k=Q;const me=[];for(const ge of m){const Ee=O1(ge,k.get(ge.key).overlayedDocument);Ee!=null&&me.push(new Bi(ge.key,Ee,Iw(Ee.value.mapValue),kn.exists(!0)))}return g.mutationQueue.addMutationBatch(B,_,me,m)})).next((Q=>{b=Q;const me=Q.applyToLocalDocumentSet(k,X);return g.documentOverlayCache.saveOverlays(B,Q.batchId,me)}))})).then((()=>({batchId:b.batchId,changes:bw(k)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.du[h.currentUser.toKey()];_||(_=new tt(Re)),_=_.insert(m,g),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await Al(s,o.changes),await Jc(s.remoteStore)}catch(o){const l=hp(o,"Failed to persist write");t.reject(l)}}async function mE(r,e){const t=ve(r);try{const s=await VC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?je(h.hu,14607):o.removedDocuments.size>0&&(je(h.hu,42227),h.hu=!1))})),await Al(t,s,e)}catch(s){await qo(s)}}function E_(r,e,t){const s=ve(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((l,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=ve(h);g.onlineState=m;let _=!1;g.queries.forEach(((E,k)=>{for(const b of k.Sa)b.va(m)&&(_=!0)})),_&&pp(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function TP(r,e,t){const s=ve(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let h=new tt(ue.comparator);h=h.insert(l,zt.newNoDocument(l,ye.min()));const m=ke().add(l),g=new Gc(ye.min(),new Map,new tt(Re),h,m);await mE(s,g),s.Ru=s.Ru.remove(l),s.Au.delete(e),yp(s)}else await vf(s.localStore,e,!1).then((()=>Tf(s,e,t))).catch(qo)}async function IP(r,e){const t=ve(r),s=e.batch.batchId;try{const o=await DC(t.localStore,e);yE(t,s,null),gE(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Al(t,o)}catch(o){await qo(o)}}async function SP(r,e,t){const s=ve(r);try{const o=await(function(h,m){const g=ve(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,m).next((k=>(je(k!==null,37113),E=k.keys(),g.mutationQueue.removeMutationBatch(_,k)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);yE(s,e,t),gE(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Al(s,o)}catch(o){await qo(o)}}function gE(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function yE(r,e,t){const s=ve(r);let o=s.du[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Tf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Eu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||_E(r,s)}))}function _E(r,e){r.Iu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(op(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),yp(r))}function T_(r,e,t){for(const s of t)s instanceof dE?(r.Vu.addReference(s.key,e),AP(r,s)):s instanceof fE?(re(gp,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||_E(r,s.key)):fe(19791,{wu:s})}function AP(r,e){const t=e.key,s=t.path.canonicalString();r.Ru.get(t)||r.Iu.has(s)||(re(gp,"New document in limbo: "+t),r.Iu.add(s),yp(r))}function yp(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new ue(We.fromString(e)),s=r.fu.next();r.Au.set(s,new pP(t)),r.Ru=r.Ru.insert(t,s),oE(r.remoteStore,new ki(cr($c(t.path)),s,"TargetPurposeLimboResolution",jc.ce))}}async function Al(r,e,t){const s=ve(r),o=[],l=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{h.push(s.pu(g,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const k=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,k?"current":"not-current")}if(_){o.push(_);const k=ip.Is(g.targetId,_);l.push(k)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(g,_){const E=ve(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>$.forEach(_,(b=>$.forEach(b.Ts,(B=>E.persistence.referenceDelegate.addReference(k,b.targetId,B))).next((()=>$.forEach(b.Es,(B=>E.persistence.referenceDelegate.removeReference(k,b.targetId,B)))))))))}catch(k){if(!Ho(k))throw k;re(sp,"Failed to update sequence numbers: "+k)}for(const k of _){const b=k.targetId;if(!k.fromCache){const B=E.vs.get(b),J=B.snapshotVersion,X=B.withLastLimboFreeSnapshotVersion(J);E.vs=E.vs.insert(b,X)}}})(s.localStore,l))}async function RP(r,e){const t=ve(r);if(!t.currentUser.isEqual(e)){re(gp,"User change. New user:",e.toKey());const s=await nE(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((m=>{m.forEach((g=>{g.reject(new ee(z.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Al(t,s.Ns)}}function kP(r,e){const t=ve(r),s=t.Au.get(e);if(s&&s.hu)return ke().add(s.key);{let o=ke();const l=t.Eu.get(e);if(!l)return o;for(const h of l){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function vE(r){const e=ve(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=mE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TP.bind(null,e),e.Pu.H_=cP.bind(null,e.eventManager),e.Pu.yu=hP.bind(null,e.eventManager),e}function CP(r){const e=ve(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SP.bind(null,e),e}class Pc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return NC(this.persistence,new CC,e.initialUser,this.serializer)}Cu(e){return new tE(rp.Vi,this.serializer)}Du(e){return new FC}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pc.provider={build:()=>new Pc};class PP extends Pc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){je(this.persistence.referenceDelegate instanceof kc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new fC(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new tE((s=>kc.Vi(s,t)),this.serializer)}}class If{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>E_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=RP.bind(null,this.syncEngine),await aP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new uP})()}createDatastore(e){const t=Qc(e.databaseInfo.databaseId),s=$C(e.databaseInfo);return GC(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,m){return new YC(s,o,l,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>E_(this.syncEngine,t,0)),(function(){return m_.v()?new m_:new UC})())}createSyncEngine(e,t){return(function(o,l,h,m,g,_,E){const k=new mP(o,l,h,m,g,_);return E&&(k.gu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=ve(o);re(Cs,"RemoteStore shutting down."),l.Ia.add(5),await Sl(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}If.provider={build:()=>new If};/**
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
 */class _p{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Li="FirestoreClient";class xP{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=Hf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{re(Li,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(Li,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=hp(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Yd(r,e){r.asyncQueue.verifyOperationInProgress(),re(Li,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await nE(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function I_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await NP(r);re(Li,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>y_(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>y_(e.remoteStore,o))),r._onlineComponents=e}async function NP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Li,"Using user provided OfflineComponentProvider");try{await Yd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ks("Error using user provided cache. Falling back to memory cache: "+t),await Yd(r,new Pc)}}else re(Li,"Using default OfflineComponentProvider"),await Yd(r,new PP(void 0));return r._offlineComponents}async function wE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Li,"Using user provided OnlineComponentProvider"),await I_(r,r._uninitializedComponentsProvider._online)):(re(Li,"Using default OnlineComponentProvider"),await I_(r,new If))),r._onlineComponents}function DP(r){return wE(r).then((e=>e.syncEngine))}async function xc(r){const e=await wE(r),t=e.eventManager;return t.onListen=gP.bind(null,e.syncEngine),t.onUnlisten=vP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=wP.bind(null,e.syncEngine),t}function VP(r,e,t,s){const o=new _p(s),l=new mp(e,o,t);return r.asyncQueue.enqueueAndForget((async()=>dp(await xc(r),l))),()=>{o.Nu(),r.asyncQueue.enqueueAndForget((async()=>fp(await xc(r),l)))}}function bP(r,e,t={}){const s=new Ur;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const E=new _p({next:b=>{E.Nu(),h.enqueueAndForget((()=>fp(l,k)));const B=b.docs.has(m);!B&&b.fromCache?_.reject(new ee(z.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&b.fromCache&&g&&g.source==="server"?_.reject(new ee(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(b)},error:b=>_.reject(b)}),k=new mp($c(m.path),E,{includeMetadataChanges:!0,qa:!0});return dp(l,k)})(await xc(r),r.asyncQueue,e,t,s))),s.promise}function OP(r,e,t={}){const s=new Ur;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const E=new _p({next:b=>{E.Nu(),h.enqueueAndForget((()=>fp(l,k))),b.fromCache&&g.source==="server"?_.reject(new ee(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(b)},error:b=>_.reject(b)}),k=new mp(m,E,{includeMetadataChanges:!0,qa:!0});return dp(l,k)})(await xc(r),r.asyncQueue,e,t,s))),s.promise}function MP(r,e){const t=new Ur;return r.asyncQueue.enqueueAndForget((async()=>EP(await DP(r),e,t))),t.promise}/**
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
 */function EE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const LP="ComponentProvider",S_=new Map;function FP(r,e,t,s,o){return new r1(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,EE(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const TE="firestore.googleapis.com",A_=!0;class R_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=TE,this.ssl=A_}else this.host=e.host,this.ssl=e.ssl??A_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hC)throw new ee(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=EE(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new R_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new R_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Mk;switch(s.type){case"firstParty":return new jk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=S_.get(t);s&&(re(LP,"Removing Datastore"),S_.delete(t),s.terminate())})(this),Promise.resolve()}}function UP(r,e,t,s={}){var _;r=tn(r,Xc);const o=gl(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&G_(`https://${m}`),l.host!==TE&&l.host!==m&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:m,ssl:o,emulatorOptions:s};if(!Es(g,h)&&(r._setSettings(g),s.mockUserToken)){let E,k;if(typeof s.mockUserToken=="string")E=s.mockUserToken,k=Bt.MOCK_USER;else{E=TT(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new ee(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");k=new Bt(b)}r._authCredentials=new Lk(new hw(E,k))}}/**
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
 */class Hr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class st{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(El(t,st._jsonSchema))return new st(e,s||null,new ue(We.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:gt("string",st._jsonSchemaVersion),referencePath:gt("string")};class Ni extends Hr{constructor(e,t,s){super(e,t,$c(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new ue(e))}withConverter(e){return new Ni(this.firestore,e,this._path)}}function jt(r,e,...t){if(r=ot(r),dw("collection","path",e),r instanceof Xc){const s=We.fromString(e,...t);return Uy(s),new Ni(r,null,s)}{if(!(r instanceof st||r instanceof Ni))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(We.fromString(e,...t));return Uy(s),new Ni(r.firestore,null,s)}}function In(r,e,...t){if(r=ot(r),arguments.length===1&&(e=Hf.newId()),dw("doc","path",e),r instanceof Xc){const s=We.fromString(e,...t);return Fy(s),new st(r,null,new ue(s))}{if(!(r instanceof st||r instanceof Ni))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(We.fromString(e,...t));return Fy(s),new st(r.firestore,r instanceof Ni?r.converter:null,new ue(s))}}/**
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
 */const k_="AsyncQueue";class C_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new iE(this,"async_queue_retry"),this._c=()=>{const s=Qd();s&&re(k_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Qd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Qd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ur;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ho(e))throw e;re(k_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,zr("INTERNAL UNHANDLED ERROR: ",P_(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=cp.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&fe(47125,{Pc:P_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function P_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class qr extends Xc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new C_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new C_(e),this._firestoreClient=void 0,await e}}}function jP(r,e){const t=typeof r=="object"?r:Cf(),s=typeof r=="string"?r:wc,o=jo(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=wT("firestore");l&&UP(o,...l)}return o}function Zc(r){if(r._terminated)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||BP(r),r._firestoreClient}function BP(r){var s,o,l,h;const e=r._freezeSettings(),t=FP(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new xP(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(r._componentsProvider))}/**
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
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Vt.fromBase64String(e))}catch(t){throw new ee(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(El(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:gt("string",An._jsonSchemaVersion),bytes:gt("string")};/**
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
 */class vp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wp{constructor(e){this._methodName=e}}/**
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
 */class dr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dr._jsonSchemaVersion}}static fromJSON(e){if(El(e,dr._jsonSchema))return new dr(e.latitude,e.longitude)}}dr._jsonSchemaVersion="firestore/geoPoint/1.0",dr._jsonSchema={type:gt("string",dr._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
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
 */class Un{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(El(e,Un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Un(e.vectorValues);throw new ee(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Un._jsonSchemaVersion="firestore/vectorValue/1.0",Un._jsonSchema={type:gt("string",Un._jsonSchemaVersion),vectorValues:gt("object")};/**
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
 */const zP=/^__.*__$/;class $P{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Bi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Tl(e,this.data,t,this.fieldTransforms)}}class IE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Bi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function SE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{dataSource:r})}}class Ep{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ep({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Nc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(SE(this.dataSource)&&zP.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class qP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Qc(e)}A(e,t,s,o=!1){return new Ep({dataSource:e,methodName:t,targetDoc:s,path:Dt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eh(r){const e=r._freezeSettings(),t=Qc(r._databaseId);return new qP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function AE(r,e,t,s,o,l={}){const h=r.A(l.merge||l.mergeFields?2:0,e,t,o);Tp("Data must be an object, but it was:",h,s);const m=RE(s,h);let g,_;if(l.merge)g=new pn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const k of l.mergeFields){const b=Ps(e,k,t);if(!h.contains(b))throw new ee(z.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);PE(E,b)||E.push(b)}g=new pn(E),_=h.fieldTransforms.filter((k=>g.covers(k.field)))}else g=null,_=h.fieldTransforms;return new $P(new en(m),g,_)}class th extends wp{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof th}}function HP(r,e,t,s){const o=r.A(1,e,t);Tp("Data must be an object, but it was:",o,s);const l=[],h=en.empty();ji(s,((g,_)=>{const E=CE(e,g,t);_=ot(_);const k=o.fc(E);if(_ instanceof th)l.push(E);else{const b=Rl(_,k);b!=null&&(l.push(E),h.set(E,b))}}));const m=new pn(l);return new IE(h,m,o.fieldTransforms)}function WP(r,e,t,s,o,l){const h=r.A(1,e,t),m=[Ps(e,s,t)],g=[o];if(l.length%2!=0)throw new ee(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)m.push(Ps(e,l[b])),g.push(l[b+1]);const _=[],E=en.empty();for(let b=m.length-1;b>=0;--b)if(!PE(_,m[b])){const B=m[b];let J=g[b];J=ot(J);const X=h.fc(B);if(J instanceof th)_.push(B);else{const Q=Rl(J,X);Q!=null&&(_.push(B),E.set(B,Q))}}const k=new pn(_);return new IE(E,k,h.fieldTransforms)}function KP(r,e,t,s=!1){return Rl(t,r.A(s?4:3,e))}function Rl(r,e){if(kE(r=ot(r)))return Tp("Unsupported field value:",e,r),RE(r,e);if(r instanceof wp)return(function(s,o){if(!SE(o.dataSource))throw o.yc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const m of s){let g=Rl(m,o.gc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=ot(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return P1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ye.fromDate(s);return{timestampValue:Rc(o.serializer,l)}}if(s instanceof Ye){const l=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Rc(o.serializer,l)}}if(s instanceof dr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof An)return{bytesValue:Ww(o.serializer,s._byteString)};if(s instanceof st){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:tp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Un)return(function(h,m){const g=h instanceof Un?h.toArray():h;return{mapValue:{fields:{[Ew]:{stringValue:Tw},[Ec]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw m.yc("VectorValues must only contain numeric values.");return Jf(m.serializer,E)}))}}}}}})(s,o);if(Zw(s))return s._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Uc(s)}`)})(r,e)}function RE(r,e){const t={};return mw(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(r,((s,o)=>{const l=Rl(o,e.dc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function kE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof dr||r instanceof An||r instanceof st||r instanceof wp||r instanceof Un||Zw(r))}function Tp(r,e,t){if(!kE(t)||!fw(t)){const s=Uc(t);throw s==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+s)}}function Ps(r,e,t){if((e=ot(e))instanceof vp)return e._internalPath;if(typeof e=="string")return CE(r,e);throw Nc("Field path arguments must be of type string or ",r,!1,void 0,t)}const GP=new RegExp("[~\\*/\\[\\]]");function CE(r,e,t){if(e.search(GP)>=0)throw Nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new vp(...e.split("."))._internalPath}catch{throw Nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Nc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ee(z.INVALID_ARGUMENT,m+r+g)}function PE(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class QP{convertValue(e,t="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ji(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,o,l;const t=(l=(o=(s=e.fields)==null?void 0:s[Ec].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>ct(h.doubleValue)));return new Un(t)}convertGeoPoint(e){return new dr(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=zc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ul(e));default:return null}}convertTimestamp(e){const t=Vi(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);je(Xw(s),9688,{name:e});const o=new cl(s.get(1),s.get(3)),l=new ue(s.popFirst(5));return o.isEqual(t)||zr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class Ip extends QP{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}const x_="@firebase/firestore",N_="4.13.0";/**
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
 */function D_(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}/**
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
 */class xE{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ps("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class YP extends xE{data(){return super.data()}}/**
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
 */function NE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ee(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sp{}class Ap extends Sp{}function fn(r,e,...t){let s=[];e instanceof Sp&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof Rp)).length,m=l.filter((g=>g instanceof nh)).length;if(h>1||h>0&&m>0)throw new ee(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class nh extends Ap{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new nh(e,t,s)}_apply(e){const t=this._parse(e);return VE(e._query,t),new Hr(e.firestore,e.converter,pf(e._query,t))}_parse(e){const t=eh(e.firestore);return(function(l,h,m,g,_,E,k){let b;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ee(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){b_(k,E);const J=[];for(const X of k)J.push(V_(g,l,X));b={arrayValue:{values:J}}}else b=V_(g,l,k)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||b_(k,E),b=KP(m,h,k,E==="in"||E==="not-in");return mt.create(_,E,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lc(r,e,t){const s=e,o=Ps("where",r);return nh._create(o,s,t)}class Rp extends Sp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Rp(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const m=l.getFlattenedFilters();for(const g of m)VE(h,g),h=pf(h,g)})(e._query,t),new Hr(e.firestore,e.converter,pf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kp extends Ap{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new kp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new dl(l,h)})(e._query,this._field,this._direction);return new Hr(e.firestore,e.converter,E1(e._query,t))}}function Ci(r,e="asc"){const t=e,s=Ps("orderBy",r);return kp._create(s,t)}class Cp extends Ap{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Cp(e,t,s)}_apply(e){return new Hr(e.firestore,e.converter,Ic(e._query,this._limit,this._limitType))}}function DE(r){return Cp._create("limit",r,"F")}function V_(r,e,t){if(typeof(t=ot(t))=="string"){if(t==="")throw new ee(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xw(e)&&t.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!ue.isDocumentKey(s))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ky(r,new ue(s))}if(t instanceof st)return Ky(r,t._key);throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uc(t)}.`)}function b_(r,e){if(!Array.isArray(r)||r.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VE(r,e){const t=(function(o,l){for(const h of o)for(const m of h.getFlattenedFilters())if(l.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function bE(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Ja{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends xE{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ps("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:gt("string",vs._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class uc extends vs{data(e={}){return super.data(e)}}class ws{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ja(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new uc(this._firestore,this._userDataWriter,s.key,s,new Ja(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new uc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ja(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>l||m.type!==3)).map((m=>{const g=new uc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ja(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:JP(m.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ws._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function JP(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:r})}}/**
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
 */ws._jsonSchemaVersion="firestore/querySnapshot/1.0",ws._jsonSchema={type:gt("string",ws._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};/**
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
 */function XP(r){r=tn(r,st);const e=tn(r.firestore,qr),t=Zc(e);return bP(t,r._key).then((s=>OE(e,r,s)))}function Io(r){r=tn(r,Hr);const e=tn(r.firestore,qr),t=Zc(e),s=new Ip(e);return NE(r._query),OP(t,r._query).then((o=>new ws(e,s,r,o)))}function ZP(r,e,t){r=tn(r,st);const s=tn(r.firestore,qr),o=bE(r.converter,e),l=eh(s);return rh(s,[AE(l,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,kn.none())])}function qa(r,e,t,...s){r=tn(r,st);const o=tn(r.firestore,qr),l=eh(o);let h;return h=typeof(e=ot(e))=="string"||e instanceof vp?WP(l,"updateDoc",r._key,e,t,s):HP(l,"updateDoc",r._key,e),rh(o,[h.toMutation(r._key,kn.exists(!0))])}function Qu(r){return rh(tn(r.firestore,qr),[new Xf(r._key,kn.none())])}function Yu(r,e){const t=tn(r.firestore,qr),s=In(r),o=bE(r.converter,e),l=eh(r.firestore);return rh(t,[AE(l,"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,kn.exists(!1))]).then((()=>s))}function Ha(r,...e){var _,E,k;r=ot(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||D_(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(D_(e[s])){const b=e[s];e[s]=(_=b.next)==null?void 0:_.bind(b),e[s+1]=(E=b.error)==null?void 0:E.bind(b),e[s+2]=(k=b.complete)==null?void 0:k.bind(b)}let l,h,m;if(r instanceof st)h=tn(r.firestore,qr),m=$c(r._key.path),l={next:b=>{e[s]&&e[s](OE(h,r,b))},error:e[s+1],complete:e[s+2]};else{const b=tn(r,Hr);h=tn(b.firestore,qr),m=b._query;const B=new Ip(h);l={next:J=>{e[s]&&e[s](new ws(h,B,b,J))},error:e[s+1],complete:e[s+2]},NE(r._query)}const g=Zc(h);return VP(g,m,o,l)}function rh(r,e){const t=Zc(r);return MP(t,e)}function OE(r,e,t){const s=t.docs.get(e._key),o=new Ip(r);return new vs(r,o,e._key,s,new Ja(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Ok(Bo),fr(new jn("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),m=new qr(new Fk(s.getProvider("auth-internal")),new Bk(h,s.getProvider("app-check-internal")),i1(h,o),h);return l={useFetchStreams:t,...l},m._setSettings(l),m}),"PUBLIC").setMultipleInstances(!0)),Rn(x_,N_,e),Rn(x_,N_,"esm2020")})();const ex={apiKey:"AIzaSyDuxT03D9vxSWE5Fw29sdsnCohTtGj32fo",authDomain:"ipreu-95300.firebaseapp.com",projectId:"ipreu-95300",storageBucket:"ipreu-95300.firebasestorage.app",messagingSenderId:"921313347665",appId:"1:921313347665:web:128cdbb3e428b113a71070"},Pp=J_(ex),gs=sR(Pp),qe=jP(Pp),Ju=typeof window<"u"?Dk(Pp):null,xp="uc_token",Np="uc_user";function O_(r,e){try{localStorage.setItem(xp,r),localStorage.setItem(Np,JSON.stringify(e))}catch(t){console.error("Failed to save session",t)}}function tx(){try{const r=localStorage.getItem(xp),e=localStorage.getItem(Np);return{token:r,user:e?JSON.parse(e):null}}catch{return{token:null,user:null}}}function nx(){try{localStorage.removeItem(xp),localStorage.removeItem(Np),ec(gs).catch(console.error)}catch(r){console.error("Failed to clear session",r)}}const vt={login:async(r,e)=>{if(!e)throw new Error("Password required");const t=await HS(gs,r,e),s=await XP(In(qe,"users",t.user.uid));if(!s.exists())throw await ec(gs),new Error("User record not found in database.");const o={id:s.id,...s.data()};if(o.role==="PENDING")throw await ec(gs),new Error("Your application is still pending approval. Please check back later.");return{token:await t.user.getIdToken(),user:o}},register:async r=>{if(!r.password)throw new Error("Password required");if(!r.email)throw new Error("Email required");const e=r.email.toLowerCase().trim(),t=await qS(gs,e,r.password),{password:s,...o}=r;return o.email=e,await ZP(In(qe,"users",t.user.uid),{...o,role:"PENDING",createdAt:new Date().toISOString()}),await ec(gs),!0},getAnnouncements:async()=>{const r=fn(jt(qe,"announcements"),Ci("createdAt","desc"),DE(30));return(await Io(r)).docs.map(t=>({id:t.id,...t.data()}))},createAnnouncement:async r=>{const e=new Date().toISOString();return{id:(await Yu(jt(qe,"announcements"),{...r,createdAt:e})).id,...r,createdAt:e}},deleteAnnouncement:async r=>(await Qu(In(qe,"announcements",r)),!0),updateAnnouncement:async(r,e)=>(await qa(In(qe,"announcements",r),e),!0),getPendingUsers:async()=>{const r=fn(jt(qe,"users"),lc("role","==","PENDING"));return(await Io(r)).docs.map(t=>({id:t.id,...t.data()}))},getApprovedUsers:async()=>{const r=fn(jt(qe,"users"),lc("role","==","MEMBER"));return(await Io(r)).docs.map(t=>({id:t.id,...t.data()}))},rejectUser:async r=>(await Qu(In(qe,"users",r)),!0),approveUser:async(r,e)=>{const t=In(qe,"users",r);return await qa(t,{role:"MEMBER",memberNo:e}),!0},getSurveys:async()=>{const r=fn(jt(qe,"surveys"));return(await Io(r)).docs.map(t=>({id:t.id,...t.data()}))},createSurvey:async r=>({id:(await Yu(jt(qe,"surveys"),r)).id,...r}),deleteSurvey:async r=>(await Qu(In(qe,"surveys",r)),!0),updateSurvey:async(r,e)=>(await qa(In(qe,"surveys",r),e),!0),getCalendarEvents:async()=>{const r=fn(jt(qe,"calendar"),Ci("date","asc"));return(await Io(r)).docs.map(t=>({id:t.id,...t.data()}))},createCalendarEvent:async r=>({id:(await Yu(jt(qe,"calendar"),r)).id,...r}),deleteCalendarEvent:async r=>(await Qu(In(qe,"calendar",r)),!0),getGrievances:async r=>{let e;const t=jt(qe,"grievances");return r?e=fn(t,lc("userId","==",r),Ci("createdAt","desc")):e=fn(t,Ci("createdAt","desc")),(await Io(e)).docs.map(o=>({id:o.id,...o.data()}))},createGrievance:async r=>({id:(await Yu(jt(qe,"grievances"),r)).id,...r}),updateGrievance:async(r,e)=>(await qa(In(qe,"grievances",r),e),!0),saveFcmToken:async(r,e)=>{const t=In(qe,"users",r);await qa(t,{fcmToken:e})}},M_=et.lazy(()=>Af(()=>import("./Auth-Dfs9SFhU.js"),[])),rx=et.lazy(()=>Af(()=>import("./AdminDashboard-U_Bv5a3W.js"),__vite__mapDeps([0,1]))),ix=et.lazy(()=>Af(()=>import("./MemberDashboard-CsOYDMIU.js"),__vite__mapDeps([2,1]))),ME=et.createContext(null),LE=()=>{const r=et.useContext(ME);if(!r)throw new Error("useAppContext must be used within AppProvider");return r};function sx(){const[r,e]=et.useState(!0),[t,s]=et.useState(!1),[o,l]=et.useState(()=>localStorage.getItem("theme")==="dark"),[h,m]=et.useState(null),[g,_]=et.useState([]),[E,k]=et.useState([]),[b,B]=et.useState([]),[J,X]=et.useState([]),[Q,me]=et.useState([]),[ge,Ee]=et.useState("dashboard"),[be,Me]=et.useState(null);F_.useLayoutEffect(()=>{document.documentElement.classList.toggle("dark",o),localStorage.setItem("theme",o?"dark":"light")},[o]),et.useEffect(()=>{const T={dashboard:"My Dashboard | IPREU",calendar:"Union Calendar | IPREU",grievances:"Secure Grievances | IPREU",overview:"Admin Overview | IPREU",members:"Manage Users | IPREU",announcements:"Broadcast | IPREU"};document.title=T[ge]||"IPREU Union Connect"},[ge]),et.useEffect(()=>{const T=GS(gs,S=>{S?console.log("Firebase Auth synced:",S.uid):console.log("Firebase Auth signed out")});return(async()=>{try{const S=tx();S&&S.user&&(m(S.user),xe(S.user.id))}catch(S){console.error("Session init failed:",S)}finally{e(!1)}})(),()=>T()},[]),et.useEffect(()=>{if(!h)return;const T=fn(jt(qe,"announcements"),Ci("createdAt","desc"),DE(30)),C=Ha(T,G=>{k(G.docs.map(ne=>({id:ne.id,...ne.data()})))},G=>console.error("Announcements Sync Error:",G)),S=fn(jt(qe,"surveys")),V=Ha(S,G=>{_(G.docs.map(ne=>({id:ne.id,...ne.data()})))},G=>console.error("Surveys Sync Error:",G)),I=fn(jt(qe,"calendar"),Ci("date","asc")),Te=Ha(I,G=>{B(G.docs.map(ne=>({id:ne.id,...ne.data()})))},G=>console.error("Calendar Sync Error:",G));let nt;h.role==="ADMIN"?nt=fn(jt(qe,"grievances"),Ci("createdAt","desc")):nt=fn(jt(qe,"grievances"),lc("userId","==",h.id),Ci("createdAt","desc"));const Et=Ha(nt,G=>{X(G.docs.map(ne=>({id:ne.id,...ne.data()})))},G=>console.error("Grievances Sync Error:",G));let ze=()=>{};if(h.role==="ADMIN"){const G=fn(jt(qe,"users"));ze=Ha(G,ne=>{me(ne.docs.map(P=>({id:P.id,...P.data()})))})}return()=>{C(),V(),Te(),Et(),ze()}},[h==null?void 0:h.id]);const xe=async T=>{if(Ju)try{if(await Notification.requestPermission()==="granted"){const S=await Vk(Ju,{vapidKey:"BKZqsvNJwZbljTyY0T6ho_GruW2LiC8WBEre2uMqg6A-67sBHoF2RIg6VCX2BLMs0LVolggQTCap4zwDgedyKjI"});S&&await vt.saveFcmToken(T,S)}}catch(C){console.error("FCM Registration failed:",C)}};et.useEffect(()=>{if(!Ju)return;const T=bk(Ju,C=>{var S,V;alert(`Notification: ${(S=C.notification)==null?void 0:S.title}
${(V=C.notification)==null?void 0:V.body}`)});return()=>T()},[]);const D=et.useMemo(()=>({currentUser:h,isDarkMode:o,toggleDarkMode:()=>l(T=>!T),users:Q,surveys:g,announcements:E,calendarEvents:b,grievances:J,fetchAnnouncements:async()=>{const T=await vt.getAnnouncements();k(T)},memberLogin:async(T,C)=>{var S;try{const V=await vt.login(T,C);return V.token&&V.user&&V.user.role==="MEMBER"?(m(V.user),O_(V.token,V.user),{success:!0}):{success:!1,error:"Access denied. Only members can login here."}}catch(V){return(S=V.message)!=null&&S.includes("pending approval")?{success:!1,pending:!0}:{success:!1,error:V.message||"Login failed"}}},adminLogin:async(T,C)=>{try{const S=await vt.login(T,C);if(S.token&&S.user&&S.user.role==="ADMIN"){m(S.user),O_(S.token,S.user);const[V,I]=await Promise.all([vt.getPendingUsers(),vt.getApprovedUsers()]);return me([...V,...I]),{success:!0}}return{success:!1,error:"Access denied. Only admins can login here."}}catch(S){return{success:!1,error:S.message||"Admin login failed"}}},logout:()=>{m(null),nx()},register:async T=>(await vt.register(T),!0),rejectRegistration:async T=>{await vt.rejectUser(T),me(C=>C.filter(S=>S.id!==T))},approveRegistration:async T=>{const V=`IPREU-${(Q.filter(I=>I.role===Co.MEMBER).length+1).toString().padStart(4,"0")}`;await vt.approveUser(T,V),me(I=>I.map(Te=>Te.id===T?{...Te,role:Co.MEMBER,memberNo:V}:Te))},createSurvey:async T=>{const C=await vt.createSurvey({...T,votes:{}});_(S=>[C,...S])},deleteSurvey:async T=>{await vt.deleteSurvey(T),_(C=>C.filter(S=>S.id!==T))},submitVote:async(T,C)=>{if(!h)return;const S=g.find(I=>I.id===T);if(!S)return;const V={...S.votes,[h.id]:C};await vt.updateSurvey(T,{votes:V}),_(I=>I.map(Te=>Te.id===T?{...Te,votes:V}:Te))},createAnnouncement:async(T,C,S)=>{const V=await vt.createAnnouncement({title:T,content:C,attachment:S??void 0});k(I=>[V,...I])},updateAnnouncement:async(T,C,S)=>{await vt.updateAnnouncement(T,{title:C,content:S}),k(V=>V.map(I=>I.id===T?{...I,title:C,content:S}:I))},deleteAnnouncement:async T=>{await vt.deleteAnnouncement(T),k(C=>C.filter(S=>S.id!==T))},createCalendarEvent:async T=>{const C=await vt.createCalendarEvent({...T,createdAt:new Date().toISOString()});B(S=>[...S,C])},deleteCalendarEvent:async T=>{await vt.deleteCalendarEvent(T),B(C=>C.filter(S=>S.id!==T))},submitGrievance:async(T,C,S)=>{if(!h)return;const V={userId:h.id,userName:h.employeeName,subject:T,description:C,category:S,status:"NEW",createdAt:new Date().toISOString()},I=await vt.createGrievance(V);X(Te=>[I,...Te])},respondToGrievance:async(T,C)=>{const S={response:C,respondedAt:new Date().toISOString(),status:"RESOLVED"};await vt.updateGrievance(T,S),X(V=>V.map(I=>I.id===T?{...I,...S}:I))}}),[h,Q,g,E,b,J,o]),R=()=>{if(!h)return t?N.jsx(M_,{onBack:()=>s(!1)}):N.jsx(hT,{onLoginClick:T=>{T&&Me(T),s(!0)}});switch(be&&(Ee(be),Me(null)),h.role){case Co.ADMIN:return N.jsx(rx,{activeTab:ge,setActiveTab:Ee});case Co.MEMBER:return N.jsx(ix,{activeTab:ge,setActiveTab:Ee});default:return N.jsx(M_,{onBack:()=>s(!1)})}};return r?N.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#fcfaf7] transition-colors duration-300",children:N.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.3)]"})}):N.jsx(ME.Provider,{value:D,children:N.jsxs("div",{className:"min-h-screen font-sans bg-[#fcfaf7] transition-colors duration-300",children:[N.jsx(iT,{}),N.jsx("main",{className:"container mx-auto p-4 md:p-8 pb-32",children:N.jsx(et.Suspense,{fallback:N.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:N.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"})}),children:R()})}),h&&N.jsx("footer",{className:"w-full py-12 bg-white/5 border-t border-orange-100 backdrop-blur-sm mt-auto",children:N.jsx("div",{className:"container mx-auto px-4",children:N.jsx(U_,{})})})]})})}const FE=document.getElementById("root");if(!FE)throw new Error("Could not find root element to mount to");const ox=eT.createRoot(FE);ox.render(N.jsx(F_.StrictMode,{children:N.jsx(sx,{})}));export{aT as C,ax as I,sT as M,lT as P,Co as U,rT as a,N as j,et as r,LE as u};
