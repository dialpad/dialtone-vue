import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as d}from"./storybook_utils-f3611d2a.js";import{D as n}from"./emoji_row-e4b09ab6.js";import{k as u,o as p,v as j}from"./vue.esm-bundler-a9a971fb.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const m={name:"DtRecipeEmojiRowDefault",components:{DtRecipeEmojiRow:n}};function E(e,w,S,h,g,k){const c=u("dt-recipe-emoji-row");return p(),j(c,{reactions:e.$attrs.reactions,onEmojiClicked:e.$attrs.onEmojiClicked,onEmojiHovered:e.$attrs.onEmojiHovered},null,8,["reactions","onEmojiClicked","onEmojiHovered"])}const _=D(m,[["render",E],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]]);m.__docgenInfo={displayName:"DtRecipeEmojiRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]};const s={onEmojiClicked:t("emoji-clicked"),onEmojiHovered:t("emoji-hovered")},l={reactions:{table:{type:{detail:`[{
          "emojiUnicodeOrShortname": string,
          "isSelected": boolean,
          "ariaLabel": string,
          "tooltip": string,
          "num": number,
        }]`}}},onEmojiClicked:{table:{disable:!0}},onEmojiHovered:{table:{disable:!0}},emojiClicked:{description:"Emoji clicked event",table:{type:{summary:"event"}}},emojiHovered:{description:"Emoji hovered event",table:{type:{summary:"event"}}}},f={title:"Recipes/Conversation View/Emoji Row",component:n,args:s,argTypes:l,excludeStories:/.*Data$/},v=e=>d(e,_),o={render:v,args:{reactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}]}};var a,i,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    reactions: [{
      emojiUnicodeOrShortname: '😀',
      isSelected: true,
      ariaLabel: 'Emoji aria label',
      tooltip: 'You reacted with 😀',
      num: 1
    }, {
      emojiUnicodeOrShortname: '😒',
      isSelected: false,
      ariaLabel: 'Emoji aria label',
      tooltip: 'You reacted with 😒',
      num: 1
    }, {
      emojiUnicodeOrShortname: '🙃',
      isSelected: false,
      ariaLabel: 'Emoji aria label',
      tooltip: 'You reacted with 🙃',
      num: 99
    }]
  }
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const b=["argsData","argTypesData","Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:b,argTypesData:l,argsData:s,default:f},Symbol.toStringTag,{value:"Module"}));export{o as D,$ as E};
//# sourceMappingURL=emoji_row.stories-8d87b014.js.map
