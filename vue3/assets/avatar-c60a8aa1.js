import{j as e}from"./jsx-runtime-9cd7a970.js";import{M as l,S as o,d as s,e as a,f as d}from"./index-dc8ded77.js";import{A as c,D as h,V as m}from"./avatar.stories-e9c73030.js";import{u as t}from"./index-0b54e59b.js";import"./iframe-5f6a7236.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./storybook_utils-b0336152.js";import"./vue.esm-bundler-06a6c133.js";import"./utils-135fe08f.js";import"./avatar-81e2efde.js";import"./presence-c5756a69.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-136e453c.js";import"./icon_constants-5440087a.js";function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre"},t(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx(o,{children:e.jsx(n.p,{children:"An avatar is a visual representation of a user or object."})}),`
`,e.jsx(n.h2,{id:"image",children:"Image"}),`
`,e.jsxs(n.p,{children:[`The Avatar component is designed to prioritize different sources for content display.
It will sequentially check for the availability of an image source `,e.jsx(n.code,{children:"image-src"})," or an icon name ",e.jsx(n.code,{children:"icon-name"}),`.
If both properties are not provided, the avatar will extract and display initials from the full name `,e.jsx(n.code,{children:"full-name"}),`,
the resulting initials are extracted using the following logic:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the string contains two or more words, the result will be the first character of every word capitalized e.g.:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'full-name: "Jaqueline Nackos"'})," will result in: ",e.jsx(n.code,{children:"JN"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["If the string contains only one word, the result will be the first two characters capitalized e.g:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'full-name: "Jaqueline"'})," will result in: ",e.jsx(n.code,{children:"JA"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'full-name: "10"'})," will result in: ",e.jsx(n.code,{children:"10"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"If full-name is not provided, the result will be an empty string."}),`
`]}),`
`,e.jsx(s,{children:e.jsx(a,{of:h})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{children:e.jsx(a,{of:m})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtAvatar } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"image-1",children:"Image"}),`
`,e.jsx(n.p,{children:`If image-src is not provided, or if image fails to load, the avatar will fall back to the initials extracted from the full-name.
By default, alt attribute of the image will be the full-name, this can be overridden via image-alt prop.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-avatar
  full-name="Jaqueline Nackos"
  image-src="/common/assets/person.png"
  image-alt="Person avatar"
/>
`})}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-avatar
  icon-name="person"
/>
`})}),`
`,e.jsx(n.h3,{id:"initials",children:"Initials"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-avatar
  full-name="person"
/>
`})}),`
`,e.jsx(n.h3,{id:"seeded",children:"Seeded"}),`
`,e.jsx(n.p,{children:`You may use a seed to make the randomly generated color be the same every time for that seed. This is useful
if you want users to always have the same color, just pass in their unique user ID as the seed.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Will always show the same colors for this seed.
<dt-avatar
  seed="X5G3D7D3DS3WL7"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-size",children:"With Size"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-avatar
  size="xs | sm | md | lg | xl"
/>
`})})]})}function C(i={}){const{wrapper:n}=Object.assign({},t(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(r,i)})):r(i)}export{C as default};
//# sourceMappingURL=avatar-c60a8aa1.js.map
