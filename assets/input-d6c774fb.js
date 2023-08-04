import{j as e}from"./jsx-runtime-9c898872.js";import{M as o,S as h,d as s,e as t,f as d}from"./index-e1194850.js";import{I as c,D as a,W as p,a as m,b as u,c as x,d as g,e as j,f,g as v,E as I,S,L as w,h as E}from"./input.stories-a929fc61.js";import{u as l}from"./index-30d325ca.js";import"./iframe-91d6f056.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-010d0d6a.js";import"./vue.esm-ba2ca387.js";import"./input-fd828578.js";import"./validation_messages-c648698d.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./input-d69ae4b3.js";import"./icon-555c67be.js";import"./icon_constants-04b4bbd3.js";function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong"},l(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"inputs",children:"Inputs"}),`
`,e.jsx(h,{children:e.jsx(n.p,{children:`An input field is an input control that allows users to enter alphanumeric information. It can have a range of options
and supports single line and multi-line lengths, as well as varying formats, including numbers, masked passwords, etc.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`Inputs are normally paired with a label, but there are times when they can be used without a label.
Placeholder text should primarily be used as a content prompt and only provided when needed.`}),`
`,e.jsx(s,{children:e.jsx(t,{of:a})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
/>
`})}),`
`,e.jsx(n.h2,{id:"with-description",children:"With Description"}),`
`,e.jsx(n.p,{children:"Provides additional information to the user regarding the input element."}),`
`,e.jsx(s,{children:e.jsx(t,{of:p})}),`
`,e.jsx(n.h3,{id:"usage-1",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
  description="Description"
/>
`})}),`
`,e.jsx(n.h2,{id:"with-left-icon",children:"With Left Icon"}),`
`,e.jsx(n.p,{children:"Provides left icon within the form input"}),`
`,e.jsx(s,{children:e.jsx(t,{of:m})}),`
`,e.jsx(n.h3,{id:"usage-2",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput, DtIcon } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
>
  <template #leftIcon>
    <dt-icon name="send" />
  </template>
</dt-input>
`})}),`
`,e.jsx(n.h2,{id:"with-right-icon",children:"With Right Icon"}),`
`,e.jsx(n.p,{children:"Provides right icon within the form input"}),`
`,e.jsx(s,{children:e.jsx(t,{of:u})}),`
`,e.jsx(n.h3,{id:"usage-3",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput, DtIcon } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
>
  <template #rightIcon>
    <dt-icon name="lock" />
  </template>
</dt-input>
`})}),`
`,e.jsx(n.h2,{id:"with-both-icons",children:"With Both Icons"}),`
`,e.jsx(n.p,{children:"Provides both icons within the form input"}),`
`,e.jsx(s,{children:e.jsx(t,{of:x})}),`
`,e.jsx(n.h3,{id:"usage-4",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
>
  <template #leftIcon>
    <dt-icon name="send" />
  </template>
  <template #rightIcon>
    <dt-icon name="lock" />
  </template>
</dt-input>
`})}),`
`,e.jsx(n.h2,{id:"validation-states",children:"Validation States"}),`
`,e.jsx(n.p,{children:"Provides feedback to the user based on their interction, or lack thereof, with an input."}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(n.p,{children:`Warns the user that the value(s) they've entered has a potential problem,
but it doesn't block them from proceeding with input submission.`}),`
`,e.jsx(s,{children:e.jsx(t,{of:g})}),`
`,e.jsx(n.h4,{id:"usage-5",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput, VALIDATION_MESSAGE_TYPES } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
  :messages="[{
    message: 'This is a warning message',
    type: VALIDATION_MESSAGE_TYPES.WARNING,
  }]"
/>
`})}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(n.p,{children:`Alerts the user that the value(s) they've entered is incorrect,
not provided, or has some issue that will block them from proceeding with input submission.`}),`
`,e.jsx(s,{children:e.jsx(t,{of:j})}),`
`,e.jsx(n.h4,{id:"usage-6",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput, VALIDATION_MESSAGE_TYPES } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
  :messages="[{
    message: 'This is an error message',
    type: VALIDATION_MESSAGE_TYPES.ERROR,
  }]"
