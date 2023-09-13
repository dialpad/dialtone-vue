import{j as e}from"./jsx-dev-runtime-0b38a7b5.js";import{M as m,S as a,d as i,e as l,f as o}from"./index-2ba2d9ef.js";import{B as d,D as t,C as c,V as f,E as N}from"./badge.stories-0e776034.js";import{u as r}from"./index-ce5d9d6b.js";import"./iframe-2012aa17.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./storybook_utils-87f6670b.js";import"./vue.esm-bundler-a9a971fb.js";import"./utils-48d15f2c.js";import"./badge-4c6ba43d.js";import"./icon-f7e2321d.js";import"./icon_constants-a25b1b68.js";import"./_plugin-vue_export-helper-c27b6911.js";function u(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},r(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(m,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"badge",children:"Badge"},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this),`
`,e.jsxDEV(a,{children:e.jsxDEV(n.p,{children:`A badge is a compact UI element providing brief, descriptive information about an element and its surrounding context.
It is terse, ideally one word.`},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"count",children:"Count"},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:f},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"examples",children:"Examples"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:N},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(o,{},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtBadge } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-badge
  text="badge"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"count-1",children:"Count"},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-badge
  text="1"
  kind="count"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"variants-1",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-badge
  text="badge"
  decoration="black-400 | black-500 | black-900 | red-200 | red-300 | red-400
    | purple-200 | purple-300 | purple-400 | purple-500 | blue-200 | blue-300 | blue-400
    | green-300 | green-400 | green-500 | gold-300 | gold-400 | gold-500 | magenta-200
    | magenta-300 | magenta-400"
  type="default | info | success  | warning | critical | bulletin | ai"
  kind="label | count"
  leftIcon="any icon name"
  rightIcon="any icon name"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function O(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(u,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):u(s)}export{O as default};
//# sourceMappingURL=badge-dc087a00.js.map
