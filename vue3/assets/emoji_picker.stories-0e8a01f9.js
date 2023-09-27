import{a as m}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as j}from"./storybook_utils-98c88692.js";import{D as h}from"./DtEmojiPicker-25f063ca.js";import{M as i,o as v,b as S,w as p,x as d}from"./vue.esm-bundler-24d82261.js";import{D as E}from"./button-59161dae.js";import{D as L}from"./icon-90db3229.js";import{D as $}from"./popover-594a9f92.js";const D={__name:"emoji_picker_default.story",setup(o){const s=i("Default");return(e,n)=>(v(),S(h,{"skin-tone":s.value,"skin-selector-button-tooltip-label":e.$attrs.skinSelectorButtonTooltipLabel,"tab-set-labels":e.$attrs.tabSetLabels,"recently-used-emojis":e.$attrs.recentlyUsedEmojis,"search-results-label":e.$attrs.searchResultsLabel,"search-no-results-label":e.$attrs.searchNoResultsLabel,"search-placeholder-label":e.$attrs.searchPlaceholderLabel,onSkinTone:n[0]||(n[0]=c=>s.value=c),onSelectedEmoji:e.$attrs.selectedEmoji},null,8,["skin-tone","skin-selector-button-tooltip-label","tab-set-labels","recently-used-emojis","search-results-label","search-no-results-label","search-placeholder-label","onSelectedEmoji"]))}};D.__docgenInfo={exportName:"default",displayName:"emoji_picker_default.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_default.story.vue"]};const T={__name:"emoji_picker_popover.story",setup(o){const s=i("Default"),e=i(!1),n=i(null),c=()=>{e.value=!e.value};return(t,l)=>(v(),S($,{open:e.value,"initial-focus-element":"#searchInput",padding:"none",onOpened:l[1]||(l[1]=u=>{e.value=u})},{anchor:p(()=>[d(E,{size:"sm",circle:"",importance:"clear",onClick:c},{icon:p(()=>[d(L,{name:"satisfied",size:"300"})]),_:1})]),content:p(()=>[d(h,{ref_key:"emojiPickerRef",ref:n,"skin-tone":s.value,"skin-selector-button-tooltip-label":t.$attrs.skinSelectorButtonTooltipLabel,"tab-set-labels":t.$attrs.tabSetLabels,"recently-used-emojis":t.$attrs.recentlyUsedEmojis,"search-results-label":t.$attrs.searchResultsLabel,"search-no-results-label":t.$attrs.searchNoResultsLabel,"search-placeholder-label":t.$attrs.searchPlaceholderLabel,onSkinTone:l[0]||(l[0]=u=>s.value=u),onSelectedEmoji:t.$attrs.selectedEmoji},null,8,["skin-tone","skin-selector-button-tooltip-label","tab-set-labels","recently-used-emojis","search-results-label","search-no-results-label","search-placeholder-label","onSelectedEmoji"])]),_:1},8,["open"]))}};T.__docgenInfo={exportName:"default",displayName:"emoji_picker_popover.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_popover.story.vue"]};const N=[{name:"thumbs up",category:"people",shortname:":thumbsup:",shortname_alternates:[":+1:",":thumbup:"],keywords:["+1","hand","thumb","up","uc6"],unicode_output:"1f44d",unicode_character:"1f44d"},{name:"thumbs up: medium-light skin tone",category:"people",shortname:":thumbsup_tone2:",shortname_alternates:[":+1_tone2:",":thumbup_tone2:"],keywords:["+1","hand","medium-light skin tone","thumb","up","uc8"],unicode_output:"1f44d-1f3fc",unicode_character:"1f44d-1f3fc"},{name:"thumbs up: dark skin tone",category:"people",shortname:":thumbsup_tone5:",shortname_alternates:[":+1_tone5:",":thumbup_tone5:"],keywords:["+1","dark skin tone","hand","thumb","up","uc8"],unicode_output:"1f44d-1f3ff",unicode_character:"1f44d-1f3ff"},{name:"person: light skin tone",category:"people",shortname:":adult_tone1:",shortname_alternates:[":adult_light_skin_tone:"],keywords:["gender-neutral","light skin tone","uc10"],unicode_output:"1f9d1-1f3fb",unicode_character:"1f9d1-1f3fb"},{name:"woman with veil: dark skin tone",category:"people",shortname:":woman_with_veil_tone5:",shortname_alternates:[":woman_with_veil_dark_skin_tone:"],keywords:["uc13"],unicode_output:"1f470-1f3ff-200d-2640-fe0f",unicode_character:"1f470-1f3ff-2640"}],P={onSkinTone:m("skin-tone"),onSelectedEmoji:m("selected-emoji"),onClose:m("close"),tabSetLabels:["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],recentlyUsedEmojis:N,skinSelectorButtonTooltipLabel:"Change default skin tone",searchNoResultsLabel:"No results",searchResultsLabel:"Search results",searchPlaceholderLabel:"Search..."},w={skinTone:{options:["Default","Light","MediumLight","Medium","MediumDark","Dark"],control:"select"},onSkinTone:{table:{disable:!0}},onSelectedEmoji:{table:{disable:!0}},onClose:{table:{disable:!0}}},R={title:"Components/Emoji Picker",component:h,args:P,argTypes:w,excludeStories:/.*Data$/,parameters:{a11y:{disable:!0}}},B=o=>j(o,D),C=o=>j(o,T),a={render:B,args:{}},r={render:C,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var b,f,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var _,g,y;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: WithPopoverTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const F=["argsData","argTypesData","Default","WithPopover"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithPopover:r,__namedExportsOrder:F,argTypesData:w,argsData:P,default:R},Symbol.toStringTag,{value:"Module"}));export{a as D,A as E,r as W};
//# sourceMappingURL=emoji_picker.stories-0e8a01f9.js.map