import{j as e}from"./jsx-runtime-242b6870.js";import{M as r,S as p,C as l,a as c,b as a}from"./index-f3de772d.js";import{C as d,D as m}from"./combobox_with_popover.stories-4590d606.js";import{u as s}from"./index-bc39e9ae.js";import"./iframe-bb8f6a68.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-2ac5aadd.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-1ef620d9.js";import"./vue.esm-eff6e72e.js";import"./combobox_with_popover-ffdb40ee.js";import"./combobox-62f71060.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-b135a23a.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-b5b99f89.js";import"./icon_constants-2dbd608e.js";import"./skeleton-28563e4f.js";import"./popover-5699aa5e.js";import"./tippy_utils-e4c34e91.js";import"./lazy_show-0b3a0cf0.js";import"./index.esm-018778a2.js";import"./modal-f96ddab9.js";import"./button-45d71d86.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-885da93d.js";import"./dropdown_constants-d0cadac9.js";import"./input-d07ffd9f.js";import"./validation_messages-7d1aadb9.js";import"./input-c45869b5.js";import"./checkbox-526f85e3.js";function K(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",h3:"h3",pre:"pre"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(t.h1,{id:"combobox-with-popover",children:"Combobox With Popover"}),`
`,e.jsx(p,{children:e.jsx(t.p,{children:"A combobox that renders the listbox inside a popover therefore the listbox is rendered at the root of the document."})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(t.p,{children:["The combobox contains the ",e.jsx(t.code,{children:"input"})," and ",e.jsx(t.code,{children:"list"})," slots specified in the ",e.jsx(t.a,{href:"?path=/docs/components-combobox--default",children:"combobox documentation"}),`.
Since it's using the popover content to render the list, it's also possible to add a header and footer to the popover
as it's specified in the `,e.jsx(t.a,{href:"?path=/docs/components-popover--default",children:"popover documentation"}),"."]}),`
`,e.jsx(l,{children:e.jsx(c,{of:m})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["It is possible to include a screen reader visible only close button setting ",e.jsx(t.code,{children:"visually-hidden-close"}),`
and `,e.jsx(t.code,{children:"visually-hidden-close-label"})," props."]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { DtRecipeComboboxWithPopover } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.h3,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-recipe-combobox-with-popover
  ref="comboboxWithPopover"
  list-aria-label="Example list items"
  @escape="onEscape"
  @highlight="onHighlight"
  @select="onSelect"
>
  <template #input="{ inputProps }">
    <dt-input v-bind="inputProps" />
  </template>
  <template #list="{ listProps }">
    <ul v-bind="listProps">
      <dt-list-item
        v-for="(item, i) in items"
        :key="item.id"
        navigation-type="arrow-keys"
        role="option"
        @click="onSelect(i)"
      >
        {{ item.name }}
      </dt-list-item>
    </ul>
  </template>
</dt-recipe-combobox-with-popover>
`})}),`
`,e.jsxs(t.p,{children:["When not passing ",e.jsx(t.code,{children:"showList"}),` and using the default combobox trigger on input focus,
to close the list with the `,e.jsx(t.code,{children:"select"})," event or with the ",e.jsx(t.code,{children:"click"}),` event in the list item,
use the `,e.jsx(t.code,{children:"closeComboboxList"})," method:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`methods: {
  onSelect (i) {
    this.$refs.comboboxWithPopover.closeComboboxList();
  },
}
`})}),`
`,e.jsx(t.h3,{id:"with-header-and-footer",children:"With header and footer"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-recipe-combobox-with-popover
  list-aria-label="Example list items"
  @escape="onEscape"
  @highlight="onHighlight"
  @select="onSelect"
>
  <template #input="{ inputProps }">
    <dt-input v-bind="inputProps" />
  </template>
  <template #list="{ listProps }">
    <ul v-bind="listProps">
      <dt-list-item
        v-for="(item, i) in items"
        :key="item.id"
        navigation-type="arrow-keys"
        role="option"
        @click="onSelect(i)"
      >
        {{ item.name }}
      </dt-list-item>
    </ul>
  </template>
  <template #header>
    <span>Header content</span>
  </template>
  <template #footer>
     <span>Footer content</span>
  </template>
</dt-recipe-combobox-with-popover>
`})})]})}}export{K as default};
//# sourceMappingURL=combobox_with_popover-d7021b56.js.map