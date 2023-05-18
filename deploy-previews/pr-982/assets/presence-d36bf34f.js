import{j as e}from"./jsx-dev-runtime-fd110f00.js";import{M as m,S as a,C as i,a as r,b as o}from"./index-5cb7d22c.js";import{P as t,D as c,V as d}from"./presence.stories-2f5318ef.js";import{u}from"./index-042c3b1e.js";import"./iframe-c3c2d42b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-1311d48f.js";import"./vue.esm-eff6e72e.js";import"./presence-8bac0262.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function l(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",a:"a"},u(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(m,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"presence",children:"Presence"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(a,{children:e.jsxDEV(n.p,{children:"This component displays a presence circle indicating the current status."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Presence can be initialized by passing ",e.jsxDEV(n.code,{children:"presence"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:40},this),` prop that can take one of 4 values: 'away', 'active', 'offline', and 'busy'.
By default, it's set to 'active'.`]},void 0,!0,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(r,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(r,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"props-slots--events",children:"Props, Slots & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(o,{},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtPresence } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-presence-prop",children:"With Presence Prop"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-presence
  presence="active"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-sr-text-prop",children:"With SR text prop"},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-presence
  presence="active"
  sr-text="User Presence"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"with-theme-prop",children:"With Theme prop"},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-presence
  theme="default"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"The Presence component is purely visual by default, and will not be read out to a screen reader."},void 0,!1,{fileName:"<source.js>",lineNumber:67,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["If you'd like for a SR to read out any changes to Presence, you should pass the ",e.jsxDEV(n.code,{children:"srText"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:81},this),` prop so it is
read by AT and set the `,e.jsxDEV(n.code,{children:"aria-live"},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:24},this),` attribute to either 'polite' or 'assertive'.
Even though the component has a role of "status" to assist SR apps in reading out status changes, its default
'aria-live' value is set to 'off'.`]},void 0,!0,{fileName:"<source.js>",lineNumber:69,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.a,{href:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22",target:"_blank",rel:"nofollow noopener noreferrer",children:"See W3C guidelines"},void 0,!1,{fileName:"<source.js>",lineNumber:74,columnNumber:1},this),`
for more information.`]},void 0,!0,{fileName:"<source.js>",lineNumber:74,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Example:"},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-presence
  presence="active"
  sr-text="User {{ user }} is active"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Abbreviations / symbols should be read out in full for voiceover / screen readers."},void 0,!1,{fileName:"<source.js>",lineNumber:86,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function C(s={}){const{wrapper:n}=Object.assign({},u(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(l,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(s)}export{C as default};
//# sourceMappingURL=presence-d36bf34f.js.map
