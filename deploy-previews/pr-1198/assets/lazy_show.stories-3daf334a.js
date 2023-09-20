import{D as c}from"./lazy_show-64626599.js";import{D as w}from"./button-5bfbc090.js";import{k as s,o as f,d as h,p as r,m as n,q as _,e as y}from"./vue.esm-bundler-0b5a673d.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{c as g}from"./storybook_utils-819067e7.js";const u={name:"LazyShowDefault",components:{DtLazyShow:c,DtButton:w},props:{show:{type:Boolean,default:!1}},data(){return{isShown:this.show||!1}},watch:{show(e){this.isShown=e}}},z=y("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1);function b(e,a,L,N,t,V){const d=s("dt-button"),m=s("dt-lazy-show");return f(),h("div",null,[r(d,{onClick:a[0]||(a[0]=B=>t.isShown=!t.isShown)},{default:n(()=>[_(" Toggle ")]),_:1}),r(m,{show:t.isShown,appear:e.$attrs.appear,transition:e.$attrs.transition},{default:n(()=>[z]),_:1},8,["show","appear","transition"])])}const v=S(u,[["render",b],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/lazy_show/lazy_show_default.story.vue"]]);u.__docgenInfo={displayName:"LazyShowDefault",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/lazy_show/lazy_show_default.story.vue"]};const D={default:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},transition:{options:["","fade","slide-down","pop","shake"],control:{type:"select"}}},T={title:"Utilities/Lazy Show",component:c,argTypes:D,excludeStories:/.Data$/},k=e=>g(e,v),o={render:k,args:{}};var l,i,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const x=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:x,default:T},Symbol.toStringTag,{value:"Module"}));export{E as L};
//# sourceMappingURL=lazy_show.stories-3daf334a.js.map
