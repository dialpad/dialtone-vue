import{D as g}from"./avatar-0d321951.js";import{D as S}from"./lazy_show-a8336f86.js";import{D}from"./list_item-16fbd63d.js";import{t as r,b as A,w as o,m as R,u as b,o as n,f as a,g as i,x as c,d as u,v as h,p,z as d,e as s}from"./vue.esm-bundler-807df745.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const l={NORMAL:"",SEARCHED:"d-bgc-warning-subtle",ERROR:"d-bgc-critical-subtle"},f="NORMAL";const v={name:"DtRecipeFeedItemRow",components:{DtAvatar:g,DtLazyShow:S,DtListItem:D},inheritAttrs:!1,props:{avatarSeed:{type:String,default:null},showHeader:{type:Boolean,default:!1},avatarImageUrl:{type:String,default:""},displayName:{type:String,default:""},time:{type:String,default:""},shortTime:{type:String,default:""},isActive:{type:Boolean,default:!1},state:{type:String,default:f,validator:e=>Object.keys(l).includes(e)}},emits:["hover","focus"],data(){return{faded:!1}},computed:{feedListeners(){return{mouseenter:()=>this.setHover(!0),mouseleave:()=>this.setHover(!1),focusin:()=>this.setFocus(!0),focusout:()=>this.setFocus(!1)}},listItemClasses(){return["d-w100p","d-box-border","d-ps-relative","d-px8",{"d-bgc-secondary-opaque":this.isActive&&this.state===f},l[this.state],"dt-feed-item-row","d-t","d-tp-bgc"]}},methods:{setFocus(e){this.$emit("focus",e)},setHover(e){this.$emit("hover",e)},fade(){this.state===f||this.faded===!0||(this.$refs.FeedItemRef.$el.classList.remove(l[this.state]),this.faded=!0)}}},E={key:0,"data-qa":"dt-feed-item-row--header",class:"d-d-flex d-ai-center"},I={class:"d-fs-200 d-lh-300 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap"},k={class:"d-fs-100 d-mt2 d-lh-300 d-fc-tertiary d-fw-normal d-ml4 d-fl-shrink0"},H={class:"content-text-wrapper-class","data-qa":"dt-feed-item-row--content"},N={class:"d-d-flex d-fw-wrap","data-qa":"dt-feed-item-row--reactions"},T={"data-qa":"dt-feed-item-row--menu",class:"d-ps-absolute d-tn24 d-r12"};function V(e,L,t,O,B,m){const w=r("dt-avatar"),_=r("dt-lazy-show"),y=r("dt-list-item");return n(),A(y,R({ref:"FeedItemRef","navigation-type":"none"},e.$attrs,{class:m.listItemClasses,"data-qa":"dt-feed-item-row"},b(m.feedListeners)),{left:o(()=>[a(" @slot Slot to contain the avatar, overrides avatar props. "),t.showHeader?i(e.$slots,"avatar",{key:0},()=>[c(w,{"full-name":t.displayName,"image-src":t.avatarImageUrl,seed:t.avatarSeed},null,8,["full-name","image-src","seed"])],!0):a("v-if",!0),a(" show time instead of avatar when headers not present "),t.showHeader?a("v-if",!0):u((n(),p("div",{key:1,class:"dt-feed-item-row__left-time","data-qa":"dt-feed-item-row--left-time"},d(t.shortTime),513)),[[h,t.isActive]])]),bottom:o(()=>[s("div",N,[a(" @slot Slot for reactions row component "),i(e.$slots,"reactions",{},void 0,!0)]),a(" @slot Slot for threading row component "),i(e.$slots,"threading",{},void 0,!0)]),right:o(()=>[u(s("div",T,[c(_,{appear:!0,transition:"fade",show:t.isActive},{default:o(()=>[a(" @slot Slot for actions hover menu component "),i(e.$slots,"menu",{},void 0,!0)]),_:3},8,["show"])],512),[[h,t.isActive]])]),default:o(()=>[s("article",null,[a(" Feed Item "),t.showHeader?(n(),p("div",E,[s("p",I,d(t.displayName),1),s("time",k,d(t.time),1)])):a("v-if",!0),a(" @slot Default content slot for feed item row "),s("span",H,[i(e.$slots,"default",{},void 0,!0)])])]),_:3},16,["class"])}const M=F(v,[["render",V],["__scopeId","data-v-58072825"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]]);v.__docgenInfo={displayName:"DtRecipeFeedItemRow",exportName:"default",description:"",tags:{},props:[{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"showHeader",description:"Show avatar, show header text or dont show left time and vice versa",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarImageUrl",description:"Show the avatar of the user, if this is not passed in, the initials would display",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"displayName",description:"The display name of the sender",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"time",description:`time string displayed as is.
Shown on the header when showHeader is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"shortTime",description:`short time string without AM/PM displayed as is.
Shown on the left of feed item when showHeader is false and isActive is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isActive",description:"displays a darkened background on the row.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"state",description:"state for the feed item row. Can be default, searched & error",type:{name:"string"},defaultValue:{func:!1,value:"DEFAULT_FEED_ROW_STATE"}}],events:[{name:"hover",description:"Fires when hovered over feed row",type:{names:["Boolean"]}},{name:"focus",description:"Fires when focused over feed row",type:{names:["Boolean"]}}],slots:[{name:"avatar",description:"Slot to contain the avatar, overrides avatar props."},{name:"default"},{name:"reactions",description:"Slot for reactions row component"},{name:"threading",description:"Slot for threading row component"},{name:"menu",description:"Slot for actions hover menu component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]};export{M as D,l as F,f as a};
//# sourceMappingURL=feed_item_row-fdd372e3.js.map
