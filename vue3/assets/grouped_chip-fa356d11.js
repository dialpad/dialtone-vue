import{j as n}from"./jsx-runtime-66ce1ef1.js";import{M as o,b as r,C as d,d as p,e as a}from"./index-522ba449.js";import{G as h,D as l}from"./grouped_chip.stories-a29b9a0d.js";import{u as i}from"./index-87fa5ff3.js";import"./iframe-9639b9be.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-3d124f1b.js";import"./vue.esm-bundler-29004354.js";import"./utils-810cfe6f.js";import"./grouped_chip-a9256e12.js";import"./chip-ade361fc.js";import"./button-0ee7bf53.js";import"./link_constants-8ea95ec9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-bd97a3a1.js";import"./icon_constants-c8c2c53a.js";function s(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},i(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:h}),`
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
//# sourceMappingURL=grouped_chip-fa356d11.js.map
