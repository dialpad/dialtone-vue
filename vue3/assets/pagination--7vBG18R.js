import{j as n}from"./jsx-runtime-TyEHnBjv.js";import{M as o,b as l,C as i,d as t,e as p}from"./index-mPtuFS7F.js";import{P as m,D as c,V as g}from"./pagination.stories-wB5LtfCo.js";import{u as s}from"./index-LF9c9U57.js";import"./iframe-aJIPx8Ej.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-e6jHZmnO.js";import"./index-PPLHz8o0.js";import"./chunk-AY7I2SME-4UylTnhF.js";import"./storybook_utils-dy5aucTw.js";import"./button-QSbPABQk.js";import"./vue.esm-bundler-pfnFGw-8.js";import"./utils-uw-tjP-u.js";import"./link_constants-Igh3f6J8.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./icon-z49A8j_D.js";import"./icon_constants-spQP7USY.js";function r(e){const a=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},s(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:m}),`
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
`})})]})}function O(e={}){const{wrapper:a}=Object.assign({},s(),e.components);return a?n.jsx(a,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{O as default};
//# sourceMappingURL=pagination--7vBG18R.js.map