import{_ as d}from"./iframe-443c1a6a.js";import{r as h,R as o,a as i,C as p,A as _,H as R,b as y}from"./index-54109f33.js";var c={},u=h;{var n=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;c.createRoot=function(t,e){n.usingClientEntryPoint=!0;try{return u.createRoot(t,e)}finally{n.usingClientEntryPoint=!1}},c.hydrateRoot=function(t,e,r){n.usingClientEntryPoint=!0;try{return u.hydrateRoot(t,e,r)}finally{n.usingClientEntryPoint=!1}}}var s=new Map,f=({callback:t,children:e})=>{let r=i.useRef();return i.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},C=async(t,e)=>{let r=await x(e);return new Promise(a=>{r.render(o.createElement(f,{callback:()=>a(null)},t))})},g=(t,e)=>{let r=s.get(t);r&&(r.unmount(),s.delete(t))},x=async t=>{let e=s.get(t);return e||(e=c.createRoot(t),s.set(t,e)),e},D={code:p,a:_,...R},v=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},A=class{constructor(){this.render=async(t,e,r)=>{let a={...D,...e==null?void 0:e.components};return new Promise((l,E)=>{d(()=>import("./index-8d77d8ca.js"),["./index-8d77d8ca.js","./index-e9740fae.js","./index-54109f33.js","./iframe-443c1a6a.js","./_commonjsHelpers-725317a4.js","./index-d475d2ea.js","./index-d37d4223.js","./index-aefc0af2.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:m})=>C(o.createElement(v,{showException:E,key:Math.random()},o.createElement(m,{components:a},o.createElement(y,{context:t,docsParameter:e}))),r)).then(l)})},this.unmount=t=>{g(t)}}};export{A as D,D as d};
//# sourceMappingURL=chunk-PCJTTTQV-292662c0.js.map
