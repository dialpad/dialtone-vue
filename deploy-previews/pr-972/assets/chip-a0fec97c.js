import{j as e}from"./jsx-runtime-7b99f800.js";import{M as c,S as l,C as t,a as i,b as p}from"./index-bd2d8e0d.js";import{C as d,D as h,W as m,a as j,N as x}from"./chip.stories-9e1aa7eb.js";import{u as o}from"./index-3c72b975.js";import"./iframe-2c64ea05.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-b781ced2.js";import"./vue.esm-eff6e72e.js";import"./chip-8511b43f.js";import"./button-45d71d86.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-64b3bee5.js";import"./icon_constants-0609a8e8.js";import"./avatar-8cf90a15.js";import"./presence-8bac0262.js";function _(a={}){const{wrapper:s}=Object.assign({},o(),a.components);return s?e.jsx(s,Object.assign({},a,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},o(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(n.h1,{id:"chip",children:"Chip"}),`
`,e.jsx(l,{children:e.jsx(n.p,{children:`A chip is a compact UI element that provides brief, descriptive information about an element.
It is terse, ideally one word.
It is important a button is identifiable, consistent, and communicates its actions clearly,
and is appropriately sized to its action.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(t,{children:e.jsx(i,{of:h})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(p,{}),`
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
`,e.jsx(t,{children:e.jsx(i,{of:m})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`import { DtChip, DtIcon } from '@dialpad/dialtone-vue';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #icon>
    <dt-icon name="lock" />
  </template>
</dt-chip>
`})}),`
`,e.jsx(n.h2,{id:"with-avatar",children:"With Avatar"}),`
`,e.jsx(t,{children:e.jsx(i,{of:j})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`import { DtAvatar } from '@dialpad/dialtone';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #avatar>
    <dt-avatar>DP</dt-avatar>
  </template>
</dt-chip>
`})}),`
`,e.jsx(n.h2,{id:"non-interactive",children:"Non Interactive"}),`
`,e.jsxs(n.p,{children:["The chip is not focusable or clickable. If not interactive the chip will render as a ",e.jsx(n.code,{children:"<span>"})," element."]}),`
`,e.jsx(t,{children:e.jsx(i,{of:x})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-chip
  :interactive="false"
  :hide-close="true"
/>
`})})]})}}export{_ as default};
//# sourceMappingURL=chip-a0fec97c.js.map
