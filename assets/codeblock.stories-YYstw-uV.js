import{c as p}from"./storybook_utils-XrTpeJKJ.js";import{n as c}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const _={name:"DtCodeblock",props:{text:{type:String,required:!0}}};var m=function(){var e=this,o=e._self._c;return o("pre",[e._v("  "),o("code",{staticClass:"d-codeblock"},[e._v(e._s(e.text))]),e._v(`
`)])},f=[],l=c(_,m,f,!1,null,null,null,null);const u=l.exports;l.exports.__docgenInfo={displayName:"DtCodeblock",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock.vue"]};const v={name:"DtCodeblockDefault",components:{DtCodeblock:u}};var x=function(){var e=this,o=e._self._c;return o("dt-codeblock",{attrs:{text:e.$attrs.text}})},b=[],d=c(v,x,b,!1,null,null,null,null);const k=d.exports;d.exports.__docgenInfo={displayName:"DtCodeblockDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]};const i={text:{description:"The text to include in the codeblock",control:{type:"text"}}},D={title:"Components/Codeblock",component:u,argTypes:i,excludeStories:/.*Data$/,parameters:{}},g=(n,{argTypes:e})=>p(n,e,k),t={render:g,args:{text:`function someFunction() {
  return "some result";
}`}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    text: 'function someFunction() {\\n  return "some result";\\n}'
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const C=["argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:C,argTypesData:i,default:D},Symbol.toStringTag,{value:"Module"}));export{F as C,t as D};
//# sourceMappingURL=codeblock.stories-YYstw-uV.js.map
