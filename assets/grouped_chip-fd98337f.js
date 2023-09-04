import{j as n}from"./jsx-runtime-d24cba40.js";import{M as o,S as r,d,e as p,f as a}from"./index-06f3e4ec.js";import{G as h,D as l}from"./grouped_chip.stories-1cbb1fbd.js";import{u as i}from"./index-6f6124c9.js";import"./iframe-2e437a6c.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-e1aad9b5.js";import"./vue.esm-ba2ca387.js";import"./chip-1a35cbe9.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-23d7fa2f.js";import"./icon_constants-6cc92332.js";function s(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},i(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:h}),`
`,n.jsx(e.h1,{id:"dtrecipegroupedchip",children:"DtRecipeGroupedChip"}),`
`,n.jsx(r,{children:n.jsx(e.p,{children:"Grouped Chip is a format used to present related information such as callbar timers."})}),`
`,n.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(e.p,{children:`Grouped chip component has related info split in two combination chips. Common use cases represented
are split callbar timers showing call time and hold time on the left hand and right hand side respectively.`}),`
`,n.jsxs(e.p,{children:["This component has 4 slots: ",n.jsx(e.strong,{children:"leftIcon"}),", ",n.jsx(e.strong,{children:"leftContent"}),", ",n.jsx(e.strong,{children:"rightIcon"})," and ",n.jsx(e.strong,{children:"rightContent"})," slot."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"leftIcon"})," is used to display an icon that best represents the leftContent."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"leftContent"})," is used to display content and is placed on the left hand side."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"rightIcon"})," is used to display an icon that best represents the rightContent."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"rightContent"})," is used to display content and is placed on the right hand side."]}),`
`,n.jsx(d,{children:n.jsx(p,{of:l})}),`
`,n.jsx(e.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(a,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { DtRecipeGroupedChip } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(e.h3,{id:"split-combination-chip-showing-both-left-and-right-hand-side-content",children:"Split Combination Chip showing both left and right hand side content."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<dt-recipe-grouped-chip>
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
`})})]})}function X(t={}){const{wrapper:e}=Object.assign({},i(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(s,t)})):s(t)}export{X as default};
//# sourceMappingURL=grouped_chip-fd98337f.js.map
