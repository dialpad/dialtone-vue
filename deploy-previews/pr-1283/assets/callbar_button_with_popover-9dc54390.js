import{j as e}from"./jsx-dev-runtime-7398ab53.js";import{M as r,b as m,C as t,d as o,e as a}from"./index-4678111c.js";import{C as u,D as c,V as d}from"./callbar_button_with_popover.stories-3cffd166.js";import{u as s}from"./index-20fc3c3c.js";import"./iframe-3dc1c06c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-fb032280.js";import"./vue.esm-bundler-5f4c5b12.js";import"./utils-eec883fe.js";import"./callbar_button_with_popover-afa6cf85.js";import"./button-a4e86900.js";import"./link_constants-8ea95ec9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./popover-5b829eec.js";import"./tippy_utils-89aa4eb5.js";import"./lazy_show-94c78d4e.js";import"./modal-f96ddab9.js";import"./icon-a9416a2a.js";import"./icon_constants-795bfe6c.js";import"./sr_only_close_button-0109fa76.js";import"./callbar_button-59a4c191.js";import"./tooltip-0a7b46b1.js";function l(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code"},s(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{of:u},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
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
//# sourceMappingURL=callbar_button_with_popover-9dc54390.js.map
