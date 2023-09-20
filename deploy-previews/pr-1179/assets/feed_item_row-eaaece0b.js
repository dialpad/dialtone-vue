import{D as n}from"./avatar-ad7a63af.js";import{D as d}from"./lazy_show-0b3a0cf0.js";import{D as l}from"./list_item-f5c461e3.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";const s={NORMAL:"",SEARCHED:"d-bgc-warning-subtle",ERROR:"d-bgc-critical-subtle"},i="NORMAL";const m={name:"DtRecipeFeedItemRow",components:{DtAvatar:n,DtLazyShow:d,DtListItem:l},inheritAttrs:!1,props:{showHeader:{type:Boolean,default:!1},avatarImageUrl:{type:String,default:""},displayName:{type:String,default:""},time:{type:String,default:""},shortTime:{type:String,default:""},isActive:{type:Boolean,default:!1},state:{type:String,default:i,validator:a=>Object.keys(s).includes(a)}},emits:["hover","focus"],data(){return{faded:!1}},computed:{avatarSeed(){return(this.displayName||"").split(" ").map(t=>t.charAt(0)).join("").slice(0,2).toUpperCase()},feedListeners(){return{...this.$listeners,mouseenter:()=>this.setHover(!0),mouseleave:()=>this.setHover(!1),focusin:()=>this.setFocus(!0),focusout:()=>this.setFocus(!1)}},listItemClasses(){return["d-w100p","d-box-border","d-ps-relative","d-px8",{"d-bgc-secondary-opaque":this.isActive&&this.state===i},s[this.state],"dt-feed-item-row","d-t","d-tp-bgc"]}},methods:{setFocus(a){this.$emit("focus",a)},setHover(a){this.$emit("hover",a)},fade(){this.state===i||this.faded===!0||(this.$refs.FeedItemRef.$el.classList.remove(s[this.state]),this.faded=!0)}}};var o=function(){var e=this,t=e._self._c;return t("dt-list-item",e._g(e._b({ref:"FeedItemRef",class:e.listItemClasses,attrs:{"navigation-type":"none","data-qa":"dt-feed-item-row"},scopedSlots:e._u([{key:"left",fn:function(){return[e.showHeader?t("dt-avatar",{attrs:{"full-name":e.displayName,"image-src":e.avatarImageUrl,seed:e.avatarSeed}}):e._e(),e.showHeader?e._e():t("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"d-fs-100 d-fw-normal d-ws-nowrap d-lh-100 d-fc-tertiary d-mb6",attrs:{"data-qa":"dt-feed-item-row--left-time"}},[e._v(" "+e._s(e.shortTime)+" ")])]},proxy:!0},{key:"bottom",fn:function(){return[t("div",{staticClass:"d-d-flex d-fw-wrap",attrs:{"data-qa":"dt-feed-item-row--reactions"}},[e._t("reactions")],2),e._t("threading")]},proxy:!0},{key:"right",fn:function(){return[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"d-ps-absolute d-tn16 d-r12",attrs:{"data-qa":"dt-feed-item-row--menu"}},[t("dt-lazy-show",{attrs:{appear:!0,transition:"fade",show:e.isActive}},[e._t("menu")],2)],1)]},proxy:!0}],null,!0)},"dt-list-item",e.$attrs,!1),e.feedListeners),[t("article",[e.showHeader?t("div",{staticClass:"d-d-flex d-ai-center",attrs:{"data-qa":"dt-feed-item-row--header"}},[t("p",{staticClass:"d-fs-200 d-lh-300 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap"},[e._v(" "+e._s(e.displayName)+" ")]),t("time",{staticClass:"d-fs-100 d-mt2 d-lh-300 d-fc-tertiary d-fw-normal d-ml4 d-fl-shrink0"},[e._v(" "+e._s(e.time)+" ")])]):e._e(),t("span",{staticClass:"content-text-wrapper-class",attrs:{"data-qa":"dt-feed-item-row--content"}},[e._t("default")],2)])])},c=[];o._withStripped=!0;var r=f(m,o,c,!1,null,"58072825",null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue";const w=r.exports;r.exports.__docgenInfo={displayName:"DtRecipeFeedItemRow",exportName:"default",description:"",tags:{},props:[{name:"showHeader",description:"Show avatar, show header text or dont show left time and vice versa",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarImageUrl",description:"Show the avatar of the user, if this is not passed in, the initials would display",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"displayName",description:"The display name of the sender",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"time",description:`time string displayed as is.
Shown on the header when showHeader is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"shortTime",description:`short time string without AM/PM displayed as is.
Shown on the left of feed item when showHeader is false and isActive is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isActive",description:"displays a darkened background on the row.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"state",description:"state for the feed item row. Can be default, searched & error",type:{name:"string"},defaultValue:{func:!1,value:"DEFAULT_FEED_ROW_STATE"}}],events:[{name:"hover",description:"Fires when hovered over feed row",type:{names:["Boolean"]}},{name:"focus",description:"Fires when focused over feed row",type:{names:["Boolean"]}}],slots:[{name:"default"},{name:"reactions",description:"Slot for reactions row component"},{name:"threading",description:"Slot for threading row component"},{name:"menu",description:"Slot for actions hover menu component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]};export{w as D,s as F,i as a};
//# sourceMappingURL=feed_item_row-eaaece0b.js.map
