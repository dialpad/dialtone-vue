import{j as e}from"./jsx-runtime-d5e0fb92.js";import{M as o,b as r,C as a,d as h,e as d}from"./index-78c7c729.js";import{L as l}from"./lazy_show.stories-73968a3f.js";import{u as s}from"./index-44409fe1.js";import"./iframe-a0b75be2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./lazy_show-ac5fd1cd.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-d2753bc0.js";import"./link_constants-8ea95ec9.js";import"./storybook_utils-10cbe996.js";import"./utils-df639674.js";import"./vue.esm-ba2ca387.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
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
`,e.jsx(d,{})]})}function C(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{C as default};
//# sourceMappingURL=lazy_show-3ab8c7e6.js.map
