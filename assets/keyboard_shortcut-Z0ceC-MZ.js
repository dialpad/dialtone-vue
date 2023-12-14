import{j as e}from"./jsx-runtime-QReR3DfS.js";import{M as a,b as l,C as s,d as n,e as c}from"./index-DUL9Ioec.js";import{K as h,D as d,V as u}from"./keyboard_shortcut.stories-x_CEgJqZ.js";import{u as i}from"./index-gBHRzTTU.js";import"./iframe-B2TQZaYX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";import"./keyboard_shortcut-iyrrAu9g.js";import"./icon-GkF47-VR.js";import"./icon_constants-spQP7USY.js";import"./utils-E69eXbJV.js";import"./vue.esm-Wy6pS3yJ.js";import"./_plugin-vue2_normalizer-XBmYDgEh.js";import"./storybook_utils-XrTpeJKJ.js";function o(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(r.h1,{id:"keyboard-shortcut",children:"Keyboard Shortcut"}),`
`,e.jsx(l,{children:e.jsx(r.p,{children:"This component displays a visual representation of a keyboard shortcut to the user."})}),`
`,e.jsx(r.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(r.p,{children:[`Keyboard shortcut outlines a key combination with a border to represent a keyboard shortcut. '+'
will be rendered as an icon rather than text. Supported symbol tags can be used in the shortcut
prop, see the `,e.jsx(r.a,{href:"#props-slots--events",children:"Props, Slots & Events section"}),"."]}),`
`,e.jsx(s,{children:e.jsx(n,{of:d})}),`
`,e.jsx(r.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s,{children:e.jsx(n,{of:u})}),`
`,e.jsx(r.h2,{id:"props-slots--events",children:"Props, Slots & Events"}),`
`,e.jsx(c,{}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Commands shown should always be device specific (different systems may require a different shortcut combination)."}),`
`,e.jsx(r.li,{children:"Commonly used in list item, tooltips."}),`
`,e.jsx(r.li,{children:"Don't use actual “+” key as a shortcut."}),`
`,e.jsx(r.li,{children:"Avoid using browser or operating system shortcuts, Control+P is print for example."}),`
`]}),`
`,e.jsx(r.h3,{id:"import",children:"Import"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { DtKeyboardShortcut } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(r.h3,{id:"inverted-style",children:"Inverted Style"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<dt-keyboard-shortcut
  inverted
  shortcut="{win}+{arrow-right}+{arrow-left}+{arrow-up}+{arrow-down}+E+B"
/>
`})}),`
`,e.jsx(r.h3,{id:"default-shortcut",children:"Default Shortcut"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<dt-keyboard-shortcut
  shortcut="Option+{cmd}+{win}+Shift+{arrow-up}"
/>
`})}),`
`,e.jsx(r.h3,{id:"shortcut-size-variation",children:"Shortcut size variation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<dt-keyboard-shortcut
  class="d-fs-200"
  shortcut="{cmd}+Y"
/>
`})}),`
`,e.jsx(r.h3,{id:"all-available-shortcut-aliases",children:"All available shortcut aliases"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<dt-keyboard-shortcut
  shortcut="{cmd}+{win}+{arrow-right}+{arrow-left}+{arrow-up}+{arrow-down}"
/>
`})}),`
`,e.jsx(r.h3,{id:"inline-with-text-and-screen-reader-text",children:"Inline with text and screen reader text"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`Press
<dt-keyboard-shortcut
  screen-reader-text="Ctrl and F5"
  shortcut="Ctrl + F5"
/>
to hard refresh the page.
`})}),`
`,e.jsx(r.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(r.p,{children:`Keyboard shortcuts should be visible to sighted users and made available to assistive technology.
This keyboard shortcut component is purely visual by default, and will not read out to a screen reader.`}),`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts",target:"_blank",rel:"nofollow noopener noreferrer",children:"aria-keyshortcuts"}),`
should be used on the anchor element of the keyboard shortcut to indicate the existence of it to assistive
technology.`]}),`
`,e.jsxs(r.p,{children:["If your keyboard shortcut is ",e.jsx(r.a,{href:"#variants",children:"inline with text"}),`, you can set the screenReaderText prop so it is
read by AT.`]}),`
`,e.jsx(r.p,{children:"Example:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`// This button can be activated by pressing control+shift+v, let's indicate that
// to the screenreader by using aria-keyshortcuts.
<button aria-keyshortcuts="control+shift+v">Press Me</button>
`})}),`
`,e.jsx(r.p,{children:"Abbreviations / symbols should be read out in full for voiceover / screen readers."}),`
`,e.jsx(r.h3,{id:"references",children:"References"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"http://xahlee.info/comp/unicode_computing_symbols.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Keyboard Symbols"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts",target:"_blank",rel:"nofollow noopener noreferrer",children:"aria-keyshortcuts"})}),`
`]})]})}function N(t={}){const{wrapper:r}=Object.assign({},i(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{N as default};
//# sourceMappingURL=keyboard_shortcut-Z0ceC-MZ.js.map
