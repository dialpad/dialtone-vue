import{j as n}from"./jsx-runtime-14f9c5f9.js";import{M as c,S as l,C as s,a as t,b as a}from"./index-e4d2618a.js";import{N as d,D as h,E as p,I as m,S as x,W as j,c as u}from"./notice.stories-98298825.js";import{u as r}from"./index-e2e7da94.js";import"./iframe-205005b8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./notice-9b85305a.js";import"./icon-24a41200.js";import"./icon_constants-84bb757e.js";import"./storybook_utils-8d7a2403.js";import"./vue.esm-bundler-00d79a38.js";import"./utils-d2c6fc19.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-df070c17.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-65ed13a8.js";function o(i){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",h4:"h4"},r(),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:d}),`
`,n.jsx(e.h1,{id:"notice",children:"Notice"}),`
`,n.jsx(l,{children:n.jsx(e.p,{children:"A notice is an informational and assistive message that appears inline with content."})}),`
`,n.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(s,{children:n.jsx(t,{of:h})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.h3,{id:"error",children:"Error"}),`
`,n.jsx(s,{children:n.jsx(t,{of:p})}),`
`,n.jsx(e.h3,{id:"info",children:"Info"}),`
`,n.jsx(s,{children:n.jsx(t,{of:m})}),`
`,n.jsx(e.h3,{id:"success",children:"Success"}),`
`,n.jsx(s,{children:n.jsx(t,{of:x})}),`
`,n.jsx(e.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(s,{children:n.jsx(t,{of:j})}),`
`,n.jsx(e.h3,{id:"important",children:"Important"}),`
`,n.jsx(s,{children:n.jsx(t,{of:u})}),`
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
`})})]})}function R(i={}){const{wrapper:e}=Object.assign({},r(),i.components);return e?n.jsx(e,Object.assign({},i,{children:n.jsx(o,i)})):o(i)}export{R as default};
//# sourceMappingURL=notice-ba5cb9cd.js.map