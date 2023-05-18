import{j as e}from"./jsx-runtime-76e49091.js";import{M as s,S as d,C as o,a as l,b as h}from"./index-83f67b2f.js";import{R as c,D as p,V as m}from"./radio.stories-bfab0570.js";import{u as r}from"./index-6deeca0d.js";import"./iframe-427dc57b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-18683b03.js";import"./vue.esm-bundler-7a4a8caf.js";import"./utils-d7bd2a25.js";import"./radio-2e977f41.js";import"./input-979fefc2.js";import"./validation_messages-7fc8db5d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./radio_constants-4f6325c5.js";function C(i={}){const{wrapper:t}=Object.assign({},r(),i.components);return t?e.jsx(t,Object.assign({},i,{children:e.jsx(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},r(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"radios",children:"Radios"}),`
`,e.jsx(d,{children:e.jsx(n.p,{children:`Radios are control elements that allow the user to make a single selection. They are typically used in a Radio Group
which allows the user to make a selection from a list of options.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`Radios are typically paired with a label which identifies the option. There are times when they can be used with a
description which describes the option.`}),`
`,e.jsx(o,{children:e.jsx(l,{of:p})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(o,{children:e.jsx(l,{of:m})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(h,{}),`
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
`})})]})}}export{C as default};
//# sourceMappingURL=radio-b4c2695f.js.map
