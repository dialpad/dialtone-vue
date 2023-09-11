import{D as v}from"./button-73bbdd30.js";import{D as w}from"./tooltip-a4eaf6ae.js";import{D as k}from"./emoji-34887e7c.js";import{D}from"./emoji_text_wrapper-84a01c0b.js";import{k as a,d as r,F as g,g as x,o as d,l as n,m as i,n as y,e as c,t as u,q as S}from"./vue.esm-bundler-400586b0.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const E=["emojiUnicodeOrShortname","isSelected","ariaLabel","tooltip","num"],_={name:"DtRecipeEmojiRow",components:{DtTooltip:w,DtButton:v,DtEmoji:k,DtEmojiTextWrapper:D},mixins:[],props:{reactions:{type:Array,default:()=>[],validator:o=>{for(const t of o)if(!E.every(l=>t[l]!==void 0))return!1;return!0}}},emits:["emoji-clicked","emoji-hovered"],methods:{emojiClicked(o){this.$emit("emoji-clicked",o.emojiUnicodeOrShortname)},emojiHovered(o,t){this.$emit("emoji-hovered",{reaction:o.emojiUnicodeOrShortname,state:t})}}},R={class:"d-d-flex d-fw-wrap"},T=["reaction"],N={"aria-hidden":"true"},O={class:"d-mr4"},B={class:"d-fw-bold d-fs-100"};function I(o,t,m,l,U,p){const f=a("dt-emoji-text-wrapper"),b=a("dt-emoji"),h=a("dt-button"),j=a("dt-tooltip");return d(),r("span",R,[(d(!0),r(g,null,x(m.reactions,e=>(d(),r("span",{key:e.unicodeOutput,reaction:e,class:"d-mr4 d-mb4"},[n(j,{class:"d-d-inline-block","content-class":"d-wmx464",onShown:s=>p.emojiHovered(e,s)},{anchor:i(({attrs:s})=>[n(h,{importance:"clear",size:"sm","data-qa":"feed-item-reaction-button",class:y(["d-h24 d-bar16 d-py0 d-fs-200 d-mb0 d-t",e.isSelected?`d-fc-purple-500 d-bgc-purple-400 d-bgo10 d-bc-purple-400 d-bco50 ' +
                  'h:d-bgc-purple-400 h:d-bco25 a:d-bgc-purple-400 a:d-bco25`:"d-fc-black-600 d-bgc-black-100 h:d-bgc-white h:d-bc-black-600 a:d-bgc-white a:d-bc-black-600"]),"aria-label":e.ariaLabel,attrs:s,onClick:z=>p.emojiClicked(e)},{default:i(()=>[c("span",O,[n(b,{size:"200",code:e.emojiUnicodeOrShortname},null,8,["code"])]),c("span",B,u(e.num),1)]),_:2},1032,["class","aria-label","attrs","onClick"])]),default:i(()=>[c("span",N,[n(f,{size:"200"},{default:i(()=>[S(u(e.tooltip),1)]),_:2},1024)])]),_:2},1032,["onShown"])],8,T))),128))])}const H=C(_,[["render",I]]);_.__docgenInfo={displayName:"DtRecipeEmojiRow",exportName:"default",description:"",tags:{},props:[{name:"reactions",description:"Provide an array of reaction objects to be shown.",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"emoji-clicked",type:{names:["undefined"]}},{name:"emoji-hovered",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]};export{H as D};
//# sourceMappingURL=emoji_row-403bc76b.js.map
