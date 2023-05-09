import{a as p}from"./storybook_utils-1ca8d93f.js";import{V as g}from"./utils-7a4c8be8.js";import{D as s}from"./validation_messages-0f9e0708.js";const u=[{message:"Validation Message",type:g.SUCCESS}],d={validationMessages:u},c={id:{table:{defaultValue:{summary:"generated unique ID"}}}},S={title:"Components/Validation Messages",component:s,args:d,argTypes:c,excludeStories:/.*Data$/},V=p(s,{}),f=(v,{argTypes:m})=>({components:{DtValidationMessages:s},template:V,props:Object.keys(m)}),e={render:f},M=()=>({components:{DtValidationMessages:s},template:`
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
    `}),a={render:M,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: Template
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
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const b=["argsData","argTypesData","Default","Variants"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Variants:a,__namedExportsOrder:b,argTypesData:c,argsData:d,default:S},Symbol.toStringTag,{value:"Module"}));export{e as D,_ as V,a};
//# sourceMappingURL=validation_messages.stories-6fdcc436.js.map
