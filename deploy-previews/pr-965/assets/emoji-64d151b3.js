import{j as e}from"./jsx-runtime-647f6068.js";import{M as l,S as c,C as t,a as r,b as d}from"./index-85e86f4c.js";import{E as m,D as h,V as j}from"./emoji.stories-69ba8ae5.js";import{u as a}from"./index-dd6e65d7.js";import"./iframe-487d9c94.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./storybook_utils-35e0d11d.js";import"./vue.esm-bundler-2e3b72e0.js";import"./utils-9325de8f.js";import"./icon_constants-80181dc9.js";import"./emoji-28248f84.js";import"./emoji-8cc1c740.js";import"./index-40c4ee4c.js";import"./skeleton-6c0044ba.js";import"./_plugin-vue_export-helper-c27b6911.js";function Y(o={}){const{wrapper:s}=Object.assign({},a(),o.components);return s?e.jsx(s,Object.assign({},o,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",a:"a",ul:"ul",li:"li",h4:"h4"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:m}),`
`,e.jsx(n.h1,{id:"emoji",children:"Emoji"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:"Renders an emoji from a shortcode such as :smile: or unicode character such as 😄."})}),`
`,e.jsx(t,{children:e.jsx(r,{of:h})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t,{children:e.jsx(r,{of:j})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtEmoji } from '@dialpad/dialtone-vue/emoji';
`})}),`
`,e.jsx(n.h3,{id:"smile",children:"Smile"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-emoji
  code=":smile:"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-unicode-smile",children:"With Unicode Smile"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-emoji
  code="😄"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-skin-tone",children:"With Skin Tone"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-emoji
  code=":raised_hand_medium_skin_tone:"
/>
`})}),`
`,e.jsx(n.h2,{id:"assets",children:"Assets"}),`
`,e.jsxs(n.p,{children:["Dialtone Vue uses ",e.jsx(n.a,{href:"https://www.joypixels.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"JoyPixels 6.6"}),` to render emojis. When using this component,
Dialtone Vue will use the free joypixels assets hosted on jsdelivr CDN by default. You may wish to use self hosted
joypixels assets such as the SVGs only available to premium license holders. The examples shown here use the free 32px
PNGs for emojis 16px and under, and the premium SVGs for emoji's larger than 16px. You may set a custom URL for small
emojis and large emojis with the following functions during initialization of your app:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// Note you must import from @dialpad/dialtone-vue/emoji. The emoji module is not included in the main
// @dialpad/dialtone-vue package due to it's large size. You may wish to consider dynamically importing
// the emoji module in your application.
import { setEmojiAssetUrlSmall, setEmojiAssetUrlLarge } from '@dialpad/dialtone-vue/emoji'

// 16px and smaller
setEmojiAssetUrlSmall('https://my.example.website.com/joypixels/svg/unicode/32/', '.png')
// larger than 16px
setEmojiAssetUrlLarge('https://my.example.website.com/joypixels/svg/unicode/', '.svg')
`})}),`
`,e.jsxs(n.p,{children:["Please be aware of ",e.jsx(n.a,{href:"https://www.joypixels.com/licenses",target:"_blank",rel:"nofollow noopener noreferrer",children:"JoyPixels licensing requirements"}),`. You may not use JoyPixels
assets for business use without a license.`]}),`
`,e.jsx(n.h2,{id:"custom-emoji",children:"Custom Emoji"}),`
`,e.jsxs(n.p,{children:["It's possible to provide a custom emoji JSON file (",e.jsx(n.a,{href:"#json-structure",children:"with this structure"}),`) in order to support emojis
that aren't part of the Unicode standard. To do so, first specify where the assets are and set the raw JSON:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { setCustomEmojiUrl, setCustomEmojiJson } from '@dialpad/dialtone-vue/emoji'
// Your local custom emoji JSON file
import customEmojiJson from './data/custom-emoji.json'

// Custom Emojis
setCustomEmojiUrl('https://my.example.website.com/images/icons/emoji/');
setCustomEmojiJson(customEmojiJson);
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
  <dt-emoji
    code=":octocat:"
  ></dt-emoji>
</template>

<script>
import { DtEmoji } from '@dialpad/dialtone-vue/emoji';

export default {
  components: { DtEmoji },
}
<\/script>
`})}),`
`,e.jsxs(n.p,{children:["In the example above, the emoji with the ",e.jsx(n.code,{children:":octocat:"}),` shortcode from the custom emoji provided will be rendered.
Take into account that a custom emoji can only be referenced by the shortcode as no Unicode character is associated
with it.`]}),`
`,e.jsx(n.h3,{id:"json-structure",children:"JSON structure"}),`
`,e.jsxs(n.p,{children:[`It follows a similar structure to the
`,e.jsx(n.a,{href:"https://raw.githubusercontent.com/joypixels/emoji-toolkit/master/emoji_strategy.json",target:"_blank",rel:"nofollow noopener noreferrer",children:"standard emoji json file"}),`,
though there are some specific properties used in the custom emoji json.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{
  "octocat": {
    "name": "octocat",
    "category": "",
    "shortname": ":octocat:",
    "shortname_alternates": [],
    "keywords": [
      "octo",
      "cat",
      "github"
    ],
    "extension": ".png", // .png or .svg
    "custom": true // Boolean
  }
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Required properties: ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"category"}),", ",e.jsx(n.code,{children:"shortname"}),", ",e.jsx(n.code,{children:"extension"}),", ",e.jsx(n.code,{children:"custom"})]}),`
`]}),`
`,e.jsx(n.h4,{id:"modify-data-in-native-emojis",children:"Modify data in native emojis"}),`
`,e.jsx(n.p,{children:"It's possible to modify or add data to a native emoji using the codepoint as the key of the object."}),`
`,e.jsxs(n.p,{children:["In the following example, as the ",e.jsx(n.code,{children:"keywords"})," property is an array, this will extend the keywords in the native emoji."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{
  '1f615': {
    keywords: ['thinking', 'not sure', 'unknown'],
  },
}
`})}),`
`,e.jsx(n.p,{children:"In case the property is a string, it will overwrite the property of the native emoji."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{
  '1f913': {
    shortname: ':nerdface:',
  },
}
`})}),`
`,e.jsx(n.h2,{id:"emoji-metadata",children:"Emoji Metadata"}),`
`,e.jsx(n.p,{children:`You may access the full list of supported native emojis and all emoji metadata by importing the following function and
executing it:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getEmojiData } from 'dialtone-vue/emoji'
const emojiData = getEmojiData();
`})}),`
`,e.jsx(n.p,{children:"You may retrieve the data for an emoji by using the unicode string as an object key"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`emojiData['1f600'].name // returns "grinning face"

// when skintone, the unicode strings for the emoji and skin tone are separated by a -
emojiData['1f482-1f3fb'].shortname // returns ":guard_tone1:"
`})}),`
`,e.jsx(n.p,{children:`If you have setup a custom emoji json, you can get the resulting json (from the native and custom emojis)
with:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getEmojiData } from 'dialtone-vue/emoji'
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[`By default the emoji will be rendered with an aria-label attribute describing the emoji so it can be read by AT. This
component does not do any translation, so if you need it to be i18n compatible you must pass in your own text via the
ariaLabel prop. You can access the descriptions using the `,e.jsx(n.code,{children:"getEmojiData"})," function as mentioned above."]}),`
`,e.jsx(n.h3,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.joypixels.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"JoyPixels"})," - Our emoji assets"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/joypixels/emoji-toolkit",target:"_blank",rel:"nofollow noopener noreferrer",children:"emoji-toolkit"})," - Helper library we use to render joypixels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://emojipedia.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"emojipedia"})," - Good for looking up details about specific emojis."]}),`
`]})]})}}export{Y as default};
//# sourceMappingURL=emoji-64d151b3.js.map
