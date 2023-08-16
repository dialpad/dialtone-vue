import{j as e}from"./jsx-runtime-a3e6cb74.js";import{M as o,S as r,d as a,e as h,f as d}from"./index-850d0086.js";import{L as l}from"./lazy_show.stories-114e0f12.js";import{u as s}from"./index-8a3061d3.js";import"./iframe-713362f1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./lazy_show-1f3c68f1.js";import"./vue.esm-bundler-06a6c133.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-f19eb3b6.js";import"./utils-135fe08f.js";import"./link_constants-51338c78.js";import"./storybook_utils-b0336152.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
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
`,e.jsx(d,{})]})}function O(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{O as default};
//# sourceMappingURL=lazy_show-78a78bf3.js.map
