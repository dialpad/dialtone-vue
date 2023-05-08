import{j as e}from"./jsx-runtime-dd43df41.js";import{M as r,S as p,C as l,a as c,b as a}from"./index-f710244c.js";import{C as d,D as m}from"./combobox_with_popover.stories-199b1dc5.js";import{u as s}from"./index-d425570a.js";import"./iframe-948208c6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-35e0d11d.js";import"./vue.esm-bundler-2e3b72e0.js";import"./utils-9325de8f.js";import"./combobox_with_popover-e77488f9.js";import"./combobox-53bab5df.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-100b8ad6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-0f76b30a.js";import"./icon_constants-80181dc9.js";import"./skeleton-6c0044ba.js";import"./popover-8c2cf3c2.js";import"./tippy_utils-0155706c.js";import"./tippy.esm-65135068.js";import"./lazy_show-25bbda9a.js";import"./modal-f96ddab9.js";import"./button-fa62dafe.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-abe15f28.js";import"./dropdown_constants-d0cadac9.js";import"./input-822c7e86.js";import"./validation_messages-df59aa55.js";import"./input-40f647b7.js";import"./checkbox-c84b92a0.js";function Q(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",h3:"h3",pre:"pre"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
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
`})})]})}}export{Q as default};
//# sourceMappingURL=combobox_with_popover-234c0dab.js.map
