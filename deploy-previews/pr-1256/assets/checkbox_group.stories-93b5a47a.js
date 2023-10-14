import{a as D}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as b}from"./storybook_utils-cbba4b42.js";import{D as n}from"./checkbox_group-d3f7cb50.js";import{D as x}from"./checkbox-d8d9f9c3.js";import{n as c}from"./_plugin-vue2_normalizer-2bbd088e.js";import{V as E}from"./utils-c7895956.js";const T={name:"CheckboxGroupDefault",components:{DtCheckbox:x,DtCheckboxGroup:n}};var k=function(){var e=this,o=e._self._c;return o("dt-checkbox-group",{attrs:{id:e.id,name:e.name,legend:e.legend,"selected-values":e.selectedValues,disabled:e.disabled,messages:e.messages,"show-messages":e.showMessages,"legend-class":e.legendClass,"messages-class":e.messagesClass,"legend-child-props":e.legendChildProps,"messages-child-props":e.messagesChildProps},on:{input:e.onInput}},[e._t("default",function(){return e._l(e.options,function(t){return o("dt-checkbox",{key:t.value,attrs:{value:t.value}},[o("span",[e._v(e._s(t.label))])])})}),e.legendSlot?o("template",{slot:"legend"},[o("span",{domProps:{innerHTML:e._s(e.legendSlot)}})]):e._e()],2)},C=[];k._withStripped=!0;var l=c(T,k,C,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue";const V=l.exports;l.exports.__docgenInfo={displayName:"CheckboxGroupDefault",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue"]};const w={name:"CheckboxesDecorator",components:{DtCheckbox:x},created(){this.options=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}]}};var f=function(){var e=this,o=e._self._c;return o("div",e._l(e.options,function(t){return o("dt-checkbox",{key:t.value,attrs:{value:t.value}},[o("span",[e._v(e._s(t.label))])])}),1)},A=[];f._withStripped=!0;var d=c(w,f,A,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue";const I=d.exports;d.exports.__docgenInfo={displayName:"CheckboxesDecorator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue"]};const G={name:"CheckboxGroupVariants",components:{DtCheckboxesDecorator:I,DtCheckboxGroup:n},created(){this.VALIDATION_MESSAGE_TYPES=E}};var v=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"components-checkbox-group--variants-container"}},[o("dt-checkbox-group",{attrs:{name:"checkbox-group-default","aria-label":"default"}},[o("dt-checkboxes-decorator")],1),o("dt-checkbox-group",{attrs:{name:"checkbox-group-with-legend",legend:"With Legend"}},[o("dt-checkboxes-decorator")],1),o("dt-checkbox-group",{attrs:{name:"checkbox-group-with-slotted-legend"}},[o("dt-checkboxes-decorator"),o("template",{slot:"legend"},[e._v(" With Slotted Legend ")])],2),o("dt-checkbox-group",{attrs:{name:"checkbox-group-with-selected-values",legend:"With Selected Values","selected-values":["apple","other"]}},[o("dt-checkboxes-decorator")],1),o("dt-checkbox-group",{attrs:{name:"checkbox-group-disabled",legend:"Disabled",disabled:""}},[o("dt-checkboxes-decorator")],1),o("dt-checkbox-group",{attrs:{name:"checkbox-group-with-success-message",legend:"With Success Message",messages:[{message:"Success",type:e.VALIDATION_MESSAGE_TYPES.SUCCESS}]}},[o("dt-checkboxes-decorator")],1),o("dt-checkbox-group",{attrs:{name:"checkbox-group-with-warning-message",legend:"With Warning Message",messages:[{message:"Warning",type:e.VALIDATION_MESSAGE_TYPES.WARNING}]}},[o("dt-checkboxes-decorator")],1),o("dt-checkbox-group",{attrs:{name:"checkbox-group-with-error-message",legend:"With Error Message",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}]}},[o("dt-checkboxes-decorator")],1),o("dt-checkbox-group",{attrs:{name:"checkbox-group-with-error-messages-hidden",legend:"With Error Messages Hidden",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1}},[o("dt-checkboxes-decorator")],1)],1)},N=[];v._withStripped=!0;var u=c(G,v,N,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue";const O=u.exports;u.exports.__docgenInfo={displayName:"CheckboxGroupVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue"]};const M=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}],S={name:"fruits-checkbox-group",legend:"Fruits",selectedValues:[],options:M,onInput:D("input")},y={default:{control:"text",table:{type:{summary:"VNode"}}},legendSlot:{name:"legend",description:"Slot for legend",control:"text",table:{category:"slots",type:{summary:"VNode"}}},legend:{description:"The legend of the checkbox group",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},selectedValues:{description:"A provided list of selected values(s) for the checkbox group",control:"array",table:{category:"props",type:{summary:"array"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},options:{table:{disable:!0}},value:{table:{disable:!0}},dataQaGroup:{table:{disable:!0}},dataQaGroupLegend:{table:{disable:!0}},dataQaGroupMessages:{table:{disable:!0}}},P={title:"Components/Checkbox Group",component:n,args:S,argTypes:y,excludeStories:/.*Data$/},R=(a,{argTypes:e})=>b(a,e,V),L=(a,{argTypes:e})=>b(a,e,O),r={render:R,args:{}},s={render:L,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var p,i,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(g=(i=r.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var m,h,_;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const W=["argsData","argTypesData","Default","Variants"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:s,__namedExportsOrder:W,argTypesData:y,argsData:S,default:P},Symbol.toStringTag,{value:"Module"}));export{j as C,r as D,s as V};
//# sourceMappingURL=checkbox_group.stories-93b5a47a.js.map
