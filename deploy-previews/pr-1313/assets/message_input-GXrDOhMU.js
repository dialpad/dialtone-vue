import{D as V,R as B,a as D}from"./rich_text_editor-R7VpNMtH.js";import{D as x}from"./button-tKM9hhaC.js";import{D as w}from"./icon-oxX7Udv7.js";import{D as E}from"./DtEmojiPicker-sgadrPTj.js";import{D as P}from"./popover-RNL6kVCn.js";import{D as I}from"./input-jm-Ig4cP.js";import{c as _,N}from"./notice-K88yuljk.js";import{D as A}from"./tooltip-6uLl2N4G.js";import{s as d,k as g,b as h,w as l,p as y,f as s,e as u,l as O,B as M,u as r,m as R,g as v,F as W,o as c,x as q,y as b,H as U,C as z}from"./vue.esm-bundler-pH9C34oL.js";import{_ as H}from"./_plugin-vue_export-helper-x3n3nnut.js";const k={name:"DtRecipeMessageInput",components:{DtButton:x,DtEmojiPicker:E,DtIcon:w,DtInput:I,DtNotice:_,DtPopover:P,DtRichTextEditor:V,DtTooltip:A},mixins:[],inheritAttrs:!1,props:{modelValue:{type:[Object,String],default:""},editable:{type:Boolean,default:!0},inputAriaLabel:{type:String,required:!0,default:""},inputClass:{type:String,default:""},autoFocus:{type:[Boolean,String,Number],default:!1,validator(n){return typeof n=="string"?B.includes(n):!0}},outputFormat:{type:String,default:"text",validator(n){return D.includes(n)}},link:{type:[Boolean,Object],default:!1},placeholder:{type:String,default:""},disableSend:{type:Boolean,default:!1},hasCharacterLimit:{type:Boolean,default:!0},characterLimitCount:{type:Number,default:1500},characterLimitWarning:{type:Number,default:500},characterLimitWarningMessage:{type:String,default:""},showNotice:{type:Boolean,default:!1},noticeMessage:{type:String,default:""},noticeKind:{type:String,default:"error",validate(n){return N.includes(n)}},maxHeight:{type:String,default:"unset"},emojiTabSetLabels:{type:Array,default:()=>["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"]},emojiSkinSelectorButtonTooltipLabel:{type:String,default:"Change default skin tone"},emojiSearchNoResultsLabel:{type:String,default:"No results"},emojiSearchResultsLabel:{type:String,default:"Search results"},emojiSearchPlaceholderLabel:{type:String,default:"Search..."},emojiTooltipMessage:{type:String,default:"Emoji"},emojiButtonAriaLabel:{type:String,default:"emoji button"},imageButtonAriaLabel:{type:String,default:"image button"},imageTooltipLabel:{type:String,default:"Attach Image"},sendButtonAriaLabel:{type:String,default:"send button"},sendTooltipLabel:{type:String,default:"Send"},isEdit:{type:Boolean,default:!1},saveChangesButtonText:{type:String,default:"Save changes"},cancelButtonAriaLabel:{type:String,default:"Cancel button"},cancelButtonText:{type:String,default:"Cancel"},skinTone:{type:String,default:"Default"}},emits:["submit","select-media","add-media","notice-close","cancel","skin-tone"],data(){return{internalInputValue:this.modelValue,hasFocus:!1,imagePickerFocus:!1,emojiPickerFocus:!1,sendButtonFocus:!1,emojiPickerOpened:!1}},computed:{inputLength(){return this.internalInputValue.length},displayCharacterLimitWarning(){return this.hasCharacterLimit&&this.characterLimitCount-this.inputLength<=this.characterLimitWarning},isSendDisabled(){return this.inputLength===0||this.disableSend||this.hasCharacterLimit&&this.inputLength>this.characterLimitCount},computedCloseButtonProps(){return{ariaLabel:"Close"}},noticeClasses(){return["dt-message-input-notice","d-ps-relative","d-t8","d-bbr0","d-pt4","d-pb8","d-pr12","d-pl16","d-bs-none","d-fs-100","d-wmx-unset"]},emojiPickerHovered(){return this.emojiPickerFocus||this.emojiPickerOpened},sendButtonKind(){return this.isSendDisabled?"muted":"default"}},watch:{modelValue(n){this.internalInputValue=n}},methods:{onDrag(n){n.stopPropagation(),n.preventDefault()},onDrop(n){n.stopPropagation(),n.preventDefault();const e=n.dataTransfer,S=Array.from(e.files).map(o=>o.name);this.$emit("add-media",S)},onSkinTone(n){this.$emit("skin-tone",n)},onSelectEmoji(n){if(!n){this.emojiPickerOpened=!1;return}this.$refs.richTextEditor.editor.commands.insertContent({type:"emoji",attrs:{code:n.shortname}}),this.emojiPickerOpened=!1},onSelectImage(){this.$refs.messageInputImageUpload.$refs.input.click()},onImageUpload(n){this.$emit("select-media",n)},toggleEmojiPicker(){this.emojiPickerOpened=!this.emojiPickerOpened},onSend(){this.isSendDisabled||this.$emit("submit",this.internalInputValue)},onCancel(){this.$emit("cancel")},noticeClose(){this.$emit("notice-close",!0)},focus(){this.$refs.richTextEditor.focusEditor(),this.hasFocus=!0}}},K={class:"d-ps-relative d-bar8 d-bgc-white"},X={class:"d-d-flex d-jc-space-between d-mx8 d-my4"},J={class:"d-d-flex"},Y={class:"d-d-flex"},G={key:0,class:"d-fc-error d-mr16 d-as-center dt-message-input--remaining-char","data-qa":"dt-message-input-character-limit"},Q={key:0},Z={key:0,class:"d-d-flex d-jc-space-between d-h24 d-ai-center"},$={"data-qa":"dt-message-input-footer-left"},ee={"data-qa":"dt-message-input-footer-right"};function te(n,e,t,S,o,a){const m=d("dt-icon"),j=d("dt-notice"),L=d("dt-rich-text-editor"),f=d("dt-button"),C=d("dt-input"),p=d("dt-tooltip"),F=d("dt-emoji-picker"),T=d("dt-popover");return c(),g(W,null,[t.showNotice?(c(),h(j,{key:0,"data-qa":"dt-message-input-error-notice",class:y(a.noticeClasses),kind:t.noticeKind,"close-button-props":a.computedCloseButtonProps,onClose:a.noticeClose},{icon:l(()=>[r(m,{size:"300",name:"alert-circle"})]),default:l(()=>[q(b(t.noticeMessage)+" ",1)]),_:1},8,["class","kind","close-button-props","onClose"])):s("v-if",!0),u("div",K,[u("div",{"data-qa":"dt-message-input",role:"presentation",class:y(["d-d-flex d-fd-column d-bar8 d-baw1 d-ba d-c-text",{"d-bc-black-500 d-bs-sm":o.hasFocus,"d-bc-default":!o.hasFocus}]),onClick:e[16]||(e[16]=i=>n.$refs.richTextEditor.focusEditor()),onDragEnter:e[17]||(e[17]=(...i)=>a.onDrag&&a.onDrag(...i)),onDragOver:e[18]||(e[18]=(...i)=>a.onDrag&&a.onDrag(...i)),onDrop:e[19]||(e[19]=(...i)=>a.onDrop&&a.onDrop(...i)),onKeydown:e[20]||(e[20]=O(U((...i)=>a.onSend&&a.onSend(...i),["exact"]),["enter"])),onFocusin:e[21]||(e[21]=i=>o.hasFocus=!0),onFocusout:e[22]||(e[22]=i=>o.hasFocus=!1)},[s(" Some wrapper to restrict the height and show the scrollbar "),u("div",{class:"d-of-auto d-mx16 d-mt8 d-mb4",style:M({"max-height":t.maxHeight})},[r(L,R({ref:"richTextEditor",modelValue:o.internalInputValue,"onUpdate:modelValue":e[0]||(e[0]=i=>o.internalInputValue=i),editable:t.editable,"input-aria-label":t.inputAriaLabel,"input-class":t.inputClass,"output-format":t.outputFormat,"auto-focus":t.autoFocus,link:t.link,placeholder:t.placeholder},n.$attrs,{onFocus:e[1]||(e[1]=i=>o.hasFocus=!0),onBlur:e[2]||(e[2]=i=>o.hasFocus=!1)}),null,16,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","link","placeholder"])],4),s(" @slot Slot for attachment carousel "),v(n.$slots,"middle"),s(" Section for the bottom UI "),u("section",X,[s(" Left content "),u("div",J,[t.isEdit?s("v-if",!0):(c(),h(p,{key:0,placement:"top-start",message:t.imageTooltipLabel,offset:[-4,-4]},{anchor:l(()=>[r(f,{"data-qa":"dt-message-input-image-btn",size:"sm",circle:"",kind:o.imagePickerFocus?"default":"muted",importance:"clear","aria-label":t.imageButtonAriaLabel,onClick:a.onSelectImage,onMouseenter:e[3]||(e[3]=i=>o.imagePickerFocus=!0),onMouseleave:e[4]||(e[4]=i=>o.imagePickerFocus=!1),onFocusin:e[5]||(e[5]=i=>o.imagePickerFocus=!0),onFocusout:e[6]||(e[6]=i=>o.imagePickerFocus=!1)},{icon:l(()=>[r(m,{name:"image",size:"300"})]),_:1},8,["kind","aria-label","onClick"]),r(C,{ref:"messageInputImageUpload","data-qa":"dt-message-input-image-input",type:"file",class:"d-ps-absolute",multiple:"",hidden:"",onInput:a.onImageUpload},null,8,["onInput"])]),_:1},8,["message"])),r(T,{"data-qa":"dt-message-input-emoji-picker-popover",open:o.emojiPickerOpened,"initial-focus-element":"#searchInput",padding:"none",onOpened:e[11]||(e[11]=i=>{o.emojiPickerOpened=i})},{anchor:l(()=>[r(p,{message:t.emojiTooltipMessage,offset:[0,-4]},{anchor:l(()=>[r(f,{"data-qa":"dt-message-input-emoji-picker-btn",size:"sm",circle:"",kind:a.emojiPickerHovered?"default":"muted",importance:"clear","aria-label":t.emojiButtonAriaLabel,offset:[0,0],onClick:a.toggleEmojiPicker,onMouseenter:e[7]||(e[7]=i=>o.emojiPickerFocus=!0),onMouseleave:e[8]||(e[8]=i=>o.emojiPickerFocus=!1),onFocusin:e[9]||(e[9]=i=>o.emojiPickerFocus=!0),onFocusout:e[10]||(e[10]=i=>o.emojiPickerFocus=!1)},{icon:l(()=>[r(m,{name:a.emojiPickerHovered?"very-satisfied":"satisfied",size:"300"},null,8,["name"])]),_:1},8,["kind","aria-label","onClick"])]),_:1},8,["message"])]),content:l(()=>[r(F,{"tab-set-labels":t.emojiTabSetLabels,"skin-selector-button-tooltip-label":t.emojiSkinSelectorButtonTooltipLabel,"search-no-results-label":t.emojiSearchNoResultsLabel,"search-results-label":t.emojiSearchResultsLabel,"search-placeholder-label":t.emojiSearchPlaceholderLabel,"skin-tone":t.skinTone,onSkinTone:a.onSkinTone,onSelectedEmoji:a.onSelectEmoji},null,8,["tab-set-labels","skin-selector-button-tooltip-label","search-no-results-label","search-results-label","search-placeholder-label","skin-tone","onSkinTone","onSelectedEmoji"])]),_:1},8,["open"])]),s(" Right content "),u("div",Y,[s(" Optionally displayed remaining character counter "),a.displayCharacterLimitWarning?(c(),h(p,{key:0,enabled:t.characterLimitWarningMessage&&t.characterLimitCount-a.inputLength<0,placement:"top-end",message:t.characterLimitWarningMessage,offset:[10,-8]},{anchor:l(()=>[a.displayCharacterLimitWarning?(c(),g("p",G,b(t.characterLimitCount-a.inputLength),1)):s("v-if",!0)]),_:1},8,["enabled","message"])):s("v-if",!0),s(" Cancel button for edit mode "),t.isEdit?(c(),h(f,{key:1,"data-qa":"dt-message-input-cancel-button",class:"dt-message-input--cancel-button",size:"sm",kind:"muted",importance:"clear","aria-label":t.cancelButtonAriaLabel,onClick:a.onCancel},{default:l(()=>[u("p",null,b(t.cancelButtonText),1)]),_:1},8,["aria-label","onClick"])):s("v-if",!0),s(" Send button "),r(p,{placement:"top-end",enabled:!t.isEdit,message:t.sendTooltipLabel,show:!a.isSendDisabled&&o.sendButtonFocus,offset:[6,-8]},{anchor:l(()=>[s(" Right positioned UI - send button "),r(f,{"data-qa":"dt-message-input-send-btn",size:"sm",kind:a.sendButtonKind,circle:!t.isEdit,importance:"primary",class:y({"message-input-button__disabled d-fc-muted":a.isSendDisabled}),"aria-label":t.sendButtonAriaLabel,"aria-disabled":a.isSendDisabled,onClick:a.onSend,onMouseenter:e[12]||(e[12]=i=>o.sendButtonFocus=!0),onMouseleave:e[13]||(e[13]=i=>o.sendButtonFocus=!1),onFocusin:e[14]||(e[14]=i=>o.sendButtonFocus=!0),onFocusout:e[15]||(e[15]=i=>o.sendButtonFocus=!1)},z({default:l(()=>[t.isEdit?(c(),g("p",Q,b(t.saveChangesButtonText),1)):s("v-if",!0)]),_:2},[t.isEdit?void 0:{name:"icon",fn:l(()=>[r(m,{name:"send",size:"300"})]),key:"0"}]),1032,["kind","circle","class","aria-label","aria-disabled","onClick"])]),_:1},8,["enabled","message","show"])])])],34),t.isEdit?s("v-if",!0):(c(),g("section",Z,[u("div",$,[s(" @slot Slot for helper text. Who is typing can go here "),v(n.$slots,"footerLeft")]),u("div",ee,[s(" @slot helper text for the input. Shift + enter for new line "),v(n.$slots,"footerRight")])]))])],64)}const me=H(k,[["render",te],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]]);k.__docgenInfo={displayName:"DtRecipeMessageInput",exportName:"default",description:"",tags:{},props:[{name:"modelValue",description:`Value of the input. The object format should match TipTap's JSON
document structure: https://tiptap.dev/guide/output#option-1-json`,type:{name:"object|string"},defaultValue:{func:!1,value:"''"}},{name:"editable",description:"Whether the input is editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"inputAriaLabel",description:"Descriptive label for the input element",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"''"}},{name:"inputClass",description:`Additional class name for the input element. Only accepts a String value
because this is passed to the editor via options. For multiple classes,
join them into one string, e.g. "d-p8 d-hmx96"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autoFocus",description:"Whether the input should receive focus after the component has been\nmounted. Either one of `start`, `end`, `all` or a Boolean or a Number.\n- `start`  Sets the focus to the beginning of the input\n- `end`    Sets the focus to the end of the input\n- `all`    Selects the whole contents of the input\n- `Number` Sets the focus to a specific position in the input\n- `true`   Defaults to `start`\n- `false`  Disables autofocus",tags:{},values:["true","false","start","end","all","number"],type:{name:"boolean|string|number"},defaultValue:{func:!1,value:"false"}},{name:"outputFormat",description:'The output format that the editor uses when emitting the "@input" event.\nOne of `text`, `json`, `html`. See https://tiptap.dev/guide/output for\nexamples.',tags:{},values:["text","json","html"],type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"link",description:"Enables the Link extension and optionally passes configurations to it",type:{name:"boolean|object"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder text",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disableSend",description:"Disable Send Button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCharacterLimit",description:"Enable character Limit warning",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"characterLimitCount",description:"Max number of characters allowed",type:{name:"number"},defaultValue:{func:!1,value:"1500"}},{name:"characterLimitWarning",description:"Number after which warning for max limit appears",type:{name:"number"},defaultValue:{func:!1,value:"500"}},{name:"characterLimitWarningMessage",description:"Character limit warning message",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showNotice",description:`Show error notice
This should be turned to false after notice-close event is fired.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noticeMessage",description:"message in the notice",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noticeKind",description:"kind of notice to manage color",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'error'"}},{name:"maxHeight",description:`Content area needs to dynamically adjust height based on the conversation area height.
can be vh|px|rem|em|%`,type:{name:"string"},defaultValue:{func:!1,value:"'unset'"}},{name:"emojiTabSetLabels",description:"tab labels for emoji",type:{name:"array"},defaultValue:{func:!1,value:`[
  'Most recently used',
  'Smileys and people',
  'Nature',
  'Food',
  'Activity',
  'Travel',
  'Objects',
  'Symbols',
  'Flags',
]`}},{name:"emojiSkinSelectorButtonTooltipLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Change default skin tone'"}},{name:"emojiSearchNoResultsLabel",type:{name:"string"},defaultValue:{func:!1,value:"'No results'"}},{name:"emojiSearchResultsLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Search results'"}},{name:"emojiSearchPlaceholderLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Search...'"}},{name:"emojiTooltipMessage",description:"Emoji button tooltip label",type:{name:"string"},defaultValue:{func:!1,value:"'Emoji'"}},{name:"emojiButtonAriaLabel",description:"Emoji button aria label",type:{name:"string"},defaultValue:{func:!1,value:"'emoji button'"}},{name:"imageButtonAriaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'image button'"}},{name:"imageTooltipLabel",description:"Image button tooltip label",type:{name:"string"},defaultValue:{func:!1,value:"'Attach Image'"}},{name:"sendButtonAriaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'send button'"}},{name:"sendTooltipLabel",description:"Send button tooltip label",type:{name:"string"},defaultValue:{func:!1,value:"'Send'"}},{name:"isEdit",description:"isEdit",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"saveChangesButtonText",description:"i18n Save changes button text",type:{name:"string"},defaultValue:{func:!1,value:"'Save changes'"}},{name:"cancelButtonAriaLabel",description:"Cancel aria label",type:{name:"string"},defaultValue:{func:!1,value:"'Cancel button'"}},{name:"cancelButtonText",description:"Cancel button i18n text",type:{name:"string"},defaultValue:{func:!1,value:"'Cancel'"}},{name:"skinTone",description:"Skin tone to display in the emoji picker",type:{name:"string"},defaultValue:{func:!1,value:"'Default'"}}],events:[{name:"submit",description:"Fires when send button is clicked",type:{names:["String"]}},{name:"select-media",description:"Fires when media is selected from image button",type:{names:["Array"]}},{name:"add-media",description:"Fires when media is dropped into the message input",type:{names:["Array"]}},{name:"notice-close",description:`Fires when notice is closed by user.
Listen to this event to toggle showNotice on usage.`,type:{names:["Boolean"]}},{name:"cancel",description:"Fires when cancel button is pressed (only on edit mode)",type:{names:["Boolean"]}},{name:"skin-tone",description:"Fires when skin tone is selected from the emoji picker",type:{names:["String"]}}],slots:[{name:"middle",description:"Slot for attachment carousel"},{name:"footerLeft",description:"Slot for helper text. Who is typing can go here"},{name:"footerRight",description:"helper text for the input. Shift + enter for new line"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]};export{me as D};
//# sourceMappingURL=message_input-GXrDOhMU.js.map
