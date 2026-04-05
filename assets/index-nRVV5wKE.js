const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboard-Bj4cUvdb.js","assets/CheckCircleIcon-BRpeCjFD.js","assets/MemberDashboard-C-20tPBp.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function nv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fd={exports:{}},Ka={},Ud={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function vT(){if(Xg)return xe;Xg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function N(P){return P===null||typeof P!="object"?null:(P=A&&P[A]||P["@@iterator"],typeof P=="function"?P:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function q(P,H,ae){this.props=P,this.context=H,this.refs=Y,this.updater=ae||B}q.prototype.isReactComponent={},q.prototype.setState=function(P,H){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,H,"setState")},q.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function pe(){}pe.prototype=q.prototype;function Ee(P,H,ae){this.props=P,this.context=H,this.refs=Y,this.updater=ae||B}var Se=Ee.prototype=new pe;Se.constructor=Ee,Q(Se,q.prototype),Se.isPureReactComponent=!0;var fe=Array.isArray,Ce=Object.prototype.hasOwnProperty,Re={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function R(P,H,ae){var ke,ve={},je=null,Pe=null;if(H!=null)for(ke in H.ref!==void 0&&(Pe=H.ref),H.key!==void 0&&(je=""+H.key),H)Ce.call(H,ke)&&!b.hasOwnProperty(ke)&&(ve[ke]=H[ke]);var Me=arguments.length-2;if(Me===1)ve.children=ae;else if(1<Me){for(var _e=Array(Me),ft=0;ft<Me;ft++)_e[ft]=arguments[ft+2];ve.children=_e}if(P&&P.defaultProps)for(ke in Me=P.defaultProps,Me)ve[ke]===void 0&&(ve[ke]=Me[ke]);return{$$typeof:n,type:P,key:je,ref:Pe,props:ve,_owner:Re.current}}function C(P,H){return{$$typeof:n,type:P.type,key:H,ref:P.ref,props:P.props,_owner:P._owner}}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function I(P){var H={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ae){return H[ae]})}var D=/\/+/g;function T(P,H){return typeof P=="object"&&P!==null&&P.key!=null?I(""+P.key):H.toString(36)}function ue(P,H,ae,ke,ve){var je=typeof P;(je==="undefined"||je==="boolean")&&(P=null);var Pe=!1;if(P===null)Pe=!0;else switch(je){case"string":case"number":Pe=!0;break;case"object":switch(P.$$typeof){case n:case e:Pe=!0}}if(Pe)return Pe=P,ve=ve(Pe),P=ke===""?"."+T(Pe,0):ke,fe(ve)?(ae="",P!=null&&(ae=P.replace(D,"$&/")+"/"),ue(ve,H,ae,"",function(ft){return ft})):ve!=null&&(V(ve)&&(ve=C(ve,ae+(!ve.key||Pe&&Pe.key===ve.key?"":(""+ve.key).replace(D,"$&/")+"/")+P)),H.push(ve)),1;if(Pe=0,ke=ke===""?".":ke+":",fe(P))for(var Me=0;Me<P.length;Me++){je=P[Me];var _e=ke+T(je,Me);Pe+=ue(je,H,ae,_e,ve)}else if(_e=N(P),typeof _e=="function")for(P=_e.call(P),Me=0;!(je=P.next()).done;)je=je.value,_e=ke+T(je,Me++),Pe+=ue(je,H,ae,_e,ve);else if(je==="object")throw H=String(P),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Pe}function ze(P,H,ae){if(P==null)return P;var ke=[],ve=0;return ue(P,ke,"","",function(je){return H.call(ae,je,ve++)}),ke}function Ue(P){if(P._status===-1){var H=P._result;H=H(),H.then(function(ae){(P._status===0||P._status===-1)&&(P._status=1,P._result=ae)},function(ae){(P._status===0||P._status===-1)&&(P._status=2,P._result=ae)}),P._status===-1&&(P._status=0,P._result=H)}if(P._status===1)return P._result.default;throw P._result}var Ae={current:null},X={transition:null},oe={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:X,ReactCurrentOwner:Re};return xe.Children={map:ze,forEach:function(P,H,ae){ze(P,function(){H.apply(this,arguments)},ae)},count:function(P){var H=0;return ze(P,function(){H++}),H},toArray:function(P){return ze(P,function(H){return H})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},xe.Component=q,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=Ee,xe.StrictMode=i,xe.Suspense=g,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,xe.cloneElement=function(P,H,ae){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var ke=Q({},P.props),ve=P.key,je=P.ref,Pe=P._owner;if(H!=null){if(H.ref!==void 0&&(je=H.ref,Pe=Re.current),H.key!==void 0&&(ve=""+H.key),P.type&&P.type.defaultProps)var Me=P.type.defaultProps;for(_e in H)Ce.call(H,_e)&&!b.hasOwnProperty(_e)&&(ke[_e]=H[_e]===void 0&&Me!==void 0?Me[_e]:H[_e])}var _e=arguments.length-2;if(_e===1)ke.children=ae;else if(1<_e){Me=Array(_e);for(var ft=0;ft<_e;ft++)Me[ft]=arguments[ft+2];ke.children=Me}return{$$typeof:n,type:P.type,key:ve,ref:je,props:ke,_owner:Pe}},xe.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},xe.createElement=R,xe.createFactory=function(P){var H=R.bind(null,P);return H.type=P,H},xe.createRef=function(){return{current:null}},xe.forwardRef=function(P){return{$$typeof:f,render:P}},xe.isValidElement=V,xe.lazy=function(P){return{$$typeof:w,_payload:{_status:-1,_result:P},_init:Ue}},xe.memo=function(P,H){return{$$typeof:y,type:P,compare:H===void 0?null:H}},xe.startTransition=function(P){var H=X.transition;X.transition={};try{P()}finally{X.transition=H}},xe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},xe.useCallback=function(P,H){return Ae.current.useCallback(P,H)},xe.useContext=function(P){return Ae.current.useContext(P)},xe.useDebugValue=function(){},xe.useDeferredValue=function(P){return Ae.current.useDeferredValue(P)},xe.useEffect=function(P,H){return Ae.current.useEffect(P,H)},xe.useId=function(){return Ae.current.useId()},xe.useImperativeHandle=function(P,H,ae){return Ae.current.useImperativeHandle(P,H,ae)},xe.useInsertionEffect=function(P,H){return Ae.current.useInsertionEffect(P,H)},xe.useLayoutEffect=function(P,H){return Ae.current.useLayoutEffect(P,H)},xe.useMemo=function(P,H){return Ae.current.useMemo(P,H)},xe.useReducer=function(P,H,ae){return Ae.current.useReducer(P,H,ae)},xe.useRef=function(P){return Ae.current.useRef(P)},xe.useState=function(P){return Ae.current.useState(P)},xe.useSyncExternalStore=function(P,H,ae){return Ae.current.useSyncExternalStore(P,H,ae)},xe.useTransition=function(){return Ae.current.useTransition()},xe.version="18.2.0",xe}var Zg;function Lf(){return Zg||(Zg=1,Ud.exports=vT()),Ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function wT(){if(ey)return Ka;ey=1;var n=Lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,y){var w,A={},N=null,B=null;y!==void 0&&(N=""+y),g.key!==void 0&&(N=""+g.key),g.ref!==void 0&&(B=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(A[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)A[w]===void 0&&(A[w]=g[w]);return{$$typeof:e,type:f,key:N,ref:B,props:A,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=h,Ka.jsxs=h,Ka}var ty;function ET(){return ty||(ty=1,Fd.exports=wT()),Fd.exports}var k=ET(),Ke=Lf();const rv=nv(Ke);var Gu={},jd={exports:{}},en={},Bd={exports:{}},zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function TT(){return ny||(ny=1,(function(n){function e(X,oe){var P=X.length;X.push(oe);e:for(;0<P;){var H=P-1>>>1,ae=X[H];if(0<o(ae,oe))X[H]=oe,X[P]=ae,P=H;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var oe=X[0],P=X.pop();if(P!==oe){X[0]=P;e:for(var H=0,ae=X.length,ke=ae>>>1;H<ke;){var ve=2*(H+1)-1,je=X[ve],Pe=ve+1,Me=X[Pe];if(0>o(je,P))Pe<ae&&0>o(Me,je)?(X[H]=Me,X[Pe]=P,H=Pe):(X[H]=je,X[ve]=P,H=ve);else if(Pe<ae&&0>o(Me,P))X[H]=Me,X[Pe]=P,H=Pe;else break e}}return oe}function o(X,oe){var P=X.sortIndex-oe.sortIndex;return P!==0?P:X.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var g=[],y=[],w=1,A=null,N=3,B=!1,Q=!1,Y=!1,q=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Se(X){for(var oe=t(y);oe!==null;){if(oe.callback===null)i(y);else if(oe.startTime<=X)i(y),oe.sortIndex=oe.expirationTime,e(g,oe);else break;oe=t(y)}}function fe(X){if(Y=!1,Se(X),!Q)if(t(g)!==null)Q=!0,Ue(Ce);else{var oe=t(y);oe!==null&&Ae(fe,oe.startTime-X)}}function Ce(X,oe){Q=!1,Y&&(Y=!1,pe(R),R=-1),B=!0;var P=N;try{for(Se(oe),A=t(g);A!==null&&(!(A.expirationTime>oe)||X&&!I());){var H=A.callback;if(typeof H=="function"){A.callback=null,N=A.priorityLevel;var ae=H(A.expirationTime<=oe);oe=n.unstable_now(),typeof ae=="function"?A.callback=ae:A===t(g)&&i(g),Se(oe)}else i(g);A=t(g)}if(A!==null)var ke=!0;else{var ve=t(y);ve!==null&&Ae(fe,ve.startTime-oe),ke=!1}return ke}finally{A=null,N=P,B=!1}}var Re=!1,b=null,R=-1,C=5,V=-1;function I(){return!(n.unstable_now()-V<C)}function D(){if(b!==null){var X=n.unstable_now();V=X;var oe=!0;try{oe=b(!0,X)}finally{oe?T():(Re=!1,b=null)}}else Re=!1}var T;if(typeof Ee=="function")T=function(){Ee(D)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ze=ue.port2;ue.port1.onmessage=D,T=function(){ze.postMessage(null)}}else T=function(){q(D,0)};function Ue(X){b=X,Re||(Re=!0,T())}function Ae(X,oe){R=q(function(){X(n.unstable_now())},oe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){Q||B||(Q=!0,Ue(Ce))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return N},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(X){switch(N){case 1:case 2:case 3:var oe=3;break;default:oe=N}var P=N;N=oe;try{return X()}finally{N=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,oe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var P=N;N=X;try{return oe()}finally{N=P}},n.unstable_scheduleCallback=function(X,oe,P){var H=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?H+P:H):P=H,X){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=P+ae,X={id:w++,callback:oe,priorityLevel:X,startTime:P,expirationTime:ae,sortIndex:-1},P>H?(X.sortIndex=P,e(y,X),t(g)===null&&X===t(y)&&(Y?(pe(R),R=-1):Y=!0,Ae(fe,P-H))):(X.sortIndex=ae,e(g,X),Q||B||(Q=!0,Ue(Ce))),X},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(X){var oe=N;return function(){var P=N;N=oe;try{return X.apply(this,arguments)}finally{N=P}}}})(zd)),zd}var ry;function IT(){return ry||(ry=1,Bd.exports=TT()),Bd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function ST(){if(iy)return en;iy=1;var n=Lf(),e=IT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function N(r){return g.call(A,r)?!0:g.call(w,r)?!1:y.test(r)?A[r]=!0:(w[r]=!0,!1)}function B(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function Q(r,s,a,c){if(s===null||typeof s>"u"||B(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function Y(r,s,a,c,d,p,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=p,this.removeEmptyString=v}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){q[r]=new Y(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];q[s]=new Y(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){q[r]=new Y(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){q[r]=new Y(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){q[r]=new Y(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){q[r]=new Y(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){q[r]=new Y(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){q[r]=new Y(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){q[r]=new Y(r,5,!1,r.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function Ee(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(pe,Ee);q[s]=new Y(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(pe,Ee);q[s]=new Y(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(pe,Ee);q[s]=new Y(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){q[r]=new Y(r,1,!1,r.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){q[r]=new Y(r,1,!1,r.toLowerCase(),null,!0,!0)});function Se(r,s,a,c){var d=q.hasOwnProperty(s)?q[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(Q(s,a,d,c)&&(a=null),c||d===null?N(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var fe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Re=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),I=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Ae=Symbol.for("react.offscreen"),X=Symbol.iterator;function oe(r){return r===null||typeof r!="object"?null:(r=X&&r[X]||r["@@iterator"],typeof r=="function"?r:null)}var P=Object.assign,H;function ae(r){if(H===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);H=s&&s[1]||""}return`
`+H+r}var ke=!1;function ve(r,s){if(!r||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var c=U}Reflect.construct(r,[],s)}else{try{s.call()}catch(U){c=U}r.call(s.prototype)}else{try{throw Error()}catch(U){c=U}r()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,S=p.length-1;1<=v&&0<=S&&d[v]!==p[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==p[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==p[S]){var x=`
`+d[v].replace(" at new "," at ");return r.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",r.displayName)),x}while(1<=v&&0<=S);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?ae(r):""}function je(r){switch(r.tag){case 5:return ae(r.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return r=ve(r.type,!1),r;case 11:return r=ve(r.type.render,!1),r;case 1:return r=ve(r.type,!0),r;default:return""}}function Pe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case b:return"Fragment";case Re:return"Portal";case C:return"Profiler";case R:return"StrictMode";case T:return"Suspense";case ue:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case I:return(r.displayName||"Context")+".Consumer";case V:return(r._context.displayName||"Context")+".Provider";case D:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ze:return s=r.displayName||null,s!==null?s:Pe(r.type)||"Memo";case Ue:s=r._payload,r=r._init;try{return Pe(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(s);case 8:return s===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _e(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ft(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ph(r){var s=ft(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function zs(r){r._valueTracker||(r._valueTracker=ph(r))}function Zo(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=ft(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Jr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function $s(r,s){var a=s.checked;return P({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Dl(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=_e(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function qs(r,s){s=s.checked,s!=null&&Se(r,"checked",s,!1)}function Ki(r,s){qs(r,s);var a=_e(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?pt(r,s.type,a):s.hasOwnProperty("defaultValue")&&pt(r,s.type,_e(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function ea(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function pt(r,s,a){(s!=="number"||Jr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var lt=Array.isArray;function Pn(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+_e(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function ta(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return P({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function na(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(lt(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:_e(a)}}function Ol(r,s){var a=_e(s.value),c=_e(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Xr(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ra(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hs(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ra(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Zr,Vl=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Zr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Gi(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ll=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(r){Ll.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),ei[s]=ei[r]})});function ti(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||ei.hasOwnProperty(r)&&ei[r]?(""+s).trim():s+"px"}function Ws(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ti(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var ia=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xn(r,s){if(s){if(ia[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ks(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ni=null;function Gs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var vr=null,wr=null,st=null;function sa(r){if(r=ba(r)){if(typeof vr!="function")throw Error(t(280));var s=r.stateNode;s&&(s=uu(s),vr(r.stateNode,r.type,s))}}function ri(r){wr?st?st.push(r):st=[r]:wr=r}function ii(){if(wr){var r=wr,s=st;if(st=wr=null,sa(r),s)for(r=0;r<s.length;r++)sa(s[r])}}function Ml(r,s){return r(s)}function Fl(){}var Wn=!1;function Ul(r,s,a){if(Wn)return r(s,a);Wn=!0;try{return Ml(r,s,a)}finally{Wn=!1,(wr!==null||st!==null)&&(Fl(),ii())}}function Qi(r,s){var a=r.stateNode;if(a===null)return null;var c=uu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var si=!1;if(f)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){si=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{si=!1}function jl(r,s,a,c,d,p,v,S,x){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(K){this.onError(K)}}var Er=!1,Kn=null,Qs=!1,_n=null,Bl={onError:function(r){Er=!0,Kn=r}};function zl(r,s,a,c,d,p,v,S,x){Er=!1,Kn=null,jl.apply(Bl,arguments)}function oa(r,s,a,c,d,p,v,S,x){if(zl.apply(this,arguments),Er){if(Er){var U=Kn;Er=!1,Kn=null}else throw Error(t(198));Qs||(Qs=!0,_n=U)}}function Nn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function aa(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function $l(r){if(Nn(r)!==r)throw Error(t(188))}function ql(r){var s=r.alternate;if(!s){if(s=Nn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return $l(d),r;if(p===c)return $l(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=p;break}if(S===c){v=!0,c=d,a=p;break}S=S.sibling}if(!v){for(S=p.child;S;){if(S===a){v=!0,a=p,c=d;break}if(S===c){v=!0,c=p,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Hl(r){return r=ql(r),r!==null?Yi(r):null}function Yi(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Yi(r);if(s!==null)return s;r=r.sibling}return null}var la=e.unstable_scheduleCallback,Ys=e.unstable_cancelCallback,Ji=e.unstable_shouldYield,Tr=e.unstable_requestPaint,Ye=e.unstable_now,mh=e.unstable_getCurrentPriorityLevel,Js=e.unstable_ImmediatePriority,ua=e.unstable_UserBlockingPriority,Xi=e.unstable_NormalPriority,ca=e.unstable_LowPriority,Xs=e.unstable_IdlePriority,Zi=null,on=null;function Wl(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Zi,r,void 0,(r.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:es,Gn=Math.log,vn=Math.LN2;function es(r){return r>>>=0,r===0?32:31-(Gn(r)/vn|0)|0}var Qn=64,ai=4194304;function $e(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ir(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,p=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=$e(S):(p&=v,p!==0&&(c=$e(p)))}else v=a&~d,v!==0?c=$e(v):p!==0&&(c=$e(p));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-an(s),d=1<<a,c|=r[a],s&=~d;return c}function ts(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ns(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var v=31-an(p),S=1<<v,x=d[v];x===-1?((S&a)===0||(S&c)!==0)&&(d[v]=ts(S,s)):x<=s&&(r.expiredLanes|=S),p&=~S}}function ha(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function da(){var r=Qn;return Qn<<=1,(Qn&4194240)===0&&(Qn=64),r}function fa(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function rs(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-an(s),r[s]=a}function gh(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-an(a),p=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~p}}function pa(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-an(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Ve=0;function Yn(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ma,Zs,ga,ya,_a,Jn=!1,eo=[],Xn=null,Zn=null,Pt=null,is=new Map,Sr=new Map,ln=[],Kl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function li(r,s){switch(r){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":is.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(s.pointerId)}}function bn(r,s,a,c,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},s!==null&&(s=ba(s),s!==null&&Zs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function Gl(r,s,a,c,d){switch(s){case"focusin":return Xn=bn(Xn,r,s,a,c,d),!0;case"dragenter":return Zn=bn(Zn,r,s,a,c,d),!0;case"mouseover":return Pt=bn(Pt,r,s,a,c,d),!0;case"pointerover":var p=d.pointerId;return is.set(p,bn(is.get(p)||null,r,s,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Sr.set(p,bn(Sr.get(p)||null,r,s,a,c,d)),!0}return!1}function to(r){var s=ls(r.target);if(s!==null){var a=Nn(s);if(a!==null){if(s=a.tag,s===13){if(s=aa(a),s!==null){r.blockedOn=s,_a(r.priority,function(){ga(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function We(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=no(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);ni=c,a.target.dispatchEvent(c),ni=null}else return s=ba(a),s!==null&&Zs(s),r.blockedOn=a,!1;s.shift()}return!0}function Ql(r,s,a){We(r)&&a.delete(s)}function yh(){Jn=!1,Xn!==null&&We(Xn)&&(Xn=null),Zn!==null&&We(Zn)&&(Zn=null),Pt!==null&&We(Pt)&&(Pt=null),is.forEach(Ql),Sr.forEach(Ql)}function ui(r,s){r.blockedOn===s&&(r.blockedOn=null,Jn||(Jn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yh)))}function ci(r){function s(d){return ui(d,r)}if(0<eo.length){ui(eo[0],r);for(var a=1;a<eo.length;a++){var c=eo[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Xn!==null&&ui(Xn,r),Zn!==null&&ui(Zn,r),Pt!==null&&ui(Pt,r),is.forEach(s),Sr.forEach(s),a=0;a<ln.length;a++)c=ln[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<ln.length&&(a=ln[0],a.blockedOn===null);)to(a),a.blockedOn===null&&ln.shift()}var Ar=fe.ReactCurrentBatchConfig,Rr=!0;function er(r,s,a,c){var d=Ve,p=Ar.transition;Ar.transition=null;try{Ve=1,va(r,s,a,c)}finally{Ve=d,Ar.transition=p}}function Yl(r,s,a,c){var d=Ve,p=Ar.transition;Ar.transition=null;try{Ve=4,va(r,s,a,c)}finally{Ve=d,Ar.transition=p}}function va(r,s,a,c){if(Rr){var d=no(r,s,a,c);if(d===null)Ch(r,s,c,tr,a),li(r,c);else if(Gl(d,r,s,a,c))c.stopPropagation();else if(li(r,c),s&4&&-1<Kl.indexOf(r)){for(;d!==null;){var p=ba(d);if(p!==null&&ma(p),p=no(r,s,a,c),p===null&&Ch(r,s,c,tr,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Ch(r,s,c,null,a)}}var tr=null;function no(r,s,a,c){if(tr=null,r=Gs(c),r=ls(r),r!==null)if(s=Nn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=aa(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return tr=r,null}function ro(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mh()){case Js:return 1;case ua:return 4;case Xi:case ca:return 16;case Xs:return 536870912;default:return 16}default:return 16}}var un=null,io=null,kr=null;function Jl(){if(kr)return kr;var r,s=io,a=s.length,c,d="value"in un?un.value:un.textContent,p=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[p-c];c++);return kr=d.slice(r,1<c?1-c:void 0)}function ss(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function nr(){return!0}function wa(){return!1}function Lt(r){function s(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?nr:wa,this.isPropagationStopped=wa,this}return P(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),s}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=Lt(rr),hi=P({},rr,{view:0,detail:0}),so=Lt(hi),oo,ao,cn,as=P({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Te,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==cn&&(cn&&r.type==="mousemove"?(oo=r.screenX-cn.screenX,ao=r.screenY-cn.screenY):ao=oo=0,cn=r),oo)},movementY:function(r){return"movementY"in r?r.movementY:ao}}),Ea=Lt(as),Xl=P({},as,{dataTransfer:0}),Zl=Lt(Xl),lo=P({},hi,{relatedTarget:0}),xt=Lt(lo),eu=P({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),tu=Lt(eu),di=P({},rr,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),u=Lt(di),m=P({},rr,{data:0}),_=Lt(m),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=j[r])?!!s[r]:!1}function Te(){return Z}var ut=P({},hi,{key:function(r){if(r.key){var s=E[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=ss(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?M[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Te,charCode:function(r){return r.type==="keypress"?ss(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ss(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),He=Lt(ut),mt=P({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hn=Lt(mt),Cr=P({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Te}),ir=Lt(Cr),sr=P({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uo=Lt(sr),Ta=P({},as,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),fE=Lt(Ta),pE=[9,13,27,32],_h=f&&"CompositionEvent"in window,Ia=null;f&&"documentMode"in document&&(Ia=document.documentMode);var mE=f&&"TextEvent"in window&&!Ia,$p=f&&(!_h||Ia&&8<Ia&&11>=Ia),qp=" ",Hp=!1;function Wp(r,s){switch(r){case"keyup":return pE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var co=!1;function gE(r,s){switch(r){case"compositionend":return Kp(s);case"keypress":return s.which!==32?null:(Hp=!0,qp);case"textInput":return r=s.data,r===qp&&Hp?null:r;default:return null}}function yE(r,s){if(co)return r==="compositionend"||!_h&&Wp(r,s)?(r=Jl(),kr=io=un=null,co=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return $p&&s.locale!=="ko"?null:s.data;default:return null}}var _E={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!_E[r.type]:s==="textarea"}function Qp(r,s,a,c){ri(c),s=ou(s,"onChange"),0<s.length&&(a=new os("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Sa=null,Aa=null;function vE(r){fm(r,0)}function nu(r){var s=go(r);if(Zo(s))return r}function wE(r,s){if(r==="change")return s}var Yp=!1;if(f){var vh;if(f){var wh="oninput"in document;if(!wh){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),wh=typeof Jp.oninput=="function"}vh=wh}else vh=!1;Yp=vh&&(!document.documentMode||9<document.documentMode)}function Xp(){Sa&&(Sa.detachEvent("onpropertychange",Zp),Aa=Sa=null)}function Zp(r){if(r.propertyName==="value"&&nu(Aa)){var s=[];Qp(s,Aa,r,Gs(r)),Ul(vE,s)}}function EE(r,s,a){r==="focusin"?(Xp(),Sa=s,Aa=a,Sa.attachEvent("onpropertychange",Zp)):r==="focusout"&&Xp()}function TE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return nu(Aa)}function IE(r,s){if(r==="click")return nu(s)}function SE(r,s){if(r==="input"||r==="change")return nu(s)}function AE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Dn=typeof Object.is=="function"?Object.is:AE;function Ra(r,s){if(Dn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Dn(r[d],s[d]))return!1}return!0}function em(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function tm(r,s){var a=em(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=em(a)}}function nm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?nm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function rm(){for(var r=window,s=Jr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Jr(r.document)}return s}function Eh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function RE(r){var s=rm(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&nm(a.ownerDocument.documentElement,a)){if(c!==null&&Eh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!r.extend&&p>c&&(d=c,c=p,p=d),d=tm(a,p);var v=tm(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),p>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var kE=f&&"documentMode"in document&&11>=document.documentMode,ho=null,Th=null,ka=null,Ih=!1;function im(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ih||ho==null||ho!==Jr(c)||(c=ho,"selectionStart"in c&&Eh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ka&&Ra(ka,c)||(ka=c,c=ou(Th,"onSelect"),0<c.length&&(s=new os("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=ho)))}function ru(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var fo={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},Sh={},sm={};f&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function iu(r){if(Sh[r])return Sh[r];if(!fo[r])return r;var s=fo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in sm)return Sh[r]=s[a];return r}var om=iu("animationend"),am=iu("animationiteration"),lm=iu("animationstart"),um=iu("transitionend"),cm=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(r,s){cm.set(r,s),l(s,[r])}for(var Ah=0;Ah<hm.length;Ah++){var Rh=hm[Ah],CE=Rh.toLowerCase(),PE=Rh[0].toUpperCase()+Rh.slice(1);fi(CE,"on"+PE)}fi(om,"onAnimationEnd"),fi(am,"onAnimationIteration"),fi(lm,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(um,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function dm(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,oa(c,s,void 0,r),r.currentTarget=null}function fm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var p=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],x=S.instance,U=S.currentTarget;if(S=S.listener,x!==p&&d.isPropagationStopped())break e;dm(d,S,U),p=x}else for(v=0;v<c.length;v++){if(S=c[v],x=S.instance,U=S.currentTarget,S=S.listener,x!==p&&d.isPropagationStopped())break e;dm(d,S,U),p=x}}}if(Qs)throw r=_n,Qs=!1,_n=null,r}function Je(r,s){var a=s[Oh];a===void 0&&(a=s[Oh]=new Set);var c=r+"__bubble";a.has(c)||(pm(s,r,2,!1),a.add(c))}function kh(r,s,a){var c=0;s&&(c|=4),pm(a,r,c,s)}var su="_reactListening"+Math.random().toString(36).slice(2);function Pa(r){if(!r[su]){r[su]=!0,i.forEach(function(a){a!=="selectionchange"&&(xE.has(a)||kh(a,!1,r),kh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[su]||(s[su]=!0,kh("selectionchange",!1,s))}}function pm(r,s,a,c){switch(ro(s)){case 1:var d=er;break;case 4:d=Yl;break;default:d=va}a=d.bind(null,s,a,r),d=void 0,!si||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Ch(r,s,a,c,d){var p=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var x=v.tag;if((x===3||x===4)&&(x=v.stateNode.containerInfo,x===d||x.nodeType===8&&x.parentNode===d))return;v=v.return}for(;S!==null;){if(v=ls(S),v===null)return;if(x=v.tag,x===5||x===6){c=p=v;continue e}S=S.parentNode}}c=c.return}Ul(function(){var U=p,K=Gs(a),G=[];e:{var W=cm.get(r);if(W!==void 0){var te=os,ie=r;switch(r){case"keypress":if(ss(a)===0)break e;case"keydown":case"keyup":te=He;break;case"focusin":ie="focus",te=xt;break;case"focusout":ie="blur",te=xt;break;case"beforeblur":case"afterblur":te=xt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Zl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=ir;break;case om:case am:case lm:te=tu;break;case um:te=uo;break;case"scroll":te=so;break;case"wheel":te=fE;break;case"copy":case"cut":case"paste":te=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=hn}var se=(s&4)!==0,ct=!se&&r==="scroll",L=se?W!==null?W+"Capture":null:W;se=[];for(var O=U,F;O!==null;){F=O;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,L!==null&&(J=Qi(O,L),J!=null&&se.push(xa(O,J,F)))),ct)break;O=O.return}0<se.length&&(W=new te(W,ie,null,a,K),G.push({event:W,listeners:se}))}}if((s&7)===0){e:{if(W=r==="mouseover"||r==="pointerover",te=r==="mouseout"||r==="pointerout",W&&a!==ni&&(ie=a.relatedTarget||a.fromElement)&&(ls(ie)||ie[Pr]))break e;if((te||W)&&(W=K.window===K?K:(W=K.ownerDocument)?W.defaultView||W.parentWindow:window,te?(ie=a.relatedTarget||a.toElement,te=U,ie=ie?ls(ie):null,ie!==null&&(ct=Nn(ie),ie!==ct||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=U),te!==ie)){if(se=Ea,J="onMouseLeave",L="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(se=hn,J="onPointerLeave",L="onPointerEnter",O="pointer"),ct=te==null?W:go(te),F=ie==null?W:go(ie),W=new se(J,O+"leave",te,a,K),W.target=ct,W.relatedTarget=F,J=null,ls(K)===U&&(se=new se(L,O+"enter",ie,a,K),se.target=F,se.relatedTarget=ct,J=se),ct=J,te&&ie)t:{for(se=te,L=ie,O=0,F=se;F;F=po(F))O++;for(F=0,J=L;J;J=po(J))F++;for(;0<O-F;)se=po(se),O--;for(;0<F-O;)L=po(L),F--;for(;O--;){if(se===L||L!==null&&se===L.alternate)break t;se=po(se),L=po(L)}se=null}else se=null;te!==null&&mm(G,W,te,se,!1),ie!==null&&ct!==null&&mm(G,ct,ie,se,!0)}}e:{if(W=U?go(U):window,te=W.nodeName&&W.nodeName.toLowerCase(),te==="select"||te==="input"&&W.type==="file")var le=wE;else if(Gp(W))if(Yp)le=SE;else{le=TE;var he=EE}else(te=W.nodeName)&&te.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(le=IE);if(le&&(le=le(r,U))){Qp(G,le,a,K);break e}he&&he(r,W,U),r==="focusout"&&(he=W._wrapperState)&&he.controlled&&W.type==="number"&&pt(W,"number",W.value)}switch(he=U?go(U):window,r){case"focusin":(Gp(he)||he.contentEditable==="true")&&(ho=he,Th=U,ka=null);break;case"focusout":ka=Th=ho=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,im(G,a,K);break;case"selectionchange":if(kE)break;case"keydown":case"keyup":im(G,a,K)}var de;if(_h)e:{switch(r){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else co?Wp(r,a)&&(ye="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&($p&&a.locale!=="ko"&&(co||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&co&&(de=Jl()):(un=K,io="value"in un?un.value:un.textContent,co=!0)),he=ou(U,ye),0<he.length&&(ye=new _(ye,r,null,a,K),G.push({event:ye,listeners:he}),de?ye.data=de:(de=Kp(a),de!==null&&(ye.data=de)))),(de=mE?gE(r,a):yE(r,a))&&(U=ou(U,"onBeforeInput"),0<U.length&&(K=new _("onBeforeInput","beforeinput",null,a,K),G.push({event:K,listeners:U}),K.data=de))}fm(G,s)})}function xa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function ou(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Qi(r,a),p!=null&&c.unshift(xa(r,p,d)),p=Qi(r,s),p!=null&&c.push(xa(r,p,d))),r=r.return}return c}function po(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function mm(r,s,a,c,d){for(var p=s._reactName,v=[];a!==null&&a!==c;){var S=a,x=S.alternate,U=S.stateNode;if(x!==null&&x===c)break;S.tag===5&&U!==null&&(S=U,d?(x=Qi(a,p),x!=null&&v.unshift(xa(a,x,S))):d||(x=Qi(a,p),x!=null&&v.push(xa(a,x,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var NE=/\r\n?/g,bE=/\u0000|\uFFFD/g;function gm(r){return(typeof r=="string"?r:""+r).replace(NE,`
`).replace(bE,"")}function au(r,s,a){if(s=gm(s),gm(r)!==s&&a)throw Error(t(425))}function lu(){}var Ph=null,xh=null;function Nh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var bh=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,OE=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(r){return ym.resolve(null).then(r).catch(VE)}:bh;function VE(r){setTimeout(function(){throw r})}function Dh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),ci(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ci(s)}function pi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function _m(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var mo=Math.random().toString(36).slice(2),or="__reactFiber$"+mo,Na="__reactProps$"+mo,Pr="__reactContainer$"+mo,Oh="__reactEvents$"+mo,LE="__reactListeners$"+mo,ME="__reactHandles$"+mo;function ls(r){var s=r[or];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Pr]||a[or]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=_m(r);r!==null;){if(a=r[or])return a;r=_m(r)}return s}r=a,a=r.parentNode}return null}function ba(r){return r=r[or]||r[Pr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function go(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function uu(r){return r[Na]||null}var Vh=[],yo=-1;function mi(r){return{current:r}}function Xe(r){0>yo||(r.current=Vh[yo],Vh[yo]=null,yo--)}function Ge(r,s){yo++,Vh[yo]=r.current,r.current=s}var gi={},Mt=mi(gi),Qt=mi(!1),us=gi;function _o(r,s){var a=r.type.contextTypes;if(!a)return gi;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(r){return r=r.childContextTypes,r!=null}function cu(){Xe(Qt),Xe(Mt)}function vm(r,s,a){if(Mt.current!==gi)throw Error(t(168));Ge(Mt,s),Ge(Qt,a)}function wm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return P({},a,c)}function hu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||gi,us=Mt.current,Ge(Mt,r),Ge(Qt,Qt.current),!0}function Em(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=wm(r,s,us),c.__reactInternalMemoizedMergedChildContext=r,Xe(Qt),Xe(Mt),Ge(Mt,r)):Xe(Qt),Ge(Qt,a)}var xr=null,du=!1,Lh=!1;function Tm(r){xr===null?xr=[r]:xr.push(r)}function FE(r){du=!0,Tm(r)}function yi(){if(!Lh&&xr!==null){Lh=!0;var r=0,s=Ve;try{var a=xr;for(Ve=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}xr=null,du=!1}catch(d){throw xr!==null&&(xr=xr.slice(r+1)),la(Js,yi),d}finally{Ve=s,Lh=!1}}return null}var vo=[],wo=0,fu=null,pu=0,wn=[],En=0,cs=null,Nr=1,br="";function hs(r,s){vo[wo++]=pu,vo[wo++]=fu,fu=r,pu=s}function Im(r,s,a){wn[En++]=Nr,wn[En++]=br,wn[En++]=cs,cs=r;var c=Nr;r=br;var d=32-an(c)-1;c&=~(1<<d),a+=1;var p=32-an(s)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Nr=1<<32-an(s)+d|a<<d|c,br=p+r}else Nr=1<<p|a<<d|c,br=r}function Mh(r){r.return!==null&&(hs(r,1),Im(r,1,0))}function Fh(r){for(;r===fu;)fu=vo[--wo],vo[wo]=null,pu=vo[--wo],vo[wo]=null;for(;r===cs;)cs=wn[--En],wn[En]=null,br=wn[--En],wn[En]=null,Nr=wn[--En],wn[En]=null}var dn=null,fn=null,et=!1,On=null;function Sm(r,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Am(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,dn=r,fn=pi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,dn=r,fn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=cs!==null?{id:Nr,overflow:br}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,dn=r,fn=null,!0):!1;default:return!1}}function Uh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function jh(r){if(et){var s=fn;if(s){var a=s;if(!Am(r,s)){if(Uh(r))throw Error(t(418));s=pi(a.nextSibling);var c=dn;s&&Am(r,s)?Sm(c,a):(r.flags=r.flags&-4097|2,et=!1,dn=r)}}else{if(Uh(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,dn=r}}}function Rm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;dn=r}function mu(r){if(r!==dn)return!1;if(!et)return Rm(r),et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Nh(r.type,r.memoizedProps)),s&&(s=fn)){if(Uh(r))throw km(),Error(t(418));for(;s;)Sm(r,s),s=pi(s.nextSibling)}if(Rm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){fn=pi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}fn=null}}else fn=dn?pi(r.stateNode.nextSibling):null;return!0}function km(){for(var r=fn;r;)r=pi(r.nextSibling)}function Eo(){fn=dn=null,et=!1}function Bh(r){On===null?On=[r]:On.push(r)}var UE=fe.ReactCurrentBatchConfig;function Vn(r,s){if(r&&r.defaultProps){s=P({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}var gu=mi(null),yu=null,To=null,zh=null;function $h(){zh=To=yu=null}function qh(r){var s=gu.current;Xe(gu),r._currentValue=s}function Hh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Io(r,s){yu=r,zh=To=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Jt=!0),r.firstContext=null)}function Tn(r){var s=r._currentValue;if(zh!==r)if(r={context:r,memoizedValue:s,next:null},To===null){if(yu===null)throw Error(t(308));To=r,yu.dependencies={lanes:0,firstContext:r}}else To=To.next=r;return s}var ds=null;function Wh(r){ds===null?ds=[r]:ds.push(r)}function Cm(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Wh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Dr(r,c)}function Dr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var _i=!1;function Kh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Or(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function vi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Fe&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Dr(r,a)}return d=c.interleaved,d===null?(s.next=s,Wh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Dr(r,a)}function _u(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,pa(r,a)}}function xm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function vu(r,s,a,c){var d=r.updateQueue;_i=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var x=S,U=x.next;x.next=null,v===null?p=U:v.next=U,v=x;var K=r.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==v&&(S===null?K.firstBaseUpdate=U:S.next=U,K.lastBaseUpdate=x))}if(p!==null){var G=d.baseState;v=0,K=U=x=null,S=p;do{var W=S.lane,te=S.eventTime;if((c&W)===W){K!==null&&(K=K.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ie=r,se=S;switch(W=s,te=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){G=ie.call(te,G,W);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,W=typeof ie=="function"?ie.call(te,G,W):ie,W==null)break e;G=P({},G,W);break e;case 2:_i=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,W=d.effects,W===null?d.effects=[S]:W.push(S))}else te={eventTime:te,lane:W,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(U=K=te,x=G):K=K.next=te,v|=W;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;W=S,S=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(K===null&&(x=G),d.baseState=x,d.firstBaseUpdate=U,d.lastBaseUpdate=K,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);ms|=v,r.lanes=v,r.memoizedState=G}}function Nm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var bm=new n.Component().refs;function Gh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:P({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var wu={isMounted:function(r){return(r=r._reactInternals)?Nn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Gt(),d=Ii(r),p=Or(c,d);p.payload=s,a!=null&&(p.callback=a),s=vi(r,p,d),s!==null&&(Fn(s,r,d,c),_u(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Gt(),d=Ii(r),p=Or(c,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=vi(r,p,d),s!==null&&(Fn(s,r,d,c),_u(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Gt(),c=Ii(r),d=Or(a,c);d.tag=2,s!=null&&(d.callback=s),s=vi(r,d,c),s!==null&&(Fn(s,r,c,a),_u(s,r,c))}};function Dm(r,s,a,c,d,p,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,p,v):s.prototype&&s.prototype.isPureReactComponent?!Ra(a,c)||!Ra(d,p):!0}function Om(r,s,a){var c=!1,d=gi,p=s.contextType;return typeof p=="object"&&p!==null?p=Tn(p):(d=Yt(s)?us:Mt.current,c=s.contextTypes,p=(c=c!=null)?_o(r,d):gi),s=new s(a,p),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=wu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),s}function Vm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&wu.enqueueReplaceState(s,s.state,null)}function Qh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs=bm,Kh(r);var p=s.contextType;typeof p=="object"&&p!==null?d.context=Tn(p):(p=Yt(s)?us:Mt.current,d.context=_o(r,p)),d.state=r.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Gh(r,s,p,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&wu.enqueueReplaceState(d,d.state,null),vu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Da(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,p=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(v){var S=d.refs;S===bm&&(S=d.refs={}),v===null?delete S[p]:S[p]=v},s._stringRef=p,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Eu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Lm(r){var s=r._init;return s(r._payload)}function Mm(r){function s(L,O){if(r){var F=L.deletions;F===null?(L.deletions=[O],L.flags|=16):F.push(O)}}function a(L,O){if(!r)return null;for(;O!==null;)s(L,O),O=O.sibling;return null}function c(L,O){for(L=new Map;O!==null;)O.key!==null?L.set(O.key,O):L.set(O.index,O),O=O.sibling;return L}function d(L,O){return L=Ai(L,O),L.index=0,L.sibling=null,L}function p(L,O,F){return L.index=F,r?(F=L.alternate,F!==null?(F=F.index,F<O?(L.flags|=2,O):F):(L.flags|=2,O)):(L.flags|=1048576,O)}function v(L){return r&&L.alternate===null&&(L.flags|=2),L}function S(L,O,F,J){return O===null||O.tag!==6?(O=bd(F,L.mode,J),O.return=L,O):(O=d(O,F),O.return=L,O)}function x(L,O,F,J){var le=F.type;return le===b?K(L,O,F.props.children,J,F.key):O!==null&&(O.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ue&&Lm(le)===O.type)?(J=d(O,F.props),J.ref=Da(L,O,F),J.return=L,J):(J=ju(F.type,F.key,F.props,null,L.mode,J),J.ref=Da(L,O,F),J.return=L,J)}function U(L,O,F,J){return O===null||O.tag!==4||O.stateNode.containerInfo!==F.containerInfo||O.stateNode.implementation!==F.implementation?(O=Dd(F,L.mode,J),O.return=L,O):(O=d(O,F.children||[]),O.return=L,O)}function K(L,O,F,J,le){return O===null||O.tag!==7?(O=vs(F,L.mode,J,le),O.return=L,O):(O=d(O,F),O.return=L,O)}function G(L,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return O=bd(""+O,L.mode,F),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ce:return F=ju(O.type,O.key,O.props,null,L.mode,F),F.ref=Da(L,null,O),F.return=L,F;case Re:return O=Dd(O,L.mode,F),O.return=L,O;case Ue:var J=O._init;return G(L,J(O._payload),F)}if(lt(O)||oe(O))return O=vs(O,L.mode,F,null),O.return=L,O;Eu(L,O)}return null}function W(L,O,F,J){var le=O!==null?O.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return le!==null?null:S(L,O,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:return F.key===le?x(L,O,F,J):null;case Re:return F.key===le?U(L,O,F,J):null;case Ue:return le=F._init,W(L,O,le(F._payload),J)}if(lt(F)||oe(F))return le!==null?null:K(L,O,F,J,null);Eu(L,F)}return null}function te(L,O,F,J,le){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(F)||null,S(O,L,""+J,le);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Ce:return L=L.get(J.key===null?F:J.key)||null,x(O,L,J,le);case Re:return L=L.get(J.key===null?F:J.key)||null,U(O,L,J,le);case Ue:var he=J._init;return te(L,O,F,he(J._payload),le)}if(lt(J)||oe(J))return L=L.get(F)||null,K(O,L,J,le,null);Eu(O,J)}return null}function ie(L,O,F,J){for(var le=null,he=null,de=O,ye=O=0,Rt=null;de!==null&&ye<F.length;ye++){de.index>ye?(Rt=de,de=null):Rt=de.sibling;var Be=W(L,de,F[ye],J);if(Be===null){de===null&&(de=Rt);break}r&&de&&Be.alternate===null&&s(L,de),O=p(Be,O,ye),he===null?le=Be:he.sibling=Be,he=Be,de=Rt}if(ye===F.length)return a(L,de),et&&hs(L,ye),le;if(de===null){for(;ye<F.length;ye++)de=G(L,F[ye],J),de!==null&&(O=p(de,O,ye),he===null?le=de:he.sibling=de,he=de);return et&&hs(L,ye),le}for(de=c(L,de);ye<F.length;ye++)Rt=te(de,L,ye,F[ye],J),Rt!==null&&(r&&Rt.alternate!==null&&de.delete(Rt.key===null?ye:Rt.key),O=p(Rt,O,ye),he===null?le=Rt:he.sibling=Rt,he=Rt);return r&&de.forEach(function(Ri){return s(L,Ri)}),et&&hs(L,ye),le}function se(L,O,F,J){var le=oe(F);if(typeof le!="function")throw Error(t(150));if(F=le.call(F),F==null)throw Error(t(151));for(var he=le=null,de=O,ye=O=0,Rt=null,Be=F.next();de!==null&&!Be.done;ye++,Be=F.next()){de.index>ye?(Rt=de,de=null):Rt=de.sibling;var Ri=W(L,de,Be.value,J);if(Ri===null){de===null&&(de=Rt);break}r&&de&&Ri.alternate===null&&s(L,de),O=p(Ri,O,ye),he===null?le=Ri:he.sibling=Ri,he=Ri,de=Rt}if(Be.done)return a(L,de),et&&hs(L,ye),le;if(de===null){for(;!Be.done;ye++,Be=F.next())Be=G(L,Be.value,J),Be!==null&&(O=p(Be,O,ye),he===null?le=Be:he.sibling=Be,he=Be);return et&&hs(L,ye),le}for(de=c(L,de);!Be.done;ye++,Be=F.next())Be=te(de,L,ye,Be.value,J),Be!==null&&(r&&Be.alternate!==null&&de.delete(Be.key===null?ye:Be.key),O=p(Be,O,ye),he===null?le=Be:he.sibling=Be,he=Be);return r&&de.forEach(function(_T){return s(L,_T)}),et&&hs(L,ye),le}function ct(L,O,F,J){if(typeof F=="object"&&F!==null&&F.type===b&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:e:{for(var le=F.key,he=O;he!==null;){if(he.key===le){if(le=F.type,le===b){if(he.tag===7){a(L,he.sibling),O=d(he,F.props.children),O.return=L,L=O;break e}}else if(he.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ue&&Lm(le)===he.type){a(L,he.sibling),O=d(he,F.props),O.ref=Da(L,he,F),O.return=L,L=O;break e}a(L,he);break}else s(L,he);he=he.sibling}F.type===b?(O=vs(F.props.children,L.mode,J,F.key),O.return=L,L=O):(J=ju(F.type,F.key,F.props,null,L.mode,J),J.ref=Da(L,O,F),J.return=L,L=J)}return v(L);case Re:e:{for(he=F.key;O!==null;){if(O.key===he)if(O.tag===4&&O.stateNode.containerInfo===F.containerInfo&&O.stateNode.implementation===F.implementation){a(L,O.sibling),O=d(O,F.children||[]),O.return=L,L=O;break e}else{a(L,O);break}else s(L,O);O=O.sibling}O=Dd(F,L.mode,J),O.return=L,L=O}return v(L);case Ue:return he=F._init,ct(L,O,he(F._payload),J)}if(lt(F))return ie(L,O,F,J);if(oe(F))return se(L,O,F,J);Eu(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,O!==null&&O.tag===6?(a(L,O.sibling),O=d(O,F),O.return=L,L=O):(a(L,O),O=bd(F,L.mode,J),O.return=L,L=O),v(L)):a(L,O)}return ct}var So=Mm(!0),Fm=Mm(!1),Oa={},ar=mi(Oa),Va=mi(Oa),La=mi(Oa);function fs(r){if(r===Oa)throw Error(t(174));return r}function Yh(r,s){switch(Ge(La,s),Ge(Va,r),Ge(ar,Oa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Hs(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Hs(s,r)}Xe(ar),Ge(ar,s)}function Ao(){Xe(ar),Xe(Va),Xe(La)}function Um(r){fs(La.current);var s=fs(ar.current),a=Hs(s,r.type);s!==a&&(Ge(Va,r),Ge(ar,a))}function Jh(r){Va.current===r&&(Xe(ar),Xe(Va))}var tt=mi(0);function Tu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Xh=[];function Zh(){for(var r=0;r<Xh.length;r++)Xh[r]._workInProgressVersionPrimary=null;Xh.length=0}var Iu=fe.ReactCurrentDispatcher,ed=fe.ReactCurrentBatchConfig,ps=0,nt=null,wt=null,St=null,Su=!1,Ma=!1,Fa=0,jE=0;function Ft(){throw Error(t(321))}function td(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Dn(r[a],s[a]))return!1;return!0}function nd(r,s,a,c,d,p){if(ps=p,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Iu.current=r===null||r.memoizedState===null?qE:HE,r=a(c,d),Ma){p=0;do{if(Ma=!1,Fa=0,25<=p)throw Error(t(301));p+=1,St=wt=null,s.updateQueue=null,Iu.current=WE,r=a(c,d)}while(Ma)}if(Iu.current=ku,s=wt!==null&&wt.next!==null,ps=0,St=wt=nt=null,Su=!1,s)throw Error(t(300));return r}function rd(){var r=Fa!==0;return Fa=0,r}function lr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?nt.memoizedState=St=r:St=St.next=r,St}function In(){if(wt===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=wt.next;var s=St===null?nt.memoizedState:St.next;if(s!==null)St=s,wt=r;else{if(r===null)throw Error(t(310));wt=r,r={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},St===null?nt.memoizedState=St=r:St=St.next=r}return St}function Ua(r,s){return typeof s=="function"?s(r):s}function id(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=wt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var S=v=null,x=null,U=p;do{var K=U.lane;if((ps&K)===K)x!==null&&(x=x.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:r(c,U.action);else{var G={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};x===null?(S=x=G,v=c):x=x.next=G,nt.lanes|=K,ms|=K}U=U.next}while(U!==null&&U!==p);x===null?v=c:x.next=S,Dn(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=x,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do p=d.lane,nt.lanes|=p,ms|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function sd(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=r(p,v.action),v=v.next;while(v!==d);Dn(p,s.memoizedState)||(Jt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,c]}function jm(){}function Bm(r,s){var a=nt,c=In(),d=s(),p=!Dn(c.memoizedState,d);if(p&&(c.memoizedState=d,Jt=!0),c=c.queue,od(qm.bind(null,a,c,r),[r]),c.getSnapshot!==s||p||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,ja(9,$m.bind(null,a,c,d,s),void 0,null),At===null)throw Error(t(349));(ps&30)!==0||zm(a,s,d)}return d}function zm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function $m(r,s,a,c){s.value=a,s.getSnapshot=c,Hm(s)&&Wm(r)}function qm(r,s,a){return a(function(){Hm(s)&&Wm(r)})}function Hm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Dn(r,a)}catch{return!0}}function Wm(r){var s=Dr(r,1);s!==null&&Fn(s,r,1,-1)}function Km(r){var s=lr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:r},s.queue=r,r=r.dispatch=$E.bind(null,nt,r),[s.memoizedState,r]}function ja(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function Gm(){return In().memoizedState}function Au(r,s,a,c){var d=lr();nt.flags|=r,d.memoizedState=ja(1|s,a,void 0,c===void 0?null:c)}function Ru(r,s,a,c){var d=In();c=c===void 0?null:c;var p=void 0;if(wt!==null){var v=wt.memoizedState;if(p=v.destroy,c!==null&&td(c,v.deps)){d.memoizedState=ja(s,a,p,c);return}}nt.flags|=r,d.memoizedState=ja(1|s,a,p,c)}function Qm(r,s){return Au(8390656,8,r,s)}function od(r,s){return Ru(2048,8,r,s)}function Ym(r,s){return Ru(4,2,r,s)}function Jm(r,s){return Ru(4,4,r,s)}function Xm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Zm(r,s,a){return a=a!=null?a.concat([r]):null,Ru(4,4,Xm.bind(null,s,r),a)}function ad(){}function eg(r,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&td(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function tg(r,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&td(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function ng(r,s,a){return(ps&21)===0?(r.baseState&&(r.baseState=!1,Jt=!0),r.memoizedState=a):(Dn(a,s)||(a=da(),nt.lanes|=a,ms|=a,r.baseState=!0),s)}function BE(r,s){var a=Ve;Ve=a!==0&&4>a?a:4,r(!0);var c=ed.transition;ed.transition={};try{r(!1),s()}finally{Ve=a,ed.transition=c}}function rg(){return In().memoizedState}function zE(r,s,a){var c=Ii(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ig(r))sg(s,a);else if(a=Cm(r,s,a,c),a!==null){var d=Gt();Fn(a,r,c,d),og(a,s,c)}}function $E(r,s,a){var c=Ii(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ig(r))sg(s,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var v=s.lastRenderedState,S=p(v,a);if(d.hasEagerState=!0,d.eagerState=S,Dn(S,v)){var x=s.interleaved;x===null?(d.next=d,Wh(s)):(d.next=x.next,x.next=d),s.interleaved=d;return}}catch{}finally{}a=Cm(r,s,d,c),a!==null&&(d=Gt(),Fn(a,r,c,d),og(a,s,c))}}function ig(r){var s=r.alternate;return r===nt||s!==null&&s===nt}function sg(r,s){Ma=Su=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function og(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,pa(r,a)}}var ku={readContext:Tn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},qE={readContext:Tn,useCallback:function(r,s){return lr().memoizedState=[r,s===void 0?null:s],r},useContext:Tn,useEffect:Qm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Au(4194308,4,Xm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Au(4194308,4,r,s)},useInsertionEffect:function(r,s){return Au(4,2,r,s)},useMemo:function(r,s){var a=lr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=lr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=zE.bind(null,nt,r),[c.memoizedState,r]},useRef:function(r){var s=lr();return r={current:r},s.memoizedState=r},useState:Km,useDebugValue:ad,useDeferredValue:function(r){return lr().memoizedState=r},useTransition:function(){var r=Km(!1),s=r[0];return r=BE.bind(null,r[1]),lr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=nt,d=lr();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),At===null)throw Error(t(349));(ps&30)!==0||zm(c,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,Qm(qm.bind(null,c,p,r),[r]),c.flags|=2048,ja(9,$m.bind(null,c,p,a,s),void 0,null),a},useId:function(){var r=lr(),s=At.identifierPrefix;if(et){var a=br,c=Nr;a=(c&~(1<<32-an(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Fa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=jE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},HE={readContext:Tn,useCallback:eg,useContext:Tn,useEffect:od,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:Jm,useMemo:tg,useReducer:id,useRef:Gm,useState:function(){return id(Ua)},useDebugValue:ad,useDeferredValue:function(r){var s=In();return ng(s,wt.memoizedState,r)},useTransition:function(){var r=id(Ua)[0],s=In().memoizedState;return[r,s]},useMutableSource:jm,useSyncExternalStore:Bm,useId:rg,unstable_isNewReconciler:!1},WE={readContext:Tn,useCallback:eg,useContext:Tn,useEffect:od,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:Jm,useMemo:tg,useReducer:sd,useRef:Gm,useState:function(){return sd(Ua)},useDebugValue:ad,useDeferredValue:function(r){var s=In();return wt===null?s.memoizedState=r:ng(s,wt.memoizedState,r)},useTransition:function(){var r=sd(Ua)[0],s=In().memoizedState;return[r,s]},useMutableSource:jm,useSyncExternalStore:Bm,useId:rg,unstable_isNewReconciler:!1};function Ro(r,s){try{var a="",c=s;do a+=je(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:s,stack:d,digest:null}}function ld(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function ud(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var KE=typeof WeakMap=="function"?WeakMap:Map;function ag(r,s,a){a=Or(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Ou||(Ou=!0,Sd=c),ud(r,s)},a}function lg(r,s,a){a=Or(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){ud(r,s)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){ud(r,s),typeof c!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function ug(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new KE;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=aT.bind(null,r,s,a),s.then(r,r))}function cg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function hg(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Or(-1,1),s.tag=2,vi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var GE=fe.ReactCurrentOwner,Jt=!1;function Kt(r,s,a,c){s.child=r===null?Fm(s,null,a,c):So(s,r.child,a,c)}function dg(r,s,a,c,d){a=a.render;var p=s.ref;return Io(s,d),c=nd(r,s,a,c,p,d),a=rd(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Vr(r,s,d)):(et&&a&&Mh(s),s.flags|=1,Kt(r,s,c,d),s.child)}function fg(r,s,a,c,d){if(r===null){var p=a.type;return typeof p=="function"&&!Nd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,pg(r,s,p,c,d)):(r=ju(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(p=r.child,(r.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(v,c)&&r.ref===s.ref)return Vr(r,s,d)}return s.flags|=1,r=Ai(p,c),r.ref=s.ref,r.return=s,s.child=r}function pg(r,s,a,c,d){if(r!==null){var p=r.memoizedProps;if(Ra(p,c)&&r.ref===s.ref)if(Jt=!1,s.pendingProps=c=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Jt=!0);else return s.lanes=r.lanes,Vr(r,s,d)}return cd(r,s,a,c,d)}function mg(r,s,a){var c=s.pendingProps,d=c.children,p=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Co,pn),pn|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ge(Co,pn),pn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ge(Co,pn),pn|=c}else p!==null?(c=p.baseLanes|a,s.memoizedState=null):c=a,Ge(Co,pn),pn|=c;return Kt(r,s,d,a),s.child}function gg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function cd(r,s,a,c,d){var p=Yt(a)?us:Mt.current;return p=_o(s,p),Io(s,d),a=nd(r,s,a,c,p,d),c=rd(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Vr(r,s,d)):(et&&c&&Mh(s),s.flags|=1,Kt(r,s,a,d),s.child)}function yg(r,s,a,c,d){if(Yt(a)){var p=!0;hu(s)}else p=!1;if(Io(s,d),s.stateNode===null)Pu(r,s),Om(s,a,c),Qh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var x=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=Tn(U):(U=Yt(a)?us:Mt.current,U=_o(s,U));var K=a.getDerivedStateFromProps,G=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";G||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||x!==U)&&Vm(s,v,c,U),_i=!1;var W=s.memoizedState;v.state=W,vu(s,c,v,d),x=s.memoizedState,S!==c||W!==x||Qt.current||_i?(typeof K=="function"&&(Gh(s,a,K,c),x=s.memoizedState),(S=_i||Dm(s,a,S,c,W,x,U))?(G||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=x),v.props=c,v.state=x,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Pm(r,s),S=s.memoizedProps,U=s.type===s.elementType?S:Vn(s.type,S),v.props=U,G=s.pendingProps,W=v.context,x=a.contextType,typeof x=="object"&&x!==null?x=Tn(x):(x=Yt(a)?us:Mt.current,x=_o(s,x));var te=a.getDerivedStateFromProps;(K=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==G||W!==x)&&Vm(s,v,c,x),_i=!1,W=s.memoizedState,v.state=W,vu(s,c,v,d);var ie=s.memoizedState;S!==G||W!==ie||Qt.current||_i?(typeof te=="function"&&(Gh(s,a,te,c),ie=s.memoizedState),(U=_i||Dm(s,a,U,c,W,ie,x)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,x),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,x)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ie),v.props=c,v.state=ie,v.context=x,c=U):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(s.flags|=1024),c=!1)}return hd(r,s,a,c,p,d)}function hd(r,s,a,c,d,p){gg(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Em(s,a,!1),Vr(r,s,p);c=s.stateNode,GE.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=So(s,r.child,null,p),s.child=So(s,null,S,p)):Kt(r,s,S,p),s.memoizedState=c.state,d&&Em(s,a,!0),s.child}function _g(r){var s=r.stateNode;s.pendingContext?vm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&vm(r,s.context,!1),Yh(r,s.containerInfo)}function vg(r,s,a,c,d){return Eo(),Bh(d),s.flags|=256,Kt(r,s,a,c),s.child}var dd={dehydrated:null,treeContext:null,retryLane:0};function fd(r){return{baseLanes:r,cachePool:null,transitions:null}}function wg(r,s,a){var c=s.pendingProps,d=tt.current,p=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(p=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ge(tt,d&1),r===null)return jh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,r=c.fallback,p?(c=s.mode,p=s.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Bu(v,c,0,null),r=vs(r,c,a,null),p.return=s,r.return=s,p.sibling=r,s.child=p,s.child.memoizedState=fd(a),s.memoizedState=dd,r):pd(s,v));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return QE(r,s,v,c,S,d,a);if(p){p=c.fallback,v=s.mode,d=r.child,S=d.sibling;var x={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=x,s.deletions=null):(c=Ai(d,x),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?p=Ai(S,p):(p=vs(p,v,a,null),p.flags|=2),p.return=s,c.return=s,c.sibling=p,s.child=c,c=p,p=s.child,v=r.child.memoizedState,v=v===null?fd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=r.childLanes&~a,s.memoizedState=dd,c}return p=r.child,r=p.sibling,c=Ai(p,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function pd(r,s){return s=Bu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Cu(r,s,a,c){return c!==null&&Bh(c),So(s,r.child,null,a),r=pd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function QE(r,s,a,c,d,p,v){if(a)return s.flags&256?(s.flags&=-257,c=ld(Error(t(422))),Cu(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(p=c.fallback,d=s.mode,c=Bu({mode:"visible",children:c.children},d,0,null),p=vs(p,d,v,null),p.flags|=2,c.return=s,p.return=s,c.sibling=p,s.child=c,(s.mode&1)!==0&&So(s,r.child,null,v),s.child.memoizedState=fd(v),s.memoizedState=dd,p);if((s.mode&1)===0)return Cu(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,p=Error(t(419)),c=ld(p,c,void 0),Cu(r,s,v,c)}if(S=(v&r.childLanes)!==0,Jt||S){if(c=At,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Dr(r,d),Fn(c,r,d,-1))}return xd(),c=ld(Error(t(421))),Cu(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=lT.bind(null,r),d._reactRetry=s,null):(r=p.treeContext,fn=pi(d.nextSibling),dn=s,et=!0,On=null,r!==null&&(wn[En++]=Nr,wn[En++]=br,wn[En++]=cs,Nr=r.id,br=r.overflow,cs=s),s=pd(s,c.children),s.flags|=4096,s)}function Eg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Hh(r.return,s,a)}function md(r,s,a,c,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Tg(r,s,a){var c=s.pendingProps,d=c.revealOrder,p=c.tail;if(Kt(r,s,c.children,a),c=tt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Eg(r,a,s);else if(r.tag===19)Eg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Ge(tt,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Tu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),md(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Tu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}md(s,!0,a,null,p);break;case"together":md(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Pu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Vr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ms|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ai(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ai(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function YE(r,s,a){switch(s.tag){case 3:_g(s),Eo();break;case 5:Um(s);break;case 1:Yt(s.type)&&hu(s);break;case 4:Yh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ge(gu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ge(tt,tt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?wg(r,s,a):(Ge(tt,tt.current&1),r=Vr(r,s,a),r!==null?r.sibling:null);Ge(tt,tt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return Tg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(tt,tt.current),c)break;return null;case 22:case 23:return s.lanes=0,mg(r,s,a)}return Vr(r,s,a)}var Ig,gd,Sg,Ag;Ig=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gd=function(){},Sg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,fs(ar.current);var p=null;switch(a){case"input":d=$s(r,d),c=$s(r,c),p=[];break;case"select":d=P({},d,{value:void 0}),c=P({},c,{value:void 0}),p=[];break;case"textarea":d=ta(r,d),c=ta(r,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=lu)}xn(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var x=c[U];if(S=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&x!==S&&(x!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||x&&x.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in x)x.hasOwnProperty(v)&&S[v]!==x[v]&&(a||(a={}),a[v]=x[v])}else a||(p||(p=[]),p.push(U,a)),a=x;else U==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,S=S?S.__html:void 0,x!=null&&S!==x&&(p=p||[]).push(U,x)):U==="children"?typeof x!="string"&&typeof x!="number"||(p=p||[]).push(U,""+x):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(x!=null&&U==="onScroll"&&Je("scroll",r),p||S===x||(p=[])):(p=p||[]).push(U,x))}a&&(p=p||[]).push("style",a);var U=p;(s.updateQueue=U)&&(s.flags|=4)}},Ag=function(r,s,a,c){a!==c&&(s.flags|=4)};function Ba(r,s){if(!et)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ut(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function JE(r,s,a){var c=s.pendingProps;switch(Fh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(s),null;case 1:return Yt(s.type)&&cu(),Ut(s),null;case 3:return c=s.stateNode,Ao(),Xe(Qt),Xe(Mt),Zh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(mu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,On!==null&&(kd(On),On=null))),gd(r,s),Ut(s),null;case 5:Jh(s);var d=fs(La.current);if(a=s.type,r!==null&&s.stateNode!=null)Sg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ut(s),null}if(r=fs(ar.current),mu(s)){c=s.stateNode,a=s.type;var p=s.memoizedProps;switch(c[or]=s,c[Na]=p,r=(s.mode&1)!==0,a){case"dialog":Je("cancel",c),Je("close",c);break;case"iframe":case"object":case"embed":Je("load",c);break;case"video":case"audio":for(d=0;d<Ca.length;d++)Je(Ca[d],c);break;case"source":Je("error",c);break;case"img":case"image":case"link":Je("error",c),Je("load",c);break;case"details":Je("toggle",c);break;case"input":Dl(c,p),Je("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Je("invalid",c);break;case"textarea":na(c,p),Je("invalid",c)}xn(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var S=p[v];v==="children"?typeof S=="string"?c.textContent!==S&&(p.suppressHydrationWarning!==!0&&au(c.textContent,S,r),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&au(c.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Je("scroll",c)}switch(a){case"input":zs(c),ea(c,p,!0);break;case"textarea":zs(c),Xr(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=lu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ra(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[or]=s,r[Na]=c,Ig(r,s,!1,!1),s.stateNode=r;e:{switch(v=Ks(a,c),a){case"dialog":Je("cancel",r),Je("close",r),d=c;break;case"iframe":case"object":case"embed":Je("load",r),d=c;break;case"video":case"audio":for(d=0;d<Ca.length;d++)Je(Ca[d],r);d=c;break;case"source":Je("error",r),d=c;break;case"img":case"image":case"link":Je("error",r),Je("load",r),d=c;break;case"details":Je("toggle",r),d=c;break;case"input":Dl(r,c),d=$s(r,c),Je("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=P({},c,{value:void 0}),Je("invalid",r);break;case"textarea":na(r,c),d=ta(r,c),Je("invalid",r);break;default:d=c}xn(a,d),S=d;for(p in S)if(S.hasOwnProperty(p)){var x=S[p];p==="style"?Ws(r,x):p==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Vl(r,x)):p==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&Gi(r,x):typeof x=="number"&&Gi(r,""+x):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?x!=null&&p==="onScroll"&&Je("scroll",r):x!=null&&Se(r,p,x,v))}switch(a){case"input":zs(r),ea(r,c,!1);break;case"textarea":zs(r),Xr(r);break;case"option":c.value!=null&&r.setAttribute("value",""+_e(c.value));break;case"select":r.multiple=!!c.multiple,p=c.value,p!=null?Pn(r,!!c.multiple,p,!1):c.defaultValue!=null&&Pn(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=lu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ut(s),null;case 6:if(r&&s.stateNode!=null)Ag(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=fs(La.current),fs(ar.current),mu(s)){if(c=s.stateNode,a=s.memoizedProps,c[or]=s,(p=c.nodeValue!==a)&&(r=dn,r!==null))switch(r.tag){case 3:au(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&au(c.nodeValue,a,(r.mode&1)!==0)}p&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[or]=s,s.stateNode=c}return Ut(s),null;case 13:if(Xe(tt),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&fn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)km(),Eo(),s.flags|=98560,p=!1;else if(p=mu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[or]=s}else Eo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ut(s),p=!1}else On!==null&&(kd(On),On=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(tt.current&1)!==0?Et===0&&(Et=3):xd())),s.updateQueue!==null&&(s.flags|=4),Ut(s),null);case 4:return Ao(),gd(r,s),r===null&&Pa(s.stateNode.containerInfo),Ut(s),null;case 10:return qh(s.type._context),Ut(s),null;case 17:return Yt(s.type)&&cu(),Ut(s),null;case 19:if(Xe(tt),p=s.memoizedState,p===null)return Ut(s),null;if(c=(s.flags&128)!==0,v=p.rendering,v===null)if(c)Ba(p,!1);else{if(Et!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=Tu(r),v!==null){for(s.flags|=128,Ba(p,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)p=a,r=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,r=v.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ge(tt,tt.current&1|2),s.child}r=r.sibling}p.tail!==null&&Ye()>Po&&(s.flags|=128,c=!0,Ba(p,!1),s.lanes=4194304)}else{if(!c)if(r=Tu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ba(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!et)return Ut(s),null}else 2*Ye()-p.renderingStartTime>Po&&a!==1073741824&&(s.flags|=128,c=!0,Ba(p,!1),s.lanes=4194304);p.isBackwards?(v.sibling=s.child,s.child=v):(a=p.last,a!==null?a.sibling=v:s.child=v,p.last=v)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ye(),s.sibling=null,a=tt.current,Ge(tt,c?a&1|2:a&1),s):(Ut(s),null);case 22:case 23:return Pd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(pn&1073741824)!==0&&(Ut(s),s.subtreeFlags&6&&(s.flags|=8192)):Ut(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function XE(r,s){switch(Fh(s),s.tag){case 1:return Yt(s.type)&&cu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ao(),Xe(Qt),Xe(Mt),Zh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Jh(s),null;case 13:if(Xe(tt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Eo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Xe(tt),null;case 4:return Ao(),null;case 10:return qh(s.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var xu=!1,jt=!1,ZE=typeof WeakSet=="function"?WeakSet:Set,re=null;function ko(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ot(r,s,c)}else a.current=null}function yd(r,s,a){try{a()}catch(c){ot(r,s,c)}}var Rg=!1;function eT(r,s){if(Ph=Rr,r=rm(),Eh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,S=-1,x=-1,U=0,K=0,G=r,W=null;t:for(;;){for(var te;G!==a||d!==0&&G.nodeType!==3||(S=v+d),G!==p||c!==0&&G.nodeType!==3||(x=v+c),G.nodeType===3&&(v+=G.nodeValue.length),(te=G.firstChild)!==null;)W=G,G=te;for(;;){if(G===r)break t;if(W===a&&++U===d&&(S=v),W===p&&++K===c&&(x=v),(te=G.nextSibling)!==null)break;G=W,W=G.parentNode}G=te}a=S===-1||x===-1?null:{start:S,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(xh={focusedElem:r,selectionRange:a},Rr=!1,re=s;re!==null;)if(s=re,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,re=r;else for(;re!==null;){s=re;try{var ie=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,ct=ie.memoizedState,L=s.stateNode,O=L.getSnapshotBeforeUpdate(s.elementType===s.type?se:Vn(s.type,se),ct);L.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){ot(s,s.return,J)}if(r=s.sibling,r!==null){r.return=s.return,re=r;break}re=s.return}return ie=Rg,Rg=!1,ie}function za(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&yd(s,a,p)}d=d.next}while(d!==c)}}function Nu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function _d(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function kg(r){var s=r.alternate;s!==null&&(r.alternate=null,kg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[or],delete s[Na],delete s[Oh],delete s[LE],delete s[ME])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Cg(r){return r.tag===5||r.tag===3||r.tag===4}function Pg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Cg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function vd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=lu));else if(c!==4&&(r=r.child,r!==null))for(vd(r,s,a),r=r.sibling;r!==null;)vd(r,s,a),r=r.sibling}function wd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(wd(r,s,a),r=r.sibling;r!==null;)wd(r,s,a),r=r.sibling}var Nt=null,Ln=!1;function wi(r,s,a){for(a=a.child;a!==null;)xg(r,s,a),a=a.sibling}function xg(r,s,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Zi,a)}catch{}switch(a.tag){case 5:jt||ko(a,s);case 6:var c=Nt,d=Ln;Nt=null,wi(r,s,a),Nt=c,Ln=d,Nt!==null&&(Ln?(r=Nt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Nt.removeChild(a.stateNode));break;case 18:Nt!==null&&(Ln?(r=Nt,a=a.stateNode,r.nodeType===8?Dh(r.parentNode,a):r.nodeType===1&&Dh(r,a),ci(r)):Dh(Nt,a.stateNode));break;case 4:c=Nt,d=Ln,Nt=a.stateNode.containerInfo,Ln=!0,wi(r,s,a),Nt=c,Ln=d;break;case 0:case 11:case 14:case 15:if(!jt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&yd(a,s,v),d=d.next}while(d!==c)}wi(r,s,a);break;case 1:if(!jt&&(ko(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){ot(a,s,S)}wi(r,s,a);break;case 21:wi(r,s,a);break;case 22:a.mode&1?(jt=(c=jt)||a.memoizedState!==null,wi(r,s,a),jt=c):wi(r,s,a);break;default:wi(r,s,a)}}function Ng(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new ZE),s.forEach(function(c){var d=uT.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Mn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Nt=S.stateNode,Ln=!1;break e;case 3:Nt=S.stateNode.containerInfo,Ln=!0;break e;case 4:Nt=S.stateNode.containerInfo,Ln=!0;break e}S=S.return}if(Nt===null)throw Error(t(160));xg(p,v,d),Nt=null,Ln=!1;var x=d.alternate;x!==null&&(x.return=null),d.return=null}catch(U){ot(d,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)bg(s,r),s=s.sibling}function bg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Mn(s,r),ur(r),c&4){try{za(3,r,r.return),Nu(3,r)}catch(se){ot(r,r.return,se)}try{za(5,r,r.return)}catch(se){ot(r,r.return,se)}}break;case 1:Mn(s,r),ur(r),c&512&&a!==null&&ko(a,a.return);break;case 5:if(Mn(s,r),ur(r),c&512&&a!==null&&ko(a,a.return),r.flags&32){var d=r.stateNode;try{Gi(d,"")}catch(se){ot(r,r.return,se)}}if(c&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,v=a!==null?a.memoizedProps:p,S=r.type,x=r.updateQueue;if(r.updateQueue=null,x!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&qs(d,p),Ks(S,v);var U=Ks(S,p);for(v=0;v<x.length;v+=2){var K=x[v],G=x[v+1];K==="style"?Ws(d,G):K==="dangerouslySetInnerHTML"?Vl(d,G):K==="children"?Gi(d,G):Se(d,K,G,U)}switch(S){case"input":Ki(d,p);break;case"textarea":Ol(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?Pn(d,!!p.multiple,te,!1):W!==!!p.multiple&&(p.defaultValue!=null?Pn(d,!!p.multiple,p.defaultValue,!0):Pn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Na]=p}catch(se){ot(r,r.return,se)}}break;case 6:if(Mn(s,r),ur(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(se){ot(r,r.return,se)}}break;case 3:if(Mn(s,r),ur(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ci(s.containerInfo)}catch(se){ot(r,r.return,se)}break;case 4:Mn(s,r),ur(r);break;case 13:Mn(s,r),ur(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Id=Ye())),c&4&&Ng(r);break;case 22:if(K=a!==null&&a.memoizedState!==null,r.mode&1?(jt=(U=jt)||K,Mn(s,r),jt=U):Mn(s,r),ur(r),c&8192){if(U=r.memoizedState!==null,(r.stateNode.isHidden=U)&&!K&&(r.mode&1)!==0)for(re=r,K=r.child;K!==null;){for(G=re=K;re!==null;){switch(W=re,te=W.child,W.tag){case 0:case 11:case 14:case 15:za(4,W,W.return);break;case 1:ko(W,W.return);var ie=W.stateNode;if(typeof ie.componentWillUnmount=="function"){c=W,a=W.return;try{s=c,ie.props=s.memoizedProps,ie.state=s.memoizedState,ie.componentWillUnmount()}catch(se){ot(c,a,se)}}break;case 5:ko(W,W.return);break;case 22:if(W.memoizedState!==null){Vg(G);continue}}te!==null?(te.return=W,re=te):Vg(G)}K=K.sibling}e:for(K=null,G=r;;){if(G.tag===5){if(K===null){K=G;try{d=G.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=G.stateNode,x=G.memoizedProps.style,v=x!=null&&x.hasOwnProperty("display")?x.display:null,S.style.display=ti("display",v))}catch(se){ot(r,r.return,se)}}}else if(G.tag===6){if(K===null)try{G.stateNode.nodeValue=U?"":G.memoizedProps}catch(se){ot(r,r.return,se)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===r)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===r)break e;for(;G.sibling===null;){if(G.return===null||G.return===r)break e;K===G&&(K=null),G=G.return}K===G&&(K=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Mn(s,r),ur(r),c&4&&Ng(r);break;case 21:break;default:Mn(s,r),ur(r)}}function ur(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Cg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Gi(d,""),c.flags&=-33);var p=Pg(r);wd(r,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Pg(r);vd(r,S,v);break;default:throw Error(t(161))}}catch(x){ot(r,r.return,x)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function tT(r,s,a){re=r,Dg(r)}function Dg(r,s,a){for(var c=(r.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||xu;if(!v){var S=d.alternate,x=S!==null&&S.memoizedState!==null||jt;S=xu;var U=jt;if(xu=v,(jt=x)&&!U)for(re=d;re!==null;)v=re,x=v.child,v.tag===22&&v.memoizedState!==null?Lg(d):x!==null?(x.return=v,re=x):Lg(d);for(;p!==null;)re=p,Dg(p),p=p.sibling;re=d,xu=S,jt=U}Og(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,re=p):Og(r)}}function Og(r){for(;re!==null;){var s=re;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jt||Nu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!jt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Vn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&Nm(s,p,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Nm(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var x=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var G=K.dehydrated;G!==null&&ci(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&_d(s)}catch(W){ot(s,s.return,W)}}if(s===r){re=null;break}if(a=s.sibling,a!==null){a.return=s.return,re=a;break}re=s.return}}function Vg(r){for(;re!==null;){var s=re;if(s===r){re=null;break}var a=s.sibling;if(a!==null){a.return=s.return,re=a;break}re=s.return}}function Lg(r){for(;re!==null;){var s=re;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Nu(4,s)}catch(x){ot(s,a,x)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(x){ot(s,d,x)}}var p=s.return;try{_d(s)}catch(x){ot(s,p,x)}break;case 5:var v=s.return;try{_d(s)}catch(x){ot(s,v,x)}}}catch(x){ot(s,s.return,x)}if(s===r){re=null;break}var S=s.sibling;if(S!==null){S.return=s.return,re=S;break}re=s.return}}var nT=Math.ceil,bu=fe.ReactCurrentDispatcher,Ed=fe.ReactCurrentOwner,Sn=fe.ReactCurrentBatchConfig,Fe=0,At=null,gt=null,bt=0,pn=0,Co=mi(0),Et=0,$a=null,ms=0,Du=0,Td=0,qa=null,Xt=null,Id=0,Po=1/0,Lr=null,Ou=!1,Sd=null,Ei=null,Vu=!1,Ti=null,Lu=0,Ha=0,Ad=null,Mu=-1,Fu=0;function Gt(){return(Fe&6)!==0?Ye():Mu!==-1?Mu:Mu=Ye()}function Ii(r){return(r.mode&1)===0?1:(Fe&2)!==0&&bt!==0?bt&-bt:UE.transition!==null?(Fu===0&&(Fu=da()),Fu):(r=Ve,r!==0||(r=window.event,r=r===void 0?16:ro(r.type)),r)}function Fn(r,s,a,c){if(50<Ha)throw Ha=0,Ad=null,Error(t(185));rs(r,a,c),((Fe&2)===0||r!==At)&&(r===At&&((Fe&2)===0&&(Du|=a),Et===4&&Si(r,bt)),Zt(r,c),a===1&&Fe===0&&(s.mode&1)===0&&(Po=Ye()+500,du&&yi()))}function Zt(r,s){var a=r.callbackNode;ns(r,s);var c=Ir(r,r===At?bt:0);if(c===0)a!==null&&Ys(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&Ys(a),s===1)r.tag===0?FE(Fg.bind(null,r)):Tm(Fg.bind(null,r)),OE(function(){(Fe&6)===0&&yi()}),a=null;else{switch(Yn(c)){case 1:a=Js;break;case 4:a=ua;break;case 16:a=Xi;break;case 536870912:a=Xs;break;default:a=Xi}a=Wg(a,Mg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Mg(r,s){if(Mu=-1,Fu=0,(Fe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(xo()&&r.callbackNode!==a)return null;var c=Ir(r,r===At?bt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Uu(r,c);else{s=c;var d=Fe;Fe|=2;var p=jg();(At!==r||bt!==s)&&(Lr=null,Po=Ye()+500,ys(r,s));do try{sT();break}catch(S){Ug(r,S)}while(!0);$h(),bu.current=p,Fe=d,gt!==null?s=0:(At=null,bt=0,s=Et)}if(s!==0){if(s===2&&(d=ha(r),d!==0&&(c=d,s=Rd(r,d))),s===1)throw a=$a,ys(r,0),Si(r,c),Zt(r,Ye()),a;if(s===6)Si(r,c);else{if(d=r.current.alternate,(c&30)===0&&!rT(d)&&(s=Uu(r,c),s===2&&(p=ha(r),p!==0&&(c=p,s=Rd(r,p))),s===1))throw a=$a,ys(r,0),Si(r,c),Zt(r,Ye()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:_s(r,Xt,Lr);break;case 3:if(Si(r,c),(c&130023424)===c&&(s=Id+500-Ye(),10<s)){if(Ir(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Gt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=bh(_s.bind(null,r,Xt,Lr),s);break}_s(r,Xt,Lr);break;case 4:if(Si(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-an(c);p=1<<v,v=s[v],v>d&&(d=v),c&=~p}if(c=d,c=Ye()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*nT(c/1960))-c,10<c){r.timeoutHandle=bh(_s.bind(null,r,Xt,Lr),c);break}_s(r,Xt,Lr);break;case 5:_s(r,Xt,Lr);break;default:throw Error(t(329))}}}return Zt(r,Ye()),r.callbackNode===a?Mg.bind(null,r):null}function Rd(r,s){var a=qa;return r.current.memoizedState.isDehydrated&&(ys(r,s).flags|=256),r=Uu(r,s),r!==2&&(s=Xt,Xt=a,s!==null&&kd(s)),r}function kd(r){Xt===null?Xt=r:Xt.push.apply(Xt,r)}function rT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Dn(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Si(r,s){for(s&=~Td,s&=~Du,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-an(s),c=1<<a;r[a]=-1,s&=~c}}function Fg(r){if((Fe&6)!==0)throw Error(t(327));xo();var s=Ir(r,0);if((s&1)===0)return Zt(r,Ye()),null;var a=Uu(r,s);if(r.tag!==0&&a===2){var c=ha(r);c!==0&&(s=c,a=Rd(r,c))}if(a===1)throw a=$a,ys(r,0),Si(r,s),Zt(r,Ye()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,_s(r,Xt,Lr),Zt(r,Ye()),null}function Cd(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(Po=Ye()+500,du&&yi())}}function gs(r){Ti!==null&&Ti.tag===0&&(Fe&6)===0&&xo();var s=Fe;Fe|=1;var a=Sn.transition,c=Ve;try{if(Sn.transition=null,Ve=1,r)return r()}finally{Ve=c,Sn.transition=a,Fe=s,(Fe&6)===0&&yi()}}function Pd(){pn=Co.current,Xe(Co)}function ys(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,DE(a)),gt!==null)for(a=gt.return;a!==null;){var c=a;switch(Fh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&cu();break;case 3:Ao(),Xe(Qt),Xe(Mt),Zh();break;case 5:Jh(c);break;case 4:Ao();break;case 13:Xe(tt);break;case 19:Xe(tt);break;case 10:qh(c.type._context);break;case 22:case 23:Pd()}a=a.return}if(At=r,gt=r=Ai(r.current,null),bt=pn=s,Et=0,$a=null,Td=Du=ms=0,Xt=qa=null,ds!==null){for(s=0;s<ds.length;s++)if(a=ds[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}ds=null}return r}function Ug(r,s){do{var a=gt;try{if($h(),Iu.current=ku,Su){for(var c=nt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Su=!1}if(ps=0,St=wt=nt=null,Ma=!1,Fa=0,Ed.current=null,a===null||a.return===null){Et=1,$a=s,gt=null;break}e:{var p=r,v=a.return,S=a,x=s;if(s=bt,S.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var U=x,K=S,G=K.tag;if((K.mode&1)===0&&(G===0||G===11||G===15)){var W=K.alternate;W?(K.updateQueue=W.updateQueue,K.memoizedState=W.memoizedState,K.lanes=W.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=cg(v);if(te!==null){te.flags&=-257,hg(te,v,S,p,s),te.mode&1&&ug(p,U,s),s=te,x=U;var ie=s.updateQueue;if(ie===null){var se=new Set;se.add(x),s.updateQueue=se}else ie.add(x);break e}else{if((s&1)===0){ug(p,U,s),xd();break e}x=Error(t(426))}}else if(et&&S.mode&1){var ct=cg(v);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),hg(ct,v,S,p,s),Bh(Ro(x,S));break e}}p=x=Ro(x,S),Et!==4&&(Et=2),qa===null?qa=[p]:qa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var L=ag(p,x,s);xm(p,L);break e;case 1:S=x;var O=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Ei===null||!Ei.has(F)))){p.flags|=65536,s&=-s,p.lanes|=s;var J=lg(p,S,s);xm(p,J);break e}}p=p.return}while(p!==null)}zg(a)}catch(le){s=le,gt===a&&a!==null&&(gt=a=a.return);continue}break}while(!0)}function jg(){var r=bu.current;return bu.current=ku,r===null?ku:r}function xd(){(Et===0||Et===3||Et===2)&&(Et=4),At===null||(ms&268435455)===0&&(Du&268435455)===0||Si(At,bt)}function Uu(r,s){var a=Fe;Fe|=2;var c=jg();(At!==r||bt!==s)&&(Lr=null,ys(r,s));do try{iT();break}catch(d){Ug(r,d)}while(!0);if($h(),Fe=a,bu.current=c,gt!==null)throw Error(t(261));return At=null,bt=0,Et}function iT(){for(;gt!==null;)Bg(gt)}function sT(){for(;gt!==null&&!Ji();)Bg(gt)}function Bg(r){var s=Hg(r.alternate,r,pn);r.memoizedProps=r.pendingProps,s===null?zg(r):gt=s,Ed.current=null}function zg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=JE(a,s,pn),a!==null){gt=a;return}}else{if(a=XE(a,s),a!==null){a.flags&=32767,gt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Et=6,gt=null;return}}if(s=s.sibling,s!==null){gt=s;return}gt=s=r}while(s!==null);Et===0&&(Et=5)}function _s(r,s,a){var c=Ve,d=Sn.transition;try{Sn.transition=null,Ve=1,oT(r,s,a,c)}finally{Sn.transition=d,Ve=c}return null}function oT(r,s,a,c){do xo();while(Ti!==null);if((Fe&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(gh(r,p),r===At&&(gt=At=null,bt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vu||(Vu=!0,Wg(Xi,function(){return xo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Sn.transition,Sn.transition=null;var v=Ve;Ve=1;var S=Fe;Fe|=4,Ed.current=null,eT(r,a),bg(a,r),RE(xh),Rr=!!Ph,xh=Ph=null,r.current=a,tT(a),Tr(),Fe=S,Ve=v,Sn.transition=p}else r.current=a;if(Vu&&(Vu=!1,Ti=r,Lu=d),p=r.pendingLanes,p===0&&(Ei=null),Wl(a.stateNode),Zt(r,Ye()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Ou)throw Ou=!1,r=Sd,Sd=null,r;return(Lu&1)!==0&&r.tag!==0&&xo(),p=r.pendingLanes,(p&1)!==0?r===Ad?Ha++:(Ha=0,Ad=r):Ha=0,yi(),null}function xo(){if(Ti!==null){var r=Yn(Lu),s=Sn.transition,a=Ve;try{if(Sn.transition=null,Ve=16>r?16:r,Ti===null)var c=!1;else{if(r=Ti,Ti=null,Lu=0,(Fe&6)!==0)throw Error(t(331));var d=Fe;for(Fe|=4,re=r.current;re!==null;){var p=re,v=p.child;if((re.flags&16)!==0){var S=p.deletions;if(S!==null){for(var x=0;x<S.length;x++){var U=S[x];for(re=U;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:za(8,K,p)}var G=K.child;if(G!==null)G.return=K,re=G;else for(;re!==null;){K=re;var W=K.sibling,te=K.return;if(kg(K),K===U){re=null;break}if(W!==null){W.return=te,re=W;break}re=te}}}var ie=p.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var ct=se.sibling;se.sibling=null,se=ct}while(se!==null)}}re=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,re=v;else e:for(;re!==null;){if(p=re,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:za(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,re=L;break e}re=p.return}}var O=r.current;for(re=O;re!==null;){v=re;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,re=F;else e:for(v=O;re!==null;){if(S=re,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Nu(9,S)}}catch(le){ot(S,S.return,le)}if(S===v){re=null;break e}var J=S.sibling;if(J!==null){J.return=S.return,re=J;break e}re=S.return}}if(Fe=d,yi(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Zi,r)}catch{}c=!0}return c}finally{Ve=a,Sn.transition=s}}return!1}function $g(r,s,a){s=Ro(a,s),s=ag(r,s,1),r=vi(r,s,1),s=Gt(),r!==null&&(rs(r,1,s),Zt(r,s))}function ot(r,s,a){if(r.tag===3)$g(r,r,a);else for(;s!==null;){if(s.tag===3){$g(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ei===null||!Ei.has(c))){r=Ro(a,r),r=lg(s,r,1),s=vi(s,r,1),r=Gt(),s!==null&&(rs(s,1,r),Zt(s,r));break}}s=s.return}}function aT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Gt(),r.pingedLanes|=r.suspendedLanes&a,At===r&&(bt&a)===a&&(Et===4||Et===3&&(bt&130023424)===bt&&500>Ye()-Id?ys(r,0):Td|=a),Zt(r,s)}function qg(r,s){s===0&&((r.mode&1)===0?s=1:(s=ai,ai<<=1,(ai&130023424)===0&&(ai=4194304)));var a=Gt();r=Dr(r,s),r!==null&&(rs(r,s,a),Zt(r,a))}function lT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),qg(r,a)}function uT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),qg(r,a)}var Hg;Hg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qt.current)Jt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Jt=!1,YE(r,s,a);Jt=(r.flags&131072)!==0}else Jt=!1,et&&(s.flags&1048576)!==0&&Im(s,pu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Pu(r,s),r=s.pendingProps;var d=_o(s,Mt.current);Io(s,a),d=nd(null,s,c,r,d,a);var p=rd();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(c)?(p=!0,hu(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Kh(s),d.updater=wu,s.stateNode=d,d._reactInternals=s,Qh(s,c,r,a),s=hd(null,s,c,!0,p,a)):(s.tag=0,et&&p&&Mh(s),Kt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Pu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=hT(c),r=Vn(c,r),d){case 0:s=cd(null,s,c,r,a);break e;case 1:s=yg(null,s,c,r,a);break e;case 11:s=dg(null,s,c,r,a);break e;case 14:s=fg(null,s,c,Vn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),cd(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),yg(r,s,c,d,a);case 3:e:{if(_g(s),r===null)throw Error(t(387));c=s.pendingProps,p=s.memoizedState,d=p.element,Pm(r,s),vu(s,c,null,a);var v=s.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=Ro(Error(t(423)),s),s=vg(r,s,c,a,d);break e}else if(c!==d){d=Ro(Error(t(424)),s),s=vg(r,s,c,a,d);break e}else for(fn=pi(s.stateNode.containerInfo.firstChild),dn=s,et=!0,On=null,a=Fm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Eo(),c===d){s=Vr(r,s,a);break e}Kt(r,s,c,a)}s=s.child}return s;case 5:return Um(s),r===null&&jh(s),c=s.type,d=s.pendingProps,p=r!==null?r.memoizedProps:null,v=d.children,Nh(c,d)?v=null:p!==null&&Nh(c,p)&&(s.flags|=32),gg(r,s),Kt(r,s,v,a),s.child;case 6:return r===null&&jh(s),null;case 13:return wg(r,s,a);case 4:return Yh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=So(s,null,c,a):Kt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),dg(r,s,c,d,a);case 7:return Kt(r,s,s.pendingProps,a),s.child;case 8:return Kt(r,s,s.pendingProps.children,a),s.child;case 12:return Kt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,p=s.memoizedProps,v=d.value,Ge(gu,c._currentValue),c._currentValue=v,p!==null)if(Dn(p.value,v)){if(p.children===d.children&&!Qt.current){s=Vr(r,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var S=p.dependencies;if(S!==null){v=p.child;for(var x=S.firstContext;x!==null;){if(x.context===c){if(p.tag===1){x=Or(-1,a&-a),x.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?x.next=x:(x.next=K.next,K.next=x),U.pending=x}}p.lanes|=a,x=p.alternate,x!==null&&(x.lanes|=a),Hh(p.return,a,s),S.lanes|=a;break}x=x.next}}else if(p.tag===10)v=p.type===s.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Hh(v,a,s),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===s){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Kt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,Io(s,a),d=Tn(d),c=c(d),s.flags|=1,Kt(r,s,c,a),s.child;case 14:return c=s.type,d=Vn(c,s.pendingProps),d=Vn(c.type,d),fg(r,s,c,d,a);case 15:return pg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),Pu(r,s),s.tag=1,Yt(c)?(r=!0,hu(s)):r=!1,Io(s,a),Om(s,c,d),Qh(s,c,d,a),hd(null,s,c,!0,r,a);case 19:return Tg(r,s,a);case 22:return mg(r,s,a)}throw Error(t(156,s.tag))};function Wg(r,s){return la(r,s)}function cT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,s,a,c){return new cT(r,s,a,c)}function Nd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function hT(r){if(typeof r=="function")return Nd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===D)return 11;if(r===ze)return 14}return 2}function Ai(r,s){var a=r.alternate;return a===null?(a=An(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function ju(r,s,a,c,d,p){var v=2;if(c=r,typeof r=="function")Nd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case b:return vs(a.children,d,p,s);case R:v=8,d|=8;break;case C:return r=An(12,a,s,d|2),r.elementType=C,r.lanes=p,r;case T:return r=An(13,a,s,d),r.elementType=T,r.lanes=p,r;case ue:return r=An(19,a,s,d),r.elementType=ue,r.lanes=p,r;case Ae:return Bu(a,d,p,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case V:v=10;break e;case I:v=9;break e;case D:v=11;break e;case ze:v=14;break e;case Ue:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=An(v,a,s,d),s.elementType=r,s.type=c,s.lanes=p,s}function vs(r,s,a,c){return r=An(7,r,c,s),r.lanes=a,r}function Bu(r,s,a,c){return r=An(22,r,c,s),r.elementType=Ae,r.lanes=a,r.stateNode={isHidden:!1},r}function bd(r,s,a){return r=An(6,r,null,s),r.lanes=a,r}function Dd(r,s,a){return s=An(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function dT(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fa(0),this.expirationTimes=fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Od(r,s,a,c,d,p,v,S,x){return r=new dT(r,s,a,S,x),s===1?(s=1,p===!0&&(s|=8)):s=0,p=An(3,null,null,s),r.current=p,p.stateNode=r,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kh(p),r}function fT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Kg(r){if(!r)return gi;r=r._reactInternals;e:{if(Nn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Yt(a))return wm(r,a,s)}return s}function Gg(r,s,a,c,d,p,v,S,x){return r=Od(a,c,!0,r,d,p,v,S,x),r.context=Kg(null),a=r.current,c=Gt(),d=Ii(a),p=Or(c,d),p.callback=s??null,vi(a,p,d),r.current.lanes=d,rs(r,d,c),Zt(r,c),r}function zu(r,s,a,c){var d=s.current,p=Gt(),v=Ii(d);return a=Kg(a),s.context===null?s.context=a:s.pendingContext=a,s=Or(p,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=vi(d,s,v),r!==null&&(Fn(r,d,v,p),_u(r,d,v)),v}function $u(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Qg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Vd(r,s){Qg(r,s),(r=r.alternate)&&Qg(r,s)}function pT(){return null}var Yg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ld(r){this._internalRoot=r}qu.prototype.render=Ld.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));zu(r,s,null,null)},qu.prototype.unmount=Ld.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;gs(function(){zu(null,r,null,null)}),s[Pr]=null}};function qu(r){this._internalRoot=r}qu.prototype.unstable_scheduleHydration=function(r){if(r){var s=ya();r={blockedOn:null,target:r,priority:s};for(var a=0;a<ln.length&&s!==0&&s<ln[a].priority;a++);ln.splice(a,0,r),a===0&&to(r)}};function Md(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Hu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function mT(r,s,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=$u(v);p.call(U)}}var v=Gg(s,c,r,0,null,!1,!1,"",Jg);return r._reactRootContainer=v,r[Pr]=v.current,Pa(r.nodeType===8?r.parentNode:r),gs(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=$u(x);S.call(U)}}var x=Od(r,0,!1,null,null,!1,!1,"",Jg);return r._reactRootContainer=x,r[Pr]=x.current,Pa(r.nodeType===8?r.parentNode:r),gs(function(){zu(s,x,a,c)}),x}function Wu(r,s,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var S=d;d=function(){var x=$u(v);S.call(x)}}zu(s,v,r,d)}else v=mT(a,s,r,d,c);return $u(v)}ma=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=$e(s.pendingLanes);a!==0&&(pa(s,a|1),Zt(s,Ye()),(Fe&6)===0&&(Po=Ye()+500,yi()))}break;case 13:gs(function(){var c=Dr(r,1);if(c!==null){var d=Gt();Fn(c,r,1,d)}}),Vd(r,1)}},Zs=function(r){if(r.tag===13){var s=Dr(r,134217728);if(s!==null){var a=Gt();Fn(s,r,134217728,a)}Vd(r,134217728)}},ga=function(r){if(r.tag===13){var s=Ii(r),a=Dr(r,s);if(a!==null){var c=Gt();Fn(a,r,s,c)}Vd(r,s)}},ya=function(){return Ve},_a=function(r,s){var a=Ve;try{return Ve=r,s()}finally{Ve=a}},vr=function(r,s,a){switch(s){case"input":if(Ki(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=uu(c);if(!d)throw Error(t(90));Zo(c),Ki(c,d)}}}break;case"textarea":Ol(r,a);break;case"select":s=a.value,s!=null&&Pn(r,!!a.multiple,s,!1)}},Ml=Cd,Fl=gs;var gT={usingClientEntryPoint:!1,Events:[ba,go,uu,ri,ii,Cd]},Wa={findFiberByHostInstance:ls,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yT={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Hl(r),r===null?null:r.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||pT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{Zi=Ku.inject(yT),on=Ku}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gT,en.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Md(s))throw Error(t(200));return fT(r,s,null,a)},en.createRoot=function(r,s){if(!Md(r))throw Error(t(299));var a=!1,c="",d=Yg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Od(r,1,!1,null,null,a,!1,c,d),r[Pr]=s.current,Pa(r.nodeType===8?r.parentNode:r),new Ld(s)},en.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Hl(s),r=r===null?null:r.stateNode,r},en.flushSync=function(r){return gs(r)},en.hydrate=function(r,s,a){if(!Hu(s))throw Error(t(200));return Wu(null,r,s,!0,a)},en.hydrateRoot=function(r,s,a){if(!Md(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Yg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Gg(s,null,r,1,a??null,d,!1,p,v),r[Pr]=s.current,Pa(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new qu(s)},en.render=function(r,s,a){if(!Hu(s))throw Error(t(200));return Wu(null,r,s,!1,a)},en.unmountComponentAtNode=function(r){if(!Hu(r))throw Error(t(40));return r._reactRootContainer?(gs(function(){Wu(null,null,r,!1,function(){r._reactRootContainer=null,r[Pr]=null})}),!0):!1},en.unstable_batchedUpdates=Cd,en.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Hu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Wu(r,s,a,!1,c)},en.version="18.2.0-next-9e3b772b8-20220608",en}var sy;function AT(){if(sy)return jd.exports;sy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),jd.exports=ST(),jd.exports}var oy;function RT(){if(oy)return Gu;oy=1;var n=AT();return Gu.createRoot=n.createRoot,Gu.hydrateRoot=n.hydrateRoot,Gu}var kT=RT();const CT=nv(kT),PT="modulepreload",xT=function(n){return"/"+n},ay={},Mf=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let h=function(y){return Promise.all(y.map(w=>Promise.resolve(w).then(A=>({status:"fulfilled",value:A}),A=>({status:"rejected",reason:A}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=h(t.map(y=>{if(y=xT(y),y in ay)return;ay[y]=!0;const w=y.endsWith(".css"),A=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${A}`))return;const N=document.createElement("link");if(N.rel=w?"stylesheet":PT,w||(N.as="script"),N.crossOrigin="",N.href=y,g&&N.setAttribute("nonce",g),document.head.appendChild(N),w)return new Promise((B,Q)=>{N.addEventListener("load",B),N.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${y}`)))})}))}function l(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return o.then(h=>{for(const f of h||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};var nl=(n=>(n.ADMIN="ADMIN",n.MEMBER="MEMBER",n.PENDING="PENDING",n))(nl||{});const iv=({className:n="w-6 h-6"})=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:n,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"})}),NT=({onLoginClick:n})=>{const{currentUser:e,logout:t}=hE();return k.jsx("header",{className:"sticky top-0 z-40 glass-nav transition-colors duration-300",children:k.jsx("div",{className:"container mx-auto px-4 py-4 sm:px-6 lg:px-8",children:k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("div",{className:"flex items-center space-x-3 group cursor-pointer",children:[k.jsx("div",{className:"h-10 w-10 md:h-12 md:w-12 bg-white/5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] border border-white/10 p-0.5 overflow-hidden group-hover:scale-110 transition-transform duration-300",children:k.jsx("img",{src:"/ipreu-logo-hd.png",alt:"IPREU Logo",className:"w-full h-full object-contain scale-110 drop-shadow-md"})}),k.jsxs("h1",{className:"text-xl md:text-2xl font-display font-black text-orange-950 tracking-tighter uppercase leading-none",children:["Union Connect ",k.jsx("span",{className:"text-orange-600",children:"Hub"})]})]}),k.jsx("div",{className:"flex items-center space-x-2 md:space-x-4 animate-fade-in",children:e?k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"hidden md:flex flex-col items-end max-w-[200px]",children:[k.jsxs("span",{className:"text-xs text-orange-950/70 leading-tight truncate w-full text-right",children:["Welcome, ",k.jsx("span",{className:"font-bold text-orange-950",children:e.employeeName})]}),k.jsx("span",{className:`text-[9px] uppercase tracking-[0.2em] font-black px-2 py-0.5 rounded-full mt-1 border shadow-sm ${e.role===nl.ADMIN?"bg-orange-600 text-white shadow-lg shadow-orange-200":"bg-orange-100 text-orange-700 border border-orange-200"}`,children:e.role})]}),k.jsx("button",{onClick:t,className:"px-4 py-2 text-sm font-semibold text-white bg-orange-600 border border-transparent rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all hover:-translate-y-0.5",children:"Logout"})]}):k.jsxs("button",{onClick:()=>n==null?void 0:n(),className:"flex items-center gap-2 px-4 py-2 text-sm font-black text-orange-700 bg-white border border-orange-200 rounded-xl shadow-sm hover:bg-orange-50 hover:border-orange-300 transition-all hover:-translate-y-0.5 active:scale-95 uppercase tracking-wider",children:[k.jsx(iv,{className:"w-5 h-5"}),k.jsx("span",{className:"hidden sm:inline",children:"Member Login"}),k.jsx("span",{className:"sm:hidden",children:"Login"})]})})]})})})},sv=n=>k.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:[k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 100 12h-3a7.5 7.5 0 00-7.5-7.5h1.5v-1.5a7.5 7.5 0 007.5-7.5h3z"}),k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-1.875a1.125 1.125 0 01-1.125-1.125v-1.5a1.125 1.125 0 011.125-1.125h1.875m.75 4.5l.375-.375a1.875 1.875 0 000-2.65l-3.375-3.375a1.875 1.875 0 00-2.65 0l-.375.375m.75 4.5l-4.5-4.5"})]}),ov=({className:n="w-6 h-6"})=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:n,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"})}),bT=n=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),DT=n=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3.375 3.375 0 0119.5 7.372l-10.94 10.94a2.25 2.25 0 01-3.182-3.182l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a1.125 1.125 0 001.591 1.591l10.94-10.94a2.25 2.25 0 00-3.182-3.182L5.625 15.375a3.375 3.375 0 004.773 4.773l7.693-7.693a.75.75 0 011.06-1.06z"})}),rN=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"],OT=[{id:1,name:"S.K. Gupta",post:"President"},{id:2,name:"Mukesh Kumar",post:"Vice President"},{id:3,name:"Sudhir",post:"General Secretary"},{id:4,name:"Ravinder Kumar",post:"Joint Secretary Industrial Dispute"},{id:5,name:"Manoj Katiyar",post:"Joint Secretary Welfare"},{id:6,name:"Krishna Kumar",post:"Treasurer"},{id:7,name:"Manoj Nandal",post:"Assistant Joint Secretary Industrial Dispute"},{id:8,name:"Pradeep Kumar",post:"Assistant Joint Secretary Welfare"},{id:9,name:"Debabrata Sahu",post:"Executive Member"},{id:10,name:"Sandeep Kumar",post:"Executive Member"},{id:11,name:"Mohit Kajal",post:"Executive Member"},{id:12,name:"Naveen Kumar",post:"Executive Member"},{id:13,name:"Pardeep",post:"Executive Member"}],mn={hindiName:"इंडियन ऑयल पानीपत रिफ़ाइनरी एम्पलाईज यूनियन",englishName:"INDIAN OIL PANIPAT REFINERY EMPLOYEES UNION (IPREU)",address:"पानीपत रिफ़ाइनरी एवं पेट्रोकेमिकल कॉम्प्लेक्स, पोस्ट ऑफिस: पानीपत रिफ़ाइनरी, बहोली, पानीपत-132140 (हरियाणा)",phones:["9034084033","9416658215"],intercom:"01802524045",email:"PRIPREU@INDIANOIL.IN",affiliation:"भारतीय मजदूर संघ (बी.एम.एस. से सम्बद्ध)",regdNo:"1542"},av=()=>k.jsxs("div",{className:"flex flex-col items-center gap-3 py-6",children:[k.jsxs("div",{className:"relative group",children:[k.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"}),k.jsxs("div",{className:"relative px-8 py-4 bg-white border-2 border-orange-500/20 rounded-2xl shadow-xl flex flex-col items-center transition-all hover:border-orange-500/50",children:[k.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-2 drop-shadow-sm",children:"Official Platform Identity"}),k.jsxs("h4",{className:"text-base md:text-lg font-black tracking-tight text-center leading-tight",children:[k.jsx("span",{className:"text-gray-900",children:"Design & Developed by "}),k.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-700 uppercase drop-shadow-sm",children:"Mr. NAVEEN KUMAR"})]}),k.jsx("div",{className:"mt-2 px-3 py-0.5 bg-orange-600 rounded-full",children:k.jsx("p",{className:"text-[9px] font-black text-white uppercase tracking-widest",children:"(EXECUTIVE MEMBER) IPREU"})})]})]}),k.jsxs("div",{className:"flex items-center gap-3 mt-1 opacity-60",children:[k.jsx("span",{className:"h-[2px] w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"}),k.jsx("span",{className:"text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]",children:"Secure Premium Infrastructure"}),k.jsx("span",{className:"h-[2px] w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"})]})]}),VT=({name:n,post:e})=>k.jsx("div",{className:"p-5 rounded-2xl border transition-all duration-300 bg-white border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 group",children:k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx("div",{className:"w-14 h-14 rounded-full flex items-center justify-center text-lg font-black bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 group-hover:scale-110 shadow-sm border border-orange-100 transition-transform duration-300",children:n.split(" ").map(t=>t[0]).join("").substring(0,2)}),k.jsxs("div",{children:[k.jsx("p",{className:"font-black text-xl text-[#15803d] tracking-tight leading-tight mb-0.5 transition-colors uppercase",children:n}),k.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-orange-700 font-black",children:e})]})]})}),LT=({onLoginClick:n})=>{const{calendarEvents:e,announcements:t,users:i,grievances:o,stats:l}=hE(),h=e.filter(w=>new Date(w.date)>=new Date(new Date().setHours(0,0,0,0))).sort((w,A)=>w.date.localeCompare(A.date)).slice(0,3),f=t.slice(0,3),g=w=>{if(!w)return!1;const A=new Date,N=new Date(w);return A.getDate()===N.getDate()&&A.getMonth()===N.getMonth()},y=i.filter(w=>w.role==="MEMBER"&&g(w.dob));return k.jsxs("div",{className:"min-h-[calc(100vh-80px)] flex flex-col justify-between -mt-4 md:-mt-8 -mx-4 md:-mx-8",children:[k.jsxs("section",{className:"relative overflow-hidden bg-[#2D0606] text-white py-24 md:py-36 px-6 lg:px-12 flex items-center justify-center",children:[k.jsx("style",{children:`
                    .hero-gradient {
                        background: radial-gradient(circle at top right, #4c0505 0%, #1a0202 70%, #000000 100%);
                    }
                `}),k.jsx("div",{className:"absolute inset-0 hero-gradient opacity-90"}),k.jsx("div",{className:"absolute top-0 left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] animate-blob"}),k.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[120px] animate-blob animation-delay-2000"}),k.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto text-center space-y-10",children:[k.jsxs("div",{className:"flex flex-col items-center gap-4",children:[k.jsxs("div",{className:"w-28 h-28 md:w-44 md:h-44 bg-white/5 rounded-full p-1 shadow-[0_0_80px_rgba(234,88,12,0.5)] border-2 border-orange-500/20 animate-float translate-y-[-20px] cursor-pointer hover:rotate-12 transition-all duration-1000 relative group overflow-hidden",children:[k.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20"}),k.jsx("img",{src:"/ipreu-logo-hd.png",alt:"IPREU Official Seal",className:"w-full h-full object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)] relative z-10"})]}),k.jsxs("div",{className:"px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-bold text-orange-200 shadow-2xl flex items-center gap-2",children:[k.jsxs("span",{className:"flex h-2 w-2 relative",children:[k.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),k.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-orange-500"})]}),"SECURE CENTRALIZED MEMBER HUB"]}),k.jsx("h2",{className:"text-3xl md:text-5xl font-black text-orange-500 font-display transition-all hover:scale-105 duration-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]",children:mn.hindiName})]}),k.jsxs("h1",{className:"text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] drop-shadow-2xl",children:["Strength Through ",k.jsx("br",{})," ",k.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase",children:"Unity & Transparency"})]}),k.jsxs("p",{className:"text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-lg",children:["The official digital home for ",mn.englishName,". Affiliated with ",k.jsx("span",{className:"text-white font-bold underline decoration-orange-500 decoration-2 underline-offset-4",children:mn.affiliation}),"."]}),k.jsxs("div",{className:"pt-10 flex flex-col sm:flex-row items-center justify-center gap-6",children:[k.jsx("button",{onClick:n,className:"w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white font-black rounded-2xl shadow-[0_20px_50px_rgba(185,28,28,0.3)] transition-all hover:-translate-y-1 active:scale-95 text-xl border border-white/20",children:"Access Member Portal →"}),k.jsx("a",{href:"#leadership",className:"w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl backdrop-blur-xl border border-white/10 transition-all hover:-translate-y-1 text-xl",children:"View Executive Body"})]})]})]}),y.length>0&&k.jsxs("section",{className:"py-20 px-6 md:px-12 bg-white overflow-hidden relative border-b border-orange-100",children:[k.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-[100px] -mr-48 -mt-48"}),k.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 bg-red-100/10 rounded-full blur-[80px] -ml-40 -mb-40"}),k.jsx("div",{className:"max-w-7xl mx-auto",children:k.jsxs("div",{className:"relative animate-in fade-in duration-1000",children:[k.jsxs("div",{className:"text-center mb-16 relative z-10",children:[k.jsxs("div",{className:"inline-flex items-center gap-3 bg-orange-600/10 px-6 py-2 rounded-full border border-orange-200 mb-6 group hover:scale-105 transition-transform cursor-default",children:[k.jsx("span",{className:"text-orange-600 animate-bounce",children:"🎂"}),k.jsx("span",{className:"text-orange-700 font-black uppercase tracking-[0.3em] text-[10px]",children:"Today's Strategic Celebrations"})]}),k.jsxs("h2",{className:"text-4xl md:text-7xl font-black text-orange-950 uppercase tracking-tighter mb-4 leading-none strike-animation",children:["IPREU ",k.jsx("span",{className:"text-orange-600",children:"Birthday Stars"})]}),k.jsx("p",{className:"text-base md:text-xl text-gray-600 font-bold max-w-2xl mx-auto leading-relaxed italic border-l-4 border-orange-500/30 pl-4 inline-block",children:'"Celebrating our core strength—The Workers. Solidarity & Prosperity to you today!"'})]}),k.jsx("div",{className:`flex ${y.length>3?"flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-hide carousel-mask pb-10 px-10":"flex-wrap justify-center gap-10 md:gap-20"} justify-center relative z-10`,children:y.map(w=>k.jsxs("div",{className:`flex flex-col items-center group transition-all duration-500 ${y.length>3?"snap-center shrink-0 min-w-[280px] md:min-w-[320px]":""}`,children:[k.jsxs("div",{className:"relative mb-8",children:[k.jsx("div",{className:"absolute inset-0 bg-orange-500 rounded-[2.5rem] scale-110 blur-[20px] opacity-0 group-hover:opacity-20 transition-all duration-700"}),k.jsxs("div",{className:`${y.length>3?"w-32 h-40 md:w-40 md:h-52":"w-40 h-52 md:w-52 md:h-68"} rounded-[2.5rem] border-[8px] border-white shadow-[0_25px_60px_rgba(0,0,0,0.2)] overflow-hidden relative z-10 group-hover:scale-[1.03] transition-all duration-700 group-hover:-rotate-2 translate-y-0 group-hover:-translate-y-6`,children:[k.jsx("img",{src:w.photoUrl,alt:w.employeeName,className:"w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"}),k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-orange-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6",children:k.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest text-white drop-shadow-lg",children:"Happy Birthday!"})})]}),k.jsx("div",{className:"absolute -top-4 -right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-[1.25rem] shadow-2xl border-2 border-orange-200 z-20 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 animate-pulse-slow",children:k.jsx("span",{className:"text-2xl drop-shadow-sm",children:"🎈"})})]}),k.jsx("h3",{className:`${y.length>3?"text-xl md:text-2xl":"text-2xl md:text-3xl"} font-black text-orange-950 uppercase tracking-tight group-hover:text-orange-600 transition-colors duration-300 drop-shadow-sm text-center`,children:w.employeeName}),k.jsx("p",{className:"text-[11px] font-black text-orange-700 uppercase tracking-[0.3em] mt-2 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 shadow-inner",children:w.postingLocation||"Core Member"})]},w.id))})]})})]}),k.jsx("section",{className:"py-20 bg-[#fcfaf7] relative z-20 border-b border-orange-100",children:k.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-12",children:k.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[k.jsxs("div",{className:"space-y-8",children:[k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx("div",{className:"p-3 bg-orange-100 text-orange-600 rounded-xl",children:k.jsx(ov,{className:"w-7 h-7"})}),k.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-orange-950",children:"Union Calendar"})]}),k.jsxs("div",{className:"space-y-3",children:[h.length>0?h.map(w=>k.jsxs("div",{className:"bg-white p-4 rounded-xl border border-orange-100 shadow-sm flex items-center justify-between group hover:border-orange-300 transition-colors",children:[k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsxs("div",{className:"flex flex-col items-center justify-center bg-orange-50 w-14 h-14 rounded-lg border border-orange-100",children:[k.jsx("span",{className:"text-[10px] text-orange-800/50 uppercase font-bold",children:new Date(w.date).toLocaleString("default",{month:"short"})}),k.jsx("span",{className:"text-xl font-bold text-orange-700 leading-none",children:new Date(w.date).getDate()})]}),k.jsxs("div",{children:[k.jsx("h4",{className:"font-bold text-orange-950 group-hover:text-orange-600 transition-colors",children:w.title}),k.jsxs("div",{className:"flex items-center gap-3 text-xs text-orange-900/70 mt-1",children:[k.jsxs("span",{className:"flex items-center gap-1",children:[k.jsx(bT,{className:"w-3 h-3"})," ",w.startTime]}),w.location&&k.jsxs("span",{className:"flex items-center gap-1",children:["📍 ",w.location]})]})]})]}),k.jsx("button",{onClick:n,className:"text-xs font-bold text-orange-700 hover:text-orange-600 uppercase tracking-widest px-3 py-1 bg-orange-50 rounded-full border border-orange-100",children:"Details"})]},w.id)):k.jsx("p",{className:"text-orange-950/80 font-black uppercase tracking-[0.2em] italic py-8 text-center bg-white rounded-xl border border-dashed border-orange-200",children:"No upcoming events listed for this month."}),k.jsx("p",{className:"text-center",children:k.jsx("button",{onClick:n,className:"text-sm font-semibold text-orange-700 hover:text-orange-800",children:"View Full Calendar →"})})]})]}),k.jsxs("div",{className:"space-y-8",children:[k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx("div",{className:"p-3 bg-orange-100 text-orange-600 rounded-xl",children:k.jsx(sv,{className:"w-7 h-7"})}),k.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-orange-950",children:"Latest Circulars"})]}),k.jsxs("div",{className:"space-y-3",children:[f.length>0?f.map(w=>k.jsxs("div",{className:"bg-white p-4 rounded-xl border border-orange-100 shadow-sm transition-all hover:border-orange-300",children:[k.jsxs("div",{className:"flex justify-between items-start mb-2",children:[k.jsx("h4",{className:"font-bold text-orange-950 line-clamp-1",children:w.title}),k.jsx("span",{className:"text-[10px] bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-bold",children:"OFFICIAL"})]}),k.jsx("p",{className:"text-sm text-orange-900/80 line-clamp-2 mb-3",children:w.content}),k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx("span",{className:"text-[10px] text-orange-900/60 font-medium italic",children:new Date(w.createdAt).toLocaleDateString()}),w.attachment&&k.jsxs("button",{onClick:n,className:"flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700",children:[k.jsx(DT,{className:"w-3.5 h-3.5"}),"View Attachment"]})]})]},w.id)):k.jsx("p",{className:"text-orange-950/80 font-black uppercase tracking-[0.2em] italic py-10 text-center bg-white rounded-2xl border-2 border-dashed border-orange-100/50 shadow-inner",children:"No public notices available at this time."}),k.jsx("p",{className:"text-center",children:k.jsx("button",{onClick:n,className:"text-sm font-semibold text-orange-600 hover:text-orange-700",children:"Read All Circulars →"})})]})]})]})})}),k.jsx("section",{id:"leadership",className:"py-24 px-6 lg:px-12 bg-[#fcfaf7] relative z-20",children:k.jsxs("div",{className:"max-w-6xl mx-auto",children:[k.jsxs("div",{className:"text-center mb-20",children:[k.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-orange-950 mb-6 font-display uppercase tracking-tight",children:["Executive Body of ",k.jsx("span",{className:"text-orange-600",children:"IPREU"})]}),k.jsx("div",{className:"w-32 h-2 bg-gradient-to-r from-orange-400 to-red-800 mx-auto rounded-full mb-8 opacity-80"}),k.jsx("p",{className:"text-base md:text-lg text-orange-950/80 max-w-3xl mx-auto leading-relaxed font-medium",children:"Serving with dedication, integrity, and a commitment to member welfare and industrial harmony."})]}),k.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:OT.map(w=>k.jsx(VT,{name:w.name,post:w.post},w.id))})]})}),k.jsxs("section",{className:"py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative",children:[k.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]"}),k.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-12 relative z-10",children:k.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-12 text-center",children:[k.jsxs("div",{className:"space-y-2 group",children:[k.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:l.memberCount}),k.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Registered Members of 1,041"})]}),k.jsxs("div",{className:"space-y-2 group",children:[k.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:l.announcementCount||0}),k.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Digital Circulars"})]}),k.jsxs("div",{className:"space-y-2 group",children:[k.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:mn.regdNo}),k.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Registration No."})]}),k.jsxs("div",{className:"space-y-2 group",children:[k.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:"Active"}),k.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Network Status"})]})]})})]}),k.jsxs("section",{className:"py-24 px-6 lg:px-12 bg-[#fcfaf7] relative z-20",children:[k.jsx("div",{className:"max-w-6xl mx-auto text-center mb-20",children:k.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-orange-950 mb-8 font-display underline decoration-orange-500 decoration-4 underline-offset-12",children:"How to Join IPREU"})}),k.jsxs("div",{className:"max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative",children:[k.jsx("div",{className:"absolute top-1/2 left-0 w-full h-1 bg-orange-100 hidden md:block -z-10"}),k.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-100 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all",children:[k.jsx("div",{className:"w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-600/20",children:"1"}),k.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Digital Registration"}),k.jsx("p",{className:"text-base text-orange-950/70",children:"Click Join and fill in your official employee details via our secure form."})]}),k.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-200 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all",children:[k.jsx("div",{className:"w-12 h-12 bg-orange-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-900/20",children:"2"}),k.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Admin Verification"}),k.jsx("p",{className:"text-base text-orange-950/70",children:"Your details will be reviewed by the Executive Body for union credentials."})]}),k.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-200 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all",children:[k.jsx("div",{className:"w-12 h-12 bg-orange-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-900/20",children:"3"}),k.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Full Access"}),k.jsx("p",{className:"text-base text-orange-950/70",children:"Receive your digital ID card and gain access to voting, circulars, and more."})]})]}),k.jsx("div",{className:"mt-16 text-center",children:k.jsx("button",{onClick:n,className:"px-12 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:-translate-y-1",children:"Start Registration Now"})})]}),k.jsxs("footer",{className:"bg-orange-950 text-orange-100 py-16 px-6 border-t border-orange-900 relative z-20",children:[k.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12",children:[k.jsxs("div",{className:"md:col-span-2 space-y-4",children:[k.jsx("h4",{className:"text-2xl font-display font-bold text-white tracking-tight",children:mn.englishName}),k.jsx("p",{className:"text-lg text-orange-300 font-bold mb-4",children:mn.hindiName}),k.jsx("p",{className:"text-sm leading-relaxed max-w-md text-orange-100/60",children:mn.address}),k.jsxs("div",{className:"pt-4 space-y-2 text-sm",children:[k.jsxs("p",{className:"flex items-center gap-3",children:[k.jsx("span",{className:"text-orange-400",children:"📞"})," ",mn.phones.join(" / ")," (Ext: ",mn.intercom,")"]}),k.jsxs("p",{className:"flex items-center gap-3",children:[k.jsx("span",{className:"text-orange-400",children:"✉️"})," ",k.jsx("a",{href:`mailto:${mn.email}`,className:"hover:text-orange-300 transition-colors",children:mn.email})]})]})]}),k.jsxs("div",{children:[k.jsx("h5",{className:"text-orange-300 font-bold mb-4 uppercase text-xs tracking-widest font-display",children:"Compliance"}),k.jsxs("ul",{className:"space-y-3 text-sm text-orange-100/60",children:[k.jsxs("li",{children:["Affiliation: ",mn.affiliation]}),k.jsxs("li",{children:["Regd No: ",mn.regdNo]}),k.jsx("li",{children:k.jsxs("span",{className:"flex items-center gap-2",children:[k.jsx("span",{className:"w-2 h-2 rounded-full bg-orange-400"})," Network Status: Active"]})})]})]}),k.jsxs("div",{children:[k.jsx("h5",{className:"text-orange-300 font-bold mb-4 uppercase text-xs tracking-widest font-display",children:"Navigation"}),k.jsx("ul",{className:"space-y-2 text-sm text-orange-100/60",children:k.jsx("li",{children:k.jsx("button",{onClick:()=>n("calendar"),className:"hover:text-orange-300 transition-colors",children:"Union Calendar"})})})]})]}),k.jsxs("div",{className:"max-w-6xl mx-auto mt-12 pt-8 border-t border-orange-900/60 flex flex-col items-center gap-6",children:[k.jsx(av,{}),k.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center w-full gap-4 text-[10px] uppercase tracking-widest text-orange-100/40 font-medium",children:[k.jsxs("p",{children:["© ",new Date().getFullYear()," IPREU. All rights reserved. | Built for the Employees, by the Union."]}),k.jsx("p",{className:"text-orange-400 font-bold px-3 py-1 bg-orange-400/10 rounded-full border border-orange-400/20",children:"Secure Private Network"})]})]})]})]})},ly=({className:n="w-6 h-6"})=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:n,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})}),MT=({activeTab:n,setActiveTab:e,role:t})=>{const i=t==="ADMIN"?[{id:"overview",label:"Home",icon:ly},{id:"announcements",label:"Post",icon:sv},{id:"members",label:"Users",icon:iv}]:[{id:"dashboard",label:"Home",icon:ly},{id:"calendar",label:"Events",icon:ov}];return k.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-orange-100 px-4 py-2 flex justify-around items-center z-50 lg:hidden safe-area-bottom shadow-[0_-10px_30px_rgba(249,115,22,0.1)]",children:i.map(o=>{const l=o.icon,h=n===o.id;return k.jsxs("button",{onClick:()=>{e(o.id),window.scrollTo({top:0,behavior:"smooth"})},className:`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-300 ${h?"text-orange-600 scale-110":"text-orange-950/20 hover:text-orange-600"}`,"aria-label":o.label,children:[k.jsx(l,{className:`w-6 h-6 ${h?"fill-current":"stroke-current"}`}),k.jsx("span",{className:`text-[9px] font-black uppercase tracking-widest ${h?"opacity-100":"opacity-40"}`,children:o.label})]},o.id)})})},FT=()=>{};var uy={};/**
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
 */const lv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},UT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},uv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,g=o+2<n.length,y=g?n[o+2]:0,w=l>>2,A=(l&3)<<4|f>>4;let N=(f&15)<<2|y>>6,B=y&63;g||(B=64,h||(N=64)),i.push(t[w],t[A],t[N],t[B])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(lv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):UT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const A=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||A==null)throw new jT;const N=l<<2|f>>4;if(i.push(N),y!==64){const B=f<<4&240|y>>2;if(i.push(B),A!==64){const Q=y<<6&192|A;i.push(Q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BT=function(n){const e=lv(n);return uv.encodeByteArray(e,!0)},gc=function(n){return BT(n).replace(/\./g,"")},cv=function(n){try{return uv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $T=()=>zT().__FIREBASE_DEFAULTS__,qT=()=>{if(typeof process>"u"||typeof uy>"u")return;const n=uy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},HT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cv(n[1]);return e&&JSON.parse(e)},Uc=()=>{try{return FT()||$T()||qT()||HT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hv=n=>{var e,t;return(t=(e=Uc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},dv=n=>{const e=hv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},fv=()=>{var n;return(n=Uc())==null?void 0:n.config},pv=n=>{var e;return(e=Uc())==null?void 0:e[`_${n}`]};/**
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
 */class WT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function mv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[gc(JSON.stringify(t)),gc(JSON.stringify(h)),""].join(".")}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function GT(){var e;const n=(e=Uc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function JT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XT(){const n=Wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ZT(){return!GT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gv(){try{return typeof indexedDB=="object"}catch{return!1}}function yv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function eI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const tI="FirebaseError";class Hn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=tI,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?nI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Hn(o,f,i)}}function nI(n,e){return n.replace(rI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const rI=/\{\$([^}]+)}/g;function iI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ks(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(cy(l)&&cy(h)){if(!ks(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function cy(n){return n!==null&&typeof n=="object"}/**
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
 */function Tl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ya(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ja(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function sI(n,e){const t=new oI(n,e);return t.subscribe.bind(t)}class oI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");aI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=$d),o.error===void 0&&(o.error=$d),o.complete===void 0&&(o.complete=$d);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $d(){}/**
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
 */function Wo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ff(n){return(await fetch(n,{credentials:"include"})).ok}class Cn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class lI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new WT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cI(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:uI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uI(n){return n===Es?void 0:n}function cI(n){return n.instantiationMode==="EAGER"}/**
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
 */class hI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const dI={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},fI=be.INFO,pI={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},mI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=pI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uf{constructor(e){this.name=e,this._logLevel=fI,this._logHandler=mI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const gI=(n,e)=>e.some(t=>n instanceof t);let hy,dy;function yI(){return hy||(hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _I(){return dy||(dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _v=new WeakMap,uf=new WeakMap,vv=new WeakMap,qd=new WeakMap,jf=new WeakMap;function vI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(zr(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&_v.set(t,n)}).catch(()=>{}),jf.set(e,n),e}function wI(n){if(uf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});uf.set(n,e)}let cf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function EI(n){cf=n(cf)}function TI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Hd(this),e,...t);return vv.set(i,e.sort?e.sort():[e]),zr(i)}:_I().includes(n)?function(...e){return n.apply(Hd(this),e),zr(_v.get(this))}:function(...e){return zr(n.apply(Hd(this),e))}}function II(n){return typeof n=="function"?TI(n):(n instanceof IDBTransaction&&wI(n),gI(n,yI())?new Proxy(n,cf):n)}function zr(n){if(n instanceof IDBRequest)return vI(n);if(qd.has(n))return qd.get(n);const e=II(n);return e!==n&&(qd.set(n,e),jf.set(e,n)),e}const Hd=n=>jf.get(n);function jc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=zr(h);return i&&h.addEventListener("upgradeneeded",g=>{i(zr(h.result),g.oldVersion,g.newVersion,zr(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}function Wd(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),zr(t).then(()=>{})}const SI=["get","getKey","getAll","getAllKeys","count"],AI=["put","add","delete","clear"],Kd=new Map;function fy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Kd.get(e))return Kd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=AI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||SI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return Kd.set(e,l),l}EI(n=>({...n,get:(e,t,i)=>fy(e,t)||n.get(e,t,i),has:(e,t)=>!!fy(e,t)||n.has(e,t)}));/**
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
 */class RI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function kI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hf="@firebase/app",py="0.14.10";/**
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
 */const Hr=new Uf("@firebase/app"),CI="@firebase/app-compat",PI="@firebase/analytics-compat",xI="@firebase/analytics",NI="@firebase/app-check-compat",bI="@firebase/app-check",DI="@firebase/auth",OI="@firebase/auth-compat",VI="@firebase/database",LI="@firebase/data-connect",MI="@firebase/database-compat",FI="@firebase/functions",UI="@firebase/functions-compat",jI="@firebase/installations",BI="@firebase/installations-compat",zI="@firebase/messaging",$I="@firebase/messaging-compat",qI="@firebase/performance",HI="@firebase/performance-compat",WI="@firebase/remote-config",KI="@firebase/remote-config-compat",GI="@firebase/storage",QI="@firebase/storage-compat",YI="@firebase/firestore",JI="@firebase/ai",XI="@firebase/firestore-compat",ZI="firebase",eS="12.11.0";/**
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
 */const df="[DEFAULT]",tS={[hf]:"fire-core",[CI]:"fire-core-compat",[xI]:"fire-analytics",[PI]:"fire-analytics-compat",[bI]:"fire-app-check",[NI]:"fire-app-check-compat",[DI]:"fire-auth",[OI]:"fire-auth-compat",[VI]:"fire-rtdb",[LI]:"fire-data-connect",[MI]:"fire-rtdb-compat",[FI]:"fire-fn",[UI]:"fire-fn-compat",[jI]:"fire-iid",[BI]:"fire-iid-compat",[zI]:"fire-fcm",[$I]:"fire-fcm-compat",[qI]:"fire-perf",[HI]:"fire-perf-compat",[WI]:"fire-rc",[KI]:"fire-rc-compat",[GI]:"fire-gcs",[QI]:"fire-gcs-compat",[YI]:"fire-fst",[XI]:"fire-fst-compat",[JI]:"fire-vertex","fire-js":"fire-js",[ZI]:"fire-js-all"};/**
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
 */const yc=new Map,nS=new Map,ff=new Map;function my(n,e){try{n.container.addComponent(e)}catch(t){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zn(n){const e=n.name;if(ff.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;ff.set(e,n);for(const t of yc.values())my(t,n);for(const t of nS.values())my(t,n);return!0}function Ms(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function gn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const rS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oi=new Ls("app","Firebase",rS);/**
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
 */class iS{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oi.create("app-deleted",{appName:this._name})}}/**
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
 */const Fs=eS;function wv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:df,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Oi.create("bad-app-name",{appName:String(o)});if(t||(t=fv()),!t)throw Oi.create("no-options");const l=yc.get(o);if(l){if(ks(t,l.options)&&ks(i,l.config))return l;throw Oi.create("duplicate-app",{appName:o})}const h=new hI(o);for(const g of ff.values())h.addComponent(g);const f=new iS(t,i,h);return yc.set(o,f),f}function Bc(n=df){const e=yc.get(n);if(!e&&n===df&&fv())return wv();if(!e)throw Oi.create("no-app",{appName:n});return e}function rn(n,e,t){let i=tS[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(h.join(" "));return}zn(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const sS="firebase-heartbeat-database",oS=1,ul="firebase-heartbeat-store";let Gd=null;function Ev(){return Gd||(Gd=jc(sS,oS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ul)}catch(t){console.warn(t)}}}}).catch(n=>{throw Oi.create("idb-open",{originalErrorMessage:n.message})})),Gd}async function aS(n){try{const t=(await Ev()).transaction(ul),i=await t.objectStore(ul).get(Tv(n));return await t.done,i}catch(e){if(e instanceof Hn)Hr.warn(e.message);else{const t=Oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hr.warn(t.message)}}}async function gy(n,e){try{const i=(await Ev()).transaction(ul,"readwrite");await i.objectStore(ul).put(e,Tv(n)),await i.done}catch(t){if(t instanceof Hn)Hr.warn(t.message);else{const i=Oi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Hr.warn(i.message)}}}function Tv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lS=1024,uS=30;class cS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=yy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>uS){const h=fS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Hr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yy(),{heartbeatsToSend:i,unsentEntries:o}=hS(this._heartbeatsCache.heartbeats),l=gc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Hr.warn(t),""}}}function yy(){return new Date().toISOString().substring(0,10)}function hS(n,e=lS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),_y(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),_y(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class dS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gv()?yv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return gy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return gy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _y(n){return gc(JSON.stringify({version:2,heartbeats:n})).length}function fS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function pS(n){zn(new Cn("platform-logger",e=>new RI(e),"PRIVATE")),zn(new Cn("heartbeat",e=>new cS(e),"PRIVATE")),rn(hf,py,n),rn(hf,py,"esm2020"),rn("fire-js","")}pS("");var mS="firebase",gS="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(mS,gS,"app");function Iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yS=Iv,Sv=new Ls("auth","Firebase",Iv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Uf("@firebase/auth");function _S(n,...e){_c.logLevel<=be.WARN&&_c.warn(`Auth (${Fs}): ${n}`,...e)}function sc(n,...e){_c.logLevel<=be.ERROR&&_c.error(`Auth (${Fs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n,...e){throw Bf(n,...e)}function hr(n,...e){return Bf(n,...e)}function Av(n,e,t){const i={...yS(),[e]:t};return new Ls("auth","Firebase",i).create(e,{appName:n.name})}function $r(n){return Av(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Sv.create(n,...e)}function me(n,e,...t){if(!n)throw Bf(e,...t)}function jr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw sc(e),new Error(e)}function Wr(n,e){n||jr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function vS(){return vy()==="http:"||vy()==="https:"}function vy(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vS()||YT()||"connection"in navigator)?navigator.onLine:!0}function ES(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wr(t>e,"Short delay should be less than long delay!"),this.isMobile=KT()||JT()}get(){return wS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n,e){Wr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SS=new Il(3e4,6e4);function $i(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function qi(n,e,t,i,o={}){return kv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=Tl({key:n.config.apiKey,...h}).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:g,...l};return QT()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Wo(n.emulatorConfig.host)&&(y.credentials="include"),Rv.fetch()(await Cv(n,n.config.apiHost,t,f),y)})}async function kv(n,e,t){n._canInitEmulator=!1;const i={...TS,...e};try{const o=new RS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Qu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(n,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Qu(n,"email-already-in-use",h);if(g==="USER_DISABLED")throw Qu(n,"user-disabled",h);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Av(n,w,y);$n(n,w)}}catch(o){if(o instanceof Hn)throw o;$n(n,"network-request-failed",{message:String(o)})}}async function Sl(n,e,t,i,o={}){const l=await qi(n,e,t,i,o);return"mfaPendingCredential"in l&&$n(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Cv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?zf(n.config,o):`${n.config.apiScheme}://${o}`;return IS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function AS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(hr(this.auth,"network-request-failed")),SS.get())})}}function Qu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=hr(n,e,i);return o.customData._tokenResponse=t,o}function wy(n){return n!==void 0&&n.enterprise!==void 0}class kS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return AS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function CS(n,e){return qi(n,"GET","/v2/recaptchaConfig",$i(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(n,e){return qi(n,"POST","/v1/accounts:delete",e)}async function vc(n,e){return qi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xS(n,e=!1){const t=rt(n),i=await t.getIdToken(e),o=$f(i);me(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:rl(Qd(o.auth_time)),issuedAtTime:rl(Qd(o.iat)),expirationTime:rl(Qd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Qd(n){return Number(n)*1e3}function $f(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const o=cv(t);return o?JSON.parse(o):(sc("Failed to decode base64 JWT payload"),null)}catch(o){return sc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ey(n){const e=$f(n);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Hn&&NS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function NS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rl(this.lastLoginAt),this.creationTime=rl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wc(n){var A;const e=n.auth,t=await n.getIdToken(),i=await cl(n,vc(e,{idToken:t}));me(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=(A=o.providerUserInfo)!=null&&A.length?Pv(o.providerUserInfo):[],h=OS(n.providerData,l),f=n.isAnonymous,g=!(n.email&&o.passwordHash)&&!(h!=null&&h.length),y=f?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new mf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function DS(n){const e=rt(n);await wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Pv(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(n,e){const t=await kv(n,{},async()=>{const i=Tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await Cv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return n.emulatorConfig&&Wo(n.emulatorConfig.host)&&(g.credentials="include"),Rv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function LS(n,e){return qi(n,"POST","/v2/accounts:revokeToken",$i(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ey(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){me(e.length!==0,"internal-error");const t=Ey(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await VS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Lo;return i&&(me(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(me(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(me(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lo,this.toJSON())}_performRefresh(){return jr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n,e){me(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Un{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new bS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new mf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await cl(this,this.stsTokenManager.getToken(this.auth,e));return me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xS(this,e)}reload(){return DS(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Un({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await wc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject($r(this.auth));const e=await this.getIdToken();return await cl(this,PS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:A,emailVerified:N,isAnonymous:B,providerData:Q,stsTokenManager:Y}=t;me(A&&Y,e,"internal-error");const q=Lo.fromJSON(this.name,Y);me(typeof A=="string",e,"internal-error"),ki(i,e.name),ki(o,e.name),me(typeof N=="boolean",e,"internal-error"),me(typeof B=="boolean",e,"internal-error"),ki(l,e.name),ki(h,e.name),ki(f,e.name),ki(g,e.name),ki(y,e.name),ki(w,e.name);const pe=new Un({uid:A,auth:e,email:o,emailVerified:N,displayName:i,isAnonymous:B,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:q,createdAt:y,lastLoginAt:w});return Q&&Array.isArray(Q)&&(pe.providerData=Q.map(Ee=>({...Ee}))),g&&(pe._redirectEventId=g),pe}static async _fromIdTokenResponse(e,t,i=!1){const o=new Lo;o.updateFromServerResponse(t);const l=new Un({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await wc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];me(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Pv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Lo;f.updateFromIdToken(i);const g=new Un({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new mf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new Map;function Br(n){Wr(n instanceof Function,"Expected a class definition");let e=Ty.get(n);return e?(Wr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ty.set(n,e),e)}/**
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
 */class xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xv.type="NONE";const Iy=xv;/**
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
 */function oc(n,e,t){return`firebase:${n}:${e}:${t}`}class Mo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=oc(this.userKey,o.apiKey,l),this.fullPersistenceKey=oc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await vc(this.auth,{idToken:e}).catch(()=>{});return t?Un._fromGetAccountInfoResponse(this.auth,t,e):null}return Un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Mo(Br(Iy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Br(Iy);const h=oc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(h);if(w){let A;if(typeof w=="string"){const N=await vc(e,{idToken:w}).catch(()=>{});if(!N)break;A=await Un._fromGetAccountInfoResponse(e,N,w)}else A=Un._fromJSON(e,w);y!==l&&(f=A),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Mo(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Mo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lv(e))return"Blackberry";if(Mv(e))return"Webos";if(bv(e))return"Safari";if((e.includes("chrome/")||Dv(e))&&!e.includes("edge/"))return"Chrome";if(Vv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Nv(n=Wt()){return/firefox\//i.test(n)}function bv(n=Wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dv(n=Wt()){return/crios\//i.test(n)}function Ov(n=Wt()){return/iemobile/i.test(n)}function Vv(n=Wt()){return/android/i.test(n)}function Lv(n=Wt()){return/blackberry/i.test(n)}function Mv(n=Wt()){return/webos/i.test(n)}function qf(n=Wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function MS(n=Wt()){var e;return qf(n)&&!!((e=window.navigator)!=null&&e.standalone)}function FS(){return XT()&&document.documentMode===10}function Fv(n=Wt()){return qf(n)||Vv(n)||Mv(n)||Lv(n)||/windows phone/i.test(n)||Ov(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(n,e=[]){let t;switch(n){case"Browser":t=Sy(Wt());break;case"Worker":t=`${Sy(Wt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fs}/${i}`}/**
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
 */class US{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function jS(n,e={}){return qi(n,"GET","/v2/passwordPolicy",$i(n,e))}/**
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
 */const BS=6;class zS{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??BS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ay(this),this.idTokenSubscription=new Ay(this),this.beforeStateQueue=new US(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Br(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Mo.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vc(this,{idToken:e}),i=await Un._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(gn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(i=g.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(h){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ES()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject($r(this));const t=e?rt(e):null;return t&&me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject($r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject($r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jS(this),t=new zS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await LS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Br(e)||this._popupRedirectResolver;me(t,this,"argument-error"),this.redirectPersistenceManager=await Mo.create(this,[Br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&_S(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Us(n){return rt(n)}class Ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=sI(t=>this.observer=t)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qS(n){zc=n}function jv(n){return zc.loadJS(n)}function HS(){return zc.recaptchaEnterpriseScript}function WS(){return zc.gapiScript}function KS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class GS{constructor(){this.enterprise=new QS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class QS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const YS="recaptcha-enterprise",Bv="NO_RECAPTCHA";class JS{constructor(e){this.type=YS,this.auth=Us(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{CS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new kS(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;wy(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(Bv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new GS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&wy(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=HS();g.length!==0&&(g+=f),jv(g).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function Ry(n,e,t,i=!1,o=!1){const l=new JS(n);let h;if(o)h=Bv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function gf(n,e,t,i,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Ry(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Ry(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(n,e){const t=Ms(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ks(l,e??{}))return o;$n(o,"already-initialized")}return t.initialize({options:e})}function ZS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function eA(n,e,t){const i=Us(n);me(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=zv(e),{host:h,port:f}=tA(e),g=f===null?"":`:${f}`,y={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){me(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),me(ks(y,i.config.emulator)&&ks(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Wo(h)?Ff(`${l}//${h}${g}`):nA()}function zv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function tA(n){const e=zv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:ky(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:ky(h)}}}function ky(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function nA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return jr("not implemented")}_getIdTokenResponse(e){return jr("not implemented")}_linkToIdToken(e,t){return jr("not implemented")}_getReauthenticationResolver(e){return jr("not implemented")}}async function rA(n,e){return qi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(n,e){return Sl(n,"POST","/v1/accounts:signInWithPassword",$i(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(n,e){return Sl(n,"POST","/v1/accounts:signInWithEmailLink",$i(n,e))}async function oA(n,e){return Sl(n,"POST","/v1/accounts:signInWithEmailLink",$i(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Hf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new hl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new hl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gf(e,t,"signInWithPassword",iA);case"emailLink":return sA(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gf(e,i,"signUpPassword",rA);case"emailLink":return oA(e,{idToken:t,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(n,e){return Sl(n,"POST","/v1/accounts:signInWithIdp",$i(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="http://localhost";class Cs extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new Cs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Fo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Fo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fo(e,t)}buildRequest(){const e={requestUri:aA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Tl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uA(n){const e=Ya(Ja(n)).link,t=e?Ya(Ja(e)).deep_link_id:null,i=Ya(Ja(n)).deep_link_id;return(i?Ya(Ja(i)).link:null)||i||t||e||n}class Wf{constructor(e){const t=Ya(Ja(e)),i=t.apiKey??null,o=t.oobCode??null,l=lA(t.mode??null);me(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=uA(e);try{return new Wf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.providerId=Ko.PROVIDER_ID}static credential(e,t){return hl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Wf.parseLink(t);return me(i,"argument-error"),hl._fromEmailAndCode(e,i.code,i.tenantId)}}Ko.PROVIDER_ID="password";Ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Al extends $v{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Al{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ci.credential(e.oauthAccessToken)}catch{return null}}}Ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ci.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cs._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Pi.credential(t,i)}catch{return null}}}Pi.GOOGLE_SIGN_IN_METHOD="google.com";Pi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Al{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xi.credential(e.oauthAccessToken)}catch{return null}}}xi.GITHUB_SIGN_IN_METHOD="github.com";xi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Al{constructor(){super("twitter.com")}static credential(e,t){return Cs._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ni.credential(t,i)}catch{return null}}}Ni.TWITTER_SIGN_IN_METHOD="twitter.com";Ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(n,e){return Sl(n,"POST","/v1/accounts:signUp",$i(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Un._fromIdTokenResponse(e,i,o),h=Cy(i);return new Ps({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Cy(i);return new Ps({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Cy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends Hn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Ec.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Ec(e,t,i,o)}}function qv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ec._fromErrorAndOperation(n,l,e,i):l})}async function hA(n,e,t=!1){const i=await cl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ps._forOperation(n,"link",i)}/**
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
 */async function dA(n,e,t=!1){const{auth:i}=n;if(gn(i.app))return Promise.reject($r(i));const o="reauthenticate";try{const l=await cl(n,qv(i,o,e,n),t);me(l.idToken,i,"internal-error");const h=$f(l.idToken);me(h,i,"internal-error");const{sub:f}=h;return me(n.uid===f,i,"user-mismatch"),Ps._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&$n(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(n,e,t=!1){if(gn(n.app))return Promise.reject($r(n));const i="signIn",o=await qv(n,i,e),l=await Ps._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function fA(n,e){return Hv(Us(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(n){const e=Us(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pA(n,e,t){if(gn(n.app))return Promise.reject($r(n));const i=Us(n),h=await gf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cA).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Wv(n),g}),f=await Ps._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function mA(n,e,t){return gn(n.app)?Promise.reject($r(n)):fA(rt(n),Ko.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Wv(n),i})}function gA(n,e,t,i){return rt(n).onIdTokenChanged(e,t,i)}function yA(n,e,t){return rt(n).beforeAuthStateChanged(e,t)}function _A(n,e,t,i){return rt(n).onAuthStateChanged(e,t,i)}function ac(n){return rt(n).signOut()}const Tc="__sak";/**
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
 */class Kv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Tc,"1"),this.storage.removeItem(Tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=1e3,wA=10;class Gv extends Kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);FS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,wA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},vA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gv.type="LOCAL";const EA=Gv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv extends Kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qv.type="SESSION";const Yv=Qv;/**
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
 */function TA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class $c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new $c(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),g=await TA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class IA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const y=Kf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(A){const N=A;if(N.data.eventId===y)switch(N.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(N.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return window}function SA(n){dr().location.href=n}/**
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
 */function Jv(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function AA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function kA(){return Jv()?self:null}/**
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
 */const Xv="firebaseLocalStorageDb",CA=1,Ic="firebaseLocalStorage",Zv="fbase_key";class Rl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qc(n,e){return n.transaction([Ic],e?"readwrite":"readonly").objectStore(Ic)}function PA(){const n=indexedDB.deleteDatabase(Xv);return new Rl(n).toPromise()}function yf(){const n=indexedDB.open(Xv,CA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ic,{keyPath:Zv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ic)?e(i):(i.close(),await PA(),e(await yf()))})})}async function Py(n,e,t){const i=qc(n,!0).put({[Zv]:e,value:t});return new Rl(i).toPromise()}async function xA(n,e){const t=qc(n,!1).get(e),i=await new Rl(t).toPromise();return i===void 0?null:i.value}function xy(n,e){const t=qc(n,!0).delete(e);return new Rl(t).toPromise()}const NA=800,bA=3;class ew{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>bA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$c._getInstance(kA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await AA(),!this.activeServiceWorker)return;this.sender=new IA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yf();return await Py(e,Tc,"1"),await xy(e,Tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Py(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>xA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=qc(o,!1).getAll();return new Rl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ew.type="LOCAL";const DA=ew;new Il(3e4,6e4);/**
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
 */function OA(n,e){return e?Br(e):(me(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Gf extends Hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function VA(n){return Hv(n.auth,new Gf(n),n.bypassAuthState)}function LA(n){const{auth:e,user:t}=n;return me(t,e,"internal-error"),dA(t,new Gf(n),n.bypassAuthState)}async function MA(n){const{auth:e,user:t}=n;return me(t,e,"internal-error"),hA(t,new Gf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VA;case"linkViaPopup":case"linkViaRedirect":return MA;case"reauthViaPopup":case"reauthViaRedirect":return LA;default:$n(this.auth,"internal-error")}}resolve(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=new Il(2e3,1e4);class Vo extends tw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Vo.currentPopupAction&&Vo.currentPopupAction.cancel(),Vo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Wr(this.filter.length===1,"Popup operations only handle one event");const e=Kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(hr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(hr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FA.get())};e()}}Vo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="pendingRedirect",lc=new Map;class jA extends tw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=lc.get(this.auth._key());if(!e){try{const i=await BA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}lc.set(this.auth._key(),e)}return this.bypassAuthState||lc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BA(n,e){const t=qA(e),i=$A(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function zA(n,e){lc.set(n._key(),e)}function $A(n){return Br(n._redirectPersistence)}function qA(n){return oc(UA,n.config.apiKey,n.name)}async function HA(n,e,t=!1){if(gn(n.app))return Promise.reject($r(n));const i=Us(n),o=OA(i,e),h=await new jA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=600*1e3;class KA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!nw(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(hr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ny(e))}saveEventToCache(e){this.cachedEventUids.add(Ny(e)),this.lastProcessedEventTime=Date.now()}}function Ny(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(n,e={}){return qi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JA=/^https?/;async function XA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await QA(n);for(const t of e)try{if(ZA(t))return}catch{}$n(n,"unauthorized-domain")}function ZA(n){const e=pf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!JA.test(t))return!1;if(YA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const eR=new Il(3e4,6e4);function by(){const n=dr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tR(n){return new Promise((e,t)=>{var o,l,h;function i(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),t(hr(n,"network-request-failed"))},timeout:eR.get()})}if((l=(o=dr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=dr().gapi)!=null&&h.load)i();else{const f=KS("iframefcb");return dr()[f]=()=>{gapi.load?i():t(hr(n,"network-request-failed"))},jv(`${WS()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw uc=null,e})}let uc=null;function nR(n){return uc=uc||tR(n),uc}/**
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
 */const rR=new Il(5e3,15e3),iR="__/auth/iframe",sR="emulator/auth/iframe",oR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lR(n){const e=n.config;me(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zf(e,sR):`https://${n.config.authDomain}/${iR}`,i={apiKey:e.apiKey,appName:n.name,v:Fs},o=aR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Tl(i).slice(1)}`}async function uR(n){const e=await nR(n),t=dr().gapi;return me(t,n,"internal-error"),e.open({where:document.body,url:lR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=hr(n,"network-request-failed"),f=dr().setTimeout(()=>{l(h)},rR.get());function g(){dr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const cR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hR=500,dR=600,fR="_blank",pR="http://localhost";class Dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mR(n,e,t,i=hR,o=dR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...cR,width:i.toString(),height:o.toString(),top:l,left:h},y=Wt().toLowerCase();t&&(f=Dv(y)?fR:t),Nv(y)&&(e=e||pR,g.scrollbars="yes");const w=Object.entries(g).reduce((N,[B,Q])=>`${N}${B}=${Q},`,"");if(MS(y)&&f!=="_self")return gR(e||"",f),new Dy(null);const A=window.open(e||"",f,w);me(A,n,"popup-blocked");try{A.focus()}catch{}return new Dy(A)}function gR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const yR="__/auth/handler",_R="emulator/auth/handler",vR=encodeURIComponent("fac");async function Oy(n,e,t,i,o,l){me(n.config.authDomain,n,"auth-domain-config-required"),me(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Fs,eventId:o};if(e instanceof $v){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",iI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof Al){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await n._getAppCheckToken(),y=g?`#${vR}=${encodeURIComponent(g)}`:"";return`${wR(n)}?${Tl(f).slice(1)}${y}`}function wR({config:n}){return n.emulator?zf(n,_R):`https://${n.authDomain}/${yR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="webStorageSupport";class ER{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yv,this._completeRedirectFn=HA,this._overrideRedirectResult=zA}async _openPopup(e,t,i,o){var h;Wr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await Oy(e,t,i,pf(),o);return mR(e,l,Kf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Oy(e,t,i,pf(),o);return SA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Wr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await uR(e),i=new KA(e);return t.register("authEvent",o=>(me(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yd,{type:Yd},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[Yd];l!==void 0&&t(!!l),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=XA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fv()||bv()||qf()}}const TR=ER;var Vy="@firebase/auth",Ly="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AR(n){zn(new Cn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;me(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uv(n)},y=new $S(i,o,l,g);return ZS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),zn(new Cn("auth-internal",e=>{const t=Us(e.getProvider("auth").getImmediate());return(i=>new IR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Vy,Ly,SR(n)),rn(Vy,Ly,"esm2020")}/**
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
 */const RR=300,kR=pv("authIdTokenMaxAge")||RR;let My=null;const CR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>kR)return;const o=t==null?void 0:t.token;My!==o&&(My=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function PR(n=Bc()){const e=Ms(n,"auth");if(e.isInitialized())return e.getImmediate();const t=XS(n,{popupRedirectResolver:TR,persistence:[DA,EA,Yv]}),i=pv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=CR(l.toString());yA(t,h,()=>h(t.currentUser)),gA(t,f=>h(f))}}const o=hv("auth");return o&&eA(t,`http://${o}`),t}function xR(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}qS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=hr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",xR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AR("Browser");const rw="@firebase/installations",Qf="0.6.21";/**
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
 */const iw=1e4,sw=`w:${Qf}`,ow="FIS_v2",NR="https://firebaseinstallations.googleapis.com/v1",bR=3600*1e3,DR="installations",OR="Installations";/**
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
 */const VR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xs=new Ls(DR,OR,VR);function aw(n){return n instanceof Hn&&n.code.includes("request-failed")}/**
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
 */function lw({projectId:n}){return`${NR}/projects/${n}/installations`}function uw(n){return{token:n.token,requestStatus:2,expiresIn:MR(n.expiresIn),creationTime:Date.now()}}async function cw(n,e){const i=(await e.json()).error;return xs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function hw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function LR(n,{refreshToken:e}){const t=hw(n);return t.append("Authorization",FR(e)),t}async function dw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function MR(n){return Number(n.replace("s","000"))}function FR(n){return`${ow} ${n}`}/**
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
 */async function UR({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=lw(n),o=hw(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:ow,appId:n.appId,sdkVersion:sw},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await dw(()=>fetch(i,f));if(g.ok){const y=await g.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:uw(y.authToken)}}else throw await cw("Create Installation",g)}/**
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
 */function fw(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function jR(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const BR=/^[cdef][\w-]{21}$/,_f="";function zR(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=$R(n);return BR.test(t)?t:_f}catch{return _f}}function $R(n){return jR(n).substr(0,22)}/**
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
 */function Hc(n){return`${n.appName}!${n.appId}`}/**
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
 */const pw=new Map;function mw(n,e){const t=Hc(n);gw(t,e),qR(t,e)}function gw(n,e){const t=pw.get(n);if(t)for(const i of t)i(e)}function qR(n,e){const t=HR();t&&t.postMessage({key:n,fid:e}),WR()}let Ts=null;function HR(){return!Ts&&"BroadcastChannel"in self&&(Ts=new BroadcastChannel("[Firebase] FID Change"),Ts.onmessage=n=>{gw(n.data.key,n.data.fid)}),Ts}function WR(){pw.size===0&&Ts&&(Ts.close(),Ts=null)}/**
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
 */const KR="firebase-installations-database",GR=1,Ns="firebase-installations-store";let Jd=null;function Yf(){return Jd||(Jd=jc(KR,GR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ns)}}})),Jd}async function Sc(n,e){const t=Hc(n),o=(await Yf()).transaction(Ns,"readwrite"),l=o.objectStore(Ns),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&mw(n,e.fid),e}async function yw(n){const e=Hc(n),i=(await Yf()).transaction(Ns,"readwrite");await i.objectStore(Ns).delete(e),await i.done}async function Wc(n,e){const t=Hc(n),o=(await Yf()).transaction(Ns,"readwrite"),l=o.objectStore(Ns),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&mw(n,f.fid),f}/**
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
 */async function Jf(n){let e;const t=await Wc(n.appConfig,i=>{const o=QR(i),l=YR(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===_f?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function QR(n){const e=n||{fid:zR(),registrationStatus:0};return _w(e)}function YR(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(xs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=JR(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:XR(n)}:{installationEntry:e}}async function JR(n,e){try{const t=await UR(n,e);return Sc(n.appConfig,t)}catch(t){throw aw(t)&&t.customData.serverCode===409?await yw(n.appConfig):await Sc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function XR(n){let e=await Fy(n.appConfig);for(;e.registrationStatus===1;)await fw(100),e=await Fy(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Jf(n);return i||t}return e}function Fy(n){return Wc(n,e=>{if(!e)throw xs.create("installation-not-found");return _w(e)})}function _w(n){return ZR(n)?{fid:n.fid,registrationStatus:0}:n}function ZR(n){return n.registrationStatus===1&&n.registrationTime+iw<Date.now()}/**
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
 */async function ek({appConfig:n,heartbeatServiceProvider:e},t){const i=tk(n,t),o=LR(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:sw,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await dw(()=>fetch(i,f));if(g.ok){const y=await g.json();return uw(y)}else throw await cw("Generate Auth Token",g)}function tk(n,{fid:e}){return`${lw(n)}/${e}/authTokens:generate`}/**
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
 */async function Xf(n,e=!1){let t;const i=await Wc(n.appConfig,l=>{if(!vw(l))throw xs.create("not-registered");const h=l.authToken;if(!e&&ik(h))return l;if(h.requestStatus===1)return t=nk(n,e),l;{if(!navigator.onLine)throw xs.create("app-offline");const f=ok(l);return t=rk(n,f),f}});return t?await t:i.authToken}async function nk(n,e){let t=await Uy(n.appConfig);for(;t.authToken.requestStatus===1;)await fw(100),t=await Uy(n.appConfig);const i=t.authToken;return i.requestStatus===0?Xf(n,e):i}function Uy(n){return Wc(n,e=>{if(!vw(e))throw xs.create("not-registered");const t=e.authToken;return ak(t)?{...e,authToken:{requestStatus:0}}:e})}async function rk(n,e){try{const t=await ek(n,e),i={...e,authToken:t};return await Sc(n.appConfig,i),t}catch(t){if(aw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await yw(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Sc(n.appConfig,i)}throw t}}function vw(n){return n!==void 0&&n.registrationStatus===2}function ik(n){return n.requestStatus===2&&!sk(n)}function sk(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+bR}function ok(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function ak(n){return n.requestStatus===1&&n.requestTime+iw<Date.now()}/**
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
 */async function lk(n){const e=n,{installationEntry:t,registrationPromise:i}=await Jf(e);return i?i.catch(console.error):Xf(e).catch(console.error),t.fid}/**
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
 */async function uk(n,e=!1){const t=n;return await ck(t),(await Xf(t,e)).token}async function ck(n){const{registrationPromise:e}=await Jf(n);e&&await e}/**
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
 */function hk(n){if(!n||!n.options)throw Xd("App Configuration");if(!n.name)throw Xd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Xd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Xd(n){return xs.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="installations",dk="installations-internal",fk=n=>{const e=n.getProvider("app").getImmediate(),t=hk(e),i=Ms(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},pk=n=>{const e=n.getProvider("app").getImmediate(),t=Ms(e,ww).getImmediate();return{getId:()=>lk(t),getToken:o=>uk(t,o)}};function mk(){zn(new Cn(ww,fk,"PUBLIC")),zn(new Cn(dk,pk,"PRIVATE"))}mk();rn(rw,Qf);rn(rw,Qf,"esm2020");/**
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
 */const gk="/firebase-messaging-sw.js",yk="/firebase-cloud-messaging-push-scope",Ew="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",_k="https://fcmregistrations.googleapis.com/v1",Tw="google.c.a.c_id",vk="google.c.a.c_l",wk="google.c.a.ts",Ek="google.c.a.e",jy=1e4;var By;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(By||(By={}));/**
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
 */var dl;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(dl||(dl={}));/**
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
 */function Mr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Tk(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const Zd="fcm_token_details_db",Ik=5,zy="fcm_token_object_Store";async function Sk(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Zd))return null;let e=null;return(await jc(Zd,Ik,{upgrade:async(i,o,l,h)=>{if(o<2||!i.objectStoreNames.contains(zy))return;const f=h.objectStore(zy),g=await f.index("fcmSenderId").get(n);if(await f.clear(),!!g){if(o===2){const y=g;if(!y.auth||!y.p256dh||!y.endpoint)return;e={token:y.fcmToken,createTime:y.createTime??Date.now(),subscriptionOptions:{auth:y.auth,p256dh:y.p256dh,endpoint:y.endpoint,swScope:y.swScope,vapidKey:typeof y.vapidKey=="string"?y.vapidKey:Mr(y.vapidKey)}}}else if(o===3){const y=g;e={token:y.fcmToken,createTime:y.createTime,subscriptionOptions:{auth:Mr(y.auth),p256dh:Mr(y.p256dh),endpoint:y.endpoint,swScope:y.swScope,vapidKey:Mr(y.vapidKey)}}}else if(o===4){const y=g;e={token:y.fcmToken,createTime:y.createTime,subscriptionOptions:{auth:Mr(y.auth),p256dh:Mr(y.p256dh),endpoint:y.endpoint,swScope:y.swScope,vapidKey:Mr(y.vapidKey)}}}}}})).close(),await Wd(Zd),await Wd("fcm_vapid_details_db"),await Wd("undefined"),Ak(e)?e:null}function Ak(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Rk="firebase-messaging-database",kk=1,fl="firebase-messaging-store";let ef=null;function Iw(){return ef||(ef=jc(Rk,kk,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(fl)}}})),ef}async function Ck(n){const e=Sw(n),i=await(await Iw()).transaction(fl).objectStore(fl).get(e);if(i)return i;{const o=await Sk(n.appConfig.senderId);if(o)return await Zf(n,o),o}}async function Zf(n,e){const t=Sw(n),o=(await Iw()).transaction(fl,"readwrite");return await o.objectStore(fl).put(e,t),await o.done,e}function Sw({appConfig:n}){return n.appId}/**
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
 */const Pk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ht=new Ls("messaging","Messaging",Pk);/**
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
 */async function xk(n,e){const t=await tp(n),i=Aw(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(ep(n.appConfig),o)).json()}catch(h){throw Ht.create("token-subscribe-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw Ht.create("token-subscribe-failed",{errorInfo:h})}if(!l.token)throw Ht.create("token-subscribe-no-token");return l.token}async function Nk(n,e){const t=await tp(n),i=Aw(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${ep(n.appConfig)}/${e.token}`,o)).json()}catch(h){throw Ht.create("token-update-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw Ht.create("token-update-failed",{errorInfo:h})}if(!l.token)throw Ht.create("token-update-no-token");return l.token}async function bk(n,e){const i={method:"DELETE",headers:await tp(n)};try{const l=await(await fetch(`${ep(n.appConfig)}/${e}`,i)).json();if(l.error){const h=l.error.message;throw Ht.create("token-unsubscribe-failed",{errorInfo:h})}}catch(o){throw Ht.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function ep({projectId:n}){return`${_k}/projects/${n}/registrations`}async function tp({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Aw({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==Ew&&(o.web.applicationPubKey=i),o}/**
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
 */const Dk=10080*60*1e3;async function Ok(n){const e=await Lk(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Mr(e.getKey("auth")),p256dh:Mr(e.getKey("p256dh"))},i=await Ck(n.firebaseDependencies);if(i){if(Mk(i.subscriptionOptions,t))return Date.now()>=i.createTime+Dk?Vk(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await bk(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return $y(n.firebaseDependencies,t)}else return $y(n.firebaseDependencies,t)}async function Vk(n,e){try{const t=await Nk(n.firebaseDependencies,e),i={...e,token:t,createTime:Date.now()};return await Zf(n.firebaseDependencies,i),t}catch(t){throw t}}async function $y(n,e){const i={token:await xk(n,e),createTime:Date.now(),subscriptionOptions:e};return await Zf(n,i),i.token}async function Lk(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Tk(e)})}function Mk(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return Fk(e,n),Uk(e,n),jk(e,n),e}function Fk(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function Uk(n,e){e.data&&(n.data=e.data)}function jk(n,e){var o,l,h,f;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;n.fcmOptions={};const t=((l=e.fcmOptions)==null?void 0:l.link)??((h=e.notification)==null?void 0:h.click_action);t&&(n.fcmOptions.link=t);const i=(f=e.fcmOptions)==null?void 0:f.analytics_label;i&&(n.fcmOptions.analyticsLabel=i)}/**
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
 */function Bk(n){return typeof n=="object"&&!!n&&Tw in n}/**
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
 */function zk(n){if(!n||!n.options)throw tf("App Configuration Object");if(!n.name)throw tf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw tf(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function tf(n){return Ht.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=zk(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(n){try{n.swRegistration=await navigator.serviceWorker.register(gk,{scope:yk}),n.swRegistration.update().catch(()=>{}),await Hk(n.swRegistration)}catch(e){throw Ht.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function Hk(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${jy} ms`)),jy),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var h;((h=l.target)==null?void 0:h.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(n,e){if(!e&&!n.swRegistration&&await qk(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ht.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Ew)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(n,e){if(!navigator)throw Ht.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ht.create("permission-blocked");return await Kk(n,e==null?void 0:e.vapidKey),await Wk(n,e==null?void 0:e.serviceWorkerRegistration),Ok(n)}/**
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
 */async function Gk(n,e,t){const i=Qk(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[Tw],message_name:t[vk],message_time:t[wk],message_device_time:Math.floor(Date.now()/1e3)})}function Qk(n){switch(n){case dl.NOTIFICATION_CLICKED:return"notification_open";case dl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Yk(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===dl.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(qy(t)):n.onMessageHandler.next(qy(t)));const i=t.data;Bk(i)&&i[Ek]==="1"&&await Gk(n,t.messageType,i)}const Hy="@firebase/messaging",Wy="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=n=>{const e=new $k(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>Yk(e,t)),e},Xk=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>Rw(e,i)}};function Zk(){zn(new Cn("messaging",Jk,"PUBLIC")),zn(new Cn("messaging-internal",Xk,"PRIVATE")),rn(Hy,Wy),rn(Hy,Wy,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(){try{await yv()}catch{return!1}return typeof window<"u"&&gv()&&eI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(n,e){if(!navigator)throw Ht.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function n1(n=Bc()){return e1().then(e=>{if(!e)throw Ht.create("unsupported-browser")},e=>{throw Ht.create("indexed-db-unsupported")}),Ms(rt(n),"messaging").getImmediate()}async function r1(n,e){return n=rt(n),Rw(n,e)}function i1(n,e){return n=rt(n),t1(n,e)}Zk();var Ky=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vi,kw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,R){function C(){}C.prototype=R.prototype,b.F=R.prototype,b.prototype=new C,b.prototype.constructor=b,b.D=function(V,I,D){for(var T=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)T[ue-2]=arguments[ue];return R.prototype[I].apply(V,T)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(b,R,C){C||(C=0);const V=Array(16);if(typeof R=="string")for(var I=0;I<16;++I)V[I]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(I=0;I<16;++I)V[I]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=b.g[0],C=b.g[1],I=b.g[2];let D=b.g[3],T;T=R+(D^C&(I^D))+V[0]+3614090360&4294967295,R=C+(T<<7&4294967295|T>>>25),T=D+(I^R&(C^I))+V[1]+3905402710&4294967295,D=R+(T<<12&4294967295|T>>>20),T=I+(C^D&(R^C))+V[2]+606105819&4294967295,I=D+(T<<17&4294967295|T>>>15),T=C+(R^I&(D^R))+V[3]+3250441966&4294967295,C=I+(T<<22&4294967295|T>>>10),T=R+(D^C&(I^D))+V[4]+4118548399&4294967295,R=C+(T<<7&4294967295|T>>>25),T=D+(I^R&(C^I))+V[5]+1200080426&4294967295,D=R+(T<<12&4294967295|T>>>20),T=I+(C^D&(R^C))+V[6]+2821735955&4294967295,I=D+(T<<17&4294967295|T>>>15),T=C+(R^I&(D^R))+V[7]+4249261313&4294967295,C=I+(T<<22&4294967295|T>>>10),T=R+(D^C&(I^D))+V[8]+1770035416&4294967295,R=C+(T<<7&4294967295|T>>>25),T=D+(I^R&(C^I))+V[9]+2336552879&4294967295,D=R+(T<<12&4294967295|T>>>20),T=I+(C^D&(R^C))+V[10]+4294925233&4294967295,I=D+(T<<17&4294967295|T>>>15),T=C+(R^I&(D^R))+V[11]+2304563134&4294967295,C=I+(T<<22&4294967295|T>>>10),T=R+(D^C&(I^D))+V[12]+1804603682&4294967295,R=C+(T<<7&4294967295|T>>>25),T=D+(I^R&(C^I))+V[13]+4254626195&4294967295,D=R+(T<<12&4294967295|T>>>20),T=I+(C^D&(R^C))+V[14]+2792965006&4294967295,I=D+(T<<17&4294967295|T>>>15),T=C+(R^I&(D^R))+V[15]+1236535329&4294967295,C=I+(T<<22&4294967295|T>>>10),T=R+(I^D&(C^I))+V[1]+4129170786&4294967295,R=C+(T<<5&4294967295|T>>>27),T=D+(C^I&(R^C))+V[6]+3225465664&4294967295,D=R+(T<<9&4294967295|T>>>23),T=I+(R^C&(D^R))+V[11]+643717713&4294967295,I=D+(T<<14&4294967295|T>>>18),T=C+(D^R&(I^D))+V[0]+3921069994&4294967295,C=I+(T<<20&4294967295|T>>>12),T=R+(I^D&(C^I))+V[5]+3593408605&4294967295,R=C+(T<<5&4294967295|T>>>27),T=D+(C^I&(R^C))+V[10]+38016083&4294967295,D=R+(T<<9&4294967295|T>>>23),T=I+(R^C&(D^R))+V[15]+3634488961&4294967295,I=D+(T<<14&4294967295|T>>>18),T=C+(D^R&(I^D))+V[4]+3889429448&4294967295,C=I+(T<<20&4294967295|T>>>12),T=R+(I^D&(C^I))+V[9]+568446438&4294967295,R=C+(T<<5&4294967295|T>>>27),T=D+(C^I&(R^C))+V[14]+3275163606&4294967295,D=R+(T<<9&4294967295|T>>>23),T=I+(R^C&(D^R))+V[3]+4107603335&4294967295,I=D+(T<<14&4294967295|T>>>18),T=C+(D^R&(I^D))+V[8]+1163531501&4294967295,C=I+(T<<20&4294967295|T>>>12),T=R+(I^D&(C^I))+V[13]+2850285829&4294967295,R=C+(T<<5&4294967295|T>>>27),T=D+(C^I&(R^C))+V[2]+4243563512&4294967295,D=R+(T<<9&4294967295|T>>>23),T=I+(R^C&(D^R))+V[7]+1735328473&4294967295,I=D+(T<<14&4294967295|T>>>18),T=C+(D^R&(I^D))+V[12]+2368359562&4294967295,C=I+(T<<20&4294967295|T>>>12),T=R+(C^I^D)+V[5]+4294588738&4294967295,R=C+(T<<4&4294967295|T>>>28),T=D+(R^C^I)+V[8]+2272392833&4294967295,D=R+(T<<11&4294967295|T>>>21),T=I+(D^R^C)+V[11]+1839030562&4294967295,I=D+(T<<16&4294967295|T>>>16),T=C+(I^D^R)+V[14]+4259657740&4294967295,C=I+(T<<23&4294967295|T>>>9),T=R+(C^I^D)+V[1]+2763975236&4294967295,R=C+(T<<4&4294967295|T>>>28),T=D+(R^C^I)+V[4]+1272893353&4294967295,D=R+(T<<11&4294967295|T>>>21),T=I+(D^R^C)+V[7]+4139469664&4294967295,I=D+(T<<16&4294967295|T>>>16),T=C+(I^D^R)+V[10]+3200236656&4294967295,C=I+(T<<23&4294967295|T>>>9),T=R+(C^I^D)+V[13]+681279174&4294967295,R=C+(T<<4&4294967295|T>>>28),T=D+(R^C^I)+V[0]+3936430074&4294967295,D=R+(T<<11&4294967295|T>>>21),T=I+(D^R^C)+V[3]+3572445317&4294967295,I=D+(T<<16&4294967295|T>>>16),T=C+(I^D^R)+V[6]+76029189&4294967295,C=I+(T<<23&4294967295|T>>>9),T=R+(C^I^D)+V[9]+3654602809&4294967295,R=C+(T<<4&4294967295|T>>>28),T=D+(R^C^I)+V[12]+3873151461&4294967295,D=R+(T<<11&4294967295|T>>>21),T=I+(D^R^C)+V[15]+530742520&4294967295,I=D+(T<<16&4294967295|T>>>16),T=C+(I^D^R)+V[2]+3299628645&4294967295,C=I+(T<<23&4294967295|T>>>9),T=R+(I^(C|~D))+V[0]+4096336452&4294967295,R=C+(T<<6&4294967295|T>>>26),T=D+(C^(R|~I))+V[7]+1126891415&4294967295,D=R+(T<<10&4294967295|T>>>22),T=I+(R^(D|~C))+V[14]+2878612391&4294967295,I=D+(T<<15&4294967295|T>>>17),T=C+(D^(I|~R))+V[5]+4237533241&4294967295,C=I+(T<<21&4294967295|T>>>11),T=R+(I^(C|~D))+V[12]+1700485571&4294967295,R=C+(T<<6&4294967295|T>>>26),T=D+(C^(R|~I))+V[3]+2399980690&4294967295,D=R+(T<<10&4294967295|T>>>22),T=I+(R^(D|~C))+V[10]+4293915773&4294967295,I=D+(T<<15&4294967295|T>>>17),T=C+(D^(I|~R))+V[1]+2240044497&4294967295,C=I+(T<<21&4294967295|T>>>11),T=R+(I^(C|~D))+V[8]+1873313359&4294967295,R=C+(T<<6&4294967295|T>>>26),T=D+(C^(R|~I))+V[15]+4264355552&4294967295,D=R+(T<<10&4294967295|T>>>22),T=I+(R^(D|~C))+V[6]+2734768916&4294967295,I=D+(T<<15&4294967295|T>>>17),T=C+(D^(I|~R))+V[13]+1309151649&4294967295,C=I+(T<<21&4294967295|T>>>11),T=R+(I^(C|~D))+V[4]+4149444226&4294967295,R=C+(T<<6&4294967295|T>>>26),T=D+(C^(R|~I))+V[11]+3174756917&4294967295,D=R+(T<<10&4294967295|T>>>22),T=I+(R^(D|~C))+V[2]+718787259&4294967295,I=D+(T<<15&4294967295|T>>>17),T=C+(D^(I|~R))+V[9]+3951481745&4294967295,b.g[0]=b.g[0]+R&4294967295,b.g[1]=b.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+D&4294967295}i.prototype.v=function(b,R){R===void 0&&(R=b.length);const C=R-this.blockSize,V=this.C;let I=this.h,D=0;for(;D<R;){if(I==0)for(;D<=C;)o(this,b,D),D+=this.blockSize;if(typeof b=="string"){for(;D<R;)if(V[I++]=b.charCodeAt(D++),I==this.blockSize){o(this,V),I=0;break}}else for(;D<R;)if(V[I++]=b[D++],I==this.blockSize){o(this,V),I=0;break}}this.h=I,this.o+=R},i.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var R=1;R<b.length-8;++R)b[R]=0;R=this.o*8;for(var C=b.length-8;C<b.length;++C)b[C]=R&255,R/=256;for(this.v(b),b=Array(16),R=0,C=0;C<4;++C)for(let V=0;V<32;V+=8)b[R++]=this.g[C]>>>V&255;return b};function l(b,R){var C=f;return Object.prototype.hasOwnProperty.call(C,b)?C[b]:C[b]=R(b)}function h(b,R){this.h=R;const C=[];let V=!0;for(let I=b.length-1;I>=0;I--){const D=b[I]|0;V&&D==R||(C[I]=D,V=!1)}this.g=C}var f={};function g(b){return-128<=b&&b<128?l(b,function(R){return new h([R|0],R<0?-1:0)}):new h([b|0],b<0?-1:0)}function y(b){if(isNaN(b)||!isFinite(b))return A;if(b<0)return q(y(-b));const R=[];let C=1;for(let V=0;b>=C;V++)R[V]=b/C|0,C*=4294967296;return new h(R,0)}function w(b,R){if(b.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(b.charAt(0)=="-")return q(w(b.substring(1),R));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(R,8));let V=A;for(let D=0;D<b.length;D+=8){var I=Math.min(8,b.length-D);const T=parseInt(b.substring(D,D+I),R);I<8?(I=y(Math.pow(R,I)),V=V.j(I).add(y(T))):(V=V.j(C),V=V.add(y(T)))}return V}var A=g(0),N=g(1),B=g(16777216);n=h.prototype,n.m=function(){if(Y(this))return-q(this).m();let b=0,R=1;for(let C=0;C<this.g.length;C++){const V=this.i(C);b+=(V>=0?V:4294967296+V)*R,R*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(Q(this))return"0";if(Y(this))return"-"+q(this).toString(b);const R=y(Math.pow(b,6));var C=this;let V="";for(;;){const I=fe(C,R).g;C=pe(C,I.j(R));let D=((C.g.length>0?C.g[0]:C.h)>>>0).toString(b);if(C=I,Q(C))return D+V;for(;D.length<6;)D="0"+D;V=D+V}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function Q(b){if(b.h!=0)return!1;for(let R=0;R<b.g.length;R++)if(b.g[R]!=0)return!1;return!0}function Y(b){return b.h==-1}n.l=function(b){return b=pe(this,b),Y(b)?-1:Q(b)?0:1};function q(b){const R=b.g.length,C=[];for(let V=0;V<R;V++)C[V]=~b.g[V];return new h(C,~b.h).add(N)}n.abs=function(){return Y(this)?q(this):this},n.add=function(b){const R=Math.max(this.g.length,b.g.length),C=[];let V=0;for(let I=0;I<=R;I++){let D=V+(this.i(I)&65535)+(b.i(I)&65535),T=(D>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);V=T>>>16,D&=65535,T&=65535,C[I]=T<<16|D}return new h(C,C[C.length-1]&-2147483648?-1:0)};function pe(b,R){return b.add(q(R))}n.j=function(b){if(Q(this)||Q(b))return A;if(Y(this))return Y(b)?q(this).j(q(b)):q(q(this).j(b));if(Y(b))return q(this.j(q(b)));if(this.l(B)<0&&b.l(B)<0)return y(this.m()*b.m());const R=this.g.length+b.g.length,C=[];for(var V=0;V<2*R;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(let I=0;I<b.g.length;I++){const D=this.i(V)>>>16,T=this.i(V)&65535,ue=b.i(I)>>>16,ze=b.i(I)&65535;C[2*V+2*I]+=T*ze,Ee(C,2*V+2*I),C[2*V+2*I+1]+=D*ze,Ee(C,2*V+2*I+1),C[2*V+2*I+1]+=T*ue,Ee(C,2*V+2*I+1),C[2*V+2*I+2]+=D*ue,Ee(C,2*V+2*I+2)}for(b=0;b<R;b++)C[b]=C[2*b+1]<<16|C[2*b];for(b=R;b<2*R;b++)C[b]=0;return new h(C,0)};function Ee(b,R){for(;(b[R]&65535)!=b[R];)b[R+1]+=b[R]>>>16,b[R]&=65535,R++}function Se(b,R){this.g=b,this.h=R}function fe(b,R){if(Q(R))throw Error("division by zero");if(Q(b))return new Se(A,A);if(Y(b))return R=fe(q(b),R),new Se(q(R.g),q(R.h));if(Y(R))return R=fe(b,q(R)),new Se(q(R.g),R.h);if(b.g.length>30){if(Y(b)||Y(R))throw Error("slowDivide_ only works with positive integers.");for(var C=N,V=R;V.l(b)<=0;)C=Ce(C),V=Ce(V);var I=Re(C,1),D=Re(V,1);for(V=Re(V,2),C=Re(C,2);!Q(V);){var T=D.add(V);T.l(b)<=0&&(I=I.add(C),D=T),V=Re(V,1),C=Re(C,1)}return R=pe(b,I.j(R)),new Se(I,R)}for(I=A;b.l(R)>=0;){for(C=Math.max(1,Math.floor(b.m()/R.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),D=y(C),T=D.j(R);Y(T)||T.l(b)>0;)C-=V,D=y(C),T=D.j(R);Q(D)&&(D=N),I=I.add(D),b=pe(b,T)}return new Se(I,b)}n.B=function(b){return fe(this,b).h},n.and=function(b){const R=Math.max(this.g.length,b.g.length),C=[];for(let V=0;V<R;V++)C[V]=this.i(V)&b.i(V);return new h(C,this.h&b.h)},n.or=function(b){const R=Math.max(this.g.length,b.g.length),C=[];for(let V=0;V<R;V++)C[V]=this.i(V)|b.i(V);return new h(C,this.h|b.h)},n.xor=function(b){const R=Math.max(this.g.length,b.g.length),C=[];for(let V=0;V<R;V++)C[V]=this.i(V)^b.i(V);return new h(C,this.h^b.h)};function Ce(b){const R=b.g.length+1,C=[];for(let V=0;V<R;V++)C[V]=b.i(V)<<1|b.i(V-1)>>>31;return new h(C,b.h)}function Re(b,R){const C=R>>5;R%=32;const V=b.g.length-C,I=[];for(let D=0;D<V;D++)I[D]=R>0?b.i(D+C)>>>R|b.i(D+C+1)<<32-R:b.i(D+C);return new h(I,b.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,kw=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,Vi=h}).apply(typeof Ky<"u"?Ky:typeof self<"u"?self:typeof window<"u"?window:{});var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cw,Xa,Pw,cc,vf,xw,Nw,bw;(function(){var n,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yu=="object"&&Yu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in _))break e;_=_[M]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var _=[],E;for(E in m)Object.prototype.hasOwnProperty.call(m,E)&&_.push([E,m[E]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,_){return u.call.apply(u.bind,arguments)}function y(u,m,_){return y=g,y.apply(null,arguments)}function w(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function A(u,m){function _(){}_.prototype=m.prototype,u.Z=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(E,M,j){for(var Z=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)Z[Te-2]=arguments[Te];return m.prototype[M].apply(E,Z)}}var N=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function B(u){const m=u.length;if(m>0){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function Q(u,m){for(let E=1;E<arguments.length;E++){const M=arguments[E];var _=typeof M;if(_=_!="object"?_:M?Array.isArray(M)?"array":_:"null",_=="array"||_=="object"&&typeof M.length=="number"){_=u.length||0;const j=M.length||0;u.length=_+j;for(let Z=0;Z<j;Z++)u[_+Z]=M[Z]}else u.push(M)}}class Y{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function q(u){h.setTimeout(()=>{throw u},0)}function pe(){var u=b;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ee{constructor(){this.h=this.g=null}add(m,_){const E=Se.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var Se=new Y(()=>new fe,u=>u.reset());class fe{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Re=!1,b=new Ee,R=()=>{const u=Promise.resolve(void 0);Ce=()=>{u.then(C)}};function C(){for(var u;u=pe();){try{u.h.call(u.g)}catch(_){q(_)}var m=Se;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Re=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var D=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u})();function T(u){return/^[\s\xa0]*$/.test(u)}function ue(u,m){I.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}A(ue,I),ue.prototype.init=function(u,m){const _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(_=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ze="closure_listenable_"+(Math.random()*1e6|0),Ue=0;function Ae(u,m,_,E,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=M,this.key=++Ue,this.da=this.fa=!1}function X(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function oe(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function P(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function H(u){const m={};for(const _ in u)m[_]=u[_];return m}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ke(u,m){let _,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(_ in E)u[_]=E[_];for(let j=0;j<ae.length;j++)_=ae[j],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function ve(u){this.src=u,this.g={},this.h=0}ve.prototype.add=function(u,m,_,E,M){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const Z=Pe(u,m,E,M);return Z>-1?(m=u[Z],_||(m.fa=!1)):(m=new Ae(m,this.src,j,!!E,M),m.fa=_,u.push(m)),m};function je(u,m){const _=m.type;if(_ in u.g){var E=u.g[_],M=Array.prototype.indexOf.call(E,m,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(X(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Pe(u,m,_,E){for(let M=0;M<u.length;++M){const j=u[M];if(!j.da&&j.listener==m&&j.capture==!!_&&j.ha==E)return M}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),_e={};function ft(u,m,_,E,M){if(Array.isArray(m)){for(let j=0;j<m.length;j++)ft(u,m[j],_,E,M);return null}return _=ea(_),u&&u[ze]?u.J(m,_,f(E)?!!E.capture:!1,M):ph(u,m,_,!1,E,M)}function ph(u,m,_,E,M,j){if(!m)throw Error("Invalid event type");const Z=f(M)?!!M.capture:!!M;let Te=qs(u);if(Te||(u[Me]=Te=new ve(u)),_=Te.add(m,_,E,Z,j),_.proxy)return _;if(E=zs(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)D||(M=Z),M===void 0&&(M=!1),u.addEventListener(m.toString(),E,M);else if(u.attachEvent)u.attachEvent($s(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function zs(){function u(_){return m.call(u.src,u.listener,_)}const m=Dl;return u}function Zo(u,m,_,E,M){if(Array.isArray(m))for(var j=0;j<m.length;j++)Zo(u,m[j],_,E,M);else E=f(E)?!!E.capture:!!E,_=ea(_),u&&u[ze]?(u=u.i,j=String(m).toString(),j in u.g&&(m=u.g[j],_=Pe(m,_,E,M),_>-1&&(X(m[_]),Array.prototype.splice.call(m,_,1),m.length==0&&(delete u.g[j],u.h--)))):u&&(u=qs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Pe(m,_,E,M)),(_=u>-1?m[u]:null)&&Jr(_))}function Jr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[ze])je(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent($s(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=qs(m))?(je(_,u),_.h==0&&(_.src=null,m[Me]=null)):X(u)}}}function $s(u){return u in _e?_e[u]:_e[u]="on"+u}function Dl(u,m){if(u.da)u=!0;else{m=new ue(m,this);const _=u.listener,E=u.ha||u.src;u.fa&&Jr(u),u=_.call(E,m)}return u}function qs(u){return u=u[Me],u instanceof ve?u:null}var Ki="__closure_events_fn_"+(Math.random()*1e9>>>0);function ea(u){return typeof u=="function"?u:(u[Ki]||(u[Ki]=function(m){return u.handleEvent(m)}),u[Ki])}function pt(){V.call(this),this.i=new ve(this),this.M=this,this.G=null}A(pt,V),pt.prototype[ze]=!0,pt.prototype.removeEventListener=function(u,m,_,E){Zo(this,u,m,_,E)};function lt(u,m){var _,E=u.G;if(E)for(_=[];E;E=E.G)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new I(m,u);else if(m instanceof I)m.target=m.target||u;else{var M=m;m=new I(E,u),ke(m,M)}M=!0;let j,Z;if(_)for(Z=_.length-1;Z>=0;Z--)j=m.g=_[Z],M=Pn(j,E,!0,m)&&M;if(j=m.g=u,M=Pn(j,E,!0,m)&&M,M=Pn(j,E,!1,m)&&M,_)for(Z=0;Z<_.length;Z++)j=m.g=_[Z],M=Pn(j,E,!1,m)&&M}pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const _=u.g[m];for(let E=0;E<_.length;E++)X(_[E]);delete u.g[m],u.h--}}this.G=null},pt.prototype.J=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},pt.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function Pn(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let M=!0;for(let j=0;j<m.length;++j){const Z=m[j];if(Z&&!Z.da&&Z.capture==_){const Te=Z.listener,ut=Z.ha||Z.src;Z.fa&&je(u.i,Z),M=Te.call(ut,E)!==!1&&M}}return M&&!E.defaultPrevented}function ta(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function na(u){u.g=ta(()=>{u.g=null,u.i&&(u.i=!1,na(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ol extends V{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:na(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(u){V.call(this),this.h=u,this.g={}}A(Xr,V);var ra=[];function Hs(u){oe(u.g,function(m,_){this.g.hasOwnProperty(_)&&Jr(m)},u),u.g={}}Xr.prototype.N=function(){Xr.Z.N.call(this),Hs(this)},Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zr=h.JSON.stringify,Vl=h.JSON.parse,Gi=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function ei(){}function Ll(){}var ti={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ws(){I.call(this,"d")}A(Ws,I);function ia(){I.call(this,"c")}A(ia,I);var xn={},Ks=null;function ni(){return Ks=Ks||new pt}xn.Ia="serverreachability";function Gs(u){I.call(this,xn.Ia,u)}A(Gs,I);function vr(u){const m=ni();lt(m,new Gs(m))}xn.STAT_EVENT="statevent";function wr(u,m){I.call(this,xn.STAT_EVENT,u),this.stat=m}A(wr,I);function st(u){const m=ni();lt(m,new wr(m,u))}xn.Ja="timingevent";function sa(u,m){I.call(this,xn.Ja,u),this.size=m}A(sa,I);function ri(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function ii(){this.g=!0}ii.prototype.ua=function(){this.g=!1};function Ml(u,m,_,E,M,j){u.info(function(){if(u.g)if(j){var Z="",Te=j.split("&");for(let He=0;He<Te.length;He++){var ut=Te[He].split("=");if(ut.length>1){const mt=ut[0];ut=ut[1];const hn=mt.split("_");Z=hn.length>=2&&hn[1]=="type"?Z+(mt+"="+ut+"&"):Z+(mt+"=redacted&")}}}else Z=null;else Z=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+m+`
`+_+`
`+Z})}function Fl(u,m,_,E,M,j,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+m+`
`+_+`
`+j+" "+Z})}function Wn(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Qi(u,_)+(E?" "+E:"")})}function Ul(u,m){u.info(function(){return"TIMEOUT: "+m})}ii.prototype.info=function(){};function Qi(u,m){if(!u.g)return m;if(!m)return null;try{const j=JSON.parse(m);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var _=j[u];if(!(_.length<2)){var E=_[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Z=1;Z<E.length;Z++)E[Z]=""}}}}return Zr(j)}catch{return m}}var si={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},oi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},jl;function Er(){}A(Er,ei),Er.prototype.g=function(){return new XMLHttpRequest},jl=new Er;function Kn(u){return encodeURIComponent(String(u))}function Qs(u){var m=1;u=u.split(":");const _=[];for(;m>0&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function _n(u,m,_,E){this.j=u,this.i=m,this.l=_,this.S=E||1,this.V=new Xr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Bl}function Bl(){this.i=null,this.g="",this.h=!1}var zl={},oa={};function Nn(u,m,_){u.M=1,u.A=Ir(vn(m)),u.u=_,u.R=!0,aa(u,null)}function aa(u,m){u.F=Date.now(),Yi(u),u.B=vn(u.A);var _=u.B,E=u.S;Array.isArray(E)||(E=[String(E)]),ya(_.i,"t",E),u.C=0,_=u.j.L,u.h=new Bl,u.g=Xl(u.j,_?m:null,!u.u),u.P>0&&(u.O=new Ol(y(u.Y,u,u.g),u.P)),m=u.V,_=u.g,E=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(ra[0]=M.toString()),M=ra);for(let j=0;j<M.length;j++){const Z=ft(_,M[j],E||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.J?H(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),vr(),Ml(u.i,u.v,u.B,u.l,u.S,u.u)}_n.prototype.ba=function(u){u=u.target;const m=this.O;m&&er(u)==3?m.j():this.Y(u)},_n.prototype.Y=function(u){try{if(u==this.g)e:{const Te=er(this.g),ut=this.g.ya(),He=this.g.ca();if(!(Te<3)&&(Te!=3||this.g&&(this.h.h||this.g.la()||Yl(this.g)))){this.K||Te!=4||ut==7||(ut==8||He<=0?vr(3):vr(2)),Ys(this);var m=this.g.ca();this.X=m;var _=$l(this);if(this.o=m==200,Fl(this.i,this.v,this.B,this.l,this.S,Te,m),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(E)){var j=E;break t}}j=null}if(u=j)Wn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ye(this,u);else{this.o=!1,this.m=3,st(12),Tr(this),Ji(this);break e}}if(this.R){u=!0;let mt;for(;!this.K&&this.C<_.length;)if(mt=Hl(this,_),mt==oa){Te==4&&(this.m=4,st(14),u=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==zl){this.m=4,st(15),Wn(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else Wn(this.i,this.l,mt,null),Ye(this,mt);if(ql(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||_.length!=0||this.h.h||(this.m=1,st(16),u=!1),this.o=this.o&&u,!u)Wn(this.i,this.l,_,"[Invalid Chunked Response]"),Tr(this),Ji(this);else if(_.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),os(Z),Z.P=!0,st(11))}}else Wn(this.i,this.l,_,null),Ye(this,_);Te==4&&Tr(this),this.o&&!this.K&&(Te==4?oo(this.j,this):(this.o=!1,Yi(this)))}else va(this.g),m==400&&_.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Tr(this),Ji(this)}}}catch{}finally{}};function $l(u){if(!ql(u))return u.g.la();const m=Yl(u.g);if(m==="")return"";let _="";const E=m.length,M=er(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return Tr(u),Ji(u),"";u.h.i=new h.TextDecoder}for(let j=0;j<E;j++)u.h.h=!0,_+=u.h.i.decode(m[j],{stream:!(M&&j==E-1)});return m.length=0,u.h.g+=_,u.C=0,u.h.g}function ql(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Hl(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?oa:(_=Number(m.substring(_,E)),isNaN(_)?zl:(E+=1,E+_>m.length?oa:(m=m.slice(E,E+_),u.C=E+_,m)))}_n.prototype.cancel=function(){this.K=!0,Tr(this)};function Yi(u){u.T=Date.now()+u.H,la(u,u.H)}function la(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=ri(y(u.aa,u),m)}function Ys(u){u.D&&(h.clearTimeout(u.D),u.D=null)}_n.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Ul(this.i,this.B),this.M!=2&&(vr(),st(17)),Tr(this),this.m=2,Ji(this)):la(this,this.T-u)};function Ji(u){u.j.I==0||u.K||oo(u.j,u)}function Tr(u){Ys(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Hs(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ye(u,m){try{var _=u.j;if(_.I!=0&&(_.g==u||ca(_.h,u))){if(!u.L&&ca(_.h,u)&&_.I==3){try{var E=_.Ba.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)so(_),un(_);else break e;rr(_),st(18)}}else _.xa=M[1],0<_.xa-_.K&&M[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=ri(y(_.Va,_),6e3));Xi(_.h)<=1&&_.ta&&(_.ta=void 0)}else cn(_,11)}else if((u.L||_.g==u)&&so(_),!T(m))for(M=_.Ba.g.parse(m),m=0;m<M.length;m++){let He=M[m];const mt=He[0];if(!(mt<=_.K))if(_.K=mt,He=He[1],_.I==2)if(He[0]=="c"){_.M=He[1],_.ba=He[2];const hn=He[3];hn!=null&&(_.ka=hn,_.j.info("VER="+_.ka));const Cr=He[4];Cr!=null&&(_.za=Cr,_.j.info("SVER="+_.za));const ir=He[5];ir!=null&&typeof ir=="number"&&ir>0&&(E=1.5*ir,_.O=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const sr=u.g;if(sr){const uo=sr.g?sr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(uo){var j=E.h;j.g||uo.indexOf("spdy")==-1&&uo.indexOf("quic")==-1&&uo.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Xs(j,j.h),j.h=null))}if(E.G){const Ta=sr.g?sr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ta&&(E.wa=Ta,$e(E.J,E.G,Ta))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),E=_;var Z=u;if(E.na=Ea(E,E.L?E.ba:null,E.W),Z.L){Zi(E.h,Z);var Te=Z,ut=E.O;ut&&(Te.H=ut),Te.D&&(Ys(Te),Yi(Te)),E.g=Z}else Lt(E);_.i.length>0&&kr(_)}else He[0]!="stop"&&He[0]!="close"||cn(_,7);else _.I==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?cn(_,7):ro(_):He[0]!="noop"&&_.l&&_.l.qa(He),_.A=0)}}vr(4)}catch{}}var mh=class{constructor(u,m){this.g=u,this.map=m}};function Js(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ua(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Xi(u){return u.h?1:u.g?u.g.size:0}function ca(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Xs(u,m){u.g?u.g.add(m):u.h=m}function Zi(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Js.prototype.cancel=function(){if(this.i=on(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function on(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.G);return m}return B(u.i)}var Wl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function an(u,m){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const E=u[_].indexOf("=");let M,j=null;E>=0?(M=u[_].substring(0,E),j=u[_].substring(E+1)):M=u[_],m(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Gn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Gn?(this.l=u.l,es(this,u.j),this.o=u.o,this.g=u.g,Qn(this,u.u),this.h=u.h,ai(this,_a(u.i)),this.m=u.m):u&&(m=String(u).match(Wl))?(this.l=!1,es(this,m[1]||"",!0),this.o=ts(m[2]||""),this.g=ts(m[3]||"",!0),Qn(this,m[4]),this.h=ts(m[5]||"",!0),ai(this,m[6]||"",!0),this.m=ts(m[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}Gn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(ns(m,da,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ns(m,da,!0),"@"),u.push(Kn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ns(_,_.charAt(0)=="/"?rs:fa,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ns(_,pa)),u.join("")},Gn.prototype.resolve=function(u){const m=vn(this);let _=!!u.j;_?es(m,u.j):_=!!u.o,_?m.o=u.o:_=!!u.g,_?m.g=u.g:_=u.u!=null;var E=u.h;if(_)Qn(m,u.u);else if(_=!!u.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=m.h.lastIndexOf("/");M!=-1&&(E=m.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let Z=0;Z<M.length;){const Te=M[Z++];Te=="."?E&&Z==M.length&&j.push(""):Te==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&Z==M.length&&j.push("")):(j.push(Te),E=!0)}E=j.join("/")}else E=M}return _?m.h=E:_=u.i.toString()!=="",_?ai(m,_a(u.i)):_=!!u.m,_&&(m.m=u.m),m};function vn(u){return new Gn(u)}function es(u,m,_){u.j=_?ts(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Qn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function ai(u,m,_){m instanceof Ve?(u.i=m,eo(u.i,u.l)):(_||(m=ns(m,gh)),u.i=new Ve(m,u.l))}function $e(u,m,_){u.i.set(m,_)}function Ir(u){return $e(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function ts(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ns(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,ha),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ha(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var da=/[#\/\?@]/g,fa=/[#\?:]/g,rs=/[#\?]/g,gh=/[#\?@]/g,pa=/#/g;function Ve(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Yn(u){u.g||(u.g=new Map,u.h=0,u.i&&an(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Ve.prototype,n.add=function(u,m){Yn(this),this.i=null,u=Jn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function ma(u,m){Yn(u),m=Jn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Zs(u,m){return Yn(u),m=Jn(u,m),u.g.has(m)}n.forEach=function(u,m){Yn(this),this.g.forEach(function(_,E){_.forEach(function(M){u.call(m,M,E,this)},this)},this)};function ga(u,m){Yn(u);let _=[];if(typeof m=="string")Zs(u,m)&&(_=_.concat(u.g.get(Jn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)_=_.concat(u[m]);return _}n.set=function(u,m){return Yn(this),this.i=null,u=Jn(this,u),Zs(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=ga(this,u),u.length>0?String(u[0]):m):m};function ya(u,m,_){ma(u,m),_.length>0&&(u.i=null,u.g.set(Jn(u,m),B(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let E=0;E<m.length;E++){var _=m[E];const M=Kn(_);_=ga(this,_);for(let j=0;j<_.length;j++){let Z=M;_[j]!==""&&(Z+="="+Kn(_[j])),u.push(Z)}}return this.i=u.join("&")};function _a(u){const m=new Ve;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function Jn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function eo(u,m){m&&!u.j&&(Yn(u),u.i=null,u.g.forEach(function(_,E){const M=E.toLowerCase();E!=M&&(ma(this,E),ya(this,M,_))},u)),u.j=m}function Xn(u,m){const _=new ii;if(h.Image){const E=new Image;E.onload=w(Pt,_,"TestLoadImage: loaded",!0,m,E),E.onerror=w(Pt,_,"TestLoadImage: error",!1,m,E),E.onabort=w(Pt,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=w(Pt,_,"TestLoadImage: timeout",!1,m,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Zn(u,m){const _=new ii,E=new AbortController,M=setTimeout(()=>{E.abort(),Pt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?Pt(_,"TestPingServer: ok",!0,m):Pt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Pt(_,"TestPingServer: error",!1,m)})}function Pt(u,m,_,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(_)}catch{}}function is(){this.g=new Gi}function Sr(u){this.i=u.Sb||null,this.h=u.ab||!1}A(Sr,ei),Sr.prototype.g=function(){return new ln(this.i,this.h)};function ln(u,m){pt.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(ln,pt),n=ln.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,bn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Kl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Kl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?li(this):bn(this),this.readyState==3&&Kl(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,li(this))},n.Na=function(u){this.g&&(this.response=u,li(this))},n.ga=function(){this.g&&li(this)};function li(u){u.readyState=4,u.l=null,u.j=null,u.B=null,bn(u)}n.setRequestHeader=function(u,m){this.A.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function bn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Gl(u){let m="";return oe(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function to(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=Gl(_),typeof u=="string"?_!=null&&Kn(_):$e(u,m,_))}function We(u){pt.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(We,pt);var Ql=/^https?$/i,yh=["POST","PUT"];n=We.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():jl.g(),this.g.onreadystatechange=N(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(j){ui(this,j);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)_.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())_.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(yh,m,void 0)>=0)||E||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of _)this.g.setRequestHeader(j,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){ui(this,j)}};function ui(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,ci(u),Rr(u)}function ci(u){u.A||(u.A=!0,lt(u,"complete"),lt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,lt(this,"complete"),lt(this,"abort"),Rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rr(this,!0)),We.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ar(this):this.Xa())},n.Xa=function(){Ar(this)};function Ar(u){if(u.h&&typeof l<"u"){if(u.v&&er(u)==4)setTimeout(u.Ca.bind(u),0);else if(lt(u,"readystatechange"),er(u)==4){u.h=!1;try{const j=u.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=j===0){let Z=String(u.D).match(Wl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),E=!Ql.test(Z?Z.toLowerCase():"")}_=E}if(_)lt(u,"complete"),lt(u,"success");else{u.o=6;try{var M=er(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",ci(u)}}finally{Rr(u)}}}}function Rr(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,m||lt(u,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function er(u){return u.g?u.g.readyState:0}n.ca=function(){try{return er(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Vl(m)}};function Yl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function va(u){const m={};u=(u.g&&er(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(T(u[E]))continue;var _=Qs(u[E]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const j=m[M]||[];m[M]=j,j.push(_)}P(m,function(E){return E.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function tr(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function no(u){this.za=0,this.i=[],this.j=new ii,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=tr("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=tr("baseRetryDelayMs",5e3,u),this.Za=tr("retryDelaySeedMs",1e4,u),this.Ta=tr("forwardChannelMaxRetries",2,u),this.va=tr("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Js(u&&u.concurrentRequestLimit),this.Ba=new is,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=no.prototype,n.ka=8,n.I=1,n.connect=function(u,m,_,E){st(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.J=Ea(this,null,this.W),kr(this)};function ro(u){if(io(u),u.I==3){var m=u.V++,_=vn(u.J);if($e(_,"SID",u.M),$e(_,"RID",m),$e(_,"TYPE","terminate"),nr(u,_),m=new _n(u,u.j,m),m.M=2,m.A=Ir(vn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.A,_=!0),_||(m.g=Xl(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Yi(m)}as(u)}function un(u){u.g&&(os(u),u.g.cancel(),u.g=null)}function io(u){un(u),u.v&&(h.clearTimeout(u.v),u.v=null),so(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function kr(u){if(!ua(u.h)&&!u.m){u.m=!0;var m=u.Ea;Ce||R(),Re||(Ce(),Re=!0),b.add(m,u),u.D=0}}function Jl(u,m){return Xi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=ri(y(u.Ea,u,m),ao(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new _n(this,this.j,u);let j=this.o;if(this.U&&(j?(j=H(j),ke(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,m>4096){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=wa(this,M,m),_=vn(this.J),$e(_,"RID",u),$e(_,"CVER",22),this.G&&$e(_,"X-HTTP-Session-Id",this.G),nr(this,_),j&&(this.R?m="headers="+Kn(Gl(j))+"&"+m:this.u&&to(_,this.u,j)),Xs(this.h,M),this.Ra&&$e(_,"TYPE","init"),this.S?($e(_,"$req",m),$e(_,"SID","null"),M.U=!0,Nn(M,_,null)):Nn(M,_,m),this.I=2}}else this.I==3&&(u?ss(this,u):this.i.length==0||ua(this.h)||ss(this))};function ss(u,m){var _;m?_=m.l:_=u.V++;const E=vn(u.J);$e(E,"SID",u.M),$e(E,"RID",_),$e(E,"AID",u.K),nr(u,E),u.u&&u.o&&to(E,u.u,u.o),_=new _n(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),m&&(u.i=m.G.concat(u.i)),m=wa(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Xs(u.h,_),Nn(_,E,m)}function nr(u,m){u.H&&oe(u.H,function(_,E){$e(m,E,_)}),u.l&&oe({},function(_,E){$e(m,E,_)})}function wa(u,m,_){_=Math.min(u.i.length,_);const E=u.l?y(u.l.Ka,u.l,u):null;e:{var M=u.i;let Te=-1;for(;;){const ut=["count="+_];Te==-1?_>0?(Te=M[0].g,ut.push("ofs="+Te)):Te=0:ut.push("ofs="+Te);let He=!0;for(let mt=0;mt<_;mt++){var j=M[mt].g;const hn=M[mt].map;if(j-=Te,j<0)Te=Math.max(0,M[mt].g-100),He=!1;else try{j="req"+j+"_"||"";try{var Z=hn instanceof Map?hn:Object.entries(hn);for(const[Cr,ir]of Z){let sr=ir;f(ir)&&(sr=Zr(ir)),ut.push(j+Cr+"="+encodeURIComponent(sr))}}catch(Cr){throw ut.push(j+"type="+encodeURIComponent("_badmap")),Cr}}catch{E&&E(hn)}}if(He){Z=ut.join("&");break e}}Z=void 0}return u=u.i.splice(0,_),m.G=u,Z}function Lt(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;Ce||R(),Re||(Ce(),Re=!0),b.add(m,u),u.A=0}}function rr(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=ri(y(u.Da,u),ao(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,hi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=ri(y(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),un(this),hi(this))};function os(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function hi(u){u.g=new _n(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=vn(u.na);$e(m,"RID","rpc"),$e(m,"SID",u.M),$e(m,"AID",u.K),$e(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&$e(m,"TO",u.ia),$e(m,"TYPE","xmlhttp"),nr(u,m),u.u&&u.o&&to(m,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=Ir(vn(m)),_.u=null,_.R=!0,aa(_,u)}n.Va=function(){this.C!=null&&(this.C=null,un(this),rr(this),st(19))};function so(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function oo(u,m){var _=null;if(u.g==m){so(u),os(u),u.g=null;var E=2}else if(ca(u.h,m))_=m.G,Zi(u.h,m),E=1;else return;if(u.I!=0){if(m.o)if(E==1){_=m.u?m.u.length:0,m=Date.now()-m.F;var M=u.D;E=ni(),lt(E,new sa(E,_)),kr(u)}else Lt(u);else if(M=m.m,M==3||M==0&&m.X>0||!(E==1&&Jl(u,m)||E==2&&rr(u)))switch(_&&_.length>0&&(m=u.h,m.i=m.i.concat(_)),M){case 1:cn(u,5);break;case 4:cn(u,10);break;case 3:cn(u,6);break;default:cn(u,2)}}}function ao(u,m){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*m}function cn(u,m){if(u.j.info("Error code "+m),m==2){var _=y(u.bb,u),E=u.Ua;const M=!E;E=new Gn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||es(E,"https"),Ir(E),M?Xn(E.toString(),_):Zn(E.toString(),_)}else st(2);u.I=0,u.l&&u.l.pa(m),as(u),io(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function as(u){if(u.I=0,u.ja=[],u.l){const m=on(u.h);(m.length!=0||u.i.length!=0)&&(Q(u.ja,m),Q(u.ja,u.i),u.h.i.length=0,B(u.i),u.i.length=0),u.l.oa()}}function Ea(u,m,_){var E=_ instanceof Gn?vn(_):new Gn(_);if(E.g!="")m&&(E.g=m+"."+E.g),Qn(E,E.u);else{var M=h.location;E=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;const j=new Gn(null);E&&es(j,E),m&&(j.g=m),M&&Qn(j,M),_&&(j.h=_),E=j}return _=u.G,m=u.wa,_&&m&&$e(E,_,m),$e(E,"VER",u.ka),nr(u,E),E}function Xl(u,m,_){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new We(new Sr({ab:_})):new We(u.ma),m.Fa(u.L),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zl(){}n=Zl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function lo(){}lo.prototype.g=function(u,m){return new xt(u,m)};function xt(u,m){pt.call(this),this.g=new no(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!T(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!T(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new di(this)}A(xt,pt),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){ro(this.g)},xt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=Zr(u),u=_);m.i.push(new mh(m.Ya++,u)),m.I==3&&kr(m)},xt.prototype.N=function(){this.g.l=null,delete this.j,ro(this.g),delete this.g,xt.Z.N.call(this)};function eu(u){Ws.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}A(eu,Ws);function tu(){ia.call(this),this.status=1}A(tu,ia);function di(u){this.g=u}A(di,Zl),di.prototype.ra=function(){lt(this.g,"a")},di.prototype.qa=function(u){lt(this.g,new eu(u))},di.prototype.pa=function(u){lt(this.g,new tu)},di.prototype.oa=function(){lt(this.g,"b")},lo.prototype.createWebChannel=lo.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,bw=function(){return new lo},Nw=function(){return ni()},xw=xn,vf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},si.NO_ERROR=0,si.TIMEOUT=8,si.HTTP_ERROR=6,cc=si,oi.COMPLETE="complete",Pw=oi,Ll.EventType=ti,ti.OPEN="a",ti.CLOSE="b",ti.ERROR="c",ti.MESSAGE="d",pt.prototype.listen=pt.prototype.J,Xa=Ll,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,Cw=We}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let Go="12.11.0";function s1(n){Go=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const bs=new Uf("@firebase/firestore");function No(){return bs.logLevel}function ne(n,...e){if(bs.logLevel<=be.DEBUG){const t=e.map(np);bs.debug(`Firestore (${Go}): ${n}`,...t)}}function Kr(n,...e){if(bs.logLevel<=be.ERROR){const t=e.map(np);bs.error(`Firestore (${Go}): ${n}`,...t)}}function Ds(n,...e){if(bs.logLevel<=be.WARN){const t=e.map(np);bs.warn(`Firestore (${Go}): ${n}`,...t)}}function np(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function ge(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Dw(n,i,t)}function Dw(n,e,t){let i=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Kr(i),new Error(i)}function qe(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Dw(e,o,i)}function Ie(n,e){return n}/**
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
 */class qr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Ow{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class o1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($t.UNAUTHENTICATED)))}shutdown(){}}class a1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class l1{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new qr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new qr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(qe(typeof i.accessToken=="string",31837,{l:i}),new Ow(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new $t(e)}}class u1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class c1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new u1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t($t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class h1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){qe(this.o===void 0,3512);const i=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Gy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Gy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class rp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=d1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function wf(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return nf(o)===nf(l)?De(o,l):nf(o)?1:-1}return De(n.length,e.length)}const f1=55296,p1=57343;function nf(n){const e=n.charCodeAt(0);return e>=f1&&e<=p1}function Bo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const Qy="__name__";class cr{constructor(e,t,i){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ge(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return cr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=cr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return De(e.length,t.length)}static compareSegments(e,t){const i=cr.isNumericId(e),o=cr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?cr.extractNumericId(e).compare(cr.extractNumericId(t)):wf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vi.fromString(e.substring(4,e.length-2))}}class Qe extends cr{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ee(z.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const m1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends cr{construct(e,t,i){return new Ot(e,t,i)}static isValidIdentifier(e){return m1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qy}static keyField(){return new Ot([Qy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ee(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ee(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(t)}static emptyPath(){return new Ot([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Qe.fromString(e))}static fromName(e){return new ce(Qe.fromString(e).popFirst(5))}static empty(){return new ce(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Qe(e.slice()))}}/**
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
 */function Vw(n,e,t){if(!t)throw new ee(z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function g1(n,e,t,i){if(e===!0&&i===!0)throw new ee(z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Yy(n){if(!ce.isDocumentKey(n))throw new ee(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Jy(n){if(ce.isDocumentKey(n))throw new ee(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Lw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Kc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge(12329,{type:typeof n})}function sn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Kc(n);throw new ee(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function vt(n,e){const t={typeString:n};return e&&(t.value=e),t}function kl(n,e){if(!Lw(n))throw new ee(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ee(z.INVALID_ARGUMENT,t);return!0}/**
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
 */const Xy=-62135596800,Zy=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Zy);return new Ze(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xy)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zy}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(kl(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:vt("string",Ze._jsonSchemaVersion),seconds:vt("number"),nanoseconds:vt("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Ze(0,0))}static max(){return new we(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pl=-1;function y1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=we.fromTimestamp(i===1e9?new Ze(t+1,0):new Ze(t,i));return new Mi(o,ce.empty(),e)}function _1(n){return new Mi(n.readTime,n.key,pl)}class Mi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Mi(we.min(),ce.empty(),pl)}static max(){return new Mi(we.max(),ce.empty(),pl)}}function v1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class E1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Qo(n){if(n.code!==z.FAILED_PRECONDITION||n.message!==w1)throw n;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,i)=>{t(e)}))}static reject(e){return new $(((t,i)=>{i(e)}))}static waitFor(e){return new $(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=$.resolve(!1);for(const i of e)t=t.next((o=>o?$.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new $(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((w=>{h[y]=w,++f,f===l&&i(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function T1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Gc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Gc.ce=-1;/**
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
 */const ip=-1;function Qc(n){return n==null}function Ac(n){return n===0&&1/n==-1/0}function I1(n){return typeof n=="number"&&Number.isInteger(n)&&!Ac(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Mw="";function S1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=e_(e)),e=A1(n.get(t),e);return e_(e)}function A1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Mw:t+="";break;default:t+=l}}return t}function e_(n){return n+Mw+""}/**
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
 */function t_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class it{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ju(this.root,e,this.comparator,!0)}}class Ju{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Dt.RED,this.left=o??Dt.EMPTY,this.right=l??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Dt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new n_(this.data.getIterator())}getIteratorFrom(e){return new n_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new It(this.comparator);return t.data=e,t}}class n_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new yn([])}unionWith(e){let t=new It(Ot.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Uw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Uw("Invalid base64 string: "+l):l}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const R1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fi(n){if(qe(!!n,39018),typeof n=="string"){let e=0;const t=R1.exec(n);if(qe(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ui(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="server_timestamp",Bw="__type__",zw="__previous_value__",$w="__local_write_time__";function sp(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Bw])==null?void 0:i.stringValue)===jw}function Yc(n){const e=n.mapValue.fields[zw];return sp(e)?Yc(e):e}function ml(n){const e=Fi(n.mapValue.fields[$w].timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class k1{constructor(e,t,i,o,l,h,f,g,y,w,A){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=w,this.apiKey=A}}const Rc="(default)";class gl{constructor(e,t){this.projectId=e,this.database=t||Rc}static empty(){return new gl("","")}get isDefaultDatabase(){return this.database===Rc}isEqual(e){return e instanceof gl&&e.projectId===this.projectId&&e.database===this.database}}function C1(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new ee(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="__type__",P1="__max__",Xu={mapValue:{}},Hw="__vector__",kc="value";function ji(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sp(n)?4:N1(n)?9007199254740991:x1(n)?10:11:ge(28295,{value:n})}function gr(n,e){if(n===e)return!0;const t=ji(n);if(t!==ji(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ml(n).isEqual(ml(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Fi(o.timestampValue),f=Fi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Ui(o.bytesValue).isEqual(Ui(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=dt(o.doubleValue),f=dt(l.doubleValue);return h===f?Ac(h)===Ac(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return Bo(n.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(t_(h)!==t_(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!gr(h[g],f[g])))return!1;return!0})(n,e);default:return ge(52216,{left:n})}}function yl(n,e){return(n.values||[]).find((t=>gr(t,e)))!==void 0}function zo(n,e){if(n===e)return 0;const t=ji(n),i=ji(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=dt(l.integerValue||l.doubleValue),g=dt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return r_(n.timestampValue,e.timestampValue);case 4:return r_(ml(n),ml(e));case 5:return wf(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=Ui(l),g=Ui(h);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let y=0;y<f.length&&y<g.length;y++){const w=De(f[y],g[y]);if(w!==0)return w}return De(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=De(dt(l.latitude),dt(h.latitude));return f!==0?f:De(dt(l.longitude),dt(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return i_(n.arrayValue,e.arrayValue);case 10:return(function(l,h){var N,B,Q,Y;const f=l.fields||{},g=h.fields||{},y=(N=f[kc])==null?void 0:N.arrayValue,w=(B=g[kc])==null?void 0:B.arrayValue,A=De(((Q=y==null?void 0:y.values)==null?void 0:Q.length)||0,((Y=w==null?void 0:w.values)==null?void 0:Y.length)||0);return A!==0?A:i_(y,w)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Xu.mapValue&&h===Xu.mapValue)return 0;if(l===Xu.mapValue)return 1;if(h===Xu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=h.fields||{},w=Object.keys(y);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const N=wf(g[A],w[A]);if(N!==0)return N;const B=zo(f[g[A]],y[w[A]]);if(B!==0)return B}return De(g.length,w.length)})(n.mapValue,e.mapValue);default:throw ge(23264,{he:t})}}function r_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Fi(n),i=Fi(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function i_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=zo(t[o],i[o]);if(l)return l}return De(t.length,i.length)}function $o(n){return Ef(n)}function Ef(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Fi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ui(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ce.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Ef(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Ef(t.fields[h])}`;return o+"}"})(n.mapValue):ge(61005,{value:n})}function hc(n){switch(ji(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yc(n);return e?16+hc(e):16;case 5:return 2*n.stringValue.length;case 6:return Ui(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+hc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Hi(i.fields,((l,h)=>{o+=l.length+hc(h)})),o})(n.mapValue);default:throw ge(13486,{value:n})}}function s_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Tf(n){return!!n&&"integerValue"in n}function op(n){return!!n&&"arrayValue"in n}function o_(n){return!!n&&"nullValue"in n}function a_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function dc(n){return!!n&&"mapValue"in n}function x1(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[qw])==null?void 0:i.stringValue)===Hw}function il(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Hi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=il(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=il(n.arrayValue.values[t]);return e}return{...n}}function N1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===P1}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!dc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=il(t)}setAll(e){let t=Ot.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=il(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());dc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];dc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Hi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new nn(il(this.value))}}function Ww(n){const e=[];return Hi(n.fields,((t,i)=>{const o=new Ot([t]);if(dc(i)){const l=Ww(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new yn(e)}/**
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
 */class qt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new qt(e,0,we.min(),we.min(),we.min(),nn.empty(),0)}static newFoundDocument(e,t,i,o){return new qt(e,1,t,we.min(),i,o,0)}static newNoDocument(e,t){return new qt(e,2,t,we.min(),we.min(),nn.empty(),0)}static newUnknownDocument(e,t){return new qt(e,3,t,we.min(),we.min(),nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cc{constructor(e,t){this.position=e,this.inclusive=t}}function l_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=ce.comparator(ce.fromName(h.referenceValue),t.key):i=zo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function u_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _l{constructor(e,t="asc"){this.field=e,this.dir=t}}function b1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Kw{}class _t extends Kw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new O1(e,t,i):t==="array-contains"?new M1(e,i):t==="in"?new F1(e,i):t==="not-in"?new U1(e,i):t==="array-contains-any"?new j1(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new V1(e,i):new L1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zo(t,this.value)):t!==null&&ji(this.value)===ji(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends Kw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new qn(e,t)}matches(e){return Gw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Gw(n){return n.op==="and"}function Qw(n){return D1(n)&&Gw(n)}function D1(n){for(const e of n.filters)if(e instanceof qn)return!1;return!0}function If(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+$o(n.value);if(Qw(n))return n.filters.map((e=>If(e))).join(",");{const e=n.filters.map((t=>If(t))).join(",");return`${n.op}(${e})`}}function Yw(n,e){return n instanceof _t?(function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&gr(i.value,o.value)})(n,e):n instanceof qn?(function(i,o){return o instanceof qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&Yw(h,o.filters[f])),!0):!1})(n,e):void ge(19439)}function Jw(n){return n instanceof _t?(function(t){return`${t.field.canonicalString()} ${t.op} ${$o(t.value)}`})(n):n instanceof qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Jw).join(" ,")+"}"})(n):"Filter"}class O1 extends _t{constructor(e,t,i){super(e,t,i),this.key=ce.fromName(i.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class V1 extends _t{constructor(e,t){super(e,"in",t),this.keys=Xw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class L1 extends _t{constructor(e,t){super(e,"not-in",t),this.keys=Xw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Xw(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>ce.fromName(i.referenceValue)))}class M1 extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return op(t)&&yl(t.arrayValue,this.value)}}class F1 extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yl(this.value.arrayValue,t)}}class U1 extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!yl(this.value.arrayValue,t)}}class j1 extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!op(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>yl(this.value.arrayValue,i)))}}/**
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
 */class B1{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function c_(n,e=null,t=[],i=[],o=null,l=null,h=null){return new B1(n,e,t,i,o,l,h)}function ap(n){const e=Ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>If(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Qc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>$o(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>$o(i))).join(",")),e.Te=t}return e.Te}function lp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!b1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Yw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!u_(n.startAt,e.startAt)&&u_(n.endAt,e.endAt)}function Sf(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Jo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function z1(n,e,t,i,o,l,h,f){return new Jo(n,e,t,i,o,l,h,f)}function Jc(n){return new Jo(n)}function h_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $1(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Zw(n){return n.collectionGroup!==null}function sl(n){const e=Ie(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new It(Ot.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new _l(l,i))})),t.has(Ot.keyField().canonicalString())||e.Ee.push(new _l(Ot.keyField(),i))}return e.Ee}function fr(n){const e=Ie(n);return e.Ie||(e.Ie=q1(e,sl(n))),e.Ie}function q1(n,e){if(n.limitType==="F")return c_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new _l(o.field,l)}));const t=n.endAt?new Cc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Cc(n.startAt.position,n.startAt.inclusive):null;return c_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Af(n,e){const t=n.filters.concat([e]);return new Jo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function H1(n,e){const t=n.explicitOrderBy.concat([e]);return new Jo(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Pc(n,e,t){return new Jo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Xc(n,e){return lp(fr(n),fr(e))&&n.limitType===e.limitType}function e0(n){return`${ap(fr(n))}|lt:${n.limitType}`}function bo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Jw(o))).join(", ")}]`),Qc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>$o(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>$o(o))).join(",")),`Target(${i})`})(fr(n))}; limitType=${n.limitType})`}function Zc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ce.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of sl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const y=l_(h,f,g);return h.inclusive?y<=0:y<0})(i.startAt,sl(i),o)||i.endAt&&!(function(h,f,g){const y=l_(h,f,g);return h.inclusive?y>=0:y>0})(i.endAt,sl(i),o))})(n,e)}function W1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function t0(n){return(e,t)=>{let i=!1;for(const o of sl(n)){const l=K1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function K1(n,e,t){const i=n.field.isKeyField()?ce.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),y=f.data.field(l);return g!==null&&y!==null?zo(g,y):ge(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ge(19790,{direction:n.dir})}}/**
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
 */class js{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Hi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Fw(this.inner)}size(){return this.innerSize}}/**
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
 */const G1=new it(ce.comparator);function Gr(){return G1}const n0=new it(ce.comparator);function Za(...n){let e=n0;for(const t of n)e=e.insert(t.key,t);return e}function r0(n){let e=n0;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Is(){return ol()}function i0(){return ol()}function ol(){return new js((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Q1=new it(ce.comparator),Y1=new It(ce.comparator);function Oe(...n){let e=Y1;for(const t of n)e=e.add(t);return e}const J1=new It(De);function X1(){return J1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ac(e)?"-0":e}}function s0(n){return{integerValue:""+n}}function o0(n,e){return I1(e)?s0(e):up(n,e)}/**
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
 */class eh{constructor(){this._=void 0}}function Z1(n,e,t){return n instanceof xc?(function(o,l){const h={fields:{[Bw]:{stringValue:jw},[$w]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&sp(l)&&(l=Yc(l)),l&&(h.fields[zw]=l),{mapValue:h}})(t,e):n instanceof vl?l0(n,e):n instanceof wl?u0(n,e):(function(o,l){const h=a0(o,l),f=d_(h)+d_(o.Ae);return Tf(h)&&Tf(o.Ae)?s0(f):up(o.serializer,f)})(n,e)}function eC(n,e,t){return n instanceof vl?l0(n,e):n instanceof wl?u0(n,e):t}function a0(n,e){return n instanceof El?(function(i){return Tf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class xc extends eh{}class vl extends eh{constructor(e){super(),this.elements=e}}function l0(n,e){const t=c0(e);for(const i of n.elements)t.some((o=>gr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class wl extends eh{constructor(e){super(),this.elements=e}}function u0(n,e){let t=c0(e);for(const i of n.elements)t=t.filter((o=>!gr(o,i)));return{arrayValue:{values:t}}}class El extends eh{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function d_(n){return dt(n.integerValue||n.doubleValue)}function c0(n){return op(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class tC{constructor(e,t){this.field=e,this.transform=t}}function nC(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof vl&&o instanceof vl||i instanceof wl&&o instanceof wl?Bo(i.elements,o.elements,gr):i instanceof El&&o instanceof El?gr(i.Ae,o.Ae):i instanceof xc&&o instanceof xc})(n.transform,e.transform)}class rC{constructor(e,t){this.version=e,this.transformResults=t}}class kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class th{}function h0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cp(n.key,kn.none()):new Cl(n.key,n.data,kn.none());{const t=n.data,i=nn.empty();let o=new It(Ot.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Wi(n.key,i,new yn(o.toArray()),kn.none())}}function iC(n,e,t){n instanceof Cl?(function(o,l,h){const f=o.value.clone(),g=p_(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Wi?(function(o,l,h){if(!fc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=p_(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(d0(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function al(n,e,t,i){return n instanceof Cl?(function(l,h,f,g){if(!fc(l.precondition,h))return f;const y=l.value.clone(),w=m_(l.fieldTransforms,g,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Wi?(function(l,h,f,g){if(!fc(l.precondition,h))return f;const y=m_(l.fieldTransforms,g,h),w=h.data;return w.setAll(d0(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((A=>A.field)))})(n,e,t,i):(function(l,h,f){return fc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function sC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=a0(i.transform,o||null);l!=null&&(t===null&&(t=nn.empty()),t.set(i.field,l))}return t||null}function f_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Bo(i,o,((l,h)=>nC(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cl extends th{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Wi extends th{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function d0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function p_(n,e,t){const i=new Map;qe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,eC(h,f,t[o]))}return i}function m_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,Z1(l,h,e))}return i}class cp extends th{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oC extends th{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&iC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=al(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=al(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=i0();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=h0(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&Bo(this.mutations,e.mutations,((t,i)=>f_(t,i)))&&Bo(this.baseMutations,e.baseMutations,((t,i)=>f_(t,i)))}}class hp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){qe(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return Q1})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new hp(e,t,i,o)}}/**
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
 */class lC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var yt,Le;function cC(n){switch(n){case z.OK:return ge(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ge(15467,{code:n})}}function f0(n){if(n===void 0)return Kr("GRPC error has no .code"),z.UNKNOWN;switch(n){case yt.OK:return z.OK;case yt.CANCELLED:return z.CANCELLED;case yt.UNKNOWN:return z.UNKNOWN;case yt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case yt.INTERNAL:return z.INTERNAL;case yt.UNAVAILABLE:return z.UNAVAILABLE;case yt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case yt.NOT_FOUND:return z.NOT_FOUND;case yt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case yt.ABORTED:return z.ABORTED;case yt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case yt.DATA_LOSS:return z.DATA_LOSS;default:return ge(39323,{code:n})}}(Le=yt||(yt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hC(){return new TextEncoder}/**
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
 */const dC=new Vi([4294967295,4294967295],0);function g_(n){const e=hC().encode(n),t=new kw;return t.update(e),new Uint8Array(t.digest())}function y_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Vi([t,i],0),new Vi([o,l],0)]}class dp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new el(`Invalid padding: ${t}`);if(i<0)throw new el(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new el(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new el(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Vi.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Vi.fromNumber(i)));return o.compare(dC)===1&&(o=new Vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=g_(e),[i,o]=y_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new dp(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=g_(e),[i,o]=y_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class el extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nh{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Pl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new nh(we.min(),o,new it(De),Gr(),Oe())}}class Pl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Pl(i,t,Oe(),Oe(),Oe())}}/**
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
 */class pc{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class p0{constructor(e,t){this.targetId=e,this.Ce=t}}class m0{constructor(e,t,i=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class __{constructor(){this.ve=0,this.Fe=v_(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Oe(),t=Oe(),i=Oe();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ge(38017,{changeType:l})}})),new Pl(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=v_()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,qe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Gr(),this.Je=Zu(),this.He=Zu(),this.Ze=new it(De)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Sf(l))if(i===0){const h=new ce(l.path);this.et(t,h,qt.newNoDocument(h,we.min()))}else qe(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ui(i).toUint8Array()}catch(g){if(g instanceof Uw)return Ds("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new dp(h,o,l)}catch(g){return Ds(g instanceof el?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&Sf(f.target)){const g=new ce(f.target.path);this.Et(g).has(h)||this.It(h,g)||this.et(h,g,qt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let i=Oe();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new nh(e,t,this.Ze,this.je,i);return this.je=Gr(),this.Je=Zu(),this.He=Zu(),this.Ze=new it(De),o}Ye(e,t){if(!this.rt(e))return;const i=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new __,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new It(De),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new It(De),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new __),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Zu(){return new it(ce.comparator)}function v_(){return new it(ce.comparator)}const pC={asc:"ASCENDING",desc:"DESCENDING"},mC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gC={and:"AND",or:"OR"};class yC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rf(n,e){return n.useProto3Json||Qc(e)?e:{value:e}}function Nc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function g0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _C(n,e){return Nc(n,e.toTimestamp())}function pr(n){return qe(!!n,49232),we.fromTimestamp((function(t){const i=Fi(t);return new Ze(i.seconds,i.nanos)})(n))}function fp(n,e){return kf(n,e).canonicalString()}function kf(n,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function y0(n){const e=Qe.fromString(n);return qe(T0(e),10190,{key:e.toString()}),e}function Cf(n,e){return fp(n.databaseId,e.path)}function rf(n,e){const t=y0(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(v0(t))}function _0(n,e){return fp(n.databaseId,e)}function vC(n){const e=y0(n);return e.length===4?Qe.emptyPath():v0(e)}function Pf(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function v0(n){return qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function w_(n,e,t){return{name:Cf(n,e),fields:t.value.mapValue.fields}}function wC(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ge(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(qe(w===void 0||typeof w=="string",58123),Vt.fromBase64String(w||"")):(qe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Vt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const w=y.code===void 0?z.UNKNOWN:f0(y.code);return new ee(w,y.message||"")})(h);t=new m0(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=rf(n,i.document.name),l=pr(i.document.updateTime),h=i.document.createTime?pr(i.document.createTime):we.min(),f=new nn({mapValue:{fields:i.document.fields}}),g=qt.newFoundDocument(o,l,h,f),y=i.targetIds||[],w=i.removedTargetIds||[];t=new pc(y,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=rf(n,i.document),l=i.readTime?pr(i.readTime):we.min(),h=qt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new pc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=rf(n,i.document),l=i.removedTargetIds||[];t=new pc([],l,o,null)}else{if(!("filter"in e))return ge(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new uC(o,l),f=i.targetId;t=new p0(f,h)}}return t}function EC(n,e){let t;if(e instanceof Cl)t={update:w_(n,e.key,e.value)};else if(e instanceof cp)t={delete:Cf(n,e.key)};else if(e instanceof Wi)t={update:w_(n,e.key,e.data),updateMask:xC(e.fieldMask)};else{if(!(e instanceof oC))return ge(16599,{dt:e.type});t={verify:Cf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof xc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof vl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof wl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof El)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw ge(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:_C(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ge(27497)})(n,e.precondition)),t}function TC(n,e){return n&&n.length>0?(qe(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?pr(o.updateTime):pr(l);return h.isEqual(we.min())&&(h=pr(l)),new rC(h,o.transformResults||[])})(t,e)))):[]}function IC(n,e){return{documents:[_0(n,e.path)]}}function SC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=_0(n,o);const l=(function(y){if(y.length!==0)return E0(qn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((w=>(function(N){return{field:Do(N.field),direction:kC(N.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Rf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function AC(n){let e=vC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){qe(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(A){const N=w0(A);return N instanceof qn&&Qw(N)?N.getFilters():[N]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((N=>(function(Q){return new _l(Oo(Q.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(N)))})(t.orderBy));let f=null;t.limit&&(f=(function(A){let N;return N=typeof A=="object"?A.value:A,Qc(N)?null:N})(t.limit));let g=null;t.startAt&&(g=(function(A){const N=!!A.before,B=A.values||[];return new Cc(B,N)})(t.startAt));let y=null;return t.endAt&&(y=(function(A){const N=!A.before,B=A.values||[];return new Cc(B,N)})(t.endAt)),z1(e,o,h,l,f,"F",g,y)}function RC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function w0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Oo(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Oo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Oo(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Oo(t.unaryFilter.field);return _t.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(n):n.fieldFilter!==void 0?(function(t){return _t.create(Oo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qn.create(t.compositeFilter.filters.map((i=>w0(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(t.compositeFilter.op))})(n):ge(30097,{filter:n})}function kC(n){return pC[n]}function CC(n){return mC[n]}function PC(n){return gC[n]}function Do(n){return{fieldPath:n.canonicalString()}}function Oo(n){return Ot.fromServerFormat(n.fieldPath)}function E0(n){return n instanceof _t?(function(t){if(t.op==="=="){if(a_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NAN"}};if(o_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(a_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NAN"}};if(o_(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(t.field),op:CC(t.op),value:t.value}}})(n):n instanceof qn?(function(t){const i=t.getFilters().map((o=>E0(o)));return i.length===1?i[0]:{compositeFilter:{op:PC(t.op),filters:i}}})(n):ge(54877,{filter:n})}function xC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function T0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function I0(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class bi{constructor(e,t,i,o,l=we.min(),h=we.min(),f=Vt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new bi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class NC{constructor(e){this.yt=e}}function bC(n){const e=AC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pc(e,e.limit,"L"):e}/**
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
 */class DC{constructor(){this.bn=new OC}addToCollectionParentIndex(e,t){return this.bn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Mi.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Mi.min())}updateCollectionGroup(e,t,i){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class OC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new It(Qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new It(Qe.comparator)).toArray()}}/**
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
 */const E_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},S0=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(S0,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
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
 */class qo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new qo(0)}static ar(){return new qo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="LruGarbageCollector",VC=1048576;function I_([n,e],[t,i]){const o=De(n,t);return o===0?De(e,i):o}class LC{constructor(e){this.Pr=e,this.buffer=new It(I_),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();I_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class MC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ne(T_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yo(t)?ne(T_,"Ignoring IndexedDB error during garbage collection: ",t):await Qo(t)}await this.Ar(3e5)}))}}class FC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Gc.ce);const i=new LC(t);return this.Vr.forEachTarget(e,(o=>i.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Ir(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(E_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),E_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,h,f,g,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(i=A,f=Date.now(),this.removeTargets(e,i,t)))).next((A=>(l=A,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((A=>(y=Date.now(),No()<=be.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${A} documents in `+(y-g)+`ms
Total Duration: ${y-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:A}))))}}function UC(n,e){return new FC(n,e)}/**
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
 */class jC{constructor(){this.changes=new js((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?$.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class zC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&al(i.mutation,o,yn.empty(),Ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Oe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Oe()){const o=Is();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Za();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=Is();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Oe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Gr();const h=ol(),f=(function(){return ol()})();return t.forEach(((g,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Wi)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),al(w.mutation,y,w.mutation.getFieldMask(),Ze.now())):h.set(y.key,yn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,w)=>h.set(y,w))),t.forEach(((y,w)=>f.set(y,new BC(w,h.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=ol();let o=new it(((h,f)=>h-f)),l=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let w=i.get(g)||yn.empty();w=f.applyToLocalView(y,w),i.set(g,w);const A=(o.get(f.batchId)||Oe()).add(g);o=o.insert(f.batchId,A)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,w=g.value,A=i0();w.forEach((N=>{if(!l.has(N)){const B=h0(t.get(N),i.get(N));B!==null&&A.set(N,B),l=l.add(N)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,A))}return $.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return $1(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):$.resolve(Is());let f=pl,g=l;return h.next((y=>$.forEach(y,((w,A)=>(f<A.largestBatchId&&(f=A.largestBatchId),l.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((N=>{g=g.insert(w,N)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,Oe()))).next((w=>({batchId:f,changes:r0(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next((i=>{let o=Za();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Za();return this.indexManager.getCollectionParents(e,l).next((f=>$.forEach(f,(g=>{const y=(function(A,N){return new Jo(N,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((A,N)=>{h=h.insert(A,N)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,qt.newInvalidDocument(w)))}));let f=Za();return h.forEach(((g,y)=>{const w=l.get(g);w!==void 0&&al(w.mutation,y,yn.empty(),Ze.now()),Zc(t,y)&&(f=f.insert(g,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:pr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:bC(o.bundledQuery),readTime:pr(o.readTime)}})(t)),$.resolve()}}/**
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
 */class qC{constructor(){this.overlays=new it(ce.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Is();return $.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),$.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),$.resolve()}getOverlaysForCollection(e,t,i){const o=Is(),l=t.length+1,h=new ce(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new it(((y,w)=>y-w));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=Is(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=Is(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,w)=>f.set(y,w))),!(f.size()>=o)););return $.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new lC(t,i));let l=this.Lr.get(t);l===void 0&&(l=Oe(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
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
 */class HC{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class pp{constructor(){this.kr=new It(Ct.qr),this.Kr=new It(Ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.kr=this.kr.add(i),this.Kr=this.Kr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new ce(new Qe([])),i=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.Kr.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new ce(new Qe([])),i=new Ct(t,e),o=new Ct(t,e+1);let l=Oe();return this.Kr.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Ct(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return ce.comparator(e.key,t.key)||De(e.Jr,t.Jr)}static Ur(e,t){return De(e.Jr,t.Jr)||ce.comparator(e.key,t.key)}}/**
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
 */class WC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new It(Ct.qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new aC(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Hr=this.Hr.add(new Ct(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return $.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?ip:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Jr);l.push(f)})),$.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new It(De);return t.forEach((o=>{const l=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,h],(f=>{i=i.add(f.Jr)}))})),$.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ce.isDocumentKey(l)||(l=l.child(""));const h=new Ct(new ce(l),0);let f=new It(De);return this.Hr.forEachWhile((g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Jr)),!0)}),h),$.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){qe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return $.forEach(t.mutations,(o=>{const l=new Ct(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=i}))}nr(e){}containsKey(e,t){const i=new Ct(t,0),o=this.Hr.firstAfterOrEqual(i);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class KC{constructor(e){this.ti=e,this.docs=(function(){return new it(ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return $.resolve(i?i.document.mutableCopy():qt.newInvalidDocument(t))}getEntries(e,t){let i=Gr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():qt.newInvalidDocument(o))})),$.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Gr();const h=t.path,f=new ce(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:w}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||v1(_1(w),i)<=0||(o.has(w.key)||Zc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return $.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ge(9500)}ni(e,t){return $.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new GC(this)}getSize(e){return $.resolve(this.size)}}class GC extends jC{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class QC{constructor(e){this.persistence=e,this.ri=new js((t=>ap(t)),lp),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.ii=0,this.si=new pp,this.targetCount=0,this.oi=qo._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new qo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),$.waitFor(l).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return $.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),$.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return $.resolve(i)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
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
 */class A0{constructor(e,t){this._i={},this.overlays={},this.ai=new Gc(0),this.ui=!1,this.ui=!0,this.ci=new HC,this.referenceDelegate=e(this),this.li=new QC(this),this.indexManager=new DC,this.remoteDocumentCache=(function(o){return new KC(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new NC(t),this.Pi=new $C(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new WC(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){ne("MemoryPersistence","Starting transaction:",e);const o=new YC(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ei(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ii(e,t){return $.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class YC extends E1{constructor(e){super(),this.currentSequenceNumber=e}}class mp{constructor(e){this.persistence=e,this.Ri=new pp,this.Ai=null}static Vi(e){return new mp(e)}get di(){if(this.Ai)return this.Ai;throw ge(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),$.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(i=>{const o=ce.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,we.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class bc{constructor(e,t){this.persistence=e,this.fi=new js((i=>S1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=UC(this,t)}static Vi(e,t){return new bc(e,t)}Ti(){}Ei(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?$.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,we.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),$.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hc(e.data.value)),t}wr(e,t,i){return $.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Es=o}static Is(e,t){let i=Oe(),o=Oe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new gp(e,t.fromCache,i,o)}}/**
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
 */class JC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class XC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return ZT()?8:T1(Wt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new JC;return this.ys(e,t,h).next((f=>{if(l.result=f,this.As)return this.ws(e,t,h,f.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(No()<=be.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",bo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(No()<=be.DEBUG&&ne("QueryEngine","Query:",bo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(No()<=be.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",bo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fr(t))):$.resolve())}gs(e,t){if(h_(t))return $.resolve(null);let i=fr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Pc(t,null,"F"),i=fr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Oe(...l);return this.fs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const y=this.Ss(t,f);return this.bs(t,y,h,g.readTime)?this.gs(e,Pc(t,null,"F")):this.Ds(e,y,t,g)}))))})))))}ps(e,t,i,o){return h_(t)||o.isEqual(we.min())?$.resolve(null):this.fs.getDocuments(e,i).next((l=>{const h=this.Ss(t,l);return this.bs(t,h,i,o)?$.resolve(null):(No()<=be.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),bo(t)),this.Ds(e,h,t,y1(o,pl)).next((f=>f)))}))}Ss(e,t){let i=new It(t0(e));return t.forEach(((o,l)=>{Zc(e,l)&&(i=i.add(l))})),i}bs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return No()<=be.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",bo(t)),this.fs.getDocumentsMatchingQuery(e,t,Mi.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="LocalStore",ZC=3e8;class eP{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new it(De),this.Fs=new js((l=>ap(l)),lp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function tP(n,e,t,i){return new eP(n,e,t,i)}async function R0(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=Oe();for(const y of o){h.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next((y=>({Ns:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function nP(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,g,y,w){const A=y.batch,N=A.keys();let B=$.resolve();return N.forEach((Q=>{B=B.next((()=>w.getEntry(g,Q))).next((Y=>{const q=y.docVersions.get(Q);qe(q!==null,48541),Y.version.compareTo(q)<0&&(A.applyToRemoteDocument(Y,y),Y.isValidDocument()&&(Y.setReadTime(y.commitVersion),w.addEntry(Y)))}))})),B.next((()=>f.mutationQueue.removeMutationBatch(g,A)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Oe();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function k0(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function rP(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((w,A)=>{const N=o.get(A);if(!N)return;f.push(t.li.removeMatchingKeys(l,w.removedDocuments,A).next((()=>t.li.addMatchingKeys(l,w.addedDocuments,A))));let B=N.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(A)!==null?B=B.withResumeToken(Vt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,i)),o=o.insert(A,B),(function(Y,q,pe){return Y.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=ZC?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0})(N,B,w)&&f.push(t.li.updateTargetData(l,B))}));let g=Gr(),y=Oe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(iP(l,h,e.documentUpdates).next((w=>{g=w.Bs,y=w.Ls}))),!i.isEqual(we.min())){const w=t.li.getLastRemoteSnapshotVersion(l).next((A=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return $.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.vs=o,l)))}function iP(n,e,t){let i=Oe(),o=Oe();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=Gr();return t.forEach(((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ne(yp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function sP(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=ip),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function oP(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,$.resolve(o)):t.li.allocateTargetId(i).next((h=>(o=new bi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function xf(n,e,t){const i=Ie(n),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Yo(h))throw h;ne(yp,`Failed to update sequence numbers for target ${e}: ${h}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function S_(n,e,t){const i=Ie(n);let o=we.min(),l=Oe();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,w){const A=Ie(g),N=A.Fs.get(w);return N!==void 0?$.resolve(A.vs.get(N)):A.li.getTargetData(y,w)})(i,h,fr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:Oe()))).next((f=>(aP(i,W1(e),f),{documents:f,ks:l})))))}function aP(n,e,t){let i=n.Ms.get(e)||we.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Ms.set(e,i)}class A_{constructor(){this.activeTargetIds=X1()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lP{constructor(){this.vo=new A_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new A_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uP{Mo(e){}shutdown(){}}/**
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
 */const R_="ConnectivityMonitor";class k_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ne(R_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ne(R_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ec=null;function Nf(){return ec===null?ec=(function(){return 268435456+Math.round(2147483648*Math.random())})():ec++,"0x"+ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="RestConnection",cP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===Rc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=Nf(),f=this.Qo(e,t.toUriEncodedString());ne(sf,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:y}=new URL(f),w=Wo(y);return this.zo(e,f,g,i,w).then((A=>(ne(sf,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw Ds(sf,`RPC '${e}' ${h} failed with error: `,A,"url: ",f,"request:",i),A}))}jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Go})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=cP[e];let o=`${this.Ko}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class dP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Bt="WebChannelConnection",Ga=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Uo extends hP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Uo.c_){const e=Nw();Ga(e,xw.STAT_EVENT,(t=>{t.stat===vf.PROXY?ne(Bt,"STAT_EVENT: detected buffering proxy"):t.stat===vf.NOPROXY&&ne(Bt,"STAT_EVENT: detected no buffering proxy")})),Uo.c_=!0}}zo(e,t,i,o,l){const h=Nf();return new Promise(((f,g)=>{const y=new Cw;y.setWithCredentials(!0),y.listenOnce(Pw.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case cc.NO_ERROR:const A=y.getResponseJson();ne(Bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),f(A);break;case cc.TIMEOUT:ne(Bt,`RPC '${e}' ${h} timed out`),g(new ee(z.DEADLINE_EXCEEDED,"Request time out"));break;case cc.HTTP_ERROR:const N=y.getStatus();if(ne(Bt,`RPC '${e}' ${h} failed with status:`,N,"response text:",y.getResponseText()),N>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const Q=B==null?void 0:B.error;if(Q&&Q.status&&Q.message){const Y=(function(pe){const Ee=pe.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(Ee)>=0?Ee:z.UNKNOWN})(Q.status);g(new ee(Y,Q.message))}else g(new ee(z.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ee(z.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ne(Bt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(Bt,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",w,i,15)}))}T_(e,t,i){const o=Nf(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const y=l.join("");ne(Bt,`Creating RPC '${e}' stream ${o}: ${y}`,f);const w=h.createWebChannel(y,f);this.E_(w);let A=!1,N=!1;const B=new dP({Jo:Q=>{N?ne(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,Q):(A||(ne(Bt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),A=!0),ne(Bt,`RPC '${e}' stream ${o} sending:`,Q),w.send(Q))},Ho:()=>w.close()});return Ga(w,Xa.EventType.OPEN,(()=>{N||(ne(Bt,`RPC '${e}' stream ${o} transport opened.`),B.i_())})),Ga(w,Xa.EventType.CLOSE,(()=>{N||(N=!0,ne(Bt,`RPC '${e}' stream ${o} transport closed`),B.o_(),this.I_(w))})),Ga(w,Xa.EventType.ERROR,(Q=>{N||(N=!0,Ds(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,Q.name,"Message:",Q.message),B.o_(new ee(z.UNAVAILABLE,"The operation could not be completed")))})),Ga(w,Xa.EventType.MESSAGE,(Q=>{var Y;if(!N){const q=Q.data[0];qe(!!q,16349);const pe=q,Ee=(pe==null?void 0:pe.error)||((Y=pe[0])==null?void 0:Y.error);if(Ee){ne(Bt,`RPC '${e}' stream ${o} received error:`,Ee);const Se=Ee.status;let fe=(function(b){const R=yt[b];if(R!==void 0)return f0(R)})(Se),Ce=Ee.message;Se==="NOT_FOUND"&&Ce.includes("database")&&Ce.includes("does not exist")&&Ce.includes(this.databaseId.database)&&Ds(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),fe===void 0&&(fe=z.INTERNAL,Ce="Unknown error status: "+Se+" with message "+Ee.message),N=!0,B.o_(new ee(fe,Ce)),w.close()}else ne(Bt,`RPC '${e}' stream ${o} received:`,q),B.__(q)}})),Uo.u_(),setTimeout((()=>{B.s_()}),0),B}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return bw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(n){return new Uo(n)}function of(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n){return new yC(n,!0)}/**
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
 */Uo.c_=!1;class C0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const C_="PersistentStream";class P0{constructor(e,t,i,o,l,h,f,g){this.Ci=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new C0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(Kr(t.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ee(z.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(C_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ne(C_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pP extends P0{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=wC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?pr(h.readTime):we.min()})(e);return this.listener.H_(t,i)}Z_(e){const t={};t.database=Pf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=Sf(g)?{documents:IC(l,g)}:{query:SC(l,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=g0(l,h.resumeToken);const y=Rf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=Nc(l,h.snapshotVersion.toTimestamp());const y=Rf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=RC(this.serializer,e);i&&(t.labels=i),this.q_(t)}X_(e){const t={};t.database=Pf(this.serializer),t.removeTarget=e,this.q_(t)}}class mP extends P0{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=TC(e.writeResults,e.commitTime),i=pr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Pf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>EC(this.serializer,i)))};this.q_(t)}}/**
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
 */class gP{}class yP extends gP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,kf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(z.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.jo(e,kf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(z.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function _P(n,e,t,i){return new yP(n,e,t,i)}class vP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Kr(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Os="RemoteStore";class wP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((h=>{i.enqueueAndForget((async()=>{Bs(this)&&(ne(Os,"Restarting streams for network reachability change."),await(async function(g){const y=Ie(g);y.Ia.add(4),await xl(y),y.Va.set("Unknown"),y.Ia.delete(4),await ih(y)})(this))}))})),this.Va=new vP(i,o)}}async function ih(n){if(Bs(n))for(const e of n.Ra)await e(!0)}async function xl(n){for(const e of n.Ra)await e(!1)}function x0(n,e){const t=Ie(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Ep(t)?wp(t):Xo(t).O_()&&vp(t,e))}function _p(n,e){const t=Ie(n),i=Xo(t);t.Ea.delete(e),i.O_()&&N0(t,e),t.Ea.size===0&&(i.O_()?i.L_():Bs(t)&&t.Va.set("Unknown"))}function vp(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xo(n).Z_(e)}function N0(n,e){n.da.$e(e),Xo(n).X_(e)}function wp(n){n.da=new fC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Xo(n).start(),n.Va.ua()}function Ep(n){return Bs(n)&&!Xo(n).x_()&&n.Ea.size>0}function Bs(n){return Ie(n).Ia.size===0}function b0(n){n.da=void 0}async function EP(n){n.Va.set("Online")}async function TP(n){n.Ea.forEach(((e,t)=>{vp(n,e)}))}async function IP(n,e){b0(n),Ep(n)?(n.Va.ha(e),wp(n)):n.Va.set("Unknown")}async function SP(n,e,t){if(n.Va.set("Online"),e instanceof m0&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ea.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ea.delete(f),o.da.removeTarget(f))})(n,e)}catch(i){ne(Os,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Dc(n,i)}else if(e instanceof pc?n.da.Xe(e):e instanceof p0?n.da.st(e):n.da.tt(e),!t.isEqual(we.min()))try{const i=await k0(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.da.Tt(h);return f.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ea.get(y);w&&l.Ea.set(y,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,y)=>{const w=l.Ea.get(g);if(!w)return;l.Ea.set(g,w.withResumeToken(Vt.EMPTY_BYTE_STRING,w.snapshotVersion)),N0(l,g);const A=new bi(w.target,g,y,w.sequenceNumber);vp(l,A)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ne(Os,"Failed to raise snapshot:",i),await Dc(n,i)}}async function Dc(n,e,t){if(!Yo(e))throw e;n.Ia.add(1),await xl(n),n.Va.set("Offline"),t||(t=()=>k0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ne(Os,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ih(n)}))}function D0(n,e){return e().catch((t=>Dc(n,t,e)))}async function sh(n){const e=Ie(n),t=Bi(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ip;for(;AP(e);)try{const o=await sP(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,RP(e,o)}catch(o){await Dc(e,o)}O0(e)&&V0(e)}function AP(n){return Bs(n)&&n.Ta.length<10}function RP(n,e){n.Ta.push(e);const t=Bi(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function O0(n){return Bs(n)&&!Bi(n).x_()&&n.Ta.length>0}function V0(n){Bi(n).start()}async function kP(n){Bi(n).ra()}async function CP(n){const e=Bi(n);for(const t of n.Ta)e.ea(t.mutations)}async function PP(n,e,t){const i=n.Ta.shift(),o=hp.from(i,e,t);await D0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await sh(n)}async function xP(n,e){e&&Bi(n).Y_&&await(async function(i,o){if((function(h){return cC(h)&&h!==z.ABORTED})(o.code)){const l=i.Ta.shift();Bi(i).B_(),await D0(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await sh(i)}})(n,e),O0(n)&&V0(n)}async function P_(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),ne(Os,"RemoteStore received new credentials");const i=Bs(t);t.Ia.add(3),await xl(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ih(t)}async function NP(n,e){const t=Ie(n);e?(t.Ia.delete(2),await ih(t)):e||(t.Ia.add(2),await xl(t),t.Va.set("Unknown"))}function Xo(n){return n.ma||(n.ma=(function(t,i,o){const l=Ie(t);return l.sa(),new pP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:EP.bind(null,n),Yo:TP.bind(null,n),t_:IP.bind(null,n),H_:SP.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Ep(n)?wp(n):n.Va.set("Unknown")):(await n.ma.stop(),b0(n))}))),n.ma}function Bi(n){return n.fa||(n.fa=(function(t,i,o){const l=Ie(t);return l.sa(),new mP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:kP.bind(null,n),t_:xP.bind(null,n),ta:CP.bind(null,n),na:PP.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await sh(n)):(await n.fa.stop(),n.Ta.length>0&&(ne(Os,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Tp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Tp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ip(n,e){if(Kr("AsyncQueue",`${e}: ${n}`),Yo(n))return new ee(z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class jo{static emptySet(e){return new jo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ce.comparator(t.key,i.key):(t,i)=>ce.comparator(t.key,i.key),this.keyedMap=Za(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new jo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class x_{constructor(){this.ga=new it(ce.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ge(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ho{constructor(e,t,i,o,l,h,f,g,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Ho(e,t,jo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class bP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class DP{constructor(){this.queries=N_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=N_(),l.forEach(((h,f)=>{for(const g of f.Sa)g.onError(i)}))})(this,new ee(z.ABORTED,"Firestore shutting down"))}}function N_(){return new js((n=>e0(n)),Xc)}async function Sp(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new bP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Ip(h,`Initialization of query '${bo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Rp(t)}async function Ap(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function OP(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&Rp(t)}function VP(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function Rp(n){n.Ca.forEach((e=>{e.next()}))}var bf,b_;(b_=bf||(bf={})).Ma="default",b_.Cache="cache";class kp{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ho(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==bf.Cache}}/**
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
 */class L0{constructor(e){this.key=e}}class M0{constructor(e){this.key=e}}class LP{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Oe(),this.mutatedKeys=Oe(),this.eu=t0(e),this.tu=new jo(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new x_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const N=o.get(w),B=Zc(this.query,A)?A:null,Q=!!N&&this.mutatedKeys.has(N.key),Y=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let q=!1;N&&B?N.data.isEqual(B.data)?Q!==Y&&(i.track({type:3,doc:B}),q=!0):this.su(N,B)||(i.track({type:2,doc:B}),q=!0,(g&&this.eu(B,g)>0||y&&this.eu(B,y)<0)&&(f=!0)):!N&&B?(i.track({type:0,doc:B}),q=!0):N&&!B&&(i.track({type:1,doc:N}),q=!0,(g||y)&&(f=!0)),q&&(B?(h=h.add(B),l=Y?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{tu:h,iu:i,bs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,A)=>(function(B,Q){const Y=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Vt:q})}};return Y(B)-Y(Q)})(w.type,A.type)||this.eu(w.doc,A.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,y=g!==this.Xa;return this.Xa=g,h.length!==0||y?{snapshot:new Ho(this.query,e.tu,l,h,e.mutatedKeys,g===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new x_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Oe(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new M0(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new L0(i))})),t}cu(e){this.Za=e.ks,this.Ya=Oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ho.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Cp="SyncEngine";class MP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class FP{constructor(e){this.key=e,this.hu=!1}}class UP{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new js((f=>e0(f)),Xc),this.Eu=new Map,this.Iu=new Set,this.Ru=new it(ce.comparator),this.Au=new Map,this.Vu=new pp,this.du={},this.mu=new Map,this.fu=qo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function jP(n,e,t=!0){const i=$0(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await F0(i,e,t,!0),o}async function BP(n,e){const t=$0(n);await F0(t,e,!0,!1)}async function F0(n,e,t,i){const o=await oP(n.localStore,fr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await zP(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&x0(n.remoteStore,o),f}async function zP(n,e,t,i,o){n.pu=(A,N,B)=>(async function(Y,q,pe,Ee){let Se=q.view.ru(pe);Se.bs&&(Se=await S_(Y.localStore,q.query,!1).then((({documents:b})=>q.view.ru(b,Se))));const fe=Ee&&Ee.targetChanges.get(q.targetId),Ce=Ee&&Ee.targetMismatches.get(q.targetId)!=null,Re=q.view.applyChanges(Se,Y.isPrimaryClient,fe,Ce);return O_(Y,q.targetId,Re.au),Re.snapshot})(n,A,N,B);const l=await S_(n.localStore,e,!0),h=new LP(e,l.ks),f=h.ru(l.documents),g=Pl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,g);O_(n,t,y.au);const w=new MP(e,t,h);return n.Tu.set(e,w),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),y.snapshot}async function $P(n,e,t){const i=Ie(n),o=i.Tu.get(e),l=i.Eu.get(o.targetId);if(l.length>1)return i.Eu.set(o.targetId,l.filter((h=>!Xc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await xf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&_p(i.remoteStore,o.targetId),Df(i,o.targetId)})).catch(Qo)):(Df(i,o.targetId),await xf(i.localStore,o.targetId,!0))}async function qP(n,e){const t=Ie(n),i=t.Tu.get(e),o=t.Eu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),_p(t.remoteStore,i.targetId))}async function HP(n,e,t){const i=XP(n);try{const o=await(function(h,f){const g=Ie(h),y=Ze.now(),w=f.reduce(((B,Q)=>B.add(Q.key)),Oe());let A,N;return g.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let Q=Gr(),Y=Oe();return g.xs.getEntries(B,w).next((q=>{Q=q,Q.forEach(((pe,Ee)=>{Ee.isValidDocument()||(Y=Y.add(pe))}))})).next((()=>g.localDocuments.getOverlayedDocuments(B,Q))).next((q=>{A=q;const pe=[];for(const Ee of f){const Se=sC(Ee,A.get(Ee.key).overlayedDocument);Se!=null&&pe.push(new Wi(Ee.key,Se,Ww(Se.value.mapValue),kn.exists(!0)))}return g.mutationQueue.addMutationBatch(B,y,pe,f)})).next((q=>{N=q;const pe=q.applyToLocalDocumentSet(A,Y);return g.documentOverlayCache.saveOverlays(B,q.batchId,pe)}))})).then((()=>({batchId:N.batchId,changes:r0(A)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let y=h.du[h.currentUser.toKey()];y||(y=new it(De)),y=y.insert(f,g),h.du[h.currentUser.toKey()]=y})(i,o.batchId,t),await Nl(i,o.changes),await sh(i.remoteStore)}catch(o){const l=Ip(o,"Failed to persist write");t.reject(l)}}async function U0(n,e){const t=Ie(n);try{const i=await rP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?qe(h.hu,14607):o.removedDocuments.size>0&&(qe(h.hu,42227),h.hu=!1))})),await Nl(t,i,e)}catch(i){await Qo(i)}}function D_(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Ie(h);g.onlineState=f;let y=!1;g.queries.forEach(((w,A)=>{for(const N of A.Sa)N.va(f)&&(y=!0)})),y&&Rp(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function WP(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let h=new it(ce.comparator);h=h.insert(l,qt.newNoDocument(l,we.min()));const f=Oe().add(l),g=new nh(we.min(),new Map,new it(De),h,f);await U0(i,g),i.Ru=i.Ru.remove(l),i.Au.delete(e),Pp(i)}else await xf(i.localStore,e,!1).then((()=>Df(i,e,t))).catch(Qo)}async function KP(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await nP(t.localStore,e);B0(t,i,null),j0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Nl(t,o)}catch(o){await Qo(o)}}async function GP(n,e,t){const i=Ie(n);try{const o=await(function(h,f){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return g.mutationQueue.lookupMutationBatch(y,f).next((A=>(qe(A!==null,37113),w=A.keys(),g.mutationQueue.removeMutationBatch(y,A)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>g.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);B0(i,e,t),j0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Nl(i,o)}catch(o){await Qo(o)}}function j0(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function B0(n,e,t){const i=Ie(n);let o=i.du[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function Df(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Eu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||z0(n,i)}))}function z0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(_p(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Pp(n))}function O_(n,e,t){for(const i of t)i instanceof L0?(n.Vu.addReference(i.key,e),QP(n,i)):i instanceof M0?(ne(Cp,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||z0(n,i.key)):ge(19791,{wu:i})}function QP(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(i)||(ne(Cp,"New document in limbo: "+t),n.Iu.add(i),Pp(n))}function Pp(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ce(Qe.fromString(e)),i=n.fu.next();n.Au.set(i,new FP(t)),n.Ru=n.Ru.insert(t,i),x0(n.remoteStore,new bi(fr(Jc(t.path)),i,"TargetPurposeLimboResolution",Gc.ce))}}async function Nl(n,e,t){const i=Ie(n),o=[],l=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{h.push(i.pu(g,e,t).then((y=>{var w;if((y||t)&&i.isPrimaryClient){const A=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;i.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(y){o.push(y);const A=gp.Is(g.targetId,y);l.push(A)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,y){const w=Ie(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>$.forEach(y,(N=>$.forEach(N.Ts,(B=>w.persistence.referenceDelegate.addReference(A,N.targetId,B))).next((()=>$.forEach(N.Es,(B=>w.persistence.referenceDelegate.removeReference(A,N.targetId,B)))))))))}catch(A){if(!Yo(A))throw A;ne(yp,"Failed to update sequence numbers: "+A)}for(const A of y){const N=A.targetId;if(!A.fromCache){const B=w.vs.get(N),Q=B.snapshotVersion,Y=B.withLastLimboFreeSnapshotVersion(Q);w.vs=w.vs.insert(N,Y)}}})(i.localStore,l))}async function YP(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){ne(Cp,"User change. New user:",e.toKey());const i=await R0(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new ee(z.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Nl(t,i.Ns)}}function JP(n,e){const t=Ie(n),i=t.Au.get(e);if(i&&i.hu)return Oe().add(i.key);{let o=Oe();const l=t.Eu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function $0(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=U0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WP.bind(null,e),e.Pu.H_=OP.bind(null,e.eventManager),e.Pu.yu=VP.bind(null,e.eventManager),e}function XP(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GP.bind(null,e),e}class Oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return tP(this.persistence,new XC,e.initialUser,this.serializer)}Cu(e){return new A0(mp.Vi,this.serializer)}Du(e){return new lP}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oc.provider={build:()=>new Oc};class ZP extends Oc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){qe(this.persistence.referenceDelegate instanceof bc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new MC(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new A0((i=>bc.Vi(i,t)),this.serializer)}}class Of{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>D_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=YP.bind(null,this.syncEngine),await NP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new DP})()}createDatastore(e){const t=rh(e.databaseInfo.databaseId),i=fP(e.databaseInfo);return _P(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new wP(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>D_(this.syncEngine,t,0)),(function(){return k_.v()?new k_:new uP})())}createSyncEngine(e,t){return(function(o,l,h,f,g,y,w){const A=new UP(o,l,h,f,g,y);return w&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ie(o);ne(Os,"RemoteStore shutting down."),l.Ia.add(5),await xl(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Of.provider={build:()=>new Of};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Kr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const zi="FirestoreClient";class ex{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=rp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{ne(zi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ne(zi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ip(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function af(n,e){n.asyncQueue.verifyOperationInProgress(),ne(zi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await R0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function V_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tx(n);ne(zi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>P_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>P_(e.remoteStore,o))),n._onlineComponents=e}async function tx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ne(zi,"Using user provided OfflineComponentProvider");try{await af(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ds("Error using user provided cache. Falling back to memory cache: "+t),await af(n,new Oc)}}else ne(zi,"Using default OfflineComponentProvider"),await af(n,new ZP(void 0));return n._offlineComponents}async function q0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ne(zi,"Using user provided OnlineComponentProvider"),await V_(n,n._uninitializedComponentsProvider._online)):(ne(zi,"Using default OnlineComponentProvider"),await V_(n,new Of))),n._onlineComponents}function nx(n){return q0(n).then((e=>e.syncEngine))}async function Vc(n){const e=await q0(n),t=e.eventManager;return t.onListen=jP.bind(null,e.syncEngine),t.onUnlisten=$P.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=BP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qP.bind(null,e.syncEngine),t}function rx(n,e,t,i){const o=new xp(i),l=new kp(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>Sp(await Vc(n),l))),()=>{o.Nu(),n.asyncQueue.enqueueAndForget((async()=>Ap(await Vc(n),l)))}}function ix(n,e,t={}){const i=new qr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const w=new xp({next:N=>{w.Nu(),h.enqueueAndForget((()=>Ap(l,A)));const B=N.docs.has(f);!B&&N.fromCache?y.reject(new ee(z.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&N.fromCache&&g&&g.source==="server"?y.reject(new ee(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(N)},error:N=>y.reject(N)}),A=new kp(Jc(f.path),w,{includeMetadataChanges:!0,qa:!0});return Sp(l,A)})(await Vc(n),n.asyncQueue,e,t,i))),i.promise}function sx(n,e,t={}){const i=new qr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const w=new xp({next:N=>{w.Nu(),h.enqueueAndForget((()=>Ap(l,A))),N.fromCache&&g.source==="server"?y.reject(new ee(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(N)},error:N=>y.reject(N)}),A=new kp(f,w,{includeMetadataChanges:!0,qa:!0});return Sp(l,A)})(await Vc(n),n.asyncQueue,e,t,i))),i.promise}function ox(n,e){const t=new qr;return n.asyncQueue.enqueueAndForget((async()=>HP(await nx(n),e,t))),t.promise}/**
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
 */function H0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="ComponentProvider",L_=new Map;function lx(n,e,t,i,o){return new k1(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,H0(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="firestore.googleapis.com",M_=!0;class F_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=W0,this.ssl=M_}else this.host=e.host,this.ssl=e.ssl??M_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=S0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VC)throw new ee(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}g1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=H0(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new F_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new F_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new o1;switch(i.type){case"firstParty":return new c1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ee(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=L_.get(t);i&&(ne(ax,"Removing Datastore"),L_.delete(t),i.terminate())})(this),Promise.resolve()}}function ux(n,e,t,i={}){var y;n=sn(n,oh);const o=Wo(e),l=n._getSettings(),h={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&Ff(`https://${f}`),l.host!==W0&&l.host!==f&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!ks(g,h)&&(n._setSettings(g),i.mockUserToken)){let w,A;if(typeof i.mockUserToken=="string")w=i.mockUserToken,A=$t.MOCK_USER;else{w=mv(i.mockUserToken,(y=n._app)==null?void 0:y.options.projectId);const N=i.mockUserToken.sub||i.mockUserToken.user_id;if(!N)throw new ee(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new $t(N)}n._authCredentials=new a1(new Ow(w,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Yr(this.firestore,e,this._query)}}class at{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(kl(t,at._jsonSchema))return new at(e,i||null,new ce(Qe.fromString(t.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:vt("string",at._jsonSchemaVersion),referencePath:vt("string")};class Li extends Yr{constructor(e,t,i){super(e,t,Jc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new ce(e))}withConverter(e){return new Li(this.firestore,e,this._path)}}function Tt(n,e,...t){if(n=rt(n),Vw("collection","path",e),n instanceof oh){const i=Qe.fromString(e,...t);return Jy(i),new Li(n,null,i)}{if(!(n instanceof at||n instanceof Li))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return Jy(i),new Li(n.firestore,null,i)}}function kt(n,e,...t){if(n=rt(n),arguments.length===1&&(e=rp.newId()),Vw("doc","path",e),n instanceof oh){const i=Qe.fromString(e,...t);return Yy(i),new at(n,null,new ce(i))}{if(!(n instanceof at||n instanceof Li))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return Yy(i),new at(n.firestore,n instanceof Li?n.converter:null,new ce(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="AsyncQueue";class j_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new C0(this,"async_queue_retry"),this._c=()=>{const i=of();i&&ne(U_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=of();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=of();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new qr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Yo(e))throw e;ne(U_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Kr("INTERNAL UNHANDLED ERROR: ",B_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Tp.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&ge(47125,{Pc:B_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function B_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Qr extends oh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new j_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new j_(e),this._firestoreClient=void 0,await e}}}function cx(n,e){const t=typeof n=="object"?n:Bc(),i=typeof n=="string"?n:Rc,o=Ms(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=dv("firestore");l&&ux(o,...l)}return o}function ah(n){if(n._terminated)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hx(n),n._firestoreClient}function hx(n){var i,o,l,h;const e=n._freezeSettings(),t=lx(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new ex(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(Vt.fromBase64String(e))}catch(t){throw new ee(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(kl(e,Rn._jsonSchema))return Rn.fromBase64String(e.bytes)}}Rn._jsonSchemaVersion="firestore/bytes/1.0",Rn._jsonSchema={type:vt("string",Rn._jsonSchemaVersion),bytes:vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this._methodName=e}}/**
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
 */class mr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mr._jsonSchemaVersion}}static fromJSON(e){if(kl(e,mr._jsonSchema))return new mr(e.latitude,e.longitude)}}mr._jsonSchemaVersion="firestore/geoPoint/1.0",mr._jsonSchema={type:vt("string",mr._jsonSchemaVersion),latitude:vt("number"),longitude:vt("number")};/**
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
 */class Bn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(kl(e,Bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Bn(e.vectorValues);throw new ee(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bn._jsonSchemaVersion="firestore/vectorValue/1.0",Bn._jsonSchema={type:vt("string",Bn._jsonSchemaVersion),vectorValues:vt("object")};/**
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
 */const dx=/^__.*__$/;class fx{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Wi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cl(e,this.data,t,this.fieldTransforms)}}class K0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Wi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function G0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{dataSource:n})}}class bp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new bp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.mc(e),i}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.Ac(),i}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Lc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(G0(this.dataSource)&&dx.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class px{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||rh(e)}A(e,t,i,o=!1){return new bp({dataSource:e,methodName:t,targetDoc:i,path:Ot.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uh(n){const e=n._freezeSettings(),t=rh(n._databaseId);return new px(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Q0(n,e,t,i,o,l={}){const h=n.A(l.merge||l.mergeFields?2:0,e,t,o);Op("Data must be an object, but it was:",h,i);const f=Y0(i,h);let g,y;if(l.merge)g=new yn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const A of l.mergeFields){const N=Vs(e,A,t);if(!h.contains(N))throw new ee(z.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);Z0(w,N)||w.push(N)}g=new yn(w),y=h.fieldTransforms.filter((A=>g.covers(A.field)))}else g=null,y=h.fieldTransforms;return new fx(new nn(f),g,y)}class ch extends lh{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ch}}class Dp extends lh{constructor(e,t){super(e),this.bc=t}_toFieldTransform(e){const t=new El(e.serializer,o0(e.serializer,this.bc));return new tC(e.path,t)}isEqual(e){return e instanceof Dp&&this.bc===e.bc}}function mx(n,e,t,i){const o=n.A(1,e,t);Op("Data must be an object, but it was:",o,i);const l=[],h=nn.empty();Hi(i,((g,y)=>{const w=X0(e,g,t);y=rt(y);const A=o.fc(w);if(y instanceof ch)l.push(w);else{const N=bl(y,A);N!=null&&(l.push(w),h.set(w,N))}}));const f=new yn(l);return new K0(h,f,o.fieldTransforms)}function gx(n,e,t,i,o,l){const h=n.A(1,e,t),f=[Vs(e,i,t)],g=[o];if(l.length%2!=0)throw new ee(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let N=0;N<l.length;N+=2)f.push(Vs(e,l[N])),g.push(l[N+1]);const y=[],w=nn.empty();for(let N=f.length-1;N>=0;--N)if(!Z0(y,f[N])){const B=f[N];let Q=g[N];Q=rt(Q);const Y=h.fc(B);if(Q instanceof ch)y.push(B);else{const q=bl(Q,Y);q!=null&&(y.push(B),w.set(B,q))}}const A=new yn(y);return new K0(w,A,h.fieldTransforms)}function yx(n,e,t,i=!1){return bl(t,n.A(i?4:3,e))}function bl(n,e){if(J0(n=rt(n)))return Op("Unsupported field value:",e,n),Y0(n,e);if(n instanceof lh)return(function(i,o){if(!G0(o.dataSource))throw o.yc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=bl(f,o.gc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=rt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return o0(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ze.fromDate(i);return{timestampValue:Nc(o.serializer,l)}}if(i instanceof Ze){const l=new Ze(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Nc(o.serializer,l)}}if(i instanceof mr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Rn)return{bytesValue:g0(o.serializer,i._byteString)};if(i instanceof at){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:fp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Bn)return(function(h,f){const g=h instanceof Bn?h.toArray():h;return{mapValue:{fields:{[qw]:{stringValue:Hw},[kc]:{arrayValue:{values:g.map((w=>{if(typeof w!="number")throw f.yc("VectorValues must only contain numeric values.");return up(f.serializer,w)}))}}}}}})(i,o);if(I0(i))return i._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Kc(i)}`)})(n,e)}function Y0(n,e){const t={};return Fw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hi(n,((i,o)=>{const l=bl(o,e.dc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function J0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ze||n instanceof mr||n instanceof Rn||n instanceof at||n instanceof lh||n instanceof Bn||I0(n))}function Op(n,e,t){if(!J0(t)||!Lw(t)){const i=Kc(t);throw i==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+i)}}function Vs(n,e,t){if((e=rt(e))instanceof Np)return e._internalPath;if(typeof e=="string")return X0(n,e);throw Lc("Field path arguments must be of type string or ",n,!1,void 0,t)}const _x=new RegExp("[~\\*/\\[\\]]");function X0(n,e,t){if(e.search(_x)>=0)throw Lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Np(...e.split("."))._internalPath}catch{throw Lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Lc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ee(z.INVALID_ARGUMENT,f+n+g)}function Z0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{convertValue(e,t="none"){switch(ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Hi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[kc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>dt(h.doubleValue)));return new Bn(t)}convertGeoPoint(e){return new mr(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Yc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ml(e));default:return null}}convertTimestamp(e){const t=Fi(e);return new Ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);qe(T0(i),9688,{name:e});const o=new gl(i.get(1),i.get(3)),l=new ce(i.popFirst(5));return o.isEqual(t)||Kr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class Vp extends vx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}function z_(n){return new Dp("increment",n)}const $_="@firebase/firestore",q_="4.13.0";/**
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
 */function H_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Vs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wx extends eE{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lp{}class Mp extends Lp{}function zt(n,e,...t){let i=[];e instanceof Lp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof Fp)).length,f=l.filter((g=>g instanceof hh)).length;if(h>1||h>0&&f>0)throw new ee(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class hh extends Mp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new hh(e,t,i)}_apply(e){const t=this._parse(e);return rE(e._query,t),new Yr(e.firestore,e.converter,Af(e._query,t))}_parse(e){const t=uh(e.firestore);return(function(l,h,f,g,y,w,A){let N;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){K_(A,w);const Q=[];for(const Y of A)Q.push(W_(g,l,Y));N={arrayValue:{values:Q}}}else N=W_(g,l,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||K_(A,w),N=yx(f,h,A,w==="in"||w==="not-in");return _t.create(y,w,N)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ss(n,e,t){const i=e,o=Vs("where",n);return hh._create(o,i,t)}class Fp extends Lp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)rE(h,g),h=Af(h,g)})(e._query,t),new Yr(e.firestore,e.converter,Af(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Up extends Mp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Up(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _l(l,h)})(e._query,this._field,this._direction);return new Yr(e.firestore,e.converter,H1(e._query,t))}}function Di(n,e="asc"){const t=e,i=Vs("orderBy",n);return Up._create(i,t)}class jp extends Mp{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new jp(e,t,i)}_apply(e){return new Yr(e.firestore,e.converter,Pc(e._query,this._limit,this._limitType))}}function nE(n){return jp._create("limit",n,"F")}function W_(n,e,t){if(typeof(t=rt(t))=="string"){if(t==="")throw new ee(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zw(e)&&t.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!ce.isDocumentKey(i))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return s_(n,new ce(i))}if(t instanceof at)return s_(n,t._key);throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kc(t)}.`)}function K_(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rE(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function iE(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class tl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class As extends eE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Vs("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=As._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}As._jsonSchemaVersion="firestore/documentSnapshot/1.0",As._jsonSchema={type:vt("string",As._jsonSchemaVersion),bundleSource:vt("string","DocumentSnapshot"),bundleName:vt("string"),bundle:vt("string")};class mc extends As{data(e={}){return super.data(e)}}class Rs{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new tl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new mc(this._firestore,this._userDataWriter,i.key,i,new tl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new mc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new tl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new mc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new tl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:Ex(f.type),doc:g,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ex(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:n})}}/**
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
 */Rs._jsonSchemaVersion="firestore/querySnapshot/1.0",Rs._jsonSchema={type:vt("string",Rs._jsonSchemaVersion),bundleSource:vt("string","QuerySnapshot"),bundleName:vt("string"),bundle:vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(n){n=sn(n,at);const e=sn(n.firestore,Qr),t=ah(e);return ix(t,n._key).then((i=>oE(e,n,i)))}function Fr(n){n=sn(n,Yr);const e=sn(n.firestore,Qr),t=ah(e),i=new Vp(e);return tE(n._query),sx(t,n._query).then((o=>new Rs(e,i,n,o)))}function ll(n,e,t){n=sn(n,at);const i=sn(n.firestore,Qr),o=iE(n.converter,e,t),l=uh(i);return dh(i,[Q0(l,"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,kn.none())])}function Qa(n,e,t,...i){n=sn(n,at);const o=sn(n.firestore,Qr),l=uh(o);let h;return h=typeof(e=rt(e))=="string"||e instanceof Np?gx(l,"updateDoc",n._key,e,t,i):mx(l,"updateDoc",n._key,e),dh(o,[h.toMutation(n._key,kn.exists(!0))])}function tc(n){return dh(sn(n.firestore,Qr),[new cp(n._key,kn.none())])}function nc(n,e){const t=sn(n.firestore,Qr),i=kt(n),o=iE(n.converter,e),l=uh(n.firestore);return dh(t,[Q0(l,"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,kn.exists(!1))]).then((()=>i))}function ws(n,...e){var y,w,A;n=rt(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||H_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(H_(e[i])){const N=e[i];e[i]=(y=N.next)==null?void 0:y.bind(N),e[i+1]=(w=N.error)==null?void 0:w.bind(N),e[i+2]=(A=N.complete)==null?void 0:A.bind(N)}let l,h,f;if(n instanceof at)h=sn(n.firestore,Qr),f=Jc(n._key.path),l={next:N=>{e[i]&&e[i](oE(h,n,N))},error:e[i+1],complete:e[i+2]};else{const N=sn(n,Yr);h=sn(N.firestore,Qr),f=N._query;const B=new Vp(h);l={next:Q=>{e[i]&&e[i](new Rs(h,B,N,Q))},error:e[i+1],complete:e[i+2]},tE(n._query)}const g=ah(h);return rx(g,f,o,l)}function dh(n,e){const t=ah(n);return ox(t,e)}function oE(n,e,t){const i=t.docs.get(e._key),o=new Vp(n);return new As(n,o,e._key,i,new tl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){s1(Fs),zn(new Cn("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Qr(new l1(i.getProvider("auth-internal")),new h1(h,i.getProvider("app-check-internal")),C1(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),rn($_,q_,e),rn($_,q_,"esm2020")})();/**
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
 */const aE="firebasestorage.googleapis.com",Tx="storageBucket",Ix=120*1e3,Sx=600*1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yr||(yr={}));function lf(n){return"storage/"+n}function Ax(){const n="An unknown error occurred, please check the error payload for server response.";return new _r(yr.UNKNOWN,n)}function Rx(){return new _r(yr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kx(){return new _r(yr.CANCELED,"User canceled the upload/download.")}function Cx(n){return new _r(yr.INVALID_URL,"Invalid URL '"+n+"'.")}function Px(n){return new _r(yr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function G_(n){return new _r(yr.INVALID_ARGUMENT,n)}function lE(){return new _r(yr.APP_DELETED,"The Firebase app was deleted.")}function xx(n){return new _r(yr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class jn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=jn.makeFromUrl(e,t)}catch{return new jn(e,"")}if(i.path==="")return i;throw Px(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(fe){fe.path.charAt(fe.path.length-1)==="/"&&(fe.path_=fe.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function y(fe){fe.path_=decodeURIComponent(fe.path)}const w="v[A-Za-z0-9_]+",A=t.replace(/[.]/g,"\\."),N="(/([^?#]*).*)?$",B=new RegExp(`^https?://${A}/${w}/b/${o}/o${N}`,"i"),Q={bucket:1,path:3},Y=t===aE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,q="([^?#]*)",pe=new RegExp(`^https?://${Y}/${o}/${q}`,"i"),Se=[{regex:f,indices:g,postModify:l},{regex:B,indices:Q,postModify:y},{regex:pe,indices:{bucket:1,path:2},postModify:y}];for(let fe=0;fe<Se.length;fe++){const Ce=Se[fe],Re=Ce.regex.exec(e);if(Re){const b=Re[Ce.indices.bucket];let R=Re[Ce.indices.path];R||(R=""),i=new jn(b,R),Ce.postModify(i);break}}if(i==null)throw Cx(e);return i}}class Nx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function bx(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let y=!1;function w(...q){y||(y=!0,e.apply(null,q))}function A(q){o=setTimeout(()=>{o=null,n(B,g())},q)}function N(){l&&clearTimeout(l)}function B(q,...pe){if(y){N();return}if(q){N(),w.call(null,q,...pe);return}if(g()||h){N(),w.call(null,q,...pe);return}i<64&&(i*=2);let Se;f===1?(f=2,Se=0):Se=(i+Math.random())*1e3,A(Se)}let Q=!1;function Y(q){Q||(Q=!0,N(),!y&&(o!==null?(q||(f=2),clearTimeout(o),A(0)):q||(f=1)))}return A(0),l=setTimeout(()=>{h=!0,Y(!0)},t),Y}function Dx(n){n(!1)}/**
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
 */function Ox(n){return n!==void 0}function Q_(n,e,t,i){if(i<e)throw G_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw G_(`Invalid value for '${n}'. Expected ${t} or less.`)}function Vx(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Mc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Mc||(Mc={}));/**
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
 */function Lx(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class Mx{constructor(e,t,i,o,l,h,f,g,y,w,A,N=!0,B=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=y,this.progressCallback_=w,this.connectionFactory_=A,this.retry=N,this.isUsingEmulator=B,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((Q,Y)=>{this.resolve_=Q,this.reject_=Y,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new rc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Mc.NO_ERROR,g=l.getStatus();if(!f||Lx(g,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===Mc.ABORT;i(!1,new rc(!1,null,w));return}const y=this.successCodes_.indexOf(g)!==-1;i(!0,new rc(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());Ox(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=Ax();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?lE():kx();h(g)}else{const g=Rx();h(g)}};this.canceled_?t(!1,new rc(!1,null,!0)):this.backoffId_=bx(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Dx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Fx(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Ux(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jx(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Bx(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function zx(n,e,t,i,o,l,h=!0,f=!1){const g=Vx(n.urlParams),y=n.url+g,w=Object.assign({},n.headers);return jx(w,e),Fx(w,t),Ux(w,l),Bx(w,i),new Mx(y,n.method,w,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,f)}/**
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
 */function $x(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function qx(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Fc{constructor(e,t){this._service=e,t instanceof jn?this._location=t:this._location=jn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Fc(e,t)}get root(){const e=new jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qx(this._location.path)}get storage(){return this._service}get parent(){const e=$x(this._location.path);if(e===null)return null;const t=new jn(this._location.bucket,e);return new Fc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw xx(e)}}function Y_(n,e){const t=e==null?void 0:e[Tx];return t==null?null:jn.makeFromBucketSpec(t,n)}function Hx(n,e,t,i={}){n.host=`${e}:${t}`;const o=Wo(e);o&&Ff(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:mv(l,n.app.options.projectId))}class Wx{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=aE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ix,this._maxUploadRetryTime=Sx,this._requests=new Set,o!=null?this._bucket=jn.makeFromBucketSpec(o,this._host):this._bucket=Y_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jn.makeFromBucketSpec(this._url,e):this._bucket=Y_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Q_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Q_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fc(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Nx(lE());{const h=zx(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const J_="@firebase/storage",X_="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="storage";function Kx(n=Bc(),e){n=rt(n);const i=Ms(n,uE).getImmediate({identifier:e}),o=dv("storage");return o&&Gx(i,...o),i}function Gx(n,e,t,i={}){Hx(n,e,t,i)}function Qx(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Wx(t,i,o,e,Fs)}function Yx(){zn(new Cn(uE,Qx,"PUBLIC").setMultipleInstances(!0)),rn(J_,X_,""),rn(J_,X_,"esm2020")}Yx();const Vf={apiKey:"AIzaSyDuxT03D9vxSWE5Fw29sdsnCohTtGj32fo",authDomain:"ipreu-95300.firebaseapp.com",projectId:"ipreu-95300",storageBucket:"ipreu-95300.firebasestorage.app",messagingSenderId:"921313347665",appId:"1:921313347665:web:128cdbb3e428b113a71070"},Jx={cloudName:"dznm7b5jm",uploadPreset:"ipreu_unsigned"};(!Vf.apiKey||Vf.apiKey.includes("mock"))&&console.error("CRITICAL ERROR: Firebase configuration is missing or invalid. Check your .env file.");const fh=wv(Vf),Ur=PR(fh),Ne=cx(fh);Kx(fh);const ic=typeof window<"u"?n1(fh):null,Bp="uc_token",zp="uc_user";function Z_(n,e){try{localStorage.setItem(Bp,n),localStorage.setItem(zp,JSON.stringify(e))}catch(t){console.error("Failed to save session",t)}}function Xx(){try{const n=localStorage.getItem(Bp),e=localStorage.getItem(zp);return{token:n,user:e?JSON.parse(e):null}}catch{return{token:null,user:null}}}function ev(){try{localStorage.removeItem(Bp),localStorage.removeItem(zp),ac(Ur).catch(console.error)}catch(n){console.error("Failed to clear session",n)}}const ht={login:async(n,e)=>{if(!e)throw new Error("Password required");const t=await mA(Ur,n,e),i=await sE(kt(Ne,"users",t.user.uid));if(!i.exists())throw await ac(Ur),new Error("User record not found in database.");const o={id:i.id,...i.data()};if(o.role==="PENDING")throw await ac(Ur),new Error("Your application is still pending approval. Please check back later.");return{token:await t.user.getIdToken(),user:o}},register:async n=>{if(!n.password)throw new Error("Password required");if(!n.email)throw new Error("Email required");const e=n.email.toLowerCase().trim(),t=await pA(Ur,e,n.password),{password:i,...o}=n;return o.email=e,await ll(kt(Ne,"users",t.user.uid),{...o,role:"PENDING",createdAt:new Date().toISOString()}),await ac(Ur),!0},getAnnouncements:async()=>{const n=zt(Tt(Ne,"announcements"),Di("createdAt","desc"),nE(30));return(await Fr(n)).docs.map(t=>({id:t.id,...t.data()}))},createAnnouncement:async n=>{const e=new Date().toISOString(),t=await nc(Tt(Ne,"announcements"),{...n,createdAt:e});return await ll(kt(Ne,"stats","totals"),{announcementCount:z_(1)},{merge:!0}),{id:t.id,...n,createdAt:e}},deleteAnnouncement:async n=>(await tc(kt(Ne,"announcements",n)),!0),updateAnnouncement:async(n,e)=>(await Qa(kt(Ne,"announcements",n),e),!0),getPendingUsers:async()=>{const n=zt(Tt(Ne,"users"),Ss("role","==","PENDING"));return(await Fr(n)).docs.map(t=>({id:t.id,...t.data()}))},getApprovedUsers:async()=>{const n=zt(Tt(Ne,"users"),Ss("role","==","MEMBER"));return(await Fr(n)).docs.map(t=>({id:t.id,...t.data()}))},rejectUser:async n=>(await tc(kt(Ne,"users",n)),!0),approveUser:async(n,e)=>{const t=kt(Ne,"users",n);return await Qa(t,{role:"MEMBER",memberNo:e}),await ll(kt(Ne,"stats","totals"),{memberCount:z_(1)},{merge:!0}),!0},getSurveys:async()=>{const n=zt(Tt(Ne,"surveys"));return(await Fr(n)).docs.map(t=>({id:t.id,...t.data()}))},createSurvey:async n=>({id:(await nc(Tt(Ne,"surveys"),n)).id,...n}),deleteSurvey:async n=>(await tc(kt(Ne,"surveys",n)),!0),updateSurvey:async(n,e)=>(await Qa(kt(Ne,"surveys",n),e),!0),getCalendarEvents:async()=>{const n=zt(Tt(Ne,"calendar"),Di("date","asc"));return(await Fr(n)).docs.map(t=>({id:t.id,...t.data()}))},createCalendarEvent:async n=>({id:(await nc(Tt(Ne,"calendar"),n)).id,...n}),deleteCalendarEvent:async n=>(await tc(kt(Ne,"calendar",n)),!0),getGrievances:async n=>{let e;const t=Tt(Ne,"grievances");return n?e=zt(t,Ss("userId","==",n),Di("createdAt","desc")):e=zt(t,Di("createdAt","desc")),(await Fr(e)).docs.map(o=>({id:o.id,...o.data()}))},createGrievance:async n=>({id:(await nc(Tt(Ne,"grievances"),n)).id,...n}),updateGrievance:async(n,e)=>(await Qa(kt(Ne,"grievances",n),e),!0),saveFcmToken:async(n,e)=>{const t=kt(Ne,"users",n);await Qa(t,{fcmToken:e})},compressImage:n=>new Promise(e=>{const t=setTimeout(()=>{console.warn("Photo optimization timed out, using original file."),e(n)},5e3),i=new Image;i.src=URL.createObjectURL(n),i.onload=()=>{const o=document.createElement("canvas"),l=400,h=l/i.width;h<1?(o.width=l,o.height=i.height*h):(o.width=i.width,o.height=i.height);const f=o.getContext("2d");f==null||f.drawImage(i,0,0,o.width,o.height),o.toBlob(g=>{clearTimeout(t),URL.revokeObjectURL(i.src),e(g||n)},"image/jpeg",.6)},i.onerror=()=>{clearTimeout(t),URL.revokeObjectURL(i.src),e(n)}}),uploadToCloudinary:async n=>{var f;let e=n;if(n.size>200*1024)try{e=await ht.compressImage(n)}catch(g){console.error("Compression failed:",g)}const{cloudName:t,uploadPreset:i}=Jx,o=new FormData;o.append("file",e),o.append("upload_preset",i);const l=new AbortController,h=setTimeout(()=>l.abort(),6e4);try{const g=await fetch(`https://api.cloudinary.com/v1_1/${t}/image/upload`,{method:"POST",body:o,signal:l.signal});if(!g.ok){let w="Failed to upload to Cloudinary";try{w=((f=(await g.json()).error)==null?void 0:f.message)||w}catch{}throw new Error(w)}return(await g.json()).secure_url}catch(g){throw g.name==="AbortError"?new Error("Connection timed out. Please try again with a better signal."):g}finally{clearTimeout(h)}}},tv=Ke.lazy(()=>Mf(()=>import("./Auth-plbXhwwK.js"),[])),Zx=Ke.lazy(()=>Mf(()=>import("./AdminDashboard-Bj4cUvdb.js"),__vite__mapDeps([0,1]))),eN=Ke.lazy(()=>Mf(()=>import("./MemberDashboard-C-20tPBp.js"),__vite__mapDeps([2,1]))),cE=Ke.createContext(null),hE=()=>{const n=Ke.useContext(cE);if(!n)throw new Error("useAppContext must be used within AppProvider");return n};function tN(){const[n,e]=Ke.useState(!0),[t,i]=Ke.useState(!1),[o,l]=Ke.useState(()=>localStorage.getItem("theme")==="dark"),[h,f]=Ke.useState(null),[g,y]=Ke.useState([]),[w,A]=Ke.useState([]),[N,B]=Ke.useState([]),[Q,Y]=Ke.useState([]),[q,pe]=Ke.useState([]),[Ee,Se]=Ke.useState({memberCount:0,announcementCount:0}),[fe,Ce]=Ke.useState(()=>new URLSearchParams(window.location.search).get("tab")||"dashboard"),[Re,b]=Ke.useState(null);Ke.useEffect(()=>{const I=new URL(window.location.href);fe&&fe!=="dashboard"?I.searchParams.set("tab",fe):I.searchParams.delete("tab"),window.history.replaceState({},"",I.toString())},[fe]),rv.useLayoutEffect(()=>{document.documentElement.classList.toggle("dark",o),localStorage.setItem("theme",o?"dark":"light")},[o]),Ke.useEffect(()=>{const I={dashboard:"My Dashboard | IPREU",calendar:"Union Calendar | IPREU",grievances:"Secure Grievances | IPREU",overview:"Admin Overview | IPREU",members:"Manage Users | IPREU",announcements:"Broadcast | IPREU"};document.title=I[fe]||"IPREU Union Connect"},[fe]),Ke.useEffect(()=>{const I=_A(Ur,async T=>{T?(!h||h.id!==T.uid)&&console.log("Syncing currentUser with Auth UID:",T.uid):h&&(console.warn("Auth lost, clearing UI session"),f(null),ev())});return(async()=>{try{const T=Xx();T&&T.user&&(f(T.user),R(T.user.id))}catch(T){console.error("Session init failed:",T)}finally{e(!1)}})(),()=>I()},[]),Ke.useEffect(()=>{const I=zt(Tt(Ne,"announcements"),Di("createdAt","desc"),nE(30)),D=ws(I,Ue=>{A(Ue.docs.map(Ae=>({id:Ae.id,...Ae.data()})))},Ue=>console.error("Public Announcements Sync Error:",Ue)),T=zt(Tt(Ne,"calendar"),Di("date","asc")),ue=ws(T,Ue=>{B(Ue.docs.map(Ae=>({id:Ae.id,...Ae.data()})))},Ue=>console.error("Public Calendar Sync Error:",Ue)),ze=ws(kt(Ne,"stats","counters"),Ue=>{Ue.exists()&&Se(Ue.data())},Ue=>console.error("Public Stats Sync Error:",Ue));return()=>{D(),ue(),ze()}},[]),Ke.useEffect(()=>{const I=ws(kt(Ne,"public_birthdays","today"),D=>{if(D.exists()){const T=D.data();T.date===new Date().toISOString().split("T")[0]?pe(T.members||[]):pe([])}},D=>console.error("Birthday Sync Error:",D));return()=>I()},[]),Ke.useEffect(()=>{if(!h)return;(async()=>{const Ae=new Date().toISOString().split("T")[0],X=kt(Ne,"public_birthdays","today"),oe=await sE(X);if(!oe.exists()||oe.data().date!==Ae){console.log("Senior Expert Sync: Updating public birthday showcase...");const P=zt(Tt(Ne,"users"),Ss("role","==","MEMBER"),Ss("isApproved","==",!0)),H=await Fr(P),ae=zt(Tt(Ne,"users"),Ss("isApproved","==",!0)),ke=await Fr(ae),ve=zt(Tt(Ne,"announcements")),je=await Fr(ve),Pe=new Date,Me=H.docs.map(_e=>({id:_e.id,..._e.data()})).filter(_e=>{if(!_e.dob)return!1;const ft=new Date(_e.dob);return ft.getDate()===Pe.getDate()&&ft.getMonth()===Pe.getMonth()}).map(_e=>({id:_e.id,employeeName:_e.employeeName,photoUrl:_e.photoUrl,postingLocation:_e.postingLocation,dob:_e.dob}));await ll(X,{date:Ae,members:Me,lastUpdated:new Date().toISOString()}),await ll(kt(Ne,"stats","counters"),{memberCount:ke.size,announcementCount:je.size,lastUpdated:new Date().toISOString()},{merge:!0})}})();const D=zt(Tt(Ne,"surveys")),T=ws(D,Ae=>{y(Ae.docs.map(X=>({id:X.id,...X.data()})))},Ae=>console.error("Surveys Sync Error:",Ae));let ue;h.role==="ADMIN"?ue=zt(Tt(Ne,"grievances"),Di("createdAt","desc")):ue=zt(Tt(Ne,"grievances"),Ss("userId","==",h.id),Di("createdAt","desc"));const ze=ws(ue,Ae=>{Y(Ae.docs.map(X=>({id:X.id,...X.data()})))},Ae=>console.error("Grievances Sync Error:",Ae));let Ue=()=>{};if(h.role==="ADMIN"){const Ae=zt(Tt(Ne,"users"));Ue=ws(Ae,X=>{pe(X.docs.map(oe=>({id:oe.id,...oe.data()})))})}return()=>{T(),ze(),Ue()}},[h==null?void 0:h.id]);const R=async I=>{if(ic)try{if(await Notification.requestPermission()==="granted"){const T=await r1(ic,{vapidKey:"BKZqsvNJwZbljTyY0T6ho_GruW2LiC8WBEre2uMqg6A-67sBHoF2RIg6VCX2BLMs0LVolggQTCap4zwDgedyKjI"});T&&await ht.saveFcmToken(I,T)}}catch(D){console.error("FCM Registration failed:",D)}};Ke.useEffect(()=>{if(!ic)return;const I=i1(ic,D=>{var T,ue;alert(`Notification: ${(T=D.notification)==null?void 0:T.title}
${(ue=D.notification)==null?void 0:ue.body}`)});return()=>I()},[]);const C=Ke.useMemo(()=>({currentUser:h,isDarkMode:o,toggleDarkMode:()=>l(I=>!I),users:q,surveys:g,announcements:w,calendarEvents:N,grievances:Q,stats:Ee,fetchAnnouncements:async()=>{const I=await ht.getAnnouncements();A(I)},memberLogin:async(I,D)=>{var T;try{const ue=await ht.login(I,D);return ue.token&&ue.user&&ue.user.role==="MEMBER"?(f(ue.user),Z_(ue.token,ue.user),{success:!0}):{success:!1,error:"Access denied. Only members can login here."}}catch(ue){return(T=ue.message)!=null&&T.includes("pending approval")?{success:!1,pending:!0}:{success:!1,error:ue.message||"Login failed"}}},adminLogin:async(I,D)=>{try{const T=await ht.login(I,D);if(T.token&&T.user&&T.user.role==="ADMIN"){f(T.user),Z_(T.token,T.user);const[ue,ze]=await Promise.all([ht.getPendingUsers(),ht.getApprovedUsers()]);return pe([...ue,...ze]),{success:!0}}return{success:!1,error:"Access denied. Only admins can login here."}}catch(T){return{success:!1,error:T.message||"Admin login failed"}}},logout:()=>{f(null),ev()},register:async(I,D,T)=>{let ue="";try{T==null||T("UPLOADING"),ue=await ht.uploadToCloudinary(D)}catch(ze){throw console.error("Photo upload failed:",ze),new Error(ze.message||"Failed to upload profile photo to Cloudinary. Please check your admin configuration.")}return T==null||T("REGISTERING"),await ht.register({...I,photoUrl:ue}),!0},rejectRegistration:async I=>{await ht.rejectUser(I)},approveRegistration:async I=>{const ue=`IPREU-${(q.filter(ze=>ze.role===nl.MEMBER).length+1).toString().padStart(4,"0")}`;await ht.approveUser(I,ue)},createSurvey:async I=>{await ht.createSurvey({...I,votes:{}})},deleteSurvey:async I=>{await ht.deleteSurvey(I)},submitVote:async(I,D)=>{if(!h)return;const T=g.find(ze=>ze.id===I);if(!T)return;const ue={...T.votes,[h.id]:D};await ht.updateSurvey(I,{votes:ue})},createAnnouncement:async(I,D,T)=>{await ht.createAnnouncement({title:I,content:D,attachment:T??void 0})},updateAnnouncement:async(I,D,T)=>{await ht.updateAnnouncement(I,{title:D,content:T})},deleteAnnouncement:async I=>{await ht.deleteAnnouncement(I)},createCalendarEvent:async I=>{await ht.createCalendarEvent({...I,createdAt:new Date().toISOString()})},deleteCalendarEvent:async I=>{await ht.deleteCalendarEvent(I)},submitGrievance:async(I,D,T)=>{if(!Ur.currentUser)throw new Error("Session expired. Please log in again to register a grievance.");const ue={userId:Ur.currentUser.uid,userName:(h==null?void 0:h.employeeName)||"Anonymous",employeeNumber:(h==null?void 0:h.employeeNumber)||"N/A",postingLocation:(h==null?void 0:h.postingLocation)||"N/A",pocName:(h==null?void 0:h.pocName)||"N/A",shift:(h==null?void 0:h.shift)||"N/A",subject:I,description:D,category:T,status:"NEW",createdAt:new Date().toISOString()};await ht.createGrievance(ue)},respondToGrievance:async(I,D)=>{const T={response:D,respondedAt:new Date().toISOString(),status:"RESOLVED"};await ht.updateGrievance(I,T)}}),[h,q,g,w,N,Q,o]),V=()=>{if(!h)return t?k.jsx(tv,{onBack:()=>i(!1)}):k.jsx(LT,{onLoginClick:I=>{I&&b(I),i(!0)}});switch(Re&&(Ce(Re),b(null)),h.role){case nl.ADMIN:return k.jsx(Zx,{activeTab:fe,setActiveTab:Ce});case nl.MEMBER:return k.jsx(eN,{activeTab:fe,setActiveTab:Ce});default:return k.jsx(tv,{onBack:()=>i(!1)})}};return n?k.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#fcfaf7] transition-colors duration-300",children:k.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.3)]"})}):k.jsx(cE.Provider,{value:C,children:k.jsxs("div",{className:"min-h-screen font-sans bg-[#fcfaf7] transition-colors duration-300",children:[k.jsx(NT,{onLoginClick:()=>i(!0)}),k.jsx("main",{className:"container mx-auto p-4 md:p-8 pb-32",children:k.jsx(Ke.Suspense,{fallback:k.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:k.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"})}),children:V()})}),h&&k.jsxs(k.Fragment,{children:[k.jsx(MT,{activeTab:fe,setActiveTab:Ce,role:h.role}),k.jsx("footer",{className:"w-full py-12 bg-white/5 border-t border-orange-100 backdrop-blur-sm mt-auto mb-20 lg:mb-0",children:k.jsx("div",{className:"container mx-auto px-4 text-center",children:k.jsx(av,{})})})]})]})})}const dE=document.getElementById("root");if(!dE)throw new Error("Could not find root element to mount to");const nN=CT.createRoot(dE);nN.render(k.jsx(rv.StrictMode,{children:k.jsx(tN,{})}));export{bT as C,rN as I,sv as M,DT as P,rv as R,nl as U,k as j,Ke as r,hE as u};
