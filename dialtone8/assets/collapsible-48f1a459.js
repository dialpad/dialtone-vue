import{j as e}from"./jsx-runtime-9b9c0d95.js";import{M as l,S as a,d as r,e as c,f as h}from"./index-f9ecdc5e.js";import{C as d,D as p}from"./collapsible.stories-a905457b.js";import{u as i}from"./index-b9ad9bb0.js";import"./iframe-50647f0c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-ef95e34d.js";import"./vue.esm-ba2ca387.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./lazy_show-ac5fd1cd.js";import"./icon-642e4ff8.js";import"./icon_constants-541426ce.js";function A(t={}){const{wrapper:s}=Object.assign({},i(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(o,{})})):o();function o(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(n.h1,{id:"collapsible",children:"Collapsible"}),`
`,e.jsx(a,{children:e.jsx(n.p,{children:`A collapsible is a component consisting of an interactive anchor that toggled the
expandable/collapsible element.`})}),`
`,e.jsx(n.h2,{id:"basic-style",children:"Basic Style"}),`
`,e.jsx(n.p,{children:"The collapsible has two components. The anchor and the content."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"anchor"})," will default to a basic button with some text if the slot is not filled."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"content"})," must be provided and is the element that can be hidden or shown when the anchor is clicked."]}),`
`,e.jsx(r,{children:e.jsx(c,{of:p})}),`
`,e.jsx(n.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"}),`
`,e.jsx(h,{}),`
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
`})})]})}}export{A as default};
//# sourceMappingURL=collapsible-48f1a459.js.map
