import{j as e}from"./jsx-runtime-4117fb21.js";import{M as d,S as l,C as a,a as n,b as c}from"./index-ac30682a.js";import{A as h,D as x,I as m,a as j,P as p}from"./avatar.stories-54ebc8bb.js";import{u as o}from"./index-573dea44.js";import"./iframe-8c6686ab.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-d0fbf3aa.js";import"./vue.esm-bundler-66d1e5de.js";import"./utils-f0a1a91d.js";import"./avatar-0908c2a3.js";import"./presence-00841f78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-77367f66.js";import"./icon_constants-1daaa04c.js";import"./v_html-689a3add.js";import"./person-13c0d6d2.js";function O(i={}){const{wrapper:r}=Object.assign({},o(),i.components);return r?e.jsx(r,Object.assign({},i,{children:e.jsx(t,{})})):t();function t(){const s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",h4:"h4"},o(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(s.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx(l,{children:e.jsx(s.p,{children:"An avatar is a visual representation of a user or object."})}),`
`,e.jsx(s.h2,{id:"image",children:"Image"}),`
`,e.jsx(a,{children:e.jsx(n,{of:x})}),`
`,e.jsx(s.h2,{id:"icon",children:"Icon"}),`
`,e.jsx(a,{children:e.jsx(n,{of:m})}),`
`,e.jsx(s.h2,{id:"initials",children:"Initials"}),`
`,e.jsx(a,{children:e.jsx(n,{of:j})}),`
`,e.jsx(s.h2,{id:"presence",children:"Presence"}),`
`,e.jsx(a,{children:e.jsx(n,{of:p})}),`
`,e.jsx(s.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"import",children:"Import"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { DtAvatar } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(s.h3,{id:"valid-slot-markup",children:"Valid Slot Markup"}),`
`,e.jsxs(s.p,{children:["There are three valid types of markup you can pass into an avatar slot. ",e.jsx(s.code,{children:"<img>"}),` for custom images,
`,e.jsx(s.code,{children:"<svg>"})," for icons, and raw text for initials."]}),`
`,e.jsx(s.h4,{id:"image-1",children:"Image"}),`
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
`})})]})}}export{O as default};
//# sourceMappingURL=avatar-3f90a3d2.js.map