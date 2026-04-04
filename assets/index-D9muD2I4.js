const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboard-1iqexPrR.js","assets/CheckCircleIcon-DJ7wNMzZ.js","assets/MemberDashboard-U5DjWKWG.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function j_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Pd={exports:{}},Ba={},Cd={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function GE(){if($g)return Se;$g=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),x=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function G(D,q,ae){this.props=D,this.context=q,this.refs=J,this.updater=ae||z}G.prototype.isReactComponent={},G.prototype.setState=function(D,q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,q,"setState")},G.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ge(){}ge.prototype=G.prototype;function me(D,q,ae){this.props=D,this.context=q,this.refs=J,this.updater=ae||z}var Ee=me.prototype=new ge;Ee.constructor=me,Y(Ee,G.prototype),Ee.isPureReactComponent=!0;var Me=Array.isArray,Ue=Object.prototype.hasOwnProperty,Ce={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function T(D,q,ae){var Ie,we={},je=null,xe=null;if(q!=null)for(Ie in q.ref!==void 0&&(xe=q.ref),q.key!==void 0&&(je=""+q.key),q)Ue.call(q,Ie)&&!A.hasOwnProperty(Ie)&&(we[Ie]=q[Ie]);var Le=arguments.length-2;if(Le===1)we.children=ae;else if(1<Le){for(var De=Array(Le),kt=0;kt<Le;kt++)De[kt]=arguments[kt+2];we.children=De}if(D&&D.defaultProps)for(Ie in Le=D.defaultProps,Le)we[Ie]===void 0&&(we[Ie]=Le[Ie]);return{$$typeof:r,type:D,key:je,ref:xe,props:we,_owner:Ce.current}}function I(D,q){return{$$typeof:r,type:D.type,key:q,ref:D.ref,props:D.props,_owner:D._owner}}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function P(D){var q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ae){return q[ae]})}var O=/\/+/g;function R(D,q){return typeof D=="object"&&D!==null&&D.key!=null?P(""+D.key):q.toString(36)}function $e(D,q,ae,Ie,we){var je=typeof D;(je==="undefined"||je==="boolean")&&(D=null);var xe=!1;if(D===null)xe=!0;else switch(je){case"string":case"number":xe=!0;break;case"object":switch(D.$$typeof){case r:case e:xe=!0}}if(xe)return xe=D,we=we(xe),D=Ie===""?"."+R(xe,0):Ie,Me(we)?(ae="",D!=null&&(ae=D.replace(O,"$&/")+"/"),$e(we,q,ae,"",function(kt){return kt})):we!=null&&(C(we)&&(we=I(we,ae+(!we.key||xe&&xe.key===we.key?"":(""+we.key).replace(O,"$&/")+"/")+D)),q.push(we)),1;if(xe=0,Ie=Ie===""?".":Ie+":",Me(D))for(var Le=0;Le<D.length;Le++){je=D[Le];var De=Ie+R(je,Le);xe+=$e(je,q,ae,De,we)}else if(De=b(D),typeof De=="function")for(D=De.call(D),Le=0;!(je=D.next()).done;)je=je.value,De=Ie+R(je,Le++),xe+=$e(je,q,ae,De,we);else if(je==="object")throw q=String(D),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return xe}function ot(D,q,ae){if(D==null)return D;var Ie=[],we=0;return $e(D,Ie,"","",function(je){return q.call(ae,je,we++)}),Ie}function Ne(D){if(D._status===-1){var q=D._result;q=q(),q.then(function(ae){(D._status===0||D._status===-1)&&(D._status=1,D._result=ae)},function(ae){(D._status===0||D._status===-1)&&(D._status=2,D._result=ae)}),D._status===-1&&(D._status=0,D._result=q)}if(D._status===1)return D._result.default;throw D._result}var Te={current:null},Z={transition:null},ue={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ce};return Se.Children={map:ot,forEach:function(D,q,ae){ot(D,function(){q.apply(this,arguments)},ae)},count:function(D){var q=0;return ot(D,function(){q++}),q},toArray:function(D){return ot(D,function(q){return q})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Se.Component=G,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=me,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Se.cloneElement=function(D,q,ae){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ie=Y({},D.props),we=D.key,je=D.ref,xe=D._owner;if(q!=null){if(q.ref!==void 0&&(je=q.ref,xe=Ce.current),q.key!==void 0&&(we=""+q.key),D.type&&D.type.defaultProps)var Le=D.type.defaultProps;for(De in q)Ue.call(q,De)&&!A.hasOwnProperty(De)&&(Ie[De]=q[De]===void 0&&Le!==void 0?Le[De]:q[De])}var De=arguments.length-2;if(De===1)Ie.children=ae;else if(1<De){Le=Array(De);for(var kt=0;kt<De;kt++)Le[kt]=arguments[kt+2];Ie.children=Le}return{$$typeof:r,type:D.type,key:we,ref:je,props:Ie,_owner:xe}},Se.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Se.createElement=T,Se.createFactory=function(D){var q=T.bind(null,D);return q.type=D,q},Se.createRef=function(){return{current:null}},Se.forwardRef=function(D){return{$$typeof:m,render:D}},Se.isValidElement=C,Se.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:Ne}},Se.memo=function(D,q){return{$$typeof:_,type:D,compare:q===void 0?null:q}},Se.startTransition=function(D){var q=Z.transition;Z.transition={};try{D()}finally{Z.transition=q}},Se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Se.useCallback=function(D,q){return Te.current.useCallback(D,q)},Se.useContext=function(D){return Te.current.useContext(D)},Se.useDebugValue=function(){},Se.useDeferredValue=function(D){return Te.current.useDeferredValue(D)},Se.useEffect=function(D,q){return Te.current.useEffect(D,q)},Se.useId=function(){return Te.current.useId()},Se.useImperativeHandle=function(D,q,ae){return Te.current.useImperativeHandle(D,q,ae)},Se.useInsertionEffect=function(D,q){return Te.current.useInsertionEffect(D,q)},Se.useLayoutEffect=function(D,q){return Te.current.useLayoutEffect(D,q)},Se.useMemo=function(D,q){return Te.current.useMemo(D,q)},Se.useReducer=function(D,q,ae){return Te.current.useReducer(D,q,ae)},Se.useRef=function(D){return Te.current.useRef(D)},Se.useState=function(D){return Te.current.useState(D)},Se.useSyncExternalStore=function(D,q,ae){return Te.current.useSyncExternalStore(D,q,ae)},Se.useTransition=function(){return Te.current.useTransition()},Se.version="18.2.0",Se}var qg;function kf(){return qg||(qg=1,Cd.exports=GE()),Cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function QE(){if(Hg)return Ba;Hg=1;var r=kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var E,x={},b=null,z=null;_!==void 0&&(b=""+_),g.key!==void 0&&(b=""+g.key),g.ref!==void 0&&(z=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(x[E]=g[E]);if(m&&m.defaultProps)for(E in g=m.defaultProps,g)x[E]===void 0&&(x[E]=g[E]);return{$$typeof:e,type:m,key:b,ref:z,props:x,_owner:o.current}}return Ba.Fragment=t,Ba.jsx=h,Ba.jsxs=h,Ba}var Wg;function YE(){return Wg||(Wg=1,Pd.exports=QE()),Pd.exports}var k=YE(),it=kf();const z_=j_(it);var $u={},Nd={exports:{}},Xt={},Dd={exports:{}},bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function JE(){return Kg||(Kg=1,(function(r){function e(Z,ue){var D=Z.length;Z.push(ue);e:for(;0<D;){var q=D-1>>>1,ae=Z[q];if(0<o(ae,ue))Z[q]=ue,Z[D]=ae,D=q;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ue=Z[0],D=Z.pop();if(D!==ue){Z[0]=D;e:for(var q=0,ae=Z.length,Ie=ae>>>1;q<Ie;){var we=2*(q+1)-1,je=Z[we],xe=we+1,Le=Z[xe];if(0>o(je,D))xe<ae&&0>o(Le,je)?(Z[q]=Le,Z[xe]=D,q=xe):(Z[q]=je,Z[we]=D,q=we);else if(xe<ae&&0>o(Le,D))Z[q]=Le,Z[xe]=D,q=xe;else break e}}return ue}function o(Z,ue){var D=Z.sortIndex-ue.sortIndex;return D!==0?D:Z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],E=1,x=null,b=3,z=!1,Y=!1,J=!1,G=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ee(Z){for(var ue=t(_);ue!==null;){if(ue.callback===null)s(_);else if(ue.startTime<=Z)s(_),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(_)}}function Me(Z){if(J=!1,Ee(Z),!Y)if(t(g)!==null)Y=!0,Ne(Ue);else{var ue=t(_);ue!==null&&Te(Me,ue.startTime-Z)}}function Ue(Z,ue){Y=!1,J&&(J=!1,ge(T),T=-1),z=!0;var D=b;try{for(Ee(ue),x=t(g);x!==null&&(!(x.expirationTime>ue)||Z&&!P());){var q=x.callback;if(typeof q=="function"){x.callback=null,b=x.priorityLevel;var ae=q(x.expirationTime<=ue);ue=r.unstable_now(),typeof ae=="function"?x.callback=ae:x===t(g)&&s(g),Ee(ue)}else s(g);x=t(g)}if(x!==null)var Ie=!0;else{var we=t(_);we!==null&&Te(Me,we.startTime-ue),Ie=!1}return Ie}finally{x=null,b=D,z=!1}}var Ce=!1,A=null,T=-1,I=5,C=-1;function P(){return!(r.unstable_now()-C<I)}function O(){if(A!==null){var Z=r.unstable_now();C=Z;var ue=!0;try{ue=A(!0,Z)}finally{ue?R():(Ce=!1,A=null)}}else Ce=!1}var R;if(typeof me=="function")R=function(){me(O)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,ot=$e.port2;$e.port1.onmessage=O,R=function(){ot.postMessage(null)}}else R=function(){G(O,0)};function Ne(Z){A=Z,Ce||(Ce=!0,R())}function Te(Z,ue){T=G(function(){Z(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){Y||z||(Y=!0,Ne(Ue))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(b){case 1:case 2:case 3:var ue=3;break;default:ue=b}var D=b;b=ue;try{return Z()}finally{b=D}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ue){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var D=b;b=Z;try{return ue()}finally{b=D}},r.unstable_scheduleCallback=function(Z,ue,D){var q=r.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?q+D:q):D=q,Z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=D+ae,Z={id:E++,callback:ue,priorityLevel:Z,startTime:D,expirationTime:ae,sortIndex:-1},D>q?(Z.sortIndex=D,e(_,Z),t(g)===null&&Z===t(_)&&(J?(ge(T),T=-1):J=!0,Te(Me,D-q))):(Z.sortIndex=ae,e(g,Z),Y||z||(Y=!0,Ne(Ue))),Z},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(Z){var ue=b;return function(){var D=b;b=ue;try{return Z.apply(this,arguments)}finally{b=D}}}})(bd)),bd}var Gg;function XE(){return Gg||(Gg=1,Dd.exports=JE()),Dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function ZE(){if(Qg)return Xt;Qg=1;var r=kf(),e=XE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},x={};function b(n){return g.call(x,n)?!0:g.call(E,n)?!1:_.test(n)?x[n]=!0:(E[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function J(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){G[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];G[i]=new J(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){G[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){G[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){G[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){G[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){G[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){G[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){G[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function me(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ge,me);G[i]=new J(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ge,me);G[i]=new J(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ge,me);G[i]=new J(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){G[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),G.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){G[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ee(n,i,a,c){var d=G.hasOwnProperty(i)?G[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(Y(i,a,d,c)&&(a=null),c||d===null?b(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Me=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ue=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var D=Object.assign,q;function ae(n){if(q===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);q=i&&i[1]||""}return`
`+q+n}var Ie=!1;function we(n,i){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,S=f.length-1;1<=v&&0<=S&&d[v]!==f[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==f[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==f[S]){var N=`
`+d[v].replace(" at new "," at ");return n.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",n.displayName)),N}while(1<=v&&0<=S);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ae(n):""}function je(n){switch(n.tag){case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case A:return"Fragment";case Ce:return"Portal";case I:return"Profiler";case T:return"StrictMode";case R:return"Suspense";case $e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ot:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case Ne:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function Le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function kt(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function sh(n){var i=kt(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function bs(n){n._valueTracker||(n._valueTracker=sh(n))}function Go(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=kt(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Wr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Vs(n,i){var a=i.checked;return D({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function xl(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=De(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Os(n,i){i=i.checked,i!=null&&Ee(n,"checked",i,!1)}function Bi(n,i){Os(n,i);var a=De(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?dt(n,i.type,a):i.hasOwnProperty("defaultValue")&&dt(n,i.type,De(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Qo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function dt(n,i,a){(i!=="number"||Wr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var at=Array.isArray;function Rn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+De(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Yo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return D({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Jo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(at(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:De(a)}}function Pl(n,i){var a=De(i.value),c=De(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Kr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Xo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ms(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Xo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Gr,Cl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Gr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function $i(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nl=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(n){Nl.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Qr[i]=Qr[n]})});function Yr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Qr.hasOwnProperty(n)&&Qr[n]?(""+i).trim():i+"px"}function Ls(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Yr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Zo=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xn(n,i){if(i){if(Zo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Fs(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jr=null;function Us(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gr=null,yr=null,nt=null;function ea(n){if(n=Ra(n)){if(typeof gr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=iu(i),gr(n.stateNode,n.type,i))}}function Xr(n){yr?nt?nt.push(n):nt=[n]:yr=n}function Zr(){if(yr){var n=yr,i=nt;if(nt=yr=null,ea(n),i)for(n=0;n<i.length;n++)ea(i[n])}}function Dl(n,i){return n(i)}function bl(){}var $n=!1;function Vl(n,i,a){if($n)return n(i,a);$n=!0;try{return Dl(n,i,a)}finally{$n=!1,(yr!==null||nt!==null)&&(bl(),Zr())}}function qi(n,i){var a=n.stateNode;if(a===null)return null;var c=iu(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ei=!1;if(m)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){ei=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{ei=!1}function Ol(n,i,a,c,d,f,v,S,N){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(W){this.onError(W)}}var _r=!1,qn=null,js=!1,pn=null,Ml={onError:function(n){_r=!0,qn=n}};function Ll(n,i,a,c,d,f,v,S,N){_r=!1,qn=null,Ol.apply(Ml,arguments)}function ta(n,i,a,c,d,f,v,S,N){if(Ll.apply(this,arguments),_r){if(_r){var U=qn;_r=!1,qn=null}else throw Error(t(198));js||(js=!0,pn=U)}}function Pn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function na(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Fl(n){if(Pn(n)!==n)throw Error(t(188))}function Ul(n){var i=n.alternate;if(!i){if(i=Pn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return Fl(d),n;if(f===c)return Fl(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=f;break}if(S===c){v=!0,c=d,a=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===a){v=!0,a=f,c=d;break}if(S===c){v=!0,c=f,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function jl(n){return n=Ul(n),n!==null?Hi(n):null}function Hi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Hi(n);if(i!==null)return i;n=n.sibling}return null}var ra=e.unstable_scheduleCallback,zs=e.unstable_cancelCallback,Wi=e.unstable_shouldYield,vr=e.unstable_requestPaint,Ge=e.unstable_now,oh=e.unstable_getCurrentPriorityLevel,Bs=e.unstable_ImmediatePriority,ia=e.unstable_UserBlockingPriority,Ki=e.unstable_NormalPriority,sa=e.unstable_LowPriority,$s=e.unstable_IdlePriority,Gi=null,nn=null;function zl(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Gi,n,void 0,(n.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Qi,Hn=Math.log,mn=Math.LN2;function Qi(n){return n>>>=0,n===0?32:31-(Hn(n)/mn|0)|0}var Wn=64,ni=4194304;function Fe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Fe(S):(f&=v,f!==0&&(c=Fe(f)))}else v=a&~d,v!==0?c=Fe(v):f!==0&&(c=Fe(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-rn(i),d=1<<a,c|=n[a],i&=~d;return c}function Yi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ji(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-rn(f),S=1<<v,N=d[v];N===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Yi(S,i)):N<=i&&(n.expiredLanes|=S),f&=~S}}function oa(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function aa(){var n=Wn;return Wn<<=1,(Wn&4194240)===0&&(Wn=64),n}function la(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Xi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-rn(i),n[i]=a}function ah(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-rn(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function ua(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-rn(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pe=0;function Kn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ca,qs,ha,da,fa,Gn=!1,Hs=[],Qn=null,Yn=null,Rt=null,Zi=new Map,Er=new Map,sn=[],Bl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ri(n,i){switch(n){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Zi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(i.pointerId)}}function Cn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=Ra(i),i!==null&&qs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function $l(n,i,a,c,d){switch(i){case"focusin":return Qn=Cn(Qn,n,i,a,c,d),!0;case"dragenter":return Yn=Cn(Yn,n,i,a,c,d),!0;case"mouseover":return Rt=Cn(Rt,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return Zi.set(f,Cn(Zi.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,Er.set(f,Cn(Er.get(f)||null,n,i,a,c,d)),!0}return!1}function Ws(n){var i=rs(n.target);if(i!==null){var a=Pn(i);if(a!==null){if(i=a.tag,i===13){if(i=na(a),i!==null){n.blockedOn=i,fa(n.priority,function(){ha(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ks(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Jr=c,a.target.dispatchEvent(c),Jr=null}else return i=Ra(a),i!==null&&qs(i),n.blockedOn=a,!1;i.shift()}return!0}function ql(n,i,a){qe(n)&&a.delete(i)}function lh(){Gn=!1,Qn!==null&&qe(Qn)&&(Qn=null),Yn!==null&&qe(Yn)&&(Yn=null),Rt!==null&&qe(Rt)&&(Rt=null),Zi.forEach(ql),Er.forEach(ql)}function ii(n,i){n.blockedOn===i&&(n.blockedOn=null,Gn||(Gn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lh)))}function si(n){function i(d){return ii(d,n)}if(0<Hs.length){ii(Hs[0],n);for(var a=1;a<Hs.length;a++){var c=Hs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Qn!==null&&ii(Qn,n),Yn!==null&&ii(Yn,n),Rt!==null&&ii(Rt,n),Zi.forEach(i),Er.forEach(i),a=0;a<sn.length;a++)c=sn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<sn.length&&(a=sn[0],a.blockedOn===null);)Ws(a),a.blockedOn===null&&sn.shift()}var Tr=Me.ReactCurrentBatchConfig,Ir=!0;function Jn(n,i,a,c){var d=Pe,f=Tr.transition;Tr.transition=null;try{Pe=1,pa(n,i,a,c)}finally{Pe=d,Tr.transition=f}}function Hl(n,i,a,c){var d=Pe,f=Tr.transition;Tr.transition=null;try{Pe=4,pa(n,i,a,c)}finally{Pe=d,Tr.transition=f}}function pa(n,i,a,c){if(Ir){var d=Ks(n,i,a,c);if(d===null)vh(n,i,c,Xn,a),ri(n,c);else if($l(d,n,i,a,c))c.stopPropagation();else if(ri(n,c),i&4&&-1<Bl.indexOf(n)){for(;d!==null;){var f=Ra(d);if(f!==null&&ca(f),f=Ks(n,i,a,c),f===null&&vh(n,i,c,Xn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else vh(n,i,c,null,a)}}var Xn=null;function Ks(n,i,a,c){if(Xn=null,n=Us(c),n=rs(n),n!==null)if(i=Pn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=na(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Xn=n,null}function Gs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oh()){case Bs:return 1;case ia:return 4;case Ki:case sa:return 16;case $s:return 536870912;default:return 16}default:return 16}}var on=null,Qs=null,Sr=null;function Wl(){if(Sr)return Sr;var n,i=Qs,a=i.length,c,d="value"in on?on.value:on.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return Sr=d.slice(n,1<c?1-c:void 0)}function es(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Zn(){return!0}function ma(){return!1}function Vt(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zn:ma,this.isPropagationStopped=ma,this}return D(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),i}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=Vt(er),oi=D({},er,{view:0,detail:0}),Ys=Vt(oi),Js,Xs,an,ns=D({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_e,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==an&&(an&&n.type==="mousemove"?(Js=n.screenX-an.screenX,Xs=n.screenY-an.screenY):Xs=Js=0,an=n),Js)},movementY:function(n){return"movementY"in n?n.movementY:Xs}}),ga=Vt(ns),Kl=D({},ns,{dataTransfer:0}),Gl=Vt(Kl),Zs=D({},oi,{relatedTarget:0}),xt=Vt(Zs),Ql=D({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Yl=Vt(Ql),ai=D({},er,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Vt(ai),p=D({},er,{data:0}),y=Vt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j[n])?!!i[n]:!1}function _e(){return X}var lt=D({},oi,{key:function(n){if(n.key){var i=w[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=es(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_e,charCode:function(n){return n.type==="keypress"?es(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?es(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Be=Vt(lt),ft=D({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ln=Vt(ft),Ar=D({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_e}),tr=Vt(Ar),nr=D({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),eo=Vt(nr),ya=D({},ns,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=Vt(ya),$0=[9,13,27,32],uh=m&&"CompositionEvent"in window,_a=null;m&&"documentMode"in document&&(_a=document.documentMode);var q0=m&&"TextEvent"in window&&!_a,Vp=m&&(!uh||_a&&8<_a&&11>=_a),Op=" ",Mp=!1;function Lp(n,i){switch(n){case"keyup":return $0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var to=!1;function H0(n,i){switch(n){case"compositionend":return Fp(i);case"keypress":return i.which!==32?null:(Mp=!0,Op);case"textInput":return n=i.data,n===Op&&Mp?null:n;default:return null}}function W0(n,i){if(to)return n==="compositionend"||!uh&&Lp(n,i)?(n=Wl(),Sr=Qs=on=null,to=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vp&&i.locale!=="ko"?null:i.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!K0[n.type]:i==="textarea"}function jp(n,i,a,c){Xr(c),i=tu(i,"onChange"),0<i.length&&(a=new ts("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var va=null,wa=null;function G0(n){im(n,0)}function Jl(n){var i=oo(n);if(Go(i))return n}function Q0(n,i){if(n==="change")return i}var zp=!1;if(m){var ch;if(m){var hh="oninput"in document;if(!hh){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),hh=typeof Bp.oninput=="function"}ch=hh}else ch=!1;zp=ch&&(!document.documentMode||9<document.documentMode)}function $p(){va&&(va.detachEvent("onpropertychange",qp),wa=va=null)}function qp(n){if(n.propertyName==="value"&&Jl(wa)){var i=[];jp(i,wa,n,Us(n)),Vl(G0,i)}}function Y0(n,i,a){n==="focusin"?($p(),va=i,wa=a,va.attachEvent("onpropertychange",qp)):n==="focusout"&&$p()}function J0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Jl(wa)}function X0(n,i){if(n==="click")return Jl(i)}function Z0(n,i){if(n==="input"||n==="change")return Jl(i)}function eE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Nn=typeof Object.is=="function"?Object.is:eE;function Ea(n,i){if(Nn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Nn(n[d],i[d]))return!1}return!0}function Hp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wp(n,i){var a=Hp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hp(a)}}function Kp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Kp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Gp(){for(var n=window,i=Wr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Wr(n.document)}return i}function dh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function tE(n){var i=Gp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Kp(a.ownerDocument.documentElement,a)){if(c!==null&&dh(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=Wp(a,f);var v=Wp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nE=m&&"documentMode"in document&&11>=document.documentMode,no=null,fh=null,Ta=null,ph=!1;function Qp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ph||no==null||no!==Wr(c)||(c=no,"selectionStart"in c&&dh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&Ea(Ta,c)||(Ta=c,c=tu(fh,"onSelect"),0<c.length&&(i=new ts("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=no)))}function Xl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ro={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},mh={},Yp={};m&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Zl(n){if(mh[n])return mh[n];if(!ro[n])return n;var i=ro[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Yp)return mh[n]=i[a];return n}var Jp=Zl("animationend"),Xp=Zl("animationiteration"),Zp=Zl("animationstart"),em=Zl("transitionend"),tm=new Map,nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(n,i){tm.set(n,i),l(i,[n])}for(var gh=0;gh<nm.length;gh++){var yh=nm[gh],rE=yh.toLowerCase(),iE=yh[0].toUpperCase()+yh.slice(1);li(rE,"on"+iE)}li(Jp,"onAnimationEnd"),li(Xp,"onAnimationIteration"),li(Zp,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(em,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function rm(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ta(c,i,void 0,n),n.currentTarget=null}function im(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],N=S.instance,U=S.currentTarget;if(S=S.listener,N!==f&&d.isPropagationStopped())break e;rm(d,S,U),f=N}else for(v=0;v<c.length;v++){if(S=c[v],N=S.instance,U=S.currentTarget,S=S.listener,N!==f&&d.isPropagationStopped())break e;rm(d,S,U),f=N}}}if(js)throw n=pn,js=!1,pn=null,n}function Qe(n,i){var a=i[Ah];a===void 0&&(a=i[Ah]=new Set);var c=n+"__bubble";a.has(c)||(sm(i,n,2,!1),a.add(c))}function _h(n,i,a){var c=0;i&&(c|=4),sm(a,n,c,i)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Sa(n){if(!n[eu]){n[eu]=!0,s.forEach(function(a){a!=="selectionchange"&&(sE.has(a)||_h(a,!1,n),_h(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[eu]||(i[eu]=!0,_h("selectionchange",!1,i))}}function sm(n,i,a,c){switch(Gs(i)){case 1:var d=Jn;break;case 4:d=Hl;break;default:d=pa}a=d.bind(null,i,a,n),d=void 0,!ei||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function vh(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var N=v.tag;if((N===3||N===4)&&(N=v.stateNode.containerInfo,N===d||N.nodeType===8&&N.parentNode===d))return;v=v.return}for(;S!==null;){if(v=rs(S),v===null)return;if(N=v.tag,N===5||N===6){c=f=v;continue e}S=S.parentNode}}c=c.return}Vl(function(){var U=f,W=Us(a),K=[];e:{var H=tm.get(n);if(H!==void 0){var te=ts,ie=n;switch(n){case"keypress":if(es(a)===0)break e;case"keydown":case"keyup":te=Be;break;case"focusin":ie="focus",te=xt;break;case"focusout":ie="blur",te=xt;break;case"beforeblur":case"afterblur":te=xt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=tr;break;case Jp:case Xp:case Zp:te=Yl;break;case em:te=eo;break;case"scroll":te=Ys;break;case"wheel":te=B0;break;case"copy":case"cut":case"paste":te=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=ln}var se=(i&4)!==0,ut=!se&&n==="scroll",M=se?H!==null?H+"Capture":null:H;se=[];for(var V=U,F;V!==null;){F=V;var Q=F.stateNode;if(F.tag===5&&Q!==null&&(F=Q,M!==null&&(Q=qi(V,M),Q!=null&&se.push(Aa(V,Q,F)))),ut)break;V=V.return}0<se.length&&(H=new te(H,ie,null,a,W),K.push({event:H,listeners:se}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",H&&a!==Jr&&(ie=a.relatedTarget||a.fromElement)&&(rs(ie)||ie[kr]))break e;if((te||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,te?(ie=a.relatedTarget||a.toElement,te=U,ie=ie?rs(ie):null,ie!==null&&(ut=Pn(ie),ie!==ut||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=U),te!==ie)){if(se=ga,Q="onMouseLeave",M="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(se=ln,Q="onPointerLeave",M="onPointerEnter",V="pointer"),ut=te==null?H:oo(te),F=ie==null?H:oo(ie),H=new se(Q,V+"leave",te,a,W),H.target=ut,H.relatedTarget=F,Q=null,rs(W)===U&&(se=new se(M,V+"enter",ie,a,W),se.target=F,se.relatedTarget=ut,Q=se),ut=Q,te&&ie)t:{for(se=te,M=ie,V=0,F=se;F;F=io(F))V++;for(F=0,Q=M;Q;Q=io(Q))F++;for(;0<V-F;)se=io(se),V--;for(;0<F-V;)M=io(M),F--;for(;V--;){if(se===M||M!==null&&se===M.alternate)break t;se=io(se),M=io(M)}se=null}else se=null;te!==null&&om(K,H,te,se,!1),ie!==null&&ut!==null&&om(K,ut,ie,se,!0)}}e:{if(H=U?oo(U):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var oe=Q0;else if(Up(H))if(zp)oe=Z0;else{oe=J0;var ce=Y0}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(oe=X0);if(oe&&(oe=oe(n,U))){jp(K,oe,a,W);break e}ce&&ce(n,H,U),n==="focusout"&&(ce=H._wrapperState)&&ce.controlled&&H.type==="number"&&dt(H,"number",H.value)}switch(ce=U?oo(U):window,n){case"focusin":(Up(ce)||ce.contentEditable==="true")&&(no=ce,fh=U,Ta=null);break;case"focusout":Ta=fh=no=null;break;case"mousedown":ph=!0;break;case"contextmenu":case"mouseup":case"dragend":ph=!1,Qp(K,a,W);break;case"selectionchange":if(nE)break;case"keydown":case"keyup":Qp(K,a,W)}var he;if(uh)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else to?Lp(n,a)&&(pe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Vp&&a.locale!=="ko"&&(to||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&to&&(he=Wl()):(on=W,Qs="value"in on?on.value:on.textContent,to=!0)),ce=tu(U,pe),0<ce.length&&(pe=new y(pe,n,null,a,W),K.push({event:pe,listeners:ce}),he?pe.data=he:(he=Fp(a),he!==null&&(pe.data=he)))),(he=q0?H0(n,a):W0(n,a))&&(U=tu(U,"onBeforeInput"),0<U.length&&(W=new y("onBeforeInput","beforeinput",null,a,W),K.push({event:W,listeners:U}),W.data=he))}im(K,i)})}function Aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function tu(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=qi(n,a),f!=null&&c.unshift(Aa(n,f,d)),f=qi(n,i),f!=null&&c.push(Aa(n,f,d))),n=n.return}return c}function io(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function om(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var S=a,N=S.alternate,U=S.stateNode;if(N!==null&&N===c)break;S.tag===5&&U!==null&&(S=U,d?(N=qi(a,f),N!=null&&v.unshift(Aa(a,N,S))):d||(N=qi(a,f),N!=null&&v.push(Aa(a,N,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var oE=/\r\n?/g,aE=/\u0000|\uFFFD/g;function am(n){return(typeof n=="string"?n:""+n).replace(oE,`
`).replace(aE,"")}function nu(n,i,a){if(i=am(i),am(n)!==i&&a)throw Error(t(425))}function ru(){}var wh=null,Eh=null;function Th(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ih=typeof setTimeout=="function"?setTimeout:void 0,lE=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(n){return lm.resolve(null).then(n).catch(cE)}:Ih;function cE(n){setTimeout(function(){throw n})}function Sh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),si(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);si(i)}function ui(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function um(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var so=Math.random().toString(36).slice(2),rr="__reactFiber$"+so,ka="__reactProps$"+so,kr="__reactContainer$"+so,Ah="__reactEvents$"+so,hE="__reactListeners$"+so,dE="__reactHandles$"+so;function rs(n){var i=n[rr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[kr]||a[rr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=um(n);n!==null;){if(a=n[rr])return a;n=um(n)}return i}n=a,a=n.parentNode}return null}function Ra(n){return n=n[rr]||n[kr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function oo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function iu(n){return n[ka]||null}var kh=[],ao=-1;function ci(n){return{current:n}}function Ye(n){0>ao||(n.current=kh[ao],kh[ao]=null,ao--)}function We(n,i){ao++,kh[ao]=n.current,n.current=i}var hi={},Ot=ci(hi),Kt=ci(!1),is=hi;function lo(n,i){var a=n.type.contextTypes;if(!a)return hi;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function su(){Ye(Kt),Ye(Ot)}function cm(n,i,a){if(Ot.current!==hi)throw Error(t(168));We(Ot,i),We(Kt,a)}function hm(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Le(n)||"Unknown",d));return D({},a,c)}function ou(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hi,is=Ot.current,We(Ot,n),We(Kt,Kt.current),!0}function dm(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=hm(n,i,is),c.__reactInternalMemoizedMergedChildContext=n,Ye(Kt),Ye(Ot),We(Ot,n)):Ye(Kt),We(Kt,a)}var Rr=null,au=!1,Rh=!1;function fm(n){Rr===null?Rr=[n]:Rr.push(n)}function fE(n){au=!0,fm(n)}function di(){if(!Rh&&Rr!==null){Rh=!0;var n=0,i=Pe;try{var a=Rr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Rr=null,au=!1}catch(d){throw Rr!==null&&(Rr=Rr.slice(n+1)),ra(Bs,di),d}finally{Pe=i,Rh=!1}}return null}var uo=[],co=0,lu=null,uu=0,gn=[],yn=0,ss=null,xr=1,Pr="";function os(n,i){uo[co++]=uu,uo[co++]=lu,lu=n,uu=i}function pm(n,i,a){gn[yn++]=xr,gn[yn++]=Pr,gn[yn++]=ss,ss=n;var c=xr;n=Pr;var d=32-rn(c)-1;c&=~(1<<d),a+=1;var f=32-rn(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,xr=1<<32-rn(i)+d|a<<d|c,Pr=f+n}else xr=1<<f|a<<d|c,Pr=n}function xh(n){n.return!==null&&(os(n,1),pm(n,1,0))}function Ph(n){for(;n===lu;)lu=uo[--co],uo[co]=null,uu=uo[--co],uo[co]=null;for(;n===ss;)ss=gn[--yn],gn[yn]=null,Pr=gn[--yn],gn[yn]=null,xr=gn[--yn],gn[yn]=null}var un=null,cn=null,Xe=!1,Dn=null;function mm(n,i){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function gm(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,un=n,cn=ui(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,un=n,cn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ss!==null?{id:xr,overflow:Pr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,un=n,cn=null,!0):!1;default:return!1}}function Ch(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nh(n){if(Xe){var i=cn;if(i){var a=i;if(!gm(n,i)){if(Ch(n))throw Error(t(418));i=ui(a.nextSibling);var c=un;i&&gm(n,i)?mm(c,a):(n.flags=n.flags&-4097|2,Xe=!1,un=n)}}else{if(Ch(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,un=n}}}function ym(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;un=n}function cu(n){if(n!==un)return!1;if(!Xe)return ym(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Th(n.type,n.memoizedProps)),i&&(i=cn)){if(Ch(n))throw _m(),Error(t(418));for(;i;)mm(n,i),i=ui(i.nextSibling)}if(ym(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){cn=ui(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}cn=null}}else cn=un?ui(n.stateNode.nextSibling):null;return!0}function _m(){for(var n=cn;n;)n=ui(n.nextSibling)}function ho(){cn=un=null,Xe=!1}function Dh(n){Dn===null?Dn=[n]:Dn.push(n)}var pE=Me.ReactCurrentBatchConfig;function bn(n,i){if(n&&n.defaultProps){i=D({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}var hu=ci(null),du=null,fo=null,bh=null;function Vh(){bh=fo=du=null}function Oh(n){var i=hu.current;Ye(hu),n._currentValue=i}function Mh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function po(n,i){du=n,bh=fo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Qt=!0),n.firstContext=null)}function _n(n){var i=n._currentValue;if(bh!==n)if(n={context:n,memoizedValue:i,next:null},fo===null){if(du===null)throw Error(t(308));fo=n,du.dependencies={lanes:0,firstContext:n}}else fo=fo.next=n;return i}var as=null;function Lh(n){as===null?as=[n]:as.push(n)}function vm(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Lh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Cr(n,c)}function Cr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var fi=!1;function Fh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wm(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Nr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function pi(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Cr(n,a)}return d=c.interleaved,d===null?(i.next=i,Lh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Cr(n,a)}function fu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ua(n,a)}}function Em(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function pu(n,i,a,c){var d=n.updateQueue;fi=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var N=S,U=N.next;N.next=null,v===null?f=U:v.next=U,v=N;var W=n.alternate;W!==null&&(W=W.updateQueue,S=W.lastBaseUpdate,S!==v&&(S===null?W.firstBaseUpdate=U:S.next=U,W.lastBaseUpdate=N))}if(f!==null){var K=d.baseState;v=0,W=U=N=null,S=f;do{var H=S.lane,te=S.eventTime;if((c&H)===H){W!==null&&(W=W.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ie=n,se=S;switch(H=i,te=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){K=ie.call(te,K,H);break e}K=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,H=typeof ie=="function"?ie.call(te,K,H):ie,H==null)break e;K=D({},K,H);break e;case 2:fi=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[S]:H.push(S))}else te={eventTime:te,lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},W===null?(U=W=te,N=K):W=W.next=te,v|=H;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;H=S,S=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(W===null&&(N=K),d.baseState=N,d.firstBaseUpdate=U,d.lastBaseUpdate=W,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);cs|=v,n.lanes=v,n.memoizedState=K}}function Tm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Im=new r.Component().refs;function Uh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:D({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var mu={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=_i(n),f=Nr(c,d);f.payload=i,a!=null&&(f.callback=a),i=pi(n,f,d),i!==null&&(Mn(i,n,d,c),fu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=_i(n),f=Nr(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=pi(n,f,d),i!==null&&(Mn(i,n,d,c),fu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Wt(),c=_i(n),d=Nr(a,c);d.tag=2,i!=null&&(d.callback=i),i=pi(n,d,c),i!==null&&(Mn(i,n,c,a),fu(i,n,c))}};function Sm(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!Ea(a,c)||!Ea(d,f):!0}function Am(n,i,a){var c=!1,d=hi,f=i.contextType;return typeof f=="object"&&f!==null?f=_n(f):(d=Gt(i)?is:Ot.current,c=i.contextTypes,f=(c=c!=null)?lo(n,d):hi),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=mu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function km(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&mu.enqueueReplaceState(i,i.state,null)}function jh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs=Im,Fh(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=_n(f):(f=Gt(i)?is:Ot.current,d.context=lo(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Uh(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&mu.enqueueReplaceState(d,d.state,null),pu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function xa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var S=d.refs;S===Im&&(S=d.refs={}),v===null?delete S[f]:S[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function gu(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Rm(n){var i=n._init;return i(n._payload)}function xm(n){function i(M,V){if(n){var F=M.deletions;F===null?(M.deletions=[V],M.flags|=16):F.push(V)}}function a(M,V){if(!n)return null;for(;V!==null;)i(M,V),V=V.sibling;return null}function c(M,V){for(M=new Map;V!==null;)V.key!==null?M.set(V.key,V):M.set(V.index,V),V=V.sibling;return M}function d(M,V){return M=wi(M,V),M.index=0,M.sibling=null,M}function f(M,V,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<V?(M.flags|=2,V):F):(M.flags|=2,V)):(M.flags|=1048576,V)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function S(M,V,F,Q){return V===null||V.tag!==6?(V=Id(F,M.mode,Q),V.return=M,V):(V=d(V,F),V.return=M,V)}function N(M,V,F,Q){var oe=F.type;return oe===A?W(M,V,F.props.children,Q,F.key):V!==null&&(V.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Ne&&Rm(oe)===V.type)?(Q=d(V,F.props),Q.ref=xa(M,V,F),Q.return=M,Q):(Q=Ou(F.type,F.key,F.props,null,M.mode,Q),Q.ref=xa(M,V,F),Q.return=M,Q)}function U(M,V,F,Q){return V===null||V.tag!==4||V.stateNode.containerInfo!==F.containerInfo||V.stateNode.implementation!==F.implementation?(V=Sd(F,M.mode,Q),V.return=M,V):(V=d(V,F.children||[]),V.return=M,V)}function W(M,V,F,Q,oe){return V===null||V.tag!==7?(V=ps(F,M.mode,Q,oe),V.return=M,V):(V=d(V,F),V.return=M,V)}function K(M,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Id(""+V,M.mode,F),V.return=M,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ue:return F=Ou(V.type,V.key,V.props,null,M.mode,F),F.ref=xa(M,null,V),F.return=M,F;case Ce:return V=Sd(V,M.mode,F),V.return=M,V;case Ne:var Q=V._init;return K(M,Q(V._payload),F)}if(at(V)||ue(V))return V=ps(V,M.mode,F,null),V.return=M,V;gu(M,V)}return null}function H(M,V,F,Q){var oe=V!==null?V.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return oe!==null?null:S(M,V,""+F,Q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ue:return F.key===oe?N(M,V,F,Q):null;case Ce:return F.key===oe?U(M,V,F,Q):null;case Ne:return oe=F._init,H(M,V,oe(F._payload),Q)}if(at(F)||ue(F))return oe!==null?null:W(M,V,F,Q,null);gu(M,F)}return null}function te(M,V,F,Q,oe){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return M=M.get(F)||null,S(V,M,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Ue:return M=M.get(Q.key===null?F:Q.key)||null,N(V,M,Q,oe);case Ce:return M=M.get(Q.key===null?F:Q.key)||null,U(V,M,Q,oe);case Ne:var ce=Q._init;return te(M,V,F,ce(Q._payload),oe)}if(at(Q)||ue(Q))return M=M.get(F)||null,W(V,M,Q,oe,null);gu(V,Q)}return null}function ie(M,V,F,Q){for(var oe=null,ce=null,he=V,pe=V=0,St=null;he!==null&&pe<F.length;pe++){he.index>pe?(St=he,he=null):St=he.sibling;var Oe=H(M,he,F[pe],Q);if(Oe===null){he===null&&(he=St);break}n&&he&&Oe.alternate===null&&i(M,he),V=f(Oe,V,pe),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe,he=St}if(pe===F.length)return a(M,he),Xe&&os(M,pe),oe;if(he===null){for(;pe<F.length;pe++)he=K(M,F[pe],Q),he!==null&&(V=f(he,V,pe),ce===null?oe=he:ce.sibling=he,ce=he);return Xe&&os(M,pe),oe}for(he=c(M,he);pe<F.length;pe++)St=te(he,M,pe,F[pe],Q),St!==null&&(n&&St.alternate!==null&&he.delete(St.key===null?pe:St.key),V=f(St,V,pe),ce===null?oe=St:ce.sibling=St,ce=St);return n&&he.forEach(function(Ei){return i(M,Ei)}),Xe&&os(M,pe),oe}function se(M,V,F,Q){var oe=ue(F);if(typeof oe!="function")throw Error(t(150));if(F=oe.call(F),F==null)throw Error(t(151));for(var ce=oe=null,he=V,pe=V=0,St=null,Oe=F.next();he!==null&&!Oe.done;pe++,Oe=F.next()){he.index>pe?(St=he,he=null):St=he.sibling;var Ei=H(M,he,Oe.value,Q);if(Ei===null){he===null&&(he=St);break}n&&he&&Ei.alternate===null&&i(M,he),V=f(Ei,V,pe),ce===null?oe=Ei:ce.sibling=Ei,ce=Ei,he=St}if(Oe.done)return a(M,he),Xe&&os(M,pe),oe;if(he===null){for(;!Oe.done;pe++,Oe=F.next())Oe=K(M,Oe.value,Q),Oe!==null&&(V=f(Oe,V,pe),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe);return Xe&&os(M,pe),oe}for(he=c(M,he);!Oe.done;pe++,Oe=F.next())Oe=te(he,M,pe,Oe.value,Q),Oe!==null&&(n&&Oe.alternate!==null&&he.delete(Oe.key===null?pe:Oe.key),V=f(Oe,V,pe),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe);return n&&he.forEach(function(KE){return i(M,KE)}),Xe&&os(M,pe),oe}function ut(M,V,F,Q){if(typeof F=="object"&&F!==null&&F.type===A&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ue:e:{for(var oe=F.key,ce=V;ce!==null;){if(ce.key===oe){if(oe=F.type,oe===A){if(ce.tag===7){a(M,ce.sibling),V=d(ce,F.props.children),V.return=M,M=V;break e}}else if(ce.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Ne&&Rm(oe)===ce.type){a(M,ce.sibling),V=d(ce,F.props),V.ref=xa(M,ce,F),V.return=M,M=V;break e}a(M,ce);break}else i(M,ce);ce=ce.sibling}F.type===A?(V=ps(F.props.children,M.mode,Q,F.key),V.return=M,M=V):(Q=Ou(F.type,F.key,F.props,null,M.mode,Q),Q.ref=xa(M,V,F),Q.return=M,M=Q)}return v(M);case Ce:e:{for(ce=F.key;V!==null;){if(V.key===ce)if(V.tag===4&&V.stateNode.containerInfo===F.containerInfo&&V.stateNode.implementation===F.implementation){a(M,V.sibling),V=d(V,F.children||[]),V.return=M,M=V;break e}else{a(M,V);break}else i(M,V);V=V.sibling}V=Sd(F,M.mode,Q),V.return=M,M=V}return v(M);case Ne:return ce=F._init,ut(M,V,ce(F._payload),Q)}if(at(F))return ie(M,V,F,Q);if(ue(F))return se(M,V,F,Q);gu(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,V!==null&&V.tag===6?(a(M,V.sibling),V=d(V,F),V.return=M,M=V):(a(M,V),V=Id(F,M.mode,Q),V.return=M,M=V),v(M)):a(M,V)}return ut}var mo=xm(!0),Pm=xm(!1),Pa={},ir=ci(Pa),Ca=ci(Pa),Na=ci(Pa);function ls(n){if(n===Pa)throw Error(t(174));return n}function zh(n,i){switch(We(Na,i),We(Ca,n),We(ir,Pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ms(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ms(i,n)}Ye(ir),We(ir,i)}function go(){Ye(ir),Ye(Ca),Ye(Na)}function Cm(n){ls(Na.current);var i=ls(ir.current),a=Ms(i,n.type);i!==a&&(We(Ca,n),We(ir,a))}function Bh(n){Ca.current===n&&(Ye(ir),Ye(Ca))}var Ze=ci(0);function yu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $h=[];function qh(){for(var n=0;n<$h.length;n++)$h[n]._workInProgressVersionPrimary=null;$h.length=0}var _u=Me.ReactCurrentDispatcher,Hh=Me.ReactCurrentBatchConfig,us=0,et=null,_t=null,Tt=null,vu=!1,Da=!1,ba=0,mE=0;function Mt(){throw Error(t(321))}function Wh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Nn(n[a],i[a]))return!1;return!0}function Kh(n,i,a,c,d,f){if(us=f,et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,_u.current=n===null||n.memoizedState===null?vE:wE,n=a(c,d),Da){f=0;do{if(Da=!1,ba=0,25<=f)throw Error(t(301));f+=1,Tt=_t=null,i.updateQueue=null,_u.current=EE,n=a(c,d)}while(Da)}if(_u.current=Tu,i=_t!==null&&_t.next!==null,us=0,Tt=_t=et=null,vu=!1,i)throw Error(t(300));return n}function Gh(){var n=ba!==0;return ba=0,n}function sr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?et.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function vn(){if(_t===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=_t.next;var i=Tt===null?et.memoizedState:Tt.next;if(i!==null)Tt=i,_t=n;else{if(n===null)throw Error(t(310));_t=n,n={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Tt===null?et.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Va(n,i){return typeof i=="function"?i(n):i}function Qh(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=_t,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=v=null,N=null,U=f;do{var W=U.lane;if((us&W)===W)N!==null&&(N=N.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:W,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};N===null?(S=N=K,v=c):N=N.next=K,et.lanes|=W,cs|=W}U=U.next}while(U!==null&&U!==f);N===null?v=c:N.next=S,Nn(c,i.memoizedState)||(Qt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=N,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,cs|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Yh(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Nn(f,i.memoizedState)||(Qt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function Nm(){}function Dm(n,i){var a=et,c=vn(),d=i(),f=!Nn(c.memoizedState,d);if(f&&(c.memoizedState=d,Qt=!0),c=c.queue,Jh(Om.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Oa(9,Vm.bind(null,a,c,d,i),void 0,null),It===null)throw Error(t(349));(us&30)!==0||bm(a,i,d)}return d}function bm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Vm(n,i,a,c){i.value=a,i.getSnapshot=c,Mm(i)&&Lm(n)}function Om(n,i,a){return a(function(){Mm(i)&&Lm(n)})}function Mm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Nn(n,a)}catch{return!0}}function Lm(n){var i=Cr(n,1);i!==null&&Mn(i,n,1,-1)}function Fm(n){var i=sr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},i.queue=n,n=n.dispatch=_E.bind(null,et,n),[i.memoizedState,n]}function Oa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Um(){return vn().memoizedState}function wu(n,i,a,c){var d=sr();et.flags|=n,d.memoizedState=Oa(1|i,a,void 0,c===void 0?null:c)}function Eu(n,i,a,c){var d=vn();c=c===void 0?null:c;var f=void 0;if(_t!==null){var v=_t.memoizedState;if(f=v.destroy,c!==null&&Wh(c,v.deps)){d.memoizedState=Oa(i,a,f,c);return}}et.flags|=n,d.memoizedState=Oa(1|i,a,f,c)}function jm(n,i){return wu(8390656,8,n,i)}function Jh(n,i){return Eu(2048,8,n,i)}function zm(n,i){return Eu(4,2,n,i)}function Bm(n,i){return Eu(4,4,n,i)}function $m(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function qm(n,i,a){return a=a!=null?a.concat([n]):null,Eu(4,4,$m.bind(null,i,n),a)}function Xh(){}function Hm(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Wm(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Km(n,i,a){return(us&21)===0?(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a):(Nn(a,i)||(a=aa(),et.lanes|=a,cs|=a,n.baseState=!0),i)}function gE(n,i){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=Hh.transition;Hh.transition={};try{n(!1),i()}finally{Pe=a,Hh.transition=c}}function Gm(){return vn().memoizedState}function yE(n,i,a){var c=_i(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Qm(n))Ym(i,a);else if(a=vm(n,i,a,c),a!==null){var d=Wt();Mn(a,n,c,d),Jm(a,i,c)}}function _E(n,i,a){var c=_i(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qm(n))Ym(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,S=f(v,a);if(d.hasEagerState=!0,d.eagerState=S,Nn(S,v)){var N=i.interleaved;N===null?(d.next=d,Lh(i)):(d.next=N.next,N.next=d),i.interleaved=d;return}}catch{}finally{}a=vm(n,i,d,c),a!==null&&(d=Wt(),Mn(a,n,c,d),Jm(a,i,c))}}function Qm(n){var i=n.alternate;return n===et||i!==null&&i===et}function Ym(n,i){Da=vu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Jm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ua(n,a)}}var Tu={readContext:_n,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},vE={readContext:_n,useCallback:function(n,i){return sr().memoizedState=[n,i===void 0?null:i],n},useContext:_n,useEffect:jm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,wu(4194308,4,$m.bind(null,i,n),a)},useLayoutEffect:function(n,i){return wu(4194308,4,n,i)},useInsertionEffect:function(n,i){return wu(4,2,n,i)},useMemo:function(n,i){var a=sr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=sr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=yE.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var i=sr();return n={current:n},i.memoizedState=n},useState:Fm,useDebugValue:Xh,useDeferredValue:function(n){return sr().memoizedState=n},useTransition:function(){var n=Fm(!1),i=n[0];return n=gE.bind(null,n[1]),sr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=et,d=sr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),It===null)throw Error(t(349));(us&30)!==0||bm(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,jm(Om.bind(null,c,f,n),[n]),c.flags|=2048,Oa(9,Vm.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=sr(),i=It.identifierPrefix;if(Xe){var a=Pr,c=xr;a=(c&~(1<<32-rn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ba++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=mE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},wE={readContext:_n,useCallback:Hm,useContext:_n,useEffect:Jh,useImperativeHandle:qm,useInsertionEffect:zm,useLayoutEffect:Bm,useMemo:Wm,useReducer:Qh,useRef:Um,useState:function(){return Qh(Va)},useDebugValue:Xh,useDeferredValue:function(n){var i=vn();return Km(i,_t.memoizedState,n)},useTransition:function(){var n=Qh(Va)[0],i=vn().memoizedState;return[n,i]},useMutableSource:Nm,useSyncExternalStore:Dm,useId:Gm,unstable_isNewReconciler:!1},EE={readContext:_n,useCallback:Hm,useContext:_n,useEffect:Jh,useImperativeHandle:qm,useInsertionEffect:zm,useLayoutEffect:Bm,useMemo:Wm,useReducer:Yh,useRef:Um,useState:function(){return Yh(Va)},useDebugValue:Xh,useDeferredValue:function(n){var i=vn();return _t===null?i.memoizedState=n:Km(i,_t.memoizedState,n)},useTransition:function(){var n=Yh(Va)[0],i=vn().memoizedState;return[n,i]},useMutableSource:Nm,useSyncExternalStore:Dm,useId:Gm,unstable_isNewReconciler:!1};function yo(n,i){try{var a="",c=i;do a+=je(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function Zh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ed(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var TE=typeof WeakMap=="function"?WeakMap:Map;function Xm(n,i,a){a=Nr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Pu||(Pu=!0,md=c),ed(n,i)},a}function Zm(n,i,a){a=Nr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){ed(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){ed(n,i),typeof c!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function eg(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new TE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=ME.bind(null,n,i,a),i.then(n,n))}function tg(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function ng(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Nr(-1,1),i.tag=2,pi(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var IE=Me.ReactCurrentOwner,Qt=!1;function Ht(n,i,a,c){i.child=n===null?Pm(i,null,a,c):mo(i,n.child,a,c)}function rg(n,i,a,c,d){a=a.render;var f=i.ref;return po(i,d),c=Kh(n,i,a,c,f,d),a=Gh(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Dr(n,i,d)):(Xe&&a&&xh(i),i.flags|=1,Ht(n,i,c,d),i.child)}function ig(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Td(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,sg(n,i,f,c,d)):(n=Ou(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(v,c)&&n.ref===i.ref)return Dr(n,i,d)}return i.flags|=1,n=wi(f,c),n.ref=i.ref,n.return=i,i.child=n}function sg(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(Ea(f,c)&&n.ref===i.ref)if(Qt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qt=!0);else return i.lanes=n.lanes,Dr(n,i,d)}return td(n,i,a,c,d)}function og(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(vo,hn),hn|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,We(vo,hn),hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,We(vo,hn),hn|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,We(vo,hn),hn|=c;return Ht(n,i,d,a),i.child}function ag(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function td(n,i,a,c,d){var f=Gt(a)?is:Ot.current;return f=lo(i,f),po(i,d),a=Kh(n,i,a,c,f,d),c=Gh(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Dr(n,i,d)):(Xe&&c&&xh(i),i.flags|=1,Ht(n,i,a,d),i.child)}function lg(n,i,a,c,d){if(Gt(a)){var f=!0;ou(i)}else f=!1;if(po(i,d),i.stateNode===null)Su(n,i),Am(i,a,c),jh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var N=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=_n(U):(U=Gt(a)?is:Ot.current,U=lo(i,U));var W=a.getDerivedStateFromProps,K=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||N!==U)&&km(i,v,c,U),fi=!1;var H=i.memoizedState;v.state=H,pu(i,c,v,d),N=i.memoizedState,S!==c||H!==N||Kt.current||fi?(typeof W=="function"&&(Uh(i,a,W,c),N=i.memoizedState),(S=fi||Sm(i,a,S,c,H,N,U))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=N),v.props=c,v.state=N,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,wm(n,i),S=i.memoizedProps,U=i.type===i.elementType?S:bn(i.type,S),v.props=U,K=i.pendingProps,H=v.context,N=a.contextType,typeof N=="object"&&N!==null?N=_n(N):(N=Gt(a)?is:Ot.current,N=lo(i,N));var te=a.getDerivedStateFromProps;(W=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==K||H!==N)&&km(i,v,c,N),fi=!1,H=i.memoizedState,v.state=H,pu(i,c,v,d);var ie=i.memoizedState;S!==K||H!==ie||Kt.current||fi?(typeof te=="function"&&(Uh(i,a,te,c),ie=i.memoizedState),(U=fi||Sm(i,a,U,c,H,ie,N)||!1)?(W||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,N),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,N)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ie),v.props=c,v.state=ie,v.context=N,c=U):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),c=!1)}return nd(n,i,a,c,f,d)}function nd(n,i,a,c,d,f){ag(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&dm(i,a,!1),Dr(n,i,f);c=i.stateNode,IE.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=mo(i,n.child,null,f),i.child=mo(i,null,S,f)):Ht(n,i,S,f),i.memoizedState=c.state,d&&dm(i,a,!0),i.child}function ug(n){var i=n.stateNode;i.pendingContext?cm(n,i.pendingContext,i.pendingContext!==i.context):i.context&&cm(n,i.context,!1),zh(n,i.containerInfo)}function cg(n,i,a,c,d){return ho(),Dh(d),i.flags|=256,Ht(n,i,a,c),i.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function id(n){return{baseLanes:n,cachePool:null,transitions:null}}function hg(n,i,a){var c=i.pendingProps,d=Ze.current,f=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Ze,d&1),n===null)return Nh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=Mu(v,c,0,null),n=ps(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=id(a),i.memoizedState=rd,n):sd(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return SE(n,i,v,c,S,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,S=d.sibling;var N={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=N,i.deletions=null):(c=wi(d,N),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=wi(S,f):(f=ps(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?id(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=rd,c}return f=n.child,n=f.sibling,c=wi(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function sd(n,i){return i=Mu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Iu(n,i,a,c){return c!==null&&Dh(c),mo(i,n.child,null,a),n=sd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function SE(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=Zh(Error(t(422))),Iu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=Mu({mode:"visible",children:c.children},d,0,null),f=ps(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&mo(i,n.child,null,v),i.child.memoizedState=id(v),i.memoizedState=rd,f);if((i.mode&1)===0)return Iu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=Zh(f,c,void 0),Iu(n,i,v,c)}if(S=(v&n.childLanes)!==0,Qt||S){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Cr(n,d),Mn(c,n,d,-1))}return Ed(),c=Zh(Error(t(421))),Iu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=LE.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,cn=ui(d.nextSibling),un=i,Xe=!0,Dn=null,n!==null&&(gn[yn++]=xr,gn[yn++]=Pr,gn[yn++]=ss,xr=n.id,Pr=n.overflow,ss=i),i=sd(i,c.children),i.flags|=4096,i)}function dg(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Mh(n.return,i,a)}function od(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function fg(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(Ht(n,i,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dg(n,a,i);else if(n.tag===19)dg(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Ze,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&yu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),od(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&yu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}od(i,!0,a,null,f);break;case"together":od(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Su(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Dr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=wi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=wi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function AE(n,i,a){switch(i.tag){case 3:ug(i),ho();break;case 5:Cm(i);break;case 1:Gt(i.type)&&ou(i);break;case 4:zh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;We(hu,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?hg(n,i,a):(We(Ze,Ze.current&1),n=Dr(n,i,a),n!==null?n.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return fg(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return i.lanes=0,og(n,i,a)}return Dr(n,i,a)}var pg,ad,mg,gg;pg=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ad=function(){},mg=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ls(ir.current);var f=null;switch(a){case"input":d=Vs(n,d),c=Vs(n,c),f=[];break;case"select":d=D({},d,{value:void 0}),c=D({},c,{value:void 0}),f=[];break;case"textarea":d=Yo(n,d),c=Yo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ru)}xn(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var N=c[U];if(S=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&N!==S&&(N!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||N&&N.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in N)N.hasOwnProperty(v)&&S[v]!==N[v]&&(a||(a={}),a[v]=N[v])}else a||(f||(f=[]),f.push(U,a)),a=N;else U==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,S=S?S.__html:void 0,N!=null&&S!==N&&(f=f||[]).push(U,N)):U==="children"?typeof N!="string"&&typeof N!="number"||(f=f||[]).push(U,""+N):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(N!=null&&U==="onScroll"&&Qe("scroll",n),f||S===N||(f=[])):(f=f||[]).push(U,N))}a&&(f=f||[]).push("style",a);var U=f;(i.updateQueue=U)&&(i.flags|=4)}},gg=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ma(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function kE(n,i,a){var c=i.pendingProps;switch(Ph(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Gt(i.type)&&su(),Lt(i),null;case 3:return c=i.stateNode,go(),Ye(Kt),Ye(Ot),qh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(cu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Dn!==null&&(_d(Dn),Dn=null))),ad(n,i),Lt(i),null;case 5:Bh(i);var d=ls(Na.current);if(a=i.type,n!==null&&i.stateNode!=null)mg(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=ls(ir.current),cu(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[rr]=i,c[ka]=f,n=(i.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)Qe(Ia[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":xl(c,f),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Qe("invalid",c);break;case"textarea":Jo(c,f),Qe("invalid",c)}xn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var S=f[v];v==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&nu(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&nu(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":bs(c),Qo(c,f,!0);break;case"textarea":bs(c),Kr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=ru)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Xo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[rr]=i,n[ka]=c,pg(n,i,!1,!1),i.stateNode=n;e:{switch(v=Fs(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)Qe(Ia[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":xl(n,c),d=Vs(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=D({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":Jo(n,c),d=Yo(n,c),Qe("invalid",n);break;default:d=c}xn(a,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var N=S[f];f==="style"?Ls(n,N):f==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Cl(n,N)):f==="children"?typeof N=="string"?(a!=="textarea"||N!=="")&&$i(n,N):typeof N=="number"&&$i(n,""+N):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?N!=null&&f==="onScroll"&&Qe("scroll",n):N!=null&&Ee(n,f,N,v))}switch(a){case"input":bs(n),Qo(n,c,!1);break;case"textarea":bs(n),Kr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+De(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?Rn(n,!!c.multiple,f,!1):c.defaultValue!=null&&Rn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ru)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)gg(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ls(Na.current),ls(ir.current),cu(i)){if(c=i.stateNode,a=i.memoizedProps,c[rr]=i,(f=c.nodeValue!==a)&&(n=un,n!==null))switch(n.tag){case 3:nu(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&nu(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[rr]=i,i.stateNode=c}return Lt(i),null;case 13:if(Ye(Ze),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&cn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)_m(),ho(),i.flags|=98560,f=!1;else if(f=cu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[rr]=i}else ho(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),f=!1}else Dn!==null&&(_d(Dn),Dn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ze.current&1)!==0?vt===0&&(vt=3):Ed())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return go(),ad(n,i),n===null&&Sa(i.stateNode.containerInfo),Lt(i),null;case 10:return Oh(i.type._context),Lt(i),null;case 17:return Gt(i.type)&&su(),Lt(i),null;case 19:if(Ye(Ze),f=i.memoizedState,f===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)Ma(f,!1);else{if(vt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=yu(n),v!==null){for(i.flags|=128,Ma(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),i.child}n=n.sibling}f.tail!==null&&Ge()>wo&&(i.flags|=128,c=!0,Ma(f,!1),i.lanes=4194304)}else{if(!c)if(n=yu(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ma(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Xe)return Lt(i),null}else 2*Ge()-f.renderingStartTime>wo&&a!==1073741824&&(i.flags|=128,c=!0,Ma(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ge(),i.sibling=null,a=Ze.current,We(Ze,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return wd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(hn&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function RE(n,i){switch(Ph(i),i.tag){case 1:return Gt(i.type)&&su(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return go(),Ye(Kt),Ye(Ot),qh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Bh(i),null;case 13:if(Ye(Ze),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ho()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ye(Ze),null;case 4:return go(),null;case 10:return Oh(i.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var Au=!1,Ft=!1,xE=typeof WeakSet=="function"?WeakSet:Set,re=null;function _o(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,i,c)}else a.current=null}function ld(n,i,a){try{a()}catch(c){rt(n,i,c)}}var yg=!1;function PE(n,i){if(wh=Ir,n=Gp(),dh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,S=-1,N=-1,U=0,W=0,K=n,H=null;t:for(;;){for(var te;K!==a||d!==0&&K.nodeType!==3||(S=v+d),K!==f||c!==0&&K.nodeType!==3||(N=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(te=K.firstChild)!==null;)H=K,K=te;for(;;){if(K===n)break t;if(H===a&&++U===d&&(S=v),H===f&&++W===c&&(N=v),(te=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=te}a=S===-1||N===-1?null:{start:S,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Eh={focusedElem:n,selectionRange:a},Ir=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var ie=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,ut=ie.memoizedState,M=i.stateNode,V=M.getSnapshotBeforeUpdate(i.elementType===i.type?se:bn(i.type,se),ut);M.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){rt(i,i.return,Q)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return ie=yg,yg=!1,ie}function La(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&ld(i,a,f)}d=d.next}while(d!==c)}}function ku(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function ud(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function _g(n){var i=n.alternate;i!==null&&(n.alternate=null,_g(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[rr],delete i[ka],delete i[Ah],delete i[hE],delete i[dE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function vg(n){return n.tag===5||n.tag===3||n.tag===4}function wg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||vg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ru));else if(c!==4&&(n=n.child,n!==null))for(cd(n,i,a),n=n.sibling;n!==null;)cd(n,i,a),n=n.sibling}function hd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(hd(n,i,a),n=n.sibling;n!==null;)hd(n,i,a),n=n.sibling}var Pt=null,Vn=!1;function mi(n,i,a){for(a=a.child;a!==null;)Eg(n,i,a),a=a.sibling}function Eg(n,i,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Gi,a)}catch{}switch(a.tag){case 5:Ft||_o(a,i);case 6:var c=Pt,d=Vn;Pt=null,mi(n,i,a),Pt=c,Vn=d,Pt!==null&&(Vn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Vn?(n=Pt,a=a.stateNode,n.nodeType===8?Sh(n.parentNode,a):n.nodeType===1&&Sh(n,a),si(n)):Sh(Pt,a.stateNode));break;case 4:c=Pt,d=Vn,Pt=a.stateNode.containerInfo,Vn=!0,mi(n,i,a),Pt=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&ld(a,i,v),d=d.next}while(d!==c)}mi(n,i,a);break;case 1:if(!Ft&&(_o(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){rt(a,i,S)}mi(n,i,a);break;case 21:mi(n,i,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,mi(n,i,a),Ft=c):mi(n,i,a);break;default:mi(n,i,a)}}function Tg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new xE),i.forEach(function(c){var d=FE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,Vn=!1;break e;case 3:Pt=S.stateNode.containerInfo,Vn=!0;break e;case 4:Pt=S.stateNode.containerInfo,Vn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));Eg(f,v,d),Pt=null,Vn=!1;var N=d.alternate;N!==null&&(N.return=null),d.return=null}catch(U){rt(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ig(i,n),i=i.sibling}function Ig(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(i,n),or(n),c&4){try{La(3,n,n.return),ku(3,n)}catch(se){rt(n,n.return,se)}try{La(5,n,n.return)}catch(se){rt(n,n.return,se)}}break;case 1:On(i,n),or(n),c&512&&a!==null&&_o(a,a.return);break;case 5:if(On(i,n),or(n),c&512&&a!==null&&_o(a,a.return),n.flags&32){var d=n.stateNode;try{$i(d,"")}catch(se){rt(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,S=n.type,N=n.updateQueue;if(n.updateQueue=null,N!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&Os(d,f),Fs(S,v);var U=Fs(S,f);for(v=0;v<N.length;v+=2){var W=N[v],K=N[v+1];W==="style"?Ls(d,K):W==="dangerouslySetInnerHTML"?Cl(d,K):W==="children"?$i(d,K):Ee(d,W,K,U)}switch(S){case"input":Bi(d,f);break;case"textarea":Pl(d,f);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var te=f.value;te!=null?Rn(d,!!f.multiple,te,!1):H!==!!f.multiple&&(f.defaultValue!=null?Rn(d,!!f.multiple,f.defaultValue,!0):Rn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ka]=f}catch(se){rt(n,n.return,se)}}break;case 6:if(On(i,n),or(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(se){rt(n,n.return,se)}}break;case 3:if(On(i,n),or(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{si(i.containerInfo)}catch(se){rt(n,n.return,se)}break;case 4:On(i,n),or(n);break;case 13:On(i,n),or(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(pd=Ge())),c&4&&Tg(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(U=Ft)||W,On(i,n),Ft=U):On(i,n),or(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!W&&(n.mode&1)!==0)for(re=n,W=n.child;W!==null;){for(K=re=W;re!==null;){switch(H=re,te=H.child,H.tag){case 0:case 11:case 14:case 15:La(4,H,H.return);break;case 1:_o(H,H.return);var ie=H.stateNode;if(typeof ie.componentWillUnmount=="function"){c=H,a=H.return;try{i=c,ie.props=i.memoizedProps,ie.state=i.memoizedState,ie.componentWillUnmount()}catch(se){rt(c,a,se)}}break;case 5:_o(H,H.return);break;case 22:if(H.memoizedState!==null){kg(K);continue}}te!==null?(te.return=H,re=te):kg(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=K.stateNode,N=K.memoizedProps.style,v=N!=null&&N.hasOwnProperty("display")?N.display:null,S.style.display=Yr("display",v))}catch(se){rt(n,n.return,se)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(se){rt(n,n.return,se)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:On(i,n),or(n),c&4&&Tg(n);break;case 21:break;default:On(i,n),or(n)}}function or(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(vg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&($i(d,""),c.flags&=-33);var f=wg(n);hd(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=wg(n);cd(n,S,v);break;default:throw Error(t(161))}}catch(N){rt(n,n.return,N)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function CE(n,i,a){re=n,Sg(n)}function Sg(n,i,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Au;if(!v){var S=d.alternate,N=S!==null&&S.memoizedState!==null||Ft;S=Au;var U=Ft;if(Au=v,(Ft=N)&&!U)for(re=d;re!==null;)v=re,N=v.child,v.tag===22&&v.memoizedState!==null?Rg(d):N!==null?(N.return=v,re=N):Rg(d);for(;f!==null;)re=f,Sg(f),f=f.sibling;re=d,Au=S,Ft=U}Ag(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,re=f):Ag(n)}}function Ag(n){for(;re!==null;){var i=re;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||ku(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:bn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Tm(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Tm(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var N=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&a.focus();break;case"img":N.src&&(a.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var W=U.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&si(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&ud(i)}catch(H){rt(i,i.return,H)}}if(i===n){re=null;break}if(a=i.sibling,a!==null){a.return=i.return,re=a;break}re=i.return}}function kg(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,re=a;break}re=i.return}}function Rg(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ku(4,i)}catch(N){rt(i,a,N)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(N){rt(i,d,N)}}var f=i.return;try{ud(i)}catch(N){rt(i,f,N)}break;case 5:var v=i.return;try{ud(i)}catch(N){rt(i,v,N)}}}catch(N){rt(i,i.return,N)}if(i===n){re=null;break}var S=i.sibling;if(S!==null){S.return=i.return,re=S;break}re=i.return}}var NE=Math.ceil,Ru=Me.ReactCurrentDispatcher,dd=Me.ReactCurrentOwner,wn=Me.ReactCurrentBatchConfig,Ve=0,It=null,pt=null,Ct=0,hn=0,vo=ci(0),vt=0,Fa=null,cs=0,xu=0,fd=0,Ua=null,Yt=null,pd=0,wo=1/0,br=null,Pu=!1,md=null,gi=null,Cu=!1,yi=null,Nu=0,ja=0,gd=null,Du=-1,bu=0;function Wt(){return(Ve&6)!==0?Ge():Du!==-1?Du:Du=Ge()}function _i(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Ct!==0?Ct&-Ct:pE.transition!==null?(bu===0&&(bu=aa()),bu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Gs(n.type)),n)}function Mn(n,i,a,c){if(50<ja)throw ja=0,gd=null,Error(t(185));Xi(n,a,c),((Ve&2)===0||n!==It)&&(n===It&&((Ve&2)===0&&(xu|=a),vt===4&&vi(n,Ct)),Jt(n,c),a===1&&Ve===0&&(i.mode&1)===0&&(wo=Ge()+500,au&&di()))}function Jt(n,i){var a=n.callbackNode;Ji(n,i);var c=wr(n,n===It?Ct:0);if(c===0)a!==null&&zs(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&zs(a),i===1)n.tag===0?fE(Pg.bind(null,n)):fm(Pg.bind(null,n)),uE(function(){(Ve&6)===0&&di()}),a=null;else{switch(Kn(c)){case 1:a=Bs;break;case 4:a=ia;break;case 16:a=Ki;break;case 536870912:a=$s;break;default:a=Ki}a=Lg(a,xg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function xg(n,i){if(Du=-1,bu=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Eo()&&n.callbackNode!==a)return null;var c=wr(n,n===It?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Vu(n,c);else{i=c;var d=Ve;Ve|=2;var f=Ng();(It!==n||Ct!==i)&&(br=null,wo=Ge()+500,ds(n,i));do try{VE();break}catch(S){Cg(n,S)}while(!0);Vh(),Ru.current=f,Ve=d,pt!==null?i=0:(It=null,Ct=0,i=vt)}if(i!==0){if(i===2&&(d=oa(n),d!==0&&(c=d,i=yd(n,d))),i===1)throw a=Fa,ds(n,0),vi(n,c),Jt(n,Ge()),a;if(i===6)vi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!DE(d)&&(i=Vu(n,c),i===2&&(f=oa(n),f!==0&&(c=f,i=yd(n,f))),i===1))throw a=Fa,ds(n,0),vi(n,c),Jt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:fs(n,Yt,br);break;case 3:if(vi(n,c),(c&130023424)===c&&(i=pd+500-Ge(),10<i)){if(wr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ih(fs.bind(null,n,Yt,br),i);break}fs(n,Yt,br);break;case 4:if(vi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-rn(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*NE(c/1960))-c,10<c){n.timeoutHandle=Ih(fs.bind(null,n,Yt,br),c);break}fs(n,Yt,br);break;case 5:fs(n,Yt,br);break;default:throw Error(t(329))}}}return Jt(n,Ge()),n.callbackNode===a?xg.bind(null,n):null}function yd(n,i){var a=Ua;return n.current.memoizedState.isDehydrated&&(ds(n,i).flags|=256),n=Vu(n,i),n!==2&&(i=Yt,Yt=a,i!==null&&_d(i)),n}function _d(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function DE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Nn(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vi(n,i){for(i&=~fd,i&=~xu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-rn(i),c=1<<a;n[a]=-1,i&=~c}}function Pg(n){if((Ve&6)!==0)throw Error(t(327));Eo();var i=wr(n,0);if((i&1)===0)return Jt(n,Ge()),null;var a=Vu(n,i);if(n.tag!==0&&a===2){var c=oa(n);c!==0&&(i=c,a=yd(n,c))}if(a===1)throw a=Fa,ds(n,0),vi(n,i),Jt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,fs(n,Yt,br),Jt(n,Ge()),null}function vd(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(wo=Ge()+500,au&&di())}}function hs(n){yi!==null&&yi.tag===0&&(Ve&6)===0&&Eo();var i=Ve;Ve|=1;var a=wn.transition,c=Pe;try{if(wn.transition=null,Pe=1,n)return n()}finally{Pe=c,wn.transition=a,Ve=i,(Ve&6)===0&&di()}}function wd(){hn=vo.current,Ye(vo)}function ds(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,lE(a)),pt!==null)for(a=pt.return;a!==null;){var c=a;switch(Ph(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&su();break;case 3:go(),Ye(Kt),Ye(Ot),qh();break;case 5:Bh(c);break;case 4:go();break;case 13:Ye(Ze);break;case 19:Ye(Ze);break;case 10:Oh(c.type._context);break;case 22:case 23:wd()}a=a.return}if(It=n,pt=n=wi(n.current,null),Ct=hn=i,vt=0,Fa=null,fd=xu=cs=0,Yt=Ua=null,as!==null){for(i=0;i<as.length;i++)if(a=as[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}as=null}return n}function Cg(n,i){do{var a=pt;try{if(Vh(),_u.current=Tu,vu){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}vu=!1}if(us=0,Tt=_t=et=null,Da=!1,ba=0,dd.current=null,a===null||a.return===null){vt=1,Fa=i,pt=null;break}e:{var f=n,v=a.return,S=a,N=i;if(i=Ct,S.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var U=N,W=S,K=W.tag;if((W.mode&1)===0&&(K===0||K===11||K===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var te=tg(v);if(te!==null){te.flags&=-257,ng(te,v,S,f,i),te.mode&1&&eg(f,U,i),i=te,N=U;var ie=i.updateQueue;if(ie===null){var se=new Set;se.add(N),i.updateQueue=se}else ie.add(N);break e}else{if((i&1)===0){eg(f,U,i),Ed();break e}N=Error(t(426))}}else if(Xe&&S.mode&1){var ut=tg(v);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),ng(ut,v,S,f,i),Dh(yo(N,S));break e}}f=N=yo(N,S),vt!==4&&(vt=2),Ua===null?Ua=[f]:Ua.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var M=Xm(f,N,i);Em(f,M);break e;case 1:S=N;var V=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(gi===null||!gi.has(F)))){f.flags|=65536,i&=-i,f.lanes|=i;var Q=Zm(f,S,i);Em(f,Q);break e}}f=f.return}while(f!==null)}bg(a)}catch(oe){i=oe,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function Ng(){var n=Ru.current;return Ru.current=Tu,n===null?Tu:n}function Ed(){(vt===0||vt===3||vt===2)&&(vt=4),It===null||(cs&268435455)===0&&(xu&268435455)===0||vi(It,Ct)}function Vu(n,i){var a=Ve;Ve|=2;var c=Ng();(It!==n||Ct!==i)&&(br=null,ds(n,i));do try{bE();break}catch(d){Cg(n,d)}while(!0);if(Vh(),Ve=a,Ru.current=c,pt!==null)throw Error(t(261));return It=null,Ct=0,vt}function bE(){for(;pt!==null;)Dg(pt)}function VE(){for(;pt!==null&&!Wi();)Dg(pt)}function Dg(n){var i=Mg(n.alternate,n,hn);n.memoizedProps=n.pendingProps,i===null?bg(n):pt=i,dd.current=null}function bg(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=kE(a,i,hn),a!==null){pt=a;return}}else{if(a=RE(a,i),a!==null){a.flags&=32767,pt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vt=6,pt=null;return}}if(i=i.sibling,i!==null){pt=i;return}pt=i=n}while(i!==null);vt===0&&(vt=5)}function fs(n,i,a){var c=Pe,d=wn.transition;try{wn.transition=null,Pe=1,OE(n,i,a,c)}finally{wn.transition=d,Pe=c}return null}function OE(n,i,a,c){do Eo();while(yi!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(ah(n,f),n===It&&(pt=It=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Cu||(Cu=!0,Lg(Ki,function(){return Eo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=wn.transition,wn.transition=null;var v=Pe;Pe=1;var S=Ve;Ve|=4,dd.current=null,PE(n,a),Ig(a,n),tE(Eh),Ir=!!wh,Eh=wh=null,n.current=a,CE(a),vr(),Ve=S,Pe=v,wn.transition=f}else n.current=a;if(Cu&&(Cu=!1,yi=n,Nu=d),f=n.pendingLanes,f===0&&(gi=null),zl(a.stateNode),Jt(n,Ge()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Pu)throw Pu=!1,n=md,md=null,n;return(Nu&1)!==0&&n.tag!==0&&Eo(),f=n.pendingLanes,(f&1)!==0?n===gd?ja++:(ja=0,gd=n):ja=0,di(),null}function Eo(){if(yi!==null){var n=Kn(Nu),i=wn.transition,a=Pe;try{if(wn.transition=null,Pe=16>n?16:n,yi===null)var c=!1;else{if(n=yi,yi=null,Nu=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,re=n.current;re!==null;){var f=re,v=f.child;if((re.flags&16)!==0){var S=f.deletions;if(S!==null){for(var N=0;N<S.length;N++){var U=S[N];for(re=U;re!==null;){var W=re;switch(W.tag){case 0:case 11:case 15:La(8,W,f)}var K=W.child;if(K!==null)K.return=W,re=K;else for(;re!==null;){W=re;var H=W.sibling,te=W.return;if(_g(W),W===U){re=null;break}if(H!==null){H.return=te,re=H;break}re=te}}}var ie=f.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var ut=se.sibling;se.sibling=null,se=ut}while(se!==null)}}re=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,re=v;else e:for(;re!==null;){if(f=re,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:La(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,re=M;break e}re=f.return}}var V=n.current;for(re=V;re!==null;){v=re;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,re=F;else e:for(v=V;re!==null;){if(S=re,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:ku(9,S)}}catch(oe){rt(S,S.return,oe)}if(S===v){re=null;break e}var Q=S.sibling;if(Q!==null){Q.return=S.return,re=Q;break e}re=S.return}}if(Ve=d,di(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Gi,n)}catch{}c=!0}return c}finally{Pe=a,wn.transition=i}}return!1}function Vg(n,i,a){i=yo(a,i),i=Xm(n,i,1),n=pi(n,i,1),i=Wt(),n!==null&&(Xi(n,1,i),Jt(n,i))}function rt(n,i,a){if(n.tag===3)Vg(n,n,a);else for(;i!==null;){if(i.tag===3){Vg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gi===null||!gi.has(c))){n=yo(a,n),n=Zm(i,n,1),i=pi(i,n,1),n=Wt(),i!==null&&(Xi(i,1,n),Jt(i,n));break}}i=i.return}}function ME(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Wt(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(Ct&a)===a&&(vt===4||vt===3&&(Ct&130023424)===Ct&&500>Ge()-pd?ds(n,0):fd|=a),Jt(n,i)}function Og(n,i){i===0&&((n.mode&1)===0?i=1:(i=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var a=Wt();n=Cr(n,i),n!==null&&(Xi(n,i,a),Jt(n,a))}function LE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Og(n,a)}function FE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Og(n,a)}var Mg;Mg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kt.current)Qt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Qt=!1,AE(n,i,a);Qt=(n.flags&131072)!==0}else Qt=!1,Xe&&(i.flags&1048576)!==0&&pm(i,uu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Su(n,i),n=i.pendingProps;var d=lo(i,Ot.current);po(i,a),d=Kh(null,i,c,n,d,a);var f=Gh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gt(c)?(f=!0,ou(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Fh(i),d.updater=mu,i.stateNode=d,d._reactInternals=i,jh(i,c,n,a),i=nd(null,i,c,!0,f,a)):(i.tag=0,Xe&&f&&xh(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Su(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=jE(c),n=bn(c,n),d){case 0:i=td(null,i,c,n,a);break e;case 1:i=lg(null,i,c,n,a);break e;case 11:i=rg(null,i,c,n,a);break e;case 14:i=ig(null,i,c,bn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:bn(c,d),td(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:bn(c,d),lg(n,i,c,d,a);case 3:e:{if(ug(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,wm(n,i),pu(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=yo(Error(t(423)),i),i=cg(n,i,c,a,d);break e}else if(c!==d){d=yo(Error(t(424)),i),i=cg(n,i,c,a,d);break e}else for(cn=ui(i.stateNode.containerInfo.firstChild),un=i,Xe=!0,Dn=null,a=Pm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ho(),c===d){i=Dr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return Cm(i),n===null&&Nh(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Th(c,d)?v=null:f!==null&&Th(c,f)&&(i.flags|=32),ag(n,i),Ht(n,i,v,a),i.child;case 6:return n===null&&Nh(i),null;case 13:return hg(n,i,a);case 4:return zh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=mo(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:bn(c,d),rg(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,We(hu,c._currentValue),c._currentValue=v,f!==null)if(Nn(f.value,v)){if(f.children===d.children&&!Kt.current){i=Dr(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var S=f.dependencies;if(S!==null){v=f.child;for(var N=S.firstContext;N!==null;){if(N.context===c){if(f.tag===1){N=Nr(-1,a&-a),N.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var W=U.pending;W===null?N.next=N:(N.next=W.next,W.next=N),U.pending=N}}f.lanes|=a,N=f.alternate,N!==null&&(N.lanes|=a),Mh(f.return,a,i),S.lanes|=a;break}N=N.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Mh(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,po(i,a),d=_n(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=bn(c,i.pendingProps),d=bn(c.type,d),ig(n,i,c,d,a);case 15:return sg(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:bn(c,d),Su(n,i),i.tag=1,Gt(c)?(n=!0,ou(i)):n=!1,po(i,a),Am(i,c,d),jh(i,c,d,a),nd(null,i,c,!0,n,a);case 19:return fg(n,i,a);case 22:return og(n,i,a)}throw Error(t(156,i.tag))};function Lg(n,i){return ra(n,i)}function UE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,i,a,c){return new UE(n,i,a,c)}function Td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jE(n){if(typeof n=="function")return Td(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===ot)return 14}return 2}function wi(n,i){var a=n.alternate;return a===null?(a=En(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ou(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")Td(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case A:return ps(a.children,d,f,i);case T:v=8,d|=8;break;case I:return n=En(12,a,i,d|2),n.elementType=I,n.lanes=f,n;case R:return n=En(13,a,i,d),n.elementType=R,n.lanes=f,n;case $e:return n=En(19,a,i,d),n.elementType=$e,n.lanes=f,n;case Te:return Mu(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:v=10;break e;case P:v=9;break e;case O:v=11;break e;case ot:v=14;break e;case Ne:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=En(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function ps(n,i,a,c){return n=En(7,n,c,i),n.lanes=a,n}function Mu(n,i,a,c){return n=En(22,n,c,i),n.elementType=Te,n.lanes=a,n.stateNode={isHidden:!1},n}function Id(n,i,a){return n=En(6,n,null,i),n.lanes=a,n}function Sd(n,i,a){return i=En(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function zE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=la(0),this.expirationTimes=la(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ad(n,i,a,c,d,f,v,S,N){return n=new zE(n,i,a,S,N),i===1?(i=1,f===!0&&(i|=8)):i=0,f=En(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fh(f),n}function BE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Fg(n){if(!n)return hi;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return hm(n,a,i)}return i}function Ug(n,i,a,c,d,f,v,S,N){return n=Ad(a,c,!0,n,d,f,v,S,N),n.context=Fg(null),a=n.current,c=Wt(),d=_i(a),f=Nr(c,d),f.callback=i??null,pi(a,f,d),n.current.lanes=d,Xi(n,d,c),Jt(n,c),n}function Lu(n,i,a,c){var d=i.current,f=Wt(),v=_i(d);return a=Fg(a),i.context===null?i.context=a:i.pendingContext=a,i=Nr(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=pi(d,i,v),n!==null&&(Mn(n,d,v,f),fu(n,d,v)),v}function Fu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function kd(n,i){jg(n,i),(n=n.alternate)&&jg(n,i)}function $E(){return null}var zg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rd(n){this._internalRoot=n}Uu.prototype.render=Rd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Lu(n,i,null,null)},Uu.prototype.unmount=Rd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;hs(function(){Lu(null,n,null,null)}),i[kr]=null}};function Uu(n){this._internalRoot=n}Uu.prototype.unstable_scheduleHydration=function(n){if(n){var i=da();n={blockedOn:null,target:n,priority:i};for(var a=0;a<sn.length&&i!==0&&i<sn[a].priority;a++);sn.splice(a,0,n),a===0&&Ws(n)}};function xd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bg(){}function qE(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=Fu(v);f.call(U)}}var v=Ug(i,c,n,0,null,!1,!1,"",Bg);return n._reactRootContainer=v,n[kr]=v.current,Sa(n.nodeType===8?n.parentNode:n),hs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=Fu(N);S.call(U)}}var N=Ad(n,0,!1,null,null,!1,!1,"",Bg);return n._reactRootContainer=N,n[kr]=N.current,Sa(n.nodeType===8?n.parentNode:n),hs(function(){Lu(i,N,a,c)}),N}function zu(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var S=d;d=function(){var N=Fu(v);S.call(N)}}Lu(i,v,n,d)}else v=qE(a,i,n,d,c);return Fu(v)}ca=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Fe(i.pendingLanes);a!==0&&(ua(i,a|1),Jt(i,Ge()),(Ve&6)===0&&(wo=Ge()+500,di()))}break;case 13:hs(function(){var c=Cr(n,1);if(c!==null){var d=Wt();Mn(c,n,1,d)}}),kd(n,1)}},qs=function(n){if(n.tag===13){var i=Cr(n,134217728);if(i!==null){var a=Wt();Mn(i,n,134217728,a)}kd(n,134217728)}},ha=function(n){if(n.tag===13){var i=_i(n),a=Cr(n,i);if(a!==null){var c=Wt();Mn(a,n,i,c)}kd(n,i)}},da=function(){return Pe},fa=function(n,i){var a=Pe;try{return Pe=n,i()}finally{Pe=a}},gr=function(n,i,a){switch(i){case"input":if(Bi(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=iu(c);if(!d)throw Error(t(90));Go(c),Bi(c,d)}}}break;case"textarea":Pl(n,a);break;case"select":i=a.value,i!=null&&Rn(n,!!a.multiple,i,!1)}},Dl=vd,bl=hs;var HE={usingClientEntryPoint:!1,Events:[Ra,oo,iu,Xr,Zr,vd]},za={findFiberByHostInstance:rs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},WE={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Me.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=jl(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||$E,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{Gi=Bu.inject(WE),nn=Bu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HE,Xt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xd(i))throw Error(t(200));return BE(n,i,null,a)},Xt.createRoot=function(n,i){if(!xd(n))throw Error(t(299));var a=!1,c="",d=zg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ad(n,1,!1,null,null,a,!1,c,d),n[kr]=i.current,Sa(n.nodeType===8?n.parentNode:n),new Rd(i)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=jl(i),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return hs(n)},Xt.hydrate=function(n,i,a){if(!ju(i))throw Error(t(200));return zu(null,n,i,!0,a)},Xt.hydrateRoot=function(n,i,a){if(!xd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=zg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Ug(i,null,n,1,a??null,d,!1,f,v),n[kr]=i.current,Sa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Uu(i)},Xt.render=function(n,i,a){if(!ju(i))throw Error(t(200));return zu(null,n,i,!1,a)},Xt.unmountComponentAtNode=function(n){if(!ju(n))throw Error(t(40));return n._reactRootContainer?(hs(function(){zu(null,null,n,!1,function(){n._reactRootContainer=null,n[kr]=null})}),!0):!1},Xt.unstable_batchedUpdates=vd,Xt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ju(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return zu(n,i,a,!1,c)},Xt.version="18.2.0-next-9e3b772b8-20220608",Xt}var Yg;function eT(){if(Yg)return Nd.exports;Yg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nd.exports=ZE(),Nd.exports}var Jg;function tT(){if(Jg)return $u;Jg=1;var r=eT();return $u.createRoot=r.createRoot,$u.hydrateRoot=r.hydrateRoot,$u}var nT=tT();const rT=j_(nT),iT="modulepreload",sT=function(r){return"/"+r},Xg={},Rf=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let h=function(_){return Promise.all(_.map(E=>Promise.resolve(E).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),g=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));o=h(t.map(_=>{if(_=sT(_),_ in Xg)return;Xg[_]=!0;const E=_.endsWith(".css"),x=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${x}`))return;const b=document.createElement("link");if(b.rel=E?"stylesheet":iT,E||(b.as="script"),b.crossOrigin="",b.href=_,g&&b.setAttribute("nonce",g),document.head.appendChild(b),E)return new Promise((z,Y)=>{b.addEventListener("load",z),b.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${_}`)))})}))}function l(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return o.then(h=>{for(const m of h||[])m.status==="rejected"&&l(m.reason);return e().catch(l)})};var xo=(r=>(r.ADMIN="ADMIN",r.MEMBER="MEMBER",r.PENDING="PENDING",r))(xo||{});const oT=r=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.598m-1.5-6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"})}),aT=()=>{const{currentUser:r,logout:e}=j0();return k.jsx("header",{className:"sticky top-0 z-[60] bg-[#030712]/80 backdrop-blur-2xl border-b border-white/5 transition-all duration-500 py-6",children:k.jsx("div",{className:"container-fluid mx-auto px-6 sm:px-10 lg:px-12",children:k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("div",{className:"flex items-center space-x-6 group cursor-pointer",children:[k.jsxs("div",{className:"relative",children:[k.jsx("div",{className:"absolute -inset-2 bg-orange-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"}),k.jsx(oT,{className:"h-12 w-12 text-orange-600 relative z-10 transition-transform group-hover:scale-110"})]}),k.jsxs("h1",{className:"text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none",children:["Union ",k.jsx("span",{className:"text-orange-600",children:"Connect"})]})]}),k.jsx("div",{className:"flex items-center space-x-6 md:space-x-10 animate-fade-in",children:r&&k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"hidden sm:flex flex-col items-end",children:[k.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-1",children:"Authenticated Personnel"}),k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx("span",{className:"text-lg font-black text-white uppercase tracking-tight",children:r.employeeName}),k.jsx("span",{className:`text-[9px] uppercase tracking-[0.4em] font-black px-5 py-1.5 rounded-full ${r.role===xo.ADMIN?"bg-orange-600 text-white shadow-[0_10px_20px_rgba(234,88,12,0.3)]":"bg-green-600/10 text-green-500 border border-green-500/20 shadow-xl"}`,children:r.role})]})]}),k.jsx("button",{onClick:e,className:"px-10 py-4 text-[10px] font-black uppercase tracking-[0.5em] text-white bg-transparent border border-white/10 rounded-2xl hover:bg-white hover:text-black hover:border-white transition-all shadow-2xl active:scale-95",children:"Logoff"})]})})]})})})},Xa=r=>k.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:[k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 100 12h-3a7.5 7.5 0 00-7.5-7.5h1.5v-1.5a7.5 7.5 0 007.5-7.5h3z"}),k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-1.875a1.125 1.125 0 01-1.125-1.125v-1.5a1.125 1.125 0 011.125-1.125h1.875m.75 4.5l.375-.375a1.875 1.875 0 000-2.65l-3.375-3.375a1.875 1.875 0 00-2.65 0l-.375.375m.75 4.5l-4.5-4.5"})]}),Xd=({className:r="w-6 h-6"})=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:r,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"})}),lT=r=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),uT=r=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...r,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3.375 3.375 0 0119.5 7.372l-10.94 10.94a2.25 2.25 0 01-3.182-3.182l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a1.125 1.125 0 001.591 1.591l10.94-10.94a2.25 2.25 0 00-3.182-3.182L5.625 15.375a3.375 3.375 0 004.773 4.773l7.693-7.693a.75.75 0 011.06-1.06z"})}),uC=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"],cT=[{id:1,name:"S.K. Gupta",post:"President"},{id:2,name:"Mukesh Kumar",post:"Vice President"},{id:3,name:"Sudhir",post:"General Secretary"},{id:4,name:"Ravinder Kumar",post:"Joint Secretary Industrial Dispute"},{id:5,name:"Manoj Katiyar",post:"Joint Secretary Welfare"},{id:6,name:"Krishna Kumar",post:"Treasurer"},{id:7,name:"Manoj Nandal",post:"Assistant Joint Secretary Industrial Dispute"},{id:8,name:"Pradeep Kumar",post:"Assistant Joint Secretary Welfare"},{id:9,name:"Debabrata Sahu",post:"Executive Member"},{id:10,name:"Sandeep Kumar",post:"Executive Member"},{id:11,name:"Mohit Kajal",post:"Executive Member"},{id:12,name:"Naveen Kumar",post:"Executive Member"},{id:13,name:"Pardeep",post:"Executive Member"}],Ln={hindiName:"इंडियन ऑयल पानीपत रिफ़ाइनरी एम्पलाईज यूनियन",englishName:"INDIAN OIL PANIPAT REFINERY EMPLOYEES UNION (IPREU)",address:"पानीपत रिफ़ाइनरी एवं पेट्रोकेमिकल कॉम्प्लेक्स, पोस्ट ऑफिस: पानीपत रिफ़ाइनरी, बहोली, पानीपत-132140 (हरियाणा)",phones:["9034084033","9416658215"],email:"PRIPREU@INDIANOIL.IN",affiliation:"भारतीय मजदूर संघ (बी.एम.एस. से सम्बद्ध)",regdNo:"1542"},B_=()=>k.jsxs("div",{className:"flex flex-col items-center gap-4 py-8 lg:py-16",children:[k.jsxs("div",{className:"relative group",children:[k.jsx("div",{className:"absolute -inset-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000"}),k.jsxs("div",{className:"relative px-12 py-8 bg-[#030712] border border-white/5 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.8)] flex flex-col items-center transition-all hover:border-orange-600/40 max-w-xl",children:[k.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 px-6 py-2 rounded-full shadow-2xl",children:k.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-white",children:"Official Bureau Identity"})}),k.jsxs("h4",{className:"text-xl md:text-2xl font-black tracking-tighter text-center leading-tight mt-4",children:[k.jsx("span",{className:"text-slate-500 uppercase tracking-widest text-[10px] block mb-4",children:"Strategic Design & Deployment"}),k.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500 uppercase drop-shadow-sm block mb-2",children:"Mr. NAVEEN KUMAR"})]}),k.jsxs("div",{className:"mt-6 flex items-center gap-4 bg-orange-600/10 px-8 py-3 rounded-2xl border border-orange-600/20",children:[k.jsx("div",{className:"w-2.5 h-2.5 bg-orange-600 rounded-full animate-pulse shadow-[0_0_10px_#ea580c]"}),k.jsx("p",{className:"text-[10px] font-black text-orange-600 uppercase tracking-[0.5em]",children:"EXECUTIVE MEMBER · IPREU"})]})]})]}),k.jsxs("div",{className:"flex items-center gap-4 mt-4 opacity-40",children:[k.jsx("span",{className:"h-[1px] w-20 bg-gradient-to-r from-transparent via-slate-500 to-transparent"}),k.jsx("span",{className:"text-[9px] text-slate-500 font-black uppercase tracking-[0.6em]",children:"Secure Premium Nexus"}),k.jsx("span",{className:"h-[1px] w-20 bg-gradient-to-r from-transparent via-slate-500 to-transparent"})]})]}),hT=({name:r,post:e})=>k.jsxs("div",{className:"p-8 rounded-[2.5rem] border transition-all duration-500 bg-[#090E1A] border-white/5 shadow-2xl hover:border-orange-600 group relative overflow-hidden",children:[k.jsx("div",{className:"absolute -right-4 -top-4 w-24 h-24 bg-orange-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"}),k.jsxs("div",{className:"flex flex-col items-start gap-6 relative z-10",children:[k.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black bg-zinc-950 text-orange-600 shadow-2xl border border-white/5 transition-transform group-hover:rotate-12 group-hover:scale-110 duration-500",children:r.split(" ").map(t=>t[0]).join("").substring(0,2)}),k.jsxs("div",{children:[k.jsx("p",{className:"font-black text-2xl text-white tracking-tighter leading-none mb-2 uppercase",children:r}),k.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-orange-600 font-bold",children:e})]})]})]}),dT=({onLoginClick:r})=>{const{calendarEvents:e,announcements:t,users:s,grievances:o}=j0(),l=e.filter(m=>new Date(m.date)>=new Date(new Date().setHours(0,0,0,0))).sort((m,g)=>m.date.localeCompare(g.date)).slice(0,3),h=t.slice(0,3);return k.jsxs("div",{className:"min-h-screen flex flex-col justify-between -mt-4 md:-mt-8 -mx-4 md:-mx-8 bg-[#030712]",children:[k.jsxs("section",{className:"relative overflow-hidden bg-[#030712] text-white py-32 md:py-48 px-6 lg:px-12 flex items-center justify-center border-b border-white/5",children:[k.jsx("div",{className:"absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-orange-600/5 to-transparent"}),k.jsx("div",{className:"absolute top-1/4 left-0 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[150px] -ml-96"}),k.jsx("div",{className:"absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -mr-96"}),k.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto text-center space-y-12",children:[k.jsxs("div",{className:"inline-flex flex-col items-center gap-10",children:[k.jsxs("div",{className:"px-6 py-2.5 rounded-full bg-zinc-950 text-[10px] font-black text-orange-600 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-4 uppercase tracking-[0.4em] border border-white/5",children:[k.jsx("span",{className:"w-2.5 h-2.5 bg-orange-600 rounded-full animate-pulse shadow-[0_0_15px_#ea580c]"}),"Strategic Nexus Gateway"]}),k.jsx("h2",{className:"text-4xl md:text-6xl font-black text-white tracking-tighter leading-none transition-all hover:scale-[1.02] duration-500 uppercase",children:Ln.hindiName})]}),k.jsxs("h1",{className:"text-6xl md:text-9xl font-black tracking-tight leading-[0.85] uppercase",children:["Strength Through ",k.jsx("br",{})," ",k.jsx("span",{className:"text-orange-600 underline decoration-white/20 decoration-8 underline-offset-8",children:"Unity & Intel"})]}),k.jsxs("p",{className:"text-2xl md:text-3xl text-slate-400 max-w-5xl mx-auto font-black uppercase tracking-tight leading-normal border-l-[12px] border-orange-600 pl-10 text-left",children:["Bureau Operations: ",Ln.englishName,". ",k.jsx("br",{}),"Strategic Affiliation: ",k.jsx("span",{className:"text-white",children:Ln.affiliation}),"."]}),k.jsxs("div",{className:"pt-16 flex flex-col sm:flex-row items-center justify-center gap-8",children:[k.jsx("button",{onClick:r,className:"w-full sm:w-auto px-16 py-6 bg-orange-600 hover:bg-white hover:text-black text-white font-black rounded-[2rem] shadow-[0_35px_70px_-15px_rgba(234,88,12,0.4)] transition-all hover:-translate-y-2 active:scale-95 text-xl uppercase tracking-[0.3em]",children:"Establish Nexus"}),k.jsx("a",{href:"#leadership",className:"w-full sm:w-auto px-16 py-6 bg-zinc-950 hover:bg-zinc-900 text-white font-black rounded-[2rem] border border-white/10 transition-all hover:-translate-y-2 text-xl uppercase tracking-[0.3em] shadow-2xl",children:"Executive Body"})]})]})]}),k.jsx("section",{className:"py-24 bg-[#030712] relative z-20",children:k.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:k.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-24",children:[k.jsxs("div",{className:"space-y-12",children:[k.jsxs("div",{className:"flex items-center gap-6",children:[k.jsx("div",{className:"p-4 bg-zinc-950 text-orange-600 rounded-[1.5rem] shadow-2xl border border-white/5",children:k.jsx(Xd,{className:"w-8 h-8"})}),k.jsxs("div",{children:[k.jsx("h3",{className:"text-4xl font-black text-white uppercase tracking-tight leading-none",children:"Bureau Timeline"}),k.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mt-3",children:"Personnel Scheduling Operations"})]})]}),k.jsxs("div",{className:"space-y-6",children:[l.length>0?l.map(m=>k.jsxs("div",{className:"bg-[#090E1A] p-6 rounded-[2.5rem] border border-white/5 shadow-2xl flex items-center justify-between group hover:border-orange-500/50 transition-all duration-500",children:[k.jsxs("div",{className:"flex items-center gap-6",children:[k.jsxs("div",{className:"flex flex-col items-center justify-center bg-zinc-950 w-16 h-20 rounded-2xl border border-white/10 shadow-2xl text-white group-hover:scale-105 transition-transform border-b-4 border-b-orange-600",children:[k.jsx("span",{className:"text-[10px] text-orange-600 uppercase font-black tracking-widest mb-1",children:new Date(m.date).toLocaleString("default",{month:"short"})}),k.jsx("span",{className:"text-3xl font-black leading-none tracking-tighter",children:new Date(m.date).getDate()})]}),k.jsxs("div",{children:[k.jsx("h4",{className:"text-xl font-black text-white group-hover:text-orange-600 transition-colors uppercase leading-tight",children:m.title}),k.jsxs("div",{className:"flex items-center gap-4 text-[10px] text-slate-500 font-bold mt-2 uppercase tracking-widest",children:[k.jsxs("span",{className:"flex items-center gap-2 font-black",children:[k.jsx(lT,{className:"w-3.5 h-3.5 text-orange-600"})," ",m.startTime]}),m.location&&k.jsxs("span",{className:"flex items-center gap-2 font-black",children:[k.jsx("span",{className:"text-orange-600",children:"@"})," ",m.location]})]})]})]}),k.jsx("button",{onClick:r,className:"text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] px-6 py-2 bg-zinc-900 rounded-full border border-white/5 transition-all",children:"Details"})]},m.id)):k.jsxs("div",{className:"text-slate-500 py-16 text-center bg-zinc-950 rounded-[3rem] border border-dashed border-white/5 flex flex-col items-center gap-4",children:[k.jsx(Xd,{className:"w-10 h-10 opacity-20"}),k.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.4em]",children:"Operations Timeline Clear"})]}),k.jsx("p",{className:"text-center pt-6",children:k.jsx("button",{onClick:r,className:"text-[11px] font-black text-orange-600 hover:text-white uppercase tracking-[0.3em] transition-all underline decoration-orange-600 decoration-4 underline-offset-8",children:"Establish Full Timeline →"})})]})]}),k.jsxs("div",{className:"space-y-12",children:[k.jsxs("div",{className:"flex items-center gap-6",children:[k.jsx("div",{className:"p-4 bg-zinc-950 text-orange-600 rounded-[1.5rem] shadow-2xl border border-white/5",children:k.jsx(Xa,{className:"w-8 h-8"})}),k.jsxs("div",{children:[k.jsx("h3",{className:"text-4xl font-black text-white uppercase tracking-tight leading-none",children:"Bureau Intel"}),k.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mt-3",children:"Active Directives & Circulars"})]})]}),k.jsxs("div",{className:"space-y-6",children:[h.length>0?h.map(m=>k.jsxs("div",{className:"bg-[#090E1A] p-8 rounded-[3rem] border border-white/5 shadow-2xl transition-all hover:border-orange-600 group relative overflow-hidden",children:[k.jsx("div",{className:"bg-orange-600/5 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"}),k.jsxs("div",{className:"relative z-10",children:[k.jsxs("div",{className:"flex justify-between items-start mb-6",children:[k.jsx("h4",{className:"text-2xl font-black text-white line-clamp-1 uppercase tracking-tight group-hover:text-orange-600 transition-colors leading-none",children:m.title}),k.jsx("span",{className:"text-[10px] bg-orange-600 text-white px-4 py-1 rounded-full font-black uppercase tracking-widest border border-orange-500 shadow-2xl",children:"Classified"})]}),k.jsxs("p",{className:"text-sm text-slate-400 line-clamp-2 mb-6 leading-relaxed font-bold italic",children:['"',m.content,'"']}),k.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[k.jsx("span",{className:"text-[9px] text-slate-600 font-black uppercase tracking-widest",children:new Date(m.createdAt).toLocaleDateString()}),m.attachment&&k.jsxs("button",{onClick:r,className:"flex items-center gap-3 text-[10px] font-black text-orange-600 hover:text-white uppercase tracking-widest transition-all",children:[k.jsx(uT,{className:"w-4 h-4"}),"Retrieve Dossier"]})]})]})]},m.id)):k.jsxs("div",{className:"text-slate-500 py-16 text-center bg-zinc-950 rounded-[3rem] border border-dashed border-white/5 flex flex-col items-center gap-4",children:[k.jsx(Xa,{className:"w-10 h-10 opacity-20"}),k.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.4em]",children:"Zero Intel Dispatches"})]}),k.jsx("p",{className:"text-center pt-6",children:k.jsx("button",{onClick:r,className:"text-[11px] font-black text-orange-600 hover:text-white uppercase tracking-[0.3em] transition-all underline decoration-orange-600 decoration-4 underline-offset-8",children:"Access Information Hub →"})})]})]})]})})}),k.jsx("section",{id:"leadership",className:"py-24 px-6 lg:px-12 bg-[#030712] relative z-20",children:k.jsxs("div",{className:"max-w-7xl mx-auto",children:[k.jsxs("div",{className:"text-center mb-24",children:[k.jsx("h2",{className:"text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tight leading-none",children:"Executive Bureau"}),k.jsx("div",{className:"w-32 h-2 bg-orange-600 mx-auto rounded-full mb-10 shadow-[0_0_20px_#ea580c]"}),k.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] max-w-3xl mx-auto",children:"Strategic Leadership & Personnel Welfare Oversight"})]}),k.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",children:cT.map(m=>k.jsx(hT,{name:m.name,post:m.post},m.id))})]})}),k.jsxs("section",{className:"py-32 bg-[#030712] text-white overflow-hidden relative border-y border-white/5",children:[k.jsx("div",{className:"absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[200px] -mr-96 -mt-96"}),k.jsx("div",{className:"absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[200px] -ml-96 -mb-96"}),k.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 relative z-10",children:k.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-24 text-center",children:[k.jsxs("div",{className:"space-y-8 group",children:[k.jsx("p",{className:"text-7xl md:text-9xl font-black text-orange-600 transition-transform group-hover:scale-110 duration-700 leading-none",children:s.filter(m=>m.role!=="PENDING").length||1}),k.jsx("p",{className:"text-[11px] font-black text-slate-500 uppercase tracking-[0.5em]",children:"Active Personnel"})]}),k.jsxs("div",{className:"space-y-8 group",children:[k.jsx("p",{className:"text-7xl md:text-9xl font-black text-white transition-transform group-hover:scale-110 duration-700 leading-none",children:t.length}),k.jsx("p",{className:"text-[11px] font-black text-slate-500 uppercase tracking-[0.5em]",children:"Directives Logged"})]}),k.jsxs("div",{className:"space-y-8 group",children:[k.jsx("p",{className:"text-7xl md:text-9xl font-black text-[#10B981] transition-transform group-hover:scale-110 duration-700 leading-none",children:o.filter(m=>m.status==="RESOLVED").length}),k.jsx("p",{className:"text-[11px] font-black text-slate-500 uppercase tracking-[0.5em]",children:"Success Vectors"})]}),k.jsxs("div",{className:"space-y-8 group",children:[k.jsx("p",{className:"text-7xl md:text-9xl font-black text-white transition-transform group-hover:scale-110 duration-700 leading-none truncate",children:Ln.regdNo.split("/")[2]||"PSU"}),k.jsx("p",{className:"text-[11px] font-black text-slate-500 uppercase tracking-[0.5em]",children:"Bureau Identity"})]})]})})]}),k.jsxs("section",{className:"py-32 px-6 lg:px-12 bg-[#030712] relative z-20",children:[k.jsxs("div",{className:"max-w-7xl mx-auto text-center mb-24",children:[k.jsx("h2",{className:"text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tight leading-none",children:"Personnel Induction"}),k.jsx("p",{className:"text-[11px] font-black text-slate-500 uppercase tracking-[0.5em]",children:"Standard Operating Protocol for New Members"})]}),k.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 relative",children:[k.jsx("div",{className:"absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block -z-10"}),k.jsxs("div",{className:"bg-[#090E1A] p-12 rounded-[3.5rem] border border-white/5 text-center space-y-8 shadow-2xl hover:border-orange-600/50 transition-all duration-500 group",children:[k.jsx("div",{className:"w-16 h-16 bg-zinc-950 text-orange-600 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto shadow-2xl border border-white/10 group-hover:rotate-12 transition-transform",children:"1"}),k.jsx("h4",{className:"font-black text-2xl text-white uppercase tracking-tight leading-none",children:"Dossier Submission"}),k.jsx("p",{className:"text-sm text-slate-500 leading-relaxed font-bold italic",children:"Initialize Personnel Entry via secure digital registration platform."})]}),k.jsxs("div",{className:"bg-zinc-950 p-12 rounded-[3.5rem] border border-white/10 text-center space-y-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] scale-110 group relative overflow-hidden",children:[k.jsx("div",{className:"absolute inset-0 bg-orange-600/5"}),k.jsx("div",{className:"relative z-10 w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl mx-auto shadow-[0_0_30px_rgba(234,88,12,0.4)] group-hover:scale-110 transition-transform",children:"2"}),k.jsx("h4",{className:"relative z-10 font-black text-2xl text-white uppercase tracking-tight leading-none",children:"Background Audit"}),k.jsx("p",{className:"relative z-10 text-sm text-slate-400 leading-relaxed font-black uppercase tracking-tighter",children:"Executive Bureau conducts multi-vector verification of personnel credentials."})]}),k.jsxs("div",{className:"bg-[#090E1A] p-12 rounded-[3.5rem] border border-white/5 text-center space-y-8 shadow-2xl hover:border-[#10B981]/50 transition-all duration-500 group",children:[k.jsx("div",{className:"w-16 h-16 bg-zinc-950 text-[#10B981] rounded-2xl flex items-center justify-center font-black text-2xl mx-auto shadow-2xl border border-white/10 group-hover:-rotate-12 transition-transform",children:"3"}),k.jsx("h4",{className:"font-black text-2xl text-white uppercase tracking-tight leading-none",children:"Nexus Activation"}),k.jsx("p",{className:"text-sm text-slate-500 leading-relaxed font-bold italic",children:"Personnel clearance issued with Digital Authenticator Access."})]})]}),k.jsx("div",{className:"mt-24 text-center",children:k.jsx("button",{onClick:r,className:"px-20 py-6 bg-orange-600 text-white font-black rounded-[2.5rem] hover:bg-white hover:text-black transition-all shadow-[0_30px_60px_-15px_rgba(234,88,12,0.6)] hover:-translate-y-2 uppercase tracking-[0.5em] text-lg",children:"Initialize Induction"})})]}),k.jsxs("footer",{className:"bg-[#030712] text-slate-500 py-32 px-6 lg:px-12 border-t border-white/5 relative z-20",children:[k.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-24",children:[k.jsxs("div",{className:"md:col-span-2 space-y-12",children:[k.jsx("h4",{className:"text-5xl font-black text-white tracking-tighter uppercase leading-none",children:Ln.englishName}),k.jsx("p",{className:"text-xl text-orange-600 font-black uppercase tracking-tight mb-8",children:"Bureau Network Terminal"}),k.jsx("p",{className:"text-sm leading-relaxed max-w-md font-bold italic text-slate-400",children:Ln.address}),k.jsxs("div",{className:"pt-8 space-y-4 text-[11px] font-black uppercase tracking-[0.3em]",children:[k.jsxs("p",{className:"flex items-center gap-4",children:[k.jsx("span",{className:"text-orange-600",children:"COMMS SECURE:"})," ",Ln.phones.join(" / ")]}),k.jsxs("p",{className:"flex items-center gap-4",children:[k.jsx("span",{className:"text-orange-600",children:"DIRECT LINE:"})," ",k.jsx("a",{href:`mailto:${Ln.email}`,className:"text-white hover:text-orange-600 transition-colors uppercase",children:Ln.email})]})]})]}),k.jsxs("div",{children:[k.jsx("h5",{className:"text-white font-black mb-10 uppercase text-[10px] tracking-[0.5em]",children:"Registry Dossier"}),k.jsxs("ul",{className:"space-y-6 text-[10px] font-black uppercase tracking-widest text-slate-500",children:[k.jsxs("li",{className:"flex items-center gap-4",children:[k.jsx("span",{className:"w-2 h-2 bg-zinc-800 rounded-full"})," Affiliation: ",Ln.affiliation]}),k.jsxs("li",{className:"flex items-center gap-4",children:[k.jsx("span",{className:"w-2 h-2 bg-zinc-800 rounded-full"})," Internal Reg: ",Ln.regdNo]}),k.jsxs("li",{className:"flex items-center gap-4",children:[k.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_15px_#10b981]"})," Sector 15: Operational"]})]})]}),k.jsxs("div",{children:[k.jsx("h5",{className:"text-white font-black mb-10 uppercase text-[10px] tracking-[0.5em]",children:"Sector Access"}),k.jsxs("ul",{className:"space-y-6 text-[10px] font-black uppercase tracking-widest text-slate-500",children:[k.jsx("li",{children:k.jsx("button",{onClick:r,className:"text-white hover:text-orange-600 transition-colors",children:"Personnel Login"})}),k.jsx("li",{children:k.jsx("a",{href:"#leadership",className:"text-white hover:text-orange-600 transition-colors",children:"Executive Bureau"})}),k.jsx("li",{children:k.jsx("button",{onClick:r,className:"text-white hover:text-orange-600 transition-colors",children:"Grievance Uplink"})})]})]})]}),k.jsxs("div",{className:"max-w-7xl mx-auto mt-24 pt-16 border-t border-white/5 flex flex-col items-center gap-12",children:[k.jsx(B_,{}),k.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center w-full gap-8 text-[10px] uppercase font-black tracking-[0.6em] text-slate-600",children:[k.jsxs("p",{children:["© ",new Date().getFullYear()," IPREU BUREAU. RESTRICTED NETWORK."]}),k.jsx("p",{className:"text-orange-600 px-8 py-2 bg-orange-600/5 rounded-full border border-orange-600/20 shadow-[0_0_20px_rgba(234,88,12,0.1)]",children:"Personnel Nexus Interface"})]})]})]})]})},Zg=({className:r="w-6 h-6"})=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:r,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})}),fT=({className:r="w-6 h-6"})=>k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:r,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"})}),pT=({activeTab:r,setActiveTab:e,role:t})=>{const s=t==="ADMIN"?[{id:"overview",label:"Home",icon:Zg},{id:"announcements",label:"Post",icon:Xa},{id:"members",label:"Users",icon:fT},{id:"grievances",label:"Inbox",icon:Xa}]:[{id:"dashboard",label:"Home",icon:Zg},{id:"calendar",label:"Events",icon:Xd},{id:"grievances",label:"Secure",icon:Xa}];return k.jsxs("nav",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#090E1A]/90 backdrop-blur-3xl border border-white/5 px-10 py-6 flex justify-around items-center z-[70] lg:hidden safe-area-bottom rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.8)] w-[90%] max-w-lg",children:[k.jsx("div",{className:"absolute -inset-1 bg-orange-600/5 blur-3xl opacity-50 rounded-full pointer-events-none"}),s.map(o=>{const l=o.icon,h=r===o.id;return k.jsxs("button",{onClick:()=>{e(o.id),window.scrollTo({top:0,behavior:"smooth"})},className:`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-500 relative ${h?"text-orange-600 scale-115":"text-slate-700 hover:text-white"}`,"aria-label":o.label,children:[h&&k.jsx("div",{className:"absolute -inset-4 bg-orange-600/10 rounded-full blur-2xl opacity-50"}),k.jsx(l,{className:`w-8 h-8 relative z-10 transition-transform ${h?"fill-current":"stroke-current"}`}),k.jsx("span",{className:`text-[10px] font-black uppercase tracking-[0.4em] relative z-10 ${h?"opacity-100":"opacity-40"}`,children:o.label})]},o.id)})]})},mT=()=>{};var ey={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},gT=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,x=(l&3)<<4|m>>4;let b=(m&15)<<2|_>>6,z=_&63;g||(z=64,h||(b=64)),s.push(t[E],t[x],t[b],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray($_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):gT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const x=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||m==null||_==null||x==null)throw new yT;const b=l<<2|m>>4;if(s.push(b),_!==64){const z=m<<4&240|_>>2;if(s.push(z),x!==64){const Y=_<<6&192|x;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class yT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _T=function(r){const e=$_(r);return q_.encodeByteArray(e,!0)},hc=function(r){return _T(r).replace(/\./g,"")},H_=function(r){try{return q_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wT=()=>vT().__FIREBASE_DEFAULTS__,ET=()=>{if(typeof process>"u"||typeof ey>"u")return;const r=ey.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},TT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&H_(r[1]);return e&&JSON.parse(e)},bc=()=>{try{return mT()||wT()||ET()||TT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},W_=r=>{var e,t;return(t=(e=bc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},IT=r=>{const e=W_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},K_=()=>{var r;return(r=bc())==null?void 0:r.config},G_=r=>{var e;return(e=bc())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function AT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[hc(JSON.stringify(t)),hc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function RT(){var e;const r=(e=bc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function CT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NT(){const r=qt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function DT(){return!RT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Q_(){try{return typeof indexedDB=="object"}catch{return!1}}function Y_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function bT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="FirebaseError";class mr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=VT,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?OT(l,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new mr(o,m,s)}}function OT(r,e){return r.replace(MT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const MT=/\{\$([^}]+)}/g;function LT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ws(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(ty(l)&&ty(h)){if(!ws(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function ty(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Wa(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ka(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function FT(r,e){const t=new UT(r,e);return t.subscribe.bind(t)}class UT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");jT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Vd),o.error===void 0&&(o.error=Vd),o.complete===void 0&&(o.complete=Vd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Vd(){}/**
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
 */function ht(r){return r&&r._delegate?r._delegate:r}/**
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
 */function yl(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function J_(r){return(await fetch(r,{credentials:"include"})).ok}class jn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class zT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ST;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($T(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:BT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BT(r){return r===ms?void 0:r}function $T(r){return r.instantiationMode==="EAGER"}/**
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
 */class qT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ae||(Ae={}));const HT={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},WT=Ae.INFO,KT={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},GT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=KT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xf{constructor(e){this.name=e,this._logLevel=WT,this._logHandler=GT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const QT=(r,e)=>e.some(t=>r instanceof t);let ny,ry;function YT(){return ny||(ny=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JT(){return ry||(ry=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X_=new WeakMap,Zd=new WeakMap,Z_=new WeakMap,Od=new WeakMap,Pf=new WeakMap;function XT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Lr(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&X_.set(t,r)}).catch(()=>{}),Pf.set(e,r),e}function ZT(r){if(Zd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Zd.set(r,e)}let ef={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Zd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Z_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lr(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function eI(r){ef=r(ef)}function tI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Md(this),e,...t);return Z_.set(s,e.sort?e.sort():[e]),Lr(s)}:JT().includes(r)?function(...e){return r.apply(Md(this),e),Lr(X_.get(this))}:function(...e){return Lr(r.apply(Md(this),e))}}function nI(r){return typeof r=="function"?tI(r):(r instanceof IDBTransaction&&ZT(r),QT(r,YT())?new Proxy(r,ef):r)}function Lr(r){if(r instanceof IDBRequest)return XT(r);if(Od.has(r))return Od.get(r);const e=nI(r);return e!==r&&(Od.set(r,e),Pf.set(e,r)),e}const Md=r=>Pf.get(r);function Vc(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),m=Lr(h);return s&&h.addEventListener("upgradeneeded",g=>{s(Lr(h.result),g.oldVersion,g.newVersion,Lr(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}function Ld(r,{blocked:e}={}){const t=indexedDB.deleteDatabase(r);return e&&t.addEventListener("blocked",s=>e(s.oldVersion,s)),Lr(t).then(()=>{})}const rI=["get","getKey","getAll","getAllKeys","count"],iI=["put","add","delete","clear"],Fd=new Map;function iy(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Fd.get(e))return Fd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=iI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||rI.includes(t)))return;const l=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return Fd.set(e,l),l}eI(r=>({...r,get:(e,t,s)=>iy(e,t)||r.get(e,t,s),has:(e,t)=>!!iy(e,t)||r.has(e,t)}));/**
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
 */class sI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function oI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tf="@firebase/app",sy="0.14.10";/**
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
 */const jr=new xf("@firebase/app"),aI="@firebase/app-compat",lI="@firebase/analytics-compat",uI="@firebase/analytics",cI="@firebase/app-check-compat",hI="@firebase/app-check",dI="@firebase/auth",fI="@firebase/auth-compat",pI="@firebase/database",mI="@firebase/data-connect",gI="@firebase/database-compat",yI="@firebase/functions",_I="@firebase/functions-compat",vI="@firebase/installations",wI="@firebase/installations-compat",EI="@firebase/messaging",TI="@firebase/messaging-compat",II="@firebase/performance",SI="@firebase/performance-compat",AI="@firebase/remote-config",kI="@firebase/remote-config-compat",RI="@firebase/storage",xI="@firebase/storage-compat",PI="@firebase/firestore",CI="@firebase/ai",NI="@firebase/firestore-compat",DI="firebase",bI="12.11.0";/**
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
 */const nf="[DEFAULT]",VI={[tf]:"fire-core",[aI]:"fire-core-compat",[uI]:"fire-analytics",[lI]:"fire-analytics-compat",[hI]:"fire-app-check",[cI]:"fire-app-check-compat",[dI]:"fire-auth",[fI]:"fire-auth-compat",[pI]:"fire-rtdb",[mI]:"fire-data-connect",[gI]:"fire-rtdb-compat",[yI]:"fire-fn",[_I]:"fire-fn-compat",[vI]:"fire-iid",[wI]:"fire-iid-compat",[EI]:"fire-fcm",[TI]:"fire-fcm-compat",[II]:"fire-perf",[SI]:"fire-perf-compat",[AI]:"fire-rc",[kI]:"fire-rc-compat",[RI]:"fire-gcs",[xI]:"fire-gcs-compat",[PI]:"fire-fst",[NI]:"fire-fst-compat",[CI]:"fire-vertex","fire-js":"fire-js",[DI]:"fire-js-all"};/**
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
 */const dc=new Map,OI=new Map,rf=new Map;function oy(r,e){try{r.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function fr(r){const e=r.name;if(rf.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;rf.set(e,r);for(const t of dc.values())oy(t,r);for(const t of OI.values())oy(t,r);return!0}function jo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function In(r){return r==null?!1:r.settings!==void 0}/**
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
 */const MI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pi=new Ps("app","Firebase",MI);/**
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
 */class LI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pi.create("app-deleted",{appName:this._name})}}/**
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
 */const zo=bI;function ev(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:nf,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Pi.create("bad-app-name",{appName:String(o)});if(t||(t=K_()),!t)throw Pi.create("no-options");const l=dc.get(o);if(l){if(ws(t,l.options)&&ws(s,l.config))return l;throw Pi.create("duplicate-app",{appName:o})}const h=new qT(o);for(const g of rf.values())h.addComponent(g);const m=new LI(t,s,h);return dc.set(o,m),m}function Cf(r=nf){const e=dc.get(r);if(!e&&r===nf&&K_())return ev();if(!e)throw Pi.create("no-app",{appName:r});return e}function An(r,e,t){let s=VI[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(h.join(" "));return}fr(new jn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const FI="firebase-heartbeat-database",UI=1,il="firebase-heartbeat-store";let Ud=null;function tv(){return Ud||(Ud=Vc(FI,UI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(il)}catch(t){console.warn(t)}}}}).catch(r=>{throw Pi.create("idb-open",{originalErrorMessage:r.message})})),Ud}async function jI(r){try{const t=(await tv()).transaction(il),s=await t.objectStore(il).get(nv(r));return await t.done,s}catch(e){if(e instanceof mr)jr.warn(e.message);else{const t=Pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function ay(r,e){try{const s=(await tv()).transaction(il,"readwrite");await s.objectStore(il).put(e,nv(r)),await s.done}catch(t){if(t instanceof mr)jr.warn(t.message);else{const s=Pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(s.message)}}}function nv(r){return`${r.name}!${r.options.appId}`}/**
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
 */const zI=1024,BI=30;class $I{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ly();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>BI){const h=WI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){jr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ly(),{heartbeatsToSend:s,unsentEntries:o}=qI(this._heartbeatsCache.heartbeats),l=hc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jr.warn(t),""}}}function ly(){return new Date().toISOString().substring(0,10)}function qI(r,e=zI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),uy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),uy(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class HI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q_()?Y_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function uy(r){return hc(JSON.stringify({version:2,heartbeats:r})).length}function WI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function KI(r){fr(new jn("platform-logger",e=>new sI(e),"PRIVATE")),fr(new jn("heartbeat",e=>new $I(e),"PRIVATE")),An(tf,sy,r),An(tf,sy,"esm2020"),An("fire-js","")}KI("");var GI="firebase",QI="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(GI,QI,"app");function rv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YI=rv,iv=new Ps("auth","Firebase",rv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new xf("@firebase/auth");function JI(r,...e){fc.logLevel<=Ae.WARN&&fc.warn(`Auth (${zo}): ${r}`,...e)}function Zu(r,...e){fc.logLevel<=Ae.ERROR&&fc.error(`Auth (${zo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(r,...e){throw Nf(r,...e)}function lr(r,...e){return Nf(r,...e)}function sv(r,e,t){const s={...YI(),[e]:t};return new Ps("auth","Firebase",s).create(e,{appName:r.name})}function Fr(r){return sv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return iv.create(r,...e)}function de(r,e,...t){if(!r)throw Nf(e,...t)}function Or(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Zu(e),new Error(e)}function zr(r,e){r||Or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function XI(){return cy()==="http:"||cy()==="https:"}function cy(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XI()||PT()||"connection"in navigator)?navigator.onLine:!0}function eS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=kT()||CT()}get(){return ZI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(r,e){zr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rS=new _l(3e4,6e4);function Fi(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ui(r,e,t,s,o={}){return av(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const m=gl({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...l};return xT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&yl(r.emulatorConfig.host)&&(_.credentials="include"),ov.fetch()(await lv(r,r.config.apiHost,t,m),_)})}async function av(r,e,t){r._canInitEmulator=!1;const s={...tS,...e};try{const o=new sS(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw qu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw qu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw qu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw qu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw sv(r,E,_);zn(r,E)}}catch(o){if(o instanceof mr)throw o;zn(r,"network-request-failed",{message:String(o)})}}async function vl(r,e,t,s,o={}){const l=await Ui(r,e,t,s,o);return"mfaPendingCredential"in l&&zn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function lv(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Df(r.config,o):`${r.config.apiScheme}://${o}`;return nS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function iS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(lr(this.auth,"network-request-failed")),rS.get())})}}function qu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=lr(r,e,s);return o.customData._tokenResponse=t,o}function hy(r){return r!==void 0&&r.enterprise!==void 0}class oS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return iS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aS(r,e){return Ui(r,"GET","/v2/recaptchaConfig",Fi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(r,e){return Ui(r,"POST","/v1/accounts:delete",e)}async function pc(r,e){return Ui(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uS(r,e=!1){const t=ht(r),s=await t.getIdToken(e),o=bf(s);de(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Za(jd(o.auth_time)),issuedAtTime:Za(jd(o.iat)),expirationTime:Za(jd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function jd(r){return Number(r)*1e3}function bf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Zu("JWT malformed, contained fewer than 3 sections"),null;try{const o=H_(t);return o?JSON.parse(o):(Zu("Failed to decode base64 JWT payload"),null)}catch(o){return Zu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function dy(r){const e=bf(r);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof mr&&cS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function cS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Za(this.lastLoginAt),this.creationTime=Za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mc(r){var x;const e=r.auth,t=await r.getIdToken(),s=await sl(r,pc(e,{idToken:t}));de(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const l=(x=o.providerUserInfo)!=null&&x.length?uv(o.providerUserInfo):[],h=fS(r.providerData,l),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new of(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,E)}async function dS(r){const e=ht(r);await mc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fS(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function uv(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(r,e){const t=await av(r,{},async()=>{const s=gl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await lv(r,o,"/v1/token",`key=${l}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&yl(r.emulatorConfig.host)&&(g.credentials="include"),ov.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mS(r,e){return Ui(r,"POST","/v2/accounts:revokeToken",Fi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=dy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await pS(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Co;return s&&(de(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(de(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(de(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(r,e){de(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Fn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new hS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new of(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await sl(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uS(this,e)}reload(){return dS(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await mc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await sl(this,lS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:x,emailVerified:b,isAnonymous:z,providerData:Y,stsTokenManager:J}=t;de(x&&J,e,"internal-error");const G=Co.fromJSON(this.name,J);de(typeof x=="string",e,"internal-error"),Ti(s,e.name),Ti(o,e.name),de(typeof b=="boolean",e,"internal-error"),de(typeof z=="boolean",e,"internal-error"),Ti(l,e.name),Ti(h,e.name),Ti(m,e.name),Ti(g,e.name),Ti(_,e.name),Ti(E,e.name);const ge=new Fn({uid:x,auth:e,email:o,emailVerified:b,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:l,tenantId:m,stsTokenManager:G,createdAt:_,lastLoginAt:E});return Y&&Array.isArray(Y)&&(ge.providerData=Y.map(me=>({...me}))),g&&(ge._redirectEventId=g),ge}static async _fromIdTokenResponse(e,t,s=!1){const o=new Co;o.updateFromServerResponse(t);const l=new Fn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await mc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];de(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?uv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),m=new Co;m.updateFromIdToken(s);const g=new Fn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new of(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Map;function Mr(r){zr(r instanceof Function,"Expected a class definition");let e=fy.get(r);return e?(zr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,fy.set(r,e),e)}/**
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
 */class cv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cv.type="NONE";const py=cv;/**
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
 */function ec(r,e,t){return`firebase:${r}:${e}:${t}`}class No{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=ec(this.userKey,o.apiKey,l),this.fullPersistenceKey=ec("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await pc(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new No(Mr(py),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Mr(py);const h=ec(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let x;if(typeof E=="string"){const b=await pc(e,{idToken:E}).catch(()=>{});if(!b)break;x=await Fn._fromGetAccountInfoResponse(e,b,E)}else x=Fn._fromJSON(e,E);_!==l&&(m=x),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new No(l,e,s):(l=g[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new No(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gv(e))return"Blackberry";if(yv(e))return"Webos";if(dv(e))return"Safari";if((e.includes("chrome/")||fv(e))&&!e.includes("edge/"))return"Chrome";if(mv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hv(r=qt()){return/firefox\//i.test(r)}function dv(r=qt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fv(r=qt()){return/crios\//i.test(r)}function pv(r=qt()){return/iemobile/i.test(r)}function mv(r=qt()){return/android/i.test(r)}function gv(r=qt()){return/blackberry/i.test(r)}function yv(r=qt()){return/webos/i.test(r)}function Vf(r=qt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function gS(r=qt()){var e;return Vf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function yS(){return NT()&&document.documentMode===10}function _v(r=qt()){return Vf(r)||mv(r)||yv(r)||gv(r)||/windows phone/i.test(r)||pv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(r,e=[]){let t;switch(r){case"Browser":t=my(qt());break;case"Worker":t=`${my(qt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zo}/${s}`}/**
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
 */class _S{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,m)=>{try{const g=e(l);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function vS(r,e={}){return Ui(r,"GET","/v2/passwordPolicy",Fi(r,e))}/**
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
 */const wS=6;class ES{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??wS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gy(this),this.idTokenSubscription=new gy(this),this.beforeStateQueue=new _S(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pc(this,{idToken:e}),s=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(In(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(Fr(this));const t=e?ht(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vS(this),t=new ES(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await mS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(In(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&JI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Cs(r){return ht(r)}class gy{constructor(e){this.auth=e,this.observer=null,this.addObserver=FT(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IS(r){Oc=r}function wv(r){return Oc.loadJS(r)}function SS(){return Oc.recaptchaEnterpriseScript}function AS(){return Oc.gapiScript}function kS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class RS{constructor(){this.enterprise=new xS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class xS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const PS="recaptcha-enterprise",Ev="NO_RECAPTCHA";class CS{constructor(e){this.type=PS,this.auth=Cs(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,m)=>{aS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new oS(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(l,h,m){const g=window.grecaptcha;hy(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(Ev)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(m=>{if(!t&&hy(window.grecaptcha))o(m,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=SS();g.length!==0&&(g+=m),wv(g).then(()=>{o(m,l,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function yy(r,e,t,s=!1,o=!1){const l=new CS(r);let h;if(o)h=Ev;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function af(r,e,t,s,o){var l;if((l=r._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await yy(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await yy(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(r,e){const t=jo(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ws(l,e??{}))return o;zn(o,"already-initialized")}return t.initialize({options:e})}function DS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Mr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function bS(r,e,t){const s=Cs(r);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Tv(e),{host:h,port:m}=VS(e),g=m===null?"":`:${m}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(ws(_,s.config.emulator)&&ws(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,yl(h)?J_(`${l}//${h}${g}`):OS()}function Tv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function VS(r){const e=Tv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:_y(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:_y(h)}}}function _y(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function OS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function MS(r,e){return Ui(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(r,e){return vl(r,"POST","/v1/accounts:signInWithPassword",Fi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(r,e){return vl(r,"POST","/v1/accounts:signInWithEmailLink",Fi(r,e))}async function US(r,e){return vl(r,"POST","/v1/accounts:signInWithEmailLink",Fi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends Of{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ol(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ol(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return af(e,t,"signInWithPassword",LS);case"emailLink":return FS(e,{email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return af(e,s,"signUpPassword",MS);case"emailLink":return US(e,{idToken:t,email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(r,e){return vl(r,"POST","/v1/accounts:signInWithIdp",Fi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="http://localhost";class Es extends Of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new Es(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Do(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Do(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Do(e,t)}buildRequest(){const e={requestUri:jS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BS(r){const e=Wa(Ka(r)).link,t=e?Wa(Ka(e)).deep_link_id:null,s=Wa(Ka(r)).deep_link_id;return(s?Wa(Ka(s)).link:null)||s||t||e||r}class Mf{constructor(e){const t=Wa(Ka(e)),s=t.apiKey??null,o=t.oobCode??null,l=zS(t.mode??null);de(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=BS(e);try{return new Mf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.providerId=Bo.PROVIDER_ID}static credential(e,t){return ol._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Mf.parseLink(t);return de(s,"argument-error"),ol._fromEmailAndCode(e,s.code,s.tenantId)}}Bo.PROVIDER_ID="password";Bo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wl extends Iv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends wl{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Es._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Si.credential(t,s)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends wl{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.GITHUB_SIGN_IN_METHOD="github.com";Ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends wl{constructor(){super("twitter.com")}static credential(e,t){return Es._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ki.credential(t,s)}catch{return null}}}ki.TWITTER_SIGN_IN_METHOD="twitter.com";ki.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(r,e){return vl(r,"POST","/v1/accounts:signUp",Fi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Fn._fromIdTokenResponse(e,s,o),h=vy(s);return new Ts({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=vy(s);return new Ts({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function vy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends mr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,gc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new gc(e,t,s,o)}}function Sv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?gc._fromErrorAndOperation(r,l,e,s):l})}async function qS(r,e,t=!1){const s=await sl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ts._forOperation(r,"link",s)}/**
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
 */async function HS(r,e,t=!1){const{auth:s}=r;if(In(s.app))return Promise.reject(Fr(s));const o="reauthenticate";try{const l=await sl(r,Sv(s,o,e,r),t);de(l.idToken,s,"internal-error");const h=bf(l.idToken);de(h,s,"internal-error");const{sub:m}=h;return de(r.uid===m,s,"user-mismatch"),Ts._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&zn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(r,e,t=!1){if(In(r.app))return Promise.reject(Fr(r));const s="signIn",o=await Sv(r,s,e),l=await Ts._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function WS(r,e){return Av(Cs(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(r){const e=Cs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function KS(r,e,t){if(In(r.app))return Promise.reject(Fr(r));const s=Cs(r),h=await af(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$S).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&kv(r),g}),m=await Ts._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function GS(r,e,t){return In(r.app)?Promise.reject(Fr(r)):WS(ht(r),Bo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&kv(r),s})}function QS(r,e,t,s){return ht(r).onIdTokenChanged(e,t,s)}function YS(r,e,t){return ht(r).beforeAuthStateChanged(e,t)}function tc(r){return ht(r).signOut()}const yc="__sak";/**
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
 */class Rv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yc,"1"),this.storage.removeItem(yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=1e3,XS=10;class xv extends Rv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_v(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);yS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,XS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},JS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xv.type="LOCAL";const ZS=xv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv extends Rv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pv.type="SESSION";const Cv=Pv;/**
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
 */function eA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Mc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,l)),g=await eA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class tA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((m,g)=>{const _=Lf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(x){const b=x;if(b.data.eventId===_)switch(b.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(b.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){return window}function nA(r){ur().location.href=r}/**
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
 */function Nv(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function rA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iA(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function sA(){return Nv()?self:null}/**
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
 */const Dv="firebaseLocalStorageDb",oA=1,_c="firebaseLocalStorage",bv="fbase_key";class El{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lc(r,e){return r.transaction([_c],e?"readwrite":"readonly").objectStore(_c)}function aA(){const r=indexedDB.deleteDatabase(Dv);return new El(r).toPromise()}function lf(){const r=indexedDB.open(Dv,oA);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(_c,{keyPath:bv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(_c)?e(s):(s.close(),await aA(),e(await lf()))})})}async function wy(r,e,t){const s=Lc(r,!0).put({[bv]:e,value:t});return new El(s).toPromise()}async function lA(r,e){const t=Lc(r,!1).get(e),s=await new El(t).toPromise();return s===void 0?null:s.value}function Ey(r,e){const t=Lc(r,!0).delete(e);return new El(t).toPromise()}const uA=800,cA=3;class Vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>cA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(sA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await rA(),!this.activeServiceWorker)return;this.sender=new tA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lf();return await wy(e,yc,"1"),await Ey(e,yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>wy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>lA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ey(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Lc(o,!1).getAll();return new El(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vv.type="LOCAL";const hA=Vv;new _l(3e4,6e4);/**
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
 */function dA(r,e){return e?Mr(e):(de(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Ff extends Of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Do(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Do(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Do(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fA(r){return Av(r.auth,new Ff(r),r.bypassAuthState)}function pA(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),HS(t,new Ff(r),r.bypassAuthState)}async function mA(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),qS(t,new Ff(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fA;case"linkViaPopup":case"linkViaRedirect":return mA;case"reauthViaPopup":case"reauthViaRedirect":return pA;default:zn(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=new _l(2e3,1e4);class Po extends Ov{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Po.currentPopupAction&&Po.currentPopupAction.cancel(),Po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=Lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gA.get())};e()}}Po.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="pendingRedirect",nc=new Map;class _A extends Ov{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=nc.get(this.auth._key());if(!e){try{const s=await vA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}nc.set(this.auth._key(),e)}return this.bypassAuthState||nc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vA(r,e){const t=TA(e),s=EA(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function wA(r,e){nc.set(r._key(),e)}function EA(r){return Mr(r._redirectPersistence)}function TA(r){return ec(yA,r.config.apiKey,r.name)}async function IA(r,e,t=!1){if(In(r.app))return Promise.reject(Fr(r));const s=Cs(r),o=dA(s,e),h=await new _A(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=600*1e3;class AA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Mv(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(lr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ty(e))}saveEventToCache(e){this.cachedEventUids.add(Ty(e)),this.lastProcessedEventTime=Date.now()}}function Ty(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Mv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(r,e={}){return Ui(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PA=/^https?/;async function CA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await RA(r);for(const t of e)try{if(NA(t))return}catch{}zn(r,"unauthorized-domain")}function NA(r){const e=sf(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!PA.test(t))return!1;if(xA.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const DA=new _l(3e4,6e4);function Iy(){const r=ur().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function bA(r){return new Promise((e,t)=>{var o,l,h;function s(){Iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iy(),t(lr(r,"network-request-failed"))},timeout:DA.get()})}if((l=(o=ur().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=ur().gapi)!=null&&h.load)s();else{const m=kS("iframefcb");return ur()[m]=()=>{gapi.load?s():t(lr(r,"network-request-failed"))},wv(`${AS()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw rc=null,e})}let rc=null;function VA(r){return rc=rc||bA(r),rc}/**
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
 */const OA=new _l(5e3,15e3),MA="__/auth/iframe",LA="emulator/auth/iframe",FA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jA(r){const e=r.config;de(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Df(e,LA):`https://${r.config.authDomain}/${MA}`,s={apiKey:e.apiKey,appName:r.name,v:zo},o=UA.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${gl(s).slice(1)}`}async function zA(r){const e=await VA(r),t=ur().gapi;return de(t,r,"internal-error"),e.open({where:document.body,url:jA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FA,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=lr(r,"network-request-failed"),m=ur().setTimeout(()=>{l(h)},OA.get());function g(){ur().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const BA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$A=500,qA=600,HA="_blank",WA="http://localhost";class Sy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KA(r,e,t,s=$A,o=qA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...BA,width:s.toString(),height:o.toString(),top:l,left:h},_=qt().toLowerCase();t&&(m=fv(_)?HA:t),hv(_)&&(e=e||WA,g.scrollbars="yes");const E=Object.entries(g).reduce((b,[z,Y])=>`${b}${z}=${Y},`,"");if(gS(_)&&m!=="_self")return GA(e||"",m),new Sy(null);const x=window.open(e||"",m,E);de(x,r,"popup-blocked");try{x.focus()}catch{}return new Sy(x)}function GA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const QA="__/auth/handler",YA="emulator/auth/handler",JA=encodeURIComponent("fac");async function Ay(r,e,t,s,o,l){de(r.config.authDomain,r,"auth-domain-config-required"),de(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:zo,eventId:o};if(e instanceof Iv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",LT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,x]of Object.entries({}))h[E]=x}if(e instanceof wl){const E=e.getScopes().filter(x=>x!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),_=g?`#${JA}=${encodeURIComponent(g)}`:"";return`${XA(r)}?${gl(m).slice(1)}${_}`}function XA({config:r}){return r.emulator?Df(r,YA):`https://${r.authDomain}/${QA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="webStorageSupport";class ZA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cv,this._completeRedirectFn=IA,this._overrideRedirectResult=wA}async _openPopup(e,t,s,o){var h;zr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await Ay(e,t,s,sf(),o);return KA(e,l,Lf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Ay(e,t,s,sf(),o);return nA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await zA(e),s=new AA(e);return t.register("authEvent",o=>(de(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zd,{type:zd},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[zd];l!==void 0&&t(!!l),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _v()||dv()||Vf()}}const e1=ZA;var ky="@firebase/auth",Ry="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r1(r){fr(new jn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;de(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vv(r)},_=new TS(s,o,l,g);return DS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),fr(new jn("auth-internal",e=>{const t=Cs(e.getProvider("auth").getImmediate());return(s=>new t1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(ky,Ry,n1(r)),An(ky,Ry,"esm2020")}/**
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
 */const i1=300,s1=G_("authIdTokenMaxAge")||i1;let xy=null;const o1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>s1)return;const o=t==null?void 0:t.token;xy!==o&&(xy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function a1(r=Cf()){const e=jo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=NS(r,{popupRedirectResolver:e1,persistence:[hA,ZS,Cv]}),s=G_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=o1(l.toString());YS(t,h,()=>h(t.currentUser)),QS(t,m=>h(m))}}const o=W_("auth");return o&&bS(t,`http://${o}`),t}function l1(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}IS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=lr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",l1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});r1("Browser");const Lv="@firebase/installations",Uf="0.6.21";/**
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
 */const Fv=1e4,Uv=`w:${Uf}`,jv="FIS_v2",u1="https://firebaseinstallations.googleapis.com/v1",c1=3600*1e3,h1="installations",d1="Installations";/**
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
 */const f1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Is=new Ps(h1,d1,f1);function zv(r){return r instanceof mr&&r.code.includes("request-failed")}/**
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
 */function Bv({projectId:r}){return`${u1}/projects/${r}/installations`}function $v(r){return{token:r.token,requestStatus:2,expiresIn:m1(r.expiresIn),creationTime:Date.now()}}async function qv(r,e){const s=(await e.json()).error;return Is.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Hv({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function p1(r,{refreshToken:e}){const t=Hv(r);return t.append("Authorization",g1(e)),t}async function Wv(r){const e=await r();return e.status>=500&&e.status<600?r():e}function m1(r){return Number(r.replace("s","000"))}function g1(r){return`${jv} ${r}`}/**
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
 */async function y1({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=Bv(r),o=Hv(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:jv,appId:r.appId,sdkVersion:Uv},m={method:"POST",headers:o,body:JSON.stringify(h)},g=await Wv(()=>fetch(s,m));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:$v(_.authToken)}}else throw await qv("Create Installation",g)}/**
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
 */function Kv(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function _1(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const v1=/^[cdef][\w-]{21}$/,uf="";function w1(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=E1(r);return v1.test(t)?t:uf}catch{return uf}}function E1(r){return _1(r).substr(0,22)}/**
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
 */function Fc(r){return`${r.appName}!${r.appId}`}/**
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
 */const Gv=new Map;function Qv(r,e){const t=Fc(r);Yv(t,e),T1(t,e)}function Yv(r,e){const t=Gv.get(r);if(t)for(const s of t)s(e)}function T1(r,e){const t=I1();t&&t.postMessage({key:r,fid:e}),S1()}let gs=null;function I1(){return!gs&&"BroadcastChannel"in self&&(gs=new BroadcastChannel("[Firebase] FID Change"),gs.onmessage=r=>{Yv(r.data.key,r.data.fid)}),gs}function S1(){Gv.size===0&&gs&&(gs.close(),gs=null)}/**
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
 */const A1="firebase-installations-database",k1=1,Ss="firebase-installations-store";let Bd=null;function jf(){return Bd||(Bd=Vc(A1,k1,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Ss)}}})),Bd}async function vc(r,e){const t=Fc(r),o=(await jf()).transaction(Ss,"readwrite"),l=o.objectStore(Ss),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&Qv(r,e.fid),e}async function Jv(r){const e=Fc(r),s=(await jf()).transaction(Ss,"readwrite");await s.objectStore(Ss).delete(e),await s.done}async function Uc(r,e){const t=Fc(r),o=(await jf()).transaction(Ss,"readwrite"),l=o.objectStore(Ss),h=await l.get(t),m=e(h);return m===void 0?await l.delete(t):await l.put(m,t),await o.done,m&&(!h||h.fid!==m.fid)&&Qv(r,m.fid),m}/**
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
 */async function zf(r){let e;const t=await Uc(r.appConfig,s=>{const o=R1(s),l=x1(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===uf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function R1(r){const e=r||{fid:w1(),registrationStatus:0};return Xv(e)}function x1(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Is.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=P1(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:C1(r)}:{installationEntry:e}}async function P1(r,e){try{const t=await y1(r,e);return vc(r.appConfig,t)}catch(t){throw zv(t)&&t.customData.serverCode===409?await Jv(r.appConfig):await vc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function C1(r){let e=await Py(r.appConfig);for(;e.registrationStatus===1;)await Kv(100),e=await Py(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await zf(r);return s||t}return e}function Py(r){return Uc(r,e=>{if(!e)throw Is.create("installation-not-found");return Xv(e)})}function Xv(r){return N1(r)?{fid:r.fid,registrationStatus:0}:r}function N1(r){return r.registrationStatus===1&&r.registrationTime+Fv<Date.now()}/**
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
 */async function D1({appConfig:r,heartbeatServiceProvider:e},t){const s=b1(r,t),o=p1(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:Uv,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(h)},g=await Wv(()=>fetch(s,m));if(g.ok){const _=await g.json();return $v(_)}else throw await qv("Generate Auth Token",g)}function b1(r,{fid:e}){return`${Bv(r)}/${e}/authTokens:generate`}/**
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
 */async function Bf(r,e=!1){let t;const s=await Uc(r.appConfig,l=>{if(!Zv(l))throw Is.create("not-registered");const h=l.authToken;if(!e&&M1(h))return l;if(h.requestStatus===1)return t=V1(r,e),l;{if(!navigator.onLine)throw Is.create("app-offline");const m=F1(l);return t=O1(r,m),m}});return t?await t:s.authToken}async function V1(r,e){let t=await Cy(r.appConfig);for(;t.authToken.requestStatus===1;)await Kv(100),t=await Cy(r.appConfig);const s=t.authToken;return s.requestStatus===0?Bf(r,e):s}function Cy(r){return Uc(r,e=>{if(!Zv(e))throw Is.create("not-registered");const t=e.authToken;return U1(t)?{...e,authToken:{requestStatus:0}}:e})}async function O1(r,e){try{const t=await D1(r,e),s={...e,authToken:t};return await vc(r.appConfig,s),t}catch(t){if(zv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Jv(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await vc(r.appConfig,s)}throw t}}function Zv(r){return r!==void 0&&r.registrationStatus===2}function M1(r){return r.requestStatus===2&&!L1(r)}function L1(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+c1}function F1(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function U1(r){return r.requestStatus===1&&r.requestTime+Fv<Date.now()}/**
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
 */async function j1(r){const e=r,{installationEntry:t,registrationPromise:s}=await zf(e);return s?s.catch(console.error):Bf(e).catch(console.error),t.fid}/**
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
 */async function z1(r,e=!1){const t=r;return await B1(t),(await Bf(t,e)).token}async function B1(r){const{registrationPromise:e}=await zf(r);e&&await e}/**
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
 */function $1(r){if(!r||!r.options)throw $d("App Configuration");if(!r.name)throw $d("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw $d(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function $d(r){return Is.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="installations",q1="installations-internal",H1=r=>{const e=r.getProvider("app").getImmediate(),t=$1(e),s=jo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},W1=r=>{const e=r.getProvider("app").getImmediate(),t=jo(e,ew).getImmediate();return{getId:()=>j1(t),getToken:o=>z1(t,o)}};function K1(){fr(new jn(ew,H1,"PUBLIC")),fr(new jn(q1,W1,"PRIVATE"))}K1();An(Lv,Uf);An(Lv,Uf,"esm2020");/**
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
 */const G1="/firebase-messaging-sw.js",Q1="/firebase-cloud-messaging-push-scope",tw="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Y1="https://fcmregistrations.googleapis.com/v1",nw="google.c.a.c_id",J1="google.c.a.c_l",X1="google.c.a.ts",Z1="google.c.a.e",Ny=1e4;var Dy;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Dy||(Dy={}));/**
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
 */var al;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(al||(al={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(r){const e=new Uint8Array(r);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ek(r){const e="=".repeat((4-r.length%4)%4),t=(r+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(t),o=new Uint8Array(s.length);for(let l=0;l<s.length;++l)o[l]=s.charCodeAt(l);return o}/**
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
 */const qd="fcm_token_details_db",tk=5,by="fcm_token_object_Store";async function nk(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(qd))return null;let e=null;return(await Vc(qd,tk,{upgrade:async(s,o,l,h)=>{if(o<2||!s.objectStoreNames.contains(by))return;const m=h.objectStore(by),g=await m.index("fcmSenderId").get(r);if(await m.clear(),!!g){if(o===2){const _=g;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:_.createTime??Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:Vr(_.vapidKey)}}}else if(o===3){const _=g;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:Vr(_.auth),p256dh:Vr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:Vr(_.vapidKey)}}}else if(o===4){const _=g;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:Vr(_.auth),p256dh:Vr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:Vr(_.vapidKey)}}}}}})).close(),await Ld(qd),await Ld("fcm_vapid_details_db"),await Ld("undefined"),rk(e)?e:null}function rk(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:e}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const ik="firebase-messaging-database",sk=1,ll="firebase-messaging-store";let Hd=null;function rw(){return Hd||(Hd=Vc(ik,sk,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ll)}}})),Hd}async function ok(r){const e=iw(r),s=await(await rw()).transaction(ll).objectStore(ll).get(e);if(s)return s;{const o=await nk(r.appConfig.senderId);if(o)return await $f(r,o),o}}async function $f(r,e){const t=iw(r),o=(await rw()).transaction(ll,"readwrite");return await o.objectStore(ll).put(e,t),await o.done,e}function iw({appConfig:r}){return r.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},$t=new Ps("messaging","Messaging",ak);/**
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
 */async function lk(r,e){const t=await Hf(r),s=sw(e),o={method:"POST",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(qf(r.appConfig),o)).json()}catch(h){throw $t.create("token-subscribe-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw $t.create("token-subscribe-failed",{errorInfo:h})}if(!l.token)throw $t.create("token-subscribe-no-token");return l.token}async function uk(r,e){const t=await Hf(r),s=sw(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(s)};let l;try{l=await(await fetch(`${qf(r.appConfig)}/${e.token}`,o)).json()}catch(h){throw $t.create("token-update-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw $t.create("token-update-failed",{errorInfo:h})}if(!l.token)throw $t.create("token-update-no-token");return l.token}async function ck(r,e){const s={method:"DELETE",headers:await Hf(r)};try{const l=await(await fetch(`${qf(r.appConfig)}/${e}`,s)).json();if(l.error){const h=l.error.message;throw $t.create("token-unsubscribe-failed",{errorInfo:h})}}catch(o){throw $t.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function qf({projectId:r}){return`${Y1}/projects/${r}/registrations`}async function Hf({appConfig:r,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function sw({p256dh:r,auth:e,endpoint:t,vapidKey:s}){const o={web:{endpoint:t,auth:e,p256dh:r}};return s!==tw&&(o.web.applicationPubKey=s),o}/**
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
 */const hk=10080*60*1e3;async function dk(r){const e=await pk(r.swRegistration,r.vapidKey),t={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:e.endpoint,auth:Vr(e.getKey("auth")),p256dh:Vr(e.getKey("p256dh"))},s=await ok(r.firebaseDependencies);if(s){if(mk(s.subscriptionOptions,t))return Date.now()>=s.createTime+hk?fk(r,{token:s.token,createTime:Date.now(),subscriptionOptions:t}):s.token;try{await ck(r.firebaseDependencies,s.token)}catch(o){console.warn(o)}return Vy(r.firebaseDependencies,t)}else return Vy(r.firebaseDependencies,t)}async function fk(r,e){try{const t=await uk(r.firebaseDependencies,e),s={...e,token:t,createTime:Date.now()};return await $f(r.firebaseDependencies,s),t}catch(t){throw t}}async function Vy(r,e){const s={token:await lk(r,e),createTime:Date.now(),subscriptionOptions:e};return await $f(r,s),s.token}async function pk(r,e){const t=await r.pushManager.getSubscription();return t||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ek(e)})}function mk(r,e){const t=e.vapidKey===r.vapidKey,s=e.endpoint===r.endpoint,o=e.auth===r.auth,l=e.p256dh===r.p256dh;return t&&s&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(r){const e={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return gk(e,r),yk(e,r),_k(e,r),e}function gk(r,e){if(!e.notification)return;r.notification={};const t=e.notification.title;t&&(r.notification.title=t);const s=e.notification.body;s&&(r.notification.body=s);const o=e.notification.image;o&&(r.notification.image=o);const l=e.notification.icon;l&&(r.notification.icon=l)}function yk(r,e){e.data&&(r.data=e.data)}function _k(r,e){var o,l,h,m;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;r.fcmOptions={};const t=((l=e.fcmOptions)==null?void 0:l.link)??((h=e.notification)==null?void 0:h.click_action);t&&(r.fcmOptions.link=t);const s=(m=e.fcmOptions)==null?void 0:m.analytics_label;s&&(r.fcmOptions.analyticsLabel=s)}/**
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
 */function vk(r){return typeof r=="object"&&!!r&&nw in r}/**
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
 */function wk(r){if(!r||!r.options)throw Wd("App Configuration Object");if(!r.name)throw Wd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=r;for(const s of e)if(!t[s])throw Wd(s);return{appName:r.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Wd(r){return $t.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,t,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=wk(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(r){try{r.swRegistration=await navigator.serviceWorker.register(G1,{scope:Q1}),r.swRegistration.update().catch(()=>{}),await Ik(r.swRegistration)}catch(e){throw $t.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function Ik(r){return new Promise((e,t)=>{const s=setTimeout(()=>t(new Error(`Service worker not registered after ${Ny} ms`)),Ny),o=r.installing||r.waiting;r.active?(clearTimeout(s),e()):o?o.onstatechange=l=>{var h;((h=l.target)==null?void 0:h.state)==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(r,e){if(!e&&!r.swRegistration&&await Tk(r),!(!e&&r.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw $t.create("invalid-sw-registration");r.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(r,e){e?r.vapidKey=e:r.vapidKey||(r.vapidKey=tw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(r,e){if(!navigator)throw $t.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw $t.create("permission-blocked");return await Ak(r,e==null?void 0:e.vapidKey),await Sk(r,e==null?void 0:e.serviceWorkerRegistration),dk(r)}/**
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
 */async function kk(r,e,t){const s=Rk(e);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:t[nw],message_name:t[J1],message_time:t[X1],message_device_time:Math.floor(Date.now()/1e3)})}function Rk(r){switch(r){case al.NOTIFICATION_CLICKED:return"notification_open";case al.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(r,e){const t=e.data;if(!t.isFirebaseMessaging)return;r.onMessageHandler&&t.messageType===al.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(Oy(t)):r.onMessageHandler.next(Oy(t)));const s=t.data;vk(s)&&s[Z1]==="1"&&await kk(r,t.messageType,s)}const My="@firebase/messaging",Ly="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=r=>{const e=new Ek(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>xk(e,t)),e},Ck=r=>{const e=r.getProvider("messaging").getImmediate();return{getToken:s=>ow(e,s)}};function Nk(){fr(new jn("messaging",Pk,"PUBLIC")),fr(new jn("messaging-internal",Ck,"PRIVATE")),An(My,Ly),An(My,Ly,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(){try{await Y_()}catch{return!1}return typeof window<"u"&&Q_()&&bT()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(r,e){if(!navigator)throw $t.create("only-available-in-window");return r.onMessageHandler=e,()=>{r.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(r=Cf()){return Dk().then(e=>{if(!e)throw $t.create("unsupported-browser")},e=>{throw $t.create("indexed-db-unsupported")}),jo(ht(r),"messaging").getImmediate()}async function Ok(r,e){return r=ht(r),ow(r,e)}function Mk(r,e){return r=ht(r),bk(r,e)}Nk();var Fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ci,aw;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,T){function I(){}I.prototype=T.prototype,A.F=T.prototype,A.prototype=new I,A.prototype.constructor=A,A.D=function(C,P,O){for(var R=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)R[$e-2]=arguments[$e];return T.prototype[P].apply(C,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(A,T,I){I||(I=0);const C=Array(16);if(typeof T=="string")for(var P=0;P<16;++P)C[P]=T.charCodeAt(I++)|T.charCodeAt(I++)<<8|T.charCodeAt(I++)<<16|T.charCodeAt(I++)<<24;else for(P=0;P<16;++P)C[P]=T[I++]|T[I++]<<8|T[I++]<<16|T[I++]<<24;T=A.g[0],I=A.g[1],P=A.g[2];let O=A.g[3],R;R=T+(O^I&(P^O))+C[0]+3614090360&4294967295,T=I+(R<<7&4294967295|R>>>25),R=O+(P^T&(I^P))+C[1]+3905402710&4294967295,O=T+(R<<12&4294967295|R>>>20),R=P+(I^O&(T^I))+C[2]+606105819&4294967295,P=O+(R<<17&4294967295|R>>>15),R=I+(T^P&(O^T))+C[3]+3250441966&4294967295,I=P+(R<<22&4294967295|R>>>10),R=T+(O^I&(P^O))+C[4]+4118548399&4294967295,T=I+(R<<7&4294967295|R>>>25),R=O+(P^T&(I^P))+C[5]+1200080426&4294967295,O=T+(R<<12&4294967295|R>>>20),R=P+(I^O&(T^I))+C[6]+2821735955&4294967295,P=O+(R<<17&4294967295|R>>>15),R=I+(T^P&(O^T))+C[7]+4249261313&4294967295,I=P+(R<<22&4294967295|R>>>10),R=T+(O^I&(P^O))+C[8]+1770035416&4294967295,T=I+(R<<7&4294967295|R>>>25),R=O+(P^T&(I^P))+C[9]+2336552879&4294967295,O=T+(R<<12&4294967295|R>>>20),R=P+(I^O&(T^I))+C[10]+4294925233&4294967295,P=O+(R<<17&4294967295|R>>>15),R=I+(T^P&(O^T))+C[11]+2304563134&4294967295,I=P+(R<<22&4294967295|R>>>10),R=T+(O^I&(P^O))+C[12]+1804603682&4294967295,T=I+(R<<7&4294967295|R>>>25),R=O+(P^T&(I^P))+C[13]+4254626195&4294967295,O=T+(R<<12&4294967295|R>>>20),R=P+(I^O&(T^I))+C[14]+2792965006&4294967295,P=O+(R<<17&4294967295|R>>>15),R=I+(T^P&(O^T))+C[15]+1236535329&4294967295,I=P+(R<<22&4294967295|R>>>10),R=T+(P^O&(I^P))+C[1]+4129170786&4294967295,T=I+(R<<5&4294967295|R>>>27),R=O+(I^P&(T^I))+C[6]+3225465664&4294967295,O=T+(R<<9&4294967295|R>>>23),R=P+(T^I&(O^T))+C[11]+643717713&4294967295,P=O+(R<<14&4294967295|R>>>18),R=I+(O^T&(P^O))+C[0]+3921069994&4294967295,I=P+(R<<20&4294967295|R>>>12),R=T+(P^O&(I^P))+C[5]+3593408605&4294967295,T=I+(R<<5&4294967295|R>>>27),R=O+(I^P&(T^I))+C[10]+38016083&4294967295,O=T+(R<<9&4294967295|R>>>23),R=P+(T^I&(O^T))+C[15]+3634488961&4294967295,P=O+(R<<14&4294967295|R>>>18),R=I+(O^T&(P^O))+C[4]+3889429448&4294967295,I=P+(R<<20&4294967295|R>>>12),R=T+(P^O&(I^P))+C[9]+568446438&4294967295,T=I+(R<<5&4294967295|R>>>27),R=O+(I^P&(T^I))+C[14]+3275163606&4294967295,O=T+(R<<9&4294967295|R>>>23),R=P+(T^I&(O^T))+C[3]+4107603335&4294967295,P=O+(R<<14&4294967295|R>>>18),R=I+(O^T&(P^O))+C[8]+1163531501&4294967295,I=P+(R<<20&4294967295|R>>>12),R=T+(P^O&(I^P))+C[13]+2850285829&4294967295,T=I+(R<<5&4294967295|R>>>27),R=O+(I^P&(T^I))+C[2]+4243563512&4294967295,O=T+(R<<9&4294967295|R>>>23),R=P+(T^I&(O^T))+C[7]+1735328473&4294967295,P=O+(R<<14&4294967295|R>>>18),R=I+(O^T&(P^O))+C[12]+2368359562&4294967295,I=P+(R<<20&4294967295|R>>>12),R=T+(I^P^O)+C[5]+4294588738&4294967295,T=I+(R<<4&4294967295|R>>>28),R=O+(T^I^P)+C[8]+2272392833&4294967295,O=T+(R<<11&4294967295|R>>>21),R=P+(O^T^I)+C[11]+1839030562&4294967295,P=O+(R<<16&4294967295|R>>>16),R=I+(P^O^T)+C[14]+4259657740&4294967295,I=P+(R<<23&4294967295|R>>>9),R=T+(I^P^O)+C[1]+2763975236&4294967295,T=I+(R<<4&4294967295|R>>>28),R=O+(T^I^P)+C[4]+1272893353&4294967295,O=T+(R<<11&4294967295|R>>>21),R=P+(O^T^I)+C[7]+4139469664&4294967295,P=O+(R<<16&4294967295|R>>>16),R=I+(P^O^T)+C[10]+3200236656&4294967295,I=P+(R<<23&4294967295|R>>>9),R=T+(I^P^O)+C[13]+681279174&4294967295,T=I+(R<<4&4294967295|R>>>28),R=O+(T^I^P)+C[0]+3936430074&4294967295,O=T+(R<<11&4294967295|R>>>21),R=P+(O^T^I)+C[3]+3572445317&4294967295,P=O+(R<<16&4294967295|R>>>16),R=I+(P^O^T)+C[6]+76029189&4294967295,I=P+(R<<23&4294967295|R>>>9),R=T+(I^P^O)+C[9]+3654602809&4294967295,T=I+(R<<4&4294967295|R>>>28),R=O+(T^I^P)+C[12]+3873151461&4294967295,O=T+(R<<11&4294967295|R>>>21),R=P+(O^T^I)+C[15]+530742520&4294967295,P=O+(R<<16&4294967295|R>>>16),R=I+(P^O^T)+C[2]+3299628645&4294967295,I=P+(R<<23&4294967295|R>>>9),R=T+(P^(I|~O))+C[0]+4096336452&4294967295,T=I+(R<<6&4294967295|R>>>26),R=O+(I^(T|~P))+C[7]+1126891415&4294967295,O=T+(R<<10&4294967295|R>>>22),R=P+(T^(O|~I))+C[14]+2878612391&4294967295,P=O+(R<<15&4294967295|R>>>17),R=I+(O^(P|~T))+C[5]+4237533241&4294967295,I=P+(R<<21&4294967295|R>>>11),R=T+(P^(I|~O))+C[12]+1700485571&4294967295,T=I+(R<<6&4294967295|R>>>26),R=O+(I^(T|~P))+C[3]+2399980690&4294967295,O=T+(R<<10&4294967295|R>>>22),R=P+(T^(O|~I))+C[10]+4293915773&4294967295,P=O+(R<<15&4294967295|R>>>17),R=I+(O^(P|~T))+C[1]+2240044497&4294967295,I=P+(R<<21&4294967295|R>>>11),R=T+(P^(I|~O))+C[8]+1873313359&4294967295,T=I+(R<<6&4294967295|R>>>26),R=O+(I^(T|~P))+C[15]+4264355552&4294967295,O=T+(R<<10&4294967295|R>>>22),R=P+(T^(O|~I))+C[6]+2734768916&4294967295,P=O+(R<<15&4294967295|R>>>17),R=I+(O^(P|~T))+C[13]+1309151649&4294967295,I=P+(R<<21&4294967295|R>>>11),R=T+(P^(I|~O))+C[4]+4149444226&4294967295,T=I+(R<<6&4294967295|R>>>26),R=O+(I^(T|~P))+C[11]+3174756917&4294967295,O=T+(R<<10&4294967295|R>>>22),R=P+(T^(O|~I))+C[2]+718787259&4294967295,P=O+(R<<15&4294967295|R>>>17),R=I+(O^(P|~T))+C[9]+3951481745&4294967295,A.g[0]=A.g[0]+T&4294967295,A.g[1]=A.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,A.g[2]=A.g[2]+P&4294967295,A.g[3]=A.g[3]+O&4294967295}s.prototype.v=function(A,T){T===void 0&&(T=A.length);const I=T-this.blockSize,C=this.C;let P=this.h,O=0;for(;O<T;){if(P==0)for(;O<=I;)o(this,A,O),O+=this.blockSize;if(typeof A=="string"){for(;O<T;)if(C[P++]=A.charCodeAt(O++),P==this.blockSize){o(this,C),P=0;break}}else for(;O<T;)if(C[P++]=A[O++],P==this.blockSize){o(this,C),P=0;break}}this.h=P,this.o+=T},s.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var T=1;T<A.length-8;++T)A[T]=0;T=this.o*8;for(var I=A.length-8;I<A.length;++I)A[I]=T&255,T/=256;for(this.v(A),A=Array(16),T=0,I=0;I<4;++I)for(let C=0;C<32;C+=8)A[T++]=this.g[I]>>>C&255;return A};function l(A,T){var I=m;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=T(A)}function h(A,T){this.h=T;const I=[];let C=!0;for(let P=A.length-1;P>=0;P--){const O=A[P]|0;C&&O==T||(I[P]=O,C=!1)}this.g=I}var m={};function g(A){return-128<=A&&A<128?l(A,function(T){return new h([T|0],T<0?-1:0)}):new h([A|0],A<0?-1:0)}function _(A){if(isNaN(A)||!isFinite(A))return x;if(A<0)return G(_(-A));const T=[];let I=1;for(let C=0;A>=I;C++)T[C]=A/I|0,I*=4294967296;return new h(T,0)}function E(A,T){if(A.length==0)throw Error("number format error: empty string");if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(A.charAt(0)=="-")return G(E(A.substring(1),T));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=_(Math.pow(T,8));let C=x;for(let O=0;O<A.length;O+=8){var P=Math.min(8,A.length-O);const R=parseInt(A.substring(O,O+P),T);P<8?(P=_(Math.pow(T,P)),C=C.j(P).add(_(R))):(C=C.j(I),C=C.add(_(R)))}return C}var x=g(0),b=g(1),z=g(16777216);r=h.prototype,r.m=function(){if(J(this))return-G(this).m();let A=0,T=1;for(let I=0;I<this.g.length;I++){const C=this.i(I);A+=(C>=0?C:4294967296+C)*T,T*=4294967296}return A},r.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(Y(this))return"0";if(J(this))return"-"+G(this).toString(A);const T=_(Math.pow(A,6));var I=this;let C="";for(;;){const P=Me(I,T).g;I=ge(I,P.j(T));let O=((I.g.length>0?I.g[0]:I.h)>>>0).toString(A);if(I=P,Y(I))return O+C;for(;O.length<6;)O="0"+O;C=O+C}},r.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function Y(A){if(A.h!=0)return!1;for(let T=0;T<A.g.length;T++)if(A.g[T]!=0)return!1;return!0}function J(A){return A.h==-1}r.l=function(A){return A=ge(this,A),J(A)?-1:Y(A)?0:1};function G(A){const T=A.g.length,I=[];for(let C=0;C<T;C++)I[C]=~A.g[C];return new h(I,~A.h).add(b)}r.abs=function(){return J(this)?G(this):this},r.add=function(A){const T=Math.max(this.g.length,A.g.length),I=[];let C=0;for(let P=0;P<=T;P++){let O=C+(this.i(P)&65535)+(A.i(P)&65535),R=(O>>>16)+(this.i(P)>>>16)+(A.i(P)>>>16);C=R>>>16,O&=65535,R&=65535,I[P]=R<<16|O}return new h(I,I[I.length-1]&-2147483648?-1:0)};function ge(A,T){return A.add(G(T))}r.j=function(A){if(Y(this)||Y(A))return x;if(J(this))return J(A)?G(this).j(G(A)):G(G(this).j(A));if(J(A))return G(this.j(G(A)));if(this.l(z)<0&&A.l(z)<0)return _(this.m()*A.m());const T=this.g.length+A.g.length,I=[];for(var C=0;C<2*T;C++)I[C]=0;for(C=0;C<this.g.length;C++)for(let P=0;P<A.g.length;P++){const O=this.i(C)>>>16,R=this.i(C)&65535,$e=A.i(P)>>>16,ot=A.i(P)&65535;I[2*C+2*P]+=R*ot,me(I,2*C+2*P),I[2*C+2*P+1]+=O*ot,me(I,2*C+2*P+1),I[2*C+2*P+1]+=R*$e,me(I,2*C+2*P+1),I[2*C+2*P+2]+=O*$e,me(I,2*C+2*P+2)}for(A=0;A<T;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=T;A<2*T;A++)I[A]=0;return new h(I,0)};function me(A,T){for(;(A[T]&65535)!=A[T];)A[T+1]+=A[T]>>>16,A[T]&=65535,T++}function Ee(A,T){this.g=A,this.h=T}function Me(A,T){if(Y(T))throw Error("division by zero");if(Y(A))return new Ee(x,x);if(J(A))return T=Me(G(A),T),new Ee(G(T.g),G(T.h));if(J(T))return T=Me(A,G(T)),new Ee(G(T.g),T.h);if(A.g.length>30){if(J(A)||J(T))throw Error("slowDivide_ only works with positive integers.");for(var I=b,C=T;C.l(A)<=0;)I=Ue(I),C=Ue(C);var P=Ce(I,1),O=Ce(C,1);for(C=Ce(C,2),I=Ce(I,2);!Y(C);){var R=O.add(C);R.l(A)<=0&&(P=P.add(I),O=R),C=Ce(C,1),I=Ce(I,1)}return T=ge(A,P.j(T)),new Ee(P,T)}for(P=x;A.l(T)>=0;){for(I=Math.max(1,Math.floor(A.m()/T.m())),C=Math.ceil(Math.log(I)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),O=_(I),R=O.j(T);J(R)||R.l(A)>0;)I-=C,O=_(I),R=O.j(T);Y(O)&&(O=b),P=P.add(O),A=ge(A,R)}return new Ee(P,A)}r.B=function(A){return Me(this,A).h},r.and=function(A){const T=Math.max(this.g.length,A.g.length),I=[];for(let C=0;C<T;C++)I[C]=this.i(C)&A.i(C);return new h(I,this.h&A.h)},r.or=function(A){const T=Math.max(this.g.length,A.g.length),I=[];for(let C=0;C<T;C++)I[C]=this.i(C)|A.i(C);return new h(I,this.h|A.h)},r.xor=function(A){const T=Math.max(this.g.length,A.g.length),I=[];for(let C=0;C<T;C++)I[C]=this.i(C)^A.i(C);return new h(I,this.h^A.h)};function Ue(A){const T=A.g.length+1,I=[];for(let C=0;C<T;C++)I[C]=A.i(C)<<1|A.i(C-1)>>>31;return new h(I,A.h)}function Ce(A,T){const I=T>>5;T%=32;const C=A.g.length-I,P=[];for(let O=0;O<C;O++)P[O]=T>0?A.i(O+I)>>>T|A.i(O+I+1)<<32-T:A.i(O+I);return new h(P,A.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,aw=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,Ci=h}).apply(typeof Fy<"u"?Fy:typeof self<"u"?self:typeof window<"u"?window:{});var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lw,Ga,uw,ic,cf,cw,hw,dw;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hu=="object"&&Hu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in y))break e;y=y[L]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(p){var y=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&y.push([w,p[w]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function m(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function g(u,p,y){return u.call.apply(u.bind,arguments)}function _(u,p,y){return _=g,_.apply(null,arguments)}function E(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function x(u,p){function y(){}y.prototype=p.prototype,u.Z=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Ob=function(w,L,j){for(var X=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)X[_e-2]=arguments[_e];return p.prototype[L].apply(w,X)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function z(u){const p=u.length;if(p>0){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function Y(u,p){for(let w=1;w<arguments.length;w++){const L=arguments[w];var y=typeof L;if(y=y!="object"?y:L?Array.isArray(L)?"array":y:"null",y=="array"||y=="object"&&typeof L.length=="number"){y=u.length||0;const j=L.length||0;u.length=y+j;for(let X=0;X<j;X++)u[y+X]=L[X]}else u.push(L)}}class J{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function G(u){h.setTimeout(()=>{throw u},0)}function ge(){var u=A;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class me{constructor(){this.h=this.g=null}add(p,y){const w=Ee.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Ee=new J(()=>new Me,u=>u.reset());class Me{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Ce=!1,A=new me,T=()=>{const u=Promise.resolve(void 0);Ue=()=>{u.then(I)}};function I(){for(var u;u=ge();){try{u.h.call(u.g)}catch(y){G(y)}var p=Ee;p.j(u),p.h<100&&(p.h++,u.next=p.g,p.g=u)}Ce=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return u})();function R(u){return/^[\s\xa0]*$/.test(u)}function $e(u,p){P.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,p)}x($e,P),$e.prototype.init=function(u,p){const y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget,p||(y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ot="closure_listenable_"+(Math.random()*1e6|0),Ne=0;function Te(u,p,y,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++Ne,this.da=this.fa=!1}function Z(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ue(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function D(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function q(u){const p={};for(const y in u)p[y]=u[y];return p}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ie(u,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)u[y]=w[y];for(let j=0;j<ae.length;j++)y=ae[j],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function we(u){this.src=u,this.g={},this.h=0}we.prototype.add=function(u,p,y,w,L){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const X=xe(u,p,w,L);return X>-1?(p=u[X],y||(p.fa=!1)):(p=new Te(p,this.src,j,!!w,L),p.fa=y,u.push(p)),p};function je(u,p){const y=p.type;if(y in u.g){var w=u.g[y],L=Array.prototype.indexOf.call(w,p,void 0),j;(j=L>=0)&&Array.prototype.splice.call(w,L,1),j&&(Z(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function xe(u,p,y,w){for(let L=0;L<u.length;++L){const j=u[L];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==w)return L}return-1}var Le="closure_lm_"+(Math.random()*1e6|0),De={};function kt(u,p,y,w,L){if(Array.isArray(p)){for(let j=0;j<p.length;j++)kt(u,p[j],y,w,L);return null}return y=Qo(y),u&&u[ot]?u.J(p,y,m(w)?!!w.capture:!1,L):sh(u,p,y,!1,w,L)}function sh(u,p,y,w,L,j){if(!p)throw Error("Invalid event type");const X=m(L)?!!L.capture:!!L;let _e=Os(u);if(_e||(u[Le]=_e=new we(u)),y=_e.add(p,y,w,X,j),y.proxy)return y;if(w=bs(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)O||(L=X),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(Vs(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function bs(){function u(y){return p.call(u.src,u.listener,y)}const p=xl;return u}function Go(u,p,y,w,L){if(Array.isArray(p))for(var j=0;j<p.length;j++)Go(u,p[j],y,w,L);else w=m(w)?!!w.capture:!!w,y=Qo(y),u&&u[ot]?(u=u.i,j=String(p).toString(),j in u.g&&(p=u.g[j],y=xe(p,y,w,L),y>-1&&(Z(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete u.g[j],u.h--)))):u&&(u=Os(u))&&(p=u.g[p.toString()],u=-1,p&&(u=xe(p,y,w,L)),(y=u>-1?p[u]:null)&&Wr(y))}function Wr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ot])je(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(Vs(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=Os(p))?(je(y,u),y.h==0&&(y.src=null,p[Le]=null)):Z(u)}}}function Vs(u){return u in De?De[u]:De[u]="on"+u}function xl(u,p){if(u.da)u=!0;else{p=new $e(p,this);const y=u.listener,w=u.ha||u.src;u.fa&&Wr(u),u=y.call(w,p)}return u}function Os(u){return u=u[Le],u instanceof we?u:null}var Bi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qo(u){return typeof u=="function"?u:(u[Bi]||(u[Bi]=function(p){return u.handleEvent(p)}),u[Bi])}function dt(){C.call(this),this.i=new we(this),this.M=this,this.G=null}x(dt,C),dt.prototype[ot]=!0,dt.prototype.removeEventListener=function(u,p,y,w){Go(this,u,p,y,w)};function at(u,p){var y,w=u.G;if(w)for(y=[];w;w=w.G)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new P(p,u);else if(p instanceof P)p.target=p.target||u;else{var L=p;p=new P(w,u),Ie(p,L)}L=!0;let j,X;if(y)for(X=y.length-1;X>=0;X--)j=p.g=y[X],L=Rn(j,w,!0,p)&&L;if(j=p.g=u,L=Rn(j,w,!0,p)&&L,L=Rn(j,w,!1,p)&&L,y)for(X=0;X<y.length;X++)j=p.g=y[X],L=Rn(j,w,!1,p)&&L}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var u=this.i;for(const p in u.g){const y=u.g[p];for(let w=0;w<y.length;w++)Z(y[w]);delete u.g[p],u.h--}}this.G=null},dt.prototype.J=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},dt.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function Rn(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let j=0;j<p.length;++j){const X=p[j];if(X&&!X.da&&X.capture==y){const _e=X.listener,lt=X.ha||X.src;X.fa&&je(u.i,X),L=_e.call(lt,w)!==!1&&L}}return L&&!w.defaultPrevented}function Yo(u,p){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(u,p||0)}function Jo(u){u.g=Yo(()=>{u.g=null,u.i&&(u.i=!1,Jo(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Pl extends C{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Jo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kr(u){C.call(this),this.h=u,this.g={}}x(Kr,C);var Xo=[];function Ms(u){ue(u.g,function(p,y){this.g.hasOwnProperty(y)&&Wr(p)},u),u.g={}}Kr.prototype.N=function(){Kr.Z.N.call(this),Ms(this)},Kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gr=h.JSON.stringify,Cl=h.JSON.parse,$i=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Qr(){}function Nl(){}var Yr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ls(){P.call(this,"d")}x(Ls,P);function Zo(){P.call(this,"c")}x(Zo,P);var xn={},Fs=null;function Jr(){return Fs=Fs||new dt}xn.Ia="serverreachability";function Us(u){P.call(this,xn.Ia,u)}x(Us,P);function gr(u){const p=Jr();at(p,new Us(p))}xn.STAT_EVENT="statevent";function yr(u,p){P.call(this,xn.STAT_EVENT,u),this.stat=p}x(yr,P);function nt(u){const p=Jr();at(p,new yr(p,u))}xn.Ja="timingevent";function ea(u,p){P.call(this,xn.Ja,u),this.size=p}x(ea,P);function Xr(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},p)}function Zr(){this.g=!0}Zr.prototype.ua=function(){this.g=!1};function Dl(u,p,y,w,L,j){u.info(function(){if(u.g)if(j){var X="",_e=j.split("&");for(let Be=0;Be<_e.length;Be++){var lt=_e[Be].split("=");if(lt.length>1){const ft=lt[0];lt=lt[1];const ln=ft.split("_");X=ln.length>=2&&ln[1]=="type"?X+(ft+"="+lt+"&"):X+(ft+"=redacted&")}}}else X=null;else X=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+X})}function bl(u,p,y,w,L,j,X){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+j+" "+X})}function $n(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+qi(u,y)+(w?" "+w:"")})}function Vl(u,p){u.info(function(){return"TIMEOUT: "+p})}Zr.prototype.info=function(){};function qi(u,p){if(!u.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var y=j[u];if(!(y.length<2)){var w=y[1];if(Array.isArray(w)&&!(w.length<1)){var L=w[0];if(L!="noop"&&L!="stop"&&L!="close")for(let X=1;X<w.length;X++)w[X]=""}}}}return Gr(j)}catch{return p}}var ei={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ti={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ol;function _r(){}x(_r,Qr),_r.prototype.g=function(){return new XMLHttpRequest},Ol=new _r;function qn(u){return encodeURIComponent(String(u))}function js(u){var p=1;u=u.split(":");const y=[];for(;p>0&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function pn(u,p,y,w){this.j=u,this.i=p,this.l=y,this.S=w||1,this.V=new Kr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ml}function Ml(){this.i=null,this.g="",this.h=!1}var Ll={},ta={};function Pn(u,p,y){u.M=1,u.A=wr(mn(p)),u.u=y,u.R=!0,na(u,null)}function na(u,p){u.F=Date.now(),Hi(u),u.B=mn(u.A);var y=u.B,w=u.S;Array.isArray(w)||(w=[String(w)]),da(y.i,"t",w),u.C=0,y=u.j.L,u.h=new Ml,u.g=Kl(u.j,y?p:null,!u.u),u.P>0&&(u.O=new Pl(_(u.Y,u,u.g),u.P)),p=u.V,y=u.g,w=u.ba;var L="readystatechange";Array.isArray(L)||(L&&(Xo[0]=L.toString()),L=Xo);for(let j=0;j<L.length;j++){const X=kt(y,L[j],w||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=u.J?q(u.J):{},u.u?(u.v||(u.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,p)):(u.v="GET",u.g.ea(u.B,u.v,null,p)),gr(),Dl(u.i,u.v,u.B,u.l,u.S,u.u)}pn.prototype.ba=function(u){u=u.target;const p=this.O;p&&Jn(u)==3?p.j():this.Y(u)},pn.prototype.Y=function(u){try{if(u==this.g)e:{const _e=Jn(this.g),lt=this.g.ya(),Be=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||Hl(this.g)))){this.K||_e!=4||lt==7||(lt==8||Be<=0?gr(3):gr(2)),zs(this);var p=this.g.ca();this.X=p;var y=Fl(this);if(this.o=p==200,bl(this.i,this.v,this.B,this.l,this.S,_e,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,L=this.g;if((w=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(w)){var j=w;break t}}j=null}if(u=j)$n(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,u);else{this.o=!1,this.m=3,nt(12),vr(this),Wi(this);break e}}if(this.R){u=!0;let ft;for(;!this.K&&this.C<y.length;)if(ft=jl(this,y),ft==ta){_e==4&&(this.m=4,nt(14),u=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==Ll){this.m=4,nt(15),$n(this.i,this.l,y,"[Invalid Chunk]"),u=!1;break}else $n(this.i,this.l,ft,null),Ge(this,ft);if(Ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||y.length!=0||this.h.h||(this.m=1,nt(16),u=!1),this.o=this.o&&u,!u)$n(this.i,this.l,y,"[Invalid Chunked Response]"),vr(this),Wi(this);else if(y.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),ts(X),X.P=!0,nt(11))}}else $n(this.i,this.l,y,null),Ge(this,y);_e==4&&vr(this),this.o&&!this.K&&(_e==4?Js(this.j,this):(this.o=!1,Hi(this)))}else pa(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),vr(this),Wi(this)}}}catch{}finally{}};function Fl(u){if(!Ul(u))return u.g.la();const p=Hl(u.g);if(p==="")return"";let y="";const w=p.length,L=Jn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return vr(u),Wi(u),"";u.h.i=new h.TextDecoder}for(let j=0;j<w;j++)u.h.h=!0,y+=u.h.i.decode(p[j],{stream:!(L&&j==w-1)});return p.length=0,u.h.g+=y,u.C=0,u.h.g}function Ul(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function jl(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?ta:(y=Number(p.substring(y,w)),isNaN(y)?Ll:(w+=1,w+y>p.length?ta:(p=p.slice(w,w+y),u.C=w+y,p)))}pn.prototype.cancel=function(){this.K=!0,vr(this)};function Hi(u){u.T=Date.now()+u.H,ra(u,u.H)}function ra(u,p){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Xr(_(u.aa,u),p)}function zs(u){u.D&&(h.clearTimeout(u.D),u.D=null)}pn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Vl(this.i,this.B),this.M!=2&&(gr(),nt(17)),vr(this),this.m=2,Wi(this)):ra(this,this.T-u)};function Wi(u){u.j.I==0||u.K||Js(u.j,u)}function vr(u){zs(u);var p=u.O;p&&typeof p.dispose=="function"&&p.dispose(),u.O=null,Ms(u.V),u.g&&(p=u.g,u.g=null,p.abort(),p.dispose())}function Ge(u,p){try{var y=u.j;if(y.I!=0&&(y.g==u||sa(y.h,u))){if(!u.L&&sa(y.h,u)&&y.I==3){try{var w=y.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<u.F)Ys(y),on(y);else break e;er(y),nt(18)}}else y.xa=L[1],0<y.xa-y.K&&L[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Xr(_(y.Va,y),6e3));Ki(y.h)<=1&&y.ta&&(y.ta=void 0)}else an(y,11)}else if((u.L||y.g==u)&&Ys(y),!R(p))for(L=y.Ba.g.parse(p),p=0;p<L.length;p++){let Be=L[p];const ft=Be[0];if(!(ft<=y.K))if(y.K=ft,Be=Be[1],y.I==2)if(Be[0]=="c"){y.M=Be[1],y.ba=Be[2];const ln=Be[3];ln!=null&&(y.ka=ln,y.j.info("VER="+y.ka));const Ar=Be[4];Ar!=null&&(y.za=Ar,y.j.info("SVER="+y.za));const tr=Be[5];tr!=null&&typeof tr=="number"&&tr>0&&(w=1.5*tr,y.O=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const nr=u.g;if(nr){const eo=nr.g?nr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var j=w.h;j.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&($s(j,j.h),j.h=null))}if(w.G){const ya=nr.g?nr.g.getResponseHeader("X-HTTP-Session-Id"):null;ya&&(w.wa=ya,Fe(w.J,w.G,ya))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-u.F,y.j.info("Handshake RTT: "+y.T+"ms")),w=y;var X=u;if(w.na=ga(w,w.L?w.ba:null,w.W),X.L){Gi(w.h,X);var _e=X,lt=w.O;lt&&(_e.H=lt),_e.D&&(zs(_e),Hi(_e)),w.g=X}else Vt(w);y.i.length>0&&Sr(y)}else Be[0]!="stop"&&Be[0]!="close"||an(y,7);else y.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?an(y,7):Gs(y):Be[0]!="noop"&&y.l&&y.l.qa(Be),y.A=0)}}gr(4)}catch{}}var oh=class{constructor(u,p){this.g=u,this.map=p}};function Bs(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ia(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ki(u){return u.h?1:u.g?u.g.size:0}function sa(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function $s(u,p){u.g?u.g.add(p):u.h=p}function Gi(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Bs.prototype.cancel=function(){if(this.i=nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function nn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.G);return p}return z(u.i)}var zl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rn(u,p){if(u){u=u.split("&");for(let y=0;y<u.length;y++){const w=u[y].indexOf("=");let L,j=null;w>=0?(L=u[y].substring(0,w),j=u[y].substring(w+1)):L=u[y],p(L,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Hn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;u instanceof Hn?(this.l=u.l,Qi(this,u.j),this.o=u.o,this.g=u.g,Wn(this,u.u),this.h=u.h,ni(this,fa(u.i)),this.m=u.m):u&&(p=String(u).match(zl))?(this.l=!1,Qi(this,p[1]||"",!0),this.o=Yi(p[2]||""),this.g=Yi(p[3]||"",!0),Wn(this,p[4]),this.h=Yi(p[5]||"",!0),ni(this,p[6]||"",!0),this.m=Yi(p[7]||"")):(this.l=!1,this.i=new Pe(null,this.l))}Hn.prototype.toString=function(){const u=[];var p=this.j;p&&u.push(Ji(p,aa,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Ji(p,aa,!0),"@"),u.push(qn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&u.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Ji(y,y.charAt(0)=="/"?Xi:la,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Ji(y,ua)),u.join("")},Hn.prototype.resolve=function(u){const p=mn(this);let y=!!u.j;y?Qi(p,u.j):y=!!u.o,y?p.o=u.o:y=!!u.g,y?p.g=u.g:y=u.u!=null;var w=u.h;if(y)Wn(p,u.u);else if(y=!!u.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var L=p.h.lastIndexOf("/");L!=-1&&(w=p.h.slice(0,L+1)+w)}if(L=w,L==".."||L==".")w="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){w=L.lastIndexOf("/",0)==0,L=L.split("/");const j=[];for(let X=0;X<L.length;){const _e=L[X++];_e=="."?w&&X==L.length&&j.push(""):_e==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),w&&X==L.length&&j.push("")):(j.push(_e),w=!0)}w=j.join("/")}else w=L}return y?p.h=w:y=u.i.toString()!=="",y?ni(p,fa(u.i)):y=!!u.m,y&&(p.m=u.m),p};function mn(u){return new Hn(u)}function Qi(u,p,y){u.j=y?Yi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Wn(u,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);u.u=p}else u.u=null}function ni(u,p,y){p instanceof Pe?(u.i=p,Hs(u.i,u.l)):(y||(p=Ji(p,ah)),u.i=new Pe(p,u.l))}function Fe(u,p,y){u.i.set(p,y)}function wr(u){return Fe(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Yi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ji(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,oa),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function oa(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var aa=/[#\/\?@]/g,la=/[#\?:]/g,Xi=/[#\?]/g,ah=/[#\?@]/g,ua=/#/g;function Pe(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Kn(u){u.g||(u.g=new Map,u.h=0,u.i&&rn(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Pe.prototype,r.add=function(u,p){Kn(this),this.i=null,u=Gn(this,u);let y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function ca(u,p){Kn(u),p=Gn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function qs(u,p){return Kn(u),p=Gn(u,p),u.g.has(p)}r.forEach=function(u,p){Kn(this),this.g.forEach(function(y,w){y.forEach(function(L){u.call(p,L,w,this)},this)},this)};function ha(u,p){Kn(u);let y=[];if(typeof p=="string")qs(u,p)&&(y=y.concat(u.g.get(Gn(u,p))));else for(u=Array.from(u.g.values()),p=0;p<u.length;p++)y=y.concat(u[p]);return y}r.set=function(u,p){return Kn(this),this.i=null,u=Gn(this,u),qs(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=ha(this,u),u.length>0?String(u[0]):p):p};function da(u,p,y){ca(u,p),y.length>0&&(u.i=null,u.g.set(Gn(u,p),z(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var y=p[w];const L=qn(y);y=ha(this,y);for(let j=0;j<y.length;j++){let X=L;y[j]!==""&&(X+="="+qn(y[j])),u.push(X)}}return this.i=u.join("&")};function fa(u){const p=new Pe;return p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),p}function Gn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Hs(u,p){p&&!u.j&&(Kn(u),u.i=null,u.g.forEach(function(y,w){const L=w.toLowerCase();w!=L&&(ca(this,w),da(this,L,y))},u)),u.j=p}function Qn(u,p){const y=new Zr;if(h.Image){const w=new Image;w.onload=E(Rt,y,"TestLoadImage: loaded",!0,p,w),w.onerror=E(Rt,y,"TestLoadImage: error",!1,p,w),w.onabort=E(Rt,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(Rt,y,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Yn(u,p){const y=new Zr,w=new AbortController,L=setTimeout(()=>{w.abort(),Rt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?Rt(y,"TestPingServer: ok",!0,p):Rt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Rt(y,"TestPingServer: error",!1,p)})}function Rt(u,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Zi(){this.g=new $i}function Er(u){this.i=u.Sb||null,this.h=u.ab||!1}x(Er,Qr),Er.prototype.g=function(){return new sn(this.i,this.h)};function sn(u,p){dt.call(this),this.H=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}x(sn,dt),r=sn.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=p,this.readyState=1,Cn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(p.body=u),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Bl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Bl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?ri(this):Cn(this),this.readyState==3&&Bl(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,ri(this))},r.Na=function(u){this.g&&(this.response=u,ri(this))},r.ga=function(){this.g&&ri(this)};function ri(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Cn(u)}r.setRequestHeader=function(u,p){this.A.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Cn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function $l(u){let p="";return ue(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Ws(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=$l(y),typeof u=="string"?y!=null&&qn(y):Fe(u,p,y))}function qe(u){dt.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}x(qe,dt);var ql=/^https?$/i,lh=["POST","PUT"];r=qe.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ol.g(),this.g.onreadystatechange=b(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(j){ii(this,j);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())y.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),L=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(lh,p,void 0)>=0)||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of y)this.g.setRequestHeader(j,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){ii(this,j)}};function ii(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.o=5,si(u),Ir(u)}function si(u){u.A||(u.A=!0,at(u,"complete"),at(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,at(this,"complete"),at(this,"abort"),Ir(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),qe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Tr(this):this.Xa())},r.Xa=function(){Tr(this)};function Tr(u){if(u.h&&typeof l<"u"){if(u.v&&Jn(u)==4)setTimeout(u.Ca.bind(u),0);else if(at(u,"readystatechange"),Jn(u)==4){u.h=!1;try{const j=u.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=j===0){let X=String(u.D).match(zl)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),w=!ql.test(X?X.toLowerCase():"")}y=w}if(y)at(u,"complete"),at(u,"success");else{u.o=6;try{var L=Jn(u)>2?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.ca()+"]",si(u)}}finally{Ir(u)}}}}function Ir(u,p){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const y=u.g;u.g=null,p||at(u,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Jn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Jn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Cl(p)}};function Hl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function pa(u){const p={};u=(u.g&&Jn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(R(u[w]))continue;var y=js(u[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[L]||[];p[L]=j,j.push(y)}D(p,function(w){return w.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function Ks(u){this.za=0,this.i=[],this.j=new Zr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xn("baseRetryDelayMs",5e3,u),this.Za=Xn("retryDelaySeedMs",1e4,u),this.Ta=Xn("forwardChannelMaxRetries",2,u),this.va=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Bs(u&&u.concurrentRequestLimit),this.Ba=new Zi,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Ks.prototype,r.ka=8,r.I=1,r.connect=function(u,p,y,w){nt(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.J=ga(this,null,this.W),Sr(this)};function Gs(u){if(Qs(u),u.I==3){var p=u.V++,y=mn(u.J);if(Fe(y,"SID",u.M),Fe(y,"RID",p),Fe(y,"TYPE","terminate"),Zn(u,y),p=new pn(u,u.j,p),p.M=2,p.A=wr(mn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Kl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Hi(p)}ns(u)}function on(u){u.g&&(ts(u),u.g.cancel(),u.g=null)}function Qs(u){on(u),u.v&&(h.clearTimeout(u.v),u.v=null),Ys(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Sr(u){if(!ia(u.h)&&!u.m){u.m=!0;var p=u.Ea;Ue||T(),Ce||(Ue(),Ce=!0),A.add(p,u),u.D=0}}function Wl(u,p){return Ki(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=p.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Xr(_(u.Ea,u,p),Xs(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const L=new pn(this,this.j,u);let j=this.o;if(this.U&&(j?(j=q(j),Ie(j,this.U)):j=this.U),this.u!==null||this.R||(L.J=j,j=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ma(this,L,p),y=mn(this.J),Fe(y,"RID",u),Fe(y,"CVER",22),this.G&&Fe(y,"X-HTTP-Session-Id",this.G),Zn(this,y),j&&(this.R?p="headers="+qn($l(j))+"&"+p:this.u&&Ws(y,this.u,j)),$s(this.h,L),this.Ra&&Fe(y,"TYPE","init"),this.S?(Fe(y,"$req",p),Fe(y,"SID","null"),L.U=!0,Pn(L,y,null)):Pn(L,y,p),this.I=2}}else this.I==3&&(u?es(this,u):this.i.length==0||ia(this.h)||es(this))};function es(u,p){var y;p?y=p.l:y=u.V++;const w=mn(u.J);Fe(w,"SID",u.M),Fe(w,"RID",y),Fe(w,"AID",u.K),Zn(u,w),u.u&&u.o&&Ws(w,u.u,u.o),y=new pn(u,u.j,y,u.D+1),u.u===null&&(y.J=u.o),p&&(u.i=p.G.concat(u.i)),p=ma(u,y,1e3),y.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),$s(u.h,y),Pn(y,w,p)}function Zn(u,p){u.H&&ue(u.H,function(y,w){Fe(p,w,y)}),u.l&&ue({},function(y,w){Fe(p,w,y)})}function ma(u,p,y){y=Math.min(u.i.length,y);const w=u.l?_(u.l.Ka,u.l,u):null;e:{var L=u.i;let _e=-1;for(;;){const lt=["count="+y];_e==-1?y>0?(_e=L[0].g,lt.push("ofs="+_e)):_e=0:lt.push("ofs="+_e);let Be=!0;for(let ft=0;ft<y;ft++){var j=L[ft].g;const ln=L[ft].map;if(j-=_e,j<0)_e=Math.max(0,L[ft].g-100),Be=!1;else try{j="req"+j+"_"||"";try{var X=ln instanceof Map?ln:Object.entries(ln);for(const[Ar,tr]of X){let nr=tr;m(tr)&&(nr=Gr(tr)),lt.push(j+Ar+"="+encodeURIComponent(nr))}}catch(Ar){throw lt.push(j+"type="+encodeURIComponent("_badmap")),Ar}}catch{w&&w(ln)}}if(Be){X=lt.join("&");break e}}X=void 0}return u=u.i.splice(0,y),p.G=u,X}function Vt(u){if(!u.g&&!u.v){u.Y=1;var p=u.Da;Ue||T(),Ce||(Ue(),Ce=!0),A.add(p,u),u.A=0}}function er(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Xr(_(u.Da,u),Xs(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,oi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Xr(_(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),on(this),oi(this))};function ts(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function oi(u){u.g=new pn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var p=mn(u.na);Fe(p,"RID","rpc"),Fe(p,"SID",u.M),Fe(p,"AID",u.K),Fe(p,"CI",u.F?"0":"1"),!u.F&&u.ia&&Fe(p,"TO",u.ia),Fe(p,"TYPE","xmlhttp"),Zn(u,p),u.u&&u.o&&Ws(p,u.u,u.o),u.O&&(u.g.H=u.O);var y=u.g;u=u.ba,y.M=1,y.A=wr(mn(p)),y.u=null,y.R=!0,na(y,u)}r.Va=function(){this.C!=null&&(this.C=null,on(this),er(this),nt(19))};function Ys(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Js(u,p){var y=null;if(u.g==p){Ys(u),ts(u),u.g=null;var w=2}else if(sa(u.h,p))y=p.G,Gi(u.h,p),w=1;else return;if(u.I!=0){if(p.o)if(w==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var L=u.D;w=Jr(),at(w,new ea(w,y)),Sr(u)}else Vt(u);else if(L=p.m,L==3||L==0&&p.X>0||!(w==1&&Wl(u,p)||w==2&&er(u)))switch(y&&y.length>0&&(p=u.h,p.i=p.i.concat(y)),L){case 1:an(u,5);break;case 4:an(u,10);break;case 3:an(u,6);break;default:an(u,2)}}}function Xs(u,p){let y=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(y*=2),y*p}function an(u,p){if(u.j.info("Error code "+p),p==2){var y=_(u.bb,u),w=u.Ua;const L=!w;w=new Hn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Qi(w,"https"),wr(w),L?Qn(w.toString(),y):Yn(w.toString(),y)}else nt(2);u.I=0,u.l&&u.l.pa(p),ns(u),Qs(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function ns(u){if(u.I=0,u.ja=[],u.l){const p=nn(u.h);(p.length!=0||u.i.length!=0)&&(Y(u.ja,p),Y(u.ja,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.oa()}}function ga(u,p,y){var w=y instanceof Hn?mn(y):new Hn(y);if(w.g!="")p&&(w.g=p+"."+w.g),Wn(w,w.u);else{var L=h.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const j=new Hn(null);w&&Qi(j,w),p&&(j.g=p),L&&Wn(j,L),y&&(j.h=y),w=j}return y=u.G,p=u.wa,y&&p&&Fe(w,y,p),Fe(w,"VER",u.ka),Zn(u,w),w}function Kl(u,p,y){if(p&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Aa&&!u.ma?new qe(new Er({ab:y})):new qe(u.ma),p.Fa(u.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gl(){}r=Gl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Zs(){}Zs.prototype.g=function(u,p){return new xt(u,p)};function xt(u,p){dt.call(this),this.g=new Ks(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(u?u["X-WebChannel-Client-Profile"]=p.sa:u={"X-WebChannel-Client-Profile":p.sa}),this.g.U=u,(u=p&&p.Qb)&&!R(u)&&(this.g.u=u),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!R(p)&&(this.g.G=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new ai(this)}x(xt,dt),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Gs(this.g)},xt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.v&&(y={},y.__data__=Gr(u),u=y);p.i.push(new oh(p.Ya++,u)),p.I==3&&Sr(p)},xt.prototype.N=function(){this.g.l=null,delete this.j,Gs(this.g),delete this.g,xt.Z.N.call(this)};function Ql(u){Ls.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}x(Ql,Ls);function Yl(){Zo.call(this),this.status=1}x(Yl,Zo);function ai(u){this.g=u}x(ai,Gl),ai.prototype.ra=function(){at(this.g,"a")},ai.prototype.qa=function(u){at(this.g,new Ql(u))},ai.prototype.pa=function(u){at(this.g,new Yl)},ai.prototype.oa=function(){at(this.g,"b")},Zs.prototype.createWebChannel=Zs.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,dw=function(){return new Zs},hw=function(){return Jr()},cw=xn,cf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ei.NO_ERROR=0,ei.TIMEOUT=8,ei.HTTP_ERROR=6,ic=ei,ti.COMPLETE="complete",uw=ti,Nl.EventType=Yr,Yr.OPEN="a",Yr.CLOSE="b",Yr.ERROR="c",Yr.MESSAGE="d",dt.prototype.listen=dt.prototype.J,Ga=Nl,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,lw=qe}).apply(typeof Hu<"u"?Hu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o="12.11.0";function Lk(r){$o=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const As=new xf("@firebase/firestore");function Io(){return As.logLevel}function ne(r,...e){if(As.logLevel<=Ae.DEBUG){const t=e.map(Wf);As.debug(`Firestore (${$o}): ${r}`,...t)}}function Br(r,...e){if(As.logLevel<=Ae.ERROR){const t=e.map(Wf);As.error(`Firestore (${$o}): ${r}`,...t)}}function ks(r,...e){if(As.logLevel<=Ae.WARN){const t=e.map(Wf);As.warn(`Firestore (${$o}): ${r}`,...t)}}function Wf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,fw(r,s,t)}function fw(r,e,t){let s=`FIRESTORE (${$o}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Br(s),new Error(s)}function ze(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||fw(e,o,s)}function ve(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends mr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class Uk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class jk{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ur,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ur)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new pw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class zk{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Bk{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new zk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Uy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $k{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,In(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Uy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Uy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=qk(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function ke(r,e){return r<e?-1:r>e?1:0}function hf(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),l=e.charAt(s);if(o!==l)return Kd(o)===Kd(l)?ke(o,l):Kd(o)?1:-1}return ke(r.length,e.length)}const Hk=55296,Wk=57343;function Kd(r){const e=r.charCodeAt(0);return e>=Hk&&e<=Wk}function Oo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="__name__";class ar{constructor(e,t,s){t===void 0?t=0:t>e.length&&fe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&fe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=ar.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return ke(e.length,t.length)}static compareSegments(e,t){const s=ar.isNumericId(e),o=ar.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ar.extractNumericId(e).compare(ar.extractNumericId(t)):hf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ci.fromString(e.substring(4,e.length-2))}}class Ke extends ar{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const Kk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ar{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return Kk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jy}static keyField(){return new Dt([jy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ee(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(l(),o++)}if(l(),h)throw new ee(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Ke.fromString(e))}static fromName(e){return new le(Ke.fromString(e).popFirst(5))}static empty(){return new le(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(r,e,t){if(!t)throw new ee(B.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Gk(r,e,t,s){if(e===!0&&s===!0)throw new ee(B.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function zy(r){if(!le.isDocumentKey(r))throw new ee(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function By(r){if(le.isDocumentKey(r))throw new ee(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function gw(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function jc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":fe(12329,{type:typeof r})}function tn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ee(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jc(r);throw new ee(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function yt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Tl(r,e){if(!gw(r))throw new ee(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ee(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=-62135596800,qy=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*qy);return new Je(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$y)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qy}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Tl(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$y;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:yt("string",Je._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Je(0,0))}static max(){return new ye(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ul=-1;function Qk(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(s===1e9?new Je(t+1,0):new Je(t,s));return new Di(o,le.empty(),e)}function Yk(r){return new Di(r.readTime,r.key,ul)}class Di{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Di(ye.min(),le.empty(),ul)}static max(){return new Di(ye.max(),le.empty(),ul)}}function Jk(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(r.documentKey,e.documentKey),t!==0?t:ke(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(r){if(r.code!==B.FAILED_PRECONDITION||r.message!==Xk)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,l=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const l=e.length,h=new Array(l);let m=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++m,m===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new $(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function eR(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ho(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class zc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}zc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=-1;function Bc(r){return r==null}function wc(r){return r===0&&1/r==-1/0}function tR(r){return typeof r=="number"&&Number.isInteger(r)&&!wc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="";function nR(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Hy(e)),e=rR(r.get(t),e);return Hy(e)}function rR(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case yw:t+="";break;default:t+=l}}return t}function Hy(r){return r+yw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ji(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function _w(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wu(this.root,e,this.comparator,!0)}}class Wu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ky(this.data.getIterator())}getIteratorFrom(e){return new Ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new fn([])}unionWith(e){let t=new Et(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Oo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class vw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new vw("Invalid base64 string: "+l):l}})(e);return new bt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const iR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(r){if(ze(!!r,39018),typeof r=="string"){let e=0;const t=iR.exec(r);if(ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ct(r.seconds),nanos:ct(r.nanos)}}function ct(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Vi(r){return typeof r=="string"?bt.fromBase64String(r):bt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="server_timestamp",Ew="__type__",Tw="__previous_value__",Iw="__local_write_time__";function Qf(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Ew])==null?void 0:s.stringValue)===ww}function $c(r){const e=r.mapValue.fields[Tw];return Qf(e)?$c(e):e}function cl(r){const e=bi(r.mapValue.fields[Iw].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t,s,o,l,h,m,g,_,E,x){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E,this.apiKey=x}}const Ec="(default)";class hl{constructor(e,t){this.projectId=e,this.database=t||Ec}static empty(){return new hl("","")}get isDefaultDatabase(){return this.database===Ec}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}}function oR(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new ee(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(r.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="__type__",aR="__max__",Ku={mapValue:{}},Aw="__vector__",Tc="value";function Oi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Qf(r)?4:uR(r)?9007199254740991:lR(r)?10:11:fe(28295,{value:r})}function pr(r,e){if(r===e)return!0;const t=Oi(r);if(t!==Oi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return cl(r).isEqual(cl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=bi(o.timestampValue),m=bi(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Vi(o.bytesValue).isEqual(Vi(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ct(o.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ct(o.integerValue)===ct(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ct(o.doubleValue),m=ct(l.doubleValue);return h===m?wc(h)===wc(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return Oo(r.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},m=l.mapValue.fields||{};if(Wy(h)!==Wy(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!pr(h[g],m[g])))return!1;return!0})(r,e);default:return fe(52216,{left:r})}}function dl(r,e){return(r.values||[]).find((t=>pr(t,e)))!==void 0}function Mo(r,e){if(r===e)return 0;const t=Oi(r),s=Oi(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const m=ct(l.integerValue||l.doubleValue),g=ct(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Gy(r.timestampValue,e.timestampValue);case 4:return Gy(cl(r),cl(e));case 5:return hf(r.stringValue,e.stringValue);case 6:return(function(l,h){const m=Vi(l),g=Vi(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const m=l.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const E=ke(m[_],g[_]);if(E!==0)return E}return ke(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const m=ke(ct(l.latitude),ct(h.latitude));return m!==0?m:ke(ct(l.longitude),ct(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Qy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var b,z,Y,J;const m=l.fields||{},g=h.fields||{},_=(b=m[Tc])==null?void 0:b.arrayValue,E=(z=g[Tc])==null?void 0:z.arrayValue,x=ke(((Y=_==null?void 0:_.values)==null?void 0:Y.length)||0,((J=E==null?void 0:E.values)==null?void 0:J.length)||0);return x!==0?x:Qy(_,E)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Ku.mapValue&&h===Ku.mapValue)return 0;if(l===Ku.mapValue)return 1;if(h===Ku.mapValue)return-1;const m=l.fields||{},g=Object.keys(m),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let x=0;x<g.length&&x<E.length;++x){const b=hf(g[x],E[x]);if(b!==0)return b;const z=Mo(m[g[x]],_[E[x]]);if(z!==0)return z}return ke(g.length,E.length)})(r.mapValue,e.mapValue);default:throw fe(23264,{he:t})}}function Gy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ke(r,e);const t=bi(r),s=bi(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function Qy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Mo(t[o],s[o]);if(l)return l}return ke(t.length,s.length)}function Lo(r){return df(r)}function df(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=bi(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Vi(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return le.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=df(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${df(t.fields[h])}`;return o+"}"})(r.mapValue):fe(61005,{value:r})}function sc(r){switch(Oi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$c(r);return e?16+sc(e):16;case 5:return 2*r.stringValue.length;case 6:return Vi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+sc(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ji(s.fields,((l,h)=>{o+=l.length+sc(h)})),o})(r.mapValue);default:throw fe(13486,{value:r})}}function Yy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ff(r){return!!r&&"integerValue"in r}function Yf(r){return!!r&&"arrayValue"in r}function Jy(r){return!!r&&"nullValue"in r}function Xy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function oc(r){return!!r&&"mapValue"in r}function lR(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Sw])==null?void 0:s.stringValue)===Aw}function el(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ji(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=el(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=el(r.arrayValue.values[t]);return e}return{...r}}function uR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===aR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!oc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=el(h):o.push(m.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());oc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];oc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ji(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new en(el(this.value))}}function kw(r){const e=[];return ji(r.fields,((t,s)=>{const o=new Dt([t]);if(oc(s)){const l=kw(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,s,o,l,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Bt(e,0,ye.min(),ye.min(),ye.min(),en.empty(),0)}static newFoundDocument(e,t,s,o){return new Bt(e,1,t,ye.min(),s,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,ye.min(),ye.min(),en.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,ye.min(),ye.min(),en.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ic{constructor(e,t){this.position=e,this.inclusive=t}}function Zy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=le.comparator(le.fromName(h.referenceValue),t.key):s=Mo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function e_(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!pr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class fl{constructor(e,t="asc"){this.field=e,this.dir=t}}function cR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Rw{}class gt extends Rw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new dR(e,t,s):t==="array-contains"?new mR(e,s):t==="in"?new gR(e,s):t==="not-in"?new yR(e,s):t==="array-contains-any"?new _R(e,s):new gt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new fR(e,s):new pR(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Mo(t,this.value)):t!==null&&Oi(this.value)===Oi(t)&&this.matchesComparison(Mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends Rw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Bn(e,t)}matches(e){return xw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xw(r){return r.op==="and"}function Pw(r){return hR(r)&&xw(r)}function hR(r){for(const e of r.filters)if(e instanceof Bn)return!1;return!0}function pf(r){if(r instanceof gt)return r.field.canonicalString()+r.op.toString()+Lo(r.value);if(Pw(r))return r.filters.map((e=>pf(e))).join(",");{const e=r.filters.map((t=>pf(t))).join(",");return`${r.op}(${e})`}}function Cw(r,e){return r instanceof gt?(function(s,o){return o instanceof gt&&s.op===o.op&&s.field.isEqual(o.field)&&pr(s.value,o.value)})(r,e):r instanceof Bn?(function(s,o){return o instanceof Bn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,m)=>l&&Cw(h,o.filters[m])),!0):!1})(r,e):void fe(19439)}function Nw(r){return r instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Lo(t.value)}`})(r):r instanceof Bn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Nw).join(" ,")+"}"})(r):"Filter"}class dR extends gt{constructor(e,t,s){super(e,t,s),this.key=le.fromName(s.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class fR extends gt{constructor(e,t){super(e,"in",t),this.keys=Dw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class pR extends gt{constructor(e,t){super(e,"not-in",t),this.keys=Dw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Dw(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>le.fromName(s.referenceValue)))}class mR extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yf(t)&&dl(t.arrayValue,this.value)}}class gR extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dl(this.value.arrayValue,t)}}class yR extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(dl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!dl(this.value.arrayValue,t)}}class _R extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>dl(this.value.arrayValue,s)))}}/**
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
 */class vR{constructor(e,t=null,s=[],o=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=m,this.Te=null}}function t_(r,e=null,t=[],s=[],o=null,l=null,h=null){return new vR(r,e,t,s,o,l,h)}function Jf(r){const e=ve(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>pf(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Lo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Lo(s))).join(",")),e.Te=t}return e.Te}function Xf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!cR(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Cw(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!e_(r.startAt,e.startAt)&&e_(r.endAt,e.endAt)}function mf(r){return le.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t=null,s=[],o=[],l=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function wR(r,e,t,s,o,l,h,m){return new Wo(r,e,t,s,o,l,h,m)}function qc(r){return new Wo(r)}function n_(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ER(r){return le.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function bw(r){return r.collectionGroup!==null}function tl(r){const e=ve(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Et(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new fl(l,s))})),t.has(Dt.keyField().canonicalString())||e.Ee.push(new fl(Dt.keyField(),s))}return e.Ee}function cr(r){const e=ve(r);return e.Ie||(e.Ie=TR(e,tl(r))),e.Ie}function TR(r,e){if(r.limitType==="F")return t_(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new fl(o.field,l)}));const t=r.endAt?new Ic(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ic(r.startAt.position,r.startAt.inclusive):null;return t_(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function gf(r,e){const t=r.filters.concat([e]);return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function IR(r,e){const t=r.explicitOrderBy.concat([e]);return new Wo(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function Sc(r,e,t){return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Hc(r,e){return Xf(cr(r),cr(e))&&r.limitType===e.limitType}function Vw(r){return`${Jf(cr(r))}|lt:${r.limitType}`}function So(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Nw(o))).join(", ")}]`),Bc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Lo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Lo(o))).join(",")),`Target(${s})`})(cr(r))}; limitType=${r.limitType})`}function Wc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):le.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of tl(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Zy(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,tl(s),o)||s.endAt&&!(function(h,m,g){const _=Zy(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,tl(s),o))})(r,e)}function SR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ow(r){return(e,t)=>{let s=!1;for(const o of tl(r)){const l=AR(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function AR(r,e,t){const s=r.field.isKeyField()?le.comparator(e.key,t.key):(function(l,h,m){const g=h.data.field(l),_=m.data.field(l);return g!==null&&_!==null?Mo(g,_):fe(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return fe(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return _w(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new tt(le.comparator);function $r(){return kR}const Mw=new tt(le.comparator);function Qa(...r){let e=Mw;for(const t of r)e=e.insert(t.key,t);return e}function Lw(r){let e=Mw;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ys(){return nl()}function Fw(){return nl()}function nl(){return new Ns((r=>r.toString()),((r,e)=>r.isEqual(e)))}const RR=new tt(le.comparator),xR=new Et(le.comparator);function Re(...r){let e=xR;for(const t of r)e=e.add(t);return e}const PR=new Et(ke);function CR(){return PR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wc(e)?"-0":e}}function Uw(r){return{integerValue:""+r}}function NR(r,e){return tR(e)?Uw(e):Zf(r,e)}/**
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
 */class Kc{constructor(){this._=void 0}}function DR(r,e,t){return r instanceof Ac?(function(o,l){const h={fields:{[Ew]:{stringValue:ww},[Iw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Qf(l)&&(l=$c(l)),l&&(h.fields[Tw]=l),{mapValue:h}})(t,e):r instanceof pl?zw(r,e):r instanceof ml?Bw(r,e):(function(o,l){const h=jw(o,l),m=r_(h)+r_(o.Ae);return ff(h)&&ff(o.Ae)?Uw(m):Zf(o.serializer,m)})(r,e)}function bR(r,e,t){return r instanceof pl?zw(r,e):r instanceof ml?Bw(r,e):t}function jw(r,e){return r instanceof kc?(function(s){return ff(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Ac extends Kc{}class pl extends Kc{constructor(e){super(),this.elements=e}}function zw(r,e){const t=$w(e);for(const s of r.elements)t.some((o=>pr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class ml extends Kc{constructor(e){super(),this.elements=e}}function Bw(r,e){let t=$w(e);for(const s of r.elements)t=t.filter((o=>!pr(o,s)));return{arrayValue:{values:t}}}class kc extends Kc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function r_(r){return ct(r.integerValue||r.doubleValue)}function $w(r){return Yf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function VR(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof pl&&o instanceof pl||s instanceof ml&&o instanceof ml?Oo(s.elements,o.elements,pr):s instanceof kc&&o instanceof kc?pr(s.Ae,o.Ae):s instanceof Ac&&o instanceof Ac})(r.transform,e.transform)}class OR{constructor(e,t){this.version=e,this.transformResults=t}}class kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ac(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Gc{}function qw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new ep(r.key,kn.none()):new Il(r.key,r.data,kn.none());{const t=r.data,s=en.empty();let o=new Et(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new zi(r.key,s,new fn(o.toArray()),kn.none())}}function MR(r,e,t){r instanceof Il?(function(o,l,h){const m=o.value.clone(),g=s_(o.fieldTransforms,l,h.transformResults);m.setAll(g),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof zi?(function(o,l,h){if(!ac(o.precondition,l))return void l.convertToUnknownDocument(h.version);const m=s_(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Hw(o)),g.setAll(m),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function rl(r,e,t,s){return r instanceof Il?(function(l,h,m,g){if(!ac(l.precondition,h))return m;const _=l.value.clone(),E=o_(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof zi?(function(l,h,m,g){if(!ac(l.precondition,h))return m;const _=o_(l.fieldTransforms,g,h),E=h.data;return E.setAll(Hw(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((x=>x.field)))})(r,e,t,s):(function(l,h,m){return ac(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function LR(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=jw(s.transform,o||null);l!=null&&(t===null&&(t=en.empty()),t.set(s.field,l))}return t||null}function i_(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Oo(s,o,((l,h)=>VR(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Il extends Gc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class zi extends Gc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Hw(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function s_(r,e,t){const s=new Map;ze(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,m=e.data.field(l.field);s.set(l.field,bR(h,m,t[o]))}return s}function o_(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,DR(l,h,e))}return s}class ep extends Gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FR extends Gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&MR(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=rl(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=rl(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Fw();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(o.key)?null:m;const g=qw(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ye.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Re())}isEqual(e){return this.batchId===e.batchId&&Oo(this.mutations,e.mutations,((t,s)=>i_(t,s)))&&Oo(this.baseMutations,e.baseMutations,((t,s)=>i_(t,s)))}}class tp{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return RR})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new tp(e,t,s,o)}}/**
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
 */class jR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,be;function BR(r){switch(r){case B.OK:return fe(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return fe(15467,{code:r})}}function Ww(r){if(r===void 0)return Br("GRPC error has no .code"),B.UNKNOWN;switch(r){case mt.OK:return B.OK;case mt.CANCELLED:return B.CANCELLED;case mt.UNKNOWN:return B.UNKNOWN;case mt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case mt.INTERNAL:return B.INTERNAL;case mt.UNAVAILABLE:return B.UNAVAILABLE;case mt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case mt.NOT_FOUND:return B.NOT_FOUND;case mt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case mt.ABORTED:return B.ABORTED;case mt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case mt.DATA_LOSS:return B.DATA_LOSS;default:return fe(39323,{code:r})}}(be=mt||(mt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $R(){return new TextEncoder}/**
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
 */const qR=new Ci([4294967295,4294967295],0);function a_(r){const e=$R().encode(r),t=new aw;return t.update(e),new Uint8Array(t.digest())}function l_(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ci([t,s],0),new Ci([o,l],0)]}class np{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ya(`Invalid padding: ${t}`);if(s<0)throw new Ya(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ya(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ya(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ci.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ci.fromNumber(s)));return o.compare(qR)===1&&(o=new Ci([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=a_(e),[s,o]=l_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new np(l,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=a_(e),[s,o]=l_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Qc(ye.min(),o,new tt(ke),$r(),Re())}}class Sl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Sl(s,t,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Kw{constructor(e,t){this.targetId=e,this.Ce=t}}class Gw{constructor(e,t,s=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class u_{constructor(){this.ve=0,this.Fe=c_(),this.Me=bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Re(),t=Re(),s=Re();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:fe(38017,{changeType:l})}})),new Sl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=c_()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class HR{constructor(e){this.Ge=e,this.ze=new Map,this.je=$r(),this.Je=Gu(),this.He=Gu(),this.Ze=new tt(ke)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(mf(l))if(s===0){const h=new le(l.path);this.et(t,h,Bt.newNoDocument(h,ye.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,m;try{h=Vi(s).toUint8Array()}catch(g){if(g instanceof vw)return ks("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new np(h,o,l)}catch(g){return ks(g instanceof Ya?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const m=this.ot(h);if(m){if(l.current&&mf(m.target)){const g=new le(m.target.path);this.Et(g).has(h)||this.It(h,g)||this.et(h,g,Bt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let s=Re();this.He.forEach(((l,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new Qc(e,t,this.Ze,this.je,s);return this.je=$r(),this.Je=Gu(),this.He=Gu(),this.Ze=new tt(ke),o}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new u_,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Et(ke),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Et(ke),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new u_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Gu(){return new tt(le.comparator)}function c_(){return new tt(le.comparator)}const WR={asc:"ASCENDING",desc:"DESCENDING"},KR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GR={and:"AND",or:"OR"};class QR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yf(r,e){return r.useProto3Json||Bc(e)?e:{value:e}}function Rc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function YR(r,e){return Rc(r,e.toTimestamp())}function hr(r){return ze(!!r,49232),ye.fromTimestamp((function(t){const s=bi(t);return new Je(s.seconds,s.nanos)})(r))}function rp(r,e){return _f(r,e).canonicalString()}function _f(r,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Yw(r){const e=Ke.fromString(r);return ze(t0(e),10190,{key:e.toString()}),e}function vf(r,e){return rp(r.databaseId,e.path)}function Gd(r,e){const t=Yw(e);if(t.get(1)!==r.databaseId.projectId)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new le(Xw(t))}function Jw(r,e){return rp(r.databaseId,e)}function JR(r){const e=Yw(r);return e.length===4?Ke.emptyPath():Xw(e)}function wf(r){return new Ke(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Xw(r){return ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function h_(r,e,t){return{name:vf(r,e),fields:t.value.mapValue.fields}}function XR(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:fe(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(ze(E===void 0||typeof E=="string",58123),bt.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),bt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?B.UNKNOWN:Ww(_.code);return new ee(E,_.message||"")})(h);t=new Gw(s,o,l,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Gd(r,s.document.name),l=hr(s.document.updateTime),h=s.document.createTime?hr(s.document.createTime):ye.min(),m=new en({mapValue:{fields:s.document.fields}}),g=Bt.newFoundDocument(o,l,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];t=new lc(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Gd(r,s.document),l=s.readTime?hr(s.readTime):ye.min(),h=Bt.newNoDocument(o,l),m=s.removedTargetIds||[];t=new lc([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Gd(r,s.document),l=s.removedTargetIds||[];t=new lc([],l,o,null)}else{if(!("filter"in e))return fe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new zR(o,l),m=s.targetId;t=new Kw(m,h)}}return t}function ZR(r,e){let t;if(e instanceof Il)t={update:h_(r,e.key,e.value)};else if(e instanceof ep)t={delete:vf(r,e.key)};else if(e instanceof zi)t={update:h_(r,e.key,e.data),updateMask:lx(e.fieldMask)};else{if(!(e instanceof FR))return fe(16599,{dt:e.type});t={verify:vf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const m=h.transform;if(m instanceof Ac)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof pl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ml)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof kc)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw fe(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:YR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:fe(27497)})(r,e.precondition)),t}function ex(r,e){return r&&r.length>0?(ze(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?hr(o.updateTime):hr(l);return h.isEqual(ye.min())&&(h=hr(l)),new OR(h,o.transformResults||[])})(t,e)))):[]}function tx(r,e){return{documents:[Jw(r,e.path)]}}function nx(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Jw(r,o);const l=(function(_){if(_.length!==0)return e0(Bn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(b){return{field:Ao(b.field),direction:sx(b.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=yf(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function rx(r){let e=JR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(x){const b=Zw(x);return b instanceof Bn&&Pw(b)?b.getFilters():[b]})(t.where));let h=[];t.orderBy&&(h=(function(x){return x.map((b=>(function(Y){return new fl(ko(Y.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(b)))})(t.orderBy));let m=null;t.limit&&(m=(function(x){let b;return b=typeof x=="object"?x.value:x,Bc(b)?null:b})(t.limit));let g=null;t.startAt&&(g=(function(x){const b=!!x.before,z=x.values||[];return new Ic(z,b)})(t.startAt));let _=null;return t.endAt&&(_=(function(x){const b=!x.before,z=x.values||[];return new Ic(z,b)})(t.endAt)),wR(e,o,h,l,m,"F",g,_)}function ix(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ko(t.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ko(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ko(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ko(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(r):r.fieldFilter!==void 0?(function(t){return gt.create(ko(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Bn.create(t.compositeFilter.filters.map((s=>Zw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(t.compositeFilter.op))})(r):fe(30097,{filter:r})}function sx(r){return WR[r]}function ox(r){return KR[r]}function ax(r){return GR[r]}function Ao(r){return{fieldPath:r.canonicalString()}}function ko(r){return Dt.fromServerFormat(r.fieldPath)}function e0(r){return r instanceof gt?(function(t){if(t.op==="=="){if(Xy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NAN"}};if(Jy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NOT_NAN"}};if(Jy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ao(t.field),op:ox(t.op),value:t.value}}})(r):r instanceof Bn?(function(t){const s=t.getFilters().map((o=>e0(o)));return s.length===1?s[0]:{compositeFilter:{op:ax(t.op),filters:s}}})(r):fe(54877,{filter:r})}function lx(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function t0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function n0(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,s,o,l=ye.min(),h=ye.min(),m=bt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new Ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.yt=e}}function cx(r){const e=rx({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Sc(e,e.limit,"L"):e}/**
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
 */class hx{constructor(){this.bn=new dx}addToCollectionParentIndex(e,t){return this.bn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Di.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class dx{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Et(Ke.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Et(Ke.comparator)).toArray()}}/**
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
 */const d_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},r0=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(r0,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const f_="LruGarbageCollector",fx=1048576;function p_([r,e],[t,s]){const o=ke(r,t);return o===0?ke(e,s):o}class px{constructor(e){this.Pr=e,this.buffer=new Et(p_),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();p_(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class mx{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ne(f_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ho(t)?ne(f_,"Ignoring IndexedDB error during garbage collection: ",t):await qo(t)}await this.Ar(3e5)}))}}class gx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(zc.ce);const s=new px(t);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(d_)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),d_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,l,h,m,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,h=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(s=x,m=Date.now(),this.removeTargets(e,s,t)))).next((x=>(l=x,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((x=>(_=Date.now(),Io()<=Ae.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${l} targets in `+(g-m)+`ms
	Removed ${x} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:x}))))}}function yx(r,e){return new gx(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.changes=new Ns((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&rl(s.mutation,o,fn.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Re()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Re()){const o=ys();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Qa();return l.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ys();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Re())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let l=$r();const h=nl(),m=(function(){return nl()})();return t.forEach(((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof zi)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),rl(E.mutation,_,E.mutation.getFieldMask(),Je.now())):h.set(_.key,fn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>m.set(_,new vx(E,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=nl();let o=new tt(((h,m)=>h-m)),l=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||fn.empty();E=m.applyToLocalView(_,E),s.set(g,E);const x=(o.get(m.batchId)||Re()).add(g);o=o.insert(m.batchId,x)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,E=g.value,x=Fw();E.forEach((b=>{if(!l.has(b)){const z=qw(t.get(b),s.get(b));z!==null&&x.set(b,z),l=l.add(b)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,x))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return ER(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):$.resolve(ys());let m=ul,g=l;return h.next((_=>$.forEach(_,((E,x)=>(m<x.largestBatchId&&(m=x.largestBatchId),l.get(E)?$.resolve():this.remoteDocumentCache.getEntry(e,E).next((b=>{g=g.insert(E,b)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Re()))).next((E=>({batchId:m,changes:Lw(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next((s=>{let o=Qa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Qa();return this.indexManager.getCollectionParents(e,l).next((m=>$.forEach(m,(g=>{const _=(function(x,b){return new Wo(b,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((x,b)=>{h=h.insert(x,b)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Bt.newInvalidDocument(E)))}));let m=Qa();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&rl(E.mutation,_,fn.empty(),Je.now()),Wc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:hr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:cx(o.bundledQuery),readTime:hr(o.readTime)}})(t)),$.resolve()}}/**
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
 */class Tx{constructor(){this.overlays=new tt(le.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ys();return $.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.St(e,t,l)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=ys(),l=t.length+1,h=new le(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new tt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=l.get(_.largestBatchId);E===null&&(E=ys(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=ys(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new jR(t,s));let l=this.Lr.get(t);l===void 0&&(l=Re(),this.Lr.set(t,l)),this.Lr.set(t,l.add(s.key))}}/**
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
 */class Ix{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.kr=new Et(At.qr),this.Kr=new Et(At.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new At(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new At(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new le(new Ke([])),s=new At(t,e),o=new At(t,e+1),l=[];return this.Kr.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new le(new Ke([])),s=new At(t,e),o=new At(t,e+1);let l=Re();return this.Kr.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new At(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return le.comparator(e.key,t.key)||ke(e.Jr,t.Jr)}static Ur(e,t){return ke(e.Jr,t.Jr)||le.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Et(At.qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new UR(l,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Hr=this.Hr.add(new At(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return $.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Gf:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Jr);l.push(m)})),$.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Et(ke);return t.forEach((o=>{const l=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,h],(m=>{s=s.add(m.Jr)}))})),$.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;le.isDocumentKey(l)||(l=l.child(""));const h=new At(new le(l),0);let m=new Et(ke);return this.Hr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Jr)),!0)}),h),$.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return $.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new At(t,0),o=this.Hr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.ti=e,this.docs=(function(){return new tt(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=$r();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=$r();const h=t.path,m=new le(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||Jk(Yk(E),s)<=0||(o.has(E.key)||Wc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return $.resolve(l)}getAllFromCollectionGroup(e,t,s,o){fe(9500)}ni(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new kx(this)}getSize(e){return $.resolve(this.size)}}class kx extends _x{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e){this.persistence=e,this.ri=new Ns((t=>Jf(t)),Xf),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.ii=0,this.si=new ip,this.targetCount=0,this.oi=Fo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Fo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(l).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t){this._i={},this.overlays={},this.ai=new zc(0),this.ui=!1,this.ui=!0,this.ci=new Ix,this.referenceDelegate=e(this),this.li=new Rx(this),this.indexManager=new hx,this.remoteDocumentCache=(function(o){return new Ax(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new ux(t),this.Pi=new Ex(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Tx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Sx(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new xx(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((l=>this.referenceDelegate.Ei(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ii(e,t){return $.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class xx extends Zk{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.Ri=new ip,this.Ai=null}static Vi(e){return new sp(e)}get di(){if(this.Ai)return this.Ai;throw fe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(s=>{const o=le.fromPath(s);return this.mi(e,o).next((l=>{l||t.removeEntry(o,ye.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class xc{constructor(e,t){this.persistence=e,this.fi=new Ns((s=>nR(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=yx(this,t)}static Vi(e,t){return new xc(e,t)}Ti(){}Ei(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((l=>l?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,l.removeEntry(h,ye.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=sc(e.data.value)),t}wr(e,t,s){return $.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=o}static Is(e,t){let s=Re(),o=Re();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new op(e,t.fromCache,s,o)}}/**
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
 */class Px{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Cx{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return DT()?8:eR(qt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new Px;return this.ys(e,t,h).next((m=>{if(l.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>l.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(Io()<=Ae.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",So(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(Io()<=Ae.DEBUG&&ne("QueryEngine","Query:",So(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(Io()<=Ae.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",So(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(t))):$.resolve())}gs(e,t){if(n_(t))return $.resolve(null);let s=cr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Sc(t,null,"F"),s=cr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Re(...l);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.Ss(t,m);return this.bs(t,_,h,g.readTime)?this.gs(e,Sc(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return n_(t)||o.isEqual(ye.min())?$.resolve(null):this.fs.getDocuments(e,s).next((l=>{const h=this.Ss(t,l);return this.bs(t,h,s,o)?$.resolve(null):(Io()<=Ae.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),So(t)),this.Ds(e,h,t,Qk(o,ul)).next((m=>m)))}))}Ss(e,t){let s=new Et(Ow(e));return t.forEach(((o,l)=>{Wc(e,l)&&(s=s.add(l))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,s){return Io()<=Ae.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",So(t)),this.fs.getDocumentsMatchingQuery(e,t,Di.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="LocalStore",Nx=3e8;class Dx{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new tt(ke),this.Fs=new Ns((l=>Jf(l)),Xf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wx(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function bx(r,e,t,s){return new Dx(r,e,t,s)}async function s0(r,e){const t=ve(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],m=[];let g=Re();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){m.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function Vx(r,e){const t=ve(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,E){const x=_.batch,b=x.keys();let z=$.resolve();return b.forEach((Y=>{z=z.next((()=>E.getEntry(g,Y))).next((J=>{const G=_.docVersions.get(Y);ze(G!==null,48541),J.version.compareTo(G)<0&&(x.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),E.addEntry(J)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(g,x)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Re();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function o0(r){const e=ve(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Ox(r,e){const t=ve(r),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((E,x)=>{const b=o.get(x);if(!b)return;m.push(t.li.removeMatchingKeys(l,E.removedDocuments,x).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,x))));let z=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(x)!==null?z=z.withResumeToken(bt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(x,z),(function(J,G,ge){return J.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=Nx?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(b,z,E)&&m.push(t.li.updateTargetData(l,z))}));let g=$r(),_=Re();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),m.push(Mx(l,h,e.documentUpdates).next((E=>{g=E.Bs,_=E.Ls}))),!s.isEqual(ye.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((x=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,s)));m.push(E)}return $.waitFor(m).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.vs=o,l)))}function Mx(r,e,t){let s=Re(),o=Re();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=$r();return t.forEach(((m,g)=>{const _=l.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ye.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne(ap,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function Lx(r,e){const t=ve(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Gf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Fx(r,e){const t=ve(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((l=>l?(o=l,$.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new Ri(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Ef(r,e,t){const s=ve(r),o=s.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ho(h))throw h;ne(ap,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function m_(r,e,t){const s=ve(r);let o=ye.min(),l=Re();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const x=ve(g),b=x.Fs.get(E);return b!==void 0?$.resolve(x.vs.get(b)):x.li.getTargetData(_,E)})(s,h,cr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ye.min(),t?l:Re()))).next((m=>(Ux(s,SR(e),m),{documents:m,ks:l})))))}function Ux(r,e,t){let s=r.Ms.get(e)||ye.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.Ms.set(e,s)}class g_{constructor(){this.activeTargetIds=CR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jx{constructor(){this.vo=new g_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new g_,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zx{Mo(e){}shutdown(){}}/**
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
 */const y_="ConnectivityMonitor";class __{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ne(y_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ne(y_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qu=null;function Tf(){return Qu===null?Qu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Qu++,"0x"+Qu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="RestConnection",Bx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class $x{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Ec?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=Tf(),m=this.Qo(e,t.toUriEncodedString());ne(Qd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:_}=new URL(m),E=yl(_);return this.zo(e,m,g,s,E).then((x=>(ne(Qd,`Received RPC '${e}' ${h}: `,x),x)),(x=>{throw ks(Qd,`RPC '${e}' ${h} failed with error: `,x,"url: ",m,"request:",s),x}))}jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+$o})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const s=Bx[e];let o=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection",$a=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class bo extends $x{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!bo.c_){const e=hw();$a(e,cw.STAT_EVENT,(t=>{t.stat===cf.PROXY?ne(Ut,"STAT_EVENT: detected buffering proxy"):t.stat===cf.NOPROXY&&ne(Ut,"STAT_EVENT: detected no buffering proxy")})),bo.c_=!0}}zo(e,t,s,o,l){const h=Tf();return new Promise(((m,g)=>{const _=new lw;_.setWithCredentials(!0),_.listenOnce(uw.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case ic.NO_ERROR:const x=_.getResponseJson();ne(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(x)),m(x);break;case ic.TIMEOUT:ne(Ut,`RPC '${e}' ${h} timed out`),g(new ee(B.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const b=_.getStatus();if(ne(Ut,`RPC '${e}' ${h} failed with status:`,b,"response text:",_.getResponseText()),b>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const Y=z==null?void 0:z.error;if(Y&&Y.status&&Y.message){const J=(function(ge){const me=ge.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(me)>=0?me:B.UNKNOWN})(Y.status);g(new ee(J,Y.message))}else g(new ee(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee(B.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ne(Ut,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ne(Ut,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=Tf(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=l.join("");ne(Ut,`Creating RPC '${e}' stream ${o}: ${_}`,m);const E=h.createWebChannel(_,m);this.E_(E);let x=!1,b=!1;const z=new qx({Jo:Y=>{b?ne(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,Y):(x||(ne(Ut,`Opening RPC '${e}' stream ${o} transport.`),E.open(),x=!0),ne(Ut,`RPC '${e}' stream ${o} sending:`,Y),E.send(Y))},Ho:()=>E.close()});return $a(E,Ga.EventType.OPEN,(()=>{b||(ne(Ut,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),$a(E,Ga.EventType.CLOSE,(()=>{b||(b=!0,ne(Ut,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.I_(E))})),$a(E,Ga.EventType.ERROR,(Y=>{b||(b=!0,ks(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,Y.name,"Message:",Y.message),z.o_(new ee(B.UNAVAILABLE,"The operation could not be completed")))})),$a(E,Ga.EventType.MESSAGE,(Y=>{var J;if(!b){const G=Y.data[0];ze(!!G,16349);const ge=G,me=(ge==null?void 0:ge.error)||((J=ge[0])==null?void 0:J.error);if(me){ne(Ut,`RPC '${e}' stream ${o} received error:`,me);const Ee=me.status;let Me=(function(A){const T=mt[A];if(T!==void 0)return Ww(T)})(Ee),Ue=me.message;Ee==="NOT_FOUND"&&Ue.includes("database")&&Ue.includes("does not exist")&&Ue.includes(this.databaseId.database)&&ks(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Me===void 0&&(Me=B.INTERNAL,Ue="Unknown error status: "+Ee+" with message "+me.message),b=!0,z.o_(new ee(Me,Ue)),E.close()}else ne(Ut,`RPC '${e}' stream ${o} received:`,G),z.__(G)}})),bo.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return dw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(r){return new bo(r)}function Yd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(r){return new QR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bo.c_=!1;class a0{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="PersistentStream";class l0{constructor(e,t,s,o,l,h,m,g){this.Ci=e,this.S_=s,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new a0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ee(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(v_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ne(v_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Wx extends l0{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=XR(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ye.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ye.min():h.readTime?hr(h.readTime):ye.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=wf(this.serializer),t.addTarget=(function(l,h){let m;const g=h.target;if(m=mf(g)?{documents:tx(l,g)}:{query:nx(l,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Qw(l,h.resumeToken);const _=yf(l,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ye.min())>0){m.readTime=Rc(l,h.snapshotVersion.toTimestamp());const _=yf(l,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=ix(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=wf(this.serializer),t.removeTarget=e,this.q_(t)}}class Kx extends l0{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=ex(e.writeResults,e.commitTime),s=hr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=wf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>ZR(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{}class Qx extends Gx{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,_f(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(B.UNKNOWN,l.toString())}))}jo(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,_f(t,s),o,h,m,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(B.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Yx(r,e,t,s){return new Qx(r,e,t,s)}class Jx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Br(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="RemoteStore";class Xx{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{Ds(this)&&(ne(Rs,"Restarting streams for network reachability change."),await(async function(g){const _=ve(g);_.Ia.add(4),await Al(_),_.Va.set("Unknown"),_.Ia.delete(4),await Jc(_)})(this))}))})),this.Va=new Jx(s,o)}}async function Jc(r){if(Ds(r))for(const e of r.Ra)await e(!0)}async function Al(r){for(const e of r.Ra)await e(!1)}function u0(r,e){const t=ve(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),hp(t)?cp(t):Ko(t).O_()&&up(t,e))}function lp(r,e){const t=ve(r),s=Ko(t);t.Ea.delete(e),s.O_()&&c0(t,e),t.Ea.size===0&&(s.O_()?s.L_():Ds(t)&&t.Va.set("Unknown"))}function up(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ko(r).Z_(e)}function c0(r,e){r.da.$e(e),Ko(r).X_(e)}function cp(r){r.da=new HR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ko(r).start(),r.Va.ua()}function hp(r){return Ds(r)&&!Ko(r).x_()&&r.Ea.size>0}function Ds(r){return ve(r).Ia.size===0}function h0(r){r.da=void 0}async function Zx(r){r.Va.set("Online")}async function eP(r){r.Ea.forEach(((e,t)=>{up(r,e)}))}async function tP(r,e){h0(r),hp(r)?(r.Va.ha(e),cp(r)):r.Va.set("Unknown")}async function nP(r,e,t){if(r.Va.set("Online"),e instanceof Gw&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const m of l.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.da.removeTarget(m))})(r,e)}catch(s){ne(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Pc(r,s)}else if(e instanceof lc?r.da.Xe(e):e instanceof Kw?r.da.st(e):r.da.tt(e),!t.isEqual(ye.min()))try{const s=await o0(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const m=l.da.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ea.get(_);E&&l.Ea.set(_,E.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const E=l.Ea.get(g);if(!E)return;l.Ea.set(g,E.withResumeToken(bt.EMPTY_BYTE_STRING,E.snapshotVersion)),c0(l,g);const x=new Ri(E.target,g,_,E.sequenceNumber);up(l,x)})),l.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){ne(Rs,"Failed to raise snapshot:",s),await Pc(r,s)}}async function Pc(r,e,t){if(!Ho(e))throw e;r.Ia.add(1),await Al(r),r.Va.set("Offline"),t||(t=()=>o0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(Rs,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Jc(r)}))}function d0(r,e){return e().catch((t=>Pc(r,t,e)))}async function Xc(r){const e=ve(r),t=Mi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gf;for(;rP(e);)try{const o=await Lx(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,iP(e,o)}catch(o){await Pc(e,o)}f0(e)&&p0(e)}function rP(r){return Ds(r)&&r.Ta.length<10}function iP(r,e){r.Ta.push(e);const t=Mi(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function f0(r){return Ds(r)&&!Mi(r).x_()&&r.Ta.length>0}function p0(r){Mi(r).start()}async function sP(r){Mi(r).ra()}async function oP(r){const e=Mi(r);for(const t of r.Ta)e.ea(t.mutations)}async function aP(r,e,t){const s=r.Ta.shift(),o=tp.from(s,e,t);await d0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Xc(r)}async function lP(r,e){e&&Mi(r).Y_&&await(async function(s,o){if((function(h){return BR(h)&&h!==B.ABORTED})(o.code)){const l=s.Ta.shift();Mi(s).B_(),await d0(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Xc(s)}})(r,e),f0(r)&&p0(r)}async function w_(r,e){const t=ve(r);t.asyncQueue.verifyOperationInProgress(),ne(Rs,"RemoteStore received new credentials");const s=Ds(t);t.Ia.add(3),await Al(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Jc(t)}async function uP(r,e){const t=ve(r);e?(t.Ia.delete(2),await Jc(t)):e||(t.Ia.add(2),await Al(t),t.Va.set("Unknown"))}function Ko(r){return r.ma||(r.ma=(function(t,s,o){const l=ve(t);return l.sa(),new Wx(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:Zx.bind(null,r),Yo:eP.bind(null,r),t_:tP.bind(null,r),H_:nP.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),hp(r)?cp(r):r.Va.set("Unknown")):(await r.ma.stop(),h0(r))}))),r.ma}function Mi(r){return r.fa||(r.fa=(function(t,s,o){const l=ve(t);return l.sa(),new Kx(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:sP.bind(null,r),t_:lP.bind(null,r),ta:oP.bind(null,r),na:aP.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Xc(r)):(await r.fa.stop(),r.Ta.length>0&&(ne(Rs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,m=new dp(e,t,h,o,l);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fp(r,e){if(Br("AsyncQueue",`${e}: ${r}`),Ho(r))return new ee(B.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||le.comparator(t.key,s.key):(t,s)=>le.comparator(t.key,s.key),this.keyedMap=Qa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Vo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.ga=new tt(le.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):fe(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Uo{constructor(e,t,s,o,l,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Uo(e,t,Vo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class hP{constructor(){this.queries=T_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=ve(t),l=o.queries;o.queries=T_(),l.forEach(((h,m)=>{for(const g of m.Sa)g.onError(s)}))})(this,new ee(B.ABORTED,"Firestore shutting down"))}}function T_(){return new Ns((r=>Vw(r)),Hc)}async function pp(r,e){const t=ve(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(s=2):(l=new cP,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=fp(h,`Initialization of query '${So(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&gp(t)}async function mp(r,e){const t=ve(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function dP(r,e){const t=ve(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&gp(t)}function fP(r,e,t){const s=ve(r),o=s.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);s.queries.delete(e)}function gp(r){r.Ca.forEach((e=>{e.next()}))}var If,I_;(I_=If||(If={})).Ma="default",I_.Cache="cache";class yp{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Uo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==If.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.key=e}}class g0{constructor(e){this.key=e}}class pP{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Re(),this.mutatedKeys=Re(),this.eu=Ow(e),this.tu=new Vo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new E_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,x)=>{const b=o.get(E),z=Wc(this.query,x)?x:null,Y=!!b&&this.mutatedKeys.has(b.key),J=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let G=!1;b&&z?b.data.isEqual(z.data)?Y!==J&&(s.track({type:3,doc:z}),G=!0):this.su(b,z)||(s.track({type:2,doc:z}),G=!0,(g&&this.eu(z,g)>0||_&&this.eu(z,_)<0)&&(m=!0)):!b&&z?(s.track({type:0,doc:z}),G=!0):b&&!z&&(s.track({type:1,doc:b}),G=!0,(g||_)&&(m=!0)),G&&(z?(h=h.add(z),l=J?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,bs:m,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,x)=>(function(z,Y){const J=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Vt:G})}};return J(z)-J(Y)})(E.type,x.type)||this.eu(E.doc,x.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new Uo(this.query,e.tu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new E_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Re(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new g0(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new m0(s))})),t}cu(e){this.Za=e.ks,this.Ya=Re();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const _p="SyncEngine";class mP{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class gP{constructor(e){this.key=e,this.hu=!1}}class yP{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ns((m=>Vw(m)),Hc),this.Eu=new Map,this.Iu=new Set,this.Ru=new tt(le.comparator),this.Au=new Map,this.Vu=new ip,this.du={},this.mu=new Map,this.fu=Fo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function _P(r,e,t=!0){const s=T0(r);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await y0(s,e,t,!0),o}async function vP(r,e){const t=T0(r);await y0(t,e,!0,!1)}async function y0(r,e,t,s){const o=await Fx(r.localStore,cr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let m;return s&&(m=await wP(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&u0(r.remoteStore,o),m}async function wP(r,e,t,s,o){r.pu=(x,b,z)=>(async function(J,G,ge,me){let Ee=G.view.ru(ge);Ee.bs&&(Ee=await m_(J.localStore,G.query,!1).then((({documents:A})=>G.view.ru(A,Ee))));const Me=me&&me.targetChanges.get(G.targetId),Ue=me&&me.targetMismatches.get(G.targetId)!=null,Ce=G.view.applyChanges(Ee,J.isPrimaryClient,Me,Ue);return A_(J,G.targetId,Ce.au),Ce.snapshot})(r,x,b,z);const l=await m_(r.localStore,e,!0),h=new pP(e,l.ks),m=h.ru(l.documents),g=Sl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);A_(r,t,_.au);const E=new mP(e,t,h);return r.Tu.set(e,E),r.Eu.has(t)?r.Eu.get(t).push(e):r.Eu.set(t,[e]),_.snapshot}async function EP(r,e,t){const s=ve(r),o=s.Tu.get(e),l=s.Eu.get(o.targetId);if(l.length>1)return s.Eu.set(o.targetId,l.filter((h=>!Hc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Ef(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&lp(s.remoteStore,o.targetId),Sf(s,o.targetId)})).catch(qo)):(Sf(s,o.targetId),await Ef(s.localStore,o.targetId,!0))}async function TP(r,e){const t=ve(r),s=t.Tu.get(e),o=t.Eu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),lp(t.remoteStore,s.targetId))}async function IP(r,e,t){const s=CP(r);try{const o=await(function(h,m){const g=ve(h),_=Je.now(),E=m.reduce(((z,Y)=>z.add(Y.key)),Re());let x,b;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Y=$r(),J=Re();return g.xs.getEntries(z,E).next((G=>{Y=G,Y.forEach(((ge,me)=>{me.isValidDocument()||(J=J.add(ge))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,Y))).next((G=>{x=G;const ge=[];for(const me of m){const Ee=LR(me,x.get(me.key).overlayedDocument);Ee!=null&&ge.push(new zi(me.key,Ee,kw(Ee.value.mapValue),kn.exists(!0)))}return g.mutationQueue.addMutationBatch(z,_,ge,m)})).next((G=>{b=G;const ge=G.applyToLocalDocumentSet(x,J);return g.documentOverlayCache.saveOverlays(z,G.batchId,ge)}))})).then((()=>({batchId:b.batchId,changes:Lw(x)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.du[h.currentUser.toKey()];_||(_=new tt(ke)),_=_.insert(m,g),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await kl(s,o.changes),await Xc(s.remoteStore)}catch(o){const l=fp(o,"Failed to persist write");t.reject(l)}}async function _0(r,e){const t=ve(r);try{const s=await Ox(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await kl(t,s,e)}catch(s){await qo(s)}}function S_(r,e,t){const s=ve(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((l,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=ve(h);g.onlineState=m;let _=!1;g.queries.forEach(((E,x)=>{for(const b of x.Sa)b.va(m)&&(_=!0)})),_&&gp(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function SP(r,e,t){const s=ve(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let h=new tt(le.comparator);h=h.insert(l,Bt.newNoDocument(l,ye.min()));const m=Re().add(l),g=new Qc(ye.min(),new Map,new tt(ke),h,m);await _0(s,g),s.Ru=s.Ru.remove(l),s.Au.delete(e),vp(s)}else await Ef(s.localStore,e,!1).then((()=>Sf(s,e,t))).catch(qo)}async function AP(r,e){const t=ve(r),s=e.batch.batchId;try{const o=await Vx(t.localStore,e);w0(t,s,null),v0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await kl(t,o)}catch(o){await qo(o)}}async function kP(r,e,t){const s=ve(r);try{const o=await(function(h,m){const g=ve(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,m).next((x=>(ze(x!==null,37113),E=x.keys(),g.mutationQueue.removeMutationBatch(_,x)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);w0(s,e,t),v0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await kl(s,o)}catch(o){await qo(o)}}function v0(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function w0(r,e,t){const s=ve(r);let o=s.du[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Sf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Eu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||E0(r,s)}))}function E0(r,e){r.Iu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(lp(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),vp(r))}function A_(r,e,t){for(const s of t)s instanceof m0?(r.Vu.addReference(s.key,e),RP(r,s)):s instanceof g0?(ne(_p,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||E0(r,s.key)):fe(19791,{wu:s})}function RP(r,e){const t=e.key,s=t.path.canonicalString();r.Ru.get(t)||r.Iu.has(s)||(ne(_p,"New document in limbo: "+t),r.Iu.add(s),vp(r))}function vp(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new le(Ke.fromString(e)),s=r.fu.next();r.Au.set(s,new gP(t)),r.Ru=r.Ru.insert(t,s),u0(r.remoteStore,new Ri(cr(qc(t.path)),s,"TargetPurposeLimboResolution",zc.ce))}}async function kl(r,e,t){const s=ve(r),o=[],l=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{h.push(s.pu(g,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const x=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,x?"current":"not-current")}if(_){o.push(_);const x=op.Is(g.targetId,_);l.push(x)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(g,_){const E=ve(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>$.forEach(_,(b=>$.forEach(b.Ts,(z=>E.persistence.referenceDelegate.addReference(x,b.targetId,z))).next((()=>$.forEach(b.Es,(z=>E.persistence.referenceDelegate.removeReference(x,b.targetId,z)))))))))}catch(x){if(!Ho(x))throw x;ne(ap,"Failed to update sequence numbers: "+x)}for(const x of _){const b=x.targetId;if(!x.fromCache){const z=E.vs.get(b),Y=z.snapshotVersion,J=z.withLastLimboFreeSnapshotVersion(Y);E.vs=E.vs.insert(b,J)}}})(s.localStore,l))}async function xP(r,e){const t=ve(r);if(!t.currentUser.isEqual(e)){ne(_p,"User change. New user:",e.toKey());const s=await s0(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((m=>{m.forEach((g=>{g.reject(new ee(B.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await kl(t,s.Ns)}}function PP(r,e){const t=ve(r),s=t.Au.get(e);if(s&&s.hu)return Re().add(s.key);{let o=Re();const l=t.Eu.get(e);if(!l)return o;for(const h of l){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function T0(r){const e=ve(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=_0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SP.bind(null,e),e.Pu.H_=dP.bind(null,e.eventManager),e.Pu.yu=fP.bind(null,e.eventManager),e}function CP(r){const e=ve(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kP.bind(null,e),e}class Cc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return bx(this.persistence,new Cx,e.initialUser,this.serializer)}Cu(e){return new i0(sp.Vi,this.serializer)}Du(e){return new jx}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cc.provider={build:()=>new Cc};class NP extends Cc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof xc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new mx(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new i0((s=>xc.Vi(s,t)),this.serializer)}}class Af{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>S_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xP.bind(null,this.syncEngine),await uP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new hP})()}createDatastore(e){const t=Yc(e.databaseInfo.databaseId),s=Hx(e.databaseInfo);return Yx(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,m){return new Xx(s,o,l,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>S_(this.syncEngine,t,0)),(function(){return __.v()?new __:new zx})())}createSyncEngine(e,t){return(function(o,l,h,m,g,_,E){const x=new yP(o,l,h,m,g,_);return E&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=ve(o);ne(Rs,"RemoteStore shutting down."),l.Ia.add(5),await Al(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Af.provider={build:()=>new Af};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="FirestoreClient";class DP{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=Kf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Li,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Li,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=fp(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Jd(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Li,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await s0(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function k_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await bP(r);ne(Li,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>w_(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>w_(e.remoteStore,o))),r._onlineComponents=e}async function bP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Li,"Using user provided OfflineComponentProvider");try{await Jd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ks("Error using user provided cache. Falling back to memory cache: "+t),await Jd(r,new Cc)}}else ne(Li,"Using default OfflineComponentProvider"),await Jd(r,new NP(void 0));return r._offlineComponents}async function I0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Li,"Using user provided OnlineComponentProvider"),await k_(r,r._uninitializedComponentsProvider._online)):(ne(Li,"Using default OnlineComponentProvider"),await k_(r,new Af))),r._onlineComponents}function VP(r){return I0(r).then((e=>e.syncEngine))}async function Nc(r){const e=await I0(r),t=e.eventManager;return t.onListen=_P.bind(null,e.syncEngine),t.onUnlisten=EP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=vP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=TP.bind(null,e.syncEngine),t}function OP(r,e,t,s){const o=new wp(s),l=new yp(e,o,t);return r.asyncQueue.enqueueAndForget((async()=>pp(await Nc(r),l))),()=>{o.Nu(),r.asyncQueue.enqueueAndForget((async()=>mp(await Nc(r),l)))}}function MP(r,e,t={}){const s=new Ur;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const E=new wp({next:b=>{E.Nu(),h.enqueueAndForget((()=>mp(l,x)));const z=b.docs.has(m);!z&&b.fromCache?_.reject(new ee(B.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&b.fromCache&&g&&g.source==="server"?_.reject(new ee(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(b)},error:b=>_.reject(b)}),x=new yp(qc(m.path),E,{includeMetadataChanges:!0,qa:!0});return pp(l,x)})(await Nc(r),r.asyncQueue,e,t,s))),s.promise}function LP(r,e,t={}){const s=new Ur;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const E=new wp({next:b=>{E.Nu(),h.enqueueAndForget((()=>mp(l,x))),b.fromCache&&g.source==="server"?_.reject(new ee(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(b)},error:b=>_.reject(b)}),x=new yp(m,E,{includeMetadataChanges:!0,qa:!0});return pp(l,x)})(await Nc(r),r.asyncQueue,e,t,s))),s.promise}function FP(r,e){const t=new Ur;return r.asyncQueue.enqueueAndForget((async()=>IP(await VP(r),e,t))),t.promise}/**
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
 */function S0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="ComponentProvider",R_=new Map;function jP(r,e,t,s,o){return new sR(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,S0(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="firestore.googleapis.com",x_=!0;class P_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=A0,this.ssl=x_}else this.host=e.host,this.ssl=e.ssl??x_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=r0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fx)throw new ee(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S0(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new P_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new P_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Fk;switch(s.type){case"firstParty":return new Bk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=R_.get(t);s&&(ne(UP,"Removing Datastore"),R_.delete(t),s.terminate())})(this),Promise.resolve()}}function zP(r,e,t,s={}){var _;r=tn(r,Zc);const o=yl(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&J_(`https://${m}`),l.host!==A0&&l.host!==m&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:m,ssl:o,emulatorOptions:s};if(!ws(g,h)&&(r._setSettings(g),s.mockUserToken)){let E,x;if(typeof s.mockUserToken=="string")E=s.mockUserToken,x=zt.MOCK_USER;else{E=AT(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new ee(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new zt(b)}r._authCredentials=new Uk(new pw(E,x))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class st{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Tl(t,st._jsonSchema))return new st(e,s||null,new le(Ke.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:yt("string",st._jsonSchemaVersion),referencePath:yt("string")};class Ni extends Hr{constructor(e,t,s){super(e,t,qc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new le(e))}withConverter(e){return new Ni(this.firestore,e,this._path)}}function jt(r,e,...t){if(r=ht(r),mw("collection","path",e),r instanceof Zc){const s=Ke.fromString(e,...t);return By(s),new Ni(r,null,s)}{if(!(r instanceof st||r instanceof Ni))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ke.fromString(e,...t));return By(s),new Ni(r.firestore,null,s)}}function Tn(r,e,...t){if(r=ht(r),arguments.length===1&&(e=Kf.newId()),mw("doc","path",e),r instanceof Zc){const s=Ke.fromString(e,...t);return zy(s),new st(r,null,new le(s))}{if(!(r instanceof st||r instanceof Ni))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ke.fromString(e,...t));return zy(s),new st(r.firestore,r instanceof Ni?r.converter:null,new le(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="AsyncQueue";class N_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new a0(this,"async_queue_retry"),this._c=()=>{const s=Yd();s&&ne(C_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Yd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Yd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ur;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ho(e))throw e;ne(C_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Br("INTERNAL UNHANDLED ERROR: ",D_(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=dp.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&fe(47125,{Pc:D_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function D_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class qr extends Zc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new N_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new N_(e),this._firestoreClient=void 0,await e}}}function BP(r,e){const t=typeof r=="object"?r:Cf(),s=typeof r=="string"?r:Ec,o=jo(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=IT("firestore");l&&zP(o,...l)}return o}function eh(r){if(r._terminated)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||$P(r),r._firestoreClient}function $P(r){var s,o,l,h;const e=r._freezeSettings(),t=jP(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new DP(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(bt.fromBase64String(e))}catch(t){throw new ee(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Tl(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:yt("string",Sn._jsonSchemaVersion),bytes:yt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dr._jsonSchemaVersion}}static fromJSON(e){if(Tl(e,dr._jsonSchema))return new dr(e.latitude,e.longitude)}}dr._jsonSchemaVersion="firestore/geoPoint/1.0",dr._jsonSchema={type:yt("string",dr._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class Un{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Tl(e,Un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Un(e.vectorValues);throw new ee(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Un._jsonSchemaVersion="firestore/vectorValue/1.0",Un._jsonSchema={type:yt("string",Un._jsonSchemaVersion),vectorValues:yt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=/^__.*__$/;class HP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Il(e,this.data,t,this.fieldTransforms)}}class k0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new zi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function R0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{dataSource:r})}}class Ip{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ip({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Dc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(R0(this.dataSource)&&qP.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class WP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Yc(e)}A(e,t,s,o=!1){return new Ip({dataSource:e,methodName:t,targetDoc:s,path:Dt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function th(r){const e=r._freezeSettings(),t=Yc(r._databaseId);return new WP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function x0(r,e,t,s,o,l={}){const h=r.A(l.merge||l.mergeFields?2:0,e,t,o);Sp("Data must be an object, but it was:",h,s);const m=P0(s,h);let g,_;if(l.merge)g=new fn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const x of l.mergeFields){const b=xs(e,x,t);if(!h.contains(b))throw new ee(B.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);D0(E,b)||E.push(b)}g=new fn(E),_=h.fieldTransforms.filter((x=>g.covers(x.field)))}else g=null,_=h.fieldTransforms;return new HP(new en(m),g,_)}class nh extends Tp{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nh}}function KP(r,e,t,s){const o=r.A(1,e,t);Sp("Data must be an object, but it was:",o,s);const l=[],h=en.empty();ji(s,((g,_)=>{const E=N0(e,g,t);_=ht(_);const x=o.fc(E);if(_ instanceof nh)l.push(E);else{const b=Rl(_,x);b!=null&&(l.push(E),h.set(E,b))}}));const m=new fn(l);return new k0(h,m,o.fieldTransforms)}function GP(r,e,t,s,o,l){const h=r.A(1,e,t),m=[xs(e,s,t)],g=[o];if(l.length%2!=0)throw new ee(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)m.push(xs(e,l[b])),g.push(l[b+1]);const _=[],E=en.empty();for(let b=m.length-1;b>=0;--b)if(!D0(_,m[b])){const z=m[b];let Y=g[b];Y=ht(Y);const J=h.fc(z);if(Y instanceof nh)_.push(z);else{const G=Rl(Y,J);G!=null&&(_.push(z),E.set(z,G))}}const x=new fn(_);return new k0(E,x,h.fieldTransforms)}function QP(r,e,t,s=!1){return Rl(t,r.A(s?4:3,e))}function Rl(r,e){if(C0(r=ht(r)))return Sp("Unsupported field value:",e,r),P0(r,e);if(r instanceof Tp)return(function(s,o){if(!R0(o.dataSource))throw o.yc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const m of s){let g=Rl(m,o.gc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=ht(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return NR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Je.fromDate(s);return{timestampValue:Rc(o.serializer,l)}}if(s instanceof Je){const l=new Je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Rc(o.serializer,l)}}if(s instanceof dr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Sn)return{bytesValue:Qw(o.serializer,s._byteString)};if(s instanceof st){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:rp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Un)return(function(h,m){const g=h instanceof Un?h.toArray():h;return{mapValue:{fields:{[Sw]:{stringValue:Aw},[Tc]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw m.yc("VectorValues must only contain numeric values.");return Zf(m.serializer,E)}))}}}}}})(s,o);if(n0(s))return s._toProto(o.serializer);throw o.yc(`Unsupported field value: ${jc(s)}`)})(r,e)}function P0(r,e){const t={};return _w(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(r,((s,o)=>{const l=Rl(o,e.dc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function C0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Je||r instanceof dr||r instanceof Sn||r instanceof st||r instanceof Tp||r instanceof Un||n0(r))}function Sp(r,e,t){if(!C0(t)||!gw(t)){const s=jc(t);throw s==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+s)}}function xs(r,e,t){if((e=ht(e))instanceof Ep)return e._internalPath;if(typeof e=="string")return N0(r,e);throw Dc("Field path arguments must be of type string or ",r,!1,void 0,t)}const YP=new RegExp("[~\\*/\\[\\]]");function N0(r,e,t){if(e.search(YP)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Ep(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Dc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ee(B.INVALID_ARGUMENT,m+r+g)}function D0(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{convertValue(e,t="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ji(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,o,l;const t=(l=(o=(s=e.fields)==null?void 0:s[Tc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>ct(h.doubleValue)));return new Un(t)}convertGeoPoint(e){return new dr(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=$c(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const t=bi(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);ze(t0(s),9688,{name:e});const o=new hl(s.get(1),s.get(3)),l=new le(s.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class Ap extends JP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}const b_="@firebase/firestore",V_="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(xs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class XP extends b0{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ee(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kp{}class Rp extends kp{}function dn(r,e,...t){let s=[];e instanceof kp&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof xp)).length,m=l.filter((g=>g instanceof rh)).length;if(h>1||h>0&&m>0)throw new ee(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class rh extends Rp{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new rh(e,t,s)}_apply(e){const t=this._parse(e);return M0(e._query,t),new Hr(e.firestore,e.converter,gf(e._query,t))}_parse(e){const t=th(e.firestore);return(function(l,h,m,g,_,E,x){let b;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ee(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){L_(x,E);const Y=[];for(const J of x)Y.push(M_(g,l,J));b={arrayValue:{values:Y}}}else b=M_(g,l,x)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||L_(x,E),b=QP(m,h,x,E==="in"||E==="not-in");return gt.create(_,E,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function uc(r,e,t){const s=e,o=xs("where",r);return rh._create(o,s,t)}class xp extends kp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xp(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Bn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const m=l.getFlattenedFilters();for(const g of m)M0(h,g),h=gf(h,g)})(e._query,t),new Hr(e.firestore,e.converter,gf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pp extends Rp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Pp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ee(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fl(l,h)})(e._query,this._field,this._direction);return new Hr(e.firestore,e.converter,IR(e._query,t))}}function xi(r,e="asc"){const t=e,s=xs("orderBy",r);return Pp._create(s,t)}class Cp extends Rp{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Cp(e,t,s)}_apply(e){return new Hr(e.firestore,e.converter,Sc(e._query,this._limit,this._limitType))}}function O0(r){return Cp._create("limit",r,"F")}function M_(r,e,t){if(typeof(t=ht(t))=="string"){if(t==="")throw new ee(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bw(e)&&t.indexOf("/")!==-1)throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ke.fromString(t));if(!le.isDocumentKey(s))throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Yy(r,new le(s))}if(t instanceof st)return Yy(r,t._key);throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jc(t)}.`)}function L_(r,e){if(!Array.isArray(r)||r.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function M0(r,e){const t=(function(o,l){for(const h of o)for(const m of h.getFlattenedFilters())if(l.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function L0(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Ja{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends b0{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(xs("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_s._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:yt("string",_s._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class cc extends _s{data(e={}){return super.data(e)}}class vs{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ja(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new cc(this._firestore,this._userDataWriter,s.key,s,new Ja(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new cc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ja(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>l||m.type!==3)).map((m=>{const g=new cc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ja(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:ZP(m.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ZP(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:r})}}/**
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
 */vs._jsonSchemaVersion="firestore/querySnapshot/1.0",vs._jsonSchema={type:yt("string",vs._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(r){r=tn(r,st);const e=tn(r.firestore,qr),t=eh(e);return MP(t,r._key).then((s=>F0(e,r,s)))}function To(r){r=tn(r,Hr);const e=tn(r.firestore,qr),t=eh(e),s=new Ap(e);return V0(r._query),LP(t,r._query).then((o=>new vs(e,s,r,o)))}function tC(r,e,t){r=tn(r,st);const s=tn(r.firestore,qr),o=L0(r.converter,e),l=th(s);return ih(s,[x0(l,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,kn.none())])}function qa(r,e,t,...s){r=tn(r,st);const o=tn(r.firestore,qr),l=th(o);let h;return h=typeof(e=ht(e))=="string"||e instanceof Ep?GP(l,"updateDoc",r._key,e,t,s):KP(l,"updateDoc",r._key,e),ih(o,[h.toMutation(r._key,kn.exists(!0))])}function Yu(r){return ih(tn(r.firestore,qr),[new ep(r._key,kn.none())])}function Ju(r,e){const t=tn(r.firestore,qr),s=Tn(r),o=L0(r.converter,e),l=th(r.firestore);return ih(t,[x0(l,"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,kn.exists(!1))]).then((()=>s))}function Ha(r,...e){var _,E,x;r=ht(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||O_(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(O_(e[s])){const b=e[s];e[s]=(_=b.next)==null?void 0:_.bind(b),e[s+1]=(E=b.error)==null?void 0:E.bind(b),e[s+2]=(x=b.complete)==null?void 0:x.bind(b)}let l,h,m;if(r instanceof st)h=tn(r.firestore,qr),m=qc(r._key.path),l={next:b=>{e[s]&&e[s](F0(h,r,b))},error:e[s+1],complete:e[s+2]};else{const b=tn(r,Hr);h=tn(b.firestore,qr),m=b._query;const z=new Ap(h);l={next:Y=>{e[s]&&e[s](new vs(h,z,b,Y))},error:e[s+1],complete:e[s+2]},V0(r._query)}const g=eh(h);return OP(g,m,o,l)}function ih(r,e){const t=eh(r);return FP(t,e)}function F0(r,e,t){const s=t.docs.get(e._key),o=new Ap(r);return new _s(r,o,e._key,s,new Ja(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Lk(zo),fr(new jn("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),m=new qr(new jk(s.getProvider("auth-internal")),new $k(h,s.getProvider("app-check-internal")),oR(h,o),h);return l={useFetchStreams:t,...l},m._setSettings(l),m}),"PUBLIC").setMultipleInstances(!0)),An(b_,V_,e),An(b_,V_,"esm2020")})();const nC={apiKey:"AIzaSyDuxT03D9vxSWE5Fw29sdsnCohTtGj32fo",authDomain:"ipreu-95300.firebaseapp.com",projectId:"ipreu-95300",storageBucket:"ipreu-95300.firebasestorage.app",messagingSenderId:"921313347665",appId:"1:921313347665:web:128cdbb3e428b113a71070"},Np=ev(nC),Ro=a1(Np),He=BP(Np),Xu=typeof window<"u"?Vk(Np):null,Dp="uc_token",bp="uc_user";function F_(r,e){try{localStorage.setItem(Dp,r),localStorage.setItem(bp,JSON.stringify(e))}catch(t){console.error("Failed to save session",t)}}function rC(){try{const r=localStorage.getItem(Dp),e=localStorage.getItem(bp);return{token:r,user:e?JSON.parse(e):null}}catch{return{token:null,user:null}}}function iC(){try{localStorage.removeItem(Dp),localStorage.removeItem(bp),tc(Ro).catch(console.error)}catch(r){console.error("Failed to clear session",r)}}const wt={login:async(r,e)=>{if(!e)throw new Error("Password required");const t=await GS(Ro,r,e),s=await eC(Tn(He,"users",t.user.uid));if(!s.exists())throw await tc(Ro),new Error("User record not found in database.");const o={id:s.id,...s.data()};if(o.role==="PENDING")throw await tc(Ro),new Error("Your application is still pending approval. Please check back later.");return{token:await t.user.getIdToken(),user:o}},register:async r=>{if(!r.password)throw new Error("Password required");if(!r.email)throw new Error("Email required");const e=r.email.toLowerCase().trim(),t=await KS(Ro,e,r.password),{password:s,...o}=r;return o.email=e,await tC(Tn(He,"users",t.user.uid),{...o,role:"PENDING",createdAt:new Date().toISOString()}),await tc(Ro),!0},getAnnouncements:async()=>{const r=dn(jt(He,"announcements"),xi("createdAt","desc"),O0(30));return(await To(r)).docs.map(t=>({id:t.id,...t.data()}))},createAnnouncement:async r=>{const e=new Date().toISOString();return{id:(await Ju(jt(He,"announcements"),{...r,createdAt:e})).id,...r,createdAt:e}},deleteAnnouncement:async r=>(await Yu(Tn(He,"announcements",r)),!0),updateAnnouncement:async(r,e)=>(await qa(Tn(He,"announcements",r),e),!0),getPendingUsers:async()=>{const r=dn(jt(He,"users"),uc("role","==","PENDING"));return(await To(r)).docs.map(t=>({id:t.id,...t.data()}))},getApprovedUsers:async()=>{const r=dn(jt(He,"users"),uc("role","==","MEMBER"));return(await To(r)).docs.map(t=>({id:t.id,...t.data()}))},approveUser:async r=>(await qa(Tn(He,"users",r),{role:"MEMBER"}),!0),rejectUser:async r=>(await Yu(Tn(He,"users",r)),!0),getSurveys:async()=>{const r=dn(jt(He,"surveys"));return(await To(r)).docs.map(t=>({id:t.id,...t.data()}))},createSurvey:async r=>({id:(await Ju(jt(He,"surveys"),r)).id,...r}),deleteSurvey:async r=>(await Yu(Tn(He,"surveys",r)),!0),updateSurvey:async(r,e)=>(await qa(Tn(He,"surveys",r),e),!0),getCalendarEvents:async()=>{const r=dn(jt(He,"calendar"),xi("date","asc"));return(await To(r)).docs.map(t=>({id:t.id,...t.data()}))},createCalendarEvent:async r=>({id:(await Ju(jt(He,"calendar"),r)).id,...r}),deleteCalendarEvent:async r=>(await Yu(Tn(He,"calendar",r)),!0),getGrievances:async r=>{let e;const t=jt(He,"grievances");return r?e=dn(t,uc("userId","==",r),xi("createdAt","desc")):e=dn(t,xi("createdAt","desc")),(await To(e)).docs.map(o=>({id:o.id,...o.data()}))},createGrievance:async r=>({id:(await Ju(jt(He,"grievances"),r)).id,...r}),updateGrievance:async(r,e)=>(await qa(Tn(He,"grievances",r),e),!0),saveFcmToken:async(r,e)=>{const t=Tn(He,"users",r);await qa(t,{fcmToken:e})}},U_=it.lazy(()=>Rf(()=>import("./Auth-8Ao4d1pm.js"),[])),sC=it.lazy(()=>Rf(()=>import("./AdminDashboard-1iqexPrR.js"),__vite__mapDeps([0,1]))),oC=it.lazy(()=>Rf(()=>import("./MemberDashboard-U5DjWKWG.js"),__vite__mapDeps([2,1]))),U0=it.createContext(null),j0=()=>{const r=it.useContext(U0);if(!r)throw new Error("useAppContext must be used within AppProvider");return r};function aC(){const[r,e]=it.useState(!0),[t,s]=it.useState(!1),[o,l]=it.useState(()=>localStorage.getItem("theme")==="dark"),[h,m]=it.useState(null),[g,_]=it.useState([]),[E,x]=it.useState([]),[b,z]=it.useState([]),[Y,J]=it.useState([]),[G,ge]=it.useState([]),[me,Ee]=it.useState("dashboard");z_.useLayoutEffect(()=>{document.documentElement.classList.toggle("dark",o),localStorage.setItem("theme",o?"dark":"light")},[o]),it.useEffect(()=>{const A={dashboard:"My Dashboard | IPREU",calendar:"Union Calendar | IPREU",grievances:"Secure Grievances | IPREU",overview:"Admin Overview | IPREU",members:"Manage Users | IPREU",announcements:"Broadcast | IPREU"};document.title=A[me]||"IPREU Union Connect"},[me]),it.useEffect(()=>{(async()=>{try{const T=rC();T&&T.user&&(m(T.user),Me(T.user.id))}catch(T){console.error("Session init failed:",T)}finally{e(!1)}})()},[]),it.useEffect(()=>{if(!h)return;const A=dn(jt(He,"announcements"),xi("createdAt","desc"),O0(30)),T=Ha(A,Ne=>{x(Ne.docs.map(Te=>({id:Te.id,...Te.data()})))},Ne=>console.error("Announcements Sync Error:",Ne)),I=dn(jt(He,"surveys")),C=Ha(I,Ne=>{_(Ne.docs.map(Te=>({id:Te.id,...Te.data()})))},Ne=>console.error("Surveys Sync Error:",Ne)),P=dn(jt(He,"calendar"),xi("date","asc")),O=Ha(P,Ne=>{z(Ne.docs.map(Te=>({id:Te.id,...Te.data()})))},Ne=>console.error("Calendar Sync Error:",Ne));let R;h.role==="ADMIN"?R=dn(jt(He,"grievances"),xi("createdAt","desc")):R=dn(jt(He,"grievances"),uc("userId","==",h.id),xi("createdAt","desc"));const $e=Ha(R,Ne=>{J(Ne.docs.map(Te=>({id:Te.id,...Te.data()})))},Ne=>console.error("Grievances Sync Error:",Ne));let ot=()=>{};if(h.role==="ADMIN"){const Ne=dn(jt(He,"users"));ot=Ha(Ne,Te=>{ge(Te.docs.map(Z=>({id:Z.id,...Z.data()})))})}return()=>{T(),C(),O(),$e(),ot()}},[h==null?void 0:h.id]);const Me=async A=>{if(Xu)try{if(await Notification.requestPermission()==="granted"){const I=await Ok(Xu,{vapidKey:"BKZqsvNJwZbljTyY0T6ho_GruW2LiC8WBEre2uMqg6A-67sBHoF2RIg6VCX2BLMs0LVolggQTCap4zwDgedyKjI"});I&&await wt.saveFcmToken(A,I)}}catch(T){console.error("FCM Registration failed:",T)}};it.useEffect(()=>{if(!Xu)return;const A=Mk(Xu,T=>{var I,C;alert(`Notification: ${(I=T.notification)==null?void 0:I.title}
${(C=T.notification)==null?void 0:C.body}`)});return()=>A()},[]);const Ue=it.useMemo(()=>({currentUser:h,isDarkMode:o,toggleDarkMode:()=>l(A=>!A),users:G,surveys:g,announcements:E,calendarEvents:b,grievances:Y,fetchAnnouncements:async()=>{const A=await wt.getAnnouncements();x(A)},memberLogin:async(A,T)=>{var I;try{const C=await wt.login(A,T);return C.token&&C.user&&C.user.role==="MEMBER"?(m(C.user),F_(C.token,C.user),{success:!0}):{success:!1,error:"Access denied. Only members can login here."}}catch(C){return(I=C.message)!=null&&I.includes("pending approval")?{success:!1,pending:!0}:{success:!1,error:C.message||"Login failed"}}},adminLogin:async(A,T)=>{try{const I=await wt.login(A,T);if(I.token&&I.user&&I.user.role==="ADMIN"){m(I.user),F_(I.token,I.user);const[C,P]=await Promise.all([wt.getPendingUsers(),wt.getApprovedUsers()]);return ge([...C,...P]),{success:!0}}return{success:!1,error:"Access denied. Only admins can login here."}}catch(I){return{success:!1,error:I.message||"Admin login failed"}}},logout:()=>{m(null),iC()},register:async A=>(await wt.register(A),!0),approveRegistration:async A=>{await wt.approveUser(A),ge(T=>T.map(I=>I.id===A?{...I,role:xo.MEMBER}:I))},rejectRegistration:async A=>{await wt.rejectUser(A),ge(T=>T.filter(I=>I.id!==A))},createSurvey:async A=>{const T=await wt.createSurvey({...A,votes:{}});_(I=>[T,...I])},deleteSurvey:async A=>{await wt.deleteSurvey(A),_(T=>T.filter(I=>I.id!==A))},submitVote:async(A,T)=>{if(!h)return;const I=g.find(P=>P.id===A);if(!I)return;const C={...I.votes,[h.id]:T};await wt.updateSurvey(A,{votes:C}),_(P=>P.map(O=>O.id===A?{...O,votes:C}:O))},createAnnouncement:async(A,T,I)=>{const C=await wt.createAnnouncement({title:A,content:T,attachment:I??void 0});x(P=>[C,...P])},updateAnnouncement:async(A,T,I)=>{await wt.updateAnnouncement(A,{title:T,content:I}),x(C=>C.map(P=>P.id===A?{...P,title:T,content:I}:P))},deleteAnnouncement:async A=>{await wt.deleteAnnouncement(A),x(T=>T.filter(I=>I.id!==A))},createCalendarEvent:async A=>{const T=await wt.createCalendarEvent({...A,createdAt:new Date().toISOString()});z(I=>[...I,T])},deleteCalendarEvent:async A=>{await wt.deleteCalendarEvent(A),z(T=>T.filter(I=>I.id!==A))},submitGrievance:async(A,T,I)=>{if(!h)return;const C={userId:h.id,userName:h.employeeName,subject:A,description:T,category:I,status:"NEW",createdAt:new Date().toISOString()},P=await wt.createGrievance(C);J(O=>[P,...O])},respondToGrievance:async(A,T)=>{const I={response:T,respondedAt:new Date().toISOString(),status:"RESOLVED"};await wt.updateGrievance(A,I),J(C=>C.map(P=>P.id===A?{...P,...I}:P))}}),[h,G,g,E,b,Y,o]),Ce=()=>{if(!h)return t?k.jsx(U_,{onBack:()=>s(!1)}):k.jsx(dT,{onLoginClick:()=>s(!0)});switch(h.role){case xo.ADMIN:return k.jsx(sC,{activeTab:me,setActiveTab:Ee});case xo.MEMBER:return k.jsx(oC,{activeTab:me,setActiveTab:Ee});default:return k.jsx(U_,{onBack:()=>s(!1)})}};return r?k.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-[#030712] transition-colors duration-300 relative overflow-hidden",children:[k.jsx("div",{className:"absolute inset-0 bg-orange-600/5 blur-[120px] animate-pulse"}),k.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-8",children:[k.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-600 shadow-[0_0_30px_rgba(234,88,12,0.4)]"}),k.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] animate-pulse",children:"Initializing Digital Nexus"})]})]}):k.jsx(U0.Provider,{value:Ue,children:k.jsxs("div",{className:"min-h-screen font-sans bg-[#030712] text-white transition-colors duration-300 selection:bg-orange-600/30",children:[k.jsx(aT,{}),k.jsx("main",{className:"container-fluid mx-auto px-4 md:px-12 py-10 pb-32",children:k.jsx(it.Suspense,{fallback:k.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:k.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"})}),children:Ce()})}),h&&k.jsxs("footer",{className:"w-full py-16 bg-[#090E1A] border-t border-white/5 backdrop-blur-xl mt-auto relative overflow-hidden",children:[k.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"}),k.jsx("div",{className:"container mx-auto px-8 relative z-10",children:k.jsx(B_,{})})]}),h&&h.role===xo.MEMBER&&k.jsx(pT,{activeTab:me,setActiveTab:Ee})]})})}const z0=document.getElementById("root");if(!z0)throw new Error("Could not find root element to mount to");const lC=rT.createRoot(z0);lC.render(k.jsx(z_.StrictMode,{children:k.jsx(aC,{})}));export{lT as C,uC as I,Xa as M,uT as P,xo as U,oT as a,k as j,it as r,j0 as u};
