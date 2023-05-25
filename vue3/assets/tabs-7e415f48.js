import{j as n}from"./jsx-runtime-8a3869e6.js";import{M as p,S as d,C as o,a,b as s}from"./index-0c30a28e.js";import{T as c,D as h,V as m}from"./tabs.stories-63abc2bd.js";import{Tab as j}from"./tab.stories-2d77bbcc.js";import{TabPanel as x}from"./tab_panel.stories-05a28f4c.js";import{u as l}from"./index-da1236ec.js";import"./iframe-4c902131.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-d908e493.js";import"./vue.esm-bundler-7a4a8caf.js";import"./utils-2e2a6796.js";import"./tab_group-10fc384f.js";import"./tab-ab8c27fe.js";import"./button-4aa7d2ac.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./tab_panel-8d949e1b.js";import"./modal-f96ddab9.js";function B(t={}){const{wrapper:r}=Object.assign({},l(),t.components);return r?n.jsx(r,Object.assign({},t,{children:n.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",h3:"h3",a:"a",pre:"pre",code:"code"},l(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:c}),`
`,n.jsx(e.h1,{id:"tabs",children:"Tabs"}),`
`,n.jsx(d,{children:n.jsx(e.p,{children:"Tabs allow users to navigation between grouped content in different views while within the same page context."})}),`
`,n.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(e.p,{children:"Tabs have two slots:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"The tabs"})," slot"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"})," slot for tab panel"]}),`
`]}),`
`,n.jsx(o,{children:n.jsx(a,{of:h})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(o,{children:n.jsx(a,{of:m})}),`
`,n.jsx(e.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(e.h3,{id:"tabgroup",children:"TabGroup"}),`
`,n.jsx(s,{}),`
`,n.jsx(e.h3,{id:"tabpanel",children:"TabPanel"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h3,{id:"tab",children:"Tab"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["See also ",n.jsx(e.a,{href:"https://dialtone.netlify.app/components/tabs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Dialtone documentation"})," and ",n.jsx(e.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel",target:"_blank",rel:"nofollow noopener noreferrer",children:"wai aria practices 1.1"})]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { DtTabGroup } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(e.h3,{id:"with-props",children:"With Props"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<dt-tab-group
  size="md"
  inverted
  borderless
  disabled
>
  <template #tabs>
    <dt-tab
      id="1"
      panel-id="2"
    >
      First
    </dt-tab>
  </template>

  <dt-tab-panel
    id="2"
    tab-id="1"
  >
    <p> First Panel </p>
  </dt-tab-panel>
</dt-tab-group>
`})})]})}}export{B as default};
//# sourceMappingURL=tabs-7e415f48.js.map
