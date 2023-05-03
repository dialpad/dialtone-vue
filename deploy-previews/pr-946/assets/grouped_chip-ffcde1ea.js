import{j as t}from"./jsx-runtime-3721799c.js";import{M as r,S as p,C as d,a,b as h}from"./index-1814fed0.js";import{G as l}from"./grouped_chip.stories-fce38ee2.js";import{u as o}from"./index-20e13536.js";import"./iframe-79306f2c.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-544d6d08.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-3c489ce7.js";import"./index-356e4a49.js";import"./storybook_utils-1ef620d9.js";import"./vue.esm-eff6e72e.js";import"./chip-135f2611.js";import"./button-45d71d86.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-b5b99f89.js";import"./icon_constants-2dbd608e.js";function E(e={}){const{wrapper:s}=Object.assign({},o(),e.components);return s?t.jsx(s,Object.assign({},e,{children:t.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l}),`
`,t.jsx(n.h1,{id:"dtrecipegroupedchip",children:"DtRecipeGroupedChip"}),`
`,t.jsx(p,{children:t.jsx(n.p,{children:"Grouped Chip is a format used to present related information such as callbar timers."})}),`
`,t.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,t.jsx(n.p,{children:`Grouped chip component has related info split in two combination chips. Common use cases represented
are split callbar timers showing call time and hold time on the left hand and right hand side respectively.`}),`
`,t.jsxs(n.p,{children:["This component has 4 slots: ",t.jsx(n.strong,{children:"leftIcon"}),", ",t.jsx(n.strong,{children:"leftContent"}),", ",t.jsx(n.strong,{children:"rightIcon"})," and ",t.jsx(n.strong,{children:"rightContent"})," slot."]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"leftIcon"})," is used to display an icon that best represents the leftContent."]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"leftContent"})," is used to display content and is placed on the left hand side."]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"rightIcon"})," is used to display an icon that best represents the rightContent."]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"rightContent"})," is used to display content and is placed on the right hand side."]}),`
`,t.jsx(d,{children:t.jsx(a,{of:ChipsStories.Default})}),`
`,t.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,t.jsx(h,{}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(n.h3,{id:"import",children:"Import"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-jsx",children:`import { DtRecipeGroupedChip } from '@dialpad/dialtone-vue';
`})}),`
`,t.jsx(n.h3,{id:"split-combination-chip-showing-both-left-and-right-hand-side-content",children:"Split Combination Chip showing both left and right hand side content."}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<dt-recipe-grouped-chip>
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
`})})]})}}export{E as default};
//# sourceMappingURL=grouped_chip-ffcde1ea.js.map
