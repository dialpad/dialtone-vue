import{j as e}from"./jsx-runtime-979ec952.js";import{M as l,S as c,C as r,a as d,b as a}from"./index-59b80a08.js";import{C as m,D as p}from"./combobox_multi_select.stories-ea900e72.js";import{u as o}from"./index-f7e87931.js";import"./iframe-8f56e00c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-a2047fb2.js";import"./vue.esm-bundler-3bf5edd9.js";import"./utils-b704f328.js";import"./combobox_with_popover-98d255d2.js";import"./combobox-d48f3118.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-3f766c8b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-28829c6f.js";import"./icon_constants-8c90fe6d.js";import"./skeleton-38922610.js";import"./popover-3ee4e4c3.js";import"./tippy_utils-0155706c.js";import"./tippy.esm-65135068.js";import"./lazy_show-30f95b43.js";import"./modal-f96ddab9.js";import"./button-59f99281.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-ad6999cc.js";import"./dropdown_constants-d0cadac9.js";import"./input-b75357f1.js";import"./validation_messages-661a7f8a.js";import"./input-cbc6cbe9.js";import"./chip-773b7014.js";function J(n={}){const{wrapper:s}=Object.assign({},o(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",a:"a",pre:"pre"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:m}),`
`,e.jsx(t.h1,{id:"combobox-multi-select",children:"Combobox Multi-Select"}),`
`,e.jsx(c,{children:e.jsx(t.p,{children:"Select allows users to make a single selection or multiple selections from a list of options."})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(r,{children:e.jsx(d,{of:p})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(a,{}),`
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
`})})]})}}export{J as default};
//# sourceMappingURL=combobox_multi_select-cb8d6481.js.map
