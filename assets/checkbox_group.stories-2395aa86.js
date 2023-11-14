import{a as v}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as m}from"./storybook_utils-cf049d2e.js";import{D as n}from"./checkbox_group-5c05cd84.js";import{D as h}from"./checkbox-ec6ef33f.js";import{n as c}from"./_plugin-vue2_normalizer-2bbd088e.js";import{V as S}from"./utils-2ff589c9.js";const y={name:"CheckboxGroupDefault",components:{DtCheckbox:h,DtCheckboxGroup:n}};var D=function(){var e=this,t=e._self._c;return t("dt-checkbox-group",{attrs:{id:e.$attrs.id,name:e.$attrs.name,legend:e.$attrs.legend,"selected-values":e.$attrs.selectedValues,disabled:e.$attrs.disabled,messages:e.$attrs.messages,"show-messages":e.$attrs.showMessages,"legend-class":e.$attrs.legendClass,"messages-class":e.$attrs.messagesClass,"legend-child-props":e.$attrs.legendChildProps,"messages-child-props":e.$attrs.messagesChildProps},on:{input:e.$attrs.onInput}},[e._t("default",function(){return e._l(e.$attrs.options,function(a){return t("dt-checkbox",{key:a.value,attrs:{value:a.value}},[t("span",[e._v(e._s(a.label))])])})}),e.$attrs.legendSlot?t("template",{slot:"legend"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.legendSlot)}})]):e._e()],2)},E=[],b=c(y,D,E,!1,null,null,null,null);const T=b.exports;b.exports.__docgenInfo={displayName:"CheckboxGroupDefault",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue"]};const C={name:"CheckboxesDecorator",components:{DtCheckbox:h},created(){this.options=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}]}};var $=function(){var e=this,t=e._self._c;return t("div",e._l(e.options,function(a){return t("dt-checkbox",{key:a.value,attrs:{value:a.value}},[t("span",[e._v(e._s(a.label))])])}),1)},V=[],_=c(C,$,V,!1,null,null,null,null);const A=_.exports;_.exports.__docgenInfo={displayName:"CheckboxesDecorator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue"]};const I={name:"CheckboxGroupVariants",components:{DtCheckboxesDecorator:A,DtCheckboxGroup:n},created(){this.VALIDATION_MESSAGE_TYPES=S}};var G=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"components-checkbox-group--variants-container"}},[t("dt-checkbox-group",{attrs:{name:"checkbox-group-default","aria-label":"default"}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-legend",legend:"With Legend"}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-slotted-legend"}},[t("dt-checkboxes-decorator"),t("template",{slot:"legend"},[e._v(" With Slotted Legend ")])],2),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-selected-values",legend:"With Selected Values","selected-values":["apple","other"]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-disabled",legend:"Disabled",disabled:""}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-success-message",legend:"With Success Message",messages:[{message:"Success",type:e.VALIDATION_MESSAGE_TYPES.SUCCESS}]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-warning-message",legend:"With Warning Message",messages:[{message:"Warning",type:e.VALIDATION_MESSAGE_TYPES.WARNING}]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-error-message",legend:"With Error Message",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-error-messages-hidden",legend:"With Error Messages Hidden",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1}},[t("dt-checkboxes-decorator")],1)],1)},N=[],x=c(I,G,N,!1,null,null,null,null);const O=x.exports;x.exports.__docgenInfo={displayName:"CheckboxGroupVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue"]};const w=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}],f={name:"fruits-checkbox-group",legend:"Fruits",selectedValues:[],options:w,onInput:v("input")},k={default:{control:"text",table:{type:{summary:"VNode"}}},legendSlot:{name:"legend",description:"Slot for legend",control:"text",table:{category:"slots",type:{summary:"VNode"}}},legend:{description:"The legend of the checkbox group",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},selectedValues:{description:"A provided list of selected values(s) for the checkbox group",control:"array",table:{category:"props",type:{summary:"array"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},options:{table:{disable:!0}},value:{table:{disable:!0}},dataQaGroup:{table:{disable:!0}},dataQaGroupLegend:{table:{disable:!0}},dataQaGroupMessages:{table:{disable:!0}}},M={title:"Components/Checkbox Group",component:n,args:f,argTypes:k,excludeStories:/.*Data$/},P=(s,{argTypes:e})=>m(s,e,T),R=(s,{argTypes:e})=>m(s,e,O),r={render:P,args:{}},o={render:R,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,i,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(i=o.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const L=["argsData","argTypesData","Default","Variants"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:L,argTypesData:k,argsData:f,default:M},Symbol.toStringTag,{value:"Module"}));export{j as C,r as D,o as V};
//# sourceMappingURL=checkbox_group.stories-2395aa86.js.map