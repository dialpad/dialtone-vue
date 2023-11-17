import{c as g}from"./storybook_utils-dy5aucTw.js";import{V as u}from"./utils-OzGu16i0.js";import{D as s}from"./validation_messages-pV3ZvTRE.js";const f=[{message:"Validation Message",type:u.SUCCESS}],d={validationMessages:f},c={id:{table:{defaultValue:{summary:"generated unique ID"}}}},V={title:"Components/Validation Messages",component:s,args:d,argTypes:c,excludeStories:/.*Data$/},S=(m,{argTypes:p})=>g(m,p,s),e={render:S},D=()=>({components:{DtValidationMessages:s},template:`
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
    `}),a={render:D,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const M=["argsData","argTypesData","Default","Variants"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Variants:a,__namedExportsOrder:M,argTypesData:c,argsData:d,default:V},Symbol.toStringTag,{value:"Module"}));export{e as D,b as V,a};
//# sourceMappingURL=validation_messages.stories-Xoivav_j.js.map
