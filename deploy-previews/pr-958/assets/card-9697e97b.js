import{j as e}from"./jsx-runtime-b6a3bcda.js";import{M as l,S as d,C as n,a as s,b as c}from"./index-7e150777.js";import{C as m,D as p,W as h,a as u,b as x,c as j}from"./card.stories-16c8fea8.js";import{u as a}from"./index-ee9ab35d.js";import"./iframe-c0cec319.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./storybook_utils-35e0d11d.js";import"./vue.esm-bundler-2e3b72e0.js";import"./utils-9325de8f.js";import"./card-3a48f537.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-0f76b30a.js";import"./icon_constants-80181dc9.js";import"./button-fa62dafe.js";import"./link_constants-51338c78.js";function I(r={}){const{wrapper:o}=Object.assign({},a(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:m}),`
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
`})})]})}}export{I as default};
//# sourceMappingURL=card-9697e97b.js.map
