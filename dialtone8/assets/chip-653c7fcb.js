import{j as e}from"./jsx-runtime-e1ed8b14.js";import{M as o,S as c,d as i,e as a,f as l}from"./index-48104768.js";import{C as d,D as p,W as h,a as m,N as j}from"./chip.stories-057f668a.js";import{u as r}from"./index-5732b632.js";import"./iframe-6c6c5cdd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-6c24aced.js";import"./vue.esm-ba2ca387.js";import"./chip-54378e4a.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-b42420a4.js";import"./icon_constants-80dce3e6.js";import"./avatar-88027a9d.js";import"./presence-16e0b832.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
//# sourceMappingURL=chip-653c7fcb.js.map
