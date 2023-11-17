import{D as n}from"./stack-JDcL8RhQ.js";import{n as m}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{c as p}from"./storybook_utils-XrTpeJKJ.js";import{D as u,a as _,b as f}from"./stack_constants-45i7xhSZ.js";const g={name:"StackDefault",components:{DtStack:n},computed:{stackElement(){return this.as?this.as:"div"}}};var S=function(){var t=this,a=t._self._c;return a("dt-stack",{attrs:{direction:t.$attrs.direction,as:t.stackElement,gap:t.$attrs.gap}},[a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 1 ")]),a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 2 ")]),a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 3 ")])])},k=[],l=m(g,S,k,!1,null,null,null,null);const v=l.exports;l.exports.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const i={direction:{default:"column"},as:"div",gap:"400"},d={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(u)}"
Breakpoints: "${_}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:f,control:{type:"select"}}},D={title:"Components/Stack",component:n,args:i,argTypes:d,excludeStories:/.*Data$/},T=(s,{argTypes:t})=>p(s,t,v),e={render:T,args:{}};var r,o,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const y=["argsData","argTypesData","Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:y,argTypesData:d,argsData:i,default:D},Symbol.toStringTag,{value:"Module"}));export{O as S};
//# sourceMappingURL=stack.stories-mVKcO9bT.js.map
