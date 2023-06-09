import{j as e}from"./jsx-dev-runtime-7fa45760.js";import{M as a,S as o,C as s,a as r,b as d}from"./index-813e820a.js";import{R as m,D as t,V as c}from"./radio_group.stories-0eaf3cfb.js";import{u}from"./index-ae428881.js";import"./iframe-9f396e4f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-be1af372.js";import"./vue.esm-eff6e72e.js";import"./input_group-b11ee636.js";import"./validation_messages-f5bc4c31.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./radio-9eabbfb1.js";import"./input-b686bcfe.js";import"./radio_constants-4f6325c5.js";function l(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},u(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:m},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"radio-groups",children:"Radio Groups"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(n.p,{children:"Radio Groups are control elements that allow the user to make a single selection from a list of options."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Radio Groups are typically paired with a legend which identifies the group. If no legend is provided then it is expected
that an `,e.jsxDEV(n.code,{children:"aria-label"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:9},this),` will be given in order to provide an invisible label to screen readers. Each Radio Group will
contain one or more Radios which users will make a selection from.`]},void 0,!0,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(r,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(r,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(d,{},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRadio, DtRadioGroup } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slots",children:"With Slots"},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Passing in Radio components by slot."},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-options",children:"With Options"},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Passing in Radio components programmatically using an options object."},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Other', value: 'other' }
];
`},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
>
  <dt-radio
    v-for="option in options"
    :key="option.value"
    :value="option.value"
  >
    <span>{{ option.label }}</span>
  </dt-radio>
</dt-radio-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"without-legend",children:"Without Legend"},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["When no legend is provided it is expected that an ",e.jsxDEV(n.code,{children:"aria-label"},void 0,!1,{fileName:"<source.js>",lineNumber:86,columnNumber:51},this)," is passed into the component."]},void 0,!0,{fileName:"<source.js>",lineNumber:86,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  aria-label="Fruits"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:88,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:88,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-legend",children:"With Slotted Legend"},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"The legend can also be passed by slot."},void 0,!1,{fileName:"<source.js>",lineNumber:101,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
  <template #legend>
    Fruits
  </template>
</dt-radio-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:103,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:103,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-event-hander",children:"With Event Hander"},void 0,!1,{fileName:"<source.js>",lineNumber:116,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"The event handler is only needed if you need to do additional processing. The v-model is automatically updated."},void 0,!1,{fileName:"<source.js>",lineNumber:118,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
  @input="onInput"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:120,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:120,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-validation-messages",children:"With Validation Messages"},void 0,!1,{fileName:"<source.js>",lineNumber:132,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"red"},children:"Error"},void 0,!1,{fileName:"<source.js>",lineNumber:134,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
  :messages="[{ message: 'Error', type: 'error' }]"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:136,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:136,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"Goldenrod"},children:"Warning"},void 0,!1,{fileName:"<source.js>",lineNumber:148,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
  :messages="[{ message: 'Warning', type: 'warning' }]"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:150,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:150,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"green"},children:"Success"},void 0,!1,{fileName:"<source.js>",lineNumber:162,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
  :messages="[{ message: 'Success', type: 'success' }]"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:164,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:164,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function K(i={}){const{wrapper:n}=Object.assign({},u(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(l,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(i)}export{K as default};
//# sourceMappingURL=radio_group-cb169dad.js.map
