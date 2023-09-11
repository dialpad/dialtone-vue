import{c as d}from"./storybook_utils-8dde5fa6.js";import{D as a}from"./codeblock-5665d4d3.js";import{k as p,o as u,v as m}from"./vue.esm-bundler-400586b0.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";const c={name:"DtCodeblockDefault",components:{DtCodeblock:a}};function f(t,x,g,C,T,y){const l=p("dt-codeblock");return u(),m(l,{text:t.$attrs.text},null,8,["text"])}const _=i(c,[["render",f]]);c.__docgenInfo={displayName:"DtCodeblockDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]};const s={text:{description:"The text to include in the codeblock",control:{type:"text"}}},k={title:"Components/Codeblock",component:a,argTypes:s,excludeStories:/.*Data$/,parameters:{}},D=t=>d(t,_),e={render:D,args:{text:`function someFunction() {
  return "some result";
}`}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    text: 'function someFunction() {\\n  return "some result";\\n}'
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const b=["argTypesData","Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:b,argTypesData:s,default:k},Symbol.toStringTag,{value:"Module"}));export{h as C,e as D};
//# sourceMappingURL=codeblock.stories-ad0c48af.js.map
