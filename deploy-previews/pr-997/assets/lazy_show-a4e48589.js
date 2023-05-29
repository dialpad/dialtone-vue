import{j as e}from"./jsx-dev-runtime-6d34d2e8.js";import{M as l,S as o,C as u,a as m,b as t}from"./index-a94ffbaf.js";import{L as a}from"./lazy_show.stories-4d24b3ad.js";import{u as r}from"./index-7e7ca602.js";import"./iframe-a814685a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./lazy_show-0b3a0cf0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-9102a84a.js";import"./vue.esm-eff6e72e.js";import"./link_constants-51338c78.js";import"./storybook_utils-96cfb4be.js";function s(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(l,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"lazy-show",children:"Lazy Show"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(n.p,{children:"Lazy Show is a utility component that prevents its children from being rendered until the first time it is shown."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
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
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-lazy-show
  :transition="transition"
  :show="open"
>
  I'm Lazy!
</dt-lazy-show>
`},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(m,{of:ShowStories.Default},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(t,{},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function L(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{L as default};
//# sourceMappingURL=lazy_show-a4e48589.js.map
