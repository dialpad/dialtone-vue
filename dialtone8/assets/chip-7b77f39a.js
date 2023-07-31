import{j as e}from"./jsx-runtime-b5283a0d.js";import{M as o,S as c,d as i,e as a,f as l}from"./index-75753719.js";import{C as d,D as p,W as h,a as m,N as j}from"./chip.stories-bca5254b.js";import{u as r}from"./index-002db88b.js";import"./iframe-b65d1598.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-010d0d6a.js";import"./vue.esm-ba2ca387.js";import"./chip-eb7a93d8.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-555c67be.js";import"./icon_constants-04b4bbd3.js";import"./avatar-21aa1347.js";import"./presence-7999d7f0.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"chip",children:"Chip"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:`A chip is a compact UI element that provides brief, descriptive information about an element.
It is terse, ideally one word.
It is important a button is identifiable, consistent, and communicates its actions clearly,
and is appropriately sized to its action.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(i,{children:e.jsx(a,{of:p})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Default behaviour is interactive, has hover/focus/active states. When interactive the chip will render as a ",e.jsx(n.code,{children:"<button>"}),`
element.`]}),`
`,e.jsx(n.p,{children:"Default content text is aria-label unless overridden by passed in aria-label."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtChip } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  Chip
</dt-chip>
`})}),`
`,e.jsx(n.h2,{id:"with-icon",children:"With Icon"}),`
`,e.jsx(i,{children:e.jsx(a,{of:h})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`import { DtChip, DtIcon } from '@dialpad/dialtone-vue';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #icon>
    <dt-icon name="lock" />
  </template>
</dt-chip>
`})}),`
`,e.jsx(n.h2,{id:"with-avatar",children:"With Avatar"}),`
`,e.jsx(i,{children:e.jsx(a,{of:m})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`import { DtAvatar } from '@dialpad/dialtone';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #avatar>
    <dt-avatar>DP</dt-avatar>
  </template>
</dt-chip>
`})}),`
`,e.jsx(n.h2,{id:"non-interactive",children:"Non Interactive"}),`
`,e.jsxs(n.p,{children:["The chip is not focusable or clickable. If not interactive the chip will render as a ",e.jsx(n.code,{children:"<span>"})," element."]}),`
`,e.jsx(i,{children:e.jsx(a,{of:j})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-chip
  :interactive="false"
  :hide-close="true"
/>
`})})]})}function P(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{P as default};
//# sourceMappingURL=chip-7b77f39a.js.map
