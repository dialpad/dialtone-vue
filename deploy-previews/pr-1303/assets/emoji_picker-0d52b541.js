import{j as e}from"./jsx-dev-runtime-e94ec84b.js";import{M as o,b as u,C as s,d as l,e as m}from"./index-e1a93643.js";import{E as c,D as a,W as d}from"./emoji_picker.stories-d777a6da.js";import{u as r}from"./index-447e0f1a.js";import"./iframe-724732da.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-182ea7b7.js";import"./DtEmojiPicker-63d4fdd2.js";import"./vue.esm-bundler-81c53cfe.js";import"./input-8a03bbdf.js";import"./utils-ddad74ee.js";import"./validation_messages-4375af3c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./input-6de5576f.js";import"./icon-8dfe7109.js";import"./icon_constants-e5cbd7a1.js";import"./tab_group-39f3c224.js";import"./tab-e042622f.js";import"./button-878f62d6.js";import"./link_constants-8ea95ec9.js";import"./index-40c4ee4c.js";import"./tooltip-9ec79026.js";import"./tippy_utils-89aa4eb5.js";import"./lazy_show-9ef36b08.js";import"./popover-1995cfc9.js";import"./modal-f96ddab9.js";import"./sr_only_close_button-c882245c.js";function t(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",ol:"ol",li:"li",h3:"h3"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"emoji-picker",children:"Emoji Picker"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(n.p,{children:"Allows you to view and select an emoji from a list."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<template>
  <dt-emoji-picker
    :skin-tone="Default"
    :skin-selector-button-tooltip-label="'Change default skin tone'"
    :tab-set-labels="tabSetLabels[]"
    :recently-used-emojis="recentlyUsedEmojis[]"
    :search-results-label="'Search results'"
    :search-no-results-label="'Search results'"
    :search-placeholder-label="'Search...'"
    @skin-tone="skinTone = $event"
    @selected-emoji="selectedEmoji"
  />
</template>
`},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"emoji-picker-with-popover",children:"Emoji Picker with Popover"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<template>
  <dt-popover
      :open="emojiPickerOpened"
      initial-focus-element="#searchInput"
      padding="none"
      @opened="(open) => { emojiPickerOpened = open }"
    >
      <template #anchor>
        <dt-button
          size="sm"
          circle
          importance="clear"
          @click="toggleEmojiPicker"
        >
          <template #icon>
            <dt-icon
              name="satisfied"
              size="300"
            />
          </template>
        </dt-button>
      </template>
      <template #content>
        <dt-emoji-picker
          :skin-tone="Default"
          :skin-selector-button-tooltip-label="'Change default skin tone'"
          :tab-set-labels="tabSetLabels[]"
          :recently-used-emojis="recentlyUsedEmojis[]"
          :search-results-label="'Search results'"
          :search-no-results-label="'Search results'"
          :search-placeholder-label="'Search...'"
          @skin-tone="skinTone = $event"
          @selected-emoji="selectedEmoji"
        />
      </template>
    </dt-popover>
</template>
`},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:83,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:85,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["We recommend to wrap the emoji-picker in a ",e.jsxDEV(n.code,{children:"dt-popover"},void 0,!1,{fileName:"<source.js>",lineNumber:87,columnNumber:44},this)," component."]},void 0,!0,{fileName:"<source.js>",lineNumber:87,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It is important to know the sequence of tab and emoji tabset will ",e.jsxDEV(n.strong,{children:"not change"},void 0,!1,{fileName:"<source.js>",lineNumber:89,columnNumber:67},this),`.
.
You should always provide a proper `,e.jsxDEV(n.code,{children:"tabSetLabels"},void 0,!1,{fileName:"<source.js>",lineNumber:91,columnNumber:36},this)," array to match the order of the emoji tabset."]},void 0,!0,{fileName:"<source.js>",lineNumber:89,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`The 'Most recently used' tab will always be the first tab in the tabSetLabels array.
It should be updated dynamically by the consumer by using the recentlyUsedEmojis prop.`},void 0,!1,{fileName:"<source.js>",lineNumber:93,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.code,{children:"skin-tone"},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:5},this),` prop provided to the component should listen to
the `,e.jsxDEV(n.code,{children:"skin-tone"},void 0,!1,{fileName:"<source.js>",lineNumber:97,columnNumber:5},this)," event emitted by the skin selector button to be updated instantly."]},void 0,!0,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["You must listen to the ",e.jsxDEV(n.code,{children:"close"},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:24},this)," event to close the emoji picker. This event is emitted by the keyboard navigation on ",e.jsxDEV(n.code,{children:"ESC"},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:117},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["For the ",e.jsxDEV(n.code,{children:"withPopover"},void 0,!1,{fileName:"<source.js>",lineNumber:101,columnNumber:9},this)," variant it is necessary to provide the ",e.jsxDEV(n.code,{children:'initial-focus-element="#searchInput"'},void 0,!1,{fileName:"<source.js>",lineNumber:101,columnNumber:62},this),` prop
to the `,e.jsxDEV(n.code,{children:"dt-popover"},void 0,!1,{fileName:"<source.js>",lineNumber:102,columnNumber:8},this),` component.
With this we accomplish the requirement to have the search input focused when the emoji picker is opened.`]},void 0,!0,{fileName:"<source.js>",lineNumber:101,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:105,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The emoji picker starts with a ",e.jsxDEV(n.code,{children:"focus"},void 0,!1,{fileName:"<source.js>",lineNumber:107,columnNumber:32},this)," on the input search to give the user a quick way to search for an emoji."]},void 0,!0,{fileName:"<source.js>",lineNumber:107,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`When the user search for an emoji, the first emoji in the list will be highlighted,
this allow the user to press `,e.jsxDEV(n.code,{children:"ENTER"},void 0,!1,{fileName:"<source.js>",lineNumber:110,columnNumber:30},this)," to select this emoji."]},void 0,!0,{fileName:"<source.js>",lineNumber:109,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["From the input search the user can navigate by pressing ",e.jsxDEV(n.code,{children:"UP"},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:57},this)," arrow to the tabset or ",e.jsxDEV(n.code,{children:"DOWN"},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:85},this)," arrow to the emoji list."]},void 0,!0,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["From the tabset it is possible to navigate through the tabs with ",e.jsxDEV(n.code,{children:"LEFT"},void 0,!1,{fileName:"<source.js>",lineNumber:114,columnNumber:66},this)," and ",e.jsxDEV(n.code,{children:"RIGHT"},void 0,!1,{fileName:"<source.js>",lineNumber:114,columnNumber:77},this),` arrows,
it will jump again to the input search with `,e.jsxDEV(n.code,{children:"DOWN"},void 0,!1,{fileName:"<source.js>",lineNumber:115,columnNumber:45},this)," arrow."]},void 0,!0,{fileName:"<source.js>",lineNumber:114,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["From the emoji list you can navigate through the first emoji of each emoji tabset with ",e.jsxDEV(n.code,{children:"TAB"},void 0,!1,{fileName:"<source.js>",lineNumber:117,columnNumber:88},this),`.
If you are on the last emoji tabset (flags), it will jump to the skin tone selector.
You can navigate through individual emojis and tabsets with the arrow keys.`]},void 0,!0,{fileName:"<source.js>",lineNumber:117,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["You can jump to the previous first emoji of the previous emoji tabset with ",e.jsxDEV(n.code,{children:"SHIFT + TAB"},void 0,!1,{fileName:"<source.js>",lineNumber:121,columnNumber:76},this),`.
If you are on the first emoji tabset, it will jump to the input search.`]},void 0,!0,{fileName:"<source.js>",lineNumber:121,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["In the skin tone selector the user can press ",e.jsxDEV(n.code,{children:"ENTER"},void 0,!1,{fileName:"<source.js>",lineNumber:124,columnNumber:46},this),` to open the skin tone selector and select the desired skin tone,
you can navigate through with `,e.jsxDEV(n.code,{children:"LEFT"},void 0,!1,{fileName:"<source.js>",lineNumber:125,columnNumber:31},this)," and ",e.jsxDEV(n.code,{children:"RIGHT"},void 0,!1,{fileName:"<source.js>",lineNumber:125,columnNumber:42},this)," arrows and select with ",e.jsxDEV(n.code,{children:"ENTER"},void 0,!1,{fileName:"<source.js>",lineNumber:125,columnNumber:73},this),`.
This selection will close the skin tone selector and emit the `,e.jsxDEV(n.code,{children:"skin-tone"},void 0,!1,{fileName:"<source.js>",lineNumber:126,columnNumber:63},this)," event with the selected skin tone."]},void 0,!0,{fileName:"<source.js>",lineNumber:124,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["From the skin tone selector the user can jump to the tabset selector with ",e.jsxDEV(n.code,{children:"TAB"},void 0,!1,{fileName:"<source.js>",lineNumber:128,columnNumber:75},this)," button."]},void 0,!0,{fileName:"<source.js>",lineNumber:128,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["This is the following sequence of the keyboard navigation with ",e.jsxDEV(n.code,{children:"TAB"},void 0,!1,{fileName:"<source.js>",lineNumber:130,columnNumber:64},this),":"]},void 0,!0,{fileName:"<source.js>",lineNumber:130,columnNumber:1},this),`
`,e.jsxDEV(n.ol,{children:[`
`,e.jsxDEV(n.li,{children:"Input search -> First emoji of the first emoji tabset"},void 0,!1,{fileName:"<source.js>",lineNumber:132,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"First emoji tabset -> Next first emoji of the next emoji tabset"},void 0,!1,{fileName:"<source.js>",lineNumber:133,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"First emoji of the last emoji tabset -> Skin tone selector"},void 0,!1,{fileName:"<source.js>",lineNumber:134,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Skin tone selector -> Tabset selector"},void 0,!1,{fileName:"<source.js>",lineNumber:135,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Tabset selector -> Input search"},void 0,!1,{fileName:"<source.js>",lineNumber:136,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:132,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["On ",e.jsxDEV(n.code,{children:"ESC"},void 0,!1,{fileName:"<source.js>",lineNumber:138,columnNumber:4},this)," the emoji picker will emit the ",e.jsxDEV(n.code,{children:"close"},void 0,!1,{fileName:"<source.js>",lineNumber:138,columnNumber:41},this)," event to close the emoji picker."]},void 0,!0,{fileName:"<source.js>",lineNumber:138,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:140,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtEmojiPicker } from '@dialpad/dialtone-vue/emoji';
`},void 0,!1,{fileName:"<source.js>",lineNumber:142,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:142,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"example-usage",children:"Example Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:146,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`const tabSetLabels = [
  'Most recently used',
  'Smileys and people',
  'Nature',
  'Food',
  'Activity',
  'Travel',
  'Objects',
  'Symbols',
  'Flags',
],

const recentlyUsedEmojis = [
  {
    name: 'thumbs up',
    category: 'people',
    shortname: ':thumbsup:',
    shortname_alternates: [':+1:', ':thumbup:'],
    keywords: ['+1', 'hand', 'thumb', 'up', 'uc6'],
    unicode_output: '1f44d',
    unicode_character: '1f44d',
  },
];

<dt-emoji-picker
  :tab-set-labels="tabSetLabels",
  skin-tone="Light",
  :recently-used-emojis="recentlyUsedEmojis"
  skin-selector-button-tooltip-label="Change default skin tone"
  search-no-results-label="No results"
  search-results-label="Search results"
  search-placeholder-label="Search..."
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:148,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:148,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function H(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(t,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):t(i)}export{H as default};
//# sourceMappingURL=emoji_picker-0d52b541.js.map
