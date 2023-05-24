import{j as e}from"./jsx-runtime-7d8661d5.js";import{M as a,S as d,C as o,a as l,b as c}from"./index-2e2996eb.js";import{T as h,D as p,V as g}from"./toggle.stories-1f1e11ce.js";import{u as r}from"./index-0707f7d9.js";import"./iframe-6280ee4e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-cf9b483a.js";import"./vue.esm-bundler-15aa0fd7.js";import"./utils-66883e36.js";import"./_plugin-vue_export-helper-c27b6911.js";function E(t={}){const{wrapper:s}=Object.assign({},r(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",h3:"h3",strong:"strong",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(n.h1,{id:"toggle",children:"Toggle"}),`
`,e.jsx(d,{children:e.jsx(n.p,{children:`Toggles (aka "Switches") are control elements that allow the user to make a binary on/off selection.
They are commonly used in places like settings and user preferences, but can appear in the product UI as well.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:"Toggles are typically paired with a label which identifies the option."}),`
`,e.jsx(o,{children:e.jsx(l,{of:p})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["This component uses a native button element under the hood that has a role ",e.jsx(n.code,{children:"switch"})," and type ",e.jsx(n.code,{children:"button"})," to improve accessibility."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/2021/NOTE-wai-aria-practices-1.2-20211129/examples/switch/switch-button.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"See W3C guidelines"}),`
for more information.`]}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsxs(n.p,{children:["The button element should be fully accessible by keyboard. To accomplish this, the ",e.jsx(n.code,{children:"DtToggle"}),` component automatically
populates several ARIA attributes to the underlying `,e.jsx(n.code,{children:"button"}),` element depending on the checked and
disabled states. However, if a label default slot is not used with `,e.jsx(n.code,{children:"DtToggle"}),`
(without including an `,e.jsx(n.code,{children:"aria-label"}),"), a console warning error will be thrown indicating that this issue exists."]}),`
`,e.jsx(n.h3,{id:"focus--keyboard",children:"Focus & Keyboard"}),`
`,e.jsxs(n.p,{children:["The button element should capture keyboard focus as long as it is not disabled (",e.jsx(n.code,{children:"disabled"})," prop is ",e.jsx(n.code,{children:"true"}),`).
`,e.jsx(n.code,{children:"ENTER"}),` key will
emit a `,e.jsx(n.strong,{children:"change"})," event with the current value of the toggle and will change its internal ",e.jsx(n.code,{children:"checked"})," state."]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(o,{children:e.jsx(l,{of:g})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtToggle } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-toggle
>
  My Label
</dt-toggle>
`})}),`
`,e.jsx(n.h3,{id:"label--checked",children:"Label & Checked"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-toggle
  checked
>
  My Label
</dt-toggle>
`})}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-toggle
  disabled
>
  My Label
</dt-toggle>
`})})]})}}export{E as default};
//# sourceMappingURL=toggle-c2ba6012.js.map
