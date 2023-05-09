import{j as e}from"./jsx-runtime-7910f525.js";import{M as l,S as d,C as n,a as t,b as c}from"./index-0968e01b.js";import{T as h,D as m,E as p,I as u,S as x,W as j,a as g}from"./toast.stories-ba13521f.js";import{u as r}from"./index-450c2e24.js";import"./iframe-aa32f258.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-b781ced2.js";import"./vue.esm-eff6e72e.js";import"./notice-a16da059.js";import"./icon-64b3bee5.js";import"./icon_constants-0609a8e8.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-45d71d86.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-f316cf54.js";function L(i={}){const{wrapper:o}=Object.assign({},r(),i.components);return o?e.jsx(o,Object.assign({},i,{children:e.jsx(a,{})})):a();function a(){const s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",h4:"h4",ul:"ul",li:"li"},r(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(s.h1,{id:"toast",children:"Toast"}),`
`,e.jsx(d,{children:e.jsx(s.p,{children:`A toast notice, sometimes called a snackbar, is a time-based message that appears based on users' actions.
It contains at-a-glance information about outcomes and can be paired with actions.`})}),`
`,e.jsx(s.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n,{children:e.jsx(t,{of:m})}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s.h3,{id:"error",children:"Error"}),`
`,e.jsx(n,{children:e.jsx(t,{of:p})}),`
`,e.jsx(s.h3,{id:"info",children:"Info"}),`
`,e.jsx(n,{children:e.jsx(t,{of:u})}),`
`,e.jsx(s.h3,{id:"success",children:"Success"}),`
`,e.jsx(n,{children:e.jsx(t,{of:x})}),`
`,e.jsx(s.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(n,{children:e.jsx(t,{of:j})}),`
`,e.jsx(s.h3,{id:"important",children:"Important"}),`
`,e.jsx(n,{children:e.jsx(t,{of:g})}),`
`,e.jsx(s.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:["It is possible to include a screen reader visible only close button setting ",e.jsx(s.code,{children:"visually-hidden-close"}),`
and `,e.jsx(s.code,{children:"visually-hidden-close-label"})," props."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:'role="status"'}),` is the default role attribute, and it's recommended to use this role unless you want to show an
error message where `,e.jsx(s.code,{children:'role="alert"'}),` will be valid. Take into account that if you invoke multiple toasts
with `,e.jsx(s.code,{children:'role="alert"'}),", screen readers could override its speech queue and causes to miss a toast message."]}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"import",children:"Import"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { DtToast } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(s.h4,{id:"close",children:"close()"}),`
`,e.jsx(s.p,{children:"Instance method that closes the toast and removes it from the DOM."}),`
`,e.jsx(s.h3,{id:"events",children:"Events"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"close"})," is fired when close button is clicked."]}),`
`,e.jsx(s.h4,{id:"example-without-self-positioning-",children:"Example without self-positioning *"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<template>
  <button type="button" @click="openToast">Click to show!</button>
  <dt-toast
    :title="title"
    :message="message"
    :show.sync="isShown"
  ></dt-toast>
</template>

<script>
import { DtToast } from '@dialpad/dialtone-vue';

export default {
  components: { DtToast },
  data () {
    return {
      title: 'Title',
      message: 'Message body.'
      isShown: false,
    }
  },
}
<\/script>
`})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["If you need to self-position the toast at the top center, use the ",e.jsx(s.code,{children:"d-toast-wrapper"})," Dialtone class:"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<aside class="d-toast-wrapper">
  <dt-toast
    :title="title"
    :message="message"
    :show.sync="isShown"
  ></dt-toast>
</aside>
`})}),`
`,e.jsx(s.h3,{id:"with-duration",children:"With duration"}),`
`,e.jsx(s.p,{children:`It's recommended to use a time of at least 6000 ms (minimum duration validated in the component) to give users enough
time to read the toast. Take into account that the time necessary to read and comprehend the message could vary in
users.
For instance, users using assistive technology, or users with language barriers could potentially need more time to
read and understand the message.`}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<dt-toast
  title="Title"
  message="Message"
  :duration="7500"
  :show.sync="isShown"
/>
`})})]})}}export{L as default};
//# sourceMappingURL=toast-0ce11846.js.map
