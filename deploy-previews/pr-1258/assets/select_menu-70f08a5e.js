import{s as b,u as y,p as i,e as u,m as l,f as o,g as p,k as v,x as S,y as _,o as r,z as m,A as c,F as C,B as O}from"./vue.esm-bundler-a1916ad5.js";import{L as E,d as V,h as I,b as M,g as x}from"./utils-3a75643c.js";import{M as j}from"./input-6cfd5006.js";import{D}from"./validation_messages-5a1965fa.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const f={xs:"d-select--xs",sm:"d-select--sm",md:"",lg:"d-select--lg",xl:"d-select--xl"},P={error:"d-select__input--error",warning:"d-select__input--warning",success:"d-select__input--success"},L=e=>!e.index||typeof e.index=="number",w=e=>e.value?typeof e.value=="string"||typeof e.value=="number":!1,T=e=>e.label?typeof e.label=="string":!1,z=e=>e?e.every(s=>!(!L(s)||!w(s)||!T(s))):!0,h={name:"DtSelectMenu",components:{DtValidationMessages:D},mixins:[j],inheritAttrs:!1,props:{label:{type:String,default:""},description:{type:String,default:""},options:{type:Array,default:()=>[],validator:e=>z(e)},size:{type:String,default:"md",validator:e=>Object.keys(f).includes(e)},labelClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""},selectClass:{type:[String,Array,Object],default:""},optionClass:{type:[String,Array,Object],default:""},labelChildProps:{type:Object,default:()=>({})},descriptionChildProps:{type:Object,default:()=>({})},optionChildProps:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1}},emits:["input","change"],data(){return{LABEL_SIZE_MODIFIERS:E,DESCRIPTION_SIZE_MODIFIERS:V,SELECT_SIZE_MODIFIERS:f,SELECT_STATE_MODIFIERS:P,hasSlotContent:I}},computed:{selectListeners(){return{input:()=>{},change:e=>this.emitValue(e.target.value,e)}},state(){return M(this.formattedMessages)},selectKey(){return x()},descriptionKey(){return`select-${this.selectKey}-description`},labelAriaDetails(){return this.$slots.description||this.description?this.descriptionKey:this.$attrs["aria-details"]}},mounted(){this.validateOptionsPresence()},beforeUpdate(){this.validateOptionsPresence()},methods:{emitValue(e,s){this.$emit("input",e,s),this.$emit("change",e,s)},getOptionKey(e){return`select-${this.selectKey}-option-${e}`},validateOptionsPresence(){var e;((e=this.options)==null?void 0:e.length)<1&&!this.$slots.default&&b("Options are expected to be provided via prop or slot",this)}}},N=["aria-details"],R=["id"],F=["disabled"],k=["value"];function q(e,s,t,B,a,n){const g=y("dt-validation-messages");return r(),i("div",null,[u("label",null,[a.hasSlotContent(e.$slots.label)||t.label?(r(),i("div",l({key:0,"aria-details":n.labelAriaDetails,class:["d-label",a.LABEL_SIZE_MODIFIERS[t.size],t.labelClass]},t.labelChildProps,{"data-qa":"dt-select-label"}),[o(" @slot Slot for label, defaults to label prop "),p(e.$slots,"label",{},()=>[m(c(t.label),1)])],16,N)):o("v-if",!0),a.hasSlotContent(e.$slots.description)||t.description?(r(),i("div",l({key:1,id:n.descriptionKey,class:["d-description",a.DESCRIPTION_SIZE_MODIFIERS[t.size],t.descriptionClass]},t.descriptionChildProps,{"data-qa":"dt-select-description"}),[o(" @slot Slot for description, defaults to description prop "),p(e.$slots,"description",{},()=>[m(c(t.description),1)])],16,R)):o("v-if",!0),u("div",{class:v(["d-select",a.SELECT_SIZE_MODIFIERS[t.size],t.selectClass,{"d-select--disabled":t.disabled}]),"data-qa":"dt-select-wrapper"},[u("select",l({class:["d-select__input",a.SELECT_STATE_MODIFIERS[n.state]]},e.$attrs,{"data-qa":"dt-select",disabled:t.disabled},S(n.selectListeners,!0)),[o(" @slot Slot for select menu options, defaults to options prop "),p(e.$slots,"default",{},()=>[(r(!0),i(C,null,O(t.options,d=>(r(),i("option",l({key:n.getOptionKey(d.value),value:d.value,class:t.optionClass},t.optionChildProps),c(d.label),17,k))),128))])],16,F)],2)]),_(g,l({"validation-messages":e.formattedMessages,"show-messages":e.showMessages,class:e.messagesClass},e.messagesChildProps,{"data-qa":"dt-select-messages"}),null,16,["validation-messages","show-messages","class"])])}const J=A(h,[["render",q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu.vue"]]);h.__docgenInfo={description:"A select menu is an input control that allows users to choose one option from a list.",displayName:"DtSelectMenu",tags:{property:[{title:"property",type:{name:"Boolean"},name:"disabled",description:"attribute"},{title:"property",type:{name:"String"},name:"name",description:"attribute"},{title:"property",type:{name:"String"},name:"value",description:"attribute"}],see:[{description:"https://dialpad.design/components/select.html",title:"see"}]},exportName:"default",props:[{name:"messagesClass",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the validation messages component",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesChildProps",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the validation messages component",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showMessages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to hide / show the validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"messages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",description:"Label for the select",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:"Description for the select",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"options",description:"Select Menu Options, overridden by default slot. Each option has the following structure:\n`{ index: number (optional), value: number || string (required), label: string (required) }`",tags:{params:[{title:"param",type:{name:"Object[]"},name:"options",description:"Optional - A list that can be used to create a list of select menu options"},{title:"param",type:{name:"number"},name:"options",description:"[].index - Optional - The index of the option"},{title:"param",type:{name:"union",elements:[{name:"number"},{name:"string"}]},name:"options",description:"[].value - Required - The option value"},{title:"param",type:{name:"string"},name:"options",description:"[].label - Required - The option Label"}]},type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"size",description:"Controls the size of the select",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"labelClass",description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",description:"Used to customize the description container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"selectClass",description:"Used to customize the select",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"optionClass",description:"Used to customize each option, should options be provided via prop",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"descriptionChildProps",description:"A set of props that are passed into the description container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"optionChildProps",description:"A set of props that are passed into each option, should options be provided via prop",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"disabled",description:"Disabled state of the select",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"input",description:"Native input event",type:{names:["String | Number"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]},{name:"change",description:"Native change event",type:{names:["String | Number"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]}],slots:[{name:"label",description:"Slot for label, defaults to label prop"},{name:"description",description:"Slot for description, defaults to description prop"},{name:"default",description:"Slot for select menu options, defaults to options prop"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input.js","/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu.vue"]};export{J as D,f as S};
//# sourceMappingURL=select_menu-70f08a5e.js.map
