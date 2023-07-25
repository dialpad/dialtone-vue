import{j as t}from"./jsx-runtime-3353eee3.js";import{M as o,S as r,C as d,a as p,b as a}from"./index-3e54eb8a.js";import{G as h,D as l}from"./grouped_chip.stories-ac633782.js";import{u as s}from"./index-2503e213.js";import"./iframe-8bf55909.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./storybook_utils-30cbb8fe.js";import"./vue.esm-bundler-2337cf2c.js";import"./utils-bfbb1d3e.js";import"./chip-c72290bc.js";import"./button-352f7b66.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-252a6ded.js";import"./icon_constants-3bcad7cc.js";function i(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},s(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(o,{of:h}),`
`,t.jsx(n.h1,{id:"dtrecipegroupedchip",children:"DtRecipeGroupedChip"}),`
`,t.jsx(r,{children:t.jsx(n.p,{children:"Grouped Chip is a format used to present related information such as callbar timers."})}),`
`,t.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,t.jsx(n.p,{children:`Grouped chip component has related info split in two combination chips. Common use cases represented
are split callbar timers showing call time and hold time on the left hand and right hand side respectively.`}),`
`,t.jsxs(n.p,{children:["This component has 4 slots: ",t.jsx(n.strong,{children:"leftIcon"}),", ",t.jsx(n.strong,{children:"leftContent"}),", ",t.jsx(n.strong,{children:"rightIcon"})," and ",t.jsx(n.strong,{children:"rightContent"})," slot."]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"leftIcon"})," is used to display an icon that best represents the leftContent."]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"leftContent"})," is used to display content and is placed on the left hand side."]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"rightIcon"})," is used to display an icon that best represents the rightContent."]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"rightContent"})," is used to display content and is placed on the right hand side."]}),`
`,t.jsx(d,{children:t.jsx(p,{of:l})}),`
`,t.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,t.jsx(a,{}),`
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
`})})]})}function N(e={}){const{wrapper:n}=Object.assign({},s(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(i,e)})):i(e)}export{N as default};
//# sourceMappingURL=grouped_chip-b8c04b0d.js.map
