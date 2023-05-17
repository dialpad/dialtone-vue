import{a as n}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as _}from"./storybook_utils-d749c98e.js";import{D as b}from"./button-e19e95f1.js";import{D as v}from"./tooltip-d0cf9bac.js";import{D}from"./emoji-9316dc10.js";import{D as h}from"./emoji_text_wrapper-2321a883.js";import{n as m}from"./_plugin-vue2_normalizer-2bbd088e.js";const w=["emojiUnicodeOrShortname","isSelected","ariaLabel","tooltip","num"];const E={name:"DtRecipeEmojiRow",components:{DtTooltip:v,DtButton:b,DtEmoji:D,DtEmojiTextWrapper:h},mixins:[],props:{reactions:{type:Array,default:()=>[],validator:a=>{for(const e of a)if(!w.every(t=>e[t]!==void 0))return!1;return!0}}},emits:["emoji-clicked","emoji-hovered"],methods:{emojiClicked(a){this.$emit("emoji-clicked",a.emojiUnicodeOrShortname)},emojiHovered(a,e){this.$emit("emoji-hovered",{reaction:a.emojiUnicodeOrShortname,state:e})}}};var S=function(){var e=this,o=e._self._c;return o("span",{staticClass:"d-d-flex d-fw-wrap"},e._l(e.reactions,function(t){return o("span",{key:t.unicodeOutput,staticClass:"d-mr4 d-mb4",attrs:{reaction:t}},[o("dt-tooltip",{staticClass:"d-d-inline-block",attrs:{"content-class":"d-wmx464"},on:{shown:r=>e.emojiHovered(t,r)},scopedSlots:e._u([{key:"anchor",fn:function({attrs:r}){return[o("dt-button",{class:["d-h24 d-bar16 d-py0 d-fs-200 d-mb0 d-t",t.isSelected?`d-fc-purple-500 d-bgc-purple-400 d-bgo10 d-bc-purple-400 d-bco50 ' +
                'h:d-bgc-purple-400 h:d-bco25 a:d-bgc-purple-400 a:d-bco25`:"d-fc-black-600 d-bgc-black-100 h:d-bgc-white h:d-bc-black-600 a:d-bgc-white a:d-bc-black-600"],attrs:{importance:"clear",size:"sm","data-qa":"feed-item-reaction-button","aria-label":t.ariaLabel,attrs:r},on:{click:function(U){return e.emojiClicked(t)}}},[o("span",{staticClass:"d-mr4"},[o("dt-emoji",{attrs:{size:"200",code:t.emojiUnicodeOrShortname}})],1),o("span",{staticClass:"d-fw-bold d-fs-100"},[e._v(" "+e._s(t.num)+" ")])])]}}],null,!0)},[o("span",{attrs:{"aria-hidden":"true"}},[o("dt-emoji-text-wrapper",{attrs:{size:"200"}},[e._v(" "+e._s(t.tooltip)+" ")])],1)])],1)}),0)},g=[],d=m(E,S,g,!1,null,null,null,null);const u=d.exports;d.exports.__docgenInfo={displayName:"DtRecipeEmojiRow",exportName:"default",description:"",tags:{},props:[{name:"reactions",description:"Provide an array of reaction objects to be shown.",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"emoji-clicked",type:{names:["undefined"]}},{name:"emoji-hovered",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]};const y={name:"DtRecipeEmojiRowDefault",components:{DtRecipeEmojiRow:u}};var k=function(){var e=this,o=e._self._c;return o("dt-recipe-emoji-row",{attrs:{reactions:e.reactions},on:{"emoji-clicked":e.onEmojiClicked,"emoji-hovered":e.onEmojiHovered}})},R=[],p=m(y,k,R,!1,null,null,null,null);const O=p.exports;p.exports.__docgenInfo={displayName:"DtRecipeEmojiRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]};const f={onEmojiClicked:n("emoji-clicked"),onEmojiHovered:n("emoji-hovered")},j={reactions:{table:{type:{detail:`[{
          "emojiUnicodeOrShortname": string,
          "isSelected": boolean,
          "ariaLabel": string,
          "tooltip": string,
          "num": number,
        }]`}}},onEmojiClicked:{table:{disable:!0}},onEmojiHovered:{table:{disable:!0}},emojiClicked:{description:"Emoji clicked event",table:{type:{summary:"event"}}},emojiHovered:{description:"Emoji hovered event",table:{type:{summary:"event"}}}},x={title:"Recipes/Conversation View/Emoji Row",component:u,args:f,argTypes:j,excludeStories:/.*Data$/},C=(a,{argTypes:e})=>_(a,e,O),i={render:C,args:{reactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}]}};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const T=["argsData","argTypesData","Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:T,argTypesData:j,argsData:f,default:x},Symbol.toStringTag,{value:"Module"}));export{i as D,N as E};
//# sourceMappingURL=emoji_row.stories-bcce15d2.js.map
