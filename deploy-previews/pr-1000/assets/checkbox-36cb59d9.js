import{I as h,C as f,G as b,M as x}from"./input-1e6076b8.js";import{D as v}from"./validation_messages-d11443f7.js";import{a as k,f as t,g as c,m as o,B as g,k as i,l as m,d as C,n as y,o as l,s as u,t as r}from"./vue.esm-bundler-e62bdd6b.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const M={error:"d-checkbox--error",warning:"d-checkbox--warning",success:"d-checkbox--success"},p={name:"DtCheckbox",components:{DtValidationMessages:v},mixins:[h,f,b,x],inheritAttrs:!1,emits:["input","focusin","focusout"],computed:{inputValidationClass(){return M[this.internalValidationState]},checkboxGroupValueChecked(){var e,a;return((a=(e=this.groupContext)==null?void 0:e.selectedValues)==null?void 0:a.includes(this.value))??!1},hasLabel(){return!!(this.$slots.default||this.label)},hasDescription(){return!!(this.$slots.description||this.description)},hasLabelOrDescription(){return this.hasLabel||this.hasDescription},inputListeners(){return{input:()=>{},focusin:e=>this.$emit("focusin",e),focusout:e=>this.$emit("focusout",e),change:e=>this.emitValue(e.target)}}},watch:{checkboxGroupValueChecked:{immediate:!0,handler(e){this.hasGroup&&(this.internalChecked=e)}}},mounted(){this.runValidations()},methods:{emitValue(e){let{value:a,checked:s}=e;this.internalIndeterminate&&(s=!1,this.internalIndeterminate=!1,e.checked=!1),this.setGroupValue(a,s),this.$emit("input",s)},runValidations(){this.validateInputLabels(this.hasLabel,this.$attrs["aria-label"])}}},j={class:"d-checkbox__input"},I=["checked","name","value","disabled",".indeterminate"],D={key:0,class:"d-checkbox__copy d-checkbox__label","data-qa":"checkbox-label-description-container"};function w(e,a,s,L,N,n){const d=k("dt-validation-messages");return l(),t("label",null,[c("div",{class:y(["d-checkbox-group",{"d-checkbox-group--disabled":e.internalDisabled}])},[c("div",j,[c("input",o({type:"checkbox",checked:e.internalChecked,name:e.internalName,value:e.value,disabled:e.internalDisabled,class:["d-checkbox",n.inputValidationClass,e.inputClass]},e.$attrs,{".indeterminate":e.internalIndeterminate},g(n.inputListeners,!0)),null,16,I)]),n.hasLabelOrDescription?(l(),t("div",D,[n.hasLabel?(l(),t("div",o({key:0,class:e.labelClass},e.labelChildProps,{"data-qa":"checkbox-label"}),[i(" @slot slot for Checkbox Label "),m(e.$slots,"default",{},()=>[u(r(e.label),1)])],16)):i("v-if",!0),n.hasDescription?(l(),t("div",o({key:1,class:["d-description",e.descriptionClass]},e.descriptionChildProps,{"data-qa":"checkbox-description"}),[i(" @slot slot for Checkbox Description "),m(e.$slots,"description",{},()=>[u(r(e.description),1)])],16)):i("v-if",!0),C(d,o({"validation-messages":e.formattedMessages,"show-messages":e.showMessages,class:e.messagesClass},e.messagesChildProps,{"data-qa":"dt-checkbox-validation-messages"}),null,16,["validation-messages","show-messages","class"])])):i("v-if",!0)],2)])}const $=V(p,[["render",w],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox/checkbox.vue"]]);p.__docgenInfo={description:`Checkboxes are control elements that allow the user to make a selection.They are typically used in a
Checkbox Group which allows the user to make one or more selections from a list of options.`,displayName:"DtCheckbox",tags:{see:[{description:"https://dialpad.design/components/checkbox.html",title:"see"}]},exportName:"default",props:[{name:"label",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A provided label for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"The name of the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"v-model",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to set the state of the checkable input",tags:{model:[{description:"checked",title:"model"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"description",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Describes the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Disables the input",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validationState",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"The validation state of the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the input element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the description container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"descriptionChildProps",mixin:{name:"Input Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the description container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"indeterminate",mixin:{name:"Checkable Mixin",path:"../../common/mixins/input.js"},description:"Indeterminate State, toggling indeterminate checkbox will uncheck",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",mixin:{name:"Checkable Mixin",path:"../../common/mixins/input.js"},description:"The value of the input",type:{name:"string|number|boolean"},defaultValue:{func:!1,value:"null"}},{name:"messagesClass",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the validation messages component",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesChildProps",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the validation messages component",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showMessages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to hide / show the validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"messages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"input",description:"Native input event",type:{names:["Boolean"]}},{name:"focusin",description:"Native input focusin event",type:{names:["FocusEvent"]}},{name:"focusout",description:"Native input focusout event",type:{names:["FocusEvent"]}}],slots:[{name:"default",description:"slot for Checkbox Label"},{name:"description",description:"slot for Checkbox Description"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input.js","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox/checkbox.vue"]};export{$ as D};
//# sourceMappingURL=checkbox-36cb59d9.js.map
