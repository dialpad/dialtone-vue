import{c as G}from"./storybook_utils-0f0847c0.js";import{e as f,j as $,k as O,n as S,o,a as n,b as p,w as a,F as w,d as m,s as c}from"./vue.esm-bundler-c0209a4d.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{D as x}from"./button-91f59bb3.js";import{b as C}from"./utils-3cbdaa20.js";const r={start:"d-btn-group--start",end:"d-btn-group--end","space-between":"d-btn-group--space-between"},b={name:"DtButtonGroup",props:{alignment:{type:String,default:"start",validator:t=>Object.keys(r).includes(t)}},data(){return{BUTTON_GROUP_ALIGNMENT:r}}};function F(t,B,s,T,u,h){return o(),f("div",{class:S(["d-btn-group",u.BUTTON_GROUP_ALIGNMENT[s.alignment]]),role:"group"},[$(" @slot Default slot for button items "),O(t.$slots,"default")],2)}const D=g(b,[["render",F],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group.vue"]]);b.__docgenInfo={displayName:"DtButtonGroup",exportName:"default",description:"",tags:{},props:[{name:"alignment",description:"Alignment of the buttons inside the container",type:{name:"string"},defaultValue:{func:!1,value:"'start'"}}],slots:[{name:"default",description:"Default slot for button items"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group.vue"]};const y={name:"DtButtonGroupDefault",components:{DtButtonGroup:D,DtButton:x,htmlFragment:C}};function V(t,B,s,T,u,h){const N=n("html-fragment"),l=n("dt-button"),k=n("dt-button-group");return o(),p(k,{alignment:t.$attrs.alignment},{default:a(()=>[t.defaultSlot?(o(),p(N,{key:0,html:t.defaultSlot},null,8,["html"])):(o(),f(w,{key:1},[m(l,{class:"d-mr6",importance:"primary"},{default:a(()=>[c(" Confirm ")]),_:1}),m(l,{importance:"outlined"},{default:a(()=>[c(" Cancel ")]),_:1})],64))]),_:1},8,["alignment"])}const j=g(y,[["render",V],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group_default.story.vue"]]);y.__docgenInfo={displayName:"DtButtonGroupDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group_default.story.vue"]};const E={alignment:"start"},v={default:{control:"text",table:{type:{summary:"VNode"}}},alignment:{defaultValue:"start",control:"select",options:Object.keys(r)}},I={title:"Components/Button Group",component:D,argTypes:v,excludeStories:/.*Data$/},U=t=>G(t,j),e={render:U,args:{}};var d,i,_;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(_=(i=e.parameters)==null?void 0:i.docs)==null?void 0:_.source}}};const A=["argsData","argTypesData","Default"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:A,argTypesData:v,argsData:E,default:I},Symbol.toStringTag,{value:"Module"}));export{q as B,e as D};
//# sourceMappingURL=button_group.stories-a9325f2b.js.map
