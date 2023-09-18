import{a as O}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as V}from"./storybook_utils-f3611d2a.js";import{D as m}from"./checkbox_group-f9a7ff3b.js";import{D as T}from"./checkbox-07a4bd04.js";import{k as d,o as n,v as p,J as L,m as o,e as g,x as P,d as u,F as C,g as W,t as I,j as a,l as s,q as F}from"./vue.esm-bundler-a9a971fb.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{V as R}from"./utils-5c53e9f9.js";const M={name:"CheckboxGroupDefault",components:{DtCheckbox:T,DtCheckboxGroup:m}},B=["innerHTML"];function H(e,b,_,f,k,v){const r=d("dt-checkbox"),t=d("dt-checkbox-group");return n(),p(t,{id:e.$attrs.id,name:e.$attrs.name,legend:e.$attrs.legend,"selected-values":e.$attrs.selectedValues,disabled:e.$attrs.disabled,messages:e.$attrs.messages,"show-messages":e.$attrs.showMessages,"legend-class":e.$attrs.legendClass,"messages-class":e.$attrs.messagesClass,"legend-child-props":e.$attrs.legendChildProps,"messages-child-props":e.$attrs.messagesChildProps,onInput:e.$attrs.onInput},L({default:o(()=>[P(e.$slots,"default",{},()=>[(n(!0),u(C,null,W(e.$attrs.options,i=>(n(),p(r,{key:i.value,value:i.value},{default:o(()=>[g("span",null,I(i.label),1)]),_:2},1032,["value"]))),128))])]),_:2},[e.$attrs.legendSlot?{name:"legend",fn:o(()=>[g("span",{innerHTML:e.$attrs.legendSlot},null,8,B)]),key:"0"}:void 0]),1032,["id","name","legend","selected-values","disabled","messages","show-messages","legend-class","messages-class","legend-child-props","messages-child-props","onInput"])}const Y=h(M,[["render",H],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue"]]);M.__docgenInfo={displayName:"CheckboxGroupDefault",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue"]};const A={name:"CheckboxesDecorator",components:{DtCheckbox:T},created(){this.options=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}]}};function j(e,b,_,f,k,v){const r=d("dt-checkbox");return n(),u("div",null,[(n(!0),u(C,null,W(e.options,t=>(n(),p(r,{key:t.value,value:t.value},{default:o(()=>[g("span",null,I(t.label),1)]),_:2},1032,["value"]))),128))])}const Q=h(A,[["render",j],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue"]]);A.__docgenInfo={displayName:"CheckboxesDecorator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue"]};const w={name:"CheckboxGroupVariants",components:{DtCheckboxesDecorator:Q,DtCheckboxGroup:m},created(){this.VALIDATION_MESSAGE_TYPES=R}},q={id:"components-checkbox-group--variants-container"};function U(e,b,_,f,k,v){const r=d("dt-checkboxes-decorator"),t=d("dt-checkbox-group");return n(),u("div",q,[a(" Default "),s(t,{name:"checkbox-group-default","aria-label":"default"},{default:o(()=>[s(r)]),_:1}),a(" Default "),a(" With Legend "),s(t,{name:"checkbox-group-with-legend",legend:"With Legend"},{default:o(()=>[s(r)]),_:1}),a(" With Legend "),a(" With Slotted Legend "),s(t,{name:"checkbox-group-with-slotted-legend"},{legend:o(()=>[F(" With Slotted Legend ")]),default:o(()=>[s(r)]),_:1}),a(" With Slotted Legend "),a(" With Selected Values "),s(t,{name:"checkbox-group-with-selected-values",legend:"With Selected Values","selected-values":["apple","other"]},{default:o(()=>[s(r)]),_:1}),a(" With Selected Values "),a(" Disabled "),s(t,{name:"checkbox-group-disabled",legend:"Disabled",disabled:""},{default:o(()=>[s(r)]),_:1}),a(" Disabled "),a(" With Success Message "),s(t,{name:"checkbox-group-with-success-message",legend:"With Success Message",messages:[{message:"Success",type:e.VALIDATION_MESSAGE_TYPES.SUCCESS}]},{default:o(()=>[s(r)]),_:1},8,["messages"]),a(" With Success Message "),a(" With Warning Message "),s(t,{name:"checkbox-group-with-warning-message",legend:"With Warning Message",messages:[{message:"Warning",type:e.VALIDATION_MESSAGE_TYPES.WARNING}]},{default:o(()=>[s(r)]),_:1},8,["messages"]),a(" With Warning Message "),a(" With Error Message "),s(t,{name:"checkbox-group-with-error-message",legend:"With Error Message",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}]},{default:o(()=>[s(r)]),_:1},8,["messages"]),a(" With Error Message "),a(" With Error Messages Hidden "),s(t,{name:"checkbox-group-with-error-messages-hidden",legend:"With Error Messages Hidden",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1},{default:o(()=>[s(r)]),_:1},8,["messages"]),a(" With Error Messages Hidden ")])}const z=h(w,[["render",U],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue"]]);w.__docgenInfo={displayName:"CheckboxGroupVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue"]};const J=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}],N={name:"fruits-checkbox-group",legend:"Fruits",selectedValues:[],options:J,onInput:O("input")},G={default:{control:"text",table:{type:{summary:"VNode"}}},legendSlot:{name:"legend",description:"Slot for legend",control:"text",table:{category:"slots",type:{summary:"VNode"}}},legend:{description:"The legend of the checkbox group",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},selectedValues:{description:"A provided list of selected values(s) for the checkbox group",control:"array",table:{category:"props",type:{summary:"array"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},input:{control:!1},options:{table:{disable:!0}},value:{table:{disable:!0}},dataQaGroup:{table:{disable:!0}},dataQaGroupLegend:{table:{disable:!0}},dataQaGroupMessages:{table:{disable:!0}}},K={title:"Components/Checkbox Group",component:m,args:N,argTypes:G,excludeStories:/.*Data$/},X=e=>V(e,Y),Z=e=>V(e,z),l={render:X,args:{}},c={render:Z,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var S,x,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=($=c.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};const ee=["argsData","argTypesData","Default","Variants"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Variants:c,__namedExportsOrder:ee,argTypesData:G,argsData:N,default:K},Symbol.toStringTag,{value:"Module"}));export{ce as C,l as D,c as V};
//# sourceMappingURL=checkbox_group.stories-164b632e.js.map
