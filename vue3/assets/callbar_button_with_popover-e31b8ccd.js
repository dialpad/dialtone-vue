import{j as t}from"./jsx-runtime-66ce1ef1.js";import{M as p,b as l,C as n,d as r,e as s}from"./index-522ba449.js";import{C as c,D as m,V as d}from"./callbar_button_with_popover.stories-9ea81685.js";import{u as i}from"./index-87fa5ff3.js";import"./iframe-9639b9be.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-3d124f1b.js";import"./vue.esm-bundler-29004354.js";import"./utils-810cfe6f.js";import"./callbar_button_with_popover-8d09115a.js";import"./button-0ee7bf53.js";import"./link_constants-8ea95ec9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./popover-df1a2ed1.js";import"./tippy_utils-352d0d4a.js";import"./lazy_show-01e22690.js";import"./modal-f96ddab9.js";import"./icon-bd97a3a1.js";import"./icon_constants-c8c2c53a.js";import"./sr_only_close_button-bac172b4.js";import"./callbar_button-6d3f50d1.js";import"./tooltip-2c164916.js";function a(o){const e=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code"},i(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:c}),`
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
`})})]})}function R(o={}){const{wrapper:e}=Object.assign({},i(),o.components);return e?t.jsx(e,Object.assign({},o,{children:t.jsx(a,o)})):a(o)}export{R as default};
//# sourceMappingURL=callbar_button_with_popover-e31b8ccd.js.map