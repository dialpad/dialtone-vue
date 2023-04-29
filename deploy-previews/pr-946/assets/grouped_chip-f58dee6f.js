import{j as n}from"./jsx-runtime-1484fc58.js";import{M as r,S as d,C as p,a,b as h}from"./index-1f7b0fa1.js";import{G as l}from"./grouped_chip.stories-f46dc297.js";import{u as o}from"./index-ac913fb8.js";import"./iframe-c0475590.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-544d6d08.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-3c489ce7.js";import"./index-356e4a49.js";import"./_plugin-vue2_normalizer-bbedbd26.js";import"./vue.esm-eff6e72e.js";import"./chip-db5ca67b.js";import"./button-b621edab.js";import"./link_constants-51338c78.js";import"./icon-e129d5a5.js";import"./icon_constants-5d71af87.js";function X(e={}){const{wrapper:s}=Object.assign({},o(),e.components);return s?n.jsx(s,Object.assign({},e,{children:n.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l}),`
`,n.jsx(t.h1,{id:"dtrecipegroupedchip",children:"DtRecipeGroupedChip"}),`
`,n.jsx(d,{children:n.jsx(t.p,{children:"Grouped Chip is a format used to present related information such as callbar timers."})}),`
`,n.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(t.p,{children:`Grouped chip component has related info split in two combination chips. Common use cases represented
are split callbar timers showing call time and hold time on the left hand and right hand side respectively.`}),`
`,n.jsxs(t.p,{children:["This component has 4 slots: ",n.jsx(t.strong,{children:"leftIcon"}),", ",n.jsx(t.strong,{children:"leftContent"}),", ",n.jsx(t.strong,{children:"rightIcon"})," and ",n.jsx(t.strong,{children:"rightContent"})," slot."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"leftIcon"})," is used to display an icon that best represents the leftContent."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"leftContent"})," is used to display content and is placed on the left hand side."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"rightIcon"})," is used to display an icon that best represents the rightContent."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"rightContent"})," is used to display content and is placed on the right hand side."]}),`
`,n.jsx(p,{children:n.jsx(a,{of:ChipsStories.Default})}),`
`,n.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(h,{}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.h3,{id:"import",children:"Import"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { DtRecipeGroupedChip } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(t.h3,{id:"split-combination-chip-showing-both-left-and-right-hand-side-content",children:"Split Combination Chip showing both left and right hand side content."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-recipe-grouped-chip>
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
//# sourceMappingURL=grouped_chip-f58dee6f.js.map
