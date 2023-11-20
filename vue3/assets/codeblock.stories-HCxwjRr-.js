import{c as x}from"./storybook_utils-dy5aucTw.js";import{k as D,x as n,e as g,y,o as d,s as C,b as $}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as l}from"./_plugin-vue_export-helper-x3n3nnut.js";const p={name:"DtCodeblock",props:{text:{type:String,required:!0}}},T={class:"d-d-block d-bgc-secondary d-ws-pre-wrap d-p8 d-ba d-bc-subtle d-bar8 d-fs-200 d-ff-mono d-lh-400 d-fc-secondary"};function h(t,o,r,f,_,b){return d(),D("pre",null,[n("    "),g("code",T,y(r.text),1),n(`
  `)])}const u=l(p,[["render",h]]);p.__docgenInfo={displayName:"DtCodeblock",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock.vue"]};const i={name:"DtCodeblockDefault",components:{DtCodeblock:u}};function v(t,o,r,f,_,b){const k=C("dt-codeblock");return d(),$(k,{text:t.$attrs.text},null,8,["text"])}const S=l(i,[["render",v]]);i.__docgenInfo={displayName:"DtCodeblockDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]};const m={text:{description:"The text to include in the codeblock",control:{type:"text"}}},F={title:"Components/Codeblock",component:u,argTypes:m,excludeStories:/.*Data$/,parameters:{}},N=(t,{argTypes:o})=>x(t,o,S),e={render:N,args:{text:`function someFunction() {
  return "some result";
}`}};var c,s,a;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    text: 'function someFunction() {\\n  return "some result";\\n}'
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const B=["argTypesData","Default"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:B,argTypesData:m,default:F},Symbol.toStringTag,{value:"Module"}));export{j as C,e as D};
//# sourceMappingURL=codeblock.stories-HCxwjRr-.js.map
