import{_ as d}from"./iframe-b684e519.js";import{c as h,R as o,r as i,d as p,A as _,H as R,D as y}from"./index-e6e9f421.js";var c={},u=h;{var n=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;c.createRoot=function(t,e){n.usingClientEntryPoint=!0;try{return u.createRoot(t,e)}finally{n.usingClientEntryPoint=!1}},c.hydrateRoot=function(t,e,r){n.usingClientEntryPoint=!0;try{return u.hydrateRoot(t,e,r)}finally{n.usingClientEntryPoint=!1}}}var s=new Map,f=({callback:t,children:e})=>{let r=i.useRef();return i.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},C=async(t,e)=>{let r=await g(e);return new Promise(a=>{r.render(o.createElement(f,{callback:()=>a(null)},t))})},D=(t,e)=>{let r=s.get(t);r&&(r.unmount(),s.delete(t))},g=async t=>{let e=s.get(t);return e||(e=c.createRoot(t),s.set(t,e)),e},x={code:p,a:_,...R},v=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},A=class{constructor(){this.render=async(t,e,r)=>{let a={...x,...e==null?void 0:e.components};return new Promise((l,E)=>{d(()=>import("./index-6e2d9254.js"),["./index-6e2d9254.js","./index-38efdb32.js","./index-e6e9f421.js","./iframe-b684e519.js","./_commonjsHelpers-725317a4.js","./chunk-4NMOSTKD-938b085e.js","./index-d475d2ea.js","./index-d37d4223.js","./index-aefc0af2.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:m})=>C(o.createElement(v,{showException:E,key:Math.random()},o.createElement(m,{components:a},o.createElement(y,{context:t,docsParameter:e}))),r)).then(l)})},this.unmount=t=>{D(t)}}};export{A as D,x as d};
//# sourceMappingURL=chunk-PCJTTTQV-be017d1a.js.map
