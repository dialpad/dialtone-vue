import{j as e}from"./jsx-dev-runtime-5b2e56ee.js";import{M as a,S as o,C as l,a as s,b as m}from"./index-c35786f5.js";import{C as c,D as d,V as t}from"./checkbox.stories-f4c7e602.js";import{u as r}from"./index-f911cc20.js";import"./iframe-9108ee9f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-adf429e4.js";import"./vue.esm-eff6e72e.js";import"./checkbox-1aae6b95.js";import"./input-8977c936.js";import"./validation_messages-a5c3a51e.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function u(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"checkbox",children:"Checkbox"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(n.p,{children:`Checkboxes are control elements that allow the user to make a selection. They are typically used in a Checkbox Group
which allows the user to make one or more selections from a list of options.`},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Checkboxes are typically paired with a label which identifies the option. In addition, there are times when they can be
used with a description which describes the option.`},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(l,{children:e.jsxDEV(s,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(l,{children:e.jsxDEV(s,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtCheckbox, VALIDATION_MESSAGE_TYPES } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-label-prop",children:"With Label Prop"},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-label-and-description-props",children:"With Label and Description Props"},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  description="My Description"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-label",children:"With Slotted Label"},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-checkbox
  value="optionValue"
>
  My Label
</dt-checkbox>
`},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-description",children:"With Slotted Description"},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
>
  <template #description>
    My Description
  </template>
</dt-checkbox>
`},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-label-and-description",children:"With Slotted Label and Description"},void 0,!1,{fileName:"<source.js>",lineNumber:83,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-checkbox
  value="optionValue"
>
  My Label
  <template #description>
    My Description
  </template>
</dt-checkbox>
`},void 0,!1,{fileName:"<source.js>",lineNumber:85,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:85,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"checked",children:"Checked"},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  checked
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:98,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:98,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"disabled",children:"Disabled"},void 0,!1,{fileName:"<source.js>",lineNumber:106,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  disabled
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:108,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:108,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-validation-state",children:"With Validation State"},void 0,!1,{fileName:"<source.js>",lineNumber:116,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"green"},children:"Success"},void 0,!1,{fileName:"<source.js>",lineNumber:118,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  :validation-state="VALIDATION_MESSAGE_TYPES.SUCCESS"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:120,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:120,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"Goldenrod"},children:"Warning"},void 0,!1,{fileName:"<source.js>",lineNumber:128,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  :validation-state="VALIDATION_MESSAGE_TYPES.WARNING"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:130,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:130,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"red"},children:"Error"},void 0,!1,{fileName:"<source.js>",lineNumber:138,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-checkbox
  value="optionValue"
  label="My Label"
  :validation-state="VALIDATION_MESSAGE_TYPES.ERROR"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:140,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:140,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function A(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(u,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):u(i)}export{A as default};
//# sourceMappingURL=checkbox-3713cfef.js.map
