import{D as c,a as p,b as u,c as _}from"./stack-cec07d53.js";import{k as g,o as f,d as k,l as S,m as D,e as a}from"./vue.esm-bundler-400586b0.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{c as y}from"./storybook_utils-8dde5fa6.js";const n={name:"StackDefault",components:{DtStack:c},computed:{stackElement(){return this.$attrs.as?this.$attrs.as:"div"}}},b=a("div",{class:"d-bgc-magenta-100"}," Stack item 1 ",-1),v=a("div",{class:"d-bgc-magenta-100"}," Stack item 2 ",-1),$=a("div",{class:"d-bgc-magenta-100"}," Stack item 3 ",-1);function E(e,C,j,A,B,i){const m=g("dt-stack");return f(),k("div",null,[S(m,{direction:e.$attrs.direction,as:i.stackElement,gap:e.$attrs.gap},{default:D(()=>[b,v,$]),_:1},8,["direction","as","gap"])])}const h=T(n,[["render",E]]);n.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const d={direction:{default:"column"},as:"div",gap:"400"},l={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(p)}"
Breakpoints: "${u}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:_,control:{type:"select"}}},N={title:"Components/Stack",component:c,args:d,argTypes:l,excludeStories:/.*Data$/},O=e=>y(e,h),t={render:O,args:{}};var o,s,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const x=["argsData","argTypesData","Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:x,argTypesData:l,argsData:d,default:N},Symbol.toStringTag,{value:"Module"}));export{w as S};
//# sourceMappingURL=stack.stories-9ef2456e.js.map
