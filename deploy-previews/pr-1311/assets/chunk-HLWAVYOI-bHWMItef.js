import{_ as d}from"./iframe-zjNXYt0c.js";import{r as p,R as n,h as i,i as _,A as R,H as y,D as f}from"./index-I7BmIMjj.js";var c={},u=p;{var o=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;c.createRoot=function(t,e){o.usingClientEntryPoint=!0;try{return u.createRoot(t,e)}finally{o.usingClientEntryPoint=!1}},c.hydrateRoot=function(t,e,r){o.usingClientEntryPoint=!0;try{return u.hydrateRoot(t,e,r)}finally{o.usingClientEntryPoint=!1}}}var s=new Map,D=({callback:t,children:e})=>{let r=i.useRef();return i.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},g=async(t,e)=>{let r=await x(e);return new Promise(a=>{r.render(n.createElement(D,{callback:()=>a(null)},t))})},C=(t,e)=>{let r=s.get(t);r&&(r.unmount(),s.delete(t))},x=async t=>{let e=s.get(t);return e||(e=c.createRoot(t),s.set(t,e)),e},v={code:_,a:R,...y},w=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:n.createElement(n.Fragment,null,e)}},L=class{constructor(){this.render=async(t,e,r)=>{let a={...v,...e==null?void 0:e.components},l=f;return new Promise((E,m)=>{d(()=>import("./index-bbCy0MgO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(({MDXProvider:h})=>g(n.createElement(w,{showException:m,key:Math.random()},n.createElement(h,{components:a},n.createElement(l,{context:t,docsParameter:e}))),r)).then(()=>E())})},this.unmount=t=>{C(t)}}};export{L as D,v as d};
//# sourceMappingURL=chunk-HLWAVYOI-bHWMItef.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-bbCy0MgO.js","./index--59NXJv8.js","./index-I7BmIMjj.js","./iframe-zjNXYt0c.js","./_commonjsHelpers-5-cIlDoe.js","./index-aKxH7ZY0.js","./index-e6jHZmnO.js","./index-PPLHz8o0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}