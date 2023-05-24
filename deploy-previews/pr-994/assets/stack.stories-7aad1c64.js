import{D as l,a as p,b as u,c as _}from"./stack-dfcd045d.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";import{c as g}from"./storybook_utils-adf429e4.js";const S={name:"StackDefault",components:{DtStack:l},computed:{stackElement(){return this.as?this.as:"div"}}};var i=function(){var t=this,a=t._self._c;return a("dt-stack",{attrs:{direction:t.direction,as:t.stackElement,gap:t.gap}},[a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 1 ")]),a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 2 ")]),a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 3 ")])])},k=[];i._withStripped=!0;var o=f(S,i,k,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue";const v=o.exports;o.exports.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const d={direction:{default:"column"},as:"div",gap:"400"},m={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(p)}"
Breakpoints: "${u}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:_,control:{type:"select"}}},D={title:"Components/Stack",component:l,args:d,argTypes:m,excludeStories:/.*Data$/},T=(s,{argTypes:t})=>g(s,t,v),e={render:T,args:{}};var r,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const y=["argsData","argTypesData","Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:y,argTypesData:m,argsData:d,default:D},Symbol.toStringTag,{value:"Module"}));export{E as S};
//# sourceMappingURL=stack.stories-7aad1c64.js.map
