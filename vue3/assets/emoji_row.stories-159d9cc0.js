import{a as _}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as T}from"./storybook_utils-b6841212.js";import{D as $}from"./button-3a631ed8.js";import{D as x}from"./tooltip-d982b0cb.js";import{D as U}from"./emoji-e5a23d56.js";import{D as L}from"./emoji_text_wrapper-574c0c91.js";import{e as u,F as H,s as N,o as s,d as r,w as n,n as B,f as j,t as f,q as F,a,b as I}from"./vue.esm-bundler-8a039e44.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const V=["emojiUnicodeOrShortname","isSelected","ariaLabel","tooltip","num"],E={name:"DtRecipeEmojiRow",components:{DtTooltip:x,DtButton:$,DtEmoji:U,DtEmojiTextWrapper:L},mixins:[],props:{reactions:{type:Array,default:()=>[],validator:e=>{for(const t of e)if(!V.every(d=>t[d]!==void 0))return!1;return!0}}},emits:["emoji-clicked","emoji-hovered"],methods:{emojiClicked(e){this.$emit("emoji-clicked",e.emojiUnicodeOrShortname)},emojiHovered(e,t){this.$emit("emoji-hovered",{reaction:e.emojiUnicodeOrShortname,state:t})}}},Y={class:"d-d-flex d-fw-wrap"},z=["reaction"],A={"aria-hidden":"true"},q={class:"d-mr4"},P={class:"d-fw-bold d-fs-100"};function M(e,t,c,d,y,m){const l=a("dt-emoji-text-wrapper"),R=a("dt-emoji"),O=a("dt-button"),C=a("dt-tooltip");return s(),u("span",Y,[(s(!0),u(H,null,N(c.reactions,o=>(s(),u("span",{key:o.unicodeOutput,reaction:o,class:"d-mr4 d-mb4"},[r(C,{class:"d-d-inline-block","content-class":"d-wmx464",onShown:p=>m.emojiHovered(o,p)},{anchor:n(({attrs:p})=>[r(O,{importance:"clear",size:"sm","data-qa":"feed-item-reaction-button",class:B(["d-h24 d-bar16 d-py0 d-fs-200 d-mb0 d-t",o.isSelected?`d-fc-purple-500 d-bgc-purple-400 d-bgo10 d-bc-purple-400 d-bco50 ' +
                  'h:d-bgc-purple-400 h:d-bco25 a:d-bgc-purple-400 a:d-bco25`:"d-fc-black-600 d-bgc-black-100 h:d-bgc-white h:d-bc-black-600 a:d-bgc-white a:d-bc-black-600"]),"aria-label":o.ariaLabel,attrs:p,onClick:X=>m.emojiClicked(o)},{default:n(()=>[j("span",q,[r(R,{size:"200",code:o.emojiUnicodeOrShortname},null,8,["code"])]),j("span",P,f(o.num),1)]),_:2},1032,["class","aria-label","attrs","onClick"])]),default:n(()=>[j("span",A,[r(l,{size:"200"},{default:n(()=>[F(f(o.tooltip),1)]),_:2},1024)])]),_:2},1032,["onShown"])],8,z))),128))])}const v=w(E,[["render",M]]);E.__docgenInfo={displayName:"DtRecipeEmojiRow",exportName:"default",description:"",tags:{},props:[{name:"reactions",description:"Provide an array of reaction objects to be shown.",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"emoji-clicked",type:{names:["undefined"]}},{name:"emoji-hovered",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]};const S={name:"DtRecipeEmojiRowDefault",components:{DtRecipeEmojiRow:v}};function W(e,t,c,d,y,m){const l=a("dt-recipe-emoji-row");return s(),I(l,{reactions:e.$attrs.reactions,onEmojiClicked:e.$attrs.onEmojiClicked,onEmojiHovered:e.$attrs.onEmojiHovered},null,8,["reactions","onEmojiClicked","onEmojiHovered"])}const G=w(S,[["render",W]]);S.__docgenInfo={displayName:"DtRecipeEmojiRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row_default.story.vue"]};const g={onEmojiClicked:_("emoji-clicked"),onEmojiHovered:_("emoji-hovered")},k={reactions:{table:{type:{detail:`[{
          "emojiUnicodeOrShortname": string,
          "isSelected": boolean,
          "ariaLabel": string,
          "tooltip": string,
          "num": number,
        }]`}}},onEmojiClicked:{table:{disable:!0}},onEmojiHovered:{table:{disable:!0}},emojiClicked:{description:"Emoji clicked event",table:{type:{summary:"event"}}},emojiHovered:{description:"Emoji hovered event",table:{type:{summary:"event"}}}},J={title:"Recipes/Conversation View/Emoji Row",component:v,args:g,argTypes:k,excludeStories:/.*Data$/},K=e=>T(e,G),i={render:K,args:{reactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}]}};var b,h,D;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(h=i.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const Q=["argsData","argTypesData","Default"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:Q,argTypesData:k,argsData:g,default:J},Symbol.toStringTag,{value:"Module"}));export{i as D,se as E};
//# sourceMappingURL=emoji_row.stories-159d9cc0.js.map
