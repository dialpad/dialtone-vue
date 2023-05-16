import{j as e}from"./jsx-dev-runtime-5ffe3b93.js";import{M as a,S as m,C as i,a as l,b as d}from"./index-892f0169.js";import{A as o,D as t,I as c,a as f,P as N}from"./avatar.stories-cb3cd024.js";import{u}from"./index-80dd0156.js";import"./iframe-74d66112.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./storybook_utils-58c64c5e.js";import"./vue.esm-eff6e72e.js";import"./avatar-a1a7d6f1.js";import"./presence-8bac0262.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-525487a4.js";import"./icon_constants-0085b0a1.js";import"./person-13c0d6d2.js";function r(n){const s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",h4:"h4"},u(),n.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:o},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,e.jsxDEV(s.h1,{id:"avatar",children:"Avatar"},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(s.p,{children:"An avatar is a visual representation of a user or object."},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:12,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"icon",children:"Icon"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"initials",children:"Initials"},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:f},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"presence",children:"Presence"},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:N},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(d,{},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(s.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(s.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-jsx",children:`import { DtAvatar } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(s.h3,{id:"valid-slot-markup",children:"Valid Slot Markup"},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`,e.jsxDEV(s.p,{children:["There are three valid types of markup you can pass into an avatar slot. ",e.jsxDEV(s.code,{children:"<img>"},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:73},this),` for custom images,
`,e.jsxDEV(s.code,{children:"<svg>"},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this)," for icons, and raw text for initials."]},void 0,!0,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this),`
`,e.jsxDEV(s.h4,{id:"image",children:"Image"},void 0,!1,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(s.p,{children:[e.jsxDEV(s.code,{children:"src"},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:1},this)," and ",e.jsxDEV(s.code,{children:"alt"},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:11},this)," are required attributes for image avatars"]},void 0,!0,{fileName:"<source.js>",lineNumber:55,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-jsx",children:`<dt-avatar>
  <img src="/path/to/image" alt="image alt text">
</dt-avatar>
`},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(s.h4,{id:"svg-with-dialtone-icon",children:"Svg (with dialtone icon)"},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-jsx",children:`<dt-avatar>
  <icon-dialpad-glyph/>
</dt-avatar>
`},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:1},this),`
`,e.jsxDEV(s.h4,{id:"svg",children:"Svg"},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-jsx",children:`<dt-avatar>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10H9V15H15V10H19L12 3L5 10Z" fill="black"/>
    <path d="M5 20V18H19V20H5Z" fill="black"/>
  </svg>
</dt-avatar>
`},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this),`
`,e.jsxDEV(s.h4,{id:"with-raw-text-initials",children:"With Raw Text (initials)"},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-jsx",children:`<dt-avatar>
  DP
</dt-avatar>
`},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this),`
`,e.jsxDEV(s.h3,{id:"seeded",children:"Seeded"},void 0,!1,{fileName:"<source.js>",lineNumber:90,columnNumber:1},this),`
`,e.jsxDEV(s.p,{children:`You may use a seed to make the randomly generated colors be the same every time for that seed. This is useful
if you want users to always have the same color, just pass in their unique user ID as the seed.`},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-jsx",children:`// Will always show the same colors for this seed.
<dt-avatar
  seed="X5G3D7D3DS3WL7"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:1},this),`
`,e.jsxDEV(s.h3,{id:"with-size",children:"With Size"},void 0,!1,{fileName:"<source.js>",lineNumber:102,columnNumber:1},this),`
`,e.jsxDEV(s.pre,{children:e.jsxDEV(s.code,{className:"language-jsx",children:`<dt-avatar
  size="xs | sm | md | lg | xl"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function L(n={}){const{wrapper:s}=Object.assign({},u(),n.components);return s?e.jsxDEV(s,Object.assign({},n,{children:e.jsxDEV(r,n,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):r(n)}export{L as default};
//# sourceMappingURL=avatar-2a449194.js.map
