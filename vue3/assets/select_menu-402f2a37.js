import{j as e}from"./jsx-runtime-0f3a3e5e.js";import{M as a,S as c,d as s,e as l,f as r}from"./index-00e3ea6e.js";import{S as d,D as m,V as p}from"./select_menu.stories-8e1d0433.js";import{u as o}from"./index-7683571c.js";import"./iframe-1f0202b1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-8dde5fa6.js";import"./vue.esm-bundler-400586b0.js";import"./utils-0b5636ec.js";import"./select_menu-8ddb8a75.js";import"./input-04061dff.js";import"./validation_messages-aff00439.js";import"./_plugin-vue_export-helper-c27b6911.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"select-menu",children:"Select Menu"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:"A select menu is an input control that allows users to choose one option from a list."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`A select is normally paired with a label, but there are times when it can be used without a label. Don't rely on the
placeholder text as a label.`}),`
`,e.jsx(s,{children:e.jsx(l,{of:m})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{children:e.jsx(l,{of:p})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"option-object-structure",children:"Option Object Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{
  index: number,           // Optional
  value: number || string, // Required
  label: string,           // Required
}
`})}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtSelectMenu, VALIDATION_MESSAGE_TYPES } from '@dialpad/dialtone-vue';

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];
`})}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
  :options="options"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-description",children:"With Description"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
  description="Some Description"
  :options="options"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-label",children:"With Slotted Label"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  :options="options"
>
  <template #label>
    Select Menu
  </template>
</dt-select-menu>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-description",children:"With Slotted Description"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
  :options="options"
>
  <template #description>
    Some Description
  </template>
</dt-select-menu>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-options",children:"With Slotted Options"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
>
  <option
    v-for="option in options"
    :key="\`select-menu-option-\${option.value}\`"
    :value="option.value"
  >
    {{ option.label }}
  </option>
</dt-select-menu>
`})}),`
`,e.jsx(n.h3,{id:"with-validation-messages",children:"With Validation Messages"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
  :options="options"
  :messages="[{ message: 'Some Success Message', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-size",children:"With Size"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
  :options="options"
  size="xs"
/>
`})})]})}function W(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{W as default};
//# sourceMappingURL=select_menu-402f2a37.js.map
