import{j as e}from"./jsx-runtime-df01b164.js";import{M as m,S as p,C as o,a as s,b as d}from"./index-57a2ddf4.js";import{E as c,D as l,V as h}from"./emoji_text_wrapper.stories-021a547c.js";import{u as a}from"./index-aeebc122.js";import"./iframe-86957541.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./storybook_utils-b781ced2.js";import"./vue.esm-eff6e72e.js";import"./icon_constants-0609a8e8.js";import"./emoji_text_wrapper-236ef6cd.js";import"./emoji-c20bd418.js";import"./emoji-1f0f2b27.js";import"./skeleton-28563e4f.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function L(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",strong:"strong",a:"a"},a(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:c}),`
`,e.jsx(t.h1,{id:"dtemojitextwrapper",children:"DtEmojiTextWrapper"}),`
`,e.jsx(p,{children:e.jsx(t.p,{children:"Wrapper to find and replace shortcodes like :smile: or unicode chars such as 😄 with our custom Emojis implementation."})}),`
`,e.jsx(o,{children:e.jsx(s,{of:l})}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(o,{children:e.jsx(s,{of:h})}),`
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
`})})]})}}export{L as default};
//# sourceMappingURL=emoji_text_wrapper-7fc5541e.js.map
