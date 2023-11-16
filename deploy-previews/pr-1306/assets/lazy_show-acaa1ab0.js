import{j as e}from"./jsx-dev-runtime-21981573.js";import{M as l,b as u,C as o,d as m,e as t}from"./index-06b8f272.js";import{L as a,D as d}from"./lazy_show.stories-dbb49b9c.js";import{u as r}from"./index-0b9a2a63.js";import"./iframe-b3de9cc2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./lazy_show-9ef36b08.js";import"./vue.esm-bundler-81c53cfe.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-878f62d6.js";import"./utils-ddad74ee.js";import"./link_constants-8ea95ec9.js";import"./storybook_utils-182ea7b7.js";function s(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(l,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"lazy-show",children:"Lazy Show"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(n.p,{children:"Lazy Show is an utility component that prevents its children from being rendered until the first time it is shown."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"basic-usage",children:"Basic Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.code,{children:"DtLazyShow"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this)," is essentially a combination of a ",e.jsxDEV(n.code,{children:"v-if"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:48},this)," and ",e.jsxDEV(n.code,{children:"v-show"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:59},this),`. This means that the child slot will not be
rendered/initialized until the first time `,e.jsxDEV(n.code,{children:"show"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:43},this)," is ",e.jsxDEV(n.code,{children:"true"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:53},this),`, after which the slot will stay in the DOM and be
hidden/shown with the `,e.jsxDEV(n.code,{children:"v-show"},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:23},this),` directive. This is useful to prevent elements which are hidden from being rendered
immediately, but keeping them alive when toggled later.`]},void 0,!0,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The lazy show wraps the slot in a parent ",e.jsxDEV(n.code,{children:"div"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:42},this)," in order to achieve this. It also wraps the ",e.jsxDEV(n.code,{children:"v-show"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:92},this)," in a ",e.jsxDEV(n.code,{children:"transition"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:106},this),`,
so you can pass any valid Vue `,e.jsxDEV(n.code,{children:"transition"},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:31},this)," class to control the enter/leave transitions."]},void 0,!0,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtLazyShow } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-lazy-show
  :transition="transition"
  :show="open"
>
  I'm Lazy!
</dt-lazy-show>
`},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(m,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(t,{},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function L(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{L as default};
//# sourceMappingURL=lazy_show-acaa1ab0.js.map
