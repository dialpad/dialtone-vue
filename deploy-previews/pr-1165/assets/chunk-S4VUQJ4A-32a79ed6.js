import{_ as h}from"./iframe-a57e40c8.js";import{r as p,R as o,a as i,C as _,A as R,H as y,b as f}from"./index-ed83e929.js";var c={},u=p;{var n=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;c.createRoot=function(t,e){n.usingClientEntryPoint=!0;try{return u.createRoot(t,e)}finally{n.usingClientEntryPoint=!1}},c.hydrateRoot=function(t,e,r){n.usingClientEntryPoint=!0;try{return u.hydrateRoot(t,e,r)}finally{n.usingClientEntryPoint=!1}}}var s=new Map,C=({callback:t,children:e})=>{let r=i.useRef();return i.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},D=async(t,e)=>{let r=await x(e);return new Promise(a=>{r.render(o.createElement(C,{callback:()=>a(null)},t))})},g=(t,e)=>{let r=s.get(t);r&&(r.unmount(),s.delete(t))},x=async t=>{let e=s.get(t);return e||(e=c.createRoot(t),s.set(t,e)),e},v={code:_,a:R,...y},w=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},L=class{constructor(){this.render=async(t,e,r)=>{let a={...v,...e==null?void 0:e.components},l=f;return new Promise((E,m)=>{h(()=>import("./index-d59f20a9.js"),["./index-d59f20a9.js","./index-da1c5eb9.js","./index-ed83e929.js","./iframe-a57e40c8.js","./index-d475d2ea.js","./_commonjsHelpers-725317a4.js","./index-d37d4223.js","./index-4745f7b8.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:d})=>D(o.createElement(w,{showException:m,key:Math.random()},o.createElement(d,{components:a},o.createElement(l,{context:t,docsParameter:e}))),r)).then(()=>E())})},this.unmount=t=>{g(t)}}};export{L as D,v as d};
//# sourceMappingURL=chunk-S4VUQJ4A-32a79ed6.js.map
