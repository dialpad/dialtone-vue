import{c as x}from"./storybook_utils-dy5aucTw.js";import{I as $}from"./icon_constants-spQP7USY.js";import{D as m}from"./emoji_text_wrapper-p9GQE4zo.js";import{s as j,o as p,b as S,w as a,k as y,g as k,u as o,x as s,e as z}from"./vue.esm-bundler-qY5SvxH_.js";import{_ as T}from"./_plugin-vue_export-helper-x3n3nnut.js";const D={name:"DtEmojiTextWrapperDefault",components:{DtEmojiTextWrapper:m}},N=["innerHTML"];function W(e,r,b,v,E,V){const t=j("dt-emoji-text-wrapper");return p(),S(t,{size:e.$attrs.size,"element-type":e.$attrs.elementType},{default:a(()=>[e.defaultSlot?(p(),y("div",{key:0,innerHTML:e.defaultSlot},null,8,N)):k("",!0)]),_:1},8,["size","element-type"])}const B=T(D,[["render",W]]);D.__docgenInfo={displayName:"DtEmojiTextWrapperDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_default.story.vue"]};const g={name:"DtEmojiTextWrapperVariants",components:{DtEmojiTextWrapper:m}},I={class:"d-stack16"},O=z("button",{class:"d-btn d-btn--primary d-btn--danger"}," Button with shortcode :cry: emoji ",-1);function C(e,r,b,v,E,V){const t=j("dt-emoji-text-wrapper");return p(),y("div",I,[o(t,null,{default:a(()=>[O]),_:1}),o(t,null,{default:a(()=>[s(" Text only with unicode 😃 emoji ")]),_:1}),o(t,null,{default:a(()=>[s(" Text only with invalid unicode 🫡 emoji ")]),_:1}),o(t,{class:"d-btn d-btn--primary","element-type":"button"},{default:a(()=>[s(" Button wrapper :smile: ")]),_:1}),o(t,{size:"800"},{default:a(()=>[s(" Bigger emoji size :smile: ")]),_:1}),o(t,{size:"300"},{default:a(()=>[s(" Smaller emoji size :smile: ")]),_:1})])}const F=T(g,[["render",C]]);g.__docgenInfo={displayName:"DtEmojiTextWrapperVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper_variants.story.vue"]};const w={},h={default:{control:"text",table:{type:{summary:"string"}}},size:{options:Object.keys($),control:{type:"select"}},elementType:{table:{type:{summary:"string"},defaultValue:{summary:"div"}},control:{type:"text"}}},M={title:"Components/Emoji Text Wrapper",component:m,args:w,argTypes:h,excludeStories:/.*Data$/},P=(e,{argTypes:r})=>x(e,r,B),H=(e,{argTypes:r})=>x(e,r,F),n={render:P,args:{default:"Some text with :invalid-emoji: :smile: :cry: and 😄, and custom emojis :octocat: :shipit:"}},i={render:H,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Some text with :invalid-emoji: :smile: :cry: and 😄, and custom emojis :octocat: :shipit:'
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,_,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(_=i.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const L=["argsData","argTypesData","Default","Variants"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:i,__namedExportsOrder:L,argTypesData:h,argsData:w,default:M},Symbol.toStringTag,{value:"Module"}));export{n as D,J as E,i as V};
//# sourceMappingURL=emoji_text_wrapper.stories-BNl5_Eq_.js.map
