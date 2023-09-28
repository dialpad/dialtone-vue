import{D as S}from"./avatar-892227d2.js";import{D as A}from"./lazy_show-4d85a9f6.js";import{D}from"./list_item-ed24eecf.js";import{u as r,b as c,w as o,m as R,y as b,o as i,f as a,d as u,v as h,p,A as l,e as s,g as n,x as F}from"./vue.esm-bundler-735640fd.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const f={NORMAL:"",SEARCHED:"d-bgc-warning-subtle",ERROR:"d-bgc-critical-subtle"},m="NORMAL";const w={name:"DtRecipeFeedItemRow",components:{DtAvatar:S,DtLazyShow:A,DtListItem:D},inheritAttrs:!1,props:{showHeader:{type:Boolean,default:!1},avatarImageUrl:{type:String,default:""},displayName:{type:String,default:""},time:{type:String,default:""},shortTime:{type:String,default:""},isActive:{type:Boolean,default:!1},state:{type:String,default:m,validator:t=>Object.keys(f).includes(t)}},emits:["hover","focus"],data(){return{faded:!1}},computed:{avatarSeed(){return(this.displayName||"").split(" ").map(e=>e.charAt(0)).join("").slice(0,2).toUpperCase()},feedListeners(){return{mouseenter:()=>this.setHover(!0),mouseleave:()=>this.setHover(!1),focusin:()=>this.setFocus(!0),focusout:()=>this.setFocus(!1)}},listItemClasses(){return["d-w100p","d-box-border","d-ps-relative","d-px8",{"d-bgc-secondary-opaque":this.isActive&&this.state===m},f[this.state],"dt-feed-item-row","d-t","d-tp-bgc"]}},methods:{setFocus(t){this.$emit("focus",t)},setHover(t){this.$emit("hover",t)},fade(){this.state===m||this.faded===!0||(this.$refs.FeedItemRef.$el.classList.remove(f[this.state]),this.faded=!0)}}},I={key:0,"data-qa":"dt-feed-item-row--header",class:"d-d-flex d-ai-center"},N={class:"d-fs-200 d-lh-300 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap"},k={class:"d-fs-100 d-mt2 d-lh-300 d-fc-tertiary d-fw-normal d-ml4 d-fl-shrink0"},H={class:"content-text-wrapper-class","data-qa":"dt-feed-item-row--content"},T={class:"d-d-flex d-fw-wrap","data-qa":"dt-feed-item-row--reactions"},C={"data-qa":"dt-feed-item-row--menu",class:"d-ps-absolute d-tn24 d-r12"};function L(t,v,e,O,V,d){const _=r("dt-avatar"),y=r("dt-lazy-show"),g=r("dt-list-item");return i(),c(g,R({ref:"FeedItemRef","navigation-type":"none"},t.$attrs,{class:d.listItemClasses,"data-qa":"dt-feed-item-row"},b(d.feedListeners)),{left:o(()=>[e.showHeader?(i(),c(_,{key:0,"full-name":e.displayName,"image-src":e.avatarImageUrl,seed:d.avatarSeed},null,8,["full-name","image-src","seed"])):a("v-if",!0),a(" show time instead of avatar when headers not present "),e.showHeader?a("v-if",!0):u((i(),p("div",{key:1,class:"d-fs-100 d-fw-normal d-ws-nowrap d-lh-100 d-fc-tertiary d-mb6 d-h100p d-mt16","data-qa":"dt-feed-item-row--left-time"},l(e.shortTime),513)),[[h,e.isActive]])]),bottom:o(()=>[s("div",T,[a(" @slot Slot for reactions row component "),n(t.$slots,"reactions",{},void 0,!0)]),a(" @slot Slot for threading row component "),n(t.$slots,"threading",{},void 0,!0)]),right:o(()=>[u(s("div",C,[F(y,{appear:!0,transition:"fade",show:e.isActive},{default:o(()=>[a(" @slot Slot for actions hover menu component "),n(t.$slots,"menu",{},void 0,!0)]),_:3},8,["show"])],512),[[h,e.isActive]])]),default:o(()=>[s("article",null,[a(" Feed Item "),e.showHeader?(i(),p("div",I,[s("p",N,l(e.displayName),1),s("time",k,l(e.time),1)])):a("v-if",!0),a(" @slot Default content slot for feed item row "),s("span",H,[n(t.$slots,"default",{},void 0,!0)])])]),_:3},16,["class"])}const z=E(w,[["render",L],["__scopeId","data-v-58072825"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]]);w.__docgenInfo={displayName:"DtRecipeFeedItemRow",exportName:"default",description:"",tags:{},props:[{name:"showHeader",description:"Show avatar, show header text or dont show left time and vice versa",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarImageUrl",description:"Show the avatar of the user, if this is not passed in, the initials would display",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"displayName",description:"The display name of the sender",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"time",description:`time string displayed as is.
Shown on the header when showHeader is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"shortTime",description:`short time string without AM/PM displayed as is.
Shown on the left of feed item when showHeader is false and isActive is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isActive",description:"displays a darkened background on the row.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"state",description:"state for the feed item row. Can be default, searched & error",type:{name:"string"},defaultValue:{func:!1,value:"DEFAULT_FEED_ROW_STATE"}}],events:[{name:"hover",description:"Fires when hovered over feed row",type:{names:["Boolean"]}},{name:"focus",description:"Fires when focused over feed row",type:{names:["Boolean"]}}],slots:[{name:"default"},{name:"reactions",description:"Slot for reactions row component"},{name:"threading",description:"Slot for threading row component"},{name:"menu",description:"Slot for actions hover menu component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]};export{z as D,f as F,m as a};
//# sourceMappingURL=feed_item_row-9d3825b1.js.map
