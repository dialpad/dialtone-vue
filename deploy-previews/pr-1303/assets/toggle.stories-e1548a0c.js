import{a as U}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as _}from"./storybook_utils-182ea7b7.js";import{D as m,T as x,a as z}from"./toggle-c61d8ee6.js";import{s as y,o as c,b as E,w as t,k,f as l,u as s,x as o,e as v}from"./vue.esm-bundler-81c53cfe.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const D={name:"ToggleDefault",components:{DtToggle:m}},N=["innerHTML"];function M(e,n,I,S,i,w){const a=y("dt-toggle");return c(),E(a,{checked:e.$attrs.checked,disabled:e.$attrs.disabled,size:e.$attrs.size,"show-icon":e.$attrs.showIcon,"label-class":e.$attrs.labelClass,"label-child-props":e.$attrs.labelChildProps,"toggle-on-click":e.$attrs.toggleOnClick,onChange:e.$attrs.onChange},{default:t(()=>[e.defaultSlot?(c(),k("span",{key:0,innerHTML:e.defaultSlot},null,8,N)):l("v-if",!0)]),_:1},8,["checked","disabled","size","show-icon","label-class","label-child-props","toggle-on-click","onChange"])}const W=T(D,[["render",M],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue"]]);D.__docgenInfo={displayName:"ToggleDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue"]};const V={name:"ToggleVariants",components:{DtToggle:m},data(){return{vModelValue:!1}}},F={id:"components-toggle--variants-container"},L=v("div",{class:"d-mr6"}," With Slot Label ",-1),G=v("div",{class:"d-mr6"}," With V-Model ",-1);function P(e,n,I,S,i,w){const a=y("dt-toggle");return c(),k("div",F,[l(" Unchecked Initially "),s(a,{class:"d-mt6","label-class":"d-mr6",label:"Unchecked Initial"},{default:t(()=>[o(" Checked Initial ")]),_:1}),l(" Checked Initially "),s(a,{class:"d-mt6","label-class":"d-mr6",label:"Checked Initial",checked:!0},{default:t(()=>[o(" Checked Initial ")]),_:1}),l(" Indeterminate "),s(a,{class:"d-mt6","label-class":"d-mr6",checked:"mixed"},{default:t(()=>[o(" Indeterminate ")]),_:1}),l(" Checked Disabled "),s(a,{class:"d-mt6","label-class":"d-mr6",checked:!0,disabled:!0},{default:t(()=>[o(" Disabled Checked ")]),_:1}),l(" Unchecked Disabled "),s(a,{class:"d-mt6","label-class":"d-mr6",disabled:!0},{default:t(()=>[o(" Disabled Unchecked ")]),_:1}),l(" Indeterminate Disabled "),s(a,{class:"d-mt6","label-class":"d-mr6",checked:"mixed",disabled:!0},{default:t(()=>[o(" Indeterminate Disabled ")]),_:1}),l(" With Flex grow "),s(a,{class:"d-mt6","label-class":"d-d-flex d-fl-grow1"},{default:t(()=>[o(" With Flex Grow ")]),_:1}),l(" With Slots "),s(a,{class:"d-mt6"},{default:t(()=>[L]),_:1}),l(" With v-model "),s(a,{modelValue:i.vModelValue,"onUpdate:modelValue":n[0]||(n[0]=O=>i.vModelValue=O),class:"d-mt6"},{default:t(()=>[G]),_:1},8,["modelValue"]),l(" Without icon "),s(a,{class:"d-mt6","label-class":"d-mr6","show-icon":!1},{default:t(()=>[o(" Without icon ")]),_:1}),s(a,{class:"d-mt6","label-class":"d-mr6",label:"Small size",size:"sm"},{default:t(()=>[o(" Small size ")]),_:1})])}const B=T(V,[["render",P],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue"]]);V.__docgenInfo={displayName:"ToggleVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue"]};const C={default:"Toggle Default",checked:!1,onChange:U("change"),labelClass:"d-mr6"},$={default:{control:"text",description:"Used as a way to set either a label or a label element for the toggle",table:{type:{summary:"VNode"}}},checked:{description:'Used to set the initial state of the toggle. Setting "mixed" means it gets the indeterminate state.',options:x,control:{type:"select"},table:{category:"props",type:{summary:'boolean | "mixed"'},defaultValue:{summary:!1}}},size:{description:"Used to set the size of the toggle",options:Object.keys(z),control:{type:"select"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},disabled:{description:"Used to disabled the toggle",control:"boolean",table:{category:"props",type:{summary:"boolean"}}},labelChildProps:{control:null},onChange:{table:{disable:!0}},change:{description:"Toggle Change event",table:{type:{summary:"event"}}}},j={title:"Components/Toggle",component:m,args:C,argTypes:$,excludeStories:/.*Data$/},H=(e,{argTypes:n})=>_(e,n,W),q=(e,{argTypes:n})=>_(e,n,B),r={render:H,args:{},parameters:{a11y:{config:{rules:[{id:"button-name",enabled:!1}]}}}},d={render:q,args:{},parameters:{options:{showPanel:!1},a11y:r.parameters.a11y}};var u,g,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var f,b,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: Default.parameters.a11y
  }
}`,...(h=(b=d.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const A=["argsData","argTypesData","Default","Variants"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:d,__namedExportsOrder:A,argTypesData:$,argsData:C,default:j},Symbol.toStringTag,{value:"Module"}));export{r as D,X as T,d as V};
//# sourceMappingURL=toggle.stories-e1548a0c.js.map
