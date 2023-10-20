import{j as e}from"./jsx-runtime-8ddeea0f.js";import{M as o,b as l,C as s,d as t,e as i}from"./index-79770356.js";import{B as c,D as h,V as u}from"./breadcrumbs.stories-e0ea380f.js";import{BreadcrumbItem as m}from"./breadcrumb_item.stories-d1437116.js";import{u as d}from"./index-0b9249cf.js";import"./iframe-9269b54f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-4cdf99b7.js";import"./utils-5c9c602d.js";import"./vue.esm-ba2ca387.js";import"./breadcrumbs-a8f7af5e.js";import"./breadcrumb_item-23f042bd.js";import"./link-fde1f7cd.js";import"./link_constants-8ea95ec9.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function a(n){const r=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",ol:"ol",strong:"strong",h3:"h3",a:"a",code:"code",pre:"pre"},d(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(r.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsx(l,{children:e.jsx(r.p,{children:`Breadcrumbs are links used to provide context for the currently-viewed page and
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
`,e.jsx(s,{children:e.jsx(t,{of:h})}),`
`,e.jsx(r.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{children:e.jsx(t,{of:u})}),`
`,e.jsx(r.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(r.h3,{id:"breadcrumbs-props",children:"Breadcrumbs Props"}),`
`,e.jsx(i,{}),`
`,e.jsx(r.h3,{id:"breadcrumb-item-props",children:"Breadcrumb Item Props"}),`
`,e.jsxs(r.p,{children:["Breadcrumb items include ",e.jsx(r.a,{href:"?path=/story/components-link--default",children:"Link component"}),"."]}),`
`,e.jsx(i,{of:m}),`
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
`})})]})}function O(n={}){const{wrapper:r}=Object.assign({},d(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(a,n)})):a(n)}export{O as default};
//# sourceMappingURL=breadcrumbs-21888f95.js.map
