import{V as c,m as p}from"./_plugin-vue2_normalizer-bbedbd26.js";import{D as s}from"./validation_messages-b7867d4b.js";const u=[{message:"Validation Message",type:c.SUCCESS}],l={validationMessages:u},g={id:{table:{defaultValue:{summary:"generated unique ID"}}}},v={title:"Components/Validation Messages",component:s,args:l,argTypes:g,excludeStories:/.*Data$/},M=p(s,{}),V=(S,{argTypes:m})=>({components:{DtValidationMessages:s},template:M,props:Object.keys(m)}),a=V.bind({}),b=()=>({components:{DtValidationMessages:s},template:`
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
    `}),e=b.bind({});e.parameters={options:{showPanel:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}};var t,n,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`(_args, {
  argTypes
}) => {
  return {
    components: {
      DtValidationMessages
    },
    template: baseRadioTemplate,
    props: Object.keys(argTypes)
  };
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,r,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return {
    components: {
      DtValidationMessages
    },
    template: \`
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
    \`
  };
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const y=["argsData","argTypesData","Default","Variants"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:e,__namedExportsOrder:y,argTypesData:g,argsData:l,default:v},Symbol.toStringTag,{value:"Module"}));export{_ as V};
//# sourceMappingURL=validation_messages.stories-d2c849ea.js.map
