import{r as tr}from"./index-e8355b13.js";var he={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var Ee=tr,x=Symbol.for("react.element"),ye=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),G=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),z=Symbol.iterator,Re="@@iterator";function _e(e){if(e===null||typeof e!="object")return null;var r=z&&e[z]||e[Re];return typeof r=="function"?r:null}var b=Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function l(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];Te("error",e,t)}}function Te(e,r,t){{var a=b.ReactDebugCurrentFrame,o=a.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ce=!1,Pe=!1,we=!1,Se=!1,Oe=!1,K;K=Symbol.for("react.module.reference");function je(e){return!!(typeof e=="string"||typeof e=="function"||e===R||e===N||Oe||e===U||e===k||e===F||Se||e===me||Ce||Pe||we||typeof e=="object"&&e!==null&&(e.$$typeof===D||e.$$typeof===T||e.$$typeof===B||e.$$typeof===G||e.$$typeof===_||e.$$typeof===K||e.getModuleId!==void 0))}function xe(e,r,t){var a=e.displayName;if(a)return a;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function H(e){return e.displayName||"Context"}function d(e){if(e==null)return null;if(typeof e.tag=="number"&&l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case ye:return"Portal";case N:return"Profiler";case U:return"StrictMode";case k:return"Suspense";case F:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G:var r=e;return H(r)+".Consumer";case B:var t=e;return H(t._context)+".Provider";case _:return xe(e,e.render,"ForwardRef");case T:var a=e.displayName||null;return a!==null?a:d(e.type)||"Memo";case D:{var o=e,u=o._payload,i=o._init;try{return d(i(u))}catch{return null}}}return null}var g=Object.assign,y=0,X,q,J,Z,Q,ee,re;function te(){}te.__reactDisabledLog=!0;function ke(){{if(y===0){X=console.log,q=console.info,J=console.warn,Z=console.error,Q=console.group,ee=console.groupCollapsed,re=console.groupEnd;var e={configurable:!0,enumerable:!0,value:te,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}y++}}function Fe(){{if(y--,y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:g({},e,{value:X}),info:g({},e,{value:q}),warn:g({},e,{value:J}),error:g({},e,{value:Z}),group:g({},e,{value:Q}),groupCollapsed:g({},e,{value:ee}),groupEnd:g({},e,{value:re})})}y<0&&l("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var A=b.ReactCurrentDispatcher,I;function C(e,r,t){{if(I===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);I=a&&a[1]||""}return`
`+I+e}}var W=!1,P;{var De=typeof WeakMap=="function"?WeakMap:Map;P=new De}function ae(e,r){if(!e||W)return"";{var t=P.get(e);if(t!==void 0)return t}var a;W=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=A.current,A.current=null,ke();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(p){a=p}Reflect.construct(e,[],i)}else{try{i.call()}catch(p){a=p}e.call(i.prototype)}}else{try{throw Error()}catch(p){a=p}e()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var n=p.stack.split(`
`),c=a.stack.split(`
`),s=n.length-1,f=c.length-1;s>=1&&f>=0&&n[s]!==c[f];)f--;for(;s>=1&&f>=0;s--,f--)if(n[s]!==c[f]){if(s!==1||f!==1)do if(s--,f--,f<0||n[s]!==c[f]){var v=`
`+n[s].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),typeof e=="function"&&P.set(e,v),v}while(s>=1&&f>=0);break}}}finally{W=!1,A.current=u,Fe(),Error.prepareStackTrace=o}var E=e?e.displayName||e.name:"",be=E?C(E):"";return typeof e=="function"&&P.set(e,be),be}function Ae(e,r,t){return ae(e,!1)}function Ie(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function w(e,r,t){if(e==null)return"";if(typeof e=="function")return ae(e,Ie(e));if(typeof e=="string")return C(e);switch(e){case k:return C("Suspense");case F:return C("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case _:return Ae(e.render);case T:return w(e.type,r,t);case D:{var a=e,o=a._payload,u=a._init;try{return w(u(o),r,t)}catch{}}}return""}var S=Object.prototype.hasOwnProperty,ne={},ie=b.ReactDebugCurrentFrame;function O(e){if(e){var r=e._owner,t=w(e.type,e._source,r?r.type:null);ie.setExtraStackFrame(t)}else ie.setExtraStackFrame(null)}function We(e,r,t,a,o){{var u=Function.call.bind(S);for(var i in e)if(u(e,i)){var n=void 0;try{if(typeof e[i]!="function"){var c=Error((a||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}n=e[i](r,i,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){n=s}n&&!(n instanceof Error)&&(O(o),l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,i,typeof n),O(null)),n instanceof Error&&!(n.message in ne)&&(ne[n.message]=!0,O(o),l("Failed %s type: %s",t,n.message),O(null))}}}var Ye=Array.isArray;function Y(e){return Ye(e)}function $e(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Me(e){try{return oe(e),!1}catch{return!0}}function oe(e){return""+e}function ue(e){if(Me(e))return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",$e(e)),oe(e)}var m=b.ReactCurrentOwner,Le={key:!0,ref:!0,__self:!0,__source:!0},se,fe,$;$={};function Ve(e){if(S.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ue(e){if(S.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Ne(e,r){if(typeof e.ref=="string"&&m.current&&r&&m.current.stateNode!==r){var t=d(m.current.type);$[t]||(l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',d(m.current.type),e.ref),$[t]=!0)}}function Be(e,r){{var t=function(){se||(se=!0,l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Ge(e,r){{var t=function(){fe||(fe=!0,l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ze=function(e,r,t,a,o,u,i){var n={$$typeof:x,type:e,key:r,ref:t,props:i,_owner:u};return n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(n,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(n,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n};function Ke(e,r,t,a,o){{var u,i={},n=null,c=null;t!==void 0&&(ue(t),n=""+t),Ue(r)&&(ue(r.key),n=""+r.key),Ve(r)&&(c=r.ref,Ne(r,o));for(u in r)S.call(r,u)&&!Le.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(n||c){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;n&&Be(i,f),c&&Ge(i,f)}return ze(e,n,c,o,a,m.current,i)}}var M=b.ReactCurrentOwner,le=b.ReactDebugCurrentFrame;function h(e){if(e){var r=e._owner,t=w(e.type,e._source,r?r.type:null);le.setExtraStackFrame(t)}else le.setExtraStackFrame(null)}var L;L=!1;function V(e){return typeof e=="object"&&e!==null&&e.$$typeof===x}function ce(){{if(M.current){var e=d(M.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function He(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var ve={};function Xe(e){{var r=ce();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function de(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Xe(r);if(ve[t])return;ve[t]=!0;var a="";e&&e._owner&&e._owner!==M.current&&(a=" It was passed a child from "+d(e._owner.type)+"."),h(e),l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),h(null)}}function pe(e,r){{if(typeof e!="object")return;if(Y(e))for(var t=0;t<e.length;t++){var a=e[t];V(a)&&de(a,r)}else if(V(e))e._store&&(e._store.validated=!0);else if(e){var o=_e(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)V(i.value)&&de(i.value,r)}}}function qe(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===_||r.$$typeof===T))t=r.propTypes;else return;if(t){var a=d(r);We(t,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!L){L=!0;var o=d(r);l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Je(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var a=r[t];if(a!=="children"&&a!=="key"){h(e),l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),h(null);break}}e.ref!==null&&(h(e),l("Invalid attribute `ref` supplied to `React.Fragment`."),h(null))}}function ge(e,r,t,a,o,u){{var i=je(e);if(!i){var n="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c=He(o);c?n+=c:n+=ce();var s;e===null?s="null":Y(e)?s="array":e!==void 0&&e.$$typeof===x?(s="<"+(d(e.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,n)}var f=Ke(e,r,t,o,u);if(f==null)return f;if(i){var v=r.children;if(v!==void 0)if(a)if(Y(v)){for(var E=0;E<v.length;E++)pe(v[E],e);Object.freeze&&Object.freeze(v)}else l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else pe(v,e)}return e===R?Je(f):qe(f),f}}function Ze(e,r,t){return ge(e,r,t,!0)}function Qe(e,r,t){return ge(e,r,t,!1)}var er=Qe,rr=Ze;j.Fragment=R,j.jsx=er,j.jsxs=rr})();he.exports=j;var nr=he.exports;export{nr as j};
//# sourceMappingURL=jsx-runtime-19fe748b.js.map
