import{j as e}from"./jsx-runtime-e45c07ac.js";import{M as o,S as l,d as c,e as r,f as d}from"./index-e46c57c9.js";import{C as a,D as m}from"./combobox_multi_select.stories-c5ed17df.js";import{u as i}from"./index-2007a9af.js";import"./iframe-89d7247b.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-b0336152.js";import"./vue.esm-bundler-06a6c133.js";import"./utils-135fe08f.js";import"./combobox_with_popover-c7d20523.js";import"./combobox-aa87bd3d.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-0d494cf0.js";import"./icon-136e453c.js";import"./icon_constants-5440087a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./item_layout-923aabef.js";import"./skeleton-ec706d96.js";import"./popover-1140082f.js";import"./tippy_utils-dcd4636d.js";import"./lazy_show-1f3c68f1.js";import"./modal-f96ddab9.js";import"./button-f19eb3b6.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-df16b690.js";import"./dropdown_constants-d0cadac9.js";import"./input-4eac5efa.js";import"./validation_messages-34769f4d.js";import"./input-ca026295.js";import"./chip-00273ea4.js";function s(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",a:"a",pre:"pre"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(t.h1,{id:"combobox-multi-select",children:"Combobox Multi-Select"}),`
`,e.jsx(l,{children:e.jsx(t.p,{children:"Select allows users to make a single selection or multiple selections from a list of options."})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(c,{children:e.jsx(r,{of:m})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["It is possible to include a screen reader visible only close button setting ",e.jsx(t.code,{children:"visually-hidden-close"}),`
and `,e.jsx(t.code,{children:"visually-hidden-close-label"})," props."]}),`
`,e.jsx(t.h3,{id:"keyboard-support",children:"Keyboard Support"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["User can navigate between chips pressing the ",e.jsx(t.code,{children:"LEFT"})," and ",e.jsx(t.code,{children:"RIGHT"})," key."]}),`
`,e.jsxs(t.li,{children:["Pressing ",e.jsx(t.code,{children:"LEFT"})," key when you have chips in the input and you are at the start of the text would select the last chip."]}),`
`,e.jsxs(t.li,{children:["Pressing ",e.jsx(t.code,{children:"RIGHT"})," key when you are at the last chip would focus on the start of the input."]}),`
`,e.jsxs(t.li,{children:["Pressing ",e.jsx(t.code,{children:"BACKSPACE"})," key would focus the chip."]}),`
`,e.jsxs(t.li,{children:["When a chip is focused, pressing ",e.jsx(t.code,{children:"BACKSPACE"})," or ",e.jsx(t.code,{children:"DELETE"})," key would remove the chip."]}),`
`,e.jsxs(t.li,{children:["User can navigate the popover list pressing ",e.jsx(t.code,{children:"UP"})," and ",e.jsx(t.code,{children:"DOWN"}),` key.
See full `,e.jsx(t.a,{href:"?path=/docs/components-popover--default#keyboard-support",children:"Keyboard Support"})," for popover list."]}),`
`]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { DtRecipeComboboxMultiSelect } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.h3,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-recipe-combobox-multi-select
  ref="comboboxMultiSelect"
  :loading-message="loadingMessage"
  :selected-items="selectedItems"
  @input="onInput"
  @select="onSelect"
  @remove="onRemove"
  @max-selected="onMaxSelected"
>
  <template #list="{ listProps }">
    <ul
      v-bind="listProps"
      class="d-p0"
    >
      <dt-list-item
        v-for="(item, i) in items"
        :key="item.id"
        role="option"
        navigation-type="arrow-keys"
        @click="onSelect(i)"
      >
        {{ item.value }}
        <template #right>
          {{ item.type }}
        </template>
      </dt-list-item>
    </ul>
  </template>
</dt-recipe-combobox-multi-select>
`})}),`
`,e.jsxs(t.p,{children:["When not passing ",e.jsx(t.code,{children:"showList"})," and ",e.jsx(t.code,{children:"hasSuggestionList"})," is ",e.jsx(t.code,{children:"true"}),`,
to close the list with the `,e.jsx(t.code,{children:"select"}),` event,
use the `,e.jsx(t.code,{children:"closeComboboxList"})," method:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`methods: {
  onSelect (i) {
    this.$refs.comboboxMultiSelect.closeComboboxList();
  },
}
`})}),`
`,e.jsx(t.h3,{id:"with-max-selected-validation",children:"With Max Selected Validation"}),`
`,e.jsx(t.p,{children:"Adds validation for max selection. Make sure to provide the following props:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"maxSelected"})," the maximum number of selections you can make. 0 is unlimited"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"maxSelectedMessage"})," should be the message that shown if max selection has been reached"]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-recipe-combobox-multi-select
  ref="comboboxMultiSelect"
  :selected-items="selectedItems"
  :max-selected="maxSelected"
  :max-selected-message="maxSelectedMessage"
  @input="onInput"
  @select="onSelect"
  @remove="onRemove"
  @max-selected="onMaxSelected"
>
  <template #list="{ listProps }">
    <ul
      v-bind="listProps"
      class="d-p0"
    >
      <dt-list-item
        v-for="(item, i) in items"
        :key="item.id"
        role="option"
        navigation-type="arrow-keys"
        @click="onSelect(i)"
      >
        {{ item.value }}
        <template #right>
          {{ item.type }}
        </template>
      </dt-list-item>
    </ul>
  </template>
</dt-recipe-combobox-multi-select>
`})})]})}function q(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{q as default};
//# sourceMappingURL=combobox_multi_select-03f9a625.js.map
