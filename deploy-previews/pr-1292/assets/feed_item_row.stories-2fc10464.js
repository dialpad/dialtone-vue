import{a as d}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as h}from"./storybook_utils-6d48caaf.js";import{D as i,a as c,F as S}from"./feed_item_row-9178484d.js";import{D as w}from"./emoji_row-c2d44450.js";import{D as y}from"./avatar-10d54ad2.js";import{D as g}from"./icon-f96b5e93.js";import{D as $}from"./button-f9ebe2a3.js";import{D as k}from"./stack-64ff0684.js";import{n as b}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as T}from"./image_viewer-5a511342.js";import{f as C}from"./fry-269daf43.js";const I={name:"DtRecipeFeedItemRowDefault",components:{DtAvatar:y,DtRecipeFeedItemRow:i,DtRecipeEmojiRow:w,DtIcon:g,DtButton:$,DtStack:k},data(){return{mockReactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}],hoverButtons:["bell","living-thing","map-pin"],persons:["Jim Halpert","Michael Scott","Pam"]}}};var x=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"d-pt16 feed-item-row__default-story"},[t("dt-recipe-feed-item-row",{attrs:{"show-header":e.$attrs.showHeader,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":e.$attrs.isActive,state:e.$attrs.state},on:{hover:e.$attrs.onHover,focus:e.$attrs.onFocus},scopedSlots:e._u([e.$attrs.avatar?{key:"avatar",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$attrs.avatar)}})]},proxy:!0}:null,e.$attrs.threading?{key:"threading",fn:function(){return[t("dt-stack",{staticClass:"feed-item-row__thread d-d-flex d-ai-center",attrs:{direction:"row",gap:"400"}},[t("dt-stack",{attrs:{direction:"row",gap:"300"}},e._l(e.persons,function(a){return t("dt-avatar",{key:a,attrs:{"full-name":a,seed:"seed",size:"sm"}})}),1),t("dt-stack",{attrs:{direction:"row",gap:"400"}},[t("div",{staticClass:"d-fs-100 d-lh200 d-d-flex d-ai-center"},[t("a",{staticClass:"d-link d-pr4"},[e._v("3 replies")]),t("span",{staticClass:"feed-item-row__reply"},[e._v("Last reply an hour ago")])])])],1)]},proxy:!0}:null,{key:"reactions",fn:function(){return[t("dt-recipe-emoji-row",{attrs:{reactions:e.mockReactions}})]},proxy:!0},{key:"menu",fn:function(){return[t("div",{staticClass:"d-d-flex d-bgc-primary d-bar-pill d-bc-default d-ba",attrs:{role:"group"}},e._l(e.hoverButtons,function(a){return t("dt-button",{key:a,attrs:{kind:"muted",importance:"clear",size:"xs","aria-label":"button"},scopedSlots:e._u([{key:"icon",fn:function(){return[e._t("icon",function(){return[t("dt-icon",{attrs:{name:a,size:"300"}})]})]},proxy:!0}],null,!0)})}),1)]},proxy:!0}],null,!0)},[e.$attrs.default?[t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}})]:e._e()],2)],1)},j=[];x._withStripped=!0;var n=b(I,x,j,!1,null,"0377ace7",null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue";const E=n.exports;n.exports.__docgenInfo={displayName:"DtRecipeFeedItemRowDefault",exportName:"default",description:"",tags:{},slots:[{name:"icon"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_default.story.vue"]};const H={name:"DtRecipeFeedItemRowVariants",components:{DtRecipeEmojiRow:w,DtRecipeFeedItemRow:i,DtStack:k,DtAvatar:y,DtIcon:g,DtImageViewer:T,DtButton:$},data(){return{mockReactions:[{emojiUnicodeOrShortname:"😀",isSelected:!0,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😀",num:1},{emojiUnicodeOrShortname:"😒",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 😒",num:1},{emojiUnicodeOrShortname:"🙃",isSelected:!1,ariaLabel:"Emoji aria label",tooltip:"You reacted with 🙃",num:99}],hoverButtons:["bell","living-thing","map-pin"],persons:["Jim Halpert","Michael Scott","Pam"],fryImage:C}}};var D=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v("Feed item with showHeader as False and isActive true")]),t("ul",{staticClass:"d-py8"},[t("dt-recipe-feed-item-row",{attrs:{"show-header":!1,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,state:e.$attrs.state},on:{hover:e.$attrs.onHover,focus:e.$attrs.onFocus},scopedSlots:e._u([{key:"threading",fn:function(){return[t("dt-stack",{staticClass:"feed-item-row__thread d-d-flex d-ai-center",attrs:{direction:"row",gap:"400"}},[t("dt-stack",{attrs:{direction:"row",gap:"300"}},e._l(e.persons,function(a){return t("dt-avatar",{key:a,attrs:{"full-name":a,seed:"seed",size:"sm"}})}),1),t("dt-stack",{attrs:{direction:"row",gap:"400"}},[t("div",{staticClass:"d-fs-100 d-lh200 d-d-flex d-ai-center"},[t("a",{staticClass:"d-link d-pr4"},[e._v("3 replies")]),t("span",{staticClass:"feed-item-row__reply"},[e._v("Last reply an hour ago")])])])],1)]},proxy:!0},{key:"reactions",fn:function(){return[t("dt-recipe-emoji-row",{attrs:{reactions:e.mockReactions}})]},proxy:!0},{key:"menu",fn:function(){return[t("div",{staticClass:"d-d-flex d-bgc-primary d-bar-pill d-bc-default d-ba",attrs:{role:"group"}},e._l(e.hoverButtons,function(a){return t("dt-button",{key:a,attrs:{kind:"muted",importance:"clear",size:"xs","aria-label":"button"},scopedSlots:e._u([{key:"icon",fn:function(){return[e._t("icon",function(){return[t("dt-icon",{attrs:{name:a,size:"300"}})]})]},proxy:!0}],null,!0)})}),1)]},proxy:!0}])},[e.$attrs.default?[t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}})]:e._e()],2)],1)]),t("div",[t("h3",[e._v("Feed item with rich media")]),t("ul",{staticClass:"d-py8"},[t("dt-recipe-feed-item-row",{attrs:{"show-header":!0,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0},on:{hover:e.$attrs.onHover,focus:e.$attrs.onFocus},scopedSlots:e._u([{key:"threading",fn:function(){return[t("dt-stack",{staticClass:"feed-item-row__thread d-d-flex d-ai-center",attrs:{direction:"row",gap:"400"}},[t("dt-stack",{attrs:{direction:"row",gap:"300"}},e._l(e.persons,function(a){return t("dt-avatar",{key:a,attrs:{"full-name":a,seed:"seed",size:"sm"}})}),1),t("dt-stack",{attrs:{direction:"row",gap:"400"}},[t("div",{staticClass:"d-fs-100 d-lh200 d-d-flex d-ai-center"},[t("a",{staticClass:"d-link d-pr4"},[e._v("3 replies")]),t("span",{staticClass:"feed-item-row__reply"},[e._v("Last reply an hour ago")])])])],1)]},proxy:!0},{key:"reactions",fn:function(){return[t("dt-recipe-emoji-row",{attrs:{reactions:e.$attrs.reactions}})]},proxy:!0}])},[t("dt-image-viewer",{attrs:{"image-src":e.fryImage,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}})],1)],1)]),t("div",[t("h3",[e._v('Feed item state "error"')]),t("ul",{staticClass:"d-py8"},[t("dt-recipe-feed-item-row",{attrs:{"show-header":!1,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,state:"ERROR"},on:{hover:e.$attrs.onHover,focus:e.$attrs.onFocus}},[e.$attrs.default?[t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}})]:e._e()],2)],1)]),t("div",[t("h3",[e._v('Feed item state "searched"')]),t("dt-button",{on:{click:function(a){return e.$refs.feedItemRowFade.fade()}}},[e._v(" Click to fade ")]),t("ul",{staticClass:"d-py8"},[t("dt-recipe-feed-item-row",{ref:"feedItemRowFade",attrs:{"show-header":!1,"avatar-image-url":e.$attrs.avatarImageUrl,"display-name":e.$attrs.displayName,time:e.$attrs.time,"short-time":e.$attrs.shortTime,"is-active":!0,state:"SEARCHED"},on:{hover:e.$attrs.onHover,focus:e.$attrs.onFocus}},[e.$attrs.default?[t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}})]:e._e()],2)],1)],1)])},L=[];D._withStripped=!0;var l=b(H,D,L,!1,null,"7075ce8a",null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue";const O=l.exports;l.exports.__docgenInfo={displayName:"DtRecipeFeedItemRowVariants",exportName:"default",description:"",tags:{},slots:[{name:"icon"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_item_row/feed_item_row_variants.story.vue"]};const R={avatarImageUrl:"https://i1.sndcdn.com/avatars-000181324408-652e57-t500x500.jpg",displayName:"Dwight Schrute",time:"4:54 PM",shortTime:"4:54",onFocus:d("focus"),onHover:d("hover"),default:`<p class="d-fs-200 d-lh-400 d-wmx90ch">
  Elementum fames nullam elementum velit proin vitae aliquet.
  Platea nulla consectetur consequat sagittis nullam et ultricies nisl rhoncus
  aliquet elementum venenatis quisque.</p>`},F={default:{control:"text",table:{type:{summary:"VNode"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},threading:{name:"threading",control:"text",table:{category:"slots",type:{summary:"VNode"}}},reactions:{control:!1},menu:{control:!1},state:{defaultValue:c,options:Object.keys(S),control:{type:"select",labels:{undefined:"(empty)"}},table:{defaultValue:{summary:c}}},onFocus:{table:{disable:!0}},onHover:{table:{disable:!0}}},V={title:"Recipes/Conversation View/Feed Item Row",component:i,args:R,argTypes:F,excludeStories:/.*Data$/},N=(r,{argTypes:e})=>h(r,e,E),U=(r,{argTypes:e})=>h(r,e,O),s={render:N,args:{showHeader:!0,threading:"threading"}},o={render:U,args:{}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    threading: 'threading'
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,_,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {}
}`,...(v=(_=o.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const P=["argsData","argTypesData","Default","Variants"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Variants:o,__namedExportsOrder:P,argTypesData:F,argsData:R,default:V},Symbol.toStringTag,{value:"Module"}));export{s as D,X as F,o as V};
//# sourceMappingURL=feed_item_row.stories-2fc10464.js.map
