import{j as e}from"./jsx-runtime-16a0ba86.js";import{M as r,S as d,d as o,e as i,f as l}from"./index-37741477.js";import{R as c,D as p,S as h}from"./root_layout.stories-efa40bbe.js";import{u as a}from"./index-e9e5887e.js";import"./iframe-82c0e324.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./storybook_utils-b0336152.js";import"./vue.esm-bundler-06a6c133.js";import"./utils-135fe08f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./v_html-ded372da.js";function s(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",a:"a"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(t.h1,{id:"root-layout",children:"Root Layout"}),`
`,e.jsx(d,{children:e.jsx(t.p,{children:"A root layout provides a standardized group of containers to display content at the root level."})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(t.p,{children:[`A root layout consists of a header, body, sidebar and footer. Content can optionally be passed into the slots which
will be displayed in the respective area. The sidebar is designed to be responsive and will reposition above the
body according to the `,e.jsx(t.code,{children:"responsiveBreakpoint"})," prop."]}),`
`,e.jsx(o,{children:e.jsx(i,{of:p})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:`Root Layout should be used as the top level component for a route. All other components on the page should be nested
within one of the root layout's slots. The root layout should not be nested within any other elements or components.`}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { DtRootLayout } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<template>
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
`})}),`
`,e.jsx(t.h2,{id:"sticky",children:"Sticky"}),`
`,e.jsx(t.p,{children:"Try scrolling"}),`
`,e.jsx(o,{children:e.jsx(i,{of:h})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<template>
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
`})}),`
`,e.jsx(t.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:[`The RootLayout component uses
`,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning",target:"_blank",rel:"nofollow noopener noreferrer",children:"Content Sectioning"}),`
elements `,e.jsx(t.code,{children:"<header>"}),", ",e.jsx(t.code,{children:"<aside>"}),", ",e.jsx(t.code,{children:"<main>"}),", and ",e.jsx(t.code,{children:"<footer>"}),` which automatically define
`,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#landmark_roles",target:"_blank",rel:"nofollow noopener noreferrer",children:"ARIA Landmark Roles"}),`
on the page.`]}),`
`,e.jsxs(t.p,{children:["If you have navigation links contained within any of the slots Root Layout provides these should be enclosed in a ",e.jsx(t.code,{children:"<nav>"}),`
`,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",target:"_blank",rel:"nofollow noopener noreferrer",children:"Nav Section"}),`.
The RootLayout component will not do this for you.`]}),`
`,e.jsxs(t.p,{children:[`The sidebar will not automatically wrap to be above the main content by default.
This can be changed via the `,e.jsx(t.code,{children:"responsiveBreakpoint"})," prop if desired."]})]})}function T(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{T as default};
//# sourceMappingURL=root_layout-1b88bb03.js.map