import{h as v,c as d}from"./storybook_utils-d749c98e.js";import{I as y}from"./icon_constants-9f8eab39.js";import{D as s}from"./emoji_text_wrapper-2321a883.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const g={name:"DtEmojiTextWrapperDefault",components:{DtEmojiTextWrapper:s,htmlFragment:v}};var D=function(){var e=this,t=e._self._c;return t("dt-emoji-text-wrapper",{attrs:{size:e.size,"element-type":e.elementType}},[e.defaultSlot?[t("html-fragment",{attrs:{html:e.defaultSlot}})]:e._e()],2)},T=[],_=u(g,D,T,!1,null,null,null,null);const w=_.exports;_.exports.__docgenInfo={displayName:"DtEmojiTextWrapperDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_default.story.vue"]};const h={name:"DtEmojiTextWrapperVariants",components:{DtEmojiTextWrapper:s}};var b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-stack16"},[t("dt-emoji-text-wrapper",[t("button",{staticClass:"d-btn d-btn--primary d-btn--danger"},[e._v(" Button with shortcode :cry: emoji ")])]),t("dt-emoji-text-wrapper",[e._v(" Text only with unicode 😃 emoji ")]),t("dt-emoji-text-wrapper",[e._v(" Text only with invalid unicode 🫡 emoji ")]),t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--primary",attrs:{"element-type":"button"}},[e._v(" Button wrapper :smile: ")]),t("dt-emoji-text-wrapper",{attrs:{size:"800"}},[e._v(" Bigger emoji size :smile: ")]),t("dt-emoji-text-wrapper",{attrs:{size:"300"}},[e._v(" Smaller emoji size :smile: ")])],1)},E=[],f=u(h,b,E,!1,null,null,null,null);const S=f.exports;f.exports.__docgenInfo={displayName:"DtEmojiTextWrapperVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_variants.story.vue"]};const x={},j={default:{control:"text",table:{type:{summary:"string | VNode"}}},size:{options:Object.keys(y),control:{type:"select"}},elementType:{table:{type:{summary:"string"},defaultValue:{summary:"div"}},control:{type:"text"}}},V={title:"Components/Emoji Text Wrapper",component:s,args:x,argTypes:j,excludeStories:/.*Data$/},z=(r,{argTypes:e})=>d(r,e,w),W=(r,{argTypes:e})=>d(r,e,S),a={render:z,args:{default:"Some text with :invalid-emoji: :smile: :cry: and 😄, and custom emojis :octocat: :shipit:"}},o={render:W,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var n,i,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Some text with :invalid-emoji: :smile: :cry: and 😄, and custom emojis :octocat: :shipit:'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const F=["argsData","argTypesData","Default","Variants"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:o,__namedExportsOrder:F,argTypesData:j,argsData:x,default:V},Symbol.toStringTag,{value:"Module"}));export{a as D,$ as E,o as V};
//# sourceMappingURL=emoji_text_wrapper.stories-40aabcf5.js.map
