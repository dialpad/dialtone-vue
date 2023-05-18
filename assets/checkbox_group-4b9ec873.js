import{j as e}from"./jsx-runtime-9578e6cf.js";import{M as a,S as l,C as t,a as i,b as d}from"./index-e8326b4b.js";import{C as r,D as h,V as p}from"./checkbox_group.stories-26438690.js";import{u as c}from"./index-64da98bd.js";import"./iframe-6a497e8a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-2a3c9efe.js";import"./vue.esm-ba2ca387.js";import"./input_group-93ebbb51.js";import"./validation_messages-aae54d7e.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./checkbox-7f5349fc.js";import"./input-2955b190.js";function s(o){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},c(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(n.h1,{id:"checkbox-group",children:"Checkbox Group"}),`
`,e.jsx(l,{children:e.jsxs(n.p,{children:[`Checkbox Groups are convenience components for a grouping of related Checkboxes. While each Checkbox within the group
is independent, the `,e.jsx(n.code,{children:"v-model"}),` on the group provides a convenient interface for determining which Checkboxes within
the group are checked.`]})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.p,{children:[`Checkbox Groups are typically paired with a legend which identifies the group. If no legend is provided then it is
expected that an `,e.jsx(n.code,{children:"aria-label"}),` will be given in order to provide an invisible label to screen readers. Each Checkbox
Group should contain one or more Checkboxes which users can make selection(s) from.`]}),`
`,e.jsx(t,{children:e.jsx(i,{of:h})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t,{children:e.jsx(i,{of:p})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
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
`})})]})}function V(o={}){const{wrapper:n}=Object.assign({},c(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(s,o)})):s(o)}export{V as default};
//# sourceMappingURL=checkbox_group-4b9ec873.js.map
