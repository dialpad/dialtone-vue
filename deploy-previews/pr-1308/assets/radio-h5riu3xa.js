import{I as s,C as o,G as l,M as r}from"./input-xXAJRBSl.js";import{R as m}from"./radio_constants-Cj2y7V-3.js";import{D as u}from"./validation_messages-zPEYqonU.js";import{n as p}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const d={name:"DtRadio",components:{DtValidationMessages:u},mixins:[s,o,l,r],inheritAttrs:!1,props:{value:{type:[String,Number],default:""}},emits:["input","focusin","focusout"],computed:{inputValidationClass(){return m[this.internalValidationState]},radioGroupValue(){var i;return(i=this.groupContext)==null?void 0:i.selectedValue},inputListeners(){return{...this.$listeners,input:()=>{},change:i=>this.emitValue(i.target.value)}}},watch:{radioGroupValue:{immediate:!0,handler(i){this.hasGroup&&(this.internalChecked=i===this.value)}}},methods:{emitValue(i){i!==this.radioGroupValue&&(this.setGroupValue(i),this.$emit("input",i))}}};var n=function(){var e=this,a=e._self._c;return a("div",[a("label",[a("div",{class:["d-radio-group",{"d-radio-group--disabled":e.internalDisabled}]},[a("div",{staticClass:"d-radio__input"},[a("input",e._g(e._b({class:["d-radio",e.inputValidationClass,e.inputClass],attrs:{name:e.internalName,disabled:e.internalDisabled,type:"radio"},domProps:{checked:e.internalChecked,value:e.value}},"input",e.$attrs,!1),e.inputListeners))]),a("div",{staticClass:"d-radio__copy d-radio__label",attrs:{"data-qa":"radio-label-description-container"}},[a("div",e._b({class:e.labelClass,attrs:{"data-qa":"radio-label"}},"div",e.labelChildProps,!1),[e._t("default",function(){return[e._v(e._s(e.label))]})],2),e.$slots.description||e.description?a("div",e._b({class:["d-description",e.descriptionClass],attrs:{"data-qa":"radio-description"}},"div",e.descriptionChildProps,!1),[e._t("description",function(){return[e._v(e._s(e.description))]})],2):e._e(),a("dt-validation-messages",e._b({class:e.messagesClass,attrs:{"validation-messages":e.formattedMessages,"show-messages":e.showMessages,"data-qa":"dt-radio-validation-messages"}},"dt-validation-messages",e.messagesChildProps,!1))],1)])])])},c=[];n._withStripped=!0;var t=p(d,n,c,!1,null,null,null,null);t.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/radio/radio.vue";const g=t.exports;t.exports.__docgenInfo={description:`Radios are control elements that allow the user to make a single selection.
They are typically used in a Radio Group which allows the user to make a selection from a list of options.`,displayName:"DtRadio",tags:{see:[{description:"https://dialpad.design/components/radio.html",title:"see"}]},exportName:"default",props:[{name:"label",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A provided label for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"The name of the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"v-model",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to set the state of the checkable input",tags:{model:[{description:"checked",title:"model"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"description",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Describes the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Disables the input",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validationState",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"The validation state of the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the input element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the description container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"descriptionChildProps",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the description container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"indeterminate",mixin:{name:"Checkable Mixin",path:"../../common/mixins/input.js"},description:"Indeterminate State, toggling indeterminate checkbox will uncheck",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",mixin:{name:"Checkable Mixin",path:"../../common/mixins/input.js"},description:"A provided value for the radio",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"messagesClass",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the validation messages component",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesChildProps",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the validation messages component",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showMessages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to hide / show the validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"messages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"input",description:"Native input event",type:{names:["String | Number"]}},{name:"focusin",description:"Native input focusin event",properties:[{type:{names:["FocusEvent"]}}]},{name:"focusout",description:"Native input focusout event",properties:[{type:{names:["FocusEvent"]}}]}],slots:[{name:"default",description:"slot for Radio Label"},{name:"description",description:"slot for Radio Description"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input.js","/home/runner/work/dialtone-vue/dialtone-vue/components/radio/radio.vue"]};export{g as D};
//# sourceMappingURL=radio-h5riu3xa.js.map
