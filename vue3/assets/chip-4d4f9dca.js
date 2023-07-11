import{j as e}from"./jsx-runtime-14f9c5f9.js";import{M as o,S as c,C as i,a,b as l}from"./index-e4d2618a.js";import{C as p,D as d,W as h,a as m,N as j}from"./chip.stories-49df85a9.js";import{u as r}from"./index-e2e7da94.js";import"./iframe-205005b8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-8d7a2403.js";import"./vue.esm-bundler-00d79a38.js";import"./utils-d2c6fc19.js";import"./chip-3ee08739.js";import"./button-df070c17.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-24a41200.js";import"./icon_constants-84bb757e.js";import"./avatar-9ddb721a.js";import"./presence-e7d907ee.js";import"./v_html-adc6af0a.js";function s(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:p}),`
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
//# sourceMappingURL=chip-4d4f9dca.js.map
