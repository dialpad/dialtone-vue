import{j as e}from"./jsx-runtime-21158485.js";import{M as a,b as l,C as s,d as r,e as d}from"./index-47689389.js";import{C as c,D as m,W as p,a as h,b as u,c as x}from"./card.stories-376ad335.js";import{u as i}from"./index-5087b79c.js";import"./iframe-3769dc5e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-0b506883.js";import"./vue.esm-ba2ca387.js";import"./card-bf2d171f.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-d9bd2c26.js";import"./icon_constants-9268d030.js";import"./button-4cf26c8f.js";import"./link_constants-8ea95ec9.js";function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(t.h1,{id:"card",children:"Card"}),`
`,e.jsx(l,{children:e.jsx(t.p,{children:`A card contains summary content and actions about a single subject.
It can be used by itself or within a list, and is generally interactive.`})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(t.p,{children:"Base card style with content."}),`
`,e.jsx(s,{children:e.jsx(r,{of:m})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"You can use the card with default content slot or combine header, footer for the complete look."}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { DtCard } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.h2,{id:"with-header",children:"With header"}),`
`,e.jsx(t.p,{children:"A card with the header."}),`
`,e.jsx(s,{children:e.jsx(r,{of:p})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:` <dt-card class="d-w264">
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
`})}),`
`,e.jsx(t.h2,{id:"with-footer",children:"With footer"}),`
`,e.jsx(t.p,{children:"A card with the footer."}),`
`,e.jsx(s,{children:e.jsx(r,{of:h})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:` <dt-card class="d-w264">
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
`})}),`
`,e.jsx(t.h2,{id:"with-header-and-footer",children:"With header and footer"}),`
`,e.jsx(t.p,{children:"A card with the header and footer."}),`
`,e.jsx(s,{children:e.jsx(r,{of:u})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:` <dt-card class="d-w264">
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
`})}),`
`,e.jsx(t.h2,{id:"with-scrollable-content-using-max-height",children:"With scrollable content using max height"}),`
`,e.jsx(t.p,{children:"A card with the scrollable content."}),`
`,e.jsx(s,{children:e.jsx(r,{of:x})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:` <dt-card class="d-w264" :max-height="50px">
    <template #content>
      <p class="d-fs-200 d-fw-bold">Lorem ipsum</p>
      <p class="d-fs-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
    </template>
</dt-card>
`})})]})}function O(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{O as default};
//# sourceMappingURL=card-ca9adab9.js.map
