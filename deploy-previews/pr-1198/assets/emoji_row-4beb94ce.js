import{D as v}from"./button-5bfbc090.js";import{D as w}from"./tooltip-807cebe1.js";import{D as k}from"./emoji-07b25352.js";import{D as x}from"./emoji_text_wrapper-b2e2c424.js";import{k as a,d as s,F as D,g,o as d,p as i,m as n,n as y,e as c,x as u,q as S}from"./vue.esm-bundler-0b5a673d.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const E=["emojiUnicodeOrShortname","isSelected","ariaLabel","tooltip","num"],_={name:"DtRecipeEmojiRow",components:{DtTooltip:w,DtButton:v,DtEmoji:k,DtEmojiTextWrapper:x},mixins:[],props:{reactions:{type:Array,default:()=>[],validator:o=>{for(const t of o)if(!E.every(l=>t[l]!==void 0))return!1;return!0}}},emits:["emoji-clicked","emoji-hovered"],methods:{emojiClicked(o){this.$emit("emoji-clicked",o.emojiUnicodeOrShortname)},emojiHovered(o,t){this.$emit("emoji-hovered",{reaction:o.emojiUnicodeOrShortname,state:t})}}},R={class:"d-d-flex d-fw-wrap"},T=["reaction"],N={"aria-hidden":"true"},O={class:"d-mr4"},B={class:"d-fw-bold d-fs-100"};function I(o,t,m,l,U,p){const f=a("dt-emoji-text-wrapper"),b=a("dt-emoji"),h=a("dt-button"),j=a("dt-tooltip");return d(),s("span",R,[(d(!0),s(D,null,g(m.reactions,e=>(d(),s("span",{key:e.unicodeOutput,reaction:e,class:"d-mr4 d-mb4"},[i(j,{class:"d-d-inline-block","content-class":"d-wmx464",onShown:r=>p.emojiHovered(e,r)},{anchor:n(({attrs:r})=>[i(h,{importance:"clear",size:"sm","data-qa":"feed-item-reaction-button",class:y(["d-h24 d-bar16 d-py0 d-fs-200 d-mb0 d-t",e.isSelected?`d-fc-purple-500 d-bgc-purple-400 d-bgo10 d-bc-purple-400 d-bco50 ' +
                  'h:d-bgc-purple-400 h:d-bco25 a:d-bgc-purple-400 a:d-bco25`:"d-fc-black-600 d-bgc-black-100 h:d-bgc-white h:d-bc-black-600 a:d-bgc-white a:d-bc-black-600"]),"aria-label":e.ariaLabel,attrs:r,onClick:z=>p.emojiClicked(e)},{default:n(()=>[c("span",O,[i(b,{size:"200",code:e.emojiUnicodeOrShortname},null,8,["code"])]),c("span",B,u(e.num),1)]),_:2},1032,["class","aria-label","attrs","onClick"])]),default:n(()=>[c("span",N,[i(f,{size:"200"},{default:n(()=>[S(u(e.tooltip),1)]),_:2},1024)])]),_:2},1032,["onShown"])],8,T))),128))])}const H=C(_,[["render",I],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]]);_.__docgenInfo={displayName:"DtRecipeEmojiRow",exportName:"default",description:"",tags:{},props:[{name:"reactions",description:"Provide an array of reaction objects to be shown.",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"emoji-clicked",type:{names:["undefined"]}},{name:"emoji-hovered",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]};export{H as D};
//# sourceMappingURL=emoji_row-4beb94ce.js.map
