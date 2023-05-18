import{j as n}from"./jsx-runtime-9578e6cf.js";import{M as l,S as d,C as r,a as i,b as s}from"./index-e8326b4b.js";import{T as p,D as c,V as h}from"./tabs.stories-a07fd033.js";import{Tab as m}from"./tab.stories-0a6620dc.js";import{TabPanel as j}from"./tab_panel.stories-3641ec10.js";import{u as o}from"./index-64da98bd.js";import"./iframe-6a497e8a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-2a3c9efe.js";import"./vue.esm-ba2ca387.js";import"./tab-8115bfcd.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./tab_panel-40fe1173.js";import"./modal-f96ddab9.js";function a(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",h3:"h3",a:"a",pre:"pre",code:"code"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:p}),`
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
//# sourceMappingURL=tabs-13d34278.js.map
