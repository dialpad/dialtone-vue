import{_ as d}from"./iframe-4cc84e4b.js";import{h as p,R as o,r as i,i as _,A as R,H as y,D as f}from"./index-0f0aa3c8.js";var c={},u=p;{var n=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;c.createRoot=function(t,e){n.usingClientEntryPoint=!0;try{return u.createRoot(t,e)}finally{n.usingClientEntryPoint=!1}},c.hydrateRoot=function(t,e,r){n.usingClientEntryPoint=!0;try{return u.hydrateRoot(t,e,r)}finally{n.usingClientEntryPoint=!1}}}var s=new Map,D=({callback:t,children:e})=>{let r=i.useRef();return i.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},C=async(t,e)=>{let r=await x(e);return new Promise(a=>{r.render(o.createElement(D,{callback:()=>a(null)},t))})},g=(t,e)=>{let r=s.get(t);r&&(r.unmount(),s.delete(t))},x=async t=>{let e=s.get(t);return e||(e=c.createRoot(t),s.set(t,e)),e},v={code:_,a:R,...y},w=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},L=class{constructor(){this.render=async(t,e,r)=>{let a={...v,...e==null?void 0:e.components},l=f;return new Promise((E,m)=>{d(()=>import("./index-2a4b6372.js"),["./index-2a4b6372.js","./index-846d57b5.js","./index-0f0aa3c8.js","./iframe-4cc84e4b.js","./_commonjsHelpers-725317a4.js","./index-d37d4223.js","./index-cba466d5.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:h})=>C(o.createElement(w,{showException:m,key:Math.random()},o.createElement(h,{components:a},o.createElement(l,{context:t,docsParameter:e}))),r)).then(()=>E())})},this.unmount=t=>{g(t)}}};export{L as D,v as d};
//# sourceMappingURL=chunk-S4VUQJ4A-429041fe.js.map
