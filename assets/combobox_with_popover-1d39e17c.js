import{j as e}from"./jsx-runtime-d24cba40.js";import{M as s,S as r,d as p,e as l,f as c}from"./index-06f3e4ec.js";import{C as a,D as d}from"./combobox_with_popover.stories-85567a86.js";import{u as i}from"./index-6f6124c9.js";import"./iframe-2e437a6c.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-e1aad9b5.js";import"./vue.esm-ba2ca387.js";import"./combobox_with_popover-7f64bddc.js";import"./combobox-4ea86de7.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-5ec04318.js";import"./icon-23d7fa2f.js";import"./icon_constants-6cc92332.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./item_layout-173b62c3.js";import"./skeleton-8a392920.js";import"./popover-9d3abfa0.js";import"./tippy_utils-dcd4636d.js";import"./lazy_show-ac5fd1cd.js";import"./index.esm-8e1c03ab.js";import"./modal-600bd46a.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-b0699eef.js";import"./dropdown_constants-d0cadac9.js";import"./input-6b1ba9f4.js";import"./validation_messages-7a625c98.js";import"./input-4a643152.js";import"./checkbox-331de3a3.js";function n(o){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",h3:"h3",pre:"pre"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(t.h1,{id:"combobox-with-popover",children:"Combobox With Popover"}),`
`,e.jsx(r,{children:e.jsx(t.p,{children:"A combobox that renders the listbox inside a popover therefore the listbox is rendered at the root of the document."})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(t.p,{children:["The combobox contains the ",e.jsx(t.code,{children:"input"})," and ",e.jsx(t.code,{children:"list"})," slots specified in the ",e.jsx(t.a,{href:"?path=/docs/components-combobox--default",children:"combobox documentation"}),`.
Since it's using the popover content to render the list, it's also possible to add a header and footer to the popover
as it's specified in the `,e.jsx(t.a,{href:"?path=/docs/components-popover--default",children:"popover documentation"}),"."]}),`
`,e.jsx(p,{children:e.jsx(l,{of:d})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
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
`})})]})}function J(o={}){const{wrapper:t}=Object.assign({},i(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(n,o)})):n(o)}export{J as default};
//# sourceMappingURL=combobox_with_popover-1d39e17c.js.map