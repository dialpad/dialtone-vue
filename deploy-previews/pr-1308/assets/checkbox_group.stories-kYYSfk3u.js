import{a as D}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as b}from"./storybook_utils-XrTpeJKJ.js";import{D as n}from"./checkbox_group-RCEsYz6h.js";import{D as x}from"./checkbox--VImQvsI.js";import{n as c}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{V as E}from"./utils-QzhcKpbP.js";const T={name:"CheckboxGroupDefault",components:{DtCheckbox:x,DtCheckboxGroup:n}};var k=function(){var e=this,t=e._self._c;return t("dt-checkbox-group",{attrs:{id:e.$attrs.id,name:e.$attrs.name,legend:e.$attrs.legend,"selected-values":e.$attrs.selectedValues,disabled:e.$attrs.disabled,messages:e.$attrs.messages,"show-messages":e.$attrs.showMessages,"legend-class":e.$attrs.legendClass,"messages-class":e.$attrs.messagesClass,"legend-child-props":e.$attrs.legendChildProps,"messages-child-props":e.$attrs.messagesChildProps},on:{input:e.$attrs.onInput}},[e._t("default",function(){return e._l(e.$attrs.options,function(o){return t("dt-checkbox",{key:o.value,attrs:{value:o.value}},[t("span",[e._v(e._s(o.label))])])})}),e.$attrs.legendSlot?t("template",{slot:"legend"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.legendSlot)}})]):e._e()],2)},C=[];k._withStripped=!0;var l=c(T,k,C,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue";const $=l.exports;l.exports.__docgenInfo={displayName:"CheckboxGroupDefault",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_default.story.vue"]};const V={name:"CheckboxesDecorator",components:{DtCheckbox:x},created(){this.options=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}]}};var f=function(){var e=this,t=e._self._c;return t("div",e._l(e.options,function(o){return t("dt-checkbox",{key:o.value,attrs:{value:o.value}},[t("span",[e._v(e._s(o.label))])])}),1)},w=[];f._withStripped=!0;var d=c(V,f,w,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue";const A=d.exports;d.exports.__docgenInfo={displayName:"CheckboxesDecorator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkboxes_decorator.vue"]};const I={name:"CheckboxGroupVariants",components:{DtCheckboxesDecorator:A,DtCheckboxGroup:n},created(){this.VALIDATION_MESSAGE_TYPES=E}};var v=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"components-checkbox-group--variants-container"}},[t("dt-checkbox-group",{attrs:{name:"checkbox-group-default","aria-label":"default"}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-legend",legend:"With Legend"}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-slotted-legend"}},[t("dt-checkboxes-decorator"),t("template",{slot:"legend"},[e._v(" With Slotted Legend ")])],2),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-selected-values",legend:"With Selected Values","selected-values":["apple","other"]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-disabled",legend:"Disabled",disabled:""}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-success-message",legend:"With Success Message",messages:[{message:"Success",type:e.VALIDATION_MESSAGE_TYPES.SUCCESS}]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-warning-message",legend:"With Warning Message",messages:[{message:"Warning",type:e.VALIDATION_MESSAGE_TYPES.WARNING}]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-error-message",legend:"With Error Message",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}]}},[t("dt-checkboxes-decorator")],1),t("dt-checkbox-group",{attrs:{name:"checkbox-group-with-error-messages-hidden",legend:"With Error Messages Hidden",messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1}},[t("dt-checkboxes-decorator")],1)],1)},G=[];v._withStripped=!0;var u=c(I,v,G,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue";const N=u.exports;u.exports.__docgenInfo={displayName:"CheckboxGroupVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/checkbox_group/checkbox_group_variants.story.vue"]};const O=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Other",value:"other"}],S={name:"fruits-checkbox-group",legend:"Fruits",selectedValues:[],options:O,onInput:D("input")},y={default:{control:"text",table:{type:{summary:"VNode"}}},legendSlot:{name:"legend",description:"Slot for legend",control:"text",table:{category:"slots",type:{summary:"VNode"}}},legend:{description:"The legend of the checkbox group",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},selectedValues:{description:"A provided list of selected values(s) for the checkbox group",control:"array",table:{category:"props",type:{summary:"array"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},options:{table:{disable:!0}},value:{table:{disable:!0}},dataQaGroup:{table:{disable:!0}},dataQaGroupLegend:{table:{disable:!0}},dataQaGroupMessages:{table:{disable:!0}}},M={title:"Components/Checkbox Group",component:n,args:S,argTypes:y,excludeStories:/.*Data$/},P=(a,{argTypes:e})=>b(a,e,$),R=(a,{argTypes:e})=>b(a,e,N),r={render:P,args:{}},s={render:R,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var p,i,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const L=["argsData","argTypesData","Default","Variants"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:s,__namedExportsOrder:L,argTypesData:y,argsData:S,default:M},Symbol.toStringTag,{value:"Module"}));export{j as C,r as D,s as V};
//# sourceMappingURL=checkbox_group.stories-kYYSfk3u.js.map
