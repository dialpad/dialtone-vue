import{a as d}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as W}from"./storybook_utils-dy5aucTw.js";import{D as q,R as U,a as z}from"./rich_text_editor-eigi516g.js";import{D as H}from"./button-SQvTdlhI.js";import{D as K}from"./icon-34MKq-Bw.js";import{D as $}from"./DtEmojiPicker-4r9pny9-.js";import{D as J}from"./popover-0TVvrLDz.js";import{D as X}from"./input-9zFGHtLU.js";import{D as Y,N as w}from"./notice-iYSA52fg.js";import{D as G}from"./tooltip-wR99tpIh.js";import{s as c,k as g,b as y,w as r,p as j,f as s,e as l,l as Q,A as Z,u,m as F,g as C,F as V,o as m,x as k,y as S,H as ee,B as te}from"./vue.esm-bundler-PY0rQjII.js";import{_ as P}from"./_plugin-vue_export-helper-x3n3nnut.js";const E={name:"DtRecipeMessageInput",components:{DtButton:H,DtEmojiPicker:$,DtIcon:K,DtInput:X,DtNotice:Y,DtPopover:J,DtRichTextEditor:q,DtTooltip:G},mixins:[],inheritAttrs:!1,props:{modelValue:{type:[Object,String],default:""},editable:{type:Boolean,default:!0},inputAriaLabel:{type:String,required:!0,default:""},inputClass:{type:String,default:""},autoFocus:{type:[Boolean,String,Number],default:!1,validator(e){return typeof e=="string"?U.includes(e):!0}},outputFormat:{type:String,default:"text",validator(e){return z.includes(e)}},link:{type:[Boolean,Object],default:!1},placeholder:{type:String,default:""},disableSend:{type:Boolean,default:!1},hasCharacterLimit:{type:Boolean,default:!0},characterLimitCount:{type:Number,default:1500},characterLimitWarning:{type:Number,default:500},characterLimitWarningMessage:{type:String,default:""},showNotice:{type:Boolean,default:!1},noticeMessage:{type:String,default:""},noticeKind:{type:String,default:"error",validate(e){return w.includes(e)}},maxHeight:{type:String,default:"unset"},emojiPickerProps:{type:Object,default:()=>({searchNoResultsLabel:"No results",searchResultsLabel:"Search results",searchPlaceholderLabel:"Search...",skinSelectorButtonTooltipLabel:"Change default skin tone",tabSetLabels:["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],skinTone:"Default"}),validate(e){return["searchNoResultsLabel","searchResultsLabel","searchPlaceholderLabel","skinSelectorButtonTooltipLabel","tabSetLabels"].every(t=>e[t]!=null)}},emojiTooltipMessage:{type:String,default:"Emoji"},emojiButtonAriaLabel:{type:String,default:"emoji button"},imageButtonAriaLabel:{type:String,default:"image button"},imageTooltipLabel:{type:String,default:"Attach Image"},sendButtonAriaLabel:{type:String,default:"send button"},sendTooltipLabel:{type:String,default:"Send"},isEdit:{type:Boolean,default:!1},saveChangesButtonText:{type:String,default:"Save changes"},cancelButtonAriaLabel:{type:String,default:"Cancel button"},cancelButtonText:{type:String,default:"Cancel"}},emits:["submit","select-media","add-media","notice-close","cancel","skin-tone","selected-emoji"],data(){return{internalInputValue:this.modelValue,hasFocus:!1,imagePickerFocus:!1,emojiPickerFocus:!1,sendButtonFocus:!1,emojiPickerOpened:!1}},computed:{inputLength(){return this.internalInputValue.length},displayCharacterLimitWarning(){return this.hasCharacterLimit&&this.characterLimitCount-this.inputLength<=this.characterLimitWarning},isSendDisabled(){return this.inputLength===0||this.disableSend||this.hasCharacterLimit&&this.inputLength>this.characterLimitCount},computedCloseButtonProps(){return{ariaLabel:"Close"}},noticeClasses(){return["dt-message-input-notice","d-ps-relative","d-t8","d-bbr0","d-pt4","d-pb8","d-pr12","d-pl16","d-bs-none","d-fs-100","d-wmx-unset"]},emojiPickerHovered(){return this.emojiPickerFocus||this.emojiPickerOpened},sendButtonKind(){return this.isSendDisabled?"muted":"default"}},watch:{modelValue(e){this.internalInputValue=e}},methods:{onDrag(e){e.stopPropagation(),e.preventDefault()},onDrop(e){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer,L=Array.from(t.files).map(o=>o.name);this.$emit("add-media",L)},onSkinTone(e){this.$emit("skin-tone",e)},onSelectEmoji(e){if(!e){this.emojiPickerOpened=!1;return}this.$refs.richTextEditor.editor.commands.insertContent({type:"emoji",attrs:{code:e.shortname}}),this.emojiPickerOpened=!1,this.$emit("selected-emoji",e)},onSelectImage(){this.$refs.messageInputImageUpload.$refs.input.click()},onImageUpload(e){this.$emit("select-media",e)},toggleEmojiPicker(){this.emojiPickerOpened=!this.emojiPickerOpened},onSend(){this.isSendDisabled||this.$emit("submit",this.internalInputValue)},onCancel(){this.$emit("cancel")},noticeClose(){this.$emit("notice-close",!0)},focus(){this.$refs.richTextEditor.focusEditor(),this.hasFocus=!0}}},ae={class:"d-ps-relative d-bar8 d-bgc-white"},ne={class:"d-d-flex d-jc-space-between d-mx8 d-my4"},ie={class:"d-d-flex"},oe={class:"d-d-flex"},se={key:0,class:"d-fc-error d-mr16 d-as-center dt-message-input--remaining-char","data-qa":"dt-message-input-character-limit"},le={key:0},re={key:0,class:"d-d-flex d-jc-space-between d-h24 d-ai-center"},ue={"data-qa":"dt-message-input-footer-left"},de={"data-qa":"dt-message-input-footer-right"};function ce(e,t,a,L,o,n){const p=c("dt-icon"),f=c("dt-notice"),O=c("dt-rich-text-editor"),h=c("dt-button"),R=c("dt-input"),v=c("dt-tooltip"),_=c("dt-emoji-picker"),x=c("dt-popover");return m(),g(V,null,[a.showNotice?(m(),y(f,{key:0,"data-qa":"dt-message-input-error-notice",class:j(n.noticeClasses),kind:a.noticeKind,"close-button-props":n.computedCloseButtonProps,onClose:n.noticeClose},{icon:r(()=>[u(p,{size:"300",name:"alert-circle"})]),default:r(()=>[k(S(a.noticeMessage)+" ",1)]),_:1},8,["class","kind","close-button-props","onClose"])):s("v-if",!0),l("div",ae,[l("div",{"data-qa":"dt-message-input",role:"presentation",class:j(["d-d-flex d-fd-column d-bar8 d-baw1 d-ba d-c-text",{"d-bc-black-500 d-bs-sm":o.hasFocus,"d-bc-default":!o.hasFocus}]),onClick:t[16]||(t[16]=i=>e.$refs.richTextEditor.focusEditor()),onDragEnter:t[17]||(t[17]=(...i)=>n.onDrag&&n.onDrag(...i)),onDragOver:t[18]||(t[18]=(...i)=>n.onDrag&&n.onDrag(...i)),onDrop:t[19]||(t[19]=(...i)=>n.onDrop&&n.onDrop(...i)),onKeydown:t[20]||(t[20]=Q(ee((...i)=>n.onSend&&n.onSend(...i),["exact"]),["enter"])),onFocusin:t[21]||(t[21]=i=>o.hasFocus=!0),onFocusout:t[22]||(t[22]=i=>o.hasFocus=!1)},[s(" Some wrapper to restrict the height and show the scrollbar "),l("div",{class:"d-of-auto d-mx16 d-mt8 d-mb4",style:Z({"max-height":a.maxHeight})},[u(O,F({ref:"richTextEditor",modelValue:o.internalInputValue,"onUpdate:modelValue":t[0]||(t[0]=i=>o.internalInputValue=i),editable:a.editable,"input-aria-label":a.inputAriaLabel,"input-class":a.inputClass,"output-format":a.outputFormat,"auto-focus":a.autoFocus,link:a.link,placeholder:a.placeholder},e.$attrs,{onFocus:t[1]||(t[1]=i=>o.hasFocus=!0),onBlur:t[2]||(t[2]=i=>o.hasFocus=!1)}),null,16,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","link","placeholder"])],4),s(" @slot Slot for attachment carousel "),C(e.$slots,"middle"),s(" Section for the bottom UI "),l("section",ne,[s(" Left content "),l("div",ie,[a.isEdit?s("v-if",!0):(m(),y(v,{key:0,placement:"top-start",message:a.imageTooltipLabel,offset:[-4,-4]},{anchor:r(()=>[u(h,{"data-qa":"dt-message-input-image-btn",size:"sm",circle:"",kind:o.imagePickerFocus?"default":"muted",importance:"clear","aria-label":a.imageButtonAriaLabel,onClick:n.onSelectImage,onMouseenter:t[3]||(t[3]=i=>o.imagePickerFocus=!0),onMouseleave:t[4]||(t[4]=i=>o.imagePickerFocus=!1),onFocusin:t[5]||(t[5]=i=>o.imagePickerFocus=!0),onFocusout:t[6]||(t[6]=i=>o.imagePickerFocus=!1)},{icon:r(()=>[u(p,{name:"image",size:"300"})]),_:1},8,["kind","aria-label","onClick"]),u(R,{ref:"messageInputImageUpload","data-qa":"dt-message-input-image-input",type:"file",class:"d-ps-absolute",multiple:"",hidden:"",onInput:n.onImageUpload},null,8,["onInput"])]),_:1},8,["message"])),u(x,{"data-qa":"dt-message-input-emoji-picker-popover",open:o.emojiPickerOpened,"initial-focus-element":"#searchInput",padding:"none",onOpened:t[11]||(t[11]=i=>{o.emojiPickerOpened=i})},{anchor:r(()=>[u(v,{message:a.emojiTooltipMessage,offset:[0,-4]},{anchor:r(()=>[u(h,{"data-qa":"dt-message-input-emoji-picker-btn",size:"sm",circle:"",kind:n.emojiPickerHovered?"default":"muted",importance:"clear","aria-label":a.emojiButtonAriaLabel,offset:[0,0],onClick:n.toggleEmojiPicker,onMouseenter:t[7]||(t[7]=i=>o.emojiPickerFocus=!0),onMouseleave:t[8]||(t[8]=i=>o.emojiPickerFocus=!1),onFocusin:t[9]||(t[9]=i=>o.emojiPickerFocus=!0),onFocusout:t[10]||(t[10]=i=>o.emojiPickerFocus=!1)},{icon:r(()=>[u(p,{name:n.emojiPickerHovered?"very-satisfied":"satisfied",size:"300"},null,8,["name"])]),_:1},8,["kind","aria-label","onClick"])]),_:1},8,["message"])]),content:r(()=>[u(_,F(a.emojiPickerProps,{onSkinTone:n.onSkinTone,onSelectedEmoji:n.onSelectEmoji}),null,16,["onSkinTone","onSelectedEmoji"])]),_:1},8,["open"])]),s(" Right content "),l("div",oe,[s(" Optionally displayed remaining character counter "),n.displayCharacterLimitWarning?(m(),y(v,{key:0,enabled:a.characterLimitWarningMessage&&a.characterLimitCount-n.inputLength<0,placement:"top-end",message:a.characterLimitWarningMessage,offset:[10,-8]},{anchor:r(()=>[n.displayCharacterLimitWarning?(m(),g("p",se,S(a.characterLimitCount-n.inputLength),1)):s("v-if",!0)]),_:1},8,["enabled","message"])):s("v-if",!0),s(" Cancel button for edit mode "),a.isEdit?(m(),y(h,{key:1,"data-qa":"dt-message-input-cancel-button",class:"dt-message-input--cancel-button",size:"sm",kind:"muted",importance:"clear","aria-label":a.cancelButtonAriaLabel,onClick:n.onCancel},{default:r(()=>[l("p",null,S(a.cancelButtonText),1)]),_:1},8,["aria-label","onClick"])):s("v-if",!0),s(" Send button "),u(v,{placement:"top-end",enabled:!a.isEdit,message:a.sendTooltipLabel,show:!n.isSendDisabled&&o.sendButtonFocus,offset:[6,-8]},{anchor:r(()=>[s(" Right positioned UI - send button "),u(h,{"data-qa":"dt-message-input-send-btn",size:"sm",kind:n.sendButtonKind,circle:!a.isEdit,importance:"primary",class:j({"message-input-button__disabled d-fc-muted":n.isSendDisabled}),"aria-label":a.sendButtonAriaLabel,"aria-disabled":n.isSendDisabled,onClick:n.onSend,onMouseenter:t[12]||(t[12]=i=>o.sendButtonFocus=!0),onMouseleave:t[13]||(t[13]=i=>o.sendButtonFocus=!1),onFocusin:t[14]||(t[14]=i=>o.sendButtonFocus=!0),onFocusout:t[15]||(t[15]=i=>o.sendButtonFocus=!1)},te({default:r(()=>[a.isEdit?(m(),g("p",le,S(a.saveChangesButtonText),1)):s("v-if",!0)]),_:2},[a.isEdit?void 0:{name:"icon",fn:r(()=>[u(p,{name:"send",size:"300"})]),key:"0"}]),1032,["kind","circle","class","aria-label","aria-disabled","onClick"])]),_:1},8,["enabled","message","show"])])])],34),a.isEdit?s("v-if",!0):(m(),g("section",re,[l("div",ue,[s(" @slot Slot for helper text. Who is typing can go here "),C(e.$slots,"footerLeft")]),l("div",de,[s(" @slot helper text for the input. Shift + enter for new line "),C(e.$slots,"footerRight")])]))])],64)}const I=P(E,[["render",ce],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]]);E.__docgenInfo={displayName:"DtRecipeMessageInput",exportName:"default",description:"",tags:{},props:[{name:"modelValue",description:`Value of the input. The object format should match TipTap's JSON
document structure: https://tiptap.dev/guide/output#option-1-json`,type:{name:"object|string"},defaultValue:{func:!1,value:"''"}},{name:"editable",description:"Whether the input is editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"inputAriaLabel",description:"Descriptive label for the input element",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"''"}},{name:"inputClass",description:`Additional class name for the input element. Only accepts a String value
because this is passed to the editor via options. For multiple classes,
join them into one string, e.g. "d-p8 d-hmx96"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autoFocus",description:"Whether the input should receive focus after the component has been\nmounted. Either one of `start`, `end`, `all` or a Boolean or a Number.\n- `start`  Sets the focus to the beginning of the input\n- `end`    Sets the focus to the end of the input\n- `all`    Selects the whole contents of the input\n- `Number` Sets the focus to a specific position in the input\n- `true`   Defaults to `start`\n- `false`  Disables autofocus",tags:{},values:["true","false","start","end","all","number"],type:{name:"boolean|string|number"},defaultValue:{func:!1,value:"false"}},{name:"outputFormat",description:'The output format that the editor uses when emitting the "@input" event.\nOne of `text`, `json`, `html`. See https://tiptap.dev/guide/output for\nexamples.',tags:{},values:["text","json","html"],type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"link",description:"Enables the Link extension and optionally passes configurations to it",type:{name:"boolean|object"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder text",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disableSend",description:"Disable Send Button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCharacterLimit",description:"Enable character Limit warning",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"characterLimitCount",description:"Max number of characters allowed",type:{name:"number"},defaultValue:{func:!1,value:"1500"}},{name:"characterLimitWarning",description:"Number after which warning for max limit appears",type:{name:"number"},defaultValue:{func:!1,value:"500"}},{name:"characterLimitWarningMessage",description:"Character limit warning message",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showNotice",description:`Show error notice
This should be turned to false after notice-close event is fired.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noticeMessage",description:"message in the notice",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noticeKind",description:"kind of notice to manage color",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'error'"}},{name:"maxHeight",description:`Content area needs to dynamically adjust height based on the conversation area height.
can be vh|px|rem|em|%`,type:{name:"string"},defaultValue:{func:!1,value:"'unset'"}},{name:"emojiPickerProps",description:"Props to pass into the emoji picker.",type:{name:"object"},defaultValue:{func:!1,value:`{
  searchNoResultsLabel: 'No results',
  searchResultsLabel: 'Search results',
  searchPlaceholderLabel: 'Search...',
  skinSelectorButtonTooltipLabel: 'Change default skin tone',

  tabSetLabels: [
    'Most recently used',
    'Smileys and people',
    'Nature',
    'Food',
    'Activity',
    'Travel',
    'Objects',
    'Symbols',
    'Flags',
  ],

  // Optional props
  skinTone: 'Default'
}`}},{name:"emojiTooltipMessage",description:"Emoji button tooltip label",type:{name:"string"},defaultValue:{func:!1,value:"'Emoji'"}},{name:"emojiButtonAriaLabel",description:"Emoji button aria label",type:{name:"string"},defaultValue:{func:!1,value:"'emoji button'"}},{name:"imageButtonAriaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'image button'"}},{name:"imageTooltipLabel",description:"Image button tooltip label",type:{name:"string"},defaultValue:{func:!1,value:"'Attach Image'"}},{name:"sendButtonAriaLabel",type:{name:"string"},defaultValue:{func:!1,value:"'send button'"}},{name:"sendTooltipLabel",description:"Send button tooltip label",type:{name:"string"},defaultValue:{func:!1,value:"'Send'"}},{name:"isEdit",description:"isEdit",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"saveChangesButtonText",description:"i18n Save changes button text",type:{name:"string"},defaultValue:{func:!1,value:"'Save changes'"}},{name:"cancelButtonAriaLabel",description:"Cancel aria label",type:{name:"string"},defaultValue:{func:!1,value:"'Cancel button'"}},{name:"cancelButtonText",description:"Cancel button i18n text",type:{name:"string"},defaultValue:{func:!1,value:"'Cancel'"}}],events:[{name:"submit",description:"Fires when send button is clicked",type:{names:["String"]}},{name:"select-media",description:"Fires when media is selected from image button",type:{names:["Array"]}},{name:"add-media",description:"Fires when media is dropped into the message input",type:{names:["Array"]}},{name:"notice-close",description:`Fires when notice is closed by user.
Listen to this event to toggle showNotice on usage.`,type:{names:["Boolean"]}},{name:"cancel",description:"Fires when cancel button is pressed (only on edit mode)",type:{names:["Boolean"]}},{name:"skin-tone",description:"Fires when skin tone is selected from the emoji picker",type:{names:["String"]}},{name:"selected-emoji",description:"Fires when emoji is selected from the emoji picker",type:{names:["String"]}}],slots:[{name:"middle",description:"Slot for attachment carousel"},{name:"footerLeft",description:"Slot for helper text. Who is typing can go here"},{name:"footerRight",description:"helper text for the input. Shift + enter for new line"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]};const M={name:"DtRecipeMessageInputDefault",components:{DtRecipeMessageInput:I}},me={class:"d-h264"},pe=l("div",{class:"d-body-small d-fc-muted"},[l("b",null,"Dwight"),k(" is typing... ")],-1),fe=l("div",{class:"d-body-small d-fc-tertiary"},[l("b",null,"Shift"),k(" + "),l("b",null,"Return"),k(" to add a new line ")],-1);function ge(e,t,a,L,o,n){const p=c("dt-recipe-message-input");return m(),g(V,null,[l("div",me,[u(p,{ref:"input","show-notice":e.$attrs.showNotice,"onUpdate:showNotice":t[0]||(t[0]=f=>e.$attrs.showNotice=f),modelValue:e.$attrs.modelValue,"onUpdate:modelValue":t[1]||(t[1]=f=>e.$attrs.modelValue=f),"input-aria-label":e.$attrs.inputAriaLabel,"auto-focus":e.$attrs.autoFocus,editable:e.$attrs.editable,"input-class":e.$attrs.inputClass,link:e.$attrs.link,"output-format":e.$attrs.outputFormat,placeholder:e.$attrs.placeholder,"disable-send":e.$attrs.disableSend,"has-character-limit":e.$attrs.hasCharacterLimit,"character-limit-count":e.$attrs.characterLimitCount,"character-limit-warning":e.$attrs.characterLimitWarning,"character-limit-warning-message":e.$attrs.characterLimitWarningMessage,"notice-kind":e.$attrs.noticeKind,"notice-message":e.$attrs.noticeMessage,"send-button-aria-label":e.$attrs.sendButtonAriaLabel,"send-tooltip-label":e.$attrs.sendTooltipLabel,"emoji-picker-props":e.$attrs.emojiPickerProps,"emoji-button-aria-label":e.$attrs.emojiButtonAriaLabel,"image-button-aria-label":e.$attrs.imageButtonAriaLabel,"max-height":e.$attrs.maxHeight,"is-edit":e.$attrs.isEdit,"save-changes-button-text":e.$attrs.saveChangesButtonText,"cancel-button-aria-label":e.$attrs.cancelButtonAriaLabel,"cancel-button-text":e.$attrs.cancelButtonText,onSubmit:e.$attrs.onSubmit,onFocus:e.$attrs.onFocus,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput,onSelectMedia:e.$attrs.onSelectMedia,onSelectedEmoji:e.$attrs.onSelectedEmoji,onSkinTone:e.$attrs.onSkinTone,onAddMedia:e.$attrs.onAddMedia,onNoticeClose:e.$attrs.onNoticeClose,onCancel:e.$attrs.onCancel},{footerLeft:r(()=>[pe]),footerRight:r(()=>[fe]),_:1},8,["show-notice","modelValue","input-aria-label","auto-focus","editable","input-class","link","output-format","placeholder","disable-send","has-character-limit","character-limit-count","character-limit-warning","character-limit-warning-message","notice-kind","notice-message","send-button-aria-label","send-tooltip-label","emoji-picker-props","emoji-button-aria-label","image-button-aria-label","max-height","is-edit","save-changes-button-text","cancel-button-aria-label","cancel-button-text","onSubmit","onFocus","onBlur","onInput","onSelectMedia","onSelectedEmoji","onSkinTone","onAddMedia","onNoticeClose","onCancel"])]),l("button",{onClick:t[2]||(t[2]=f=>e.$refs.input.focus())}," focus test ")],64)}const be=P(M,[["render",ge],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]]);M.__docgenInfo={displayName:"DtRecipeMessageInputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]};const N={noticeKind:{options:w,control:{type:"select"}},onSubmit:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onAddMedia:{table:{disable:!0}},onNoticeClose:{table:{disable:!0}},onSelectMedia:{table:{disable:!0}},onSelectedEmoji:{table:{disable:!0}},onCancel:{table:{disable:!0}},onSkinTone:{table:{disable:!0}}},A={modelValue:"Always the Padawan, never the Jedi.",placeholder:"New message",inputAriaLabel:"Input text field",noticeMessage:"Files must be less than 32 MB to be sent as Dialpad messages.",maxHeight:"40vh",characterLimitWarningMessage:"You have reached the character limit.",isEdit:!1,onSubmit:d("submit"),onFocus:d("focus"),onBlur:d("blur"),onInput:d("input"),onSelectMedia:d("select-media"),onSelectedEmoji:d("selected-emoji"),onAddMedia:d("add-media"),onNoticeClose:d("notice-close"),onSkinTone:d("skin-tone"),onCancel:d("cancel")},he={title:"Recipes/Conversation View/Message Input",component:I,args:A,argTypes:N,excludeStories:/.*Data$/},ve=(e,{argTypes:t})=>W(e,t,be),b={render:ve,args:{}};var D,T,B;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(B=(T=b.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const ye=["argTypesData","argsData","Default"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Default:b,__namedExportsOrder:ye,argTypesData:N,argsData:A,default:he},Symbol.toStringTag,{value:"Module"}));export{Ee as D,b as a};
//# sourceMappingURL=message_input.stories-Tf2svvMo.js.map
