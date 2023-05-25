import{j as n}from"./jsx-runtime-dd9bcb79.js";import{M as o,S as r,C as d,a as p,b as a}from"./index-2a4f7930.js";import{G as h,D as l}from"./grouped_chip.stories-816c2f36.js";import{u as i}from"./index-66a99bd5.js";import"./iframe-6971320c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-d08f208b.js";import"./vue.esm-ba2ca387.js";import"./chip-8641a1b0.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-67ed9c61.js";import"./icon_constants-ed54bb0d.js";function s(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},i(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:h}),`
`,n.jsx(t.h1,{id:"dtrecipegroupedchip",children:"DtRecipeGroupedChip"}),`
`,n.jsx(r,{children:n.jsx(t.p,{children:"Grouped Chip is a format used to present related information such as callbar timers."})}),`
`,n.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(t.p,{children:`Grouped chip component has related info split in two combination chips. Common use cases represented
are split callbar timers showing call time and hold time on the left hand and right hand side respectively.`}),`
`,n.jsxs(t.p,{children:["This component has 4 slots: ",n.jsx(t.strong,{children:"leftIcon"}),", ",n.jsx(t.strong,{children:"leftContent"}),", ",n.jsx(t.strong,{children:"rightIcon"})," and ",n.jsx(t.strong,{children:"rightContent"})," slot."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"leftIcon"})," is used to display an icon that best represents the leftContent."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"leftContent"})," is used to display content and is placed on the left hand side."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"rightIcon"})," is used to display an icon that best represents the rightContent."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"rightContent"})," is used to display content and is placed on the right hand side."]}),`
`,n.jsx(d,{children:n.jsx(p,{of:l})}),`
`,n.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(a,{}),`
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
`})})]})}function E(e={}){const{wrapper:t}=Object.assign({},i(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(s,e)})):s(e)}export{E as default};
//# sourceMappingURL=grouped_chip-87b8dace.js.map
