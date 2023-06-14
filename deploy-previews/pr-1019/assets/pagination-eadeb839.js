import{j as n}from"./jsx-runtime-da880aa8.js";import{M as l,S as p,C as r,a as s,b as m}from"./index-ee3141e4.js";import{P as c,D as g,V as d}from"./pagination.stories-2dc006f1.js";import{u as o}from"./index-b00643d8.js";import"./iframe-edde3bae.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-1c9c66e9.js";import"./vue.esm-bundler-e62bdd6b.js";import"./utils-701363a2.js";import"./button-f0bff3c1.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-ee68f285.js";import"./icon_constants-845465a6.js";function B(e={}){const{wrapper:i}=Object.assign({},o(),e.components);return i?n.jsx(i,Object.assign({},e,{children:n.jsx(t,{})})):t();function t(){const a=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c}),`
`,n.jsx(a.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsx(p,{children:n.jsx(a.p,{children:"Pagination allows you to divide large amounts of content into smaller chunks across multiple pages."})}),`
`,n.jsx(a.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(r,{children:n.jsx(s,{of:g})}),`
`,n.jsx(a.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(r,{children:n.jsx(s,{of:d})}),`
`,n.jsx(a.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(m,{}),`
`,n.jsx(a.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(a.h3,{id:"import",children:"Import"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-jsx",children:`import { DtPagination } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(a.h3,{id:"basic",children:"Basic"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-html",children:`<template>
  <dt-pagination
    :total-pages="10"
    :aria-label="$i18n('pagination')"
    :prev-aria-label="$i18n('previous')"
    :next-aria-label="$i18n('next')"
    :page-number-aria-label="getPageNumberAriaLabel"
  />
</template>
<script>
import DtPagination from './pagination.vue';

export default {
  name: 'DtPaginationDefault',
  components: { DtPagination },
  methods: {
    getPageNumberAriaLabel (page) {
      return page === this.totalPages ? \`Last page \${page}\` : \`Page \${page}\`;
    },
  },
};
<\/script>
`})}),`
`,n.jsx(a.h3,{id:"with-active-page",children:"With active-page"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-html",children:`<dt-pagination
  :total-pages="10"
  :active-page="5"
  :prev-aria-label="$i18n('previous')"
  :next-aria-label="$i18n('next')"
  :page-number-aria-label="getPageNumberAriaLabel"
/>
`})}),`
`,n.jsx(a.h3,{id:"with-max-visible",children:"With max-visible"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-html",children:`<dt-pagination
  :total-pages="15"
  :max-visible="7"
  :prev-aria-label="$i18n('previous')"
  :next-aria-label="$i18n('next')"
  :page-number-aria-label="getPageNumberAriaLabel"
/>
`})})]})}}export{B as default};
//# sourceMappingURL=pagination-eadeb839.js.map
