import{j as t}from"./jsx-runtime-d5918a79.js";import{M as p,b as l,C as n,d as r,e as s}from"./index-34beeb33.js";import{C as c,D as m,V as d}from"./callbar_button_with_popover.stories-7837c1e1.js";import{u as i}from"./index-a33a727c.js";import"./iframe-ff5f47f1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-cf049d2e.js";import"./callbar_button_with_popover-82bbefd5.js";import"./button-d2753bc0.js";import"./link_constants-8ea95ec9.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./popover-3145b76a.js";import"./tippy_utils-dcd4636d.js";import"./utils-9173caed.js";import"./vue.esm-d1ae8e95.js";import"./lazy_show-ac5fd1cd.js";import"./index.esm-5f67660d.js";import"./modal-600bd46a.js";import"./icon-afc75046.js";import"./icon_constants-e5cbd7a1.js";import"./sr_only_close_button-564faa13.js";import"./callbar_button-9cbd7570.js";import"./tooltip-50f0db19.js";function a(o){const e=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code"},i(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:c}),`
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
//# sourceMappingURL=callbar_button_with_popover-f4a60df0.js.map
