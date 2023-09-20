import{a as U}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as _}from"./storybook_utils-819067e7.js";import{D as m,T as z,a as E}from"./toggle-b81b2017.js";import{k as y,o as c,l as N,m as t,d as k,j as s,p as l,q as o,e as v}from"./vue.esm-bundler-0b5a673d.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const D={name:"ToggleDefault",components:{DtToggle:m}},x=["innerHTML"];function M(e,d,I,S,i,w){const a=y("dt-toggle");return c(),N(a,{checked:e.$attrs.checked,disabled:e.$attrs.disabled,size:e.$attrs.size,"show-icon":e.$attrs.showIcon,"label-class":e.$attrs.labelClass,"label-child-props":e.$attrs.labelChildProps,"toggle-on-click":e.$attrs.toggleOnClick,onChange:e.$attrs.onChange},{default:t(()=>[e.defaultSlot?(c(),k("span",{key:0,innerHTML:e.defaultSlot},null,8,x)):s("v-if",!0)]),_:1},8,["checked","disabled","size","show-icon","label-class","label-child-props","toggle-on-click","onChange"])}const W=T(D,[["render",M],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue"]]);D.__docgenInfo={displayName:"ToggleDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue"]};const V={name:"ToggleVariants",components:{DtToggle:m},data(){return{vModelValue:!1}}},F={id:"components-toggle--variants-container"},L=v("div",{class:"d-mr6"}," With Slot Label ",-1),G=v("div",{class:"d-mr6"}," With V-Model ",-1);function P(e,d,I,S,i,w){const a=y("dt-toggle");return c(),k("div",F,[s(" Unchecked Initially "),l(a,{class:"d-mt6","label-class":"d-mr6",label:"Unchecked Initial"},{default:t(()=>[o(" Checked Initial ")]),_:1}),s(" Checked Initially "),l(a,{class:"d-mt6","label-class":"d-mr6",label:"Checked Initial",checked:!0},{default:t(()=>[o(" Checked Initial ")]),_:1}),s(" Indeterminate "),l(a,{class:"d-mt6","label-class":"d-mr6",checked:"mixed"},{default:t(()=>[o(" Indeterminate ")]),_:1}),s(" Checked Disabled "),l(a,{class:"d-mt6","label-class":"d-mr6",checked:!0,disabled:!0},{default:t(()=>[o(" Disabled Checked ")]),_:1}),s(" Unchecked Disabled "),l(a,{class:"d-mt6","label-class":"d-mr6",disabled:!0},{default:t(()=>[o(" Disabled Unchecked ")]),_:1}),s(" Indeterminate Disabled "),l(a,{class:"d-mt6","label-class":"d-mr6",checked:"mixed",disabled:!0},{default:t(()=>[o(" Indeterminate Disabled ")]),_:1}),s(" With Flex grow "),l(a,{class:"d-mt6","label-class":"d-d-flex d-fl-grow1"},{default:t(()=>[o(" With Flex Grow ")]),_:1}),s(" With Slots "),l(a,{class:"d-mt6"},{default:t(()=>[L]),_:1}),s(" With v-model "),l(a,{modelValue:i.vModelValue,"onUpdate:modelValue":d[0]||(d[0]=O=>i.vModelValue=O),class:"d-mt6"},{default:t(()=>[G]),_:1},8,["modelValue"]),s(" Without icon "),l(a,{class:"d-mt6","label-class":"d-mr6","show-icon":!1},{default:t(()=>[o(" Without icon ")]),_:1}),l(a,{class:"d-mt6","label-class":"d-mr6",label:"Small size",size:"sm"},{default:t(()=>[o(" Small size ")]),_:1})])}const j=T(V,[["render",P],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue"]]);V.__docgenInfo={displayName:"ToggleVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue"]};const C={default:"Toggle Default",checked:!1,onChange:U("change"),labelClass:"d-mr6"},$={default:{control:"text",description:"Used as a way to set either a label or a label element for the toggle",table:{type:{summary:"VNode"}}},checked:{description:'Used to set the initial state of the toggle. Setting "mixed" means it gets the indeterminate state.',options:z,control:{type:"select"},table:{category:"props",type:{summary:'boolean | "mixed"'},defaultValue:{summary:!1}}},size:{description:"Used to set the size of the toggle",options:Object.keys(E),control:{type:"select"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},disabled:{description:"Used to disabled the toggle",control:"boolean",table:{category:"props",type:{summary:"boolean"}}},labelChildProps:{control:null},onChange:{table:{disable:!0}},change:{description:"Toggle Change event",table:{type:{summary:"event"}}}},B={title:"Components/Toggle",component:m,args:C,argTypes:$,excludeStories:/.*Data$/},H=e=>_(e,W),q=e=>_(e,j),n={render:H,args:{},parameters:{a11y:{config:{rules:[{id:"button-name",enabled:!1}]}}}},r={render:q,args:{},parameters:{options:{showPanel:!1},a11y:n.parameters.a11y}};var u,g,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var f,h,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: Default.parameters.a11y
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const A=["argsData","argTypesData","Default","Variants"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:r,__namedExportsOrder:A,argTypesData:$,argsData:C,default:B},Symbol.toStringTag,{value:"Module"}));export{n as D,X as T,r as V};
//# sourceMappingURL=toggle.stories-0ef82d96.js.map
