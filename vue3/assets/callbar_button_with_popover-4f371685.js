import{j as t}from"./jsx-runtime-6924cf94.js";import{M as p,S as l,d as n,e as r,f as s}from"./index-9f6cf70c.js";import{C as c,D as m,V as d}from"./callbar_button_with_popover.stories-54de9b70.js";import{u as i}from"./index-754f58f9.js";import"./iframe-abc3dadf.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-8dde5fa6.js";import"./vue.esm-bundler-400586b0.js";import"./utils-0b5636ec.js";import"./callbar_button_with_popover-8e5e7f00.js";import"./button-73bbdd30.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./popover-06a34398.js";import"./tippy_utils-352d0d4a.js";import"./lazy_show-157a5908.js";import"./modal-f96ddab9.js";import"./icon-c58f5659.js";import"./icon_constants-1cfbd16e.js";import"./sr_only_close_button-7ff28717.js";import"./callbar_button-f3b2d021.js";import"./tooltip-a4eaf6ae.js";function a(o){const e=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code"},i(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:c}),`
`,t.jsx(e.h1,{id:"callbar-button-with-popover",children:"Callbar Button With Popover"}),`
`,t.jsx(l,{children:t.jsx(e.p,{children:"Callbar button with a small arrow that opens a popover."})}),`
`,t.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,t.jsx(n,{children:t.jsx(r,{of:m})}),`
`,t.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(n,{children:t.jsx(r,{of:d})}),`
`,t.jsx(e.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,t.jsxs(e.p,{children:["This component also accepts all ",t.jsx(e.a,{href:"?path=/docs/components-popover--default#slots-props--events",children:"Popover Component"}),` props.
Those will be bind to the Popover instance.`]}),`
`,t.jsx(s,{}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.h3,{id:"import",children:"Import"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { DtRecipeCallbarButtonWithPopover } from '@dialpad/dialtone-vue';
`})}),`
`,t.jsx(e.h3,{id:"default",children:"Default"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<dt-recipe-callbar-button-with-popover
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
`})}),`
`,t.jsx(e.h3,{id:"icon-only-active-no-tooltip-no-close-button",children:"Icon-only, active, no tooltip, no close button"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<dt-recipe-callbar-button-with-popover
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
`})})]})}function _(o={}){const{wrapper:e}=Object.assign({},i(),o.components);return e?t.jsx(e,Object.assign({},o,{children:t.jsx(a,o)})):a(o)}export{_ as default};
//# sourceMappingURL=callbar_button_with_popover-4f371685.js.map
