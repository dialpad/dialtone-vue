import{j as e}from"./jsx-dev-runtime-a573fa55.js";import{M as u,b as m,C as a,d as s,e as t}from"./index-7c47571d.js";import{P as o,D as c,V as d}from"./pagination.stories-60aa3460.js";import{u as r}from"./index-4bba88b5.js";import"./iframe-14179d37.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-8a497965.js";import"./vue.esm-bundler-a1916ad5.js";import"./utils-3a75643c.js";import"./pagination-0a27ff3c.js";import"./button-4eaede26.js";import"./link_constants-8ea95ec9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-99ebc0a2.js";import"./icon_constants-77ba531a.js";function l(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(u,{of:o},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"pagination",children:"Pagination"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(n.p,{children:"Pagination allows you to divide large amounts of content into smaller chunks across multiple pages."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(a,{children:e.jsxDEV(s,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(a,{children:e.jsxDEV(s,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(t,{},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtPagination } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"basic",children:"Basic"},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<template>
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-active-page",children:"With active-page"},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-pagination
  :total-pages="10"
  :active-page="5"
  :prev-aria-label="$i18n('previous')"
  :next-aria-label="$i18n('next')"
  :page-number-aria-label="getPageNumberAriaLabel"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-max-visible",children:"With max-visible"},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-pagination
  :total-pages="15"
  :max-visible="7"
  :prev-aria-label="$i18n('previous')"
  :next-aria-label="$i18n('next')"
  :page-number-aria-label="getPageNumberAriaLabel"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:78,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:78,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function A(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(l,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(i)}export{A as default};
//# sourceMappingURL=pagination-089e5fb3.js.map
