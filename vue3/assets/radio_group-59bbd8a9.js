import{j as e}from"./jsx-runtime-751d7b01.js";import{M as t,b as s,C as r,d as a,e as l}from"./index-7683dd92.js";import{R as p,D as c,V as u}from"./radio_group.stories-dbd44e45.js";import{u as d}from"./index-48969a94.js";import"./iframe-565ca286.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-f49e9550.js";import"./vue.esm-bundler-3a08a304.js";import"./utils-9b223a5d.js";import"./radio_group-7afb714c.js";import"./input_group-531a97a6.js";import"./validation_messages-3567a33d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./radio-6e51e2ca.js";import"./input-9ec1d89e.js";import"./radio_constants-4f6325c5.js";function o(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},d(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:p}),`
`,e.jsx(n.h1,{id:"radio-groups",children:"Radio Groups"}),`
`,e.jsx(s,{children:e.jsx(n.p,{children:"Radio Groups are control elements that allow the user to make a single selection from a list of options."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.p,{children:[`Radio Groups are typically paired with a legend which identifies the group. If no legend is provided then it is expected
that an `,e.jsx(n.code,{children:"aria-label"}),` will be given in order to provide an invisible label to screen readers. Each Radio Group will
contain one or more Radios which users will make a selection from.`]}),`
`,e.jsx(r,{children:e.jsx(a,{of:c})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(r,{children:e.jsx(a,{of:u})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtRadio, DtRadioGroup } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"with-slots",children:"With Slots"}),`
`,e.jsx(n.p,{children:"Passing in Radio components by slot."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`})}),`
`,e.jsx(n.h3,{id:"with-options",children:"With Options"}),`
`,e.jsx(n.p,{children:"Passing in Radio components programmatically using an options object."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Other', value: 'other' }
];
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio-group
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
`})}),`
`,e.jsx(n.h3,{id:"without-legend",children:"Without Legend"}),`
`,e.jsxs(n.p,{children:["When no legend is provided it is expected that an ",e.jsx(n.code,{children:"aria-label"})," is passed into the component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  aria-label="Fruits"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-legend",children:"With Slotted Legend"}),`
`,e.jsx(n.p,{children:"The legend can also be passed by slot."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
  <template #legend>
    Fruits
  </template>
</dt-radio-group>
`})}),`
`,e.jsx(n.h3,{id:"with-event-hander",children:"With Event Hander"}),`
`,e.jsx(n.p,{children:"The event handler is only needed if you need to do additional processing. The v-model is automatically updated."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
  @input="onInput"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`})}),`
`,e.jsx(n.h3,{id:"with-validation-messages",children:"With Validation Messages"}),`
`,e.jsx("h4",{style:{color:"red"},children:"Error"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
  :messages="[{ message: 'Error', type: 'error' }]"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`})}),`
`,e.jsx("h4",{style:{color:"Goldenrod"},children:"Warning"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
  :messages="[{ message: 'Warning', type: 'warning' }]"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`})}),`
`,e.jsx("h4",{style:{color:"green"},children:"Success"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-radio-group
  v-model="selectedFruits"
  name="fruits-radio-group"
  legend="Fruits"
  :messages="[{ message: 'Success', type: 'success' }]"
>
  <dt-radio value="pear">Pear</dt-radio>
  <dt-radio value="kiwi">Kiwi</dt-radio>
</dt-radio-group>
`})})]})}function C(i={}){const{wrapper:n}=Object.assign({},d(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(o,i)})):o(i)}export{C as default};
//# sourceMappingURL=radio_group-59bbd8a9.js.map