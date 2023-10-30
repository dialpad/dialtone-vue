import{h as g,H as m,I as p}from"./vue.esm-bundler-735640fd.js";const r={ERROR:"error",WARNING:"warning",SUCCESS:"success"},v={LARGE:"lg",EXTRA_LARGE:"xl"},H={xs:"",sm:"",md:"",lg:"d-description--lg",xl:"d-description--xl"},Y={xs:"d-label--xs",sm:"d-label--sm",md:"",lg:"d-label--lg",xl:"d-label--xl"},Z={esc:"Esc",escape:"Escape",tab:"Tab",enter:"Enter",space:"Space",spacebar:"Spacebar",up:"Up",arrowup:"ArrowUp",left:"Left",arrowleft:"ArrowLeft",right:"Right",arrowright:"ArrowRight",down:"Down",arrowdown:"ArrowDown",home:"Home",end:"End"},x=r.ERROR,b="dt";let w=0,c;const S=typeof setImmediate=="function"?setImmediate:setTimeout;function A(e=b){return`${e}${w++}`}function I(e,t){if(t){const n=C(t);return e[Math.abs(n)%e.length]}else return e[i(e.length)]}function C(e){let t;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return t}function i(e){return Math.floor(Math.random()*e)}function O(e){return e?e.map(t=>typeof t=="string"?{message:t,type:x}:t):[]}function T(e){const t=a(e);return!e||!t?[]:e.filter(n=>!!n.message&&n.type===t)}function a(e){return e?s(e,r.ERROR)?r.ERROR:s(e,r.WARNING)?r.WARNING:s(e,r.SUCCESS)?r.SUCCESS:null:null}function s(e,t){return!e||!t?!1:e.some(n=>(n==null?void 0:n.type)===t)}const _=e=>g("div",{innerHTML:e.html}),N=()=>new Promise(e=>{S(e)});function B(e,t={}){return e?e(t).some(n=>n.type===m||Array.isArray(n.children)&&!n.children.length?!1:n.type!==p||typeof n.children=="string"&&n.children.trim()!==""):!1}const y=e=>e==null?void 0:e.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),K=e=>e.replace(/\.?([A-Z0-9]+)/g,(t,n)=>"-"+n.toLowerCase()).replace(/^-/,""),L=e=>{const t=Object.entries(e).filter(([n])=>n.startsWith("on"));return Object.fromEntries(t)};function P(e,t=300){clearTimeout(c),c=setTimeout(e,t)}function j(e){const t=e.getBoundingClientRect(),n={top:t.top<0,left:t.left<0,bottom:t.bottom>(window.innerHeight||document.documentElement.clientHeight),right:t.right>(window.innerWidth||document.documentElement.clientWidth)};return n.any=Object.values(n).some(o=>o),n.all=Object.values(n).every(o=>o),n}const U=/(?:(?:[^\s!@#$%^&*()_=+[\]{}\\|;:'",.<>/?]+)\.)/,D=new RegExp("(?:com|ru|org|net|de|jp|uk|br|it|pl|fr|in|au|ir|info|nl|cn|es|cz|kr|ca|eu|ua|co|gr|za|ro|biz|ch|se|tw|mx|vn|hu|be|tr|at|dk|tv|me|ar|sk|no|us|fi|id|cl|xyz|io|pt|by|il|ie|nz|kz|hk|lt|cc|my|sg|club|bg|edu|рф|pk|su|top|th|hr|rs|pe|pro|si|az|lv|pw|ae|ph|online|ng|ee|ws|ve|cat)"),W=new RegExp("(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])"),u=new RegExp("(?:"+[[U.source,D.source].join("+"),W.source].join("|")+")"),k=/(?:(?:[;/][^#?<>\s]*)?)/,l=/(?:(?:\?[^#<>\s]+)?(?:#[^<>\s]+)?)/,f=new RegExp("\\b"+[u.source,k.source,l.source,"(?!\\w)"].join("+")),h=/\b[a-z\d.-]+:\/\/[^<>\s]+/,E=new RegExp("(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@"+[u.source,l.source].join("+")+"(?!\\w)");function R(e=7,t=15){let n=!0;try{RegExp("(?<=\\W)")}catch{n=!1}return new RegExp(`${n?"(?:^|(?<=\\W))":""}(?![\\s\\-])\\+?(?:[0-9()\\- \\t]{${e},${t}})(?=\\b)(?=\\W(?=\\W|$)|\\s|$)`)}const d=R(),z=new RegExp([f.source,h.source,E.source,d.source].join("|"),"gi");function $(e){var t;return!e||!["string","number"].includes(typeof e)?!1:(e=e.toString(),((t=d.exec(e))==null?void 0:t[0])===e)}function F(e){var t,n;return!e||typeof e!="string"?!1:((t=f.exec(e))==null?void 0:t[0])===e||((n=h.exec(e))==null?void 0:n[0])===e}function M(e){var t;return!e||typeof e!="string"?!1:((t=E.exec(e))==null?void 0:t[0])===e}function G(e){return e.filter(t=>!!t).join(" ")}const Q={getUniqueString:A,getRandomElement:I,getRandomInt:i,formatMessages:O,filterFormattedMessages:T,hasFormattedMessageOfType:s,getValidationState:a,htmlFragment:_,flushPromises:N,kebabCaseToPascalCase:y,extractVueListeners:L,debounce:P,isOutOfViewPort:j,getPhoneNumberRegex:R,linkRegex:z,isEmailAddress:M,isPhoneNumber:$,isURL:F,safeConcatStrings:G};export{v as D,Z as E,Y as L,r as V,T as a,a as b,_ as c,H as d,L as e,O as f,A as g,B as h,j as i,I as j,y as k,R as l,z as m,K as p,G as s,Q as u};
//# sourceMappingURL=utils-4a13a80a.js.map