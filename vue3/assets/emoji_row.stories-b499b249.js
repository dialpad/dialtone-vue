import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as d}from"./storybook_utils-8dde5fa6.js";import{D as n}from"./emoji_row-403bc76b.js";import{k as u,o as p,v as j}from"./vue.esm-bundler-400586b0.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const m={name:"DtRecipeEmojiRowDefault",components:{DtRecipeEmojiRow:n}};function E(e,w,S,h,g,k){const c=u("dt-recipe-emoji-row");return p(),j(c,{reactions:e.$attrs.reactions,onEmojiClicked:e.$attrs.onEmojiClicked,onEmojiHovered:e.$attrs.onEmojiHovered},null,8,["reactions","onEmojiClicked","onEmojiHovered"])}const f=D(m,[["render",E]]);m.__docgenInfo={displayName:"DtRecipeEmojiRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]};const s={onEmojiClicked:t("emoji-clicked"),onEmojiHovered:t("emoji-hovered")},l={reactions:{table:{type:{detail:`[{
          "emojiUnicodeOrShortname": string,
          "isSelected": boolean,
          "ariaLabel": string,
          "tooltip": string,
          "num": number,
        }]`}}},onEmojiClicked:{table:{disable:!0}},onEmojiHovered:{table:{disable:!0}},emojiClicked:{description:"Emoji clicked event",table:{type:{summary:"event"}}},emojiHovered:{description:"Emoji hovered event",table:{type:{summary:"event"}}}},b={title:"Recipes/Conversation View/Emoji Row",component:n,args:s,argTypes:l,excludeStories:/.*Data$/},_=e=>d(e,f),o={render:_,args:{reactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}]}};var a,i,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const v=["argsData","argTypesData","Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:v,argTypesData:l,argsData:s,default:b},Symbol.toStringTag,{value:"Module"}));export{o as D,$ as E};
//# sourceMappingURL=emoji_row.stories-b499b249.js.map
