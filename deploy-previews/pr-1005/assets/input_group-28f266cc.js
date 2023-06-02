import{j as e}from"./jsx-runtime-b22e6c35.js";import{M as d,S as l,C as s,a as o,b as p}from"./index-ca3818cf.js";import{I as u,D as h,V as c}from"./input_group.stories-ca39cf37.js";import{u as a}from"./index-10ecc94c.js";import"./iframe-6e091359.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-d77bbd23.js";import"./vue.esm-bundler-e62bdd6b.js";import"./utils-cafa7a3e.js";import"./input_group-a49a00c9.js";import"./validation_messages-d11443f7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./radio_constants-4f6325c5.js";import"./input-1e6076b8.js";function T(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a",h4:"h4"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:u}),`
`,e.jsx(n.h1,{id:"input-group",children:"Input Group"}),`
`,e.jsx(l,{children:e.jsxs(n.p,{children:[`Input Groups are convenience components for a grouping of related inputs. While each input within the group
could be independent, the `,e.jsx(n.code,{children:"v-model"}),` on the group provides a convenient interface for determining the current state of
the group.`]})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.p,{children:[`Input Groups are typically paired with a legend which identifies the group. If no legend is provided then it is
expected that an `,e.jsx(n.code,{children:"aria-label"}),` will be given in order to provide an invisible label to screen readers. Each Input
Group should contain one or more inputs which users can interact with.`]}),`
`,e.jsx(s,{children:e.jsx(o,{of:h})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{children:e.jsx(o,{of:c})}),`
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
`})})]})}}export{T as default};
//# sourceMappingURL=input_group-28f266cc.js.map
