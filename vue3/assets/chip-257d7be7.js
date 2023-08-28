import{j as e}from"./jsx-runtime-ef79ad3a.js";import{M as o,S as c,d as i,e as a,f as l}from"./index-866a2785.js";import{C as p,D as d,V as h}from"./chip.stories-c0c7c5b7.js";import{u as r}from"./index-0b5a4a94.js";import"./iframe-45513185.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-b0336152.js";import"./vue.esm-bundler-06a6c133.js";import"./utils-135fe08f.js";import"./chip-00273ea4.js";import"./button-f19eb3b6.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-136e453c.js";import"./icon_constants-5440087a.js";import"./avatar-e311fea1.js";import"./presence-c5756a69.js";import"./v_html-ded372da.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:p}),`
`,e.jsx(n.h1,{id:"chip",children:"Chip"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:`A chip is a compact UI element that provides brief, descriptive information about an element.
It is terse, ideally one word.
It is important a button is identifiable, consistent, and communicates its actions clearly,
and is appropriately sized to its action.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(i,{children:e.jsx(a,{of:d})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{children:e.jsx(a,{of:h})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Default behaviour is interactive, has hover/focus/active states. When interactive the chip will render as a ",e.jsx(n.code,{children:"<button>"}),`
element.`]}),`
`,e.jsx(n.p,{children:"Default content text is aria-label unless overridden by passed in aria-label."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtChip } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  Chip
</dt-chip>
`})}),`
`,e.jsx(n.h2,{id:"with-icon",children:"With Icon"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`import { DtChip, DtIcon } from '@dialpad/dialtone-vue';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #icon>
    <dt-icon name="lock" />
  </template>
</dt-chip>
`})}),`
`,e.jsx(n.h2,{id:"with-avatar",children:"With Avatar"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`import { DtAvatar } from '@dialpad/dialtone';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #avatar>
    <dt-avatar full-name="Dialpad" />
  </template>
</dt-chip>
`})}),`
`,e.jsx(n.h2,{id:"non-interactive",children:"Non Interactive"}),`
`,e.jsxs(n.p,{children:["The chip is not focusable or clickable. If not interactive the chip will render as a ",e.jsx(n.code,{children:"<span>"})," element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-chip
  :interactive="false"
  :hide-close="true"
/>
`})})]})}function E(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{E as default};
//# sourceMappingURL=chip-257d7be7.js.map
