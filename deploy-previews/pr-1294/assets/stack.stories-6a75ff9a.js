import{D as l}from"./stack-64ff0684.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";import{c as u}from"./storybook_utils-996a989f.js";import{D as _,a as f,b as g}from"./stack_constants-4f71ebff.js";const S={name:"StackDefault",components:{DtStack:l},computed:{stackElement(){return this.as?this.as:"div"}}};var i=function(){var t=this,a=t._self._c;return a("dt-stack",{attrs:{direction:t.$attrs.direction,as:t.stackElement,gap:t.$attrs.gap}},[a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 1 ")]),a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 2 ")]),a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 3 ")])])},k=[];i._withStripped=!0;var o=p(S,i,k,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue";const v=o.exports;o.exports.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const d={direction:{default:"column"},as:"div",gap:"400"},m={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(_)}"
Breakpoints: "${f}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:g,control:{type:"select"}}},D={title:"Components/Stack",component:l,args:d,argTypes:m,excludeStories:/.*Data$/},T=(r,{argTypes:t})=>u(r,t,v),e={render:T,args:{}};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const y=["argsData","argTypesData","Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:y,argTypesData:m,argsData:d,default:D},Symbol.toStringTag,{value:"Module"}));export{O as S};
//# sourceMappingURL=stack.stories-6a75ff9a.js.map
