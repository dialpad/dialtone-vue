import{c as b}from"./storybook_utils-5e2f75ca.js";import{D as _,B}from"./button_group-775bbd58.js";import{D as T}from"./button-cf0b13d0.js";import{c as h}from"./utils-491d6e59.js";import{t as u,o as n,b as l,w as e,p as m,F as p,x as r,y as s}from"./vue.esm-bundler-807df745.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const f={name:"DtButtonGroupDefault",components:{DtButtonGroup:_,DtButton:T,htmlFragment:h}};function v(t,F,O,$,V,w){const D=u("html-fragment"),a=u("dt-button"),y=u("dt-button-group");return n(),l(y,{alignment:t.$attrs.alignment,class:"d-gg8"},{default:e(()=>[t.defaultSlot?(n(),l(D,{key:0,html:t.defaultSlot},null,8,["html"])):t.alignment==="end"?(n(),m(p,{key:1},[r(a,{importance:"outlined"},{default:e(()=>[s(" Cancel ")]),_:1}),r(a,{importance:"primary"},{default:e(()=>[s(" Confirm ")]),_:1})],64)):(n(),m(p,{key:2},[r(a,{importance:"primary"},{default:e(()=>[s(" Confirm ")]),_:1}),r(a,{importance:"outlined"},{default:e(()=>[s(" Cancel ")]),_:1})],64))]),_:1},8,["alignment"])}const G=k(f,[["render",v],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group_default.story.vue"]]);f.__docgenInfo={displayName:"DtButtonGroupDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group_default.story.vue"]};const N={alignment:"start"},g={default:{control:"text",table:{type:{summary:"VNode"}}},alignment:{defaultValue:"start",control:"select",options:Object.keys(B)}},C={title:"Components/Button Group",component:_,argTypes:g,excludeStories:/.*Data$/},S=t=>b(t,G),o={render:S,args:{}};var c,i,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const x=["argsData","argTypesData","Default"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:x,argTypesData:g,argsData:N,default:C},Symbol.toStringTag,{value:"Module"}));export{z as B,o as D};
//# sourceMappingURL=button_group.stories-f3e12afe.js.map
