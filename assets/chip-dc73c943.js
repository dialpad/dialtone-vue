import{j as e}from"./jsx-runtime-dbf34d20.js";import{M as c,S as l,C as t,a as i,b as p}from"./index-0bdd3a86.js";import{C as d,D as h,W as m,a as j,N as x}from"./chip.stories-34d22a07.js";import{u as o}from"./index-c71764b6.js";import"./iframe-21143684.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-2ac5aadd.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-2a232650.js";import"./vue.esm-ba2ca387.js";import"./chip-22576ea3.js";import"./button-d61a4073.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-80610cd9.js";import"./icon_constants-844cbbec.js";import"./avatar-378ce583.js";import"./presence-16e0b832.js";function _(a={}){const{wrapper:s}=Object.assign({},o(),a.components);return s?e.jsx(s,Object.assign({},a,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},o(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
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
//# sourceMappingURL=chip-dc73c943.js.map
