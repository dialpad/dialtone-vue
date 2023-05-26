import{j as e}from"./jsx-dev-runtime-256c5f57.js";import{M as t,S as l,C as u,a as o,b as m}from"./index-f0440b7c.js";import{G as d,D as a}from"./grouped_chip.stories-dcf4b700.js";import{u as r}from"./index-f16ad7e0.js";import"./iframe-a6b03025.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-96cfb4be.js";import"./vue.esm-eff6e72e.js";import"./chip-9ac88192.js";import"./button-9102a84a.js";import"./link_constants-51338c78.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-67a1afab.js";import"./icon_constants-ec6d826a.js";function s(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"dtrecipegroupedchip",children:"DtRecipeGroupedChip"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(l,{children:e.jsxDEV(n.p,{children:"Grouped Chip is a format used to present related information such as callbar timers."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Grouped chip component has related info split in two combination chips. Common use cases represented
are split callbar timers showing call time and hold time on the left hand and right hand side respectively.`},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["This component has 4 slots: ",e.jsxDEV(n.strong,{children:"leftIcon"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:29},this),", ",e.jsxDEV(n.strong,{children:"leftContent"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:43},this),", ",e.jsxDEV(n.strong,{children:"rightIcon"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:60},this)," and ",e.jsxDEV(n.strong,{children:"rightContent"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:78},this)," slot."]},void 0,!0,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.strong,{children:"leftIcon"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this)," is used to display an icon that best represents the leftContent."]},void 0,!0,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.strong,{children:"leftContent"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this)," is used to display content and is placed on the left hand side."]},void 0,!0,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.strong,{children:"rightIcon"},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this)," is used to display an icon that best represents the rightContent."]},void 0,!0,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.strong,{children:"rightContent"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this)," is used to display content and is placed on the right hand side."]},void 0,!0,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(o,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRecipeGroupedChip } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"split-combination-chip-showing-both-left-and-right-hand-side-content",children:"Split Combination Chip showing both left and right hand side content."},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-grouped-chip>
  <template #leftIcon>
    <dt-icon name="clock" />
  </template>
  <template #leftContent>
    <div>
      0.15
    </div>
  </template>
  <template #rightIcon>
    <dt-icon name="pause" />
  </template>
  <template #rightContent>
    <div>
      0.15
    </div>
  </template>
</dt-recipe-grouped-chip>
`},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function O(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{O as default};
//# sourceMappingURL=grouped_chip-afd14c7e.js.map
