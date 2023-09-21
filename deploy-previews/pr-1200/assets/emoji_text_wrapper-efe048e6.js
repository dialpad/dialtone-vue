import{j as e}from"./jsx-dev-runtime-6180be06.js";import{M as u,b as o,C as s,d as r,e as l}from"./index-6111ad18.js";import{E as a,D as d,V as c}from"./emoji_text_wrapper.stories-ec9acec0.js";import{u as t}from"./index-e13d9f9b.js";import"./iframe-b3f1dbec.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-5b045293.js";import"./vue.esm-bundler-735640fd.js";import"./utils-4a13a80a.js";import"./icon_constants-fd15d813.js";import"./emoji_text_wrapper-06381541.js";import"./emoji-c8a97a48.js";import"./emoji-399fff3d.js";import"./index-40c4ee4c.js";import"./skeleton-722196b6.js";import"./_plugin-vue_export-helper-c27b6911.js";function m(n){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",strong:"strong",a:"a"},t(),n.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(u,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(i.h1,{id:"dtemojitextwrapper",children:"DtEmojiTextWrapper"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(i.p,{children:"Wrapper to find and replace shortcodes like :smile: or unicode chars such as 😄 with our custom Emojis implementation."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(r,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(i.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(r,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(i.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(l,{},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(i.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(i.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(i.pre,{children:e.jsxDEV(i.code,{className:"language-jsx",children:`// Note you must import from @dialpad/dialtone-vue/emoji. The emoji module is not included in the main
// @dialpad/dialtone-vue package due to it's large size. You may wish to consider dynamically importing
// the emoji module in your application.
import { DtEmojiTextWrapper } from '@dialpad/dialtone-vue/emoji';
`},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(i.h3,{id:"limitations",children:"Limitations"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(i.p,{children:["Currently, this wrapper component ",e.jsxDEV(i.strong,{children:"can't handle Vue components"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:35},this),", make sure to wrap only native HTML elements and text."]},void 0,!0,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(i.h3,{id:"with-shortcode",children:"With Shortcode"},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(i.pre,{children:e.jsxDEV(i.code,{className:"language-html",children:`<dt-emoji-text-wrapper>
  Example text with bigger :smile: emoji.
</dt-emoji-text-wrapper>
`},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(i.h3,{id:"with-unicode-character",children:"With Unicode Character"},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this),`
`,e.jsxDEV(i.pre,{children:e.jsxDEV(i.code,{className:"language-html",children:`<dt-emoji-text-wrapper>
  Example text with bigger 😄 emoji.
</dt-emoji-text-wrapper>
`},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this),`
`,e.jsxDEV(i.h3,{id:"with-nested-structure",children:"With Nested Structure"},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(i.pre,{children:e.jsxDEV(i.code,{className:"language-html",children:`<dt-emoji-text-wrapper>
  <div>
    <button class="d-btn d-btn--primary">Example button :cry:</button>
    <div>
      <span>Another example 🧐</span>
    </div>
  </div>
</dt-emoji-text-wrapper>
`},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(i.h3,{id:"with-emoji-size",children:"With Emoji Size"},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(i.pre,{children:e.jsxDEV(i.code,{className:"language-html",children:`<dt-emoji-text-wrapper size="500">
  ...
</dt-emoji-text-wrapper>
`},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this),`
`,e.jsxDEV(i.h2,{id:"with-custom-emoji",children:"With Custom Emoji"},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this),`
`,e.jsxDEV(i.p,{children:[e.jsxDEV(i.a,{href:"?path=/docs/components-emoji--custom-emoji#custom-emoji",children:"Set up the custom emoji"},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this)," in order to render with this component."]},void 0,!0,{fileName:"<source.js>",lineNumber:81,columnNumber:1},this),`
`,e.jsxDEV(i.pre,{children:e.jsxDEV(i.code,{className:"language-html",children:`<template>
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:83,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:83,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function k(n={}){const{wrapper:i}=Object.assign({},t(),n.components);return i?e.jsxDEV(i,Object.assign({},n,{children:e.jsxDEV(m,n,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):m(n)}export{k as default};
//# sourceMappingURL=emoji_text_wrapper-efe048e6.js.map
