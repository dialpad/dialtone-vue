import{j as e}from"./jsx-runtime-9cd7a970.js";import{M as i,S as l,d as a,e as r,f as c}from"./index-dc8ded77.js";import{C as h,D as d}from"./collapsible.stories-7a96a4b0.js";import{u as o}from"./index-0b54e59b.js";import"./iframe-5f6a7236.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./utils-135fe08f.js";import"./vue.esm-bundler-06a6c133.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-f19eb3b6.js";import"./link_constants-51338c78.js";import"./lazy_show-1f3c68f1.js";import"./icon-136e453c.js";import"./icon_constants-5440087a.js";import"./storybook_utils-b0336152.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:h}),`
`,e.jsx(n.h1,{id:"collapsible",children:"Collapsible"}),`
`,e.jsx(l,{children:e.jsx(n.p,{children:`A collapsible is a component consisting of an interactive anchor that toggled the
expandable/collapsible element.`})}),`
`,e.jsx(n.h2,{id:"basic-style",children:"Basic Style"}),`
`,e.jsx(n.p,{children:"The collapsible has two components. The anchor and the content."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"anchor"})," will default to a basic button with some text if the slot is not filled."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"content"})," must be provided and is the element that can be hidden or shown when the anchor is clicked."]}),`
`,e.jsx(a,{children:e.jsx(r,{of:d})}),`
`,e.jsx(n.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"}),`
`,e.jsx(c,{}),`
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
`})})]})}function X(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{X as default};
//# sourceMappingURL=collapsible-1a6f762a.js.map
