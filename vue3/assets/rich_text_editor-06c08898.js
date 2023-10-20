import{j as e}from"./jsx-runtime-e1b1b78d.js";import{M as a,b as l,C as i,d as o,e as d}from"./index-bb94934d.js";import{R as h,D as p,W as c}from"./rich_text_editor.stories-885d2f11.js";import{u as s}from"./index-2b26341e.js";import"./iframe-3f821ddb.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-3d124f1b.js";import"./vue.esm-bundler-29004354.js";import"./utils-810cfe6f.js";import"./rich_text_editor-2603a450.js";import"./emoji-4afd04d3.js";import"./icon_constants-c8c2c53a.js";import"./emoji-87314816.js";import"./index-40c4ee4c.js";import"./skeleton-121fe313.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./list_item-c9fc9067.js";import"./icon-bd97a3a1.js";import"./item_layout-5775cee2.js";import"./emoji_text_wrapper-fb7e3f04.js";import"./DtEmojiPicker-0fba6d99.js";import"./input-9cfa0723.js";import"./validation_messages-44c39e35.js";import"./input-cd46f3c8.js";import"./tab_group-203d7ffb.js";import"./tab-26661188.js";import"./button-0ee7bf53.js";import"./link_constants-8ea95ec9.js";import"./tooltip-2c164916.js";import"./tippy_utils-352d0d4a.js";import"./lazy_show-01e22690.js";import"./stack-9b99da45.js";import"./link-eb563172.js";import"./avatar-2ff91fa9.js";import"./presence-c56ebcc9.js";function r(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",a:"a",h4:"h4",pre:"pre"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
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
`})})]})}function $(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{$ as default};
//# sourceMappingURL=rich_text_editor-06c08898.js.map
