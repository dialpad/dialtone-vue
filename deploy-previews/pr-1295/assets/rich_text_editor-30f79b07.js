import{j as e}from"./jsx-dev-runtime-286cb782.js";import{M as o,b as u,C as s,d as r,e as m}from"./index-09ebcbe2.js";import{R as a,D as d,W as c}from"./rich_text_editor.stories-15adbaef.js";import{u as l}from"./index-4ce0a16b.js";import"./iframe-66d04cd0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-43ef8c35.js";import"./rich_text_editor-4984c7a0.js";import"./vue.esm-bundler-4299d4fa.js";import"./emoji-9cfd9564.js";import"./icon_constants-e5cbd7a1.js";import"./emoji-87314816.js";import"./index-40c4ee4c.js";import"./skeleton-64d050fa.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./list_item-c6c096d6.js";import"./utils-a917dac3.js";import"./icon-f3e020c1.js";import"./item_layout-16ef4dd3.js";import"./emoji_text_wrapper-46231b2f.js";import"./DtEmojiPicker-80c6751d.js";import"./input-7f291da5.js";import"./validation_messages-d1b2b538.js";import"./input-2f5b543f.js";import"./tab_group-704548c0.js";import"./tab-758ccda0.js";import"./button-193f2ca3.js";import"./link_constants-8ea95ec9.js";import"./tooltip-0833e2ff.js";import"./tippy_utils-89aa4eb5.js";import"./lazy_show-37284601.js";import"./stack-abb58067.js";import"./stack_constants-4f71ebff.js";import"./link-502435a2.js";import"./avatar-e5dbd9d5.js";import"./presence-e2ffcf2f.js";function t(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",a:"a",h4:"h4",pre:"pre"},l(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
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
//# sourceMappingURL=rich_text_editor-30f79b07.js.map