import{j as e}from"./jsx-dev-runtime-186d2b52.js";import{M as r,S as u,C as s,a as t,b as m}from"./index-fa2dca47.js";import{D as d,a,V as c}from"./dropdown.stories-7191191a.js";import{u as o}from"./index-76d23e7e.js";import"./iframe-56f7c72f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-b160963d.js";import"./vue.esm-eff6e72e.js";import"./dropdown_separator-f673fc18.js";import"./keyboard_list_navigation-8c116ee6.js";import"./popover-ece9c333.js";import"./tippy_utils-e4c34e91.js";import"./lazy_show-0b3a0cf0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./index.esm-be2d025a.js";import"./modal-f96ddab9.js";import"./button-9102a84a.js";import"./link_constants-51338c78.js";import"./icon-779593c7.js";import"./icon_constants-f866c22d.js";import"./sr_only_close_button-e6688b8d.js";import"./list_item-53bd4052.js";import"./dropdown_constants-d0cadac9.js";import"./list_item_group-4d7b0a3a.js";function l(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",a:"a",h3:"h3",pre:"pre",h4:"h4"},o(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"dropdown",children:"Dropdown"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(n.p,{children:"A Dropdown presents a list of options or actions."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"The dropdown component provides accessibility controls when using with List item component."},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"The dropdown has 2 major pieces that are provided as required named slots: the anchor and the list."},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"anchor"},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:5},this)," slot contains the element that controls the dropdown's visibility."]},void 0,!0,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"list"},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:5},this)," slot contains a list of items to show as dropdown menu items."]},void 0,!0,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(t,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(t,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It is possible to include a screen reader visible only close button setting ",e.jsxDEV(n.code,{children:"visually-hidden-close"},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:77},this),`
and `,e.jsxDEV(n.code,{children:"visually-hidden-close-label"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:5},this)," props."]},void 0,!0,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`The dropdown menu has a role of "menu" and the list items have a role "menuitem".
See `,e.jsxDEV(n.a,{href:"https://www.w3.org/TR/wai-aria-practices/#menubutton",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C guidelines"},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:5},this)," for more information."]},void 0,!0,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"list",children:"List"},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The Dropdown is rendered with semantic ",e.jsxDEV(n.code,{children:"<ul>"},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:40},this)," and ",e.jsxDEV(n.code,{children:"<li>"},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:51},this),". The ",e.jsxDEV(n.code,{children:"list"},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:63},this)," slot is wrapped in ",e.jsxDEV(n.code,{children:"<ul>"},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:89},this),` element so make sure
the items are wrapped in `,e.jsxDEV(n.code,{children:"<li>"},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:26},this)," element and each item has the ",e.jsxDEV(n.code,{children:"menuitem"},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:63},this)," role. It is recommended to use the ",e.jsxDEV(n.a,{href:"?path=/story/components-list-item--default",children:`List Item
component`},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:109},this)," as it supports all the necessary accessibility props and interactions."]},void 0,!0,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"focus--keyboard",children:"Focus & Keyboard"},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`A dropdown menu has well defined standard
`,e.jsxDEV(n.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-links.html#kbd_label",target:"_blank",rel:"nofollow noopener noreferrer",children:"keyboard interactions"},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
that it should support.
The focus will be set to the the active item on keyboard navigation. `,e.jsxDEV(n.code,{children:"UP"},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:70},this)," and ",e.jsxDEV(n.code,{children:"DOWN"},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:79},this),` arrows move the highlighted
selection between the list items. `,e.jsxDEV(n.code,{children:"HOME"},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:35},this)," and ",e.jsxDEV(n.code,{children:"END"},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:46},this),` keys will jump straight to the first or the last item.
Once the beginning or the end of the list is reached the selection will move to the opposite end of the list by default.
If you want custom behavior you can pass `,e.jsxDEV(n.code,{children:"onBeginningOfList"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:42},this)," and ",e.jsxDEV(n.code,{children:"onEndOfList"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:66},this)," methods as props. ",e.jsxDEV(n.code,{children:"A-Z"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:98},this),` keys will cycle
through items that start with the corresponding letter.`]},void 0,!0,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Pressing ",e.jsxDEV(n.code,{children:"ESC"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:10},this)," key while the dropdown has focus will emit an ",e.jsxDEV(n.strong,{children:"escape"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:62},this),` event and will close the menu. When the highlight
selection changes, a `,e.jsxDEV(n.strong,{children:"highlight"},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:22},this),` event is emitted with the index of the currently highlighted item.
`,e.jsxDEV(n.code,{children:"SPACE"},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this)," key will open the dropdown if it's closed and select the item when it's pressed on a list item."]},void 0,!0,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Use the Dropdown component when you have a list of links or actions that can be performed. Use the
`,e.jsxDEV(n.a,{href:"?path=/story/components-select-menu--default",children:"Select Menu"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:1},this)," component to allow the users to choose one option from the list."]},void 0,!0,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtDropdown, DtButton } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-dropdown
  @highlight="onHighlight"
  @opened="onOpen"
>
  <template #anchor="{ attrs }">
    <dt-button
      v-bind="attrs"
    >
      Click to open
    </dt-button>
  </template>
  <template #list="{ close }">
    <dt-list-item
      v-for="(item, i) in items"
      :key="item.id"
      :navigation-type="navigationType"
      role="menuitem"
      @click="close(); handleItem(i);"
    >
      {{ item.name }}
    </dt-list-item>
  </template>
