import{a as S}from"./chunk-OPEUWD42-a3b45fd8.js";import{V as I,c as x}from"./storybook_utils-58c64c5e.js";import{V as C}from"./vue.esm-eff6e72e.js";import{D as w}from"./input_group-eabb7444.js";import{n as r}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as b}from"./checkbox-4c44a89d.js";const D={name:"DtCheckboxGroup",extends:w,model:{prop:"selectedValues"},props:{value:{type:[],default:null,validator:a=>a?(C.util.warn("Component uses selectedValues to initialize the model, value is not supported by this component",globalThis),!1):!0},selectedValues:{type:Array,default(){return[]}},dataQaGroup:{type:String,default:"checkbox-group"},dataQaGroupLegend:{type:String,default:"checkbox-group-legend"},dataQaGroupMessages:{type:String,default:"checkbox-group-messages"}},emits:["input"],data(){return{internalValue:this.selectedValues,provideObj:{selectedValues:this.selectedValues}}},watch:{selectedValues(a){this.internalValue=a},internalValue(a){this.provideObj.selectedValues=a}},methods:{setGroupValue(a,e){e?this.internalValue.includes(a)||this.internalValue.push(a):this.internalValue=this.internalValue.filter(t=>t!==a),this.$emit("input",this.internalValue)},getMessageKey(a,e){return`checkbox-group-message-${a}-${e}-${this.id}`}}},A=null,M=null;var u=r(D,A,M,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group.vue";const l=u.exports;u.exports.__docgenInfo={description:"Checkbox Groups are convenience components for a grouping of related Checkboxes.\nWhile each Checkbox within the group is independent, the `v-model` on the group provides\na convenient interface for determining which Checkboxes within the group are checked.",displayName:"DtCheckboxGroup",tags:{see:[{description:"https://dialpad.design/components/checkbox_group.html",title:"see"}]},exportName:"default",props:[{name:"id",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The id of the input group",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"value",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Not supported by this component, please use selectedValues",type:{name:""},defaultValue:{func:!1,value:"null"}},{name:"name",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The name of the input group",type:{name:"string"},required:!0},{name:"legend",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The legend of the input group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Disables the input group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"messages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Show validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"legendClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the legend element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the messages container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"legendChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the legend element",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"messagesChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the messages container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"dataQaGroup",description:"A data qa tag for the radio group",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox-group'"}},{name:"dataQaGroupLegend",description:"A data qa tag for the radio group legend",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox-group-legend'"}},{name:"dataQaGroupMessages",description:"A data qa tag for the radio group messages",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox-group-messages'"}},{name:"v-model",description:"A provided list of selected values(s) for the checkbox group",tags:{model:[{description:"selectedValues",title:"model"}]},type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"input",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},type:{names:["Array"]},description:"Native input event"}],slots:[{name:"legend",description:"slot for Input Group Legend"},{name:"default",description:"slot for Input Group Components"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input_group.js","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group.vue","/home/runner/work/dialtone-vue/dialtone-vue/components/input_group/input_group.vue"]};const T={name:"CheckboxGroupDefault",components:{DtCheckbox:b,DtCheckboxGroup:l}};var v=function(){var e=this,t=e._self._c;return t("dt-checkbox-group",{attrs:{id:e.id,name:e.name,legend:e.legend,"selected-values":e.selectedValues,disabled:e.disabled,messages:e.messages,"show-messages":e.showMessages,"legend-class":e.legendClass,"messages-class":e.messagesClass,"legend-child-props":e.legendChildProps,"messages-child-props":e.messagesChildProps},on:{input:e.onInput}},[e._t("default",function(){return e._l(e.options,function(o){return t("dt-checkbox",{key:o.value,attrs:{value:o.value}},[t("span",[e._v(e._s(o.label))])])})}),e.legendSlot?t("template",{slot:"legend"},[t("span",{domProps:{innerHTML:e._s(e.legendSlot)}})]):e._e()],2)},E=[];v._withStripped=!0;var i=r(T,v,E,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue";const j=i.exports;i.exports.__docgenInfo={displayName:"CheckboxGroupDefault",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue"]};const N={name:"CheckboxesDecorator",components:{DtCheckbox:b},created(){this.options=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}]}};var k=function(){var e=this,t=e._self._c;return t("div",e._l(e.options,function(o){return t("dt-checkbox",{key:o.value,attrs:{value:o.value}},[t("span",[e._v(e._s(o.label))])])}),1)},O=[];k._withStripped=!0;var c=r(N,k,O,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue";const $=c.exports;c.exports.__docgenInfo={displayName:"CheckboxesDecorator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue"]};const P={name:"CheckboxGroupVariants",components:{DtCheckboxesDecorator:$,DtCheckboxGroup:l},created(){this.VALIDATION_MESSAGE_TYPES=I}};var y=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"components-checkbox-group--variants-container"}},[t("dt-checkbox-group",{attrs:{name:"checkbox-group-default","aria-label":"default"}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-legend",legend:"With Legend"}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-slotted-legend"}},[t("dt-checkboxes-decorator"),t("template",{slot:"legend"},[e._v(" With Slotted Legend ")])],2),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-selected-values",legend:"With Selected Values","selected-values":["apple","other"]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-disabled",legend:"Disabled",disabled:""}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-success-message",legend:"With Success Message",messages:[{message:"Success",type:e.VALIDATION_MESSAGE_TYPES.SUCCESS}]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-warning-message",legend:"With Warning Message",messages:[{message:"Warning",type:e.VALIDATION_MESSAGE_TYPES.WARNING}]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-error-message",legend:"With Error Message",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-error-messages-hidden",legend:"With Error Messages Hidden",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1}},[t("dt-checkboxes-decorator")],1)],1)},L=[];y._withStripped=!0;var p=r(P,y,L,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue";const R=p.exports;p.exports.__docgenInfo={displayName:"CheckboxGroupVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue"]};const F=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}],V={name:"fruits-checkbox-group",legend:"Fruits",selectedValues:[],options:F,onInput:S("input")},G={default:{control:"text",table:{type:{summary:"VNode"}}},legendSlot:{name:"legend",description:"Slot for legend",control:"text",table:{category:"slots",type:{summary:"VNode"}}},legend:{description:"The legend of the checkbox group",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},selectedValues:{description:"A provided list of selected values(s) for the checkbox group",control:"array",table:{category:"props",type:{summary:"array"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},options:{table:{disable:!0}},value:{table:{disable:!0}},dataQaGroup:{table:{disable:!0}},dataQaGroupLegend:{table:{disable:!0}},dataQaGroupMessages:{table:{disable:!0}}},W={title:"Components/Checkbox Group",component:l,args:V,argTypes:G,excludeStories:/.*Data$/},Q=(a,{argTypes:e})=>x(a,e,j),q=(a,{argTypes:e})=>x(a,e,R),n={render:Q,args:{}},s={render:q,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var d,m,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,f,_;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(f=s.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const Y=["argsData","argTypesData","Default","Variants"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:s,__namedExportsOrder:Y,argTypesData:G,argsData:V,default:W},Symbol.toStringTag,{value:"Module"}));export{J as C,n as D,s as V};
//# sourceMappingURL=checkbox_group.stories-523b981b.js.map
