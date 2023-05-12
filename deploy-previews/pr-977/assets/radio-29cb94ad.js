import{j as e}from"./jsx-runtime-063b209d.js";import{M as s,S as d,C as o,a as l,b as h}from"./index-fb56d379.js";import{R as c,D as p,V as m}from"./radio.stories-3fd6efe4.js";import{u as r}from"./index-71c06cd4.js";import"./iframe-45b2f520.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-b781ced2.js";import"./vue.esm-eff6e72e.js";import"./radio-a179ae86.js";import"./input-74a19adb.js";import"./validation_messages-3b52421f.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./radio_constants-4f6325c5.js";function _(i={}){const{wrapper:t}=Object.assign({},r(),i.components);return t?e.jsx(t,Object.assign({},i,{children:e.jsx(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},r(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
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
`})})]})}}export{_ as default};
//# sourceMappingURL=radio-29cb94ad.js.map
