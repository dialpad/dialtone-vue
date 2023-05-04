import{j as e}from"./jsx-runtime-8f363268.js";import{M as r,S as a,C as h,a as d,b as l}from"./index-60c27370.js";import{L as c}from"./lazy_show.stories-8c8b2662.js";import{u as o}from"./index-fc552ea2.js";import"./iframe-7499da66.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./lazy_show-25bbda9a.js";import"./vue.esm-bundler-2e3b72e0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-fa62dafe.js";import"./utils-9325de8f.js";import"./link_constants-51338c78.js";import"./storybook_utils-35e0d11d.js";function T(t={}){const{wrapper:i}=Object.assign({},o(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
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
//# sourceMappingURL=lazy_show-1248e1d4.js.map
