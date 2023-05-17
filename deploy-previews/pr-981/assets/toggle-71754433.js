import{j as e}from"./jsx-dev-runtime-00fd178a.js";import{M as o,S as m,C as i,a as l,b as t}from"./index-6e61dd60.js";import{T as a,D as d,V as c}from"./toggle.stories-76917cee.js";import{u as r}from"./index-1b26e3e1.js";import"./iframe-758b70d7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-ed5693eb.js";import"./vue.esm-eff6e72e.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function u(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",h3:"h3",strong:"strong",pre:"pre"},r(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"toggle",children:"Toggle"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(n.p,{children:`Toggles (aka "Switches") are control elements that allow the user to make a binary on/off selection.
They are commonly used in places like settings and user preferences, but can appear in the product UI as well.`},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Toggles are typically paired with a label which identifies the option."},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["This component uses a native button element under the hood that has a role ",e.jsxDEV(n.code,{children:"switch"},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:76},this)," and type ",e.jsxDEV(n.code,{children:"button"},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:94},this)," to improve accessibility."]},void 0,!0,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.a,{href:"https://www.w3.org/TR/2021/NOTE-wai-aria-practices-1.2-20211129/examples/switch/switch-button.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"See W3C guidelines"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
for more information.`]},void 0,!0,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"button",children:"Button"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The button element should be fully accessible by keyboard. To accomplish this, the ",e.jsxDEV(n.code,{children:"DtToggle"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:84},this),` component automatically
populates several ARIA attributes to the underlying `,e.jsxDEV(n.code,{children:"button"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:53},this),` element depending on the checked and
disabled states. However, if a label default slot is not used with `,e.jsxDEV(n.code,{children:"DtToggle"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:68},this),`
(without including an `,e.jsxDEV(n.code,{children:"aria-label"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:23},this),"), a console warning error will be thrown indicating that this issue exists."]},void 0,!0,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"focus--keyboard",children:"Focus & Keyboard"},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The button element should capture keyboard focus as long as it is not disabled (",e.jsxDEV(n.code,{children:"disabled"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:81},this)," prop is ",e.jsxDEV(n.code,{children:"true"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:100},this),`).
`,e.jsxDEV(n.code,{children:"ENTER"},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),` key will
emit a `,e.jsxDEV(n.strong,{children:"change"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:8},this)," event with the current value of the toggle and will change its internal ",e.jsxDEV(n.code,{children:"checked"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:91},this)," state."]},void 0,!0,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`,e.jsxDEV(t,{},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtToggle } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-label",children:"With Label"},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-toggle
>
  My Label
</dt-toggle>
`},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"label--checked",children:"Label & Checked"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-toggle
  checked
>
  My Label
</dt-toggle>
`},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"disabled",children:"Disabled"},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-toggle
  disabled
>
  My Label
</dt-toggle>
`},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function M(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(u,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):u(s)}export{M as default};
//# sourceMappingURL=toggle-71754433.js.map
