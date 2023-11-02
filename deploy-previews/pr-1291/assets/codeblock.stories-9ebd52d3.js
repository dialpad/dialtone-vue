import{c as d}from"./storybook_utils-5e2f75ca.js";import{D as c}from"./codeblock-51b0dfb5.js";import{t as u,o as p,b as m}from"./vue.esm-bundler-807df745.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";const a={name:"DtCodeblockDefault",components:{DtCodeblock:c}};function f(o,x,g,y,C,T){const l=u("dt-codeblock");return p(),m(l,{text:o.$attrs.text},null,8,["text"])}const _=i(a,[["render",f],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]]);a.__docgenInfo={displayName:"DtCodeblockDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]};const s={text:{description:"The text to include in the codeblock",control:{type:"text"}}},k={title:"Components/Codeblock",component:c,argTypes:s,excludeStories:/.*Data$/,parameters:{}},b=o=>d(o,_),e={render:b,args:{text:`function someFunction() {
  return "some result";
}`}};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    text: 'function someFunction() {\\n  return "some result";\\n}'
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const D=["argTypesData","Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:D,argTypesData:s,default:k},Symbol.toStringTag,{value:"Module"}));export{S as C,e as D};
//# sourceMappingURL=codeblock.stories-9ebd52d3.js.map
