import{j as e}from"./jsx-runtime-979ec952.js";import{M as r,S as a,C as h,a as d,b as l}from"./index-59b80a08.js";import{L as c}from"./lazy_show.stories-7be71f89.js";import{u as o}from"./index-f7e87931.js";import"./iframe-8f56e00c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./lazy_show-30f95b43.js";import"./vue.esm-bundler-3bf5edd9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-59f99281.js";import"./utils-b704f328.js";import"./link_constants-51338c78.js";import"./storybook_utils-a2047fb2.js";function T(t={}){const{wrapper:i}=Object.assign({},o(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(n.h1,{id:"lazy-show",children:"Lazy Show"}),`
`,e.jsx(a,{children:e.jsx(n.p,{children:"Lazy Show is a utility component that prevents its children from being rendered until the first time it is shown."})}),`
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
`,e.jsx(h,{children:e.jsx(d,{of:ShowStories.Default})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{})]})}}export{T as default};
//# sourceMappingURL=lazy_show-356bf879.js.map
