import{j as e}from"./jsx-runtime-57f83f62.js";import{M as l,S as d,d as n,e as s,f as c}from"./index-86e8f356.js";import{C as m,D as p,W as h,a as u,b as x,c as j}from"./card.stories-66001d88.js";import{u as a}from"./index-73139a0a.js";import"./iframe-2d830e74.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-fe18e457.js";import"./vue.esm-ba2ca387.js";import"./card-bf2d171f.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-4b4aba70.js";import"./icon_constants-83c02e68.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";function z(r={}){const{wrapper:o}=Object.assign({},a(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:m}),`
`,e.jsx(t.h1,{id:"card",children:"Card"}),`
`,e.jsx(d,{children:e.jsx(t.p,{children:`A card contains summary content and actions about a single subject.
It can be used by itself or within a list, and is generally interactive.`})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(t.p,{children:"Base card style with content."}),`
`,e.jsx(n,{children:e.jsx(s,{of:p})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"You can use the card with default content slot or combine header, footer for the complete look."}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { DtCard } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.h2,{id:"with-header",children:"With header"}),`
`,e.jsx(t.p,{children:"A card with the header."}),`
`,e.jsx(n,{children:e.jsx(s,{of:h})}),`
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
`,e.jsx(n,{children:e.jsx(s,{of:u})}),`
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
`,e.jsx(n,{children:e.jsx(s,{of:x})}),`
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
`,e.jsx(n,{children:e.jsx(s,{of:j})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:` <dt-card class="d-w264" :max-height="50px">
    <template #content>
      <p class="d-fs-200 d-fw-bold">Lorem ipsum</p>
      <p class="d-fs-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
    </template>
</dt-card>
`})})]})}}export{z as default};
//# sourceMappingURL=card-041077cc.js.map
