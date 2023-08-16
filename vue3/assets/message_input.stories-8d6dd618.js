import{a as d}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as O}from"./storybook_utils-b0336152.js";import{D as R,R as q,a as U}from"./rich_text_editor-4326ecd8.js";import{D as z}from"./button-f19eb3b6.js";import{D as W}from"./icon-136e453c.js";import{k as u,d as j,v as K,m as r,n as v,j as k,e as l,y as x,l as i,p as H,x as y,t as L,F as J,o as f,q as b,J as X}from"./vue.esm-bundler-06a6c133.js";import{D as $}from"./DtEmojiPicker-c976e58c.js";import{D as Y}from"./popover-1140082f.js";import{D as G}from"./input-4eac5efa.js";import{c as Q,N as V}from"./notice-a00396ba.js";import{D as Z}from"./tooltip-0441046b.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const w={name:"DtRecipeMessageInput",components:{DtButton:z,DtEmojiPicker:$,DtIcon:W,DtInput:G,DtNotice:Q,DtPopover:Y,DtRichTextEditor:R,DtTooltip:Z},mixins:[],inheritAttrs:!1,props:{modelValue:{type:[Object,String],default:""},editable:{type:Boolean,default:!0},inputAriaLabel:{type:String,required:!0,default:""},inputClass:{type:String,default:""},autoFocus:{type:[Boolean,String,Number],default:!1,validator(e){return typeof e=="string"?q.includes(e):!0}},outputFormat:{type:String,default:"text",validator(e){return U.includes(e)}},link:{type:[Boolean,Object],default:!1},placeholder:{type:String,default:""},disableSend:{type:Boolean,default:!1},hasCharacterLimit:{type:Boolean,default:!0},characterLimitCount:{type:Number,default:1500},characterLimitWarning:{type:Number,default:500},showNotice:{type:Boolean,default:!1},noticeMessage:{type:String,default:""},noticeKind:{type:String,default:"error",validate(e){return V.includes(e)}},emojiTabSetLabels:{type:Array,default:()=>["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"]},emojiSkinSelectorButtonTooltipLabel:{type:String,default:"Change default skin tone"},emojiSearchNoResultsLabel:{type:String,default:"No results"},emojiSearchResultsLabel:{type:String,default:"Search results"},emojiSearchPlaceholderLabel:{type:String,default:"Search..."},emojiTooltipMessage:{type:String,default:"Emoji"},emojiButtonAriaLabel:{type:String,default:"emoji button"},imageButtonAriaLabel:{type:String,default:"image button"},imageTooltipLabel:{type:String,default:"Attach Image"},sendButtonAriaLabel:{type:String,default:"send button"},sendTooltipLabel:{type:String,default:"Send"}},emits:["submit","select-media","add-media","notice-close"],data(){return{skinTone:"Default",internalInputValue:this.modelValue,hasFocus:!1,imagePickerFocus:!1,emojiPickerFocus:!1,sendButtonFocus:!1,emojiPickerOpened:!1}},computed:{inputLength(){return this.internalInputValue.length},displayCharacterLimitWarning(){return this.hasCharacterLimit&&this.characterLimitCount-this.inputLength<=this.characterLimitWarning},isSendDisabled(){return this.inputLength===0||this.disableSend||this.hasCharacterLimit&&this.inputLength>this.characterLimitCount},computedCloseButtonProps(){return{ariaLabel:"Close"}},noticeClasses(){return["dt-message-input-notice","d-ps-relative","d-t8","d-bbr0","d-pt4","d-pb8","d-pr12","d-pl16","d-bs-none","d-fs-100","d-wmx-unset"]},emojiPickerHovered(){return this.emojiPickerFocus||this.emojiPickerOpened}},watch:{modelValue(e){this.internalInputValue=e}},methods:{onDrag(e){e.stopPropagation(),e.preventDefault()},onDrop(e){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer,g=Array.from(t.files).map(n=>n.name);this.$emit("add-media",g)},onSelectEmoji(e){if(!e){this.emojiPickerOpened=!1;return}this.internalInputValue=this.internalInputValue+e.shortname,this.emojiPickerOpened=!1},onSelectImage(){this.$refs.messageInputImageUpload.$refs.input.click()},onImageUpload(e){this.$emit("select-media",e)},toggleEmojiPicker(){this.emojiPickerOpened=!this.emojiPickerOpened},onSend(){this.isSendDisabled||this.$emit("submit",this.internalInputValue)},noticeClose(){this.$emit("notice-close",!0)}}},ee={class:"d-ps-relative d-bar8 d-bgc-white"},te={class:"d-of-auto d-mx16 d-mt8 d-mb4 d-hmx40p"},ae={class:"d-d-flex d-jc-space-between d-mx8 d-my4"},ne={class:"d-d-flex"},oe={class:"d-d-flex"},se={key:0,class:"d-fc-error d-mr16 d-as-center dt-message-input--remaining-char","data-qa":"dt-message-input-character-limit"},ie={class:"d-d-flex d-jc-space-between d-h24 d-ai-center"},le={"data-qa":"dt-message-input-footer-left"},re={"data-qa":"dt-message-input-footer-right"};function ue(e,t,s,g,n,o){const m=u("dt-icon"),c=u("dt-notice"),M=u("dt-rich-text-editor"),h=u("dt-button"),A=u("dt-input"),S=u("dt-tooltip"),_=u("dt-emoji-picker"),E=u("dt-popover");return f(),j(J,null,[s.showNotice?(f(),K(c,{key:0,"data-qa":"dt-message-input-error-notice",class:v(o.noticeClasses),kind:s.noticeKind,"close-button-props":o.computedCloseButtonProps,onClose:o.noticeClose},{icon:r(()=>[i(m,{size:"300",name:"alert-circle"})]),default:r(()=>[b(L(s.noticeMessage)+" ",1)]),_:1},8,["class","kind","close-button-props","onClose"])):k("",!0),l("div",ee,[l("div",{"data-qa":"dt-message-input",role:"presentation",class:v(["d-d-flex d-fd-column d-bar8 d-baw1 d-ba d-c-text",{"d-bc-black-500 d-bs-sm":n.hasFocus,"d-bc-default":!n.hasFocus}]),onClick:t[17]||(t[17]=a=>e.$refs.richTextEditor.focusEditor()),onDragEnter:t[18]||(t[18]=(...a)=>o.onDrag&&o.onDrag(...a)),onDragOver:t[19]||(t[19]=(...a)=>o.onDrag&&o.onDrag(...a)),onDrop:t[20]||(t[20]=(...a)=>o.onDrop&&o.onDrop(...a)),onKeydown:t[21]||(t[21]=x(X((...a)=>o.onSend&&o.onSend(...a),["exact"]),["enter"])),onFocusin:t[22]||(t[22]=a=>n.hasFocus=!0),onFocusout:t[23]||(t[23]=a=>n.hasFocus=!1)},[l("div",te,[i(M,H({ref:"richTextEditor",modelValue:n.internalInputValue,"onUpdate:modelValue":t[0]||(t[0]=a=>n.internalInputValue=a),editable:s.editable,"input-aria-label":s.inputAriaLabel,"input-class":s.inputClass,"output-format":s.outputFormat,"auto-focus":s.autoFocus,link:s.link,placeholder:s.placeholder},e.$attrs,{onFocus:t[1]||(t[1]=a=>n.hasFocus=!0),onBlur:t[2]||(t[2]=a=>n.hasFocus=!1)}),null,16,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","link","placeholder"])]),y(e.$slots,"middle"),l("section",ae,[l("div",ne,[i(S,{placement:"top-start",message:s.imageTooltipLabel,offset:[-4,-4]},{anchor:r(()=>[i(h,{"data-qa":"dt-message-input-image-btn",size:"sm",circle:"",kind:n.imagePickerFocus?"default":"muted",importance:"clear","aria-label":s.imageButtonAriaLabel,onClick:o.onSelectImage,onMouseenter:t[3]||(t[3]=a=>n.imagePickerFocus=!0),onMouseleave:t[4]||(t[4]=a=>n.imagePickerFocus=!1),onFocusin:t[5]||(t[5]=a=>n.imagePickerFocus=!0),onFocusout:t[6]||(t[6]=a=>n.imagePickerFocus=!1)},{icon:r(()=>[i(m,{name:"image",size:"300"})]),_:1},8,["kind","aria-label","onClick"]),i(A,{ref:"messageInputImageUpload","data-qa":"dt-message-input-image-input",type:"file",class:"d-ps-absolute",multiple:"",hidden:"",onInput:o.onImageUpload},null,8,["onInput"])]),_:1},8,["message"]),i(E,{"data-qa":"dt-message-input-emoji-picker-popover",open:n.emojiPickerOpened,"initial-focus-element":"#searchInput",padding:"none",onOpened:t[12]||(t[12]=a=>{n.emojiPickerOpened=a})},{anchor:r(()=>[i(S,{message:s.emojiTooltipMessage,offset:[0,-4]},{anchor:r(()=>[i(h,{"data-qa":"dt-message-input-emoji-picker-btn",size:"sm",circle:"",kind:o.emojiPickerHovered?"default":"muted",importance:"clear","aria-label":s.emojiButtonAriaLabel,offset:[0,0],onClick:o.toggleEmojiPicker,onMouseenter:t[7]||(t[7]=a=>n.emojiPickerFocus=!0),onMouseleave:t[8]||(t[8]=a=>n.emojiPickerFocus=!1),onFocusin:t[9]||(t[9]=a=>n.emojiPickerFocus=!0),onFocusout:t[10]||(t[10]=a=>n.emojiPickerFocus=!1)},{icon:r(()=>[i(m,{name:o.emojiPickerHovered?"very-satisfied":"satisfied",size:"300"},null,8,["name"])]),_:1},8,["kind","aria-label","onClick"])]),_:1},8,["message"])]),content:r(()=>[i(_,{"tab-set-labels":s.emojiTabSetLabels,"skin-selector-button-tooltip-label":s.emojiSkinSelectorButtonTooltipLabel,"search-no-results-label":s.emojiSearchNoResultsLabel,"search-results-label":s.emojiSearchResultsLabel,"search-placeholder-label":s.emojiSearchPlaceholderLabel,"skin-tone":n.skinTone,onSkinTone:t[11]||(t[11]=a=>n.skinTone=a),onSelectedEmoji:o.onSelectEmoji},null,8,["tab-set-labels","skin-selector-button-tooltip-label","search-no-results-label","search-results-label","search-placeholder-label","skin-tone","onSelectedEmoji"])]),_:1},8,["open"])]),l("div",oe,[o.displayCharacterLimitWarning?(f(),j("p",se,L(s.characterLimitCount-o.inputLength),1)):k("",!0),i(S,{placement:"top-end",message:s.sendTooltipLabel,show:!o.isSendDisabled&&n.sendButtonFocus,offset:[6,-4]},{anchor:r(()=>[i(h,{"data-qa":"dt-message-input-send-btn",size:"sm",kind:o.isSendDisabled?"muted":"default",circle:"",importance:"primary",class:v({"message-input-button__disabled d-fc-muted":o.isSendDisabled}),"aria-label":s.sendButtonAriaLabel,"aria-disabled":o.isSendDisabled,onClick:o.onSend,onMouseenter:t[13]||(t[13]=a=>n.sendButtonFocus=!0),onMouseleave:t[14]||(t[14]=a=>n.sendButtonFocus=!1),onFocusin:t[15]||(t[15]=a=>n.sendButtonFocus=!0),onFocusout:t[16]||(t[16]=a=>n.sendButtonFocus=!1)},{icon:r(()=>[i(m,{name:"send",size:"300"})]),_:1},8,["kind","class","aria-label","aria-disabled","onClick"])]),_:1},8,["message","show"])])])],34),l("section",ie,[l("div",le,[y(e.$slots,"footerLeft")]),l("div",re,[y(e.$slots,"footerRight")])])])],64)}const I=C(w,[["render",ue]]);w.__docgenInfo={displayName:"DtRecipeMessageInput",exportName:"default",description:"",tags:{},props:[{name:"modelValue",description:`Value of the input. The object format should match TipTap's JSON
document structure: https://tiptap.dev/guide/output#option-1-json`,type:{name:"object|string"},defaultValue:{func:!1,value:"''"}},{name:"editable",description:"Whether the input is editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"inputAriaLabel",description:"Descriptive label for the input element",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"''"}},{name:"inputClass",description:`Additional class name for the input element. Only accepts a String value
because this is passed to the editor via options. For multiple classes,
join them into one string, e.g. "d-p8 d-hmx96"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autoFocus",description:"Whether the input should receive focus after the component has been\nmounted. Either one of `start`, `end`, `all` or a Boolean or a Number.\n- `start`  Sets the focus to the beginning of the input\n- `end`    Sets the focus to the end of the input\n- `all`    Selects the whole contents of the input\n- `Number` Sets the focus to a specific position in the input\n- `true`   Defaults to `start`\n- `false`  Disables autofocus",tags:{},values:["true","false","start","end","all","number"],type:{name:"boolean|string|number"},defaultValue:{func:!1,value:"false"}},{name:"outputFormat",description:'The output format that the editor uses when emitting the "@input" event.\nOne of `text`, `json`, `html`. See https://tiptap.dev/guide/output for\nexamples.',tags:{},values:["text","json","html"],type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"link",description:"Enables the Link extension and optionally passes configurations to it",type:{name:"boolean|object"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder text",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disableSend",description:"Disable Send Button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCharacterLimit",description:"Enable character Limit warning",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"characterLimitCount",description:"Max number of characters allowed",type:{name:"number"},defaultValue:{func:!1,value:"1500"}},{name:"characterLimitWarning",description:"Number after which warning for max limit appears",type:{name:"number"},defaultValue:{func:!1,value:"500"}},{name:"showNotice",description:`Show error notice
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
Listen to this event to toggle showNotice on usage.`,type:{names:["Boolean"]}}],slots:[{name:"middle",description:"Slot for attachment carousel"},{name:"footerLeft",description:"Slot for helper text. Who is typing can go here"},{name:"footerRight",description:"helper text for the input. Shift + enter for new line"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]};const B={name:"DtRecipeMessageInputDefault",components:{DtRecipeMessageInput:I}},de={class:"d-h264"},me=l("div",{class:"d-body-small d-fc-muted"},[l("b",null,"Dwight"),b(" is typing... ")],-1),ce=l("div",{class:"d-body-small d-fc-tertiary"},[l("b",null,"Shift"),b(" + "),l("b",null,"Return"),b(" to add a new line ")],-1);function pe(e,t,s,g,n,o){const m=u("dt-recipe-message-input");return f(),j("div",de,[i(m,{"show-notice":e.$attrs.showNotice,"onUpdate:showNotice":t[0]||(t[0]=c=>e.$attrs.showNotice=c),modelValue:e.$attrs.modelValue,"onUpdate:modelValue":t[1]||(t[1]=c=>e.$attrs.modelValue=c),"input-aria-label":e.$attrs.inputAriaLabel,"auto-focus":e.$attrs.autoFocus,editable:e.$attrs.editable,"input-class":e.$attrs.inputClass,link:e.$attrs.link,"output-format":e.$attrs.outputFormat,placeholder:e.$attrs.placeholder,"disable-send":e.$attrs.disableSend,"has-character-limit":e.$attrs.hasCharacterLimit,"character-limit-count":e.$attrs.characterLimitCount,"character-limit-warning":e.$attrs.characterLimitWarning,"notice-kind":e.$attrs.noticeKind,"notice-message":e.$attrs.noticeMessage,"emoji-tab-set-labels":e.$attrs.emojiTabSetLabels,"emoji-skin-selector-button-tooltip-label":e.$attrs.emojiSkinSelectorButtonTooltipLabel,"emoji-search-no-results-label":e.$attrs.emojiSearchNoResultsLabel,"emoji-search-results-label":e.$attrs.emojiSearchResultsLabel,"emoji-search-placeholder-label":e.$attrs.emojiSearchPlaceholderLabel,"send-button-aria-label":e.$attrs.sendButtonAriaLabel,"emoji-button-aria-label":e.$attrs.emojiButtonAriaLabel,"image-button-aria-label":e.$attrs.imageButtonAriaLabel,onSubmit:e.$attrs.onSubmit,onFocus:e.$attrs.onFocus,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput,onSelectMedia:e.$attrs.onSelectMedia,onAddMedia:e.$attrs.onAddMedia,onNoticeClose:e.$attrs.onNoticeClose},{footerLeft:r(()=>[me]),footerRight:r(()=>[ce]),_:1},8,["show-notice","modelValue","input-aria-label","auto-focus","editable","input-class","link","output-format","placeholder","disable-send","has-character-limit","character-limit-count","character-limit-warning","notice-kind","notice-message","emoji-tab-set-labels","emoji-skin-selector-button-tooltip-label","emoji-search-no-results-label","emoji-search-results-label","emoji-search-placeholder-label","send-button-aria-label","emoji-button-aria-label","image-button-aria-label","onSubmit","onFocus","onBlur","onInput","onSelectMedia","onAddMedia","onNoticeClose"])])}const fe=C(B,[["render",pe]]);B.__docgenInfo={displayName:"DtRecipeMessageInputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]};const N={noticeKind:{options:V,control:{type:"select"}},onSubmit:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onAddMedia:{table:{disable:!0}},onNoticeClose:{table:{disable:!0}},onSelectMedia:{table:{disable:!0}}},P={modelValue:"Always the Padawan, never the Jedi.",placeholder:"New message",inputAriaLabel:"Input text field",noticeMessage:"Files must be less than 32 MB to be sent as Dialpad messages.",onSubmit:d("submit"),onFocus:d("focus"),onBlur:d("blur"),onInput:d("input"),onSelectMedia:d("select-media"),onAddMedia:d("add-media"),onNoticeClose:d("notice-close")},be={title:"Recipes/Conversation View/Message Input",component:I,args:P,argTypes:N,excludeStories:/.*Data$/},ge=e=>O(e,fe),p={render:ge,args:{}};var D,F,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(T=(F=p.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};const he=["argTypesData","argsData","Default"],Ie=Object.freeze(Object.defineProperty({__proto__:null,Default:p,__namedExportsOrder:he,argTypesData:N,argsData:P,default:be},Symbol.toStringTag,{value:"Module"}));export{Ie as D,p as a};
//# sourceMappingURL=message_input.stories-8d6dd618.js.map