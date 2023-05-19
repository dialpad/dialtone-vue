import{a as D}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as L}from"./storybook_utils-500c013d.js";import{j as F,a as y,f as r,g as f,m,k as t,l as v,n as U,B as H,d as o,o as n,s as S,t as b,F as A,u as j,b as V,z as q,w as u}from"./vue.esm-bundler-15aa0fd7.js";import{L as x,j as B,h as K,c as G,g as Z,b as Y,V as J}from"./utils-66883e36.js";import{M as Q}from"./input-286992a1.js";import{D as X}from"./validation_messages-f43d53a1.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const _={xs:"d-select--xs",sm:"d-select--sm",md:"",lg:"d-select--lg",xl:"d-select--xl"},ee={error:"d-select__input--error",warning:"d-select__input--warning",success:"d-select__input--success"},te=e=>!e.index||typeof e.index=="number",se=e=>e.value?typeof e.value=="string"||typeof e.value=="number":!1,ae=e=>e.label?typeof e.label=="string":!1,oe=e=>e?e.every(d=>!(!te(d)||!se(d)||!ae(d))):!0,z={name:"DtSelectMenu",components:{DtValidationMessages:X},mixins:[Q],inheritAttrs:!1,props:{label:{type:String,default:""},description:{type:String,default:""},options:{type:Array,default:()=>[],validator:e=>oe(e)},size:{type:String,default:"md",validator:e=>Object.keys(_).includes(e)},labelClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""},selectClass:{type:[String,Array,Object],default:""},optionClass:{type:[String,Array,Object],default:""},labelChildProps:{type:Object,default:()=>({})},descriptionChildProps:{type:Object,default:()=>({})},optionChildProps:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1}},emits:["input","change"],data(){return{LABEL_SIZE_MODIFIERS:x,DESCRIPTION_SIZE_MODIFIERS:B,SELECT_SIZE_MODIFIERS:_,SELECT_STATE_MODIFIERS:ee,hasSlotContent:K}},computed:{selectListeners(){return{input:()=>{},change:e=>this.emitValue(e.target.value)}},state(){return G(this.formattedMessages)},selectKey(){return Z()},descriptionKey(){return`select-${this.selectKey}-description`},labelAriaDetails(){return this.$slots.description||this.description?this.descriptionKey:this.$attrs["aria-details"]}},mounted(){this.validateOptionsPresence()},beforeUpdate(){this.validateOptionsPresence()},methods:{emitValue(e){this.$emit("input",e),this.$emit("change",e)},getOptionKey(e){return`select-${this.selectKey}-option-${e}`},validateOptionsPresence(){var e;((e=this.options)==null?void 0:e.length)<1&&!this.$slots.default&&F("Options are expected to be provided via prop or slot",this)}}},ne=["aria-details"],ie=["id"],le=["disabled"],re=["value"];function pe(e,d,s,c,l,p){const a=y("dt-validation-messages");return n(),r("div",null,[f("label",null,[l.hasSlotContent(e.$slots.label)||s.label?(n(),r("div",m({key:0,"aria-details":p.labelAriaDetails,class:["d-label",l.LABEL_SIZE_MODIFIERS[s.size],s.labelClass]},s.labelChildProps,{"data-qa":"dt-select-label"}),[t(" @slot Slot for label, defaults to label prop "),v(e.$slots,"label",{},()=>[S(b(s.label),1)])],16,ne)):t("v-if",!0),l.hasSlotContent(e.$slots.description)||s.description?(n(),r("div",m({key:1,id:p.descriptionKey,class:["d-description",l.DESCRIPTION_SIZE_MODIFIERS[s.size],s.descriptionClass]},s.descriptionChildProps,{"data-qa":"dt-select-description"}),[t(" @slot Slot for description, defaults to description prop "),v(e.$slots,"description",{},()=>[S(b(s.description),1)])],16,ie)):t("v-if",!0),f("div",{class:U(["d-select",l.SELECT_SIZE_MODIFIERS[s.size],s.selectClass,{"d-select--disabled":s.disabled}]),"data-qa":"dt-select-wrapper"},[f("select",m({class:["d-select__input",l.SELECT_STATE_MODIFIERS[p.state]]},e.$attrs,{"data-qa":"dt-select",disabled:s.disabled},H(p.selectListeners,!0)),[t(" @slot Slot for select menu options, defaults to options prop "),v(e.$slots,"default",{},()=>[(n(!0),r(A,null,j(s.options,i=>(n(),r("option",m({key:p.getOptionKey(i.value),value:i.value,class:s.optionClass},s.optionChildProps),b(i.label),17,re))),128))])],16,le)],2)]),o(a,m({"validation-messages":e.formattedMessages,"show-messages":e.showMessages,class:e.messagesClass},e.messagesChildProps,{"data-qa":"dt-select-messages"}),null,16,["validation-messages","show-messages","class"])])}const M=E(z,[["render",pe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu.vue"]]);z.__docgenInfo={description:"A select menu is an input control that allows users to choose one option from a list.",displayName:"DtSelectMenu",tags:{property:[{title:"property",type:{name:"Boolean"},name:"disabled",description:"attribute"},{title:"property",type:{name:"String"},name:"name",description:"attribute"},{title:"property",type:{name:"String"},name:"value",description:"attribute"}],see:[{description:"https://dialpad.design/components/select.html",title:"see"}]},exportName:"default",props:[{name:"messagesClass",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the validation messages component",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesChildProps",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the validation messages component",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showMessages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to hide / show the validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"messages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",description:"Label for the select",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:"Description for the select",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"options",description:"Select Menu Options, overridden by default slot. Each option has the following structure:\n`{ index: number (optional), value: number || string (required), label: string (required) }`",tags:{params:[{title:"param",type:{name:"Object[]"},name:"options",description:"Optional - A list that can be used to create a list of select menu options"},{title:"param",type:{name:"number"},name:"options",description:"[].index - Optional - The index of the option"},{title:"param",type:{name:"union",elements:[{name:"number"},{name:"string"}]},name:"options",description:"[].value - Required - The option value"},{title:"param",type:{name:"string"},name:"options",description:"[].label - Required - The option Label"}]},type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"size",description:"Controls the size of the select",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"labelClass",description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",description:"Used to customize the description container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"selectClass",description:"Used to customize the select",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"optionClass",description:"Used to customize each option, should options be provided via prop",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"descriptionChildProps",description:"A set of props that are passed into the description container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"optionChildProps",description:"A set of props that are passed into each option, should options be provided via prop",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"disabled",description:"Disabled state of the select",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"input",description:"Native input event",type:{names:["String | Number"]}},{name:"change",description:"Native change event",type:{names:["String | Number"]}}],slots:[{name:"label",description:"Slot for label, defaults to label prop"},{name:"description",description:"Slot for description, defaults to description prop"},{name:"default",description:"Slot for select menu options, defaults to options prop"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input.js","/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu.vue"]};const W={name:"DtSelectMenuDefault",components:{DtSelectMenu:M,htmlFragment:Y}},de=["innerHTML"],ce=["innerHTML"];function ue(e,d,s,c,l,p){const a=y("html-fragment"),i=y("dt-select-menu");return n(),V(i,{label:e.$attrs.label,options:e.$attrs.options,size:e.$attrs.size,description:e.$attrs.description,"show-messages":e.$attrs.showMessages,messages:e.$attrs.messages,name:e.$attrs.name,value:e.$attrs.value,disabled:e.$attrs.disabled,"label-class":e.$attrs.labelClass,"description-class":e.$attrs.descriptionClass,"select-class":e.$attrs.selectClass,"option-class":e.$attrs.optionClass,"messages-class":e.$attrs.messagesClass,"label-child-props":e.$attrs.labelChildProps,"description-child-props":e.$attrs.descriptionChildProps,"option-child-props":e.$attrs.optionChildProps,"messages-child-props":e.$attrs.messagesChildProps,onInput:e.$attrs.onInput,onChange:e.$attrs.onChange},q({default:u(()=>[e.defaultSlot?(n(),V(a,{key:0,html:e.defaultSlot},null,8,["html"])):t("v-if",!0)]),_:2},[e.$attrs.labelSlot?{name:"label",fn:u(()=>[f("span",{innerHTML:e.$attrs.labelSlot},null,8,de)]),key:"0"}:void 0,e.$attrs.descriptionSlot?{name:"description",fn:u(()=>[f("span",{innerHTML:e.$attrs.descriptionSlot},null,8,ce)]),key:"1"}:void 0]),1032,["label","options","size","description","show-messages","messages","name","value","disabled","label-class","description-class","select-class","option-class","messages-class","label-child-props","description-child-props","option-child-props","messages-child-props","onInput","onChange"])}const me=E(W,[["render",ue],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu_default.story.vue"]]);W.__docgenInfo={displayName:"DtSelectMenuDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu_default.story.vue"]};const N={name:"DtSelectMenuVariants",components:{DtSelectMenu:M},setup(){return{VALIDATION_MESSAGE_TYPES:J}}},he={id:"components-select-menu--variants-container",class:"d-d-flex d-fd-column d-stack32 d-p32"},ge=["value"];function fe(e,d,s,c,l,p){const a=y("dt-select-menu");return n(),r("div",he,[t(" Default "),o(a,{id:"default",name:"default",label:"Default",options:e.$attrs.options},null,8,["options"]),t(" Default "),t(" With Description "),o(a,{id:"with-description",name:"with-description",label:"With",description:"Description",options:e.$attrs.options},null,8,["options"]),t(" With Description "),t(" With Slotted Label "),o(a,{id:"with-slotted-label",name:"with-slotted-label",options:e.$attrs.options},{label:u(()=>[S(" With Slotted Label ")]),_:1},8,["options"]),t(" With Slotted Label "),t(" With Slotted Description "),o(a,{id:"with-slotted-description",name:"with-slotted-description",label:"With",options:e.$attrs.options},{description:u(()=>[S(" Slotted Description ")]),_:1},8,["options"]),t(" With Slotted Description "),t(" With Slotted Options "),o(a,{id:"with-slotted-options",name:"with-slotted-options",label:"With Slotted Options"},{default:u(()=>[(n(!0),r(A,null,j(e.$attrs.options,i=>(n(),r("option",{key:`with-slotted-options-${i.value}`,value:i.value},b(i.label),9,ge))),128))]),_:1}),t(" With Slotted Options "),t(" With Error Message "),o(a,{id:"with-error-message",name:"with-error-message",label:"With Error Message",options:e.$attrs.options,messages:[{message:"Error",type:c.VALIDATION_MESSAGE_TYPES.ERROR}]},null,8,["options","messages"]),t(" With Error Message "),t(" With Error Messages Hidden "),o(a,{id:"with-error-messages-hidden",name:"with-error-messages-hidden",label:"With Error Messages Hidden",options:e.$attrs.options,messages:[{message:"Error",type:c.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1},null,8,["options","messages"]),t(" With Error Messages Hidden "),t(" With Success Message "),o(a,{id:"with-success-message",name:"with-success-message",label:"With Success Message",options:e.$attrs.options,messages:[{message:"Success",type:c.VALIDATION_MESSAGE_TYPES.SUCCESS}]},null,8,["options","messages"]),t(" With Success Message "),t(" With Warning Message "),o(a,{id:"with-warning-message",name:"with-warning-message",label:"With Warning Message",options:e.$attrs.options,messages:[{message:"Warning",type:c.VALIDATION_MESSAGE_TYPES.WARNING}]},null,8,["options","messages"]),t(" With Warning Message "),t(" Disabled "),o(a,{id:"disabled",name:"disabled",label:"Disabled",options:e.$attrs.options,disabled:""},null,8,["options"]),t(" Disabled "),t(" Extra Small "),o(a,{id:"extra-small",name:"extra-small",label:"Extra Small",options:e.$attrs.options,size:"xs"},null,8,["options"]),t(" Extra Small "),t(" Small "),o(a,{id:"small",name:"small",label:"Small",options:e.$attrs.options,size:"sm"},null,8,["options"]),t(" Small "),t(" Large "),o(a,{id:"large",name:"large",label:"Large",options:e.$attrs.options,size:"lg"},null,8,["options"]),t(" Large "),t(" Extra Large "),o(a,{id:"extra-large",name:"extra-large",label:"Extra Large",options:e.$attrs.options,size:"xl"},null,8,["options"]),t(" Extra Large ")])}const be=E(N,[["render",fe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu_variants.story.vue"]]);N.__docgenInfo={displayName:"DtSelectMenuVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu_variants.story.vue"]};const C=[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],k={label:"Label",size:"md",name:"",disabled:!1,value:C[0].value,options:C,onInput:D("input"),onChange:D("change")},R={labelSlot:{name:"label",description:"Slot for label, defaults to label prop",control:"text",table:{category:"slots",type:{summary:"VNode"}}},descriptionSlot:{name:"description",description:"Slot for description, defaults to description prop",control:"text",table:{category:"slots",type:{summary:"VNode"}}},default:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{description:"Label for the select",table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},description:{description:"Describes the select",table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},options:{control:{type:"object"},table:{category:"props",type:{summary:"object"},defaultValue:{summary:[]}}},size:{description:"Controls the size of the select",options:Object.keys(_),control:{type:"select"},table:{category:"props",type:{summary:"string"}}},labelClass:{description:"Pass through classes. Used to customize the label container"},descriptionClass:{description:"Pass through classes. Used to customize the description container"},selectClass:{description:"Pass through classes. Used to customize the select"},optionClass:{description:"Pass through classes. Used to customize each option, should options be provided via prop"},messagesClass:{description:"Pass through classes. Used to customize the the validation messages component"},labelChildProps:{description:"Pass through props. A set of props that are passed into the label container"},descriptionChildProps:{description:"Pass through props. A set of props that are passed into the description container"},optionChildProps:{description:`Pass through props. A set of props that are passed into each option,
     should options be provided via prop`},messagesChildProps:{description:"Pass through props. A set of props that are passed into the validation messages component"},value:{description:"HTML select value attribute. Provides a value for the select",options:C.map(e=>e.value),control:{type:"select"},table:{category:"html attributes",type:{summary:"string"},defaultValue:{summary:""}}},name:{description:"HTML select name attribute. Provides a name for the select",control:{type:"text"},table:{category:"html attributes",type:{summary:"string"},defaultValue:{summary:""}}},disabled:{description:"HTML select disabled attribute. Disables the select",control:{type:"boolean"},table:{category:"html attributes",type:{summary:"boolean"},defaultValue:{summary:!1}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},onChange:{table:{disable:!0}}},ye={title:"Components/Select Menu",component:M,args:k,argTypes:R,excludeStories:/.*Data$/},Se=e=>L(e,me),ve=e=>L(e,be),h={render:Se,args:{}},g={render:ve,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var O,I,w;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(w=(I=h.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var P,T,$;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...($=(T=g.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const _e=["argsData","argTypesData","Default","Variants"],we=Object.freeze(Object.defineProperty({__proto__:null,Default:h,Variants:g,__namedExportsOrder:_e,argTypesData:R,argsData:k,default:ye},Symbol.toStringTag,{value:"Module"}));export{h as D,we as S,g as V};
//# sourceMappingURL=select_menu.stories-13529e77.js.map
