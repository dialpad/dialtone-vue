import{D as n}from"./stack-987140d6.js";import{t as u,o as _,p as f,x as g,w as k,e as a}from"./vue.esm-bundler-807df745.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{c as D}from"./storybook_utils-1ccaacc9.js";import{D as v,a as T,b as y}from"./stack_constants-4f71ebff.js";const d={name:"StackDefault",components:{DtStack:n},computed:{stackElement(){return this.$attrs.as?this.$attrs.as:"div"}}},b=a("div",{class:"d-bgc-magenta-100"}," Stack item 1 ",-1),$=a("div",{class:"d-bgc-magenta-100"}," Stack item 2 ",-1),h=a("div",{class:"d-bgc-magenta-100"}," Stack item 3 ",-1);function E(e,o,j,w,A,m){const p=u("dt-stack");return _(),f("div",null,[g(p,{direction:e.$attrs.direction,as:m.stackElement,gap:e.$attrs.gap},{default:k(()=>[b,$,h]),_:1},8,["direction","as","gap"])])}const x=S(d,[["render",E],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]]);d.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const l={direction:{default:"column"},as:"div",gap:"400"},i={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(v)}"
Breakpoints: "${T}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:y,control:{type:"select"}}},N={title:"Components/Stack",component:n,args:l,argTypes:i,excludeStories:/.*Data$/},O=(e,{argTypes:o})=>D(e,o,x),t={render:O,args:{}};var s,r,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const C=["argsData","argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:C,argTypesData:i,argsData:l,default:N},Symbol.toStringTag,{value:"Module"}));export{F as S};
//# sourceMappingURL=stack.stories-f670888b.js.map
