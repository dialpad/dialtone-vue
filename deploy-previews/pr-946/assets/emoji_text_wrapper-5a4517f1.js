import{j as e}from"./jsx-runtime-d0cfdf37.js";import{M as m,S as p,C as o,a as s,b as d}from"./index-7bea37cd.js";import{E as c}from"./emoji_text_wrapper.stories-c08e2c81.js";import{u as a}from"./index-ccdc0789.js";import"./iframe-d25afdb2.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-544d6d08.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-3c489ce7.js";import"./index-356e4a49.js";import"./_plugin-vue2_normalizer-bbedbd26.js";import"./vue.esm-eff6e72e.js";import"./icon_constants-5d71af87.js";import"./emoji_text_wrapper-affd6083.js";import"./emoji-f08bc975.js";import"./emoji-1f0f2b27.js";import"./skeleton-6bfe2369.js";function z(n={}){const{wrapper:i}=Object.assign({},a(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",strong:"strong",a:"a"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:c}),`
`,e.jsx(t.h1,{id:"dtemojitextwrapper",children:"DtEmojiTextWrapper"}),`
`,e.jsx(p,{children:e.jsx(t.p,{children:"Wrapper to find and replace shortcodes like :smile: or unicode chars such as 😄 with our custom Emojis implementation."})}),`
`,e.jsx(o,{children:e.jsx(s,{id:"components-emoji-text-wrapper--default"})}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(o,{children:e.jsx(s,{id:"components-emoji-text-wrapper--variants"})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
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
`})})]})}}export{z as default};
//# sourceMappingURL=emoji_text_wrapper-5a4517f1.js.map
