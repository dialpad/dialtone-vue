import{j as e}from"./jsx-dev-runtime-F5unUgWS.js";import{M as t,b as m,C as u,d as s,e as o}from"./index-Ztjmuy3l.js";import{I as d,D as a,V as c}from"./input_group.stories-DwwT8VmU.js";import{u as r}from"./index-YkQlAgZv.js";import"./iframe-se1822rL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";import"./chunk-AY7I2SME-4UylTnhF.js";import"./storybook_utils-XrTpeJKJ.js";import"./input_group-SOev_9JS.js";import"./vue.esm-BQBotxwJ.js";import"./validation_messages-qRXORayL.js";import"./utils-pRacJSLF.js";import"./_plugin-vue2_normalizer-XBmYDgEh.js";import"./radio_constants-Cj2y7V-3.js";import"./input-Ot2HKkZ3.js";function l(i){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a",h4:"h4"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"input-group",children:"Input Group"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(n.p,{children:[`Input Groups are convenience components for a grouping of related inputs. While each input within the group
could be independent, the `,e.jsxDEV(n.code,{children:"v-model"},void 0,!1,{fileName:"<source.js>",lineNumber:11,columnNumber:29},this),` on the group provides a convenient interface for determining the current state of
the group.`]},void 0,!0,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Input Groups are typically paired with a legend which identifies the group. If no legend is provided then it is
expected that an `,e.jsxDEV(n.code,{children:"aria-label"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:18},this),` will be given in order to provide an invisible label to screen readers. Each Input
Group should contain one or more inputs which users can interact with.`]},void 0,!0,{fileName:"<source.js>",lineNumber:17,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(s,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(s,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(o,{},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"model",children:"Model"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The Vue model can have one of the following types ",e.jsxDEV(n.code,{children:"[String, Number, Boolean, Object]"},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:51},this),":"]},void 0,!0,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// default = null
const value = 'some value';
`},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The Vue model is dependant on the child component(s) implementing the provided ",e.jsxDEV(n.code,{children:"groupContext"},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:80},this),` and calling the provided
`,e.jsxDEV(n.code,{children:"setGroupValue"},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this)," method which will handle updating the provided ",e.jsxDEV(n.code,{children:"groupContext"},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:64},this)," and Vue model in the parent."]},void 0,!0,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<script>
import {
  DtInputMixin,
  DtGroupableInputMixin,
} from '@dialpad/dialtone-vue';

export default {
  name: 'MyInputElement',

  mixins: [DtInputMixin, DtGroupableInputMixin],

  computed: {
    groupValue () {
      return this.groupContext?.value;
    },

    inputListeners () {
      return {
        change: event => this.emitValue(event.target.value),
      };
    },
  },

  watch: {
    groupValue: {
      immediate: true,
      handler (newGroupValue) {
        if (this.hasGroup) {
          // update internal value when the input group value changes
          this.internalChecked = newGroupValue === this.value;
        }
      },
    },
  },

  methods: {
    emitValue (value) {
      if (value !== this.groupValue) {
        // update provided value if injected
        this.setGroupValue(value);

        this.$emit('input', value);
      }
    },
  },
};
<\/script>
`},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:97,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import {
  VALIDATION_MESSAGE_TYPES,
  DtInputGroup
} from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:101,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:101,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-legend",children:"With Legend"},void 0,!1,{fileName:"<source.js>",lineNumber:108,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-input-group
  name="my-group-name"
  legend="My Legend"
>
  <!-- Slotted Input Elements -->
</dt-input-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:110,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:110,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-slotted-legend",children:"With Slotted Legend"},void 0,!1,{fileName:"<source.js>",lineNumber:119,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-input-group name="my-group-name">
  <!-- Slotted Input Elements -->
  <template #legend>
    With Slotted Legend
  </template>
</dt-input-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:121,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:121,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-value",children:"With Value"},void 0,!1,{fileName:"<source.js>",lineNumber:130,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-input-group
  name="my-group-name"
  legend="My Legend"
  :value="['option1']"
>
  <!-- Slotted Input Elements -->
</dt-input-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:132,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:132,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"disabled",children:"Disabled"},void 0,!1,{fileName:"<source.js>",lineNumber:142,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-input-group
  name="my-group-name"
  legend="My Legend"
  disabled
>
  <!-- Slotted Input Elements -->
</dt-input-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:144,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:144,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-validation-messages",children:"With Validation Messages"},void 0,!1,{fileName:"<source.js>",lineNumber:154,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-input-group
  name="my-group-name"
  legend="My Legend"
  :messages="[{ message: 'My Success Message', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
>
  <!-- Slotted Input Elements -->
</dt-input-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:156,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:156,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-validation-messages-hidden",children:"With Validation Messages Hidden"},void 0,!1,{fileName:"<source.js>",lineNumber:166,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-input-group
  name="my-group-name"
  legend="My Legend"
  :messages="[{ message: 'My Success Message', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
  :show-messages="false"
>
  <!-- Slotted Input Elements -->
</dt-input-group>
`},void 0,!1,{fileName:"<source.js>",lineNumber:168,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:168,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"extending",children:"Extending"},void 0,!1,{fileName:"<source.js>",lineNumber:179,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`If your input(s) require additional logic in order to be grouped then you can extend the Input Group using
`,e.jsxDEV(n.a,{href:"https://v3.vuejs.org/api/options-composition.html#extends",target:"_blank",rel:"nofollow noopener noreferrer",children:"extends"},void 0,!1,{fileName:"<source.js>",lineNumber:182,columnNumber:1},this)," in your Vue SFC."]},void 0,!0,{fileName:"<source.js>",lineNumber:181,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"example",children:"Example"},void 0,!1,{fileName:"<source.js>",lineNumber:184,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<script>
import { DtInputGroup } from '@dialpad/dialtone-vue';

export default {
  name: "MyComponent",
  extends: DtInputGroup,
  ...
};
<\/script>
`},void 0,!1,{fileName:"<source.js>",lineNumber:186,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:186,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function L(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(l,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(i)}export{L as default};
//# sourceMappingURL=input_group-6djFqB5p.js.map
