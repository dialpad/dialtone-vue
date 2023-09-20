import{D as w}from"./button-ab897be0.js";import{D as k}from"./tooltip-3767272b.js";import{D as x}from"./emoji-26a2a761.js";import{D as y}from"./emoji_text_wrapper-5270c163.js";import{k as n,d as s,F as D,g as b,o as d,l as i,m as a,n as S,e as c,t as p,q as C}from"./vue.esm-bundler-a9a971fb.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const R=["emojiUnicodeOrShortname","isSelected","ariaLabel","tooltip","num"];const u={name:"DtRecipeEmojiRow",components:{DtTooltip:k,DtButton:w,DtEmoji:x,DtEmojiTextWrapper:y},mixins:[],props:{reactions:{type:Array,default:()=>[],validator:o=>{for(const t of o)if(!R.every(l=>t[l]!==void 0))return!1;return!0}}},emits:["emoji-clicked","emoji-hovered"],methods:{emojiClicked(o){this.$emit("emoji-clicked",o.emojiUnicodeOrShortname)},emojiHovered(o,t){this.$emit("emoji-hovered",{reaction:o.emojiUnicodeOrShortname,state:t})}}},T={class:"d-d-flex d-fw-wrap"},g=["reaction"],N={"aria-hidden":"true"},O={class:"d-mr4"},B={class:"d-fw-bold d-fs-100"};function I(o,t,m,l,U,_){const f=n("dt-emoji-text-wrapper"),j=n("dt-emoji"),v=n("dt-button"),h=n("dt-tooltip");return d(),s("span",T,[(d(!0),s(D,null,b(m.reactions,e=>(d(),s("span",{key:e.unicodeOutput,reaction:e,class:"d-mr4 d-mb4"},[i(h,{class:"d-d-inline-block","content-class":"d-wmx464",onShown:r=>_.emojiHovered(e,r)},{anchor:a(({attrs:r})=>[i(v,{importance:"clear",size:"sm","data-qa":"feed-item-reaction-button",class:S(["emoji-row__reaction",e.isSelected?"emoji-row__reaction--selected":""]),"aria-label":e.ariaLabel,attrs:r,onClick:z=>_.emojiClicked(e)},{default:a(()=>[c("span",O,[i(j,{size:"200",code:e.emojiUnicodeOrShortname},null,8,["code"])]),c("span",B,p(e.num),1)]),_:2},1032,["class","aria-label","attrs","onClick"])]),default:a(()=>[c("span",N,[i(f,{size:"200"},{default:a(()=>[C(p(e.tooltip),1)]),_:2},1024)])]),_:2},1032,["onShown"])],8,g))),128))])}const H=E(u,[["render",I],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]]);u.__docgenInfo={displayName:"DtRecipeEmojiRow",exportName:"default",description:"",tags:{},props:[{name:"reactions",description:"Provide an array of reaction objects to be shown.",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"emoji-clicked",type:{names:["undefined"]}},{name:"emoji-hovered",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]};export{H as D};
//# sourceMappingURL=emoji_row-746c4c86.js.map