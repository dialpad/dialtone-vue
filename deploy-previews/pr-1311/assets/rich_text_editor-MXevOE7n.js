import{j as e}from"./jsx-dev-runtime-IsUoHCyM.js";import{M as o,b as u,C as s,d as r,e as m}from"./index-1MmP1N73.js";import{R as a,D as d,W as c}from"./rich_text_editor.stories-oxd3w1Qr.js";import{u as l}from"./index-MAs4YmmC.js";import"./iframe-zNFwkK8V.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-e6jHZmnO.js";import"./index-PPLHz8o0.js";import"./chunk-AY7I2SME-4UylTnhF.js";import"./storybook_utils-dy5aucTw.js";import"./rich_text_editor-eigi516g.js";import"./vue.esm-bundler-PY0rQjII.js";import"./emoji-tXAPj1RN.js";import"./icon_constants-spQP7USY.js";import"./emoji-R5kVcz2d.js";import"./index-h7P-Dzu4.js";import"./skeleton-nNqhnKKP.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./list_item-e4_v3xkq.js";import"./utils-r35NyHdW.js";import"./icon-34MKq-Bw.js";import"./item_layout-jcydjdUV.js";import"./emoji_text_wrapper-93jeujx5.js";import"./DtEmojiPicker-4r9pny9-.js";import"./input-9zFGHtLU.js";import"./validation_messages-ELbgNwqd.js";import"./input-rO3z4GH3.js";import"./tab_group-nhsE4MTj.js";import"./tab-WocUBphO.js";import"./button-SQvTdlhI.js";import"./link_constants-Igh3f6J8.js";import"./tooltip-wR99tpIh.js";import"./tippy_utils-ZwhTkwWK.js";import"./lazy_show-IxfzjcX-.js";import"./stack-Mbka1MYa.js";import"./stack_constants-45i7xhSZ.js";import"./link-Gek9HUoB.js";import"./avatar-DSnVDm-f.js";import"./presence-ypnOiPCE.js";function t(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",a:"a",h4:"h4",pre:"pre"},l(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
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
`,e.jsxDEV(s,{children:e.jsxDEV(r,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
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
`,e.jsxDEV(n.h3,{id:"mention",children:e.jsxDEV(n.a,{href:"https://tiptap.dev/api/nodes/mention",target:"_blank",rel:"nofollow noopener noreferrer",children:"Mention"},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`The tiptap Mention plugin is apt for our use case of mentioning users or channels within the editor.
It also creates the respective nodes with ability for user to customize the trigger character.`},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"how-to-use-the-mention-plugin",children:"How to use the Mention plugin:"},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`When using the Rich Text editor, the developer would have to pass in the suggestion object prop
which MUST contain an items function that takes in a query and returns a list of object with the properties:`},void 0,!1,{fileName:"<source.js>",lineNumber:78,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-json",children:`{ 
  contactId: String,
  name: String,
  avatarSrc: String
}
`},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`There can be additional properties that override the mention plugin and
more details can be seen here: `,e.jsxDEV(n.a,{href:"https://tiptap.dev/api/utilities/suggestion",target:"_blank",rel:"nofollow noopener noreferrer",children:"Suggestion Tiptap utility"},void 0,!1,{fileName:"<source.js>",lineNumber:90,columnNumber:32},this),`.
If this mentionSuggestion Object prop is not supplied, the mention plugin is disabled by default.`]},void 0,!0,{fileName:"<source.js>",lineNumber:89,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"To see it in action type char '@' into rich editor With channel mentions."},void 0,!1,{fileName:"<source.js>",lineNumber:93,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(r,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"},void 0,!1,{fileName:"<source.js>",lineNumber:98,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:100,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage-internal-only",children:"Usage (internal only)"},void 0,!1,{fileName:"<source.js>",lineNumber:102,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`import { DtRichTextEditor } from '@components/rich_text_editor';
`},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:108,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-rich-text-editor
  :v-model="text"
  :input-aria-label="ariaLabel"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:110,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:110,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-links",children:"With Links"},void 0,!1,{fileName:"<source.js>",lineNumber:117,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-rich-text-editor
  :v-model="text"
  :input-aria-label="ariaLabel"
  link
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:119,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:119,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-mentionsuggestion",children:"With mentionSuggestion"},void 0,!1,{fileName:"<source.js>",lineNumber:127,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-rich-text-editor
  :v-model="text"
  :input-aria-label="ariaLabel"
  :mention-suggestion="mentionSuggestion
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:129,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:129,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function ee(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(t,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):t(i)}export{ee as default};
//# sourceMappingURL=rich_text_editor-MXevOE7n.js.map
