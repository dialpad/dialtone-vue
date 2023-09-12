import{j as e}from"./jsx-runtime-0f3a3e5e.js";import{M as o,S as l,d as s,e as t,f as i}from"./index-00e3ea6e.js";import{B as c,D as h,V as u,a as m}from"./breadcrumbs.stories-fb8cdd36.js";import{u as d}from"./index-7683571c.js";import"./iframe-1f0202b1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./storybook_utils-8dde5fa6.js";import"./vue.esm-bundler-400586b0.js";import"./utils-0b5636ec.js";import"./breadcrumbs-ae53ff88.js";import"./link-b0c35c95.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";function a(r){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",ol:"ol",strong:"strong",h3:"h3",a:"a",code:"code",pre:"pre"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsx(l,{children:e.jsx(n.p,{children:`Breadcrumbs are links used to provide context for the currently-viewed page and
where it is located within the overall site structure.`})}),`
`,e.jsx(n.p,{children:`Breadcrumbs show users where they are within a site’s hierarchy. Breadcrumbs help orient the user and allow for
navigation to previous page levels. It can be appropriate to use a breadcrumb when:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The user is many levels of navigation deep"}),`
`,e.jsx(n.li,{children:"The current page does not have its own navigation"}),`
`,e.jsx(n.li,{children:"The user needs to quickly go back to the previous parent page"}),`
`]}),`
`,e.jsx(n.h2,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsx(n.p,{children:`Breadcrumbs are always treated as secondary and should not entirely replace the primary navigation.
They shouldn’t be used for products that have single level navigation because they create unnecessary clutter.`}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`Breadcrumbs should be the first page element—placed directly above the page’s title.
All pages that appear in the breadcrumb should link to their respective page.
The page the user is on should always be the last page listed and not linked.`}),`
`,e.jsx(n.p,{children:"These breadcrumbs styles are provided in two visual styles:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": Our muted link color."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inverted"}),": For scenarios when you want to place the breadcrumbs on a non-white."]}),`
`]}),`
`,e.jsx(s,{children:e.jsx(t,{of:h})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{children:e.jsx(t,{of:u})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(n.h3,{id:"breadcrumbs-props",children:"Breadcrumbs Props"}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h3,{id:"breadcrumb-item-props",children:"Breadcrumb Item Props"}),`
`,e.jsxs(n.p,{children:["Breadcrumb items include ",e.jsx(n.a,{href:"?path=/story/components-link--default",children:"Link component"}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:`HTML doesn't provide dedicated semantic elements for breadcrumbs, so we need to add a
few ARIA attributes to make them accessible.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nav"})," - Use this landmark element to guide screen readers to this navigational unit."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-label="breadcrumbs"'})," - applied to the nav landmark element, this provides a description of the navigation unit."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ol"}),` - This child element of .d-breadcrumbs communicates that breadcrumbs are a structured, navigational
hierarchy to screen readers.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-current="location"'})," - used to denote the current page."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtBreadcrumbs, DtBreadcrumbItem } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"with-props",children:"With Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-breadcrumbs
  :breadcrumbs="[{
    href: '#',
    label: 'Root',
  }]"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-inverted-and-slot",children:"With inverted and slot"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-breadcrumbs inverted>
  <dt-breadcrumb-item
      inverted
      selected
      label="label"
      url="#"
  >
    Label
  </dt-breadcrumb-item>
</dt-breadcrumbs>
`})})]})}function L(r={}){const{wrapper:n}=Object.assign({},d(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(a,r)})):a(r)}export{L as default};
//# sourceMappingURL=breadcrumbs-43aab2b9.js.map