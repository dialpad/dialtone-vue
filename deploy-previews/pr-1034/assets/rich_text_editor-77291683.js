import{j as t}from"./jsx-runtime-405d8cc5.js";import{M as r,S as a,C as l,a as c,b as h}from"./index-43476825.js";import{R as d,D as p}from"./rich_text_editor.stories-cf02d46e.js";import{u as o}from"./index-33446e63.js";import"./iframe-42a96284.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-bdc1a785.js";import"./vue.esm-bundler-e62bdd6b.js";import"./utils-46af4dbd.js";import"./rich_text_editor-b35f22d7.js";import"./tippy.esm-65135068.js";import"./_plugin-vue_export-helper-c27b6911.js";function L(n={}){const{wrapper:i}=Object.assign({},o(),n.components);return i?t.jsx(i,Object.assign({},n,{children:t.jsx(s,{})})):s();function s(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},o(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:d}),`
`,t.jsx(e.h1,{id:"rich-text-editor",children:"Rich Text Editor"}),`
`,t.jsx(a,{children:t.jsx(e.p,{children:`A rich text editor is a component that allows users to format text with a
variety of styles. It enables also mixing text with custom components built as
extensions, such as links and user mentions.`})}),`
`,t.jsx("div",{class:"d-notice d-notice--info d-wmx100p",children:t.jsxs(e.p,{children:[t.jsx("b",{children:"NOTICE:"}),` This component is not a part of Dialtone-Vue core package and can
only be used by other Dialtone components. To keep this code out of the
Dialtone-vue core any Dialtone component that uses this should be built into
their separate build targets.`]})}),`
`,t.jsx(e.h2,{id:"base-style",children:"Base Style"}),`
`,t.jsx(e.p,{children:`The editor itself is without any styling and the intention is to wrap it with
another component, such as Message Input, that provides the UI.`}),`
`,t.jsx(l,{children:t.jsx(c,{of:p})}),`
`,t.jsx(e.h2,{id:"slots-props-and-events",children:"Slots, Props and Events"}),`
`,t.jsx(h,{}),`
`,t.jsx(e.h2,{id:"usage-internal-only",children:"Usage (internal only)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { DtRichTextEditor } from '@components/rich_text_editor';
`})}),`
`,t.jsx(e.h3,{id:"default",children:"Default"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<dt-rich-text-editor
  :v-model="text"
  :input-aria-label="ariaLabel"
/>
`})}),`
`,t.jsx(e.h3,{id:"with-links",children:"With Links"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<dt-rich-text-editor
  :v-model="text"
  :input-aria-label="ariaLabel"
  link
/>
`})})]})}}export{L as default};
//# sourceMappingURL=rich_text_editor-77291683.js.map
