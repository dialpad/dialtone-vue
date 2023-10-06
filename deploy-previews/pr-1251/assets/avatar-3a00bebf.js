import{j as e}from"./jsx-dev-runtime-d6ff6535.js";import{M as a,b as m,C as s,d as l,e as o}from"./index-003af251.js";import{A as c,D as t,V as d}from"./avatar.stories-42bd9ab4.js";import{u}from"./index-68e0b8ad.js";import"./iframe-8fb6b10e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-1aebbd64.js";import"./vue.esm-eff6e72e.js";import"./avatar-0487eddb.js";import"./presence-d4f38341.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-8e6c79ec.js";import"./icon_constants-79465167.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./avatar2-e5d57aa6.js";function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre"},u(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"avatar",children:"Avatar"},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(n.p,{children:"An avatar is a visual representation of a user or object."},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:12,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`The Avatar component is designed to prioritize different sources for content display.
It will sequentially check for the availability of an image source `,e.jsxDEV(n.code,{children:"image-src"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:68},this)," or an icon name ",e.jsxDEV(n.code,{children:"icon-name"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:96},this),`.
If both properties are not provided, the avatar will extract and display initials from the full name `,e.jsxDEV(n.code,{children:"full-name"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:102},this),`,
the resulting initials are extracted using the following logic:`]},void 0,!0,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:["If the string contains two or more words, the result will be the first character of every word capitalized e.g.:",`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.code,{children:'full-name: "Jaqueline Nackos"'},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:5},this)," will result in: ",e.jsxDEV(n.code,{children:"JN"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:53},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:["If the string contains only one word, the result will be the first two characters capitalized e.g:",`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.code,{children:'full-name: "Jaqueline"'},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:5},this)," will result in: ",e.jsxDEV(n.code,{children:"JA"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:46},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:22,columnNumber:3},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.code,{children:'full-name: "10"'},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:5},this)," will result in: ",e.jsxDEV(n.code,{children:"10"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:39},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:23,columnNumber:3},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:22,columnNumber:3},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"If full-name is not provided, the result will be an empty string."},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(o,{},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtAvatar } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"image",children:"Image"},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`If image-src is not provided, or if image fails to load, the avatar will fall back to the initials extracted from the full-name.
By default, alt attribute of the image will be the full-name, this can be overridden via image-alt prop.`},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-avatar
  full-name="Jaqueline Nackos"
  image-src="/common/assets/person.png"
  image-alt="Person avatar"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"icon",children:"Icon"},void 0,!1,{fileName:"<source.js>",lineNumber:61,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-avatar
  icon-name="person"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"initials",children:"Initials"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-avatar
  full-name="person"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"seeded",children:"Seeded"},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`You may use a seed to make the randomly generated color be the same every time for that seed. This is useful
if you want users to always have the same color, just pass in their unique user ID as the seed.`},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`// Will always show the same colors for this seed.
<dt-avatar
  seed="X5G3D7D3DS3WL7"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-size",children:"With Size"},void 0,!1,{fileName:"<source.js>",lineNumber:89,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-avatar
  size="xs | sm | md | lg | xl"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:91,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:91,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"clickable",children:"Clickable"},void 0,!1,{fileName:"<source.js>",lineNumber:97,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["If you need to create a clickable avatar you can set the ",e.jsxDEV(n.code,{children:"clickable"},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:58},this),` prop.
This will make the avatar a `,e.jsxDEV("button",{},void 0,!1,{fileName:"<source.js>",lineNumber:100,columnNumber:29},this),` component, set some styling and will be navigable by keyboard.
In order for the clickable avatar to be accessible, you need to
either set `,e.jsxDEV(n.code,{children:"full-name"},void 0,!1,{fileName:"<source.js>",lineNumber:102,columnNumber:12},this),", ",e.jsxDEV(n.code,{children:"image-alt"},void 0,!1,{fileName:"<source.js>",lineNumber:102,columnNumber:25},this)," or ",e.jsxDEV(n.code,{children:"aria-label"},void 0,!1,{fileName:"<source.js>",lineNumber:102,columnNumber:40},this)," attributes."]},void 0,!0,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-avatar
  aria-label="some aria label"
  icon="user"
  clickable
</
`},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function z(i={}){const{wrapper:n}=Object.assign({},u(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(r,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):r(i)}export{z as default};
//# sourceMappingURL=avatar-3a00bebf.js.map
