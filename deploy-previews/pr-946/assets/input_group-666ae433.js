import{j as e}from"./jsx-runtime-1484fc58.js";import{M as a,S as l,C as s,a as o,b as p}from"./index-1f7b0fa1.js";import{I as u}from"./input_group.stories-601fc15b.js";import{u as d}from"./index-ac913fb8.js";import"./iframe-c0475590.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-544d6d08.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-3c489ce7.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-0dc0813d.js";import"./_plugin-vue2_normalizer-bbedbd26.js";import"./vue.esm-eff6e72e.js";import"./input_group-afc5871d.js";import"./validation_messages-b7867d4b.js";import"./radio_constants-4f6325c5.js";import"./input-35565ad2.js";function N(t={}){const{wrapper:i}=Object.assign({},d(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a",h4:"h4"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:u}),`
`,e.jsx(n.h1,{id:"input-group",children:"Input Group"}),`
`,e.jsx(l,{children:e.jsxs(n.p,{children:[`Input Groups are convenience components for a grouping of related inputs. While each input within the group
could be independent, the `,e.jsx(n.code,{children:"v-model"}),` on the group provides a convenient interface for determining the current state of
the group.`]})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.p,{children:[`Input Groups are typically paired with a legend which identifies the group. If no legend is provided then it is
expected that an `,e.jsx(n.code,{children:"aria-label"}),` will be given in order to provide an invisible label to screen readers. Each Input
Group should contain one or more inputs which users can interact with.`]}),`
`,e.jsx(s,{children:e.jsx(o,{of:GroupStories.Default})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{children:e.jsx(o,{of:GroupStories.Variants})}),`
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
`})})]})}}export{N as default};
//# sourceMappingURL=input_group-666ae433.js.map
