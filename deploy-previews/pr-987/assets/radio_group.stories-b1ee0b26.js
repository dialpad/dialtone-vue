import{a as L}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as D}from"./storybook_utils-0f0847c0.js";import{D as O}from"./input_group-89dffacc.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{D as $}from"./radio-4ee109f3.js";import{a as d,o as r,b as f,z as C,w as n,f as h,k as P,e as m,F as w,u as T,t as E,j as a,d as t,s as F}from"./vue.esm-bundler-c0209a4d.js";import{V as Q}from"./utils-3cbdaa20.js";const A={name:"DtRadioGroup",extends:O,props:{value:{type:[String,Number],default:""},dataQaGroup:{type:String,default:"radio-group"},dataQaGroupLegend:{type:String,default:"radio-group-legend"},dataQaGroupMessages:{type:String,default:"radio-group-messages"}},emits:["input"],data(){return{internalValue:this.value}},watch:{value(e){this.internalValue=e},internalValue:{immediate:!0,handler(e){this.provideObj.selectedValue=e}}},methods:{setGroupValue(e){this.$emit("input",e)},getMessageKey(e,p){return`radio-group-message-${e}-${p}-${this.id}`}}},_=g(A,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group.vue"]]);A.__docgenInfo={description:"Radio Groups are control elements that allow the user to make a single selection from a list of options.",displayName:"DtRadioGroup",tags:{see:[{description:"https://dialpad.design/components/radio_group.html",title:"see"}]},exportName:"default",props:[{name:"id",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The id of the input group",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"value",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The value of the input group",type:{name:"string|number|boolean|object"},defaultValue:{func:!1,value:"null"}},{name:"name",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The name of the input group",type:{name:"string"},required:!0},{name:"legend",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The legend of the input group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Disables the input group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"messages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Show validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"legendClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the legend element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the messages container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"legendChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the legend element",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"messagesChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the messages container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"dataQaGroup",description:"A data qa tag for the radio group",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group'"}},{name:"dataQaGroupLegend",description:"A data qa tag for the radio group legend",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group-legend'"}},{name:"dataQaGroupMessages",description:"A data qa tag for the radio group messages",type:{name:"string"},defaultValue:{func:!1,value:"'radio-group-messages'"}},{name:"v-model",description:"A provided value for the radio group",tags:{model:[{description:"value",title:"model"}]},type:{name:"string|number"},defaultValue:{func:!1,value:"''"}}],events:[{name:"input",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Native input event",type:{names:["String | Number"]}}],slots:[{name:"legend",description:"slot for Input Group Legend"},{name:"default",description:"slot for Input Group Components"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input_group.js","/home/runner/work/dialtone-vue/dialtone-vue/components/input_group/input_group.vue","/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group.vue"]};const R={name:"RadioGroupDefault",components:{DtRadio:$,DtRadioGroup:_}},q=["innerHTML"];function B(e,p,v,i,y,b){const s=d("dt-radio"),o=d("dt-radio-group");return r(),f(o,{id:e.$attrs.id,name:e.$attrs.name,legend:e.$attrs.legend,value:e.$attrs.value,disabled:e.$attrs.disabled,messages:e.$attrs.messages,"show-messages":e.$attrs.showMessages,"legend-class":e.$attrs.legendClass,"messages-class":e.$attrs.messagesClass,"legend-child-props":e.$attrs.legendChildProps,"messages-child-props":e.$attrs.messagesChildProps,onInput:e.$attrs.onInput},C({default:n(()=>[P(e.$slots,"default",{},()=>[(r(!0),m(w,null,T(e.$attrs.options,c=>(r(),f(s,{key:c.value,value:c.value},{default:n(()=>[h("span",null,E(c.label),1)]),_:2},1032,["value"]))),128))])]),_:2},[e.$attrs.legendSlot?{name:"legend",fn:n(()=>[h("span",{innerHTML:e.$attrs.legendSlot},null,8,q)]),key:"0"}:void 0]),1032,["id","name","legend","value","disabled","messages","show-messages","legend-class","messages-class","legend-child-props","messages-child-props","onInput"])}const H=g(R,[["render",B],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group_default.story.vue"]]);R.__docgenInfo={displayName:"RadioGroupDefault",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group_default.story.vue"]};const W={name:"RadiosDecorator",components:{DtRadio:$},created(){this.options=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}]}};function U(e,p,v,i,y,b){const s=d("dt-radio");return r(),m("div",null,[(r(!0),m(w,null,T(e.options,o=>(r(),f(s,{key:o.value,value:o.value},{default:n(()=>[h("span",null,E(o.label),1)]),_:2},1032,["value"]))),128))])}const Y=g(W,[["render",U],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radios_decorator.vue"]]);W.__docgenInfo={displayName:"RadiosDecorator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radios_decorator.vue"]};const N={name:"RadioGroupVariants",components:{RadiosDecorator:Y,DtRadioGroup:_},setup(){return{VALIDATION_MESSAGE_TYPES:Q}}},z={id:"components-radio-group--variants-container"};function K(e,p,v,i,y,b){const s=d("radios-decorator"),o=d("dt-radio-group");return r(),m("div",z,[a(" Default "),t(o,{name:"radio-group-default","aria-label":"default"},{default:n(()=>[t(s)]),_:1}),a(" Default "),a(" With Legend "),t(o,{name:"radio-group-with-legend",legend:"With Legend"},{default:n(()=>[t(s)]),_:1}),a(" With Legend "),a(" With Slotted Legend "),t(o,{name:"radio-group-with-slotted-legend"},{legend:n(()=>[F(" With Slotted Legend ")]),default:n(()=>[t(s)]),_:1}),a(" With Slotted Legend "),a(" With Value "),t(o,{name:"radio-group-with-value",legend:"With Value",value:"banana"},{default:n(()=>[t(s)]),_:1}),a(" With Value "),a(" Disabled "),t(o,{name:"radio-group-disabled",legend:"Disabled",disabled:""},{default:n(()=>[t(s)]),_:1}),a(" Disabled "),a(" With Success Message "),t(o,{name:"radio-group-with-success-message",legend:"With Success Message",messages:[{message:"Success",type:i.VALIDATION_MESSAGE_TYPES.SUCCESS}]},{default:n(()=>[t(s)]),_:1},8,["messages"]),a(" With Success Message "),a(" With Warning Message "),t(o,{name:"radio-group-with-warning-message",legend:"With Warning Message",messages:[{message:"Warning",type:i.VALIDATION_MESSAGE_TYPES.WARNING}]},{default:n(()=>[t(s)]),_:1},8,["messages"]),a(" With Warning Message "),a(" With Error Message "),t(o,{name:"radio-group-with-error-message",legend:"With Error Message",messages:[{message:"Error",type:i.VALIDATION_MESSAGE_TYPES.ERROR}]},{default:n(()=>[t(s)]),_:1},8,["messages"]),a(" With Error Message "),a(" With Error Messages Hidden "),t(o,{name:"radio-group-with-error-messages-hidden",legend:"With Error Messages Hidden",messages:[{message:"Error",type:i.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1},{default:n(()=>[t(s)]),_:1},8,["messages"]),a(" With Error Messages Hidden ")])}const J=g(N,[["render",K],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group_variants.story.vue"]]);N.__docgenInfo={displayName:"RadioGroupVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/radio_group/radio_group_variants.story.vue"]};const X=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}],j={name:"fruits-radio-group",legend:"Fruits",value:"",options:X,onInput:L("input")},k={default:{control:"text",table:{type:{summary:"VNode"}}},legendSlot:{name:"legend",description:"Slot for legend",control:"text",table:{category:"slots",type:{summary:"VNode"}}},legend:{description:"The legend of the radio group",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},value:{description:"A provided value for the radio group",control:"text",table:{category:"props"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},options:{table:{disable:!0}},dataQaGroup:{table:{disable:!0}},dataQaGroupLegend:{table:{disable:!0}},dataQaGroupMessages:{table:{disable:!0}}},Z={title:"Components/Radio Group",component:_,args:j,argTypes:k,excludeStories:/.*Data$/},ee=e=>D(e,H),ae=e=>D(e,J),u={render:ee,args:{}},l={render:ae,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var S,V,G;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(G=(V=u.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var x,I,M;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const te=["argsData","argTypesData","Default","Variants"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Variants:l,__namedExportsOrder:te,argTypesData:k,argsData:j,default:Z},Symbol.toStringTag,{value:"Module"}));export{u as D,de as R,l as V};
//# sourceMappingURL=radio_group.stories-b1ee0b26.js.map
