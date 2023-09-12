import{j as n}from"./jsx-runtime-0f3a3e5e.js";import{M as a,S as l,d as i,e as t,f as d}from"./index-00e3ea6e.js";import{B as c,D as h,E as p,I as j,S as x,P as m,W as u}from"./banner.stories-8f81d9fb.js";import{u as o}from"./index-7683571c.js";import"./iframe-1f0202b1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./banner-744904ae.js";import"./notice-19981770.js";import"./icon-c58f5659.js";import"./icon_constants-1cfbd16e.js";import"./storybook_utils-8dde5fa6.js";import"./vue.esm-bundler-400586b0.js";import"./utils-0b5636ec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-73bbdd30.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-7ff28717.js";import"./modal-f96ddab9.js";import"./notice.stories-8d9dfd70.js";import"./chunk-AY7I2SME-c7b6cf8a.js";function r(s){const e=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",ol:"ol",li:"li",code:"code",h3:"h3",pre:"pre"},o(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:c}),`
`,n.jsx(e.h1,{id:"banner",children:"Banner"}),`
`,n.jsx(l,{children:n.jsxs(e.p,{children:["Banners are a type of ",n.jsx("a",{href:"/?path=/docs/components-notice--default",children:"notice"}),`, delivering system and engagement
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
`,n.jsx(i,{children:n.jsx(t,{of:h})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.p,{children:"Provides different styles of banners"}),`
`,n.jsx(e.h3,{id:"error",children:"Error"}),`
`,n.jsx(e.p,{children:"Applies error visual style."}),`
`,n.jsx(i,{children:n.jsx(t,{of:p})}),`
`,n.jsx(e.h3,{id:"info",children:"Info"}),`
`,n.jsx(e.p,{children:"Applies info visual style."}),`
`,n.jsx(i,{children:n.jsx(t,{of:j})}),`
`,n.jsx(e.h3,{id:"success",children:"Success"}),`
`,n.jsx(e.p,{children:"Success visual style."}),`
`,n.jsx(i,{children:n.jsx(t,{of:x})}),`
`,n.jsx(e.h3,{id:"pinned",children:"Pinned"}),`
`,n.jsx(e.p,{children:"Pins the banner to the top of the window"}),`
`,n.jsx(i,{children:n.jsx(t,{of:m})}),`
`,n.jsx(e.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(e.p,{children:"Warning visual style."}),`
`,n.jsx(i,{children:n.jsx(t,{of:u})}),`
`,n.jsx(e.h3,{id:"custom-background",children:"Custom Background"}),`
`,n.jsxs(e.p,{children:["You can set custom background image to banner component passing a path to ",n.jsx(e.code,{children:"backgroundImage"}),` prop
and set the background size with `,n.jsx(e.code,{children:"backgroundSize"})," prop."]}),`
`,n.jsx(e.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(d,{}),`
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
`})})]})}function L(s={}){const{wrapper:e}=Object.assign({},o(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(r,s)})):r(s)}export{L as default};
//# sourceMappingURL=banner-7553d966.js.map