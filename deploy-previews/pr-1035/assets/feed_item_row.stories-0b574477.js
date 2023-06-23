import{a as f}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as A,c as x}from"./storybook_utils-7646992f.js";import{D as d}from"./avatar-57932b9c.js";import{D as C}from"./lazy_show-0b3a0cf0.js";import{D as k}from"./list_item-2e084e5b.js";import{n as l}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as b}from"./emoji_text_wrapper-f58e2ea9.js";import{D}from"./icon-ec2f9db3.js";import{d as s}from"./person-13c0d6d2.js";import{D as H}from"./stack-dfcd045d.js";import{_ as N,D as q}from"./fry-054079a2.js";import{D as V}from"./button-9102a84a.js";const n={NORMAL:"",SEARCHED:"d-bgc-warning-subtle",ERROR:"d-bgc-critical-subtle"},i="NORMAL";const E={name:"DtRecipeFeedItemRow",components:{DtAvatar:d,DtLazyShow:C,DtListItem:k},inheritAttrs:!1,props:{showHeader:{type:Boolean,default:!1},avatarImageUrl:{type:String,default:""},displayName:{type:String,default:""},time:{type:String,default:""},shortTime:{type:String,default:""},isActive:{type:Boolean,default:!1},state:{type:String,default:i,validator:a=>Object.keys(n).includes(a)}},emits:["hover","focus"],data(){return{faded:!1}},computed:{avatarInitials(){return(this.displayName||"").split(" ").map(t=>t.charAt(0)).join("").slice(0,2).toUpperCase()},feedListeners(){return{...this.$listeners,mouseenter:()=>this.setHover(!0),mouseleave:()=>this.setHover(!1),focusin:()=>this.setFocus(!0),focusout:()=>this.setFocus(!1)}},listItemClasses(){return["d-w100p","d-box-border","d-ps-relative","d-px8",{"d-bgc-secondary-opaque":this.isActive&&this.state===i},n[this.state],"feed-item-row","d-t","d-tp-bgc"]}},methods:{setFocus(a){this.$emit("focus",a)},setHover(a){this.$emit("hover",a)},fade(){this.state===i||this.faded===!0||(this.$refs.FeedItemRef.$el.classList.remove(n[this.state]),this.faded=!0)}}};var F=function(){var e=this,t=e._self._c;return t("dt-list-item",e._g(e._b({ref:"FeedItemRef",class:e.listItemClasses,attrs:{"navigation-type":"none","data-qa":"feed-item-row"},scopedSlots:e._u([{key:"left",fn:function(){return[e.showHeader?t("dt-avatar",{attrs:{"avatar-class":"d-mt4",initials:e.avatarInitials}},[e.avatarImageUrl?t("img",{attrs:{"data-qa":"feed-item-row-avatar-img",alt:"",src:e.avatarImageUrl}}):e._e()]):e._e(),e.showHeader?e._e():t("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"d-fs-100 d-fw-normal d-ws-nowrap d-lh-100 d-fc-tertiary d-mb6",attrs:{"data-qa":"feed-item-row-left-time"}},[e._v(" "+e._s(e.shortTime)+" ")])]},proxy:!0},{key:"bottom",fn:function(){return[t("div",{staticClass:"d-d-flex d-fw-wrap",attrs:{"data-qa":"feed-item-row-reactions"}},[e._t("reactions")],2),e._t("threading")]},proxy:!0},{key:"right",fn:function(){return[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"d-ps-absolute d-tn16 d-r12",attrs:{"data-qa":"feed-item-row-menu"}},[t("dt-lazy-show",{attrs:{appear:!0,transition:"fade",show:e.isActive}},[e._t("menu")],2)],1)]},proxy:!0}],null,!0)},"dt-list-item",e.$attrs,!1),e.feedListeners),[t("article",[e.showHeader?t("div",{staticClass:"d-d-flex d-ai-center",attrs:{"data-qa":"feed-item-row-header"}},[t("p",{staticClass:"d-fs-200 d-lh-300 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap"},[e._v(" "+e._s(e.displayName)+" ")]),t("time",{staticClass:"d-fs-100 d-mt2 d-lh-300 d-fc-tertiary d-fw-normal d-ml4 d-fl-shrink0"},[e._v(" "+e._s(e.time)+" ")])]):e._e(),t("span",{staticClass:"content-text-wrapper-class",attrs:{"data-qa":"feed-item-row-content"}},[e._t("default")],2)])])},P=[];F._withStripped=!0;var m=l(E,F,P,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue";const u=m.exports;m.exports.__docgenInfo={displayName:"DtRecipeFeedItemRow",exportName:"default",description:"",tags:{},props:[{name:"showHeader",description:"Show avatar, show header text or dont show left time and vice versa",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarImageUrl",description:"Show the avatar of the user, if this is not passed in, the initials would display",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"displayName",description:"The display name of the sender",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"time",description:`time string displayed as is.
Shown on the header when showHeader is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"shortTime",description:`short time string without AM/PM displayed as is.
Shown on the left of feed item when showHeader is false and isActive is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isActive",description:"displays a darkened background on the row.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"state",description:"state for the feed item row. Can be default, searched & error",type:{name:"string"},defaultValue:{func:!1,value:"DEFAULT_FEED_ROW_STATE"}}],events:[{name:"hover",description:"Fires when hovered over feed row",type:{names:["Boolean"]}},{name:"focus",description:"Fires when focused over feed row",type:{names:["Boolean"]}}],slots:[{name:"default"},{name:"reactions",description:"Slot for reactions row component"},{name:"threading",description:"Slot for threading row component"},{name:"menu",description:"Slot for actions hover menu component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]};const $={name:"DtRecipeFeedItemRowDefault",components:{DtAvatar:d,DtRecipeFeedItemRow:u,DtEmojiTextWrapper:b,DtIcon:D}};var R=function(){var e=this,t=e._self._c;return t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":e.showHeader,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":e.isActive,state:e.state},on:{hover:e.onHover,focus:e.onFocus},scopedSlots:e._u([e.threading?{key:"threading",fn:function(){return[t("div",{staticClass:"d-d-flex d-flow1 d-my6"},[t("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{presence:"active",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("div",{staticClass:"d-mx4 d-my-auto d-fs-100"},[e._v(" 3 replies ")])],1)]},proxy:!0}:null,e.reactions?{key:"reactions",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--outlined d-btn--xs",attrs:{"element-type":"button",size:"200"}},[t("span",{domProps:{innerHTML:e._s(e.reactions)}}),e._v(" :smile: ")])]},proxy:!0}:null,e.menu?{key:"menu",fn:function(){return[t("dt-icon",{attrs:{name:e.menu}})]},proxy:!0}:null],null,!0)},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)},z=[];R._withStripped=!0;var c=l($,R,z,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue";const L=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeFeedItemRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]};const O={name:"DtRecipeFeedItemRowVariants",components:{DtEmojiTextWrapper:b,DtRecipeFeedItemRow:u,DtStack:H,DtAvatar:d,DtIcon:D,DtImageViewer:q,DtButton:V}};var S=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v("Feed item with showHeader as False and isActive true")]),t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:e.state},on:{hover:e.onHover,focus:e.onFocus},scopedSlots:e._u([{key:"threading",fn:function(){return[t("div",{staticClass:"d-d-flex d-d-flow1 d-my6"},[t("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{presence:"active",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("div",{staticClass:"d-mx4 d-my-auto d-fs-100"},[e._v(" 3 replies ")])],1)]},proxy:!0},{key:"reactions",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--outlined d-btn--xs",attrs:{"element-type":"button",size:"200"}},[e._v(" emoji reactions :smile: ")])]},proxy:!0},{key:"menu",fn:function(){return[t("dt-icon",{attrs:{name:e.menu}})]},proxy:!0}])},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)]),t("div",[t("h3",[e._v("Feed item with rich media")]),t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":!0,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0},on:{hover:e.onHover,focus:e.onFocus},scopedSlots:e._u([{key:"threading",fn:function(){return[t("div",{staticClass:"d-d-flex d-d-flow1 d-my6"},[t("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{presence:"active",seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("dt-avatar",{attrs:{seed:"seed",size:"sm"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:s,alt:"Person Avatar"}})]),t("div",{staticClass:"d-mx4 d-my-auto d-fs-100"},[e._v(" 3 replies ")])],1)]},proxy:!0},{key:"reactions",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"d-btn d-btn--outlined d-btn--xs",attrs:{"element-type":"button",size:"200"}},[e._v(" emoji reactions :smile: ")])]},proxy:!0},e.menu?{key:"menu",fn:function(){return[t("dt-icon",{attrs:{name:e.menu}})]},proxy:!0}:null],null,!0)},[t("dt-image-viewer",{attrs:{"image-src":N,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}})],1)],1)]),t("div",[t("h3",[e._v('Feed item state "error"')]),t("ul",[t("dt-recipe-feed-item-row",{attrs:{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:"ERROR"},on:{hover:e.onHover,focus:e.onFocus}},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)]),t("div",[t("h3",[e._v('Feed item state "searched"')]),t("dt-button",{on:{click:function(J){return e.$refs.feedItemRowFade.fade()}}},[e._v(" Click to fade ")]),t("ul",[t("dt-recipe-feed-item-row",{ref:"feedItemRowFade",attrs:{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:"SEARCHED"},on:{hover:e.onHover,focus:e.onFocus}},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)],1)],1)])},j=[];S._withStripped=!0;var p=l(O,S,j,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue";const U=p.exports;p.exports.__docgenInfo={displayName:"DtRecipeFeedItemRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]};const M=A(),I={avatarImageUrl:"https://i1.sndcdn.com/avatars-000181324408-652e57-t500x500.jpg",displayName:"Dwight Schrute",time:"4:54 PM",shortTime:"4:54",onFocus:f("focus"),onHover:f("hover"),default:`<p>Elementum fames nullam elementum velit proin vitae aliquet.
  Platea nulla consectetur consequat sagittis nullam et ultricies nisl rhoncus
  aliquet elementum venenatis quisque.</p>`,menu:"menu"},T={default:{control:"text",table:{type:{summary:"VNode"}}},threading:{name:"threading",control:"text",table:{category:"slots",type:{summary:"VNode"}}},reactions:{name:"reactions",control:"text",table:{category:"slots",type:{summary:"VNode"}}},menu:{name:"menu",options:M,table:{category:"slots",type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},state:{defaultValue:i,options:Object.keys(n),control:{type:"select",labels:{undefined:"(empty)"}},table:{defaultValue:{summary:i}}},onFocus:{table:{disable:!0}},onHover:{table:{disable:!0}}},B={title:"Recipes/Conversation View/Feed Item Row",component:u,args:I,argTypes:T,excludeStories:/.*Data$/},W=(a,{argTypes:e})=>x(a,e,L),G=(a,{argTypes:e})=>x(a,e,U),r={render:W,args:{showHeader:!0,reactions:"emoji reactions",threading:"threading"}},o={render:G,args:{}};var v,_,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    reactions: 'emoji reactions',
    threading: 'threading'
  }
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var w,y,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {}
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const K=["argsData","argTypesData","Default","Variants"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:K,argTypesData:T,argsData:I,default:B},Symbol.toStringTag,{value:"Module"}));export{r as D,de as F,o as V};
//# sourceMappingURL=feed_item_row.stories-0b574477.js.map
