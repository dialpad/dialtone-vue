import{c as x}from"./storybook_utils-a2047fb2.js";import{f as D,s as n,g,t as y,o as s,a as v,b as C}from"./vue.esm-bundler-3bf5edd9.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const l={name:"DtCodeblock",props:{text:{type:String,required:!0}}},$={class:"d-d-block d-bgc-secondary d-ws-pre-wrap d-p8 d-ba d-bc-subtle d-bar8 d-fs-200 d-ff-mono d-lh-400 d-fc-secondary"};function h(o,m,t,_,f,b){return s(),D("pre",null,[n("    "),g("code",$,y(t.text),1),n(`
  `)])}const u=d(l,[["render",h],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock.vue"]]);l.__docgenInfo={displayName:"DtCodeblock",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock.vue"]};const p={name:"DtCodeblockDefault",components:{DtCodeblock:u}};function T(o,m,t,_,f,b){const k=v("dt-codeblock");return s(),C(k,{text:o.$attrs.text},null,8,["text"])}const S=d(p,[["render",T],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]]);p.__docgenInfo={displayName:"DtCodeblockDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]};const i={text:{description:"The text to include in the codeblock",control:{type:"text"}}},w={title:"Components/Codeblock",component:u,argTypes:i,excludeStories:/.*Data$/,parameters:{}},F=o=>x(o,S),e={render:F,args:{text:`function someFunction() {
  return "some result";
}`}};var r,c,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    text: 'function someFunction() {\\n  return "some result";\\n}'
  }
}`,...(a=(c=e.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const N=["argTypesData","Default"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:N,argTypesData:i,default:w},Symbol.toStringTag,{value:"Module"}));export{j as C,e as D};
//# sourceMappingURL=codeblock.stories-b2a2c123.js.map