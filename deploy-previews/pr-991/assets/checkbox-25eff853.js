import{I as s,C as o,G as l,M as c}from"./input-4cf24bd3.js";import{D as u}from"./validation_messages-2f1bfcea.js";import{n as m}from"./_plugin-vue2_normalizer-2bbd088e.js";const r={error:"d-checkbox--error",warning:"d-checkbox--warning",success:"d-checkbox--success"},p={name:"DtCheckbox",components:{DtValidationMessages:u},mixins:[s,o,l,c],inheritAttrs:!1,emits:["input","focusin","focusout"],computed:{inputValidationClass(){return r[this.internalValidationState]},checkboxGroupValueChecked(){var n,e;return((e=(n=this.groupContext)==null?void 0:n.selectedValues)==null?void 0:e.includes(this.value))??!1},hasLabel(){return!!(this.$slots.default||this.label)},hasDescription(){return!!(this.$slots.description||this.description)},hasLabelOrDescription(){return this.hasLabel||this.hasDescription},inputListeners(){return{...this.$listeners,input:()=>{},change:n=>this.emitValue(n.target)}}},watch:{checkboxGroupValueChecked:{immediate:!0,handler(n){this.hasGroup&&(this.internalChecked=n)}}},mounted(){this.runValidations()},methods:{emitValue(n){let{value:e,checked:t}=n;this.internalIndeterminate&&(t=!1,this.internalIndeterminate=!1,n.checked=!1),this.setGroupValue(e,t),this.$emit("input",t)},runValidations(){this.validateInputLabels(this.hasLabel,this.$attrs["aria-label"])}}};var a=function(){var e=this,t=e._self._c;return t("label",[t("div",{class:["d-checkbox-group",{"d-checkbox-group--disabled":e.internalDisabled}]},[t("div",{staticClass:"d-checkbox__input"},[t("input",e._g(e._b({class:["d-checkbox",e.inputValidationClass,e.inputClass],attrs:{type:"checkbox",name:e.internalName,disabled:e.internalDisabled},domProps:{checked:e.internalChecked,value:e.value,indeterminate:e.internalIndeterminate}},"input",e.$attrs,!1),e.inputListeners))]),e.hasLabelOrDescription?t("div",{staticClass:"d-checkbox__copy d-checkbox__label",attrs:{"data-qa":"checkbox-label-description-container"}},[e.hasLabel?t("div",e._b({class:e.labelClass,attrs:{"data-qa":"checkbox-label"}},"div",e.labelChildProps,!1),[e._t("default",function(){return[e._v(e._s(e.label))]})],2):e._e(),e.hasDescription?t("div",e._b({class:["d-description",e.descriptionClass],attrs:{"data-qa":"checkbox-description"}},"div",e.descriptionChildProps,!1),[e._t("description",function(){return[e._v(e._s(e.description))]})],2):e._e(),t("dt-validation-messages",e._b({class:e.messagesClass,attrs:{"validation-messages":e.formattedMessages,"show-messages":e.showMessages,"data-qa":"dt-checkbox-validation-messages"}},"dt-validation-messages",e.messagesChildProps,!1))],1):e._e()])])},d=[];a._withStripped=!0;var i=m(p,a,d,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox/checkbox.vue";const b=i.exports;i.exports.__docgenInfo={description:`Checkboxes are control elements that allow the user to make a selection.They are typically used in a
Checkbox Group which allows the user to make one or more selections from a list of options.`,displayName:"DtCheckbox",tags:{see:[{description:"https://dialpad.design/components/checkbox.html",title:"see"}]},exportName:"default",props:[{name:"label",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A provided label for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"The name of the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"v-model",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to set the state of the checkable input",tags:{model:[{description:"checked",title:"model"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"description",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Describes the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Disables the input",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validationState",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"The validation state of the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the input element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the description container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"descriptionChildProps",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the description container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"indeterminate",mixin:{name:"Checkable Mixin",path:"../../common/mixins/input.js"},description:"Indeterminate State, toggling indeterminate checkbox will uncheck",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",mixin:{name:"Checkable Mixin",path:"../../common/mixins/input.js"},description:"The value of the input",type:{name:"string|number|boolean"},defaultValue:{func:!1,value:"null"}},{name:"messagesClass",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the validation messages component",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesChildProps",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the validation messages component",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showMessages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to hide / show the validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"messages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"input",description:"Native input event",type:{names:["Boolean"]}},{name:"focusin",description:"Native input focusin event",type:{names:["FocusEvent"]}},{name:"focusout",description:"Native input focusout event",type:{names:["FocusEvent"]}}],slots:[{name:"default",description:"slot for Checkbox Label"},{name:"description",description:"slot for Checkbox Description"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input.js","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox/checkbox.vue"]};export{b as D};
//# sourceMappingURL=checkbox-25eff853.js.map
