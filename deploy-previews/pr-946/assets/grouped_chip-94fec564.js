import{j as e}from"./jsx-runtime-3a58491d.js";import{M as r,S as d,C as p,a,b as h}from"./index-6264aa50.js";import{G as c}from"./grouped_chip.stories-f46dc297.js";import{u as o}from"./index-1cf8f7f5.js";import"./iframe-bf58bcc0.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-544d6d08.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-3c489ce7.js";import"./index-356e4a49.js";import"./_plugin-vue2_normalizer-bbedbd26.js";import"./vue.esm-eff6e72e.js";import"./chip-db5ca67b.js";import"./button-b621edab.js";import"./link_constants-51338c78.js";import"./icon-e129d5a5.js";import"./icon_constants-5d71af87.js";function X(t={}){const{wrapper:s}=Object.assign({},o(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(n.h1,{id:"dtrecipegroupedchip",children:"DtRecipeGroupedChip"}),`
`,e.jsx(d,{children:e.jsx(n.p,{children:"Grouped Chip is a format used to present related information such as callbar timers."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`Grouped chip component has related info split in two combination chips. Common use cases represented
are split callbar timers showing call time and hold time on the left hand and right hand side respectively.`}),`
`,e.jsxs(n.p,{children:["This component has 4 slots: ",e.jsx(n.strong,{children:"leftIcon"}),", ",e.jsx(n.strong,{children:"leftContent"}),", ",e.jsx(n.strong,{children:"rightIcon"})," and ",e.jsx(n.strong,{children:"rightContent"})," slot."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"leftIcon"})," is used to display an icon that best represents the leftContent."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"leftContent"})," is used to display content and is placed on the left hand side."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"rightIcon"})," is used to display an icon that best represents the rightContent."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"rightContent"})," is used to display content and is placed on the right hand side."]}),`
`,e.jsx(p,{children:e.jsx(a,{id:"recipes-chips-grouped-chips--default"})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtRecipeGroupedChip } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"split-combination-chip-showing-both-left-and-right-hand-side-content",children:"Split Combination Chip showing both left and right hand side content."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-grouped-chip>
  <template #leftIcon>
    <dt-icon name="clock" />
  </template>
  <template #leftContent>
    <div>
      0.15
    </div>
  </template>
  <template #rightIcon>
    <dt-icon name="pause" />
  </template>
  <template #rightContent>
    <div>
      0.15
    </div>
  </template>
</dt-recipe-grouped-chip>
`})})]})}}export{X as default};
//# sourceMappingURL=grouped_chip-94fec564.js.map
