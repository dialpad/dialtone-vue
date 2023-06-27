import{r as Qe}from"./index-cf405a5d.js";var be={exports:{}},V={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var Ee=Qe,j=Symbol.for("react.element"),he=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),G=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),z=Symbol.iterator,Re="@@iterator";function me(e){if(e===null||typeof e!="object")return null;var r=z&&e[z]||e[Re];return typeof r=="function"?r:null}var b=Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function l(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];_e("error",e,t)}}function _e(e,r,t){{var a=b.ReactDebugCurrentFrame,i=a.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Te=!1,Ce=!1,Pe=!1,we=!1,Oe=!1,K;K=Symbol.for("react.module.reference");function Se(e){return!!(typeof e=="string"||typeof e=="function"||e===m||e===N||Oe||e===U||e===x||e===k||we||e===ye||Te||Ce||Pe||typeof e=="object"&&e!==null&&(e.$$typeof===D||e.$$typeof===T||e.$$typeof===B||e.$$typeof===G||e.$$typeof===_||e.$$typeof===K||e.getModuleId!==void 0))}function je(e,r,t){var a=e.displayName;if(a)return a;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function H(e){return e.displayName||"Context"}function d(e){if(e==null)return null;if(typeof e.tag=="number"&&l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case he:return"Portal";case N:return"Profiler";case U:return"StrictMode";case x:return"Suspense";case k:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G:var r=e;return H(r)+".Consumer";case B:var t=e;return H(t._context)+".Provider";case _:return je(e,e.render,"ForwardRef");case T:var a=e.displayName||null;return a!==null?a:d(e.type)||"Memo";case D:{var i=e,u=i._payload,o=i._init;try{return d(o(u))}catch{return null}}}return null}var g=Object.assign,y=0,X,q,J,Z,Q,ee,re;function te(){}te.__reactDisabledLog=!0;function xe(){{if(y===0){X=console.log,q=console.info,J=console.warn,Z=console.error,Q=console.group,ee=console.groupCollapsed,re=console.groupEnd;var e={configurable:!0,enumerable:!0,value:te,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}y++}}function ke(){{if(y--,y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:g({},e,{value:X}),info:g({},e,{value:q}),warn:g({},e,{value:J}),error:g({},e,{value:Z}),group:g({},e,{value:Q}),groupCollapsed:g({},e,{value:ee}),groupEnd:g({},e,{value:re})})}y<0&&l("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var F=b.ReactCurrentDispatcher,A;function C(e,r,t){{if(A===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);A=a&&a[1]||""}return`
`+A+e}}var I=!1,P;{var De=typeof WeakMap=="function"?WeakMap:Map;P=new De}function ae(e,r){if(!e||I)return"";{var t=P.get(e);if(t!==void 0)return t}var a;I=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=F.current,F.current=null,xe();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(p){a=p}Reflect.construct(e,[],o)}else{try{o.call()}catch(p){a=p}e.call(o.prototype)}}else{try{throw Error()}catch(p){a=p}e()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var n=p.stack.split(`
`),c=a.stack.split(`
`),s=n.length-1,f=c.length-1;s>=1&&f>=0&&n[s]!==c[f];)f--;for(;s>=1&&f>=0;s--,f--)if(n[s]!==c[f]){if(s!==1||f!==1)do if(s--,f--,f<0||n[s]!==c[f]){var v=`
`+n[s].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),typeof e=="function"&&P.set(e,v),v}while(s>=1&&f>=0);break}}}finally{I=!1,F.current=u,ke(),Error.prepareStackTrace=i}var h=e?e.displayName||e.name:"",ge=h?C(h):"";return typeof e=="function"&&P.set(e,ge),ge}function Fe(e,r,t){return ae(e,!1)}function Ae(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function w(e,r,t){if(e==null)return"";if(typeof e=="function")return ae(e,Ae(e));if(typeof e=="string")return C(e);switch(e){case x:return C("Suspense");case k:return C("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case _:return Fe(e.render);case T:return w(e.type,r,t);case D:{var a=e,i=a._payload,u=a._init;try{return w(u(i),r,t)}catch{}}}return""}var O=Object.prototype.hasOwnProperty,ne={},oe=b.ReactDebugCurrentFrame;function S(e){if(e){var r=e._owner,t=w(e.type,e._source,r?r.type:null);oe.setExtraStackFrame(t)}else oe.setExtraStackFrame(null)}function Ie(e,r,t,a,i){{var u=Function.call.bind(O);for(var o in e)if(u(e,o)){var n=void 0;try{if(typeof e[o]!="function"){var c=Error((a||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}n=e[o](r,o,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){n=s}n&&!(n instanceof Error)&&(S(i),l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,o,typeof n),S(null)),n instanceof Error&&!(n.message in ne)&&(ne[n.message]=!0,S(i),l("Failed %s type: %s",t,n.message),S(null))}}}var Ye=Array.isArray;function Y(e){return Ye(e)}function $e(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function We(e){try{return ie(e),!1}catch{return!0}}function ie(e){return""+e}function ue(e){if(We(e))return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",$e(e)),ie(e)}var R=b.ReactCurrentOwner,Me={key:!0,ref:!0,__self:!0,__source:!0},se,fe,$;$={};function Le(e){if(O.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ve(e){if(O.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Ue(e,r){if(typeof e.ref=="string"&&R.current&&r&&R.current.stateNode!==r){var t=d(R.current.type);$[t]||(l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',d(R.current.type),e.ref),$[t]=!0)}}function Ne(e,r){{var t=function(){se||(se=!0,l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Be(e,r){{var t=function(){fe||(fe=!0,l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Ge=function(e,r,t,a,i,u,o){var n={$$typeof:j,type:e,key:r,ref:t,props:o,_owner:u};return n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(n,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(n,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n};function ze(e,r,t,a,i){{var u,o={},n=null,c=null;t!==void 0&&(ue(t),n=""+t),Ve(r)&&(ue(r.key),n=""+r.key),Le(r)&&(c=r.ref,Ue(r,i));for(u in r)O.call(r,u)&&!Me.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(n||c){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;n&&Ne(o,f),c&&Be(o,f)}return Ge(e,n,c,i,a,R.current,o)}}var W=b.ReactCurrentOwner,le=b.ReactDebugCurrentFrame;function E(e){if(e){var r=e._owner,t=w(e.type,e._source,r?r.type:null);le.setExtraStackFrame(t)}else le.setExtraStackFrame(null)}var M;M=!1;function L(e){return typeof e=="object"&&e!==null&&e.$$typeof===j}function ce(){{if(W.current){var e=d(W.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Ke(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var ve={};function He(e){{var r=ce();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function de(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=He(r);if(ve[t])return;ve[t]=!0;var a="";e&&e._owner&&e._owner!==W.current&&(a=" It was passed a child from "+d(e._owner.type)+"."),E(e),l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),E(null)}}function pe(e,r){{if(typeof e!="object")return;if(Y(e))for(var t=0;t<e.length;t++){var a=e[t];L(a)&&de(a,r)}else if(L(e))e._store&&(e._store.validated=!0);else if(e){var i=me(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)L(o.value)&&de(o.value,r)}}}function Xe(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===_||r.$$typeof===T))t=r.propTypes;else return;if(t){var a=d(r);Ie(t,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!M){M=!0;var i=d(r);l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function qe(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var a=r[t];if(a!=="children"&&a!=="key"){E(e),l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),E(null);break}}e.ref!==null&&(E(e),l("Invalid attribute `ref` supplied to `React.Fragment`."),E(null))}}function Je(e,r,t,a,i,u){{var o=Se(e);if(!o){var n="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c=Ke(i);c?n+=c:n+=ce();var s;e===null?s="null":Y(e)?s="array":e!==void 0&&e.$$typeof===j?(s="<"+(d(e.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,n)}var f=ze(e,r,t,i,u);if(f==null)return f;if(o){var v=r.children;if(v!==void 0)if(a)if(Y(v)){for(var h=0;h<v.length;h++)pe(v[h],e);Object.freeze&&Object.freeze(v)}else l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else pe(v,e)}return e===m?qe(f):Xe(f),f}}var Ze=Je;V.Fragment=m,V.jsxDEV=Ze})();be.exports=V;var rr=be.exports;export{rr as j};
//# sourceMappingURL=jsx-dev-runtime-8632dc32.js.map
