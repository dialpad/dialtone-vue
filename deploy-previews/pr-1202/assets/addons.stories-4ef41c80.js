import"./chunk-S4VUQJ4A-c14463e2.js";import{r as ir,M as ur,b as sr}from"./index-0d4f528f.js";import{u as _e}from"./index-10faabee.js";import"./iframe-e6daf149.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";var Re={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var b=ir,v=Symbol.for("react.element"),Te=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),K=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),Ce=Symbol.for("react.offscreen"),H=Symbol.iterator,Oe="@@iterator";function Se(e){if(e===null||typeof e!="object")return null;var r=H&&e[H]||e[Oe];return typeof r=="function"?r:null}var E=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];je("error",e,t)}}function je(e,r,t){{var n=E.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var we=!1,xe=!1,Pe=!1,ke=!1,De=!1,q;q=Symbol.for("react.module.reference");function Ae(e){return!!(typeof e=="string"||typeof e=="function"||e===C||e===X||De||e===G||e===F||e===I||ke||e===Ce||we||xe||Pe||typeof e=="object"&&e!==null&&(e.$$typeof===M||e.$$typeof===S||e.$$typeof===z||e.$$typeof===K||e.$$typeof===O||e.$$typeof===q||e.getModuleId!==void 0))}function Fe(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function J(e){return e.displayName||"Context"}function g(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case Te:return"Portal";case X:return"Profiler";case G:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case K:var r=e;return J(r)+".Consumer";case z:var t=e;return J(t._context)+".Provider";case O:return Fe(e,e.render,"ForwardRef");case S:var n=e.displayName||null;return n!==null?n:g(e.type)||"Memo";case M:{var i=e,u=i._payload,o=i._init;try{return g(o(u))}catch{return null}}}return null}var m=Object.assign,R=0,Z,Q,ee,re,te,ne,ae;function oe(){}oe.__reactDisabledLog=!0;function Ie(){{if(R===0){Z=console.log,Q=console.info,ee=console.warn,re=console.error,te=console.group,ne=console.groupCollapsed,ae=console.groupEnd;var e={configurable:!0,enumerable:!0,value:oe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}R++}}function Me(){{if(R--,R===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:m({},e,{value:Z}),info:m({},e,{value:Q}),warn:m({},e,{value:ee}),error:m({},e,{value:re}),group:m({},e,{value:te}),groupCollapsed:m({},e,{value:ne}),groupEnd:m({},e,{value:ae})})}R<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var W=E.ReactCurrentDispatcher,Y;function j(e,r,t){{if(Y===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Y=n&&n[1]||""}return`
`+Y+e}}var $=!1,w;{var We=typeof WeakMap=="function"?WeakMap:Map;w=new We}function ie(e,r){if(!e||$)return"";{var t=w.get(e);if(t!==void 0)return t}var n;$=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=W.current,W.current=null,Ie();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(h){n=h}Reflect.construct(e,[],o)}else{try{o.call()}catch(h){n=h}e.call(o.prototype)}}else{try{throw Error()}catch(h){n=h}e()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),f=n.stack.split(`
`),s=a.length-1,l=f.length-1;s>=1&&l>=0&&a[s]!==f[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==f[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==f[l]){var d=`
`+a[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),typeof e=="function"&&w.set(e,d),d}while(s>=1&&l>=0);break}}}finally{$=!1,W.current=u,Me(),Error.prepareStackTrace=i}var _=e?e.displayName||e.name:"",Ee=_?j(_):"";return typeof e=="function"&&w.set(e,Ee),Ee}function Ye(e,r,t){return ie(e,!1)}function $e(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function x(e,r,t){if(e==null)return"";if(typeof e=="function")return ie(e,$e(e));if(typeof e=="string")return j(e);switch(e){case F:return j("Suspense");case I:return j("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case O:return Ye(e.render);case S:return x(e.type,r,t);case M:{var n=e,i=n._payload,u=n._init;try{return x(u(i),r,t)}catch{}}}return""}var P=Object.prototype.hasOwnProperty,ue={},se=E.ReactDebugCurrentFrame;function k(e){if(e){var r=e._owner,t=x(e.type,e._source,r?r.type:null);se.setExtraStackFrame(t)}else se.setExtraStackFrame(null)}function Le(e,r,t,n,i){{var u=Function.call.bind(P);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var f=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(k(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),k(null)),a instanceof Error&&!(a.message in ue)&&(ue[a.message]=!0,k(i),c("Failed %s type: %s",t,a.message),k(null))}}}var Ve=Array.isArray;function L(e){return Ve(e)}function Ue(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ne(e){try{return le(e),!1}catch{return!0}}function le(e){return""+e}function ce(e){if(Ne(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ue(e)),le(e)}var T=E.ReactCurrentOwner,Be={key:!0,ref:!0,__self:!0,__source:!0},fe,de,V;V={};function Ge(e){if(P.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Xe(e){if(P.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ze(e,r){if(typeof e.ref=="string"&&T.current&&r&&T.current.stateNode!==r){var t=g(T.current.type);V[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',g(T.current.type),e.ref),V[t]=!0)}}function Ke(e,r){{var t=function(){fe||(fe=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function He(e,r){{var t=function(){de||(de=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var qe=function(e,r,t,n,i,u,o){var a={$$typeof:v,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function Je(e,r,t,n,i){{var u,o={},a=null,f=null;t!==void 0&&(ce(t),a=""+t),Xe(r)&&(ce(r.key),a=""+r.key),Ge(r)&&(f=r.ref,ze(r,i));for(u in r)P.call(r,u)&&!Be.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||f){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Ke(o,l),f&&He(o,l)}return qe(e,a,f,i,n,T.current,o)}}var U=E.ReactCurrentOwner,ve=E.ReactDebugCurrentFrame;function y(e){if(e){var r=e._owner,t=x(e.type,e._source,r?r.type:null);ve.setExtraStackFrame(t)}else ve.setExtraStackFrame(null)}var N;N=!1;function B(e){return typeof e=="object"&&e!==null&&e.$$typeof===v}function pe(){{if(U.current){var e=g(U.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Ze(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var ge={};function Qe(e){{var r=pe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function he(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Qe(r);if(ge[t])return;ge[t]=!0;var n="";e&&e._owner&&e._owner!==U.current&&(n=" It was passed a child from "+g(e._owner.type)+"."),y(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),y(null)}}function be(e,r){{if(typeof e!="object")return;if(L(e))for(var t=0;t<e.length;t++){var n=e[t];B(n)&&he(n,r)}else if(B(e))e._store&&(e._store.validated=!0);else if(e){var i=Se(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)B(o.value)&&he(o.value,r)}}}function er(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===O||r.$$typeof===S))t=r.propTypes;else return;if(t){var n=g(r);Le(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!N){N=!0;var i=g(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function rr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){y(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),y(null);break}}e.ref!==null&&(y(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),y(null))}}function me(e,r,t,n,i,u){{var o=Ae(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var f=Ze(i);f?a+=f:a+=pe();var s;e===null?s="null":L(e)?s="array":e!==void 0&&e.$$typeof===v?(s="<"+(g(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=Je(e,r,t,i,u);if(l==null)return l;if(o){var d=r.children;if(d!==void 0)if(n)if(L(d)){for(var _=0;_<d.length;_++)be(d[_],e);Object.freeze&&Object.freeze(d)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else be(d,e)}return e===C?rr(l):er(l),l}}function tr(e,r,t){return me(e,r,t,!0)}function nr(e,r,t){return me(e,r,t,!1)}var ar=nr,or=tr;D.Fragment=C,D.jsx=ar,D.jsxs=or})();Re.exports=D;var p=Re.exports;function ye(b){const v=Object.assign({h1:"h1",p:"p",code:"code"},_e(),b.components);return p.jsxs(p.Fragment,{children:[p.jsx(ur,{title:"Docs/Storybook/Addons"}),`
`,p.jsx(v.h1,{id:"addons",children:"Addons"}),`
`,p.jsx(sr,{children:p.jsx(v.p,{children:"Storybook Addons and Configuration"})}),`
`,p.jsx(v.p,{children:p.jsx(v.code,{children:"TODO"})})]})}function lr(b={}){const{wrapper:v}=Object.assign({},_e(),b.components);return v?p.jsx(v,{...b,children:p.jsx(ye,{...b})}):ye(b)}const cr=()=>{throw new Error("Docs-only story")};cr.parameters={docsOnly:!0};const A={title:"Docs/Storybook/Addons",tags:["stories-mdx"],includeStories:["__page"]};A.parameters=A.parameters||{};A.parameters.docs={...A.parameters.docs||{},page:lr};const yr=["__page"];export{yr as __namedExportsOrder,cr as __page,A as default};
//# sourceMappingURL=addons.stories-4ef41c80.js.map
