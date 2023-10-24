import{a as T}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as E}from"./storybook_utils-7fd67d08.js";import{D,a as k,F as Q}from"./feed_item_row-13413267.js";import{D as O}from"./emoji_row-df6b8501.js";import{D as V}from"./avatar-098d43dd.js";import{D as N}from"./icon-db87bd1c.js";import{u as s,o as r,p as n,y as o,E as X,w as t,e as a,F as v,B as w,b as p,f as _,g as M,O as U,P as B,z as Z}from"./vue.esm-bundler-5f4c5b12.js";import{D as C}from"./button-1c0b010e.js";import{D as z}from"./stack-faa2977a.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{D as x}from"./image_viewer-2881e883.js";import{f as ee}from"./fry-269daf43.js";const P={name:"DtRecipeFeedItemRowDefault",components:{DtAvatar:V,DtRecipeFeedItemRow:D,DtRecipeEmojiRow:O,DtIcon:N,DtButton:C,DtStack:z},data(){return{mockReactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}],hoverButtons:["bell","living-thing","map-pin"],persons:["Jim Halpert","Michael Scott","Pam"]}}},te=e=>(U("data-v-0377ace7"),e=e(),B(),e),ae={class:"d-pt16 feed-item-row__default-story"},oe=["innerHTML"],re=["innerHTML"],se=te(()=>a("div",{class:"d-fs-100 d-lh200 d-d-flex d-ai-center"},[a("a",{class:"d-link d-pr4"},"3 replies"),a("span",{class:"feed-item-row__reply"},"Last reply an hour ago")],-1)),ie={class:"d-d-flex d-bgc-primary d-bar-pill d-bc-default d-ba",role:"group"};function ne(e,b,W,G,l,K){const g=s("dt-avatar"),i=s("dt-stack"),y=s("dt-recipe-emoji-row"),F=s("dt-icon"),$=s("dt-button"),u=s("dt-recipe-feed-item-row");return r(),n("ul",ae,[o(u,{"show-header":e.$attrs.showHeader,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":e.$attrs.isActive,state:e.$attrs.state,onHover:e.$attrs.onHover,onFocus:e.$attrs.onFocus},X({reactions:t(()=>[o(y,{reactions:l.mockReactions},null,8,["reactions"])]),menu:t(()=>[_(" TODO replace this with DT menu "),a("div",ie,[(r(!0),n(v,null,w(l.hoverButtons,m=>(r(),p($,{key:m,kind:"muted",importance:"clear",size:"xs","aria-label":"button"},{icon:t(()=>[M(e.$slots,"icon",{},()=>[o(F,{name:m,size:"300"},null,8,["name"])],!0)]),_:2},1024))),128))])]),default:t(()=>[e.$attrs.default?(r(),n("span",{key:0,innerHTML:e.$attrs.default},null,8,oe)):_("v-if",!0)]),_:2},[e.$attrs.avatar?{name:"avatar",fn:t(()=>[a("span",{innerHTML:e.$attrs.avatar},null,8,re)]),key:"0"}:void 0,e.$attrs.threading?{name:"threading",fn:t(()=>[o(i,{class:"feed-item-row__thread d-d-flex d-ai-center",direction:"row",gap:"400"},{default:t(()=>[o(i,{direction:"row",gap:"300"},{default:t(()=>[(r(!0),n(v,null,w(l.persons,m=>(r(),p(g,{key:m,"full-name":m,seed:"seed",size:"sm"},null,8,["full-name"]))),128))]),_:1}),o(i,{direction:"row",gap:"400"},{default:t(()=>[se]),_:1})]),_:1})]),key:"1"}:void 0]),1032,["show-header","avatar-image-url","display-name","time","short-time","is-active","state","onHover","onFocus"])])}const le=A(P,[["render",ne],["__scopeId","data-v-0377ace7"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]]);P.__docgenInfo={displayName:"DtRecipeFeedItemRowDefault",exportName:"default",description:"",tags:{},slots:[{name:"icon"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]};const Y={name:"DtRecipeFeedItemRowVariants",components:{DtRecipeEmojiRow:O,DtRecipeFeedItemRow:D,DtStack:z,DtAvatar:V,DtIcon:N,DtImageViewer:x,DtButton:C},data(){return{mockReactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}],hoverButtons:["bell","living-thing","map-pin"],persons:["Jim Halpert","Michael Scott","Pam"],fryImage:ee}}},h=e=>(U("data-v-7075ce8a"),e=e(),B(),e),de=h(()=>a("h3",null,"Feed item with showHeader as False and isActive true",-1)),me={class:"d-py8"},ce=["innerHTML"],ue=h(()=>a("div",{class:"d-fs-100 d-lh200 d-d-flex d-ai-center"},[a("a",{class:"d-link d-pr4"},"3 replies"),a("span",{class:"feed-item-row__reply"},"Last reply an hour ago")],-1)),pe={class:"d-d-flex d-bgc-primary d-bar-pill d-bc-default d-ba",role:"group"},_e=h(()=>a("h3",null,"Feed item with rich media",-1)),fe={class:"d-py8"},he=h(()=>a("div",{class:"d-fs-100 d-lh200 d-d-flex d-ai-center"},[a("a",{class:"d-link d-pr4"},"3 replies"),a("span",{class:"feed-item-row__reply"},"Last reply an hour ago")],-1)),ve=h(()=>a("h3",null,'Feed item state "error"',-1)),we={class:"d-py8"},ge=["innerHTML"],ye=h(()=>a("h3",null,'Feed item state "searched"',-1)),$e={class:"d-py8"},be=["innerHTML"];function Fe(e,b,W,G,l,K){const g=s("dt-avatar"),i=s("dt-stack"),y=s("dt-recipe-emoji-row"),F=s("dt-icon"),$=s("dt-button"),u=s("dt-recipe-feed-item-row"),m=s("dt-image-viewer");return r(),p(i,{gap:"600"},{default:t(()=>[a("div",null,[de,a("ul",me,[o(u,{"show-header":!1,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,state:e.$attrs.state,onHover:e.$attrs.onHover,onFocus:e.$attrs.onFocus},{threading:t(()=>[o(i,{class:"feed-item-row__thread d-d-flex d-ai-center",direction:"row",gap:"400"},{default:t(()=>[o(i,{direction:"row",gap:"300"},{default:t(()=>[(r(!0),n(v,null,w(l.persons,d=>(r(),p(g,{key:d,"full-name":d,seed:"seed",size:"sm"},null,8,["full-name"]))),128))]),_:1}),o(i,{direction:"row",gap:"400"},{default:t(()=>[ue]),_:1})]),_:1})]),reactions:t(()=>[o(y,{reactions:l.mockReactions},null,8,["reactions"])]),menu:t(()=>[_(" TODO replace this with DT menu "),a("div",pe,[(r(!0),n(v,null,w(l.hoverButtons,d=>(r(),p($,{key:d,kind:"muted",importance:"clear",size:"xs","aria-label":"button"},{icon:t(()=>[M(e.$slots,"icon",{},()=>[o(F,{name:d,size:"300"},null,8,["name"])],!0)]),_:2},1024))),128))])]),default:t(()=>[e.$attrs.default?(r(),n("span",{key:0,innerHTML:e.$attrs.default},null,8,ce)):_("v-if",!0)]),_:3},8,["avatar-image-url","display-name","time","short-time","state","onHover","onFocus"])])]),a("div",null,[_e,a("ul",fe,[o(u,{"show-header":!0,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,onHover:e.$attrs.onHover,onFocus:e.$attrs.onFocus},{threading:t(()=>[o(i,{class:"feed-item-row__thread d-d-flex d-ai-center",direction:"row",gap:"400"},{default:t(()=>[o(i,{direction:"row",gap:"300"},{default:t(()=>[(r(!0),n(v,null,w(l.persons,d=>(r(),p(g,{key:d,"full-name":d,seed:"seed",size:"sm"},null,8,["full-name"]))),128))]),_:1}),o(i,{direction:"row",gap:"400"},{default:t(()=>[he]),_:1})]),_:1})]),reactions:t(()=>[o(y,{reactions:e.reactions},null,8,["reactions"])]),default:t(()=>[o(m,{"image-src":l.fryImage,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"},null,8,["image-src"])]),_:1},8,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])]),a("div",null,[ve,a("ul",we,[o(u,{"show-header":!1,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,state:"ERROR",onHover:e.$attrs.onHover,onFocus:e.$attrs.onFocus},{default:t(()=>[e.defaultSlot?(r(),n("span",{key:0,innerHTML:e.defaultSlot},null,8,ge)):_("v-if",!0)]),_:1},8,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])]),a("div",null,[ye,o($,{onClick:b[0]||(b[0]=d=>e.$refs.feedItemRowFade.fade())},{default:t(()=>[Z(" Click to fade ")]),_:1}),a("ul",$e,[o(u,{ref:"feedItemRowFade","show-header":!1,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,state:"SEARCHED",onHover:e.$attrs.onHover,onFocus:e.$attrs.onFocus},{default:t(()=>[e.defaultSlot?(r(),n("span",{key:0,innerHTML:e.defaultSlot},null,8,be)):_("v-if",!0)]),_:1},8,["avatar-image-url","display-name","time","short-time","onHover","onFocus"])])])]),_:3})}const De=A(Y,[["render",Fe],["__scopeId","data-v-7075ce8a"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]]);Y.__docgenInfo={displayName:"DtRecipeFeedItemRowVariants",exportName:"default",description:"",tags:{},slots:[{name:"icon"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]};const q={avatarImageUrl:"https://i1.sndcdn.com/avatars-000181324408-652e57-t500x500.jpg",displayName:"Dwight Schrute",time:"4:54 PM",shortTime:"4:54",onFocus:T("focus"),onHover:T("hover"),default:`<p>Elementum fames nullam elementum velit proin vitae aliquet.
  Platea nulla consectetur consequat sagittis nullam et ultricies nisl rhoncus
  aliquet elementum venenatis quisque.</p>`},J={default:{control:"text",table:{type:{summary:"VNode"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},threading:{name:"threading",control:"text",table:{category:"slots",type:{summary:"VNode"}}},reactions:{control:!1},menu:{control:!1},state:{defaultValue:k,options:Object.keys(Q),control:{type:"select",labels:{undefined:"(empty)"}},table:{defaultValue:{summary:k}}},onFocus:{table:{disable:!0}},onHover:{table:{disable:!0}}},Te={title:"Recipes/Conversation View/Feed Item Row",component:D,args:q,argTypes:J,excludeStories:/.*Data$/},ke=e=>E(e,le),Se=e=>E(e,De),c={render:ke,args:{showHeader:!0,threading:"threading"}};c.parameters={a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"color-contrast",enabled:!1}]}}};const f={render:Se,args:{}};f.parameters={a11y:c.parameters.a11y};var S,H,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    threading: 'threading'
  }
}`,...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var I,L,j;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {}
}`,...(j=(L=f.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const He=["argsData","argTypesData","Default","Variants"],ze=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Variants:f,__namedExportsOrder:He,argTypesData:J,argsData:q,default:Te},Symbol.toStringTag,{value:"Module"}));export{c as D,ze as F,f as V};
//# sourceMappingURL=feed_item_row.stories-e779e603.js.map
