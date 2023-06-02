import{j as e}from"./jsx-dev-runtime-db49b4a3.js";import"./chunk-PCJTTTQV-c5dab3c8.js";import{M as u,S as m,C as s,a as t,b as o}from"./index-c1c88818.js";import{L as a,D as d,C as c}from"./list_item.stories-349b809c.js";import{u as r}from"./index-da9b24fb.js";import"./iframe-10e8e1f7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-96cfb4be.js";import"./vue.esm-eff6e72e.js";import"./list_item-43749e82.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-67a1afab.js";import"./icon_constants-ec6d826a.js";import"./keyboard_list_navigation-8c116ee6.js";import"./button-9102a84a.js";import"./link_constants-51338c78.js";function l(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",code:"code",pre:"pre"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(u,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"list-item",children:"List Item"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(n.p,{children:"A list item is an element that can be used to represent individual items in a list."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`A list item provides accessibility controls and common functionality. The component uses child
components that provide styling and slots for different types of list items. If you want to create
a custom list item you can pass a type "custom", which will let you define the structure of the content.`},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`The default list item has 5 slots that can be used for the most common use cases,
`,e.jsxDEV(n.strong,{children:"left"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),", ",e.jsxDEV(n.strong,{children:"right"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:11},this),", ",e.jsxDEV(n.strong,{children:"default"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:22},this),", ",e.jsxDEV(n.strong,{children:"subtitle"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:35},this)," and ",e.jsxDEV(n.strong,{children:"bottom"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:52},this)," slot. All of the slots are optional."]},void 0,!0,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"left"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:5},this),` slot can contain content, such as an avatar, that will be positioned to the left
of the main content.`]},void 0,!0,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"right"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:5},this)," slot works the same way, but its contents are placed to the right of the main slot."]},void 0,!0,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"default"},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:5},this)," slot contains the main content of the list item."]},void 0,!0,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"subtitle"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:5},this),` slot can be used to display content below the default slot. The slot has smaller
text size and lighter color than default slot.`]},void 0,!0,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"bottom"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:5},this)," slot can be used to display content below the subtitle slot."]},void 0,!0,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(t,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"custom-list-item",children:"Custom List Item"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["When ",e.jsxDEV(n.code,{children:"type"},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:6},this),` is set to "custom" the list item will not render any styles or slots. This type can be
used when the list item has to support content that does not work with the default structure.`]},void 0,!0,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(t,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:1},this),`
`,e.jsxDEV(o,{},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The list item should be provided an appropriate role as the prop ",e.jsxDEV(n.code,{children:"role"},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:66},this),` or the role defaults to "listitem"
when not provided.`]},void 0,!0,{fileName:"<source.js>",lineNumber:55,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["When ",e.jsxDEV(n.code,{children:"navigation-type"},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:6},this),` is set to "tab" the list item is set hover and focus styles and a tabindex so
that it can receive focus on tab navigation. This should be used for lists that contain mixed content, for example
a list in which some items are clickable/focusable and some are static.`]},void 0,!0,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["When ",e.jsxDEV(n.code,{children:"navigation-type"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:6},this),` is set to "arrow-keys" the items can be highlighted using keyboard
navigation. When the list item receives a highlight via keyboard navigation the ARIA attribute
`,e.jsxDEV(n.code,{children:"aria-selected"},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),' is set to "true".']},void 0,!0,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`import { DtListItem } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"base-style-1",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:74,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<ol>
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"custom-list-item-1",children:"Custom List Item"},void 0,!1,{fileName:"<source.js>",lineNumber:100,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-list-item type="custom">
  Custom List Item Content
</dt-list-item>
`},void 0,!1,{fileName:"<source.js>",lineNumber:102,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:102,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-keyboard-navigation",children:"With keyboard navigation"},void 0,!1,{fileName:"<source.js>",lineNumber:108,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Components that support list items like: Combobox, Dropdown already handle keyboard navigation so use this documentation
when implementing list item navigation in other components.`},void 0,!1,{fileName:"<source.js>",lineNumber:110,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["In order to use the ",e.jsxDEV(n.code,{children:"DtKeyboardListNavigationMixin"},void 0,!1,{fileName:"<source.js>",lineNumber:113,columnNumber:21},this),` mixin that provides the functionality to navigate the items
using keyboard, you should define a `,e.jsxDEV(n.code,{children:"ref"},void 0,!1,{fileName:"<source.js>",lineNumber:114,columnNumber:37},this)," to the list's wrapper:"]},void 0,!0,{fileName:"<source.js>",lineNumber:113,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<ol
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:116,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:116,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Also, define a method returning this list ref, so it can be passed to the the ",e.jsxDEV(n.code,{children:"keyboard list navigation"},void 0,!1,{fileName:"<source.js>",lineNumber:142,columnNumber:79},this),` mixin as it's
required.`]},void 0,!0,{fileName:"<source.js>",lineNumber:142,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`  mixins: [
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:145,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:145,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["That's all needed from the container component, the parameters used in the ",e.jsxDEV(n.code,{children:"KeyboardNavigation"},void 0,!1,{fileName:"<source.js>",lineNumber:161,columnNumber:76},this),` are described in
the mixin.`]},void 0,!0,{fileName:"<source.js>",lineNumber:161,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function K(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(l,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(i)}export{K as default};
//# sourceMappingURL=list_item-fc994c82.js.map
