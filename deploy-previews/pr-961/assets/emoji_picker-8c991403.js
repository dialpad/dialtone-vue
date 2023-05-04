import{j as e}from"./jsx-runtime-1d5ae406.js";import{M as i,S as a,C as m,a as l,b as p}from"./index-1ab65946.js";import{E as c,D as d}from"./emoji_picker.stories-68ab40b4.js";import{u as r}from"./index-6fbcb92f.js";import"./iframe-5445bbe2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-35e0d11d.js";import"./vue.esm-bundler-2e3b72e0.js";import"./utils-9325de8f.js";import"./input-822c7e86.js";import"./validation_messages-df59aa55.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./input-40f647b7.js";import"./icon-0f76b30a.js";import"./icon_constants-80181dc9.js";import"./tab_group-aeb4ee1d.js";import"./tab-ec3eafbe.js";import"./button-fa62dafe.js";import"./link_constants-51338c78.js";import"./index-40c4ee4c.js";import"./tooltip-e285f790.js";import"./tippy_utils-0155706c.js";import"./tippy.esm-65135068.js";import"./lazy_show-25bbda9a.js";function G(n={}){const{wrapper:o}=Object.assign({},r(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(t.h1,{id:"emoji-picker",children:"Emoji Picker"}),`
`,e.jsx(a,{children:e.jsx(t.p,{children:"Allows you to view and select an emoji from a list."})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(t.p,{children:"Some description of how to use the base component, potential gotchas and limitations."}),`
`,e.jsx(m,{children:e.jsx(l,{of:d})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
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
`})})]})}}export{G as default};
//# sourceMappingURL=emoji_picker-8c991403.js.map
