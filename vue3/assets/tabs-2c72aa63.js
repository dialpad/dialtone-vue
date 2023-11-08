import{j as n}from"./jsx-runtime-2e103b1c.js";import{M as l,b as d,C as r,d as i,e as s}from"./index-22cd5f11.js";import{T as p,D as c,V as h}from"./tabs.stories-431ba308.js";import{Tab as m}from"./tab.stories-a6991016.js";import{TabPanel as j}from"./tab_panel.stories-7b1712cb.js";import{u as o}from"./index-8fec95ed.js";import"./iframe-19f533ad.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-182ea7b7.js";import"./tab_group-b87c6d02.js";import"./tab-5250a388.js";import"./button-5c6db19f.js";import"./vue.esm-bundler-15c892b6.js";import"./utils-9eb727eb.js";import"./link_constants-8ea95ec9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./tab_panel-f8e75654.js";import"./modal-f96ddab9.js";function a(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",h3:"h3",a:"a",pre:"pre",code:"code"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:p}),`
`,n.jsx(e.h1,{id:"tabs",children:"Tabs"}),`
`,n.jsx(d,{children:n.jsx(e.p,{children:"Tabs allow users to navigation between grouped content in different views while within the same page context."})}),`
`,n.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(e.p,{children:"Tabs have two slots:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"The tabs"})," slot"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"})," slot for tab panel"]}),`
`]}),`
`,n.jsx(r,{children:n.jsx(i,{of:c})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(r,{children:n.jsx(i,{of:h})}),`
`,n.jsx(e.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(e.h3,{id:"tabgroup",children:"TabGroup"}),`
`,n.jsx(s,{}),`
`,n.jsx(e.h3,{id:"tabpanel",children:"TabPanel"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h3,{id:"tab",children:"Tab"}),`
`,n.jsx(s,{of:m}),`
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
`})})]})}function R(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(a,t)})):a(t)}export{R as default};
//# sourceMappingURL=tabs-2c72aa63.js.map
