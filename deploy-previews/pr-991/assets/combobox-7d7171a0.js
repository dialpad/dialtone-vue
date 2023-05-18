import{j as e}from"./jsx-dev-runtime-db3ad37f.js";import{M as l,S as o,C as r,a as u,b as m}from"./index-9b4253f0.js";import{C as a,D as d}from"./combobox.stories-7587b31f.js";import{u as t}from"./index-334cba35.js";import"./iframe-15597aca.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-65268b54.js";import"./vue.esm-eff6e72e.js";import"./combobox-3daca1d7.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-ce332119.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-744fe9a0.js";import"./icon_constants-ee01f1b8.js";import"./skeleton-28563e4f.js";import"./avatar-7ae7217a.js";import"./presence-8bac0262.js";import"./input-755725a6.js";import"./validation_messages-2f1bfcea.js";import"./input-4cf24bd3.js";function s(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",a:"a",h3:"h3",pre:"pre",h4:"h4"},t(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(l,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"combobox",children:"Combobox"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(n.p,{children:`A combobox is a semantic component that displays an input element combined with a listbox,
which enables the user to select items from the list.`},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`A combobox provides accessibility controls and common functionality. It does not render any
functioning UI on it's own, but it depends on the elements passed to it via slots.`},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["A combobox has 2 major pieces that are provided as required named slots: the ",e.jsxDEV(n.strong,{children:"input"},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:78},this)," and the ",e.jsxDEV(n.strong,{children:"list"},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:96},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"input"},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:5},this)," slot contains the input element that controls the items in the list. Almost always this will be a dt-input."]},void 0,!0,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"list"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:5},this)," contains a list of items to show in the context of the input's value. Almost always this will be a list of dt-list-item."]},void 0,!0,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(r,{children:e.jsxDEV(u,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`The combobox has a role of "combobox", the list has a role "listbox" and the list items have a role "option".
Depending on the use case, the user should be able to use `,e.jsxDEV(n.code,{children:"ESC"},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:59},this),` key to hide the list and/or empty the
input's value, but this is not determined by the combobox.`]},void 0,!0,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["When ",e.jsxDEV(n.code,{children:"loading"},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:6},this)," prop is set to ",e.jsxDEV(n.code,{children:"true"},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:31},this),", the list also has the aria-busy attribute set to ",e.jsxDEV(n.code,{children:"true"},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:88},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"See W3C guidelines"},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
for more information.`]},void 0,!0,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"input",children:"Input"},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`The input element should be fully accessible by keyboard. The easiest way to do this is by using an element like
a `,e.jsxDEV(n.code,{children:"DtInput"},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:3},this),` that is already accessible. There are some required ARIA attributes for the input element.
To make this as straightforward as possible, these ARIA attributes are passed with the correct values
as the `,e.jsxDEV(n.code,{children:"inputProps"},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:8},this)," slot-scope to the input slot."]},void 0,!0,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"list",children:"List"},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The list element mainly has to contain the correct ARIA attributes, which are passed as ",e.jsxDEV(n.code,{children:"listProps"},void 0,!1,{fileName:"<source.js>",lineNumber:53,columnNumber:89},this),`
slot-scope to the list slot. The combobox has a prop `,e.jsxDEV(n.code,{children:"listAriaLabel"},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:54},this),` that should be passed as it is
used to describe the contents of the list. The list itself can be a Dialtone component or a native
HTML element, such as `,e.jsxDEV(n.code,{children:"<ol></ol>"},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:23},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"list-item",children:"List Item"},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`The list item should be compatible with keyboard navigation. It is recommended
to use `,e.jsxDEV(n.code,{children:"DtListItem"},void 0,!1,{fileName:"<source.js>",lineNumber:61,columnNumber:8},this)," component as it supports all the necessary accessibility props and interactions."]},void 0,!0,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"focus--keyboard",children:"Focus & Keyboard"},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`A combobox has well defined standard keyboard interactions that it should support. Only the input
element should receive focus and the list items are not focusable. However, while the input has focus
`,e.jsxDEV(n.code,{children:"UP"},void 0,!1,{fileName:"<source.js>",lineNumber:67,columnNumber:1},this)," and ",e.jsxDEV(n.code,{children:"DOWN"},void 0,!1,{fileName:"<source.js>",lineNumber:67,columnNumber:10},this)," arrows move the highlighted selection between the list items. ",e.jsxDEV(n.code,{children:"HOME"},void 0,!1,{fileName:"<source.js>",lineNumber:67,columnNumber:79},this),` and
`,e.jsxDEV(n.code,{children:"END"},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),` keys will jump straight to the first or the last item. Once the beginning or the end of the
list is reached the selection will move to the opposite end of the list by default. If you want custom
behavior you can pass `,e.jsxDEV(n.code,{children:"onBeginningOfList"},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:23},this)," and ",e.jsxDEV(n.code,{children:"onEndOfList"},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:47},this)," methods as props."]},void 0,!0,{fileName:"<source.js>",lineNumber:65,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Pressing ",e.jsxDEV(n.code,{children:"ESC"},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:10},this)," key while the input has focus will emit an ",e.jsxDEV(n.strong,{children:"escape"},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:59},this),` event that has to be handled
based on the use case. Commonly the `,e.jsxDEV(n.code,{children:"ESC"},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:37},this)," key might hide the list or empty the input. ",e.jsxDEV(n.code,{children:"ENTER"},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:87},this),` key will
emit a `,e.jsxDEV(n.strong,{children:"select"},void 0,!1,{fileName:"<source.js>",lineNumber:74,columnNumber:8},this),` event with the index of the currently highlighted list item. When the highlight
selection changes, a `,e.jsxDEV(n.strong,{children:"highlight"},void 0,!1,{fileName:"<source.js>",lineNumber:75,columnNumber:22},this)," event is emitted with the index of the currently highlighted item."]},void 0,!0,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["When ",e.jsxDEV(n.code,{children:"loading"},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:6},this)," prop is set to ",e.jsxDEV(n.code,{children:"true"},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:31},this),", only ",e.jsxDEV(n.code,{children:"ESC"},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:44},this)," key will emit an ",e.jsxDEV(n.strong,{children:"escape"},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:67},this)," event."]},void 0,!0,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`import { DtCombobox, DtInput, DtListItem } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-combobox
  list-aria-label="Example list items"
  @escape="onEscape"
  @highlight="onHighlight"
  @select="onSelect"
>
  <template #input="{ inputProps }">
    <dt-input v-bind="inputProps" />
  </template>
  <template #list="{ listProps }">
    <ol v-bind="listProps">
      <dt-list-item
        v-for="(item, i) in items"
        :key="item.id"
        navigation-type="arrow-keys"
        role="option"
        @click="onSelect(i)"
      >
        {{ item.name }}
      </dt-list-item>
    </ol>
  </template>
</dt-combobox>
`},void 0,!1,{fileName:"<source.js>",lineNumber:85,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:85,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.code,{children:"onSelect"},void 0,!1,{fileName:"<source.js>",lineNumber:111,columnNumber:1},this)," is the method event handler that receives the index of each item."]},void 0,!0,{fileName:"<source.js>",lineNumber:111,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"with-empty-list-item",children:"With empty list item"},void 0,!1,{fileName:"<source.js>",lineNumber:113,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Combobox has a built-in empty list item you can use passing ",e.jsxDEV(n.code,{children:"emptyList=true"},void 0,!1,{fileName:"<source.js>",lineNumber:115,columnNumber:61},this),` and an message to show with
`,e.jsxDEV(n.code,{children:"emptyStateMessage"},void 0,!1,{fileName:"<source.js>",lineNumber:116,columnNumber:1},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:115,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-combobox
  ...
  :empty-list="isComboboxEmpty"
  :empty-state-message="$i18n('No matches found.')"
>
  <template #input="{ inputProps }">
    <dt-input v-bind="inputProps" />
  </template>
  <template #list="{ listProps }">
    <ol v-bind="listProps">
      <dt-list-item
        v-for="(item, i) in items"
        :key="item.id"
        navigation-type="arrow-keys"
        role="option"
        @click="onSelect(i)"
      >
        {{ item.name }}
      </dt-list-item>
    </ol>
  </template>
</dt-combobox>
<script>
export default {
  ...
  data () {
    return {
      items: [...],
    }
  }
  computed: {
    isComboboxEmpty () {
      return this.items.length > 0;
    }
  }
}
<\/script>
`},void 0,!1,{fileName:"<source.js>",lineNumber:118,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:118,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Also you can use a custom list item with the ",e.jsxDEV(n.code,{children:"emptyListItem"},void 0,!1,{fileName:"<source.js>",lineNumber:158,columnNumber:46},this)," slot."]},void 0,!0,{fileName:"<source.js>",lineNumber:158,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-combobox
  ...
  :empty-list="isComboboxEmpty"
>
  <template #input="{ inputProps }">
    <dt-input v-bind="inputProps" />
  </template>
  <template #list="{ listProps }">
    <ol v-bind="listProps">
      <dt-list-item
        v-for="(item, i) in items"
        :key="item.id"
        navigation-type="arrow-keys"
        role="option"
        @click="onSelect(i)"
      >
        {{ item.name }}
      </dt-list-item>
    </ol>
  </template>
  <template #emptyListItem>
    <li
      id="empty-list-item"
      tabindex="-1"
      role="option"
    >
      {{ $i18n('No matches found.') }}
    </li>
  </tempalte>
</dt-combobox>
`},void 0,!1,{fileName:"<source.js>",lineNumber:160,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:160,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function H(i={}){const{wrapper:n}=Object.assign({},t(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{H as default};
//# sourceMappingURL=combobox-7d7171a0.js.map
