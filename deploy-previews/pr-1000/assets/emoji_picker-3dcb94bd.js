import{j as e}from"./jsx-runtime-982f15c2.js";import{M as r,S as l,C as a,a as c,b as h}from"./index-120a744e.js";import{E as d,D as m}from"./emoji_picker.stories-ff3167fe.js";import{u as i}from"./index-2e536d82.js";import"./iframe-8935d73b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-d77bbd23.js";import"./vue.esm-bundler-e62bdd6b.js";import"./utils-cafa7a3e.js";import"./input-fec69eb3.js";import"./validation_messages-d11443f7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./input-1e6076b8.js";import"./icon-607d64de.js";import"./icon_constants-4010861d.js";import"./tab_group-ec226dc8.js";import"./tab-cf98bb70.js";import"./button-63a1067b.js";import"./link_constants-51338c78.js";import"./index-40c4ee4c.js";import"./tooltip-cf52355a.js";import"./tippy_utils-0155706c.js";import"./tippy.esm-65135068.js";import"./lazy_show-aad08efa.js";function W(s={}){const{wrapper:o}=Object.assign({},i(),s.components);return o?e.jsx(o,Object.assign({},s,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",strong:"strong",ol:"ol",li:"li",h3:"h3",pre:"pre"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(t.h1,{id:"emoji-picker",children:"Emoji Picker"}),`
`,e.jsx(l,{children:e.jsx(t.p,{children:"Allows you to view and select an emoji from a list."})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(t.p,{children:"Some description of how to use the base component, potential gotchas and limitations."}),`
`,e.jsx(a,{children:e.jsx(c,{of:m})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(h,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["It is important to know that the emoji picker is not a modal. It is a popover, you must wrapped it in a ",e.jsx(t.code,{children:"dt-popover"})," component."]}),`
`,e.jsxs(t.p,{children:["It is important to know the sequence of tab and emoji tabset will ",e.jsx(t.strong,{children:"not change"}),`.
.
You should always provide a proper `,e.jsx(t.code,{children:"tabSetLabels"})," array to match the order of the emoji tabset."]}),`
`,e.jsxs(t.p,{children:[`The 'Most recently used' tab will always be the first tab in the tabSetLabels array.
It will be updated dynamically to be shown if there are or not recently used emojis (`,e.jsx(t.code,{children:"recentlyUsedEmojis"})," prop)."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"skin-tone"}),` prop provided to the component should listen to
the `,e.jsx(t.code,{children:"skin-tone"})," event emitted by the skin selector button to be updated instantly."]}),`
`,e.jsxs(t.p,{children:["You must be listen the ",e.jsx(t.code,{children:"close"})," event to close the emoji picker. This event is emitted by the keyboard navigation on ",e.jsx(t.code,{children:"ESC"}),"."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The emoji picker starts with a ",e.jsx(t.code,{children:"focus"})," on the input search to give the user a quick way to search for an emoji."]}),`
`,e.jsxs(t.p,{children:[`When the user search for an emoji, the first emoji in the list will be with hovered style,
this allow the user to press `,e.jsx(t.code,{children:"ENTER"})," to select this emoji."]}),`
`,e.jsxs(t.p,{children:["From the input search the user can navigate to ",e.jsx(t.code,{children:"TOP"})," arrow to the tabset or ",e.jsx(t.code,{children:"DOWN"})," arrow to the emoji list."]}),`
`,e.jsxs(t.p,{children:["From the tabset it is possible to navigate through the tabs with ",e.jsx(t.code,{children:"LEFT"})," and ",e.jsx(t.code,{children:"RIGHT"}),` arrows,
it will jump again to the input search with `,e.jsx(t.code,{children:"DOWN"})," arrow."]}),`
`,e.jsxs(t.p,{children:["From the emoji list you can navigate through the first emoji of each emoji tabset with ",e.jsx(t.code,{children:"TAB"}),`.
If you are on the last emoji tabset (flags), it will jump to the skin tone selector.
You can also navigate through all the emojis with arrow keys.
It will detect automatically if there are emojis on the subsequent emoji tabset and it will jump to the desire location.`]}),`
`,e.jsxs(t.p,{children:["You can jump to the previous first emoji of the previous emoji tabset with ",e.jsx(t.code,{children:"SHIFT + TAB"}),`.
If you are on the first emoji tabset, it will jump to the input search.`]}),`
`,e.jsxs(t.p,{children:["In the skin tone selector the user can press ",e.jsx(t.code,{children:"ENTER"}),` to open the skin tone selector and select the desire skin tone,
it can navigate through with `,e.jsx(t.code,{children:"LEFT"})," and ",e.jsx(t.code,{children:"RIGHT"})," arrows and select with ",e.jsx(t.code,{children:"ENTER"}),`.
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
`})})]})}}export{W as default};
//# sourceMappingURL=emoji_picker-3dcb94bd.js.map
