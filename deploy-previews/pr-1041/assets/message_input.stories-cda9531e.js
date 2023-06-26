import{a as d}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as R}from"./storybook_utils-bdc1a785.js";import{D as M,R as P,a as E}from"./rich_text_editor-b35f22d7.js";import{D as z}from"./button-803947a5.js";import{D as U}from"./icon-c1bc1987.js";import{a as c,f as y,b as W,w as u,n as f,k as r,g as s,d as l,m as x,l as v,t as j,o as b,s as h}from"./vue.esm-bundler-e62bdd6b.js";import{D as $}from"./emoji_picker-e5f86701.js";import{D as K}from"./popover-7783aeac.js";import{D as q}from"./input-07b6786e.js";import{c as H}from"./notice-5e1eb6b8.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const C={name:"DtRecipeMessageInput",components:{DtButton:z,DtEmojiPicker:$,DtIcon:U,DtInput:q,DtNotice:H,DtPopover:K,DtRichTextEditor:M},mixins:[],inheritAttrs:!1,props:{value:{type:[Object,String],default:""},editable:{type:Boolean,default:!0},inputAriaLabel:{type:String,required:!0,default:""},inputClass:{type:String,default:""},autoFocus:{type:[Boolean,String,Number],default:!1,validator(e){return typeof e=="string"?P.includes(e):!0}},outputFormat:{type:String,default:"text",validator(e){return E.includes(e)}},link:{type:[Boolean,Object],default:!1},placeholder:{type:String,default:""},disableSend:{type:Boolean,default:!1},hasCharacterLimit:{type:Boolean,default:!0},characterLimitCount:{type:Number,default:1500},characterLimitWarning:{type:Number,default:500},noticeMessage:{type:String,default:"images need to have size of 10mb or below!"},noticeKind:{type:String,default:"error"},emojiTabSetLabels:{type:Array,default:()=>["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"]},emojiSkinSelectorButtonTooltipLabel:{type:String,default:"Change default skin tone"},emojiSearchNoResultsLabel:{type:String,default:"No results"},emojiSearchResultsLabel:{type:String,default:"Search results"},emojiSearchPlaceholderLabel:{type:String,default:"Search..."},emojiButtonAriaLabel:{type:String,default:"emoji button"},imageButtonAriaLabel:{type:String,default:"image button"},sendButtonAriaLabel:{type:String,default:"send button"}},emits:["submit","select-media","add-media","notice-close"],data(){return{skinTone:"Default",inputValue:this.value,hasFocus:!1,emojiPickerOpened:!1,errorNoticeOpen:this.noticeMessage!==""}},computed:{inputLength(){return this.inputValue.length},displayCharacterLimitWarning(){return this.hasCharacterLimit&&this.characterLimitCount-this.inputLength<=this.characterLimitWarning},isSendDisabled(){return this.inputLength===0||this.disableSend||this.hasCharacterLimit&&this.inputLength>this.characterLimitCount},computedCloseButtonProps(){return{ariaLabel:"Close"}},noticeClasses(){return["d-p6","d-fs-100"]}},methods:{onDrag(e){e.stopPropagation(),e.preventDefault()},onDrop(e){e.stopPropagation(),e.preventDefault();const n=e.dataTransfer,g=Array.from(n.files).map(i=>i.name);this.$emit("add-media",g)},onSelectEmoji(e){if(!e){this.emojiPickerOpened=!1;return}this.inputValue=this.inputValue+e.shortname,this.emojiPickerOpened=!1},onSelectImage(){this.$refs.messageInputImageUpload.$refs.input.click()},onImageUpload(e){this.$emit("select-media",e)},toggleEmojiPicker(){this.emojiPickerOpened=!this.emojiPickerOpened},onSend(){this.isSendDisabled||(this.$emit("submit",this.inputValue),this.inputValue="")},noticeClose(){this.$emit("notice-close",!0),this.errorNoticeOpen=!1}}},X={class:"d-of-auto d-mx16 d-mt8 d-mb4 d-hmx40p"},J={class:"d-d-flex d-jc-space-between d-mx8 d-my4"},Y={class:"d-d-flex"},G={class:"d-d-flex"},Q={key:0,class:"d-fc-error d-mr16 d-as-center dt-message-input--remaining-char"},Z={class:"d-d-flex d-jc-space-between d-h24 d-ai-center"};function ee(e,n,t,g,i,a){const m=c("dt-icon"),I=c("dt-notice"),N=c("dt-rich-text-editor"),S=c("dt-button"),F=c("dt-input"),A=c("dt-emoji-picker"),O=c("dt-popover");return b(),y("div",{role:"presentation",class:f({"d-mt16":i.errorNoticeOpen}),onDragEnter:n[5]||(n[5]=(...o)=>a.onDrag&&a.onDrag(...o)),onDragOver:n[6]||(n[6]=(...o)=>a.onDrag&&a.onDrag(...o)),onDrop:n[7]||(n[7]=(...o)=>a.onDrop&&a.onDrop(...o))},[i.errorNoticeOpen?(b(),W(I,{key:0,class:f(a.noticeClasses),kind:t.noticeKind,"close-button-props":a.computedCloseButtonProps,onClose:a.noticeClose},{icon:u(()=>[l(m,{size:"100",name:"alert-circle"})]),default:u(()=>[h(j(t.noticeMessage)+" ",1)]),_:1},8,["class","kind","close-button-props","onClose"])):r("v-if",!0),s("div",{class:f(["d-d-flex d-fd-column d-bar8 d-baw1 d-ba d-c-text",{"d-bc-black-500 d-bs-sm":i.hasFocus,"d-bc-default":!i.hasFocus}])},[r(" Some wrapper to restrict the height and show the scrollbar "),s("div",X,[l(N,x({modelValue:i.inputValue,"onUpdate:modelValue":n[0]||(n[0]=o=>i.inputValue=o),editable:t.editable,"input-aria-label":t.inputAriaLabel,"input-class":t.inputClass,"output-format":t.outputFormat,"auto-focus":t.autoFocus,link:t.link,placeholder:t.placeholder},e.$attrs,{onFocus:n[1]||(n[1]=o=>i.hasFocus=!0),onBlur:n[2]||(n[2]=o=>i.hasFocus=!1)}),null,16,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","link","placeholder"])]),r(" @slot Slot for attachment carousel "),v(e.$slots,"middle"),r(" Section for the bottom UI "),s("section",J,[r(" Left content "),s("div",Y,[l(S,{size:"sm",circle:"",importance:"clear","aria-label":t.imageButtonAriaLabel,onClick:a.onSelectImage},{icon:u(()=>[l(m,{name:"image",size:"300"})]),_:1},8,["aria-label","onClick"]),l(F,{ref:"messageInputImageUpload",type:"file",class:"d-ps-absolute",multiple:"",hidden:"",onInput:a.onImageUpload},null,8,["onInput"]),l(O,{open:i.emojiPickerOpened,"initial-focus-element":"#searchInput",padding:"none",onOpened:n[4]||(n[4]=o=>{i.emojiPickerOpened=o})},{anchor:u(()=>[l(S,{size:"sm",circle:"",importance:"clear","aria-label":t.emojiButtonAriaLabel,onClick:a.toggleEmojiPicker},{icon:u(()=>[l(m,{name:"satisfied",size:"300"})]),_:1},8,["aria-label","onClick"])]),content:u(()=>[l(A,{"tab-set-labels":t.emojiTabSetLabels,"skin-selector-button-tooltip-label":t.emojiSkinSelectorButtonTooltipLabel,"search-no-results-label":t.emojiSearchNoResultsLabel,"search-results-label":t.emojiSearchResultsLabel,"search-placeholder-label":t.emojiSearchPlaceholderLabel,"skin-tone":i.skinTone,onSkinTone:n[3]||(n[3]=o=>i.skinTone=o),onSelectedEmoji:a.onSelectEmoji},null,8,["tab-set-labels","skin-selector-button-tooltip-label","search-no-results-label","search-results-label","search-placeholder-label","skin-tone","onSelectedEmoji"])]),_:1},8,["open"])]),r(" Right content "),s("div",G,[r(" Optionally displayed remaining character counter "),a.displayCharacterLimitWarning?(b(),y("p",Q,j(t.characterLimitCount-a.inputLength),1)):r("v-if",!0),r(" Right positioned UI - send button "),l(S,{size:"sm",circle:"",importance:"clear",class:f({"message-input-button__disabled":a.isSendDisabled,"d-bgc-purple-400 d-fc-primary-inverted":!a.isSendDisabled}),"aria-label":t.sendButtonAriaLabel,"aria-disabled":a.isSendDisabled,onClick:a.onSend},{icon:u(()=>[l(m,{name:"send",size:"300"})]),_:1},8,["class","aria-label","aria-disabled","onClick"])])])],2),s("section",Z,[s("div",null,[r(" @slot Slot for helper text. Who is typing can go here "),v(e.$slots,"footerLeft")]),s("div",null,[r(" @slot helper text for the input. Shift + enter for new line "),v(e.$slots,"footerRight")])])],34)}const T=k(C,[["render",ee],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]]);C.__docgenInfo={displayName:"DtRecipeMessageInput",exportName:"default",description:"",tags:{},props:[{name:"value",description:`Value of the input. The object format should match TipTap's JSON
document structure: https://tiptap.dev/guide/output#option-1-json`,type:{name:"object|string"},defaultValue:{func:!1,value:"''"}},{name:"editable",description:"Whether the input is editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"inputAriaLabel",description:"Descriptive label for the input element",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"''"}},{name:"inputClass",description:`Additional class name for the input element. Only accepts a String value
because this is passed to the editor via options. For multiple classes,
join them into one string, e.g. "d-p8 d-hmx96"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autoFocus",description:"Whether the input should receive focus after the component has been\nmounted. Either one of `start`, `end`, `all` or a Boolean or a Number.\n- `start`  Sets the focus to the beginning of the input\n- `end`    Sets the focus to the end of the input\n- `all`    Selects the whole contents of the input\n- `Number` Sets the focus to a specific position in the input\n- `true`   Defaults to `start`\n- `false`  Disables autofocus",tags:{},values:["true","false","start","end","all","number"],type:{name:"boolean|string|number"},defaultValue:{func:!1,value:"false"}},{name:"outputFormat",description:'The output format that the editor uses when emitting the "@input" event.\nOne of `text`, `json`, `html`. See https://tiptap.dev/guide/output for\nexamples.',tags:{},values:["text","json","html"],type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"link",description:"Enables the Link extension and optionally passes configurations to it",type:{name:"boolean|object"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder text",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disableSend",description:"Disable Send Button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCharacterLimit",description:"Enable character Limit warning",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"characterLimitCount",description:"Max number of characters allowed",type:{name:"number"},defaultValue:{func:!1,value:"1500"}},{name:"characterLimitWarning",description:"Number after which warning for max limit appears",type:{name:"number"},defaultValue:{func:!1,value:"500"}},{name:"noticeMessage",description:"message in the notice",type:{name:"string"},defaultValue:{func:!1,value:"'images need to have size of 10mb or below!'"}},{name:"noticeKind",description:"kind of notice to manage color",type:{name:"string"},defaultValue:{func:!1,value:"'error'"}},{name:"emojiTabSetLabels",description:"tab labels for emoji",type:{name:"array"},defaultValue:{func:!1,value:`[
  'Most recently used',
  'Smileys and people',
  'Nature',
  'Food',
  'Activity',
  'Travel',
  'Objects',
  'Symbols',
  'Flags',
]`}},{name:"emojiSkinSelectorButtonTooltipLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Change default skin tone'"}},{name:"emojiSearchNoResultsLabel",type:{name:"string"},defaultValue:{func:!1,value:"'No results'"}},{name:"emojiSearchResultsLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Search results'"}},{name:"emojiSearchPlaceholderLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Search...'"}},{name:"emojiButtonAriaLabel",description:"Emoji button aria label",type:{name:"string"},defaultValue:{func:!1,value:"'emoji button'"}},{name:"imageButtonAriaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'image button'"}},{name:"sendButtonAriaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'send button'"}}],events:[{name:"submit",description:"Fires when send button is clicked",type:{names:["String"]}},{name:"select-media",description:"Fires when media is selected from image button",type:{names:["Array"]}},{name:"add-media",description:"Fires when media is dropped into the message input",type:{names:["Array"]}},{name:"notice-close",description:"Fires when notice is closed by user.",type:{names:["Boolean"]}}],slots:[{name:"middle",description:"Slot for attachment carousel"},{name:"footerLeft",description:"Slot for helper text. Who is typing can go here"},{name:"footerRight",description:"helper text for the input. Shift + enter for new line"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]};const V={name:"DtRecipeMessageInputDefault",components:{DtRecipeMessageInput:T}},te={class:"d-h264"},ae=s("div",{class:"d-fc-100 d-fc-muted"},[s("b",null,"Dwight"),h(" is typing... ")],-1),ne=s("div",{class:"d-fc-100 d-fc-tertiary"},[s("b",null,"Shift"),h(" + "),s("b",null,"Return"),h(" to add a new line ")],-1);function ie(e,n,t,g,i,a){const m=c("dt-recipe-message-input");return b(),y("div",te,[l(m,{"input-aria-label":e.$attrs.inputAriaLabel,"auto-focus":e.$attrs.autoFocus,editable:e.$attrs.editable,"input-class":e.$attrs.inputClass,link:e.$attrs.link,"output-format":e.$attrs.outputFormat,placeholder:e.$attrs.placeholder,value:e.$attrs.value,"disable-send":e.$attrs.disableSend,"has-character-limit":e.$attrs.hasCharacterLimit,"character-limit-count":e.$attrs.characterLimitCount,"character-limit-warning":e.$attrs.characterLimitWarning,"emoji-tab-set-labels":e.$attrs.emojiTabSetLabels,"emoji-skin-selector-button-tooltip-label":e.$attrs.emojiSkinSelectorButtonTooltipLabel,"emoji-search-no-results-label":e.$attrs.emojiSearchNoResultsLabel,"emoji-search-results-label":e.$attrs.emojiSearchResultsLabel,"emoji-search-placeholder-label":e.$attrs.emojiSearchPlaceholderLabel,"send-button-aria-label":e.$attrs.sendButtonAriaLabel,"emoji-button-aria-label":e.$attrs.emojiButtonAriaLabel,"image-button-aria-label":e.$attrs.imageButtonAriaLabel,onSubmit:e.$attrs.onSubmit,onFocus:e.$attrs.onFocus,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput,onSelectMedia:e.$attrs.onSelectMedia,onAddMedia:e.$attrs.onAddMedia,onNoticeClose:e.$attrs.onNoticeClose},{footerLeft:u(()=>[ae]),footerRight:u(()=>[ne]),_:1},8,["input-aria-label","auto-focus","editable","input-class","link","output-format","placeholder","value","disable-send","has-character-limit","character-limit-count","character-limit-warning","emoji-tab-set-labels","emoji-skin-selector-button-tooltip-label","emoji-search-no-results-label","emoji-search-results-label","emoji-search-placeholder-label","send-button-aria-label","emoji-button-aria-label","image-button-aria-label","onSubmit","onFocus","onBlur","onInput","onSelectMedia","onAddMedia","onNoticeClose"])])}const oe=k(V,[["render",ie],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]]);V.__docgenInfo={displayName:"DtRecipeMessageInputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]};const B={onSubmit:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}}},w={placeholder:"New Message",inputAriaLabel:"input text field",onSubmit:d("submit"),onFocus:d("focus"),onBlur:d("blur"),onInput:d("input"),onSelectMedia:d("select-media"),onAddMedia:d("add-media"),onNoticeClose:d("notice-close")},se={title:"Recipes/Conversation View/Message Input",component:T,args:w,argTypes:B,excludeStories:/.*Data$/},le=e=>R(e,oe),p={render:le,args:{}};var _,L,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(D=(L=p.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const re=["argTypesData","argsData","Default"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:p,__namedExportsOrder:re,argTypesData:B,argsData:w,default:se},Symbol.toStringTag,{value:"Module"}));export{ye as D,p as a};
//# sourceMappingURL=message_input.stories-cda9531e.js.map
