import{_ as h}from"./iframe-2d830e74.js";import{r as l,R as o,a,C as p,A as E,H as R,b as x}from"./index-86e8f356.js";var c={},u=l;c.createRoot=u.createRoot,c.hydrateRoot=u.hydrateRoot;var n=new Map,y=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t)=>{let r=await w(t);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},e))})},v=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},w=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},D={code:p,a:E,...R},f=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:t}},M=class{constructor(){this.render=async(e,t,r)=>{let s={...D,...t==null?void 0:t.components};return new Promise((i,m)=>{h(()=>import("./index-6cc976fc.js"),["./index-6cc976fc.js","./index-73139a0a.js","./index-86e8f356.js","./iframe-2d830e74.js","./_commonjsHelpers-725317a4.js","./index-d475d2ea.js","./index-d37d4223.js","./index-aefc0af2.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:d})=>_(o.createElement(f,{showException:m,key:Math.random()},o.createElement(d,{components:s},o.createElement(x,{context:e,docsParameter:t}))),r)).then(i)})},this.unmount=e=>{v(e)}}};export{M as D,D as d};
//# sourceMappingURL=chunk-PCJTTTQV-7d5285cc.js.map
