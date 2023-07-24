import{j as e}from"./jsx-runtime-22261b97.js";import{M as o,S as c,C as t,a as i,b as r}from"./index-d14fcb03.js";import{C as d,D as h,V as p}from"./checkbox.stories-0b212775.js";import{u as s}from"./index-48a5f52f.js";import"./iframe-00b9fc3e.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-30cbb8fe.js";import"./vue.esm-bundler-2337cf2c.js";import"./utils-bfbb1d3e.js";import"./checkbox-c2f247e1.js";import"./input-0cb76bb3.js";import"./validation_messages-eefc6c25.js";import"./_plugin-vue_export-helper-c27b6911.js";function a(l){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},s(),l.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:`Checkboxes are control elements that allow the user to make a selection. They are typically used in a Checkbox Group
which allows the user to make one or more selections from a list of options.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`Checkboxes are typically paired with a label which identifies the option. In addition, there are times when they can be
used with a description which describes the option.`}),`
`,e.jsx(t,{children:e.jsx(i,{of:h})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t,{children:e.jsx(i,{of:p})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtCheckbox, VALIDATION_MESSAGE_TYPES } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"with-label-prop",children:"With Label Prop"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-label-and-description-props",children:"With Label and Description Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  description="My Description"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-label",children:"With Slotted Label"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-checkbox
  value="optionValue"
>
  My Label
</dt-checkbox>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-description",children:"With Slotted Description"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
>
  <template #description>
    My Description
  </template>
</dt-checkbox>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-label-and-description",children:"With Slotted Label and Description"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-checkbox
  value="optionValue"
>
  My Label
  <template #description>
    My Description
  </template>
</dt-checkbox>
`})}),`
`,e.jsx(n.h3,{id:"checked",children:"Checked"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  checked
/>
`})}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  disabled
/>
`})}),`
`,e.jsx(n.h3,{id:"with-validation-state",children:"With Validation State"}),`
`,e.jsx("h4",{style:{color:"green"},children:"Success"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  :validation-state="VALIDATION_MESSAGE_TYPES.SUCCESS"
/>
`})}),`
`,e.jsx("h4",{style:{color:"Goldenrod"},children:"Warning"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  :validation-state="VALIDATION_MESSAGE_TYPES.WARNING"
/>
`})}),`
`,e.jsx("h4",{style:{color:"red"},children:"Error"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  :validation-state="VALIDATION_MESSAGE_TYPES.ERROR"
/>
`})})]})}function I(l={}){const{wrapper:n}=Object.assign({},s(),l.components);return n?e.jsx(n,Object.assign({},l,{children:e.jsx(a,l)})):a(l)}export{I as default};
//# sourceMappingURL=checkbox-4c0fe87c.js.map
