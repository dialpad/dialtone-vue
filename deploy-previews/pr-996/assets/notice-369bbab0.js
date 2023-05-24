import{j as n}from"./jsx-runtime-981becf4.js";import{M as l,S as a,C as i,a as s,b as d}from"./index-13f5fca7.js";import{N as h,D as p,E as m,I as x,S as j,W as u,c as f}from"./notice.stories-6999d6b2.js";import{u as c}from"./index-87d62a12.js";import"./iframe-1ab96ab8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./notice-b3935df4.js";import"./icon-2be5d650.js";import"./icon_constants-31b79027.js";import"./storybook_utils-cf9b483a.js";import"./vue.esm-bundler-15aa0fd7.js";import"./utils-66883e36.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-586a189e.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-4e0d953e.js";function T(t={}){const{wrapper:o}=Object.assign({},c(),t.components);return o?n.jsx(o,Object.assign({},t,{children:n.jsx(r,{})})):r();function r(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",h4:"h4"},c(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:h}),`
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
//# sourceMappingURL=notice-369bbab0.js.map
