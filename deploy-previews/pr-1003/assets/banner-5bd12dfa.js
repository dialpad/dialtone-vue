import{j as n}from"./jsx-runtime-cf674712.js";import{M as l,S as d,C as s,a as i,b as c}from"./index-ee83b42f.js";import{B as h,D as p,E as j,I as x,S as m,P as u,W as g}from"./banner.stories-92c2d98a.js";import{u as a}from"./index-4a870885.js";import"./iframe-a1e16144.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./notice-d0d9d408.js";import"./icon-607d64de.js";import"./icon_constants-4010861d.js";import"./storybook_utils-d77bbd23.js";import"./vue.esm-bundler-e62bdd6b.js";import"./utils-cafa7a3e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-63a1067b.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-46753cf5.js";import"./modal-f96ddab9.js";import"./notice.stories-5d0aec0a.js";import"./chunk-OPEUWD42-a3b45fd8.js";function R(t={}){const{wrapper:r}=Object.assign({},a(),t.components);return r?n.jsx(r,Object.assign({},t,{children:n.jsx(o,{})})):o();function o(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",ol:"ol",li:"li",code:"code",h3:"h3",pre:"pre"},a(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:h}),`
`,n.jsx(e.h1,{id:"banner",children:"Banner"}),`
`,n.jsx(d,{children:n.jsxs(e.p,{children:["Banners are a type of ",n.jsx("a",{href:"/?path=/docs/components-notice--default",children:"notice"}),`, delivering system and engagement
messaging.
These are highly intrusive notices and should be used sparingly and appropriately.`]})}),`
`,n.jsx(e.h2,{id:"styles",children:"Styles"}),`
`,n.jsxs(e.p,{children:["System banners are used for ",n.jsx(e.strong,{children:"system"})," messaging. They are full-width notices placed in one of two locations:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Above everything else:"}),` If the banner is related to the entire app (e.g. the user lost internet service),
place the banner first. These should not be dismissable until the issue is resolved. To pin the banner to the top of
the app, add the `,n.jsx(e.code,{children:"pinned"})," property."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Below the top bar:"}),` This is the default location for system banners. Use these when it affects only a particular
area of the product (e.g. when the user is in Do Not Disturb mode).`]}),`
`]}),`
`,n.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(e.p,{children:"The typical banner will have a title, description and an action button"}),`
`,n.jsx(s,{children:n.jsx(i,{of:p})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.p,{children:"Provides different styles of banners"}),`
`,n.jsx(e.h3,{id:"error",children:"Error"}),`
`,n.jsx(e.p,{children:"Applies error visual style."}),`
`,n.jsx(s,{children:n.jsx(i,{of:j})}),`
`,n.jsx(e.h3,{id:"info",children:"Info"}),`
`,n.jsx(e.p,{children:"Applies info visual style."}),`
`,n.jsx(s,{children:n.jsx(i,{of:x})}),`
`,n.jsx(e.h3,{id:"success",children:"Success"}),`
`,n.jsx(e.p,{children:"Success visual style."}),`
`,n.jsx(s,{children:n.jsx(i,{of:m})}),`
`,n.jsx(e.h3,{id:"pinned",children:"Pinned"}),`
`,n.jsx(e.p,{children:"Pins the banner to the top of the window"}),`
`,n.jsx(s,{children:n.jsx(i,{of:u})}),`
`,n.jsx(e.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(e.p,{children:"Warning visual style."}),`
`,n.jsx(s,{children:n.jsx(i,{of:g})}),`
`,n.jsx(e.h3,{id:"custom-background",children:"Custom Background"}),`
`,n.jsxs(e.p,{children:["You can set custom background image to banner component passing a path to ",n.jsx(e.code,{children:"backgroundImage"}),` prop
and set the background size with `,n.jsx(e.code,{children:"backgroundSize"})," prop."]}),`
`,n.jsx(e.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["It is possible to include a screen reader visible only close button setting ",n.jsx(e.code,{children:"visually-hidden-close"}),`
and `,n.jsx(e.code,{children:"visually-hidden-close-label"})," props."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { DtBanner, DtButton } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<dt-banner
  title="Optional title"
>
  Message body with
  <a
    href="#"
    class="d-link"
  >a link</a>.
  <template
    #action
  >
    <dt-button
      importance="outlined"
      @click="onClick"
    >
      Action
    </dt-button>
  </template>
</dt-banner>
`})})]})}}export{R as default};
//# sourceMappingURL=banner-5bd12dfa.js.map
