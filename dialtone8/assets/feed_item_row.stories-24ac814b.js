import{a as m}from"./chunk-AY7I2SME-c7b6cf8a.js";import{e as R,c as h}from"./storybook_utils-010d0d6a.js";import{D as i}from"./avatar-cd7630e2.js";import{D as S}from"./lazy_show-ac5fd1cd.js";import{D as T}from"./list_item-ecb6cbdb.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as w}from"./emoji_text_wrapper-db8bb454.js";import{D as y}from"./icon-555c67be.js";import{D as A}from"./stack-793861c1.js";import{D as I,_ as C}from"./fry-c132109d.js";import{D as H}from"./button-82727ed7.js";const n={NORMAL:"",SEARCHED:"d-bgc-warning-subtle",ERROR:"d-bgc-critical-subtle"},o="NORMAL";const N={name:"DtRecipeFeedItemRow",components:{DtAvatar:i,DtLazyShow:S,DtListItem:T},inheritAttrs:!1,props:{showHeader:{type:Boolean,default:!1},avatarImageUrl:{type:String,default:""},displayName:{type:String,default:""},time:{type:String,default:""},shortTime:{type:String,default:""},isActive:{type:Boolean,default:!1},state:{type:String,default:o,validator:a=>Object.keys(n).includes(a)}},emits:["hover","focus"],data(){return{faded:!1}},computed:{avatarSeed(){return(this.displayName||"").split(" ").map(t=>t.charAt(0)).join("").slice(0,2).toUpperCase()},feedListeners(){return{...this.$listeners,mouseenter:()=>this.setHover(!0),mouseleave:()=>this.setHover(!1),focusin:()=>this.setFocus(!0),focusout:()=>this.setFocus(!1)}},listItemClasses(){return["d-w100p","d-box-border","d-ps-relative","d-px8",{"d-bgc-secondary-opaque":this.isActive&&this.state===o},n[this.state],"feed-item-row","d-t","d-tp-bgc"]}},methods:{setFocus(a){this.$emit("focus",a)},setHover(a){this.$emit("hover",a)},fade(){this.state===o||this.faded===!0||(this.$refs.FeedItemRef.$el.classList.remove(n[this.state]),this.faded=!0)}}};var k=function(){var e=this,t=e._self._c;return t("dt-list-item",e._g(e._b({ref:"FeedItemRef",class:e.listItemClasses,attrs:{"navigation-type":"none","data-qa":"feed-item-row"},scopedSlots:e._u([{key:"left",fn:function(){return[e.showHeader?t("dt-avatar",{attrs:{"full-name":e.displayName,"image-src":e.avatarImageUrl,"avatar-class":"d-mt4",seed:e.avatarSeed}}):e._e(),e.showHeader?e._e():t("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"d-fs-100 d-fw-normal d-ws-nowrap d-lh-100 d-fc-tertiary d-mb6",attrs:{"data-qa":"feed-item-row-left-time"}},[e._v(" "+e._s(e.shortTime)+" ")])]},proxy:!0},{key:"bottom",fn:function(){return[t("div",{staticClass:"d-d-flex d-fw-wrap",attrs:{"data-qa":"feed-item-row-reactions"}},[e._t("reactions")],2),e._t("threading")]},proxy:!0},{key:"right",fn:function(){return[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"d-ps-absolute d-tn16 d-r12",attrs:{"data-qa":"feed-item-row-menu"}},[t("dt-lazy-show",{attrs:{appear:!0,transition:"fade",show:e.isActive}},[e._t("menu")],2)],1)]},proxy:!0}],null,!0)},"dt-list-item",e.$attrs,!1),e.feedListeners),[t("article",[e.showHeader?t("div",{staticClass:"d-d-flex d-ai-center",attrs:{"data-qa":"feed-item-row-header"}},[t("p",{staticClass:"d-fs-200 d-lh-300 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap"},[e._v(" "+e._s(e.displayName)+" ")]),t("time",{staticClass:"d-fs-100 d-mt2 d-lh-300 d-fc-tertiary d-fw-normal d-ml4 d-fl-shrink0"},[e._v(" "+e._s(e.time)+" ")])]):e._e(),t("span",{staticClass:"content-text-wrapper-class",attrs:{"data-qa":"feed-item-row-content"}},[e._t("default")],2)])])},V=[],g=d(N,k,V,!1,null,null,null,null);const l=g.exports;g.exports.__docgenInfo={displayName:"DtRecipeFeedItemRow",exportName:"default",description:"",tags:{},props:[{name:"showHeader",description:"Show avatar, show header text or dont show left time and vice versa",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarImageUrl",description:"Show the avatar of the user, if this is not passed in, the initials would display",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"displayName",description:"The display name of the sender",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"time",description:`time string displayed as is.
Shown on the header when showHeader is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"shortTime",description:`short time string without AM/PM displayed as is.
Shown on the left of feed item when showHeader is false and isActive is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isActive",description:"displays a darkened background on the row.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"state",description:"state for the feed item row. Can be default, searched & error",type:{name:"string"},defaultValue:{func:!1,value:"DEFAULT_FEED_ROW_STATE"}}],events:[{name:"hover",description:"Fires when hovered over feed row",type:{names:["Boolean"]}},{name:"focus",description:"Fires when focused over feed row",type:{names:["Boolean"]}}],slots:[{name:"default"},{name:"reactions",description:"Slot for reactions row component"},{name:"threading",description:"Slot for threading row component"},{name:"menu",description:"Slot for actions hover menu component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]};const E={name:"DtRecipeFeedItemRowDefault",components:{DtAvatar:i,DtRecipeFeedItemRow:l,DtEmojiTextWrapper:w,DtIcon:y}};var P=function(){var e=this,t=e._self._c;return t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":e.showHeader,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":e.isActive,state:e.state},on:{hover:e.onHover,focus:e.onFocus},scopedSlots:e._u([e.threading?{key:"threading",fn:function(){return[t("div",{staticClass:"d-d-flex d-flow1 d-my6"},[t("dt-avatar",{attrs:{"image-src":"/common/assets/person.png","full-name":"Person Avatar",presence:"busy",seed:"seed",size:"sm"}}),t("dt-avatar",{attrs:{"image-src":"/common/assets/person.png","full-name":"Person Avatar",presence:"active",seed:"seed",size:"sm"}}),t("dt-avatar",{attrs:{"image-src":"/common/assets/person.png","full-name":"Person Avatar",seed:"seed",size:"sm"}}),t("div",{staticClass:"d-mx4 d-my-auto d-fs-100"},[e._v(" 3 replies ")])],1)]},proxy:!0}:null,e.reactions?{key:"reactions",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--outlined d-btn--xs",attrs:{"element-type":"button",size:"200"}},[t("span",{domProps:{innerHTML:e._s(e.reactions)}}),e._v(" :smile: ")])]},proxy:!0}:null,e.menu?{key:"menu",fn:function(){return[t("dt-icon",{attrs:{name:e.menu}})]},proxy:!0}:null],null,!0)},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)},$=[],x=d(E,P,$,!1,null,null,null,null);const z=x.exports;x.exports.__docgenInfo={displayName:"DtRecipeFeedItemRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]};const L={name:"DtRecipeFeedItemRowVariants",components:{DtEmojiTextWrapper:w,DtRecipeFeedItemRow:l,DtStack:A,DtAvatar:i,DtIcon:y,DtImageViewer:I,DtButton:H}};var O=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v("Feed item with showHeader as False and isActive true")]),t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:e.state},on:{hover:e.onHover,focus:e.onFocus},scopedSlots:e._u([{key:"threading",fn:function(){return[t("div",{staticClass:"d-d-flex d-d-flow1 d-my6"},[t("dt-avatar",{attrs:{"image-src":"/common/assets/person.png","full-name":"Person Avatar",presence:"busy",seed:"seed",size:"sm"}}),t("dt-avatar",{attrs:{"image-src":"/common/assets/person.png","full-name":"Person Avatar",presence:"active",seed:"seed",size:"sm"}}),t("dt-avatar",{attrs:{"image-src":"/common/assets/person.png","full-name":"Person Avatar",seed:"seed",size:"sm"}}),t("div",{staticClass:"d-mx4 d-my-auto d-fs-100"},[e._v(" 3 replies ")])],1)]},proxy:!0},{key:"reactions",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--outlined d-btn--xs",attrs:{"element-type":"button",size:"200"}},[e._v(" emoji reactions :smile: ")])]},proxy:!0},{key:"menu",fn:function(){return[t("dt-icon",{attrs:{name:e.menu}})]},proxy:!0}])},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)]),t("div",[t("h3",[e._v("Feed item with rich media")]),t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":!0,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0},on:{hover:e.onHover,focus:e.onFocus},scopedSlots:e._u([{key:"threading",fn:function(){return[t("div",{staticClass:"d-d-flex d-d-flow1 d-my6"},[t("dt-avatar",{attrs:{"image-src":"/common/assets/person.png","full-name":"Person Avatar",presence:"busy",seed:"seed",size:"sm"}}),t("dt-avatar",{attrs:{"image-src":"/common/assets/person.png","full-name":"Person Avatar",presence:"active",seed:"seed",size:"sm"}}),t("dt-avatar",{attrs:{"image-src":"/common/assets/person.png","full-name":"Person Avatar",seed:"seed",size:"sm"}}),t("div",{staticClass:"d-mx4 d-my-auto d-fs-100"},[e._v(" 3 replies ")])],1)]},proxy:!0},{key:"reactions",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--outlined d-btn--xs",attrs:{"element-type":"button",size:"200"}},[e._v(" emoji reactions :smile: ")])]},proxy:!0},e.menu?{key:"menu",fn:function(){return[t("dt-icon",{attrs:{name:e.menu}})]},proxy:!0}:null],null,!0)},[t("dt-image-viewer",{attrs:{"image-src":C,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}})],1)],1)]),t("div",[t("h3",[e._v('Feed item state "error"')]),t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:"ERROR"},on:{hover:e.onHover,focus:e.onFocus}},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)]),t("div",[t("h3",[e._v('Feed item state "searched"')]),t("dt-button",{on:{click:function(K){return e.$refs.feedItemRowFade.fade()}}},[e._v(" Click to fade ")]),t("ul",[t("dt-recipe-feed-item-row",{ref:"feedItemRowFade",attrs:{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:"SEARCHED"},on:{hover:e.onHover,focus:e.onFocus}},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)],1)])},j=[],b=d(L,O,j,!1,null,null,null,null);const q=b.exports;b.exports.__docgenInfo={displayName:"DtRecipeFeedItemRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]};const U=R(),D={avatarImageUrl:"https://i1.sndcdn.com/avatars-000181324408-652e57-t500x500.jpg",displayName:"Dwight Schrute",time:"4:54 PM",shortTime:"4:54",onFocus:m("focus"),onHover:m("hover"),default:`<p>Elementum fames nullam elementum velit proin vitae aliquet.
  Platea nulla consectetur consequat sagittis nullam et ultricies nisl rhoncus
  aliquet elementum venenatis quisque.</p>`,menu:"menu"},F={default:{control:"text",table:{type:{summary:"VNode"}}},threading:{name:"threading",control:"text",table:{category:"slots",type:{summary:"VNode"}}},reactions:{name:"reactions",control:"text",table:{category:"slots",type:{summary:"VNode"}}},menu:{name:"menu",options:U,table:{category:"slots",type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},state:{defaultValue:o,options:Object.keys(n),control:{type:"select",labels:{undefined:"(empty)"}},table:{defaultValue:{summary:o}}},onFocus:{table:{disable:!0}},onHover:{table:{disable:!0}}},M={title:"Recipes/Conversation View/Feed Item Row",component:l,args:D,argTypes:F,excludeStories:/.*Data$/},B=(a,{argTypes:e})=>h(a,e,z),W=(a,{argTypes:e})=>h(a,e,q),s={render:B,args:{showHeader:!0,reactions:"emoji reactions",threading:"threading"}},r={render:W,args:{}};var c,u,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    reactions: 'emoji reactions',
    threading: 'threading'
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,v,_;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {}
}`,...(_=(v=r.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const G=["argsData","argTypesData","Default","Variants"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Variants:r,__namedExportsOrder:G,argTypesData:F,argsData:D,default:M},Symbol.toStringTag,{value:"Module"}));export{s as D,ne as F,r as V};
//# sourceMappingURL=feed_item_row.stories-24ac814b.js.map
