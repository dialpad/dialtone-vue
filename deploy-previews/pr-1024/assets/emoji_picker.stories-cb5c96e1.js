import{a as m}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as g}from"./storybook_utils-1c9c66e9.js";import{D as h}from"./emoji_picker-1954bfe8.js";import{I as i,o as v,b as D,w as p,d}from"./vue.esm-bundler-e62bdd6b.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{D as L}from"./button-f0bff3c1.js";import{D as $}from"./icon-ee68f285.js";import{D as N}from"./popover-01841d93.js";const T={__name:"emoji_picker_default.story",setup(o){const s=i("Default");return(e,n)=>(v(),D(h,{"skin-tone":s.value,"skin-selector-button-tooltip-label":e.$attrs.skinSelectorButtonTooltipLabel,"tab-set-labels":e.$attrs.tabSetLabels,"recently-used-emojis":e.$attrs.recentlyUsedEmojis,"search-results-label":e.$attrs.searchResultsLabel,"search-no-results-label":e.$attrs.searchNoResultsLabel,"search-placeholder-label":e.$attrs.searchPlaceholderLabel,onSkinTone:n[0]||(n[0]=c=>s.value=c),onSelectedEmoji:e.$attrs.selectedEmoji},null,8,["skin-tone","skin-selector-button-tooltip-label","tab-set-labels","recently-used-emojis","search-results-label","search-no-results-label","search-placeholder-label","onSelectedEmoji"]))}},R=S(T,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_default.story.vue"]]);T.__docgenInfo={exportName:"default",displayName:"emoji_picker_default.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_default.story.vue"]};const P={__name:"emoji_picker_popover.story",setup(o){const s=i("Default"),e=i(!1),n=i(null),c=()=>{e.value=!e.value};return(t,l)=>(v(),D(N,{open:e.value,"initial-focus-element":"#searchInput",padding:"none",onOpened:l[1]||(l[1]=u=>{e.value=u})},{anchor:p(()=>[d(L,{size:"sm",circle:"",importance:"clear",onClick:c},{icon:p(()=>[d($,{name:"satisfied",size:"300"})]),_:1})]),content:p(()=>[d(h,{ref_key:"emojiPickerRef",ref:n,"skin-tone":s.value,"skin-selector-button-tooltip-label":t.$attrs.skinSelectorButtonTooltipLabel,"tab-set-labels":t.$attrs.tabSetLabels,"recently-used-emojis":t.$attrs.recentlyUsedEmojis,"search-results-label":t.$attrs.searchResultsLabel,"search-no-results-label":t.$attrs.searchNoResultsLabel,"search-placeholder-label":t.$attrs.searchPlaceholderLabel,onSkinTone:l[0]||(l[0]=u=>s.value=u),onSelectedEmoji:t.$attrs.selectedEmoji},null,8,["skin-tone","skin-selector-button-tooltip-label","tab-set-labels","recently-used-emojis","search-results-label","search-no-results-label","search-placeholder-label","onSelectedEmoji"])]),_:1},8,["open"]))}},B=S(P,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_popover.story.vue"]]);P.__docgenInfo={exportName:"default",displayName:"emoji_picker_popover.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_popover.story.vue"]};const C=[{name:"thumbs up",category:"people",shortname:":thumbsup:",shortname_alternates:[":+1:",":thumbup:"],keywords:["+1","hand","thumb","up","uc6"],unicode_output:"1f44d",unicode_character:"1f44d"},{name:"thumbs up: medium-light skin tone",category:"people",shortname:":thumbsup_tone2:",shortname_alternates:[":+1_tone2:",":thumbup_tone2:"],keywords:["+1","hand","medium-light skin tone","thumb","up","uc8"],unicode_output:"1f44d-1f3fc",unicode_character:"1f44d-1f3fc"},{name:"thumbs up: dark skin tone",category:"people",shortname:":thumbsup_tone5:",shortname_alternates:[":+1_tone5:",":thumbup_tone5:"],keywords:["+1","dark skin tone","hand","thumb","up","uc8"],unicode_output:"1f44d-1f3ff",unicode_character:"1f44d-1f3ff"},{name:"person: light skin tone",category:"people",shortname:":adult_tone1:",shortname_alternates:[":adult_light_skin_tone:"],keywords:["gender-neutral","light skin tone","uc10"],unicode_output:"1f9d1-1f3fb",unicode_character:"1f9d1-1f3fb"},{name:"woman with veil: dark skin tone",category:"people",shortname:":woman_with_veil_tone5:",shortname_alternates:[":woman_with_veil_dark_skin_tone:"],keywords:["uc13"],unicode_output:"1f470-1f3ff-200d-2640-fe0f",unicode_character:"1f470-1f3ff-2640"}],w={onSkinTone:m("skin-tone"),onSelectedEmoji:m("selected-emoji"),onClose:m("close"),tabSetLabels:["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],recentlyUsedEmojis:C,skinSelectorButtonTooltipLabel:"Change default skin tone",searchNoResultsLabel:"No results",searchResultsLabel:"Search results",searchPlaceholderLabel:"Search..."},E={skinTone:{options:["Default","Light","MediumLight","Medium","MediumDark","Dark"],control:"select"},onSkinTone:{table:{disable:!0}},onSelectedEmoji:{table:{disable:!0}},onClose:{table:{disable:!0}}},F={title:"Components/Emoji Picker",component:h,args:w,argTypes:E,excludeStories:/.*Data$/,parameters:{a11y:{disable:!0}}},O=o=>g(o,R),W=o=>g(o,B),a={render:O,args:{}},r={render:W,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var b,f,_;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(_=(f=a.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var k,j,y;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(j=r.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const I=["argsData","argTypesData","Default","WithPopover"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithPopover:r,__namedExportsOrder:I,argTypesData:E,argsData:w,default:F},Symbol.toStringTag,{value:"Module"}));export{a as D,J as E,r as W};
//# sourceMappingURL=emoji_picker.stories-cb5c96e1.js.map
