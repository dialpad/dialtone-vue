import{j as e}from"./jsx-runtime-16a0ba86.js";import{M as r,S as s,d as a,e as d,f as l}from"./index-37741477.js";import{R as h,D as c}from"./rich_text_editor.stories-03b82589.js";import{u as i}from"./index-e9e5887e.js";import"./iframe-82c0e324.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-b0336152.js";import"./vue.esm-bundler-06a6c133.js";import"./utils-135fe08f.js";import"./rich_text_editor-4326ecd8.js";import"./emoji-f2007b70.js";import"./icon_constants-5440087a.js";import"./emoji-ed35ed1d.js";import"./index-40c4ee4c.js";import"./skeleton-ec706d96.js";import"./_plugin-vue_export-helper-c27b6911.js";function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",a:"a",pre:"pre"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:h}),`
`,e.jsx(t.h1,{id:"rich-text-editor",children:"Rich Text Editor"}),`
`,e.jsx(s,{children:e.jsx(t.p,{children:`A rich text editor is a component that allows users to format text with a
variety of styles. It enables also mixing text with custom components built as
extensions, such as links and user mentions.`})}),`
`,e.jsx("div",{class:"d-notice d-notice--info d-wmx100p",children:e.jsxs(t.p,{children:[e.jsx("b",{children:"NOTICE:"}),` This component is not a part of Dialtone-Vue core package and can
only be used by other Dialtone components. To keep this code out of the
Dialtone-vue core any Dialtone component that uses this should be built into
their separate build targets.`]})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(t.p,{children:`The editor itself is without any styling and the intention is to wrap it with
another component, such as Message Input, that provides the UI.`}),`
`,e.jsx(a,{children:e.jsx(d,{of:c})}),`
`,e.jsx(t.h2,{id:"output-format",children:"Output format"}),`
`,e.jsx(t.p,{children:"There are 3 defined output formats currently for the input text."}),`
`,e.jsx(t.h3,{id:"text",children:"Text"}),`
`,e.jsxs(t.p,{children:["Provide prop ",e.jsx(t.code,{children:"outputFormat: 'text'"})]}),`
`,e.jsx(t.p,{children:`Plain text format as output without taking into consideration any marks (italics, bold) / html tags/ codeblocks
that may be included in the input text user provides.`}),`
`,e.jsx(t.h3,{id:"json",children:"Json"}),`
`,e.jsxs(t.p,{children:["Provide prop ",e.jsx(t.code,{children:"outputFormat: 'json'"})]}),`
`,e.jsxs(t.p,{children:[`the input will be formated as a json document that can then be consumed by product.
The type of the each node in the input will be present for example: `,e.jsx(t.code,{children:"codeblock"}),", ",e.jsx(t.code,{children:"image"}),`
along with other meta data pertaining to the text node.`]}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsxs(t.p,{children:["Provide prop ",e.jsx(t.code,{children:"outputFormat: 'html'"})]}),`
`,e.jsx(t.p,{children:"the input will be formated as native html that can then be consumed by product."}),`
`,e.jsx(t.h2,{id:"tiptap-plugins-used",children:"Tiptap Plugins Used"}),`
`,e.jsx(t.h3,{id:"hardbreak",children:e.jsx(t.a,{href:"https://tiptap.dev/api/nodes/hard-break",target:"_blank",rel:"nofollow noopener noreferrer",children:"HardBreak"})}),`
`,e.jsxs(t.p,{children:["HardBreak plugin is used to add support for ",e.jsx(t.code,{children:"<br>"})," tags in the rich text editor."]}),`
`,e.jsx(t.h3,{id:"codeblocks",children:e.jsx(t.a,{href:"https://tiptap.dev/api/nodes/code-block",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodeBlocks"})}),`
`,e.jsx(t.p,{children:"Codeblock plugin is used to enaable the support for code and also specify the language. Type ``` followed by space\nor ~~~ with space to enable a codeblock in the rich text editor."}),`
`,e.jsx(t.h3,{id:"placeholder",children:e.jsx(t.a,{href:"https://tiptap.dev/api/extensions/placeholder",target:"_blank",rel:"nofollow noopener noreferrer",children:"Placeholder"})}),`
`,e.jsx(t.p,{children:"Provides support to enable placeholder support"}),`
`,e.jsx(t.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"usage-internal-only",children:"Usage (internal only)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { DtRichTextEditor } from '@components/rich_text_editor';
`})}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<dt-rich-text-editor
  :v-model="text"
  :input-aria-label="ariaLabel"
/>
`})}),`
`,e.jsx(t.h3,{id:"with-links",children:"With Links"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<dt-rich-text-editor
  :v-model="text"
  :input-aria-label="ariaLabel"
  link
/>
`})})]})}function R(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{R as default};
//# sourceMappingURL=rich_text_editor-4f2b4eb1.js.map