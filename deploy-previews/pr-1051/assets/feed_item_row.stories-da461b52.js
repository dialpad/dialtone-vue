import{a as S}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as X,c as C}from"./storybook_utils-a2047fb2.js";import{D as H}from"./avatar-83f13b35.js";import{D as Y}from"./lazy_show-30f95b43.js";import{D as Z}from"./list_item-3f766c8b.js";import{a as r,b as $,w as t,m as x,B as ee,o as d,f as m,k as n,e as k,v as A,t as D,g as a,l as g,d as s,z as M,s as y}from"./vue.esm-bundler-3bf5edd9.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{D as j}from"./emoji_text_wrapper-2a48067f.js";import{D as O}from"./icon-28829c6f.js";import{d as l}from"./person-13c0d6d2.js";import{D as te}from"./stack-990dc610.js";import{D as ae,i as se}from"./fry-6c7da85a.js";import{D as oe}from"./button-59f99281.js";const b={NORMAL:"",SEARCHED:"d-bgc-warning-subtle",ERROR:"d-bgc-critical-subtle"},w="NORMAL";const P={name:"DtRecipeFeedItemRow",components:{DtAvatar:H,DtLazyShow:Y,DtListItem:Z},inheritAttrs:!1,props:{showHeader:{type:Boolean,default:!1},avatarImageUrl:{type:String,default:""},displayName:{type:String,default:""},time:{type:String,default:""},shortTime:{type:String,default:""},isActive:{type:Boolean,default:!1},state:{type:String,default:w,validator:e=>Object.keys(b).includes(e)}},emits:["hover","focus"],data(){return{faded:!1}},computed:{avatarInitials(){return(this.displayName||"").split(" ").map(o=>o.charAt(0)).join("").slice(0,2).toUpperCase()},feedListeners(){return{mouseenter:()=>this.setHover(!0),mouseleave:()=>this.setHover(!1),focusin:()=>this.setFocus(!0),focusout:()=>this.setFocus(!1)}},listItemClasses(){return["d-w100p","d-box-border","d-ps-relative","d-px8",{"d-bgc-secondary-opaque":this.isActive&&this.state===w},b[this.state],"feed-item-row","d-t","d-tp-bgc"]}},methods:{setFocus(e){this.$emit("focus",e)},setHover(e){this.$emit("hover",e)},fade(){this.state===w||this.faded===!0||(this.$refs.FeedItemRef.$el.classList.remove(b[this.state]),this.faded=!0)}}},ne=["src"],re={key:0,"data-qa":"feed-item-row-header",class:"d-d-flex d-ai-center"},ie={class:"d-fs-200 d-lh-300 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap"},de={class:"d-fs-100 d-mt2 d-lh-300 d-fc-tertiary d-fw-normal d-ml4 d-fl-shrink0"},le={class:"content-text-wrapper-class","data-qa":"feed-item-row-content"},me={class:"d-d-flex d-fw-wrap","data-qa":"feed-item-row-reactions"},ue={"data-qa":"feed-item-row-menu",class:"d-ps-absolute d-tn16 d-r12"};function ce(e,h,o,I,F,_){const i=r("dt-avatar"),c=r("dt-lazy-show"),f=r("dt-list-item");return d(),$(f,x({ref:"FeedItemRef","navigation-type":"none"},e.$attrs,{class:_.listItemClasses,"data-qa":"feed-item-row"},ee(_.feedListeners)),{left:t(()=>[o.showHeader?(d(),$(i,{key:0,"avatar-class":"d-mt4",initials:_.avatarInitials},{default:t(()=>[o.avatarImageUrl?(d(),m("img",{key:0,"data-qa":"feed-item-row-avatar-img",alt:"",src:o.avatarImageUrl},null,8,ne)):n("v-if",!0)]),_:1},8,["initials"])):n("v-if",!0),n(" show time instead of avatar when headers not present "),o.showHeader?n("v-if",!0):k((d(),m("div",{key:1,class:"d-fs-100 d-fw-normal d-ws-nowrap d-lh-100 d-fc-tertiary d-mb6","data-qa":"feed-item-row-left-time"},D(o.shortTime),513)),[[A,o.isActive]])]),bottom:t(()=>[a("div",me,[n(" @slot Slot for reactions row component "),g(e.$slots,"reactions")]),n(" @slot Slot for threading row component "),g(e.$slots,"threading")]),right:t(()=>[k(a("div",ue,[s(c,{appear:!0,transition:"fade",show:o.isActive},{default:t(()=>[n(" @slot Slot for actions hover menu component "),g(e.$slots,"menu")]),_:3},8,["show"])],512),[[A,o.isActive]])]),default:t(()=>[a("article",null,[n(" Feed Item "),o.showHeader?(d(),m("div",re,[a("p",ie,D(o.displayName),1),a("time",de,D(o.time),1)])):n("v-if",!0),n(" @slot Default content slot for feed item row "),a("span",le,[g(e.$slots,"default")])])]),_:3},16,["class"])}const R=T(P,[["render",ce],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]]);P.__docgenInfo={displayName:"DtRecipeFeedItemRow",exportName:"default",description:"",tags:{},props:[{name:"showHeader",description:"Show avatar, show header text or dont show left time and vice versa",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarImageUrl",description:"Show the avatar of the user, if this is not passed in, the initials would display",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"displayName",description:"The display name of the sender",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"time",description:`time string displayed as is.
Shown on the header when showHeader is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"shortTime",description:`short time string without AM/PM displayed as is.
Shown on the left of feed item when showHeader is false and isActive is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isActive",description:"displays a darkened background on the row.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"state",description:"state for the feed item row. Can be default, searched & error",type:{name:"string"},defaultValue:{func:!1,value:"DEFAULT_FEED_ROW_STATE"}}],events:[{name:"hover",description:"Fires when hovered over feed row",type:{names:["Boolean"]}},{name:"focus",description:"Fires when focused over feed row",type:{names:["Boolean"]}}],slots:[{name:"default"},{name:"reactions",description:"Slot for reactions row component"},{name:"threading",description:"Slot for threading row component"},{name:"menu",description:"Slot for actions hover menu component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]};const U={name:"DtRecipeFeedItemRowDefault",components:{DtAvatar:H,DtRecipeFeedItemRow:R,DtEmojiTextWrapper:j,DtIcon:O}},fe=["innerHTML"],pe={class:"d-d-flex d-flow1 d-my6"},ve=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),he=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),_e=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),we=a("div",{class:"d-mx4 d-my-auto d-fs-100"}," 3 replies ",-1),ge=["innerHTML"];function ye(e,h,o,I,F,_){const i=r("dt-avatar"),c=r("dt-emoji-text-wrapper"),f=r("dt-icon"),p=r("dt-recipe-feed-item-row");return d(),m("ul",null,[s(p,{"show-header":e.showHeader,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":e.isActive,state:e.state,onHover:e.onHover,onFocus:e.onFocus},M({default:t(()=>[e.$attrs.default?(d(),m("span",{key:0,innerHTML:e.$attrs.default},null,8,fe)):n("v-if",!0)]),_:2},[e.$attrs.threading?{name:"threading",fn:t(()=>[a("div",pe,[s(i,{presence:"busy",seed:"seed",size:"sm"},{default:t(()=>[ve]),_:1}),s(i,{presence:"active",seed:"seed",size:"sm"},{default:t(()=>[he]),_:1}),s(i,{seed:"seed",size:"sm"},{default:t(()=>[_e]),_:1}),we])]),key:"0"}:void 0,e.$attrs.reactions?{name:"reactions",fn:t(()=>[s(c,{class:"d-btn d-btn--outlined d-btn--xs","element-type":"button",size:"200"},{default:t(()=>[a("span",{innerHTML:e.$attrs.reactions},null,8,ge),y(" :smile: ")]),_:1})]),key:"1"}:void 0,e.menu?{name:"menu",fn:t(()=>[s(f,{name:e.$attrs.menu},null,8,["name"])]),key:"2"}:void 0]),1032,["show-header","avatar-image-url","display-name","time","short-time","is-active","state","onHover","onFocus"])])}const be=T(U,[["render",ye],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]]);U.__docgenInfo={displayName:"DtRecipeFeedItemRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]};const B={name:"DtRecipeFeedItemRowVariants",components:{DtEmojiTextWrapper:j,DtRecipeFeedItemRow:R,DtStack:te,DtAvatar:H,DtIcon:O,DtImageViewer:ae,DtButton:oe},data(){return{image:se}}},Fe=a("h3",null,"Feed item with showHeader as False and isActive true",-1),De=["innerHTML"],$e={class:"d-d-flex d-d-flow1 d-my6"},He=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),Te=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),Re=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),Ie=a("div",{class:"d-mx4 d-my-auto d-fs-100"}," 3 replies ",-1),Se=a("h3",null,"Feed item with rich media",-1),ke={class:"d-d-flex d-d-flow1 d-my6"},Ae=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),Ne=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),Ve=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),qe=a("div",{class:"d-mx4 d-my-auto d-fs-100"}," 3 replies ",-1),Ee=a("h3",null,'Feed item state "error"',-1),Le=["innerHTML"],ze=a("h3",null,'Feed item state "searched"',-1),Ce=["innerHTML"];function Me(e,h,o,I,F,_){const i=r("dt-avatar"),c=r("dt-emoji-text-wrapper"),f=r("dt-icon"),p=r("dt-recipe-feed-item-row"),K=r("dt-image-viewer"),J=r("dt-button"),Q=r("dt-stack");return d(),$(Q,{gap:"600"},{default:t(()=>[a("div",null,[Fe,a("ul",null,[s(p,{"show-header":!1,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,state:e.state,onHover:e.onHover,onFocus:e.onFocus},{threading:t(()=>[a("div",$e,[s(i,{presence:"busy",seed:"seed",size:"sm"},{default:t(()=>[He]),_:1}),s(i,{presence:"active",seed:"seed",size:"sm"},{default:t(()=>[Te]),_:1}),s(i,{seed:"seed",size:"sm"},{default:t(()=>[Re]),_:1}),Ie])]),reactions:t(()=>[s(c,{class:"d-btn d-btn--outlined d-btn--xs","element-type":"button",size:"200"},{default:t(()=>[y(" emoji reactions :smile: ")]),_:1})]),menu:t(()=>[s(f,{name:e.$attrs.menu},null,8,["name"])]),default:t(()=>[e.$attrs.default?(d(),m("span",{key:0,innerHTML:e.$attrs.default},null,8,De)):n("v-if",!0)]),_:1},8,["avatar-image-url","display-name","time","short-time","state","onHover","onFocus"])])]),a("div",null,[Se,a("ul",null,[s(p,{"show-header":!0,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,onHover:e.$attrs.onHover,onFocus:e.$attrs.onFocus},M({threading:t(()=>[a("div",ke,[s(i,{presence:"busy",seed:"seed",size:"sm"},{default:t(()=>[Ae]),_:1}),s(i,{presence:"active",seed:"seed",size:"sm"},{default:t(()=>[Ne]),_:1}),s(i,{seed:"seed",size:"sm"},{default:t(()=>[Ve]),_:1}),qe])]),reactions:t(()=>[s(c,{class:"d-btn d-btn--outlined d-btn--xs","element-type":"button",size:"200"},{default:t(()=>[y(" emoji reactions :smile: ")]),_:1})]),default:t(()=>[s(K,{"image-src":F.image,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"},null,8,["image-src"])]),_:2},[e.$attrs.menu?{name:"menu",fn:t(()=>[s(f,{name:e.$attrs.menu},null,8,["name"])]),key:"0"}:void 0]),1032,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])]),a("div",null,[Ee,a("ul",null,[s(p,{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:"ERROR",onHover:e.onHover,onFocus:e.onFocus},{default:t(()=>[e.defaultSlot?(d(),m("span",{key:0,innerHTML:e.defaultSlot},null,8,Le)):n("v-if",!0)]),_:1},8,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])]),a("div",null,[ze,s(J,{onClick:h[0]||(h[0]=Ge=>e.$refs.feedItemRowFade.fade())},{default:t(()=>[y(" Click to fade ")]),_:1}),a("ul",null,[s(p,{ref:"feedItemRowFade","show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:"SEARCHED",onHover:e.onHover,onFocus:e.onFocus},{default:t(()=>[e.defaultSlot?(d(),m("span",{key:0,innerHTML:e.defaultSlot},null,8,Ce)):n("v-if",!0)]),_:1},8,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])])]),_:1})}const je=T(B,[["render",Me],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]]);B.__docgenInfo={displayName:"DtRecipeFeedItemRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]};const Oe=X(),W={avatarImageUrl:"https://i1.sndcdn.com/avatars-000181324408-652e57-t500x500.jpg",displayName:"Dwight Schrute",time:"4:54 PM",shortTime:"4:54",onFocus:S("focus"),onHover:S("hover"),default:`<p>Elementum fames nullam elementum velit proin vitae aliquet.
  Platea nulla consectetur consequat sagittis nullam et ultricies nisl rhoncus
  aliquet elementum venenatis quisque.</p>`,menu:"menu"},G={default:{control:"text",table:{type:{summary:"VNode"}}},threading:{name:"threading",control:"text",table:{category:"slots",type:{summary:"VNode"}}},reactions:{name:"reactions",control:"text",table:{category:"slots",type:{summary:"VNode"}}},menu:{name:"menu",options:Oe,table:{category:"slots",type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},state:{defaultValue:w,options:Object.keys(b),control:{type:"select",labels:{undefined:"(empty)"}},table:{defaultValue:{summary:w}}},onFocus:{table:{disable:!0}},onHover:{table:{disable:!0}}},Pe={title:"Recipes/Conversation View/Feed Item Row",component:R,args:W,argTypes:G,excludeStories:/.*Data$/},Ue=e=>C(e,be),Be=e=>C(e,je),u={render:Ue,args:{showHeader:!0,reactions:"emoji reactions",threading:"threading"}};u.parameters={a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"color-contrast",enabled:!1}]}}};const v={render:Be,args:{}};v.parameters={a11y:u.parameters.a11y};var N,V,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    reactions: 'emoji reactions',
    threading: 'threading'
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,L,z;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {}
}`,...(z=(L=v.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const We=["argsData","argTypesData","Default","Variants"],rt=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Variants:v,__namedExportsOrder:We,argTypesData:G,argsData:W,default:Pe},Symbol.toStringTag,{value:"Module"}));export{u as D,rt as F,v as V};
//# sourceMappingURL=feed_item_row.stories-da461b52.js.map
