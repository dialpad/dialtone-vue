import{c as i}from"./storybook_utils-2a232650.js";import{n as c}from"./_plugin-vue2_normalizer-2bbd088e.js";const m={name:"DtCodeblock",props:{text:{type:String,required:!0}}};var _=function(){var e=this,o=e._self._c;return o("pre",[e._v("  "),o("code",{staticClass:"d-d-block d-bgc-secondary d-ws-pre-wrap d-p8 d-ba d-bc-subtle d-bar8 d-fs-200 d-ff-mono d-lh-400 d-fc-secondary"},[e._v(e._s(e.text))]),e._v(`
`)])},f=[],l=c(m,_,f,!1,null,null,null,null);const d=l.exports;l.exports.__docgenInfo={displayName:"DtCodeblock",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock.vue"]};const b={name:"DtCodeblockDefault",components:{DtCodeblock:d}};var v=function(){var e=this,o=e._self._c;return o("dt-codeblock",{attrs:{text:e.text}})},x=[],u=c(b,v,x,!1,null,null,null,null);const k=u.exports;u.exports.__docgenInfo={displayName:"DtCodeblockDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]};const p={text:{description:"The text to include in the codeblock",control:{type:"text"}}},D={title:"Components/Codeblock",component:d,argTypes:p,excludeStories:/.*Data$/,parameters:{}},g=(n,{argTypes:e})=>i(n,e,k),t={render:g,args:{text:`function someFunction() {
  return "some result";
}`}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    text: 'function someFunction() {\\n  return "some result";\\n}'
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const y=["argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:y,argTypesData:p,default:D},Symbol.toStringTag,{value:"Module"}));export{F as C,t as D};
//# sourceMappingURL=codeblock.stories-d279f0da.js.map
