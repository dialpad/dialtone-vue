import{j as n}from"./jsx-runtime-76e11f71.js";import{M as d,S as p,d as a,e as o,f as s}from"./index-d8b51c44.js";import{T as c,D as h,V as m}from"./tabs.stories-4536b6c3.js";import{Tab as j}from"./tab.stories-0a6620dc.js";import{TabPanel as x}from"./tab_panel.stories-ca101adf.js";import{u as l}from"./index-90bdd5f9.js";import"./iframe-9bd39358.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-ff2c9484.js";import"./vue.esm-ba2ca387.js";import"./tab-8115bfcd.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./tab_panel-5f6c9511.js";import"./modal-600bd46a.js";function R(t={}){const{wrapper:r}=Object.assign({},l(),t.components);return r?n.jsx(r,Object.assign({},t,{children:n.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",h3:"h3",a:"a",pre:"pre",code:"code"},l(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:c}),`
`,n.jsx(e.h1,{id:"tabs",children:"Tabs"}),`
`,n.jsx(p,{children:n.jsx(e.p,{children:"Tabs allow users to navigation between grouped content in different views while within the same page context."})}),`
`,n.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(e.p,{children:"Tabs have two slots:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"The tabs"})," slot"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"})," slot for tab panel"]}),`
`]}),`
`,n.jsx(a,{children:n.jsx(o,{of:h})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(a,{children:n.jsx(o,{of:m})}),`
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
`})})]})}}export{R as default};
//# sourceMappingURL=tabs-8dc55b8f.js.map
