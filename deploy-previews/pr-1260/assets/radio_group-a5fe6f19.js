import{D as t}from"./input_group-2d5b1665.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";const n={name:"DtRadioGroup",extends:t,props:{value:{type:[String,Number],default:""},dataQaGroup:{type:String,default:"radio-group"},dataQaGroupLegend:{type:String,default:"radio-group-legend"},dataQaGroupMessages:{type:String,default:"radio-group-messages"}},emits:["input"],data(){return{internalValue:this.value}},watch:{value(e){this.internalValue=e},internalValue:{immediate:!0,handler(e){this.provideObj.selectedValue=e}}},methods:{setGroupValue(e){this.$emit("input",e)},getMessageKey(e,a){return`radio-group-message-${e}-${a}-${this.id}`}}},s=i(n,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group.vue"]]);n.__docgenInfo={description:"Radio Groups are control elements that allow the user to make a single selection from a list of options.",displayName:"DtRadioGroup",tags:{see:[{description:"https://dialpad.design/components/radio_group.html",title:"see"}]},exportName:"default",props:[{name:"id",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The id of the input group",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"value",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The value of the input group",type:{name:"string|number|boolean|object"},defaultValue:{func:!1,value:"null"}},{name:"name",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The name of the input group",type:{name:"string"},required:!0},{name:"legend",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The legend of the input group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Disables the input group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"messages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Show validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"legendClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the legend element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the messages container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"legendChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the legend element",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"messagesChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the messages container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"dataQaGroup",description:"A data qa tag for the radio group",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group'"}},{name:"dataQaGroupLegend",description:"A data qa tag for the radio group legend",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group-legend'"}},{name:"dataQaGroupMessages",description:"A data qa tag for the radio group messages",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group-messages'"}},{name:"v-model",description:"A provided value for the radio group",tags:{model:[{description:"value",title:"model"}]},type:{name:"string|number"},defaultValue:{func:!1,value:"''"}}],events:[{name:"input",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Native input event",type:{names:["String | Number"]}}],slots:[{name:"legend",description:"slot for Input Group Legend"},{name:"default",description:"slot for Input Group Components"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input_group.js","/home/runner/work/dialtone-vue/dialtone-vue/components/input_group/input_group.vue","/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group.vue"]};export{s as D};
//# sourceMappingURL=radio_group-a5fe6f19.js.map
