import{j as e}from"./jsx-runtime-242b6870.js";import{M as d,S as l,C as r,a as o,b as p}from"./index-f3de772d.js";import{I as u,D as h,V as c}from"./input_group.stories-1e176e0f.js";import{u as a}from"./index-bc39e9ae.js";import"./iframe-bb8f6a68.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-2ac5aadd.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-1ef620d9.js";import"./vue.esm-eff6e72e.js";import"./input_group-9cded05e.js";import"./validation_messages-7d1aadb9.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./radio_constants-4f6325c5.js";import"./input-c45869b5.js";function _(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a",h4:"h4"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:u}),`
`,e.jsx(n.h1,{id:"input-group",children:"Input Group"}),`
`,e.jsx(l,{children:e.jsxs(n.p,{children:[`Input Groups are convenience components for a grouping of related inputs. While each input within the group
could be independent, the `,e.jsx(n.code,{children:"v-model"}),` on the group provides a convenient interface for determining the current state of
the group.`]})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.p,{children:[`Input Groups are typically paired with a legend which identifies the group. If no legend is provided then it is
expected that an `,e.jsx(n.code,{children:"aria-label"}),` will be given in order to provide an invisible label to screen readers. Each Input
Group should contain one or more inputs which users can interact with.`]}),`
`,e.jsx(r,{children:e.jsx(o,{of:h})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(r,{children:e.jsx(o,{of:c})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(p,{}),`
`,e.jsx(n.h2,{id:"model",children:"Model"}),`
`,e.jsxs(n.p,{children:["The Vue model can have one of the following types ",e.jsx(n.code,{children:"[String, Number, Boolean, Object]"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// default = null
const value = 'some value';
`})}),`
`,e.jsxs(n.p,{children:["The Vue model is dependant on the child component(s) implementing the provided ",e.jsx(n.code,{children:"groupContext"}),` and calling the provided
`,e.jsx(n.code,{children:"setGroupValue"})," method which will handle updating the provided ",e.jsx(n.code,{children:"groupContext"})," and Vue model in the parent."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script>
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
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import {
  VALIDATION_MESSAGE_TYPES,
  DtInputGroup
} from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"with-legend",children:"With Legend"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input-group
  name="my-group-name"
  legend="My Legend"
>
  <!-- Slotted Input Elements -->
</dt-input-group>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-legend",children:"With Slotted Legend"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input-group name="my-group-name">
  <!-- Slotted Input Elements -->
  <template #legend>
    With Slotted Legend
  </template>
</dt-input-group>
`})}),`
`,e.jsx(n.h3,{id:"with-value",children:"With Value"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input-group
  name="my-group-name"
  legend="My Legend"
  :value="['option1']"
>
  <!-- Slotted Input Elements -->
</dt-input-group>
`})}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input-group
  name="my-group-name"
  legend="My Legend"
  disabled
>
  <!-- Slotted Input Elements -->
</dt-input-group>
`})}),`
`,e.jsx(n.h3,{id:"with-validation-messages",children:"With Validation Messages"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input-group
  name="my-group-name"
  legend="My Legend"
  :messages="[{ message: 'My Success Message', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
>
  <!-- Slotted Input Elements -->
</dt-input-group>
`})}),`
`,e.jsx(n.h3,{id:"with-validation-messages-hidden",children:"With Validation Messages Hidden"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input-group
  name="my-group-name"
  legend="My Legend"
  :messages="[{ message: 'My Success Message', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
  :show-messages="false"
>
  <!-- Slotted Input Elements -->
</dt-input-group>
`})}),`
`,e.jsx(n.h3,{id:"extending",children:"Extending"}),`
`,e.jsxs(n.p,{children:[`If your input(s) require additional logic in order to be grouped then you can extend the Input Group using
`,e.jsx(n.a,{href:"https://v3.vuejs.org/api/options-composition.html#extends",target:"_blank",rel:"nofollow noopener noreferrer",children:"extends"})," in your Vue SFC."]}),`
`,e.jsx(n.h4,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script>
import { DtInputGroup } from '@dialpad/dialtone-vue';

export default {
  name: "MyComponent",
  extends: DtInputGroup,
  ...
};
<\/script>
`})})]})}}export{_ as default};
//# sourceMappingURL=input_group-134da5a6.js.map
