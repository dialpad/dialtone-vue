import{s as o}from"./vue.esm-bundler-a1916ad5.js";import{D as i}from"./input_group-e61d4bfe.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";const t={name:"DtCheckboxGroup",extends:i,model:{prop:"selectedValues"},props:{value:{type:[],default:null,validator:e=>e?(o("Component uses selectedValues to initialize the model, value is not supported by this component",globalThis),!1):!0},selectedValues:{type:Array,default(){return[]}},dataQaGroup:{type:String,default:"checkbox-group"},dataQaGroupLegend:{type:String,default:"checkbox-group-legend"},dataQaGroupMessages:{type:String,default:"checkbox-group-messages"}},emits:["input"],data(){return{internalValue:this.selectedValues}},watch:{selectedValues(e){this.internalValue=e},internalValue:{immediate:!0,handler(e){this.provideObj.selectedValues=e}}},methods:{setGroupValue(e,n){n?this.internalValue.includes(e)||this.internalValue.push(e):this.internalValue=this.internalValue.filter(a=>a!==e),this.$emit("input",this.internalValue)},getMessageKey(e,n){return`checkbox-group-message-${e}-${n}-${this.id}`}}},l=u(t,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group.vue"]]);t.__docgenInfo={description:"Checkbox Groups are convenience components for a grouping of related Checkboxes.\nWhile each Checkbox within the group is independent, the `v-model` on the group provides\na convenient interface for determining which Checkboxes within the group are checked.",displayName:"DtCheckboxGroup",tags:{see:[{description:"https://dialpad.design/components/checkbox_group.html",title:"see"}]},exportName:"default",props:[{name:"id",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The id of the input group",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"value",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Not supported by this component, please use selectedValues",type:{name:""},defaultValue:{func:!1,value:"null"}},{name:"name",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The name of the input group",type:{name:"string"},required:!0},{name:"legend",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The legend of the input group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Disables the input group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"messages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Show validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"legendClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the legend element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the messages container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"legendChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the legend element",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"messagesChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the messages container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"dataQaGroup",description:"A data qa tag for the radio group",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox-group'"}},{name:"dataQaGroupLegend",description:"A data qa tag for the radio group legend",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox-group-legend'"}},{name:"dataQaGroupMessages",description:"A data qa tag for the radio group messages",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox-group-messages'"}},{name:"v-model",description:"A provided list of selected values(s) for the checkbox group",tags:{model:[{description:"selectedValues",title:"model"}]},type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"input",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Native input event",type:{names:["Array"]}}],slots:[{name:"legend",description:"slot for Input Group Legend"},{name:"default",description:"slot for Input Group Components"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input_group.js","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group.vue","/home/runner/work/dialtone-vue/dialtone-vue/components/input_group/input_group.vue"]};export{l as D};
//# sourceMappingURL=checkbox_group-6fda8987.js.map
