import{j as e}from"./jsx-runtime-6da78297.js";import{M as l,S as d,C as i,a as t,b as c}from"./index-9897f089.js";import{V as h,D as m,a as p}from"./validation_messages.stories-6b2e5d4f.js";import{u as o}from"./index-c25ec036.js";import"./iframe-5695a98a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./storybook_utils-720f34d4.js";import"./vue.esm-ba2ca387.js";import"./validation_messages-ef775904.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function W(n={}){const{wrapper:a}=Object.assign({},o(),n.components);return a?e.jsx(a,Object.assign({},n,{children:e.jsx(r,{})})):r();function r(){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(s.h1,{id:"validation-messages",children:"Validation Messages"}),`
`,e.jsx(d,{children:e.jsx(s.p,{children:`Validation messages are used to convey information to the user about the current state of the input element. These
messages can have an error, warning or success type.`})}),`
`,e.jsx(s.h2,{id:"validation-message-format",children:"Validation Message Format"}),`
`,e.jsx(s.p,{children:"Each provided validation message has the following format:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-json",children:`{
  message: "Some informative message",
  type: "error|warning|success",
}
`})}),`
`,e.jsx(s.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(s.p,{children:[`Validation messages are typically paired with an input element. They are currently built in to some of
our shared input components such as `,e.jsx(s.code,{children:"dt-input"}),", ",e.jsx(s.code,{children:"dt-radio-group"}),"."]}),`
`,e.jsx(i,{children:e.jsx(t,{of:m})}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{children:e.jsx(t,{of:p})}),`
`,e.jsx(s.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"import",children:"Import"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { DtValidationMessages } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx("h3",{style:{color:"red"},children:"With Error Messages"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<dt-validation-messages
  :validationMessages="[{ message: 'Error', type: 'error' }]"
/>
`})}),`
`,e.jsx("h3",{style:{color:"Goldenrod"},children:"With Warning Messages"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<dt-validation-messages
  :validationMessages="[{ message: 'Warning', type: 'warning' }]"
/>
`})}),`
`,e.jsx("h3",{style:{color:"green"},children:"With Success Messages"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<dt-validation-messages
  :validationMessages="[{ message: 'Success', type: 'success' }]"
/>
`})})]})}}export{W as default};
//# sourceMappingURL=validation_messages-e3c07437.js.map
