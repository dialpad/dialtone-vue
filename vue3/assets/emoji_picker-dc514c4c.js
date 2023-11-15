import{j as e}from"./jsx-runtime-58662196.js";import{M as l,b as c,C as s,d as o,e as a}from"./index-16583901.js";import{E as h,D as d,W as p}from"./emoji_picker.stories-349d063e.js";import{u as r}from"./index-e7913bfb.js";import"./iframe-cd33a050.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-182ea7b7.js";import"./DtEmojiPicker-e76a258b.js";import"./vue.esm-bundler-2fc8d911.js";import"./input-51336c9c.js";import"./utils-b9178890.js";import"./validation_messages-e43e2576.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./input-f3da5138.js";import"./icon-19ead0e1.js";import"./icon_constants-e5cbd7a1.js";import"./tab_group-c12945b1.js";import"./tab-3d467e31.js";import"./button-54a66549.js";import"./link_constants-8ea95ec9.js";import"./index-40c4ee4c.js";import"./tooltip-e850e7f1.js";import"./tippy_utils-352d0d4a.js";import"./lazy_show-ebabbde0.js";import"./popover-b06d308e.js";import"./modal-f96ddab9.js";import"./sr_only_close_button-693af418.js";function i(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",ol:"ol",li:"li",h3:"h3"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(t.h1,{id:"emoji-picker",children:"Emoji Picker"}),`
`,e.jsx(c,{children:e.jsx(t.p,{children:"Allows you to view and select an emoji from a list."})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(s,{children:e.jsx(o,{of:d})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<template>
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
`})}),`
`,e.jsx(t.h1,{id:"emoji-picker-with-popover",children:"Emoji Picker with Popover"}),`
`,e.jsx(s,{children:e.jsx(o,{of:p})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<template>
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
`})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["We recommend to wrap the emoji-picker in a ",e.jsx(t.code,{children:"dt-popover"})," component."]}),`
`,e.jsxs(t.p,{children:["It is important to know the sequence of tab and emoji tabset will ",e.jsx(t.strong,{children:"not change"}),`.
.
You should always provide a proper `,e.jsx(t.code,{children:"tabSetLabels"})," array to match the order of the emoji tabset."]}),`
`,e.jsx(t.p,{children:`The 'Most recently used' tab will always be the first tab in the tabSetLabels array.
It should be updated dynamically by the consumer by using the recentlyUsedEmojis prop.`}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"skin-tone"}),` prop provided to the component should listen to
the `,e.jsx(t.code,{children:"skin-tone"})," event emitted by the skin selector button to be updated instantly."]}),`
`,e.jsxs(t.p,{children:["You must listen to the ",e.jsx(t.code,{children:"close"})," event to close the emoji picker. This event is emitted by the keyboard navigation on ",e.jsx(t.code,{children:"ESC"}),"."]}),`
`,e.jsxs(t.p,{children:["For the ",e.jsx(t.code,{children:"withPopover"})," variant it is necessary to provide the ",e.jsx(t.code,{children:'initial-focus-element="#searchInput"'}),` prop
to the `,e.jsx(t.code,{children:"dt-popover"}),` component.
With this we accomplish the requirement to have the search input focused when the emoji picker is opened.`]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The emoji picker starts with a ",e.jsx(t.code,{children:"focus"})," on the input search to give the user a quick way to search for an emoji."]}),`
`,e.jsxs(t.p,{children:[`When the user search for an emoji, the first emoji in the list will be highlighted,
this allow the user to press `,e.jsx(t.code,{children:"ENTER"})," to select this emoji."]}),`
`,e.jsxs(t.p,{children:["From the input search the user can navigate by pressing ",e.jsx(t.code,{children:"UP"})," arrow to the tabset or ",e.jsx(t.code,{children:"DOWN"})," arrow to the emoji list."]}),`
`,e.jsxs(t.p,{children:["From the tabset it is possible to navigate through the tabs with ",e.jsx(t.code,{children:"LEFT"})," and ",e.jsx(t.code,{children:"RIGHT"}),` arrows,
it will jump again to the input search with `,e.jsx(t.code,{children:"DOWN"})," arrow."]}),`
`,e.jsxs(t.p,{children:["From the emoji list you can navigate through the first emoji of each emoji tabset with ",e.jsx(t.code,{children:"TAB"}),`.
If you are on the last emoji tabset (flags), it will jump to the skin tone selector.
You can navigate through individual emojis and tabsets with the arrow keys.`]}),`
`,e.jsxs(t.p,{children:["You can jump to the previous first emoji of the previous emoji tabset with ",e.jsx(t.code,{children:"SHIFT + TAB"}),`.
If you are on the first emoji tabset, it will jump to the input search.`]}),`
`,e.jsxs(t.p,{children:["In the skin tone selector the user can press ",e.jsx(t.code,{children:"ENTER"}),` to open the skin tone selector and select the desired skin tone,
you can navigate through with `,e.jsx(t.code,{children:"LEFT"})," and ",e.jsx(t.code,{children:"RIGHT"})," arrows and select with ",e.jsx(t.code,{children:"ENTER"}),`.
This selection will close the skin tone selector and emit the `,e.jsx(t.code,{children:"skin-tone"})," event with the selected skin tone."]}),`
`,e.jsxs(t.p,{children:["From the skin tone selector the user can jump to the tabset selector with ",e.jsx(t.code,{children:"TAB"})," button."]}),`
`,e.jsxs(t.p,{children:["This is the following sequence of the keyboard navigation with ",e.jsx(t.code,{children:"TAB"}),":"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Input search -> First emoji of the first emoji tabset"}),`
`,e.jsx(t.li,{children:"First emoji tabset -> Next first emoji of the next emoji tabset"}),`
`,e.jsx(t.li,{children:"First emoji of the last emoji tabset -> Skin tone selector"}),`
`,e.jsx(t.li,{children:"Skin tone selector -> Tabset selector"}),`
`,e.jsx(t.li,{children:"Tabset selector -> Input search"}),`
`]}),`
`,e.jsxs(t.p,{children:["On ",e.jsx(t.code,{children:"ESC"})," the emoji picker will emit the ",e.jsx(t.code,{children:"close"})," event to close the emoji picker."]}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { DtEmojiPicker } from '@dialpad/dialtone-vue/emoji';
`})}),`
`,e.jsx(t.h3,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const tabSetLabels = [
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
`})})]})}function X(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{X as default};
//# sourceMappingURL=emoji_picker-dc514c4c.js.map