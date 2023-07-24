import{j as e}from"./jsx-runtime-22261b97.js";import{M as o,S as c,C as i,a,b as l}from"./index-d14fcb03.js";import{C as p,D as d,W as h,a as m,N as j}from"./chip.stories-6d81f9f5.js";import{u as r}from"./index-48a5f52f.js";import"./iframe-00b9fc3e.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-30cbb8fe.js";import"./vue.esm-bundler-2337cf2c.js";import"./utils-bfbb1d3e.js";import"./chip-c72290bc.js";import"./button-352f7b66.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-252a6ded.js";import"./icon_constants-3bcad7cc.js";import"./avatar-65e84d16.js";import"./presence-a4d7384e.js";import"./v_html-2a006a05.js";function s(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:p}),`
`,e.jsx(t.h1,{id:"chip",children:"Chip"}),`
`,e.jsx(c,{children:e.jsx(t.p,{children:`A chip is a compact UI element that provides brief, descriptive information about an element.
It is terse, ideally one word.
It is important a button is identifiable, consistent, and communicates its actions clearly,
and is appropriately sized to its action.`})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(i,{children:e.jsx(a,{of:d})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["Default behaviour is interactive, has hover/focus/active states. When interactive the chip will render as a ",e.jsx(t.code,{children:"<button>"}),`
element.`]}),`
`,e.jsx(t.p,{children:"Default content text is aria-label unless overridden by passed in aria-label."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { DtChip } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  Chip
</dt-chip>
`})}),`
`,e.jsx(t.h2,{id:"with-icon",children:"With Icon"}),`
`,e.jsx(i,{children:e.jsx(a,{of:h})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`import { DtChip, DtIcon } from '@dialpad/dialtone-vue';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #icon>
    <dt-icon name="lock" />
  </template>
</dt-chip>
`})}),`
`,e.jsx(t.h2,{id:"with-avatar",children:"With Avatar"}),`
`,e.jsx(i,{children:e.jsx(a,{of:m})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`import { DtAvatar } from '@dialpad/dialtone';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #avatar>
    <dt-avatar>DP</dt-avatar>
  </template>
</dt-chip>
`})}),`
`,e.jsx(t.h2,{id:"non-interactive",children:"Non Interactive"}),`
`,e.jsxs(t.p,{children:["The chip is not focusable or clickable. If not interactive the chip will render as a ",e.jsx(t.code,{children:"<span>"})," element."]}),`
`,e.jsx(i,{children:e.jsx(a,{of:j})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-chip
  :interactive="false"
  :hide-close="true"
/>
`})})]})}function z(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{z as default};
//# sourceMappingURL=chip-74b365bc.js.map
