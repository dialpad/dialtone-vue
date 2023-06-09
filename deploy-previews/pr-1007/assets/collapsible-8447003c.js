import{j as e}from"./jsx-dev-runtime-f7d8885d.js";import{M as t,S as o,C as r,a as u,b as a}from"./index-f3e70ef8.js";import{C as m,D as c}from"./collapsible.stories-01d61f28.js";import{u as l}from"./index-d76e3c15.js";import"./iframe-b636b7b4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-be1af372.js";import"./vue.esm-eff6e72e.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-9102a84a.js";import"./link_constants-51338c78.js";import"./lazy_show-0b3a0cf0.js";import"./icon-49f0abb3.js";import"./icon_constants-7577383f.js";function i(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},l(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{of:m},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"collapsible",children:"Collapsible"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(n.p,{children:`A collapsible is a component consisting of an interactive anchor that toggled the
expandable/collapsible element.`},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"basic-style",children:"Basic Style"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"The collapsible has two components. The anchor and the content."},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"anchor"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:5},this)," will default to a basic button with some text if the slot is not filled."]},void 0,!0,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"content"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:5},this)," must be provided and is the element that can be hidden or shown when the anchor is clicked."]},void 0,!0,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(r,{children:e.jsxDEV(u,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(a,{},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"basic-usage-without-anchor-slot",children:"Basic Usage without Anchor Slot"},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`import { DtCollapsible } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-collapsible
  :anchor-text="Click Me!"
  @opened="onOpen"
>
  <template #content>
    <p>
      This will be shown in the expanded area.
    </p>
  </template>
</dt-collapsible>
`},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"basic-usage-with-anchor-slot",children:"Basic Usage with Anchor Slot"},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`By default, the content starts expanded and is toggled when the anchor is clicked.
This can be overriden if the `,e.jsxDEV(n.code,{children:"open"},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:30},this)," prop is set."]},void 0,!0,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`import { DtCollapsible, DtButton } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-collapsible @opened="onOpen">
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function O(s={}){const{wrapper:n}=Object.assign({},l(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(i,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):i(s)}export{O as default};
//# sourceMappingURL=collapsible-8447003c.js.map
