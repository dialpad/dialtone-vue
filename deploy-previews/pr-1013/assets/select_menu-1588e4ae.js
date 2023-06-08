import{j as e}from"./jsx-dev-runtime-316c37ab.js";import{M as t,S as r,C as i,a as l,b as o}from"./index-7cddfa6c.js";import{S as a,D as c,V as d}from"./select_menu.stories-12b28bf2.js";import{u as m}from"./index-2b5f8074.js";import"./iframe-d4ce809b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-be1af372.js";import"./vue.esm-eff6e72e.js";import"./input-b686bcfe.js";import"./validation_messages-f5bc4c31.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function u(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},m(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"select-menu",children:"Select Menu"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(r,{children:e.jsxDEV(n.p,{children:"A select menu is an input control that allows users to choose one option from a list."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`A select is normally paired with a label, but there are times when it can be used without a label. Don't rely on the
placeholder text as a label.`},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(o,{},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"option-object-structure",children:"Option Object Structure"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`{
  index: number,           // Optional
  value: number || string, // Required
  label: string,           // Required
}
`},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`import { DtSelectMenu, VALIDATION_MESSAGE_TYPES } from '@dialpad/dialtone-vue';

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];
`},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
  :options="options"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-description",children:"With Description"},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
  description="Some Description"
  :options="options"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-label",children:"With Slotted Label"},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  :options="options"
>
  <template #label>
    Select Menu
  </template>
</dt-select-menu>
`},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-description",children:"With Slotted Description"},void 0,!1,{fileName:"<source.js>",lineNumber:90,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
  :options="options"
>
  <template #description>
    Some Description
  </template>
</dt-select-menu>
`},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-options",children:"With Slotted Options"},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
>
  <option
    v-for="option in options"
    :key="\`select-menu-option-\${option.value}\`"
    :value="option.value"
  >
    {{ option.label }}
  </option>
</dt-select-menu>
`},void 0,!1,{fileName:"<source.js>",lineNumber:106,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:106,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-validation-messages",children:"With Validation Messages"},void 0,!1,{fileName:"<source.js>",lineNumber:121,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
  :options="options"
  :messages="[{ message: 'Some Success Message', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:123,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:123,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-size",children:"With Size"},void 0,!1,{fileName:"<source.js>",lineNumber:132,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-select-menu
  name="select-menu"
  label="Select Menu"
  :options="options"
  size="xs"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:134,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:134,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function C(s={}){const{wrapper:n}=Object.assign({},m(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(u,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):u(s)}export{C as default};
//# sourceMappingURL=select_menu-1588e4ae.js.map
