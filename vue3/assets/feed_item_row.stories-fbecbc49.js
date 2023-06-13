import{a as A}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as X,c as z}from"./storybook_utils-d0fbf3aa.js";import{D as H}from"./avatar-0908c2a3.js";import{D as Y}from"./lazy_show-0f90120c.js";import{D as Z}from"./list_item-0854151a.js";import{b as $,w as t,m as x,A as ee,a as n,o as i,f as m,k as l,e as S,v as k,t as D,g as a,j as w,d as s,y as C,q as y}from"./vue.esm-bundler-66d1e5de.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{D as M}from"./emoji_text_wrapper-2c2d602f.js";import{D as O}from"./icon-77367f66.js";import{d}from"./person-13c0d6d2.js";import{D as te}from"./stack-757dd1af.js";import{D as ae,i as se}from"./fry-e2fdb514.js";import{D as oe}from"./button-db02a8db.js";const b={NORMAL:"",SEARCHED:"d-bgc-warning-subtle",ERROR:"d-bgc-critical-subtle"},g="NORMAL";const P={name:"DtRecipeFeedItemRow",components:{DtAvatar:H,DtLazyShow:Y,DtListItem:Z},inheritAttrs:!1,props:{showHeader:{type:Boolean,default:!1},avatarImageUrl:{type:String,default:""},displayName:{type:String,default:""},time:{type:String,default:""},shortTime:{type:String,default:""},isActive:{type:Boolean,default:!1},state:{type:String,default:g,validator:e=>Object.keys(b).includes(e)}},emits:["hover","focus"],data(){return{faded:!1}},computed:{avatarInitials(){return(this.displayName||"").split(" ").map(o=>o.charAt(0)).join("").slice(0,2).toUpperCase()},feedListeners(){return{mouseenter:()=>this.setHover(!0),mouseleave:()=>this.setHover(!1),focusin:()=>this.setFocus(!0),focusout:()=>this.setFocus(!1)}},listItemClasses(){return["d-w100p","d-box-border","d-ps-relative","d-px8",{"d-bgc-secondary-opaque":this.isActive&&this.state===g},b[this.state],"feed-item-row","d-t","d-tp-bgc"]}},methods:{setFocus(e){this.$emit("focus",e)},setHover(e){this.$emit("hover",e)},fade(){this.state===g||this.faded===!0||(this.$refs.FeedItemRef.$el.classList.remove(b[this.state]),this.faded=!0)}}},ne=["src"],re={key:0,"data-qa":"feed-item-row-header",class:"d-d-flex d-ai-center"},ie={class:"d-fs-200 d-lh-300 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap"},de={class:"d-fs-100 d-mt2 d-lh-300 d-fc-tertiary d-fw-normal d-ml4 d-fl-shrink0"},le={class:"content-text-wrapper-class","data-qa":"feed-item-row-content"},me={class:"d-d-flex d-fw-wrap","data-qa":"feed-item-row-reactions"},ue={"data-qa":"feed-item-row-menu",class:"d-ps-absolute d-tn16 d-r12"};function ce(e,v,o,I,F,_){const r=n("dt-avatar"),c=n("dt-lazy-show"),f=n("dt-list-item");return i(),$(f,x({ref:"FeedItemRef","navigation-type":"none"},e.$attrs,{class:_.listItemClasses,"data-qa":"feed-item-row"},ee(_.feedListeners)),{left:t(()=>[o.showHeader?(i(),$(r,{key:0,"avatar-class":"d-mt4",initials:_.avatarInitials},{default:t(()=>[o.avatarImageUrl?(i(),m("img",{key:0,"data-qa":"feed-item-row-avatar-img",alt:"",src:o.avatarImageUrl},null,8,ne)):l("",!0)]),_:1},8,["initials"])):l("",!0),o.showHeader?l("",!0):S((i(),m("div",{key:1,class:"d-fs-100 d-fw-normal d-ws-nowrap d-lh-100 d-fc-tertiary d-mb6","data-qa":"feed-item-row-left-time"},D(o.shortTime),513)),[[k,o.isActive]])]),bottom:t(()=>[a("div",me,[w(e.$slots,"reactions")]),w(e.$slots,"threading")]),right:t(()=>[S(a("div",ue,[s(c,{appear:!0,transition:"fade",show:o.isActive},{default:t(()=>[w(e.$slots,"menu")]),_:3},8,["show"])],512),[[k,o.isActive]])]),default:t(()=>[a("article",null,[o.showHeader?(i(),m("div",re,[a("p",ie,D(o.displayName),1),a("time",de,D(o.time),1)])):l("",!0),a("span",le,[w(e.$slots,"default")])])]),_:3},16,["class"])}const R=T(P,[["render",ce]]);P.__docgenInfo={displayName:"DtRecipeFeedItemRow",exportName:"default",description:"",tags:{},props:[{name:"showHeader",description:"Show avatar, show header text or dont show left time and vice versa",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarImageUrl",description:"Show the avatar of the user, if this is not passed in, the initials would display",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"displayName",description:"The display name of the sender",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"time",description:`time string displayed as is.
Shown on the header when showHeader is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"shortTime",description:`short time string without AM/PM displayed as is.
Shown on the left of feed item when showHeader is false and isActive is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isActive",description:"displays a darkened background on the row.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"state",description:"state for the feed item row. Can be default, searched & error",type:{name:"string"},defaultValue:{func:!1,value:"DEFAULT_FEED_ROW_STATE"}}],events:[{name:"hover",description:"Fires when hovered over feed row",type:{names:["Boolean"]}},{name:"focus",description:"Fires when focused over feed row",type:{names:["Boolean"]}}],slots:[{name:"default"},{name:"reactions",description:"Slot for reactions row component"},{name:"threading",description:"Slot for threading row component"},{name:"menu",description:"Slot for actions hover menu component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]};const U={name:"DtRecipeFeedItemRowDefault",components:{DtAvatar:H,DtRecipeFeedItemRow:R,DtEmojiTextWrapper:M,DtIcon:O}},fe=["innerHTML"],pe={class:"d-d-flex d-flow1 d-my6"},he=a("img",{"data-qa":"dt-avatar-image",src:d,alt:"Person Avatar"},null,-1),ve=a("img",{"data-qa":"dt-avatar-image",src:d,alt:"Person Avatar"},null,-1),_e=a("img",{"data-qa":"dt-avatar-image",src:d,alt:"Person Avatar"},null,-1),ge=a("div",{class:"d-mx4 d-my-auto d-fs-100"}," 3 replies ",-1),we=["innerHTML"];function ye(e,v,o,I,F,_){const r=n("dt-avatar"),c=n("dt-emoji-text-wrapper"),f=n("dt-icon"),p=n("dt-recipe-feed-item-row");return i(),m("ul",null,[s(p,{"show-header":e.showHeader,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":e.isActive,state:e.state,onHover:e.onHover,onFocus:e.onFocus},C({default:t(()=>[e.$attrs.default?(i(),m("span",{key:0,innerHTML:e.$attrs.default},null,8,fe)):l("",!0)]),_:2},[e.$attrs.threading?{name:"threading",fn:t(()=>[a("div",pe,[s(r,{presence:"busy",seed:"seed",size:"sm"},{default:t(()=>[he]),_:1}),s(r,{presence:"active",seed:"seed",size:"sm"},{default:t(()=>[ve]),_:1}),s(r,{seed:"seed",size:"sm"},{default:t(()=>[_e]),_:1}),ge])]),key:"0"}:void 0,e.$attrs.reactions?{name:"reactions",fn:t(()=>[s(c,{class:"d-btn d-btn--outlined d-btn--xs","element-type":"button",size:"200"},{default:t(()=>[a("span",{innerHTML:e.$attrs.reactions},null,8,we),y(" :smile: ")]),_:1})]),key:"1"}:void 0,e.menu?{name:"menu",fn:t(()=>[s(f,{name:e.$attrs.menu},null,8,["name"])]),key:"2"}:void 0]),1032,["show-header","avatar-image-url","display-name","time","short-time","is-active","state","onHover","onFocus"])])}const be=T(U,[["render",ye]]);U.__docgenInfo={displayName:"DtRecipeFeedItemRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]};const B={name:"DtRecipeFeedItemRowVariants",components:{DtEmojiTextWrapper:M,DtRecipeFeedItemRow:R,DtStack:te,DtAvatar:H,DtIcon:O,DtImageViewer:ae,DtButton:oe},data(){return{image:se}}},Fe=a("h3",null,"Feed item with showHeader as False and isActive true",-1),De=["innerHTML"],$e={class:"d-d-flex d-d-flow1 d-my6"},He=a("img",{"data-qa":"dt-avatar-image",src:d,alt:"Person Avatar"},null,-1),Te=a("img",{"data-qa":"dt-avatar-image",src:d,alt:"Person Avatar"},null,-1),Re=a("img",{"data-qa":"dt-avatar-image",src:d,alt:"Person Avatar"},null,-1),Ie=a("div",{class:"d-mx4 d-my-auto d-fs-100"}," 3 replies ",-1),Ae=a("h3",null,"Feed item with rich media",-1),Se={class:"d-d-flex d-d-flow1 d-my6"},ke=a("img",{"data-qa":"dt-avatar-image",src:d,alt:"Person Avatar"},null,-1),Ne=a("img",{"data-qa":"dt-avatar-image",src:d,alt:"Person Avatar"},null,-1),Ve=a("img",{"data-qa":"dt-avatar-image",src:d,alt:"Person Avatar"},null,-1),qe=a("div",{class:"d-mx4 d-my-auto d-fs-100"}," 3 replies ",-1),Ee=a("h3",null,'Feed item state "error"',-1),Le=["innerHTML"],je=a("h3",null,'Feed item state "searched"',-1),ze=["innerHTML"];function Ce(e,v,o,I,F,_){const r=n("dt-avatar"),c=n("dt-emoji-text-wrapper"),f=n("dt-icon"),p=n("dt-recipe-feed-item-row"),K=n("dt-image-viewer"),J=n("dt-button"),Q=n("dt-stack");return i(),$(Q,{gap:"600"},{default:t(()=>[a("div",null,[Fe,a("ul",null,[s(p,{"show-header":!1,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,state:e.state,onHover:e.onHover,onFocus:e.onFocus},{threading:t(()=>[a("div",$e,[s(r,{presence:"busy",seed:"seed",size:"sm"},{default:t(()=>[He]),_:1}),s(r,{presence:"active",seed:"seed",size:"sm"},{default:t(()=>[Te]),_:1}),s(r,{seed:"seed",size:"sm"},{default:t(()=>[Re]),_:1}),Ie])]),reactions:t(()=>[s(c,{class:"d-btn d-btn--outlined d-btn--xs","element-type":"button",size:"200"},{default:t(()=>[y(" emoji reactions :smile: ")]),_:1})]),menu:t(()=>[s(f,{name:e.$attrs.menu},null,8,["name"])]),default:t(()=>[e.$attrs.default?(i(),m("span",{key:0,innerHTML:e.$attrs.default},null,8,De)):l("",!0)]),_:1},8,["avatar-image-url","display-name","time","short-time","state","onHover","onFocus"])])]),a("div",null,[Ae,a("ul",null,[s(p,{"show-header":!0,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,onHover:e.$attrs.onHover,onFocus:e.$attrs.onFocus},C({threading:t(()=>[a("div",Se,[s(r,{presence:"busy",seed:"seed",size:"sm"},{default:t(()=>[ke]),_:1}),s(r,{presence:"active",seed:"seed",size:"sm"},{default:t(()=>[Ne]),_:1}),s(r,{seed:"seed",size:"sm"},{default:t(()=>[Ve]),_:1}),qe])]),reactions:t(()=>[s(c,{class:"d-btn d-btn--outlined d-btn--xs","element-type":"button",size:"200"},{default:t(()=>[y(" emoji reactions :smile: ")]),_:1})]),default:t(()=>[s(K,{"image-src":F.image,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"},null,8,["image-src"])]),_:2},[e.$attrs.menu?{name:"menu",fn:t(()=>[s(f,{name:e.$attrs.menu},null,8,["name"])]),key:"0"}:void 0]),1032,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])]),a("div",null,[Ee,a("ul",null,[s(p,{"show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:"ERROR",onHover:e.onHover,onFocus:e.onFocus},{default:t(()=>[e.defaultSlot?(i(),m("span",{key:0,innerHTML:e.defaultSlot},null,8,Le)):l("",!0)]),_:1},8,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])]),a("div",null,[je,s(J,{onClick:v[0]||(v[0]=Ge=>e.$refs.feedItemRowFade.fade())},{default:t(()=>[y(" Click to fade ")]),_:1}),a("ul",null,[s(p,{ref:"feedItemRowFade","show-header":!1,"avatar-image-url":e.avatarImageUrl,"display-name":e.displayName,time:e.time,"short-time":e.shortTime,"is-active":!0,state:"SEARCHED",onHover:e.onHover,onFocus:e.onFocus},{default:t(()=>[e.defaultSlot?(i(),m("span",{key:0,innerHTML:e.defaultSlot},null,8,ze)):l("",!0)]),_:1},8,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])])]),_:1})}const Me=T(B,[["render",Ce]]);B.__docgenInfo={displayName:"DtRecipeFeedItemRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]};const Oe=X(),W={avatarImageUrl:"https://i1.sndcdn.com/avatars-000181324408-652e57-t500x500.jpg",displayName:"Dwight Schrute",time:"4:54 PM",shortTime:"4:54",onFocus:A("focus"),onHover:A("hover"),default:`<p>Elementum fames nullam elementum velit proin vitae aliquet.
  Platea nulla consectetur consequat sagittis nullam et ultricies nisl rhoncus
  aliquet elementum venenatis quisque.</p>`,menu:"menu"},G={default:{control:"text",table:{type:{summary:"VNode"}}},threading:{name:"threading",control:"text",table:{category:"slots",type:{summary:"VNode"}}},reactions:{name:"reactions",control:"text",table:{category:"slots",type:{summary:"VNode"}}},menu:{name:"menu",options:Oe,table:{category:"slots",type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},state:{defaultValue:g,options:Object.keys(b),control:{type:"select",labels:{undefined:"(empty)"}},table:{defaultValue:{summary:g}}},onFocus:{table:{disable:!0}},onHover:{table:{disable:!0}}},Pe={title:"Recipes/Conversation View/Feed Item Row",component:R,args:W,argTypes:G,excludeStories:/.*Data$/},Ue=e=>z(e,be),Be=e=>z(e,Me),u={render:Ue,args:{showHeader:!0,reactions:"emoji reactions",threading:"threading"}};u.parameters={a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"color-contrast",enabled:!1}]}}};const h={render:Be,args:{}};h.parameters={a11y:u.parameters.a11y};var N,V,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    reactions: 'emoji reactions',
    threading: 'threading'
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,L,j;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {}
}`,...(j=(L=h.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const We=["argsData","argTypesData","Default","Variants"],rt=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Variants:h,__namedExportsOrder:We,argTypesData:G,argsData:W,default:Pe},Symbol.toStringTag,{value:"Module"}));export{u as D,rt as F,h as V};
//# sourceMappingURL=feed_item_row.stories-fbecbc49.js.map
