import{j as e}from"./jsx-runtime-dd0f3d33.js";import{M as s,b as r,C as t,d as a,e as d}from"./index-10a0cbc4.js";import{R as h,D as c,V as p}from"./radio.stories-ae75b039.js";import{u as l}from"./index-41a6da5b.js";import"./iframe-d0c6bc09.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-98c88692.js";import"./vue.esm-bundler-24d82261.js";import"./utils-a84c670d.js";import"./radio-8d4d4eb5.js";import"./input-c4c87a81.js";import"./validation_messages-5b870a2b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./radio_constants-4f6325c5.js";function o(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},l(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(n.h1,{id:"radios",children:"Radios"}),`
`,e.jsx(r,{children:e.jsx(n.p,{children:`Radios are control elements that allow the user to make a single selection. They are typically used in a Radio Group
which allows the user to make a selection from a list of options.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`Radios are typically paired with a label which identifies the option. There are times when they can be used with a
description which describes the option.`}),`
`,e.jsx(t,{children:e.jsx(a,{of:c})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t,{children:e.jsx(a,{of:p})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtRadio, VALIDATION_MESSAGE_TYPES } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"with-label-prop",children:"With Label Prop"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  label="My Label"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-label",children:"With Slotted Label"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio value="optionValue">
  My Label
</dt-radio>
`})}),`
`,e.jsx(n.h3,{id:"with-description",children:"With Description"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  description="My Description"
>
  My Label
</dt-radio>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-label-and-description",children:"With Slotted Label and Description"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio value="optionValue">
  My Label
  <template #description>
    My Description
  </template>
</dt-radio>
`})}),`
`,e.jsx(n.h3,{id:"with-group",children:"With Group"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  name="groupName"
  label="My Label"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-validation-state",children:"With Validation State"}),`
`,e.jsx("h4",{style:{color:"red"},children:"Error"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  :validationState="VALIDATION_MESSAGE_TYPES.ERROR"
/>
`})}),`
`,e.jsx("h4",{style:{color:"Goldenrod"},children:"Warning"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  :validationState="VALIDATION_MESSAGE_TYPES.WARNING"
/>
`})}),`
`,e.jsx("h4",{style:{color:"green"},children:"Success"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  :validationState="VALIDATION_MESSAGE_TYPES.SUCCESS"
/>
`})})]})}function I(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(o,i)})):o(i)}export{I as default};
//# sourceMappingURL=radio-6e1bef00.js.map