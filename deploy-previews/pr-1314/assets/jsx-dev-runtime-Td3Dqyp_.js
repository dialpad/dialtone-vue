import{h as Qr}from"./index-a3vYOHox.js";var br={exports:{}},V={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var Er=Qr,j=Symbol.for("react.element"),hr=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),G=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),yr=Symbol.for("react.offscreen"),z=Symbol.iterator,Rr="@@iterator";function mr(r){if(r===null||typeof r!="object")return null;var e=z&&r[z]||r[Rr];return typeof e=="function"?e:null}var b=Er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(r){{for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];_r("error",r,t)}}function _r(r,e,t){{var a=b.ReactDebugCurrentFrame,i=a.getStackAddendum();i!==""&&(e+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+e),Function.prototype.apply.call(console[r],console,u)}}var Tr=!1,Cr=!1,Pr=!1,wr=!1,Or=!1,K;K=Symbol.for("react.module.reference");function Sr(r){return!!(typeof r=="string"||typeof r=="function"||r===m||r===N||Or||r===U||r===x||r===k||wr||r===yr||Tr||Cr||Pr||typeof r=="object"&&r!==null&&(r.$$typeof===D||r.$$typeof===T||r.$$typeof===B||r.$$typeof===G||r.$$typeof===_||r.$$typeof===K||r.getModuleId!==void 0))}function jr(r,e,t){var a=r.displayName;if(a)return a;var i=e.displayName||e.name||"";return i!==""?t+"("+i+")":t}function H(r){return r.displayName||"Context"}function d(r){if(r==null)return null;if(typeof r.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case m:return"Fragment";case hr:return"Portal";case N:return"Profiler";case U:return"StrictMode";case x:return"Suspense";case k:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case G:var e=r;return H(e)+".Consumer";case B:var t=r;return H(t._context)+".Provider";case _:return jr(r,r.render,"ForwardRef");case T:var a=r.displayName||null;return a!==null?a:d(r.type)||"Memo";case D:{var i=r,u=i._payload,o=i._init;try{return d(o(u))}catch{return null}}}return null}var g=Object.assign,y=0,X,q,J,Z,Q,rr,er;function tr(){}tr.__reactDisabledLog=!0;function xr(){{if(y===0){X=console.log,q=console.info,J=console.warn,Z=console.error,Q=console.group,rr=console.groupCollapsed,er=console.groupEnd;var r={configurable:!0,enumerable:!0,value:tr,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}y++}}function kr(){{if(y--,y===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:g({},r,{value:X}),info:g({},r,{value:q}),warn:g({},r,{value:J}),error:g({},r,{value:Z}),group:g({},r,{value:Q}),groupCollapsed:g({},r,{value:rr}),groupEnd:g({},r,{value:er})})}y<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var F=b.ReactCurrentDispatcher,A;function C(r,e,t){{if(A===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);A=a&&a[1]||""}return`
`+A+r}}var I=!1,P;{var Dr=typeof WeakMap=="function"?WeakMap:Map;P=new Dr}function ar(r,e){if(!r||I)return"";{var t=P.get(r);if(t!==void 0)return t}var a;I=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=F.current,F.current=null,xr();try{if(e){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(p){a=p}Reflect.construct(r,[],o)}else{try{o.call()}catch(p){a=p}r.call(o.prototype)}}else{try{throw Error()}catch(p){a=p}r()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var n=p.stack.split(`
`),c=a.stack.split(`
`),s=n.length-1,l=c.length-1;s>=1&&l>=0&&n[s]!==c[l];)l--;for(;s>=1&&l>=0;s--,l--)if(n[s]!==c[l]){if(s!==1||l!==1)do if(s--,l--,l<0||n[s]!==c[l]){var v=`
`+n[s].replace(" at new "," at ");return r.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",r.displayName)),typeof r=="function"&&P.set(r,v),v}while(s>=1&&l>=0);break}}}finally{I=!1,F.current=u,kr(),Error.prepareStackTrace=i}var h=r?r.displayName||r.name:"",gr=h?C(h):"";return typeof r=="function"&&P.set(r,gr),gr}function Fr(r,e,t){return ar(r,!1)}function Ar(r){var e=r.prototype;return!!(e&&e.isReactComponent)}function w(r,e,t){if(r==null)return"";if(typeof r=="function")return ar(r,Ar(r));if(typeof r=="string")return C(r);switch(r){case x:return C("Suspense");case k:return C("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case _:return Fr(r.render);case T:return w(r.type,e,t);case D:{var a=r,i=a._payload,u=a._init;try{return w(u(i),e,t)}catch{}}}return""}var O=Object.prototype.hasOwnProperty,nr={},or=b.ReactDebugCurrentFrame;function S(r){if(r){var e=r._owner,t=w(r.type,r._source,e?e.type:null);or.setExtraStackFrame(t)}else or.setExtraStackFrame(null)}function Ir(r,e,t,a,i){{var u=Function.call.bind(O);for(var o in r)if(u(r,o)){var n=void 0;try{if(typeof r[o]!="function"){var c=Error((a||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}n=r[o](e,o,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){n=s}n&&!(n instanceof Error)&&(S(i),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,o,typeof n),S(null)),n instanceof Error&&!(n.message in nr)&&(nr[n.message]=!0,S(i),f("Failed %s type: %s",t,n.message),S(null))}}}var Yr=Array.isArray;function Y(r){return Yr(r)}function $r(r){{var e=typeof Symbol=="function"&&Symbol.toStringTag,t=e&&r[Symbol.toStringTag]||r.constructor.name||"Object";return t}}function Wr(r){try{return ir(r),!1}catch{return!0}}function ir(r){return""+r}function ur(r){if(Wr(r))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",$r(r)),ir(r)}var R=b.ReactCurrentOwner,Mr={key:!0,ref:!0,__self:!0,__source:!0},sr,lr,$;$={};function Lr(r){if(O.call(r,"ref")){var e=Object.getOwnPropertyDescriptor(r,"ref").get;if(e&&e.isReactWarning)return!1}return r.ref!==void 0}function Vr(r){if(O.call(r,"key")){var e=Object.getOwnPropertyDescriptor(r,"key").get;if(e&&e.isReactWarning)return!1}return r.key!==void 0}function Ur(r,e){if(typeof r.ref=="string"&&R.current&&e&&R.current.stateNode!==e){var t=d(R.current.type);$[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',d(R.current.type),r.ref),$[t]=!0)}}function Nr(r,e){{var t=function(){sr||(sr=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};t.isReactWarning=!0,Object.defineProperty(r,"key",{get:t,configurable:!0})}}function Br(r,e){{var t=function(){lr||(lr=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};t.isReactWarning=!0,Object.defineProperty(r,"ref",{get:t,configurable:!0})}}var Gr=function(r,e,t,a,i,u,o){var n={$$typeof:j,type:r,key:e,ref:t,props:o,_owner:u};return n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(n,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(n,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n};function zr(r,e,t,a,i){{var u,o={},n=null,c=null;t!==void 0&&(ur(t),n=""+t),Vr(e)&&(ur(e.key),n=""+e.key),Lr(e)&&(c=e.ref,Ur(e,i));for(u in e)O.call(e,u)&&!Mr.hasOwnProperty(u)&&(o[u]=e[u]);if(r&&r.defaultProps){var s=r.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(n||c){var l=typeof r=="function"?r.displayName||r.name||"Unknown":r;n&&Nr(o,l),c&&Br(o,l)}return Gr(r,n,c,i,a,R.current,o)}}var W=b.ReactCurrentOwner,fr=b.ReactDebugCurrentFrame;function E(r){if(r){var e=r._owner,t=w(r.type,r._source,e?e.type:null);fr.setExtraStackFrame(t)}else fr.setExtraStackFrame(null)}var M;M=!1;function L(r){return typeof r=="object"&&r!==null&&r.$$typeof===j}function cr(){{if(W.current){var r=d(W.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function Kr(r){{if(r!==void 0){var e=r.fileName.replace(/^.*[\\\/]/,""),t=r.lineNumber;return`

Check your code at `+e+":"+t+"."}return""}}var vr={};function Hr(r){{var e=cr();if(!e){var t=typeof r=="string"?r:r.displayName||r.name;t&&(e=`

Check the top-level render call using <`+t+">.")}return e}}function dr(r,e){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var t=Hr(e);if(vr[t])return;vr[t]=!0;var a="";r&&r._owner&&r._owner!==W.current&&(a=" It was passed a child from "+d(r._owner.type)+"."),E(r),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),E(null)}}function pr(r,e){{if(typeof r!="object")return;if(Y(r))for(var t=0;t<r.length;t++){var a=r[t];L(a)&&dr(a,e)}else if(L(r))r._store&&(r._store.validated=!0);else if(r){var i=mr(r);if(typeof i=="function"&&i!==r.entries)for(var u=i.call(r),o;!(o=u.next()).done;)L(o.value)&&dr(o.value,e)}}}function Xr(r){{var e=r.type;if(e==null||typeof e=="string")return;var t;if(typeof e=="function")t=e.propTypes;else if(typeof e=="object"&&(e.$$typeof===_||e.$$typeof===T))t=e.propTypes;else return;if(t){var a=d(e);Ir(t,r.props,"prop",a,r)}else if(e.PropTypes!==void 0&&!M){M=!0;var i=d(e);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof e.getDefaultProps=="function"&&!e.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function qr(r){{for(var e=Object.keys(r.props),t=0;t<e.length;t++){var a=e[t];if(a!=="children"&&a!=="key"){E(r),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),E(null);break}}r.ref!==null&&(E(r),f("Invalid attribute `ref` supplied to `React.Fragment`."),E(null))}}function Jr(r,e,t,a,i,u){{var o=Sr(r);if(!o){var n="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c=Kr(i);c?n+=c:n+=cr();var s;r===null?s="null":Y(r)?s="array":r!==void 0&&r.$$typeof===j?(s="<"+(d(r.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):s=typeof r,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,n)}var l=zr(r,e,t,i,u);if(l==null)return l;if(o){var v=e.children;if(v!==void 0)if(a)if(Y(v)){for(var h=0;h<v.length;h++)pr(v[h],r);Object.freeze&&Object.freeze(v)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else pr(v,r)}return r===m?qr(l):Xr(l),l}}var Zr=Jr;V.Fragment=m,V.jsxDEV=Zr})();br.exports=V;var ee=br.exports;export{ee as j};
//# sourceMappingURL=jsx-dev-runtime-Td3Dqyp_.js.map