import{j as e}from"./jsx-runtime-9f834b2c.js";import{M as l,S as r,C as a,a as h,b as c}from"./index-9d8bbb03.js";import{C as d,D as m}from"./combobox.stories-4985f0bc.js";import{u as o}from"./index-08ba305e.js";import"./iframe-c879d1e0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-0a6e313e.js";import"./vue.esm-bundler-a6507c57.js";import"./utils-40a24902.js";import"./combobox-28fb66c8.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-eb22f7d9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-986e0145.js";import"./icon_constants-f3ff1f59.js";import"./skeleton-4bff244f.js";import"./avatar-fc6b06db.js";import"./presence-6ddee5fd.js";import"./input-15dc898d.js";import"./validation_messages-d5e5e8e9.js";import"./input-cc07d758.js";function _(n={}){const{wrapper:i}=Object.assign({},o(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",a:"a",h3:"h3",pre:"pre",h4:"h4"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(t.h1,{id:"combobox",children:"Combobox"}),`
`,e.jsx(r,{children:e.jsx(t.p,{children:`A combobox is a semantic component that displays an input element combined with a listbox,
which enables the user to select items from the list.`})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(t.p,{children:`A combobox provides accessibility controls and common functionality. It does not render any
functioning UI on it's own, but it depends on the elements passed to it via slots.`}),`
`,e.jsxs(t.p,{children:["A combobox has 2 major pieces that are provided as required named slots: the ",e.jsx(t.strong,{children:"input"})," and the ",e.jsx(t.strong,{children:"list"}),"."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"input"})," slot contains the input element that controls the items in the list. Almost always this will be a dt-input."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"list"})," contains a list of items to show in the context of the input's value. Almost always this will be a list of dt-list-item."]}),`
`,e.jsx(a,{children:e.jsx(h,{of:m})}),`
`,e.jsx(t.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:[`The combobox has a role of "combobox", the list has a role "listbox" and the list items have a role "option".
Depending on the use case, the user should be able to use `,e.jsx(t.code,{children:"ESC"}),` key to hide the list and/or empty the
input's value, but this is not determined by the combobox.`]}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.code,{children:"loading"})," prop is set to ",e.jsx(t.code,{children:"true"}),", the list also has the aria-busy attribute set to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"See W3C guidelines"}),`
for more information.`]}),`
`,e.jsx(t.h3,{id:"input",children:"Input"}),`
`,e.jsxs(t.p,{children:[`The input element should be fully accessible by keyboard. The easiest way to do this is by using an element like
a `,e.jsx(t.code,{children:"DtInput"}),` that is already accessible. There are some required ARIA attributes for the input element.
To make this as straightforward as possible, these ARIA attributes are passed with the correct values
as the `,e.jsx(t.code,{children:"inputProps"})," slot-scope to the input slot."]}),`
`,e.jsx(t.h3,{id:"list",children:"List"}),`
`,e.jsxs(t.p,{children:["The list element mainly has to contain the correct ARIA attributes, which are passed as ",e.jsx(t.code,{children:"listProps"}),`
slot-scope to the list slot. The combobox has a prop `,e.jsx(t.code,{children:"listAriaLabel"}),` that should be passed as it is
used to describe the contents of the list. The list itself can be a Dialtone component or a native
HTML element, such as `,e.jsx(t.code,{children:"<ol></ol>"}),"."]}),`
`,e.jsx(t.h3,{id:"list-item",children:"List Item"}),`
`,e.jsxs(t.p,{children:[`The list item should be compatible with keyboard navigation. It is recommended
to use `,e.jsx(t.code,{children:"DtListItem"})," component as it supports all the necessary accessibility props and interactions."]}),`
`,e.jsx(t.h3,{id:"focus--keyboard",children:"Focus & Keyboard"}),`
`,e.jsxs(t.p,{children:[`A combobox has well defined standard keyboard interactions that it should support. Only the input
element should receive focus and the list items are not focusable. However, while the input has focus
`,e.jsx(t.code,{children:"UP"})," and ",e.jsx(t.code,{children:"DOWN"})," arrows move the highlighted selection between the list items. ",e.jsx(t.code,{children:"HOME"}),` and
`,e.jsx(t.code,{children:"END"}),` keys will jump straight to the first or the last item. Once the beginning or the end of the
list is reached the selection will move to the opposite end of the list by default. If you want custom
behavior you can pass `,e.jsx(t.code,{children:"onBeginningOfList"})," and ",e.jsx(t.code,{children:"onEndOfList"})," methods as props."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"ESC"})," key while the input has focus will emit an ",e.jsx(t.strong,{children:"escape"}),` event that has to be handled
based on the use case. Commonly the `,e.jsx(t.code,{children:"ESC"})," key might hide the list or empty the input. ",e.jsx(t.code,{children:"ENTER"}),` key will
emit a `,e.jsx(t.strong,{children:"select"}),` event with the index of the currently highlighted list item. When the highlight
selection changes, a `,e.jsx(t.strong,{children:"highlight"})," event is emitted with the index of the currently highlighted item."]}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.code,{children:"loading"})," prop is set to ",e.jsx(t.code,{children:"true"}),", only ",e.jsx(t.code,{children:"ESC"})," key will emit an ",e.jsx(t.strong,{children:"escape"})," event."]}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { DtCombobox, DtInput, DtListItem } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-combobox
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
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"onSelect"})," is the method event handler that receives the index of each item."]}),`
`,e.jsx(t.h4,{id:"with-empty-list-item",children:"With empty list item"}),`
`,e.jsxs(t.p,{children:["Combobox has a built-in empty list item you can use passing ",e.jsx(t.code,{children:"emptyList=true"}),` and an message to show with
`,e.jsx(t.code,{children:"emptyStateMessage"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-combobox
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
`})}),`
`,e.jsxs(t.p,{children:["Also you can use a custom list item with the ",e.jsx(t.code,{children:"emptyListItem"})," slot."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-combobox
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
`})})]})}}export{_ as default};
//# sourceMappingURL=combobox-ab111c53.js.map
