import{c as f}from"./storybook_utils-8a497965.js";import{I as $}from"./icon_constants-77ba531a.js";import{D as p}from"./emoji_text_wrapper-79a3395d.js";import{u as j,o as i,b as S,w as a,p as x,f as k,y as o,z as r,e as z}from"./vue.esm-bundler-a1916ad5.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const w={name:"DtEmojiTextWrapperDefault",components:{DtEmojiTextWrapper:p}},N=["innerHTML"];function W(e,v,h,b,E,V){const t=j("dt-emoji-text-wrapper");return i(),S(t,{size:e.$attrs.size,"element-type":e.$attrs.elementType},{default:a(()=>[e.defaultSlot?(i(),x("div",{key:0,innerHTML:e.defaultSlot},null,8,N)):k("v-if",!0)]),_:1},8,["size","element-type"])}const B=y(w,[["render",W],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_default.story.vue"]]);w.__docgenInfo={displayName:"DtEmojiTextWrapperDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_default.story.vue"]};const T={name:"DtEmojiTextWrapperVariants",components:{DtEmojiTextWrapper:p}},I={class:"d-stack16"},O=z("button",{class:"d-btn d-btn--primary d-btn--danger"}," Button with shortcode :cry: emoji ",-1);function C(e,v,h,b,E,V){const t=j("dt-emoji-text-wrapper");return i(),x("div",I,[o(t,null,{default:a(()=>[O]),_:1}),o(t,null,{default:a(()=>[r(" Text only with unicode 😃 emoji ")]),_:1}),o(t,null,{default:a(()=>[r(" Text only with invalid unicode 🫡 emoji ")]),_:1}),o(t,{class:"d-btn d-btn--primary","element-type":"button"},{default:a(()=>[r(" Button wrapper :smile: ")]),_:1}),o(t,{size:"800"},{default:a(()=>[r(" Bigger emoji size :smile: ")]),_:1}),o(t,{size:"300"},{default:a(()=>[r(" Smaller emoji size :smile: ")]),_:1})])}const F=y(T,[["render",C],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_variants.story.vue"]]);T.__docgenInfo={displayName:"DtEmojiTextWrapperVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_variants.story.vue"]};const D={},g={default:{control:"text",table:{type:{summary:"string"}}},size:{options:Object.keys($),control:{type:"select"}},elementType:{table:{type:{summary:"string"},defaultValue:{summary:"div"}},control:{type:"text"}}},M={title:"Components/Emoji Text Wrapper",component:p,args:D,argTypes:g,excludeStories:/.*Data$/},P=e=>f(e,B),H=e=>f(e,F),n={render:P,args:{default:"Some text with :invalid-emoji: :smile: :cry: and 😄, and custom emojis :octocat: :shipit:"}},s={render:H,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Some text with :invalid-emoji: :smile: :cry: and 😄, and custom emojis :octocat: :shipit:'
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,_;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(_=(u=s.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const L=["argsData","argTypesData","Default","Variants"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:s,__namedExportsOrder:L,argTypesData:g,argsData:D,default:M},Symbol.toStringTag,{value:"Module"}));export{n as D,J as E,s as V};
//# sourceMappingURL=emoji_text_wrapper.stories-6d86a17d.js.map
