import{D as S}from"./avatar-5a9c331b.js";import{D as A}from"./lazy_show-7a941f46.js";import{D as b}from"./list_item-c40a9f8c.js";import{u as n,b as m,w as s,m as D,y as R,o,g as r,d as u,v as h,p,A as l,e as a,f as i,x as F}from"./vue.esm-bundler-24d82261.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const c={NORMAL:"",SEARCHED:"d-bgc-warning-subtle",ERROR:"d-bgc-critical-subtle"},f="NORMAL";const w={name:"DtRecipeFeedItemRow",components:{DtAvatar:S,DtLazyShow:A,DtListItem:b},inheritAttrs:!1,props:{showHeader:{type:Boolean,default:!1},avatarImageUrl:{type:String,default:""},displayName:{type:String,default:""},time:{type:String,default:""},shortTime:{type:String,default:""},isActive:{type:Boolean,default:!1},state:{type:String,default:f,validator:t=>Object.keys(c).includes(t)}},emits:["hover","focus"],data(){return{faded:!1}},computed:{avatarSeed(){return(this.displayName||"").split(" ").map(e=>e.charAt(0)).join("").slice(0,2).toUpperCase()},feedListeners(){return{mouseenter:()=>this.setHover(!0),mouseleave:()=>this.setHover(!1),focusin:()=>this.setFocus(!0),focusout:()=>this.setFocus(!1)}},listItemClasses(){return["d-w100p","d-box-border","d-ps-relative","d-px8",{"d-bgc-secondary-opaque":this.isActive&&this.state===f},c[this.state],"dt-feed-item-row","d-t","d-tp-bgc"]}},methods:{setFocus(t){this.$emit("focus",t)},setHover(t){this.$emit("hover",t)},fade(){this.state===f||this.faded===!0||(this.$refs.FeedItemRef.$el.classList.remove(c[this.state]),this.faded=!0)}}},I={key:0,"data-qa":"dt-feed-item-row--header",class:"d-d-flex d-ai-center"},N={class:"d-fs-200 d-lh-300 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap"},H={class:"d-fs-100 d-mt2 d-lh-300 d-fc-tertiary d-fw-normal d-ml4 d-fl-shrink0"},T={class:"content-text-wrapper-class","data-qa":"dt-feed-item-row--content"},k={class:"d-d-flex d-fw-wrap","data-qa":"dt-feed-item-row--reactions"},C={"data-qa":"dt-feed-item-row--menu",class:"d-ps-absolute d-tn16 d-r12"};function L(t,_,e,O,V,d){const v=n("dt-avatar"),y=n("dt-lazy-show"),g=n("dt-list-item");return o(),m(g,D({ref:"FeedItemRef","navigation-type":"none"},t.$attrs,{class:d.listItemClasses,"data-qa":"dt-feed-item-row"},R(d.feedListeners)),{left:s(()=>[e.showHeader?(o(),m(v,{key:0,"full-name":e.displayName,"image-src":e.avatarImageUrl,seed:d.avatarSeed},null,8,["full-name","image-src","seed"])):r("",!0),e.showHeader?r("",!0):u((o(),p("div",{key:1,class:"d-fs-100 d-fw-normal d-ws-nowrap d-lh-100 d-fc-tertiary d-mb6","data-qa":"dt-feed-item-row--left-time"},l(e.shortTime),513)),[[h,e.isActive]])]),bottom:s(()=>[a("div",k,[i(t.$slots,"reactions",{},void 0,!0)]),i(t.$slots,"threading",{},void 0,!0)]),right:s(()=>[u(a("div",C,[F(y,{appear:!0,transition:"fade",show:e.isActive},{default:s(()=>[i(t.$slots,"menu",{},void 0,!0)]),_:3},8,["show"])],512),[[h,e.isActive]])]),default:s(()=>[a("article",null,[e.showHeader?(o(),p("div",I,[a("p",N,l(e.displayName),1),a("time",H,l(e.time),1)])):r("",!0),a("span",T,[i(t.$slots,"default",{},void 0,!0)])])]),_:3},16,["class"])}const z=E(w,[["render",L],["__scopeId","data-v-eb26a263"]]);w.__docgenInfo={displayName:"DtRecipeFeedItemRow",exportName:"default",description:"",tags:{},props:[{name:"showHeader",description:"Show avatar, show header text or dont show left time and vice versa",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarImageUrl",description:"Show the avatar of the user, if this is not passed in, the initials would display",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"displayName",description:"The display name of the sender",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"time",description:`time string displayed as is.
Shown on the header when showHeader is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"shortTime",description:`short time string without AM/PM displayed as is.
Shown on the left of feed item when showHeader is false and isActive is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isActive",description:"displays a darkened background on the row.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"state",description:"state for the feed item row. Can be default, searched & error",type:{name:"string"},defaultValue:{func:!1,value:"DEFAULT_FEED_ROW_STATE"}}],events:[{name:"hover",description:"Fires when hovered over feed row",type:{names:["Boolean"]}},{name:"focus",description:"Fires when focused over feed row",type:{names:["Boolean"]}}],slots:[{name:"default"},{name:"reactions",description:"Slot for reactions row component"},{name:"threading",description:"Slot for threading row component"},{name:"menu",description:"Slot for actions hover menu component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]};export{z as D,c as F,f as a};
//# sourceMappingURL=feed_item_row-15137126.js.map