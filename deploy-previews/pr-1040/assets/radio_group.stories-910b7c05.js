import{a as V}from"./chunk-OPEUWD42-a3b45fd8.js";import{V as D,c as h}from"./storybook_utils-7646992f.js";import{D as w}from"./input_group-5be416ab.js";import{n as s}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as y}from"./radio-51b145b4.js";const M={name:"DtRadioGroup",extends:w,props:{value:{type:[String,Number],default:""},dataQaGroup:{type:String,default:"radio-group"},dataQaGroupLegend:{type:String,default:"radio-group-legend"},dataQaGroupMessages:{type:String,default:"radio-group-messages"}},emits:["input"],data(){return{provideObj:{selectedValue:this.value}}},watch:{value(o){this.provideObj.selectedValue=o}},methods:{setGroupValue(o){this.$emit("input",o)},getMessageKey(o,e){return`radio-group-message-${o}-${e}-${this.id}`}}},R=null,T=null;var i=s(M,R,T,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group.vue";const u=i.exports;i.exports.__docgenInfo={description:"Radio Groups are control elements that allow the user to make a single selection from a list of options.",displayName:"DtRadioGroup",tags:{see:[{description:"https://dialpad.design/components/radio_group.html",title:"see"}]},exportName:"default",props:[{name:"id",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The id of the input group",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"value",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The value of the input group",type:{name:"string|number|boolean|object"},defaultValue:{func:!1,value:"null"}},{name:"name",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The name of the input group",type:{name:"string"},required:!0},{name:"legend",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The legend of the input group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Disables the input group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"messages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Show validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"legendClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the legend element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the messages container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"legendChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the legend element",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"messagesChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the messages container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"dataQaGroup",description:"A data qa tag for the radio group",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group'"}},{name:"dataQaGroupLegend",description:"A data qa tag for the radio group legend",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group-legend'"}},{name:"dataQaGroupMessages",description:"A data qa tag for the radio group messages",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group-messages'"}},{name:"v-model",description:"A provided value for the radio group",tags:{model:[{description:"value",title:"model"}]},type:{name:"string|number"},defaultValue:{func:!1,value:"''"}}],events:[{name:"input",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},type:{names:["String | Number"]},description:"Native input event"}],slots:[{name:"legend",description:"slot for Input Group Legend"},{name:"default",description:"slot for Input Group Components"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input_group.js","/home/runner/work/dialtone-vue/dialtone-vue/components/input_group/input_group.vue","/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group.vue"]};const A={name:"RadioGroupDefault",components:{DtRadio:y,DtRadioGroup:u}};var x=function(){var e=this,a=e._self._c;return a("dt-radio-group",{attrs:{id:e.id,name:e.name,legend:e.legend,value:e.value,disabled:e.disabled,messages:e.messages,"show-messages":e.showMessages,"legend-class":e.legendClass,"messages-class":e.messagesClass,"legend-child-props":e.legendChildProps,"messages-child-props":e.messagesChildProps},on:{input:e.onInput}},[e._t("default",function(){return e._l(e.options,function(t){return a("dt-radio",{key:t.value,attrs:{value:t.value}},[a("span",[e._v(e._s(t.label))])])})}),e.legendSlot?a("template",{slot:"legend"},[a("span",{domProps:{innerHTML:e._s(e.legendSlot)}})]):e._e()],2)},E=[];x._withStripped=!0;var l=s(A,x,E,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group_default.story.vue";const j=l.exports;l.exports.__docgenInfo={displayName:"RadioGroupDefault",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group_default.story.vue"]};const N={name:"RadiosDecorator",components:{DtRadio:y},created(){this.options=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}]}};var b=function(){var e=this,a=e._self._c;return a("div",e._l(e.options,function(t){return a("dt-radio",{key:t.value,attrs:{value:t.value}},[a("span",[e._v(e._s(t.label))])])}),1)},O=[];b._withStripped=!0;var d=s(N,b,O,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radios_decorator.vue";const $=d.exports;d.exports.__docgenInfo={displayName:"RadiosDecorator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radios_decorator.vue"]};const P={name:"RadioGroupVariants",components:{RadiosDecorator:$,DtRadioGroup:u},created(){this.VALIDATION_MESSAGE_TYPES=D}};var S=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"components-radio-group--variants-container"}},[a("dt-radio-group",{attrs:{name:"radio-group-default","aria-label":"default"}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-legend",legend:"With Legend"}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-slotted-legend"}},[a("radios-decorator"),a("template",{slot:"legend"},[e._v(" With Slotted Legend ")])],2),a("dt-radio-group",{attrs:{name:"radio-group-with-value",legend:"With Value",value:"banana"}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-disabled",legend:"Disabled",disabled:""}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-success-message",legend:"With Success Message",messages:[{message:"Success",type:e.VALIDATION_MESSAGE_TYPES.SUCCESS}]}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-warning-message",legend:"With Warning Message",messages:[{message:"Warning",type:e.VALIDATION_MESSAGE_TYPES.WARNING}]}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-error-message",legend:"With Error Message",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}]}},[a("radios-decorator")],1),a("dt-radio-group",{attrs:{name:"radio-group-with-error-messages-hidden",legend:"With Error Messages Hidden",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1}},[a("radios-decorator")],1)],1)},k=[];S._withStripped=!0;var p=s(P,S,k,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group_variants.story.vue";const C=p.exports;p.exports.__docgenInfo={displayName:"RadioGroupVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group_variants.story.vue"]};const L=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}],G={name:"fruits-radio-group",legend:"Fruits",value:"",options:L,onInput:V("input")},I={default:{control:"text",table:{type:{summary:"VNode"}}},legendSlot:{name:"legend",description:"Slot for legend",control:"text",table:{category:"slots",type:{summary:"VNode"}}},legend:{description:"The legend of the radio group",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},value:{description:"A provided value for the radio group",control:"text",table:{category:"props"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},options:{table:{disable:!0}},dataQaGroup:{table:{disable:!0}},dataQaGroupLegend:{table:{disable:!0}},dataQaGroupMessages:{table:{disable:!0}}},F={title:"Components/Radio Group",component:u,args:G,argTypes:I,excludeStories:/.*Data$/},W=(o,{argTypes:e})=>h(o,e,j),Q=(o,{argTypes:e})=>h(o,e,C),n={render:W,args:{}},r={render:Q,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var m,g,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var _,f,v;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const q=["argsData","argTypesData","Default","Variants"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:r,__namedExportsOrder:q,argTypesData:I,argsData:G,default:F},Symbol.toStringTag,{value:"Module"}));export{n as D,K as R,r as V};
//# sourceMappingURL=radio_group.stories-910b7c05.js.map
