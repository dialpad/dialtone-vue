import{j as e}from"./jsx-runtime-1f74d513.js";import{M as r,b as i,C as c,d,e as a}from"./index-f7c7f393.js";import{C as l,D as m}from"./codeblock.stories-05d2914f.js";import{u as s}from"./index-b487ed8c.js";import"./iframe-0674cc5c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-52560a53.js";import"./vue.esm-ba2ca387.js";import"./codeblock-48f80f9e.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function t(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"codeblock",children:"Codeblock"}),`
`,e.jsx(i,{children:e.jsx(n.p,{children:"A codeblock is a UI element intended to display a piece of code in a separate and self-contained block."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:"Text passed into the component is rendered under the assumption that it's preformatted."}),`
`,e.jsx(n.p,{children:"For example, to render something like:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`function someFunction() {
  return "some result";
}
`})}),`
`,e.jsx(n.p,{children:"You'll have to do:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<dt-codeblock
  text="function someFunction() {\\n  return "some result";\\n}"
/>
`})}),`
`,e.jsx(c,{children:e.jsx(d,{of:m})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtCodeblock } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<dt-codeblock
  text="some pre-formatted codeblock"
/>
`})})]})}function S(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{S as default};
//# sourceMappingURL=codeblock-c7acd0cf.js.map