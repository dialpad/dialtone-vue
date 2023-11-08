import{D as n}from"./stack-a2f8fb18.js";import{s as u,o as _,k as g,u as f,w as k,e as a}from"./vue.esm-bundler-2fc8d911.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{c as D}from"./storybook_utils-182ea7b7.js";import{D as T,a as y,b}from"./stack_constants-4f71ebff.js";const d={name:"StackDefault",components:{DtStack:n},computed:{stackElement(){return this.$attrs.as?this.$attrs.as:"div"}}},v=a("div",{class:"d-bgc-magenta-100"}," Stack item 1 ",-1),$=a("div",{class:"d-bgc-magenta-100"}," Stack item 2 ",-1),E=a("div",{class:"d-bgc-magenta-100"}," Stack item 3 ",-1);function h(e,o,j,A,B,m){const p=u("dt-stack");return _(),g("div",null,[f(p,{direction:e.$attrs.direction,as:m.stackElement,gap:e.$attrs.gap},{default:k(()=>[v,$,E]),_:1},8,["direction","as","gap"])])}const N=S(d,[["render",h]]);d.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const i={direction:{default:"column"},as:"div",gap:"400"},l={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(T)}"
Breakpoints: "${y}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:b,control:{type:"select"}}},O={title:"Components/Stack",component:n,args:i,argTypes:l,excludeStories:/.*Data$/},x=(e,{argTypes:o})=>D(e,o,N),t={render:x,args:{}};var s,r,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const C=["argsData","argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:C,argTypesData:l,argsData:i,default:O},Symbol.toStringTag,{value:"Module"}));export{F as S};
//# sourceMappingURL=stack.stories-d1cecfc0.js.map
