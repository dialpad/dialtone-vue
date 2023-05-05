import{j as e}from"./jsx-runtime-242b6870.js";import{M as l,S as d,C as s,a as c,b as r}from"./index-f3de772d.js";import{C as h,D as p,V as x}from"./checkbox_group.stories-29aead3a.js";import{u as a}from"./index-bc39e9ae.js";import"./iframe-bb8f6a68.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-2ac5aadd.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-1ef620d9.js";import"./vue.esm-eff6e72e.js";import"./input_group-9cded05e.js";import"./validation_messages-7d1aadb9.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./checkbox-526f85e3.js";import"./input-c45869b5.js";function A(o={}){const{wrapper:t}=Object.assign({},a(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(n.h1,{id:"checkbox-group",children:"Checkbox Group"}),`
`,e.jsx(d,{children:e.jsxs(n.p,{children:[`Checkbox Groups are convenience components for a grouping of related Checkboxes. While each Checkbox within the group
is independent, the `,e.jsx(n.code,{children:"v-model"}),` on the group provides a convenient interface for determining which Checkboxes within
the group are checked.`]})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.p,{children:[`Checkbox Groups are typically paired with a legend which identifies the group. If no legend is provided then it is
expected that an `,e.jsx(n.code,{children:"aria-label"}),` will be given in order to provide an invisible label to screen readers. Each Checkbox
Group should contain one or more Checkboxes which users can make selection(s) from.`]}),`
`,e.jsx(s,{children:e.jsx(c,{of:p})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{children:e.jsx(c,{of:x})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"model",children:"Model"}),`
`,e.jsx(n.p,{children:"The Vue model contains a list of selected option(s) within the group, see example below:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// default = []
const selectedValues = ['checked_option_1', 'checked_option_2'];
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import {
  VALIDATION_MESSAGE_TYPES,
  DtCheckbox,
  DtCheckboxGroup
} from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"with-legend",children:"With Legend"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-checkbox-group
  name="my-group-name"
  legend="My Legend"
>
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
</dt-checkbox-group>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-legend",children:"With Slotted Legend"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-checkbox-group name="my-group-name">
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
  <template #legend>
    With Slotted Legend
  </template>
</dt-checkbox-group>
`})}),`
`,e.jsx(n.h3,{id:"with-selected-values",children:"With Selected Values"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-checkbox-group
  name="my-group-name"
  legend="My Legend"
  :selected-values="['option1']"
>
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
</dt-checkbox-group>
`})}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-checkbox-group
  name="my-group-name"
  legend="My Legend"
  disabled
>
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
</dt-checkbox-group>
`})}),`
`,e.jsx(n.h3,{id:"with-validation-messages",children:"With Validation Messages"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-checkbox-group
  name="my-group-name"
  legend="My Legend"
  :messages="[{ message: 'My Success Message', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
>
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
</dt-checkbox-group>
`})}),`
`,e.jsx(n.h3,{id:"with-validation-messages-hidden",children:"With Validation Messages Hidden"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-checkbox-group
  name="my-group-name"
  legend="My Legend"
  :messages="[{ message: 'My Success Message', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
  :show-messages="false"
>
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
</dt-checkbox-group>
`})})]})}}export{A as default};
//# sourceMappingURL=checkbox_group-4b67f730.js.map