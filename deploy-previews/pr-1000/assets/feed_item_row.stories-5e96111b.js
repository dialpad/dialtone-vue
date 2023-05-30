import{a as T}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as G,c as P}from"./storybook_utils-d77bbd23.js";import{D}from"./avatar-01e35573.js";import{D as J}from"./lazy_show-aad08efa.js";import{D as K}from"./list_item-7acebf5d.js";import{a as r,b as $,w as t,m as Q,B as X,o as d,f as p,k as i,e as k,v as S,t as y,g as a,l as h,d as s,z as j,s as b}from"./vue.esm-bundler-e62bdd6b.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{D as L}from"./emoji_text_wrapper-238f35ab.js";import{D as M}from"./icon-607d64de.js";import{d as l}from"./person-13c0d6d2.js";import{D as Y}from"./stack-c79e46cf.js";import{D as Z,i as ee}from"./fry-bf92c9c2.js";const B={name:"DtRecipeFeedItemRow",components:{DtAvatar:D,DtLazyShow:J,DtListItem:K},inheritAttrs:!1,props:{showHeader:{type:Boolean,default:!1},avatarImageUrl:{type:String,default:""},displayName:{type:String,default:""},time:{type:String,default:""},shortTime:{type:String,default:""},isActive:{type:Boolean,default:!1}},emits:["hover","focus"],computed:{avatarInitials(){return(this.displayName||"").split(" ").map(o=>o.charAt(0)).join("").slice(0,2).toUpperCase()},feedListeners(){return{mouseenter:()=>this.setHover(!0),mouseleave:()=>this.setHover(!1),focusin:()=>this.setFocus(!0),focusout:()=>this.setFocus(!1)}}},methods:{setFocus(e){this.$emit("focus",e)},setHover(e){this.$emit("hover",e)}}},te=["src"],ae={key:0,"data-qa":"feed-item-row-header",class:"d-d-flex d-ai-center"},se={class:"d-fs-200 d-lh-300 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap"},oe={class:"d-fs-100 d-mt2 d-lh-300 d-fc-tertiary d-fw-normal d-ml4 d-fl-shrink0"},re={class:"content-text-wrapper-class","data-qa":"feed-item-row-content"},ne={class:"d-d-flex d-fw-wrap","data-qa":"feed-item-row-reactions"},ie={"data-qa":"feed-item-row-menu",class:"d-ps-absolute d-tn16 d-r12"};function de(e,w,o,I,g,_){const n=r("dt-avatar"),c=r("dt-lazy-show"),u=r("dt-list-item");return d(),$(u,Q({ref:"FeedItemRef","navigation-type":"none"},e.$attrs,{class:["d-w100p","d-box-border","d-ps-relative","d-px8",{"d-bgc-secondary-opaque":o.isActive}],"data-qa":"feed-item-row"},X(_.feedListeners)),{left:t(()=>[o.showHeader?(d(),$(n,{key:0,"avatar-class":"d-mt4",initials:_.avatarInitials},{default:t(()=>[o.avatarImageUrl?(d(),p("img",{key:0,"data-qa":"feed-item-row-avatar-img",alt:"",src:o.avatarImageUrl},null,8,te)):i("v-if",!0)]),_:1},8,["initials"])):i("v-if",!0),i(" show time instead of avatar when headers not present "),o.showHeader?i("v-if",!0):k((d(),p("div",{key:1,class:"d-fs-100 d-fw-normal d-ws-nowrap d-lh-100 d-fc-tertiary d-mb6","data-qa":"feed-item-row-left-time"},y(o.shortTime),513)),[[S,o.isActive]])]),bottom:t(()=>[a("div",ne,[i(" @slot Slot for reactions row component "),h(e.$slots,"reactions")]),i(" @slot Slot for threading row component "),h(e.$slots,"threading")]),right:t(()=>[k(a("div",ie,[s(c,{appear:!0,transition:"fade",show:o.isActive},{default:t(()=>[i(" @slot Slot for actions hover menu component "),h(e.$slots,"menu")]),_:3},8,["show"])],512),[[S,o.isActive]])]),default:t(()=>[a("article",null,[i(" Feed Item "),o.showHeader?(d(),p("div",ae,[a("p",se,y(o.displayName),1),a("time",oe,y(o.time),1)])):i("v-if",!0),i(" @slot Default content slot for feed item row "),a("span",re,[h(e.$slots,"default")])])]),_:3},16,["class"])}const H=F(B,[["render",de],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]]);B.__docgenInfo={displayName:"DtRecipeFeedItemRow",exportName:"default",description:"",tags:{},props:[{name:"showHeader",description:"Show avatar, show header text or dont show left time and vice versa",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarImageUrl",description:"Show the avatar of the user, if this is not passed in, the initials would display",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"displayName",description:"The display name of the sender",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"time",description:`time string displayed as is.
Shown on the header when showHeader is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"shortTime",description:`short time string without AM/PM displayed as is.
Shown on the left of feed item when showHeader is false and isActive is true`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isActive",description:"displays a darkened background on the row.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"hover",description:"Fires when hovered over feed row",type:{names:["Boolean"]}},{name:"focus",description:"Fires when focused over feed row",type:{names:["Boolean"]}}],slots:[{name:"default"},{name:"reactions",description:"Slot for reactions row component"},{name:"threading",description:"Slot for threading row component"},{name:"menu",description:"Slot for actions hover menu component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row.vue"]};const U={name:"DtRecipeFeedItemRowDefault",components:{DtAvatar:D,DtRecipeFeedItemRow:H,DtEmojiTextWrapper:L,DtIcon:M}},le=["innerHTML"],me={class:"d-d-flex d-flow1 d-my6"},ce=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),ue=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),fe=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),pe=a("div",{class:"d-mx4 d-my-auto d-fs-100"}," 3 replies ",-1),_e=["innerHTML"];function ve(e,w,o,I,g,_){const n=r("dt-avatar"),c=r("dt-emoji-text-wrapper"),u=r("dt-icon"),v=r("dt-recipe-feed-item-row");return d(),p("ul",null,[s(v,{"show-header":e.$attrs.showHeader,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":e.$attrs.isActive,onHover:e.$attrs.onHover,onFocus:e.$attrs.onFocus},j({default:t(()=>[e.$attrs.default?(d(),p("span",{key:0,innerHTML:e.$attrs.default},null,8,le)):i("v-if",!0)]),_:2},[e.$attrs.threading?{name:"threading",fn:t(()=>[a("div",me,[s(n,{presence:"busy",seed:"seed",size:"sm"},{default:t(()=>[ce]),_:1}),s(n,{presence:"active",seed:"seed",size:"sm"},{default:t(()=>[ue]),_:1}),s(n,{seed:"seed",size:"sm"},{default:t(()=>[fe]),_:1}),pe])]),key:"0"}:void 0,e.$attrs.reactions?{name:"reactions",fn:t(()=>[s(c,{class:"d-btn d-btn--outlined d-btn--xs","element-type":"button",size:"200"},{default:t(()=>[a("span",{innerHTML:e.$attrs.reactions},null,8,_e),b(" :smile: ")]),_:1})]),key:"1"}:void 0,e.menu?{name:"menu",fn:t(()=>[s(u,{name:e.$attrs.menu},null,8,["name"])]),key:"2"}:void 0]),1032,["show-header","avatar-image-url","display-name","time","short-time","is-active","onHover","onFocus"])])}const he=F(U,[["render",ve],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]]);U.__docgenInfo={displayName:"DtRecipeFeedItemRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]};const C={name:"DtRecipeFeedItemRowVariants",components:{DtEmojiTextWrapper:L,DtRecipeFeedItemRow:H,DtStack:Y,DtAvatar:D,DtIcon:M,DtImageViewer:Z},data(){return{image:ee}}},we=a("h3",null,"Feed item with showHeader as False and isActive true",-1),ge=["innerHTML"],ye={class:"d-d-flex d-d-flow1 d-my6"},$e=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),be=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),De=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),Fe=a("div",{class:"d-mx4 d-my-auto d-fs-100"}," 3 replies ",-1),He=a("h3",null,"Feed item with rich media",-1),Ie={class:"d-d-flex d-d-flow1 d-my6"},Te=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),ke=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),Se=a("img",{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"},null,-1),Ve=a("div",{class:"d-mx4 d-my-auto d-fs-100"}," 3 replies ",-1);function Ae(e,w,o,I,g,_){const n=r("dt-avatar"),c=r("dt-emoji-text-wrapper"),u=r("dt-icon"),v=r("dt-recipe-feed-item-row"),O=r("dt-image-viewer"),W=r("dt-stack");return d(),$(W,{gap:"600"},{default:t(()=>[a("div",null,[we,a("ul",null,[s(v,{"show-header":!1,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,onHover:e.$attrs.onHover,onFocus:e.$attrs.onFocus},{threading:t(()=>[a("div",ye,[s(n,{presence:"busy",seed:"seed",size:"sm"},{default:t(()=>[$e]),_:1}),s(n,{presence:"active",seed:"seed",size:"sm"},{default:t(()=>[be]),_:1}),s(n,{seed:"seed",size:"sm"},{default:t(()=>[De]),_:1}),Fe])]),reactions:t(()=>[s(c,{class:"d-btn d-btn--outlined d-btn--xs","element-type":"button",size:"200"},{default:t(()=>[b(" emoji reactions :smile: ")]),_:1})]),menu:t(()=>[s(u,{name:e.$attrs.menu},null,8,["name"])]),default:t(()=>[e.$attrs.default?(d(),p("span",{key:0,innerHTML:e.$attrs.default},null,8,ge)):i("v-if",!0)]),_:1},8,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])]),a("div",null,[He,a("ul",null,[s(v,{"show-header":!0,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,onHover:e.$attrs.onHover,onFocus:e.$attrs.onFocus},j({threading:t(()=>[a("div",Ie,[s(n,{presence:"busy",seed:"seed",size:"sm"},{default:t(()=>[Te]),_:1}),s(n,{presence:"active",seed:"seed",size:"sm"},{default:t(()=>[ke]),_:1}),s(n,{seed:"seed",size:"sm"},{default:t(()=>[Se]),_:1}),Ve])]),reactions:t(()=>[s(c,{class:"d-btn d-btn--outlined d-btn--xs","element-type":"button",size:"200"},{default:t(()=>[b(" emoji reactions :smile: ")]),_:1})]),default:t(()=>[s(O,{"image-src":g.image,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"},null,8,["image-src"])]),_:2},[e.$attrs.menu?{name:"menu",fn:t(()=>[s(u,{name:e.$attrs.menu},null,8,["name"])]),key:"0"}:void 0]),1032,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])])]),_:1})}const qe=F(C,[["render",Ae],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]]);C.__docgenInfo={displayName:"DtRecipeFeedItemRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]};const Ne=G(),E={avatarImageUrl:"https://i1.sndcdn.com/avatars-000181324408-652e57-t500x500.jpg",displayName:"Dwight Schrute",time:"4:54 PM",shortTime:"4:54",onFocus:T("focus"),onHover:T("hover"),default:`<p>Elementum fames nullam elementum velit proin vitae aliquet.
  Platea nulla consectetur consequat sagittis nullam et ultricies nisl rhoncus
  aliquet elementum venenatis quisque.</p>`,menu:"menu"},x={default:{control:"text",table:{type:{summary:"VNode"}}},threading:{name:"threading",control:"text",table:{category:"slots",type:{summary:"VNode"}}},reactions:{name:"reactions",control:"text",table:{category:"slots",type:{summary:"VNode"}}},menu:{name:"menu",options:Ne,table:{category:"slots",type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},onFocus:{table:{disable:!0}},onHover:{table:{disable:!0}}},Re={title:"Recipes/Conversation View/Feed Item Row",component:H,args:E,argTypes:x,excludeStories:/.*Data$/},ze=e=>P(e,he),Pe=e=>P(e,qe),m={render:ze,args:{showHeader:!0,reactions:"emoji reactions",threading:"threading"}};m.parameters={a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"color-contrast",enabled:!1}]}}};const f={render:Pe,args:{}};f.parameters={a11y:m.parameters.a11y};var V,A,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    reactions: 'emoji reactions',
    threading: 'threading'
  }
}`,...(q=(A=m.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var N,R,z;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {}
}`,...(z=(R=f.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const je=["argsData","argTypesData","Default","Variants"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Variants:f,__namedExportsOrder:je,argTypesData:x,argsData:E,default:Re},Symbol.toStringTag,{value:"Module"}));export{m as D,Qe as F,f as V};
//# sourceMappingURL=feed_item_row.stories-5e96111b.js.map