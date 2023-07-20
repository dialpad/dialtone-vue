import{j as e}from"./jsx-dev-runtime-a01902b7.js";import{M as r,S as m,C as s,a as l,b as c}from"./index-cc43162f.js";import{C as a,D as d,V as t}from"./checkbox_group.stories-c675432b.js";import{u}from"./index-48fc22f7.js";import"./iframe-6fad5bbd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-3dddf937.js";import"./vue.esm-bundler-8de31a68.js";import"./utils-d48fb0e8.js";import"./input_group-618eaa7f.js";import"./validation_messages-6606b97f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./checkbox-9f1a5db1.js";import"./input-6ecbdc2b.js";function o(i){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},u(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"checkbox-group",children:"Checkbox Group"},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(n.p,{children:[`Checkbox Groups are convenience components for a grouping of related Checkboxes. While each Checkbox within the group
is independent, the `,e.jsxDEV(n.code,{children:"v-model"},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:23},this),` on the group provides a convenient interface for determining which Checkboxes within
the group are checked.`]},void 0,!0,{fileName:"<source.js>",lineNumber:9,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Checkbox Groups are typically paired with a legend which identifies the group. If no legend is provided then it is
expected that an `,e.jsxDEV(n.code,{children:"aria-label"},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:18},this),` will be given in order to provide an invisible label to screen readers. Each Checkbox
Group should contain one or more Checkboxes which users can make selection(s) from.`]},void 0,!0,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(c,{},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"model",children:"Model"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"The Vue model contains a list of selected option(s) within the group, see example below:"},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// default = []
const selectedValues = ['checked_option_1', 'checked_option_2'];
`},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import {
  VALIDATION_MESSAGE_TYPES,
  DtCheckbox,
  DtCheckboxGroup
} from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-legend",children:"With Legend"},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-checkbox-group
  name="my-group-name"
  legend="My Legend"
>
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
</dt-checkbox-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-legend",children:"With Slotted Legend"},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-checkbox-group name="my-group-name">
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
  <template #legend>
    With Slotted Legend
  </template>
</dt-checkbox-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:75,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:75,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-selected-values",children:"With Selected Values"},void 0,!1,{fileName:"<source.js>",lineNumber:91,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-checkbox-group
  name="my-group-name"
  legend="My Legend"
  :selected-values="['option1']"
>
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
</dt-checkbox-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:93,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:93,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"disabled",children:"Disabled"},void 0,!1,{fileName:"<source.js>",lineNumber:110,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-checkbox-group
  name="my-group-name"
  legend="My Legend"
  disabled
>
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
</dt-checkbox-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-validation-messages",children:"With Validation Messages"},void 0,!1,{fileName:"<source.js>",lineNumber:129,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-checkbox-group
  name="my-group-name"
  legend="My Legend"
  :messages="[{ message: 'My Success Message', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
>
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
</dt-checkbox-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:131,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:131,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-validation-messages-hidden",children:"With Validation Messages Hidden"},void 0,!1,{fileName:"<source.js>",lineNumber:148,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-checkbox-group
  name="my-group-name"
  legend="My Legend"
  :messages="[{ message: 'My Success Message', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
  :show-messages="false"
>
  <dt-checkbox
    value="option1"
    label="Option 1"
  />
  <dt-checkbox
    value="option2"
    label="Option 2"
  />
</dt-checkbox-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:150,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:150,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function A(i={}){const{wrapper:n}=Object.assign({},u(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(o,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):o(i)}export{A as default};
//# sourceMappingURL=checkbox_group-4f777eac.js.map
