import{a as v}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as g}from"./storybook_utils-e1aad9b5.js";import{D as o,T as y,a as C}from"./toggle-7d64bf49.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const T={name:"ToggleDefault",components:{DtToggle:o}};var D=function(){var e=this,t=e._self._c;return t("dt-toggle",{attrs:{checked:e.checked,disabled:e.disabled,size:e.size,"show-icon":e.showIcon,"label-class":e.labelClass,"label-child-props":e.labelChildProps,"toggle-on-click":e.toggleOnClick},on:{change:e.onChange}},[e.defaultSlot?t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):e._e()])},k=[],p=u(T,D,k,!1,null,null,null,null);const V=p.exports;p.exports.__docgenInfo={displayName:"ToggleDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue"]};const x={name:"ToggleVariants",components:{DtToggle:o},data(){return{vModelValue:!1}}};var S=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"components-toggle--variants-container"}},[t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",label:"Unchecked Initial"}},[e._v(" Checked Initial ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",label:"Checked Initial",checked:!0}},[e._v(" Checked Initial ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",checked:"mixed"}},[e._v(" Indeterminate ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",checked:!0,disabled:!0}},[e._v(" Disabled Checked ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",disabled:!0}},[e._v(" Disabled Unchecked ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",checked:"mixed",disabled:!0}},[e._v(" Indeterminate Disabled ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-d-flex d-fl-grow1"}},[e._v(" With Flex Grow ")]),t("dt-toggle",{staticClass:"d-mt6"},[t("div",{staticClass:"d-mr6"},[e._v(" With Slot Label ")])]),t("dt-toggle",{staticClass:"d-mt6",model:{value:e.vModelValue,callback:function(h){e.vModelValue=h},expression:"vModelValue"}},[t("div",{staticClass:"d-mr6"},[e._v(" With V-Model ")])]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6","show-icon":!1}},[e._v(" Without icon ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",label:"Small size",size:"sm"}},[e._v(" Small size ")])],1)},I=[],_=u(x,S,I,!1,null,null,null,null);const w=_.exports;_.exports.__docgenInfo={displayName:"ToggleVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue"]};const b={default:"Toggle Default",checked:!1,onChange:v("change"),labelClass:"d-mr6"},f={default:{control:"text",description:"Used as a way to set either a label or a label element for the toggle",table:{type:{summary:"VNode"}}},checked:{description:'Used to set the initial state of the toggle. Setting "mixed" means it gets the indeterminate state.',options:y,control:{type:"select"},table:{category:"props",type:{summary:'boolean | "mixed"'},defaultValue:{summary:!1}}},size:{description:"Used to set the size of the toggle",options:Object.keys(C),control:{type:"select"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},disabled:{description:"Used to disabled the toggle",control:"boolean",table:{category:"props",type:{summary:"boolean"}}},labelChildProps:{control:null},onChange:{table:{disable:!0}},change:{description:"Toggle Change event",table:{type:{summary:"event"}}}},O={title:"Components/Toggle",component:o,args:b,argTypes:f,excludeStories:/.*Data$/},z=(s,{argTypes:e})=>g(s,e,V),E=(s,{argTypes:e})=>g(s,e,w),a={render:z,args:{},parameters:{a11y:{config:{rules:[{id:"button-name",enabled:!1}]}}}},l={render:E,args:{},parameters:{options:{showPanel:!1},a11y:a.parameters.a11y}};var n,r,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(r=a.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var i,c,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: Default.parameters.a11y
  }
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const F=["argsData","argTypesData","Default","Variants"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:l,__namedExportsOrder:F,argTypesData:f,argsData:b,default:O},Symbol.toStringTag,{value:"Module"}));export{a as D,L as T,l as V};
//# sourceMappingURL=toggle.stories-99a4afca.js.map
