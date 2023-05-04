import{j as t}from"./jsx-runtime-f5adbe09.js";import{M as l,S as s,C as a,a as i,b as c}from"./index-5a237274.js";import{C as m,D as d,V as h}from"./callbar_button_with_popover.stories-dd07bc89.js";import{u as p}from"./index-9b6406aa.js";import"./iframe-9878ed45.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-544d6d08.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-3c489ce7.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-0dc0813d.js";import"./storybook_utils-1ef620d9.js";import"./vue.esm-eff6e72e.js";import"./button-45d71d86.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./popover-5699aa5e.js";import"./tippy_utils-e4c34e91.js";import"./lazy_show-0b3a0cf0.js";import"./index.esm-018778a2.js";import"./modal-f96ddab9.js";import"./icon-b5b99f89.js";import"./icon_constants-2dbd608e.js";import"./sr_only_close_button-885da93d.js";import"./callbar_button-0b0e4bdc.js";import"./tooltip-da6829d8.js";function F(o={}){const{wrapper:n}=Object.assign({},p(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(r,{})})):r();function r(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:m}),`
`,t.jsx(e.h1,{id:"callbar-button-with-popover",children:"Callbar Button With Popover"}),`
`,t.jsx(s,{children:t.jsx(e.p,{children:"Callbar button with a small arrow that opens a popover."})}),`
`,t.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,t.jsx(a,{children:t.jsx(i,{of:d})}),`
`,t.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(a,{children:t.jsx(i,{of:h})}),`
`,t.jsx(e.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,t.jsxs(e.p,{children:["This component also accepts all ",t.jsx(e.a,{href:"?path=/docs/components-popover--default#slots-props--events",children:"Popover Component"}),` props.
Those will be bind to the Popover instance.`]}),`
`,t.jsx(c,{}),`
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
`})})]})}}export{F as default};
//# sourceMappingURL=callbar_button_with_popover-079c3152.js.map
