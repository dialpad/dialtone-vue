import{c as p}from"./storybook_utils-b6841212.js";import{V as g}from"./utils-8607998d.js";import{D as s}from"./validation_messages-45fb554a.js";const u=[{message:"Validation Message",type:g.SUCCESS}],d={validationMessages:u},c={id:{table:{defaultValue:{summary:"generated unique ID"}}}},f={title:"Components/Validation Messages",component:s,args:d,argTypes:c,excludeStories:/.*Data$/},V=m=>p(m,s),e={render:V},S=()=>({components:{DtValidationMessages:s},template:`
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
    `}),a={render:S,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const D=["argsData","argTypesData","Default","Variants"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Variants:a,__namedExportsOrder:D,argTypesData:c,argsData:d,default:f},Symbol.toStringTag,{value:"Module"}));export{e as D,T as V,a};
//# sourceMappingURL=validation_messages.stories-2a2fe642.js.map
