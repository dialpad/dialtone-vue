import{j as e}from"./jsx-runtime-79414aea.js";import{M as r,S as c,C as i,a as o,b as d}from"./index-1e4e92dc.js";import{S as m,D as p,V as h}from"./select_menu.stories-d1a5c208.js";import{u as a}from"./index-f11627bf.js";import"./iframe-1e4e3aa9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-1c9c66e9.js";import"./vue.esm-bundler-e62bdd6b.js";import"./utils-701363a2.js";import"./input-f7c3dcdf.js";import"./validation_messages-e963466f.js";import"./_plugin-vue_export-helper-c27b6911.js";function _(t={}){const{wrapper:s}=Object.assign({},a(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(l,{})})):l();function l(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:m}),`
`,e.jsx(n.h1,{id:"select-menu",children:"Select Menu"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:"A select menu is an input control that allows users to choose one option from a list."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`A select is normally paired with a label, but there are times when it can be used without a label. Don't rely on the
placeholder text as a label.`}),`
`,e.jsx(i,{children:e.jsx(o,{of:p})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{children:e.jsx(o,{of:h})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
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
`})})]})}}export{_ as default};
//# sourceMappingURL=select_menu-bdba76a7.js.map
