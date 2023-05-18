import{j as e}from"./jsx-runtime-9578e6cf.js";import{M as a,S as r,b as c}from"./index-e8326b4b.js";import"./stack-793861c1.js";import{S as d}from"./stack.stories-2458bf6a.js";import{u as i}from"./index-64da98bd.js";import"./iframe-6a497e8a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./storybook_utils-2a3c9efe.js";import"./vue.esm-ba2ca387.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",h4:"h4"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"stack",children:"Stack"}),`
`,e.jsx(r,{children:e.jsx(n.p,{children:"Stack is a layout component used to group elements together and apply a space between them."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.p,{children:["Stack base style starts without spacing between elements, on column direction and ",e.jsx(n.code,{children:"div"})," as HTML element."]}),`
`,e.jsx(n.h2,{id:"slots--props",children:"Slots & Props"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"available-gap",children:"Available Gap"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`[0, 100, 200, 300, 400, 500, 600]
`})}),`
`,e.jsx(n.h3,{id:"available-directions",children:"Available Directions"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`['column', 'column-reverse', 'row', 'row-reverse']
`})}),`
`,e.jsx(n.h3,{id:"available-breakpoints",children:"Available Breakpoints"}),`
`,e.jsx(n.p,{children:`| Prefix | Max Width |
| -- | ------ |
| sm | 480px  |
| md | 640px  |
| lg | 980px  |
| xl | 1264px |`}),`
`,e.jsx(n.h3,{id:"direction-object-structure",children:"Direction Object Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{
  default: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
}
`})}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h4,{id:"stacks-column-at-small-screen-size-and-column-reverse-at-large-screen",children:"Stacks column at small screen size and column reverse at large screen"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-stack :direction="{'default': 'row', 'sm': 'column', 'lg': 'column-reverse'}" as="article" gap="100">
  <div>Stack item 1</div>
  <div>Stack item 2</div>
</dt-stack>
`})}),`
`,e.jsx(n.h4,{id:"stacks-row-with-gap-300-in-a-section-html-element",children:"Stacks row with gap 300 in a section HTML element"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-stack direction="row" as="section" gap="300">
  <div>Stack item 1</div>
  <div>Stack item 2</div>
</dt-stack>
`})}),`
`,e.jsx(n.h4,{id:"stacks-row-with-gap-300-and-stacks-in-row-reverse-the-second-element-with-gap-600",children:"Stacks row with gap 300 and stacks in row reverse the second element with gap 600"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-stack direction="row" as="section" gap="300">
  <div>Stack item 1</div>
  <div>
    <div>Stack item 2</div>
      <dt-stack direction="row-reverse" gap="600">
          <div>Stack item 3</div>
          <div>Stack item 4</div>
      </dt-stack>
  </div>
</dt-stack>
`})}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtStack } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-stack direction="column" as="div" gap="0">
  <div>Stack item 1</div>
  <div>Stack item 2</div>
</dt-stack>
`})})]})}function N(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{N as default};
//# sourceMappingURL=stack-de293dd4.js.map
