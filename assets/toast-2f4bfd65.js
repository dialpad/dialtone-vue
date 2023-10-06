import{j as e}from"./jsx-runtime-1f74d513.js";import{M as r,b as l,C as t,d as i,e as d}from"./index-f7c7f393.js";import{T as c,D as h,E as m,I as p,S as u,W as x,a as j}from"./toast.stories-2e26bc42.js";import{u as a}from"./index-b487ed8c.js";import"./iframe-0674cc5c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-52560a53.js";import"./vue.esm-ba2ca387.js";import"./toast-561827a4.js";import"./notice-90e8203f.js";import"./icon-cdbe4e67.js";import"./icon_constants-cf231ad1.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-4cf26c8f.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-2d23f6f1.js";function o(n){const s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",h4:"h4",ul:"ul",li:"li"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(s.h1,{id:"toast",children:"Toast"}),`
`,e.jsx(l,{children:e.jsx(s.p,{children:`A toast notice, sometimes called a snackbar, is a time-based message that appears based on users' actions.
It contains at-a-glance information about outcomes and can be paired with actions.`})}),`
`,e.jsx(s.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(t,{children:e.jsx(i,{of:h})}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s.h3,{id:"error",children:"Error"}),`
`,e.jsx(t,{children:e.jsx(i,{of:m})}),`
`,e.jsx(s.h3,{id:"info",children:"Info"}),`
`,e.jsx(t,{children:e.jsx(i,{of:p})}),`
`,e.jsx(s.h3,{id:"success",children:"Success"}),`
`,e.jsx(t,{children:e.jsx(i,{of:u})}),`
`,e.jsx(s.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(t,{children:e.jsx(i,{of:x})}),`
`,e.jsx(s.h3,{id:"important",children:"Important"}),`
`,e.jsx(t,{children:e.jsx(i,{of:j})}),`
`,e.jsx(s.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
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
`})})]})}function q(n={}){const{wrapper:s}=Object.assign({},a(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{q as default};
//# sourceMappingURL=toast-2f4bfd65.js.map
