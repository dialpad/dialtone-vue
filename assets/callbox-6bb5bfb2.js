import{j as n}from"./jsx-runtime-a2045d76.js";import{M as o,S as r,d as a,f as c}from"./index-9bccb811.js";import{D as s,a as p,V as m}from"./callbox.stories-3f03ed5a.js";import{u as l}from"./index-66c39b15.js";import"./iframe-ef0ccdb5.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-e1aad9b5.js";import"./vue.esm-ba2ca387.js";import"./callbox-3f4faa5f.js";import"./item_layout-173b62c3.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./avatar-fba09582.js";import"./presence-7999d7f0.js";import"./icon-23d7fa2f.js";import"./icon_constants-6cc92332.js";import"./badge-8cf1d91e.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";function i(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},l(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:s}),`
`,n.jsx(t.h1,{id:"dtrecipecallbox",children:"DtRecipeCallbox"}),`
`,n.jsx(r,{children:n.jsx(t.p,{children:"Provides the layout for the callbox"})}),`
`,n.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(a,{of:p}),`
`,n.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(a,{of:m}),`
`,n.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(c,{}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.h3,{id:"import",children:"Import"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { DtRecipeCallbox } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(t.h3,{id:"call",children:"Call"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-recipe-callbox avatar-full-name="Some name" title="Some title" border-color="ai">
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
`,n.jsx(t.h3,{id:"active-video",children:"Active video"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-recipe-callbox title="1 Participant">
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
`})})]})}function w(e={}){const{wrapper:t}=Object.assign({},l(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(i,e)})):i(e)}export{w as default};
//# sourceMappingURL=callbox-6bb5bfb2.js.map
