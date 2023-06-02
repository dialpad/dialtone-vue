import{j as e}from"./jsx-dev-runtime-b4081375.js";import{M as a,S as o,C as s,a as l,b as m}from"./index-2402492a.js";import{R as t,D as d,V as c}from"./radio.stories-d3690331.js";import{u}from"./index-b07de239.js";import"./iframe-216e46ba.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-96cfb4be.js";import"./vue.esm-eff6e72e.js";import"./radio-e823ee48.js";import"./input-bea2174c.js";import"./validation_messages-a731d1f2.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./radio_constants-4f6325c5.js";function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},u(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"radios",children:"Radios"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(n.p,{children:`Radios are control elements that allow the user to make a single selection. They are typically used in a Radio Group
which allows the user to make a selection from a list of options.`},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Radios are typically paired with a label which identifies the option. There are times when they can be used with a
description which describes the option.`},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function T(i={}){const{wrapper:n}=Object.assign({},u(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(r,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):r(i)}export{T as default};
//# sourceMappingURL=radio-61d951e0.js.map
