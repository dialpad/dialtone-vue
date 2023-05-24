import{j as e}from"./jsx-runtime-3652f631.js";import{M as l,S as c,C as i,a,b as d}from"./index-5184f493.js";import{B as h,D as u,V as m,a as p}from"./breadcrumbs.stories-08cc94a2.js";import{u as o}from"./index-cb2dd985.js";import"./iframe-f139ac45.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-06870cb8.js";import"./vue.esm-bundler-7a4a8caf.js";import"./utils-2e2a6796.js";import"./link-3f8d4801.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";function O(n={}){const{wrapper:s}=Object.assign({},o(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(t,{})})):t();function t(){const r=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",ol:"ol",strong:"strong",h3:"h3",a:"a",code:"code",pre:"pre"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(r.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsx(c,{children:e.jsx(r.p,{children:`Breadcrumbs are links used to provide context for the currently-viewed page and
where it is located within the overall site structure.`})}),`
`,e.jsx(r.p,{children:`Breadcrumbs show users where they are within a site’s hierarchy. Breadcrumbs help orient the user and allow for
navigation to previous page levels. It can be appropriate to use a breadcrumb when:`}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"The user is many levels of navigation deep"}),`
`,e.jsx(r.li,{children:"The current page does not have its own navigation"}),`
`,e.jsx(r.li,{children:"The user needs to quickly go back to the previous parent page"}),`
`]}),`
`,e.jsx(r.h2,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsx(r.p,{children:`Breadcrumbs are always treated as secondary and should not entirely replace the primary navigation.
They shouldn’t be used for products that have single level navigation because they create unnecessary clutter.`}),`
`,e.jsx(r.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(r.p,{children:`Breadcrumbs should be the first page element—placed directly above the page’s title.
All pages that appear in the breadcrumb should link to their respective page.
The page the user is on should always be the last page listed and not linked.`}),`
`,e.jsx(r.p,{children:"These breadcrumbs styles are provided in two visual styles:"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Default"}),": Our muted link color."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Inverted"}),": For scenarios when you want to place the breadcrumbs on a non-white."]}),`
`]}),`
`,e.jsx(i,{children:e.jsx(a,{of:u})}),`
`,e.jsx(r.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{children:e.jsx(a,{of:m})}),`
`,e.jsx(r.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(r.h3,{id:"breadcrumbs-props",children:"Breadcrumbs Props"}),`
`,e.jsx(d,{}),`
`,e.jsx(r.h3,{id:"breadcrumb-item-props",children:"Breadcrumb Item Props"}),`
`,e.jsxs(r.p,{children:["Breadcrumb items include ",e.jsx(r.a,{href:"?path=/story/components-link--default",children:"Link component"}),"."]}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(r.p,{children:`HTML doesn't provide dedicated semantic elements for breadcrumbs, so we need to add a
few ARIA attributes to make them accessible.`}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"nav"})," - Use this landmark element to guide screen readers to this navigational unit."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:'aria-label="breadcrumbs"'})," - applied to the nav landmark element, this provides a description of the navigation unit."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"ol"}),` - This child element of .d-breadcrumbs communicates that breadcrumbs are a structured, navigational
hierarchy to screen readers.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:'aria-current="location"'})," - used to denote the current page."]}),`
`]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"import",children:"Import"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { DtBreadcrumbs, DtBreadcrumbItem } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(r.h3,{id:"with-props",children:"With Props"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<dt-breadcrumbs
  :breadcrumbs="[{
    href: '#',
    label: 'Root',
  }]"
/>
`})}),`
`,e.jsx(r.h3,{id:"with-inverted-and-slot",children:"With inverted and slot"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<dt-breadcrumbs inverted>
  <dt-breadcrumb-item
      inverted
      selected
      label="label"
      url="#"
  >
    Label
  </dt-breadcrumb-item>
</dt-breadcrumbs>
`})})]})}}export{O as default};
//# sourceMappingURL=breadcrumbs-6257650a.js.map
