import{j as e}from"./jsx-dev-runtime-2dc84c3d.js";import{M as l,S as u,C as t,a as o,b as m}from"./index-2603e49b.js";import{R as a,D as d}from"./rich_text_editor.stories-4a15c021.js";import{u as r}from"./index-767e84ad.js";import"./iframe-b437a5df.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-3dddf937.js";import"./vue.esm-bundler-8de31a68.js";import"./utils-d48fb0e8.js";import"./rich_text_editor-6d7dba5b.js";import"./_plugin-vue_export-helper-c27b6911.js";function s(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",a:"a",pre:"pre"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(l,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"rich-text-editor",children:"Rich Text Editor"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(n.p,{children:`A rich text editor is a component that allows users to format text with a
variety of styles. It enables also mixing text with custom components built as
extensions, such as links and user mentions.`},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV("div",{class:"d-notice d-notice--info d-wmx100p",children:e.jsxDEV(n.p,{children:[e.jsxDEV("b",{children:"NOTICE:"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),` This component is not a part of Dialtone-Vue core package and can
only be used by other Dialtone components. To keep this code out of the
Dialtone-vue core any Dialtone component that uses this should be built into
their separate build targets.`]},void 0,!0,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`The editor itself is without any styling and the intention is to wrap it with
another component, such as Message Input, that provides the UI.`},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(t,{children:e.jsxDEV(o,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"output-format",children:"Output format"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"There are 3 defined output formats currently for the input text."},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"text",children:"Text"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Provide prop ",e.jsxDEV(n.code,{children:"outputFormat: 'text'"},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:14},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Plain text format as output without taking into consideration any marks (italics, bold) / html tags/ codeblocks
that may be included in the input text user provides.`},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"json",children:"Json"},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Provide prop ",e.jsxDEV(n.code,{children:"outputFormat: 'json'"},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:14},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`the input will be formated as a json document that can then be consumed by product.
The type of the each node in the input will be present for example: `,e.jsxDEV(n.code,{children:"codeblock"},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:69},this),", ",e.jsxDEV(n.code,{children:"image"},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:82},this),`
along with other meta data pertaining to the text node.`]},void 0,!0,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"html",children:"HTML"},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Provide prop ",e.jsxDEV(n.code,{children:"outputFormat: 'html'"},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:14},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"the input will be formated as native html that can then be consumed by product."},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"tiptap-plugins-used",children:"Tiptap Plugins Used"},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"hardbreak",children:e.jsxDEV(n.a,{href:"https://tiptap.dev/api/nodes/hard-break",target:"_blank",rel:"nofollow noopener noreferrer",children:"HardBreak"},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["HardBreak plugin is used to add support for ",e.jsxDEV(n.code,{children:"<br>"},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:45},this)," tags in the rich text editor."]},void 0,!0,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"codeblocks",children:e.jsxDEV(n.a,{href:"https://tiptap.dev/api/nodes/code-block",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodeBlocks"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Codeblock plugin is used to enaable the support for code and also specify the language. Type ``` followed by space\nor ~~~ with space to enable a codeblock in the rich text editor."},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"placeholder",children:e.jsxDEV(n.a,{href:"https://tiptap.dev/api/extensions/placeholder",target:"_blank",rel:"nofollow noopener noreferrer",children:"Placeholder"},void 0,!1,{fileName:"<source.js>",lineNumber:67,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:67,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Provides support to enable placeholder support"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage-internal-only",children:"Usage (internal only)"},void 0,!1,{fileName:"<source.js>",lineNumber:75,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`import { DtRichTextEditor } from '@components/rich_text_editor';
`},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-rich-text-editor
  :v-model="text"
  :input-aria-label="ariaLabel"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:83,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:83,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-links",children:"With Links"},void 0,!1,{fileName:"<source.js>",lineNumber:90,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-rich-text-editor
  :v-model="text"
  :input-aria-label="ariaLabel"
  link
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function M(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{M as default};
//# sourceMappingURL=rich_text_editor-5b28602d.js.map
