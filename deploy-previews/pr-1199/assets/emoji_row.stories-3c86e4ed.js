import{a as i}from"./chunk-AY7I2SME-5eb1ab46.js";import{h as p}from"./storybook_utils-8047579d.js";import{D as m}from"./emoji_row-fdd8a027.js";import{n as j}from"./_plugin-vue2_normalizer-2bbd088e.js";const D={name:"DtRecipeEmojiRowDefault",components:{DtRecipeEmojiRow:m}};var s=function(){var e=this,d=e._self._c;return d("dt-recipe-emoji-row",{attrs:{reactions:e.reactions},on:{"emoji-clicked":e.onEmojiClicked,"emoji-hovered":e.onEmojiHovered}})},_=[];s._withStripped=!0;var t=j(D,s,_,!1,null,null,null,null);t.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue";const f=t.exports;t.exports.__docgenInfo={displayName:"DtRecipeEmojiRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]};const c={onEmojiClicked:i("emoji-clicked"),onEmojiHovered:i("emoji-hovered")},u={reactions:{table:{type:{detail:`[{
          "emojiUnicodeOrShortname": string,
          "isSelected": boolean,
          "ariaLabel": string,
          "tooltip": string,
          "num": number,
        }]`}}},onEmojiClicked:{table:{disable:!0}},onEmojiHovered:{table:{disable:!0}},emojiClicked:{description:"Emoji clicked event",table:{type:{summary:"event"}}},emojiHovered:{description:"Emoji hovered event",table:{type:{summary:"event"}}}},v={title:"Recipes/Conversation View/Emoji Row",component:m,args:c,argTypes:u,excludeStories:/.*Data$/},E=(a,{argTypes:e})=>p(a,e,f),o={render:E,args:{reactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}]}};var r,n,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const b=["argsData","argTypesData","Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:b,argTypesData:u,argsData:c,default:v},Symbol.toStringTag,{value:"Module"}));export{o as D,y as E};
//# sourceMappingURL=emoji_row.stories-3c86e4ed.js.map
