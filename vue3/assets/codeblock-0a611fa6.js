import{j as e}from"./jsx-runtime-340d5b8b.js";import{M as r,b as i,C as c,d,e as a}from"./index-36ef22fe.js";import{C as l,D as m}from"./codeblock.stories-7f0c995c.js";import{u as s}from"./index-b9b14b9f.js";import"./iframe-77f1df1c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-98c88692.js";import"./vue.esm-bundler-24d82261.js";import"./utils-a84c670d.js";import"./codeblock-7104728f.js";import"./_plugin-vue_export-helper-c27b6911.js";function t(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
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
`})})]})}function F(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{F as default};
//# sourceMappingURL=codeblock-0a611fa6.js.map
