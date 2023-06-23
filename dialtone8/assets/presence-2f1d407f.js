import{j as e}from"./jsx-runtime-7fe4ace4.js";import{M as c,S as l,d as i,e as a,f as d}from"./index-c910c8e5.js";import{P as h,D as p,V as x}from"./presence.stories-a8661d02.js";import{u as o}from"./index-89c78a91.js";import"./iframe-10e3ba9b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-31ede21d.js";import"./vue.esm-ba2ca387.js";import"./presence-16e0b832.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function T(s={}){const{wrapper:r}=Object.assign({},o(),s.components);return r?e.jsx(r,Object.assign({},s,{children:e.jsx(t,{})})):t();function t(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",a:"a"},o(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(n.h1,{id:"presence",children:"Presence"}),`
`,e.jsx(l,{children:e.jsx(n.p,{children:"This component displays a presence circle indicating the current status."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.p,{children:["Presence can be initialized by passing ",e.jsx(n.code,{children:"presence"}),` prop that can take one of 4 values: 'away', 'active', 'offline', and 'busy'.
By default, it's set to 'active'.`]}),`
`,e.jsx(i,{children:e.jsx(a,{of:p})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{children:e.jsx(a,{of:x})}),`
`,e.jsx(n.h2,{id:"props-slots--events",children:"Props, Slots & Events"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtPresence } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"with-presence-prop",children:"With Presence Prop"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-presence
  presence="active"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-sr-text-prop",children:"With SR text prop"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-presence
  presence="active"
  sr-text="User Presence"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-theme-prop",children:"With Theme prop"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-presence
  theme="default"
/>
`})}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The Presence component is purely visual by default, and will not be read out to a screen reader."}),`
`,e.jsxs(n.p,{children:["If you'd like for a SR to read out any changes to Presence, you should pass the ",e.jsx(n.code,{children:"srText"}),` prop so it is
read by AT and set the `,e.jsx(n.code,{children:"aria-live"}),` attribute to either 'polite' or 'assertive'.
Even though the component has a role of "status" to assist SR apps in reading out status changes, its default
'aria-live' value is set to 'off'.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22",target:"_blank",rel:"nofollow noopener noreferrer",children:"See W3C guidelines"}),`
for more information.`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-presence
  presence="active"
  sr-text="User {{ user }} is active"
/>
`})}),`
`,e.jsx(n.p,{children:"Abbreviations / symbols should be read out in full for voiceover / screen readers."})]})}}export{T as default};
//# sourceMappingURL=presence-2f1d407f.js.map
