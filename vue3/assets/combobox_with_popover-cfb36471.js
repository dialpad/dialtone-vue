import{j as e}from"./jsx-runtime-66ce1ef1.js";import{M as s,b as r,C as p,d as l,e as c}from"./index-522ba449.js";import{C as a,D as d}from"./combobox_with_popover.stories-cfda5fbe.js";import{u as i}from"./index-87fa5ff3.js";import"./iframe-9639b9be.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-3d124f1b.js";import"./vue.esm-bundler-29004354.js";import"./utils-810cfe6f.js";import"./combobox_with_popover-7d9a2652.js";import"./combobox-0c29b21a.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-c9fc9067.js";import"./icon-bd97a3a1.js";import"./icon_constants-c8c2c53a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./item_layout-5775cee2.js";import"./skeleton-121fe313.js";import"./popover-df1a2ed1.js";import"./tippy_utils-352d0d4a.js";import"./lazy_show-01e22690.js";import"./modal-f96ddab9.js";import"./button-0ee7bf53.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-bac172b4.js";import"./dropdown_constants-d0cadac9.js";import"./input-9cfa0723.js";import"./validation_messages-44c39e35.js";import"./input-cd46f3c8.js";import"./checkbox-736ceb93.js";function n(o){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",h3:"h3",pre:"pre"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
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
`})})]})}function G(o={}){const{wrapper:t}=Object.assign({},i(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(n,o)})):n(o)}export{G as default};
//# sourceMappingURL=combobox_with_popover-cfb36471.js.map