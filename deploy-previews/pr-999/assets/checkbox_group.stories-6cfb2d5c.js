import{a as L}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as M}from"./storybook_utils-bfad7e03.js";import{j as O,a as p,o as r,b as h,z as P,w as o,g as f,l as F,f as d,F as $,u as C,t as D,k as a,d as t,s as Q}from"./vue.esm-bundler-15aa0fd7.js";import{D as R}from"./input_group-4ba12794.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{D as w}from"./checkbox-35ee6892.js";import{V as B}from"./utils-66883e36.js";const E={name:"DtCheckboxGroup",extends:R,model:{prop:"selectedValues"},props:{value:{type:[],default:null,validator:e=>e?(O("Component uses selectedValues to initialize the model, value is not supported by this component",globalThis),!1):!0},selectedValues:{type:Array,default(){return[]}},dataQaGroup:{type:String,default:"checkbox-group"},dataQaGroupLegend:{type:String,default:"checkbox-group-legend"},dataQaGroupMessages:{type:String,default:"checkbox-group-messages"}},emits:["input"],data(){return{internalValue:this.selectedValues}},watch:{selectedValues(e){this.internalValue=e},internalValue:{immediate:!0,handler(e){this.provideObj.selectedValues=e}}},methods:{setGroupValue(e,l){l?this.internalValue.includes(e)||this.internalValue.push(e):this.internalValue=this.internalValue.filter(c=>c!==e),this.$emit("input",this.internalValue)},getMessageKey(e,l){return`checkbox-group-message-${e}-${l}-${this.id}`}}},b=m(E,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group.vue"]]);E.__docgenInfo={description:"Checkbox Groups are convenience components for a grouping of related Checkboxes.\nWhile each Checkbox within the group is independent, the `v-model` on the group provides\na convenient interface for determining which Checkboxes within the group are checked.",displayName:"DtCheckboxGroup",tags:{see:[{description:"https://dialpad.design/components/checkbox_group.html",title:"see"}]},exportName:"default",props:[{name:"id",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The id of the input group",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"value",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Not supported by this component, please use selectedValues",type:{name:""},defaultValue:{func:!1,value:"null"}},{name:"name",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The name of the input group",type:{name:"string"},required:!0},{name:"legend",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"The legend of the input group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Disables the input group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"messages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Show validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"legendClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the legend element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesClass",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Used to customize the messages container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"legendChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the legend element",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"messagesChildProps",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"A set of props that are passed into the messages container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"dataQaGroup",description:"A data qa tag for the radio group",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox-group'"}},{name:"dataQaGroupLegend",description:"A data qa tag for the radio group legend",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox-group-legend'"}},{name:"dataQaGroupMessages",description:"A data qa tag for the radio group messages",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox-group-messages'"}},{name:"v-model",description:"A provided list of selected values(s) for the checkbox group",tags:{model:[{description:"selectedValues",title:"model"}]},type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"input",mixin:{name:"Input Group Mixin",path:"../../common/mixins/input_group.js"},description:"Native input event",type:{names:["Array"]}}],slots:[{name:"legend",description:"slot for Input Group Legend"},{name:"default",description:"slot for Input Group Components"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input_group.js","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group.vue","/home/runner/work/dialtone-vue/dialtone-vue/components/input_group/input_group.vue"]};const T={name:"CheckboxGroupDefault",components:{DtCheckbox:w,DtCheckboxGroup:b}},q=["innerHTML"];function H(e,l,c,_,x,v){const n=p("dt-checkbox"),s=p("dt-checkbox-group");return r(),h(s,{id:e.$attrs.id,name:e.$attrs.name,legend:e.$attrs.legend,"selected-values":e.$attrs.selectedValues,disabled:e.$attrs.disabled,messages:e.$attrs.messages,"show-messages":e.$attrs.showMessages,"legend-class":e.$attrs.legendClass,"messages-class":e.$attrs.messagesClass,"legend-child-props":e.$attrs.legendChildProps,"messages-child-props":e.$attrs.messagesChildProps,onInput:e.$attrs.onInput},P({default:o(()=>[F(e.$slots,"default",{},()=>[(r(!0),d($,null,C(e.$attrs.options,g=>(r(),h(n,{key:g.value,value:g.value},{default:o(()=>[f("span",null,D(g.label),1)]),_:2},1032,["value"]))),128))])]),_:2},[e.$attrs.legendSlot?{name:"legend",fn:o(()=>[f("span",{innerHTML:e.$attrs.legendSlot},null,8,q)]),key:"0"}:void 0]),1032,["id","name","legend","selected-values","disabled","messages","show-messages","legend-class","messages-class","legend-child-props","messages-child-props","onInput"])}const Y=m(T,[["render",H],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue"]]);T.__docgenInfo={displayName:"CheckboxGroupDefault",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue"]};const A={name:"CheckboxesDecorator",components:{DtCheckbox:w},created(){this.options=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}]}};function z(e,l,c,_,x,v){const n=p("dt-checkbox");return r(),d("div",null,[(r(!0),d($,null,C(e.options,s=>(r(),h(n,{key:s.value,value:s.value},{default:o(()=>[f("span",null,D(s.label),1)]),_:2},1032,["value"]))),128))])}const U=m(A,[["render",z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue"]]);A.__docgenInfo={displayName:"CheckboxesDecorator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue"]};const W={name:"CheckboxGroupVariants",components:{DtCheckboxesDecorator:U,DtCheckboxGroup:b},created(){this.VALIDATION_MESSAGE_TYPES=B}},K={id:"components-checkbox-group--variants-container"};function X(e,l,c,_,x,v){const n=p("dt-checkboxes-decorator"),s=p("dt-checkbox-group");return r(),d("div",K,[a(" Default "),t(s,{name:"checkbox-group-default","aria-label":"default"},{default:o(()=>[t(n)]),_:1}),a(" Default "),a(" With Legend "),t(s,{name:"checkbox-group-with-legend",legend:"With Legend"},{default:o(()=>[t(n)]),_:1}),a(" With Legend "),a(" With Slotted Legend "),t(s,{name:"checkbox-group-with-slotted-legend"},{legend:o(()=>[Q(" With Slotted Legend ")]),default:o(()=>[t(n)]),_:1}),a(" With Slotted Legend "),a(" With Selected Values "),t(s,{name:"checkbox-group-with-selected-values",legend:"With Selected Values","selected-values":["apple","other"]},{default:o(()=>[t(n)]),_:1}),a(" With Selected Values "),a(" Disabled "),t(s,{name:"checkbox-group-disabled",legend:"Disabled",disabled:""},{default:o(()=>[t(n)]),_:1}),a(" Disabled "),a(" With Success Message "),t(s,{name:"checkbox-group-with-success-message",legend:"With Success Message",messages:[{message:"Success",type:e.VALIDATION_MESSAGE_TYPES.SUCCESS}]},{default:o(()=>[t(n)]),_:1},8,["messages"]),a(" With Success Message "),a(" With Warning Message "),t(s,{name:"checkbox-group-with-warning-message",legend:"With Warning Message",messages:[{message:"Warning",type:e.VALIDATION_MESSAGE_TYPES.WARNING}]},{default:o(()=>[t(n)]),_:1},8,["messages"]),a(" With Warning Message "),a(" With Error Message "),t(s,{name:"checkbox-group-with-error-message",legend:"With Error Message",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}]},{default:o(()=>[t(n)]),_:1},8,["messages"]),a(" With Error Message "),a(" With Error Messages Hidden "),t(s,{name:"checkbox-group-with-error-messages-hidden",legend:"With Error Messages Hidden",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1},{default:o(()=>[t(n)]),_:1},8,["messages"]),a(" With Error Messages Hidden ")])}const J=m(W,[["render",X],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue"]]);W.__docgenInfo={displayName:"CheckboxGroupVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue"]};const Z=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}],N={name:"fruits-checkbox-group",legend:"Fruits",selectedValues:[],options:Z,onInput:L("input")},j={default:{control:"text",table:{type:{summary:"VNode"}}},legendSlot:{name:"legend",description:"Slot for legend",control:"text",table:{category:"slots",type:{summary:"VNode"}}},legend:{description:"The legend of the checkbox group",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},selectedValues:{description:"A provided list of selected values(s) for the checkbox group",control:"array",table:{category:"props",type:{summary:"array"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},input:{control:!1},options:{table:{disable:!0}},value:{table:{disable:!0}},dataQaGroup:{table:{disable:!0}},dataQaGroupLegend:{table:{disable:!0}},dataQaGroupMessages:{table:{disable:!0}}},ee={title:"Components/Checkbox Group",component:b,args:N,argTypes:j,excludeStories:/.*Data$/},ae=e=>M(e,Y),te=e=>M(e,J),u={render:ae,args:{}},i={render:te,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var k,y,V;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(V=(y=u.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var S,G,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const se=["argsData","argTypesData","Default","Variants"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Variants:i,__namedExportsOrder:se,argTypesData:j,argsData:N,default:ee},Symbol.toStringTag,{value:"Module"}));export{ce as C,u as D,i as V};
//# sourceMappingURL=checkbox_group.stories-6cfb2d5c.js.map
