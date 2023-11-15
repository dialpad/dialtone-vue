import{D as n}from"./stack-2fffbd47.js";import{s as u,o as _,k as f,u as k,w as g,e as a}from"./vue.esm-bundler-3a36b22d.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{c as D}from"./storybook_utils-182ea7b7.js";import{D as v,a as T,b as y}from"./stack_constants-4f71ebff.js";const d={name:"StackDefault",components:{DtStack:n},computed:{stackElement(){return this.$attrs.as?this.$attrs.as:"div"}}},b=a("div",{class:"d-bgc-magenta-100"}," Stack item 1 ",-1),$=a("div",{class:"d-bgc-magenta-100"}," Stack item 2 ",-1),h=a("div",{class:"d-bgc-magenta-100"}," Stack item 3 ",-1);function E(e,o,j,w,A,m){const p=u("dt-stack");return _(),f("div",null,[k(p,{direction:e.$attrs.direction,as:m.stackElement,gap:e.$attrs.gap},{default:g(()=>[b,$,h]),_:1},8,["direction","as","gap"])])}const N=S(d,[["render",E],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]]);d.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const l={direction:{default:"column"},as:"div",gap:"400"},i={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(v)}"
Breakpoints: "${T}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:y,control:{type:"select"}}},O={title:"Components/Stack",component:n,args:l,argTypes:i,excludeStories:/.*Data$/},x=(e,{argTypes:o})=>D(e,o,N),t={render:x,args:{}};var s,r,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const C=["argsData","argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:C,argTypesData:i,argsData:l,default:O},Symbol.toStringTag,{value:"Module"}));export{F as S};
//# sourceMappingURL=stack.stories-d4d37a30.js.map
