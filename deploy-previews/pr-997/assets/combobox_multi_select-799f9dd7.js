import{j as e}from"./jsx-dev-runtime-6d34d2e8.js";import{M as u,S as r,C as m,a as o,b as t}from"./index-a94ffbaf.js";import{C as c,D as d}from"./combobox_multi_select.stories-670af879.js";import{u as l}from"./index-7e7ca602.js";import"./iframe-a814685a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-96cfb4be.js";import"./vue.esm-eff6e72e.js";import"./combobox_with_popover-e7ae5fba.js";import"./combobox-9ef2e69e.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-43749e82.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-67a1afab.js";import"./icon_constants-ec6d826a.js";import"./skeleton-28563e4f.js";import"./popover-73272f26.js";import"./tippy_utils-e4c34e91.js";import"./lazy_show-0b3a0cf0.js";import"./index.esm-be2d025a.js";import"./modal-f96ddab9.js";import"./button-9102a84a.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-cabbb2f4.js";import"./dropdown_constants-d0cadac9.js";import"./input-388eb5f0.js";import"./validation_messages-a731d1f2.js";import"./input-bea2174c.js";import"./chip-9ac88192.js";function s(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",a:"a",pre:"pre"},l(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(u,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"combobox-multi-select",children:"Combobox Multi-Select"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(r,{children:e.jsxDEV(n.p,{children:"Select allows users to make a single selection or multiple selections from a list of options."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(o,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(t,{},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It is possible to include a screen reader visible only close button setting ",e.jsxDEV(n.code,{children:"visually-hidden-close"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:77},this),`
and `,e.jsxDEV(n.code,{children:"visually-hidden-close-label"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:5},this)," props."]},void 0,!0,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"keyboard-support",children:"Keyboard Support"},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:["User can navigate between chips pressing the ",e.jsxDEV(n.code,{children:"LEFT"},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:48},this)," and ",e.jsxDEV(n.code,{children:"RIGHT"},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:59},this)," key."]},void 0,!0,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:["Pressing ",e.jsxDEV(n.code,{children:"LEFT"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:12},this)," key when you have chips in the input and you are at the start of the text would select the last chip."]},void 0,!0,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:["Pressing ",e.jsxDEV(n.code,{children:"RIGHT"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:12},this)," key when you are at the last chip would focus on the start of the input."]},void 0,!0,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:["Pressing ",e.jsxDEV(n.code,{children:"BACKSPACE"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:12},this)," key would focus the chip."]},void 0,!0,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:["When a chip is focused, pressing ",e.jsxDEV(n.code,{children:"BACKSPACE"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:36},this)," or ",e.jsxDEV(n.code,{children:"DELETE"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:51},this)," key would remove the chip."]},void 0,!0,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:["User can navigate the popover list pressing ",e.jsxDEV(n.code,{children:"UP"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:47},this)," and ",e.jsxDEV(n.code,{children:"DOWN"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:56},this),` key.
See full `,e.jsxDEV(n.a,{href:"?path=/docs/components-popover--default#keyboard-support",children:"Keyboard Support"},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:10},this)," for popover list."]},void 0,!0,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRecipeComboboxMultiSelect } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"basic-usage",children:"Basic usage"},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-combobox-multi-select
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["When not passing ",e.jsxDEV(n.code,{children:"showList"},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:18},this)," and ",e.jsxDEV(n.code,{children:"hasSuggestionList"},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:33},this)," is ",e.jsxDEV(n.code,{children:"true"},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:56},this),`,
to close the list with the `,e.jsxDEV(n.code,{children:"select"},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:28},this),` event,
use the `,e.jsxDEV(n.code,{children:"closeComboboxList"},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:9},this)," method:"]},void 0,!0,{fileName:"<source.js>",lineNumber:80,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`methods: {
  onSelect (i) {
    this.$refs.comboboxMultiSelect.closeComboboxList();
  },
}
`},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-max-selected-validation",children:"With Max Selected Validation"},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Adds validation for max selection. Make sure to provide the following props:"},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.code,{children:"maxSelected"},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:3},this)," the maximum number of selections you can make. 0 is unlimited"]},void 0,!0,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.code,{children:"maxSelectedMessage"},void 0,!1,{fileName:"<source.js>",lineNumber:97,columnNumber:3},this)," should be the message that shown if max selection has been reached"]},void 0,!0,{fileName:"<source.js>",lineNumber:97,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-combobox-multi-select
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function q(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{q as default};
//# sourceMappingURL=combobox_multi_select-799f9dd7.js.map
