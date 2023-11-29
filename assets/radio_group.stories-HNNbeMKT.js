import{a as G}from"./chunk-AY7I2SME-4UylTnhF.js";import{c}from"./storybook_utils-XrTpeJKJ.js";import{D as S}from"./input_group-5EWDu1Wb.js";import{n as s}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as f}from"./radio-Dwlo9F7n.js";import{V as I}from"./utils-E69eXbJV.js";const V={name:"DtRadioGroup",extends:S,props:{value:{type:[String,Number],default:""},dataQaGroup:{type:String,default:"radio-group"},dataQaGroupLegend:{type:String,default:"radio-group-legend"},dataQaGroupMessages:{type:String,default:"radio-group-messages"}},emits:["input"],data(){return{provideObj:{selectedValue:this.value}}},watch:{value(t){this.provideObj.selectedValue=t}},methods:{setGroupValue(t){this.$emit("input",t)},getMessageKey(t,e){return`radio-group-message-${t}-${e}-${this.id}`}}},D=null,$=null;var _=s(V,D,$,!1,null,null,null,null);const i=_.exports;_.exports.__docgenInfo={description:"Radio Groups are control elements that allow the user to make a single selection from a list of options.",displayName:"DtRadioGroup",tags:{see:[{description:"https://dialpad.design/components/radio_group.html",title:"see"}]},exportName:"default",props:[{name:"id",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The id of the input group",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"value",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The value of the input group",type:{name:"string|number|boolean|object"},defaultValue:{func:!1,value:"null"}},{name:"name",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The name of the input group",type:{name:"string"},required:!0},{name:"legend",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The legend of the input group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Disables the input group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"messages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Show validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"legendClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the legend element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the messages container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"legendChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the legend element",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"messagesChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the messages container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"dataQaGroup",description:"A data qa tag for the radio group",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group'"}},{name:"dataQaGroupLegend",description:"A data qa tag for the radio group legend",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group-legend'"}},{name:"dataQaGroupMessages",description:"A data qa tag for the radio group messages",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group-messages'"}},{name:"v-model",description:"A provided value for the radio group",tags:{model:[{description:"value",title:"model"}]},type:{name:"string|number"},defaultValue:{func:!1,value:"''"}}],events:[{name:"input",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},type:{names:["String | Number"]},description:"Native input event"}],slots:[{name:"legend",description:"slot for Input Group Legend"},{name:"default",description:"slot for Input Group Components"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input_group.js","/home/runner/work/dialtone-vue/dialtone-vue/components/input_group/input_group.vue","/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group.vue"]};const M={name:"RadioGroupDefault",components:{DtRadio:f,DtRadioGroup:i}};var R=function(){var e=this,a=e._self._c;return a("dt-radio-group",{attrs:{id:e.$attrs.id,name:e.$attrs.name,legend:e.$attrs.legend,value:e.$attrs.value,disabled:e.$attrs.disabled,messages:e.$attrs.messages,"show-messages":e.$attrs.showMessages,"legend-class":e.$attrs.legendClass,"messages-class":e.$attrs.messagesClass,"legend-child-props":e.$attrs.legendChildProps,"messages-child-props":e.$attrs.messagesChildProps},on:{input:e.$attrs.onInput}},[e._t("default",function(){return e._l(e.$attrs.options,function(o){return a("dt-radio",{key:o.value,attrs:{value:o.value}},[a("span",[e._v(e._s(o.label))])])})}),e.$attrs.legendSlot?a("template",{slot:"legend"},[a("span",{domProps:{innerHTML:e._s(e.$attrs.legendSlot)}})]):e._e()],2)},T=[],v=s(M,R,T,!1,null,null,null,null);const A=v.exports;v.exports.__docgenInfo={displayName:"RadioGroupDefault",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group_default.story.vue"]};const E={name:"RadiosDecorator",components:{DtRadio:f},created(){this.options=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}]}};var w=function(){var e=this,a=e._self._c;return a("div",e._l(e.options,function(o){return a("dt-radio",{key:o.value,attrs:{value:o.value}},[a("span",[e._v(e._s(o.label))])])}),1)},j=[],h=s(E,w,j,!1,null,null,null,null);const N=h.exports;h.exports.__docgenInfo={displayName:"RadiosDecorator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radios_decorator.vue"]};const O={name:"RadioGroupVariants",components:{RadiosDecorator:N,DtRadioGroup:i},created(){this.VALIDATION_MESSAGE_TYPES=I}};var P=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"components-radio-group--variants-container"}},[a("dt-radio-group",{attrs:{name:"radio-group-default","aria-label":"default"}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-legend",legend:"With Legend"}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-slotted-legend"}},[a("radios-decorator"),a("template",{slot:"legend"},[e._v(" With Slotted Legend ")])],2),a("dt-radio-group",{attrs:{name:"radio-group-with-value",legend:"With Value",value:"banana"}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-disabled",legend:"Disabled",disabled:""}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-success-message",legend:"With Success Message",messages:[{message:"Success",type:e.VALIDATION_MESSAGE_TYPES.SUCCESS}]}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-warning-message",legend:"With Warning Message",messages:[{message:"Warning",type:e.VALIDATION_MESSAGE_TYPES.WARNING}]}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-error-message",legend:"With Error Message",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}]}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-error-messages-hidden",legend:"With Error Messages Hidden",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1}},[a("radios-decorator")],1)],1)},C=[],x=s(O,P,C,!1,null,null,null,null);const L=x.exports;x.exports.__docgenInfo={displayName:"RadioGroupVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group_variants.story.vue"]};const F=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}],y={name:"fruits-radio-group",legend:"Fruits",value:"",options:F,onInput:G("input")},b={default:{control:"text",table:{type:{summary:"VNode"}}},legendSlot:{name:"legend",description:"Slot for legend",control:"text",table:{category:"slots",type:{summary:"VNode"}}},legend:{description:"The legend of the radio group",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},value:{description:"A provided value for the radio group",control:"text",table:{category:"props"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},options:{table:{disable:!0}},dataQaGroup:{table:{disable:!0}},dataQaGroupLegend:{table:{disable:!0}},dataQaGroupMessages:{table:{disable:!0}}},W={title:"Components/Radio Group",component:i,args:y,argTypes:b,excludeStories:/.*Data$/},k=(t,{argTypes:e})=>c(t,e,A),Q=(t,{argTypes:e})=>c(t,e,L),r={render:k,args:{}},n={render:Q,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const q=["argsData","argTypesData","Default","Variants"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:q,argTypesData:b,argsData:y,default:W},Symbol.toStringTag,{value:"Module"}));export{r as D,J as R,n as V};
//# sourceMappingURL=radio_group.stories-HNNbeMKT.js.map
