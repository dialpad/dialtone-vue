import{a as t}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as h}from"./storybook_utils-fb032280.js";import{D as c}from"./message_input-f0e1c906.js";import{u as f,o as $,p as S,e as a,y as D,w as n,F as M,z as r}from"./vue.esm-bundler-5f4c5b12.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{N as j}from"./notice-3d4567ca.js";const m={name:"DtRecipeMessageInputDefault",components:{DtRecipeMessageInput:c}},v={class:"d-h264"},N=a("div",{class:"d-body-small d-fc-muted"},[a("b",null,"Dwight"),r(" is typing... ")],-1),L=a("div",{class:"d-body-small d-fc-tertiary"},[a("b",null,"Shift"),r(" + "),a("b",null,"Return"),r(" to add a new line ")],-1);function y(e,o,F,T,A,V){const g=f("dt-recipe-message-input");return $(),S(M,null,[a("div",v,[D(g,{ref:"input","show-notice":e.$attrs.showNotice,"onUpdate:showNotice":o[0]||(o[0]=i=>e.$attrs.showNotice=i),modelValue:e.$attrs.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$attrs.modelValue=i),"input-aria-label":e.$attrs.inputAriaLabel,"auto-focus":e.$attrs.autoFocus,editable:e.$attrs.editable,"input-class":e.$attrs.inputClass,link:e.$attrs.link,"output-format":e.$attrs.outputFormat,placeholder:e.$attrs.placeholder,"disable-send":e.$attrs.disableSend,"has-character-limit":e.$attrs.hasCharacterLimit,"character-limit-count":e.$attrs.characterLimitCount,"character-limit-warning":e.$attrs.characterLimitWarning,"character-limit-warning-message":e.$attrs.characterLimitWarningMessage,"notice-kind":e.$attrs.noticeKind,"notice-message":e.$attrs.noticeMessage,"emoji-tab-set-labels":e.$attrs.emojiTabSetLabels,"emoji-skin-selector-button-tooltip-label":e.$attrs.emojiSkinSelectorButtonTooltipLabel,"emoji-search-no-results-label":e.$attrs.emojiSearchNoResultsLabel,"emoji-search-results-label":e.$attrs.emojiSearchResultsLabel,"emoji-search-placeholder-label":e.$attrs.emojiSearchPlaceholderLabel,"send-button-aria-label":e.$attrs.sendButtonAriaLabel,"emoji-button-aria-label":e.$attrs.emojiButtonAriaLabel,"image-button-aria-label":e.$attrs.imageButtonAriaLabel,onSubmit:e.$attrs.onSubmit,onFocus:e.$attrs.onFocus,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput,onSelectMedia:e.$attrs.onSelectMedia,onAddMedia:e.$attrs.onAddMedia,onNoticeClose:e.$attrs.onNoticeClose},{footerLeft:n(()=>[N]),footerRight:n(()=>[L]),_:1},8,["show-notice","modelValue","input-aria-label","auto-focus","editable","input-class","link","output-format","placeholder","disable-send","has-character-limit","character-limit-count","character-limit-warning","character-limit-warning-message","notice-kind","notice-message","emoji-tab-set-labels","emoji-skin-selector-button-tooltip-label","emoji-search-no-results-label","emoji-search-results-label","emoji-search-placeholder-label","send-button-aria-label","emoji-button-aria-label","image-button-aria-label","onSubmit","onFocus","onBlur","onInput","onSelectMedia","onAddMedia","onNoticeClose"])]),a("button",{onClick:o[2]||(o[2]=i=>e.$refs.input.focus())}," focus test ")],64)}const I=w(m,[["render",y],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]]);m.__docgenInfo={displayName:"DtRecipeMessageInputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]};const p={noticeKind:{options:j,control:{type:"select"}},onSubmit:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onAddMedia:{table:{disable:!0}},onNoticeClose:{table:{disable:!0}},onSelectMedia:{table:{disable:!0}}},b={modelValue:"Always the Padawan, never the Jedi.",placeholder:"New message",inputAriaLabel:"Input text field",noticeMessage:"Files must be less than 32 MB to be sent as Dialpad messages.",characterLimitWarningMessage:"You have reached the character limit.",onSubmit:t("submit"),onFocus:t("focus"),onBlur:t("blur"),onInput:t("input"),onSelectMedia:t("select-media"),onAddMedia:t("add-media"),onNoticeClose:t("notice-close")},k={title:"Recipes/Conversation View/Message Input",component:c,args:b,argTypes:p,excludeStories:/.*Data$/},B=e=>h(e,I),s={render:B,args:{}};var l,u,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const C=["argTypesData","argsData","Default"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:C,argTypesData:p,argsData:b,default:k},Symbol.toStringTag,{value:"Module"}));export{z as D,s as a};
//# sourceMappingURL=message_input.stories-d3ae2741.js.map
