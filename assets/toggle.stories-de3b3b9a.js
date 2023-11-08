import{a as v}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as g}from"./storybook_utils-cf049d2e.js";import{D as o,T as y,a as C}from"./toggle-d507d72c.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const T={name:"ToggleDefault",components:{DtToggle:o}};var D=function(){var e=this,t=e._self._c;return t("dt-toggle",{attrs:{checked:e.$attrs.checked,disabled:e.$attrs.disabled,size:e.$attrs.size,"show-icon":e.$attrs.showIcon,"label-class":e.$attrs.labelClass,"label-child-props":e.$attrs.labelChildProps,"toggle-on-click":e.$attrs.toggleOnClick},on:{change:e.$attrs.onChange}},[e.$attrs.default?t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}}):e._e()])},k=[],p=u(T,D,k,!1,null,null,null,null);const V=p.exports;p.exports.__docgenInfo={displayName:"ToggleDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue"]};const x={name:"ToggleVariants",components:{DtToggle:o},data(){return{vModelValue:!1}}};var $=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"components-toggle--variants-container"}},[t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",label:"Unchecked Initial"}},[e._v(" Checked Initial ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",label:"Checked Initial",checked:!0}},[e._v(" Checked Initial ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",checked:"mixed"}},[e._v(" Indeterminate ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",checked:!0,disabled:!0}},[e._v(" Disabled Checked ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",disabled:!0}},[e._v(" Disabled Unchecked ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",checked:"mixed",disabled:!0}},[e._v(" Indeterminate Disabled ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-d-flex d-fl-grow1"}},[e._v(" With Flex Grow ")]),t("dt-toggle",{staticClass:"d-mt6"},[t("div",{staticClass:"d-mr6"},[e._v(" With Slot Label ")])]),t("dt-toggle",{staticClass:"d-mt6",model:{value:e.vModelValue,callback:function(h){e.vModelValue=h},expression:"vModelValue"}},[t("div",{staticClass:"d-mr6"},[e._v(" With V-Model ")])]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6","show-icon":!1}},[e._v(" Without icon ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",label:"Small size",size:"sm"}},[e._v(" Small size ")])],1)},S=[],_=u(x,$,S,!1,null,null,null,null);const I=_.exports;_.exports.__docgenInfo={displayName:"ToggleVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue"]};const b={default:"Toggle Default",checked:!1,onChange:v("change"),labelClass:"d-mr6"},f={default:{control:"text",description:"Used as a way to set either a label or a label element for the toggle",table:{type:{summary:"VNode"}}},checked:{description:'Used to set the initial state of the toggle. Setting "mixed" means it gets the indeterminate state.',options:y,control:{type:"select"},table:{category:"props",type:{summary:'boolean | "mixed"'},defaultValue:{summary:!1}}},size:{description:"Used to set the size of the toggle",options:Object.keys(C),control:{type:"select"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},disabled:{description:"Used to disabled the toggle",control:"boolean",table:{category:"props",type:{summary:"boolean"}}},labelChildProps:{control:null},onChange:{table:{disable:!0}},change:{description:"Toggle Change event",table:{type:{summary:"event"}}}},w={title:"Components/Toggle",component:o,args:b,argTypes:f,excludeStories:/.*Data$/},O=(s,{argTypes:e})=>g(s,e,V),z=(s,{argTypes:e})=>g(s,e,I),a={render:O,args:{},parameters:{a11y:{config:{rules:[{id:"button-name",enabled:!1}]}}}},l={render:z,args:{},parameters:{options:{showPanel:!1},a11y:a.parameters.a11y}};var r,n,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    a11y: {
      config: {
        rules: [
        // TODO: it's possible to pass a custom aria-label but adding a built-in label can cover most of cases
        {
          id: 'button-name',
          enabled: false
        }]
      }
    }
  }
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,c,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: Default.parameters.a11y
  }
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const E=["argsData","argTypesData","Default","Variants"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:l,__namedExportsOrder:E,argTypesData:f,argsData:b,default:w},Symbol.toStringTag,{value:"Module"}));export{a as D,G as T,l as V};
//# sourceMappingURL=toggle.stories-de3b3b9a.js.map
