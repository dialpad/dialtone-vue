import{j as e}from"./jsx-dev-runtime-b2facc20.js";import{M as t,S as o,d as s,e as r,f as m}from"./index-70731838.js";import{B as a,D as c,V as d}from"./button.stories-34f8d6af.js";import{u as l}from"./index-6f528ba7.js";import"./iframe-a8b19232.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./button-1062b4f5.js";import"./vue.esm-bundler-a9a971fb.js";import"./utils-48d15f2c.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-f7e2321d.js";import"./icon_constants-a25b1b68.js";import"./storybook_utils-87f6670b.js";function u(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",blockquote:"blockquote",a:"a",h3:"h3",pre:"pre",code:"code"},l(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"button",children:"Button"},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(n.p,{children:`A button is a UI element which allows users to take an action throughout the app.
It is important a button is identifiable, consistent, and communicates its actions clearly,
and is appropriately sized to its action.`},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"styles",children:"Styles"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Dialtone provides three levels of visual importance for buttons within three different visual styles.
The three levels of visual importance are:`},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.ol,{children:[`
`,e.jsxDEV(n.li,{children:[`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.strong,{children:"Clear"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:4},this),`: This button communicates the least importance. It offers no background or border color.
It appears as a link with matching padding. This is typically used for secondary or
minimally important actions. This is the default importance level of all buttons.`]},void 0,!0,{fileName:"<source.js>",lineNumber:18,columnNumber:4},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.strong,{children:"Outlined"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:4},this),`: This button communicates slightly more importance than clear. It provides a border color,
but no background color.`]},void 0,!0,{fileName:"<source.js>",lineNumber:22,columnNumber:4},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.strong,{children:"Primary"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:4},this),`: This is the highest visual importance a button can have.
It provides a border and a background color. It is recommended
that only one button have the primary button style within a section or page.`]},void 0,!0,{fileName:"<source.js>",lineNumber:25,columnNumber:4},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"These button styles are provided in three visual styles:"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.ol,{children:[`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"Default / Purple"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:4},this),": Our normal purple button colors."]},void 0,!0,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"Danger"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:4},this),": Buttons associated with potentially destructive actions. Appears as red."]},void 0,!0,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"Inverted"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:4},this),": For scenarios when you want to place a button on a non-white."]},void 0,!0,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.blockquote,{children:[`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.strong,{children:"Please note"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:3},this),` that all button classes have hover, active, focus, and disabled states within them.
Specific classes are provided for the disabled state so this can be applied to objects that
aren't buttons (or can't use the disabled attribute).`]},void 0,!0,{fileName:"<source.js>",lineNumber:35,columnNumber:3},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(r,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(r,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`If you want the user to navigate to a new page or to a different section on the same page, use the
`,e.jsxDEV(n.a,{href:"?path=/story/components-link--default",children:"Link component"},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`. Use buttons to trigger actions, such as "Search",
"Cancel", "Submit", etc.`]},void 0,!0,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:61,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`import { DtButton } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-button>
 Button
</dt-button>
`},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function M(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(u,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):u(i)}export{M as default};
//# sourceMappingURL=button-c3c19fe9.js.map