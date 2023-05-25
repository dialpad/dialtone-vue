import{j as e}from"./jsx-runtime-dd9bcb79.js";import{M as d,S as o,C as n,a as i,b as l}from"./index-2a4f7930.js";import{A as c,D as h,I as x,a as j,P as m}from"./avatar.stories-0036e643.js";import{u as r}from"./index-66a99bd5.js";import"./iframe-6971320c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-d08f208b.js";import"./vue.esm-ba2ca387.js";import"./avatar-ee2e2b37.js";import"./presence-16e0b832.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-67ed9c61.js";import"./icon_constants-ed54bb0d.js";import"./person-13c0d6d2.js";function t(a){const s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",h4:"h4"},r(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(s.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx(o,{children:e.jsx(s.p,{children:"An avatar is a visual representation of a user or object."})}),`
`,e.jsx(s.h2,{id:"default",children:"Default"}),`
`,e.jsx(n,{children:e.jsx(i,{of:h})}),`
`,e.jsx(s.h2,{id:"icon",children:"Icon"}),`
`,e.jsx(n,{children:e.jsx(i,{of:x})}),`
`,e.jsx(s.h2,{id:"initials",children:"Initials"}),`
`,e.jsx(n,{children:e.jsx(i,{of:j})}),`
`,e.jsx(s.h2,{id:"presence",children:"Presence"}),`
`,e.jsx(n,{children:e.jsx(i,{of:m})}),`
`,e.jsx(s.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"import",children:"Import"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { DtAvatar } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(s.h3,{id:"valid-slot-markup",children:"Valid Slot Markup"}),`
`,e.jsxs(s.p,{children:["There are three valid types of markup you can pass into an avatar slot. ",e.jsx(s.code,{children:"<img>"}),` for custom images,
`,e.jsx(s.code,{children:"<svg>"})," for icons, and raw text for initials."]}),`
`,e.jsx(s.h4,{id:"image",children:"Image"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"src"})," and ",e.jsx(s.code,{children:"alt"})," are required attributes for image avatars"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<dt-avatar>
  <img src="/path/to/image" alt="image alt text">
</dt-avatar>
`})}),`
`,e.jsx(s.h4,{id:"svg-with-dialtone-icon",children:"Svg (with dialtone icon)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<dt-avatar>
  <icon-dialpad-glyph/>
</dt-avatar>
`})}),`
`,e.jsx(s.h4,{id:"svg",children:"Svg"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<dt-avatar>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10H9V15H15V10H19L12 3L5 10Z" fill="black"/>
    <path d="M5 20V18H19V20H5Z" fill="black"/>
  </svg>
</dt-avatar>
`})}),`
`,e.jsx(s.h4,{id:"with-raw-text-initials",children:"With Raw Text (initials)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<dt-avatar>
  DP
</dt-avatar>
`})}),`
`,e.jsx(s.h3,{id:"seeded",children:"Seeded"}),`
`,e.jsx(s.p,{children:`You may use a seed to make the randomly generated color be the same every time for that seed. This is useful
if you want users to always have the same color, just pass in their unique user ID as the seed.`}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`// Will always show the same colors for this seed.
<dt-avatar
  seed="X5G3D7D3DS3WL7"
/>
`})}),`
`,e.jsx(s.h3,{id:"with-size",children:"With Size"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`<dt-avatar
  size="xs | sm | md | lg | xl"
/>
`})})]})}function W(a={}){const{wrapper:s}=Object.assign({},r(),a.components);return s?e.jsx(s,Object.assign({},a,{children:e.jsx(t,a)})):t(a)}export{W as default};
//# sourceMappingURL=avatar-cee01998.js.map
