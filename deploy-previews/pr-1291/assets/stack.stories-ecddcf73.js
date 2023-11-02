import{D as c}from"./stack-987140d6.js";import{t as p,o as u,p as _,x as f,w as g,e as a}from"./vue.esm-bundler-807df745.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{c as S}from"./storybook_utils-5e2f75ca.js";import{D,a as v,b as T}from"./stack_constants-4f71ebff.js";const n={name:"StackDefault",components:{DtStack:c},computed:{stackElement(){return this.$attrs.as?this.$attrs.as:"div"}}},y=a("div",{class:"d-bgc-magenta-100"}," Stack item 1 ",-1),b=a("div",{class:"d-bgc-magenta-100"}," Stack item 2 ",-1),$=a("div",{class:"d-bgc-magenta-100"}," Stack item 3 ",-1);function h(e,C,j,w,A,i){const m=p("dt-stack");return u(),_("div",null,[f(m,{direction:e.$attrs.direction,as:i.stackElement,gap:e.$attrs.gap},{default:g(()=>[y,b,$]),_:1},8,["direction","as","gap"])])}const E=k(n,[["render",h],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]]);n.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const d={direction:{default:"column"},as:"div",gap:"400"},l={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(D)}"
Breakpoints: "${v}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:T,control:{type:"select"}}},x={title:"Components/Stack",component:c,args:d,argTypes:l,excludeStories:/.*Data$/},N=e=>S(e,E),t={render:N,args:{}};var o,s,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const O=["argsData","argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:O,argTypesData:l,argsData:d,default:x},Symbol.toStringTag,{value:"Module"}));export{F as S};
//# sourceMappingURL=stack.stories-ecddcf73.js.map
