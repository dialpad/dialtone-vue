import{j as e}from"./jsx-runtime-QReR3DfS.js";import{M as r,b as l,C as i,d as o,e as a}from"./index-DUL9Ioec.js";import{D as h,a as c,V as p}from"./dropdown.stories-pyAYWrR8.js";import{u as d}from"./index-gBHRzTTU.js";import"./iframe-B2TQZaYX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";import"./chunk-AY7I2SME-4UylTnhF.js";import"./storybook_utils-XrTpeJKJ.js";import"./dropdown_separator-q0sBqubA.js";import"./keyboard_list_navigation-p6hxkA2M.js";import"./popover-4J0xBOFT.js";import"./tippy_utils-pFmU31nk.js";import"./utils-E69eXbJV.js";import"./vue.esm-Wy6pS3yJ.js";import"./lazy_show-qFWx7ZlG.js";import"./_plugin-vue2_normalizer-XBmYDgEh.js";import"./index.esm-RUATGCt2.js";import"./modal-g8UESVSL.js";import"./button-5wqdSkdq.js";import"./link_constants-Igh3f6J8.js";import"./icon-GkF47-VR.js";import"./icon_constants-spQP7USY.js";import"./sr_only_close_button-nb9fjC62.js";import"./list_item-ypqepJhC.js";import"./item_layout-9CsPj6HM.js";import"./dropdown_constants-IBYyKPOQ.js";import"./list_item_group-_p55H0Yb.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",a:"a",h3:"h3",pre:"pre",h4:"h4"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:h}),`
`,e.jsx(n.h1,{id:"dropdown",children:"Dropdown"}),`
`,e.jsx(l,{children:e.jsx(n.p,{children:"A Dropdown presents a list of options or actions."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:"The dropdown component provides accessibility controls when using with List item component."}),`
`,e.jsx(n.p,{children:"The dropdown has 2 major pieces that are provided as required named slots: the anchor and the list."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"anchor"})," slot contains the element that controls the dropdown's visibility."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"list"})," slot contains a list of items to show as dropdown menu items."]}),`
`,e.jsx(i,{children:e.jsx(o,{of:c})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{children:e.jsx(o,{of:p})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["It is possible to include a screen reader visible only close button setting ",e.jsx(n.code,{children:"visually-hidden-close"}),`
and `,e.jsx(n.code,{children:"visually-hidden-close-label"})," props."]}),`
`,e.jsxs(n.p,{children:[`The dropdown menu has a role of "menu" and the list items have a role "menuitem".
See `,e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-practices/#menubutton",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C guidelines"})," for more information."]}),`
`,e.jsx(n.h3,{id:"list",children:"List"}),`
`,e.jsxs(n.p,{children:["The Dropdown is rendered with semantic ",e.jsx(n.code,{children:"<ul>"})," and ",e.jsx(n.code,{children:"<li>"}),". The ",e.jsx(n.code,{children:"list"})," slot is wrapped in ",e.jsx(n.code,{children:"<ul>"}),` element so make sure
the items are wrapped in `,e.jsx(n.code,{children:"<li>"})," element and each item has the ",e.jsx(n.code,{children:"menuitem"})," role. It is recommended to use the ",e.jsx(n.a,{href:"?path=/story/components-list-item--default",children:`List Item
component`})," as it supports all the necessary accessibility props and interactions."]}),`
`,e.jsx(n.h3,{id:"focus--keyboard",children:"Focus & Keyboard"}),`
`,e.jsxs(n.p,{children:[`A dropdown menu has well defined standard
`,e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-links.html#kbd_label",target:"_blank",rel:"nofollow noopener noreferrer",children:"keyboard interactions"}),`
that it should support.
The focus will be set to the the active item on keyboard navigation. `,e.jsx(n.code,{children:"UP"})," and ",e.jsx(n.code,{children:"DOWN"}),` arrows move the highlighted
selection between the list items. `,e.jsx(n.code,{children:"HOME"})," and ",e.jsx(n.code,{children:"END"}),` keys will jump straight to the first or the last item.
Once the beginning or the end of the list is reached the selection will move to the opposite end of the list by default.
If you want custom behavior you can pass `,e.jsx(n.code,{children:"onBeginningOfList"})," and ",e.jsx(n.code,{children:"onEndOfList"})," methods as props. ",e.jsx(n.code,{children:"A-Z"}),` keys will cycle
through items that start with the corresponding letter.`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"ESC"})," key while the dropdown has focus will emit an ",e.jsx(n.strong,{children:"escape"}),` event and will close the menu. When the highlight
selection changes, a `,e.jsx(n.strong,{children:"highlight"}),` event is emitted with the index of the currently highlighted item.
`,e.jsx(n.code,{children:"SPACE"})," key will open the dropdown if it's closed and select the item when it's pressed on a list item."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[`Use the Dropdown component when you have a list of links or actions that can be performed. Use the
`,e.jsx(n.a,{href:"?path=/story/components-select-menu--default",children:"Select Menu"})," component to allow the users to choose one option from the list."]}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtDropdown, DtButton } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-dropdown
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
`})}),`
`,e.jsxs(n.p,{children:["If you wish to override the default behavior of clicking on the anchor to open the dropdown, set the ",e.jsx(n.code,{children:"open"}),` prop.
`,e.jsx(n.code,{children:"close"})," is the method event handler passed to the ",e.jsx(n.code,{children:"list"})," slots that closes the dropdown when clicking on the item."]}),`
`,e.jsxs(n.p,{children:["It's possible to specify different event handlers per each list item in case you are not using ",e.jsx(n.code,{children:"v-for"}),` for
rendering items:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-dropdown
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
`})}),`
`,e.jsx(n.h4,{id:"with-sections",children:"With sections"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"dt-dropdown-separator"})," component to visually separate items in the dropdown menu."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtDropdown, DtButton, DtDropdownSeparator } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-dropdown
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
`})}),`
`,e.jsx(n.h4,{id:"with-sections-and-headings",children:"With sections and headings"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"dt-dropdown-list"})," component to group items and the ",e.jsx(n.code,{children:"heading"}),` prop to add a heading
to this group list.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtDropdown, DtButton, DtDropdownSeparator, DtListItemGroup } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-dropdown
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
`})}),`
`,e.jsx(n.h4,{id:"context-menu",children:"Context menu"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"openOnContext=true"}),` to open the menu on right-click (context menu) and disable the default trigger
behavior.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtDropdown, DtButton } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-dropdown
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
`})})]})}function X(t={}){const{wrapper:n}=Object.assign({},d(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{X as default};
//# sourceMappingURL=dropdown-fGcQDTPO.js.map