import{V as h}from"./vue.esm-BQBotxwJ.js";const r={ERROR:"error",WARNING:"warning",SUCCESS:"success"},V={LARGE:"lg",EXTRA_LARGE:"xl"},G={xs:"",sm:"",md:"",lg:"d-description--lg",xl:"d-description--xl"},M={xs:"d-label--xs",sm:"d-label--sm",md:"",lg:"d-label--lg",xl:"d-label--xl"},H={esc:"Esc",escape:"Escape",tab:"Tab",enter:"Enter",space:"Space",spacebar:"Spacebar",up:"Up",arrowup:"ArrowUp",left:"Left",arrowleft:"ArrowLeft",right:"Right",arrowright:"ArrowRight",down:"Down",arrowdown:"ArrowDown",home:"Home",end:"End"},g=r.ERROR,p="dt";let x=0,s;const b=typeof setImmediate=="function"?setImmediate:setTimeout;function w(e=p){return`${e}${x++}`}function S(e,t){if(t){const n=I(t);return e[Math.abs(n)%e.length]}else return e[i(e.length)]}function I(e){let t;for(let n=0;n<e.length;n++)t=Math.imul(31,t)+e.charCodeAt(n)|0;return t}function i(e){return Math.floor(Math.random()*e)}function A(e){return e?e.map(t=>typeof t=="string"?{message:t,type:g}:t):[]}function C(e){const t=u(e);return!e||!t?[]:e.filter(n=>!!n.message&&n.type===t)}function u(e){return e?c(e,r.ERROR)?r.ERROR:c(e,r.WARNING)?r.WARNING:c(e,r.SUCCESS)?r.SUCCESS:null:null}function c(e,t){return!e||!t?!1:e.some(n=>(n==null?void 0:n.type)===t)}const _={name:"html-fragment",functional:!0,props:["html"],render(e,t){return new h({name:"Inner",beforeCreate(){this.$createElement=e},template:`<div>${t.props.html}</div>`}).$mount()._vnode.children}},O=()=>new Promise(e=>{b(e)}),N=e=>e==null?void 0:e.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("");function T(e,t=300){clearTimeout(s),s=setTimeout(e,t)}function U(e){const t=e.getBoundingClientRect(),n={top:t.top<0,left:t.left<0,bottom:t.bottom>(window.innerHeight||document.documentElement.clientHeight),right:t.right>(window.innerWidth||document.documentElement.clientWidth)};return n.any=Object.values(n).some(o=>o),n.all=Object.values(n).every(o=>o),n}const L=/(?:(?:[^\s!@#$%^&*()_=+[\]{}\\|;:'",.<>/?]+)\.)/,P=new RegExp("(?:com|ru|org|net|de|jp|uk|br|it|pl|fr|in|au|ir|info|nl|cn|es|cz|kr|ca|eu|ua|co|gr|za|ro|biz|ch|se|tw|mx|vn|hu|be|tr|at|dk|tv|me|ar|sk|no|us|fi|id|cl|xyz|io|pt|by|il|ie|nz|kz|hk|lt|cc|my|sg|club|bg|edu|рф|pk|su|top|th|hr|rs|pe|pro|si|az|lv|pw|ae|ph|online|ng|ee|ws|ve|cat)"),v=new RegExp("(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])"),a=new RegExp("(?:"+[[L.source,P.source].join("+"),v.source].join("|")+")"),$=/(?:(?:[;/][^#?<>\s]*)?)/,l=/(?:(?:\?[^#<>\s]+)?(?:#[^<>\s]+)?)/,f=new RegExp("\\b"+[a.source,$.source,l.source,"(?!\\w)"].join("+")),d=/\b[a-z\d.-]+:\/\/[^<>\s]+/,E=new RegExp("(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@"+[a.source,l.source].join("+")+"(?!\\w)");function R(e=7,t=15){let n=!0;try{RegExp("(?<=\\W)")}catch{n=!1}return new RegExp(`${n?"(?:^|(?<=\\W))":""}(?![\\s\\-])\\+?(?:[0-9()\\- \\t]{${e},${t}})(?=\\b)(?=\\W(?=\\W|$)|\\s|$)`)}const m=R(),y=new RegExp([f.source,d.source,E.source,m.source].join("|"),"gi");function D(e){var t;return!e||!["string","number"].includes(typeof e)?!1:(e=e.toString(),((t=m.exec(e))==null?void 0:t[0])===e)}function W(e){var t,n;return!e||typeof e!="string"?!1:((t=f.exec(e))==null?void 0:t[0])===e||((n=d.exec(e))==null?void 0:n[0])===e}function j(e){var t;return!e||typeof e!="string"?!1:((t=E.exec(e))==null?void 0:t[0])===e}function z(e){return e.filter(t=>!!t).join(" ")}function k(e,t="en-US"){return e.replace(new RegExp("^\\p{CWU}","u"),n=>n.toLocaleUpperCase(t))}const Y={getUniqueString:w,getRandomElement:S,getRandomInt:i,formatMessages:A,filterFormattedMessages:C,hasFormattedMessageOfType:c,getValidationState:u,htmlFragment:_,flushPromises:O,kebabCaseToPascalCase:N,debounce:T,isOutOfViewPort:U,getPhoneNumberRegex:R,linkRegex:y,isEmailAddress:j,isPhoneNumber:D,isURL:W,safeConcatStrings:z,capitalizeFirstLetter:k};export{V as D,H as E,M as L,r as V,C as a,u as b,S as c,G as d,R as e,A as f,w as g,_ as h,U as i,y as l,z as s,Y as u};
//# sourceMappingURL=utils-pRacJSLF.js.map