</dt-dropdown>
`},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["If you wish to override the default behavior of clicking on the anchor to open the dropdown, set the ",e.jsxDEV(n.code,{children:"open"},void 0,!1,{fileName:"<source.js>",lineNumber:103,columnNumber:102},this),` prop.
`,e.jsxDEV(n.code,{children:"close"},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this)," is the method event handler passed to the ",e.jsxDEV(n.code,{children:"list"},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:51},this)," slots that closes the dropdown when clicking on the item."]},void 0,!0,{fileName:"<source.js>",lineNumber:103,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It's possible to specify different event handlers per each list item in case you are not using ",e.jsxDEV(n.code,{children:"v-for"},void 0,!1,{fileName:"<source.js>",lineNumber:106,columnNumber:96},this),` for
rendering items:`]},void 0,!0,{fileName:"<source.js>",lineNumber:106,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-dropdown
  @highlight="onHighlight"
  @update:open="updateOpen"
>
  <template #anchor="{ attrs }">
    <dt-button
      v-bind="attrs"
    >
      Click to open
    </dt-button>
  </template>
  <template #list="{ close }">
    <dt-list-item
      role="menuitem"
      @click="onClick(); handleFirstItem();"
    >
      First item
    </dt-list-item>
    <dt-list-item
      role="menuitem"
      @click="close(); handleSecondItem();"
    >
      Second item
    </dt-list-item>
  </template>
</dt-dropdown>
`},void 0,!1,{fileName:"<source.js>",lineNumber:109,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:109,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"with-sections",children:"With sections"},void 0,!1,{fileName:"<source.js>",lineNumber:138,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Use the ",e.jsxDEV(n.code,{children:"dt-dropdown-separator"},void 0,!1,{fileName:"<source.js>",lineNumber:140,columnNumber:9},this)," component to visually separate items in the dropdown menu."]},void 0,!0,{fileName:"<source.js>",lineNumber:140,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtDropdown, DtButton, DtDropdownSeparator } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:142,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:142,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-dropdown
  @highlight="onHighlight"
  @update:open="updateOpen"
>
  <template #anchor="{ attrs }">
    <dt-button
      v-bind="attrs"
    >
      Click to open
    </dt-button>
  </template>
  <template #list="{ close }">
    <dt-list-item
      role="menuitem"
      @click="handleFirstItem();"
    >
      First item
    </dt-list-item>
    <dt-dropdown-separator />
    <dt-list-item
      role="menuitem"
      @click="handleSecondItem();"
    >
      Second item
    </dt-list-item>
  </template>
</dt-dropdown>
`},void 0,!1,{fileName:"<source.js>",lineNumber:146,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:146,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"with-sections-and-headings",children:"With sections and headings"},void 0,!1,{fileName:"<source.js>",lineNumber:176,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Use the ",e.jsxDEV(n.code,{children:"dt-dropdown-list"},void 0,!1,{fileName:"<source.js>",lineNumber:178,columnNumber:9},this)," component to group items and the ",e.jsxDEV(n.code,{children:"heading"},void 0,!1,{fileName:"<source.js>",lineNumber:178,columnNumber:61},this),` prop to add a heading
to this group list.`]},void 0,!0,{fileName:"<source.js>",lineNumber:178,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtDropdown, DtButton, DtDropdownSeparator, DtListItemGroup } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:181,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:181,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-dropdown
  @highlight="onHighlight"
  @update:open="updateOpen"
>
  <template #anchor="{ attrs }">
    <dt-button
      v-bind="attrs"
    >
      Click to open
    </dt-button>
  </template>
  <template #list="{ close }">
    <dt-list-item
      role="menuitem"
      :navigation-type="navigationType"
      @click="handleFirstItem();"
    >
      First item
    </dt-list-item>
    <dt-dropdown-separator />
    <dt-list-item-group
      :list-class="listClass"
      heading="Menu Heading"
    >
      <dt-list-item
        role="menuitem"
        :navigation-type="navigationType"
        @click="handleSecondItem();"
      >
        Second item
      </dt-list-item>
      <dt-list-item
        role="menuitem"
        :navigation-type="navigationType"
        @click="handleThirdItem();"
      >
       Third item
      </dt-list-item>
    </dt-list-item-group>
  </template>
</dt-dropdown>
`},void 0,!1,{fileName:"<source.js>",lineNumber:185,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:185,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"context-menu",children:"Context menu"},void 0,!1,{fileName:"<source.js>",lineNumber:229,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Set ",e.jsxDEV(n.code,{children:"openOnContext=true"},void 0,!1,{fileName:"<source.js>",lineNumber:231,columnNumber:5},this),` to open the menu on right-click (context menu) and disable the default trigger
behavior.`]},void 0,!0,{fileName:"<source.js>",lineNumber:231,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtDropdown, DtButton } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:234,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:234,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-dropdown
  @highlight="onHighlight"
  @update:open="updateOpen"
  :openOnContext="true"
>
  <template #anchor="{ attrs }">
    <dt-button
      v-bind="attrs"
    >
      Right Click to open
    </dt-button>
  </template>
  <template #list="{ close }">
    <dt-list-item
      role="menuitem"
      :navigation-type="navigationType"
      @click="handleFirstItem();"
    >
      First item
    </dt-list-item>
    <dt-list-item
      role="menuitem"
      :navigation-type="navigationType"
      @click="handleSecondItem();"
    >
      Second item
    </dt-list-item>
  </template>
</dt-dropdown>
`},void 0,!1,{fileName:"<source.js>",lineNumber:238,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:238,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function X(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(l,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(i)}export{X as default};
//# sourceMappingURL=dropdown-7ad075da.js.map
