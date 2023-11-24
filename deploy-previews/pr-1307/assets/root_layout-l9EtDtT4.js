import{j as e}from"./jsx-dev-runtime-m85PfrKx.js";import{M as t,b as a,C as s,d as o,e as d}from"./index-Ir-hcy95.js";import{R as u,D as m,S as c}from"./root_layout.stories-xR7kEvvc.js";import{u as r}from"./index-jg10gaT1.js";import"./iframe-bVje69y4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";import"./storybook_utils-XrTpeJKJ.js";import"./_plugin-vue2_normalizer-XBmYDgEh.js";import"./utils-pRacJSLF.js";import"./vue.esm-BQBotxwJ.js";function l(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",a:"a"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{of:u},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"root-layout",children:"Root Layout"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(a,{children:e.jsxDEV(n.p,{children:"A root layout provides a standardized group of containers to display content at the root level."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`A root layout consists of a header, body, sidebar and footer. Content can optionally be passed into the slots which
will be displayed in the respective area. The sidebar is designed to be responsive and will reposition above the
body according to the `,e.jsxDEV(n.code,{children:"responsiveBreakpoint"},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:23},this)," prop."]},void 0,!0,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(o,{of:m},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(d,{},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Root Layout should be used as the top level component for a route. All other components on the page should be nested
within one of the root layout's slots. The root layout should not be nested within any other elements or components.`},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRootLayout } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<template>
  <dt-root-layout>
    <template #header>
      <div class="d-h100p d-bgc-purple-200">Header</div>
    </template>
    <template #sidebar>
      <div class="d-hmn100p d-bgc-black-200">
        <div>Sidebar item 1</div>
        <div>Sidebar item 2</div>
        <div>Sidebar item 3</div>
      </div>
    </template>
    <template>
      <div class="d-h100p">Content</div>
    </template>
    <template #footer>
      <div class="d-h100p d-bgc-gold-200">Footer</div>
    </template>
  </dt-root-layout>
</template>
`},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"sticky",children:"Sticky"},void 0,!1,{fileName:"<source.js>",lineNumber:61,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Try scrolling"},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(o,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<template>
  <dt-root-layout header-sticky="true">
    <template #header>
      <div class="d-h100p d-bgc-purple-200">Header</div>
    </template>
    <template #sidebar>
      <div class="d-hmn100p d-bgc-black-200">
        <div>Sidebar item 1</div>
        <div>Sidebar item 2</div>
        <div>Sidebar item 3</div>
      </div>
    </template>
    <template>
      <div class="d-h100p">Content</div>
    </template>
    <template #footer>
      <div class="d-h100p d-bgc-gold-200">Footer</div>
    </template>
  </dt-root-layout>
</template>
`},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:91,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`The RootLayout component uses
`,e.jsxDEV(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning",target:"_blank",rel:"nofollow noopener noreferrer",children:"Content Sectioning"},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this),`
elements `,e.jsxDEV(n.code,{children:"<header>"},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:10},this),", ",e.jsxDEV(n.code,{children:"<aside>"},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:22},this),", ",e.jsxDEV(n.code,{children:"<main>"},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:33},this),", and ",e.jsxDEV(n.code,{children:"<footer>"},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:47},this),` which automatically define
`,e.jsxDEV(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#landmark_roles",target:"_blank",rel:"nofollow noopener noreferrer",children:"ARIA Landmark Roles"},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this),`
on the page.`]},void 0,!0,{fileName:"<source.js>",lineNumber:93,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["If you have navigation links contained within any of the slots Root Layout provides these should be enclosed in a ",e.jsxDEV(n.code,{children:"<nav>"},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:115},this),`
`,e.jsxDEV(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",target:"_blank",rel:"nofollow noopener noreferrer",children:"Nav Section"},void 0,!1,{fileName:"<source.js>",lineNumber:100,columnNumber:1},this),`.
The RootLayout component will not do this for you.`]},void 0,!0,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`The sidebar will not automatically wrap to be above the main content by default.
This can be changed via the `,e.jsxDEV(n.code,{children:"responsiveBreakpoint"},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:29},this)," prop if desired."]},void 0,!0,{fileName:"<source.js>",lineNumber:103,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function k(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(l,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(i)}export{k as default};
//# sourceMappingURL=root_layout-l9EtDtT4.js.map
