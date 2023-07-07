import{j as e}from"./jsx-runtime-17f1e4e7.js";import{M as o,S as l,d as a,e as i,f as d}from"./index-254b400a.js";import{V as c,D as h,a as m}from"./validation_messages.stories-ba919aed.js";import{u as t}from"./index-b4c12273.js";import"./iframe-2c4942bb.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-6c24aced.js";import"./vue.esm-ba2ca387.js";import"./validation_messages-74c4f98e.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function r(n){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},t(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(s.h1,{id:"validation-messages",children:"Validation Messages"}),`
`,e.jsx(l,{children:e.jsx(s.p,{children:`Validation messages are used to convey information to the user about the current state of the input element. These
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
`,e.jsx(a,{children:e.jsx(i,{of:h})}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(a,{children:e.jsx(i,{of:m})}),`
`,e.jsx(s.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
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
`})})]})}function E(n={}){const{wrapper:s}=Object.assign({},t(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{E as default};
//# sourceMappingURL=validation_messages-f5b7a744.js.map