/>
`})}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(n.p,{children:"Notifies the user that the value(s) they've entered is correct."}),`
`,e.jsx(s,{children:e.jsx(t,{of:f})}),`
`,e.jsx(n.h4,{id:"usage-7",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput, VALIDATION_MESSAGE_TYPES } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
  :messages="[{
    message: 'This is a success message',
    type: VALIDATION_MESSAGE_TYPES.SUCCESS,
  }]"
/>
`})}),`
`,e.jsx(n.h2,{id:"with-validation",children:"With Validation"}),`
`,e.jsx(n.h3,{id:"maximum-length-validation",children:"Maximum Length Validation"}),`
`,e.jsx(n.p,{children:"Adds validation for the input length. Make sure to provide the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currentLength"}),` the current character length that the user has entered into the input.
This must be input manually as sometimes characters do not count as 1 character.
For example an emoji could take up many characters in the input, but should only count as 1 character.
If you don't pass `,e.jsx(n.code,{children:"currentLength"}),", the component will use a built-in length calculation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validate"}),` should be an object with the validation rules to apply to the input. Maximum length validation
is supported with the following configuration:`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`length: {
  // describes the maximum length allowed and shown in the label
  description: string,        // Required
  // maximum length allowed to enter
  max: number,                // Required
  // message to show in the warning or error validation message
  message: string,            // Required
  // length from which the validation message will be shown as a warning,
  // when the maximum length is reached, the validation message will be shown as an error
  warn: number,               // Optional
  // set maxlength attribute, defaults to false
  limitMaxLength: boolean,    // Optional
},
`})}),`
`,e.jsx(n.p,{children:`If the input is invalid due to the validation, the validation message will be shown even when the input lost
focus, otherwise the validation message will be hidden when the user unfocuses the input.`}),`
`,e.jsx(s,{children:e.jsx(t,{of:v})}),`
`,e.jsx(n.h3,{id:"usage-8",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
  currentLength="currentLength"
  :validate="validate"
/>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput } from '@dialpad/dialtone-vue';

export default {
  data () {
    maxCharacters: 25,
  },

  computed: {
    currentLength () {
      // To be implemented
    },

    remainingCharacters () {
      return this.maxCharacters - this.currentLength;
    }

    validationMessage () {
      if (this.remainingCharacters < 0) {
        return \`\${Math.abs(remainingCharacters)} characters over limit\`;
      } else {
        return \`\${remainingCharacters} characters left\`;
      }
    },

    validate () {
      return {
        length: {
          description: 'Max 25 characters.',
          max: this.maxCharacters,
          warn: 15,
          message: this.validationMessage
        },
      }
    },
  }
}
`})}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[`|name           |prop value                     |size|Example                                |
|---            |---                            |--- |---                                    |
|`,e.jsx(n.strong,{children:"Extra Small"}),"|INPUT_SIZES.EXTRA_SMALL   |12px|",e.jsx(t,{of:I}),`|
|`,e.jsx(n.strong,{children:"Small"}),"      |INPUT_SIZES.SMALL         |14px|",e.jsx(t,{of:S}),`     |
|`,e.jsx(n.strong,{children:"Default"}),"    |-                              |16px|",e.jsx(t,{of:a}),`    |
|`,e.jsx(n.strong,{children:"Large"}),"      |INPUT_SIZES.LARGE         |20px|",e.jsx(t,{of:w}),`      |
|`,e.jsx(n.strong,{children:"Extra Large"}),"|INPUT_SIZES.EXTRA_LARGE   |24px|",e.jsx(t,{of:E}),"|"]}),`
`,e.jsx(n.h3,{id:"usage-9",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput, INPUT_SIZES } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
  :size="INPUT_SIZES.<SIZE>"
/>
`})})]})}function X(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(r,i)})):r(i)}export{X as default};
//# sourceMappingURL=input-d6c774fb.js.map
