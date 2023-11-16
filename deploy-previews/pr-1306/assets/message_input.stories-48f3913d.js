import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as h}from"./storybook_utils-182ea7b7.js";import{D as d}from"./message_input-be6272d1.js";import{s as $,o as f,k as S,e as s,u as v,w as l,F as M,x as i}from"./vue.esm-bundler-81c53cfe.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{N as w}from"./notice-2276b380.js";const m={name:"DtRecipeMessageInputDefault",components:{DtRecipeMessageInput:d}},j={class:"d-h264"},C=s("div",{class:"d-body-small d-fc-muted"},[s("b",null,"Dwight"),i(" is typing... ")],-1),L=s("div",{class:"d-body-small d-fc-tertiary"},[s("b",null,"Shift"),i(" + "),s("b",null,"Return"),i(" to add a new line ")],-1);function N(e,t,y,F,A,V){const g=$("dt-recipe-message-input");return f(),S(M,null,[s("div",j,[v(g,{ref:"input","show-notice":e.$attrs.showNotice,"onUpdate:showNotice":t[0]||(t[0]=n=>e.$attrs.showNotice=n),modelValue:e.$attrs.modelValue,"onUpdate:modelValue":t[1]||(t[1]=n=>e.$attrs.modelValue=n),"input-aria-label":e.$attrs.inputAriaLabel,"auto-focus":e.$attrs.autoFocus,editable:e.$attrs.editable,"input-class":e.$attrs.inputClass,link:e.$attrs.link,"output-format":e.$attrs.outputFormat,placeholder:e.$attrs.placeholder,"disable-send":e.$attrs.disableSend,"has-character-limit":e.$attrs.hasCharacterLimit,"character-limit-count":e.$attrs.characterLimitCount,"character-limit-warning":e.$attrs.characterLimitWarning,"character-limit-warning-message":e.$attrs.characterLimitWarningMessage,"notice-kind":e.$attrs.noticeKind,"notice-message":e.$attrs.noticeMessage,"emoji-tab-set-labels":e.$attrs.emojiTabSetLabels,"emoji-skin-selector-button-tooltip-label":e.$attrs.emojiSkinSelectorButtonTooltipLabel,"emoji-search-no-results-label":e.$attrs.emojiSearchNoResultsLabel,"emoji-search-results-label":e.$attrs.emojiSearchResultsLabel,"emoji-search-placeholder-label":e.$attrs.emojiSearchPlaceholderLabel,"send-button-aria-label":e.$attrs.sendButtonAriaLabel,"send-tooltip-label":e.$attrs.sendTooltipLabel,"emoji-button-aria-label":e.$attrs.emojiButtonAriaLabel,"image-button-aria-label":e.$attrs.imageButtonAriaLabel,"max-height":e.$attrs.maxHeight,"is-edit":e.$attrs.isEdit,"save-changes-button-text":e.$attrs.saveChangesButtonText,"cancel-message":e.$attrs.cancelMessage,"cancel-button-aria-label":e.$attrs.cancelButtonAriaLabel,"cancel-button-text":e.$attrs.cancelButtonText,onSubmit:e.$attrs.onSubmit,onFocus:e.$attrs.onFocus,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput,onSelectMedia:e.$attrs.onSelectMedia,onAddMedia:e.$attrs.onAddMedia,onNoticeClose:e.$attrs.onNoticeClose,onCancel:e.$attrs.onCancel},{footerLeft:l(()=>[C]),footerRight:l(()=>[L]),_:1},8,["show-notice","modelValue","input-aria-label","auto-focus","editable","input-class","link","output-format","placeholder","disable-send","has-character-limit","character-limit-count","character-limit-warning","character-limit-warning-message","notice-kind","notice-message","emoji-tab-set-labels","emoji-skin-selector-button-tooltip-label","emoji-search-no-results-label","emoji-search-results-label","emoji-search-placeholder-label","send-button-aria-label","send-tooltip-label","emoji-button-aria-label","image-button-aria-label","max-height","is-edit","save-changes-button-text","cancel-message","cancel-button-aria-label","cancel-button-text","onSubmit","onFocus","onBlur","onInput","onSelectMedia","onAddMedia","onNoticeClose","onCancel"])]),s("button",{onClick:t[2]||(t[2]=n=>e.$refs.input.focus())}," focus test ")],64)}const B=D(m,[["render",N],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]]);m.__docgenInfo={displayName:"DtRecipeMessageInputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]};const p={noticeKind:{options:w,control:{type:"select"}},onSubmit:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onAddMedia:{table:{disable:!0}},onNoticeClose:{table:{disable:!0}},onSelectMedia:{table:{disable:!0}},onCancel:{table:{disable:!0}}},b={modelValue:"Always the Padawan, never the Jedi.",placeholder:"New message",inputAriaLabel:"Input text field",noticeMessage:"Files must be less than 32 MB to be sent as Dialpad messages.",maxHeight:"40vh",characterLimitWarningMessage:"You have reached the character limit.",isEdit:!1,onSubmit:a("submit"),onFocus:a("focus"),onBlur:a("blur"),onInput:a("input"),onSelectMedia:a("select-media"),onAddMedia:a("add-media"),onNoticeClose:a("notice-close"),onCancel:a("cancel")},I={title:"Recipes/Conversation View/Message Input",component:d,args:b,argTypes:p,excludeStories:/.*Data$/},T=(e,{argTypes:t})=>h(e,t,B),o={render:T,args:{}};var r,u,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const k=["argTypesData","argsData","Default"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:k,argTypesData:p,argsData:b,default:I},Symbol.toStringTag,{value:"Module"}));export{H as D,o as a};
//# sourceMappingURL=message_input.stories-48f3913d.js.map
