import{c as m}from"./storybook_utils-65268b54.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const f={name:"DtCodeblock",props:{text:{type:String,required:!0}}};var u=function(){var e=this,t=e._self._c;return t("pre",[e._v("  "),t("code",{staticClass:"d-d-block d-bgc-secondary d-ws-pre-wrap d-p8 d-ba d-bc-subtle d-bar8 d-fs-200 d-ff-mono d-lh-400 d-fc-secondary"},[e._v(e._s(e.text))]),e._v(`
`)])},b=[];u._withStripped=!0;var r=d(f,u,b,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock.vue";const i=r.exports;r.exports.__docgenInfo={displayName:"DtCodeblock",exportName:"default",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock.vue"]};const v={name:"DtCodeblockDefault",components:{DtCodeblock:i}};var p=function(){var e=this,t=e._self._c;return t("dt-codeblock",{attrs:{text:e.text}})},k=[];p._withStripped=!0;var c=d(v,p,k,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue";const x=c.exports;c.exports.__docgenInfo={displayName:"DtCodeblockDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/codeblock/codeblock_default.story.vue"]};const _={text:{description:"The text to include in the codeblock",control:{type:"text"}}},D={title:"Components/Codeblock",component:i,argTypes:_,excludeStories:/.*Data$/,parameters:{}},g=(n,{argTypes:e})=>m(n,e,x),o={render:g,args:{text:`function someFunction() {
  return "some result";
}`}};var s,a,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    text: 'function someFunction() {\\n  return "some result";\\n}'
  }
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const y=["argTypesData","Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:y,argTypesData:_,default:D},Symbol.toStringTag,{value:"Module"}));export{T as C,o as D};
//# sourceMappingURL=codeblock.stories-4f7fd94c.js.map
