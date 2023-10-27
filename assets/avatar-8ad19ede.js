import{j as e}from"./jsx-runtime-d5e0fb92.js";import{M as t,b as o,C as i,d as s,e as c}from"./index-78c7c729.js";import{A as d,D as h,V as m}from"./avatar.stories-485b6534.js";import{u as r}from"./index-44409fe1.js";import"./iframe-a0b75be2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-10cbe996.js";import"./utils-df639674.js";import"./vue.esm-ba2ca387.js";import"./avatar-12a1f47e.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-3954e466.js";import"./icon_constants-04cd91c2.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./avatar2-e5d57aa6.js";function l(a){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre"},r(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(n.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx(o,{children:e.jsx(n.p,{children:"An avatar is a visual representation of a user or object."})}),`
`,e.jsx(n.h2,{id:"default",children:"Default"}),`
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
`,e.jsx(i,{children:e.jsx(s,{of:h})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{children:e.jsx(s,{of:m})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtAvatar } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"image",children:"Image"}),`
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
`})}),`
`,e.jsx(n.h3,{id:"clickable",children:"Clickable"}),`
`,e.jsxs(n.p,{children:["If you need to create a clickable avatar you can set the ",e.jsx(n.code,{children:"clickable"}),` prop.
This will make the avatar a `,e.jsx("button",{}),` component, set some styling and will be navigable by keyboard.
In order for the clickable avatar to be accessible, you need to
either set `,e.jsx(n.code,{children:"full-name"}),", ",e.jsx(n.code,{children:"image-alt"})," or ",e.jsx(n.code,{children:"aria-label"})," attributes."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-avatar
  aria-label="some aria label"
  icon="user"
  clickable
</
`})})]})}function J(a={}){const{wrapper:n}=Object.assign({},r(),a.components);return n?e.jsx(n,Object.assign({},a,{children:e.jsx(l,a)})):l(a)}export{J as default};
//# sourceMappingURL=avatar-8ad19ede.js.map
