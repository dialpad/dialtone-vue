import{a as p}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as L}from"./storybook_utils-1c9c66e9.js";import{D as I,R as x,a as N}from"./rich_text_editor-bdcbab65.js";import{D as B}from"./button-f0bff3c1.js";import{D as C}from"./icon-ee68f285.js";import{a as i,f as _,k as n,g as a,d as o,m as P,l as g,w as u,n as E,s as m,t as M,o as v}from"./vue.esm-bundler-e62bdd6b.js";import{D as A}from"./emoji_picker-5a483386.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const T={name:"DtRecipeMessageInput",components:{DtButton:B,DtEmojiPicker:A,DtIcon:C,DtRichTextEditor:I},mixins:[],inheritAttrs:!1,props:{value:{type:[Object,String],default:""},editable:{type:Boolean,default:!0},inputAriaLabel:{type:String,required:!0},inputClass:{type:String,default:""},autoFocus:{type:[Boolean,String,Number],default:!1,validator(e){return typeof e=="string"?x.includes(e):!0}},outputFormat:{type:String,default:"text",validator(e){return N.includes(e)}},link:{type:[Boolean,Object],default:!1},placeholder:{type:String,default:""},disableSend:{type:Boolean,default:!1},tabSetLabels:{type:Array,default:()=>["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"]},skinSelectorButtonTooltipLabel:{type:String,default:"Change default skin tone"},searchNoResultsLabel:{type:String,default:"No results"},searchResultsLabel:{type:String,default:"Search results"},searchPlaceholderLabel:{type:String,default:"Search..."}},emits:["submit"],data(){return{skinTone:"Default",inputValue:this.value,hasFocus:!1,emojiPickerOpened:!1}},methods:{onSelectEmoji(e){if(!e){this.emojiPickerOpened=!1;return}this.inputValue=this.inputValue+e.shortname,this.emojiPickerOpened=!1},toggleEmojiPicker(){this.emojiPickerOpened=!this.emojiPickerOpened},onSend(){this.$emit("submit",this.inputValue),this.inputValue=""}}},z={class:"d-of-auto d-mx16 d-mt8 d-mb4 d-hmx40p"},$={class:"d-d-flex d-jc-space-between d-mx8 d-my4"},U={class:"d-d-flex"},W={key:0,class:"d-ps-absolute"},q={class:"d-d-flex"},H=a("p",{class:"d-fc-error d-mr16 d-as-center dt-message-input--remaining-char"},[n(" TODO: Replace with char remaining logic "),m(" "+M(500))],-1),X={class:"d-d-flex d- d-jc-space-between d-h24"};function J(e,l,t,F,s,c){const f=i("dt-rich-text-editor"),h=i("dt-icon"),b=i("dt-button"),w=i("dt-emoji-picker");return v(),_("div",null,[n(" TODO: A purpose-built place to display validation errors using DtBanner "),a("div",{class:E(["d-d-flex d-fd-column d-bar8 d-baw1 d-ba d-c-text",{"d-bc-black-500 d-bs-sm":s.hasFocus,"d-bc-black-300":!s.hasFocus}])},[n(" Some wrapper to restrict the height and show the scrollbar "),a("div",z,[o(f,P({modelValue:s.inputValue,"onUpdate:modelValue":l[0]||(l[0]=d=>s.inputValue=d),editable:t.editable,"input-aria-label":t.inputAriaLabel,"input-class":t.inputClass,"output-format":t.outputFormat,"auto-focus":t.autoFocus,link:t.link,placeholder:t.placeholder},e.$attrs),null,16,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","link","placeholder"])]),n(" @slot Slot for attachment carousel "),g(e.$slots,"middle"),n(" Section for the bottom UI "),a("section",$,[n(" Left content "),a("div",U,[o(b,{size:"sm",circle:"",importance:"clear"},{icon:u(()=>[o(h,{name:"image",size:"300"})]),_:1}),o(b,{size:"sm",circle:"",importance:"clear",onClick:c.toggleEmojiPicker},{icon:u(()=>[o(h,{name:"satisfied",size:"300"})]),_:1},8,["onClick"]),s.emojiPickerOpened?(v(),_("div",W,[o(w,{"tab-set-labels":t.tabSetLabels,"skin-selector-button-tooltip-label":t.skinSelectorButtonTooltipLabel,"search-no-results-label":t.searchNoResultsLabel,"search-results-label":t.searchResultsLabel,"search-placeholder-label":t.searchPlaceholderLabel,"skin-tone":s.skinTone,onSkinTone:l[1]||(l[1]=d=>s.skinTone=d),onSelectedEmoji:c.onSelectEmoji,onClose:l[2]||(l[2]=d=>s.emojiPickerOpened=!1)},null,8,["tab-set-labels","skin-selector-button-tooltip-label","search-no-results-label","search-results-label","search-placeholder-label","skin-tone","onSelectedEmoji"])])):n("v-if",!0)]),n(" Right content "),a("div",q,[n(" Optionally displayed remaining character counter "),H,n(" Right positioned UI - send button "),o(b,{size:"sm",circle:"",importance:"primary",disabled:t.disableSend,onClick:c.onSend},{icon:u(()=>[o(h,{name:"send",size:"300"})]),_:1},8,["disabled","onClick"])])])],2),a("section",X,[a("div",null,[n(" @slot Slot for helper text. Who is typing can go here "),g(e.$slots,"footerLeft")]),a("div",null,[n(" @slot helper text for the input. Shift + enter for new line "),g(e.$slots,"footerRight")])])])}const j=D(T,[["render",J],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]]);T.__docgenInfo={displayName:"DtRecipeMessageInput",exportName:"default",description:"",tags:{},props:[{name:"value",description:`Value of the input. The object format should match TipTap's JSON
document structure: https://tiptap.dev/guide/output#option-1-json`,type:{name:"object|string"},defaultValue:{func:!1,value:"''"}},{name:"editable",description:"Whether the input is editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"inputAriaLabel",description:"Descriptive label for the input element",type:{name:"string"},required:!0},{name:"inputClass",description:`Additional class name for the input element. Only accepts a String value
because this is passed to the editor via options. For multiple classes,
join them into one string, e.g. "d-p8 d-hmx96"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"autoFocus",description:"Whether the input should receive focus after the component has been\nmounted. Either one of `start`, `end`, `all` or a Boolean or a Number.\n- `start`  Sets the focus to the beginning of the input\n- `end`    Sets the focus to the end of the input\n- `all`    Selects the whole contents of the input\n- `Number` Sets the focus to a specific position in the input\n- `true`   Defaults to `start`\n- `false`  Disables autofocus",tags:{},values:["true","false","start","end","all","number"],type:{name:"boolean|string|number"},defaultValue:{func:!1,value:"false"}},{name:"outputFormat",description:'The output format that the editor uses when emitting the "@input" event.\nOne of `text`, `json`, `html`. See https://tiptap.dev/guide/output for\nexamples.',tags:{},values:["text","json","html"],type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"link",description:"Enables the Link extension and optionally passes configurations to it",type:{name:"boolean|object"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder text",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disableSend",description:"Disable Send Button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tabSetLabels",type:{name:"array"},defaultValue:{func:!1,value:`[
  'Most recently used',
  'Smileys and people',
  'Nature',
  'Food',
  'Activity',
  'Travel',
  'Objects',
  'Symbols',
  'Flags',
]`}},{name:"skinSelectorButtonTooltipLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Change default skin tone'"}},{name:"searchNoResultsLabel",type:{name:"string"},defaultValue:{func:!1,value:"'No results'"}},{name:"searchResultsLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Search results'"}},{name:"searchPlaceholderLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Search...'"}}],events:[{name:"submit",description:"Fires when send button is clicked",type:{names:["String"]}}],slots:[{name:"middle",description:"Slot for attachment carousel"},{name:"footerLeft",description:"Slot for helper text. Who is typing can go here"},{name:"footerRight",description:"helper text for the input. Shift + enter for new line"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input.vue"]};const V={name:"DtRecipeMessageInputDefault",components:{DtRecipeMessageInput:j}},Y={class:"d-h264"},G=a("div",{class:"message-input-recipe-subtitle d-fc-black-500"},[a("b",null,"Dwight"),m(" is typing... ")],-1),K=a("div",{class:"message-input-recipe-subtitle d-fc-black-500"},[a("b",null,"Shift"),m(" + "),a("b",null,"Return"),m(" to add a new line ")],-1);function Q(e,l,t,F,s,c){const f=i("dt-recipe-message-input");return v(),_("div",Y,[o(f,{"input-aria-label":e.$attrs.inputAriaLabel,"auto-focus":e.$attrs.autoFocus,editable:e.$attrs.editable,"input-class":e.inputClass,link:e.$attrs.link,"output-format":e.$attrs.outputFormat,placeholder:e.$attrs.placeholder,value:e.$attrs.value,"disable-send":e.$attrs.disableSend,onSubmit:e.$attrs.onSubmit,onFocus:e.$attrs.onFocus,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput},{footerLeft:u(()=>[G]),footerRight:u(()=>[K]),_:1},8,["input-aria-label","auto-focus","editable","input-class","link","output-format","placeholder","value","disable-send","onSubmit","onFocus","onBlur","onInput"])])}const Z=D(V,[["render",Q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]]);V.__docgenInfo={displayName:"DtRecipeMessageInputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/message_input/message_input_default.story.vue"]};const O={onSubmit:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}}},R={placeholder:"New Message",onSubmit:p("submit"),onFocus:p("focus"),onBlur:p("blur"),onInput:p("input")},ee={title:"Recipes/Conversation View/Message Input",component:j,args:R,argTypes:O,excludeStories:/.*Data$/},te=e=>L(e,Z),r={render:te,args:{}};var S,y,k;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const ae=["argTypesData","argsData","Default"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:ae,argTypesData:O,argsData:R,default:ee},Symbol.toStringTag,{value:"Module"}));export{de as D,r as a};
//# sourceMappingURL=message_input.stories-b258a71e.js.map