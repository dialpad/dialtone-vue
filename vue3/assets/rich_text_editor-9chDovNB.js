import{j as e}from"./jsx-runtime-usloKAqW.js";import{M as a,b as l,C as i,d as o,e as d}from"./index-jhX2UlLA.js";import{R as h,D as p,W as c}from"./rich_text_editor.stories-sb2qpQld.js";import{u as s}from"./index-IJmDop_w.js";import"./iframe-F-N9wd-W.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-e6jHZmnO.js";import"./index-PPLHz8o0.js";import"./chunk-AY7I2SME-4UylTnhF.js";import"./storybook_utils-dy5aucTw.js";import"./rich_text_editor-iPvm6uAY.js";import"./vue.esm-bundler-pfnFGw-8.js";import"./emoji-9peNT-Wf.js";import"./icon_constants-spQP7USY.js";import"./emoji-R5kVcz2d.js";import"./index-h7P-Dzu4.js";import"./skeleton-AG0gtGzw.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./list_item-8zDNiA2P.js";import"./utils-uw-tjP-u.js";import"./icon-z49A8j_D.js";import"./item_layout-8xOedta4.js";import"./emoji_text_wrapper-8Kbsw1c2.js";import"./DtEmojiPicker-DLx5XJR6.js";import"./input-ivLChdgg.js";import"./validation_messages-3Bisqynw.js";import"./input-ThOFx_z-.js";import"./tab_group-8SOcoi0Y.js";import"./tab-Hb-qig5D.js";import"./button-QSbPABQk.js";import"./link_constants-Igh3f6J8.js";import"./tooltip-F2cB1cq2.js";import"./tippy_utils-JPp_rckD.js";import"./lazy_show-ChM6yLsS.js";import"./stack-Wrr-eqs0.js";import"./stack_constants-45i7xhSZ.js";import"./link-19XigYjf.js";import"./avatar-Rnq9lpvE.js";import"./presence-vy1D7RQM.js";function r(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",a:"a",h4:"h4",pre:"pre"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(t.h1,{id:"rich-text-editor",children:"Rich Text Editor"}),`
`,e.jsx(l,{children:e.jsx(t.p,{children:`A rich text editor is a component that allows users to format text with a
variety of styles. It enables also mixing text with custom components built as
extensions, such as links and user mentions.`})}),`
`,e.jsx("div",{class:"d-notice d-notice--info d-wmx100p",children:e.jsxs(t.p,{children:[e.jsx("b",{children:"NOTICE:"}),` This component is not a part of Dialtone-Vue core package and can
only be used by other Dialtone components. To keep this code out of the
Dialtone-vue core any Dialtone component that uses this should be built into
their separate build targets.`]})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(t.p,{children:`The editor itself is without any styling and the intention is to wrap it with
another component, such as Message Input, that provides the UI.`}),`
`,e.jsx(i,{children:e.jsx(o,{of:p})}),`
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
`,e.jsx(t.h3,{id:"mention",children:e.jsx(t.a,{href:"https://tiptap.dev/api/nodes/mention",target:"_blank",rel:"nofollow noopener noreferrer",children:"Mention"})}),`
`,e.jsx(t.p,{children:`The tiptap Mention plugin is apt for our use case of mentioning users or channels within the editor.
It also creates the respective nodes with ability for user to customize the trigger character.`}),`
`,e.jsx(t.h4,{id:"how-to-use-the-mention-plugin",children:"How to use the Mention plugin:"}),`
`,e.jsx(t.p,{children:`When using the Rich Text editor, the developer would have to pass in the suggestion object prop
which MUST contain an items function that takes in a query and returns a list of object with the properties:`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{ 
  contactId: String,
  name: String,
  avatarSrc: String
}
`})}),`
`,e.jsxs(t.p,{children:[`There can be additional properties that override the mention plugin and
more details can be seen here: `,e.jsx(t.a,{href:"https://tiptap.dev/api/utilities/suggestion",target:"_blank",rel:"nofollow noopener noreferrer",children:"Suggestion Tiptap utility"}),`.
If this mentionSuggestion Object prop is not supplied, the mention plugin is disabled by default.`]}),`
`,e.jsx(t.p,{children:"To see it in action type char '@' into rich editor With channel mentions."}),`
`,e.jsx(i,{children:e.jsx(o,{of:c})}),`
`,e.jsx(t.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"}),`
`,e.jsx(d,{}),`
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
`})}),`
`,e.jsx(t.h3,{id:"with-mentionsuggestion",children:"With mentionSuggestion"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<dt-rich-text-editor
  :v-model="text"
  :input-aria-label="ariaLabel"
  :mention-suggestion="mentionSuggestion
/>
`})})]})}function ee(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{ee as default};
//# sourceMappingURL=rich_text_editor-9chDovNB.js.map
