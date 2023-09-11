import{a as O}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as h}from"./storybook_utils-8dde5fa6.js";import{D as i,T as z,a as E}from"./toggle-5ba8d625.js";import{k as _,o as c,v as N,m as t,d as y,j as M,l as s,q as l,e as T}from"./vue.esm-bundler-400586b0.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const D={name:"ToggleDefault",components:{DtToggle:i}},U=["innerHTML"];function x(e,r,$,S,d,I){const a=_("dt-toggle");return c(),N(a,{checked:e.$attrs.checked,disabled:e.$attrs.disabled,size:e.$attrs.size,"show-icon":e.$attrs.showIcon,"label-class":e.$attrs.labelClass,"label-child-props":e.$attrs.labelChildProps,"toggle-on-click":e.$attrs.toggleOnClick,onChange:e.$attrs.onChange},{default:t(()=>[e.defaultSlot?(c(),y("span",{key:0,innerHTML:e.defaultSlot},null,8,U)):M("",!0)]),_:1},8,["checked","disabled","size","show-icon","label-class","label-child-props","toggle-on-click","onChange"])}const F=k(D,[["render",x]]);D.__docgenInfo={displayName:"ToggleDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue"]};const V={name:"ToggleVariants",components:{DtToggle:i},data(){return{vModelValue:!1}}},L={id:"components-toggle--variants-container"},G=T("div",{class:"d-mr6"}," With Slot Label ",-1),P=T("div",{class:"d-mr6"}," With V-Model ",-1);function j(e,r,$,S,d,I){const a=_("dt-toggle");return c(),y("div",L,[s(a,{class:"d-mt6","label-class":"d-mr6",label:"Unchecked Initial"},{default:t(()=>[l(" Checked Initial ")]),_:1}),s(a,{class:"d-mt6","label-class":"d-mr6",label:"Checked Initial",checked:!0},{default:t(()=>[l(" Checked Initial ")]),_:1}),s(a,{class:"d-mt6","label-class":"d-mr6",checked:"mixed"},{default:t(()=>[l(" Indeterminate ")]),_:1}),s(a,{class:"d-mt6","label-class":"d-mr6",checked:!0,disabled:!0},{default:t(()=>[l(" Disabled Checked ")]),_:1}),s(a,{class:"d-mt6","label-class":"d-mr6",disabled:!0},{default:t(()=>[l(" Disabled Unchecked ")]),_:1}),s(a,{class:"d-mt6","label-class":"d-mr6",checked:"mixed",disabled:!0},{default:t(()=>[l(" Indeterminate Disabled ")]),_:1}),s(a,{class:"d-mt6","label-class":"d-d-flex d-fl-grow1"},{default:t(()=>[l(" With Flex Grow ")]),_:1}),s(a,{class:"d-mt6"},{default:t(()=>[G]),_:1}),s(a,{modelValue:d.vModelValue,"onUpdate:modelValue":r[0]||(r[0]=w=>d.vModelValue=w),class:"d-mt6"},{default:t(()=>[P]),_:1},8,["modelValue"]),s(a,{class:"d-mt6","label-class":"d-mr6","show-icon":!1},{default:t(()=>[l(" Without icon ")]),_:1}),s(a,{class:"d-mt6","label-class":"d-mr6",label:"Small size",size:"sm"},{default:t(()=>[l(" Small size ")]),_:1})])}const B=k(V,[["render",j]]);V.__docgenInfo={displayName:"ToggleVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue"]};const v={default:"Toggle Default",checked:!1,onChange:O("change"),labelClass:"d-mr6"},C={default:{control:"text",description:"Used as a way to set either a label or a label element for the toggle",table:{type:{summary:"VNode"}}},checked:{description:'Used to set the initial state of the toggle. Setting "mixed" means it gets the indeterminate state.',options:z,control:{type:"select"},table:{category:"props",type:{summary:'boolean | "mixed"'},defaultValue:{summary:!1}}},size:{description:"Used to set the size of the toggle",options:Object.keys(E),control:{type:"select"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},disabled:{description:"Used to disabled the toggle",control:"boolean",table:{category:"props",type:{summary:"boolean"}}},labelChildProps:{control:null},onChange:{table:{disable:!0}},change:{description:"Toggle Change event",table:{type:{summary:"event"}}}},W={title:"Components/Toggle",component:i,args:v,argTypes:C,excludeStories:/.*Data$/},H=e=>h(e,F),q=e=>h(e,B),o={render:H,args:{},parameters:{a11y:{config:{rules:[{id:"button-name",enabled:!1}]}}}},n={render:q,args:{},parameters:{options:{showPanel:!1},a11y:o.parameters.a11y}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,f,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: Default.parameters.a11y
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const A=["argsData","argTypesData","Default","Variants"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Variants:n,__namedExportsOrder:A,argTypesData:C,argsData:v,default:W},Symbol.toStringTag,{value:"Module"}));export{o as D,X as T,n as V};
//# sourceMappingURL=toggle.stories-fbf50468.js.map
