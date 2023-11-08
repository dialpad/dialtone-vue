import{j as t}from"./jsx-runtime-67fe788a.js";import{M as r}from"./index-70095930.js";import{T as s}from"./tooltip.stories-58421896.js";import{u as i}from"./index-f0b58f08.js";import"./iframe-0082410a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-182ea7b7.js";import"./stack-a2f8fb18.js";import"./stack_constants-4f71ebff.js";import"./vue.esm-bundler-2fc8d911.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-54a66549.js";import"./utils-b9178890.js";import"./link_constants-8ea95ec9.js";function o(n){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",strong:"strong"},i(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:s}),`
`,t.jsx(e.h1,{id:"tooltip-directive",children:"Tooltip directive"}),`
`,t.jsxs(e.p,{children:[`A tooltip is a floating label that briefly explains an action, function, or an element.
Its content is exclusively text and shouldn't be vital information for users.
If customization other than placement is needed consider using `,t.jsx(e.code,{children:"dt-tooltip"})," component instead."]}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.p,{children:"Import the directive from dialtone-vue/directives"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { DtTooltipDirective } from "@dialpad/dialtone-vue/directives";
`})}),`
`,t.jsx(e.p,{children:"Install the directive into vue instance"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`Vue.use(DtTooltipDirective);
`})}),`
`,t.jsx(e.h3,{id:"default",children:"Default"}),`
`,t.jsxs(e.p,{children:["Default tooltip directive uses ",t.jsx(e.code,{children:"top"})," as default placement"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<dt-button v-dt-tooltip="Tooltip text">Placeholder button</dt-button>
`})}),`
`,t.jsx(e.h3,{id:"with-placement",children:"With Placement"}),`
`,t.jsxs(e.p,{children:[`It's possible to change the tooltip default placement with directive arguments,
possible values: `,t.jsx(e.strong,{children:`bottom, bottom-start, bottom-end, right, right-start, right-end, left, left-start, left-end,
top, top-start, top-end`}),"."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<dt-button v-dt-tooltip:bottom-start="Tooltip text">Placeholder button</dt-button>
`})})]})}function N(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?t.jsx(e,Object.assign({},n,{children:t.jsx(o,n)})):o(n)}export{N as default};
//# sourceMappingURL=tooltip-4b409c47.js.map
