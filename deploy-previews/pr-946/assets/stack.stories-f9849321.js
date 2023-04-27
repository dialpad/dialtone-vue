import{D as l,a as p,b as u,c as _}from"./stack-6f38b77a.js";import{n as g,c as f}from"./_plugin-vue2_normalizer-bbedbd26.js";const S={name:"StackDefault",components:{DtStack:l},computed:{stackElement(){return this.as?this.as:"div"}}};var i=function(){var t=this,a=t._self._c;return a("dt-stack",{attrs:{direction:t.direction,as:t.stackElement,gap:t.gap}},[a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 1 ")]),a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 2 ")]),a("div",{staticClass:"d-bgc-magenta-100"},[t._v(" Stack item 3 ")])])},k=[];i._withStripped=!0;var s=g(S,i,k,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue";const v=s.exports;s.exports.__docgenInfo={displayName:"StackDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack_default.story.vue"]};const d={direction:{default:"column"},as:"div",gap:"400"},m={default:{control:{type:null},description:"Slot for main content",table:{type:{summary:"VNode",detail:`
        Example:
<dt-stack>
  <dt-card />
  <dt-card />
  <dt-card />
</dt-stack>`}}},direction:{control:"object",table:{type:{detail:`
        Directions: "${Object.keys(p)}"
Breakpoints: "${u}"
String: "column"
Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`}}},as:{control:"text"},gap:{options:_,control:{type:"select"}}},D={title:"Components/Stack",component:l,args:d,argTypes:m,excludeStories:/.*Data$/},T=(o,{argTypes:t})=>f(o,t,v),e=T.bind({});e.args={};var r,c,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => createTemplateFromVueFile(args, argTypes, StackDefault)`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const y=["argsData","argTypesData","Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:y,argTypesData:m,argsData:d,default:D},Symbol.toStringTag,{value:"Module"}));export{x as S};
//# sourceMappingURL=stack.stories-f9849321.js.map
