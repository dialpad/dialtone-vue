import{a as O}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as V}from"./storybook_utils-7fd67d08.js";import{D as m}from"./checkbox_group-10cee4d1.js";import{D as T}from"./checkbox-d0d567fa.js";import{u as d,o as n,b as p,E as L,w as o,e as g,g as P,p as u,F as C,B as W,A,f as a,y as s,z as B}from"./vue.esm-bundler-5f4c5b12.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{V as F}from"./utils-24086939.js";const I={name:"CheckboxGroupDefault",components:{DtCheckbox:T,DtCheckboxGroup:m}},R=["innerHTML"];function H(e,b,_,f,k,v){const r=d("dt-checkbox"),t=d("dt-checkbox-group");return n(),p(t,{id:e.$attrs.id,name:e.$attrs.name,legend:e.$attrs.legend,"selected-values":e.$attrs.selectedValues,disabled:e.$attrs.disabled,messages:e.$attrs.messages,"show-messages":e.$attrs.showMessages,"legend-class":e.$attrs.legendClass,"messages-class":e.$attrs.messagesClass,"legend-child-props":e.$attrs.legendChildProps,"messages-child-props":e.$attrs.messagesChildProps,onInput:e.$attrs.onInput},L({default:o(()=>[P(e.$slots,"default",{},()=>[(n(!0),u(C,null,W(e.$attrs.options,i=>(n(),p(r,{key:i.value,value:i.value},{default:o(()=>[g("span",null,A(i.label),1)]),_:2},1032,["value"]))),128))])]),_:2},[e.$attrs.legendSlot?{name:"legend",fn:o(()=>[g("span",{innerHTML:e.$attrs.legendSlot},null,8,R)]),key:"0"}:void 0]),1032,["id","name","legend","selected-values","disabled","messages","show-messages","legend-class","messages-class","legend-child-props","messages-child-props","onInput"])}const Y=h(I,[["render",H],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue"]]);I.__docgenInfo={displayName:"CheckboxGroupDefault",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue"]};const M={name:"CheckboxesDecorator",components:{DtCheckbox:T},created(){this.options=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}]}};function Q(e,b,_,f,k,v){const r=d("dt-checkbox");return n(),u("div",null,[(n(!0),u(C,null,W(e.options,t=>(n(),p(r,{key:t.value,value:t.value},{default:o(()=>[g("span",null,A(t.label),1)]),_:2},1032,["value"]))),128))])}const j=h(M,[["render",Q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue"]]);M.__docgenInfo={displayName:"CheckboxesDecorator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue"]};const w={name:"CheckboxGroupVariants",components:{DtCheckboxesDecorator:j,DtCheckboxGroup:m},created(){this.VALIDATION_MESSAGE_TYPES=F}},z={id:"components-checkbox-group--variants-container"};function U(e,b,_,f,k,v){const r=d("dt-checkboxes-decorator"),t=d("dt-checkbox-group");return n(),u("div",z,[a(" Default "),s(t,{name:"checkbox-group-default","aria-label":"default"},{default:o(()=>[s(r)]),_:1}),a(" Default "),a(" With Legend "),s(t,{name:"checkbox-group-with-legend",legend:"With Legend"},{default:o(()=>[s(r)]),_:1}),a(" With Legend "),a(" With Slotted Legend "),s(t,{name:"checkbox-group-with-slotted-legend"},{legend:o(()=>[B(" With Slotted Legend ")]),default:o(()=>[s(r)]),_:1}),a(" With Slotted Legend "),a(" With Selected Values "),s(t,{name:"checkbox-group-with-selected-values",legend:"With Selected Values","selected-values":["apple","other"]},{default:o(()=>[s(r)]),_:1}),a(" With Selected Values "),a(" Disabled "),s(t,{name:"checkbox-group-disabled",legend:"Disabled",disabled:""},{default:o(()=>[s(r)]),_:1}),a(" Disabled "),a(" With Success Message "),s(t,{name:"checkbox-group-with-success-message",legend:"With Success Message",messages:[{message:"Success",type:e.VALIDATION_MESSAGE_TYPES.SUCCESS}]},{default:o(()=>[s(r)]),_:1},8,["messages"]),a(" With Success Message "),a(" With Warning Message "),s(t,{name:"checkbox-group-with-warning-message",legend:"With Warning Message",messages:[{message:"Warning",type:e.VALIDATION_MESSAGE_TYPES.WARNING}]},{default:o(()=>[s(r)]),_:1},8,["messages"]),a(" With Warning Message "),a(" With Error Message "),s(t,{name:"checkbox-group-with-error-message",legend:"With Error Message",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}]},{default:o(()=>[s(r)]),_:1},8,["messages"]),a(" With Error Message "),a(" With Error Messages Hidden "),s(t,{name:"checkbox-group-with-error-messages-hidden",legend:"With Error Messages Hidden",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1},{default:o(()=>[s(r)]),_:1},8,["messages"]),a(" With Error Messages Hidden ")])}const q=h(w,[["render",U],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue"]]);w.__docgenInfo={displayName:"CheckboxGroupVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue"]};const K=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}],N={name:"fruits-checkbox-group",legend:"Fruits",selectedValues:[],options:K,onInput:O("input")},G={default:{control:"text",table:{type:{summary:"VNode"}}},legendSlot:{name:"legend",description:"Slot for legend",control:"text",table:{category:"slots",type:{summary:"VNode"}}},legend:{description:"The legend of the checkbox group",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},selectedValues:{description:"A provided list of selected values(s) for the checkbox group",control:"array",table:{category:"props",type:{summary:"array"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},input:{control:!1},options:{table:{disable:!0}},value:{table:{disable:!0}},dataQaGroup:{table:{disable:!0}},dataQaGroupLegend:{table:{disable:!0}},dataQaGroupMessages:{table:{disable:!0}}},X={title:"Components/Checkbox Group",component:m,args:N,argTypes:G,excludeStories:/.*Data$/},J=e=>V(e,Y),Z=e=>V(e,q),l={render:J,args:{}},c={render:Z,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var S,x,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var D,$,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=($=c.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};const ee=["argsData","argTypesData","Default","Variants"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Variants:c,__namedExportsOrder:ee,argTypesData:G,argsData:N,default:X},Symbol.toStringTag,{value:"Module"}));export{ce as C,l as D,c as V};
//# sourceMappingURL=checkbox_group.stories-88a230e7.js.map
