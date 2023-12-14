import{j as t}from"./jsx-runtime-TL-HwHBz.js";import"./chunk-HLWAVYOI-zysFXknn.js";import{M as l,b as r,C as i,d as s,e as d}from"./index-BCI1K1_r.js";import{L as h,D as c,C as m}from"./list_item.stories-592YLTEo.js";import{u as a}from"./index-K6ADX7S5.js";import"./iframe-zGMF6eYK.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-e6jHZmnO.js";import"./index-PPLHz8o0.js";import"./chunk-AY7I2SME-4UylTnhF.js";import"./storybook_utils-dy5aucTw.js";import"./list_item-epInwBgn.js";import"./utils-uw-tjP-u.js";import"./vue.esm-bundler-pfnFGw-8.js";import"./icon-z49A8j_D.js";import"./icon_constants-spQP7USY.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./item_layout-ZjX3qzlc.js";import"./keyboard_list_navigation--qikJDBT.js";import"./button-QSbPABQk.js";import"./link_constants-Igh3f6J8.js";function o(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",code:"code",pre:"pre"},a(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:h}),`
`,t.jsx(e.h1,{id:"list-item",children:"List Item"}),`
`,t.jsx(r,{children:t.jsx(e.p,{children:"A list item is an element that can be used to represent individual items in a list."})}),`
`,t.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,t.jsx(e.p,{children:`A list item provides accessibility controls and common functionality. The component uses child
components that provide styling and slots for different types of list items. If you want to create
a custom list item you can pass a type "custom", which will let you define the structure of the content.`}),`
`,t.jsxs(e.p,{children:[`The default list item has 5 slots that can be used for the most common use cases,
`,t.jsx(e.strong,{children:"left"}),", ",t.jsx(e.strong,{children:"right"}),", ",t.jsx(e.strong,{children:"default"}),", ",t.jsx(e.strong,{children:"subtitle"})," and ",t.jsx(e.strong,{children:"bottom"})," slot. All of the slots are optional."]}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.strong,{children:"left"}),` slot can contain content, such as an avatar, that will be positioned to the left
of the main content.`]}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.strong,{children:"right"})," slot works the same way, but its contents are placed to the right of the main slot."]}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.strong,{children:"default"})," slot contains the main content of the list item."]}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.strong,{children:"subtitle"}),` slot can be used to display content below the default slot. The slot has smaller
text size and lighter color than default slot.`]}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.strong,{children:"bottom"})," slot can be used to display content below the subtitle slot."]}),`
`,t.jsx(i,{children:t.jsx(s,{of:c})}),`
`,t.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(e.h3,{id:"custom-list-item",children:"Custom List Item"}),`
`,t.jsxs(e.p,{children:["When ",t.jsx(e.code,{children:"type"}),` is set to "custom" the list item will not render any styles or slots. This type can be
used when the list item has to support content that does not work with the default structure.`]}),`
`,t.jsx(i,{children:t.jsx(s,{of:m})}),`
`,t.jsx(e.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"}),`
`,t.jsx(d,{}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(e.p,{children:["The list item should be provided an appropriate role as the prop ",t.jsx(e.code,{children:"role"}),` or the role defaults to "listitem"
when not provided.`]}),`
`,t.jsxs(e.p,{children:["When ",t.jsx(e.code,{children:"navigation-type"}),` is set to "tab" the list item is set hover and focus styles and a tabindex so
that it can receive focus on tab navigation. This should be used for lists that contain mixed content, for example
a list in which some items are clickable/focusable and some are static.`]}),`
`,t.jsxs(e.p,{children:["When ",t.jsx(e.code,{children:"navigation-type"}),` is set to "arrow-keys" the items can be highlighted using keyboard
navigation. When the list item receives a highlight via keyboard navigation the ARIA attribute
`,t.jsx(e.code,{children:"aria-selected"}),' is set to "true".']}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.h3,{id:"import",children:"Import"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { DtListItem } from '@dialpad/dialtone-vue';
`})}),`
`,t.jsx(e.h3,{id:"base-style-1",children:"Base Style"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<ol>
  <dt-list-item
    v-for="(item, i) in items"
    navigation-type="arrow-keys"
    @click="onClick"
  >
    <template #left>
      <dt-icon name="contacts" />
    </template>
    Example List Item
    <template #subtitle>
      Example Description
    </template>
    <template #bottom>
      <dt-badge text="Label" />
    </template>
    <template #right>
      <dt-icon name="external-link" />
    </template>
  </dt-list-item>
</ol>
`})}),`
`,t.jsx(e.h3,{id:"custom-list-item-1",children:"Custom List Item"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<dt-list-item type="custom">
  Custom List Item Content
</dt-list-item>
`})}),`
`,t.jsx(e.h3,{id:"with-keyboard-navigation",children:"With keyboard navigation"}),`
`,t.jsx(e.p,{children:`Components that support list items like: Combobox, Dropdown already handle keyboard navigation so use this documentation
when implementing list item navigation in other components.`}),`
`,t.jsxs(e.p,{children:["In order to use the ",t.jsx(e.code,{children:"DtKeyboardListNavigationMixin"}),` mixin that provides the functionality to navigate the items
using keyboard, you should define a `,t.jsx(e.code,{children:"ref"})," to the list's wrapper:"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<ol
  ref="listWrapper"
>
  <dt-list-item
    v-for="(item, i) in items"
    navigation-type="arrow-keys"
    @click="onClick"
  >
    <template #left>
      <dt-icon name="contacts" />
    </template>
    Example List Item
    <template #subtitle>
      Example Description
    </template>
    <template #bottom>
      <dt-badge text="Label" />
    </template>
    <template #right>
      <dt-icon name="external-link" />
    </template>
  </dt-list-item>
</ol>
`})}),`
`,t.jsxs(e.p,{children:["Also, define a method returning this list ref, so it can be passed to the the ",t.jsx(e.code,{children:"keyboard list navigation"}),` mixin as it's
required.`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`  mixins: [
    KeyboardNavigation({
      indexKey: 'highlightIndex',
      idKey: 'highlightId',
      listElementKey: 'getListElement',
    }),
  ],

  methods: {
    getListElement () {
      return this.$refs.listWrapper;
    },
  }
`})}),`
`,t.jsxs(e.p,{children:["That's all needed from the container component, the parameters used in the ",t.jsx(e.code,{children:"KeyboardNavigation"}),` are described in
the mixin.`]})]})}function O(n={}){const{wrapper:e}=Object.assign({},a(),n.components);return e?t.jsx(e,Object.assign({},n,{children:t.jsx(o,n)})):o(n)}export{O as default};
//# sourceMappingURL=list_item-SOkMKU9P.js.map