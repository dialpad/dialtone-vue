import{c as _}from"./storybook_utils-XrTpeJKJ.js";import{I as y}from"./icon_constants-spQP7USY.js";import{D as s}from"./emoji_text_wrapper-9RlVXAJ8.js";import{h as g}from"./utils-pRacJSLF.js";import{n as f}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const D={name:"DtEmojiTextWrapperDefault",components:{DtEmojiTextWrapper:s,htmlFragment:g}};var x=function(){var e=this,t=e._self._c;return t("dt-emoji-text-wrapper",{attrs:{size:e.$attrs.size,"element-type":e.$attrs.elementType}},[e.$attrs.default?[t("html-fragment",{attrs:{html:e.$attrs.default}})]:e._e()],2)},T=[];x._withStripped=!0;var n=f(D,x,T,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_default.story.vue";const h=n.exports;n.exports.__docgenInfo={displayName:"DtEmojiTextWrapperDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_default.story.vue"]};const b={name:"DtEmojiTextWrapperVariants",components:{DtEmojiTextWrapper:s}};var j=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-stack16"},[t("dt-emoji-text-wrapper",[t("button",{staticClass:"d-btn d-btn--primary d-btn--danger"},[e._v(" Button with shortcode :cry: emoji ")])]),t("dt-emoji-text-wrapper",[e._v(" Text only with unicode 😃 emoji ")]),t("dt-emoji-text-wrapper",[e._v(" Text only with invalid unicode 🫡 emoji ")]),t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--primary",attrs:{"element-type":"button"}},[e._v(" Button wrapper :smile: ")]),t("dt-emoji-text-wrapper",{attrs:{size:"800"}},[e._v(" Bigger emoji size :smile: ")]),t("dt-emoji-text-wrapper",{attrs:{size:"300"}},[e._v(" Smaller emoji size :smile: ")])],1)},E=[];j._withStripped=!0;var i=f(b,j,E,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_variants.story.vue";const S=i.exports;i.exports.__docgenInfo={displayName:"DtEmojiTextWrapperVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_variants.story.vue"]};const v={},w={default:{control:"text",table:{type:{summary:"string | VNode"}}},size:{options:Object.keys(y),control:{type:"select"}},elementType:{table:{type:{summary:"string"},defaultValue:{summary:"div"}},control:{type:"text"}}},V={title:"Components/Emoji Text Wrapper",component:s,args:v,argTypes:w,excludeStories:/.*Data$/},z=(r,{argTypes:e})=>_(r,e,h),W=(r,{argTypes:e})=>_(r,e,S),a={render:z,args:{default:"Some text with :invalid-emoji: :smile: :cry: and 😄, and custom emojis :octocat: :shipit:"}},o={render:W,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var p,m,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Some text with :invalid-emoji: :smile: :cry: and 😄, and custom emojis :octocat: :shipit:'
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const $=["argsData","argTypesData","Default","Variants"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:o,__namedExportsOrder:$,argTypesData:w,argsData:v,default:V},Symbol.toStringTag,{value:"Module"}));export{a as D,O as E,o as V};
//# sourceMappingURL=emoji_text_wrapper.stories-fBy9E_ha.js.map