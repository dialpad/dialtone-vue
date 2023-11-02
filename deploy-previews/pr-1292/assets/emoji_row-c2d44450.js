import{D as s}from"./button-f9ebe2a3.js";import{D as m}from"./tooltip-c92c00b8.js";import{D as d}from"./emoji-df34a12c.js";import{D as c}from"./emoji_text_wrapper-fb0c42db.js";import{n as l}from"./_plugin-vue2_normalizer-2bbd088e.js";const p=["emojiUnicodeOrShortname","isSelected","ariaLabel","tooltip","num"];const u={name:"DtRecipeEmojiRow",components:{DtTooltip:m,DtButton:s,DtEmoji:d,DtEmojiTextWrapper:c},mixins:[],props:{reactions:{type:Array,default:()=>[],validator:i=>{for(const e of i)if(!p.every(t=>e[t]!==void 0))return!1;return!0}}},emits:["emoji-clicked","emoji-hovered"],methods:{emojiClicked(i){this.$emit("emoji-clicked",i.emojiUnicodeOrShortname)},emojiHovered(i,e){this.$emit("emoji-hovered",{reaction:i.emojiUnicodeOrShortname,state:e})}}};var a=function(){var e=this,o=e._self._c;return o("span",{staticClass:"dt-emoji-row"},e._l(e.reactions,function(t){return o("span",{key:t.unicodeOutput,staticClass:"d-mr4 d-mb4",attrs:{reaction:t}},[o("dt-tooltip",{staticClass:"d-d-inline-block",attrs:{"content-class":"d-wmx464"},on:{shown:n=>e.emojiHovered(t,n)},scopedSlots:e._u([{key:"anchor",fn:function({attrs:n}){return[o("dt-button",{class:["dt-emoji-row__reaction",t.isSelected?"dt-emoji-row__reaction--selected":""],attrs:{importance:"clear",size:"sm","data-qa":"feed-item-reaction-button","aria-label":t.ariaLabel,attrs:n},on:{click:function(f){return e.emojiClicked(t)}}},[o("span",{staticClass:"d-mr4 d-d-inline-flex"},[o("dt-emoji",{attrs:{size:"200",code:t.emojiUnicodeOrShortname}})],1),o("span",{staticClass:"d-fw-bold d-fs-100"},[e._v(" "+e._s(t.num)+" ")])])]}}],null,!0)},[o("span",{attrs:{"aria-hidden":"true"}},[o("dt-emoji-text-wrapper",{attrs:{size:"200"}},[e._v(" "+e._s(t.tooltip)+" ")])],1)])],1)}),0)},_=[];a._withStripped=!0;var r=l(u,a,_,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue";const D=r.exports;r.exports.__docgenInfo={displayName:"DtRecipeEmojiRow",exportName:"default",description:"",tags:{},props:[{name:"reactions",description:"Provide an array of reaction objects to be shown.",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"emoji-clicked",type:{names:["undefined"]}},{name:"emoji-hovered",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/emoji_row/emoji_row.vue"]};export{D};
//# sourceMappingURL=emoji_row-c2d44450.js.map
