import{h as c,c as _,i as O,a as m,r as d}from"./vue.esm-bundler-4299d4fa.js";const{sanitizeStoryContextUpdate:N}=__STORYBOOK_MODULE_PREVIEW_API__;function h(e){return typeof e=="function"?{render:e,name:e.name}:e}function S(e,r){let t=e;return t===null?null:typeof t=="function"?t:r?{...h(t),components:{...t.components||{},story:r}}:{render(){return c(t)}}}function j(e,r){return r.reduce((t,s)=>a=>{let n,i=s(o=>{let u=N(o);return o&&(u.args=Object.assign(a.args,u.args)),n=t({...a,...u}),n},a);return n||(n=t(a)),i===n?n:S(i,()=>c(n))},t=>S(e(t)))}var y=(e,r)=>{let{id:t,component:s}=r;if(!s)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return()=>c(s,e,I(e,r))},E=e=>{globalThis.PLUGINS_SETUP_FUNCTIONS??(globalThis.PLUGINS_SETUP_FUNCTIONS=new Set),globalThis.PLUGINS_SETUP_FUNCTIONS.add(e)},P=async(e,r)=>{globalThis&&globalThis.PLUGINS_SETUP_FUNCTIONS&&await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map(t=>t(e,r)))},p=new Map;async function F({storyFn:e,forceRemount:r,showMain:t,showException:s,storyContext:a,id:n},i){let o=p.get(i);if(o&&!r){let l=e(),g=T(l,a);return b(o.reactiveArgs,g),()=>{f(o.vueApp,i)}}o&&r&&f(o.vueApp,i);let u=_({setup(){a.args=d(a.args);let l=e(),g=T(l,a),U={vueApp:u,reactiveArgs:d(g)};return p.set(i,U),()=>c(l)}});return u.config.errorHandler=l=>s(l),await P(u,a),u.mount(i),t(),()=>{f(u,i)}}function I(e,r){let{argTypes:t}=r,s=Object.entries(e).filter(([a])=>{var n,i;return((i=(n=t[a])==null?void 0:n.table)==null?void 0:i.category)==="slots"}).map(([a,n])=>[a,typeof n=="function"?n:()=>n]);return Object.fromEntries(s)}function T(e,r){return e.props&&O(e)?e.props:r.args}function b(e,r){if(Object.keys(r).length===0)return;let t=m(e)?e:d(e);Object.keys(t).forEach(s=>{s in r||delete t[s]}),Object.assign(t,r)}function f(e,r){e==null||e.unmount(),p.has(r)&&p.delete(r)}export{F as a,j as d,y as r,E as s};
//# sourceMappingURL=chunk-UXHY756F-8e2ab026.js.map
