import{c as x}from"./storybook_utils-1da4daf3.js";import{f as D,q as r,g,t as y,o as s,a as C,b as $}from"./vue.esm-bundler-66d1e5de.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const l={name:"DtCodeblock",props:{text:{type:String,required:!0}}},T={class:"d-d-block d-bgc-secondary d-ws-pre-wrap d-p8 d-ba d-bc-subtle d-bar8 d-fs-200 d-ff-mono d-lh-400 d-fc-secondary"};function h(t,m,o,f,_,b){return s(),D("pre",null,[r("    "),g("code",T,y(o.text),1),r(`
  `)])}const p=d(l,[["render",h]]);l.__docgenInfo={displayName:"DtCodeblock",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock.vue"]};const u={name:"DtCodeblockDefault",components:{DtCodeblock:p}};function v(t,m,o,f,_,b){const k=C("dt-codeblock");return s(),$(k,{text:t.$attrs.text},null,8,["text"])}const S=d(u,[["render",v]]);u.__docgenInfo={displayName:"DtCodeblockDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]};const i={text:{description:"The text to include in the codeblock",control:{type:"text"}}},F={title:"Components/Codeblock",component:p,argTypes:i,excludeStories:/.*Data$/,parameters:{}},N=t=>x(t,S),e={render:N,args:{text:`function someFunction() {
  return "some result";
}`}};var n,c,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    text: 'function someFunction() {\\n  return "some result";\\n}'
  }
}`,...(a=(c=e.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const B=["argTypesData","Default"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:B,argTypesData:i,default:F},Symbol.toStringTag,{value:"Module"}));export{V as C,e as D};
//# sourceMappingURL=codeblock.stories-a7e32d88.js.map
