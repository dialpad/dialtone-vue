import{j as e}from"./jsx-runtime-72761ca2.js";import{M as a,S as m,d as n,e as r,f as p}from"./index-e24b55ab.js";import{E as d,D as c,V as l}from"./emoji_text_wrapper.stories-66f9a1f2.js";import{u as s}from"./index-cb6b3689.js";import"./iframe-d14cd55a.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./storybook_utils-8dde5fa6.js";import"./vue.esm-bundler-400586b0.js";import"./utils-0b5636ec.js";import"./icon_constants-1cfbd16e.js";import"./emoji_text_wrapper-84a01c0b.js";import"./emoji-34887e7c.js";import"./emoji-ed35ed1d.js";import"./index-40c4ee4c.js";import"./skeleton-f32c2142.js";import"./_plugin-vue_export-helper-c27b6911.js";function o(i){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",strong:"strong",a:"a"},s(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(t.h1,{id:"dtemojitextwrapper",children:"DtEmojiTextWrapper"}),`
`,e.jsx(m,{children:e.jsx(t.p,{children:"Wrapper to find and replace shortcodes like :smile: or unicode chars such as 😄 with our custom Emojis implementation."})}),`
`,e.jsx(n,{children:e.jsx(r,{of:c})}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n,{children:e.jsx(r,{of:l})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`// Note you must import from @dialpad/dialtone-vue/emoji. The emoji module is not included in the main
// @dialpad/dialtone-vue package due to it's large size. You may wish to consider dynamically importing
// the emoji module in your application.
import { DtEmojiTextWrapper } from '@dialpad/dialtone-vue/emoji';
`})}),`
`,e.jsx(t.h3,{id:"limitations",children:"Limitations"}),`
`,e.jsxs(t.p,{children:["Currently, this wrapper component ",e.jsx(t.strong,{children:"can't handle Vue components"}),", make sure to wrap only native HTML elements and text."]}),`
`,e.jsx(t.h3,{id:"with-shortcode",children:"With Shortcode"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-emoji-text-wrapper>
  Example text with bigger :smile: emoji.
</dt-emoji-text-wrapper>
`})}),`
`,e.jsx(t.h3,{id:"with-unicode-character",children:"With Unicode Character"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-emoji-text-wrapper>
  Example text with bigger 😄 emoji.
</dt-emoji-text-wrapper>
`})}),`
`,e.jsx(t.h3,{id:"with-nested-structure",children:"With Nested Structure"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-emoji-text-wrapper>
  <div>
    <button class="d-btn d-btn--primary">Example button :cry:</button>
    <div>
      <span>Another example 🧐</span>
    </div>
  </div>
</dt-emoji-text-wrapper>
`})}),`
`,e.jsx(t.h3,{id:"with-emoji-size",children:"With Emoji Size"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-emoji-text-wrapper size="500">
  ...
</dt-emoji-text-wrapper>
`})}),`
`,e.jsx(t.h2,{id:"with-custom-emoji",children:"With Custom Emoji"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"?path=/docs/components-emoji--custom-emoji#custom-emoji",children:"Set up the custom emoji"})," in order to render with this component."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<template>
  <dt-emoji-text-wrapper>
    custom emojis :octocat: :shipit:
  </dt-emoji-text-wrapper>
</template>

<script>
import { DtEmojiTextWrapper } from '@dialpad/dialtone-vue/emoji';

export default {
  components: { DtEmojiTextWrapper },
}
<\/script>
`})})]})}function L(i={}){const{wrapper:t}=Object.assign({},s(),i.components);return t?e.jsx(t,Object.assign({},i,{children:e.jsx(o,i)})):o(i)}export{L as default};
//# sourceMappingURL=emoji_text_wrapper-319965fa.js.map