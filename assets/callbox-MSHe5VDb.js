import{j as e}from"./jsx-runtime-QReR3DfS.js";import{M as o,b as c,C as a,e as r}from"./index-DUL9Ioec.js";import{D as s,a as p,V as d}from"./callbox.stories-LunJ0jGU.js";import{u as l}from"./index-gBHRzTTU.js";import"./iframe-B2TQZaYX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";import"./storybook_utils-XrTpeJKJ.js";import"./avatar-TNIlCJsh.js";import"./utils-E69eXbJV.js";import"./vue.esm-Wy6pS3yJ.js";import"./presence-U7UY0cCe.js";import"./_plugin-vue2_normalizer-XBmYDgEh.js";import"./icon-GkF47-VR.js";import"./icon_constants-spQP7USY.js";import"./badge-wEnMDLej.js";import"./button-5wqdSkdq.js";import"./link_constants-Igh3f6J8.js";import"./item_layout-9CsPj6HM.js";import"./stack-JDcL8RhQ.js";import"./stack_constants-45i7xhSZ.js";import"./chunk-AY7I2SME-4UylTnhF.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
`,e.jsx(n.h1,{id:"callbox",children:"Callbox"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:"Provides the layout for Dialpad's callbox"})}),`
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
//# sourceMappingURL=callbox-MSHe5VDb.js.map
