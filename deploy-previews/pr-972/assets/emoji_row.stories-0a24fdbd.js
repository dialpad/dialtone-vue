import{a as l}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as b}from"./storybook_utils-b781ced2.js";import{D as w}from"./button-45d71d86.js";import{D}from"./tooltip-b218cd2d.js";import{D as h}from"./emoji-c20bd418.js";import{D as E}from"./emoji_text_wrapper-236ef6cd.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const S=["emojiUnicodeOrShortname","isSelected","ariaLabel","tooltip","num"];const y={name:"DtRecipeEmojiRow",components:{DtTooltip:D,DtButton:w,DtEmoji:h,DtEmojiTextWrapper:E},mixins:[],props:{reactions:{type:Array,default:()=>[],validator:i=>{let e=!0;if(!Array.isArray(i))return!1;for(let o=0;o<i.length;o++){const t=i[o];if(S.forEach(a=>{(t[a]===void 0||t[a]===null)&&(e=!1)}),!e)break}return e}}},emits:["emojiClicked","emojiHovered"],data(){return{}},computed:{},watch:{},methods:{emojiClicked(i){this.$emit("emojiClicked",i.emojiUnicodeOrShortname)},emojiHovered(i,e){this.$emit("emojiHovered",{reaction:i.emojiUnicodeOrShortname,state:e})}}};var p=function(){var e=this,o=e._self._c;return o("span",{staticClass:"d-d-flex d-fw-wrap"},e._l(e.reactions,function(t){return o("span",{key:t.unicodeOutput,staticClass:"d-mr4 d-mb4",attrs:{reaction:t}},[o("dt-tooltip",{staticClass:"d-d-inline-block",attrs:{"content-class":"d-wmx464"},on:{shown:a=>e.emojiHovered(t,a)},scopedSlots:e._u([{key:"anchor",fn:function({attrs:a}){return[o("dt-button",{class:["d-h24 d-bar16 d-py0 d-fs-200 d-mb0 d-t",t.isSelected?`d-fc-purple-400 d-bgc-purple-400 d-bgo10 d-bc-purple-400 d-bco50 ' +
                'h:d-bgc-purple-400 h:d-bco25 a:d-bgc-purple-400 a:d-bco25`:"d-fc-black-600 d-bgc-black-100 h:d-bgc-white h:d-bc-black-600 a:d-bgc-white a:d-bc-black-600"],attrs:{importance:"clear",size:"sm","data-qa":"feed-item-reaction-button","aria-label":t.ariaLabel,attrs:a},on:{click:function(U){return e.emojiClicked(t)}}},[o("span",{staticClass:"d-mr4"},[o("dt-emoji",{attrs:{size:"200",code:t.emojiUnicodeOrShortname}})],1),o("span",{staticClass:"d-fw-bold d-fs-100"},[e._v(" "+e._s(t.num)+" ")])])]}}],null,!0)},[o("dt-emoji-text-wrapper",{attrs:{size:"200"}},[e._v(" "+e._s(t.tooltip)+" ")])],1)],1)}),0)},g=[];p._withStripped=!0;var n=u(y,p,g,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue";const _=n.exports;n.exports.__docgenInfo={displayName:"DtRecipeEmojiRow",exportName:"default",description:"",tags:{},props:[{name:"reactions",description:"Provide an array of reaction objects to be shown.",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"emojiClicked",type:{names:["undefined"]}},{name:"emojiHovered",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]};const k={name:"DtRecipeEmojiRowDefault",components:{DtRecipeEmojiRow:_}};var f=function(){var e=this,o=e._self._c;return o("dt-recipe-emoji-row",{attrs:{reactions:e.reactions},on:{"emoji-clicked":e.onEmojiClicked,"emoji-hovered":e.onEmojiHovered}})},R=[];f._withStripped=!0;var s=u(k,f,R,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue";const C=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeEmojiRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]};const j={onEmojiClicked:l("emojiClicked"),onEmojiHovered:l("emojiHovered")},v={reactions:{table:{type:{detail:`[{
          "emojiUnicodeOrShortname": string,
          "isSelected": boolean,
          "ariaLabel": string,
          "tooltip": string,
          "num": number,
        }]`}}},onEmojiClicked:{table:{disable:!0}},onEmojiHovered:{table:{disable:!0}},emojiClicked:{description:"Emoji clicked event",table:{type:{summary:"event"}}},emojiHovered:{description:"Emoji hovered event",table:{type:{summary:"event"}}}},O={title:"Recipes/Conversation View/Emoji Row",component:_,args:j,argTypes:v,excludeStories:/.*Data$/},x=(i,{argTypes:e})=>b(i,e,C),r={render:x,args:{reactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}]}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const T=["argsData","argTypesData","Default"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:T,argTypesData:v,argsData:j,default:O},Symbol.toStringTag,{value:"Module"}));export{r as D,I as E};
//# sourceMappingURL=emoji_row.stories-0a24fdbd.js.map
