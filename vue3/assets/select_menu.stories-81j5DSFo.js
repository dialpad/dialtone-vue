import{a as M}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as A}from"./storybook_utils-dy5aucTw.js";import{s as b,k as r,e as f,m as u,f as S,g as v,p as U,t as W,u as a,o as n,x as y,y as g,F as L,G as j,b as D,B as q,w as c}from"./vue.esm-bundler-pfnFGw-8.js";import{L as B,j as H,h as K,b as G,g as x,d as Z,V as Y}from"./utils-uw-tjP-u.js";import{M as J}from"./input-ThOFx_z-.js";import{D as Q}from"./validation_messages-3Bisqynw.js";import{_ as E}from"./_plugin-vue_export-helper-x3n3nnut.js";const C={xs:"d-select--xs",sm:"d-select--sm",md:"",lg:"d-select--lg",xl:"d-select--xl"},X={error:"d-select__input--error",warning:"d-select__input--warning",success:"d-select__input--success"},ee=e=>!e.index||typeof e.index=="number",te=e=>e.value?typeof e.value=="string"||typeof e.value=="number":!1,se=e=>e.label?typeof e.label=="string":!1,ae=e=>e?e.every(o=>!(!ee(o)||!te(o)||!se(o))):!0,z={name:"DtSelectMenu",components:{DtValidationMessages:Q},mixins:[J],inheritAttrs:!1,props:{label:{type:String,default:""},description:{type:String,default:""},options:{type:Array,default:()=>[],validator:e=>ae(e)},size:{type:String,default:"md",validator:e=>Object.keys(C).includes(e)},labelClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""},selectClass:{type:[String,Array,Object],default:""},optionClass:{type:[String,Array,Object],default:""},labelChildProps:{type:Object,default:()=>({})},descriptionChildProps:{type:Object,default:()=>({})},optionChildProps:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1}},emits:["input","change"],data(){return{LABEL_SIZE_MODIFIERS:B,DESCRIPTION_SIZE_MODIFIERS:H,SELECT_SIZE_MODIFIERS:C,SELECT_STATE_MODIFIERS:X,hasSlotContent:K}},computed:{selectListeners(){return{input:()=>{},change:e=>this.emitValue(e.target.value,e)}},state(){return G(this.formattedMessages)},selectKey(){return x()},descriptionKey(){return`select-${this.selectKey}-description`},labelAriaDetails(){return this.$slots.description||this.description?this.descriptionKey:this.$attrs["aria-details"]}},watch:{options(){this.$nextTick(()=>{this.emitValue(this.$refs.selectElement.value,null)})}},mounted(){this.emitValue(this.$refs.selectElement.value,null),this.validateOptionsPresence()},beforeUpdate(){this.validateOptionsPresence()},methods:{emitValue(e,o){this.$emit("input",e,o),this.$emit("change",e,o)},getOptionKey(e){return`select-${this.selectKey}-option-${e}`},validateOptionsPresence(){var e;((e=this.options)==null?void 0:e.length)<1&&this.$slots.default}}},oe=["aria-details"],ne=["id"],le=["disabled"],ie=["value"];function re(e,o,t,d,i,p){const s=b("dt-validation-messages");return n(),r("div",null,[f("label",null,[i.hasSlotContent(e.$slots.label)||t.label?(n(),r("div",u({key:0,"aria-details":p.labelAriaDetails,class:["d-label",i.LABEL_SIZE_MODIFIERS[t.size],t.labelClass]},t.labelChildProps,{"data-qa":"dt-select-label"}),[S(e.$slots,"label",{},()=>[y(g(t.label),1)])],16,oe)):v("",!0),i.hasSlotContent(e.$slots.description)||t.description?(n(),r("div",u({key:1,id:p.descriptionKey,class:["d-description",i.DESCRIPTION_SIZE_MODIFIERS[t.size],t.descriptionClass]},t.descriptionChildProps,{"data-qa":"dt-select-description"}),[S(e.$slots,"description",{},()=>[y(g(t.description),1)])],16,ne)):v("",!0),f("div",{class:U(["d-select",i.SELECT_SIZE_MODIFIERS[t.size],t.selectClass,{"d-select--disabled":t.disabled}]),"data-qa":"dt-select-wrapper"},[f("select",u({ref:"selectElement",class:["d-select__input",i.SELECT_STATE_MODIFIERS[p.state]]},e.$attrs,{"data-qa":"dt-select",disabled:t.disabled},W(p.selectListeners,!0)),[S(e.$slots,"default",{},()=>[(n(!0),r(L,null,j(t.options,l=>(n(),r("option",u({key:p.getOptionKey(l.value),value:l.value,class:t.optionClass},t.optionChildProps),g(l.label),17,ie))),128))])],16,le)],2)]),a(s,u({"validation-messages":e.formattedMessages,"show-messages":e.showMessages,class:e.messagesClass},e.messagesChildProps,{"data-qa":"dt-select-messages"}),null,16,["validation-messages","show-messages","class"])])}const V=E(z,[["render",re]]);z.__docgenInfo={description:"A select menu is an input control that allows users to choose one option from a list.",displayName:"DtSelectMenu",tags:{property:[{title:"property",type:{name:"Boolean"},name:"disabled",description:"attribute"},{title:"property",type:{name:"String"},name:"name",description:"attribute"},{title:"property",type:{name:"String"},name:"value",description:"attribute"}],see:[{description:"https://dialpad.design/components/select.html",title:"see"}]},exportName:"default",props:[{name:"messagesClass",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the validation messages component",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesChildProps",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the validation messages component",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showMessages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to hide / show the validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"messages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",description:"Label for the select",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:"Description for the select",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"options",description:"Select Menu Options, overridden by default slot. Each option has the following structure:\n`{ index: number (optional), value: number || string (required), label: string (required) }`",tags:{params:[{title:"param",type:{name:"Object[]"},name:"options",description:"Optional - A list that can be used to create a list of select menu options"},{title:"param",type:{name:"number"},name:"options",description:"[].index - Optional - The index of the option"},{title:"param",type:{name:"union",elements:[{name:"number"},{name:"string"}]},name:"options",description:"[].value - Required - The option value"},{title:"param",type:{name:"string"},name:"options",description:"[].label - Required - The option Label"}]},type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"size",description:"Controls the size of the select",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"labelClass",description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",description:"Used to customize the description container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"selectClass",description:"Used to customize the select",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"optionClass",description:"Used to customize each option, should options be provided via prop",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"descriptionChildProps",description:"A set of props that are passed into the description container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"optionChildProps",description:"A set of props that are passed into each option, should options be provided via prop",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"disabled",description:"Disabled state of the select",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"input",description:"Native input event",type:{names:["String | Number"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]},{name:"change",description:"Native change event",type:{names:["String | Number"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]}],slots:[{name:"label",description:"Slot for label, defaults to label prop"},{name:"description",description:"Slot for description, defaults to description prop"},{name:"default",description:"Slot for select menu options, defaults to options prop"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input.js","/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu.vue"]};const N={name:"DtSelectMenuDefault",components:{DtSelectMenu:V,htmlFragment:Z}},pe=["innerHTML"],de=["innerHTML"];function ce(e,o,t,d,i,p){const s=b("html-fragment"),l=b("dt-select-menu");return n(),D(l,{label:e.$attrs.label,options:e.$attrs.options,size:e.$attrs.size,description:e.$attrs.description,"show-messages":e.$attrs.showMessages,messages:e.$attrs.messages,name:e.$attrs.name,value:e.$attrs.value,disabled:e.$attrs.disabled,"label-class":e.$attrs.labelClass,"description-class":e.$attrs.descriptionClass,"select-class":e.$attrs.selectClass,"option-class":e.$attrs.optionClass,"messages-class":e.$attrs.messagesClass,"label-child-props":e.$attrs.labelChildProps,"description-child-props":e.$attrs.descriptionChildProps,"option-child-props":e.$attrs.optionChildProps,"messages-child-props":e.$attrs.messagesChildProps,onInput:e.$attrs.onInput,onChange:e.$attrs.onChange},q({default:c(()=>[e.defaultSlot?(n(),D(s,{key:0,html:e.defaultSlot},null,8,["html"])):v("",!0)]),_:2},[e.$attrs.labelSlot?{name:"label",fn:c(()=>[f("span",{innerHTML:e.$attrs.labelSlot},null,8,pe)]),key:"0"}:void 0,e.$attrs.descriptionSlot?{name:"description",fn:c(()=>[f("span",{innerHTML:e.$attrs.descriptionSlot},null,8,de)]),key:"1"}:void 0]),1032,["label","options","size","description","show-messages","messages","name","value","disabled","label-class","description-class","select-class","option-class","messages-class","label-child-props","description-child-props","option-child-props","messages-child-props","onInput","onChange"])}const ue=E(N,[["render",ce]]);N.__docgenInfo={displayName:"DtSelectMenuDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu_default.story.vue"]};const k={name:"DtSelectMenuVariants",components:{DtSelectMenu:V},setup(){return{VALIDATION_MESSAGE_TYPES:Y}}},me={id:"components-select-menu--variants-container",class:"d-d-flex d-fd-column d-stack32"},he=["value"];function fe(e,o,t,d,i,p){const s=b("dt-select-menu");return n(),r("div",me,[a(s,{id:"default",name:"default",label:"Default",options:e.$attrs.options},null,8,["options"]),a(s,{id:"with-description",name:"with-description",label:"With",description:"Description",options:e.$attrs.options},null,8,["options"]),a(s,{id:"with-slotted-label",name:"with-slotted-label",options:e.$attrs.options},{label:c(()=>[y(" With Slotted Label ")]),_:1},8,["options"]),a(s,{id:"with-slotted-description",name:"with-slotted-description",label:"With",options:e.$attrs.options},{description:c(()=>[y(" Slotted Description ")]),_:1},8,["options"]),a(s,{id:"with-slotted-options",name:"with-slotted-options",label:"With Slotted Options"},{default:c(()=>[(n(!0),r(L,null,j(e.$attrs.options,l=>(n(),r("option",{key:`with-slotted-options-${l.value}`,value:l.value},g(l.label),9,he))),128))]),_:1}),a(s,{id:"with-error-message",name:"with-error-message",label:"With Error Message",options:e.$attrs.options,messages:[{message:"Error",type:d.VALIDATION_MESSAGE_TYPES.ERROR}]},null,8,["options","messages"]),a(s,{id:"with-error-messages-hidden",name:"with-error-messages-hidden",label:"With Error Messages Hidden",options:e.$attrs.options,messages:[{message:"Error",type:d.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1},null,8,["options","messages"]),a(s,{id:"with-success-message",name:"with-success-message",label:"With Success Message",options:e.$attrs.options,messages:[{message:"Success",type:d.VALIDATION_MESSAGE_TYPES.SUCCESS}]},null,8,["options","messages"]),a(s,{id:"with-warning-message",name:"with-warning-message",label:"With Warning Message",options:e.$attrs.options,messages:[{message:"Warning",type:d.VALIDATION_MESSAGE_TYPES.WARNING}]},null,8,["options","messages"]),a(s,{id:"disabled",name:"disabled",label:"Disabled",options:e.$attrs.options,disabled:""},null,8,["options"]),a(s,{id:"extra-small",name:"extra-small",label:"Extra Small",options:e.$attrs.options,size:"xs"},null,8,["options"]),a(s,{id:"small",name:"small",label:"Small",options:e.$attrs.options,size:"sm"},null,8,["options"]),a(s,{id:"large",name:"large",label:"Large",options:e.$attrs.options,size:"lg"},null,8,["options"]),a(s,{id:"extra-large",name:"extra-large",label:"Extra Large",options:e.$attrs.options,size:"xl"},null,8,["options"])])}const ge=E(k,[["render",fe]]);k.__docgenInfo={displayName:"DtSelectMenuVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu_variants.story.vue"]};const _=[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],R={label:"Label",size:"md",name:"",disabled:!1,value:_[0].value,options:_,onInput:M("input"),onChange:M("change")},F={labelSlot:{name:"label",description:"Slot for label, defaults to label prop",control:"text",table:{category:"slots",type:{summary:"VNode"}}},descriptionSlot:{name:"description",description:"Slot for description, defaults to description prop",control:"text",table:{category:"slots",type:{summary:"VNode"}}},default:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{description:"Label for the select",table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},description:{description:"Describes the select",table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},options:{control:{type:"object"},table:{category:"props",type:{summary:"object"},defaultValue:{summary:[]}}},size:{description:"Controls the size of the select",options:Object.keys(C),control:{type:"select"},table:{category:"props",type:{summary:"string"}}},labelClass:{description:"Pass through classes. Used to customize the label container"},descriptionClass:{description:"Pass through classes. Used to customize the description container"},selectClass:{description:"Pass through classes. Used to customize the select"},optionClass:{description:"Pass through classes. Used to customize each option, should options be provided via prop"},messagesClass:{description:"Pass through classes. Used to customize the the validation messages component"},labelChildProps:{description:"Pass through props. A set of props that are passed into the label container"},descriptionChildProps:{description:"Pass through props. A set of props that are passed into the description container"},optionChildProps:{description:`Pass through props. A set of props that are passed into each option,
     should options be provided via prop`},messagesChildProps:{description:"Pass through props. A set of props that are passed into the validation messages component"},value:{description:"HTML select value attribute. Provides a value for the select",options:_.map(e=>e.value),control:{type:"select"},table:{category:"html attributes",type:{summary:"string"},defaultValue:{summary:""}}},name:{description:"HTML select name attribute. Provides a name for the select",control:{type:"text"},table:{category:"html attributes",type:{summary:"string"},defaultValue:{summary:""}}},disabled:{description:"HTML select disabled attribute. Disables the select",control:{type:"boolean"},table:{category:"html attributes",type:{summary:"boolean"},defaultValue:{summary:!1}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},onChange:{table:{disable:!0}}},be={title:"Components/Select Menu",component:V,args:R,argTypes:F,excludeStories:/.*Data$/},ye=(e,{argTypes:o})=>A(e,o,ue),Se=(e,{argTypes:o})=>A(e,o,ge),m={render:ye,args:{}},h={render:Se,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var I,O,P;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var T,$,w;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=($=h.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const ve=["argsData","argTypesData","Default","Variants"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Variants:h,__namedExportsOrder:ve,argTypesData:F,argsData:R,default:be},Symbol.toStringTag,{value:"Module"}));export{m as D,Oe as S,h as V};
//# sourceMappingURL=select_menu.stories-81j5DSFo.js.map