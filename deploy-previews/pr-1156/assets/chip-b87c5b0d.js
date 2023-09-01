import{j as e}from"./jsx-dev-runtime-06256a66.js";import{M as u,S as t,d as s,e as l,f as m}from"./index-9975abe8.js";import{C as o,D as c,V as d}from"./chip.stories-0072f806.js";import{u as a}from"./index-902e7bd8.js";import"./iframe-7ce77f4d.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-6f4fc6ad.js";import"./vue.esm-eff6e72e.js";import"./chip-a40379a8.js";import"./button-9102a84a.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-34725557.js";import"./icon_constants-e6ddb045.js";import"./avatar-5baf9f04.js";import"./presence-d4f38341.js";function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},a(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(u,{of:o},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"chip",children:"Chip"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(t,{children:e.jsxDEV(n.p,{children:`A chip is a compact UI element that provides brief, descriptive information about an element.
It is terse, ideally one word.
It is important a button is identifiable, consistent, and communicates its actions clearly,
and is appropriately sized to its action.`},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Default behaviour is interactive, has hover/focus/active states. When interactive the chip will render as a ",e.jsxDEV(n.code,{children:"<button>"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:109},this),`
element.`]},void 0,!0,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Default content text is aria-label unless overridden by passed in aria-label."},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtChip } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  Chip
</dt-chip>
`},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"with-icon",children:"With Icon"},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`import { DtChip, DtIcon } from '@dialpad/dialtone-vue';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #icon>
    <dt-icon name="lock" />
  </template>
</dt-chip>
`},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"with-avatar",children:"With Avatar"},void 0,!1,{fileName:"<source.js>",lineNumber:61,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`import { DtAvatar } from '@dialpad/dialtone';

<dt-chip :close-button-props="{ ariaLabel: $i18n('close') }">
  <template #avatar>
    <dt-avatar full-name="Dialpad" />
  </template>
</dt-chip>
`},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"non-interactive",children:"Non Interactive"},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The chip is not focusable or clickable. If not interactive the chip will render as a ",e.jsxDEV(n.code,{children:"<span>"},void 0,!1,{fileName:"<source.js>",lineNumber:75,columnNumber:86},this)," element."]},void 0,!0,{fileName:"<source.js>",lineNumber:75,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-chip
  :interactive="false"
  :hide-close="true"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function X(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(r,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):r(i)}export{X as default};
//# sourceMappingURL=chip-b87c5b0d.js.map
