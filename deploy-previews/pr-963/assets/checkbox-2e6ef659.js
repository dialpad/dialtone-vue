import{j as e}from"./jsx-runtime-1fa0c02b.js";import{M as c,S as r,C as a,a as s,b as d}from"./index-11af2e4d.js";import{C as h,D as p,V as x}from"./checkbox.stories-84181d91.js";import{u as o}from"./index-91610709.js";import"./iframe-d518b4e6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-35e0d11d.js";import"./vue.esm-bundler-2e3b72e0.js";import"./utils-9325de8f.js";import"./checkbox-c84b92a0.js";import"./input-40f647b7.js";import"./validation_messages-df59aa55.js";import"./_plugin-vue_export-helper-c27b6911.js";function _(l={}){const{wrapper:t}=Object.assign({},o(),l.components);return t?e.jsx(t,Object.assign({},l,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},o(),l.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(r,{children:e.jsx(n.p,{children:`Checkboxes are control elements that allow the user to make a selection. They are typically used in a Checkbox Group
which allows the user to make one or more selections from a list of options.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`Checkboxes are typically paired with a label which identifies the option. In addition, there are times when they can be
used with a description which describes the option.`}),`
`,e.jsx(a,{children:e.jsx(s,{of:p})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(a,{children:e.jsx(s,{of:x})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
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
`})})]})}}export{_ as default};
//# sourceMappingURL=checkbox-2e6ef659.js.map
