import{d as T}from"./index-356e4a49.js";import{V as d}from"./vue.esm-eff6e72e.js";import{e as A,S as j,a as P,h as b,b as D,c as B,d as $}from"./index-01189202.js";import"./_commonjsHelpers-042e6b4d.js";const{sanitizeStoryContextUpdate:N}=__STORYBOOK_MODULE_PREVIEW_API__;var y="STORYBOOK_COMPONENT",f="STORYBOOK_VALUES",g=new Map,I=t=>{let e=g.get(t);if(e!=null)return e;let r=document.createElement("div");t.appendChild(r);let o=new d({beforeDestroy(){g.delete(t)},data(){return{[y]:void 0,[f]:{}}},render(s){return g.set(t,o),this[y]?[s(this[y])]:void 0}});return o},x=(t,e)=>{var m,O;let{id:r,component:o,argTypes:s}=e,n=o;if(!n)throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);let a="component";n.name?a=d.config.isReservedTag&&d.config.isReservedTag(n.name)?`sb-${n.name}`:n.name:(m=n.__docgenInfo)!=null&&m.displayName&&(a=(O=n.__docgenInfo)==null?void 0:O.displayName);let i="",p=Object.values(s).filter(l=>{var u;return((u=l==null?void 0:l.table)==null?void 0:u.category)==="events"}).map(l=>l.name),c=l=>l.replace(/-([a-z])/g,u=>u[1].toUpperCase());return p.length&&(i=p.map(l=>`@${l}="$props['${c(l)}']"`).join(" ")),{props:Object.keys(s),components:{[a]:n},template:`<${a} ${i} v-bind="filterOutEventProps($props)" />`,methods:{filterOutEventProps(l){return Object.fromEntries(Object.entries(l).filter(([u])=>!p.includes(u)))}}}};function tt({title:t,name:e,storyFn:r,showMain:o,showError:s,showException:n,forceRemount:a},i){let p=I(i);d.config.errorHandler=n;let c=r(),m;if(i.hasChildNodes()?m=i.firstElementChild:(m=document.createElement("div"),i.appendChild(m)),!c){s({title:`Expecting a Vue component from the story: "${e}" of "${t}".`,description:T`
        Did you forget to return the Vue component from the story?
        Use "() => ({ template: '<my-comp></my-comp>' })" or "() => ({ components: MyComp, template: '<my-comp></my-comp>' })" when defining the story.
      `});return}(!p[y]||a)&&(p[y]=c),p[f]={...c.options[f]},g.has(i)||p.$mount(m??void 0),o()}function V(t){let e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Y({type:t,default:e}){return typeof e=="function"&&V(t)!=="Function"?e.call():e}function K(t){return Object.entries(t.options.props||{}).map(([e,r])=>({[e]:Y(r)})).reduce((e,r)=>({...e,...r}),{})}var _="STORYBOOK_WRAPS";function S(t,e,r){let o;if(typeof t=="string")o={template:t};else if(t!=null)o=t;else return null;if(!o._isVue)e&&(o.components={...o.components||{},story:e}),o=d.extend(o);else if(o.options[_])return o;return d.extend({[_]:o,[f]:{...e?e.options[f]:{},...K(o),...(r==null?void 0:r.args)||{}},functional:!0,render(s,{data:n,parent:a,children:i}){return s(o,{...n,props:{...n.props||{},...a.$root[f]}},i)}})}function et(t,e){return e.reduce((r,o)=>s=>{let n,a=o(i=>(n=r({...s,...N(i)}),n),s);return n||(n=r(s)),a===n?n:S(a,n)},r=>S(t(r),void 0,r))}const{addons:U}=__STORYBOOK_MODULE_PREVIEW_API__,{logger:M}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var L=["props","events","slots","methods"];function W(t,e){let{type:r,values:o}=e;if(!(Array.isArray(o)&&o.length&&r&&r.name!=="enum"))return!1;let s=o.join(", "),{summary:n}=t.type;return n=n?`${n}: ${s}`:s,Object.assign(t.type,{...t.type,name:"enum",value:o,summary:n}),t}function k(t,e){let r=t,o=!1,s=[W];for(let n=0,a=s.length;n<a;n+=1){let i=s[n](t,e);i&&(r=i,o=!0)}return[r,o]}var w=t=>{if(!b(t))return null;let e={};return L.forEach(r=>{D(t,r).forEach(({propDef:o,docgenInfo:s,jsDocTags:n})=>{let[a,i]=k(o,s),{name:p,type:c,description:m,defaultValue:O,required:l}=a,u;i?u=c:u=r==="props"?B(s):{name:"void"},e[p]={name:p,description:m,type:{required:l,...u},table:{type:c,jsDocTags:n,defaultValue:O,category:r}}})}),e},q=t=>{var o;let e=(o=t==null?void 0:t.parameters.docs)==null?void 0:o.source,r=t==null?void 0:t.parameters.__isArgsStory;return(e==null?void 0:e.type)===$.DYNAMIC?!1:!r||(e==null?void 0:e.code)||(e==null?void 0:e.type)===$.CODE},z=(t,e)=>{let r=t();if(q(e))return r;let o=U.getChannel(),s=H(r.options.STORYBOOK_WRAPS);return{components:{Story:r},mounted(){if(this._vnode)try{let n=R(this,s),a=h(n._vnode),{id:i,args:p}=e;o.emit(j,{id:i,args:p,source:`<template>${a}</template>`,format:"vue"})}catch(n){M.warn(`Failed to generate dynamic story source: ${n}`)}},template:"<story />"}};function h(t){var o,s,n;let e=[...(o=t.data)!=null&&o.slot?[["slot",t.data.slot]]:[],["class",F(t)],...(s=t.componentOptions)!=null&&s.propsData?Object.entries(t.componentOptions.propsData):[],...(n=t.data)!=null&&n.attrs?Object.entries(t.data.attrs):[]].filter(([a],i,p)=>p.findIndex(c=>c[0]===a)===i).map(([a,i])=>G(a,i)).filter(Boolean).join(" ");if(!t.componentOptions)return t.tag?t.children?`<${t.tag} ${e}>${t.children.map(h).join("")}</${t.tag}>`:`<${t.tag} ${e}/>`:t.text?/[<>"&]/.test(t.text)?`{{\`${t.text.replace(/`/g,"\\`")}\`}}`:t.text:"";let r=t.componentOptions.tag||t.tag||"unknown-component";return t.componentOptions.children?`<${r} ${e}>${t.componentOptions.children.map(h).join("")}</${r}>`:`<${r} ${e}/>`}function F(t){var e;if(!(!t.data||!t.data.staticClass&&!t.data.class))return[...((e=t.data.staticClass)==null?void 0:e.split(" "))??[],...E(t.data.class)].filter(Boolean).join(" ")||void 0}function E(t){return t?typeof t=="string"?[t]:t instanceof Array?t.map(E).reduce((e,r)=>[...e,...r],[]):typeof t=="object"?Object.entries(t).filter(([,e])=>!!e).map(([e])=>e):[]:[]}function G(t,e){return typeof e>"u"||typeof e=="function"?null:e===!0?t:typeof e=="string"?`${t}=${C(e)}`:`:${t}=${C(JSON.stringify(e))}`}function C(t){return t.includes('"')&&!t.includes("'")?`'${t}'`:`"${t.replace(/"/g,"&quot;")}"`}function H(t){let e=t;for(;e&&e.options&&e.options.components&&e.options.components.story&&e.options.components.story.options&&e.options.components.story.options.STORYBOOK_WRAPS;)e=e.options.components.story.options.STORYBOOK_WRAPS;return e}function R(t,e){if(t.$vnode&&t.$vnode.componentOptions&&t.$vnode.componentOptions.Ctor===e)return t;for(let r=0,o=t.$children.length;r<o;r+=1){let s=R(t.$children[r],e);if(s)return s}return null}var J={docs:{story:{inline:!0,iframeHeight:"120px"},extractArgTypes:w,extractComponentDescription:P}},rt=[z],ot=[A],nt={renderer:"vue",...J};export{et as applyDecorators,ot as argTypesEnhancers,rt as decorators,nt as parameters,x as render,tt as renderToCanvas};
//# sourceMappingURL=config-89f54c3a.js.map
