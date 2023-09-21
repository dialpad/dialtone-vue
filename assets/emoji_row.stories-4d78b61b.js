import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{h as u}from"./storybook_utils-0b506883.js";import{D as l}from"./emoji_row-54a3b17d.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";const j={name:"DtRecipeEmojiRowDefault",components:{DtRecipeEmojiRow:l}};var D=function(){var e=this,d=e._self._c;return d("dt-recipe-emoji-row",{attrs:{reactions:e.reactions},on:{"emoji-clicked":e.onEmojiClicked,"emoji-hovered":e.onEmojiHovered}})},E=[],m=p(j,D,E,!1,null,null,null,null);const _=m.exports;m.exports.__docgenInfo={displayName:"DtRecipeEmojiRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]};const s={onEmojiClicked:a("emoji-clicked"),onEmojiHovered:a("emoji-hovered")},c={reactions:{table:{type:{detail:`[{
          "emojiUnicodeOrShortname": string,
          "isSelected": boolean,
          "ariaLabel": string,
          "tooltip": string,
          "num": number,
        }]`}}},onEmojiClicked:{table:{disable:!0}},onEmojiHovered:{table:{disable:!0}},emojiClicked:{description:"Emoji clicked event",table:{type:{summary:"event"}}},emojiHovered:{description:"Emoji hovered event",table:{type:{summary:"event"}}}},f={title:"Recipes/Conversation View/Emoji Row",component:l,args:s,argTypes:c,excludeStories:/.*Data$/},b=(t,{argTypes:e})=>u(t,e,_),o={render:b,args:{reactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}]}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const v=["argsData","argTypesData","Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:v,argTypesData:c,argsData:s,default:f},Symbol.toStringTag,{value:"Module"}));export{o as D,y as E};
//# sourceMappingURL=emoji_row.stories-4d78b61b.js.map
