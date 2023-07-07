import{c as f}from"./storybook_utils-2d5d1f9a.js";import{I as $}from"./icon_constants-04c4f6dc.js";import{D as p}from"./emoji_text_wrapper-75e7b39c.js";import{a as j,o as i,b as S,w as a,f as x,k,d as o,s as r,g as z}from"./vue.esm-bundler-88154bf9.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const T={name:"DtEmojiTextWrapperDefault",components:{DtEmojiTextWrapper:p}},N=["innerHTML"];function W(e,h,b,v,E,V){const t=j("dt-emoji-text-wrapper");return i(),S(t,{size:e.$attrs.size,"element-type":e.$attrs.elementType},{default:a(()=>[e.defaultSlot?(i(),x("div",{key:0,innerHTML:e.defaultSlot},null,8,N)):k("",!0)]),_:1},8,["size","element-type"])}const B=y(T,[["render",W]]);T.__docgenInfo={displayName:"DtEmojiTextWrapperDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_default.story.vue"]};const D={name:"DtEmojiTextWrapperVariants",components:{DtEmojiTextWrapper:p}},I={class:"d-stack16"},O=z("button",{class:"d-btn d-btn--primary d-btn--danger"}," Button with shortcode :cry: emoji ",-1);function C(e,h,b,v,E,V){const t=j("dt-emoji-text-wrapper");return i(),x("div",I,[o(t,null,{default:a(()=>[O]),_:1}),o(t,null,{default:a(()=>[r(" Text only with unicode 😃 emoji ")]),_:1}),o(t,null,{default:a(()=>[r(" Text only with invalid unicode 🫡 emoji ")]),_:1}),o(t,{class:"d-btn d-btn--primary","element-type":"button"},{default:a(()=>[r(" Button wrapper :smile: ")]),_:1}),o(t,{size:"800"},{default:a(()=>[r(" Bigger emoji size :smile: ")]),_:1}),o(t,{size:"300"},{default:a(()=>[r(" Smaller emoji size :smile: ")]),_:1})])}const F=y(D,[["render",C]]);D.__docgenInfo={displayName:"DtEmojiTextWrapperVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_variants.story.vue"]};const g={},w={default:{control:"text",table:{type:{summary:"string"}}},size:{options:Object.keys($),control:{type:"select"}},elementType:{table:{type:{summary:"string"},defaultValue:{summary:"div"}},control:{type:"text"}}},M={title:"Components/Emoji Text Wrapper",component:p,args:g,argTypes:w,excludeStories:/.*Data$/},P=e=>f(e,B),H=e=>f(e,F),s={render:P,args:{default:"Some text with :invalid-emoji: :smile: :cry: and 😄, and custom emojis :octocat: :shipit:"}},n={render:H,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var m,l,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Some text with :invalid-emoji: :smile: :cry: and 😄, and custom emojis :octocat: :shipit:'
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,_;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(_=(u=n.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const L=["argsData","argTypesData","Default","Variants"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Variants:n,__namedExportsOrder:L,argTypesData:w,argsData:g,default:M},Symbol.toStringTag,{value:"Module"}));export{s as D,J as E,n as V};
//# sourceMappingURL=emoji_text_wrapper.stories-9e730cc2.js.map
