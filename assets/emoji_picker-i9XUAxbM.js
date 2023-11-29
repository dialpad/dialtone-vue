import{j as e}from"./jsx-runtime-TS445EDF.js";import{M as i,b as r,C as l,d as c,e as h}from"./index-TvqPTTjW.js";import{E as a,D as d}from"./emoji_picker.stories-TUqMKCt0.js";import{u as o}from"./index-1w0FGI03.js";import"./iframe-SDD29zDs.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";import"./chunk-AY7I2SME-4UylTnhF.js";import"./storybook_utils-XrTpeJKJ.js";import"./tab_group-FMXVf3-t.js";import"./tab-vWIvPkTV.js";import"./button-5wqdSkdq.js";import"./link_constants-Igh3f6J8.js";import"./_plugin-vue2_normalizer-XBmYDgEh.js";import"./icon-GkF47-VR.js";import"./icon_constants-spQP7USY.js";import"./utils-E69eXbJV.js";import"./vue.esm-Wy6pS3yJ.js";import"./input-U2c6ZIK8.js";import"./validation_messages-14Yh7Pko.js";import"./input-aBRQ2PIU.js";import"./tooltip-TcrKDRoM.js";import"./tippy_utils-pFmU31nk.js";import"./lazy_show-qFWx7ZlG.js";import"./popover-Lqwx8ach.js";import"./index.esm-RUATGCt2.js";import"./modal-g8UESVSL.js";import"./sr_only_close_button-nb9fjC62.js";function s(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",ol:"ol",li:"li",h3:"h3"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(t.h1,{id:"emoji-picker",children:"Emoji Picker"}),`
`,e.jsx(r,{children:e.jsx(t.p,{children:"Allows you to view and select an emoji from a list."})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(l,{children:e.jsx(c,{of:d})}),`
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
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(h,{}),`
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
`})})]})}function Y(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{Y as default};
//# sourceMappingURL=emoji_picker-i9XUAxbM.js.map
