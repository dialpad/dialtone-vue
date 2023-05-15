import{V as p,m as g}from"./storybook_utils-58c64c5e.js";import{D as s}from"./validation_messages-55a390e5.js";const u=[{message:"Validation Message",type:p.SUCCESS}],d={validationMessages:u},c={id:{table:{defaultValue:{summary:"generated unique ID"}}}},S={title:"Components/Validation Messages",component:s,args:d,argTypes:c,excludeStories:/.*Data$/},V=g(s,{}),f=(v,{argTypes:m})=>({components:{DtValidationMessages:s},template:V,props:Object.keys(m)}),e={render:f},M=()=>({components:{DtValidationMessages:s},template:`
      <div id="components-validation-messages--variants-container">
        <dt-validation-messages
          :validationMessages="[{ message: 'With Success Validation Message', type: 'success' }]"
        />
        <br />
        <dt-validation-messages
          :validationMessages="[{ message: 'With Warning Validation Message', type: 'warning' }]"
        />
        <br />
        <dt-validation-messages
          :validationMessages="[{ message: 'With Error Validation Message', type: 'error' }]"
        />
        <br />
      </div>
    `}),a={render:M,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: Template
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: VariantsTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
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
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const b=["argsData","argTypesData","Default","Variants"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Variants:a,__namedExportsOrder:b,argTypesData:c,argsData:d,default:S},Symbol.toStringTag,{value:"Module"}));export{e as D,T as V,a};
//# sourceMappingURL=validation_messages.stories-f0e6b4ab.js.map
