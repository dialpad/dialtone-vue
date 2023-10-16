import{j as e}from"./jsx-runtime-fe4b55cb.js";import{M as c,b as o,C as a,e as r}from"./index-73dc3dd2.js";import{D as s,a as p,V as d}from"./callbox.stories-7c492816.js";import{u as l}from"./index-9b37a073.js";import"./iframe-1783f691.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-f49e9550.js";import"./vue.esm-bundler-3a08a304.js";import"./utils-9b223a5d.js";import"./callbox-9faebb21.js";import"./avatar-8eea22b9.js";import"./presence-09ebed05.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-a0437632.js";import"./icon_constants-ffb47bba.js";import"./badge-d03f4e65.js";import"./button-86b4d8a0.js";import"./link_constants-8ea95ec9.js";import"./item_layout-6375e0d3.js";import"./stack-d47e2c75.js";import"./chunk-AY7I2SME-5eb1ab46.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s}),`
`,e.jsx(n.h1,{id:"dtrecipecallbox",children:"DtRecipeCallbox"}),`
`,e.jsx(o,{children:e.jsx(n.p,{children:"Provides the layout for the callbox"})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtRecipeCallbox } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"call",children:"Call"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-callbox avatar-full-name="Some name" title="Some title" border-color="ai">
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
`})}),`
`,e.jsx(n.h3,{id:"active-video",children:"Active video"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-callbox title="1 Participant">
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
`})}),`
`,e.jsx(n.h3,{id:"clickable",children:"Clickable"}),`
`,e.jsxs(n.p,{children:["Callbox has a clickable behavior to enable clicking the ",e.jsx(n.code,{children:"avatar"})," or the ",e.jsx(n.code,{children:"title"}),` if the properties are set.
This will emit a `,e.jsx(n.code,{children:"click"})," event that can be listen through ",e.jsx(n.code,{children:"@click"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-recipe-callbox
  clickable
/>
`})})]})}function A(t={}){const{wrapper:n}=Object.assign({},l(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{A as default};
//# sourceMappingURL=callbox-d9c76a8c.js.map
