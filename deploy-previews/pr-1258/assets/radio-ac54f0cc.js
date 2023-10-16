import{I as f,C as h,G as v,M as g}from"./input-6cfd5006.js";import{R as x}from"./radio_constants-4f6325c5.js";import{D as b}from"./validation_messages-5a1965fa.js";import{h as y}from"./utils-3a75643c.js";import{u as V,p as s,e as a,m as i,x as M,f as n,g as o,y as C,k as j,o as l,z as m,A as r}from"./vue.esm-bundler-a1916ad5.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const u={name:"DtRadio",components:{DtValidationMessages:b},mixins:[f,h,v,g],inheritAttrs:!1,props:{value:{type:[String,Number],default:""}},emits:["input","focus","focusin","focusout","click"],data(){return{hasSlotContent:y}},computed:{inputValidationClass(){return x[this.internalValidationState]},radioGroupValue(){var e;return(e=this.groupContext)==null?void 0:e.selectedValue},inputListeners(){return{input:()=>{},focusin:e=>this.$emit("focusin",e),focusout:e=>this.$emit("focusout",e),change:e=>this.emitValue(e.target.value)}}},watch:{radioGroupValue:{immediate:!0,handler(e){this.hasGroup&&(this.internalChecked=e===this.value)}}},methods:{emitValue(e){e!==this.radioGroupValue&&(this.setGroupValue(e),this.$emit("input",e))}}},I={class:"d-radio__input"},N=["checked","name","value","disabled"],D={class:"d-radio__copy d-radio__label","data-qa":"radio-label-description-container"};function w(e,S,p,_,d,t){const c=V("dt-validation-messages");return l(),s("label",null,[a("div",{class:j(["d-radio-group",{"d-radio-group--disabled":e.internalDisabled}])},[a("div",I,[a("input",i({checked:e.internalChecked,name:e.internalName,value:p.value,disabled:e.internalDisabled,type:"radio",class:["d-radio",t.inputValidationClass,e.inputClass]},e.$attrs,M(t.inputListeners,!0)),null,16,N)]),a("div",D,[a("div",i({class:e.labelClass},e.labelChildProps,{"data-qa":"radio-label"}),[n(" @slot slot for Radio Label "),o(e.$slots,"default",{},()=>[m(r(e.label),1)])],16),d.hasSlotContent(e.$slots.description)||e.description?(l(),s("div",i({key:0,class:["d-description",e.descriptionClass]},e.descriptionChildProps,{"data-qa":"radio-description"}),[n(" @slot slot for Radio Description "),o(e.$slots,"description",{},()=>[m(r(e.description),1)])],16)):n("v-if",!0),C(c,i({"validation-messages":e.formattedMessages,"show-messages":e.showMessages,class:e.messagesClass},e.messagesChildProps,{"data-qa":"dt-radio-validation-messages"}),null,16,["validation-messages","show-messages","class"])])],2)])}const $=k(u,[["render",w],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/radio/radio.vue"]]);u.__docgenInfo={description:`Radios are control elements that allow the user to make a single selection.
They are typically used in a Radio Group which allows the user to make a selection from a list of options.`,displayName:"DtRadio",tags:{see:[{description:"https://dialpad.design/components/radio.html",title:"see"}]},exportName:"default",props:[{name:"label",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A provided label for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"The name of the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"v-model",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to set the state of the checkable input",tags:{model:[{description:"checked",title:"model"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"description",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Describes the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Disables the input",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validationState",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"The validation state of the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the input element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the description container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"descriptionChildProps",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the description container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"indeterminate",mixin:{name:"Checkable Mixin",path:"../../common/mixins/input.js"},description:"Indeterminate State, toggling indeterminate checkbox will uncheck",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",mixin:{name:"Checkable Mixin",path:"../../common/mixins/input.js"},description:"A provided value for the radio",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"messagesClass",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the validation messages component",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesChildProps",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the validation messages component",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showMessages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to hide / show the validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"messages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"input",description:"Native input event",type:{names:["String | Number"]}},{name:"focus",description:"Native input focus event",type:{names:["FocusEvent"]}},{name:"focusin",description:"Native input focusin event",type:{names:["undefined"]},properties:[{type:{names:["FocusEvent"]}}]},{name:"focusout",description:"Native input focusout event",type:{names:["undefined"]},properties:[{type:{names:["FocusEvent"]}}]},{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default",description:"slot for Radio Label"},{name:"description",description:"slot for Radio Description"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input.js","/home/runner/work/dialtone-vue/dialtone-vue/components/radio/radio.vue"]};export{$ as D};
//# sourceMappingURL=radio-ac54f0cc.js.map
