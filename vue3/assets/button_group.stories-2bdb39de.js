import{c as D}from"./storybook_utils-8dde5fa6.js";import{D as d,B as b}from"./button_group-b6ea6090.js";import{D as y}from"./button-73bbdd30.js";import{b as B}from"./utils-0b5636ec.js";import{k as o,o as a,v as s,m as r,d as T,F as h,l,q as u}from"./vue.esm-bundler-400586b0.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const i={name:"DtButtonGroupDefault",components:{DtButtonGroup:d,DtButton:y,htmlFragment:B}};function G(t,O,$,C,V,j){const f=o("html-fragment"),n=o("dt-button"),g=o("dt-button-group");return a(),s(g,{alignment:t.$attrs.alignment},{default:r(()=>[t.defaultSlot?(a(),s(f,{key:0,html:t.defaultSlot},null,8,["html"])):(a(),T(h,{key:1},[l(n,{class:"d-mr6",importance:"primary"},{default:r(()=>[u(" Confirm ")]),_:1}),l(n,{importance:"outlined"},{default:r(()=>[u(" Cancel ")]),_:1})],64))]),_:1},8,["alignment"])}const N=k(i,[["render",G]]);i.__docgenInfo={displayName:"DtButtonGroupDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group_default.story.vue"]};const S={alignment:"start"},_={default:{control:"text",table:{type:{summary:"VNode"}}},alignment:{defaultValue:"start",control:"select",options:Object.keys(b)}},v={title:"Components/Button Group",component:d,argTypes:_,excludeStories:/.*Data$/},x=t=>D(t,N),e={render:x,args:{}};var m,p,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const F=["argsData","argTypesData","Default"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:F,argTypesData:_,argsData:S,default:v},Symbol.toStringTag,{value:"Module"}));export{q as B,e as D};
//# sourceMappingURL=button_group.stories-2bdb39de.js.map