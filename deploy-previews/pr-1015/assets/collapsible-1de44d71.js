import{j as e}from"./jsx-runtime-955057f2.js";import{M as l,S as a,C as r,a as c,b as p}from"./index-5554e5e1.js";import{C as h,D as d}from"./collapsible.stories-7b4f0d82.js";import{u as i}from"./index-d3978606.js";import"./iframe-e77b972c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./utils-701363a2.js";import"./vue.esm-bundler-e62bdd6b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-f0bff3c1.js";import"./link_constants-51338c78.js";import"./lazy_show-aad08efa.js";import"./icon-ee68f285.js";import"./icon_constants-845465a6.js";import"./storybook_utils-1c9c66e9.js";function E(t={}){const{wrapper:s}=Object.assign({},i(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(o,{})})):o();function o(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(n.h1,{id:"collapsible",children:"Collapsible"}),`
`,e.jsx(a,{children:e.jsx(n.p,{children:`A collapsible is a component consisting of an interactive anchor that toggled the
expandable/collapsible element.`})}),`
`,e.jsx(n.h2,{id:"basic-style",children:"Basic Style"}),`
`,e.jsx(n.p,{children:"The collapsible has two components. The anchor and the content."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"anchor"})," will default to a basic button with some text if the slot is not filled."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"content"})," must be provided and is the element that can be hidden or shown when the anchor is clicked."]}),`
`,e.jsx(r,{children:e.jsx(c,{of:d})}),`
`,e.jsx(n.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"}),`
`,e.jsx(p,{}),`
`,e.jsx(n.h3,{id:"basic-usage-without-anchor-slot",children:"Basic Usage without Anchor Slot"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtCollapsible } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-collapsible
  :anchor-text="Click Me!"
  @opened="onOpen"
>
  <template #content>
    <p>
      This will be shown in the expanded area.
    </p>
  </template>
</dt-collapsible>
`})}),`
`,e.jsx(n.h3,{id:"basic-usage-with-anchor-slot",children:"Basic Usage with Anchor Slot"}),`
`,e.jsxs(n.p,{children:[`By default, the content starts expanded and is toggled when the anchor is clicked.
This can be overriden if the `,e.jsx(n.code,{children:"open"})," prop is set."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { DtCollapsible, DtButton } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-collapsible @opened="onOpen">
  <template #anchor={ attrs }>
    <dt-button v-bind="attrs">
      Click Me!
    </dt-button>
  </template>
  <template #content>
    <p>
      This will be shown in the expanded area.
    </p>
  </template>
</dt-collapsible>
`})})]})}}export{E as default};
//# sourceMappingURL=collapsible-1de44d71.js.map
