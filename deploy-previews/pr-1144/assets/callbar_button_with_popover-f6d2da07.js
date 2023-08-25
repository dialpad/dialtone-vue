import{j as e}from"./jsx-dev-runtime-4a98f41d.js";import{M as r,S as m,d as t,e as o,f as a}from"./index-964f6ddc.js";import{C as u,D as c,V as d}from"./callbar_button_with_popover.stories-cbab32c9.js";import{u as s}from"./index-f8bd78c8.js";import"./iframe-86af6332.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-79c013ce.js";import"./vue.esm-bundler-2457a580.js";import"./utils-1ad0962e.js";import"./button-ebe757f5.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./popover-1ce7f9b5.js";import"./tippy_utils-e4c34e91.js";import"./lazy_show-820869a9.js";import"./modal-f96ddab9.js";import"./icon-1bcb5ec8.js";import"./icon_constants-d921541d.js";import"./sr_only_close_button-9c24c2ae.js";import"./callbar_button-a00596ab.js";import"./tooltip-bbe03958.js";function l(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code"},s(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{of:u},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"callbar-button-with-popover",children:"Callbar Button With Popover"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(n.p,{children:"Callbar button with a small arrow that opens a popover."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(t,{children:e.jsxDEV(o,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(t,{children:e.jsxDEV(o,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["This component also accepts all ",e.jsxDEV(n.a,{href:"?path=/docs/components-popover--default#slots-props--events",children:"Popover Component"},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:33},this),` props.
Those will be bind to the Popover instance.`]},void 0,!0,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(a,{},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRecipeCallbarButtonWithPopover } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-callbar-button-with-popover
  @click="buttonClicked"
>
  ButtonLabel
  <template #icon>
    <dt-icon name="dialpad-ai" />
  </template>
  <template #tooltip>
    Tooltip text
  </template>
  <template #content>
    Popover Body
  </template>
  <template #headerContent>
    Popover Header
  </template>
</dt-recipe-callbar-button-with-popover>
`},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"icon-only-active-no-tooltip-no-close-button",children:"Icon-only, active, no tooltip, no close button"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-callbar-button-with-popover
  @click="buttonClicked"
  :show-close-button="false"
  active
>
  <template #icon>
    <dt-icon name="dialpad-ai" />
  </template>
  <template #content>
    Popover Body
  </template>
  <template #headerContent>
    Popover Header
  </template>
</dt-recipe-callbar-button-with-popover>
`},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function R(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(l,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(i)}export{R as default};
//# sourceMappingURL=callbar_button_with_popover-f6d2da07.js.map
