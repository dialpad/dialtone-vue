import{j as e}from"./jsx-runtime-fd6464be.js";import{M as h,S as d,C as s,a as t,b as c}from"./index-9cc024cf.js";import{I as p,D as l,W as m,a as u,b as x,c as g,d as j,e as f,f as v,g as I,E as S,S as w,L as E,h as b}from"./input.stories-abc019a7.js";import{u as o}from"./index-151623f5.js";import"./iframe-23285b02.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-aefd525a.js";import"./vue.esm-bundler-e62bdd6b.js";import"./utils-61960a91.js";import"./input-5a33ed76.js";import"./validation_messages-2db0e0fb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./input-49cee529.js";import"./icon-6ea2a40b.js";import"./icon_constants-6f8bcf12.js";function B(i={}){const{wrapper:a}=Object.assign({},o(),i.components);return a?e.jsx(a,Object.assign({},i,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong"},o(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:p}),`
`,e.jsx(n.h1,{id:"inputs",children:"Inputs"}),`
`,e.jsx(d,{children:e.jsx(n.p,{children:`An input field is an input control that allows users to enter alphanumeric information. It can have a range of options
and supports single line and multi-line lengths, as well as varying formats, including numbers, masked passwords, etc.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`Inputs are normally paired with a label, but there are times when they can be used without a label.
Placeholder text should primarily be used as a content prompt and only provided when needed.`}),`
`,e.jsx(s,{children:e.jsx(t,{of:l})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
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
`,e.jsx(s,{children:e.jsx(t,{of:m})}),`
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
`,e.jsx(s,{children:e.jsx(t,{of:u})}),`
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
`,e.jsx(s,{children:e.jsx(t,{of:x})}),`
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
`,e.jsx(s,{children:e.jsx(t,{of:g})}),`
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
`,e.jsx(s,{children:e.jsx(t,{of:j})}),`
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
`,e.jsx(s,{children:e.jsx(t,{of:f})}),`
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
`,e.jsx(s,{children:e.jsx(t,{of:v})}),`
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
`,e.jsx(s,{children:e.jsx(t,{of:I})}),`
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
|`,e.jsx(n.strong,{children:"Extra Small"}),"|INPUT_SIZES.EXTRA_SMALL   |12px|",e.jsx(t,{of:S}),`|
|`,e.jsx(n.strong,{children:"Small"}),"      |INPUT_SIZES.SMALL         |14px|",e.jsx(t,{of:w}),`     |
|`,e.jsx(n.strong,{children:"Default"}),"    |-                              |16px|",e.jsx(t,{of:l}),`    |
|`,e.jsx(n.strong,{children:"Large"}),"      |INPUT_SIZES.LARGE         |20px|",e.jsx(t,{of:E}),`      |
|`,e.jsx(n.strong,{children:"Extra Large"}),"|INPUT_SIZES.EXTRA_LARGE   |24px|",e.jsx(t,{of:b}),"|"]}),`
`,e.jsx(n.h3,{id:"usage-9",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtInput, INPUT_SIZES } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-input
  v-model="text"
  placeholder="placeholder"
  :size="INPUT_SIZES.<SIZE>"
/>
`})})]})}}export{B as default};
//# sourceMappingURL=input-683073dc.js.map
