import{j as e}from"./jsx-dev-runtime-fd7ffca6.js";import{M as t,S as o,C as r,a as i,b as a}from"./index-550a7216.js";import{K as m,D as c,V as d}from"./keyboard_shortcut.stories-ff148787.js";import{u}from"./index-63a595e0.js";import"./iframe-3c15976c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./keyboard_shortcut-311cccdc.js";import"./icon-49f0abb3.js";import"./icon_constants-7577383f.js";import"./storybook_utils-be1af372.js";import"./vue.esm-eff6e72e.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function l(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code"},u(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{of:m},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"keyboard-shortcut",children:"Keyboard Shortcut"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(n.p,{children:"This component displays a visual representation of a keyboard shortcut to the user."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Keyboard shortcut outlines a key combination with a border to represent a keyboard shortcut. '+'
will be rendered as an icon rather than text. Supported symbol tags can be used in the shortcut
prop, see the `,e.jsxDEV(n.a,{href:"#props-slots--events",children:"Props, Slots & Events section"},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:15},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(r,{children:e.jsxDEV(i,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(r,{children:e.jsxDEV(i,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"props-slots--events",children:"Props, Slots & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(a,{},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:"Commands shown should always be device specific (different systems may require a different shortcut combination)."},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Commonly used in list item, tooltips."},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Don't use actual “+” key as a shortcut."},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Avoid using browser or operating system shortcuts, Control+P is print for example."},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtKeyboardShortcut } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"inverted-style",children:"Inverted Style"},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-keyboard-shortcut
  inverted
  shortcut="{win}+{arrow-right}+{arrow-left}+{arrow-up}+{arrow-down}+E+B"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default-shortcut",children:"Default Shortcut"},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-keyboard-shortcut
  shortcut="Option+{cmd}+{win}+Shift+{arrow-up}"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"shortcut-size-variation",children:"Shortcut size variation"},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-keyboard-shortcut
  class="d-fs-200"
  shortcut="{cmd}+Y"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"all-available-shortcut-aliases",children:"All available shortcut aliases"},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-keyboard-shortcut
  shortcut="{cmd}+{win}+{arrow-right}+{arrow-left}+{arrow-up}+{arrow-down}"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:74,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:74,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"inline-with-text-and-screen-reader-text",children:"Inline with text and screen reader text"},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`Press
<dt-keyboard-shortcut
  screen-reader-text="Ctrl and F5"
  shortcut="Ctrl + F5"
/>
to hard refresh the page.
`},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:91,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Keyboard shortcuts should be visible to sighted users and made available to assistive technology.
This keyboard shortcut component is purely visual by default, and will not read out to a screen reader.`},void 0,!1,{fileName:"<source.js>",lineNumber:93,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts",target:"_blank",rel:"nofollow noopener noreferrer",children:"aria-keyshortcuts"},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this),`
should be used on the anchor element of the keyboard shortcut to indicate the existence of it to assistive
technology.`]},void 0,!0,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["If your keyboard shortcut is ",e.jsxDEV(n.a,{href:"#variants",children:"inline with text"},void 0,!1,{fileName:"<source.js>",lineNumber:100,columnNumber:30},this),`, you can set the screenReaderText prop so it is
read by AT.`]},void 0,!0,{fileName:"<source.js>",lineNumber:100,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Example:"},void 0,!1,{fileName:"<source.js>",lineNumber:103,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`// This button can be activated by pressing control+shift+v, let's indicate that
// to the screenreader by using aria-keyshortcuts.
<button aria-keyshortcuts="control+shift+v">Press Me</button>
`},void 0,!1,{fileName:"<source.js>",lineNumber:105,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:105,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Abbreviations / symbols should be read out in full for voiceover / screen readers."},void 0,!1,{fileName:"<source.js>",lineNumber:111,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"references",children:"References"},void 0,!1,{fileName:"<source.js>",lineNumber:113,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:e.jsxDEV(n.a,{href:"http://xahlee.info/comp/unicode_computing_symbols.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Keyboard Symbols"},void 0,!1,{fileName:"<source.js>",lineNumber:115,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:115,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:e.jsxDEV(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts",target:"_blank",rel:"nofollow noopener noreferrer",children:"aria-keyshortcuts"},void 0,!1,{fileName:"<source.js>",lineNumber:116,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:116,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:115,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function K(s={}){const{wrapper:n}=Object.assign({},u(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(l,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(s)}export{K as default};
//# sourceMappingURL=keyboard_shortcut-526fe40f.js.map
