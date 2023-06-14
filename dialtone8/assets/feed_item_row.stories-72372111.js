import{a as c}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as S,c as w}from"./storybook_utils-5c71a000.js";import{D as d}from"./avatar-8512ad5d.js";import{D as I}from"./lazy_show-ac5fd1cd.js";import{D as T}from"./list_item-f2499376.js";import{n as l}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as y}from"./emoji_text_wrapper-bafba93a.js";import{D as g}from"./icon-405b7e51.js";import{d as s}from"./person-13c0d6d2.js";import{D as A}from"./stack-793861c1.js";import{D as C,_ as H}from"./fry-5b9ebe9d.js";import{D as k}from"./button-82727ed7.js";const n={NORMAL:"",SEARCHED:"d-bgc-warning-subtle",ERROR:"d-bgc-critical-subtle"},i="NORMAL";const N={name:"DtRecipeFeedItemRow",components:{DtAvatar:d,DtLazyShow:I,DtListItem:T},inheritAttrs:!1,props:{showHeader:{type:Boolean,default:!1},avatarImageUrl:{type:String,default:""},displayName:{type:String,default:""},time:{type:String,default:""},shortTime:{type:String,default:""},isActive:{type:Boolean,default:!1},state:{type:String,default:i,validator:a=>Object.keys(n).includes(a)}},emits:["hover","focus"],data(){return{faded:!1}},computed:{avatarInitials(){return(this.displayName||"").split(" ").map(t=>t.charAt(0)).join("").slice(0,2).toUpperCase()},feedListeners(){return{...this.$listeners,mouseenter:()=>this.setHover(!0),mouseleave:()=>this.setHover(!1),focusin:()=>this.setFocus(!0),focusout:()=>this.setFocus(!1)}},listItemClasses(){return["d-w100p","d-box-border","d-ps-relative","d-px8",{"d-bgc-secondary-opaque":this.isActive&&this.state===i},n[this.state],"feed-item-row","d-t","d-tp-bgc"]}},methods:{setFocus(a){this.$emit("focus",a)},setHover(a){this.$emit("hover",a)},fade(){this.state===i||this.faded===!0||(this.$refs.FeedItemRef.$el.classList.remove(n[this.state]),this.faded=!0)}}};var q=function(){var e=this,t=e._self._c;return t("dt-list-item",e._g(e._b({ref:"FeedItemRef",class:e.listItemClasses,attrs:{"navigation-type":"none","data-qa":"feed-item-row"},scopedSlots:e._u([{key:"left",fn:function(){return[e.showHeader?t("dt-avatar",{attrs:{"avatar-class":"d-mt4",initials:e.avatarInitials}},[e.avatarImageUrl?t("img",{attrs:{"data-qa":"feed-item-row-avatar-img",alt:"",src:e.avatarImageUrl}}):e._e()]):e._e(),e.showHeader?e._e():t("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"d-fs-100 d-fw-normal d-ws-nowrap d-lh-100 d-fc-tertiary d-mb6",attrs:{"data-qa":"feed-item-row-left-time"}},[e._v(" "+e._s(e.shortTime)+" ")])]},proxy:!0},{key:"bottom",fn:function(){return[t("div",{staticClass:"d-d-flex d-fw-wrap",attrs:{"data-qa":"feed-item-row-reactions"}},[e._t("reactions")],2),e._t("threading")]},proxy:!0},{key:"right",fn:function(){return[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"d-ps-absolute d-tn16 d-r12",attrs:{"data-qa":"feed-item-row-menu"}},[t("dt-lazy-show",{attrs:{appear:!0,transition:"fade",show:e.isActive}},[e._t("menu")],2)],1)]},proxy:!0}],null,!0)},"dt-list-item",e.$attrs,!1),e.feedListeners),[t("article",[e.showHeader?t("div",{staticClass:"d-d-flex d-ai-center",attrs:{"data-qa":"feed-item-row-header"}},[t("p",{staticClass:"d-fs-200 d-lh-300 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap"},[e._v(" "+e._s(e.displayName)+" ")]),t("time",{staticClass:"d-fs-100 d-mt2 d-lh-300 d-fc-tertiary d-fw-normal d-ml4 d-fl-shrink0"},[e._v(" "+e._s(e.time)+" ")])]):e._e(),t("span",{staticClass:"content-text-wrapper-class",attrs:{"data-qa":"feed-item-row-content"}},[e._t("default")],2)])])},V=[],x=l(N,q,V,!1,null,null,null,null);const m=x.exports;x.exports.__docgenInfo={displayName:"DtRecipeFeedItemRow",exportName:"default",description:"",tags:{},props:[{name:"showHeader",description:"Show avatar, show header text or dont show left time and vice versa",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarImageUrl",description:"Show the avatar of the user, if this is not passed in, the initials would display",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"displayName",description:"The display name of the sender",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"time",description:`time string displayed as is.
Shown on the header when showHeader is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"shortTime",description:`short time string without AM/PM displayed as is.
Shown on the left of feed item when showHeader is false and isActive is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isActive",description:"displays a darkened background on the row.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"state",description:"state for the feed item row. Can be default, searched & error",type:{name:"string"},defaultValue:{func:!1,value:"DEFAULT_FEED_ROW_STATE"}}],events:[{name:"hover",description:"Fires when hovered over feed row",type:{names:["Boolean"]}},{name:"focus",description:"Fires when focused over feed row",type:{names:["Boolean"]}}],slots:[{name:"default"},{name:"reactions",description:"Slot for reactions row component"},{name:"threading",description:"Slot for threading row component"},{name:"menu",description:"Slot for actions hover menu component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]};const E={name:"DtRecipeFeedItemRowDefault",components:{DtAvatar:d,DtRecipeFeedItemRow:m,DtEmojiTextWrapper:y,DtIcon:g}};var P=function(){var e=this,t=e._self._c;return t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":e.showHeader,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":e.isActive,state:e.state},on:{hover:e.onHover,focus:e.onFocus},scopedSlots:e._u([e.threading?{key:"threading",fn:function(){return[t("div",{staticClass:"d-d-flex d-flow1 d-my6"},[t("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{presence:"active",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("div",{staticClass:"d-mx4 d-my-auto d-fs-100"},[e._v(" 3 replies ")])],1)]},proxy:!0}:null,e.reactions?{key:"reactions",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--outlined d-btn--xs",attrs:{"element-type":"button",size:"200"}},[t("span",{domProps:{innerHTML:e._s(e.reactions)}}),e._v(" :smile: ")])]},proxy:!0}:null,e.menu?{key:"menu",fn:function(){return[t("dt-icon",{attrs:{name:e.menu}})]},proxy:!0}:null],null,!0)},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)},$=[],b=l(E,P,$,!1,null,null,null,null);const z=b.exports;b.exports.__docgenInfo={displayName:"DtRecipeFeedItemRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]};const L={name:"DtRecipeFeedItemRowVariants",components:{DtEmojiTextWrapper:y,DtRecipeFeedItemRow:m,DtStack:A,DtAvatar:d,DtIcon:g,DtImageViewer:C,DtButton:k}};var O=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v("Feed item with showHeader as False and isActive true")]),t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:e.state},on:{hover:e.onHover,focus:e.onFocus},scopedSlots:e._u([{key:"threading",fn:function(){return[t("div",{staticClass:"d-d-flex d-d-flow1 d-my6"},[t("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{presence:"active",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("div",{staticClass:"d-mx4 d-my-auto d-fs-100"},[e._v(" 3 replies ")])],1)]},proxy:!0},{key:"reactions",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--outlined d-btn--xs",attrs:{"element-type":"button",size:"200"}},[e._v(" emoji reactions :smile: ")])]},proxy:!0},{key:"menu",fn:function(){return[t("dt-icon",{attrs:{name:e.menu}})]},proxy:!0}])},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)]),t("div",[t("h3",[e._v("Feed item with rich media")]),t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":!0,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0},on:{hover:e.onHover,focus:e.onFocus},scopedSlots:e._u([{key:"threading",fn:function(){return[t("div",{staticClass:"d-d-flex d-d-flow1 d-my6"},[t("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{presence:"active",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("div",{staticClass:"d-mx4 d-my-auto d-fs-100"},[e._v(" 3 replies ")])],1)]},proxy:!0},{key:"reactions",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--outlined d-btn--xs",attrs:{"element-type":"button",size:"200"}},[e._v(" emoji reactions :smile: ")])]},proxy:!0},e.menu?{key:"menu",fn:function(){return[t("dt-icon",{attrs:{name:e.menu}})]},proxy:!0}:null],null,!0)},[t("dt-image-viewer",{attrs:{"image-src":H,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}})],1)],1)]),t("div",[t("h3",[e._v('Feed item state "error"')]),t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:"ERROR"},on:{hover:e.onHover,focus:e.onFocus}},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)]),t("div",[t("h3",[e._v('Feed item state "searched"')]),t("dt-button",{on:{click:function(J){return e.$refs.feedItemRowFade.fade()}}},[e._v(" Click to fade ")]),t("ul",[t("dt-recipe-feed-item-row",{ref:"feedItemRowFade",attrs:{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:"SEARCHED"},on:{hover:e.onHover,focus:e.onFocus}},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)],1)])},j=[],D=l(L,O,j,!1,null,null,null,null);const U=D.exports;D.exports.__docgenInfo={displayName:"DtRecipeFeedItemRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]};const M=S(),F={avatarImageUrl:"https://i1.sndcdn.com/avatars-000181324408-652e57-t500x500.jpg",displayName:"Dwight Schrute",time:"4:54 PM",shortTime:"4:54",onFocus:c("focus"),onHover:c("hover"),default:`<p>Elementum fames nullam elementum velit proin vitae aliquet.
  Platea nulla consectetur consequat sagittis nullam et ultricies nisl rhoncus
  aliquet elementum venenatis quisque.</p>`,menu:"menu"},R={default:{control:"text",table:{type:{summary:"VNode"}}},threading:{name:"threading",control:"text",table:{category:"slots",type:{summary:"VNode"}}},reactions:{name:"reactions",control:"text",table:{category:"slots",type:{summary:"VNode"}}},menu:{name:"menu",options:M,table:{category:"slots",type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},state:{defaultValue:i,options:Object.keys(n),control:{type:"select",labels:{undefined:"(empty)"}},table:{defaultValue:{summary:i}}},onFocus:{table:{disable:!0}},onHover:{table:{disable:!0}}},B={title:"Recipes/Conversation View/Feed Item Row",component:m,args:F,argTypes:R,excludeStories:/.*Data$/},W=(a,{argTypes:e})=>w(a,e,z),G=(a,{argTypes:e})=>w(a,e,U),r={render:W,args:{showHeader:!0,reactions:"emoji reactions",threading:"threading"}},o={render:G,args:{}};var u,f,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    reactions: 'emoji reactions',
    threading: 'threading'
  }
}`,...(p=(f=r.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var v,_,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {}
}`,...(h=(_=o.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const K=["argsData","argTypesData","Default","Variants"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:K,argTypesData:R,argsData:F,default:B},Symbol.toStringTag,{value:"Module"}));export{r as D,de as F,o as V};
//# sourceMappingURL=feed_item_row.stories-72372111.js.map
