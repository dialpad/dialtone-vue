import{j as t}from"./jsx-runtime-5e122214.js";import{M as l,S as s,C as a,a as i,b as c}from"./index-c805ab7c.js";import{C as m,D as d,V as h}from"./callbar_button_with_popover.stories-e84bd3a8.js";import{u as p}from"./index-7ffc5af0.js";import"./iframe-814763f6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-0a6e313e.js";import"./vue.esm-bundler-a6507c57.js";import"./utils-40a24902.js";import"./button-40978538.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./popover-feed06fb.js";import"./tippy_utils-0155706c.js";import"./tippy.esm-65135068.js";import"./lazy_show-5040fc92.js";import"./modal-f96ddab9.js";import"./icon-986e0145.js";import"./icon_constants-f3ff1f59.js";import"./sr_only_close_button-6a9bad6f.js";import"./callbar_button-05fd6ae3.js";import"./tooltip-3c7cabab.js";function U(o={}){const{wrapper:n}=Object.assign({},p(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(r,{})})):r();function r(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:m}),`
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
`})})]})}}export{U as default};
//# sourceMappingURL=callbar_button_with_popover-6a046b87.js.map
