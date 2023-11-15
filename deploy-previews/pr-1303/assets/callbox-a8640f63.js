import{j as e}from"./jsx-dev-runtime-e94ec84b.js";import{M as a,b as r,C as l,e as m}from"./index-e1a93643.js";import{D as o,a as c,V as u}from"./callbox.stories-ad1ec5d0.js";import{u as s}from"./index-447e0f1a.js";import"./iframe-724732da.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-182ea7b7.js";import"./callbox-66702ad3.js";import"./avatar-0eda9f8a.js";import"./utils-ddad74ee.js";import"./vue.esm-bundler-81c53cfe.js";import"./presence-aa185dcc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-8dfe7109.js";import"./icon_constants-e5cbd7a1.js";import"./badge-3843b3a5.js";import"./button-878f62d6.js";import"./link_constants-8ea95ec9.js";import"./item_layout-99771b6d.js";import"./stack-0e9272f3.js";import"./stack_constants-4f71ebff.js";import"./chunk-AY7I2SME-5eb1ab46.js";function t(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},s(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:o},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"callbox",children:"Callbox"},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this),`
`,e.jsxDEV(r,{children:e.jsxDEV(n.p,{children:"Provides the layout for Dialpad's callbox"},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:12,columnNumber:1},this),`
`,e.jsxDEV(l,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(l,{of:u},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRecipeCallbox } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"call",children:"Call"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-callbox avatar-full-name="Some name" title="Some title" border-color="ai">
  <template #subtitle>
    <span>06:01</span>
  </template>
  <template #right>
    <dt-button
      aria-label="toggle dialpad ai"
      circle
      importance="clear"
    >
      <template #icon>
        <dt-icon
          name="dialpad-ai-color"
          size="400"
        />
      </template>
    </dt-button>
    <dt-button
      aria-label="hang call"
      circle
      importance="clear"
    >
      <template #icon>
        <dt-icon
          name="phone-hang-up"
          class="d-fc-critical"
          size="400"
        />
      </template>
    </dt-button>
  </template>
</dt-recipe-callbox>
`},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"active-video",children:"Active video"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-callbox title="1 Participant">
  <template #video>
    <!-- Media stream -->
  </template>
  <template #subtitle>
    <span>06:01</span>
  </template>
  <template #right>
    <dt-button
      aria-label="toggle mic"
      circle
      importance="clear"
    >
      <template #icon>
        <dt-icon
          name="mic"
          size="400"
        />
      </template>
    </dt-button>
    <dt-button
      aria-label="toggle video"
      circle
      importance="clear"
    >
      <template #icon>
        <dt-icon
          name="video"
          size="400"
        />
      </template>
    </dt-button>
    <dt-button
      aria-label="hang call"
      circle
      importance="clear"
    >
      <template #icon>
        <dt-icon
          name="phone-hang-up"
          class="d-fc-critical"
          size="400"
        />
      </template>
    </dt-button>
  </template>
</dt-recipe-callbox>
`},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"clickable",children:"Clickable"},void 0,!1,{fileName:"<source.js>",lineNumber:121,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Callbox has a clickable behavior to enable clicking the ",e.jsxDEV(n.code,{children:"avatar"},void 0,!1,{fileName:"<source.js>",lineNumber:123,columnNumber:57},this)," or the ",e.jsxDEV(n.code,{children:"title"},void 0,!1,{fileName:"<source.js>",lineNumber:123,columnNumber:73},this),` if the properties are set.
This will emit a `,e.jsxDEV(n.code,{children:"click"},void 0,!1,{fileName:"<source.js>",lineNumber:124,columnNumber:18},this)," event that can be listen through ",e.jsxDEV(n.code,{children:"@click"},void 0,!1,{fileName:"<source.js>",lineNumber:124,columnNumber:59},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:123,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-recipe-callbox
  clickable
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:126,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:126,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function B(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(t,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):t(i)}export{B as default};
//# sourceMappingURL=callbox-a8640f63.js.map