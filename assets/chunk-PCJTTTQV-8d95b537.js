import{_ as h}from"./iframe-14145971.js";import{c as l,R as o,r as a,d as p,A as E,H as R,D as x}from"./index-666057c3.js";var c={},u=l;c.createRoot=u.createRoot,c.hydrateRoot=u.hydrateRoot;var n=new Map,y=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},D=async(e,t)=>{let r=await v(t);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},e))})},_=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},v=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},w={code:p,a:E,...R},f=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:t}},M=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components};return new Promise((i,m)=>{h(()=>import("./index-a4419e63.js"),["./index-a4419e63.js","./index-86f4247c.js","./index-666057c3.js","./iframe-14145971.js","./_commonjsHelpers-725317a4.js","./chunk-4NMOSTKD-938b085e.js","./index-d475d2ea.js","./index-d37d4223.js","./index-aefc0af2.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:d})=>D(o.createElement(f,{showException:m,key:Math.random()},o.createElement(d,{components:s},o.createElement(x,{context:e,docsParameter:t}))),r)).then(i)})},this.unmount=e=>{_(e)}}};export{M as D,w as d};
//# sourceMappingURL=chunk-PCJTTTQV-8d95b537.js.map