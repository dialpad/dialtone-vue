import{a as t}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as u}from"./storybook_utils-182ea7b7.js";import{D as l}from"./emoji_row-5e448cd1.js";import{s as p,o as j,b as D}from"./vue.esm-bundler-15c892b6.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const s={name:"DtRecipeEmojiRowDefault",components:{DtRecipeEmojiRow:l}};function b(e,a,g,h,v,R){const d=p("dt-recipe-emoji-row");return j(),D(d,{reactions:e.$attrs.reactions,onEmojiClicked:e.$attrs.onEmojiClicked,onEmojiHovered:e.$attrs.onEmojiHovered},null,8,["reactions","onEmojiClicked","onEmojiHovered"])}const f=E(s,[["render",b]]);s.__docgenInfo={displayName:"DtRecipeEmojiRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]};const m={onEmojiClicked:t("emoji-clicked"),onEmojiHovered:t("emoji-hovered")},c={reactions:{table:{type:{detail:`[{
          "emojiUnicodeOrShortname": string,
          "isSelected": boolean,
          "ariaLabel": string,
          "tooltip": string,
          "num": number,
        }]`}}},onEmojiClicked:{table:{disable:!0}},onEmojiHovered:{table:{disable:!0}},emojiClicked:{table:{disable:!0}},emojiHovered:{table:{disable:!0}}},_={title:"Recipes/Conversation View/Emoji Row",component:l,args:m,argTypes:c,excludeStories:/.*Data$/},w=(e,{argTypes:a})=>u(e,a,f),o={render:w,args:{reactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}]}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const S=["argsData","argTypesData","Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:S,argTypesData:c,argsData:m,default:_},Symbol.toStringTag,{value:"Module"}));export{o as D,$ as E};
//# sourceMappingURL=emoji_row.stories-95235872.js.map
