import{j as e}from"./jsx-dev-runtime-2965799d.js";import{M as t,b as l,C as r,d as m,e as u}from"./index-0603b956.js";import{C as c,D as a}from"./combobox_with_popover.stories-4d2647bc.js";import{u as o}from"./index-4fd0a1ad.js";import"./iframe-fdfebd39.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-182ea7b7.js";import"./combobox_with_popover-bebd6dee.js";import"./combobox-05339e55.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./utils-ddad74ee.js";import"./vue.esm-bundler-81c53cfe.js";import"./list_item-79d06b34.js";import"./icon-8dfe7109.js";import"./icon_constants-e5cbd7a1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./item_layout-99771b6d.js";import"./skeleton-aceadf86.js";import"./popover-1995cfc9.js";import"./tippy_utils-89aa4eb5.js";import"./lazy_show-9ef36b08.js";import"./modal-f96ddab9.js";import"./button-878f62d6.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-c882245c.js";import"./dropdown_constants-d0cadac9.js";import"./input-8a03bbdf.js";import"./validation_messages-4375af3c.js";import"./input-6de5576f.js";import"./checkbox-ac8f52ca.js";function s(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",h3:"h3",pre:"pre"},o(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"combobox-with-popover",children:"Combobox With Popover"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(l,{children:e.jsxDEV(n.p,{children:"A combobox that renders the listbox inside a popover therefore the listbox is rendered at the root of the document."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The combobox contains the ",e.jsxDEV(n.code,{children:"input"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:27},this)," and ",e.jsxDEV(n.code,{children:"list"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:39},this)," slots specified in the ",e.jsxDEV(n.a,{href:"?path=/docs/components-combobox--default",children:"combobox documentation"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:69},this),`.
Since it's using the popover content to render the list, it's also possible to add a header and footer to the popover
as it's specified in the `,e.jsxDEV(n.a,{href:"?path=/docs/components-popover--default",children:"popover documentation"},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:26},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(r,{children:e.jsxDEV(m,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(u,{},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It is possible to include a screen reader visible only close button setting ",e.jsxDEV(n.code,{children:"visually-hidden-close"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:77},this),`
and `,e.jsxDEV(n.code,{children:"visually-hidden-close-label"},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:5},this)," props."]},void 0,!0,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRecipeComboboxWithPopover } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"basic-usage",children:"Basic usage"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-combobox-with-popover
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["When not passing ",e.jsxDEV(n.code,{children:"showList"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:18},this),` and using the default combobox trigger on input focus,
to close the list with the `,e.jsxDEV(n.code,{children:"select"},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:28},this)," event or with the ",e.jsxDEV(n.code,{children:"click"},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:55},this),` event in the list item,
use the `,e.jsxDEV(n.code,{children:"closeComboboxList"},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:9},this)," method:"]},void 0,!0,{fileName:"<source.js>",lineNumber:69,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`methods: {
  onSelect (i) {
    this.$refs.comboboxWithPopover.closeComboboxList();
  },
}
`},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-header-and-footer",children:"With header and footer"},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-combobox-with-popover
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:83,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:83,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function z(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{z as default};
//# sourceMappingURL=combobox_with_popover-db33c3ab.js.map
