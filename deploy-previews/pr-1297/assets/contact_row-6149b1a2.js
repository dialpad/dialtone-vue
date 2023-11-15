import{j as e}from"./jsx-dev-runtime-cea1dabb.js";import{M as a,b as t,C as i,d as r,e as m}from"./index-0f0aa3c8.js";import{C as o,D as c,V as d}from"./contact_row.stories-46b02019.js";import{u}from"./index-846d57b5.js";import"./iframe-4cc84e4b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-cf049d2e.js";import"./contact_row-3c630b9c.js";import"./general_row-e3254636.js";import"./badge-97fd7566.js";import"./icon-9e10092c.js";import"./icon_constants-e5cbd7a1.js";import"./utils-a1e592ea.js";import"./vue.esm-b7549171.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-61a95420.js";import"./link_constants-8ea95ec9.js";import"./tooltip-01671e36.js";import"./tippy_utils-e4c34e91.js";import"./lazy_show-0b3a0cf0.js";import"./emoji_text_wrapper-31aca598.js";import"./emoji-7cd48c1b.js";import"./emoji-e75a4e8c.js";import"./skeleton-e82601aa.js";import"./avatar-12012baa.js";import"./presence-d4f38341.js";import"./stack-64ff0684.js";import"./stack_constants-4f71ebff.js";import"./avatar2-e5d57aa6.js";function l(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},u(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:o},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function H(s={}){const{wrapper:n}=Object.assign({},u(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(l,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(s)}export{H as default};
//# sourceMappingURL=contact_row-6149b1a2.js.map