const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboard-Cw5drwbR.js","assets/CheckCircleIcon-DQjekO8z.js","assets/MemberDashboard-DRFeDwr8.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function cv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var zd={exports:{}},Ja={},$d={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function LT(){if(ly)return Re;ly=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function b(x){return x===null||typeof x!="object"?null:(x=A&&x[A]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,J={};function q(x,H,le){this.props=x,this.context=H,this.refs=J,this.updater=le||B}q.prototype.isReactComponent={},q.prototype.setState=function(x,H){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,H,"setState")},q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function he(){}he.prototype=q.prototype;function ue(x,H,le){this.props=x,this.context=H,this.refs=J,this.updater=le||B}var pe=ue.prototype=new he;pe.constructor=ue,G(pe,q.prototype),pe.isPureReactComponent=!0;var ye=Array.isArray,ke=Object.prototype.hasOwnProperty,Ie={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function k(x,H,le){var Ae,Te={},Fe=null,Ne=null;if(H!=null)for(Ae in H.ref!==void 0&&(Ne=H.ref),H.key!==void 0&&(Fe=""+H.key),H)ke.call(H,Ae)&&!O.hasOwnProperty(Ae)&&(Te[Ae]=H[Ae]);var Me=arguments.length-2;if(Me===1)Te.children=le;else if(1<Me){for(var De=Array(Me),Ct=0;Ct<Me;Ct++)De[Ct]=arguments[Ct+2];Te.children=De}if(x&&x.defaultProps)for(Ae in Me=x.defaultProps,Me)Te[Ae]===void 0&&(Te[Ae]=Me[Ae]);return{$$typeof:n,type:x,key:Fe,ref:Ne,props:Te,_owner:Ie.current}}function T(x,H){return{$$typeof:n,type:x.type,key:H,ref:x.ref,props:x.props,_owner:x._owner}}function P(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function S(x){var H={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(le){return H[le]})}var D=/\/+/g;function I(x,H){return typeof x=="object"&&x!==null&&x.key!=null?S(""+x.key):H.toString(36)}function Se(x,H,le,Ae,Te){var Fe=typeof x;(Fe==="undefined"||Fe==="boolean")&&(x=null);var Ne=!1;if(x===null)Ne=!0;else switch(Fe){case"string":case"number":Ne=!0;break;case"object":switch(x.$$typeof){case n:case e:Ne=!0}}if(Ne)return Ne=x,Te=Te(Ne),x=Ae===""?"."+I(Ne,0):Ae,ye(Te)?(le="",x!=null&&(le=x.replace(D,"$&/")+"/"),Se(Te,H,le,"",function(Ct){return Ct})):Te!=null&&(P(Te)&&(Te=T(Te,le+(!Te.key||Ne&&Ne.key===Te.key?"":(""+Te.key).replace(D,"$&/")+"/")+x)),H.push(Te)),1;if(Ne=0,Ae=Ae===""?".":Ae+":",ye(x))for(var Me=0;Me<x.length;Me++){Fe=x[Me];var De=Ae+I(Fe,Me);Ne+=Se(Fe,H,le,De,Te)}else if(De=b(x),typeof De=="function")for(x=De.call(x),Me=0;!(Fe=x.next()).done;)Fe=Fe.value,De=Ae+I(Fe,Me++),Ne+=Se(Fe,H,le,De,Te);else if(Fe==="object")throw H=String(x),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Ne}function rt(x,H,le){if(x==null)return x;var Ae=[],Te=0;return Se(x,Ae,"","",function(Fe){return H.call(le,Fe,Te++)}),Ae}function It(x){if(x._status===-1){var H=x._result;H=H(),H.then(function(le){(x._status===0||x._status===-1)&&(x._status=1,x._result=le)},function(le){(x._status===0||x._status===-1)&&(x._status=2,x._result=le)}),x._status===-1&&(x._status=0,x._result=H)}if(x._status===1)return x._result.default;throw x._result}var ze={current:null},Y={transition:null},ne={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Y,ReactCurrentOwner:Ie};return Re.Children={map:rt,forEach:function(x,H,le){rt(x,function(){H.apply(this,arguments)},le)},count:function(x){var H=0;return rt(x,function(){H++}),H},toArray:function(x){return rt(x,function(H){return H})||[]},only:function(x){if(!P(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Re.Component=q,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ue,Re.StrictMode=i,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,Re.cloneElement=function(x,H,le){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Ae=G({},x.props),Te=x.key,Fe=x.ref,Ne=x._owner;if(H!=null){if(H.ref!==void 0&&(Fe=H.ref,Ne=Ie.current),H.key!==void 0&&(Te=""+H.key),x.type&&x.type.defaultProps)var Me=x.type.defaultProps;for(De in H)ke.call(H,De)&&!O.hasOwnProperty(De)&&(Ae[De]=H[De]===void 0&&Me!==void 0?Me[De]:H[De])}var De=arguments.length-2;if(De===1)Ae.children=le;else if(1<De){Me=Array(De);for(var Ct=0;Ct<De;Ct++)Me[Ct]=arguments[Ct+2];Ae.children=Me}return{$$typeof:n,type:x.type,key:Te,ref:Fe,props:Ae,_owner:Ne}},Re.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:l,_context:x},x.Consumer=x},Re.createElement=k,Re.createFactory=function(x){var H=k.bind(null,x);return H.type=x,H},Re.createRef=function(){return{current:null}},Re.forwardRef=function(x){return{$$typeof:f,render:x}},Re.isValidElement=P,Re.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:It}},Re.memo=function(x,H){return{$$typeof:y,type:x,compare:H===void 0?null:H}},Re.startTransition=function(x){var H=Y.transition;Y.transition={};try{x()}finally{Y.transition=H}},Re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Re.useCallback=function(x,H){return ze.current.useCallback(x,H)},Re.useContext=function(x){return ze.current.useContext(x)},Re.useDebugValue=function(){},Re.useDeferredValue=function(x){return ze.current.useDeferredValue(x)},Re.useEffect=function(x,H){return ze.current.useEffect(x,H)},Re.useId=function(){return ze.current.useId()},Re.useImperativeHandle=function(x,H,le){return ze.current.useImperativeHandle(x,H,le)},Re.useInsertionEffect=function(x,H){return ze.current.useInsertionEffect(x,H)},Re.useLayoutEffect=function(x,H){return ze.current.useLayoutEffect(x,H)},Re.useMemo=function(x,H){return ze.current.useMemo(x,H)},Re.useReducer=function(x,H,le){return ze.current.useReducer(x,H,le)},Re.useRef=function(x){return ze.current.useRef(x)},Re.useState=function(x){return ze.current.useState(x)},Re.useSyncExternalStore=function(x,H,le){return ze.current.useSyncExternalStore(x,H,le)},Re.useTransition=function(){return ze.current.useTransition()},Re.version="18.2.0",Re}var uy;function Bf(){return uy||(uy=1,$d.exports=LT()),$d.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function MT(){if(cy)return Ja;cy=1;var n=Bf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,y){var w,A={},b=null,B=null;y!==void 0&&(b=""+y),g.key!==void 0&&(b=""+g.key),g.ref!==void 0&&(B=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(A[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)A[w]===void 0&&(A[w]=g[w]);return{$$typeof:e,type:f,key:b,ref:B,props:A,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=h,Ja.jsxs=h,Ja}var hy;function UT(){return hy||(hy=1,zd.exports=MT()),zd.exports}var C=UT(),Ze=Bf();const hv=cv(Ze);var Xu={},qd={exports:{}},tn={},Hd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function FT(){return dy||(dy=1,(function(n){function e(Y,ne){var x=Y.length;Y.push(ne);e:for(;0<x;){var H=x-1>>>1,le=Y[H];if(0<o(le,ne))Y[H]=ne,Y[x]=le,x=H;else break e}}function t(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var ne=Y[0],x=Y.pop();if(x!==ne){Y[0]=x;e:for(var H=0,le=Y.length,Ae=le>>>1;H<Ae;){var Te=2*(H+1)-1,Fe=Y[Te],Ne=Te+1,Me=Y[Ne];if(0>o(Fe,x))Ne<le&&0>o(Me,Fe)?(Y[H]=Me,Y[Ne]=x,H=Ne):(Y[H]=Fe,Y[Te]=x,H=Te);else if(Ne<le&&0>o(Me,x))Y[H]=Me,Y[Ne]=x,H=Ne;else break e}}return ne}function o(Y,ne){var x=Y.sortIndex-ne.sortIndex;return x!==0?x:Y.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var g=[],y=[],w=1,A=null,b=3,B=!1,G=!1,J=!1,q=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(Y){for(var ne=t(y);ne!==null;){if(ne.callback===null)i(y);else if(ne.startTime<=Y)i(y),ne.sortIndex=ne.expirationTime,e(g,ne);else break;ne=t(y)}}function ye(Y){if(J=!1,pe(Y),!G)if(t(g)!==null)G=!0,It(ke);else{var ne=t(y);ne!==null&&ze(ye,ne.startTime-Y)}}function ke(Y,ne){G=!1,J&&(J=!1,he(k),k=-1),B=!0;var x=b;try{for(pe(ne),A=t(g);A!==null&&(!(A.expirationTime>ne)||Y&&!S());){var H=A.callback;if(typeof H=="function"){A.callback=null,b=A.priorityLevel;var le=H(A.expirationTime<=ne);ne=n.unstable_now(),typeof le=="function"?A.callback=le:A===t(g)&&i(g),pe(ne)}else i(g);A=t(g)}if(A!==null)var Ae=!0;else{var Te=t(y);Te!==null&&ze(ye,Te.startTime-ne),Ae=!1}return Ae}finally{A=null,b=x,B=!1}}var Ie=!1,O=null,k=-1,T=5,P=-1;function S(){return!(n.unstable_now()-P<T)}function D(){if(O!==null){var Y=n.unstable_now();P=Y;var ne=!0;try{ne=O(!0,Y)}finally{ne?I():(Ie=!1,O=null)}}else Ie=!1}var I;if(typeof ue=="function")I=function(){ue(D)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,rt=Se.port2;Se.port1.onmessage=D,I=function(){rt.postMessage(null)}}else I=function(){q(D,0)};function It(Y){O=Y,Ie||(Ie=!0,I())}function ze(Y,ne){k=q(function(){Y(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){G||B||(G=!0,It(ke))},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(Y){switch(b){case 1:case 2:case 3:var ne=3;break;default:ne=b}var x=b;b=ne;try{return Y()}finally{b=x}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,ne){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var x=b;b=Y;try{return ne()}finally{b=x}},n.unstable_scheduleCallback=function(Y,ne,x){var H=n.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?H+x:H):x=H,Y){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=x+le,Y={id:w++,callback:ne,priorityLevel:Y,startTime:x,expirationTime:le,sortIndex:-1},x>H?(Y.sortIndex=x,e(y,Y),t(g)===null&&Y===t(y)&&(J?(he(k),k=-1):J=!0,ze(ye,x-H))):(Y.sortIndex=le,e(g,Y),G||B||(G=!0,It(ke))),Y},n.unstable_shouldYield=S,n.unstable_wrapCallback=function(Y){var ne=b;return function(){var x=b;b=ne;try{return Y.apply(this,arguments)}finally{b=x}}}})(Wd)),Wd}var fy;function jT(){return fy||(fy=1,Hd.exports=FT()),Hd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function BT(){if(py)return tn;py=1;var n=Bf(),e=jT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function b(r){return g.call(A,r)?!0:g.call(w,r)?!1:y.test(r)?A[r]=!0:(w[r]=!0,!1)}function B(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function G(r,s,a,c){if(s===null||typeof s>"u"||B(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function J(r,s,a,c,d,p,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=p,this.removeEmptyString=v}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){q[r]=new J(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];q[s]=new J(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){q[r]=new J(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){q[r]=new J(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){q[r]=new J(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){q[r]=new J(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){q[r]=new J(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){q[r]=new J(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){q[r]=new J(r,5,!1,r.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ue(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(he,ue);q[s]=new J(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(he,ue);q[s]=new J(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(he,ue);q[s]=new J(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){q[r]=new J(r,1,!1,r.toLowerCase(),null,!1,!1)}),q.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){q[r]=new J(r,1,!1,r.toLowerCase(),null,!0,!0)});function pe(r,s,a,c){var d=q.hasOwnProperty(s)?q[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(G(s,a,d,c)&&(a=null),c||d===null?b(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ye=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),S=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),rt=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ne(r){return r===null||typeof r!="object"?null:(r=Y&&r[Y]||r["@@iterator"],typeof r=="function"?r:null)}var x=Object.assign,H;function le(r){if(H===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);H=s&&s[1]||""}return`
`+H+r}var Ae=!1;function Te(r,s){if(!r||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(F){var c=F}Reflect.construct(r,[],s)}else{try{s.call()}catch(F){c=F}r.call(s.prototype)}else{try{throw Error()}catch(F){c=F}r()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,R=p.length-1;1<=v&&0<=R&&d[v]!==p[R];)R--;for(;1<=v&&0<=R;v--,R--)if(d[v]!==p[R]){if(v!==1||R!==1)do if(v--,R--,0>R||d[v]!==p[R]){var N=`
`+d[v].replace(" at new "," at ");return r.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",r.displayName)),N}while(1<=v&&0<=R);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?le(r):""}function Fe(r){switch(r.tag){case 5:return le(r.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return r=Te(r.type,!1),r;case 11:return r=Te(r.type.render,!1),r;case 1:return r=Te(r.type,!0),r;default:return""}}function Ne(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case O:return"Fragment";case Ie:return"Portal";case T:return"Profiler";case k:return"StrictMode";case I:return"Suspense";case Se:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case S:return(r.displayName||"Context")+".Consumer";case P:return(r._context.displayName||"Context")+".Provider";case D:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case rt:return s=r.displayName||null,s!==null?s:Ne(r.type)||"Memo";case It:s=r._payload,r=r._init;try{return Ne(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function De(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ct(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function _h(r){var s=Ct(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Hs(r){r._valueTracker||(r._valueTracker=_h(r))}function ra(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=Ct(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Xr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ws(r,s){var a=s.checked;return x({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ml(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=De(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ks(r,s){s=s.checked,s!=null&&pe(r,"checked",s,!1)}function Qi(r,s){Ks(r,s);var a=De(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?ft(r,s.type,a):s.hasOwnProperty("defaultValue")&&ft(r,s.type,De(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function ia(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ft(r,s,a){(s!=="number"||Xr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var ut=Array.isArray;function Dn(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+De(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function sa(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return x({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function oa(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ut(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:De(a)}}function Ul(r,s){var a=De(s.value),c=De(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Zr(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function aa(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?aa(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var ei,Fl=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(ei=ei||document.createElement("div"),ei.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ei.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Yi(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jl=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(r){jl.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),ti[s]=ti[r]})});function ni(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||ti.hasOwnProperty(r)&&ti[r]?(""+s).trim():s+"px"}function Qs(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ni(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var la=x({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function On(r,s){if(s){if(la[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ys(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=null;function Js(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Er=null,Tr=null,it=null;function ua(r){if(r=La(r)){if(typeof Er!="function")throw Error(t(280));var s=r.stateNode;s&&(s=fu(s),Er(r.stateNode,r.type,s))}}function ii(r){Tr?it?it.push(r):it=[r]:Tr=r}function si(){if(Tr){var r=Tr,s=it;if(it=Tr=null,ua(r),s)for(r=0;r<s.length;r++)ua(s[r])}}function Bl(r,s){return r(s)}function zl(){}var Qn=!1;function $l(r,s,a){if(Qn)return r(s,a);Qn=!0;try{return Bl(r,s,a)}finally{Qn=!1,(Tr!==null||it!==null)&&(zl(),si())}}function Ji(r,s){var a=r.stateNode;if(a===null)return null;var c=fu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var oi=!1;if(f)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){oi=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{oi=!1}function ql(r,s,a,c,d,p,v,R,N){var F=Array.prototype.slice.call(arguments,3);try{s.apply(a,F)}catch(K){this.onError(K)}}var Ir=!1,Yn=null,Xs=!1,En=null,Hl={onError:function(r){Ir=!0,Yn=r}};function Wl(r,s,a,c,d,p,v,R,N){Ir=!1,Yn=null,ql.apply(Hl,arguments)}function ca(r,s,a,c,d,p,v,R,N){if(Wl.apply(this,arguments),Ir){if(Ir){var F=Yn;Ir=!1,Yn=null}else throw Error(t(198));Xs||(Xs=!0,En=F)}}function Vn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function ha(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Kl(r){if(Vn(r)!==r)throw Error(t(188))}function Gl(r){var s=r.alternate;if(!s){if(s=Vn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Kl(d),r;if(p===c)return Kl(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,R=d.child;R;){if(R===a){v=!0,a=d,c=p;break}if(R===c){v=!0,c=d,a=p;break}R=R.sibling}if(!v){for(R=p.child;R;){if(R===a){v=!0,a=p,c=d;break}if(R===c){v=!0,c=p,a=d;break}R=R.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Ql(r){return r=Gl(r),r!==null?Xi(r):null}function Xi(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Xi(r);if(s!==null)return s;r=r.sibling}return null}var da=e.unstable_scheduleCallback,Zs=e.unstable_cancelCallback,Zi=e.unstable_shouldYield,Sr=e.unstable_requestPaint,Ge=e.unstable_now,vh=e.unstable_getCurrentPriorityLevel,eo=e.unstable_ImmediatePriority,fa=e.unstable_UserBlockingPriority,es=e.unstable_NormalPriority,pa=e.unstable_LowPriority,to=e.unstable_IdlePriority,ts=null,an=null;function Yl(r){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(ts,r,void 0,(r.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:ns,Jn=Math.log,Tn=Math.LN2;function ns(r){return r>>>=0,r===0?32:31-(Jn(r)/Tn|0)|0}var Xn=64,li=4194304;function Ue(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ar(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,p=r.pingedLanes,v=a&268435455;if(v!==0){var R=v&~d;R!==0?c=Ue(R):(p&=v,p!==0&&(c=Ue(p)))}else v=a&~d,v!==0?c=Ue(v):p!==0&&(c=Ue(p));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-ln(s),d=1<<a,c|=r[a],s&=~d;return c}function rs(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function is(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var v=31-ln(p),R=1<<v,N=d[v];N===-1?((R&a)===0||(R&c)!==0)&&(d[v]=rs(R,s)):N<=s&&(r.expiredLanes|=R),p&=~R}}function ma(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ga(){var r=Xn;return Xn<<=1,(Xn&4194240)===0&&(Xn=64),r}function ya(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ss(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-ln(s),r[s]=a}function wh(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-ln(a),p=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~p}}function _a(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-ln(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var be=0;function Zn(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var va,no,wa,Ea,Ta,er=!1,ro=[],tr=null,nr=null,Pt=null,os=new Map,Rr=new Map,un=[],Jl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ui(r,s){switch(r){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":os.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(s.pointerId)}}function Ln(r,s,a,c,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},s!==null&&(s=La(s),s!==null&&no(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function Xl(r,s,a,c,d){switch(s){case"focusin":return tr=Ln(tr,r,s,a,c,d),!0;case"dragenter":return nr=Ln(nr,r,s,a,c,d),!0;case"mouseover":return Pt=Ln(Pt,r,s,a,c,d),!0;case"pointerover":var p=d.pointerId;return os.set(p,Ln(os.get(p)||null,r,s,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Rr.set(p,Ln(Rr.get(p)||null,r,s,a,c,d)),!0}return!1}function io(r){var s=cs(r.target);if(s!==null){var a=Vn(s);if(a!==null){if(s=a.tag,s===13){if(s=ha(a),s!==null){r.blockedOn=s,Ta(r.priority,function(){wa(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function $e(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=so(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);ri=c,a.target.dispatchEvent(c),ri=null}else return s=La(a),s!==null&&no(s),r.blockedOn=a,!1;s.shift()}return!0}function Zl(r,s,a){$e(r)&&a.delete(s)}function Eh(){er=!1,tr!==null&&$e(tr)&&(tr=null),nr!==null&&$e(nr)&&(nr=null),Pt!==null&&$e(Pt)&&(Pt=null),os.forEach(Zl),Rr.forEach(Zl)}function ci(r,s){r.blockedOn===s&&(r.blockedOn=null,er||(er=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Eh)))}function hi(r){function s(d){return ci(d,r)}if(0<ro.length){ci(ro[0],r);for(var a=1;a<ro.length;a++){var c=ro[a];c.blockedOn===r&&(c.blockedOn=null)}}for(tr!==null&&ci(tr,r),nr!==null&&ci(nr,r),Pt!==null&&ci(Pt,r),os.forEach(s),Rr.forEach(s),a=0;a<un.length;a++)c=un[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<un.length&&(a=un[0],a.blockedOn===null);)io(a),a.blockedOn===null&&un.shift()}var kr=ye.ReactCurrentBatchConfig,Cr=!0;function rr(r,s,a,c){var d=be,p=kr.transition;kr.transition=null;try{be=1,Ia(r,s,a,c)}finally{be=d,kr.transition=p}}function eu(r,s,a,c){var d=be,p=kr.transition;kr.transition=null;try{be=4,Ia(r,s,a,c)}finally{be=d,kr.transition=p}}function Ia(r,s,a,c){if(Cr){var d=so(r,s,a,c);if(d===null)bh(r,s,c,ir,a),ui(r,c);else if(Xl(d,r,s,a,c))c.stopPropagation();else if(ui(r,c),s&4&&-1<Jl.indexOf(r)){for(;d!==null;){var p=La(d);if(p!==null&&va(p),p=so(r,s,a,c),p===null&&bh(r,s,c,ir,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else bh(r,s,c,null,a)}}var ir=null;function so(r,s,a,c){if(ir=null,r=Js(c),r=cs(r),r!==null)if(s=Vn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=ha(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return ir=r,null}function oo(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vh()){case eo:return 1;case fa:return 4;case es:case pa:return 16;case to:return 536870912;default:return 16}default:return 16}}var cn=null,ao=null,Pr=null;function tu(){if(Pr)return Pr;var r,s=ao,a=s.length,c,d="value"in cn?cn.value:cn.textContent,p=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[p-c];c++);return Pr=d.slice(r,1<c?1-c:void 0)}function as(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function sr(){return!0}function Sa(){return!1}function Lt(r){function s(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(p):p[R]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?sr:Sa,this.isPropagationStopped=Sa,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),s}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=Lt(or),di=x({},or,{view:0,detail:0}),lo=Lt(di),uo,co,hn,us=x({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==hn&&(hn&&r.type==="mousemove"?(uo=r.screenX-hn.screenX,co=r.screenY-hn.screenY):co=uo=0,hn=r),uo)},movementY:function(r){return"movementY"in r?r.movementY:co}}),Aa=Lt(us),nu=x({},us,{dataTransfer:0}),ru=Lt(nu),ho=x({},di,{relatedTarget:0}),xt=Lt(ho),iu=x({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),su=Lt(iu),fi=x({},or,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),u=Lt(fi),m=x({},or,{data:0}),_=Lt(m),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=j[r])?!!s[r]:!1}function we(){return Z}var ct=x({},di,{key:function(r){if(r.key){var s=E[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=as(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?M[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(r){return r.type==="keypress"?as(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?as(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Be=Lt(ct),pt=x({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dn=Lt(pt),xr=x({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we}),ar=Lt(xr),lr=x({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),fo=Lt(lr),Ra=x({},us,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),x0=Lt(Ra),N0=[9,13,27,32],Th=f&&"CompositionEvent"in window,ka=null;f&&"documentMode"in document&&(ka=document.documentMode);var b0=f&&"TextEvent"in window&&!ka,Zp=f&&(!Th||ka&&8<ka&&11>=ka),em=" ",tm=!1;function nm(r,s){switch(r){case"keyup":return N0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var po=!1;function D0(r,s){switch(r){case"compositionend":return rm(s);case"keypress":return s.which!==32?null:(tm=!0,em);case"textInput":return r=s.data,r===em&&tm?null:r;default:return null}}function O0(r,s){if(po)return r==="compositionend"||!Th&&nm(r,s)?(r=tu(),Pr=ao=cn=null,po=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Zp&&s.locale!=="ko"?null:s.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!V0[r.type]:s==="textarea"}function sm(r,s,a,c){ii(c),s=cu(s,"onChange"),0<s.length&&(a=new ls("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Ca=null,Pa=null;function L0(r){Im(r,0)}function ou(r){var s=vo(r);if(ra(s))return r}function M0(r,s){if(r==="change")return s}var om=!1;if(f){var Ih;if(f){var Sh="oninput"in document;if(!Sh){var am=document.createElement("div");am.setAttribute("oninput","return;"),Sh=typeof am.oninput=="function"}Ih=Sh}else Ih=!1;om=Ih&&(!document.documentMode||9<document.documentMode)}function lm(){Ca&&(Ca.detachEvent("onpropertychange",um),Pa=Ca=null)}function um(r){if(r.propertyName==="value"&&ou(Pa)){var s=[];sm(s,Pa,r,Js(r)),$l(L0,s)}}function U0(r,s,a){r==="focusin"?(lm(),Ca=s,Pa=a,Ca.attachEvent("onpropertychange",um)):r==="focusout"&&lm()}function F0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ou(Pa)}function j0(r,s){if(r==="click")return ou(s)}function B0(r,s){if(r==="input"||r==="change")return ou(s)}function z0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mn=typeof Object.is=="function"?Object.is:z0;function xa(r,s){if(Mn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Mn(r[d],s[d]))return!1}return!0}function cm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function hm(r,s){var a=cm(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cm(a)}}function dm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?dm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function fm(){for(var r=window,s=Xr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Xr(r.document)}return s}function Ah(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function $0(r){var s=fm(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&dm(a.ownerDocument.documentElement,a)){if(c!==null&&Ah(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!r.extend&&p>c&&(d=c,c=p,p=d),d=hm(a,p);var v=hm(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),p>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var q0=f&&"documentMode"in document&&11>=document.documentMode,mo=null,Rh=null,Na=null,kh=!1;function pm(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kh||mo==null||mo!==Xr(c)||(c=mo,"selectionStart"in c&&Ah(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Na&&xa(Na,c)||(Na=c,c=cu(Rh,"onSelect"),0<c.length&&(s=new ls("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=mo)))}function au(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var go={animationend:au("Animation","AnimationEnd"),animationiteration:au("Animation","AnimationIteration"),animationstart:au("Animation","AnimationStart"),transitionend:au("Transition","TransitionEnd")},Ch={},mm={};f&&(mm=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function lu(r){if(Ch[r])return Ch[r];if(!go[r])return r;var s=go[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in mm)return Ch[r]=s[a];return r}var gm=lu("animationend"),ym=lu("animationiteration"),_m=lu("animationstart"),vm=lu("transitionend"),wm=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(r,s){wm.set(r,s),l(s,[r])}for(var Ph=0;Ph<Em.length;Ph++){var xh=Em[Ph],H0=xh.toLowerCase(),W0=xh[0].toUpperCase()+xh.slice(1);pi(H0,"on"+W0)}pi(gm,"onAnimationEnd"),pi(ym,"onAnimationIteration"),pi(_m,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(vm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function Tm(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,ca(c,s,void 0,r),r.currentTarget=null}function Im(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var p=void 0;if(s)for(var v=c.length-1;0<=v;v--){var R=c[v],N=R.instance,F=R.currentTarget;if(R=R.listener,N!==p&&d.isPropagationStopped())break e;Tm(d,R,F),p=N}else for(v=0;v<c.length;v++){if(R=c[v],N=R.instance,F=R.currentTarget,R=R.listener,N!==p&&d.isPropagationStopped())break e;Tm(d,R,F),p=N}}}if(Xs)throw r=En,Xs=!1,En=null,r}function Qe(r,s){var a=s[Uh];a===void 0&&(a=s[Uh]=new Set);var c=r+"__bubble";a.has(c)||(Sm(s,r,2,!1),a.add(c))}function Nh(r,s,a){var c=0;s&&(c|=4),Sm(a,r,c,s)}var uu="_reactListening"+Math.random().toString(36).slice(2);function Da(r){if(!r[uu]){r[uu]=!0,i.forEach(function(a){a!=="selectionchange"&&(K0.has(a)||Nh(a,!1,r),Nh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[uu]||(s[uu]=!0,Nh("selectionchange",!1,s))}}function Sm(r,s,a,c){switch(oo(s)){case 1:var d=rr;break;case 4:d=eu;break;default:d=Ia}a=d.bind(null,s,a,r),d=void 0,!oi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function bh(r,s,a,c,d){var p=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var R=c.stateNode.containerInfo;if(R===d||R.nodeType===8&&R.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var N=v.tag;if((N===3||N===4)&&(N=v.stateNode.containerInfo,N===d||N.nodeType===8&&N.parentNode===d))return;v=v.return}for(;R!==null;){if(v=cs(R),v===null)return;if(N=v.tag,N===5||N===6){c=p=v;continue e}R=R.parentNode}}c=c.return}$l(function(){var F=p,K=Js(a),Q=[];e:{var W=wm.get(r);if(W!==void 0){var te=ls,se=r;switch(r){case"keypress":if(as(a)===0)break e;case"keydown":case"keyup":te=Be;break;case"focusin":se="focus",te=xt;break;case"focusout":se="blur",te=xt;break;case"beforeblur":case"afterblur":te=xt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Aa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=ru;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=ar;break;case gm:case ym:case _m:te=su;break;case vm:te=fo;break;case"scroll":te=lo;break;case"wheel":te=x0;break;case"copy":case"cut":case"paste":te=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=dn}var oe=(s&4)!==0,ht=!oe&&r==="scroll",L=oe?W!==null?W+"Capture":null:W;oe=[];for(var V=F,U;V!==null;){U=V;var X=U.stateNode;if(U.tag===5&&X!==null&&(U=X,L!==null&&(X=Ji(V,L),X!=null&&oe.push(Oa(V,X,U)))),ht)break;V=V.return}0<oe.length&&(W=new te(W,se,null,a,K),Q.push({event:W,listeners:oe}))}}if((s&7)===0){e:{if(W=r==="mouseover"||r==="pointerover",te=r==="mouseout"||r==="pointerout",W&&a!==ri&&(se=a.relatedTarget||a.fromElement)&&(cs(se)||se[Nr]))break e;if((te||W)&&(W=K.window===K?K:(W=K.ownerDocument)?W.defaultView||W.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=F,se=se?cs(se):null,se!==null&&(ht=Vn(se),se!==ht||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=F),te!==se)){if(oe=Aa,X="onMouseLeave",L="onMouseEnter",V="mouse",(r==="pointerout"||r==="pointerover")&&(oe=dn,X="onPointerLeave",L="onPointerEnter",V="pointer"),ht=te==null?W:vo(te),U=se==null?W:vo(se),W=new oe(X,V+"leave",te,a,K),W.target=ht,W.relatedTarget=U,X=null,cs(K)===F&&(oe=new oe(L,V+"enter",se,a,K),oe.target=U,oe.relatedTarget=ht,X=oe),ht=X,te&&se)t:{for(oe=te,L=se,V=0,U=oe;U;U=yo(U))V++;for(U=0,X=L;X;X=yo(X))U++;for(;0<V-U;)oe=yo(oe),V--;for(;0<U-V;)L=yo(L),U--;for(;V--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=yo(oe),L=yo(L)}oe=null}else oe=null;te!==null&&Am(Q,W,te,oe,!1),se!==null&&ht!==null&&Am(Q,ht,se,oe,!0)}}e:{if(W=F?vo(F):window,te=W.nodeName&&W.nodeName.toLowerCase(),te==="select"||te==="input"&&W.type==="file")var ae=M0;else if(im(W))if(om)ae=B0;else{ae=F0;var de=U0}else(te=W.nodeName)&&te.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ae=j0);if(ae&&(ae=ae(r,F))){sm(Q,ae,a,K);break e}de&&de(r,W,F),r==="focusout"&&(de=W._wrapperState)&&de.controlled&&W.type==="number"&&ft(W,"number",W.value)}switch(de=F?vo(F):window,r){case"focusin":(im(de)||de.contentEditable==="true")&&(mo=de,Rh=F,Na=null);break;case"focusout":Na=Rh=mo=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,pm(Q,a,K);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":pm(Q,a,K)}var fe;if(Th)e:{switch(r){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else po?nm(r,a)&&(_e="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Zp&&a.locale!=="ko"&&(po||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&po&&(fe=tu()):(cn=K,ao="value"in cn?cn.value:cn.textContent,po=!0)),de=cu(F,_e),0<de.length&&(_e=new _(_e,r,null,a,K),Q.push({event:_e,listeners:de}),fe?_e.data=fe:(fe=rm(a),fe!==null&&(_e.data=fe)))),(fe=b0?D0(r,a):O0(r,a))&&(F=cu(F,"onBeforeInput"),0<F.length&&(K=new _("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:F}),K.data=fe))}Im(Q,s)})}function Oa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function cu(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Ji(r,a),p!=null&&c.unshift(Oa(r,p,d)),p=Ji(r,s),p!=null&&c.push(Oa(r,p,d))),r=r.return}return c}function yo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Am(r,s,a,c,d){for(var p=s._reactName,v=[];a!==null&&a!==c;){var R=a,N=R.alternate,F=R.stateNode;if(N!==null&&N===c)break;R.tag===5&&F!==null&&(R=F,d?(N=Ji(a,p),N!=null&&v.unshift(Oa(a,N,R))):d||(N=Ji(a,p),N!=null&&v.push(Oa(a,N,R)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var G0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function Rm(r){return(typeof r=="string"?r:""+r).replace(G0,`
`).replace(Q0,"")}function hu(r,s,a){if(s=Rm(s),Rm(r)!==s&&a)throw Error(t(425))}function du(){}var Dh=null,Oh=null;function Vh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Lh=typeof setTimeout=="function"?setTimeout:void 0,Y0=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(r){return km.resolve(null).then(r).catch(X0)}:Lh;function X0(r){setTimeout(function(){throw r})}function Mh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),hi(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);hi(s)}function mi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Cm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var _o=Math.random().toString(36).slice(2),ur="__reactFiber$"+_o,Va="__reactProps$"+_o,Nr="__reactContainer$"+_o,Uh="__reactEvents$"+_o,Z0="__reactListeners$"+_o,eT="__reactHandles$"+_o;function cs(r){var s=r[ur];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Nr]||a[ur]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Cm(r);r!==null;){if(a=r[ur])return a;r=Cm(r)}return s}r=a,a=r.parentNode}return null}function La(r){return r=r[ur]||r[Nr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function vo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function fu(r){return r[Va]||null}var Fh=[],wo=-1;function gi(r){return{current:r}}function Ye(r){0>wo||(r.current=Fh[wo],Fh[wo]=null,wo--)}function He(r,s){wo++,Fh[wo]=r.current,r.current=s}var yi={},Mt=gi(yi),Yt=gi(!1),hs=yi;function Eo(r,s){var a=r.type.contextTypes;if(!a)return yi;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(r){return r=r.childContextTypes,r!=null}function pu(){Ye(Yt),Ye(Mt)}function Pm(r,s,a){if(Mt.current!==yi)throw Error(t(168));He(Mt,s),He(Yt,a)}function xm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return x({},a,c)}function mu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||yi,hs=Mt.current,He(Mt,r),He(Yt,Yt.current),!0}function Nm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=xm(r,s,hs),c.__reactInternalMemoizedMergedChildContext=r,Ye(Yt),Ye(Mt),He(Mt,r)):Ye(Yt),He(Yt,a)}var br=null,gu=!1,jh=!1;function bm(r){br===null?br=[r]:br.push(r)}function tT(r){gu=!0,bm(r)}function _i(){if(!jh&&br!==null){jh=!0;var r=0,s=be;try{var a=br;for(be=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}br=null,gu=!1}catch(d){throw br!==null&&(br=br.slice(r+1)),da(eo,_i),d}finally{be=s,jh=!1}}return null}var To=[],Io=0,yu=null,_u=0,In=[],Sn=0,ds=null,Dr=1,Or="";function fs(r,s){To[Io++]=_u,To[Io++]=yu,yu=r,_u=s}function Dm(r,s,a){In[Sn++]=Dr,In[Sn++]=Or,In[Sn++]=ds,ds=r;var c=Dr;r=Or;var d=32-ln(c)-1;c&=~(1<<d),a+=1;var p=32-ln(s)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Dr=1<<32-ln(s)+d|a<<d|c,Or=p+r}else Dr=1<<p|a<<d|c,Or=r}function Bh(r){r.return!==null&&(fs(r,1),Dm(r,1,0))}function zh(r){for(;r===yu;)yu=To[--Io],To[Io]=null,_u=To[--Io],To[Io]=null;for(;r===ds;)ds=In[--Sn],In[Sn]=null,Or=In[--Sn],In[Sn]=null,Dr=In[--Sn],In[Sn]=null}var fn=null,pn=null,Xe=!1,Un=null;function Om(r,s){var a=Cn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Vm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,fn=r,pn=mi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,fn=r,pn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ds!==null?{id:Dr,overflow:Or}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Cn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,fn=r,pn=null,!0):!1;default:return!1}}function $h(r){return(r.mode&1)!==0&&(r.flags&128)===0}function qh(r){if(Xe){var s=pn;if(s){var a=s;if(!Vm(r,s)){if($h(r))throw Error(t(418));s=mi(a.nextSibling);var c=fn;s&&Vm(r,s)?Om(c,a):(r.flags=r.flags&-4097|2,Xe=!1,fn=r)}}else{if($h(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,fn=r}}}function Lm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;fn=r}function vu(r){if(r!==fn)return!1;if(!Xe)return Lm(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Vh(r.type,r.memoizedProps)),s&&(s=pn)){if($h(r))throw Mm(),Error(t(418));for(;s;)Om(r,s),s=mi(s.nextSibling)}if(Lm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){pn=mi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}pn=null}}else pn=fn?mi(r.stateNode.nextSibling):null;return!0}function Mm(){for(var r=pn;r;)r=mi(r.nextSibling)}function So(){pn=fn=null,Xe=!1}function Hh(r){Un===null?Un=[r]:Un.push(r)}var nT=ye.ReactCurrentBatchConfig;function Fn(r,s){if(r&&r.defaultProps){s=x({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}var wu=gi(null),Eu=null,Ao=null,Wh=null;function Kh(){Wh=Ao=Eu=null}function Gh(r){var s=wu.current;Ye(wu),r._currentValue=s}function Qh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Ro(r,s){Eu=r,Wh=Ao=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Xt=!0),r.firstContext=null)}function An(r){var s=r._currentValue;if(Wh!==r)if(r={context:r,memoizedValue:s,next:null},Ao===null){if(Eu===null)throw Error(t(308));Ao=r,Eu.dependencies={lanes:0,firstContext:r}}else Ao=Ao.next=r;return s}var ps=null;function Yh(r){ps===null?ps=[r]:ps.push(r)}function Um(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Yh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Vr(r,c)}function Vr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var vi=!1;function Jh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Lr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function wi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Vr(r,a)}return d=c.interleaved,d===null?(s.next=s,Yh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Vr(r,a)}function Tu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,_a(r,a)}}function jm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Iu(r,s,a,c){var d=r.updateQueue;vi=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var N=R,F=N.next;N.next=null,v===null?p=F:v.next=F,v=N;var K=r.alternate;K!==null&&(K=K.updateQueue,R=K.lastBaseUpdate,R!==v&&(R===null?K.firstBaseUpdate=F:R.next=F,K.lastBaseUpdate=N))}if(p!==null){var Q=d.baseState;v=0,K=F=N=null,R=p;do{var W=R.lane,te=R.eventTime;if((c&W)===W){K!==null&&(K=K.next={eventTime:te,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var se=r,oe=R;switch(W=s,te=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Q=se.call(te,Q,W);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,W=typeof se=="function"?se.call(te,Q,W):se,W==null)break e;Q=x({},Q,W);break e;case 2:vi=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,W=d.effects,W===null?d.effects=[R]:W.push(R))}else te={eventTime:te,lane:W,tag:R.tag,payload:R.payload,callback:R.callback,next:null},K===null?(F=K=te,N=Q):K=K.next=te,v|=W;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;W=R,R=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(K===null&&(N=Q),d.baseState=N,d.firstBaseUpdate=F,d.lastBaseUpdate=K,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);ys|=v,r.lanes=v,r.memoizedState=Q}}function Bm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var zm=new n.Component().refs;function Xh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:x({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Su={isMounted:function(r){return(r=r._reactInternals)?Vn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Gt(),d=Si(r),p=Lr(c,d);p.payload=s,a!=null&&(p.callback=a),s=wi(r,p,d),s!==null&&(zn(s,r,d,c),Tu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Gt(),d=Si(r),p=Lr(c,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=wi(r,p,d),s!==null&&(zn(s,r,d,c),Tu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Gt(),c=Si(r),d=Lr(a,c);d.tag=2,s!=null&&(d.callback=s),s=wi(r,d,c),s!==null&&(zn(s,r,c,a),Tu(s,r,c))}};function $m(r,s,a,c,d,p,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,p,v):s.prototype&&s.prototype.isPureReactComponent?!xa(a,c)||!xa(d,p):!0}function qm(r,s,a){var c=!1,d=yi,p=s.contextType;return typeof p=="object"&&p!==null?p=An(p):(d=Jt(s)?hs:Mt.current,c=s.contextTypes,p=(c=c!=null)?Eo(r,d):yi),s=new s(a,p),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Su,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),s}function Hm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&Su.enqueueReplaceState(s,s.state,null)}function Zh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs=zm,Jh(r);var p=s.contextType;typeof p=="object"&&p!==null?d.context=An(p):(p=Jt(s)?hs:Mt.current,d.context=Eo(r,p)),d.state=r.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Xh(r,s,p,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Su.enqueueReplaceState(d,d.state,null),Iu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Ma(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,p=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(v){var R=d.refs;R===zm&&(R=d.refs={}),v===null?delete R[p]:R[p]=v},s._stringRef=p,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Au(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Wm(r){var s=r._init;return s(r._payload)}function Km(r){function s(L,V){if(r){var U=L.deletions;U===null?(L.deletions=[V],L.flags|=16):U.push(V)}}function a(L,V){if(!r)return null;for(;V!==null;)s(L,V),V=V.sibling;return null}function c(L,V){for(L=new Map;V!==null;)V.key!==null?L.set(V.key,V):L.set(V.index,V),V=V.sibling;return L}function d(L,V){return L=Ri(L,V),L.index=0,L.sibling=null,L}function p(L,V,U){return L.index=U,r?(U=L.alternate,U!==null?(U=U.index,U<V?(L.flags|=2,V):U):(L.flags|=2,V)):(L.flags|=1048576,V)}function v(L){return r&&L.alternate===null&&(L.flags|=2),L}function R(L,V,U,X){return V===null||V.tag!==6?(V=Ld(U,L.mode,X),V.return=L,V):(V=d(V,U),V.return=L,V)}function N(L,V,U,X){var ae=U.type;return ae===O?K(L,V,U.props.children,X,U.key):V!==null&&(V.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===It&&Wm(ae)===V.type)?(X=d(V,U.props),X.ref=Ma(L,V,U),X.return=L,X):(X=qu(U.type,U.key,U.props,null,L.mode,X),X.ref=Ma(L,V,U),X.return=L,X)}function F(L,V,U,X){return V===null||V.tag!==4||V.stateNode.containerInfo!==U.containerInfo||V.stateNode.implementation!==U.implementation?(V=Md(U,L.mode,X),V.return=L,V):(V=d(V,U.children||[]),V.return=L,V)}function K(L,V,U,X,ae){return V===null||V.tag!==7?(V=Es(U,L.mode,X,ae),V.return=L,V):(V=d(V,U),V.return=L,V)}function Q(L,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Ld(""+V,L.mode,U),V.return=L,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ke:return U=qu(V.type,V.key,V.props,null,L.mode,U),U.ref=Ma(L,null,V),U.return=L,U;case Ie:return V=Md(V,L.mode,U),V.return=L,V;case It:var X=V._init;return Q(L,X(V._payload),U)}if(ut(V)||ne(V))return V=Es(V,L.mode,U,null),V.return=L,V;Au(L,V)}return null}function W(L,V,U,X){var ae=V!==null?V.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return ae!==null?null:R(L,V,""+U,X);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ke:return U.key===ae?N(L,V,U,X):null;case Ie:return U.key===ae?F(L,V,U,X):null;case It:return ae=U._init,W(L,V,ae(U._payload),X)}if(ut(U)||ne(U))return ae!==null?null:K(L,V,U,X,null);Au(L,U)}return null}function te(L,V,U,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(U)||null,R(V,L,""+X,ae);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case ke:return L=L.get(X.key===null?U:X.key)||null,N(V,L,X,ae);case Ie:return L=L.get(X.key===null?U:X.key)||null,F(V,L,X,ae);case It:var de=X._init;return te(L,V,U,de(X._payload),ae)}if(ut(X)||ne(X))return L=L.get(U)||null,K(V,L,X,ae,null);Au(V,X)}return null}function se(L,V,U,X){for(var ae=null,de=null,fe=V,_e=V=0,Rt=null;fe!==null&&_e<U.length;_e++){fe.index>_e?(Rt=fe,fe=null):Rt=fe.sibling;var Le=W(L,fe,U[_e],X);if(Le===null){fe===null&&(fe=Rt);break}r&&fe&&Le.alternate===null&&s(L,fe),V=p(Le,V,_e),de===null?ae=Le:de.sibling=Le,de=Le,fe=Rt}if(_e===U.length)return a(L,fe),Xe&&fs(L,_e),ae;if(fe===null){for(;_e<U.length;_e++)fe=Q(L,U[_e],X),fe!==null&&(V=p(fe,V,_e),de===null?ae=fe:de.sibling=fe,de=fe);return Xe&&fs(L,_e),ae}for(fe=c(L,fe);_e<U.length;_e++)Rt=te(fe,L,_e,U[_e],X),Rt!==null&&(r&&Rt.alternate!==null&&fe.delete(Rt.key===null?_e:Rt.key),V=p(Rt,V,_e),de===null?ae=Rt:de.sibling=Rt,de=Rt);return r&&fe.forEach(function(ki){return s(L,ki)}),Xe&&fs(L,_e),ae}function oe(L,V,U,X){var ae=ne(U);if(typeof ae!="function")throw Error(t(150));if(U=ae.call(U),U==null)throw Error(t(151));for(var de=ae=null,fe=V,_e=V=0,Rt=null,Le=U.next();fe!==null&&!Le.done;_e++,Le=U.next()){fe.index>_e?(Rt=fe,fe=null):Rt=fe.sibling;var ki=W(L,fe,Le.value,X);if(ki===null){fe===null&&(fe=Rt);break}r&&fe&&ki.alternate===null&&s(L,fe),V=p(ki,V,_e),de===null?ae=ki:de.sibling=ki,de=ki,fe=Rt}if(Le.done)return a(L,fe),Xe&&fs(L,_e),ae;if(fe===null){for(;!Le.done;_e++,Le=U.next())Le=Q(L,Le.value,X),Le!==null&&(V=p(Le,V,_e),de===null?ae=Le:de.sibling=Le,de=Le);return Xe&&fs(L,_e),ae}for(fe=c(L,fe);!Le.done;_e++,Le=U.next())Le=te(fe,L,_e,Le.value,X),Le!==null&&(r&&Le.alternate!==null&&fe.delete(Le.key===null?_e:Le.key),V=p(Le,V,_e),de===null?ae=Le:de.sibling=Le,de=Le);return r&&fe.forEach(function(VT){return s(L,VT)}),Xe&&fs(L,_e),ae}function ht(L,V,U,X){if(typeof U=="object"&&U!==null&&U.type===O&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case ke:e:{for(var ae=U.key,de=V;de!==null;){if(de.key===ae){if(ae=U.type,ae===O){if(de.tag===7){a(L,de.sibling),V=d(de,U.props.children),V.return=L,L=V;break e}}else if(de.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===It&&Wm(ae)===de.type){a(L,de.sibling),V=d(de,U.props),V.ref=Ma(L,de,U),V.return=L,L=V;break e}a(L,de);break}else s(L,de);de=de.sibling}U.type===O?(V=Es(U.props.children,L.mode,X,U.key),V.return=L,L=V):(X=qu(U.type,U.key,U.props,null,L.mode,X),X.ref=Ma(L,V,U),X.return=L,L=X)}return v(L);case Ie:e:{for(de=U.key;V!==null;){if(V.key===de)if(V.tag===4&&V.stateNode.containerInfo===U.containerInfo&&V.stateNode.implementation===U.implementation){a(L,V.sibling),V=d(V,U.children||[]),V.return=L,L=V;break e}else{a(L,V);break}else s(L,V);V=V.sibling}V=Md(U,L.mode,X),V.return=L,L=V}return v(L);case It:return de=U._init,ht(L,V,de(U._payload),X)}if(ut(U))return se(L,V,U,X);if(ne(U))return oe(L,V,U,X);Au(L,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,V!==null&&V.tag===6?(a(L,V.sibling),V=d(V,U),V.return=L,L=V):(a(L,V),V=Ld(U,L.mode,X),V.return=L,L=V),v(L)):a(L,V)}return ht}var ko=Km(!0),Gm=Km(!1),Ua={},cr=gi(Ua),Fa=gi(Ua),ja=gi(Ua);function ms(r){if(r===Ua)throw Error(t(174));return r}function ed(r,s){switch(He(ja,s),He(Fa,r),He(cr,Ua),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Gs(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Gs(s,r)}Ye(cr),He(cr,s)}function Co(){Ye(cr),Ye(Fa),Ye(ja)}function Qm(r){ms(ja.current);var s=ms(cr.current),a=Gs(s,r.type);s!==a&&(He(Fa,r),He(cr,a))}function td(r){Fa.current===r&&(Ye(cr),Ye(Fa))}var et=gi(0);function Ru(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var nd=[];function rd(){for(var r=0;r<nd.length;r++)nd[r]._workInProgressVersionPrimary=null;nd.length=0}var ku=ye.ReactCurrentDispatcher,id=ye.ReactCurrentBatchConfig,gs=0,tt=null,vt=null,St=null,Cu=!1,Ba=!1,za=0,rT=0;function Ut(){throw Error(t(321))}function sd(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Mn(r[a],s[a]))return!1;return!0}function od(r,s,a,c,d,p){if(gs=p,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ku.current=r===null||r.memoizedState===null?aT:lT,r=a(c,d),Ba){p=0;do{if(Ba=!1,za=0,25<=p)throw Error(t(301));p+=1,St=vt=null,s.updateQueue=null,ku.current=uT,r=a(c,d)}while(Ba)}if(ku.current=Nu,s=vt!==null&&vt.next!==null,gs=0,St=vt=tt=null,Cu=!1,s)throw Error(t(300));return r}function ad(){var r=za!==0;return za=0,r}function hr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?tt.memoizedState=St=r:St=St.next=r,St}function Rn(){if(vt===null){var r=tt.alternate;r=r!==null?r.memoizedState:null}else r=vt.next;var s=St===null?tt.memoizedState:St.next;if(s!==null)St=s,vt=r;else{if(r===null)throw Error(t(310));vt=r,r={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},St===null?tt.memoizedState=St=r:St=St.next=r}return St}function $a(r,s){return typeof s=="function"?s(r):s}function ld(r){var s=Rn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=vt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var R=v=null,N=null,F=p;do{var K=F.lane;if((gs&K)===K)N!==null&&(N=N.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:r(c,F.action);else{var Q={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};N===null?(R=N=Q,v=c):N=N.next=Q,tt.lanes|=K,ys|=K}F=F.next}while(F!==null&&F!==p);N===null?v=c:N.next=R,Mn(c,s.memoizedState)||(Xt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=N,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do p=d.lane,tt.lanes|=p,ys|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function ud(r){var s=Rn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=r(p,v.action),v=v.next;while(v!==d);Mn(p,s.memoizedState)||(Xt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,c]}function Ym(){}function Jm(r,s){var a=tt,c=Rn(),d=s(),p=!Mn(c.memoizedState,d);if(p&&(c.memoizedState=d,Xt=!0),c=c.queue,cd(eg.bind(null,a,c,r),[r]),c.getSnapshot!==s||p||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,qa(9,Zm.bind(null,a,c,d,s),void 0,null),At===null)throw Error(t(349));(gs&30)!==0||Xm(a,s,d)}return d}function Xm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Zm(r,s,a,c){s.value=a,s.getSnapshot=c,tg(s)&&ng(r)}function eg(r,s,a){return a(function(){tg(s)&&ng(r)})}function tg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Mn(r,a)}catch{return!0}}function ng(r){var s=Vr(r,1);s!==null&&zn(s,r,1,-1)}function rg(r){var s=hr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:r},s.queue=r,r=r.dispatch=oT.bind(null,tt,r),[s.memoizedState,r]}function qa(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function ig(){return Rn().memoizedState}function Pu(r,s,a,c){var d=hr();tt.flags|=r,d.memoizedState=qa(1|s,a,void 0,c===void 0?null:c)}function xu(r,s,a,c){var d=Rn();c=c===void 0?null:c;var p=void 0;if(vt!==null){var v=vt.memoizedState;if(p=v.destroy,c!==null&&sd(c,v.deps)){d.memoizedState=qa(s,a,p,c);return}}tt.flags|=r,d.memoizedState=qa(1|s,a,p,c)}function sg(r,s){return Pu(8390656,8,r,s)}function cd(r,s){return xu(2048,8,r,s)}function og(r,s){return xu(4,2,r,s)}function ag(r,s){return xu(4,4,r,s)}function lg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function ug(r,s,a){return a=a!=null?a.concat([r]):null,xu(4,4,lg.bind(null,s,r),a)}function hd(){}function cg(r,s){var a=Rn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&sd(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function hg(r,s){var a=Rn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&sd(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function dg(r,s,a){return(gs&21)===0?(r.baseState&&(r.baseState=!1,Xt=!0),r.memoizedState=a):(Mn(a,s)||(a=ga(),tt.lanes|=a,ys|=a,r.baseState=!0),s)}function iT(r,s){var a=be;be=a!==0&&4>a?a:4,r(!0);var c=id.transition;id.transition={};try{r(!1),s()}finally{be=a,id.transition=c}}function fg(){return Rn().memoizedState}function sT(r,s,a){var c=Si(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},pg(r))mg(s,a);else if(a=Um(r,s,a,c),a!==null){var d=Gt();zn(a,r,c,d),gg(a,s,c)}}function oT(r,s,a){var c=Si(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(pg(r))mg(s,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var v=s.lastRenderedState,R=p(v,a);if(d.hasEagerState=!0,d.eagerState=R,Mn(R,v)){var N=s.interleaved;N===null?(d.next=d,Yh(s)):(d.next=N.next,N.next=d),s.interleaved=d;return}}catch{}finally{}a=Um(r,s,d,c),a!==null&&(d=Gt(),zn(a,r,c,d),gg(a,s,c))}}function pg(r){var s=r.alternate;return r===tt||s!==null&&s===tt}function mg(r,s){Ba=Cu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function gg(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,_a(r,a)}}var Nu={readContext:An,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},aT={readContext:An,useCallback:function(r,s){return hr().memoizedState=[r,s===void 0?null:s],r},useContext:An,useEffect:sg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Pu(4194308,4,lg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Pu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Pu(4,2,r,s)},useMemo:function(r,s){var a=hr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=hr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=sT.bind(null,tt,r),[c.memoizedState,r]},useRef:function(r){var s=hr();return r={current:r},s.memoizedState=r},useState:rg,useDebugValue:hd,useDeferredValue:function(r){return hr().memoizedState=r},useTransition:function(){var r=rg(!1),s=r[0];return r=iT.bind(null,r[1]),hr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=tt,d=hr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),At===null)throw Error(t(349));(gs&30)!==0||Xm(c,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,sg(eg.bind(null,c,p,r),[r]),c.flags|=2048,qa(9,Zm.bind(null,c,p,a,s),void 0,null),a},useId:function(){var r=hr(),s=At.identifierPrefix;if(Xe){var a=Or,c=Dr;a=(c&~(1<<32-ln(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=za++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=rT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},lT={readContext:An,useCallback:cg,useContext:An,useEffect:cd,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:ag,useMemo:hg,useReducer:ld,useRef:ig,useState:function(){return ld($a)},useDebugValue:hd,useDeferredValue:function(r){var s=Rn();return dg(s,vt.memoizedState,r)},useTransition:function(){var r=ld($a)[0],s=Rn().memoizedState;return[r,s]},useMutableSource:Ym,useSyncExternalStore:Jm,useId:fg,unstable_isNewReconciler:!1},uT={readContext:An,useCallback:cg,useContext:An,useEffect:cd,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:ag,useMemo:hg,useReducer:ud,useRef:ig,useState:function(){return ud($a)},useDebugValue:hd,useDeferredValue:function(r){var s=Rn();return vt===null?s.memoizedState=r:dg(s,vt.memoizedState,r)},useTransition:function(){var r=ud($a)[0],s=Rn().memoizedState;return[r,s]},useMutableSource:Ym,useSyncExternalStore:Jm,useId:fg,unstable_isNewReconciler:!1};function Po(r,s){try{var a="",c=s;do a+=Fe(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:s,stack:d,digest:null}}function dd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function fd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var cT=typeof WeakMap=="function"?WeakMap:Map;function yg(r,s,a){a=Lr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Uu||(Uu=!0,Cd=c),fd(r,s)},a}function _g(r,s,a){a=Lr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){fd(r,s)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){fd(r,s),typeof c!="function"&&(Ti===null?Ti=new Set([this]):Ti.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function vg(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new cT;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=ST.bind(null,r,s,a),s.then(r,r))}function wg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Eg(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Lr(-1,1),s.tag=2,wi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var hT=ye.ReactCurrentOwner,Xt=!1;function Kt(r,s,a,c){s.child=r===null?Gm(s,null,a,c):ko(s,r.child,a,c)}function Tg(r,s,a,c,d){a=a.render;var p=s.ref;return Ro(s,d),c=od(r,s,a,c,p,d),a=ad(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Mr(r,s,d)):(Xe&&a&&Bh(s),s.flags|=1,Kt(r,s,c,d),s.child)}function Ig(r,s,a,c,d){if(r===null){var p=a.type;return typeof p=="function"&&!Vd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,Sg(r,s,p,c,d)):(r=qu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(p=r.child,(r.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:xa,a(v,c)&&r.ref===s.ref)return Mr(r,s,d)}return s.flags|=1,r=Ri(p,c),r.ref=s.ref,r.return=s,s.child=r}function Sg(r,s,a,c,d){if(r!==null){var p=r.memoizedProps;if(xa(p,c)&&r.ref===s.ref)if(Xt=!1,s.pendingProps=c=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Xt=!0);else return s.lanes=r.lanes,Mr(r,s,d)}return pd(r,s,a,c,d)}function Ag(r,s,a){var c=s.pendingProps,d=c.children,p=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(No,mn),mn|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,He(No,mn),mn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(No,mn),mn|=c}else p!==null?(c=p.baseLanes|a,s.memoizedState=null):c=a,He(No,mn),mn|=c;return Kt(r,s,d,a),s.child}function Rg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function pd(r,s,a,c,d){var p=Jt(a)?hs:Mt.current;return p=Eo(s,p),Ro(s,d),a=od(r,s,a,c,p,d),c=ad(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Mr(r,s,d)):(Xe&&c&&Bh(s),s.flags|=1,Kt(r,s,a,d),s.child)}function kg(r,s,a,c,d){if(Jt(a)){var p=!0;mu(s)}else p=!1;if(Ro(s,d),s.stateNode===null)Du(r,s),qm(s,a,c),Zh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,R=s.memoizedProps;v.props=R;var N=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=An(F):(F=Jt(a)?hs:Mt.current,F=Eo(s,F));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==c||N!==F)&&Hm(s,v,c,F),vi=!1;var W=s.memoizedState;v.state=W,Iu(s,c,v,d),N=s.memoizedState,R!==c||W!==N||Yt.current||vi?(typeof K=="function"&&(Xh(s,a,K,c),N=s.memoizedState),(R=vi||$m(s,a,R,c,W,N,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=N),v.props=c,v.state=N,v.context=F,c=R):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Fm(r,s),R=s.memoizedProps,F=s.type===s.elementType?R:Fn(s.type,R),v.props=F,Q=s.pendingProps,W=v.context,N=a.contextType,typeof N=="object"&&N!==null?N=An(N):(N=Jt(a)?hs:Mt.current,N=Eo(s,N));var te=a.getDerivedStateFromProps;(K=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==Q||W!==N)&&Hm(s,v,c,N),vi=!1,W=s.memoizedState,v.state=W,Iu(s,c,v,d);var se=s.memoizedState;R!==Q||W!==se||Yt.current||vi?(typeof te=="function"&&(Xh(s,a,te,c),se=s.memoizedState),(F=vi||$m(s,a,F,c,W,se,N)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,N),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,N)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&W===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&W===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=se),v.props=c,v.state=se,v.context=N,c=F):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&W===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&W===r.memoizedState||(s.flags|=1024),c=!1)}return md(r,s,a,c,p,d)}function md(r,s,a,c,d,p){Rg(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Nm(s,a,!1),Mr(r,s,p);c=s.stateNode,hT.current=s;var R=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=ko(s,r.child,null,p),s.child=ko(s,null,R,p)):Kt(r,s,R,p),s.memoizedState=c.state,d&&Nm(s,a,!0),s.child}function Cg(r){var s=r.stateNode;s.pendingContext?Pm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Pm(r,s.context,!1),ed(r,s.containerInfo)}function Pg(r,s,a,c,d){return So(),Hh(d),s.flags|=256,Kt(r,s,a,c),s.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function yd(r){return{baseLanes:r,cachePool:null,transitions:null}}function xg(r,s,a){var c=s.pendingProps,d=et.current,p=!1,v=(s.flags&128)!==0,R;if((R=v)||(R=r!==null&&r.memoizedState===null?!1:(d&2)!==0),R?(p=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),He(et,d&1),r===null)return qh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,r=c.fallback,p?(c=s.mode,p=s.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Hu(v,c,0,null),r=Es(r,c,a,null),p.return=s,r.return=s,p.sibling=r,s.child=p,s.child.memoizedState=yd(a),s.memoizedState=gd,r):_d(s,v));if(d=r.memoizedState,d!==null&&(R=d.dehydrated,R!==null))return dT(r,s,v,c,R,d,a);if(p){p=c.fallback,v=s.mode,d=r.child,R=d.sibling;var N={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=N,s.deletions=null):(c=Ri(d,N),c.subtreeFlags=d.subtreeFlags&14680064),R!==null?p=Ri(R,p):(p=Es(p,v,a,null),p.flags|=2),p.return=s,c.return=s,c.sibling=p,s.child=c,c=p,p=s.child,v=r.child.memoizedState,v=v===null?yd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=r.childLanes&~a,s.memoizedState=gd,c}return p=r.child,r=p.sibling,c=Ri(p,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function _d(r,s){return s=Hu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function bu(r,s,a,c){return c!==null&&Hh(c),ko(s,r.child,null,a),r=_d(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function dT(r,s,a,c,d,p,v){if(a)return s.flags&256?(s.flags&=-257,c=dd(Error(t(422))),bu(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(p=c.fallback,d=s.mode,c=Hu({mode:"visible",children:c.children},d,0,null),p=Es(p,d,v,null),p.flags|=2,c.return=s,p.return=s,c.sibling=p,s.child=c,(s.mode&1)!==0&&ko(s,r.child,null,v),s.child.memoizedState=yd(v),s.memoizedState=gd,p);if((s.mode&1)===0)return bu(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var R=c.dgst;return c=R,p=Error(t(419)),c=dd(p,c,void 0),bu(r,s,v,c)}if(R=(v&r.childLanes)!==0,Xt||R){if(c=At,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Vr(r,d),zn(c,r,d,-1))}return Od(),c=dd(Error(t(421))),bu(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=AT.bind(null,r),d._reactRetry=s,null):(r=p.treeContext,pn=mi(d.nextSibling),fn=s,Xe=!0,Un=null,r!==null&&(In[Sn++]=Dr,In[Sn++]=Or,In[Sn++]=ds,Dr=r.id,Or=r.overflow,ds=s),s=_d(s,c.children),s.flags|=4096,s)}function Ng(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Qh(r.return,s,a)}function vd(r,s,a,c,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function bg(r,s,a){var c=s.pendingProps,d=c.revealOrder,p=c.tail;if(Kt(r,s,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ng(r,a,s);else if(r.tag===19)Ng(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(He(et,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Ru(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),vd(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Ru(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}vd(s,!0,a,null,p);break;case"together":vd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Du(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Mr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ys|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ri(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ri(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function fT(r,s,a){switch(s.tag){case 3:Cg(s),So();break;case 5:Qm(s);break;case 1:Jt(s.type)&&mu(s);break;case 4:ed(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;He(wu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(et,et.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?xg(r,s,a):(He(et,et.current&1),r=Mr(r,s,a),r!==null?r.sibling:null);He(et,et.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return bg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(et,et.current),c)break;return null;case 22:case 23:return s.lanes=0,Ag(r,s,a)}return Mr(r,s,a)}var Dg,wd,Og,Vg;Dg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wd=function(){},Og=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,ms(cr.current);var p=null;switch(a){case"input":d=Ws(r,d),c=Ws(r,c),p=[];break;case"select":d=x({},d,{value:void 0}),c=x({},c,{value:void 0}),p=[];break;case"textarea":d=sa(r,d),c=sa(r,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=du)}On(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var R=d[F];for(v in R)R.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var N=c[F];if(R=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&N!==R&&(N!=null||R!=null))if(F==="style")if(R){for(v in R)!R.hasOwnProperty(v)||N&&N.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in N)N.hasOwnProperty(v)&&R[v]!==N[v]&&(a||(a={}),a[v]=N[v])}else a||(p||(p=[]),p.push(F,a)),a=N;else F==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,R=R?R.__html:void 0,N!=null&&R!==N&&(p=p||[]).push(F,N)):F==="children"?typeof N!="string"&&typeof N!="number"||(p=p||[]).push(F,""+N):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(N!=null&&F==="onScroll"&&Qe("scroll",r),p||R===N||(p=[])):(p=p||[]).push(F,N))}a&&(p=p||[]).push("style",a);var F=p;(s.updateQueue=F)&&(s.flags|=4)}},Vg=function(r,s,a,c){a!==c&&(s.flags|=4)};function Ha(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function pT(r,s,a){var c=s.pendingProps;switch(zh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Jt(s.type)&&pu(),Ft(s),null;case 3:return c=s.stateNode,Co(),Ye(Yt),Ye(Mt),rd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(vu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(Nd(Un),Un=null))),wd(r,s),Ft(s),null;case 5:td(s);var d=ms(ja.current);if(a=s.type,r!==null&&s.stateNode!=null)Og(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=ms(cr.current),vu(s)){c=s.stateNode,a=s.type;var p=s.memoizedProps;switch(c[ur]=s,c[Va]=p,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<ba.length;d++)Qe(ba[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":Ml(c,p),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Qe("invalid",c);break;case"textarea":oa(c,p),Qe("invalid",c)}On(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var R=p[v];v==="children"?typeof R=="string"?c.textContent!==R&&(p.suppressHydrationWarning!==!0&&hu(c.textContent,R,r),d=["children",R]):typeof R=="number"&&c.textContent!==""+R&&(p.suppressHydrationWarning!==!0&&hu(c.textContent,R,r),d=["children",""+R]):o.hasOwnProperty(v)&&R!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":Hs(c),ia(c,p,!0);break;case"textarea":Hs(c),Zr(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=du)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=aa(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[ur]=s,r[Va]=c,Dg(r,s,!1,!1),s.stateNode=r;e:{switch(v=Ys(a,c),a){case"dialog":Qe("cancel",r),Qe("close",r),d=c;break;case"iframe":case"object":case"embed":Qe("load",r),d=c;break;case"video":case"audio":for(d=0;d<ba.length;d++)Qe(ba[d],r);d=c;break;case"source":Qe("error",r),d=c;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),d=c;break;case"details":Qe("toggle",r),d=c;break;case"input":Ml(r,c),d=Ws(r,c),Qe("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=x({},c,{value:void 0}),Qe("invalid",r);break;case"textarea":oa(r,c),d=sa(r,c),Qe("invalid",r);break;default:d=c}On(a,d),R=d;for(p in R)if(R.hasOwnProperty(p)){var N=R[p];p==="style"?Qs(r,N):p==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Fl(r,N)):p==="children"?typeof N=="string"?(a!=="textarea"||N!=="")&&Yi(r,N):typeof N=="number"&&Yi(r,""+N):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?N!=null&&p==="onScroll"&&Qe("scroll",r):N!=null&&pe(r,p,N,v))}switch(a){case"input":Hs(r),ia(r,c,!1);break;case"textarea":Hs(r),Zr(r);break;case"option":c.value!=null&&r.setAttribute("value",""+De(c.value));break;case"select":r.multiple=!!c.multiple,p=c.value,p!=null?Dn(r,!!c.multiple,p,!1):c.defaultValue!=null&&Dn(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=du)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)Vg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ms(ja.current),ms(cr.current),vu(s)){if(c=s.stateNode,a=s.memoizedProps,c[ur]=s,(p=c.nodeValue!==a)&&(r=fn,r!==null))switch(r.tag){case 3:hu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&hu(c.nodeValue,a,(r.mode&1)!==0)}p&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ur]=s,s.stateNode=c}return Ft(s),null;case 13:if(Ye(et),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&pn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Mm(),So(),s.flags|=98560,p=!1;else if(p=vu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[ur]=s}else So(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),p=!1}else Un!==null&&(Nd(Un),Un=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(et.current&1)!==0?wt===0&&(wt=3):Od())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return Co(),wd(r,s),r===null&&Da(s.stateNode.containerInfo),Ft(s),null;case 10:return Gh(s.type._context),Ft(s),null;case 17:return Jt(s.type)&&pu(),Ft(s),null;case 19:if(Ye(et),p=s.memoizedState,p===null)return Ft(s),null;if(c=(s.flags&128)!==0,v=p.rendering,v===null)if(c)Ha(p,!1);else{if(wt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=Ru(r),v!==null){for(s.flags|=128,Ha(p,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)p=a,r=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,r=v.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return He(et,et.current&1|2),s.child}r=r.sibling}p.tail!==null&&Ge()>bo&&(s.flags|=128,c=!0,Ha(p,!1),s.lanes=4194304)}else{if(!c)if(r=Ru(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ha(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Xe)return Ft(s),null}else 2*Ge()-p.renderingStartTime>bo&&a!==1073741824&&(s.flags|=128,c=!0,Ha(p,!1),s.lanes=4194304);p.isBackwards?(v.sibling=s.child,s.child=v):(a=p.last,a!==null?a.sibling=v:s.child=v,p.last=v)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ge(),s.sibling=null,a=et.current,He(et,c?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return Dd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(mn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function mT(r,s){switch(zh(s),s.tag){case 1:return Jt(s.type)&&pu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Co(),Ye(Yt),Ye(Mt),rd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return td(s),null;case 13:if(Ye(et),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));So()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(et),null;case 4:return Co(),null;case 10:return Gh(s.type._context),null;case 22:case 23:return Dd(),null;case 24:return null;default:return null}}var Ou=!1,jt=!1,gT=typeof WeakSet=="function"?WeakSet:Set,ie=null;function xo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(r,s,c)}else a.current=null}function Ed(r,s,a){try{a()}catch(c){st(r,s,c)}}var Lg=!1;function yT(r,s){if(Dh=Cr,r=fm(),Ah(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,R=-1,N=-1,F=0,K=0,Q=r,W=null;t:for(;;){for(var te;Q!==a||d!==0&&Q.nodeType!==3||(R=v+d),Q!==p||c!==0&&Q.nodeType!==3||(N=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(te=Q.firstChild)!==null;)W=Q,Q=te;for(;;){if(Q===r)break t;if(W===a&&++F===d&&(R=v),W===p&&++K===c&&(N=v),(te=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=te}a=R===-1||N===-1?null:{start:R,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Oh={focusedElem:r,selectionRange:a},Cr=!1,ie=s;ie!==null;)if(s=ie,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ie=r;else for(;ie!==null;){s=ie;try{var se=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,ht=se.memoizedState,L=s.stateNode,V=L.getSnapshotBeforeUpdate(s.elementType===s.type?oe:Fn(s.type,oe),ht);L.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){st(s,s.return,X)}if(r=s.sibling,r!==null){r.return=s.return,ie=r;break}ie=s.return}return se=Lg,Lg=!1,se}function Wa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ed(s,a,p)}d=d.next}while(d!==c)}}function Vu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Td(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Mg(r){var s=r.alternate;s!==null&&(r.alternate=null,Mg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[ur],delete s[Va],delete s[Uh],delete s[Z0],delete s[eT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ug(r){return r.tag===5||r.tag===3||r.tag===4}function Fg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ug(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Id(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=du));else if(c!==4&&(r=r.child,r!==null))for(Id(r,s,a),r=r.sibling;r!==null;)Id(r,s,a),r=r.sibling}function Sd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Sd(r,s,a),r=r.sibling;r!==null;)Sd(r,s,a),r=r.sibling}var Nt=null,jn=!1;function Ei(r,s,a){for(a=a.child;a!==null;)jg(r,s,a),a=a.sibling}function jg(r,s,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(ts,a)}catch{}switch(a.tag){case 5:jt||xo(a,s);case 6:var c=Nt,d=jn;Nt=null,Ei(r,s,a),Nt=c,jn=d,Nt!==null&&(jn?(r=Nt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Nt.removeChild(a.stateNode));break;case 18:Nt!==null&&(jn?(r=Nt,a=a.stateNode,r.nodeType===8?Mh(r.parentNode,a):r.nodeType===1&&Mh(r,a),hi(r)):Mh(Nt,a.stateNode));break;case 4:c=Nt,d=jn,Nt=a.stateNode.containerInfo,jn=!0,Ei(r,s,a),Nt=c,jn=d;break;case 0:case 11:case 14:case 15:if(!jt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Ed(a,s,v),d=d.next}while(d!==c)}Ei(r,s,a);break;case 1:if(!jt&&(xo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(R){st(a,s,R)}Ei(r,s,a);break;case 21:Ei(r,s,a);break;case 22:a.mode&1?(jt=(c=jt)||a.memoizedState!==null,Ei(r,s,a),jt=c):Ei(r,s,a);break;default:Ei(r,s,a)}}function Bg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new gT),s.forEach(function(c){var d=RT.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Bn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=r,v=s,R=v;e:for(;R!==null;){switch(R.tag){case 5:Nt=R.stateNode,jn=!1;break e;case 3:Nt=R.stateNode.containerInfo,jn=!0;break e;case 4:Nt=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(Nt===null)throw Error(t(160));jg(p,v,d),Nt=null,jn=!1;var N=d.alternate;N!==null&&(N.return=null),d.return=null}catch(F){st(d,s,F)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)zg(s,r),s=s.sibling}function zg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Bn(s,r),dr(r),c&4){try{Wa(3,r,r.return),Vu(3,r)}catch(oe){st(r,r.return,oe)}try{Wa(5,r,r.return)}catch(oe){st(r,r.return,oe)}}break;case 1:Bn(s,r),dr(r),c&512&&a!==null&&xo(a,a.return);break;case 5:if(Bn(s,r),dr(r),c&512&&a!==null&&xo(a,a.return),r.flags&32){var d=r.stateNode;try{Yi(d,"")}catch(oe){st(r,r.return,oe)}}if(c&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,v=a!==null?a.memoizedProps:p,R=r.type,N=r.updateQueue;if(r.updateQueue=null,N!==null)try{R==="input"&&p.type==="radio"&&p.name!=null&&Ks(d,p),Ys(R,v);var F=Ys(R,p);for(v=0;v<N.length;v+=2){var K=N[v],Q=N[v+1];K==="style"?Qs(d,Q):K==="dangerouslySetInnerHTML"?Fl(d,Q):K==="children"?Yi(d,Q):pe(d,K,Q,F)}switch(R){case"input":Qi(d,p);break;case"textarea":Ul(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?Dn(d,!!p.multiple,te,!1):W!==!!p.multiple&&(p.defaultValue!=null?Dn(d,!!p.multiple,p.defaultValue,!0):Dn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Va]=p}catch(oe){st(r,r.return,oe)}}break;case 6:if(Bn(s,r),dr(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(oe){st(r,r.return,oe)}}break;case 3:if(Bn(s,r),dr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{hi(s.containerInfo)}catch(oe){st(r,r.return,oe)}break;case 4:Bn(s,r),dr(r);break;case 13:Bn(s,r),dr(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(kd=Ge())),c&4&&Bg(r);break;case 22:if(K=a!==null&&a.memoizedState!==null,r.mode&1?(jt=(F=jt)||K,Bn(s,r),jt=F):Bn(s,r),dr(r),c&8192){if(F=r.memoizedState!==null,(r.stateNode.isHidden=F)&&!K&&(r.mode&1)!==0)for(ie=r,K=r.child;K!==null;){for(Q=ie=K;ie!==null;){switch(W=ie,te=W.child,W.tag){case 0:case 11:case 14:case 15:Wa(4,W,W.return);break;case 1:xo(W,W.return);var se=W.stateNode;if(typeof se.componentWillUnmount=="function"){c=W,a=W.return;try{s=c,se.props=s.memoizedProps,se.state=s.memoizedState,se.componentWillUnmount()}catch(oe){st(c,a,oe)}}break;case 5:xo(W,W.return);break;case 22:if(W.memoizedState!==null){Hg(Q);continue}}te!==null?(te.return=W,ie=te):Hg(Q)}K=K.sibling}e:for(K=null,Q=r;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(R=Q.stateNode,N=Q.memoizedProps.style,v=N!=null&&N.hasOwnProperty("display")?N.display:null,R.style.display=ni("display",v))}catch(oe){st(r,r.return,oe)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(oe){st(r,r.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===r)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===r)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===r)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Bn(s,r),dr(r),c&4&&Bg(r);break;case 21:break;default:Bn(s,r),dr(r)}}function dr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Ug(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Yi(d,""),c.flags&=-33);var p=Fg(r);Sd(r,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,R=Fg(r);Id(r,R,v);break;default:throw Error(t(161))}}catch(N){st(r,r.return,N)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function _T(r,s,a){ie=r,$g(r)}function $g(r,s,a){for(var c=(r.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Ou;if(!v){var R=d.alternate,N=R!==null&&R.memoizedState!==null||jt;R=Ou;var F=jt;if(Ou=v,(jt=N)&&!F)for(ie=d;ie!==null;)v=ie,N=v.child,v.tag===22&&v.memoizedState!==null?Wg(d):N!==null?(N.return=v,ie=N):Wg(d);for(;p!==null;)ie=p,$g(p),p=p.sibling;ie=d,Ou=R,jt=F}qg(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):qg(r)}}function qg(r){for(;ie!==null;){var s=ie;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jt||Vu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!jt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&Bm(s,p,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Bm(s,v,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var N=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&a.focus();break;case"img":N.src&&(a.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var F=s.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&hi(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&Td(s)}catch(W){st(s,s.return,W)}}if(s===r){ie=null;break}if(a=s.sibling,a!==null){a.return=s.return,ie=a;break}ie=s.return}}function Hg(r){for(;ie!==null;){var s=ie;if(s===r){ie=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ie=a;break}ie=s.return}}function Wg(r){for(;ie!==null;){var s=ie;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Vu(4,s)}catch(N){st(s,a,N)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(N){st(s,d,N)}}var p=s.return;try{Td(s)}catch(N){st(s,p,N)}break;case 5:var v=s.return;try{Td(s)}catch(N){st(s,v,N)}}}catch(N){st(s,s.return,N)}if(s===r){ie=null;break}var R=s.sibling;if(R!==null){R.return=s.return,ie=R;break}ie=s.return}}var vT=Math.ceil,Lu=ye.ReactCurrentDispatcher,Ad=ye.ReactCurrentOwner,kn=ye.ReactCurrentBatchConfig,Ve=0,At=null,mt=null,bt=0,mn=0,No=gi(0),wt=0,Ka=null,ys=0,Mu=0,Rd=0,Ga=null,Zt=null,kd=0,bo=1/0,Ur=null,Uu=!1,Cd=null,Ti=null,Fu=!1,Ii=null,ju=0,Qa=0,Pd=null,Bu=-1,zu=0;function Gt(){return(Ve&6)!==0?Ge():Bu!==-1?Bu:Bu=Ge()}function Si(r){return(r.mode&1)===0?1:(Ve&2)!==0&&bt!==0?bt&-bt:nT.transition!==null?(zu===0&&(zu=ga()),zu):(r=be,r!==0||(r=window.event,r=r===void 0?16:oo(r.type)),r)}function zn(r,s,a,c){if(50<Qa)throw Qa=0,Pd=null,Error(t(185));ss(r,a,c),((Ve&2)===0||r!==At)&&(r===At&&((Ve&2)===0&&(Mu|=a),wt===4&&Ai(r,bt)),en(r,c),a===1&&Ve===0&&(s.mode&1)===0&&(bo=Ge()+500,gu&&_i()))}function en(r,s){var a=r.callbackNode;is(r,s);var c=Ar(r,r===At?bt:0);if(c===0)a!==null&&Zs(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&Zs(a),s===1)r.tag===0?tT(Gg.bind(null,r)):bm(Gg.bind(null,r)),J0(function(){(Ve&6)===0&&_i()}),a=null;else{switch(Zn(c)){case 1:a=eo;break;case 4:a=fa;break;case 16:a=es;break;case 536870912:a=to;break;default:a=es}a=ny(a,Kg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Kg(r,s){if(Bu=-1,zu=0,(Ve&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Do()&&r.callbackNode!==a)return null;var c=Ar(r,r===At?bt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=$u(r,c);else{s=c;var d=Ve;Ve|=2;var p=Yg();(At!==r||bt!==s)&&(Ur=null,bo=Ge()+500,vs(r,s));do try{TT();break}catch(R){Qg(r,R)}while(!0);Kh(),Lu.current=p,Ve=d,mt!==null?s=0:(At=null,bt=0,s=wt)}if(s!==0){if(s===2&&(d=ma(r),d!==0&&(c=d,s=xd(r,d))),s===1)throw a=Ka,vs(r,0),Ai(r,c),en(r,Ge()),a;if(s===6)Ai(r,c);else{if(d=r.current.alternate,(c&30)===0&&!wT(d)&&(s=$u(r,c),s===2&&(p=ma(r),p!==0&&(c=p,s=xd(r,p))),s===1))throw a=Ka,vs(r,0),Ai(r,c),en(r,Ge()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ws(r,Zt,Ur);break;case 3:if(Ai(r,c),(c&130023424)===c&&(s=kd+500-Ge(),10<s)){if(Ar(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Gt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Lh(ws.bind(null,r,Zt,Ur),s);break}ws(r,Zt,Ur);break;case 4:if(Ai(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-ln(c);p=1<<v,v=s[v],v>d&&(d=v),c&=~p}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*vT(c/1960))-c,10<c){r.timeoutHandle=Lh(ws.bind(null,r,Zt,Ur),c);break}ws(r,Zt,Ur);break;case 5:ws(r,Zt,Ur);break;default:throw Error(t(329))}}}return en(r,Ge()),r.callbackNode===a?Kg.bind(null,r):null}function xd(r,s){var a=Ga;return r.current.memoizedState.isDehydrated&&(vs(r,s).flags|=256),r=$u(r,s),r!==2&&(s=Zt,Zt=a,s!==null&&Nd(s)),r}function Nd(r){Zt===null?Zt=r:Zt.push.apply(Zt,r)}function wT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Mn(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ai(r,s){for(s&=~Rd,s&=~Mu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-ln(s),c=1<<a;r[a]=-1,s&=~c}}function Gg(r){if((Ve&6)!==0)throw Error(t(327));Do();var s=Ar(r,0);if((s&1)===0)return en(r,Ge()),null;var a=$u(r,s);if(r.tag!==0&&a===2){var c=ma(r);c!==0&&(s=c,a=xd(r,c))}if(a===1)throw a=Ka,vs(r,0),Ai(r,s),en(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ws(r,Zt,Ur),en(r,Ge()),null}function bd(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(bo=Ge()+500,gu&&_i())}}function _s(r){Ii!==null&&Ii.tag===0&&(Ve&6)===0&&Do();var s=Ve;Ve|=1;var a=kn.transition,c=be;try{if(kn.transition=null,be=1,r)return r()}finally{be=c,kn.transition=a,Ve=s,(Ve&6)===0&&_i()}}function Dd(){mn=No.current,Ye(No)}function vs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Y0(a)),mt!==null)for(a=mt.return;a!==null;){var c=a;switch(zh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&pu();break;case 3:Co(),Ye(Yt),Ye(Mt),rd();break;case 5:td(c);break;case 4:Co();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:Gh(c.type._context);break;case 22:case 23:Dd()}a=a.return}if(At=r,mt=r=Ri(r.current,null),bt=mn=s,wt=0,Ka=null,Rd=Mu=ys=0,Zt=Ga=null,ps!==null){for(s=0;s<ps.length;s++)if(a=ps[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}ps=null}return r}function Qg(r,s){do{var a=mt;try{if(Kh(),ku.current=Nu,Cu){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Cu=!1}if(gs=0,St=vt=tt=null,Ba=!1,za=0,Ad.current=null,a===null||a.return===null){wt=1,Ka=s,mt=null;break}e:{var p=r,v=a.return,R=a,N=s;if(s=bt,R.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var F=N,K=R,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var W=K.alternate;W?(K.updateQueue=W.updateQueue,K.memoizedState=W.memoizedState,K.lanes=W.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=wg(v);if(te!==null){te.flags&=-257,Eg(te,v,R,p,s),te.mode&1&&vg(p,F,s),s=te,N=F;var se=s.updateQueue;if(se===null){var oe=new Set;oe.add(N),s.updateQueue=oe}else se.add(N);break e}else{if((s&1)===0){vg(p,F,s),Od();break e}N=Error(t(426))}}else if(Xe&&R.mode&1){var ht=wg(v);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),Eg(ht,v,R,p,s),Hh(Po(N,R));break e}}p=N=Po(N,R),wt!==4&&(wt=2),Ga===null?Ga=[p]:Ga.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var L=yg(p,N,s);jm(p,L);break e;case 1:R=N;var V=p.type,U=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(Ti===null||!Ti.has(U)))){p.flags|=65536,s&=-s,p.lanes|=s;var X=_g(p,R,s);jm(p,X);break e}}p=p.return}while(p!==null)}Xg(a)}catch(ae){s=ae,mt===a&&a!==null&&(mt=a=a.return);continue}break}while(!0)}function Yg(){var r=Lu.current;return Lu.current=Nu,r===null?Nu:r}function Od(){(wt===0||wt===3||wt===2)&&(wt=4),At===null||(ys&268435455)===0&&(Mu&268435455)===0||Ai(At,bt)}function $u(r,s){var a=Ve;Ve|=2;var c=Yg();(At!==r||bt!==s)&&(Ur=null,vs(r,s));do try{ET();break}catch(d){Qg(r,d)}while(!0);if(Kh(),Ve=a,Lu.current=c,mt!==null)throw Error(t(261));return At=null,bt=0,wt}function ET(){for(;mt!==null;)Jg(mt)}function TT(){for(;mt!==null&&!Zi();)Jg(mt)}function Jg(r){var s=ty(r.alternate,r,mn);r.memoizedProps=r.pendingProps,s===null?Xg(r):mt=s,Ad.current=null}function Xg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=pT(a,s,mn),a!==null){mt=a;return}}else{if(a=mT(a,s),a!==null){a.flags&=32767,mt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{wt=6,mt=null;return}}if(s=s.sibling,s!==null){mt=s;return}mt=s=r}while(s!==null);wt===0&&(wt=5)}function ws(r,s,a){var c=be,d=kn.transition;try{kn.transition=null,be=1,IT(r,s,a,c)}finally{kn.transition=d,be=c}return null}function IT(r,s,a,c){do Do();while(Ii!==null);if((Ve&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(wh(r,p),r===At&&(mt=At=null,bt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fu||(Fu=!0,ny(es,function(){return Do(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=kn.transition,kn.transition=null;var v=be;be=1;var R=Ve;Ve|=4,Ad.current=null,yT(r,a),zg(a,r),$0(Oh),Cr=!!Dh,Oh=Dh=null,r.current=a,_T(a),Sr(),Ve=R,be=v,kn.transition=p}else r.current=a;if(Fu&&(Fu=!1,Ii=r,ju=d),p=r.pendingLanes,p===0&&(Ti=null),Yl(a.stateNode),en(r,Ge()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Uu)throw Uu=!1,r=Cd,Cd=null,r;return(ju&1)!==0&&r.tag!==0&&Do(),p=r.pendingLanes,(p&1)!==0?r===Pd?Qa++:(Qa=0,Pd=r):Qa=0,_i(),null}function Do(){if(Ii!==null){var r=Zn(ju),s=kn.transition,a=be;try{if(kn.transition=null,be=16>r?16:r,Ii===null)var c=!1;else{if(r=Ii,Ii=null,ju=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ie=r.current;ie!==null;){var p=ie,v=p.child;if((ie.flags&16)!==0){var R=p.deletions;if(R!==null){for(var N=0;N<R.length;N++){var F=R[N];for(ie=F;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:Wa(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,ie=Q;else for(;ie!==null;){K=ie;var W=K.sibling,te=K.return;if(Mg(K),K===F){ie=null;break}if(W!==null){W.return=te,ie=W;break}ie=te}}}var se=p.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var ht=oe.sibling;oe.sibling=null,oe=ht}while(oe!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,ie=v;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Wa(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,ie=L;break e}ie=p.return}}var V=r.current;for(ie=V;ie!==null;){v=ie;var U=v.child;if((v.subtreeFlags&2064)!==0&&U!==null)U.return=v,ie=U;else e:for(v=V;ie!==null;){if(R=ie,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:Vu(9,R)}}catch(ae){st(R,R.return,ae)}if(R===v){ie=null;break e}var X=R.sibling;if(X!==null){X.return=R.return,ie=X;break e}ie=R.return}}if(Ve=d,_i(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(ts,r)}catch{}c=!0}return c}finally{be=a,kn.transition=s}}return!1}function Zg(r,s,a){s=Po(a,s),s=yg(r,s,1),r=wi(r,s,1),s=Gt(),r!==null&&(ss(r,1,s),en(r,s))}function st(r,s,a){if(r.tag===3)Zg(r,r,a);else for(;s!==null;){if(s.tag===3){Zg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ti===null||!Ti.has(c))){r=Po(a,r),r=_g(s,r,1),s=wi(s,r,1),r=Gt(),s!==null&&(ss(s,1,r),en(s,r));break}}s=s.return}}function ST(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Gt(),r.pingedLanes|=r.suspendedLanes&a,At===r&&(bt&a)===a&&(wt===4||wt===3&&(bt&130023424)===bt&&500>Ge()-kd?vs(r,0):Rd|=a),en(r,s)}function ey(r,s){s===0&&((r.mode&1)===0?s=1:(s=li,li<<=1,(li&130023424)===0&&(li=4194304)));var a=Gt();r=Vr(r,s),r!==null&&(ss(r,s,a),en(r,a))}function AT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),ey(r,a)}function RT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),ey(r,a)}var ty;ty=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Yt.current)Xt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Xt=!1,fT(r,s,a);Xt=(r.flags&131072)!==0}else Xt=!1,Xe&&(s.flags&1048576)!==0&&Dm(s,_u,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Du(r,s),r=s.pendingProps;var d=Eo(s,Mt.current);Ro(s,a),d=od(null,s,c,r,d,a);var p=ad();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(c)?(p=!0,mu(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Jh(s),d.updater=Su,s.stateNode=d,d._reactInternals=s,Zh(s,c,r,a),s=md(null,s,c,!0,p,a)):(s.tag=0,Xe&&p&&Bh(s),Kt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Du(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=CT(c),r=Fn(c,r),d){case 0:s=pd(null,s,c,r,a);break e;case 1:s=kg(null,s,c,r,a);break e;case 11:s=Tg(null,s,c,r,a);break e;case 14:s=Ig(null,s,c,Fn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),pd(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),kg(r,s,c,d,a);case 3:e:{if(Cg(s),r===null)throw Error(t(387));c=s.pendingProps,p=s.memoizedState,d=p.element,Fm(r,s),Iu(s,c,null,a);var v=s.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=Po(Error(t(423)),s),s=Pg(r,s,c,a,d);break e}else if(c!==d){d=Po(Error(t(424)),s),s=Pg(r,s,c,a,d);break e}else for(pn=mi(s.stateNode.containerInfo.firstChild),fn=s,Xe=!0,Un=null,a=Gm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(So(),c===d){s=Mr(r,s,a);break e}Kt(r,s,c,a)}s=s.child}return s;case 5:return Qm(s),r===null&&qh(s),c=s.type,d=s.pendingProps,p=r!==null?r.memoizedProps:null,v=d.children,Vh(c,d)?v=null:p!==null&&Vh(c,p)&&(s.flags|=32),Rg(r,s),Kt(r,s,v,a),s.child;case 6:return r===null&&qh(s),null;case 13:return xg(r,s,a);case 4:return ed(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ko(s,null,c,a):Kt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Tg(r,s,c,d,a);case 7:return Kt(r,s,s.pendingProps,a),s.child;case 8:return Kt(r,s,s.pendingProps.children,a),s.child;case 12:return Kt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,p=s.memoizedProps,v=d.value,He(wu,c._currentValue),c._currentValue=v,p!==null)if(Mn(p.value,v)){if(p.children===d.children&&!Yt.current){s=Mr(r,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var R=p.dependencies;if(R!==null){v=p.child;for(var N=R.firstContext;N!==null;){if(N.context===c){if(p.tag===1){N=Lr(-1,a&-a),N.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?N.next=N:(N.next=K.next,K.next=N),F.pending=N}}p.lanes|=a,N=p.alternate,N!==null&&(N.lanes|=a),Qh(p.return,a,s),R.lanes|=a;break}N=N.next}}else if(p.tag===10)v=p.type===s.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,R=v.alternate,R!==null&&(R.lanes|=a),Qh(v,a,s),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===s){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Kt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,Ro(s,a),d=An(d),c=c(d),s.flags|=1,Kt(r,s,c,a),s.child;case 14:return c=s.type,d=Fn(c,s.pendingProps),d=Fn(c.type,d),Ig(r,s,c,d,a);case 15:return Sg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Du(r,s),s.tag=1,Jt(c)?(r=!0,mu(s)):r=!1,Ro(s,a),qm(s,c,d),Zh(s,c,d,a),md(null,s,c,!0,r,a);case 19:return bg(r,s,a);case 22:return Ag(r,s,a)}throw Error(t(156,s.tag))};function ny(r,s){return da(r,s)}function kT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(r,s,a,c){return new kT(r,s,a,c)}function Vd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function CT(r){if(typeof r=="function")return Vd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===D)return 11;if(r===rt)return 14}return 2}function Ri(r,s){var a=r.alternate;return a===null?(a=Cn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function qu(r,s,a,c,d,p){var v=2;if(c=r,typeof r=="function")Vd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case O:return Es(a.children,d,p,s);case k:v=8,d|=8;break;case T:return r=Cn(12,a,s,d|2),r.elementType=T,r.lanes=p,r;case I:return r=Cn(13,a,s,d),r.elementType=I,r.lanes=p,r;case Se:return r=Cn(19,a,s,d),r.elementType=Se,r.lanes=p,r;case ze:return Hu(a,d,p,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:v=10;break e;case S:v=9;break e;case D:v=11;break e;case rt:v=14;break e;case It:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Cn(v,a,s,d),s.elementType=r,s.type=c,s.lanes=p,s}function Es(r,s,a,c){return r=Cn(7,r,c,s),r.lanes=a,r}function Hu(r,s,a,c){return r=Cn(22,r,c,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function Ld(r,s,a){return r=Cn(6,r,null,s),r.lanes=a,r}function Md(r,s,a){return s=Cn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function PT(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ud(r,s,a,c,d,p,v,R,N){return r=new PT(r,s,a,R,N),s===1?(s=1,p===!0&&(s|=8)):s=0,p=Cn(3,null,null,s),r.current=p,p.stateNode=r,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jh(p),r}function xT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function ry(r){if(!r)return yi;r=r._reactInternals;e:{if(Vn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return xm(r,a,s)}return s}function iy(r,s,a,c,d,p,v,R,N){return r=Ud(a,c,!0,r,d,p,v,R,N),r.context=ry(null),a=r.current,c=Gt(),d=Si(a),p=Lr(c,d),p.callback=s??null,wi(a,p,d),r.current.lanes=d,ss(r,d,c),en(r,c),r}function Wu(r,s,a,c){var d=s.current,p=Gt(),v=Si(d);return a=ry(a),s.context===null?s.context=a:s.pendingContext=a,s=Lr(p,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=wi(d,s,v),r!==null&&(zn(r,d,v,p),Tu(r,d,v)),v}function Ku(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function sy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Fd(r,s){sy(r,s),(r=r.alternate)&&sy(r,s)}function NT(){return null}var oy=typeof reportError=="function"?reportError:function(r){console.error(r)};function jd(r){this._internalRoot=r}Gu.prototype.render=jd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Wu(r,s,null,null)},Gu.prototype.unmount=jd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;_s(function(){Wu(null,r,null,null)}),s[Nr]=null}};function Gu(r){this._internalRoot=r}Gu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ea();r={blockedOn:null,target:r,priority:s};for(var a=0;a<un.length&&s!==0&&s<un[a].priority;a++);un.splice(a,0,r),a===0&&io(r)}};function Bd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Qu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ay(){}function bT(r,s,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Ku(v);p.call(F)}}var v=iy(s,c,r,0,null,!1,!1,"",ay);return r._reactRootContainer=v,r[Nr]=v.current,Da(r.nodeType===8?r.parentNode:r),_s(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var R=c;c=function(){var F=Ku(N);R.call(F)}}var N=Ud(r,0,!1,null,null,!1,!1,"",ay);return r._reactRootContainer=N,r[Nr]=N.current,Da(r.nodeType===8?r.parentNode:r),_s(function(){Wu(s,N,a,c)}),N}function Yu(r,s,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var R=d;d=function(){var N=Ku(v);R.call(N)}}Wu(s,v,r,d)}else v=bT(a,s,r,d,c);return Ku(v)}va=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Ue(s.pendingLanes);a!==0&&(_a(s,a|1),en(s,Ge()),(Ve&6)===0&&(bo=Ge()+500,_i()))}break;case 13:_s(function(){var c=Vr(r,1);if(c!==null){var d=Gt();zn(c,r,1,d)}}),Fd(r,1)}},no=function(r){if(r.tag===13){var s=Vr(r,134217728);if(s!==null){var a=Gt();zn(s,r,134217728,a)}Fd(r,134217728)}},wa=function(r){if(r.tag===13){var s=Si(r),a=Vr(r,s);if(a!==null){var c=Gt();zn(a,r,s,c)}Fd(r,s)}},Ea=function(){return be},Ta=function(r,s){var a=be;try{return be=r,s()}finally{be=a}},Er=function(r,s,a){switch(s){case"input":if(Qi(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=fu(c);if(!d)throw Error(t(90));ra(c),Qi(c,d)}}}break;case"textarea":Ul(r,a);break;case"select":s=a.value,s!=null&&Dn(r,!!a.multiple,s,!1)}},Bl=bd,zl=_s;var DT={usingClientEntryPoint:!1,Events:[La,vo,fu,ii,si,bd]},Ya={findFiberByHostInstance:cs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},OT={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ql(r),r===null?null:r.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||NT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ju.isDisabled&&Ju.supportsFiber)try{ts=Ju.inject(OT),an=Ju}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DT,tn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bd(s))throw Error(t(200));return xT(r,s,null,a)},tn.createRoot=function(r,s){if(!Bd(r))throw Error(t(299));var a=!1,c="",d=oy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Ud(r,1,!1,null,null,a,!1,c,d),r[Nr]=s.current,Da(r.nodeType===8?r.parentNode:r),new jd(s)},tn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ql(s),r=r===null?null:r.stateNode,r},tn.flushSync=function(r){return _s(r)},tn.hydrate=function(r,s,a){if(!Qu(s))throw Error(t(200));return Yu(null,r,s,!0,a)},tn.hydrateRoot=function(r,s,a){if(!Bd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=oy;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=iy(s,null,r,1,a??null,d,!1,p,v),r[Nr]=s.current,Da(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Gu(s)},tn.render=function(r,s,a){if(!Qu(s))throw Error(t(200));return Yu(null,r,s,!1,a)},tn.unmountComponentAtNode=function(r){if(!Qu(r))throw Error(t(40));return r._reactRootContainer?(_s(function(){Yu(null,null,r,!1,function(){r._reactRootContainer=null,r[Nr]=null})}),!0):!1},tn.unstable_batchedUpdates=bd,tn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Qu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Yu(r,s,a,!1,c)},tn.version="18.2.0-next-9e3b772b8-20220608",tn}var my;function zT(){if(my)return qd.exports;my=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),qd.exports=BT(),qd.exports}var gy;function $T(){if(gy)return Xu;gy=1;var n=zT();return Xu.createRoot=n.createRoot,Xu.hydrateRoot=n.hydrateRoot,Xu}var qT=$T();const HT=cv(qT),WT="modulepreload",KT=function(n){return"/"+n},yy={},zf=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let h=function(y){return Promise.all(y.map(w=>Promise.resolve(w).then(A=>({status:"fulfilled",value:A}),A=>({status:"rejected",reason:A}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=h(t.map(y=>{if(y=KT(y),y in yy)return;yy[y]=!0;const w=y.endsWith(".css"),A=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${A}`))return;const b=document.createElement("link");if(b.rel=w?"stylesheet":WT,w||(b.as="script"),b.crossOrigin="",b.href=y,g&&b.setAttribute("nonce",g),document.head.appendChild(b),w)return new Promise((B,G)=>{b.addEventListener("load",B),b.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${y}`)))})}))}function l(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return o.then(h=>{for(const f of h||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};var Fo=(n=>(n.ADMIN="ADMIN",n.MEMBER="MEMBER",n.PENDING="PENDING",n))(Fo||{});const GT=n=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.598m-1.5-6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"})}),QT=({className:n="w-6 h-6"})=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:n,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"})}),YT=({onLoginClick:n})=>{const{currentUser:e,logout:t}=C0();return C.jsx("header",{className:"sticky top-0 z-40 glass-nav transition-colors duration-300",children:C.jsx("div",{className:"container mx-auto px-4 py-4 sm:px-6 lg:px-8",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{className:"flex items-center space-x-4 group cursor-pointer",children:[C.jsx(GT,{className:"h-10 w-10 text-orange-600 animate-fade-in group-hover:scale-110 transition-transform"}),C.jsxs("h1",{className:"text-2xl md:text-3xl font-display font-black text-orange-950 tracking-tighter uppercase",children:["Union Connect ",C.jsx("span",{className:"text-orange-600",children:"Hub"})]})]}),C.jsx("div",{className:"flex items-center space-x-2 md:space-x-4 animate-fade-in",children:e?C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"hidden sm:flex flex-col items-end",children:[C.jsxs("span",{className:"text-sm text-orange-950/70 leading-tight",children:["Welcome, ",C.jsx("span",{className:"font-bold text-orange-950",children:e.employeeName})]}),C.jsx("span",{className:`text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full mt-0.5 ${e.role===Fo.ADMIN?"bg-orange-600 text-white shadow-lg shadow-orange-200":"bg-orange-100 text-orange-700 border border-orange-200"}`,children:e.role})]}),C.jsx("button",{onClick:t,className:"px-4 py-2 text-sm font-semibold text-white bg-orange-600 border border-transparent rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all hover:-translate-y-0.5",children:"Logout"})]}):C.jsxs("button",{onClick:()=>n==null?void 0:n(),className:"flex items-center gap-2 px-4 py-2 text-sm font-black text-orange-700 bg-white border border-orange-200 rounded-xl shadow-sm hover:bg-orange-50 hover:border-orange-300 transition-all hover:-translate-y-0.5 active:scale-95 uppercase tracking-wider",children:[C.jsx(QT,{className:"w-5 h-5"}),C.jsx("span",{className:"hidden sm:inline",children:"Member Login"}),C.jsx("span",{className:"sm:hidden",children:"Login"})]})})]})})})},JT=n=>C.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:[C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 100 12h-3a7.5 7.5 0 00-7.5-7.5h1.5v-1.5a7.5 7.5 0 007.5-7.5h3z"}),C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-1.875a1.125 1.125 0 01-1.125-1.125v-1.5a1.125 1.125 0 011.125-1.125h1.875m.75 4.5l.375-.375a1.875 1.875 0 000-2.65l-3.375-3.375a1.875 1.875 0 00-2.65 0l-.375.375m.75 4.5l-4.5-4.5"})]}),XT=({className:n="w-6 h-6"})=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:n,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"})}),ZT=n=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),eI=n=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...n,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3.375 3.375 0 0119.5 7.372l-10.94 10.94a2.25 2.25 0 01-3.182-3.182l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a1.125 1.125 0 001.591 1.591l10.94-10.94a2.25 2.25 0 00-3.182-3.182L5.625 15.375a3.375 3.375 0 004.773 4.773l7.693-7.693a.75.75 0 011.06-1.06z"})}),h2=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"],tI=[{id:1,name:"S.K. Gupta",post:"President"},{id:2,name:"Mukesh Kumar",post:"Vice President"},{id:3,name:"Sudhir",post:"General Secretary"},{id:4,name:"Ravinder Kumar",post:"Joint Secretary Industrial Dispute"},{id:5,name:"Manoj Katiyar",post:"Joint Secretary Welfare"},{id:6,name:"Krishna Kumar",post:"Treasurer"},{id:7,name:"Manoj Nandal",post:"Assistant Joint Secretary Industrial Dispute"},{id:8,name:"Pradeep Kumar",post:"Assistant Joint Secretary Welfare"},{id:9,name:"Debabrata Sahu",post:"Executive Member"},{id:10,name:"Sandeep Kumar",post:"Executive Member"},{id:11,name:"Mohit Kajal",post:"Executive Member"},{id:12,name:"Naveen Kumar",post:"Executive Member"},{id:13,name:"Pardeep",post:"Executive Member"}],gn={hindiName:"इंडियन ऑयल पानीपत रिफ़ाइनरी एम्पलाईज यूनियन",englishName:"INDIAN OIL PANIPAT REFINERY EMPLOYEES UNION (IPREU)",address:"पानीपत रिफ़ाइनरी एवं पेट्रोकेमिकल कॉम्प्लेक्स, पोस्ट ऑफिस: पानीपत रिफ़ाइनरी, बहोली, पानीपत-132140 (हरियाणा)",phones:["9034084033","9416658215"],intercom:"01802524045",email:"PRIPREU@INDIANOIL.IN",affiliation:"भारतीय मजदूर संघ (बी.एम.एस. से सम्बद्ध)",regdNo:"1542"},dv=()=>C.jsxs("div",{className:"flex flex-col items-center gap-3 py-6",children:[C.jsxs("div",{className:"relative group",children:[C.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"}),C.jsxs("div",{className:"relative px-8 py-4 bg-white border-2 border-orange-500/20 rounded-2xl shadow-xl flex flex-col items-center transition-all hover:border-orange-500/50",children:[C.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-2 drop-shadow-sm",children:"Official Platform Identity"}),C.jsxs("h4",{className:"text-base md:text-lg font-black tracking-tight text-center leading-tight",children:[C.jsx("span",{className:"text-gray-900",children:"Design & Developed by "}),C.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-700 uppercase drop-shadow-sm",children:"Mr. NAVEEN KUMAR"})]}),C.jsx("div",{className:"mt-2 px-3 py-0.5 bg-orange-600 rounded-full",children:C.jsx("p",{className:"text-[9px] font-black text-white uppercase tracking-widest",children:"(EXECUTIVE MEMBER) IPREU"})})]})]}),C.jsxs("div",{className:"flex items-center gap-3 mt-1 opacity-60",children:[C.jsx("span",{className:"h-[2px] w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"}),C.jsx("span",{className:"text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]",children:"Secure Premium Infrastructure"}),C.jsx("span",{className:"h-[2px] w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"})]})]}),nI=({name:n,post:e})=>C.jsx("div",{className:"p-5 rounded-2xl border transition-all duration-300 bg-white border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 group",children:C.jsxs("div",{className:"flex items-center gap-4",children:[C.jsx("div",{className:"w-14 h-14 rounded-full flex items-center justify-center text-lg font-black bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 group-hover:scale-110 shadow-sm border border-orange-100 transition-transform duration-300",children:n.split(" ").map(t=>t[0]).join("").substring(0,2)}),C.jsxs("div",{children:[C.jsx("p",{className:"font-black text-xl text-[#15803d] tracking-tight leading-tight mb-0.5 transition-colors uppercase",children:n}),C.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-orange-700 font-black",children:e})]})]})}),rI=({onLoginClick:n})=>{const{calendarEvents:e,announcements:t,users:i,grievances:o}=C0(),l=e.filter(y=>new Date(y.date)>=new Date(new Date().setHours(0,0,0,0))).sort((y,w)=>y.date.localeCompare(w.date)).slice(0,3),h=t.slice(0,3),f=y=>{if(!y)return!1;const w=new Date,A=new Date(y);return w.getDate()===A.getDate()&&w.getMonth()===A.getMonth()},g=i.filter(y=>y.role==="MEMBER"&&f(y.dob));return C.jsxs("div",{className:"min-h-[calc(100vh-80px)] flex flex-col justify-between -mt-4 md:-mt-8 -mx-4 md:-mx-8",children:[C.jsxs("section",{className:"relative overflow-hidden bg-[#2D0606] text-white py-24 md:py-36 px-6 lg:px-12 flex items-center justify-center",children:[C.jsx("style",{children:`
                    .hero-gradient {
                        background: radial-gradient(circle at top right, #4c0505 0%, #1a0202 70%, #000000 100%);
                    }
                `}),C.jsx("div",{className:"absolute inset-0 hero-gradient opacity-90"}),C.jsx("div",{className:"absolute top-0 left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] animate-blob"}),C.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[120px] animate-blob animation-delay-2000"}),C.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto text-center space-y-10",children:[C.jsxs("div",{className:"inline-flex flex-col items-center gap-6",children:[C.jsxs("div",{className:"px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-bold text-orange-200 shadow-2xl flex items-center gap-2",children:[C.jsxs("span",{className:"flex h-2 w-2 relative",children:[C.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),C.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-orange-500"})]}),"SECURE CENTRALIZED MEMBER HUB"]}),C.jsx("h2",{className:"text-3xl md:text-5xl font-black text-orange-500 font-display transition-all hover:scale-105 duration-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]",children:gn.hindiName})]}),C.jsxs("h1",{className:"text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] drop-shadow-2xl",children:["Strength Through ",C.jsx("br",{})," ",C.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase",children:"Unity & Transparency"})]}),C.jsxs("p",{className:"text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-lg",children:["The official digital home for ",gn.englishName,". Affiliated with ",C.jsx("span",{className:"text-white font-bold underline decoration-orange-500 decoration-2 underline-offset-4",children:gn.affiliation}),"."]}),C.jsxs("div",{className:"pt-10 flex flex-col sm:flex-row items-center justify-center gap-6",children:[C.jsx("button",{onClick:n,className:"w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white font-black rounded-2xl shadow-[0_20px_50px_rgba(185,28,28,0.3)] transition-all hover:-translate-y-1 active:scale-95 text-xl border border-white/20",children:"Access Member Portal →"}),C.jsx("a",{href:"#leadership",className:"w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl backdrop-blur-xl border border-white/10 transition-all hover:-translate-y-1 text-xl",children:"View Executive Body"})]})]})]}),C.jsx("section",{className:"py-20 bg-[#fcfaf7] relative z-20 border-b border-orange-100",children:C.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-12",children:C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[C.jsxs("div",{className:"space-y-8",children:[C.jsxs("div",{className:"flex items-center gap-4",children:[C.jsx("div",{className:"p-3 bg-orange-100 text-orange-600 rounded-xl",children:C.jsx(XT,{className:"w-7 h-7"})}),C.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-orange-950",children:"Union Calendar"})]}),C.jsxs("div",{className:"space-y-3",children:[l.length>0?l.map(y=>C.jsxs("div",{className:"bg-white p-4 rounded-xl border border-orange-100 shadow-sm flex items-center justify-between group hover:border-orange-300 transition-colors",children:[C.jsxs("div",{className:"flex items-center gap-4",children:[C.jsxs("div",{className:"flex flex-col items-center justify-center bg-orange-50 w-14 h-14 rounded-lg border border-orange-100",children:[C.jsx("span",{className:"text-[10px] text-orange-800/50 uppercase font-bold",children:new Date(y.date).toLocaleString("default",{month:"short"})}),C.jsx("span",{className:"text-xl font-bold text-orange-700 leading-none",children:new Date(y.date).getDate()})]}),C.jsxs("div",{children:[C.jsx("h4",{className:"font-bold text-orange-950 group-hover:text-orange-600 transition-colors",children:y.title}),C.jsxs("div",{className:"flex items-center gap-3 text-xs text-orange-900/70 mt-1",children:[C.jsxs("span",{className:"flex items-center gap-1",children:[C.jsx(ZT,{className:"w-3 h-3"})," ",y.startTime]}),y.location&&C.jsxs("span",{className:"flex items-center gap-1",children:["📍 ",y.location]})]})]})]}),C.jsx("button",{onClick:n,className:"text-xs font-bold text-orange-700 hover:text-orange-600 uppercase tracking-widest px-3 py-1 bg-orange-50 rounded-full border border-orange-100",children:"Details"})]},y.id)):C.jsx("p",{className:"text-orange-950/80 font-black uppercase tracking-[0.2em] italic py-8 text-center bg-white rounded-xl border border-dashed border-orange-200",children:"No upcoming events listed for this month."}),C.jsx("p",{className:"text-center",children:C.jsx("button",{onClick:n,className:"text-sm font-semibold text-orange-700 hover:text-orange-800",children:"View Full Calendar →"})})]})]}),C.jsxs("div",{className:"space-y-8",children:[C.jsxs("div",{className:"flex items-center gap-4",children:[C.jsx("div",{className:"p-3 bg-orange-100 text-orange-600 rounded-xl",children:C.jsx(JT,{className:"w-7 h-7"})}),C.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-orange-950",children:"Latest Circulars"})]}),C.jsxs("div",{className:"space-y-3",children:[h.length>0?h.map(y=>C.jsxs("div",{className:"bg-white p-4 rounded-xl border border-orange-100 shadow-sm transition-all hover:border-orange-300",children:[C.jsxs("div",{className:"flex justify-between items-start mb-2",children:[C.jsx("h4",{className:"font-bold text-orange-950 line-clamp-1",children:y.title}),C.jsx("span",{className:"text-[10px] bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-bold",children:"OFFICIAL"})]}),C.jsx("p",{className:"text-sm text-orange-900/80 line-clamp-2 mb-3",children:y.content}),C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsx("span",{className:"text-[10px] text-orange-900/60 font-medium italic",children:new Date(y.createdAt).toLocaleDateString()}),y.attachment&&C.jsxs("button",{onClick:n,className:"flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700",children:[C.jsx(eI,{className:"w-3.5 h-3.5"}),"View Attachment"]})]})]},y.id)):C.jsx("p",{className:"text-orange-950/80 font-black uppercase tracking-[0.2em] italic py-10 text-center bg-white rounded-2xl border-2 border-dashed border-orange-100/50 shadow-inner",children:"No public notices available at this time."}),C.jsx("p",{className:"text-center",children:C.jsx("button",{onClick:n,className:"text-sm font-semibold text-orange-600 hover:text-orange-700",children:"Read All Circulars →"})})]})]})]})})}),C.jsx("section",{id:"leadership",className:"py-24 px-6 lg:px-12 bg-[#fcfaf7] relative z-20",children:C.jsxs("div",{className:"max-w-6xl mx-auto",children:[C.jsxs("div",{className:"text-center mb-20",children:[C.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-orange-950 mb-6 font-display uppercase tracking-tight",children:["Executive Body of ",C.jsx("span",{className:"text-orange-600",children:"IPREU"})]}),C.jsx("div",{className:"w-32 h-2 bg-gradient-to-r from-orange-400 to-red-800 mx-auto rounded-full mb-8 opacity-80"}),C.jsx("p",{className:"text-base md:text-lg text-orange-950/80 max-w-3xl mx-auto leading-relaxed font-medium",children:"Serving with dedication, integrity, and a commitment to member welfare and industrial harmony."})]}),C.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:tI.map(y=>C.jsx(nI,{name:y.name,post:y.post},y.id))})]})}),g.length>0&&C.jsxs("section",{className:"py-24 px-6 md:px-12 bg-gradient-to-b from-orange-50 to-white overflow-hidden relative",children:[C.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -mr-32 -mt-32"}),C.jsxs("div",{className:"max-w-7xl mx-auto",children:[C.jsxs("div",{className:"text-center mb-16 relative z-10",children:[C.jsx("span",{className:"text-orange-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block",children:"Celebrations"}),C.jsx("h2",{className:"text-5xl md:text-7xl font-black text-[#013220] uppercase tracking-tighter mb-4",children:"Birthday Stars 🎂"}),C.jsx("p",{className:"text-lg md:text-xl text-gray-700 font-bold max-w-2xl mx-auto",children:"Wishing our dedicated union members a year of pride and prosperity!"})]}),C.jsx("div",{className:"flex flex-wrap justify-center gap-8 md:gap-12 relative z-10",children:g.map(y=>C.jsxs("div",{className:"flex flex-col items-center group",children:[C.jsxs("div",{className:"relative mb-6",children:[C.jsx("div",{className:"absolute inset-0 bg-orange-500 rounded-full scale-110 blur-[10px] opacity-0 group-hover:opacity-30 transition-opacity"}),C.jsx("div",{className:"w-32 h-32 md:w-44 md:h-44 rounded-full border-[6px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500",children:C.jsx("img",{src:y.photoUrl,alt:y.employeeName,className:"w-full h-full object-cover"})}),C.jsx("div",{className:"absolute -bottom-2 -right-2 bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform z-20",children:"🎈"})]}),C.jsx("h3",{className:"text-xl md:text-2xl font-black text-[#013220] uppercase tracking-tight group-hover:text-orange-600 transition-colors",children:y.employeeName}),C.jsxs("p",{className:"text-[10px] font-black text-orange-950/70 uppercase tracking-[0.2em] mt-1",children:[y.employeeNumber," • ",y.postingLocation]})]},y.id))})]})]}),C.jsxs("section",{className:"py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative",children:[C.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]"}),C.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-12 relative z-10",children:C.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-12 text-center",children:[C.jsxs("div",{className:"space-y-2 group",children:[C.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:i.filter(y=>y.role!=="PENDING").length||1}),C.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Registered Members"})]}),C.jsxs("div",{className:"space-y-2 group",children:[C.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:t.length}),C.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Digital Circulars"})]}),C.jsxs("div",{className:"space-y-2 group",children:[C.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:o.filter(y=>y.status==="RESOLVED").length}),C.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Resolved Grievances"})]}),C.jsxs("div",{className:"space-y-2 group",children:[C.jsx("p",{className:"text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300",children:gn.regdNo}),C.jsx("p",{className:"text-sm font-black text-gray-500 uppercase tracking-widest",children:"Registration No."})]})]})})]}),C.jsxs("section",{className:"py-24 px-6 lg:px-12 bg-[#fcfaf7] relative z-20",children:[C.jsx("div",{className:"max-w-6xl mx-auto text-center mb-20",children:C.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-orange-950 mb-8 font-display underline decoration-orange-500 decoration-4 underline-offset-12",children:"How to Join IPREU"})}),C.jsxs("div",{className:"max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative",children:[C.jsx("div",{className:"absolute top-1/2 left-0 w-full h-1 bg-orange-100 hidden md:block -z-10"}),C.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-100 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all",children:[C.jsx("div",{className:"w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-600/20",children:"1"}),C.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Digital Registration"}),C.jsx("p",{className:"text-base text-orange-950/70",children:"Click Join and fill in your official employee details via our secure form."})]}),C.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-200 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all",children:[C.jsx("div",{className:"w-12 h-12 bg-orange-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-900/20",children:"2"}),C.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Admin Verification"}),C.jsx("p",{className:"text-base text-orange-950/70",children:"Your details will be reviewed by the Executive Body for union credentials."})]}),C.jsxs("div",{className:"bg-white p-8 rounded-2xl border border-orange-200 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all",children:[C.jsx("div",{className:"w-12 h-12 bg-orange-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-900/20",children:"3"}),C.jsx("h4",{className:"font-bold text-xl text-orange-950 uppercase tracking-tight",children:"Full Access"}),C.jsx("p",{className:"text-base text-orange-950/70",children:"Receive your digital ID card and gain access to voting, circulars, and more."})]})]}),C.jsx("div",{className:"mt-16 text-center",children:C.jsx("button",{onClick:n,className:"px-12 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:-translate-y-1",children:"Start Registration Now"})})]}),C.jsxs("footer",{className:"bg-orange-950 text-orange-100 py-16 px-6 border-t border-orange-900 relative z-20",children:[C.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12",children:[C.jsxs("div",{className:"md:col-span-2 space-y-4",children:[C.jsx("h4",{className:"text-2xl font-display font-bold text-white tracking-tight",children:gn.englishName}),C.jsx("p",{className:"text-lg text-orange-300 font-bold mb-4",children:gn.hindiName}),C.jsx("p",{className:"text-sm leading-relaxed max-w-md text-orange-100/60",children:gn.address}),C.jsxs("div",{className:"pt-4 space-y-2 text-sm",children:[C.jsxs("p",{className:"flex items-center gap-3",children:[C.jsx("span",{className:"text-orange-400",children:"📞"})," ",gn.phones.join(" / ")," (Ext: ",gn.intercom,")"]}),C.jsxs("p",{className:"flex items-center gap-3",children:[C.jsx("span",{className:"text-orange-400",children:"✉️"})," ",C.jsx("a",{href:`mailto:${gn.email}`,className:"hover:text-orange-300 transition-colors",children:gn.email})]})]})]}),C.jsxs("div",{children:[C.jsx("h5",{className:"text-orange-300 font-bold mb-4 uppercase text-xs tracking-widest font-display",children:"Compliance"}),C.jsxs("ul",{className:"space-y-3 text-sm text-orange-100/60",children:[C.jsxs("li",{children:["Affiliation: ",gn.affiliation]}),C.jsxs("li",{children:["Regd No: ",gn.regdNo]}),C.jsx("li",{children:C.jsxs("span",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"w-2 h-2 rounded-full bg-orange-400"})," Network Status: Active"]})})]})]}),C.jsxs("div",{children:[C.jsx("h5",{className:"text-orange-300 font-bold mb-4 uppercase text-xs tracking-widest font-display",children:"Navigation"}),C.jsxs("ul",{className:"space-y-2 text-sm text-orange-100/60",children:[C.jsx("li",{children:C.jsx("button",{onClick:n,className:"hover:text-orange-300 transition-colors",children:"Member Login"})}),C.jsx("li",{children:C.jsx("a",{href:"#leadership",className:"hover:text-orange-300 transition-colors",children:"Executive Body"})}),C.jsx("li",{children:C.jsx("button",{onClick:()=>n("grievances"),className:"hover:text-orange-300 transition-colors",children:"Grievance Portal"})})]})]})]}),C.jsxs("div",{className:"max-w-6xl mx-auto mt-12 pt-8 border-t border-orange-900/60 flex flex-col items-center gap-6",children:[C.jsx(dv,{}),C.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center w-full gap-4 text-[10px] uppercase tracking-widest text-orange-100/40 font-medium",children:[C.jsxs("p",{children:["© ",new Date().getFullYear()," IPREU. All rights reserved. | Built for the Employees, by the Union."]}),C.jsx("p",{className:"text-orange-400 font-bold px-3 py-1 bg-orange-400/10 rounded-full border border-orange-400/20",children:"Secure Private Network"})]})]})]})]})},iI=()=>{};var _y={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},sI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},pv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,g=o+2<n.length,y=g?n[o+2]:0,w=l>>2,A=(l&3)<<4|f>>4;let b=(f&15)<<2|y>>6,B=y&63;g||(B=64,h||(b=64)),i.push(t[w],t[A],t[b],t[B])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const A=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||A==null)throw new oI;const b=l<<2|f>>4;if(i.push(b),y!==64){const B=f<<4&240|y>>2;if(i.push(B),A!==64){const G=y<<6&192|A;i.push(G)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aI=function(n){const e=fv(n);return pv.encodeByteArray(e,!0)},Tc=function(n){return aI(n).replace(/\./g,"")},mv=function(n){try{return pv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uI=()=>lI().__FIREBASE_DEFAULTS__,cI=()=>{if(typeof process>"u"||typeof _y>"u")return;const n=_y.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&mv(n[1]);return e&&JSON.parse(e)},qc=()=>{try{return iI()||uI()||cI()||hI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gv=n=>{var e,t;return(t=(e=qc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},yv=n=>{const e=gv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},_v=()=>{var n;return(n=qc())==null?void 0:n.config},vv=n=>{var e;return(e=qc())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function wv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Tc(JSON.stringify(t)),Tc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function pI(){var e;const n=(e=qc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _I(){const n=Wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vI(){return!pI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ev(){try{return typeof indexedDB=="object"}catch{return!1}}function Tv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function wI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="FirebaseError";class Gn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=EI,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?TI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Gn(o,f,i)}}function TI(n,e){return n.replace(II,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const II=/\{\$([^}]+)}/g;function SI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cs(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(vy(l)&&vy(h)){if(!Cs(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function vy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function nl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function rl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function AI(n,e){const t=new RI(n,e);return t.subscribe.bind(t)}class RI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");kI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Kd),o.error===void 0&&(o.error=Kd),o.complete===void 0&&(o.complete=Kd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Kd(){}/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Fs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $f(n){return(await fetch(n,{credentials:"include"})).ok}class bn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new dI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xI(e))try{this.getOrInitializeService({instanceIdentifier:Ts})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ts){return this.instances.has(e)}getOptions(e=Ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:PI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ts){return this.component?this.component.multipleInstances?e:Ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PI(n){return n===Ts?void 0:n}function xI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new CI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ce||(Ce={}));const bI={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},DI=Ce.INFO,OI={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},VI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=OI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qf{constructor(e){this.name=e,this._logLevel=DI,this._logHandler=VI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const LI=(n,e)=>e.some(t=>n instanceof t);let wy,Ey;function MI(){return wy||(wy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UI(){return Ey||(Ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iv=new WeakMap,pf=new WeakMap,Sv=new WeakMap,Gd=new WeakMap,Hf=new WeakMap;function FI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t($r(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Iv.set(t,n)}).catch(()=>{}),Hf.set(e,n),e}function jI(n){if(pf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});pf.set(n,e)}let mf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return pf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $r(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function BI(n){mf=n(mf)}function zI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Qd(this),e,...t);return Sv.set(i,e.sort?e.sort():[e]),$r(i)}:UI().includes(n)?function(...e){return n.apply(Qd(this),e),$r(Iv.get(this))}:function(...e){return $r(n.apply(Qd(this),e))}}function $I(n){return typeof n=="function"?zI(n):(n instanceof IDBTransaction&&jI(n),LI(n,MI())?new Proxy(n,mf):n)}function $r(n){if(n instanceof IDBRequest)return FI(n);if(Gd.has(n))return Gd.get(n);const e=$I(n);return e!==n&&(Gd.set(n,e),Hf.set(e,n)),e}const Qd=n=>Hf.get(n);function Hc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=$r(h);return i&&h.addEventListener("upgradeneeded",g=>{i($r(h.result),g.oldVersion,g.newVersion,$r(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}function Yd(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),$r(t).then(()=>{})}const qI=["get","getKey","getAll","getAllKeys","count"],HI=["put","add","delete","clear"],Jd=new Map;function Ty(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Jd.get(e))return Jd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=HI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||qI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return Jd.set(e,l),l}BI(n=>({...n,get:(e,t,i)=>Ty(e,t)||n.get(e,t,i),has:(e,t)=>!!Ty(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(KI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function KI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gf="@firebase/app",Iy="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new qf("@firebase/app"),GI="@firebase/app-compat",QI="@firebase/analytics-compat",YI="@firebase/analytics",JI="@firebase/app-check-compat",XI="@firebase/app-check",ZI="@firebase/auth",eS="@firebase/auth-compat",tS="@firebase/database",nS="@firebase/data-connect",rS="@firebase/database-compat",iS="@firebase/functions",sS="@firebase/functions-compat",oS="@firebase/installations",aS="@firebase/installations-compat",lS="@firebase/messaging",uS="@firebase/messaging-compat",cS="@firebase/performance",hS="@firebase/performance-compat",dS="@firebase/remote-config",fS="@firebase/remote-config-compat",pS="@firebase/storage",mS="@firebase/storage-compat",gS="@firebase/firestore",yS="@firebase/ai",_S="@firebase/firestore-compat",vS="firebase",wS="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="[DEFAULT]",ES={[gf]:"fire-core",[GI]:"fire-core-compat",[YI]:"fire-analytics",[QI]:"fire-analytics-compat",[XI]:"fire-app-check",[JI]:"fire-app-check-compat",[ZI]:"fire-auth",[eS]:"fire-auth-compat",[tS]:"fire-rtdb",[nS]:"fire-data-connect",[rS]:"fire-rtdb-compat",[iS]:"fire-fn",[sS]:"fire-fn-compat",[oS]:"fire-iid",[aS]:"fire-iid-compat",[lS]:"fire-fcm",[uS]:"fire-fcm-compat",[cS]:"fire-perf",[hS]:"fire-perf-compat",[dS]:"fire-rc",[fS]:"fire-rc-compat",[pS]:"fire-gcs",[mS]:"fire-gcs-compat",[gS]:"fire-fst",[_S]:"fire-fst-compat",[yS]:"fire-vertex","fire-js":"fire-js",[vS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map,TS=new Map,_f=new Map;function Sy(n,e){try{n.container.addComponent(e)}catch(t){Wr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hn(n){const e=n.name;if(_f.has(e))return Wr.debug(`There were multiple attempts to register component ${e}.`),!1;_f.set(e,n);for(const t of Ic.values())Sy(t,n);for(const t of TS.values())Sy(t,n);return!0}function js(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function _n(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Li=new Us("app","Firebase",IS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Li.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=wS;function Av(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:yf,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Li.create("bad-app-name",{appName:String(o)});if(t||(t=_v()),!t)throw Li.create("no-options");const l=Ic.get(o);if(l){if(Cs(t,l.options)&&Cs(i,l.config))return l;throw Li.create("duplicate-app",{appName:o})}const h=new NI(o);for(const g of _f.values())h.addComponent(g);const f=new SS(t,i,h);return Ic.set(o,f),f}function Wc(n=yf){const e=Ic.get(n);if(!e&&n===yf&&_v())return Av();if(!e)throw Li.create("no-app",{appName:n});return e}function sn(n,e,t){let i=ES[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wr.warn(h.join(" "));return}Hn(new bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const AS="firebase-heartbeat-database",RS=1,pl="firebase-heartbeat-store";let Xd=null;function Rv(){return Xd||(Xd=Hc(AS,RS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Li.create("idb-open",{originalErrorMessage:n.message})})),Xd}async function kS(n){try{const t=(await Rv()).transaction(pl),i=await t.objectStore(pl).get(kv(n));return await t.done,i}catch(e){if(e instanceof Gn)Wr.warn(e.message);else{const t=Li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wr.warn(t.message)}}}async function Ay(n,e){try{const i=(await Rv()).transaction(pl,"readwrite");await i.objectStore(pl).put(e,kv(n)),await i.done}catch(t){if(t instanceof Gn)Wr.warn(t.message);else{const i=Li.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wr.warn(i.message)}}}function kv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const CS=1024,PS=30;class xS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ry();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>PS){const h=DS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Wr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ry(),{heartbeatsToSend:i,unsentEntries:o}=NS(this._heartbeatsCache.heartbeats),l=Tc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Wr.warn(t),""}}}function Ry(){return new Date().toISOString().substring(0,10)}function NS(n,e=CS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),ky(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ky(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class bS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ev()?Tv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ky(n){return Tc(JSON.stringify({version:2,heartbeats:n})).length}function DS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(n){Hn(new bn("platform-logger",e=>new WI(e),"PRIVATE")),Hn(new bn("heartbeat",e=>new xS(e),"PRIVATE")),sn(gf,Iy,n),sn(gf,Iy,"esm2020"),sn("fire-js","")}OS("");var VS="firebase",LS="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(VS,LS,"app");function Cv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=Cv,Pv=new Us("auth","Firebase",Cv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new qf("@firebase/auth");function US(n,...e){Sc.logLevel<=Ce.WARN&&Sc.warn(`Auth (${Bs}): ${n}`,...e)}function cc(n,...e){Sc.logLevel<=Ce.ERROR&&Sc.error(`Auth (${Bs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,...e){throw Wf(n,...e)}function mr(n,...e){return Wf(n,...e)}function xv(n,e,t){const i={...MS(),[e]:t};return new Us("auth","Firebase",i).create(e,{appName:n.name})}function qr(n){return xv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Pv.create(n,...e)}function me(n,e,...t){if(!n)throw Wf(e,...t)}function Br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cc(e),new Error(e)}function Kr(n,e){n||Br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function FS(){return Cy()==="http:"||Cy()==="https:"}function Cy(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FS()||gI()||"connection"in navigator)?navigator.onLine:!0}function BS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kr(t>e,"Short delay should be less than long delay!"),this.isMobile=fI()||yI()}get(){return jS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n,e){Kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qS=new kl(3e4,6e4);function Hi(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Wi(n,e,t,i,o={}){return bv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=Rl({key:n.config.apiKey,...h}).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:g,...l};return mI()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Fs(n.emulatorConfig.host)&&(y.credentials="include"),Nv.fetch()(await Dv(n,n.config.apiHost,t,f),y)})}async function bv(n,e,t){n._canInitEmulator=!1;const i={...zS,...e};try{const o=new WS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Zu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zu(n,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Zu(n,"email-already-in-use",h);if(g==="USER_DISABLED")throw Zu(n,"user-disabled",h);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw xv(n,w,y);Wn(n,w)}}catch(o){if(o instanceof Gn)throw o;Wn(n,"network-request-failed",{message:String(o)})}}async function Cl(n,e,t,i,o={}){const l=await Wi(n,e,t,i,o);return"mfaPendingCredential"in l&&Wn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Dv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?Kf(n.config,o):`${n.config.apiScheme}://${o}`;return $S.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function HS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mr(this.auth,"network-request-failed")),qS.get())})}}function Zu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=mr(n,e,i);return o.customData._tokenResponse=t,o}function Py(n){return n!==void 0&&n.enterprise!==void 0}class KS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return HS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GS(n,e){return Wi(n,"GET","/v2/recaptchaConfig",Hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(n,e){return Wi(n,"POST","/v1/accounts:delete",e)}async function Ac(n,e){return Wi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YS(n,e=!1){const t=Ke(n),i=await t.getIdToken(e),o=Gf(i);me(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:ll(Zd(o.auth_time)),issuedAtTime:ll(Zd(o.iat)),expirationTime:ll(Zd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Zd(n){return Number(n)*1e3}function Gf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const o=mv(t);return o?JSON.parse(o):(cc("Failed to decode base64 JWT payload"),null)}catch(o){return cc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function xy(n){const e=Gf(n);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Gn&&JS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function JS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ll(this.lastLoginAt),this.creationTime=ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(n){var A;const e=n.auth,t=await n.getIdToken(),i=await ml(n,Ac(e,{idToken:t}));me(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=(A=o.providerUserInfo)!=null&&A.length?Ov(o.providerUserInfo):[],h=eA(n.providerData,l),f=n.isAnonymous,g=!(n.email&&o.passwordHash)&&!(h!=null&&h.length),y=f?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new wf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function ZS(n){const e=Ke(n);await Rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Ov(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(n,e){const t=await bv(n,{},async()=>{const i=Rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await Dv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return n.emulatorConfig&&Fs(n.emulatorConfig.host)&&(g.credentials="include"),Nv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function nA(n,e){return Wi(n,"POST","/v2/accounts:revokeToken",Hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){me(e.length!==0,"internal-error");const t=xy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await tA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Bo;return i&&(me(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(me(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(me(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bo,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n,e){me(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $n{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new XS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new wf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ml(this,this.stsTokenManager.getToken(this.auth,e));return me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return YS(this,e)}reload(){return ZS(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Rc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(qr(this.auth));const e=await this.getIdToken();return await ml(this,QS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:A,emailVerified:b,isAnonymous:B,providerData:G,stsTokenManager:J}=t;me(A&&J,e,"internal-error");const q=Bo.fromJSON(this.name,J);me(typeof A=="string",e,"internal-error"),Ci(i,e.name),Ci(o,e.name),me(typeof b=="boolean",e,"internal-error"),me(typeof B=="boolean",e,"internal-error"),Ci(l,e.name),Ci(h,e.name),Ci(f,e.name),Ci(g,e.name),Ci(y,e.name),Ci(w,e.name);const he=new $n({uid:A,auth:e,email:o,emailVerified:b,displayName:i,isAnonymous:B,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:q,createdAt:y,lastLoginAt:w});return G&&Array.isArray(G)&&(he.providerData=G.map(ue=>({...ue}))),g&&(he._redirectEventId=g),he}static async _fromIdTokenResponse(e,t,i=!1){const o=new Bo;o.updateFromServerResponse(t);const l=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Rc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];me(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Ov(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Bo;f.updateFromIdToken(i);const g=new $n({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new wf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=new Map;function zr(n){Kr(n instanceof Function,"Expected a class definition");let e=Ny.get(n);return e?(Kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ny.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vv.type="NONE";const by=Vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n,e,t){return`firebase:${n}:${e}:${t}`}class zo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=hc(this.userKey,o.apiKey,l),this.fullPersistenceKey=hc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ac(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new zo(zr(by),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||zr(by);const h=hc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(h);if(w){let A;if(typeof w=="string"){const b=await Ac(e,{idToken:w}).catch(()=>{});if(!b)break;A=await $n._fromGetAccountInfoResponse(e,b,w)}else A=$n._fromJSON(e,w);y!==l&&(f=A),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new zo(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new zo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bv(e))return"Blackberry";if(zv(e))return"Webos";if(Mv(e))return"Safari";if((e.includes("chrome/")||Uv(e))&&!e.includes("edge/"))return"Chrome";if(jv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Lv(n=Wt()){return/firefox\//i.test(n)}function Mv(n=Wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uv(n=Wt()){return/crios\//i.test(n)}function Fv(n=Wt()){return/iemobile/i.test(n)}function jv(n=Wt()){return/android/i.test(n)}function Bv(n=Wt()){return/blackberry/i.test(n)}function zv(n=Wt()){return/webos/i.test(n)}function Qf(n=Wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rA(n=Wt()){var e;return Qf(n)&&!!((e=window.navigator)!=null&&e.standalone)}function iA(){return _I()&&document.documentMode===10}function $v(n=Wt()){return Qf(n)||jv(n)||zv(n)||Bv(n)||/windows phone/i.test(n)||Fv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(n,e=[]){let t;switch(n){case"Browser":t=Dy(Wt());break;case"Worker":t=`${Dy(Wt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Bs}/${i}`}/**
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
 */class sA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function oA(n,e={}){return Wi(n,"GET","/v2/passwordPolicy",Hi(n,e))}/**
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
 */const aA=6;class lA{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??aA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oy(this),this.idTokenSubscription=new Oy(this),this.beforeStateQueue=new sA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await zo.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ac(this,{idToken:e}),i=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(_n(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(i=g.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(h){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(qr(this));const t=e?Ke(e):null;return t&&me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oA(this),t=new lA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Us("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await nA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zr(e)||this._popupRedirectResolver;me(t,this,"argument-error"),this.redirectPersistenceManager=await zo.create(this,[zr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&US(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zs(n){return Ke(n)}class Oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=AI(t=>this.observer=t)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cA(n){Kc=n}function Hv(n){return Kc.loadJS(n)}function hA(){return Kc.recaptchaEnterpriseScript}function dA(){return Kc.gapiScript}function fA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class pA{constructor(){this.enterprise=new mA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class mA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const gA="recaptcha-enterprise",Wv="NO_RECAPTCHA";class yA{constructor(e){this.type=gA,this.auth=zs(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{GS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new KS(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Py(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(Wv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pA().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Py(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=hA();g.length!==0&&(g+=f),Hv(g).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function Vy(n,e,t,i=!1,o=!1){const l=new yA(n);let h;if(o)h=Wv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Ef(n,e,t,i,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Vy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Vy(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n,e){const t=js(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Cs(l,e??{}))return o;Wn(o,"already-initialized")}return t.initialize({options:e})}function vA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(zr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function wA(n,e,t){const i=zs(n);me(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Kv(e),{host:h,port:f}=EA(e),g=f===null?"":`:${f}`,y={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){me(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),me(Cs(y,i.config.emulator)&&Cs(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Fs(h)?$f(`${l}//${h}${g}`):TA()}function Kv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function EA(n){const e=Kv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Ly(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Ly(h)}}}function Ly(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function TA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}async function IA(n,e){return Wi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(n,e){return Cl(n,"POST","/v1/accounts:signInWithPassword",Hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(n,e){return Cl(n,"POST","/v1/accounts:signInWithEmailLink",Hi(n,e))}async function RA(n,e){return Cl(n,"POST","/v1/accounts:signInWithEmailLink",Hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Yf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new gl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new gl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ef(e,t,"signInWithPassword",SA);case"emailLink":return AA(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ef(e,i,"signUpPassword",IA);case"emailLink":return RA(e,{idToken:t,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(n,e){return Cl(n,"POST","/v1/accounts:signInWithIdp",Hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="http://localhost";class Ps extends Yf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new Ps(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return $o(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,$o(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$o(e,t)}buildRequest(){const e={requestUri:kA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PA(n){const e=nl(rl(n)).link,t=e?nl(rl(e)).deep_link_id:null,i=nl(rl(n)).deep_link_id;return(i?nl(rl(i)).link:null)||i||t||e||n}class Jf{constructor(e){const t=nl(rl(e)),i=t.apiKey??null,o=t.oobCode??null,l=CA(t.mode??null);me(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=PA(e);try{return new Jf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.providerId=Jo.PROVIDER_ID}static credential(e,t){return gl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Jf.parseLink(t);return me(i,"argument-error"),gl._fromEmailAndCode(e,i.code,i.tenantId)}}Jo.PROVIDER_ID="password";Jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Pl{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pi.credential(e.oauthAccessToken)}catch{return null}}}Pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ps._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return xi.credential(t,i)}catch{return null}}}xi.GOOGLE_SIGN_IN_METHOD="google.com";xi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Pl{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ni.credential(e.oauthAccessToken)}catch{return null}}}Ni.GITHUB_SIGN_IN_METHOD="github.com";Ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Pl{constructor(){super("twitter.com")}static credential(e,t){return Ps._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return bi.credential(t,i)}catch{return null}}}bi.TWITTER_SIGN_IN_METHOD="twitter.com";bi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(n,e){return Cl(n,"POST","/v1/accounts:signUp",Hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await $n._fromIdTokenResponse(e,i,o),h=My(i);return new xs({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=My(i);return new xs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function My(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends Gn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,kc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new kc(e,t,i,o)}}function Qv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?kc._fromErrorAndOperation(n,l,e,i):l})}async function NA(n,e,t=!1){const i=await ml(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(n,e,t=!1){const{auth:i}=n;if(_n(i.app))return Promise.reject(qr(i));const o="reauthenticate";try{const l=await ml(n,Qv(i,o,e,n),t);me(l.idToken,i,"internal-error");const h=Gf(l.idToken);me(h,i,"internal-error");const{sub:f}=h;return me(n.uid===f,i,"user-mismatch"),xs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Wn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(n,e,t=!1){if(_n(n.app))return Promise.reject(qr(n));const i="signIn",o=await Qv(n,i,e),l=await xs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function DA(n,e){return Yv(zs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(n){const e=zs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OA(n,e,t){if(_n(n.app))return Promise.reject(qr(n));const i=zs(n),h=await Ef(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xA).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Jv(n),g}),f=await xs._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function VA(n,e,t){return _n(n.app)?Promise.reject(qr(n)):DA(Ke(n),Jo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Jv(n),i})}function LA(n,e,t,i){return Ke(n).onIdTokenChanged(e,t,i)}function MA(n,e,t){return Ke(n).beforeAuthStateChanged(e,t)}function UA(n,e,t,i){return Ke(n).onAuthStateChanged(e,t,i)}function dc(n){return Ke(n).signOut()}const Cc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=1e3,jA=10;class Zv extends Xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$v(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);iA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,jA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zv.type="LOCAL";const BA=Zv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew extends Xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ew.type="SESSION";const tw=ew;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Gc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),g=await zA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const y=Xf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(A){const b=A;if(b.data.eventId===y)switch(b.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(b.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){return window}function qA(n){gr().location.href=n}/**
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
 */function nw(){return typeof gr().WorkerGlobalScope<"u"&&typeof gr().importScripts=="function"}async function HA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function KA(){return nw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="firebaseLocalStorageDb",GA=1,Pc="firebaseLocalStorage",iw="fbase_key";class xl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qc(n,e){return n.transaction([Pc],e?"readwrite":"readonly").objectStore(Pc)}function QA(){const n=indexedDB.deleteDatabase(rw);return new xl(n).toPromise()}function Tf(){const n=indexedDB.open(rw,GA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Pc,{keyPath:iw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Pc)?e(i):(i.close(),await QA(),e(await Tf()))})})}async function Uy(n,e,t){const i=Qc(n,!0).put({[iw]:e,value:t});return new xl(i).toPromise()}async function YA(n,e){const t=Qc(n,!1).get(e),i=await new xl(t).toPromise();return i===void 0?null:i.value}function Fy(n,e){const t=Qc(n,!0).delete(e);return new xl(t).toPromise()}const JA=800,XA=3;class sw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>XA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gc._getInstance(KA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await HA(),!this.activeServiceWorker)return;this.sender=new $A(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tf();return await Uy(e,Cc,"1"),await Fy(e,Cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Uy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>YA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Qc(o,!1).getAll();return new xl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sw.type="LOCAL";const ZA=sw;new kl(3e4,6e4);/**
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
 */function eR(n,e){return e?zr(e):(me(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends Yf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $o(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $o(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $o(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tR(n){return Yv(n.auth,new Zf(n),n.bypassAuthState)}function nR(n){const{auth:e,user:t}=n;return me(t,e,"internal-error"),bA(t,new Zf(n),n.bypassAuthState)}async function rR(n){const{auth:e,user:t}=n;return me(t,e,"internal-error"),NA(t,new Zf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tR;case"linkViaPopup":case"linkViaRedirect":return rR;case"reauthViaPopup":case"reauthViaRedirect":return nR;default:Wn(this.auth,"internal-error")}}resolve(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=new kl(2e3,1e4);class jo extends ow{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,jo.currentPopupAction&&jo.currentPopupAction.cancel(),jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Kr(this.filter.length===1,"Popup operations only handle one event");const e=Xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iR.get())};e()}}jo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="pendingRedirect",fc=new Map;class oR extends ow{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=fc.get(this.auth._key());if(!e){try{const i=await aR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}fc.set(this.auth._key(),e)}return this.bypassAuthState||fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aR(n,e){const t=cR(e),i=uR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function lR(n,e){fc.set(n._key(),e)}function uR(n){return zr(n._redirectPersistence)}function cR(n){return hc(sR,n.config.apiKey,n.name)}async function hR(n,e,t=!1){if(_n(n.app))return Promise.reject(qr(n));const i=zs(n),o=eR(i,e),h=await new oR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=600*1e3;class fR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!aw(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(mr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dR&&this.cachedEventUids.clear(),this.cachedEventUids.has(jy(e))}saveEventToCache(e){this.cachedEventUids.add(jy(e)),this.lastProcessedEventTime=Date.now()}}function jy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function aw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(n,e={}){return Wi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yR=/^https?/;async function _R(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mR(n);for(const t of e)try{if(vR(t))return}catch{}Wn(n,"unauthorized-domain")}function vR(n){const e=vf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!yR.test(t))return!1;if(gR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const wR=new kl(3e4,6e4);function By(){const n=gr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ER(n){return new Promise((e,t)=>{var o,l,h;function i(){By(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{By(),t(mr(n,"network-request-failed"))},timeout:wR.get()})}if((l=(o=gr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=gr().gapi)!=null&&h.load)i();else{const f=fA("iframefcb");return gr()[f]=()=>{gapi.load?i():t(mr(n,"network-request-failed"))},Hv(`${dA()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw pc=null,e})}let pc=null;function TR(n){return pc=pc||ER(n),pc}/**
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
 */const IR=new kl(5e3,15e3),SR="__/auth/iframe",AR="emulator/auth/iframe",RR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CR(n){const e=n.config;me(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Kf(e,AR):`https://${n.config.authDomain}/${SR}`,i={apiKey:e.apiKey,appName:n.name,v:Bs},o=kR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Rl(i).slice(1)}`}async function PR(n){const e=await TR(n),t=gr().gapi;return me(t,n,"internal-error"),e.open({where:document.body,url:CR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=mr(n,"network-request-failed"),f=gr().setTimeout(()=>{l(h)},IR.get());function g(){gr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const xR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NR=500,bR=600,DR="_blank",OR="http://localhost";class zy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VR(n,e,t,i=NR,o=bR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...xR,width:i.toString(),height:o.toString(),top:l,left:h},y=Wt().toLowerCase();t&&(f=Uv(y)?DR:t),Lv(y)&&(e=e||OR,g.scrollbars="yes");const w=Object.entries(g).reduce((b,[B,G])=>`${b}${B}=${G},`,"");if(rA(y)&&f!=="_self")return LR(e||"",f),new zy(null);const A=window.open(e||"",f,w);me(A,n,"popup-blocked");try{A.focus()}catch{}return new zy(A)}function LR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const MR="__/auth/handler",UR="emulator/auth/handler",FR=encodeURIComponent("fac");async function $y(n,e,t,i,o,l){me(n.config.authDomain,n,"auth-domain-config-required"),me(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Bs,eventId:o};if(e instanceof Gv){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",SI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof Pl){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await n._getAppCheckToken(),y=g?`#${FR}=${encodeURIComponent(g)}`:"";return`${jR(n)}?${Rl(f).slice(1)}${y}`}function jR({config:n}){return n.emulator?Kf(n,UR):`https://${n.authDomain}/${MR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="webStorageSupport";class BR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tw,this._completeRedirectFn=hR,this._overrideRedirectResult=lR}async _openPopup(e,t,i,o){var h;Kr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await $y(e,t,i,vf(),o);return VR(e,l,Xf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await $y(e,t,i,vf(),o);return qA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Kr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await PR(e),i=new fR(e);return t.register("authEvent",o=>(me(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ef,{type:ef},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[ef];l!==void 0&&t(!!l),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_R(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $v()||Mv()||Qf()}}const zR=BR;var qy="@firebase/auth",Hy="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HR(n){Hn(new bn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;me(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qv(n)},y=new uA(i,o,l,g);return vA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Hn(new bn("auth-internal",e=>{const t=zs(e.getProvider("auth").getImmediate());return(i=>new $R(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(qy,Hy,qR(n)),sn(qy,Hy,"esm2020")}/**
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
 */const WR=300,KR=vv("authIdTokenMaxAge")||WR;let Wy=null;const GR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>KR)return;const o=t==null?void 0:t.token;Wy!==o&&(Wy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function QR(n=Wc()){const e=js(n,"auth");if(e.isInitialized())return e.getImmediate();const t=_A(n,{popupRedirectResolver:zR,persistence:[ZA,BA,tw]}),i=vv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=GR(l.toString());MA(t,h,()=>h(t.currentUser)),LA(t,f=>h(f))}}const o=gv("auth");return o&&wA(t,`http://${o}`),t}function YR(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}cA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=mr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",YR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HR("Browser");const lw="@firebase/installations",ep="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=1e4,cw=`w:${ep}`,hw="FIS_v2",JR="https://firebaseinstallations.googleapis.com/v1",XR=3600*1e3,ZR="installations",ek="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ns=new Us(ZR,ek,tk);function dw(n){return n instanceof Gn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw({projectId:n}){return`${JR}/projects/${n}/installations`}function pw(n){return{token:n.token,requestStatus:2,expiresIn:rk(n.expiresIn),creationTime:Date.now()}}async function mw(n,e){const i=(await e.json()).error;return Ns.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function gw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function nk(n,{refreshToken:e}){const t=gw(n);return t.append("Authorization",ik(e)),t}async function yw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function rk(n){return Number(n.replace("s","000"))}function ik(n){return`${hw} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=fw(n),o=gw(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:hw,appId:n.appId,sdkVersion:cw},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await yw(()=>fetch(i,f));if(g.ok){const y=await g.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:pw(y.authToken)}}else throw await mw("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=/^[cdef][\w-]{21}$/,If="";function lk(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=uk(n);return ak.test(t)?t:If}catch{return If}}function uk(n){return ok(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new Map;function ww(n,e){const t=Yc(n);Ew(t,e),ck(t,e)}function Ew(n,e){const t=vw.get(n);if(t)for(const i of t)i(e)}function ck(n,e){const t=hk();t&&t.postMessage({key:n,fid:e}),dk()}let Is=null;function hk(){return!Is&&"BroadcastChannel"in self&&(Is=new BroadcastChannel("[Firebase] FID Change"),Is.onmessage=n=>{Ew(n.data.key,n.data.fid)}),Is}function dk(){vw.size===0&&Is&&(Is.close(),Is=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk="firebase-installations-database",pk=1,bs="firebase-installations-store";let tf=null;function tp(){return tf||(tf=Hc(fk,pk,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(bs)}}})),tf}async function xc(n,e){const t=Yc(n),o=(await tp()).transaction(bs,"readwrite"),l=o.objectStore(bs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&ww(n,e.fid),e}async function Tw(n){const e=Yc(n),i=(await tp()).transaction(bs,"readwrite");await i.objectStore(bs).delete(e),await i.done}async function Jc(n,e){const t=Yc(n),o=(await tp()).transaction(bs,"readwrite"),l=o.objectStore(bs),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&ww(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(n){let e;const t=await Jc(n.appConfig,i=>{const o=mk(i),l=gk(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===If?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function mk(n){const e=n||{fid:lk(),registrationStatus:0};return Iw(e)}function gk(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ns.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=yk(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_k(n)}:{installationEntry:e}}async function yk(n,e){try{const t=await sk(n,e);return xc(n.appConfig,t)}catch(t){throw dw(t)&&t.customData.serverCode===409?await Tw(n.appConfig):await xc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _k(n){let e=await Ky(n.appConfig);for(;e.registrationStatus===1;)await _w(100),e=await Ky(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await np(n);return i||t}return e}function Ky(n){return Jc(n,e=>{if(!e)throw Ns.create("installation-not-found");return Iw(e)})}function Iw(n){return vk(n)?{fid:n.fid,registrationStatus:0}:n}function vk(n){return n.registrationStatus===1&&n.registrationTime+uw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk({appConfig:n,heartbeatServiceProvider:e},t){const i=Ek(n,t),o=nk(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:cw,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await yw(()=>fetch(i,f));if(g.ok){const y=await g.json();return pw(y)}else throw await mw("Generate Auth Token",g)}function Ek(n,{fid:e}){return`${fw(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(n,e=!1){let t;const i=await Jc(n.appConfig,l=>{if(!Sw(l))throw Ns.create("not-registered");const h=l.authToken;if(!e&&Sk(h))return l;if(h.requestStatus===1)return t=Tk(n,e),l;{if(!navigator.onLine)throw Ns.create("app-offline");const f=Rk(l);return t=Ik(n,f),f}});return t?await t:i.authToken}async function Tk(n,e){let t=await Gy(n.appConfig);for(;t.authToken.requestStatus===1;)await _w(100),t=await Gy(n.appConfig);const i=t.authToken;return i.requestStatus===0?rp(n,e):i}function Gy(n){return Jc(n,e=>{if(!Sw(e))throw Ns.create("not-registered");const t=e.authToken;return kk(t)?{...e,authToken:{requestStatus:0}}:e})}async function Ik(n,e){try{const t=await wk(n,e),i={...e,authToken:t};return await xc(n.appConfig,i),t}catch(t){if(dw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Tw(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await xc(n.appConfig,i)}throw t}}function Sw(n){return n!==void 0&&n.registrationStatus===2}function Sk(n){return n.requestStatus===2&&!Ak(n)}function Ak(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+XR}function Rk(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function kk(n){return n.requestStatus===1&&n.requestTime+uw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(n){const e=n,{installationEntry:t,registrationPromise:i}=await np(e);return i?i.catch(console.error):rp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pk(n,e=!1){const t=n;return await xk(t),(await rp(t,e)).token}async function xk(n){const{registrationPromise:e}=await np(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(n){if(!n||!n.options)throw nf("App Configuration");if(!n.name)throw nf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw nf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function nf(n){return Ns.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="installations",bk="installations-internal",Dk=n=>{const e=n.getProvider("app").getImmediate(),t=Nk(e),i=js(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Ok=n=>{const e=n.getProvider("app").getImmediate(),t=js(e,Aw).getImmediate();return{getId:()=>Ck(t),getToken:o=>Pk(t,o)}};function Vk(){Hn(new bn(Aw,Dk,"PUBLIC")),Hn(new bn(bk,Ok,"PRIVATE"))}Vk();sn(lw,ep);sn(lw,ep,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="/firebase-messaging-sw.js",Mk="/firebase-cloud-messaging-push-scope",Rw="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Uk="https://fcmregistrations.googleapis.com/v1",kw="google.c.a.c_id",Fk="google.c.a.c_l",jk="google.c.a.ts",Bk="google.c.a.e",Qy=1e4;var Yy;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Yy||(Yy={}));/**
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
 */var yl;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(yl||(yl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function zk(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="fcm_token_details_db",$k=5,Jy="fcm_token_object_Store";async function qk(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(rf))return null;let e=null;return(await Hc(rf,$k,{upgrade:async(i,o,l,h)=>{if(o<2||!i.objectStoreNames.contains(Jy))return;const f=h.objectStore(Jy),g=await f.index("fcmSenderId").get(n);if(await f.clear(),!!g){if(o===2){const y=g;if(!y.auth||!y.p256dh||!y.endpoint)return;e={token:y.fcmToken,createTime:y.createTime??Date.now(),subscriptionOptions:{auth:y.auth,p256dh:y.p256dh,endpoint:y.endpoint,swScope:y.swScope,vapidKey:typeof y.vapidKey=="string"?y.vapidKey:Fr(y.vapidKey)}}}else if(o===3){const y=g;e={token:y.fcmToken,createTime:y.createTime,subscriptionOptions:{auth:Fr(y.auth),p256dh:Fr(y.p256dh),endpoint:y.endpoint,swScope:y.swScope,vapidKey:Fr(y.vapidKey)}}}else if(o===4){const y=g;e={token:y.fcmToken,createTime:y.createTime,subscriptionOptions:{auth:Fr(y.auth),p256dh:Fr(y.p256dh),endpoint:y.endpoint,swScope:y.swScope,vapidKey:Fr(y.vapidKey)}}}}}})).close(),await Yd(rf),await Yd("fcm_vapid_details_db"),await Yd("undefined"),Hk(e)?e:null}function Hk(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="firebase-messaging-database",Kk=1,_l="firebase-messaging-store";let sf=null;function Cw(){return sf||(sf=Hc(Wk,Kk,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_l)}}})),sf}async function Gk(n){const e=Pw(n),i=await(await Cw()).transaction(_l).objectStore(_l).get(e);if(i)return i;{const o=await qk(n.appConfig.senderId);if(o)return await ip(n,o),o}}async function ip(n,e){const t=Pw(n),o=(await Cw()).transaction(_l,"readwrite");return await o.objectStore(_l).put(e,t),await o.done,e}function Pw({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ht=new Us("messaging","Messaging",Qk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(n,e){const t=await op(n),i=xw(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(sp(n.appConfig),o)).json()}catch(h){throw Ht.create("token-subscribe-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw Ht.create("token-subscribe-failed",{errorInfo:h})}if(!l.token)throw Ht.create("token-subscribe-no-token");return l.token}async function Jk(n,e){const t=await op(n),i=xw(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${sp(n.appConfig)}/${e.token}`,o)).json()}catch(h){throw Ht.create("token-update-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw Ht.create("token-update-failed",{errorInfo:h})}if(!l.token)throw Ht.create("token-update-no-token");return l.token}async function Xk(n,e){const i={method:"DELETE",headers:await op(n)};try{const l=await(await fetch(`${sp(n.appConfig)}/${e}`,i)).json();if(l.error){const h=l.error.message;throw Ht.create("token-unsubscribe-failed",{errorInfo:h})}}catch(o){throw Ht.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function sp({projectId:n}){return`${Uk}/projects/${n}/registrations`}async function op({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function xw({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==Rw&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=10080*60*1e3;async function e1(n){const e=await n1(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Fr(e.getKey("auth")),p256dh:Fr(e.getKey("p256dh"))},i=await Gk(n.firebaseDependencies);if(i){if(r1(i.subscriptionOptions,t))return Date.now()>=i.createTime+Zk?t1(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await Xk(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return Xy(n.firebaseDependencies,t)}else return Xy(n.firebaseDependencies,t)}async function t1(n,e){try{const t=await Jk(n.firebaseDependencies,e),i={...e,token:t,createTime:Date.now()};return await ip(n.firebaseDependencies,i),t}catch(t){throw t}}async function Xy(n,e){const i={token:await Yk(n,e),createTime:Date.now(),subscriptionOptions:e};return await ip(n,i),i.token}async function n1(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:zk(e)})}function r1(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return i1(e,n),s1(e,n),o1(e,n),e}function i1(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function s1(n,e){e.data&&(n.data=e.data)}function o1(n,e){var o,l,h,f;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;n.fcmOptions={};const t=((l=e.fcmOptions)==null?void 0:l.link)??((h=e.notification)==null?void 0:h.click_action);t&&(n.fcmOptions.link=t);const i=(f=e.fcmOptions)==null?void 0:f.analytics_label;i&&(n.fcmOptions.analyticsLabel=i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(n){return typeof n=="object"&&!!n&&kw in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(n){if(!n||!n.options)throw of("App Configuration Object");if(!n.name)throw of("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw of(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function of(n){return Ht.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=l1(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(n){try{n.swRegistration=await navigator.serviceWorker.register(Lk,{scope:Mk}),n.swRegistration.update().catch(()=>{}),await h1(n.swRegistration)}catch(e){throw Ht.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function h1(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${Qy} ms`)),Qy),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var h;((h=l.target)==null?void 0:h.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(n,e){if(!e&&!n.swRegistration&&await c1(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ht.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Rw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(n,e){if(!navigator)throw Ht.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ht.create("permission-blocked");return await f1(n,e==null?void 0:e.vapidKey),await d1(n,e==null?void 0:e.serviceWorkerRegistration),e1(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(n,e,t){const i=m1(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[kw],message_name:t[Fk],message_time:t[jk],message_device_time:Math.floor(Date.now()/1e3)})}function m1(n){switch(n){case yl.NOTIFICATION_CLICKED:return"notification_open";case yl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===yl.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Zy(t)):n.onMessageHandler.next(Zy(t)));const i=t.data;a1(i)&&i[Bk]==="1"&&await p1(n,t.messageType,i)}const e_="@firebase/messaging",t_="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=n=>{const e=new u1(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>g1(e,t)),e},_1=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>Nw(e,i)}};function v1(){Hn(new bn("messaging",y1,"PUBLIC")),Hn(new bn("messaging-internal",_1,"PRIVATE")),sn(e_,t_),sn(e_,t_,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(){try{await Tv()}catch{return!1}return typeof window<"u"&&Ev()&&wI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(n,e){if(!navigator)throw Ht.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(n=Wc()){return w1().then(e=>{if(!e)throw Ht.create("unsupported-browser")},e=>{throw Ht.create("indexed-db-unsupported")}),js(Ke(n),"messaging").getImmediate()}async function I1(n,e){return n=Ke(n),Nw(n,e)}function S1(n,e){return n=Ke(n),E1(n,e)}v1();var n_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mi,bw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,k){function T(){}T.prototype=k.prototype,O.F=k.prototype,O.prototype=new T,O.prototype.constructor=O,O.D=function(P,S,D){for(var I=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)I[Se-2]=arguments[Se];return k.prototype[S].apply(P,I)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,k,T){T||(T=0);const P=Array(16);if(typeof k=="string")for(var S=0;S<16;++S)P[S]=k.charCodeAt(T++)|k.charCodeAt(T++)<<8|k.charCodeAt(T++)<<16|k.charCodeAt(T++)<<24;else for(S=0;S<16;++S)P[S]=k[T++]|k[T++]<<8|k[T++]<<16|k[T++]<<24;k=O.g[0],T=O.g[1],S=O.g[2];let D=O.g[3],I;I=k+(D^T&(S^D))+P[0]+3614090360&4294967295,k=T+(I<<7&4294967295|I>>>25),I=D+(S^k&(T^S))+P[1]+3905402710&4294967295,D=k+(I<<12&4294967295|I>>>20),I=S+(T^D&(k^T))+P[2]+606105819&4294967295,S=D+(I<<17&4294967295|I>>>15),I=T+(k^S&(D^k))+P[3]+3250441966&4294967295,T=S+(I<<22&4294967295|I>>>10),I=k+(D^T&(S^D))+P[4]+4118548399&4294967295,k=T+(I<<7&4294967295|I>>>25),I=D+(S^k&(T^S))+P[5]+1200080426&4294967295,D=k+(I<<12&4294967295|I>>>20),I=S+(T^D&(k^T))+P[6]+2821735955&4294967295,S=D+(I<<17&4294967295|I>>>15),I=T+(k^S&(D^k))+P[7]+4249261313&4294967295,T=S+(I<<22&4294967295|I>>>10),I=k+(D^T&(S^D))+P[8]+1770035416&4294967295,k=T+(I<<7&4294967295|I>>>25),I=D+(S^k&(T^S))+P[9]+2336552879&4294967295,D=k+(I<<12&4294967295|I>>>20),I=S+(T^D&(k^T))+P[10]+4294925233&4294967295,S=D+(I<<17&4294967295|I>>>15),I=T+(k^S&(D^k))+P[11]+2304563134&4294967295,T=S+(I<<22&4294967295|I>>>10),I=k+(D^T&(S^D))+P[12]+1804603682&4294967295,k=T+(I<<7&4294967295|I>>>25),I=D+(S^k&(T^S))+P[13]+4254626195&4294967295,D=k+(I<<12&4294967295|I>>>20),I=S+(T^D&(k^T))+P[14]+2792965006&4294967295,S=D+(I<<17&4294967295|I>>>15),I=T+(k^S&(D^k))+P[15]+1236535329&4294967295,T=S+(I<<22&4294967295|I>>>10),I=k+(S^D&(T^S))+P[1]+4129170786&4294967295,k=T+(I<<5&4294967295|I>>>27),I=D+(T^S&(k^T))+P[6]+3225465664&4294967295,D=k+(I<<9&4294967295|I>>>23),I=S+(k^T&(D^k))+P[11]+643717713&4294967295,S=D+(I<<14&4294967295|I>>>18),I=T+(D^k&(S^D))+P[0]+3921069994&4294967295,T=S+(I<<20&4294967295|I>>>12),I=k+(S^D&(T^S))+P[5]+3593408605&4294967295,k=T+(I<<5&4294967295|I>>>27),I=D+(T^S&(k^T))+P[10]+38016083&4294967295,D=k+(I<<9&4294967295|I>>>23),I=S+(k^T&(D^k))+P[15]+3634488961&4294967295,S=D+(I<<14&4294967295|I>>>18),I=T+(D^k&(S^D))+P[4]+3889429448&4294967295,T=S+(I<<20&4294967295|I>>>12),I=k+(S^D&(T^S))+P[9]+568446438&4294967295,k=T+(I<<5&4294967295|I>>>27),I=D+(T^S&(k^T))+P[14]+3275163606&4294967295,D=k+(I<<9&4294967295|I>>>23),I=S+(k^T&(D^k))+P[3]+4107603335&4294967295,S=D+(I<<14&4294967295|I>>>18),I=T+(D^k&(S^D))+P[8]+1163531501&4294967295,T=S+(I<<20&4294967295|I>>>12),I=k+(S^D&(T^S))+P[13]+2850285829&4294967295,k=T+(I<<5&4294967295|I>>>27),I=D+(T^S&(k^T))+P[2]+4243563512&4294967295,D=k+(I<<9&4294967295|I>>>23),I=S+(k^T&(D^k))+P[7]+1735328473&4294967295,S=D+(I<<14&4294967295|I>>>18),I=T+(D^k&(S^D))+P[12]+2368359562&4294967295,T=S+(I<<20&4294967295|I>>>12),I=k+(T^S^D)+P[5]+4294588738&4294967295,k=T+(I<<4&4294967295|I>>>28),I=D+(k^T^S)+P[8]+2272392833&4294967295,D=k+(I<<11&4294967295|I>>>21),I=S+(D^k^T)+P[11]+1839030562&4294967295,S=D+(I<<16&4294967295|I>>>16),I=T+(S^D^k)+P[14]+4259657740&4294967295,T=S+(I<<23&4294967295|I>>>9),I=k+(T^S^D)+P[1]+2763975236&4294967295,k=T+(I<<4&4294967295|I>>>28),I=D+(k^T^S)+P[4]+1272893353&4294967295,D=k+(I<<11&4294967295|I>>>21),I=S+(D^k^T)+P[7]+4139469664&4294967295,S=D+(I<<16&4294967295|I>>>16),I=T+(S^D^k)+P[10]+3200236656&4294967295,T=S+(I<<23&4294967295|I>>>9),I=k+(T^S^D)+P[13]+681279174&4294967295,k=T+(I<<4&4294967295|I>>>28),I=D+(k^T^S)+P[0]+3936430074&4294967295,D=k+(I<<11&4294967295|I>>>21),I=S+(D^k^T)+P[3]+3572445317&4294967295,S=D+(I<<16&4294967295|I>>>16),I=T+(S^D^k)+P[6]+76029189&4294967295,T=S+(I<<23&4294967295|I>>>9),I=k+(T^S^D)+P[9]+3654602809&4294967295,k=T+(I<<4&4294967295|I>>>28),I=D+(k^T^S)+P[12]+3873151461&4294967295,D=k+(I<<11&4294967295|I>>>21),I=S+(D^k^T)+P[15]+530742520&4294967295,S=D+(I<<16&4294967295|I>>>16),I=T+(S^D^k)+P[2]+3299628645&4294967295,T=S+(I<<23&4294967295|I>>>9),I=k+(S^(T|~D))+P[0]+4096336452&4294967295,k=T+(I<<6&4294967295|I>>>26),I=D+(T^(k|~S))+P[7]+1126891415&4294967295,D=k+(I<<10&4294967295|I>>>22),I=S+(k^(D|~T))+P[14]+2878612391&4294967295,S=D+(I<<15&4294967295|I>>>17),I=T+(D^(S|~k))+P[5]+4237533241&4294967295,T=S+(I<<21&4294967295|I>>>11),I=k+(S^(T|~D))+P[12]+1700485571&4294967295,k=T+(I<<6&4294967295|I>>>26),I=D+(T^(k|~S))+P[3]+2399980690&4294967295,D=k+(I<<10&4294967295|I>>>22),I=S+(k^(D|~T))+P[10]+4293915773&4294967295,S=D+(I<<15&4294967295|I>>>17),I=T+(D^(S|~k))+P[1]+2240044497&4294967295,T=S+(I<<21&4294967295|I>>>11),I=k+(S^(T|~D))+P[8]+1873313359&4294967295,k=T+(I<<6&4294967295|I>>>26),I=D+(T^(k|~S))+P[15]+4264355552&4294967295,D=k+(I<<10&4294967295|I>>>22),I=S+(k^(D|~T))+P[6]+2734768916&4294967295,S=D+(I<<15&4294967295|I>>>17),I=T+(D^(S|~k))+P[13]+1309151649&4294967295,T=S+(I<<21&4294967295|I>>>11),I=k+(S^(T|~D))+P[4]+4149444226&4294967295,k=T+(I<<6&4294967295|I>>>26),I=D+(T^(k|~S))+P[11]+3174756917&4294967295,D=k+(I<<10&4294967295|I>>>22),I=S+(k^(D|~T))+P[2]+718787259&4294967295,S=D+(I<<15&4294967295|I>>>17),I=T+(D^(S|~k))+P[9]+3951481745&4294967295,O.g[0]=O.g[0]+k&4294967295,O.g[1]=O.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,O.g[2]=O.g[2]+S&4294967295,O.g[3]=O.g[3]+D&4294967295}i.prototype.v=function(O,k){k===void 0&&(k=O.length);const T=k-this.blockSize,P=this.C;let S=this.h,D=0;for(;D<k;){if(S==0)for(;D<=T;)o(this,O,D),D+=this.blockSize;if(typeof O=="string"){for(;D<k;)if(P[S++]=O.charCodeAt(D++),S==this.blockSize){o(this,P),S=0;break}}else for(;D<k;)if(P[S++]=O[D++],S==this.blockSize){o(this,P),S=0;break}}this.h=S,this.o+=k},i.prototype.A=function(){var O=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);O[0]=128;for(var k=1;k<O.length-8;++k)O[k]=0;k=this.o*8;for(var T=O.length-8;T<O.length;++T)O[T]=k&255,k/=256;for(this.v(O),O=Array(16),k=0,T=0;T<4;++T)for(let P=0;P<32;P+=8)O[k++]=this.g[T]>>>P&255;return O};function l(O,k){var T=f;return Object.prototype.hasOwnProperty.call(T,O)?T[O]:T[O]=k(O)}function h(O,k){this.h=k;const T=[];let P=!0;for(let S=O.length-1;S>=0;S--){const D=O[S]|0;P&&D==k||(T[S]=D,P=!1)}this.g=T}var f={};function g(O){return-128<=O&&O<128?l(O,function(k){return new h([k|0],k<0?-1:0)}):new h([O|0],O<0?-1:0)}function y(O){if(isNaN(O)||!isFinite(O))return A;if(O<0)return q(y(-O));const k=[];let T=1;for(let P=0;O>=T;P++)k[P]=O/T|0,T*=4294967296;return new h(k,0)}function w(O,k){if(O.length==0)throw Error("number format error: empty string");if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(O.charAt(0)=="-")return q(w(O.substring(1),k));if(O.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=y(Math.pow(k,8));let P=A;for(let D=0;D<O.length;D+=8){var S=Math.min(8,O.length-D);const I=parseInt(O.substring(D,D+S),k);S<8?(S=y(Math.pow(k,S)),P=P.j(S).add(y(I))):(P=P.j(T),P=P.add(y(I)))}return P}var A=g(0),b=g(1),B=g(16777216);n=h.prototype,n.m=function(){if(J(this))return-q(this).m();let O=0,k=1;for(let T=0;T<this.g.length;T++){const P=this.i(T);O+=(P>=0?P:4294967296+P)*k,k*=4294967296}return O},n.toString=function(O){if(O=O||10,O<2||36<O)throw Error("radix out of range: "+O);if(G(this))return"0";if(J(this))return"-"+q(this).toString(O);const k=y(Math.pow(O,6));var T=this;let P="";for(;;){const S=ye(T,k).g;T=he(T,S.j(k));let D=((T.g.length>0?T.g[0]:T.h)>>>0).toString(O);if(T=S,G(T))return D+P;for(;D.length<6;)D="0"+D;P=D+P}},n.i=function(O){return O<0?0:O<this.g.length?this.g[O]:this.h};function G(O){if(O.h!=0)return!1;for(let k=0;k<O.g.length;k++)if(O.g[k]!=0)return!1;return!0}function J(O){return O.h==-1}n.l=function(O){return O=he(this,O),J(O)?-1:G(O)?0:1};function q(O){const k=O.g.length,T=[];for(let P=0;P<k;P++)T[P]=~O.g[P];return new h(T,~O.h).add(b)}n.abs=function(){return J(this)?q(this):this},n.add=function(O){const k=Math.max(this.g.length,O.g.length),T=[];let P=0;for(let S=0;S<=k;S++){let D=P+(this.i(S)&65535)+(O.i(S)&65535),I=(D>>>16)+(this.i(S)>>>16)+(O.i(S)>>>16);P=I>>>16,D&=65535,I&=65535,T[S]=I<<16|D}return new h(T,T[T.length-1]&-2147483648?-1:0)};function he(O,k){return O.add(q(k))}n.j=function(O){if(G(this)||G(O))return A;if(J(this))return J(O)?q(this).j(q(O)):q(q(this).j(O));if(J(O))return q(this.j(q(O)));if(this.l(B)<0&&O.l(B)<0)return y(this.m()*O.m());const k=this.g.length+O.g.length,T=[];for(var P=0;P<2*k;P++)T[P]=0;for(P=0;P<this.g.length;P++)for(let S=0;S<O.g.length;S++){const D=this.i(P)>>>16,I=this.i(P)&65535,Se=O.i(S)>>>16,rt=O.i(S)&65535;T[2*P+2*S]+=I*rt,ue(T,2*P+2*S),T[2*P+2*S+1]+=D*rt,ue(T,2*P+2*S+1),T[2*P+2*S+1]+=I*Se,ue(T,2*P+2*S+1),T[2*P+2*S+2]+=D*Se,ue(T,2*P+2*S+2)}for(O=0;O<k;O++)T[O]=T[2*O+1]<<16|T[2*O];for(O=k;O<2*k;O++)T[O]=0;return new h(T,0)};function ue(O,k){for(;(O[k]&65535)!=O[k];)O[k+1]+=O[k]>>>16,O[k]&=65535,k++}function pe(O,k){this.g=O,this.h=k}function ye(O,k){if(G(k))throw Error("division by zero");if(G(O))return new pe(A,A);if(J(O))return k=ye(q(O),k),new pe(q(k.g),q(k.h));if(J(k))return k=ye(O,q(k)),new pe(q(k.g),k.h);if(O.g.length>30){if(J(O)||J(k))throw Error("slowDivide_ only works with positive integers.");for(var T=b,P=k;P.l(O)<=0;)T=ke(T),P=ke(P);var S=Ie(T,1),D=Ie(P,1);for(P=Ie(P,2),T=Ie(T,2);!G(P);){var I=D.add(P);I.l(O)<=0&&(S=S.add(T),D=I),P=Ie(P,1),T=Ie(T,1)}return k=he(O,S.j(k)),new pe(S,k)}for(S=A;O.l(k)>=0;){for(T=Math.max(1,Math.floor(O.m()/k.m())),P=Math.ceil(Math.log(T)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),D=y(T),I=D.j(k);J(I)||I.l(O)>0;)T-=P,D=y(T),I=D.j(k);G(D)&&(D=b),S=S.add(D),O=he(O,I)}return new pe(S,O)}n.B=function(O){return ye(this,O).h},n.and=function(O){const k=Math.max(this.g.length,O.g.length),T=[];for(let P=0;P<k;P++)T[P]=this.i(P)&O.i(P);return new h(T,this.h&O.h)},n.or=function(O){const k=Math.max(this.g.length,O.g.length),T=[];for(let P=0;P<k;P++)T[P]=this.i(P)|O.i(P);return new h(T,this.h|O.h)},n.xor=function(O){const k=Math.max(this.g.length,O.g.length),T=[];for(let P=0;P<k;P++)T[P]=this.i(P)^O.i(P);return new h(T,this.h^O.h)};function ke(O){const k=O.g.length+1,T=[];for(let P=0;P<k;P++)T[P]=O.i(P)<<1|O.i(P-1)>>>31;return new h(T,O.h)}function Ie(O,k){const T=k>>5;k%=32;const P=O.g.length-T,S=[];for(let D=0;D<P;D++)S[D]=k>0?O.i(D+T)>>>k|O.i(D+T+1)<<32-k:O.i(D+T);return new h(S,O.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,bw=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,Mi=h}).apply(typeof n_<"u"?n_:typeof self<"u"?self:typeof window<"u"?window:{});var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dw,il,Ow,mc,Sf,Vw,Lw,Mw;(function(){var n,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ec=="object"&&ec];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in _))break e;_=_[M]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var _=[],E;for(E in m)Object.prototype.hasOwnProperty.call(m,E)&&_.push([E,m[E]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,_){return u.call.apply(u.bind,arguments)}function y(u,m,_){return y=g,y.apply(null,arguments)}function w(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function A(u,m){function _(){}_.prototype=m.prototype,u.Z=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(E,M,j){for(var Z=Array(arguments.length-2),we=2;we<arguments.length;we++)Z[we-2]=arguments[we];return m.prototype[M].apply(E,Z)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function B(u){const m=u.length;if(m>0){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function G(u,m){for(let E=1;E<arguments.length;E++){const M=arguments[E];var _=typeof M;if(_=_!="object"?_:M?Array.isArray(M)?"array":_:"null",_=="array"||_=="object"&&typeof M.length=="number"){_=u.length||0;const j=M.length||0;u.length=_+j;for(let Z=0;Z<j;Z++)u[_+Z]=M[Z]}else u.push(M)}}class J{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function q(u){h.setTimeout(()=>{throw u},0)}function he(){var u=O;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ue{constructor(){this.h=this.g=null}add(m,_){const E=pe.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var pe=new J(()=>new ye,u=>u.reset());class ye{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,Ie=!1,O=new ue,k=()=>{const u=Promise.resolve(void 0);ke=()=>{u.then(T)}};function T(){for(var u;u=he();){try{u.h.call(u.g)}catch(_){q(_)}var m=pe;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Ie=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var D=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u})();function I(u){return/^[\s\xa0]*$/.test(u)}function Se(u,m){S.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}A(Se,S),Se.prototype.init=function(u,m){const _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(_=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var rt="closure_listenable_"+(Math.random()*1e6|0),It=0;function ze(u,m,_,E,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=M,this.key=++It,this.da=this.fa=!1}function Y(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ne(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function x(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function H(u){const m={};for(const _ in u)m[_]=u[_];return m}const le="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(u,m){let _,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(_ in E)u[_]=E[_];for(let j=0;j<le.length;j++)_=le[j],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function Te(u){this.src=u,this.g={},this.h=0}Te.prototype.add=function(u,m,_,E,M){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const Z=Ne(u,m,E,M);return Z>-1?(m=u[Z],_||(m.fa=!1)):(m=new ze(m,this.src,j,!!E,M),m.fa=_,u.push(m)),m};function Fe(u,m){const _=m.type;if(_ in u.g){var E=u.g[_],M=Array.prototype.indexOf.call(E,m,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(Y(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Ne(u,m,_,E){for(let M=0;M<u.length;++M){const j=u[M];if(!j.da&&j.listener==m&&j.capture==!!_&&j.ha==E)return M}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),De={};function Ct(u,m,_,E,M){if(Array.isArray(m)){for(let j=0;j<m.length;j++)Ct(u,m[j],_,E,M);return null}return _=ia(_),u&&u[rt]?u.J(m,_,f(E)?!!E.capture:!1,M):_h(u,m,_,!1,E,M)}function _h(u,m,_,E,M,j){if(!m)throw Error("Invalid event type");const Z=f(M)?!!M.capture:!!M;let we=Ks(u);if(we||(u[Me]=we=new Te(u)),_=we.add(m,_,E,Z,j),_.proxy)return _;if(E=Hs(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)D||(M=Z),M===void 0&&(M=!1),u.addEventListener(m.toString(),E,M);else if(u.attachEvent)u.attachEvent(Ws(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Hs(){function u(_){return m.call(u.src,u.listener,_)}const m=Ml;return u}function ra(u,m,_,E,M){if(Array.isArray(m))for(var j=0;j<m.length;j++)ra(u,m[j],_,E,M);else E=f(E)?!!E.capture:!!E,_=ia(_),u&&u[rt]?(u=u.i,j=String(m).toString(),j in u.g&&(m=u.g[j],_=Ne(m,_,E,M),_>-1&&(Y(m[_]),Array.prototype.splice.call(m,_,1),m.length==0&&(delete u.g[j],u.h--)))):u&&(u=Ks(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Ne(m,_,E,M)),(_=u>-1?m[u]:null)&&Xr(_))}function Xr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[rt])Fe(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(Ws(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=Ks(m))?(Fe(_,u),_.h==0&&(_.src=null,m[Me]=null)):Y(u)}}}function Ws(u){return u in De?De[u]:De[u]="on"+u}function Ml(u,m){if(u.da)u=!0;else{m=new Se(m,this);const _=u.listener,E=u.ha||u.src;u.fa&&Xr(u),u=_.call(E,m)}return u}function Ks(u){return u=u[Me],u instanceof Te?u:null}var Qi="__closure_events_fn_"+(Math.random()*1e9>>>0);function ia(u){return typeof u=="function"?u:(u[Qi]||(u[Qi]=function(m){return u.handleEvent(m)}),u[Qi])}function ft(){P.call(this),this.i=new Te(this),this.M=this,this.G=null}A(ft,P),ft.prototype[rt]=!0,ft.prototype.removeEventListener=function(u,m,_,E){ra(this,u,m,_,E)};function ut(u,m){var _,E=u.G;if(E)for(_=[];E;E=E.G)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new S(m,u);else if(m instanceof S)m.target=m.target||u;else{var M=m;m=new S(E,u),Ae(m,M)}M=!0;let j,Z;if(_)for(Z=_.length-1;Z>=0;Z--)j=m.g=_[Z],M=Dn(j,E,!0,m)&&M;if(j=m.g=u,M=Dn(j,E,!0,m)&&M,M=Dn(j,E,!1,m)&&M,_)for(Z=0;Z<_.length;Z++)j=m.g=_[Z],M=Dn(j,E,!1,m)&&M}ft.prototype.N=function(){if(ft.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const _=u.g[m];for(let E=0;E<_.length;E++)Y(_[E]);delete u.g[m],u.h--}}this.G=null},ft.prototype.J=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},ft.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function Dn(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let M=!0;for(let j=0;j<m.length;++j){const Z=m[j];if(Z&&!Z.da&&Z.capture==_){const we=Z.listener,ct=Z.ha||Z.src;Z.fa&&Fe(u.i,Z),M=we.call(ct,E)!==!1&&M}}return M&&!E.defaultPrevented}function sa(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function oa(u){u.g=sa(()=>{u.g=null,u.i&&(u.i=!1,oa(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ul extends P{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:oa(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(u){P.call(this),this.h=u,this.g={}}A(Zr,P);var aa=[];function Gs(u){ne(u.g,function(m,_){this.g.hasOwnProperty(_)&&Xr(m)},u),u.g={}}Zr.prototype.N=function(){Zr.Z.N.call(this),Gs(this)},Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ei=h.JSON.stringify,Fl=h.JSON.parse,Yi=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function ti(){}function jl(){}var ni={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Qs(){S.call(this,"d")}A(Qs,S);function la(){S.call(this,"c")}A(la,S);var On={},Ys=null;function ri(){return Ys=Ys||new ft}On.Ia="serverreachability";function Js(u){S.call(this,On.Ia,u)}A(Js,S);function Er(u){const m=ri();ut(m,new Js(m))}On.STAT_EVENT="statevent";function Tr(u,m){S.call(this,On.STAT_EVENT,u),this.stat=m}A(Tr,S);function it(u){const m=ri();ut(m,new Tr(m,u))}On.Ja="timingevent";function ua(u,m){S.call(this,On.Ja,u),this.size=m}A(ua,S);function ii(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function si(){this.g=!0}si.prototype.ua=function(){this.g=!1};function Bl(u,m,_,E,M,j){u.info(function(){if(u.g)if(j){var Z="",we=j.split("&");for(let Be=0;Be<we.length;Be++){var ct=we[Be].split("=");if(ct.length>1){const pt=ct[0];ct=ct[1];const dn=pt.split("_");Z=dn.length>=2&&dn[1]=="type"?Z+(pt+"="+ct+"&"):Z+(pt+"=redacted&")}}}else Z=null;else Z=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+m+`
`+_+`
`+Z})}function zl(u,m,_,E,M,j,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+m+`
`+_+`
`+j+" "+Z})}function Qn(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ji(u,_)+(E?" "+E:"")})}function $l(u,m){u.info(function(){return"TIMEOUT: "+m})}si.prototype.info=function(){};function Ji(u,m){if(!u.g)return m;if(!m)return null;try{const j=JSON.parse(m);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var _=j[u];if(!(_.length<2)){var E=_[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Z=1;Z<E.length;Z++)E[Z]=""}}}}return ei(j)}catch{return m}}var oi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ai={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ql;function Ir(){}A(Ir,ti),Ir.prototype.g=function(){return new XMLHttpRequest},ql=new Ir;function Yn(u){return encodeURIComponent(String(u))}function Xs(u){var m=1;u=u.split(":");const _=[];for(;m>0&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function En(u,m,_,E){this.j=u,this.i=m,this.l=_,this.S=E||1,this.V=new Zr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hl}function Hl(){this.i=null,this.g="",this.h=!1}var Wl={},ca={};function Vn(u,m,_){u.M=1,u.A=Ar(Tn(m)),u.u=_,u.R=!0,ha(u,null)}function ha(u,m){u.F=Date.now(),Xi(u),u.B=Tn(u.A);var _=u.B,E=u.S;Array.isArray(E)||(E=[String(E)]),Ea(_.i,"t",E),u.C=0,_=u.j.L,u.h=new Hl,u.g=nu(u.j,_?m:null,!u.u),u.P>0&&(u.O=new Ul(y(u.Y,u,u.g),u.P)),m=u.V,_=u.g,E=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(aa[0]=M.toString()),M=aa);for(let j=0;j<M.length;j++){const Z=Ct(_,M[j],E||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.J?H(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),Er(),Bl(u.i,u.v,u.B,u.l,u.S,u.u)}En.prototype.ba=function(u){u=u.target;const m=this.O;m&&rr(u)==3?m.j():this.Y(u)},En.prototype.Y=function(u){try{if(u==this.g)e:{const we=rr(this.g),ct=this.g.ya(),Be=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||eu(this.g)))){this.K||we!=4||ct==7||(ct==8||Be<=0?Er(3):Er(2)),Zs(this);var m=this.g.ca();this.X=m;var _=Kl(this);if(this.o=m==200,zl(this.i,this.v,this.B,this.l,this.S,we,m),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(E)){var j=E;break t}}j=null}if(u=j)Qn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,u);else{this.o=!1,this.m=3,it(12),Sr(this),Zi(this);break e}}if(this.R){u=!0;let pt;for(;!this.K&&this.C<_.length;)if(pt=Ql(this,_),pt==ca){we==4&&(this.m=4,it(14),u=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==Wl){this.m=4,it(15),Qn(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else Qn(this.i,this.l,pt,null),Ge(this,pt);if(Gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||_.length!=0||this.h.h||(this.m=1,it(16),u=!1),this.o=this.o&&u,!u)Qn(this.i,this.l,_,"[Invalid Chunked Response]"),Sr(this),Zi(this);else if(_.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),ls(Z),Z.P=!0,it(11))}}else Qn(this.i,this.l,_,null),Ge(this,_);we==4&&Sr(this),this.o&&!this.K&&(we==4?uo(this.j,this):(this.o=!1,Xi(this)))}else Ia(this.g),m==400&&_.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),Sr(this),Zi(this)}}}catch{}finally{}};function Kl(u){if(!Gl(u))return u.g.la();const m=eu(u.g);if(m==="")return"";let _="";const E=m.length,M=rr(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return Sr(u),Zi(u),"";u.h.i=new h.TextDecoder}for(let j=0;j<E;j++)u.h.h=!0,_+=u.h.i.decode(m[j],{stream:!(M&&j==E-1)});return m.length=0,u.h.g+=_,u.C=0,u.h.g}function Gl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Ql(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?ca:(_=Number(m.substring(_,E)),isNaN(_)?Wl:(E+=1,E+_>m.length?ca:(m=m.slice(E,E+_),u.C=E+_,m)))}En.prototype.cancel=function(){this.K=!0,Sr(this)};function Xi(u){u.T=Date.now()+u.H,da(u,u.H)}function da(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=ii(y(u.aa,u),m)}function Zs(u){u.D&&(h.clearTimeout(u.D),u.D=null)}En.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?($l(this.i,this.B),this.M!=2&&(Er(),it(17)),Sr(this),this.m=2,Zi(this)):da(this,this.T-u)};function Zi(u){u.j.I==0||u.K||uo(u.j,u)}function Sr(u){Zs(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Gs(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ge(u,m){try{var _=u.j;if(_.I!=0&&(_.g==u||pa(_.h,u))){if(!u.L&&pa(_.h,u)&&_.I==3){try{var E=_.Ba.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)lo(_),cn(_);else break e;or(_),it(18)}}else _.xa=M[1],0<_.xa-_.K&&M[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=ii(y(_.Va,_),6e3));es(_.h)<=1&&_.ta&&(_.ta=void 0)}else hn(_,11)}else if((u.L||_.g==u)&&lo(_),!I(m))for(M=_.Ba.g.parse(m),m=0;m<M.length;m++){let Be=M[m];const pt=Be[0];if(!(pt<=_.K))if(_.K=pt,Be=Be[1],_.I==2)if(Be[0]=="c"){_.M=Be[1],_.ba=Be[2];const dn=Be[3];dn!=null&&(_.ka=dn,_.j.info("VER="+_.ka));const xr=Be[4];xr!=null&&(_.za=xr,_.j.info("SVER="+_.za));const ar=Be[5];ar!=null&&typeof ar=="number"&&ar>0&&(E=1.5*ar,_.O=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const lr=u.g;if(lr){const fo=lr.g?lr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fo){var j=E.h;j.g||fo.indexOf("spdy")==-1&&fo.indexOf("quic")==-1&&fo.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(to(j,j.h),j.h=null))}if(E.G){const Ra=lr.g?lr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ra&&(E.wa=Ra,Ue(E.J,E.G,Ra))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),E=_;var Z=u;if(E.na=Aa(E,E.L?E.ba:null,E.W),Z.L){ts(E.h,Z);var we=Z,ct=E.O;ct&&(we.H=ct),we.D&&(Zs(we),Xi(we)),E.g=Z}else Lt(E);_.i.length>0&&Pr(_)}else Be[0]!="stop"&&Be[0]!="close"||hn(_,7);else _.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?hn(_,7):oo(_):Be[0]!="noop"&&_.l&&_.l.qa(Be),_.A=0)}}Er(4)}catch{}}var vh=class{constructor(u,m){this.g=u,this.map=m}};function eo(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function es(u){return u.h?1:u.g?u.g.size:0}function pa(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function to(u,m){u.g?u.g.add(m):u.h=m}function ts(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}eo.prototype.cancel=function(){if(this.i=an(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function an(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.G);return m}return B(u.i)}var Yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ln(u,m){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const E=u[_].indexOf("=");let M,j=null;E>=0?(M=u[_].substring(0,E),j=u[_].substring(E+1)):M=u[_],m(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Jn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Jn?(this.l=u.l,ns(this,u.j),this.o=u.o,this.g=u.g,Xn(this,u.u),this.h=u.h,li(this,Ta(u.i)),this.m=u.m):u&&(m=String(u).match(Yl))?(this.l=!1,ns(this,m[1]||"",!0),this.o=rs(m[2]||""),this.g=rs(m[3]||"",!0),Xn(this,m[4]),this.h=rs(m[5]||"",!0),li(this,m[6]||"",!0),this.m=rs(m[7]||"")):(this.l=!1,this.i=new be(null,this.l))}Jn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(is(m,ga,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(is(m,ga,!0),"@"),u.push(Yn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(is(_,_.charAt(0)=="/"?ss:ya,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",is(_,_a)),u.join("")},Jn.prototype.resolve=function(u){const m=Tn(this);let _=!!u.j;_?ns(m,u.j):_=!!u.o,_?m.o=u.o:_=!!u.g,_?m.g=u.g:_=u.u!=null;var E=u.h;if(_)Xn(m,u.u);else if(_=!!u.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=m.h.lastIndexOf("/");M!=-1&&(E=m.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let Z=0;Z<M.length;){const we=M[Z++];we=="."?E&&Z==M.length&&j.push(""):we==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&Z==M.length&&j.push("")):(j.push(we),E=!0)}E=j.join("/")}else E=M}return _?m.h=E:_=u.i.toString()!=="",_?li(m,Ta(u.i)):_=!!u.m,_&&(m.m=u.m),m};function Tn(u){return new Jn(u)}function ns(u,m,_){u.j=_?rs(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Xn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function li(u,m,_){m instanceof be?(u.i=m,ro(u.i,u.l)):(_||(m=is(m,wh)),u.i=new be(m,u.l))}function Ue(u,m,_){u.i.set(m,_)}function Ar(u){return Ue(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function rs(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function is(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,ma),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ma(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ga=/[#\/\?@]/g,ya=/[#\?:]/g,ss=/[#\?]/g,wh=/[#\?@]/g,_a=/#/g;function be(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Zn(u){u.g||(u.g=new Map,u.h=0,u.i&&ln(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=be.prototype,n.add=function(u,m){Zn(this),this.i=null,u=er(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function va(u,m){Zn(u),m=er(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function no(u,m){return Zn(u),m=er(u,m),u.g.has(m)}n.forEach=function(u,m){Zn(this),this.g.forEach(function(_,E){_.forEach(function(M){u.call(m,M,E,this)},this)},this)};function wa(u,m){Zn(u);let _=[];if(typeof m=="string")no(u,m)&&(_=_.concat(u.g.get(er(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)_=_.concat(u[m]);return _}n.set=function(u,m){return Zn(this),this.i=null,u=er(this,u),no(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=wa(this,u),u.length>0?String(u[0]):m):m};function Ea(u,m,_){va(u,m),_.length>0&&(u.i=null,u.g.set(er(u,m),B(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let E=0;E<m.length;E++){var _=m[E];const M=Yn(_);_=wa(this,_);for(let j=0;j<_.length;j++){let Z=M;_[j]!==""&&(Z+="="+Yn(_[j])),u.push(Z)}}return this.i=u.join("&")};function Ta(u){const m=new be;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function er(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function ro(u,m){m&&!u.j&&(Zn(u),u.i=null,u.g.forEach(function(_,E){const M=E.toLowerCase();E!=M&&(va(this,E),Ea(this,M,_))},u)),u.j=m}function tr(u,m){const _=new si;if(h.Image){const E=new Image;E.onload=w(Pt,_,"TestLoadImage: loaded",!0,m,E),E.onerror=w(Pt,_,"TestLoadImage: error",!1,m,E),E.onabort=w(Pt,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=w(Pt,_,"TestLoadImage: timeout",!1,m,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function nr(u,m){const _=new si,E=new AbortController,M=setTimeout(()=>{E.abort(),Pt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?Pt(_,"TestPingServer: ok",!0,m):Pt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Pt(_,"TestPingServer: error",!1,m)})}function Pt(u,m,_,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(_)}catch{}}function os(){this.g=new Yi}function Rr(u){this.i=u.Sb||null,this.h=u.ab||!1}A(Rr,ti),Rr.prototype.g=function(){return new un(this.i,this.h)};function un(u,m){ft.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(un,ft),n=un.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Ln(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ui(this):Ln(this),this.readyState==3&&Jl(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,ui(this))},n.Na=function(u){this.g&&(this.response=u,ui(this))},n.ga=function(){this.g&&ui(this)};function ui(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Ln(u)}n.setRequestHeader=function(u,m){this.A.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Xl(u){let m="";return ne(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function io(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=Xl(_),typeof u=="string"?_!=null&&Yn(_):Ue(u,m,_))}function $e(u){ft.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A($e,ft);var Zl=/^https?$/i,Eh=["POST","PUT"];n=$e.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ql.g(),this.g.onreadystatechange=b(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(j){ci(this,j);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)_.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())_.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(Eh,m,void 0)>=0)||E||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of _)this.g.setRequestHeader(j,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){ci(this,j)}};function ci(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,hi(u),Cr(u)}function hi(u){u.A||(u.A=!0,ut(u,"complete"),ut(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,ut(this,"complete"),ut(this,"abort"),Cr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cr(this,!0)),$e.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?kr(this):this.Xa())},n.Xa=function(){kr(this)};function kr(u){if(u.h&&typeof l<"u"){if(u.v&&rr(u)==4)setTimeout(u.Ca.bind(u),0);else if(ut(u,"readystatechange"),rr(u)==4){u.h=!1;try{const j=u.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=j===0){let Z=String(u.D).match(Yl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),E=!Zl.test(Z?Z.toLowerCase():"")}_=E}if(_)ut(u,"complete"),ut(u,"success");else{u.o=6;try{var M=rr(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",hi(u)}}finally{Cr(u)}}}}function Cr(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,m||ut(u,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function rr(u){return u.g?u.g.readyState:0}n.ca=function(){try{return rr(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Fl(m)}};function eu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ia(u){const m={};u=(u.g&&rr(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(I(u[E]))continue;var _=Xs(u[E]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const j=m[M]||[];m[M]=j,j.push(_)}x(m,function(E){return E.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function so(u){this.za=0,this.i=[],this.j=new si,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ir("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ir("baseRetryDelayMs",5e3,u),this.Za=ir("retryDelaySeedMs",1e4,u),this.Ta=ir("forwardChannelMaxRetries",2,u),this.va=ir("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new eo(u&&u.concurrentRequestLimit),this.Ba=new os,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=so.prototype,n.ka=8,n.I=1,n.connect=function(u,m,_,E){it(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.J=Aa(this,null,this.W),Pr(this)};function oo(u){if(ao(u),u.I==3){var m=u.V++,_=Tn(u.J);if(Ue(_,"SID",u.M),Ue(_,"RID",m),Ue(_,"TYPE","terminate"),sr(u,_),m=new En(u,u.j,m),m.M=2,m.A=Ar(Tn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.A,_=!0),_||(m.g=nu(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Xi(m)}us(u)}function cn(u){u.g&&(ls(u),u.g.cancel(),u.g=null)}function ao(u){cn(u),u.v&&(h.clearTimeout(u.v),u.v=null),lo(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Pr(u){if(!fa(u.h)&&!u.m){u.m=!0;var m=u.Ea;ke||k(),Ie||(ke(),Ie=!0),O.add(m,u),u.D=0}}function tu(u,m){return es(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=ii(y(u.Ea,u,m),co(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new En(this,this.j,u);let j=this.o;if(this.U&&(j?(j=H(j),Ae(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,m>4096){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Sa(this,M,m),_=Tn(this.J),Ue(_,"RID",u),Ue(_,"CVER",22),this.G&&Ue(_,"X-HTTP-Session-Id",this.G),sr(this,_),j&&(this.R?m="headers="+Yn(Xl(j))+"&"+m:this.u&&io(_,this.u,j)),to(this.h,M),this.Ra&&Ue(_,"TYPE","init"),this.S?(Ue(_,"$req",m),Ue(_,"SID","null"),M.U=!0,Vn(M,_,null)):Vn(M,_,m),this.I=2}}else this.I==3&&(u?as(this,u):this.i.length==0||fa(this.h)||as(this))};function as(u,m){var _;m?_=m.l:_=u.V++;const E=Tn(u.J);Ue(E,"SID",u.M),Ue(E,"RID",_),Ue(E,"AID",u.K),sr(u,E),u.u&&u.o&&io(E,u.u,u.o),_=new En(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),m&&(u.i=m.G.concat(u.i)),m=Sa(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),to(u.h,_),Vn(_,E,m)}function sr(u,m){u.H&&ne(u.H,function(_,E){Ue(m,E,_)}),u.l&&ne({},function(_,E){Ue(m,E,_)})}function Sa(u,m,_){_=Math.min(u.i.length,_);const E=u.l?y(u.l.Ka,u.l,u):null;e:{var M=u.i;let we=-1;for(;;){const ct=["count="+_];we==-1?_>0?(we=M[0].g,ct.push("ofs="+we)):we=0:ct.push("ofs="+we);let Be=!0;for(let pt=0;pt<_;pt++){var j=M[pt].g;const dn=M[pt].map;if(j-=we,j<0)we=Math.max(0,M[pt].g-100),Be=!1;else try{j="req"+j+"_"||"";try{var Z=dn instanceof Map?dn:Object.entries(dn);for(const[xr,ar]of Z){let lr=ar;f(ar)&&(lr=ei(ar)),ct.push(j+xr+"="+encodeURIComponent(lr))}}catch(xr){throw ct.push(j+"type="+encodeURIComponent("_badmap")),xr}}catch{E&&E(dn)}}if(Be){Z=ct.join("&");break e}}Z=void 0}return u=u.i.splice(0,_),m.G=u,Z}function Lt(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;ke||k(),Ie||(ke(),Ie=!0),O.add(m,u),u.A=0}}function or(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=ii(y(u.Da,u),co(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,di(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=ii(y(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),cn(this),di(this))};function ls(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function di(u){u.g=new En(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=Tn(u.na);Ue(m,"RID","rpc"),Ue(m,"SID",u.M),Ue(m,"AID",u.K),Ue(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Ue(m,"TO",u.ia),Ue(m,"TYPE","xmlhttp"),sr(u,m),u.u&&u.o&&io(m,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=Ar(Tn(m)),_.u=null,_.R=!0,ha(_,u)}n.Va=function(){this.C!=null&&(this.C=null,cn(this),or(this),it(19))};function lo(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function uo(u,m){var _=null;if(u.g==m){lo(u),ls(u),u.g=null;var E=2}else if(pa(u.h,m))_=m.G,ts(u.h,m),E=1;else return;if(u.I!=0){if(m.o)if(E==1){_=m.u?m.u.length:0,m=Date.now()-m.F;var M=u.D;E=ri(),ut(E,new ua(E,_)),Pr(u)}else Lt(u);else if(M=m.m,M==3||M==0&&m.X>0||!(E==1&&tu(u,m)||E==2&&or(u)))switch(_&&_.length>0&&(m=u.h,m.i=m.i.concat(_)),M){case 1:hn(u,5);break;case 4:hn(u,10);break;case 3:hn(u,6);break;default:hn(u,2)}}}function co(u,m){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*m}function hn(u,m){if(u.j.info("Error code "+m),m==2){var _=y(u.bb,u),E=u.Ua;const M=!E;E=new Jn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||ns(E,"https"),Ar(E),M?tr(E.toString(),_):nr(E.toString(),_)}else it(2);u.I=0,u.l&&u.l.pa(m),us(u),ao(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function us(u){if(u.I=0,u.ja=[],u.l){const m=an(u.h);(m.length!=0||u.i.length!=0)&&(G(u.ja,m),G(u.ja,u.i),u.h.i.length=0,B(u.i),u.i.length=0),u.l.oa()}}function Aa(u,m,_){var E=_ instanceof Jn?Tn(_):new Jn(_);if(E.g!="")m&&(E.g=m+"."+E.g),Xn(E,E.u);else{var M=h.location;E=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;const j=new Jn(null);E&&ns(j,E),m&&(j.g=m),M&&Xn(j,M),_&&(j.h=_),E=j}return _=u.G,m=u.wa,_&&m&&Ue(E,_,m),Ue(E,"VER",u.ka),sr(u,E),E}function nu(u,m,_){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new $e(new Rr({ab:_})):new $e(u.ma),m.Fa(u.L),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ru(){}n=ru.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ho(){}ho.prototype.g=function(u,m){return new xt(u,m)};function xt(u,m){ft.call(this),this.g=new so(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!I(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!I(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new fi(this)}A(xt,ft),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){oo(this.g)},xt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=ei(u),u=_);m.i.push(new vh(m.Ya++,u)),m.I==3&&Pr(m)},xt.prototype.N=function(){this.g.l=null,delete this.j,oo(this.g),delete this.g,xt.Z.N.call(this)};function iu(u){Qs.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}A(iu,Qs);function su(){la.call(this),this.status=1}A(su,la);function fi(u){this.g=u}A(fi,ru),fi.prototype.ra=function(){ut(this.g,"a")},fi.prototype.qa=function(u){ut(this.g,new iu(u))},fi.prototype.pa=function(u){ut(this.g,new su)},fi.prototype.oa=function(){ut(this.g,"b")},ho.prototype.createWebChannel=ho.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Mw=function(){return new ho},Lw=function(){return ri()},Vw=On,Sf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},oi.NO_ERROR=0,oi.TIMEOUT=8,oi.HTTP_ERROR=6,mc=oi,ai.COMPLETE="complete",Ow=ai,jl.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",ft.prototype.listen=ft.prototype.J,il=jl,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,Dw=$e}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Xo="12.11.0";function A1(n){Xo=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ds=new qf("@firebase/firestore");function Vo(){return Ds.logLevel}function re(n,...e){if(Ds.logLevel<=Ce.DEBUG){const t=e.map(ap);Ds.debug(`Firestore (${Xo}): ${n}`,...t)}}function Gr(n,...e){if(Ds.logLevel<=Ce.ERROR){const t=e.map(ap);Ds.error(`Firestore (${Xo}): ${n}`,...t)}}function Os(n,...e){if(Ds.logLevel<=Ce.WARN){const t=e.map(ap);Ds.warn(`Firestore (${Xo}): ${n}`,...t)}}function ap(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Uw(n,i,t)}function Uw(n,e,t){let i=`FIRESTORE (${Xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Gr(i),new Error(i)}function je(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Uw(e,o,i)}function Ee(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($t.UNAUTHENTICATED)))}shutdown(){}}class k1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class C1{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Hr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Hr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string",31837,{l:i}),new Fw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new $t(e)}}class P1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class x1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new P1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t($t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class r_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const i=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new r_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new r_(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=b1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Pe(n,e){return n<e?-1:n>e?1:0}function Af(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return af(o)===af(l)?Pe(o,l):af(o)?1:-1}return Pe(n.length,e.length)}const D1=55296,O1=57343;function af(n){const e=n.charCodeAt(0);return e>=D1&&e<=O1}function Wo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="__name__";class fr{constructor(e,t,i){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ge(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=fr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Pe(e.length,t.length)}static compareSegments(e,t){const i=fr.isNumericId(e),o=fr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?fr.extractNumericId(e).compare(fr.extractNumericId(t)):Af(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mi.fromString(e.substring(4,e.length-2))}}class We extends fr{construct(e,t,i){return new We(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ee(z.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const V1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends fr{construct(e,t,i){return new Ot(e,t,i)}static isValidIdentifier(e){return V1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===i_}static keyField(){return new Ot([i_])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ee(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ee(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(t)}static emptyPath(){return new Ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(We.fromString(e))}static fromName(e){return new ce(We.fromString(e).popFirst(5))}static empty(){return new ce(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new We(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n,e,t){if(!t)throw new ee(z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function L1(n,e,t,i){if(e===!0&&i===!0)throw new ee(z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function s_(n){if(!ce.isDocumentKey(n))throw new ee(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function o_(n){if(ce.isDocumentKey(n))throw new ee(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Xc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge(12329,{type:typeof n})}function on(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xc(n);throw new ee(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function _t(n,e){const t={typeString:n};return e&&(t.value=e),t}function Nl(n,e){if(!Bw(n))throw new ee(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ee(z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=-62135596800,l_=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*l_);return new Je(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<a_)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/l_}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Nl(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-a_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:_t("string",Je._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Je(0,0))}static max(){return new ve(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const vl=-1;function M1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(i===1e9?new Je(t+1,0):new Je(t,i));return new Fi(o,ce.empty(),e)}function U1(n){return new Fi(n.readTime,n.key,vl)}class Fi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Fi(ve.min(),ce.empty(),vl)}static max(){return new Fi(ve.max(),ce.empty(),vl)}}function F1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Pe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class B1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(n){if(n.code!==z.FAILED_PRECONDITION||n.message!==j1)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,i)=>{t(e)}))}static reject(e){return new $(((t,i)=>{i(e)}))}static waitFor(e){return new $(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=$.resolve(!1);for(const i of e)t=t.next((o=>o?$.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new $(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((w=>{h[y]=w,++f,f===l&&i(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function z1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ea(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=-1;function eh(n){return n==null}function Nc(n){return n===0&&1/n==-1/0}function $1(n){return typeof n=="number"&&Number.isInteger(n)&&!Nc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="";function q1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=u_(e)),e=H1(n.get(t),e);return u_(e)}function H1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case zw:t+="";break;default:t+=l}}return t}function u_(n){return n+zw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ki(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $w(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tc(this.root,e,this.comparator,!0)}}class tc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Dt.RED,this.left=o??Dt.EMPTY,this.right=l??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Dt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new h_(this.data.getIterator())}getIteratorFrom(e){return new h_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Tt(this.comparator);return t.data=e,t}}class h_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new vn([])}unionWith(e){let t=new Tt(Ot.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class qw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new qw("Invalid base64 string: "+l):l}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const W1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ji(n){if(je(!!n,39018),typeof n=="string"){let e=0;const t=W1.exec(n);if(je(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bi(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="server_timestamp",Ww="__type__",Kw="__previous_value__",Gw="__local_write_time__";function cp(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ww])==null?void 0:i.stringValue)===Hw}function th(n){const e=n.mapValue.fields[Kw];return cp(e)?th(e):e}function wl(n){const e=ji(n.mapValue.fields[Gw].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,t,i,o,l,h,f,g,y,w,A){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=w,this.apiKey=A}}const bc="(default)";class El{constructor(e,t){this.projectId=e,this.database=t||bc}static empty(){return new El("","")}get isDefaultDatabase(){return this.database===bc}isEqual(e){return e instanceof El&&e.projectId===this.projectId&&e.database===this.database}}function G1(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new ee(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new El(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="__type__",Q1="__max__",nc={mapValue:{}},Yw="__vector__",Dc="value";function zi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?cp(n)?4:J1(n)?9007199254740991:Y1(n)?10:11:ge(28295,{value:n})}function wr(n,e){if(n===e)return!0;const t=zi(n);if(t!==zi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return wl(n).isEqual(wl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=ji(o.timestampValue),f=ji(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Bi(o.bytesValue).isEqual(Bi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=dt(o.doubleValue),f=dt(l.doubleValue);return h===f?Nc(h)===Nc(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return Wo(n.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(c_(h)!==c_(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!wr(h[g],f[g])))return!1;return!0})(n,e);default:return ge(52216,{left:n})}}function Tl(n,e){return(n.values||[]).find((t=>wr(t,e)))!==void 0}function Ko(n,e){if(n===e)return 0;const t=zi(n),i=zi(e);if(t!==i)return Pe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=dt(l.integerValue||l.doubleValue),g=dt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return d_(n.timestampValue,e.timestampValue);case 4:return d_(wl(n),wl(e));case 5:return Af(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=Bi(l),g=Bi(h);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let y=0;y<f.length&&y<g.length;y++){const w=Pe(f[y],g[y]);if(w!==0)return w}return Pe(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Pe(dt(l.latitude),dt(h.latitude));return f!==0?f:Pe(dt(l.longitude),dt(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return f_(n.arrayValue,e.arrayValue);case 10:return(function(l,h){var b,B,G,J;const f=l.fields||{},g=h.fields||{},y=(b=f[Dc])==null?void 0:b.arrayValue,w=(B=g[Dc])==null?void 0:B.arrayValue,A=Pe(((G=y==null?void 0:y.values)==null?void 0:G.length)||0,((J=w==null?void 0:w.values)==null?void 0:J.length)||0);return A!==0?A:f_(y,w)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===nc.mapValue&&h===nc.mapValue)return 0;if(l===nc.mapValue)return 1;if(h===nc.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=h.fields||{},w=Object.keys(y);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const b=Af(g[A],w[A]);if(b!==0)return b;const B=Ko(f[g[A]],y[w[A]]);if(B!==0)return B}return Pe(g.length,w.length)})(n.mapValue,e.mapValue);default:throw ge(23264,{he:t})}}function d_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Pe(n,e);const t=ji(n),i=ji(e),o=Pe(t.seconds,i.seconds);return o!==0?o:Pe(t.nanos,i.nanos)}function f_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Ko(t[o],i[o]);if(l)return l}return Pe(t.length,i.length)}function Go(n){return Rf(n)}function Rf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=ji(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ce.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Rf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Rf(t.fields[h])}`;return o+"}"})(n.mapValue):ge(61005,{value:n})}function gc(n){switch(zi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=th(n);return e?16+gc(e):16;case 5:return 2*n.stringValue.length;case 6:return Bi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+gc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Ki(i.fields,((l,h)=>{o+=l.length+gc(h)})),o})(n.mapValue);default:throw ge(13486,{value:n})}}function p_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function kf(n){return!!n&&"integerValue"in n}function hp(n){return!!n&&"arrayValue"in n}function m_(n){return!!n&&"nullValue"in n}function g_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yc(n){return!!n&&"mapValue"in n}function Y1(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Qw])==null?void 0:i.stringValue)===Yw}function ul(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ki(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ul(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ul(n.arrayValue.values[t]);return e}return{...n}}function J1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Q1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!yc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ul(t)}setAll(e){let t=Ot.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=ul(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());yc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];yc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ki(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new rn(ul(this.value))}}function Jw(n){const e=[];return Ki(n.fields,((t,i)=>{const o=new Ot([t]);if(yc(i)){const l=Jw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new qt(e,0,ve.min(),ve.min(),ve.min(),rn.empty(),0)}static newFoundDocument(e,t,i,o){return new qt(e,1,t,ve.min(),i,o,0)}static newNoDocument(e,t){return new qt(e,2,t,ve.min(),ve.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new qt(e,3,t,ve.min(),ve.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oc{constructor(e,t){this.position=e,this.inclusive=t}}function y_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=ce.comparator(ce.fromName(h.referenceValue),t.key):i=Ko(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function __(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Il{constructor(e,t="asc"){this.field=e,this.dir=t}}function X1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Xw{}class yt extends Xw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new eC(e,t,i):t==="array-contains"?new rC(e,i):t==="in"?new iC(e,i):t==="not-in"?new sC(e,i):t==="array-contains-any"?new oC(e,i):new yt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new tC(e,i):new nC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ko(t,this.value)):t!==null&&zi(this.value)===zi(t)&&this.matchesComparison(Ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends Xw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Kn(e,t)}matches(e){return Zw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Zw(n){return n.op==="and"}function eE(n){return Z1(n)&&Zw(n)}function Z1(n){for(const e of n.filters)if(e instanceof Kn)return!1;return!0}function Cf(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+Go(n.value);if(eE(n))return n.filters.map((e=>Cf(e))).join(",");{const e=n.filters.map((t=>Cf(t))).join(",");return`${n.op}(${e})`}}function tE(n,e){return n instanceof yt?(function(i,o){return o instanceof yt&&i.op===o.op&&i.field.isEqual(o.field)&&wr(i.value,o.value)})(n,e):n instanceof Kn?(function(i,o){return o instanceof Kn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&tE(h,o.filters[f])),!0):!1})(n,e):void ge(19439)}function nE(n){return n instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Go(t.value)}`})(n):n instanceof Kn?(function(t){return t.op.toString()+" {"+t.getFilters().map(nE).join(" ,")+"}"})(n):"Filter"}class eC extends yt{constructor(e,t,i){super(e,t,i),this.key=ce.fromName(i.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class tC extends yt{constructor(e,t){super(e,"in",t),this.keys=rE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class nC extends yt{constructor(e,t){super(e,"not-in",t),this.keys=rE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function rE(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>ce.fromName(i.referenceValue)))}class rC extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hp(t)&&Tl(t.arrayValue,this.value)}}class iC extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Tl(this.value.arrayValue,t)}}class sC extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Tl(this.value.arrayValue,t)}}class oC extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Tl(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function v_(n,e=null,t=[],i=[],o=null,l=null,h=null){return new aC(n,e,t,i,o,l,h)}function dp(n){const e=Ee(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Cf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),eh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Go(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Go(i))).join(",")),e.Te=t}return e.Te}function fp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!X1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!__(n.startAt,e.startAt)&&__(n.endAt,e.endAt)}function Pf(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function lC(n,e,t,i,o,l,h,f){return new ta(n,e,t,i,o,l,h,f)}function nh(n){return new ta(n)}function w_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uC(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function iE(n){return n.collectionGroup!==null}function cl(n){const e=Ee(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new Tt(Ot.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Il(l,i))})),t.has(Ot.keyField().canonicalString())||e.Ee.push(new Il(Ot.keyField(),i))}return e.Ee}function yr(n){const e=Ee(n);return e.Ie||(e.Ie=cC(e,cl(n))),e.Ie}function cC(n,e){if(n.limitType==="F")return v_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Il(o.field,l)}));const t=n.endAt?new Oc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Oc(n.startAt.position,n.startAt.inclusive):null;return v_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function xf(n,e){const t=n.filters.concat([e]);return new ta(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function hC(n,e){const t=n.explicitOrderBy.concat([e]);return new ta(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Vc(n,e,t){return new ta(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function rh(n,e){return fp(yr(n),yr(e))&&n.limitType===e.limitType}function sE(n){return`${dp(yr(n))}|lt:${n.limitType}`}function Lo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>nE(o))).join(", ")}]`),eh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Go(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Go(o))).join(",")),`Target(${i})`})(yr(n))}; limitType=${n.limitType})`}function ih(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ce.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of cl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const y=y_(h,f,g);return h.inclusive?y<=0:y<0})(i.startAt,cl(i),o)||i.endAt&&!(function(h,f,g){const y=y_(h,f,g);return h.inclusive?y>=0:y>0})(i.endAt,cl(i),o))})(n,e)}function dC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function oE(n){return(e,t)=>{let i=!1;for(const o of cl(n)){const l=fC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function fC(n,e,t){const i=n.field.isKeyField()?ce.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),y=f.data.field(l);return g!==null&&y!==null?Ko(g,y):ge(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ge(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return $w(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new nt(ce.comparator);function Qr(){return pC}const aE=new nt(ce.comparator);function sl(...n){let e=aE;for(const t of n)e=e.insert(t.key,t);return e}function lE(n){let e=aE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ss(){return hl()}function uE(){return hl()}function hl(){return new $s((n=>n.toString()),((n,e)=>n.isEqual(e)))}const mC=new nt(ce.comparator),gC=new Tt(ce.comparator);function xe(...n){let e=gC;for(const t of n)e=e.add(t);return e}const yC=new Tt(Pe);function _C(){return yC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nc(e)?"-0":e}}function cE(n){return{integerValue:""+n}}function vC(n,e){return $1(e)?cE(e):pp(n,e)}/**
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
 */class sh{constructor(){this._=void 0}}function wC(n,e,t){return n instanceof Lc?(function(o,l){const h={fields:{[Ww]:{stringValue:Hw},[Gw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&cp(l)&&(l=th(l)),l&&(h.fields[Kw]=l),{mapValue:h}})(t,e):n instanceof Sl?dE(n,e):n instanceof Al?fE(n,e):(function(o,l){const h=hE(o,l),f=E_(h)+E_(o.Ae);return kf(h)&&kf(o.Ae)?cE(f):pp(o.serializer,f)})(n,e)}function EC(n,e,t){return n instanceof Sl?dE(n,e):n instanceof Al?fE(n,e):t}function hE(n,e){return n instanceof Mc?(function(i){return kf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Lc extends sh{}class Sl extends sh{constructor(e){super(),this.elements=e}}function dE(n,e){const t=pE(e);for(const i of n.elements)t.some((o=>wr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Al extends sh{constructor(e){super(),this.elements=e}}function fE(n,e){let t=pE(e);for(const i of n.elements)t=t.filter((o=>!wr(o,i)));return{arrayValue:{values:t}}}class Mc extends sh{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function E_(n){return dt(n.integerValue||n.doubleValue)}function pE(n){return hp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function TC(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof Sl&&o instanceof Sl||i instanceof Al&&o instanceof Al?Wo(i.elements,o.elements,wr):i instanceof Mc&&o instanceof Mc?wr(i.Ae,o.Ae):i instanceof Lc&&o instanceof Lc})(n.transform,e.transform)}class IC{constructor(e,t){this.version=e,this.transformResults=t}}class Nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _c(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class oh{}function mE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new mp(n.key,Nn.none()):new bl(n.key,n.data,Nn.none());{const t=n.data,i=rn.empty();let o=new Tt(Ot.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Gi(n.key,i,new vn(o.toArray()),Nn.none())}}function SC(n,e,t){n instanceof bl?(function(o,l,h){const f=o.value.clone(),g=I_(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Gi?(function(o,l,h){if(!_c(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=I_(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(gE(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function dl(n,e,t,i){return n instanceof bl?(function(l,h,f,g){if(!_c(l.precondition,h))return f;const y=l.value.clone(),w=S_(l.fieldTransforms,g,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Gi?(function(l,h,f,g){if(!_c(l.precondition,h))return f;const y=S_(l.fieldTransforms,g,h),w=h.data;return w.setAll(gE(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((A=>A.field)))})(n,e,t,i):(function(l,h,f){return _c(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function AC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=hE(i.transform,o||null);l!=null&&(t===null&&(t=rn.empty()),t.set(i.field,l))}return t||null}function T_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Wo(i,o,((l,h)=>TC(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class bl extends oh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Gi extends oh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function gE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function I_(n,e,t){const i=new Map;je(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,EC(h,f,t[o]))}return i}function S_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,wC(l,h,e))}return i}class mp extends oh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RC extends oh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&SC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=dl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=dl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=uE();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=mE(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,((t,i)=>T_(t,i)))&&Wo(this.baseMutations,e.baseMutations,((t,i)=>T_(t,i)))}}class gp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return mC})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new gp(e,t,i,o)}}/**
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
 */class CC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class PC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Oe;function xC(n){switch(n){case z.OK:return ge(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ge(15467,{code:n})}}function yE(n){if(n===void 0)return Gr("GRPC error has no .code"),z.UNKNOWN;switch(n){case gt.OK:return z.OK;case gt.CANCELLED:return z.CANCELLED;case gt.UNKNOWN:return z.UNKNOWN;case gt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case gt.INTERNAL:return z.INTERNAL;case gt.UNAVAILABLE:return z.UNAVAILABLE;case gt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case gt.NOT_FOUND:return z.NOT_FOUND;case gt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case gt.ABORTED:return z.ABORTED;case gt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case gt.DATA_LOSS:return z.DATA_LOSS;default:return ge(39323,{code:n})}}(Oe=gt||(gt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function NC(){return new TextEncoder}/**
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
 */const bC=new Mi([4294967295,4294967295],0);function A_(n){const e=NC().encode(n),t=new bw;return t.update(e),new Uint8Array(t.digest())}function R_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Mi([t,i],0),new Mi([o,l],0)]}class yp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ol(`Invalid padding: ${t}`);if(i<0)throw new ol(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ol(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ol(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mi.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Mi.fromNumber(i)));return o.compare(bC)===1&&(o=new Mi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=A_(e),[i,o]=R_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new yp(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=A_(e),[i,o]=R_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ol extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Dl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ah(ve.min(),o,new nt(Pe),Qr(),xe())}}class Dl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Dl(i,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class _E{constructor(e,t){this.targetId=e,this.Ce=t}}class vE{constructor(e,t,i=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class k_{constructor(){this.ve=0,this.Fe=C_(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),t=xe(),i=xe();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ge(38017,{changeType:l})}})),new Dl(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=C_()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class DC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Qr(),this.Je=rc(),this.He=rc(),this.Ze=new nt(Pe)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Pf(l))if(i===0){const h=new ce(l.path);this.et(t,h,qt.newNoDocument(h,ve.min()))}else je(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Bi(i).toUint8Array()}catch(g){if(g instanceof qw)return Os("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new yp(h,o,l)}catch(g){return Os(g instanceof ol?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&Pf(f.target)){const g=new ce(f.target.path);this.Et(g).has(h)||this.It(h,g)||this.et(h,g,qt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let i=xe();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new ah(e,t,this.Ze,this.je,i);return this.je=Qr(),this.Je=rc(),this.He=rc(),this.Ze=new nt(Pe),o}Ye(e,t){if(!this.rt(e))return;const i=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new k_,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Tt(Pe),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Tt(Pe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new k_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function rc(){return new nt(ce.comparator)}function C_(){return new nt(ce.comparator)}const OC={asc:"ASCENDING",desc:"DESCENDING"},VC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LC={and:"AND",or:"OR"};class MC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nf(n,e){return n.useProto3Json||eh(e)?e:{value:e}}function Uc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function UC(n,e){return Uc(n,e.toTimestamp())}function _r(n){return je(!!n,49232),ve.fromTimestamp((function(t){const i=ji(t);return new Je(i.seconds,i.nanos)})(n))}function _p(n,e){return bf(n,e).canonicalString()}function bf(n,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function EE(n){const e=We.fromString(n);return je(RE(e),10190,{key:e.toString()}),e}function Df(n,e){return _p(n.databaseId,e.path)}function lf(n,e){const t=EE(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(IE(t))}function TE(n,e){return _p(n.databaseId,e)}function FC(n){const e=EE(n);return e.length===4?We.emptyPath():IE(e)}function Of(n){return new We(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function IE(n){return je(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function P_(n,e,t){return{name:Df(n,e),fields:t.value.mapValue.fields}}function jC(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ge(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(je(w===void 0||typeof w=="string",58123),Vt.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Vt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const w=y.code===void 0?z.UNKNOWN:yE(y.code);return new ee(w,y.message||"")})(h);t=new vE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=lf(n,i.document.name),l=_r(i.document.updateTime),h=i.document.createTime?_r(i.document.createTime):ve.min(),f=new rn({mapValue:{fields:i.document.fields}}),g=qt.newFoundDocument(o,l,h,f),y=i.targetIds||[],w=i.removedTargetIds||[];t=new vc(y,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=lf(n,i.document),l=i.readTime?_r(i.readTime):ve.min(),h=qt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new vc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=lf(n,i.document),l=i.removedTargetIds||[];t=new vc([],l,o,null)}else{if(!("filter"in e))return ge(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new PC(o,l),f=i.targetId;t=new _E(f,h)}}return t}function BC(n,e){let t;if(e instanceof bl)t={update:P_(n,e.key,e.value)};else if(e instanceof mp)t={delete:Df(n,e.key)};else if(e instanceof Gi)t={update:P_(n,e.key,e.data),updateMask:YC(e.fieldMask)};else{if(!(e instanceof RC))return ge(16599,{dt:e.type});t={verify:Df(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof Lc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Sl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Al)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Mc)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw ge(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:UC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ge(27497)})(n,e.precondition)),t}function zC(n,e){return n&&n.length>0?(je(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?_r(o.updateTime):_r(l);return h.isEqual(ve.min())&&(h=_r(l)),new IC(h,o.transformResults||[])})(t,e)))):[]}function $C(n,e){return{documents:[TE(n,e.path)]}}function qC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=TE(n,o);const l=(function(y){if(y.length!==0)return AE(Kn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((w=>(function(b){return{field:Mo(b.field),direction:KC(b.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Nf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function HC(n){let e=FC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(A){const b=SE(A);return b instanceof Kn&&eE(b)?b.getFilters():[b]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((b=>(function(G){return new Il(Uo(G.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(G.direction))})(b)))})(t.orderBy));let f=null;t.limit&&(f=(function(A){let b;return b=typeof A=="object"?A.value:A,eh(b)?null:b})(t.limit));let g=null;t.startAt&&(g=(function(A){const b=!!A.before,B=A.values||[];return new Oc(B,b)})(t.startAt));let y=null;return t.endAt&&(y=(function(A){const b=!A.before,B=A.values||[];return new Oc(B,b)})(t.endAt)),lC(e,o,h,l,f,"F",g,y)}function WC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function SE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Uo(t.unaryFilter.field);return yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Uo(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Uo(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Uo(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(n):n.fieldFilter!==void 0?(function(t){return yt.create(Uo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Kn.create(t.compositeFilter.filters.map((i=>SE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(t.compositeFilter.op))})(n):ge(30097,{filter:n})}function KC(n){return OC[n]}function GC(n){return VC[n]}function QC(n){return LC[n]}function Mo(n){return{fieldPath:n.canonicalString()}}function Uo(n){return Ot.fromServerFormat(n.fieldPath)}function AE(n){return n instanceof yt?(function(t){if(t.op==="=="){if(g_(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NAN"}};if(m_(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(g_(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NAN"}};if(m_(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mo(t.field),op:GC(t.op),value:t.value}}})(n):n instanceof Kn?(function(t){const i=t.getFilters().map((o=>AE(o)));return i.length===1?i[0]:{compositeFilter:{op:QC(t.op),filters:i}}})(n):ge(54877,{filter:n})}function YC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function RE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function kE(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,i,o,l=ve.min(),h=ve.min(),f=Vt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.yt=e}}function XC(n){const e=HC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.bn=new eP}addToCollectionParentIndex(e,t){return this.bn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Fi.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Fi.min())}updateCollectionGroup(e,t,i){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class eP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Tt(We.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Tt(We.comparator)).toArray()}}/**
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
 */const x_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},CE=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(CE,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Qo(0)}static ar(){return new Qo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="LruGarbageCollector",tP=1048576;function b_([n,e],[t,i]){const o=Pe(n,t);return o===0?Pe(e,i):o}class nP{constructor(e){this.Pr=e,this.buffer=new Tt(b_),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();b_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){re(N_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ea(t)?re(N_,"Ignoring IndexedDB error during garbage collection: ",t):await Zo(t)}await this.Ar(3e5)}))}}class iP{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Zc.ce);const i=new nP(t);return this.Vr.forEachTarget(e,(o=>i.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Ir(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(x_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),x_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,h,f,g,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(i=A,f=Date.now(),this.removeTargets(e,i,t)))).next((A=>(l=A,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((A=>(y=Date.now(),Vo()<=Ce.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${A} documents in `+(y-g)+`ms
Total Duration: ${y-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:A}))))}}function sP(n,e){return new iP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.changes=new $s((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?$.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&dl(i.mutation,o,vn.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,xe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=xe()){const o=Ss();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=sl();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=Ss();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,xe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Qr();const h=hl(),f=(function(){return hl()})();return t.forEach(((g,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Gi)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),dl(w.mutation,y,w.mutation.getFieldMask(),Je.now())):h.set(y.key,vn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,w)=>h.set(y,w))),t.forEach(((y,w)=>f.set(y,new aP(w,h.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=hl();let o=new nt(((h,f)=>h-f)),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let w=i.get(g)||vn.empty();w=f.applyToLocalView(y,w),i.set(g,w);const A=(o.get(f.batchId)||xe()).add(g);o=o.insert(f.batchId,A)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,w=g.value,A=uE();w.forEach((b=>{if(!l.has(b)){const B=mE(t.get(b),i.get(b));B!==null&&A.set(b,B),l=l.add(b)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,A))}return $.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return uC(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):iE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):$.resolve(Ss());let f=vl,g=l;return h.next((y=>$.forEach(y,((w,A)=>(f<A.largestBatchId&&(f=A.largestBatchId),l.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((b=>{g=g.insert(w,b)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,xe()))).next((w=>({batchId:f,changes:lE(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next((i=>{let o=sl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=sl();return this.indexManager.getCollectionParents(e,l).next((f=>$.forEach(f,(g=>{const y=(function(A,b){return new ta(b,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((A,b)=>{h=h.insert(A,b)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,qt.newInvalidDocument(w)))}));let f=sl();return h.forEach(((g,y)=>{const w=l.get(g);w!==void 0&&dl(w.mutation,y,vn.empty(),Je.now()),ih(t,y)&&(f=f.insert(g,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:_r(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:XC(o.bundledQuery),readTime:_r(o.readTime)}})(t)),$.resolve()}}/**
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
 */class cP{constructor(){this.overlays=new nt(ce.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ss();return $.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),$.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),$.resolve()}getOverlaysForCollection(e,t,i){const o=Ss(),l=t.length+1,h=new ce(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt(((y,w)=>y-w));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=Ss(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=Ss(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,w)=>f.set(y,w))),!(f.size()>=o)););return $.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new CC(t,i));let l=this.Lr.get(t);l===void 0&&(l=xe(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
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
 */class hP{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.kr=new Tt(kt.qr),this.Kr=new Tt(kt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new kt(e,t);this.kr=this.kr.add(i),this.Kr=this.Kr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new kt(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new ce(new We([])),i=new kt(t,e),o=new kt(t,e+1),l=[];return this.Kr.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new ce(new We([])),i=new kt(t,e),o=new kt(t,e+1);let l=xe();return this.Kr.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new kt(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class kt{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return ce.comparator(e.key,t.key)||Pe(e.Jr,t.Jr)}static Ur(e,t){return Pe(e.Jr,t.Jr)||ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Tt(kt.qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new kC(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Hr=this.Hr.add(new kt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return $.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?up:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Jr);l.push(f)})),$.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Tt(Pe);return t.forEach((o=>{const l=new kt(o,0),h=new kt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,h],(f=>{i=i.add(f.Jr)}))})),$.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ce.isDocumentKey(l)||(l=l.child(""));const h=new kt(new ce(l),0);let f=new Tt(Pe);return this.Hr.forEachWhile((g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Jr)),!0)}),h),$.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return $.forEach(t.mutations,(o=>{const l=new kt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=i}))}nr(e){}containsKey(e,t){const i=new kt(t,0),o=this.Hr.firstAfterOrEqual(i);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.ti=e,this.docs=(function(){return new nt(ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return $.resolve(i?i.document.mutableCopy():qt.newInvalidDocument(t))}getEntries(e,t){let i=Qr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():qt.newInvalidDocument(o))})),$.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Qr();const h=t.path,f=new ce(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:w}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||F1(U1(w),i)<=0||(o.has(w.key)||ih(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return $.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ge(9500)}ni(e,t){return $.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new pP(this)}getSize(e){return $.resolve(this.size)}}class pP extends oP{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.persistence=e,this.ri=new $s((t=>dp(t)),fp),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.ii=0,this.si=new vp,this.targetCount=0,this.oi=Qo._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Qo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),$.waitFor(l).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return $.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),$.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return $.resolve(i)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t){this._i={},this.overlays={},this.ai=new Zc(0),this.ui=!1,this.ui=!0,this.ci=new hP,this.referenceDelegate=e(this),this.li=new mP(this),this.indexManager=new ZC,this.remoteDocumentCache=(function(o){return new fP(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new JC(t),this.Pi=new uP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new dP(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){re("MemoryPersistence","Starting transaction:",e);const o=new gP(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ei(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ii(e,t){return $.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class gP extends B1{constructor(e){super(),this.currentSequenceNumber=e}}class wp{constructor(e){this.persistence=e,this.Ri=new vp,this.Ai=null}static Vi(e){return new wp(e)}get di(){if(this.Ai)return this.Ai;throw ge(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),$.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(i=>{const o=ce.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,ve.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Fc{constructor(e,t){this.persistence=e,this.fi=new $s((i=>q1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=sP(this,t)}static Vi(e,t){return new Fc(e,t)}Ti(){}Ei(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?$.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,ve.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),$.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gc(e.data.value)),t}wr(e,t,i){return $.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Es=o}static Is(e,t){let i=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Ep(e,t.fromCache,i,o)}}/**
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
 */class yP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return vI()?8:z1(Wt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new yP;return this.ys(e,t,h).next((f=>{if(l.result=f,this.As)return this.ws(e,t,h,f.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(Vo()<=Ce.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(Vo()<=Ce.DEBUG&&re("QueryEngine","Query:",Lo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(Vo()<=Ce.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(t))):$.resolve())}gs(e,t){if(w_(t))return $.resolve(null);let i=yr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Vc(t,null,"F"),i=yr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=xe(...l);return this.fs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const y=this.Ss(t,f);return this.bs(t,y,h,g.readTime)?this.gs(e,Vc(t,null,"F")):this.Ds(e,y,t,g)}))))})))))}ps(e,t,i,o){return w_(t)||o.isEqual(ve.min())?$.resolve(null):this.fs.getDocuments(e,i).next((l=>{const h=this.Ss(t,l);return this.bs(t,h,i,o)?$.resolve(null):(Vo()<=Ce.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Lo(t)),this.Ds(e,h,t,M1(o,vl)).next((f=>f)))}))}Ss(e,t){let i=new Tt(oE(e));return t.forEach(((o,l)=>{ih(e,l)&&(i=i.add(l))})),i}bs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return Vo()<=Ce.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Lo(t)),this.fs.getDocumentsMatchingQuery(e,t,Fi.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="LocalStore",vP=3e8;class wP{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new nt(Pe),this.Fs=new $s((l=>dp(l)),fp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function EP(n,e,t,i){return new wP(n,e,t,i)}async function xE(n,e){const t=Ee(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=xe();for(const y of o){h.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next((y=>({Ns:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function TP(n,e){const t=Ee(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,g,y,w){const A=y.batch,b=A.keys();let B=$.resolve();return b.forEach((G=>{B=B.next((()=>w.getEntry(g,G))).next((J=>{const q=y.docVersions.get(G);je(q!==null,48541),J.version.compareTo(q)<0&&(A.applyToRemoteDocument(J,y),J.isValidDocument()&&(J.setReadTime(y.commitVersion),w.addEntry(J)))}))})),B.next((()=>f.mutationQueue.removeMutationBatch(g,A)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=xe();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function NE(n){const e=Ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function IP(n,e){const t=Ee(n),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((w,A)=>{const b=o.get(A);if(!b)return;f.push(t.li.removeMatchingKeys(l,w.removedDocuments,A).next((()=>t.li.addMatchingKeys(l,w.addedDocuments,A))));let B=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(A)!==null?B=B.withResumeToken(Vt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,i)),o=o.insert(A,B),(function(J,q,he){return J.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=vP?!0:he.addedDocuments.size+he.modifiedDocuments.size+he.removedDocuments.size>0})(b,B,w)&&f.push(t.li.updateTargetData(l,B))}));let g=Qr(),y=xe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(SP(l,h,e.documentUpdates).next((w=>{g=w.Bs,y=w.Ls}))),!i.isEqual(ve.min())){const w=t.li.getLastRemoteSnapshotVersion(l).next((A=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return $.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.vs=o,l)))}function SP(n,e,t){let i=xe(),o=xe();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=Qr();return t.forEach(((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):re(Tp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function AP(n,e){const t=Ee(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=up),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function RP(n,e){const t=Ee(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,$.resolve(o)):t.li.allocateTargetId(i).next((h=>(o=new Oi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Vf(n,e,t){const i=Ee(n),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ea(h))throw h;re(Tp,`Failed to update sequence numbers for target ${e}: ${h}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function D_(n,e,t){const i=Ee(n);let o=ve.min(),l=xe();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,w){const A=Ee(g),b=A.Fs.get(w);return b!==void 0?$.resolve(A.vs.get(b)):A.li.getTargetData(y,w)})(i,h,yr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?l:xe()))).next((f=>(kP(i,dC(e),f),{documents:f,ks:l})))))}function kP(n,e,t){let i=n.Ms.get(e)||ve.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Ms.set(e,i)}class O_{constructor(){this.activeTargetIds=_C()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CP{constructor(){this.vo=new O_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new O_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="ConnectivityMonitor";class L_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){re(V_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){re(V_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ic=null;function Lf(){return ic===null?ic=(function(){return 268435456+Math.round(2147483648*Math.random())})():ic++,"0x"+ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="RestConnection",xP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class NP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===bc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=Lf(),f=this.Qo(e,t.toUriEncodedString());re(uf,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:y}=new URL(f),w=Fs(y);return this.zo(e,f,g,i,w).then((A=>(re(uf,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw Os(uf,`RPC '${e}' ${h} failed with error: `,A,"url: ",f,"request:",i),A}))}jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Xo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=xP[e];let o=`${this.Ko}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection",Xa=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class qo extends NP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qo.c_){const e=Lw();Xa(e,Vw.STAT_EVENT,(t=>{t.stat===Sf.PROXY?re(Bt,"STAT_EVENT: detected buffering proxy"):t.stat===Sf.NOPROXY&&re(Bt,"STAT_EVENT: detected no buffering proxy")})),qo.c_=!0}}zo(e,t,i,o,l){const h=Lf();return new Promise(((f,g)=>{const y=new Dw;y.setWithCredentials(!0),y.listenOnce(Ow.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case mc.NO_ERROR:const A=y.getResponseJson();re(Bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),f(A);break;case mc.TIMEOUT:re(Bt,`RPC '${e}' ${h} timed out`),g(new ee(z.DEADLINE_EXCEEDED,"Request time out"));break;case mc.HTTP_ERROR:const b=y.getStatus();if(re(Bt,`RPC '${e}' ${h} failed with status:`,b,"response text:",y.getResponseText()),b>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const G=B==null?void 0:B.error;if(G&&G.status&&G.message){const J=(function(he){const ue=he.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(ue)>=0?ue:z.UNKNOWN})(G.status);g(new ee(J,G.message))}else g(new ee(z.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ee(z.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{re(Bt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);re(Bt,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",w,i,15)}))}T_(e,t,i){const o=Lf(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const y=l.join("");re(Bt,`Creating RPC '${e}' stream ${o}: ${y}`,f);const w=h.createWebChannel(y,f);this.E_(w);let A=!1,b=!1;const B=new bP({Jo:G=>{b?re(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,G):(A||(re(Bt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),A=!0),re(Bt,`RPC '${e}' stream ${o} sending:`,G),w.send(G))},Ho:()=>w.close()});return Xa(w,il.EventType.OPEN,(()=>{b||(re(Bt,`RPC '${e}' stream ${o} transport opened.`),B.i_())})),Xa(w,il.EventType.CLOSE,(()=>{b||(b=!0,re(Bt,`RPC '${e}' stream ${o} transport closed`),B.o_(),this.I_(w))})),Xa(w,il.EventType.ERROR,(G=>{b||(b=!0,Os(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,G.name,"Message:",G.message),B.o_(new ee(z.UNAVAILABLE,"The operation could not be completed")))})),Xa(w,il.EventType.MESSAGE,(G=>{var J;if(!b){const q=G.data[0];je(!!q,16349);const he=q,ue=(he==null?void 0:he.error)||((J=he[0])==null?void 0:J.error);if(ue){re(Bt,`RPC '${e}' stream ${o} received error:`,ue);const pe=ue.status;let ye=(function(O){const k=gt[O];if(k!==void 0)return yE(k)})(pe),ke=ue.message;pe==="NOT_FOUND"&&ke.includes("database")&&ke.includes("does not exist")&&ke.includes(this.databaseId.database)&&Os(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ye===void 0&&(ye=z.INTERNAL,ke="Unknown error status: "+pe+" with message "+ue.message),b=!0,B.o_(new ee(ye,ke)),w.close()}else re(Bt,`RPC '${e}' stream ${o} received:`,q),B.__(q)}})),qo.u_(),setTimeout((()=>{B.s_()}),0),B}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Mw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(n){return new qo(n)}function cf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n){return new MC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qo.c_=!1;class bE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="PersistentStream";class DE{constructor(e,t,i,o,l,h,f,g){this.Ci=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bE(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(Gr(t.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ee(z.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(M_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(re(M_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class OP extends DE{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=jC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return ve.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?_r(h.readTime):ve.min()})(e);return this.listener.H_(t,i)}Z_(e){const t={};t.database=Of(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=Pf(g)?{documents:$C(l,g)}:{query:qC(l,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=wE(l,h.resumeToken);const y=Nf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(ve.min())>0){f.readTime=Uc(l,h.snapshotVersion.toTimestamp());const y=Nf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=WC(this.serializer,e);i&&(t.labels=i),this.q_(t)}X_(e){const t={};t.database=Of(this.serializer),t.removeTarget=e,this.q_(t)}}class VP extends DE{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=zC(e.writeResults,e.commitTime),i=_r(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Of(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>BC(this.serializer,i)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{}class MP extends LP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,bf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(z.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.jo(e,bf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(z.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function UP(n,e,t,i){return new MP(n,e,t,i)}class FP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gr(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="RemoteStore";class jP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((h=>{i.enqueueAndForget((async()=>{qs(this)&&(re(Vs,"Restarting streams for network reachability change."),await(async function(g){const y=Ee(g);y.Ia.add(4),await Ol(y),y.Va.set("Unknown"),y.Ia.delete(4),await uh(y)})(this))}))})),this.Va=new FP(i,o)}}async function uh(n){if(qs(n))for(const e of n.Ra)await e(!0)}async function Ol(n){for(const e of n.Ra)await e(!1)}function OE(n,e){const t=Ee(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Rp(t)?Ap(t):na(t).O_()&&Sp(t,e))}function Ip(n,e){const t=Ee(n),i=na(t);t.Ea.delete(e),i.O_()&&VE(t,e),t.Ea.size===0&&(i.O_()?i.L_():qs(t)&&t.Va.set("Unknown"))}function Sp(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}na(n).Z_(e)}function VE(n,e){n.da.$e(e),na(n).X_(e)}function Ap(n){n.da=new DC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),na(n).start(),n.Va.ua()}function Rp(n){return qs(n)&&!na(n).x_()&&n.Ea.size>0}function qs(n){return Ee(n).Ia.size===0}function LE(n){n.da=void 0}async function BP(n){n.Va.set("Online")}async function zP(n){n.Ea.forEach(((e,t)=>{Sp(n,e)}))}async function $P(n,e){LE(n),Rp(n)?(n.Va.ha(e),Ap(n)):n.Va.set("Unknown")}async function qP(n,e,t){if(n.Va.set("Online"),e instanceof vE&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ea.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ea.delete(f),o.da.removeTarget(f))})(n,e)}catch(i){re(Vs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await jc(n,i)}else if(e instanceof vc?n.da.Xe(e):e instanceof _E?n.da.st(e):n.da.tt(e),!t.isEqual(ve.min()))try{const i=await NE(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.da.Tt(h);return f.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ea.get(y);w&&l.Ea.set(y,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,y)=>{const w=l.Ea.get(g);if(!w)return;l.Ea.set(g,w.withResumeToken(Vt.EMPTY_BYTE_STRING,w.snapshotVersion)),VE(l,g);const A=new Oi(w.target,g,y,w.sequenceNumber);Sp(l,A)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){re(Vs,"Failed to raise snapshot:",i),await jc(n,i)}}async function jc(n,e,t){if(!ea(e))throw e;n.Ia.add(1),await Ol(n),n.Va.set("Offline"),t||(t=()=>NE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(Vs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await uh(n)}))}function ME(n,e){return e().catch((t=>jc(n,t,e)))}async function ch(n){const e=Ee(n),t=$i(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:up;for(;HP(e);)try{const o=await AP(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,WP(e,o)}catch(o){await jc(e,o)}UE(e)&&FE(e)}function HP(n){return qs(n)&&n.Ta.length<10}function WP(n,e){n.Ta.push(e);const t=$i(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function UE(n){return qs(n)&&!$i(n).x_()&&n.Ta.length>0}function FE(n){$i(n).start()}async function KP(n){$i(n).ra()}async function GP(n){const e=$i(n);for(const t of n.Ta)e.ea(t.mutations)}async function QP(n,e,t){const i=n.Ta.shift(),o=gp.from(i,e,t);await ME(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ch(n)}async function YP(n,e){e&&$i(n).Y_&&await(async function(i,o){if((function(h){return xC(h)&&h!==z.ABORTED})(o.code)){const l=i.Ta.shift();$i(i).B_(),await ME(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await ch(i)}})(n,e),UE(n)&&FE(n)}async function U_(n,e){const t=Ee(n);t.asyncQueue.verifyOperationInProgress(),re(Vs,"RemoteStore received new credentials");const i=qs(t);t.Ia.add(3),await Ol(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await uh(t)}async function JP(n,e){const t=Ee(n);e?(t.Ia.delete(2),await uh(t)):e||(t.Ia.add(2),await Ol(t),t.Va.set("Unknown"))}function na(n){return n.ma||(n.ma=(function(t,i,o){const l=Ee(t);return l.sa(),new OP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:BP.bind(null,n),Yo:zP.bind(null,n),t_:$P.bind(null,n),H_:qP.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Rp(n)?Ap(n):n.Va.set("Unknown")):(await n.ma.stop(),LE(n))}))),n.ma}function $i(n){return n.fa||(n.fa=(function(t,i,o){const l=Ee(t);return l.sa(),new VP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:KP.bind(null,n),t_:YP.bind(null,n),ta:GP.bind(null,n),na:QP.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await ch(n)):(await n.fa.stop(),n.Ta.length>0&&(re(Vs,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new kp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cp(n,e){if(Gr("AsyncQueue",`${e}: ${n}`),ea(n))return new ee(z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{static emptySet(e){return new Ho(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ce.comparator(t.key,i.key):(t,i)=>ce.comparator(t.key,i.key),this.keyedMap=sl(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ho)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ho;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.ga=new nt(ce.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ge(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Yo{constructor(e,t,i,o,l,h,f,g,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Yo(e,t,Ho.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class ZP{constructor(){this.queries=j_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Ee(t),l=o.queries;o.queries=j_(),l.forEach(((h,f)=>{for(const g of f.Sa)g.onError(i)}))})(this,new ee(z.ABORTED,"Firestore shutting down"))}}function j_(){return new $s((n=>sE(n)),rh)}async function Pp(n,e){const t=Ee(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new XP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Cp(h,`Initialization of query '${Lo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Np(t)}async function xp(n,e){const t=Ee(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function ex(n,e){const t=Ee(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&Np(t)}function tx(n,e,t){const i=Ee(n),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function Np(n){n.Ca.forEach((e=>{e.next()}))}var Mf,B_;(B_=Mf||(Mf={})).Ma="default",B_.Cache="cache";class bp{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Yo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class nx{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=xe(),this.mutatedKeys=xe(),this.eu=oE(e),this.tu=new Ho(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new F_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const b=o.get(w),B=ih(this.query,A)?A:null,G=!!b&&this.mutatedKeys.has(b.key),J=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let q=!1;b&&B?b.data.isEqual(B.data)?G!==J&&(i.track({type:3,doc:B}),q=!0):this.su(b,B)||(i.track({type:2,doc:B}),q=!0,(g&&this.eu(B,g)>0||y&&this.eu(B,y)<0)&&(f=!0)):!b&&B?(i.track({type:0,doc:B}),q=!0):b&&!B&&(i.track({type:1,doc:b}),q=!0,(g||y)&&(f=!0)),q&&(B?(h=h.add(B),l=J?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{tu:h,iu:i,bs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,A)=>(function(B,G){const J=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Vt:q})}};return J(B)-J(G)})(w.type,A.type)||this.eu(w.doc,A.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,y=g!==this.Xa;return this.Xa=g,h.length!==0||y?{snapshot:new Yo(this.query,e.tu,l,h,e.mutatedKeys,g===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new F_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=xe(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new BE(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new jE(i))})),t}cu(e){this.Za=e.ks,this.Ya=xe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Yo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Dp="SyncEngine";class rx{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class ix{constructor(e){this.key=e,this.hu=!1}}class sx{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new $s((f=>sE(f)),rh),this.Eu=new Map,this.Iu=new Set,this.Ru=new nt(ce.comparator),this.Au=new Map,this.Vu=new vp,this.du={},this.mu=new Map,this.fu=Qo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ox(n,e,t=!0){const i=KE(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await zE(i,e,t,!0),o}async function ax(n,e){const t=KE(n);await zE(t,e,!0,!1)}async function zE(n,e,t,i){const o=await RP(n.localStore,yr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await lx(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&OE(n.remoteStore,o),f}async function lx(n,e,t,i,o){n.pu=(A,b,B)=>(async function(J,q,he,ue){let pe=q.view.ru(he);pe.bs&&(pe=await D_(J.localStore,q.query,!1).then((({documents:O})=>q.view.ru(O,pe))));const ye=ue&&ue.targetChanges.get(q.targetId),ke=ue&&ue.targetMismatches.get(q.targetId)!=null,Ie=q.view.applyChanges(pe,J.isPrimaryClient,ye,ke);return $_(J,q.targetId,Ie.au),Ie.snapshot})(n,A,b,B);const l=await D_(n.localStore,e,!0),h=new nx(e,l.ks),f=h.ru(l.documents),g=Dl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,g);$_(n,t,y.au);const w=new rx(e,t,h);return n.Tu.set(e,w),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),y.snapshot}async function ux(n,e,t){const i=Ee(n),o=i.Tu.get(e),l=i.Eu.get(o.targetId);if(l.length>1)return i.Eu.set(o.targetId,l.filter((h=>!rh(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Vf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Ip(i.remoteStore,o.targetId),Uf(i,o.targetId)})).catch(Zo)):(Uf(i,o.targetId),await Vf(i.localStore,o.targetId,!0))}async function cx(n,e){const t=Ee(n),i=t.Tu.get(e),o=t.Eu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ip(t.remoteStore,i.targetId))}async function hx(n,e,t){const i=_x(n);try{const o=await(function(h,f){const g=Ee(h),y=Je.now(),w=f.reduce(((B,G)=>B.add(G.key)),xe());let A,b;return g.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let G=Qr(),J=xe();return g.xs.getEntries(B,w).next((q=>{G=q,G.forEach(((he,ue)=>{ue.isValidDocument()||(J=J.add(he))}))})).next((()=>g.localDocuments.getOverlayedDocuments(B,G))).next((q=>{A=q;const he=[];for(const ue of f){const pe=AC(ue,A.get(ue.key).overlayedDocument);pe!=null&&he.push(new Gi(ue.key,pe,Jw(pe.value.mapValue),Nn.exists(!0)))}return g.mutationQueue.addMutationBatch(B,y,he,f)})).next((q=>{b=q;const he=q.applyToLocalDocumentSet(A,J);return g.documentOverlayCache.saveOverlays(B,q.batchId,he)}))})).then((()=>({batchId:b.batchId,changes:lE(A)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let y=h.du[h.currentUser.toKey()];y||(y=new nt(Pe)),y=y.insert(f,g),h.du[h.currentUser.toKey()]=y})(i,o.batchId,t),await Vl(i,o.changes),await ch(i.remoteStore)}catch(o){const l=Cp(o,"Failed to persist write");t.reject(l)}}async function $E(n,e){const t=Ee(n);try{const i=await IP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?je(h.hu,14607):o.removedDocuments.size>0&&(je(h.hu,42227),h.hu=!1))})),await Vl(t,i,e)}catch(i){await Zo(i)}}function z_(n,e,t){const i=Ee(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Ee(h);g.onlineState=f;let y=!1;g.queries.forEach(((w,A)=>{for(const b of A.Sa)b.va(f)&&(y=!0)})),y&&Np(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dx(n,e,t){const i=Ee(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let h=new nt(ce.comparator);h=h.insert(l,qt.newNoDocument(l,ve.min()));const f=xe().add(l),g=new ah(ve.min(),new Map,new nt(Pe),h,f);await $E(i,g),i.Ru=i.Ru.remove(l),i.Au.delete(e),Op(i)}else await Vf(i.localStore,e,!1).then((()=>Uf(i,e,t))).catch(Zo)}async function fx(n,e){const t=Ee(n),i=e.batch.batchId;try{const o=await TP(t.localStore,e);HE(t,i,null),qE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Vl(t,o)}catch(o){await Zo(o)}}async function px(n,e,t){const i=Ee(n);try{const o=await(function(h,f){const g=Ee(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return g.mutationQueue.lookupMutationBatch(y,f).next((A=>(je(A!==null,37113),w=A.keys(),g.mutationQueue.removeMutationBatch(y,A)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>g.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);HE(i,e,t),qE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Vl(i,o)}catch(o){await Zo(o)}}function qE(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function HE(n,e,t){const i=Ee(n);let o=i.du[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function Uf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Eu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||WE(n,i)}))}function WE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Ip(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Op(n))}function $_(n,e,t){for(const i of t)i instanceof jE?(n.Vu.addReference(i.key,e),mx(n,i)):i instanceof BE?(re(Dp,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||WE(n,i.key)):ge(19791,{wu:i})}function mx(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(i)||(re(Dp,"New document in limbo: "+t),n.Iu.add(i),Op(n))}function Op(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ce(We.fromString(e)),i=n.fu.next();n.Au.set(i,new ix(t)),n.Ru=n.Ru.insert(t,i),OE(n.remoteStore,new Oi(yr(nh(t.path)),i,"TargetPurposeLimboResolution",Zc.ce))}}async function Vl(n,e,t){const i=Ee(n),o=[],l=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{h.push(i.pu(g,e,t).then((y=>{var w;if((y||t)&&i.isPrimaryClient){const A=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;i.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(y){o.push(y);const A=Ep.Is(g.targetId,y);l.push(A)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,y){const w=Ee(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>$.forEach(y,(b=>$.forEach(b.Ts,(B=>w.persistence.referenceDelegate.addReference(A,b.targetId,B))).next((()=>$.forEach(b.Es,(B=>w.persistence.referenceDelegate.removeReference(A,b.targetId,B)))))))))}catch(A){if(!ea(A))throw A;re(Tp,"Failed to update sequence numbers: "+A)}for(const A of y){const b=A.targetId;if(!A.fromCache){const B=w.vs.get(b),G=B.snapshotVersion,J=B.withLastLimboFreeSnapshotVersion(G);w.vs=w.vs.insert(b,J)}}})(i.localStore,l))}async function gx(n,e){const t=Ee(n);if(!t.currentUser.isEqual(e)){re(Dp,"User change. New user:",e.toKey());const i=await xE(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new ee(z.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Vl(t,i.Ns)}}function yx(n,e){const t=Ee(n),i=t.Au.get(e);if(i&&i.hu)return xe().add(i.key);{let o=xe();const l=t.Eu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function KE(n){const e=Ee(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$E.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dx.bind(null,e),e.Pu.H_=ex.bind(null,e.eventManager),e.Pu.yu=tx.bind(null,e.eventManager),e}function _x(n){const e=Ee(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=px.bind(null,e),e}class Bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return EP(this.persistence,new _P,e.initialUser,this.serializer)}Cu(e){return new PE(wp.Vi,this.serializer)}Du(e){return new CP}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bc.provider={build:()=>new Bc};class vx extends Bc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){je(this.persistence.referenceDelegate instanceof Fc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new rP(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new PE((i=>Fc.Vi(i,t)),this.serializer)}}class Ff{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>z_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=gx.bind(null,this.syncEngine),await JP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ZP})()}createDatastore(e){const t=lh(e.databaseInfo.databaseId),i=DP(e.databaseInfo);return UP(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new jP(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>z_(this.syncEngine,t,0)),(function(){return L_.v()?new L_:new PP})())}createSyncEngine(e,t){return(function(o,l,h,f,g,y,w){const A=new sx(o,l,h,f,g,y);return w&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ee(o);re(Vs,"RemoteStore shutting down."),l.Ia.add(5),await Ol(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ff.provider={build:()=>new Ff};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="FirestoreClient";class wx{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=lp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{re(qi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(re(qi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Cp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function hf(n,e){n.asyncQueue.verifyOperationInProgress(),re(qi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await xE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function q_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ex(n);re(qi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>U_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>U_(e.remoteStore,o))),n._onlineComponents=e}async function Ex(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(qi,"Using user provided OfflineComponentProvider");try{await hf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Os("Error using user provided cache. Falling back to memory cache: "+t),await hf(n,new Bc)}}else re(qi,"Using default OfflineComponentProvider"),await hf(n,new vx(void 0));return n._offlineComponents}async function GE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(qi,"Using user provided OnlineComponentProvider"),await q_(n,n._uninitializedComponentsProvider._online)):(re(qi,"Using default OnlineComponentProvider"),await q_(n,new Ff))),n._onlineComponents}function Tx(n){return GE(n).then((e=>e.syncEngine))}async function zc(n){const e=await GE(n),t=e.eventManager;return t.onListen=ox.bind(null,e.syncEngine),t.onUnlisten=ux.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ax.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cx.bind(null,e.syncEngine),t}function Ix(n,e,t,i){const o=new Vp(i),l=new bp(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>Pp(await zc(n),l))),()=>{o.Nu(),n.asyncQueue.enqueueAndForget((async()=>xp(await zc(n),l)))}}function Sx(n,e,t={}){const i=new Hr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const w=new Vp({next:b=>{w.Nu(),h.enqueueAndForget((()=>xp(l,A)));const B=b.docs.has(f);!B&&b.fromCache?y.reject(new ee(z.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&b.fromCache&&g&&g.source==="server"?y.reject(new ee(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(b)},error:b=>y.reject(b)}),A=new bp(nh(f.path),w,{includeMetadataChanges:!0,qa:!0});return Pp(l,A)})(await zc(n),n.asyncQueue,e,t,i))),i.promise}function Ax(n,e,t={}){const i=new Hr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const w=new Vp({next:b=>{w.Nu(),h.enqueueAndForget((()=>xp(l,A))),b.fromCache&&g.source==="server"?y.reject(new ee(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(b)},error:b=>y.reject(b)}),A=new bp(f,w,{includeMetadataChanges:!0,qa:!0});return Pp(l,A)})(await zc(n),n.asyncQueue,e,t,i))),i.promise}function Rx(n,e){const t=new Hr;return n.asyncQueue.enqueueAndForget((async()=>hx(await Tx(n),e,t))),t.promise}/**
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
 */function QE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="ComponentProvider",H_=new Map;function Cx(n,e,t,i,o){return new K1(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,QE(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="firestore.googleapis.com",W_=!0;class K_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=YE,this.ssl=W_}else this.host=e.host,this.ssl=e.ssl??W_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=CE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tP)throw new ee(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}L1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QE(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new K_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new K_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new R1;switch(i.type){case"firstParty":return new x1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ee(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=H_.get(t);i&&(re(kx,"Removing Datastore"),H_.delete(t),i.terminate())})(this),Promise.resolve()}}function Px(n,e,t,i={}){var y;n=on(n,hh);const o=Fs(e),l=n._getSettings(),h={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&$f(`https://${f}`),l.host!==YE&&l.host!==f&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!Cs(g,h)&&(n._setSettings(g),i.mockUserToken)){let w,A;if(typeof i.mockUserToken=="string")w=i.mockUserToken,A=$t.MOCK_USER;else{w=wv(i.mockUserToken,(y=n._app)==null?void 0:y.options.projectId);const b=i.mockUserToken.sub||i.mockUserToken.user_id;if(!b)throw new ee(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new $t(b)}n._authCredentials=new k1(new Fw(w,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class ot{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Nl(t,ot._jsonSchema))return new ot(e,i||null,new ce(We.fromString(t.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:_t("string",ot._jsonSchemaVersion),referencePath:_t("string")};class Ui extends Jr{constructor(e,t,i){super(e,t,nh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new ce(e))}withConverter(e){return new Ui(this.firestore,e,this._path)}}function zt(n,e,...t){if(n=Ke(n),jw("collection","path",e),n instanceof hh){const i=We.fromString(e,...t);return o_(i),new Ui(n,null,i)}{if(!(n instanceof ot||n instanceof Ui))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(We.fromString(e,...t));return o_(i),new Ui(n.firestore,null,i)}}function Pn(n,e,...t){if(n=Ke(n),arguments.length===1&&(e=lp.newId()),jw("doc","path",e),n instanceof hh){const i=We.fromString(e,...t);return s_(i),new ot(n,null,new ce(i))}{if(!(n instanceof ot||n instanceof Ui))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(We.fromString(e,...t));return s_(i),new ot(n.firestore,n instanceof Ui?n.converter:null,new ce(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="AsyncQueue";class Q_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bE(this,"async_queue_retry"),this._c=()=>{const i=cf();i&&re(G_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=cf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=cf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Hr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ea(e))throw e;re(G_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Gr("INTERNAL UNHANDLED ERROR: ",Y_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=kp.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&ge(47125,{Pc:Y_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Y_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Yr extends hh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Q_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Q_(e),this._firestoreClient=void 0,await e}}}function xx(n,e){const t=typeof n=="object"?n:Wc(),i=typeof n=="string"?n:bc,o=js(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=yv("firestore");l&&Px(o,...l)}return o}function dh(n){if(n._terminated)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Nx(n),n._firestoreClient}function Nx(n){var i,o,l,h;const e=n._freezeSettings(),t=Cx(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new wx(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(Vt.fromBase64String(e))}catch(t){throw new ee(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Nl(e,xn._jsonSchema))return xn.fromBase64String(e.bytes)}}xn._jsonSchemaVersion="firestore/bytes/1.0",xn._jsonSchema={type:_t("string",xn._jsonSchemaVersion),bytes:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vr._jsonSchemaVersion}}static fromJSON(e){if(Nl(e,vr._jsonSchema))return new vr(e.latitude,e.longitude)}}vr._jsonSchemaVersion="firestore/geoPoint/1.0",vr._jsonSchema={type:_t("string",vr._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
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
 */class qn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:qn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Nl(e,qn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new qn(e.vectorValues);throw new ee(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qn._jsonSchemaVersion="firestore/vectorValue/1.0",qn._jsonSchema={type:_t("string",qn._jsonSchemaVersion),vectorValues:_t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=/^__.*__$/;class Dx{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Gi(e,this.data,this.fieldMask,t,this.fieldTransforms):new bl(e,this.data,t,this.fieldTransforms)}}class JE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Gi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function XE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{dataSource:n})}}class Up{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Up({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.mc(e),i}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.Ac(),i}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return $c(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(XE(this.dataSource)&&bx.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class Ox{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||lh(e)}A(e,t,i,o=!1){return new Up({dataSource:e,methodName:t,targetDoc:i,path:Ot.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fh(n){const e=n._freezeSettings(),t=lh(n._databaseId);return new Ox(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ZE(n,e,t,i,o,l={}){const h=n.A(l.merge||l.mergeFields?2:0,e,t,o);Fp("Data must be an object, but it was:",h,i);const f=e0(i,h);let g,y;if(l.merge)g=new vn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const A of l.mergeFields){const b=Ls(e,A,t);if(!h.contains(b))throw new ee(z.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);r0(w,b)||w.push(b)}g=new vn(w),y=h.fieldTransforms.filter((A=>g.covers(A.field)))}else g=null,y=h.fieldTransforms;return new Dx(new rn(f),g,y)}class ph extends Mp{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ph}}function Vx(n,e,t,i){const o=n.A(1,e,t);Fp("Data must be an object, but it was:",o,i);const l=[],h=rn.empty();Ki(i,((g,y)=>{const w=n0(e,g,t);y=Ke(y);const A=o.fc(w);if(y instanceof ph)l.push(w);else{const b=Ll(y,A);b!=null&&(l.push(w),h.set(w,b))}}));const f=new vn(l);return new JE(h,f,o.fieldTransforms)}function Lx(n,e,t,i,o,l){const h=n.A(1,e,t),f=[Ls(e,i,t)],g=[o];if(l.length%2!=0)throw new ee(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)f.push(Ls(e,l[b])),g.push(l[b+1]);const y=[],w=rn.empty();for(let b=f.length-1;b>=0;--b)if(!r0(y,f[b])){const B=f[b];let G=g[b];G=Ke(G);const J=h.fc(B);if(G instanceof ph)y.push(B);else{const q=Ll(G,J);q!=null&&(y.push(B),w.set(B,q))}}const A=new vn(y);return new JE(w,A,h.fieldTransforms)}function Mx(n,e,t,i=!1){return Ll(t,n.A(i?4:3,e))}function Ll(n,e){if(t0(n=Ke(n)))return Fp("Unsupported field value:",e,n),e0(n,e);if(n instanceof Mp)return(function(i,o){if(!XE(o.dataSource))throw o.yc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=Ll(f,o.gc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=Ke(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return vC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Je.fromDate(i);return{timestampValue:Uc(o.serializer,l)}}if(i instanceof Je){const l=new Je(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Uc(o.serializer,l)}}if(i instanceof vr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof xn)return{bytesValue:wE(o.serializer,i._byteString)};if(i instanceof ot){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:_p(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof qn)return(function(h,f){const g=h instanceof qn?h.toArray():h;return{mapValue:{fields:{[Qw]:{stringValue:Yw},[Dc]:{arrayValue:{values:g.map((w=>{if(typeof w!="number")throw f.yc("VectorValues must only contain numeric values.");return pp(f.serializer,w)}))}}}}}})(i,o);if(kE(i))return i._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Xc(i)}`)})(n,e)}function e0(n,e){const t={};return $w(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(n,((i,o)=>{const l=Ll(o,e.dc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function t0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Je||n instanceof vr||n instanceof xn||n instanceof ot||n instanceof Mp||n instanceof qn||kE(n))}function Fp(n,e,t){if(!t0(t)||!Bw(t)){const i=Xc(t);throw i==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+i)}}function Ls(n,e,t){if((e=Ke(e))instanceof Lp)return e._internalPath;if(typeof e=="string")return n0(n,e);throw $c("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ux=new RegExp("[~\\*/\\[\\]]");function n0(n,e,t){if(e.search(Ux)>=0)throw $c(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Lp(...e.split("."))._internalPath}catch{throw $c(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $c(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ee(z.INVALID_ARGUMENT,f+n+g)}function r0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{convertValue(e,t="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ki(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[Dc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>dt(h.doubleValue)));return new qn(t)}convertGeoPoint(e){return new vr(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=th(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(wl(e));default:return null}}convertTimestamp(e){const t=ji(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=We.fromString(e);je(RE(i),9688,{name:e});const o=new El(i.get(1),i.get(3)),l=new ce(i.popFirst(5));return o.isEqual(t)||Gr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class jp extends Fx{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}const J_="@firebase/firestore",X_="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ls("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class jx extends i0{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bp{}class zp extends Bp{}function yn(n,e,...t){let i=[];e instanceof Bp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof $p)).length,f=l.filter((g=>g instanceof mh)).length;if(h>1||h>0&&f>0)throw new ee(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class mh extends zp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new mh(e,t,i)}_apply(e){const t=this._parse(e);return a0(e._query,t),new Jr(e.firestore,e.converter,xf(e._query,t))}_parse(e){const t=fh(e.firestore);return(function(l,h,f,g,y,w,A){let b;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){tv(A,w);const G=[];for(const J of A)G.push(ev(g,l,J));b={arrayValue:{values:G}}}else b=ev(g,l,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||tv(A,w),b=Mx(f,h,A,w==="in"||w==="not-in");return yt.create(y,w,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function wc(n,e,t){const i=e,o=Ls("where",n);return mh._create(o,i,t)}class $p extends Bp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new $p(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)a0(h,g),h=xf(h,g)})(e._query,t),new Jr(e.firestore,e.converter,xf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qp extends zp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new qp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Il(l,h)})(e._query,this._field,this._direction);return new Jr(e.firestore,e.converter,hC(e._query,t))}}function Vi(n,e="asc"){const t=e,i=Ls("orderBy",n);return qp._create(i,t)}class Hp extends zp{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Hp(e,t,i)}_apply(e){return new Jr(e.firestore,e.converter,Vc(e._query,this._limit,this._limitType))}}function o0(n){return Hp._create("limit",n,"F")}function ev(n,e,t){if(typeof(t=Ke(t))=="string"){if(t==="")throw new ee(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iE(e)&&t.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(We.fromString(t));if(!ce.isDocumentKey(i))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return p_(n,new ce(i))}if(t instanceof ot)return p_(n,t._key);throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xc(t)}.`)}function tv(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function a0(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function l0(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class al{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class As extends i0{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Ls("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=As._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}As._jsonSchemaVersion="firestore/documentSnapshot/1.0",As._jsonSchema={type:_t("string",As._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class Ec extends As{data(e={}){return super.data(e)}}class Rs{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new al(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Ec(this._firestore,this._userDataWriter,i.key,i,new al(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new Ec(o._firestore,o._userDataWriter,f.doc.key,f.doc,new al(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new Ec(o._firestore,o._userDataWriter,f.doc.key,f.doc,new al(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:Bx(f.type),doc:g,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Bx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:n})}}/**
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
 */Rs._jsonSchemaVersion="firestore/querySnapshot/1.0",Rs._jsonSchema={type:_t("string",Rs._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(n){n=on(n,ot);const e=on(n.firestore,Yr),t=dh(e);return Sx(t,n._key).then((i=>u0(e,n,i)))}function Oo(n){n=on(n,Jr);const e=on(n.firestore,Yr),t=dh(e),i=new jp(e);return s0(n._query),Ax(t,n._query).then((o=>new Rs(e,i,n,o)))}function $x(n,e,t){n=on(n,ot);const i=on(n.firestore,Yr),o=l0(n.converter,e),l=fh(i);return gh(i,[ZE(l,"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Nn.none())])}function Za(n,e,t,...i){n=on(n,ot);const o=on(n.firestore,Yr),l=fh(o);let h;return h=typeof(e=Ke(e))=="string"||e instanceof Lp?Lx(l,"updateDoc",n._key,e,t,i):Vx(l,"updateDoc",n._key,e),gh(o,[h.toMutation(n._key,Nn.exists(!0))])}function sc(n){return gh(on(n.firestore,Yr),[new mp(n._key,Nn.none())])}function oc(n,e){const t=on(n.firestore,Yr),i=Pn(n),o=l0(n.converter,e),l=fh(n.firestore);return gh(t,[ZE(l,"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Nn.exists(!1))]).then((()=>i))}function el(n,...e){var y,w,A;n=Ke(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Z_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Z_(e[i])){const b=e[i];e[i]=(y=b.next)==null?void 0:y.bind(b),e[i+1]=(w=b.error)==null?void 0:w.bind(b),e[i+2]=(A=b.complete)==null?void 0:A.bind(b)}let l,h,f;if(n instanceof ot)h=on(n.firestore,Yr),f=nh(n._key.path),l={next:b=>{e[i]&&e[i](u0(h,n,b))},error:e[i+1],complete:e[i+2]};else{const b=on(n,Jr);h=on(b.firestore,Yr),f=b._query;const B=new jp(h);l={next:G=>{e[i]&&e[i](new Rs(h,B,b,G))},error:e[i+1],complete:e[i+2]},s0(n._query)}const g=dh(h);return Ix(g,f,o,l)}function gh(n,e){const t=dh(n);return Rx(t,e)}function u0(n,e,t){const i=t.docs.get(e._key),o=new jp(n);return new As(n,o,e._key,i,new al(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){A1(Bs),Hn(new bn("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Yr(new C1(i.getProvider("auth-internal")),new N1(h,i.getProvider("app-check-internal")),G1(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),sn(J_,X_,e),sn(J_,X_,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="firebasestorage.googleapis.com",h0="storageBucket",qx=120*1e3,Hx=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Gn{constructor(e,t,i=0){super(df(e),`Firebase Storage: ${t} (${df(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return df(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var at;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(at||(at={}));function df(n){return"storage/"+n}function Wp(){const n="An unknown error occurred, please check the error payload for server response.";return new lt(at.UNKNOWN,n)}function Wx(n){return new lt(at.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Kx(n){return new lt(at.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Gx(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new lt(at.UNAUTHENTICATED,n)}function Qx(){return new lt(at.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Yx(n){return new lt(at.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Jx(){return new lt(at.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xx(){return new lt(at.CANCELED,"User canceled the upload/download.")}function Zx(n){return new lt(at.INVALID_URL,"Invalid URL '"+n+"'.")}function eN(n){return new lt(at.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function tN(){return new lt(at.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h0+"' property when initializing the app?")}function nN(){return new lt(at.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rN(){return new lt(at.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iN(n){return new lt(at.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jf(n){return new lt(at.INVALID_ARGUMENT,n)}function d0(){return new lt(at.APP_DELETED,"The Firebase app was deleted.")}function sN(n){return new lt(at.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fl(n,e){return new lt(at.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function tl(n){throw new lt(at.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=wn.makeFromUrl(e,t)}catch{return new wn(e,"")}if(i.path==="")return i;throw eN(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ye){ye.path.charAt(ye.path.length-1)==="/"&&(ye.path_=ye.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function y(ye){ye.path_=decodeURIComponent(ye.path)}const w="v[A-Za-z0-9_]+",A=t.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",B=new RegExp(`^https?://${A}/${w}/b/${o}/o${b}`,"i"),G={bucket:1,path:3},J=t===c0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,q="([^?#]*)",he=new RegExp(`^https?://${J}/${o}/${q}`,"i"),pe=[{regex:f,indices:g,postModify:l},{regex:B,indices:G,postModify:y},{regex:he,indices:{bucket:1,path:2},postModify:y}];for(let ye=0;ye<pe.length;ye++){const ke=pe[ye],Ie=ke.regex.exec(e);if(Ie){const O=Ie[ke.indices.bucket];let k=Ie[ke.indices.path];k||(k=""),i=new wn(O,k),ke.postModify(i);break}}if(i==null)throw Zx(e);return i}}class oN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let y=!1;function w(...q){y||(y=!0,e.apply(null,q))}function A(q){o=setTimeout(()=>{o=null,n(B,g())},q)}function b(){l&&clearTimeout(l)}function B(q,...he){if(y){b();return}if(q){b(),w.call(null,q,...he);return}if(g()||h){b(),w.call(null,q,...he);return}i<64&&(i*=2);let pe;f===1?(f=2,pe=0):pe=(i+Math.random())*1e3,A(pe)}let G=!1;function J(q){G||(G=!0,b(),!y&&(o!==null?(q||(f=2),clearTimeout(o),A(0)):q||(f=1)))}return A(0),l=setTimeout(()=>{h=!0,J(!0)},t),J}function lN(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(n){return n!==void 0}function cN(n){return typeof n=="object"&&!Array.isArray(n)}function Kp(n){return typeof n=="string"||n instanceof String}function nv(n){return Gp()&&n instanceof Blob}function Gp(){return typeof Blob<"u"}function rv(n,e,t,i){if(i<e)throw jf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw jf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function f0(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var ks;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ks||(ks={}));/**
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
 */function hN(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,t,i,o,l,h,f,g,y,w,A,b=!0,B=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=y,this.progressCallback_=w,this.connectionFactory_=A,this.retry=b,this.isUsingEmulator=B,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((G,J)=>{this.resolve_=G,this.reject_=J,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new ac(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===ks.NO_ERROR,g=l.getStatus();if(!f||hN(g,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===ks.ABORT;i(!1,new ac(!1,null,w));return}const y=this.successCodes_.indexOf(g)!==-1;i(!0,new ac(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());uN(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=Wp();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?d0():Xx();h(g)}else{const g=Jx();h(g)}};this.canceled_?t(!1,new ac(!1,null,!0)):this.backoffId_=aN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ac{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function fN(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function pN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function gN(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function yN(n,e,t,i,o,l,h=!0,f=!1){const g=f0(n.urlParams),y=n.url+g,w=Object.assign({},n.headers);return mN(w,e),fN(w,t),pN(w,l),gN(w,i),new dN(y,n.method,w,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vN(...n){const e=_N();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Gp())return new Blob(n);throw new lt(at.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wN(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function EN(n){if(typeof atob>"u")throw iN("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ff{constructor(e,t){this.data=e,this.contentType=t||null}}function TN(n,e){switch(n){case pr.RAW:return new ff(p0(e));case pr.BASE64:case pr.BASE64URL:return new ff(m0(n,e));case pr.DATA_URL:return new ff(SN(e),AN(e))}throw Wp()}function p0(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=n.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function IN(n){let e;try{e=decodeURIComponent(n)}catch{throw fl(pr.DATA_URL,"Malformed data URL.")}return p0(e)}function m0(n,e){switch(n){case pr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw fl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case pr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw fl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=EN(e)}catch(o){throw o.message.includes("polyfill")?o:fl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class g0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw fl(pr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=RN(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function SN(n){const e=new g0(n);return e.base64?m0(pr.BASE64,e.rest):IN(e.rest)}function AN(n){return new g0(n).contentType}function RN(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t){let i=0,o="";nv(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(nv(this.data_)){const i=this.data_,o=wN(i,e,t);return o===null?null:new Di(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Di(i,!0)}}static getBlob(...e){if(Gp()){const t=e.map(i=>i instanceof Di?i.data_:i);return new Di(vN.apply(null,t))}else{const t=e.map(h=>Kp(h)?TN(pr.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new Di(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(n){let e;try{e=JSON.parse(n)}catch{return null}return cN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function CN(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function _0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(n,e){return e}class Qt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||PN}}let lc=null;function xN(n){return!Kp(n)||n.length<2?n:_0(n)}function v0(){if(lc)return lc;const n=[];n.push(new Qt("bucket")),n.push(new Qt("generation")),n.push(new Qt("metageneration")),n.push(new Qt("name","fullPath",!0));function e(l,h){return xN(h)}const t=new Qt("name");t.xform=e,n.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Qt("size");return o.xform=i,n.push(o),n.push(new Qt("timeCreated")),n.push(new Qt("updated")),n.push(new Qt("md5Hash",null,!0)),n.push(new Qt("cacheControl",null,!0)),n.push(new Qt("contentDisposition",null,!0)),n.push(new Qt("contentEncoding",null,!0)),n.push(new Qt("contentLanguage",null,!0)),n.push(new Qt("contentType",null,!0)),n.push(new Qt("metadata","customMetadata",!0)),lc=n,lc}function NN(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new wn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function bN(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return NN(i,n),i}function w0(n,e,t){const i=y0(e);return i===null?null:bN(n,i,t)}function DN(n,e,t,i){const o=y0(e);if(o===null||!Kp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(y=>{const w=n.bucket,A=n.fullPath,b="/b/"+h(w)+"/o/"+h(A),B=Qp(b,t,i),G=f0({alt:"media",token:y});return B+G})[0]}function ON(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class E0{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(n){if(!n)throw Wp()}function VN(n,e){function t(i,o){const l=w0(n,o,e);return T0(l!==null),l}return t}function LN(n,e){function t(i,o){const l=w0(n,o,e);return T0(l!==null),DN(l,o,n.host,n._protocol)}return t}function I0(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=Qx():o=Gx():t.getStatus()===402?o=Kx(n.bucket):t.getStatus()===403?o=Yx(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function MN(n){const e=I0(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=Wx(n.path)),l.serverResponse=o.serverResponse,l}return t}function UN(n,e,t){const i=e.fullServerUrl(),o=Qp(i,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,f=new E0(o,l,LN(n,t),h);return f.errorHandler=MN(e),f}function FN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function jN(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=FN(null,e)),i}function BN(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let pe="";for(let ye=0;ye<2;ye++)pe=pe+Math.random().toString().slice(2);return pe}const g=f();h["Content-Type"]="multipart/related; boundary="+g;const y=jN(e,i,o),w=ON(y,t),A="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+w+`\r
--`+g+`\r
Content-Type: `+y.contentType+`\r
\r
`,b=`\r
--`+g+"--",B=Di.getBlob(A,i,b);if(B===null)throw nN();const G={name:y.fullPath},J=Qp(l,n.host,n._protocol),q="POST",he=n.maxUploadRetryTime,ue=new E0(J,q,VN(n,t),he);return ue.urlParams=G,ue.headers=h,ue.body=B.uploadData(),ue.errorHandler=I0(e),ue}class zN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ks.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ks.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ks.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw tl("cannot .send() more than once");if(Fs(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw tl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw tl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw tl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw tl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $N extends zN{initXhr(){this.xhr_.responseType="text"}}function S0(){return new $N}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this._service=e,t instanceof wn?this._location=t:this._location=wn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ms(e,t)}get root(){const e=new wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _0(this._location.path)}get storage(){return this._service}get parent(){const e=kN(this._location.path);if(e===null)return null;const t=new wn(this._location.bucket,e);return new Ms(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw sN(e)}}function qN(n,e,t){n._throwIfRoot("uploadBytes");const i=BN(n.storage,n._location,v0(),new Di(e,!0),t);return n.storage.makeRequestWithTokens(i,S0).then(o=>({metadata:o,ref:n}))}function HN(n){n._throwIfRoot("getDownloadURL");const e=UN(n.storage,n._location,v0());return n.storage.makeRequestWithTokens(e,S0).then(t=>{if(t===null)throw rN();return t})}function WN(n,e){const t=CN(n._location.path,e),i=new wn(n._location.bucket,t);return new Ms(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(n){return/^[A-Za-z]+:\/\//.test(n)}function GN(n,e){return new Ms(n,e)}function A0(n,e){if(n instanceof Yp){const t=n;if(t._bucket==null)throw tN();const i=new Ms(t,t._bucket);return e!=null?A0(i,e):i}else return e!==void 0?WN(n,e):n}function QN(n,e){if(e&&KN(e)){if(n instanceof Yp)return GN(n,e);throw jf("To use ref(service, url), the first argument must be a Storage instance.")}else return A0(n,e)}function iv(n,e){const t=e==null?void 0:e[h0];return t==null?null:wn.makeFromBucketSpec(t,n)}function YN(n,e,t,i={}){n.host=`${e}:${t}`;const o=Fs(e);o&&$f(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:wv(l,n.app.options.projectId))}class Yp{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=c0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qx,this._maxUploadRetryTime=Hx,this._requests=new Set,o!=null?this._bucket=wn.makeFromBucketSpec(o,this._host):this._bucket=iv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wn.makeFromBucketSpec(this._url,e):this._bucket=iv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ms(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new oN(d0());{const h=yN(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const sv="@firebase/storage",ov="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="storage";function JN(n,e,t){return n=Ke(n),qN(n,e,t)}function XN(n){return n=Ke(n),HN(n)}function ZN(n,e){return n=Ke(n),QN(n,e)}function e2(n=Wc(),e){n=Ke(n);const i=js(n,R0).getImmediate({identifier:e}),o=yv("storage");return o&&t2(i,...o),i}function t2(n,e,t,i={}){YN(n,e,t,i)}function n2(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Yp(t,i,o,e,Bs)}function r2(){Hn(new bn(R0,n2,"PUBLIC").setMultipleInstances(!0)),sn(sv,ov,""),sn(sv,ov,"esm2020")}r2();const i2={apiKey:"AIzaSyDuxT03D9vxSWE5Fw29sdsnCohTtGj32fo",authDomain:"ipreu-95300.firebaseapp.com",projectId:"ipreu-95300",storageBucket:"ipreu-95300.firebasestorage.app",messagingSenderId:"921313347665",appId:"1:921313347665:web:128cdbb3e428b113a71070"},yh=Av(i2),jr=QR(yh),qe=xx(yh),s2=e2(yh),uc=typeof window<"u"?T1(yh):null,Jp="uc_token",Xp="uc_user";function av(n,e){try{localStorage.setItem(Jp,n),localStorage.setItem(Xp,JSON.stringify(e))}catch(t){console.error("Failed to save session",t)}}function o2(){try{const n=localStorage.getItem(Jp),e=localStorage.getItem(Xp);return{token:n,user:e?JSON.parse(e):null}}catch{return{token:null,user:null}}}function lv(){try{localStorage.removeItem(Jp),localStorage.removeItem(Xp),dc(jr).catch(console.error)}catch(n){console.error("Failed to clear session",n)}}const Et={login:async(n,e)=>{if(!e)throw new Error("Password required");const t=await VA(jr,n,e),i=await zx(Pn(qe,"users",t.user.uid));if(!i.exists())throw await dc(jr),new Error("User record not found in database.");const o={id:i.id,...i.data()};if(o.role==="PENDING")throw await dc(jr),new Error("Your application is still pending approval. Please check back later.");return{token:await t.user.getIdToken(),user:o}},register:async n=>{if(!n.password)throw new Error("Password required");if(!n.email)throw new Error("Email required");const e=n.email.toLowerCase().trim(),t=await OA(jr,e,n.password),{password:i,...o}=n;return o.email=e,await $x(Pn(qe,"users",t.user.uid),{...o,role:"PENDING",createdAt:new Date().toISOString()}),await dc(jr),!0},getAnnouncements:async()=>{const n=yn(zt(qe,"announcements"),Vi("createdAt","desc"),o0(30));return(await Oo(n)).docs.map(t=>({id:t.id,...t.data()}))},createAnnouncement:async n=>{const e=new Date().toISOString();return{id:(await oc(zt(qe,"announcements"),{...n,createdAt:e})).id,...n,createdAt:e}},deleteAnnouncement:async n=>(await sc(Pn(qe,"announcements",n)),!0),updateAnnouncement:async(n,e)=>(await Za(Pn(qe,"announcements",n),e),!0),getPendingUsers:async()=>{const n=yn(zt(qe,"users"),wc("role","==","PENDING"));return(await Oo(n)).docs.map(t=>({id:t.id,...t.data()}))},getApprovedUsers:async()=>{const n=yn(zt(qe,"users"),wc("role","==","MEMBER"));return(await Oo(n)).docs.map(t=>({id:t.id,...t.data()}))},rejectUser:async n=>(await sc(Pn(qe,"users",n)),!0),approveUser:async(n,e)=>{const t=Pn(qe,"users",n);return await Za(t,{role:"MEMBER",memberNo:e}),!0},getSurveys:async()=>{const n=yn(zt(qe,"surveys"));return(await Oo(n)).docs.map(t=>({id:t.id,...t.data()}))},createSurvey:async n=>({id:(await oc(zt(qe,"surveys"),n)).id,...n}),deleteSurvey:async n=>(await sc(Pn(qe,"surveys",n)),!0),updateSurvey:async(n,e)=>(await Za(Pn(qe,"surveys",n),e),!0),getCalendarEvents:async()=>{const n=yn(zt(qe,"calendar"),Vi("date","asc"));return(await Oo(n)).docs.map(t=>({id:t.id,...t.data()}))},createCalendarEvent:async n=>({id:(await oc(zt(qe,"calendar"),n)).id,...n}),deleteCalendarEvent:async n=>(await sc(Pn(qe,"calendar",n)),!0),getGrievances:async n=>{let e;const t=zt(qe,"grievances");return n?e=yn(t,wc("userId","==",n),Vi("createdAt","desc")):e=yn(t,Vi("createdAt","desc")),(await Oo(e)).docs.map(o=>({id:o.id,...o.data()}))},createGrievance:async n=>({id:(await oc(zt(qe,"grievances"),n)).id,...n}),updateGrievance:async(n,e)=>(await Za(Pn(qe,"grievances",n),e),!0),saveFcmToken:async(n,e)=>{const t=Pn(qe,"users",n);await Za(t,{fcmToken:e})}},uv=Ze.lazy(()=>zf(()=>import("./Auth-Dfry_zU0.js"),[])),a2=Ze.lazy(()=>zf(()=>import("./AdminDashboard-Cw5drwbR.js"),__vite__mapDeps([0,1]))),l2=Ze.lazy(()=>zf(()=>import("./MemberDashboard-DRFeDwr8.js"),__vite__mapDeps([2,1]))),k0=Ze.createContext(null),C0=()=>{const n=Ze.useContext(k0);if(!n)throw new Error("useAppContext must be used within AppProvider");return n};function u2(){const[n,e]=Ze.useState(!0),[t,i]=Ze.useState(!1),[o,l]=Ze.useState(()=>localStorage.getItem("theme")==="dark"),[h,f]=Ze.useState(null),[g,y]=Ze.useState([]),[w,A]=Ze.useState([]),[b,B]=Ze.useState([]),[G,J]=Ze.useState([]),[q,he]=Ze.useState([]),[ue,pe]=Ze.useState(()=>new URLSearchParams(window.location.search).get("tab")||"dashboard"),[ye,ke]=Ze.useState(null);Ze.useEffect(()=>{const T=new URL(window.location.href);ue&&ue!=="dashboard"?T.searchParams.set("tab",ue):T.searchParams.delete("tab"),window.history.replaceState({},"",T.toString())},[ue]),hv.useLayoutEffect(()=>{document.documentElement.classList.toggle("dark",o),localStorage.setItem("theme",o?"dark":"light")},[o]),Ze.useEffect(()=>{const T={dashboard:"My Dashboard | IPREU",calendar:"Union Calendar | IPREU",grievances:"Secure Grievances | IPREU",overview:"Admin Overview | IPREU",members:"Manage Users | IPREU",announcements:"Broadcast | IPREU"};document.title=T[ue]||"IPREU Union Connect"},[ue]),Ze.useEffect(()=>{const T=UA(jr,async S=>{S?(!h||h.id!==S.uid)&&console.log("Syncing currentUser with Auth UID:",S.uid):h&&(console.warn("Auth lost, clearing UI session"),f(null),lv())});return(async()=>{try{const S=o2();S&&S.user&&(f(S.user),Ie(S.user.id))}catch(S){console.error("Session init failed:",S)}finally{e(!1)}})(),()=>T()},[]),Ze.useEffect(()=>{if(!h)return;const T=yn(zt(qe,"announcements"),Vi("createdAt","desc"),o0(30)),P=el(T,Y=>{A(Y.docs.map(ne=>({id:ne.id,...ne.data()})))},Y=>console.error("Announcements Sync Error:",Y)),S=yn(zt(qe,"surveys")),D=el(S,Y=>{y(Y.docs.map(ne=>({id:ne.id,...ne.data()})))},Y=>console.error("Surveys Sync Error:",Y)),I=yn(zt(qe,"calendar"),Vi("date","asc")),Se=el(I,Y=>{B(Y.docs.map(ne=>({id:ne.id,...ne.data()})))},Y=>console.error("Calendar Sync Error:",Y));let rt;h.role==="ADMIN"?rt=yn(zt(qe,"grievances"),Vi("createdAt","desc")):rt=yn(zt(qe,"grievances"),wc("userId","==",h.id),Vi("createdAt","desc"));const It=el(rt,Y=>{J(Y.docs.map(ne=>({id:ne.id,...ne.data()})))},Y=>console.error("Grievances Sync Error:",Y));let ze=()=>{};if(h.role==="ADMIN"){const Y=yn(zt(qe,"users"));ze=el(Y,ne=>{he(ne.docs.map(x=>({id:x.id,...x.data()})))})}return()=>{P(),D(),Se(),It(),ze()}},[h==null?void 0:h.id]);const Ie=async T=>{if(uc)try{if(await Notification.requestPermission()==="granted"){const S=await I1(uc,{vapidKey:"BKZqsvNJwZbljTyY0T6ho_GruW2LiC8WBEre2uMqg6A-67sBHoF2RIg6VCX2BLMs0LVolggQTCap4zwDgedyKjI"});S&&await Et.saveFcmToken(T,S)}}catch(P){console.error("FCM Registration failed:",P)}};Ze.useEffect(()=>{if(!uc)return;const T=S1(uc,P=>{var S,D;alert(`Notification: ${(S=P.notification)==null?void 0:S.title}
${(D=P.notification)==null?void 0:D.body}`)});return()=>T()},[]);const O=Ze.useMemo(()=>({currentUser:h,isDarkMode:o,toggleDarkMode:()=>l(T=>!T),users:q,surveys:g,announcements:w,calendarEvents:b,grievances:G,fetchAnnouncements:async()=>{const T=await Et.getAnnouncements();A(T)},memberLogin:async(T,P)=>{var S;try{const D=await Et.login(T,P);return D.token&&D.user&&D.user.role==="MEMBER"?(f(D.user),av(D.token,D.user),{success:!0}):{success:!1,error:"Access denied. Only members can login here."}}catch(D){return(S=D.message)!=null&&S.includes("pending approval")?{success:!1,pending:!0}:{success:!1,error:D.message||"Login failed"}}},adminLogin:async(T,P)=>{try{const S=await Et.login(T,P);if(S.token&&S.user&&S.user.role==="ADMIN"){f(S.user),av(S.token,S.user);const[D,I]=await Promise.all([Et.getPendingUsers(),Et.getApprovedUsers()]);return he([...D,...I]),{success:!0}}return{success:!1,error:"Access denied. Only admins can login here."}}catch(S){return{success:!1,error:S.message||"Admin login failed"}}},logout:()=>{f(null),lv()},register:async(T,P)=>{let S="";try{const D=ZN(s2,`profile_photos/${Date.now()}_${T.employeeNumber}.jpg`);await JN(D,P),S=await XN(D)}catch(D){throw console.error("Photo upload failed:",D),new Error("Failed to upload profile photo. Please try again.")}return await Et.register({...T,photoUrl:S}),!0},rejectRegistration:async T=>{await Et.rejectUser(T),he(P=>P.filter(S=>S.id!==T))},approveRegistration:async T=>{const D=`IPREU-${(q.filter(I=>I.role===Fo.MEMBER).length+1).toString().padStart(4,"0")}`;await Et.approveUser(T,D),he(I=>I.map(Se=>Se.id===T?{...Se,role:Fo.MEMBER,memberNo:D}:Se))},createSurvey:async T=>{const P=await Et.createSurvey({...T,votes:{}});y(S=>[P,...S])},deleteSurvey:async T=>{await Et.deleteSurvey(T),y(P=>P.filter(S=>S.id!==T))},submitVote:async(T,P)=>{if(!h)return;const S=g.find(I=>I.id===T);if(!S)return;const D={...S.votes,[h.id]:P};await Et.updateSurvey(T,{votes:D}),y(I=>I.map(Se=>Se.id===T?{...Se,votes:D}:Se))},createAnnouncement:async(T,P,S)=>{const D=await Et.createAnnouncement({title:T,content:P,attachment:S??void 0});A(I=>[D,...I])},updateAnnouncement:async(T,P,S)=>{await Et.updateAnnouncement(T,{title:P,content:S}),A(D=>D.map(I=>I.id===T?{...I,title:P,content:S}:I))},deleteAnnouncement:async T=>{await Et.deleteAnnouncement(T),A(P=>P.filter(S=>S.id!==T))},createCalendarEvent:async T=>{const P=await Et.createCalendarEvent({...T,createdAt:new Date().toISOString()});B(S=>[...S,P])},deleteCalendarEvent:async T=>{await Et.deleteCalendarEvent(T),B(P=>P.filter(S=>S.id!==T))},submitGrievance:async(T,P,S)=>{if(!jr.currentUser)throw new Error("Session expired. Please log in again to register a grievance.");const D={userId:jr.currentUser.uid,userName:(h==null?void 0:h.employeeName)||"Anonymous",employeeNumber:(h==null?void 0:h.employeeNumber)||"N/A",postingLocation:(h==null?void 0:h.postingLocation)||"N/A",pocName:(h==null?void 0:h.pocName)||"N/A",shift:(h==null?void 0:h.shift)||"N/A",subject:T,description:P,category:S,status:"NEW",createdAt:new Date().toISOString()},I=await Et.createGrievance(D);J(Se=>[I,...Se])},respondToGrievance:async(T,P)=>{const S={response:P,respondedAt:new Date().toISOString(),status:"RESOLVED"};await Et.updateGrievance(T,S),J(D=>D.map(I=>I.id===T?{...I,...S}:I))}}),[h,q,g,w,b,G,o]),k=()=>{if(!h)return t?C.jsx(uv,{onBack:()=>i(!1)}):C.jsx(rI,{onLoginClick:T=>{T&&ke(T),i(!0)}});switch(ye&&(pe(ye),ke(null)),h.role){case Fo.ADMIN:return C.jsx(a2,{activeTab:ue,setActiveTab:pe});case Fo.MEMBER:return C.jsx(l2,{activeTab:ue,setActiveTab:pe});default:return C.jsx(uv,{onBack:()=>i(!1)})}};return n?C.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#fcfaf7] transition-colors duration-300",children:C.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.3)]"})}):C.jsx(k0.Provider,{value:O,children:C.jsxs("div",{className:"min-h-screen font-sans bg-[#fcfaf7] transition-colors duration-300",children:[C.jsx(YT,{onLoginClick:()=>i(!0)}),C.jsx("main",{className:"container mx-auto p-4 md:p-8 pb-32",children:C.jsx(Ze.Suspense,{fallback:C.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:C.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"})}),children:k()})}),h&&C.jsx("footer",{className:"w-full py-12 bg-white/5 border-t border-orange-100 backdrop-blur-sm mt-auto",children:C.jsx("div",{className:"container mx-auto px-4",children:C.jsx(dv,{})})})]})})}const P0=document.getElementById("root");if(!P0)throw new Error("Could not find root element to mount to");const c2=HT.createRoot(P0);c2.render(C.jsx(hv.StrictMode,{children:C.jsx(u2,{})}));export{ZT as C,h2 as I,JT as M,eI as P,hv as R,Fo as U,GT as a,C as j,Ze as r,C0 as u};
