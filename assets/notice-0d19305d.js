import{j as n}from"./jsx-runtime-21158485.js";import{M as c,b as l,C as i,d as t,e as a}from"./index-47689389.js";import{N as d,D as h,E as p,I as m,S as x,W as j,a as u}from"./notice.stories-4b346ed4.js";import{u as r}from"./index-5087b79c.js";import"./iframe-3769dc5e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./notice-1d6f4f15.js";import"./icon-d9bd2c26.js";import"./icon_constants-9268d030.js";import"./storybook_utils-0b506883.js";import"./vue.esm-ba2ca387.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-4cf26c8f.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-d5a5873f.js";function o(s){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",h4:"h4"},r(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:d}),`
`,n.jsx(e.h1,{id:"notice",children:"Notice"}),`
`,n.jsx(l,{children:n.jsx(e.p,{children:"A notice is an informational and assistive message that appears inline with content."})}),`
`,n.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(i,{children:n.jsx(t,{of:h})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.h3,{id:"error",children:"Error"}),`
`,n.jsx(i,{children:n.jsx(t,{of:p})}),`
`,n.jsx(e.h3,{id:"info",children:"Info"}),`
`,n.jsx(i,{children:n.jsx(t,{of:m})}),`
`,n.jsx(e.h3,{id:"success",children:"Success"}),`
`,n.jsx(i,{children:n.jsx(t,{of:x})}),`
`,n.jsx(e.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(i,{children:n.jsx(t,{of:j})}),`
`,n.jsx(e.h3,{id:"important",children:"Important"}),`
`,n.jsx(i,{children:n.jsx(t,{of:u})}),`
`,n.jsx(e.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(a,{}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["It is possible to include a screen reader visible only close button setting ",n.jsx(e.code,{children:"visually-hidden-close"}),`
and `,n.jsx(e.code,{children:"visually-hidden-close-label"})," props."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { DtNotice } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(e.h3,{id:"events",children:"Events"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"close"})," is fired when close button is clicked."]}),`
`,n.jsx(e.h4,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<template>
  <button type="button" @click="showNotice">Click to show!</button>
  <dt-notice
    :title="title"
    v-if="isNoticeShown"
    @close="closeNotice"
  >
    Message body
  </dt-notice>
</template>

<script>
import { DtNotice } from '@dialpad/dialtone-vue';

export default {
  components: { DtNotice },
  data () {
    return {
      title: 'Title',
      isNoticeShown: false,
    }
  },
  methods: {
    showNotice () {
      this.isNoticeShown = true;
    },
    closeNotice () {
      this.isNoticeShown = false;
    },
  },
}
<\/script>
`})})]})}function F(s={}){const{wrapper:e}=Object.assign({},r(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(o,s)})):o(s)}export{F as default};
//# sourceMappingURL=notice-0d19305d.js.map
