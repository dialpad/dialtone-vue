import{j as e}from"./jsx-dev-runtime-6180be06.js";import{M as t,b as l,C as u,d as o,e as m}from"./index-6111ad18.js";import{G as d,D as a}from"./grouped_chip.stories-93347afa.js";import{u as r}from"./index-e13d9f9b.js";import"./iframe-b3f1dbec.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-5b045293.js";import"./vue.esm-bundler-735640fd.js";import"./utils-4a13a80a.js";import"./grouped_chip-b05e4265.js";import"./chip-2a113022.js";import"./button-4346d584.js";import"./link_constants-8ea95ec9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-1cfe388c.js";import"./icon_constants-fd15d813.js";function s(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
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
//# sourceMappingURL=grouped_chip-9eea9db2.js.map
