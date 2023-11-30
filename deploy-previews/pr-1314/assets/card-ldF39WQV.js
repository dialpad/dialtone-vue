import{j as e}from"./jsx-dev-runtime-6d7PhnE9.js";import{M as u,b as m,C as i,d as t,e as o}from"./index-QvymASvF.js";import{C as a,D as d,W as c,a as f,b as h,c as N}from"./card.stories-AjWD1sFB.js";import{u as r}from"./index-UV0dKCF1.js";import"./iframe-lr3R0p69.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";import"./storybook_utils-XrTpeJKJ.js";import"./card-B65FK8DK.js";import"./_plugin-vue2_normalizer-XBmYDgEh.js";import"./icon-SfO3AFzV.js";import"./icon_constants-spQP7USY.js";import"./utils-pRacJSLF.js";import"./vue.esm-BQBotxwJ.js";import"./button-ux2tnS3y.js";import"./link_constants-Igh3f6J8.js";function l(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},r(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(u,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"card",children:"Card"},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(n.p,{children:`A card contains summary content and actions about a single subject.
It can be used by itself or within a list, and is generally interactive.`},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:12,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Base card style with content."},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(t,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(o,{},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"You can use the card with default content slot or combine header, footer for the complete look."},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtCard } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"with-header",children:"With header"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A card with the header."},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(t,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:` <dt-card class="d-w264">
    <template #header>
      <p>Header</p>
      <dt-button
        size="xs"
        importance="clear"
        aria-label="Menu button"
      >
        <template #icon>
          <dt-icon name="more-vertical" />
        </template>
      </dt-button>
    </template>
    <template #content>
      <p class="d-fs-200 d-fw-bold">Lorem ipsum</p>
      <p class="d-fs-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
    </template>
</dt-card>
`},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"with-footer",children:"With footer"},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A card with the footer."},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(t,{of:f},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:` <dt-card class="d-w264">
    <template #content>
      <p class="d-fs-200 d-fw-bold">Lorem ipsum</p>
      <p class="d-fs-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
    </template>
    <template #footer>
      <dt-button>
        Button 1
      </dt-button>
      <dt-button class="d-ml8">
        Button 2
      </dt-button>
    </template>
</dt-card>
`},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"with-header-and-footer",children:"With header and footer"},void 0,!1,{fileName:"<source.js>",lineNumber:90,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A card with the header and footer."},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(t,{of:h},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:` <dt-card class="d-w264">
    <template #header>
      <p>Header</p>
      <dt-button
        size="xs"
        importance="clear"
        aria-label="Menu button"
      >
        <template #icon>
          <dt-icon name="more-vertical" />
        </template>
      </dt-button>
    </template>
    <template #content>
      <p class="d-fs-200 d-fw-bold">Lorem ipsum</p>
      <p class="d-fs-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
    </template>
    <template #footer>
      <dt-button>
        Button 1
      </dt-button>
      <dt-button class="d-ml8">
        Button 2
      </dt-button>
    </template>
</dt-card>
`},void 0,!1,{fileName:"<source.js>",lineNumber:98,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:98,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"with-scrollable-content-using-max-height",children:"With scrollable content using max height"},void 0,!1,{fileName:"<source.js>",lineNumber:128,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A card with the scrollable content."},void 0,!1,{fileName:"<source.js>",lineNumber:130,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(t,{of:N},void 0,!1,{fileName:"<source.js>",lineNumber:133,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:132,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:` <dt-card class="d-w264" :max-height="50px">
    <template #content>
      <p class="d-fs-200 d-fw-bold">Lorem ipsum</p>
      <p class="d-fs-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
    </template>
</dt-card>
`},void 0,!1,{fileName:"<source.js>",lineNumber:136,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:136,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function F(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(l,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(s)}export{F as default};
//# sourceMappingURL=card-ldF39WQV.js.map
