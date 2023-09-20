import{j as n}from"./jsx-runtime-132e93bf.js";import{M as o,S as l,d as i,e as t,f as p}from"./index-bfcd420a.js";import{P as m,D as c,V as g}from"./pagination.stories-5f8548dc.js";import{u as s}from"./index-5b9477f2.js";import"./iframe-3d845731.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-df55c436.js";import"./vue.esm-ba2ca387.js";import"./pagination-a95947fd.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-fbaa82b1.js";import"./icon_constants-a1651734.js";function r(e){const a=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},s(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:m}),`
`,n.jsx(a.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsx(l,{children:n.jsx(a.p,{children:"Pagination allows you to divide large amounts of content into smaller chunks across multiple pages."})}),`
`,n.jsx(a.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(i,{children:n.jsx(t,{of:c})}),`
`,n.jsx(a.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(i,{children:n.jsx(t,{of:g})}),`
`,n.jsx(a.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(p,{}),`
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
`})})]})}function V(e={}){const{wrapper:a}=Object.assign({},s(),e.components);return a?n.jsx(a,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{V as default};
//# sourceMappingURL=pagination-f3063d36.js.map
