import{D as r}from"./tab-ed4351e1.js";import{a}from"./chunk-OPEUWD42-a3b45fd8.js";import"./button-e19e95f1.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";const p={id:"1",panelId:"1",selected:!0},c={},T={title:"Components/Tabs",component:r,args:p,argTypes:c,excludeStories:/.*Data$/,parameters:{a11y:{config:{rules:[{id:"aria-required-parent",enabled:!1}]}}}},e={render:(d,{argTypes:o})=>({components:{DtTab:r},props:Object.keys(o),provide:{setFocus:a("setFocus"),changeContentPanel:a("changeContentPanel"),groupContext:{selected:"",disabled:!1}},template:`<DtTab v-bind="$props">
                Tab
               </DtTab>`})};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args, {
    argTypes
  }) => ({
    components: {
      DtTab
    },
    props: Object.keys(argTypes),
    provide: {
      setFocus: action('setFocus'),
      changeContentPanel: action('changeContentPanel'),
      groupContext: {
        selected: '',
        disabled: false
      }
    },
    template: \`<DtTab v-bind="$props">
                Tab
               </DtTab>\`
  })
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const u=["argsData","argTypesData","Tab"];export{e as Tab,u as __namedExportsOrder,c as argTypesData,p as argsData,T as default};
//# sourceMappingURL=tab.stories-885ae0d1.js.map
