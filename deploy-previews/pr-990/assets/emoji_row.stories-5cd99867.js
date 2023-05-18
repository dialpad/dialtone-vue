import{a as j}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as T}from"./storybook_utils-7e0be7f9.js";import{D as $}from"./button-1c3c443d.js";import{D as x}from"./tooltip-f5d44169.js";import{D as U}from"./emoji-55037693.js";import{D as L}from"./emoji_text_wrapper-cdf05c6e.js";import{a,f as p,F as H,u as N,o as s,d as r,w as n,n as B,g as _,t as f,s as F,b as I}from"./vue.esm-bundler-15aa0fd7.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const V=["emojiUnicodeOrShortname","isSelected","ariaLabel","tooltip","num"],D={name:"DtRecipeEmojiRow",components:{DtTooltip:x,DtButton:$,DtEmoji:U,DtEmojiTextWrapper:L},mixins:[],props:{reactions:{type:Array,default:()=>[],validator:e=>{for(const t of e)if(!V.every(d=>t[d]!==void 0))return!1;return!0}}},emits:["emoji-clicked","emoji-hovered"],methods:{emojiClicked(e){this.$emit("emoji-clicked",e.emojiUnicodeOrShortname)},emojiHovered(e,t){this.$emit("emoji-hovered",{reaction:e.emojiUnicodeOrShortname,state:t})}}},Y={class:"d-d-flex d-fw-wrap"},z=["reaction"],A={"aria-hidden":"true"},P={class:"d-mr4"},q={class:"d-fw-bold d-fs-100"};function M(e,t,c,d,y,m){const l=a("dt-emoji-text-wrapper"),R=a("dt-emoji"),O=a("dt-button"),C=a("dt-tooltip");return s(),p("span",Y,[(s(!0),p(H,null,N(c.reactions,o=>(s(),p("span",{key:o.unicodeOutput,reaction:o,class:"d-mr4 d-mb4"},[r(C,{class:"d-d-inline-block","content-class":"d-wmx464",onShown:u=>m.emojiHovered(o,u)},{anchor:n(({attrs:u})=>[r(O,{importance:"clear",size:"sm","data-qa":"feed-item-reaction-button",class:B(["d-h24 d-bar16 d-py0 d-fs-200 d-mb0 d-t",o.isSelected?`d-fc-purple-500 d-bgc-purple-400 d-bgo10 d-bc-purple-400 d-bco50 ' +
                  'h:d-bgc-purple-400 h:d-bco25 a:d-bgc-purple-400 a:d-bco25`:"d-fc-black-600 d-bgc-black-100 h:d-bgc-white h:d-bc-black-600 a:d-bgc-white a:d-bc-black-600"]),"aria-label":o.ariaLabel,attrs:u,onClick:X=>m.emojiClicked(o)},{default:n(()=>[_("span",P,[r(R,{size:"200",code:o.emojiUnicodeOrShortname},null,8,["code"])]),_("span",q,f(o.num),1)]),_:2},1032,["class","aria-label","attrs","onClick"])]),default:n(()=>[_("span",A,[r(l,{size:"200"},{default:n(()=>[F(f(o.tooltip),1)]),_:2},1024)])]),_:2},1032,["onShown"])],8,z))),128))])}const E=w(D,[["render",M],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]]);D.__docgenInfo={displayName:"DtRecipeEmojiRow",exportName:"default",description:"",tags:{},props:[{name:"reactions",description:"Provide an array of reaction objects to be shown.",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"emoji-clicked",type:{names:["undefined"]}},{name:"emoji-hovered",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]};const S={name:"DtRecipeEmojiRowDefault",components:{DtRecipeEmojiRow:E}};function W(e,t,c,d,y,m){const l=a("dt-recipe-emoji-row");return s(),I(l,{reactions:e.$attrs.reactions,onEmojiClicked:e.$attrs.onEmojiClicked,onEmojiHovered:e.$attrs.onEmojiHovered},null,8,["reactions","onEmojiClicked","onEmojiHovered"])}const G=w(S,[["render",W],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]]);S.__docgenInfo={displayName:"DtRecipeEmojiRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]};const g={onEmojiClicked:j("emoji-clicked"),onEmojiHovered:j("emoji-hovered")},k={reactions:{table:{type:{detail:`[{
          "emojiUnicodeOrShortname": string,
          "isSelected": boolean,
          "ariaLabel": string,
          "tooltip": string,
          "num": number,
        }]`}}},onEmojiClicked:{table:{disable:!0}},onEmojiHovered:{table:{disable:!0}},emojiClicked:{description:"Emoji clicked event",table:{type:{summary:"event"}}},emojiHovered:{description:"Emoji hovered event",table:{type:{summary:"event"}}}},J={title:"Recipes/Conversation View/Emoji Row",component:E,args:g,argTypes:k,excludeStories:/.*Data$/},K=e=>T(e,G),i={render:K,args:{reactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}]}};var b,h,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const Q=["argsData","argTypesData","Default"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:Q,argTypesData:k,argsData:g,default:J},Symbol.toStringTag,{value:"Module"}));export{i as D,se as E};
//# sourceMappingURL=emoji_row.stories-5cd99867.js.map
