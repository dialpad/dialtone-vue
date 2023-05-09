import{D as c,a as p,b as u,c as _}from"./stack-33b9fc07.js";import{a as f,o as g,e as k,d as S,w as D,f as a}from"./vue.esm-bundler-2e3b72e0.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{c as T}from"./storybook_utils-35e0d11d.js";const n={name:"StackDefault",components:{DtStack:c},computed:{stackElement(){return this.$attrs.as?this.$attrs.as:"div"}}},y=a("div",{class:"d-bgc-magenta-100"}," Stack item 1 ",-1),b=a("div",{class:"d-bgc-magenta-100"}," Stack item 2 ",-1),$=a("div",{class:"d-bgc-magenta-100"}," Stack item 3 ",-1);function h(e,C,j,w,A,i){const m=f("dt-stack");return g(),k("div",null,[S(m,{direction:e.$attrs.direction,as:i.stackElement,gap:e.$attrs.gap},{default:D(()=>[y,b,$]),_:1},8,["direction","as","gap"])])}const E=v(n,[["render",h],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]]);n.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const d={direction:{default:"column"},as:"div",gap:"400"},l={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(p)}"
Breakpoints: "${u}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:_,control:{type:"select"}}},N={title:"Components/Stack",component:c,args:d,argTypes:l,excludeStories:/.*Data$/},O=e=>T(e,E),t={render:O,args:{}};var o,s,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const x=["argsData","argTypesData","Default"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:x,argTypesData:l,argsData:d,default:N},Symbol.toStringTag,{value:"Module"}));export{P as S};
//# sourceMappingURL=stack.stories-a8497f90.js.map
