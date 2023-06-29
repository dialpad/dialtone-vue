import{V as r}from"./vue.esm-eff6e72e.js";import{D as o,v as p}from"./validation_messages-d5da03b2.js";import{a as l,f as s,e as i}from"./storybook_utils-344aa704.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const m={components:{DtValidationMessages:o},provide(){return{groupContext:this.provideObj,setGroupValue:this.setGroupValue}},props:{id:{type:String,default(){return l()}},value:{type:[String,Number,Boolean,Object],default:null},name:{type:String,required:!0},legend:{type:String,default:""},disabled:{type:Boolean,default:!1},messages:{type:Array,default:()=>[],validator:t=>p(t)},showMessages:{type:Boolean,default:!0},legendClass:{type:[String,Array,Object],default:""},messagesClass:{type:[String,Array,Object],default:""},legendChildProps:{type:Object,default:()=>({})},messagesChildProps:{type:Object,default:()=>({})}},data(){const t=s(this.messages);return{provideObj:{name:this.name,disabled:this.disabled,validationState:i(t)}}},computed:{formattedMessages(){return s(this.messages)},validationState(){return i(this.formattedMessages)}},watch:{disabled(t){this.provideObj.disabled=t},validationState(t){this.provideObj.validationState=t}},methods:{setGroupValue(t){this.internalValue=t,this.$emit("input",t)}},mounted(){!this.legend&&!this.$slots.legend&&!this.$attrs["aria-label"]&&r.util.warn("It is expected that an aria-label is provided when there is no legend.",this)}},g={name:"DtInputGroup",components:{DtValidationMessages:o},mixins:[m],props:{dataQaGroup:{type:String,default:"input-group"},dataQaGroupLegend:{type:String,default:"input-group-legend"},dataQaGroupMessages:{type:String,default:"input-group-messages"}},emits:["input"],data(){return{internalValue:this.value,provideObj:{value:this.value}}},watch:{value(t){this.internalValue=t},internalValue(t){this.provideObj.value=t}},methods:{getMessageKey(t,e){return`input-group-message-${t}-${e}-${this.id}`}}};var u=function(){var e=this,a=e._self._c;return a("fieldset",{attrs:{"data-qa":e.dataQaGroup}},[e.$slots.legend||e.legend?a("legend",e._b({class:["d-label",e.legendClass],attrs:{"data-qa":e.dataQaGroupLegend}},"legend",e.legendChildProps,!1),[e._t("legend",function(){return[e._v(" "+e._s(e.legend)+" ")]})],2):e._e(),e._t("default"),a("dt-validation-messages",e._b({class:e.messagesClass,attrs:{"validation-messages":e.formattedMessages,"show-messages":e.showMessages,"data-qa":e.dataQaGroupMessages}},"dt-validation-messages",e.messagesChildProps,!1))],2)},f=[];u._withStripped=!0;var n=d(g,u,f,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/input_group/input_group.vue";const _=n.exports;n.exports.__docgenInfo={description:"Input Groups are convenience components for a grouping of related inputs.\nWhile each input within the group could be independent, the `v-model` on the group\nprovides a convenient interface for determining the current state of the group.",displayName:"DtInputGroup",tags:{see:[{description:"https://dialpad.design/components/input_group.html",title:"see"}]},exportName:"default",props:[{name:"id",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The id of the input group",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"value",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The value of the input group",type:{name:"string|number|boolean|object"},defaultValue:{func:!1,value:"null"}},{name:"name",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The name of the input group",type:{name:"string"},required:!0},{name:"legend",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The legend of the input group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Disables the input group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"messages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Show validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"legendClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the legend element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the messages container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"legendChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the legend element",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"messagesChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the messages container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"dataQaGroup",description:"A data qa tag for the input group",type:{name:"string"},defaultValue:{func:!1,value:"'input-group'"}},{name:"dataQaGroupLegend",description:"A data qa tag for the input group legend",type:{name:"string"},defaultValue:{func:!1,value:"'input-group-legend'"}},{name:"dataQaGroupMessages",description:"A data qa tag for the input group messages",type:{name:"string"},defaultValue:{func:!1,value:"'input-group-messages'"}}],events:[{name:"input",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},type:{names:["undefined"]},description:"Native input event"}],slots:[{name:"legend",description:"slot for Input Group Legend"},{name:"default",description:"slot for Input Group Components"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input_group.js","/home/runner/work/dialtone-vue/dialtone-vue/components/input_group/input_group.vue"]};export{_ as D};
//# sourceMappingURL=input_group-fcb8b1a7.js.map
