import{D as V,R as C,a as _}from"./rich_text_editor-2df9ab66.js";import{D as w}from"./button-a4e86900.js";import{D as P}from"./icon-a9416a2a.js";import{u as d,p as v,b as y,w as r,k as g,f as l,e as u,q as x,y as s,m as B,g as h,F as I,o as p,z as E,A as S,J as N}from"./vue.esm-bundler-5f4c5b12.js";import{D as A}from"./DtEmojiPicker-0e4dda42.js";import{D as O}from"./popover-5b829eec.js";import{D as M}from"./input-4e1df1a4.js";import{c as R,N as W}from"./notice-3d4567ca.js";import{D as q}from"./tooltip-0a7b46b1.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const k={name:"DtRecipeMessageInput",components:{DtButton:w,DtEmojiPicker:A,DtIcon:P,DtInput:M,DtNotice:R,DtPopover:O,DtRichTextEditor:V,DtTooltip:q},mixins:[],inheritAttrs:!1,props:{modelValue:{type:[Object,String],default:""},editable:{type:Boolean,default:!0},inputAriaLabel:{type:String,required:!0,default:""},inputClass:{type:String,default:""},autoFocus:{type:[Boolean,String,Number],default:!1,validator(a){return typeof a=="string"?C.includes(a):!0}},outputFormat:{type:String,default:"text",validator(a){return _.includes(a)}},link:{type:[Boolean,Object],default:!1},placeholder:{type:String,default:""},disableSend:{type:Boolean,default:!1},hasCharacterLimit:{type:Boolean,default:!0},characterLimitCount:{type:Number,default:1500},characterLimitWarning:{type:Number,default:500},characterLimitWarningMessage:{type:String,default:""},showNotice:{type:Boolean,default:!1},noticeMessage:{type:String,default:""},noticeKind:{type:String,default:"error",validate(a){return W.includes(a)}},emojiTabSetLabels:{type:Array,default:()=>["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"]},emojiSkinSelectorButtonTooltipLabel:{type:String,default:"Change default skin tone"},emojiSearchNoResultsLabel:{type:String,default:"No results"},emojiSearchResultsLabel:{type:String,default:"Search results"},emojiSearchPlaceholderLabel:{type:String,default:"Search..."},emojiTooltipMessage:{type:String,default:"Emoji"},emojiButtonAriaLabel:{type:String,default:"emoji button"},imageButtonAriaLabel:{type:String,default:"image button"},imageTooltipLabel:{type:String,default:"Attach Image"},sendButtonAriaLabel:{type:String,default:"send button"},sendTooltipLabel:{type:String,default:"Send"}},emits:["submit","select-media","add-media","notice-close"],data(){return{skinTone:"Default",internalInputValue:this.modelValue,hasFocus:!1,imagePickerFocus:!1,emojiPickerFocus:!1,sendButtonFocus:!1,emojiPickerOpened:!1}},computed:{inputLength(){return this.internalInputValue.length},displayCharacterLimitWarning(){return this.hasCharacterLimit&&this.characterLimitCount-this.inputLength<=this.characterLimitWarning},isSendDisabled(){return this.inputLength===0||this.disableSend||this.hasCharacterLimit&&this.inputLength>this.characterLimitCount},computedCloseButtonProps(){return{ariaLabel:"Close"}},noticeClasses(){return["dt-message-input-notice","d-ps-relative","d-t8","d-bbr0","d-pt4","d-pb8","d-pr12","d-pl16","d-bs-none","d-fs-100","d-wmx-unset"]},emojiPickerHovered(){return this.emojiPickerFocus||this.emojiPickerOpened}},watch:{modelValue(a){this.internalInputValue=a}},methods:{onDrag(a){a.stopPropagation(),a.preventDefault()},onDrop(a){a.stopPropagation(),a.preventDefault();const e=a.dataTransfer,b=Array.from(e.files).map(n=>n.name);this.$emit("add-media",b)},onSelectEmoji(a){if(!a){this.emojiPickerOpened=!1;return}this.$refs.richTextEditor.editor.commands.insertContent({type:"emoji",attrs:{code:a.shortname}}),this.emojiPickerOpened=!1},onSelectImage(){this.$refs.messageInputImageUpload.$refs.input.click()},onImageUpload(a){this.$emit("select-media",a)},toggleEmojiPicker(){this.emojiPickerOpened=!this.emojiPickerOpened},onSend(){this.isSendDisabled||this.$emit("submit",this.internalInputValue)},noticeClose(){this.$emit("notice-close",!0)},focus(){this.$refs.richTextEditor.focusEditor(),this.hasFocus=!0}}},z={class:"d-ps-relative d-bar8 d-bgc-white"},K={class:"d-of-auto d-mx16 d-mt8 d-mb4 d-hmx40p"},H={class:"d-d-flex d-jc-space-between d-mx8 d-my4"},J={class:"d-d-flex"},X={class:"d-d-flex"},Y={key:0,class:"d-fc-error d-mr16 d-as-center dt-message-input--remaining-char","data-qa":"dt-message-input-character-limit"},G={class:"d-d-flex d-jc-space-between d-h24 d-ai-center"},Q={"data-qa":"dt-message-input-footer-left"},Z={"data-qa":"dt-message-input-footer-right"};function $(a,e,i,b,n,o){const m=d("dt-icon"),j=d("dt-notice"),L=d("dt-rich-text-editor"),f=d("dt-button"),F=d("dt-input"),c=d("dt-tooltip"),D=d("dt-emoji-picker"),T=d("dt-popover");return p(),v(I,null,[i.showNotice?(p(),y(j,{key:0,"data-qa":"dt-message-input-error-notice",class:g(o.noticeClasses),kind:i.noticeKind,"close-button-props":o.computedCloseButtonProps,onClose:o.noticeClose},{icon:r(()=>[s(m,{size:"300",name:"alert-circle"})]),default:r(()=>[E(S(i.noticeMessage)+" ",1)]),_:1},8,["class","kind","close-button-props","onClose"])):l("v-if",!0),u("div",z,[u("div",{"data-qa":"dt-message-input",role:"presentation",class:g(["d-d-flex d-fd-column d-bar8 d-baw1 d-ba d-c-text",{"d-bc-black-500 d-bs-sm":n.hasFocus,"d-bc-default":!n.hasFocus}]),onClick:e[17]||(e[17]=t=>a.$refs.richTextEditor.focusEditor()),onDragEnter:e[18]||(e[18]=(...t)=>o.onDrag&&o.onDrag(...t)),onDragOver:e[19]||(e[19]=(...t)=>o.onDrag&&o.onDrag(...t)),onDrop:e[20]||(e[20]=(...t)=>o.onDrop&&o.onDrop(...t)),onKeydown:e[21]||(e[21]=x(N((...t)=>o.onSend&&o.onSend(...t),["exact"]),["enter"])),onFocusin:e[22]||(e[22]=t=>n.hasFocus=!0),onFocusout:e[23]||(e[23]=t=>n.hasFocus=!1)},[l(" Some wrapper to restrict the height and show the scrollbar "),u("div",K,[s(L,B({ref:"richTextEditor",modelValue:n.internalInputValue,"onUpdate:modelValue":e[0]||(e[0]=t=>n.internalInputValue=t),editable:i.editable,"input-aria-label":i.inputAriaLabel,"input-class":i.inputClass,"output-format":i.outputFormat,"auto-focus":i.autoFocus,link:i.link,placeholder:i.placeholder},a.$attrs,{onFocus:e[1]||(e[1]=t=>n.hasFocus=!0),onBlur:e[2]||(e[2]=t=>n.hasFocus=!1)}),null,16,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","link","placeholder"])]),l(" @slot Slot for attachment carousel "),h(a.$slots,"middle"),l(" Section for the bottom UI "),u("section",H,[l(" Left content "),u("div",J,[s(c,{placement:"top-start",message:i.imageTooltipLabel,offset:[-4,-4]},{anchor:r(()=>[s(f,{"data-qa":"dt-message-input-image-btn",size:"sm",circle:"",kind:n.imagePickerFocus?"default":"muted",importance:"clear","aria-label":i.imageButtonAriaLabel,onClick:o.onSelectImage,onMouseenter:e[3]||(e[3]=t=>n.imagePickerFocus=!0),onMouseleave:e[4]||(e[4]=t=>n.imagePickerFocus=!1),onFocusin:e[5]||(e[5]=t=>n.imagePickerFocus=!0),onFocusout:e[6]||(e[6]=t=>n.imagePickerFocus=!1)},{icon:r(()=>[s(m,{name:"image",size:"300"})]),_:1},8,["kind","aria-label","onClick"]),s(F,{ref:"messageInputImageUpload","data-qa":"dt-message-input-image-input",type:"file",class:"d-ps-absolute",multiple:"",hidden:"",onInput:o.onImageUpload},null,8,["onInput"])]),_:1},8,["message"]),s(T,{"data-qa":"dt-message-input-emoji-picker-popover",open:n.emojiPickerOpened,"initial-focus-element":"#searchInput",padding:"none",onOpened:e[12]||(e[12]=t=>{n.emojiPickerOpened=t})},{anchor:r(()=>[s(c,{message:i.emojiTooltipMessage,offset:[0,-4]},{anchor:r(()=>[s(f,{"data-qa":"dt-message-input-emoji-picker-btn",size:"sm",circle:"",kind:o.emojiPickerHovered?"default":"muted",importance:"clear","aria-label":i.emojiButtonAriaLabel,offset:[0,0],onClick:o.toggleEmojiPicker,onMouseenter:e[7]||(e[7]=t=>n.emojiPickerFocus=!0),onMouseleave:e[8]||(e[8]=t=>n.emojiPickerFocus=!1),onFocusin:e[9]||(e[9]=t=>n.emojiPickerFocus=!0),onFocusout:e[10]||(e[10]=t=>n.emojiPickerFocus=!1)},{icon:r(()=>[s(m,{name:o.emojiPickerHovered?"very-satisfied":"satisfied",size:"300"},null,8,["name"])]),_:1},8,["kind","aria-label","onClick"])]),_:1},8,["message"])]),content:r(()=>[s(D,{"tab-set-labels":i.emojiTabSetLabels,"skin-selector-button-tooltip-label":i.emojiSkinSelectorButtonTooltipLabel,"search-no-results-label":i.emojiSearchNoResultsLabel,"search-results-label":i.emojiSearchResultsLabel,"search-placeholder-label":i.emojiSearchPlaceholderLabel,"skin-tone":n.skinTone,onSkinTone:e[11]||(e[11]=t=>n.skinTone=t),onSelectedEmoji:o.onSelectEmoji},null,8,["tab-set-labels","skin-selector-button-tooltip-label","search-no-results-label","search-results-label","search-placeholder-label","skin-tone","onSelectedEmoji"])]),_:1},8,["open"])]),l(" Right content "),u("div",X,[l(" Optionally displayed remaining character counter "),o.displayCharacterLimitWarning?(p(),y(c,{key:0,enabled:i.characterLimitWarningMessage&&i.characterLimitCount-o.inputLength<0,placement:"top-end",message:i.characterLimitWarningMessage,offset:[10,-8]},{anchor:r(()=>[o.displayCharacterLimitWarning?(p(),v("p",Y,S(i.characterLimitCount-o.inputLength),1)):l("v-if",!0)]),_:1},8,["enabled","message"])):l("v-if",!0),s(c,{placement:"top-end",message:i.sendTooltipLabel,show:!o.isSendDisabled&&n.sendButtonFocus,offset:[6,-4]},{anchor:r(()=>[l(" Right positioned UI - send button "),s(f,{"data-qa":"dt-message-input-send-btn",size:"sm",kind:o.isSendDisabled?"muted":"default",circle:"",importance:"primary",class:g({"message-input-button__disabled d-fc-muted":o.isSendDisabled}),"aria-label":i.sendButtonAriaLabel,"aria-disabled":o.isSendDisabled,onClick:o.onSend,onMouseenter:e[13]||(e[13]=t=>n.sendButtonFocus=!0),onMouseleave:e[14]||(e[14]=t=>n.sendButtonFocus=!1),onFocusin:e[15]||(e[15]=t=>n.sendButtonFocus=!0),onFocusout:e[16]||(e[16]=t=>n.sendButtonFocus=!1)},{icon:r(()=>[s(m,{name:"send",size:"300"})]),_:1},8,["kind","class","aria-label","aria-disabled","onClick"])]),_:1},8,["message","show"])])])],34),u("section",G,[u("div",Q,[l(" @slot Slot for helper text. Who is typing can go here "),h(a.$slots,"footerLeft")]),u("div",Z,[l(" @slot helper text for the input. Shift + enter for new line "),h(a.$slots,"footerRight")])])])],64)}const de=U(k,[["render",$],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]]);k.__docgenInfo={displayName:"DtRecipeMessageInput",exportName:"default",description:"",tags:{},props:[{name:"modelValue",description:`Value of the input. The object format should match TipTap's JSON
document structure: https://tiptap.dev/guide/output#option-1-json`,type:{name:"object|string"},defaultValue:{func:!1,value:"''"}},{name:"editable",description:"Whether the input is editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"inputAriaLabel",description:"Descriptive label for the input element",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"''"}},{name:"inputClass",description:`Additional class name for the input element. Only accepts a String value
because this is passed to the editor via options. For multiple classes,
join them into one string, e.g. "d-p8 d-hmx96"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autoFocus",description:"Whether the input should receive focus after the component has been\nmounted. Either one of `start`, `end`, `all` or a Boolean or a Number.\n- `start`  Sets the focus to the beginning of the input\n- `end`    Sets the focus to the end of the input\n- `all`    Selects the whole contents of the input\n- `Number` Sets the focus to a specific position in the input\n- `true`   Defaults to `start`\n- `false`  Disables autofocus",tags:{},values:["true","false","start","end","all","number"],type:{name:"boolean|string|number"},defaultValue:{func:!1,value:"false"}},{name:"outputFormat",description:'The output format that the editor uses when emitting the "@input" event.\nOne of `text`, `json`, `html`. See https://tiptap.dev/guide/output for\nexamples.',tags:{},values:["text","json","html"],type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"link",description:"Enables the Link extension and optionally passes configurations to it",type:{name:"boolean|object"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder text",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disableSend",description:"Disable Send Button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCharacterLimit",description:"Enable character Limit warning",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"characterLimitCount",description:"Max number of characters allowed",type:{name:"number"},defaultValue:{func:!1,value:"1500"}},{name:"characterLimitWarning",description:"Number after which warning for max limit appears",type:{name:"number"},defaultValue:{func:!1,value:"500"}},{name:"characterLimitWarningMessage",description:"Character limit warning message",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showNotice",description:`Show error notice
This should be turned to false after notice-close event is fired.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noticeMessage",description:"message in the notice",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noticeKind",description:"kind of notice to manage color",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'error'"}},{name:"emojiTabSetLabels",description:"tab labels for emoji",type:{name:"array"},defaultValue:{func:!1,value:`[
  'Most recently used',
  'Smileys and people',
  'Nature',
  'Food',
  'Activity',
  'Travel',
  'Objects',
  'Symbols',
  'Flags',
]`}},{name:"emojiSkinSelectorButtonTooltipLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Change default skin tone'"}},{name:"emojiSearchNoResultsLabel",type:{name:"string"},defaultValue:{func:!1,value:"'No results'"}},{name:"emojiSearchResultsLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Search results'"}},{name:"emojiSearchPlaceholderLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Search...'"}},{name:"emojiTooltipMessage",description:"Emoji button tooltip label",type:{name:"string"},defaultValue:{func:!1,value:"'Emoji'"}},{name:"emojiButtonAriaLabel",description:"Emoji button aria label",type:{name:"string"},defaultValue:{func:!1,value:"'emoji button'"}},{name:"imageButtonAriaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'image button'"}},{name:"imageTooltipLabel",description:"Image button tooltip label",type:{name:"string"},defaultValue:{func:!1,value:"'Attach Image'"}},{name:"sendButtonAriaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'send button'"}},{name:"sendTooltipLabel",description:"Send button tooltip label",type:{name:"string"},defaultValue:{func:!1,value:"'Send'"}}],events:[{name:"submit",description:"Fires when send button is clicked",type:{names:["String"]}},{name:"select-media",description:"Fires when media is selected from image button",type:{names:["Array"]}},{name:"add-media",description:"Fires when media is dropped into the message input",type:{names:["Array"]}},{name:"notice-close",description:`Fires when notice is closed by user.
Listen to this event to toggle showNotice on usage.`,type:{names:["Boolean"]}}],slots:[{name:"middle",description:"Slot for attachment carousel"},{name:"footerLeft",description:"Slot for helper text. Who is typing can go here"},{name:"footerRight",description:"helper text for the input. Shift + enter for new line"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]};export{de as D};
//# sourceMappingURL=message_input-8ab03f86.js.map
