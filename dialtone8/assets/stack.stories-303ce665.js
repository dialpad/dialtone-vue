import{D as n,a as m,b as p,c as u}from"./stack-793861c1.js";import{n as _}from"./_plugin-vue2_normalizer-2bbd088e.js";import{c as g}from"./storybook_utils-fe18e457.js";const f={name:"StackDefault",components:{DtStack:n},computed:{stackElement(){return this.as?this.as:"div"}}};var S=function(){var t=this,a=t._self._c;return a("dt-stack",{attrs:{direction:t.direction,as:t.stackElement,gap:t.gap}},[a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 1 ")]),a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 2 ")]),a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 3 ")])])},k=[],l=_(f,S,k,!1,null,null,null,null);const v=l.exports;l.exports.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const i={direction:{default:"column"},as:"div",gap:"400"},d={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(m)}"
Breakpoints: "${p}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:u,control:{type:"select"}}},D={title:"Components/Stack",component:n,args:i,argTypes:d,excludeStories:/.*Data$/},T=(s,{argTypes:t})=>g(s,t,v),e={render:T,args:{}};var o,r,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const y=["argsData","argTypesData","Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:y,argTypesData:d,argsData:i,default:D},Symbol.toStringTag,{value:"Module"}));export{E as S};
//# sourceMappingURL=stack.stories-303ce665.js.map
