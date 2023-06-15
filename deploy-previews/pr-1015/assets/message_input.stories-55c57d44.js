import{a as p}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as I}from"./storybook_utils-1c9c66e9.js";import{D as N,R as B,a as x}from"./rich_text_editor-bdcbab65.js";import{D as P}from"./button-f0bff3c1.js";import{D as E}from"./icon-ee68f285.js";import{a as u,f as g,k as n,g as a,d as i,m as M,l as b,w as r,t as A,n as v,o as _,s as S}from"./vue.esm-bundler-e62bdd6b.js";import{D as W}from"./emoji_picker-1954bfe8.js";import{D as z}from"./popover-5caefdeb.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const D={name:"DtRecipeMessageInput",components:{DtButton:P,DtEmojiPicker:W,DtIcon:E,DtPopover:z,DtRichTextEditor:N},mixins:[],inheritAttrs:!1,props:{value:{type:[Object,String],default:""},editable:{type:Boolean,default:!0},inputAriaLabel:{type:String,required:!0},inputClass:{type:String,default:""},autoFocus:{type:[Boolean,String,Number],default:!1,validator(e){return typeof e=="string"?B.includes(e):!0}},outputFormat:{type:String,default:"text",validator(e){return x.includes(e)}},link:{type:[Boolean,Object],default:!1},placeholder:{type:String,default:""},disableSend:{type:Boolean,default:!1},hasCharacterLimit:{type:Boolean,default:!0},characterLimitCount:{type:Number,default:1500},characterLimitWarning:{type:Number,default:500},emojiTabSetLabels:{type:Array,default:()=>["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"]},emojiSkinSelectorButtonTooltipLabel:{type:String,default:"Change default skin tone"},emojiSearchNoResultsLabel:{type:String,default:"No results"},emojiSearchResultsLabel:{type:String,default:"Search results"},emojiSearchPlaceholderLabel:{type:String,default:"Search..."}},emits:["submit"],data(){return{skinTone:"Default",inputValue:this.value,hasFocus:!1,emojiPickerOpened:!1}},computed:{inputLength(){return this.inputValue.length},displayCharacterLimitWarning(){return this.hasCharacterLimit&&this.characterLimitCount-this.inputLength<=this.characterLimitWarning},isSendDisabled(){return this.inputLength===0||this.disableSend||this.hasCharacterLimit&&this.inputLength>this.characterLimitCount}},methods:{onSelectEmoji(e){if(!e){this.emojiPickerOpened=!1;return}this.inputValue=this.inputValue+e.shortname,this.emojiPickerOpened=!1},toggleEmojiPicker(){this.emojiPickerOpened=!this.emojiPickerOpened},onSend(){this.isSendDisabled||(this.$emit("submit",this.inputValue),this.inputValue="")}}},U={class:"d-of-auto d-mx16 d-mt8 d-mb4 d-hmx40p"},$={class:"d-d-flex d-jc-space-between d-mx8 d-my4"},q={class:"d-d-flex"},H={class:"d-d-flex"},X={key:0,class:"d-fc-error d-mr16 d-as-center dt-message-input--remaining-char"},J={class:"d-d-flex d- d-jc-space-between d-h24"};function Y(e,l,t,F,s,o){const m=u("dt-rich-text-editor"),h=u("dt-icon"),f=u("dt-button"),O=u("dt-emoji-picker"),R=u("dt-popover");return _(),g("div",null,[n(" TODO: A purpose-built place to display validation errors using DtBanner "),a("div",{class:v(["d-d-flex d-fd-column d-bar8 d-baw1 d-ba d-c-text",{"d-bc-black-500 d-bs-sm":s.hasFocus,"d-bc-black-300":!s.hasFocus}])},[n(" Some wrapper to restrict the height and show the scrollbar "),a("div",U,[i(m,M({modelValue:s.inputValue,"onUpdate:modelValue":l[0]||(l[0]=c=>s.inputValue=c),editable:t.editable,"input-aria-label":t.inputAriaLabel,"input-class":t.inputClass,"output-format":t.outputFormat,"auto-focus":t.autoFocus,link:t.link,placeholder:t.placeholder},e.$attrs),null,16,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","link","placeholder"])]),n(" @slot Slot for attachment carousel "),b(e.$slots,"middle"),n(" Section for the bottom UI "),a("section",$,[n(" Left content "),a("div",q,[i(f,{size:"sm",circle:"",importance:"clear"},{icon:r(()=>[i(h,{name:"image",size:"300"})]),_:1}),i(R,{open:s.emojiPickerOpened,"initial-focus-element":"#searchInput",padding:"none",onOpened:l[2]||(l[2]=c=>{s.emojiPickerOpened=c})},{anchor:r(()=>[i(f,{size:"sm",circle:"",importance:"clear",onClick:o.toggleEmojiPicker},{icon:r(()=>[i(h,{name:"satisfied",size:"300"})]),_:1},8,["onClick"])]),content:r(()=>[i(O,{"tab-set-labels":t.emojiTabSetLabels,"skin-selector-button-tooltip-label":t.emojiSkinSelectorButtonTooltipLabel,"search-no-results-label":t.emojiSearchNoResultsLabel,"search-results-label":t.emojiSearchResultsLabel,"search-placeholder-label":t.emojiSearchPlaceholderLabel,"skin-tone":s.skinTone,onSkinTone:l[1]||(l[1]=c=>s.skinTone=c),onSelectedEmoji:o.onSelectEmoji},null,8,["tab-set-labels","skin-selector-button-tooltip-label","search-no-results-label","search-results-label","search-placeholder-label","skin-tone","onSelectedEmoji"])]),_:1},8,["open"])]),n(" Right content "),a("div",H,[n(" Optionally displayed remaining character counter "),o.displayCharacterLimitWarning?(_(),g("p",X,A(t.characterLimitCount-o.inputLength),1)):n("v-if",!0),n(" Right positioned UI - send button "),i(f,{size:"sm",circle:"",importance:"primary",class:v({"message-input-button__disabled":o.isSendDisabled}),"aria-disabled":o.isSendDisabled,onClick:o.onSend},{icon:r(()=>[i(h,{name:"send",size:"300"})]),_:1},8,["class","aria-disabled","onClick"])])])],2),a("section",J,[a("div",null,[n(" @slot Slot for helper text. Who is typing can go here "),b(e.$slots,"footerLeft")]),a("div",null,[n(" @slot helper text for the input. Shift + enter for new line "),b(e.$slots,"footerRight")])])])}const T=j(D,[["render",Y],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]]);D.__docgenInfo={displayName:"DtRecipeMessageInput",exportName:"default",description:"",tags:{},props:[{name:"value",description:`Value of the input. The object format should match TipTap's JSON
document structure: https://tiptap.dev/guide/output#option-1-json`,type:{name:"object|string"},defaultValue:{func:!1,value:"''"}},{name:"editable",description:"Whether the input is editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"inputAriaLabel",description:"Descriptive label for the input element",type:{name:"string"},required:!0},{name:"inputClass",description:`Additional class name for the input element. Only accepts a String value
because this is passed to the editor via options. For multiple classes,
join them into one string, e.g. "d-p8 d-hmx96"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autoFocus",description:"Whether the input should receive focus after the component has been\nmounted. Either one of `start`, `end`, `all` or a Boolean or a Number.\n- `start`  Sets the focus to the beginning of the input\n- `end`    Sets the focus to the end of the input\n- `all`    Selects the whole contents of the input\n- `Number` Sets the focus to a specific position in the input\n- `true`   Defaults to `start`\n- `false`  Disables autofocus",tags:{},values:["true","false","start","end","all","number"],type:{name:"boolean|string|number"},defaultValue:{func:!1,value:"false"}},{name:"outputFormat",description:'The output format that the editor uses when emitting the "@input" event.\nOne of `text`, `json`, `html`. See https://tiptap.dev/guide/output for\nexamples.',tags:{},values:["text","json","html"],type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"link",description:"Enables the Link extension and optionally passes configurations to it",type:{name:"boolean|object"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder text",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disableSend",description:"Disable Send Button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCharacterLimit",description:"Enable character Limit warning",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"characterLimitCount",description:"Max number of characters allowed",type:{name:"number"},defaultValue:{func:!1,value:"1500"}},{name:"characterLimitWarning",description:"Number after which warning for max limit appears",type:{name:"number"},defaultValue:{func:!1,value:"500"}},{name:"emojiTabSetLabels",description:"tab labels for emoji",type:{name:"array"},defaultValue:{func:!1,value:`[
  'Most recently used',
  'Smileys and people',
  'Nature',
  'Food',
  'Activity',
  'Travel',
  'Objects',
  'Symbols',
  'Flags',
]`}},{name:"emojiSkinSelectorButtonTooltipLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Change default skin tone'"}},{name:"emojiSearchNoResultsLabel",type:{name:"string"},defaultValue:{func:!1,value:"'No results'"}},{name:"emojiSearchResultsLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Search results'"}},{name:"emojiSearchPlaceholderLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Search...'"}}],events:[{name:"submit",description:"Fires when send button is clicked",type:{names:["String"]}}],slots:[{name:"middle",description:"Slot for attachment carousel"},{name:"footerLeft",description:"Slot for helper text. Who is typing can go here"},{name:"footerRight",description:"helper text for the input. Shift + enter for new line"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]};const V={name:"DtRecipeMessageInputDefault",components:{DtRecipeMessageInput:T}},G={class:"d-h264"},K=a("div",{class:"message-input-recipe-subtitle d-fc-black-500"},[a("b",null,"Dwight"),S(" is typing... ")],-1),Q=a("div",{class:"message-input-recipe-subtitle d-fc-black-500"},[a("b",null,"Shift"),S(" + "),a("b",null,"Return"),S(" to add a new line ")],-1);function Z(e,l,t,F,s,o){const m=u("dt-recipe-message-input");return _(),g("div",G,[i(m,{"input-aria-label":e.$attrs.inputAriaLabel,"auto-focus":e.$attrs.autoFocus,editable:e.$attrs.editable,"input-class":e.inputClass,link:e.$attrs.link,"output-format":e.$attrs.outputFormat,placeholder:e.$attrs.placeholder,value:e.$attrs.value,"disable-send":e.$attrs.disableSend,"has-character-limit":e.$attrs.hasCharacterLimit,"character-limit-count":e.$attrs.characterLimitCount,"character-limit-warning":e.$attrs.characterLimitWarning,onSubmit:e.$attrs.onSubmit,onFocus:e.$attrs.onFocus,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput},{footerLeft:r(()=>[K]),footerRight:r(()=>[Q]),_:1},8,["input-aria-label","auto-focus","editable","input-class","link","output-format","placeholder","value","disable-send","has-character-limit","character-limit-count","character-limit-warning","onSubmit","onFocus","onBlur","onInput"])])}const ee=j(V,[["render",Z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]]);V.__docgenInfo={displayName:"DtRecipeMessageInputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]};const C={onSubmit:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}}},w={placeholder:"New Message",onSubmit:p("submit"),onFocus:p("focus"),onBlur:p("blur"),onInput:p("input")},te={title:"Recipes/Conversation View/Message Input",component:T,args:w,argTypes:C,excludeStories:/.*Data$/},ae=e=>I(e,ee),d={render:ae,args:{}};var y,k,L;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const ne=["argTypesData","argsData","Default"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:ne,argTypesData:C,argsData:w,default:te},Symbol.toStringTag,{value:"Module"}));export{me as D,d as a};
//# sourceMappingURL=message_input.stories-55c57d44.js.map
