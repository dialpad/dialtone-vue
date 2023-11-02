import{j as e}from"./jsx-dev-runtime-7aab7931.js";import{M as a,b as t,C as i,d as r,e as m}from"./index-ddb360e9.js";import{C as o,D as c,V as d}from"./contact_row.stories-560a9224.js";import{u}from"./index-5104f5b5.js";import"./iframe-c143edcd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-1ccaacc9.js";import"./vue.esm-bundler-807df745.js";import"./utils-491d6e59.js";import"./contact_row-62a68691.js";import"./general_row-841ab23b.js";import"./badge-03a6bcd2.js";import"./icon-73833f08.js";import"./icon_constants-729afbe2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-cf0b13d0.js";import"./link_constants-8ea95ec9.js";import"./tooltip-98989c43.js";import"./tippy_utils-89aa4eb5.js";import"./lazy_show-a8336f86.js";import"./emoji_text_wrapper-624eb520.js";import"./emoji-2fc1cb6c.js";import"./emoji-87314816.js";import"./index-40c4ee4c.js";import"./skeleton-36f31f07.js";import"./avatar-0d321951.js";import"./presence-313305f6.js";import"./stack-987140d6.js";import"./stack_constants-4f71ebff.js";import"./avatar2-e5d57aa6.js";function l(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},u(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:o},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"leftbar-contact-row",children:"Leftbar Contact Row"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(t,{children:e.jsxDEV(n.p,{children:"Displays the row for one specific contact."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(r,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(r,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRecipeContactRow } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default-behavior",children:"Default behavior"},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-group-row
  name="Jaqueline Nackos"
  avatar-src="/static/media/../common/assets/person.png"
  call-button-tooltip="Call"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-user-status",children:"With user status"},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-contact-row
  name="Jaqueline Nackos"
  avatar-src="/static/media/../common/assets/person.png"
  user-status="Good Morning! :smile:"
  call-button-tooltip="Call"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-presence",children:"With presence"},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-contact-row
  name="Jaqueline Nackos"
  avatar-src="/static/media/../common/assets/person.png"
  avatar-presence="away"
  presence-text="Away"
  call-button-tooltip="Call"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-unread-count",children:"With unread count"},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-contact-row
  name="Jaqueline Nackos"
  :avatar-src="defaultImage"
  unread-count="5"
  unread-count-tooltip="55 unread messages"
  :has-unreads="true"
  call-button-tooltip="Call"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"selected",children:"Selected"},void 0,!1,{fileName:"<source.js>",lineNumber:83,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-contact-row
  name="Jaqueline Nackos"
  :avatar-src="defaultImage"
  :selected="true"
  call-button-tooltip="Call"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:85,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:85,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-initial",children:"With initial"},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-contact-row
  name="Jaqueline Nackos"
  call-button-tooltip="Call"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function K(s={}){const{wrapper:n}=Object.assign({},u(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(l,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(s)}export{K as default};
//# sourceMappingURL=contact_row-b4be3ffe.js.map
