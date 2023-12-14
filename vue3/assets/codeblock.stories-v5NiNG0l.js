import{c as x}from"./storybook_utils-dy5aucTw.js";import{k as D,x as r,e as g,y,o as l,s as C,b as $}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as d}from"./_plugin-vue_export-helper-x3n3nnut.js";const p={name:"DtCodeblock",props:{text:{type:String,required:!0}}},T={class:"d-codeblock"};function v(t,o,n,_,f,k){return l(),D("pre",null,[r("    "),g("code",T,y(n.text),1),r(`
  `)])}const u=d(p,[["render",v]]);p.__docgenInfo={displayName:"DtCodeblock",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock.vue"]};const i={name:"DtCodeblockDefault",components:{DtCodeblock:u}};function h(t,o,n,_,f,k){const b=C("dt-codeblock");return l(),$(b,{text:t.$attrs.text},null,8,["text"])}const S=d(i,[["render",h]]);i.__docgenInfo={displayName:"DtCodeblockDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]};const m={text:{description:"The text to include in the codeblock",control:{type:"text"}}},F={title:"Components/Codeblock",component:u,argTypes:m,excludeStories:/.*Data$/,parameters:{}},N=(t,{argTypes:o})=>x(t,o,S),e={render:N,args:{text:`function someFunction() {
  return "some result";
}`}};var c,s,a;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    text: 'function someFunction() {\\n  return "some result";\\n}'
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const B=["argTypesData","Default"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:B,argTypesData:m,default:F},Symbol.toStringTag,{value:"Module"}));export{q as C,e as D};
//# sourceMappingURL=codeblock.stories-v5NiNG0l.js.map
