import{j as e}from"./jsx-runtime-5f58aec1.js";import{M as o,b as c,C as r,d as t,e as l}from"./index-3ec5a54e.js";import{P as d,D as h,V as p}from"./presence.stories-e724f134.js";import{u as a}from"./index-c3f71ecd.js";import"./iframe-9f91601e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-0b506883.js";import"./vue.esm-ba2ca387.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function i(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",a:"a"},a(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"presence",children:"Presence"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:"This component displays a presence circle indicating the current status."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.p,{children:["Presence can be initialized by passing ",e.jsx(n.code,{children:"presence"}),` prop that can take one of 4 values: 'away', 'active', 'offline', and 'busy'.
By default, it's set to 'active'.`]}),`
`,e.jsx(r,{children:e.jsx(t,{of:h})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(r,{children:e.jsx(t,{of:p})}),`
`,e.jsx(n.h2,{id:"props-slots--events",children:"Props, Slots & Events"}),`
`,e.jsx(l,{}),`
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
`,e.jsx(n.p,{children:"Abbreviations / symbols should be read out in full for voiceover / screen readers."})]})}function D(s={}){const{wrapper:n}=Object.assign({},a(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}export{D as default};
//# sourceMappingURL=presence-36f9386c.js.map
