import{j as e}from"./jsx-runtime-24b0dd82.js";import{M as o,S as r,C as a,a as h,b as d}from"./index-4ee53ed6.js";import{L as l}from"./lazy_show.stories-a2bea1ff.js";import{u as s}from"./index-0b491eae.js";import"./iframe-8be677bd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./lazy_show-fc813a1d.js";import"./vue.esm-bundler-88154bf9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-6f7eb085.js";import"./utils-335529f9.js";import"./link_constants-51338c78.js";import"./storybook_utils-2d5d1f9a.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"lazy-show",children:"Lazy Show"}),`
`,e.jsx(r,{children:e.jsx(n.p,{children:"Lazy Show is a utility component that prevents its children from being rendered until the first time it is shown."})}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"DtLazyShow"})," is essentially a combination of a ",e.jsx(n.code,{children:"v-if"})," and ",e.jsx(n.code,{children:"v-show"}),`. This means that the child slot will not be
rendered/initialized until the first time `,e.jsx(n.code,{children:"show"})," is ",e.jsx(n.code,{children:"true"}),`, after which the slot will stay in the DOM and be
hidden/shown with the `,e.jsx(n.code,{children:"v-show"}),` directive. This is useful to prevent elements which are hidden from being rendered
immediately, but keeping them alive when toggled later.`]}),`
`,e.jsxs(n.p,{children:["The lazy show wraps the slot in a parent ",e.jsx(n.code,{children:"div"})," in order to achieve this. It also wraps the ",e.jsx(n.code,{children:"v-show"})," in a ",e.jsx(n.code,{children:"transition"}),`,
so you can pass any valid Vue `,e.jsx(n.code,{children:"transition"})," class to control the enter/leave transitions."]}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtLazyShow } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-lazy-show
  :transition="transition"
  :show="open"
>
  I'm Lazy!
</dt-lazy-show>
`})}),`
`,e.jsx(a,{children:e.jsx(h,{of:ShowStories.Default})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{})]})}function I(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{I as default};
//# sourceMappingURL=lazy_show-99d616ea.js.map
