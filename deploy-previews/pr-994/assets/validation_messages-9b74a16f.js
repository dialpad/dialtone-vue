import{j as e}from"./jsx-dev-runtime-5b2e56ee.js";import{M as a,S as m,C as i,a as r,b as o}from"./index-c35786f5.js";import{V as t,D as d,a as c}from"./validation_messages.stories-a6a100d4.js";import{u}from"./index-f911cc20.js";import"./iframe-9108ee9f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-adf429e4.js";import"./vue.esm-eff6e72e.js";import"./validation_messages-a5c3a51e.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function l(n){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},u(),n.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(s.h1,{id:"validation-messages",children:"Validation Messages"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(s.p,{children:`Validation messages are used to convey information to the user about the current state of the input element. These
messages can have an error, warning or success type.`},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"validation-message-format",children:"Validation Message Format"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(s.p,{children:"Each provided validation message has the following format:"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-json",children:`{
  message: "Some informative message",
  type: "error|warning|success",
}
`},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(s.p,{children:[`Validation messages are typically paired with an input element. They are currently built in to some of
our shared input components such as `,e.jsxDEV(s.code,{children:"dt-input"},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:37},this),", ",e.jsxDEV(s.code,{children:"dt-radio-group"},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:49},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(r,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(r,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(o,{},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(s.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-jsx",children:`import { DtValidationMessages } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`,e.jsxDEV("h3",{style:{color:"red"},children:"With Error Messages"},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-html",children:`<dt-validation-messages
  :validationMessages="[{ message: 'Error', type: 'error' }]"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
`,e.jsxDEV("h3",{style:{color:"Goldenrod"},children:"With Warning Messages"},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-html",children:`<dt-validation-messages
  :validationMessages="[{ message: 'Warning', type: 'warning' }]"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV("h3",{style:{color:"green"},children:"With Success Messages"},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-html",children:`<dt-validation-messages
  :validationMessages="[{ message: 'Success', type: 'success' }]"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function C(n={}){const{wrapper:s}=Object.assign({},u(),n.components);return s?e.jsxDEV(s,Object.assign({},n,{children:e.jsxDEV(l,n,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(n)}export{C as default};
//# sourceMappingURL=validation_messages-9b74a16f.js.map
