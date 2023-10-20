import{a as t}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as d}from"./storybook_utils-4cdf99b7.js";import{D as l}from"./emoji_row-d4e90d9d.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";const j={name:"DtRecipeEmojiRowDefault",components:{DtRecipeEmojiRow:l}};var D=function(){var e=this,u=e._self._c;return u("dt-recipe-emoji-row",{attrs:{reactions:e.reactions},on:{"emoji-clicked":e.onEmojiClicked,"emoji-hovered":e.onEmojiHovered}})},_=[],s=p(j,D,_,!1,null,null,null,null);const b=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeEmojiRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]};const m={onEmojiClicked:t("emoji-clicked"),onEmojiHovered:t("emoji-hovered")},c={reactions:{table:{type:{detail:`[{
          "emojiUnicodeOrShortname": string,
          "isSelected": boolean,
          "ariaLabel": string,
          "tooltip": string,
          "num": number,
        }]`}}},onEmojiClicked:{table:{disable:!0}},onEmojiHovered:{table:{disable:!0}},emojiClicked:{table:{disable:!0}},emojiHovered:{table:{disable:!0}}},f={title:"Recipes/Conversation View/Emoji Row",component:l,args:m,argTypes:c,excludeStories:/.*Data$/},E=(a,{argTypes:e})=>d(a,e,b),o={render:E,args:{reactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}]}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const w=["argsData","argTypesData","Default"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:w,argTypesData:c,argsData:m,default:f},Symbol.toStringTag,{value:"Module"}));export{o as D,R as E};
//# sourceMappingURL=emoji_row.stories-36d2546a.js.map
