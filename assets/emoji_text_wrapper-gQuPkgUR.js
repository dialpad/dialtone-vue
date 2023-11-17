import{j as e}from"./jsx-runtime-76rNX7r5.js";import{M as a,b as m,C as i,d as r,e as p}from"./index-mSQrWEtA.js";import{E as d,D as c,V as l}from"./emoji_text_wrapper.stories-sy5zsSwH.js";import{u as s}from"./index-2t2NJczC.js";import"./iframe-tDGfQvwJ.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";import"./storybook_utils-XrTpeJKJ.js";import"./icon_constants-spQP7USY.js";import"./emoji_text_wrapper-b9RIc_oc.js";import"./emoji-qdWrOLYR.js";import"./emoji-m69G9QlX.js";import"./skeleton-fKaLf5Ui.js";import"./_plugin-vue2_normalizer-XBmYDgEh.js";import"./utils--FVyH5w7.js";import"./vue.esm-Wy6pS3yJ.js";function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",strong:"strong",a:"a"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(t.h1,{id:"dtemojitextwrapper",children:"DtEmojiTextWrapper"}),`
`,e.jsx(m,{children:e.jsx(t.p,{children:"Wrapper to find and replace shortcodes like :smile: or unicode chars such as 😄 with our custom Emojis implementation."})}),`
`,e.jsx(i,{children:e.jsx(r,{of:c})}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{children:e.jsx(r,{of:l})}),`
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
`})})]})}function V(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{V as default};
//# sourceMappingURL=emoji_text_wrapper-gQuPkgUR.js.map
