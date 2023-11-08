import{j as n}from"./jsx-runtime-67fe788a.js";import{M as a,b as l,C as s,d as i,e as c}from"./index-70095930.js";import{B as d,D as h,V as u}from"./button.stories-9b5d9566.js";import{u as r}from"./index-f0b58f08.js";import"./iframe-0082410a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./button-54a66549.js";import"./vue.esm-bundler-2fc8d911.js";import"./utils-b9178890.js";import"./link_constants-8ea95ec9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-19ead0e1.js";import"./icon_constants-e5cbd7a1.js";import"./storybook_utils-182ea7b7.js";function o(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",blockquote:"blockquote",a:"a",h3:"h3",pre:"pre",code:"code",h4:"h4"},r(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:d}),`
`,n.jsx(t.h1,{id:"button",children:"Button"}),`
`,n.jsx(l,{children:n.jsx(t.p,{children:`A button is a UI element which allows users to take an action throughout the app.
It is important a button is identifiable, consistent, and communicates its actions clearly,
and is appropriately sized to its action.`})}),`
`,n.jsx(t.h2,{id:"styles",children:"Styles"}),`
`,n.jsx(t.p,{children:`Dialtone provides three levels of visual importance for buttons within three different visual styles.
The three levels of visual importance are:`}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Clear"}),`: This button communicates the least importance. It offers no background or border color.
It appears as a link with matching padding. This is typically used for secondary or
minimally important actions. This is the default importance level of all buttons.`]}),`
`]}),`
`,n.jsxs(t.li,{children:[`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Outlined"}),`: This button communicates slightly more importance than clear. It provides a border color,
but no background color.`]}),`
`]}),`
`,n.jsxs(t.li,{children:[`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Primary"}),`: This is the highest visual importance a button can have.
It provides a border and a background color. It is recommended
that only one button have the primary button style within a section or page.`]}),`
`]}),`
`]}),`
`,n.jsx(t.p,{children:"These button styles are provided in three visual styles:"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Default / Purple"}),": Our normal purple button colors."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Danger"}),": Buttons associated with potentially destructive actions. Appears as red."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Inverted"}),": For scenarios when you want to place a button on a non-white."]}),`
`]}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Please note"}),` that all button classes have hover, active, focus, and disabled states within them.
Specific classes are provided for the disabled state so this can be applied to objects that
aren't buttons (or can't use the disabled attribute).`]}),`
`]}),`
`,n.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsx(s,{children:n.jsx(i,{of:h})}),`
`,n.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(s,{children:n.jsx(i,{of:u})}),`
`,n.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(c,{}),`
`,n.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(t.p,{children:[`If you want the user to navigate to a new page or to a different section on the same page, use the
`,n.jsx(t.a,{href:"?path=/story/components-link--default",children:"Link component"}),`. Use buttons to trigger actions, such as "Search",
"Cancel", "Submit", etc.`]}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.h3,{id:"import",children:"Import"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-js",children:`import { DtButton } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(t.h3,{id:"default",children:"Default"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-button>
 Button
</dt-button>
`})}),`
`,n.jsx(t.h3,{id:"with-icon",children:"With icon"}),`
`,n.jsx(t.h4,{id:"automatic-icon-resizing",children:"Automatic icon resizing"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-button>
 Button
  <template #icon="{ iconSize }">
    <dt-icon :size="iconSize" name="user" />
  </template>
</dt-button>
`})}),`
`,n.jsx(t.h4,{id:"fixed-icon-size",children:"Fixed icon size"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-button>
 Button
  <template #icon>
    <dt-icon size="300" name="user" />
  </template>
</dt-button>
`})})]})}function O(e={}){const{wrapper:t}=Object.assign({},r(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(o,e)})):o(e)}export{O as default};
//# sourceMappingURL=button-0af154a0.js.map
