import{j as e}from"./jsx-dev-runtime-f04c164a.js";import{M as a,b as o,C as s,d as l,e as m}from"./index-9f186792.js";import{R as d,D as t,V as c}from"./radio.stories-a6c80a00.js";import{u}from"./index-729148e0.js";import"./iframe-de05fcbd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-3f71f290.js";import"./utils-c7895956.js";import"./vue.esm-eff6e72e.js";import"./radio-60110e37.js";import"./input-7972dc04.js";import"./validation_messages-0d9f2537.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./radio_constants-4f6325c5.js";function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},u(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"radios",children:"Radios"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(n.p,{children:`Radios are control elements that allow the user to make a single selection. They are typically used in a Radio Group
which allows the user to make a selection from a list of options.`},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Radios are typically paired with a label which identifies the option. There are times when they can be used with a
description which describes the option.`},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRadio, VALIDATION_MESSAGE_TYPES } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-label-prop",children:"With Label Prop"},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  label="My Label"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-label",children:"With Slotted Label"},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio value="optionValue">
  My Label
</dt-radio>
`},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-description",children:"With Description"},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  description="My Description"
>
  My Label
</dt-radio>
`},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-label-and-description",children:"With Slotted Label and Description"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio value="optionValue">
  My Label
  <template #description>
    My Description
  </template>
</dt-radio>
`},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-group",children:"With Group"},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  name="groupName"
  label="My Label"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-validation-state",children:"With Validation State"},void 0,!1,{fileName:"<source.js>",lineNumber:90,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"red"},children:"Error"},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  :validationState="VALIDATION_MESSAGE_TYPES.ERROR"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"Goldenrod"},children:"Warning"},void 0,!1,{fileName:"<source.js>",lineNumber:101,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  :validationState="VALIDATION_MESSAGE_TYPES.WARNING"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:103,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:103,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"green"},children:"Success"},void 0,!1,{fileName:"<source.js>",lineNumber:110,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio
  value="optionValue"
  :validationState="VALIDATION_MESSAGE_TYPES.SUCCESS"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function I(i={}){const{wrapper:n}=Object.assign({},u(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(r,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):r(i)}export{I as default};
//# sourceMappingURL=radio-34ebcee3.js.map
