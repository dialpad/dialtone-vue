import{I as n,C as o,G as r,M as l}from"./input-35565ad2.js";import{D as c}from"./validation_messages-b7867d4b.js";import{n as d}from"./_plugin-vue2_normalizer-bbedbd26.js";const h={error:"d-checkbox--error",warning:"d-checkbox--warning",success:"d-checkbox--success"},u={name:"DtCheckbox",components:{DtValidationMessages:c},mixins:[n,o,r,l],inheritAttrs:!1,emits:["input","focusin","focusout"],computed:{inputValidationClass(){return h[this.internalValidationState]},checkboxGroupValueChecked(){var t,e;return((e=(t=this.groupContext)==null?void 0:t.selectedValues)==null?void 0:e.includes(this.value))??!1},hasLabel(){return!!(this.$slots.default||this.label)},hasDescription(){return!!(this.$slots.description||this.description)},hasLabelOrDescription(){return this.hasLabel||this.hasDescription},inputListeners(){return{...this.$listeners,input:()=>{},change:t=>this.emitValue(t.target)}}},watch:{checkboxGroupValueChecked:{immediate:!0,handler(t){this.hasGroup&&(this.internalChecked=t)}}},mounted(){this.runValidations()},methods:{emitValue(t){let{value:e,checked:s}=t;this.internalIndeterminate&&(s=!1,this.internalIndeterminate=!1,t.checked=!1),this.setGroupValue(e,s),this.$emit("input",s)},runValidations(){this.validateInputLabels(this.hasLabel,this.$attrs["aria-label"])}}};var i=function(){var e=this,s=e._self._c;return s("label",[s("div",{class:["d-checkbox-group",{"d-checkbox-group--disabled":e.internalDisabled}]},[s("div",{staticClass:"d-checkbox__input"},[s("input",e._g(e._b({class:["d-checkbox",e.inputValidationClass,e.inputClass],attrs:{type:"checkbox",name:e.internalName,disabled:e.internalDisabled},domProps:{checked:e.internalChecked,value:e.value,indeterminate:e.internalIndeterminate}},"input",e.$attrs,!1),e.inputListeners))]),e.hasLabelOrDescription?s("div",{staticClass:"d-checkbox__copy d-checkbox__label",attrs:{"data-qa":"checkbox-label-description-container"}},[e.hasLabel?s("div",e._b({class:e.labelClass,attrs:{"data-qa":"checkbox-label"}},"div",e.labelChildProps,!1),[e._t("default",function(){return[e._v(e._s(e.label))]})],2):e._e(),e.hasDescription?s("div",e._b({class:["d-description",e.descriptionClass],attrs:{"data-qa":"checkbox-description"}},"div",e.descriptionChildProps,!1),[e._t("description",function(){return[e._v(e._s(e.description))]})],2):e._e(),s("dt-validation-messages",e._b({class:e.messagesClass,attrs:{"validation-messages":e.formattedMessages,"show-messages":e.showMessages,"data-qa":"dt-checkbox-validation-messages"}},"dt-validation-messages",e.messagesChildProps,!1))],1):e._e()])])},p=[];i._withStripped=!0;var a=d(u,i,p,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox/checkbox.vue";const k=a.exports;a.exports.__docgenInfo={displayName:"DtCheckbox",description:`Checkboxes are control elements that allow the user to make a selection.They are typically used in a
Checkbox Group which allows the user to make one or more selections from a list of options.`,tags:{see:[{description:"https://dialpad.design/components/checkbox.html",title:"see"}]},exportName:"default",events:[{name:"input",description:"Native input event",type:{names:["Boolean"]}},{name:"focusin",description:"Native input focusin event",type:{names:["FocusEvent"]}},{name:"focusout",description:"Native input focusout event",type:{names:["FocusEvent"]}}],slots:[{name:"default",description:"slot for Checkbox Label"},{name:"description",description:"slot for Checkbox Description"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox/checkbox.vue"]};export{k as D};
//# sourceMappingURL=checkbox-e272f476.js.map
