import{j as e}from"./jsx-runtime-04ae389f.js";import{M as c,S as l,C as n,a as i,b as p}from"./index-d61f2f1d.js";import{C as d,D as h,W as m,a as j,N as x}from"./chip.stories-8f7f660f.js";import{u as o}from"./index-63113fc5.js";import"./iframe-359f194b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-1c9c66e9.js";import"./vue.esm-bundler-e62bdd6b.js";import"./utils-701363a2.js";import"./chip-c65179c6.js";import"./button-f0bff3c1.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-ee68f285.js";import"./icon_constants-845465a6.js";import"./avatar-1e57d5c6.js";import"./presence-4a8587f4.js";import"./v_html-b33ff62c.js";function B(a={}){const{wrapper:s}=Object.assign({},o(),a.components);return s?e.jsx(s,Object.assign({},a,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},o(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(t.h1,{id:"chip",children:"Chip"}),`
`,e.jsx(l,{children:e.jsx(t.p,{children:`A chip is a compact UI element that provides brief, descriptive information about an element.
It is terse, ideally one word.
It is important a button is identifiable, consistent, and communicates its actions clearly,
and is appropriately sized to its action.`})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n,{children:e.jsx(i,{of:h})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(p,{}),`
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
`,e.jsx(n,{children:e.jsx(i,{of:m})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`import { DtChip, DtIcon } from '@dialpad/dialtone-vue';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #icon>
    <dt-icon name="lock" />
  </template>
</dt-chip>
`})}),`
`,e.jsx(t.h2,{id:"with-avatar",children:"With Avatar"}),`
`,e.jsx(n,{children:e.jsx(i,{of:j})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`import { DtAvatar } from '@dialpad/dialtone';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #avatar>
    <dt-avatar>DP</dt-avatar>
  </template>
</dt-chip>
`})}),`
`,e.jsx(t.h2,{id:"non-interactive",children:"Non Interactive"}),`
`,e.jsxs(t.p,{children:["The chip is not focusable or clickable. If not interactive the chip will render as a ",e.jsx(t.code,{children:"<span>"})," element."]}),`
`,e.jsx(n,{children:e.jsx(i,{of:x})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-chip
  :interactive="false"
  :hide-close="true"
/>
`})})]})}}export{B as default};
//# sourceMappingURL=chip-a239dd5e.js.map
