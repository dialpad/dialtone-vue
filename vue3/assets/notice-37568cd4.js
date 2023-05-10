import{j as n}from"./jsx-runtime-7739d396.js";import{M as l,S as a,C as i,a as s,b as d}from"./index-b1ae6709.js";import{N as h,D as p,E as m,I as x,S as j,W as u,c as f}from"./notice.stories-198fef71.js";import{u as c}from"./index-02095ed6.js";import"./iframe-456cc127.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./notice-aeb6b2c6.js";import"./icon-bc3f90e3.js";import"./icon_constants-57565bba.js";import"./storybook_utils-f14132b0.js";import"./vue.esm-bundler-2b4fd772.js";import"./utils-3b94b552.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-613c85d4.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-f99549ca.js";function T(t={}){const{wrapper:o}=Object.assign({},c(),t.components);return o?n.jsx(o,Object.assign({},t,{children:n.jsx(r,{})})):r();function r(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",h4:"h4"},c(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:h}),`
`,n.jsx(e.h1,{id:"notice",children:"Notice"}),`
`,n.jsx(a,{children:n.jsx(e.p,{children:"A notice is an informational and assistive message that appears inline with content."})}),`
`,n.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(i,{children:n.jsx(s,{of:p})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.h3,{id:"error",children:"Error"}),`
`,n.jsx(i,{children:n.jsx(s,{of:m})}),`
`,n.jsx(e.h3,{id:"info",children:"Info"}),`
`,n.jsx(i,{children:n.jsx(s,{of:x})}),`
`,n.jsx(e.h3,{id:"success",children:"Success"}),`
`,n.jsx(i,{children:n.jsx(s,{of:j})}),`
`,n.jsx(e.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(i,{children:n.jsx(s,{of:u})}),`
`,n.jsx(e.h3,{id:"important",children:"Important"}),`
`,n.jsx(i,{children:n.jsx(s,{of:f})}),`
`,n.jsx(e.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(d,{}),`
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
`})})]})}}export{T as default};
//# sourceMappingURL=notice-37568cd4.js.map
